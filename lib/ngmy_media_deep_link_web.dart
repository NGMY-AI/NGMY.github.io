import 'dart:html' as html;

String? _ngmyPendingMediaPostId;

String ngmyMediaPostShareUrl(String postId) {
  final id = postId.trim();
  try {
    final origin = html.window.location.origin;
    if (origin.isNotEmpty) {
      return '$origin/?media=${Uri.encodeComponent(id)}';
    }
  } catch (_) {}
  return 'https://ngmy.org/?media=${Uri.encodeComponent(id)}';
}

void ngmyCaptureMediaPostLaunchIntent() {
  try {
    final uri = Uri.parse(html.window.location.href);
    final media = uri.queryParameters['media']?.trim() ?? uri.queryParameters['post']?.trim();
    if (media != null && media.isNotEmpty) {
      _ngmyPendingMediaPostId = media;
      html.window.sessionStorage['ngmy_media_post'] = media;
      final qp = Map<String, String>.from(uri.queryParameters)
        ..remove('media')
        ..remove('post');
      final clean = uri.replace(queryParameters: qp.isEmpty ? null : qp);
      html.window.history.replaceState(null, '', clean.toString());
      return;
    }
    final stored = html.window.sessionStorage['ngmy_media_post']?.trim();
    if (stored != null && stored.isNotEmpty) {
      _ngmyPendingMediaPostId = stored;
    }
  } catch (_) {}
}

String? ngmyTakePendingMediaPostId() {
  try {
    html.window.sessionStorage.remove('ngmy_media_post');
  } catch (_) {}
  final id = _ngmyPendingMediaPostId;
  _ngmyPendingMediaPostId = null;
  return id?.trim().isNotEmpty == true ? id!.trim() : null;
}
