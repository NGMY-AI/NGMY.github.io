// Tests for the NGMY AI gate. Run from this folder:
//   deno test --allow-read ai_gate_test.ts
//
// A fake AI provider counts every call it receives, so each test can prove that a blocked request
// never reached the provider.

import {
  buildLimits,
  checkAiInput,
  classifyAiRequest,
  DEFAULT_LIMITS,
  gateAiRequest,
  MemoryGateStore,
  MSG_BUSY,
  MSG_LOGIN,
  MSG_TOO_FAST,
  ProviderBusyError,
  providerFetch,
  ProviderStopError,
  scrubSecrets,
} from "./ai_gate.ts";
import type { AiClass, GateLimits, Who } from "./ai_gate.ts";

function assert(cond: unknown, msg = "assertion failed"): asserts cond {
  if (!cond) throw new Error(msg);
}
function eq<T>(a: T, b: T, msg = ""): void {
  if (a !== b) throw new Error(`${msg} expected ${String(b)} but got ${String(a)}`);
}

/** The whole path of one AI request, the same order as the Edge Function: gate first, provider second. */
class FakeApp {
  providerCalls = 0;
  constructor(
    public store: MemoryGateStore,
    public limits: GateLimits,
    private providerStatus = 200,
  ) {}

  setProviderStatus(s: number) {
    this.providerStatus = s;
  }

  async request(who: Who, cls: AiClass = "normal", endpoint = "chat"): Promise<{ status: number; message?: string; retryAfter?: number }> {
    const d = await gateAiRequest(this.store, this.limits, who, endpoint, cls);
    if (!d.ok) return { status: d.status, message: d.message, retryAfter: d.retryAfter };
    const fakeFetch = (async () => {
      this.providerCalls++;
      return new Response(JSON.stringify({ ok: true }), { status: this.providerStatus, headers: this.providerStatus === 429 ? { "retry-after": "30" } : {} });
    }) as unknown as typeof fetch;
    try {
      await providerFetch(fakeFetch, "https://provider.test/v1/chat", { method: "POST" }, 5000);
      return { status: 200 };
    } catch (e) {
      if (e instanceof ProviderBusyError) {
        await this.store.startCooldown(this.limits.providerCooldownSeconds);
        return { status: 503, message: MSG_BUSY, retryAfter: e.retryAfter };
      }
      if (e instanceof ProviderStopError) return { status: 502 };
      throw e;
    }
  }
}

const userA: Who = { userId: "user-a", ip: "1.1.1.1" };
const userB: Who = { userId: "user-b", ip: "2.2.2.2" };

function app(overrides: Partial<GateLimits> = {}, clock?: () => number) {
  const limits: GateLimits = { ...JSON.parse(JSON.stringify(DEFAULT_LIMITS)), ...overrides };
  return new FakeApp(new MemoryGateStore(clock), limits);
}

Deno.test("the same user gets 429 after the minute limit, with a friendly message and a Retry-After", async () => {
  const a = app();
  for (let i = 0; i < 20; i++) eq((await a.request(userA)).status, 200, `request ${i + 1}`);
  const blocked = await a.request(userA);
  eq(blocked.status, 429);
  eq(blocked.message, MSG_TOO_FAST);
  eq(blocked.message, "You are using AI too fast. Please wait a little and try again.");
  assert((blocked.retryAfter ?? 0) >= 1 && (blocked.retryAfter ?? 0) <= 60, "Retry-After is within the minute");
  assert(!/20|100|300/.test(blocked.message ?? ""), "the message does not show the internal numbers");
});

Deno.test("rapid fire: 100 requests from one user reach the provider only 20 times", async () => {
  const a = app();
  const results = [];
  for (let i = 0; i < 100; i++) results.push((await a.request(userA)).status);
  eq(a.providerCalls, 20, "provider calls");
  eq(results.filter((s) => s === 200).length, 20);
  eq(results.filter((s) => s === 429).length, 80);
});

Deno.test("after the limit is reached the AI provider is NOT called at all", async () => {
  const a = app();
  for (let i = 0; i < 20; i++) await a.request(userA);
  const before = a.providerCalls;
  for (let i = 0; i < 50; i++) eq((await a.request(userA)).status, 429);
  eq(a.providerCalls, before, "no new provider calls once blocked");
});

