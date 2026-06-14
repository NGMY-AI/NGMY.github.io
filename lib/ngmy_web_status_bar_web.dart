// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

bool _ngmyWebStatusBarLightApplied = false;
bool _ngmyViewportSyncInstalled = false;

void _ngmySetWebChrome({required bool lightMode}) {
  final root = html.document.documentElement;
  final bg = lightMode ? '#ffffff' : '#121212';
  final scheme = lightMode ? 'light' : 'dark';

  if (lightMode) {
    root?.classes.add('ngmy-app-light');
    root?.classes.remove('ngmy-app-dark');
  } else {
    root?.classes.remove('ngmy-app-light');
    root?.classes.add('ngmy-app-dark');
  }

  root?.style.setProperty('background-color', bg, 'important');
  root?.style.setProperty('color-scheme', scheme);
  html.document.body?.style.setProperty('background-color', bg, 'important');

  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', lightMode ? 'black' : 'black-translucent');

  for (final meta in html.document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute('content', bg);
  }

  for (final view in html.document.querySelectorAll('flutter-view, flt-glass-pane')) {
    view.style.setProperty('background-color', bg, 'important');
  }

  if (lightMode) {
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
  } else {
    html.document.getElementById('ngmy-light-theme-color')?.remove();
  }
}

/// Sync iOS PWA status bar + page chrome with app light/dark mode.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) {
  if (lightMode) {
    if (_ngmyWebStatusBarLightApplied) return;
    _ngmyWebStatusBarLightApplied = true;
    _ngmySetWebChrome(lightMode: true);
    return;
  }

  _ngmyWebStatusBarLightApplied = false;
  _ngmySetWebChrome(lightMode: false);
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
