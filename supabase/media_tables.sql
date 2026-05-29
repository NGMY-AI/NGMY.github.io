-- NGMY Media Hub — run in Supabase SQL Editor
-- REQUIRED: also run storage_media_bucket.sql (creates bucket + upload policies)

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
