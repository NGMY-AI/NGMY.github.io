// deno test --allow-read supabase/functions/ngmy-ai-chat/fast_systems_test.ts
import { assert, assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { PA_MARKETS } from "./alpaca_agent.ts";
import {
  analyzeMarket, blockReason, callLadder, fastExit, fridayOf, FS_LISTS, FS_RULES, learnStart, marketRecord, mustHardClose,
  openingWindow, paceLadder, passes, pickRanked, strengthPct, tradingWindow,
} from "./fast_systems.ts";

const at = (min: number) => new Date(Date.parse("2026-11-24T15:00:00Z") + min * 60000);
const spot = { symbol: "PLTR", qty: 100 / 200, mult: 1, entryPrice: 200, entryAt: at(0).toISOString() };
const call = { symbol: "IWM", qty: 1, mult: 100, entryPrice: 1, entryAt: at(0).toISOString(), option: { contract: "X", strike: 250, expiry: "2026-11-28", premium: 1, cost: 100 } };
const ex = (o: Partial<Parameters<typeof fastExit>[0]>) =>
  fastExit({ system: "scalper", shadow: spot, price: 200, now: at(5), trendAgainst: false, closeOut: false, ...o });

// A steady rise, a dip, then a strong turn back up: fast above slow, price above, strong 15 minutes.
function strongRise(): { closes: number[]; price: number } {
  const c: number[] = [];
  let p = 100;
  for (let i = 0; i < 60; i++) c.push((p += 0.15));
  for (let i = 0; i < 6; i++) c.push((p -= 0.3));
  for (let i = 0; i < 6; i++) c.push((p += 0.5));
  return { closes: c, price: p };
}

Deno.test("own markets: no ticker from the main agent's lists", () => {
  const main = new Set(PA_MARKETS.map((m) => m.symbol));
  for (const sys of Object.values(FS_LISTS)) {
    for (const m of [...sys.weekday, ...sys.weekend]) assert(!main.has(m.symbol), `${m.symbol} is on the main agent's list`);
  }
  assertEquals(FS_LISTS.scalper.weekday.length, 18);
  assertEquals(FS_LISTS.scalper.weekend.length, 6);
  assertEquals(FS_LISTS.options.weekday.length, 11);
  assertEquals(FS_LISTS.options.weekend.length, 6);
});

Deno.test("brakes sized so they cannot block 20 trades", () => {
  assertEquals([FS_RULES.scalper.dailyStopUsd, FS_RULES.scalper.totalBrakeUsd], [25, 50]);
  assertEquals([FS_RULES.options.dailyStopUsd, FS_RULES.options.totalBrakeUsd], [250, 500]);
  // Worst full Scalper day at -1% on $100: 20 x -$1 = -$20, still above the -$25 daily stop.
  assert(20 * FS_RULES.spot.stopLossUsd < FS_RULES.scalper.dailyStopUsd);
});

Deno.test("the 30-minute law: settings and the hard close at 29 minutes", () => {
  assertEquals(FS_RULES.maxHoldMin, 30);
  assertEquals(FS_RULES.exitCheckEveryMin, 1);
  assert(FS_RULES.hardCloseAtMin + FS_RULES.exitCheckEveryMin <= FS_RULES.maxHoldMin);
  assertEquals(mustHardClose(spot.entryAt, at(28.9)), false);
  assertEquals(mustHardClose(spot.entryAt, at(29)), true);
  const flat = ex({ now: at(29.2) });
  assert(flat.sell && flat.reason.startsWith("30-minute hard close"));
  assertEquals(ex({ now: at(10) }).sell, false);
});

Deno.test("exits: stocks and coins +2% / -1%, options +$50 / -$50", () => {
  assertEquals(ex({ price: 204 }).reason, "take profit hit (+$2.00)");
  assertEquals(ex({ price: 198 }).reason, "stop loss hit (-$1.00)");
  assertEquals(ex({ price: 198.2 }).sell, false);
  assert(ex({ trendAgainst: true }).reason.startsWith("trend turned down"));
  assert(ex({ closeOut: true }).reason.startsWith("3:55 PM ET close"));
  const o = (price: number) => fastExit({ system: "options", shadow: call, price, now: at(5), trendAgainst: false, closeOut: false });
  assertEquals(o(1.5).reason, "take profit hit (+$50.00)");
  assertEquals(o(0.5).reason, "stop loss hit (-$50.00)");
  assertEquals(o(1.2).sell, false);
  // Weekend coins on the Options system use the spot exits.
  assertEquals(fastExit({ system: "options", shadow: spot, price: 204, now: at(5), trendAgainst: false, closeOut: false }).reason, "take profit hit (+$2.00)");
});

Deno.test("20 a day: the pace ladder steps down 0.05% per hour behind, floor +0.05%, floor in the last hour", () => {
  assertEquals(FS_RULES.dailyTarget, 20);
  // 12:45 PM ET: half the window, 10 expected. On pace: the day's start.
  assertEquals(paceLadder({ weekend: false, hour: 12, minute: 45 }, 10).thresholdPct, 0.3);
  // 6 trades behind at 12:45 PM: 20 per 6.5 h is about 3.08 an hour, so about 1.95 h behind: 2 steps down.
  const l = paceLadder({ weekend: false, hour: 12, minute: 45 }, 4);
  assertEquals(l.deficit, 6);
  assertEquals(l.steps, 2);
  assertEquals(l.thresholdPct, 0.2);
  // Far behind: never below the floor.
  assertEquals(paceLadder({ weekend: false, hour: 14, minute: 50 }, 0).thresholdPct, 0.05);
  // Last 60 minutes: the floor.
  const last = paceLadder({ weekend: false, hour: 15, minute: 10 }, 15);
  assert(last.finalHour);
  assertEquals(last.thresholdPct, 0.05);
  // 20 reached: back to the day's start (it may keep trading, strict).
  assertEquals(paceLadder({ weekend: false, hour: 15, minute: 10 }, 20).thresholdPct, 0.3);
  // The learned start carries in.
  assertEquals(paceLadder({ weekend: false, hour: 10, minute: 0 }, 1, 0.35).thresholdPct, 0.35);
  // Weekends: the whole day.
  assertEquals(tradingWindow({ weekend: true, hour: 12, minute: 0 }).length, 24 * 60);
  assertEquals(paceLadder({ weekend: true, hour: 12, minute: 0 }, 10).expected, 10);
});

Deno.test("never buy a falling market, at any strength", () => {
  const { closes, price } = strongRise();
  const up = analyzeMarket(closes, price);
  assert(passes(up, 0.3));
  assertEquals(up.falling, false);
  const fall = closes.map((c) => 300 - c);
  const down = analyzeMarket(fall, 300 - price);
  assert(down.falling);
  assertEquals(passes(down, FS_RULES.floorPct), false);
  assertEquals(passes(down, -10), false); // even a silly threshold never lets a falling market through
});

Deno.test("ranking: all markets scored, the top-ranked passing one is taken", () => {
  const { closes, price } = strongRise();
  const strong = analyzeMarket(closes, price);
  const weaker = { ...strong, strength: 0.1, score: strong.score - 1 };
  const fall = analyzeMarket(closes.map((c) => 300 - c), 300 - price);
  const items = [{ sym: "A", a: fall }, { sym: "B", a: weaker }, { sym: "C", a: strong }];
  const r = pickRanked(items, 0.3);
  assertEquals(r.ranked[0].sym, "C");
  assertEquals(r.pick?.sym, "C");
  assertEquals(pickRanked([{ sym: "B", a: weaker }], 0.3).pick, null); // not strong enough yet
  assertEquals(pickRanked([{ sym: "B", a: weaker }], 0.05).pick?.sym, "B"); // at the floor it passes
});

Deno.test("learning each morning from its own last 20 trades", () => {
  assertEquals(learnStart(0.3, [1, -1, -1, -1, -1, 1]).startPct, 0.35); // 33% wins: stricter
  assertEquals(learnStart(0.3, [1, 1, 1, -1, 1]).startPct, 0.25); // 80%: looser
  assertEquals(learnStart(0.3, [1, 1, -1, -1, 1, -1, 1, -1, 1, -1, 1]).startPct, 0.3); // 55%: same
  assertEquals(learnStart(0.5, Array(10).fill(-1)).startPct, 0.5); // never above +0.5%
  assertEquals(learnStart(0.2, Array(10).fill(1)).startPct, 0.2); // never below +0.2%
  assertEquals(learnStart(0.3, [1, 1]).startPct, 0.3); // too few trades
  assert(learnStart(0.3, [1, -1, -1, -1, -1, 1]).line.includes("under 50%"));
  assertEquals(marketRecord(Array(25).fill(1)).n, 20);
});

Deno.test("options: slightly out of the money calls expiring this week first", () => {
  assertEquals(fridayOf("2026-11-24", "Tue"), "2026-11-27");
  assertEquals(fridayOf("2026-11-27", "Fri"), "2026-11-27");
  assertEquals(fridayOf("2026-11-28", "Sat"), "2026-12-04");
  const c: { symbol: string; strike: number; expiry: string }[] = [];
  for (const e of ["2026-11-24", "2026-11-26", "2026-11-27", "2026-12-04"]) {
    for (let k = 236; k <= 250; k++) c.push({ symbol: `${e}C${k}`, strike: k, expiry: e });
  }
  const l = callLadder(c, 240.4, "2026-11-24", 11 * 60);
  assertEquals(l[0], { symbol: "2026-11-24C241", strike: 241, expiry: "2026-11-24" }); // just above the price, today
  assertEquals(l.slice(0, 6).map((x) => x.strike), [241, 242, 243, 244, 245, 246]);
  assertEquals(l[6].expiry, "2026-11-26");
  // After 3:00 PM ET, never a contract that expires within the next hour.
  assertEquals(callLadder(c, 240.4, "2026-11-24", 15 * 60 + 5)[0].expiry, "2026-11-26");
});

Deno.test("why the day ended below 20, in plain words", () => {
  assertEquals(blockReason({ falling: 120, weak: 30 }), "markets were falling — the not-falling rule blocked the rest");
  assert(blockReason({ noContract: 50, weak: 3 }).includes("under $150"));
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
