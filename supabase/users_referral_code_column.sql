-- Referral code lookup (indexed) — matches ngmyReferralCodeForEmail in the app.
alter table public.users add column if not exists "referralCode" text default '';

create index if not exists users_referral_code_idx on public.users ("referralCode");

-- Backfill existing rows (run once in SQL editor if needed):
-- update public.users
-- set "referralCode" = 'REFD' || lpad(abs(hashtext(email))::text, 6, '0')
-- where coalesce("referralCode", '') = '';
