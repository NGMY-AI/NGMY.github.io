import 'dart:convert';
import 'dart:html' as html;

/// Opens a print-ready HTML document in a new tab (blob URL — works on current dart:html).
Future<void> ngmyPrintCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final opened = html.window.open(url, '_blank');
  if (opened == null) {
    html.Url.revokeObjectUrl(url);
    await ngmyDownloadCivicMemberReport(
      htmlContent: htmlContent,
      plainText: plainText,
      fileName: fileName,
    );
    return;
  }
  // Keep the blob alive long enough for the print dialog / preview.
  Future<void>.delayed(const Duration(minutes: 2), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
}

Future<void> ngmyDownloadCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  final safe = fileName.replaceAll(RegExp(r'[^a-zA-Z0-9 _-]'), '_').trim();
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = '${safe.isEmpty ? 'civic_member_report' : safe}.html'
    ..click();
  html.Url.revokeObjectUrl(url);
}
