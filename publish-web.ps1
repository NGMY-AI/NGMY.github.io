# Build NGMY for GitHub Pages and copy output into docs/
# Run from project root:  .\publish-web.ps1
#
# Phone not updating? After push, on the phone: close all NGMY tabs,
# Settings > Safari/Chrome > clear site data for the NGMY URL, or use a private tab once.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$BaseHref = "/NGMY.github.io/"
$DeployId = Get-Date -Format "yyyyMMddHHmmss"
$LiveUrl = "https://kbpabloqr-lgtm.github.io/NGMY.github.io/"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " NGMY Web Publish" -ForegroundColor Cyan
Write-Host " Deploy ID: $DeployId" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "`n[1/6] flutter pub get ..."
flutter pub get
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`n[2/6] flutter build web (release) ..."
flutter build web --release --base-href=$BaseHref
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if (-not (Test-Path "build\web\index.html")) {
    Write-Error "Build failed: build\web\index.html not found"
}

Write-Host "`n[3/6] Copy build\web -> docs\ ..."
if (Test-Path "docs") {
    Get-ChildItem -Path "docs" -Force | Remove-Item -Recurse -Force
}
New-Item -ItemType Directory -Path "docs" -Force | Out-Null
Copy-Item -Path "build\web\*" -Destination "docs" -Recurse -Force

# GitHub Pages: allow Flutter assets (underscore paths)
New-Item -ItemType File -Path "docs\.nojekyll" -Force | Out-Null

Write-Host "`n[4/6] Stamp deploy id (cache bust for phones) ..."
$versionObj = @{
    app_name    = "ngmy"
    version     = "1.0.0"
    build_number = $DeployId
    package_name = "ngmy"
    deployed_at  = (Get-Date).ToUniversalTime().ToString("o")
}
$versionJson = $versionObj | ConvertTo-Json -Compress
Set-Content -Path "docs\version.json" -Value $versionJson -Encoding UTF8

$indexPath = Join-Path $PSScriptRoot "docs\index.html"
$html = Get-Content $indexPath -Raw
$html = $html.Replace("__NGMY_DEPLOY_ID__", $DeployId)
Set-Content -Path $indexPath -Value $html -Encoding UTF8 -NoNewline

$mainJs = Join-Path $PSScriptRoot "docs\main.dart.js"
$mainJsSize = if (Test-Path $mainJs) { (Get-Item $mainJs).Length } else { 0 }
Write-Host "  main.dart.js size: $mainJsSize bytes"
Write-Host "  version.json build_number: $DeployId"

Write-Host "`n[5/6] Git status ..."
git status -sb

Write-Host "`n[6/6] Ready to push. Run these commands if git shows changes:" -ForegroundColor Yellow
Write-Host "  git add docs web lib publish-web.ps1" -ForegroundColor White
Write-Host "  git add -u" -ForegroundColor White
Write-Host "  git commit -m ""Deploy web build $DeployId""" -ForegroundColor White
Write-Host "  git push origin main" -ForegroundColor White
Write-Host ""
Write-Host "Live URL (after push, wait 1-3 min):" -ForegroundColor Green
Write-Host "  $LiveUrl" -ForegroundColor Green
Write-Host ""
Write-Host "Verify deploy from PC:" -ForegroundColor Green
Write-Host "  Invoke-WebRequest `"$LiveUrl`version.json?d=$DeployId`" -UseBasicParsing | Select-Object -Expand Content" -ForegroundColor White
Write-Host ""
Write-Host "On PHONE after push:" -ForegroundColor Yellow
Write-Host "  1. Close every NGMY tab / remove from recent apps" -ForegroundColor White
Write-Host "  2. Open $LiveUrl in a NEW private/incognito tab first" -ForegroundColor White
Write-Host "  3. If still old: clear website data for this URL in browser settings" -ForegroundColor White
Write-Host "  4. If added to Home Screen: delete icon and add again after update" -ForegroundColor White
Write-Host ""
Write-Host "Done." -ForegroundColor Cyan
