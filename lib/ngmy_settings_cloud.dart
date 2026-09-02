import 'package:flutter/foundation.dart';

import 'ngmy_db_relay.dart';

/// Anonymous read via the disguised DB relay (`/api/sync`) — works for guest
/// links without a Supabase session. Sensitive keys were previously blocked
/// client-side (`NgmyCloudPolicy.settingsKeyNetworkSensitive`); now every key
/// goes through the relay, which is RLS-governed like any direct call would
/// be, so the old blocklist is no longer needed here.
Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaRest(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  try {
    return await ngmyDbRelaySettingsFetch(key, timeout: timeout);
  } catch (e) {
    debugPrint('[ngmy_settings] relay GET $key: $e');
    return null;
  }
}

/// Read that tells "there is no such row" apart from "the server could not be
/// reached". A sync that cannot tell those apart reads a network blip as an
/// empty cloud, and then overwrites good data with whatever this device holds.
Future<({bool reachable, Map<String, dynamic>? value})> ngmyFetchSettingsRowStatus(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  try {
    final value = await ngmyDbRelaySettingsFetch(key, timeout: timeout);
    return (reachable: true, value: value);
  } catch (e) {
    debugPrint('[ngmy_settings] relay status GET $key: $e');
    return (reachable: false, value: null);
  }
}

Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaClient(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  try {
    return await ngmyDbRelaySettingsFetch(key, timeout: timeout);
  } catch (e) {
    debugPrint('[ngmy_settings] relay client GET $key: $e');
    return null;
  }
}

/// Deletes one `ngmy_settings` row by key (frees cloud space for that payload).
Future<bool> ngmyDeleteSettingsKeyReliable(String key) async {
  final k = key.trim();
  if (k.isEmpty) return false;
  try {
    return await ngmyDbRelaySettingsDelete(k);
  } catch (e) {
    debugPrint('[ngmy_settings] relay DELETE $k: $e');
    return false;
  }
}

Future<bool> ngmyUpsertSettingsRowReliable(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
}) async {
  try {
    return await ngmyDbRelaySettingsUpsert(key, value, updatedAt: updatedAt);
  } catch (e) {
    debugPrint('[ngmy_settings] relay upsert $key: $e');
    return false;
  }
}

Future<bool> ngmyUpsertSettingsBatchReliable(
  List<({String key, Map<String, dynamic> value})> rows, {
  String? updatedAt,
}) async {
  if (rows.isEmpty) return false;
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  for (final row in rows) {
    final ok = await ngmyDbRelaySettingsUpsert(row.key, row.value, updatedAt: at);
    if (!ok) return false;
  }
  return true;
}

/// Relay read — kept as a separate name for call sites that previously did
/// "REST first, then Supabase client" as two distinct fallback attempts;
/// the relay is now the only path, so both resolve to the same call.
Future<Map<String, dynamic>?> ngmyFetchSettingsValueReliable(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  return ngmyFetchSettingsValueViaRest(key, timeout: timeout);
}
