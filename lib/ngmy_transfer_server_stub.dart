import 'ngmy_doc_share_models.dart';

/// Web cannot host a LAN socket server — send uses the phone app.
class NgmyTransferServer {
  static bool get isSupported => false;

  static bool get isRunning => false;

  static Future<({String host, int port, String sessionId})?> start({
    required String ownerEmail,
    required String transferKey,
    required List<NgmyDocShareItem> items,
    void Function(int sent, int total)? onFileComplete,
  }) async =>
      null;

  static List<Map<String, dynamic>> manifestFiles() => const [];

  static Future<void> stop() async {}
}
