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
Write-Step 4 "Setting Supabase Edge Function secrets ..."
$secretsBody = ConvertTo-Json @(
    @{ name = "STRIPE_SECRET_KEY"; value = $stripeKey },
    @{ name = "STRIPE_WEBHOOK_SECRET"; value = $whSecret }
) -Compress
$null = Invoke-RestMethod -Method Post `
    -Uri "https://api.supabase.com/v1/projects/$ProjectRef/secrets" `
    -Headers $sbHeaders -ContentType "application/json" -Body $secretsBody
Write-Ok "STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET stored"

# -------------------------------------------------- 5. phone unlock pay link
Write-Step 5 "Creating Phone Unlock product and payment link ..."

$amountText = [math]::Round($PhoneUnlockAmount / 100, 2)
$returnUrl = $SiteUrl + "?ngmy_pay_ok=1" + [char]38 + "ngmy_pay=phone_unlock"

# Reuse an existing active link at the same price so repeat runs don't pile up
# duplicate products in the Stripe dashboard.
$link = $null
$existingLinks = Invoke-Stripe -Method GET -Path "payment_links?limit=100"
foreach ($pl in $existingLinks.data) {
    if ($pl.active -and $pl.metadata.ngmy_product -eq "phone_unlock") {
        $items = Invoke-Stripe -Method GET -Path "payment_links/$($pl.id)/line_items?limit=1"
        if ($items.data.Count -gt 0 -and $items.data[0].amount_total -eq $PhoneUnlockAmount) {
            $link = $pl
            Write-Ok "Reusing existing payment link $($pl.id)"
            break
        }
    }
}

if (-not $link) {
    $product = Invoke-Stripe -Method POST -Path "products" -Fields @(
        "name=NGMY Phone Unlock (10 days)",
        "description=Instant access to NGMY Phone Unlock tools for 10 days."
    )
    Write-Ok "Product $($product.id)"

    $price = Invoke-Stripe -Method POST -Path "prices" -Fields @(
        "product=$($product.id)",
        "unit_amount=$PhoneUnlockAmount",
        "currency=$Currency"
    )
    Write-Ok "Price $($price.id) = $amountText $($Currency.ToUpper())"

    $link = Invoke-Stripe -Method POST -Path "payment_links" -Fields @(
        "line_items[0][price]=$($price.id)",
        "line_items[0][quantity]=1",
        "after_completion[type]=redirect",
        "after_completion[redirect][url]=$returnUrl",
        "metadata[ngmy_product]=phone_unlock"
    )
    Write-Ok "Payment link created"
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
Write-Host "Phone Unlock payment link:" -ForegroundColor Yellow
Write-Host "  $($link.url)" -ForegroundColor White
Write-Host ""
Write-Host "Webhook endpoint:" -ForegroundColor Yellow
Write-Host "  $WebhookUrl" -ForegroundColor White
Write-Host ""

$link.url | Set-Content -Path (Join-Path $PSScriptRoot ".ngmy_phone_unlock_link.txt") -Encoding ASCII
Write-Host "Link saved to .ngmy_phone_unlock_link.txt" -ForegroundColor DarkGray
