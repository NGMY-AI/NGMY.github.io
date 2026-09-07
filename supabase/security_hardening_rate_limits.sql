-- NGMY — rate limits + remaining abuse hardening
-- Run ALL of this in Supabase → SQL Editor after deploying bright-handler.
-- Additive: does not drop user data. Guest bio/menu SELECT stays public.
-- Writes to public settings keys require a signed-in session (not raw anon key).

begin;

-- ── Helpers (same emails as existing lockdown scripts) ──
create or replace function public.ngmy_jwt_email()
returns text language sql stable as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''));
$$;

create or replace function public.is_ngmy_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.ngmy_jwt_email() in (
    'kbpabloqr@gmail.com',
    'ngumoyaking@gmail.com',
    'appbusiness321@gmail.com',
    'appbusiness84@gmail.com'
  );
$$;

revoke all on function public.ngmy_jwt_email() from public;
revoke all on function public.is_ngmy_admin() from public;
grant execute on function public.ngmy_jwt_email() to anon, authenticated, service_role;
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;

-- ── Rate-limit buckets (Edge / service_role only) ──
create table if not exists public.ngmy_rate_limits (
  bucket text not null,
  k text not null,
  window_start timestamptz not null,
  hits int not null default 0,
  primary key (bucket, k, window_start)
);

alter table public.ngmy_rate_limits enable row level security;
alter table public.ngmy_rate_limits force row level security;

revoke all on public.ngmy_rate_limits from anon, authenticated, public;

create table if not exists public.ngmy_security_events (
  id bigserial primary key,
  "at" timestamptz not null default now(),
  kind text not null,
  detail text not null default '',
  ip text not null default ''
);

alter table public.ngmy_security_events enable row level security;
alter table public.ngmy_security_events force row level security;

create index if not exists ngmy_security_events_at_idx
  on public.ngmy_security_events ("at" desc);
create index if not exists ngmy_security_events_kind_idx
  on public.ngmy_security_events (kind, "at" desc);

revoke all on public.ngmy_security_events from anon, authenticated, public;

create or replace function public.ngmy_consume_rate_limit(
  p_bucket text,
  p_key text,
  p_max integer,
  p_window_seconds integer
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  w timestamptz;
  n int;
begin
  if p_bucket is null or p_key is null or p_max < 1 or p_window_seconds < 1 then
    return false;
  end if;

  if random() < 0.01 then
    delete from public.ngmy_rate_limits
    where window_start < now() - interval '2 days';
    delete from public.ngmy_security_events
    where "at" < now() - interval '30 days';
  end if;

  w := to_timestamp(
    floor(extract(epoch from clock_timestamp()) / p_window_seconds) * p_window_seconds
  );

  insert into public.ngmy_rate_limits(bucket, k, window_start, hits)
  values (left(p_bucket, 80), left(p_key, 200), w, 1)
  on conflict (bucket, k, window_start)
  do update set hits = public.ngmy_rate_limits.hits + 1
  returning hits into n;

  return n <= p_max;
end;
$$;

revoke all on function public.ngmy_consume_rate_limit(text, text, integer, integer) from public;
grant execute on function public.ngmy_consume_rate_limit(text, text, integer, integer) to service_role;

-- Same allowlist as security_lock_settings_allowlist.sql (recreated so this file is standalone).
create or replace function public.ngmy_settings_public_readable(p_key text)
returns boolean
language sql
stable
as $$
  select p_key in (
    'ngmy_popups',
    'ngmy_chat_closed',
    'terms_and_conditions',
    'privacy_policy',
    'investment_plans',
    'ngmy_app_branding',
    'civic_self_enrollment_settings',
    'home_vote_ad_campaign',
    'ngmy_menu_publish_registry',
    'ngmy_bio_publish_registry',
    'ngmy_slides_transfer_qr_stashes_v1'
  )
  or p_key like 'ngmy_menu_pub_%'
  or p_key like 'ngmy_bio_pub_%'
  or p_key like 'ngmy_doc_share_code_v2_%'
  or p_key like 'ngmy_doc_share_stash_v2_%'
  or p_key like 'ngmy_essentials_code_v1_%'
  or p_key like 'ngmy_refcode_%';
$$;

revoke all on function public.ngmy_settings_public_readable(text) from public;
grant execute on function public.ngmy_settings_public_readable(text) to anon, authenticated, service_role;

-- ── ngmy_settings: public keys stay SELECT-able; writes need a session ──
-- Stops anyone with the anon key (no sign-in) from overwriting published bios/menus/codes.
alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

do $$
declare r record;
begin
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'ngmy_settings'
  loop
    execute format('drop policy if exists %I on public.ngmy_settings', r.policyname);
  end loop;
end $$;

create policy "ngmy_settings_select_allowlist"
  on public.ngmy_settings for select
  using (
    public.ngmy_settings_public_readable(key)
    or public.is_ngmy_admin()
  );

create policy "ngmy_settings_insert_allowlist"
  on public.ngmy_settings for insert
  with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_public_readable(key)
      and auth.uid() is not null
    )
  );

create policy "ngmy_settings_update_allowlist"
  on public.ngmy_settings for update
  using (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_public_readable(key)
      and auth.uid() is not null
    )
  )
  with check (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_public_readable(key)
      and auth.uid() is not null
    )
  );

create policy "ngmy_settings_delete_allowlist"
  on public.ngmy_settings for delete
  using (
    public.is_ngmy_admin()
    or (
      public.ngmy_settings_public_readable(key)
      and auth.uid() is not null
    )
  );

