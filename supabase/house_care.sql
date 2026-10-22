-- House Care: the NGMY membership for House & Insurance.
--
--  • house_subscriptions: one row per member. The signed agreement (the term they chose, their
--    signature and a selfie) lives here, and the admin dashboard reads it. The next payment date
--    comes from the paid plan (house_plans / card payments), so it is not edited by hand.
--  • house_work_requests: labor_free marks work posted by a paid member (materials only);
--    materials_cost / labor_cost are what the worker records when the work is done.
--
-- Run this once in the Supabase SQL Editor. house_jobs_and_plans.sql and house_booking_slots.sql
-- must have been run before it.

create table if not exists public.house_subscriptions (
  email text primary key,
  full_name text not null default '',
  term_years integer not null check (term_years between 1 and 4),
  state text not null default '',
  signature_url text not null default '',
  selfie_url text not null default '',
  agreement_version text not null default 'v1',
  agreed_at timestamptz not null default now(),
  started_at timestamptz,
  next_payment_due timestamptz,
  status text not null default 'pending'
    check (status in ('pending', 'active', 'lapsed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Only the bright-handler Edge Function (service role) reads or writes it.
alter table public.house_subscriptions enable row level security;

alter table public.house_work_requests add column if not exists labor_free boolean not null default false;
alter table public.house_work_requests add column if not exists materials_cost numeric;
alter table public.house_work_requests add column if not exists labor_cost numeric;

-- What NGMY paid the worker for a House Care job (set by an admin); a worker's monthly record adds this to labor_cost.
alter table public.house_work_requests add column if not exists worker_pay numeric;

-- Cash App payments for House Care / House plans: a member says they sent it, an admin checks the money and approves.
create table if not exists public.house_care_payments (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  plan text not null default 'basic',
  term boolean not null default false,
  amount numeric not null default 0,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  decided_at timestamptz,
  decided_by text
);
create index if not exists house_care_payments_email_idx on public.house_care_payments (email, status);
alter table public.house_care_payments enable row level security;
