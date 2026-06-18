import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_lan_download.dart';
import 'ngmy_doc_share_local_server.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_doc_share_qr_stash.dart' show NgmyDocShareQrStash, kNgmyDocShareQrPrefixCloud, kNgmyDocShareCloudStashMaxBytes;
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_web.dart' as webrtc;

const String kNgmyDocShareQrPrefixLan = 'N2';
const String kNgmyDocShareQrPrefixLanLegacy = 'NGMYDOCSYNC2';
const String kNgmyDocShareQrPrefixInline = 'NGMYDOCSYNC0';
const String kNgmyDocShareBundleMarker = 'ngmyDocShareBundle';
const int kNgmyDocShareInlineQrMaxChars = 800;
const int kNgmyDocShareInlineMaxBytes = 2048;
/// Above this, QR modules shrink — Advisors-style big dots need a short payload.
const int kNgmyDocShareBrandedQrMaxPayloadChars = 80;

typedef NgmyDocShareQrResult = ({
  String qrPayload,
  int fileCount,
  NgmyDocShareQrMode mode,
});

enum NgmyDocShareQrMode { lanDirect, cloudStash, inlineInstant, webrtcLink }

class NgmyDocShareSync {
  static String _norm(String email) => email.toLowerCase().trim();

  /// Phone: local LAN (short QR). Web: cloud stash (short QR, same as Advisors). Never dense WebRTC in QR.
  static Future<NgmyDocShareQrResult?> createQrForItems({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty) return null;

    if (items.any((i) => i.isVideo)) {
      return _createQrForVideos(ownerEmail: ownerEmail, items: items);
    }

    final bundleJson = await exportBundleFile(ownerEmail: ownerEmail, items: items);
    try {
      final decoded = jsonDecode(bundleJson);
      final files = decoded is Map ? decoded['files'] : null;
      if (files is! List || files.isEmpty) return null;
    } catch (_) {
      return null;
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

    if (bundleJson.length <= kNgmyDocShareCloudStashMaxBytes) {
      final stash = await NgmyDocShareQrStash.createFromBundleJson(
        ownerEmail: ownerEmail,
        bundleJson: bundleJson,
        fileCount: items.length,
      );
      if (stash != null) {
        return (
          qrPayload: stash.qrPayload,
          fileCount: items.length,
          mode: NgmyDocShareQrMode.cloudStash,
        );
      }
    }

    return _tryInlineQr(ownerEmail: ownerEmail, items: items, bundleJson: bundleJson);
  }

  static bool payloadFitsBrandedQr(String payload) =>
      payload.trim().length <= kNgmyDocShareBrandedQrMaxPayloadChars;

  static Future<void> stopLanShare() async {
    await NgmyDocShareLocalServer.stop();
    await webrtc.stopWebRtc();
  }

  static Future<void> applyWebRtcAnswer(String raw) => webrtc.applyAnswerQr(raw);

  static Future<String?> pollWebRtcAnswer(String offerToken) => webrtc.pollAnswerForOffer(offerToken);

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

  /// Videos stream over LAN (phone) or WebRTC (web) — never embed file bytes in QR.
  static Future<NgmyDocShareQrResult?> _createQrForVideos({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (!await _itemsReadyForStreamTransfer(ownerEmail, items)) return null;

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
      final qr = await webrtc.createShortOfferQr(ownerEmail: ownerEmail, items: items);
      if (qr != null) {
        return (
          qrPayload: qr,
          fileCount: items.length,
          mode: NgmyDocShareQrMode.webrtcLink,
        );
      }
    }

    // LAN blocked (firewall / hotspot) — fall back to cloud-signaled WebRTC on phones too.
    if (!kIsWeb) {
      final qr = await webrtc.createShortOfferQr(ownerEmail: ownerEmail, items: items);
      if (qr != null) {
        return (
          qrPayload: qr,
          fileCount: items.length,
          mode: NgmyDocShareQrMode.webrtcLink,
        );
      }
    }

    return null;
  }

  static Future<bool> _itemsReadyForStreamTransfer(String ownerEmail, List<NgmyDocShareItem> items) async {
    for (final item in items) {
      if (item.sizeBytes <= 0) return false;
      final probe = await NgmyDocShareStore.readByteRange(ownerEmail, item, 0, 1);
      if (probe == null || probe.isEmpty) return false;
    }
    return true;
  }

  static Future<NgmyDocShareQrResult?> _tryInlineQr({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    String? bundleJson,
  }) async {
    if (items.length != 1) return null;
    final only = items.first;
    if (only.sizeBytes > kNgmyDocShareInlineMaxBytes) return null;
    final jsonText = bundleJson ?? await exportBundleFile(ownerEmail: ownerEmail, items: items);
    final payload = NgmyDocShareQrPayload.wrapCompressed(kNgmyDocShareQrPrefixInline, jsonText);
    if (payload.length > kNgmyDocShareInlineQrMaxChars) return null;
    return (
      qrPayload: payload,
      fileCount: items.length,
      mode: NgmyDocShareQrMode.inlineInstant,
    );
  }

  static String _lanFetchRoot(String baseUrl) {
    var root = baseUrl.trim().replaceAll(RegExp(r'/+$'), '');
    if (root.startsWith('$kNgmyDocShareQrPrefixLan|')) {
      root = root.substring(kNgmyDocShareQrPrefixLan.length + 1).trim();
    }
    const legacy = '$kNgmyDocShareQrPrefixLanLegacy|';
    if (root.startsWith(legacy)) {
      root = root.substring(legacy.length).trim();
    }
    if (!root.startsWith('http://') && !root.startsWith('https://')) {
      root = 'http://$root';
    }
    return root;
  }

  static Future<List<NgmyDocShareItem>?> importFromScan({
    required String recipientEmail,
    required String raw,
    void Function(int received, int total)? onProgress,
  }) async {
    var text = raw.trim();
    if (text.startsWith('\uFEFF')) text = text.substring(1);

    if (text.startsWith('$kNgmyDocShareQrPrefixCloud|')) {
      final token = text.substring(kNgmyDocShareQrPrefixCloud.length + 1).trim();
      try {
        final jsonText = await NgmyDocShareQrStash.consumeToken(token);
        if (jsonText == null) return null;
        onProgress?.call(1, 1);
        return importBundleText(recipientEmail: recipientEmail, jsonText: jsonText);
      } catch (e) {
        debugPrint('[doc share cloud qr] $e');
        return null;
      }
    }

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

    if (text.startsWith('$kNgmyDocShareQrPrefixLanLegacy|')) {
      final url = text.substring(kNgmyDocShareQrPrefixLanLegacy.length + 1).trim();
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: url, onProgress: onProgress);
    }

    final httpMatch = RegExp(r'https?://\S+').firstMatch(text);
    if (httpMatch != null) {
      var url = httpMatch.group(0)!;
      if (url.endsWith('/')) url = url.substring(0, url.length - 1);
      return _importFromLan(recipientEmail: recipientEmail, baseUrl: url, onProgress: onProgress);
    }

    if (text.contains(kNgmyDocShareBundleMarker)) {
      onProgress?.call(1, 1);
      return importBundleText(recipientEmail: recipientEmail, jsonText: text);
    }

    return null;
  }

