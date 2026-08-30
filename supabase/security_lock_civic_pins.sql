-- NGMY — lock Civic Registry PINs for real (run in SQL Editor)
-- Your earlier REVOKE left privileges visible. This migrates PINs into
-- locked ngmy_settings and wipes public config columns so anon gets nothing.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- 1) Migrate PINs from config → ngmy_settings (only if settings row empty/missing)
do $$
declare
  g text := '';
  m jsonb := '{}'::jsonb;
  existing jsonb;
begin
  select coalesce(nullif(trim("civicRegistryPin"), ''), ''),
         coalesce("civicRegistryPinsByState", '{}'::jsonb)
    into g, m
  from public.config
  where id::text = '1'
  limit 1;

  select value into existing
  from public.ngmy_settings
  where key = 'civic_registry_pins';

  if existing is null then
    insert into public.ngmy_settings (key, value, updated_at)
    values (
      'civic_registry_pins',
      jsonb_build_object(
        'global', g,
        'byState', m,
        'migratedAt', to_jsonb(now()::text)
      ),
      now()
    );
  elsif coalesce(nullif(trim(existing->>'global'), ''), '') = ''
     and coalesce(existing->'byState', '{}'::jsonb) = '{}'::jsonb
     and (g <> '' or m <> '{}'::jsonb) then
    update public.ngmy_settings
    set value = jsonb_build_object(
          'global', g,
          'byState', m,
          'migratedAt', to_jsonb(now()::text)
        ),
        updated_at = now()
    where key = 'civic_registry_pins';
  end if;
end $$;

-- 2) Wipe public config PIN columns (anon select must return empty)
update public.config
set
  "civicRegistryPin" = '',
  "civicRegistryPinsByState" = '{}'::jsonb
where true;

-- 3) Recreate settings policies — deny roster + pins keys
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
  );

create policy "ngmy_settings_insert_nonsensitive"
  on public.ngmy_settings for insert
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
  );

create policy "ngmy_settings_update_nonsensitive"
  on public.ngmy_settings for update
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
  )
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
  );

create policy "ngmy_settings_delete_nonsensitive"
  on public.ngmy_settings for delete
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
  );

-- 4) Best-effort column revoke
do $$
declare
  col text;
begin
  foreach col in array array['civicRegistryPin', 'civicRegistryPinsByState'] loop
    begin
      execute format('revoke all (%I) on table public.config from anon, authenticated, public', col);
    exception when others then
      raise notice 'revoke %: %', col, sqlerrm;
    end;
  end loop;
end $$;

-- Verify wipe (must be empty pin + empty map)
select
  length(coalesce("civicRegistryPin", '')) as pin_len,
  coalesce("civicRegistryPinsByState", '{}'::jsonb) as pins_map
from public.config
where id::text = '1';

-- Policies should list nonsensitive only
select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
