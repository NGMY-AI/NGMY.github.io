import 'package:flutter/material.dart';

import 'ngmy_nav_stub.dart' if (dart.library.html) 'ngmy_nav_web.dart' as nav_platform;

/// Root navigator — used for web swipe-back → [Navigator.pop].
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

/// App-wide navigation: iOS interactive pop + web history stays in sync with routes.
class NgmyNavigator {
  static void install() => nav_platform.installWebHistorySync(ngmyRootNavigatorKey);

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
    bool rootNavigator = false,
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
      rootNavigator: rootNavigator,
    );
  }

  static Future<T?> pushRoute<T extends Object?>(
    BuildContext context,
    Route<T> route, {
    bool rootNavigator = false,
  }) {
    final nav = Navigator.of(context, rootNavigator: rootNavigator);
    return nav.push<T>(route);
  }
}
