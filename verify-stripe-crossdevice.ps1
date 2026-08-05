# Verifies the money-critical guarantees end to end against the live project:
#   1. webhook credits the NGMY account email, not the email typed on Stripe
#   2. the app's public key CAN read that access row (cross-device restore)
#   3. the app's public key CANNOT forge an access row
# Run:  powershell -ExecutionPolicy Bypass -File verify-stripe-crossdevice.ps1

$ErrorActionPreference = "Stop"
$ProjectRef  = "gvufllqqxjnpicmkxzcg"
$FunctionSlug = "ngmy-stripe-webhook"
$WebhookUrl  = "https://$ProjectRef.supabase.co/functions/v1/$FunctionSlug"
$RestUrl     = "https://$ProjectRef.supabase.co/rest/v1/ngmy_stripe_access"
$AnonKey     = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dWZsbHFxeGpucGljbWt4emNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjA1OTksImV4cCI6MjA5NTM5NjU5OX0.NoJnis6t_RLSJOHu5iLdjGaCTxVj5ZAFnG3gBZ3XYbM"

$AccountEmail = "crossdevice.test@ngmy.org"      # the NGMY account
$StripeEmail  = "typed.something.else@gmail.com" # what the buyer types on Stripe

function Ok($m)   { Write-Host "  PASS  $m" -ForegroundColor Green }
function Fail($m) { Write-Host "  FAIL  $m" -ForegroundColor Red; $script:failed = $true }
function Step($m) { Write-Host "`n$m" -ForegroundColor Cyan }

$script:failed = $false

# secrets
$s = @{}
foreach ($l in Get-Content (Join-Path $PSScriptRoot ".ngmy_secrets.local")) {
    $t = $l.Trim()
    if ($t -and -not $t.StartsWith("#")) {
        $i = $t.IndexOf("=")
        if ($i -gt 0) { $s[$t.Substring(0, $i).Trim()] = $t.Substring($i + 1).Trim() }
    }
}
$sbToken = $s["SUPABASE_ACCESS_TOKEN"]
$sbHeaders = @{ Authorization = "Bearer $sbToken" }

function Invoke-Sql($sql) {
    $body = @{ query = $sql } | ConvertTo-Json -Compress
    Invoke-RestMethod -Method Post `
        -Uri "https://api.supabase.com/v1/projects/$ProjectRef/database/query" `
        -Headers $sbHeaders -ContentType "application/json" -Body $body
}

# ---------------------------------------------------------------- deploy
Step "[1] Deploying $FunctionSlug ..."
$fnDir = Join-Path $PSScriptRoot "supabase\functions\$FunctionSlug"
$deployRaw = & curl.exe -s -X POST `
    "https://api.supabase.com/v1/projects/$ProjectRef/functions/deploy?slug=$FunctionSlug" `
    -H "Authorization: Bearer $sbToken" `
    -F "metadata=@$fnDir\deploy-metadata.json;type=application/json" `
    -F "file=@$fnDir\index.ts;type=application/typescript"
$deploy = $deployRaw | ConvertFrom-Json
if ($deploy.error) { throw "Deploy failed: $($deploy.error)" }
Ok "deployed version $($deploy.version), status $($deploy.status)"
Start-Sleep -Seconds 4

# ---------------------------------------------------------- signed event
Step "[2] Sending signed live checkout.session.completed ..."

# client_reference_id = "<slug>--<base64url account email>"
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($AccountEmail))
$b64 = $b64.TrimEnd("=").Replace("+", "-").Replace("/", "_")
$clientRef = "phone_unlock--$b64"

$sessionId = "cs_verify_" + [Guid]::NewGuid().ToString("N").Substring(0, 12)
$payloadObj = @{
    id       = "evt_verify_" + [Guid]::NewGuid().ToString("N").Substring(0, 10)
    type     = "checkout.session.completed"
    livemode = $true
    data     = @{
        object = @{
            id                  = $sessionId
            object              = "checkout.session"
            payment_status      = "paid"
            client_reference_id = $clientRef
            customer_details    = @{ email = $StripeEmail }
            payment_intent      = "pi_verify_test"
        }
    }
}
$payload = $payloadObj | ConvertTo-Json -Depth 10 -Compress

