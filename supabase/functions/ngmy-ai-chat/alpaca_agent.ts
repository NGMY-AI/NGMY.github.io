// NGMY Alpaca paper-trading agent — VERSION 1 (READ-ONLY).
//
// What this file does:
// - Every 15 minutes (Supabase pg_cron + pg_net call bright-handler with action "paTick") it reads the
//   Alpaca PAPER account, positions and prices, works out the fast/slow moving-average crossover on
//   5-minute candles, and LOGS what it WOULD do. It also lets an NGMY admin start/stop the agent and
//   read the log from the app (Signal Grid).
//
// Hard limits kept in code:
// - Paper only. Every Alpaca trading call goes to PAPER_BASE below. If ALPACA_BASE_URL is set to anything
//   other than the paper endpoint, the agent refuses to run. There is no live endpoint anywhere in this file.
// - Keys are read only from Supabase secrets (ALPACA_API_KEY, ALPACA_SECRET_KEY) and are never logged,
//   stored in the database, or returned to the app.
// - Version 1 has NO order code at all: no order request of any kind exists in this file. The master switch
//   ALPACA_ORDERS_ENABLED is only read and shown; even when it is "on", nothing can be placed.
// - The "would buy / would sell" decisions run on a would-be ("shadow") $50 position so the take profit,
//   stop loss, daily $10 stop and total $25 brake can be checked exactly, without any real order.

// deno-lint-ignore-file no-explicit-any

export const PA_ACTIONS = new Set(["paStatus", "paLog", "paSet", "paCheck", "paTick"]);

const PAPER_BASE = "https://paper-api.alpaca.markets";
const DATA_BASE = "https://data.alpaca.markets";

export const PA_RULES = {
  version: 1,
  readOnly: true,
  tradeUsd: 50,
  fastMa: 9,
  slowMa: 21,
  candleMinutes: 5,
  checkEveryMinutes: 15,
  takeProfitPct: 3,
  stopLossPct: 1.5,
  dailyLossStopUsd: 10,
  totalLossBrakeUsd: 25,
  weekdayAsset: "SPY",
  weekendAsset: "BTC/USD",
  weekdayMaxTrades: 4,
  weekendMaxTrades: 5,
  closeOutEt: "3:55 PM",
};

export const PA_RULE_LINES: string[] = [
  "Version 1 is read-only: it logs what it WOULD do and places no orders.",
  "Alpaca paper account only. No live keys, no live endpoint, no real money.",
  "$50 per trade, one position at a time. No options, no margin, no short selling.",
  "All times are Eastern Time (New York).",
  "Weekdays: SPY only, 9:30 AM to 4:00 PM ET, checked every 15 minutes. No trading on US market holidays.",
  "Weekends: BTC/USD only, 24 hours, checked every 15 minutes.",
  "Buy signal: the fast average (9 candles) crosses above the slow average (21 candles) on 5-minute candles, and no position is held.",
  "Sell signal: the fast average crosses back below the slow average.",
  "Take profit: sell the whole position at +3%. Stop loss: sell the whole position at -1.5%.",
  "SPY: sell everything by 3:55 PM ET (the last check before the close). No overnight stock positions.",
  "Up to 4 trades per weekday and 5 per weekend day, only on a real signal. Never forced.",
  "Daily stop: if the day loses $10, no more buys that day.",
  "Total brake: if total demo losses reach $25, the agent pauses until an admin turns it back on.",
];

// ─────────────────────────────────────────────────────────────── pure helpers (tested)

export type Bar = { t: string; c: number };

export function sma(values: number[], n: number): number | null {
  if (values.length < n || n <= 0) return null;
  let s = 0;
  for (let i = values.length - n; i < values.length; i++) s += values[i];
  return s / n;
}

/** Fast/slow averages now and 3 candles ago (one 15-minute check ago), and whether they crossed in between. */
export function crossover(closes: number[], fast = PA_RULES.fastMa, slow = PA_RULES.slowMa, lookback = 3) {
  const fastNow = sma(closes, fast);
  const slowNow = sma(closes, slow);
  const before = closes.slice(0, Math.max(0, closes.length - lookback));
  const fastBefore = sma(before, fast);
  const slowBefore = sma(before, slow);
  let signal: "buy" | "sell" | "none" = "none";
  if (fastNow != null && slowNow != null && fastBefore != null && slowBefore != null) {
    if (fastBefore <= slowBefore && fastNow > slowNow) signal = "buy";
    else if (fastBefore >= slowBefore && fastNow < slowNow) signal = "sell";
  }
  return { fastNow, slowNow, fastBefore, slowBefore, signal };
}