Deno.test("different users have independent limits", async () => {
  const a = app();
  for (let i = 0; i < 20; i++) await a.request(userA);
  eq((await a.request(userA)).status, 429);
  eq((await a.request(userB)).status, 200, "user B is not affected by user A");
  for (let i = 0; i < 19; i++) eq((await a.request(userB)).status, 200);
  eq((await a.request(userB)).status, 429);
});

Deno.test("the hour and day limits count too", async () => {
  let t = Date.UTC(2026, 0, 1, 0, 0, 0);
  const a = app({}, () => t);
  let ok = 0;
  // 5 requests a minute is under the minute limit, so only the hour limit (100) can stop this.
  for (let minute = 0; minute < 40; minute++) {
    for (let i = 0; i < 5; i++) {
      if ((await a.request(userA)).status === 200) ok++;
    }
    t += 60_000;
  }
  eq(ok, 100, "100 an hour");
  const blocked = await a.request(userA);
  eq(blocked.status, 429);
  assert((blocked.retryAfter ?? 0) > 60, "an hour limit says wait longer than a minute");
  // After the hour passes, the user can use AI again.
  t += 3_600_000;
  eq((await a.request(userA)).status, 200);
});

Deno.test("day limit: 300 a day for normal, then blocked until tomorrow", async () => {
  let t = Date.UTC(2026, 0, 1, 0, 0, 0);
  const a = app({ normal: { perMinute: 1000, perHour: 1000, perDay: 300 } }, () => t);
  let ok = 0;
  for (let i = 0; i < 400; i++) {
    if ((await a.request(userA)).status === 200) ok++;
    t += 1000;
  }
  eq(ok, 300);
  t = Date.UTC(2026, 0, 2, 0, 0, 5);
  eq((await a.request(userA)).status, 200, "a new day starts fresh");
});

Deno.test("expensive actions: 5 a minute, 20 an hour, 50 a day", async () => {
  const a = app();
  for (let i = 0; i < 5; i++) eq((await a.request(userA, "expensive", "jobApplication")).status, 200);
  const blocked = await a.request(userA, "expensive", "jobApplication");
  eq(blocked.status, 429);
  eq(blocked.message, MSG_TOO_FAST);
  // Normal chat has its own counters.
  eq((await a.request(userA, "normal")).status, 200);
  eq(a.providerCalls, 6);
});

Deno.test("expensive hour limit and day limit", async () => {
  let t = Date.UTC(2026, 0, 1, 0, 0, 0);
  const a = app({}, () => t);
  let ok = 0;
  for (let i = 0; i < 300; i++) {
    if ((await a.request(userA, "expensive")).status === 200) ok++;
    t += 61_000;
  }
  // 61 seconds apart: the minute limit never matters; the hour limit lets 20 through each hour; the day limit stops it at 50.
  eq(ok, 50, "50 a day");
});

Deno.test("not signed in: AI is closed by default (401) and the provider is never called", async () => {
  const a = app();
  const r = await a.request({ userId: null, ip: "9.9.9.9" });
  eq(r.status, 401);
  eq(r.message, MSG_LOGIN);
  eq(a.providerCalls, 0);
});

Deno.test("IP fallback: if anonymous AI is switched on, 5 requests a minute per IP, then 429", async () => {
  const a = app({ allowAnon: true });
  const anon1: Who = { userId: null, ip: "5.5.5.5" };
  for (let i = 0; i < 5; i++) eq((await a.request(anon1)).status, 200);
  eq((await a.request(anon1)).status, 429, "6th from the same IP");
  eq((await a.request({ userId: null, ip: "6.6.6.6" })).status, 200, "another IP is independent");
  eq(a.providerCalls, 6);
});

Deno.test("IP limit also stops many accounts coming from one address", async () => {
  const a = app({ ipPerMinute: 30 });
  let ok = 0;
  for (let u = 0; u < 10; u++) {
    for (let i = 0; i < 10; i++) {
      if ((await a.request({ userId: `farm-${u}`, ip: "7.7.7.7" })).status === 200) ok++;
    }
  }
  eq(ok, 30, "30 for the address, however many accounts");
  eq((await a.request({ userId: "honest", ip: "8.8.8.8" })).status, 200);
});

