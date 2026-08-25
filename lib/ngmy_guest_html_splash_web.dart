// ignore: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

/// Hide the index.html "Loading NGMY" splash after a guest bio (or similar)
/// surface has finished loading so users never see a second Flutter loader.
void ngmyReleaseGuestHtmlSplash() {
  try {
    html.window.dispatchEvent(html.CustomEvent('ngmy-guest-surface-ready'));
  } catch (_) {}
  try {
    // Fallback if the custom event listener is not registered yet.
    final splash = html.document.getElementById('ngmy-splash');
    if (splash != null) {
      splash.style.display = 'none';
    }
  } catch (_) {}
}
