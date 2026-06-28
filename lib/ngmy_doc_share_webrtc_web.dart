import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_stash.dart';
import 'ngmy_doc_share_webrtc_stub.dart' show kNgmyDocShareWebRtcAnswerPrefix;

const String kNgmyDocShareWebRtcOfferPrefix = 'NGMYDOCSYNC3';
const int _chunkSize = 262144;

const Map<String, dynamic> _rtcConfig = {
  'iceServers': [
    {'urls': 'stun:stun.l.google.com:19302'},
    {'urls': 'stun:stun1.l.google.com:19302'},
  ],
};

RTCPeerConnection? _senderPc;
RTCDataChannel? _senderChannel;
List<NgmyDocShareItem> _sendItems = [];
String? _sendOwnerEmail;
String? _activeOfferToken;
RTCPeerConnection? _receiverPc;

bool get isWebRtcSenderActive => _senderPc != null;

Future<void> stopWebRtc() async {
  final token = _activeOfferToken;
  _activeOfferToken = null;
  if (token != null) {
    await NgmyDocShareWebRtcStash.clear(token);
  }
  await _senderChannel?.close();
  await _senderPc?.close();
  await _receiverPc?.close();
  _senderPc = null;
  _senderChannel = null;
  _sendItems = [];
  _sendOwnerEmail = null;
  _receiverPc = null;
}

Future<void> _waitIceComplete(RTCPeerConnection pc) async {
  if (pc.iceGatheringState == RTCIceGatheringState.RTCIceGatheringStateComplete) return;
  final c = Completer<void>();
  pc.onIceGatheringState = (state) {
    if (state == RTCIceGatheringState.RTCIceGatheringStateComplete && !c.isCompleted) {
      c.complete();
    }
  };
  await c.future.timeout(const Duration(seconds: 20), onTimeout: () {});
}

String _sdpForStash(String? sdp, {required bool legacyDenseQr}) {
  final raw = (sdp ?? '').trim();
  if (raw.isEmpty) return '';
  return legacyDenseQr ? NgmyDocShareQrPayload.minifySdp(raw) : raw;
}

Future<String?> _buildOfferInnerJson({
  required String ownerEmail,
  required List<NgmyDocShareItem> items,
  required bool legacyDenseQr,
}) async {
  if (items.isEmpty) return null;
  await stopWebRtc();

  _sendItems = List.from(items);
  _sendOwnerEmail = ownerEmail;

  final pc = await createPeerConnection(_rtcConfig);
  _senderPc = pc;
  final channel = await pc.createDataChannel('ngmydoc', RTCDataChannelInit());
  _senderChannel = channel;
  channel.onDataChannelState = (state) {
    if (state == RTCDataChannelState.RTCDataChannelOpen) {
      unawaited(_pushFiles(channel));
    }
  };

  final offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  await _waitIceComplete(pc);

  final sdp = _sdpForStash((await pc.getLocalDescription())?.sdp, legacyDenseQr: legacyDenseQr);
  if (sdp.isEmpty) {
    await stopWebRtc();
    return null;
  }

  final manifest = items.map((e) => [e.name, e.mime, e.sizeBytes]).toList();
  return jsonEncode({'s': sdp, 'f': manifest});
}

/// Web / fallback path for large videos — short QR with full SDP in cloud stash.
Future<String?> createShortOfferQr({
  required String ownerEmail,
  required List<NgmyDocShareItem> items,
}) async {
  final inner = await _buildOfferInnerJson(ownerEmail: ownerEmail, items: items, legacyDenseQr: false);
  if (inner == null) return null;
  final token = await NgmyDocShareWebRtcStash.stashOffer(ownerEmail: ownerEmail, innerJson: inner);
  if (token == null) {
    await stopWebRtc();
    return null;
  }
  _activeOfferToken = token;
  return '$kNgmyDocShareWebRtcOfferPrefix|$token';
}

