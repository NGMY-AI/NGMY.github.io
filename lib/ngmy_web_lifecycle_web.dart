import 'dart:html' as html;

import 'package:flutter/scheduler.dart';

/// Saves session/data when the user switches tabs, minimizes, or closes the page.
void ngmyRegisterPageHiddenHandler(void Function() onHidden) {
  html.document.onVisibilityChange.listen((_) {
    if (html.document.visibilityState == 'hidden') {
      onHidden();
    }
  });
  html.window.onPageHide.listen((_) => onHidden());
}

final List<void Function()> _ngmyPageVisibleHandlers = [];
var _ngmyPageVisibleListenersInstalled = false;

/// Fires when the user returns to the NGMY tab (fixes blank home after backgrounding on web/PWA).
/// Listeners are registered once; handlers are deduped so repeated widget mounts do not stack.
void ngmyRegisterPageVisibleHandler(void Function() onVisible) {
  if (!_ngmyPageVisibleHandlers.contains(onVisible)) {
    _ngmyPageVisibleHandlers.add(onVisible);
  }
  if (_ngmyPageVisibleListenersInstalled) return;
  _ngmyPageVisibleListenersInstalled = true;

  void fire() {
    if (_ngmyPageVisibleHandlers.isEmpty) return;
    SchedulerBinding.instance.scheduleForcedFrame();
    for (final handler in List<void Function()>.from(_ngmyPageVisibleHandlers)) {
      try {
        handler();
      } catch (_) {}
    }
  }

  html.document.onVisibilityChange.listen((_) {
    if (html.document.visibilityState == 'visible') {
      fire();
    }
  });
  html.window.onPageShow.listen((_) => fire());
  html.window.onFocus.listen((_) => fire());
}

void ngmyUnregisterPageVisibleHandler(void Function() onVisible) {
  _ngmyPageVisibleHandlers.remove(onVisible);
}
