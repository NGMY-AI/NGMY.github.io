// NGMY Alpaca paper-trading agent — VERSION 1 (READ-ONLY).
//
// What this file does:
// - Every 15 minutes (Supabase pg_cron + pg_net call bright-handler with action "paTick") it reads the
//   Alpaca PAPER account and positions, scans a watchlist of up to 10 live markets (7 US stocks and funds
//   while the stock market is open, 3 crypto coins all day), works out the fast/slow moving-average crossover
//   on 5-minute candles for each one, and LOGS what it WOULD do. It also lets an NGMY admin start/stop the
//   agent and read the log from the app (Signal Grid).
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
// - Still ONE position at a time, across all markets.

// deno-lint-ignore-file no-explicit-any

export const PA_ACTIONS = new Set(["paStatus", "paLog", "paSet", "paCheck", "paTick"]);

const PAPER_BASE = "https://paper-api.alpaca.markets";
const DATA_BASE = "https://data.alpaca.markets";

export type MarketDef = { symbol: string; name: string; kind: "stock" | "crypto" };

/** The watchlist: never more than 10. Stocks trade 9:30 AM to 4:00 PM ET on market days; crypto trades all day. */
export const PA_MARKETS: MarketDef[] = [
  { symbol: "SPY", name: "S&P 500 fund", kind: "stock" },
  { symbol: "QQQ", name: "Nasdaq 100 fund", kind: "stock" },
  { symbol: "AAPL", name: "Apple", kind: "stock" },
  { symbol: "MSFT", name: "Microsoft", kind: "stock" },
  { symbol: "NVDA", name: "Nvidia", kind: "stock" },
  { symbol: "TSLA", name: "Tesla", kind: "stock" },
  { symbol: "AMZN", name: "Amazon", kind: "stock" },
  { symbol: "BTC/USD", name: "Bitcoin", kind: "crypto" },
  { symbol: "ETH/USD", name: "Ethereum", kind: "crypto" },
  { symbol: "SOL/USD", name: "Solana", kind: "crypto" },
];

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
  weekdayMaxTrades: 4,
  weekendMaxTrades: 5,
  closeOutEt: "3:55 PM",
  maxMarkets: 10,
};

export const PA_RULE_LINES: string[] = [
  "Version 1 is read-only: it logs what it WOULD do and places no orders.",
  "Alpaca paper account only. No live keys, no live endpoint, no real money.",
  "$50 per trade, one position at a time across all markets. No options, no margin, no short selling.",
  "All times are Eastern Time (New York).",
  "It watches 10 markets at once: SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon while the US stock market is open (9:30 AM to 4:00 PM ET, never on market holidays), and Bitcoin, Ethereum and Solana all day, every day.",
  "Every 15 minutes it checks all open markets and takes the strongest fresh buy signal, if there is one.",
  "Buy signal: the fast average (9 candles) crosses above the slow average (21 candles) on 5-minute candles, and no position is held.",
  "Sell signal: the fast average crosses back below the slow average.",
  "Take profit: sell the whole position at +3%. Stop loss: sell the whole position at -1.5%.",
  "Stocks: sell everything by 3:55 PM ET (the last check before the close). No overnight stock positions.",
  "Up to 4 trades per weekday and 5 per weekend day, only on a real signal. Never forced.",
  "Daily stop: if the day loses $10, no more buys that day.",
  "Total brake: if total demo losses reach $25, the agent pauses until an admin turns it back on.",
];

