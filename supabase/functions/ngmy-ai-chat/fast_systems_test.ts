// deno test --allow-read supabase/functions/ngmy-ai-chat/fast_systems_test.ts
import { assert, assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { entryCheck, fastExit, FS_RULES, mustHardClose, openingWindow, strengthPct } from "./fast_systems.ts";

const at = (min: number) => new Date(Date.parse("2026-11-23T15:00:00Z") + min * 60000);
const spot = { symbol: "AAPL", qty: 100 / 200, mult: 1, entryPrice: 200, entryAt: at(0).toISOString() };
const call = { symbol: "SPY", qty: 1, mult: 100, entryPrice: 1, entryAt: at(0).toISOString() };
const ex = (o: Partial<Parameters<typeof fastExit>[0]>) =>
  fastExit({ system: "scalper", shadow: spot, price: 200, now: at(5), trendDown: false, closeOut: false, ...o });

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
  assert(flat.sell);
  assert(flat.reason.startsWith("30-minute hard close"));
  assertEquals(flat.pnl, 0);
  // Losing a little, not at the stop: still closed by the timer.
  const down = ex({ now: at(29.5), price: 199.5 });
  assert(down.sell && down.reason.startsWith("30-minute hard close"));
  // Before the timer and no other rule: hold, with the minutes left.
  const hold = ex({ now: at(10) });
  assertEquals(hold.sell, false);
  assert(hold.reason.includes("20 min left"));
});

Deno.test("scalper exits: +2% take profit, -1% stop loss, trend down, 3:55 PM", () => {
  assertEquals(ex({ price: 204 }).reason, "take profit hit (+$2.00)");
  assertEquals(ex({ price: 198 }).reason, "stop loss hit (-$1.00)");
  assertEquals(ex({ price: 198.2 }).sell, false);
  assert(ex({ trendDown: true }).reason.startsWith("trend turned down"));
  assert(ex({ closeOut: true }).reason.startsWith("3:55 PM ET close"));
});

Deno.test("options exits: +$50 / -$50 on one contract", () => {
  const o = (price: number, min = 5) => fastExit({ system: "options", shadow: call, price, now: at(min), trendDown: false, closeOut: false });
  assertEquals(o(1.5).reason, "take profit hit (+$50.00)");
  assertEquals(o(0.5).reason, "stop loss hit (-$50.00)");
  assertEquals(o(1.2).sell, false);
  assert(o(1.2, 29).reason.startsWith("30-minute hard close"));
});

Deno.test("strength check and the opening window", () => {
  assertEquals(strengthPct([100, 100, 100, 100, 100], 100.3)?.toFixed(2), "0.30");
  assertEquals(strengthPct([100, 100], 101), null);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 35 }), true);
  assertEquals(openingWindow({ weekend: false, hour: 9, minute: 45 }), false);
  assertEquals(openingWindow({ weekend: true, hour: 9, minute: 35 }), false);
});

Deno.test("picky entries: trend filter plus at least +0.3% in 15 minutes", () => {
  const et = { weekend: false, hour: 11, minute: 0 };
  // A steady rise, a dip, then a strong turn back up: the fast line crosses up, the big trend is rising.
  const rise: number[] = [];
  let p = 100;
  for (let i = 0; i < 60; i++) rise.push((p += 0.15));
  for (let i = 0; i < 6; i++) rise.push((p -= 0.3));
  for (let i = 0; i < 6; i++) rise.push((p += 0.5));
  const strong = entryCheck(rise, p, et, true);
  assert(strong.ok, strong.why);
  // The same setup in the first 15 minutes after the open: no entry.
  assertEquals(entryCheck(rise, p, { weekend: false, hour: 9, minute: 40 }, true).ok, false);
  // A crypto entry is not blocked by the stock opening window.
  assert(entryCheck(rise, p, { weekend: true, hour: 9, minute: 40 }, false).ok);
  // A falling market never passes.
  const fall = rise.map((c) => 300 - c);
  assertEquals(entryCheck(fall, 300 - p, et, true).ok, false);
});

Deno.test("no order code in the fast systems (paper only)", async () => {
  const src = await Deno.readTextFile(new URL("./fast_systems.ts", import.meta.url));
  assert(!src.includes("/v2/orders"), "no orders call");
  assert(!/method:\s*"(POST|PATCH|DELETE)"/.test(src), "only GET to Alpaca");
  assert(!src.includes("//api.alpaca.markets"), "no live endpoint");
  assert(!src.includes("fetch("), "all Alpaca reads go through the main agent's read-only GET helper");
});
