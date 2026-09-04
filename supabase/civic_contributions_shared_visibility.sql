-- NGMY — Civic Registry: contribution receipts + help mode must live in the
-- database and be visible to every signed-in user, not just on one device.
--
-- WHY THIS IS NEEDED
--   1. `security_lock_transactions_select_own_only.sql` limited `transactions`
--      SELECT to "rows whose userEmail = my JWT email", and INSERT to
--      "my own rows, or one of the 4 hardcoded admin emails".
--      A contribution receipt is a transactions row stamped with the *member's*
--      email, recorded by a *registrar*. So:
--        - the registrar's INSERT was rejected  -> receipt never reached the DB
--        - nobody could SELECT anyone else's    -> receipts were device-local
--      That is why receipts only ever existed in SharedPreferences.
--   2. `security_lock_settings_allowlist.sql` limited ngmy_settings SELECT to a
--      public allowlist OR the 4 admin emails. `civic_help_mode_settings` is on
--      neither list, so registrars and members never read the shared help-mode
--      row — every device ran off its own stale copy of activate/deactivate.
--
-- Adds two normalized lookup columns while keeping `sourceDetails` as the
-- authoritative receipt payload. Safe to run more than once.

begin;

-- ── Normalized civic lookup columns ─────────────────────────────────────
-- `sourceDetails` remains the full receipt payload. These two columns make
-- state/campaign queries indexable, so the app can page every receipt for one
-- state instead of truncating the newest 400 receipts nationwide.
alter table public.transactions add column if not exists "civicState" text;
alter table public.transactions add column if not exists "civicCampaignId" text;

create or replace function public.ngmy_try_jsonb(p_value text)
returns jsonb
language plpgsql
immutable
as $$
begin
  return p_value::jsonb;
exception when others then
  return null;
end;
$$;

update public.transactions
set
  "civicState" = coalesce(
    nullif(trim("civicState"), ''),
    nullif(trim(public.ngmy_try_jsonb("sourceDetails") ->> 'state'), '')
  ),
  "civicCampaignId" = coalesce(
    nullif(trim("civicCampaignId"), ''),
    nullif(trim(public.ngmy_try_jsonb("sourceDetails") ->> 'campaignId'), '')
  )
where type in (5, 6)
  and (
    nullif(trim("civicState"), '') is null
    or nullif(trim("civicCampaignId"), '') is null
  );

create index if not exists transactions_civic_state_type_status_ts_idx
  on public.transactions (lower("civicState"), type, status, "timestamp" desc)
  where type in (5, 6);

-- ── Columns the registrar check reads (no-ops if already present) ────────
alter table public.users add column if not exists "isAuthorizedRegistrar" boolean default false;
alter table public.users add column if not exists "isCivicRegistryAdmin" boolean default false;
alter table public.users add column if not exists "isCivicRegistryKing" boolean default false;

-- ── Helpers ──────────────────────────────────────────────────────────────
-- ngmy_jwt_email() / is_ngmy_admin() already exist (security_rls_FORCE_LOCK.sql).
-- Recreated here so this script can be run standalone.

create or replace function public.ngmy_jwt_email()
returns text language sql stable as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''));
$$;

create or replace function public.is_ngmy_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.ngmy_jwt_email() in (
    'kbpabloqr@gmail.com',
    'ngumoyaking@gmail.com',
    'appbusiness321@gmail.com',
    'appbusiness84@gmail.com'
  );
$$;

-- An Authorized Registrar records contributions and runs help mode for a state.
--
-- Authority matches what the app and the Edge function already use
-- (resolveCivicRole / _hasEffectiveRegistrarAccess): an APPROVED entry in the
-- civic_registrar_applications blob is the real grant, and the cached
-- users.isAuthorizedRegistrar / King / Registry-Admin flags are the fallback
-- for when that blob is missing or stale. Checking only the cached flag would
-- lock out registrars whose flag has not been synced back to their user row.
--
-- security definer so the policy can read public.users and public.ngmy_settings
-- without those tables' own RLS getting in the way.
create or replace function public.is_ngmy_registrar()
returns boolean language sql stable security definer set search_path = public as $$
  select public.ngmy_jwt_email() <> '' and (
    exists (
      select 1
      from public.users u
      where lower(coalesce(u.email, '')) = public.ngmy_jwt_email()
        and (
          coalesce(u."isAuthorizedRegistrar", false) = true
          or coalesce(u."isCivicRegistryAdmin", false) = true
          or coalesce(u."isCivicRegistryKing", false) = true
        )
    )
    or exists (
      select 1
      from public.ngmy_settings s,
           lateral jsonb_array_elements(
             case
               when jsonb_typeof(s.value -> 'applications') = 'array'
                 then s.value -> 'applications'
               else '[]'::jsonb
             end
           ) as app
      where s.key = 'civic_registrar_applications'
        and lower(coalesce(app ->> 'status', '')) = 'approved'
        and lower(coalesce(app ->> 'userEmail', app ->> 'email', '')) = public.ngmy_jwt_email()
    )
  );