// ─────────────────────────────────────────────────────────────── pure helpers (tested)

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
  stock: boolean; // the asset is a US stock (crypto trades all day)
  price: number;
  signal: "buy" | "sell" | "none";
  fast: number | null;
  slow: number | null;
  shadow: Shadow;
  dayPnl: number;
  totalPnl: number;
  tradesToday: number;
  finalCheck: boolean; // stocks: last check before 3:55 PM ET
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
    if (chg >= r.takeProfitPct) return { decision: "would sell", reason: `take profit hit (+${chg.toFixed(2)}%)`, pnl };
    if (chg <= -r.stopLossPct) return { decision: "would sell", reason: `stop loss hit (${chg.toFixed(2)}%)`, pnl };
    if (x.stock && x.finalCheck) return { decision: "would sell", reason: "3:55 PM ET rule, no overnight stock positions", pnl };
    if (x.signal === "sell") return { decision: "would sell", reason: "sell signal: fast average crossed below slow", pnl };
    return {
      decision: "hold",
      reason: `still holding the same ${x.asset} trade (${chg >= 0 ? "+" : ""}${chg.toFixed(2)}%), waiting for the take profit, the stop loss or a turn down`,
    };
  }
  if (x.totalPnl <= -r.totalLossBrakeUsd) return { decision: "no action", reason: "agent paused by the $25 brake" };
  if (x.dayPnl <= -r.dailyLossStopUsd) return { decision: "no action", reason: "daily stop reached ($10 lost today)" };
  const maxTrades = x.weekend ? r.weekendMaxTrades : r.weekdayMaxTrades;
  if (x.tradesToday >= maxTrades) return { decision: "no action", reason: `daily trade limit reached (${maxTrades})` };
  if (x.stock && x.finalCheck) return { decision: "no action", reason: "too close to the 3:55 PM ET close-out, no new stock buys" };
  if (x.fast == null || x.slow == null) return { decision: "no action", reason: "not enough 5-minute candles yet" };
  if (x.signal !== "buy") return { decision: "no action", reason: "no signal" };
  if (x.alpacaHolding) return { decision: "no action", reason: "buy signal, but a position is already open at Alpaca" };
  if (x.signalAlreadyUsed) return { decision: "no action", reason: "buy signal already used, never twice for one signal" };
  return { decision: "would buy", reason: `buy signal on ${x.asset}: fast average crossed above slow, would buy $${r.tradeUsd}` };
}

export type Scan = {
  symbol: string;
  stock: boolean;
  open: boolean; // can be traded right now
  price: number;
  fast: number | null;
  slow: number | null;
  signal: "buy" | "sell" | "none";
  key: string; // identifies this signal so it is never used twice
};

/** Of all open markets with a fresh buy signal, the strongest one (fast line furthest above the slow line). */
export function pickMarket(scans: Scan[], usedKey: string | null, finalCheck: boolean): { pick: Scan | null; closest: Scan | null } {
  const open = scans.filter((s) => s.open && s.fast != null && s.slow != null && s.price > 0);
  const gap = (s: Scan) => (s.fast! - s.slow!) / s.slow!;
  const candidates = open
    .filter((s) => s.signal === "buy" && s.key !== usedKey && !(s.stock && finalCheck))
    .sort((a, b) => gap(b) - gap(a));
  // For the log when nothing qualifies: the market whose fast line is closest to crossing up.
  const below = open.filter((s) => s.fast! <= s.slow!).sort((a, b) => gap(b) - gap(a));
  const closest = below[0] ?? [...open].sort((a, b) => gap(a) - gap(b))[0] ?? null;
  return { pick: candidates[0] ?? null, closest };
}

/** RSI (14): how strong the recent rises were compared with the recent falls, 0 to 100. */
export function rsi(closes: number[], n = 14): number | null {
  if (closes.length < n + 1) return null;
  let gain = 0, loss = 0;
  for (let i = 1; i <= n; i++) {
    const d = closes[i] - closes[i - 1];
    if (d >= 0) gain += d; else loss -= d;
  }
  gain /= n;
  loss /= n;
  for (let i = n + 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    gain = (gain * (n - 1) + Math.max(d, 0)) / n;
    loss = (loss * (n - 1) + Math.max(-d, 0)) / n;
  }
  if (loss === 0) return gain === 0 ? 50 : 100;
  return 100 - 100 / (1 + gain / loss);
}

export type Reading = {
  bias: "bullish" | "bearish" | "sideways" | "unknown";
  score: number; // 0 = very bearish, 50 = neutral, 100 = very bullish
  rsi: number | null;
  mom1h: number | null; // % change over the last 12 five-minute candles
  gapPct: number | null; // how far the fast line is above (+) or below (-) the slow line, in %
  volPct: number | null; // average candle size in % (how jumpy the market is)
  action: string; // one short label for the app
  notes: string[]; // plain sentences explaining the reading
};

