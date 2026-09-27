-- NGMY RLS security tests — run in Supabase SQL Editor after security_audit_hardening.sql
-- Uses a transaction that ROLLS BACK so no test rows remain.
-- Expect every "assert_*" notice to print PASS.

begin;

create temporary table if not exists _ngmy_rls_results (
  name text primary key,
  passed boolean not null,
  detail text not null default ''
);

create or replace function pg_temp.assert_true(p_name text, p_ok boolean, p_detail text default '')
returns void language plpgsql as $$
begin
  insert into _ngmy_rls_results(name, passed, detail)
  values (p_name, coalesce(p_ok, false), p_detail)
  on conflict (name) do update set passed = excluded.passed, detail = excluded.detail;
  raise notice '% %', case when p_ok then 'PASS' else 'FAIL' end, p_name;
end;
$$;

-- Seed two members the tests impersonate (service_role / table owner bypasses RLS).
delete from public.users where email in ('rls-user-a@example.com','rls-user-b@example.com');
insert into public.users (email, username)
values
  ('rls-user-a@example.com', 'UserA'),
  ('rls-user-b@example.com', 'UserB');

insert into public.transactions (id, "userEmail", amount, type, status, timestamp)
values
  ('rls-txn-a', 'rls-user-a@example.com', 11, 0, 1, '2026-01-01T00:00:00Z'),
  ('rls-txn-b', 'rls-user-b@example.com', 22, 0, 1, '2026-01-01T00:00:00Z')
on conflict (id) do update set amount = excluded.amount, "userEmail" = excluded."userEmail";

insert into public.ngmy_settings (key, value, updated_at)
values ('ngmy_audit_private_probe_v1', '{"audit":"private"}'::jsonb, now())
on conflict (key) do update set value = excluded.value;

-- ── Anonymous: no JWT email ──────────────────────────────────────────────
set local role anon;
select set_config('request.jwt.claims', '{"role":"anon"}', true);

select pg_temp.assert_true(
  'anon cannot read users',
  not exists (select 1 from public.users where email in ('rls-user-a@example.com','rls-user-b@example.com'))
);
select pg_temp.assert_true(
  'anon cannot read transactions',
  not exists (select 1 from public.transactions where id in ('rls-txn-a','rls-txn-b'))
);
select pg_temp.assert_true(
  'anon cannot read private settings probe',
  not exists (select 1 from public.ngmy_settings where key = 'ngmy_audit_private_probe_v1')
);
select pg_temp.assert_true(
  'anon can read public branding',
  exists (select 1 from public.ngmy_settings where key = 'ngmy_app_branding')
);

reset role;
select set_config('request.jwt.claims', '', true);

-- ── User A authenticated ─────────────────────────────────────────────────
set local role authenticated;
select set_config(
  'request.jwt.claims',
  '{"role":"authenticated","sub":"00000000-0000-0000-0000-00000000000a","email":"rls-user-a@example.com"}',
  true
);

select pg_temp.assert_true(
  'user A can read own user row',
  exists (select 1 from public.users where email = 'rls-user-a@example.com')
);
select pg_temp.assert_true(
  'user A cannot read user B',
  not exists (select 1 from public.users where email = 'rls-user-b@example.com')
);
select pg_temp.assert_true(
  'user A can read own transaction',
  exists (select 1 from public.transactions where id = 'rls-txn-a')
);
select pg_temp.assert_true(
  'user A cannot read user B transaction',
  not exists (select 1 from public.transactions where id = 'rls-txn-b')
);
select pg_temp.assert_true(
  'user A cannot read private settings probe',
  not exists (select 1 from public.ngmy_settings where key = 'ngmy_audit_private_probe_v1')
);

update public.users set username = 'HackedB' where email = 'rls-user-b@example.com';
update public.transactions set amount = 1 where id = 'rls-txn-b';
delete from public.transactions where id = 'rls-txn-b';
delete from public.users where email = 'rls-user-b@example.com';
update public.users set username = 'UserA-ok' where email = 'rls-user-a@example.com';

reset role;
select set_config('request.jwt.claims', '', true);

select pg_temp.assert_true(
  'user A cannot update user B',
  exists (select 1 from public.users where email = 'rls-user-b@example.com' and username = 'UserB')
);
select pg_temp.assert_true(
  'user A cannot update user B transaction',
  exists (select 1 from public.transactions where id = 'rls-txn-b' and amount = 22)
);
select pg_temp.assert_true(
  'user A cannot delete user B transaction',
  exists (select 1 from public.transactions where id = 'rls-txn-b')
);
select pg_temp.assert_true(
  'user A cannot delete user B',
  exists (select 1 from public.users where email = 'rls-user-b@example.com')
);
select pg_temp.assert_true(
  'user A can update own username',
  exists (select 1 from public.users where email = 'rls-user-a@example.com' and username = 'UserA-ok')
);

-- Summary
select
  count(*) filter (where passed) as passed,
  count(*) filter (where not passed) as failed,
  jsonb_agg(name) filter (where not passed) as failed_names
from _ngmy_rls_results;

-- Leave no test users/txns if the asserts used real tables.
delete from public.transactions where id in ('rls-txn-a','rls-txn-b');
delete from public.users where email in ('rls-user-a@example.com','rls-user-b@example.com');
delete from public.ngmy_settings where key = 'ngmy_audit_private_probe_v1';

rollback;
