-- NGMY security audit hardening — 2026-09-27
-- Run ALL of this in Supabase → SQL Editor.
-- Strengthens policies only. Does not grant new public access.
-- After this file: redeploy bright-handler (claim-token reads move to service role).

begin;

-- ── Helpers ──────────────────────────────────────────────────────────────
create or replace function public.ngmy_jwt_email()
returns text language sql stable as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''));
$$;

create or replace function public.is_ngmy_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.ngmy_jwt_email() in (
    'kbpabloqr@gmail.com',
    'ngumoyaking@gmail.com',
    'appbusiness321@gmail.com',
    'appbusiness84@gmail.com'
  );
$$;

revoke all on function public.ngmy_jwt_email() from public;
revoke all on function public.is_ngmy_admin() from public;
grant execute on function public.ngmy_jwt_email() to anon, authenticated, service_role;
-- Anon must keep EXECUTE: RLS expressions call this helper.
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;

-- Catalog pages only. Share codes, stashes, referral indexes, and slide vaults
-- are NOT listed here — PostgREST SELECT * would otherwise dump every token.
create or replace function public.ngmy_settings_public_readable(p_key text)
returns boolean
language sql
stable
as $$
  select p_key in (
    'ngmy_popups',
    'ngmy_chat_closed',
    'terms_and_conditions',
    'privacy_policy',
    'investment_plans',
    'ngmy_app_branding',
    'home_vote_ad_campaign',
    'ngmy_menu_publish_registry',
    'ngmy_bio_publish_registry'
  )
  or p_key like 'ngmy_menu_pub_%'
  or p_key like 'ngmy_bio_pub_%';
$$;

revoke all on function public.ngmy_settings_public_readable(text) from public;
grant execute on function public.ngmy_settings_public_readable(text) to anon, authenticated, service_role;

create or replace function public.ngmy_settings_civic_shared(p_key text)
returns boolean language sql stable as $$
  select p_key in (
    'civic_help_mode_settings',
    'civic_contribution_receipt_removed',
    'civic_deleted_contribution_ids',
    'civic_help_campaign_spendings',
    'civic_user_groups_v1'
  );
$$;

revoke all on function public.ngmy_settings_civic_shared(text) from public;
grant execute on function public.ngmy_settings_civic_shared(text) to anon, authenticated, service_role;

create or replace function public.is_ngmy_registrar()
returns boolean language sql stable security definer set search_path = public as $$
  select public.ngmy_jwt_email() <> '' and (
    exists (
      select 1 from public.users u
      where lower(coalesce(u.email, '')) = public.ngmy_jwt_email()
        and (
          coalesce(u."isAuthorizedRegistrar", false) = true
          or coalesce(u."isCivicRegistryAdmin", false) = true
          or coalesce(u."isCivicRegistryKing", false) = true
        )
    )
    or exists (
      select 1
      from public.ngmy_settings s,
           lateral jsonb_array_elements(
             case
               when jsonb_typeof(s.value -> 'applications') = 'array'
                 then s.value -> 'applications'
               else '[]'::jsonb
             end
           ) as app
      where s.key = 'civic_registrar_applications'
        and lower(coalesce(app ->> 'status', '')) = 'approved'
        and lower(coalesce(app ->> 'userEmail', app ->> 'email', '')) = public.ngmy_jwt_email()
    )
  );
$$;

revoke all on function public.is_ngmy_registrar() from public;
grant execute on function public.is_ngmy_registrar() to anon, authenticated, service_role;

-- ── ngmy_settings: drop every policy, allowlist only ─────────────────────
alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

do $$
declare r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'ngmy_settings'
  loop
    execute format('drop policy if exists %I on public.ngmy_settings', r.policyname);
  end loop;
end $$;

create policy "ngmy_settings_select_catalog"
  on public.ngmy_settings for select
  using (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
    or (
      public.ngmy_jwt_email() <> ''
      and public.ngmy_settings_civic_shared(key)
    )
  );

-- Catalog writes are admin-only (was: any signed-in user could overwrite branding/terms).
create policy "ngmy_settings_insert_admin_or_civic"
  on public.ngmy_settings for insert
  with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_jwt_email() <> ''
      and public.ngmy_settings_civic_shared(key)
      and public.is_ngmy_registrar()
    )
  );

create policy "ngmy_settings_update_admin_or_civic"
  on public.ngmy_settings for update
  using (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_civic_shared(key)
      and public.is_ngmy_registrar()
    )
  )
  with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_civic_shared(key)
      and public.is_ngmy_registrar()
    )
  );

create policy "ngmy_settings_delete_admin_only"
  on public.ngmy_settings for delete
  using (public.is_ngmy_admin());

-- ── users / transactions: own row only; delete admin-only ────────────────
alter table public.users enable row level security;
alter table public.users force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='users'
  loop execute format('drop policy if exists %I on public.users', r.policyname); end loop;
end $$;

create policy "users_select_own_or_admin" on public.users
  for select using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );
create policy "users_insert_own_or_admin" on public.users
  for insert with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );
