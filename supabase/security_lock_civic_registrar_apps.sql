-- NGMY — lock civicRegistrarApplications (run in SQL Editor)
-- Moves registrar application PII off public config / open settings blobs.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- 1) Migrate from config → locked settings key
do $$
declare
  apps jsonb := '[]'::jsonb;
  existing jsonb;
  from_mgmt jsonb;
begin
  begin
    select coalesce("civicRegistrarApplications", '[]'::jsonb)
      into apps
    from public.config
    where id::text = '1'
    limit 1;
  exception when others then
    apps := '[]'::jsonb;
  end;

  -- Also pull from management_operational_lists if present
  select value->'civicRegistrarApplications' into from_mgmt
  from public.ngmy_settings
  where key = 'management_operational_lists';
  if from_mgmt is not null and jsonb_typeof(from_mgmt) = 'array'
     and jsonb_array_length(from_mgmt) > 0 then
    if apps is null or apps = '[]'::jsonb then
      apps := from_mgmt;
    end if;
  end if;

  select value into existing
  from public.ngmy_settings
  where key = 'civic_registrar_applications';

  if existing is null then
    insert into public.ngmy_settings (key, value, updated_at)
    values (
      'civic_registrar_applications',
      jsonb_build_object(
        'applications', coalesce(apps, '[]'::jsonb),
        'migratedAt', to_jsonb(now()::text)
      ),
      now()
    );
  elsif coalesce(existing->'applications', '[]'::jsonb) = '[]'::jsonb
     and apps is not null and apps <> '[]'::jsonb then
    update public.ngmy_settings
    set value = jsonb_build_object(
          'applications', apps,
          'migratedAt', to_jsonb(now()::text)
        ),
        updated_at = now()
    where key = 'civic_registrar_applications';
  end if;
end $$;

-- 2) Wipe public config column
update public.config
set "civicRegistrarApplications" = '[]'::jsonb
where true;

-- 3) Strip registrar apps from open management_operational_lists blob
update public.ngmy_settings
set value = coalesce(value, '{}'::jsonb) - 'civicRegistrarApplications',
    updated_at = now()
where key = 'management_operational_lists';

-- 4) Recreate settings policies — deny roster, pins, registrar apps
do $$
declare
  r record;
begin
  for r in
    select policyname
    from pg_policies
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
  );

create policy "ngmy_settings_insert_nonsensitive"
  on public.ngmy_settings for insert
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
  );

create policy "ngmy_settings_update_nonsensitive"
  on public.ngmy_settings for update
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
  )
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
  );

create policy "ngmy_settings_delete_nonsensitive"
  on public.ngmy_settings for delete
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_registrar_applications'
  );

-- 5) Best-effort column revoke
do $$
begin
  execute 'revoke all ("civicRegistrarApplications") on table public.config from anon, authenticated, public';
exception when others then
  raise notice 'revoke civicRegistrarApplications: %', sqlerrm;
end $$;

-- Verify wipe
select jsonb_array_length(coalesce("civicRegistrarApplications", '[]'::jsonb)) as apps_len
from public.config
where id::text = '1';

select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
