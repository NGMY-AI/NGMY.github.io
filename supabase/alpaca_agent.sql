-- NGMY Alpaca paper-trading agent (Signal Grid) — Version 1, read-only.
-- Run once in Supabase > SQL Editor. Safe to run again.
-- Tables are server-only: RLS on with no policies, so only the bright-handler function (service role) can read or write them.

create extension if not exists pg_cron;
create extension if not exists pg_net;

create table if not exists public.ngmy_alpaca_agent_state (
  id int primary key default 1 check (id = 1),
  enabled boolean not null default false,
  brake_paused boolean not null default false,
  brake_reason text,
  total_pnl numeric not null default 0,
  shadow jsonb,
  snapshot jsonb,
  last_signal_key text,
  last_tick_at timestamptz,
  last_closed_log_at timestamptz,
  cron_token text not null default replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''),
  updated_by text,
  updated_at timestamptz not null default now()
);
insert into public.ngmy_alpaca_agent_state (id) values (1) on conflict (id) do nothing;

create table if not exists public.ngmy_alpaca_agent_log (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  et_time text,
  kind text not null default 'check',
  asset text,
  price numeric,
  fast_ma numeric,
  slow_ma numeric,
  signal text,
  decision text,
  reason text,
  balance numeric,
  total_pnl numeric,
  day_pnl numeric,
  details jsonb
);
create index if not exists ngmy_alpaca_agent_log_newest on public.ngmy_alpaca_agent_log (id desc);

create table if not exists public.ngmy_alpaca_agent_days (
  et_day date primary key,
  asset text,
  start_equity numeric,
  end_equity numeric,
  start_at timestamptz,
  end_at timestamptz,
  day_pnl numeric not null default 0,
  trades int not null default 0,
  end_logged boolean not null default false
);

alter table public.ngmy_alpaca_agent_state enable row level security;
alter table public.ngmy_alpaca_agent_log enable row level security;
alter table public.ngmy_alpaca_agent_days enable row level security;
revoke all on public.ngmy_alpaca_agent_state from anon, authenticated;
revoke all on public.ngmy_alpaca_agent_log from anon, authenticated;
revoke all on public.ngmy_alpaca_agent_days from anon, authenticated;

-- Every 15 minutes, all day every day. The function itself decides (in Eastern Time) whether the
-- market is open, whether it is a weekend (BTC/USD) or a holiday, and skips when the agent is stopped.
do $$
begin
  if exists (select 1 from cron.job where jobname = 'ngmy-alpaca-agent') then
    perform cron.unschedule('ngmy-alpaca-agent');
  end if;
end $$;

select cron.schedule(
  'ngmy-alpaca-agent',
  '*/15 * * * *',
  $job$
  select net.http_post(
    url := 'https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/bright-handler',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object('a', 'y5', 'token', (select cron_token from public.ngmy_alpaca_agent_state where id = 1)),
    timeout_milliseconds := 30000
  );
  $job$
);