create policy "users_update_own_or_admin" on public.users
  for update using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  ) with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );
create policy "users_delete_admin_only" on public.users
  for delete using (public.is_ngmy_admin());

alter table public.transactions enable row level security;
alter table public.transactions force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='transactions'
  loop execute format('drop policy if exists %I on public.transactions', r.policyname); end loop;
end $$;

create policy "txn_select_own" on public.transactions
  for select using (
    public.ngmy_jwt_email() <> ''
    and (
      lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
      or (
        type in (5, 6)
        and (public.is_ngmy_admin() or public.is_ngmy_registrar())
      )
    )
  );
create policy "txn_insert_own_or_admin" on public.transactions
  for insert with check (
    public.is_ngmy_admin()
    or public.is_ngmy_registrar()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  );
create policy "txn_update_own_or_admin" on public.transactions
  for update using (
    public.is_ngmy_admin()
    or public.is_ngmy_registrar()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  ) with check (
    public.is_ngmy_admin()
    or public.is_ngmy_registrar()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  );
create policy "txn_delete_admin_only" on public.transactions
  for delete using (public.is_ngmy_admin());

-- Block client privilege flags (isAdmin already protected; extend to registrar).
create or replace function public.ngmy_protect_privileged_user_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.role() = 'service_role' then
    return new;
  end if;
  if tg_op = 'INSERT' then
    if new."isAdmin" is distinct from false then
      new."isAdmin" := false;
    end if;
    begin new."isAuthorizedRegistrar" := false; exception when undefined_column then null; end;
    begin new."isCivicRegistryAdmin" := false; exception when undefined_column then null; end;
    begin new."isCivicRegistryKing" := false; exception when undefined_column then null; end;
    return new;
  end if;
  if tg_op = 'UPDATE' then
    new."isAdmin" := old."isAdmin";
    begin new."isAuthorizedRegistrar" := old."isAuthorizedRegistrar"; exception when undefined_column then null; end;
    begin new."isCivicRegistryAdmin" := old."isCivicRegistryAdmin"; exception when undefined_column then null; end;
    begin new."isCivicRegistryKing" := old."isCivicRegistryKing"; exception when undefined_column then null; end;
    return new;
  end if;
  return new;
end;
$$;

drop trigger if exists ngmy_protect_is_admin_trg on public.users;
drop trigger if exists ngmy_protect_privileged_user_columns_trg on public.users;
create trigger ngmy_protect_privileged_user_columns_trg
  before insert or update on public.users
  for each row execute function public.ngmy_protect_privileged_user_columns();

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated, public;
  end if;
end $$;

-- ── media: public read, no anonymous writes ──────────────────────────────
alter table public.media enable row level security;
alter table public.media force row level security;

drop policy if exists "media_update_public" on public.media;
drop policy if exists "media_update" on public.media;
drop policy if exists "media_read" on public.media;
drop policy if exists "media_insert" on public.media;
drop policy if exists "media_delete" on public.media;

drop policy if exists "media_select_public" on public.media;
create policy "media_select_public" on public.media for select using (true);

drop policy if exists "media_insert_own_or_admin" on public.media;
create policy "media_insert_own_or_admin" on public.media
  for insert to authenticated
  with check (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());

drop policy if exists "media_update_authenticated" on public.media;
create policy "media_update_authenticated" on public.media
  for update to authenticated
  using (true)
  with check (true);

drop policy if exists "media_delete_own_or_admin" on public.media;
create policy "media_delete_own_or_admin" on public.media
  for delete to authenticated
  using (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());

-- Identity fields stay frozen for non-owners (existing trigger).
create or replace function public.ngmy_media_protect_identity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if public.is_ngmy_admin() then
    return new;
  end if;
  if public.ngmy_jwt_email() <> ''
     and lower(coalesce(old."userEmail", '')) = public.ngmy_jwt_email() then
    return new;
  end if;
  new.id := old.id;
  begin new."userEmail" := old."userEmail"; exception when undefined_column then null; end;
  begin new.username := old.username; exception when undefined_column then null; end;
  begin new."videoUrl" := old."videoUrl"; exception when undefined_column then null; end;
  begin new."contentType" := old."contentType"; exception when undefined_column then null; end;
  begin new.caption := old.caption; exception when undefined_column then null; end;
  begin new."timestamp" := old."timestamp"; exception when undefined_column then null; end;
  begin new.url := old.url; exception when undefined_column then null; end;
  begin new.type := old.type; exception when undefined_column then null; end;
  return new;
end;
$$;

-- ── config writes stay admin-only; select unchanged (column grants hide secrets)
alter table public.config enable row level security;
alter table public.config force row level security;
drop policy if exists "config_update" on public.config;
drop policy if exists "config_write" on public.config;
drop policy if exists "config_write_all_insert" on public.config;
drop policy if exists "config_write_all_update" on public.config;
drop policy if exists "config_update_admin_only" on public.config;
drop policy if exists "config_insert_admin_only" on public.config;
create policy "config_update_admin_only" on public.config
  for update using (public.is_ngmy_admin()) with check (public.is_ngmy_admin());