Deno.test("global daily cap (circuit breaker): everybody is stopped, and a blocked request uses no personal quota", async () => {
  const a = app({ globalPerDay: 10 });
  for (let i = 0; i < 10; i++) eq((await a.request({ userId: `u${i}`, ip: `10.0.0.${i}` })).status, 200);
  const r = await a.request({ userId: "late", ip: "10.9.9.9" });
  eq(r.status, 503);
  assert((r.retryAfter ?? 0) >= 1);
  eq(a.providerCalls, 10, "the provider was called exactly the cap number of times");
  // The blocked request did not use up the late user's minute quota: raise the cap and they still have all 20.
  a.limits.globalPerDay = 1000;
  for (let i = 0; i < 20; i++) eq((await a.request({ userId: "late", ip: "10.9.9.9" })).status, 200, `late ${i + 1}`);
  eq((await a.request({ userId: "late", ip: "10.9.9.9" })).status, 429);
});

Deno.test("provider 429: the app stops after ONE call, shows a busy message and pauses the provider", async () => {
  const a = app();
  a.setProviderStatus(429);
  const first = await a.request(userA);
  eq(first.status, 503);
  eq(first.message, MSG_BUSY);
  eq(a.providerCalls, 1, "exactly one call, no retry loop");
  // Everybody is held back while the provider cools down, so nobody makes it worse.
  for (let i = 0; i < 25; i++) eq((await a.request({ userId: `x${i}`, ip: "3.3.3.3" })).status, 503);
  eq(a.providerCalls, 1, "still one call: nobody else reached the provider");
});

Deno.test("provider 429 cooldown ends and normal service returns", async () => {
  let t = Date.UTC(2026, 0, 1, 0, 0, 0);
  const a = app({}, () => t);
  a.setProviderStatus(429);
  await a.request(userA);
  a.setProviderStatus(200);
  eq((await a.request(userB)).status, 503, "during the cooldown");
  t += 61_000;
  eq((await a.request(userB)).status, 200, "after the cooldown");
});

Deno.test("a rejected key (401/403) stops at once and is not retried", async () => {
  let calls = 0;
  const f = (async () => {
    calls++;
    return new Response("no", { status: 403 });
  }) as unknown as typeof fetch;
  let stopped = false;
  try {
    await providerFetch(f, "https://provider.test", {}, 1000);
  } catch (e) {
    stopped = e instanceof ProviderStopError;
  }
  assert(stopped);
  eq(calls, 1);
});

Deno.test("the provider call has a timeout", async () => {
  const slow = ((_url: string, init: RequestInit) =>
    new Promise((_res, rej) => {
      init.signal?.addEventListener("abort", () => rej(new Error("aborted")));
    })) as unknown as typeof fetch;
  const started = Date.now();
  let failed = false;
  try {
    await providerFetch(slow, "https://provider.test", {}, 50);
  } catch (_) {
    failed = true;
  }
  assert(failed, "a hung provider call ends");
  assert(Date.now() - started < 2000, "and quickly");
});

Deno.test("limits can be changed with environment variables or the admin table; bad values are ignored", () => {
  const env = (n: string) => ({ AI_LIMIT_NORMAL_PER_MIN: "40", AI_LIMIT_EXPENSIVE_PER_DAY: "7", AI_ALLOW_ANON: "true", AI_GLOBAL_PER_DAY: "banana" } as Record<string, string>)[n];
  const l = buildLimits(env);
  eq(l.normal.perMinute, 40);
  eq(l.expensive.perDay, 7);
  eq(l.allowAnon, true);
  eq(l.globalPerDay, DEFAULT_LIMITS.globalPerDay, "a typo never switches the limit off");
  const l2 = buildLimits(env, { AI_LIMIT_NORMAL_PER_MIN: "25", AI_GLOBAL_PER_DAY: "0" });
  eq(l2.normal.perMinute, 25, "the admin table wins over the environment");
  eq(l2.globalPerDay, DEFAULT_LIMITS.globalPerDay, "zero is ignored");
  // The starting limits are the ones that were asked for.
  eq(DEFAULT_LIMITS.normal.perMinute, 20);
  eq(DEFAULT_LIMITS.normal.perHour, 100);
  eq(DEFAULT_LIMITS.normal.perDay, 300);
  eq(DEFAULT_LIMITS.expensive.perMinute, 5);
  eq(DEFAULT_LIMITS.expensive.perHour, 20);
  eq(DEFAULT_LIMITS.expensive.perDay, 50);
  eq(DEFAULT_LIMITS.allowAnon, false);
  eq(DEFAULT_LIMITS.anonPerMinute, 5);
});