  static Future<List<NgmyDocShareItem>?> _importFromLan({
    required String recipientEmail,
    required String baseUrl,
    void Function(int received, int total)? onProgress,
  }) async {
    final root = _lanFetchRoot(baseUrl);
    final sessionRoot = root.endsWith('manifest.json')
        ? root.substring(0, root.length - 'manifest.json'.length).replaceAll(RegExp(r'/+$'), '')
        : root;
    final manifestUri = Uri.parse('$sessionRoot/manifest.json');
    final bundleUri = Uri.parse('$sessionRoot/bundle.json');

    try {
      var decoded = await NgmyDocShareLanDownload.fetchManifest(manifestUri);
      decoded ??= await NgmyDocShareLanDownload.fetchManifest(Uri.parse(sessionRoot));
      if (decoded == null) return null;

      final files = decoded['files'];
      if (files is! List || files.isEmpty) return null;

      final owner = (decoded['ownerEmail'] ?? '').toString();
      var imported = await NgmyDocShareLanDownload.pullAll(
        recipientEmail: recipientEmail,
        manifestUri: manifestUri,
        files: files,
        ownerEmail: owner,
        onProgress: onProgress,
      );

      if (imported.isEmpty) {
        final bundleJson = await NgmyDocShareLanDownload.fetchText(bundleUri);
        if (bundleJson != null && bundleJson.contains(kNgmyDocShareBundleMarker)) {
          onProgress?.call(1, 1);
          imported = await importBundleText(recipientEmail: recipientEmail, jsonText: bundleJson) ?? [];
        }
      }

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