/** Day, weekday and clock in Eastern Time — never the server's local time. */
export function etParts(d: Date) {
  const f = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false, weekday: "short",
  });
  const p: Record<string, string> = {};
  for (const x of f.formatToParts(d)) p[x.type] = x.value;
  const hour = Number(p.hour) % 24;
  const minute = Number(p.minute);
  const weekday = p.weekday; // Mon..Sun
  const dayKey = `${p.year}-${p.month}-${p.day}`;
  const label = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York", weekday: "short", month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit",
  }).format(d) + " ET";
  return { dayKey, weekday, hour, minute, weekend: weekday === "Sat" || weekday === "Sun", label };
}

export type Shadow = { symbol: string; qty: number; entryPrice: number; entryAt: string } | null;

export type DecideInput = {
  weekend: boolean;
  asset: string;
  price: number;
  signal: "buy" | "sell" | "none";
  fast: number | null;
  slow: number | null;
  shadow: Shadow;
  dayPnl: number;
  totalPnl: number;
  tradesToday: number;
  finalCheck: boolean; // SPY: last check before 3:55 PM ET
  alpacaHolding: boolean; // a real position is already open at Alpaca
  signalAlreadyUsed: boolean;
};

export type Decision = {
  decision: "would buy" | "would sell" | "hold" | "no action";
  reason: string;
  pnl?: number; // realized would-be P/L when it would sell
};

