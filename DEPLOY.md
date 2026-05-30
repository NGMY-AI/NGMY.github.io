# NGMY — Deploy website so phone and PC see the same app

## Why the phone does not update

| What you did | What it updates |
|--------------|-----------------|
| `.\publish-web.ps1` only | Files in `docs\` on **your PC only** |
| `git push` | **GitHub** (what phones load) |
| Old Home Screen bookmark | May point to **wrong/old URL** or cached PWA |

Running publish and seeing "Done" on PC does **not** update the phone until you **push** and **GitHub Pages** is enabled.

---

## Step 1 — Enable GitHub Pages (do once)

1. Open: https://github.com/kbpabloqr-lgtm/kbpabloqr-lgtm.github.io/settings/pages  
2. **Build and deployment → Source:** Deploy from a branch  
3. **Branch:** `main`  
4. **Folder:** `/docs`  
5. Click **Save**  
6. Wait 2–5 minutes until the site shows a green check.

**Correct phone URL (bookmark this):**  
https://kbpabloqr-lgtm.github.io/

(Not `/NGMY.github.io/` — that path was wrong for this repo.)

---

## Step 2 — Publish from PowerShell (every update)

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
.\publish-web.ps1
git add docs web lib publish-web.ps1 DEPLOY.md
git add -u
git commit -m "Deploy web build"
git push origin main
```

Wait 2–3 minutes, then on PC verify:

```powershell
Invoke-WebRequest "https://kbpabloqr-lgtm.github.io/version.json" -UseBasicParsing | Select-Object -Expand Content
```

You should see a recent `build_number` (today’s date).

---

## Step 3 — Phone (after push)

1. **Delete** the old NGMY icon from your home screen (if any).  
2. Close all NGMY browser tabs.  
3. Open **Safari/Chrome private tab:** https://kbpabloqr-lgtm.github.io/  
4. If it still looks old: **Settings → clear website data** for that site.  
5. Log in and use the app; optionally **Add to Home Screen** again from that URL.

---

## Supabase (separate from website deploy)

Run SQL in Supabase SQL Editor only (not PowerShell):

- `supabase/SUPABASE_SETUP.sql`
- `supabase/legal_content_columns.sql`
- `supabase/store_orders_columns.sql`

---

## Native app on phone (optional)

`flutter run` or an APK updates only **that install**, not the website other users open:

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
flutter pub get
flutter run
```
