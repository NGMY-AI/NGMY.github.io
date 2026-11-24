// Signal Grid — Fast Systems (paper only). Nov 23, 2026; 20-trades update Nov 24, 2026.
//
// Two extra systems next to the main Signal Grid agent, each with its own Start/Stop, its own trade history,
// trades-today count, daily stop and total brake, and ONE open position at a time. They watch their OWN markets,
// never one of the main agent's:
//   A. OPTIONS: weekdays one call contract (premium $150 or less) on 11 underlyings; weekends 6 coins as spot.
//   B. SCALPER: $100 of a stock (18 weekday stocks) or coin (6 weekend coins), +2% / -1%.
//
// 20 trades a day, honestly: every minute each system scores ALL its markets (15-minute move, price above the
// slow average, fast average above the slow) and takes the top-ranked one that passes. The strength needed starts
// strict (+0.3% in 15 minutes, adjusted each morning by its own last 20 trades) and steps down 0.05% for each hour
// behind the pace to 20, to a floor of +0.05%; in the last hour of the window it is at the floor. A falling market
// (fast below slow, price below slow, or not up in 15 minutes) is never bought. Real trades only.
//
// The 30-minute law: every trade closes within 30 minutes. Exit checks run every 1 minute (a pg_cron job every
// minute), and the hard timer sells at the last 1-minute check before 30 minutes (29 minutes or more held).
//
// PAPER ONLY. No order code here at all: only GET requests to Alpaca's paper endpoint and data feed, through the
// main agent's read-only GET helper. Pretend money, written to the fast-systems tables.

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
  type Shadow,
} from "./alpaca_agent.ts";

export const FS_ACTIONS = new Set(["fsTick", "fsStatus", "fsSet", "fsLog"]);
export type SystemId = "options" | "scalper";
export const FS_SYSTEMS: SystemId[] = ["options", "scalper"];

const stock = (symbol: string, name: string): MarketDef => ({ symbol, name, kind: "stock" });
const coin = (symbol: string, name: string): MarketDef => ({ symbol, name, kind: "crypto" });

/** Each fast system's own markets (Nov 24): none of them is on the main agent's lists. A market Alpaca does not
 *  offer is left out silently (no prices come back for it). */
export const FS_LISTS: Record<SystemId, { weekday: MarketDef[]; weekend: MarketDef[] }> = {
  scalper: {
    weekday: [
      stock("DIA", "Dow Jones fund"), stock("IWM", "Russell 2000 fund"), stock("AVGO", "Broadcom"), stock("NFLX", "Netflix"),
      stock("PLTR", "Palantir"), stock("COIN", "Coinbase"), stock("MSTR", "MicroStrategy"), stock("HOOD", "Robinhood"),
      stock("SOFI", "SoFi"), stock("BAC", "Bank of America"), stock("JPM", "JPMorgan"), stock("XOM", "Exxon Mobil"),
      stock("UNH", "UnitedHealth"), stock("LLY", "Eli Lilly"), stock("CRM", "Salesforce"), stock("MU", "Micron"),
      stock("INTC", "Intel"), stock("F", "Ford"),
    ],
    weekend: [
      coin("AVAX/USD", "Avalanche"), coin("LINK/USD", "Chainlink"), coin("LTC/USD", "Litecoin"),
      coin("BCH/USD", "Bitcoin Cash"), coin("DOT/USD", "Polkadot"), coin("UNI/USD", "Uniswap"),
    ],
  },
  options: {
    weekday: [
      stock("IWM", "Russell 2000 fund"), stock("DIA", "Dow Jones fund"), stock("XLF", "Financials fund"), stock("BAC", "Bank of America"),
      stock("INTC", "Intel"), stock("F", "Ford"), stock("PFE", "Pfizer"), stock("SOFI", "SoFi"), stock("HOOD", "Robinhood"),
      stock("PLTR", "Palantir"), stock("COIN", "Coinbase"),
    ],
    weekend: [
      coin("AAVE/USD", "Aave"), coin("GRT/USD", "The Graph"), coin("MKR/USD", "Maker"),
      coin("CRV/USD", "Curve"), coin("BAT/USD", "Basic Attention Token"), coin("SUSHI/USD", "SushiSwap"),
    ],
  },
};

