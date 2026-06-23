-- Enable realtime for media comments/likes and user follower counts.
-- Run once in Supabase SQL Editor after media_tables.sql and users_media_profile_columns.sql
-- Safe to re-run.

do $$
declare
  t text;
begin
  foreach t in array array['media', 'users'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;
