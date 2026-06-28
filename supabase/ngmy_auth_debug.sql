-- Read-only diagnostic for the "multiple accounts / same email" GitHub+Google login error.
-- Run once in Supabase -> SQL Editor. Does not delete or modify anything.

create or replace function public.ngmy_debug_auth_by_email(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = auth, public
as $$
declare
  v_email text := lower(trim(coalesce(p_email, '')));
  v_users jsonb;
  v_identities jsonb;
begin
  if v_email = '' or position('@' in v_email) = 0 then
    return jsonb_build_object('ok', false, 'error', 'Invalid email');
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
    'id', u.id,
    'email', u.email,
    'email_confirmed_at', u.email_confirmed_at,
    'created_at', u.created_at,
    'is_sso_user', u.is_sso_user,
    'identity_count', (select count(*) from auth.identities i where i.user_id = u.id)
  )), '[]'::jsonb)
  into v_users
  from auth.users u
  where lower(trim(coalesce(u.email, ''))) = v_email;

  select coalesce(jsonb_agg(jsonb_build_object(
    'id', i.id,
    'user_id', i.user_id,
    'provider', i.provider,
    'identity_email', i.identity_data->>'email',
    'identity_email_verified', i.identity_data->>'email_verified',
    'created_at', i.created_at
  )), '[]'::jsonb)
  into v_identities
  from auth.identities i
  where lower(trim(coalesce(i.identity_data->>'email', ''))) = v_email
     or i.user_id in (select id from auth.users where lower(trim(coalesce(email, ''))) = v_email);

  return jsonb_build_object('ok', true, 'users', v_users, 'identities', v_identities);
end;
$$;

revoke all on function public.ngmy_debug_auth_by_email(text) from public;
grant execute on function public.ngmy_debug_auth_by_email(text) to anon, authenticated, service_role;
