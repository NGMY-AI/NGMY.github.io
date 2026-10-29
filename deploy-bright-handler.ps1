# Redeploy Civic/AI Edge Function (bright-handler) from ngmy-ai-chat/index.ts
#   .\deploy-bright-handler.ps1
#
# Reads SUPABASE_ACCESS_TOKEN from .ngmy_secrets.local (same as setup-stripe.ps1).

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$ProjectRef = "gvufllqqxjnpicmkxzcg"
$FunctionSlug = "bright-handler"
$fnFile = Join-Path $PSScriptRoot "supabase\functions\ngmy-ai-chat\index.ts"
# The AI limits live in their own file; it must be uploaded together with index.ts.
$gateFile = Join-Path $PSScriptRoot "supabase\functions\ngmy-ai-chat\ai_gate.ts"
$secretsPath = Join-Path $PSScriptRoot ".ngmy_secrets.local"

if (-not (Test-Path $fnFile)) { throw "Missing $fnFile" }
if (-not (Test-Path $gateFile)) { throw "Missing $gateFile" }
if (-not (Test-Path $secretsPath)) { throw "Missing .ngmy_secrets.local" }

$secrets = @{}
foreach ($line in Get-Content $secretsPath) {
    $trimmed = $line.Trim()
    if ($trimmed -eq "" -or $trimmed.StartsWith("#")) { continue }
    $idx = $trimmed.IndexOf("=")
    if ($idx -lt 1) { continue }
    $secrets[$trimmed.Substring(0, $idx).Trim()] = $trimmed.Substring($idx + 1).Trim()
}

$sbToken = $secrets["SUPABASE_ACCESS_TOKEN"]
if (-not $sbToken) { throw "SUPABASE_ACCESS_TOKEN is empty in .ngmy_secrets.local" }

$metaPath = Join-Path $env:TEMP "bright-handler-deploy-metadata.json"
Set-Content -Path $metaPath -Value '{"entrypoint_path":"index.ts","name":"bright-handler","verify_jwt":false}' -Encoding ascii

Write-Host "Deploying $FunctionSlug ..." -ForegroundColor Cyan
$deployRaw = & curl.exe -s -X POST `
    "https://api.supabase.com/v1/projects/$ProjectRef/functions/deploy?slug=$FunctionSlug" `
    -H "Authorization: Bearer $sbToken" `
    -F "metadata=@$metaPath;type=application/json" `
    -F "file=@$fnFile;type=application/typescript" `
    -F "file=@$gateFile;filename=ai_gate.ts;type=application/typescript"

Remove-Item $metaPath -ErrorAction SilentlyContinue
Write-Host $deployRaw
$deployObj = $deployRaw | ConvertFrom-Json
if ($deployObj.PSObject.Properties.Name -contains "message" -and -not $deployObj.id -and -not $deployObj.version) {
    throw "Function deploy failed: $($deployObj.message)"
}
Write-Host "OK version=$($deployObj.version) status=$($deployObj.status)" -ForegroundColor Green
