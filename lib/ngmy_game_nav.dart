import 'package:flutter/material.dart';



import 'ngmy_nav.dart';



const String kRouteGameCenter = 'GameCenterScreen';

const String kRouteGameBet = 'GameBetScreen';

const String kRouteGamePlay = 'GamePlayScreen';

const String kRouteDiceGame = 'NgmyDiceGameHost';



const Set<String> _kGameChildRoutes = {

  kRouteGamePlay,

  kRouteGameBet,

  kRouteDiceGame,

};



/// Reads the top route without popping anything.

String? ngmyCurrentRouteName([NavigatorState? nav]) {

  final n = nav ?? NgmyNavigator.root;

  if (n == null || !n.mounted) return null;

  Route<dynamic>? current;

  n.popUntil((route) {

    if (route.isCurrent) current = route;

    return route.isCurrent;

  });

  return current?.settings.name;

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



/// After a game ends: return to bet setup (GamePlay → GameBet). Dialog already closed.

void ngmyGamePlayAgain([NavigatorState? nav]) {

  final n = nav ?? NgmyNavigator.root;

  if (n == null || !n.mounted) return;

  if (ngmyCurrentRouteName(n) == kRouteGamePlay) {

    ngmyPopOneStep(n);

  }

}



/// After win/lose popup "Go Back": land on Game Center (not home).

/// Popup calls [ngmyCloseDialogThen] before this — do not wrap again.

void ngmyGameGoBack([NavigatorState? nav]) {

  _popUntilGameCenter(nav, 0);

}



void _popUntilGameCenter(NavigatorState? nav, int popsDone) {

  if (popsDone > 4) return;

  final n = nav ?? NgmyNavigator.root;

  if (n == null || !n.mounted) return;



  final name = ngmyCurrentRouteName(n);

  if (name == kRouteGameCenter) return;



  if (_kGameChildRoutes.contains(name) && n.canPop()) {

    n.pop();

    WidgetsBinding.instance.addPostFrameCallback((_) => _popUntilGameCenter(n, popsDone + 1));

  }

}


