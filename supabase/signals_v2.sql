-- Signals v2 (STRICT, Nov 24, 2026). Run once in Supabase → SQL Editor.
-- Every STRONG signal given (all five confirmations), graded WIN or LOSS at its 30-minute expiry, never deleted.
-- Paper signals are the would-be signals kept while the self-brake (WAIT-only) is on.
create table if not exists public.ngmy_signals (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  et_time text,
  et_day text,
  market text not null,
  kind text,
  direction text not null,          -- BUY or SELL
  price numeric not null,
  checks jsonb,                     -- the 5 confirmations, each yes / no in plain words
  explain text,
  paper boolean not null default false,
  grade_at timestamptz not null,
  graded boolean not null default false,
  result text,                      -- WIN or LOSS
  exit_price numeric,
  move_pct numeric
);
create index if not exists ngmy_signals_open on public.ngmy_signals (graded, grade_at);
create index if not exists ngmy_signals_day on public.ngmy_signals (et_day, paper);

create table if not exists public.ngmy_signals_state (
  id int primary key,
  paused boolean not null default false,
  paused_at timestamptz,
  lifted_at timestamptz,
  last_check_at timestamptz
);
insert into public.ngmy_signals_state (id) values (1) on conflict (id) do nothing;

alter table public.ngmy_signals enable row level security;
alter table public.ngmy_signals_state enable row level security;
revoke all on public.ngmy_signals from anon, authenticated;
revoke all on public.ngmy_signals_state from anon, authenticated;
