-- Merge duplicate Supabase Auth users that share the same email (Google + GitHub + email OTP).
-- Run once in Supabase → SQL Editor. Required for same-email OAuth login on ngmy.org.
--
-- Keeps the account with the most linked identities (then oldest). Removes extras so
-- Supabase automatic identity linking can attach Google/GitHub to one user.

create or replace function public.ngmy_reconcile_auth_by_email(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = auth, public
as $$
declare
  v_email text := lower(trim(coalesce(p_email, '')));
  v_primary_id uuid;
  v_deleted int := 0;
  v_row record;
begin
  if v_email = '' or position('@' in v_email) = 0 then
    return jsonb_build_object('ok', false, 'error', 'Invalid email');
  end if;

  select u.id
    into v_primary_id
  from auth.users u
  left join lateral (
    select count(*)::int as cnt from auth.identities i where i.user_id = u.id
  ) ic on true
  where lower(trim(coalesce(u.email, ''))) = v_email
    and coalesce(u.is_sso_user, false) = false
  order by coalesce(ic.cnt, 0) desc, u.created_at asc
  limit 1;

  if v_primary_id is null then
    return jsonb_build_object(
      'ok', true,
      'merged', 0,
      'message', 'No auth user for email'
    );
  end if;

  for v_row in
    select u.id
    from auth.users u
    where lower(trim(coalesce(u.email, ''))) = v_email
      and coalesce(u.is_sso_user, false) = false
      and u.id <> v_primary_id
  loop
    delete from auth.users where id = v_row.id;
    v_deleted := v_deleted + 1;
  end loop;

  return jsonb_build_object(
    'ok', true,
    'merged', v_deleted,
    'primaryId', v_primary_id,
    'message', case
      when v_deleted > 0 then 'Duplicate auth accounts removed'
      else 'No duplicate auth accounts'
    end
  );
exception
  when others then
    return jsonb_build_object('ok', false, 'error', SQLERRM);
end;
$$;

revoke all on function public.ngmy_reconcile_auth_by_email(text) from public;
grant execute on function public.ngmy_reconcile_auth_by_email(text) to anon, authenticated, service_role;
