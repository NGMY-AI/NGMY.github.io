// Signal Grid — Fast Systems (paper only). Nov 23, 2026; 10-trades update the same night.
//
// Two extra systems next to the main Signal Grid agent, each with its own Start/Stop, its own trade history,
// trades-today count, daily stop and total brake, and ONE open position at a time:
//   A. OPTIONS: one SPY contract, a call when SPY's trend is up and a put when it is down, premium $150 or less.
//   B. SCALPER: $100 of a stock (the 10 weekday stocks) or coin (the 4 weekend coins), small quick targets.
//
// Every check (each minute), for EVERY market of the system at once: analyse (fast and slow lines, 15-minute
// strength, price against the slow line), rank by score (plus a learning bonus or penalty from its own last 20
// trades in that market) and enter only the top-ranked market that passes the entry rules.
// Daily target 10 trades each: Phase 1 (until 2:00 PM ET) strong setups only; Phase 2 (2:00 PM ET on) when behind
// pace, the best-ranked market that is not falling hard. The count is real trades only.
//
// The 30-minute law: every trade closes within 30 minutes. Exit checks run every 1 minute (a pg_cron job every
// minute), and the hard timer sells at the last 1-minute check before 30 minutes (29 minutes or more held).
//
// PAPER ONLY. No order code here at all: only GET requests to Alpaca's paper endpoint and data feed, through the
// main agent's read-only GET helper. Pretend money, written to the fast-systems tables.

// deno-lint-ignore-file no-explicit-any

import {
  activeMarkets,
  addDays,
  aGet,
  bigTrend,
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
  readMarkets,
  round2,
  type Series,
  type Shadow,
  sma,
  todaysList,
} from "./alpaca_agent.ts";

export const FS_ACTIONS = new Set(["fsTick", "fsStatus", "fsSet", "fsLog"]);
export type SystemId = "options" | "scalper";
export const FS_SYSTEMS: SystemId[] = ["options", "scalper"];

export const FS_RULES = {
  maxHoldMin: 30, // the 30-minute law
  exitCheckEveryMin: 1, // exit checks every 1 minute while a trade is open
  hardCloseAtMin: 29, // the last 1-minute check before 30 minutes closes the trade
  strengthPct: 0.3, // Phase 1: the price must already be up at least 0.3% in the last 15 minutes
  penaltyStrengthPct: 0.5, // ... or 0.5% for a market with 3 straight losses
  noEntryFirstMin: 15, // no stock or option entries 9:30 to 9:45 AM ET
  dailyTarget: 10, // trades a day, each system
  phase2FromHour: 14, // Phase 2 from 2:00 PM ET
  fallingHardPct: -0.5, // never enter a market whose 15-minute move is worse than this ...
  fastDropPct: -0.25, // ... or whose fast line fell more than this over the last 15 minutes
  cooldownMin: 5, // after a sell, that market is not bought again for 5 minutes
  options: {
    name: "Options", tradeUsd: 150, maxPremiumUsd: 150, minDays: 2, strikeSteps: 5, maxExpiries: 3,
    takeProfitUsd: 50, stopLossUsd: 50, maxTrades: 10, dailyStopUsd: 50, totalBrakeUsd: 100,
  },
  scalper: {
    name: "Scalper", tradeUsd: 100, takeProfitPct: 2, stopLossPct: 1, takeProfitUsd: 2, stopLossUsd: 1,
    maxTrades: 10, dailyStopUsd: 10, totalBrakeUsd: 25,
  },
};

