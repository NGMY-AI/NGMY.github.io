import 'dart:convert';
import 'dart:html' as html;

Future<String> downloadNgmyAdvisorSyncJson(String jsonText, String filename) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.json') ? safeName : '$safeName.json';
  final blob = html.Blob([utf8.encode(jsonText)], 'application/json');
  final url = html.Url.createObjectUrlFromBlob(blob);
  html.AnchorElement(href: url)
    ..download = name
    ..click();
  html.Url.revokeObjectUrl(url);
  return 'Downloaded $name';
}

Future<String> downloadNgmyAdvisorSyncBytes(List<int> bytes, String filename) async {
  return downloadNgmyAdvisorSyncJson(utf8.decode(bytes), filename);
}
