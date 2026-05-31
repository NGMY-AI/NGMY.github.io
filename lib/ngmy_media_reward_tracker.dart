import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Tracks when a user opened an external link from a media post (for watch-to-earn).
class NgmyMediaRewardTracker {
  static String _key(String postId, String email) => 'ngmy_media_watch_${postId}_${email.toLowerCase().trim()}';

  static Future<void> startSession(String postId, String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(postId, userEmail),
      jsonEncode({'startedAt': DateTime.now().toUtc().toIso8601String()}),
    );
  }

  static Future<DateTime?> sessionStart(String postId, String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(postId, userEmail));
    if (raw == null || raw.isEmpty) return null;
    try {
      final map = jsonDecode(raw);
      if (map is Map) {
        return DateTime.tryParse((map['startedAt'] ?? '').toString())?.toLocal();
      }
    } catch (_) {}
    return null;
  }

  static Future<void> clearSession(String postId, String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(postId, userEmail));
  }

  static Future<int?> elapsedSeconds(String postId, String userEmail) async {
    final start = await sessionStart(postId, userEmail);
    if (start == null) return null;
    return DateTime.now().difference(start).inSeconds;
  }
}