/// Legacy web path — not used for new shares (dense QR). Kept for old scans only.
Future<String?> createOfferQr({
  required String ownerEmail,
  required List<NgmyDocShareItem> items,
}) async {
  final inner = await _buildOfferInnerJson(ownerEmail: ownerEmail, items: items, legacyDenseQr: true);
  if (inner == null) return null;
  return NgmyDocShareQrPayload.wrapCompressed(kNgmyDocShareWebRtcOfferPrefix, inner);
}

Future<String?> _resolveOfferJson(String raw) async {
  final text = raw.trim();
  final plainHead = '$kNgmyDocShareWebRtcOfferPrefix|';
  if (!text.startsWith(plainHead)) return null;
  final body = text.substring(plainHead.length).trim();
  if (body.startsWith(kNgmyDocShareWebRtcStashTokenPrefix)) {
    return NgmyDocShareWebRtcStash.consumeOffer(body);
  }
  return NgmyDocShareQrPayload.unwrapAfterPrefix(text, kNgmyDocShareWebRtcOfferPrefix);
}

Future<String?> _resolveAnswerJson(String raw) async {
  final text = raw.trim();
  final plainHead = '$kNgmyDocShareWebRtcAnswerPrefix|';
  if (!text.startsWith(plainHead)) return null;
  final body = text.substring(plainHead.length).trim();
  if (body.startsWith(kNgmyDocShareWebRtcStashTokenPrefix)) {
    return NgmyDocShareWebRtcStash.pollAnswer(body);
  }
  return NgmyDocShareQrPayload.unwrapAfterPrefix(text, kNgmyDocShareWebRtcAnswerPrefix);
}

Future<String?> pollAnswerForOffer(String offerToken) async {
  final answerJson = await NgmyDocShareWebRtcStash.pollAnswer(offerToken);
  if (answerJson == null) return null;
  return '$kNgmyDocShareWebRtcAnswerPrefix|$offerToken';
}

Future<void> applyAnswerQr(String raw) async {
  final jsonText = await _resolveAnswerJson(raw);
  if (jsonText == null) return;
  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return;
  final sdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  if (sdp.isEmpty || _senderPc == null) return;
  try {
    await _senderPc!.setRemoteDescription(RTCSessionDescription(sdp, 'answer'));
  } catch (e) {
    debugPrint('[doc share webrtc answer] $e');
  }
}

Future<void> _pushFiles(RTCDataChannel channel) async {
  final email = _sendOwnerEmail;
  if (email == null) return;
  try {
    for (final item in _sendItems) {
      final size = item.sizeBytes;
      if (size <= 0) continue;
      channel.send(RTCDataChannelMessage(jsonEncode({
        'type': 'meta',
        'name': item.name,
        'mime': item.mime,
        'size': size,
      })));
      for (var i = 0; i < size; i += _chunkSize) {
        final end = (i + _chunkSize < size) ? i + _chunkSize : size;
        final chunk = await NgmyDocShareStore.readByteRange(email, item, i, end);
        if (chunk == null || chunk.isEmpty) {
          debugPrint('[doc share webrtc send] missing chunk ${item.name} @$i');
          return;
        }
        channel.send(RTCDataChannelMessage.fromBinary(chunk));
      }
    }
    channel.send(RTCDataChannelMessage(jsonEncode({'type': 'done'})));
  } catch (e) {
    debugPrint('[doc share webrtc send] $e');
  }
}

Future<NgmyDocShareItem?> _finalizeReceiverFile({
  required String recipientEmail,
  required String name,
  required String mime,
  required int? receiveId,
  required BytesBuilder memoryChunks,
}) async {
  if (receiveId != null) {
    return NgmyDocShareStore.finishDiskReceive(receiveId);
  }
  if (memoryChunks.length <= 0) return null;
  return NgmyDocShareStore.addBytes(
    email: recipientEmail,
    name: name,
    mime: mime,
    bytes: memoryChunks.takeBytes(),
    note: 'Received via QR',
  );
}

