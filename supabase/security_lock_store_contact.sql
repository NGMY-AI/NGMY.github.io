-- NGMY — stop anon REST from listing every user's email/phone.
-- Copy ALL of this into Supabase SQL Editor → Run.

begin;

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

drop view if exists public.users_store_contact;

create or replace function public.ngmy_store_contact(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = public
stable
as $$
declare
  want text := lower(trim(coalesce(p_email, '')));
  rec record;
  allowed boolean := false;
begin
  if want = '' then
    return null;
  end if;

  if public.is_ngmy_admin() or public.ngmy_jwt_email() = want then
    allowed := true;
  else
    begin
      select exists (
        select 1
        from public.store_listings sl
        where lower(coalesce(sl.data->>'sellerEmail', sl.data->>'seller_email', '')) = want
      ) into allowed;
    exception when undefined_table then
      allowed := false;
    end;
  end if;

  if not allowed then
    return null;
  end if;

  select u.email, u.username, u.phone, u."profilePicturePath" as pic
  into rec
  from public.users u
  where lower(u.email) = want
  limit 1;

  if not found then
    return null;
  end if;

  return jsonb_build_object(
    'email', rec.email,
    'username', rec.username,
    'phone', rec.phone,
    'profilePicturePath', rec.pic
  );
end;
$$;

revoke all on function public.ngmy_store_contact(text) from public;
grant execute on function public.ngmy_store_contact(text) to authenticated;

commit;
