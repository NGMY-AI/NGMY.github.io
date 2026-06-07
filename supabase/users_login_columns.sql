-- NGMY login columns — run once in Supabase SQL Editor if login shows
-- "Could not reach the server" (often caused by missing columns in SELECT).

alter table public.users add column if not exists "passwordHash" text default '';
alter table public.users add column if not exists username text default '';
alter table public.users add column if not exists phone text default '';
alter table public.users add column if not exists "isAdmin" boolean default false;
alter table public.users add column if not exists status text default 'active';
alter table public.users add column if not exists "forceLogout" boolean default false;
alter table public.users add column if not exists "accountBalance" double precision default 0;
alter table public.users add column if not exists "canSellOnStore" boolean default false;
alter table public.users add column if not exists "freeTrialActive" boolean not null default false;
alter table public.users add column if not exists "freeTrialDailyAmount" double precision not null default 0;

alter table public.users enable row level security;

drop policy if exists "users_read" on public.users;
drop policy if exists "users_insert" on public.users;
drop policy if exists "users_update" on public.users;
drop policy if exists "users_delete" on public.users;

create policy "users_read" on public.users for select using (true);
create policy "users_insert" on public.users for insert with check (true);
create policy "users_update" on public.users for update using (true);
create policy "users_delete" on public.users for delete using (true);

-- Realtime (safe to re-run)
do $$
begin
  if exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_name = 'users'
  ) and not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'users'
  ) then
    alter publication supabase_realtime add table public.users;
  end if;
end $$;
