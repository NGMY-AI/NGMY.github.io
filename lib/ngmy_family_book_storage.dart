import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Family Book — stories & notes about the family (local device only, never Supabase).
class FamilyBookEntry {
  const FamilyBookEntry({
    required this.id,
    required this.title,
    required this.body,
    required this.updatedAt,
  });

  final String id;
  final String title;
  final String body;
  final DateTime updatedAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'body': body,
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };

  factory FamilyBookEntry.fromJson(Map<String, dynamic> json) {
    return FamilyBookEntry(
      id: (json['id'] ?? '').toString(),
      title: (json['title'] ?? '').toString(),
      body: (json['body'] ?? '').toString(),
      updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
    );
  }

  FamilyBookEntry copyWith({String? title, String? body, DateTime? updatedAt}) {
    return FamilyBookEntry(
      id: id,
      title: title ?? this.title,
      body: body ?? this.body,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

String _familyBookKey(String userEmail, String treeId) =>
    'ngmy_family_book_v1_${userEmail.toLowerCase().trim()}_$treeId';

Future<List<FamilyBookEntry>> loadFamilyBookEntries(String userEmail, String treeId) async {
  if (userEmail.trim().isEmpty || treeId.isEmpty) return [];
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_familyBookKey(userEmail, treeId));
    if (raw == null || raw.isEmpty) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => FamilyBookEntry.fromJson(Map<String, dynamic>.from(e)))
        .where((e) => e.id.isNotEmpty)
        .toList()
      ..sort((a, b) => b.updatedAt.compareTo(a.updatedAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveFamilyBookEntries(String userEmail, String treeId, List<FamilyBookEntry> entries) async {
  if (userEmail.trim().isEmpty || treeId.isEmpty) return;
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _familyBookKey(userEmail, treeId),
    jsonEncode(entries.map((e) => e.toJson()).toList()),
  );
}

Future<void> upsertFamilyBookEntry(String userEmail, String treeId, FamilyBookEntry entry) async {
  final list = await loadFamilyBookEntries(userEmail, treeId);
  final idx = list.indexWhere((e) => e.id == entry.id);
  if (idx == -1) {
    list.insert(0, entry);
  } else {
    list[idx] = entry;
  }
  await saveFamilyBookEntries(userEmail, treeId, list);
}

Future<void> deleteFamilyBookEntry(String userEmail, String treeId, String entryId) async {
  final list = await loadFamilyBookEntries(userEmail, treeId);
  list.removeWhere((e) => e.id == entryId);
  await saveFamilyBookEntries(userEmail, treeId, list);
}
