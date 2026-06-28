import 'ngmy_doc_share_models.dart';
import 'ngmy_transfer_download.dart';
import 'ngmy_transfer_rendezvous.dart';
import 'ngmy_transfer_server.dart';
import 'ngmy_transfer_webrtc.dart';

enum NgmyTransferMode { lan, webrtc }

class NgmyTransferSendSession {
  NgmyTransferSendSession({
    required this.code,
    required this.transferKey,
    required this.fileCount,
    required this.totalBytes,
    required this.mode,
    this.offerToken,
  });

  final String code;
  final String transferKey;
  final int fileCount;
  final int totalBytes;
  final NgmyTransferMode mode;
  final String? offerToken;

  void Function(int sent, int total)? onFileComplete;
}

class NgmyTransfer {
  static NgmyTransferSendSession? _activeSend;

  static NgmyTransferSendSession? get activeSend => _activeSend;

  static List<Map<String, dynamic>> _fileManifest(List<NgmyDocShareItem> items) => items
      .map((e) => {'id': e.id, 'name': e.name, 'mime': e.mime, 'sizeBytes': e.sizeBytes})
      .toList();

  static Future<NgmyTransferSendSession?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    void Function(int sent, int total)? onFileComplete,
  }) async {
    if (items.isEmpty) return null;

    await stopSend();

    final transferKey = NgmyTransferRendezvous.generateTransferKey();
    final code = await NgmyTransferRendezvous.generateUniqueCode();
    if (code == null) return null;

    final totalBytes = items.fold<int>(0, (sum, i) => sum + i.sizeBytes);
    final manifest = _fileManifest(items);

    if (NgmyTransferServer.isSupported) {
      final started = await NgmyTransferServer.start(
        ownerEmail: ownerEmail,
        transferKey: transferKey,
        items: items,
        onFileComplete: onFileComplete,
      );
      if (started == null) return null;

      final lanFiles = NgmyTransferServer.manifestFiles();
      final published = await NgmyTransferRendezvous.publish(
        code: code,
        transferKey: transferKey,
        ownerEmail: ownerEmail,
        host: started.host,
        port: started.port,
        sessionId: started.sessionId,
        files: lanFiles.isNotEmpty ? lanFiles : manifest,
        mode: 'lan',
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
        files: lanFiles.isNotEmpty ? lanFiles : manifest,
        mode: 'lan',
      );

      final session = NgmyTransferSendSession(
        code: code,
        transferKey: transferKey,
        fileCount: items.length,
        totalBytes: totalBytes,
        mode: NgmyTransferMode.lan,
      );
      session.onFileComplete = onFileComplete;
      _activeSend = session;
      return session;
    }

    if (NgmyTransferWebRtc.isSupported) {
      final web = await NgmyTransferWebRtc.startSend(ownerEmail: ownerEmail, items: items);
      if (web == null) return null;

      final published = await NgmyTransferRendezvous.publish(
        code: code,
        transferKey: transferKey,
        ownerEmail: ownerEmail,
        host: '',
        port: 0,
        sessionId: '',
        files: manifest,
        mode: 'webrtc',
        offerToken: web.offerToken,
      );
      if (!published) {
        await NgmyTransferWebRtc.stopSend();
        return null;
      }

      NgmyTransferRendezvous.startHeartbeat(
        code: code,
        transferKey: transferKey,
        ownerEmail: ownerEmail,
        host: '',
        port: 0,
        sessionId: '',
        files: manifest,
        mode: 'webrtc',
        offerToken: web.offerToken,
      );

      final session = NgmyTransferSendSession(
        code: code,
        transferKey: transferKey,
        fileCount: items.length,
        totalBytes: totalBytes,
        mode: NgmyTransferMode.webrtc,
        offerToken: web.offerToken,
      );
      session.onFileComplete = onFileComplete;
      _activeSend = session;
      return session;
    }

    return null;
  }

  static Future<void> stopSend() async {
    final code = _activeSend?.code;
    _activeSend = null;
    NgmyTransferRendezvous.stopHeartbeat();
    await NgmyTransferServer.stop();
    await NgmyTransferWebRtc.stopSend();
    if (code != null) {
      await NgmyTransferRendezvous.unpublish(code);
    }
  }

  static Future<void> pollWebRtcAnswerIfNeeded(NgmyTransferSendSession session) async {
    if (session.mode != NgmyTransferMode.webrtc) return;
    final token = session.offerToken;
    if (token == null || token.isEmpty) return;
    await NgmyTransferWebRtc.applyAnswerWhenReady(token);
  }

  /// Poll until receiver connects or [maxWait] elapses (web/WebRTC send).
  static Future<bool> waitForWebRtcReceiver(
    NgmyTransferSendSession session, {
    Duration maxWait = const Duration(seconds: 45),
  }) async {
    if (session.mode != NgmyTransferMode.webrtc) return true;
    final token = session.offerToken;
    if (token == null || token.isEmpty) return false;
    final deadline = DateTime.now().add(maxWait);
    while (DateTime.now().isBefore(deadline)) {
      if (await NgmyTransferWebRtc.applyAnswerWhenReady(token)) return true;
      await Future<void>.delayed(const Duration(milliseconds: 350));
    }
    return false;
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
      onStatus?.call('Enter the 6-digit number code from the sender.');
      return [];
    }

    onStatus?.call('Looking up code…');
    Map<String, dynamic>? row;
    for (var attempt = 0; attempt < 4; attempt++) {
      row = await NgmyTransferRendezvous.lookup(normalized);
      if (row != null) break;
      if (attempt < 3) {
        await Future<void>.delayed(const Duration(milliseconds: 350));
      }
    }
    if (row == null) {
      onStatus?.call('Code not found. Check the 6-digit number and ask sender to keep Send open.');
      return [];
    }

    final mode = (row['mode'] ?? 'lan').toString().toLowerCase();
    final ownerEmail = (row['ownerEmail'] ?? '').toString();

    final expiresRaw = (row['expiresAt'] ?? '').toString();
    if (expiresRaw.isNotEmpty) {
      final expires = DateTime.tryParse(expiresRaw);
      if (expires != null && DateTime.now().toUtc().isAfter(expires)) {
        onStatus?.call('Session expired. Ask sender to send again.');
        return [];
      }
    }

    if (mode == 'webrtc') {
      final offerToken = (row['offerToken'] ?? '').toString();
      if (offerToken.isEmpty) {
        onStatus?.call('Session not ready. Sender must tap Start transfer again.');
        return [];
      }
      return NgmyTransferWebRtc.receive(
        recipientEmail: recipientEmail,
        offerToken: offerToken,
        onProgress: onProgress,
        onStatus: onStatus,
        onBytes: onBytes,
      );
    }

    final transferKey = (row['transferKey'] ?? '').toString();
    final host = (row['host'] ?? '').toString();
    final port = (row['port'] as num?)?.toInt() ?? 0;
    final sessionId = (row['sessionId'] ?? '').toString();
    if (transferKey.isEmpty || host.isEmpty || port <= 0 || sessionId.isEmpty) {
      onStatus?.call('Session incomplete. Sender must restart NGMY Transfer Send.');
      return [];
    }

    final manifestUri = Uri.parse('http://$host:$port/$sessionId/manifest.json');
    onStatus?.call('Connecting on Wi‑Fi…');

    Map<String, dynamic>? manifest;
    for (var attempt = 0; attempt < 4; attempt++) {
      manifest = await NgmyTransferDownload.fetchManifest(
        manifestUri: manifestUri,
        transferKey: transferKey,
      );
      if (manifest != null) break;
      onStatus?.call('Connecting on Wi‑Fi…');
      if (attempt < 3) {
        await Future<void>.delayed(const Duration(milliseconds: 400));
      }
    }
    if (manifest == null) {
      onStatus?.call(
        'Could not reach sender. Same Wi‑Fi or hotspot — keep sender on the Send screen.',
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
      onStatus?.call('Transfer failed. Keep both devices on the same network and try again.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
