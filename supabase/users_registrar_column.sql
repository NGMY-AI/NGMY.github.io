-- Authorized Registrar flag on user rows (run once in Supabase SQL Editor)
alter table public.users add column if not exists "isAuthorizedRegistrar" boolean default false;
