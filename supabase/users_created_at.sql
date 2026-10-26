-- Sign-up time for every account, so the admin Users list can show the newest sign-ups first.
alter table public.users add column if not exists created_at timestamptz default now();

-- Give existing accounts their real sign-up time from the login system.
update public.users u
set created_at = a.created_at
from auth.users a
where lower(a.email) = lower(u.email)
  and (u.created_at is null or u.created_at > a.created_at);

create index if not exists users_created_at_idx on public.users (created_at desc);
