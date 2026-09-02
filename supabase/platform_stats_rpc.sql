-- NGMY — aggregate-only platform stats (run in SQL Editor).
-- Replaces per-row `users.select('totalProfit')` and a full `transactions` table
-- scan with one server-side aggregate, so individual users' totalProfit/amount
-- values never leave the database once `users`/`transactions` RLS is locked down.
-- Type/status indices match TransactionType/TransactionStatus in lib/main.dart
-- (deposit=0, withdrawal=1; status approved=1) — keep in sync if those enums change.

create or replace function public.ngmy_platform_live_stats()
returns table (
  total_profit numeric,
  platform_users bigint,
  total_volume numeric,
  total_payout numeric
)
language sql
security definer
set search_path = public
stable
as $$
  select
    (select coalesce(sum("totalProfit"), 0) from public.users),
    (select count(*) from public.users),
    (select coalesce(sum(amount), 0) from public.transactions where type = 0 and status = 1),
    (select coalesce(sum(amount), 0) from public.transactions where type = 1 and status = 1);
$$;

revoke all on function public.ngmy_platform_live_stats() from public;
grant execute on function public.ngmy_platform_live_stats() to anon, authenticated, service_role;
