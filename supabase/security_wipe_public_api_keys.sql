-- NGMY emergency: wipe public API key columns + force-lock them
-- Run this NOW in Supabase → SQL Editor → Run
-- Your live AI key should already be in Edge Function secret NGMY_AI_API_KEY / GEMINI_API_KEY.
-- After this, browsers must not be able to read a real key from public.config.

-- 1) Clear every public key column (do not leave old keys in the open table)
update public.config
set
  "geminiApiKey" = coalesce(nullif('', ''), ''),
  gemini_api_key = '',
  "aiApiKey" = '',
  ai_api_key = ''
where true;

do $$
begin
  if exists (select 1 from information_schema.columns where table_schema='public' and table_name='config' and column_name='youtubeApiKey') then
    execute 'update public.config set "youtubeApiKey" = ''''';
  end if;
  if exists (select 1 from information_schema.columns where table_schema='public' and table_name='config' and column_name='youtube_api_key') then
    execute 'update public.config set youtube_api_key = ''''';
  end if;
  if exists (select 1 from information_schema.columns where table_schema='public' and table_name='config' and column_name='elevenLabsApiKey') then
    execute 'update public.config set "elevenLabsApiKey" = ''''';
  end if;
  if exists (select 1 from information_schema.columns where table_schema='public' and table_name='config' and column_name='resendApiKey') then
    execute 'update public.config set "resendApiKey" = ''''';
  end if;
end $$;

-- 2) Private secrets table — service_role / Edge Functions only
create table if not exists public.ngmy_server_secrets (
  id text primary key default '1',
  ai_api_key text not null default '',
  elevenlabs_api_key text not null default '',
  resend_api_key text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.ngmy_server_secrets enable row level security;

-- No policies for anon/authenticated = nobody can read via the public API
drop policy if exists "ngmy_server_secrets_deny_all" on public.ngmy_server_secrets;
-- Intentionally no SELECT/INSERT/UPDATE/DELETE policies for anon/authenticated.

revoke all on table public.ngmy_server_secrets from anon, authenticated, public;
grant all on table public.ngmy_server_secrets to service_role;

-- 3) Hard column revoke on public.config key fields
do $$
declare
  col text;
  secret_cols text[] := array[
    'geminiApiKey', 'gemini_api_key', 'aiApiKey', 'ai_api_key',
    'youtubeApiKey', 'youtube_api_key',
    'elevenLabsApiKey', 'elevenlabs_api_key',
    'resendApiKey', 'resend_api_key'
  ];
begin
  foreach col in array secret_cols loop
    if exists (
      select 1 from information_schema.columns
      where table_schema = 'public' and table_name = 'config' and column_name = col
    ) then
      begin
        execute format('revoke select (%I) on table public.config from anon, authenticated, public', col);
        execute format('revoke update (%I) on table public.config from anon, authenticated, public', col);
        execute format('revoke insert (%I) on table public.config from anon, authenticated, public', col);
      exception when others then
        raise notice 'revoke skip %: %', col, sqlerrm;
      end;
    end if;
  end loop;
end $$;

-- 4) Password hash lock (if not already applied)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated, public;
  end if;
end $$;

select 'Done. Confirm Edge secret NGMY_AI_API_KEY is set. Advisors must still work.' as next_step;
