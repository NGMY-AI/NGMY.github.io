import 'package:flutter/foundation.dart';

import 'ngmy_live_capture.dart';
import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_media.dart';
import 'ngmy_share_image.dart';
import 'ngmy_vault_web_io.dart';

String ngmyLiveCaptureFilename(NgmyLiveCaptureItem item) {
  final base = item.title.replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_').replaceAll(RegExp(r'_+'), '_');
  final safe = base.length > 48 ? base.substring(0, 48) : base;
  return '$safe.${ngmyLiveCaptureFileExt(item.mimeType, kind: item.kind)}';
}

String ngmyLiveCaptureFileExt(String mimeType, {required String kind}) {
  final m = mimeType.split(';').first.trim().toLowerCase();
  if (kind == 'photo' || m.contains('jpeg') || m.contains('jpg')) return 'jpg';
  if (m.contains('png')) return 'png';
  if (m.contains('audio/mp4') || m.contains('audio/aac') || m.contains('audio/m4a')) return 'm4a';
  if (m.contains('audio/mpeg') || m.contains('mp3')) return 'mp3';
  if (m.contains('audio/wav')) return 'wav';
  if (m.contains('audio/ogg')) return 'ogg';
  if (m.contains('video/mp4')) return 'mp4';
  if (m.contains('video/webm')) return 'webm';
  if (m.contains('video')) return 'mp4';
  if (m.contains('audio')) return 'm4a';
  return 'bin';
}

String _cleanMime(String mimeType) {
  final base = mimeType.split(';').first.trim().toLowerCase();
  if (base.startsWith('video/') || base.startsWith('audio/')) return base;
  if (base.isEmpty && mimeType.toLowerCase().contains('video')) return 'video/mp4';
  return base.isEmpty ? 'application/octet-stream' : base;
}

String _shareLabel(NgmyLiveCaptureItem item) {
  if (item.kind == 'photo') return 'NGMY photo';
  if (item.kind == 'video') return 'NGMY video';
  return 'NGMY voice memo';
}

bool _shareMsgFailed(String msg) => msg.toLowerCase().contains('could not');

/// Ensures a blob: or data: URL the player (and share) can use.
Future<String> ngmyLiveCaptureEnsurePlayableUrl(NgmyLiveCaptureItem item) async {
  var src = item.dataUrl.trim();
  if (src.isNotEmpty) return src;
  final mime = _cleanMime(item.mimeType);
  src = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id, mimeType: mime) ?? '';
  if (src.isNotEmpty) item.dataUrl = src;
  return src;
}

/// Loads capture bytes from IndexedDB, blob URL, or data URL.
Future<Uint8List?> ngmyLiveCaptureResolveBytes(NgmyLiveCaptureItem item) async {
  final mime = _cleanMime(item.mimeType);
  final fromStore = await NgmyLiveCaptureBlobStore.getBytes(item.id);
  if (fromStore != null && fromStore.isNotEmpty) return fromStore;

  var src = item.dataUrl.trim();
  if (src.isEmpty) {
    src = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id, mimeType: mime) ?? '';
  }

  if (kIsWeb && src.startsWith('blob:')) {
    final fromBlob = await NgmyLiveCaptureBlobStore.fetchBlobUrlBytes(src);
    if (fromBlob != null && fromBlob.isNotEmpty) return fromBlob;
  }

  if (src.startsWith('data:')) {
    try {
      return NgmyLiveCaptureMedia.decodeDataUrlBytes(src);
    } catch (e) {
      debugPrint('[live_capture export] dataUrl decode: $e');
    }
  }

  return null;
}

Future<bool> ngmyLiveCaptureDownload(NgmyLiveCaptureItem item) async {
  final mime = _cleanMime(item.mimeType);
  final src = await ngmyLiveCaptureEnsurePlayableUrl(item);
  if (src.isNotEmpty) {
    return NgmyLiveCaptureMedia.downloadAsync(src, mime, item.title);
  }
  final bytes = await ngmyLiveCaptureResolveBytes(item);
  if (bytes == null || bytes.isEmpty) return false;
  return ngmyVaultDownloadBytes(bytes, ngmyLiveCaptureFilename(item), mime);
}

Future<bool> ngmyLiveCaptureShare(NgmyLiveCaptureItem item) async {
  final mime = _cleanMime(item.mimeType);
  final name = ngmyLiveCaptureFilename(item);
  final label = _shareLabel(item);

  final src = await ngmyLiveCaptureEnsurePlayableUrl(item);

  // Web: share straight from blob URL — avoids loading huge videos into RAM.
  if (kIsWeb && src.isNotEmpty) {
    final urlResult = await shareNgmyCaptureUrl(
      src,
      name,
      mimeType: mime,
      title: label,
      text: item.title,
    );
    if (!_shareMsgFailed(urlResult)) return true;
  }

  final bytes = await ngmyLiveCaptureResolveBytes(item);
  if (bytes != null && bytes.isNotEmpty) {
    final result = await shareNgmyBytes(bytes, name, mimeType: mime, title: label, text: item.title);
    if (!_shareMsgFailed(result)) return true;
  }

  // Always fall back to saving the file — user can share from Photos/Files.
  if (src.isNotEmpty) {
    final saved = await NgmyLiveCaptureMedia.downloadAsync(src, mime, item.title);
    if (saved) return true;
  }

  if (bytes != null && bytes.isNotEmpty) {
    return ngmyVaultDownloadBytes(bytes, name, mime);
  }

  return false;
}
