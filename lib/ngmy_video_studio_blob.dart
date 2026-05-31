import 'dart:html' as html;
import 'dart:typed_data';

String createNgmyBlobUrl(Uint8List bytes, String mimeType) {
  final blob = html.Blob([bytes], mimeType);
  return html.Url.createObjectUrlFromBlob(blob);
}

void revokeNgmyBlobUrl(String url) {
  html.Url.revokeObjectUrl(url);
}
