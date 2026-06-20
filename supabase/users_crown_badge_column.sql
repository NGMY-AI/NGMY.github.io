-- Crown badge (king/queen) shown on the clock-in name tag. Run once in Supabase SQL Editor.

alter table public.users add column if not exists "crownBadge" text not null default '';
alter table public.users add column if not exists "freeFixCredit" double precision not null default 0;
