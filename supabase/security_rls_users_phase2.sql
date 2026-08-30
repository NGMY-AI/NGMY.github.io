-- NGMY Wave 3 — per-user RLS for users + transactions
-- Run in Supabase → SQL Editor AFTER redeploying bright-handler with session login.
-- After this runs, every user must LOG OUT and LOG IN again (so they get a real Auth JWT).

-- 1) Helper: JWT email + admin allowlist (matches app kNgmyAdminEmails)
create or replace function public.ngmy_jwt_email()
returns text
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''));
$$;

create or replace function public.is_ngmy_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.ngmy_jwt_email() in (
    'kbpabloqr@gmail.com',
    'ngumoyaking@gmail.com',
    'appbusiness321@gmail.com',
    'appbusiness84@gmail.com'
  );
$$;

revoke all on function public.ngmy_jwt_email() from public;
revoke all on function public.is_ngmy_admin() from public;
grant execute on function public.ngmy_jwt_email() to anon, authenticated, service_role;
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;

-- 2) USERS — only own row (or admin)
alter table public.users enable row level security;

drop policy if exists "users_read" on public.users;
drop policy if exists "users_insert" on public.users;
drop policy if exists "users_update" on public.users;
drop policy if exists "users_delete" on public.users;
drop policy if exists "users_select_own_or_admin" on public.users;
drop policy if exists "users_insert_own_or_admin" on public.users;
drop policy if exists "users_update_own_or_admin" on public.users;
drop policy if exists "users_delete_admin_only" on public.users;

create policy "users_select_own_or_admin" on public.users
  for select using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );

create policy "users_insert_own_or_admin" on public.users
  for insert with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );

create policy "users_update_own_or_admin" on public.users
  for update using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  ) with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(email) = public.ngmy_jwt_email())
  );

create policy "users_delete_admin_only" on public.users
  for delete using (public.is_ngmy_admin());

-- 3) TRANSACTIONS — only own rows (or admin)
alter table if exists public.transactions enable row level security;

drop policy if exists "transactions_read" on public.transactions;
drop policy if exists "transactions_insert" on public.transactions;
drop policy if exists "transactions_update" on public.transactions;
drop policy if exists "transactions_delete" on public.transactions;
drop policy if exists "txn_select_own_or_admin" on public.transactions;
drop policy if exists "txn_insert_own_or_admin" on public.transactions;
drop policy if exists "txn_update_own_or_admin" on public.transactions;
drop policy if exists "txn_delete_admin_only" on public.transactions;

create policy "txn_select_own_or_admin" on public.transactions
  for select using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_insert_own_or_admin" on public.transactions
  for insert with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_update_own_or_admin" on public.transactions
  for update using (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  ) with check (
    public.is_ngmy_admin()
    or (public.ngmy_jwt_email() <> '' and lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  );

create policy "txn_delete_admin_only" on public.transactions
  for delete using (public.is_ngmy_admin());

-- 4) Keep passwordHash unreadable to browsers
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated, public;
  end if;
end $$;

select 'Wave 3 RLS applied. Redeploy bright-handler, then every user must log out and log in again.' as next_step;
