// Stripe webhook - records paid access in ngmy_stripe_access when checkout completes.
// Deploy (no JWT - Stripe calls this directly):
//   supabase functions deploy ngmy-stripe-webhook --project-ref gvufllqqxjnpicmkxzcg --no-verify-jwt
//
// Supabase secrets (Dashboard -> Edge Functions -> Secrets):
//   STRIPE_WEBHOOK_SECRET=whsec_...
//
// Stripe Dashboard -> Webhooks -> Add endpoint:
//   https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/ngmy-stripe-webhook
// Events: checkout.session.completed
//
// Signature verification is done with Web Crypto rather than the Stripe SDK:
// the SDK's Deno build is heavy and has failed to cold-boot here.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, stripe-signature",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const PRODUCT_SLUGS = new Set([
  "doc_share_org",
  "invoice",
  "advisors",
  "family_tree",
  "translator",
  "scanner",
  "marriage",
  "phone_unlock",
  "menu_studio",
  "bio_studio",
  "business_card",
  "bio_photo_pack",
  "qr_generator",
  "swahili_level",
  "slides_studio",
]);

const ACCESS_DAYS_DEFAULT = 30;
const ACCESS_DAYS_PHONE_UNLOCK = 10;
const ACCESS_HOURS_MARRIAGE = 4;
const ACCESS_DAYS_BUSINESS_CARD = 2;
const ACCESS_DAYS_BIO_PHOTO_PACK = 1;
const ACCESS_DAYS_QR_GENERATOR = 14;
const ACCESS_DAYS_SWAHILI_LEVEL = 36500;
const SIGNATURE_TOLERANCE_SEC = 300;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function normalize(raw: unknown): string {
  return String(raw ?? "").toLowerCase().trim();
}

function constantTimeEquals(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function verifyStripeSignature(
  payload: string,
  signatureHeader: string,
  secret: string,
): Promise<{ ok: boolean; reason?: string }> {
  let timestamp = "";
  const signatures: string[] = [];

  for (const part of signatureHeader.split(",")) {
    const [key, value] = part.trim().split("=");
    if (key === "t") timestamp = value;
    else if (key === "v1" && value) signatures.push(value);
  }

  if (!timestamp || signatures.length === 0) {
    return { ok: false, reason: "malformed signature header" };
  }

  const ts = Number.parseInt(timestamp, 10);
  if (!Number.isFinite(ts)) return { ok: false, reason: "bad timestamp" };
  if (Math.abs(Date.now() / 1000 - ts) > SIGNATURE_TOLERANCE_SEC) {
    return { ok: false, reason: "timestamp outside tolerance" };
  }

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(`${timestamp}.${payload}`),
  );
  const expected = toHex(mac);

  const matched = signatures.some((sig) => constantTimeEquals(sig, expected));
  return matched ? { ok: true } : { ok: false, reason: "no matching signature" };
}

function accessUntilForProduct(product: string, existingUntil: Date | null): string {
  const now = new Date();
  if (product === "marriage") {
    return new Date(now.getTime() + ACCESS_HOURS_MARRIAGE * 3600_000).toISOString();
  }
  if (product === "phone_unlock") {
    return new Date(now.getTime() + ACCESS_DAYS_PHONE_UNLOCK * 86_400_000).toISOString();
  }
  if (product === "qr_generator") {
    return new Date(now.getTime() + ACCESS_DAYS_QR_GENERATOR * 86_400_000).toISOString();
  }
  if (product.startsWith("business_card:")) {
    return new Date(now.getTime() + ACCESS_DAYS_BUSINESS_CARD * 86_400_000).toISOString();
  }
  if (product.startsWith("bio_photo_pack:")) {
    return new Date(now.getTime() + ACCESS_DAYS_BIO_PHOTO_PACK * 86_400_000).toISOString();
  }
  if (product.startsWith("swahili_level:")) {
    return new Date(now.getTime() + ACCESS_DAYS_SWAHILI_LEVEL * 86_400_000).toISOString();
  }
  const base = existingUntil && existingUntil.getTime() > now.getTime() ? existingUntil : now;
  return new Date(base.getTime() + ACCESS_DAYS_DEFAULT * 86_400_000).toISOString();
}

