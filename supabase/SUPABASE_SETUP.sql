-- NGMY — paste ONLY this file in Supabase → SQL Editor → Run
-- Do NOT paste PowerShell or git commands here.

-- ========== STORE (shop listings for all users) ==========
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
alter table public.config add column if not exists "geminiApiKey" text default '';
alter table public.config add column if not exists gemini_api_key text default '';

insert into public.config (id, "geminiApiKey", gemini_api_key)
values ('1', '', '')
on conflict (id) do nothing;
alter table public.config add column if not exists "termsAndConditions" text default '';
alter table public.config add column if not exists "privacyPolicy" text default '';
alter table public.config add column if not exists "storeOrders" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "investmentPlans" jsonb default '[]'::jsonb;

-- ========== GLOBAL SETTINGS (legal + investment plans) ==========
create table if not exists public.ngmy_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists ngmy_settings_updated_at_idx on public.ngmy_settings (updated_at desc);

alter table public.ngmy_settings enable row level security;

drop policy if exists "ngmy_settings_read" on public.ngmy_settings;
drop policy if exists "ngmy_settings_write" on public.ngmy_settings;
drop policy if exists "ngmy_settings_update" on public.ngmy_settings;
drop policy if exists "ngmy_settings_delete" on public.ngmy_settings;

create policy "ngmy_settings_read" on public.ngmy_settings for select using (true);
create policy "ngmy_settings_write" on public.ngmy_settings for insert with check (true);
create policy "ngmy_settings_update" on public.ngmy_settings for update using (true);
create policy "ngmy_settings_delete" on public.ngmy_settings for delete using (true);

-- ========== MEDIA HUB ==========
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

create index if not exists media_timestamp_idx on public.media (timestamp desc);

alter table public.media enable row level security;

drop policy if exists "media_read" on public.media;
drop policy if exists "media_insert" on public.media;
drop policy if exists "media_update" on public.media;
drop policy if exists "media_delete" on public.media;

create policy "media_read" on public.media for select using (true);
create policy "media_insert" on public.media for insert with check (true);
create policy "media_update" on public.media for update using (true);
create policy "media_delete" on public.media for delete using (true);

-- ========== STORAGE bucket "media" (uploads) ==========
insert into storage.buckets (id, name, public, file_size_limit)
values ('media', 'media', true, 52428800)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit;

drop policy if exists "ngmy_media_select" on storage.objects;
drop policy if exists "ngmy_media_insert" on storage.objects;
drop policy if exists "ngmy_media_update" on storage.objects;
drop policy if exists "ngmy_media_delete" on storage.objects;

create policy "ngmy_media_select" on storage.objects for select to public using (bucket_id = 'media');
create policy "ngmy_media_insert" on storage.objects for insert to public with check (bucket_id = 'media');
create policy "ngmy_media_update" on storage.objects for update to public using (bucket_id = 'media');
create policy "ngmy_media_delete" on storage.objects for delete to public using (bucket_id = 'media');
