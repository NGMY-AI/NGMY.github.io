// NGMY AI proxy — run on Supabase so phone/web PWA avoids browser CORS blocks.
// Deploy: supabase functions deploy ngmy-ai-chat --project-ref gvufllqqxjnpicmkxzcg
// Or link project in Supabase Dashboard → Edge Functions.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Provider = "gemini" | "openai" | "anthropic" | "openaiCompatible";

type GeminiImagePart = { mimeType?: string; data?: string };

async function geminiVirtualOutfit(
  apiKey: string,
  prompt: string,
  images: GeminiImagePart[],
  personOnly = false,
): Promise<string> {
  const models = [
    "gemini-2.5-flash-image",
    "gemini-2.5-flash-image-preview",
    "gemini-2.0-flash-preview-image-generation",
  ];
  const parts: unknown[] = [{ text: prompt }];
  const imgs = personOnly ? images.slice(0, 1) : images;
  for (const img of imgs) {
    const data = String(img?.data ?? "").trim();
    if (!data) continue;
    parts.push({
      inline_data: {
        mime_type: String(img?.mimeType ?? "image/jpeg").trim() || "image/jpeg",
        data,
      },
    });
  }

  let lastErr = "Gemini image generation failed";
  for (const model of models) {
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
          temperature: 0.35,
        },
      }),
    });
    if (!res.ok) {
      lastErr = await res.text();
      continue;
    }
    const data = await res.json();
    const candidates = data?.candidates;
    if (!Array.isArray(candidates) || candidates.length === 0) continue;
    const respParts = candidates[0]?.content?.parts;
    if (!Array.isArray(respParts)) continue;
    for (const part of respParts) {
      const inline = part?.inlineData ?? part?.inline_data;
      const b64 = inline?.data;
      if (b64 && String(b64).trim()) return String(b64).trim();
    }
    lastErr = "No image in Gemini response";
  }
  throw new Error(lastErr);
}

async function geminiChat(
  apiKey: string,
  prompt: string,
  images: GeminiImagePart[] = [],
  appBuilder = false,
): Promise<string> {
  const models = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash",
  ];
  const geminiParts: unknown[] = [];
  for (const img of images) {
    const data = String(img?.data ?? "").trim();
    if (!data) continue;
    geminiParts.push({
      inline_data: {
        mime_type: String(img?.mimeType ?? "image/jpeg").trim() || "image/jpeg",
        data,
      },
    });
  }
  geminiParts.push({ text: prompt });

  let lastErr = "Gemini request failed";
  for (const model of models) {
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: geminiParts }],
        // App Builder replies are a full multi-screen app as JSON — needs a
        // much larger output budget than a short chat reply.
        ...(appBuilder
          ? { generationConfig: { maxOutputTokens: 16384 } }
          : {}),
      }),
    });
    if (res.ok) {
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text && String(text).trim()) return String(text).trim();
    } else {
      lastErr = await res.text();
    }
  }
  throw new Error(lastErr);
}

async function openAiChat(
  apiKey: string,
  prompt: string,
  baseUrl = "https://api.openai.com/v1",
  appBuilder = false,
): Promise<string> {
  const res = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: appBuilder ? "gpt-4o" : "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: appBuilder ? 8000 : 2048,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty OpenAI response");
  return String(text).trim();
}

