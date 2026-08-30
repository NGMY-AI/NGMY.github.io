-- NGMY — Block admin bulk transaction reads via PostgREST.
-- Admins must use Edge action `transactionsFetch` (service role + redaction).
-- Members still read only their own rows.

do $$
declare
  r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'transactions'
  loop
    execute format('drop policy if exists %I on public.transactions', r.policyname);
  end loop;
end $$;

alter table public.transactions enable row level security;
alter table public.transactions force row level security;

create policy "txn_select_own" on public.transactions
  for select using (
    public.ngmy_jwt_email() <> ''
    and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
  );

create policy "txn_insert_own_or_admin" on public.transactions
  for insert with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  );

create policy "txn_update_own_or_admin" on public.transactions
  for update using (
    public.is_ngmy_admin()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  ) with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_jwt_email() <> ''
      and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    )
  );

create policy "txn_delete_admin_only" on public.transactions
  for delete using (public.is_ngmy_admin());

select policyname, cmd, qual
from pg_policies
where schemaname = 'public' and tablename = 'transactions'
order by policyname;