export const FS_RULE_LINES: Record<SystemId, string[]> = {
  options: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Weekdays, stock market hours only. Watches SPY, every minute.",
    "Direction follows the trend: a CALL when SPY's trend is up, a PUT when it is down. Never against the trend.",
    "Target: 10 trades a day. Phase 1 (until 2:00 PM ET): strong setups only: the fast line on the trend's side of the slow line, the slow line moving that way, the price on that side of it, and at least 0.3% in the last 15 minutes (0.5% after 3 straight losses).",
    "Phase 2 (2:00 PM ET to the close): when behind pace, it takes the best-ranked setup even if not perfect, but never into a hard move against it (15 minutes worse than -0.5%, or the fast line dropping sharply). The count is real trades only.",
    "No entries from 9:30 to 9:45 AM ET, and none in the last 10 minutes before the close.",
    "Contract: one contract, premium $150 or less. It starts at the money with the nearest expiry at least 2 days away; if that costs more, it steps out strike by strike (up to 5 strikes away), then to the next expiry. If nothing fits: no trade, and the screen says no contract under $150 right now. The budget is never raised.",
    "Exits, checked every 1 minute: +$50 profit, -$50 loss, the trend turning against it, 30 minutes reached (hard close), and always out by 3:55 PM ET. Never overnight.",
    "One position at a time, up to 10 trades a day. Daily stop -$50, total brake -$100 (this system's own).",
    "Learning: its own last 20 trades in a market give a bonus when winning and a penalty after 3 straight losses.",
  ],
  scalper: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Weekdays: the 10 stocks (SPY, QQQ, AAPL, MSFT, NVDA, AMZN, GOOGL, META, TSLA, AMD) while the stock market is open. Weekends: the 4 coins (BTC, ETH, SOL, DOGE). All analysed and ranked together every minute; only the top-ranked market that passes is bought.",
    "Target: 10 trades a day. Phase 1 (until 2:00 PM ET): strong setups only: fast line above the slow line, slow line rising, price above it, and at least +0.3% in the last 15 minutes (+0.5% for a market with 3 straight losses).",
    "Phase 2 (2:00 PM ET on): when behind pace, the best-ranked market that is not falling hard (15 minutes worse than -0.5%, or the fast line dropping sharply). The count is real trades only.",
    "No stock entries from 9:30 to 9:45 AM ET, and none in the last 10 minutes before the close. A market just sold is not bought again for 5 minutes.",
    "$100 a trade, one position at a time, up to 10 trades a day.",
    "Exits, checked every 1 minute: +2% (+$2 on $100), -1% (-$1), the trend turning down, or 30 minutes reached (hard close). Stock positions always close by 3:55 PM ET.",
    "Daily stop -$10, total brake -$25 (this system's own).",
    "Learning: its own last 20 trades in a market give a bonus when winning and a penalty (ranked last) after 3 straight losses.",
  ],
};

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

/** The daily pace: trades expected by now when 10 are spread over the session (weekdays 9:30 AM to 4:00 PM ET,
 *  weekends the whole day), the phase, and whether the system is behind. */
export function pace(et: { weekend: boolean; hour: number; minute: number }, tradesToday: number, target = FS_RULES.dailyTarget) {
  const mins = et.hour * 60 + et.minute;
  const [start, end] = et.weekend ? [0, 24 * 60] : [9 * 60 + 30, 16 * 60];
  const frac = Math.max(0, Math.min(1, (mins - start) / (end - start)));
  const expected = Math.floor(target * frac);
  const phase = mins >= FS_RULES.phase2FromHour * 60 ? 2 : 1;
  const behind = tradesToday < expected;
  return { target, expected, trades: tradesToday, phase, behind, phase2Active: phase === 2 && behind && tradesToday < target };
}

/** A system's own record in one market: its last 20 closed trades. */
export type MarketRecord = { n: number; wins: number; losses: number; pnl: number; lastThreeLosses: boolean };
export const EMPTY_RECORD: MarketRecord = { n: 0, wins: 0, losses: 0, pnl: 0, lastThreeLosses: false };

/** From closed-trade P/Ls of one market, newest first: the last 20, and whether the newest 3 were all losses. */
export function marketRecord(pnlsNewestFirst: number[]): MarketRecord {
  const last = pnlsNewestFirst.slice(0, 20);
  const wins = last.filter((p) => p > 0).length;
  return {
    n: last.length, wins, losses: last.length - wins, pnl: round2(last.reduce((s, p) => s + p, 0)),
    lastThreeLosses: last.length >= 3 && last.slice(0, 3).every((p) => p <= 0),
  };
}

export type Analysis = {
  dir: "up" | "down";
  fast: number | null;
  slow: number | null;
  slowRising: boolean; // the slow line moving the trade's way (rising for up, falling for down)
  fastSide: boolean; // the fast line on the trade's side of the slow line
  priceSide: boolean; // the price on the trade's side of the slow line
  strength: number | null; // 15-minute move in %, signed for the direction (positive = the trade's way)
  fastSlope: number | null; // fast line change over 15 minutes in %, signed for the direction
  trend: "up" | "down" | "flat" | "unknown";
  bonus: number; // learning bonus from the last 20 trades (-1 to +1)
  penalized: boolean; // 3 straight losses: ranked last, needs a stronger setup
  score: number;
  phase1Ok: boolean;
  againstHard: boolean; // a hard move against the trade: never enter
  why: string;
};