async function anthropicChat(
  apiKey: string,
  prompt: string,
  appBuilder = false,
): Promise<string> {
  // App Builder needs a stronger model and a much larger token budget — a
  // full multi-screen app as JSON does not fit in the 2048-token budget
  // used for short chat replies, so it gets cut off mid-structure and fails
  // to parse, leaving only the chat preamble (looks like "nothing changed").
  const models = appBuilder
    ? ["claude-3-5-sonnet-latest", "claude-3-5-haiku-latest"]
    : ["claude-3-5-haiku-latest"];
  const maxTokens = appBuilder ? 8000 : 2048;
  let lastErr = "Anthropic request failed";
  for (const model of models) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (res.ok) {
      const data = await res.json();
      const text = data?.content?.[0]?.text;
      if (text && String(text).trim()) return String(text).trim();
    } else {
      lastErr = await res.text();
    }
  }
  throw new Error(lastErr);
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function elevenLabsTts(
  apiKey: string,
  text: string,
  voiceId: string,
  modelId: string,
): Promise<string> {
  const models = modelId
    ? [modelId, "eleven_turbo_v2_5", "eleven_flash_v2_5", "eleven_multilingual_v2"]
    : ["eleven_turbo_v2_5", "eleven_flash_v2_5", "eleven_multilingual_v2"];
  const tried = new Set<string>();
  let lastErr = "ElevenLabs request failed";

  for (const model of models) {
    if (tried.has(model)) continue;
    tried.add(model);
    const url =
      `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        accept: "audio/mpeg",
        "content-type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({ text, model_id: model }),
    });
    if (res.ok) {
      const audio = new Uint8Array(await res.arrayBuffer());
      if (audio.length > 0) return bytesToBase64(audio);
    } else {
      lastErr = await res.text();
    }
  }
  throw new Error(lastErr);
}

async function resendSendEmail(
  apiKey: string,
  from: string,
  to: string,
  subject: string,
  html: string,
): Promise<{ id?: string }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || `Resend HTTP ${res.status}`);
  }
  const data = await res.json();
  return { id: data?.id ? String(data.id) : undefined };
}

const NGMY_ADMIN_EMAILS = new Set([
  "kbpabloqr@gmail.com",
  "ngumoyaking@gmail.com",
  "appbusiness321@gmail.com",
  "appbusiness84@gmail.com",
]);

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function adminClient() {
  const url = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function keyFromConfigRow(row: Record<string, unknown> | null): string {
  if (!row) return "";
  for (const field of ["aiApiKey", "ai_api_key", "geminiApiKey", "gemini_api_key"]) {
    const v = String(row[field] ?? "").trim();
    if (v) return v;
  }
  return "";
}

/** Server-only AI key: Edge secrets first, then private table, then service-role config. Never trust client body. */
async function resolveServerAiApiKey(): Promise<string> {
  for (const envName of ["NGMY_AI_API_KEY", "GEMINI_API_KEY", "AI_API_KEY"]) {
    const v = String(Deno.env.get(envName) ?? "").trim();
    if (v) return v;
  }
  const admin = adminClient();
  if (!admin) return "";

  try {
    const { data: secretRow } = await admin
      .from("ngmy_server_secrets")
      .select("ai_api_key")
      .eq("id", "1")
      .maybeSingle();
    const fromPrivate = String(secretRow?.ai_api_key ?? "").trim();
    if (fromPrivate) return fromPrivate;
  } catch (_) {
    // table may not exist yet
  }

  for (const id of ["1", 1]) {
    const { data } = await admin
      .from("config")
      .select("aiApiKey,ai_api_key,geminiApiKey,gemini_api_key")
      .eq("id", id)
      .maybeSingle();
    const k = keyFromConfigRow(data as Record<string, unknown> | null);
    if (k) return k;
  }
  const { data } = await admin
    .from("config")
    .select("aiApiKey,ai_api_key,geminiApiKey,gemini_api_key")
    .limit(1)
    .maybeSingle();
  return keyFromConfigRow(data as Record<string, unknown> | null);
}

async function resolveServerElevenLabsKey(): Promise<string> {
  const env = String(Deno.env.get("ELEVENLABS_API_KEY") ?? "").trim();
  if (env) return env;
  const admin = adminClient();
  if (!admin) return "";
  const { data } = await admin
    .from("config")
    .select("elevenLabsApiKey,elevenlabs_api_key")
    .eq("id", "1")
    .maybeSingle();
  if (!data) return "";
  return String(data.elevenLabsApiKey ?? data.elevenlabs_api_key ?? "").trim();
}

function jsonOk(payload: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isNgmyAdminEmail(email: string): boolean {
  return NGMY_ADMIN_EMAILS.has(email.trim().toLowerCase());
}

async function handleSaveAiApiKey(requesterEmail: string, apiKey: string): Promise<Response> {
  if (!isNgmyAdminEmail(requesterEmail)) {
    return jsonOk({ error: "Admin access required" }, 403);
  }
  const k = apiKey.trim();
  if (!k) return jsonOk({ error: "apiKey is required" }, 400);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);

  // Store in private table; keep public config key columns empty.
  const { error: privateErr } = await admin.from("ngmy_server_secrets").upsert({
    id: "1",
    ai_api_key: k,
    updated_at: new Date().toISOString(),
  });
  if (privateErr) {
    // Fall back to config only if private table missing; still blank client-readable risk until wipe SQL runs.
    const { error } = await admin.from("config").upsert({
      id: "1",
      geminiApiKey: k,
      gemini_api_key: k,
      aiApiKey: k,
      ai_api_key: k,
    });
    if (error) return jsonOk({ error: error.message }, 500);
  } else {
    await admin.from("config").upsert({
      id: "1",
      geminiApiKey: "",
      gemini_api_key: "",
      aiApiKey: "",
      ai_api_key: "",
    });
  }
  return jsonOk({ ok: true, configured: true });
}

async function handleAiKeyConfigured(): Promise<Response> {
  const key = await resolveServerAiApiKey();
  return jsonOk({ configured: key.length > 0 });
}

async function ensureAuthUser(admin: ReturnType<typeof createClient>, email: string): Promise<void> {
  const { error } = await admin.auth.admin.createUser({
    email,
    email_confirm: true,
    // Random password — NGMY uses custom passwordHash; session is issued via magic link.
    password: `${crypto.randomUUID()}Aa1!`,
    user_metadata: { ngmy_app: true },
  });
  if (!error) return;
  const msg = String(error.message ?? "").toLowerCase();
  if (msg.includes("already") || msg.includes("registered") || msg.includes("exists")) return;
  // Soft-fail: generateLink may still work if the user already exists.
  console.error("[ngmy-auth] createUser:", error.message);
}

/** Issue a real Supabase Auth session for this email (JWT includes email for RLS). */
async function issueAuthSessionForEmail(
  admin: ReturnType<typeof createClient>,
  email: string,
): Promise<{ access_token: string; refresh_token: string } | null> {
  await ensureAuthUser(admin, email);
  const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email,
  });
  const hashed = String(linkData?.properties?.hashed_token ?? "").trim();
  if (linkErr || !hashed) {
    console.error("[ngmy-auth] generateLink:", linkErr?.message);
    return null;
  }
  const { data: verified, error: verifyErr } = await admin.auth.verifyOtp({
    token_hash: hashed,
    type: "email",
  });
  const access = String(verified?.session?.access_token ?? "").trim();
  const refresh = String(verified?.session?.refresh_token ?? "").trim();
  if (verifyErr || !access || !refresh) {
    console.error("[ngmy-auth] verifyOtp:", verifyErr?.message);
    return null;
  }
  return { access_token: access, refresh_token: refresh };
}

async function handleVerifyPasswordLogin(email: string, passwordHash: string): Promise<Response> {
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const key = email.trim().toLowerCase();
  const hash = passwordHash.trim();
  if (!key || !hash) return jsonOk({ ok: false, error: "Email and password required" }, 400);

  let row: Record<string, unknown> | null = null;
  const exact = await admin
    .from("users")
    .select("email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance,canSellOnStore")
    .eq("email", key)
    .maybeSingle();
  if (exact.data) row = exact.data as Record<string, unknown>;
  if (!row) {
    const fuzzy = await admin
      .from("users")
      .select("email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance,canSellOnStore")
      .ilike("email", key)
      .maybeSingle();
    if (fuzzy.data) row = fuzzy.data as Record<string, unknown>;
  }
  if (!row) return jsonOk({ ok: false, error: "Account not found" }, 404);

  const dbHash = String(row.passwordHash ?? row.password_hash ?? "").trim();
  if (!dbHash || dbHash !== hash) {
    return jsonOk({ ok: false, error: "Wrong password" }, 401);
  }

  const session = await issueAuthSessionForEmail(admin, String(row.email ?? key));

  // Never return passwordHash to the client.
  return jsonOk({
    ok: true,
    user: {
      email: String(row.email ?? key),
      username: String(row.username ?? ""),
      phone: String(row.phone ?? ""),
      isAdmin: Boolean(row.isAdmin) || isNgmyAdminEmail(String(row.email ?? key)),
      status: String(row.status ?? "active"),
      forceLogout: Boolean(row.forceLogout),
      accountBalance: Number(row.accountBalance ?? 0),
      canSellOnStore: Boolean(row.canSellOnStore),
    },
    session: session,
  });
}

async function handleRegisterAppUser(body: Record<string, unknown>): Promise<Response> {
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const email = String(body.email ?? "").trim().toLowerCase();
  const passwordHash = String(body.passwordHash ?? "").trim();
  const username = String(body.username ?? "").trim() || email.split("@")[0] || "User";
  const phone = String(body.phone ?? "").trim();
  if (!email.includes("@") || passwordHash.length < 8) {
    return jsonOk({ error: "Valid email and password required" }, 400);
  }

  const exists = await userAccountExists(admin, email);
  if (exists) return jsonOk({ error: "Account already exists. Please log in." }, 409);

  const isAdmin = isNgmyAdminEmail(email);
  const { error: upsertErr } = await admin.from("users").upsert({
    email,
    passwordHash,
    username,
    phone,
    isAdmin,
    status: "active",
    accountBalance: 0,
  }, { onConflict: "email" });
  if (upsertErr) return jsonOk({ error: upsertErr.message }, 500);

  const session = await issueAuthSessionForEmail(admin, email);
  return jsonOk({
    ok: true,
    user: {
      email,
      username,
      phone,
      isAdmin,
      status: "active",
      forceLogout: false,
      accountBalance: 0,
      canSellOnStore: false,
    },
    session,
  });
}

async function userAccountExists(admin: ReturnType<typeof createClient>, email: string): Promise<boolean> {
  const { data } = await admin.from("users").select("email").ilike("email", email).maybeSingle();
  return data != null;
}

async function passwordResetSendResendCode(
  admin: ReturnType<typeof createClient>,
  email: string,
): Promise<Response> {
  const resendKey = String(Deno.env.get("RESEND_API_KEY") ?? "").trim();
  const from = String(Deno.env.get("RESEND_FROM_EMAIL") ?? "NGMY <noreply@ngmy.org>").trim();
  if (!resendKey) {
    return new Response(JSON.stringify({ error: "Email service not configured. Try again later." }), {
      status: 503,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const pepper = Deno.env.get("PW_RESET_PEPPER") ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "ngmy";
  const codeHash = await sha256Hex(`${code}:${email}:${pepper}`);
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

  const { error: upsertErr } = await admin.from("ngmy_password_reset_otp").upsert(
    { email, code_hash: codeHash, expires_at: expiresAt, attempts: 0 },
    { onConflict: "email" },
  );
  if (upsertErr) {
    return new Response(JSON.stringify({ error: "Could not store verification code." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const html =
    `<p>Your NGMY password reset code is:</p><p style="font-size:28px;font-weight:bold;letter-spacing:4px">${code}</p>` +
    `<p>This code expires in 15 minutes. If you did not request this, ignore this email.</p>`;
  await resendSendEmail(resendKey, from, email, "Your NGMY password reset code", html);

  return new Response(JSON.stringify({ ok: true, method: "resend" }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function handlePasswordResetSendOtp(email: string): Promise<Response> {
  const admin = adminClient();
  if (!admin) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!(await userAccountExists(admin, email))) {
    return new Response(JSON.stringify({ error: "Account not found" }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { error } = await admin.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: true },
  });
  if (error) {
    try {
      return await passwordResetSendResendCode(admin, email);
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ ok: true, method: "supabase" }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function handlePasswordResetVerifyOtp(email: string, code: string): Promise<Response> {
  const admin = adminClient();
  if (!admin) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { data: row, error } = await admin
    .from("ngmy_password_reset_otp")
    .select("code_hash,expires_at,attempts")
    .eq("email", email)
    .maybeSingle();
  if (error || !row) {
    return new Response(JSON.stringify({ error: "Incorrect or expired code." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const attempts = Number(row.attempts ?? 0);
  if (attempts >= 8) {
    return new Response(JSON.stringify({ error: "Too many attempts. Request a new code." }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const expiresAt = new Date(String(row.expires_at ?? 0)).getTime();
  if (!expiresAt || Date.now() > expiresAt) {
    await admin.from("ngmy_password_reset_otp").delete().eq("email", email);
    return new Response(JSON.stringify({ error: "Code expired. Request a new one." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const pepper = Deno.env.get("PW_RESET_PEPPER") ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "ngmy";
  const codeHash = await sha256Hex(`${code.trim()}:${email}:${pepper}`);
  if (codeHash !== row.code_hash) {
    await admin.from("ngmy_password_reset_otp").update({ attempts: attempts + 1 }).eq("email", email);
    return new Response(JSON.stringify({ error: "Incorrect code." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Code confirmed — issue a short-lived reset token instead of deleting the row.
  // The client has no Supabase Auth session on this path (unlike the verifyOTP
  // path), so it can't authenticate the password write via JWT; this token lets
  // passwordResetComplete authorize it server-side instead.
  const resetToken = crypto.randomUUID();
  const resetTokenHash = await sha256Hex(`${resetToken}:${email}:${pepper}`);
  const resetTokenExpiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
  await admin
    .from("ngmy_password_reset_otp")
    .update({
      code_hash: "",
      reset_token_hash: resetTokenHash,
      reset_token_expires_at: resetTokenExpiresAt,
    })
    .eq("email", email);

  return new Response(JSON.stringify({ ok: true, resetToken }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function handlePasswordResetComplete(
  jwtEmail: string,
  email: string,
  newHash: string,
  resetToken: string,
): Promise<Response> {
  const admin = adminClient();
  if (!admin) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Authorized either by a real Supabase Auth session for this email (verifyOTP
  // path already established one) or by the short-lived reset token from the
  // resend/OTP-code path above.
  let authorized = jwtEmail !== "" && jwtEmail.toLowerCase().trim() === email;

  if (!authorized && resetToken) {
    const { data: row } = await admin
      .from("ngmy_password_reset_otp")
      .select("reset_token_hash,reset_token_expires_at")
      .eq("email", email)
      .maybeSingle();
    if (row?.reset_token_hash) {
      const pepper = Deno.env.get("PW_RESET_PEPPER") ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "ngmy";
      const tokenHash = await sha256Hex(`${resetToken}:${email}:${pepper}`);
      const expiresAt = new Date(String(row.reset_token_expires_at ?? 0)).getTime();
      authorized = tokenHash === row.reset_token_hash && !!expiresAt && Date.now() <= expiresAt;
    }
  }

  if (!authorized) {
    return new Response(JSON.stringify({ error: "Reset session expired. Request a new code." }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let result = await admin.from("users").update({ passwordHash: newHash }).eq("email", email).select();
  if (!result.data || result.data.length === 0) {
    result = await admin.from("users").update({ passwordHash: newHash }).ilike("email", email).select();
  }
  if (!result.data || result.data.length === 0) {
    await admin.from("users").upsert(
      { email, passwordHash: newHash, username: email.split("@")[0] },
      { onConflict: "email" },
    );
  }

  await admin.from("ngmy_password_reset_otp").delete().eq("email", email);

  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// ─── Generic DB relay — disguises table/settings-key names from DevTools ───
// Transport-only proxy: forwards the caller's own Authorization header (their
// real session JWT, or the anon key if logged out) to a fresh client, so
// Postgres RLS governs the result exactly as if the caller had queried the
// table directly. This function does NOT re-implement authorization — RLS
// already does that correctly for every table below.

const RELAY_TABLE_CODES: Record<string, string> = {
  s: "ngmy_settings",
  c: "config",
  f: "family_trees",
  h: "home_cards",
  x: "ngmy_stripe_access",
  u: "users",
  t: "transactions",
};

// One code per static ngmy_settings key. Add new keys here (and in
// lib/ngmy_db_relay.dart's mirror map) rather than reading the table directly.
const RELAY_SETTINGS_KEY_CODES: Record<string, string> = {
  k1: "ngmy_loan_status_map_v1",
  k2: "ngmy_loan_payments_map_v1",
  k3: "wallet_txn_decisions",
  k4: "app_studio_access_settings",
  k5: "ngmy_app_studio_cloud_slot",
  k6: "ngmy_app_studio_published_registry",
  k7: "ngmy_bio_publish_registry",
  k8: "ngmy_menu_publish_registry",
  k9: "ngmy_invoice_publish_registry",
  k10: "civic_user_groups_v1",
  k11: "civic_state_registrar_subscriptions",
  k12: "civic_voting_settings",
  k13: "civic_hati_kiapo_uongozi",
  k14: "home_vote_ad_campaign",
  k15: "ngmy_helper_kb",
  k16: "ngmy_communicate_backup_codes_v1",
  k17: "ngmy_family_tree_backup_codes_v1",
  k18: "ngmy_family_tree_qr_stashes_v1",
  k19: "ngmy_slides_transfer_qr_stashes_v1",
  k20: "ngmy_worksheet_project_qr_stashes_v1",
  k21: "ngmy_doc_share_school_accounts_v1",
  k22: "ngmy_doc_share_video_relay_v1",
  k23: "ngmy_doc_share_webrtc_signal_v1",
  k24: "ngmy_user_saved_sync_qrs_v1",
  k25: "terms_and_conditions",
  k26: "privacy_policy",
  k27: "investment_plans",
  k28: "ngmy_popups",
  k29: "ngmy_chat_closed",
  k30: "management_operational_lists",
  k31: "store_sell_access_emails",
  k32: "deleted_media_ids",
  k33: "family_tree_payment_settings",
  k34: "invoice_payment_settings",
  k35: "music_studio_payment_settings",
  k36: "app_studio_payment_settings",
  k37: "communicate_settings",
  k38: "communicate_payment_settings",
  k39: "wallet_payment_settings",
  k40: "repair_estimate_payment_settings",
  k41: "translate_message_payment_settings",
  k42: "document_scan_payment_settings",
  k43: "doc_share_payment_settings",
  k44: "civic_self_enrollment_settings",
  k45: "ngmy_helper_ai_settings",
  k46: "ngmy_app_branding",
  k47: "civic_help_mode_settings",
  k48: "help_center_hub_settings",
  k49: "platform_live_stats",
  k50: "civic_contribution_receipt_removed",
  k51: "civic_deleted_contribution_ids",
  k52: "civic_help_campaign_spendings",
};

// Dynamic key PREFIXES — the suffix (a share code/token/base64 email) travels
// as its own field ("sfx"); only the feature-identifying prefix is coded.
const RELAY_SETTINGS_PREFIX_CODES: Record<string, string> = {
  d1: "ngmy_bio_pub_",
  d2: "ngmy_menu_pub_",
  d3: "ngmy_doc_share_stash_v2_",
  d4: "ngmy_doc_share_code_v2_",
  d5: "ngmy_essentials_code_v1_",
  d6: "ngmy_bio_lib_v1_",
  d7: "ngmy_menu_lib_v1_",
  d8: "ngmy_studio_entitlement_v1_",
  d9: "ngmy_doc_share_inbox_v1_",
  d10: "ngmy_game_receipts_",
  d11: "ngmy_local_growth_income_stash_v1_",
  d12: "ngmy_local_growth_income_code_v1_",
  d13: "ngmy_local_deposit_qr_v1_",
  d14: "ngmy_local_deposit_code_v1_",
  d15: "ngmy_local_deposit_inbox_v1_",
  d16: "ngmy_refcode_",
  d17: "ngmy_transfer_relay_v1_",
  d18: "ngmy_transfer_v1_",
  d19: "ngmy_transfer_signal_v1_",
  d20: "ngmy_doc_share_my_code_lookup_v1_",
  d21: "ngmy_doc_share_my_code_user_v1_",
};

function resolveRelaySettingsKey(skCode: string, suffix: string): string | null {
  const direct = RELAY_SETTINGS_KEY_CODES[skCode];
  if (direct) return direct;
  const prefix = RELAY_SETTINGS_PREFIX_CODES[skCode];
  if (prefix) return `${prefix}${suffix}`;
  return null;
}

// Fields that must never leave the server for these settings keys, even
// though the app itself wrote them (audit-only metadata like who published
// something — the client never reads it back, so it should not be on the wire).
const RELAY_SETTINGS_STRIP_FIELDS: Record<string, string[]> = {
  home_vote_ad_campaign: ["publishedBy"],
};

function redactSettingsRow(realKey: string | null, row: unknown): unknown {
  if (!realKey || !row || typeof row !== "object") return row;
  const strip = RELAY_SETTINGS_STRIP_FIELDS[realKey];
  if (!strip || strip.length === 0) return row;
  const r = row as Record<string, unknown>;
  if (r.value && typeof r.value === "object" && !Array.isArray(r.value)) {
    const v = { ...(r.value as Record<string, unknown>) };
    for (const f of strip) delete v[f];
    return { ...r, value: v };
  }
  return row;
}

function relayClientFor(req: Request) {
  const url = Deno.env.get("SUPABASE_URL") ?? "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  const authHeader = req.headers.get("Authorization") ?? `Bearer ${anonKey}`;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function handleDbRelay(req: Request, body: Record<string, unknown>): Promise<Response> {
  const client = relayClientFor(req);
  if (!client) return jsonOk({ error: "Server misconfigured" }, 500);

  const tableCode = String(body.t ?? "");
  const table = RELAY_TABLE_CODES[tableCode];
  if (!table) return jsonOk({ error: "Unknown table" }, 400);

  const eq: Record<string, unknown> = { ...(body.eq as Record<string, unknown> | undefined ?? {}) };
  let settingsRealKey: string | null = null;
  if (table === "ngmy_settings") {
    settingsRealKey = resolveRelaySettingsKey(String(body.sk ?? ""), String(body.sfx ?? ""));
    if (!settingsRealKey) return jsonOk({ error: "Unknown settings key" }, 400);
    eq["key"] = settingsRealKey;
  }

  const op = String(body.op ?? "s");

  const inFilter = body.in as Record<string, unknown[]> | undefined;

  if (op === "s") {
    let q = client.from(table).select(String(body.cols ?? "*"));
    for (const [k, v] of Object.entries(eq)) q = q.eq(k, v as never);
    const contains = body.contains as Record<string, unknown> | undefined;
    if (contains) {
      for (const [k, v] of Object.entries(contains)) q = q.contains(k, v as never);
    }
    if (inFilter) {
      for (const [k, v] of Object.entries(inFilter)) q = q.in(k, (v as unknown[]) ?? []);
    }
    const ilike = body.ilike as Record<string, unknown> | undefined;
    if (ilike) {
      for (const [k, v] of Object.entries(ilike)) q = q.ilike(k, String(v));
    }
    const order = body.order as { col?: string; ascending?: boolean } | undefined;
    if (order?.col) q = q.order(order.col, { ascending: order.ascending !== false });
    if (typeof body.limit === "number") q = q.limit(body.limit);
    const range = body.range as [number, number] | undefined;
    if (Array.isArray(range) && range.length === 2) q = q.range(range[0], range[1]);
    const result = body.single ? await q.maybeSingle() : await q;
    if (result.error) return jsonOk({ error: result.error.message }, 400);
    const data = Array.isArray(result.data)
      ? result.data.map((r) => redactSettingsRow(settingsRealKey, r))
      : redactSettingsRow(settingsRealKey, result.data);
    return jsonOk({ ok: true, data });
  }

  if (op === "up" || op === "i") {
    const rows = Array.isArray(body.rows) ? (body.rows as Record<string, unknown>[]) : [];
    if (rows.length === 0) return jsonOk({ error: "No rows" }, 400);
    if (table === "ngmy_settings" && eq["key"]) {
      for (const r of rows) r["key"] = eq["key"];
    }
    const onConflict = body.onConflict ? String(body.onConflict) : undefined;
    const { error } =
      op === "up"
        ? await client.from(table).upsert(rows, onConflict ? { onConflict } : undefined)
        : await client.from(table).insert(rows);
    if (error) return jsonOk({ error: error.message }, 400);
    return jsonOk({ ok: true });
  }

  if (op === "u") {
    if (Object.keys(eq).length === 0) return jsonOk({ error: "Refusing unscoped update" }, 400);
    const patch = (body.patch as Record<string, unknown>) ?? {};
    if (Object.keys(patch).length === 0) return jsonOk({ error: "No patch fields" }, 400);
    let q = client.from(table).update(patch);
    for (const [k, v] of Object.entries(eq)) q = q.eq(k, v as never);
    const { error } = await q;
    if (error) return jsonOk({ error: error.message }, 400);
    return jsonOk({ ok: true });
  }

  if (op === "d") {
    if (Object.keys(eq).length === 0 && !inFilter) return jsonOk({ error: "Refusing unscoped delete" }, 400);
    let q = client.from(table).delete();
    for (const [k, v] of Object.entries(eq)) q = q.eq(k, v as never);
    if (inFilter) {
      for (const [k, v] of Object.entries(inFilter)) q = q.in(k, (v as unknown[]) ?? []);
    }
    const { error } = await q;
    if (error) return jsonOk({ error: error.message }, 400);
    return jsonOk({ ok: true });
  }

  return jsonOk({ error: "Unsupported op" }, 400);
}

// ─── Civic Registry (role-filtered; service role only touches the blob) ───

const CIVIC_MEMBERS_KEY = "civic_registry_members";
const CIVIC_PINS_KEY = "civic_registry_pins";
const CIVIC_REGISTRAR_APPS_KEY = "civic_registrar_applications";

type CivicRole = {
  email: string;
  isAdmin: boolean;
  isRegistrar: boolean;
  registrarState: string;
};

function emailKey(email: string): string {
  return email.trim().toLowerCase();
}

function stateKey(state: string): string {
  return state.trim().toLowerCase();
}

const US_STATE_PREFIX: Record<string, string> = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
  "district of columbia": "DC",
};

/** Match "Georgia", "georgia", "GA", "ga" as the same state. */
function canonicalStateKey(state: string): string {
  const raw = stateKey(state);
  if (!raw) return "";
  if (US_STATE_PREFIX[raw]) return raw;
  for (const [full, code] of Object.entries(US_STATE_PREFIX)) {
    if (raw === code.toLowerCase()) return full;
  }
  return raw;
}

function displayStateName(state: string): string {
  const canon = canonicalStateKey(state);
  if (!canon) return state.trim();
  return canon
    .split(" ")
    .map((w) => (w.isEmpty ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

async function resolveJwtEmail(req: Request): Promise<string> {
  const auth = req.headers.get("Authorization") ?? "";
  const m = auth.match(/^Bearer\s+(.+)$/i);
  const token = (m?.[1] ?? "").trim();
  if (!token || token === Deno.env.get("SUPABASE_ANON_KEY")) return "";
  const admin = adminClient();
  if (!admin) return "";
  try {
    const { data, error } = await admin.auth.getUser(token);
    if (error || !data?.user) return "";
    return emailKey(String(data.user.email ?? ""));
  } catch (_) {
    return "";
  }
}

/** Privileged actions must use a real session JWT — never trust body.email alone. */
async function requireJwtEmail(req: Request): Promise<string> {
  return await resolveJwtEmail(req);
}

const NETWORK_STRIP_KEYS = new Set([
  "passwordHash",
  "password_hash",
  "governmentID",
  "GovernmentID",
  "dateOfBirth",
  "homeAddress",
  "IDExpiration",
  "ssn",
  "socialSecurity",
]);

function maskEmailValue(raw: string, viewer: string): string {
  const e = emailKey(raw);
  const v = emailKey(viewer);
  if (!e) return "";
  if (e === v) return raw;
  const at = e.indexOf("@");
  if (at <= 0) return "***";
  return `${e.slice(0, 1)}***${e.slice(at)}`;
}

/** Every bright-handler response masks emails — including the signed-in viewer. */
function maskEmailNetwork(raw: string): string {
  const e = emailKey(raw);
  if (!e) return "";
  const at = e.indexOf("@");
  if (at <= 0) return "***";
  return `${e.slice(0, 1)}***${e.slice(at)}`;
}

function maskEmailFieldsNetwork(
  row: Record<string, unknown>,
): Record<string, unknown> {
  const out = { ...row };
  for (const f of [
    "userEmail",
    "email",
    "fromEmail",
    "toEmail",
    "player1Email",
    "player2Email",
    "buyerEmail",
    "sellerEmail",
    "ownerEmail",
    "applicantEmail",
    "reviewedBy",
    "revokedBy",
    "recordedByEmail",
  ]) {
    if (typeof row[f] === "string") {
      out[f] = maskEmailNetwork(String(row[f]));
    }
  }
  return out;
}

function registrarAppNetworkSummary(
  a: Record<string, unknown>,
): Record<string, unknown> {
  return maskEmailFieldsNetwork({
    id: a.id,
    status: a.status,
    state: a.state,
    createdAt: a.createdAt,
    reviewedAt: a.reviewedAt,
    revokedAt: a.revokedAt,
    updatedAt: a.updatedAt,
    userEmail: a.userEmail ?? a.email ?? "",
    reviewedBy: a.reviewedBy,
    revokedBy: a.revokedBy,
  });
}

function loanAppNetworkSummary(
  a: Record<string, unknown>,
): Record<string, unknown> {
  return maskEmailFieldsNetwork({
    id: a.id,
    status: a.status,
    amount: a.amount,
    dueDate: a.dueDate,
    createdAt: a.createdAt,
    reviewedAt: a.reviewedAt,
    userEmail: a.userEmail ?? "",
    reviewedBy: a.reviewedBy,
  });
}

function jobAppNetworkSummary(
  a: Record<string, unknown>,
): Record<string, unknown> {
  return maskEmailFieldsNetwork({
    id: a.id,
    status: a.status,
    state: a.state,
    createdAt: a.createdAt,
    reviewedAt: a.reviewedAt,
    userEmail: a.userEmail ?? "",
    reviewedBy: a.reviewedBy,
  });
}

function userRowNetworkSummary(
  row: Record<string, unknown>,
): Record<string, unknown> {
  return maskEmailFieldsNetwork({
    email: row.email ?? "",
    username: "***",
    status: row.status,
    isAdmin: row.isAdmin,
    isAuthorizedRegistrar: row.isAuthorizedRegistrar,
    isApprovedWorker: row.isApprovedWorker,
    isApprovedHelper: row.isApprovedHelper,
    isEnrolledInRegistry: row.isEnrolledInRegistry,
    forceLogout: row.forceLogout,
    canSellOnStore: row.canSellOnStore,
    profilePicturePath: row.profilePicturePath,
  });
}

function managementNetworkPayload(
  mgmt: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  if (Array.isArray(mgmt.loanApplications)) {
    out.loanApplications = asMemberList(mgmt.loanApplications).map(loanAppNetworkSummary);
  }
  if (Array.isArray(mgmt.jobWorkerApplications)) {
    out.jobWorkerApplications = asMemberList(mgmt.jobWorkerApplications).map(jobAppNetworkSummary);
  }
  if (Array.isArray(mgmt.jobPosts)) {
    out.jobPosts = asMemberList(mgmt.jobPosts).map((r) => maskEmailFieldsNetwork(r));
  }
  for (const f of ["helpHelperApplications", "helpRequests", "helpBusinesses"] as const) {
    if (Array.isArray(mgmt[f])) {
      out[f] = asMemberList(mgmt[f]).map((r) => maskEmailFieldsNetwork(r));
    }
  }
  return out;
}

function redactEmailFields(
  row: Record<string, unknown>,
  viewer: string,
): Record<string, unknown> {
  const ownerEmail = emailKey(
    String(row.userEmail ?? row.email ?? row.applicantEmail ?? ""),
  );
  const isOther = ownerEmail !== "" && ownerEmail !== emailKey(viewer);
  const out = { ...row };
  for (const k of NETWORK_STRIP_KEYS) delete out[k];
  const emailFields = [
    "userEmail",
    "email",
    "fromEmail",
    "toEmail",
    "player1Email",
    "player2Email",
    "buyerEmail",
    "sellerEmail",
    "ownerEmail",
    "applicantEmail",
    "reviewedBy",
    "recordedByEmail",
  ];
  for (const f of emailFields) {
    if (typeof row[f] === "string") {
      out[f] = maskEmailValue(String(row[f]), viewer);
    }
  }
  if (isOther) {
    for (const f of [
      "phone",
      "accountBalance",
      "totalProfit",
      "points",
      "referralCount",
    ]) {
      if (out[f] != null) out[f] = "***";
    }
    for (const f of [
      "state",
      "city",
      "fullName",
      "username",
      "applicantName",
      "experience",
      "skills",
      "availability",
      "bio",
      "notes",
      "reason",
    ]) {
      if (typeof out[f] === "string" && String(out[f]).trim()) out[f] = "***";
    }
    if (typeof out.fullLegalName === "string") {
      const parts = String(out.fullLegalName).trim().split(/\s+/);
      out.fullLegalName = parts.length > 0 ? `${parts[0]} ***` : "***";
    }
  }
  return out;
}

function redactTransaction(
  row: Record<string, unknown>,
  _viewer: string,
): Record<string, unknown> {
  return {
    id: row.id,
    status: row.status,
    type: row.type,
    amount: row.amount,
    timestamp: row.timestamp,
  };
}

/** Fetch handlers return no PII — only ack + counts; app uses local cache for display. */
function networkFetchOk(extras: Record<string, unknown> = {}): Response {
  return jsonOk({ ok: true, networkEmpty: true, ...extras });
}

function redactEmailKeyedMap(
  map: unknown,
  _viewer: string,
): Record<string, unknown> {
  if (!map || typeof map !== "object" || Array.isArray(map)) return {};
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(map as Record<string, unknown>)) {
    out[maskEmailNetwork(k)] = v;
  }
  return out;
}

function redactList(
  list: Record<string, unknown>[],
  viewer: string,
): Record<string, unknown>[] {
  return list.map((r) => redactEmailFields(r, viewer));
}

function redactManagement(
  mgmt: Record<string, unknown>,
  viewer: string,
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...mgmt };
  for (const f of [
    "loanApplications",
    "jobWorkerApplications",
    "jobPosts",
    "helpHelperApplications",
    "helpRequests",
    "helpBusinesses",
  ]) {
    if (Array.isArray(out[f])) {
      out[f] = redactList(asMemberList(out[f]), viewer);
    }
  }
  delete out.adminDeletedUserEmails;
  delete out.adminUserAccountStatusByEmail;
  delete out.adminUserCrownBadgeByEmail;
  return out;
}

async function loadCivicPayload(
  admin: NonNullable<ReturnType<typeof adminClient>>,
): Promise<Record<string, unknown>> {
  const { data } = await admin
    .from("ngmy_settings")
    .select("value")
    .eq("key", CIVIC_MEMBERS_KEY)
    .maybeSingle();
  const value = data?.value;
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return { members: [], removed: [], deceased: [] };
}

async function saveCivicPayload(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; error?: string }> {
  const row = {
    key: CIVIC_MEMBERS_KEY,
    value: { ...payload, savedAt: new Date().toISOString() },
    updated_at: new Date().toISOString(),
  };
  const { error } = await admin.from("ngmy_settings").upsert(row, { onConflict: "key" });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

function asMemberList(raw: unknown): Record<string, unknown>[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((e) => e && typeof e === "object" && !Array.isArray(e))
    .map((e) => ({ ...(e as Record<string, unknown>) }));
}

function isRedactedCivicValue(v: unknown): boolean {
  const s = String(v ?? "").trim();
  if (!s) return true;
  if (s === "***") return true;
  if (s.includes("***")) return true;
  return false;
}

function memberRowKey(m: Record<string, unknown>): string {
  const id = String(m.registryId ?? "").trim().toUpperCase();
  if (id) return `id:${id}`;
  const em = emailKey(String(m.email ?? ""));
  if (em && !isRedactedCivicValue(em)) return `em:${em}`;
  return "";
}

function memberDetailScore(m: Record<string, unknown>): number {
  let s = 0;
  if (!isRedactedCivicValue(m.phone)) s += 2;
  if (!isRedactedCivicValue(m.homeAddress)) s += 2;
  if (!isRedactedCivicValue(m.dob)) s += 2;
  if (!isRedactedCivicValue(m.fullName)) s += 1;
  if (!isRedactedCivicValue(m.state)) s += 3;
  if (!isRedactedCivicValue(m.email)) s += 2;
  return s;
}

function preferMemberRow(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): Record<string, unknown> {
  const ta = Date.parse(String(a.updatedAt ?? a.enrolledAt ?? "")) || 0;
  const tb = Date.parse(String(b.updatedAt ?? b.enrolledAt ?? "")) || 0;
  let preferred = ta !== tb
    ? (tb > ta ? b : a)
    : (memberDetailScore(b) > memberDetailScore(a) ? b : a);
  const other = preferred === a ? b : a;
  preferred = { ...preferred };
  for (const key of [
    "registryId",
    "state",
    "email",
    "phone",
    "homeAddress",
    "fullName",
    "dob",
    "city",
    "room",
  ]) {
    if (isRedactedCivicValue(preferred[key]) && !isRedactedCivicValue(other[key])) {
      preferred[key] = other[key];
    }
  }
  return preferred;
}

/** Union roster rows — never drop cloud-only members when a device pushes stale local data. */
function mergeMemberLists(
  base: Record<string, unknown>[],
  incoming: Record<string, unknown>[],
): Record<string, unknown>[] {
  const byKey = new Map<string, Record<string, unknown>>();
  for (const m of base) {
    const k = memberRowKey(m);
    if (k) byKey.set(k, m);
  }
  for (const m of incoming) {
    const k = memberRowKey(m);
    if (!k) continue;
    const prev = byKey.get(k);
    byKey.set(k, prev ? preferMemberRow(prev, m) : m);
  }
  return [...byKey.values()];
}

function tombstoneRowKey(r: Record<string, unknown>): string {
  const em = emailKey(String(r.email ?? ""));
  if (em && !isRedactedCivicValue(em)) return `em:${em}`;
  const rid = String(r.registryId ?? "").trim().toUpperCase();
  if (rid) return `id:${rid}`;
  return "";
}

/** Keep live roster rows that are not superseded by delete/deceased tombstones. */
function filterTombstonedMembers(
  members: Record<string, unknown>[],
  removed: Record<string, unknown>[],
  deceased: Record<string, unknown>[],
): Record<string, unknown>[] {
  const tombstones = new Map<string, Record<string, unknown>>();
  for (const r of removed) {
    const key = tombstoneRowKey(r);
    if (!key) continue;
    const prev = tombstones.get(key);
    if (!prev) {
      tombstones.set(key, r);
      continue;
    }
    const a = Date.parse(String(prev.removedAt ?? "")) || 0;
    const b = Date.parse(String(r.removedAt ?? "")) || 0;
    if (b >= a) tombstones.set(key, r);
  }

  const deceasedKeys = new Set<string>();
  for (const d of deceased) {
    const key = tombstoneRowKey(d);
    if (key) deceasedKeys.add(key);
    const snap = d.snapshot && typeof d.snapshot === "object"
      ? (d.snapshot as Record<string, unknown>)
      : null;
    if (snap) {
      const sk = memberRowKey(snap);
      if (sk) deceasedKeys.add(sk);
    }
  }

  return members.filter((m) => {
    const key = memberRowKey(m);
    if (!key) return true;
    if (deceasedKeys.has(key)) return false;

    const tomb = tombstones.get(key);
    if (!tomb) return true;

    const removedAt = Date.parse(String(tomb.removedAt ?? "")) || 0;
    const restoredAt = Date.parse(String(m.restoredAt ?? "")) || 0;

    // Only an explicit restore / re-enroll brings a deleted member back.
    // updatedAt must not count: every roster merge refreshes it, which let
    // deleted members and duplicates reappear on the next sync.
    return restoredAt > 0 && restoredAt >= removedAt;
  });
}

/// Auto-created roster ghosts: no registry id, or no name and nothing else to
/// identify a person. These are what surfaced in the app as "Member" rows.
function isGhostMemberRow(m: Record<string, unknown>): boolean {
  if (!String(m.registryId ?? "").trim()) return true;
  if (!isRedactedCivicValue(m.fullName)) return false;
  return isRedactedCivicValue(m.username) &&
    isRedactedCivicValue(m.phone) &&
    isRedactedCivicValue(m.homeAddress) &&
    isRedactedCivicValue(m.dob);
}

function sanitizeDirectoryMember(m: Record<string, unknown>): Record<string, unknown> {
  const nicknames = Array.isArray(m.nicknames) ? m.nicknames : [];
  return {
    email: maskEmailNetwork(String(m.email ?? "")),
    username: String(m.username ?? ""),
    fullName: String(m.fullName ?? ""),
    city: String(m.city ?? ""),
    room: String(m.room ?? ""),
    state: String(m.state ?? ""),
    registryId: String(m.registryId ?? ""),
    familyMembers: m.familyMembers ?? 1,
    familyMales: m.familyMales,
    familyFemales: m.familyFemales,
    nicknames,
    showNicknames: m.showNicknames === true,
    helps: m.helps ?? 0,
    missed: m.missed ?? 0,
    contributionCount: m.contributionCount,
    enrolledAt: m.enrolledAt,
    updatedAt: m.updatedAt,
    enrollmentSource: m.enrollmentSource,
    // Public directory only — no address/phone/dob/idPhoto/idType
  };
}

function sanitizeDirectoryDeceased(row: Record<string, unknown>): Record<string, unknown> {
  const snap = row.snapshot && typeof row.snapshot === "object"
    ? sanitizeDirectoryMember(row.snapshot as Record<string, unknown>)
    : {};
  return {
    email: maskEmailNetwork(String(row.email ?? snap.email ?? "")),
    registryId: String(row.registryId ?? snap.registryId ?? ""),
    deceasedAt: row.deceasedAt,
    state: String(row.state ?? snap.state ?? ""),
    snapshot: snap,
  };
}

function filterMembersByState(
  members: Record<string, unknown>[],
  state: string,
): Record<string, unknown>[] {
  const sk = canonicalStateKey(state);
  if (!sk) return [];
  return members.filter((m) => canonicalStateKey(String(m.state ?? "")) === sk);
}

async function resolveCivicRole(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  email: string,
): Promise<CivicRole> {
  const key = emailKey(email);
  const role: CivicRole = {
    email: key,
    isAdmin: isNgmyAdminEmail(key),
    isRegistrar: false,
    registrarState: "",
  };
  if (!key) return role;

  try {
    const { data: userRow } = await admin
      .from("users")
      .select(
        "email,isAdmin,isCivicRegistryAdmin,isCivicRegistryKing,isAuthorizedRegistrar,state",
      )
      .eq("email", key)
      .maybeSingle();
    if (userRow) {
      if (
        userRow.isAdmin === true ||
        userRow.isCivicRegistryAdmin === true ||
        userRow.isCivicRegistryKing === true
      ) {
        role.isAdmin = true;
      }
      // Fallback when applications list is missing/stale but the user row is flagged.
      if (userRow.isAuthorizedRegistrar === true) {
        role.isRegistrar = true;
        const st = String(userRow.state ?? "").trim();
        if (st) role.registrarState = displayStateName(st);
      }
    }
  } catch (_) {
    // columns may vary — try a narrower select
    try {
      const { data: userRow } = await admin
        .from("users")
        .select("email,isAdmin,state")
        .eq("email", key)
        .maybeSingle();
      if (userRow?.isAdmin === true) role.isAdmin = true;
    } catch (_) {
      // ignore
    }
  }

  try {
    const apps = await loadRegistrarApplications(admin);
    let best: Record<string, unknown> | null = null;
    for (const a of apps) {
      if (emailKey(String(a.userEmail ?? a.email ?? "")) !== key) continue;
      if (String(a.status ?? "").toLowerCase() !== "approved") continue;
      best = a;
    }
    if (best) {
      role.isRegistrar = true;
      const st = String(best.state ?? "").trim();
      if (st) role.registrarState = displayStateName(st);
    }
  } catch (_) {
    // ignore
  }

  return role;
}

async function loadRegistrarApplications(
  admin: NonNullable<ReturnType<typeof adminClient>>,
): Promise<Record<string, unknown>[]> {
  try {
    const { data: settingsRow } = await admin
      .from("ngmy_settings")
      .select("value")
      .eq("key", CIVIC_REGISTRAR_APPS_KEY)
      .maybeSingle();
    const value = settingsRow?.value;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const raw = (value as Record<string, unknown>).applications;
      if (Array.isArray(raw)) {
        return raw
          .filter((e) => e && typeof e === "object" && !Array.isArray(e))
          .map((e) => ({ ...(e as Record<string, unknown>) }));
      }
    }
  } catch (_) {
    // fall through
  }
  try {
    const { data: cfg } = await admin
      .from("config")
      .select("civicRegistrarApplications")
      .eq("id", "1")
      .maybeSingle();
    const apps = cfg?.civicRegistrarApplications;
    if (Array.isArray(apps)) {
      return apps
        .filter((e) => e && typeof e === "object" && !Array.isArray(e))
        .map((e) => ({ ...(e as Record<string, unknown>) }));
    }
  } catch (_) {
    // ignore
  }
  return [];
}

async function saveRegistrarApplications(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  applications: Record<string, unknown>[],
): Promise<{ ok: boolean; error?: string }> {
  const { error } = await admin.from("ngmy_settings").upsert(
    {
      key: CIVIC_REGISTRAR_APPS_KEY,
      value: {
        applications,
        savedAt: new Date().toISOString(),
      },
      updated_at: new Date().toISOString(),
    },
    { onConflict: "key" },
  );
  if (error) return { ok: false, error: error.message };
  // Keep public config empty
  await admin.from("config").upsert({
    id: "1",
    civicRegistrarApplications: [],
  });
  return { ok: true };
}

function sanitizeRegistrarAppPublic(a: Record<string, unknown>): Record<string, unknown> {
  return {
    state: String(a.state ?? ""),
    status: String(a.status ?? ""),
  };
}

function sanitizeRegistrarAppOwn(a: Record<string, unknown>): Record<string, unknown> {
  return {
    id: a.id,
    userEmail: String(a.userEmail ?? ""),
    fullName: String(a.fullName ?? a.applicantName ?? ""),
    state: String(a.state ?? ""),
    status: String(a.status ?? ""),
    createdAt: a.createdAt,
    reviewedAt: a.reviewedAt,
    // no phone / address of other people — own row only
    phone: String(a.phone ?? ""),
  };
}

async function handleCivicFetchRegistrarApplications(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const apps = await loadRegistrarApplications(admin);

  const approvedStates = [
    ...new Set(
      apps
        .filter((a) => String(a.status ?? "").toLowerCase() === "approved")
        .map((a) => String(a.state ?? "").trim())
        .filter(Boolean),
    ),
  ];

  if (role.isAdmin) {
    return jsonOk({
      ok: true,
      view: "admin",
      applications: apps.map(registrarAppNetworkSummary),
      approvedStates,
    });
  }

  // Registrar / king reviewers: status-only for all states in Network (no PII).
  if (role.isRegistrar && role.registrarState) {
    const mine = apps.filter((a) => emailKey(String(a.userEmail ?? "")) === email);
    return jsonOk({
      ok: true,
      view: "registrar",
      applications: apps.map(registrarAppNetworkSummary),
      myApplications: mine.map(sanitizeRegistrarAppOwn),
      approvedStates,
    });
  }

  // Normal member: only own application(s) + which states have an AR (no PII)
  const mine = apps.filter((a) => emailKey(String(a.userEmail ?? "")) === email);
  return jsonOk({
    ok: true,
    view: "member",
    applications: mine.map(sanitizeRegistrarAppOwn),
    approvedStates,
  });
}

async function handleCivicPersistRegistrarApplications(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const incoming = asMemberList(body.applications); // reuse list helper
  const current = await loadRegistrarApplications(admin);

  let next = current;
  if (role.isAdmin) {
    next = incoming.length > 0 ? incoming : current;
    // If client sent full list, trust replace for admin
    if (Array.isArray(body.applications)) next = incoming;
  } else if (role.isRegistrar && role.registrarState) {
    // Merge: keep other states unchanged; replace home-state rows from incoming home-state
    const home = stateKey(role.registrarState);
    const kept = current.filter((a) => stateKey(String(a.state ?? "")) !== home);
    const homeIncoming = incoming.filter((a) => stateKey(String(a.state ?? "")) === home);
    next = [...kept, ...homeIncoming];
  } else {
    // Member may only upsert their own pending application row(s)
    const mineIncoming = incoming.filter((a) => emailKey(String(a.userEmail ?? "")) === email);
    if (mineIncoming.length === 0) {
      return jsonOk({ error: "Forbidden" }, 403);
    }
    const others = current.filter((a) => emailKey(String(a.userEmail ?? "")) !== email);
    next = [...others, ...mineIncoming];
  }

  const saved = await saveRegistrarApplications(admin, next);
  if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
  return jsonOk({ ok: true, count: next.length });
}

async function loadRegistryPins(
  admin: NonNullable<ReturnType<typeof adminClient>>,
): Promise<{ global: string; byState: Record<string, string> }> {
  // Prefer locked ngmy_settings row (not readable by anon after pin lock SQL).
  try {
    const { data: settingsRow } = await admin
      .from("ngmy_settings")
      .select("value")
      .eq("key", CIVIC_PINS_KEY)
      .maybeSingle();
    const value = settingsRow?.value;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const v = value as Record<string, unknown>;
      const global = String(v.global ?? "").trim();
      const byState: Record<string, string> = {};
      const raw = v.byState;
      if (raw && typeof raw === "object" && !Array.isArray(raw)) {
        for (const [k, val] of Object.entries(raw as Record<string, unknown>)) {
          const pin = String(val ?? "").trim();
          if (k.trim() && pin) byState[k.trim()] = pin;
        }
      }
      if (global || Object.keys(byState).length > 0) {
        return { global, byState };
      }
    }
  } catch (_) {
    // fall through to legacy config
  }

  const { data } = await admin
    .from("config")
    .select("civicRegistryPin,civicRegistryPinsByState")
    .eq("id", "1")
    .maybeSingle();
  const global = String(data?.civicRegistryPin ?? "").trim();
  const byState: Record<string, string> = {};
  const raw = data?.civicRegistryPinsByState;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
      const pin = String(v ?? "").trim();
      if (k.trim() && pin) byState[k.trim()] = pin;
    }
  }
  return { global, byState };
}

async function saveRegistryPins(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  pins: { global: string; byState: Record<string, string> },
): Promise<{ ok: boolean; error?: string }> {
  const payload = {
    global: pins.global,
    byState: pins.byState,
    savedAt: new Date().toISOString(),
  };
  const { error: settingsErr } = await admin.from("ngmy_settings").upsert(
    {
      key: CIVIC_PINS_KEY,
      value: payload,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "key" },
  );
  if (settingsErr) return { ok: false, error: settingsErr.message };

  // Keep config columns empty so public selects cannot leak PINs.
  await admin.from("config").upsert({
    id: "1",
    civicRegistryPin: "",
    civicRegistryPinsByState: {},
  });
  return { ok: true };
}

function effectivePinForState(
  pins: { global: string; byState: Record<string, string> },
  state: string,
): string {
  const sk = canonicalStateKey(state);
  if (!sk) return pins.global.trim();
  const per = (pins.byState[state.trim()] ?? pins.byState[sk] ?? "").trim();
  if (per) return per;
  for (const [k, v] of Object.entries(pins.byState)) {
    if (canonicalStateKey(k) === sk && String(v).trim()) return String(v).trim();
  }
  return pins.global.trim();
}

async function pinSigFor(state: string, pin: string): Promise<string> {
  const h = await sha256Hex(`${canonicalStateKey(state)}|${pin.trim()}`);
  return `v1:${h}`;
}

function phoneDigits(phone: string): string {
  let d = phone.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  return d.length >= 10 ? d.slice(-10) : d;
}

function normName(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function normAddress(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function findDuplicateMember(
  members: Record<string, unknown>[],
  fullName: string,
  homeAddress: string,
  phone: string,
): Record<string, unknown> | null {
  const name = normName(fullName);
  const addr = normAddress(homeAddress);
  const ph = phoneDigits(phone);
  for (const m of members) {
    const mn = normName(String(m.fullName ?? ""));
    const ma = normAddress(String(m.homeAddress ?? ""));
    const mp = phoneDigits(String(m.phone ?? ""));
    // Phone match alone is enough (same person).
    if (ph.length >= 7 && mp.length >= 7 && ph === mp) return m;
    // Same name + same address (not name-only — that blocked real enrollments).
    if (name && mn && name === mn && addr && ma && addr.length >= 8 && addr === ma) return m;
  }
  return null;
}

function stateCodePrefix(state: string): string {
  return US_STATE_PREFIX[canonicalStateKey(state)] ?? "XX";
}

function generateRegistryId(state: string, existing: Set<string>): string {
  const prefix = stateCodePrefix(state);
  for (let i = 0; i < 5000; i++) {
    const n = Math.floor(Math.random() * 8999999) + 1000000;
    const candidate = `${prefix}${n}`;
    if (!existing.has(candidate.toUpperCase())) return candidate;
  }
  return `${prefix}${Date.now()}`;
}

async function handleCivicVerifyStatePin(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const state = String(body.state ?? "").trim();
  const pin = String(body.pin ?? "").trim();
  if (!state || !pin) return jsonOk({ error: "state and pin required" }, 400);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const pins = await loadRegistryPins(admin);
  const expected = effectivePinForState(pins, state);
  if (!expected) return jsonOk({ error: "Registry PIN not set yet for this state." }, 400);
  if (pin !== expected) return jsonOk({ error: "Incorrect PIN", ok: false }, 403);
  const pinSig = await pinSigFor(state, expected);
  return jsonOk({ ok: true, pinSig, state });
}

async function handleCivicGateMatchName(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const state = String(body.state ?? "").trim();
  const fullName = String(body.fullName ?? "").trim();
  const pinSig = String(body.pinSig ?? "").trim();
  if (!state || !fullName || !pinSig) {
    return jsonOk({ error: "state, fullName, and pinSig required" }, 400);
  }
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const pins = await loadRegistryPins(admin);
  const expected = effectivePinForState(pins, state);
  if (!expected || (await pinSigFor(state, expected)) !== pinSig) {
    return jsonOk({ error: "PIN session invalid" }, 403);
  }
  const payload = await loadCivicPayload(admin);
  const members = filterMembersByState(asMemberList(payload.members), state);
  const want = normName(fullName);
  const match = members.find((m) => normName(String(m.fullName ?? "")) === want);
  if (!match) return jsonOk({ error: "That name is not registered in this state." }, 404);
  const matchToken = await sha256Hex(
    `${email}|${stateKey(state)}|${emailKey(String(match.email ?? ""))}|${String(match.registryId ?? "")}|${pinSig}`,
  );
  // Stash match context in a short-lived settings row? Keep stateless: encode email+rid in token verify later by re-finding.
  return jsonOk({
    ok: true,
    matchToken,
    memberEmail: emailKey(String(match.email ?? "")),
    registryIdHint: String(match.registryId ?? ""),
  });
}

async function handleCivicGateVerifyIdentity(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const state = String(body.state ?? "").trim();
  const pinSig = String(body.pinSig ?? "").trim();
  const memberEmail = emailKey(String(body.memberEmail ?? ""));
  const dob = String(body.dob ?? "").trim();
  const registryId = String(body.registryId ?? "").trim();
  const step = String(body.step ?? "dob").trim(); // dob | id | both
  if (!state || !pinSig || !memberEmail) {
    return jsonOk({ error: "state, pinSig, and memberEmail required" }, 400);
  }
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const pins = await loadRegistryPins(admin);
  const expected = effectivePinForState(pins, state);
  if (!expected || (await pinSigFor(state, expected)) !== pinSig) {
    return jsonOk({ error: "PIN session invalid" }, 403);
  }
  const payload = await loadCivicPayload(admin);
  const members = filterMembersByState(asMemberList(payload.members), state);
  const match = members.find((m) => emailKey(String(m.email ?? "")) === memberEmail);
  if (!match) return jsonOk({ error: "Member not found" }, 404);

  const normDob = (s: string) => s.replace(/[^\d]/g, "");
  if (step === "dob" || step === "both") {
    if (!dob) return jsonOk({ error: "dob required" }, 400);
    const got = normDob(String(match.dob ?? ""));
    const want = normDob(dob);
    if (got && want && got !== want) {
      return jsonOk({ error: "Date of birth does not match that registered name.", ok: false }, 403);
    }
    // Self-enrollment rows may have no DOB on file — registry ID step verifies them.
    if (step === "dob") return jsonOk({ ok: true });
  }
  if (step === "id" || step === "both") {
    if (!registryId) return jsonOk({ error: "registryId required" }, 400);
    const got = String(match.registryId ?? "").trim().toUpperCase();
    if (!got || got !== registryId.trim().toUpperCase()) {
      return jsonOk({ error: "Registry ID does not match that member.", ok: false }, 403);
    }
  }
  return jsonOk({
    ok: true,
    pinSig,
    registryId: String(match.registryId ?? ""),
    state,
  });
}

function stripSecretsFromCivicRow(
  m: Record<string, unknown>,
): Record<string, unknown> {
  const out = { ...m };
  // Keep homeAddress/dob for registrar roster tools — only strip true secrets.
  for (const k of ["passwordHash", "password_hash", "governmentID", "GovernmentID", "ssn", "socialSecurity"]) {
    delete out[k];
  }
  delete out.idPhoto;
  delete out.idPhotoData;
  delete out.idPhotoBase64;
  return out;
}

function civicRosterRowsForPrivileged(
  list: Record<string, unknown>[],
): Record<string, unknown>[] {
  return list.map(stripSecretsFromCivicRow);
}

async function handleCivicFetchRoster(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const state = String(body.state ?? "").trim();
  const pinSig = String(body.pinSig ?? "").trim();
  const payload = await loadCivicPayload(admin);
  const allMembers = asMemberList(payload.members);
  const allRemoved = asMemberList(payload.removed);
  const allDeceased = asMemberList(payload.deceased);

  if (role.isAdmin) {
    return jsonOk({
      ok: true,
      view: "admin",
      members: civicRosterRowsForPrivileged(allMembers),
      removed: civicRosterRowsForPrivileged(allRemoved),
      deceased: civicRosterRowsForPrivileged(allDeceased),
      savedAt: payload.savedAt ?? null,
    });
  }

  if (role.isRegistrar && role.registrarState) {
    const st = role.registrarState;
    const homeMembers = filterMembersByState(allMembers, st);
    const homeRemoved = filterMembersByState(allRemoved, st);
    const homeDeceased = allDeceased.filter((d) => {
      const snap = d.snapshot && typeof d.snapshot === "object"
        ? (d.snapshot as Record<string, unknown>)
        : d;
      return canonicalStateKey(String(d.state ?? snap.state ?? "")) === canonicalStateKey(st);
    });

    let extraDir: Record<string, unknown>[] = [];
    let extraDec: Record<string, unknown>[] = [];
    if (state && canonicalStateKey(state) !== canonicalStateKey(st) && pinSig) {
      const pins = await loadRegistryPins(admin);
      const expected = effectivePinForState(pins, state);
      if (expected && (await pinSigFor(state, expected)) === pinSig) {
        extraDir = filterMembersByState(allMembers, state).map(sanitizeDirectoryMember);
        extraDec = allDeceased
          .filter((d) => {
            const snap = d.snapshot && typeof d.snapshot === "object"
              ? (d.snapshot as Record<string, unknown>)
              : d;
            return canonicalStateKey(String(d.state ?? snap.state ?? "")) === canonicalStateKey(state);
          })
          .map(sanitizeDirectoryDeceased);
      }
    }

    const members = [
      ...civicRosterRowsForPrivileged(homeMembers),
      ...extraDir.filter(
        (m) =>
          !homeMembers.some(
            (h) => emailKey(String(h.email ?? "")) === emailKey(String(m.email ?? "")),
          ),
      ),
    ];
    return jsonOk({
      ok: true,
      view: "registrar",
      registrarState: st,
      members,
      removed: civicRosterRowsForPrivileged(homeRemoved),
      deceased: [
        ...civicRosterRowsForPrivileged(homeDeceased),
        ...extraDec,
      ],
      savedAt: payload.savedAt ?? null,
    });
  }

  // Normal member: requires state + valid pinSig; directory only
  if (!state || !pinSig) {
    return jsonOk({
      ok: true,
      view: "member",
      members: [],
      removed: [],
      deceased: [],
      needsUnlock: true,
    });
  }
  const pins = await loadRegistryPins(admin);
  const expected = effectivePinForState(pins, state);
  if (!expected || (await pinSigFor(state, expected)) !== pinSig) {
    return jsonOk({ error: "State unlock required", ok: false }, 403);
  }
  const dir = filterMembersByState(allMembers, state).map(sanitizeDirectoryMember);
  const dec = allDeceased
    .filter((d) => {
      const snap = d.snapshot && typeof d.snapshot === "object"
        ? (d.snapshot as Record<string, unknown>)
        : d;
      return canonicalStateKey(String(d.state ?? snap.state ?? "")) === canonicalStateKey(state);
    })
    .map(sanitizeDirectoryDeceased);
  return jsonOk({
    ok: true,
    view: "member",
    members: dir,
    removed: [],
    deceased: dec,
    savedAt: payload.savedAt ?? null,
  });
}

async function handleCivicNationwideStats(req: Request): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);

  const roster = await loadCivicPayload(admin);
  const members = asMemberList(roster.members);
  const deceased = asMemberList(roster.deceased);
  const deceasedEmails = new Set<string>();
  const deceasedIds = new Set<string>();
  for (const raw of deceased) {
    const snap = raw.snapshot && typeof raw.snapshot === "object"
      ? raw.snapshot as Record<string, unknown>
      : raw;
    const memberEmail = emailKey(String(raw.email ?? snap.email ?? ""));
    const registryId = String(raw.registryId ?? snap.registryId ?? "").trim().toUpperCase();
    if (memberEmail) deceasedEmails.add(memberEmail);
    if (registryId) deceasedIds.add(registryId);
  }

  const contributions: Record<string, unknown>[] = [];
  const pageSize = 1000;
  for (let from = 0;; from += pageSize) {
    const { data, error } = await admin
      .from("transactions")
      .select("id,userEmail,amount,timestamp,sourceDetails")
      .eq("type", 5)
      .eq("status", 1)
      .order("timestamp", { ascending: false })
      .range(from, from + pageSize - 1);
    if (error) return jsonOk({ error: error.message }, 500);
    const page = (data ?? []) as Record<string, unknown>[];
    contributions.push(...page);
    if (page.length < pageSize) break;
  }

  const spendingsWrap = await loadSettingsObject(admin, HELP_SPENDINGS_KEY);
  const spendings = asItems(spendingsWrap);
  const now = Date.now();
  const resets = new Map<string, Record<string, unknown>>();
  for (const row of spendings) {
    if (row.walletSoftReset !== true) continue;
    const state = canonicalStateKey(String(row.state ?? ""));
    if (!state) continue;
    const purgeAt = Date.parse(String(row.purgeAt ?? ""));
    if (row.permanent !== true && Number.isFinite(purgeAt) && purgeAt <= now) continue;
    const at = Date.parse(String(row.recordedAt ?? ""));
    const prior = resets.get(state);
    const priorAt = Date.parse(String(prior?.recordedAt ?? ""));
    if (!prior || (!Number.isNaN(at) && (Number.isNaN(priorAt) || at > priorAt))) {
      resets.set(state, row);
    }
  }

  const collected = new Map<string, number>();
  const campaignKeys = new Set<string>();
  for (const row of contributions) {
    let meta: Record<string, unknown> = {};
    try {
      const decoded = JSON.parse(String(row.sourceDetails ?? "{}"));
      if (decoded && typeof decoded === "object" && !Array.isArray(decoded)) {
        meta = decoded as Record<string, unknown>;
      }
    } catch (_) {}
    const memberEmail = emailKey(String(meta.memberEmail ?? row.userEmail ?? ""));
    const registryId = String(meta.registryId ?? "").trim().toUpperCase();
    if ((memberEmail && deceasedEmails.has(memberEmail)) ||
        (registryId && deceasedIds.has(registryId))) continue;
    const state = canonicalStateKey(String(meta.state ?? meta.civicState ?? ""));
    if (!state) continue;
    const txAt = Date.parse(String(row.timestamp ?? ""));
    const reset = resets.get(state);
    const resetAt = Date.parse(String(reset?.recordedAt ?? ""));
    if (reset?.hideBudget === true && Number.isFinite(resetAt) &&
        (!Number.isFinite(txAt) || txAt <= resetAt)) continue;
    const amount = Number(row.amount ?? 0);
    if (Number.isFinite(amount)) {
      collected.set(state, (collected.get(state) ?? 0) + amount);
    }
    const campaignId = String(meta.campaignId ?? "").trim();
    const fallback = [
      String(meta.purpose ?? "Contribution").trim(),
      String(meta.scopeType ?? "all"),
      String(meta.scopeValue ?? ""),
      state,
    ].join("|");
    campaignKeys.add(campaignId || fallback);
  }

  const spent = new Map<string, number>();
  const credits = new Map<string, number>();
  const silentCuts = new Map<string, number>();
  for (const row of spendings) {
    if (row.walletSoftReset === true) continue;
    const state = canonicalStateKey(String(row.state ?? ""));
    if (!state) continue;
    const pendingDeleteAt = Date.parse(String(row.pendingDeleteAt ?? ""));
    if (Number.isFinite(pendingDeleteAt) && pendingDeleteAt <= now) continue;
    const amount = Number(row.amount ?? 0);
    if (!Number.isFinite(amount)) continue;
    const rowAt = Date.parse(String(row.requestedAt ?? row.recordedAt ?? ""));
    const reset = resets.get(state);
    const resetAt = Date.parse(String(reset?.recordedAt ?? ""));
    const existedAtReset = Number.isFinite(resetAt) &&
      (!Number.isFinite(rowAt) || rowAt <= resetAt);
    const kind = String(row.kind ?? "").trim();
    const id = String(row.id ?? "");
    const description = String(row.description ?? "").trim();
    const hideBudget = reset?.hideBudget === true && existedAtReset;
    const hideSpendings = reset?.hideSpendings === true && existedAtReset;
    if (row.silentAdminRemoval === true ||
        description === "Admin available balance adjustment") {
      if (!hideBudget && !hideSpendings) {
        silentCuts.set(state, (silentCuts.get(state) ?? 0) + amount);
      }
      continue;
    }
    if (kind === "fund_transfer_pending" || id.startsWith("xfer_pending_")) continue;
    if (kind === "transfer_from_trust" || row.contributionTransferCredit === true) {
      if (!hideBudget) credits.set(state, (credits.get(state) ?? 0) + amount);
      continue;
    }
    const trustDeposit = row.walletTrustDeposit === true ||
      kind === "state_trust_deposit" ||
      kind === "transfer_from_contribution" ||
      id.startsWith("trust_deposit_") ||
      id.startsWith("xfer_in_trust_");
    if (trustDeposit || hideSpendings) continue;
    const fund = String(row.fund ?? "contribution").trim().toLowerCase();
    if (fund !== "trust") spent.set(state, (spent.get(state) ?? 0) + amount);
  }

  const states = new Set<string>([
    ...collected.keys(),
    ...spent.keys(),
    ...credits.keys(),
    ...silentCuts.keys(),
  ]);
  let contributionsKept = 0;
  for (const state of states) {
    const available = (collected.get(state) ?? 0) -
      (silentCuts.get(state) ?? 0) -
      (spent.get(state) ?? 0) +
      (credits.get(state) ?? 0);
    contributionsKept += Math.max(0, available);
  }

  let totalFamilyMembers = 0;
  for (const member of members) {
    const n = Number(member.familyMembers ?? 1);
    totalFamilyMembers += Number.isFinite(n) && n >= 1 ? Math.trunc(n) : 1;
  }
  return jsonOk({
    ok: true,
    registeredMembers: members.length,
    totalFamilyMembers,
    deceasedMembers: deceased.length,
    contributionsKept,
    totalContributions: campaignKeys.size,
    generatedAt: new Date().toISOString(),
  });
}

async function handleCivicPersistRoster(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ ok: false, error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ ok: false, error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ ok: false, error: "Registrar or admin required" }, 403);
  }

  const incomingMembers = asMemberList(body.members);
  const incomingRemoved = asMemberList(body.removed);
  const incomingDeceased = asMemberList(body.deceased);
  const scopeState = role.isAdmin
    ? String(body.state ?? "").trim()
    : role.registrarState.trim();

  const current = await loadCivicPayload(admin);
  let members = asMemberList(current.members);
  let removed = asMemberList(current.removed);
  let deceased = asMemberList(current.deceased);

  if (role.isAdmin && !scopeState) {
    // Union with existing cloud roster — never let a stale device wipe members.
    members = mergeMemberLists(members, incomingMembers);
    removed = mergeMemberLists(removed, incomingRemoved);
    if (incomingDeceased.length > 0) {
      deceased = mergeMemberLists(deceased, incomingDeceased);
    }
  } else {
    const sk = canonicalStateKey(scopeState);
    if (!sk) return jsonOk({ ok: false, error: "No registrar state" }, 403);
    const mergeStateSlice = (
      allMembers: Record<string, unknown>[],
      incoming: Record<string, unknown>[],
      stateKey: string,
    ) => {
      const other = allMembers.filter(
        (m) => canonicalStateKey(String(m.state ?? "")) !== stateKey,
      );
      const existing = allMembers.filter(
        (m) => canonicalStateKey(String(m.state ?? "")) === stateKey,
      );
      const inc = incoming.filter(
        (m) => canonicalStateKey(String(m.state ?? "")) === stateKey,
      );
      // Union cloud + incoming for this state — tombstones below keep deletes final.
      return [...other, ...mergeMemberLists(existing, inc)];
    };

    members = mergeStateSlice(members, incomingMembers, sk);

    // Registrar may enroll in another state they are viewing (body.state).
    const bodyState = String(body.state ?? "").trim();
    const bodySk = canonicalStateKey(bodyState);
    if (bodySk && bodySk !== sk) {
      members = mergeStateSlice(members, incomingMembers, bodySk);
    }

    // Deletes with no state on record belong to whoever is syncing — dropping
    // them meant the member was handed straight back on the next merge.
    const ownsRemoved = (m: Record<string, unknown>) => {
      const k = canonicalStateKey(String(m.state ?? ""));
      return !k || k === sk;
    };
    const otherRemoved = removed.filter((m) => !ownsRemoved(m));
    const homeRemovedExisting = removed.filter(ownsRemoved);
    const homeRemovedIncoming = incomingRemoved.filter(ownsRemoved);
    removed = [...otherRemoved, ...mergeMemberLists(homeRemovedExisting, homeRemovedIncoming)];

    const otherDeceased = deceased.filter((d) => {
      const snap = d.snapshot && typeof d.snapshot === "object"
        ? (d.snapshot as Record<string, unknown>)
        : d;
      return canonicalStateKey(String(d.state ?? snap.state ?? "")) !== sk;
    });
    const homeDeceasedExisting = deceased.filter((d) => {
      const snap = d.snapshot && typeof d.snapshot === "object"
        ? (d.snapshot as Record<string, unknown>)
        : d;
      return canonicalStateKey(String(d.state ?? snap.state ?? "")) === sk;
    });
    const homeDeceasedIncoming = incomingDeceased.filter((d) => {
      const snap = d.snapshot && typeof d.snapshot === "object"
        ? (d.snapshot as Record<string, unknown>)
        : d;
      return canonicalStateKey(String(d.state ?? snap.state ?? "")) === sk;
    });
    deceased = [
      ...otherDeceased,
      ...mergeMemberLists(homeDeceasedExisting, homeDeceasedIncoming),
    ];
  }

  members = filterTombstonedMembers(members, removed, deceased);
  members = members.filter((m) => !isGhostMemberRow(m));

  const saved = await saveCivicPayload(admin, { members, removed, deceased });
  if (!saved.ok) return jsonOk({ ok: false, error: saved.error ?? "Save failed" }, 500);
  return jsonOk({ ok: true, memberCount: members.length });
}

/** Upsert one member into the cloud roster — used for immediate enroll (no full-roster payload). */
async function handleCivicUpsertMember(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ ok: false, error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ ok: false, error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ ok: false, error: "Registrar or admin required" }, 403);
  }

  const raw = body.member;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return jsonOk({ ok: false, error: "member object required" }, 400);
  }
  const member = { ...(raw as Record<string, unknown>) };
  const fullName = String(member.fullName ?? "").trim();
  const state = displayStateName(String(member.state ?? body.state ?? "").trim());
  let registryId = String(member.registryId ?? "").trim();
  if (!fullName || !state) {
    return jsonOk({ ok: false, error: "fullName and state are required" }, 400);
  }

  // Registrars may only write to their home state (or admin anywhere).
  if (!role.isAdmin) {
    const home = canonicalStateKey(role.registrarState);
    if (home && canonicalStateKey(state) !== home) {
      // Allow if body explicitly scopes to home and member.state was wrong — normalize to home.
      member.state = displayStateName(role.registrarState);
    } else {
      member.state = state;
    }
  } else {
    member.state = state;
  }

  member.fullName = fullName;
  member.email = emailKey(String(member.email ?? ""));
  member.updatedAt = new Date().toISOString();
  if (!member.enrolledAt) member.enrolledAt = member.updatedAt;
  // Never store huge inline photo blobs in ngmy_settings.
  delete member.idPhoto;
  delete member.idPhotoData;
  delete member.idPhotoBase64;

  const current = await loadCivicPayload(admin);
  const members = asMemberList(current.members);
  const removed = asMemberList(current.removed);
  const deceased = asMemberList(current.deceased);

  if (!registryId) {
    const existingIds = new Set(
      members.map((m) => String(m.registryId ?? "").trim().toUpperCase()).filter(Boolean),
    );
    registryId = generateRegistryId(String(member.state ?? state), existingIds);
  }
  member.registryId = registryId;

  const nextMembers = mergeMemberLists(members, [member]);
  const memberEmail = emailKey(String(member.email ?? ""));
  const memberRid = String(member.registryId ?? "").trim().toUpperCase();
  const nextRemoved = removed.filter((r) => {
    const re = emailKey(String(r.email ?? ""));
    const rid = String(r.registryId ?? "").trim().toUpperCase();
    if (memberEmail && re === memberEmail) return false;
    if (memberRid && rid === memberRid) return false;
    return true;
  });

  const saved = await saveCivicPayload(admin, {
    members: nextMembers,
    removed: nextRemoved,
    deceased,
    source: "civicUpsertMember",
  });
  if (!saved.ok) return jsonOk({ ok: false, error: saved.error ?? "Save failed" }, 500);
  return jsonOk({ ok: true, registryId, memberCount: nextMembers.length });
}

async function handleCivicGuestEnroll(body: Record<string, unknown>): Promise<Response> {
  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const homeAddress = String(body.homeAddress ?? body.address ?? "").trim();
  const state = displayStateName(String(body.state ?? "").trim());
  const familyMembers = Number(body.familyMembers ?? 1) || 1;
  const familyMales = Number(body.familyMales ?? 0) || 0;
  const familyFemales = Number(body.familyFemales ?? 0) || 0;
  const registrarToken = String(body.registeredByToken ?? body.registrarToken ?? "").trim();

  if (!fullName || !phone || !homeAddress || !state) {
    return jsonOk({ error: "fullName, phone, homeAddress, and state are required" }, 400);
  }
  if (familyMales + familyFemales !== familyMembers) {
    return jsonOk({ error: "familyMales + familyFemales must equal familyMembers" }, 400);
  }

  const admin = adminClient();
  if (!admin) return jsonOk({ ok: false, error: "Server misconfigured" }, 500);

  const linkToken = String(body.linkToken ?? body.t ?? "").trim();
  const linkVersion = Number(body.k ?? body.linkVersion ?? 0) || 0;
  const linkOk = await validateStateEnrollmentLink(admin, state, linkToken, linkVersion);
  if (!linkOk) {
    return jsonOk({
      ok: false,
      error: "This enrollment link is no longer valid. Ask your Authorized Registrar for the current link.",
    }, 403);
  }

  // Honor admin self-enrollment toggle unless this is a registrar-attributed link.
  if (!registrarToken) {
    const se = await loadSettingsObject(admin, CIVIC_SELF_ENROLL_SETTINGS_KEY);
    let selfEnroll =
      se.civicSelfEnrollmentEnabled === true ||
      String(se.civicSelfEnrollmentEnabled ?? "").toLowerCase() === "true";
    if (!selfEnroll) {
      try {
        const { data: cfg } = await admin
          .from("config")
          .select("civicSelfEnrollmentEnabled")
          .eq("id", "1")
          .maybeSingle();
        selfEnroll = cfg?.civicSelfEnrollmentEnabled === true;
      } catch (_) {
        // ignore
      }
    }
    if (!selfEnroll) {
      return jsonOk({ ok: false, error: "Self-enrollment is closed right now." }, 403);
    }
  }

  const payload = await loadCivicPayload(admin);
  const members = asMemberList(payload.members);

  const digits = phoneDigits(phone);
  const guestEmail =
    digits.length >= 7 ? `civic.${digits}@guest.ngmy` : `civic.${Date.now()}@guest.ngmy`;

  const dup = findDuplicateMember(members, fullName, homeAddress, phone);
  if (dup) {
    return jsonOk({
      error: "Already enrolled",
      duplicate: {
        fullName: String(dup.fullName ?? ""),
        registryId: String(dup.registryId ?? ""),
      },
      ok: false,
    }, 409);
  }

  const existingIds = new Set(
    members.map((m) => String(m.registryId ?? "").trim().toUpperCase()).filter(Boolean),
  );
  const registryId = generateRegistryId(state, existingIds);
  const now = new Date().toISOString();
  const member: Record<string, unknown> = {
    email: guestEmail,
    fullName,
    phone: digits.length >= 7 ? digits : phone,
    homeAddress,
    state,
    city: "",
    room: "",
    dob: "",
    idType: "",
    registryId,
    familyMembers,
    familyMales,
    familyFemales,
    enrollmentSource: "guest_self_enrollment",
    registeredByToken: registrarToken,
    enrolledAt: now,
    updatedAt: now,
  };

  // Re-load right before write so concurrent self-enrolls are not overwritten.
  const latest = await loadCivicPayload(admin);
  const latestMembers = asMemberList(latest.members);
  const latestRemoved = asMemberList(latest.removed);
  const latestDeceased = asMemberList(latest.deceased);
  const dup2 = findDuplicateMember(latestMembers, fullName, homeAddress, phone);
  if (dup2) {
    return jsonOk({
      error: "Already enrolled",
      duplicate: {
        fullName: String(dup2.fullName ?? ""),
        registryId: String(dup2.registryId ?? ""),
      },
      ok: false,
    }, 409);
  }
  const nextMembers = mergeMemberLists(latestMembers, [member]);
  const nextRemoved = latestRemoved.filter(
    (r) => emailKey(String(r.email ?? "")) !== emailKey(guestEmail),
  );

  const saved = await saveCivicPayload(admin, {
    members: nextMembers,
    removed: nextRemoved,
    deceased: latestDeceased,
    source: "guest_self_enrollment",
  });
  if (!saved.ok) return jsonOk({ ok: false, error: saved.error ?? "Save failed" }, 500);

  // Verify the row actually landed — never tell the guest "enrolled" on a failed write.
  const verify = await loadCivicPayload(admin);
  const verifyMembers = asMemberList(verify.members);
  const savedRow = verifyMembers.find(
    (m) => String(m.registryId ?? "").trim().toUpperCase() === registryId.toUpperCase(),
  );
  if (!savedRow) {
    return jsonOk({ ok: false, error: "Enrollment could not be verified. Please try again." }, 500);
  }

  return jsonOk({
    ok: true,
    registryId,
    email: guestEmail,
    state,
    memberCount: verifyMembers.length,
  });
}

async function handleCivicFetchRegistryPins(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ error: "Forbidden" }, 403);
  }
  const pins = await loadRegistryPins(admin);
  if (role.isAdmin) {
    return jsonOk({ ok: true, global: pins.global, byState: pins.byState });
  }
  // Registrar: only their home-state PIN
  const st = role.registrarState;
  const pin = effectivePinForState(pins, st);
  const byState: Record<string, string> = {};
  if (st && pin) byState[st] = pin;
  return jsonOk({ ok: true, global: "", byState });
}

async function handleCivicSaveRegistryPins(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ error: "Forbidden" }, 403);
  }

  const current = await loadRegistryPins(admin);
  let nextGlobal = current.global;
  const nextByState: Record<string, string> = { ...current.byState };

  const state = String(body.state ?? "").trim();
  const pin = String(body.pin ?? "").trim();
  const globalPinRaw = body.globalPin;
  const globalPin = globalPinRaw == null ? null : String(globalPinRaw).trim();

  if (role.isAdmin) {
    if (globalPin != null && globalPin.length > 0) nextGlobal = globalPin;
    if (state && pin) nextByState[state] = pin;
    // Admin may replace full map when provided
    const map = body.byState;
    if (map && typeof map === "object" && !Array.isArray(map)) {
      for (const [k, v] of Object.entries(map as Record<string, unknown>)) {
        const sk = String(k ?? "").trim();
        const pv = String(v ?? "").trim();
        if (sk && pv) nextByState[sk] = pv;
      }
    }
  } else {
    // Registrar: only home state PIN
    const home = role.registrarState.trim();
    if (!home) return jsonOk({ error: "No registrar state" }, 403);
    if (state && stateKey(state) !== stateKey(home)) {
      return jsonOk({ error: "Registrars can only set PIN for their home state" }, 403);
    }
    if (!pin) return jsonOk({ error: "pin required" }, 400);
    nextByState[home] = pin;
  }

  const saved = await saveRegistryPins(admin, {
    global: nextGlobal,
    byState: nextByState,
  });
  if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
  return jsonOk({
    ok: true,
    global: role.isAdmin ? nextGlobal : "",
    byState: role.isAdmin
      ? nextByState
      : { [role.registrarState]: nextByState[role.registrarState] ?? pin },
  });
}

// ─── Private config lists (loans, games, help, jobs, store) ───

const MGMT_LISTS_KEY = "management_operational_lists";
const GAME_INVITES_KEY = "game_invites";
const STORE_INQUIRIES_KEY = "store_inquiries";
const STORE_ORDERS_KEY = "store_orders";
const MEDIA_VIRTUAL_KEY = "media_virtual_profiles";
const FAMILY_PHOTO_ACCESS_KEY = "family_tree_photo_access";
const HELP_SPENDINGS_KEY = "civic_help_campaign_spendings";
const CIVIC_CITIES_ROOMS_KEY = "civic_cities_rooms";
const CIVIC_DELETED_CONTRIB_KEY = "civic_deleted_contribution_ids";
const CIVIC_RECEIPT_REMOVED_KEY = "civic_contribution_receipt_removed";
const CIVIC_HELP_MODE_KEY = "civic_help_mode_settings";
const STORE_SELL_ACCESS_KEY = "store_sell_access_emails";
const CIVIC_SELF_ENROLL_SETTINGS_KEY = "civic_self_enrollment_settings";

function stateEnrollSlug(state: string): string {
  const sk = canonicalStateKey(state);
  if (!sk) return "";
  return sk.replace(/\s+/g, "-");
}

function buildEnrollmentShareUrl(
  state: string,
  registrarToken: string,
  version: number,
): string {
  const slug = stateEnrollSlug(state);
  if (!slug) return "https://ngmy.org/";
  const base = `https://ngmy.org/enroll/${encodeURIComponent(slug)}`;
  const params: string[] = [];
  if (registrarToken) params.push(`r=${registrarToken}`);
  if (version > 1) params.push(`k=${version}`);
  return params.length ? `${base}?${params.join("&")}` : base;
}

function stateEnrollmentLinksMap(
  se: Record<string, unknown>,
): Record<string, Record<string, unknown>> {
  const raw = se.stateEnrollmentLinks;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out: Record<string, Record<string, unknown>> = {};
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      out[k] = v as Record<string, unknown>;
    }
  }
  return out;
}

