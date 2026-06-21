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

  static Future<void> _upsertEntry({
    required Map<String, dynamic> codes,
    required String code,
    required String ownerEmail,
    required NgmyDocShareItem item,
    String? stashToken,
    String? lanPayload,
    String? inlinePayload,
  }) async {
    codes[code] = {
      'ownerEmail': ownerEmail.toLowerCase().trim(),
      'itemId': item.id,
      'itemName': item.name,
      if (stashToken != null && stashToken.isNotEmpty) 'stashToken': stashToken,
      if (lanPayload != null && lanPayload.isNotEmpty) 'lanPayload': lanPayload,
      if (inlinePayload != null && inlinePayload.isNotEmpty) 'inlinePayload': inlinePayload,
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveCodes(codes);
  }

  /// Tiny cloud row — maps typed code to an active LAN share (no file upload).
  static Future<void> registerForLanPayload({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String code,
    required String lanPayload,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || lanPayload.trim().isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    final codes = await _loadCodes();
    await _upsertEntry(
      codes: codes,
      code: normalized,
      ownerEmail: ownerEmail,
      item: item,
      lanPayload: lanPayload.trim(),
    );
  }

  static Future<void> registerForInlinePayload({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String code,
    required String inlinePayload,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || inlinePayload.trim().isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    final codes = await _loadCodes();
    await _upsertEntry(
      codes: codes,
      code: normalized,
      ownerEmail: ownerEmail,
      item: item,
      inlinePayload: inlinePayload.trim(),
    );
  }

  /// Maps typed code to an existing cloud stash token (created when QR is generated on web).
  static Future<void> registerForStash({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String stashToken,
    required String code,
  }) async {
    final normalized = normalizeInput(code);
    if (normalized == null || stashToken.trim().isEmpty) return;
    if (!await ngmyCanReachCloud()) return;
    final codes = await _loadCodes();
    await _upsertEntry(
      codes: codes,
      code: normalized,
      ownerEmail: ownerEmail,
      item: item,
      stashToken: stashToken.trim(),
    );
  }

  /// Resolves a typed 5–6 char code to a full Doc Share import payload (LAN link, cloud token, or inline QR).
  static Future<String?> resolveSharePayload(String rawCode) async {
    if (!looksLikeShortCode(rawCode)) return null;
    final code = normalizeInput(rawCode);
    if (code == null) return null;
    if (!await ngmyCanReachCloud()) return null;
    final codes = await _loadCodes();
    final row = codes[code];
    if (row is! Map) return null;

    final lan = (row['lanPayload'] ?? '').toString().trim();
    if (lan.isNotEmpty) return lan;

    final inline = (row['inlinePayload'] ?? '').toString().trim();
    if (inline.isNotEmpty) return inline;

    final token = (row['stashToken'] ?? '').toString().trim();
    if (token.isEmpty) return null;
    return '$kNgmyDocShareQrPrefixCloud|$token';
  }

  @Deprecated('Use resolveSharePayload')
  static Future<String?> resolveStashToken(String rawCode) async {
    final payload = await resolveSharePayload(rawCode);
    if (payload == null) return null;
    if (!payload.startsWith('$kNgmyDocShareQrPrefixCloud|')) return null;
    return payload.substring(kNgmyDocShareQrPrefixCloud.length + 1).trim();
  }

  static Future<String?> resolveToQrPayload(String rawCode) async => resolveSharePayload(rawCode);
}
