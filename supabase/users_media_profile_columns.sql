-- Media profile fields on users — run in Supabase SQL Editor
alter table public.users add column if not exists "mediaBio" text default '';
alter table public.users add column if not exists "mediaFollowers" jsonb default '[]'::jsonb;
alter table public.users add column if not exists "mediaFollowing" jsonb default '[]'::jsonb;
alter table public.users add column if not exists "mediaHighlights" jsonb default '[]'::jsonb;
alter table public.users add column if not exists "mediaStories" jsonb default '[]'::jsonb;
