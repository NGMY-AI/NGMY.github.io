# NGMY Stripe + Supabase setup - runs the whole integration end to end.
#   .\setup-stripe.ps1 -Mode test
#   .\setup-stripe.ps1 -Mode live
#
# Reads credentials from .ngmy_secrets.local (git-ignored).
# ASCII only: Windows PowerShell 5.1 parses .ps1 as ANSI.

param(
    [int]$PhoneUnlockAmount = 1999,
    [string]$Currency = "usd",
    [string]$ProjectRef = "gvufllqqxjnpicmkxzcg",
    [string]$SiteUrl = "https://ngmy.org/",
    [ValidateSet("test", "live", "")]
    [string]$Mode = ""
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$FunctionSlug = "ngmy-stripe-webhook"
$WebhookUrl = "https://$ProjectRef.supabase.co/functions/v1/$FunctionSlug"

function Write-Step($n, $text) { Write-Host "" ; Write-Host "[$n] $text" -ForegroundColor Cyan }
function Write-Ok($text) { Write-Host "  OK   $text" -ForegroundColor Green }
function Write-Warn2($text) { Write-Host "  WARN $text" -ForegroundColor Yellow }

# Stripe calls go through curl.exe: PowerShell 5.1 mangles form-encoded bodies.
$script:StripeKey = ""

function Invoke-Stripe {
    param(
        [string]$Method,
        [string]$Path,
        [string[]]$Fields = @()
    )
    $cargs = @("-s", "-X", $Method, "https://api.stripe.com/v1/$Path", "-u", "$($script:StripeKey):")
    foreach ($f in $Fields) { $cargs += "--data-urlencode"; $cargs += $f }
    $raw = & curl.exe @cargs
    if (-not $raw) { throw "Empty response from Stripe: $Method $Path" }
    $obj = $raw | ConvertFrom-Json
    if ($obj.PSObject.Properties.Name -contains "error") {
        throw "Stripe $Method $Path failed: $($obj.error.message)"
    }
    return $obj
}

# ---------------------------------------------------------------- credentials
$secretsPath = Join-Path $PSScriptRoot ".ngmy_secrets.local"
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

$useMode = if ($Mode) { $Mode } elseif ($secrets["STRIPE_MODE"]) { $secrets["STRIPE_MODE"].ToLower() } else { "test" }

if ($useMode -eq "live") {
    $stripeKey = $secrets["STRIPE_SECRET_KEY_LIVE"]
} else {
    $stripeKey = $secrets["STRIPE_SECRET_KEY_TEST"]
}
if (-not $stripeKey) { $stripeKey = $secrets["STRIPE_SECRET_KEY"] }
if (-not $stripeKey) { throw "No Stripe secret key found for mode '$useMode'" }

$isLive = $stripeKey.StartsWith("sk_live_")
if ($useMode -eq "live" -and -not $isLive) { throw "Mode is live but key is not sk_live_" }
if ($useMode -eq "test" -and $isLive) { throw "Mode is test but key is sk_live_" }

$modeLabel = if ($isLive) { "LIVE (real money)" } else { "TEST" }

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " NGMY Stripe Integration Setup" -ForegroundColor Cyan
Write-Host " Project : $ProjectRef" -ForegroundColor Cyan
Write-Host " Stripe  : $modeLabel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$sbHeaders = @{ Authorization = "Bearer $sbToken" }
$script:StripeKey = $stripeKey

# ---------------------------------------------------------- 1. database table
Write-Step 1 "Creating ngmy_stripe_access table ..."
$sql = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "supabase\ngmy_stripe_access_table.sql"))
$sqlBody = @{ query = [string]$sql } | ConvertTo-Json -Compress -Depth 3
$null = Invoke-RestMethod -Method Post `
    -Uri "https://api.supabase.com/v1/projects/$ProjectRef/database/query" `
    -Headers $sbHeaders -ContentType "application/json" -Body $sqlBody
Write-Ok "Table and RLS policies ready"

# ----------------------------------------------------------- 2. edge function
# Must use the multipart /deploy endpoint. The legacy JSON "body" field
# registers the function but ships no runnable bundle, which boots as 503.
Write-Step 2 "Deploying Edge Function $FunctionSlug ..."
$fnDir = Join-Path $PSScriptRoot "supabase\functions\$FunctionSlug"
$metaPath = Join-Path $fnDir "deploy-metadata.json"

$deployRaw = & curl.exe -s -X POST `
    "https://api.supabase.com/v1/projects/$ProjectRef/functions/deploy?slug=$FunctionSlug" `
    -H "Authorization: Bearer $sbToken" `
    -F "metadata=@$metaPath;type=application/json" `
    -F "file=@$fnDir\index.ts;type=application/typescript"

