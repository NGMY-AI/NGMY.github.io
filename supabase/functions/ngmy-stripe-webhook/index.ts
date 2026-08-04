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
]);

const ACCESS_DAYS_DEFAULT = 30;
const ACCESS_DAYS_PHONE_UNLOCK = 10;
const ACCESS_HOURS_MARRIAGE = 4;
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
  const base = existingUntil && existingUntil.getTime() > now.getTime() ? existingUntil : now;
  return new Date(base.getTime() + ACCESS_DAYS_DEFAULT * 86_400_000).toISOString();
}

// deno-lint-ignore no-explicit-any
function productFromSession(session: any): string {
  const ref = normalize(session?.client_reference_id);
  if (PRODUCT_SLUGS.has(ref)) return ref;

  const meta = session?.metadata ?? {};
  const fromMeta = normalize(meta.ngmy_product ?? meta.product);
  if (PRODUCT_SLUGS.has(fromMeta)) return fromMeta;

  return "";
}

/// Fallback for checkouts opened straight from a Payment Link URL, where the
/// app never got to attach client_reference_id. Payment Link metadata does not
/// copy onto the session, so it has to be fetched.
async function productFromPaymentLink(paymentLinkId: string): Promise<string> {
  const secretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
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

// deno-lint-ignore no-explicit-any
function emailFromSession(session: any): string {
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

  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  if (!webhookSecret || !supabaseUrl || !serviceKey) {
    console.error("[ngmy-stripe-webhook] missing env configuration");
    return json({ error: "Server misconfigured" }, 500);
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) return json({ error: "Missing stripe-signature" }, 400);

  const body = await req.text();
  const verified = await verifyStripeSignature(body, signature, webhookSecret);
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
    product = await productFromPaymentLink(linkId);
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

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

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

  const { error } = await admin.from("ngmy_stripe_access").upsert({
    email,
    product,
    access_until: accessUntil,
    stripe_session_id: session.id,
    stripe_payment_intent: paymentIntent,
    updated_at: new Date().toISOString(),
  }, { onConflict: "email,product" });

  if (error) {
    console.error("[ngmy-stripe-webhook] upsert failed:", error.message);
    return json({ error: error.message }, 500);
  }

  console.log(`[ngmy-stripe-webhook] granted ${product} for ${email} until ${accessUntil}`);
  return json({ received: true, email, product, access_until: accessUntil });
});
