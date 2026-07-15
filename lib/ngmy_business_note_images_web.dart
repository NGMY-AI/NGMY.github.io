// ignore: avoid_web_libraries_in_flutter

import 'dart:async';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _dbName = 'ngmy_business_note_images_v1';
const _storeName = 'images';

Future<idb.Database>? _opening;

String _compoundId(String userEmail, String noteId, String imageId) {
  final u = userEmail.toLowerCase().trim().hashCode.abs();
  return '${u}_${noteId.trim()}_$imageId';
}

/// Legacy SharedPreferences key (migrate once into IndexedDB).
String _legacyPrefsKey(String userEmail, String noteId, String imageId) {
  final u = userEmail.toLowerCase().trim().hashCode.abs();
  return 'ngmy_bnote_img_${u}_${noteId.trim()}_$imageId';
}

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
      if (!(db.objectStoreNames ?? const []).contains(_storeName)) {
        db.createObjectStore(_storeName);
      }
    },
  );
  _opening = future;
  return future;
}

Future<bool> ngmyBusinessNoteImagePut({
  required String userEmail,
  required String noteId,
  required String imageId,
  required String dataUrl,
}) async {
  final url = dataUrl.trim();
  if (url.isEmpty || noteId.trim().isEmpty || imageId.trim().isEmpty) return false;
  final key = _compoundId(userEmail, noteId, imageId);
  try {
    final db = await _open();
    final tx = db.transaction(_storeName, 'readwrite');
    tx.objectStore(_storeName).put(url, key);
    await tx.completed;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(_legacyPrefsKey(userEmail, noteId, imageId));
    } catch (_) {}
    return true;
  } catch (e) {
    debugPrint('[note images web] put idb failed, prefs fallback: $e');
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.setString(_legacyPrefsKey(userEmail, noteId, imageId), url);
    } catch (e2) {
      debugPrint('[note images web] prefs fallback failed: $e2');
      return false;
    }
  }
}

Future<String?> ngmyBusinessNoteImageGet({
  required String userEmail,
  required String noteId,
  required String imageId,
}) async {
  final key = _compoundId(userEmail, noteId, imageId);
  try {
    final db = await _open();
    final tx = db.transaction(_storeName, 'readonly');
    final result = await tx.objectStore(_storeName).getObject(key);
    if (result is String && result.trim().isNotEmpty) return result;
  } catch (_) {}
  try {
    final prefs = await SharedPreferences.getInstance();
    final v = prefs.getString(_legacyPrefsKey(userEmail, noteId, imageId));
    if (v != null && v.trim().isNotEmpty) {
      unawaited(ngmyBusinessNoteImagePut(
        userEmail: userEmail,
        noteId: noteId,
        imageId: imageId,
        dataUrl: v,
      ));
      return v;
    }
  } catch (_) {}
  return null;
}

Future<void> ngmyBusinessNoteImageDelete({
  required String userEmail,
  required String noteId,
  required String imageId,
}) async {
  final key = _compoundId(userEmail, noteId, imageId);
  try {
    final db = await _open();
    final tx = db.transaction(_storeName, 'readwrite');
    tx.objectStore(_storeName).delete(key);
    await tx.completed;
  } catch (_) {}
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_legacyPrefsKey(userEmail, noteId, imageId));
  } catch (_) {}
}

Future<void> ngmyBusinessNoteImagesDeleteAll({
  required String userEmail,
  required String noteId,
  required Iterable<String> imageIds,
}) async {
  for (final id in imageIds) {
    await ngmyBusinessNoteImageDelete(userEmail: userEmail, noteId: noteId, imageId: id);
  }
}
