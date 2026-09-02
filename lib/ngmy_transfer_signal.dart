import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

/// One row per transfer token — fast poll (no giant signals map).
const String kNgmyTransferSignalPrefix = 'WT';
const String _kRowPrefix = 'ngmy_transfer_signal_v1_';

class NgmyTransferSignal {
  static String _rowKey(String token) => '$_kRowPrefix${token.trim()}';

  static String generateToken() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    final r = Random.secure();
    return '$kNgmyTransferSignalPrefix${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
  }

  static Future<String?> stashOffer({
    required String token,
    required String ownerEmail,
    required String innerJson,
  }) async {
    final json = innerJson.trim();
    if (json.isEmpty) return null;
    final id = token.trim();
    if (id.isEmpty || !id.startsWith(kNgmyTransferSignalPrefix)) return null;
    final now = DateTime.now().toUtc();
    try {
      await ngmyDbRelaySettingsUpsert(
        _rowKey(id),
        {
          'token': id,
          'ownerEmail': ownerEmail.trim().toLowerCase(),
          'offer': base64Encode(utf8.encode(json)),
          'createdAt': now.toIso8601String(),
        },
        timeout: kNgmyCloudWriteTimeout,
      );
      return id;
    } catch (e) {
      debugPrint('[ngmy transfer signal] stash offer: $e');
      return null;
    }
  }

  static Future<String?> consumeOffer(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    try {
      final value = await ngmyDbRelaySettingsFetch(_rowKey(id), timeout: kNgmyCloudLoadTimeout);
      if (value == null) return null;
      final offerRaw = (value['offer'] ?? '').toString();
      if (offerRaw.isEmpty) return null;
      return utf8.decode(base64Decode(offerRaw));
    } catch (e) {
      debugPrint('[ngmy transfer signal] consume offer: $e');
      return null;
    }
  }

  static Future<bool> stashAnswer(String token, String answerJson) async {
    final id = token.trim();
    if (id.isEmpty || answerJson.trim().isEmpty) return false;
    try {
      final value = await ngmyDbRelaySettingsFetch(_rowKey(id), timeout: kNgmyCloudLoadTimeout);
      final now = DateTime.now().toUtc();
      final answerB64 = base64Encode(utf8.encode(answerJson.trim()));
      if (value == null) {
        await ngmyDbRelaySettingsUpsert(
          _rowKey(id),
          {'token': id, 'answer': answerB64, 'answerAt': now.toIso8601String()},
          timeout: kNgmyCloudWriteTimeout,
        );
        return true;
      }
      await ngmyDbRelaySettingsUpsert(
        _rowKey(id),
        {...value, 'answer': answerB64, 'answerAt': now.toIso8601String()},
        timeout: kNgmyCloudWriteTimeout,
      );
      return true;
    } catch (e) {
      debugPrint('[ngmy transfer signal] stash answer: $e');
      return false;
    }
  }

  static Future<String?> pollAnswer(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    try {
      final value = await ngmyDbRelaySettingsFetch(_rowKey(id), timeout: kNgmyCloudLoadTimeout);
      if (value == null) return null;
      final answerRaw = (value['answer'] ?? '').toString();
      if (answerRaw.isEmpty) return null;
      return utf8.decode(base64Decode(answerRaw));
    } catch (e) {
      debugPrint('[ngmy transfer signal] poll answer: $e');
      return null;
    }
  }

  static Future<void> clear(String token) async {
    final id = token.trim();
    if (id.isEmpty) return;
    try {
      await ngmyDbRelaySettingsDelete(_rowKey(id), timeout: kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[ngmy transfer signal] clear: $e');
    }
  }
}
