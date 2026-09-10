// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

import 'package:flutter/material.dart';

int _stackDepth = 0;
int _suppressPopState = 0;
bool _popFromBrowser = false;
DateTime? _lastBrowserBackAt;

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

/// Browser/OS back (including iOS swipe-from-edge): pop exactly one Flutter
/// route. Never drain the stack down to Home in a single swipe.
void installWebHistorySync(GlobalKey<NavigatorState> navigatorKey) {
  html.window.history.replaceState(<String, dynamic>{'ngmy': 0}, '', html.window.location.href);
  _stackDepth = 0;

  html.window.onPopState.listen((_) {
    if (_suppressPopState > 0) {
      _suppressPopState--;
      return;
    }
    unawaited(_onBrowserBack(navigatorKey));
  });
}

Future<void> _onBrowserBack(GlobalKey<NavigatorState> navigatorKey) async {
  final now = DateTime.now();
  if (_lastBrowserBackAt != null && now.difference(_lastBrowserBackAt!) < const Duration(milliseconds: 480)) {
    _restoreHistoryEntry();
    return;
  }
  _lastBrowserBackAt = now;

  final nav = navigatorKey.currentState;
  if (nav == null || !nav.mounted) {
    _restoreHistoryEntry();
    return;
  }

  _popFromBrowser = true;
  final popped = await nav.maybePop();
  if (popped) {
    if (_stackDepth > 0) _stackDepth--;
    _markSessionBusy(_stackDepth > 0);
    return;
  }

  _popFromBrowser = false;
  _restoreHistoryEntry();
}

void _restoreHistoryEntry() {
  _suppressPopState++;
  html.window.history.pushState(
    <String, dynamic>{'ngmy': _stackDepth},
    '',
    html.window.location.href,
  );
}

void _markSessionBusy(bool busy) {
  try {
    html.document.body?.classes.toggle('ngmy-session-busy', busy);
  } catch (_) {}
}

void onNavigatorDidPush() {
  if (_stackDepth >= 24) return;
  _stackDepth++;
  html.window.history.pushState(<String, dynamic>{'ngmy': _stackDepth}, '', html.window.location.href);
  _markSessionBusy(true);
}

void onNavigatorDidPop() {
  if (_popFromBrowser) {
    _popFromBrowser = false;
    _markSessionBusy(_stackDepth > 0);
    return;
  }
  if (_stackDepth > 0) _stackDepth--;
  _markSessionBusy(_stackDepth > 0);
}

void unawaited(Future<void> future) {
  future.catchError((Object _) {});
}
