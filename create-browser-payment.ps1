# Sets up the $5.99 advisor browser payment, end to end:
#   .\create-browser-payment.ps1            (uses STRIPE_MODE from .ngmy_secrets.local, "test" when empty)
#   .\create-browser-payment.ps1 -Mode live
#
# 1) creates the browser_payments table in Supabase
# 2) creates the Stripe product, the 5.99 price and the Payment Link (or reuses the one made before)
# 3) writes the link into lib\ngmy_stripe_payments.dart (advisorBrowserUrl)
# 4) deploys the Stripe webhook (it now knows the browser pass) and the advisor function
#
# The keys are read from .ngmy_secrets.local by this script only. ASCII only: Windows PowerShell 5.1 parses .ps1 as ANSI.

param(
    [ValidateSet("test", "live", "")]
    [string]$Mode = "",
    [string]$ProjectRef = "gvufllqqxjnpicmkxzcg",
    [string]$SiteUrl = "https://ngmy.org/"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$Slug = "advisor_browser"
$Cents = 599

function Write-Step($n, $text) { Write-Host ""; Write-Host "[$n] $text" -ForegroundColor Cyan }
function Write-Ok($text) { Write-Host "  OK   $text" -ForegroundColor Green }

$script:StripeKey = ""
function Invoke-Stripe {
    param([string]$Method, [string]$Path, [string[]]$Fields = @())
    $cargs = @("-s", "-X", $Method, "https://api.stripe.com/v1/$Path", "-u", "$($script:StripeKey):")
    foreach ($f in $Fields) { $cargs += "--data-urlencode"; $cargs += $f }
    $raw = & curl.exe @cargs
    if (-not $raw) { throw "Empty response from Stripe: $Method $Path" }
    $obj = $raw | ConvertFrom-Json
    if ($obj.PSObject.Properties.Name -contains "error") { throw "Stripe $Method $Path failed: $($obj.error.message)" }
    return $obj
}

$secretsPath = Join-Path $PSScriptRoot ".ngmy_secrets.local"
if (-not (Test-Path $secretsPath)) { throw "Missing .ngmy_secrets.local" }
$secrets = @{}
foreach ($line in Get-Content $secretsPath) {
    $t = $line.Trim()
    if ($t -eq "" -or $t.StartsWith("#")) { continue }
    $i = $t.IndexOf("=")
    if ($i -lt 1) { continue }
    $secrets[$t.Substring(0, $i).Trim()] = $t.Substring($i + 1).Trim()
}

$useMode = if ($Mode) { $Mode } elseif ($secrets["STRIPE_MODE"]) { $secrets["STRIPE_MODE"].ToLower() } else { "test" }
$stripeKey = if ($useMode -eq "live") { $secrets["STRIPE_SECRET_KEY_LIVE"] } else { $secrets["STRIPE_SECRET_KEY_TEST"] }
if (-not $stripeKey) { $stripeKey = $secrets["STRIPE_SECRET_KEY"] }
if (-not $stripeKey) { throw "No Stripe secret key found for mode '$useMode' in .ngmy_secrets.local" }
$isLive = $stripeKey.StartsWith("sk_live_")
if ($useMode -eq "live" -and -not $isLive) { throw "Mode is live but the key is not sk_live_" }
if ($useMode -eq "test" -and $isLive) { throw "Mode is test but the key is sk_live_" }
$script:StripeKey = $stripeKey
$sbToken = $secrets["SUPABASE_ACCESS_TOKEN"]
if (-not $sbToken) { throw "SUPABASE_ACCESS_TOKEN is empty in .ngmy_secrets.local" }

Write-Host "Stripe mode: $(if ($isLive) { 'LIVE (real money)' } else { 'TEST' })" -ForegroundColor Cyan

# 1. the table
Write-Step 1 "Creating the browser_payments table ..."
$sql = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "supabase\browser_payments.sql"))
$sqlBody = @{ query = [string]$sql } | ConvertTo-Json -Compress -Depth 3
$null = Invoke-RestMethod -Method Post -Uri "https://api.supabase.com/v1/projects/$ProjectRef/database/query" `
    -Headers @{ Authorization = "Bearer $sbToken" } -ContentType "application/json" -Body $sqlBody
Write-Ok "Table ready"

# 2. the Stripe payment link
Write-Step 2 "Creating the Stripe Payment Link (USD 5.99) ..."
$all = Invoke-Stripe -Method GET -Path "payment_links?limit=100"
$pl = $null
foreach ($cand in $all.data) {
    if ($cand.active -and $cand.metadata.ngmy_product -eq $Slug) { $pl = $cand; break }
}
if (-not $pl) {
    $product = Invoke-Stripe -Method POST -Path "products" -Fields @(
        "name=NGMY Advisor Browser (2 hours)",
        "description=2 hours of the advisors live browser, to use within a week",
        "metadata[ngmy_product]=$Slug"
    )
    $price = Invoke-Stripe -Method POST -Path "prices" -Fields @("currency=usd", "unit_amount=$Cents", "product=$($product.id)")
    $pl = Invoke-Stripe -Method POST -Path "payment_links" -Fields @(
        "line_items[0][price]=$($price.id)",
        "line_items[0][quantity]=1",
        "metadata[ngmy_product]=$Slug"
    )
    Write-Ok "Created $($pl.url)"
} else {
    Write-Ok "Reusing $($pl.url)"
}
$redirect = $SiteUrl + "?ngmy_pay_ok=1" + [char]38 + "ngmy_pay=" + $Slug
$null = Invoke-Stripe -Method POST -Path "payment_links/$($pl.id)" -Fields @(
    "after_completion[type]=redirect",
    "after_completion[redirect][url]=$redirect",
    "metadata[ngmy_product]=$Slug"
)

# 3. the link into the app
Write-Step 3 "Writing the link into the app ..."
$dart = Join-Path $PSScriptRoot "lib\ngmy_stripe_payments.dart"
$text = [System.IO.File]::ReadAllText($dart)
$pattern = "static const String advisorBrowserUrl = '[^']*';"
if ($text -notmatch $pattern) { throw "advisorBrowserUrl was not found in $dart" }
$text = [regex]::Replace($text, $pattern, "static const String advisorBrowserUrl = '$($pl.url)';")
[System.IO.File]::WriteAllText($dart, $text)
Write-Ok "advisorBrowserUrl = $($pl.url)"

# 4. the functions
Write-Step 4 "Deploying the Stripe webhook ..."
$fnDir = Join-Path $PSScriptRoot "supabase\functions\ngmy-stripe-webhook"
$raw = & curl.exe -s -X POST "https://api.supabase.com/v1/projects/$ProjectRef/functions/deploy?slug=ngmy-stripe-webhook" `
    -H "Authorization: Bearer $sbToken" `
    -F "metadata=@$fnDir\deploy-metadata.json;type=application/json" `
    -F "file=@$fnDir\index.ts;type=application/typescript"
$obj = $raw | ConvertFrom-Json
if ($obj.PSObject.Properties.Name -contains "message" -and -not $obj.version) { throw "Webhook deploy failed: $($obj.message)" }
Write-Ok "Webhook deployed (version $($obj.version))"

Write-Step 5 "Deploying the advisor function (bright-handler) ..."
& (Join-Path $PSScriptRoot "deploy-bright-handler.ps1")

Write-Host ""
Write-Host "Done. Now tell Claude 'the link is in', so the app with the link is committed and pushed." -ForegroundColor Green