-- ── Storage: keep public reads (public URLs). Stop anon wipe/overwrite. ──
update storage.buckets
set
  public = true,
  file_size_limit = 52428800,
  allowed_mime_types = array[
    'image/jpeg', 'image/png', 'image/webp', 'image/gif',
    'image/heic', 'image/heif', 'image/bmp',
    'video/mp4', 'video/quicktime', 'video/webm', 'video/x-msvideo',
    'audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/webm', 'audio/ogg',
    'application/pdf', 'application/octet-stream',
    'application/zip', 'application/x-zip-compressed',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain', 'text/csv', 'text/html', 'application/json'
  ]
where id = 'media';

drop policy if exists "ngmy_media_update" on storage.objects;
drop policy if exists "ngmy_media_delete" on storage.objects;
drop policy if exists "ngmy_media_update_owner" on storage.objects;
drop policy if exists "ngmy_media_delete_owner" on storage.objects;

create policy "ngmy_media_update_owner"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'media'
    and (owner = auth.uid() or public.is_ngmy_admin())
  )
  with check (
    bucket_id = 'media'
    and (owner = auth.uid() or public.is_ngmy_admin())
  );

create policy "ngmy_media_delete_owner"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'media'
    and (owner = auth.uid() or public.is_ngmy_admin())
  );

-- INSERT stays public so uploads still work when Anonymous Auth is off.
-- Size + MIME above cap the abuse. DELETE/UPDATE no longer work with the raw anon key.

-- ── media table: strangers may only change engagement fields ──
create or replace function public.ngmy_media_protect_identity()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if public.is_ngmy_admin() then
    return new;
  end if;
  if public.ngmy_jwt_email() <> ''
     and lower(coalesce(old."userEmail", '')) = public.ngmy_jwt_email() then
    return new;
  end if;
  new.id := old.id;
  new."userEmail" := old."userEmail";
  new.username := old.username;
  new."videoUrl" := old."videoUrl";
  new."contentType" := old."contentType";
  new.caption := old.caption;
  new."timestamp" := old."timestamp";
  return new;
end;
$$;

drop trigger if exists ngmy_media_protect_identity on public.media;
create trigger ngmy_media_protect_identity
  before update on public.media
  for each row
  execute procedure public.ngmy_media_protect_identity();

-- ── Store writes: seller/buyer (or admin) only. Public catalog reads unchanged. ──
alter table public.store_listings enable row level security;
alter table public.store_listings force row level security;
alter table public.store_inquiries enable row level security;
alter table public.store_inquiries force row level security;

drop policy if exists "store_listings_write" on public.store_listings;
drop policy if exists "store_listings_update" on public.store_listings;
drop policy if exists "store_listings_delete" on public.store_listings;
drop policy if exists "store_listings_insert_own" on public.store_listings;
drop policy if exists "store_listings_update_own" on public.store_listings;
drop policy if exists "store_listings_delete_own" on public.store_listings;

create policy "store_listings_insert_own" on public.store_listings
  for insert with check (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
  );

create policy "store_listings_update_own" on public.store_listings
  for update using (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
  ) with check (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
  );

create policy "store_listings_delete_own" on public.store_listings
  for delete using (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
  );

drop policy if exists "store_inquiries_write" on public.store_inquiries;
drop policy if exists "store_inquiries_update" on public.store_inquiries;
drop policy if exists "store_inquiries_delete" on public.store_inquiries;
drop policy if exists "store_inquiries_insert_party" on public.store_inquiries;
drop policy if exists "store_inquiries_update_party" on public.store_inquiries;
drop policy if exists "store_inquiries_delete_party" on public.store_inquiries;

create policy "store_inquiries_insert_party" on public.store_inquiries
  for insert with check (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
    or lower(coalesce(data->>'buyerEmail', data->>'buyer_email', '')) = public.ngmy_jwt_email()
  );

create policy "store_inquiries_update_party" on public.store_inquiries
  for update using (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
    or lower(coalesce(data->>'buyerEmail', data->>'buyer_email', '')) = public.ngmy_jwt_email()
  ) with check (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
    or lower(coalesce(data->>'buyerEmail', data->>'buyer_email', '')) = public.ngmy_jwt_email()
  );

create policy "store_inquiries_delete_party" on public.store_inquiries
  for delete using (
    public.is_ngmy_admin()
    or lower(coalesce(data->>'sellerEmail', data->>'seller_email', '')) = public.ngmy_jwt_email()
    or lower(coalesce(data->>'buyerEmail', data->>'buyer_email', '')) = public.ngmy_jwt_email()
  );

-- ── Retired announcements table: close leftover using(true) writes ──
do $$
declare r record;
begin
  if to_regclass('public.announcements') is null then
    return;
  end if;
  execute 'alter table public.announcements enable row level security';
  execute 'alter table public.announcements force row level security';
  for r in
    select policyname from pg_policies
    where schemaname = 'public' and tablename = 'announcements'
  loop
    execute format('drop policy if exists %I on public.announcements', r.policyname);
  end loop;
  execute 'create policy announcements_select_public on public.announcements for select using (true)';
  execute 'create policy announcements_write_admin on public.announcements for insert with check (public.is_ngmy_admin())';
  execute 'create policy announcements_update_admin on public.announcements for update using (public.is_ngmy_admin()) with check (public.is_ngmy_admin())';
  execute 'create policy announcements_delete_admin on public.announcements for delete using (public.is_ngmy_admin())';
end $$;

commit;

-- Monitoring cheatsheet (run anytime in SQL Editor):
--   select kind, count(*) from public.ngmy_security_events
--     where "at" > now() - interval '24 hours' group by 1 order by 2 desc;
--   select bucket, k, hits, window_start from public.ngmy_rate_limits
--     where window_start > now() - interval '1 hour' and hits > 5
--     order by hits desc;
--   select policyname, cmd from pg_policies
--     where schemaname='public' and tablename='ngmy_settings' order by 1;
