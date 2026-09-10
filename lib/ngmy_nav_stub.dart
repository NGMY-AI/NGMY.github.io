import 'package:flutter/material.dart';

/// Opaque slide — previous screen stays under the current page.
Route<T> ngmyBuildRoute<T extends Object?>(
  WidgetBuilder builder, {
  RouteSettings? settings,
  bool fullscreenDialog = false,
  bool maintainState = true,
}) {
  final routeSettings = settings ?? const RouteSettings();
  return PageRouteBuilder<T>(
    settings: routeSettings,
    fullscreenDialog: fullscreenDialog,
    maintainState: maintainState,
    opaque: true,
    transitionDuration: const Duration(milliseconds: 220),
    reverseTransitionDuration: const Duration(milliseconds: 200),
    pageBuilder: (context, animation, secondaryAnimation) => builder(context),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      final begin = fullscreenDialog ? const Offset(0, 1) : const Offset(1, 0);
      final offset = Tween<Offset>(
        begin: begin,
        end: Offset.zero,
      ).animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic));
      return SlideTransition(position: offset, child: child);
    },
  );
}

void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {}

void onNavigatorDidPush() {}

void onNavigatorDidPop({bool fromBrowser = false}) {}
