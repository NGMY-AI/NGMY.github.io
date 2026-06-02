-- Multi-provider AI key (stored alongside legacy gemini columns)
-- Run once in Supabase → SQL Editor
-- NOTE: config.id is TEXT in NGMY — use '1' not 1

alter table public.config add column if not exists "geminiApiKey" text default '';
alter table public.config add column if not exists gemini_api_key text default '';
alter table public.config add column if not exists "aiApiKey" text default '';
alter table public.config add column if not exists ai_api_key text default '';

insert into public.config (id, "geminiApiKey", gemini_api_key, "aiApiKey", ai_api_key)
values ('1', '', '', '', '')
on conflict (id) do nothing;

update public.config
set "aiApiKey" = coalesce(nullif("aiApiKey", ''), "geminiApiKey", gemini_api_key, ''),
    ai_api_key = coalesce(nullif(ai_api_key, ''), "geminiApiKey", gemini_api_key, '')
where id = '1';

-- RLS only if needed (policies must have UNIQUE names per table)
alter table public.config enable row level security;

drop policy if exists "config_read_all" on public.config;
drop policy if exists "config_write_all" on public.config;
drop policy if exists "config_write_all_insert" on public.config;
drop policy if exists "config_write_all_update" on public.config;

create policy "config_read_all" on public.config for select using (true);
create policy "config_write_all_insert" on public.config for insert with check (true);
create policy "config_write_all_update" on public.config for update using (true);
