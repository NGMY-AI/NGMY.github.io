-- NGMY — lock users directory + help campaign spendings PII
-- Copy ALL of this into Supabase SQL Editor → Run.
-- After success: redeploy bright-handler, then log out and log in on ngmy.org.

begin;

-- ── Helpers (JWT email + admin allowlist) ──
create or replace function public.ngmy_jwt_email()
returns text
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''));
$$;

create or replace function public.is_ngmy_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
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
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;

-- ── USERS: drop every policy, keep only own-row (or admin) ──
do $$
declare
  r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'users'
  loop
    execute format('drop policy if exists %I on public.users', r.policyname);
  end loop;
end $$;

alter table public.users enable row level security;
alter table public.users force row level security;

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

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated, public;
  end if;
end $$;

-- ── TRANSACTIONS: own rows only (or admin) ──
do $$
declare
  r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'transactions'
  loop
    execute format('drop policy if exists %I on public.transactions', r.policyname);
  end loop;
end $$;

alter table public.transactions enable row level security;
alter table public.transactions force row level security;

create policy "txn_select_own_or_admin" on public.transactions
  for select using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_insert_own_or_admin" on public.transactions
  for insert with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_update_own_or_admin" on public.transactions
  for update using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  ) with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_delete_admin_only" on public.transactions
  for delete using (public.is_ngmy_admin());

-- ── Help campaign spendings: migrate out of open settings / config ──
do $$
declare
  help_val jsonb;
  spendings jsonb := '[]'::jsonb;
  cleaned jsonb;
  real_col text;
begin
  select value into help_val
  from public.ngmy_settings
  where key = 'civic_help_mode_settings';

  if help_val is not null then
    spendings := coalesce(help_val->'helpCampaignSpendings', '[]'::jsonb);
    cleaned := help_val - 'helpCampaignSpendings';
    update public.ngmy_settings
    set value = cleaned, updated_at = now()
    where key = 'civic_help_mode_settings';
  end if;

  select c.column_name into real_col
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = 'config'
    and lower(c.column_name) = lower('helpCampaignSpendings')
  limit 1;

  if real_col is not null then
    begin
      execute format(
        'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col
      ) into spendings;
    exception when others then
      null;
    end;
    begin
      execute format('update public.config set %I = ''[]''::jsonb where true', real_col);
    exception when others then
      begin
        execute format('update public.config set %I = ''[]'' where true', real_col);
      exception when others then
        null;
      end;
    end;
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', real_col);
    exception when others then
      null;
    end;
  end if;

  insert into public.ngmy_settings (key, value, updated_at)
  values (
    'civic_help_campaign_spendings',
    jsonb_build_object('items', coalesce(spendings, '[]'::jsonb), 'migratedAt', to_jsonb(now()::text)),
    now()
  )
  on conflict (key) do update
  set value = case
    when coalesce(public.ngmy_settings.value->'items', '[]'::jsonb) = '[]'::jsonb
         and coalesce(excluded.value->'items', '[]'::jsonb) <> '[]'::jsonb
    then excluded.value
    else public.ngmy_settings.value
  end,
  updated_at = now();
end $$;

-- ── ngmy_settings: deny locked keys (incl. help spendings) ──
do $$
declare
  r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'ngmy_settings'
  loop
    execute format('drop policy if exists %I on public.ngmy_settings', r.policyname);
  end loop;
end $$;

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

create policy "ngmy_settings_select_nonsensitive"
  on public.ngmy_settings for select
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'ngmy_loan_status_map_v1'
    and key is distinct from 'ngmy_loan_payments_map_v1'
    and key is distinct from 'civic_help_campaign_spendings'
  );

create policy "ngmy_settings_insert_nonsensitive"
  on public.ngmy_settings for insert
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'ngmy_loan_status_map_v1'
    and key is distinct from 'ngmy_loan_payments_map_v1'
    and key is distinct from 'civic_help_campaign_spendings'
  );

create policy "ngmy_settings_update_nonsensitive"
  on public.ngmy_settings for update
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'ngmy_loan_status_map_v1'
    and key is distinct from 'ngmy_loan_payments_map_v1'
    and key is distinct from 'civic_help_campaign_spendings'
  )
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'ngmy_loan_status_map_v1'
    and key is distinct from 'ngmy_loan_payments_map_v1'
    and key is distinct from 'civic_help_campaign_spendings'
  );

create policy "ngmy_settings_delete_nonsensitive"
  on public.ngmy_settings for delete
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'ngmy_loan_status_map_v1'
    and key is distinct from 'ngmy_loan_payments_map_v1'
    and key is distinct from 'civic_help_campaign_spendings'
  );

commit;

-- Verify
select 'users/txn policies' as check_name, tablename, policyname, cmd
from pg_policies
where schemaname = 'public' and tablename in ('users', 'transactions')
order by tablename, policyname;

select 'settings deny help spendings' as check_name, policyname
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
  and qual::text like '%civic_help_campaign_spendings%';
