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

import { FS_ACTIONS, fastSharedPnl, handleFast } from "./fast_systems.ts";

export const PA_ACTIONS = new Set([
  "paStatus", "paLog", "paSet", "paCheck", "paTick", "paSignals", "paLearnGet", "paLearnSave",
  // Fast systems (Options, Scalper), routed to fast_systems.ts.
  "fsTick", "fsStatus", "fsSet", "fsLog",
]);

/** The newest pretend buys and sells of all three systems (main agent, Options, Scalper), newest first. Each has a
 *  unique key, so the app notifies once per trade. */
async function tradeFeed(db: any): Promise<any[]> {
  const pick = "id,created_at,asset,decision,reason,details";
  const out: any[] = [];
  try {
    const { data } = await db.from("ngmy_alpaca_agent_log").select(pick).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(8);
    for (const r of data ?? []) out.push({ key: `main:${r.id}`, system: "Signal Grid", ...trim(r) });
  } catch { /* main log unavailable */ }
  try {
    const { data } = await db.from("ngmy_fast_log").select(`${pick},system`).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(8);
    for (const r of data ?? []) out.push({ key: `fast:${r.id}`, system: r.system === "options" ? "Options" : "Scalper", ...trim(r) });
  } catch { /* fast tables not set up yet */ }
  return out.sort((a, b) => Date.parse(b.at) - Date.parse(a.at));

  function trim(r: any) {
    const d = r.details ?? {};
    return {
      at: r.created_at, asset: r.asset, decision: r.decision, reason: r.reason,
      pnl: d.pnl ?? null, amount: d.amount ?? null,
      option: d.option ? { strike: d.option.strike, expiry: d.option.expiry, cost: d.option.cost, right: d.option.right ?? "call", underlying: r.asset } : null,
      lossText: d.lossText ?? null,
    };
  }
}

/** Every closed pretend trade of the main agent added together (for the shared balance). */
async function landingClosedPnl(db: any): Promise<number> {
  const { data } = await db.from("ngmy_alpaca_agent_log").select("pnl:details->pnl").eq("decision", "would sell").order("id", { ascending: false }).limit(1000);
  return round2((data ?? []).reduce((s: number, r: any) => s + Number(r?.pnl ?? 0), 0));
}

/** Trading Academy lesson ids (the app has the same list). All done = signal alerts unlocked for members. */
export const PA_LESSON_IDS = ["basics", "candles", "trend", "ma", "cross", "rsi", "risk", "brakes", "hours", "practice"];

export const PAPER_BASE = "https://paper-api.alpaca.markets";
export const DATA_BASE = "https://data.alpaca.markets";

export type MarketDef = { symbol: string; name: string; kind: "stock" | "crypto" };

/** The watchlists (Nov 22, 2026): 10 stocks on weekdays while the US stock market is open, 4 coins on Saturday
 *  and Sunday (Eastern Time). All of the day's list is watched at once; the first valid entry is taken. */
export const PA_MARKETS: MarketDef[] = [
  { symbol: "SPY", name: "S&P 500 fund", kind: "stock" },
  { symbol: "QQQ", name: "Nasdaq 100 fund", kind: "stock" },
  { symbol: "AAPL", name: "Apple", kind: "stock" },
  { symbol: "MSFT", name: "Microsoft", kind: "stock" },
  { symbol: "NVDA", name: "Nvidia", kind: "stock" },
  { symbol: "AMZN", name: "Amazon", kind: "stock" },
  { symbol: "GOOGL", name: "Alphabet (Google)", kind: "stock" },
  { symbol: "META", name: "Meta", kind: "stock" },
  { symbol: "TSLA", name: "Tesla", kind: "stock" },
  { symbol: "AMD", name: "AMD", kind: "stock" },
  { symbol: "BTC/USD", name: "Bitcoin", kind: "crypto" },
  { symbol: "ETH/USD", name: "Ethereum", kind: "crypto" },
  { symbol: "SOL/USD", name: "Solana", kind: "crypto" },
  { symbol: "DOGE/USD", name: "Dogecoin", kind: "crypto" },
];

/** The 10 weekday stocks (unchanged). */
export const PA_STOCKS: MarketDef[] = PA_MARKETS.filter((m) => m.kind === "stock");

/** Nov 24, 2026 (all crypto + 20 a day): the main agent watches EVERY active, tradable USD crypto pair Alpaca
 *  offers, every day, around the clock. The list is read from Alpaca's asset list (once per Eastern day, and at
 *  every start of the server); these are only the fallback when that list cannot be read. */
export const PA_BASE_COINS: MarketDef[] = [
  ["BTC", "Bitcoin"], ["ETH", "Ethereum"], ["SOL", "Solana"], ["DOGE", "Dogecoin"], ["AVAX", "Avalanche"], ["LINK", "Chainlink"],
  ["LTC", "Litecoin"], ["BCH", "Bitcoin Cash"], ["DOT", "Polkadot"], ["UNI", "Uniswap"], ["ADA", "Cardano"], ["NEAR", "NEAR"],
  ["ATOM", "Cosmos"], ["XLM", "Stellar"], ["AAVE", "Aave"], ["GRT", "The Graph"], ["MKR", "Maker"], ["CRV", "Curve"],
  ["BAT", "Basic Attention Token"], ["SUSHI", "SushiSwap"], ["XTZ", "Tezos"], ["MANA", "Decentraland"], ["SAND", "The Sandbox"], ["ALGO", "Algorand"],
].map(([s, n]) => ({ symbol: `${s}/USD`, name: n, kind: "crypto" as const }));

/** The USD crypto pairs from Alpaca's asset list: active and tradable only. Bitcoin, Ethereum, Solana and
 *  Dogecoin first, then A to Z. */
export function cryptoFromAssets(assets: any[]): MarketDef[] {
  const first = ["BTC/USD", "ETH/USD", "SOL/USD", "DOGE/USD"];
  const out = (Array.isArray(assets) ? assets : [])
    .filter((a) => a && String(a.class ?? "crypto") === "crypto" && a.status === "active" && a.tradable === true && /^[A-Z0-9]+\/USD$/.test(String(a.symbol)))
    .map((a) => ({ symbol: String(a.symbol), name: String(a.name ?? a.symbol).replace(/\s*\/\s*US Dollar.*$/i, "").trim() || String(a.symbol), kind: "crypto" as const }));
  const seen = new Set<string>();
  return out.filter((m) => !seen.has(m.symbol) && seen.add(m.symbol))
    .sort((a, b) => {
      const ia = first.indexOf(a.symbol), ib = first.indexOf(b.symbol);
      if (ia >= 0 || ib >= 0) return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      return a.symbol.localeCompare(b.symbol);
    });
}

let cryptoCache: { day: string; list: MarketDef[]; ok: boolean; at: number } | null = null;

/** Every tradable USD crypto pair on Alpaca, read once per Eastern day (GET only). If the list cannot be read,
 *  the fallback list is used and it tries again in 10 minutes. */
export async function readCryptoList(k: Keys): Promise<{ list: MarketDef[]; fromAlpaca: boolean }> {
  const day = etParts(new Date()).dayKey;
  if (cryptoCache && cryptoCache.day === day && (cryptoCache.ok || Date.now() - cryptoCache.at < 10 * 60 * 1000)) {
    return { list: cryptoCache.list, fromAlpaca: cryptoCache.ok };
  }
  try {
    const assets = await aGet(PAPER_BASE, "/v2/assets?asset_class=crypto&status=active", k);
    const list = cryptoFromAssets(assets);
    if (!list.length) throw new Error("empty");
    cryptoCache = { day, list, ok: true, at: Date.now() };
  } catch {
    cryptoCache = { day, list: cryptoCache?.ok ? cryptoCache.list : PA_BASE_COINS, ok: false, at: Date.now() };
  }
  return { list: cryptoCache.list, fromAlpaca: cryptoCache.ok };
}

/** The main agent's markets: the 10 stocks and every crypto pair. */
export function mainMarkets(crypto: MarketDef[] = PA_BASE_COINS): MarketDef[] {
  return [...PA_STOCKS, ...crypto];
}

/** Today's list: the 10 stocks on weekdays plus all crypto every day (whether open or not). */
export function todaysList(weekend: boolean, crypto: MarketDef[] = PA_MARKETS.filter((m) => m.kind === "crypto")): string[] {
  return [...(weekend ? [] : PA_STOCKS), ...crypto].map((m) => m.symbol);
}

/** The markets the agent may buy right now: all crypto, any hour, any day; plus the 10 stocks on a weekday while
 *  the stock market is open (the Alpaca clock knows holidays). */
export function activeMarkets(weekend: boolean, stockOpen: boolean, crypto: MarketDef[] = PA_MARKETS.filter((m) => m.kind === "crypto")): string[] {
  return [...(!weekend && stockOpen ? PA_STOCKS : []), ...crypto].map((m) => m.symbol);
}

/** When a market is NOT traded right now, a short reason for the app. Crypto is never off. */
export function offNote(symbol: string, weekend: boolean): string {
  if (symbol.includes("/")) return "";
  return weekend ? "weekdays only" : "closed";
}

/** Pace checkpoints for 20 a day, every day (ET minutes from midnight -> trades done by then). */
export const PA_PACE: [number, number][] = [[0, 0], [360, 4], [600, 8], [840, 12], [1080, 16], [1320, 19], [1435, 20]];
export const PA_PACE_LINE = "Pace: 6:00 AM 4 · 10:00 AM 8 · 2:00 PM 12 · 6:00 PM 16 · 10:00 PM 19 · 11:55 PM 20";

/** The main agent's pace for 20 a day. Behind the pace, in order: (1) a shorter max hold for new trades
 *  (2 hours -> 60 min from 1 behind -> 30 min from 2 behind); (2) from 3 behind, the top 5 valid entries are
 *  considered instead of the top 3. The not-falling rule never relaxes. `impossible`: 20 can no longer be
 *  reached (each trade needs at least two 5-minute checks, one position at a time). */
export function mainPace(et: { hour: number; minute: number }, trades: number) {
  const mins = et.hour * 60 + et.minute;
  let expected = 20;
  for (let i = 1; i < PA_PACE.length; i++) {
    if (mins <= PA_PACE[i][0]) {
      const [m0, t0] = PA_PACE[i - 1], [m1, t1] = PA_PACE[i];
      expected = Math.floor(t0 + (t1 - t0) * (mins - m0) / (m1 - m0));
      break;
    }
  }
  const target = PA_RULES.maxTradesPerDay;
  const done = trades >= target;
  const deficit = done ? 0 : Math.max(0, expected - trades);
  const maxHold = deficit >= 2 ? PA_RULES.holdSteps[2] : deficit >= 1 ? PA_RULES.holdSteps[1] : PA_RULES.holdSteps[0];
  const topN = deficit >= 3 ? 5 : 3;
  const level = deficit >= 3 ? 3 : deficit >= 2 ? 2 : deficit >= 1 ? 1 : 0;
  const lines: string[] = [];
  if (deficit >= 1) lines.push(`Step 1: ${deficit} behind the pace, so new trades are held ${maxHold} minutes at most (not 2 hours), to free the one position slot sooner.`);
  if (deficit >= 3) lines.push("Step 2: it now considers the top 5 valid entries instead of the top 3.");
  const minutesLeft = Math.max(0, 24 * 60 - mins);
  const impossible = !done && trades + Math.floor(minutesLeft / (2 * PA_RULES.checkEveryMinutes)) < target;
  return { target, trades, expected, deficit, remaining: Math.max(0, target - trades), done, maxHold, topN, level, lines, impossible, minutesLeft, checkpoints: PA_PACE_LINE };
}

/** The big trend filter (fix 2): the slow average must be HIGHER than it was 1 hour ago (12 five-minute candles)
 *  and the price must be ABOVE the slow average. Flat or falling: no buy, even when the fast line crosses up. */