export const FS_RULES = {
  maxHoldMin: 30, // the 30-minute law
  exitCheckEveryMin: 1, // exit checks every 1 minute while a trade is open
  hardCloseAtMin: 29, // the last 1-minute check before 30 minutes closes the trade
  dailyTarget: 20, // trades a day, each system: a target to reach, not a cap
  startPct: 0.3, // the entry strength (15-minute move) to start the day with, before learning
  startMinPct: 0.2, // learning never starts the day below this ...
  startMaxPct: 0.5, // ... or above this
  learnStepPct: 0.05, // learning moves the start by this much a day
  ladderStepPct: 0.05, // the pace ladder lowers the strength by this much per hour behind
  floorPct: 0.05, // never below this: the market must still be going up
  finalHourMin: 60, // in the last 60 minutes of the window the strength is at the floor
  noEntryFirstMin: 15, // no stock or option entries 9:30 to 9:45 AM ET
  cooldownMin: 5, // a market just sold is not bought again for 5 minutes (no duplicate trades)
  minLearnTrades: 5, // learning needs at least 5 closed trades to judge
  spot: { tradeUsd: 100, takeProfitPct: 2, stopLossPct: 1, takeProfitUsd: 2, stopLossUsd: 1 },
  options: {
    name: "Options", maxPremiumUsd: 150, minPremiumUsd: 5, strikeSteps: 6, maxExpiries: 3,
    takeProfitUsd: 50, stopLossUsd: 50, dailyStopUsd: 250, totalBrakeUsd: 500, tradeUsd: 100,
  },
  scalper: { name: "Scalper", tradeUsd: 100, dailyStopUsd: 25, totalBrakeUsd: 50 },
};

export const FS_RULE_LINES: Record<SystemId, string[]> = {
  options: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Its own markets, none of the main agent's. Weekdays: options on IWM, DIA, XLF, BAC, INTC, F, PFE, SOFI, HOOD, PLTR, COIN. Weekends: AAVE, GRT, MKR, CRV, BAT, SUSHI (as the coins themselves, Alpaca has no crypto options).",
    "Weekdays it buys ONE call (trend up only), slightly out of the money, expiring this week, total premium $150 or less (never a near-zero contract under $5). If the best market has no contract under $150, it tries the next best.",
    "Target: 20 trades a day, real trades only. Every minute it scores all its markets (15-minute move, price above the slow average, fast average above the slow) and takes the best one that passes.",
    "Entry strength starts at +0.3% in 15 minutes (moved 0.05% each morning by its own last 20 trades: stricter under 50% wins, looser at 60% or more, always between +0.2% and +0.5%). For each hour it is behind the pace to 20 it steps down 0.05%, to a floor of +0.05%; in the last hour it is at the floor. A falling market is never bought.",
    "Exits, checked every 1 minute: options +$50 / -$50; weekend coins +2% / -1% on $100; the trend turning down; 30 minutes reached (hard close); weekdays always out by 3:55 PM ET.",
    "No entries from 9:30 to 9:45 AM ET or in the last 10 minutes before the close. A market just sold is not bought again for 5 minutes.",
    "One position at a time. Daily stop -$250, total brake -$500 (this system's own).",
  ],
  scalper: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Its own markets, none of the main agent's. Weekdays: DIA, IWM, AVGO, NFLX, PLTR, COIN, MSTR, HOOD, SOFI, BAC, JPM, XOM, UNH, LLY, CRM, MU, INTC, F. Weekends: AVAX, LINK, LTC, BCH, DOT, UNI.",
    "Target: 20 trades a day, real trades only. Every minute it scores all its markets (15-minute move, price above the slow average, fast average above the slow) and takes the best one that passes.",
    "Entry strength starts at +0.3% in 15 minutes (moved 0.05% each morning by its own last 20 trades, always between +0.2% and +0.5%). For each hour behind the pace to 20 it steps down 0.05%, to a floor of +0.05%; in the last hour it is at the floor. A falling market is never bought.",
    "$100 a trade, one position at a time. Exits, checked every 1 minute: +2% (+$2), -1% (-$1), the trend turning down, or 30 minutes reached (hard close). Stock positions always close by 3:55 PM ET.",
    "No stock entries from 9:30 to 9:45 AM ET or in the last 10 minutes before the close. A market just sold is not bought again for 5 minutes.",
    "Daily stop -$25, total brake -$50 (this system's own).",
  ],
};

export function listFor(id: SystemId, weekend: boolean): MarketDef[] {
  return weekend ? FS_LISTS[id].weekend : FS_LISTS[id].weekday;
}

// ─────────────────────────────────────────────────────────────── pure rules (tested)

/** How far the price moved over the last 15 minutes, in %: the price now against the close 3 five-minute
 *  candles before the last finished one. null when there are too few candles. */
