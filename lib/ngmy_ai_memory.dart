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

  /// Compact transcript for Gemini context window (skips old API-key error loops).
  static String transcriptForPrompt(List<Map<String, dynamic>> memory, {int maxMessages = 24}) {
    if (memory.isEmpty) return '';
    final filtered = memory.where((m) {
      final text = (m['text'] ?? '').toString().toLowerCase();
      if (text.isEmpty) return false;
      const skip = [
        'api key',
        'gemini connection',
        'google ai studio',
        'supabase config',
        'could not reach gemini',
        'ngmy helper is not connected',
        'ai proxy not deployed',
        'save global settings',
      ];
      return !skip.any(text.contains);
    }).toList();
    if (filtered.isEmpty) return '';
    final slice = filtered.length <= maxMessages ? filtered : filtered.sublist(filtered.length - maxMessages);
    final buf = StringBuffer('Recent conversation memory (local, last ${slice.length} messages):\n');
    for (final m in slice) {
      final who = m['role'] == 'user' ? 'User' : 'Assistant';
      buf.writeln('$who: ${m['text']}');
    }
    return buf.toString();
  }

  /// Strip branding prefixes models sometimes add at the start of a reply.
  static String sanitizeHelperReply(String text) {
    var t = text.trim();
    if (t.isEmpty) return text.trim();
    final patterns = <RegExp>[
      RegExp(r'^ngmy\s*ai\s*[:\-]?\s*', caseSensitive: false),
      RegExp(r'^as\s+ngmy\s*ai\s*[,.\-]?\s*', caseSensitive: false),
      RegExp(r"^i'?m\s+ngmy\s*ai\s*[,.\-]?\s*", caseSensitive: false),
      RegExp(r"^hello!?\s+i'?m\s+ngmy\s*ai\s*[,.\-]?\s*", caseSensitive: false),
      RegExp(r'^ngmy\s*helper\s*[:\-]?\s*', caseSensitive: false),
    ];
    var changed = true;
    while (changed) {
      changed = false;
      for (final p in patterns) {
        final next = t.replaceFirst(p, '').trim();
        if (next != t) {
          t = next;
          changed = true;
        }
      }
    }
    return t.isEmpty ? text.trim() : t;
  }
}

bool ngmyIsNgmyBoss({required bool isAdmin}) => isAdmin;
