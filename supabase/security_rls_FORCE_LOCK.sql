-- NGMY FORCE LOCK — run this EXACTLY in Supabase SQL Editor
-- This removes EVERY policy on users + transactions, then adds only secure ones.
-- If anything fails, copy the red error text and send it.

begin;

-- Helpers
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

-- Drop ALL existing policies on users (critical — leftover "using (true)" keeps table open)
do $$
declare
  r record;
begin
  for r in
    select policyname
    from pg_policies
    where schemaname = 'public' and tablename = 'users'
  loop
    execute format('drop policy if exists %I on public.users', r.policyname);
  end loop;
end $$;

alter table public.users enable row level security;
alter table public.users force row level security;

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

-- Drop ALL existing policies on transactions
do $$
declare
  r record;
begin
  for r in
    select policyname
    from pg_policies
    where schemaname = 'public' and tablename = 'transactions'
  loop
    execute format('drop policy if exists %I on public.transactions', r.policyname);
  end loop;
end $$;

alter table public.transactions enable row level security;
alter table public.transactions force row level security;

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

-- Hide password hashes from browser roles
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated, public;
  end if;
end $$;

commit;

-- Show what policies exist now (should be only the new ones)
select tablename, policyname, cmd
from pg_policies
where schemaname = 'public' and tablename in ('users', 'transactions')
order by tablename, policyname;
