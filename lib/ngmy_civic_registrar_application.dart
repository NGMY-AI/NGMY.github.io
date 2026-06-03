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

  /// Ensures [application] is in [list] (replaces prior row for same email with same status family).
  static List<Map<String, dynamic>> upsertInList(
    List<Map<String, dynamic>> list,
    Map<String, dynamic> application,
  ) {
    final email = (application['userEmail'] ?? '').toString().toLowerCase().trim();
    final newStatus = _statusOf(application);
    final kept = list
        .where((a) {
          final ae = (a['userEmail'] ?? '').toString().toLowerCase().trim();
          if (ae != email) return true;
          return _statusOf(a) != newStatus;
        })
        .map((e) => Map<String, dynamic>.from(e))
        .toList();
    kept.add(Map<String, dynamic>.from(application));
    return kept;
  }

  static List<Map<String, dynamic>> mergeLocalIntoList(
    List<Map<String, dynamic>> list,
    String email,
    Map<String, dynamic>? local,
  ) {
    if (local == null) return list.map((e) => Map<String, dynamic>.from(e)).toList();
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
