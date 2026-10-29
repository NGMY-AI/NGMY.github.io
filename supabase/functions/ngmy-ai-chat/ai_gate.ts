// NGMY AI gate — everything that decides whether an AI request may go to the AI provider.
//
// Pure logic with no Deno or Supabase imports, so it can be tested with `deno test` and a fake store.
// The Edge Function (index.ts) plugs in a Postgres-backed store (`ngmy_ai_gate` SQL function), so the
// counters are durable and shared by every function instance.
//
// Order of checks, all BEFORE the provider is called:
//   1. who is it?  (a signed-in user, or only an IP address)
//   2. is the AI provider cooling down after a 429?  (then nobody calls it)
//   3. per-user minute / hour / day limits, per-IP limit, and the global daily cap — all counted in ONE
//      all-or-nothing step, so a blocked request never uses up quota.

export type AiClass = "normal" | "expensive";

export interface WindowLimits {
  perMinute: number;
  perHour: number;
  perDay: number;
}

export interface GateLimits {
  /** Normal AI chat / advisor. */
  normal: WindowLimits;
  /** Expensive actions: job applications, documents, App Builder, pictures, voice, live browser. */
  expensive: WindowLimits;
  /** Unauthenticated AI is off unless this is true. */
  allowAnon: boolean;
  /** Per IP per minute for anyone who is not signed in. */
  anonPerMinute: number;
  /** Per IP per minute for signed-in users too (stops many accounts from one address). */
  ipPerMinute: number;
  /** Requests per day for the whole app on the shared key (the circuit breaker). */
  globalPerDay: number;
  /** Cost controls. */
  maxPromptChars: number;
  maxPromptCharsExpensive: number;
  maxImages: number;
  maxImageChars: number;
  maxOutputTokens: number;
  maxOutputTokensExpensive: number;
  timeoutMs: number;
  /** How many different models one request may try (a failure is never retried on the same model). */
  maxModelAttempts: number;
  /** After the provider says 429, nobody calls it for this long. */
  providerCooldownSeconds: number;
  /** This many blocked requests from one user in ten minutes is logged as a spike. */
  spikeThreshold: number;
}

export const DEFAULT_LIMITS: GateLimits = {
  normal: { perMinute: 20, perHour: 100, perDay: 300 },
  expensive: { perMinute: 5, perHour: 20, perDay: 50 },
  allowAnon: false,
  anonPerMinute: 5,
  ipPerMinute: 60,
  globalPerDay: 5000,
  maxPromptChars: 100000,
  maxPromptCharsExpensive: 200000,
  maxImages: 4,
  maxImageChars: 6_000_000,
  maxOutputTokens: 2048,
  maxOutputTokensExpensive: 8192,
  timeoutMs: 30000,
  maxModelAttempts: 2,
  providerCooldownSeconds: 60,
  spikeThreshold: 10,
};

/** The names that can be set as environment variables or in the admin settings table (ngmy_ai_settings). */
export const LIMIT_KEYS: Record<string, string> = {
  AI_LIMIT_NORMAL_PER_MIN: "normal.perMinute",
  AI_LIMIT_NORMAL_PER_HOUR: "normal.perHour",
  AI_LIMIT_NORMAL_PER_DAY: "normal.perDay",
  AI_LIMIT_EXPENSIVE_PER_MIN: "expensive.perMinute",
  AI_LIMIT_EXPENSIVE_PER_HOUR: "expensive.perHour",
  AI_LIMIT_EXPENSIVE_PER_DAY: "expensive.perDay",
  AI_ALLOW_ANON: "allowAnon",
  AI_LIMIT_ANON_PER_MIN: "anonPerMinute",
  AI_LIMIT_IP_PER_MIN: "ipPerMinute",
  AI_GLOBAL_PER_DAY: "globalPerDay",
  AI_MAX_PROMPT_CHARS: "maxPromptChars",
  AI_MAX_PROMPT_CHARS_EXPENSIVE: "maxPromptCharsExpensive",
  AI_MAX_IMAGES: "maxImages",
  AI_MAX_IMAGE_CHARS: "maxImageChars",
  AI_MAX_OUTPUT_TOKENS: "maxOutputTokens",
  AI_MAX_OUTPUT_TOKENS_EXPENSIVE: "maxOutputTokensExpensive",
  AI_TIMEOUT_MS: "timeoutMs",
  AI_MAX_MODEL_ATTEMPTS: "maxModelAttempts",
  AI_PROVIDER_COOLDOWN_SECONDS: "providerCooldownSeconds",
  AI_SPIKE_THRESHOLD: "spikeThreshold",
};

/**
 * Starts from the defaults, then environment variables, then the admin settings table (which wins).
 * Anything that is not a sensible number is ignored, so a typo can never switch the limits off.
 */
