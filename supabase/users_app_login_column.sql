-- Marks accounts created via the NGMY login / sign-up page (admin Users → Login list).
-- Run once in Supabase SQL Editor.

alter table public.users add column if not exists "isAppLoginAccount" boolean not null default false;
