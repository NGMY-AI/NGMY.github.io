import 'dart:async';
import 'dart:io';

import 'package:http/http.dart' as http;

import 'ngmy_supabase_config.dart';

Future<bool> ngmyNativeReachabilityProbe(Duration timeout) async {
  try {
    final uri = Uri.parse('${kNgmySupabaseUrl}/rest/v1/config?select=id&limit=1');
    final resp = await http
        .get(
          uri,
          headers: {
            'apikey': kNgmySupabaseAnonKey,
            'Authorization': 'Bearer $kNgmySupabaseAnonKey',
          },
        )
        .timeout(timeout);
    if (resp.statusCode >= 200 && resp.statusCode < 500) return true;
  } catch (_) {}
  try {
    final result = await InternetAddress.lookup('example.com').timeout(timeout);
    return result.isNotEmpty && result.first.rawAddress.isNotEmpty;
  } catch (_) {
    return false;
  }
}
