// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

String? _pendingUrl;
String? _pendingName;

bool get ngmyHasStagedIosStudioVideo =>
    _pendingUrl != null && _pendingUrl!.trim().isNotEmpty;

String? get ngmyStagedIosStudioVideoName => _pendingName;

void ngmyClearStagedIosStudioVideo() {
  final url = _pendingUrl;
  _pendingUrl = null;
  _pendingName = null;
  if (url != null && url.startsWith('blob:')) {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  }
}

void ngmyStageIosStudioVideo(String blobUrl, String filename) {
  ngmyClearStagedIosStudioVideo();
  _pendingUrl = blobUrl;
  _pendingName = filename;
}

void ngmyOpenStagedIosStudioVideo() {
  final url = _pendingUrl;
  _pendingUrl = null;
  _pendingName = null;
  if (url == null || url.isEmpty) return;
  html.window.open(url, '_blank');
  if (url.startsWith('blob:')) {
    Future<void>.delayed(const Duration(seconds: 120), () {
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    });
  }
}
