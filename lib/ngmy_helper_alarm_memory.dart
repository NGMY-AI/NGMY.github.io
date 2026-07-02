import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class NgmyHelperAlarmEntry {
  const NgmyHelperAlarmEntry({
    required this.id,
    required this.title,
    required this.when,
    this.notes,
  });

  final String id;
  final String title;
  final DateTime when;
  final String? notes;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'when': when.toIso8601String(),
        'notes': notes,
      };

  factory NgmyHelperAlarmEntry.fromJson(Map<String, dynamic> json) {
    DateTime when = DateTime.now();
    try {
      when = DateTime.parse((json['when'] ?? '').toString()).toLocal();
    } catch (_) {}
    return NgmyHelperAlarmEntry(
      id: (json['id'] ?? '').toString(),
      title: (json['title'] ?? 'Alarm').toString(),
      when: when,
      notes: json['notes']?.toString(),
    );
  }

  String get summaryLine {
    final h = when.hour % 12 == 0 ? 12 : when.hour % 12;
    final ampm = when.hour >= 12 ? 'PM' : 'AM';
    final min = when.minute.toString().padLeft(2, '0');
    return '$title · ${when.month}/${when.day} $h:$min $ampm';
  }
}

class NgmyHelperAlarmMemoryStore {
  static const _keyPrefix = 'ngmy_helper_alarm_v1_';
  static const _max = 40;

  static String _key(String email) => '$_keyPrefix${email.toLowerCase().trim()}';

  static Future<List<NgmyHelperAlarmEntry>> load(String email) async {
    if (email.trim().isEmpty) return [];
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final list = jsonDecode(raw);
      if (list is! List) return [];
      return list
          .whereType<Map>()
          .map((m) => NgmyHelperAlarmEntry.fromJson(Map<String, dynamic>.from(m)))
          .toList()
        ..sort((a, b) => a.when.compareTo(b.when));
    } catch (e) {
      debugPrint('[alarm-memory] load: $e');
      return [];
    }
  }

  static Future<void> remove(String email, String id) async {
    final all = await load(email);
    all.removeWhere((e) => e.id == id);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(all.map((e) => e.toJson()).toList()));
  }

  static Future<void> add(String email, NgmyHelperAlarmEntry entry) async {
    final all = await load(email);
    all.removeWhere((e) => e.id == entry.id);
    all.add(entry);
    all.sort((a, b) => a.when.compareTo(b.when));
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(all.take(_max).map((e) => e.toJson()).toList()));
  }

  static List<NgmyHelperAlarmEntry> upcoming(List<NgmyHelperAlarmEntry> all, {DateTime? now}) {
    final anchor = (now ?? DateTime.now()).toLocal();
    return all.where((e) => e.when.isAfter(anchor.subtract(const Duration(minutes: 2)))).toList();
  }

  static String directoryForAi(List<NgmyHelperAlarmEntry> entries, {DateTime? now}) {
    final up = upcoming(entries, now: now);
    if (up.isEmpty) {
      return 'NGMY ALARM MEMORY: no upcoming wake alarms saved yet.';
    }
    final buf = StringBuffer('NGMY ALARM MEMORY (upcoming wake reminders):\n');
    for (final e in up.take(15)) {
      buf.writeln('- ${e.summaryLine}');
    }
    return buf.toString().trim();
  }
}