export function bigTrend(closes: number[], price: number, slow = PA_RULES.slowMa, hourCandles = 12) {
  const slowNow = sma(closes, slow);
  const slowHourAgo = closes.length >= slow + hourCandles ? sma(closes.slice(0, closes.length - hourCandles), slow) : null;
  const p = price || closes[closes.length - 1] || 0;
  if (slowNow == null || slowHourAgo == null) {
    return { ok: false, slowNow, slowHourAgo, rising: false, priceAbove: false, why: "not enough candles to see the 1-hour trend" };
  }
  const rising = slowNow > slowHourAgo;
  const priceAbove = p > slowNow;
  const chg = (slowNow - slowHourAgo) / slowHourAgo * 100;
  const why = !rising
    ? `the big trend is ${chg === 0 ? "flat" : "falling"} (slow average ${chg.toFixed(3)}% versus 1 hour ago)`
    : !priceAbove
      ? "the price is below the slow average"
      : `the big trend is rising (slow average +${chg.toFixed(3)}% versus 1 hour ago) and the price is above it`;
  return { ok: rising && priceAbove, slowNow, slowHourAgo, rising, priceAbove, why };
}

/** The same big trend rule for a signal in either direction. Up: slow average higher than 1 hour ago and price
 *  above it. Down (the mirror): slow average lower than 1 hour ago and price below it. */
export function bigTrendFor(closes: number[], price: number, dir: "up" | "down", hourCandles = 12) {
  const b = bigTrend(closes, price, PA_RULES.slowMa, hourCandles);
  if (dir === "up" || b.slowNow == null || b.slowHourAgo == null) return b;
  const p = price || closes[closes.length - 1] || 0;
  const falling = b.slowNow < b.slowHourAgo;
  const priceBelow = p < b.slowNow;
  const chg = (b.slowNow - b.slowHourAgo) / b.slowHourAgo * 100;
  const why = !falling
    ? `the big trend is ${chg === 0 ? "flat" : "rising"} (slow average ${chg >= 0 ? "+" : ""}${chg.toFixed(3)}% versus 1 hour ago)`
    : !priceBelow
      ? "the price is above the slow average"
      : `the big trend is falling (slow average ${chg.toFixed(3)}% versus 1 hour ago) and the price is below it`;
  return { ...b, ok: falling && priceBelow, why };
}

/** Forex pairs for Live signals only (the agent does not trade these). Real interbank prices, 1-minute candles,
 *  from Yahoo Finance's public chart feed. Only pairs that update every minute are listed. */
export const PA_FX: { symbol: string; yahoo: string; name: string }[] = [
  { symbol: "EUR/USD", yahoo: "EURUSD=X", name: "Euro / US dollar" },
  { symbol: "GBP/USD", yahoo: "GBPUSD=X", name: "British pound / US dollar" },
  { symbol: "AUD/USD", yahoo: "AUDUSD=X", name: "Australian dollar / US dollar" },
  { symbol: "USD/JPY", yahoo: "USDJPY=X", name: "US dollar / Japanese yen" },
  { symbol: "USD/CAD", yahoo: "USDCAD=X", name: "US dollar / Canadian dollar" },
  { symbol: "EUR/GBP", yahoo: "EURGBP=X", name: "Euro / British pound" },
  { symbol: "EUR/CHF", yahoo: "EURCHF=X", name: "Euro / Swiss franc" },
  { symbol: "EUR/NZD", yahoo: "EURNZD=X", name: "Euro / New Zealand dollar" },
  { symbol: "EUR/TRY", yahoo: "EURTRY=X", name: "Euro / Turkish lira" },
  { symbol: "GBP/CAD", yahoo: "GBPCAD=X", name: "British pound / Canadian dollar" },
  { symbol: "GBP/JPY", yahoo: "GBPJPY=X", name: "British pound / Japanese yen" },
  { symbol: "CAD/CHF", yahoo: "CADCHF=X", name: "Canadian dollar / Swiss franc" },
  { symbol: "CAD/JPY", yahoo: "CADJPY=X", name: "Canadian dollar / Japanese yen" },
  { symbol: "CHF/JPY", yahoo: "CHFJPY=X", name: "Swiss franc / Japanese yen" },
  { symbol: "CHF/NOK", yahoo: "CHFNOK=X", name: "Swiss franc / Norwegian krone" },
  { symbol: "AUD/CAD", yahoo: "AUDCAD=X", name: "Australian dollar / Canadian dollar" },
  { symbol: "AUD/NZD", yahoo: "AUDNZD=X", name: "Australian dollar / New Zealand dollar" },
  { symbol: "USD/THB", yahoo: "USDTHB=X", name: "US dollar / Thai baht" },
];

/** Marks log lines made under the $100 / +$50 / -$50 rules (Nov 22, 2026), for their own win rate. */
export const PA_RULES_TAG = "usd100";

export const PA_RULES = {
  version: 1,
  readOnly: true,
  tradeUsd: 100, // per trade: $100 of the stock (weekdays) or coin (weekends) itself
  fastMa: 9,
  slowMa: 21,
  candleMinutes: 5,
  checkEveryMinutes: 5, // every market on the day's list is checked for a new buy every 5 minutes (Nov 22)
  exitCheckMinutes: 5, // an open position is checked every 5 minutes (take profit, stop loss, turn down)
  takeProfitUsd: 50, // sell when the position is up $50
  stopLossUsd: 50, // sell when the position is down $50 (same size as the win: 5 wins out of 10 breaks even)
  dailyLossStopUsd: 100, // Nov 24: widened from $50 so 20 trades a day is possible
  totalLossBrakeUsd: 200, // Nov 24: widened from $100
  optionMaxPremiumUsd: 120, // (option buying is off since Nov 22; kept so an option bought earlier still prices and exits)
  optionMinDays: 7, // the nearest expiry at least 7 days away
  maxTradesPerDay: 20, // Nov 24: 20 a day, every day (cap and target), all markets together
  weekdayMaxTrades: 20,
  weekendMaxTrades: 20,
  maxHoldMin: 120, // a trade that hits no exit closes at its max hold (2 hours; shorter when behind the pace)
  holdSteps: [120, 60, 30],
  closeOutEt: "3:55 PM",
  maxMarkets: 200,
};

export const PA_BRAKE_NOTE = "Brakes widened on Nov 24 so 20 trades a day is possible: daily stop -$100 and total brake -$200 (were -$50 and -$100). " +
  "With 20 trades a day, the old -$50 daily stop could end the day after a single bad trade. The real protection stays the entry rule: it never buys a falling market.";

export const PA_RULE_LINES: string[] = [
  "Version 1 is read-only: it logs what it WOULD do and places no orders.",
  "Alpaca paper account only. No live keys, no live endpoint, no real money.",
  "$100 per trade: $100 of the stock or coin itself. One position at a time across all markets. No options, no margin, no short selling.",
  "All times are Eastern Time (New York).",
  "Weekdays: it watches 10 stocks (SPY, QQQ, AAPL, MSFT, NVDA, AMZN, GOOGL, META, TSLA, AMD) while the US stock market is open (9:30 AM to 4:00 PM ET, never on market holidays).",
  "Crypto: EVERY tradable USD crypto pair on Alpaca (Bitcoin, Ethereum, Solana, Dogecoin and all the others), every day, 24 hours a day, nights and weekends too. The list is read from Alpaca each day; a pair that is delisted or not tradable is dropped automatically and shown on screen.",
  "Every 5 minutes it looks at ALL markets open at that moment in the same check (stocks and crypto in stock market hours, crypto only otherwise) and buys the one that gives a valid entry first (if several do at the same check, the strongest one). While it holds a position it checks the exit rules every 5 minutes.",
  "Buy signal, ALL of these: the fast average (9 candles) crosses above the slow average (21 candles) on 5-minute candles, the slow average is higher than 1 hour ago (the big trend is rising), the price is above the slow average, and no position is held.",
  "Never buys into a falling big trend: if the slow average is flat or falling, no trade, even when the fast line crosses up.",
  "Sell signal: the fast average crosses back below the slow average.",
  "Take profit: sell when the position is up $50. Stop loss: sell when it is down $50. Win and loss are the same size, so winning 5 out of 10 trades breaks even.",
  "Weekdays: sell everything by 3:55 PM ET. No overnight stock positions, and no new stock buys after 3:40 PM ET.",
  "20 trades a day, every day (target and cap), all markets together, only on a real signal. Never forced. Pace: 6:00 AM 4, 10:00 AM 8, 2:00 PM 12, 6:00 PM 16, 10:00 PM 19, 11:55 PM 20.",
  "Max hold: a trade that hits no exit is closed after 2 hours. Behind the pace, new trades get 60, then 30 minutes, and from 3 behind it considers the top 5 valid entries instead of the top 3. The not-falling rule never relaxes.",
  "Daily stop: if the day loses $100, no more buys that day (was $50; with 20 trades a day one bad trade could have ended the day).",
  "Total brake: if total demo losses reach $200, the agent pauses until an admin turns it back on (was $100).",
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

/** A SPY call option contract (pretend). Prices are per share; one contract = 100 shares. */
export type OptionInfo = { contract: string; strike: number; expiry: string; premium: number; cost: number; right?: "call" | "put" };

/** The pretend position. For an option: symbol "SPY" (the market it follows), qty 1 contract, mult 100,
 *  entryPrice = the premium per share paid, and `option` has the contract. */
export type Shadow = { symbol: string; qty: number; entryPrice: number; entryAt: string; mult?: number; option?: OptionInfo } | null;

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
  finalCheck: boolean; // stocks: close any position now (the 3:55 PM ET rule)
  lateForBuys?: boolean; // stocks: too close to the close for a new buy (default: finalCheck)
  alpacaHolding: boolean; // a real position is already open at Alpaca
  signalAlreadyUsed: boolean;
  /** Fix 2: the big trend filter. A buy needs the slow average rising over the last hour and the price above it. */
  bigTrend?: { ok: boolean; why: string };
  /** Nov 24: minutes the position has been held, and its max hold (2 hours, or 60 / 30 minutes behind the pace). */
  heldMin?: number;
  maxHoldMin?: number;
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
    // x.price = the current price of what is held (for an option: its premium per share now).
    const mult = x.shadow.mult ?? 1;
    const pnl = round2(x.shadow.qty * mult * (x.price - x.shadow.entryPrice));
    const money = `${pnl >= 0 ? "+" : "-"}$${Math.abs(pnl).toFixed(2)}`;
    if (pnl >= r.takeProfitUsd) return { decision: "would sell", reason: `take profit hit (${money})`, pnl };
    if (pnl <= -r.stopLossUsd) return { decision: "would sell", reason: `stop loss hit (${money})`, pnl };
    // The max hold: closed at the last 5-minute check before it is reached, so one position never blocks the day.
    const hold = x.maxHoldMin ?? (x.shadow as any).maxHold ?? r.maxHoldMin;
    if (x.heldMin != null && x.heldMin >= hold - r.exitCheckMinutes) {
      return { decision: "would sell", reason: `max hold reached: closed after ${Math.floor(x.heldMin)} min (max ${hold} min) (${money})`, pnl };
    }
    if (x.stock && x.finalCheck) return { decision: "would sell", reason: `3:55 PM ET rule, no overnight stock positions (${money})`, pnl };
    if (x.signal === "sell") return { decision: "would sell", reason: `sell signal: fast average crossed below slow (${money})`, pnl };
    const what = x.shadow.option ? `SPY $${x.shadow.option.strike} call` : `${x.asset} trade`;
    return {
      decision: "hold",
      reason: `still holding the same ${what} (${money}), waiting for +$${r.takeProfitUsd}, -$${r.stopLossUsd} or a turn down`,
    };
  }
  if (x.totalPnl <= -r.totalLossBrakeUsd) return { decision: "no action", reason: `agent paused by the $${r.totalLossBrakeUsd} brake` };
  if (x.dayPnl <= -r.dailyLossStopUsd) return { decision: "no action", reason: `daily stop reached ($${r.dailyLossStopUsd} lost today)` };
  if (x.tradesToday >= r.maxTradesPerDay) return { decision: "no action", reason: `daily target reached (${r.maxTradesPerDay} of ${r.maxTradesPerDay})` };
  if (x.stock && (x.lateForBuys ?? x.finalCheck)) return { decision: "no action", reason: "too close to the 3:55 PM ET close-out, no new stock buys" };
  if (x.fast == null || x.slow == null) return { decision: "no action", reason: "not enough 5-minute candles yet" };
  if (x.signal !== "buy") return { decision: "no action", reason: "no signal" };
  if (!x.bigTrend || !x.bigTrend.ok) {
    return {
      decision: "no action",
      reason: `fast average crossed above slow on ${x.asset}, but ${x.bigTrend?.why ?? "the big trend is unknown"}: never buys into a falling big trend, no trade`,
    };
  }
  if (x.alpacaHolding) return { decision: "no action", reason: "buy signal, but a position is already open at Alpaca" };
  if (x.signalAlreadyUsed) return { decision: "no action", reason: "buy signal already used, never twice for one signal" };
  return { decision: "would buy", reason: `buy signal on ${x.asset}: fast average crossed above slow and ${x.bigTrend.why}, would buy $${r.tradeUsd}` };
}

