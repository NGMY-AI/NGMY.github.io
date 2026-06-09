// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:js_util' as js_util;

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
  final name = _pendingName ?? 'ngmy_video.mp4';
  if (url == null || url.isEmpty) return;
  _pendingName = null;
  _pendingUrl = null;

  // Same-tab navigation keeps blob URLs alive longer on iOS Safari/PWA.
  final anchor = html.AnchorElement()
    ..href = url
    ..target = '_blank'
    ..rel = 'noopener'
    ..download = name;
  html.document.body?.append(anchor);
  anchor.click();
  anchor.remove();

  if (url.startsWith('blob:')) {
    Future<void>.delayed(const Duration(seconds: 180), () {
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    });
  }
}

Future<html.Blob?> _blobFromHref(String href) async {
  final src = href.trim();
  if (src.isEmpty) return null;
  if (src.startsWith('blob:') || src.startsWith('http') || src.startsWith('data:')) {
    try {
      final resp = await html.window.fetch(src);
      return await resp.blob();
    } catch (_) {}
  }
  return null;
}

String? get ngmyStagedIosStudioVideoUrl => _pendingUrl;

Future<bool> ngmyTryShareStagedStudioVideo() async {
  final url = _pendingUrl;
  final name = _pendingName ?? 'ngmy_video.mp4';
  if (url == null || url.isEmpty) return false;
  return ngmyTryShareStudioVideoUrl(url, name);
}

Future<bool> ngmyTryShareStudioVideoUrl(String href, String filename) async {
  try {
    final blob = await _blobFromHref(href);
    if (blob == null || blob.size <= 0) return false;
    var safeName = filename.trim().isEmpty ? 'ngmy_video.mp4' : filename.trim();
    if (!safeName.contains('.')) safeName = '$safeName.mp4';
    final type = blob.type.isNotEmpty ? blob.type : 'video/mp4';
    final file = html.File([blob], safeName, {'type': type});
    final shareData = js_util.jsify(<String, Object>{
      'files': [file],
      'title': safeName,
    });
    final nav = html.window.navigator;
    final canShare = js_util.callMethod<bool?>(nav, 'canShare', [shareData]);
    if (canShare == false) return false;
    await js_util.promiseToFuture<void>(js_util.callMethod(nav, 'share', [shareData]));
    return true;
  } catch (e) {
    return false;
  }
}

/// Anchor download — works on many Android/desktop browsers.
Future<bool> ngmyTryAnchorDownloadStudioVideo(String href, String filename) async {
  try {
    var safeName = filename.trim().isEmpty ? 'ngmy_video.mp4' : filename.trim();
    if (!safeName.contains('.')) safeName = '$safeName.mp4';
    final anchor = html.AnchorElement()
      ..href = href
      ..download = safeName
      ..style.display = 'none';
    html.document.body?.append(anchor);
    anchor.click();
    await Future<void>.delayed(const Duration(milliseconds: 400));
    anchor.remove();
    return true;
  } catch (_) {
    return false;
  }
}

/// Best-effort save while the staged blob is still alive (call from a button tap).
Future<bool> ngmySaveStagedStudioVideo() async {
  final url = _pendingUrl;
  final name = _pendingName ?? 'ngmy_video.mp4';
  if (url == null || url.isEmpty) return false;

  if (await ngmyTryShareStagedStudioVideo()) {
    Future<void>.delayed(const Duration(seconds: 45), ngmyClearStagedIosStudioVideo);
    return true;
  }
  if (await ngmyTryAnchorDownloadStudioVideo(url, name)) {
    Future<void>.delayed(const Duration(seconds: 45), ngmyClearStagedIosStudioVideo);
    return true;
  }
  ngmyOpenStagedIosStudioVideo();
  return false;
}