$deployObj = $deployRaw | ConvertFrom-Json
if ($deployObj.PSObject.Properties.Name -contains "message") {
    throw "Function deploy failed: $($deployObj.message)"
}
Write-Ok "Function deployed (version $($deployObj.version), status $($deployObj.status))"

# -------------------------------------------------------- 3. stripe webhook
Write-Step 3 "Creating Stripe webhook endpoint ..."

$existing = Invoke-Stripe -Method GET -Path "webhook_endpoints?limit=100"

foreach ($ep in $existing.data) {
    if ($ep.url -eq $WebhookUrl) {
        Write-Warn2 "Removing old endpoint $($ep.id) to issue a fresh signing secret"
        $null = Invoke-Stripe -Method DELETE -Path "webhook_endpoints/$($ep.id)"
    }
}

$wh = Invoke-Stripe -Method POST -Path "webhook_endpoints" -Fields @(
    "url=$WebhookUrl",
    "enabled_events[]=checkout.session.completed",
    "description=NGMY paid feature unlock"
)

$whSecret = $wh.secret
if (-not $whSecret) { throw "Stripe did not return a webhook signing secret" }
Write-Ok "Webhook created: $($wh.id)"

# ------------------------------------------------------- 4. supabase secrets
# Live and test secrets are kept under separate names so both endpoints work.
Write-Step 4 "Setting Supabase Edge Function secrets ..."
if ($isLive) {
    $keyName = "STRIPE_SECRET_KEY"
    $secretName = "STRIPE_WEBHOOK_SECRET"
} else {
    $keyName = "STRIPE_SECRET_KEY_TEST"
    $secretName = "STRIPE_WEBHOOK_SECRET_TEST"
}
$secretsBody = ConvertTo-Json @(
    @{ name = $keyName; value = $stripeKey },
    @{ name = $secretName; value = $whSecret }
) -Compress
$null = Invoke-RestMethod -Method Post `
    -Uri "https://api.supabase.com/v1/projects/$ProjectRef/secrets" `
    -Headers $sbHeaders -ContentType "application/json" -Body $secretsBody
Write-Ok "$keyName and $secretName stored"

# ------------------------------------------------------ 5. wire payment links
# Tags every existing NGMY payment link with its product slug and points its
# post-payment redirect back at the app, so checkout always identifies itself.
Write-Step 5 "Wiring payment links for all paid features ..."

$productLinks = [ordered]@{
    "doc_share_org" = "https://buy.stripe.com/eVq9AT5Rvggh8kb3q5b7y08"
    "invoice"       = "https://buy.stripe.com/dRm6oHeo16FHeIzaSxb7y07"
    "advisors"      = "https://buy.stripe.com/cNi28reo19RTgQH8Kpb7y06"
    "family_tree"   = "https://buy.stripe.com/14A5kDfs57JL0RJ3q5b7y05"
    "translator"    = "https://buy.stripe.com/00wfZhbbP3tvgQH6Chb7y04"
    "scanner"       = "https://buy.stripe.com/cNibJ11Bf1ln0RJaSxb7y03"
    "marriage"      = "https://buy.stripe.com/28EdR993H3tvdEvf8Nb7y09"
    "phone_unlock"  = "https://buy.stripe.com/5kQeVd2Fjggh9ofd0Fb7y0a"
}

$allLinks = Invoke-Stripe -Method GET -Path "payment_links?limit=100"
$byUrl = @{}
foreach ($pl in $allLinks.data) { $byUrl[$pl.url] = $pl }

$wired = [ordered]@{}
$missing = @()

foreach ($slug in $productLinks.Keys) {
    $wantUrl = $productLinks[$slug]
    $pl = $null

    if ($isLive) {
        if ($byUrl.ContainsKey($wantUrl)) { $pl = $byUrl[$wantUrl] }
    } else {
        # Test mode links have different URLs; match on metadata instead.
        foreach ($cand in $allLinks.data) {
            if ($cand.active -and $cand.metadata.ngmy_product -eq $slug) { $pl = $cand; break }
        }
    }

    if (-not $pl) { $missing += $slug; continue }

    $redirect = $SiteUrl + "?ngmy_pay_ok=1" + [char]38 + "ngmy_pay=" + $slug
    $null = Invoke-Stripe -Method POST -Path "payment_links/$($pl.id)" -Fields @(
        "after_completion[type]=redirect",
        "after_completion[redirect][url]=$redirect",
        "metadata[ngmy_product]=$slug"
    )

    $items = Invoke-Stripe -Method GET -Path "payment_links/$($pl.id)/line_items?limit=1"
    $amt = if ($items.data.Count -gt 0) { $items.data[0].amount_total } else { 0 }
    $amtText = [math]::Round($amt / 100, 2)

    $wired[$slug] = $pl.url
    Write-Ok ("{0,-14} {1,8} {2}" -f $slug, $amtText, $pl.url)
}

