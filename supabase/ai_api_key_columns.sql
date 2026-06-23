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
Japanese are incredibly smart they invented this super useful double sided tape this isn't ordinary tape it's nano tape cut it precisely to the length you need stick it wherever you want and when you're done peel it off easily without leaving any sticky residue it can fix almost anything mount a router hang wall art and even if you hammer it it won't come off even carpets that always slip 1 strip and they're locked in place gets dirty no worries just rinse it with water and it's clean again plus it's reusable and the