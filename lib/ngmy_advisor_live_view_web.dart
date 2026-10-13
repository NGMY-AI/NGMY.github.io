import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Live view of the advisor's cloud browser (interactive iframe — the user can tap in to log in).
class NgmyAdvisorLiveView extends StatefulWidget {
  const NgmyAdvisorLiveView({super.key, required this.url});

  final String url;

  @override
  State<NgmyAdvisorLiveView> createState() => _NgmyAdvisorLiveViewState();
}

const _openKey = 'ngmy_live_view_open';
const _crashKey = 'ngmy_live_view_crashes';

/// How many times the app died while a live view was on screen (recent ones only).
/// Read once per launch: a live view still marked open from the last run means the
/// phone killed the app while it was showing.
int ngmyLiveViewRecentCrashes() {
  _checkedThisLaunch ??= _checkLastRun();
  return _checkedThisLaunch!;
}

int? _checkedThisLaunch;

int _checkLastRun() {
  try {
    final s = html.window.localStorage;
    final now = DateTime.now().millisecondsSinceEpoch;
    var crashes = (s[_crashKey] ?? '').split(',').map(int.tryParse).whereType<int>().toList();
    final open = int.tryParse(s[_openKey] ?? '');
    if (open != null) {
      // Still marked open → the app was closed or killed mid-view. Only count it when the
      // app was reopened soon after (a crash/reload), not days later.
      if (now - open < const Duration(minutes: 10).inMilliseconds) crashes.add(now);
      s.remove(_openKey);
    }
    crashes = crashes.where((t) => now - t < const Duration(days: 3).inMilliseconds).toList();
    s[_crashKey] = crashes.join(',');
    return crashes.length;
  } catch (_) {
    return 0;
  }
}

/// Clear the crash history (the user chose to try the live screen again).
void ngmyLiveViewResetCrashes() {
  try {
    html.window.localStorage.remove(_crashKey);
    _checkedThisLaunch = 0;
  } catch (_) {}
}

class _NgmyAdvisorLiveViewState extends State<NgmyAdvisorLiveView> {
  late final String _viewType;
  html.IFrameElement? _frame;
  dynamic _visSub;

  void _markOpen(bool open) {
    try {
      if (open) {
        html.window.localStorage[_openKey] = '${DateTime.now().millisecondsSinceEpoch}';
      } else {
        html.window.localStorage.remove(_openKey);
      }
    } catch (_) {}
  }

  @override
  void initState() {
    super.initState();
    ngmyLiveViewRecentCrashes();
    _markOpen(true);
    // Leaving the app on purpose (home screen, other app) is not a crash.
    _visSub = html.document.onVisibilityChange.listen((_) => _markOpen(html.document.visibilityState == 'visible'));
    _viewType = 'ngmy-advisor-live-${identityHashCode(this)}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.backgroundColor = '#0f172a'
        ..allow = 'autoplay; clipboard-read; clipboard-write'
        ..src = widget.url;
      return _frame!;
    });
  }

  @override
  void didUpdateWidget(covariant NgmyAdvisorLiveView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.url != widget.url) _frame?.src = widget.url;
  }

  @override
  void dispose() {
    _visSub?.cancel();
    _markOpen(false);
    // Stop the live video stream right away — an old view left streaming (after a
    // reconnect, hide or full screen) kept eating memory.
    final f = _frame;
    _frame = null;
    if (f != null) {
      try {
        f.src = 'about:blank';
        f.remove();
      } catch (_) {}
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => HtmlElementView(viewType: _viewType);
}
