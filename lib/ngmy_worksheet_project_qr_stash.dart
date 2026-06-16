import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Short QR prefix — full project data lives in cloud stash (scannable on any phone).
const String kNgmyWorksheetProjectQrPrefixV2 = 'NGMYWSSYNC2';

const int kNgmyWorksheetProjectQrMaxUses = 25;

const String _kWorksheetQrStashSettingsKey = 'ngmy_worksheet_project_qr_stashes_v1';

class NgmyWorksheetProjectQrStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'WS${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadStashes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _kWorksheetQrStashSettingsKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final stashes = value['stashes'];
      if (stashes is Map) return Map<String, dynamic>.from(stashes);
    } catch (e) {
      debugPrint('[worksheet qr stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveStashes(Map<String, dynamic> stashes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kWorksheetQrStashSettingsKey,
          'value': {
            'stashes': stashes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[worksheet qr stash] save: $e');
    }
  }

  /// Stores full share JSON in cloud; returns a tiny QR-safe payload.
  static Future<({String qrPayload, String token, int usesRemaining})?> createFromShareJson(
    String shareJson, {
    required String ownerEmail,
    required String projectId,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final json = shareJson.trim();
    if (json.isEmpty) return null;
    final token = _generateToken();
    final stashes = await _loadStashes();
    stashes[token] = {
      'ownerEmail': ownerEmail.trim(),
      'projectId': projectId,
      'payload': base64Encode(utf8.encode(json)),
      'usesRemaining': kNgmyWorksheetProjectQrMaxUses,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveStashes(stashes);
    return (
      qrPayload: '$kNgmyWorksheetProjectQrPrefixV2|$token',
      token: token,
      usesRemaining: kNgmyWorksheetProjectQrMaxUses,
    );
  }

  /// Returns decoded share JSON after consuming one scan use.
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
      debugPrint('[worksheet qr stash] decode: $e');
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