/** An open pretend position at a price: what it is worth and its win or loss in dollars. */
export function heldMark(s: NonNullable<Shadow>, price: number) {
  const m = s.mult ?? 1;
  const p = price || s.entryPrice;
  return {
    price: p, cost: round2(s.qty * m * s.entryPrice), value: round2(s.qty * m * p), pnl: round2(s.qty * m * (p - s.entryPrice)),
    priced: price > 0,
  };
}

/** When the fast line crossed above (or below) the slow line in the last 3 candles: that candle's time.
 *  It names the signal, so checking every 5 minutes never buys the same cross twice. */
export function crossAt(closes: number[], times: string[]): string {
  for (let k = Math.max(1, closes.length - 2); k <= closes.length; k++) {
    if (crossover(closes.slice(0, k), PA_RULES.fastMa, PA_RULES.slowMa, 1).signal !== "none") return times[k - 1] ?? String(k);
  }
  return "";
}

/** "YYYY-MM-DD" plus n days. */
export function addDays(dayKey: string, n: number): string {
  const [y, m, d] = dayKey.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}

/** The SPY call to buy: the nearest expiry at least 7 days after today (Eastern), and in it the strike closest to the
 *  SPY price (at the money; on a tie the lower strike). Pure, so it is tested. */
export function pickOption(
  contracts: { symbol: string; strike: number; expiry: string }[],
  spot: number,
  todayKey: string,
  minDays = PA_RULES.optionMinDays,
): { symbol: string; strike: number; expiry: string } | null {
  const minExpiry = addDays(todayKey, minDays);
  const ok = contracts.filter((c) => c.expiry >= minExpiry && c.strike > 0);
  if (!ok.length || !(spot > 0)) return null;
  const expiry = ok.map((c) => c.expiry).sort()[0];
  return ok.filter((c) => c.expiry === expiry)
    .sort((a, b) => Math.abs(a.strike - spot) - Math.abs(b.strike - spot) || a.strike - b.strike)[0];
}

/** Whether the picked contract fits the budget: one contract = 100 x the premium, at most $120. */
export function optionFits(premiumPerShare: number): { ok: boolean; cost: number } {
  const cost = round2(premiumPerShare * 100);
  return { ok: premiumPerShare > 0 && cost <= PA_RULES.optionMaxPremiumUsd, cost };
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
  big?: { ok: boolean; why: string }; // the big trend filter (fix 2)
};

/** Of all open markets with a VALID entry (a fresh cross up AND the big trend rising, when known), the first one;
 *  if several are valid at the same check, the strongest (fast line furthest above the slow line).
 *  `blocked` = markets that crossed up but failed the big trend rule, for the log. */
export function pickMarket(scans: Scan[], usedKey: string | null, finalCheck: boolean, topN = 3): { pick: Scan | null; closest: Scan | null; blocked: Scan[]; top: Scan[] } {
  const open = scans.filter((s) => s.open && s.fast != null && s.slow != null && s.price > 0);
  const gap = (s: Scan) => (s.fast! - s.slow!) / s.slow!;
  const crossed = open.filter((s) => s.signal === "buy" && s.key !== usedKey && !(s.stock && finalCheck));
  const candidates = crossed.filter((s) => s.big?.ok !== false).sort((a, b) => gap(b) - gap(a));
  const blocked = crossed.filter((s) => s.big?.ok === false);
  // For the log when nothing qualifies: the market whose fast line is closest to crossing up.
  const below = open.filter((s) => s.fast! <= s.slow!).sort((a, b) => gap(b) - gap(a));
  const closest = below[0] ?? [...open].sort((a, b) => gap(a) - gap(b))[0] ?? null;
  // The valid entries ranked by strength; the top 3 (top 5 when behind the pace) are considered, the strongest wins.
  const top = candidates.slice(0, topN);
  return { pick: top[0] ?? null, closest, blocked, top };
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

export type Timing = {
  dir: "up" | "down" | "none";
  ageMin: number; // how long the current trend (fast line above or below slow) has lasted
  typicalMin: number | null; // how long trends in this direction usually lasted on this market recently (median)
  remainingMin: number | null; // typical minus age, never below 0
  enterWithinMin: number | null; // still early enough to enter for about this many minutes (0 = too late)
  worked: number; // past trends in this direction that ended in the right direction
  of: number; // past trends in this direction measured
};

/** Measures every past up and down trend (fast line above / below slow line) on this market's candles:
 *  how long they lasted and how often the price really moved that way. An estimate from recent history,
 *  never a promise. */
export function runStats(closes: number[], candleMin: number, fast = PA_RULES.fastMa, slow = PA_RULES.slowMa): Timing {
  const none: Timing = { dir: "none", ageMin: 0, typicalMin: null, remainingMin: null, enterWithinMin: null, worked: 0, of: 0 };
  if (closes.length < slow + 5) return none;
  const dirs: number[] = [];
  let fs = 0, ss = 0;
  for (let i = 0; i < closes.length; i++) {
    fs += closes[i];
    ss += closes[i];
    if (i >= fast) fs -= closes[i - fast];
    if (i >= slow) ss -= closes[i - slow];
    if (i >= slow - 1) dirs.push(Math.sign(fs / fast - ss / slow));
    else dirs.push(0);
  }
  // Runs of the same direction: [start, end] candle indexes.
  const runs: { d: number; s: number; e: number }[] = [];
  for (let i = slow - 1; i < dirs.length; i++) {
    const d = dirs[i];
    if (d === 0) continue;
    const last = runs[runs.length - 1];
    if (last && last.d === d && last.e === i - 1) last.e = i;
    else runs.push({ d, s: i, e: i });
  }
  if (!runs.length) return none;
  const cur = runs[runs.length - 1];
  const done = runs.slice(0, -1).filter((r) => r.d === cur.d && r.s > slow - 1); // skip the first, cut-off run
  const lens = done.map((r) => r.e - r.s + 1).sort((a, b) => a - b);
  const median = lens.length ? lens[Math.floor(lens.length / 2)] : null;
  const worked = done.filter((r) => (r.d > 0 ? closes[r.e] > closes[r.s] : closes[r.e] < closes[r.s])).length;
  const age = cur.e - cur.s + 1;
  return {
    dir: cur.d > 0 ? "up" : "down",
    ageMin: age * candleMin,
    typicalMin: median == null ? null : median * candleMin,
    remainingMin: median == null ? null : Math.max(0, median - age) * candleMin,
    // Early part of a typical trend: the first third.
    enterWithinMin: median == null ? null : Math.max(0, Math.ceil(median / 3) - age + 1) * candleMin,
    worked,
    of: done.length,
  };
}

export type Reading = {
  bias: "bullish" | "bearish" | "sideways" | "unknown";
  score: number; // 0 = very bearish, 50 = neutral, 100 = very bullish
  rsi: number | null;
  mom1h: number | null; // % change over the last 12 five-minute candles
  gapPct: number | null; // how far the fast line is above (+) or below (-) the slow line, in %
  volPct: number | null; // average candle size in % (how jumpy the market is)
  action: string; // one short label for the app
  notes: string[]; // plain sentences explaining the reading (the first one is the decision)
  decision: Decision2; // the ONE decision shown everywhere
  dir: "up" | "down" | "none";
  timing: Timing;
  /** Set only when it is time to act RIGHT NOW: clear direction, still early, and past moves on this market
   *  went the right way at least half the time (3 or more measured). Otherwise null. */
  entry: Entry | null;
};

export type Entry = {
  dir: "up" | "down";
  withinMin: number; // minutes left in the early part of the move
  durationMin: number; // how long to stay in: about the minutes the move may have left
  typicalMin: number;
  worked: number;
  of: number;
  candleMin: number; // enter at the start of the next candle of this size (1 for forex, 5 for the agent markets)
};

/** ONE decision per market, used everywhere (label, frame, sign, alerts), so they can never disagree. */
export type Decision2 = "ENTER" | "SKIP_WEAK" | "WAIT_LATE" | "NO_DIRECTION" | "CLOSED" | "NO_DATA";

/** The "enter now" rule shared by the signal cards and the alerts: a clear direction, still early, and past
 *  moves on this market went the right way at least half the time (3 or more measured). */
export function entryNow(clear: boolean, open: boolean, t: Timing, candleMin = 1): Entry | null {
  if (!open || !clear || t.dir === "none" || t.typicalMin == null || t.enterWithinMin == null || t.remainingMin == null) return null;
  if (t.enterWithinMin <= 0 || t.remainingMin <= 0) return null;
  if (t.of < 3 || t.worked / t.of < 0.5) return null; // worse than a coin flip lately: no entry
  return {
    dir: t.dir, withinMin: t.enterWithinMin, durationMin: Math.max(candleMin, t.remainingMin), typicalMin: t.typicalMin,
    worked: t.worked, of: t.of, candleMin,
  };
}

/** The agent's live reading of one market, in numbers and plain words. Educational, the same rules the agent uses. */
export function readMarket(
  closes: number[],
  ohlc: { h: number; l: number }[],
  price: number,
  open: boolean,
  opts: { candleMin?: number; agent?: boolean; closedNote?: string } = {},
): Reading {
  const candleMin = opts.candleMin ?? PA_RULES.candleMinutes;
  const agent = opts.agent ?? true;
  const timing = runStats(closes, candleMin);
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
    return {
      bias: "unknown", score: 50, rsi: r, mom1h, gapPct, volPct, action: "WAITING FOR DATA", decision: "NO_DATA", dir: "none",
      notes: ["Not enough candles yet to read this market."], timing, entry: null,
    };
  }
  const score = Math.round(clamp(50 + clamp(gapPct * 60, -25, 25) + clamp((mom1h ?? 0) * 12, -15, 15) + clamp(((r ?? 50) - 50) * 0.4, -10, 10), 0, 100));
  const flat = Math.abs(gapPct) < 0.02;
  const bias = flat ? "sideways" : x.fastNow! > x.slowNow && p >= x.slowNow ? "bullish" : x.fastNow! < x.slowNow && p <= x.slowNow ? "bearish" : "sideways";

  // Direction is CLEAR when the trend and the current move agree, or a fresh cross just happened.
  let dir: "up" | "down" | "none" = timing.dir;
  let clear = (bias === "bullish" && dir === "up") || (bias === "bearish" && dir === "down");
  if (x.signal === "buy") { clear = true; dir = "up"; }
  if (x.signal === "sell") { clear = true; dir = "down"; }
  if (dir !== timing.dir) clear = false; // the move counter disagrees: not clear yet
  const early = timing.enterWithinMin != null && timing.enterWithinMin > 0;
  let entry = entryNow(clear, open, timing, candleMin);
  // The big trend rule, the same one the agent buys with, for EVERY signal (agent markets and forex):
  // ENTER UP only when the slow average is higher than 1 hour ago and the price is above it;
  // ENTER DOWN only when the slow average is lower than 1 hour ago and the price is below it.
  const big = dir === "none" ? null : bigTrendFor(closes, p, dir, Math.round(60 / candleMin));
  const againstTrend = !!big && clear && !big.ok;
  if (againstTrend) entry = null;

  const decision: Decision2 = !open ? "CLOSED" : !clear ? "NO_DIRECTION" : entry ? "ENTER" : againstTrend || early ? "SKIP_WEAK" : "WAIT_LATE";
  const way = dir === "up" ? "UP" : "DOWN";
  const action = {
    CLOSED: opts.closedNote ? "NOT TRADED NOW" : "MARKET CLOSED",
    NO_DATA: "WAITING FOR DATA",
    NO_DIRECTION: "NO CLEAR DIRECTION · WAIT",
    ENTER: `ENTER ${way} · ${dir === "up" ? "BUY" : "SELL"}`,
    SKIP_WEAK: againstTrend ? `${way} BUT BIG TREND ${dir === "up" ? "FALLING" : "RISING"} · SKIP` : `${way} BUT WEAK · SKIP`,
    WAIT_LATE: `${way} BUT TOO LATE · WAIT`,
  }[decision];

  // First sentence = the decision, in plain words. The rest explains it.
  const notes: string[] = [];
  const pct = timing.of > 0 ? Math.round(timing.worked / timing.of * 100) : 0;
  if (decision === "ENTER") {
    notes.push(`Enter ${way} at the start of the next ${candleMin}-minute candle and stay in for about ${entry!.durationMin} min.`);
  } else if (againstTrend) {
    notes.push(dir === "up"
      ? `The short move is up, but ${big!.why}. Never enter up into a falling big trend: skip it.`
      : `The short move is down, but ${big!.why}. Never enter down into a rising big trend: skip it.`);
  } else if (decision === "SKIP_WEAK") {
    notes.push(`The move is ${way.toLowerCase()} and still early, but on this market only ${timing.worked} of the last ${timing.of} ${way.toLowerCase()} moves really went ${way.toLowerCase()} (${pct}%). Too unreliable: skip it.`);
  } else if (decision === "WAIT_LATE") {
    notes.push(`The move is ${way.toLowerCase()}, but it started ${timing.ageMin} min ago and ${way.toLowerCase()} moves here usually end after about ${timing.typicalMin} min. Too late to enter: wait for the next fresh signal.`);
  } else if (decision === "NO_DIRECTION") {
    notes.push("Buyers and sellers are balanced, or the trend and the latest move disagree: no clear direction. Do not enter.");
  } else {
    notes.push(opts.closedNote ? opts.closedNote : agent ? "The stock market is closed, so this market cannot be traded until it opens." : "The forex market is closed (it trades from Sunday 5 PM to Friday 5 PM Eastern). OTC prices at a broker on weekends are made by that broker, not by the real market.");
  }
  if (x.signal === "buy") notes.push(`The fast line just crossed ABOVE the slow line (a fresh up turn).${agent ? " The agent buys on this only when the big trend is rising too and it holds nothing." : ""}`);
  else if (x.signal === "sell") notes.push("The fast line just crossed BELOW the slow line (a fresh down turn).");
  else if (bias === "bullish") notes.push("The fast line is above the slow line and the price is above both: buyers are in control.");
  else if (bias === "bearish") notes.push("The fast line is below the slow line and the price is below both: sellers are in control.");
  if (r != null) {
    if (r >= 70) notes.push(`RSI is ${r.toFixed(0)}: stretched (overbought). Prices rose fast and often pause or pull back.`);
    else if (r <= 30) notes.push(`RSI is ${r.toFixed(0)}: oversold. Prices fell fast and often bounce, but a falling trend can keep falling.`);
    else if (r >= 55) notes.push(`RSI is ${r.toFixed(0)}: healthy buying strength.`);
    else if (r <= 45) notes.push(`RSI is ${r.toFixed(0)}: sellers are a little stronger.`);
    else notes.push(`RSI is ${r.toFixed(0)}: balanced between buyers and sellers.`);
  }
  if (mom1h != null) notes.push(`In the last hour the price ${mom1h >= 0 ? "rose" : "fell"} ${Math.abs(mom1h).toFixed(2)}%.`);
  if (volPct != null) notes.push(volPct > 0.35 ? `It is jumpy right now (candles average ${volPct.toFixed(2)}%).` : `It is calm right now (candles average ${volPct.toFixed(2)}%).`);
  return { bias, score, rsi: r, mom1h, gapPct, volPct, action, decision, dir, notes, timing, entry };
}

