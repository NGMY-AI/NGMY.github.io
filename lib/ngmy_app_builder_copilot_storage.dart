import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Local Bolt / App Studio AI chat memory — survives app restarts.
class NgmyAppBuilderCopilotMemoryStore {
  static const int maxMessages = 120;

  static String _key(String email, {String? projectId}) {
    final e = email.toLowerCase().trim();
    final pid = (projectId ?? 'new').trim().isEmpty ? 'new' : projectId!.trim();
    return 'ngmy_bolt_chat_${e}_$pid';
  }

  static Future<List<Map<String, String>>> load(String email, {String? projectId}) async {
    if (email.trim().isEmpty) return [];
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(email, projectId: projectId));
      if (raw == null || raw.isEmpty) return [];
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      final out = <Map<String, String>>[];
      for (final item in decoded) {
        if (item is! Map) continue;
        final role = (item['role'] ?? '').toString();
        final text = (item['text'] ?? '').toString().trim();
        if (text.isEmpty || (role != 'user' && role != 'ai')) continue;
        out.add({'role': role, 'text': text});
      }
      return out;
    } catch (e) {
      debugPrint('[bolt memory] load: $e');
      return [];
    }
  }

  static Future<void> save(String email, {String? projectId, required List<Map<String, String>> messages}) async {
    if (email.trim().isEmpty) return;
    try {
      var slice = messages;
      if (slice.length > maxMessages) {
        slice = slice.sublist(slice.length - maxMessages);
      }
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_key(email, projectId: projectId), jsonEncode(slice));
    } catch (e) {
      debugPrint('[bolt memory] save: $e');
    }
  }

  static Future<void> clear(String email, {String? projectId}) async {
    if (email.trim().isEmpty) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_key(email, projectId: projectId));
    } catch (_) {}
  }
}
