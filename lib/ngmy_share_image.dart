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
