import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_oauth.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

Map<String, String> get _ngmySettingsRestHeaders => {
      'apikey': kNgmySupabaseAnonKey,
      'Authorization': 'Bearer $kNgmySupabaseAnonKey',
    };

Uri ngmySettingsRestRowUri(String key, {String select = 'value'}) {
  return Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings').replace(
    queryParameters: {
      'key': 'eq.$key',
      'select': select,
    },
  );
}

/// Anonymous REST read — works for guest links without Supabase init.
Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaRest(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
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

Future<Map<String, dynamic>?> ngmyFetchSettingsValueViaClient(
  String key, {
  Duration timeout = const Duration(seconds: 8),
}) async {
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
  final uri = Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings');
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
    final uri = Uri.parse('${kNgmySupabaseUrl.trim()}/rest/v1/ngmy_settings');
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
