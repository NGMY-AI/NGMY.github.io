-- Civic Registry member enrollment on public.users (run in Supabase SQL Editor)

alter table public.users add column if not exists "isEnrolledInRegistry" boolean default false;
alter table public.users add column if not exists "fullName" text;
alter table public.users add column if not exists "dob" text;
alter table public.users add column if not exists "idType" text;
alter table public.users add column if not exists "registryId" text;
alter table public.users add column if not exists "homeAddress" text;
alter table public.users add column if not exists "city" text;
alter table public.users add column if not exists "room" text;
alter table public.users add column if not exists "helps" integer default 0;
alter table public.users add column if not exists "missed" integer default 0;
