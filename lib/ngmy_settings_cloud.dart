import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_cloud_policy.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_oauth.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';
import 'ngmy_web_rest_proxy.dart';

Map<String, String> get _ngmySettingsRestHeaders => {
      'apikey': kNgmySupabaseAnonKey,
      'Authorization': 'Bearer $kNgmySupabaseAnonKey',
    };

Uri ngmySettingsRestRowUri(String key, {String select = 'value'}) {
  return ngmySupabaseRestUri('/ngmy_settings').replace(
    queryParameters: {
      'key': 'eq.$key',
      'select': select,
    },
  );
}

/// Anonymous REST read — works for guest links without Supabase init.
/// Sensitive civic/PII keys are blocked so they never appear in DevTools Network.
Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaRest(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  if (NgmyCloudPolicy.settingsKeyNetworkSensitive(key)) {
    debugPrint('[ngmy_settings] blocked sensitive REST GET: $key');
    return null;
  }
  try {
    final resp = await http.get(ngmySettingsRestRowUri(key), headers: _ngmySettingsRestHeaders).timeout(timeout);
    if (resp.statusCode != 200) {
      if (resp.statusCode != 404) {
        debugPrint('[ngmy_settings] rest GET $key: ${resp.statusCode}');
      }
      return null;
    }
    final decoded = jsonDecode(resp.body);
    if (decoded is! List || decoded.isEmpty) return null;
    final row = decoded.first;
    if (row is! Map) return null;
    final value = row['value'];
    if (value is! Map) return null;
    return Map<String, dynamic>.from(value);
  } catch (e) {
    debugPrint('[ngmy_settings] rest GET $key: $e');
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
  if (NgmyCloudPolicy.settingsKeyNetworkSensitive(key)) {
    return (reachable: true, value: null);
  }
  try {
    final resp = await http.get(ngmySettingsRestRowUri(key), headers: _ngmySettingsRestHeaders).timeout(timeout);
    if (resp.statusCode != 200) {
      debugPrint('[ngmy_settings] rest status GET $key: ${resp.statusCode}');
      return (reachable: false, value: null);
    }
    final decoded = jsonDecode(resp.body);
    if (decoded is! List || decoded.isEmpty) return (reachable: true, value: null);
    final row = decoded.first;
    if (row is! Map) return (reachable: true, value: null);
    final value = row['value'];
    if (value is! Map) return (reachable: true, value: null);
    return (reachable: true, value: Map<String, dynamic>.from(value));
  } catch (e) {
    debugPrint('[ngmy_settings] rest status GET $key: $e');
    return (reachable: false, value: null);
  }
}

Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaClient(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  if (NgmyCloudPolicy.settingsKeyNetworkSensitive(key)) {
    debugPrint('[ngmy_settings] blocked sensitive client GET: $key');
    return null;
  }
  try {
    await ngmyEnsureSupabaseAuthInitialized();
    await ngmyWaitForSupabaseReady(timeout: timeout);
    final row = await Supabase.instance.client
        .from('ngmy_settings')
        .select('value')
        .eq('key', key)
        .maybeSingle()
        .timeout(timeout);
    if (row == null) return null;
    final value = row['value'];
    if (value is! Map) return null;
    return Map<String, dynamic>.from(value);
  } catch (e) {
    debugPrint('[ngmy_settings] client GET $key: $e');
    return null;
  }
}

Future<bool> _restPostRow(String key, Map<String, dynamic> value, String updatedAt) async {
  final uri = ngmySupabaseRestUri('/ngmy_settings');
  final resp = await http
      .post(
        uri,
        headers: {
          ..._ngmySettingsRestHeaders,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates,return=minimal',
        },
        body: jsonEncode([
          {'key': key, 'value': value, 'updated_at': updatedAt},
        ]),
      )
      .timeout(kNgmyCloudWriteTimeout);
  if (resp.statusCode >= 200 && resp.statusCode < 300) return true;
  debugPrint('[ngmy_settings] rest POST $key: ${resp.statusCode} ${resp.body}');
  return false;
}

Future<bool> _restPatchRow(String key, Map<String, dynamic> value, String updatedAt) async {
  final uri = ngmySettingsRestRowUri(key).replace(queryParameters: {'key': 'eq.$key'});
  final resp = await http
      .patch(
        uri,
        headers: {
          ..._ngmySettingsRestHeaders,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: jsonEncode({'value': value, 'updated_at': updatedAt}),
      )
      .timeout(kNgmyCloudWriteTimeout);
  if (resp.statusCode >= 200 && resp.statusCode < 300) return true;
  debugPrint('[ngmy_settings] rest PATCH $key: ${resp.statusCode} ${resp.body}');
  return false;
}

/// Deletes one `ngmy_settings` row by key (frees cloud space for that payload).
Future<bool> ngmyDeleteSettingsKeyReliable(String key) async {
  final k = key.trim();
  if (k.isEmpty) return false;

  var ok = false;
  try {
    final uri = ngmySupabaseRestUri('/ngmy_settings').replace(
      queryParameters: {'key': 'eq.$k'},
    );
    final resp = await http
        .delete(
          uri,
          headers: {
            ..._ngmySettingsRestHeaders,
            'Prefer': 'return=minimal',
          },
        )
        .timeout(kNgmyCloudWriteTimeout);
    ok = resp.statusCode >= 200 && resp.statusCode < 300;
    if (!ok) debugPrint('[ngmy_settings] rest DELETE $k: ${resp.statusCode} ${resp.body}');
  } catch (e) {
    debugPrint('[ngmy_settings] rest DELETE $k: $e');
  }

  if (!ok) {
    try {
      await ngmyEnsureSupabaseAuthInitialized();
      await ngmyWaitForSupabaseReady();
      await Supabase.instance.client.from('ngmy_settings').delete().eq('key', k).timeout(kNgmyCloudWriteTimeout);
      ok = true;
    } catch (e) {
      debugPrint('[ngmy_settings] client DELETE $k: $e');
      ngmyInvalidateCloudReachabilityCache();
    }
  }
  return ok;
}

Future<bool> ngmyUpsertSettingsRowReliable(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
}) async {
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();

  var ok = await _restPostRow(key, value, at);
  if (!ok) ok = await _restPatchRow(key, value, at);

  if (!ok) {
    try {
      await ngmyEnsureSupabaseAuthInitialized();
      await ngmyWaitForSupabaseReady();
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {'key': key, 'value': value, 'updated_at': at},
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      ok = true;
    } catch (e) {
      debugPrint('[ngmy_settings] client upsert $key: $e');
      ngmyInvalidateCloudReachabilityCache();
    }
  }

  if (!ok) return false;

  // Sensitive keys are not re-fetched over the public Network tab.
  if (NgmyCloudPolicy.settingsKeyNetworkSensitive(key)) return true;

  for (var attempt = 0; attempt < 4; attempt++) {
    final verify = await ngmyFetchSettingsValueViaRest(key);
    if (verify != null) return true;
    if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 300 * (attempt + 1)));
  }
  return false;
}

