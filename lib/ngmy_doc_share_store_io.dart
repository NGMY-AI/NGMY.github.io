import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:gal/gal.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_doc_share_models.dart';

String _emailKey(String email) => email.toLowerCase().trim();

String _indexPrefsKey(String email) => 'ngmy_doc_share_index_v1_${_emailKey(email)}';

String _newId() => '${DateTime.now().microsecondsSinceEpoch}_${Random().nextInt(99999)}';

String _safeExt(String name) {
  final dot = name.lastIndexOf('.');
  if (dot <= 0 || dot >= name.length - 1) return 'bin';
  final ext = name.substring(dot + 1).replaceAll(RegExp(r'[^\w]+'), '').toLowerCase();
  return ext.isEmpty ? 'bin' : ext;
}

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

Future<File?> _fileForId(Directory root, String id) async {
  await for (final entity in root.list()) {
    if (entity is File && entity.uri.pathSegments.last.startsWith('$id.')) {
      return entity;
    }
  }
  final legacy = File('${root.path}/$id.bin');
  if (await legacy.exists()) return legacy;
  return null;
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
    );
    final root = await _userDir(email);
    final ext = _safeExt(item.name);
    await File('${root.path}/$id.$ext').writeAsBytes(bytes, flush: true);
    final items = await _readIndex(email)..add(item);
    await _writeIndex(email, items);
    return item;
  }

  static Future<int> addFromDirectory({
    required String email,
    required String dirPath,
  }) async {
    if (email.trim().isEmpty || dirPath.trim().isEmpty) return 0;
    final root = Directory(dirPath);
    if (!await root.exists()) return 0;
    final folderName = root.uri.pathSegments.where((s) => s.isNotEmpty).lastOrNull ?? 'folder';
    var count = 0;
    await for (final entity in root.list(recursive: true, followLinks: false)) {
      if (entity is! File) continue;
      final relative = entity.path.replaceFirst(root.path, '').replaceAll('\\', '/').replaceFirst(RegExp(r'^/'), '');
      final displayName = relative.isEmpty ? entity.uri.pathSegments.last : '$folderName/$relative';
      final bytes = await entity.length();
      if (bytes <= 0) continue;
      final mime = _guessMime(displayName, null);
      final id = _newId();
      final item = NgmyDocShareItem(
        id: id,
        name: displayName,
        mime: mime,
        sizeBytes: bytes,
        createdAt: DateTime.now().toUtc().toIso8601String(),
        note: 'From folder',
      );
      final userRoot = await _userDir(email);
      final ext = _safeExt(displayName);
      await entity.copy('${userRoot.path}/$id.$ext');
      final items = await _readIndex(email)..add(item);
      await _writeIndex(email, items);
      count++;
    }
    return count;
  }

  static Future<int> addWebFolderFiles({
    required String email,
    required List<dynamic> files,
  }) async =>
      0;

  static Future<NgmyDocShareItem?> addFromPlatformFile({
    required String email,
    required PlatformFile file,
    String? note,
  }) async {
    final mime = _guessMime(file.name, file.extension);
    final name = file.name.trim().isEmpty ? 'file' : file.name.trim();

    if (!kIsWeb && file.path != null && file.path!.isNotEmpty) {
      final src = File(file.path!);
      if (await src.exists()) {
        final id = _newId();
        final size = await src.length();
        if (size <= 0) return null;
        final item = NgmyDocShareItem(
          id: id,
          name: name,
          mime: mime,
          sizeBytes: size,
          createdAt: DateTime.now().toUtc().toIso8601String(),
          note: note,
        );
        final root = await _userDir(email);
        final ext = _safeExt(name);
        await src.copy('${root.path}/$id.$ext');
        final items = await _readIndex(email)..add(item);
        await _writeIndex(email, items);
        return item;
      }
    }

    Uint8List? bytes = file.bytes;
    if (bytes == null || bytes.isEmpty) return null;
    return addBytes(email: email, name: name, mime: mime, bytes: bytes, note: note);
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
      case 'heic':
        return 'image/heic';
      case 'mp4':
      case 'm4v':
        return 'video/mp4';
      case 'mov':
        return 'video/quicktime';
      case 'webm':
        return 'video/webm';
      case 'avi':
        return 'video/x-msvideo';
      case 'mkv':
        return 'video/x-matroska';
      case 'pdf':
        return 'application/pdf';
      case 'txt':
        return 'text/plain';
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'xls':
        return 'application/vnd.ms-excel';
      case 'xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case 'zip':
        return 'application/zip';
      default:
        return 'application/octet-stream';
    }
  }

  static Future<Uint8List?> readBytes(String email, NgmyDocShareItem item) async {
    final root = await _userDir(email);
    final f = await _fileForId(root, item.id);
    if (f == null) return null;
    return f.readAsBytes();
  }

  static Future<Uint8List?> readByteRange(String email, NgmyDocShareItem item, int start, int end) async {
    if (end <= start) return Uint8List(0);
    final root = await _userDir(email);
    final f = await _fileForId(root, item.id);
    if (f == null) return null;
    final len = await f.length();
    if (start >= len) return null;
    final safeEnd = end > len ? len : end;
    return f.openRead(start, safeEnd).fold<BytesBuilder>(
      BytesBuilder(copy: false),
      (b, data) {
        b.add(data);
        return b;
      },
    ).then((b) => Uint8List.fromList(b.takeBytes()));
  }

  /// Stream HTTP body straight to disk — fast for large videos (AirDrop-style).
  static Future<NgmyDocShareItem?> addFromHttpStream({
    required String email,
    required String name,
    required String mime,
    required Stream<List<int>> stream,
    int? contentLength,
    String? note,
    String? fromSender,
  }) async {
    if (email.trim().isEmpty) return null;
    final id = _newId();
    final item = NgmyDocShareItem(
      id: id,
      name: name.trim().isEmpty ? 'file' : name.trim(),
      mime: mime.trim().isEmpty ? 'application/octet-stream' : mime.trim(),
      sizeBytes: contentLength ?? 0,
      createdAt: DateTime.now().toUtc().toIso8601String(),
      note: note,
      fromSender: fromSender,
    );
    final root = await _userDir(email);
    final ext = _safeExt(item.name);
    final out = File('${root.path}/$id.$ext');
    final sink = out.openWrite();
    try {
      await stream.pipe(sink);
      await sink.close();
      final size = await out.length();
      if (size <= 0) {
        await out.delete();
        return null;
      }
      final saved = NgmyDocShareItem(
        id: item.id,
        name: item.name,
        mime: item.mime,
        sizeBytes: size,
        createdAt: item.createdAt,
        note: item.note,
        fromSender: item.fromSender,
      );
      final items = await _readIndex(email)..add(saved);
      await _writeIndex(email, items);
      return saved;
    } catch (_) {
      try {
        await sink.close();
        if (await out.exists()) await out.delete();
      } catch (_) {}
      return null;
    }
  }

  static Future<String?> filePath(String email, NgmyDocShareItem item) async {
    final root = await _userDir(email);
    final f = await _fileForId(root, item.id);
    return f?.path;
  }

  static Future<void> delete(String email, String id) async {
    final items = await _readIndex(email);
    final idx = items.indexWhere((e) => e.id == id);
    if (idx < 0) return;
    items.removeAt(idx);
    final root = await _userDir(email);
    final f = await _fileForId(root, id);
    if (f != null && await f.exists()) await f.delete();
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
        final path = await filePath(email, item);
        if (path != null) {
          await Gal.putVideo(path);
          return 'Saved to your photo gallery.';
        }
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
