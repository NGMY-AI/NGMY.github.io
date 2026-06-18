import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_doc_share_relay.dart';

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

  /// Short LAN URLs → low QR version → thick modules on screen.
  static int qrVersionForData(String data) => QrVersions.auto;

  /// Display size — short payloads fill the circle with chunky squares.
  static double qrSizeForData(String data, {double maxSide = 256}) {
    final len = data.length;
    if (len < 120) return maxSide.clamp(228, 256);
    if (len < 350) return (maxSide - 10).clamp(218, 246);
    if (len < 800) return (maxSide - 18).clamp(208, 236);
    return (maxSide - 26).clamp(200, 228);
  }

  static int errorLevelForData(String data) {
    final len = data.length;
    if (len <= 120) return QrErrorCorrectLevel.H;
    if (len <= 400) return QrErrorCorrectLevel.M;
    return QrErrorCorrectLevel.L;
  }

  static bool showCenterLogo(String data) {
    if (data.startsWith('$kNgmyDocShareRelayOfferPrefix|') ||
        data.startsWith('$kNgmyDocShareRelayAnswerPrefix|') ||
        data.startsWith('NGMYDOCSYNC2|')) {
      return true;
    }
    return data.length <= 200;
  }

  static double logoSizeFraction(String data) {
    if (data.length <= 30) return 0.24;
    if (data.length <= 120) return 0.22;
    if (data.length <= 400) return 0.16;
    return 0.12;
  }

  /// Strip non-essential SDP lines so WebRTC QRs stay smaller.
  static String minifySdp(String sdp) {
    final out = <String>[];
    var candidates = 0;
    const maxCandidates = 2;
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
        if (candidates >= maxCandidates) continue;
        candidates++;
      }
      out.add(l);
    }
    return out.join('\n');
  }
}
