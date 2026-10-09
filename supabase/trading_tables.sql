-- NGMY Trading Lab — paper trading, predictions, risk settings, audit log.
-- Users can only READ their own rows. All writes go through the bright-handler
-- Edge Function (service role), so balances / history can't be edited from the app.

create table if not exists public.trading_paper_accounts (
  user_email text primary key,
  starting_balance numeric not null default 10000,
  balance numeric not null default 10000,
  realized_pnl numeric not null default 0,
  fees_paid numeric not null default 0,
  peak_equity numeric not null default 10000,
  halted boolean not null default false,
  halted_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trading_predictions (
  id uuid primary key default gen_random_uuid(),
  user_email text not null,
  symbol text not null,
  timeframe_sec int not null,
  horizon_bars int not null,
  created_at timestamptz not null default now(),
  price_at numeric not null,
  p_up numeric not null,
  p_down numeric not null,
  p_range numeric not null,
  expected_return numeric,
  decision text not null,
  model_version text not null,
  features jsonb,
  test_metrics jsonb,
  resolve_after timestamptz not null,
  resolved_at timestamptz,
  outcome text,
  actual_return numeric
);
create index if not exists trading_predictions_user_idx on public.trading_predictions (user_email, created_at desc);

create table if not exists public.trading_paper_trades (
  id uuid primary key default gen_random_uuid(),
  user_email text not null,
  mode text not null default 'paper' check (mode = 'paper'),
  symbol text not null,
  side text not null check (side in ('long', 'short')),
  qty numeric not null check (qty > 0),
  entry_price numeric not null,
  entry_at timestamptz not null default now(),
  stop_loss numeric not null,
  take_profit numeric not null,
  time_stop_at timestamptz not null,
  exit_price numeric,
  exit_at timestamptz,
  exit_reason text,
  fees numeric not null default 0,
  pnl numeric,
  status text not null default 'open' check (status in ('open', 'closed')),
  model_version text,
  prediction_id uuid,
  reason text,
  idempotency_key text unique
);
create index if not exists trading_paper_trades_user_idx on public.trading_paper_trades (user_email, entry_at desc);

create table if not exists public.trading_risk_settings (
  user_email text primary key,
  settings jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.trading_audit_log (
  id bigserial primary key,
  user_email text,
  action text not null,
  detail jsonb,
  at timestamptz not null default now()
);
create index if not exists trading_audit_log_user_idx on public.trading_audit_log (user_email, at desc);

alter table public.trading_paper_accounts enable row level security;
alter table public.trading_predictions enable row level security;
alter table public.trading_paper_trades enable row level security;
alter table public.trading_risk_settings enable row level security;
alter table public.trading_audit_log enable row level security;

-- Read-own-rows only. No insert / update / delete policies → only the server (service role) writes.
drop policy if exists trading_accounts_read_own on public.trading_paper_accounts;
create policy trading_accounts_read_own on public.trading_paper_accounts
  for select to authenticated using (lower(user_email) = lower(auth.jwt() ->> 'email'));
drop policy if exists trading_predictions_read_own on public.trading_predictions;
create policy trading_predictions_read_own on public.trading_predictions
  for select to authenticated using (lower(user_email) = lower(auth.jwt() ->> 'email'));
drop policy if exists trading_trades_read_own on public.trading_paper_trades;
create policy trading_trades_read_own on public.trading_paper_trades
  for select to authenticated using (lower(user_email) = lower(auth.jwt() ->> 'email'));
drop policy if exists trading_risk_read_own on public.trading_risk_settings;
create policy trading_risk_read_own on public.trading_risk_settings
  for select to authenticated using (lower(user_email) = lower(auth.jwt() ->> 'email'));
-- Audit log: no client access at all.

revoke insert, update, delete on public.trading_paper_accounts, public.trading_predictions,
  public.trading_paper_trades, public.trading_risk_settings, public.trading_audit_log from anon, authenticated;
revoke select on public.trading_paper_accounts, public.trading_predictions,
  public.trading_paper_trades, public.trading_risk_settings, public.trading_audit_log from anon;