if ($missing.Count -gt 0) {
    Write-Warn2 "No payment link found for: $($missing -join ', ')"
}

$link = $null
if ($wired.Contains("phone_unlock")) {
    $link = @{ url = $wired["phone_unlock"] }
}

# ------------------------------------------------------------ 6. verification
Write-Step 6 "Verifying webhook rejects unsigned calls ..."
Start-Sleep -Seconds 5
$probeCode = & curl.exe -s -o NUL -w "%{http_code}" -X POST $WebhookUrl `
    -H "Content-Type: application/json" -d "{}"
if ($probeCode -eq "400") {
    Write-Ok "Unsigned call rejected with 400 - correct"
} else {
    Write-Warn2 "Unsigned probe returned $probeCode (expected 400)"
}

# ------------------------------------------------- 7. end-to-end signed test
Write-Step 7 "Sending a signed test event through the full chain ..."

$testEmail = "stripe-selftest@ngmy.org"
$payloadObj = @{
    id   = "evt_ngmy_selftest"
    type = "checkout.session.completed"
    data = @{
        object = @{
            id                  = "cs_test_ngmy_selftest"
            payment_status      = "paid"
            client_reference_id = "phone_unlock"
            payment_intent      = "pi_test_ngmy_selftest"
            customer_details    = @{ email = $testEmail }
        }
    }
}
$payload = $payloadObj | ConvertTo-Json -Compress -Depth 6
# Must be UTC: PowerShell 5.1's -UFormat %s uses local time and would fail tolerance.
$stamp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()

$hmac = New-Object System.Security.Cryptography.HMACSHA256
$hmac.Key = [Text.Encoding]::UTF8.GetBytes($whSecret)
$sigBytes = $hmac.ComputeHash([Text.Encoding]::UTF8.GetBytes("$stamp.$payload"))
$sigHex = ($sigBytes | ForEach-Object { $_.ToString("x2") }) -join ""
$hmac.Dispose()

$payloadFile = Join-Path $env:TEMP "ngmy_stripe_selftest.json"
[System.IO.File]::WriteAllText($payloadFile, $payload, (New-Object Text.UTF8Encoding $false))

$testResp = & curl.exe -s -w "`n%{http_code}" -X POST $WebhookUrl `
    -H "Content-Type: application/json" `
    -H "stripe-signature: t=$stamp,v1=$sigHex" `
    --data-binary "@$payloadFile"
Remove-Item $payloadFile -ErrorAction SilentlyContinue

$testLines = $testResp -split "`n"
$testCode = $testLines[-1]
$testBody = ($testLines[0..($testLines.Count - 2)]) -join ""

if ($testCode -eq "200") {
    Write-Ok "Webhook accepted signed event"
} else {
    Write-Warn2 "Signed event returned $testCode : $testBody"
}

Write-Host "  ..  Checking database row ..." -ForegroundColor DarkGray
$checkSql = "select email, product, access_until from public.ngmy_stripe_access where email = '$testEmail';"
$checkBody = @{ query = [string]$checkSql } | ConvertTo-Json -Compress -Depth 3
$rows = Invoke-RestMethod -Method Post `
    -Uri "https://api.supabase.com/v1/projects/$ProjectRef/database/query" `
    -Headers $sbHeaders -ContentType "application/json" -Body $checkBody

if ($rows -and $rows.Count -gt 0) {
    Write-Ok "Database row written: $($rows[0].product) until $($rows[0].access_until)"
    $cleanupSql = "delete from public.ngmy_stripe_access where email = '$testEmail';"
    $cleanupBody = @{ query = [string]$cleanupSql } | ConvertTo-Json -Compress -Depth 3
    $null = Invoke-RestMethod -Method Post `
        -Uri "https://api.supabase.com/v1/projects/$ProjectRef/database/query" `
        -Headers $sbHeaders -ContentType "application/json" -Body $cleanupBody
    Write-Ok "Test row cleaned up - END TO END WORKING"
} else {
    Write-Warn2 "No database row found - webhook did not persist access"
}

# ------------------------------------------------------------------- summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " SETUP COMPLETE ($modeLabel)" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Wired payment links:" -ForegroundColor Yellow
foreach ($slug in $wired.Keys) {
    Write-Host ("  {0,-14} {1}" -f $slug, $wired[$slug]) -ForegroundColor White
}
Write-Host ""
Write-Host "Webhook endpoint:" -ForegroundColor Yellow
Write-Host "  $WebhookUrl" -ForegroundColor White
Write-Host ""

$lines = @()
foreach ($slug in $wired.Keys) { $lines += "$slug=$($wired[$slug])" }
$lines | Set-Content -Path (Join-Path $PSScriptRoot ".ngmy_payment_links.txt") -Encoding ASCII
Write-Host "Links saved to .ngmy_payment_links.txt" -ForegroundColor DarkGray
