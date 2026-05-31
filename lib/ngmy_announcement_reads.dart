import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Tracks which news/announcement posts each user has read (badge counts).
class NgmyAnnouncementReads {
  static String _localKey(String email) =>
      'ngmy_read_announcements_${email.toLowerCase().trim()}';

  static Set<String> mergeReadSets(Iterable<String> a, Iterable<String> b) {
    return {...a, ...b}.where((e) => e.isNotEmpty).toSet();
  }

  static Future<Set<String>> loadLocal(String email) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return {};
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_localKey(key));
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! List) return {};
      return decoded.map((e) => e.toString()).where((e) => e.isNotEmpty).toSet();
    } catch (_) {
      return {};
    }
  }

  static Future<void> saveLocal(String email, Set<String> ids) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_localKey(key), jsonEncode(ids.toList()));
    } catch (_) {}
  }

  static int unreadCount(Set<String> readIds, Iterable<String> announcementIds) {
    var n = 0;
    for (final id in announcementIds) {
      if (id.isEmpty) continue;
      if (!readIds.contains(id)) n++;
    }
    return n;
  }

  /// Merges cloud read IDs with this device's local cache (cross-device sync).
  static Future<int> unreadCountForEmail(
    String email,
    Iterable<String> cloudReadIds,
    Iterable<String> announcementIds,
  ) async {
    final local = await loadLocal(email);
    return unreadCount(mergeReadSets(cloudReadIds, local), announcementIds);
  }
}
