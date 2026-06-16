-- Optional: server-side referral lookup (run once in Supabase SQL Editor).
-- The app also uses ngmy_settings keys ngmy_refcode_REFXXXXXX for fast lookup.

alter table public.users add column if not exists "referralCode" text default '';

create index if not exists users_referral_code_idx on public.users ("referralCode");

-- Ensure all users are readable for referral resolution (if not already applied):
alter table if exists public.users enable row level security;
drop policy if exists "users_read" on public.users;
create policy "users_read" on public.users for select using (true);
