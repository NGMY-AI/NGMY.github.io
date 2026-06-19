String? _ngmyPendingMediaPostId;

String ngmyMediaPostShareUrl(String postId) {
  final id = postId.trim();
  return 'https://ngmy.org/?media=${Uri.encodeComponent(id)}';
}

void ngmyCaptureMediaPostLaunchIntent() {
  try {
    final id = Uri.base.queryParameters['media']?.trim() ?? Uri.base.queryParameters['post']?.trim();
    if (id != null && id.isNotEmpty) _ngmyPendingMediaPostId = id;
  } catch (_) {}
}

String? ngmyTakePendingMediaPostId() {
  final id = _ngmyPendingMediaPostId;
  _ngmyPendingMediaPostId = null;
  return id;
}
