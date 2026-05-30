import 'dart:html' as html;
import 'dart:typed_data';

/// Triggers a browser download of the QR PNG (web has no gallery API).
Future<String> saveNgmyQrPngBytes(Uint8List bytes, String filename) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.png') ? safeName : '$safeName.png';
  final blob = html.Blob([bytes], 'image/png');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = name
    ..click();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}
