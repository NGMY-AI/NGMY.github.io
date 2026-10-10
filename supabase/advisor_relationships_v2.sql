-- v2: a USER can only date one advisor at a time, and advisors aren't "easy to get":
-- they only say yes after real conversation (message count + days talking).
create unique index if not exists advisor_one_advisor_per_user
  on public.advisor_relationships (user_email) where status = 'dating';

create table if not exists public.advisor_rapport (
  advisor_id text not null,
  user_email text not null,
  messages int not null default 0,
  first_at timestamptz not null default now(),
  last_at timestamptz not null default now(),
  primary key (advisor_id, user_email)
);
alter table public.advisor_rapport enable row level security;
revoke all on public.advisor_rapport from anon, authenticated;
