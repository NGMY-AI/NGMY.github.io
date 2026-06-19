import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Durable admin approve/reject on deposits & withdrawals (local + Supabase).
class NgmyWalletDecisionLedger {
  static const String _prefsKey = 'ngmy_wallet_decisions_v1';
  static const String _prefsAtKey = 'ngmy_wallet_decision_at_v1';
  static const String _cloudSettingsKey = 'wallet_txn_decisions';

  /// transaction id → status index (1 approved, 2 rejected)
  static Future<Map<String, int>> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return {};
      return _parseStatusMap(decoded);
    } catch (_) {
      return {};
    }
  }

  static Map<String, int> _parseStatusMap(Map decoded) {
    final out = <String, int>{};
    decoded.forEach((key, value) {
      final id = key.toString().trim();
      if (id.isEmpty) return;
      int? idx;
      if (value is num) {
        idx = value.toInt();
      } else if (value is Map) {
        final s = value['status'];
        idx = s is num ? s.toInt() : int.tryParse(s?.toString() ?? '');
      } else {
        idx = int.tryParse(value.toString());
      }
      if (idx == null || idx <= 0 || idx > 2) return;
      out[id] = idx;
    });
    return out;
  }

  static Future<Map<String, int>> loadFromCloud() async {
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _cloudSettingsKey)
          .maybeSingle();
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      return _parseStatusMap(Map<String, dynamic>.from(value));
    } catch (e) {
      debugPrint('[wallet-ledger] cloud load: $e');
      return {};
    }
  }

  /// Local + cloud merged (higher status rank wins per id).
  static Future<Map<String, int>> loadMerged() async {
    final local = await load();
    final cloud = await loadFromCloud();
    final merged = <String, int>{...cloud};
    for (final e in local.entries) {
      final existing = merged[e.key];
      if (existing == null || e.value > existing) {
        merged[e.key] = e.value;
      }
    }
    return merged;
  }

  static Future<void> record(String transactionId, int statusIndex) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    if (statusIndex < 0 || statusIndex > 2) return;
    final ledger = await load();
    if (statusIndex == 0) {
      ledger.remove(id);
      await clearDecisionAt(id);
    } else {
      ledger[id] = statusIndex;
      await recordDecisionAt(id, DateTime.now());
    }
    await _persistLocal(ledger);
  }

  static Future<Map<String, DateTime>> loadDecisionTimes() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsAtKey);
      if (raw == null || raw.trim().isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return {};
      final out = <String, DateTime>{};
      decoded.forEach((key, value) {
        final id = key.toString().trim();
        if (id.isEmpty) return;
        final at = DateTime.tryParse(value.toString());
        if (at != null) out[id] = at.isUtc ? at.toLocal() : at;
      });
      return out;
    } catch (_) {
      return {};
    }
  }

  static Future<Map<String, DateTime>> loadDecisionTimesFromCloud() async {
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _cloudSettingsKey)
          .maybeSingle();
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final out = <String, DateTime>{};
      for (final entry in Map<String, dynamic>.from(value).entries) {
        final id = entry.key.trim();
        if (id.isEmpty) continue;
        final raw = entry.value;
        if (raw is! Map) continue;
        final at = DateTime.tryParse((raw['at'] ?? '').toString());
        if (at != null) out[id] = at.isUtc ? at.toLocal() : at;
      }
      return out;
    } catch (e) {
      debugPrint('[wallet-ledger] cloud decision times: $e');
      return {};
    }
  }

  static Future<Map<String, DateTime>> loadDecisionTimesMerged() async {
    final merged = await loadDecisionTimesFromCloud();
    final local = await loadDecisionTimes();
    for (final e in local.entries) {
      final existing = merged[e.key];
      if (existing == null || e.value.isAfter(existing)) {
        merged[e.key] = e.value;
      }
    }
    return merged;
  }

  static Future<void> recordDecisionAt(String transactionId, DateTime at) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    final map = await loadDecisionTimes();
    map[id] = at;
    await _persistDecisionTimes(map);
  }

  static Future<void> clearDecisionAt(String transactionId) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    final map = await loadDecisionTimes();
    if (!map.containsKey(id)) return;
    map.remove(id);
    await _persistDecisionTimes(map);
  }

  static Future<void> clearDecisionTimes(Iterable<String> transactionIds) async {
    final ids = transactionIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
    if (ids.isEmpty) return;
    final map = await loadDecisionTimes();
    var changed = false;
    for (final id in ids) {
      if (map.remove(id) != null) changed = true;
    }
    if (changed) await _persistDecisionTimes(map);
  }

  static Future<void> _persistDecisionTimes(Map<String, DateTime> map) async {
    final prefs = await SharedPreferences.getInstance();
    if (map.isEmpty) {
      await prefs.remove(_prefsAtKey);
      return;
    }
    final encoded = <String, String>{};
    map.forEach((key, value) {
      encoded[key] = value.toUtc().toIso8601String();
    });
    await prefs.setString(_prefsAtKey, jsonEncode(encoded));
  }

  static Future<void> removeFromCloud(Iterable<String> transactionIds) async {
    final ids = transactionIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
    if (ids.isEmpty) return;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _cloudSettingsKey)
          .maybeSingle();
      if (row == null) return;
      final value = row['value'];
      if (value is! Map) return;
      final next = Map<String, dynamic>.from(value);
      var changed = false;
      for (final id in ids) {
        if (next.remove(id) != null) changed = true;
      }
      if (!changed) return;
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _cloudSettingsKey,
          'value': next,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ]);
    } catch (e) {
      debugPrint('[wallet-ledger] cloud remove: $e');
    }
  }

  static Future<bool> recordCloud({
    required String transactionId,
    required int statusIndex,
    String? userEmail,
    double? amount,
    int? typeIndex,
  }) async {
    final id = transactionId.trim();
    if (id.isEmpty || statusIndex <= 0 || statusIndex > 2) return false;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _cloudSettingsKey)
          .maybeSingle();
      final value = <String, dynamic>{};
      if (row != null && row['value'] is Map) {
        value.addAll(Map<String, dynamic>.from(row['value'] as Map));
      }
      value[id] = {
        'status': statusIndex,
        'userEmail': userEmail ?? '',
        'amount': amount,
        'type': typeIndex,
        'at': DateTime.now().toUtc().toIso8601String(),
      };
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _cloudSettingsKey,
          'value': value,
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ]);
      return true;
    } catch (e) {
      debugPrint('[wallet-ledger] cloud record: $e');
      return false;
    }
  }

  static Future<void> recordLocalAndCloud({
    required String transactionId,
    required int statusIndex,
    String? userEmail,
    double? amount,
    int? typeIndex,
  }) async {
    await record(transactionId, statusIndex);
    await recordCloud(
      transactionId: transactionId,
      statusIndex: statusIndex,
      userEmail: userEmail,
      amount: amount,
      typeIndex: typeIndex,
    );
  }

  static Future<void> clear(String transactionId) async {
    final id = transactionId.trim();
    if (id.isEmpty) return;
    final ledger = await load();
    if (!ledger.containsKey(id)) return;
    ledger.remove(id);
    await _persistLocal(ledger);
  }

  static Future<void> _persistLocal(Map<String, int> ledger) async {
    final prefs = await SharedPreferences.getInstance();
    if (ledger.isEmpty) {
      await prefs.remove(_prefsKey);
      return;
    }
    await prefs.setString(_prefsKey, jsonEncode(ledger));
  }
}
