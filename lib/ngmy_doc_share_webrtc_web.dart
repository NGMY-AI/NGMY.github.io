import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_doc_share_relay.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_webrtc_stub.dart' show kNgmyDocShareWebRtcAnswerPrefix;

const String kNgmyDocShareWebRtcOfferPrefix = 'NGMYDOCSYNC3';
const int _chunkSize = 262144;

RTCPeerConnection? _senderPc;
RTCDataChannel? _senderChannel;
List<NgmyDocShareItem> _sendItems = [];
String? _sendOwnerEmail;
String? _relaySessionId;

RTCPeerConnection? _receiverPc;

bool get isWebRtcSenderActive => _senderPc != null;

String? get activeRelaySessionId => _relaySessionId;

Future<void> stopWebRtc() async {
  if (_relaySessionId != null) {
    await NgmyDocShareRelay.cleanup(_relaySessionId!);
  }
  await _senderChannel?.close();
  await _senderPc?.close();
  await _receiverPc?.close();
  _senderPc = null;
  _senderChannel = null;
  _sendItems = [];
  _sendOwnerEmail = null;
  _receiverPc = null;
  _relaySessionId = null;
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

  final sdp = NgmyDocShareQrPayload.minifySdp((await pc.getLocalDescription())?.sdp ?? '');
  if (sdp.isEmpty) {
    await stopWebRtc();
    return null;
  }

  final manifest = items.map((e) => [e.name, e.mime]).toList();
  final payload = jsonEncode({'s': sdp, 'f': manifest});

  final relayQr = await NgmyDocShareRelay.publishOffer(payload);
  if (relayQr != null) {
    _relaySessionId = relayQr.substring(kNgmyDocShareRelayOfferPrefix.length + 1);
    return relayQr;
  }

  return NgmyDocShareQrPayload.wrapCompressed(kNgmyDocShareWebRtcOfferPrefix, payload);
}

Future<void> _applyAnswerJson(String jsonText) async {
  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return;
  final sdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  if (sdp.isEmpty || _senderPc == null) return;
  await _senderPc!.setRemoteDescription(RTCSessionDescription(sdp, 'answer'));
}

Future<void> applyAnswerQr(String raw) async {
  final text = raw.trim();
  if (text.startsWith('$kNgmyDocShareRelayAnswerPrefix|')) {
    final sid = text.substring(kNgmyDocShareRelayAnswerPrefix.length + 1).trim();
    final answerJson = await NgmyDocShareRelay.fetchAnswer(sid);
    if (answerJson != null) await _applyAnswerJson(answerJson);
    return;
  }
  final jsonText = NgmyDocShareQrPayload.unwrapAfterPrefix(text, kNgmyDocShareWebRtcAnswerPrefix);
  if (jsonText == null) return;
  await _applyAnswerJson(jsonText);
}

Future<bool> waitForRelayAnswer() async {
  final sid = _relaySessionId;
  if (sid == null || sid.isEmpty) return false;
  final answerJson = await NgmyDocShareRelay.waitForAnswer(sid);
  if (answerJson == null) return false;
  await _applyAnswerJson(answerJson);
  return true;
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

Future<String?> _resolveOfferJson(String raw) async {
  final text = raw.trim();
  if (text.startsWith('$kNgmyDocShareRelayOfferPrefix|')) {
    final sid = text.substring(kNgmyDocShareRelayOfferPrefix.length + 1).trim();
    return NgmyDocShareRelay.fetchOffer(sid);
  }
  return NgmyDocShareQrPayload.unwrapAfterPrefix(text, kNgmyDocShareWebRtcOfferPrefix);
}

Future<({String answerQr, Future<List<NgmyDocShareItem>> transfer})?> beginReceiveOffer({
  required String raw,
  required String recipientEmail,
  void Function(int received, int total)? onProgress,
}) async {
  final text = raw.trim();
  final relaySession = text.startsWith('$kNgmyDocShareRelayOfferPrefix|')
      ? text.substring(kNgmyDocShareRelayOfferPrefix.length + 1).trim()
      : null;

  final jsonText = await _resolveOfferJson(text);
  if (jsonText == null) return null;

  final decoded = jsonDecode(jsonText);
  if (decoded is! Map) return null;
  final offerSdp = (decoded['s'] ?? decoded['sdp'] ?? '').toString();
  final manifest = decoded['f'] ?? decoded['manifest'];
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

  final answerSdp = NgmyDocShareQrPayload.minifySdp((await pc.getLocalDescription())?.sdp ?? '');
  if (answerSdp.isEmpty) return null;

  final answerJson = jsonEncode({'s': answerSdp});
  String answerQr;
  if (relaySession != null && relaySession.isNotEmpty) {
    await NgmyDocShareRelay.publishAnswer(relaySession, answerJson);
    answerQr = '$kNgmyDocShareRelayAnswerPrefix|$relaySession';
  } else {
    answerQr = NgmyDocShareQrPayload.wrapCompressed(
      kNgmyDocShareWebRtcAnswerPrefix,
      answerJson,
    );
  }

  return (answerQr: answerQr, transfer: done.future);
}

void unawaited(Future<void> f) {}
