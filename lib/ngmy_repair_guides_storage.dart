import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_repair_guides_models.dart';
import 'ngmy_repair_guides_seed_cars.dart';

const _indexPrefix = 'ngmy_repair_guides_user_index_v1_';
const _itemPrefix = 'ngmy_repair_guide_user_item_v1_';

String _emailSlug(String email) {
  final e = email.toLowerCase().trim();
  if (e.isEmpty) return 'guest';
  return e.replaceAll(RegExp(r'[^a-z0-9@._+-]'), '_');
}

String _indexKey(String email) => '$_indexPrefix${_emailSlug(email)}';
String _itemKey(String email, String id) => '$_itemPrefix${_emailSlug(email)}_$id';

/// Built-in guides live in memory only — avoids slow/hanging SharedPreferences writes on web.
List<RepairGuide> _builtInGuides() => kRepairGuideSeedGuides();

Future<List<RepairGuide>> _loadUserGuidesFromPrefs(String userEmail) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final ids = prefs.getStringList(_indexKey(userEmail)) ?? const [];
    final guides = <RepairGuide>[];
    for (final id in ids) {
      if (id.startsWith('seed_')) continue;
      final raw = prefs.getString(_itemKey(userEmail, id));
      if (raw == null || raw.isEmpty) continue;
      try {
        final g = repairGuideFromJsonString(raw);
        if (!g.isSeed) guides.add(g);
      } catch (e) {
        debugPrint('[repair_guides] skip bad user item $id: $e');
      }
    }
    return guides;
  } catch (e) {
    debugPrint('[repair_guides] prefs read failed: $e');
    return const [];
  }
}

Future<List<RepairGuide>> loadRepairGuides({required String userEmail}) async {
  final merged = <String, RepairGuide>{
    for (final g in _builtInGuides()) g.id: g,
  };
  final userGuides = await _loadUserGuidesFromPrefs(userEmail);
  for (final g in userGuides) {
    merged[g.id] = g;
  }
  final guides = merged.values.toList();
  guides.sort((a, b) {
    final makeCmp = a.make.compareTo(b.make);
    if (makeCmp != 0) return makeCmp;
    final modelCmp = a.model.compareTo(b.model);
    if (modelCmp != 0) return modelCmp;
    return a.repairTitle.compareTo(b.repairTitle);
  });
  return guides;
}

Future<RepairGuide?> loadRepairGuideById({
  required String userEmail,
  required String id,
}) async {
  for (final g in _builtInGuides()) {
    if (g.id == id) return g;
  }
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_itemKey(userEmail, id));
    if (raw == null || raw.isEmpty) return null;
    return repairGuideFromJsonString(raw);
  } catch (e) {
    debugPrint('[repair_guides] load $id failed: $e');
    return null;
  }
}

Future<bool> upsertRepairGuide({
  required String userEmail,
  required RepairGuide guide,
}) async {
  if (guide.isSeed || guide.id.startsWith('seed_')) return false;
  if (userEmail.trim().isEmpty) return false;
  try {
    final prefs = await SharedPreferences.getInstance();
    final indexKey = _indexKey(userEmail);
    final ids = prefs.getStringList(indexKey)?.toList() ?? <String>[];
    if (!ids.contains(guide.id)) ids.insert(0, guide.id);
    final ok = await prefs.setString(_itemKey(userEmail, guide.id), jsonEncode(guide.toJson()));
    if (ok) await prefs.setStringList(indexKey, ids);
    return ok;
  } catch (e) {
    debugPrint('[repair_guides] save failed: $e');
    return false;
  }
}

Future<bool> deleteRepairGuide({
  required String userEmail,
  required String id,
}) async {
  if (id.startsWith('seed_')) return false;
  try {
    final prefs = await SharedPreferences.getInstance();
    final indexKey = _indexKey(userEmail);
    final ids = prefs.getStringList(indexKey)?.toList() ?? <String>[];
    ids.remove(id);
    await prefs.remove(_itemKey(userEmail, id));
    await prefs.setStringList(indexKey, ids);
    return true;
  } catch (e) {
    debugPrint('[repair_guides] delete failed: $e');
    return false;
  }
}

List<RepairGuide> filterRepairGuides(
  List<RepairGuide> guides, {
  String? categoryId,
  String query = '',
}) {
  final q = query.trim().toLowerCase();
  return guides.where((g) {
    if (categoryId != null && categoryId.isNotEmpty && g.categoryId != categoryId) return false;
    if (q.isEmpty) return true;
    final hay = '${g.make} ${g.model} ${g.year ?? ''} ${g.repairTitle} ${g.summary}'.toLowerCase();
    return hay.contains(q);
  }).toList();
}

Future<void> ngmyRefreshRepairGuideSeeds(String userEmail) async {
  // Built-in guides are always fresh from code — nothing to refresh in prefs.
}
