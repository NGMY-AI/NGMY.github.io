import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Per-user backup for Authorized Registrar applications (survives refresh / stale config sync).
class NgmyCivicRegistrarApplication {
  static String _prefsKey(String email) =>
      'ngmy_registrar_app_${email.toLowerCase().trim()}';

  static Future<Map<String, dynamic>?> load(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey(email));
      if (raw == null || raw.trim().isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      return Map<String, dynamic>.from(decoded);
    } catch (_) {
      return null;
    }
  }

  static Future<void> save(String email, Map<String, dynamic> application) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey(email), jsonEncode(application));
    } catch (_) {}
  }

  static Future<void> clear(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_prefsKey(email));
    } catch (_) {}
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static String _statusOf(Map<String, dynamic> a) =>
      (a['status'] ?? 'pending').toString().toLowerCase();

  static bool isPendingForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'pending',
    );
  }

  static bool isApprovedForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'approved',
    );
  }

  static bool isRevokedForEmail(
    Iterable<Map<String, dynamic>> applications,
    String email,
  ) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return applications.any(
      (a) =>
          (a['userEmail'] ?? '').toString().toLowerCase().trim() == key &&
          _statusOf(a) == 'revoked',
    );
  }

  /// True when user should have registrar access (config + optional local backup).
  static bool hasRegistrarAccess({
    required Iterable<Map<String, dynamic>> applications,
    required String email,
    required bool userFlag,
    Map<String, dynamic>? localBackup,
  }) {
    if (isRevokedForEmail(applications, email)) return false;
    if (localBackup != null && _statusOf(localBackup) == 'revoked') return false;
    if (userFlag) return true;
    if (isApprovedForEmail(applications, email)) return true;
    if (localBackup != null && _statusOf(localBackup) == 'approved') return true;
    return false;
  }

  /// One application record per person, always — replaces every prior row
  /// for this email (regardless of its status) with [application]. Used
  /// to only replace same-status rows, which meant a revoke→reapply cycle
  /// left the old "revoked" row behind (different status, so it survived)
  /// AND added a new "pending" row — two cards for the same person in the
  /// admin's Requests list, compounding by one more row every cycle. A
  /// missing/empty email never matches another row so it can never wipe
  /// out unrelated applicants.
  static List<Map<String, dynamic>> upsertInList(
    List<Map<String, dynamic>> list,
    Map<String, dynamic> application,
  ) {
    final email = (application['userEmail'] ?? '').toString().toLowerCase().trim();
    final kept = list
        .where((a) {
          if (email.isEmpty) return true;
          return (a['userEmail'] ?? '').toString().toLowerCase().trim() != email;
        })
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    kept.add(Map<String, dynamic>.from(application));
    return kept;
  }

  static DateTime? _rowTimestamp(Map<String, dynamic> a) {
    final raw = (a['reviewedAt'] ?? a['updatedAt'] ?? a['revokedAt'] ?? a['createdAt'] ?? '').toString();
    if (raw.trim().isEmpty) return null;
    return DateTime.tryParse(raw)?.toUtc();
  }

  /// Merges a device-local application backup into [list] for [email] —
  /// but only if it's actually more recent than whatever's already
  /// there. This backup is written once, on the applicant's own device,
  /// when they submit an application — it is never updated there again
  /// when an admin later approves/revokes/restores remotely, on a
  /// different device. Every app bootstrap on the applicant's own phone
  /// calls this to fold that backup back in, so blindly replacing an
  /// existing row (e.g. one just correctly merged in from the cloud,
  /// showing "revoked") with the stale local one (still "pending" from
  /// however long ago they applied) silently undid every remote status
  /// change on every single app load — the applicant's own device could
  /// never see themselves as revoked no matter how long they waited.
  static List<Map<String, dynamic>> mergeLocalIntoList(
    List<Map<String, dynamic>> list,
    String email,
    Map<String, dynamic>? local,
  ) {
    if (local == null) return list.map((e) => Map<String, dynamic>.from(e)).toList();
    final key = _emailKey(email);
    final existingIdx = list.indexWhere((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() == key);
    if (existingIdx == -1) return upsertInList(list, local);
    final existingTs = _rowTimestamp(list[existingIdx]);
    final localTs = _rowTimestamp(local);
    if (localTs == null) return list.map((e) => Map<String, dynamic>.from(e)).toList();
    if (existingTs != null && !localTs.isAfter(existingTs)) {
      return list.map((e) => Map<String, dynamic>.from(e)).toList();
    }
    return upsertInList(list, local);
  }

  @Deprecated('Use mergeLocalIntoList')
  static List<Map<String, dynamic>> mergeLocalPendingIntoList(
    List<Map<String, dynamic>> list,
    String email,
    Map<String, dynamic>? localPending,
  ) =>
      mergeLocalIntoList(list, email, localPending);
}
