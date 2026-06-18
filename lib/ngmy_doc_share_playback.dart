import 'dart:typed_data';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_playback_io.dart' if (dart.library.html) 'ngmy_doc_share_playback_web.dart' as playback;

/// Resolves a local video URI for in-app playback (file path or blob URL).
class NgmyDocSharePlayback {
  static Future<String?> videoUri({
    required String email,
    required NgmyDocShareItem item,
    required Future<Uint8List?> Function() readBytes,
  }) async {
    if (!item.isVideo) return null;
    return playback.resolveVideoUri(email: email, item: item, readBytes: readBytes);
  }

  static void revokeUri(String? uri) => playback.revokeVideoUri(uri);
}
