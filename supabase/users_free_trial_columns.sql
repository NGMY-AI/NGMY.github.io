-- Admin-granted free trial: any-day clock-in, 1-minute fill, no withdrawal fee.
alter table public.users add column if not exists "freeTrialActive" boolean not null default false;
alter table public.users add column if not exists "freeTrialDailyAmount" double precision not null default 0;
