import 'dart:convert';
import 'dart:html' as html;

Future<void> ngmyPrintCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  final blob = html.Blob([utf8.encode(htmlContent)], 'text/html;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.window.open(url, '_blank');
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
