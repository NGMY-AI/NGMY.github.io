import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

/// Parallel LAN pulls with streaming writes — large files land fast like AirDrop.
class NgmyDocShareLanDownload {
  static final HttpClient _client = HttpClient()
    ..connectionTimeout = const Duration(seconds: 20)
    ..idleTimeout = const Duration(seconds: 120);

  static Future<List<NgmyDocShareItem>> pullAll({
    required String recipientEmail,
    required Uri manifestUri,
    required List<dynamic> files,
    required String ownerEmail,
    void Function(int received, int total)? onProgress,
  }) async {
    final total = files.length;
    var received = 0;

    final futures = files.map((raw) async {
      if (raw is! Map) return null;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final rel = (raw['url'] ?? '').toString();
      final fileUri = rel.startsWith('http') ? Uri.parse(rel) : manifestUri.resolve(rel);

      try {
        final request = await _client.getUrl(fileUri);
        request.headers.set(HttpHeaders.acceptEncodingHeader, 'identity');
        final response = await request.close();
        if (response.statusCode != HttpStatus.ok) return null;

        final saved = await NgmyDocShareStore.addFromHttpStream(
          email: recipientEmail,
          name: name,
          mime: mime,
          stream: response,
          contentLength: response.contentLength > 0 ? response.contentLength : null,
          fromSender: ownerEmail.isNotEmpty ? ownerEmail : null,
          note: 'Received via QR',
        );
        if (saved != null) {
          received++;
          onProgress?.call(received, total);
        }
        return saved;
      } catch (e) {
        debugPrint('[doc share lan stream] $name: $e');
        return null;
      }
    });

    final results = await Future.wait(futures);
    return results.whereType<NgmyDocShareItem>().toList();
  }

  static Future<Map<String, dynamic>?> fetchManifest(Uri manifestUri) async {
    for (var attempt = 0; attempt < 4; attempt++) {
      try {
        final request = await _client.getUrl(manifestUri);
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-DocShare/1');
        final response = await request.close().timeout(const Duration(seconds: 25));
        if (response.statusCode != HttpStatus.ok) {
          if (attempt < 3) {
            await Future<void>.delayed(Duration(milliseconds: 400 * (attempt + 1)));
            continue;
          }
          return null;
        }
        final body = await response.transform(utf8.decoder).join();
        final decoded = jsonDecode(body);
        return decoded is Map<String, dynamic> ? decoded : null;
      } catch (e) {
        debugPrint('[doc share lan manifest] attempt ${attempt + 1}: $e');
        if (attempt < 3) {
          await Future<void>.delayed(Duration(milliseconds: 400 * (attempt + 1)));
          continue;
        }
      }
    }
    return null;
  }
}
