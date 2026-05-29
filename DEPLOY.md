# NGMY — How to deploy (read this carefully)

## Part 1: Supabase SQL Editor (website: supabase.com)

**Do NOT paste terminal commands here.** Only paste SQL.

1. Open your project → **SQL Editor** → **New query**
2. Copy and run the entire file: **`supabase/SUPABASE_SETUP.sql`**
3. Also enable **Authentication → Providers → Anonymous** (turn ON)

---

## Part 2: PowerShell on your PC (NOT in Supabase)

Open **PowerShell** or **Terminal** on your computer and run:

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
flutter pub get
flutter build web --release --base-href="/NGMY.github.io/"
```

Copy build output to `docs`:

```powershell
Remove-Item -Path "docs\*" -Recurse -Force
Copy-Item -Path "build\web\*" -Destination "docs" -Recurse -Force
```

Or use the script (bypasses execution policy):

```powershell
powershell -ExecutionPolicy Bypass -File .\publish-web.ps1
```

Push to GitHub Pages:

```powershell
git add docs lib main.dart supabase DEPLOY.md
git commit -m "Update NGMY app and website"
git push origin main
```

Live site (after push): https://kbpabloqr-lgtm.github.io/NGMY.github.io/

---

## Part 3: Phone app

```powershell
cd C:\Users\appbu\StudioProjects\ngmy
flutter pub get
flutter run
```

(Or build APK from Android Studio as you usually do.)
