import 'dart:async';

import 'package:flutter/foundation.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_transfer_cloud_relay.dart';
import 'ngmy_transfer_download.dart';
import 'ngmy_transfer_rendezvous.dart';
import 'ngmy_transfer_server.dart';
import 'ngmy_transfer_webrtc.dart';

enum NgmyTransferMode { hybrid, lan, webrtc }

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

  bool get hasWebRtc => offerToken != null && offerToken!.isNotEmpty;
}

class NgmyTransfer {
  static NgmyTransferSendSession? _activeSend;

  static NgmyTransferSendSession? get activeSend => _activeSend;

  static List<Map<String, dynamic>> _fileManifest(List<NgmyDocShareItem> items) => items
      .map((e) => {'id': e.id, 'name': e.name, 'mime': e.mime, 'sizeBytes': e.sizeBytes})
      .toList();

  /// Start send — always creates a WebRTC session; native also starts LAN when possible.
  static Future<NgmyTransferSendSession?> startSend({
    required String ownerEmail,
    required List<NgmyDocShareItem> items,
    void Function(int sent, int total)? onFileComplete,
    void Function(int sentBytes, int totalBytes)? onSendBytes,
  }) async {
    if (items.isEmpty) return null;

    await stopSend();

    // Preload file bytes in background — never block showing the 6-digit code.
    unawaited(NgmyDocShareStore.preloadForTransfer(ownerEmail, items));

    final transferKey = NgmyTransferRendezvous.generateTransferKey();
    final totalBytes = items.fold<int>(0, (sum, i) => sum + i.sizeBytes);
    final manifest = _fileManifest(items);

    final codeFuture = NgmyTransferRendezvous.generateUniqueCode();
    final webrtcFuture = NgmyTransferWebRtc.startSend(
      ownerEmail: ownerEmail,
      items: items,
      onBytes: onSendBytes,
    );
    final lanFuture = NgmyTransferServer.isSupported
        ? NgmyTransferServer.start(
            ownerEmail: ownerEmail,
            transferKey: transferKey,
            items: items,
            onFileComplete: onFileComplete,
          )
        : Future<({String host, int port, String sessionId})?>.value(null);

    final code = await codeFuture;
    final web = await webrtcFuture;
    final lan = await lanFuture;

    if (code == null || web == null) {
      await NgmyTransferServer.stop();
      await NgmyTransferWebRtc.stopSend();
      return null;
    }

    final lanFiles = lan != null ? NgmyTransferServer.manifestFiles() : <Map<String, dynamic>>[];
    final mode = lan != null ? 'hybrid' : 'webrtc';
    final sessionMode = lan != null ? NgmyTransferMode.hybrid : NgmyTransferMode.webrtc;

    final published = await NgmyTransferRendezvous.publish(
      code: code,
      transferKey: transferKey,
      ownerEmail: ownerEmail,
      host: lan?.host ?? '',
      port: lan?.port ?? 0,
      sessionId: lan?.sessionId ?? '',
      files: lanFiles.isNotEmpty ? lanFiles : manifest,
      mode: mode,
      offerToken: web.offerToken,
    );
    if (!published) {
      await NgmyTransferServer.stop();
      await NgmyTransferWebRtc.stopSend();
      return null;
    }

    NgmyTransferRendezvous.startHeartbeat(
      code: code,
      transferKey: transferKey,
      ownerEmail: ownerEmail,
      host: lan?.host ?? '',
      port: lan?.port ?? 0,
      sessionId: lan?.sessionId ?? '',
      files: lanFiles.isNotEmpty ? lanFiles : manifest,
      mode: mode,
      offerToken: web.offerToken,
    );

    NgmyTransferCloudRelay.beginUpload(code: code, ownerEmail: ownerEmail, items: items);

    final session = NgmyTransferSendSession(
      code: code,
      transferKey: transferKey,
      fileCount: items.length,
      totalBytes: totalBytes,
      mode: sessionMode,
      offerToken: web.offerToken,
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
    await NgmyTransferWebRtc.stopSend();
    if (code != null) {
      await NgmyTransferRendezvous.unpublish(code);
      await NgmyTransferCloudRelay.clear(code);
    }
  }

  static Future<bool> waitForWebRtcReceiver(
    NgmyTransferSendSession session, {
    Duration maxWait = const Duration(minutes: 3),
  }) async {
    if (!session.hasWebRtc) return true;
    final token = session.offerToken!;
    final deadline = DateTime.now().add(maxWait);
    while (DateTime.now().isBefore(deadline)) {
      if (await NgmyTransferWebRtc.applyAnswerWhenReady(token)) return true;
      await Future<void>.delayed(const Duration(milliseconds: 250));
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
    for (var attempt = 0; attempt < 6; attempt++) {
      row = await NgmyTransferRendezvous.lookup(normalized);
      if (row != null) break;
      if (attempt < 5) {
        await Future<void>.delayed(const Duration(milliseconds: 300));
      }
    }
    if (row == null) {
      onStatus?.call('Code not found. Check the 6-digit number and ask sender to keep Send open.');
      return [];
    }

    final mode = (row['mode'] ?? 'webrtc').toString().toLowerCase();
    final ownerEmail = (row['ownerEmail'] ?? '').toString();
    final offerToken = (row['offerToken'] ?? '').toString();

    final expiresRaw = (row['expiresAt'] ?? '').toString();
    if (expiresRaw.isNotEmpty) {
      final expires = DateTime.tryParse(expiresRaw);
      if (expires != null && DateTime.now().toUtc().isAfter(expires)) {
        onStatus?.call('Session expired. Ask sender to send again.');
        return [];
      }
    }

    // WebRTC + cloud backup run together — whichever connects first wins.
    if (offerToken.isNotEmpty) {
      return _receiveHybrid(
        code: normalized,
        offerToken: offerToken,
        recipientEmail: recipientEmail,
        mode: mode,
        row: row,
        ownerEmail: ownerEmail,
        onProgress: onProgress,
        onBytes: onBytes,
        onStatus: onStatus,
      );
    }

    // LAN fallback — native app receiver on same Wi‑Fi as sender.
    return _receiveViaLan(
      row: row,
      recipientEmail: recipientEmail,
      ownerEmail: ownerEmail,
      onProgress: onProgress,
      onBytes: onBytes,
      onStatus: onStatus,
    );
  }

  static Future<List<NgmyDocShareItem>> _receiveHybrid({
    required String code,
    required String offerToken,
    required String recipientEmail,
    required String mode,
    required Map<String, dynamic> row,
    required String ownerEmail,
    void Function(int received, int total)? onProgress,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
    void Function(String status)? onStatus,
  }) async {
    final winner = Completer<List<NgmyDocShareItem>>();
    var settled = false;

    void finish(List<NgmyDocShareItem> items) {
      if (settled || items.isEmpty) return;
      settled = true;
      if (!winner.isCompleted) winner.complete(items);
    }

    onStatus?.call('Connecting…');

    // Cloud path — instant if backup already finished uploading.
    unawaited(() async {
      if (await NgmyTransferCloudRelay.isReady(code)) {
        onStatus?.call('Cloud backup ready — downloading…');
        final items = await NgmyTransferCloudRelay.importByCode(
          code: code,
          recipientEmail: recipientEmail,
          onProgress: onProgress,
          onStatus: onStatus,
          onBytes: onBytes,
          skipWait: true,
        );
        finish(items);
      }
    }());

    // Cloud path — wait for sender upload while receiver is connected.
    unawaited(() async {
      final items = await NgmyTransferCloudRelay.importByCode(
        code: code,
        recipientEmail: recipientEmail,
        onProgress: onProgress,
        onStatus: onStatus,
        onBytes: onBytes,
      );
      finish(items);
    }());

    // Direct peer path.
    unawaited(() async {
      final items = await NgmyTransferWebRtc.receive(
        recipientEmail: recipientEmail,
        offerToken: offerToken,
        onProgress: onProgress,
        onStatus: onStatus,
        onBytes: onBytes,
      );
      finish(items);
    }());

    List<NgmyDocShareItem> imported;
    try {
      imported = await winner.future.timeout(
        const Duration(minutes: 25),
        onTimeout: () => <NgmyDocShareItem>[],
      );
    } catch (_) {
      imported = [];
    }

    if (imported.isNotEmpty) return imported;

    if (mode == 'webrtc' || kIsWeb) {
      onStatus?.call(
        'Transfer failed. Sender must tap Start transfer and keep that screen open while you enter the code.',
      );
      return [];
    }

    onStatus?.call('Peer transfer failed — trying direct Wi‑Fi…');
    return _receiveViaLan(
      row: row,
      recipientEmail: recipientEmail,
      ownerEmail: ownerEmail,
      onProgress: onProgress,
      onBytes: onBytes,
      onStatus: onStatus,
    );
  }

  static Future<List<NgmyDocShareItem>> _receiveViaLan({
    required Map<String, dynamic> row,
    required String recipientEmail,
    required String ownerEmail,
    void Function(int received, int total)? onProgress,
    void Function(String fileName, int receivedBytes, int? totalBytes)? onBytes,
    void Function(String status)? onStatus,
  }) async {
    if (kIsWeb) {
      onStatus?.call('Could not connect. Use the NGMY app on your phone to receive, or both use ngmy.org.');
      return [];
    }

    final transferKey = (row['transferKey'] ?? '').toString();
    final host = (row['host'] ?? '').toString();
    final port = (row['port'] as num?)?.toInt() ?? 0;
    final sessionId = (row['sessionId'] ?? '').toString();
    if (transferKey.isEmpty || host.isEmpty || port <= 0 || sessionId.isEmpty) {
      onStatus?.call('Could not connect. Sender must tap Start transfer and keep that screen open.');
      return [];
    }

    final manifestUri = Uri.parse('http://$host:$port/$sessionId/manifest.json');
    onStatus?.call('Connecting on Wi‑Fi…');

    Map<String, dynamic>? manifest;
    for (var attempt = 0; attempt < 5; attempt++) {
      manifest = await NgmyTransferDownload.fetchManifest(
        manifestUri: manifestUri,
        transferKey: transferKey,
      );
      if (manifest != null) break;
      if (attempt < 4) {
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

    onStatus?.call('Receiving ${files.length} file(s) on Wi‑Fi…');
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
      onStatus?.call('Transfer failed. Same Wi‑Fi and keep both screens open.');
    } else {
      onStatus?.call('Received ${imported.length} file(s).');
    }
    return imported;
  }
}
