// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

/// Light mode only — sets iOS PWA status bar + page chrome to white.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) {
  if (!lightMode) return;

  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', 'default');

  final root = html.document.documentElement;
  if (root != null) {
    root.style.backgroundColor = '#ffffff';
  }
  html.document.body?.style.setProperty('background-color', '#ffffff');

  for (final name in ['theme-color']) {
    for (final meta in html.document.querySelectorAll('meta[name="$name"]')) {
      final media = meta.getAttribute('media') ?? '';
      if (media.contains('prefers-color-scheme: dark')) continue;
      meta.setAttribute('content', '#ffffff');
    }
  }
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
