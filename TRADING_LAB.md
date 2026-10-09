# NGMY Trading Lab

Where: **Market Hub → Trading Lab** in the app. Mode today: **PAPER (simulated money)**. Live trading is off and no broker is connected.

## Architecture (fits the existing app)

| Part | Where | Notes |
|---|---|---|
| Dashboard | `lib/ngmy_trading_lab.dart` | Flutter screen, opened from `lib/ngmy_market_hub_screen.dart` |
| Engine + API | `supabase/functions/ngmy-ai-chat/index.ts` → section "NGMY Trading Lab" | Deployed as Edge Function `bright-handler` (`deploy-bright-handler.ps1`) |
| Database | `supabase/trading_tables.sql` | 5 tables, RLS: users can only **read** their own rows; only the server writes |
| App ↔ server | `lib/ngmy_edge_invoke.dart` wire codes `x1`–`x7` | `tradeAnalyze`, `tradeSummary`, `tradePaperOpen`, `tradePaperClose`, `tradeHalt`, `tradeRiskSet`, `tradeReset` |

## What works (Stage 1)

- **Market data:** Coinbase Exchange public candles (free, no key) for BTC, ETH, SOL, XRP, DOGE, LTC, ADA — 1m/5m/15m/1h. Validated for malformed candles, gaps and staleness; timestamps shown.
- **Indicators:** EMA 20/50, RSI 14, MACD, ATR 14, Bollinger 20/2, support/resistance, trend/range regime.
- **Model (`lr2-v1`):** two logistic-regression models (move up beyond costs / move down beyond costs) on 8 features. Each analysis trains on the oldest 70 % of ~1,500 bars, tunes regularisation on the next 15 %, and is scored **only on the newest 15 % it never saw** (Brier score vs. base rate, calibration bins). If it does not beat the base rate, the decision is **NO TRADE**.
- **Backtest:** on that unseen window, non-overlapping trades, next-bar entry, ATR stop/target, 0.3 % round-trip costs. Reports trades, win rate, avg win/loss, profit factor, net return, max drawdown, expected value, sample-size warning.
- **Risk engine (server, can veto any trade):** risk per trade, max position, daily loss, max drawdown, max open positions, consecutive-loss cool-off, order frequency, minimum expected value after costs, minimum model edge, data freshness, emergency stop. No martingale. Changes require confirmation and are clamped server-side.
- **Paper trading:** server re-runs analysis + risk check before every order; idempotency key prevents duplicates; simulated fees and slippage; stops/targets/time-stops settled from real candles; ledger stored server-side.
- **Prediction log:** every analysis is stored and later scored against what the market actually did.
- **Audit log** of opens, closes, rejections, halts, risk changes, resets.

## Not done yet (honest list)

- News & economic calendar (Stage 2) — shown as "not connected".
- Retraining across runs / model registry & rollback (today the model is retrained fresh each analysis; nothing is promoted automatically).
- Automatic paper trading on a schedule (Stage 2).
- Stocks / forex data and an official broker demo account — Alpaca (stocks/crypto) or OANDA (forex) both have documented APIs and free practice accounts (Stage 3, needs your keys).
- **Live trading:** not implemented.
- **Pocket Option:** no official, documented public trading API was found, so it is not integrated.
- Server-side unit tests need Deno (not installed on this PC); Stage 1 was verified with live calls against real data.

## Honest expectations

Short-term price prediction is very hard. Expect the model to say **NO TRADE** most of the time — that is the system working. Nothing here guarantees profit.
