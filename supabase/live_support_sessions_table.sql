-- NGMY Live Support: view-only screen sharing, started by an admin request and
-- requiring the user's explicit accept. Run once in Supabase -> SQL Editor.
-- Self-contained: does not depend on any other script.

create table if not exists public.live_support_sessions (
  id text primary key,
  user_email text not null,
  admin_email text not null,
  admin_name text not null default '',
  status text not null default 'requested', -- requested | accepted | declined | ended
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists live_support_sessions_user_email_idx on public.live_support_sessions (user_email);
create index if not exists live_support_sessions_updated_at_idx on public.live_support_sessions (updated_at desc);

alter table public.live_support_sessions enable row level security;

drop policy if exists "live_support_sessions_read" on public.live_support_sessions;
drop policy if exists "live_support_sessions_write" on public.live_support_sessions;
drop policy if exists "live_support_sessions_update" on public.live_support_sessions;
drop policy if exists "live_support_sessions_delete" on public.live_support_sessions;

create policy "live_support_sessions_read" on public.live_support_sessions for select using (true);
create policy "live_support_sessions_write" on public.live_support_sessions for insert with check (true);
create policy "live_support_sessions_update" on public.live_support_sessions for update using (true);
create policy "live_support_sessions_delete" on public.live_support_sessions for delete using (true);

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'live_support_sessions'
  ) then
    execute 'alter publication supabase_realtime add table public.live_support_sessions';
  end if;
end $$;
