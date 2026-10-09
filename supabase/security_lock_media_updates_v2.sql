-- Security hardening (2026-10-09)
-- 1) media: any signed-in user could UPDATE any post (policy "media_update_authenticated" is
--    `true`, needed so people can like / comment / save others' posts — the app upserts the
--    whole row). A trigger now keeps every owner field unchanged for non-owners and only
--    accepts the social fields (likes, likedBy, savedBy, comments, rewardedViewers).
-- 2) Remove TRUNCATE / TRIGGER / REFERENCES from the public API roles on every public table —
--    TRUNCATE ignores row-level security, and the app never needs any of these.

create or replace function public.ngmy_media_guard_non_owner_update()
returns trigger
language plpgsql
-- SECURITY INVOKER on purpose: current_user must be the real caller (authenticated /
-- service_role). With SECURITY DEFINER it was always the owner, so nothing was guarded.
security invoker
set search_path = public
as $$
declare
  social_keys text[] := array['likes', 'likedBy', 'savedBy', 'comments', 'rewardedViewers'];
  k text;
  merged jsonb;
begin
  -- Server (service role) and the owner / admins can change anything.
  if coalesce(auth.role(), '') = 'service_role'
     or current_user in ('postgres', 'supabase_admin', 'service_role')
     or public.is_ngmy_admin()
     or lower(coalesce(old."userEmail", '')) = public.ngmy_jwt_email() then
    return new;
  end if;

  -- Everyone else: owner fields stay exactly as they were.
  new.id := old.id;
  new.type := old.type;
  new.url := old.url;
  new.title := old.title;
  new.description := old.description;
  new.created_at := old.created_at;
  new."userEmail" := old."userEmail";
  new."videoUrl" := old."videoUrl";
  new."contentType" := old."contentType";
  new.username := old.username;
  new.caption := old.caption;
  new."timestamp" := old."timestamp";
  new."taggedUsers" := old."taggedUsers";
  new."mediaAspectRatio" := old."mediaAspectRatio";
  new."externalLink" := old."externalLink";
  new."previewSeconds" := old."previewSeconds";
  new."continuePrice" := old."continuePrice";
  new."watchReward" := old."watchReward";
  new."watchRequiredSeconds" := old."watchRequiredSeconds";
  new.monetization := old.monetization;

  -- data (jsonb): keep the owner's copy, take only the social keys from the update.
  merged := coalesce(old.data, '{}'::jsonb);
  if jsonb_typeof(new.data) = 'object' then
    foreach k in array social_keys loop
      if new.data ? k then
        merged := merged || jsonb_build_object(k, new.data -> k);
      end if;
    end loop;
  end if;
  new.data := merged;
  return new;
end;
$$;

drop trigger if exists ngmy_media_guard_non_owner_update on public.media;
create trigger ngmy_media_guard_non_owner_update
  before update on public.media
  for each row execute function public.ngmy_media_guard_non_owner_update();

do $$
declare t record;
begin
  for t in
    select c.relname from pg_class c join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relkind in ('r', 'v', 'm', 'p')
  loop
    execute format('revoke truncate, trigger, references on public.%I from anon, authenticated', t.relname);
  end loop;
end $$;

-- New tables created later shouldn't get these either.
alter default privileges in schema public revoke truncate, trigger, references on tables from anon, authenticated;
