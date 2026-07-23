import 'dart:async';
import 'dart:html' as html;
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';

const int kNgmyVaultMaxVideoBytes = 80 * 1024 * 1024;

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

Future<Uint8List?> _readFileAsBytes(html.File file) async {
  final reader = html.FileReader();
  final done = Completer<Uint8List?>();
  reader.onLoad.listen((_) {
    final r = reader.result;
    if (r is ByteBuffer) {
      done.complete(Uint8List.view(r));
    } else if (r is Uint8List) {
      done.complete(Uint8List.fromList(r));
    } else {
      done.complete(null);
    }
  });
  reader.onError.listen((_) {
    if (!done.isCompleted) done.complete(null);
  });
  reader.readAsArrayBuffer(file);
  return done.future;
}

/// Native browser file input — most reliable path for gallery videos on mobile web.
Future<({Uint8List bytes, String mime, String name})?> _pickWithHtmlInput() async {
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
    const Duration(minutes: 5),
    onTimeout: () {
      cleanup();
      return null;
    },
  );
  if (file == null) return null;
  if (file.size > kNgmyVaultMaxVideoBytes) {
    throw StateError('Video is too large (max ${kNgmyVaultMaxVideoBytes ~/ (1024 * 1024)} MB).');
  }
  final bytes = await _readFileAsBytes(file);
  if (bytes == null || bytes.isEmpty) return null;
  final name = file.name;
  final mime = ngmyVaultVideoMime(file.type, name);
  return (bytes: bytes, mime: mime, name: name);
}

Future<({Uint8List bytes, String mime, String name})?> _pickWithFilePicker() async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.video,
    allowMultiple: false,
    withData: true,
  );
  if (result == null || result.files.isEmpty) return null;
  final f = result.files.single;
  final bytes = f.bytes;
  if (bytes == null || bytes.isEmpty) return null;
  if (bytes.length > kNgmyVaultMaxVideoBytes) {
    throw StateError('Video is too large (max ${kNgmyVaultMaxVideoBytes ~/ (1024 * 1024)} MB).');
  }
  final name = f.name;
  final mime = ngmyVaultVideoMime(null, name);
  return (bytes: Uint8List.fromList(bytes), mime: mime, name: name);
}

/// Pick a gallery video and return its bytes for private vault storage.
Future<({Uint8List bytes, String mime, String name})?> ngmyVaultPickVideoBytes() async {
  try {
    final fromPicker = await _pickWithFilePicker();
    if (fromPicker != null) return fromPicker;
  } catch (e) {
    debugPrint('[vault] file_picker video: $e');
    if (e is StateError) rethrow;
  }
  try {
    return await _pickWithHtmlInput();
  } catch (e) {
    debugPrint('[vault] html video pick: $e');
    rethrow;
  }
}
