import 'dart:async';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_multipart_relay.dart';
import 'ngmy_transfer_rendezvous.dart';

/// Cloud fallback when WebRTC cannot connect — sender uploads while sharing the code.
const String kNgmyTransferCloudRelayPrefix = 'ngmy_transfer_relay_v1_';
const String _storageFolder = 'transfer-relay';
const Duration _kMaxCloudWait = Duration(minutes: 20);

class NgmyTransferCloudRelay {
  static String _relayKey(String code) => '$kNgmyTransferCloudRelayPrefix${code.trim()}';

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
              'storageBase': '$_storageFolder/$normalized/$sessionId/${ngmySupabaseRelaySafeName(e.name)}',
              'partCount': 0,
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
        final base = (fileRows[i]['storageBase'] ?? '').toString();
        if (base.isEmpty) continue;

        var partCount = 0;
        var sent = 0;
        final total = item.sizeBytes;

        await for (final chunk in NgmyDocShareStore.readFileStream(ownerEmail, item)) {
          if (chunk.isEmpty) continue;
          final partPath = '$base.part${partCount.toString().padLeft(5, '0')}';
          await Supabase.instance.client.storage.from(kNgmySupabaseRelayBucket).uploadBinary(
                partPath,
                chunk,
                fileOptions: FileOptions(upsert: true, contentType: item.mime),
              );
          partCount++;
          sent += chunk.length;

          final existing = await _loadRelay(normalized) ?? {};
          final progressBase = i / items.length;
          final progressPart = total > 0 ? (sent / total) / items.length : 0.0;
          await _saveRelay(normalized, {
            ...existing,
            'uploadProgress': (progressBase + progressPart).clamp(0.0, 0.99),
            'uploading': true,
            'ready': false,
          });
        }

        if (partCount <= 0) {
          final fallback = await NgmyDocShareStore.readBytes(ownerEmail, item);
          if (fallback != null && fallback.isNotEmpty) {
            final partPath = '$base.part00000';
            await Supabase.instance.client.storage.from(kNgmySupabaseRelayBucket).uploadBinary(
                  partPath,
                  fallback,
                  fileOptions: FileOptions(upsert: true, contentType: item.mime),
                );
            partCount = 1;
            sent = fallback.length;
          }
        }

        if (partCount <= 0) {
          final existing = await _loadRelay(normalized) ?? {};
          await _saveRelay(normalized, {
            ...existing,
            'ready': false,
            'uploading': false,
            'error': 'Could not read ${item.name} for cloud backup.',
          });
          return;
        }

        fileRows[i]['partCount'] = partCount;
        final existing = await _loadRelay(normalized) ?? {};
        await _saveRelay(normalized, {
          ...existing,
          'files': fileRows,
        });
      }

      final existing = await _loadRelay(normalized) ?? {};
      await _saveRelay(normalized, {
        ...existing,
        'files': fileRows,
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

  static Future<bool> isReady(String code) async {
    final row = await _loadRelay(code);
    return row?['ready'] == true;
  }

  static Future<double?> uploadProgress(String code) async {
    final row = await _loadRelay(code);
    if (row == null) return null;
    final p = row['uploadProgress'];
    if (p is num) return p.toDouble();
    return row['ready'] == true ? 1.0 : 0.0;
  }

  static Future<String?> relayError(String code) async {
    final row = await _loadRelay(code);
    final err = (row?['error'] ?? '').toString();
    return err.isEmpty ? null : err;
  }

  static Future<List<NgmyDocShareItem>> importByCode({
    required String code,
    required String recipientEmail,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
    bool skipWait = false,
    Duration maxWait = _kMaxCloudWait,
  }) async {
    final normalized = NgmyTransferRendezvous.normalizeInput(code);
    if (normalized == null) return [];

    if (!skipWait) {
      onStatus?.call('Checking cloud backup…');
      final deadline = DateTime.now().add(maxWait);
      while (DateTime.now().isBefore(deadline)) {
        if (await isReady(normalized)) break;

        final err = await relayError(normalized);
        if (err != null) {
          onStatus?.call('Cloud backup failed: $err');
          return [];
        }

        final progress = await uploadProgress(normalized);
        if (progress != null && progress > 0) {
          onStatus?.call('Cloud backup ${(progress * 100).round()}% — sender must keep Send screen open…');
        } else {
          onStatus?.call('Waiting for cloud backup from sender…');
        }
        await Future<void>.delayed(const Duration(seconds: 2));
      }
    }

    if (!await isReady(normalized)) {
      if (!skipWait) {
        onStatus?.call('Cloud backup not ready yet. Sender must keep Send screen open.');
      }
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
    final pathsToDelete = <String>[];

    onStatus?.call('Downloading via cloud…');

    for (final raw in files) {
      if (raw is! Map) continue;
      final name = (raw['name'] ?? 'file').toString();
      final mime = (raw['mime'] ?? 'application/octet-stream').toString();
      final base = (raw['storageBase'] ?? raw['storagePath'] ?? '').toString();
      final partCount = (raw['partCount'] as num?)?.toInt() ?? 0;
      if (base.isEmpty || partCount <= 0) continue;

      final partPaths = ngmySupabasePartPathsFor(base, partCount);
      pathsToDelete.addAll(partPaths);

      try {
        final saved = await ngmySupabaseDownloadToDocShare(
          recipientEmail: recipientEmail,
          name: name,
          mime: mime,
          ownerEmail: owner,
          storagePaths: partPaths,
          onBytes: (rx, totalBytes) {
            onBytes?.call(name, rx, totalBytes);
          },
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
      unawaited(_cleanupRelay(normalized, pathsToDelete));
    }
    return imported;
  }

  static Future<void> _cleanupRelay(String code, List<String> storagePaths) async {
    try {
      await Supabase.instance.client.from('ngmy_settings').delete().eq('key', _relayKey(code));
      await ngmySupabaseRemovePaths(storagePaths);
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
