import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/scheduler.dart';
import 'package:shared_preferences/shared_preferences.dart';

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
    final id = '${DateTime.now().microsecondsSinceEpoch}';
    final item = NgmyDocShareItem(
      id: id,
      name: name.trim().isEmpty ? 'file' : name.trim(),
      mime: mime.trim().isEmpty ? 'application/octet-stream' : mime.trim(),
      sizeBytes: bytes.length,
      createdAt: DateTime.now().toUtc().toIso8601String(),
      note: note,
      fromSender: fromSender,
    );
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_bytesPrefsKey(email, id), base64Encode(bytes));
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<NgmyDocShareItem?> addFromPlatformFile({
    required String email,
    required PlatformFile file,
    String? note,
  }) async {
    final bytes = file.bytes;
    if (bytes == null || bytes.isEmpty) return null;
    final mime = _guessMime(file.name, file.extension);
    return addBytes(email: email, name: file.name, mime: mime, bytes: bytes, note: note);
  }

  static String _guessMime(String name, String? ext) {
    final lower = (ext ?? name.split('.').last).toLowerCase();
    switch (lower) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'mp4':
        return 'video/mp4';
      case 'pdf':
        return 'application/pdf';
      default:
        return 'application/octet-stream';
    }
  }

  static Future<Uint8List?> readBytes(String email, NgmyDocShareItem item) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_bytesPrefsKey(email, item.id));
    if (raw == null || raw.isEmpty) return null;
    try {
      return base64Decode(raw);
    } catch (_) {
      return null;
    }
  }

  static Future<void> delete(String email, String id) async {
    final items = await _readIndex(email);
    items.removeWhere((e) => e.id == id);
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_bytesPrefsKey(email, id));
    await _writeIndex(email, items);
  }

  static Future<String> saveToDevice(String email, NgmyDocShareItem item) async {
    final bytes = await readBytes(email, item);
    if (bytes == null || bytes.isEmpty) return 'File not found on this device.';
    final safeName = item.name.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    return _downloadBytesWeb(bytes, safeName, mime: item.mime);
  }
}
