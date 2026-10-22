# Creates the $125 / 30 days Stripe Payment Link for House Care and prints its URL.
#   .\setup-house-care-stripe.ps1
#
# Reads credentials from .ngmy_secrets.local (git-ignored), same as setup-stripe.ps1.
# ASCII only: Windows PowerShell 5.1 parses .ps1 as ANSI.

param(
    [int]$AmountCents = 12500,
    [string]$Currency = "usd",
    [string]$SiteUrl = "https://ngmy.org/",
    [ValidateSet("test", "live", "")]
    [string]$Mode = "live"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$secrets = @{}
foreach ($line in Get-Content (Join-Path $PSScriptRoot ".ngmy_secrets.local")) {
    $t = $line.Trim()
    if ($t -eq "" -or $t.StartsWith("#")) { continue }
    $i = $t.IndexOf("=")
    if ($i -lt 1) { continue }
    $secrets[$t.Substring(0, $i).Trim()] = $t.Substring($i + 1).Trim()
}
$mode = if ($Mode) { $Mode } elseif ($secrets["STRIPE_MODE"]) { $secrets["STRIPE_MODE"].ToLower() } else { "test" }
$key = if ($mode -eq "live") { $secrets["STRIPE_SECRET_KEY_LIVE"] } else { $secrets["STRIPE_SECRET_KEY_TEST"] }
if (-not $key) { $key = $secrets["STRIPE_SECRET_KEY"] }
if (-not $key) { throw "No Stripe secret key found for mode '$mode'" }

function Invoke-Stripe {
    param([string]$Method, [string]$Path, [string[]]$Fields = @())
    $cargs = @("-s", "-X", $Method, "https://api.stripe.com/v1/$Path", "-u", "${key}:")
    foreach ($f in $Fields) { $cargs += "--data-urlencode"; $cargs += $f }
    $raw = & curl.exe @cargs
    if (-not $raw) { throw "Empty response from Stripe: $Method $Path" }
    $obj = $raw | ConvertFrom-Json
    if ($obj.PSObject.Properties.Name -contains "error") { throw "Stripe $Method $Path failed: $($obj.error.message)" }
    return $obj
}

Write-Host "Stripe mode: $mode"
$product = Invoke-Stripe -Method POST -Path "products" -Fields @(
    "name=NGMY House Care (30 days)",
    "metadata[ngmy_product]=house_insurance"
)
$price = Invoke-Stripe -Method POST -Path "prices" -Fields @(
    "currency=$Currency", "unit_amount=$AmountCents", "product=$($product.id)"
)
$redirect = $SiteUrl + "?ngmy_pay_ok=1" + [char]38 + "ngmy_pay=house_insurance"
$link = Invoke-Stripe -Method POST -Path "payment_links" -Fields @(
    "line_items[0][price]=$($price.id)",
    "line_items[0][quantity]=1",
    "metadata[ngmy_product]=house_insurance",
    "after_completion[type]=redirect",
    "after_completion[redirect][url]=$redirect"
)
Write-Host "LINK=$($link.url)"
