// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;



import 'package:flutter/material.dart';



import 'ngmy_nav_stub.dart' as stub;



int _stackDepth = 0;

int _suppressPopState = 0;

bool _popFromBrowser = false;



Route<T> ngmyBuildRoute<T extends Object?>(

  WidgetBuilder builder, {

  RouteSettings? settings,

  bool fullscreenDialog = false,

  bool maintainState = true,

}) {

  return stub.ngmyBuildRoute<T>(

    builder,

    settings: settings,

    fullscreenDialog: fullscreenDialog,

    maintainState: maintainState,

  );

}



/// Browser/OS back: one Flutter pop. In-app back does NOT call [history.back]

/// (that was double-popping routes and jumping to the home tab).

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {

  html.window.history.replaceState(<String, dynamic>{'ngmy': 0}, '', html.window.location.href);

  _stackDepth = 0;



  html.window.onPopState.listen((_) {

    if (_suppressPopState > 0) {

      _suppressPopState--;

      return;

    }

    final nav = navigatorKey.currentState;

    if (nav != null && nav.canPop()) {

      _popFromBrowser = true;

      nav.pop();

      if (_stackDepth > 0) _stackDepth--;

    }

  });

}



void onNavigatorDidPush() {

  _stackDepth++;

  html.window.history.pushState(<String, dynamic>{'ngmy': _stackDepth}, '', html.window.location.href);

}



void onNavigatorDidPop() {

  if (_popFromBrowser) {

    _popFromBrowser = false;

    return;

  }

  if (_stackDepth > 0) {

    _stackDepth--;

  }

}


