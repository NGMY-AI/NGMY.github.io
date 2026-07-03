import 'dart:async';
import 'dart:math';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_transfer_rendezvous.dart';

/// Cloud fallback when WebRTC cannot connect — sender uploads while sharing the code.
const String kNgmyTransferCloudRelayPrefix = 'ngmy_transfer_relay_v1_';
const String _storageBucket = 'media';
const String _storageFolder = 'transfer-relay';

class NgmyTransferCloudRelay {
  static String _relayKey(String code) => '$kNgmyTransferCloudRelayPrefix${code.trim()}';

  static String _safeName(String name) {
    final safe = name.replaceAll(RegExp(r'[^\w\-.]+'), '_').trim();
    return safe.isEmpty ? 'file' : safe;
  }

  static Future<Map<String, dynamic>?> _loadRelay(String code) async {
    if (!await ngmyCanReachCloud()) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _relayKey(code))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is Map) return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[ngmy transfer relay] load: $e');
    }
    return null;
  }

  static Future<void> _saveRelay(String code, Map<String, dynamic> value) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      final now = DateTime.now().toUtc();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _relayKey(code),
          'value': {
            ...value,
            'updatedAt': now.toIso8601String(),
          },
          'updated_at': now.toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[ngmy transfer relay] save: $e');
    }
  }

  /// Starts uploading files in the background so receive can fall back to cloud.
  static void beginUpload({
    required String code,
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) {
    if (items.isEmpty) return;
    unawaited(_uploadAll(code: code, ownerEmail: ownerEmail, items: items));
  }

  static Future<void> _uploadAll({
    required String code,
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (!await ngmyCanReachCloud()) return;
    final normalized = NgmyTransferRendezvous.normalizeInput(code);
    if (normalized == null) return;

    final sessionId = '${DateTime.now().microsecondsSinceEpoch}_${Random().nextInt(99999)}';
    final fileRows = items
        .map((e) => {
              'id': e.id,
              'name': e.name,
              'mime': e.mime,
              'sizeBytes': e.sizeBytes,
              'storagePath': '$_storageFolder/$normalized/$sessionId/${_safeName(e.name)}',
            })
        .toList();

    await _saveRelay(normalized, {
      'code': normalized,
      'ownerEmail': ownerEmail.trim().toLowerCase(),
      'ready': false,
      'uploading': true,
      'uploadProgress': 0.0,
      'files': fileRows,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    });

    try {
      for (var i = 0; i < items.length; i++) {
        final item = items[i];
        final storagePath = (fileRows[i]['storagePath'] ?? '').toString();
        if (storagePath.isEmpty) continue;

        final uploaded = await _uploadItemStreaming(
          ownerEmail: ownerEmail,
          item: item,
          storagePath: storagePath,
          onProgress: (sent, total) async {
            if (total <= 0) return;
            final base = i / items.length;
            final part = (sent / total) / items.length;
            final existing = await _loadRelay(normalized) ?? {};
            await _saveRelay(normalized, {
              ...existing,
              'uploadProgress': (base + part).clamp(0.0, 0.99),
              'uploading': true,
              'ready': false,
            });
          },
        );
        if (!uploaded) {
          final existing = await _loadRelay(normalized) ?? {};
          await _saveRelay(normalized, {
            ...existing,
            'ready': false,
            'uploading': false,
            'error': 'Upload failed for ${item.name}',
          });
          return;
        }
      }
      final existing = await _loadRelay(normalized) ?? {};
      await _saveRelay(normalized, {
        ...existing,
        'ready': true,
        'uploading': false,
        'uploadProgress': 1.0,
        'readyAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[ngmy transfer relay] upload: $e');
      final existing = await _loadRelay(normalized) ?? {};
      await _saveRelay(normalized, {
        ...existing,
        'ready': false,
        'uploading': false,
        'error': e.toString(),
      });
    }
  }

  static Future<bool> _uploadItemStreaming({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String storagePath,
    void Function(int sent, int total)? onProgress,
  }) async {
    try {
      final total = item.sizeBytes;
      if (total <= 0) return false;

      final builder = BytesBuilder(copy: false);
      var sent = 0;
      await for (final chunk in NgmyDocShareStore.readFileStream(ownerEmail, item)) {
        if (chunk.isEmpty) continue;
        builder.add(chunk);
        sent += chunk.length;
        onProgress?.call(sent, total);
      }
      final bytes = builder.takeBytes();
      if (bytes.isEmpty) return false;

      await Supabase.instance.client.storage.from(_storageBucket).uploadBinary(
            storagePath,
            bytes,
            fileOptions: FileOptions(upsert: true, contentType: item.mime),
          );
      onProgress?.call(bytes.length, bytes.length);
      return true;
    } catch (e) {
      debugPrint('[ngmy transfer relay] upload item ${item.name}: $e');
      return false;
    }
  }

  static Future<bool> isReady(String code) async {
    final row = await _loadRelay(code);
    if (row == null) return false;
    return row['ready'] == true;
  }

  static Future<double?> uploadProgress(String code) async {
    final row = await _loadRelay(code);
    if (row == null) return null;
    final p = row['uploadProgress'];
    if (p is num) return p.toDouble();
    return row['ready'] == true ? 1.0 : 0.0;
  }

  /// Download relayed files when peer-to-peer fails.
  static Future<List<NgmyDocShareItem>> importByCode({
    required String code,
    required String recipientEmail,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
  }) async {
    final normalized = NgmyTransferRendezvous.normalizeInput(code);
    if (normalized == null) return [];

    onStatus?.call('Peer link unavailable — waiting for cloud backup…');

    for (var attempt = 0; attempt < 3600; attempt++) {
      if (await isReady(normalized)) break;
      final progress = await uploadProgress(normalized);
      if (progress != null && progress > 0) {
        onStatus?.call('Cloud backup ${(progress * 100).round()}% — keep sender on Send screen…');
      }
      await Future<void>.delayed(const Duration(milliseconds: 500));
    }
    if (!await isReady(normalized)) {
      onStatus?.call('Cloud backup not ready. Sender must keep Send screen open and try again.');
      return [];
    }

    final row = await _loadRelay(normalized);
    if (row == null) return [];
    final files = row['files'];
    if (files is! List || files.isEmpty) return [];

    final owner = (row['ownerEmail'] ?? '').toString();
    final total = files.length;
    var received = 0;
    final imported = <NgmyDocShareItem>[];

    onStatus?.call('Downloading via cloud…');

    for (final raw in files) {
      if (raw is! Map) continue;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final storagePath = (raw['storagePath'] ?? '').toString();
      if (storagePath.isEmpty) continue;

      try {
        final url = Supabase.instance.client.storage.from(_storageBucket).getPublicUrl(storagePath);
        final saved = await _pullStreaming(
          recipientEmail: recipientEmail,
          fileUri: Uri.parse(url),
          name: name,
          mime: mime,
          ownerEmail: owner,
          onBytes: onBytes,
        );
        if (saved != null) {
          imported.add(saved);
          received++;
          onProgress?.call(received, total);
        }
      } catch (e) {
        debugPrint('[ngmy transfer relay] download $name: $e');
      }
    }

    if (imported.isNotEmpty) {
      onStatus?.call('Received ${imported.length} file(s) via cloud backup.');
      unawaited(_cleanupRelay(normalized, files));
    }
    return imported;
  }

  static Future<NgmyDocShareItem?> _pullStreaming({
    required String recipientEmail,
    required Uri fileUri,
    required String name,
    required String mime,
    required String ownerEmail,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
  }) async {
    try {
      final streamed = await http.Client().send(http.Request('GET', fileUri)).timeout(const Duration(hours: 6));
      if (streamed.statusCode != 200) return null;

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
        return NgmyDocShareStore.finishDiskReceive(rxId);
      } catch (e) {
        debugPrint('[ngmy transfer relay] stream $name: $e');
        await NgmyDocShareStore.abortDiskReceive(rxId);
        return null;
      }
    } catch (e) {
      debugPrint('[ngmy transfer relay] pull $name: $e');
      return null;
    }
  }

  static Future<void> _cleanupRelay(String code, List<dynamic> files) async {
    try {
      await Supabase.instance.client.from('ngmy_settings').delete().eq('key', _relayKey(code));
      for (final raw in files) {
        if (raw is Map) {
          final path = (raw['storagePath'] ?? '').toString();
          if (path.isNotEmpty) {
            try {
              await Supabase.instance.client.storage.from(_storageBucket).remove([path]);
            } catch (_) {}
          }
        }
      }
    } catch (e) {
      debugPrint('[ngmy transfer relay] cleanup: $e');
    }
  }

  static Future<void> clear(String code) async {
    final normalized = NgmyTransferRendezvous.normalizeInput(code);
    if (normalized == null) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').delete().eq('key', _relayKey(normalized));
    } catch (_) {}
  }
}
