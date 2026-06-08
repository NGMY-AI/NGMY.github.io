import 'dart:html' as html;
import 'dart:typed_data';

import 'ngmy_qr_download_web.dart' as download;

Future<String> shareNgmyPngBytes(
  Uint8List bytes,
  String filename, {
  String? title,
  String? text,
}) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.png') ? safeName : '$safeName.png';

  try {
    final blob = html.Blob([bytes], 'image/png');
    final file = html.File([blob], name, {'type': 'image/png'});
    final nav = html.window.navigator;
    final shareData = <Object, Object?>{
      'title': title ?? 'NGMY Product QR',
      'text': text ?? '',
      'files': [file],
    };
    await nav.share(shareData);
    return 'Shared $name';
  } catch (_) {}

  return download.saveNgmyQrPngBytes(bytes, name);
}
