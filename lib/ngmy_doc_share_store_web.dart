import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:math';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/scheduler.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_doc_share_blob_db_web.dart';
import 'ngmy_doc_share_folder_web.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_short_code.dart';

Future<String> _downloadBytesWeb(List<int> bytes, String filename, {String mime = 'application/octet-stream'}) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final blob = html.Blob([bytes], mime);
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = safeName
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 120));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  SchedulerBinding.instance.scheduleFrame();
  return 'Downloaded $safeName';
}

String _emailKey(String email) => email.toLowerCase().trim();

String _indexPrefsKey(String email) => 'ngmy_doc_share_index_v1_${_emailKey(email)}';

String _bytesPrefsKey(String email, String id) => 'ngmy_doc_share_blob_${_emailKey(email)}_$id';

String _newId() => '${DateTime.now().microsecondsSinceEpoch}_${Random().nextInt(99999)}';

const int _prefsMaxBytes = 512 * 1024; // legacy small-file prefs only; IndexedDB holds everything durable
const int _streamChunkBytes = 1024 * 1024;
const int _webPersistMaxBytes = 32 * 1024 * 1024; // keep html.File ref for bigger files; stream on transfer

final Map<String, Uint8List> _memoryBlobs = {};
final Map<String, html.File> _webFiles = {};
final Map<String, Uint8List> _transferReadCache = {};
final Map<String, _ChunkManifest> _chunkManifests = {};

class _ChunkManifest {
  _ChunkManifest({required this.partKeys, required this.totalBytes});

  final List<String> partKeys;
  final int totalBytes;
}

String _chunkManifestKey(String baseKey) => '${baseKey}_manifest';

Future<void> _persistChunkManifest(String baseKey, List<String> partKeys, int totalBytes) async {
  final manifest = _ChunkManifest(partKeys: List.from(partKeys), totalBytes: totalBytes);
  _chunkManifests[baseKey] = manifest;
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    _chunkManifestKey(baseKey),
    jsonEncode({'parts': partKeys, 'size': totalBytes}),
  );
}

Future<_ChunkManifest?> _loadChunkManifest(String baseKey) async {
  final cached = _chunkManifests[baseKey];
  if (cached != null) return cached;
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_chunkManifestKey(baseKey));
  if (raw == null || raw.isEmpty) return null;
  try {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return null;
    final partsRaw = decoded['parts'];
    if (partsRaw is! List || partsRaw.isEmpty) return null;
    final parts = partsRaw.map((e) => e.toString()).toList();
    final size = (decoded['size'] as num?)?.toInt() ?? 0;
    final manifest = _ChunkManifest(partKeys: parts, totalBytes: size);
    _chunkManifests[baseKey] = manifest;
    return manifest;
  } catch (_) {
    return null;
  }
}

Future<void> _persistBlob(String key, Uint8List bytes) async {
  if (bytes.isEmpty) return;
  _memoryBlobs[key] = bytes;
  await ngmyDocShareIdbPut(key, bytes);
}

Future<Uint8List?> _loadBlob(String key) async {
  final mem = _memoryBlobs[key];
  if (mem != null && mem.isNotEmpty) return mem;
  final idb = await ngmyDocShareIdbGet(key);
  if (idb != null && idb.isNotEmpty) {
    _memoryBlobs[key] = idb;
    return idb;
  }
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(key);
  if (raw == null || raw.isEmpty) return null;
  try {
    final bytes = base64Decode(raw);
    if (bytes.isNotEmpty) {
      unawaited(_persistBlob(key, bytes));
      await prefs.remove(key);
    }
    return bytes;
  } catch (_) {
    return null;
  }
}

Future<Uint8List?> _readHtmlBlobSlice(html.Blob slice) async {
  final reader = html.FileReader();
  final done = Completer<Uint8List?>();
  reader.onLoadEnd.listen((_) {
    final result = reader.result;
    if (result is ByteBuffer) {
      done.complete(Uint8List.view(result));
    } else {
      done.complete(null);
    }
  });
  reader.onError.listen((_) => done.complete(null));
  reader.readAsArrayBuffer(slice);
  return done.future.timeout(const Duration(hours: 2), onTimeout: () => null);
}

