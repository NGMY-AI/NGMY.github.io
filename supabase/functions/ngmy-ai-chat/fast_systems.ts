// Signal Grid — Fast Systems (paper only). Nov 23, 2026; 20-trades update Nov 24; 40 trades + learning Nov 24, 2026.
//
// Two extra systems next to the main Signal Grid agent, each with its own Start/Stop, its own trade history,
// trades-today count, daily stop and total brake, and ONE open position at a time. They watch their OWN markets,
// never one of the main agent's:
//   A. OPTIONS: weekdays one call (trend up) or one put (trend down), premium $150 or less, on 21 underlyings.
//   B. SCALPER: $100 of a stock (30 weekday stocks), +2% / -1%.
// Nov 24, 2026 (all crypto to Signal Grid): the main agent now watches EVERY crypto pair, so the fast systems'
// weekend coin lists are retired (no overlap). Both fast systems trade weekdays only; on weekends only Signal Grid trades.
//
// 40 trades a day each, honestly. Every minute each system scores ALL its markets and takes the best-ranked one
// that passes every rule. The NEVER rules: the 5-minute and 15-minute trends agree with the direction, and for a
// buy the slow average is rising with the price above it (mirrored for a put). Behind the pace it first shortens
// the hold (30 -> 20 -> 12 min), then lowers the strength needed (never below +0.12%), then tries more candidates.
//
// LEARNING: every closed trade is saved in full (ngmy_fast_trades) with the market conditions at entry. Every loss
// gets one plain reason (against trend, chased, chop, noise stop, no follow-through, wide spread). Lessons change
// what it does: benching a losing market, tightening the no-chase cap or the chop filter, wider stops on a noisy
// market, needing the 1-hour trend, a pause after 2 losses in a row, raising the strength after weak setups lose.
// Every lesson is written to the day's row and the activity log the moment it is applied.
//
// PAPER ONLY. No order code here at all: only GET requests to Alpaca's paper endpoint and data feed, through the
// main agent's read-only GET helper. Trades, written to the fast-systems tables.

// deno-lint-ignore-file no-explicit-any

import {
  addDays,
  aGet,
  buildChart,
  crossover,
  DATA_BASE,
  etParts,
  heldMark,
  loadState,
  type MarketDef,
  type OptionInfo,
  optionSellPrice,
  PA_MARKETS,
  PAPER_BASE,
  readAccount,
  readClock,
  readConfig,
  readMarketsFor,
  round2,
  type Series,
  sma,
} from "./alpaca_agent.ts";

export const FS_ACTIONS = new Set(["fsTick", "fsStatus", "fsSet", "fsLog"]);
export type SystemId = "options" | "scalper";
export const FS_SYSTEMS: SystemId[] = ["options", "scalper"];
export type Dir = "up" | "down";

const stock = (symbol: string, name: string): MarketDef => ({ symbol, name, kind: "stock" });

/** Each fast system's own markets (Nov 24, 40-trades update): none of them is on the main agent's lists.
 *  A market Alpaca does not offer is left out silently (no prices come back for it). */
export const FS_LISTS: Record<SystemId, { weekday: MarketDef[]; weekend: MarketDef[] }> = {
  scalper: {
    weekday: [
      stock("DIA", "Dow Jones fund"), stock("IWM", "Russell 2000 fund"), stock("AVGO", "Broadcom"), stock("NFLX", "Netflix"),
      stock("PLTR", "Palantir"), stock("COIN", "Coinbase"), stock("MSTR", "MicroStrategy"), stock("HOOD", "Robinhood"),
      stock("SOFI", "SoFi"), stock("BAC", "Bank of America"), stock("JPM", "JPMorgan"), stock("XOM", "Exxon Mobil"),
      stock("UNH", "UnitedHealth"), stock("LLY", "Eli Lilly"), stock("CRM", "Salesforce"), stock("MU", "Micron"),
      stock("INTC", "Intel"), stock("F", "Ford"), stock("SMCI", "Super Micro"), stock("MARA", "MARA Holdings"),
      stock("RIOT", "Riot Platforms"), stock("CVX", "Chevron"), stock("PFE", "Pfizer"), stock("T", "AT&T"),
      stock("WMT", "Walmart"), stock("COST", "Costco"), stock("DIS", "Disney"), stock("BA", "Boeing"),
      stock("UBER", "Uber"), stock("SHOP", "Shopify"),
    ],
    weekend: [], // retired Nov 24: weekend crypto moved to Signal Grid
  },
  options: {
    weekday: [
      stock("IWM", "Russell 2000 fund"), stock("DIA", "Dow Jones fund"), stock("XLF", "Financials fund"), stock("BAC", "Bank of America"),
      stock("INTC", "Intel"), stock("F", "Ford"), stock("PFE", "Pfizer"), stock("SOFI", "SoFi"), stock("HOOD", "Robinhood"),
      stock("PLTR", "Palantir"), stock("COIN", "Coinbase"), stock("XLE", "Energy fund"), stock("T", "AT&T"),
      stock("VZ", "Verizon"), stock("PYPL", "PayPal"), stock("NIO", "NIO"), stock("RIVN", "Rivian"), stock("SNAP", "Snap"),
      stock("MARA", "MARA Holdings"), stock("RIOT", "Riot Platforms"), stock("UBER", "Uber"),
    ],
    weekend: [], // retired Nov 24: weekend crypto moved to Signal Grid
  },
};

export const FS_WEEKEND_NOTE = "Weekend crypto moved to Signal Grid — this system trades weekdays only.";

export const FS_RULES = {
  maxHoldMin: 30, // the 30-minute law
  exitCheckEveryMin: 1, // exit checks every 1 minute while a trade is open
  dailyTarget: 40, // trades a day, each system: a target to reach, never forced
  holdSteps: [30, 20, 12], // behind the pace, new trades get a shorter max hold first
  startPct: 0.5, // Nov 25: the entry floor, the 30-minute move in the trade's direction (learning moves it each morning)
  startMinPct: 0.5, // learning never sets the floor below +0.5% ...
  startMaxPct: 1.4, // ... or above +1.4% (the no-chase cap is 1.5% in an hour)
  learnStepPct: 0.1, // the morning review moves the floor by 0.1%
  ladderStepPct: 0.05, // the pace ladder lowers the strength by this much a step
  floorPct: 0.5, // never below this (+0.5% in 30 minutes)
  chaseCapPct: 1.5, // Nov 25: skip a market that already moved more than 1.5% in the last hour (never looser)
  chaseTightPct: 1.0, // ... 1.0% after 3 chased losses
  chopSkipAt: 4, // skip a market with 4+ fast-average crosses in the last 30 minutes ...
  chopTightSkipAt: 3, // ... 3+ after 3 chop losses
  noEntryFirstMin: 15, // no stock or option entries 9:30 to 9:45 AM ET
  cooldownMin: 5, // a market just sold is not bought again for 5 minutes (no duplicate trades)
  minLearnTrades: 5, // learning needs at least 5 closed trades to judge
  benchMinTrades: 10, // a market is judged for the bench once it has 10 or more trades ...
  benchWinPct: 40, // ... and benched under 40% wins
  streakPauseMin: 20, // Nov 25: 2 losses in a row: no entries for 20 minutes ...
  afterStreakPct: 0.8, // ... then the next entry needs +0.8% in 30 minutes
  stepUpPct: 0.1, // "one step up" (3 losses in a row: for the rest of the day)
  earlyCutMin: 5, // Nov 25: a loser in the first 5 minutes with the trend already against it is closed at once ...
  earlyCutOptionUsd: 15, // ... options down $15 or more
  earlyCutSpotPct: 0.8, // ... spot down 0.8% or more
  strictPct: 0.1, // benched 2 days in a row: this much more strength the next day
  noiseWatchMin: 10, // a stop is a noise stop if the price comes back past the entry within 10 minutes
  spot: { tradeUsd: 100, takeProfitPct: 2, stopLossPct: 1, takeProfitUsd: 2, stopLossUsd: 1 },
  options: {
    name: "Options", maxPremiumUsd: 150, minPremiumUsd: 5, strikeSteps: 6, maxExpiries: 3, minDays: 3, lessonMinDays: 7, preferMinDays: 5, preferMaxDays: 9,
    spreadMaxPct: 10, spreadTightPct: 7, lessonHoldMin: 20,
    takeProfitUsd: 50, stopLossUsd: 50, dailyStopUsd: 500, totalBrakeUsd: 1000, weekendDailyStopUsd: 50, tradeUsd: 100,
  },
  scalper: { name: "Scalper", tradeUsd: 100, dailyStopUsd: 50, totalBrakeUsd: 100 },
};

/** Weekday pace checkpoints (ET minutes from midnight -> trades done by then). */
export const PACE_CHECKPOINTS: [number, number][] = [[585, 0], [630, 7], [720, 15], [810, 23], [900, 32], [945, 38], [955, 40]];
export const PACE_LINE = "Pace: 10:30 AM 7 · 12:00 PM 15 · 1:30 PM 23 · 3:00 PM 32 · 3:45 PM 38 · 3:55 PM 40";

export const FS_RULE_LINES: Record<SystemId, string[]> = {
  options: [
    "Paper only: no order is ever sent to Alpaca.",
    "Its own markets, none of the main agent's: options on IWM, DIA, XLF, BAC, INTC, F, PFE, SOFI, HOOD, PLTR, COIN, XLE, T, VZ, PYPL, NIO, RIVN, SNAP, MARA, RIOT, UBER. Weekdays only: weekend crypto moved to Signal Grid.",
    "It buys ONE call when the trend is up or ONE put when the trend is down: slightly out of the money, 5 to 9 days to expiry preferred (never the same day, at least 3 days; 7 after the no-follow-through lesson), premium $150 or less, and never a contract whose bid/ask spread is over 10% of the premium (7% after the wide-spread lesson).",
    "Up to 40 trades a day: a MAXIMUM, never a target. If the strict entries mean fewer trades, that is correct: the screen says waiting for a real setup. No rule is ever loosened to fill the count.",
    "NEVER relaxed: the 5-minute and 15-minute trends must agree with the trade (when they do not, the market is untradeable), the slow average rising with the price above BOTH averages (for a put: falling, price below both).",
    "Strength floor: it enters only when the market moved at least +0.5% in the trade's direction in the last 30 minutes. Each morning the floor learns: entries just above it that won under 45% of their last 20 raise it 0.1%, over 60% lower it 0.1% (never below +0.5%). The screen shows Entry floor today.",
    "No chasing: a market that already moved more than 1.5% in the last hour is skipped, the move is mostly over. Choppy markets (4+ crosses in 30 minutes) are skipped too.",
    "Two losses in a row in one market: that market is benched for the rest of the day. Two losses in a row in the system: a 20-minute pause, then the next entry needs +0.8% or more in 30 minutes.",
    "Exits, checked every 1 minute: +$50 / -$50; early cut: down $15 within the first 5 minutes with the trend already against it is closed at once; the trend turning against the trade; 30 minutes reached; always out by 3:55 PM ET.",
    "Daily stop -$500, total brake -$1,000. These brakes are wide on purpose: one options loss is $50. The real protection is the strict entries and the learning: benching losing markets, the pause after 2 losses in a row, and the entry floor.",
  ],
  scalper: [
    "Paper only: no order is ever sent to Alpaca.",
    "Its own markets, none of the main agent's: DIA, IWM, AVGO, NFLX, PLTR, COIN, MSTR, HOOD, SOFI, BAC, JPM, XOM, UNH, LLY, CRM, MU, INTC, F, SMCI, MARA, RIOT, CVX, PFE, T, WMT, COST, DIS, BA, UBER, SHOP. Weekdays only: weekend crypto moved to Signal Grid.",
    "Up to 40 trades a day: a MAXIMUM, never a target. If the strict entries mean fewer trades, that is correct: the screen says waiting for a real setup. No rule is ever loosened to fill the count.",
    "NEVER relaxed: the 5-minute and 15-minute trends must agree with the trade (when they do not, the market is untradeable), the slow average rising with the price above BOTH averages (for a put: falling, price below both).",
    "Strength floor: it enters only when the market moved at least +0.5% in the trade's direction in the last 30 minutes. Each morning the floor learns: entries just above it that won under 45% of their last 20 raise it 0.1%, over 60% lower it 0.1% (never below +0.5%). The screen shows Entry floor today.",
    "No chasing: a market that already moved more than 1.5% in the last hour is skipped, the move is mostly over. Choppy markets (4+ crosses in 30 minutes) are skipped too.",
    "Two losses in a row in one market: that market is benched for the rest of the day. Two losses in a row in the system: a 20-minute pause, then the next entry needs +0.8% or more in 30 minutes.",
    "$100 a trade, one position at a time. Exits, checked every 1 minute: +2% / -1% (a noisy market may get -1.25% / +1.5% after the noise-stop lesson); early cut: down 0.8% within the first 5 minutes with the trend already against it is closed at once; the trend turning down; 30 minutes reached. Stock positions always close by 3:55 PM ET.",
    "Daily stop -$50, total brake -$100 (this system's own).",
  ],
};