Future<({String answerQr, Future<List<NgmyDocShareItem>> transfer})?> beginReceiveOffer({
  required String raw,
  required String recipientEmail,
  void Function(int received, int total)? onProgress,
}) async {
  final jsonText = await _resolveOfferJson(raw);
  if (jsonText == null) return null;

  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return null;
  final offerSdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  final manifest = decoded['f'] ?? decoded['manifest'];
  if (offerSdp.isEmpty || manifest is! List) return null;
  final total = manifest.length;

  String? offerToken;
  final plainHead = '$kNgmyDocShareWebRtcOfferPrefix|';
  final scan = raw.trim();
  if (scan.startsWith(plainHead)) {
    final body = scan.substring(plainHead.length).trim();
    if (body.startsWith(kNgmyDocShareWebRtcStashTokenPrefix)) {
      offerToken = body;
    }
  }

  final pc = await createPeerConnection(_rtcConfig);
  _receiverPc = pc;

  var pendingName = 'file';
  var pendingMime = 'application/octet-stream';
  final memoryChunks = BytesBuilder(copy: false);
  int? activeReceiveId;
  final imported = <NgmyDocShareItem>[];
  var received = 0;
  final done = Completer<List<NgmyDocShareItem>>();

  Future<void> startNextFile(String name, String mime) async {
    if (activeReceiveId != null) {
      final saved = await _finalizeReceiverFile(
        recipientEmail: recipientEmail,
        name: pendingName,
        mime: pendingMime,
        receiveId: activeReceiveId,
        memoryChunks: memoryChunks,
      );
      activeReceiveId = null;
      memoryChunks.clear();
      if (saved != null) {
        imported.add(saved);
        received++;
        onProgress?.call(received, total);
      }
    }
    pendingName = name;
    pendingMime = mime;
    activeReceiveId = NgmyDocShareStore.beginDiskReceive(
      email: recipientEmail,
      name: name,
      mime: mime,
      note: 'NGMY Transfer',
    );
  }

  pc.onDataChannel = (channel) {
    channel.onMessage = (msg) async {
      try {
        if (msg.isBinary) {
          if (activeReceiveId != null) {
            await NgmyDocShareStore.writeDiskReceive(activeReceiveId!, msg.binary);
          } else {
            memoryChunks.add(msg.binary);
          }
          return;
        }
        final data = jsonDecode(msg.text);
        if (data is! Map) return;
        final type = (data['type'] ?? '').toString();
        if (type == 'meta') {
          await startNextFile(
            (data['name'] ?? 'file').toString(),
            (data['mime'] ?? 'application/octet-stream').toString(),
          );
        } else if (type == 'done') {
          final saved = await _finalizeReceiverFile(
            recipientEmail: recipientEmail,
            name: pendingName,
            mime: pendingMime,
            receiveId: activeReceiveId,
            memoryChunks: memoryChunks,
          );
          activeReceiveId = null;
          memoryChunks.clear();
          if (saved != null) {
            imported.add(saved);
            received++;
            onProgress?.call(received, total);
          }
          if (!done.isCompleted) done.complete(imported);
        }
      } catch (e) {
        debugPrint('[doc share webrtc recv] $e');
        if (activeReceiveId != null) {
          await NgmyDocShareStore.abortDiskReceive(activeReceiveId!);
          activeReceiveId = null;
        }
        if (!done.isCompleted) done.complete(imported);
      }
    };
  };

  await pc.setRemoteDescription(RTCSessionDescription(offerSdp, 'offer'));
  final answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  await _waitIceComplete(pc);

  final answerSdp = _sdpForStash((await pc.getLocalDescription())?.sdp, legacyDenseQr: offerToken == null);
  if (answerSdp.isEmpty) return null;

  final answerInner = jsonEncode({'s': answerSdp});
  String answerQr;
  if (offerToken != null) {
    await NgmyDocShareWebRtcStash.stashAnswer(offerToken, answerInner);
    answerQr = '$kNgmyDocShareWebRtcAnswerPrefix|$offerToken';
  } else {
    answerQr = NgmyDocShareQrPayload.wrapCompressed(
      kNgmyDocShareWebRtcAnswerPrefix,
      answerInner,
    );
  }

  return (answerQr: answerQr, transfer: done.future);
}

void unawaited(Future<void> f) {}
