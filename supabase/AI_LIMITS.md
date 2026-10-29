# NGMY AI protection — limits, settings and how to review abuse

All AI in NGMY runs on the server (`bright-handler`, source `functions/ngmy-ai-chat/index.ts`). The browser never
calls an AI company and never holds an AI key. Every AI request is checked **before** it reaches the AI provider:

1. **Login.** Only a real signed-in user may use AI. A guest/anonymous session or no session gets `401` ("Please sign in to use AI.").
2. **Provider cooldown.** If the AI provider answered `429`, nobody calls it for `AI_PROVIDER_COOLDOWN_SECONDS` (60). Users see a busy message (`503`), no retries.
3. **Per-user limits** (minute / hour / day), counted in Postgres (shared, durable): see the table.
4. **Per-IP limit** for everybody, and for anyone not signed in if you switch anonymous AI on.
5. **Global daily cap** (circuit breaker) for the shared key. When it is reached everybody gets `503` ("The AI is resting for now.") until the next UTC midnight.

All of these are counted in ONE all-or-nothing database step (`ngmy_ai_gate`), so a blocked request never uses up quota.
If the database cannot be reached the server falls back to strict in-memory counters (never "no limit").

## The limits (starting values)

| Setting name | What | Start |
|---|---|---|
| `AI_LIMIT_NORMAL_PER_MIN` / `_PER_HOUR` / `_PER_DAY` | Normal AI chat and advisors, per user | 20 / 100 / 300 |
| `AI_LIMIT_EXPENSIVE_PER_MIN` / `_PER_HOUR` / `_PER_DAY` | Expensive actions (job applications, documents, App Builder, books, slides, news, translations, pictures, voice, live browser), per user | 5 / 20 / 50 |
| `AI_ALLOW_ANON` | Allow AI without signing in (`true`/`false`) | `false` |
| `AI_LIMIT_ANON_PER_MIN` | If anonymous AI is on: per IP per minute | 5 |
| `AI_LIMIT_IP_PER_MIN` | Per IP per minute for signed-in users too (stops many accounts from one address) | 60 |
| `AI_GLOBAL_PER_DAY` | All AI requests of the whole app per day (circuit breaker) | 5000 |
| `AI_MAX_PROMPT_CHARS` | Longest message for normal AI | 24000 |
| `AI_MAX_PROMPT_CHARS_EXPENSIVE` | Longest message for expensive actions | 120000 |
| `AI_MAX_IMAGES` / `AI_MAX_IMAGE_CHARS` | Pictures per request / total picture size | 4 / 6,000,000 |
| `AI_MAX_OUTPUT_TOKENS` / `AI_MAX_OUTPUT_TOKENS_EXPENSIVE` | Longest AI answer | 2048 / 8192 |
| `AI_TIMEOUT_MS` | Timeout of every provider call | 30000 |
| `AI_MAX_MODEL_ATTEMPTS` | Different models tried for one request (a call is never repeated on the same model, and a 429 stops everything) | 2 |
| `AI_PROVIDER_COOLDOWN_SECONDS` | Pause for everybody after a provider 429 | 60 |
| `AI_SPIKE_THRESHOLD` | Blocked requests from one user in 10 minutes that count as a spike | 10 |

The UI never shows these numbers: a blocked user sees *"You are using AI too fast. Please wait a little and try again."*
(HTTP 429 with a `Retry-After` header).

## Where to change them

* **Supabase → Edge Functions → bright-handler → Secrets**: add the setting name above with a number (needs no redeploy; applies within a minute after a restart of the function).
* **Or in the database (applies within a minute, no redeploy)** — SQL Editor:

  ```sql
  insert into public.ngmy_ai_settings(key, value) values ('AI_LIMIT_NORMAL_PER_MIN', '30')
  on conflict (key) do update set value = excluded.value, updated_at = now();
  ```
* **Or as an admin from the app**: the Edge action `aiLimitsSave` with `{"settings": {"AI_GLOBAL_PER_DAY": 8000}}` (admins only), and `aiGateStatus` shows the limits in force, today's heaviest users and the newest abuse events.

The database table wins over the secrets, which win over the starting values. A typo (not a number, or below 1) is ignored, so it can never switch a limit off.

## Optional alert

Set the secret `AI_ALERT_WEBHOOK_URL` (a Slack/Discord/any URL that accepts JSON) to get a message when a spike happens or the daily cap is reached (at most one an hour).

## Reviewing abuse

```sql
-- newest limit hits, spikes, cap hits and provider 429s (who, which endpoint, when)
select "at", kind, detail, ip from public.ngmy_security_events where kind like 'ai\_%' order by "at" desc limit 100;

-- heaviest users today
select k as user_id, bucket, hits from public.ngmy_rate_limits
where bucket like 'ai\_%\_day' and window_start >= date_trunc('day', now()) order by hits desc limit 20;
```

Event kinds: `ai_rate_limit`, `ai_spike`, `ai_global_cap`, `ai_provider_429`, `ai_provider_cooldown`, `ai_blocked_anon`.
A repeated hit by the same user on the same endpoint is written at most once a minute, so an attack cannot flood the log.

## Deploying (in this order)

1. SQL Editor: run `supabase/ai_gate.sql` once (needs `security_hardening_rate_limits.sql` to have been run earlier).
2. Deploy the function **with both files**: `.\deploy-bright-handler.ps1` (uploads `index.ts` and `ai_gate.ts`), or `supabase functions deploy bright-handler`. If you paste into the Dashboard editor, add `ai_gate.ts` as a second file next to `index.ts`.
3. Make sure the secret `NGMY_AI_API_KEY` is set (the key must only live there).
4. If the AI key was ever visible in the app, a build or git, create a new key and delete the old one (see `SECURITY_LOCKDOWN.md`).

## Tests

```
cd supabase/functions/ngmy-ai-chat
deno test --no-lock --allow-read ai_gate_test.ts
deno test --no-check --no-lock --import-map=test_import_map.json --allow-read --allow-net --allow-env ai_gate_e2e_test.ts
flutter test test/ngmy_ai_protection_test.dart      # from the project folder
```

`ai_gate_e2e_test.ts` runs the real Edge Function with a pretend Supabase and a pretend AI provider (nothing leaves the computer).
