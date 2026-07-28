import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:image/image.dart' as img;

import 'ngmy_worksheet_thumb_store_io.dart'
    if (dart.library.html) 'ngmy_worksheet_thumb_store_web.dart' as platform;

/// Local worksheet photo refs — stored in IndexedDB (web) or app files (native).
const kNgmyWorksheetThumbBlobPrefix = 'ngmy:ws-thumb:';

bool ngmyIsWorksheetThumbBlobRef(String? ref) =>
    ref != null && ref.startsWith(kNgmyWorksheetThumbBlobPrefix);

String ngmyWorksheetThumbBlobRef(String id) => '$kNgmyWorksheetThumbBlobPrefix$id';

String? ngmyWorksheetThumbBlobId(String? ref) {
  if (!ngmyIsWorksheetThumbBlobRef(ref)) return null;
  return ref!.substring(kNgmyWorksheetThumbBlobPrefix.length);
}

class NgmyWorksheetThumbStore {
  static final Map<String, Uint8List> _ram = {};

  static String newId() {
    final t = DateTime.now().toUtc().microsecondsSinceEpoch;
    final r = math.Random().nextInt(999999);
    return 'wst_${t}_$r';
  }

  /// 16:9 cards — keep quality but small enough for unlimited local saves.
  static Uint8List compressForStorage(Uint8List raw) {
    try {
      final decoded = img.decodeImage(raw);
      if (decoded == null) return raw;
      var frame = decoded;
      const maxSide = 960;
      if (frame.width > maxSide || frame.height > maxSide) {
        frame = img.copyResize(
          frame,
          width: frame.width >= frame.height ? maxSide : null,
          height: frame.height > frame.width ? maxSide : null,
          interpolation: img.Interpolation.average,
        );
      }
      final jpg = img.encodeJpg(frame, quality: 82);
      if (jpg.isEmpty) return raw;
      return Uint8List.fromList(jpg);
    } catch (e) {
      debugPrint('[worksheet-thumb] compress failed: $e');
      return raw;
    }
  }

  static Future<bool> putBytes(String id, Uint8List bytes) async {
    if (id.trim().isEmpty || bytes.isEmpty) return false;
    final packed = compressForStorage(bytes);
    _ram[id.trim()] = packed;
    return platform.ngmyWorksheetThumbPutImpl(id.trim(), packed);
  }

  static Future<String?> persistDataUrl(String dataUrl) async {
    final raw = dataUrl.trim();
    if (!raw.startsWith('data:image')) return null;
    try {
      final payload = raw.contains(',') ? raw.split(',').last : raw;
      final bytes = base64Decode(payload);
      if (bytes.isEmpty) return null;
      final id = newId();
      final ok = await putBytes(id, bytes);
      if (!ok) return null;
      return ngmyWorksheetThumbBlobRef(id);
    } catch (e) {
      debugPrint('[worksheet-thumb] persistDataUrl failed: $e');
      return null;
    }
  }

  static Future<Uint8List?> getBytesForRef(String? ref) async {
    final id = ngmyWorksheetThumbBlobId(ref);
    if (id == null) return null;
    return getBytes(id);
  }

  static Future<Uint8List?> getBytes(String id) async {
    final key = id.trim();
    if (key.isEmpty) return null;
    final ram = _ram[key];
    if (ram != null && ram.isNotEmpty) return ram;
    final disk = await platform.ngmyWorksheetThumbGetImpl(key);
    if (disk != null && disk.isNotEmpty) {
      _ram[key] = disk;
      return disk;
    }
    return null;
  }

  static Future<String?> dataUrlForRef(String? ref) async {
    final raw = ref?.trim();
    if (raw == null || raw.isEmpty) return null;
    if (raw.startsWith('data:image')) return raw;
    final bytes = await getBytesForRef(raw);
    if (bytes == null || bytes.isEmpty) return null;
    return 'data:image/jpeg;base64,${base64Encode(bytes)}';
  }

  static Future<void> deleteRef(String? ref) async {
    final id = ngmyWorksheetThumbBlobId(ref);
    if (id == null) return;
    _ram.remove(id);
    await platform.ngmyWorksheetThumbDeleteImpl(id);
  }
}
