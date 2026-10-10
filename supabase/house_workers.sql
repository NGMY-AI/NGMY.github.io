-- House & Insurance workers: people who fix houses, and the work users send them.
-- Only the bright-handler Edge Function (service role) reads or writes these
-- tables, so RLS is on with no policies: phones never touch them directly,
-- and a worker's or client's phone number is only shared after a job is accepted.

create table if not exists public.house_workers (
  id uuid not null default gen_random_uuid() unique,
  email text primary key,
  name text not null,
  phone text not null,
  state text not null,
  city text not null default '',
  skills text[] not null default '{}',
  bio text not null default '',
  photo_url text not null default '',
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'removed')),
  rating_sum integer not null default 0,
  rating_count integer not null default 0,
  jobs_done integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index if not exists house_workers_state_status_idx
  on public.house_workers (lower(state), status);

create table if not exists public.house_work_requests (
  id uuid primary key default gen_random_uuid(),
  client_email text not null,
  client_name text not null,
  client_phone text not null,
  worker_email text not null references public.house_workers(email) on delete cascade,
  state text not null,
  city text not null default '',
  address text not null default '',
  category text not null default '',
  details text not null,
  best_time text not null default '',
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'declined', 'done', 'cancelled')),
  rating integer check (rating between 1 and 5),
  review text not null default '',
  created_at timestamptz not null default now(),
  accepted_at timestamptz,
  done_at timestamptz,
  rated_at timestamptz
);

create index if not exists house_work_requests_worker_idx
  on public.house_work_requests (worker_email, created_at desc);
create index if not exists house_work_requests_client_idx
  on public.house_work_requests (client_email, created_at desc);

alter table public.house_workers enable row level security;
alter table public.house_work_requests enable row level security;
