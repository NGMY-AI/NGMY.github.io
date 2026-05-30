-- NGMY AI (Gemini) — required for NGMY Helper on ALL users
-- Run once in Supabase → SQL Editor → Run

alter table public.config add column if not exists "geminiApiKey" text default '';
alter table public.config add column if not exists gemini_api_key text default '';

-- Ensure global config row exists
insert into public.config (id, "geminiApiKey", gemini_api_key)
values (1, '', '')
on conflict (id) do nothing;

-- Let every signed-in user read global config (needed for shared AI key)
alter table public.config enable row level security;

drop policy if exists "config_read_all" on public.config;
drop policy if exists "config_write_all" on public.config;

create policy "config_read_all" on public.config for select using (true);
create policy "config_write_all" on public.config for insert with check (true);
create policy "config_write_all" on public.config for update using (true);

-- Realtime: Dashboard → Database → Publications → supabase_realtime → enable "config"
-- Or: alter publication supabase_realtime add table public.config;
