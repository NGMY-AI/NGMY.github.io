-- Cash App payments for the advisors' live browser ($5.99 = 2 hours of browser time, kept for a week).
-- Run this once in the Supabase SQL editor (it is safe to run again).
-- Members send the code and a screenshot of the Cash App payment; an admin checks the money and approves it.
-- After an approval the member's phone claims it (claimed = true) and gets its 2 hours.

create table if not exists public.browser_payments (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  amount numeric not null default 5.99,
  status text not null default 'pending',          -- pending | approved | rejected
  code text,
  proof_url text,
  claimed boolean not null default false,
  created_at timestamptz not null default now(),
  decided_at timestamptz,
  decided_by text
);

create index if not exists browser_payments_email_idx on public.browser_payments (email, status);
alter table public.browser_payments enable row level security;
-- No policies on purpose: phones never read this table. Only the Edge Function (service role) does.
