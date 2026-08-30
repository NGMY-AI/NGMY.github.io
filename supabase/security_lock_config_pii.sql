-- NGMY — lock remaining config PII blobs (loans, games, help, jobs, store)
-- Run in SQL Editor after redeploying bright-handler with privateLists* actions.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- Helper: copy one config jsonb column into a locked settings key (if empty/missing)
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
  execute format(
    'select coalesce(%I, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
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

-- 1) Ensure management_operational_lists exists (may already); keep as-is content
-- If missing, build from config columns
do $$
declare
  existing jsonb;
  built jsonb;
begin
  select value into existing from public.ngmy_settings where key = 'management_operational_lists';
  if existing is null then
    select jsonb_build_object(
      'loanApplications', coalesce(c."loanApplications", '[]'::jsonb),
      'jobWorkerApplications', coalesce(c."jobWorkerApplications", '[]'::jsonb),
      'jobPosts', coalesce(c."jobPosts", '[]'::jsonb),
      'helpHelperApplications', coalesce(c."helpHelperApplications", '[]'::jsonb),
      'helpRequests', coalesce(c."helpRequests", '[]'::jsonb),
      'helpBusinesses', coalesce(c."helpBusinesses", '[]'::jsonb),
      'migratedAt', to_jsonb(now()::text)
    )
    into built
    from public.config c
    where c.id::text = '1'
    limit 1;

    if built is not null then
      insert into public.ngmy_settings (key, value, updated_at)
      values ('management_operational_lists', built, now());
    end if;
  end if;
exception when others then
  raise notice 'mgmt migrate: %', sqlerrm;
end $$;

select public._ngmy_migrate_config_json_to_settings('game_invites', 'gameInvites', 'items');
select public._ngmy_migrate_config_json_to_settings('store_inquiries', 'storeInquiries', 'items');
select public._ngmy_migrate_config_json_to_settings('store_orders', 'storeOrders', 'items');
select public._ngmy_migrate_config_json_to_settings('media_virtual_profiles', 'mediaVirtualProfiles', 'items');
select public._ngmy_migrate_config_json_to_settings('family_tree_photo_access', 'familyTreePhotoAccessUntilByEmail', 'byEmail');

-- 2) Wipe public config PII columns
update public.config set
  "loanApplications" = '[]'::jsonb,
  "jobWorkerApplications" = '[]'::jsonb,
  "jobPosts" = '[]'::jsonb,
  "helpHelperApplications" = '[]'::jsonb,
  "helpRequests" = '[]'::jsonb,
  "helpBusinesses" = '[]'::jsonb,
  "gameInvites" = '[]'::jsonb,
  "storeInquiries" = '[]'::jsonb,
  "storeOrders" = '[]'::jsonb,
  "mediaVirtualProfiles" = '[]'::jsonb,
  "familyTreePhotoAccessUntilByEmail" = '{}'::jsonb
where true;

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

-- 4) Best-effort column revoke
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
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', col);
    exception when others then
      raise notice 'revoke %: %', col, sqlerrm;
    end;
  end loop;
end $$;

drop function if exists public._ngmy_migrate_config_json_to_settings(text, text, text);

-- Verify wipes
select
  jsonb_array_length(coalesce("loanApplications", '[]'::jsonb)) as loans,
  jsonb_array_length(coalesce("gameInvites", '[]'::jsonb)) as invites,
  jsonb_array_length(coalesce("storeInquiries", '[]'::jsonb)) as inquiries
from public.config
where id::text = '1';

select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
