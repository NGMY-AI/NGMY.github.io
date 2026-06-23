-- Run in Supabase SQL Editor if admin dashboard shows no users or wallet requests.
-- Ensures admin app can read all rows (anon key used by Flutter web).
-- Safe to run more than once (skips realtime if tables are already published).

alter table if exists public.users enable row level security;
alter table if exists public.transactions enable row level security;

drop policy if exists "users_read" on public.users;
drop policy if exists "users_insert" on public.users;
drop policy if exists "users_update" on public.users;
drop policy if exists "users_delete" on public.users;

create policy "users_read" on public.users for select using (true);
create policy "users_insert" on public.users for insert with check (true);
create policy "users_update" on public.users for update using (true);
create policy "users_delete" on public.users for delete using (true);

drop policy if exists "transactions_read" on public.transactions;
drop policy if exists "transactions_insert" on public.transactions;
drop policy if exists "transactions_update" on public.transactions;
drop policy if exists "transactions_delete" on public.transactions;

create policy "transactions_read" on public.transactions for select using (true);
create policy "transactions_insert" on public.transactions for insert with check (true);
create policy "transactions_update" on public.transactions for update using (true);
create policy "transactions_delete" on public.transactions for delete using (true);

-- Realtime (ignore if already added — error 42710 "already member of publication")
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'users'
  ) then
    alter publication supabase_realtime add table public.users;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'transactions'
  ) then
    alter publication supabase_realtime add table public.transactions;
  end if;
end $$;
