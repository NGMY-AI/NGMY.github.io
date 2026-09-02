import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

/// Short WebRTC offer/answer tokens — SDP lives in cloud; QR stays scannable.
const String kNgmyDocShareWebRtcStashTokenPrefix = 'WR';

const String _kWebRtcStashKey = 'ngmy_doc_share_webrtc_signal_v1';

class NgmyDocShareWebRtcStash {
  static String _generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return '$kNgmyDocShareWebRtcStashTokenPrefix${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<Map<String, dynamic>> _loadSignals() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final value = await ngmyDbRelaySettingsFetch(_kWebRtcStashKey, timeout: kNgmyCloudLoadTimeout);
      if (value == null) return {};
      final signals = value['signals'];
      if (signals is Map) return Map<String, dynamic>.from(signals);
    } catch (e) {
      debugPrint('[doc share webrtc stash] load: $e');
    }
    return {};
  }

  static Future<void> _saveSignals(Map<String, dynamic> signals) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsert(
        _kWebRtcStashKey,
        {'signals': signals, 'savedAt': DateTime.now().toUtc().toIso8601String()},
        timeout: kNgmyCloudWriteTimeout,
      );
    } catch (e) {
      debugPrint('[doc share webrtc stash] save: $e');
    }
  }

  /// Stores offer JSON (SDP + manifest). Returns short token for QR.
  static Future<String?> stashOffer({
    required String ownerEmail,
    required String innerJson,
  }) async {
    if (!await ngmyCanReachCloud()) return null;
    final json = innerJson.trim();
    if (json.isEmpty) return null;
    final token = _generateToken();
    final signals = await _loadSignals();
    signals[token] = {
      'ownerEmail': ownerEmail.trim().toLowerCase(),
      'offer': base64Encode(utf8.encode(json)),
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveSignals(signals);
    return token;
  }

  /// Receiver fetches offer SDP once.
  static Future<String?> consumeOffer(String token) async {
    final id = token.trim();
    if (id.isEmpty || !id.startsWith(kNgmyDocShareWebRtcStashTokenPrefix)) return null;
    if (!await ngmyCanReachCloud()) return null;
    final signals = await _loadSignals();
    final row = signals[id];
    if (row is! Map) return null;
    final offerRaw = (row['offer'] ?? '').toString();
    if (offerRaw.isEmpty) return null;
    try {
      final jsonText = utf8.decode(base64Decode(offerRaw));
      if (jsonText.trim().isEmpty) return null;
      signals[id] = {
        ...Map<String, dynamic>.from(row),
        'offerConsumedAt': DateTime.now().toUtc().toIso8601String(),
      };
      await _saveSignals(signals);
      return jsonText;
    } catch (e) {
      debugPrint('[doc share webrtc stash] offer decode: $e');
      return null;
    }
  }

  /// Receiver posts answer SDP for sender to pick up.
  static Future<bool> stashAnswer(String offerToken, String answerJson) async {
    final id = offerToken.trim();
    if (id.isEmpty) return false;
    if (!await ngmyCanReachCloud()) return false;
    final signals = await _loadSignals();
    final row = signals[id];
    if (row is! Map) return false;
    signals[id] = {
      ...Map<String, dynamic>.from(row),
      'answer': base64Encode(utf8.encode(answerJson.trim())),
      'answerAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveSignals(signals);
    return true;
  }

  /// Sender polls for answer JSON.
  static Future<String?> pollAnswer(String offerToken) async {
    final id = offerToken.trim();
    if (id.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    final signals = await _loadSignals();
    final row = signals[id];
    if (row is! Map) return null;
    final answerRaw = (row['answer'] ?? '').toString();
    if (answerRaw.isEmpty) return null;
    try {
      return utf8.decode(base64Decode(answerRaw));
    } catch (e) {
      debugPrint('[doc share webrtc stash] answer decode: $e');
      return null;
    }
  }

  /// Clears signal after transfer completes or share screen closes.
  static Future<void> clear(String offerToken) async {
    final id = offerToken.trim();
    if (id.isEmpty) return;
    final signals = await _loadSignals();
    if (!signals.containsKey(id)) return;
    signals.remove(id);
    await _saveSignals(signals);
  }
}
