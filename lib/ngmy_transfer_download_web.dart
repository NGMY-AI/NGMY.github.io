import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_transfer_constants.dart';

class NgmyTransferDownload {
  static Future<Map<String, dynamic>?> fetchManifest({
    required Uri manifestUri,
    required String transferKey,
  }) async {
    try {
      final res = await http.get(
        manifestUri,
        headers: {
          kNgmyTransferKeyHeader: transferKey,
          'User-Agent': 'NGMY-Transfer/1',
        },
      ).timeout(const Duration(seconds: 20));
      if (res.statusCode != 200) return null;
      final decoded = jsonDecode(res.body);
      return decoded is Map<String, dynamic> ? decoded : null;
    } catch (e) {
      debugPrint('[ngmy transfer manifest web] $e');
      return null;
    }
  }

  static Future<List<NgmyDocShareItem>> pullAll({
    required String recipientEmail,
    required Uri manifestUri,
    required List<dynamic> files,
    required String ownerEmail,
    required String transferKey,
    void Function(int received, int total)? onProgress,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
  }) async {
    final total = files.length;
    var received = 0;
    final imported = <NgmyDocShareItem>[];

    for (final raw in files) {
      if (raw is! Map) continue;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final rel = (raw['url'] ?? '').toString();
      final fileUri = rel.startsWith('http') ? Uri.parse(rel) : manifestUri.resolve(rel);

      try {
        final request = http.Request('GET', fileUri);
        request.headers[kNgmyTransferKeyHeader] = transferKey;
        request.headers['User-Agent'] = 'NGMY-Transfer/1';
        final streamed = await http.Client().send(request).timeout(const Duration(hours: 6));
        if (streamed.statusCode != 200) continue;

        final rxId = NgmyDocShareStore.beginDiskReceive(
          email: recipientEmail,
          name: name,
          mime: mime,
          fromSender: ownerEmail.isNotEmpty ? ownerEmail : null,
          note: 'NGMY Transfer',
        );
        await NgmyDocShareStore.prepareDiskReceive(rxId);
        var bytesReceived = 0;
        try {
          await for (final chunk in streamed.stream) {
            bytesReceived += chunk.length;
            final totalBytes = streamed.contentLength;
            onBytes?.call(name, bytesReceived, totalBytes != null && totalBytes > 0 ? totalBytes : null);
            await NgmyDocShareStore.writeDiskReceive(rxId, chunk);
          }
          final saved = await NgmyDocShareStore.finishDiskReceive(rxId);
          if (saved != null) {
            imported.add(saved);
            received++;
            onProgress?.call(received, total);
          }
        } catch (e) {
          debugPrint('[ngmy transfer pull web] $name: $e');
          await NgmyDocShareStore.abortDiskReceive(rxId);
        }
      } catch (e) {
        debugPrint('[ngmy transfer pull web] $name: $e');
      }
    }

    return imported;
  }
}
