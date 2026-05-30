// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

void ngmyOAuthNavigateSameTab(String url) {
  html.window.location.assign(url);
}

void ngmyOAuthCleanBrowserUrl(String url) {
  try {
    html.window.history.replaceState(null, 'NGMY', url);
  } catch (_) {}
}
