-- NGMY — lock Civic Registry PIN columns (run in SQL Editor)
-- After: redeploy bright-handler so civicSaveRegistryPins / civicVerifyStatePin
-- / civicFetchRegistryPins can still use service_role.

do $$
declare
  col text;
  pin_cols text[] := array[
    'civicRegistryPin',
    'civicRegistryPinsByState'
  ];
begin
  foreach col in array pin_cols loop
    if exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = 'config' and column_name = col
    ) then
      execute format('revoke select (%I) on table public.config from anon, authenticated, public', col);
      execute format('revoke update (%I) on table public.config from anon, authenticated, public', col);
      execute format('revoke insert (%I) on table public.config from anon, authenticated, public', col);
      raise notice 'revoked client access to config.%', col;
    end if;
  end loop;
end $$;

-- Confirm: anon/authenticated must not have privileges on these columns
select
  grantee,
  privilege_type,
  column_name
from information_schema.column_privileges
where table_schema = 'public'
  and table_name = 'config'
  and column_name in ('civicRegistryPin', 'civicRegistryPinsByState')
  and grantee in ('anon', 'authenticated', 'public')
order by column_name, grantee, privilege_type;
