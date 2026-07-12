import 'dart:convert';
import 'dart:html' as html;

/// Opens a real browser document and prints at 100% scale (avoids blurry blob previews).
Future<void> ngmyPrintCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  final w = html.window.open('', '_blank', 'noopener,noreferrer');
  if (w == null) {
    await ngmyDownloadCivicMemberReport(
      htmlContent: htmlContent,
      plainText: plainText,
      fileName: fileName,
    );
    return;
  }
  try {
    w.document.open();
    w.document.write(htmlContent);
    w.document.close();
  } catch (_) {
    final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
    final url = html.Url.createObjectUrlFromBlob(blob);
    w.location.href = url;
  }
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
