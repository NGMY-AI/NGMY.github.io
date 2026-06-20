-- Auto-create a public.users row when someone signs in with Google/GitHub/OAuth.
-- Run once in Supabase SQL Editor (run users_app_login_column.sql first if needed).

create unique index if not exists users_email_unique on public.users (email);

create or replace function public.ngmy_sync_auth_user_to_public_users()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text := lower(trim(coalesce(new.email, '')));
  v_name text := trim(coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''));
begin
  if v_email = '' then
    return new;
  end if;
  insert into public.users (email, username, status, "isAppLoginAccount")
  values (
    v_email,
    case when v_name <> '' then v_name else split_part(v_email, '@', 1) end,
    'active',
    true
  )
  on conflict (email) do update set
    username = case
      when excluded.username <> split_part(excluded.email, '@', 1) then excluded.username
      else public.users.username
    end;
  return new;
end;
$$;

drop trigger if exists ngmy_on_auth_user_created on auth.users;
create trigger ngmy_on_auth_user_created
  after insert on auth.users
  for each row execute function public.ngmy_sync_auth_user_to_public_users();
