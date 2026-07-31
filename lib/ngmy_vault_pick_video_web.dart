import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/foundation.dart';

import 'ngmy_vault_pick_video_types.dart';

/// Local device storage via IndexedDB — long clips, up to ~2 GB per video.
/// Actual limit depends on free space on the user's phone/browser.
const int kNgmyVaultMaxVideoBytes = 2 * 1024 * 1024 * 1024;

String ngmyVaultVideoMime(String? mime, String name) {
  final m = (mime ?? '').trim().toLowerCase();
  if (m.startsWith('video/')) return m.contains('quicktime') ? 'video/mp4' : m;
  final n = name.toLowerCase();
  if (n.endsWith('.webm')) return 'video/webm';
  if (n.endsWith('.mov') || n.endsWith('.qt') || n.endsWith('.m4v')) return 'video/mp4';
  if (n.endsWith('.ogg') || n.endsWith('.ogv')) return 'video/ogg';
  if (n.endsWith('.avi')) return 'video/x-msvideo';
  return 'video/mp4';
}

void _checkVideoSize(int size) {
  if (size > kNgmyVaultMaxVideoBytes) {
    throw StateError(
      'Video is too large (max ${kNgmyVaultMaxVideoBytes ~/ (1024 * 1024 * 1024)} GB). '
      'Free up space on your device and try a smaller export.',
    );
  }
}

/// Gallery file input — returns [html.File] without loading into Dart memory.
Future<NgmyVaultPickedVideo?> _pickWithHtmlInput() async {
  final input = html.FileUploadInputElement()
    ..accept = 'video/mp4,video/quicktime,video/webm,video/x-m4v,video/*'
    ..style.display = 'none';
  html.document.body?.append(input);

  final completer = Completer<html.File?>();
  void cleanup() {
    try {
      input.remove();
    } catch (_) {}
  }

  input.onChange.listen((_) {
    final file = input.files?.isNotEmpty == true ? input.files!.first : null;
    cleanup();
    if (!completer.isCompleted) completer.complete(file);
  });

  input.click();

  final file = await completer.future.timeout(
    const Duration(hours: 2),
    onTimeout: () {
      cleanup();
      return null;
    },
  );
  if (file == null) return null;
  _checkVideoSize(file.size);
  final name = file.name;
  final mime = ngmyVaultVideoMime(file.type, name);
  return NgmyVaultPickedVideo(
    mime: mime,
    name: name,
    sizeBytes: file.size,
    webBlob: file,
  );
}

/// Pick a gallery video for private vault storage (Quick Dial).
Future<NgmyVaultPickedVideo?> ngmyVaultPickVideoForStore() async {
  try {
    return await _pickWithHtmlInput();
  } catch (e) {
    debugPrint('[vault] html video pick: $e');
    if (e is StateError) rethrow;
    rethrow;
  }
}
