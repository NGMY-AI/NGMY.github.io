import 'dart:async';
import 'dart:html' as html;
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';

import 'ngmy_vault_pick_video_types.dart';

/// 280 MB — supports 3+ minute clips (and longer at typical phone bitrates).
const int kNgmyVaultMaxVideoBytes = 280 * 1024 * 1024;

String ngmyVaultVideoMime(String? mime, String name) {
  final m = (mime ?? '').trim().toLowerCase();
  if (m.startsWith('video/')) return m;
  final n = name.toLowerCase();
  if (n.endsWith('.webm')) return 'video/webm';
  if (n.endsWith('.mov') || n.endsWith('.qt')) return 'video/quicktime';
  if (n.endsWith('.m4v')) return 'video/x-m4v';
  if (n.endsWith('.ogg') || n.endsWith('.ogv')) return 'video/ogg';
  if (n.endsWith('.avi')) return 'video/x-msvideo';
  return 'video/mp4';
}

void _checkVideoSize(int size) {
  if (size > kNgmyVaultMaxVideoBytes) {
    throw StateError(
      'Video is too large (max ${kNgmyVaultMaxVideoBytes ~/ (1024 * 1024)} MB). '
      'Try a shorter clip or lower quality.',
    );
  }
}

/// Native browser file input — stores [html.File] as Blob without reading into RAM.
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
    const Duration(minutes: 10),
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

Future<NgmyVaultPickedVideo?> _pickWithFilePicker() async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.video,
    allowMultiple: false,
    withData: false,
  );
  if (result == null || result.files.isEmpty) return null;
  final f = result.files.single;
  final size = f.size;
  if (size <= 0) return null;
  _checkVideoSize(size);

  // Small clips only — FilePicker on web may still load bytes.
  if (size <= 48 * 1024 * 1024 && f.bytes != null && f.bytes!.isNotEmpty) {
    return NgmyVaultPickedVideo(
      mime: ngmyVaultVideoMime(null, f.name),
      name: f.name,
      sizeBytes: size,
      bytes: Uint8List.fromList(f.bytes!),
    );
  }

  // Large file picked without bytes — ask user to use gallery picker again.
  if (f.bytes == null || f.bytes!.isEmpty) {
    throw StateError(
      'That video is too large to load all at once. '
      'Use Add video again and pick from your gallery (3+ minute clips are supported).',
    );
  }

  final bytes = f.bytes!;
  return NgmyVaultPickedVideo(
    mime: ngmyVaultVideoMime(null, f.name),
    name: f.name,
    sizeBytes: bytes.length,
    bytes: Uint8List.fromList(bytes),
  );
}

/// Pick a gallery video for private vault storage (Quick Dial).
Future<NgmyVaultPickedVideo?> ngmyVaultPickVideoForStore() async {
  try {
    final fromHtml = await _pickWithHtmlInput();
    if (fromHtml != null) return fromHtml;
  } catch (e) {
    debugPrint('[vault] html video pick: $e');
    if (e is StateError) rethrow;
  }
  try {
    return await _pickWithFilePicker();
  } catch (e) {
    debugPrint('[vault] file_picker video: $e');
    rethrow;
  }
}
