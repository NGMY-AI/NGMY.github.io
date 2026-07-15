import 'dart:convert';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';

const _dbName = 'ngmy_doc_share_v1';
const _store = 'blobs';

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

/// Safe bytes from IDB — never use TypedData.buffer alone (wrong offset/length).
Uint8List? _asUint8List(Object? result) {
  if (result == null) return null;
  if (result is Uint8List) {
    // Own the bytes so later mutations / GC of views cannot corrupt previews.
    return Uint8List.fromList(result);
  }
  if (result is ByteBuffer) return Uint8List.fromList(Uint8List.view(result));
  if (result is TypedData) {
    return Uint8List.fromList(Uint8List.sublistView(result));
  }
  if (result is List<int>) return Uint8List.fromList(result);
  if (result is String) {
    try {
      return base64Decode(result);
    } catch (_) {
      return null;
    }
  }
  return null;
}

/// Returns true after IndexedDB accepted the write (caller should re-read to confirm).
Future<bool> ngmyDocShareIdbPut(String key, Uint8List bytes) async {
  if (key.trim().isEmpty || bytes.isEmpty) return false;
  try {
    final db = await _openDb();
    // Copy so we never store a FileReader view that may detach.
    final payload = Uint8List.fromList(bytes);
    final txn = db.transaction(_store, 'readwrite');
    txn.objectStore(_store).put(payload, key);
    await txn.completed;
    return true;
  } catch (e) {
    debugPrint('[doc share idb put] $e');
    return false;
  }
}

Future<Uint8List?> ngmyDocShareIdbGet(String key) async {
  if (key.trim().isEmpty) return null;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readonly');
    final result = await txn.objectStore(_store).getObject(key);
    await txn.completed;
    return _asUint8List(result);
  } catch (e) {
    debugPrint('[doc share idb get] $e');
    return null;
  }
}

Future<void> ngmyDocShareIdbDelete(String key) async {
  if (key.trim().isEmpty) return;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readwrite');
    txn.objectStore(_store).delete(key);
    await txn.completed;
  } catch (e) {
    debugPrint('[doc share idb delete] $e');
  }
}
