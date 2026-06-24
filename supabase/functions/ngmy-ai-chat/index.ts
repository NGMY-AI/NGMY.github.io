// NGMY AI proxy — run on Supabase so phone/web PWA avoids browser CORS blocks.
// Deploy: supabase functions deploy ngmy-ai-chat --project-ref gvufllqqxjnpicmkxzcg
// Or link project in Supabase Dashboard → Edge Functions.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

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
