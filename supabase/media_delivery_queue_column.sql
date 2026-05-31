-- Media delivery queue for scheduled admin comments/likes/followers
-- Run once in Supabase SQL Editor

alter table public.config add column if not exists "mediaDeliveryQueue" jsonb default '[]'::jsonb;
