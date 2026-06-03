# Build NGMY for GitHub Pages and copy output into docs/
# Run from project root:  .\publish-web.ps1
#
# Phone not updating? After push, on the phone: close all NGMY tabs,
# Settings > Safari/Chrome > clear site data for the NGMY URL, or use a private tab once.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Live app URL (project site) — must match base-href
$BaseHref = "/NGMY.github.io/"
$DeployId = Get-Date -Format "yyyyMMddHHmmss"
$LiveUrl = "https://ngmy-ai.github.io/NGMY.github.io/"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " NGMY Web Publish" -ForegroundColor Cyan
Write-Host " Deploy ID: $DeployId" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "`n[1/6] flutter pub get ..."
flutter pub get
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`n[2/6] flutter build web (release) ..."
flutter build web --release --base-href=$BaseHref --no-wasm-dry-run
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
# Ensure base href matches project path (fixes black screen / failed to load app)
$html = $html -replace '<base href="/">', '<base href="/NGMY.github.io/">'
$html = $html -replace '<base href="/NGMY.github.io/">', '<base href="/NGMY.github.io/">'
if ($html -notmatch 'href="/NGMY.github.io/"') {
    $html = $html -replace '<base href="[^"]*">', '<base href="/NGMY.github.io/">'
}
Set-Content -Path $indexPath -Value $html -Encoding UTF8 -NoNewline

# PWA manifest paths for project subfolder
$manifestPath = Join-Path $PSScriptRoot "docs\manifest.json"
if (Test-Path $manifestPath) {
    $manifest = @{
        name = "NGMY"
        short_name = "NGMY"
        id = "/NGMY.github.io/"
        start_url = "/NGMY.github.io/"
        scope = "/NGMY.github.io/"
        display = "standalone"
        background_color = "#ffffff"
        theme_color = "#ffffff"
        description = "Next Generation - Make Yours"
        orientation = "portrait-primary"
        prefer_related_applications = $false
        icons = @(
            @{ src = "icons/Icon-192.png"; sizes = "192x192"; type = "image/png" },
            @{ src = "icons/Icon-512.png"; sizes = "512x512"; type = "image/png" },
            @{ src = "icons/Icon-maskable-192.png"; sizes = "192x192"; type = "image/png"; purpose = "maskable" },
            @{ src = "icons/Icon-maskable-512.png"; sizes = "512x512"; type = "image/png"; purpose = "maskable" }
        )
    }
    $manifest | ConvertTo-Json -Depth 5 | Set-Content -Path $manifestPath -Encoding UTF8
}

# Flutter 3.x ships a service worker that only unregisters itself - disable it; use ngmy_service_worker.js instead.
$bootPath = Join-Path $PSScriptRoot "docs\flutter_bootstrap.js"
if (Test-Path $bootPath) {
    $boot = Get-Content $bootPath -Raw
    $boot = $boot -replace ',\{\}', ''
    $boot = $boot -replace '(?s)\s*serviceWorkerSettings:\s*\{[^}]*\}\s*,?', ''
    Set-Content -Path $bootPath -Value $boot -Encoding UTF8 -NoNewline
    Write-Host "  Patched flutter_bootstrap.js (disabled Flutter unregister-only worker)" -ForegroundColor DarkGray
}
$flutterSw = Join-Path $PSScriptRoot "docs\flutter_service_worker.js"
if (Test-Path $flutterSw) {
    Remove-Item $flutterSw -Force
    Write-Host "  Removed flutter_service_worker.js (unregister-only stub)" -ForegroundColor DarkGray
}

# Generate offline PWA worker with full precache list for GitHub Pages subpath.
$swTemplate = Join-Path $PSScriptRoot "web\ngmy_service_worker.js"
$swOut = Join-Path $PSScriptRoot "docs\ngmy_service_worker.js"
$docsPath = Join-Path $PSScriptRoot "docs"
$base = $BaseHref.TrimEnd('/')
if (Test-Path $swTemplate) {
    $urlSet = [System.Collections.Generic.HashSet[string]]::new()
    [void]$urlSet.Add("$base/")
    [void]$urlSet.Add("$base/index.html")
    Get-ChildItem $docsPath -Recurse -File | ForEach-Object {
        if ($_.Name -eq 'ngmy_service_worker.js') { return }
        $rel = $_.FullName.Substring($docsPath.Length).Replace('\', '/')
        if (-not $rel.StartsWith('/')) { $rel = "/$rel" }
        [void]$urlSet.Add("$base$rel")
    }
    $jsonUrls = (($urlSet | Sort-Object) | ForEach-Object { "'$_'" }) -join ","
    $sw = Get-Content $swTemplate -Raw
    $sw = $sw.Replace('__NGMY_DEPLOY_ID__', $DeployId)
    $sw = $sw.Replace('__NGMY_PRECACHE_URLS__', "[$jsonUrls]")
    Set-Content -Path $swOut -Value $sw -Encoding UTF8
    Write-Host "  Wrote ngmy_service_worker.js ($($urlSet.Count) precache URLs)" -ForegroundColor DarkGray
} else {
    Write-Warning "Missing web/ngmy_service_worker.js - offline cache not generated."
}

$mainJs = Join-Path $PSScriptRoot "docs\main.dart.js"
$mainJsSize = if (Test-Path $mainJs) { (Get-Item $mainJs).Length } else { 0 }
Write-Host "  main.dart.js size: $mainJsSize bytes"
Write-Host "  version.json build_number: $DeployId"

Write-Host "`n[5/6] Git status ..."
git status -sb

