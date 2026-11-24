// deno test --allow-read supabase/functions/ngmy-ai-chat/fast_systems_test.ts
import { assert, assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import {
  analyzeMarket, contractLadder, EMPTY_RECORD, fastExit, FS_RULES, marketRecord, mustHardClose, openingWindow, pace, pickRanked,
  strengthPct,
} from "./fast_systems.ts";

const at = (min: number) => new Date(Date.parse("2026-11-23T15:00:00Z") + min * 60000);
const spot = { symbol: "AAPL", qty: 100 / 200, mult: 1, entryPrice: 200, entryAt: at(0).toISOString() };
const call = { symbol: "SPY", qty: 1, mult: 100, entryPrice: 1, entryAt: at(0).toISOString() };
const ex = (o: Partial<Parameters<typeof fastExit>[0]>) =>
  fastExit({ system: "scalper", shadow: spot, price: 200, now: at(5), trendAgainst: false, closeOut: false, ...o });

// A steady rise, a dip, then a strong turn back up: fast above slow, slow rising, price above, strong 15 minutes.
function strongRise(): { closes: number[]; price: number } {
  const c: number[] = [];
  let p = 100;
  for (let i = 0; i < 60; i++) c.push((p += 0.15));
  for (let i = 0; i < 6; i++) c.push((p -= 0.3));
  for (let i = 0; i < 6; i++) c.push((p += 0.5));
  return { closes: c, price: p };
}

Deno.test("the 30-minute law: settings", () => {
  assertEquals(FS_RULES.maxHoldMin, 30);
  assertEquals(FS_RULES.exitCheckEveryMin, 1);
  // The last 1-minute check before 30 minutes closes the trade, so it is never open past 30.
  assert(FS_RULES.hardCloseAtMin + FS_RULES.exitCheckEveryMin <= FS_RULES.maxHoldMin);
});

Deno.test("the 30-minute law: the hard close fires at 29 minutes, whatever the price", () => {
  assertEquals(mustHardClose(spot.entryAt, at(28.9)), false);
  assertEquals(mustHardClose(spot.entryAt, at(29)), true);
  const flat = ex({ now: at(29.2) });
  assert(flat.sell && flat.reason.startsWith("30-minute hard close"));
  assertEquals(flat.pnl, 0);
  assert(ex({ now: at(29.5), price: 199.5 }).reason.startsWith("30-minute hard close"));
  const hold = ex({ now: at(10) });
  assertEquals(hold.sell, false);
  assert(hold.reason.includes("20 min left"));
});

Deno.test("scalper exits: +2%, -1%, trend against, 3:55 PM", () => {
  assertEquals(ex({ price: 204 }).reason, "take profit hit (+$2.00)");
  assertEquals(ex({ price: 198 }).reason, "stop loss hit (-$1.00)");
  assertEquals(ex({ price: 198.2 }).sell, false);
  assert(ex({ trendAgainst: true }).reason.startsWith("trend turned against"));
  assert(ex({ closeOut: true }).reason.startsWith("3:55 PM ET close"));
});

Deno.test("options exits: +$50 / -$50 on one contract", () => {
  const o = (price: number, min = 5) => fastExit({ system: "options", shadow: call, price, now: at(min), trendAgainst: false, closeOut: false });
  assertEquals(o(1.5).reason, "take profit hit (+$50.00)");
  assertEquals(o(0.5).reason, "stop loss hit (-$50.00)");
  assertEquals(o(1.2).sell, false);
  assert(o(1.2, 29).reason.startsWith("30-minute hard close"));
});

Deno.test("10 trades a day: target, pace and Phase 2 from 2:00 PM ET", () => {
  assertEquals(FS_RULES.scalper.maxTrades, 10);
  assertEquals(FS_RULES.options.maxTrades, 10);
  // Weekday session 9:30 AM to 4:00 PM ET: halfway (12:45 PM) expects 5.
  const mid = pace({ weekend: false, hour: 12, minute: 45 }, 5);
  assertEquals(mid.expected, 5);
  assertEquals(mid.phase, 1);
  assertEquals(mid.behind, false);
  const late = pace({ weekend: false, hour: 14, minute: 30 }, 3);
  assertEquals(late.phase, 2);
  assertEquals(late.behind, true);
  assertEquals(late.phase2Active, true);
  // Behind pace before 2:00 PM: still Phase 1, no weak entries.
  assertEquals(pace({ weekend: false, hour: 13, minute: 0 }, 0).phase2Active, false);
  // Target reached: never more.
  assertEquals(pace({ weekend: false, hour: 15, minute: 0 }, 10).phase2Active, false);
  // Weekends: the whole day is the session.
  assertEquals(pace({ weekend: true, hour: 12, minute: 0 }, 0).expected, 5);
});

Deno.test("strength check and the opening window", () => {
  assertEquals(strengthPct([100, 100, 100, 100, 100], 100.3)?.toFixed(2), "0.30");
  assertEquals(strengthPct([100, 100], 101), null);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 35 }), true);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 45 }), false);
  assertEquals(openingWindow({ weekend: true, hour: 9, minute: 35 }), false);
});

