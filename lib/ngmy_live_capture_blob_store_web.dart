import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:indexed_db' as idb;
import 'dart:typed_data';

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

  static Future<bool> putBytes(String id, List<int> bytes, {String mimeType = 'image/jpeg'}) async {
    try {
      final db = await _open();
      final blob = html.Blob([Uint8List.fromList(bytes)], mimeType);
      final tx = db.transaction(_storeName, 'readwrite');
      tx.objectStore(_storeName).put(blob, id);
      await tx.completed;
      return true;
    } catch (_) {
      return false;
    }
  }

  static Future<bool> putBlob(String id, html.Blob blob) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readwrite');
      tx.objectStore(_storeName).put(blob, id);
      await tx.completed;
      return true;
    } catch (_) {
      return false;
    }
  }

  /// Persists capture media — large blobs go to IndexedDB as [html.Blob], not base64 strings.
  static Future<bool> putMedia(String id, String src, {String mimeType = 'application/octet-stream'}) async {
    if (src.isEmpty) return false;
    if (src.startsWith('blob:')) {
      try {
        final req = await html.HttpRequest.request(src, responseType: 'blob');
        final blob = req.response;
        if (blob is html.Blob && blob.size > 0) {
          return putBlob(id, blob);
        }
      } catch (_) {}
    }
    if (src.startsWith('data:')) {
      try {
        final comma = src.indexOf(',');
        if (comma < 0) return putDataUrl(id, src);
        final header = src.substring(0, comma).toLowerCase();
        final payload = src.substring(comma + 1);
        final mimeMatch = RegExp(r'data:([^;,]+)').firstMatch(header);
        final mime = mimeMatch?.group(1) ?? mimeType;
        final Uint8List bytes;
        if (header.contains(';base64')) {
          var cleaned = payload.replaceAll(RegExp(r'\s'), '');
          cleaned = cleaned.replaceAll('-', '+').replaceAll('_', '/');
          final pad = cleaned.length % 4;
          if (pad > 0) cleaned = cleaned.padRight(cleaned.length + (4 - pad), '=');
          bytes = base64Decode(cleaned);
        } else {
          bytes = Uint8List.fromList(Uri.decodeComponent(payload).codeUnits);
        }
        if (bytes.isNotEmpty) {
          final blob = html.Blob([bytes], mime);
          if (blob.size > 3 * 1024 * 1024) return putBlob(id, blob);
        }
      } catch (_) {}
      return putDataUrl(id, src);
    }
    return putDataUrl(id, src);
  }

  static Future<String?> getDataUrl(String id) async {
    final url = await getPlayableUrl(id);
    if (url == null || !url.startsWith('data:')) return null;
    return url;
  }

  static Future<String?> getPlayableUrl(String id) async {
    try {
      final db = await _open();
      final tx = db.transaction(_storeName, 'readonly');
      final result = await tx.objectStore(_storeName).getObject(id);
      if (result is html.Blob) {
        return html.Url.createObjectUrlFromBlob(result);
      }
      if (result is String && result.isNotEmpty) return result;
      return null;
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