export function listFor(id: SystemId, weekend: boolean): MarketDef[] {
  return weekend ? FS_LISTS[id].weekend : FS_LISTS[id].weekday;
}

// ─────────────────────────────────────────────────────────────── pure rules (tested)

/** How far the price moved over the last 15 minutes, in %: the price now against the close 3 five-minute
 *  candles before the last finished one. null when there are too few candles. */
export function strengthPct(closes: number[], price: number): number | null {
  if (closes.length < 7) return null;
  const ref = closes[closes.length - 7]; // Nov 25: 30 minutes (6 five-minute candles before the last finished one)
  const p = price || closes[closes.length - 1];
  return ref > 0 ? (p - ref) / ref * 100 : null;
}

/** How far the price moved in the last 60 minutes, in %. null with too few candles. */
export function hourMovePct(closes: number[], price: number): number | null {
  if (closes.length < 13) return null;
  const ref = closes[closes.length - 13];
  const p = price || closes[closes.length - 1];
  return ref > 0 ? (p - ref) / ref * 100 : null;
}

/** 9:30 to 9:45 AM ET on a weekday: no new stock or option entries. */
export function openingWindow(et: { weekend: boolean; hour: number; minute: number }): boolean {
  return !et.weekend && et.hour === 9 && et.minute >= 30 && et.minute < 30 + FS_RULES.noEntryFirstMin;
}

/** Minutes a trade has been open. */
export function heldMinutes(entryAt: string, now: Date): number {
  const t = Date.parse(entryAt);
  return Number.isFinite(t) ? (now.getTime() - t) / 60000 : 0;
}

/** The max-hold law: true at the last 1-minute check before the max hold (30, 20 or 12 minutes), so no trade is
 *  ever still open at the next check. */
export function mustHardClose(entryAt: string, now: Date, maxHold = FS_RULES.maxHoldMin): boolean {
  return heldMinutes(entryAt, now) >= maxHold - FS_RULES.exitCheckEveryMin;
}

/** The trading window: weekdays 9:30 AM to 4:00 PM ET. No window on weekends (weekend crypto moved to Signal Grid). */
export function tradingWindow(et: { weekend: boolean; hour: number; minute: number }) {
  const mins = et.hour * 60 + et.minute;
  const [start, end] = et.weekend ? [0, 0] : [9 * 60 + 30, 16 * 60];
  return { start, end, mins, inWindow: mins >= start && mins < end, minutesLeft: Math.max(0, end - mins), length: end - start };
}

/** Trades expected by now: the weekday checkpoints (straight lines between them), or 40 spread over a weekend day. */
export function expectedBy(et: { weekend: boolean; hour: number; minute: number }): number {
  const mins = et.hour * 60 + et.minute;
  if (et.weekend) return 0;
  const cp = PACE_CHECKPOINTS;
  if (mins <= cp[0][0]) return 0;
  for (let i = 1; i < cp.length; i++) {
    if (mins <= cp[i][0]) {
      const [m0, t0] = cp[i - 1], [m1, t1] = cp[i];
      return Math.floor(t0 + (t1 - t0) * (mins - m0) / (m1 - m0));
    }
  }
  return FS_RULES.dailyTarget;
}

/** The pace ladder for 40 a day. Behind the pace, in order: (1) shorter max hold for new trades (20 min from 1
 *  behind, 12 min from 3 behind); (2) from 5 behind, the strength needed steps down 0.05% for every 2 more behind,
 *  never below +0.12%; (3) from 8 behind, it tries the top 5 passing setups instead of the top 3. Each step is a
 *  plain line for the screen. Once 40 are done it goes back to the day's start. */
export function paceLadder(et: { weekend: boolean; hour: number; minute: number }, trades: number, startPct = FS_RULES.startPct) {
  const w = tradingWindow(et);
  const target = FS_RULES.dailyTarget;
  const expected = expectedBy(et);
  const done = trades >= target;
  const deficit = done ? 0 : Math.max(0, expected - trades);
  // Nov 25: 40 is a MAXIMUM, never a target to force. Being behind changes nothing: the hold stays 30 minutes and
  // the entry floor is never lowered. Fewer trades on a quiet day is correct.
  const maxHold = FS_RULES.holdSteps[0];
  const steps = 0;
  const thresholdPct = round2(Math.max(FS_RULES.floorPct, startPct));
  const topN = 3;
  const level = 0;
  const lines: string[] = [];
  return {
    target, trades, remaining: Math.max(0, target - trades), expected, deficit, steps, done, level, lines,
    startPct, thresholdPct, maxHold, topN, minutesLeft: w.minutesLeft, inWindow: w.inWindow,
  };
}

/** True when 40 can no longer be reached without breaking a rule: each trade needs at least two 1-minute checks
 *  (one to buy, one to sell), one position at a time, and no new trades in the last 5 minutes on weekdays. */
export function paceImpossible(et: { weekend: boolean; hour: number; minute: number }, trades: number): boolean {
  const w = tradingWindow(et);
  if (trades >= FS_RULES.dailyTarget) return false;
  const usable = Math.max(0, w.minutesLeft - (et.weekend ? 0 : 5));
  return trades + Math.floor(usable / 2) < FS_RULES.dailyTarget;
}

/** Each morning: the system's own last 20 closed trades set today's starting strength. Under 50% wins: 0.05%
 *  stricter; 60% or more: 0.05% looser; always between +0.2% and +0.5%. Fewer than 5 trades: no change. */
export function learnStart(prevStartPct: number, pnlsNewestFirst: number[]): { startPct: number; line: string } {
  const last = pnlsNewestFirst.slice(0, 20);
  const prev = round2(prevStartPct);
  if (last.length < FS_RULES.minLearnTrades) {
    return { startPct: prev, line: `Only ${last.length} closed trade(s) so far, too few to judge: it starts at +${prev.toFixed(2)}% as before.` };
  }
  const wins = last.filter((p) => p > 0).length;
  const rate = Math.round(wins / last.length * 100);
  const clamp = (v: number) => round2(Math.max(FS_RULES.startMinPct, Math.min(FS_RULES.startMaxPct, v)));
  if (rate < 50) {
    const s = clamp(prev + FS_RULES.learnStepPct);
    return { startPct: s, line: `Its last ${last.length} trades won ${rate}% (under 50%), so today it is pickier: it starts at +${s.toFixed(2)}% instead of +${prev.toFixed(2)}%.` };
  }
  if (rate >= 60) {
    const s = clamp(prev - FS_RULES.learnStepPct);
    return { startPct: s, line: `Its last ${last.length} trades won ${rate}% (60% or more), so today it can be a little looser: it starts at +${s.toFixed(2)}% instead of +${prev.toFixed(2)}%.` };
  }
  return { startPct: prev, line: `Its last ${last.length} trades won ${rate}% (between 50% and 60%), so it keeps the same start: +${prev.toFixed(2)}%.` };
}

/** Nov 25: each morning the entry floor learns from the entries it allows. The bucket = closed trades whose entry
 *  strength was within 0.3% above the floor; its last 20: under 45% wins raises the floor 0.1%, over 60% lowers it
 *  0.1% (never below +0.5%). Fewer than 5 trades in the bucket: no change. */
export function learnFloor(prevFloor: number, trades: { pnl: number; strength: number | null }[]): { floor: number; line: string } {
  const prev = round2(Math.max(FS_RULES.startMinPct, prevFloor));
  const bucket = trades.filter((t) => t.strength != null && t.strength >= prev && t.strength < prev + 0.3).slice(0, 20);
  const name = `entries from +${prev.toFixed(1)}% to +${(prev + 0.3).toFixed(1)}%`;
  if (bucket.length < FS_RULES.minLearnTrades) {
    return { floor: prev, line: `Entry floor today: +${prev.toFixed(2)}% (only ${bucket.length} trade(s) in ${name}, too few to judge).` };
  }
  const rate = Math.round(bucket.filter((t) => t.pnl > 0).length / bucket.length * 100);
  const clamp = (v: number) => round2(Math.max(FS_RULES.startMinPct, Math.min(FS_RULES.startMaxPct, v)));
  if (rate < 45) {
    const f = clamp(prev + FS_RULES.learnStepPct);
    return { floor: f, line: `Entry floor today: +${f.toFixed(2)}% (raised: ${name} won only ${rate}% of their last ${bucket.length}).` };
  }
  if (rate > 60) {
    const f = clamp(prev - FS_RULES.learnStepPct);
    return { floor: f, line: `Entry floor today: +${f.toFixed(2)}% (${f < prev ? "lowered" : "kept at the lowest"}: ${name} won ${rate}% of their last ${bucket.length}).` };
  }
  return { floor: prev, line: `Entry floor today: +${prev.toFixed(2)}% (kept: ${name} won ${rate}% of their last ${bucket.length}).` };
}

/** A system's own record in one market: its last 20 closed trades. */
export type MarketRecord = { n: number; wins: number; losses: number; pnl: number; topLoss?: string | null };
export const EMPTY_RECORD: MarketRecord = { n: 0, wins: 0, losses: 0, pnl: 0, topLoss: null };

export function marketRecord(pnlsNewestFirst: number[], lossReasons: (string | null)[] = []): MarketRecord {
  const last = pnlsNewestFirst.slice(0, 20);
  const wins = last.filter((p) => p > 0).length;
  const counts: Record<string, number> = {};
  lossReasons.slice(0, 20).forEach((r, i) => { if (r && (last[i] ?? 1) <= 0) counts[r] = (counts[r] ?? 0) + 1; });
  const topLoss = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  return { n: last.length, wins, losses: last.length - wins, pnl: round2(last.reduce((s, p) => s + p, 0)), topLoss };
}

/** Closes sampled every `n` candles, ending with the last one (5-minute candles -> 15-minute or 1-hour closes). */
export function sampleEvery(closes: number[], n: number): number[] {
  const out: number[] = [];
  for (let i = closes.length - 1; i >= 0; i -= n) out.unshift(closes[i]);
  return out;
}

type Trend = "up" | "down" | "flat" | "unknown";

export type Analysis = {
  fast: number | null; // 5-minute fast average (9 candles)
  slow: number | null; // 5-minute slow average (21 candles)
  slowRising: boolean;
  slowFalling: boolean;
  priceAbove: boolean; // the price above the slow average
  priceBelow: boolean;
  strength: number | null; // 15-minute move in %, signed
  trend5: Trend; // fast vs slow on 5-minute candles
  trend15: Trend; // 15-minute closes: average of 4 vs average of 8
  trend60: Trend; // 1-hour closes: price and the 4-hour average, and that average rising or falling
  chop: number; // crosses of the fast average in the last 30 minutes
  dir: Dir | null; // up: trends up, slow rising, price above. down: the mirror. null: neither (never traded)
  dirStrength: number | null; // the 30-minute move in the trade's direction
  hourMove: number | null; // the 60-minute move in %, signed
  dirHourMove: number | null; // the 60-minute move in the trade's direction
  falling: boolean; // for a buy: never bought (slow not rising, price not above, or trends not both up)
  trend: Trend; // = trend5 (for the charts)
  score: number; // base ranking score: strength in the direction, trend agreement, the 1-hour trend agreeing
};

function trendOf(f: number | null, s: number | null): Trend {
  return f == null || s == null ? "unknown" : f > s ? "up" : f < s ? "down" : "flat";
}

