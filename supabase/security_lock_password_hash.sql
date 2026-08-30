-- NGMY security lockdown — password hashes + dangerous RPCs (run in Supabase SQL Editor)
-- Requires Edge Function action verifyPasswordLogin (bright-handler / ngmy-ai-chat).

-- Hide password hashes from browser clients. Service role (Edge Functions) can still read.
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    revoke select ("passwordHash") on table public.users from anon, authenticated;
  end if;
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'password_hash'
  ) then
    revoke select (password_hash) on table public.users from anon, authenticated;
  end if;
end $$;

-- Allow signup / password change to still write the hash (UPDATE only; no SELECT).
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'passwordHash'
  ) then
    grant update ("passwordHash") on table public.users to anon, authenticated;
    grant insert ("passwordHash") on table public.users to anon, authenticated;
  end if;
end $$;

-- Block privilege escalation: clients must not set isAdmin themselves.
-- Admins are gated by server allowlists / Edge Functions.
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'users' and column_name = 'isAdmin'
  ) then
    -- Trigger ignores client attempts to flip isAdmin unless service_role.
    create or replace function public.ngmy_protect_is_admin()
    returns trigger
    language plpgsql
    as $fn$
    begin
      if tg_op = 'INSERT' then
        if auth.role() is distinct from 'service_role' then
          new."isAdmin" := false;
        end if;
        return new;
      end if;
      if tg_op = 'UPDATE' then
        if auth.role() is distinct from 'service_role' then
          new."isAdmin" := old."isAdmin";
        end if;
        return new;
      end if;
      return new;
    end;
    $fn$;

    drop trigger if exists ngmy_protect_is_admin_trg on public.users;
    create trigger ngmy_protect_is_admin_trg
      before insert or update on public.users
      for each row execute function public.ngmy_protect_is_admin();
  end if;
end $$;

-- Dangerous security-definer RPCs must not be callable with the anon key.
revoke execute on function public.ngmy_debug_auth_by_email(text) from anon, authenticated, public;
revoke execute on function public.ngmy_reconcile_auth_by_email(text) from anon, authenticated, public;
-- Re-grant only to service_role if the functions exist.
do $$
begin
  if exists (select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
             where n.nspname = 'public' and p.proname = 'ngmy_debug_auth_by_email') then
    grant execute on function public.ngmy_debug_auth_by_email(text) to service_role;
  end if;
  if exists (select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
             where n.nspname = 'public' and p.proname = 'ngmy_reconcile_auth_by_email') then
    grant execute on function public.ngmy_reconcile_auth_by_email(text) to service_role;
  end if;
exception when undefined_function then
  null;
end $$;

comment on column public.users."passwordHash" is
  'Opaque password hash — SELECT revoked from anon/authenticated; verify via Edge Function verifyPasswordLogin.';
