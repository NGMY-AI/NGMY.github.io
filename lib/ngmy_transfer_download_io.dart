import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_transfer_constants.dart';

class NgmyTransferDownload {
  static final HttpClient _client = HttpClient()
    ..connectionTimeout = const Duration(seconds: 30)
    ..idleTimeout = const Duration(hours: 6);

  static Future<Map<String, dynamic>?> fetchManifest({
    required Uri manifestUri,
    required String transferKey,
  }) async {
    for (var attempt = 0; attempt < 5; attempt++) {
      try {
        final request = await _client.getUrl(manifestUri);
        request.headers.set(kNgmyTransferKeyHeader, transferKey);
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-Transfer/1');
        final response = await request.close().timeout(const Duration(seconds: 20));
        if (response.statusCode != HttpStatus.ok) continue;
        final body = await response.transform(utf8.decoder).join();
        final decoded = jsonDecode(body);
        return decoded is Map<String, dynamic> ? decoded : null;
      } catch (e) {
        debugPrint('[ngmy transfer manifest] attempt $attempt: $e');
        await Future<void>.delayed(Duration(milliseconds: 400 * (attempt + 1)));
      }
    }
    return null;
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
        final request = await _client.getUrl(fileUri);
        request.headers.set(kNgmyTransferKeyHeader, transferKey);
        request.headers.set(HttpHeaders.acceptEncodingHeader, 'identity');
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-Transfer/1');
        final response = await request.close().timeout(const Duration(hours: 6));
        if (response.statusCode != HttpStatus.ok && response.statusCode != HttpStatus.partialContent) {
          debugPrint('[ngmy transfer pull] $name: HTTP ${response.statusCode}');
          continue;
        }

        var bytesReceived = 0;
        final tracked = response.map((chunk) {
          bytesReceived += chunk.length;
          onBytes?.call(name, bytesReceived, response.contentLength > 0 ? response.contentLength : null);
          return chunk;
        });

        final saved = await NgmyDocShareStore.addFromHttpStream(
          email: recipientEmail,
          name: name,
          mime: mime,
          stream: tracked,
          contentLength: response.contentLength > 0 ? response.contentLength : null,
          fromSender: ownerEmail.isNotEmpty ? ownerEmail : null,
          note: 'NGMY Transfer',
        );
        if (saved != null) {
          imported.add(saved);
          received++;
          onProgress?.call(received, total);
        }
      } catch (e) {
        debugPrint('[ngmy transfer pull] $name: $e');
      }
    }

    return imported;
  }
}
