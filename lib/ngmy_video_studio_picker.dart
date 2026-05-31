import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:image_picker/image_picker.dart';

/// Reliable video pick on web (bytes) and mobile (path).
Future<({Uint8List? bytes, String? path, String mime})?> pickNgmyStudioVideo() async {
  if (kIsWeb) {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.video,
      allowMultiple: false,
      withData: true,
    );
    if (result == null || result.files.isEmpty) return null;
    final f = result.files.single;
    final bytes = f.bytes;
    if (bytes == null || bytes.isEmpty) return null;
    final mime = f.extension != null && f.extension!.isNotEmpty ? 'video/${f.extension}' : 'video/mp4';
    return (bytes: bytes, path: null, mime: mime);
  }
  final file = await ImagePicker().pickVideo(source: ImageSource.gallery);
  if (file == null) return null;
  return (bytes: null, path: file.path, mime: file.mimeType ?? 'video/mp4');
}

Future<Uint8List?> pickNgmyStudioLogoBytes() async {
  if (kIsWeb) {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.image,
      allowMultiple: false,
      withData: true,
    );
    if (result == null || result.files.isEmpty) return null;
    return result.files.single.bytes;
  }
  final file = await ImagePicker().pickImage(source: ImageSource.gallery);
  if (file == null) return null;
  return File(file.path).readAsBytes();
}
