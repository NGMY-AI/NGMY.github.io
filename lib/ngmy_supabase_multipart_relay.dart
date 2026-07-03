import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

const String kNgmySupabaseRelayBucket = 'media';

String ngmySupabaseRelaySafeName(String name) {
  final safe = name.replaceAll(RegExp(r'[^\w\-.]+'), '_').trim();
  return safe.isEmpty ? 'file' : safe;
}

List<String> ngmySupabasePartPathsFor(String storageBasePath, int partCount) => List.generate(
      partCount,
      (i) => '$storageBasePath.part${i.toString().padLeft(5, '0')}',
    );

Future<String?> ngmySupabaseSignedDownloadUrl(String storagePath) async {
  try {
    return await Supabase.instance.client.storage
        .from(kNgmySupabaseRelayBucket)
        .createSignedUrl(storagePath, 60 * 60);
  } catch (e) {
    debugPrint('[supabase signed url] $storagePath: $e');
    return null;
  }
}

/// Download sequential storage parts into Doc Share via disk receive.
Future<NgmyDocShareItem?> ngmySupabaseDownloadToDocShare({
  required String recipientEmail,
  required String name,
  required String mime,
  required String ownerEmail,
  required List<String> storagePaths,
  String note = 'NGMY Transfer',
  void Function(int received, int? total)? onBytes,
}) async {
  if (storagePaths.isEmpty) return null;

  final rxId = NgmyDocShareStore.beginDiskReceive(
    email: recipientEmail,
    name: name,
    mime: mime,
    fromSender: ownerEmail.isNotEmpty ? ownerEmail : null,
    note: note,
  );
  await NgmyDocShareStore.prepareDiskReceive(rxId);
  var bytesReceived = 0;
  var totalBytes = 0;

  try {
    for (final path in storagePaths) {
      final url = await ngmySupabaseSignedDownloadUrl(path);
      if (url == null || url.isEmpty) {
        await NgmyDocShareStore.abortDiskReceive(rxId);
        return null;
      }

      final streamed = await http.Client().send(http.Request('GET', Uri.parse(url))).timeout(const Duration(hours: 6));
      if (streamed.statusCode != 200) {
        await NgmyDocShareStore.abortDiskReceive(rxId);
        return null;
      }
      final contentLen = streamed.contentLength;
      if (contentLen != null && contentLen > 0) totalBytes += contentLen;

      await for (final chunk in streamed.stream) {
        bytesReceived += chunk.length;
        onBytes?.call(bytesReceived, totalBytes > 0 ? totalBytes : null);
        await NgmyDocShareStore.writeDiskReceive(rxId, chunk);
      }
    }
    return NgmyDocShareStore.finishDiskReceive(rxId);
  } catch (e) {
    debugPrint('[supabase multipart download] $name: $e');
    await NgmyDocShareStore.abortDiskReceive(rxId);
    return null;
  }
}

Future<void> ngmySupabaseRemovePaths(List<String> paths) async {
  if (paths.isEmpty) return;
  try {
    await Supabase.instance.client.storage.from(kNgmySupabaseRelayBucket).remove(paths);
  } catch (e) {
    debugPrint('[supabase remove paths]: $e');
  }
}
