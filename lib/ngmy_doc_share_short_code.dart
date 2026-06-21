import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_stash.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyDocShareShortCodePrefix = 'NGMYDOCSYNC6';

String _codeSettingsKey(String code) => 'ngmy_doc_share_code_v2_${code.trim().toUpperCase()}';

/// 6-character codes (letters + numbers, no ambiguous 0/O/1/I).
class NgmyDocShareShortCode {
  static String generateLocalCode() => _generateCode();

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

  /// Only treat input as a typed short code — never QR payloads or Wi‑Fi links.
  static bool looksLikeShortCode(String raw) {
    final t = raw.trim();
    if (t.isEmpty) return false;
    if (t.contains('|') || t.contains(':') || t.contains('/') || t.contains('.') || t.contains(' ')) {
      return false;
    }
    if (RegExp(r'^(NGMY|N2|HTTP)', caseSensitive: false).hasMatch(t)) return false;
    return RegExp(r'^[A-Za-z0-9]{5,6}$').hasMatch(t);
  }

  static Future<Map<String, dynamic>?> _loadCodeRow(String code) async {
    final normalized = normalizeInput(code);
    if (normalized == null) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _codeSettingsKey(normalized))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is Map) return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[doc share short code] load $code: $e');
    }
    return null;
  }

  static Future<bool> _saveCodeRow(String code, Map<String, dynamic> row) async {
    final normalized = normalizeInput(code);
    if (normalized == null) return false;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _codeSettingsKey(normalized),
          'value': row,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return true;
    } catch (e) {
      debugPrint('[doc share short code] save $code: $e');
      return false;
    }
  }

  static Future<void> registerForLanPayload({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String code,
    required String lanPayload,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || lanPayload.trim().isEmpty) return;
    await _saveCodeRow(normalized, {
      'ownerEmail': ownerEmail.toLowerCase().trim(),
      'itemId': item.id,
      'itemName': item.name,
      'lanPayload': lanPayload.trim(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
  }

  static Future<void> registerForInlinePayload({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String code,
    required String inlinePayload,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || inlinePayload.trim().isEmpty) return;
    await _saveCodeRow(normalized, {
      'ownerEmail': ownerEmail.toLowerCase().trim(),
      'itemId': item.id,
      'itemName': item.name,
      'inlinePayload': inlinePayload.trim(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
  }

  /// Maps typed code to cloud stash token (one small row per code).
  static Future<bool> registerForStash({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String stashToken,
    required String code,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || stashToken.trim().isEmpty) return false;
    return _saveCodeRow(normalized, {
      'ownerEmail': ownerEmail.toLowerCase().trim(),
      'itemId': item.id,
      'itemName': item.name,
      'stashToken': stashToken.trim(),
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
  }

  /// True when code is registered and its stash exists in cloud.
  static Future<bool> isCodeReady(String code) async {
    final payload = await resolveSharePayload(code);
    if (payload == null || payload.isEmpty) return false;
    if (!payload.startsWith('$kNgmyDocShareQrPrefixCloud|')) {
      return payload.startsWith('NGMYDOCSYNC0|') ||
          payload.startsWith('N2|') ||
          payload.startsWith('http');
    }
    final token = payload.substring(kNgmyDocShareQrPrefixCloud.length + 1).trim();
    return NgmyDocShareQrStash.stashExists(token);
  }

  /// Resolves a typed 5–6 char code to a full Doc Share import payload.
  static Future<String?> resolveSharePayload(String rawCode) async {
    if (!looksLikeShortCode(rawCode)) return null;
    final row = await _loadCodeRow(rawCode);
    if (row == null) return null;

    final lan = (row['lanPayload'] ?? '').toString().trim();
    if (lan.isNotEmpty) return lan;

    final inline = (row['inlinePayload'] ?? '').toString().trim();
    if (inline.isNotEmpty) return inline;

    final token = (row['stashToken'] ?? '').toString().trim();
    if (token.isEmpty) return null;
    return '$kNgmyDocShareQrPrefixCloud|$token';
  }

  static Future<String?> resolveToQrPayload(String rawCode) async => resolveSharePayload(rawCode);
}
