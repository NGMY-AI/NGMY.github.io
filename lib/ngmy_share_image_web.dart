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

String _ensureFilename(String filename, String mimeType) {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  if (safeName.contains('.')) return safeName;
  final mime = mimeType.toLowerCase();
  final ext = switch (mime) {
    'image/jpeg' || 'image/jpg' => '.jpg',
    'image/png' => '.png',
    'image/gif' => '.gif',
    'image/webp' => '.webp',
    'image/heic' || 'image/heif' => '.heic',
    'video/mp4' => '.mp4',
    'application/pdf' => '.pdf',
    _ => '',
  };
  return '$safeName$ext';
}

Future<String> shareNgmyBytes(
  Uint8List bytes,
  String filename, {
  required String mimeType,
  String? title,
  String? text,
}) async {
  final name = _ensureFilename(filename, mimeType);

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