// ─────────────────────────────────────────────────────────────── Signals v2 (STRICT, Nov 24, 2026)
//
// The default answer is WAIT. BUY or SELL only when ALL FIVE confirmations agree at the same time:
//   1. the 15-minute trend and the 1-hour trend point the same way;
//   2. the price is above (BUY) or below (SELL) both the fast and the slow average on the 15-minute chart;
//   3. a fresh move: not already more than 1% the signal's way in the last hour;
//   4. not choppy: the price crossed the 15-minute slow average fewer than 3 times in the last 2 hours;
//   5. calm: no 5-minute jump or drop of 0.5% or more in the last 15 minutes.
// Built for a 15 to 30 minute expiry, never for 1 to 5 minute trades. Signals only: nothing is ever traded.

export const SIG_RULES = {
  maxStrongPerDay: 5,
  checkEveryMin: 30,
  expiryMin: 30, // graded 30 minutes after it is given
  freshMaxPct: 1, // not already more than 1% the signal's way in the last hour
  choppyCrosses: 3, // 3 or more crosses of the slow average in 2 hours = choppy
  spikePct: 0.5, // a 5-minute move of 0.5% or more ...
  spikeLookbackMin: 15, // ... in the last 15 minutes = not calm
  brakeMinPct: 55, // the last 20 graded signals below 55% wins: WAIT-only
  brakeMinGraded: 10, // judged once at least 10 signals are graded
  liftStreak: 10, // WAIT-only lifts after 10 straight paper-graded wins
};

export const SIG_EXPIRY_TEXT = "Built for a 15–30 minute expiry. Do NOT use this for 1–5 minute trades.";
export const SIG_DISCLAIMER = "Signals are opinions from price patterns, not guarantees. Even strong signals lose.";

type Bar = { t: number; o: number; c: number };

/** Groups candles into bigger ones (15-minute or 1-hour), by clock time. */
export function groupBars(times: string[], closes: number[], opens: number[], minutes: number): Bar[] {
  const out: Bar[] = [];
  const size = minutes * 60000;
  for (let i = 0; i < closes.length; i++) {
    const t = Math.floor(Date.parse(times[i]) / size) * size;
    if (!Number.isFinite(t)) continue;
    const last = out[out.length - 1];
    if (last && last.t === t) last.c = closes[i];
    else out.push({ t, o: opens[i] ?? closes[i], c: closes[i] });
  }
  return out;
}

export type SigCheck = { key: string; ok: boolean; text: string };
export type SignalV2 = {
  direction: "BUY" | "SELL" | "WAIT";
  lean: "up" | "down" | "none";
  strong: boolean;
  passed: number;
  checks: SigCheck[];
  trend15: "up" | "down" | "flat" | "unknown";
  trend60: "up" | "down" | "flat" | "unknown";
  move60: number | null;
  crosses2h: number;
  explain: string;
};

/** The five confirmations for one market, from its candles (1-minute or 5-minute) and the price now. */
export function signalV2(times: string[], closes: number[], opens: number[], price: number): SignalV2 {
  const p = price || closes[closes.length - 1] || 0;
  const b15 = groupBars(times, closes, opens, 15);
  const b60 = groupBars(times, closes, opens, 60);
  const c15 = b15.map((b) => b.c);
  const c60 = b60.map((b) => b.c);
  const fast15 = sma(c15, 4); // the last hour of 15-minute candles
  const slow15 = sma(c15, 12); // the last 3 hours
  const trend15: SignalV2["trend15"] = fast15 == null || slow15 == null ? "unknown" : fast15 > slow15 ? "up" : fast15 < slow15 ? "down" : "flat";
  const avg60 = sma(c60, 4);
  const avg60Prev = c60.length > 4 ? sma(c60.slice(0, -1), 4) : null;
  const trend60: SignalV2["trend60"] = avg60 == null || avg60Prev == null ? "unknown"
    : p > avg60 && avg60 > avg60Prev ? "up" : p < avg60 && avg60 < avg60Prev ? "down" : "flat";
  const lean: SignalV2["lean"] = (trend15 === "up" || trend15 === "down") && trend15 === trend60 ? trend15 : "none";
  const dir = lean !== "none" ? lean : trend15 === "down" ? "down" : "up";
  const sign = dir === "up" ? 1 : -1;
  const way = dir === "up" ? "up" : "down";
  const word = (t: string) => (t === "unknown" ? "not clear yet (too little data)" : t === "flat" ? "flat" : t);

  // 3. The move over the last hour.
  const t0 = Date.parse(times[times.length - 1] ?? "");
  let ref60: number | null = null;
  for (let i = times.length - 1; i >= 0; i--) {
    if (t0 - Date.parse(times[i]) >= 60 * 60000) { ref60 = closes[i]; break; }
  }
  const move60 = ref60 ? (p - ref60) / ref60 * 100 : null;
  // 4. Crosses of the 15-minute slow average over the last 2 hours (8 candles).
  let crosses = 0;
  if (c15.length >= 12 + 8) {
    let prevSide = 0;
    for (let i = c15.length - 9; i < c15.length; i++) {
      const s = sma(c15.slice(0, i + 1), 12)!;
      const side = Math.sign(c15[i] - s);
      if (prevSide !== 0 && side !== 0 && side !== prevSide) crosses++;
      if (side !== 0) prevSide = side;
    }
  }
  // 5. Any 5-minute candle in the last 15 minutes that moved 0.5% or more.
  const b5 = groupBars(times, closes, opens, 5).filter((b) => t0 - b.t < SIG_RULES.spikeLookbackMin * 60000);
  const spike = b5.reduce((m, b) => Math.max(m, b.o ? Math.abs(b.c - b.o) / b.o * 100 : 0), 0);

  const enough15 = fast15 != null && slow15 != null;
  const checks: SigCheck[] = [
    {
      key: "timeframes",
      ok: lean !== "none",
      text: `Two timeframes: the 15-minute trend is ${word(trend15)} and the 1-hour trend is ${word(trend60)}, ${lean !== "none" ? "so they agree" : "so they do not agree"}.`,
    },
    {
      key: "position",
      ok: enough15 && sign * (p - fast15!) > 0 && sign * (p - slow15!) > 0,
      text: !enough15 ? "Price position: not enough 15-minute candles yet."
        : `Price position: the price is ${p > fast15! && p > slow15! ? "above both" : p < fast15! && p < slow15! ? "below both" : "between"} the fast and slow averages (needs to be ${dir === "up" ? "above" : "below"} both).`,
    },
    {
      key: "fresh",
      ok: move60 != null && sign * move60 <= SIG_RULES.freshMaxPct,
      text: move60 == null ? "Fresh move: not enough history for the last hour."
        : `Fresh move: it moved ${move60 >= 0 ? "+" : ""}${move60.toFixed(2)}% in the last hour (more than 1% ${way} = the move is mostly over).`,
    },
    {
      key: "choppy",
      ok: c15.length >= 20 && crosses < SIG_RULES.choppyCrosses,
      text: c15.length < 20 ? "Not choppy: not enough history for the last 2 hours."
        : `Not choppy: it crossed the slow average ${crosses} time(s) in 2 hours (3 or more = sideways noise).`,
    },
    {
      key: "calm",
      ok: b5.length > 0 && spike < SIG_RULES.spikePct,
      text: `Calm: the biggest 5-minute move in the last 15 minutes was ${spike.toFixed(2)}% (0.5% or more = a sudden spike, let it settle).`,
    },
  ];
  const passed = checks.filter((c) => c.ok).length;
  const strong = passed === 5;
  const direction = strong ? (dir === "up" ? "BUY" : "SELL") : "WAIT";
  const explain = strong
    ? `Both the short and the longer trend point ${way}, the price is clearly on that side, the move is still fresh, steady and calm. All 5 confirmations agree.`
    : `${5 - passed} of the 5 confirmations ${5 - passed === 1 ? "is" : "are"} missing, so the answer is WAIT. A signal needs all five at the same time.`;
  return { direction, lean, strong, passed, checks, trend15, trend60, move60: move60 == null ? null : round2(move60), crosses2h: crosses, explain };
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

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}

// ─────────────────────────────────────────────────────────────── Alpaca (read-only GETs)

export type Keys = { id: string; secret: string };

