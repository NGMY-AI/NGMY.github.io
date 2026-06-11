import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Per-app local storage — forms save, lists load, settings persist.
class NgmyAppDataStore extends ChangeNotifier {
  NgmyAppDataStore(this.appId);

  final String appId;
  Map<String, dynamic> _data = {'collections': <String, dynamic>{}, 'settings': <String, dynamic>{}};
  bool _loaded = false;

  static final Map<String, NgmyAppDataStore> _cache = {};

  static NgmyAppDataStore forApp(String appId) {
  final key = appId.trim().isEmpty ? 'default' : appId.trim();
    return _cache.putIfAbsent(key, () => NgmyAppDataStore(key));
  }

  String get _prefsKey => 'ngmy_app_runtime_$appId';

  Future<void> ensureLoaded() async {
    if (_loaded) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw != null && raw.isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          _data = Map<String, dynamic>.from(decoded);
          _data['collections'] ??= <String, dynamic>{};
          _data['settings'] ??= <String, dynamic>{};
        }
      }
    } catch (e) {
      debugPrint('[app data] load $appId: $e');
    }
    _loaded = true;
  }

  Future<void> _persist() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, jsonEncode(_data));
    } catch (e) {
      debugPrint('[app data] save $appId: $e');
    }
    notifyListeners();
  }

  List<Map<String, dynamic>> records(String collection) {
    final raw = _data['collections']?[collection];
    if (raw is! List) return [];
    return raw.map((e) => e is Map ? Map<String, dynamic>.from(e) : <String, dynamic>{}).toList();
  }

  Future<Map<String, dynamic>> addRecord(String collection, Map<String, dynamic> fields) async {
    await ensureLoaded();
    final list = records(collection);
    final record = {
      ...fields,
      'id': 'rec_${DateTime.now().millisecondsSinceEpoch}',
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    list.insert(0, record);
    _data['collections'] ??= <String, dynamic>{};
    (_data['collections'] as Map)[collection] = list;
    await _persist();
    return record;
  }

  Future<void> deleteRecord(String collection, String recordId) async {
    await ensureLoaded();
    final list = records(collection)..removeWhere((r) => r['id']?.toString() == recordId);
    _data['collections'] ??= <String, dynamic>{};
    (_data['collections'] as Map)[collection] = list;
    await _persist();
  }

  Future<void> updateRecord(String collection, String recordId, Map<String, dynamic> fields) async {
    await ensureLoaded();
    final list = records(collection);
    final idx = list.indexWhere((r) => r['id']?.toString() == recordId);
    if (idx < 0) return;
    list[idx] = {...list[idx], ...fields, 'id': recordId, 'updatedAt': DateTime.now().toUtc().toIso8601String()};
    _data['collections'] ??= <String, dynamic>{};
    (_data['collections'] as Map)[collection] = list;
    await _persist();
  }

  bool getSetting(String key, {bool defaultValue = false}) {
    final v = _data['settings']?[key];
    if (v is bool) return v;
    if (v == 'true') return true;
    if (v == 'false') return false;
    return defaultValue;
  }

  /// True when any saved setting key looks like dark mode and is on.
  bool get darkModeEnabled {
    final settings = _data['settings'];
    if (settings is! Map) return false;
    for (final entry in settings.entries) {
      final key = entry.key.toString().toLowerCase();
      final val = entry.value;
      final isDarkKey = key.contains('dark') || key == 'night_mode' || key == 'nightmode';
      if (!isDarkKey) continue;
      if (val is bool) return val;
      if (val == 'true' || val == 1 || val == '1') return true;
    }
    return false;
  }

  Future<void> setSetting(String key, dynamic value) async {
    await ensureLoaded();
    _data['settings'] ??= <String, dynamic>{};
    (_data['settings'] as Map)[key] = value;
    await _persist();
  }

  dynamic getProgress(String key) {
    return _data['settings']?['progress_$key'];
  }

  Future<void> setProgress(String key, dynamic value) async {
    await setSetting('progress_$key', value);
  }

  Set<String> checkedItems(String checklistId) {
    final raw = getProgress('checklist_$checklistId');
    if (raw is List) return raw.map((e) => e.toString()).toSet();
    return {};
  }

  Future<void> toggleChecklistItem(String checklistId, String itemId, bool checked) async {
    final set = checkedItems(checklistId);
    if (checked) {
      set.add(itemId);
    } else {
      set.remove(itemId);
    }
    await setProgress('checklist_$checklistId', set.toList());
  }

  int recordCount(String collection) => records(collection).length;

  Map<String, dynamic> snapshot() => {
        'collections': Map<String, dynamic>.from(_data['collections'] as Map? ?? {}),
        'settings': Map<String, dynamic>.from(_data['settings'] as Map? ?? {}),
      };

  Future<void> importSnapshot(Map<String, dynamic> raw) async {
    await ensureLoaded();
    _data = {
      'collections': Map<String, dynamic>.from(raw['collections'] as Map? ?? {}),
      'settings': Map<String, dynamic>.from(raw['settings'] as Map? ?? {}),
    };
    await _persist();
  }

  static Future<Map<String, dynamic>> exportRawData(String appId) async {
    final store = NgmyAppDataStore.forApp(appId);
    await store.ensureLoaded();
    return store.snapshot();
  }

  static Future<void> importRawData(String appId, Map<String, dynamic> raw) async {
    final store = NgmyAppDataStore.forApp(appId);
    await store.importSnapshot(raw);
  }
}
