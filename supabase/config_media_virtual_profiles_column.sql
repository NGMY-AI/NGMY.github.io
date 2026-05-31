-- Virtual media commenter profiles (175) — run in Supabase SQL Editor
alter table public.config add column if not exists "mediaVirtualProfiles" jsonb default '[]'::jsonb;
