-- Job Marketplace — run once in Supabase SQL Editor
alter table public.config add column if not exists "jobPosts" jsonb default '[]'::jsonb;
alter table public.config add column if not exists "jobWorkerApplications" jsonb default '[]'::jsonb;
