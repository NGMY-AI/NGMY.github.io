-- Enable Supabase Realtime for NGMY tables (run once in SQL Editor)
-- Safe to re-run — skips tables already in supabase_realtime publication.

do $$
declare
  t text;
  tables text[] := array['media', 'transactions', 'users', 'config', 'announcements', 'ngmy_settings', 'store_listings'];
begin
  foreach t in array tables loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;
