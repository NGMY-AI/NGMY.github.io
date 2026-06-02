-- MINIMAL version — use this if policies already exist and full script fails.
-- Only adds AI columns + syncs keys. Does NOT touch RLS policies.

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
