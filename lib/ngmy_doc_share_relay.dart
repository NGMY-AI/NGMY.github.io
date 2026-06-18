import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

const String kNgmyDocShareRelayOfferPrefix = 'NGMYDOCSYNC4';
const String kNgmyDocShareRelayAnswerPrefix = 'NGMYDOCSYNC4A';

/// Ephemeral Supabase relay — QR holds only a short session id (thick, scannable modules).
class NgmyDocShareRelay {
  static const _table = 'doc_share_relay';

  static String _newSession() {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    final r = Random.secure();
    return List.generate(8, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static bool get _ready {
    try {
      Supabase.instance.client;
      return true;
    } catch (_) {
      return false;
    }
  }

  /// Store offer JSON; return short QR payload like NGMYDOCSYNC4|abc12def.
  static Future<String?> publishOffer(String offerJson) async {
    if (!_ready || offerJson.isEmpty) return null;
    try {
      final sid = _newSession();
      await Supabase.instance.client.from(_table).upsert({
        'session_id': sid,
        'offer': offerJson,
        'answer': null,
      });
      return '$kNgmyDocShareRelayOfferPrefix|$sid';
    } catch (e) {
      debugPrint('[doc share relay] publish offer: $e');
      return null;
    }
  }

  static Future<String?> fetchOffer(String sessionId) async {
    if (!_ready || sessionId.isEmpty) return null;
    try {
      final row = await Supabase.instance.client
          .from(_table)
          .select('offer')
          .eq('session_id', sessionId)
          .maybeSingle();
      final offer = row?['offer']?.toString();
      return (offer != null && offer.isNotEmpty) ? offer : null;
    } catch (e) {
      debugPrint('[doc share relay] fetch offer: $e');
      return null;
    }
  }

  static Future<bool> publishAnswer(String sessionId, String answerJson) async {
    if (!_ready || sessionId.isEmpty || answerJson.isEmpty) return false;
    try {
      await Supabase.instance.client.from(_table).update({'answer': answerJson}).eq('session_id', sessionId);
      return true;
    } catch (e) {
      debugPrint('[doc share relay] publish answer: $e');
      return false;
    }
  }

  static Future<String?> fetchAnswer(String sessionId) async {
    if (!_ready || sessionId.isEmpty) return null;
    try {
      final row = await Supabase.instance.client
          .from(_table)
          .select('answer')
          .eq('session_id', sessionId)
          .maybeSingle();
      final answer = row?['answer']?.toString();
      return (answer != null && answer.isNotEmpty) ? answer : null;
    } catch (e) {
      debugPrint('[doc share relay] fetch answer: $e');
      return null;
    }
  }

  static Future<String?> waitForAnswer(
    String sessionId, {
    Duration timeout = const Duration(minutes: 8),
  }) async {
    final end = DateTime.now().add(timeout);
    while (DateTime.now().isBefore(end)) {
      final answer = await fetchAnswer(sessionId);
      if (answer != null) return answer;
      await Future<void>.delayed(const Duration(milliseconds: 700));
    }
    return null;
  }

  static Future<void> cleanup(String sessionId) async {
    if (!_ready || sessionId.isEmpty) return;
    try {
      await Supabase.instance.client.from(_table).delete().eq('session_id', sessionId);
    } catch (_) {}
  }
}