export function strengthPct(closes: number[], price: number): number | null {
  if (closes.length < 4) return null;
  const ref = closes[closes.length - 4];
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

/** The 30-minute law: true at the last 1-minute check before 30 minutes (29 or more held), so no trade is
 *  ever still open at the next check, which would be past 30 minutes. */
export function mustHardClose(entryAt: string, now: Date): boolean {
  return heldMinutes(entryAt, now) >= FS_RULES.hardCloseAtMin;
}

/** The trading window: weekdays 9:30 AM to 4:00 PM ET, weekends the whole day ET. */
export function tradingWindow(et: { weekend: boolean; hour: number; minute: number }) {
  const mins = et.hour * 60 + et.minute;
  const [start, end] = et.weekend ? [0, 24 * 60] : [9 * 60 + 30, 16 * 60];
  return { start, end, mins, inWindow: mins >= start && mins < end, minutesLeft: Math.max(0, end - mins), length: end - start };
}

/** The pace ladder: trades expected by now for 20 spread over the window, how many hours behind, and the entry
 *  strength needed now: the day's start, minus 0.05% for each (started) hour behind, never below +0.05%; at the
 *  floor in the last 60 minutes. Once 20 are done the ladder stops (back to the day's start). */
export function paceLadder(et: { weekend: boolean; hour: number; minute: number }, trades: number, startPct = FS_RULES.startPct) {
  const w = tradingWindow(et);
  const target = FS_RULES.dailyTarget;
  const frac = Math.max(0, Math.min(1, (w.mins - w.start) / w.length));
  const expected = Math.floor(target * frac);
  const perHour = target / (w.length / 60);
  const deficit = Math.max(0, expected - trades);
  const hoursBehind = round2(deficit / perHour);
  const steps = deficit > 0 ? Math.ceil(hoursBehind - 1e-9) : 0;
  const finalHour = w.inWindow && w.minutesLeft <= FS_RULES.finalHourMin;
  const done = trades >= target;
  const laddered = round2(Math.max(FS_RULES.floorPct, startPct - steps * FS_RULES.ladderStepPct));
  const thresholdPct = done ? startPct : finalHour ? FS_RULES.floorPct : laddered;
  return {
    target, trades, remaining: Math.max(0, target - trades), expected, deficit, hoursBehind, steps, finalHour, done,
    startPct, thresholdPct, minutesLeft: w.minutesLeft, inWindow: w.inWindow,
  };
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

/** A system's own record in one market: its last 20 closed trades. */
export type MarketRecord = { n: number; wins: number; losses: number; pnl: number };
export const EMPTY_RECORD: MarketRecord = { n: 0, wins: 0, losses: 0, pnl: 0 };

export function marketRecord(pnlsNewestFirst: number[]): MarketRecord {
  const last = pnlsNewestFirst.slice(0, 20);
  const wins = last.filter((p) => p > 0).length;
  return { n: last.length, wins, losses: last.length - wins, pnl: round2(last.reduce((s, p) => s + p, 0)) };
}

export type Analysis = {
  fast: number | null;
  slow: number | null;
  fastAbove: boolean; // the fast average above the slow
  priceAbove: boolean; // the price above the slow average
  strength: number | null; // 15-minute move in %
  falling: boolean; // never bought: fast below slow, price below slow, or not up in the last 15 minutes
  trend: "up" | "down" | "flat" | "unknown";
  score: number;
};

/** The score every market gets each minute: the 15-minute move, the price above the slow average and the fast
 *  average above the slow. */
export function analyzeMarket(closes: number[], price: number): Analysis {
  const x = crossover(closes);
  const p = price || closes[closes.length - 1] || 0;
  const fast = x.fastNow, slow = x.slowNow;
  const strength = strengthPct(closes, p);
  const fastAbove = fast != null && slow != null && fast > slow;
  const priceAbove = slow != null && p > slow;
  const trend = fast == null || slow == null ? "unknown" : fast > slow ? "up" : fast < slow ? "down" : "flat";
  const falling = !fastAbove || !priceAbove || strength == null || strength < FS_RULES.floorPct;
  const score = round2(Math.max(-2, Math.min(2, strength ?? -2)) * 2 + (priceAbove ? 1 : 0) + (fastAbove ? 1 : 0));
  return { fast, slow, fastAbove, priceAbove, strength, falling, trend, score };
}

/** Passes at this strength: not falling, and up at least `thresholdPct` in the last 15 minutes. */
export function passes(a: Analysis, thresholdPct: number): boolean {
  return !a.falling && a.strength != null && a.strength >= thresholdPct;
}

/** Rank all markets (best score first) and take the top-ranked one that passes. */
export function pickRanked<T extends { a: Analysis }>(items: T[], thresholdPct: number): { pick: T | null; ranked: T[]; passing: T[] } {
  const ranked = [...items].sort((x, y) => y.a.score - x.a.score);
  const passing = ranked.filter((x) => passes(x.a, thresholdPct));
  return { pick: passing[0] ?? null, ranked, passing };
}

export type ExitInput = {
  system: SystemId;
  shadow: NonNullable<Shadow>;
  price: number; // what is held is worth now, per unit (for an option: its premium per share)
  now: Date;
  trendAgainst: boolean; // the fast line crossed below the slow
  closeOut: boolean; // weekday stock or option: 3:55 PM ET
};

/** The exit rules, in order: take profit, stop loss, the 30-minute hard close, the 3:55 PM close, the trend
 *  turning down. An option uses +$50 / -$50; a stock or coin +2% / -1% on $100. Otherwise hold. */
export function fastExit(x: ExitInput): { sell: boolean; reason: string; pnl: number } {
  const m = x.shadow.mult ?? 1;
  const p = x.price || x.shadow.entryPrice;
  const pnl = round2(x.shadow.qty * m * (p - x.shadow.entryPrice));
  const money = `${pnl >= 0 ? "+" : "-"}$${Math.abs(pnl).toFixed(2)}`;
  const r = x.shadow.option ? FS_RULES.options : FS_RULES.spot;
  const mins = heldMinutes(x.shadow.entryAt, x.now);
  if (pnl >= r.takeProfitUsd) return { sell: true, reason: `take profit hit (${money})`, pnl };
  if (pnl <= -r.stopLossUsd) return { sell: true, reason: `stop loss hit (${money})`, pnl };
  if (mustHardClose(x.shadow.entryAt, x.now)) return { sell: true, reason: `30-minute hard close after ${Math.floor(mins)} min (${money})`, pnl };
  if (x.closeOut) return { sell: true, reason: `3:55 PM ET close, never overnight (${money})`, pnl };
  if (x.trendAgainst) return { sell: true, reason: `trend turned down (${money})`, pnl };
  return { sell: false, reason: `holding (${money}), ${Math.max(0, FS_RULES.maxHoldMin - Math.floor(mins))} min left at most`, pnl };
}

/** Friday of this week (ET) as "YYYY-MM-DD"; on Saturday and Sunday, the coming Friday. */
export function fridayOf(todayKey: string, weekday: string): string {
  const idx: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 };
  const d = idx[weekday] ?? 1;
  return addDays(todayKey, d === 6 ? 6 : (5 - d + 7) % 7);
}

/** The calls to try, in order: expiries this week first (nearest first, up to 3, never one that expires within
 *  the next 60 minutes), and in each the strikes just above the price (slightly out of the money), nearest first. */
export function callLadder(
  contracts: { symbol: string; strike: number; expiry: string }[],
  spot: number,
  todayKey: string,
  nowEtMinutes: number,
  steps = FS_RULES.options.strikeSteps,
  maxExpiries = FS_RULES.options.maxExpiries,
): { symbol: string; strike: number; expiry: string }[] {
  const ok = contracts.filter((c) => c.expiry >= todayKey && c.strike > spot && !(c.expiry === todayKey && nowEtMinutes >= 15 * 60));
  const expiries = [...new Set(ok.map((c) => c.expiry))].sort().slice(0, maxExpiries);
  const out: { symbol: string; strike: number; expiry: string }[] = [];
  for (const e of expiries) {
    out.push(...ok.filter((c) => c.expiry === e).sort((a, b) => a.strike - b.strike).slice(0, steps));
  }
  return out;
}

/** Why the day ended (or is heading) below 20, in plain words, from what blocked the checks most. */
export function blockReason(blocks: Record<string, number>): string {
  const words: Record<string, string> = {
    falling: "markets were falling — the not-falling rule blocked the rest",
    weak: "no market was moving up enough, even at the lowest allowed strength",
    noContract: "no option contract under $150 for the markets that were moving up",
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

/** Today's row for a system. The first time each day it also learns: its last 20 closed trades (before today)
 *  move today's starting strength. Works without the newer columns too (then the learning is worked out each time). */
async function dayFs(db: any, id: SystemId, et: ReturnType<typeof etParts>, now: Date) {
  const { data: today } = await db.from("ngmy_fast_days").select("*").eq("system", id).eq("et_day", et.dayKey).maybeSingle();
  if (today && today.start_pct != null) return today;
  const etMidnight = new Date(now.getTime() - (et.hour * 60 + et.minute) * 60000).toISOString();
  const [{ data: prev }, { data: sells }] = await Promise.all([
    db.from("ngmy_fast_days").select("start_pct").eq("system", id).lt("et_day", et.dayKey).not("start_pct", "is", null)
      .order("et_day", { ascending: false }).limit(1).maybeSingle(),
    db.from("ngmy_fast_log").select("pnl:details->pnl").eq("system", id).eq("decision", "would sell").lt("created_at", etMidnight)
      .order("id", { ascending: false }).limit(20),
  ]);
  const learned = learnStart(Number(prev?.start_pct ?? FS_RULES.startPct) || FS_RULES.startPct, (sells ?? []).map((r: any) => Number(r?.pnl ?? 0)));
  const row = { system: id, et_day: et.dayKey, trades: today?.trades ?? 0, day_pnl: today?.day_pnl ?? 0, start_pct: learned.startPct, learned: learned.line };
  const { error } = await db.from("ngmy_fast_days").upsert(row);
  if (error) {
    // The newer columns are not there yet: keep the basic row, and use the learning without saving it.
    if (!today) await db.from("ngmy_fast_days").upsert({ system: id, et_day: et.dayKey, trades: 0, day_pnl: 0 });
    return { ...(today ?? { trades: 0, day_pnl: 0, blocks: {} }), start_pct: learned.startPct, learned: learned.line, _noColumns: true };
  }
  return { ...row, blocks: today?.blocks ?? {} };
}

/** Counts what kept a check from trading, for the plain-words reason when the day ends below 20. */
async function countBlock(db: any, id: SystemId, day: any, key: string) {
  if (day._noColumns) return;
  const blocks = { ...(day.blocks ?? {}) };
  blocks[key] = Number(blocks[key] ?? 0) + 1;
  day.blocks = blocks;
  await db.from("ngmy_fast_days").update({ blocks }).eq("system", id).eq("et_day", day.et_day);
}

/** Every closed pretend trade of one or all fast systems: wins, losses, win rate, total. */
async function recordFs(db: any, id?: SystemId) {
  let q = db.from("ngmy_fast_log").select("pnl:details->pnl").eq("decision", "would sell").order("id", { ascending: false }).limit(1000);
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

/** One system's own record per market (its last 20 closed trades there), and when each market was last sold. */
async function marketRecordsFs(db: any, id: SystemId): Promise<{ records: Record<string, MarketRecord>; lastSold: Record<string, number> }> {
  const { data } = await db.from("ngmy_fast_log").select("asset,created_at,pnl:details->pnl").eq("system", id).eq("decision", "would sell")
    .order("id", { ascending: false }).limit(600);
  const by: Record<string, number[]> = {};
  const lastSold: Record<string, number> = {};
  for (const r of data ?? []) {
    const a = String(r.asset ?? "");
    (by[a] ??= []).push(Number(r?.pnl ?? 0));
    if (!(a in lastSold)) lastSold[a] = Date.parse(r.created_at);
  }
  const records: Record<string, MarketRecord> = {};
  for (const [a, pnls] of Object.entries(by)) records[a] = marketRecord(pnls);
  return { records, lastSold };
}

/** For the shared balance on the main agent screen: closed and open pretend P/L of the fast systems. */
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

type Choice = { ok: boolean; why: string; option?: OptionInfo; tried: { strike: number; expiry: string; cost: number | null }[] };

/** One call on `underlying`: slightly out of the money, expiring this week (then the next), total premium $150 or
 *  less and at least $5. Read-only GETs. */
async function chooseCall(k: any, underlying: string, spot: number, et: ReturnType<typeof etParts>): Promise<Choice> {
  const r = FS_RULES.options;
  const nowMin = et.hour * 60 + et.minute;
  const from = nowMin >= 15 * 60 ? addDays(et.dayKey, 1) : et.dayKey;
  const to = addDays(fridayOf(et.dayKey, et.weekday), 7);
  let list: any[] = [];
  try {
    const j = await aGet(PAPER_BASE, `/v2/options/contracts?underlying_symbols=${encodeURIComponent(underlying)}&type=call&status=active` +
      `&expiration_date_gte=${from}&expiration_date_lte=${to}&strike_price_gte=${(spot * 0.999).toFixed(2)}&strike_price_lte=${(spot * 1.15).toFixed(2)}&limit=1000`, k);
    list = Array.isArray(j?.option_contracts) ? j.option_contracts : [];
  } catch (e) {
    return { ok: false, why: `could not read the ${underlying} option list (${String((e as Error).message)})`, tried: [] };
  }
  const ladder = callLadder(list.map((c) => ({ symbol: String(c.symbol), strike: Number(c.strike_price), expiry: String(c.expiration_date) })),
    spot, et.dayKey, nowMin);
  if (!ladder.length) return { ok: false, why: `no ${underlying} call expiring soon`, tried: [] };
  const tried: Choice["tried"] = [];
  for (const expiry of [...new Set(ladder.map((c) => c.expiry))]) {
    const rung = ladder.filter((c) => c.expiry === expiry);
    let q: Record<string, { bid: number; ask: number; last: number }>;
    try { q = await optionQuotes(k, rung.map((c) => c.symbol)); } catch (e) {
      return { ok: false, why: `could not read ${underlying} option prices (${String((e as Error).message)})`, tried };
    }
    for (const c of rung) {
      const premium = q[c.symbol]?.ask || q[c.symbol]?.last || 0;
      const cost = premium ? round2(premium * 100) : null;
      tried.push({ strike: c.strike, expiry: c.expiry, cost });
      if (cost != null && cost <= r.maxPremiumUsd && cost >= r.minPremiumUsd) {
        return { ok: true, why: `slightly out of the money, $${cost.toFixed(2)}`, option: { contract: c.symbol, strike: c.strike, expiry: c.expiry, premium, cost, right: "call" }, tried };
      }
    }
  }
  return { ok: false, tried, why: `no ${underlying} call under $${r.maxPremiumUsd} right now (tried ${tried.length})` };
}

let previewCache: Record<string, { at: number; data: any }> = {};
let optionsLevelCache: { at: number; level: number } | null = null;

function changeToday(s: Series | undefined, dayKey: string): number {
  if (!s || !s.closes.length || !s.price) return 0;
  const i = s.times.findIndex((t) => etParts(new Date(t)).dayKey === dayKey);
  const open = i >= 0 ? (s.ohlc[i]?.o ?? s.closes[i]) : s.closes[0];
  return open ? round2((s.price - open) / open * 100) : 0;
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
  // Every market the started systems watch today, plus any market still held from before, in one read.
  const want = new Map<string, MarketDef>();
  for (const id of due) {
    for (const m of listFor(id, et.weekend)) want.set(m.symbol, m);
    const sh: Shadow = states[id].shadow ?? null;
    if (sh && !want.has(sh.symbol)) {
      want.set(sh.symbol, PA_MARKETS.find((m) => m.symbol === sh.symbol) ?? { symbol: sh.symbol, name: sh.symbol, kind: sh.symbol.includes("/") ? "crypto" : "stock" });
    }
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
  const lateForBuys = toClose < 10; // no new stock or option trade in the last 10 minutes
  const out: Record<string, unknown> = {};

  for (const id of due) {
    const st = states[id];
    const brakes = FS_RULES[id];
    const day = await dayFs(db, id, et, now);
    const sh: Shadow = st.shadow ?? null;

    // ── holding: the exit rules, every minute
    if (sh) {
      const s = series[sh.symbol];
      const price = sh.option ? await optionSellPrice(k, sh.option.contract) : (s?.price ?? 0);
      const trendAgainst = crossover(s?.closes ?? []).signal === "sell";
      const isStock = !sh.symbol.includes("/");
      const ex = fastExit({ system: id, shadow: sh, price, now, trendAgainst, closeOut: isStock && closeOut });
      const mark = heldMark(sh, price);
      if (ex.sell) {
        const total = round2(Number(st.total_pnl ?? 0) + ex.pnl);
        const dayPnl = round2(Number(day.day_pnl ?? 0) + ex.pnl);
        const patch: Record<string, unknown> = { shadow: null, total_pnl: total, last_mark: null, last_note: `Sold ${sh.symbol}: ${ex.reason}`, last_note_at: now.toISOString() };
        if (total <= -brakes.totalBrakeUsd) { patch.brake_paused = true; patch.brake_reason = `Total demo loss reached $${Math.abs(total).toFixed(2)}`; }
        await saveFs(db, id, patch);
        await db.from("ngmy_fast_days").update({ day_pnl: dayPnl }).eq("system", id).eq("et_day", et.dayKey);
        const exit = price || sh.entryPrice;
        await logFs(db, id, {
          kind: "trade", asset: sh.symbol, price: s?.price ?? null, decision: "would sell", reason: ex.reason,
          details: {
            pnl: ex.pnl, result: ex.pnl > 0 ? "WIN" : "LOSS", entryWhy: (sh as any).why ?? null,
            amount: mark.cost, qty: sh.qty, mult: sh.mult ?? 1, entryPrice: sh.entryPrice, exitPrice: exit,
            outValue: round2(sh.qty * (sh.mult ?? 1) * exit), entryAt: sh.entryAt, heldMin: round2(heldMinutes(sh.entryAt, now)),
            option: sh.option ?? null, by: "cron",
          },
        });
        if (patch.brake_paused) await logFs(db, id, { kind: "control", decision: "no action", reason: `paused by the $${brakes.totalBrakeUsd} brake. Press Start after a review.` });
        out[id] = { sold: sh.symbol, reason: ex.reason, pnl: ex.pnl };
      } else {
        await saveFs(db, id, { last_mark: mark, last_note: ex.reason, last_note_at: now.toISOString() });
        out[id] = { holding: sh.symbol, note: ex.reason };
      }
      continue;
    }

    // ── nothing held: score every market, take the top-ranked one that passes at today's strength
    const note = async (t: string) => { await saveFs(db, id, { last_note: t, last_note_at: now.toISOString() }); out[id] = t; };
    const trades = Number(day.trades ?? 0);
    const ladder = paceLadder(et, trades, Number(day.start_pct ?? FS_RULES.startPct));
    const thr = ladder.thresholdPct;
    if (st.brake_paused || Number(st.total_pnl ?? 0) <= -brakes.totalBrakeUsd) { await countBlock(db, id, day, "brake"); await note(`paused by the $${brakes.totalBrakeUsd} brake`); continue; }
    if (Number(day.day_pnl ?? 0) <= -brakes.dailyStopUsd) { await countBlock(db, id, day, "brake"); await note(`daily stop reached ($${brakes.dailyStopUsd} lost today)`); continue; }
    if (!ladder.inWindow) { await note("outside the trading window (weekdays 9:30 AM to 4:00 PM ET, weekends all day)"); continue; }
    if (!et.weekend && !stockOpen) { await countBlock(db, id, day, "closed"); await note("the stock market is closed today"); continue; }
    if (openingWindow(et)) { await note("first 15 minutes after the open, no entries"); continue; }
    if (!et.weekend && lateForBuys) { await note("last 10 minutes before the close, no new trades"); continue; }

    const { records, lastSold } = await marketRecordsFs(db, id);
    const cooling = (sym: string) => lastSold[sym] != null && now.getTime() - lastSold[sym] < FS_RULES.cooldownMin * 60000;
    const items = listFor(id, et.weekend)
      .filter((m) => series[m.symbol]?.price && (series[m.symbol]?.closes.length ?? 0) >= 25 && !cooling(m.symbol))
      .map((m) => ({ sym: m.symbol, a: analyzeMarket(series[m.symbol].closes, series[m.symbol].price) }));
    if (!items.length) { await countBlock(db, id, day, "noData"); await note("no prices for its markets right now"); continue; }
    const { pick, ranked, passing } = pickRanked(items, thr);
    const thrText = `+${thr.toFixed(2)}%${ladder.finalHour ? " (last hour: the floor)" : ladder.steps ? ` (${ladder.steps} step(s) down, ${ladder.hoursBehind} h behind)` : ""}`;
    if (!pick) {
      const allFalling = items.every((x) => x.a.falling);
      await countBlock(db, id, day, allFalling ? "falling" : "weak");
      const top = ranked[0];
      await note(`checked ${items.length} markets at ${thrText}: ${allFalling ? "all falling, never bought" : "none up enough yet"}. Best: ${top.sym} ${top.a.strength == null ? "" : `${top.a.strength >= 0 ? "+" : ""}${top.a.strength.toFixed(2)}%`}`);
      continue;
    }

    const why = (x: { sym: string; a: Analysis }, price: number) =>
      `${x.sym} ranked #${ranked.indexOf(x as any) + 1} of ${items.length}: up ${x.a.strength!.toFixed(2)}% in 15 min (needed ${thrText}), price above the slow average, fast above slow, score ${x.a.score}, entry $${price.toFixed(price < 10 ? 4 : 2)}`;
    const ranking = ranked.slice(0, 5).map((x) => ({ s: x.sym, score: x.a.score, strength: x.a.strength, trend: x.a.trend }));

    if (id === "options" && !et.weekend) {
      if ((acct.optionsLevel ?? 0) < 2) { await countBlock(db, id, day, "notEnabled"); await note("Options are not enabled on the paper account yet"); continue; }
      let bought = false;
      const misses: string[] = [];
      for (const cand of passing.slice(0, 3)) {
        const spot = series[cand.sym].price;
        const c = await chooseCall(k, cand.sym, spot, et);
        if (!c.ok || !c.option) { misses.push(c.why); continue; }
        const o = c.option;
        const reason = why(cand, spot);
        const newSh = { symbol: cand.sym, qty: 1, mult: 100, entryPrice: o.premium, entryAt: now.toISOString(), option: o, why: reason };
        await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh, o.premium), last_note: `Bought 1 ${cand.sym} $${o.strike} call (${o.expiry}) for $${o.cost.toFixed(2)}`, last_note_at: now.toISOString() });
        await db.from("ngmy_fast_days").update({ trades: trades + 1 }).eq("system", id).eq("et_day", et.dayKey);
        await logFs(db, id, {
          kind: "trade", asset: cand.sym, price: spot, decision: "would buy",
          reason: `would buy 1 ${cand.sym} $${o.strike} call expiring ${o.expiry} for $${o.cost.toFixed(2)} ($${o.premium.toFixed(2)} x 100)`,
          details: {
            amount: o.cost, qty: 1, mult: 100, entryPrice: o.premium, option: o, tried: c.tried, by: "cron",
            analysis: { why: reason, market: cand.sym, price: spot, strength: cand.a.strength, score: cand.a.score, trend: cand.a.trend, thresholdPct: thr, ladder, ranked: ranking },
          },
        });
        out[id] = { bought: o.contract };
        bought = true;
        break;
      }
      if (!bought) { await countBlock(db, id, day, "noContract"); await note(`setups passed, but ${misses[0] ?? "no contract fitted"}`); }
      continue;
    }

    // A stock or coin itself: $100 (Scalper every day, Options on weekends).
    const price = series[pick.sym].price;
    const reason = why(pick, price);
    const newSh = { symbol: pick.sym, qty: FS_RULES.spot.tradeUsd / price, mult: 1, entryPrice: price, entryAt: now.toISOString(), why: reason };
    await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh, price), last_note: `Bought $100 of ${pick.sym}`, last_note_at: now.toISOString() });
    await db.from("ngmy_fast_days").update({ trades: trades + 1 }).eq("system", id).eq("et_day", et.dayKey);
    await logFs(db, id, {
      kind: "trade", asset: pick.sym, price, decision: "would buy",
      reason: `would buy $100 of ${pick.sym}`,
      details: {
        amount: FS_RULES.spot.tradeUsd, qty: newSh.qty, mult: 1, entryPrice: price, by: "cron",
        analysis: { why: reason, market: pick.sym, price, strength: pick.a.strength, score: pick.a.score, trend: pick.a.trend, thresholdPct: thr, ladder, ranked: ranking },
      },
    });
    out[id] = { bought: pick.sym };
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
  const [day, { data: trades }, record, allFast, { records }] = await Promise.all([
    dayFs(db, id, et, now),
    db.from("ngmy_fast_log").select("id,created_at,et_time,asset,price,decision,reason,details")
      .eq("system", id).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(40),
    recordFs(db, id),
    recordFs(db),
    marketRecordsFs(db, id),
  ]);
  const fastOpen = FS_SYSTEMS.reduce((s, x) => s + (states[x].shadow ? Number(states[x].last_mark?.pnl ?? 0) : 0), 0);
  const ladder = paceLadder(et, Number(day?.trades ?? 0), Number(day?.start_pct ?? FS_RULES.startPct));
  const w = tradingWindow(et);
  const blocks = (day as any)?.blocks ?? {};
  const below = ladder.trades < ladder.target;
  const dayNote = !w.inWindow && w.mins >= w.end && below
    ? `The day ended at ${ladder.trades} of ${ladder.target}: ${blockReason(blocks)}.`
    : below && Object.keys(blocks).length
      ? `Most often blocked so far today: ${blockReason(blocks)}.`
      : null;

  // The shared paper balance (started now, awaited at the end).
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

  // The market list: every market of this system today, live, with its own record there.
  let markets: any[] = [];
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
          const a = s?.price ? analyzeMarket(s.closes, s.price) : null;
          return {
            symbol: m.symbol, name: m.name, price: s?.price ?? 0, changePct: changeToday(s, et.dayKey),
            tag: held === m.symbol ? "TRADED NOW" : open ? "watching" : "closed",
            chart: { points: chart.points, trend: chart.trend, signal: chart.signal },
            record: records[m.symbol] ?? EMPTY_RECORD,
            analysis: a ? {
              trend: a.trend, strength: a.strength, score: a.score, falling: a.falling, passes: passes(a, ladder.thresholdPct),
              why: `${a.falling ? "not bought (falling)" : passes(a, ladder.thresholdPct) ? "passes now" : "up, but not enough yet"}: ${a.strength == null ? "?" : `${a.strength >= 0 ? "+" : ""}${a.strength.toFixed(2)}%`} in 15 min (needs +${ladder.thresholdPct.toFixed(2)}%), price ${a.priceAbove ? "above" : "below"} the slow average, fast ${a.fastAbove ? "above" : "below"} slow, score ${a.score}`,
            } : null,
          };
        })
        .sort((a, b) => (b.analysis?.score ?? -99) - (a.analysis?.score ?? -99));

      if (id === "options") {
        if (et.weekend) {
          options = { enabled: true, weekend: true, message: "Weekend: Alpaca has no crypto options, so it trades AAVE, GRT, MKR, CRV, BAT and SUSHI as coins ($100, +2% / -1%)." };
        } else {
          if (!optionsLevelCache || Date.now() - optionsLevelCache.at > 10 * 60 * 1000) {
            const acc = await readAccount(cfg.keys);
            optionsLevelCache = { at: Date.now(), level: acc.optionsLevel };
          }
          if (optionsLevelCache.level < 2) {
            options = { enabled: false, message: "Options are not enabled on the paper account yet" };
          } else {
            // The call it would choose right now, for the best-ranked market.
            const top = markets.find((m) => m.analysis && !m.analysis.falling) ?? markets[0];
            const key = top?.symbol ?? "";
            const hit = previewCache[key];
            if (hit && Date.now() - hit.at < 60 * 1000) {
              options = hit.data;
            } else if (top?.price) {
              const c = await chooseCall(cfg.keys, top.symbol, top.price, et);
              options = { enabled: true, underlying: top.symbol, spot: top.price, right: "call", preview: c.option ?? null, fits: c.ok, why: c.why, tried: c.tried };
              previewCache = { [key]: { at: Date.now(), data: options } };
            }
          }
        }
      }
    } catch (e) {
      if (id === "options" && !options) options = { enabled: null, message: `Could not check options right now (${String((e as Error).message)})` };
    }
  }

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
      pace: { ...ladder, phase: ladder.finalHour ? 2 : 1, behind: ladder.deficit > 0, dayNote, learned: (day as any)?.learned ?? null, blocks },
      record,
      markets,
      marketList: list.map((m) => m.symbol),
      stockOpen,
      trades: trades ?? [],
      options,
      rules: FS_RULE_LINES[id],
      settings: {
        ...FS_RULES[id], spot: FS_RULES.spot, maxHoldMin: FS_RULES.maxHoldMin, hardCloseAtMin: FS_RULES.hardCloseAtMin,
        exitCheckEveryMin: FS_RULES.exitCheckEveryMin, dailyTarget: FS_RULES.dailyTarget, floorPct: FS_RULES.floorPct,
        takeProfitUsd: id === "options" ? FS_RULES.options.takeProfitUsd : FS_RULES.spot.takeProfitUsd,
        stopLossUsd: id === "options" ? FS_RULES.options.stopLossUsd : FS_RULES.spot.stopLossUsd,
        takeProfitPct: FS_RULES.spot.takeProfitPct, stopLossPct: FS_RULES.spot.stopLossPct,
        maxTrades: FS_RULES.dailyTarget, strengthPct: ladder.thresholdPct,
      },
      paperOnly: true,
      nowEt: et.label,
    },
  };
}
