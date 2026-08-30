# Wave 3 — lock user database (do these in order)

You already locked API keys. This step stops strangers from reading **other people’s accounts**.

## 1) Redeploy `bright-handler` (new login sessions)

1. In Cursor: `Ctrl + P` → type `ngmy-ai-chat/index.ts` → Enter  
2. `Ctrl + A` → `Ctrl + C`  
3. Supabase → Edge Functions → **bright-handler** → **Code** tab  
4. `Ctrl + A` → `Ctrl + V` → **Deploy**

## 2) Run the RLS SQL

1. Supabase → **SQL Editor**  
2. Open file:  
   `C:\Users\appbu\StudioProjects\ngmy\supabase\security_rls_users_phase2.sql`  
3. Copy all → paste → **Run**

## 3) Everyone must log out and log in again

Old sessions are anonymous and will **not** be able to read their account after RLS.  
Log out → log in with email/password (or Google/GitHub).

## 4) Quick test

- Log in as a normal user → you should only see your own wallet/account.  
- Log in as admin → admin user list should still work.  
- From a private/incognito browser with no login, nobody should be able to dump all users.

Tell me when steps 1–2 are done and I’ll re-check.
