import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

/// Long-term local storage for Communicate companion chats (months on same device).
class NgmyCommunicateMemoryStore {
  static const int retentionDays = 365;
  static const int maxStoredMessages = 500;

  static String _chatKey(String email, String profileId) =>
      'ngmy_communicate_chat_${email.toLowerCase().trim()}_${profileId.trim()}';

  static Future<List<Map<String, dynamic>>> load(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_chatKey(email, profileId));
    if (raw == null || raw.isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final now = DateTime.now();
      final cutoff = now.subtract(const Duration(days: retentionDays));
      final kept = <Map<String, dynamic>>[];
      for (final item in decoded) {
        if (item is! Map) continue;
        final map = Map<String, dynamic>.from(item);
        final at = DateTime.tryParse((map['at'] ?? '').toString());
        if (at != null && at.isBefore(cutoff)) continue;
        final role = (map['role'] ?? '').toString();
        final text = (map['text'] ?? '').toString().trim();
        if (text.isEmpty || (role != 'user' && role != 'ai')) continue;
        kept.add({'role': role, 'text': text, 'at': (at ?? now).toUtc().toIso8601String()});
      }
      if (kept.length != decoded.length) await _persist(email, profileId, kept);
      return kept;
    } catch (_) {
      return [];
    }
  }

  static Future<void> append(String email, String profileId, {required String role, required String text}) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty || text.trim().isEmpty) return;
    final list = await load(email, profileId);
    list.add({
      'role': role,
      'text': text.trim(),
      'at': DateTime.now().toUtc().toIso8601String(),
    });
    await saveAll(email, profileId, list);
  }

  static Future<void> saveAll(String email, String profileId, List<Map<String, dynamic>> messages) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return;
    final now = DateTime.now();
    final cutoff = now.subtract(const Duration(days: retentionDays));
    final cleaned = <Map<String, dynamic>>[];
    for (final m in messages) {
      final role = (m['role'] ?? '').toString();
      final text = (m['text'] ?? '').toString().trim();
      if (text.isEmpty) continue;
      final at = DateTime.tryParse((m['at'] ?? '').toString()) ?? now;
      if (at.isBefore(cutoff)) continue;
      cleaned.add({'role': role, 'text': text, 'at': at.toUtc().toIso8601String()});
    }
    while (cleaned.length > maxStoredMessages) {
      cleaned.removeAt(0);
    }
    await _persist(email, profileId, cleaned);
  }

  static Future<void> _persist(String email, String profileId, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_chatKey(email, profileId), jsonEncode(list));
  }

  static String transcriptForPrompt(List<Map<String, dynamic>> memory, {int maxMessages = 40}) {
    if (memory.isEmpty) return '';
    final slice = memory.length <= maxMessages ? memory : memory.sublist(memory.length - maxMessages);
    final buf = StringBuffer('Your conversation history with this person (remember everything):\n');
    for (final m in slice) {
      final who = m['role'] == 'user' ? 'Them' : 'You';
      buf.writeln('$who: ${m['text']}');
    }
    return buf.toString();
  }
}

/// Rolling talk-time meter — accumulates across sessions until user pays.
class NgmyCommunicateTimeTracker {
  static String _key(String email) => 'ngmy_communicate_used_sec_${email.toLowerCase().trim()}';

  static Future<int> getUsedSeconds(String email) async {
    if (email.trim().isEmpty) return 0;
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(_key(email)) ?? 0;
  }

  static Future<void> addSeconds(String email, int seconds) async {
    if (email.trim().isEmpty || seconds <= 0) return;
    final prefs = await SharedPreferences.getInstance();
    final cur = prefs.getInt(_key(email)) ?? 0;
    await prefs.setInt(_key(email), cur + seconds);
  }

  static Future<void> resetAfterPayment(String email) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_key(email), 0);
  }
}

/// Offline avatar cache — companion photos stay on device when Wi‑Fi drops.
class NgmyCommunicateAvatarCache {
  static String _key(String profileId) => 'ngmy_comm_avatar_${profileId.trim()}';

  static Future<Uint8List?> loadBytes(String profileId) async {
    if (profileId.trim().isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(profileId));
    if (raw == null || raw.isEmpty) return null;
    try {
      return base64Decode(raw);
    } catch (_) {
      return null;
    }
  }

  static Future<void> saveBytes(String profileId, Uint8List bytes) async {
    if (profileId.trim().isEmpty || bytes.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(profileId), base64Encode(bytes));
  }

  static Future<void> saveFromDataUrl(String profileId, String dataUrl) async {
    final url = dataUrl.trim();
    if (!url.startsWith('data:image') || profileId.trim().isEmpty) return;
    try {
      final bytes = base64Decode(url.split(',').last);
      await saveBytes(profileId, bytes);
    } catch (_) {}
  }

  static Future<void> ensureCached(String profileId, String avatarUrl) async {
    if (profileId.trim().isEmpty) return;
    final existing = await loadBytes(profileId);
    if (existing != null && existing.isNotEmpty) return;

    final url = avatarUrl.trim();
    if (url.startsWith('data:image')) {
      await saveFromDataUrl(profileId, url);
      return;
    }
    if (!url.startsWith('http')) return;
    try {
      final resp = await http.get(Uri.parse(url)).timeout(const Duration(seconds: 12));
      if (resp.statusCode == 200 && resp.bodyBytes.isNotEmpty) {
        await saveBytes(profileId, resp.bodyBytes);
      }
    } catch (_) {}
  }

  static Future<void> cacheAllProfiles(Iterable<dynamic> rawProfiles) async {
    for (final e in rawProfiles) {
      if (e is! Map) continue;
      final id = (e['id'] ?? '').toString().trim();
      final url = (e['avatarUrl'] ?? e['avatar_url'] ?? '').toString().trim();
      if (id.isEmpty || url.isEmpty) continue;
      await ensureCached(id, url);
    }
  }
}
