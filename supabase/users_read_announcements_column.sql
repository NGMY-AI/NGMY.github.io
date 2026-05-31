-- Sync read news/announcement IDs across all devices for the same account.
-- Run once in Supabase SQL Editor.

alter table public.users add column if not exists "readAnnouncementIds" jsonb not null default '[]'::jsonb;
