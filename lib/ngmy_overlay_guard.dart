import 'package:flutter/material.dart';

import 'ngmy_nav.dart';

/// True when the user is on the main shell with no stacked dialog or sub-page.
/// Global alerts/reminders must not fire while this is false — prevents route pops.
bool ngmyShouldAllowGlobalInterrupt() {
  final nav = ngmyRootNavigatorKey.currentState;
  if (nav == null || !nav.mounted) return false;
  if (nav.canPop()) return false;
  return true;
}

/// Helper-gift admin alerts use the root navigator and must appear as soon as
/// the admin opens the app — do not require an empty navigation stack.
bool ngmyShouldAllowHelperGiftAdminPopup() {
  final nav = ngmyRootNavigatorKey.currentState;
  if (nav == null || !nav.mounted) return false;
  return true;
}
