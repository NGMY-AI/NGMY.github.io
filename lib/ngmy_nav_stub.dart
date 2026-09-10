import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

/// One-step back. On iOS/Android this uses the native edge-swipe pop so a
/// swipe left returns to the previous route instead of jumping to Home.
Route<T> ngmyBuildRoute<T extends Object?>(
  WidgetBuilder builder, {
  RouteSettings? settings,
  bool fullscreenDialog = false,
  bool maintainState = true,
}) {
  final routeSettings = settings ?? const RouteSettings();
  if (fullscreenDialog) {
    return PageRouteBuilder<T>(
      settings: routeSettings,
      fullscreenDialog: true,
      maintainState: maintainState,
      opaque: true,
      transitionDuration: const Duration(milliseconds: 220),
      reverseTransitionDuration: const Duration(milliseconds: 200),
      pageBuilder: (context, animation, secondaryAnimation) => builder(context),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        final offset = Tween<Offset>(
          begin: const Offset(0, 1),
          end: Offset.zero,
        ).animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic));
        return SlideTransition(position: offset, child: child);
      },
    );
  }
  return CupertinoPageRoute<T>(
    builder: builder,
    settings: routeSettings,
    fullscreenDialog: false,
    maintainState: maintainState,
  );
}

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {}

void onNavigatorDidPush() {}

void onNavigatorDidPop({bool fromBrowser = false}) {}
