import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Short QR prefix — full bundle lives in cloud stash (scannable like NGMY Advisors).
const String kNgmyDocShareQrPrefixCloud = 'NGMYDOCSYNC1';

/// Unlimited rescans — stash stays until sender deletes the file.
const int kNgmyDocShareQrMaxUses = 999999;

/// Bundles larger than this cannot use cloud stash QR.
const int kNgmyDocShareCloudStashMaxBytes = 12 * 1024 * 1024;

String _stashSettingsKey(String token) => 'ngmy_doc_share_stash_v2_${token.trim()}';

class NgmyDocShareQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'DS${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>?> _loadStashRow(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _stashSettingsKey(id))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is Map) return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[doc share qr stash] load $id: $e');
    }
    return null;
  }

  static Future<bool> _saveStashRow(String token, Map<String, dynamic> row) async {
    final id = token.trim();
    if (id.isEmpty) return false;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashSettingsKey(id),
          'value': row,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return true;
    } catch (e) {
      debugPrint('[doc share qr stash] save $id: $e');
      return false;
    }
  }

  static Future<bool> stashExists(String token) async {
    final row = await _loadStashRow(token);
    return row != null && (row['payload'] ?? '').toString().isNotEmpty;
  }

  /// Stores bundle JSON in cloud (one row per token); returns a tiny QR-safe payload.
  static Future<({String qrPayload, String token, int usesRemaining})?> createFromBundleJson({
    required String ownerEmail,
    required String bundleJson,
    required int fileCount,
  }) async {
    final json = bundleJson.trim();
    if (json.isEmpty || json.length > kNgmyDocShareCloudStashMaxBytes) return null;

    final token = _generateToken();
    final saved = await _saveStashRow(token, {
      'ownerEmail': ownerEmail.trim().toLowerCase(),
      'fileCount': fileCount,
      'payload': base64Encode(utf8.encode(json)),
      'usesRemaining': kNgmyDocShareQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    });
    if (!saved) return null;

    return (
      qrPayload: '$kNgmyDocShareQrPrefixCloud|$token',
      token: token,
      usesRemaining: kNgmyDocShareQrMaxUses,
    );
  }

  /// Returns decoded bundle JSON (stash is kept for repeat scans).
  static Future<String?> consumeToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;

    final row = await _loadStashRow(id);
    if (row == null) return null;

    final payloadRaw = (row['payload'] ?? '').toString();
    if (payloadRaw.isEmpty) return null;
    try {
      final jsonText = utf8.decode(base64Decode(payloadRaw));
      if (jsonText.trim().isEmpty) return null;
      return jsonText;
    } catch (e) {
      debugPrint('[doc share qr stash] decode $id: $e');
      return null;
    }
  }

  static Future<void> deleteToken(String token) async {
    final id = token.trim();
    if (id.isEmpty) return;
    try {
      await Supabase.instance.client
          .from('ngmy_settings')
          .delete()
          .eq('key', _stashSettingsKey(id))
          .timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[doc share qr stash] delete $id: $e');
    }
  }
}
