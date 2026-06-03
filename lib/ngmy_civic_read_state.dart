import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Per-user read state for Civic Registry contribution receipt badges.
class NgmyCivicReadState {
  static String _openedKey(String email) =>
      'ngmy_civic_opened_receipts_${email.toLowerCase().trim()}';

  static String _dismissedKey(String email) =>
      'ngmy_civic_dismissed_receipts_${email.toLowerCase().trim()}';

  static Set<String> mergeSets(Iterable<String> a, Iterable<String> b) =>
      {...a, ...b}.where((e) => e.isNotEmpty).toSet();

  static Future<Set<String>> _load(String prefsKey) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(prefsKey);
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! List) return {};
      return decoded.map((e) => e.toString()).where((e) => e.isNotEmpty).toSet();
    } catch (_) {
      return {};
    }
  }

  static Future<void> _save(String prefsKey, Set<String> keys) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(prefsKey, jsonEncode(keys.toList()));
    } catch (_) {}
  }

  static Future<Set<String>> loadOpened(String email) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return {};
    return _load(_openedKey(key));
  }

  static Future<Set<String>> loadDismissed(String email) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return {};
    return _load(_dismissedKey(key));
  }

  static Future<void> saveOpened(String email, Set<String> keys) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    await _save(_openedKey(key), keys);
  }

  static Future<void> saveDismissed(String email, Set<String> keys) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    await _save(_dismissedKey(key), keys);
  }

  /// Merges device cache, user row, and legacy config lists for this viewer.
  static Set<String> hydrateOpened({
    required String email,
    Iterable<String> userRow = const [],
    Iterable<String> legacyConfig = const [],
    Iterable<String> local = const [],
  }) {
    return mergeSets(mergeSets(mergeSets(local, userRow), legacyConfig), const []);
  }

  static Set<String> hydrateDismissed({
    required String email,
    Iterable<String> userRow = const [],
    Iterable<String> legacyConfig = const [],
    Iterable<String> local = const [],
  }) {
    return mergeSets(mergeSets(mergeSets(local, userRow), legacyConfig), const []);
  }
}
