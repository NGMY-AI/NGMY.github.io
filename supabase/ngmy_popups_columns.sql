-- NGMY admin pop-up settings — run in Supabase SQL Editor
alter table public.config add column if not exists "ngmyPopups" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "ngmyVideoPopups" jsonb default '[]'::jsonb;