/** Everything the entry rules and the loss grading need, from 5-minute closes and the price now. */
export function analyzeMarket(closes: number[], price: number): Analysis {
  const x = crossover(closes);
  const p = price || closes[closes.length - 1] || 0;
  const fast = x.fastNow, slow = x.slowNow;
  const strength = strengthPct(closes, p);
  const slowRising = slow != null && x.slowBefore != null && slow > x.slowBefore;
  const slowFalling = slow != null && x.slowBefore != null && slow < x.slowBefore;
  const priceAbove = slow != null && p > slow;
  const priceBelow = slow != null && p < slow;
  const trend5 = trendOf(fast, slow);
  const c15 = sampleEvery(closes, 3);
  const trend15 = trendOf(sma(c15, 4), sma(c15, 8));
  const c60 = sampleEvery(closes, 12);
  const avg60 = sma(c60, 4);
  const avg60Prev = c60.length > 4 ? sma(c60.slice(0, -1), 4) : null;
  const trend60: Trend = avg60 == null || avg60Prev == null ? "unknown"
    : p > avg60 && avg60 > avg60Prev ? "up" : p < avg60 && avg60 < avg60Prev ? "down" : "flat";
  let chop = 0, side0 = 0;
  for (let i = Math.max(9, closes.length - 7); i < closes.length; i++) {
    const f = sma(closes.slice(0, i + 1), 9);
    if (f == null) continue;
    const side = Math.sign(closes[i] - f);
    if (side0 !== 0 && side !== 0 && side !== side0) chop++;
    if (side !== 0) side0 = side;
  }
  // Nov 25: also the price above BOTH averages for a buy or call (below both for a put).
  const aboveFast = fast != null && p > fast, belowFast = fast != null && p < fast;
  const up = trend5 === "up" && trend15 === "up" && slowRising && priceAbove && aboveFast;
  const down = trend5 === "down" && trend15 === "down" && slowFalling && priceBelow && belowFast;
  const hourMove = hourMovePct(closes, p);
  const dir: Dir | null = up ? "up" : down ? "down" : null;
  const dirStrength = strength == null ? null : dir === "down" ? -strength : strength;
  const dirHourMove = hourMove == null ? null : dir === "down" ? -hourMove : hourMove;
  const s = Math.max(-2, Math.min(2, dirStrength ?? -2));
  const score = round2(s * 2 + (dir ? 2 : 0) + (dir && trend60 === dir ? 1 : 0));
  return {
    fast, slow, slowRising, slowFalling, priceAbove, priceBelow, strength, trend5, trend15, trend60, chop, dir, dirStrength,
    hourMove, dirHourMove, falling: !up, trend: trend5, score,
  };
}

export type EntryRules = {
  thresholdPct: number; // the strength needed (at least +0.12%)
  chaseCapPct: number; // skip above this move in 15 minutes
  chopSkipAt: number; // skip at this many crosses or more
  need60: boolean; // the 1-hour trend must agree (after the against-trend lesson)
  allowDown: boolean; // puts (Options on weekdays)
};

export const DEFAULT_ENTRY: EntryRules = {
  thresholdPct: FS_RULES.startPct, chaseCapPct: FS_RULES.chaseCapPct, chopSkipAt: FS_RULES.chopSkipAt, need60: false, allowDown: false,
};

export type EntryCheck = { ok: boolean; fail?: "falling" | "weak" | "chased" | "chop" | "against60"; text: string };

