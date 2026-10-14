import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// The last money each account had on this phone — balance, today's
/// earnings, total profit and the investment plan — kept as a tiny record of
/// its own (separate from the big caches, so it is always saved).
///
/// It is shown the moment the app or Growth Income opens, so money never
/// starts at $0 while the full history downloads. The cloud then corrects it
/// if another phone changed something.
class NgmyWalletMemory {
  NgmyWalletMemory._();

  static const _key = 'ngmy_wallet_memory_v1';
  static final Map<String, Map<String, dynamic>> _byEmail = {};
  static bool _loaded = false;
  static Timer? _saveTimer;

  static String _k(String email) => email.toLowerCase().trim();

  /// Read once at launch (before the first screen).
  static Future<void> load([SharedPreferences? prefs]) async {
    if (_loaded) return;
    try {
      final p = prefs ?? await SharedPreferences.getInstance();
      final raw = p.getString(_key);
      if (raw != null && raw.isNotEmpty) {
        final m = jsonDecode(raw);
        if (m is Map) {
          m.forEach((k, v) {
            if (v is Map) _byEmail['$k'] = Map<String, dynamic>.from(v);
          });
        }
      }
    } catch (e) {
      debugPrint('[wallet memory] load: $e');
    }
    _loaded = true;
  }

  static Map<String, dynamic>? of(String email) => _byEmail[_k(email)];

  static double? balanceOf(String email) => (of(email)?['balance'] as num?)?.toDouble();

  /// Remember the balance (called on every money change).
  static void rememberBalance(String email, double balance) {
    final key = _k(email);
    if (key.isEmpty || balance.isNaN) return;
    final rec = _byEmail.putIfAbsent(key, () => {});
    if ((rec['balance'] as num?)?.toDouble() == balance) return;
    rec['balance'] = balance;
    rec['at'] = DateTime.now().toUtc().toIso8601String();
    _scheduleSave();
  }

  /// Remember everything Growth Income shows for this account.
  static void rememberWallet(
    String email, {
    required double balance,
    required double totalProfit,
    required double todayEarned,
    Map<String, dynamic>? investment,
  }) {
    final key = _k(email);
    if (key.isEmpty) return;
    _byEmail[key] = {
      ..._byEmail[key] ?? {},
      'balance': balance,
      'totalProfit': totalProfit,
      'todayEarned': todayEarned,
      'investment': investment,
      'at': DateTime.now().toUtc().toIso8601String(),
    };
    _scheduleSave();
  }

  static void _scheduleSave() {
    _saveTimer?.cancel();
    // Saved right away — closing the app a moment after a win or bet must not lose it.
    _saveTimer = Timer(Duration.zero, () async {
      try {
        final p = await SharedPreferences.getInstance();
        await p.setString(_key, jsonEncode(_byEmail));
      } catch (e) {
        debugPrint('[wallet memory] save: $e');
      }
    });
  }
}