Deno.test("input limits and the kind of request are decided on the server", () => {
  const l = DEFAULT_LIMITS;
  eq(checkAiInput(l, { prompt: "hello" }, "normal"), null);
  assert(checkAiInput(l, { prompt: "x".repeat(l.maxPromptChars + 1) }, "normal") !== null, "too long for chat");
  eq(checkAiInput(l, { prompt: "x".repeat(l.maxPromptChars + 1) }, "expensive"), null, "expensive actions may be longer");
  assert(checkAiInput(l, { prompt: "x".repeat(l.maxPromptCharsExpensive + 1) }, "expensive") !== null);
  assert(checkAiInput(l, { prompt: "hi", images: new Array(l.maxImages + 1).fill({ data: "a" }) }, "expensive") !== null, "too many pictures");
  assert(checkAiInput(l, { prompt: "hi", images: [{ data: "a".repeat(l.maxImageChars + 1) }] }, "expensive") !== null, "pictures too big");
  eq(classifyAiRequest({ prompt: "hi" }), "normal");
  eq(classifyAiRequest({ prompt: "hi", mode: "appBuilder" }), "expensive");
  eq(classifyAiRequest({ prompt: "hi", kind: "jobApplication" }), "expensive");
  eq(classifyAiRequest({ prompt: "hi", images: [{ data: "a" }] }), "expensive");
  eq(classifyAiRequest({ prompt: "x".repeat(9000) }), "normal", "a long message does not become cheaper by being long: it is simply limited");
  eq(classifyAiRequest({ prompt: "hi", kind: "news" }), "expensive");
});

Deno.test("keys are scrubbed out of anything that goes to the browser or the logs", () => {
  const s = scrubSecrets("error sending request for url (https://generativelanguage.googleapis.com/v1beta/models/x:generateContent?key=AIzaSyA1234567890abcdefghijklmnopqrstuv&alt=json)");
  assert(!s.includes("AIza"), s);
  assert(!s.includes("key=AIza"), s);
  assert(!scrubSecrets("Bearer abcdefghijklmnop1234567890").includes("abcdefghijklmnop1234567890"));
  assert(!scrubSecrets("sk-abcdefghijklmnopqrstuvwxyz123456").includes("sk-abcdefghijklmnopqrstuvwxyz"));
});

// ── The API key must never be in what the browser downloads ──────────────────────────────────

async function* walk(dir: string): AsyncGenerator<string> {
  for await (const e of Deno.readDir(dir)) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory) {
      if (e.name === "node_modules" || e.name === ".git" || e.name === ".dart_tool" || e.name === "canvaskit") continue;
      yield* walk(p);
    } else {
      yield p;
    }
  }
}

const KEY_PATTERNS = [/AIza[0-9A-Za-z_-]{30,}/, /sk-ant-[0-9A-Za-z_-]{20,}/, /sk-(proj-)?[0-9A-Za-z]{30,}/, /xi-api-key["']?\s*[:=]\s*["'][0-9a-f]{32}/i];

Deno.test("no AI key appears in the app's code or in the built web app (docs/ and build/web)", async () => {
  const root = new URL("../../../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
  const hits: string[] = [];
  let scanned = 0;
  for (const folder of ["lib", "web", "docs", "build/web"]) {
    let exists = true;
    try {
      await Deno.stat(`${root}${folder}`);
    } catch (_) {
      exists = false;
    }
    if (!exists) continue;
    for await (const file of walk(`${root}${folder}`)) {
      if (!/\.(dart|js|html|json|map|txt)$/i.test(file)) continue;
      const text = await Deno.readTextFile(file);
      scanned++;
      for (const re of KEY_PATTERNS) {
        const m = text.match(re);
        if (m) hits.push(`${file}: ${m[0].slice(0, 8)}...`);
      }
    }
  }
  assert(scanned > 50, `scanned only ${scanned} files`);
  eq(hits.length, 0, `a key-like string was found: ${hits.slice(0, 3).join(" | ")}`);
});

Deno.test("the app code never calls an AI provider address directly (everything goes through the server)", async () => {
  const root = new URL("../../../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
  const bad = /generativelanguage\.googleapis\.com|api\.openai\.com|api\.anthropic\.com|api\.elevenlabs\.io/;
  const hits: string[] = [];
  for await (const file of walk(`${root}lib`)) {
    if (!file.endsWith(".dart")) continue;
    const text = await Deno.readTextFile(file);
    const m = text.match(bad);
    if (m) hits.push(`${file.split("/lib/")[1]}: ${m[0]}`);
  }
  eq(hits.length, 0, `direct provider calls in the app: ${hits.join(", ")}`);
});
