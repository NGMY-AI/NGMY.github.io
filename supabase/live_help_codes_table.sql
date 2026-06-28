-- NGMY Live Help: replaces pure-broadcast pairing (unreliable in production)
-- with a tiny table-backed realtime row. One row exists per active code and
-- is deleted the moment the session ends — it never accumulates history.
-- Run once in Supabase -> SQL Editor.

create table if not exists public.live_help_codes (
  code text primary key,
  status text not null default 'waiting', -- waiting | claimed | ended
  frame_data text,
  draw_points jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists live_help_codes_updated_at_idx on public.live_help_codes (updated_at desc);

alter table public.live_help_codes enable row level security;

drop policy if exists "live_help_codes_read" on public.live_help_codes;
drop policy if exists "live_help_codes_write" on public.live_help_codes;
drop policy if exists "live_help_codes_update" on public.live_help_codes;
drop policy if exists "live_help_codes_delete" on public.live_help_codes;

create policy "live_help_codes_read" on public.live_help_codes for select using (true);
create policy "live_help_codes_write" on public.live_help_codes for insert with check (true);
create policy "live_help_codes_update" on public.live_help_codes for update using (true);
create policy "live_help_codes_delete" on public.live_help_codes for delete using (true);

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'live_help_codes'
  ) then
    execute 'alter publication supabase_realtime add table public.live_help_codes';
  end if;
end $$;