# Stripe reveals a signing secret only at creation and Supabase masks secret reads,
# so sign with a throwaway secret installed under the test slot for this run. The
# live secret is never read and stays untouched.
$whSecret = "whsec_verify_" + [Guid]::NewGuid().ToString("N")
$installBody = ConvertTo-Json @(@{ name = "STRIPE_WEBHOOK_SECRET_TEST"; value = $whSecret }) -Compress
$null = Invoke-RestMethod -Method Post `
    -Uri "https://api.supabase.com/v1/projects/$ProjectRef/secrets" `
    -Headers $sbHeaders -ContentType "application/json" -Body $installBody
Ok "temporary verification secret installed"
Start-Sleep -Seconds 6

$ts = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$hmac = New-Object System.Security.Cryptography.HMACSHA256
$hmac.Key = [Text.Encoding]::UTF8.GetBytes($whSecret)
$sig = ($hmac.ComputeHash([Text.Encoding]::UTF8.GetBytes("$ts.$payload")) | ForEach-Object { $_.ToString("x2") }) -join ""

$tmp = [IO.Path]::GetTempFileName()
[IO.File]::WriteAllText($tmp, $payload)
$resp = & curl.exe -s -w "`n%{http_code}" -X POST $WebhookUrl `
    -H "Content-Type: application/json" `
    -H "stripe-signature: t=$ts,v1=$sig" `
    --data-binary "@$tmp"
Remove-Item $tmp -Force
$parts = $resp -split "`n"
$code = $parts[-1]
if ($code -eq "200") { Ok "webhook accepted the signed event" } else { Fail "webhook returned $code : $($parts[0])" }

Start-Sleep -Seconds 2

# ------------------------------------------------- account email wins
Step "[3] Checking access was credited to the NGMY account ..."
$rows = Invoke-Sql "select email, product, access_until from public.ngmy_stripe_access where stripe_session_id = '$sessionId';"
if ($rows.Count -eq 0) {
    Fail "no row written"
} elseif ($rows[0].email -eq $AccountEmail) {
    Ok "credited $($rows[0].email) (ignored the Stripe-typed $StripeEmail)"
    Ok "product $($rows[0].product), until $($rows[0].access_until)"
} else {
    Fail "credited the wrong account: $($rows[0].email)"
}

# --------------------------------------- app can read it (cross-device)
Step "[4] Reading it back with the app's public key (second device) ..."
$readRaw = & curl.exe -s "$RestUrl`?email=eq.$AccountEmail&product=eq.phone_unlock&select=product,access_until" `
    -H "apikey: $AnonKey" -H "Authorization: Bearer $AnonKey"
$read = $readRaw | ConvertFrom-Json
if ($read -and $read.Count -ge 1 -and $read[0].access_until) {
    Ok "second device sees access until $($read[0].access_until)"
} else {
    Fail "second device got nothing back: $readRaw"
}

# ------------------------------------------- app cannot forge access
Step "[5] Making sure a client cannot grant itself access ..."
$forgeBody = '{"email":"attacker@example.com","product":"doc_share_org","access_until":"2099-01-01T00:00:00Z"}'
$forge = & curl.exe -s -o NUL -w "%{http_code}" -X POST $RestUrl `
    -H "apikey: $AnonKey" -H "Authorization: Bearer $AnonKey" `
    -H "Content-Type: application/json" --data $forgeBody
if ($forge -eq "201" -or $forge -eq "200") {
    Fail "a client was able to insert a paid-access row (code $forge)"
} else {
    Ok "forged insert rejected with $forge"
}

# ------------------------------------------------------------ cleanup
Step "[6] Cleaning up test rows and the temporary secret ..."
$null = Invoke-Sql "delete from public.ngmy_stripe_access where email in ('$AccountEmail','attacker@example.com');"
Ok "test rows removed"

$delBody = ConvertTo-Json @("STRIPE_WEBHOOK_SECRET_TEST") -Compress
try {
    $null = Invoke-RestMethod -Method Delete `
        -Uri "https://api.supabase.com/v1/projects/$ProjectRef/secrets" `
        -Headers $sbHeaders -ContentType "application/json" -Body $delBody
    Ok "temporary verification secret removed"
} catch {
    Fail "could not remove temporary secret - delete STRIPE_WEBHOOK_SECRET_TEST by hand"
}

Write-Host ""
if ($script:failed) {
    Write-Host "SOME CHECKS FAILED" -ForegroundColor Red
    exit 1
}
Write-Host "ALL CHECKS PASSED - cross-device paid access is working" -ForegroundColor Green
