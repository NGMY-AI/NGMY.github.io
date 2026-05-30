-- NGMY — global settings (Terms, Privacy, Investment Plans)
-- Run once in Supabase → SQL Editor so admin updates sync to all users.

create table if not exists public.ngmy_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists ngmy_settings_updated_at_idx on public.ngmy_settings (updated_at desc);

alter table public.ngmy_settings enable row level security;

drop policy if exists "ngmy_settings_read" on public.ngmy_settings;
drop policy if exists "ngmy_settings_write" on public.ngmy_settings;
drop policy if exists "ngmy_settings_update" on public.ngmy_settings;
drop policy if exists "ngmy_settings_delete" on public.ngmy_settings;

create policy "ngmy_settings_read" on public.ngmy_settings for select using (true);
create policy "ngmy_settings_write" on public.ngmy_settings for insert with check (true);
create policy "ngmy_settings_update" on public.ngmy_settings for update using (true);
create policy "ngmy_settings_delete" on public.ngmy_settings for delete using (true);

-- Also ensure config columns exist (legacy fallback)
alter table public.config add column if not exists "termsAndConditions" text default '';
alter table public.config add column if not exists "privacyPolicy" text default '';
alter table public.config add column if not exists "investmentPlans" jsonb default '[]'::jsonb;

insert into public.config (id, "termsAndConditions", "privacyPolicy", "investmentPlans")
values (1, '', '', '[]'::jsonb)
on conflict (id) do nothing;

-- Realtime: Dashboard → Database → Publications → supabase_realtime → enable "ngmy_settings"