export function buildLimits(
  env: (name: string) => string | undefined,
  overrides: Record<string, string> = {},
): GateLimits {
  const out: GateLimits = JSON.parse(JSON.stringify(DEFAULT_LIMITS));
  for (const [name, path] of Object.entries(LIMIT_KEYS)) {
    const raw = (overrides[name] ?? env(name) ?? "").toString().trim();
    if (!raw) continue;
    const [a, b] = path.split(".");
    if (path === "allowAnon") {
      out.allowAnon = /^(1|true|yes|on)$/i.test(raw);
      continue;
    }
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 1) continue;
    if (b) (out as any)[a][b] = Math.floor(n);
    else (out as any)[a] = Math.floor(n);
  }
  return out;
}

/** What one counted limit looks like. */
export interface Entry {
  bucket: string;
  key: string;
  windowSeconds: number;
  max: number;
}

export type ConsumeResult = { ok: true } | { ok: false; failed: Entry; retryAfter: number };

export interface GateStore {
  /** Counts every entry in one step, or counts none of them when any one is full. */
  consumeAll(entries: Entry[]): Promise<ConsumeResult>;
  /** Seconds left in the provider cooldown (0 when the provider may be called). */
  cooldownLeft(): Promise<number>;
  startCooldown(seconds: number): Promise<void>;
}

export interface Who {
  /** The signed-in user (auth user id), or null for somebody who is not signed in. */
  userId: string | null;
  ip: string;
}

export const MSG_TOO_FAST = "You are using AI too fast. Please wait a little and try again.";
export const MSG_LOGIN = "Please sign in to use AI.";
export const MSG_BUSY = "The AI is busy right now. Please try again in a minute.";
export const MSG_RESTING = "The AI is resting for now. Please try again later.";

export type GateDecision =
  | { ok: true }
  | {
    ok: false;
    status: 401 | 429 | 503;
    code: "ai_login_required" | "ai_rate_limited" | "ai_busy" | "ai_unavailable";
    message: string;
    retryAfter: number;
    logKind: string;
    logDetail: string;
  };

function secondsToUtcMidnight(now: Date): number {
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return Math.max(1, Math.ceil((next - now.getTime()) / 1000));
}

export async function gateAiRequest(
  store: GateStore,
  limits: GateLimits,
  who: Who,
  endpoint: string,
  cls: AiClass,
  now: Date = new Date(),
): Promise<GateDecision> {
  const signedIn = !!who.userId;
  const ip = (who.ip || "unknown").slice(0, 80);

  if (!signedIn && !limits.allowAnon) {
    return {
      ok: false,
      status: 401,
      code: "ai_login_required",
      message: MSG_LOGIN,
      retryAfter: 0,
      logKind: "ai_blocked_anon",
      logDetail: `user=none endpoint=${endpoint} class=${cls} ip=${ip}`,
    };
  }

  const cool = await store.cooldownLeft();
  if (cool > 0) {
    return {
      ok: false,
      status: 503,
      code: "ai_busy",
      message: MSG_BUSY,
      retryAfter: cool,
      logKind: "ai_provider_cooldown",
      logDetail: `user=${who.userId ?? "none"} endpoint=${endpoint} class=${cls} left=${cool}s`,
    };
  }

  const entries: Entry[] = [];
  if (signedIn) {
    const w = limits[cls];
    entries.push({ bucket: `ai_${cls}_min`, key: who.userId!, windowSeconds: 60, max: w.perMinute });
    entries.push({ bucket: `ai_${cls}_hour`, key: who.userId!, windowSeconds: 3600, max: w.perHour });
    entries.push({ bucket: `ai_${cls}_day`, key: who.userId!, windowSeconds: 86400, max: w.perDay });
    entries.push({ bucket: "ai_ip_min", key: ip, windowSeconds: 60, max: limits.ipPerMinute });
  } else {
    entries.push({ bucket: "ai_anon_ip_min", key: ip, windowSeconds: 60, max: limits.anonPerMinute });
  }
  entries.push({ bucket: "ai_global_day", key: "all", windowSeconds: 86400, max: limits.globalPerDay });

  const r = await store.consumeAll(entries);
  if (r.ok) return { ok: true };

  const who2 = `user=${who.userId ?? "none"} endpoint=${endpoint} class=${cls} ip=${ip}`;
  if (r.failed.bucket === "ai_global_day") {
    return {
      ok: false,
      status: 503,
      code: "ai_unavailable",
      message: MSG_RESTING,
      retryAfter: Math.min(r.retryAfter || 3600, secondsToUtcMidnight(now)),
      logKind: "ai_global_cap",
      logDetail: `${who2} cap=${limits.globalPerDay}/day`,
    };
  }
  return {
    ok: false,
    status: 429,
    code: "ai_rate_limited",
    message: MSG_TOO_FAST,
    retryAfter: Math.max(1, r.retryAfter || 60),
    logKind: "ai_rate_limit",
    logDetail: `${who2} window=${r.failed.bucket}`,
  };
}