/// client_reference_id carries "<slug>--<base64url email>[--<base64url scope>]".
/// Stripe only permits [A-Za-z0-9_-] there, hence the encoding.
function parseClientReference(raw: unknown): { slug: string; email: string; scope: string } {
  const value = String(raw ?? "").trim();
  if (!value) return { slug: "", email: "", scope: "" };

  const sep = value.indexOf("--");
  if (sep < 0) return { slug: normalize(value), email: "", scope: "" };

  const slug = normalize(value.slice(0, sep));
  const parts = value.slice(sep + 2).split("--");
  const decodePart = (encoded: string): string => {
    if (!encoded) return "";
    const padded = encoded.replaceAll("-", "+").replaceAll("_", "/");
    return atob(padded + "=".repeat((4 - padded.length % 4) % 4));
  };
  let email = "";
  let scope = "";
  try {
    email = normalize(decodePart(parts[0] ?? ""));
  } catch {
    email = "";
  }
  try {
    scope = String(decodePart(parts[1] ?? "")).trim();
  } catch {
    scope = "";
  }
  return { slug, email, scope };
}

// deno-lint-ignore no-explicit-any
function productFromSession(session: any): string {
  const { slug } = parseClientReference(session?.client_reference_id);
  if (PRODUCT_SLUGS.has(slug)) return slug;

  const meta = session?.metadata ?? {};
  const fromMeta = normalize(meta.ngmy_product ?? meta.product);
  if (PRODUCT_SLUGS.has(fromMeta)) return fromMeta;

  return "";
}

