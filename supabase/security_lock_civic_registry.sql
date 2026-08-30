-- NGMY — lock Civic Registry roster blob (run in SQL Editor)
-- Denies anon/authenticated from reading/writing civic_registry_members.
-- App must use bright-handler Edge Function for role-filtered access.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

-- Drop every existing policy on ngmy_settings (open using(true) keeps data public)
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

-- Sensitive civic keys — no client access (service_role bypasses RLS)
-- Everyone else: allow other settings keys the app still needs.

create policy "ngmy_settings_select_nonsensitive"
  on public.ngmy_settings
  for select
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
  );

create policy "ngmy_settings_insert_nonsensitive"
  on public.ngmy_settings
  for insert
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
  );

create policy "ngmy_settings_update_nonsensitive"
  on public.ngmy_settings
  for update
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
  )
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
  );

create policy "ngmy_settings_delete_nonsensitive"
  on public.ngmy_settings
  for delete
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
  );

-- Clear any duplicate full roster copied onto public.config (if column exists)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'config' and column_name = 'civicRegistryMembers'
  ) then
    execute 'update public.config set "civicRegistryMembers" = ''[]''::jsonb where true';
  end if;
exception when others then
  -- column may be text; try empty array literal
  begin
    execute 'update public.config set "civicRegistryMembers" = ''[]'' where true';
  exception when others then
    null;
  end;
end $$;

select tablename, policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'ngmy_settings'
order by policyname;