Future<void> _persistHtmlFileChunked(String email, String id, html.File file) async {
  final baseKey = _bytesPrefsKey(email, id);
  final partKeys = <String>[];
  final size = file.size.round();
  if (size <= 0) return;
  try {
    for (var start = 0; start < size; start += _streamChunkBytes) {
      final end = start + _streamChunkBytes < size ? start + _streamChunkBytes : size;
      final chunk = await _readHtmlBlobSlice(file.slice(start, end));
      if (chunk == null || chunk.isEmpty) continue;
      final partKey = '${baseKey}_part_${partKeys.length}';
      await ngmyDocShareIdbPut(partKey, chunk);
      partKeys.add(partKey);
    }
    if (partKeys.isEmpty) return;
    await _persistChunkManifest(baseKey, partKeys, size);
    _webFiles.remove(id);
  } catch (e) {
    debugPrint('[doc share web persist chunked] $e');
  }
}

Future<void> _persistHtmlFile(String email, String id, html.File file) async {
  if (file.size > _webPersistMaxBytes) {
    unawaited(_persistHtmlFileChunked(email, id, file));
    return;
  }
  final key = _bytesPrefsKey(email, id);
  try {
    final reader = html.FileReader();
    final done = Completer<ByteBuffer?>();
    reader.onLoadEnd.listen((_) {
      final result = reader.result;
      done.complete(result is ByteBuffer ? result : null);
    });
    reader.onError.listen((_) => done.complete(null));
    reader.readAsArrayBuffer(file);
    final buf = await done.future.timeout(const Duration(hours: 2), onTimeout: () => null);
    if (buf == null) return;
    await _persistBlob(key, Uint8List.view(buf));
    _webFiles.remove(id);
  } catch (e) {
    debugPrint('[doc share web persist] $e');
  }
}

class NgmyDocShareStore {
  static Future<List<NgmyDocShareItem>> list(String email) => _readIndex(email);

  static Future<NgmyDocShareItem?> addBytes({
    required String email,
    required String name,
    required String mime,
    required Uint8List bytes,
    String? note,
    String? fromSender,
  }) async {
    if (email.trim().isEmpty || bytes.isEmpty) return null;
    final id = _newId();
    final item = NgmyDocShareItem(
      id: id,
      name: name.trim().isEmpty ? 'file' : name.trim(),
      mime: mime.trim().isEmpty ? 'application/octet-stream' : mime.trim(),
      sizeBytes: bytes.length,
      createdAt: DateTime.now().toUtc().toIso8601String(),
      note: note,
      fromSender: fromSender,
      shortCode: NgmyDocShareShortCode.generateLocalCode(),
    );
    final key = _bytesPrefsKey(email, id);
    await _persistBlob(key, bytes);
    // Keep tiny legacy mirror for very old builds only.
    if (bytes.length <= _prefsMaxBytes) {
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString(key, base64Encode(bytes));
      } catch (_) {}
    }
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<int> addFromDirectory({required String email, required String dirPath}) async => 0;

  /// Web folder picker — keeps [html.File] refs for large videos (no full RAM load until transfer).
  static Future<List<NgmyDocShareItem>> addWebFolderFiles({
    required String email,
    required List<NgmyWebPickedFile> files,
    String? note,
  }) async {
    if (email.trim().isEmpty || files.isEmpty) return [];
    final created = <NgmyDocShareItem>[];
    final items = await _readIndex(email);
    for (final entry in files) {
      if (entry.file.size <= 0) continue;
      final id = _newId();
      final mime = _guessMime(entry.name, null);
      final item = NgmyDocShareItem(
        id: id,
        name: entry.name,
        mime: mime,
        sizeBytes: entry.file.size,
        createdAt: DateTime.now().toUtc().toIso8601String(),
        note: note ?? 'From folder',
        shortCode: NgmyDocShareShortCode.generateLocalCode(),
      );
      _webFiles[id] = entry.file;
      unawaited(_persistHtmlFile(email, id, entry.file));
      items.add(item);
      created.add(item);
    }
    if (created.isNotEmpty) await _writeIndex(email, items);
    return created;
  }

  static Future<NgmyDocShareItem?> addFromPlatformFile({
    required String email,
    required PlatformFile file,
    String? note,
  }) async {
    final mime = _guessMime(file.name, file.extension);
    final name = file.name.trim().isEmpty ? 'file' : file.name.trim();
    final size = file.size;
    if (size <= 0) return null;

    final stream = file.readStream;
    if (stream != null) {
      return _addFromStream(
        email: email,
        name: name,
        mime: mime,
        stream: stream,
        sizeBytes: size,
        note: note,
      );
    }

    final bytes = file.bytes;
    if (bytes != null && bytes.isNotEmpty) {
      return addBytes(email: email, name: name, mime: mime, bytes: bytes, note: note);
    }
    return null;
  }

