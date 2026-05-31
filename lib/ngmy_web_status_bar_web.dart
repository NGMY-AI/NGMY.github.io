// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

/// Light mode only — sets iOS PWA status bar + page chrome to white.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) {
  final root = html.document.documentElement;

  if (!lightMode) {
    root?.classes.remove('ngmy-app-light');
    root?.style.removeProperty('color-scheme');
    html.document.getElementById('ngmy-light-theme-color')?.remove();
    return;
  }

  root?.classes.add('ngmy-app-light');
  root?.style.setProperty('background-color', '#ffffff', 'important');
  root?.style.setProperty('color-scheme', 'light');

  html.document.body?.style.setProperty('background-color', '#ffffff', 'important');

  // iOS standalone: "black" = dark icons on solid white status bar (not a black bar).
  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', 'black');

  // Force every theme-color to white while app is in light mode (beats system dark preference).
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

void ngmyInstallWebViewportSync() {
  void resetViewport() {
    html.window.scrollTo(0, 0);
    try {
      html.window.dispatchEvent(html.Event('resize'));
    } catch (_) {}
  }

  resetViewport();
  for (final ms in [0, 50, 150, 400, 1000, 2000, 3500]) {
    Future<void>.delayed(Duration(milliseconds: ms), resetViewport);
  }

  html.window.onLoad.listen((_) => resetViewport());
  html.window.onPageShow.listen((_) => resetViewport());

  html.window.visualViewport?.onResize.listen((_) => resetViewport());
  html.window.visualViewport?.onScroll.listen((_) {
    if (html.window.scrollY != 0 || (html.window.visualViewport?.offsetTop ?? 0) != 0) {
      resetViewport();
    }
  });

  html.document.onTouchStart.listen((_) {
    if (html.window.scrollY != 0 || (html.window.visualViewport?.offsetTop ?? 0) != 0) {
      resetViewport();
    }
  });
}
