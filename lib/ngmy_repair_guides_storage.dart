import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_repair_guides_models.dart';

const _indexPrefix = 'ngmy_repair_guides_index_v1_';
const _itemPrefix = 'ngmy_repair_guide_item_v1_';
const _seedLoadedPrefix = 'ngmy_repair_guides_seed_loaded_v1_';

String _emailSlug(String email) {
  final e = email.toLowerCase().trim();
  if (e.isEmpty) return 'guest';
  return e.replaceAll(RegExp(r'[^a-z0-9@._+-]'), '_');
}

String _indexKey(String email) => '$_indexPrefix${_emailSlug(email)}';
String _itemKey(String email, String id) => '$_itemPrefix${_emailSlug(email)}_$id';
String _seedKey(String email) => '$_seedLoadedPrefix${_emailSlug(email)}';

Future<void> _ensureSeedGuidesLoaded(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final seedKey = _seedKey(userEmail);
  if (prefs.getBool(seedKey) == true) return;

  final indexKey = _indexKey(userEmail);
  final existing = prefs.getStringList(indexKey) ?? const [];
  final ids = existing.toList();
  for (final seed in kRepairGuideSeedGuides()) {
    if (ids.contains(seed.id)) continue;
    await prefs.setString(_itemKey(userEmail, seed.id), jsonEncode(seed.toJson()));
    ids.add(seed.id);
  }
  await prefs.setStringList(indexKey, ids);
  await prefs.setBool(seedKey, true);
}

Future<List<RepairGuide>> loadRepairGuides({required String userEmail}) async {
  await _ensureSeedGuidesLoaded(userEmail);
  final prefs = await SharedPreferences.getInstance();
  final ids = prefs.getStringList(_indexKey(userEmail)) ?? const [];
  final guides = <RepairGuide>[];
  for (final id in ids) {
    final raw = prefs.getString(_itemKey(userEmail, id));
    if (raw == null || raw.isEmpty) continue;
    try {
      guides.add(repairGuideFromJsonString(raw));
    } catch (e) {
      debugPrint('[repair_guides] bad item $id: $e');
    }
  }
  guides.sort((a, b) => b.updatedAt.compareTo(a.updatedAt));
  return guides;
}

Future<RepairGuide?> loadRepairGuideById({
  required String userEmail,
  required String id,
}) async {
  await _ensureSeedGuidesLoaded(userEmail);
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_itemKey(userEmail, id));
  if (raw == null || raw.isEmpty) return null;
  try {
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
  if (userEmail.trim().isEmpty) return false;
  final prefs = await SharedPreferences.getInstance();
  final indexKey = _indexKey(userEmail);
  final ids = prefs.getStringList(indexKey)?.toList() ?? <String>[];
  if (!ids.contains(guide.id)) ids.insert(0, guide.id);
  final ok = await prefs.setString(_itemKey(userEmail, guide.id), jsonEncode(guide.toJson()));
  if (ok) await prefs.setStringList(indexKey, ids);
  return ok;
}

Future<bool> deleteRepairGuide({
  required String userEmail,
  required String id,
}) async {
  final prefs = await SharedPreferences.getInstance();
  final indexKey = _indexKey(userEmail);
  final ids = prefs.getStringList(indexKey)?.toList() ?? <String>[];
  ids.remove(id);
  await prefs.remove(_itemKey(userEmail, id));
  await prefs.setStringList(indexKey, ids);
  return true;
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
