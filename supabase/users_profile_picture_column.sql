-- Profile photo URL for cross-device sync (Supabase Storage ref or public URL).
-- Run once in Supabase SQL Editor.

alter table public.users add column if not exists "profilePicturePath" text;
