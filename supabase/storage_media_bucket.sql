-- NGMY Storage: "media" bucket (photos, videos, store images)
-- Run this entire script in Supabase → SQL Editor (once)

-- 1) Bucket (public so signed/public URLs work for all users)
insert into storage.buckets (id, name, public, file_size_limit)
values ('media', 'media', true, 52428800)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit;

-- 2) Storage policies — allow all app users (anon + logged-in) to read/write
drop policy if exists "ngmy_media_select" on storage.objects;
drop policy if exists "ngmy_media_insert" on storage.objects;
drop policy if exists "ngmy_media_update" on storage.objects;
drop policy if exists "ngmy_media_delete" on storage.objects;

create policy "ngmy_media_select"
  on storage.objects for select
  to public
  using (bucket_id = 'media');

create policy "ngmy_media_insert"
  on storage.objects for insert
  to public
  with check (bucket_id = 'media');

create policy "ngmy_media_update"
  on storage.objects for update
  to public
  using (bucket_id = 'media');

create policy "ngmy_media_delete"
  on storage.objects for delete
  to public
  using (bucket_id = 'media');
