// Signal Grid — Fast Systems (paper only, Nov 23, 2026).
//
// Two extra systems next to the main Signal Grid agent, each with its own Start/Stop, its own trade history,
// trades-today count, daily stop and total brake, and ONE open position at a time:
//   A. OPTIONS: one SPY call contract (at the money, nearest expiry at least 2 days away, never over $150).
//   B. SCALPER: $100 of a stock (the 10 weekday stocks) or coin (the 4 weekend coins), small quick targets.
//
// The 30-minute law: every trade closes within 30 minutes. Exit checks run every 1 minute (a pg_cron job every
// minute), and the hard timer sells at the last 1-minute check before 30 minutes (29 minutes or more held), so the
// next check, which would be past 30 minutes, never comes.
//
// PAPER ONLY. Like the main agent there is no order code here at all: only GET requests to Alpaca's paper endpoint
// and data feed, through the main agent's read-only helpers. Pretend money, written to the fast-systems tables.

// deno-lint-ignore-file no-explicit-any

import {
  activeMarkets,
  addDays,
  aGet,
  bigTrend,
  crossAt,
  crossover,
  etParts,
  heldMark,
  loadState,
  type MarketDef,
  type OptionInfo,
  optionSellPrice,
  PA_MARKETS,
  PAPER_BASE,
  pickOption,
  readAccount,
  readConfig,
  readMarkets,
  readOptionQuote,
  round2,
  type Series,
  type Shadow,
} from "./alpaca_agent.ts";

export const FS_ACTIONS = new Set(["fsTick", "fsStatus", "fsSet", "fsLog"]);
export type SystemId = "options" | "scalper";
export const FS_SYSTEMS: SystemId[] = ["options", "scalper"];

export const FS_RULES = {
  maxHoldMin: 30, // the 30-minute law
  exitCheckEveryMin: 1, // exit checks every 1 minute while a trade is open
  hardCloseAtMin: 29, // the last 1-minute check before 30 minutes closes the trade
  strengthPct: 0.3, // the price must already be up at least 0.3% ...
  strengthLookbackMin: 15, // ... over the last 15 minutes
  noEntryFirstMin: 15, // no entries 9:30 to 9:45 AM ET
  options: {
    name: "Options", tradeUsd: 100, maxPremiumUsd: 150, minDays: 2, takeProfitUsd: 50, stopLossUsd: 50,
    maxTrades: 4, dailyStopUsd: 50, totalBrakeUsd: 100,
  },
  scalper: {
    name: "Scalper", tradeUsd: 100, takeProfitPct: 2, stopLossPct: 1, takeProfitUsd: 2, stopLossUsd: 1,
    maxTrades: 6, dailyStopUsd: 10, totalBrakeUsd: 25,
  },
};