Deno.test("analysis: strong setups pass Phase 1, falling markets never do", () => {
  const { closes, price } = strongRise();
  const a = analyzeMarket(closes, price);
  assert(a.phase1Ok, a.why);
  assertEquals(a.trend, "up");
  const fall = closes.map((c) => 300 - c);
  const f = analyzeMarket(fall, 300 - price);
  assertEquals(f.phase1Ok, false);
  assertEquals(f.againstHard, true); // never entered, even in Phase 2
  // The same falling market is a strong DOWN setup (a put for Options).
  assert(analyzeMarket(fall, 300 - price, EMPTY_RECORD, "down").phase1Ok);
});

Deno.test("learning: winning markets get a bonus, 3 straight losses rank last and need +0.5%", () => {
  const { closes, price } = strongRise();
  const plain = analyzeMarket(closes, price);
  const winning = analyzeMarket(closes, price, marketRecord([2, 2, -1, 2, 2]));
  assert(winning.score > plain.score);
  const losing = marketRecord([-1, -1, -1, 2, 2]);
  assertEquals(losing.lastThreeLosses, true);
  const pen = analyzeMarket(closes, price, losing);
  assert(pen.penalized);
  assert(pen.score < -50); // ranked last
  assertEquals(marketRecord(Array(25).fill(1)).n, 20); // last 20 only
});

Deno.test("ranking: the top-ranked passing market wins; Phase 2 takes the best not falling hard", () => {
  const mk = (score: number, phase1Ok: boolean, againstHard: boolean) =>
    ({ a: { ...analyzeMarket([1, 2, 3], 3), score, phase1Ok, againstHard } });
  const items = [
    { sym: "A", ...mk(5, false, false) },
    { sym: "B", ...mk(3, true, false) },
    { sym: "C", ...mk(4, true, false) },
  ];
  assertEquals(pickRanked(items, false).pick?.sym, "C"); // top-ranked that passes
  const weak = [{ sym: "A", ...mk(2, false, true) }, { sym: "B", ...mk(1, false, false) }];
  assertEquals(pickRanked(weak, false).pick, null); // Phase 1: no weak entries
  assertEquals(pickRanked(weak, true).pick?.sym, "B"); // Phase 2: best not falling hard
  assertEquals(pickRanked([{ sym: "A", ...mk(2, false, true) }], true).pick, null); // a crashing market is never fine
});

Deno.test("options contracts: at the money first, then up to 5 strikes out, then the next expiry", () => {
  const today = "2026-11-23";
  const c: { symbol: string; strike: number; expiry: string }[] = [];
  for (const e of ["2026-11-24", "2026-11-25", "2026-11-27", "2026-12-04", "2026-12-11"]) {
    for (let k = 690; k <= 715; k++) c.push({ symbol: `${e}C${k}`, strike: k, expiry: e });
  }
  const calls = contractLadder(c, 702.2, today, "call", 11 * 60);
  assertEquals(calls[0].strike, 702); // at the money
  assertEquals(calls[0].expiry, "2026-11-25"); // nearest at least 2 days away (not Nov 24)
  assertEquals(calls.slice(0, 6).map((x) => x.strike), [702, 703, 704, 705, 706, 707]); // then 5 strikes up
  assertEquals(calls[6].expiry, "2026-11-27"); // then the next expiry
  assertEquals(calls.length, 18); // 3 expiries x 6
  const puts = contractLadder(c, 702.2, today, "put", 11 * 60);
  assertEquals(puts.slice(0, 6).map((x) => x.strike), [702, 701, 700, 699, 698, 697]); // puts step down
});

Deno.test("no order code in the fast systems (paper only)", async () => {
  const src = await Deno.readTextFile(new URL("./fast_systems.ts", import.meta.url));
  assert(!src.includes("/v2/orders"), "no orders call");
  assert(!/method:\s*"(POST|PATCH|DELETE)"/.test(src), "only GET to Alpaca");
  assert(!src.includes("//api.alpaca.markets"), "no live endpoint");
  assert(!src.includes("fetch("), "all Alpaca reads go through the main agent's read-only GET helper");
});
