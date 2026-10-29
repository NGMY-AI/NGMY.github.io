-- NGMY AI gate — run this ONCE in Supabase → SQL Editor, BEFORE deploying the new bright-handler.
-- It adds the durable counters behind the AI limits, the admin settings table, and the provider cooldown.
-- Safe to run again. It does not touch user data. It needs supabase/security_hardening_rate_limits.sql
-- to have been run before (that file creates ngmy_rate_limits and ngmy_security_events).

begin;

-- Anyone-can-change-the-limits is not allowed: only the Edge Function (service role) reads or writes these.
create table if not exists public.ngmy_ai_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now(),
  updated_by text not null default ''
);
alter table public.ngmy_ai_settings enable row level security;
alter table public.ngmy_ai_settings force row level security;
revoke all on public.ngmy_ai_settings from anon, authenticated, public;

-- One row: until when nobody calls the AI provider (it said "429, too many requests").
create table if not exists public.ngmy_ai_state (
  k text primary key,
  until_at timestamptz not null default now()
);
alter table public.ngmy_ai_state enable row level security;
alter table public.ngmy_ai_state force row level security;
revoke all on public.ngmy_ai_state from anon, authenticated, public;

-- Counts several limits at once, all or nothing: when any one is full, none is counted and the
-- answer says which one and how many seconds until it opens. p_entries looks like
-- [{"bucket":"ai_normal_min","key":"<user id>","window":60,"max":20}, ...]
create or replace function public.ngmy_ai_gate(p_entries jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  e jsonb;
  b text;
  kk text;
  win int;
  mx int;
  w timestamptz;
  n int;
begin
  if p_entries is null or jsonb_typeof(p_entries) <> 'array' or jsonb_array_length(p_entries) = 0 then
    return jsonb_build_object('ok', false, 'bucket', 'bad_request', 'key', '', 'retry_after', 60);
  end if;

  -- Lock every counter in a fixed order, so two requests at the same moment cannot both slip through.
  for e in select value from jsonb_array_elements(p_entries) order by value->>'bucket', value->>'key' loop
    perform pg_advisory_xact_lock(hashtext((e->>'bucket') || '|' || (e->>'key')));
  end loop;

  -- Pass 1: is any counter full?
  for e in select value from jsonb_array_elements(p_entries) loop
    b := left(e->>'bucket', 80);
    kk := left(e->>'key', 200);
    win := (e->>'window')::int;
    mx := (e->>'max')::int;
    w := to_timestamp(floor(extract(epoch from clock_timestamp()) / win) * win);
    select hits into n from public.ngmy_rate_limits where bucket = b and k = kk and window_start = w;
    if coalesce(n, 0) >= mx then
      return jsonb_build_object(
        'ok', false, 'bucket', b, 'key', kk,
        'retry_after', greatest(1, ceil(extract(epoch from (w + make_interval(secs => win)) - clock_timestamp()))::int)
      );
    end if;
  end loop;

  -- Pass 2: nothing is full, so count them all.
  for e in select value from jsonb_array_elements(p_entries) loop
    b := left(e->>'bucket', 80);
    kk := left(e->>'key', 200);
    win := (e->>'window')::int;
    w := to_timestamp(floor(extract(epoch from clock_timestamp()) / win) * win);
    insert into public.ngmy_rate_limits(bucket, k, window_start, hits)
    values (b, kk, w, 1)
    on conflict (bucket, k, window_start) do update set hits = public.ngmy_rate_limits.hits + 1;
  end loop;

  if random() < 0.01 then
    delete from public.ngmy_rate_limits where window_start < now() - interval '2 days';
  end if;

  return jsonb_build_object('ok', true);
end;
$$;

create or replace function public.ngmy_ai_cooldown_left()
returns integer
language sql
security definer
set search_path = public
as $$
  select coalesce(greatest(0, ceil(extract(epoch from (max(until_at) - clock_timestamp())))::int), 0)
  from public.ngmy_ai_state where k = 'provider';
$$;

create or replace function public.ngmy_ai_cooldown_start(p_seconds integer)
returns void
language sql
security definer
set search_path = public
as $$
  insert into public.ngmy_ai_state(k, until_at)
  values ('provider', clock_timestamp() + make_interval(secs => greatest(1, least(p_seconds, 3600))))
  on conflict (k) do update
    set until_at = greatest(public.ngmy_ai_state.until_at, excluded.until_at);
$$;

revoke all on function public.ngmy_ai_gate(jsonb) from public, anon, authenticated;
revoke all on function public.ngmy_ai_cooldown_left() from public, anon, authenticated;
revoke all on function public.ngmy_ai_cooldown_start(integer) from public, anon, authenticated;
grant execute on function public.ngmy_ai_gate(jsonb) to service_role;
grant execute on function public.ngmy_ai_cooldown_left() to service_role;
grant execute on function public.ngmy_ai_cooldown_start(integer) to service_role;

commit;

-- To see abuse (newest first):
--   select "at", kind, detail, ip from public.ngmy_security_events where kind like 'ai\_%' order by "at" desc limit 100;
-- To see who used the most AI today:
--   select k as user_id, bucket, hits from public.ngmy_rate_limits
--   where bucket like 'ai\_%\_day' and window_start >= date_trunc('day', now()) order by hits desc limit 20;
-- To change a limit without redeploying (names are in supabase/AI_LIMITS.md):
--   insert into public.ngmy_ai_settings(key, value) values ('AI_LIMIT_NORMAL_PER_MIN', '30')
--   on conflict (key) do update set value = excluded.value, updated_at = now();
