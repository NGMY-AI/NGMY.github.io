-- NGMY Trading Academy (Signal Grid): each member's lesson and quiz progress.
-- Finishing all 10 lessons (all_done) unlocks the signal alerts for that member.
-- Server-only table: only the bright-handler function (service role) reads or writes it.
create table if not exists public.ngmy_trading_academy (
  email text primary key,
  progress jsonb not null default '{}'::jsonb,
  all_done boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.ngmy_trading_academy enable row level security;
revoke all on public.ngmy_trading_academy from anon, authenticated;
