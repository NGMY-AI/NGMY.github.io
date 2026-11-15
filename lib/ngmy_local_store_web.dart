// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _dbName = 'ngmy_local_store_v1';
const _storeName = 'kv';

Future<idb.Database>? _opening;

Future<idb.Database> _open() {
  final existing = _opening;
  if (existing != null) return existing;
  final factory = html.window.indexedDB;
  if (factory == null) {
    final err = Future<idb.Database>.error(StateError('IndexedDB unavailable'));
    _opening = err;
    return err;
  }
  final future = factory.open(
    _dbName,
    version: 1,
    onUpgradeNeeded: (e) {
      final db = (e.target as idb.Request).result as idb.Database;
      if (!(db.objectStoreNames ?? const []).contains(_storeName)) db.createObjectStore(_storeName);
    },
  );
  _opening = future.catchError((Object e) {
    _opening = null; // try again next time
    throw e;
  });
  return _opening!;
}

String _stampKey(String key) => '$key.__savedAt';

/// Reads what was kept on this device under [key]: the newer of the large-storage copy and the small-storage copy.
Future<String?> ngmyLocalRead(String key) async {
  String? bigValue;
  var bigAt = -1;
  try {
    final db = await _open();
    final tx = db.transaction(_storeName, 'readonly');
    final raw = await tx.objectStore(_storeName).getObject(key);
    await tx.completed;
    if (raw is String && raw.isNotEmpty) {
      final m = jsonDecode(raw);
      if (m is Map && m['v'] is String) {
        bigValue = m['v'] as String;
        bigAt = (m['t'] as num?)?.toInt() ?? 0;
      }
    }
  } catch (e) {
    debugPrint('[local store] read idb $key: $e');
  }
  String? smallValue;
  var smallAt = -1;
  try {
    final prefs = await SharedPreferences.getInstance();
    smallValue = prefs.getString(key);
    if (smallValue != null) smallAt = prefs.getInt(_stampKey(key)) ?? 0;
  } catch (_) {}
  if (bigValue == null) return smallValue;
  if (smallValue == null) return bigValue;
  return smallAt > bigAt ? smallValue : bigValue;
}

/// Keeps [value] on this device under [key], in the large storage and (when there is room) the small one. True when either kept it.
Future<bool> ngmyLocalWrite(String key, String value) async {
  final at = DateTime.now().millisecondsSinceEpoch;
  var bigOk = false;
  try {
    final db = await _open();
    final tx = db.transaction(_storeName, 'readwrite');
    tx.objectStore(_storeName).put(jsonEncode({'t': at, 'v': value}), key);
    await tx.completed;
    bigOk = true;
  } catch (e) {
    debugPrint('[local store] write idb $key: $e');
  }
  var smallOk = false;
  try {
    final prefs = await SharedPreferences.getInstance();
    smallOk = await prefs.setString(key, value);
    if (smallOk) await prefs.setInt(_stampKey(key), at);
  } catch (e) {
    // The small storage is full: the large one has it. Drop the old small copy so it can never be read as newer.
    debugPrint('[local store] write prefs $key: $e');
    if (bigOk) {
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.remove(key);
        await prefs.remove(_stampKey(key));
      } catch (_) {}
    }
  }
  return bigOk || smallOk;
}
