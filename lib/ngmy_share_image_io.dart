import 'dart:typed_data';

import 'ngmy_qr_download_io.dart' as download;

Future<String> shareNgmyPngBytes(
  Uint8List bytes,
  String filename, {
  String? title,
  String? text,
}) async {
  return download.saveNgmyQrPngBytes(bytes, filename);
}
