-- Free NGMY Advisors minutes per ACCOUNT, kept on the server. Only ever goes up — logging out,
-- clearing the browser, reinstalling or switching phones can't reset it. Server-only access.
create table if not exists public.advisor_free_time (
  user_email text primary key,
  used_seconds int not null default 0 check (used_seconds >= 0),
  updated_at timestamptz not null default now()
);
alter table public.advisor_free_time enable row level security;
revoke all on public.advisor_free_time from anon, authenticated;
