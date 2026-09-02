import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

/// Admin toggle — opens App Studio for all users (synced via ngmy_settings).
class NgmyAppStudioAccess {
  static const settingsKey = 'app_studio_access_settings';
  static const prefsKey = 'ngmy_app_studio_access_settings_v1';

  static Map<String, dynamic> _payload(dynamic config) => {
        'appBuilderEnabled': (config as dynamic).appBuilderEnabled == true,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };

  static void _apply(dynamic config, Map<String, dynamic> payload) {
    if (payload.containsKey('appBuilderEnabled')) {
      (config as dynamic).appBuilderEnabled = payload['appBuilderEnabled'] == true;
    }
  }

  static Future<void> hydrate(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(prefsKey);
      if (raw != null && raw.trim().isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) _apply(config, Map<String, dynamic>.from(decoded));
      }
    } catch (e) {
      debugPrint('[app studio access] local hydrate: $e');
    }
    if (!await ngmyCanReachCloud()) return;
    try {
      final value = await ngmyDbRelaySettingsFetch(settingsKey, timeout: kNgmyCloudLoadTimeout);
      if (value != null) _apply(config, value);
    } catch (e) {
      debugPrint('[app studio access] cloud hydrate: $e');
    }
  }

  static Future<bool> persist(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(prefsKey, jsonEncode(_payload(config)));
    } catch (e) {
      debugPrint('[app studio access] local save: $e');
    }
    if (!await ngmyCanReachCloud()) return false;
    try {
      return await ngmyDbRelaySettingsUpsert(settingsKey, _payload(config), timeout: kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[app studio access] cloud save: $e');
      return false;
    }
  }
}
