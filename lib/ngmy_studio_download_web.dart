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

bool _ngmyIsAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

String _ensureMp4Filename(String filename) {
  var name = filename.trim().isEmpty ? 'ngmy_video.mp4' : filename.trim();
  if (name.toLowerCase().endsWith('.webm')) {
    name = '${name.substring(0, name.length - 5)}.mp4';
  } else if (!name.toLowerCase().endsWith('.mp4') && !name.toLowerCase().endsWith('.mov')) {
    name = name.contains('.') ? name.replaceAll(RegExp(r'\.[^.]+$'), '.mp4') : '$name.mp4';
  }
  return name;
}

void ngmyStageIosStudioVideo(String blobUrl, String filename) {
  ngmyClearStagedIosStudioVideo();
  _pendingUrl = blobUrl;
  _pendingName = _ensureMp4Filename(filename);
}

/// Stage export for iPhone Photos — always MP4 blob + .mp4 filename.
Future<void> ngmyStageIosStudioVideoFromBlob(html.Blob blob, String filename) async {
  ngmyClearStagedIosStudioVideo();
  final name = _ensureMp4Filename(filename);
  if (_ngmyIsAppleMobileBrowser() && blob.type.contains('webm')) {
    throw StateError('WebM cannot be saved to iPhone Photos. Re-export after updating the app.');
  }
  final type = blob.type.contains('mp4') || blob.type.contains('quicktime') ? blob.type : 'video/mp4';
  final ready = (type == blob.type) ? blob : html.Blob([blob], type);
  _pendingUrl = html.Url.createObjectUrlFromBlob(ready);
  _pendingName = name;
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
    if (_ngmyIsAppleMobileBrowser() && blob.type.contains('webm')) {
      return false;
    }
    var safeName = _ensureMp4Filename(filename);
    final type = _ngmyIsAppleMobileBrowser()
        ? 'video/mp4'
        : (blob.type.isNotEmpty ? blob.type : 'video/mp4');
    final shareBlob = _ngmyIsAppleMobileBrowser() && !blob.type.contains('mp4')
        ? html.Blob([blob], 'video/mp4')
        : blob;
    final file = html.File([shareBlob], safeName, {'type': type});
    final shareData = js_util.jsify(<String, Object>{
      'files': [file],
      'title': safeName,
    });
    final nav = html.window.navigator;
    final canShare = js_util.callMethod<bool?>(nav, 'canShare', [shareData]);
    if (canShare == false && !_ngmyIsAppleMobileBrowser()) return false;
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

  if (_ngmyIsAppleMobileBrowser()) {
    final blob = await _blobFromHref(url);
    if (blob != null && blob.type.contains('webm')) {
      return false;
    }
  }

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
