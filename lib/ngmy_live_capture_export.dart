import 'dart:typed_data';

import 'package:flutter/foundation.dart';

import 'ngmy_live_capture.dart';
import 'ngmy_live_capture_blob_store.dart';
import 'ngmy_live_capture_media.dart';
import 'ngmy_share_image_io.dart';
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

/// Loads capture bytes from memory URL or IndexedDB blob store.
Future<Uint8List?> ngmyLiveCaptureResolveBytes(NgmyLiveCaptureItem item) async {
  final fromStore = await NgmyLiveCaptureBlobStore.getBytes(item.id);
  if (fromStore != null && fromStore.isNotEmpty) return fromStore;

  final src = item.dataUrl.trim();
  if (src.isEmpty) return null;

  if (src.startsWith('data:')) {
    try {
      return NgmyLiveCaptureMedia.decodeDataUrlBytes(src);
    } catch (e) {
      debugPrint('[live_capture export] dataUrl decode: $e');
    }
  }

  if (kIsWeb && src.startsWith('blob:')) {
    return NgmyLiveCaptureBlobStore.fetchBlobUrlBytes(src);
  }
  return null;
}

Future<bool> ngmyLiveCaptureDownload(NgmyLiveCaptureItem item) async {
  var src = item.dataUrl;
  if (src.isEmpty) {
    src = await NgmyLiveCaptureBlobStore.getPlayableUrl(item.id) ?? '';
  }
  if (src.isNotEmpty) {
    NgmyLiveCaptureMedia.downloadSync(src, item.mimeType, item.title);
    return true;
  }
  final bytes = await ngmyLiveCaptureResolveBytes(item);
  if (bytes == null || bytes.isEmpty) return false;
  return ngmyVaultDownloadBytes(bytes, ngmyLiveCaptureFilename(item), item.mimeType);
}

Future<bool> ngmyLiveCaptureShare(NgmyLiveCaptureItem item) async {
  final bytes = await ngmyLiveCaptureResolveBytes(item);
  if (bytes == null || bytes.isEmpty) {
    if (item.dataUrl.isNotEmpty) {
      await ngmyLiveCaptureDownload(item);
      return true;
    }
    return false;
  }
  final name = ngmyLiveCaptureFilename(item);
  final label = item.kind == 'photo'
      ? 'NGMY photo'
      : item.kind == 'video'
          ? 'NGMY video'
          : 'NGMY voice memo';
  final result = await shareNgmyBytes(bytes, name, mimeType: item.mimeType, title: label, text: item.title);
  return !result.toLowerCase().contains('could not');
}
