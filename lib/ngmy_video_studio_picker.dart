import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';

/// ImagePicker gallery on Windows/Linux/macOS often freezes the app — use FilePicker there.
bool get ngmyStudioUseDesktopFilePicker =>
    !kIsWeb &&
    (defaultTargetPlatform == TargetPlatform.windows ||
        defaultTargetPlatform == TargetPlatform.linux ||
        defaultTargetPlatform == TargetPlatform.macOS);

const int kNgmyStudioMaxVideoBytes = 280 * 1024 * 1024;
const int kNgmyStudioMaxLogoBytes = 16 * 1024 * 1024;

class NgmyStudioLogoPick {
  final Uint8List? bytes;
  final String? filePath;

  const NgmyStudioLogoPick({this.bytes, this.filePath});

  bool get hasContent =>
      (bytes != null && bytes!.isNotEmpty) || (filePath != null && filePath!.isNotEmpty);
}

/// Picks a video without loading the whole file into RAM (desktop).
Future<({Uint8List? bytes, String? path, String mime})?> pickNgmyStudioVideo() async {
  if (ngmyStudioUseDesktopFilePicker) {
    return _pickVideoWithFilePicker(loadBytes: false);
  }

  final picker = ImagePicker();
  try {
    final xFile = await picker.pickVideo(source: ImageSource.gallery);
    if (xFile != null) {
      if (kIsWeb) {
        final bytes = await xFile.readAsBytes();
        if (bytes.isNotEmpty) {
          return (bytes: bytes, path: null, mime: _videoMime(xFile.mimeType, xFile.path));
        }
      } else {
        final path = xFile.path;
        if (path.isNotEmpty) {
          await _assertFileSize(path, kNgmyStudioMaxVideoBytes, 'Video');
          return (bytes: null, path: path, mime: _videoMime(xFile.mimeType, path));
        }
      }
    }
  } catch (e) {
    debugPrint('[studio] ImagePicker video: $e');
  }

  if (kIsWeb) {
    return _pickVideoWithFilePicker(loadBytes: true);
  }

  return null;
}

Future<({Uint8List? bytes, String? path, String mime})?> _pickVideoWithFilePicker({required bool loadBytes}) async {
  try {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.video,
      allowMultiple: false,
      withData: loadBytes,
    );
    if (result == null || result.files.isEmpty) return null;
    final f = result.files.single;
    final mime = _videoMime(null, f.name);

    if (loadBytes) {
      final bytes = f.bytes;
      if (bytes != null && bytes.isNotEmpty) {
        if (bytes.length > kNgmyStudioMaxVideoBytes) {
          throw StateError('Video is too large (max ${kNgmyStudioMaxVideoBytes ~/ (1024 * 1024)} MB).');
        }
        return (bytes: bytes, path: null, mime: mime);
      }
      return null;
    }

    final path = f.path;
    if (path == null || path.isEmpty) return null;
    await _assertFileSize(path, kNgmyStudioMaxVideoBytes, 'Video');
    return (bytes: null, path: path, mime: mime);
  } catch (e) {
    debugPrint('[studio] FilePicker video: $e');
    rethrow;
  }
}

Future<NgmyStudioLogoPick?> pickNgmyStudioLogo() async {
  if (ngmyStudioUseDesktopFilePicker) {
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.image,
        allowMultiple: false,
        withData: false,
      );
      if (result == null || result.files.isEmpty) return null;
      final path = result.files.single.path;
      if (path == null || path.isEmpty) return null;
      await _assertFileSize(path, kNgmyStudioMaxLogoBytes, 'Image');
      return NgmyStudioLogoPick(filePath: path);
    } catch (e) {
      debugPrint('[studio] FilePicker logo: $e');
      rethrow;
    }
  }

  final picker = ImagePicker();
  try {
    final xFile = await picker.pickImage(source: ImageSource.gallery);
    if (xFile != null) {
      if (kIsWeb) {
        final bytes = await xFile.readAsBytes();
        if (bytes.length > kNgmyStudioMaxLogoBytes) {
          throw StateError('Image is too large (max ${kNgmyStudioMaxLogoBytes ~/ (1024 * 1024)} MB).');
        }
        if (bytes.isNotEmpty) return NgmyStudioLogoPick(bytes: bytes);
      } else {
        final path = xFile.path;
        if (path.isNotEmpty) {
          await _assertFileSize(path, kNgmyStudioMaxLogoBytes, 'Image');
          return NgmyStudioLogoPick(filePath: path);
        }
      }
    }
  } catch (e) {
    debugPrint('[studio] ImagePicker logo: $e');
  }

  if (kIsWeb) {
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.image,
        allowMultiple: false,
        withData: true,
      );
      if (result != null && result.files.isNotEmpty) {
        final bytes = result.files.single.bytes;
        if (bytes != null && bytes.isNotEmpty) {
          if (bytes.length > kNgmyStudioMaxLogoBytes) {
            throw StateError('Image is too large (max ${kNgmyStudioMaxLogoBytes ~/ (1024 * 1024)} MB).');
          }
          return NgmyStudioLogoPick(bytes: bytes);
        }
      }
    } catch (e) {
      debugPrint('[studio] FilePicker logo: $e');
    }
  }

  return null;
}

Future<void> _assertFileSize(String path, int maxBytes, String label) async {
  final len = await File(path).length();
  if (len > maxBytes) {
    throw StateError('$label is too large (max ${maxBytes ~/ (1024 * 1024)} MB).');
  }
}

String _videoMime(String? mime, String? path) {
  if (mime != null && mime.contains('/')) return mime;
  final p = (path ?? '').toLowerCase();
  if (p.endsWith('.mov')) return 'video/quicktime';
  if (p.endsWith('.webm')) return 'video/webm';
  return 'video/mp4';
}
