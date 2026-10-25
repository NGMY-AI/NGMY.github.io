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

const List<String> kCoverFrames = ['double', 'single', 'corners', 'none'];
const List<String> kCoverTextures = ['leather', 'linen', 'plain', 'stars', 'rays'];
const List<String> kCoverPositions = ['top', 'middle', 'bottom'];
const Map<String, int> kCoverFoils = {'gold': 0xFFE8C46A, 'silver': 0xFFE5E7EB, 'rose': 0xFFF0A8B8, 'white': 0xFFFFFFFF, 'copper': 0xFFE08A4C, 'black': 0xFF111827};

/// How the family book's cover looks. Saved on this device with the book.
class FamilyBookCover {
  const FamilyBookCover({
    this.style = 'leather',
    this.title = '',
    this.subtitle = '',
    this.emblem = 0,
    this.foil = 'gold',
    this.titleSize = 25,
    this.position = 'middle',
    this.frame = 'double',
    this.texture = 'leather',
    this.author = '',
    this.ribbon = true,
  });
  final String style;
  final String title;
  final String subtitle;
  final int emblem;
  final String foil;
  final double titleSize;
  final String position;
  final String frame;
  final String texture;
  final String author;
  final bool ribbon;

  bool get silver => foil == 'silver';

  FamilyBookCover copyWith({String? style, String? title, String? subtitle, int? emblem, String? foil, double? titleSize, String? position, String? frame, String? texture, String? author, bool? ribbon}) => FamilyBookCover(
        style: style ?? this.style,
        title: title ?? this.title,
        subtitle: subtitle ?? this.subtitle,
        emblem: emblem ?? this.emblem,
        foil: foil ?? this.foil,
        titleSize: titleSize ?? this.titleSize,
        position: position ?? this.position,
        frame: frame ?? this.frame,
        texture: texture ?? this.texture,
        author: author ?? this.author,
        ribbon: ribbon ?? this.ribbon,
      );

  Map<String, dynamic> toJson() => {'style': style, 'title': title, 'subtitle': subtitle, 'emblem': emblem, 'foil': foil, 'titleSize': titleSize, 'position': position, 'frame': frame, 'texture': texture, 'author': author, 'ribbon': ribbon};

  factory FamilyBookCover.fromJson(Map<String, dynamic> j) => FamilyBookCover(
        style: (j['style'] ?? 'leather').toString(),
        title: (j['title'] ?? '').toString(),
        subtitle: (j['subtitle'] ?? '').toString(),
        emblem: (j['emblem'] as num?)?.toInt() ?? 0,
        foil: kCoverFoils.containsKey(j['foil']) ? j['foil'] as String : (j['silver'] == true ? 'silver' : 'gold'),
        titleSize: ((j['titleSize'] as num?)?.toDouble() ?? 25).clamp(18.0, 36.0),
        position: kCoverPositions.contains(j['position']) ? j['position'] as String : 'middle',
        frame: kCoverFrames.contains(j['frame']) ? j['frame'] as String : 'double',
        texture: kCoverTextures.contains(j['texture']) ? j['texture'] as String : 'leather',
        author: (j['author'] ?? '').toString(),
        ribbon: j['ribbon'] != false,
      );

  /// Applies the settings an AI suggested (only the valid ones; anything else is ignored).
  FamilyBookCover applyAi(Map<String, dynamic> m, {required List<String> styleIds, int emblemCount = 12}) {
    String? pick(String key, Iterable<String> allowed) {
      final v = m[key]?.toString().trim().toLowerCase();
      return v != null && allowed.contains(v) ? v : null;
    }

    final em = (m['emblem'] as num?)?.toInt();
    final size = (m['titleSize'] as num?)?.toDouble();
    return copyWith(
      style: pick('style', styleIds),
      title: m['title'] is String && (m['title'] as String).trim().isNotEmpty ? (m['title'] as String).trim() : null,
      subtitle: m['subtitle'] is String ? (m['subtitle'] as String).trim() : null,
      emblem: em != null && em >= 0 && em < emblemCount ? em : null,
      foil: pick('foil', kCoverFoils.keys),
      titleSize: size?.clamp(18.0, 36.0),
      position: pick('position', kCoverPositions),
      frame: pick('frame', kCoverFrames),
      texture: pick('texture', kCoverTextures),
      author: m['author'] is String ? (m['author'] as String).trim() : null,
      ribbon: m['ribbon'] is bool ? m['ribbon'] as bool : null,
    );
  }
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

// ── The library: up to six books per tree ────────────────────────────────────

/// A family can keep this many books on its shelf.
const int kFamilyBookMax = 6;

String _familySlotsKey(String userEmail, String treeId) => 'ngmy_family_book_slots_v1_${userEmail.toLowerCase().trim()}_$treeId';

/// The place a book's pages and cover are kept. The first book keeps the tree's own id, so books written
/// before the library existed (and the tree backup) carry on working.
String familyBookStorageId(String treeId, String slot) => slot == 'main' ? treeId : '$treeId~$slot';

/// The books on the shelf, oldest first. A book written before the library existed is found and kept as the first one.
Future<List<String>> loadFamilyBookSlots(String userEmail, String treeId) async {
  if (userEmail.trim().isEmpty || treeId.isEmpty) return [];
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getStringList(_familySlotsKey(userEmail, treeId));
    if (raw != null) return List<String>.of(raw);
    final hasOld = (await loadFamilyBookEntries(userEmail, treeId)).isNotEmpty || prefs.containsKey(_familyCoverKey(userEmail, treeId));
    final slots = hasOld ? <String>['main'] : <String>[];
    await prefs.setStringList(_familySlotsKey(userEmail, treeId), slots);
    return slots;
  } catch (_) {
    return [];
  }
}

/// Puts a new book on the shelf. Returns its slot, or null when the shelf already holds [kFamilyBookMax].
Future<String?> addFamilyBookSlot(String userEmail, String treeId) async {
  final slots = await loadFamilyBookSlots(userEmail, treeId);
  if (slots.length >= kFamilyBookMax) return null;
  final slot = slots.contains('main') ? '${DateTime.now().microsecondsSinceEpoch}_${slots.length}' : 'main';
  slots.add(slot);
  final prefs = await SharedPreferences.getInstance();
  await prefs.setStringList(_familySlotsKey(userEmail, treeId), slots);
  return slot;
}

/// Takes a book off the shelf and deletes its pages and cover.
Future<void> removeFamilyBookSlot(String userEmail, String treeId, String slot) async {
  final slots = await loadFamilyBookSlots(userEmail, treeId);
  slots.remove(slot);
  final prefs = await SharedPreferences.getInstance();
  await prefs.setStringList(_familySlotsKey(userEmail, treeId), slots);
  final id = familyBookStorageId(treeId, slot);
  await prefs.remove(_familyBookKey(userEmail, id));
  await prefs.remove(_familyCoverKey(userEmail, id));
}
