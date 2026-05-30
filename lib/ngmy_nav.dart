import 'package:flutter/material.dart';

import 'ngmy_nav_stub.dart' if (dart.library.html) 'ngmy_nav_web.dart' as nav_platform;

/// Root navigator — used for web swipe-back and reliable one-step [pop].
final GlobalKey<NavigatorState> ngmyRootNavigatorKey = GlobalKey<NavigatorState>();

class NgmyHistoryObserver extends NavigatorObserver {
  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    if (route is PopupRoute) return;
    nav_platform.onNavigatorDidPush();
  }

  @override
  void didPop(Route<dynamic> route, Route<dynamic>? previousRoute) {
    if (route is PopupRoute) return;
    nav_platform.onNavigatorDidPop();
  }
}

/// App-wide navigation: one step back per action, swipe-back on web/iOS.
class NgmyNavigator {
  static void install() => nav_platform.installWebHistorySync(ngmyRootNavigatorKey);

  static NavigatorState? get root => ngmyRootNavigatorKey.currentState;

  /// Pops exactly one route on the app root navigator (never jumps to home).
  static void pop<T extends Object?>(BuildContext context, [T? result]) {
    final nav = ngmyRootNavigatorKey.currentState;
    if (nav != null && nav.mounted && nav.canPop()) {
      nav.pop<T>(result);
    }
  }

  static Route<T> route<T extends Object?>(
    WidgetBuilder builder, {
    RouteSettings? settings,
    bool fullscreenDialog = false,
    bool maintainState = true,
  }) {
    return nav_platform.ngmyBuildRoute<T>(
      builder,
      settings: settings,
      fullscreenDialog: fullscreenDialog,
      maintainState: maintainState,
    );
  }

  static Future<T?> push<T extends Object?>(
    BuildContext context,
    Widget page, {
    bool fullscreenDialog = false,
    String? routeName,
  }) {
    final name = routeName ?? page.runtimeType.toString();
    return pushRoute<T>(
      context,
      route<T>(
        (_) => page,
        settings: RouteSettings(name: name),
        fullscreenDialog: fullscreenDialog,
      ),
    );
  }

  static Future<T?> pushRoute<T extends Object?>(
    BuildContext context,
    Route<T> route,
  ) {
    final nav = ngmyRootNavigatorKey.currentState ?? Navigator.of(context);
    return nav.push<T>(route);
  }
}
