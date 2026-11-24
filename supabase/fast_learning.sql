-- Signal Grid fast systems: 40 trades a day + learning (Nov 24, 2026). Run once in Supabase -> SQL Editor.
-- The learning store: every closed pretend trade in full, with the market conditions at entry and its loss reason.
-- Today's lessons, the morning review, the loss-streak pause and the pace step live on each day's row.

create table if not exists public.ngmy_fast_trades (
  id bigserial primary key,
  system text not null,
  market text not null,
  direction text not null default 'up',
  et_day text not null,
  entry_at timestamptz,
  exit_at timestamptz,
  hold_min numeric,
  entry_price numeric,
  exit_price numeric,
  pnl numeric not null default 0,
  exit_reason text,
  loss_reason text,
  loss_text text,
  conditions jsonb,
  option jsonb,
  max_hold int,
  created_at timestamptz not null default now()
);
create index if not exists ngmy_fast_trades_system_id on public.ngmy_fast_trades (system, id desc);
alter table public.ngmy_fast_trades enable row level security;
revoke all on public.ngmy_fast_trades from anon, authenticated;

alter table public.ngmy_fast_days add column if not exists review jsonb;
alter table public.ngmy_fast_days add column if not exists lessons jsonb not null default '[]'::jsonb;
alter table public.ngmy_fast_days add column if not exists pause_until timestamptz;
alter table public.ngmy_fast_days add column if not exists step_up_next boolean not null default false;
alter table public.ngmy_fast_days add column if not exists pace_level int not null default 0;

alter table public.ngmy_fast_state add column if not exists watch jsonb not null default '[]'::jsonb;
