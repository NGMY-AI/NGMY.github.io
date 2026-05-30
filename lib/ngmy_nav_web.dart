// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'ngmy_nav_stub.dart' as stub;

bool _suppressPopState = false;
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

/// Keeps browser back / swipe in sync with Flutter routes without double-popping.
void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {
  html.window.history.replaceState(<String, dynamic>{'ngmy': 0}, '', html.window.location.href);

  html.window.onPopState.listen((_) {
    if (_suppressPopState) {
      _suppressPopState = false;
      return;
    }
    final nav = navigatorKey.currentState;
    if (nav != null && nav.canPop()) {
      _popFromBrowser = true;
      nav.maybePop();
    }
  });
}

void onNavigatorDidPush() {
  html.window.history.pushState(<String, dynamic>{'ngmy': 'page'}, '', html.window.location.href);
}

void onNavigatorDidPop({bool fromBrowser = false}) {
  if (fromBrowser || _popFromBrowser) {
    _popFromBrowser = false;
    return;
  }
  if (html.window.history.length > 1) {
    _suppressPopState = true;
    html.window.history.back();
  }
}
