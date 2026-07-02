# Fix GitHub "Run failed" deploy emails

## What was failing

Two different deploy systems were running:

| Job | Status | Cause |
|-----|--------|--------|
| **Deploy GitHub Pages** (our workflow) | ✅ Success | Builds in CI → `gh-pages` branch |
| **pages build and deployment** (GitHub built-in) | ❌ Failure | Tried to upload ~48MB `docs/` on `main` → times out |

The failure emails come from the **built-in** job, not our workflow.

## One-time fix (2 minutes)

1. Open **https://github.com/NGMY-AI/NGMY.github.io/settings/pages**
2. Under **Build and deployment** → **Source** → **Deploy from a branch**
3. Branch: **`gh-pages`** → Folder: **`/ (root)`** → **Save**
4. Wait 2–3 minutes
5. Check **https://ngmy.org/version.json** — `build_number` should be recent

**Do not use** `main` / `/docs` as the source.

## After that

- Push code to `main` (lib/web only) → CI deploys automatically (~3–5 min)
- No more timeout failures
- `docs/` is not committed on `main` anymore (local `publish-web.ps1` still works for testing)
