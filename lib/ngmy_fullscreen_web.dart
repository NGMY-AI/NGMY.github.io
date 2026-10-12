// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:js_util' as js_util;

/// Puts the page in browser full screen (hides the address bar), and on
/// phones that allow it turns the screen sideways like a video.
void ngmyEnterFullscreen({bool landscape = false}) {
  try {
    if (html.document.fullscreenElement == null) {
      final el = html.document.documentElement;
      if (el != null) {
        final p = js_util.callMethod<Object?>(el, 'requestFullscreen', const []);
        if (landscape && p != null) {
          js_util.promiseToFuture<Object?>(p).then((_) => _lockLandscape()).catchError((_) => null);
        }
      }
    } else if (landscape) {
      _lockLandscape();
    }
  } catch (_) {}
}

void _lockLandscape() {
  try {
    final orientation = js_util.getProperty<Object?>(html.window.screen!, 'orientation');
    if (orientation == null) return;
    final p = js_util.callMethod<Object?>(orientation, 'lock', const ['landscape']);
    if (p != null) js_util.promiseToFuture<Object?>(p).catchError((_) => null);
  } catch (_) {}
}

void ngmyExitFullscreen() {
  try {
    final orientation = js_util.getProperty<Object?>(html.window.screen!, 'orientation');
    if (orientation != null) js_util.callMethod<Object?>(orientation, 'unlock', const []);
  } catch (_) {}
  try {
    if (html.document.fullscreenElement != null) html.document.exitFullscreen();
  } catch (_) {}
}
