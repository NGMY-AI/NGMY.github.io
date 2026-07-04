# Fix GitHub "Run failed: pages build and deployment" emails

## What those emails mean

| Workflow name in email | What it is | Status |
|------------------------|------------|--------|
| **pages build and deployment** | GitHub built-in (branch deploy) | Was failing — now uses tiny `docs/` stub |
| **Deploy GitHub Pages** | Our CI workflow | ✅ Builds & publishes the real app |

## One-time fix (stops failures + fixes ngmy.org)

Open **https://github.com/NGMY-AI/NGMY.github.io/settings/pages**

1. **Build and deployment → Source** → select **GitHub Actions**
2. **Custom domain** → enter **`ngmy.org`** → Save
3. Wait 3 minutes → open **https://ngmy.org/version.json** (should show a recent `build_number`, not `branch-stub`)

## Live URLs

- **https://ngmy-ai.github.io/NGMY.github.io/** — always has the latest CI build
- **https://ngmy.org/** — works after step 2 above (or redirects via stub until then)

## Deploy new code

```powershell
git add lib web assets
git commit -m "Your changes"
git push origin main
```

Wait ~5 minutes. Do **not** commit a full Flutter build to `docs/` — only the small stub files belong on `main`. CI deploys the real app via **Deploy GitHub Pages** (gh-pages + Actions Pages).