/** The analysis before every entry, for one market and one direction: the trend lines, the strength, the price
 *  against the slow line and the learning from its own record, as one score. */
export function analyzeMarket(closes: number[], price: number, rec: MarketRecord = EMPTY_RECORD, dir: "up" | "down" = "up"): Analysis {
  const sign = dir === "up" ? 1 : -1;
  const x = crossover(closes);
  const big = bigTrend(closes, price);
  const p = price || closes[closes.length - 1] || 0;
  const fast = x.fastNow, slow = x.slowNow;
  const fastPrev = closes.length > 3 ? sma(closes.slice(0, closes.length - 3), 9) : null;
  const s = strengthPct(closes, p);
  const strength = s == null ? null : sign * s;
  const fastSlope = fast != null && fastPrev ? sign * (fast - fastPrev) / fastPrev * 100 : null;
  const trend = fast == null || slow == null ? "unknown" : fast > slow ? "up" : fast < slow ? "down" : "flat";
  const fastSide = fast != null && slow != null && sign * (fast - slow) > 0;
  const slowRising = big.slowNow != null && big.slowHourAgo != null && sign * (big.slowNow - big.slowHourAgo) > 0;
  const priceSide = slow != null && sign * (p - slow) > 0;
  const bonus = rec.n >= 3 ? round2((rec.wins / rec.n - 0.5) * 2) : 0;
  const penalized = rec.lastThreeLosses;
  const need = penalized ? FS_RULES.penaltyStrengthPct : FS_RULES.strengthPct;
  const score = round2(
    (fastSide && slowRising ? 2 : fastSide ? 1 : 0) +
      Math.max(-2, Math.min(2, strength ?? 0)) * 2 +
      (priceSide ? 1 : 0) +
      bonus -
      (penalized ? 100 : 0),
  );
  const phase1Ok = fastSide && slowRising && priceSide && strength != null && strength >= need;
  const againstHard = strength == null || strength < FS_RULES.fallingHardPct || (fastSlope != null && fastSlope < FS_RULES.fastDropPct);
  const way = dir === "up" ? "up" : "down";
  const parts = [
    `trend ${trend}`,
    `${strength == null ? "?" : `${s! >= 0 ? "+" : ""}${s!.toFixed(2)}%`} in 15 min`,
    `price ${slow == null ? "?" : p >= slow ? "above" : "below"} the slow line`,
  ];
  if (rec.n) parts.push(`last ${rec.n}: ${rec.wins}W/${rec.losses}L`);
  if (penalized) parts.push(`3 straight losses (needs ${dir === "up" ? "+" : "-"}${need}%)`);
  const why = phase1Ok
    ? `strong ${way} setup: ${parts.join(", ")}`
    : `${!fastSide ? `fast line not ${dir === "up" ? "above" : "below"} the slow` : !slowRising ? `slow line not ${dir === "up" ? "rising" : "falling"}` : !priceSide ? `price not ${dir === "up" ? "above" : "below"} the slow line` : `only ${strength == null ? "?" : strength.toFixed(2)}% the ${way} way in 15 min (needs ${need}%)`}: ${parts.join(", ")}`;
  return { dir, fast, slow, slowRising, fastSide, priceSide, strength, fastSlope, trend, bonus, penalized, score, phase1Ok, againstHard, why };
}

/** Rank markets (best score first) and pick: Phase 1 = the top-ranked that passes the strong-setup rules;
 *  Phase 2 (behind pace) = the top-ranked that is not moving hard against the trade. */
export function pickRanked<T extends { a: Analysis }>(items: T[], phase2Active: boolean): { pick: T | null; ranked: T[]; mode: "strong" | "pace" | null } {
  const ranked = [...items].sort((x, y) => y.a.score - x.a.score);
  const strong = ranked.find((x) => x.a.phase1Ok) ?? null;
  if (strong) return { pick: strong, ranked, mode: "strong" };
  if (phase2Active) {
    const best = ranked.find((x) => !x.a.againstHard) ?? null;
    if (best) return { pick: best, ranked, mode: "pace" };
  }
  return { pick: null, ranked, mode: null };
}

export type ExitInput = {
  system: SystemId;
  shadow: NonNullable<Shadow>;
  price: number; // what is held is worth now, per unit (for an option: its premium per share)
  now: Date;
  trendAgainst: boolean; // the fast line crossed against the trade (below the slow for a long or call, above for a put)
  closeOut: boolean; // weekday stock or option: 3:55 PM ET
};

