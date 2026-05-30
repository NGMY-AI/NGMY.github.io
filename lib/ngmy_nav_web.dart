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

/// Web: browser / swipe back pops one Flutter route. We do NOT push history on
/// every route — that caused double-pops and sent users to the home screen.
void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {
  html.window.onPopState.listen((_) {
    if (_skipNextPopState) {
      _skipNextPopState = false;
      return;
    }
    final nav = navigatorKey.currentState;
    if (nav != null && nav.canPop()) {
      nav.pop();
    }
  });
}

void onNavigatorDidPush() {
  // Intentionally empty — no per-route history.pushState (fixes double-pop).
}

void onNavigatorDidPop() {
  // Intentionally empty — do not call history.back() from Flutter pops.
}
