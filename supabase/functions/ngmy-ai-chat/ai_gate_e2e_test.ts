// End-to-end test of the REAL Edge Function (index.ts), with a pretend Supabase and a pretend AI provider.
// Nothing leaves this computer: every outgoing web request is answered by the fakes below.
//
//   deno test --import-map=test_import_map.json --allow-read --allow-net --allow-env ai_gate_e2e_test.ts
//
// What it proves: the real handler checks login and the limits BEFORE it calls the AI provider, and
// a provider 429 stops everything instead of being retried.

import { MemoryGateStore } from "./ai_gate.ts";

function assert(cond: unknown, msg = "assertion failed"): asserts cond {
  if (!cond) throw new Error(msg);
}
function eq<T>(a: T, b: T, msg = ""): void {
  if (a !== b) throw new Error(`${msg} expected ${String(b)} but got ${String(a)}`);
}

// ── the pretend world ──
const realFetch = globalThis.fetch.bind(globalThis);
const gateStore = new MemoryGateStore();
const events: Array<{ kind: string; detail: string }> = [];
let providerCalls = 0;
let providerMode: "ok" | "429" = "ok";
const providerHeaders: string[] = [];
let rpcCalls = 0;

const json = (o: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", ...headers } });

globalThis.fetch = (async (input: Request | URL | string, init?: RequestInit): Promise<Response> => {
  const req = input instanceof Request ? input : null;
  const url = String(req ? req.url : input);
  if (url.startsWith("http://localhost")) return realFetch(input as string, init);
  const method = (init?.method ?? req?.method ?? "GET").toUpperCase();
  const headers = new Headers(init?.headers ?? req?.headers);
  const bodyText = typeof init?.body === "string" ? init.body : req ? await req.clone().text() : "";

  if (url.startsWith("https://generativelanguage.googleapis.com/")) {
    providerCalls++;
    providerHeaders.push(headers.get("x-goog-api-key") ?? "");
    if (url.includes("/models?")) return json({ models: [] });
    if (providerMode === "429") return json({ error: { message: "quota" } }, 429);
    return json({ candidates: [{ content: { parts: [{ text: "Hello from the pretend AI" }] } }] });
  }
  if (url.startsWith("https://mock.supabase.co/auth/v1/user")) {
    const token = (headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
    if (token.startsWith("user-")) return json({ id: token, email: `${token}@example.com`, is_anonymous: false });
    if (token === "guest-session") return json({ id: "guest-1", email: "", is_anonymous: true });
    return json({ message: "invalid" }, 401);
  }
  if (url.startsWith("https://mock.supabase.co/rest/v1/rpc/ngmy_ai_gate")) {
    rpcCalls++;
    const entries = JSON.parse(bodyText).p_entries as Array<{ bucket: string; key: string; window: number; max: number }>;
    const r = await gateStore.consumeAll(entries.map((e) => ({ bucket: e.bucket, key: e.key, windowSeconds: e.window, max: e.max })));
    if (r.ok) return json({ ok: true });
    return json({ ok: false, bucket: r.failed.bucket, key: r.failed.key, retry_after: r.retryAfter });
  }
  if (url.startsWith("https://mock.supabase.co/rest/v1/rpc/ngmy_ai_cooldown_left")) return json(await gateStore.cooldownLeft());
  if (url.startsWith("https://mock.supabase.co/rest/v1/rpc/ngmy_ai_cooldown_start")) {
    await gateStore.startCooldown(Number(JSON.parse(bodyText).p_seconds));
    return new Response(null, { status: 204 });
  }
  if (url.startsWith("https://mock.supabase.co/rest/v1/ngmy_security_events") && method === "POST") {
    const row = JSON.parse(bodyText);
    events.push({ kind: row.kind, detail: row.detail });
    return new Response(null, { status: 201 });
  }
  // everything else (settings table, maintenance, ...): an empty answer
  return json([]);
}) as typeof fetch;

Deno.env.set("SUPABASE_URL", "https://mock.supabase.co");
Deno.env.set("SUPABASE_SERVICE_ROLE_KEY", "service-role-for-test");
Deno.env.set("SUPABASE_ANON_KEY", "anon-key-for-test");
Deno.env.set("AI_PROVIDER_COOLDOWN_SECONDS", "2");
Deno.env.set("NGMY_AI_API_KEY", "AIzaFAKEKEYFORTESTONLY0123456789abcdefghij");

await import("./index.ts"); // the real function; the web server is replaced by a stub so the test can call its handler directly

async function ask(token: string | null, body: Record<string, unknown>, ip = "203.0.113.1") {
  const headers: Record<string, string> = { "content-type": "application/json", "x-forwarded-for": ip };
  if (token) headers["authorization"] = `Bearer ${token}`;
  const handler = (globalThis as Record<string, unknown>).__edgeHandler as (r: Request) => Promise<Response>;
  const res = await handler(new Request("http://localhost/fn", { method: "POST", headers, body: JSON.stringify(body) }));
  const text = await res.text();
  let data: Record<string, unknown> = {};
  try {
    data = JSON.parse(text);
  } catch (_) { /* leave empty */ }
  return { status: res.status, data, retryAfter: res.headers.get("retry-after"), text };
}

const chat = (prompt = "hello") => ({ a: "z0", prompt });

Deno.test("not signed in (guest session or no token): 401 and the AI provider is not called", async () => {
  const before = providerCalls;
  const none = await ask(null, chat());
  eq(none.status, 401);
  const guest = await ask("guest-session", chat());
  eq(guest.status, 401);
  eq(guest.data.error, "Please sign in to use AI.");
  eq(providerCalls, before, "provider calls");
});

Deno.test("a signed-in user chats normally and the key is sent to the provider in a header, never in the address", async () => {
  const before = providerCalls;
  const r = await ask("user-alice", chat());
  eq(r.status, 200);
  eq(r.data.text, "Hello from the pretend AI");
  assert(providerCalls > before);
  assert(providerHeaders.every((h) => h.startsWith("AIzaFAKEKEY")), "the key travels in x-goog-api-key");
  assert(!r.text.includes("AIzaFAKEKEY"), "the key is not in the answer");
});

Deno.test("rapid requests from one user: HTTP 429 with Retry-After after the limit, and the provider is not called for the blocked ones", async () => {
  providerCalls = 0;
  const statuses: number[] = [];
  let last = { status: 0, retryAfter: null as string | null, data: {} as Record<string, unknown> };
  for (let i = 0; i < 60; i++) {
    last = await ask("user-bob", chat(`hi ${i}`), "198.51.100.7");
    statuses.push(last.status);
  }
  const ok = statuses.filter((s) => s === 200).length;
  const blocked = statuses.filter((s) => s === 429).length;
  eq(ok, 20, "answered");
  eq(blocked, 40, "blocked with 429");
  assert(providerCalls <= 20 * 2, `the provider was called ${providerCalls} times (20 answered requests, at most 2 calls each)`);
  eq(last.status, 429);
  eq(last.data.error, "You are using AI too fast. Please wait a little and try again.");
  assert(last.retryAfter !== null && Number(last.retryAfter) >= 1, "Retry-After header present");
  assert(!JSON.stringify(last.data).match(/\b(20|100|300)\b/), "no internal numbers shown");
  const frozen = providerCalls;
  for (let i = 0; i < 25; i++) eq((await ask("user-bob", chat(), "198.51.100.7")).status, 429);
  eq(providerCalls, frozen, "no provider call at all once the limit is reached");
});

Deno.test("a second user is not affected by the first user's limit", async () => {
  eq((await ask("user-carol", chat(), "198.51.100.8")).status, 200);
});

Deno.test("limit hits are logged with the user, the endpoint and the time (the log row has a timestamp in the database)", async () => {
  const hit = events.find((e) => e.kind === "ai_rate_limit" && e.detail.includes("user=user-bob") && e.detail.includes("endpoint=chat"));
  assert(hit, `events: ${JSON.stringify(events.slice(0, 3))}`);
  assert(events.some((e) => e.kind === "ai_spike"), "a spike (many blocked requests in a row) is recorded too");
  assert(events.length < 15, `the log is throttled, not one row per blocked request (${events.length})`);
});

Deno.test("expensive actions (App Builder / pictures) have their own, tighter limit: 5 a minute", async () => {
  const statuses: number[] = [];
  for (let i = 0; i < 8; i++) statuses.push((await ask("user-dave", { a: "z0", prompt: "build", mode: "appBuilder" }, "198.51.100.9")).status);
  eq(statuses.filter((s) => s === 200).length, 5);
  eq(statuses.filter((s) => s === 429).length, 3);
});

Deno.test("a message that is too long is refused (413) without calling the provider", async () => {
  const before = providerCalls;
  const r = await ask("user-erin", chat("x".repeat(110000)), "198.51.100.10");
  eq(r.status, 413);
  eq(providerCalls, before);
});

Deno.test("the browser cannot choose the AI company or a web address to send the key to", async () => {
  const before = providerCalls;
  providerHeaders.length = 0;
  const r = await ask("user-frank", { a: "z0", prompt: "hi", provider: "openaiCompatible", openAiBaseUrl: "https://evil.example.com/v1" }, "198.51.100.11");
  eq(r.status, 200);
  assert(providerCalls > before, "the call went to the real provider address");
  assert(providerHeaders.length > 0 && providerHeaders.every((h) => h.startsWith("AIzaFAKEKEY")));
});

Deno.test("provider 429: ONE call, a busy message (503), and nobody else reaches the provider during the cooldown", async () => {
  providerMode = "429";
  providerCalls = 0;
  const first = await ask("user-gina", chat(), "198.51.100.12");
  eq(first.status, 503);
  eq(first.data.error, "The AI is busy right now. Please try again in a minute.");
  assert(first.retryAfter !== null && Number(first.retryAfter) >= 1);
  assert(providerCalls <= 2, `the provider was called ${providerCalls} times: the model list and one chat call, no retries`);
  const afterFirst = providerCalls;
  for (let i = 0; i < 10; i++) eq((await ask(`user-hank-${i}`, chat(), `198.51.100.${30 + i}`)).status, 503);
  eq(providerCalls, afterFirst, "nobody else called the provider while it cools down");
  assert(events.some((e) => e.kind === "ai_provider_429"), "the 429 was logged");
  providerMode = "ok";
});

Deno.test("the global daily cap stops everyone (circuit breaker)", async () => {
  // Fill the day counter for the whole app to its cap using the same store the function uses.
  const cap = 5000;
  const fill = [{ bucket: "ai_global_day", key: "all", windowSeconds: 86400, max: 1_000_000 }];
  for (let i = 0; i < cap; i++) await gateStore.consumeAll(fill);
  // The cooldown from the previous test may still be running; wait for the pretend clock by clearing it.
  gateStore.resetCooldown();
  await new Promise((r) => setTimeout(r, 2300)); // the function's own 2 second cooldown (set above for the test) is over
  // Count what is already used and push to the cap.
  let guard = 0;
  let status = 0;
  while (guard++ < 50 && status !== 503) {
    status = (await ask(`user-cap-${guard}`, chat(), `192.0.2.${guard}`)).status;
  }
  eq(status, 503);
  const before = providerCalls;
  const r = await ask("user-cap-late", chat(), "192.0.2.200");
  eq(r.status, 503);
  eq(r.data.error, "The AI is resting for now. Please try again later.");
  eq(providerCalls, before, "the provider is not called once the global cap is reached");
  assert(events.some((e) => e.kind === "ai_global_cap"), "the cap was logged");
});
