import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

const String kNgmyBusinessCardsKey = 'ngmy_business_cards_v1';

/// Bumped when studio cards change so Home can refresh pinned snapshots.
final ValueNotifier<int> ngmyHomeCardsRevision = ValueNotifier<int>(0);

void ngmyBumpHomeCardsRevision() => ngmyHomeCardsRevision.value++;

String _cardsKeyForUser(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  if (e.isEmpty) return kNgmyBusinessCardsKey;
  return '${kNgmyBusinessCardsKey}_${e.hashCode.abs()}';
}

Future<List<Map<String, dynamic>>> loadNgmyBusinessCards({String userEmail = ''}) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_cardsKeyForUser(userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .where((e) => (e['id'] ?? '').toString().isNotEmpty)
        .toList()
      ..sort((a, b) {
        final ad = DateTime.tryParse((a['updatedAt'] ?? a['createdAt'] ?? '').toString()) ??
            DateTime.fromMillisecondsSinceEpoch(0);
        final bd = DateTime.tryParse((b['updatedAt'] ?? b['createdAt'] ?? '').toString()) ??
            DateTime.fromMillisecondsSinceEpoch(0);
        return bd.compareTo(ad);
      });
  } catch (_) {
    return [];
  }
}

Future<void> persistNgmyBusinessCards(List<Map<String, dynamic>> entries, {String userEmail = ''}) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_cardsKeyForUser(userEmail), jsonEncode(entries));
}

Future<void> saveNgmyBusinessCard(Map<String, dynamic> entry, {String userEmail = ''}) async {
  final list = await loadNgmyBusinessCards(userEmail: userEmail);
  final id = (entry['id'] ?? '').toString();
  list.removeWhere((e) => (e['id'] ?? '').toString() == id);
  list.insert(0, entry);
  await persistNgmyBusinessCards(list, userEmail: userEmail);
  ngmyBumpHomeCardsRevision();
}

Future<void> deleteNgmyBusinessCard(String id, {String userEmail = ''}) async {
  final list = await loadNgmyBusinessCards(userEmail: userEmail);
  list.removeWhere((e) => (e['id'] ?? '').toString() == id);
  await persistNgmyBusinessCards(list, userEmail: userEmail);
  ngmyBumpHomeCardsRevision();
}
