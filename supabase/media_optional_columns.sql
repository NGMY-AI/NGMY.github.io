-- NGMY Media Hub — optional columns + realtime (run after media_tables.sql)

-- Fixes "Uploaded to storage but database sync failed" on posts.



alter table public.media add column if not exists url text;

alter table public.media add column if not exists type text;

alter table public.media add column if not exists data jsonb default '{}'::jsonb;

alter table public.media add column if not exists updated_at timestamptz default now();



alter table public.media add column if not exists "taggedUsers" jsonb default '[]'::jsonb;

alter table public.media add column if not exists "mediaAspectRatio" double precision;

alter table public.media add column if not exists "externalLink" text default '';

alter table public.media add column if not exists "previewSeconds" integer default 0;

alter table public.media add column if not exists "continuePrice" double precision default 0;

alter table public.media add column if not exists "watchReward" double precision default 0;

alter table public.media add column if not exists "watchRequiredSeconds" integer default 0;

alter table public.media add column if not exists "rewardedViewers" jsonb default '[]'::jsonb;

alter table public.media add column if not exists monetization jsonb default '{}'::jsonb;



-- Realtime: new posts + pending wallet requests reach admins/other users (safe to re-run)

do $$
declare
  t text;
begin
  foreach t in array array['media', 'transactions'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

