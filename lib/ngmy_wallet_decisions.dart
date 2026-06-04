import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Durable record of admin approve/reject on deposits & withdrawals.
/// Survives logout and stale Supabase rows until cloud sync succeeds.
class NgmyWalletDecisionLedger {
  static const String _prefsKey = 'ngmy_wallet_decisions_v1';

  /// transaction id → status index (0 pending, 1 approved, 2 rejected)
  static Future<Map<String, int>> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return {};
      final out = <String, int>{};
      decoded.forEach((key, value) {
        final id = key.toString().trim();
        if (id.isEmpty) return;
        final idx = value is num ? value.toInt() : int.tryParse(value.toString());
        if (idx == null || idx < 0 || idx > 2) return;
        if (idx == 0) return;
        out[id] = idx;
      });
      return out;
    } catch (_) {
      return {};
    }
  }

  static Future<void> record(String transactionId, int statusIndex) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    if (statusIndex < 0 || statusIndex > 2) return;
    final ledger = await load();
    if (statusIndex == 0) {
      ledger.remove(id);
    } else {
      ledger[id] = statusIndex;
    }
    await _persist(ledger);
  }

  static Future<void> clear(String transactionId) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    final ledger = await load();
    if (!ledger.containsKey(id)) return;
    ledger.remove(id);
    await _persist(ledger);
  }

  static Future<void> _persist(Map<String, int> ledger) async {
    final prefs = await SharedPreferences.getInstance();
    if (ledger.isEmpty) {
      await prefs.remove(_prefsKey);
      return;
    }
    await prefs.setString(_prefsKey, jsonEncode(ledger));
  }
}
