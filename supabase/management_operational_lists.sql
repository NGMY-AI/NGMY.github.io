-- Management Menus (Job Apps, Loan Center, Help, etc.) — run once in Supabase SQL Editor.

-- Ensures config columns exist AND documents the ngmy_settings backup key used by the app.



alter table public.config add column if not exists "jobPosts" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "jobWorkerApplications" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "loanApplications" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "helpHelperApplications" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "helpRequests" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "helpBusinesses" jsonb default '[]'::jsonb;

alter table public.config add column if not exists "civicRegistrarApplications" jsonb default '[]'::jsonb;



-- App also stores authoritative copies under ngmy_settings.key = 'management_operational_lists'

-- (see supabase/ngmy_settings_table.sql for table + RLS).


