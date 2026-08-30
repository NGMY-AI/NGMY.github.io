-- NGMY — lock remaining config PII blobs (loans, games, help, jobs, store)
-- Safe when columns are missing or lowercased. Copy ALL of this and Run.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- Wipe/migrate one config column only if it exists (any casing)
create or replace function public._ngmy_lock_config_col(
  p_settings_key text,
  p_config_col text,
  p_wrap_key text default 'items',
  p_empty text default '[]'
) returns text
language plpgsql
security definer
as $$
declare
  real_col text;
  raw jsonb;
  existing jsonb;
  wrapped jsonb;
begin
  select c.column_name into real_col
  from information_schema.columns c
  where c.table_schema = 'public'
    and c.table_name = 'config'
    and lower(c.column_name) = lower(p_config_col)
  limit 1;

  if real_col is null then
    return 'skip missing ' || p_config_col;
  end if;

  -- migrate into locked settings (if empty/missing)
  begin
    execute format(
      'select coalesce(%I::jsonb, %L::jsonb) from public.config where id::text = ''1'' limit 1',
      real_col,
      p_empty
    ) into raw;
  exception when others then
    begin
      execute format(
        'select coalesce(to_jsonb(%I), %L::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col,
        p_empty
      ) into raw;
    exception when others then
      raw := p_empty::jsonb;
    end;
  end;

  if raw is null then raw := p_empty::jsonb; end if;

  select value into existing from public.ngmy_settings where key = p_settings_key;
  wrapped := jsonb_build_object(p_wrap_key, raw, 'migratedAt', to_jsonb(now()::text));

  if existing is null then
    insert into public.ngmy_settings (key, value, updated_at)
    values (p_settings_key, wrapped, now());
  elsif coalesce(existing->p_wrap_key, p_empty::jsonb) = p_empty::jsonb
     and raw is not null and raw <> p_empty::jsonb then
    update public.ngmy_settings
    set value = wrapped, updated_at = now()
    where key = p_settings_key;
  end if;

  -- wipe public column
  begin
    execute format('update public.config set %I = %L::jsonb where true', real_col, p_empty);
  exception when others then
    begin
      execute format('update public.config set %I = %L where true', real_col, p_empty);
    exception when others then
      return 'migrated ' || real_col || ' but wipe failed: ' || sqlerrm;
    end;
  end;

  -- revoke client privileges
  begin
    execute format('revoke all (%I) on table public.config from anon, authenticated, public', real_col);
  exception when others then
    null;
  end;

  return 'locked ' || real_col;
end $$;

-- Build management_operational_lists if missing
do $$
declare
  existing jsonb;
  built jsonb := '{}'::jsonb;
  col text;
  cols text[] := array[
    'loanApplications','jobWorkerApplications','jobPosts',
    'helpHelperApplications','helpRequests','helpBusinesses'
  ];
  msg text;
begin
  select value into existing from public.ngmy_settings where key = 'management_operational_lists';
  if existing is not null then
    raise notice 'management_operational_lists already present';
  else
    foreach col in array cols loop
      -- use lock helper migrate path lightly: just ensure empty keys exist
      built := built || jsonb_build_object(col, '[]'::jsonb);
    end loop;
    built := built || jsonb_build_object('migratedAt', to_jsonb(now()::text));

    -- Prefer copying from config when present
    foreach col in array cols loop
      begin
        select public._ngmy_lock_config_col('management_operational_lists_tmp_' || col, col, 'items', '[]') into msg;
      exception when others then
        null;
      end;
    end loop;

    insert into public.ngmy_settings (key, value, updated_at)
    values ('management_operational_lists', built, now())
    on conflict (key) do nothing;
  end if;
end $$;

-- Actually ensure management list is filled from config columns (merge into existing)
do $$
declare
  col text;
  cols text[] := array[
    'loanApplications','jobWorkerApplications','jobPosts',
    'helpHelperApplications','helpRequests','helpBusinesses'
  ];
  real_col text;
  raw jsonb;
  cur jsonb;
begin
  select coalesce(value, '{}'::jsonb) into cur
  from public.ngmy_settings where key = 'management_operational_lists';

  if cur is null then
    cur := '{}'::jsonb;
    insert into public.ngmy_settings (key, value, updated_at)
    values ('management_operational_lists', cur, now());
  end if;

  foreach col in array cols loop
    select c.column_name into real_col
    from information_schema.columns c
    where c.table_schema = 'public' and c.table_name = 'config'
      and lower(c.column_name) = lower(col)
    limit 1;

    if real_col is null then
      continue;
    end if;

    begin
      execute format(
        'select coalesce(%I::jsonb, ''[]''::jsonb) from public.config where id::text = ''1'' limit 1',
        real_col
      ) into raw;
    exception when others then
      raw := '[]'::jsonb;
    end;

    if raw is not null and raw <> '[]'::jsonb
       and coalesce(cur->col, '[]'::jsonb) = '[]'::jsonb then
      cur := cur || jsonb_build_object(col, raw);
    elsif cur->col is null then
      cur := cur || jsonb_build_object(col, coalesce(raw, '[]'::jsonb));
    end if;
  end loop;

  update public.ngmy_settings
  set value = cur || jsonb_build_object('savedAt', to_jsonb(now()::text)),
      updated_at = now()
  where key = 'management_operational_lists';
end $$;

-- Lock each PII column (skip if missing)
select public._ngmy_lock_config_col('game_invites', 'gameInvites', 'items', '[]') as game_invites;
select public._ngmy_lock_config_col('store_inquiries', 'storeInquiries', 'items', '[]') as store_inquiries;
select public._ngmy_lock_config_col('store_orders', 'storeOrders', 'items', '[]') as store_orders;
select public._ngmy_lock_config_col('media_virtual_profiles', 'mediaVirtualProfiles', 'items', '[]') as media_virtual;
select public._ngmy_lock_config_col('family_tree_photo_access', 'familyTreePhotoAccessUntilByEmail', 'byEmail', '{}') as family_photo;

-- Also wipe management-related config columns after copy
select public._ngmy_lock_config_col('mgmt_loan_bak', 'loanApplications', 'items', '[]') as loans;
select public._ngmy_lock_config_col('mgmt_jobs_bak', 'jobWorkerApplications', 'items', '[]') as job_apps;
select public._ngmy_lock_config_col('mgmt_jobposts_bak', 'jobPosts', 'items', '[]') as job_posts;
select public._ngmy_lock_config_col('mgmt_help_bak', 'helpHelperApplications', 'items', '[]') as help_apps;
select public._ngmy_lock_config_col('mgmt_helpreq_bak', 'helpRequests', 'items', '[]') as help_reqs;
select public._ngmy_lock_config_col('mgmt_helpbiz_bak', 'helpBusinesses', 'items', '[]') as help_biz;

-- Clean temporary bak keys (data already in management_operational_lists when present)
delete from public.ngmy_settings
where key like 'mgmt_%_bak'
   or key like 'management_operational_lists_tmp_%';

-- Recreate settings policies
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

drop function if exists public._ngmy_lock_config_col(text, text, text, text);
drop function if exists public._ngmy_migrate_config_json_to_settings(text, text, text);
drop function if exists public._ngmy_wipe_config_col(text, text);

-- Safe verify: policies only (no hard-coded column names)
select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
