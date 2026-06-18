import 'dart:typed_data';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

Future<String?> resolveVideoUri({
  required String email,
  required NgmyDocShareItem item,
  required Future<Uint8List?> Function() readBytes,
}) {
  return NgmyDocShareStore.filePath(email, item);
}

void revokeVideoUri(String? uri) {}
