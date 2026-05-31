// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

/// Light mode only — sets iOS PWA status bar + page chrome to white.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) {
  final root = html.document.documentElement;

  if (!lightMode) {
    root?.classes.remove('ngmy-app-light');
    html.document.getElementById('ngmy-light-theme-color')?.remove();
    return;
  }

  root?.classes.add('ngmy-app-light');

  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', 'default');

  root?.style.setProperty('background-color', '#ffffff', 'important');
  html.document.body?.style.setProperty('background-color', '#ffffff', 'important');

  // Last theme-color meta wins on iOS — overrides dark prefers-color-scheme chrome in light mode.
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
