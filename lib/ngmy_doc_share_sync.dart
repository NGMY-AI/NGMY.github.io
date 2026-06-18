import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_lan_download.dart';
import 'ngmy_doc_share_local_server.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_web.dart' as webrtc;

const String kNgmyDocShareQrPrefixLan = 'NGMYDOCSYNC2';
const String kNgmyDocShareQrPrefixInline = 'NGMYDOCSYNC0';
const String kNgmyDocShareBundleMarker = 'ngmyDocShareBundle';
const int kNgmyDocShareInlineQrMaxChars = 2900;
const int _inlineMaxTotalBytes = 120000;

typedef NgmyDocShareQrResult = ({
  String qrPayload,
  int fileCount,
  NgmyDocShareQrMode mode,
});

enum NgmyDocShareQrMode { inlineInstant, lanDirect, webrtcLink, relayLink }

class NgmyDocShareSync {
  static String _norm(String email) => email.toLowerCase().trim();

  /// QR always works: LAN direct (native, any size) → WebRTC (web) → inline tiny fallback.
  static Future<NgmyDocShareQrResult?> createQrForItems({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty) return null;

    if (!kIsWeb) {
      final lan = await NgmyDocShareLocalServer.start(ownerEmail: ownerEmail, items: items);
      if (lan != null) {
        return (
          qrPayload: lan.qrPayload,
          fileCount: lan.fileCount,
          mode: NgmyDocShareQrMode.lanDirect,
        );
      }
    }

    if (kIsWeb) {
      final totalBytes = items.fold<int>(0, (s, e) => s + e.sizeBytes);
      if (totalBytes <= _inlineMaxTotalBytes && items.length <= 3) {
        final inline = await _tryInlineQr(ownerEmail: ownerEmail, items: items);
        if (inline != null) return inline;
      }
      final offer = await webrtc.createOfferQr(ownerEmail: ownerEmail, items: items);
      if (offer != null) {
        final mode = offer.startsWith('NGMYDOCSYNC4|')
            ? NgmyDocShareQrMode.relayLink
            : NgmyDocShareQrMode.webrtcLink;
        return (
          qrPayload: offer,
          fileCount: items.length,
          mode: mode,
        );
      }
    }

    final totalBytes = items.fold<int>(0, (s, e) => s + e.sizeBytes);
    if (totalBytes <= _inlineMaxTotalBytes && items.length <= 3) {
      final inline = await _tryInlineQr(ownerEmail: ownerEmail, items: items);
      if (inline != null) return inline;
    }

    if (!kIsWeb) {
      final lan = await NgmyDocShareLocalServer.start(ownerEmail: ownerEmail, items: items);
      if (lan != null) {
        return (
          qrPayload: lan.qrPayload,
          fileCount: lan.fileCount,
          mode: NgmyDocShareQrMode.lanDirect,
        );
      }
    }

    return null;
  }

  static Future<void> stopLanShare() async {
    await NgmyDocShareLocalServer.stop();
    await webrtc.stopWebRtc();
  }

  static Future<void> applyWebRtcAnswer(String raw) => webrtc.applyAnswerQr(raw);

  static Future<bool> waitForRelayAnswer() => webrtc.waitForRelayAnswer();

  static Future<({String answerQr, Future<List<NgmyDocShareItem>> transfer})?> beginWebRtcReceive({
    required String raw,
    required String recipientEmail,
    void Function(int received, int total)? onProgress,
  }) {
    return webrtc.beginReceiveOffer(
      raw: raw,
      recipientEmail: recipientEmail,
      onProgress: onProgress,
    );
  }

