import 'dart:typed_data';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

/// Opens a one-page letter PDF in a new browser tab so the user can print it.
Future<bool> ngmyInvoiceOpenPdfInBrowserImpl(Uint8List pdfBytes) async {
  if (pdfBytes.isEmpty) return false;
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    return false;
  }
  Future<void>.delayed(const Duration(minutes: 5), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
  return true;
}
