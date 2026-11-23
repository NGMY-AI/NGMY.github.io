// deno test supabase/functions/ngmy-ai-chat/alpaca_agent_test.ts
import { assertEquals, assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { activeMarkets, crossAt, todaysList, addDays, bigTrend, heldMark, optionFits, pickOption, buildChart, crossover, decide, entryNow, etParts, PA_FX, PA_LESSON_IDS, PA_MARKETS, pickMarket, readMarket, rsi, runStats, sma, type DecideInput, type Scan } from "./alpaca_agent.ts";

const base: DecideInput = {
  weekend: false, asset: "SPY", stock: true, price: 100, signal: "none", fast: 100, slow: 100, shadow: null,
  dayPnl: 0, totalPnl: 0, tradesToday: 0, finalCheck: false, alpacaHolding: false, signalAlreadyUsed: false,
  bigTrend: { ok: true, why: "the big trend is rising" },
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
  assertEquals(decide({ ...base, signal: "buy", dayPnl: -50 }).reason, "daily stop reached ($50 lost today)");
  assertEquals(decide({ ...base, signal: "buy", dayPnl: -49.99 }).decision, "would buy");
  assertEquals(decide({ ...base, signal: "buy", totalPnl: -100 }).reason, "agent paused by the $100 brake");
  assertEquals(decide({ ...base, signal: "buy", tradesToday: 4 }).decision, "no action");
  assertEquals(decide({ ...base, weekend: true, asset: "BTC/USD", signal: "buy", tradesToday: 4 }).decision, "would buy");
  assertEquals(decide({ ...base, weekend: true, asset: "BTC/USD", signal: "buy", tradesToday: 5 }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", alpacaHolding: true }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", signalAlreadyUsed: true }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", finalCheck: true }).decision, "no action");
});

Deno.test("exits in dollars: +$50 take profit, -$50 stop loss, 3:55 rule, sell signal", () => {
  // One SPY call: 1 contract x 100 shares, bought at $1.00 a share ($100).
  const shadow = { symbol: "SPY", qty: 1, mult: 100, entryPrice: 1, entryAt: "" };
  const tp = decide({ ...base, shadow, price: 1.5 });
  assertEquals(tp.decision, "would sell");
  assertEquals(tp.pnl, 50);
  assertEquals(decide({ ...base, shadow, price: 1.49 }).decision, "hold");
  const sl = decide({ ...base, shadow, price: 0.5 });
  assertEquals(sl.decision, "would sell");
  assertEquals(sl.pnl, -50);
  assertEquals(decide({ ...base, shadow, price: 0.51 }).decision, "hold");
  assertEquals(decide({ ...base, shadow, price: 1.1, finalCheck: true }).decision, "would sell");
  assertEquals(decide({ ...base, shadow, price: 1.1, signal: "sell" }).decision, "would sell");
  assertEquals(decide({ ...base, shadow, price: 1.1 }).decision, "hold");
  // Crypto trades all day: the 3:55 PM stock rule does not sell it.
  const btc = { symbol: "BTC/USD", qty: 0.002, mult: 1, entryPrice: 50000, entryAt: "" };
  // $100 of Bitcoin: +$50 needs +50%, so a normal move only holds.
  assertEquals(decide({ ...base, asset: "BTC/USD", stock: false, shadow: btc, price: 75000 }).pnl, 50);
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

Deno.test("RSI and the live reading", () => {
  const rising = Array.from({ length: 40 }, (_, i) => 100 + i * 0.5 + (i % 3 === 0 ? -0.2 : 0));
  assert(rsi(rising)! > 70);
  const falling = rising.map((v) => 200 - v);
  assert(rsi(falling)! < 30);
  assertEquals(rsi([1, 2, 3]), null);
  const bars = rising.map((c) => ({ h: c + 0.1, l: c - 0.1 }));
  const up = readMarket(rising, bars, rising[rising.length - 1], true);
  assertEquals(up.bias, "bullish");
  assert(up.score > 60);
  assertEquals(readMarket(rising, bars, rising[rising.length - 1], false).action, "MARKET CLOSED");
  const down = readMarket(falling, bars, falling[falling.length - 1], true);
  assertEquals(down.bias, "bearish");
  // One decision: label, decision code and first sentence always agree.
  assert(["WAIT_LATE", "SKIP_WEAK", "ENTER", "NO_DIRECTION"].includes(down.decision), down.decision);
  assert(down.action.length > 0);
  assert(down.score < 40);
  assertEquals(readMarket([1, 2], [], 2, true).bias, "unknown");
  assertEquals(readMarket([1, 2], [], 2, true).decision, "NO_DATA");
  assertEquals(readMarket(rising, bars, rising[rising.length - 1], false).decision, "CLOSED");
});

Deno.test("trend timing: age, typical length, entry window, how often it worked", () => {
  // Waves: 20 candles up, 20 down, repeated, then a fresh up move (the averages need a few candles to cross).
  const closes: number[] = [];
  let p = 100;
  for (let w = 0; w < 8; w++) for (let i = 0; i < 20; i++) closes.push((p += w % 2 === 0 ? 0.1 : -0.1));
  for (let i = 0; i < 10; i++) closes.push((p += 0.1));
  const t = runStats(closes, 1);
  assertEquals(t.dir, "up");
  assert(t.of >= 2);
  assertEquals(t.worked, t.of); // every past up wave ended higher
  assert(t.typicalMin! >= 15 && t.typicalMin! <= 25);
  assert(t.ageMin <= 10);
  assert(t.enterWithinMin! >= 0);
  assertEquals(t.remainingMin, Math.max(0, t.typicalMin! - t.ageMin));
  // 5-minute candles report in minutes.
  assertEquals(runStats(closes, 5).typicalMin, t.typicalMin! * 5);
  assertEquals(runStats([1, 2, 3], 1).dir, "none");
  // Flat waves: the new up move comes right after a fall, so the 1-hour big trend is still falling: skip.
  const flat = readMarket(closes, closes.map((c) => ({ h: c + 0.05, l: c - 0.05 })), p, true, { candleMin: 1, agent: false });
  assertEquals(flat.decision, "SKIP_WEAK");
  assertEquals(flat.action, "UP BUT BIG TREND FALLING · SKIP");
  assertEquals(flat.entry, null);
  // Waves on a rising market: a clear, early, reliable up move with the big trend rising = ENTER UP.
  const rising: number[] = [];
  let q = 100;
  for (let w = 0; w < 8; w++) for (let i = 0; i < 20; i++) rising.push((q += w % 2 === 0 ? 0.1 : -0.04));
  for (let i = 0; i < 10; i++) rising.push((q += 0.1));
  const r = readMarket(rising, rising.map((c) => ({ h: c + 0.05, l: c - 0.05 })), q, true, { candleMin: 1, agent: false });
  assertEquals(r.decision, "ENTER");
  assertEquals(r.action, "ENTER UP · BUY");
  assertEquals(r.entry?.dir, "up");
  assertEquals(r.entry?.candleMin, 1);
  assert(r.notes[0].startsWith("Enter UP at the start of the next 1-minute candle"));
  // The mirror for a falling market: ENTER DOWN only with the big trend falling.
  const falling = rising.map((c) => 200 - c);
  const d = readMarket(falling, falling.map((c) => ({ h: c + 0.05, l: c - 0.05 })), 200 - q, true, { candleMin: 1, agent: false });
  assertEquals(d.action, "ENTER DOWN · SELL");
  const flatDown = closes.map((c) => 200 - c);
  assertEquals(readMarket(flatDown, flatDown.map((c) => ({ h: c + 0.05, l: c - 0.05 })), 200 - p, true, { candleMin: 1, agent: false }).action,
    "DOWN BUT BIG TREND RISING · SKIP");
});

Deno.test("one decision for every market: the label, the code and the entry never disagree", () => {
  const rnd = (seed: number) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let s = 1; s <= 200; s++) {
    const next = rnd(s);
    let p = 100;
    const closes = Array.from({ length: 300 }, () => (p += (next() - 0.5) * 0.2));
    const r = readMarket(closes, closes.map((c) => ({ h: c + 0.03, l: c - 0.03 })), p, true, { candleMin: 1, agent: false });
    assertEquals(r.entry != null, r.decision === "ENTER", `seed ${s}`);
    assertEquals(r.action.startsWith("ENTER"), r.decision === "ENTER", `seed ${s}`);
    if (r.decision === "NO_DIRECTION") assertEquals(r.action, "NO CLEAR DIRECTION · WAIT");
    if (r.decision === "SKIP_WEAK") assert(r.action.endsWith("WEAK · SKIP") || r.action.includes("BIG TREND"), r.action);
    if (r.decision === "ENTER") assert(r.notes.length > 0);
    if (r.decision === "WAIT_LATE") assert(r.action.endsWith("TOO LATE · WAIT"));
  }
});

Deno.test("enter now: only clear, early and reliable signals", () => {
  const t = { dir: "up" as const, ageMin: 2, typicalMin: 12, remainingMin: 10, enterWithinMin: 3, worked: 5, of: 8 };
  assertEquals(entryNow(true, true, t)?.dir, "up");
  assertEquals(entryNow(true, true, t)?.durationMin, 10);
  assertEquals(entryNow(true, false, t), null); // market closed
  assertEquals(entryNow(false, true, t), null); // no clear direction
  assertEquals(entryNow(true, true, { ...t, enterWithinMin: 0 }), null); // too late
  assertEquals(entryNow(true, true, { ...t, worked: 2, of: 8 }), null); // worse than a coin flip
  assertEquals(entryNow(true, true, { ...t, worked: 2, of: 2 }), null); // too few past moves to judge
  assertEquals(entryNow(true, true, { ...t, dir: "down" })?.dir, "down");
  assertEquals(entryNow(true, true, { ...t, remainingMin: 1 }, 5)?.durationMin, 5); // never shorter than one candle
});

Deno.test("lesson ids match the app", () => {
  assertEquals(PA_LESSON_IDS.length, 10);
});

Deno.test("forex list is live pairs only", () => {
  assert(PA_FX.length >= 10);
  assert(PA_FX.every((f) => f.yahoo.endsWith("=X")));
});

Deno.test("watchlists: 10 stocks on weekdays, 4 coins on weekends", () => {
  assertEquals(todaysList(false), ["SPY", "QQQ", "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA", "AMD"]);
  assertEquals(todaysList(true), ["BTC/USD", "ETH/USD", "SOL/USD", "DOGE/USD"]);
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


Deno.test("fix 2: never buy into a falling big trend", () => {
  // A cross up is not enough: the big trend must be rising too.
  assertEquals(decide({ ...base, signal: "buy", bigTrend: { ok: false, why: "the big trend is falling" } }).decision, "no action");
  assertEquals(decide({ ...base, signal: "buy", bigTrend: undefined }).decision, "no action");
  // A long fall with a small bounce at the end: the fast line crosses up, but the slow average is still falling.
  const fall: number[] = [];
  let p = 100;
  for (let i = 0; i < 60; i++) fall.push((p -= 0.15));
  for (let i = 0; i < 6; i++) fall.push((p += 0.35));
  const x = crossover(fall);
  const b = bigTrend(fall, p);
  assertEquals(b.rising, false);
  assertEquals(b.ok, false);
  if (x.signal === "buy") {
    assertEquals(decide({ ...base, signal: "buy", fast: x.fastNow, slow: x.slowNow, bigTrend: b }).decision, "no action");
  }
  // The agent's reading never says ENTER UP into a falling big trend.
  const r = readMarket(fall, fall.map((c) => ({ h: c + 0.05, l: c - 0.05 })), p, true);
  assert(!(r.decision === "ENTER" && r.dir === "up"), r.action);
  // A steady rise with a dip and a cross back up: the big trend is rising and the price is above it.
  const rise: number[] = [];
  p = 100;
  for (let i = 0; i < 60; i++) rise.push((p += 0.15));
  for (let i = 0; i < 4; i++) rise.push((p -= 0.3));
  for (let i = 0; i < 4; i++) rise.push((p += 0.4));
  const br = bigTrend(rise, p);
  assertEquals(br.rising, true);
  assertEquals(br.ok, true);
  // Price under the slow average: no buy even in a rising trend.
  assertEquals(bigTrend(rise, br.slowNow! * 0.99).ok, false);
});

Deno.test("3:40 PM: no new stock buys, but an open stock position is only sold from 3:50 PM", () => {
  const shadow = { symbol: "SPY", qty: 0.5, entryPrice: 100, entryAt: "" };
  assertEquals(decide({ ...base, signal: "buy", lateForBuys: true }).decision, "no action");
  assertEquals(decide({ ...base, shadow, price: 100.5, lateForBuys: true, finalCheck: false }).decision, "hold");
  assertEquals(decide({ ...base, shadow, price: 100.5, lateForBuys: true, finalCheck: true }).decision, "would sell");
});

Deno.test("SPY option: nearest expiry at least 7 days away, strike closest to the price, $120 limit", () => {
  assertEquals(addDays("2026-11-27", 7), "2026-12-04");
  const c = [
    { symbol: "A", strike: 700, expiry: "2026-11-27" }, // too soon
    { symbol: "B", strike: 705, expiry: "2026-12-04" },
    { symbol: "C", strike: 702, expiry: "2026-12-04" },
    { symbol: "D", strike: 698, expiry: "2026-12-04" },
    { symbol: "E", strike: 701, expiry: "2026-12-11" }, // closer strike, but a later expiry
  ];
  assertEquals(pickOption(c, 701, "2026-11-27")?.symbol, "C"); // 702 and 698 are both 1 away... 702 is 1, 698 is 3
  assertEquals(pickOption(c, 700, "2026-11-27")?.symbol, "D"); // tie (698 and 702 both 2 away): the lower strike
  assertEquals(pickOption([c[0]], 700, "2026-11-27"), null);
  assertEquals(optionFits(1.2), { ok: true, cost: 120 });
  assertEquals(optionFits(1.21).ok, false);
  assertEquals(optionFits(8.5), { ok: false, cost: 850 }); // a real at-the-money price: no trade
  assertEquals(optionFits(0).ok, false);
  const m = heldMark({ symbol: "SPY", qty: 1, mult: 100, entryPrice: 1.1, entryAt: "" }, 1.35);
  assertEquals(m, { price: 1.35, cost: 110, value: 135, pnl: 25, priced: true });
});

Deno.test("all of the day's markets are buyable at once: stocks while open on weekdays, coins on weekends", () => {
  assertEquals(activeMarkets(false, true).length, 10);
  assertEquals(activeMarkets(false, false), []); // weekday evening or holiday: no trading
  assertEquals(activeMarkets(true, false), ["BTC/USD", "ETH/USD", "SOL/USD", "DOGE/USD"]);
});

Deno.test("first valid entry wins; a cross up into a falling big trend is skipped for another market", () => {
  const mk = (symbol: string, o: Partial<Scan>): Scan => ({
    symbol, stock: true, open: true, price: 100, fast: 100, slow: 100, signal: "none", key: `${symbol}|t|none`, ...o,
  });
  const scans = [
    mk("NVDA", { fast: 103, slow: 100, signal: "buy", key: "NVDA|t|buy", big: { ok: false, why: "falling" } }), // strongest, but falling
    mk("AAPL", { fast: 101, slow: 100, signal: "buy", key: "AAPL|t|buy", big: { ok: true, why: "rising" } }),
    mk("TSLA", { fast: 100.5, slow: 100, signal: "none", big: { ok: true, why: "rising" } }),
  ];
  const r = pickMarket(scans, null, false);
  assertEquals(r.pick?.symbol, "AAPL");
  assertEquals(r.blocked.map((b) => b.symbol), ["NVDA"]);
  assertEquals(pickMarket(scans.slice(0, 1), null, false).pick, null);
});

Deno.test("a cross is named by its candle, so 5-minute checks never buy it twice", () => {
  const closes = [...Array(30).fill(100), 99, 98, 97, 96, 95, 95, 95, 110, 112, 114];
  const times = closes.map((_, i) => `t${i}`);
  const a = crossAt(closes, times);
  assert(a.length > 0);
  // One candle later the same cross keeps the same name.
  assertEquals(crossAt([...closes, 115], [...times, "t99"]), a);
  assertEquals(crossAt(Array(40).fill(100), times), "");
});
