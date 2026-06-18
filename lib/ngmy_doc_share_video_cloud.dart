import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_lan_download.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_network_resilience.dart';

/// Short QR for cloud-hosted videos — reliable on web and when LAN/WebRTC fail.
const String kNgmyDocShareQrPrefixVideoCloud = 'NGMYDOCSYNC4';
const String kNgmyDocShareVideoCloudTokenPrefix = 'VT';

const String _kVideoRelayKey = 'ngmy_doc_share_video_relay_v1';
const String _storageBucket = 'media';
const String _storageFolder = 'doc-share-relay';

typedef NgmyDocShareVideoCloudQr = ({
  String qrPayload,
  int fileCount,
  String token,
});

class NgmyDocShareVideoCloud {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return '$kNgmyDocShareVideoCloudTokenPrefix${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static String _safeName(String name) =>
      name.replaceAll(RegExp(r'[^\w\-.]+'), '_').trim().isEmpty ? 'video.mp4' : name.replaceAll(RegExp(r'[^\w\-.]+'), '_');

  static Future<Map<String, dynamic>> _loadRelays() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _kVideoRelayKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final relays = value['relays'];
      if (relays is Map) return Map<String, dynamic>.from(relays);
    } catch (e) {
      debugPrint('[doc share video cloud] load: $e');
    }
    return {};
  }

  static Future<void> _saveRelays(Map<String, dynamic> relays) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kVideoRelayKey,
          'value': {
            'relays': relays,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[doc share video cloud] save: $e');
    }
  }

  static Future<void> _patchRelay(String token, Map<String, dynamic> patch) async {
    final relays = await _loadRelays();
    final row = relays[token];
    if (row is! Map) return;
    relays[token] = {
      ...Map<String, dynamic>.from(row),
      ...patch,
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveRelays(relays);
  }

  /// Starts cloud upload; when [awaitUpload] is true, QR is returned only after upload completes.
  static Future<NgmyDocShareVideoCloudQr?> beginShare({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    bool awaitUpload = false,
  }) async {
    if (items.isEmpty || !await ngmyCanReachCloud()) return null;
    final videos = items.where((e) => e.isVideo).toList();
    if (videos.isEmpty) return null;

    final token = _generateToken();
    final fileRows = videos
        .map((e) => {
              'id': e.id,
              'name': e.name,
              'mime': e.mime,
              'sizeBytes': e.sizeBytes,
              'storagePath': '$_storageFolder/$token/${_safeName(e.name)}',
            })
        .toList();

    final relays = await _loadRelays();
    relays[token] = {
      'ownerEmail': ownerEmail.trim().toLowerCase(),
      'ready': false,
      'uploading': true,
      'files': fileRows,
      'usesRemaining': 8,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveRelays(relays);

    if (awaitUpload) {
      await _uploadAll(ownerEmail: ownerEmail, token: token, items: videos, fileRows: fileRows);
    } else {
      unawaited(_uploadAll(ownerEmail: ownerEmail, token: token, items: videos, fileRows: fileRows));
    }

    return (
      qrPayload: '$kNgmyDocShareQrPrefixVideoCloud|$token',
      fileCount: videos.length,
      token: token,
    );
  }

  static Future<bool> isReady(String token) async {
    final relays = await _loadRelays();
    final row = relays[token.trim()];
    if (row is! Map) return false;
    return row['ready'] == true;
  }

  static Future<double?> uploadProgress(String token) async {
    final relays = await _loadRelays();
    final row = relays[token.trim()];
    if (row is! Map) return null;
    final p = row['uploadProgress'];
    if (p is num) return p.toDouble();
    return row['ready'] == true ? 1.0 : 0.0;
  }

  static Future<void> _uploadAll({
    required String ownerEmail,
    required String token,
    required List<NgmyDocShareItem> items,
    required List<Map<String, dynamic>> fileRows,
  }) async {
    try {
      for (var i = 0; i < items.length; i++) {
        final item = items[i];
        final storagePath = (fileRows[i]['storagePath'] ?? '').toString();
        if (storagePath.isEmpty) continue;

        final uploaded = await NgmyDocShareStore.uploadItemToSupabase(
          ownerEmail: ownerEmail,
          item: item,
          bucket: _storageBucket,
          storagePath: storagePath,
          onProgress: (sent, total) async {
            if (total <= 0) return;
            final base = i / items.length;
            final part = (sent / total) / items.length;
            await _patchRelay(token, {'uploadProgress': (base + part).clamp(0.0, 0.99)});
          },
        );
        if (!uploaded) {
          await _patchRelay(token, {
            'ready': false,
            'uploading': false,
            'error': 'Upload failed for ${item.name}',
          });
          return;
        }
      }
      await _patchRelay(token, {
        'ready': true,
        'uploading': false,
        'uploadProgress': 1.0,
        'readyAt': DateTime.now().toUtc().toIso8601String(),
      });
    } catch (e) {
      debugPrint('[doc share video cloud] upload: $e');
      await _patchRelay(token, {
        'ready': false,
        'uploading': false,
        'error': e.toString(),
      });
    }
  }

  static Future<List<NgmyDocShareItem>?> importToken({
    required String recipientEmail,
    required String token,
    void Function(int received, int total)? onProgress,
  }) async {
    final id = token.trim();
    if (id.isEmpty || !id.startsWith(kNgmyDocShareVideoCloudTokenPrefix)) return null;
    if (!await ngmyCanReachCloud()) return null;

    // Wait for sender upload (poll quickly once sender used awaitUpload).
    for (var attempt = 0; attempt < 7200; attempt++) {
      if (await isReady(id)) break;
      await Future<void>.delayed(const Duration(milliseconds: 500));
    }
    if (!await isReady(id)) return null;

    final relays = await _loadRelays();
    final row = relays[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;

    final files = row['files'];
    if (files is! List || files.isEmpty) return null;
    final owner = (row['ownerEmail'] ?? '').toString();
    final total = files.length;
    var received = 0;
    final imported = <NgmyDocShareItem>[];

    for (final raw in files) {
      if (raw is! Map) continue;
      final name = (raw['name'] ?? 'video.mp4').toString();
      final mime = (raw['mime'] ?? 'video/mp4').toString();
      final storagePath = (raw['storagePath'] ?? '').toString();
      if (storagePath.isEmpty) continue;

      try {
        final url = Supabase.instance.client.storage.from(_storageBucket).getPublicUrl(storagePath);
        final uri = Uri.parse(url);
        final saved = await NgmyDocShareLanDownload.pullSingleFromUrl(
          recipientEmail: recipientEmail,
          fileUri: uri,
          name: name,
          mime: mime,
          ownerEmail: owner,
        );
        if (saved != null) {
          imported.add(saved);
          received++;
          onProgress?.call(received, total);
        }
      } catch (e) {
        debugPrint('[doc share video cloud] download $name: $e');
      }
    }

    if (imported.isEmpty) return null;

    final nextUses = uses - 1;
    if (nextUses <= 0) {
      relays.remove(id);
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
    } else {
      relays[id] = {
        ...Map<String, dynamic>.from(row),
        'usesRemaining': nextUses,
        'lastUsedAt': DateTime.now().toUtc().toIso8601String(),
      };
    }
    await _saveRelays(relays);
    return imported;
  }
}

void unawaited(Future<void> f) {}
