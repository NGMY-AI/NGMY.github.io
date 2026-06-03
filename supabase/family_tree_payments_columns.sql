-- Family tree pricing + photo subscription map (run in Supabase SQL Editor)

alter table public.config add column if not exists "familyTreeCreateFee" double precision default 5;
alter table public.config add column if not exists "familyTreePhotoMonthlyFee" double precision default 15;
alter table public.config add column if not exists "familyTreePhotoAccessUntilByEmail" jsonb default '{}'::jsonb;
