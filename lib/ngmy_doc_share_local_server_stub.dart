import 'ngmy_doc_share_models.dart';

/// Web cannot host a local file server for peer transfer.
class NgmyDocShareLocalServer {
  static Future<({String qrPayload, int fileCount})?> start({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
  }) async =>
      null;

  static Future<void> stop() async {}

  static bool get isRunning => false;
}
