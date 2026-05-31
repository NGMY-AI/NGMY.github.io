-- Civic Registry admin settings — run once in Supabase SQL Editor
alter table public.config add column if not exists "civicRegistryPin" text default '';
alter table public.config add column if not exists "civicRegistryPinsByState" jsonb default '{}'::jsonb;
alter table public.config add column if not exists "civicRegistrarApplications" jsonb default '[]'::jsonb;
