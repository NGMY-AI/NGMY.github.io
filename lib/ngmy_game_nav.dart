import 'package:flutter/material.dart';

/// Pops routes until [routeName] is the current route (or only the app shell remains).
void ngmyPopUntilNamed(NavigatorState nav, String routeName) {
  if (!nav.mounted) return;
  nav.popUntil((route) {
    if (route.isFirst) return true;
    return route.settings.name == routeName;
  });
}

/// Pops one route when possible (e.g. close play screen for Play Again).
void ngmyPopOne(NavigatorState nav) {
  if (!nav.mounted) return;
  if (nav.canPop()) nav.pop();
}

/// Close result dialog, then run navigation after the dialog route is gone.
void ngmyCloseDialogThen(VoidCallback afterDialogClosed) {
  WidgetsBinding.instance.addPostFrameCallback((_) {
    WidgetsBinding.instance.addPostFrameCallback((_) => afterDialogClosed());
  });
}

/// After a game ends: return to bet setup screen.
void ngmyGamePlayAgain(NavigatorState nav) {
  ngmyCloseDialogThen(() => ngmyPopOne(nav));
}

/// After a game ends: return to Game Center list (not app home).
void ngmyGameGoBack(NavigatorState nav) {
  ngmyCloseDialogThen(() => ngmyPopUntilNamed(nav, 'GameCenterScreen'));
}
