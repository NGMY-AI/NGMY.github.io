-- Optional: stops "[users] synced with removed columns" warnings in debug console.
-- Run once in Supabase SQL Editor.

alter table public.users add column if not exists "canSellOnStore" boolean default false;
alter table public.users add column if not exists "clockInPenaltyPercent" double precision default 0;
alter table public.users add column if not exists "isApprovedHelper" boolean default false;
alter table public.users add column if not exists "isApprovedWorker" boolean default false;
alter table public.users add column if not exists "isAuthorizedRegistrar" boolean default false;
alter table public.users add column if not exists "pendingInvestmentName" text;
alter table public.users add column if not exists "pendingInvestmentAmount" double precision;
alter table public.users add column if not exists "pendingInvestmentRoi" double precision;
alter table public.users add column if not exists "referredByCode" text default '';
alter table public.users add column if not exists "savedBitcoinAddress" text default '';
alter table public.users add column if not exists "savedCashAppTag" text default '';
alter table public.users add column if not exists "savedZelleInfo" text default '';

alter table public.announcements add column if not exists "videoUrl" text;
