import 'dart:convert';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';

const _dbName = 'ngmy_worksheet_thumbs_v1';
const _store = 'thumbs';

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

Uint8List? _asUint8List(Object? result) {
  if (result == null) return null;
  if (result is Uint8List) return Uint8List.fromList(result);
  if (result is ByteBuffer) return Uint8List.fromList(Uint8List.view(result));
  if (result is TypedData) return Uint8List.fromList(Uint8List.sublistView(result));
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

Future<bool> ngmyWorksheetThumbPutImpl(String id, Uint8List bytes) async {
  if (id.trim().isEmpty || bytes.isEmpty) return false;
  try {
    final db = await _openDb();
    final payload = Uint8List.fromList(bytes);
    final txn = db.transaction(_store, 'readwrite');
    txn.objectStore(_store).put(payload, id.trim());
    await txn.completed;
    return true;
  } catch (e) {
    debugPrint('[worksheet-thumb idb put] $e');
    return false;
  }
}

Future<Uint8List?> ngmyWorksheetThumbGetImpl(String id) async {
  if (id.trim().isEmpty) return null;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readonly');
    final result = await txn.objectStore(_store).getObject(id.trim());
    await txn.completed;
    return _asUint8List(result);
  } catch (e) {
    debugPrint('[worksheet-thumb idb get] $e');
    return null;
  }
}

Future<void> ngmyWorksheetThumbDeleteImpl(String id) async {
  if (id.trim().isEmpty) return;
  try {
    final db = await _openDb();
    final txn = db.transaction(_store, 'readwrite');
    txn.objectStore(_store).delete(id.trim());
    await txn.completed;
  } catch (e) {
    debugPrint('[worksheet-thumb idb delete] $e');
  }
}