/** The trading rules, as one pure function. No network, no orders. */
export function decide(x: DecideInput): Decision {
  const r = PA_RULES;
  if (x.shadow) {
    const chg = (x.price - x.shadow.entryPrice) / x.shadow.entryPrice * 100;
    const pnl = round2(x.shadow.qty * (x.price - x.shadow.entryPrice));
    if (x.shadow.symbol !== x.asset) {
      return { decision: "would sell", reason: x.weekend ? "weekend started, stock position closed" : "weekend is over, crypto position closed", pnl };
    }
    if (chg >= r.takeProfitPct) return { decision: "would sell", reason: `take profit hit (+${chg.toFixed(2)}%)`, pnl };
    if (chg <= -r.stopLossPct) return { decision: "would sell", reason: `stop loss hit (${chg.toFixed(2)}%)`, pnl };
    if (!x.weekend && x.finalCheck) return { decision: "would sell", reason: "3:55 PM ET rule, no overnight stock positions", pnl };
    if (x.signal === "sell") return { decision: "would sell", reason: "sell signal: fast average crossed below slow", pnl };
    return { decision: "hold", reason: `holding, no exit rule hit (${chg >= 0 ? "+" : ""}${chg.toFixed(2)}%)` };
  }
  if (x.totalPnl <= -r.totalLossBrakeUsd) return { decision: "no action", reason: "agent paused by the $25 brake" };
  if (x.dayPnl <= -r.dailyLossStopUsd) return { decision: "no action", reason: "daily stop reached ($10 lost today)" };
  const maxTrades = x.weekend ? r.weekendMaxTrades : r.weekdayMaxTrades;
  if (x.tradesToday >= maxTrades) return { decision: "no action", reason: `daily trade limit reached (${maxTrades})` };
  if (!x.weekend && x.finalCheck) return { decision: "no action", reason: "too close to the 3:55 PM ET close-out, no new buys" };
  if (x.fast == null || x.slow == null) return { decision: "no action", reason: "not enough 5-minute candles yet" };
  if (x.signal !== "buy") return { decision: "no action", reason: "no signal" };
  if (x.alpacaHolding) return { decision: "no action", reason: "buy signal, but a position is already open at Alpaca" };
  if (x.signalAlreadyUsed) return { decision: "no action", reason: "buy signal already used, never twice for one signal" };
  return { decision: "would buy", reason: `buy signal: fast average crossed above slow, would buy $${r.tradeUsd}` };
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

// ─────────────────────────────────────────────────────────────── Alpaca (read-only GETs)

type Keys = { id: string; secret: string };

function readConfig(): { keys: Keys | null; baseOk: boolean; ordersSwitch: boolean; problem: string } {
  const id = (Deno.env.get("ALPACA_API_KEY") ?? "").trim();
  const secret = (Deno.env.get("ALPACA_SECRET_KEY") ?? "").trim();
  const base = (Deno.env.get("ALPACA_BASE_URL") ?? "").trim().replace(/\/+$/, "").replace(/\/v2$/, "");
  const ordersSwitch = (Deno.env.get("ALPACA_ORDERS_ENABLED") ?? "").trim().toLowerCase() === "true";
  const baseOk = base === "" || base === PAPER_BASE;
  let problem = "";
  if (!baseOk) problem = "ALPACA_BASE_URL is not the Alpaca paper endpoint, so the agent refuses to run";
  else if (!id || !secret) problem = "Alpaca paper keys are not set in Supabase secrets yet";
  else if (id.startsWith("AK")) problem = "ALPACA_API_KEY looks like a LIVE key (paper keys start with PK), so the agent refuses to run";
  return { keys: problem ? null : { id, secret }, baseOk, ordersSwitch, problem };
}

async function aGet(base: string, path: string, k: Keys): Promise<any> {
  // GET only. This agent never sends POST, PATCH or DELETE to Alpaca.
  const res = await fetch(`${base}${path}`, {
    method: "GET",
    headers: { "APCA-API-KEY-ID": k.id, "APCA-API-SECRET-KEY": k.secret, Accept: "application/json" },
    signal: AbortSignal.timeout(12000),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Alpaca ${path.split("?")[0]} answered ${res.status}`);
  return text ? JSON.parse(text) : null;
}

async function readAccount(k: Keys) {
  const [acct, positions] = await Promise.all([
    aGet(PAPER_BASE, "/v2/account", k),
    aGet(PAPER_BASE, "/v2/positions", k),
  ]);
  return {
    equity: Number(acct?.equity ?? 0),
    cash: Number(acct?.cash ?? 0),
    buyingPower: Number(acct?.buying_power ?? 0),
    lastEquity: Number(acct?.last_equity ?? 0),
    status: String(acct?.status ?? ""),
    positions: (Array.isArray(positions) ? positions : []).map((p: any) => ({
      symbol: String(p.symbol ?? ""),
      qty: Number(p.qty ?? 0),
      side: String(p.side ?? ""),
      avgEntry: Number(p.avg_entry_price ?? 0),
      marketValue: Number(p.market_value ?? 0),
      unrealizedPl: Number(p.unrealized_pl ?? 0),
      currentPrice: Number(p.current_price ?? 0),
    })),
  };
}

/** The last few hours for the app's chart: price, fast line and slow line per 5-minute candle, plus the trend. */
export function buildChart(times: string[], closes: number[], points = 48) {
  const out: { t: string; c: number; f: number | null; s: number | null }[] = [];
  const from = Math.max(0, closes.length - points);
  for (let i = from; i < closes.length; i++) {
    const upto = closes.slice(0, i + 1);
    out.push({ t: times[i], c: closes[i], f: sma(upto, PA_RULES.fastMa), s: sma(upto, PA_RULES.slowMa) });
  }
  const x = crossover(closes);
  const trend = x.fastNow == null || x.slowNow == null ? "unknown" : x.fastNow > x.slowNow ? "up" : x.fastNow < x.slowNow ? "down" : "flat";
  return { points: out, trend, signal: x.signal, fast: x.fastNow, slow: x.slowNow };
}

async function readBars(asset: string, k: Keys): Promise<{ closes: number[]; times: string[]; price: number; lastBarAt: string }> {
  const start = new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString();
  let bars: any[] = [];
  let price = 0;
  if (asset === "BTC/USD") {
    const sym = encodeURIComponent(asset);
    const b = await aGet(DATA_BASE, `/v1beta3/crypto/us/bars?symbols=${sym}&timeframe=5Min&start=${start}&limit=80&sort=desc`, k);
    bars = b?.bars?.[asset] ?? [];
    const t = await aGet(DATA_BASE, `/v1beta3/crypto/us/latest/trades?symbols=${sym}`, k);
    price = Number(t?.trades?.[asset]?.p ?? 0);
  } else {
    const b = await aGet(DATA_BASE, `/v2/stocks/${asset}/bars?timeframe=5Min&start=${start}&limit=80&sort=desc&feed=iex`, k);
    bars = b?.bars ?? [];
    const t = await aGet(DATA_BASE, `/v2/stocks/${asset}/trades/latest?feed=iex`, k);
    price = Number(t?.trade?.p ?? 0);
  }
  // Oldest first, and only finished candles (a candle that started less than 5 minutes ago is still moving).
  const now = Date.now();
  const done = bars
    .map((x: any) => ({ t: String(x.t), c: Number(x.c) }))
    .filter((x) => Number.isFinite(x.c) && Date.parse(x.t) + 5 * 60 * 1000 <= now)
    .sort((a, b) => Date.parse(a.t) - Date.parse(b.t));
  if (!price && done.length) price = done[done.length - 1].c;
  return { closes: done.map((x) => x.c), times: done.map((x) => x.t), price, lastBarAt: done.length ? done[done.length - 1].t : "" };
}

// ─────────────────────────────────────────────────────────────── database

async function loadState(db: any) {
  const { data, error } = await db.from("ngmy_alpaca_agent_state").select("*").eq("id", 1).maybeSingle();
  if (error) throw new Error(`state table: ${error.message}`);
  if (!data) throw new Error("state table is empty, run the setup SQL");
  return data;
}

async function saveState(db: any, patch: Record<string, unknown>) {
  await db.from("ngmy_alpaca_agent_state").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", 1);
}

async function writeLog(db: any, row: Record<string, unknown>) {
  const now = new Date();
  await db.from("ngmy_alpaca_agent_log").insert({ et_time: etParts(now).label, ...row });
}

async function ensureDay(db: any, et: ReturnType<typeof etParts>, asset: string, equity: number) {
  const { data: today } = await db.from("ngmy_alpaca_agent_days").select("*").eq("et_day", et.dayKey).maybeSingle();
  if (today) {
    await db.from("ngmy_alpaca_agent_days").update({ end_equity: equity, end_at: new Date().toISOString() }).eq("et_day", et.dayKey);
    return { ...today, end_equity: equity };
  }
  // A new Eastern day: close out the previous day's balance in the log, then open today.
  const { data: prev } = await db.from("ngmy_alpaca_agent_days").select("*").lt("et_day", et.dayKey)
    .order("et_day", { ascending: false }).limit(1).maybeSingle();
  if (prev && !prev.end_logged) {
    await writeLog(db, {
      kind: "day", asset: prev.asset, decision: "day end", balance: prev.end_equity, day_pnl: prev.day_pnl,
      reason: `End of ${prev.et_day}: paper balance $${Number(prev.end_equity ?? 0).toFixed(2)}, demo P/L that day $${Number(prev.day_pnl ?? 0).toFixed(2)}, ${prev.trades ?? 0} would-be trade(s)`,
    });
    await db.from("ngmy_alpaca_agent_days").update({ end_logged: true }).eq("et_day", prev.et_day);
  }
  const row = { et_day: et.dayKey, asset, start_equity: equity, end_equity: equity, start_at: new Date().toISOString(), end_at: new Date().toISOString(), day_pnl: 0, trades: 0 };
  await db.from("ngmy_alpaca_agent_days").upsert(row);
  await writeLog(db, {
    kind: "day", asset, decision: "day start", balance: equity,
    reason: `Start of ${et.dayKey}: paper balance $${equity.toFixed(2)}`,
  });
  return row;
}

// ─────────────────────────────────────────────────────────────── the 15-minute check

async function runCheck(db: any, source: "cron" | "manual", who = ""): Promise<Record<string, unknown>> {
  const state = await loadState(db);
  const now = new Date();
  const et = etParts(now);
  const asset = et.weekend ? PA_RULES.weekendAsset : PA_RULES.weekdayAsset;

  // Never run two checks for the same quarter hour (cron retry or a double tap).
  const last = state.last_tick_at ? Date.parse(state.last_tick_at) : 0;
  if (source === "cron" && now.getTime() - last < 10 * 60 * 1000) return { ok: true, skipped: "already checked in the last 10 minutes" };
  if (source === "manual" && now.getTime() - last < 60 * 1000) return { ok: false, error: "A check ran less than a minute ago. Please wait a moment." };
  await saveState(db, { last_tick_at: now.toISOString() });

  if (!state.enabled && source === "cron") return { ok: true, skipped: "agent is stopped" };

  const cfg = readConfig();
  if (!cfg.keys) {
    await writeLog(db, { kind: "error", asset, decision: "no action", reason: cfg.problem });
    return { ok: false, error: cfg.problem };
  }

  // Weekday market session: Alpaca's clock and calendar know holidays and early closes.
  let finalCheck = false;
  if (!et.weekend) {
    let clock: any, cal: any;
    try {
      [clock, cal] = await Promise.all([
        aGet(PAPER_BASE, "/v2/clock", cfg.keys),
        aGet(PAPER_BASE, `/v2/calendar?start=${et.dayKey}&end=${et.dayKey}`, cfg.keys),
      ]);
    } catch (e) {
      await writeLog(db, { kind: "error", asset, decision: "no action", reason: `Alpaca connection failed (${String((e as Error).message)}), no action taken` });
      return { ok: false, error: "Alpaca connection failed" };
    }
    const holiday = !Array.isArray(cal) || cal.length === 0;
    const shadow: Shadow = state.shadow ?? null;
    const holdingCrypto = shadow && shadow.symbol !== asset;
    if (!clock?.is_open && !holdingCrypto) {
      // Closed: log it at most once an hour so the log is not flooded overnight.
      const lastClosed = state.last_closed_log_at ? Date.parse(state.last_closed_log_at) : 0;
      if (source === "manual" || now.getTime() - lastClosed >= 55 * 60 * 1000) {
        const reason = holiday ? "US market holiday, SPY is not traded today"
          : (et.hour < 9 || (et.hour === 9 && et.minute < 30)) ? "before the 9:30 AM ET open" : "market is closed (after 4:00 PM ET)";
        await writeLog(db, { kind: "check", asset, decision: "no action", signal: "none", reason, total_pnl: state.total_pnl });
        await saveState(db, { last_closed_log_at: now.toISOString() });
      }
      return { ok: true, closed: true };
    }
    if (clock?.next_close) {
      const minsToClose = (Date.parse(clock.next_close) - now.getTime()) / 60000;
      finalCheck = minsToClose < 20; // the 3:45 PM check is the last one before 3:55 PM
    }
  }

  let acct: Awaited<ReturnType<typeof readAccount>>;
  let mkt: Awaited<ReturnType<typeof readBars>>;
  try {
    [acct, mkt] = await Promise.all([readAccount(cfg.keys), readBars(asset, cfg.keys)]);
  } catch (e) {
    await writeLog(db, { kind: "error", asset, decision: "no action", reason: `Alpaca connection failed (${String((e as Error).message)}), no action taken` });
    return { ok: false, error: "Alpaca connection failed" };
  }

  const day = await ensureDay(db, et, asset, acct.equity);
  const x = crossover(mkt.closes);
  const shadow: Shadow = state.shadow ?? null;
  let price = mkt.price;
  // A crypto would-be position left from the weekend is valued at the BTC price, not SPY.
  if (shadow && shadow.symbol !== asset) {
    try { price = (await readBars(shadow.symbol, cfg.keys)).price; } catch { /* keep */ }
  }
  const signalKey = `${asset}|${mkt.lastBarAt}|${x.signal}`;
  const alpacaSym = asset.replace("/", "");
  const totalPnl = Number(state.total_pnl ?? 0);
  const dayPnl = Number(day.day_pnl ?? 0);

  let d: Decision;
  if (state.brake_paused && !shadow) {
    d = { decision: "no action", reason: "agent paused by the $25 brake, waiting for an admin to turn it back on" };
  } else {
    d = decide({
      weekend: et.weekend, asset, price, signal: x.signal, fast: x.fastNow, slow: x.slowNow, shadow,
      dayPnl, totalPnl, tradesToday: Number(day.trades ?? 0), finalCheck,
      alpacaHolding: acct.positions.some((p) => p.symbol === alpacaSym && p.qty !== 0),
      signalAlreadyUsed: state.last_signal_key === signalKey,
    });
  }

  const statePatch: Record<string, unknown> = {
    snapshot: { ...acct, asset, price: mkt.price, at: now.toISOString(), etTime: et.label, chart: buildChart(mkt.times, mkt.closes) },
  };
  let newTotal = totalPnl;
  let newDay = dayPnl;
  if (d.decision === "would buy") {
    statePatch.shadow = { symbol: asset, qty: PA_RULES.tradeUsd / price, entryPrice: price, entryAt: now.toISOString() };
    statePatch.last_signal_key = signalKey;
    await db.from("ngmy_alpaca_agent_days").update({ trades: Number(day.trades ?? 0) + 1 }).eq("et_day", et.dayKey);
  } else if (d.decision === "would sell") {
    newTotal = round2(totalPnl + (d.pnl ?? 0));
    newDay = round2(dayPnl + (d.pnl ?? 0));
    statePatch.shadow = null;
    statePatch.total_pnl = newTotal;
    if (x.signal === "sell") statePatch.last_signal_key = signalKey;
    await db.from("ngmy_alpaca_agent_days").update({ day_pnl: newDay }).eq("et_day", et.dayKey);
    if (newTotal <= -PA_RULES.totalLossBrakeUsd && !state.brake_paused) {
      statePatch.brake_paused = true;
      statePatch.brake_reason = `Total demo loss reached $${Math.abs(newTotal).toFixed(2)}`;
    }
  }
  await saveState(db, statePatch);

  const sig = x.signal === "buy" ? "buy signal" : x.signal === "sell" ? "sell signal" : "none";
  await writeLog(db, {
    kind: "check", asset: shadow && d.decision === "would sell" ? shadow.symbol : asset, price,
    fast_ma: x.fastNow, slow_ma: x.slowNow, signal: sig, decision: d.decision,
    reason: d.reason + (source === "manual" ? " (check run by an admin from the app)" : ""),
    balance: acct.equity, total_pnl: newTotal, day_pnl: newDay,
    details: { pnl: d.pnl ?? null, candles: mkt.closes.length, lastCandle: mkt.lastBarAt, by: who ? "admin" : "cron" },
  });
  if (statePatch.brake_paused) {
    await writeLog(db, { kind: "control", asset, decision: "no action", reason: "agent paused by the $25 brake. An admin must review and turn it back on.", total_pnl: newTotal });
  }
  return { ok: true, decision: d.decision, reason: d.reason };
}

// ─────────────────────────────────────────────────────────────── app + cron entry

export async function handleAlpacaAgent(
  action: string,
  body: any,
  ctx: { db: any; email: string; isAdmin: boolean },
): Promise<{ status: number; payload: Record<string, unknown> }> {
  const { db, email, isAdmin } = ctx;
  if (!db) return { status: 500, payload: { ok: false, error: "Server database unavailable." } };

  if (action === "paTick") {
    // Called by pg_cron. The token lives only in the state table (service role), never in the app.
    let state: any;
    try { state = await loadState(db); } catch (e) { return { status: 500, payload: { ok: false, error: String((e as Error).message) } }; }
    const token = String(body?.token ?? "");
    if (!token || !state.cron_token || token !== state.cron_token) return { status: 403, payload: { ok: false, error: "forbidden" } };
    try {
      return { status: 200, payload: await runCheck(db, "cron") };
    } catch (e) {
      return { status: 500, payload: { ok: false, error: String((e as Error).message) } };
    }
  }

  if (!email) return { status: 401, payload: { ok: false, error: "Please sign in." } };
  if (!isAdmin) return { status: 403, payload: { ok: false, ownerOnly: true, error: "The trading agent is for NGMY admins only." } };

  let state: any;
  try { state = await loadState(db); } catch (e) {
    return { status: 200, payload: { ok: false, setupNeeded: true, error: "The trading agent tables are not set up yet. Run the setup SQL in Supabase." } };
  }

  if (action === "paSet") {
    const enabled = body?.enabled === true;
    const patch: Record<string, unknown> = { enabled, updated_by: "admin" };
    let note = enabled ? "Agent started by an admin" : "Agent stopped by an admin";
    if (enabled && state.brake_paused) {
      // Turning it back on after the $25 brake is the admin's review: the brake count starts again from zero.
      patch.brake_paused = false;
      patch.brake_reason = null;
      patch.total_pnl = 0;
      note += ". The $25 brake was reset after review (running demo P/L set back to $0).";
    }
    await saveState(db, patch);
    await writeLog(db, { kind: "control", decision: enabled ? "start" : "stop", reason: note, total_pnl: patch.total_pnl ?? state.total_pnl });
    state = await loadState(db);
  }

  if (action === "paCheck") {
    try {
      const r = await runCheck(db, "manual", email);
      state = await loadState(db);
      if (r.ok === false) return { status: 200, payload: { ...r, state: publicState(state) } };
    } catch (e) {
      return { status: 200, payload: { ok: false, error: String((e as Error).message) } };
    }
  }

  if (action === "paLog") {
    const limit = Math.min(Math.max(Number(body?.limit ?? 100), 10), 300);
    let q = db.from("ngmy_alpaca_agent_log").select("*").order("id", { ascending: false }).limit(limit);
    const before = Number(body?.beforeId ?? 0);
    if (before > 0) q = q.lt("id", before);
    const { data, error } = await q;
    if (error) return { status: 200, payload: { ok: false, error: error.message } };
    return { status: 200, payload: { ok: true, rows: data ?? [] } };
  }

  // paStatus (and the answer to paSet / paCheck): live account read when asked, otherwise the last snapshot.
  const cfg = readConfig();
  let live: any = null;
  let liveError = "";
  if (body?.live === true && cfg.keys) {
    const snapAt = state.snapshot?.at ? Date.parse(state.snapshot.at) : 0;
    if (Date.now() - snapAt > 20 * 1000) {
      try {
        const et = etParts(new Date());
        const asset = et.weekend ? PA_RULES.weekendAsset : PA_RULES.weekdayAsset;
        const [acct, mkt] = await Promise.all([readAccount(cfg.keys), readBars(asset, cfg.keys)]);
        live = { ...acct, asset, price: mkt.price, at: new Date().toISOString(), etTime: et.label, chart: buildChart(mkt.times, mkt.closes) };
        await saveState(db, { snapshot: live });
        state.snapshot = live;
      } catch (e) {
        liveError = `Alpaca connection failed (${String((e as Error).message)})`;
      }
    }
  }
  // Is the market open right now? Weekends: BTC/USD trades all day. Weekdays: Alpaca's clock (knows holidays).
  const etNow = etParts(new Date());
  let market: Record<string, unknown> = etNow.weekend
    ? { open: true, asset: PA_RULES.weekendAsset }
    : { open: null, asset: PA_RULES.weekdayAsset };
  if (!etNow.weekend && cfg.keys) {
    try {
      const clock = await aGet(PAPER_BASE, "/v2/clock", cfg.keys);
      market = { open: !!clock?.is_open, asset: PA_RULES.weekdayAsset, nextOpen: clock?.next_open ?? null, nextClose: clock?.next_close ?? null };
    } catch { /* keep unknown */ }
  }
  const { data: today } = await db.from("ngmy_alpaca_agent_days").select("*").eq("et_day", etNow.dayKey).maybeSingle();
  return {
    status: 200,
    payload: {
      ok: true,
      state: publicState(state),
      today: today ?? null,
      liveError,
      market,
      config: {
        keysSet: !!cfg.keys,
        problem: cfg.problem,
        paperEndpoint: PAPER_BASE,
        ordersSwitchOn: cfg.ordersSwitch,
        ordersPossible: false, // Version 1: there is no order code at all.
      },
      rules: PA_RULE_LINES,
      nowEt: etParts(new Date()).label,
    },
  };
}

function publicState(s: any) {
  // Never return the cron token.
  return {
    enabled: !!s.enabled,
    brakePaused: !!s.brake_paused,
    brakeReason: s.brake_reason ?? null,
    totalPnl: Number(s.total_pnl ?? 0),
    shadow: s.shadow ?? null,
    snapshot: s.snapshot ?? null,
    lastTickAt: s.last_tick_at ?? null,
  };
}
