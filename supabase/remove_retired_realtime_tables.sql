-- =============================================================================
-- NGMY: Remove ALL retired features from Supabase (Realtime + data cleanup)
-- Run ONCE in Supabase → SQL Editor → Run
-- Safe to re-run.
--
-- Retired in the app:
--   • News / announcements
--   • Media social feed
--   • NGMY Store marketplace
--   • Platform Statistics (live stats)
--   • Help Center
--   • Job Marketplace
-- =============================================================================

-- 1) Stop Realtime on tables the app no longer listens to
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

-- 2) Empty dedicated tables (delete all rows)
truncate table public.media;
truncate table public.announcements;
truncate table public.store_listings;
truncate table public.store_inquiries;

-- 3) Clear retired JSON still stored inside the main config row
update public.config
set
  "storeListings" = '[]'::jsonb,
  "storeInquiries" = '[]'::jsonb,
  "storeOrders" = '[]'::jsonb,
  "mediaDeliveryQueue" = '[]'::jsonb,
  "jobPosts" = '[]'::jsonb,
  "jobWorkerApplications" = '[]'::jsonb,
  "helpRequests" = '[]'::jsonb,
  "helpBusinesses" = '[]'::jsonb,
  "helpHelperApplications" = '[]'::jsonb,
  "helpCampaignSpendings" = '[]'::jsonb,
  "maxMediaPostsPerWeek" = 0
where true;

-- 4) Remove retired keys from ngmy_settings (key/value storage)
delete from public.ngmy_settings
where key in (
  'platform_live_stats'
);

-- 5) Strip retired lists from management_operational_lists (if that key exists)
update public.ngmy_settings
set value = value
  - 'jobPosts'
  - 'jobWorkerApplications'
  - 'helpRequests'
  - 'helpBusinesses'
  - 'helpHelperApplications'
  - 'helpCampaignSpendings'
  - 'storeListings'
  - 'storeInquiries'
  - 'storeOrders'
where key = 'management_operational_lists';

-- Done. Civic Registry, loans, wallet, games, etc. are NOT touched.
