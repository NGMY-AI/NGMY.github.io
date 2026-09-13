import 'dart:html' as html;
import 'dart:indexed_db' as idb;

import 'package:flutter/foundation.dart';

const _dbName = 'ngmy_slides_decks_v1';
const _store = 'decks';

Future<idb.Database>? _dbOpen;

Future<idb.Database> _openDb() {
  _dbOpen ??= _openDbOnce();
  return _dbOpen!;
}

Future<idb.Database> _openDbOnce() {
  final factory = html.window.indexedDB;
  if (factory == null) {
    throw StateError('IndexedDB not available');
  }
  return factory.open(
    _dbName,
    version: 1,
    onUpgradeNeeded: (idb.VersionChangeEvent event) {
      final db = event.target.result as idb.Database;
      final names = db.objectStoreNames;
      if (names == null || !names.contains(_store)) {
        db.createObjectStore(_store);
      }
    },
  );
}

Future<bool> ngmySlidesIdbPut(String emailKey, String json) async {
  if (emailKey.trim().isEmpty || json.isEmpty) return false;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readwrite');
    txn.objectStore(_store).put(json, emailKey);
    await txn.completed;
    return true;
  } catch (e) {
    debugPrint('[slides idb put] $e');
    return false;
  }
}

Future<String?> ngmySlidesIdbGet(String emailKey) async {
  if (emailKey.trim().isEmpty) return null;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readonly');
    final result = await txn.objectStore(_store).getObject(emailKey);
    await txn.completed;
    if (result is String && result.isNotEmpty) return result;
    return null;
  } catch (e) {
    debugPrint('[slides idb get] $e');
    return null;
  }
}
