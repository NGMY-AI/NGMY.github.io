-- NGMY Admin Dashboard — run once in Supabase SQL Editor if admin saves revert.
-- Also run: ngmy_settings_table.sql, legal_content_columns.sql, game_center_settings_columns.sql,
-- transactions_table.sql, users_transactions_admin_read.sql

create table if not exists public.ngmy_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.ngmy_settings enable row level security;
drop policy if exists "ngmy_settings_read" on public.ngmy_settings;
drop policy if exists "ngmy_settings_write" on public.ngmy_settings;
drop policy if exists "ngmy_settings_update" on public.ngmy_settings;
create policy "ngmy_settings_read" on public.ngmy_settings for select using (true);
create policy "ngmy_settings_write" on public.ngmy_settings for insert with check (true);
create policy "ngmy_settings_update" on public.ngmy_settings for update using (true);

alter table public.config add column if not exists "termsAndConditions" text default '';
alter table public.config add column if not exists "privacyPolicy" text default '';
alter table public.config add column if not exists "investmentPlans" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "loanApplications" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "jobWorkerApplications" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "gameTimeLimits" jsonb default '{}'::jsonb;
alter table public.config add column if not exists "diceSettings" jsonb default '{}'::jsonb;

insert into public.config (id, "termsAndConditions", "privacyPolicy", "investmentPlans")
values ('1', '', '', '[]'::jsonb)
on conflict (id) do nothing;

alter table public.config enable row level security;
drop policy if exists "config_read" on public.config;
drop policy if exists "config_write" on public.config;
drop policy if exists "config_update" on public.config;
create policy "config_read" on public.config for select using (true);
create policy "config_write" on public.config for insert with check (true);
create policy "config_update" on public.config for update using (true);
