import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// A call or voicemail NGMY learned from a screenshot, paste, or user input.
class NgmyCallMemoryEntry {
  final String id;
  final DateTime when;
  final String? phone;
  final String? name;
  final String? note;
  final String? transcript;
  final String source;

  const NgmyCallMemoryEntry({
    required this.id,
    required this.when,
    this.phone,
    this.name,
    this.note,
    this.transcript,
    this.source = 'user',
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'when': when.toIso8601String(),
        'phone': phone,
        'name': name,
        'note': note,
        'transcript': transcript,
        'source': source,
      };

  factory NgmyCallMemoryEntry.fromJson(Map<String, dynamic> json) {
    DateTime when = DateTime.now();
    try {
      when = DateTime.parse((json['when'] ?? '').toString()).toLocal();
    } catch (_) {}
    return NgmyCallMemoryEntry(
      id: (json['id'] ?? '').toString(),
      when: when,
      phone: json['phone']?.toString(),
      name: json['name']?.toString(),
      note: json['note']?.toString(),
      transcript: json['transcript']?.toString(),
      source: (json['source'] ?? 'user').toString(),
    );
  }

  String get summaryLine {
    final parts = <String>[];
    if (name != null && name!.trim().isNotEmpty) parts.add(name!.trim());
    if (phone != null && phone!.trim().isNotEmpty) parts.add(phone!.trim());
    final time = formatWhen(when);
    parts.add(time);
    if (note != null && note!.trim().isNotEmpty) parts.add(note!.trim());
    return parts.join(' · ');
  }

  static String formatWhen(DateTime dt) {
    final h = dt.hour % 12 == 0 ? 12 : dt.hour % 12;
    final ampm = dt.hour >= 12 ? 'PM' : 'AM';
    final min = dt.minute.toString().padLeft(2, '0');
    return '${dt.month}/${dt.day} $h:$min $ampm';
  }
}

class NgmyCallMemoryStore {
  static const _keyPrefix = 'ngmy_call_memory_v1_';
  static const _maxEntries = 120;

  static String _key(String email) => '$_keyPrefix${email.toLowerCase().trim()}';

  static Future<List<NgmyCallMemoryEntry>> load(String email) async {
    if (email.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final list = jsonDecode(raw);
      if (list is! List) return [];
      return list
          .whereType<Map>()
          .map((m) => NgmyCallMemoryEntry.fromJson(Map<String, dynamic>.from(m)))
          .toList()
        ..sort((a, b) => b.when.compareTo(a.when));
    } catch (e) {
      debugPrint('[call-memory] load: $e');
      return [];
    }
  }

  static Future<void> _save(String email, List<NgmyCallMemoryEntry> entries) async {
    final prefs = await SharedPreferences.getInstance();
    final trimmed = entries.take(_maxEntries).toList();
    await prefs.setString(_key(email), jsonEncode(trimmed.map((e) => e.toJson()).toList()));
  }

  static Future<void> addAll(String email, List<NgmyCallMemoryEntry> incoming) async {
    if (incoming.isEmpty) return;
    final existing = await load(email);
    final byId = <String, NgmyCallMemoryEntry>{};
    for (final e in existing) {
      byId[e.id] = e;
    }
    for (final e in incoming) {
      byId[e.id] = e;
    }
    final merged = byId.values.toList()..sort((a, b) => b.when.compareTo(a.when));
    await _save(email, merged);
  }

  static Future<List<NgmyCallMemoryEntry>> searchAround(
    String email, {
    required DateTime anchor,
    Duration window = const Duration(hours: 2),
  }) async {
    final all = await load(email);
    final start = anchor.subtract(window);
    final end = anchor.add(window);
    return all.where((e) => !e.when.isBefore(start) && !e.when.isAfter(end)).toList();
  }

  static String directoryForAi(List<NgmyCallMemoryEntry> entries, {int max = 25}) {
    if (entries.isEmpty) {
      return 'NGMY CALL MEMORY: empty — user must upload a call-log screenshot or paste voicemail text once (⚡ Superpowers) before "who called" questions work.';
    }
    final buf = StringBuffer('NGMY CALL MEMORY (calls/voicemails you learned — use for "who called" questions):\n');
    for (final e in entries.take(max)) {
      buf.writeln('- ${e.summaryLine}');
      if (e.transcript != null && e.transcript!.trim().isNotEmpty) {
        final t = e.transcript!.trim();
        buf.writeln('  Voicemail/text: ${t.length > 180 ? '${t.substring(0, 177)}…' : t}');
      }
    }
    if (entries.length > max) buf.writeln('… and ${entries.length - max} more');
    return buf.toString().trim();
  }
}

/// Parse "2am today", "2:00 AM", "at 2 in the morning" from a user question.
DateTime? ngmyParseCallQueryTime(String text, {DateTime? now}) {
  final anchor = (now ?? DateTime.now()).toLocal();
  final lower = text.toLowerCase();
  var day = DateTime(anchor.year, anchor.month, anchor.day);
  if (lower.contains('yesterday')) {
    day = day.subtract(const Duration(days: 1));
  } else if (!lower.contains('today') && lower.contains('last night')) {
    day = day.subtract(const Duration(days: 1));
  }

  final atTime = RegExp(r'\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b').firstMatch(lower);
  if (atTime == null) return null;
  var hour = int.tryParse(atTime.group(1) ?? '') ?? 0;
  final minute = int.tryParse(atTime.group(2) ?? '') ?? 0;
  final ampm = atTime.group(3);
  if (ampm == 'pm' && hour < 12) hour += 12;
  if (ampm == 'am' && hour == 12) hour = 0;
  if (ampm == null && hour <= 7 && (lower.contains('am') || lower.contains('morning') || lower.contains('night'))) {
    if (lower.contains('pm') || lower.contains('afternoon') || lower.contains('evening')) {
      if (hour < 12) hour += 12;
    }
  }
  if (ampm == null && lower.contains('pm')) {
    if (hour < 12) hour += 12;
  }
  return DateTime(day.year, day.month, day.day, hour, minute);
}

bool ngmyUserAsksWhoCalled(String text) {
  final t = text.toLowerCase();
  return RegExp(r'\b(who called|missed call|phone call|voicemail|left a message|called me)\b').hasMatch(t);
}

bool ngmyUserWantsMorningBrief(String text) {
  final t = text.toLowerCase();
  return RegExp(r'\b(morning brief|daily brief|brief me|ngmy brief|start my day)\b').hasMatch(t);
}
