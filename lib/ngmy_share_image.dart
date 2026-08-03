import 'dart:typed_data';

import 'ngmy_share_image_io.dart' if (dart.library.html) 'ngmy_share_image_web.dart' as impl;

Future<String> shareNgmyPngBytes(
  Uint8List bytes,
  String filename, {
  String? title,
  String? text,
}) {
  return impl.shareNgmyPngBytes(bytes, filename, title: title, text: text);
}

Future<String> shareNgmyBytes(
  Uint8List bytes,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) {
  return impl.shareNgmyBytes(bytes, filename, mimeType: mimeType, title: title, text: text);
}

Future<String> shareNgmyCaptureUrl(
  String url,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) {
  return impl.shareNgmyCaptureUrl(url, filename, mimeType: mimeType, title: title, text: text);
}
