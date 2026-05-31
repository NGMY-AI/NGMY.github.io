import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Local AI chat memory — per user, auto-pruned after 30 days.
class NgmyAiMemoryStore {
  static const int retentionDays = 30;
  static const int maxStoredMessages = 120;

  static String _storageKey(String email) =>
      'ngmy_ai_memory_${email.toLowerCase().trim()}';

  static Future<List<Map<String, dynamic>>> load(String email) async {
    final key = email.trim();
    if (key.isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_storageKey(key));
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
      if (kept.length != decoded.length) {
        await _persist(key, kept);
      }
      return kept;
    } catch (_) {
      return [];
    }
  }

  static Future<void> saveAll(String email, List<Map<String, dynamic>> messages) async {
    final key = email.trim();
    if (key.isEmpty) return;
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
    await _persist(key, cleaned);
  }

  static Future<void> append(String email, {required String role, required String text}) async {
    final key = email.trim();
    if (key.isEmpty || text.trim().isEmpty) return;
    final list = await load(key);
    list.add({
      'role': role,
      'text': text.trim(),
      'at': DateTime.now().toUtc().toIso8601String(),
    });
    await saveAll(key, list);
  }

  static Future<void> _persist(String email, List<Map<String, dynamic>> list) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_storageKey(email), jsonEncode(list));
  }

  /// Compact transcript for Gemini context window.
  static String transcriptForPrompt(List<Map<String, dynamic>> memory, {int maxMessages = 24}) {
    if (memory.isEmpty) return '';
    final slice = memory.length <= maxMessages ? memory : memory.sublist(memory.length - maxMessages);
    final buf = StringBuffer('Recent conversation memory (local, last ${slice.length} messages):\n');
    for (final m in slice) {
      final who = m['role'] == 'user' ? 'User' : 'NGMY AI';
      buf.writeln('$who: ${m['text']}');
    }
    return buf.toString();
  }
}

bool ngmyIsNgmyBoss({required bool isAdmin}) => isAdmin;
