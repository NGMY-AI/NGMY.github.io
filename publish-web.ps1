# Build NGMY for GitHub Pages and copy output into docs/
# Run from project root:  .\publish-web.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Must match docs/index.html <base href="..."> and your live site URL path
$BaseHref = "/NGMY.github.io/"

Write-Host "Building Flutter web (release) with base-href $BaseHref ..."
flutter pub get
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

flutter build web --release --base-href=$BaseHref
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if (-not (Test-Path "build\web\index.html")) {
  Write-Error "Build failed: build\web\index.html not found"
}

Write-Host "Copying build\web -> docs\ ..."
Get-ChildItem -Path "docs" -Force | Remove-Item -Recurse -Force
Copy-Item -Path "build\web\*" -Destination "docs" -Recurse -Force

Write-Host ""
Write-Host "Done. Next steps:"
Write-Host "  git add docs"
Write-Host "  git commit -m ""Publish web app update"""
Write-Host "  git push origin main"
Write-Host ""
Write-Host "Live site (after push): https://kbpabloqr-lgtm.github.io/NGMY.github.io/"
