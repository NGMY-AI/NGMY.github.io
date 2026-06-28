import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_transfer_signal.dart';

const int _kMaxBufferedBytes = 6 * 1024 * 1024;

const Map<String, dynamic> _rtcConfig = {
  'iceServers': [
    {'urls': 'stun:stun.l.google.com:19302'},
    {'urls': 'stun:stun1.l.google.com:19302'},
    {
      'urls': 'turn:openrelay.metered.ca:80',
      'username': 'openrelayproject',
      'credential': 'openrelayproject',
    },
    {
      'urls': 'turn:openrelay.metered.ca:443',
      'username': 'openrelayproject',
      'credential': 'openrelayproject',
    },
  ],
  'iceCandidatePoolSize': 4,
};

RTCPeerConnection? _txPc;
RTCDataChannel? _txChannel;
List<NgmyDocShareItem> _txItems = [];
String? _txOwnerEmail;
String? _txOfferToken;
bool _txAnswerApplied = false;
RTCPeerConnection? _rxPc;
void Function(int sentBytes, int totalBytes)? _txBytesCallback;

Future<void> stopTransferP2p() async {
  final token = _txOfferToken;
  _txOfferToken = null;
  _txBytesCallback = null;
  if (token != null) {
    unawaited(NgmyTransferSignal.clear(token));
  }
  await _txChannel?.close();
  await _txPc?.close();
  await _rxPc?.close();
  _txPc = null;
  _txChannel = null;
  _txItems = [];
  _txOwnerEmail = null;
  _txAnswerApplied = false;
  _rxPc = null;
  NgmyDocShareStore.clearTransferReadCache();
}

Future<void> _waitIceBrief(RTCPeerConnection pc) async {
  if (pc.iceGatheringState == RTCIceGatheringState.RTCIceGatheringStateComplete) return;
  final c = Completer<void>();
  pc.onIceGatheringState = (state) {
    if (state == RTCIceGatheringState.RTCIceGatheringStateComplete && !c.isCompleted) {
      c.complete();
    }
  };
  await c.future.timeout(const Duration(milliseconds: 600), onTimeout: () {});
}

Future<void> _sendBinary(RTCDataChannel channel, Uint8List chunk) async {
  while ((channel.bufferedAmount ?? 0) > _kMaxBufferedBytes) {
    await Future<void>.delayed(const Duration(milliseconds: 2));
  }
  channel.send(RTCDataChannelMessage.fromBinary(chunk));
}

Future<String?> createTransferOffer({
  required String ownerEmail,
  required List<NgmyDocShareItem> items,
  void Function(int sentBytes, int totalBytes)? onBytes,
}) async {
  if (items.isEmpty) return null;
  await stopTransferP2p();

  _txItems = List.from(items);
  _txOwnerEmail = ownerEmail;
  _txBytesCallback = onBytes;

  unawaited(NgmyDocShareStore.preloadForTransfer(ownerEmail, items));

  final token = NgmyTransferSignal.generateToken();
  final pc = await createPeerConnection(_rtcConfig);
  _txPc = pc;
  final channel = await pc.createDataChannel(
    'ngmytransfer',
    RTCDataChannelInit()
      ..ordered = true
      ..maxRetransmits = 64,
  );
  _txChannel = channel;
  channel.onDataChannelState = (state) {
    if (state == RTCDataChannelState.RTCDataChannelOpen) {
      unawaited(_pushFilesFast(channel));
    }
  };

  final offer = await pc.createOffer({'offerToReceiveAudio': false, 'offerToReceiveVideo': false});
  await pc.setLocalDescription(offer);
  await _waitIceBrief(pc);

  final sdp = (await pc.getLocalDescription())?.sdp?.trim() ?? '';
  if (sdp.isEmpty) {
    await stopTransferP2p();
    return null;
  }

  final manifest = items.map((e) => [e.name, e.mime, e.sizeBytes]).toList();
  final inner = jsonEncode({'s': sdp, 'f': manifest});
  final stashed = await NgmyTransferSignal.stashOffer(token: token, ownerEmail: ownerEmail, innerJson: inner);
  if (stashed == null) {
    await stopTransferP2p();
    return null;
  }
  _txOfferToken = token;
  return token;
}

Future<bool> applyTransferAnswer(String offerToken) async {
  if (_txAnswerApplied) return true;
  final answerJson = await NgmyTransferSignal.pollAnswer(offerToken);
  if (answerJson == null || _txPc == null) return false;
  try {
    final decoded = jsonDecode(answerJson);
    if (decoded is! Map) return false;
    final sdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
    if (sdp.isEmpty) return false;
    await _txPc!.setRemoteDescription(RTCSessionDescription(sdp, 'answer'));
    _txAnswerApplied = true;
    return true;
  } catch (e) {
    debugPrint('[ngmy transfer p2p] answer: $e');
    return false;
  }
}

