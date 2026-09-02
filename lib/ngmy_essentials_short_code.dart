import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

const kNgmyEssentialsShortQrPrefix = 'NGMY-ESS6';
const kNgmyEssentialsShortCodePrefix = 'ngmy_essentials_code_v1_';
const kNgmyEssentialsPayloadPrefix = 'NGMY-ESS:';

String ngmyEssentialsShortQrPayload(String code) => '$kNgmyEssentialsShortQrPrefix:${code.trim().toUpperCase()}';

bool ngmyEssentialsLooksLikeShortCode(String raw) {
  final t = raw.trim().toUpperCase();
  if (t.startsWith('$kNgmyEssentialsShortQrPrefix:')) {
    final code = t.substring(kNgmyEssentialsShortQrPrefix.length + 1);
    return RegExp(r'^[A-Z0-9]{6}$').hasMatch(code);
  }
  return RegExp(r'^[A-Z0-9]{6}$').hasMatch(t.replaceAll(RegExp(r'[^A-Z0-9]'), ''));
}

/// Normalize any scanned/pasted Essentials QR or code into a resolvable import string.
String? ngmyEssentialsParseScannedRaw(String raw) {
  var t = raw.trim();
  if (t.isEmpty) return null;
  try {
    t = Uri.decodeFull(t);
  } catch (_) {}
  final upper = t.toUpperCase();

  if (upper.startsWith(kNgmyEssentialsPayloadPrefix)) return t;

  final prefixMatch = RegExp(r'NGMY-ESS6:([A-Z0-9]{6})').firstMatch(upper);
  if (prefixMatch != null) return '$kNgmyEssentialsShortQrPrefix:${prefixMatch.group(1)}';

  if (upper.startsWith('$kNgmyEssentialsShortQrPrefix:')) {
    final code = NgmyEssentialsShortCode.normalize(t);
    return code == null ? null : '$kNgmyEssentialsShortQrPrefix:$code';
  }

  final code = NgmyEssentialsShortCode.normalize(t);
  if (code != null) return '$kNgmyEssentialsShortQrPrefix:$code';

  return null;
}

/// Cloud-backed short codes for Business Essentials transfer (24h relay).
class NgmyEssentialsShortCode {
  static String generate() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String? normalize(String raw) {
    var t = raw.trim().toUpperCase();
    if (t.startsWith('$kNgmyEssentialsShortQrPrefix:')) {
      t = t.substring(kNgmyEssentialsShortQrPrefix.length + 1);
    }
    t = t.replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (t.length != 6) return null;
    return t;
  }

  static String _localKey(String normalized) => '$kNgmyEssentialsShortCodePrefix$normalized';

  static Map<String, dynamic> _record({
    required String normalized,
    required String ownerEmail,
    required String payload,
    required DateTime now,
  }) =>
      {
        'code': normalized,
        'ownerEmail': ownerEmail.toLowerCase().trim(),
        'payload': payload.trim(),
        'expiresAt': now.add(const Duration(hours: 24)).toIso8601String(),
        'updatedAt': now.toIso8601String(),
      };

  static Future<void> _cacheLocal(String normalized, Map<String, dynamic> record) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_localKey(normalized), jsonEncode(record));
    } catch (e) {
      debugPrint('[essentials short code] local cache $normalized: $e');
    }
  }

  static Future<String?> _readLocalPayload(String normalized) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_localKey(normalized));
      if (raw == null || raw.isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      final map = Map<String, dynamic>.from(decoded);
      final exp = DateTime.tryParse((map['expiresAt'] ?? '').toString());
      if (exp != null && DateTime.now().toUtc().isAfter(exp)) return null;
      final payload = (map['payload'] ?? '').toString().trim();
      return payload.isEmpty ? null : payload;
    } catch (e) {
      debugPrint('[essentials short code] local read $normalized: $e');
      return null;
    }
  }

  static Future<String?> publishPayload({
    required String ownerEmail,
    required String payload,
    required String code,
  }) async {
    final normalized = normalize(code);
    if (normalized == null || payload.trim().isEmpty) return null;
    final now = DateTime.now().toUtc();
    final record = _record(normalized: normalized, ownerEmail: ownerEmail, payload: payload, now: now);
    await _cacheLocal(normalized, record);
    try {
      final ok = await ngmyDbRelaySettingsUpsert(_localKey(normalized), record, timeout: kNgmyCloudWriteTimeout);
      if (!ok) throw Exception('relay upsert failed');
      return normalized;
    } catch (e) {
      debugPrint('[essentials short code] cloud publish $code: $e');
      return null;
    }
  }

  static Future<String?> resolvePayload(String rawCode) async {
    final normalized = normalize(rawCode);
    if (normalized == null) return null;

    try {
      final value = await ngmyDbRelaySettingsFetch(_localKey(normalized), timeout: kNgmyCloudLoadTimeout);
      if (value != null) {
        final exp = DateTime.tryParse((value['expiresAt'] ?? '').toString());
        if (exp != null && DateTime.now().toUtc().isAfter(exp)) return null;
        final payload = (value['payload'] ?? '').toString().trim();
        if (payload.isNotEmpty) return payload;
      }
    } catch (e) {
      debugPrint('[essentials short code] cloud resolve $rawCode: $e');
    }

    return _readLocalPayload(normalized);
  }
}
