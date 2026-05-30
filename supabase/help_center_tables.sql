-- NGMY Help Center: run in Supabase SQL Editor
-- Helper applications, help requests, and helper businesses sync across devices.

create table if not exists public.help_applications (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.help_requests (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.help_businesses (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists help_applications_updated_at_idx on public.help_applications (updated_at desc);
create index if not exists help_requests_updated_at_idx on public.help_requests (updated_at desc);
create index if not exists help_businesses_updated_at_idx on public.help_businesses (updated_at desc);

alter table public.help_applications enable row level security;
alter table public.help_requests enable row level security;
alter table public.help_businesses enable row level security;

drop policy if exists "help_applications_read" on public.help_applications;
drop policy if exists "help_applications_write" on public.help_applications;
drop policy if exists "help_applications_update" on public.help_applications;
drop policy if exists "help_applications_delete" on public.help_applications;
drop policy if exists "help_requests_read" on public.help_requests;
drop policy if exists "help_requests_write" on public.help_requests;
drop policy if exists "help_requests_update" on public.help_requests;
drop policy if exists "help_requests_delete" on public.help_requests;
drop policy if exists "help_businesses_read" on public.help_businesses;
drop policy if exists "help_businesses_write" on public.help_businesses;
drop policy if exists "help_businesses_update" on public.help_businesses;
drop policy if exists "help_businesses_delete" on public.help_businesses;

create policy "help_applications_read" on public.help_applications for select using (true);
create policy "help_applications_write" on public.help_applications for insert with check (true);
create policy "help_applications_update" on public.help_applications for update using (true);
create policy "help_applications_delete" on public.help_applications for delete using (true);

create policy "help_requests_read" on public.help_requests for select using (true);
create policy "help_requests_write" on public.help_requests for insert with check (true);
create policy "help_requests_update" on public.help_requests for update using (true);
create policy "help_requests_delete" on public.help_requests for delete using (true);

create policy "help_businesses_read" on public.help_businesses for select using (true);
create policy "help_businesses_write" on public.help_businesses for insert with check (true);
create policy "help_businesses_update" on public.help_businesses for update using (true);
create policy "help_businesses_delete" on public.help_businesses for delete using (true);

alter table public.config add column if not exists helpHelperApplications jsonb default '[]'::jsonb;
alter table public.config add column if not exists helpRequests jsonb default '[]'::jsonb;
alter table public.config add column if not exists helpBusinesses jsonb default '[]'::jsonb;
