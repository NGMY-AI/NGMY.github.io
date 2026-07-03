import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

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

  static Future<String?> publishPayload({
    required String ownerEmail,
    required String payload,
    required String code,
  }) async {
    final normalized = normalize(code);
    if (normalized == null || payload.trim().isEmpty) return null;
    final now = DateTime.now().toUtc();
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': '$kNgmyEssentialsShortCodePrefix$normalized',
          'value': {
            'code': normalized,
            'ownerEmail': ownerEmail.toLowerCase().trim(),
            'payload': payload.trim(),
            'expiresAt': now.add(const Duration(hours: 24)).toIso8601String(),
            'updatedAt': now.toIso8601String(),
          },
          'updated_at': now.toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      return normalized;
    } catch (e) {
      debugPrint('[essentials short code] publish $code: $e');
      return null;
    }
  }

  static Future<String?> resolvePayload(String rawCode) async {
    final normalized = normalize(rawCode);
    if (normalized == null) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', '$kNgmyEssentialsShortCodePrefix$normalized')
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
      final map = Map<String, dynamic>.from(value);
      final exp = DateTime.tryParse((map['expiresAt'] ?? '').toString());
      if (exp != null && DateTime.now().toUtc().isAfter(exp)) return null;
      final payload = (map['payload'] ?? '').toString().trim();
      return payload.isEmpty ? null : payload;
    } catch (e) {
      debugPrint('[essentials short code] resolve $rawCode: $e');
      return null;
    }
  }
}
