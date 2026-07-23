import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:image/image.dart' as img;

import 'ngmy_communicate_chat_images_io.dart'
    if (dart.library.html) 'ngmy_communicate_chat_images_web.dart' as platform;

/// Local-only chat image blobs (IndexedDB on web, files on native).
/// Keeps SharedPreferences chat JSON small so pictures survive app restarts.
class NgmyCommunicateChatImageStore {
  static final Map<String, Uint8List> _ram = {};

  static String newId({String email = '', String profileId = ''}) {
    final t = DateTime.now().toUtc().microsecondsSinceEpoch;
    final r = math.Random().nextInt(999999);
    final e = email.toLowerCase().trim().hashCode.abs();
    final p = profileId.trim().hashCode.abs();
    return 'cimg_${e}_${p}_${t}_$r';
  }

  /// Compress for durable local storage (chat bubbles are ~220px wide).
  static Uint8List compressForStorage(Uint8List raw) {
    try {
      final decoded = img.decodeImage(raw);
      if (decoded == null) return raw;
      var frame = decoded;
      const maxSide = 720;
      if (frame.width > maxSide || frame.height > maxSide) {
        frame = img.copyResize(
          frame,
          width: frame.width >= frame.height ? maxSide : null,
          height: frame.height > frame.width ? maxSide : null,
          interpolation: img.Interpolation.average,
        );
      }
      final jpg = img.encodeJpg(frame, quality: 78);
      if (jpg.isEmpty) return raw;
      return Uint8List.fromList(jpg);
    } catch (_) {
      return raw;
    }
  }

  static Future<bool> putBytes(String id, Uint8List bytes) async {
    if (id.trim().isEmpty || bytes.isEmpty) return false;
    final packed = compressForStorage(bytes);
    _ram[id.trim()] = packed;
    return platform.ngmyCommChatImagePutImpl(id.trim(), packed);
  }

  static Future<bool> putBase64(String id, String b64) async {
    try {
      final bytes = base64Decode(b64.trim());
      if (bytes.isEmpty) return false;
      return putBytes(id, bytes);
    } catch (e) {
      debugPrint('[comm-chat-img] bad b64: $e');
      return false;
    }
  }

  static Future<Uint8List?> getBytes(String id) async {
    final key = id.trim();
    if (key.isEmpty) return null;
    final ram = _ram[key];
    if (ram != null && ram.isNotEmpty) return ram;
    final disk = await platform.ngmyCommChatImageGetImpl(key);
    if (disk != null && disk.isNotEmpty) {
      _ram[key] = disk;
      return disk;
    }
    return null;
  }

  static Future<String?> getBase64(String id) async {
    final bytes = await getBytes(id);
    if (bytes == null || bytes.isEmpty) return null;
    return base64Encode(bytes);
  }

  static Future<void> delete(String id) async {
    final key = id.trim();
    if (key.isEmpty) return;
    _ram.remove(key);
    await platform.ngmyCommChatImageDeleteImpl(key);
  }
}
