-- Enable realtime for media comments/likes and user follower counts.
-- Run once in Supabase SQL Editor after media_tables.sql and users_media_profile_columns.sql

alter publication supabase_realtime add table public.media;
alter publication supabase_realtime add table public.users;
