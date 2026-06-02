# Quick deploy — run from anywhere. Fixes common typo: ngmy] vs ngmy
$ProjectRoot = 'C:\Users\appbu\StudioProjects\ngmy'
if (-not (Test-Path $ProjectRoot)) {
    Write-Host "Project not found: $ProjectRoot" -ForegroundColor Red
    exit 1
}
Set-Location $ProjectRoot
& "$ProjectRoot\publish-web.ps1"
