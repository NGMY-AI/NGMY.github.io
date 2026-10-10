-- House & Insurance job board (Instacart-style) and paid plans.
--  • A posted job starts "open" with no worker; the first eligible worker in
--    that state to pick it up becomes its worker ("accepted").
--  • house_plans records Cash App plans: basic ($50/mo, may post jobs) and
--    premium ($65/mo, may also send work straight to a chosen worker).
--    Card payments for basic are already in ngmy_stripe_access (house_insurance).

alter table public.house_work_requests alter column worker_email drop not null;
alter table public.house_work_requests drop constraint if exists house_work_requests_status_check;
alter table public.house_work_requests add constraint house_work_requests_status_check
  check (status in ('open', 'pending', 'accepted', 'declined', 'done', 'cancelled'));
create index if not exists house_work_requests_open_idx
  on public.house_work_requests (lower(state), created_at desc) where status = 'open';

create table if not exists public.house_plans (
  email text not null,
  plan text not null check (plan in ('basic', 'premium')),
  method text not null default 'cashapp',
  access_until timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (email, plan)
);

alter table public.house_plans enable row level security;
