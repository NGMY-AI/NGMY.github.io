import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_games.dart';

const String kNgmyGameCenterSettingsPrefsKey = 'ngmy_game_center_settings_v1';

Future<void> _backupGameCenterLocal(Map<String, dynamic> payload) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kNgmyGameCenterSettingsPrefsKey, jsonEncode(payload));
  } catch (e) {
    debugPrint('[game-center] local backup: $e');
  }
}

/// Saves timers/dice locally on device only (no cloud/database).
Future<bool> ngmyPersistGameCenterSettings({
  required Map<String, int> gameTimeLimits,
  required Map<String, dynamic> diceSettings,
  required List<Map<String, dynamic>> gameInvites,
}) async {
  final payload = <String, dynamic>{
    'gameTimeLimits': gameTimeLimits,
    'diceSettings': diceSettings,
    'savedAt': DateTime.now().toUtc().toIso8601String(),
  };
  await _backupGameCenterLocal(payload);
  return true;
}

/// Load local backup and apply timers/dice to [apply] callback.
Future<void> ngmyApplyGameCenterSettingsBackup({
  required void Function(Map<String, int> limits, Map<String, dynamic> dice, List<Map<String, dynamic>> invites) apply,
}) async {
  Map<String, dynamic>? payload;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(kNgmyGameCenterSettingsPrefsKey);
    if (raw != null && raw.trim().isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is Map) payload = Map<String, dynamic>.from(decoded);
    }
  } catch (e) {
    debugPrint('[game-center] local backup load: $e');
  }

  if (payload == null) return;

  final limits = ngmyParseGameTimeLimits(payload['gameTimeLimits']);
  final diceRaw = payload['diceSettings'];
  final dice = diceRaw is Map ? Map<String, dynamic>.from(diceRaw) : <String, dynamic>{};

  if (limits.isNotEmpty || dice.isNotEmpty) {
    apply(limits, dice, const []);
  }
}
