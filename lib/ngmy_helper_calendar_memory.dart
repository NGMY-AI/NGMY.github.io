import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NgmyCalendarMemoryEntry {
  final String id;
  final String title;
  final DateTime start;
  final DateTime end;
  final String? notes;
  final String? location;

  const NgmyCalendarMemoryEntry({
    required this.id,
    required this.title,
    required this.start,
    required this.end,
    this.notes,
    this.location,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'start': start.toIso8601String(),
        'end': end.toIso8601String(),
        'notes': notes,
        'location': location,
      };

  factory NgmyCalendarMemoryEntry.fromJson(Map<String, dynamic> json) {
    DateTime start = DateTime.now();
    DateTime end = start.add(const Duration(hours: 1));
    try {
      start = DateTime.parse((json['start'] ?? '').toString()).toLocal();
      end = DateTime.parse((json['end'] ?? '').toString()).toLocal();
    } catch (_) {}
    return NgmyCalendarMemoryEntry(
      id: (json['id'] ?? '').toString(),
      title: (json['title'] ?? 'Event').toString(),
      start: start,
      end: end,
      notes: json['notes']?.toString(),
      location: json['location']?.toString(),
    );
  }

  String get summaryLine {
    final h = start.hour % 12 == 0 ? 12 : start.hour % 12;
    final ampm = start.hour >= 12 ? 'PM' : 'AM';
    final min = start.minute.toString().padLeft(2, '0');
    final when = '${start.month}/${start.day} $h:$min $ampm';
    final loc = location?.trim().isNotEmpty == true ? ' @ ${location!.trim()}' : '';
    return '$title · $when$loc';
  }
}

class NgmyHelperCalendarMemoryStore {
  static const _keyPrefix = 'ngmy_helper_calendar_v1_';
  static const _max = 80;

  static String _key(String email) => '$_keyPrefix${email.toLowerCase().trim()}';

  static Future<List<NgmyCalendarMemoryEntry>> load(String email) async {
    if (email.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final list = jsonDecode(raw);
      if (list is! List) return [];
      return list
          .whereType<Map>()
          .map((m) => NgmyCalendarMemoryEntry.fromJson(Map<String, dynamic>.from(m)))
          .toList()
        ..sort((a, b) => a.start.compareTo(b.start));
    } catch (e) {
      debugPrint('[calendar-memory] load: $e');
      return [];
    }
  }

  static Future<void> add(String email, NgmyCalendarMemoryEntry entry) async {
    final all = await load(email);
    all.removeWhere((e) => e.id == entry.id);
    all.add(entry);
    all.sort((a, b) => a.start.compareTo(b.start));
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(all.take(_max).map((e) => e.toJson()).toList()));
  }

  static List<NgmyCalendarMemoryEntry> upcoming(List<NgmyCalendarMemoryEntry> all, {DateTime? now, int days = 14}) {
    final anchor = (now ?? DateTime.now()).toLocal();
    final end = anchor.add(Duration(days: days));
    return all.where((e) => !e.start.isBefore(anchor.subtract(const Duration(hours: 1))) && !e.start.isAfter(end)).toList();
  }

  static String directoryForAi(List<NgmyCalendarMemoryEntry> entries, {DateTime? now}) {
    final up = upcoming(entries, now: now);
    if (up.isEmpty) {
      return 'NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar.';
    }
    final buf = StringBuffer('NGMY CALENDAR MEMORY (upcoming — use for "what is on my calendar"):\n');
    for (final e in up.take(20)) {
      buf.writeln('- ${e.summaryLine}');
      if (e.notes != null && e.notes!.trim().isNotEmpty) buf.writeln('  Notes: ${e.notes}');
    }
    return buf.toString().trim();
  }
}
