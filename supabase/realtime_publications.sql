-- Enable Supabase Realtime for NGMY tables (run once in SQL Editor)
-- Required for: admin seeing withdrawal/deposit requests, media feed updates

alter publication supabase_realtime add table public.media;
alter publication supabase_realtime add table public.transactions;
alter publication supabase_realtime add table public.users;
alter publication supabase_realtime add table public.config;
alter publication supabase_realtime add table public.announcements;
