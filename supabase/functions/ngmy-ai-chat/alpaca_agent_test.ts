// deno test supabase/functions/ngmy-ai-chat/alpaca_agent_test.ts
import { assertEquals, assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { buildChart, crossover, decide, etParts, PA_MARKETS, pickMarket, sma, type DecideInput, type Scan } from "./alpaca_agent.ts";

const base: DecideInput = {
  weekend: false, asset: "SPY", stock: true, price: 100, signal: "none", fast: 100, slow: 100, shadow: null,
  dayPnl: 0, totalPnl: 0, tradesToday: 0, finalCheck: false, alpacaHolding: false, signalAlreadyUsed: false,
};

Deno.test("sma", () => {
  assertEquals(sma([1, 2, 3, 4], 2), 3.5);
  assertEquals(sma([1], 2), null);
});

Deno.test("crossover finds a buy cross in the last 3 candles", () => {
  const closes = [...Array(30).fill(100), 99, 98, 97, 96, 95, 95, 95, 110, 112, 114];
  const x = crossover(closes);
  assertEquals(x.signal, "buy");
  assert(x.fastNow! > x.slowNow!);
});

Deno.test("crossover finds a sell cross", () => {
  const closes = [...Array(30).fill(100), 101, 102, 103, 104, 105, 105, 105, 90, 88, 86];
  assertEquals(crossover(closes).signal, "sell");
});

Deno.test("flat market gives no signal", () => {
  assertEquals(crossover(Array(40).fill(100)).signal, "none");
});

Deno.test("buy only on a real signal", () => {
  assertEquals(decide(base).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy" }).decision, "would buy");
});

Deno.test("brakes beat signals", () => {
  assertEquals(decide({ ...base, signal: "buy", dayPnl: -10 }).reason, "daily stop reached ($10 lost today)");
  assertEquals(decide({ ...base, signal: "buy", totalPnl: -25 }).reason, "agent paused by the $25 brake");
  assertEquals(decide({ ...base, signal: "buy", tradesToday: 4 }).decision, "no action");
  assertEquals(decide({ ...base, weekend: true, asset: "BTC/USD", signal: "buy", tradesToday: 4 }).decision, "would buy");
  assertEquals(decide({ ...base, weekend: true, asset: "BTC/USD", signal: "buy", tradesToday: 5 }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", alpacaHolding: true }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", signalAlreadyUsed: true }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", finalCheck: true }).decision, "no action");
});

Deno.test("exits: take profit, stop loss, 3:55 rule, sell signal", () => {
  const shadow = { symbol: "SPY", qty: 0.5, entryPrice: 100, entryAt: "" };
  const tp = decide({ ...base, shadow, price: 103 });
  assertEquals(tp.decision, "would sell");
  assertEquals(tp.pnl, 1.5);
  const sl = decide({ ...base, shadow, price: 98.5 });
  assertEquals(sl.decision, "would sell");
  assertEquals(sl.pnl, -0.75);
  assertEquals(decide({ ...base, shadow, price: 100.5, finalCheck: true }).decision, "would sell");
  assertEquals(decide({ ...base, shadow, price: 100.5, signal: "sell" }).decision, "would sell");
  assertEquals(decide({ ...base, shadow, price: 100.5 }).decision, "hold");
  // Crypto trades all day: the 3:55 PM stock rule does not sell it.
  const btc = { symbol: "BTC/USD", qty: 0.001, entryPrice: 50000, entryAt: "" };
  assertEquals(decide({ ...base, asset: "BTC/USD", stock: false, shadow: btc, price: 50100, finalCheck: true }).decision, "hold");
  // ...and a crypto buy is still allowed in the last stock minutes.
  assertEquals(decide({ ...base, asset: "BTC/USD", stock: false, signal: "buy", finalCheck: true }).decision, "would buy");
});

Deno.test("watchlist: picks the strongest fresh buy among open markets", () => {
  const mk = (symbol: string, o: Partial<Scan>): Scan => ({
    symbol, stock: true, open: true, price: 100, fast: 100, slow: 100, signal: "none", key: `${symbol}|t|none`, ...o,
  });
  const scans = [
    mk("SPY", { fast: 101, slow: 100, signal: "buy", key: "SPY|t|buy" }),
    mk("NVDA", { fast: 103, slow: 100, signal: "buy", key: "NVDA|t|buy" }),
    mk("TSLA", { fast: 110, slow: 100, signal: "buy", open: false, key: "TSLA|t|buy" }), // stock market closed
    mk("BTC/USD", { stock: false, fast: 99.9, slow: 100 }),
  ];
  assertEquals(pickMarket(scans, null, false).pick?.symbol, "NVDA");
  // A signal already used is skipped.
  assertEquals(pickMarket(scans, "NVDA|t|buy", false).pick?.symbol, "SPY");
  // Last stock check of the day: no new stock buys at all.
  assertEquals(pickMarket(scans, null, true).pick, null);
  // Nothing to buy: name the market closest to crossing up.
  const quiet = [mk("SPY", { fast: 98, slow: 100 }), mk("BTC/USD", { stock: false, fast: 99.9, slow: 100 })];
  const r = pickMarket(quiet, null, false);
  assertEquals(r.pick, null);
  assertEquals(r.closest?.symbol, "BTC/USD");
});

Deno.test("never more than 10 markets", () => {
  assert(PA_MARKETS.length <= 10);
  assertEquals(new Set(PA_MARKETS.map((m) => m.symbol)).size, PA_MARKETS.length);
});

Deno.test("Eastern Time, not server time", () => {
  // 2026-11-21 03:00 UTC is Friday 10:00 PM ET.
  const a = etParts(new Date("2026-11-21T03:00:00Z"));
  assertEquals(a.dayKey, "2026-11-20");
  assertEquals(a.weekday, "Fri");
  assertEquals(a.weekend, false);
  assertEquals(a.hour, 22);
  // Summer (EDT): 2026-07-11 13:30 UTC is Saturday 9:30 AM ET.
  const b = etParts(new Date("2026-07-11T13:30:00Z"));
  assertEquals(b.weekend, true);
  assertEquals(b.hour, 9);
  assertEquals(b.minute, 30);
});

Deno.test("chart data and trend for the app", () => {
  const closes = [...Array(30).fill(100), 101, 102, 103, 104, 105];
  const times = closes.map((_, i) => `t${i}`);
  const c = buildChart(times, closes);
  assertEquals(c.points.length, 35);
  assertEquals(c.trend, "up");
  assertEquals(c.points[0].s, null);
  assert(c.points[34].f! > c.points[34].s!);
});

Deno.test("no order code path in Version 1", async () => {
  const src = await Deno.readTextFile(new URL("./alpaca_agent.ts", import.meta.url));
  assert(!src.includes("/v2/orders"), "Version 1 must not contain an orders call");
  assert(!/method:\s*"(POST|PATCH|DELETE)"/.test(src), "Version 1 only sends GET to Alpaca");
  assert(!src.includes("//api.alpaca.markets"), "no live endpoint");
});
