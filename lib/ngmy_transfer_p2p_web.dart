import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_stash.dart';
import 'ngmy_transfer_rtc_config.dart';
import 'ngmy_transfer_signal.dart';

const int _kMaxBufferedBytes = 64 * 1024 * 1024;
const Duration _kConnectTimeout = Duration(seconds: 120);

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
    unawaited(NgmyDocShareWebRtcStash.clear(token));
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

Future<void> _waitIceGathering(RTCPeerConnection pc) async {
  if (pc.iceGatheringState == RTCIceGatheringState.RTCIceGatheringStateComplete) return;
  final c = Completer<void>();
  pc.onIceGatheringState = (state) {
    if (state == RTCIceGatheringState.RTCIceGatheringStateComplete && !c.isCompleted) {
      c.complete();
    }
  };
  await c.future.timeout(const Duration(seconds: 15), onTimeout: () {});
}

Future<bool> _waitPeerConnected({
  required RTCPeerConnection pc,
  required Completer<RTCDataChannel> channelReady,
  Duration timeout = _kConnectTimeout,
}) async {
  final deadline = DateTime.now().add(timeout);
  var iceConnected = false;

  pc.onIceConnectionState = (state) {
    if (state == RTCIceConnectionState.RTCIceConnectionStateConnected ||
        state == RTCIceConnectionState.RTCIceConnectionStateCompleted) {
      iceConnected = true;
    }
  };

  while (DateTime.now().isBefore(deadline)) {
    final iceState = pc.iceConnectionState;
    if (iceState == RTCIceConnectionState.RTCIceConnectionStateFailed ||
        iceState == RTCIceConnectionState.RTCIceConnectionStateClosed ||
        iceState == RTCIceConnectionState.RTCIceConnectionStateDisconnected) {
      debugPrint('[ngmy transfer p2p] ice failed: $iceState');
      return false;
    }
    if (iceState == RTCIceConnectionState.RTCIceConnectionStateConnected ||
        iceState == RTCIceConnectionState.RTCIceConnectionStateCompleted) {
      iceConnected = true;
    }

    if (channelReady.isCompleted) {
      final channel = await channelReady.future;
      if (channel.state == RTCDataChannelState.RTCDataChannelOpen) return true;
    }

    if (iceConnected && channelReady.isCompleted) {
      final channel = await channelReady.future;
      if (channel.state == RTCDataChannelState.RTCDataChannelOpen) return true;
    }

    await Future<void>.delayed(const Duration(milliseconds: 100));
  }

  debugPrint('[ngmy transfer p2p] connect timeout (ice=$iceConnected, channel=${channelReady.isCompleted})');
  return false;
}

Future<String?> _loadOfferJson(String token) async {
  final fast = await NgmyTransferSignal.consumeOffer(token);
  if (fast != null && fast.trim().isNotEmpty) return fast;
  return NgmyDocShareWebRtcStash.consumeOffer(token);
}

Future<String?> _pollAnswerJson(String token) async {
  final fast = await NgmyTransferSignal.pollAnswer(token);
  if (fast != null && fast.trim().isNotEmpty) return fast;
  return NgmyDocShareWebRtcStash.pollAnswer(token);
}

Future<bool> _stashAnswerJson(String token, String answerJson) async {
  if (await NgmyTransferSignal.stashAnswer(token, answerJson)) return true;
  return NgmyDocShareWebRtcStash.stashAnswer(token, answerJson);
}

