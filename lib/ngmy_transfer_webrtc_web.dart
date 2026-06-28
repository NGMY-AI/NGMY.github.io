import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_webrtc_web.dart' as webrtc;

/// Browser send/receive for NGMY Transfer (WebRTC — works on ngmy.org and same Wi‑Fi).
class NgmyTransferWebRtc {
  static bool get isSupported => kIsWeb;

  static String? _offerToken;

  static Future<({String offerToken})?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (items.isEmpty) return null;
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

  static Future<void> applyAnswerWhenReady(String offerToken) async {
    final answerQr = await webrtc.pollAnswerForOffer(offerToken);
    if (answerQr != null) {
      await webrtc.applyAnswerQr(answerQr);
    }
  }

  static Future<List<NgmyDocShareItem>> receive({
    required String recipientEmail,
    required String offerToken,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
  }) async {
    onStatus?.call('Connecting…');
    final raw = 'NGMYDOCSYNC3|$offerToken';
    final session = await webrtc.beginReceiveOffer(
      raw: raw,
      recipientEmail: recipientEmail,
      onProgress: onProgress,
    );
    if (session == null) {
      onStatus?.call('Could not connect. Sender must keep the Send screen open.');
      return [];
    }

    onStatus?.call('Receiving files — keep this screen open…');
    final imported = await session.transfer.timeout(
      const Duration(hours: 6),
      onTimeout: () => <NgmyDocShareItem>[],
    );
    if (imported.isEmpty) {
      onStatus?.call('Transfer incomplete. Keep both screens open and try again.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
