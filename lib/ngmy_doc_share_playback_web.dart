import 'dart:html' as html;
import 'dart:typed_data';

import 'ngmy_doc_share_models.dart';

final Map<String, String> _blobUrls = {};

Future<String?> resolveVideoUri({
  required String email,
  required NgmyDocShareItem item,
  required Future<Uint8List?> Function() readBytes,
}) async {
  final bytes = await readBytes();
  if (bytes == null || bytes.isEmpty) return null;
  final key = '${email.toLowerCase().trim()}_${item.id}';
  final old = _blobUrls.remove(key);
  if (old != null) html.Url.revokeObjectUrl(old);
  final blob = html.Blob([bytes], item.mime);
  final url = html.Url.createObjectUrlFromBlob(blob);
  _blobUrls[key] = url;
  return url;
}

void revokeVideoUri(String? uri) {
  if (uri == null || uri.isEmpty) return;
  html.Url.revokeObjectUrl(uri);
  _blobUrls.removeWhere((_, v) => v == uri);
}