Future<void> _sendBinary(RTCDataChannel channel, Uint8List chunk) async {
  while ((channel.bufferedAmount ?? 0) > _kMaxBufferedBytes) {
    await Future<void>.delayed(const Duration(milliseconds: 4));
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
  final pc = await createPeerConnection(kNgmyTransferRtcConfig);
  _txPc = pc;
  final channel = await pc.createDataChannel('ngmytransfer', RTCDataChannelInit());
  _txChannel = channel;
  channel.onDataChannelState = (state) {
    if (state == RTCDataChannelState.RTCDataChannelOpen) {
      unawaited(_pushFiles(channel));
    }
  };

  final offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  await _waitIceGathering(pc);

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
  final answerJson = await _pollAnswerJson(offerToken);
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

Future<void> _pushFiles(RTCDataChannel channel) async {
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
      if (sent <= 0 && size > 0) {
        debugPrint('[ngmy transfer p2p] no bytes read for ${item.name}');
        channel.send(RTCDataChannelMessage(jsonEncode({'type': 'error', 'msg': 'read failed'})));
        return;
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
  void Function(String fileName, int receivedBytes, int totalBytes)? onBytes,
}) async {
  if (_rxPc != null) {
    await _rxPc!.close();
    _rxPc = null;
  }

  final jsonText = await _loadOfferJson(offerToken);
  if (jsonText == null) {
    debugPrint('[ngmy transfer p2p] offer not found for $offerToken');
    return null;
  }

  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return null;
  final offerSdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  final manifest = decoded['f'] ?? decoded['manifest'];
  if (offerSdp.isEmpty || manifest is! List) return null;
  final total = manifest.length;

  final pc = await createPeerConnection(kNgmyTransferRtcConfig);
  _rxPc = pc;

  var pendingName = 'file';
  var pendingMime = 'application/octet-stream';
  var pendingSize = 0;
  var pendingReceived = 0;
  int? activeReceiveId;
  final imported = <NgmyDocShareItem>[];
  var received = 0;
  final done = Completer<List<NgmyDocShareItem>>();
  final channelReady = Completer<RTCDataChannel>();
  Future<void> recvChain = Future<void>.value();

  Future<void> finalizeCurrentFile() async {
    if (activeReceiveId == null) return;
    final id = activeReceiveId!;
    activeReceiveId = null;
    final saved = await NgmyDocShareStore.finishDiskReceive(id);
    if (saved != null) {
      imported.add(saved);
      received++;
      onProgress?.call(received, total);
    } else if (pendingReceived > 0) {
      debugPrint('[ngmy transfer p2p] finish failed for $pendingName ($pendingReceived bytes)');
      await NgmyDocShareStore.abortDiskReceive(id);
    }
  }

  pc.onDataChannel = (channel) {
    if (!channelReady.isCompleted) channelReady.complete(channel);
    channel.onDataChannelState = (state) {
      debugPrint('[ngmy transfer p2p] channel state: $state');
    };
    channel.onMessage = (msg) {
      recvChain = recvChain.then((_) async {
        try {
          if (msg.isBinary) {
            final id = activeReceiveId;
            if (id == null) {
              debugPrint('[ngmy transfer p2p] binary before meta (${msg.binary.length} bytes dropped)');
              return;
            }
            pendingReceived += msg.binary.length;
            onBytes?.call(pendingName, pendingReceived, pendingSize);
            await NgmyDocShareStore.writeDiskReceive(id, msg.binary);
            return;
          }

          final data = jsonDecode(msg.text);
          if (data is! Map) return;
          final type = (data['type'] ?? '').toString();
          if (type == 'meta') {
            await finalizeCurrentFile();
            pendingName = (data['name'] ?? 'file').toString();
            pendingMime = (data['mime'] ?? 'application/octet-stream').toString();
            pendingSize = (data['size'] as num?)?.toInt() ?? 0;
            pendingReceived = 0;
            final id = NgmyDocShareStore.beginDiskReceive(
              email: recipientEmail,
              name: pendingName,
              mime: pendingMime,
              note: 'NGMY Transfer',
            );
            activeReceiveId = id;
            await NgmyDocShareStore.prepareDiskReceive(id);
          } else if (type == 'done') {
            await finalizeCurrentFile();
            if (!done.isCompleted) done.complete(imported);
          } else if (type == 'error') {
            if (activeReceiveId != null) {
              await NgmyDocShareStore.abortDiskReceive(activeReceiveId!);
              activeReceiveId = null;
            }
            if (!done.isCompleted) done.complete(imported);
          }
        } catch (e) {
          debugPrint('[ngmy transfer p2p] recv: $e');
          if (!done.isCompleted) done.complete(imported);
        }
      });
    };
  };

  try {
    await pc.setRemoteDescription(RTCSessionDescription(offerSdp, 'offer'));
    final answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await _waitIceGathering(pc);

    final answerSdp = (await pc.getLocalDescription())?.sdp?.trim() ?? '';
    if (answerSdp.isEmpty) return null;

    final answerOk = await _stashAnswerJson(offerToken, jsonEncode({'s': answerSdp}));
    if (!answerOk) {
      debugPrint('[ngmy transfer p2p] failed to stash answer');
      return null;
    }

    final connected = await _waitPeerConnected(pc: pc, channelReady: channelReady);
    if (!connected) {
      if (!done.isCompleted) done.complete([]);
      await pc.close();
      _rxPc = null;
      return null;
    }

    return (transfer: done.future);
  } catch (e) {
    debugPrint('[ngmy transfer p2p] receive setup: $e');
    await pc.close();
    _rxPc = null;
    return null;
  }
}

void unawaited(Future<void> f) {}