async function validateStateEnrollmentLink(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  state: string,
  token: string,
  version = 0,
): Promise<boolean> {
  const sk = canonicalStateKey(state);
  const t = token.trim().toLowerCase();
  if (!sk) return false;
  const se = await loadSettingsObject(admin, CIVIC_SELF_ENROLL_SETTINGS_KEY);
  const links = stateEnrollmentLinksMap(se);
  const entry = links[sk];
  if (!entry) return true;

  let expectedVersion = Number(entry.version ?? 0) || 0;
  const legacyToken = String(entry.token ?? "").trim().toLowerCase();
  if (!expectedVersion && legacyToken) expectedVersion = 1;

  if (expectedVersion > 1) {
    const gotVersion = version > 0 ? version : 1;
    return gotVersion === expectedVersion;
  }

  if (legacyToken && t) return t === legacyToken;

  if (expectedVersion === 1) {
    const gotVersion = version > 0 ? version : 1;
    return gotVersion === 1;
  }

  return true;
}

async function ensureStateEnrollmentLink(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  state: string,
  { rotate = false } = {},
): Promise<number> {
  const sk = canonicalStateKey(state);
  if (!sk) return 1;
  const se = await loadSettingsObject(admin, CIVIC_SELF_ENROLL_SETTINGS_KEY);
  const links = stateEnrollmentLinksMap(se);
  const prev = links[sk];
  let current = Number(prev?.version ?? 0) || 0;
  if (!current && String(prev?.token ?? "").trim()) current = 1;

  if (!rotate) return current > 0 ? current : 1;

  const next = (current > 0 ? current : 1) + 1;
  links[sk] = { version: next, issuedAt: new Date().toISOString() };
  await saveSettingsObject(admin, CIVIC_SELF_ENROLL_SETTINGS_KEY, {
    ...se,
    stateEnrollmentLinks: links,
  });
  return next;
}

