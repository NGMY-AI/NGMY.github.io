import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Same code/QR-stash trick as Doc Share and Advisors sync: the snapshot
/// blob is relayed through a tiny `ngmy_settings` row so the QR/code only
/// has to carry a short token — never the source of truth for the local
/// balance, just a transport for moving it between this user's own devices.
const String kNgmyLocalSnapshotStashPrefix = 'NGMYLOCALSYNC1';

String _stashKey(String token) => 'ngmy_local_growth_income_stash_v1_${token.trim()}';
String _codeKey(String code) => 'ngmy_local_growth_income_code_v1_${code.trim().toUpperCase()}';

class NgmyLocalSnapshotStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return 'LG${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static String generateCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String? normalizeCode(String raw) {
    final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (t.length < 5 || t.length > 6) return null;
    return t;
  }

  /// Only treat input as a typed code — never a scanned QR payload.
  static bool looksLikeCode(String raw) {
    final t = raw.trim();
    if (t.isEmpty || t.length > 6) return false;
    if (t.contains('|') || t.contains(':') || t.contains('/') || t.contains('.') || t.contains(' ')) return false;
    if (RegExp(r'^(NGMY|HTTP)', caseSensitive: false).hasMatch(t)) return false;
    return RegExp(r'^[A-Za-z0-9]{5,6}$').hasMatch(t);
  }

  /// Stashes the full snapshot JSON and registers a short code pointing at
  /// it. Returns a tiny QR payload (short token, not the snapshot itself)
  /// alongside the human-typeable code.
  static Future<({String qrPayload, String code})?> create({
    required String ownerEmail,
    required String snapshotJson,
  }) async {
    final token = _generateToken();
    final code = generateCode();
    final now = DateTime.now().toUtc().toIso8601String();
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            'ownerEmail': ownerEmail.toLowerCase().trim(),
            'payload': base64Encode(utf8.encode(snapshotJson)),
            'createdAt': now,
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _codeKey(code),
          'value': {'token': token, 'updatedAt': now},
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[local growth income stash] create: $e');
      return null;
    }
    return (qrPayload: '$kNgmyLocalSnapshotStashPrefix|$token', code: code);
  }

  static Future<String?> _loadTokenForCode(String code) async {
    final normalized = normalizeCode(code);
    if (normalized == null) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _codeKey(normalized))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is Map) return (value['token'] ?? '').toString().trim();
    } catch (e) {
      debugPrint('[local growth income stash] code lookup: $e');
    }
    return null;
  }

  static Future<String?> consumeToken(String token) async {
    final loaded = await _consumeTokenWithOwner(token);
    return loaded?.snapshotJson;
  }

  static Future<({String snapshotJson, String ownerEmail})?> _consumeTokenWithOwner(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _stashKey(id))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is! Map) return null;
      final payloadRaw = (value['payload'] ?? '').toString();
      if (payloadRaw.isEmpty) return null;
      final ownerEmail = (value['ownerEmail'] ?? '').toString().trim();
      return (snapshotJson: utf8.decode(base64Decode(payloadRaw)), ownerEmail: ownerEmail);
    } catch (e) {
      debugPrint('[local growth income stash] consume: $e');
      return null;
    }
  }

  /// Resolves either a scanned short-QR payload or a typed code to the full
  /// snapshot JSON text plus the account that created the backup.
  static Future<({String snapshotJson, String ownerEmail})?> resolveWithOwner(String raw) async {
    final text = raw.trim();
    if (looksLikeCode(text)) {
      final token = await _loadTokenForCode(text);
      if (token == null) return null;
      return _consumeTokenWithOwner(token);
    }
    if (text.startsWith('$kNgmyLocalSnapshotStashPrefix|')) {
      final token = text.substring(kNgmyLocalSnapshotStashPrefix.length + 1).trim();
      return _consumeTokenWithOwner(token);
    }
    return null;
  }

  /// Resolves either a scanned short-QR payload or a typed code to the full
  /// snapshot JSON text. Returns null if it's neither (caller should fall
  /// back to parsing [raw] directly, for file uploads or older QR formats).
  static Future<String?> resolve(String raw) async {
    final loaded = await resolveWithOwner(raw);
    return loaded?.snapshotJson;
  }
}
