import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_stub.dart' show kNgmyDocShareWebRtcAnswerPrefix;

const String kNgmyDocShareWebRtcOfferPrefix = 'NGMYDOCSYNC3';
const int _chunkSize = 60000;

RTCPeerConnection? _senderPc;
RTCDataChannel? _senderChannel;
List<NgmyDocShareItem> _sendItems = [];
String? _sendOwnerEmail;

RTCPeerConnection? _receiverPc;

bool get isWebRtcSenderActive => _senderPc != null;

Future<void> stopWebRtc() async {
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
  await c.future.timeout(const Duration(seconds: 15), onTimeout: () {});
}

Future<String?> createOfferQr({
  required String ownerEmail,
  required List<NgmyDocShareItem> items,
}) async {
  if (items.isEmpty) return null;
  await stopWebRtc();

  _sendItems = List.from(items);
  _sendOwnerEmail = ownerEmail;

  final pc = await createPeerConnection({'iceServers': []});
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

  final sdp = (await pc.getLocalDescription())?.sdp;
  if (sdp == null || sdp.isEmpty) {
    await stopWebRtc();
    return null;
  }

  final manifest = items
      .map((e) => {
            'id': e.id,
            'name': e.name,
            'mime': e.mime,
            'sizeBytes': e.sizeBytes,
          })
      .toList();

  final payload = jsonEncode({'sdp': sdp, 'manifest': manifest});
  return '$kNgmyDocShareWebRtcOfferPrefix|${base64Encode(utf8.encode(payload))}';
}

Future<void> applyAnswerQr(String raw) async {
  final text = raw.trim();
  if (!text.startsWith('$kNgmyDocShareWebRtcAnswerPrefix|')) return;
  final encoded = text.substring(kNgmyDocShareWebRtcAnswerPrefix.length + 1);
  final decoded = jsonDecode(utf8.decode(base64Decode(encoded)));
  if (decoded is! Map) return;
  final sdp = (decoded['sdp'] ?? '').toString();
  if (sdp.isEmpty || _senderPc == null) return;
  await _senderPc!.setRemoteDescription(RTCSessionDescription(sdp, 'answer'));
}

Future<void> _pushFiles(RTCDataChannel channel) async {
  final email = _sendOwnerEmail;
  if (email == null) return;
  try {
    for (final item in _sendItems) {
      final bytes = await NgmyDocShareStore.readBytes(email, item);
      if (bytes == null || bytes.isEmpty) continue;
      channel.send(RTCDataChannelMessage(jsonEncode({
        'type': 'meta',
        'name': item.name,
        'mime': item.mime,
        'size': bytes.length,
      })));
      for (var i = 0; i < bytes.length; i += _chunkSize) {
        final end = (i + _chunkSize < bytes.length) ? i + _chunkSize : bytes.length;
        channel.send(RTCDataChannelMessage.fromBinary(bytes.sublist(i, end)));
      }
    }
    channel.send(RTCDataChannelMessage(jsonEncode({'type': 'done'})));
  } catch (e) {
    debugPrint('[doc share webrtc send] $e');
  }
}

Future<({String answerQr, Future<List<NgmyDocShareItem>> transfer})?> beginReceiveOffer({
  required String raw,
  required String recipientEmail,
  void Function(int received, int total)? onProgress,
}) async {
  final text = raw.trim();
  if (!text.startsWith('$kNgmyDocShareWebRtcOfferPrefix|')) return null;

  final encoded = text.substring(kNgmyDocShareWebRtcOfferPrefix.length + 1);
  final decoded = jsonDecode(utf8.decode(base64Decode(encoded)));
  if (decoded is! Map) return null;
  final offerSdp = (decoded['sdp'] ?? '').toString();
  final manifest = decoded['manifest'];
  if (offerSdp.isEmpty || manifest is! List) return null;
  final total = manifest.length;

  final pc = await createPeerConnection({'iceServers': []});
  _receiverPc = pc;

  var pendingName = 'file';
  var pendingMime = 'application/octet-stream';
  final chunks = BytesBuilder(copy: false);
  final imported = <NgmyDocShareItem>[];
  var received = 0;
  final done = Completer<List<NgmyDocShareItem>>();

  pc.onDataChannel = (channel) {
    channel.onMessage = (msg) async {
      try {
        if (msg.isBinary) {
          chunks.add(msg.binary);
          return;
        }
        final data = jsonDecode(msg.text);
        if (data is! Map) return;
        final type = (data['type'] ?? '').toString();
        if (type == 'meta') {
          if (chunks.length > 0) {
            final saved = await NgmyDocShareStore.addBytes(
              email: recipientEmail,
              name: pendingName,
              mime: pendingMime,
              bytes: chunks.takeBytes(),
              note: 'Received via QR',
            );
            if (saved != null) {
              imported.add(saved);
              received++;
              onProgress?.call(received, total);
            }
          } else {
            chunks.clear();
          }
          pendingName = (data['name'] ?? 'file').toString();
          pendingMime = (data['mime'] ?? 'application/octet-stream').toString();
        } else if (type == 'done') {
          if (chunks.length > 0) {
            final saved = await NgmyDocShareStore.addBytes(
              email: recipientEmail,
              name: pendingName,
              mime: pendingMime,
              bytes: chunks.takeBytes(),
              note: 'Received via QR',
            );
            if (saved != null) {
              imported.add(saved);
              received++;
              onProgress?.call(received, total);
            }
          }
          if (!done.isCompleted) done.complete(imported);
        }
      } catch (e) {
        debugPrint('[doc share webrtc recv] $e');
        if (!done.isCompleted) done.complete(imported);
      }
    };
  };

  await pc.setRemoteDescription(RTCSessionDescription(offerSdp, 'offer'));
  final answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  await _waitIceComplete(pc);

  final answerSdp = (await pc.getLocalDescription())?.sdp;
  if (answerSdp == null) return null;

  final answerQr =
      '$kNgmyDocShareWebRtcAnswerPrefix|${base64Encode(utf8.encode(jsonEncode({'sdp': answerSdp})))}';

  return (answerQr: answerQr, transfer: done.future);
}

void unawaited(Future<void> f) {}
