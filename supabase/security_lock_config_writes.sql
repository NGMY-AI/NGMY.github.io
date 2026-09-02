-- NGMY — lock config table writes to admin only (run in SQL Editor).
-- config_update/config_write/config_write_all_* were all `using(true)` with no
-- admin check — anyone with no login could overwrite Terms & Conditions,
-- investment plans, dice-game odds, popups, branding, etc. Every real write
-- call site in the app (main.dart / ngmy_admin_management.dart) is already
-- an admin-only screen, so this closes the hole with zero functional risk.
-- SELECT policies are untouched (already column-grant restricted separately).

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

alter table public.config enable row level security;
alter table public.config force row level security;

drop policy if exists "config_update" on public.config;
drop policy if exists "config_write" on public.config;
drop policy if exists "config_write_all_insert" on public.config;
drop policy if exists "config_write_all_update" on public.config;

create policy "config_update_admin_only" on public.config
  for update using (public.is_ngmy_admin()) with check (public.is_ngmy_admin());
create policy "config_insert_admin_only" on public.config
  for insert with check (public.is_ngmy_admin());

select policyname, cmd from pg_policies where schemaname = 'public' and tablename = 'config' order by policyname;
