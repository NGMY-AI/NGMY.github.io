import 'dart:async';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';

import 'ngmy_vault_pick_video_types.dart';

/// Raw photo/video bytes for the private vault, kept in IndexedDB instead of
/// SharedPreferences/localStorage — a single photo or clip can easily blow
/// past the ~5-10MB per-origin quota that backs those.
///
/// Large videos are stored as [html.Blob] so browsers return them as Blobs
/// again on read. Readers must convert Blobs → bytes (or object URLs).
class NgmyVaultBlobStore {
  static const _dbName = 'ngmy_vault_blobs_v1';
  static const _storeName = 'blobs';

  /// IndexedDB key for a video's grid thumbnail JPEG.
  static String thumbKey(String videoId) => '${videoId}__thumb';

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

  /// Store a browser [html.Blob] / [html.File] directly — no Dart memory copy (long videos).
  static Future<bool> putBlob(String id, Object blob, {String mime = 'application/octet-stream'}) async {
    if (id.trim().isEmpty) return false;
    if (blob is! html.Blob) return false;
    final htmlBlob = blob;
    final type = ngmyVaultPlaybackMime(mime);
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      html.Blob toStore;
      if (htmlBlob is html.File) {
        toStore = htmlBlob.type.trim().isEmpty ? html.File([htmlBlob], htmlBlob.name, {'type': type}) : htmlBlob;
      } else if (htmlBlob.type.trim().isEmpty || !htmlBlob.type.startsWith('video/')) {
        toStore = html.Blob([htmlBlob], type);
      } else {
        toStore = htmlBlob;
      }
      tx.objectStore(_storeName).put(toStore, id);
      await tx.completed;
      return true;
    } catch (e) {
      debugPrint('[ngmy_vault_blob] putBlob: $e');
    }
    // Small clips only — never load multi‑hundred‑MB videos into Dart memory.
    if (htmlBlob.size > 0 && htmlBlob.size <= 64 * 1024 * 1024) {
      final bytes = await _blobToBytes(htmlBlob);
      if (bytes != null && bytes.isNotEmpty) {
        return put(id, bytes, mime: type);
      }
    }
    return false;
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
      final type = ngmyVaultPlaybackMime(mime);
      if (result is html.Blob && result.size > 0) {
        final blob = (result.type.trim().isEmpty || !result.type.startsWith('video/'))
            ? html.Blob([result], type)
            : result;
        return html.Url.createObjectUrlFromBlob(blob);
      }
      if (result is html.Blob && result.size == 0) {
        debugPrint('[ngmy_vault_blob] getObjectUrl: empty blob for $id');
      }
      final bytes = await _asBytesAsync(result);
      if (bytes == null || bytes.isEmpty) return null;
      return html.Url.createObjectUrlFromBlob(html.Blob([bytes], type));
    } catch (e) {
      debugPrint('[ngmy_vault_blob] getObjectUrl: $e');
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
      final store = tx.objectStore(_storeName);
      store.delete(id);
      store.delete(thumbKey(id));
      await tx.completed;
    } catch (_) {}
  }
}
