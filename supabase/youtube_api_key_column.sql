-- YouTube Data API v3 key — required for search in Background Music
-- Run once in Supabase → SQL Editor → Run
-- Get a key: https://console.cloud.google.com/apis/credentials
--   1. Create/select a project
--   2. APIs & Services → Library → enable "YouTube Data API v3"
--   3. APIs & Services → Credentials → Create Credentials → API key
--   4. (Recommended) Restrict the key to "YouTube Data API v3" only
-- Then: Supabase → Table Editor → config → edit the row → paste the key
-- into the youtubeApiKey column.

alter table public.config add column if not exists "youtubeApiKey" text default '';
alter table public.config add column if not exists youtube_api_key text default '';

-- Ensure global config row exists
insert into public.config (id, "youtubeApiKey", youtube_api_key)
values ('1', '', '')
on conflict (id) do nothing;

-- Config table read/write policies already exist from gemini_api_key_column.sql —
-- re-run here too in case this is applied to a fresh project first.
alter table public.config enable row level security;

drop policy if exists "config_read_all" on public.config;
drop policy if exists "config_write_all_insert" on public.config;
drop policy if exists "config_write_all_update" on public.config;

create policy "config_read_all" on public.config for select using (true);
create policy "config_write_all_insert" on public.config for insert with check (true);
create policy "config_write_all_update" on public.config for update using (true);
