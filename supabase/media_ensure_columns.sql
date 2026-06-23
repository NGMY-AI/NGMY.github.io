-- NGMY Media — ensure columns exist on legacy media tables (safe to re-run).
-- Run before media indexes, or include via SUPABASE_SETUP.sql / media_tables.sql.

alter table public.media add column if not exists "userEmail" text not null default '';
alter table public.media add column if not exists username text not null default 'User';
alter table public.media add column if not exists "videoUrl" text not null default '';
alter table public.media add column if not exists "contentType" text not null default 'video';
alter table public.media add column if not exists caption text not null default '';
alter table public.media add column if not exists timestamp text not null default '';
alter table public.media add column if not exists likes integer not null default 0;
alter table public.media add column if not exists "likedBy" jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists "savedBy" jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists comments jsonb not null default '[]'::jsonb;
alter table public.media add column if not exists url text;
alter table public.media add column if not exists type text;
alter table public.media add column if not exists data jsonb default '{}'::jsonb;
alter table public.media add column if not exists updated_at timestamptz default now();
alter table public.media add column if not exists created_at timestamptz default now();

-- Backfill timestamp from legacy date columns when empty.
update public.media
set timestamp = to_char(created_at at time zone 'utc', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
where (timestamp is null or trim(timestamp) = '')
  and created_at is not null;

update public.media
set timestamp = to_char(updated_at at time zone 'utc', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
where (timestamp is null or trim(timestamp) = '')
  and updated_at is not null;

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'media' and column_name = 'timestamp'
  ) then
    execute 'create index if not exists media_timestamp_idx on public.media ("timestamp" desc)';
  elsif exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'media' and column_name = 'updated_at'
  ) then
    execute 'create index if not exists media_updated_at_idx on public.media (updated_at desc)';
  elsif exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'media' and column_name = 'created_at'
  ) then
    execute 'create index if not exists media_created_at_idx on public.media (created_at desc)';
  end if;
end $$;
