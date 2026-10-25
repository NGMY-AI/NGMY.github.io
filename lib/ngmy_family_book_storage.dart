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
      // Book order: pages in the order they were written (ids are creation timestamps).
      ..sort((a, b) {
        final x = int.tryParse(a.id), y = int.tryParse(b.id);
        if (x != null && y != null) return x.compareTo(y);
        return a.updatedAt.compareTo(b.updatedAt);
      });
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

/// How the family book's cover looks. Saved on this device with the book.
class FamilyBookCover {
  const FamilyBookCover({this.style = 'leather', this.title = '', this.subtitle = '', this.emblem = 0, this.silver = false});
  final String style;
  final String title;
  final String subtitle;
  final int emblem;
  final bool silver;

  FamilyBookCover copyWith({String? style, String? title, String? subtitle, int? emblem, bool? silver}) =>
      FamilyBookCover(style: style ?? this.style, title: title ?? this.title, subtitle: subtitle ?? this.subtitle, emblem: emblem ?? this.emblem, silver: silver ?? this.silver);

  Map<String, dynamic> toJson() => {'style': style, 'title': title, 'subtitle': subtitle, 'emblem': emblem, 'silver': silver};

  factory FamilyBookCover.fromJson(Map<String, dynamic> j) => FamilyBookCover(
        style: (j['style'] ?? 'leather').toString(),
        title: (j['title'] ?? '').toString(),
        subtitle: (j['subtitle'] ?? '').toString(),
        emblem: (j['emblem'] as num?)?.toInt() ?? 0,
        silver: j['silver'] == true,
      );
}

String _familyCoverKey(String userEmail, String treeId) => 'ngmy_family_book_cover_v1_${userEmail.toLowerCase().trim()}_$treeId';

Future<FamilyBookCover> loadFamilyBookCover(String userEmail, String treeId) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_familyCoverKey(userEmail, treeId));
    if (raw == null || raw.isEmpty) return const FamilyBookCover();
    final d = jsonDecode(raw);
    return d is Map ? FamilyBookCover.fromJson(Map<String, dynamic>.from(d)) : const FamilyBookCover();
  } catch (_) {
    return const FamilyBookCover();
  }
}

Future<void> saveFamilyBookCover(String userEmail, String treeId, FamilyBookCover cover) async {
  if (userEmail.trim().isEmpty || treeId.isEmpty) return;
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_familyCoverKey(userEmail, treeId), jsonEncode(cover.toJson()));
  } catch (_) {}
}
