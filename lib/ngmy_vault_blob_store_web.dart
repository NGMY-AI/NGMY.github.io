import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

/// Raw photo/video bytes for the private vault, kept in IndexedDB instead of
/// SharedPreferences/localStorage — a single photo or clip can easily blow
/// past the ~5-10MB per-origin quota that backs those.
class NgmyVaultBlobStore {
  static const _dbName = 'ngmy_vault_blobs_v1';
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

  static Uint8List? _asBytes(Object? result) {
    if (result == null) return null;
    if (result is Uint8List) return Uint8List.fromList(result);
    if (result is ByteBuffer) return Uint8List.fromList(Uint8List.view(result));
    if (result is TypedData) return Uint8List.fromList(Uint8List.sublistView(result));
    if (result is List<int>) return Uint8List.fromList(result);
    return null;
  }

  static Future<bool> put(String id, Uint8List bytes) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      tx.objectStore(_storeName).put(Uint8List.fromList(bytes), id);
      await tx.completed;
      return true;
    } catch (_) {
      return false;
    }
  }

  static Future<Uint8List?> getBytes(String id) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readonly');
      final result = await tx.objectStore(_storeName).getObject(id);
      return _asBytes(result);
    } catch (_) {
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
}
