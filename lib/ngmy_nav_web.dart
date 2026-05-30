// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'ngmy_nav_stub.dart' as stub;

bool _skipNextPopState = false;

Route<T> ngmyBuildRoute<T extends Object?>(
  WidgetBuilder builder, {
  bool fullscreenDialog = false,
  bool maintainState = true,
}) {
  return stub.ngmyBuildRoute<T>(
    builder,
    fullscreenDialog: fullscreenDialog,
    maintainState: maintainState,
  );
}

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {
  html.window.history.pushState(<String, dynamic>{'ngmy': 'root'}, '', html.window.location.href);
  html.window.onPopState.listen((_) {
    if (_skipNextPopState) {
      _skipNextPopState = false;
      return;
    }
    final nav = navigatorKey.currentState;
    if (nav != null && nav.canPop()) {
      nav.pop();
      return;
    }
    _skipNextPopState = true;
    html.window.history.pushState(<String, dynamic>{'ngmy': 'root'}, '', html.window.location.href);
  });
}

void onNavigatorDidPush() {
  html.window.history.pushState(<String, dynamic>{'ngmy': 'page'}, '', html.window.location.href);
}

void onNavigatorDidPop() {
  // Do not call history.back() here — it triggers a second popstate and can
  // pop two routes (e.g. service screen then app shell / home tab).
}