async function handleCivicFetchEnrollmentLink(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ ok: false, error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ ok: false, error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ ok: false, error: "Registrar or admin required" }, 403);
  }
  const state = displayStateName(
    String(body.state ?? (role.isRegistrar ? role.registrarState : "")).trim(),
  );
  if (!state) return jsonOk({ ok: false, error: "State required" }, 400);
  if (role.isRegistrar && !role.isAdmin) {
    const home = canonicalStateKey(role.registrarState);
    const want = canonicalStateKey(state);
    if (home && want && home !== want) {
      return jsonOk({ ok: false, error: "Not authorized for that state" }, 403);
    }
  }
  const version = await ensureStateEnrollmentLink(admin, state, { rotate: false });
  const registrarToken = role.isRegistrar
    ? String(body.registrarToken ?? "").trim()
    : "";
  const rTok = registrarToken || (role.isRegistrar ? registrarLinkTokenFromEmail(email) : "");
  return jsonOk({
    ok: true,
    state,
    linkVersion: version,
    linkToken: "",
    url: buildEnrollmentShareUrl(state, rTok, version),
  });
}

function registrarLinkTokenFromEmail(email: string): string {
  const bytes = new TextEncoder().encode(emailKey(email));
  let hash = 0x811c9dc5;
  for (const b of bytes) {
    hash ^= b;
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function stateCodeFromName(state: string): string {
  const sk = canonicalStateKey(state);
  const codes: Record<string, string> = {
    alabama: "AL", alaska: "AK", arizona: "AZ", arkansas: "AR", california: "CA",
    colorado: "CO", connecticut: "CT", delaware: "DE", florida: "FL", georgia: "GA",
    hawaii: "HI", idaho: "ID", illinois: "IL", indiana: "IN", iowa: "IA",
    kansas: "KS", kentucky: "KY", louisiana: "LA", maine: "ME", maryland: "MD",
    massachusetts: "MA", michigan: "MI", minnesota: "MN", mississippi: "MS",
    missouri: "MO", montana: "MT", nebraska: "NE", nevada: "NV",
    "new hampshire": "NH", "new jersey": "NJ", "new mexico": "NM", "new york": "NY",
    "north carolina": "NC", "north dakota": "ND", ohio: "OH", oklahoma: "OK",
    oregon: "OR", pennsylvania: "PA", "rhode island": "RI", "south carolina": "SC",
    "south dakota": "SD", tennessee: "TN", texas: "TX", utah: "UT", vermont: "VT",
    virginia: "VA", washington: "WA", "west virginia": "WV", wisconsin: "WI",
    wyoming: "WY",
  };
  return codes[sk] ?? state.slice(0, 2).toUpperCase();
}

async function handleCivicRegenerateEnrollmentLink(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ ok: false, error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ ok: false, error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ ok: false, error: "Registrar or admin required" }, 403);
  }
  const state = displayStateName(
    String(body.state ?? (role.isRegistrar ? role.registrarState : "")).trim(),
  );
  if (!state) return jsonOk({ ok: false, error: "State required" }, 400);
  if (role.isRegistrar && !role.isAdmin) {
    const home = canonicalStateKey(role.registrarState);
    const want = canonicalStateKey(state);
    if (home && want && home !== want) {
      return jsonOk({ ok: false, error: "Not authorized for that state" }, 403);
    }
  }
  const version = await ensureStateEnrollmentLink(admin, state, { rotate: true });
  const rTok = role.isRegistrar ? registrarLinkTokenFromEmail(email) : "";
  return jsonOk({
    ok: true,
    state,
    linkVersion: version,
    linkToken: "",
    url: buildEnrollmentShareUrl(state, rTok, version),
    rotated: true,
  });
}

