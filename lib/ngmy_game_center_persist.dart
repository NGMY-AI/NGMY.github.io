import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_games.dart';

/// Supabase config row id (TEXT).
const String kNgmyGameCenterConfigRowId = '1';

const String kNgmyGameCenterSettingsCloudKey = 'game_center_settings';
const String kNgmyGameCenterSettingsPrefsKey = 'ngmy_game_center_settings_v1';

String? _missingConfigColumn(Object error) {
  final text = error.toString();
  final m = RegExp("Could not find the '([^']+)' column").firstMatch(text);
  return m?.group(1);
}

Future<bool> _canReachCloud() async {
  try {
    await Supabase.instance.client.from('config').select('id').limit(1);
    return true;
  } catch (e) {
    debugPrint('[game-center] cloud check: $e');
    return false;
  }
}

Future<void> _backupGameCenterLocal(Map<String, dynamic> payload) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(kNgmyGameCenterSettingsPrefsKey, jsonEncode(payload));
  } catch (e) {
    debugPrint('[game-center] local backup: $e');
  }
}

Future<void> _backupGameCenterCloud(Map<String, dynamic> payload) async {
  try {
    await Supabase.instance.client.from('ngmy_settings').upsert([
      {
        'key': kNgmyGameCenterSettingsCloudKey,
        'value': payload,
        'updated_at': DateTime.now().toUtc().toIso8601String(),
      },
    ]);
  } catch (e) {
    debugPrint('[game-center] ngmy_settings backup: $e');
  }
}

/// Writes timers/dice/invites to config + ngmy_settings backup (survives missing jsonb columns).
Future<bool> ngmyPersistGameCenterSettings({
  required Map<String, int> gameTimeLimits,
  required Map<String, dynamic> diceSettings,
  required List<Map<String, dynamic>> gameInvites,
}) async {
  final payload = <String, dynamic>{
    'gameTimeLimits': gameTimeLimits,
    'diceSettings': diceSettings,
    'gameInvites': gameInvites,
    'savedAt': DateTime.now().toUtc().toIso8601String(),
  };
  await _backupGameCenterLocal(payload);
  if (!await _canReachCloud()) return false;

  await _backupGameCenterCloud(payload);

  var row = <String, dynamic>{
    'id': kNgmyGameCenterConfigRowId,
    'gameTimeLimits': gameTimeLimits,
    'diceSettings': diceSettings,
    'gameInvites': gameInvites,
  };
  final client = Supabase.instance.client;
  for (var attempt = 0; attempt < 12; attempt++) {
    try {
      await client.from('config').upsert(row);
      debugPrint('[game-center] timers saved to config (${gameTimeLimits.length} games)');
      return true;
    } catch (e) {
      final missing = _missingConfigColumn(e);
      if (missing != null && missing.isNotEmpty && row.containsKey(missing)) {
        row = Map<String, dynamic>.from(row)..remove(missing);
        continue;
      }
      debugPrint('[game-center] config upsert: $e');
      break;
    }
  }

  // Single-column fallback if wide upsert fails.
  for (final col in <MapEntry<String, dynamic>>[
    MapEntry('gameTimeLimits', gameTimeLimits),
    MapEntry('diceSettings', diceSettings),
    MapEntry('gameInvites', gameInvites),
  ]) {
    try {
      await client.from('config').upsert({
        'id': kNgmyGameCenterConfigRowId,
        col.key: col.value,
      });
      debugPrint('[game-center] saved ${col.key} column only');
      return true;
    } catch (e) {
      debugPrint('[game-center] ${col.key} upsert: $e');
    }
  }
  return false;
}

/// Load backup from cloud or device and apply to [apply] callback.
Future<void> ngmyApplyGameCenterSettingsBackup({
  required void Function(Map<String, int> limits, Map<String, dynamic> dice, List<Map<String, dynamic>> invites) apply,
}) async {
  Map<String, dynamic>? payload;

  if (await _canReachCloud()) {
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', kNgmyGameCenterSettingsCloudKey)
          .maybeSingle();
      if (row != null && row['value'] is Map) {
        payload = Map<String, dynamic>.from(row['value'] as Map);
      }
    } catch (e) {
      debugPrint('[game-center] cloud backup load: $e');
    }
  }

  if (payload == null) {
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
  }

  if (payload == null) return;

  final limits = ngmyParseGameTimeLimits(payload['gameTimeLimits']);
  final diceRaw = payload['diceSettings'];
  final dice = diceRaw is Map ? Map<String, dynamic>.from(diceRaw) : <String, dynamic>{};
  final invitesRaw = payload['gameInvites'];
  final invites = invitesRaw is List
      ? invitesRaw.map((e) => Map<String, dynamic>.from(e as Map)).toList()
      : <Map<String, dynamic>>[];

  if (limits.isNotEmpty || dice.isNotEmpty || invites.isNotEmpty) {
    apply(limits, dice, invites);
  }
}
