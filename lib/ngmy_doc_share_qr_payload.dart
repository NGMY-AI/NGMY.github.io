import 'dart:convert';

import 'package:archive/archive.dart';

/// Gzip helpers — works on web and mobile.
class NgmyDocShareQrPayload {
  static String gzipBase64(String text) {
    final bytes = GZipEncoder().encode(utf8.encode(text))!;
    return base64Encode(bytes);
  }

  static String gunzipBase64(String b64) {
    final raw = base64Decode(b64);
    return utf8.decode(GZipDecoder().decodeBytes(raw));
  }

  static String wrapCompressed(String prefix, String jsonText) {
    return '$prefix|z|${gzipBase64(jsonText)}';
  }

  /// Returns decoded JSON/text after [prefix]| or [prefix]|z| — null if not a match.
  static String? unwrapAfterPrefix(String raw, String prefix) {
    final text = raw.trim();
    final zHead = '$prefix|z|';
    if (text.startsWith(zHead)) {
      return gunzipBase64(text.substring(zHead.length));
    }
    final plainHead = '$prefix|';
    if (text.startsWith(plainHead)) {
      final body = text.substring(plainHead.length);
      try {
        return utf8.decode(base64Decode(body));
      } catch (_) {
        return body;
      }
    }
    return null;
  }

  /// Bigger payloads need a physically larger QR so cameras read them reliably.
  static double qrSizeForData(String data) {
    final len = data.length;
    if (len < 100) return 280;
    if (len < 300) return 310;
    if (len < 700) return 340;
    if (len < 1500) return 370;
    return 400;
  }
}