async function loadSettingsObject(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  key: string,
): Promise<Record<string, unknown>> {
  const { data } = await admin.from("ngmy_settings").select("value").eq("key", key).maybeSingle();
  const value = data?.value;
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

async function saveSettingsObject(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  key: string,
  value: Record<string, unknown>,
): Promise<{ ok: boolean; error?: string }> {
  const { error } = await admin.from("ngmy_settings").upsert(
    {
      key,
      value: { ...value, savedAt: new Date().toISOString() },
      updated_at: new Date().toISOString(),
    },
    { onConflict: "key" },
  );
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

function rowTouchesEmail(row: Record<string, unknown>, email: string): boolean {
  const want = emailKey(email);
  if (!want) return false;
  const fields = [
    "userEmail",
    "email",
    "fromEmail",
    "toEmail",
    "player1Email",
    "player2Email",
    "buyerEmail",
    "sellerEmail",
    "ownerEmail",
    "applicantEmail",
    "reviewedBy",
  ];
  for (const f of fields) {
    if (emailKey(String(row[f] ?? "")) === want) return true;
  }
  // nested maps keyed by email
  for (const v of Object.values(row)) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      for (const k of Object.keys(v as Record<string, unknown>)) {
        if (emailKey(k) === want) return true;
      }
    }
  }
  return false;
}

