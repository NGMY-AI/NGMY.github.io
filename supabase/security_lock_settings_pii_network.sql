-- OPTIONAL privacy lock (run yourself in Supabase SQL Editor ONLY if you want).
-- Does NOT delete data. Blocks anon/authenticated from READING sensitive ngmy_settings keys
-- in the browser Network tab. App uses bright-handler (service role) instead.
--
-- You asked not to mess with the database from the agent — this file is for you to run
-- manually if public REST still returns civic/help/email blobs.

alter table public.ngmy_settings enable row level security;
alter table public.ngmy_settings force row level security;

do $$
declare
  r record;
begin
  for r in
    select policyname
    from pg_policies
    where schemaname = 'public' and tablename = 'ngmy_settings'
  loop
    execute format('drop policy if exists %I on public.ngmy_settings', r.policyname);
  end loop;
end $$;

create policy "ngmy_settings_select_public_safe"
  on public.ngmy_settings
  for select
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_state_registrar_subscriptions'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_self_enrollment_settings'
    and key is distinct from 'civic_cities_rooms'
    and key is distinct from 'civic_help_mode_settings'
    and key is distinct from 'civic_deleted_contribution_ids'
    and key is distinct from 'civic_contribution_receipt_removed'
    and key is distinct from 'store_sell_access_emails'
    and key is distinct from 'management_operational_lists'
    and key is distinct from 'family_tree_photo_access'
    and key is distinct from 'civic_help_campaign_spendings'
    and key is distinct from 'game_invites'
    and key is distinct from 'store_inquiries'
    and key is distinct from 'store_orders'
    and key is distinct from 'media_virtual_profiles'
    and key not like 'civic_%'
  );

create policy "ngmy_settings_insert_public_safe"
  on public.ngmy_settings
  for insert
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_self_enrollment_settings'
    and key is distinct from 'civic_cities_rooms'
    and key is distinct from 'civic_help_mode_settings'
    and key is distinct from 'civic_deleted_contribution_ids'
    and key is distinct from 'civic_contribution_receipt_removed'
    and key not like 'civic_%'
  );

create policy "ngmy_settings_update_public_safe"
  on public.ngmy_settings
  for update
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_self_enrollment_settings'
    and key is distinct from 'civic_cities_rooms'
    and key is distinct from 'civic_help_mode_settings'
    and key is distinct from 'civic_deleted_contribution_ids'
    and key is distinct from 'civic_contribution_receipt_removed'
    and key not like 'civic_%'
  )
  with check (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_registry_pins'
    and key is distinct from 'civic_self_enrollment_settings'
    and key is distinct from 'civic_cities_rooms'
    and key is distinct from 'civic_help_mode_settings'
    and key is distinct from 'civic_deleted_contribution_ids'
    and key is distinct from 'civic_contribution_receipt_removed'
    and key not like 'civic_%'
  );

create policy "ngmy_settings_delete_public_safe"
  on public.ngmy_settings
  for delete
  using (
    key is distinct from 'civic_registry_members'
    and key is distinct from 'civic_registry_pins'
    and key not like 'civic_%'
  );