  static Future<NgmyDocShareItem?> _addFromStream({
    required String email,
    required String name,
    required String mime,
    required Stream<List<int>> stream,
    required int sizeBytes,
    String? note,
  }) async {
    if (email.trim().isEmpty) return null;
    final id = _newId();
    final baseKey = _bytesPrefsKey(email, id);
    final partKeys = <String>[];
    var partIndex = 0;
    var received = 0;
    final buffer = <int>[];

    await for (final chunk in stream) {
      if (chunk.isEmpty) continue;
      buffer.addAll(chunk);
      received += chunk.length;
      while (buffer.length >= _streamChunkBytes) {
        final part = Uint8List.fromList(buffer.sublist(0, _streamChunkBytes));
        buffer.removeRange(0, _streamChunkBytes);
        final partKey = '${baseKey}_part_$partIndex';
        await ngmyDocShareIdbPut(partKey, part);
        partKeys.add(partKey);
        partIndex++;
      }
    }
    if (buffer.isNotEmpty) {
      final partKey = '${baseKey}_part_$partIndex';
      await ngmyDocShareIdbPut(partKey, Uint8List.fromList(buffer));
      partKeys.add(partKey);
    }
    if (partKeys.isEmpty) return null;

    final total = received > 0 ? received : sizeBytes;
    await _persistChunkManifest(baseKey, partKeys, total);
    final item = NgmyDocShareItem(
      id: id,
      name: name,
      mime: mime,
      sizeBytes: total,
      createdAt: DateTime.now().toUtc().toIso8601String(),
      note: note,
      shortCode: NgmyDocShareShortCode.generateLocalCode(),
    );
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<Uint8List?> readByteRange(String email, NgmyDocShareItem item, int start, int end) async {
    if (end <= start) return Uint8List(0);
    final webFile = _webFiles[item.id];
    if (webFile != null) {
      final slice = webFile.slice(start, end);
      final reader = html.FileReader();
      final done = Completer<Uint8List?>();
      reader.onLoadEnd.listen((_) {
        final result = reader.result;
        if (result is ByteBuffer) {
          done.complete(Uint8List.view(result));
        } else {
          done.complete(null);
        }
      });
      reader.onError.listen((_) => done.complete(null));
      reader.readAsArrayBuffer(slice);
      return done.future.timeout(const Duration(minutes: 30), onTimeout: () => null);
    }
    final cacheKey = _bytesPrefsKey(email, item.id);
    final manifest = await _loadChunkManifest(cacheKey);
    if (manifest != null) {
      var offset = 0;
      for (final partKey in manifest.partKeys) {
        final part = await ngmyDocShareIdbGet(partKey);
        if (part == null || part.isEmpty) continue;
        if (offset + part.length <= start) {
          offset += part.length;
          continue;
        }
        final localStart = start > offset ? start - offset : 0;
        if (localStart >= part.length) {
          offset += part.length;
          continue;
        }
        final sliceEnd = end - offset;
        final safeEnd = sliceEnd > part.length ? part.length : sliceEnd;
        return Uint8List.sublistView(part, localStart, safeEnd);
      }
      return null;
    }
    var all = _transferReadCache[cacheKey] ?? _memoryBlobs[cacheKey];
    if (all == null) {
      all = await readBytes(email, item);
      if (all != null && all.isNotEmpty) {
        _transferReadCache[cacheKey] = all;
      }
    }
    if (all == null || start >= all.length) return null;
    final safeEnd = end > all.length ? all.length : end;
    return Uint8List.sublistView(all, start, safeEnd);
  }

  static String _guessMime(String name, String? ext) {
    final parts = name.split('.');
    final lower = (ext ?? (parts.length > 1 ? parts.last : '')).toLowerCase();
    switch (lower) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'webp':
        return 'image/webp';
      case 'mp4':
      case 'm4v':
        return 'video/mp4';
      case 'mov':
        return 'video/quicktime';
      case 'webm':
        return 'video/webm';
      case 'mkv':
        return 'video/x-matroska';
      case 'avi':
        return 'video/x-msvideo';
      case 'pdf':
        return 'application/pdf';
      case 'txt':
        return 'text/plain';
      case 'csv':
        return 'text/csv';
      case 'json':
        return 'application/json';
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'xls':
        return 'application/vnd.ms-excel';
      case 'xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case 'ppt':
        return 'application/vnd.ms-powerpoint';
      case 'pptx':
        return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      case 'zip':
        return 'application/zip';
      case 'rar':
        return 'application/vnd.rar';
      case '7z':
        return 'application/x-7z-compressed';
      case 'mp3':
        return 'audio/mpeg';
      case 'wav':
        return 'audio/wav';
      case 'aac':
        return 'audio/aac';
      case 'heic':
        return 'image/heic';
      default:
        return 'application/octet-stream';
    }
  }