Write-Host "`n[6/7] Ready to push. Run these commands if git shows changes:" -ForegroundColor Yellow
Write-Host "  git add docs web lib publish-web.ps1" -ForegroundColor White
Write-Host "  git add -u" -ForegroundColor White
Write-Host "  git commit -m ""Deploy web build $DeployId""" -ForegroundColor White
Write-Host "  git push origin main" -ForegroundColor White
Write-Host ""
Write-Host "Live URL (after push, wait 1-3 min):" -ForegroundColor Green
Write-Host "  $LiveUrl" -ForegroundColor Green
Write-Host ""
Write-Host "Verify deploy from PC:" -ForegroundColor Green
Write-Host ('  Invoke-WebRequest "' + $LiveUrl + 'version.json?d=' + $DeployId + '" -UseBasicParsing | Select-Object -Expand Content') -ForegroundColor White
Write-Host ""
Write-Host "On PHONE after push:" -ForegroundColor Yellow
Write-Host "  1. Delete old Home Screen icon if you have one (wrong URL may be cached)" -ForegroundColor White
Write-Host "  2. Close every NGMY tab / remove from recent apps" -ForegroundColor White
Write-Host "  3. Open $LiveUrl in a NEW private/incognito tab first" -ForegroundColor White
Write-Host "  4. If still old: clear website data for this URL in browser settings" -ForegroundColor White
Write-Host "  5. Add to Home Screen again from the NEW URL only" -ForegroundColor White
Write-Host ""
Write-Host "GITHUB PAGES (required after 404 / private repo):" -ForegroundColor Magenta
Write-Host "  https://github.com/NGMY-AI/NGMY.github.io/settings/pages" -ForegroundColor White
Write-Host "  Source: branch main + folder /docs (NOT GitHub Actions — avoids deploy emails)" -ForegroundColor White
Write-Host ""
Write-Host "[7/7] Checking live site (only works AFTER push + Pages enabled) ..." -ForegroundColor Cyan
try {
    $checkUrl = "${LiveUrl}version.json?t=$DeployId"
    $resp = Invoke-WebRequest -Uri $checkUrl -UseBasicParsing -TimeoutSec 20
    if ($resp.Content -match $DeployId) {
        Write-Host "  LIVE OK: version.json matches deploy $DeployId" -ForegroundColor Green
    } else {
        Write-Host "  LIVE: site responded but build may be older. Content: $($resp.Content)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "  LIVE NOT REACHABLE yet (404 = enable GitHub Pages or wait 2 min after push)" -ForegroundColor Red
    Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "  PC updated only means docs on THIS computer. Phone uses the GitHub URL above." -ForegroundColor Yellow
}
Write-Host ""
Write-Host "Done." -ForegroundColor Cyan
