-- NGMY — lock remaining config PII blobs (loans, games, help, jobs, store)
-- Safe on DBs where some columns (e.g. storeInquiries) do not exist.
-- Run in SQL Editor after redeploying bright-handler with privateLists* actions.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- Helper: only migrate if the config column exists
create or replace function public._ngmy_migrate_config_json_to_settings(
  p_settings_key text,
  p_config_col text,
  p_value_wrap_key text default 'items'
) returns void
language plpgsql
security definer
as $$
declare
  raw jsonb;
  existing jsonb;
  wrapped jsonb;
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'config' and column_name = p_config_col
  ) then
    raise notice 'skip migrate missing column config.%', p_config_col;
    return;
  end if;

  execute format(
    'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
    p_config_col
  ) into raw;

  if raw is null then
    raw := '[]'::jsonb;
  end if;

  select value into existing from public.ngmy_settings where key = p_settings_key;

  wrapped := jsonb_build_object(
    p_value_wrap_key, raw,
    'migratedAt', to_jsonb(now()::text)
  );

  if existing is null then
    insert into public.ngmy_settings (key, value, updated_at)
    values (p_settings_key, wrapped, now());
  elsif coalesce(existing->p_value_wrap_key, '[]'::jsonb) = '[]'::jsonb
     and raw is not null and raw <> '[]'::jsonb and raw <> '{}'::jsonb then
    update public.ngmy_settings
    set value = wrapped, updated_at = now()
    where key = p_settings_key;
  end if;
exception when others then
  raise notice 'migrate % -> %: %', p_config_col, p_settings_key, sqlerrm;
end $$;

-- Wipe one config column if it exists (jsonb empty array, or {} for map-like cols)
create or replace function public._ngmy_wipe_config_col(
  p_config_col text,
  p_empty text default '[]'
) returns void
language plpgsql
security definer
as $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'config' and column_name = p_config_col
  ) then
    raise notice 'skip wipe missing column config.%', p_config_col;
    return;
  end if;
  execute format(
    'update public.config set %I = %L::jsonb where true',
    p_config_col,
    p_empty
  );
exception when others then
  -- column may be text not jsonb
  begin
    execute format(
      'update public.config set %I = %L where true',
      p_config_col,
      p_empty
    );
  exception when others then
    raise notice 'wipe %: %', p_config_col, sqlerrm;
  end;
end $$;

-- 1) Ensure management_operational_lists exists
do $$
declare
  existing jsonb;
  built jsonb := '{}'::jsonb;
  col text;
  cols text[] := array[
    'loanApplications','jobWorkerApplications','jobPosts',
    'helpHelperApplications','helpRequests','helpBusinesses'
  ];
  raw jsonb;
begin
  select value into existing from public.ngmy_settings where key = 'management_operational_lists';
  if existing is not null then
    return;
  end if;

  foreach col in array cols loop
    if exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = 'config' and column_name = col
    ) then
      begin
        execute format(
          'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
          col
        ) into raw;
        built := built || jsonb_build_object(col, coalesce(raw, '[]'::jsonb));
      exception when others then
        built := built || jsonb_build_object(col, '[]'::jsonb);
      end;
    else
      built := built || jsonb_build_object(col, '[]'::jsonb);
    end if;
  end loop;

  built := built || jsonb_build_object('migratedAt', to_jsonb(now()::text));
  insert into public.ngmy_settings (key, value, updated_at)
  values ('management_operational_lists', built, now());
exception when others then
  raise notice 'mgmt migrate: %', sqlerrm;
end $$;

select public._ngmy_migrate_config_json_to_settings('game_invites', 'gameInvites', 'items');
select public._ngmy_migrate_config_json_to_settings('store_inquiries', 'storeInquiries', 'items');
select public._ngmy_migrate_config_json_to_settings('store_orders', 'storeOrders', 'items');
select public._ngmy_migrate_config_json_to_settings('media_virtual_profiles', 'mediaVirtualProfiles', 'items');
select public._ngmy_migrate_config_json_to_settings('family_tree_photo_access', 'familyTreePhotoAccessUntilByEmail', 'byEmail');

-- 2) Wipe only columns that exist
select public._ngmy_wipe_config_col('loanApplications', '[]');
select public._ngmy_wipe_config_col('jobWorkerApplications', '[]');
select public._ngmy_wipe_config_col('jobPosts', '[]');
select public._ngmy_wipe_config_col('helpHelperApplications', '[]');
select public._ngmy_wipe_config_col('helpRequests', '[]');
select public._ngmy_wipe_config_col('helpBusinesses', '[]');
select public._ngmy_wipe_config_col('gameInvites', '[]');
select public._ngmy_wipe_config_col('storeInquiries', '[]');
select public._ngmy_wipe_config_col('storeOrders', '[]');
select public._ngmy_wipe_config_col('mediaVirtualProfiles', '[]');
select public._ngmy_wipe_config_col('familyTreePhotoAccessUntilByEmail', '{}');

-- 3) Recreate ngmy_settings policies with full deny list
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
  );

-- 4) Best-effort column revoke (only if column exists)
do $$
declare
  col text;
  cols text[] := array[
    'loanApplications','jobWorkerApplications','jobPosts',
    'helpHelperApplications','helpRequests','helpBusinesses',
    'gameInvites','storeInquiries','storeOrders',
    'mediaVirtualProfiles','familyTreePhotoAccessUntilByEmail'
  ];
begin
  foreach col in array cols loop
    if exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = 'config' and column_name = col
    ) then
      begin
        execute format('revoke all (%I) on table public.config from anon, authenticated, public', col);
      exception when others then
        raise notice 'revoke %: %', col, sqlerrm;
      end;
    end if;
  end loop;
end $$;

drop function if exists public._ngmy_migrate_config_json_to_settings(text, text, text);
drop function if exists public._ngmy_wipe_config_col(text, text);

-- Verify: which PII columns exist + are empty (missing columns show as null)
select
  case when exists (
    select 1 from information_schema.columns
    where table_schema='public' and table_name='config' and column_name='loanApplications'
  ) then (
    select jsonb_array_length(coalesce("loanApplications"::jsonb, '[]'::jsonb))
    from public.config where id::text = '1' limit 1
  ) else null end as loans,
  case when exists (
    select 1 from information_schema.columns
    where table_schema='public' and table_name='config' and column_name='gameInvites'
  ) then (
    select jsonb_array_length(coalesce("gameInvites"::jsonb, '[]'::jsonb))
    from public.config where id::text = '1' limit 1
  ) else null end as invites,
  case when exists (
    select 1 from information_schema.columns
    where table_schema='public' and table_name='config' and column_name='storeInquiries'
  ) then (
    select jsonb_array_length(coalesce("storeInquiries"::jsonb, '[]'::jsonb))
    from public.config where id::text = '1' limit 1
  ) else null end as inquiries;

select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
