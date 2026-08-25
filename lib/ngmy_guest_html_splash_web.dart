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

bool ngmyIsGuestBioUrlHeldSplash() {
  try {
    final path = html.window.location.pathname ?? '';
    if (RegExp(r'/bio/[^/?#]+', caseSensitive: false).hasMatch(path)) return true;
    if (RegExp(r'/local-bio/[^/?#]+', caseSensitive: false).hasMatch(path)) return true;
    final search = html.window.location.search;
    if (search.contains('ngmy_bio=') || search.contains('ngmy_local_bio=')) return true;
    final hash = html.window.location.hash.replaceFirst('#', '');
    if (hash.startsWith('bio/') ||
        hash.startsWith('/bio/') ||
        hash.startsWith('local-bio/') ||
        hash.startsWith('/local-bio/')) {
      return true;
    }
  } catch (_) {}
  return false;
}