$$;

revoke all on function public.ngmy_jwt_email() from public;
revoke all on function public.is_ngmy_admin() from public;
revoke all on function public.is_ngmy_registrar() from public;
grant execute on function public.ngmy_jwt_email() to anon, authenticated, service_role;
grant execute on function public.is_ngmy_admin() to anon, authenticated, service_role;
grant execute on function public.is_ngmy_registrar() to anon, authenticated, service_role;
revoke all on function public.ngmy_try_jsonb(text) from public;
grant execute on function public.ngmy_try_jsonb(text) to anon, authenticated, service_role;

-- Civic rows inside `transactions`:
--   type 5 = TransactionType.contribution   (a contribution receipt)
--   type 6 = TransactionType.claim          (a community claim)
-- Anything else (deposits, withdrawals, admin adjustments) stays private and is
-- untouched by this script.
create or replace function public.ngmy_is_civic_txn_type(p_type integer)
returns boolean language sql immutable as $$
  select p_type in (5, 6);
$$;

revoke all on function public.ngmy_is_civic_txn_type(integer) from public;
grant execute on function public.ngmy_is_civic_txn_type(integer) to anon, authenticated, service_role;

-- ── transactions: civic rows are community-visible ───────────────────────
-- Policies of the same command OR together, so the existing wallet-privacy
-- policies (txn_select_own etc.) keep protecting deposits/withdrawals.

drop policy if exists "txn_select_civic_shared" on public.transactions;
drop policy if exists "txn_insert_civic_registrar" on public.transactions;
drop policy if exists "txn_update_civic_registrar" on public.transactions;
drop policy if exists "txn_delete_civic_registrar" on public.transactions;

-- Every signed-in user reads every state's approved contributions + claims.
-- The app filters down to the state being viewed; the receipt list, the state
-- Contribution Case total, and the nationwide totals all read from here.
create policy "txn_select_civic_shared" on public.transactions
  for select using (
    public.ngmy_jwt_email() <> ''
    and public.ngmy_is_civic_txn_type(type)
  );

-- Only an Authorized Registrar (or admin) may record one, and only as a civic
-- row — this cannot be used to mint a wallet deposit for someone else.
create policy "txn_insert_civic_registrar" on public.transactions
  for insert with check (
    public.ngmy_is_civic_txn_type(type)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  );

create policy "txn_update_civic_registrar" on public.transactions
  for update using (
    public.ngmy_is_civic_txn_type(type)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  ) with check (
    public.ngmy_is_civic_txn_type(type)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  );

-- Deleting a receipt stays a privileged act (registrar for their own civic
-- rows, admin for anything) — that is the "until the authorized registrar
-- decides to delete it" half of the retention rule.
create policy "txn_delete_civic_registrar" on public.transactions
  for delete using (
    public.ngmy_is_civic_txn_type(type)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  );

-- ── ngmy_settings: shared civic state ────────────────────────────────────
-- civic_help_mode_settings carries helpModeByState (which state is active),
-- helpCampaignClosures, recorded spendings, and the receipt/contribution
-- delete tombstones. Every signed-in user must READ it or activate/deactivate
-- never propagates; registrars and admins may WRITE it.

create or replace function public.ngmy_settings_civic_shared(p_key text)
returns boolean language sql stable as $$
  select p_key in (
    'civic_help_mode_settings',
    'civic_contribution_receipt_removed',
    'civic_deleted_contribution_ids',
    'civic_help_campaign_spendings'
  );
$$;

revoke all on function public.ngmy_settings_civic_shared(text) from public;
grant execute on function public.ngmy_settings_civic_shared(text) to anon, authenticated, service_role;

drop policy if exists "ngmy_settings_select_civic_shared" on public.ngmy_settings;
drop policy if exists "ngmy_settings_insert_civic_shared" on public.ngmy_settings;
drop policy if exists "ngmy_settings_update_civic_shared" on public.ngmy_settings;

create policy "ngmy_settings_select_civic_shared"
  on public.ngmy_settings for select
  using (
    public.ngmy_jwt_email() <> ''
    and public.ngmy_settings_civic_shared(key)
  );

create policy "ngmy_settings_insert_civic_shared"
  on public.ngmy_settings for insert
  with check (
    public.ngmy_settings_civic_shared(key)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  );

create policy "ngmy_settings_update_civic_shared"
  on public.ngmy_settings for update
  using (
    public.ngmy_settings_civic_shared(key)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  )
  with check (
    public.ngmy_settings_civic_shared(key)
    and (public.is_ngmy_admin() or public.is_ngmy_registrar())
  );

commit;

-- ── Verify ───────────────────────────────────────────────────────────────
select tablename, policyname, cmd
from pg_policies
where schemaname = 'public'
  and tablename in ('transactions', 'ngmy_settings')
order by tablename, policyname;