create policy "config_insert_admin_only" on public.config
  for insert with check (public.is_ngmy_admin());

-- ── stripe / otp / rate limits: no client writes; stripe read own-or-admin
alter table public.ngmy_stripe_access enable row level security;
alter table public.ngmy_stripe_access force row level security;
do $$
declare r record;
begin
  if to_regclass('public.ngmy_stripe_access') is null then
    return;
  end if;
  for r in select policyname from pg_policies where schemaname='public' and tablename='ngmy_stripe_access'
  loop execute format('drop policy if exists %I on public.ngmy_stripe_access', r.policyname); end loop;
end $$;
create policy "ngmy_stripe_access_select_own_or_admin" on public.ngmy_stripe_access
  for select using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce(email, '')) = public.ngmy_jwt_email())
  );

do $$
begin
  if to_regclass('public.ngmy_password_reset_otp') is not null then
    execute 'alter table public.ngmy_password_reset_otp enable row level security';
    execute 'alter table public.ngmy_password_reset_otp force row level security';
    execute 'revoke all on public.ngmy_password_reset_otp from anon, authenticated, public';
  end if;
  if to_regclass('public.ngmy_rate_limits') is not null then
    execute 'revoke all on public.ngmy_rate_limits from anon, authenticated, public';
  end if;
  if to_regclass('public.ngmy_security_events') is not null then
    execute 'revoke all on public.ngmy_security_events from anon, authenticated, public';
  end if;
end $$;

-- ── Dangerous RPCs: never callable with the anon key ─────────────────────
revoke all on function public.ngmy_store_contact(text) from public, anon;
grant execute on function public.ngmy_store_contact(text) to authenticated, service_role;

revoke all on function public.ngmy_consume_rate_limit(text, text, integer, integer) from public, anon, authenticated;
grant execute on function public.ngmy_consume_rate_limit(text, text, integer, integer) to service_role;

revoke all on function public.ngmy_platform_live_stats() from public, anon;
grant execute on function public.ngmy_platform_live_stats() to authenticated, service_role;

do $$
begin
  if exists (
    select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = '_ngmy_lock_config_col'
  ) then
    execute 'revoke all on function public._ngmy_lock_config_col(text, text, text, text) from public, anon, authenticated';
  end if;
exception when undefined_function then
  null;
end $$;

create or replace function public.ngmy_store_contact(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = public
stable
as $$
declare
  want text := lower(trim(coalesce(p_email, '')));
  rec record;
  allowed boolean := false;
begin
  if public.ngmy_jwt_email() = '' then
    return null;
  end if;
  if want = '' then
    return null;
  end if;
  if public.is_ngmy_admin() or public.ngmy_jwt_email() = want then
    allowed := true;
  else
    begin
      select exists (
        select 1 from public.store_listings sl
        where lower(coalesce(sl.data->>'sellerEmail', sl.data->>'seller_email', '')) = want
          and (
            lower(coalesce(sl.data->>'buyerEmail', sl.data->>'buyer_email', '')) = public.ngmy_jwt_email()
            or lower(coalesce(sl.data->>'sellerEmail', sl.data->>'seller_email', '')) = public.ngmy_jwt_email()
          )
      ) into allowed;
    exception when undefined_table then
      allowed := false;
    end;
  end if;
  if not allowed then
    return null;
  end if;
  select u.email, u.username, u.phone, u."profilePicturePath" as pic
  into rec
  from public.users u
  where lower(u.email) = want
  limit 1;
  if not found then
    return null;
  end if;
  return jsonb_build_object(
    'email', rec.email,
    'username', rec.username,
    'phone', rec.phone,
    'profilePicturePath', rec.pic
  );
end;
$$;

-- ── Storage: public read/insert (uploads). Update/delete = owner or admin.
drop policy if exists "ngmy_media_update" on storage.objects;
drop policy if exists "ngmy_media_delete" on storage.objects;
drop policy if exists "ngmy_media_update_owner" on storage.objects;
drop policy if exists "ngmy_media_delete_owner" on storage.objects;
create policy "ngmy_media_update_owner"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media' and (owner = auth.uid() or public.is_ngmy_admin()))
  with check (bucket_id = 'media' and (owner = auth.uid() or public.is_ngmy_admin()));
create policy "ngmy_media_delete_owner"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media' and (owner = auth.uid() or public.is_ngmy_admin()));

-- ── Realtime: only tables the app still listens to ───────────────────────
do $$
declare
  t text;
  drop_tables text[] := array['users', 'transactions', 'media', 'announcements', 'store_inquiries'];
begin
  foreach t in array drop_tables loop
    if exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime drop table public.%I', t);
    end if;
  end loop;
end $$;

commit;

select tablename, policyname, cmd
from pg_policies
where schemaname = 'public'
  and tablename in ('users','transactions','ngmy_settings','media','config','ngmy_stripe_access')
order by tablename, policyname;
