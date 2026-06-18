import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

/// Sequential LAN pulls with streaming writes — reliable for phone-to-phone transfer.
class NgmyDocShareLanDownload {
  static final HttpClient _client = HttpClient()
    ..connectionTimeout = const Duration(seconds: 30)
    ..idleTimeout = const Duration(hours: 6);

  static Future<List<NgmyDocShareItem>> pullAll({
    required String recipientEmail,
    required Uri manifestUri,
    required List<dynamic> files,
    required String ownerEmail,
    void Function(int received, int total)? onProgress,
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
        request.headers.set(HttpHeaders.acceptEncodingHeader, 'identity');
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-DocShare/1');
        final response = await request.close().timeout(const Duration(hours: 6));
        if (response.statusCode != HttpStatus.ok) {
          debugPrint('[doc share lan stream] $name: HTTP ${response.statusCode}');
          continue;
        }

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
          imported.add(saved);
          received++;
          onProgress?.call(received, total);
        }
      } catch (e) {
        debugPrint('[doc share lan stream] $name: $e');
      }
    }

    return imported;
  }

  static Future<Map<String, dynamic>?> fetchManifest(Uri manifestUri) async {
    for (var attempt = 0; attempt < 5; attempt++) {
      try {
        final request = await _client.getUrl(manifestUri);
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-DocShare/1');
        final response = await request.close().timeout(const Duration(seconds: 30));
        if (response.statusCode != HttpStatus.ok) {
          if (attempt < 4) {
            await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
            continue;
          }
          return null;
        }
        final body = await response.transform(utf8.decoder).join();
        final decoded = jsonDecode(body);
        return decoded is Map<String, dynamic> ? decoded : null;
      } catch (e) {
        debugPrint('[doc share lan manifest] attempt ${attempt + 1}: $e');
        if (attempt < 4) {
          await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
          continue;
        }
      }
    }
    return null;
  }

  static Future<String?> fetchText(Uri uri) async {
    for (var attempt = 0; attempt < 3; attempt++) {
      try {
        final request = await _client.getUrl(uri);
        request.headers.set(HttpHeaders.userAgentHeader, 'NGMY-DocShare/1');
        final response = await request.close().timeout(const Duration(minutes: 5));
        if (response.statusCode != HttpStatus.ok) return null;
        return await response.transform(utf8.decoder).join();
      } catch (e) {
        debugPrint('[doc share lan text] attempt ${attempt + 1}: $e');
        if (attempt < 2) {
          await Future<void>.delayed(Duration(milliseconds: 600 * (attempt + 1)));
        }
      }
    }
    return null;
  }
}