Future<bool> ngmyUpsertSettingsBatchReliable(
  List<({String key, Map<String, dynamic> value})> rows, {
  String? updatedAt,
}) async {
  if (rows.isEmpty) return false;
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  final body = rows
      .map((r) => {'key': r.key, 'value': r.value, 'updated_at': at})
      .toList();

  var ok = false;
  try {
    final uri = ngmySupabaseRestUri('/ngmy_settings');
    final resp = await http
        .post(
          uri,
          headers: {
            ..._ngmySettingsRestHeaders,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=minimal',
          },
          body: jsonEncode(body),
        )
        .timeout(kNgmyCloudWriteTimeout);
    ok = resp.statusCode >= 200 && resp.statusCode < 300;
    if (!ok) debugPrint('[ngmy_settings] rest batch POST: ${resp.statusCode} ${resp.body}');
  } catch (e) {
    debugPrint('[ngmy_settings] rest batch POST: $e');
  }

  if (!ok) {
    for (final row in rows) {
      final one = await ngmyUpsertSettingsRowReliable(row.key, row.value, updatedAt: at);
      if (!one) return false;
    }
    return true;
  }

  for (final row in rows) {
    if (NgmyCloudPolicy.settingsKeyNetworkSensitive(row.key)) continue;
    var verified = false;
    for (var attempt = 0; attempt < 4; attempt++) {
      final v = await ngmyFetchSettingsValueViaRest(row.key);
      if (v != null) {
        verified = true;
        break;
      }
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 300 * (attempt + 1)));
    }
    if (!verified) return false;
  }
  return true;
}

/// REST first, then Supabase client — for guest page loads.
Future<Map<String, dynamic>?> ngmyFetchSettingsValueReliable(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
  final viaRest = await ngmyFetchSettingsValueViaRest(key, timeout: timeout);
  if (viaRest != null) return viaRest;
  return ngmyFetchSettingsValueViaClient(key, timeout: timeout);
}
