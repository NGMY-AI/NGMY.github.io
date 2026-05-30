import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

/// Slide-from-right transitions (matches iOS / natural back gesture) on all platforms.
Route<T> ngmyBuildRoute<T extends Object?>(
  WidgetBuilder builder, {
  RouteSettings? settings,
  bool fullscreenDialog = false,
  bool maintainState = true,
}) {
  final routeSettings = settings ?? const RouteSettings();
  return CupertinoPageRoute<T>(
    builder: builder,
    settings: routeSettings,
    fullscreenDialog: fullscreenDialog,
    maintainState: maintainState,
  );
}

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {}

void onNavigatorDidPush() {}

void onNavigatorDidPop({bool fromBrowser = false}) {}
