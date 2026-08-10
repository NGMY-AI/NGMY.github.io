import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_cashier_iou.dart';
import 'ngmy_worksheets_storage.dart';

const String _cashierIouKeyPrefix = 'ngmy_cashier_ious_v1_';

String _cashierKey(String email) =>
    '$_cashierIouKeyPrefix${email.toLowerCase().trim().hashCode.abs()}';

Future<List<NgmyCashierIou>> loadNgmyCashierIous(String userEmail) async {
  final email = await ngmyWorksheetEffectiveEmail(userEmail);
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_cashierKey(email));
  if (raw == null || raw.trim().isEmpty) return [];
  try {
    final decoded = jsonDecode(raw);
    if (decoded is! List) return [];
    return decoded
        .whereType<Map>()
        .map((e) => NgmyCashierIou.fromJson(Map<String, dynamic>.from(e)))
        .toList()
      ..sort((a, b) {
        if (a.isPaid != b.isPaid) return a.isPaid ? 1 : -1;
        return a.dueDate.compareTo(b.dueDate);
      });
  } catch (e) {
    debugPrint('[cashier] load failed: $e');
    return [];
  }
}

Future<bool> saveNgmyCashierIous(
  String userEmail,
  List<NgmyCashierIou> items,
) async {
  final email = await ngmyWorksheetEffectiveEmail(userEmail);
  final prefs = await SharedPreferences.getInstance();
  try {
    final encoded = jsonEncode(items.map((e) => e.toJson()).toList());
    return await prefs.setString(_cashierKey(email), encoded);
  } catch (e) {
    debugPrint('[cashier] save failed: $e');
    return false;
  }
}

Future<bool> upsertNgmyCashierIou(String userEmail, NgmyCashierIou item) async {
  final list = await loadNgmyCashierIous(userEmail);
  final i = list.indexWhere((e) => e.id == item.id);
  if (i >= 0) {
    list[i] = item;
  } else {
    list.add(item);
  }
  return saveNgmyCashierIous(userEmail, list);
}

Future<bool> deleteNgmyCashierIou(String userEmail, String id) async {
  final list = await loadNgmyCashierIous(userEmail);
  list.removeWhere((e) => e.id == id);
  return saveNgmyCashierIous(userEmail, list);
}

Future<List<NgmyCashierIou>> ngmyCashierDayBeforeReminders(
  String userEmail,
) async {
  final list = await loadNgmyCashierIous(userEmail);
  return list.where((e) => e.isDueTomorrow()).toList();
}
