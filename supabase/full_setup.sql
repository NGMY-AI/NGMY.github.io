-- NGMY full Supabase setup — run once in SQL Editor

-- ========== STORE ==========
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

alter table public.config add column if not exists storeListings jsonb default '[]'::jsonb;
alter table public.config add column if not exists storeInquiries jsonb default '[]'::jsonb;

-- ========== NEWS + NGMY HELPER AI ==========
create table if not exists public.announcements (
  id text primary key,
  title text not null default '',
  message text not null default '',
  "imageUrl" text,
  timestamp text not null default '',
  "isAi" boolean not null default false,
  "authorEmail" text not null default '',
  "authorUsername" text not null default 'NGMY',
  "postType" text not null default 'official'
);

create index if not exists announcements_timestamp_idx on public.announcements (timestamp desc);

alter table public.announcements enable row level security;

drop policy if exists "announcements_read" on public.announcements;
drop policy if exists "announcements_insert" on public.announcements;
drop policy if exists "announcements_update" on public.announcements;
drop policy if exists "announcements_delete" on public.announcements;

create policy "announcements_read" on public.announcements for select using (true);
create policy "announcements_insert" on public.announcements for insert with check (true);
create policy "announcements_update" on public.announcements for update using (true);
create policy "announcements_delete" on public.announcements for delete using (true);

alter table public.config add column if not exists geminiApiKey text default '';

-- ========== MEDIA HUB ==========
-- Storage: run storage_media_bucket.sql (or paste bucket policies below)
create table if not exists public.media (
  id text primary key,
  "userEmail" text not null default '',
  username text not null default 'User',
  "videoUrl" text not null default '',
  "contentType" text not null default 'video',
  caption text not null default '',
  timestamp text not null default '',
  likes integer not null default 0,
  "likedBy" jsonb not null default '[]'::jsonb,
  "savedBy" jsonb not null default '[]'::jsonb,
  comments jsonb not null default '[]'::jsonb
);

alter table public.media add column if not exists "userEmail" text not null default '';
alter table public.media add column if not exists username text not null default 'User';
alter table public.media add column if not exists "videoUrl" text not null default '';
alter table public.media add column if not exists "contentType" text not null default 'video';
alter table public.media add column if not exists caption text not null default '';
alter table public.media add column if not exists timestamp text not null default '';
alter table public.media add column if not exists likes integer not null default 0;
alter table public.media add column if not exists "likedBy" jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists "savedBy" jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists comments jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists url text;
alter table public.media add column if not exists type text;
alter table public.media add column if not exists data jsonb default '{}'::jsonb;
alter table public.media add column if not exists updated_at timestamptz default now();
alter table public.media add column if not exists created_at timestamptz default now();

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'media' and column_name = 'timestamp'
  ) then
    execute 'create index if not exists media_timestamp_idx on public.media ("timestamp" desc)';
  elsif exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'media' and column_name = 'updated_at'
  ) then
    execute 'create index if not exists media_updated_at_idx on public.media (updated_at desc)';
  end if;
end $$;

alter table public.media enable row level security;

drop policy if exists "media_read" on public.media;
drop policy if exists "media_insert" on public.media;
drop policy if exists "media_update" on public.media;
drop policy if exists "media_delete" on public.media;

create policy "media_read" on public.media for select using (true);
create policy "media_insert" on public.media for insert with check (true);
create policy "media_update" on public.media for update using (true);
create policy "media_delete" on public.media for delete using (true);
