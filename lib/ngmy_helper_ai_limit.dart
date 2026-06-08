import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Default NGMY Helper AI messages allowed per rolling 24 hours (non-admin users).
const int kNgmyHelperDefaultDailyMessageLimit = 30;

const _kPrefsKey = 'ngmy_helper_ai_usage_v1';
const _kWindowHours = 24;

class NgmyHelperAiLimit {
  static Future<Map<String, dynamic>> _loadUsageMap() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_kPrefsKey);
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (_) {}
    return {};
  }

  static Future<void> _saveUsageMap(Map<String, dynamic> map) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kPrefsKey, jsonEncode(map));
    } catch (_) {}
  }

  static String _key(String email) => email.toLowerCase().trim();

  static ({int count, DateTime windowStart}) _entryForEmail(Map<String, dynamic> map, String email) {
    final raw = map[_key(email)];
    if (raw is! Map) return (count: 0, windowStart: DateTime.now());
    final count = raw['count'];
    final startRaw = raw['windowStart']?.toString();
    final start = DateTime.tryParse(startRaw ?? '') ?? DateTime.now();
    return (count: count is num ? count.toInt().clamp(0, 999999) : 0, windowStart: start);
  }

  static ({int count, DateTime windowStart}) _normalizeRollingWindow(({int count, DateTime windowStart}) entry, DateTime now) {
    if (now.difference(entry.windowStart).inHours >= _kWindowHours) {
      return (count: 0, windowStart: now);
    }
    return entry;
  }

  /// Messages left in the current 24h window. Returns -1 when unlimited.
  static Future<int> remaining(String email, int dailyLimit) async {
    if (dailyLimit <= 0) return -1;
    final key = _key(email);
    if (key.isEmpty) return dailyLimit;
    final map = await _loadUsageMap();
    final now = DateTime.now();
    final entry = _normalizeRollingWindow(_entryForEmail(map, email), now);
    return (dailyLimit - entry.count).clamp(0, dailyLimit);
  }

  /// Returns false when the user hit the limit.
  static Future<bool> tryConsume(String email, int dailyLimit) async {
    if (dailyLimit <= 0) return true;
    final key = _key(email);
    if (key.isEmpty) return false;
    final map = await _loadUsageMap();
    final now = DateTime.now();
    var entry = _normalizeRollingWindow(_entryForEmail(map, email), now);
    if (entry.count >= dailyLimit) return false;
    entry = (count: entry.count + 1, windowStart: entry.windowStart);
    map[key] = {
      'count': entry.count,
      'windowStart': entry.windowStart.toUtc().toIso8601String(),
    };
    await _saveUsageMap(map);
    return true;
  }
}
