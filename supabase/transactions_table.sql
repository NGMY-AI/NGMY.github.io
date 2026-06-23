-- NGMY wallet transactions (deposits, withdrawals, admin adjustments)
-- Run in Supabase → SQL Editor if deposit/withdraw approvals do not sync.
-- Safe to run more than once (skips realtime if already published).

create table if not exists public.transactions (
  id text primary key,
  "userEmail" text not null default '',
  amount double precision not null default 0,
  type integer not null default 0,
  method integer not null default 0,
  "sourceDetails" text,
  "screenshotPath" text,
  "verificationCode" text,
  status integer not null default 0,
  timestamp text not null default ''
);

create index if not exists transactions_user_email_idx on public.transactions ("userEmail");
create index if not exists transactions_status_idx on public.transactions (status);
create index if not exists transactions_timestamp_idx on public.transactions (timestamp desc);

alter table public.transactions enable row level security;

drop policy if exists "transactions_read" on public.transactions;
drop policy if exists "transactions_insert" on public.transactions;
drop policy if exists "transactions_update" on public.transactions;
drop policy if exists "transactions_delete" on public.transactions;

create policy "transactions_read" on public.transactions for select using (true);
create policy "transactions_insert" on public.transactions for insert with check (true);
create policy "transactions_update" on public.transactions for update using (true);
create policy "transactions_delete" on public.transactions for delete using (true);

-- Realtime: other users + admin see approvals immediately (no error if already added)
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'transactions'
  ) then
    alter publication supabase_realtime add table public.transactions;
  end if;
end $$;
