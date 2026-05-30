-- NGMY Store orders + tracking (run once in Supabase SQL Editor)
alter table public.config add column if not exists "storeOrders" jsonb default '[]'::jsonb;
