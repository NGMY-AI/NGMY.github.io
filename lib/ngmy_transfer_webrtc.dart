import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_webrtc_web.dart' as webrtc;

/// WebRTC fallback for web send; receive works on phone + web when sender uses web/WebRTC.
class NgmyTransferWebRtc {
  static bool get isSupported => kIsWeb;

  static String? _offerToken;

  static Future<({String offerToken})?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (!kIsWeb || items.isEmpty) return null;
    await stopSend();
    final qr = await webrtc.createShortOfferQr(ownerEmail: ownerEmail, items: items);
    if (qr == null) return null;
    const prefix = 'NGMYDOCSYNC3|';
    if (!qr.startsWith(prefix)) return null;
    final token = qr.substring(prefix.length).trim();
    if (token.isEmpty) return null;
    _offerToken = token;
    return (offerToken: token);
  }

  static Future<void> stopSend() async {
    _offerToken = null;
    await webrtc.stopWebRtc();
  }

  static Future<bool> applyAnswerWhenReady(String offerToken) async {
    final answerQr = await webrtc.pollAnswerForOffer(offerToken);
    if (answerQr == null) return false;
    await webrtc.applyAnswerQr(answerQr);
    return true;
  }

  static Future<List<NgmyDocShareItem>> receive({
    required String recipientEmail,
    required String offerToken,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
  }) async {
    onStatus?.call('Connecting peer link…');
    final raw = 'NGMYDOCSYNC3|$offerToken';
    final session = await webrtc.beginReceiveOffer(
      raw: raw,
      recipientEmail: recipientEmail,
      onProgress: onProgress,
    );
    if (session == null) {
      onStatus?.call('Could not connect. Sender must tap Start transfer and keep that screen open.');
      return [];
    }

    onStatus?.call('Link ready — receiving…');

    // Kick sender side: poll applies answer on sender; receiver waits for bytes.
    var imported = <NgmyDocShareItem>[];
    try {
      imported = await session.transfer.timeout(
        const Duration(minutes: 3),
        onTimeout: () => <NgmyDocShareItem>[],
      );
    } catch (_) {
      imported = [];
    }

    if (imported.isEmpty) {
      onStatus?.call('Transfer timed out or failed. Same Wi‑Fi helps. Sender must stay on Send screen.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