  static Future<Uint8List?> readBytes(String email, NgmyDocShareItem item) async {
    final key = _bytesPrefsKey(email, item.id);
    final manifest = await _loadChunkManifest(key);
    if (manifest != null) {
      final out = BytesBuilder(copy: false);
      for (final partKey in manifest.partKeys) {
        final part = await ngmyDocShareIdbGet(partKey);
        if (part != null && part.isNotEmpty) out.add(part);
      }
      final bytes = out.takeBytes();
      return bytes.isEmpty ? null : bytes;
    }
    final stored = await _loadBlob(key);
    if (stored != null && stored.isNotEmpty) return stored;
    final webFile = _webFiles[item.id];
    if (webFile != null) {
      final range = await readByteRange(email, item, 0, webFile.size);
      if (range != null && range.isNotEmpty) {
        unawaited(_persistBlob(key, range));
      }
      return range;
    }
    return null;
  }

  static Future<String?> filePath(String email, NgmyDocShareItem item) => Future.value(null);

  static html.File? webFileForItem(String itemId) => _webFiles[itemId];

  static Future<bool> uploadItemToSupabase({
    required String ownerEmail,
    required NgmyDocShareItem item,
    required String bucket,
    required String storagePath,
    void Function(int sent, int total)? onProgress,
  }) async {
    try {
      final wf = webFileForItem(item.id);
      Uint8List bytes;
      if (wf != null) {
        onProgress?.call(0, wf.size);
        final reader = html.FileReader();
        final done = Completer<ByteBuffer?>();
        reader.onLoadEnd.listen((_) {
          final result = reader.result;
          done.complete(result is ByteBuffer ? result : null);
        });
        reader.onError.listen((_) => done.complete(null));
        reader.readAsArrayBuffer(wf);
        final buf = await done.future.timeout(const Duration(hours: 2), onTimeout: () => null);
        if (buf == null) return false;
        bytes = Uint8List.view(buf);
      } else {
        final mem = await readBytes(ownerEmail, item);
        if (mem == null || mem.isEmpty) return false;
        bytes = mem;
      }
      onProgress?.call(bytes.length ~/ 2, bytes.length);
      await Supabase.instance.client.storage.from(bucket).uploadBinary(
            storagePath,
            bytes,
            fileOptions: FileOptions(upsert: true, contentType: item.mime),
          );
      onProgress?.call(bytes.length, bytes.length);
      return true;
    } catch (e) {
      debugPrint('[doc share upload web] ${item.name}: $e');
      return false;
    }
  }

  static final Map<int, _WebDiskReceive> _diskReceives = {};
  static int _nextDiskReceiveId = 1;

  static int beginDiskReceive({
    required String email,
    required String name,
    required String mime,
    String? note,
    String? fromSender,
  }) {
    final id = _nextDiskReceiveId++;
    final itemId = _newId();
    _diskReceives[id] = _WebDiskReceive(
      email: email,
      itemId: itemId,
      baseKey: _bytesPrefsKey(email, itemId),
      name: name,
      mime: mime,
      note: note,
      fromSender: fromSender,
    );
    return id;
  }

  static Future<void> prepareDiskReceive(int id) async {}

  static void clearTransferReadCache() => _transferReadCache.clear();

  static Future<void> preloadForTransfer(String email, List<NgmyDocShareItem> items) async {
    for (final item in items) {
      if (_webFiles[item.id] != null) continue;
      final key = _bytesPrefsKey(email, item.id);
      if (await _loadChunkManifest(key) != null) continue;
      if (_memoryBlobs.containsKey(key)) continue;
      unawaited(readByteRange(email, item, 0, 1));
    }
  }

  static Stream<Uint8List> readFileStream(String email, NgmyDocShareItem item) async* {
    final webFile = _webFiles[item.id];
    if (webFile != null) {
      const step = 1048576;
      final size = webFile.size.round();
      for (var start = 0; start < size; start += step) {
        final end = start + step < size ? start + step : size;
        final chunk = await readByteRange(email, item, start, end);
        if (chunk != null && chunk.isNotEmpty) yield chunk;
      }
      return;
    }
    final key = _bytesPrefsKey(email, item.id);
    final manifest = await _loadChunkManifest(key);
    if (manifest != null) {
      for (final partKey in manifest.partKeys) {
        final part = await ngmyDocShareIdbGet(partKey);
        if (part != null && part.isNotEmpty) yield part;
      }
      return;
    }
    final size = item.sizeBytes;
    if (size <= 0) return;
    const step = 1048576;
    for (var start = 0; start < size; start += step) {
      final end = start + step < size ? start + step : size;
      final chunk = await readByteRange(email, item, start, end);
      if (chunk != null && chunk.isNotEmpty) yield chunk;
    }
  }