function filterListForEmail(
  list: Record<string, unknown>[],
  email: string,
): Record<string, unknown>[] {
  return list.filter((row) => rowTouchesEmail(row, email));
}

function asItems(value: Record<string, unknown>, wrapKey = "items"): Record<string, unknown>[] {
  const raw = value[wrapKey] ?? value.applications ?? value.loanApplications;
  return asMemberList(raw);
}

async function handlePrivateListsFetch(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);

  const mgmt = await loadSettingsObject(admin, MGMT_LISTS_KEY);
  const invitesWrap = await loadSettingsObject(admin, GAME_INVITES_KEY);
  const inquiriesWrap = await loadSettingsObject(admin, STORE_INQUIRIES_KEY);
  const ordersWrap = await loadSettingsObject(admin, STORE_ORDERS_KEY);
  const mediaWrap = await loadSettingsObject(admin, MEDIA_VIRTUAL_KEY);
  const familyWrap = await loadSettingsObject(admin, FAMILY_PHOTO_ACCESS_KEY);
  const spendingsWrap = await loadSettingsObject(admin, HELP_SPENDINGS_KEY);

  const listFields = [
    "loanApplications",
    "jobWorkerApplications",
    "jobPosts",
    "helpHelperApplications",
    "helpRequests",
    "helpBusinesses",
  ] as const;

  if (role.isAdmin) {
    return networkFetchOk({ view: "admin" });
  }

  const filteredMgmt: Record<string, unknown> = { ...mgmt };
  for (const f of listFields) {
    const list = asMemberList(mgmt[f]);
    if (f === "jobPosts") {
      filteredMgmt[f] = list;
    } else {
      filteredMgmt[f] = filterListForEmail(list, email);
    }
  }
  delete filteredMgmt.adminDeletedUserEmails;
  delete filteredMgmt.adminUserAccountStatusByEmail;
  delete filteredMgmt.adminUserCrownBadgeByEmail;

  const familyMap = (familyWrap.byEmail && typeof familyWrap.byEmail === "object")
    ? (familyWrap.byEmail as Record<string, unknown>)
    : familyWrap;
  const ownFamily: Record<string, unknown> = {};
  if (familyMap && typeof familyMap === "object") {
    for (const [k, v] of Object.entries(familyMap)) {
      if (emailKey(k) === email) ownFamily[k] = v;
    }
  }

  return networkFetchOk({
    view: role.isRegistrar ? "registrar" : "member",
  });
}

