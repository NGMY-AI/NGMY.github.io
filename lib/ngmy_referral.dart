import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

String ngmyNormalizeReferralCode(String raw) {
  var code = raw.trim().toUpperCase();
  if (code.isEmpty) return '';
  if (!code.startsWith('REFD')) code = 'REFD$code';
  return code;
}

String ngmyReferralCodeForEmail(String email) =>
    'REFD${email.hashCode.abs().toString().padLeft(6, '0').substring(0, 6)}';

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
  return ngmyReferralCodeForEmail(email).toUpperCase() == normalized;
}

/// Finds a referrer user row by referral code (local cache first, then Supabase).
Future<Map<String, dynamic>?> ngmyLookupReferrerUserRow(
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
    final byColumn = await client
        .from('users')
        .select()
        .eq('referralCode', normalized)
        .maybeSingle()
        .timeout(kNgmyCloudLoadTimeout);
    if (byColumn != null) {
      return Map<String, dynamic>.from(byColumn);
    }

    final rows = await client
        .from('users')
        .select('email, username, referralCount, points, referredByCode, referralCode')
        .limit(4000)
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