  static Future<bool> writeDiskReceive(int id, List<int> bytes) async {
    final rx = _diskReceives[id];
    if (rx == null || bytes.isEmpty) return false;
    rx.pending.add(bytes);
    while (rx.pending.length >= _streamChunkBytes) {
      await rx.flushPending();
    }
    return true;
  }

  static Future<NgmyDocShareItem?> finishDiskReceive(int id) async {
    final rx = _diskReceives.remove(id);
    if (rx == null) return null;
    await rx.flushPending();
    if (rx.partKeys.isEmpty || rx.totalBytes <= 0) {
      debugPrint('[doc share web recv] empty receive id=$id');
      return null;
    }
    await _persistChunkManifest(rx.baseKey, rx.partKeys, rx.totalBytes);
    final item = NgmyDocShareItem(
      id: rx.itemId,
      name: rx.name,
      mime: rx.mime,
      sizeBytes: rx.totalBytes,
      createdAt: DateTime.now().toUtc().toIso8601String(),
      note: rx.note,
      fromSender: rx.fromSender,
      shortCode: NgmyDocShareShortCode.generateLocalCode(),
    );
    final items = await _readIndex(rx.email)..add(item);
    await _writeIndex(rx.email, items);
    return item;
  }

  static Future<void> abortDiskReceive(int id) async {
    final rx = _diskReceives.remove(id);
    if (rx == null) return;
    for (final partKey in rx.partKeys) {
      await ngmyDocShareIdbDelete(partKey);
    }
    rx.pending.clear();
  }

  static Future<void> updateShortCode(String email, String itemId, String shortCode) async {
    await _patchShortCode(email, itemId, shortCode);
  }

  static Future<void> updateStashToken(String email, String itemId, String stashToken) async {
    await _patchStashToken(email, itemId, stashToken);
  }

  static Future<void> delete(String email, String id) async {
    final items = await _readIndex(email);
    items.removeWhere((e) => e.id == id);
    final key = _bytesPrefsKey(email, id);
    _memoryBlobs.remove(key);
    _webFiles.remove(id);
    final manifest = await _loadChunkManifest(key);
    _chunkManifests.remove(key);
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(key);
    await prefs.remove(_chunkManifestKey(key));
    if (manifest != null) {
      for (final partKey in manifest.partKeys) {
        await ngmyDocShareIdbDelete(partKey);
      }
    }
    await ngmyDocShareIdbDelete(key);
    await _writeIndex(email, items);
  }

  static Future<String> saveToDevice(String email, NgmyDocShareItem item) async {
    final bytes = await readBytes(email, item);
    if (bytes == null || bytes.isEmpty) return 'File not found on this device.';
    final safeName = item.name.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    return _downloadBytesWeb(bytes, safeName, mime: item.mime);
  }
}

class _WebDiskReceive {
  _WebDiskReceive({
    required this.email,
    required this.itemId,
    required this.baseKey,
    required this.name,
    required this.mime,
    this.note,
    this.fromSender,
  });

  final String email;
  final String itemId;
  final String baseKey;
  final String name;
  final String mime;
  final String? note;
  final String? fromSender;
  final List<String> partKeys = [];
  final BytesBuilder pending = BytesBuilder(copy: false);
  var partIndex = 0;
  var totalBytes = 0;

  Future<void> flushPending() async {
    if (pending.length <= 0) return;
    final partKey = '${baseKey}_rx_$partIndex';
    final bytes = pending.takeBytes();
    await ngmyDocShareIdbPut(partKey, Uint8List.fromList(bytes));
    partKeys.add(partKey);
    totalBytes += bytes.length;
    partIndex++;
  }
}

Future<List<NgmyDocShareItem>> _readIndex(String email) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_indexPrefsKey(email));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.map((e) => NgmyDocShareItem.fromJson(Map<String, dynamic>.from(e as Map))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _writeIndex(String email, List<NgmyDocShareItem> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_indexPrefsKey(email), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<void> _patchShortCode(String email, String itemId, String shortCode) async {
  final items = await _readIndex(email);
  final idx = items.indexWhere((e) => e.id == itemId);
  if (idx < 0) return;
  items[idx] = items[idx].copyWith(shortCode: shortCode);
  await _writeIndex(email, items);
}

Future<void> _patchStashToken(String email, String itemId, String stashToken) async {
  final items = await _readIndex(email);
  final idx = items.indexWhere((e) => e.id == itemId);
  if (idx < 0) return;
  items[idx] = items[idx].copyWith(stashToken: stashToken);
  await _writeIndex(email, items);
}
