# NGMY security lockdown — what you must do in Supabase

Code is updated so browsers no longer download Gemini keys or password hashes.
**Until you complete these steps, the old open database can still leak secrets.**

## 1. Rotate keys (do this first)

1. Google AI Studio → create a **new** Gemini key → **delete/revoke the old one**.
2. Rotate ElevenLabs / Resend / YouTube keys if they were ever saved in NGMY AI settings.

## 2. Set Edge Function secrets

Supabase Dashboard → **Edge Functions** → **bright-handler** (or project Secrets):

- `NGMY_AI_API_KEY` or `GEMINI_API_KEY` = your new Gemini key  
- Optional: `ELEVENLABS_API_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`  
- Optional but recommended: `PW_RESET_PEPPER` = a long random string

## 3. Redeploy the AI Edge Function

Paste/deploy the latest code from:

`supabase/functions/ngmy-ai-chat/index.ts`

as function name **`bright-handler`** (same name the app already calls).

CLI example (if linked):

```bash
supabase functions deploy bright-handler --project-ref gvufllqqxjnpicmkxzcg
```

(If your deploy uses a different slug, keep the Dashboard name as `bright-handler` or update `kNgmySupabaseAiFunction` in the app.)

## 4. Run SQL (SQL Editor) in order

1. `supabase/security_lock_api_keys.sql`  
2. `supabase/security_lock_password_hash.sql`  

Do **not** run `security_rls_users_phase2.sql` yet (auth migration required).

## 5. Civic Registry privacy

1. Redeploy **bright-handler** with the latest `ngmy-ai-chat/index.ts` (civic* actions).
2. Run `supabase/security_lock_civic_registry.sql` in SQL Editor (roster blob).
3. Run `supabase/security_lock_civic_pins.sql` in SQL Editor (PIN columns).
4. Hard-refresh + log out / log in.

Verify: anon `GET` of `civic_registry_members` is empty; anon select of `civicRegistryPin` returns null/empty; members only receive directory fields via Edge.

See also `CIVIC_REGISTRY_LOCK.md`.

## 6. Rate limits + remaining hardening

1. Redeploy **bright-handler** from `supabase/functions/ngmy-ai-chat/index.ts`.
2. Run `supabase/security_hardening_rate_limits.sql` in SQL Editor.
3. Optional but recommended: set Edge secret `PW_RESET_PEPPER` to a long random string (do not leave the default).
4. Confirm Anonymous sign-in is enabled if guests upload files (Storage → still uses the app's existing anonymous session helper).

Rate-limit and abuse logs (SQL Editor):

```sql
select kind, count(*) from public.ngmy_security_events
  where "at" > now() - interval '24 hours' group by 1 order by 2 desc;

select bucket, k, hits, window_start from public.ngmy_rate_limits
  where window_start > now() - interval '1 hour' and hits > 5
  order by hits desc;
```

## 7. Hard-refresh the app

Close/reopen the PWA or hard-refresh https://ngmy.org so clients stop using cached JS that fetched keys.

## Verify

- Network tab → `/rest/v1/config` responses must **not** include `geminiApiKey` / `aiApiKey` / registry PINs.
- Advisors / Helper still reply (proxy uses server secret).
- Login still works (verifyPasswordLogin on the Edge Function).
- Civic roster is not readable via anon REST.