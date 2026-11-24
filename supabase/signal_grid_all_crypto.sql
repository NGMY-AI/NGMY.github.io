-- Signal Grid (main agent): all crypto + 20 trades a day (Nov 24, 2026). Run once in Supabase -> SQL Editor.
-- What kept each day's checks from buying (for the plain reason when a day ends below 20), and the pace step logged.
alter table public.ngmy_alpaca_agent_days add column if not exists blocks jsonb not null default '{}'::jsonb;
alter table public.ngmy_alpaca_agent_days add column if not exists pace_level int not null default 0;
