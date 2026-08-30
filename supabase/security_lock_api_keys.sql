-- NGMY security lockdown — API key columns (run in Supabase SQL Editor)
-- After running: set Edge Function secrets NGMY_AI_API_KEY (or GEMINI_API_KEY),
-- ELEVENLABS_API_KEY, RESEND_API_KEY, and redeploy bright-handler from
-- supabase/functions/ngmy-ai-chat/index.ts
--
-- ROTATE any Gemini / ElevenLabs / Resend keys that were ever saved in the app —
-- treat them as compromised.

-- Revoke secret columns from browser roles (service_role still has full access).
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
      execute format('revoke select (%I) on table public.config from anon, authenticated', col);
      execute format('revoke update (%I) on table public.config from anon, authenticated', col);
      execute format('revoke insert (%I) on table public.config from anon, authenticated', col);
    end if;
  end loop;
end $$;

-- Keep non-secret config readable/writable for the app (existing policies).
-- Do NOT recreate config_read_all with USING (true) for secret columns —
-- column privileges above hide them even when row policies allow SELECT.

comment on table public.config is
  'NGMY global config. API key columns are revoked from anon/authenticated; Edge Functions use service_role.';
