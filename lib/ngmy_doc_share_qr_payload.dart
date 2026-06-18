import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:qr_flutter/qr_flutter.dart';

/// Gzip + base64 so WebRTC / large Doc Share QRs stay sparse and easy to scan.
class NgmyDocShareQrPayload {
  static String gzipBase64(String text) {
    final encoded = GZipEncoder().encode(utf8.encode(text));
    if (encoded == null || encoded.isEmpty) return base64Encode(utf8.encode(text));
    return base64Encode(encoded);
  }

  static String gunzipBase64(String b64) {
    final raw = base64Decode(b64);
    try {
      return utf8.decode(GZipDecoder().decodeBytes(raw));
    } catch (_) {
      return utf8.decode(raw);
    }
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

  /// Physical QR size — larger modules = easier phone scanning.
  static double qrSizeForData(String data) {
    final len = data.length;
    if (len < 80) return 400;
    if (len < 180) return 460;
    if (len < 400) return 520;
    if (len < 900) return 580;
    if (len < 1800) return 640;
    return 700;
  }

  /// Dense WebRTC payloads need lower EC so data fits; short LAN URLs use H + logo.
  static int errorLevelForData(String data) {
    final len = data.length;
    if (len <= 100) return QrErrorCorrectLevel.H;
    if (len <= 350) return QrErrorCorrectLevel.M;
    return QrErrorCorrectLevel.L;
  }

  static bool showCenterLogo(String data) => data.length <= 700;

  static double logoSizeFraction(String data) {
    if (data.length <= 100) return 0.14;
    if (data.length <= 350) return 0.11;
    return 0.09;
  }

  /// Strip non-essential SDP lines so WebRTC QRs stay smaller.
  static String minifySdp(String sdp) {
    final out = <String>[];
    var candidates = 0;
    const maxCandidates = 4;
    for (final line in sdp.split('\n')) {
      final l = line.trim();
      if (l.isEmpty) continue;
      if (l.startsWith('a=extmap')) continue;
      if (l.startsWith('a=ssrc')) continue;
      if (l.startsWith('a=msid')) continue;
      if (l.startsWith('a=rtcp')) continue;
      if (l.startsWith('a=rtpmap')) continue;
      if (l.startsWith('a=fmtp')) continue;
      if (l.startsWith('a=rtcp-fb')) continue;
      if (l.startsWith('a=mid:')) continue;
      if (l.startsWith('a=group:')) continue;
      if (l.startsWith('a=candidate')) {
        if (candidates >= maxCandidates) continue;
        candidates++;
      }
      out.add(l);
    }
    return out.join('\n');
  }
}
