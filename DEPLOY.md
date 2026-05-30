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

Repo that serves **ngmy-ai.github.io/NGMY.github.io/** must use:

- **Branch:** `main` (or your deploy branch)
- **Folder:** `/docs`

---

## Supabase SQL (not PowerShell)

Run in Supabase SQL Editor: `supabase/SUPABASE_SETUP.sql` and related `.sql` files in `supabase/`.
