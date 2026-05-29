-- NGMY News / Announcements + Gemini key
-- Run in Supabase → SQL → New query

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
alter table public.config add column if not exists gemini_api_key text default '';
