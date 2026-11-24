// deno test --allow-read supabase/functions/ngmy-ai-chat/fast_systems_test.ts
import { assert, assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { PA_MARKETS } from "./alpaca_agent.ts";
import {
  activeRules, analyzeMarket, blockReason, bucketOf, contractLadder, DEFAULT_ENTRY, entryCheck, evaluateLessons, expectedBy, exitLevels,
  fastExit, fridayOf, FS_LISTS, FS_RULES, gradeLoss, learnStart, lossStreak, marketRecord, morningReview, mustHardClose, openingWindow,
  paceImpossible, paceLadder, passes, pickRanked, rankScore, recovered, spreadPct, strengthPct, tradingWindow, type TradeRow,
} from "./fast_systems.ts";

const at = (min: number) => new Date(Date.parse("2026-11-24T15:00:00Z") + min * 60000);
const spot = { symbol: "PLTR", qty: 100 / 200, mult: 1, entryPrice: 200, entryAt: at(0).toISOString() };
const call = { symbol: "IWM", qty: 1, mult: 100, entryPrice: 1, entryAt: at(0).toISOString(), option: { contract: "X", strike: 250, expiry: "2026-11-28", premium: 1, cost: 100 } };
const ex = (o: Partial<Parameters<typeof fastExit>[0]>) =>
  fastExit({ system: "scalper", shadow: spot, price: 200, now: at(5), trendAgainst: false, closeOut: false, ...o });

// A steady rise, a dip, then a strong turn back up: trends up, slow rising, price above, strong 15 minutes.
function strongRise(): { closes: number[]; price: number } {
  const c: number[] = [];
  let p = 100;
  for (let i = 0; i < 60; i++) c.push((p += 0.15));
  for (let i = 0; i < 6; i++) c.push((p -= 0.3));
  for (let i = 0; i < 6; i++) c.push((p += 0.5));
  return { closes: c, price: p };
}
// A gentle steady rise: about +0.3% in 15 minutes, no chop.
function steadyRise(stepPct = 0.1): { closes: number[]; price: number } {
  const c: number[] = [];
  let p = 100;
  for (let i = 0; i < 80; i++) c.push((p *= 1 + stepPct / 100));
  return { closes: c, price: p * (1 + stepPct / 100) };
}

Deno.test("own markets: no ticker from the main agent's lists, and the new counts", () => {
  const main = new Set(PA_MARKETS.map((m) => m.symbol));
  for (const sys of Object.values(FS_LISTS)) {
    for (const m of [...sys.weekday, ...sys.weekend]) assert(!main.has(m.symbol), `${m.symbol} is on the main agent's list`);
  }
  for (const banned of ["SPY", "QQQ", "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA", "AMD", "BTC/USD", "ETH/USD", "SOL/USD", "DOGE/USD"]) {
    for (const sys of Object.values(FS_LISTS)) assert(![...sys.weekday, ...sys.weekend].some((m) => m.symbol === banned), banned);
  }
  assertEquals(FS_LISTS.scalper.weekday.length, 30);
  assertEquals(FS_LISTS.options.weekday.length, 21);
  // Nov 24: Signal Grid carries ALL crypto, so the fast systems' weekend coins are retired: no coin at all.
  assertEquals(FS_LISTS.scalper.weekend.length, 0);
  assertEquals(FS_LISTS.options.weekend.length, 0);
  for (const sys of Object.values(FS_LISTS)) assert(![...sys.weekday, ...sys.weekend].some((m) => m.symbol.includes("/")));
});

Deno.test("brakes for 40 trades", () => {
  assertEquals([FS_RULES.scalper.dailyStopUsd, FS_RULES.scalper.totalBrakeUsd], [50, 100]);
  assertEquals([FS_RULES.options.dailyStopUsd, FS_RULES.options.totalBrakeUsd], [500, 1000]);
  assertEquals(FS_RULES.options.weekendDailyStopUsd, 50);
  // Worst normal Scalper day at -1% on $100: 40 x -$1 = -$40, above the -$50 daily stop.
  assert(40 * FS_RULES.spot.stopLossUsd < FS_RULES.scalper.dailyStopUsd);
});

Deno.test("the max-hold law: 30, 20 or 12 minutes, closed at the last 1-minute check before", () => {
  assertEquals(FS_RULES.maxHoldMin, 30);
  assertEquals(FS_RULES.exitCheckEveryMin, 1);
  assertEquals(mustHardClose(spot.entryAt, at(28.9)), false);
  assertEquals(mustHardClose(spot.entryAt, at(29)), true);
  assertEquals(mustHardClose(spot.entryAt, at(11), 12), true);
  const flat = ex({ now: at(29.2) });
  assert(flat.sell && flat.kind === "max hold");
  assert(ex({ shadow: { ...spot, maxHold: 20 }, now: at(19.5) }).sell);
  assertEquals(ex({ now: at(10) }).sell, false);
});

Deno.test("exits: stocks and coins +2% / -1%, options +$50 / -$50, noisy markets 25% wider", () => {
  assertEquals(ex({ price: 204 }).reason, "take profit hit (+$2.00)");
  assertEquals(ex({ price: 198 }).reason, "stop loss hit (-$1.00)");
  assertEquals(ex({ price: 198 }).kind, "stop loss");
  assertEquals(ex({ price: 198.2 }).sell, false);
  assert(ex({ trendAgainst: true }).reason.startsWith("trend turned down"));
  assert(ex({ closeOut: true }).reason.startsWith("3:55 PM ET close"));
  const o = (price: number) => fastExit({ system: "options", shadow: call, price, now: at(5), trendAgainst: false, closeOut: false });
  assertEquals(o(1.5).reason, "take profit hit (+$50.00)");
  assertEquals(o(0.5).reason, "stop loss hit (-$50.00)");
  assertEquals(o(1.2).sell, false);
  assertEquals(exitLevels(false, true), { tpUsd: 1.5, slUsd: 1.25 });
  assertEquals(exitLevels(true, true), { tpUsd: 37.5, slUsd: 62.5 });
  // With the noise lesson, -1% is no longer a stop; -1.25% is.
  const noisy = { ...spot, ...exitLevels(false, true) };
  assertEquals(ex({ shadow: noisy, price: 198 }).sell, false);
  assertEquals(ex({ shadow: noisy, price: 197.5 }).kind, "stop loss");
  assertEquals(ex({ shadow: noisy, price: 203 }).kind, "take profit");
});

Deno.test("40 a day: checkpoints, then shorter holds, then lower strength, then top 5", () => {
  assertEquals(FS_RULES.dailyTarget, 40);
  const wk = (h: number, m: number) => ({ weekend: false, hour: h, minute: m });
  assertEquals(expectedBy(wk(9, 45)), 0);
  assertEquals(expectedBy(wk(10, 30)), 7);
  assertEquals(expectedBy(wk(12, 0)), 15);
  assertEquals(expectedBy(wk(13, 30)), 23);
  assertEquals(expectedBy(wk(15, 0)), 32);
  assertEquals(expectedBy(wk(15, 45)), 38);
  assertEquals(expectedBy(wk(15, 55)), 40);
  // On pace: the day's start, 30 minutes, top 3.
  const on = paceLadder(wk(12, 0), 15);
  assertEquals([on.thresholdPct, on.maxHold, on.topN, on.level], [0.3, 30, 3, 0]);
  // 1 behind: hold 20 first.
  assertEquals(paceLadder(wk(12, 0), 14).maxHold, 20);
  // 3 behind: hold 12, strength unchanged.
  const l2 = paceLadder(wk(12, 0), 12);
  assertEquals([l2.maxHold, l2.thresholdPct], [12, 0.3]);
  // 5 behind: one step down.
  assertEquals(paceLadder(wk(12, 0), 10).thresholdPct, 0.25);
  // 8 behind: top 5.
  assertEquals(paceLadder(wk(12, 0), 7).topN, 5);
  // Far behind: never below the floor.
  assertEquals(paceLadder(wk(15, 0), 0).thresholdPct, FS_RULES.floorPct);
  assertEquals(FS_RULES.floorPct, 0.12);
  // 40 reached: back to the day's start.
  assertEquals(paceLadder(wk(15, 10), 40).thresholdPct, 0.3);
  assertEquals(paceLadder(wk(10, 0), 1, 0.35).thresholdPct, 0.35);
  assert(paceLadder(wk(12, 0), 7).lines.length === 3);
  // Weekends: no trading window (weekend crypto moved to Signal Grid).
  assertEquals(tradingWindow({ weekend: true, hour: 12, minute: 0 }).inWindow, false);
  assertEquals(expectedBy({ weekend: true, hour: 12, minute: 0 }), 0);
  // Honest: 40 can no longer be reached.
  assertEquals(paceImpossible(wk(15, 30), 10), true);
  assertEquals(paceImpossible(wk(10, 0), 3), false);
});

Deno.test("never buy a falling market, at any strength", () => {
  const { closes, price } = strongRise();
  const up = analyzeMarket(closes, price);
  assert(passes(up, 0.3));
  assertEquals(up.falling, false);
  assertEquals(up.dir, "up");
  const fall = closes.map((c) => 300 - c);
  const down = analyzeMarket(fall, 300 - price);
  assert(down.falling);
  assertEquals(down.dir, "down");
  assertEquals(passes(down, FS_RULES.floorPct), false);
  assertEquals(passes(down, -10), false); // even a silly threshold never lets a falling market through
  // A falling market is never a buy; on options weekdays it may be a PUT (the mirror rule).
  assertEquals(entryCheck(down, { ...DEFAULT_ENTRY, thresholdPct: 0.12, chaseCapPct: 99, chopSkipAt: 99 }).fail, "falling");
  assert(entryCheck(down, { ...DEFAULT_ENTRY, thresholdPct: 0.12, chaseCapPct: 99, chopSkipAt: 99, allowDown: true }).ok);
});

Deno.test("entry rules: no-chase cap, chop filter, strength, 1-hour trend lesson", () => {
  const { closes, price } = steadyRise(0.1);
  const a = analyzeMarket(closes, price);
  assertEquals(a.dir, "up");
  assertEquals(a.chop, 0);
  assert(entryCheck(a, { ...DEFAULT_ENTRY, thresholdPct: 0.2 }).ok);
  assertEquals(entryCheck(a, { ...DEFAULT_ENTRY, thresholdPct: 0.5 }).fail, "weak");
  assertEquals(entryCheck({ ...a, dirStrength: 0.9 }, DEFAULT_ENTRY).fail, "chased");
  assertEquals(entryCheck({ ...a, dirStrength: 0.6 }, { ...DEFAULT_ENTRY, chaseCapPct: 0.5 }).fail, "chased");
  assertEquals(entryCheck({ ...a, chop: 4 }, DEFAULT_ENTRY).fail, "chop");
  assert(entryCheck({ ...a, chop: 3 }, { ...DEFAULT_ENTRY, thresholdPct: 0.2 }).ok);
  assertEquals(entryCheck({ ...a, chop: 3 }, { ...DEFAULT_ENTRY, chopSkipAt: 3 }).fail, "chop");
  assertEquals(entryCheck({ ...a, trend60: "down" }, { ...DEFAULT_ENTRY, thresholdPct: 0.2, need60: true }).fail, "against60");
});

Deno.test("ranking: all markets scored, the top-ranked passing one is taken", () => {
  const { closes, price } = strongRise();
  const strong = analyzeMarket(closes, price);
  const weaker = { ...strong, strength: 0.1, dirStrength: 0.1, score: strong.score - 1 };
  const fall = analyzeMarket(closes.map((c) => 300 - c), 300 - price);
  const items = [{ sym: "A", a: fall }, { sym: "B", a: weaker }, { sym: "C", a: strong }];
  const r = pickRanked(items, 0.3);
  assertEquals(r.ranked[0].sym, "C");
  assertEquals(r.pick?.sym, "C");
  assertEquals(pickRanked([{ sym: "B", a: weaker }], 0.3).pick, null); // not strong enough yet
  assertEquals(pickRanked([{ sym: "B", a: weaker }], 0.05).pick?.sym, "B");
  // The market's own record and the preferred setup size move the score.
  const good = rankScore(strong, { n: 10, wins: 8, losses: 2, pnl: 5 }, null, null);
  const bad = rankScore(strong, { n: 10, wins: 2, losses: 8, pnl: -5 }, null, null);
  assert(good.total > bad.total);
  assertEquals(rankScore(strong, undefined, bucketOf(strong.dirStrength), null).bucket, 0.5);
});

Deno.test("learning each morning from its own last 20 trades", () => {
  assertEquals(learnStart(0.3, [1, -1, -1, -1, -1, 1]).startPct, 0.35);
  assertEquals(learnStart(0.3, [1, 1, 1, -1, 1]).startPct, 0.25);
  assertEquals(learnStart(0.3, [1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1]).startPct, 0.3);
  assertEquals(learnStart(0.5, Array(10).fill(-1)).startPct, 0.5);
  assertEquals(learnStart(0.2, Array(10).fill(1)).startPct, 0.2);
  assertEquals(learnStart(0.3, [1, 1]).startPct, 0.3);
  assertEquals(marketRecord(Array(25).fill(1)).n, 20);
  assertEquals(marketRecord([-1, -1, 1], ["CHASED", "CHASED", null]).topLoss, "CHASED");
});

const cond = (o: Record<string, unknown> = {}) => ({
  dir: "up" as const, trend5: "up" as const, trend15: "up" as const, trend60: "up" as const, fast: 1, slow: 1, priceVsSlow: "above" as const,
  slowRising: true, strength: 0.3, dirStrength: 0.3, ranOver08: false, chop: 0, bucket: "medium" as const, spot: 100, ...o,
});

Deno.test("every loss gets exactly one plain reason", () => {
  assertEquals(gradeLoss(cond({ trend60: "down" }), "stop loss", false, null).reason, "AGAINST_TREND");
  assertEquals(gradeLoss(cond({ dirStrength: 0.7 }), "stop loss", false, null).reason, "CHASED");
  assertEquals(gradeLoss(cond({ chop: 3 }), "stop loss", false, null).reason, "CHOP");
  assertEquals(gradeLoss(cond({ spreadPct: 9 }), "stop loss", true, null).reason, "WIDE_SPREAD");
  const nft = gradeLoss(cond(), "stop loss", false, null);
  assertEquals(nft.reason, "NO_FOLLOW_THROUGH");
  assert(nft.watch); // watched 10 minutes for a noise stop
  assertEquals(gradeLoss(cond(), "max hold", false, null).watch, false);
  assert(gradeLoss(cond(), "max hold", true, 0.1).text.includes("time decay"));
  assert(gradeLoss(cond({ dirStrength: 0.7 }), "stop loss", false, null).text.includes("chased"));
  assertEquals(recovered("up", 100, 100.01), true);
  assertEquals(recovered("up", 100, 99.9), false);
  assertEquals(recovered("down", 100, 99.9), true);
  assertEquals(spreadPct(0.9, 1), 10);
  assertEquals(spreadPct(0, 1), 100);
});

const tr = (market: string, pnl: number, loss: string | null = null, day = "2026-11-24", bucket = "medium"): TradeRow =>
  ({ market, pnl, loss_reason: loss, et_day: day, conditions: { bucket: bucket as any } });

Deno.test("lessons that change behavior", () => {
  const today = "2026-11-24";
  // A market under 40% wins over its last 10+ trades is benched.
  const pltr = [...Array(7).fill(0).map(() => tr("PLTR", -1, "NO_FOLLOW_THROUGH")), ...Array(3).fill(0).map(() => tr("PLTR", 2))];
  const l1 = evaluateLessons("scalper", pltr, today, new Set());
  assert(l1.some((l) => l.key === "bench:PLTR" && l.text.includes("lost 7 of its last 10")));
  // ... but not in the morning (benches reset each morning).
  assert(!evaluateLessons("scalper", pltr, today, new Set(), true).some((l) => l.key.startsWith("bench:")));
  // 3 of the last 10 losses with the same reason apply its fix.
  const mix = [tr("A", -1, "CHASED"), tr("B", -1, "CHASED"), tr("C", 1), tr("D", -1, "CHASED"), tr("E", -1, "CHOP")];
  assert(evaluateLessons("scalper", mix, today, new Set()).some((l) => l.key === "chase"));
  assert(!evaluateLessons("scalper", mix, today, new Set(["chase"])).some((l) => l.key === "chase")); // already active
  const noise = [tr("COIN", -1, "NOISE_STOP"), tr("COIN", -1, "NOISE_STOP"), tr("MU", -1, "NOISE_STOP")];
  const nl = evaluateLessons("scalper", noise, today, new Set()).map((l) => l.key);
  assert(nl.includes("noise:COIN") && nl.includes("noise:MU"));
  const opt = [tr("F", -50, "NO_FOLLOW_THROUGH"), tr("F", -50, "NO_FOLLOW_THROUGH"), tr("T", -50, "NO_FOLLOW_THROUGH")];
  assert(evaluateLessons("options", opt, today, new Set()).some((l) => l.key === "nft"));
  assert(!evaluateLessons("scalper", opt, today, new Set()).some((l) => l.key === "nft")); // options only
  // Setup sizes: weak setups losing raise the minimum; a winning size becomes preferred.
  const weak = Array(10).fill(0).map((_, i) => tr(`W${i}`, i < 3 ? 1 : -1, "NO_FOLLOW_THROUGH", "2026-11-20", "weak"));
  const strong = Array(10).fill(0).map((_, i) => tr(`S${i}`, i < 7 ? 1 : -1, null, "2026-11-20", "strong"));
  const bl = evaluateLessons("scalper", [...weak, ...strong], today, new Set(), true).map((l) => l.key);
  assert(bl.includes("bucket:weak"));
  assert(bl.includes("pref:strong"));
  // What the lessons do to the next entry.
  const r = activeRules("scalper", false, [{ key: "chase", text: "" }, { key: "chop", text: "" }, { key: "bucket:weak", text: "" }, { key: "bench:PLTR", text: "x" }], { thresholdPct: 0.15, maxHold: 30 }, false);
  assertEquals([r.chaseCapPct, r.chopSkipAt, r.thresholdPct, r.benched.PLTR], [0.5, 3, 0.3, "x"]);
  const o = activeRules("options", false, [{ key: "nft", text: "" }, { key: "spread", text: "" }, { key: "streak3", text: "" }], { thresholdPct: 0.3, maxHold: 30 }, true);
  assertEquals([o.maxHold, o.optMinDays, o.spreadMaxPct, o.thresholdPct, o.allowDown], [20, 7, 7, 0.4, true]);
  assertEquals(activeRules("options", true, [], { thresholdPct: 0.12, maxHold: 12 }, false).allowDown, false); // weekend coins: buys only
  assertEquals(activeRules("scalper", false, [], { thresholdPct: 0.01, maxHold: 30 }, false).thresholdPct, 0.12); // never below the floor
});

Deno.test("loss streak and the morning review", () => {
  const today = "2026-11-24";
  assertEquals(lossStreak([tr("A", -1), tr("B", -1), tr("C", 1)], today), 2);
  assertEquals(lossStreak([tr("A", 1), tr("B", -1)], today), 0);
  assertEquals(lossStreak([tr("A", -1, null, "2026-11-23")], today), 0); // yesterday does not count
  const y = [tr("PLTR", 2, null, "2026-11-23"), tr("MU", -1, "CHASED", "2026-11-23"), tr("MU", -1, "CHASED", "2026-11-23")];
  const lines = morningReview(y, today, "start line", []);
  assert(lines[0].startsWith("2026-11-23: 3 trades, 1 wins, 2 losses"));
  assert(lines.some((l) => l.includes("chased")));
  assert(lines.length >= 3 && lines.length <= 5);
  assert(morningReview([], today, "start", [])[0].startsWith("No trades"));
});

Deno.test("options: calls above the price, puts below, at least 3 days out", () => {
  assertEquals(fridayOf("2026-11-24", "Tue"), "2026-11-27");
  assertEquals(fridayOf("2026-11-28", "Sat"), "2026-12-04");
  const c: { symbol: string; strike: number; expiry: string }[] = [];
  for (const e of ["2026-11-24", "2026-11-27", "2026-12-04", "2026-12-11", "2026-12-18"]) {
    for (let k = 230; k <= 250; k++) c.push({ symbol: `${e}-${k}`, strike: k, expiry: e });
  }
  const calls = contractLadder(c, 240.4, "call", "2026-11-27");
  assertEquals(calls[0].expiry, "2026-11-27");
  assertEquals(calls.slice(0, 6).map((x) => x.strike), [241, 242, 243, 244, 245, 246]);
  const puts = contractLadder(c, 240.4, "put", "2026-11-27");
  assertEquals(puts.slice(0, 3).map((x) => x.strike), [240, 239, 238]);
  assertEquals(contractLadder(c, 240.4, "call", "2026-12-01")[0].expiry, "2026-12-04"); // the 7-day lesson
  assertEquals(new Set(calls.map((x) => x.expiry)).size, 3);
});

Deno.test("why the day ended below 40, in plain words", () => {
  assert(blockReason({ falling: 120, weak: 30 }).startsWith("markets were falling"));
  assert(blockReason({ noContract: 50, weak: 3 }).includes("under $150"));
  assert(blockReason({ chased: 9, weak: 3 }).includes("no-chase"));
  assert(blockReason({}).length > 10);
});

Deno.test("strength check and the opening window", () => {
  assertEquals(strengthPct([100, 100, 100, 100, 100], 100.3)?.toFixed(2), "0.30");
  assertEquals(strengthPct([100, 100], 101), null);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 35 }), true);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 45 }), false);
});

Deno.test("no order code in the fast systems (paper only)", async () => {
  const src = await Deno.readTextFile(new URL("./fast_systems.ts", import.meta.url));
  assert(!src.includes("/v2/orders"), "no orders call");
  assert(!/method:\s*"(POST|PATCH|DELETE)"/.test(src), "only GET to Alpaca");
  assert(!src.includes("//api.alpaca.markets"), "no live endpoint");
  assert(!src.includes("fetch("), "all Alpaca reads go through the main agent's read-only GET helper");
});
