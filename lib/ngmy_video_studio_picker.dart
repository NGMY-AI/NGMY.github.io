import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';

/// Picks a video — ImagePicker first (works on mobile browsers), FilePicker as fallback on web.
Future<({Uint8List? bytes, String? path, String mime})?> pickNgmyStudioVideo() async {
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
          return (bytes: null, path: path, mime: _videoMime(xFile.mimeType, path));
        }
      }
    }
  } catch (e) {
    debugPrint('[studio] ImagePicker video: $e');
  }

  if (kIsWeb) {
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.video,
        allowMultiple: false,
        withData: true,
      );
      if (result != null && result.files.isNotEmpty) {
        final f = result.files.single;
        final bytes = f.bytes;
        if (bytes != null && bytes.isNotEmpty) {
          return (bytes: bytes, path: null, mime: _videoMime(null, f.name));
        }
      }
    } catch (e) {
      debugPrint('[studio] FilePicker video: $e');
    }
  }

  return null;
}

Future<Uint8List?> pickNgmyStudioLogoBytes() async {
  final picker = ImagePicker();
  try {
    final xFile = await picker.pickImage(source: ImageSource.gallery);
    if (xFile != null) {
      final bytes = await xFile.readAsBytes();
      if (bytes.isNotEmpty) return bytes;
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
        if (bytes != null && bytes.isNotEmpty) return bytes;
      }
    } catch (e) {
      debugPrint('[studio] FilePicker logo: $e');
    }
  } else {
    try {
      final file = await picker.pickImage(source: ImageSource.gallery);
      if (file != null && file.path.isNotEmpty) {
        return File(file.path).readAsBytes();
      }
    } catch (_) {}
  }

  return null;
}

String _videoMime(String? mime, String? path) {
  if (mime != null && mime.contains('/')) return mime;
  final p = (path ?? '').toLowerCase();
  if (p.endsWith('.mov')) return 'video/quicktime';
  if (p.endsWith('.webm')) return 'video/webm';
  return 'video/mp4';
}
