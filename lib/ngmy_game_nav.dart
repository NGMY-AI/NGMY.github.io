import 'package:flutter/material.dart';

import 'ngmy_nav.dart';

const String kRouteGameCenter = 'GameCenterScreen';
const String kRouteGameBet = 'GameBetScreen';
const String kRouteGamePlay = 'GamePlayScreen';
const String kRouteDiceGame = 'NgmyDiceGameHost';

/// Top route on the root navigator (not [NavigatorState.context], which is wrong).
String? ngmyCurrentRouteName() {
  final nav = NgmyNavigator.root;
  if (nav == null || !nav.mounted) return null;
  final overlay = nav.overlay;
  if (overlay == null || !overlay.mounted) return null;
  return ModalRoute.of(overlay.context)?.settings.name;
}

/// Exactly one route back (previous screen).
void ngmyPopOneStep([NavigatorState? nav]) {
  final n = nav ?? NgmyNavigator.root;
  if (n != null && n.mounted && n.canPop()) {
    n.pop();
  }
}

/// Close result dialog, then run navigation after the dialog route is gone.
void ngmyCloseDialogThen(VoidCallback afterDialogClosed) {
  WidgetsBinding.instance.addPostFrameCallback((_) {
    WidgetsBinding.instance.addPostFrameCallback((_) => afterDialogClosed());
  });
}

/// After a game ends: return to bet setup (one step).
void ngmyGamePlayAgain([NavigatorState? nav]) {
  ngmyCloseDialogThen(() => ngmyPopOneStep(nav));
}

/// After a game ends: return to Game Center (not app home). At most 4 pops.
void ngmyGameGoBack([NavigatorState? nav]) {
  ngmyCloseDialogThen(() => _popUntilGameCenterStep(nav, 0));
}

void _popUntilGameCenterStep(NavigatorState? nav, int steps) {
  if (steps > 4) return;
  final n = nav ?? NgmyNavigator.root;
  if (n == null || !n.mounted) return;
  if (ngmyCurrentRouteName() == kRouteGameCenter) return;
  if (!n.canPop()) return;
  n.pop();
  WidgetsBinding.instance.addPostFrameCallback((_) => _popUntilGameCenterStep(n, steps + 1));
}