/// Fallback for checkouts opened straight from a Payment Link URL, where the
/// app never got to attach client_reference_id. Payment Link metadata does not
/// copy onto the session, so it has to be fetched.
async function productFromPaymentLink(
  paymentLinkId: string,
  liveMode: boolean,
): Promise<string> {
  const secretKey = liveMode
    ? (Deno.env.get("STRIPE_SECRET_KEY") ?? "")
    : (Deno.env.get("STRIPE_SECRET_KEY_TEST") ?? Deno.env.get("STRIPE_SECRET_KEY") ?? "");
  if (!secretKey || !paymentLinkId) return "";

  try {
    const res = await fetch(`https://api.stripe.com/v1/payment_links/${paymentLinkId}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
    });
    if (!res.ok) return "";
    const link = await res.json();
    const slug = normalize(link?.metadata?.ngmy_product);
    return PRODUCT_SLUGS.has(slug) ? slug : "";
  } catch (err) {
    console.error("[ngmy-stripe-webhook] payment link lookup failed:", err);
    return "";
  }
}

/// The NGMY account email wins over the Stripe checkout email: access has to land
/// on the account the buyer is signed into, even if they typed a different address
/// on Stripe's page.
// deno-lint-ignore no-explicit-any
function emailFromSession(session: any): string {
  const { email: fromRef } = parseClientReference(session?.client_reference_id);
  if (fromRef.includes("@")) return fromRef;

  return normalize(
    session?.customer_details?.email ??
      session?.customer_email ??
      session?.metadata?.ngmy_email ??
      session?.metadata?.email,
  );
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  // Both secrets are accepted so the live and test endpoints can coexist.
  const secretCandidates = [
    Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "",
    Deno.env.get("STRIPE_WEBHOOK_SECRET_TEST") ?? "",
  ].filter((s) => s.length > 0);

  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  if (secretCandidates.length === 0 || !supabaseUrl || !serviceKey) {
    console.error("[ngmy-stripe-webhook] missing env configuration");
    return json({ error: "Server misconfigured" }, 500);
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) return json({ error: "Missing stripe-signature" }, 400);

  const body = await req.text();

  let verified = { ok: false, reason: "no secret matched" } as {
    ok: boolean;
    reason?: string;
  };
  for (const secret of secretCandidates) {
    verified = await verifyStripeSignature(body, signature, secret);
    if (verified.ok) break;
  }
  if (!verified.ok) {
    console.error("[ngmy-stripe-webhook] signature rejected:", verified.reason);
    return json({ error: `Webhook signature invalid: ${verified.reason}` }, 400);
  }

  // deno-lint-ignore no-explicit-any
  let event: any;
  try {
    event = JSON.parse(body);
  } catch {
    return json({ error: "Invalid JSON payload" }, 400);
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // A real monthly Stripe subscription emits invoice.paid on every renewal.
  // Set access to that invoice's paid-through date rather than blindly adding
  // 30 days, which also makes the initial invoice idempotent if it arrives
  // before or after checkout.session.completed.
  if (event?.type === "invoice.paid") {
    const invoice = event?.data?.object;
    const subscriptionId = typeof invoice?.subscription === "string"
      ? invoice.subscription
      : invoice?.subscription?.id ?? "";
    if (!subscriptionId) return json({ received: true, skipped: "no_subscription" });

    const periods = Array.isArray(invoice?.lines?.data)
      ? invoice.lines.data
          .map((line: { period?: { end?: number } }) => Number(line?.period?.end ?? 0))
          .filter((end: number) => Number.isFinite(end) && end > 0)
      : [];
    const periodEnd = periods.length > 0 ? Math.max(...periods) : 0;
    if (periodEnd <= 0) return json({ received: true, skipped: "no_period_end" });

    const { data: access, error: lookupError } = await admin
      .from("ngmy_stripe_access")
      .select("email, product, access_until")
      .eq("stripe_subscription_id", subscriptionId)
      .maybeSingle();
    if (lookupError) return json({ error: lookupError.message }, 500);
    // The first invoice can precede checkout.session.completed. That later
    // event creates the row, so there is nothing to repair here.
    if (!access) return json({ received: true, skipped: "checkout_pending" });

    const current = new Date(String(access.access_until)).getTime();
    const paidThrough = periodEnd * 1000;
    const accessUntil = new Date(Math.max(current, paidThrough)).toISOString();
    const { error: renewalError } = await admin
      .from("ngmy_stripe_access")
      .update({
        access_until: accessUntil,
        updated_at: new Date().toISOString(),
      })
      .eq("stripe_subscription_id", subscriptionId);
    if (renewalError) return json({ error: renewalError.message }, 500);
    console.log(`[ngmy-stripe-webhook] renewed ${access.product} for ${access.email} until ${accessUntil}`);
    return json({ received: true, renewed: true, access_until: accessUntil });
  }

  if (event?.type !== "checkout.session.completed") {
    return json({ received: true, ignored: event?.type ?? "unknown" });
  }

  const session = event?.data?.object;
  if (session?.payment_status !== "paid") {
    return json({ received: true, skipped: "not_paid" });
  }

  const email = emailFromSession(session);
  let product = productFromSession(session);
  if (!product && session?.payment_link) {
    const linkId = typeof session.payment_link === "string"
      ? session.payment_link
      : session.payment_link?.id ?? "";
    product = await productFromPaymentLink(linkId, event?.livemode === true);
  }

  if (!email.includes("@")) {
    console.error("[ngmy-stripe-webhook] missing customer email", session?.id);
    return json({ error: "Missing customer email" }, 422);
  }
  if (!product) {
    console.error(
      "[ngmy-stripe-webhook] unknown product",
      session?.id,
      session?.client_reference_id,
    );
    return json({ error: "Unknown product" }, 422);
  }
  const { scope } = parseClientReference(session?.client_reference_id);
  if (product === "business_card") {
    if (!scope || !/^[A-Za-z0-9_]+$/.test(scope)) {
      console.error("[ngmy-stripe-webhook] missing/invalid business card scope", session?.id);
      return json({ error: "Missing business card scope" }, 422);
    }
    product = `business_card:${scope}`;
  }
  if (product === "bio_photo_pack") {
    if (!scope || !/^[A-Za-z0-9_]+$/.test(scope)) {
      console.error("[ngmy-stripe-webhook] missing/invalid bio photo pack scope", session?.id);
      return json({ error: "Missing bio photo pack scope" }, 422);
    }
    product = `bio_photo_pack:${scope}`;
  }
  if (product === "swahili_level") {
    if (!scope || !/^[A-Za-z0-9_]+$/.test(scope)) {
      console.error("[ngmy-stripe-webhook] missing/invalid swahili level scope", session?.id);
      return json({ error: "Missing swahili level scope" }, 422);
    }
    product = `swahili_level:${scope}`;
  }

  const { data: existing } = await admin
    .from("ngmy_stripe_access")
    .select("access_until")
    .eq("email", email)
    .eq("product", product)
    .maybeSingle();

  const existingUntil = existing?.access_until
    ? new Date(String(existing.access_until))
    : null;
  const accessUntil = accessUntilForProduct(product, existingUntil);

  const paymentIntent = typeof session.payment_intent === "string"
    ? session.payment_intent
    : session.payment_intent?.id ?? null;
  const subscriptionId = typeof session.subscription === "string"
    ? session.subscription
    : session.subscription?.id ?? null;
  const customerId = typeof session.customer === "string"
    ? session.customer
    : session.customer?.id ?? null;

  const { error } = await admin.from("ngmy_stripe_access").upsert({
    email,
    product,
    access_until: accessUntil,
    stripe_session_id: session.id,
    stripe_payment_intent: paymentIntent,
    stripe_subscription_id: subscriptionId,
    stripe_customer_id: customerId,
    updated_at: new Date().toISOString(),
  }, { onConflict: "email,product" });

  if (error) {
    console.error("[ngmy-stripe-webhook] upsert failed:", error.message);
    return json({ error: error.message }, 500);
  }

  console.log(`[ngmy-stripe-webhook] granted ${product} for ${email} until ${accessUntil}`);
  return json({ received: true, email, product, access_until: accessUntil });
});