  static Future<NgmyDocShareQrResult?> _tryInlineQr({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    final jsonText = await exportBundleFile(ownerEmail: ownerEmail, items: items);
    final payload = NgmyDocShareQrPayload.wrapCompressed(kNgmyDocShareQrPrefixInline, jsonText);
    if (payload.length > kNgmyDocShareInlineQrMaxChars) return null;
    return (
      qrPayload: payload,
      fileCount: items.length,
      mode: NgmyDocShareQrMode.inlineInstant,
    );
  }

  static Future<List<NgmyDocShareItem>?> importFromScan({
    required String recipientEmail,
    required String raw,
    void Function(int received, int total)? onProgress,
  }) async {
    var text = raw.trim();
    if (text.startsWith('\uFEFF')) text = text.substring(1);

    if (text.startsWith('$kNgmyDocShareQrPrefixInline|')) {
      try {
        final jsonText = NgmyDocShareQrPayload.unwrapAfterPrefix(text, kNgmyDocShareQrPrefixInline);
        if (jsonText == null) return null;
        onProgress?.call(1, 1);
        return importBundleText(recipientEmail: recipientEmail, jsonText: jsonText);
      } catch (e) {
        debugPrint('[doc share inline qr] $e');
        return null;
      }
    }

    if (text.startsWith('$kNgmyDocShareQrPrefixLan|')) {
      final url = text.substring(kNgmyDocShareQrPrefixLan.length + 1).trim();
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: url, onProgress: onProgress);
    }

    if (text.startsWith('http://') || text.startsWith('https://')) {
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: text, onProgress: onProgress);
    }

    if (text.contains(kNgmyDocShareBundleMarker)) {
      return importBundleText(recipientEmail: recipientEmail, jsonText: text);
    }

    return null;
  }

  static Future<List<NgmyDocShareItem>?> _importFromLan({
    required String recipientEmail,
    required String baseUrl,
    void Function(int received, int total)? onProgress,
  }) async {
    final root = baseUrl.replaceAll(RegExp(r'/+$'), '');
    final manifestUri = root.endsWith('manifest.json') ? Uri.parse(root) : Uri.parse('$root/manifest.json');

    try {
      final decoded = await NgmyDocShareLanDownload.fetchManifest(manifestUri);
      if (decoded == null) return null;
      final files = decoded['files'];
      if (files is! List || files.isEmpty) return null;

      final owner = (decoded['ownerEmail'] ?? '').toString();
      final imported = await NgmyDocShareLanDownload.pullAll(
        recipientEmail: recipientEmail,
        manifestUri: manifestUri,
        files: files,
        ownerEmail: owner,
        onProgress: onProgress,
      );
      return imported.isEmpty ? null : imported;
    } catch (e) {
      debugPrint('[doc share lan import] $e');
      return null;
    }
  }

  static Future<String> exportBundleFile({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    final files = <Map<String, dynamic>>[];
    for (final item in items) {
      final bytes = await NgmyDocShareStore.readBytes(ownerEmail, item);
      if (bytes == null || bytes.isEmpty) continue;
      files.add({
        'name': item.name,
        'mime': item.mime,
        'sizeBytes': item.sizeBytes,
        'data': base64Encode(bytes),
      });
    }
    return jsonEncode({
      'marker': kNgmyDocShareBundleMarker,
      'version': 1,
      'ownerEmail': _norm(ownerEmail),
      'exportedAt': DateTime.now().toUtc().toIso8601String(),
      'files': files,
    });
  }

  static Future<List<NgmyDocShareItem>?> importBundleText({
    required String recipientEmail,
    required String jsonText,
  }) async {
    try {
      final decoded = jsonDecode(jsonText);
      if (decoded is! Map) return null;
      if ((decoded['marker'] ?? '').toString() != kNgmyDocShareBundleMarker) return null;
      final files = decoded['files'];
      if (files is! List) return null;
      final owner = (decoded['ownerEmail'] ?? '').toString();
      final imported = <NgmyDocShareItem>[];
      for (final raw in files) {
        if (raw is! Map) continue;
        final name = (raw['name'] ?? 'file').toString();
        final mime = (raw['mime'] ?? 'application/octet-stream').toString();
        final data = (raw['data'] ?? '').toString();
        if (data.isEmpty) continue;
        final bytes = base64Decode(data);
        final saved = await NgmyDocShareStore.addBytes(
          email: recipientEmail,
          name: name,
          mime: mime,
          bytes: bytes,
          fromSender: owner.isNotEmpty ? owner : null,
          note: 'Received via QR',
        );
        if (saved != null) imported.add(saved);
      }
      return imported.isEmpty ? null : imported;
    } catch (e) {
      debugPrint('[doc share bundle] $e');
      return null;
    }
  }
}
