-- Paste into the Supabase SQL Editor and press Run (safe to run more than once).
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
notify pgrst, 'reload schema';

-- The payment code (written in the Cash App note) and the screenshot of the payment.
alter table public.house_care_payments add column if not exists code text not null default '';
alter table public.house_care_payments add column if not exists proof_url text not null default '';
notify pgrst, 'reload schema';
