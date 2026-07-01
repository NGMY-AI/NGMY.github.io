import 'dart:typed_data';

import 'ngmy_qr_download_io.dart' as download;
import 'package:share_plus/share_plus.dart';

Future<String> shareNgmyPngBytes(
  Uint8List bytes,
  String filename, {
  String? title,
  String? text,
}) async {
  return shareNgmyBytes(bytes, filename, mimeType: 'image/png', title: title, text: text);
}

Future<String> shareNgmyBytes(
  Uint8List bytes,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) async {
  try {
    await Share.shareXFiles(
      [XFile.fromData(bytes, mimeType: mimeType, name: filename)],
      subject: title,
      text: text,
    );
    return 'Shared $filename';
  } catch (_) {
    if (mimeType == 'image/png') return download.saveNgmyQrPngBytes(bytes, filename);
    return 'Could not share $filename';
  }
}
