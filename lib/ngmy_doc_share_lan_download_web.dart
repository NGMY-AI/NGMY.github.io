import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

class NgmyDocShareLanDownload {
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

    final futures = files.map((raw) async {
      if (raw is! Map) return null;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final rel = (raw['url'] ?? '').toString();
      final fileUri = rel.startsWith('http') ? Uri.parse(rel) : manifestUri.resolve(rel);

      try {
        final res = await http.get(fileUri).timeout(const Duration(hours: 12));
        if (res.statusCode != 200 || res.bodyBytes.isEmpty) return null;
        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: Uint8List.fromList(res.bodyBytes),
          fromSender: ownerEmail.isNotEmpty ? ownerEmail : null,
          note: 'Received via QR',
        );
        if (saved != null) {
          received++;
          onProgress?.call(received, total);
        }
        return saved;
      } catch (e) {
        debugPrint('[doc share lan web] $name: $e');
        return null;
      }
    });

    for (final item in await Future.wait(futures)) {
      if (item != null) imported.add(item);
    }
    return imported;
  }

  static Future<Map<String, dynamic>?> fetchManifest(Uri manifestUri) async {
    try {
      final res = await http.get(manifestUri).timeout(const Duration(seconds: 15));
      if (res.statusCode != 200) return null;
      final decoded = jsonDecode(res.body);
      return decoded is Map<String, dynamic> ? decoded : null;
    } catch (e) {
      debugPrint('[doc share lan manifest web] $e');
      return null;
    }
  }
}
