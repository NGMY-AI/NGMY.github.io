// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

bool _ngmyWebStatusBarLightApplied = false;
bool _ngmyViewportSyncInstalled = false;

/// Light mode only — sets iOS PWA status bar + page chrome to white.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) {
  final root = html.document.documentElement;

  if (!lightMode) {
    if (!_ngmyWebStatusBarLightApplied) return;
    _ngmyWebStatusBarLightApplied = false;
    root?.classes.remove('ngmy-app-light');
    root?.style.removeProperty('color-scheme');
    html.document.getElementById('ngmy-light-theme-color')?.remove();
    return;
  }

  if (_ngmyWebStatusBarLightApplied) return;
  _ngmyWebStatusBarLightApplied = true;

  root?.classes.add('ngmy-app-light');
  root?.style.setProperty('background-color', '#ffffff', 'important');
  root?.style.setProperty('color-scheme', 'light');

  html.document.body?.style.setProperty('background-color', '#ffffff', 'important');

  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', 'black');

  for (final meta in html.document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute('content', '#ffffff');
  }

  for (final view in html.document.querySelectorAll('flutter-view, flt-glass-pane')) {
    view.style.setProperty('background-color', '#ffffff', 'important');
  }

  final existing = html.document.getElementById('ngmy-light-theme-color');
  if (existing != null) {
    existing.setAttribute('content', '#ffffff');
    return;
  }
  final head = html.document.head;
  if (head == null) return;
  final meta = html.MetaElement()
    ..id = 'ngmy-light-theme-color'
    ..name = 'theme-color'
    ..content = '#ffffff';
  head.append(meta);
}

/// Scroll to top once on cold start / bfcache restore — no resize storms.
void ngmyInstallWebViewportSync() {
  if (_ngmyViewportSyncInstalled) return;
  _ngmyViewportSyncInstalled = true;

  void scrollTopOnce() {
    html.window.scrollTo(0, 0);
    if (html.document.body != null) {
      html.document.body!.scrollTop = 0;
    }
    html.document.documentElement?.scrollTop = 0;
  }

  scrollTopOnce();
  html.window.onPageShow.listen((_) => scrollTopOnce());
}