async function handlePrivateListsPersist(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const kind = String(body.kind ?? "management").trim(); // management | gameInvites | storeInquiries | storeOrders | familyPhotoAccess | mediaVirtualProfiles

  if (kind === "management") {
    const incoming = (body.management && typeof body.management === "object")
      ? (body.management as Record<string, unknown>)
      : {};
    const current = await loadSettingsObject(admin, MGMT_LISTS_KEY);
    if (role.isAdmin) {
      const saved = await saveSettingsObject(admin, MGMT_LISTS_KEY, { ...current, ...incoming });
      if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
      // Keep config columns empty
      await admin.from("config").upsert({
        id: "1",
        loanApplications: [],
        jobWorkerApplications: [],
        jobPosts: incoming.jobPosts ?? current.jobPosts ?? [],
        helpHelperApplications: [],
        helpRequests: [],
        helpBusinesses: [],
      });
      return jsonOk({ ok: true });
    }
    // Member: merge only own rows into each list
    const next = { ...current };
    for (const f of [
      "loanApplications",
      "jobWorkerApplications",
      "helpHelperApplications",
      "helpRequests",
      "helpBusinesses",
    ]) {
      const cur = asMemberList(current[f]);
      const others = cur.filter((r) => !rowTouchesEmail(r, email));
      const mineIn = asMemberList(incoming[f]).filter((r) => rowTouchesEmail(r, email));
      // Prefer incoming own rows; if empty keep existing own
      const mineCur = cur.filter((r) => rowTouchesEmail(r, email));
      next[f] = [...others, ...(mineIn.length > 0 ? mineIn : mineCur)];
    }
    if (Array.isArray(incoming.jobPosts)) next.jobPosts = incoming.jobPosts;
    const saved = await saveSettingsObject(admin, MGMT_LISTS_KEY, next);
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    await admin.from("config").upsert({
      id: "1",
      loanApplications: [],
      jobWorkerApplications: [],
      helpHelperApplications: [],
      helpRequests: [],
      helpBusinesses: [],
    });
    return jsonOk({ ok: true });
  }

  const keyByKind: Record<string, string> = {
    gameInvites: GAME_INVITES_KEY,
    storeInquiries: STORE_INQUIRIES_KEY,
    storeOrders: STORE_ORDERS_KEY,
    mediaVirtualProfiles: MEDIA_VIRTUAL_KEY,
    familyPhotoAccess: FAMILY_PHOTO_ACCESS_KEY,
    helpCampaignSpendings: HELP_SPENDINGS_KEY,
  };
  const settingsKey = keyByKind[kind];
  if (!settingsKey) return jsonOk({ error: "Unknown kind" }, 400);

  if (kind === "familyPhotoAccess") {
    const map = (body.byEmail && typeof body.byEmail === "object")
      ? (body.byEmail as Record<string, unknown>)
      : {};
    const current = await loadSettingsObject(admin, FAMILY_PHOTO_ACCESS_KEY);
    const curMap = (current.byEmail && typeof current.byEmail === "object")
      ? { ...(current.byEmail as Record<string, unknown>) }
      : {};
    if (role.isAdmin) {
      const saved = await saveSettingsObject(admin, FAMILY_PHOTO_ACCESS_KEY, { byEmail: map });
      if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    } else {
      // member may only set own key
      if (map[email] != null) curMap[email] = map[email];
      const saved = await saveSettingsObject(admin, FAMILY_PHOTO_ACCESS_KEY, { byEmail: curMap });
      if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    }
    await admin.from("config").upsert({ id: "1", familyTreePhotoAccessUntilByEmail: {} });
    return jsonOk({ ok: true });
  }

  const items = asMemberList(body.items ?? body.list);
  const current = await loadSettingsObject(admin, settingsKey);
  const curItems = asItems(current);
  let nextItems = curItems;
  if (kind === "helpCampaignSpendings") {
    if (!role.isAdmin && !role.isRegistrar) {
      return jsonOk({ error: "Not allowed" }, 403);
    }
    nextItems = items;
  } else if (role.isAdmin) {
    nextItems = items;
  } else {
    const others = curItems.filter((r) => !rowTouchesEmail(r, email));
    const mineIn = items.filter((r) => rowTouchesEmail(r, email));
    const mineCur = curItems.filter((r) => rowTouchesEmail(r, email));
    nextItems = [...others, ...(mineIn.length > 0 ? mineIn : mineCur)];
  }
  const saved = await saveSettingsObject(admin, settingsKey, { items: nextItems });
  if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);

  const wipe: Record<string, unknown> = { id: "1" };
  if (kind === "gameInvites") wipe.gameInvites = [];
  if (kind === "storeInquiries") wipe.storeInquiries = [];
  if (kind === "storeOrders") wipe.storeOrders = [];
  if (kind === "mediaVirtualProfiles") wipe.mediaVirtualProfiles = [];
  if (kind === "helpCampaignSpendings") wipe.helpCampaignSpendings = [];
  await admin.from("config").upsert(wipe);
  return jsonOk({ ok: true, count: nextItems.length });
}

async function handleCivicFetchCitiesRooms(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const wrap = await loadSettingsObject(admin, CIVIC_CITIES_ROOMS_KEY);
  const fullByState = (wrap.civicCitiesByState && typeof wrap.civicCitiesByState === "object")
    ? (wrap.civicCitiesByState as Record<string, unknown>)
    : {};
  const fullCities = Array.isArray(wrap.cities) ? wrap.cities : [];
  const fullRooms = Array.isArray(wrap.rooms) ? wrap.rooms : [];

  if (role.isAdmin || role.isRegistrar) {
    // Geography stays in local backup — never the full map in Network tab.
    return networkFetchOk({
      stateCount: Object.keys(fullByState).length,
      cityCount: fullCities.length,
      roomCount: fullRooms.length,
    });
  }

  // Members: only their enrolled/anchor state slice (no full US map in Network).
  let userState = "";
  try {
    const { data: userRow } = await admin.from("users").select("state").eq("email", email).maybeSingle();
    userState = String(userRow?.state ?? "").trim();
  } catch (_) {
    // ignore
  }
  const sk = canonicalStateKey(userState);
  const slice: Record<string, unknown> = {};
  if (sk) {
    for (const [k, v] of Object.entries(fullByState)) {
      if (canonicalStateKey(k) === sk) slice[k] = v;
    }
  }
  return jsonOk({
    ok: true,
    civicCitiesByState: slice,
    cities: fullCities,
    rooms: fullRooms,
  });
}

/** Guest self-enrollment page — cities/rooms for one state + flag (no roster PII). */
async function handleCivicPublicCatalog(body: Record<string, unknown>): Promise<Response> {
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const citiesWrap = await loadSettingsObject(admin, CIVIC_CITIES_ROOMS_KEY);
  const se = await loadSettingsObject(admin, CIVIC_SELF_ENROLL_SETTINGS_KEY);
  let selfEnroll =
    se.civicSelfEnrollmentEnabled === true ||
    String(se.civicSelfEnrollmentEnabled ?? "").toLowerCase() === "true";
  if (!selfEnroll) {
    try {
      const { data: cfg } = await admin
        .from("config")
        .select("civicSelfEnrollmentEnabled")
        .eq("id", "1")
        .maybeSingle();
      selfEnroll = cfg?.civicSelfEnrollmentEnabled === true;
    } catch (_) {
      // ignore
    }
  }

  const fullByState = (citiesWrap.civicCitiesByState && typeof citiesWrap.civicCitiesByState === "object")
    ? (citiesWrap.civicCitiesByState as Record<string, unknown>)
    : {};
  const fullRooms = Array.isArray(citiesWrap.rooms) ? citiesWrap.rooms : [];
  const wantState = String(body.state ?? "").trim();
  const sk = canonicalStateKey(wantState);
  const linkToken = String(body.linkToken ?? body.t ?? "").trim();
  const linkVersion = Number(body.k ?? body.linkVersion ?? 0) || 0;
  const linkValid = wantState
    ? await validateStateEnrollmentLink(admin, wantState, linkToken, linkVersion)
    : true;

  // Only one state's cities on the wire — never the full US map in Network.
  const slice: Record<string, unknown> = {};
  let citiesForState: unknown[] = [];
  if (sk) {
    for (const [k, v] of Object.entries(fullByState)) {
      if (canonicalStateKey(k) === sk) {
        slice[k] = v;
        if (Array.isArray(v)) citiesForState = v;
      }
    }
  }

  return jsonOk({
    ok: true,
    civicCitiesByState: slice,
    cities: citiesForState,
    rooms: fullRooms,
    civicSelfEnrollmentEnabled: selfEnroll && linkValid,
    enrollmentLinkValid: linkValid,
  });
}

async function handleCivicAdminSettingsFetch(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ error: "Not allowed" }, 403);
  }

  const help = await loadSettingsObject(admin, CIVIC_HELP_MODE_KEY);
  const deleted = await loadSettingsObject(admin, CIVIC_DELETED_CONTRIB_KEY);
  const removed = await loadSettingsObject(admin, CIVIC_RECEIPT_REMOVED_KEY);
  const rawByState = (help.helpModeByState && typeof help.helpModeByState === "object")
    ? (help.helpModeByState as Record<string, unknown>)
    : {};
  const safeByState: Record<string, unknown> = {};
  for (const [state, raw] of Object.entries(rawByState)) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;
    const campaign = raw as Record<string, unknown>;
    safeByState[state] = {
      active: campaign.active === true,
      purpose: String(campaign.purpose ?? ""),
      scopeType: String(campaign.scopeType ?? "all"),
      scopeValue: String(campaign.scopeValue ?? ""),
      campaignId: String(campaign.campaignId ?? ""),
      campaignStartedAt: String(campaign.campaignStartedAt ?? ""),
      updatedAt: String(campaign.updatedAt ?? ""),
    };
  }

  // Return only shared synchronization state. Payment handles, phone numbers,
  // member emails, and unrelated settings never cross this endpoint.
  return jsonOk({
    ok: true,
    view: role.isAdmin ? "admin" : "registrar",
    civicHelpModeSettings: {
      helpModeByState: safeByState,
      helpCampaignClosures: Array.isArray(help.helpCampaignClosures)
        ? help.helpCampaignClosures
        : [],
      savedAt: String(help.savedAt ?? ""),
    },
    civicDeletedContributionIds: Array.isArray(deleted.ids) ? deleted.ids : [],
    civicContributionReceiptRemoved: {
      ids: Array.isArray(removed.ids) ? removed.ids : [],
      updatedAt: String(removed.updatedAt ?? removed.savedAt ?? ""),
    },
  });
}

