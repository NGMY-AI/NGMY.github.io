import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Tracks which news/announcement posts each user has opened (for badge counts).
class NgmyAnnouncementReads {
  static String _key(String email) =>
      'ngmy_read_announcements_${email.toLowerCase().trim()}';

  static Future<Set<String>> load(String email) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return {};
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(key));
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! List) return {};
      return decoded.map((e) => e.toString()).where((e) => e.isNotEmpty).toSet();
    } catch (_) {
      return {};
    }
  }

  static Future<void> save(String email, Set<String> ids) async {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_key(key), jsonEncode(ids.toList()));
    } catch (_) {}
  }

  static Future<void> markAllRead(String email, Iterable<String> announcementIds) async {
    final read = await load(email);
    read.addAll(announcementIds.where((id) => id.isNotEmpty));
    await save(email, read);
  }

  static Future<int> unreadCount(String email, Iterable<String> announcementIds) async {
    final read = await load(email);
    var n = 0;
    for (final id in announcementIds) {
      if (id.isEmpty) continue;
      if (!read.contains(id)) n++;
    }
    return n;
  }
}
