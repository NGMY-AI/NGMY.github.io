import 'ngmy_doc_share_models.dart';

class NgmyTransferWebRtc {
  static bool get isSupported => false;

  static Future<({String offerToken})?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async =>
      null;

  static Future<void> stopSend() async {}

  static Future<void> applyAnswerWhenReady(String offerToken) async {}

  static Future<List<NgmyDocShareItem>> receive({
    required String recipientEmail,
    required String offerToken,
    void Function(int received, int total)? onProgress,
    void Function(String status)? onStatus,
  }) async =>
      [];
}