/** The agent's live reading of one market, in numbers and plain words. Educational, the same rules the agent uses. */
export function readMarket(closes: number[], ohlc: { h: number; l: number }[], price: number, open: boolean): Reading {
  const x = crossover(closes);
  const r = rsi(closes);
  const p = price || closes[closes.length - 1] || 0;
  const back = closes.length > 12 ? closes[closes.length - 13] : null;
  const mom1h = back ? (p - back) / back * 100 : null;
  const gapPct = x.fastNow != null && x.slowNow != null ? (x.fastNow - x.slowNow) / x.slowNow * 100 : null;
  const last = ohlc.slice(-24);
  const volPct = last.length && p ? last.reduce((s, b, i) => s + (b.h - b.l) / (closes[closes.length - last.length + i] || p), 0) / last.length * 100 : null;
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
  if (gapPct == null || x.slowNow == null) {
    return { bias: "unknown", score: 50, rsi: r, mom1h, gapPct, volPct, action: "WAITING FOR DATA", notes: ["Not enough 5-minute candles yet to read this market."] };
  }
  const score = Math.round(clamp(50 + clamp(gapPct * 60, -25, 25) + clamp((mom1h ?? 0) * 12, -15, 15) + clamp(((r ?? 50) - 50) * 0.4, -10, 10), 0, 100));
  const flat = Math.abs(gapPct) < 0.02;
  const bias = flat ? "sideways" : x.fastNow! > x.slowNow && p >= x.slowNow ? "bullish" : x.fastNow! < x.slowNow && p <= x.slowNow ? "bearish" : "sideways";
  let action: string;
  if (!open) action = "MARKET CLOSED";
  else if (x.signal === "buy") action = "BUY SIGNAL";
  else if (x.signal === "sell") action = "SELL SIGNAL";
  else if (bias === "bullish") action = "UPTREND · WAIT FOR ENTRY";
  else if (bias === "bearish") action = "DOWNTREND · STAY OUT";
  else action = "SIDEWAYS · NO EDGE";

  const notes: string[] = [];
  if (x.signal === "buy") notes.push("The fast line just crossed ABOVE the slow line: a fresh buy signal. This is the moment the agent buys.");
  else if (x.signal === "sell") notes.push("The fast line just crossed BELOW the slow line: a fresh sell signal. A trade here would be closed.");
  else if (bias === "bullish") notes.push("The fast line is above the slow line and the price is above both: buyers are in control. The cross happened earlier, so buying now would be late.");
  else if (bias === "bearish") notes.push("The fast line is below the slow line and the price is below both: sellers are in control. The agent does not buy falling markets.");
  else notes.push("The two lines are close together or mixed: no clear direction. Signals here often fail, so patience is best.");
  if (r != null) {
    if (r >= 70) notes.push(`RSI is ${r.toFixed(0)}: stretched (overbought). Prices rose fast and often pause or pull back.`);
    else if (r <= 30) notes.push(`RSI is ${r.toFixed(0)}: oversold. Prices fell fast and often bounce, but a falling trend can keep falling.`);
    else if (r >= 55) notes.push(`RSI is ${r.toFixed(0)}: healthy buying strength.`);
    else if (r <= 45) notes.push(`RSI is ${r.toFixed(0)}: sellers are a little stronger.`);
    else notes.push(`RSI is ${r.toFixed(0)}: balanced between buyers and sellers.`);
  }
  if (mom1h != null) notes.push(`In the last hour the price ${mom1h >= 0 ? "rose" : "fell"} ${Math.abs(mom1h).toFixed(2)}%.`);
  if (volPct != null) notes.push(volPct > 0.35 ? `It is jumpy right now (candles average ${volPct.toFixed(2)}%), so the +3% target and -1.5% stop can be hit quickly.` : `It is calm right now (candles average ${volPct.toFixed(2)}%).`);
  if (!open) notes.push("The stock market is closed, so this market cannot be traded until it opens.");
  return { bias, score, rsi: r, mom1h, gapPct, volPct, action, notes };
}

