-- NGMY Stripe paid-feature access (authoritative cloud record).
-- Run in Supabase SQL Editor after deploying ngmy-stripe-webhook Edge Function.

create table if not exists public.ngmy_stripe_access (
  id bigint generated always as identity primary key,
  email text not null,
  product text not null,
  access_until timestamptz not null,
  stripe_session_id text unique,
  stripe_payment_intent text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint ngmy_stripe_access_email_product unique (email, product)
);

create index if not exists ngmy_stripe_access_email_idx
  on public.ngmy_stripe_access (lower(email));

create index if not exists ngmy_stripe_access_product_idx
  on public.ngmy_stripe_access (product);

alter table public.ngmy_stripe_access enable row level security;

-- NGMY accounts are not Supabase Auth accounts (the app only signs into Supabase
-- anonymously, for storage), so a JWT-email policy can never match and paid access
-- would never restore on a second device. Reads are therefore open, matching every
-- other NGMY table.
drop policy if exists "ngmy_stripe_access_select_own" on public.ngmy_stripe_access;
drop policy if exists "ngmy_stripe_access_read" on public.ngmy_stripe_access;
create policy "ngmy_stripe_access_read"
  on public.ngmy_stripe_access
  for select
  using (true);

-- Deliberately no insert/update/delete policies. The Stripe webhook writes with the
-- service role key, which bypasses RLS, so no client can ever grant itself access.

create or replace function public.ngmy_stripe_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists ngmy_stripe_access_updated_at on public.ngmy_stripe_access;
create trigger ngmy_stripe_access_updated_at
  before update on public.ngmy_stripe_access
  for each row execute function public.ngmy_stripe_touch_updated_at();
