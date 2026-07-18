import 'dart:html' as html;
import 'dart:typed_data';

Future<bool> downloadBytes(Uint8List bytes, String filename, String mime) async {
  try {
    final blob = html.Blob([bytes], mime);
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = filename
      ..click();
    html.Url.revokeObjectUrl(url);
    return true;
  } catch (_) {
    return false;
  }
}

String? bytesToBlobUrl(Uint8List bytes, String mime) {
  try {
    final blob = html.Blob([bytes], mime);
    return html.Url.createObjectUrlFromBlob(blob);
  } catch (_) {
    return null;
  }
}

void revokeBlobUrl(String url) {
  try {
    html.Url.revokeObjectUrl(url);
  } catch (_) {}
}
