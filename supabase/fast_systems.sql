-- Signal Grid fast systems (Options, Scalper) — paper only. Run once in Supabase → SQL Editor.
-- Each system has its own state (Start/Stop, the one open pretend position, brakes), its own log and its own days.
-- A pg_cron job calls the bright-handler every minute (exit checks every 1 minute, the 30-minute hard close).

create table if not exists public.ngmy_fast_state (
  id text primary key,                 -- 'options' or 'scalper'
  enabled boolean not null default false,
  shadow jsonb,                        -- the one open pretend position, or null
  total_pnl numeric not null default 0,
  brake_paused boolean not null default false,
  brake_reason text,
  last_signal_key text,
  last_mark jsonb,                     -- the open position priced at the last check
  last_note text,
  last_note_at timestamptz,
  last_tick_at timestamptz,
  updated_at timestamptz not null default now()
);
insert into public.ngmy_fast_state (id) values ('options'), ('scalper') on conflict (id) do nothing;

create table if not exists public.ngmy_fast_log (
  id bigserial primary key,
  system text not null,
  created_at timestamptz not null default now(),
  et_time text,
  kind text,
  asset text,
  price numeric,
  decision text,
  reason text,
  details jsonb
);
create index if not exists ngmy_fast_log_system_id on public.ngmy_fast_log (system, id desc);

create table if not exists public.ngmy_fast_days (
  system text not null,
  et_day text not null,
  trades int not null default 0,
  day_pnl numeric not null default 0,
  primary key (system, et_day)
);

alter table public.ngmy_fast_state enable row level security;
alter table public.ngmy_fast_log enable row level security;
alter table public.ngmy_fast_days enable row level security;
revoke all on public.ngmy_fast_state from anon, authenticated;
revoke all on public.ngmy_fast_log from anon, authenticated;
revoke all on public.ngmy_fast_days from anon, authenticated;

-- Every minute. It uses the same secret token as the main agent's job and does nothing while both systems are stopped.
do $$
begin
  if exists (select 1 from cron.job where jobname = 'ngmy-fast-systems') then
    perform cron.unschedule('ngmy-fast-systems');
  end if;
end $$;

select cron.schedule(
  'ngmy-fast-systems',
  '* * * * *',
  $job$
  select net.http_post(
    url := 'https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/bright-handler',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object('a', 'y9', 'token', (select cron_token from public.ngmy_alpaca_agent_state where id = 1)),
    timeout_milliseconds := 30000
  );
  $job$
);

-- Nov 24, 2026 (20 trades a day): each day's starting strength and what it learned that morning, and what kept
-- the checks from trading (for the plain-words reason when a day ends below 20).
alter table public.ngmy_fast_days add column if not exists start_pct numeric;
alter table public.ngmy_fast_days add column if not exists learned text;
alter table public.ngmy_fast_days add column if not exists blocks jsonb not null default '{}'::jsonb;
