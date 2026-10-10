-- Signed-in users must be able to READ the shared NGMY Advisors list (names, bios, photo links —
-- no private data). Before this only admins could, so users only saw the advisors built into the
-- app and the admin saw a different list. Read-only: writes still require admin.
drop policy if exists ngmy_settings_select_advisor_list on public.ngmy_settings;
create policy ngmy_settings_select_advisor_list on public.ngmy_settings
  for select to authenticated
  using (key = 'communicate_settings');