export function readConfig(): { keys: Keys | null; baseOk: boolean; ordersSwitch: boolean; problem: string } {
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

export async function aGet(base: string, path: string, k: Keys): Promise<any> {
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

export async function readAccount(k: Keys) {
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
    // Options level on the paper account (0 = options not enabled; 2 or more = may buy calls).
    optionsLevel: Number(acct?.options_trading_level ?? acct?.options_approved_level ?? 0),
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

export type Series = { closes: number[]; times: string[]; ohlc: { o: number; h: number; l: number }[]; price: number; lastBarAt: string };

/** All watchlist markets in a handful of calls: one bars call and one latest-price call for stocks, the same for crypto. */
/** Bid and ask of one option contract now (Alpaca's free indicative options feed). GET only. */
export async function readOptionQuote(k: Keys, contract: string): Promise<{ bid: number; ask: number; last: number }> {
  const j = await aGet(DATA_BASE, `/v1beta1/options/snapshots?symbols=${encodeURIComponent(contract)}&feed=indicative`, k);
  const s = j?.snapshots?.[contract] ?? {};
  return { bid: Number(s.latestQuote?.bp ?? 0), ask: Number(s.latestQuote?.ap ?? 0), last: Number(s.latestTrade?.p ?? 0) };
}

/** What a held option would sell for now: the bid (what a buyer pays), else the last trade. 0 = unknown. */
export async function optionSellPrice(k: Keys, contract: string): Promise<number> {
  try {
    const q = await readOptionQuote(k, contract);
    return q.bid > 0 ? q.bid : q.last;
  } catch {
    return 0;
  }
}

/** Finds the SPY call to buy (at the money, nearest expiry at least 7 days away) and its price (the ask).
 *  Read-only: the contract list from the paper endpoint and a quote from the data feed. */
async function chooseSpyCall(k: Keys, spot: number, todayKey: string): Promise<
  { ok: true; option: OptionInfo } | { ok: false; why: string; option?: OptionInfo }
> {
  const from = addDays(todayKey, PA_RULES.optionMinDays);
  const to = addDays(todayKey, PA_RULES.optionMinDays + 21);
  const q = `/v2/options/contracts?underlying_symbols=SPY&type=call&status=active&expiration_date_gte=${from}` +
    `&expiration_date_lte=${to}&strike_price_gte=${Math.floor(spot * 0.97)}&strike_price_lte=${Math.ceil(spot * 1.03)}&limit=1000`;
  let list: any[] = [];
  try {
    const j = await aGet(PAPER_BASE, q, k);
    list = Array.isArray(j?.option_contracts) ? j.option_contracts : [];
  } catch (e) {
    return { ok: false, why: `could not read the SPY option list (${String((e as Error).message)})` };
  }
  const pick = pickOption(list.map((c) => ({ symbol: String(c.symbol), strike: Number(c.strike_price), expiry: String(c.expiration_date) })), spot, todayKey);
  if (!pick) return { ok: false, why: "no SPY call option found with an expiry at least 7 days away" };
  let quote: { bid: number; ask: number; last: number };
  try { quote = await readOptionQuote(k, pick.symbol); } catch (e) {
    return { ok: false, why: `could not read the price of the SPY $${pick.strike} call (${String((e as Error).message)})` };
  }
  const premium = quote.ask > 0 ? quote.ask : quote.last;
  const fit = optionFits(premium);
  const option: OptionInfo = { contract: pick.symbol, strike: pick.strike, expiry: pick.expiry, premium, cost: fit.cost };
  if (!premium) return { ok: false, why: `no price for the SPY $${pick.strike} call expiring ${pick.expiry}`, option };
  if (!fit.ok) {
    return {
      ok: false, option,
      why: `the at-the-money SPY $${pick.strike} call expiring ${pick.expiry} costs $${fit.cost.toFixed(2)} ($${premium.toFixed(2)} x 100), over the $${PA_RULES.optionMaxPremiumUsd} limit, so no trade`,
    };
  }
  return { ok: true, option };
}

/** The stock market clock, shared for 30 seconds (it only says open or closed and the next open and close). */
let clockCache: { at: number; p: Promise<any> } | null = null;
export function readClock(k: Keys): Promise<any> {
  if (clockCache && Date.now() - clockCache.at < 30_000) return clockCache.p;
  const p = aGet(PAPER_BASE, "/v2/clock", k);
  clockCache = { at: Date.now(), p };
  p.catch(() => { clockCache = null; });
  return p;
}

/** Market reads shared for a few seconds: the screens, the 1-minute fast systems check and the 5-minute check
 *  often ask at the same moment, and 5-minute candles barely change in 10 seconds. A read already on its way is
 *  shared too, so two callers never download the same thing twice. */
const marketsCache = new Map<string, { at: number; p: Promise<Record<string, Series>> }>();

export function readMarkets(k: Keys, extra: MarketDef[] = [], maxAgeMs = 10_000): Promise<Record<string, Series>> {
  // `extra`: a position still open in a market that is no longer on the list keeps being read, so its exit
  // rules (take profit, stop loss, turn down) still work. It is never bought again.
  return readMarketsFor(k, [...PA_MARKETS, ...extra.filter((e) => !PA_MARKETS.some((m) => m.symbol === e.symbol))], maxAgeMs);
}

/** Any list of stocks and coins (the fast systems have their own lists). A market Alpaca does not offer simply
 *  comes back with no candles. */
export function readMarketsFor(k: Keys, list: MarketDef[], maxAgeMs = 10_000): Promise<Record<string, Series>> {
  const key = list.map((e) => e.symbol).sort().join(",");
  const hit = marketsCache.get(key);
  if (hit && Date.now() - hit.at < maxAgeMs) return hit.p;
  const p = readMarketsFresh(k, list);
  marketsCache.set(key, { at: Date.now(), p });
  p.catch(() => marketsCache.delete(key)); // never keep a failed read
  return p;
}

async function readMarketsFresh(k: Keys, list: MarketDef[]): Promise<Record<string, Series>> {
  const stocks = list.filter((m) => m.kind === "stock").map((m) => m.symbol);
  const coins = list.filter((m) => m.kind === "crypto").map((m) => m.symbol);
  const stockStart = new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString();
  const coinStart = new Date(Date.now() - 10 * 3600 * 1000).toISOString();

  async function pagedBars(path: string): Promise<Record<string, any[]>> {
    const all: Record<string, any[]> = {};
    let token = "";
    for (let page = 0; page < 10; page++) {
      const b = await aGet(DATA_BASE, path + (token ? `&page_token=${encodeURIComponent(token)}` : ""), k);
      for (const [sym, rows] of Object.entries(b?.bars ?? {})) all[sym] = [...(all[sym] ?? []), ...(rows as any[])];
      token = b?.next_page_token ?? "";
      if (!token) break;
    }
    return all;
  }

  const enc = (xs: string[]) => xs.map(encodeURIComponent).join(",");
  // One market Alpaca does not offer must not break the others: if a batch fails, each market is asked alone
  // and the ones that fail are simply left out.
  async function each<T extends Record<string, any>>(syms: string[], one: (s: string[]) => Promise<T>, pick: (r: T) => Record<string, any>): Promise<Record<string, any>> {
    if (!syms.length) return {};
    try { return pick(await one(syms)); } catch { /* ask one by one */ }
    const out: Record<string, any> = {};
    await Promise.all(syms.map(async (s) => {
      try { Object.assign(out, pick(await one([s]))); } catch { /* not offered: dropped */ }
    }));
    return out;
  }
  const [sBars, sLastT, cBars, cLastT] = await Promise.all([
    each(stocks, (s) => pagedBars(`/v2/stocks/bars?symbols=${enc(s)}&timeframe=5Min&start=${stockStart}&limit=10000&feed=iex`), (r) => r),
    each(stocks, (s) => aGet(DATA_BASE, `/v2/stocks/trades/latest?symbols=${enc(s)}&feed=iex`, k), (r) => r?.trades ?? {}),
    each(coins, (s) => pagedBars(`/v1beta3/crypto/us/bars?symbols=${enc(s)}&timeframe=5Min&start=${coinStart}&limit=10000`), (r) => r),
    each(coins, (s) => aGet(DATA_BASE, `/v1beta3/crypto/us/latest/trades?symbols=${enc(s)}`, k), (r) => r?.trades ?? {}),
  ]);
  const sLast = { trades: sLastT };
  const cLast = { trades: cLastT };

  const now = Date.now();
  const out: Record<string, Series> = {};
  for (const m of list) {
    const raw: any[] = (m.kind === "stock" ? sBars : cBars)[m.symbol] ?? [];
    // Oldest first, and only finished candles (a candle that started less than 5 minutes ago is still moving).
    const done = raw
      .map((x: any): { t: string; o: number; h: number; l: number; c: number } => ({ t: String(x.t), o: Number(x.o), h: Number(x.h), l: Number(x.l), c: Number(x.c) }))
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

// ─────────────────────────────────────────────────────────────── forex (Live signals only, read-only)

let fxCache: { at: number; cards: any[] } | null = null;
let mktCache: { at: number; cards: any[]; stockOpen: boolean } | null = null;

/** The agent's 10 markets for Live signals, read at most every 30 seconds and shared by everyone looking.
 *  No account data: only prices and readings. Falls back to the agent's last snapshot. */
async function agentMarketCards(db: any): Promise<{ cards: any[]; stockOpen: boolean }> {
  if (mktCache && Date.now() - mktCache.at < 30 * 1000) return mktCache;
  const cfg = readConfig();
  if (cfg.keys) {
    try {
      const [series, clock] = await Promise.all([readMarkets(cfg.keys), readClock(cfg.keys)]);
      const stockOpen = !!clock?.is_open;
      mktCache = { at: Date.now(), cards: marketCards(series, stockOpen), stockOpen };
      return mktCache;
    } catch { /* fall back below */ }
  }
  try {
    const st = await loadState(db);
    const cards = Array.isArray(st.snapshot?.markets) ? st.snapshot.markets : [];
    return { cards, stockOpen: !!st.snapshot?.stockOpen };
  } catch {
    return { cards: [], stockOpen: false };
  }
}

/** One forex pair from Yahoo Finance's public chart feed: 1-minute candles for today. No key, no personal data. */
async function readFxPair(def: (typeof PA_FX)[number]) {
  const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(def.yahoo)}?interval=1m&range=1d`, {
    headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) throw new Error(`forex feed answered ${res.status}`);
  const j = await res.json();
  const r = j?.chart?.result?.[0];
  const ts: number[] = r?.timestamp ?? [];
  const q = r?.indicators?.quote?.[0] ?? {};
  const now = Date.now();
  const bars: { t: string; o: number; h: number; l: number; c: number }[] = [];
  for (let i = 0; i < ts.length; i++) {
    const c = q.close?.[i], o = q.open?.[i], h = q.high?.[i], l = q.low?.[i];
    if (c == null || o == null || h == null || l == null) continue;
    // Only finished 1-minute candles.
    if (ts[i] * 1000 + 60 * 1000 > now) continue;
    bars.push({ t: new Date(ts[i] * 1000).toISOString(), o, h, l, c });
  }
  const last = bars.slice(-420); // 7 hours: enough for the 1-hour trend and the 2-hour choppiness check
  const closes = last.map((b) => b.c);
  const price = Number(r?.meta?.regularMarketPrice ?? closes[closes.length - 1] ?? 0);
  const lastAt = last.length ? Date.parse(last[last.length - 1].t) : 0;
  const open = lastAt > 0 && now - lastAt < 10 * 60 * 1000; // the real forex market is trading
  const chart = buildChart(last.map((b) => b.t), closes, 60, last.map((b) => ({ o: b.o, h: b.h, l: b.l })));
  const first = chart.points[0]?.c ?? 0;
  return {
    symbol: def.symbol, name: def.name, kind: "forex", open, candleMin: 1,
    price, changePct: first ? round2((price - first) / first * 100) : 0,
    trend: chart.trend, signal: chart.signal, fast: chart.fast, slow: chart.slow,
    // Light for phones: the last 30 minutes of closing prices only (for the small line on each card).
    chart: { points: chart.points.slice(-30).map((q) => ({ c: q.c })), trend: chart.trend, signal: chart.signal },
    reading: readMarket(closes, last, price, open, { candleMin: 1, agent: false }),
    v2: signalV2(last.map((b) => b.t), closes, last.map((b) => b.o), price),
  };
}

/** All forex pairs, read at most every 20 seconds (shared by everyone looking). A pair that fails is skipped. */
export async function readForex(): Promise<any[]> {
  if (fxCache && Date.now() - fxCache.at < 20 * 1000) return fxCache.cards;
  const settled = await Promise.allSettled(PA_FX.map((d) => readFxPair(d)));
  const cards = settled.filter((s) => s.status === "fulfilled").map((s) => (s as PromiseFulfilledResult<any>).value);
  if (cards.length) fxCache = { at: Date.now(), cards };
  return cards.length ? cards : fxCache?.cards ?? [];
}

// ─────────────────────────────────────────────────────────────── Signals v2: giving, grading, the self-brake

/** The signals state (one row): WAIT-only mode, when it started and when it was last lifted, the last check. */
async function sigState(db: any) {
  const { data } = await db.from("ngmy_signals_state").select("*").eq("id", 1).maybeSingle();
  return data ?? { id: 1, paused: false, paused_at: null, lifted_at: null, last_check_at: null };
}

/** Runs with the 5-minute timer: grades signals whose 30 minutes are up, updates the self-brake, and every 30
 *  minutes (:00 and :30 ET) gives at most 5 STRONG signals a day. While WAIT-only, would-be signals are kept as
 *  paper signals (never shown as tradeable) and graded the same way. Nothing is ever traded. */
export async function runSignals(db: any): Promise<Record<string, unknown>> {
  const now = new Date();
  const et = etParts(now);
  const cfg = readConfig();
  const st = await sigState(db);
  // Every market's price and five confirmations right now: the agent's markets and the forex pairs.
  const [agent, fx] = await Promise.all([agentMarketCards(db).catch(() => ({ cards: [] as any[], stockOpen: false })), readForex().catch(() => [] as any[])]);
  const cards = [...agent.cards, ...fx];
  const priceOf = (sym: string) => Number(cards.find((c) => c.symbol === sym)?.price ?? 0);

  // 1. Grade every signal whose expiry has come: did the price finish the signal's way?
  const { data: due } = await db.from("ngmy_signals").select("*").eq("graded", false).lte("grade_at", now.toISOString()).limit(50);
  let graded = 0;
  for (const s of due ?? []) {
    const p = priceOf(s.market);
    if (!p) continue; // no price right now: graded at the next check
    const move = (p - Number(s.price)) / Number(s.price) * 100;
    const win = s.direction === "BUY" ? move > 0 : move < 0;
    await db.from("ngmy_signals").update({ graded: true, result: win ? "WIN" : "LOSS", exit_price: p, move_pct: round2(move) }).eq("id", s.id);
    graded++;
  }

  // 2. The self-brake.
  const patch: Record<string, unknown> = {};
  if (!st.paused) {
    let q = db.from("ngmy_signals").select("result").eq("graded", true).eq("paper", false).order("id", { ascending: false }).limit(20);
    if (st.lifted_at) q = q.gt("created_at", st.lifted_at);
    const { data: last } = await q;
    const n = (last ?? []).length;
    const wins = (last ?? []).filter((r: any) => r.result === "WIN").length;
    if (n >= SIG_RULES.brakeMinGraded && wins / n * 100 < SIG_RULES.brakeMinPct) {
      patch.paused = true;
      patch.paused_at = now.toISOString();
      st.paused = true;
      st.paused_at = patch.paused_at;
    }
  } else {
    const { data: paper } = await db.from("ngmy_signals").select("result").eq("graded", true).eq("paper", true)
      .gt("created_at", st.paused_at ?? "1970-01-01").order("id", { ascending: false }).limit(SIG_RULES.liftStreak);
    if ((paper ?? []).length >= SIG_RULES.liftStreak && (paper ?? []).every((r: any) => r.result === "WIN")) {
      patch.paused = false;
      patch.lifted_at = now.toISOString();
      st.paused = false;
    }
  }

  // 3. Every 30 minutes: give the STRONG signals (all five confirmations), at most 5 a day.
  let given = 0;
  const lastCheck = st.last_check_at ? Date.parse(st.last_check_at) : 0;
  if (et.minute % SIG_RULES.checkEveryMin < 5 && now.getTime() - lastCheck > 20 * 60000) {
    patch.last_check_at = now.toISOString();
    const { data: open } = await db.from("ngmy_signals").select("market").eq("graded", false);
    const busy = new Set((open ?? []).map((r: any) => r.market));
    const strong = cards.filter((c) => c.open && c.v2?.strong && !busy.has(c.symbol) && Number(c.price) > 0)
      // The freshest first: the least already-moved in the last hour.
      .sort((a, b) => Math.abs(a.v2.move60 ?? 0) - Math.abs(b.v2.move60 ?? 0));
    let room = SIG_RULES.maxStrongPerDay;
    if (!st.paused) {
      const { count } = await db.from("ngmy_signals").select("id", { count: "exact", head: true }).eq("et_day", et.dayKey).eq("paper", false);
      room = Math.max(0, SIG_RULES.maxStrongPerDay - Number(count ?? 0));
    }
    for (const c of st.paused ? strong : strong.slice(0, room)) {
      await db.from("ngmy_signals").insert({
        et_time: et.label, et_day: et.dayKey, market: c.symbol, kind: c.kind, direction: c.v2.direction, price: c.price,
        checks: c.v2.checks, explain: c.v2.explain, paper: !!st.paused,
        grade_at: new Date(now.getTime() + SIG_RULES.expiryMin * 60000).toISOString(),
      });
      given++;
    }
  }
  if (Object.keys(patch).length) await db.from("ngmy_signals_state").upsert({ id: 1, ...patch });
  return { ok: true, graded, given, paused: !!st.paused, keys: !!cfg.keys };
}

/** What the signals screen shows: the active STRONG signals, the history with WIN or LOSS, the rolling record of
 *  the last 20, today's count, and the self-brake. */
export async function signalsBoard(db: any) {
  try {
    const et = etParts(new Date());
    const st = await sigState(db);
    const [{ data: hist }, { data: last20 }, { count }] = await Promise.all([
      db.from("ngmy_signals").select("id,created_at,et_time,market,kind,direction,price,checks,explain,paper,grade_at,graded,result,exit_price,move_pct")
        .eq("paper", false).order("id", { ascending: false }).limit(30),
      db.from("ngmy_signals").select("result").eq("graded", true).eq("paper", false).order("id", { ascending: false }).limit(20),
      db.from("ngmy_signals").select("id", { count: "exact", head: true }).eq("et_day", et.dayKey).eq("paper", false),
    ]);
    const wins = (last20 ?? []).filter((r: any) => r.result === "WIN").length;
    const active = (hist ?? []).filter((s: any) => !s.graded && Date.parse(s.grade_at) > Date.now());
    let paperStreak = 0;
    if (st.paused) {
      const { data: paper } = await db.from("ngmy_signals").select("result").eq("graded", true).eq("paper", true)
        .gt("created_at", st.paused_at ?? "1970-01-01").order("id", { ascending: false }).limit(SIG_RULES.liftStreak);
      for (const r of paper ?? []) { if (r.result === "WIN") paperStreak++; else break; }
    }
    return {
      ok: true,
      active, history: hist ?? [],
      record: { wins, losses: (last20 ?? []).length - wins, graded: (last20 ?? []).length },
      today: Number(count ?? 0), maxPerDay: SIG_RULES.maxStrongPerDay,
      paused: !!st.paused,
      pauseReason: st.paused ? "Record too weak — signals paused until the pattern improves." : null,
      paperStreak, liftStreak: SIG_RULES.liftStreak,
      expiryText: SIG_EXPIRY_TEXT, disclaimer: SIG_DISCLAIMER,
      checkEveryMin: SIG_RULES.checkEveryMin,
    };
  } catch {
    return { ok: false, setupNeeded: true, expiryText: SIG_EXPIRY_TEXT, disclaimer: SIG_DISCLAIMER };
  }
}

/** What the app shows for each market: price, change over the chart, trend, signal and the chart itself. */
/** `open` here means "the agent may buy it right now": the 10 stocks on a weekday while the stock market is open,
 *  the 4 coins on Saturday and Sunday. `today` = on today's watchlist (even when the market is closed). */
function marketCards(series: Record<string, Series>, stockOpen: boolean, weekend = etParts(new Date()).weekend, extra: MarketDef[] = [], all: MarketDef[] = PA_MARKETS) {
  const coins = all.filter((m) => m.kind === "crypto");
  const active = activeMarkets(weekend, stockOpen, coins);
  const list = todaysList(weekend, coins);
  return [...all, ...extra].map((m) => {
    const exitOnly = !all.some((x) => x.symbol === m.symbol);
    const s = series[m.symbol];
    const chart = buildChart(s?.times ?? [], s?.closes ?? [], 48, s?.ohlc);
    const first = chart.points[0]?.c ?? 0;
    const price = s?.price ?? 0;
    const open = active.includes(m.symbol);
    const off = open ? "" : exitOnly ? "exit only" : offNote(m.symbol, weekend);
    const closedNote = open ? undefined : exitOnly
      ? "Not on the list any more. The agent only watches the exit rules for the position it still holds here and never buys it again."
      : m.kind === "crypto"
      ? "Crypto trades every day, around the clock."
      : weekend
        ? "The agent trades stocks only on weekdays while the stock market is open. Today it watches the crypto markets."
        : "The stock market is closed, so stocks cannot be traded until it opens (9:30 AM ET). Crypto keeps trading around the clock.";
    return {
      symbol: m.symbol, name: m.name, kind: m.kind, open, active: open, today: list.includes(m.symbol) || exitOnly, offLabel: off,
      price, changePct: first ? round2((price - first) / first * 100) : 0,
      trend: chart.trend, signal: chart.signal, fast: chart.fast, slow: chart.slow, chart,
      candleMin: PA_RULES.candleMinutes,
      reading: readMarket(s?.closes ?? [], s?.ohlc ?? [], price, open, { closedNote }),
      v2: signalV2(s?.times ?? [], s?.closes ?? [], (s?.ohlc ?? []).map((o) => o.o), price),
    };
  });
}

/** The market cards as saved for the agent screen, smaller now that every crypto pair is watched: no Live
 *  signals block (that screen reads its own), and chart numbers rounded to 6 significant digits. */
export function slimCards(cards: any[], _focus?: string): any[] {
  const r6 = (v: unknown) => typeof v === "number" && Number.isFinite(v) ? Number(v.toPrecision(6)) : v;
  return cards.map((c) => {
    const { v2: _v2, ...rest } = c;
    const pts = (c.chart?.points ?? []).map((q: any) => ({ t: q.t, o: r6(q.o), h: r6(q.h), l: r6(q.l), c: r6(q.c), f: r6(q.f), s: r6(q.s) }));
    return { ...rest, chart: { ...(c.chart ?? {}), points: pts } };
  });
}

// ─────────────────────────────────────────────────────────────── database

export async function loadState(db: any) {
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

  // The timer runs every 5 minutes. Never run two checks for the same 5 minutes (a cron retry).
  const last = state.last_tick_at ? Date.parse(state.last_tick_at) : 0;
  if (now.getTime() - last < 4 * 60 * 1000) return { ok: true, skipped: "already checked in the last 4 minutes" };

  // Every 5-minute check: the exit rules while a position is open, otherwise a new buy across the whole day's list
  // (buy checks every 5 minutes since Nov 22, 2026).
  const holding = !!state.shadow;
  await saveState(db, { last_tick_at: now.toISOString() });

  if (!state.enabled) return { ok: true, skipped: "agent is stopped" };

  const cfg = readConfig();
  if (!cfg.keys) {
    await writeLog(db, { kind: "error", asset: watch, decision: "no action", reason: cfg.problem });
    return { ok: false, error: cfg.problem };
  }

  // Account, the stock market clock (knows holidays and early closes), SPY and Bitcoin, plus the market of a
  // position still open from before the market list was cut down (exits only).
  const held: Shadow = state.shadow ?? null;
  let extra: MarketDef[] = [];
  let all: MarketDef[] = mainMarkets();
  let crypto: { list: MarketDef[]; fromAlpaca: boolean } = { list: PA_BASE_COINS, fromAlpaca: false };
  let acct: Awaited<ReturnType<typeof readAccount>>;
  let series: Record<string, Series>;
  let clock: any;
  try {
    // Every tradable USD crypto pair on Alpaca (read once a day) plus the 10 stocks, all in this one check.
    crypto = await readCryptoList(cfg.keys);
    all = mainMarkets(crypto.list);
    extra = held && !all.some((m) => m.symbol === held.symbol)
      ? [{ symbol: held.symbol, name: held.symbol, kind: held.symbol.includes("/") ? "crypto" : "stock" }]
      : [];
    [acct, series, clock] = await Promise.all([readAccount(cfg.keys), readMarketsFor(cfg.keys, [...all, ...extra]), aGet(PAPER_BASE, "/v2/clock", cfg.keys)]);
  } catch (e) {
    await writeLog(db, { kind: "error", asset: watch, decision: "no action", reason: `Alpaca connection failed (${String((e as Error).message)}), no action taken` });
    return { ok: false, error: "Alpaca connection failed" };
  }
  const stockOpen = !!clock?.is_open;
  // Minutes to the stock close (4:00 PM, or earlier on short days). Under 20: no new stock buys (after 3:40 PM).
  // Under 10: an open stock position is sold (the 3:50 PM check, or 3:55 PM at the latest).
  const toClose = stockOpen && clock?.next_close ? (Date.parse(clock.next_close) - now.getTime()) / 60000 : Infinity;
  const finalCheck = toClose < 10;
  const lateForBuys = toClose < 20;
  const active = activeMarkets(et.weekend, stockOpen, crypto.list);

  const day = await ensureDay(db, et, active.length ? `${active.length} markets` : watch, acct.equity);
  const pace = mainPace(et, Number(day.trades ?? 0));
  const cards = marketCards(series, stockOpen, et.weekend, extra, all);
  // A crypto pair that left Alpaca's tradable list since the last check: dropped automatically, said on screen.
  const prevCrypto: string[] = Array.isArray(state.snapshot?.cryptoList) ? state.snapshot.cryptoList : [];
  const nowCrypto = crypto.list.map((m) => m.symbol);
  const droppedNow = crypto.fromAlpaca && prevCrypto.length ? prevCrypto.filter((s) => !nowCrypto.includes(s)) : [];
  const prevDropped = state.snapshot?.cryptoDropped?.day === et.dayKey ? state.snapshot.cryptoDropped.symbols ?? [] : [];
  const cryptoDropped = { day: et.dayKey, symbols: [...new Set([...prevDropped, ...droppedNow])] };
  if (droppedNow.length) {
    await writeLog(db, { kind: "control", asset: watch, decision: "no action", reason: `Dropped ${droppedNow.join(", ")}: no longer active and tradable on Alpaca, so it is not watched any more.` });
  }
  if (pace.level > Number(day.pace_level ?? 0)) {
    await db.from("ngmy_alpaca_agent_days").update({ pace_level: pace.level }).eq("et_day", et.dayKey);
    await writeLog(db, { kind: "control", asset: watch, decision: "no action", reason: `Behind the pace (${day.trades ?? 0} of ${pace.expected} expected by now). ${pace.lines.join(" ")}` });
  }
  // EVERY market open right now is checked in this same check (never one market per check).
  const scans: Scan[] = [...all, ...extra].map((m) => {
    const s = series[m.symbol] ?? { closes: [], times: [], ohlc: [], price: 0, lastBarAt: "" };
    const x = crossover(s.closes);
    return {
      symbol: m.symbol, stock: m.kind === "stock", open: active.includes(m.symbol), price: s.price,
      fast: x.fastNow, slow: x.slowNow, signal: x.signal, key: `${m.symbol}|${crossAt(s.closes, s.times)}|${x.signal}`,
      big: bigTrend(s.closes, s.price),
    };
  });
  const shadow: Shadow = state.shadow ?? null;
  const totalPnl = Number(state.total_pnl ?? 0);
  const dayPnl = Number(day.day_pnl ?? 0);
  const openCount = scans.filter((s) => s.open).length;
  const base = {
    weekend: et.weekend, dayPnl, totalPnl, tradesToday: Number(day.trades ?? 0), finalCheck, lateForBuys,
    alpacaHolding: acct.positions.some((p) => p.qty !== 0),
  };

  let d: Decision;
  let focus: Scan;
  let heldPrice = 0;
  let optionPriceMissing = false;
  let newShadow: Shadow = null;
  let topRanked: string[] = [];
  let blockKey = ""; // what kept this check from buying (for the plain reason when the day ends below 20)
  if (shadow) {
    // Holding: only the held market matters (one position at a time).
    focus = scans.find((s) => s.symbol === shadow.symbol) ?? {
      symbol: shadow.symbol, stock: !shadow.symbol.includes("/"), open: false, price: shadow.entryPrice,
      fast: null, slow: null, signal: "none", key: "",
    };
    // What is held is worth: for a SPY option, its own price now (the bid); for Bitcoin, the Bitcoin price.
    if (shadow.option) {
      heldPrice = await optionSellPrice(cfg.keys, shadow.option.contract);
      if (!heldPrice) optionPriceMissing = true;
    } else {
      heldPrice = focus.price;
    }
    const heldMin = (now.getTime() - Date.parse(shadow.entryAt)) / 60000;
    d = decide({ ...base, asset: focus.symbol, stock: focus.stock, price: heldPrice || shadow.entryPrice, signal: focus.signal,
      fast: focus.fast, slow: focus.slow, shadow, signalAlreadyUsed: false,
      heldMin: Number.isFinite(heldMin) ? heldMin : undefined, maxHoldMin: (shadow as any).maxHold ?? PA_RULES.maxHoldMin });
    if (optionPriceMissing && d.decision === "hold") d = { ...d, reason: `${d.reason} (no option price right now, checked again in 5 minutes)` };
  } else {
    // All of the day's markets at once: the first VALID entry (cross up + big trend rising) is bought.
    const { pick, closest, blocked, top } = pickMarket(scans, state.last_signal_key ?? null, lateForBuys, pace.topN);
    topRanked = top.map((s) => s.symbol);
    focus = pick ?? closest ?? scans.find((s) => s.open) ?? scans[0];
    const listName = `${active.length} open markets`;
    if (state.brake_paused) {
      d = { decision: "no action", reason: `agent paused by the $${PA_RULES.totalLossBrakeUsd} brake, waiting for an admin to turn it back on` };
      blockKey = "brake";
    } else if (!active.length) {
      d = { decision: "no action", reason: "no market is traded right now: the 10 stocks trade on weekdays 9:30 AM to 4:00 PM ET, crypto around the clock" };
    } else {
      d = decide({ ...base, asset: focus.symbol, stock: focus.stock, price: focus.price, signal: pick ? "buy" : "none",
        fast: focus.fast, slow: focus.slow, shadow: null, signalAlreadyUsed: false, bigTrend: focus.big });
      if (!pick && d.reason === "no signal") {
        const why = blocked.length
          ? `${blocked.map((b) => b.symbol).join(", ")} crossed up but the big trend is not rising, so no trade`
          : `no fresh cross up${closest ? `, closest to one: ${closest.symbol}` : ""}`;
        d = { decision: "no action", reason: `checked all ${listName}: ${why}` };
        blockKey = blocked.length ? "falling" : "nocross";
      } else if (d.decision === "no action") {
        blockKey = /daily stop|brake/.test(d.reason) ? "brake" : /falling big trend/.test(d.reason) ? "falling" : /target reached/.test(d.reason) ? "" : "other";
      }
      if (d.decision === "would buy") {
        // $100 of the stock or coin itself, held at most the current max hold.
        newShadow = { symbol: focus.symbol, qty: PA_RULES.tradeUsd / focus.price, mult: 1, entryPrice: focus.price, entryAt: now.toISOString(), maxHold: pace.maxHold } as any;
        d = { ...d, reason: `${d.reason} (strongest valid entry of the top ${pace.topN} among ${listName}; max hold ${pace.maxHold} min)` };
      }
    }
  }

  const price = focus.price || (shadow?.entryPrice ?? 0);
  const focusCard = cards.find((c) => c.symbol === focus.symbol);
  const statePatch: Record<string, unknown> = {
    snapshot: {
      ...acct, at: now.toISOString(), etTime: et.label, stockOpen, markets: slimCards(cards, focus.symbol),
      asset: focus.symbol, price, chart: focusCard?.chart ?? null,
      // The open pretend position marked to market (for an option: its own price, not the SPY price).
      held: shadow && d.decision !== "would sell" ? heldMark(shadow, heldPrice) : null,
      cryptoList: nowCrypto, cryptoFromAlpaca: crypto.fromAlpaca, cryptoDropped,
    },
  };
  if (blockKey && !shadow) {
    const blocks = { ...(day.blocks ?? {}) };
    blocks[blockKey] = Number(blocks[blockKey] ?? 0) + 1;
    await db.from("ngmy_alpaca_agent_days").update({ blocks }).eq("et_day", et.dayKey);
  }
  let newTotal = totalPnl;
  let newDay = dayPnl;
  if (d.decision === "would buy" && newShadow) {
    statePatch.shadow = newShadow;
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
      pnl: d.pnl ?? null, by: "cron", rules: shadow && shadow.mult == null ? "usd50" : PA_RULES_TAG, stockOpen, openMarkets: openCount, activeMarkets: active,
      bigTrendOk: focus.big?.ok ?? null, exitOnly: holding, topRanked, topN: pace.topN, maxHold: pace.maxHold,
      // Every market the agent looked at in this check.
      scanned: scans.map((s) => ({ s: s.symbol, p: s.price, f: s.fast, sl: s.slow, sig: s.signal, open: s.open })),
      // The money side of a pretend trade, so the app can show what went in and what came out.
      // For a SPY option, prices are the option premium per share, and option has the contract (strike, expiry).
      ...(d.decision === "would buy" && newShadow ? {
        amount: round2(newShadow.qty * (newShadow.mult ?? 1) * newShadow.entryPrice), qty: newShadow.qty, mult: newShadow.mult ?? 1,
        entryPrice: newShadow.entryPrice, option: newShadow.option ?? null,
      } : {}),
      ...(d.decision === "would sell" && shadow ? (() => {
        const m = shadow.mult ?? 1;
        const exit = heldPrice || shadow.entryPrice;
        return {
          amount: round2(shadow.qty * m * shadow.entryPrice), qty: shadow.qty, mult: m, entryPrice: shadow.entryPrice, exitPrice: exit,
          entryAt: shadow.entryAt, option: shadow.option ?? null,
          outValue: round2(shadow.qty * m * exit), pct: round2((exit - shadow.entryPrice) / shadow.entryPrice * 100),
        };
      })() : {}),
    },
  });
  if (statePatch.brake_paused) {
    await writeLog(db, { kind: "control", asset: watch, decision: "no action", reason: `agent paused by the $${PA_RULES.totalLossBrakeUsd} brake. An admin must review and turn it back on.`, total_pnl: newTotal });
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

  if (FS_ACTIONS.has(action)) return handleFast(action, body, { ...ctx, landingClosed: () => landingClosedPnl(db) });

  if (action === "paTick") {
    // Called by pg_cron. The token lives only in the state table (service role), never in the app.
    let state: any;
    try { state = await loadState(db); } catch (e) { return { status: 500, payload: { ok: false, error: String((e as Error).message) } }; }
    const token = String(body?.token ?? "");
    if (!token || !state.cron_token || token !== state.cron_token) return { status: 403, payload: { ok: false, error: "forbidden" } };
    // Signals v2 run with the same timer, apart from the agent (signals only: nothing is traded). A problem
    // there never stops the agent's check.
    let signals: unknown = null;
    try { signals = await runSignals(db); } catch (e) { signals = { ok: false, error: String((e as Error).message) }; }
    try {
      return { status: 200, payload: { ...(await runCheck(db)), signals } };
    } catch (e) {
      return { status: 500, payload: { ok: false, error: String((e as Error).message), signals } };
    }
  }

  if (!email) return { status: 401, payload: { ok: false, error: "Please sign in." } };

  // ── Trading Academy, open to every signed-in member: lesson progress and live signals.
  if (action === "paLearnGet") {
    const { data, error } = await db.from("ngmy_trading_academy").select("progress,all_done").eq("email", email).maybeSingle();
    if (error) return { status: 200, payload: { ok: true, progress: null, allDone: false, saved: false, isAdmin } };
    return { status: 200, payload: { ok: true, progress: data?.progress ?? null, allDone: !!data?.all_done, saved: true, isAdmin } };
  }
  if (action === "paLearnSave") {
    const progress = body?.progress && typeof body.progress === "object" ? body.progress : {};
    if (JSON.stringify(progress).length > 30000) return { status: 400, payload: { ok: false, error: "Progress too large." } };
    const done: string[] = Array.isArray(progress.done) ? progress.done.map(String) : [];
    const allDone = PA_LESSON_IDS.every((id) => done.includes(id));
    const { error } = await db.from("ngmy_trading_academy")
      .upsert({ email, progress, all_done: allDone, updated_at: new Date().toISOString() });
    return { status: 200, payload: { ok: !error, saved: !error, allDone, error: error?.message } };
  }
  if (action === "paSignals") {
    // Signal alerts: admins always, members once every lesson is finished.
    let graduated = false;
    if (!isAdmin) {
      const { data } = await db.from("ngmy_trading_academy").select("all_done").eq("email", email).maybeSingle();
      graduated = !!data?.all_done;
    }
    const light = body?.light === true;
    // The background alert watcher (every minute on the home screen) needs only each market's "enter now" and
    // the newest trades: a tiny answer, no forex, no charts, no notes.
    if (body?.alerts === true) {
      // Signals v2: alerts only for the STRONG signals actually given (all five confirmations), never for weaker ones.
      const [board, feed] = await Promise.all([signalsBoard(db), isAdmin ? tradeFeed(db) : Promise.resolve(undefined)]);
      return {
        status: 200,
        payload: {
          ok: true, isAdmin, alertsAllowed: isAdmin || graduated,
          signalFeed: ((board as any).active ?? []).map((s: any) => ({
            key: `sig:${s.id}`, market: s.market, direction: s.direction, et_time: s.et_time, price: s.price, grade_at: s.grade_at,
          })),
          expiryText: SIG_EXPIRY_TEXT,
          ...(feed ? { tradeFeed: feed } : {}),
        },
      };
    }
    const [markets, board] = await Promise.all([agentMarketCards(db), signalsBoard(db)]);
    let fx: any[] = [];
    try { fx = await readForex(); } catch { fx = []; }
    // Signals v2: a card shows BUY or SELL only while a STRONG signal given for it is still within its expiry.
    const activeBy = new Map<string, any>(((board as any).active ?? []).map((s: any) => [s.market, s]));
    const slim = (m: any) => {
      const withSig = { ...m, activeSignal: activeBy.get(m.symbol) ?? null };
      return light ? { ...withSig, chart: { points: (m.chart?.points ?? []).slice(-30).map((q: any) => ({ c: q.c })), trend: m.chart?.trend } } : withSig;
    };
    const etNow = etParts(new Date());
    return {
      status: 200,
      payload: {
        ok: true,
        isAdmin,
        alertsAllowed: isAdmin || graduated,
        markets: markets.cards.map(slim),
        stockOpen: markets.stockOpen,
        activeMarkets: activeMarkets(etParts(new Date()).weekend, markets.stockOpen), todaysList: todaysList(etParts(new Date()).weekend),
        fx: fx.map(slim),
        rules: PA_RULE_LINES,
        nowEt: etNow.label,
        signals: board,
        // Admins: the newest pretend trades of every system, so the app can notify on each new buy or sell.
        ...(isAdmin ? { tradeFeed: await tradeFeed(db) } : {}),
      },
    };
  }

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
    // The app never shows the per-market scan of each check: leaving it out makes the answer about 10 times smaller.
    return { status: 200, payload: { ok: true, rows: (data ?? []).map((r: any) => ({ ...r, details: r.details ? { ...r.details, scanned: undefined } : r.details })) } };
  }

  // paStatus (and the answer to paSet / paCheck): live read of the account and all markets when asked
  // (at most every 20 seconds), otherwise the last snapshot.
  const cfg = readConfig();
  let liveError = "";
  let clock: any = null;
  if (cfg.keys) {
    try { clock = await readClock(cfg.keys); } catch { /* unknown */ }
  }
  const stockOpen = clock ? !!clock.is_open : null;
  if ((body?.live === true || forceLive) && cfg.keys) {
    const snapAt = state.snapshot?.at ? Date.parse(state.snapshot.at) : 0;
    if (Date.now() - snapAt > (forceLive ? 5 : 20) * 1000 || !Array.isArray(state.snapshot?.markets)) {
      try {
        const et = etParts(new Date());
        const held = state.shadow?.symbol as string | undefined;
        const crypto = await readCryptoList(cfg.keys);
        const all = mainMarkets(crypto.list);
        const extra: MarketDef[] = held && !all.some((m) => m.symbol === held)
          ? [{ symbol: held, name: held, kind: held.includes("/") ? "crypto" : "stock" }]
          : [];
        const [acct, series] = await Promise.all([readAccount(cfg.keys), readMarketsFor(cfg.keys, [...all, ...extra])]);
        const cards = slimCards(marketCards(series, !!stockOpen, et.weekend, extra, all));
        const focus = cards.find((c) => c.symbol === held) ?? cards.find((c) => c.open) ?? cards[0];
        const sh: Shadow = state.shadow ?? null;
        const markPrice = !sh ? 0 : sh.option ? await optionSellPrice(cfg.keys, sh.option.contract) : (cards.find((c) => c.symbol === sh.symbol)?.price ?? 0);
        const live = {
          ...acct, at: new Date().toISOString(), etTime: et.label, stockOpen: !!stockOpen, markets: cards,
          asset: focus.symbol, price: focus.price, chart: focus.chart,
          held: sh ? heldMark(sh, markPrice) : null,
          cryptoList: crypto.list.map((m) => m.symbol), cryptoFromAlpaca: crypto.fromAlpaca, cryptoDropped: state.snapshot?.cryptoDropped ?? null,
        };
        await saveState(db, { snapshot: live });
        state.snapshot = live;
      } catch (e) {
        liveError = `Alpaca connection failed (${String((e as Error).message)})`;
      }
    }
  }
  // Live signals also asks for the forex pairs (read-only, the agent does not trade them).
  let fx: any[] | undefined;
  if (body?.fx === true) {
    try { fx = await readForex(); } catch { fx = []; }
  }
  const etNow = etParts(new Date());
  // Every crypto pair the agent watches (as saved by the last check), plus the 10 stocks on weekdays.
  const snapCrypto: MarketDef[] = (Array.isArray(state.snapshot?.cryptoList) ? state.snapshot.cryptoList : PA_BASE_COINS.map((m) => m.symbol))
    .map((sym: string) => ({ symbol: sym, name: sym, kind: "crypto" as const }));
  const market = {
    stockOpen, weekend: etNow.weekend, activeMarkets: activeMarkets(etNow.weekend, !!stockOpen, snapCrypto), todaysList: todaysList(etNow.weekend, snapCrypto),
    nextOpen: clock?.next_open ?? null, nextClose: clock?.next_close ?? null,
    cryptoCount: snapCrypto.length, cryptoFromAlpaca: state.snapshot?.cryptoFromAlpaca ?? null,
    cryptoDropped: state.snapshot?.cryptoDropped?.day === etNow.dayKey ? state.snapshot.cryptoDropped.symbols ?? [] : [],
  };
  const nowD = new Date();
  const etMidnight = new Date(nowD.getTime() - ((etNow.hour * 60 + etNow.minute) * 60 + nowD.getUTCSeconds()) * 1000).toISOString();
  // All at once (they used to run one after another). The closed-trade list reads only the two numbers it needs.
  const [{ data: today }, { data: trades }, { data: closed }, fast, { data: todaySells }] = await Promise.all([
    db.from("ngmy_alpaca_agent_days").select("*").eq("et_day", etNow.dayKey).maybeSingle(),
    db.from("ngmy_alpaca_agent_log").select("id,created_at,et_time,asset,price,decision,reason,details")
      .in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(40),
    db.from("ngmy_alpaca_agent_log").select("pnl:details->pnl,rules:details->>rules")
      .eq("decision", "would sell").order("id", { ascending: false }).limit(500),
    fastSharedPnl(db),
    db.from("ngmy_alpaca_agent_log").select("asset,pnl:details->pnl").eq("decision", "would sell").gte("created_at", etMidnight).limit(200),
  ]);
  const tp: number[] = (todaySells ?? []).map((r: any) => Number(r?.pnl ?? 0));
  const tw = tp.filter((x) => x > 0).length;
  const todayStats = { closed: tp.length, wins: tw, losses: tp.length - tw, winRatePct: tp.length ? Math.round(tw / tp.length * 100) : null, pnl: round2(tp.reduce((a, b) => a + b, 0)) };
  const pace = mainPace(etNow, Number(today?.trades ?? 0));
  const blocks: Record<string, number> = today?.blocks ?? {};
  const below = pace.trades < pace.target;
  const blockWords: Record<string, string> = {
    falling: "markets crossed up but their big trend was falling or flat — it never buys a falling market",
    nocross: "no market gave a fresh cross up with a rising big trend",
    brake: "a brake stopped it (the daily stop or the total brake)",
    other: "the open position slot or the stock close rules",
  };
  const topBlock = Object.entries(blocks).filter(([k]) => k in blockWords).sort((a, b) => b[1] - a[1])[0]?.[0];
  const dayNote = pace.impossible && below
    ? `Pace stopped at ${pace.trades} of ${pace.target} — reaching ${pace.target} would require buying a falling market${topBlock ? ` (most often: ${blockWords[topBlock]})` : ""}.`
    : below && topBlock ? `Most often blocked so far today: ${blockWords[topBlock]}.` : null;
  const pnls: number[] = (closed ?? []).map((r: any) => Number(r?.pnl ?? 0));
  // The $100 rules (Nov 22): their own win rate, to see if the agent wins at least 5 out of 10.
  const newPnls: number[] = (closed ?? []).filter((r: any) => r?.rules === PA_RULES_TAG).map((r: any) => Number(r?.pnl ?? 0));
  const newWins = newPnls.filter((p) => p > 0).length;
  const record = {
    wins: pnls.filter((p) => p > 0).length, losses: pnls.filter((p) => p <= 0).length, trades: pnls.length,
    // Every finished pretend trade added together: the screen adds this to the paper balance.
    pnlSum: round2(pnls.reduce((s, p) => s + p, 0)),
    winRatePct: pnls.length ? Math.round(pnls.filter((p) => p > 0).length / pnls.length * 100) : null,
    newRules: {
      trades: newPnls.length, wins: newWins, losses: newPnls.length - newWins,
      winRatePct: newPnls.length ? Math.round(newWins / newPnls.length * 100) : null,
      pnlSum: round2(newPnls.reduce((s, p) => s + p, 0)),
    },
  };
  return {
    status: 200,
    payload: {
      ok: true,
      state: publicState(state),
      today: today ?? null,
      liveError,
      market,
      ...(fx ? { fx } : {}),
      trades: (trades ?? []).map((t: any) => ({ ...t, details: { ...(t.details ?? {}), scanned: undefined } })),
      record,
      todayStats,
      pace: { ...pace, dayNote, blocks },
      brakeNote: PA_BRAKE_NOTE,
      // The other systems (Options, Scalper) share this paper balance: their closed and open pretend P/L.
      fast,
      ticket: {
        amount: PA_RULES.tradeUsd, takeProfitUsd: PA_RULES.takeProfitUsd, stopLossUsd: PA_RULES.stopLossUsd,
        maxTradesToday: PA_RULES.maxTradesPerDay, maxHoldMin: pace.maxHold,
        dailyStopUsd: PA_RULES.dailyLossStopUsd, totalBrakeUsd: PA_RULES.totalLossBrakeUsd,
        optionMaxUsd: PA_RULES.optionMaxPremiumUsd, optionMinDays: PA_RULES.optionMinDays,
        // What the next trade would be: a SPY call on weekdays, Bitcoin itself on weekends.
        kind: etNow.weekend || !stockOpen ? "crypto" : "stock",
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

export function publicState(s: any) {
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
