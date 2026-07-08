-- Free unused space after deleting ngmy_settings / Storage blobs.
-- Run in Supabase SQL Editor (Dashboard → SQL).
-- Database Size on the Usage page often does NOT drop until vacuum runs.

vacuum (analyze) public.ngmy_settings;

-- Optional: reclaim more aggressively (may take longer / brief locks)
-- vacuum full public.ngmy_settings;
