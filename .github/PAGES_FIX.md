# Fix GitHub "Run failed" deploy emails

## What was failing

Two different deploy systems were running:

| Job | Status | Cause |
|-----|--------|--------|
| **Deploy GitHub Pages** (our workflow) | ✅ Success | Builds in CI → `gh-pages` branch |
| **pages build and deployment** (GitHub built-in) | ❌ Failure | Tried to upload ~48MB `docs/` on `main` → times out |

The failure emails come from the **built-in** job, not our workflow.

## One-time fix (2 minutes) — **required if deploy emails continue**

1. Open **https://github.com/NGMY-AI/NGMY.github.io/settings/pages**
2. Under **Build and deployment** → **Source** → choose **GitHub Actions**
3. Save (our `Deploy GitHub Pages` workflow will publish the site)
4. Wait 3–5 minutes, then check **https://ngmy.org/version.json**

**Alternative:** Deploy from branch → **`gh-pages`** → **`/ (root)`** (also works; CI mirrors each build there).

**Never use** `main` / `/docs` — that job times out and sends failure emails.

## After that

- Push code to `main` (lib/web only) → CI deploys automatically (~3–5 min)
- No more timeout failures
- `docs/` is not committed on `main` anymore (local `publish-web.ps1` still works for testing)
