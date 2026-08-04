// Stripe webhook — records paid access in ngmy_stripe_access when checkout completes.
// Deploy (no JWT — Stripe calls this directly):
//   supabase functions deploy ngmy-stripe-webhook --project-ref gvufllqqxjnpicmkxzcg --no-verify-jwt
//
// Supabase secrets (Dashboard → Edge Functions → Secrets):
//   STRIPE_SECRET_KEY=sk_live_...
//   STRIPE_WEBHOOK_SECRET=whsec_...
//
// Stripe Dashboard → Webhooks → Add endpoint:
//   https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/ngmy-stripe-webhook
// Events: checkout.session.completed

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

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

function normalizeEmail(raw: unknown): string {
  return String(raw ?? "").toLowerCase().trim();
}

function normalizeProduct(raw: unknown): string {
  return String(raw ?? "").toLowerCase().trim();
}

function accessUntilForProduct(product: string, existingUntil: Date | null): string {
  const now = new Date();
  if (product === "marriage") {
    return new Date(now.getTime() + ACCESS_HOURS_MARRIAGE * 60 * 60 * 1000).toISOString();
  }
  if (product === "phone_unlock") {
    return new Date(now.getTime() + ACCESS_DAYS_PHONE_UNLOCK * 24 * 60 * 60 * 1000).toISOString();
  }
  const base =
    existingUntil && existingUntil.getTime() > now.getTime() ? existingUntil : now;
  return new Date(base.getTime() + ACCESS_DAYS_DEFAULT * 24 * 60 * 60 * 1000).toISOString();
}

function productFromSession(session: Stripe.Checkout.Session): string {
  const ref = normalizeProduct(session.client_reference_id);
  if (PRODUCT_SLUGS.has(ref)) return ref;

  const meta = session.metadata ?? {};
  const fromMeta = normalizeProduct(meta.ngmy_product ?? meta.product);
  if (PRODUCT_SLUGS.has(fromMeta)) return fromMeta;

  return "";
}

function emailFromSession(session: Stripe.Checkout.Session): string {
  return normalizeEmail(
    session.customer_details?.email ??
      session.customer_email ??
      session.metadata?.ngmy_email ??
      session.metadata?.email,
  );
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  if (!stripeSecret || !webhookSecret || !supabaseUrl || !serviceKey) {
    console.error("[ngmy-stripe-webhook] missing env configuration");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: "2023-10-16",
    httpClient: Stripe.createFetchHttpClient(),
  });

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response(JSON.stringify({ error: "Missing stripe-signature" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[ngmy-stripe-webhook] signature verification failed:", message);
    return new Response(JSON.stringify({ error: `Webhook signature invalid: ${message}` }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true, ignored: event.type }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== "paid") {
    return new Response(JSON.stringify({ received: true, skipped: "not_paid" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const email = emailFromSession(session);
  const product = productFromSession(session);
  if (!email || !email.includes("@")) {
    console.error("[ngmy-stripe-webhook] missing customer email", session.id);
    return new Response(JSON.stringify({ error: "Missing customer email" }), {
      status: 422,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  if (!product) {
    console.error("[ngmy-stripe-webhook] unknown product", session.id, session.client_reference_id);
    return new Response(JSON.stringify({ error: "Unknown product" }), {
      status: 422,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
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

  const row = {
    email,
    product,
    access_until: accessUntil,
    stripe_session_id: session.id,
    stripe_payment_intent: typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? null,
    updated_at: new Date().toISOString(),
  };

  const { error } = await admin.from("ngmy_stripe_access").upsert(row, {
    onConflict: "email,product",
  });

  if (error) {
    console.error("[ngmy-stripe-webhook] upsert failed:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  console.log(`[ngmy-stripe-webhook] granted ${product} for ${email} until ${accessUntil}`);
  return new Response(
    JSON.stringify({ received: true, email, product, access_until: accessUntil }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
});
