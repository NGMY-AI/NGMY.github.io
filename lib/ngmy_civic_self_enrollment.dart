import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Persists admin self-enrollment toggle across devices (local + ngmy_settings + config).
class NgmyCivicSelfEnrollment {
  static const _prefsKey = 'ngmy_civic_self_enrollment_v1';

  static Map<String, dynamic> payload(dynamic config) {
    final c = config as dynamic;
    // Never put cities/rooms/states in this settings row — it was leaking in Network.
    // Geography lives in Edge civic_cities_rooms / civicPublicCatalog only.
    return {
      'civicSelfEnrollmentEnabled': c.civicSelfEnrollmentEnabled == true,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };
  }

  static DateTime? _savedAtOf(Map<String, dynamic> payload) =>
      DateTime.tryParse((payload['savedAt'] ?? '').toString());

  /// Apply remote/local payload. Newer [savedAt] wins when both sides disagree.
  static void applyPayload(dynamic config, Map<String, dynamic> payload, {bool force = false}) {
    if (!payload.containsKey('civicSelfEnrollmentEnabled')) return;
    final incoming = payload['civicSelfEnrollmentEnabled'] == true;
    if (force) {
      (config as dynamic).civicSelfEnrollmentEnabled = incoming;
      return;
    }
    final current = (config as dynamic).civicSelfEnrollmentEnabled == true;
    if (current == incoming) {
      (config as dynamic).civicSelfEnrollmentEnabled = incoming;
      return;
    }
    // Prefer ON if either side is newer-or-equal ON; never let a stale OFF wipe a fresh ON
    // without a savedAt (legacy rows). When savedAt exists, newer timestamp wins.
    final at = _savedAtOf(payload);
    if (at == null) {
      if (incoming) (config as dynamic).civicSelfEnrollmentEnabled = true;
      return;
    }
    (config as dynamic).civicSelfEnrollmentEnabled = incoming;
  }

  static Future<void> saveLocalBackup(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, jsonEncode(payload(config)));
    } catch (_) {}
  }

  static Future<Map<String, dynamic>?> loadLocalPayload() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (_) {}
    return null;
  }

  static Future<void> hydrateLocal(dynamic config) async {
    final local = await loadLocalPayload();
    if (local != null) applyPayload(config, local, force: true);
  }

  /// Merge cloud over local using savedAt so a stale OFF cannot erase a fresh ON.
  static void applyCloudOverLocal(dynamic config, Map<String, dynamic> cloud, Map<String, dynamic>? local) {
    if (!cloud.containsKey('civicSelfEnrollmentEnabled')) return;
    final cloudOn = cloud['civicSelfEnrollmentEnabled'] == true;
    final cloudAt = _savedAtOf(cloud);
    final localOn = local != null && local['civicSelfEnrollmentEnabled'] == true;
    final localAt = local == null ? null : _savedAtOf(local);

    if (local == null || localAt == null) {
      applyPayload(config, cloud, force: true);
      return;
    }
    if (cloudAt == null) {
      // Stale cloud row without timestamp — keep local when local is ON.
      if (localOn && !cloudOn) {
        (config as dynamic).civicSelfEnrollmentEnabled = true;
        return;
      }
      applyPayload(config, cloud, force: true);
      return;
    }
    if (localAt.isAfter(cloudAt)) {
      (config as dynamic).civicSelfEnrollmentEnabled = localOn;
      return;
    }
    applyPayload(config, cloud, force: true);
  }
}
