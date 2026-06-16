import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

String ngmyNormalizeReferralCode(String raw) {
  var code = raw.trim().toUpperCase();
  if (code.isEmpty) return '';
  code = code.replaceAll(RegExp(r'[^A-Z0-9]'), '');
  if (!code.startsWith('REFD')) code = 'REFD$code';
  return code;
}

/// Stable across web, iOS, and Android (unlike [String.hashCode]).
String ngmyStableReferralCodeForEmail(String email) {
  final key = email.toLowerCase().trim();
  final hash = sha256.convert(utf8.encode('ngmy_ref_v1:$key'));
  var n = 0;
  for (var i = 0; i < 4 && i < hash.bytes.length; i++) {
    n = (n * 256 + hash.bytes[i]) & 0x7FFFFFFF;
  }
  return 'REFD${(n % 1000000).toString().padLeft(6, '0')}';
}

/// Legacy code still shown on some accounts — kept for lookup only.
String ngmyLegacyReferralCodeForEmail(String email) =>
    'REFD${email.hashCode.abs().toString().padLeft(6, '0').substring(0, 6)}';

/// Canonical code shown in Profile and invite links.
String ngmyReferralCodeForEmail(String email) => ngmyStableReferralCodeForEmail(email);

List<String> ngmyReferralCodesForEmail(String email) {
  final stable = ngmyStableReferralCodeForEmail(email);
  final legacy = ngmyLegacyReferralCodeForEmail(email);
  if (legacy == stable) return [stable];
  return [stable, legacy];
}

Map<String, dynamic> _userRowFromLocal(dynamic user) {
  if (user is Map<String, dynamic>) return user;
  try {
    return Map<String, dynamic>.from((user as dynamic).toJson() as Map);
  } catch (_) {
    return {};
  }
}

bool _rowMatchesReferralCode(Map<String, dynamic> row, String normalized) {
  final email = (row['email'] ?? '').toString().trim();
  if (email.isEmpty) return false;
  final stored = (row['referralCode'] ?? '').toString().trim().toUpperCase();
  if (stored.isNotEmpty && stored == normalized) return true;
  for (final c in ngmyReferralCodesForEmail(email)) {
    if (c.toUpperCase() == normalized) return true;
  }
  return false;
}

/// Finds a referrer user row by referral code (local cache first, then Supabase).
Future<Map<String, dynamic>?> ngmyLookupReferrerUserRow(
  String rawCode, {
  List<dynamic> localUsers = const [],
}) {
  return ngmyWithTimeout(
    () => _ngmyLookupReferrerUserRowImpl(rawCode, localUsers: localUsers),
    onTimeout: () {
      debugPrint('[referral] lookup timed out for $rawCode');
      return null;
    },
  );
}

Future<Map<String, dynamic>?> _ngmyLookupReferrerUserRowImpl(
  String rawCode, {
  List<dynamic> localUsers = const [],
}) async {
  final normalized = ngmyNormalizeReferralCode(rawCode);
  if (normalized.isEmpty) return null;

  for (final u in localUsers) {
    final row = _userRowFromLocal(u);
    if (_rowMatchesReferralCode(row, normalized)) return row;
  }

  if (!await ngmyCanReachCloud()) return null;
  try {
    final client = Supabase.instance.client;
    try {
      final byColumn = await client
          .from('users')
          .select()
          .eq('referralCode', normalized)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (byColumn != null) {
        return Map<String, dynamic>.from(byColumn);
      }
    } catch (e) {
      debugPrint('[referral] referralCode column lookup skipped: $e');
    }

    final rows = await client
        .from('users')
        .select('email, username, fullName, referralCount, points, referredByCode, referralCode')
        .limit(1500)
        .timeout(kNgmyCloudLoadTimeout);
    for (final raw in rows) {
      final row = Map<String, dynamic>.from(raw);
      if (_rowMatchesReferralCode(row, normalized)) return row;
    }
  } catch (e) {
    debugPrint('[referral] cloud lookup: $e');
  }
  return null;
}

Future<String?> ngmyReferrerDisplayNameForCode(
  String rawCode, {
  List<dynamic> localUsers = const [],
}) async {
  final row = await ngmyLookupReferrerUserRow(rawCode, localUsers: localUsers);
  if (row == null) return null;
  final username = (row['username'] ?? row['fullName'] ?? '').toString().trim();
  if (username.isNotEmpty) return username;
  final email = (row['email'] ?? '').toString().trim();
  if (email.contains('@')) return email.split('@').first;
  return email.isEmpty ? null : email;
}

Map<String, dynamic> ngmyReferralCodePatchForEmail(String email) => {
      'email': email.trim(),
      'referralCode': ngmyReferralCodeForEmail(email),
    };

bool ngmyReferralCodeBelongsToEmail(String email, String rawCode) {
  final normalized = ngmyNormalizeReferralCode(rawCode);
  if (normalized.isEmpty) return false;
  return ngmyReferralCodesForEmail(email).any((c) => c.toUpperCase() == normalized);
}
