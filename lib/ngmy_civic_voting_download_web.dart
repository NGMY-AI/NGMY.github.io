import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';

Future<String> ngmyDownloadCivicVotingResults({
  required String fileName,
  required String content,
}) async {
  final safeName = fileName.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.toLowerCase().endsWith('.csv') || safeName.toLowerCase().endsWith('.txt')
      ? safeName
      : '$safeName.csv';
  final bytes = utf8.encode(content);
  final blob = html.Blob([bytes], 'text/csv;charset=utf-8');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = name
    ..click();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}

Future<String> ngmyDownloadCivicVotingPdfResults({
  required String fileName,
  required Uint8List pdfBytes,
}) async {
  if (pdfBytes.isEmpty) return 'Could not build paper results.';
  final safeName = fileName.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.toLowerCase().endsWith('.pdf') ? safeName : '$safeName.pdf';
  final blob = html.Blob([pdfBytes], 'application/pdf');
  final url = html.Url.createObjectUrlFromBlob(blob);
  // Open immediately so users can see the paper results.
  html.window.open(url, '_blank');
  html.AnchorElement(href: url)
    ..download = name
    ..click();
  Future<void>.delayed(const Duration(minutes: 5), () {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
  });
  return 'Opened & downloaded $name';
}
