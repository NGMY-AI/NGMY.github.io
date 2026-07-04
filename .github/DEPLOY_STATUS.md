# NGMY deploy status

- **Live app:** https://ngmy.org/ (deployed by **Deploy GitHub Pages** workflow)
- **CI workflow:** `.github/workflows/deploy-pages.yml`
- **`docs/` on main:** tiny stub only — **not** the real app (stops conflicting Pages jobs)

## Why you were seeing "deployment failed" emails

Two deploy systems were fighting:

| Workflow | Role | Was happening |
|----------|------|----------------|
| **Deploy GitHub Pages** | Builds Flutter → publishes to `gh-pages` + GitHub Actions Pages | ✅ Usually succeeded |
| **pages build and deployment** | GitHub built-in job on every `docs/` push to `main` | ❌ Failed with "Deployment failed, try again later" |

CI used to copy the full web build into `docs/` and push to `main`. That triggered the built-in job, which conflicted with the Actions deploy.

**Fix:** CI no longer updates `docs/`. Only the small stub stays on `main`.

## One-time GitHub setting (if ngmy.org ever looks stale)

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Custom domain: `ngmy.org`

## Deploy new code

```powershell
git add lib web assets
git commit -m "Your changes"
git push origin main
```

Wait ~5 minutes, then check https://ngmy.org/version.json — `build_number` should be a new timestamp (not `branch-stub`).

Hard refresh: `Ctrl+Shift+R` on desktop.
