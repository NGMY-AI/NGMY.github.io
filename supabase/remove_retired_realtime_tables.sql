-- Retire announcements, media feed, and store marketplace from Supabase Realtime.
-- Run once in Supabase SQL Editor after deploying the app update.
-- Safe to re-run.

-- Stop broadcasting changes on retired tables (saves Realtime quota).
do $$
declare
  t text;
  tables text[] := array[
    'media',
    'announcements',
    'store_listings',
    'store_inquiries'
  ];
begin
  foreach t in array tables loop
    if exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime'
        and schemaname = 'public'
        and tablename = t
    ) then
      execute format('alter publication supabase_realtime drop table public.%I', t);
      raise notice 'Dropped % from supabase_realtime', t;
    end if;
  end loop;
end $$;

-- Delete all rows so nothing keeps syncing.
truncate table public.media;
truncate table public.announcements;
truncate table public.store_listings;
truncate table public.store_inquiries;

-- Optional: remove store data still embedded in config (orders/inquiries JSON).
update public.config
set
  "storeListings" = '[]'::jsonb,
  "storeInquiries" = '[]'::jsonb,
  "storeOrders" = '[]'::jsonb,
  "mediaDeliveryQueue" = '[]'::jsonb
where true;

-- Optional hard delete (uncomment only if you are sure nothing else references these tables).
-- drop table if exists public.media cascade;
-- drop table if exists public.announcements cascade;
-- drop table if exists public.store_listings cascade;
-- drop table if exists public.store_inquiries cascade;
