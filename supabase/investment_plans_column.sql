-- Run in Supabase SQL Editor so admin-created investment plans sync to all users.
alter table public.config add column if not exists "investmentPlans" jsonb default '[]'::jsonb;
