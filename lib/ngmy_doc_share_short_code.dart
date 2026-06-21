import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_stash.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyDocShareShortCodePrefix = 'NGMYDOCSYNC6';

const String _kShortCodesKey = 'ngmy_doc_share_short_codes_v1';

/// 6-character codes (letters + numbers, no ambiguous 0/O/1/I).
class NgmyDocShareShortCode {
  static String _generateCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String? normalizeInput(String raw) {
    final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (t.length < 5 || t.length > 6) return null;
    return t;
  }

  static Future<Map<String, dynamic>> _loadCodes() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _kShortCodesKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final codes = value['codes'];
      if (codes is Map) return Map<String, dynamic>.from(codes);
    } catch (e) {
      debugPrint('[doc share short code] load: $e');
    }
    return {};
  }

  static Future<void> _saveCodes(Map<String, dynamic> codes) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kShortCodesKey,
          'value': {
            'codes': codes,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[doc share short code] save: $e');
    }
  }

  static Future<String?> existingCodeForItem({
    required String ownerEmail,
    required String itemId,
  }) async {
    final owner = ownerEmail.toLowerCase().trim();
    final id = itemId.trim();
    if (owner.isEmpty || id.isEmpty) return null;
    final codes = await _loadCodes();
    for (final entry in codes.entries) {
      final row = entry.value;
      if (row is! Map) continue;
      if ((row['ownerEmail'] ?? '').toString().toLowerCase().trim() != owner) continue;
      if ((row['itemId'] ?? '').toString().trim() != id) continue;
      return entry.key.toString().toUpperCase();
    }
    return null;
  }

  /// Creates cloud stash + unique 6-digit code for one library item.
  static Future<String?> registerForStash({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String stashToken,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final existing = await existingCodeForItem(ownerEmail: ownerEmail, itemId: item.id);
    if (existing != null && existing.isNotEmpty) return existing;

    final codes = await _loadCodes();
    String code = _generateCode();
    for (var i = 0; i < 24 && codes.containsKey(code); i++) {
      code = _generateCode();
    }
    codes[code] = {
      'ownerEmail': ownerEmail.toLowerCase().trim(),
      'itemId': item.id,
      'itemName': item.name,
      'stashToken': stashToken,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveCodes(codes);
    return code;
  }

  static Future<String?> resolveStashToken(String rawCode) async {
    final code = normalizeInput(rawCode);
    if (code == null) return null;
    if (!await ngmyCanReachCloud()) return null;
    final codes = await _loadCodes();
    final row = codes[code];
    if (row is! Map) return null;
    final token = (row['stashToken'] ?? '').toString().trim();
    return token.isEmpty ? null : token;
  }

  static Future<String?> resolveToQrPayload(String rawCode) async {
    final token = await resolveStashToken(rawCode);
    if (token == null || token.isEmpty) return null;
    return '$kNgmyDocShareQrPrefixCloud|$token';
  }
}
