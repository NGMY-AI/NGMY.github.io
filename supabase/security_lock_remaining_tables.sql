-- NGMY — lock down remaining tables found wide open (family_trees, help_*,
-- live_support_sessions, live_help_codes, ngmy_stripe_access, home_cards, media).
-- Matches the exact query patterns already used by the client (see lib/ngmy_worksheets_storage.dart,
-- lib/ngmy_stripe_cloud.dart, lib/ngmy_home_glass_cards.dart) so nothing functional breaks.

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

-- ── family_trees: own tree, collaborator, explicitly-public tree, or admin ──
-- Matches client reads: .eq('userEmail', email) / .contains('collaboratorEmails', [email]) / .eq('isPrivate', false)
alter table public.family_trees enable row level security;
alter table public.family_trees force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='family_trees'
  loop execute format('drop policy if exists %I on public.family_trees', r.policyname); end loop;
end $$;

create policy "family_trees_select" on public.family_trees
  for select using (
    public.is_ngmy_admin()
    or "isPrivate" is not true
    or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    or public.ngmy_jwt_email() = any (select lower(x) from jsonb_array_elements_text(coalesce("collaboratorEmails", '[]'::jsonb)) as x)
  );

create policy "family_trees_insert" on public.family_trees
  for insert with check (
    public.is_ngmy_admin()
    or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
  );

create policy "family_trees_update" on public.family_trees
  for update using (
    public.is_ngmy_admin()
    or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    or public.ngmy_jwt_email() = any (select lower(x) from jsonb_array_elements_text(coalesce("collaboratorEmails", '[]'::jsonb)) as x)
  ) with check (
    public.is_ngmy_admin()
    or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
    or public.ngmy_jwt_email() = any (select lower(x) from jsonb_array_elements_text(coalesce("collaboratorEmails", '[]'::jsonb)) as x)
  );

create policy "family_trees_delete" on public.family_trees
  for delete using (
    public.is_ngmy_admin()
    or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email()
  );

-- ── help_applications / help_businesses / help_requests: admin only ──
-- Confirmed dead in the shipped app (no live caller of _reloadHelpFromSupabase) —
-- the live Help Center feature already reads/writes via ngmy_settings
-- 'management_operational_lists' (admin-JWT gated). These raw tables held
-- duplicate applicant/business/requester PII with zero access control.
do $$
declare
  t text;
  r record;
begin
  foreach t in array array['help_applications', 'help_businesses', 'help_requests'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);
    for r in execute format('select policyname from pg_policies where schemaname=''public'' and tablename=%L', t)
    loop
      execute format('drop policy if exists %I on public.%I', r.policyname, t);
    end loop;
    execute format('create policy %I on public.%I for all using (public.is_ngmy_admin()) with check (public.is_ngmy_admin())', t || '_admin_only', t);
  end loop;
end $$;

-- ── live_help_codes / live_support_sessions: unused in the shipped app, admin only ──
do $$
declare
  t text;
  r record;
begin
  foreach t in array array['live_help_codes', 'live_support_sessions'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);
    for r in execute format('select policyname from pg_policies where schemaname=''public'' and tablename=%L', t)
    loop
      execute format('drop policy if exists %I on public.%I', r.policyname, t);
    end loop;
    execute format('create policy %I on public.%I for all using (public.is_ngmy_admin()) with check (public.is_ngmy_admin())', t || '_admin_only', t);
  end loop;
end $$;

-- ── ngmy_stripe_access: own row (read-only for client) or admin; writes are webhook/service-role only ──
alter table public.ngmy_stripe_access enable row level security;
alter table public.ngmy_stripe_access force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='ngmy_stripe_access'
  loop execute format('drop policy if exists %I on public.ngmy_stripe_access', r.policyname); end loop;
end $$;

create policy "ngmy_stripe_access_select_own_or_admin" on public.ngmy_stripe_access
  for select using (
    public.is_ngmy_admin()
    or lower(coalesce(email, '')) = public.ngmy_jwt_email()
  );
-- No insert/update/delete policy for anon/authenticated — only service_role (webhook) and admin via dashboard.

-- ── home_cards: own row or admin (matches .eq('userEmail', email) client pattern) ──
alter table public.home_cards enable row level security;
alter table public.home_cards force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='home_cards'
  loop execute format('drop policy if exists %I on public.home_cards', r.policyname); end loop;
end $$;

create policy "home_cards_select_own_or_admin" on public.home_cards
  for select using (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());
create policy "home_cards_insert_own_or_admin" on public.home_cards
  for insert with check (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());
create policy "home_cards_update_own_or_admin" on public.home_cards
  for update using (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email())
  with check (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());
create policy "home_cards_delete_own_or_admin" on public.home_cards
  for delete using (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());

-- ── media: public social feed by design (read stays open) — only close the
-- vandalism gap where ANYONE could delete or fully overwrite anyone else's post.
alter table public.media enable row level security;
alter table public.media force row level security;

do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='media'
  loop execute format('drop policy if exists %I on public.media', r.policyname); end loop;
end $$;

create policy "media_select_public" on public.media for select using (true);
create policy "media_insert_own_or_admin" on public.media
  for insert with check (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());
-- Engagement (likes/comments/savedBy) is written by other users too — keep UPDATE open,
-- but only owner/admin may delete a post outright.
create policy "media_update_public" on public.media for update using (true) with check (true);
create policy "media_delete_own_or_admin" on public.media
  for delete using (public.is_ngmy_admin() or lower(coalesce("userEmail", '')) = public.ngmy_jwt_email());

select tablename, policyname, cmd
from pg_policies
where schemaname = 'public'
  and tablename in ('family_trees','help_applications','help_businesses','help_requests',
                     'live_help_codes','live_support_sessions','ngmy_stripe_access','home_cards','media')
order by tablename, policyname;