async function handleCivicAdminSettingsPersist(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  if (!role.isAdmin && !role.isRegistrar) {
    return jsonOk({ error: "Not allowed" }, 403);
  }

  const kind = String(body.kind ?? "").trim();
  if (kind === "civicDeletedContributionIds") {
    const ids = body.ids ?? body.keys ?? [];
    const saved = await saveSettingsObject(admin, CIVIC_DELETED_CONTRIB_KEY, {
      ids: Array.isArray(ids) ? ids : [],
    });
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    return jsonOk({ ok: true });
  }
  if (kind === "civicContributionReceiptRemoved") {
    const payload = (body.payload && typeof body.payload === "object")
      ? (body.payload as Record<string, unknown>)
      : {};
    const saved = await saveSettingsObject(admin, CIVIC_RECEIPT_REMOVED_KEY, payload);
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    return jsonOk({ ok: true });
  }
  if (kind === "civicHelpModeSettings") {
    const payload = (body.payload && typeof body.payload === "object")
      ? (body.payload as Record<string, unknown>)
      : {};
    const cleaned = { ...payload };
    delete cleaned.helpCampaignSpendings;
    const saved = await saveSettingsObject(admin, CIVIC_HELP_MODE_KEY, cleaned);
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    return jsonOk({ ok: true });
  }
  if (kind === "storeSellAccessEmails" && role.isAdmin) {
    const emails = body.emails ?? body.items ?? [];
    const saved = await saveSettingsObject(admin, STORE_SELL_ACCESS_KEY, {
      emails: Array.isArray(emails) ? emails : [],
    });
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    return jsonOk({ ok: true });
  }
  if (kind === "civicCitiesRooms" && (role.isAdmin || role.isRegistrar)) {
    const saved = await saveSettingsObject(admin, CIVIC_CITIES_ROOMS_KEY, {
      civicCitiesByState: body.civicCitiesByState ?? {},
      cities: body.cities ?? [],
      rooms: body.rooms ?? [],
    });
    if (!saved.ok) return jsonOk({ error: saved.error ?? "Save failed" }, 500);
    await admin.from("config").upsert({
      id: "1",
      civicCitiesByState: {},
      cities: [],
      rooms: [],
    });
    return jsonOk({ ok: true });
  }

  return jsonOk({ error: "Unknown kind" }, 400);
}

async function handleTransactionsFetch(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email) return jsonOk({ error: "Authentication required" }, 401);
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);
  const role = await resolveCivicRole(admin, email);
  const pendingWallet = body.pendingWallet === true;
  const rawLimit = Number(body.limit ?? 0);
  const limit = role.isAdmin
    ? (rawLimit > 0 ? Math.max(rawLimit, 1) : 500000)
    : Math.min(Math.max(rawLimit > 0 ? rawLimit : 1000, 1), 10000);

  let query = admin
    .from("transactions")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(limit);

  if (!role.isAdmin) {
    query = query.ilike("userEmail", email);
  } else if (pendingWallet) {
    query = query.eq("status", 0).in("type", [0, 1]);
  }

  const { data, error } = await query;
  if (error) return jsonOk({ error: error.message }, 500);
  const count = ((data ?? []) as unknown[]).length;
  return networkFetchOk({ count, pendingWallet: pendingWallet || undefined });
}

async function handleAdminUsersList(
  req: Request,
  body: Record<string, unknown>,
): Promise<Response> {
  const email = await requireJwtEmail(req);
  if (!email || !isNgmyAdminEmail(email)) {
    return jsonOk({ error: "Admin only" }, 403);
  }
  const admin = adminClient();
  if (!admin) return jsonOk({ error: "Server misconfigured" }, 500);

  const columns =
    "email,username,phone,isAdmin,status,forceLogout,accountBalance,totalProfit," +
    "canSellOnStore,freeTrialActive,freeTrialDailyAmount,profilePicturePath,referredByCode,referralCount," +
    "points,mediaBio,isEnrolledInRegistry,fullName,state,isAuthorizedRegistrar,isApprovedWorker,isApprovedHelper";

  let rows: Record<string, unknown>[] = [];
  try {
    const { data, error } = await admin.from("users").select(columns).order("email");
    if (error) {
      const { data: fallback, error: err2 } = await admin
        .from("users")
        .select("email,username,phone,accountBalance,status,isAdmin")
        .order("email");
      if (err2) return jsonOk({ error: err2.message }, 500);
      rows = (fallback ?? []) as Record<string, unknown>[];
    } else {
      rows = (data ?? []) as Record<string, unknown>[];
    }
  } catch (e) {
    return jsonOk({ error: String(e) }, 500);
  }

  return networkFetchOk({ count: rows.length });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST only" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const wireCode = String(body?.a ?? "").trim();
    const WIRE_TO_ACTION: Record<string, string> = {
      u1: "adminUsersList",
      p1: "privateListsFetch",
      p2: "privateListsPersist",
      t1: "transactionsFetch",
      c1: "civicVerifyStatePin",
      c2: "civicGateMatchName",
      c3: "civicGateVerifyIdentity",
      c4: "civicFetchRoster",
      c5: "civicUpsertMember",
      c6: "civicRemoveMember",
      c7: "civicMarkDeceased",
      c8: "civicPersistRoster",
      c9: "civicGuestEnroll",
      ca: "civicPublicCatalog",
      cb: "civicFetchRegistryPins",
      cc: "civicSaveRegistryPins",
      cd: "civicFetchRegistrarApplications",
      ce: "civicPersistRegistrarApplications",
      cf: "civicFetchCitiesRooms",
      cg: "civicAdminSettingsFetch",
      ch: "civicAdminSettingsPersist",
      ci: "civicFetchEnrollmentLink",
      cj: "civicRegenerateEnrollmentLink",
      ck: "civicNationwideStats",
      a1: "aiKeyConfigured",
      a2: "saveAiApiKey",
      a3: "verifyPasswordLogin",
      a4: "registerAppUser",
      a5: "passwordResetSendOtp",
      a6: "passwordResetVerifyOtp",
      a7: "passwordResetComplete",
      r1: "dbRelay",
      v1: "elevenlabsTts",
      m1: "resendEmail",
      i1: "geminiVirtualOutfit",
      i2: "pollinationsImage",
      z0: "chat",
    };
    const action = WIRE_TO_ACTION[wireCode] ?? String(body?.action ?? "chat").trim();
    // Client-supplied apiKey is ignored for AI calls (security). Admin save/login use explicit fields.
    const clientApiKeyIgnored = String(body?.apiKey ?? "").trim();

    if (action === "passwordResetSendOtp") {
      const email = String(body?.email ?? "").trim().toLowerCase();
      if (!email || !email.includes("@")) {
        return new Response(JSON.stringify({ error: "Invalid email" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return await handlePasswordResetSendOtp(email);
    }

    if (action === "passwordResetVerifyOtp") {
      const email = String(body?.email ?? "").trim().toLowerCase();
      const code = String(body?.code ?? "").trim();
      if (!email || code.length < 6) {
        return new Response(JSON.stringify({ error: "Email and 6-digit code required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return await handlePasswordResetVerifyOtp(email, code);
    }

    if (action === "passwordResetComplete") {
      const jwtEmailForReset = (await requireJwtEmail(req)).toLowerCase().trim();
      const email = (String(body?.email ?? "").trim().toLowerCase()) || jwtEmailForReset;
      const newHash = String(body?.newPasswordHash ?? "").trim();
      const resetToken = String(body?.resetToken ?? "").trim();
      if (!email || !newHash) {
        return new Response(JSON.stringify({ error: "Email and new password required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return await handlePasswordResetComplete(jwtEmailForReset, email, newHash, resetToken);
    }

    if (action === "dbRelay") {
      return await handleDbRelay(req, body ?? {});
    }

    if (action === "saveAiApiKey") {
      const requesterEmail =
        (await requireJwtEmail(req)) ||
        String(body?.requesterEmail ?? "").trim().toLowerCase();
      const apiKey = String(body?.apiKey ?? "").trim();
      return await handleSaveAiApiKey(requesterEmail, apiKey);
    }

    if (action === "aiKeyConfigured") {
      return await handleAiKeyConfigured();
    }

    if (action === "verifyPasswordLogin") {
      const email = String(body?.email ?? "").trim().toLowerCase();
      const passwordHash = String(body?.passwordHash ?? "").trim();
      return await handleVerifyPasswordLogin(email, passwordHash);
    }

    if (action === "registerAppUser") {
      return await handleRegisterAppUser(body as Record<string, unknown>);
    }

    if (action === "civicVerifyStatePin") {
      return await handleCivicVerifyStatePin(req, body as Record<string, unknown>);
    }
    if (action === "civicGateMatchName") {
      return await handleCivicGateMatchName(req, body as Record<string, unknown>);
    }
    if (action === "civicGateVerifyIdentity") {
      return await handleCivicGateVerifyIdentity(req, body as Record<string, unknown>);
    }
    if (action === "civicFetchDirectory" || action === "civicFetchRoster" ||
      action === "civicFetchRegistrarRoster" || action === "civicFetchAdminRoster") {
      return await handleCivicFetchRoster(req, body as Record<string, unknown>);
    }
    if (action === "civicNationwideStats") {
      return await handleCivicNationwideStats(req);
    }
    if (action === "civicUpsertMember") {
      return await handleCivicUpsertMember(req, body as Record<string, unknown>);
    }
    if (action === "civicRemoveMember" ||
      action === "civicMarkDeceased" || action === "civicPersistRoster") {
      return await handleCivicPersistRoster(req, body as Record<string, unknown>);
    }
    if (action === "civicGuestEnroll") {
      return await handleCivicGuestEnroll(body as Record<string, unknown>);
    }
    if (action === "civicPublicCatalog") {
      return await handleCivicPublicCatalog(body as Record<string, unknown>);
    }
    if (action === "civicFetchEnrollmentLink") {
      return await handleCivicFetchEnrollmentLink(req, body as Record<string, unknown>);
    }
    if (action === "civicRegenerateEnrollmentLink") {
      return await handleCivicRegenerateEnrollmentLink(req, body as Record<string, unknown>);
    }
    if (action === "civicFetchRegistryPins") {
      return await handleCivicFetchRegistryPins(req, body as Record<string, unknown>);
    }
    if (action === "civicSaveRegistryPins") {
      return await handleCivicSaveRegistryPins(req, body as Record<string, unknown>);
    }
    if (action === "civicFetchRegistrarApplications") {
      return await handleCivicFetchRegistrarApplications(req, body as Record<string, unknown>);
    }
    if (action === "civicPersistRegistrarApplications") {
      return await handleCivicPersistRegistrarApplications(req, body as Record<string, unknown>);
    }
    if (action === "privateListsFetch") {
      return await handlePrivateListsFetch(req, body as Record<string, unknown>);
    }
    if (action === "privateListsPersist") {
      return await handlePrivateListsPersist(req, body as Record<string, unknown>);
    }
    if (action === "adminUsersList") {
      return await handleAdminUsersList(req, body as Record<string, unknown>);
    }
    if (action === "transactionsFetch") {
      return await handleTransactionsFetch(req, body as Record<string, unknown>);
    }
    if (action === "civicFetchCitiesRooms") {
      return await handleCivicFetchCitiesRooms(req, body as Record<string, unknown>);
    }
    if (action === "civicAdminSettingsFetch") {
      return await handleCivicAdminSettingsFetch(req, body as Record<string, unknown>);
    }
    if (action === "civicAdminSettingsPersist") {
      return await handleCivicAdminSettingsPersist(req, body as Record<string, unknown>);
    }

    if (action === "elevenlabsTts") {
      const text = String(body?.text ?? "").trim();
      const voiceId = String(body?.voiceId ?? "21m00Tcm4TlvDq8ikWAM").trim();
      const modelId = String(body?.modelId ?? "eleven_turbo_v2_5").trim();
      const apiKey = (await resolveServerElevenLabsKey()) || clientApiKeyIgnored;
      if (!apiKey || !text) {
        return new Response(
          JSON.stringify({ error: "Voice API key not configured on server, and text is required" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const audioBase64 = await elevenLabsTts(apiKey, text, voiceId, modelId);
      return new Response(JSON.stringify({ audioBase64 }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "resendEmail") {
      const requesterEmail =
        (await requireJwtEmail(req)) ||
        String(body?.requesterEmail ?? "").trim().toLowerCase();
      if (!requesterEmail || !NGMY_ADMIN_EMAILS.has(requesterEmail)) {
        return new Response(JSON.stringify({ error: "Admin access required for email send" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const resendKey = String(Deno.env.get("RESEND_API_KEY") ?? clientApiKeyIgnored ?? "").trim();
      const to = String(body?.to ?? "").trim();
      const subject = String(body?.subject ?? "Message from NGMY").trim();
      const html = String(body?.html ?? body?.body ?? "").trim();
      const from = String(
        body?.from ?? Deno.env.get("RESEND_FROM_EMAIL") ?? "NGMY <noreply@ngmy.org>",
      ).trim();
      if (!resendKey || !to || !html) {
        return new Response(
          JSON.stringify({ error: "Resend API key (server secret), to, and html/body are required" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const sent = await resendSendEmail(resendKey, from, to, subject, html);
      return new Response(JSON.stringify({ ok: true, id: sent.id ?? null }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "geminiVirtualOutfit") {
      const outfitPrompt = String(body?.prompt ?? "").trim();
      const images: GeminiImagePart[] = Array.isArray(body?.images)
        ? body.images
        : [];
      const personOnly = Boolean(body?.personOnly);
      const apiKey = await resolveServerAiApiKey();
      if (!apiKey || !outfitPrompt || images.length < 1) {
        return new Response(
          JSON.stringify({
            error: "Server AI key, prompt, and at least one image (person) are required",
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const imageBase64 = await geminiVirtualOutfit(
        apiKey,
        outfitPrompt,
        images,
        personOnly,
      );
      return new Response(JSON.stringify({ imageBase64 }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Partner chat selfies — fetch image server-side so phone browsers skip CORS.
    if (action === "pollinationsImage") {
      const imgPrompt = String(body?.prompt ?? "").trim();
      const allowAdult = Boolean(body?.allowAdult);
      if (!imgPrompt) {
        return new Response(JSON.stringify({ error: "prompt is required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const clipped = imgPrompt.length > 480 ? `${imgPrompt.slice(0, 477)}...` : imgPrompt;
      const seed = Date.now();
      const url =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(clipped)}` +
        `?width=768&height=768&nologo=true&enhance=true&seed=${seed}` +
        (allowAdult ? `&safe=false` : "");
      const imgRes = await fetch(url);
      if (!imgRes.ok) {
        return new Response(
          JSON.stringify({ error: `Image service HTTP ${imgRes.status}` }),
          {
            status: 502,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const buf = new Uint8Array(await imgRes.arrayBuffer());
      if (buf.length < 2048) {
        return new Response(JSON.stringify({ error: "Image service returned empty body" }), {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ imageBase64: bytesToBase64(buf) }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const prompt = String(body?.prompt ?? "").trim();
    const provider = String(body?.provider ?? "gemini") as Provider;
    const openAiBaseUrl = body?.openAiBaseUrl
      ? String(body.openAiBaseUrl).trim()
      : undefined;
    const images: GeminiImagePart[] = Array.isArray(body?.images)
      ? body.images
      : [];
    // App Builder sends a full multi-screen app as JSON, which needs a much
    // bigger output budget (and a stronger model) than a short chat reply.
    const appBuilder = String(body?.mode ?? "") === "appBuilder";

    const apiKey = await resolveServerAiApiKey();
    if (!apiKey || !prompt) {
      return new Response(
        JSON.stringify({
          error: !apiKey
            ? "AI API key is not configured on the server. Admin: set NGMY_AI_API_KEY secret or Save AI Settings."
            : "prompt is required",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    let text = "";
    switch (provider) {
      case "openai":
        text = await openAiChat(apiKey, prompt, "https://api.openai.com/v1", appBuilder);
        break;
      case "anthropic":
        text = await anthropicChat(apiKey, prompt, appBuilder);
        break;
      case "openaiCompatible":
        text = await openAiChat(
          apiKey,
          prompt,
          openAiBaseUrl ?? "https://api.openai.com/v1",
          appBuilder,
        );
        break;
      case "gemini":
      default:
        text = await geminiChat(apiKey, prompt, images, appBuilder);
        break;
    }

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
