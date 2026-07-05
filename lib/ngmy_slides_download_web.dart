import 'dart:typed_data';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

Future<String> downloadNgmySlidesPdf(Uint8List bytes, String filename) async {
  final safe = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safe.endsWith('.pdf') ? safe : '$safe.pdf';
  final blob = html.Blob([bytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = name
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 120));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}
