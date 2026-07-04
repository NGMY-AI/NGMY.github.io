# NGMY deploy (ngmy.org)

## How it works

One deploy path only:

1. Push code to `main` → **Deploy GitHub Pages** workflow builds Flutter.
2. CI copies the build into **`docs/`** on `main` and pushes.
3. GitHub **pages build and deployment** publishes `docs/` → **https://ngmy.org/**

No `actions/deploy-pages`, no `gh-pages` mirror — those caused duplicate failures and a broken custom domain.

## Verify

After ~5 minutes:

```text
https://ngmy.org/version.json
```

`build_number` should be a recent UTC timestamp.

## If Pages settings were changed manually

**Settings → Pages:**

- **Source:** Deploy from branch → **main** → folder **/docs**
- **Custom domain:** `ngmy.org`

## On your phone

Hard refresh or clear site data for ngmy.org so the PWA loads the new build.