Future<void> _pushFilesFast(RTCDataChannel channel) async {
  final email = _txOwnerEmail;
  if (email == null) return;
  try {
    for (final item in _txItems) {
      final size = item.sizeBytes;
      if (size <= 0) continue;
      channel.send(RTCDataChannelMessage(jsonEncode({
        'type': 'meta',
        'name': item.name,
        'mime': item.mime,
        'size': size,
      })));

      var sent = 0;
      await for (final chunk in NgmyDocShareStore.readFileStream(email, item)) {
        if (chunk.isEmpty) continue;
        await _sendBinary(channel, chunk);
        sent += chunk.length;
        _txBytesCallback?.call(sent, size);
      }
    }
    channel.send(RTCDataChannelMessage(jsonEncode({'type': 'done'})));
  } catch (e) {
    debugPrint('[ngmy transfer p2p] send: $e');
  } finally {
    NgmyDocShareStore.clearTransferReadCache();
  }
}

Future<({Future<List<NgmyDocShareItem>> transfer})?> beginTransferReceive({
  required String offerToken,
  required String recipientEmail,
  void Function(int received, int total)? onProgress,
  void Function(int fileIndex, int receivedBytes, int totalBytes)? onBytes,
}) async {
  final jsonText = await NgmyTransferSignal.consumeOffer(offerToken);
  if (jsonText == null) return null;

  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return null;
  final offerSdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  final manifest = decoded['f'] ?? decoded['manifest'];
  if (offerSdp.isEmpty || manifest is! List) return null;
  final total = manifest.length;

  final pc = await createPeerConnection(_rtcConfig);
  _rxPc = pc;

  var pendingName = 'file';
  var pendingMime = 'application/octet-stream';
  var pendingSize = 0;
  var pendingReceived = 0;
  var fileIndex = 0;
  int? activeReceiveId;
  final imported = <NgmyDocShareItem>[];
  var received = 0;
  final done = Completer<List<NgmyDocShareItem>>();
  Future<void> writeTail = Future<void>.value();

  Future<void> finalizeCurrentFile() async {
    if (activeReceiveId == null) return;
    final id = activeReceiveId!;
    activeReceiveId = null;
    await writeTail;
    final saved = await NgmyDocShareStore.finishDiskReceive(id);
    if (saved != null) {
      imported.add(saved);
      received++;
      onProgress?.call(received, total);
    }
  }

  pc.onDataChannel = (channel) {
    channel.onMessage = (msg) {
      if (msg.isBinary) {
        final id = activeReceiveId;
        if (id != null) {
          pendingReceived += msg.binary.length;
          onBytes?.call(fileIndex, pendingReceived, pendingSize);
          writeTail = writeTail.then((_) => NgmyDocShareStore.writeDiskReceive(id, msg.binary));
        }
        return;
      }
      unawaited(() async {
        try {
          final data = jsonDecode(msg.text);
          if (data is! Map) return;
          final type = (data['type'] ?? '').toString();
          if (type == 'meta') {
            await finalizeCurrentFile();
            pendingName = (data['name'] ?? 'file').toString();
            pendingMime = (data['mime'] ?? 'application/octet-stream').toString();
            pendingSize = (data['size'] as num?)?.toInt() ?? 0;
            pendingReceived = 0;
            fileIndex = received;
            final id = NgmyDocShareStore.beginDiskReceive(
              email: recipientEmail,
              name: pendingName,
              mime: pendingMime,
              note: 'NGMY Transfer',
            );
            await NgmyDocShareStore.prepareDiskReceive(id);
            activeReceiveId = id;
          } else if (type == 'done') {
            await finalizeCurrentFile();
            if (!done.isCompleted) done.complete(imported);
          }
        } catch (e) {
          debugPrint('[ngmy transfer p2p] recv: $e');
          if (!done.isCompleted) done.complete(imported);
        }
      }());
    };
  };

  await pc.setRemoteDescription(RTCSessionDescription(offerSdp, 'offer'));
  final answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  await _waitIceBrief(pc);

  final answerSdp = (await pc.getLocalDescription())?.sdp?.trim() ?? '';
  if (answerSdp.isEmpty) return null;

  await NgmyTransferSignal.stashAnswer(offerToken, jsonEncode({'s': answerSdp}));

  return (transfer: done.future);
}
