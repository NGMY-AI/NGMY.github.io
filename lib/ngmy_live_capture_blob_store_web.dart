import 'dart:async';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;

/// Stores large Live Capture media payloads (data URLs) in IndexedDB instead
/// of SharedPreferences/localStorage, which has a hard ~5-10MB per-origin
/// quota that a single video recording can blow past on its own.
class NgmyLiveCaptureBlobStore {
  static const _dbName = 'ngmy_live_capture_blobs_v1';
  static const _storeName = 'blobs';

  static Future<idb.Database>? _opening;

  static Future<idb.Database> _open() {
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

  static Future<bool> putDataUrl(String id, String dataUrl) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      tx.objectStore(_storeName).put(dataUrl, id);
      await tx.completed;
      return true;
    } catch (e) {
      return false;
    }
  }

  static Future<String?> getDataUrl(String id) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readonly');
      final result = await tx.objectStore(_storeName).getObject(id);
      return result is String ? result : null;
    } catch (e) {
      return null;
    }
  }

  static Future<void> delete(String id) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      tx.objectStore(_storeName).delete(id);
      await tx.completed;
    } catch (_) {}
  }

  static Future<void> deleteMany(Iterable<String> ids) async {
    if (ids.isEmpty) return;
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      final store = tx.objectStore(_storeName);
      for (final id in ids) {
        store.delete(id);
      }
      await tx.completed;
    } catch (_) {}
  }
}
