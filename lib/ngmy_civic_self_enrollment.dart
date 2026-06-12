import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Persists admin self-enrollment toggle across devices (local + ngmy_settings + config).
class NgmyCivicSelfEnrollment {
  static const _prefsKey = 'ngmy_civic_self_enrollment_v1';

  static Map<String, dynamic> payload(dynamic config) => {
        'civicSelfEnrollmentEnabled': (config as dynamic).civicSelfEnrollmentEnabled == true,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };

  static void applyPayload(dynamic config, Map<String, dynamic> payload) {
    if (payload.containsKey('civicSelfEnrollmentEnabled')) {
      (config as dynamic).civicSelfEnrollmentEnabled = payload['civicSelfEnrollmentEnabled'] == true;
    }
  }

  static Future<void> saveLocalBackup(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, jsonEncode(payload(config)));
    } catch (_) {}
  }

  static Future<void> hydrateLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.isEmpty) return;
      final decoded = jsonDecode(raw);
      if (decoded is Map) applyPayload(config, Map<String, dynamic>.from(decoded));
    } catch (_) {}
  }
}
