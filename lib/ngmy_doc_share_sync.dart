import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_doc_share_local_server.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';

const String kNgmyDocShareQrPrefixLan = 'NGMYDOCSYNC2';
const String kNgmyDocShareQrPrefixInline = 'NGMYDOCSYNC0';
const String kNgmyDocShareBundleMarker = 'ngmyDocShareBundle';
const int kNgmyDocShareInlineQrMaxChars = 2900;

typedef NgmyDocShareQrResult = ({
  String qrPayload,
  int fileCount,
  NgmyDocShareQrMode mode,
});

enum NgmyDocShareQrMode { inlineInstant, lanDirect, exportOnly }

class NgmyDocShareSync {
  static String _norm(String email) => email.toLowerCase().trim();

  /// Local-only QR: tiny bundles embed in QR; folders/large sets use LAN direct transfer.
  static Future<NgmyDocShareQrResult?> createQrForItems({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty) return null;

    final inline = await _tryInlineQr(ownerEmail: ownerEmail, items: items);
    if (inline != null) return inline;

    if (!kIsWeb) {
      final lan = await NgmyDocShareLocalServer.start(ownerEmail: ownerEmail, items: items);
      if (lan != null) {
        return (
          qrPayload: lan.qrPayload,
          fileCount: lan.fileCount,
          mode: NgmyDocShareQrMode.lanDirect,
        );
      }
    }

    return null;
  }

  static Future<void> stopLanShare() => NgmyDocShareLocalServer.stop();

  static Future<NgmyDocShareQrResult?> _tryInlineQr({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    final jsonText = await exportBundleFile(ownerEmail: ownerEmail, items: items);
    final encoded = base64Encode(utf8.encode(jsonText));
    final payload = '$kNgmyDocShareQrPrefixInline|$encoded';
    if (payload.length > kNgmyDocShareInlineQrMaxChars) return null;
    return (
      qrPayload: payload,
      fileCount: items.length,
      mode: NgmyDocShareQrMode.inlineInstant,
    );
  }

  static Future<List<NgmyDocShareItem>?> importFromScan({
    required String recipientEmail,
    required String raw,
    void Function(int received, int total)? onProgress,
  }) async {
    final text = raw.trim();

    if (text.startsWith('$kNgmyDocShareQrPrefixInline|')) {
      final encoded = text.substring(kNgmyDocShareQrPrefixInline.length + 1);
      try {
        final jsonText = utf8.decode(base64Decode(encoded));
        onProgress?.call(1, 1);
        return importBundleText(recipientEmail: recipientEmail, jsonText: jsonText);
      } catch (e) {
        debugPrint('[doc share inline qr] $e');
        return null;
      }
    }

    if (text.startsWith('$kNgmyDocShareQrPrefixLan|')) {
      final url = text.substring(kNgmyDocShareQrPrefixLan.length + 1).trim();
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: url, onProgress: onProgress);
    }

    if (text.startsWith('http://') || text.startsWith('https://')) {
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: text, onProgress: onProgress);
    }

    if (text.contains(kNgmyDocShareBundleMarker)) {
      return importBundleText(recipientEmail: recipientEmail, jsonText: text);
    }

    return null;
  }

  static Future<List<NgmyDocShareItem>?> _importFromLan({
    required String recipientEmail,
    required String baseUrl,
    void Function(int received, int total)? onProgress,
  }) async {
    final root = baseUrl.replaceAll(RegExp(r'/+$'), '');
    final manifestUri = root.endsWith('manifest.json') ? Uri.parse(root) : Uri.parse('$root/manifest.json');

    try {
      final manifestRes = await http.get(manifestUri).timeout(const Duration(seconds: 8));
      if (manifestRes.statusCode != 200) return null;

      final decoded = jsonDecode(manifestRes.body);
      if (decoded is! Map) return null;
      final files = decoded['files'];
      if (files is! List || files.isEmpty) return null;

      final owner = (decoded['ownerEmail'] ?? '').toString();
      final total = files.length;
      var received = 0;
      final imported = <NgmyDocShareItem>[];

      final origin = Uri.parse(root);

      final futures = files.map((raw) async {
        if (raw is! Map) return null;
        final name = (raw['name'] ?? 'file').toString();
        final mime = (raw['mime'] ?? 'application/octet-stream').toString();
        final rel = (raw['url'] ?? '').toString();
        final fileUri = rel.startsWith('http')
            ? Uri.parse(rel)
            : Uri(
                scheme: origin.scheme,
                host: origin.host,
                port: origin.port,
                path: rel.startsWith('/') ? rel : '/$rel',
              );

        final res = await http.get(fileUri).timeout(const Duration(minutes: 5));
        if (res.statusCode != 200 || res.bodyBytes.isEmpty) return null;

        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: Uint8List.fromList(res.bodyBytes),
          fromSender: owner.isNotEmpty ? owner : null,
          note: 'Received via QR (local)',
        );
        received++;
        onProgress?.call(received, total);
        return saved;
      });

      final results = await Future.wait(futures);
      for (final item in results) {
        if (item != null) imported.add(item);
      }
      return imported.isEmpty ? null : imported;
    } catch (e) {
      debugPrint('[doc share lan import] $e');
      return null;
    }
  }

  static Future<String> exportBundleFile({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    final files = <Map<String, dynamic>>[];
    for (final item in items) {
      final bytes = await NgmyDocShareStore.readBytes(ownerEmail, item);
      if (bytes == null || bytes.isEmpty) continue;
      files.add({
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'data': base64Encode(bytes),
      });
    }
    return jsonEncode({
      'marker': kNgmyDocShareBundleMarker,
      'version': 1,
      'ownerEmail': _norm(ownerEmail),
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
      'files': files,
    });
  }

  static Future<List<NgmyDocShareItem>?> importBundleText({
    required String recipientEmail,
    required String jsonText,
  }) async {
    try {
      final decoded = jsonDecode(jsonText);
      if (decoded is! Map) return null;
      if ((decoded['marker'] ?? '').toString() != kNgmyDocShareBundleMarker) return null;
      final files = decoded['files'];
      if (files is! List) return null;
      final owner = (decoded['ownerEmail'] ?? '').toString();
      final imported = <NgmyDocShareItem>[];
      for (final raw in files) {
        if (raw is! Map) continue;
        final name = (raw['name'] ?? 'file').toString();
        final mime = (raw['mime'] ?? 'application/octet-stream').toString();
        final data = (raw['data'] ?? '').toString();
        if (data.isEmpty) continue;
        final bytes = base64Decode(data);
        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: bytes,
          fromSender: owner.isNotEmpty ? owner : null,
          note: 'Imported locally',
        );
        if (saved != null) imported.add(saved);
      }
      return imported.isEmpty ? null : imported;
    } catch (e) {
      debugPrint('[doc share bundle] $e');
      return null;
    }
  }
}
