import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

Route<T> ngmyBuildRoute<T extends Object?>(
  WidgetBuilder builder, {
  RouteSettings? settings,
  bool fullscreenDialog = false,
  bool maintainState = true,
}) {
  final routeSettings = settings ?? const RouteSettings();
  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.iOS) {
    return CupertinoPageRoute<T>(
      builder: builder,
      settings: routeSettings,
      fullscreenDialog: fullscreenDialog,
      maintainState: maintainState,
    );
  }
  return MaterialPageRoute<T>(
    builder: builder,
    settings: routeSettings,
    fullscreenDialog: fullscreenDialog,
    maintainState: maintainState,
  );
}

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {}

void onNavigatorDidPush() {}

void onNavigatorDidPop({bool fromBrowser = false}) {}
