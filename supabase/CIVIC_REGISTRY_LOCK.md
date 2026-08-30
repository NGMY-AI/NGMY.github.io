# Civic Registry privacy — your steps

1. Redeploy **bright-handler** (Code tab ← paste `supabase/functions/ngmy-ai-chat/index.ts`)
2. Run SQL: `supabase/security_lock_civic_registry.sql` (roster) — if not already run
3. Run SQL: `supabase/security_lock_civic_pins.sql` (migrates PINs off public config + locks them)
4. Hard-refresh ngmy.org and log out / log in

**PIN check after SQL:** Results should show `pin_len = 0` and `pins_map = {}`.
Anon must not read `civic_registry_pins` from `ngmy_settings` (empty `[]`).
