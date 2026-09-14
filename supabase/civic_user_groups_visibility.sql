-- Lightning Groups: let signed-in users read/write civic_user_groups_v1
-- through RLS (dbRelay fallback). Does NOT drop other ngmy_settings policies.
-- Preferred path is Edge civicUserGroupsFetch / civicUserGroupsPersist.

begin;

create or replace function public.ngmy_settings_civic_shared(p_key text)
returns boolean language sql stable as $$
  select p_key in (
    'civic_help_mode_settings',
    'civic_contribution_receipt_removed',
    'civic_deleted_contribution_ids',
    'civic_help_campaign_spendings',
    'civic_user_groups_v1'
  );
$$;

drop policy if exists "ngmy_settings_select_civic_user_groups" on public.ngmy_settings;
drop policy if exists "ngmy_settings_insert_civic_user_groups" on public.ngmy_settings;
drop policy if exists "ngmy_settings_update_civic_user_groups" on public.ngmy_settings;

create policy "ngmy_settings_select_civic_user_groups"
  on public.ngmy_settings for select
  using (
    key = 'civic_user_groups_v1'
    and public.ngmy_jwt_email() <> ''
  );

create policy "ngmy_settings_insert_civic_user_groups"
  on public.ngmy_settings for insert
  with check (
    key = 'civic_user_groups_v1'
    and public.ngmy_jwt_email() <> ''
  );

create policy "ngmy_settings_update_civic_user_groups"
  on public.ngmy_settings for update
  using (
    key = 'civic_user_groups_v1'
    and public.ngmy_jwt_email() <> ''
  )
  with check (
    key = 'civic_user_groups_v1'
    and public.ngmy_jwt_email() <> ''
  );

commit;