/** The last few hours for the app's chart: candles, fast line and slow line per 5-minute candle, plus the trend. */
export function buildChart(times: string[], closes: number[], points = 48, ohlc?: { o: number; h: number; l: number }[]) {
  const out: { t: string; o: number; h: number; l: number; c: number; f: number | null; s: number | null }[] = [];
  const from = Math.max(0, closes.length - points);
  for (let i = from; i < closes.length; i++) {
    const upto = closes.slice(0, i + 1);
    const b = ohlc?.[i];
    out.push({
      t: times[i], o: b?.o ?? closes[i], h: b?.h ?? closes[i], l: b?.l ?? closes[i], c: closes[i],
      f: sma(upto, PA_RULES.fastMa), s: sma(upto, PA_RULES.slowMa),
    });
  }
  const x = crossover(closes);
  const trend = x.fastNow == null || x.slowNow == null ? "unknown" : x.fastNow > x.slowNow ? "up" : x.fastNow < x.slowNow ? "down" : "flat";
  return { points: out, trend, signal: x.signal, fast: x.fastNow, slow: x.slowNow };
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
    signal: AbortSignal.timeout(15000),
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

type Series = { closes: number[]; times: string[]; ohlc: { o: number; h: number; l: number }[]; price: number; lastBarAt: string };

/** All watchlist markets in a handful of calls: one bars call and one latest-price call for stocks, the same for crypto. */
async function readMarkets(k: Keys): Promise<Record<string, Series>> {
  const stocks = PA_MARKETS.filter((m) => m.kind === "stock").map((m) => m.symbol);
  const coins = PA_MARKETS.filter((m) => m.kind === "crypto").map((m) => m.symbol);
  const stockStart = new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString();
  const coinStart = new Date(Date.now() - 10 * 3600 * 1000).toISOString();

  async function pagedBars(path: string): Promise<Record<string, any[]>> {
    const all: Record<string, any[]> = {};
    let token = "";
    for (let page = 0; page < 4; page++) {
      const b = await aGet(DATA_BASE, path + (token ? `&page_token=${encodeURIComponent(token)}` : ""), k);
      for (const [sym, rows] of Object.entries(b?.bars ?? {})) all[sym] = [...(all[sym] ?? []), ...(rows as any[])];
      token = b?.next_page_token ?? "";
      if (!token) break;
    }
    return all;
  }

  const enc = (xs: string[]) => xs.map(encodeURIComponent).join(",");
  const [sBars, sLast, cBars, cLast] = await Promise.all([
    pagedBars(`/v2/stocks/bars?symbols=${enc(stocks)}&timeframe=5Min&start=${stockStart}&limit=10000&feed=iex`),
    aGet(DATA_BASE, `/v2/stocks/trades/latest?symbols=${enc(stocks)}&feed=iex`, k),
    pagedBars(`/v1beta3/crypto/us/bars?symbols=${enc(coins)}&timeframe=5Min&start=${coinStart}&limit=10000`),
    aGet(DATA_BASE, `/v1beta3/crypto/us/latest/trades?symbols=${enc(coins)}`, k),
  ]);

  const now = Date.now();
  const out: Record<string, Series> = {};
  for (const m of PA_MARKETS) {
    const raw = (m.kind === "stock" ? sBars : cBars)[m.symbol] ?? [];
    // Oldest first, and only finished candles (a candle that started less than 5 minutes ago is still moving).
    const done = raw
      .map((x: any) => ({ t: String(x.t), o: Number(x.o), h: Number(x.h), l: Number(x.l), c: Number(x.c) }))
      .filter((x) => Number.isFinite(x.c) && Date.parse(x.t) + 5 * 60 * 1000 <= now)
      .sort((a, b) => Date.parse(a.t) - Date.parse(b.t))
      .slice(-80);
    let price = Number((m.kind === "stock" ? sLast : cLast)?.trades?.[m.symbol]?.p ?? 0);
    if (!price && done.length) price = done[done.length - 1].c;
    out[m.symbol] = {
      closes: done.map((x) => x.c), times: done.map((x) => x.t), ohlc: done.map((x) => ({ o: x.o, h: x.h, l: x.l })),
      price, lastBarAt: done.length ? done[done.length - 1].t : "",
    };
  }
  return out;
}

/** What the app shows for each market: price, change over the chart, trend, signal and the chart itself. */
function marketCards(series: Record<string, Series>, stockOpen: boolean) {
  return PA_MARKETS.map((m) => {
    const s = series[m.symbol];
    const chart = buildChart(s?.times ?? [], s?.closes ?? [], 48, s?.ohlc);
    const first = chart.points[0]?.c ?? 0;
    const price = s?.price ?? 0;
    const open = m.kind === "crypto" || stockOpen;
    return {
      symbol: m.symbol, name: m.name, kind: m.kind, open,
      price, changePct: first ? round2((price - first) / first * 100) : 0,
      trend: chart.trend, signal: chart.signal, fast: chart.fast, slow: chart.slow, chart,
      reading: readMarket(s?.closes ?? [], s?.ohlc ?? [], price, open),
    };
  });
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

/** The automatic 15-minute check. This is the ONLY place that decides would-buy / would-sell: the app can look,
 *  but it can never make the agent trade. */
async function runCheck(db: any): Promise<Record<string, unknown>> {
  const state = await loadState(db);
  const now = new Date();
  const et = etParts(now);
  const watch = "watchlist";

  // Never run two checks for the same quarter hour (a cron retry).
  const last = state.last_tick_at ? Date.parse(state.last_tick_at) : 0;
  if (now.getTime() - last < 10 * 60 * 1000) return { ok: true, skipped: "already checked in the last 10 minutes" };
  await saveState(db, { last_tick_at: now.toISOString() });

  if (!state.enabled) return { ok: true, skipped: "agent is stopped" };

  const cfg = readConfig();
  if (!cfg.keys) {
    await writeLog(db, { kind: "error", asset: watch, decision: "no action", reason: cfg.problem });
    return { ok: false, error: cfg.problem };
  }

  // Account, the stock market clock (knows holidays and early closes) and all 10 markets.
  let acct: Awaited<ReturnType<typeof readAccount>>;
  let series: Record<string, Series>;
  let clock: any;
  try {
    [acct, series, clock] = await Promise.all([readAccount(cfg.keys), readMarkets(cfg.keys), aGet(PAPER_BASE, "/v2/clock", cfg.keys)]);
  } catch (e) {
    await writeLog(db, { kind: "error", asset: watch, decision: "no action", reason: `Alpaca connection failed (${String((e as Error).message)}), no action taken` });
    return { ok: false, error: "Alpaca connection failed" };
  }
  const stockOpen = !!clock?.is_open;
  // The 3:45 PM check is the last stock check before 3:55 PM: stock positions close, no new stock buys.
  const finalCheck = stockOpen && !!clock?.next_close && (Date.parse(clock.next_close) - now.getTime()) / 60000 < 20;

  const day = await ensureDay(db, et, watch, acct.equity);
  const cards = marketCards(series, stockOpen);
  const scans: Scan[] = PA_MARKETS.map((m) => {
    const s = series[m.symbol];
    const x = crossover(s.closes);
    return {
      symbol: m.symbol, stock: m.kind === "stock", open: m.kind === "crypto" || stockOpen, price: s.price,
      fast: x.fastNow, slow: x.slowNow, signal: x.signal, key: `${m.symbol}|${s.lastBarAt}|${x.signal}`,
    };
  });
  const shadow: Shadow = state.shadow ?? null;
  const totalPnl = Number(state.total_pnl ?? 0);
  const dayPnl = Number(day.day_pnl ?? 0);
  const openCount = scans.filter((s) => s.open).length;
  const base = {
    weekend: et.weekend, dayPnl, totalPnl, tradesToday: Number(day.trades ?? 0), finalCheck,
    alpacaHolding: acct.positions.some((p) => p.qty !== 0),
  };

  let d: Decision;
  let focus: Scan;
  if (shadow) {
    // Holding: only the held market matters (one position at a time).
    focus = scans.find((s) => s.symbol === shadow.symbol) ?? {
      symbol: shadow.symbol, stock: !shadow.symbol.includes("/"), open: false, price: shadow.entryPrice,
      fast: null, slow: null, signal: "none", key: "",
    };
    d = decide({ ...base, asset: focus.symbol, stock: focus.stock, price: focus.price || shadow.entryPrice, signal: focus.signal,
      fast: focus.fast, slow: focus.slow, shadow, signalAlreadyUsed: false });
  } else {
    const { pick, closest } = pickMarket(scans, state.last_signal_key ?? null, finalCheck);
    focus = pick ?? closest ?? scans[0];
    if (state.brake_paused) {
      d = { decision: "no action", reason: "agent paused by the $25 brake, waiting for an admin to turn it back on" };
    } else {
      d = decide({ ...base, asset: focus.symbol, stock: focus.stock, price: focus.price, signal: pick ? "buy" : "none",
        fast: focus.fast, slow: focus.slow, shadow: null, signalAlreadyUsed: false });
      if (!pick && d.reason === "no signal") {
        d = {
          decision: "no action",
          reason: `no signal in any of the ${openCount} open markets${stockOpen ? "" : " (stock market closed, watching crypto)"}${closest ? `, closest to a buy: ${closest.symbol}` : ""}`,
        };
      }
    }
  }

  const price = focus.price || (shadow?.entryPrice ?? 0);
  const focusCard = cards.find((c) => c.symbol === focus.symbol);
  const statePatch: Record<string, unknown> = {
    snapshot: {
      ...acct, at: now.toISOString(), etTime: et.label, stockOpen, markets: cards,
      asset: focus.symbol, price, chart: focusCard?.chart ?? null,
    },
  };
  let newTotal = totalPnl;
  let newDay = dayPnl;
  if (d.decision === "would buy") {
    statePatch.shadow = { symbol: focus.symbol, qty: PA_RULES.tradeUsd / price, entryPrice: price, entryAt: now.toISOString() };
    statePatch.last_signal_key = focus.key;
    await db.from("ngmy_alpaca_agent_days").update({ trades: Number(day.trades ?? 0) + 1 }).eq("et_day", et.dayKey);
  } else if (d.decision === "would sell") {
    newTotal = round2(totalPnl + (d.pnl ?? 0));
    newDay = round2(dayPnl + (d.pnl ?? 0));
    statePatch.shadow = null;
    statePatch.total_pnl = newTotal;
    if (focus.signal === "sell") statePatch.last_signal_key = focus.key;
    await db.from("ngmy_alpaca_agent_days").update({ day_pnl: newDay }).eq("et_day", et.dayKey);
    if (newTotal <= -PA_RULES.totalLossBrakeUsd && !state.brake_paused) {
      statePatch.brake_paused = true;
      statePatch.brake_reason = `Total demo loss reached $${Math.abs(newTotal).toFixed(2)}`;
    }
  }
  await saveState(db, statePatch);

  const sig = focus.signal === "buy" ? "buy signal" : focus.signal === "sell" ? "sell signal" : "none";
  await writeLog(db, {
    kind: "check", asset: focus.symbol, price,
    fast_ma: focus.fast, slow_ma: focus.slow, signal: sig, decision: d.decision,
    reason: d.reason,
    balance: acct.equity, total_pnl: newTotal, day_pnl: newDay,
    details: {
      pnl: d.pnl ?? null, by: "cron", stockOpen, openMarkets: openCount,
      // Every market the agent looked at in this check.
      scanned: scans.map((s) => ({ s: s.symbol, p: s.price, f: s.fast, sl: s.slow, sig: s.signal, open: s.open })),
      // The money side of a pretend trade, so the app can show what went in and what came out.
      ...(d.decision === "would buy" ? { amount: PA_RULES.tradeUsd, qty: PA_RULES.tradeUsd / price, entryPrice: price } : {}),
      ...(d.decision === "would sell" && shadow ? {
        amount: PA_RULES.tradeUsd, qty: shadow.qty, entryPrice: shadow.entryPrice, exitPrice: price, entryAt: shadow.entryAt,
        outValue: round2(shadow.qty * price), pct: round2((price - shadow.entryPrice) / shadow.entryPrice * 100),
      } : {}),
    },
  });
  if (statePatch.brake_paused) {
    await writeLog(db, { kind: "control", asset: watch, decision: "no action", reason: "agent paused by the $25 brake. An admin must review and turn it back on.", total_pnl: newTotal });
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
      return { status: 200, payload: await runCheck(db) };
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

  // paCheck ("Scan now" in the app) only LOOKS: a fresh read of all markets, no decision, no log line,
  // and it does not touch the automatic check's timer.
  const forceLive = action === "paCheck";

  if (action === "paLog") {
    const limit = Math.min(Math.max(Number(body?.limit ?? 100), 10), 300);
    let q = db.from("ngmy_alpaca_agent_log").select("*").order("id", { ascending: false }).limit(limit);
    const before = Number(body?.beforeId ?? 0);
    if (before > 0) q = q.lt("id", before);
    const { data, error } = await q;
    if (error) return { status: 200, payload: { ok: false, error: error.message } };
    return { status: 200, payload: { ok: true, rows: data ?? [] } };
  }

  // paStatus (and the answer to paSet / paCheck): live read of the account and all markets when asked
  // (at most every 20 seconds), otherwise the last snapshot.
  const cfg = readConfig();
  let liveError = "";
  let clock: any = null;
  if (cfg.keys) {
    try { clock = await aGet(PAPER_BASE, "/v2/clock", cfg.keys); } catch { /* unknown */ }
  }
  const stockOpen = clock ? !!clock.is_open : null;
  if ((body?.live === true || forceLive) && cfg.keys) {
    const snapAt = state.snapshot?.at ? Date.parse(state.snapshot.at) : 0;
    if (Date.now() - snapAt > (forceLive ? 5 : 20) * 1000 || !Array.isArray(state.snapshot?.markets)) {
      try {
        const et = etParts(new Date());
        const [acct, series] = await Promise.all([readAccount(cfg.keys), readMarkets(cfg.keys)]);
        const cards = marketCards(series, !!stockOpen);
        const held = state.shadow?.symbol;
        const focus = cards.find((c) => c.symbol === held) ?? cards.find((c) => c.open) ?? cards[0];
        const live = {
          ...acct, at: new Date().toISOString(), etTime: et.label, stockOpen: !!stockOpen, markets: cards,
          asset: focus.symbol, price: focus.price, chart: focus.chart,
        };
        await saveState(db, { snapshot: live });
        state.snapshot = live;
      } catch (e) {
        liveError = `Alpaca connection failed (${String((e as Error).message)})`;
      }
    }
  }
  const etNow = etParts(new Date());
  const market = { stockOpen, weekend: etNow.weekend, nextOpen: clock?.next_open ?? null, nextClose: clock?.next_close ?? null };
  const { data: today } = await db.from("ngmy_alpaca_agent_days").select("*").eq("et_day", etNow.dayKey).maybeSingle();
  const { data: trades } = await db.from("ngmy_alpaca_agent_log").select("id,created_at,et_time,asset,price,decision,reason,details")
    .in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(40);
  const { data: closed } = await db.from("ngmy_alpaca_agent_log").select("details")
    .eq("decision", "would sell").order("id", { ascending: false }).limit(500);
  const pnls: number[] = (closed ?? []).map((r: any) => Number(r?.details?.pnl ?? 0));
  const record = { wins: pnls.filter((p) => p > 0).length, losses: pnls.filter((p) => p <= 0).length, trades: pnls.length };
  return {
    status: 200,
    payload: {
      ok: true,
      state: publicState(state),
      today: today ?? null,
      liveError,
      market,
      trades: (trades ?? []).map((t: any) => ({ ...t, details: { ...(t.details ?? {}), scanned: undefined } })),
      record,
      ticket: {
        amount: PA_RULES.tradeUsd, takeProfitPct: PA_RULES.takeProfitPct, stopLossPct: PA_RULES.stopLossPct,
        takeProfitUsd: round2(PA_RULES.tradeUsd * PA_RULES.takeProfitPct / 100), stopLossUsd: round2(PA_RULES.tradeUsd * PA_RULES.stopLossPct / 100),
        maxTradesToday: etNow.weekend ? PA_RULES.weekendMaxTrades : PA_RULES.weekdayMaxTrades,
      },
      config: {
        keysSet: !!cfg.keys,
        problem: cfg.problem,
        paperEndpoint: PAPER_BASE,
        ordersSwitchOn: cfg.ordersSwitch,
        ordersPossible: false, // Version 1: there is no order code at all.
      },
      rules: PA_RULE_LINES,
      nowEt: etNow.label,
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
