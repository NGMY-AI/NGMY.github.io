import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_transfer_p2p_web.dart' as p2p;

/// Peer transfer on web + native — works phone↔phone and browser↔phone.
class NgmyTransferWebRtc {
  static bool get isSupported => !kIsWeb || kIsWeb;

  static Future<({String offerToken})?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    void Function(int sentBytes, int totalBytes)? onBytes,
  }) async {
    if (items.isEmpty) return null;
    await stopSend();
    final token = await p2p.createTransferOffer(
      ownerEmail: ownerEmail,
      items: items,
      onBytes: onBytes,
    );
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
    onStatus?.call('Connecting peer‑to‑peer…');
    final session = await p2p.beginTransferReceive(
      offerToken: offerToken,
      recipientEmail: recipientEmail,
      onProgress: onProgress,
      onBytes: onBytes == null
          ? null
          : (fileName, receivedBytes, totalBytes) {
              onBytes(fileName, receivedBytes, totalBytes);
            },
    );
    if (session == null) {
      return [];
    }

    onStatus?.call('Receiving files…');
    var imported = <NgmyDocShareItem>[];
    try {
      imported = await session.transfer.timeout(
        const Duration(minutes: 15),
        onTimeout: () => <NgmyDocShareItem>[],
      );
    } catch (_) {
      imported = [];
    }

    if (imported.isNotEmpty) {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
