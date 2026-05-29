-- NGMY Store: run in Supabase SQL Editor (Dashboard → SQL → New query)
-- Keeps listings and buyer messages synced across devices.

create table if not exists public.store_listings (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.store_inquiries (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists store_listings_updated_at_idx on public.store_listings (updated_at desc);
create index if not exists store_inquiries_updated_at_idx on public.store_inquiries (updated_at desc);

alter table public.store_listings enable row level security;
alter table public.store_inquiries enable row level security;

-- App uses anon key today; allow read/write for all users (marketplace sync).
-- Tighten policies later if you add per-user auth rules.

drop policy if exists "store_listings_read" on public.store_listings;
drop policy if exists "store_listings_write" on public.store_listings;
drop policy if exists "store_listings_update" on public.store_listings;
drop policy if exists "store_listings_delete" on public.store_listings;
drop policy if exists "store_inquiries_read" on public.store_inquiries;
drop policy if exists "store_inquiries_write" on public.store_inquiries;
drop policy if exists "store_inquiries_update" on public.store_inquiries;
drop policy if exists "store_inquiries_delete" on public.store_inquiries;

create policy "store_listings_read" on public.store_listings for select using (true);
create policy "store_listings_write" on public.store_listings for insert with check (true);
create policy "store_listings_update" on public.store_listings for update using (true);
create policy "store_listings_delete" on public.store_listings for delete using (true);

create policy "store_inquiries_read" on public.store_inquiries for select using (true);
create policy "store_inquiries_write" on public.store_inquiries for insert with check (true);
create policy "store_inquiries_update" on public.store_inquiries for update using (true);
create policy "store_inquiries_delete" on public.store_inquiries for delete using (true);

-- Optional: add JSON columns on config for backup mirror
alter table public.config add column if not exists storeListings jsonb default '[]'::jsonb;
alter table public.config add column if not exists storeInquiries jsonb default '[]'::jsonb;
