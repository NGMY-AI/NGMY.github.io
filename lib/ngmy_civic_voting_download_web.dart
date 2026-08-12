import 'dart:convert';
import 'dart:html' as html;

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
