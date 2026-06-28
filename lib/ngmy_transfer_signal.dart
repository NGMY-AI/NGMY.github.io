import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// One row per transfer token — fast poll (no giant signals map).
const String kNgmyTransferSignalPrefix = 'WT';
const String _kRowPrefix = 'ngmy_transfer_signal_v1_';
const Duration _kSignalTimeout = Duration(seconds: 4);

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
    if (!await ngmyCanReachCloud()) return null;
    final json = innerJson.trim();
    if (json.isEmpty) return null;
    final id = token.trim();
    if (id.isEmpty || !id.startsWith(kNgmyTransferSignalPrefix)) return null;
    final now = DateTime.now().toUtc();
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _rowKey(id),
          'value': {
            'token': id,
            'ownerEmail': ownerEmail.trim().toLowerCase(),
            'offer': base64Encode(utf8.encode(json)),
            'createdAt': now.toIso8601String(),
          },
          'updated_at': now.toIso8601String(),
        },
      ], onConflict: 'key').timeout(_kSignalTimeout);
      return id;
    } catch (e) {
      debugPrint('[ngmy transfer signal] stash offer: $e');
      return null;
    }
  }

  static Future<String?> consumeOffer(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _rowKey(id))
          .maybeSingle()
          .timeout(_kSignalTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
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
    if (!await ngmyCanReachCloud()) return false;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _rowKey(id))
          .maybeSingle()
          .timeout(_kSignalTimeout);
      if (row == null) return false;
      final value = row['value'];
      if (value is! Map) return false;
      final now = DateTime.now().toUtc();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _rowKey(id),
          'value': {
            ...Map<String, dynamic>.from(value),
            'answer': base64Encode(utf8.encode(answerJson.trim())),
            'answerAt': now.toIso8601String(),
          },
          'updated_at': now.toIso8601String(),
        },
      ], onConflict: 'key').timeout(_kSignalTimeout);
      return true;
    } catch (e) {
      debugPrint('[ngmy transfer signal] stash answer: $e');
      return false;
    }
  }

  static Future<String?> pollAnswer(String token) async {
    final id = token.trim();
    if (id.isEmpty) return null;
    if (!await ngmyCanReachCloud()) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _rowKey(id))
          .maybeSingle()
          .timeout(_kSignalTimeout);
      if (row == null) return null;
      final value = row['value'];
      if (value is! Map) return null;
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
      await Supabase.instance.client
          .from('ngmy_settings')
          .delete()
          .eq('key', _rowKey(id))
          .timeout(_kSignalTimeout);
    } catch (e) {
      debugPrint('[ngmy transfer signal] clear: $e');
    }
  }
}
