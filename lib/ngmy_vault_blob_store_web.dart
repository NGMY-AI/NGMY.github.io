import 'dart:async';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

/// Raw photo/video bytes for the private vault, kept in IndexedDB instead of
/// SharedPreferences/localStorage — a single photo or clip can easily blow
/// past the ~5-10MB per-origin quota that backs those.
///
/// Large videos are stored as [html.Blob] so browsers return them as Blobs
/// again on read. Readers must convert Blobs → bytes (or object URLs).
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

  static Uint8List? _asBytesSync(Object? result) {
    if (result == null) return null;
    if (result is Uint8List) return Uint8List.fromList(result);
    if (result is ByteBuffer) return Uint8List.fromList(Uint8List.view(result));
    if (result is TypedData) return Uint8List.fromList(Uint8List.sublistView(result));
    if (result is List<int>) return Uint8List.fromList(result);
    return null;
  }

  static Future<Uint8List?> _blobToBytes(html.Blob blob) async {
    final reader = html.FileReader();
    final done = Completer<Uint8List?>();
    reader.onLoad.listen((_) {
      final r = reader.result;
      if (r is ByteBuffer) {
        done.complete(Uint8List.view(r));
      } else if (r is Uint8List) {
        done.complete(Uint8List.fromList(r));
      } else {
        done.complete(null);
      }
    });
    reader.onError.listen((_) {
      if (!done.isCompleted) done.complete(null);
    });
    reader.readAsArrayBuffer(blob);
    return done.future;
  }

  static Future<Uint8List?> _asBytesAsync(Object? result) async {
    final sync = _asBytesSync(result);
    if (sync != null) return sync;
    if (result is html.Blob) return _blobToBytes(result);
    return null;
  }

  /// Persist bytes. Videos should pass a real [mime] so playback works later.
  static Future<bool> put(String id, Uint8List bytes, {String mime = 'application/octet-stream'}) async {
    if (id.trim().isEmpty || bytes.isEmpty) return false;
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      // Prefer Blob storage — more reliable for multi‑MB video than raw ArrayBuffer.
      final blob = html.Blob([bytes], mime.isEmpty ? 'application/octet-stream' : mime);
      tx.objectStore(_storeName).put(blob, id);
      await tx.completed;
      return true;
    } catch (_) {
      try {
        // Fallback: some older browsers reject Blob values.
        final db = await _open();
        final tx = db.transaction(_storeName, 'readwrite');
        tx.objectStore(_storeName).put(Uint8List.fromList(bytes), id);
        await tx.completed;
        return true;
      } catch (_) {
        return false;
      }
    }
  }

  static Future<Uint8List?> getBytes(String id) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readonly');
      final result = await tx.objectStore(_storeName).getObject(id);
      return await _asBytesAsync(result);
    } catch (_) {
      return null;
    }
  }

  /// Object URL for in-page video playback. Prefer this over bytes→blob for
  /// large clips — if IndexedDB already holds a Blob we skip a full copy.
  /// Caller must revoke with [revokeObjectUrl].
  static Future<String?> getObjectUrl(String id, String mime) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readonly');
      final result = await tx.objectStore(_storeName).getObject(id);
      final type = mime.trim().isEmpty ? 'video/mp4' : mime.trim();
      if (result is html.Blob) {
        // IndexedDB may return a Blob with an empty/wrong type — browsers then
        // refuse to decode. Re-wrap with the stored MIME when needed.
        final blob = (result.type.trim().isEmpty || !result.type.startsWith('video/'))
            ? html.Blob([result], type)
            : result;
        return html.Url.createObjectUrlFromBlob(blob);
      }
      final bytes = await _asBytesAsync(result);
      if (bytes == null || bytes.isEmpty) return null;
      return html.Url.createObjectUrlFromBlob(html.Blob([bytes], type));
    } catch (_) {
      return null;
    }
  }

  static void revokeObjectUrl(String url) {
    try {
      html.Url.revokeObjectUrl(url);
    } catch (_) {}
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
