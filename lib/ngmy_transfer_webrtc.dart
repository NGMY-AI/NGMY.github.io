import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_transfer_p2p_web.dart' as p2p;

/// Fast peer transfer — optimized 1 MiB chunks, ~1.8s ICE cap (AirDrop-style on same Wi‑Fi).
class NgmyTransferWebRtc {
  static bool get isSupported => kIsWeb;

  static Future<({String offerToken})?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async {
    if (!kIsWeb || items.isEmpty) return null;
    await stopSend();
    final token = await p2p.createTransferOffer(ownerEmail: ownerEmail, items: items);
    if (token == null || token.isEmpty) return null;
    return (offerToken: token);
  }

  static Future<void> stopSend() => p2p.stopTransferP2p();

  static Future<bool> applyAnswerWhenReady(String offerToken) async {
    return p2p.applyTransferAnswer(offerToken);
  }

  static Future<List<NgmyDocShareItem>> receive({
    required String recipientEmail,
    required String offerToken,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
  }) async {
    onStatus?.call('Connecting…');
    final session = await p2p.beginTransferReceive(
      offerToken: offerToken,
      recipientEmail: recipientEmail,
      onProgress: onProgress,
      onBytes: onBytes == null
          ? null
          : (fileIndex, receivedBytes, totalBytes) {
              onBytes('file', receivedBytes, totalBytes);
            },
    );
    if (session == null) {
      onStatus?.call('Could not connect. Sender must tap Start transfer and keep that screen open.');
      return [];
    }

    onStatus?.call('Receiving…');
    var imported = <NgmyDocShareItem>[];
    try {
      imported = await session.transfer.timeout(
        const Duration(minutes: 15),
        onTimeout: () => <NgmyDocShareItem>[],
      );
    } catch (_) {
      imported = [];
    }

    if (imported.isEmpty) {
      onStatus?.call('Transfer failed or timed out. Same Wi‑Fi and keep both screens open.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
