import 'ngmy_doc_share_models.dart';
import 'ngmy_transfer_download.dart';
import 'ngmy_transfer_rendezvous.dart';
import 'ngmy_transfer_server.dart';

class NgmyTransferSendSession {
  NgmyTransferSendSession({
    required this.code,
    required this.transferKey,
    required this.fileCount,
    required this.totalBytes,
  });

  final String code;
  final String transferKey;
  final int fileCount;
  final int totalBytes;

  void Function(int sent, int total)? onFileComplete;
}

class NgmyTransfer {
  static NgmyTransferSendSession? _activeSend;

  static NgmyTransferSendSession? get activeSend => _activeSend;

  static Future<NgmyTransferSendSession?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    void Function(int sent, int total)? onFileComplete,
  }) async {
    if (items.isEmpty) return null;
    if (!NgmyTransferServer.isSupported) return null;

    await stopSend();

    final transferKey = NgmyTransferRendezvous.generateTransferKey();
    final started = await NgmyTransferServer.start(
      ownerEmail: ownerEmail,
      transferKey: transferKey,
      items: items,
      onFileComplete: onFileComplete,
    );
    if (started == null) return null;

    final code = await NgmyTransferRendezvous.generateUniqueCode();
    if (code == null) {
      await NgmyTransferServer.stop();
      return null;
    }

    final files = NgmyTransferServer.manifestFiles();
    final published = await NgmyTransferRendezvous.publish(
      code: code,
      transferKey: transferKey,
      ownerEmail: ownerEmail,
      host: started.host,
      port: started.port,
      sessionId: started.sessionId,
      files: files,
    );
    if (!published) {
      await NgmyTransferServer.stop();
      return null;
    }

    NgmyTransferRendezvous.startHeartbeat(
      code: code,
      transferKey: transferKey,
      ownerEmail: ownerEmail,
      host: started.host,
      port: started.port,
      sessionId: started.sessionId,
      files: files,
    );

    final totalBytes = items.fold<int>(0, (sum, i) => sum + i.sizeBytes);
    final session = NgmyTransferSendSession(
      code: code,
      transferKey: transferKey,
      fileCount: items.length,
      totalBytes: totalBytes,
    );
    session.onFileComplete = onFileComplete;
    _activeSend = session;
    return session;
  }

  static Future<void> stopSend() async {
    final code = _activeSend?.code;
    _activeSend = null;
    NgmyTransferRendezvous.stopHeartbeat();
    await NgmyTransferServer.stop();
    if (code != null) {
      await NgmyTransferRendezvous.unpublish(code);
    }
  }

  static Future<List<NgmyDocShareItem>> receiveByCode({
    required String recipientEmail,
    required String code,
    void Function(int received, int total)? onProgress,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
    void Function(String status)? onStatus,
  }) async {
    final normalized = NgmyTransferRendezvous.normalizeInput(code);
    if (normalized == null) {
      onStatus?.call('Enter a valid 6-digit code.');
      return [];
    }

    onStatus?.call('Looking up session…');
    Map<String, dynamic>? row;
    for (var attempt = 0; attempt < 8; attempt++) {
      row = await NgmyTransferRendezvous.lookup(normalized);
      if (row != null) break;
      await Future<void>.delayed(Duration(milliseconds: 600 + attempt * 400));
    }
    if (row == null) {
      onStatus?.call('Code not found. Check the number and ask sender to keep NGMY Transfer open.');
      return [];
    }

    final transferKey = (row['transferKey'] ?? '').toString();
    final host = (row['host'] ?? '').toString();
    final port = (row['port'] as num?)?.toInt() ?? 0;
    final sessionId = (row['sessionId'] ?? '').toString();
    final ownerEmail = (row['ownerEmail'] ?? '').toString();
    if (transferKey.isEmpty || host.isEmpty || port <= 0 || sessionId.isEmpty) {
      onStatus?.call('Session incomplete. Sender must restart NGMY Transfer.');
      return [];
    }

    final expiresRaw = (row['expiresAt'] ?? '').toString();
    if (expiresRaw.isNotEmpty) {
      final expires = DateTime.tryParse(expiresRaw);
      if (expires != null && DateTime.now().toUtc().isAfter(expires)) {
        onStatus?.call('Session expired. Ask sender to send again.');
        return [];
      }
    }

    final manifestUri = Uri.parse('http://$host:$port/$sessionId/manifest.json');
    onStatus?.call('Connecting on Wi‑Fi…');

    Map<String, dynamic>? manifest;
    for (var attempt = 0; attempt < 6; attempt++) {
      manifest = await NgmyTransferDownload.fetchManifest(
        manifestUri: manifestUri,
        transferKey: transferKey,
      );
      if (manifest != null) break;
      onStatus?.call('Connecting… same Wi‑Fi or hotspot (${attempt + 1}/6)');
      await Future<void>.delayed(const Duration(seconds: 2));
    }
    if (manifest == null) {
      onStatus?.call(
        'Could not reach sender. Use the same Wi‑Fi or phone hotspot and keep the sender on NGMY Transfer.',
      );
      return [];
    }

    final files = manifest['files'];
    if (files is! List || files.isEmpty) {
      onStatus?.call('No files in this session.');
      return [];
    }

    onStatus?.call('Receiving ${files.length} file(s)…');
    final imported = await NgmyTransferDownload.pullAll(
      recipientEmail: recipientEmail,
      manifestUri: manifestUri,
      files: files,
      ownerEmail: ownerEmail,
      transferKey: transferKey,
      onProgress: onProgress,
      onBytes: onBytes,
    );

    if (imported.isEmpty) {
      onStatus?.call('Transfer failed. Keep both phones on the same network and try again.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
