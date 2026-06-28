# NGMY — Deploy website (correct URL)

## Your live app URL (bookmark this)

**https://ngmy-ai.github.io/NGMY.github.io/**

Do not use `kbpabloqr-lgtm.github.io` unless you moved the site.  
Black screen / “Failed to load app” happens when `base href` does not match this path.

---

## Publish from PowerShell

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
.\publish-web.ps1
git add docs web lib publish-web.ps1 DEPLOY.md
git add -u
git commit -m "Fix web base href for ngmy-ai.github.io"
git push origin main
```

If your GitHub Pages site is fed from a **different** repo (e.g. `ngmy-ai/NGMY.github.io`), push the same `docs` folder there too.

Wait 2–5 minutes after push.

---

## Verify it works (PC)

```powershell
Invoke-WebRequest "https://ngmy-ai.github.io/NGMY.github.io/version.json" -UseBasicParsing | Select-Object -Expand Content
```

Open in browser: https://ngmy-ai.github.io/NGMY.github.io/  
You should see “Loading NGMY…” then the login screen — not a black error page.

---

## Phone / PWA

1. Delete old home-screen icon.
2. Settings → clear **website data** for `ngmy-ai.github.io`.
3. Open **private tab**: https://ngmy-ai.github.io/NGMY.github.io/
4. Add to Home Screen again from that URL.

---

## GitHub Pages settings

Repo: **https://github.com/NGMY-AI/NGMY.github.io**

### If the site shows 404 (after making the repo private)

Making the repo **private** turns off GitHub Pages. Making it **public** again does **not** turn Pages back on automatically.

Do this once:

1. Open **https://github.com/NGMY-AI/NGMY.github.io/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (recommended; uses `.github/workflows/deploy-pages.yml`).
   - Or choose **Deploy from a branch** → branch **main** → folder **/docs** → Save.
3. Wait 2–5 minutes, then open **https://ngmy-ai.github.io/NGMY.github.io/version.json** — you should see a `build_number`, not 404.

After every `git push` to `main`, Pages should rebuild automatically.

### Stop email on every deploy

1. **This repo** — the `Deploy GitHub Pages` workflow only runs manually (`workflow_dispatch`). Pushing `docs/` to `main` does **not** run Actions, so you should not get failed-deploy emails from that workflow anymore.
2. **GitHub Pages** — use **Settings → Pages → Deploy from branch `main` / folder `/docs`** (not “GitHub Actions”).
3. **Your account** — GitHub → **Settings** → **Notifications** → uncheck **Actions** and **Deployments** (or set **NGMY.github.io** to **Watch: Custom** and disable those).

---

## Supabase SQL (not PowerShell)

Run in Supabase SQL Editor: `supabase/SUPABASE_SETUP.sql` and related `.sql` files in `supabase/`.

**NGMY Helper (AI on phone/web):** also run `supabase/gemini_api_key_column.sql` and `supabase/ai_api_key_columns.sql`.

**Web/PWA CORS fix:** deploy the AI proxy Edge Function once (Supabase CLI):

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
supabase functions deploy ngmy-ai-chat --project-ref gvufllqqxjnpicmkxzcg
```

Without `ngmy-ai-chat`, the helper may fail in the browser even with a valid API key.

**OAuth same-email login (Google + GitHub + email):** run once in SQL Editor:

`supabase/ngmy_auth_reconcile.sql`

Optional Edge Function fallback (Supabase CLI):

```powershell
supabase functions deploy ngmy-auth-reconcile --project-ref gvufllqqxjnpicmkxzcg
```

**Game Center timers / dice (required for admin settings to sync to all users):**

`supabase/game_center_settings_columns.sql`
