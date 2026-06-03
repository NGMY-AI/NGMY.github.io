-- Civic Registry user profile fields (run once in Supabase SQL Editor)
alter table public.users add column if not exists "isAuthorizedRegistrar" boolean default false;
alter table public.users add column if not exists "isCivicRegistryAdmin" boolean default false;
alter table public.users add column if not exists "civicRegistryStateSwitchesUsed" integer default 0;
alter table public.users add column if not exists "civicRegistryAnchorState" text default '';