/** What kind of request is it? Decided on the server from the request, never from a flag the browser sends. */
const EXPENSIVE_KINDS = new Set([
  "jobApplication",
  "coverLetter",
  "resume",
  "document",
  "documentGeneration",
  "appBuilder",
  "slides",
  "book",
  "news",
  "translate",
]);

export function classifyAiRequest(body: Record<string, unknown>): AiClass {
  const mode = String(body?.mode ?? "");
  const kind = String(body?.kind ?? "");
  if (mode === "appBuilder" || EXPENSIVE_KINDS.has(kind) || EXPENSIVE_KINDS.has(mode)) return "expensive";
  const images = Array.isArray(body?.images) ? body.images.length : 0;
  if (images > 0) return "expensive";
  return "normal";
}

/** Null when the input is fine, otherwise the plain message to send back (HTTP 400/413). */
export function checkAiInput(limits: GateLimits, body: Record<string, unknown>, cls: AiClass): string | null {
  const prompt = String(body?.prompt ?? "");
  const maxChars = cls === "expensive" ? limits.maxPromptCharsExpensive : limits.maxPromptChars;
  if (prompt.length > maxChars) return "That message is too long. Please make it shorter.";
  if (Array.isArray(body?.images)) {
    const imgs = body.images as Array<Record<string, unknown>>;
    if (imgs.length > limits.maxImages) return "Too many pictures in one request.";
    let total = 0;
    for (const im of imgs) total += String(im?.data ?? "").length;
    if (total > limits.maxImageChars) return "Those pictures are too big. Please use smaller ones.";
  }
  return null;
}

/** The AI provider said 429 (or its quota is gone). The caller stops at once and shows a busy message. */
export class ProviderBusyError extends Error {
  constructor(public retryAfter = 0) {
    super("AI provider is busy");
    this.name = "ProviderBusyError";
  }
}

/** The provider rejected the key or the request in a way that retrying cannot fix. */
export class ProviderStopError extends Error {
  constructor(public status: number) {
    super(`AI provider refused the request (HTTP ${status})`);
    this.name = "ProviderStopError";
  }
}

/**
 * One call to the provider with a timeout. A 429 stops everything (ProviderBusyError); a 401/403 stops too.
 * Nothing here retries: at most [maxModelAttempts] different models are tried by the caller, one call each.
 */
export async function providerFetch(
  fetchImpl: typeof fetch,
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const res = await fetchImpl(url, { ...init, signal: AbortSignal.timeout(timeoutMs) });
  if (res.status === 429) {
    const ra = Number(res.headers.get("retry-after") ?? "");
    throw new ProviderBusyError(Number.isFinite(ra) && ra > 0 ? Math.min(ra, 600) : 0);
  }
  if (res.status === 401 || res.status === 403) throw new ProviderStopError(res.status);
  return res;
}

/** Takes anything that looks like a key or a key in a URL out of text that is about to go to the browser or the logs. */
export function scrubSecrets(text: string): string {
  return String(text)
    .replace(/([?&](?:key|api_key|apikey|token)=)[^&\s"')]+/gi, "$1[hidden]")
    .replace(/AIza[0-9A-Za-z_-]{20,}/g, "[hidden]")
    .replace(/sk-ant-[0-9A-Za-z_-]{16,}/g, "[hidden]")
    .replace(/sk-[0-9A-Za-z_-]{20,}/g, "[hidden]")
    .replace(/(Bearer\s+)[0-9A-Za-z._-]{16,}/gi, "$1[hidden]");
}

/** A store that lives in memory: used by the tests, and as the strict fallback when the database cannot be reached. */
export class MemoryGateStore implements GateStore {
  private counts = new Map<string, number>();
  private until = 0;
  constructor(private clock: () => number = () => Date.now()) {}

  async consumeAll(entries: Entry[]): Promise<ConsumeResult> {
    const now = this.clock();
    const slots = entries.map((e) => {
      const win = Math.floor(now / 1000 / e.windowSeconds);
      return { e, id: `${e.bucket}|${e.key}|${win}`, endsAt: (win + 1) * e.windowSeconds * 1000 };
    });
    for (const s of slots) {
      if ((this.counts.get(s.id) ?? 0) >= s.e.max) {
        return { ok: false, failed: s.e, retryAfter: Math.max(1, Math.ceil((s.endsAt - now) / 1000)) };
      }
    }
    for (const s of slots) this.counts.set(s.id, (this.counts.get(s.id) ?? 0) + 1);
    if (this.counts.size > 50000) this.counts.clear();
    return { ok: true };
  }

  async cooldownLeft(): Promise<number> {
    return Math.max(0, Math.ceil((this.until - this.clock()) / 1000));
  }

  async startCooldown(seconds: number): Promise<void> {
    this.until = Math.max(this.until, this.clock() + seconds * 1000);
  }

  /** For tests: ends the cooldown now. */
  resetCooldown(): void {
    this.until = 0;
  }
}
