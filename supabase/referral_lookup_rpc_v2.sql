-- NGMY — referral lookup without opening the `users` table (run in SQL Editor).
-- Replaces referral_lookup_rpc.sql's `using (true)` policy. Returns only the
-- single matching row's non-sensitive columns for a given referral code —
-- safe to expose to anon/authenticated even after `users` is locked to own-row-or-admin.

alter table public.users add column if not exists "referralCode" text default '';

create index if not exists users_referral_code_idx on public.users ("referralCode");

create or replace function public.ngmy_lookup_referrer(p_code text)
returns table (
  email text,
  username text,
  "fullName" text,
  "referralCount" int,
  points int,
  "referredByCode" text,
  "referralCode" text
)
language sql
security definer
set search_path = public
stable
as $$
  select email, username, "fullName", "referralCount", points, "referredByCode", "referralCode"
  from public.users
  where "referralCode" = upper(trim(p_code))
  limit 1;
$$;

revoke all on function public.ngmy_lookup_referrer(text) from public;
grant execute on function public.ngmy_lookup_referrer(text) to anon, authenticated, service_role;
