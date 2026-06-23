-- Helper: add a table to supabase_realtime only if not already published.
-- Usage in other scripts:
--   select ngmy_realtime_add_table('transactions');
-- Run this file once, then other migrations can call the function.

create or replace function public.ngmy_realtime_add_table(table_name text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = table_name
  ) then
    execute format('alter publication supabase_realtime add table public.%I', table_name);
  end if;
end;
$$;