/** Every entry rule for one market, in order. The NEVER rules first (trends agree, not falling for a buy). */
export function entryCheck(a: Analysis, r: EntryRules): EntryCheck {
  const pct = (v: number | null) => v == null ? "?" : `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
  if (!a.dir || (a.dir === "down" && !r.allowDown)) {
    const agree = a.trend5 === a.trend15 && (a.trend5 === "up" || a.trend5 === "down");
    const why = !agree ? "the 5-minute and 15-minute trends do not agree" : a.trend5 === "down" && !r.allowDown ? "falling" : "the price is not on the right side of both averages";
    return { ok: false, fail: "falling", text: `${why}, never traded` };
  }
  if (a.dirStrength == null) return { ok: false, fail: "weak", text: "too few candles" };
  if (a.chop >= r.chopSkipAt) return { ok: false, fail: "chop", text: `choppy: ${a.chop} crosses in 30 min (skips at ${r.chopSkipAt}+)` };
  if (a.dirHourMove != null && a.dirHourMove > r.chaseCapPct) {
    return { ok: false, fail: "chased", text: `already moved ${pct(a.dirHourMove)} in the last hour (over ${r.chaseCapPct.toFixed(1)}%: the move is mostly over)` };
  }
  if (a.dirStrength < r.thresholdPct) return { ok: false, fail: "weak", text: `${pct(a.dirStrength)} in 30 min, needs +${r.thresholdPct.toFixed(2)}%` };
  if (r.need60 && a.trend60 !== a.dir) return { ok: false, fail: "against60", text: `the 1-hour trend is ${a.trend60}, it must agree now` };
  return { ok: true, text: `passes: ${pct(a.dirStrength)} in 30 min ${a.dir === "down" ? "down" : "up"}, trends agree, price ${a.dir === "down" ? "below" : "above"} both averages` };
}

/** Kept for the old callers and tests: passes at this strength as a buy. */
export function passes(a: Analysis, thresholdPct: number): boolean {
  return entryCheck(a, { ...DEFAULT_ENTRY, thresholdPct, chaseCapPct: 99, chopSkipAt: 99 }).ok;
}

export type Bucket = "weak" | "medium" | "strong";
/** Setup size by the 15-minute move at entry: weak under +0.30%, medium +0.30% to +0.50%, strong +0.50% or more. */
export function bucketOf(dirStrength: number | null): Bucket {
  const s = dirStrength ?? 0;
  return s < 0.3 ? "weak" : s < 0.5 ? "medium" : "strong";
}

export type ScoreParts = { base: number; record: number; bucket: number; total: number };

/** The ranking score: strength and trend agreement (base), the market's own last-20 record (-1 to +1, needs 5
 *  trades), and +0.5 for the preferred (winning) setup size or -0.5 for a losing strong size. */
export function rankScore(a: Analysis, rec: MarketRecord | undefined, preferred: Bucket | null, penalized: Bucket | null): ScoreParts {
  const record = rec && rec.n >= FS_RULES.minLearnTrades ? round2(Math.max(-1, Math.min(1, (rec.wins / rec.n - 0.5) * 2))) : 0;
  const b = bucketOf(a.dirStrength);
  const bucket = preferred === b ? 0.5 : penalized === b ? -0.5 : 0;
  return { base: a.score, record, bucket, total: round2(a.score + record + bucket) };
}

/** Rank all markets (best score first) and take the top-ranked one that passes every rule. */
export function pickRanked<T extends { a: Analysis; score?: number; check?: EntryCheck }>(
  items: T[],
  thresholdOrCheck: number | ((x: T) => EntryCheck),
): { pick: T | null; ranked: T[]; passing: T[] } {
  const check = typeof thresholdOrCheck === "number"
    ? (x: T) => ({ ok: passes(x.a, thresholdOrCheck), text: "" } as EntryCheck)
    : thresholdOrCheck;
  const ranked = [...items].sort((x, y) => (y.score ?? y.a.score) - (x.score ?? x.a.score));
  const passing = ranked.filter((x) => check(x).ok);
  return { pick: passing[0] ?? null, ranked, passing };
}

// ── exits

export type FastShadow = {
  symbol: string; qty: number; entryPrice: number; entryAt: string; mult?: number; option?: OptionInfo;
  dir?: Dir; tpUsd?: number; slUsd?: number; maxHold?: number; spot?: number; why?: string; entry?: Record<string, unknown>;
};

export type ExitInput = {
  system: SystemId;
  shadow: FastShadow;
  price: number; // what is held is worth now, per unit (for an option: its premium per share)
  now: Date;
  trendAgainst: boolean; // the fast line crossed against the trade
  closeOut: boolean; // weekday stock or option: 3:55 PM ET
  trendNowAgainst?: boolean; // Nov 25: the 5-minute trend is already against the trade (for the early cut)
};

export type ExitKind = "take profit" | "stop loss" | "early cut" | "max hold" | "3:55 close" | "trend turned" | "hold";

/** Take profit and stop loss in dollars for a new trade: options $50 / $50, spot 2% / 1% of $100; a market with the
 *  noise-stop lesson gets the stop 25% wider and the take profit 25% smaller. */
export function exitLevels(option: boolean, noisy: boolean): { tpUsd: number; slUsd: number } {
  const tp = option ? FS_RULES.options.takeProfitUsd : FS_RULES.spot.takeProfitUsd;
  const sl = option ? FS_RULES.options.stopLossUsd : FS_RULES.spot.stopLossUsd;
  return noisy ? { tpUsd: round2(tp * 0.75), slUsd: round2(sl * 1.25) } : { tpUsd: tp, slUsd: sl };
}

/** The exit rules, in order: take profit, stop loss, the max-hold close, the 3:55 PM close, the trend turning
 *  against the trade. Otherwise hold. */
export function fastExit(x: ExitInput): { sell: boolean; reason: string; pnl: number; kind: ExitKind } {
  const m = x.shadow.mult ?? 1;
  const p = x.price || x.shadow.entryPrice;
  const pnl = round2(x.shadow.qty * m * (p - x.shadow.entryPrice));
  const money = `${pnl >= 0 ? "+" : "-"}$${Math.abs(pnl).toFixed(2)}`;
  const lv = exitLevels(!!x.shadow.option, false);
  const tp = x.shadow.tpUsd ?? lv.tpUsd, sl = x.shadow.slUsd ?? lv.slUsd;
  const hold = x.shadow.maxHold ?? FS_RULES.maxHoldMin;
  const mins = heldMinutes(x.shadow.entryAt, x.now);
  if (pnl >= tp) return { sell: true, kind: "take profit", reason: `take profit hit (${money})`, pnl };
  if (pnl <= -sl) return { sell: true, kind: "stop loss", reason: `stop loss hit (${money})`, pnl };
  // Nov 25: cut losers faster. In the first 5 minutes, down $15 (option) or 0.8% (spot) with the trend already
  // against it: closed at once, without waiting for the full stop or the max hold.
  const cost = x.shadow.qty * m * x.shadow.entryPrice;
  const cut = x.shadow.option ? FS_RULES.earlyCutOptionUsd : cost * FS_RULES.earlyCutSpotPct / 100;
  if (x.trendNowAgainst && mins <= FS_RULES.earlyCutMin + 0.5 && pnl <= -cut) {
    return { sell: true, kind: "early cut", reason: `early cut: ${money} within ${Math.max(1, Math.round(mins))} min and the trend already turned against it`, pnl };
  }
  if (mustHardClose(x.shadow.entryAt, x.now, hold)) {
    return { sell: true, kind: "max hold", reason: `${hold}-minute law: closed after ${Math.floor(mins)} min (${money})`, pnl };
  }
  if (x.closeOut) return { sell: true, kind: "3:55 close", reason: `3:55 PM ET close, never overnight (${money})`, pnl };
  if (x.trendAgainst) return { sell: true, kind: "trend turned", reason: `trend turned ${x.shadow.dir === "down" ? "up, against the put" : "down"} (${money})`, pnl };
  return { sell: false, kind: "hold", reason: `holding (${money}), ${Math.max(0, hold - Math.floor(mins))} min left at most`, pnl };
}

// ── loss reasons

export type LossReason = "AGAINST_TREND" | "CHASED" | "CHOP" | "NOISE_STOP" | "NO_FOLLOW_THROUGH" | "WIDE_SPREAD";
export const LOSS_REASONS: LossReason[] = ["AGAINST_TREND", "CHASED", "CHOP", "NOISE_STOP", "NO_FOLLOW_THROUGH", "WIDE_SPREAD"];

/** The grading lines. The entry filters already skip moves over 0.8%, 4+ crosses and spreads over 10%, so a loss is
 *  graded at the level the matching lesson tightens to: chased past +0.5%, choppy at 3+ crosses, spread over 7%. */
export const GRADE = { chasedPct: 1.0, chopCrosses: 3, spreadPct: 7, decayMovePct: 0.3 };

export const LOSS_WORDS: Record<LossReason, string> = {
  AGAINST_TREND: "the 1-hour trend was against the trade (against trend)",
  CHASED: "entered after the move already ran (chased)",
  CHOP: "the market was choppy, no real trend to ride (chop)",
  NOISE_STOP: "stopped out, then the price came back past the entry within 10 minutes: the stop was too tight (noise stop)",
  NO_FOLLOW_THROUGH: "the setup was fine but the price never followed through (no follow-through)",
  WIDE_SPREAD: "the option's bid/ask spread was wide at entry (wide spread)",
};

export type EntryConditions = {
  dir: Dir; trend5: Trend; trend15: Trend; trend60: Trend; fast: number | null; slow: number | null;
  priceVsSlow: "above" | "below"; slowRising: boolean; strength: number | null; dirStrength: number | null;
  ranOver08: boolean; chop: number; bucket: Bucket; spot: number; spreadPct?: number | null; dirHourMove?: number | null;
};

/** Exactly one main reason for a loss, from the saved entry conditions. A stop-loss exit with none of the entry
 *  reasons is graded no-follow-through for now and watched for 10 minutes: if the price comes back past the
 *  entry it becomes a noise stop. `watch` says to start that watch. */
export function gradeLoss(c: EntryConditions, kind: ExitKind, option: boolean, underlyingMovePct: number | null): { reason: LossReason; text: string; watch: boolean } {
  const t = (r: LossReason, extra = "") => ({ reason: r, text: LOSS_WORDS[r] + extra, watch: false });
  if (option && c.spreadPct != null && c.spreadPct > GRADE.spreadPct) return t("WIDE_SPREAD", ` (${c.spreadPct.toFixed(1)}% of the premium)`);
  const against = c.dir === "up" ? "down" : "up";
  if (c.trend60 === against) return t("AGAINST_TREND");
  const ran = (c as any).dirHourMove ?? null;
  if (ran != null && ran > GRADE.chasedPct) return t("CHASED", ` (+${Number(ran).toFixed(2)}% in the hour before)`);
  if (c.chop >= GRADE.chopCrosses) return t("CHOP", ` (${c.chop} crosses in 30 minutes)`);
  const decay = option && underlyingMovePct != null && Math.abs(underlyingMovePct) < GRADE.decayMovePct ? " — the stock barely moved, time decay did the damage" : "";
  return { ...t("NO_FOLLOW_THROUGH", decay), watch: kind === "stop loss" || kind === "early cut" };
}

/** A noise stop: after a stop, the price came back past the entry (for a put: back below it). */
export function recovered(dir: Dir, entrySpot: number, priceNow: number): boolean {
  return dir === "down" ? priceNow > 0 && priceNow <= entrySpot : priceNow >= entrySpot;
}

// ── lessons

export type Lesson = { key: string; text: string; at?: string };
export type TradeRow = {
  id?: number; market: string; pnl: number; loss_reason: string | null; et_day: string;
  conditions?: Partial<EntryConditions> | null; exit_at?: string;
};

/** Lessons from the system's own recent trades (newest first) that are not active yet. `morning`: the start of the
 *  day (benches reset then, so no bench). Rules: a market under 40% wins over its last 10+ trades is benched; a
 *  loss reason behind 3 of the last 10 losses applies its fix; a setup size under 40% over its last 15 (10+
 *  trades) raises the minimum strength (or ranks strong setups lower); a size at 60%+ becomes preferred. */
export function evaluateLessons(system: SystemId, trades: TradeRow[], todayKey: string, active: Set<string>, morning = false): Lesson[] {
  const out: Lesson[] = [];
  const add = (key: string, text: string) => { if (!active.has(key) && !out.some((l) => l.key === key)) out.push({ key, text }); };

  if (!morning) {
    const tradedToday = new Set(trades.filter((t) => t.et_day === todayKey).map((t) => t.market));
    for (const m of tradedToday) {
      // Nov 25: 2 losses in a row in this market today: benched for the rest of the day.
      const mine = trades.filter((t) => t.market === m && t.et_day === todayKey);
      if (mine.length >= 2 && mine[0].pnl <= 0 && mine[1].pnl <= 0) {
        add(`bench:${m}`, `${short(m)} benched for today — lost 2 in a row`);
        continue;
      }
      const last = trades.filter((t) => t.market === m).slice(0, 20);
      if (last.length < FS_RULES.benchMinTrades) continue;
      const wins = last.filter((t) => t.pnl > 0).length;
      if (wins / last.length * 100 < FS_RULES.benchWinPct) add(`bench:${m}`, `${short(m)} benched for today — lost ${last.length - wins} of its last ${last.length}`);
    }
  }

  const losses = trades.filter((t) => t.pnl <= 0).slice(0, 10);
  const count = (r: LossReason) => losses.filter((t) => t.loss_reason === r).length;
  if (count("CHASED") >= 3) add("chase", `No-chase cap tightened to 0.5% — ${count("CHASED")} of the last ${losses.length} losses were chased`);
  if (count("CHOP") >= 3) add("chop", `Chop filter tightened (skips at 3+ crosses) — ${count("CHOP")} of the last ${losses.length} losses were in chop`);
  if (count("AGAINST_TREND") >= 3) add("trend60", `The 1-hour trend must now agree — ${count("AGAINST_TREND")} of the last ${losses.length} losses were against it`);
  if (count("NOISE_STOP") >= 3) {
    for (const m of new Set(losses.filter((t) => t.loss_reason === "NOISE_STOP").map((t) => t.market))) {
      add(`noise:${m}`, `${short(m)}: stop widened 25% and take profit cut 25% — its stops were too tight (${count("NOISE_STOP")} noise stops in the last ${losses.length} losses)`);
    }
  }
  if (system === "options") {
    if (count("NO_FOLLOW_THROUGH") >= 3) add("nft", `Options: max hold 20 min and only contracts with 7+ days to expiry — ${count("NO_FOLLOW_THROUGH")} of the last ${losses.length} losses had no follow-through`);
    if (count("WIDE_SPREAD") >= 3) add("spread", `Options: spread limit tightened to 7% of the premium — ${count("WIDE_SPREAD")} losses had wide spreads`);
  }

  // Nov 25: the old setup-size lessons are replaced by the entry floor, learned each morning (learnFloor).
  return out;
}

/** The loss streak now: losses in a row at the end of today's trades (newest first). */
export function lossStreak(trades: TradeRow[], todayKey: string): number {
  let n = 0;
  for (const t of trades) {
    if (t.et_day !== todayKey || t.pnl > 0) break;
    n++;
  }
  return n;
}

export type ActiveRules = EntryRules & {
  benched: Record<string, string>;
  strict: Set<string>;
  noisy: Set<string>;
  maxHold: number;
  optMinDays: number;
  spreadMaxPct: number;
  preferred: Bucket | null;
  penalized: Bucket | null;
  bucketMinPct: number;
  extraPct: number; // added to the strength needed (streak lessons)
};

/** What today's lessons and the pace mean for the next entry. The strength never goes below +0.12%. */
export function activeRules(system: SystemId, weekend: boolean, lessons: Lesson[], pace: { thresholdPct: number; maxHold: number }, stepUpNext: boolean): ActiveRules {
  const has = (k: string) => lessons.some((l) => l.key === k);
  const keyed = (p: string) => lessons.filter((l) => l.key.startsWith(p));
  const benched: Record<string, string> = {};
  for (const l of keyed("bench:")) benched[l.key.slice(6)] = l.text;
  const bucketMinPct = has("bucket:medium") ? 0.5 : has("bucket:weak") ? 0.3 : 0;
  const extraPct = has("streak3") ? FS_RULES.stepUpPct : 0;
  const thresholdPct = round2(Math.max(FS_RULES.floorPct, pace.thresholdPct + extraPct, bucketMinPct, stepUpNext ? FS_RULES.afterStreakPct : 0));
  const isOpt = system === "options" && !weekend;
  return {
    thresholdPct,
    chaseCapPct: has("chase") ? FS_RULES.chaseTightPct : FS_RULES.chaseCapPct,
    chopSkipAt: has("chop") ? FS_RULES.chopTightSkipAt : FS_RULES.chopSkipAt,
    need60: has("trend60"),
    allowDown: isOpt,
    benched,
    strict: new Set(keyed("strict:").map((l) => l.key.slice(7))),
    noisy: new Set(keyed("noise:").map((l) => l.key.slice(6))),
    maxHold: isOpt && has("nft") ? Math.min(pace.maxHold, FS_RULES.options.lessonHoldMin) : pace.maxHold,
    optMinDays: has("nft") ? FS_RULES.options.lessonMinDays : FS_RULES.options.minDays,
    spreadMaxPct: has("spread") ? FS_RULES.options.spreadTightPct : FS_RULES.options.spreadMaxPct,
    preferred: (keyed("pref:")[0]?.key.slice(5) as Bucket) ?? null,
    penalized: has("bucket:strong") ? "strong" : null,
    bucketMinPct,
    extraPct,
  };
}

/** The morning review: yesterday (the last day with trades) in 3 to 5 plain lines. */
export function morningReview(trades: TradeRow[], todayKey: string, startLine: string, carried: Lesson[]): string[] {
  const prevDay = trades.find((t) => t.et_day < todayKey)?.et_day;
  const lines: string[] = [];
  if (!prevDay) {
    lines.push("No trades before today yet, so there is nothing to learn from so far.");
  } else {
    const y = trades.filter((t) => t.et_day === prevDay);
    const wins = y.filter((t) => t.pnl > 0).length;
    const pnl = round2(y.reduce((s, t) => s + t.pnl, 0));
    lines.push(`${prevDay}: ${y.length} trades, ${wins} wins, ${y.length - wins} losses, ${pnl >= 0 ? "+" : "-"}$${Math.abs(pnl).toFixed(2)}.`);
    const reasons: Record<string, number> = {};
    for (const t of y) if (t.pnl <= 0 && t.loss_reason) reasons[t.loss_reason] = (reasons[t.loss_reason] ?? 0) + 1;
    const top = Object.entries(reasons).sort((a, b) => b[1] - a[1])[0];
    if (top) lines.push(`Most losses came from: ${LOSS_WORDS[top[0] as LossReason] ?? top[0]} (${top[1]} of ${y.length - wins}).`);
    const by: Record<string, number> = {};
    for (const t of y) by[t.market] = round2((by[t.market] ?? 0) + t.pnl);
    const sorted = Object.entries(by).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 1) {
      const [bm, bp] = sorted[0], [wm, wp] = sorted[sorted.length - 1];
      lines.push(`Best market: ${short(bm)} (${bp >= 0 ? "+" : "-"}$${Math.abs(bp).toFixed(2)}). Worst: ${short(wm)} (${wp >= 0 ? "+" : "-"}$${Math.abs(wp).toFixed(2)}).`);
    }
  }
  lines.push(startLine);
  if (carried.length) lines.push(`Carried into today: ${carried.map((l) => l.text).join("; ")}.`);
  return lines.slice(0, 5);
}

const short = (sym: string) => sym.replace("/USD", "");

/** Friday of this week (ET) as "YYYY-MM-DD"; on Saturday and Sunday, the coming Friday. */
export function fridayOf(todayKey: string, weekday: string): string {
  const idx: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 };
  const d = idx[weekday] ?? 1;
  return addDays(todayKey, d === 6 ? 6 : (5 - d + 7) % 7);
}

type Contract = { symbol: string; strike: number; expiry: string };

/** The contracts to try, in order: the nearest expiries at least `minExpiry` (up to 3), and in each the strikes
 *  just out of the money (calls above the price, puts below), nearest first. */
export function contractLadder(
  contracts: Contract[],
  spot: number,
  right: "call" | "put",
  minExpiry: string,
  steps = FS_RULES.options.strikeSteps,
  maxExpiries = FS_RULES.options.maxExpiries,
  prefer?: [string, string],
): Contract[] {
  const ok = contracts.filter((c) => c.expiry >= minExpiry && (right === "call" ? c.strike > spot : c.strike < spot));
  // Nov 25: expiries 5 to 9 days out first (`prefer`), then the others, nearest first.
  const inPref = (e: string) => !!prefer && e >= prefer[0] && e <= prefer[1];
  const expiries = [...new Set(ok.map((c) => c.expiry))].sort((a, b) => (inPref(a) ? 0 : 1) - (inPref(b) ? 0 : 1) || a.localeCompare(b)).slice(0, maxExpiries);
  const out: Contract[] = [];
  for (const e of expiries) {
    out.push(...ok.filter((c) => c.expiry === e).sort((a, b) => right === "call" ? a.strike - b.strike : b.strike - a.strike).slice(0, steps));
  }
  return out;
}

/** The spread as % of the premium (the ask). No bid: 100%. */
export function spreadPct(bid: number, ask: number): number {
  return ask > 0 && bid > 0 ? round2((ask - bid) / ask * 100) : 100;
}

/** Why the day ended (or is heading) below 40, in plain words, from what blocked the checks most. */
export function blockReason(blocks: Record<string, number>): string {
  const words: Record<string, string> = {
    falling: "markets were falling or their trends disagreed — the never-relaxed trend rules blocked the rest",
    weak: "no market was moving enough, even at the lowest allowed strength",
    chased: "the moving markets had already run too far (the no-chase cap)",
    chop: "the moving markets were choppy",
    against60: "the 1-hour trend did not agree (a lesson made that a must)",
    benched: "its best markets were benched by the lessons",
    paused: "the pause after 2 losses in a row",
    noContract: "no option contract under $150 with a tight enough spread",
    notEnabled: "options are not enabled on the paper account",
    brake: "a brake stopped it (the daily stop or the total brake)",
    noData: "there were no prices for its markets",
    closed: "the market was closed (a holiday)",
  };
  const top = Object.entries(blocks).filter(([k]) => k in words).sort((a, b) => b[1] - a[1])[0];
  return top ? words[top[0]] : "it had too little time in the market today";
}

// ─────────────────────────────────────────────────────────────── database

async function loadFs(db: any): Promise<Record<SystemId, any>> {
  const { data, error } = await db.from("ngmy_fast_state").select("*");
  if (error) throw new Error(`fast systems table: ${error.message}`);
  const out: any = {};
  for (const r of data ?? []) out[r.id] = r;
  for (const id of FS_SYSTEMS) if (!out[id]) throw new Error("fast systems tables are not set up yet, run the setup SQL");
  return out;
}

async function saveFs(db: any, id: SystemId, patch: Record<string, unknown>) {
  await db.from("ngmy_fast_state").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", id);
}

async function logFs(db: any, id: SystemId, row: Record<string, unknown>) {
  await db.from("ngmy_fast_log").insert({ system: id, et_time: etParts(new Date()).label, ...row });
}

/** The learning store: the system's own closed trades, newest first. Empty when the table is not set up yet. */
async function loadTrades(db: any, id: SystemId, limit = 300): Promise<{ rows: TradeRow[]; ok: boolean }> {
  const { data, error } = await db.from("ngmy_fast_trades").select("*").eq("system", id).order("id", { ascending: false }).limit(limit);
  if (error) return { rows: [], ok: false };
  return { rows: (data ?? []).map((r: any) => ({ ...r, pnl: Number(r.pnl ?? 0) })), ok: true };
}

/** Today's row for a system. The first time each day it runs the morning review: yesterday in plain lines,
 *  today's starting strength from its last 20 trades, and the lessons carried in. Works without the newer
 *  columns too (then nothing is learned and the screen asks for the SQL). */
async function dayFs(db: any, id: SystemId, et: ReturnType<typeof etParts>, now: Date) {
  const { data: today } = await db.from("ngmy_fast_days").select("*").eq("system", id).eq("et_day", et.dayKey).maybeSingle();
  if (today && today.review != null) return { ...today, lessons: Array.isArray(today.lessons) ? today.lessons : [] };
  const [{ data: prevRows }, store] = await Promise.all([
    db.from("ngmy_fast_days").select("*").eq("system", id).lt("et_day", et.dayKey).order("et_day", { ascending: false }).limit(2),
    loadTrades(db, id),
  ]);
  const prev = (prevRows ?? [])[0];
  const before = store.rows.filter((t) => t.et_day < et.dayKey);
  const fl = learnFloor(Number(prev?.start_pct ?? FS_RULES.startPct) || FS_RULES.startPct,
    before.map((t) => ({ pnl: t.pnl, strength: (t.conditions as any)?.dirStrength ?? null })));
  const learned = { startPct: fl.floor, line: fl.line };
  // Benched two days in a row: a stronger setup needed today in that market.
  const benchedOn = (r: any) => new Set<string>((Array.isArray(r?.lessons) ? r.lessons : []).filter((l: any) => String(l.key).startsWith("bench:")).map((l: any) => String(l.key).slice(6)));
  const b1 = benchedOn(prevRows?.[0]), b2 = benchedOn(prevRows?.[1]);
  const carried: Lesson[] = [...b1].filter((m) => b2.has(m)).map((m) => ({ key: `strict:${m}`, text: `${short(m)} was benched 2 days in a row — it needs +${FS_RULES.strictPct.toFixed(2)}% more strength today`, at: now.toISOString() }));
  const fromTrades = evaluateLessons(id, before, et.dayKey, new Set(carried.map((l) => l.key)), true).map((l) => ({ ...l, at: now.toISOString() }));
  const lessons = [...carried, ...fromTrades];
  const review = morningReview(before, et.dayKey, learned.line, lessons);
  const row = {
    system: id, et_day: et.dayKey, trades: today?.trades ?? 0, day_pnl: today?.day_pnl ?? 0, start_pct: learned.startPct,
    learned: learned.line, review, lessons, blocks: today?.blocks ?? {},
  };
  const { error } = await db.from("ngmy_fast_days").upsert(row);
  if (error) {
    // The newer columns are not there yet: keep the basic row, and use the learning without saving it.
    if (!today) await db.from("ngmy_fast_days").upsert({ system: id, et_day: et.dayKey, trades: 0, day_pnl: 0 });
    return { ...(today ?? { trades: 0, day_pnl: 0, blocks: {} }), start_pct: learned.startPct, learned: learned.line, review, lessons: [], _noColumns: true };
  }
  if (lessons.length) {
    await logFs(db, id, { kind: "lesson", decision: "no action", reason: `Morning review: ${review.join(" ")}` });
  }
  return { ...row, pause_until: today?.pause_until ?? null, step_up_next: today?.step_up_next ?? false, pace_level: today?.pace_level ?? 0 };
}

async function saveDay(db: any, id: SystemId, day: any, patch: Record<string, unknown>) {
  Object.assign(day, patch);
  if (day._noColumns) return;
  await db.from("ngmy_fast_days").update(patch).eq("system", id).eq("et_day", day.et_day);
}

/** Adds lessons to today's row and writes each one to the activity log at once (no silent changes). */
async function addLessons(db: any, id: SystemId, day: any, fresh: Lesson[], now: Date) {
  if (!fresh.length || day._noColumns) return;
  const stamped = fresh.map((l) => ({ ...l, at: l.at ?? now.toISOString() }));
  await saveDay(db, id, day, { lessons: [...(day.lessons ?? []), ...stamped] });
  for (const l of stamped) await logFs(db, id, { kind: "lesson", decision: "no action", reason: `Lesson applied: ${l.text}` });
}

/** Counts what kept a check from trading, for the plain-words reason when the day ends below 40. */
async function countBlock(db: any, id: SystemId, day: any, key: string) {
  if (day._noColumns) return;
  const blocks = { ...(day.blocks ?? {}) };
  blocks[key] = Number(blocks[key] ?? 0) + 1;
  await saveDay(db, id, day, { blocks });
}

/** Every closed trade of one or all fast systems: wins, losses, win rate, total. */
async function recordFs(db: any, id?: SystemId) {
  let q = db.from("ngmy_fast_log").select("pnl:details->pnl").eq("decision", "would sell").order("id", { ascending: false }).limit(2000);
  if (id) q = q.eq("system", id);
  const { data } = await q;
  const pnls: number[] = (data ?? []).map((r: any) => Number(r?.pnl ?? 0));
  const wins = pnls.filter((p) => p > 0).length;
  return {
    trades: pnls.length, wins, losses: pnls.length - wins,
    winRatePct: pnls.length ? Math.round(wins / pnls.length * 100) : null,
    pnlSum: round2(pnls.reduce((s, p) => s + p, 0)),
  };
}

/** One system's own record per market (its last 20 closed trades there), today's record, and when each market
 *  was last sold. From the learning store, or the log when the store is not set up yet. */
async function marketRecordsFs(db: any, id: SystemId, store?: { rows: TradeRow[]; ok: boolean }, todayKey?: string) {
  const s = store ?? await loadTrades(db, id);
  let rows: TradeRow[] = s.rows;
  if (!s.ok) {
    const { data } = await db.from("ngmy_fast_log").select("asset,created_at,pnl:details->pnl").eq("system", id).eq("decision", "would sell")
      .order("id", { ascending: false }).limit(600);
    rows = (data ?? []).map((r: any) => ({ market: String(r.asset ?? ""), pnl: Number(r?.pnl ?? 0), loss_reason: null, et_day: etParts(new Date(r.created_at)).dayKey, exit_at: r.created_at }));
  }
  const by: Record<string, TradeRow[]> = {};
  const lastSold: Record<string, number> = {};
  for (const r of rows) {
    (by[r.market] ??= []).push(r);
    if (!(r.market in lastSold) && r.exit_at) lastSold[r.market] = Date.parse(r.exit_at);
  }
  const records: Record<string, MarketRecord> = {};
  const today: Record<string, { wins: number; losses: number }> = {};
  for (const [a, list] of Object.entries(by)) {
    records[a] = marketRecord(list.map((t) => t.pnl), list.map((t) => t.loss_reason));
    const t = list.filter((x) => x.et_day === todayKey);
    if (t.length) today[a] = { wins: t.filter((x) => x.pnl > 0).length, losses: t.filter((x) => x.pnl <= 0).length };
  }
  return { records, lastSold, today, rows };
}

/** For the shared balance on the main agent screen: closed and open P/L of the fast systems. */
export async function fastSharedPnl(db: any): Promise<{ closed: number; open: number; systems: any[] }> {
  try {
    const states = await loadFs(db);
    const rec = await recordFs(db);
    const open = FS_SYSTEMS.reduce((s, id) => s + Number(states[id]?.last_mark?.pnl ?? 0) * (states[id]?.shadow ? 1 : 0), 0);
    return {
      closed: rec.pnlSum, open: round2(open),
      systems: FS_SYSTEMS.map((id) => ({ id, name: FS_RULES[id].name, enabled: !!states[id].enabled, holding: states[id].shadow?.symbol ?? null })),
    };
  } catch {
    return { closed: 0, open: 0, systems: [] };
  }
}

// ─────────────────────────────────────────────────────────────── options (read-only)

/** Bid and ask of several option contracts in one call (Alpaca's free indicative feed). GET only. */
async function optionQuotes(k: any, symbols: string[]): Promise<Record<string, { bid: number; ask: number; last: number }>> {
  if (!symbols.length) return {};
  const j = await aGet(DATA_BASE, `/v1beta1/options/snapshots?symbols=${symbols.map(encodeURIComponent).join(",")}&feed=indicative`, k);
  const out: Record<string, { bid: number; ask: number; last: number }> = {};
  for (const sym of symbols) {
    const s = j?.snapshots?.[sym] ?? {};
    out[sym] = { bid: Number(s.latestQuote?.bp ?? 0), ask: Number(s.latestQuote?.ap ?? 0), last: Number(s.latestTrade?.p ?? 0) };
  }
  return out;
}

type Choice = { ok: boolean; why: string; option?: OptionInfo & { spreadPct?: number; bid?: number; ask?: number }; tried: { strike: number; expiry: string; cost: number | null; spreadPct?: number }[] };

/** One call (trend up) or put (trend down) on `underlying`: slightly out of the money, at least `minDays` to
 *  expiry, premium $5 to $150, spread at most `spreadMax`% of the premium. Read-only GETs. */
async function chooseContract(k: any, underlying: string, spot: number, right: "call" | "put", et: ReturnType<typeof etParts>, minDays: number, spreadMax: number): Promise<Choice> {
  const r = FS_RULES.options;
  const from = addDays(et.dayKey, minDays);
  const to = addDays(from, 21);
  const lo = right === "call" ? spot * 0.999 : spot * 0.85;
  const hi = right === "call" ? spot * 1.15 : spot * 1.001;
  let list: any[] = [];
  try {
    const j = await aGet(PAPER_BASE, `/v2/options/contracts?underlying_symbols=${encodeURIComponent(underlying)}&type=${right}&status=active` +
      `&expiration_date_gte=${from}&expiration_date_lte=${to}&strike_price_gte=${lo.toFixed(2)}&strike_price_lte=${hi.toFixed(2)}&limit=1000`, k);
    list = Array.isArray(j?.option_contracts) ? j.option_contracts : [];
  } catch (e) {
    return { ok: false, why: `could not read the ${underlying} option list (${String((e as Error).message)})`, tried: [] };
  }
  const o = FS_RULES.options;
  const prefer: [string, string] = [addDays(et.dayKey, Math.max(minDays, o.preferMinDays)), addDays(et.dayKey, Math.max(minDays, o.preferMaxDays))];
  const ladder = contractLadder(list.map((c) => ({ symbol: String(c.symbol), strike: Number(c.strike_price), expiry: String(c.expiration_date) })), spot, right, from,
    FS_RULES.options.strikeSteps, FS_RULES.options.maxExpiries, prefer);
  if (!ladder.length) return { ok: false, why: `no ${underlying} ${right} with ${minDays}+ days to expiry`, tried: [] };
  const tried: Choice["tried"] = [];
  let wide = 0;
  for (const expiry of [...new Set(ladder.map((c) => c.expiry))]) {
    const rung = ladder.filter((c) => c.expiry === expiry);
    let q: Record<string, { bid: number; ask: number; last: number }>;
    try { q = await optionQuotes(k, rung.map((c) => c.symbol)); } catch (e) {
      return { ok: false, why: `could not read ${underlying} option prices (${String((e as Error).message)})`, tried };
    }
    for (const c of rung) {
      const { bid, ask } = q[c.symbol] ?? { bid: 0, ask: 0 };
      const cost = ask ? round2(ask * 100) : null;
      const sp = spreadPct(bid, ask);
      tried.push({ strike: c.strike, expiry: c.expiry, cost, spreadPct: sp });
      if (cost == null || cost > r.maxPremiumUsd || cost < r.minPremiumUsd) continue;
      if (sp > spreadMax) { wide++; continue; }
      return {
        ok: true, why: `slightly out of the money, $${cost.toFixed(2)}, spread ${sp.toFixed(1)}%`, tried,
        option: { contract: c.symbol, strike: c.strike, expiry: c.expiry, premium: ask, cost, right, spreadPct: sp, bid, ask },
      };
    }
  }
  return { ok: false, tried, why: `no ${underlying} ${right} from $${r.minPremiumUsd} to $${r.maxPremiumUsd}${wide ? ` with a spread under ${spreadMax}% (${wide} too wide)` : ""} right now` };
}

let previewCache: Record<string, { at: number; data: any }> = {};
let optionsLevelCache: { at: number; level: number } | null = null;

function changeToday(s: Series | undefined, dayKey: string): number {
  if (!s || !s.closes.length || !s.price) return 0;
  const i = s.times.findIndex((t) => etParts(new Date(t)).dayKey === dayKey);
  const open = i >= 0 ? (s.ohlc[i]?.o ?? s.closes[i]) : s.closes[0];
  return open ? round2((s.price - open) / open * 100) : 0;
}

function conditionsOf(a: Analysis, spot: number): EntryConditions {
  return {
    dir: a.dir ?? "up", trend5: a.trend5, trend15: a.trend15, trend60: a.trend60, fast: a.fast, slow: a.slow,
    priceVsSlow: a.priceAbove ? "above" : "below", slowRising: a.slowRising, strength: a.strength, dirStrength: a.dirStrength,
    ranOver08: (a.dirHourMove ?? 0) > 0.8, chop: a.chop, bucket: bucketOf(a.dirStrength), spot, dirHourMove: a.dirHourMove,
  };
}

// ─────────────────────────────────────────────────────────────── the 1-minute check

/** Runs every minute (pg_cron). Only does work for a system that is started. */
async function runFast(db: any): Promise<Record<string, unknown>> {
  const states = await loadFs(db);
  const now = new Date();
  const et = etParts(now);
  const on = FS_SYSTEMS.filter((id) => states[id].enabled && !(states[id].brake_paused && !states[id].shadow));
  if (!on.length) return { ok: true, skipped: "no fast system is started" };
  // Never two checks in the same minute (a cron retry).
  const due = on.filter((id) => !states[id].last_tick_at || now.getTime() - Date.parse(states[id].last_tick_at) >= 50 * 1000);
  if (!due.length) return { ok: true, skipped: "already checked this minute" };
  for (const id of due) await saveFs(db, id, { last_tick_at: now.toISOString() });

  const cfg = readConfig();
  if (!cfg.keys) {
    for (const id of due) await saveFs(db, id, { last_note: cfg.problem, last_note_at: now.toISOString() });
    return { ok: false, error: cfg.problem };
  }
  const k = cfg.keys;
  // Every market the started systems watch today, plus any market still held or watched for a noise stop.
  const want = new Map<string, MarketDef>();
  const addSym = (sym: string) => {
    if (want.has(sym)) return;
    want.set(sym, PA_MARKETS.find((m) => m.symbol === sym) ?? { symbol: sym, name: sym, kind: sym.includes("/") ? "crypto" : "stock" });
  };
  for (const id of due) {
    for (const m of listFor(id, et.weekend)) want.set(m.symbol, m);
    const sh: FastShadow | null = states[id].shadow ?? null;
    if (sh) addSym(sh.symbol);
    for (const w of Array.isArray(states[id].watch) ? states[id].watch : []) addSym(String(w.symbol));
  }
  let series: Record<string, Series>;
  let clock: any;
  let acct: any;
  try {
    [series, clock, acct] = await Promise.all([readMarketsFor(k, [...want.values()], 0), aGet(PAPER_BASE, "/v2/clock", k), readAccount(k)]);
  } catch (e) {
    for (const id of due) await saveFs(db, id, { last_note: `Alpaca connection failed (${String((e as Error).message)})`, last_note_at: now.toISOString() });
    return { ok: false, error: "Alpaca connection failed" };
  }
  optionsLevelCache = { at: Date.now(), level: acct.optionsLevel };
  const stockOpen = !!clock?.is_open;
  const toClose = stockOpen && clock?.next_close ? (Date.parse(clock.next_close) - now.getTime()) / 60000 : Infinity;
  const closeOut = toClose < 6; // the 3:54 or 3:55 PM check
  const out: Record<string, unknown> = {};

  for (const id of due) {
    const st = states[id];
    const day = await dayFs(db, id, et, now);
    const sh: FastShadow | null = st.shadow ?? null;

    // ── noise-stop watch: a stop whose price came back past the entry within 10 minutes
    let watch: any[] = Array.isArray(st.watch) ? st.watch : [];
    if (watch.length) {
      const keep: any[] = [];
      let changed = false;
      for (const w of watch) {
        const p = series[w.symbol]?.price ?? 0;
        if (p && recovered(w.dir, Number(w.entrySpot), p)) {
          changed = true;
          const text = LOSS_WORDS.NOISE_STOP;
          if (w.tradeId) await db.from("ngmy_fast_trades").update({ loss_reason: "NOISE_STOP", loss_text: text }).eq("id", w.tradeId);
          if (w.logId) {
            const { data: lr } = await db.from("ngmy_fast_log").select("details").eq("id", w.logId).maybeSingle();
            if (lr) await db.from("ngmy_fast_log").update({ details: { ...(lr.details ?? {}), lossReason: "NOISE_STOP", lossText: text } }).eq("id", w.logId);
          }
          await logFs(db, id, { kind: "lesson", asset: w.symbol, decision: "no action", reason: `Re-graded the ${short(w.symbol)} loss: the price came back past the entry within 10 minutes, so it was a noise stop.` });
        } else if (now.getTime() < Date.parse(w.until)) keep.push(w);
        else changed = true;
      }
      if (changed) {
        watch = keep;
        await db.from("ngmy_fast_state").update({ watch: keep }).eq("id", id);
        const store = await loadTrades(db, id);
        await addLessons(db, id, day, evaluateLessons(id, store.rows, et.dayKey, new Set((day.lessons ?? []).map((l: Lesson) => l.key))), now);
      }
    }

    const isOptDay = id === "options" && !et.weekend;
    const brakes = { daily: id === "options" ? (et.weekend ? FS_RULES.options.weekendDailyStopUsd : FS_RULES.options.dailyStopUsd) : FS_RULES.scalper.dailyStopUsd, total: FS_RULES[id].totalBrakeUsd };

    // ── holding: the exit rules, every minute
    if (sh) {
      const s = series[sh.symbol];
      const price = sh.option ? await optionSellPrice(k, sh.option.contract) : (s?.price ?? 0);
      const x = crossover(s?.closes ?? []);
      const trendAgainst = sh.dir === "down" ? x.signal === "buy" : x.signal === "sell";
      const isStock = !sh.symbol.includes("/");
      const trendNow = s?.closes?.length ? analyzeMarket(s.closes, s.price).trend5 : "unknown";
      const trendNowAgainst = sh.dir === "down" ? trendNow === "up" : trendNow === "down";
      const ex = fastExit({ system: id, shadow: sh, price, now, trendAgainst, closeOut: isStock && closeOut, trendNowAgainst });
      const mark = heldMark(sh as any, price);
      if (ex.sell) {
        const total = round2(Number(st.total_pnl ?? 0) + ex.pnl);
        const dayPnl = round2(Number(day.day_pnl ?? 0) + ex.pnl);
        const patch: Record<string, unknown> = { shadow: null, total_pnl: total, last_mark: null, last_note: `Sold ${sh.symbol}: ${ex.reason}`, last_note_at: now.toISOString() };
        if (total <= -brakes.total) { patch.brake_paused = true; patch.brake_reason = `Total demo loss reached $${Math.abs(total).toFixed(2)}`; }
        await saveFs(db, id, patch);
        await saveDay(db, id, day, { day_pnl: dayPnl });
        const exit = price || sh.entryPrice;
        const cond = (sh.entry ?? null) as EntryConditions | null;
        const spotNow = s?.price ?? 0;
        const underMove = cond?.spot && spotNow ? round2((spotNow - cond.spot) / cond.spot * 100) : null;
        const loss = ex.pnl <= 0 && cond ? gradeLoss(cond, ex.kind, !!sh.option, underMove) : null;
        const lossText = loss ? `Lost ${ex.pnl < 0 ? "-" : ""}$${Math.abs(ex.pnl).toFixed(2)} · Reason: ${loss.text}` : ex.pnl <= 0 ? "Lost (opened before the learning update, no entry conditions saved)" : null;
        const heldMin = round2(heldMinutes(sh.entryAt, now));
        const { data: tr } = await db.from("ngmy_fast_trades").insert({
          system: id, market: sh.symbol, direction: sh.dir ?? "up", et_day: et.dayKey, entry_at: sh.entryAt, exit_at: now.toISOString(),
          hold_min: heldMin, entry_price: sh.entryPrice, exit_price: exit, pnl: ex.pnl, exit_reason: ex.kind,
          loss_reason: loss?.reason ?? null, loss_text: loss?.text ?? null, conditions: cond,
          option: sh.option ? { ...sh.option } : null, max_hold: sh.maxHold ?? FS_RULES.maxHoldMin,
        }).select("id").maybeSingle();
        const { data: lg } = await db.from("ngmy_fast_log").insert({
          system: id, et_time: et.label, kind: "trade", asset: sh.symbol, price: spotNow || null, decision: "would sell", reason: ex.reason,
          details: {
            pnl: ex.pnl, result: ex.pnl > 0 ? "WIN" : "LOSS", entryWhy: sh.why ?? null, exitKind: ex.kind,
            lossReason: loss?.reason ?? null, lossText, dir: sh.dir ?? "up",
            amount: mark.cost, qty: sh.qty, mult: sh.mult ?? 1, entryPrice: sh.entryPrice, exitPrice: exit,
            outValue: round2(sh.qty * (sh.mult ?? 1) * exit), entryAt: sh.entryAt, heldMin, maxHold: sh.maxHold ?? FS_RULES.maxHoldMin,
            option: sh.option ?? null, conditions: cond, by: "cron",
          },
        }).select("id").maybeSingle();
        if (loss?.watch && cond) {
          const w = [...watch.filter((x) => now.getTime() < Date.parse(x.until)), {
            symbol: sh.symbol, dir: cond.dir, entrySpot: cond.spot, tradeId: tr?.id ?? null, logId: lg?.id ?? null,
            until: new Date(now.getTime() + FS_RULES.noiseWatchMin * 60000).toISOString(),
          }];
          await db.from("ngmy_fast_state").update({ watch: w }).eq("id", id);
        }
        if (patch.brake_paused) await logFs(db, id, { kind: "control", decision: "no action", reason: `paused by the $${brakes.total} brake. Press Start after a review.` });

        // Learning after every close: streaks, lessons, and the review after every 10 trades.
        const store = await loadTrades(db, id);
        const streak = lossStreak(store.rows, et.dayKey);
        const fresh: Lesson[] = [];
        if (ex.pnl <= 0 && streak === 2) {
          await saveDay(db, id, day, { pause_until: new Date(now.getTime() + FS_RULES.streakPauseMin * 60000).toISOString(), step_up_next: true });
          await logFs(db, id, { kind: "lesson", decision: "no action", reason: `2 losses in a row: no new entries for ${FS_RULES.streakPauseMin} minutes, then the next entry needs +${FS_RULES.afterStreakPct.toFixed(1)}% or more in 30 minutes.` });
        }
        if (ex.pnl <= 0 && streak >= 3) fresh.push({ key: "streak3", text: `3 losses in a row — entries need +${FS_RULES.stepUpPct.toFixed(2)}% more strength for the rest of the day` });
        const active = new Set<string>((day.lessons ?? []).map((l: Lesson) => l.key));
        fresh.push(...evaluateLessons(id, store.rows, et.dayKey, active).filter((l) => !fresh.some((f) => f.key === l.key)));
        await addLessons(db, id, day, fresh.filter((l) => !active.has(l.key)), now);
        const closedToday = store.rows.filter((t) => t.et_day === et.dayKey);
        if (store.ok && closedToday.length && closedToday.length % 10 === 0) {
          const w = closedToday.filter((t) => t.pnl > 0).length;
          const lessonsNow = (day.lessons ?? []).map((l: Lesson) => l.text);
          await logFs(db, id, {
            kind: "lesson", decision: "no action",
            reason: `Review after ${closedToday.length} trades today: ${w} wins, ${closedToday.length - w} losses. ${lessonsNow.length ? `Lessons active: ${lessonsNow.join("; ")}.` : "No lessons needed yet."}`,
          });
        }
        out[id] = { sold: sh.symbol, reason: ex.reason, pnl: ex.pnl, loss: loss?.reason ?? null };
      } else {
        await saveFs(db, id, { last_mark: mark, last_note: ex.reason, last_note_at: now.toISOString() });
        out[id] = { holding: sh.symbol, note: ex.reason };
      }
      continue;
    }

    // ── nothing held: rank every market, take the best one that passes every rule
    const note = async (t: string) => { await saveFs(db, id, { last_note: t, last_note_at: now.toISOString() }); out[id] = t; };
    const trades = Number(day.trades ?? 0);
    const pace = paceLadder(et, trades, Number(day.start_pct ?? FS_RULES.startPct));
    if (pace.level > Number(day.pace_level ?? 0)) {
      await saveDay(db, id, day, { pace_level: pace.level });
      await logFs(db, id, { kind: "lesson", decision: "no action", reason: `Behind the pace (${trades} of ${pace.expected} expected by now). ${pace.lines.join(" ")}` });
    }
    if (st.brake_paused || Number(st.total_pnl ?? 0) <= -brakes.total) { await countBlock(db, id, day, "brake"); await note(`paused by the $${brakes.total} brake`); continue; }
    if (Number(day.day_pnl ?? 0) <= -brakes.daily) { await countBlock(db, id, day, "brake"); await note(`daily stop reached ($${brakes.daily} lost today)`); continue; }
    if (et.weekend) { await note(FS_WEEKEND_NOTE); continue; }
    if (!pace.inWindow) { await note("outside the trading window (weekdays 9:30 AM to 4:00 PM ET)"); continue; }
    if (!et.weekend && !stockOpen) { await countBlock(db, id, day, "closed"); await note("the stock market is closed today"); continue; }
    if (openingWindow(et)) { await note("first 15 minutes after the open, no entries"); continue; }
    if (!et.weekend && closeOut) { await note("3:55 PM ET or later, no new trades"); continue; }
    if (day.pause_until && now.getTime() < Date.parse(day.pause_until)) {
      await countBlock(db, id, day, "paused");
      await note(`paused after 2 losses in a row until ${etParts(new Date(day.pause_until)).label.replace(/^.*, /, "")}`);
      continue;
    }

    const rules = activeRules(id, et.weekend, day.lessons ?? [], pace, !!day.step_up_next);
    const { records, lastSold } = await marketRecordsFs(db, id, undefined, et.dayKey);
    const cooling = (sym: string) => lastSold[sym] != null && now.getTime() - lastSold[sym] < FS_RULES.cooldownMin * 60000;
    const all = listFor(id, et.weekend).filter((m) => series[m.symbol]?.price && (series[m.symbol]?.closes.length ?? 0) >= 25);
    if (!all.length) { await countBlock(db, id, day, "noData"); await note("no prices for its markets right now"); continue; }
    const items = all.filter((m) => !cooling(m.symbol) && !rules.benched[m.symbol]).map((m) => {
      const a = analyzeMarket(series[m.symbol].closes, series[m.symbol].price);
      const parts = rankScore(a, records[m.symbol], rules.preferred, rules.penalized);
      const r = rules.strict.has(m.symbol) ? { ...rules, thresholdPct: round2(rules.thresholdPct + FS_RULES.strictPct) } : rules;
      return { sym: m.symbol, a, parts, score: parts.total, check: entryCheck(a, r) };
    });
    if (!items.length) { await countBlock(db, id, day, "benched"); await note("every market is benched or cooling down right now"); continue; }
    const { ranked, passing } = pickRanked(items, (x) => x.check);
    const thrText = `+${rules.thresholdPct.toFixed(2)}%${pace.steps ? ` (${pace.steps} step(s) down, ${pace.deficit} behind)` : ""}${rules.extraPct ? " (stepped up by a loss streak)" : ""}`;
    if (!passing.length) {
      const fails: Record<string, number> = {};
      for (const x of items) if (x.check.fail) fails[x.check.fail] = (fails[x.check.fail] ?? 0) + 1;
      const top = Object.entries(fails).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "weak";
      await countBlock(db, id, day, top);
      const best = ranked[0];
      await note(`checked ${items.length} markets at ${thrText}: none passes. Most: ${blockReason({ [top]: 1 })}. Best ranked: ${short(best.sym)} (${best.check.text})`);
      continue;
    }

    const why = (x: typeof items[number], price: number) =>
      `${short(x.sym)} ranked #${ranked.indexOf(x) + 1} of ${items.length}, score ${x.score} (strength and trend ${x.parts.base}, its record ${x.parts.record >= 0 ? "+" : ""}${x.parts.record}, setup size ${x.parts.bucket >= 0 ? "+" : ""}${x.parts.bucket}): ` +
      `${x.a.dir === "down" ? "down" : "up"} ${Math.abs(x.a.dirStrength ?? 0).toFixed(2)}% in 15 min (needed ${thrText}), 5-min and 15-min trends ${x.a.dir}, 1-hour trend ${x.a.trend60}, ${x.a.chop} crosses in 30 min, entry $${price.toFixed(price < 10 ? 4 : 2)}`;
    const ranking = ranked.slice(0, 5).map((x) => ({ s: x.sym, score: x.score, parts: x.parts, strength: x.a.strength, dir: x.a.dir, passes: x.check.ok, why: x.check.text }));
    const clearStep = async () => { if (day.step_up_next) await saveDay(db, id, day, { step_up_next: false }); };
    const enter = async (cand: typeof items[number], newSh: FastShadow, reason: string, extra: Record<string, unknown>) => {
      await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh as any, newSh.entryPrice), last_note: reason, last_note_at: now.toISOString() });
      await saveDay(db, id, day, { trades: trades + 1 });
      await clearStep();
      await logFs(db, id, {
        kind: "trade", asset: cand.sym, price: series[cand.sym].price, decision: "would buy", reason,
        details: {
          ...extra, entryPrice: newSh.entryPrice, by: "cron", dir: newSh.dir, maxHold: newSh.maxHold, tpUsd: newSh.tpUsd, slUsd: newSh.slUsd,
          conditions: newSh.entry,
          analysis: { why: newSh.why, market: cand.sym, price: series[cand.sym].price, strength: cand.a.strength, score: cand.score, parts: cand.parts, trend: cand.a.trend, thresholdPct: rules.thresholdPct, ladder: pace, ranked: ranking },
        },
      });
      out[id] = { bought: newSh.option?.contract ?? cand.sym };
    };

    if (isOptDay) {
      if ((acct.optionsLevel ?? 0) < 2) { await countBlock(db, id, day, "notEnabled"); await note("Options are not enabled on the paper account yet"); continue; }
      let bought = false;
      const misses: string[] = [];
      for (const cand of passing.slice(0, pace.topN)) {
        const spot = series[cand.sym].price;
        const right = cand.a.dir === "down" ? "put" : "call";
        const c = await chooseContract(k, cand.sym, spot, right, et, rules.optMinDays, rules.spreadMaxPct);
        if (!c.ok || !c.option) { misses.push(c.why); continue; }
        const o = c.option;
        const lv = exitLevels(true, rules.noisy.has(cand.sym));
        const entry = { ...conditionsOf(cand.a, spot), spreadPct: o.spreadPct ?? null };
        const newSh: FastShadow = {
          symbol: cand.sym, qty: 1, mult: 100, entryPrice: o.premium, entryAt: now.toISOString(), option: o, dir: cand.a.dir ?? "up",
          tpUsd: lv.tpUsd, slUsd: lv.slUsd, maxHold: rules.maxHold, spot, why: why(cand, spot), entry,
        };
        await enter(cand, newSh, `would buy 1 ${cand.sym} $${o.strike} ${right} expiring ${o.expiry} for $${o.cost.toFixed(2)} ($${o.premium.toFixed(2)} x 100, spread ${(o.spreadPct ?? 0).toFixed(1)}%)`,
          { amount: o.cost, qty: 1, mult: 100, option: o, tried: c.tried });
        bought = true;
        break;
      }
      if (!bought) { await countBlock(db, id, day, "noContract"); await note(`setups passed, but ${misses[0] ?? "no contract fitted"}`); }
      continue;
    }

    // A stock or coin itself: $100 (Scalper every day, Options on weekends). Buys only.
    const pick = passing[0];
    const price = series[pick.sym].price;
    const lv = exitLevels(false, rules.noisy.has(pick.sym));
    const newSh: FastShadow = {
      symbol: pick.sym, qty: FS_RULES.spot.tradeUsd / price, mult: 1, entryPrice: price, entryAt: now.toISOString(), dir: "up",
      tpUsd: lv.tpUsd, slUsd: lv.slUsd, maxHold: rules.maxHold, spot: price, why: why(pick, price), entry: conditionsOf(pick.a, price),
    };
    await enter(pick, newSh, `would buy $100 of ${pick.sym}`, { amount: FS_RULES.spot.tradeUsd, qty: newSh.qty, mult: 1 });
  }
  return { ok: true, ...out };
}

