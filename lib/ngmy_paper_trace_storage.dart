import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const _kStorageKey = 'ngmy_paper_trace_v1';

String _paperTraceKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmyPaperTraceSession {
  const NgmyPaperTraceSession({
    required this.id,
    required this.title,
    required this.imageBase64,
    required this.createdAt,
    this.sketchBase64,
  });

  final String id;
  final String title;
  final String imageBase64;
  final String? sketchBase64;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'imageBase64': imageBase64,
        'sketchBase64': sketchBase64,
        'createdAt': createdAt.toIso8601String(),
      };

  factory NgmyPaperTraceSession.fromJson(Map<String, dynamic> json) => NgmyPaperTraceSession(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? 'Trace').toString(),
        imageBase64: (json['imageBase64'] ?? '').toString(),
        sketchBase64: json['sketchBase64']?.toString(),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyPaperTraceSession>> loadNgmyPaperTraceSessions({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_paperTraceKey(userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((m) => NgmyPaperTraceSession.fromJson(Map<String, dynamic>.from(m))).toList()
      ..sort((a, b) => b.createdAt.compareTo(a.createdAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveNgmyPaperTraceSessions({required String userEmail, required List<NgmyPaperTraceSession> items}) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_paperTraceKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyPaperTraceCount({required String userEmail}) async {
  final list = await loadNgmyPaperTraceSessions(userEmail: userEmail);
  return list.length;
}

Future<void> addNgmyPaperTraceSession({
  required String userEmail,
  required String title,
  required String imageBase64,
  String? sketchBase64,
}) async {
  final list = await loadNgmyPaperTraceSessions(userEmail: userEmail);
  list.insert(
    0,
    NgmyPaperTraceSession(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      title: title.trim().isEmpty ? 'Paper trace' : title.trim(),
      imageBase64: imageBase64,
      sketchBase64: sketchBase64,
      createdAt: DateTime.now(),
    ),
  );
  await saveNgmyPaperTraceSessions(userEmail: userEmail, items: list);
}

Future<void> deleteNgmyPaperTraceSession({required String userEmail, required String id}) async {
  final list = await loadNgmyPaperTraceSessions(userEmail: userEmail);
  list.removeWhere((e) => e.id == id);
  await saveNgmyPaperTraceSessions(userEmail: userEmail, items: list);
}
