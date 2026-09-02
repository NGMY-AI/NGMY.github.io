-- NGMY — ngmy_settings allowlist (stop civic_* / payment / email blobs in Network tab)
-- Copy ALL of this into Supabase SQL Editor → Run.
-- After: redeploy bright-handler, hard-refresh ngmy.org, log out/in.

begin;

-- Helpers (reuse if already present from users RLS script)
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
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;

-- Only these keys may be read by anon/authenticated browsers.
-- Everything else: admin JWT only, or Edge (service role).
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
    'civic_self_enrollment_settings',
    'home_vote_ad_campaign',
    'ngmy_menu_publish_registry',
    'ngmy_bio_publish_registry',
    'ngmy_slides_transfer_qr_stashes_v1'
  )
  or p_key like 'ngmy_menu_pub_%'
  or p_key like 'ngmy_bio_pub_%'
  or p_key like 'ngmy_doc_share_code_v2_%'
  or p_key like 'ngmy_doc_share_stash_v2_%'
  or p_key like 'ngmy_essentials_code_v1_%'
  or p_key like 'ngmy_refcode_%';
$$;

revoke all on function public.ngmy_settings_public_readable(text) from public;
grant execute on function public.ngmy_settings_public_readable(text) to anon, authenticated, service_role;

-- Migrate cities/rooms out of public config into locked settings
do $$
declare
  real_col text;
  by_state jsonb := '{}'::jsonb;
  cities jsonb := '[]'::jsonb;
  rooms jsonb := '[]'::jsonb;
  built jsonb;
begin
  select c.column_name into real_col
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = 'config'
    and lower(c.column_name) = lower('civicCitiesByState')
  limit 1;
  if real_col is not null then
    begin
      execute format(
        'select coalesce(%I::jsonb, ''{}''::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col
      ) into by_state;
    exception when others then
      by_state := '{}'::jsonb;
    end;
    begin
      execute format('update public.config set %I = ''{}''::jsonb where true', real_col);
    exception when others then null; end;
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', real_col);
    exception when others then null; end;
  end if;

  select c.column_name into real_col
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = 'config'
    and lower(c.column_name) = lower('cities')
  limit 1;
  if real_col is not null then
    begin
      execute format(
        'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col
      ) into cities;
    exception when others then
      cities := '[]'::jsonb;
    end;
    begin
      execute format('update public.config set %I = ''[]''::jsonb where true', real_col);
    exception when others then null; end;
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', real_col);
    exception when others then null; end;
  end if;

  select c.column_name into real_col
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = 'config'
    and lower(c.column_name) = lower('rooms')
  limit 1;
  if real_col is not null then
    begin
      execute format(
        'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col
      ) into rooms;
    exception when others then
      rooms := '[]'::jsonb;
    end;
    begin
      execute format('update public.config set %I = ''[]''::jsonb where true', real_col);
    exception when others then null; end;
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', real_col);
    exception when others then null; end;
  end if;

  built := jsonb_build_object(
    'civicCitiesByState', coalesce(by_state, '{}'::jsonb),
    'cities', coalesce(cities, '[]'::jsonb),
    'rooms', coalesce(rooms, '[]'::jsonb),
    'migratedAt', to_jsonb(now()::text)
  );

  insert into public.ngmy_settings (key, value, updated_at)
  values ('civic_cities_rooms', built, now())
  on conflict (key) do update
  set value = case
    when coalesce(public.ngmy_settings.value->'civicCitiesByState', '{}'::jsonb) = '{}'::jsonb
         and coalesce(excluded.value->'civicCitiesByState', '{}'::jsonb) <> '{}'::jsonb
    then excluded.value
    else public.ngmy_settings.value
  end,
  updated_at = now();
end $$;

-- Replace ngmy_settings policies with allowlist
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

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

create policy "ngmy_settings_select_allowlist"
  on public.ngmy_settings for select
  using (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  );

create policy "ngmy_settings_insert_allowlist"
  on public.ngmy_settings for insert
  with check (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  );

create policy "ngmy_settings_update_allowlist"
  on public.ngmy_settings for update
  using (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  )
  with check (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  );

create policy "ngmy_settings_delete_allowlist"
  on public.ngmy_settings for delete
  using (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  );

commit;

select 'allowlist active' as status, policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