// ─────────────────────────────────────────────────────────────── app + cron entry

export async function handleFast(
  action: string,
  body: any,
  ctx: { db: any; email: string; isAdmin: boolean; landingClosed?: () => Promise<number> },
): Promise<{ status: number; payload: Record<string, unknown> }> {
  const { db, isAdmin } = ctx;
  if (action === "fsTick") {
    let main: any;
    try { main = await loadState(db); } catch (e) { return { status: 500, payload: { ok: false, error: String((e as Error).message) } }; }
    const token = String(body?.token ?? "");
    if (!token || !main.cron_token || token !== main.cron_token) return { status: 403, payload: { ok: false, error: "forbidden" } };
    try { return { status: 200, payload: await runFast(db) }; } catch (e) {
      return { status: 500, payload: { ok: false, error: String((e as Error).message) } };
    }
  }
  if (!ctx.email) return { status: 401, payload: { ok: false, error: "Please sign in." } };
  if (!isAdmin) return { status: 403, payload: { ok: false, ownerOnly: true, error: "The trading systems are for NGMY admins only." } };

  const id = String(body?.system ?? "") as SystemId;
  if (!FS_SYSTEMS.includes(id)) return { status: 400, payload: { ok: false, error: "Unknown system." } };
  let states: Record<SystemId, any>;
  try { states = await loadFs(db); } catch {
    return { status: 200, payload: { ok: false, setupNeeded: true, error: "The fast systems tables are not set up yet. Run the fast systems SQL in Supabase." } };
  }

  if (action === "fsLog") {
    const limit = Math.min(Math.max(Number(body?.limit ?? 60), 10), 300);
    let q = db.from("ngmy_fast_log").select("*").eq("system", id).order("id", { ascending: false }).limit(limit);
    const before = Number(body?.beforeId ?? 0);
    if (before > 0) q = q.lt("id", before);
    const { data, error } = await q;
    return { status: 200, payload: { ok: !error, rows: data ?? [], error: error?.message } };
  }

  if (action === "fsSet") {
    const enabled = body?.enabled === true;
    const patch: Record<string, unknown> = { enabled };
    let note = enabled ? "Started by an admin" : "Stopped by an admin";
    if (enabled && states[id].brake_paused) {
      patch.brake_paused = false;
      patch.brake_reason = null;
      patch.total_pnl = 0;
      note += `. The $${FS_RULES[id].totalBrakeUsd} brake was reset after review.`;
    }
    await saveFs(db, id, patch);
    await logFs(db, id, { kind: "control", decision: enabled ? "start" : "stop", reason: note });
    states = await loadFs(db);
  }

  // fsStatus (and the answer to fsSet)
  const st = states[id];
  const now = new Date();
  const et = etParts(now);
  const cfg = readConfig();
  const store = await loadTrades(db, id);
  const [day, { data: trades }, record, allFast, mr] = await Promise.all([
    dayFs(db, id, et, now),
    db.from("ngmy_fast_log").select("id,created_at,et_time,asset,price,decision,reason,details")
      .eq("system", id).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(80),
    recordFs(db, id),
    recordFs(db),
    marketRecordsFs(db, id, store, et.dayKey),
  ]);
  const { records } = mr;
  const fastOpen = FS_SYSTEMS.reduce((s, x) => s + (states[x].shadow ? Number(states[x].last_mark?.pnl ?? 0) : 0), 0);
  const tradesToday = Number(day?.trades ?? 0);
  const ladder = paceLadder(et, tradesToday, Number(day?.start_pct ?? FS_RULES.startPct));
  const lessons: Lesson[] = Array.isArray(day?.lessons) ? day.lessons : [];
  const rules = activeRules(id, et.weekend, lessons, ladder, !!day?.step_up_next);
  const w = tradingWindow(et);
  const blocks = (day as any)?.blocks ?? {};
  const below = ladder.trades < ladder.target;
  const ended = !et.weekend ? w.mins >= 955 : false;
  const impossible = false; // Nov 25: 40 is a maximum, so there is no pace to miss
  const dayNote = et.weekend ? FS_WEEKEND_NOTE : (ended || (!w.inWindow && w.mins >= w.end)) && below
    ? `The day ended at ${ladder.trades} of ${ladder.target}: ${blockReason(blocks)}.`
    : impossible
      ? `Pace stopped at ${ladder.trades} of ${ladder.target} — reaching ${ladder.target} would require breaking a safety rule (too few minutes left for one trade at a time). Most often blocked: ${blockReason(blocks)}.`
      : below && Object.keys(blocks).length
        ? `Most often blocked so far today: ${blockReason(blocks)}.`
        : null;

  // Today's closed trades of this system: win rate and P/L.
  const closedToday = store.rows.filter((t) => t.et_day === et.dayKey);
  const winsToday = closedToday.filter((t) => t.pnl > 0).length;
  const todayStats = {
    closed: closedToday.length, wins: winsToday, losses: closedToday.length - winsToday,
    winRatePct: closedToday.length ? Math.round(winsToday / closedToday.length * 100) : null,
    pnl: round2(closedToday.reduce((s, t) => s + t.pnl, 0)),
  };
  const lastLosses = store.rows.filter((t) => t.pnl <= 0 && t.loss_reason).slice(0, 5).map((t: any) => ({
    market: t.market, pnl: t.pnl, reason: t.loss_reason, text: t.loss_text ?? LOSS_WORDS[t.loss_reason as LossReason] ?? t.loss_reason, at: t.exit_at,
  }));
  const learning = {
    setupNeeded: !store.ok || !!(day as any)?._noColumns,
    lessons,
    benched: Object.entries(rules.benched).map(([symbol, text]) => ({ symbol, text })),
    thresholdPct: rules.thresholdPct,
    maxHold: rules.maxHold,
    chaseCapPct: rules.chaseCapPct,
    chopSkipAt: rules.chopSkipAt,
    need60: rules.need60,
    pauseUntil: day?.pause_until && Date.parse(day.pause_until) > now.getTime() ? day.pause_until : null,
    stepUpNext: !!day?.step_up_next,
    lastLosses,
    review: Array.isArray(day?.review) ? day.review : [],
    empty: "No lessons yet — still learning this market.",
  };

  // The shared balance (started now, awaited at the end).
  const sharedP: Promise<Record<string, unknown> | null> = (async () => {
    try {
      const [main, landingClosed] = await Promise.all([loadState(db), ctx.landingClosed ? ctx.landingClosed() : Promise.resolve(0)]);
      const equity = Number(main.snapshot?.equity ?? 0) || null;
      const landingOpen = main.shadow ? Number(main.snapshot?.held?.pnl ?? 0) : 0;
      const closed = round2(landingClosed + allFast.pnlSum);
      const open = round2(landingOpen + fastOpen);
      return { equity, closed, open, balance: equity == null ? null : round2(equity + closed + open) };
    } catch {
      return null;
    }
  })();

  // The market list: every market of this system today, live, with its own record there and any bench.
  let markets: any[] = [];
  let ranking: any[] = [];
  let options: Record<string, unknown> | null = null;
  let stockOpen = false;
  const list = listFor(id, et.weekend);
  if (cfg.keys) {
    try {
      const held = st.shadow?.symbol ?? null;
      const defs = held && !list.some((m) => m.symbol === held)
        ? [...list, PA_MARKETS.find((m) => m.symbol === held) ?? { symbol: held, name: held, kind: held.includes("/") ? "crypto" : "stock" } as MarketDef]
        : list;
      const [series, clock] = await Promise.all([readMarketsFor(cfg.keys, defs), readClock(cfg.keys)]);
      stockOpen = !!clock?.is_open;
      const open = et.weekend || stockOpen;
      markets = defs
        .filter((m) => (series[m.symbol]?.price ?? 0) > 0 || m.symbol === held) // markets Alpaca does not offer are left out
        .map((m) => {
          const s = series[m.symbol];
          const chart = buildChart(s?.times ?? [], s?.closes ?? [], 48, s?.ohlc);
          const a = s?.price && s.closes.length >= 25 ? analyzeMarket(s.closes, s.price) : null;
          const r = rules.strict.has(m.symbol) ? { ...rules, thresholdPct: round2(rules.thresholdPct + FS_RULES.strictPct) } : rules;
          const check = a ? entryCheck(a, r) : null;
          const parts = a ? rankScore(a, records[m.symbol], rules.preferred, rules.penalized) : null;
          const benched = rules.benched[m.symbol] ?? null;
          return {
            symbol: m.symbol, name: m.name, price: s?.price ?? 0, changePct: changeToday(s, et.dayKey),
            tag: held === m.symbol ? "TRADED NOW" : benched ? "BENCHED" : open ? "watching" : "closed",
            chart: { points: chart.points, trend: chart.trend, signal: chart.signal },
            record: records[m.symbol] ?? EMPTY_RECORD,
            today: mr.today[m.symbol] ?? { wins: 0, losses: 0 },
            benched,
            strict: rules.strict.has(m.symbol),
            analysis: a && check && parts ? {
              trend: a.trend, trend15: a.trend15, trend60: a.trend60, dir: a.dir, strength: a.strength, chop: a.chop,
              score: parts.total, parts, falling: a.falling, passes: check.ok && !benched,
              why: benched ? `benched: ${benched}` : check.text,
            } : null,
          };
        })
        .sort((a, b) => (b.analysis?.score ?? -99) - (a.analysis?.score ?? -99));
      ranking = markets.filter((m) => m.analysis && !m.benched).slice(0, 3).map((m) => ({
        symbol: m.symbol, score: m.analysis.score, parts: m.analysis.parts, passes: m.analysis.passes, why: m.analysis.why, dir: m.analysis.dir,
      }));

      if (id === "options") {
        if (et.weekend) {
          options = { enabled: true, weekend: true, message: FS_WEEKEND_NOTE };
        } else {
          if (!optionsLevelCache || Date.now() - optionsLevelCache.at > 10 * 60 * 1000) {
            const acc = await readAccount(cfg.keys);
            optionsLevelCache = { at: Date.now(), level: acc.optionsLevel };
          }
          if (optionsLevelCache.level < 2) {
            options = { enabled: false, message: "Options are not enabled on the paper account yet" };
          } else {
            // The contract it would choose right now, for the best-ranked market with a direction.
            const top = markets.find((m) => m.analysis?.dir && !m.benched) ?? markets[0];
            const right = top?.analysis?.dir === "down" ? "put" : "call";
            const key = `${top?.symbol ?? ""}:${right}:${rules.optMinDays}:${rules.spreadMaxPct}`;
            const hit = previewCache[key];
            if (hit && Date.now() - hit.at < 60 * 1000) {
              options = hit.data;
            } else if (top?.price) {
              const c = await chooseContract(cfg.keys, top.symbol, top.price, right, et, rules.optMinDays, rules.spreadMaxPct);
              options = { enabled: true, underlying: top.symbol, spot: top.price, right, preview: c.option ?? null, fits: c.ok, why: c.why, tried: c.tried };
              previewCache = { [key]: { at: Date.now(), data: options } };
            }
          }
        }
      }
    } catch (e) {
      if (id === "options" && !options) options = { enabled: null, message: `Could not check options right now (${String((e as Error).message)})` };
    }
  }

  const brakeDaily = id === "options" ? (et.weekend ? FS_RULES.options.weekendDailyStopUsd : FS_RULES.options.dailyStopUsd) : FS_RULES.scalper.dailyStopUsd;
  return {
    status: 200,
    payload: {
      ok: true,
      system: id,
      name: FS_RULES[id].name,
      state: {
        enabled: !!st.enabled, brakePaused: !!st.brake_paused, brakeReason: st.brake_reason ?? null,
        totalPnl: Number(st.total_pnl ?? 0), shadow: st.shadow ?? null, mark: st.last_mark ?? null,
        lastTickAt: st.last_tick_at ?? null, lastNote: st.last_note ?? null, lastNoteAt: st.last_note_at ?? null,
      },
      shared: await sharedP,
      today: day ?? null,
      todayStats,
      pace: {
        ...ladder, thresholdPct: rules.thresholdPct, maxHold: rules.maxHold, behind: false, dayNote, impossible,
        entryFloor: Number(day?.start_pct ?? FS_RULES.startPct) < FS_RULES.floorPct ? FS_RULES.floorPct : Number(day?.start_pct ?? FS_RULES.startPct),
        waiting: tradesToday < FS_RULES.dailyTarget ? "waiting for a real setup" : "the daily maximum is reached",
        checkpoints: PACE_LINE, learned: (day as any)?.learned ?? null, blocks,
      },
      learning,
      ranking,
      record,
      markets,
      marketList: list.map((m) => m.symbol),
      stockOpen,
      trades: trades ?? [],
      options,
      rules: FS_RULE_LINES[id],
      brakeNote: id === "options"
        ? "Daily stop -$500 and total brake -$1,000 are wide on purpose: one options loss is $50. The real protection is the strict entries and the learning: benching losing markets, the pause after 2 losses in a row, and the entry floor."
        : null,
      settings: {
        ...FS_RULES[id], dailyStopUsd: brakeDaily, spot: FS_RULES.spot, maxHoldMin: rules.maxHold,
        exitCheckEveryMin: FS_RULES.exitCheckEveryMin, dailyTarget: FS_RULES.dailyTarget, floorPct: FS_RULES.floorPct,
        takeProfitUsd: id === "options" && !et.weekend ? FS_RULES.options.takeProfitUsd : FS_RULES.spot.takeProfitUsd,
        stopLossUsd: id === "options" && !et.weekend ? FS_RULES.options.stopLossUsd : FS_RULES.spot.stopLossUsd,
        takeProfitPct: FS_RULES.spot.takeProfitPct, stopLossPct: FS_RULES.spot.stopLossPct,
        maxTrades: FS_RULES.dailyTarget, strengthPct: rules.thresholdPct,
      },
      weekendNote: FS_WEEKEND_NOTE,
      paperOnly: true,
      nowEt: et.label,
    },
  };
}
