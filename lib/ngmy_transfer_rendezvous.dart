import 'dart:async';
import 'dart:math';

import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyTransferRendezvousPrefix = 'ngmy_transfer_v1_';

String ngmyTransferSettingsKey(String code) => '$kNgmyTransferRendezvousPrefix${code.trim()}';

/// Cloud lookup so the receiver can find the sender's Wi‑Fi address with a 6‑digit code.
class NgmyTransferRendezvous {
  static Timer? _heartbeat;

  static Future<String?> generateUniqueCode() async {
    final r = Random.secure();
    for (var attempt = 0; attempt < 10; attempt++) {
      final code = (100000 + r.nextInt(900000)).toString();
      final existing = await lookup(code);
      if (existing == null) return code;
    }
    return null;
  }

  static Future<Map<String, dynamic>?> lookup(String code) async {
    final normalized = _normalizeCode(code);
    if (normalized == null) return null;
    try {
      return await ngmyDbRelaySettingsFetch(ngmyTransferSettingsKey(normalized), timeout: kNgmyCloudLoadTimeout);
    } catch (e) {
      debugPrint('[ngmy transfer rendezvous] lookup $code: $e');
    }
    return null;
  }

  static Future<bool> publish({
    required String code,
    required String transferKey,
    required String ownerEmail,
    required String host,
    required int port,
    required String sessionId,
    required List<Map<String, dynamic>> files,
    String mode = 'lan',
    String? offerToken,
  }) async {
    final normalized = _normalizeCode(code);
    if (normalized == null || transferKey.trim().isEmpty) return false;
    final now = DateTime.now().toUtc();
    try {
      await ngmyDbRelaySettingsUpsert(
        ngmyTransferSettingsKey(normalized),
        {
          'code': normalized,
          'transferKey': transferKey.trim(),
          'ownerEmail': ownerEmail.toLowerCase().trim(),
          'host': host.trim(),
          'port': port,
          'sessionId': sessionId.trim(),
          'mode': mode,
          if (offerToken != null && offerToken.trim().isNotEmpty) 'offerToken': offerToken.trim(),
          'files': files,
          'fileCount': files.length,
          'expiresAt': now.add(const Duration(hours: 2)).toIso8601String(),
          'updatedAt': now.toIso8601String(),
        },
        timeout: kNgmyCloudWriteTimeout,
      );
      return true;
    } catch (e) {
      debugPrint('[ngmy transfer rendezvous] publish $code: $e');
      return false;
    }
  }

  static void startHeartbeat({
    required String code,
    required String transferKey,
    required String ownerEmail,
    required String host,
    required int port,
    required String sessionId,
    required List<Map<String, dynamic>> files,
    String mode = 'lan',
    String? offerToken,
  }) {
    stopHeartbeat();
    _heartbeat = Timer.periodic(const Duration(seconds: 12), (_) {
      unawaited(publish(
        code: code,
        transferKey: transferKey,
        ownerEmail: ownerEmail,
        host: host,
        port: port,
        sessionId: sessionId,
        files: files,
        mode: mode,
        offerToken: offerToken,
      ));
    });
  }

  static void stopHeartbeat() {
    _heartbeat?.cancel();
    _heartbeat = null;
  }

  static Future<void> unpublish(String code) async {
    stopHeartbeat();
    final normalized = _normalizeCode(code);
    if (normalized == null) return;
    try {
      await ngmyDbRelaySettingsDelete(ngmyTransferSettingsKey(normalized), timeout: kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[ngmy transfer rendezvous] unpublish $code: $e');
    }
  }

  static String? _normalizeCode(String raw) {
    final t = raw.trim().replaceAll(RegExp(r'\D'), '');
    if (t.length != 6) return null;
    return t;
  }

  static String? normalizeInput(String raw) => _normalizeCode(raw);

  static String generateTransferKey() {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789ABCDEFGHJKMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(32, (_) => chars[r.nextInt(chars.length)]).join();
  }
}

void unawaited(Future<void> f) {}
