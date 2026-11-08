// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

/// Saves bytes as a file in the browser (a download), for browsers whose share sheet cannot take a file.
Future<bool> ngmySaveBytes(List<int> bytes, String filename, String mime) async {
  try {
    final blob = html.Blob([bytes], mime);
    final url = html.Url.createObjectUrlFromBlob(blob);
    final a = html.AnchorElement(href: url)
      ..download = filename
      ..style.display = 'none';
    html.document.body?.append(a);
    a.click();
    await Future<void>.delayed(const Duration(milliseconds: 500));
    a.remove();
    html.Url.revokeObjectUrl(url);
    return true;
  } catch (_) {
    return false;
  }
}