export const FS_RULE_LINES: Record<SystemId, string[]> = {
  options: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Weekdays, stock market hours only. Watches SPY.",
    "Entry, ALL of these: the fast average (9 candles) crosses above the slow average (21 candles) on 5-minute candles, the slow average is higher than 1 hour ago, the price is above the slow average, AND SPY is already up at least 0.3% in the last 15 minutes.",
    "No entries from 9:30 to 9:45 AM ET (too many fake moves right after the open).",
    "It buys ONE SPY call contract: the strike closest to the SPY price (at the money), the nearest expiry at least 2 days away, and only if it costs $150 or less. Calls only: no puts, no selling options, no spreads. If it costs more, no trade, and the log says why.",
    "Exits, checked every 1 minute: +$50 profit, -$50 loss, the trend turns down, 30 minutes reached (hard close), and always out by 3:55 PM ET. Never overnight.",
    "One position at a time, up to 4 trades a day. Daily stop -$50, total brake -$100 (this system's own).",
  ],
  scalper: [
    "Paper only: pretend money, no order is ever sent to Alpaca.",
    "Weekdays: the 10 stocks (SPY, QQQ, AAPL, MSFT, NVDA, AMZN, GOOGL, META, TSLA, AMD) while the stock market is open. Weekends: the 4 coins (BTC, ETH, SOL, DOGE). All checked at once every minute.",
    "Entry, ALL of these: the fast average crosses above the slow average on 5-minute candles, the slow average is higher than 1 hour ago, the price is above the slow average, AND the price is already up at least 0.3% in the last 15 minutes.",
    "No stock entries from 9:30 to 9:45 AM ET.",
    "$100 a trade, one position at a time, up to 6 trades a day.",
    "Exits, checked every 1 minute: +2% (+$2 on $100), -1% (-$1), the trend turns down, or 30 minutes reached (hard close). Stock positions always close by 3:55 PM ET.",
    "Daily stop -$10, total brake -$25 (this system's own).",
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

export type EntryCheck = { ok: boolean; why: string; strength: number | null };

/** The picky entry: trend filter (cross up, slow average rising, price above it) plus the strength check,
 *  and no stock or option entry in the first 15 minutes after the open. */
export function entryCheck(closes: number[], price: number, et: { weekend: boolean; hour: number; minute: number }, stock: boolean): EntryCheck {
  const x = crossover(closes);
  const s = strengthPct(closes, price);
  if (stock && openingWindow(et)) return { ok: false, why: "first 15 minutes after the open, no entries", strength: s };
  if (x.signal !== "buy") return { ok: false, why: "no fresh cross up", strength: s };
  const big = bigTrend(closes, price);
  if (!big.ok) return { ok: false, why: `crossed up, but ${big.why}`, strength: s };
  if (s == null || s < FS_RULES.strengthPct) {
    return { ok: false, why: `crossed up with the big trend rising, but only ${s == null ? "?" : `${s >= 0 ? "+" : ""}${s.toFixed(2)}%`} in the last 15 minutes (needs +${FS_RULES.strengthPct}%)`, strength: s };
  }
  return { ok: true, why: `crossed up, big trend rising, +${s.toFixed(2)}% in the last 15 minutes`, strength: s };
}

export type ExitInput = {
  system: SystemId;
  shadow: NonNullable<Shadow>;
  price: number; // what is held is worth now, per unit (for an option: its premium per share)
  now: Date;
  trendDown: boolean; // the fast average crossed below the slow
  closeOut: boolean; // weekday stock or option: 3:55 PM ET
};

/** The exit rules for both systems, in order: take profit, stop loss, the 30-minute hard close, the 3:55 PM
 *  close, the trend turning down. Otherwise hold. */
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
  if (x.trendDown) return { sell: true, reason: `trend turned down (${money})`, pnl };
  return { sell: false, reason: `holding (${money}), ${Math.max(0, FS_RULES.maxHoldMin - Math.floor(mins))} min left at most`, pnl };
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
  let q = db.from("ngmy_fast_log").select("details").eq("decision", "would sell").order("id", { ascending: false }).limit(1000);
  if (id) q = q.eq("system", id);
  const { data } = await q;
  const pnls: number[] = (data ?? []).map((r: any) => Number(r?.details?.pnl ?? 0));
  const wins = pnls.filter((p) => p > 0).length;
  return {
    trades: pnls.length, wins, losses: pnls.length - wins,
    winRatePct: pnls.length ? Math.round(wins / pnls.length * 100) : null,
    pnlSum: round2(pnls.reduce((s, p) => s + p, 0)),
  };
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

/** The SPY call to pretend-buy: at the money, nearest expiry at least 2 days away, its price (the ask), and whether
 *  it fits the $150 limit. Read-only GETs. */
async function chooseCall(k: any, spot: number, todayKey: string): Promise<{ ok: boolean; why: string; option?: OptionInfo }> {
  const r = FS_RULES.options;
  const from = addDays(todayKey, r.minDays);
  const to = addDays(todayKey, r.minDays + 21);
  let list: any[] = [];
  try {
    const j = await aGet(PAPER_BASE, `/v2/options/contracts?underlying_symbols=SPY&type=call&status=active&expiration_date_gte=${from}` +
      `&expiration_date_lte=${to}&strike_price_gte=${Math.floor(spot * 0.97)}&strike_price_lte=${Math.ceil(spot * 1.03)}&limit=1000`, k);
    list = Array.isArray(j?.option_contracts) ? j.option_contracts : [];
  } catch (e) {
    return { ok: false, why: `could not read the SPY option list (${String((e as Error).message)})` };
  }
  const pick = pickOption(list.map((c) => ({ symbol: String(c.symbol), strike: Number(c.strike_price), expiry: String(c.expiration_date) })), spot, todayKey, r.minDays);
  if (!pick) return { ok: false, why: "no SPY call found with an expiry at least 2 days away" };
  let q: { bid: number; ask: number; last: number };
  try { q = await readOptionQuote(k, pick.symbol); } catch (e) {
    return { ok: false, why: `could not read the price of the SPY $${pick.strike} call (${String((e as Error).message)})` };
  }
  const premium = q.ask > 0 ? q.ask : q.last;
  const cost = round2(premium * 100);
  const option: OptionInfo = { contract: pick.symbol, strike: pick.strike, expiry: pick.expiry, premium, cost };
  if (!premium) return { ok: false, why: `no price for the SPY $${pick.strike} call expiring ${pick.expiry}`, option };
  if (cost > r.maxPremiumUsd) {
    return { ok: false, option, why: `the at-the-money SPY $${pick.strike} call expiring ${pick.expiry} costs $${cost.toFixed(2)}, over the $${r.maxPremiumUsd} limit, so no trade` };
  }
  return { ok: true, why: "fits", option };
}

let previewCache: { at: number; data: any } | null = null;
let optionsLevelCache: { at: number; level: number } | null = null;

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
      const trendDown = crossover(s?.closes ?? []).signal === "sell";
      const isStock = !sh.symbol.includes("/");
      const ex = fastExit({ system: id, shadow: sh, price, now, trendDown, closeOut: isStock && closeOut });
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

    // ── nothing held: look for one picky entry
    const note = async (t: string) => { await saveFs(db, id, { last_note: t, last_note_at: now.toISOString() }); out[id] = t; };
    if (st.brake_paused) { await note(`paused by the $${r.totalBrakeUsd} brake`); continue; }
    if (Number(st.total_pnl ?? 0) <= -r.totalBrakeUsd) { await note(`paused by the $${r.totalBrakeUsd} brake`); continue; }
    if (Number(day.day_pnl ?? 0) <= -r.dailyStopUsd) { await note(`daily stop reached ($${r.dailyStopUsd} lost today)`); continue; }
    if (Number(day.trades ?? 0) >= r.maxTrades) { await note(`daily trade limit reached (${r.maxTrades})`); continue; }

    if (id === "options") {
      if (et.weekend || !stockOpen) { await note("stock market closed: options trade on weekdays 9:30 AM to 4:00 PM ET"); continue; }
      if (lateForBuys) { await note("last 10 minutes before the close, no new trades"); continue; }
      const s = series["SPY"];
      const e = entryCheck(s?.closes ?? [], s?.price ?? 0, et, true);
      const key = `SPY|${crossAt(s?.closes ?? [], s?.times ?? [])}`;
      if (!e.ok) { await note(`SPY: ${e.why}`); continue; }
      if (key === st.last_signal_key) { await note("SPY: this cross was already used"); continue; }
      if ((acct.optionsLevel ?? 0) < 2) {
        await note("Options are not enabled on the paper account yet");
        await saveFs(db, id, { last_signal_key: key });
        await logFs(db, id, { kind: "check", asset: "SPY", price: s.price, decision: "no action", reason: `setup passed (${e.why}), but options are not enabled on the paper account yet` });
        continue;
      }
      const c = await chooseCall(k, s.price, et.dayKey);
      await saveFs(db, id, { last_signal_key: key });
      if (!c.ok || !c.option) {
        await note(`SPY setup passed, but ${c.why}`);
        await logFs(db, id, { kind: "check", asset: "SPY", price: s.price, decision: "no action", reason: `setup passed (${e.why}), but ${c.why}`, details: { option: c.option ?? null } });
        continue;
      }
      const o = c.option;
      const newSh = { symbol: "SPY", qty: 1, mult: 100, entryPrice: o.premium, entryAt: now.toISOString(), option: o };
      await saveFs(db, id, { shadow: newSh, last_mark: heldMark(newSh, o.premium), last_note: `Bought 1 SPY $${o.strike} call (${o.expiry}) for $${o.cost.toFixed(2)}`, last_note_at: now.toISOString() });
      await db.from("ngmy_fast_days").update({ trades: Number(day.trades ?? 0) + 1 }).eq("system", id).eq("et_day", et.dayKey);
      await logFs(db, id, {
        kind: "trade", asset: "SPY", price: s.price, decision: "would buy",
        reason: `${e.why}: would buy 1 SPY $${o.strike} call expiring ${o.expiry} for $${o.cost.toFixed(2)} ($${o.premium.toFixed(2)} x 100)`,
        details: { amount: o.cost, qty: 1, mult: 100, entryPrice: o.premium, option: o, strength: e.strength, by: "cron" },
      });
      out[id] = { bought: o.contract };
      continue;
    }

    // Scalper: every market on the day's list, all at once.
    const active = activeMarkets(et.weekend, stockOpen);
    if (!active.length) { await note("no market open right now: stocks on weekdays 9:30 AM to 4:00 PM ET, coins on weekends"); continue; }
    const passed: { sym: string; e: EntryCheck; key: string; price: number }[] = [];
    let closest = "";
    for (const sym of active) {
      const stock = !sym.includes("/");
      if (stock && lateForBuys) continue;
      const s = series[sym];
      if (!s || !s.price) continue;
      const e = entryCheck(s.closes, s.price, et, stock);
      const key = `${sym}|${crossAt(s.closes, s.times)}`;
      if (e.ok && key !== st.last_signal_key) passed.push({ sym, e, key, price: s.price });
      else if (!closest && e.why.startsWith("crossed up")) closest = `${sym}: ${e.why}`;
    }
    if (!passed.length) { await note(`checked ${active.length} markets: no picky entry${closest ? ` (${closest})` : ""}`); continue; }
    passed.sort((a, b) => (b.e.strength ?? 0) - (a.e.strength ?? 0));
    const p = passed[0];
    const newSh = { symbol: p.sym, qty: FS_RULES.scalper.tradeUsd / p.price, mult: 1, entryPrice: p.price, entryAt: now.toISOString() };
    await saveFs(db, id, { shadow: newSh, last_signal_key: p.key, last_mark: heldMark(newSh, p.price), last_note: `Bought $100 of ${p.sym}`, last_note_at: now.toISOString() });
    await db.from("ngmy_fast_days").update({ trades: Number(day.trades ?? 0) + 1 }).eq("system", id).eq("et_day", et.dayKey);
    await logFs(db, id, {
      kind: "trade", asset: p.sym, price: p.price, decision: "would buy",
      reason: `${p.e.why}: would buy $100 of ${p.sym} (the strongest of ${passed.length} passing)`,
      details: { amount: FS_RULES.scalper.tradeUsd, qty: newSh.qty, mult: 1, entryPrice: p.price, strength: p.e.strength, by: "cron" },
    });
    out[id] = { bought: p.sym };
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
  const { data: today } = await db.from("ngmy_fast_days").select("*").eq("system", id).eq("et_day", et.dayKey).maybeSingle();
  const { data: trades } = await db.from("ngmy_fast_log").select("id,created_at,et_time,asset,price,decision,reason,details")
    .eq("system", id).in("decision", ["would buy", "would sell"]).order("id", { ascending: false }).limit(40);
  const record = await recordFs(db, id);
  const allFast = await recordFs(db);
  const fastOpen = FS_SYSTEMS.reduce((s, x) => s + (states[x].shadow ? Number(states[x].last_mark?.pnl ?? 0) : 0), 0);

  // The shared paper balance: the Alpaca paper account plus every closed and open pretend trade of every system.
  let equity: number | null = null;
  let options: Record<string, unknown> | null = null;
  try {
    const main = await loadState(db);
    equity = Number(main.snapshot?.equity ?? 0) || null;
    const landingClosed = ctx.landingClosed ? await ctx.landingClosed() : 0;
    const landingOpen = main.shadow ? Number(main.snapshot?.held?.pnl ?? 0) : 0;
    const closed = round2(landingClosed + allFast.pnlSum);
    const open = round2(landingOpen + fastOpen);
    (st as any)._shared = { equity, closed, open, balance: equity == null ? null : round2(equity + closed + open) };
  } catch { /* shown without the balance */ }

  if (id === "options" && cfg.keys) {
    // The Options screen shows the contract it would choose right now, or a clear "not enabled" message.
    try {
      if (!optionsLevelCache || Date.now() - optionsLevelCache.at > 10 * 60 * 1000) {
        const a = await readAccount(cfg.keys);
        optionsLevelCache = { at: Date.now(), level: a.optionsLevel };
      }
      if (optionsLevelCache.level < 2) {
        options = { enabled: false, message: "Options are not enabled on the paper account yet" };
      } else if (previewCache && Date.now() - previewCache.at < 60 * 1000) {
        options = previewCache.data;
      } else {
        const series = await readMarkets(cfg.keys);
        const spot = series["SPY"]?.price ?? 0;
        const c = spot ? await chooseCall(cfg.keys, spot, et.dayKey) : { ok: false, why: "no SPY price yet" };
        options = { enabled: true, spot, preview: (c as any).option ?? null, fits: c.ok, why: c.ok ? `fits the $${FS_RULES.options.maxPremiumUsd} limit` : c.why };
        previewCache = { at: Date.now(), data: options };
      }
    } catch (e) {
      options = { enabled: null, message: `Could not check options right now (${String((e as Error).message)})` };
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
      shared: (st as any)._shared ?? null,
      today: today ?? null,
      record,
      trades: trades ?? [],
      options,
      rules: FS_RULE_LINES[id],
      settings: {
        ...FS_RULES[id], maxHoldMin: FS_RULES.maxHoldMin, hardCloseAtMin: FS_RULES.hardCloseAtMin,
        exitCheckEveryMin: FS_RULES.exitCheckEveryMin, strengthPct: FS_RULES.strengthPct, noEntryFirstMin: FS_RULES.noEntryFirstMin,
      },
      paperOnly: true,
      nowEt: et.label,
    },
  };
}
