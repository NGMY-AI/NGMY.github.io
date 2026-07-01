import 'dart:html' as html;
import 'dart:typed_data';

import 'ngmy_qr_download_web.dart' as download;

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
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final ext = mimeType == 'image/gif' ? '.gif' : '.png';
  final name = safeName.endsWith(ext) ? safeName : '$safeName$ext';

  try {
    final blob = html.Blob([bytes], mimeType);
    final file = html.File([blob], name, {'type': mimeType});
    final nav = html.window.navigator;
    final shareData = <Object, Object?>{
      'files': [file],
    };
    final trimmedTitle = (title ?? '').trim();
    final trimmedText = (text ?? '').trim();
    if (trimmedTitle.isNotEmpty) shareData['title'] = trimmedTitle;
    if (trimmedText.isNotEmpty) shareData['text'] = trimmedText;
    await nav.share(shareData);
    return 'Shared $name';
  } catch (_) {}

  if (mimeType == 'image/png') return download.saveNgmyQrPngBytes(bytes, name);
  final blob = html.Blob([bytes], mimeType);
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = name
    ..click();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}
