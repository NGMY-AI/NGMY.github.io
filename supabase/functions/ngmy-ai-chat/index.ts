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

  await admin.from("ngmy_password_reset_otp").delete().eq("email", email);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
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
    const action = String(body?.action ?? "chat").trim();
    const apiKey = String(body?.apiKey ?? "").trim();

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

    if (action === "elevenlabsTts") {
      const text = String(body?.text ?? "").trim();
      const voiceId = String(body?.voiceId ?? "21m00Tcm4TlvDq8ikWAM").trim();
      const modelId = String(body?.modelId ?? "eleven_turbo_v2_5").trim();
      if (!apiKey || !text) {
        return new Response(
          JSON.stringify({ error: "apiKey and text are required for TTS" }),
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
      const requesterEmail = String(body?.requesterEmail ?? "").trim().toLowerCase();
      if (!requesterEmail || !NGMY_ADMIN_EMAILS.has(requesterEmail)) {
        return new Response(JSON.stringify({ error: "Admin access required for email send" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const resendKey = String(body?.apiKey ?? Deno.env.get("RESEND_API_KEY") ?? "").trim();
      const to = String(body?.to ?? "").trim();
      const subject = String(body?.subject ?? "Message from NGMY").trim();
      const html = String(body?.html ?? body?.body ?? "").trim();
      const from = String(
        body?.from ?? Deno.env.get("RESEND_FROM_EMAIL") ?? "NGMY <noreply@ngmy.org>",
      ).trim();
      if (!resendKey || !to || !html) {
        return new Response(
          JSON.stringify({ error: "apiKey, to, and html/body are required for resendEmail" }),
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
      if (!apiKey || !outfitPrompt || images.length < 1) {
        return new Response(
          JSON.stringify({
            error: "apiKey, prompt, and at least one image (person) are required",
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

    if (!apiKey || !prompt) {
      return new Response(
        JSON.stringify({ error: "apiKey and prompt are required" }),
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
