import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:gal/gal.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_doc_share_models.dart';

String _emailKey(String email) => email.toLowerCase().trim();

String _indexPrefsKey(String email) => 'ngmy_doc_share_index_v1_${_emailKey(email)}';

Future<Directory> _userDir(String email) async {
  final docs = await getApplicationDocumentsDirectory();
  final dir = Directory('${docs.path}/ngmy_doc_share/${_emailKey(email)}');
  if (!await dir.exists()) await dir.create(recursive: true);
  return dir;
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

File _fileForItem(Directory root, NgmyDocShareItem item) => File('${root.path}/${item.id}.bin');

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
    final root = await _userDir(email);
    await _fileForItem(root, item).writeAsBytes(bytes, flush: true);
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<NgmyDocShareItem?> addFromPlatformFile({
    required String email,
    required PlatformFile file,
    String? note,
  }) async {
    Uint8List? bytes = file.bytes;
    if ((bytes == null || bytes.isEmpty) && file.path != null && !kIsWeb) {
      bytes = await File(file.path!).readAsBytes();
    }
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
      case 'gif':
        return 'image/gif';
      case 'webp':
        return 'image/webp';
      case 'mp4':
        return 'video/mp4';
      case 'mov':
        return 'video/quicktime';
      case 'pdf':
        return 'application/pdf';
      case 'txt':
        return 'text/plain';
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      default:
        return 'application/octet-stream';
    }
  }

  static Future<Uint8List?> readBytes(String email, NgmyDocShareItem item) async {
    final root = await _userDir(email);
    final f = _fileForItem(root, item);
    if (!await f.exists()) return null;
    return f.readAsBytes();
  }

  static Future<void> delete(String email, String id) async {
    final items = await _readIndex(email);
    final idx = items.indexWhere((e) => e.id == id);
    if (idx < 0) return;
    final removed = items.removeAt(idx);
    final root = await _userDir(email);
    final f = _fileForItem(root, removed);
    if (await f.exists()) await f.delete();
    await _writeIndex(email, items);
  }

  static Future<String> saveToDevice(String email, NgmyDocShareItem item) async {
    final bytes = await readBytes(email, item);
    if (bytes == null || bytes.isEmpty) return 'File not found on this device.';
    final safeName = item.name.replaceAll(RegExp(r'[^\w\-.]+'), '_');

    if (!kIsWeb && (Platform.isAndroid || Platform.isIOS)) {
      if (item.isImage) {
        final hasAccess = await Gal.hasAccess();
        if (!hasAccess) await Gal.requestAccess();
        await Gal.putImageBytes(bytes, name: safeName);
        return 'Saved to your photo gallery.';
      }
      if (item.isVideo) {
        final hasAccess = await Gal.hasAccess(toAlbum: true);
        if (!hasAccess) await Gal.requestAccess(toAlbum: true);
        final root = await _userDir(email);
        final temp = File('${root.path}/export_$safeName');
        await temp.writeAsBytes(bytes, flush: true);
        await Gal.putVideo(temp.path);
        return 'Saved to your photo gallery.';
      }
    }

    return _saveBytesToDownloads(bytes, safeName);
  }

  static Future<String> _saveBytesToDownloads(List<int> bytes, String filename) async {
    final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    Directory dir;
    if (Platform.isWindows) {
      final root = Platform.environment['USERPROFILE'];
      dir = Directory(root != null && root.isNotEmpty ? '$root\\Downloads' : '.');
    } else {
      final root = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '.';
      dir = Directory('$root${Platform.pathSeparator}Downloads');
    }
    await dir.create(recursive: true);
    final file = File('${dir.path}${Platform.pathSeparator}$safeName');
    await file.writeAsBytes(bytes, flush: true);
    return 'Saved to ${file.path}';
  }
}
