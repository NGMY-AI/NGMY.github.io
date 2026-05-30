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

/// Browser back / swipe: one Flutter pop per gesture. Flutter pops never chain extra pops.
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
      nav.maybePop();
      if (_stackDepth > 0) _stackDepth--;
    }
  });
}

void onNavigatorDidPush() {
  _stackDepth++;
  html.window.history.pushState(<String, dynamic>{'ngmy': _stackDepth}, '', html.window.location.href);
}

void onNavigatorDidPop({bool fromBrowser = false}) {
  if (fromBrowser || _popFromBrowser) {
    _popFromBrowser = false;
    return;
  }
  if (_stackDepth > 0) {
    _stackDepth--;
    _suppressPopState++;
    html.window.history.back();
  }
}
