import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:qr_flutter/qr_flutter.dart';

/// Gzip + base64 so inline Doc Share QRs stay compact.
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

  /// Short LAN / relay codes → fewer modules → bigger squares on screen.
  static bool isThickPayload(String data) {
    final t = data.trim();
    return t.startsWith('N2|') ||
        t.startsWith('NGMYDOCSYNC1|') ||
        t.startsWith('NGMYDOCSYNC2|') ||
        t.startsWith('NGMYDOCSYNC0|') ||
        t.startsWith('NGMYDOCSYNC4|VT') ||
        t.startsWith('NGMYDOCSYNC3|WR') ||
        t.startsWith('NGMYDOCSYNC3A|WR') ||
        t.startsWith('http://');
  }

  static double qrSizeForData(String data, {double maxSide = 320}) {
    final len = data.length;
    if (len < 60) return maxSide.clamp(300, 340);
    if (len < 120) return maxSide.clamp(288, 320);
    if (len < 350) return (maxSide - 12).clamp(272, 304);
    if (len < 800) return (maxSide - 24).clamp(256, 288);
    return (maxSide - 36).clamp(240, 272);
  }

  static int errorLevelForData(String data) {
    if (isThickPayload(data)) return QrErrorCorrectLevel.H;
    final len = data.length;
    if (len <= 400) return QrErrorCorrectLevel.M;
    return QrErrorCorrectLevel.L;
  }

  static bool showCenterLogo(String data) => isThickPayload(data) || data.length <= 200;

  static double logoSizeFraction(String data) {
    if (data.length <= 40) return 0.26;
    if (data.length <= 120) return 0.22;
    if (data.length <= 400) return 0.16;
    return 0.12;
  }

  static String minifySdp(String sdp) {
    final out = <String>[];
    var candidates = 0;
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
      if (l.startsWith('a=setup:')) continue;
      if (l.startsWith('a=ice-options:')) continue;
      if (l.startsWith('a=candidate')) {
        if (candidates >= 2) continue;
        candidates++;
      }
      out.add(l);
    }
    return out.join('\n');
  }
}