/** The exit rules for both systems, in order: take profit, stop loss, the 30-minute hard close, the 3:55 PM
 *  close, the trend turning against the trade. Otherwise hold. */
export function fastExit(x: ExitInput): { sell: boolean; reason: string; pnl: number } {
  const m = x.shadow.mult ?? 1;
  const p = x.price || x.shadow.entryPrice;
  const pnl = round2(x.shadow.qty * m * (p - x.shadow.entryPrice));
  const money = `${pnl >= 0 ? "+" : "-"}$${Math.abs(pnl).toFixed(2)}`;
  const r = x.system === "options" ? FS_RULES.options : FS_RULES.scalper;
  const mins = heldMinutes(x.shadow.entryAt, x.now);
  if (pnl >= r.takeProfitUsd) return { sell: true, reason: `take profit hit (${money})`, pnl };
  if (pnl <= -r.stopLossUsd) return { sell: true, reason: `stop loss hit (${money})`, pnl };
  if (mustHardClose(x.shadow.entryAt, x.now)) return { sell: true, reason: `30-minute hard close after ${Math.floor(mins)} min (${money})`, pnl };
  if (x.closeOut) return { sell: true, reason: `3:55 PM ET close, never overnight (${money})`, pnl };
  if (x.trendAgainst) return { sell: true, reason: `trend turned against the trade (${money})`, pnl };
  return { sell: false, reason: `holding (${money}), ${Math.max(0, FS_RULES.maxHoldMin - Math.floor(mins))} min left at most`, pnl };
}

/** The contracts to try, in order, for a call or a put: for each expiry (nearest at least 2 days away first, up
 *  to 3), the at-the-money strike and then up to 5 strikes further out of the money. Never one that expires
 *  within the next 60 minutes. Pure, so it is tested. */
