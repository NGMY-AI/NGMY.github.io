import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_studio_web_video_url.dart' if (dart.library.io) 'ngmy_studio_web_video_url_stub.dart' as web_vid;

bool get ngmyStudioUseDesktopFilePicker =>
    !kIsWeb &&
    (defaultTargetPlatform == TargetPlatform.windows ||
        defaultTargetPlatform == TargetPlatform.linux ||
        defaultTargetPlatform == TargetPlatform.macOS);

const int kNgmyStudioMaxVideoBytes = 280 * 1024 * 1024;
const int kNgmyStudioMaxWebVideoBytes = 80 * 1024 * 1024;
const int kNgmyStudioMaxLogoBytes = 16 * 1024 * 1024;

class NgmyStudioLogoPick {
  final Uint8List? bytes;
  final String? filePath;

  const NgmyStudioLogoPick({this.bytes, this.filePath});

  bool get hasContent =>
      (bytes != null && bytes!.isNotEmpty) || (filePath != null && filePath!.isNotEmpty);
}

Future<({Uint8List? bytes, String? path, String mime})?> pickNgmyStudioVideo() async {
  if (ngmyStudioUseDesktopFilePicker) {
    return _pickVideoWithFilePicker(loadBytes: false, maxBytes: kNgmyStudioMaxVideoBytes);
  }

  if (kIsWeb) {
    try {
      final blobUrl = await web_vid.pickWebVideoObjectUrl();
      if (blobUrl != null && blobUrl.isNotEmpty) {
        return (bytes: null, path: blobUrl, mime: 'video/mp4');
      }
    } catch (e) {
      debugPrint('[studio] web video input: $e');
    }

    final fromPicker = await _pickVideoWithFilePicker(loadBytes: false, maxBytes: kNgmyStudioMaxWebVideoBytes);
    if (fromPicker != null) return fromPicker;

    return _pickVideoWithFilePicker(loadBytes: true, maxBytes: kNgmyStudioMaxWebVideoBytes);
  }

  final picker = ImagePicker();
  try {
    final xFile = await picker.pickVideo(source: ImageSource.gallery);
    if (xFile != null && xFile.path.isNotEmpty) {
      await _assertFileSize(xFile.path, kNgmyStudioMaxVideoBytes);
      return (bytes: null, path: xFile.path, mime: _videoMime(xFile.mimeType, xFile.path));
    }
  } catch (e) {
    debugPrint('[studio] ImagePicker video: $e');
    rethrow;
  }

  return null;
}

Future<({Uint8List? bytes, String? path, String mime})?> _pickVideoWithFilePicker({
  required bool loadBytes,
  required int maxBytes,
}) async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.video,
    allowMultiple: false,
    withData: loadBytes,
  );
  if (result == null || result.files.isEmpty) return null;
  final f = result.files.single;
  final mime = _videoMime(null, f.name);

  if (f.size != null && f.size! > maxBytes) {
    throw StateError('Video is too large (max ${maxBytes ~/ (1024 * 1024)} MB).');
  }

  if (loadBytes) {
    final bytes = f.bytes;
    if (bytes != null && bytes.isNotEmpty) {
      if (bytes.length > maxBytes) {
        throw StateError('Video is too large (max ${maxBytes ~/ (1024 * 1024)} MB).');
      }
      return (bytes: bytes, path: null, mime: mime);
    }
    return null;
  }

  final path = f.path;
  if (path == null || path.isEmpty) return null;
  if (!kIsWeb) {
    await _assertFileSize(path, maxBytes);
  }
  return (bytes: null, path: path, mime: mime);
}

Future<NgmyStudioLogoPick?> pickNgmyStudioLogo() async {
  if (ngmyStudioUseDesktopFilePicker) {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.image,
      allowMultiple: false,
      withData: false,
    );
    if (result == null || result.files.isEmpty) return null;
    final path = result.files.single.path;
    if (path == null || path.isEmpty) return null;
    await _assertFileSize(path, kNgmyStudioMaxLogoBytes);
    return NgmyStudioLogoPick(filePath: path);
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
      } else if (xFile.path.isNotEmpty) {
        await _assertFileSize(xFile.path, kNgmyStudioMaxLogoBytes);
        return NgmyStudioLogoPick(filePath: xFile.path);
      }
    }
  } catch (e) {
    debugPrint('[studio] ImagePicker logo: $e');
  }

  if (kIsWeb) {
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
  }

  return null;
}

Future<void> _assertFileSize(String path, int maxBytes) async {
  final len = await File(path).length();
  if (len > maxBytes) {
    throw StateError('File is too large (max ${maxBytes ~/ (1024 * 1024)} MB).');
  }
}

String _videoMime(String? mime, String? path) {
  if (mime != null && mime.contains('/')) return mime;
  final p = (path ?? '').toLowerCase();
  if (p.endsWith('.mov')) return 'video/quicktime';
  if (p.endsWith('.webm')) return 'video/webm';
  return 'video/mp4';
}
