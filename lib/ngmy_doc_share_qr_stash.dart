import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Short QR prefix — full bundle lives in cloud stash (scannable like NGMY Advisors).
const String kNgmyDocShareQrPrefixCloud = 'NGMYDOCSYNC1';

const int kNgmyDocShareQrMaxUses = 25;

/// Bundles larger than this skip cloud stash (use LAN for big videos).
const int kNgmyDocShareCloudStashMaxBytes = 3 * 1024 * 1024;

const String _kDocShareQrStashKey = 'ngmy_doc_share_qr_stashes_v1';

class NgmyDocShareQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'DS${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadStashes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _kDocShareQrStashKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final stashes = value['stashes'];
      if (stashes is Map) return Map<String, dynamic>.from(stashes);
    } catch (e) {
      debugPrint('[doc share qr stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveStashes(Map<String, dynamic> stashes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kDocShareQrStashKey,
          'value': {
            'stashes': stashes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[doc share qr stash] save: $e');
    }
  }

  /// Stores bundle JSON in cloud; returns a tiny QR-safe payload.
  static Future<({String qrPayload, String token, int usesRemaining})?> createFromBundleJson({
    required String ownerEmail,
    required String bundleJson,
    required int fileCount,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final json = bundleJson.trim();
    if (json.isEmpty || json.length > kNgmyDocShareCloudStashMaxBytes) return null;
    final token = _generateToken();
    final stashes = await _loadStashes();
    stashes[token] = {
      'ownerEmail': ownerEmail.trim().toLowerCase(),
      'fileCount': fileCount,
      'payload': base64Encode(utf8.encode(json)),
      'usesRemaining': kNgmyDocShareQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveStashes(stashes);
    return (
      qrPayload: '$kNgmyDocShareQrPrefixCloud|$token',
      token: token,
      usesRemaining: kNgmyDocShareQrMaxUses,
    );
  }

  /// Returns decoded bundle JSON after consuming one scan use.
  static Future<String?> consumeToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    final stashes = await _loadStashes();
    final row = stashes[id];
    if (row is! Map) return null;
    final uses = (row['usesRemaining'] as num?)?.toInt() ?? 0;
    if (uses <= 0) return null;

    final payloadRaw = (row['payload'] ?? '').toString();
    if (payloadRaw.isEmpty) return null;
    String? jsonText;
    try {
      jsonText = utf8.decode(base64Decode(payloadRaw));
    } catch (e) {
      debugPrint('[doc share qr stash] decode: $e');
      return null;
    }
    if (jsonText.trim().isEmpty) return null;

    final nextUses = uses - 1;
    if (nextUses <= 0) {
      stashes.remove(id);
    } else {
      stashes[id] = {
        ...Map<String, dynamic>.from(row),
        'usesRemaining': nextUses,
        'lastUsedAt': DateTime.now().toUtc().toIso8601String(),
      };
    }
    await _saveStashes(stashes);
    return jsonText;
  }
}