export function contractLadder(
  contracts: { symbol: string; strike: number; expiry: string }[],
  spot: number,
  todayKey: string,
  right: "call" | "put",
  nowEtMinutes: number,
  minDays = FS_RULES.options.minDays,
  steps = FS_RULES.options.strikeSteps,
  maxExpiries = FS_RULES.options.maxExpiries,
): { symbol: string; strike: number; expiry: string }[] {
  const minExpiry = addDays(todayKey, minDays);
  const ok = contracts.filter((c) => c.expiry >= minExpiry && c.strike > 0 && !(c.expiry === todayKey && nowEtMinutes >= 15 * 60));
  const expiries = [...new Set(ok.map((c) => c.expiry))].sort().slice(0, maxExpiries);
  const out: { symbol: string; strike: number; expiry: string }[] = [];
  for (const e of expiries) {
    const inE = ok.filter((c) => c.expiry === e);
    const atm = [...inE].sort((a, b) => Math.abs(a.strike - spot) - Math.abs(b.strike - spot) || a.strike - b.strike)[0];
    if (!atm) continue;
    const further = right === "call"
      ? inE.filter((c) => c.strike > atm.strike).sort((a, b) => a.strike - b.strike)
      : inE.filter((c) => c.strike < atm.strike).sort((a, b) => b.strike - a.strike);
    out.push(atm, ...further.slice(0, steps));
  }
  return out;
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

async function dayFs(db: any, id: SystemId, dayKey: string) {
  const { data } = await db.from("ngmy_fast_days").select("*").eq("system", id).eq("et_day", dayKey).maybeSingle();
  if (data) return data;
  const row = { system: id, et_day: dayKey, trades: 0, day_pnl: 0 };
  await db.from("ngmy_fast_days").upsert(row);
  return row;
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

/** The SPY contract to pretend-buy: at the money first; if it costs more than $150, step out strike by strike
 *  (up to 5 strikes), then to the next expiry, until one costs $150 or less. The budget is never raised. */
async function chooseContract(k: any, spot: number, todayKey: string, right: "call" | "put", nowEtMinutes: number): Promise<Choice> {
  const r = FS_RULES.options;
  const from = addDays(todayKey, r.minDays);
  const to = addDays(todayKey, r.minDays + 30);
  let list: any[] = [];
  try {
    const j = await aGet(PAPER_BASE, `/v2/options/contracts?underlying_symbols=SPY&type=${right}&status=active&expiration_date_gte=${from}` +
      `&expiration_date_lte=${to}&strike_price_gte=${Math.floor(spot * 0.95)}&strike_price_lte=${Math.ceil(spot * 1.05)}&limit=1000`, k);
    list = Array.isArray(j?.option_contracts) ? j.option_contracts : [];
  } catch (e) {
    return { ok: false, why: `could not read the SPY option list (${String((e as Error).message)})`, tried: [] };
  }
  const ladder = contractLadder(list.map((c) => ({ symbol: String(c.symbol), strike: Number(c.strike_price), expiry: String(c.expiration_date) })),
    spot, todayKey, right, nowEtMinutes);
  if (!ladder.length) return { ok: false, why: `no SPY ${right} found with an expiry at least 2 days away`, tried: [] };
  const tried: Choice["tried"] = [];
  for (const expiry of [...new Set(ladder.map((c) => c.expiry))]) {
    const rung = ladder.filter((c) => c.expiry === expiry);
    let q: Record<string, { bid: number; ask: number; last: number }>;
    try { q = await optionQuotes(k, rung.map((c) => c.symbol)); } catch (e) {
      return { ok: false, why: `could not read SPY option prices (${String((e as Error).message)})`, tried };
    }
    for (const c of rung) {
      const premium = q[c.symbol]?.ask || q[c.symbol]?.last || 0;
      const cost = premium ? round2(premium * 100) : null;
      tried.push({ strike: c.strike, expiry: c.expiry, cost });
      if (cost != null && cost <= r.maxPremiumUsd) {
        return { ok: true, why: tried.length > 1 ? `stepped out ${tried.length - 1} time(s) to fit $${r.maxPremiumUsd}` : "at the money fits", option: { contract: c.symbol, strike: c.strike, expiry: c.expiry, premium, cost, right }, tried };
      }
    }
  }
  const first = tried[0];
  return {
    ok: false, tried,
    why: `no contract under $${r.maxPremiumUsd} right now (at the money: SPY $${first?.strike} ${right} ${first?.expiry} costs ${first?.cost == null ? "?" : `$${first.cost.toFixed(2)}`}; tried ${tried.length} contracts)`,
  };
}

let previewCache: { at: number; data: any } | null = null;
let optionsLevelCache: { at: number; level: number } | null = null;

// ─────────────────────────────────────────────────────────────── the 1-minute check

/** The market panel and the analysis use the same per-market view. */
function changeToday(s: Series | undefined, dayKey: string): number {
  if (!s || !s.closes.length || !s.price) return 0;
  const i = s.times.findIndex((t) => etParts(new Date(t)).dayKey === dayKey);
  const open = i >= 0 ? (s.ohlc[i]?.o ?? s.closes[i]) : s.closes[0];
  return open ? round2((s.price - open) / open * 100) : 0;
}

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
  const extra: MarketDef[] = [];
  for (const id of due) {
    const sh: Shadow = states[id].shadow ?? null;
    if (sh && !PA_MARKETS.some((m) => m.symbol === sh.symbol)) extra.push({ symbol: sh.symbol, name: sh.symbol, kind: sh.symbol.includes("/") ? "crypto" : "stock" });
  }
  let series: Record<string, Series>;
  let clock: any;
  let acct: any;
  try {
    [series, clock, acct] = await Promise.all([readMarkets(k, extra), aGet(PAPER_BASE, "/v2/clock", k), readAccount(k)]);
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
    const r = id === "options" ? FS_RULES.options : FS_RULES.scalper;
    const day = await dayFs(db, id, et.dayKey);
    const sh: Shadow = st.shadow ?? null;

    // ── holding: the exit rules, every minute
    if (sh) {
      const s = series[sh.symbol];
      const price = sh.option ? await optionSellPrice(k, sh.option.contract) : (s?.price ?? 0);
      const sig = crossover(s?.closes ?? []).signal;
      const trendAgainst = sh.option?.right === "put" ? sig === "buy" : sig === "sell";
      const isStock = !sh.symbol.includes("/");
      const ex = fastExit({ system: id, shadow: sh, price, now, trendAgainst, closeOut: isStock && closeOut });
      const mark = heldMark(sh, price);
      if (ex.sell) {
        const total = round2(Number(st.total_pnl ?? 0) + ex.pnl);
        const dayPnl = round2(Number(day.day_pnl ?? 0) + ex.pnl);
        const patch: Record<string, unknown> = { shadow: null, total_pnl: total, last_mark: null, last_note: `Sold ${sh.symbol}: ${ex.reason}`, last_note_at: now.toISOString() };
        if (total <= -r.totalBrakeUsd) { patch.brake_paused = true; patch.brake_reason = `Total demo loss reached $${Math.abs(total).toFixed(2)}`; }
        await saveFs(db, id, patch);
        await db.from("ngmy_fast_days").update({ day_pnl: dayPnl }).eq("system", id).eq("et_day", et.dayKey);
        const exit = price || sh.entryPrice;
        await logFs(db, id, {
          kind: "trade", asset: sh.symbol, price: s?.price ?? null, decision: "would sell", reason: ex.reason,
          details: {
            pnl: ex.pnl, amount: mark.cost, qty: sh.qty, mult: sh.mult ?? 1, entryPrice: sh.entryPrice, exitPrice: exit,
            outValue: round2(sh.qty * (sh.mult ?? 1) * exit), entryAt: sh.entryAt, heldMin: round2(heldMinutes(sh.entryAt, now)),
            option: sh.option ?? null, by: "cron",
          },
        });
        if (patch.brake_paused) await logFs(db, id, { kind: "control", decision: "no action", reason: `paused by the $${r.totalBrakeUsd} brake. Press Start after a review.` });
        out[id] = { sold: sh.symbol, reason: ex.reason, pnl: ex.pnl };
      } else {
        await saveFs(db, id, { last_mark: mark, last_note: ex.reason, last_note_at: now.toISOString() });
        out[id] = { holding: sh.symbol, note: ex.reason };
      }
      continue;
    }

    // ── nothing held: analyse every market, rank, and enter the top one that passes
    const note = async (t: string) => { await saveFs(db, id, { last_note: t, last_note_at: now.toISOString() }); out[id] = t; };
    const trades = Number(day.trades ?? 0);
    const pc = pace(et, trades);
    if (st.brake_paused || Number(st.total_pnl ?? 0) <= -r.totalBrakeUsd) { await note(`paused by the $${r.totalBrakeUsd} brake`); continue; }
    if (Number(day.day_pnl ?? 0) <= -r.dailyStopUsd) { await note(`daily stop reached ($${r.dailyStopUsd} lost today)`); continue; }
    if (trades >= r.maxTrades) { await note(`daily target reached: ${trades} of ${r.maxTrades} trades`); continue; }

    const { records, lastSold } = await marketRecordsFs(db, id);
    const cooling = (sym: string) => lastSold[sym] != null && now.getTime() - lastSold[sym] < FS_RULES.cooldownMin * 60000;

    if (id === "options") {
      if (et.weekend || !stockOpen) { await note("stock market closed: options trade on weekdays 9:30 AM to 4:00 PM ET"); continue; }
      if (openingWindow(et)) { await note("first 15 minutes after the open, no entries"); continue; }
      if (lateForBuys) { await note("last 10 minutes before the close, no new trades"); continue; }
      const s = series["SPY"];
      if (!s?.price) { await note("no SPY price right now"); continue; }
      // Direction follows the trend: up = call, down = put. Never against the trend.
      const x = crossover(s.closes);
      const dir: "up" | "down" = x.fastNow != null && x.slowNow != null && x.fastNow < x.slowNow ? "down" : "up";
      const a = analyzeMarket(s.closes, s.price, records["SPY"] ?? EMPTY_RECORD, dir);
      const { pick, mode } = pickRanked([{ sym: "SPY", a }], pc.phase2Active);
      if (!pick) { await note(`SPY ${dir === "up" ? "call" : "put"}: no setup${pc.phase2Active ? " (Phase 2: moving hard against it)" : ""}: ${a.why}`); continue; }
      if (cooling("SPY")) { await note("SPY was just sold: waiting 5 minutes before the next entry"); continue; }
      if ((acct.optionsLevel ?? 0) < 2) { await note("Options are not enabled on the paper account yet"); continue; }
      const right = dir === "up" ? "call" : "put";
      const c = await chooseContract(k, s.price, et.dayKey, right, et.hour * 60 + et.minute);
      if (!c.ok || !c.option) { await note(`SPY ${right} setup (${mode}), but ${c.why}`); continue; }
      const o = c.option;
      const newSh = { symbol: "SPY", qty: 1, mult: 100, entryPrice: o.premium, entryAt: now.toISOString(), option: o };
      const analysis = {
        phase: pc.phase, mode, pace: pc, market: "SPY", price: s.price, trend: a.trend, direction: right,
        strength: a.strength == null ? null : round2(dir === "up" ? a.strength : -a.strength), score: a.score, record: records["SPY"] ?? null,
        why: `${mode === "strong" ? "Strong setup" : "Phase 2, behind pace: best-ranked setup, not moving hard against it"}. ${a.why}. Contract: ${c.why}.`,
      };
      await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh, o.premium), last_note: `Bought 1 SPY $${o.strike} ${right} (${o.expiry}) for $${o.cost.toFixed(2)}`, last_note_at: now.toISOString() });
      await db.from("ngmy_fast_days").update({ trades: trades + 1 }).eq("system", id).eq("et_day", et.dayKey);
      await logFs(db, id, {
        kind: "trade", asset: "SPY", price: s.price, decision: "would buy",
        reason: `would buy 1 SPY $${o.strike} ${right} expiring ${o.expiry} for $${o.cost.toFixed(2)} ($${o.premium.toFixed(2)} x 100)`,
        details: { amount: o.cost, qty: 1, mult: 100, entryPrice: o.premium, option: o, analysis, tried: c.tried, by: "cron" },
      });
      out[id] = { bought: o.contract };
      continue;
    }

    // Scalper: every market on the day's list, analysed and ranked together.
    const active = activeMarkets(et.weekend, stockOpen);
    if (!active.length) { await note("no market open right now: stocks on weekdays 9:30 AM to 4:00 PM ET, coins on weekends"); continue; }
    const items = active
      .filter((sym) => !(sym.includes("/") ? false : openingWindow(et) || lateForBuys))
      .filter((sym) => series[sym]?.price && !cooling(sym))
      .map((sym) => ({ sym, a: analyzeMarket(series[sym].closes, series[sym].price, records[sym] ?? EMPTY_RECORD, "up") }));
    if (!items.length) { await note(openingWindow(et) ? "first 15 minutes after the open, no entries" : lateForBuys ? "last 10 minutes before the close, no new trades" : "no market ready right now"); continue; }
    const { pick, ranked, mode } = pickRanked(items, pc.phase2Active);
    if (!pick) {
      const top = ranked[0];
      const flat = ranked.every((x) => Math.abs(x.a.strength ?? 0) < 0.1);
      await note(`checked ${items.length} markets: no ${pc.phase2Active ? "setup found (all moving hard down)" : "strong setup"}${flat ? " — market flat" : ""}. Best: ${top.sym} (${top.a.why})`);
      continue;
    }
    const price = series[pick.sym].price;
    const newSh = { symbol: pick.sym, qty: FS_RULES.scalper.tradeUsd / price, mult: 1, entryPrice: price, entryAt: now.toISOString() };
    const analysis = {
      phase: pc.phase, mode, pace: pc, market: pick.sym, price, trend: pick.a.trend, strength: pick.a.strength, score: pick.a.score,
      record: records[pick.sym] ?? null,
      why: `${mode === "strong" ? "Top-ranked strong setup" : "Phase 2, behind pace: the best-ranked market not falling hard"} out of ${items.length}. ${pick.a.why}.`,
      ranked: ranked.slice(0, 5).map((x) => ({ s: x.sym, score: x.a.score, strength: x.a.strength, trend: x.a.trend })),
    };
    await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh, price), last_note: `Bought $100 of ${pick.sym}`, last_note_at: now.toISOString() });
    await db.from("ngmy_fast_days").update({ trades: trades + 1 }).eq("system", id).eq("et_day", et.dayKey);
    await logFs(db, id, {
      kind: "trade", asset: pick.sym, price, decision: "would buy",
      reason: `would buy $100 of ${pick.sym}: ${analysis.why}`,
      details: { amount: FS_RULES.scalper.tradeUsd, qty: newSh.qty, mult: 1, entryPrice: price, analysis, by: "cron" },
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
  const et = etParts(new Date());
  const cfg = readConfig();
  // All database reads at once (they used to run one after another).
  const [{ data: today }, { data: trades }, record, allFast, { records }] = await Promise.all([
    db.from("ngmy_fast_days").select("*").eq("system", id).eq("et_day", et.dayKey).maybeSingle(),
    db.from("ngmy_fast_log").select("id,created_at,et_time,asset,price,decision,reason,details")
      .eq("system", id).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(40),
    recordFs(db, id),
    recordFs(db),
    marketRecordsFs(db, id),
  ]);
  const fastOpen = FS_SYSTEMS.reduce((s, x) => s + (states[x].shadow ? Number(states[x].last_mark?.pnl ?? 0) : 0), 0);
  const pc = pace(et, Number(today?.trades ?? 0));

  // The shared paper balance: the Alpaca paper account plus every closed and open pretend trade of every system.
  // Started now and awaited at the end, so it runs while the market prices are read.
  const sharedP: Promise<Record<string, unknown> | null> = (async () => {
    try {
      const [main, landingClosed] = await Promise.all([loadState(db), ctx.landingClosed ? ctx.landingClosed() : Promise.resolve(0)]);
      const equity = Number(main.snapshot?.equity ?? 0) || null;
      const landingOpen = main.shadow ? Number(main.snapshot?.held?.pnl ?? 0) : 0;
      const closed = round2(landingClosed + allFast.pnlSum);
      const open = round2(landingOpen + fastOpen);
      return { equity, closed, open, balance: equity == null ? null : round2(equity + closed + open) };
    } catch {
      return null; // shown without the balance
    }
  })();

  // The Agent markets panel: every market of this system, live, with its own record there.
  let markets: any[] = [];
  let options: Record<string, unknown> | null = null;
  let stockOpen = false;
  if (cfg.keys) {
    try {
      const [series, clock] = await Promise.all([readMarkets(cfg.keys), readClock(cfg.keys)]);
      stockOpen = !!clock?.is_open;
      const list = id === "options" ? ["SPY"] : todaysList(et.weekend);
      const active = id === "options" ? (stockOpen && !et.weekend ? ["SPY"] : []) : activeMarkets(et.weekend, stockOpen);
      const held = st.shadow?.symbol ?? null;
      markets = list.map((sym) => {
        const s = series[sym];
        const chart = buildChart(s?.times ?? [], s?.closes ?? [], 48, s?.ohlc);
        const rec = records[sym] ?? EMPTY_RECORD;
        const x = crossover(s?.closes ?? []);
        const dir: "up" | "down" = id === "options" && x.fastNow != null && x.slowNow != null && x.fastNow < x.slowNow ? "down" : "up";
        const a = s?.price ? analyzeMarket(s.closes, s.price, rec, dir) : null;
        return {
          symbol: sym, name: PA_MARKETS.find((m) => m.symbol === sym)?.name ?? sym, price: s?.price ?? 0, changePct: changeToday(s, et.dayKey),
          tag: held === sym ? "TRADED NOW" : active.includes(sym) ? "watching" : "closed",
          chart: { points: chart.points, trend: chart.trend, signal: chart.signal },
          record: rec,
          analysis: a ? { trend: a.trend, strength: a.strength, score: a.score, strong: a.phase1Ok, penalized: a.penalized, direction: id === "options" ? (dir === "up" ? "call" : "put") : "up", why: a.why } : null,
        };
      });

      if (id === "options") {
        // The contract it would choose right now (call or put by the trend), or a clear "not enabled" message.
        if (!optionsLevelCache || Date.now() - optionsLevelCache.at > 10 * 60 * 1000) {
          const acc = await readAccount(cfg.keys);
          optionsLevelCache = { at: Date.now(), level: acc.optionsLevel };
        }
        if (optionsLevelCache.level < 2) {
          options = { enabled: false, message: "Options are not enabled on the paper account yet" };
        } else if (previewCache && Date.now() - previewCache.at < 60 * 1000) {
          options = previewCache.data;
        } else {
          const spot = series["SPY"]?.price ?? 0;
          const x = crossover(series["SPY"]?.closes ?? []);
          const right: "call" | "put" = x.fastNow != null && x.slowNow != null && x.fastNow < x.slowNow ? "put" : "call";
          const c = spot ? await chooseContract(cfg.keys, spot, et.dayKey, right, et.hour * 60 + et.minute) : { ok: false, why: "no SPY price yet", tried: [] } as Choice;
          options = { enabled: true, spot, right, preview: c.option ?? null, fits: c.ok, why: c.why, tried: c.tried };
          previewCache = { at: Date.now(), data: options };
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
      today: today ?? null,
      pace: pc,
      record,
      markets,
      stockOpen,
      trades: trades ?? [],
      options,
      rules: FS_RULE_LINES[id],
      settings: {
        ...FS_RULES[id], maxHoldMin: FS_RULES.maxHoldMin, hardCloseAtMin: FS_RULES.hardCloseAtMin,
        exitCheckEveryMin: FS_RULES.exitCheckEveryMin, strengthPct: FS_RULES.strengthPct, noEntryFirstMin: FS_RULES.noEntryFirstMin,
        dailyTarget: FS_RULES.dailyTarget, phase2FromHour: FS_RULES.phase2FromHour,
      },
      paperOnly: true,
      nowEt: et.label,
    },
  };
}
