# Civic Registry privacy — your steps

After the app push:

1. Redeploy **bright-handler** (Code tab ← paste `supabase/functions/ngmy-ai-chat/index.ts`)
2. Run SQL: `supabase/security_lock_civic_registry.sql`
3. Hard-refresh ngmy.org and log out / log in

Expected: strangers cannot download the civic roster; members get public directory fields only; registrars get full data for their state; admins get full access.
