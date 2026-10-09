-- Who each NGMY Advisor is dating — enforced on the server for ALL users.
-- Rules: one partner per advisor at a time; dating ends after 30 days without a message from the
-- partner; after a breakup the same person waits 1 year; max 2 relationships per person+advisor.
create table if not exists public.advisor_relationships (
  id bigserial primary key,
  advisor_id text not null,
  user_email text not null,
  status text not null check (status in ('dating', 'ended')),
  chance int not null default 1,
  started_at timestamptz not null default now(),
  last_user_msg_at timestamptz not null default now(),
  ended_at timestamptz,
  ended_reason text
);
-- The database itself refuses a second active partner for the same advisor.
create unique index if not exists advisor_one_partner on public.advisor_relationships (advisor_id) where status = 'dating';
create index if not exists advisor_rel_pair on public.advisor_relationships (advisor_id, user_email);

alter table public.advisor_relationships enable row level security;
revoke all on public.advisor_relationships from anon, authenticated;
