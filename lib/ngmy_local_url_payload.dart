import 'dart:convert';

import 'ngmy_local_url_payload_stub.dart' if (dart.library.html) 'ngmy_local_url_payload_web.dart';

const int kNgmyLocalUrlPayloadMaxChars = 120000;

/// Packs menu/bio JSON into a link hash so guests can open it on any device without cloud.
String? ngmyBuildLocalUrlWithEmbeddedPayload(String baseUrl, Map<String, dynamic> data) {
  final base = baseUrl.trim();
  if (base.isEmpty) return null;
  try {
    final json = jsonEncode({'v': 1, 'data': data});
    if (json.length > kNgmyLocalUrlPayloadMaxChars) return null;
    final token = base64Url.encode(utf8.encode(json));
    final cleanBase = base.split('#').first;
    return '$cleanBase#d=$token';
  } catch (_) {
    return null;
  }
}

Map<String, dynamic>? ngmyDecodeLocalUrlPayload(String? token) {
  final raw = token?.trim();
  if (raw == null || raw.isEmpty) return null;
  try {
    var t = raw;
    if (t.startsWith('d=')) t = t.substring(2);
    final pad = t.length % 4;
    if (pad > 0) t = t.padRight(t.length + (4 - pad), '=');
    final decoded = jsonDecode(utf8.decode(base64Url.decode(t)));
    if (decoded is! Map) return null;
    final data = decoded['data'];
    if (data is! Map) return null;
    return Map<String, dynamic>.from(data);
  } catch (_) {
    return null;
  }
}

/// Reads `#d=…` from the launch URL (web) — works for any guest device.
Map<String, dynamic>? ngmyReadLocalPayloadFromLaunchUrl() {
  final token = ngmyReadLocalUrlPayloadTokenFromLaunch();
  return ngmyDecodeLocalUrlPayload(token);
}
