import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
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

/// Anonymous REST read — works for guest /menu and /bio links without Supabase init.
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

Future<bool> ngmyUpsertSettingsRowViaRest(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
  Duration timeout = kNgmyCloudWriteTimeout,
}) async {
  try {
    final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
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
            {'key': key, 'value': value, 'updated_at': at},
          ]),
        )
        .timeout(timeout);
    if (resp.statusCode >= 200 && resp.statusCode < 300) return true;
    debugPrint('[ngmy_settings] rest POST $key: ${resp.statusCode} ${resp.body}');
    return false;
  } catch (e) {
    debugPrint('[ngmy_settings] rest POST $key: $e');
    return false;
  }
}

/// Writes one ngmy_settings row via Supabase client, falling back to REST on failure.
Future<bool> ngmyUpsertSettingsRowReliable(
  String key,
  Map<String, dynamic> value, {
  String? updatedAt,
}) async {
  final at = updatedAt ?? DateTime.now().toUtc().toIso8601String();
  await ngmyWaitForSupabaseReady();
  try {
    await Supabase.instance.client.from('ngmy_settings').upsert([
      {'key': key, 'value': value, 'updated_at': at},
    ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    return true;
  } catch (e) {
    debugPrint('[ngmy_settings] client upsert $key: $e');
    ngmyInvalidateCloudReachabilityCache();
    return ngmyUpsertSettingsRowViaRest(key, value, updatedAt: at);
  }
}
