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

import 'ngmy_doc_share_models.dart';

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

const int _prefsMaxBytes = 3 * 1024 * 1024;

final Map<String, Uint8List> _memoryBlobs = {};
final Map<String, html.File> _webFiles = {};

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
    );
    final key = _bytesPrefsKey(email, id);
    if (bytes.length <= _prefsMaxBytes) {
      final prefs = await SharedPreferences.getInstance();
      try {
        final ok = await prefs.setString(key, base64Encode(bytes));
        if (!ok) _memoryBlobs[key] = bytes;
      } catch (_) {
        _memoryBlobs[key] = bytes;
      }
    } else {
      _memoryBlobs[key] = bytes;
    }
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<int> addFromDirectory({required String email, required String dirPath}) async => 0;

  /// Web folder picker — keeps [html.File] refs for large videos (no full RAM load until transfer).
  static Future<int> addWebFolderFiles({
    required String email,
    required List<({String name, html.File file})> files,
  }) async {
    if (email.trim().isEmpty || files.isEmpty) return 0;
    var count = 0;
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
        note: 'From folder',
      );
      _webFiles[id] = entry.file;
      items.add(item);
      count++;
    }
    if (count > 0) await _writeIndex(email, items);
    return count;
  }

  static Future<NgmyDocShareItem?> addFromPlatformFile({
    required String email,
    required PlatformFile file,
    String? note,
  }) async {
    final mime = _guessMime(file.name, file.extension);
    final bytes = file.bytes;
    if (bytes != null && bytes.isNotEmpty) {
      return addBytes(email: email, name: file.name, mime: mime, bytes: bytes, note: note);
    }
    return null;
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
    final all = await readBytes(email, item);
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
      default:
        return 'application/octet-stream';
    }
  }

  static Future<Uint8List?> readBytes(String email, NgmyDocShareItem item) async {
    final key = _bytesPrefsKey(email, item.id);
    final mem = _memoryBlobs[key];
    if (mem != null) return mem;
    final webFile = _webFiles[item.id];
    if (webFile != null) {
      return readByteRange(email, item, 0, webFile.size);
    }
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(key);
    if (raw == null || raw.isEmpty) return null;
    try {
      return base64Decode(raw);
    } catch (_) {
      return null;
    }
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
    _diskReceives[id] = _WebDiskReceive(
      email: email,
      name: name,
      mime: mime,
      note: note,
      fromSender: fromSender,
    );
    return id;
  }

  static Future<bool> writeDiskReceive(int id, List<int> bytes) async {
    final rx = _diskReceives[id];
    if (rx == null || bytes.isEmpty) return false;
    rx.builder.add(bytes);
    return true;
  }

  static Future<NgmyDocShareItem?> finishDiskReceive(int id) async {
    final rx = _diskReceives.remove(id);
    if (rx == null || rx.builder.length <= 0) return null;
    return addBytes(
      email: rx.email,
      name: rx.name,
      mime: rx.mime,
      bytes: rx.builder.takeBytes(),
      fromSender: rx.fromSender,
      note: rx.note ?? 'Received via QR',
    );
  }

  static Future<void> abortDiskReceive(int id) async {
    _diskReceives.remove(id);
  }

  static Future<void> updateShortCode(String email, String itemId, String shortCode) async {
    await _patchShortCode(email, itemId, shortCode);
  }

  static Future<void> delete(String email, String id) async {
    final items = await _readIndex(email);
    items.removeWhere((e) => e.id == id);
    final key = _bytesPrefsKey(email, id);
    _memoryBlobs.remove(key);
    _webFiles.remove(id);
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(key);
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
    required this.name,
    required this.mime,
    this.note,
    this.fromSender,
  });

  final String email;
  final String name;
  final String mime;
  final String? note;
  final String? fromSender;
  final BytesBuilder builder = BytesBuilder(copy: false);
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
