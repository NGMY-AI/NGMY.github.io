import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_network_resilience_io.dart' if (dart.library.html) 'ngmy_network_resilience_io_stub.dart';
import 'ngmy_offline.dart';
import 'ngmy_supabase_config.dart';

/// Max wait for cloud reads on startup / refresh (slow Wi‑Fi should fall back to cache).
const Duration kNgmyCloudLoadTimeout = Duration(seconds: 12);

/// Max wait per Supabase write batch.
const Duration kNgmyCloudWriteTimeout = Duration(seconds: 14);

/// Quick probe before treating device as "online" for sync.
const Duration kNgmyReachabilityTimeout = Duration(seconds: 3);

DateTime? _lastReachableAt;
bool _lastReachable = true;

/// Clear cached reachability after a failed sync so the next attempt re-probes Supabase.
void ngmyInvalidateCloudReachabilityCache() {
  _lastReachableAt = null;
  _lastReachable = true;
}

/// True when the device reports online and a short Supabase probe succeeds (or recently did).
Future<bool> ngmyCanReachCloud() async {
  if (!await ngmyDeviceIsOnline()) {
    _lastReachable = false;
    return false;
  }
  if (_lastReachableAt != null &&
      _lastReachable &&
      DateTime.now().difference(_lastReachableAt!) < const Duration(seconds: 20)) {
    return true;
  }
  final ok = await _probeReachability();
  _lastReachable = ok;
  _lastReachableAt = DateTime.now();
  return ok;
}

Map<String, String> get _ngmySupabaseProbeHeaders => {
      'apikey': kNgmySupabaseAnonKey,
      'Authorization': 'Bearer $kNgmySupabaseAnonKey',
    };

/// Authenticated read against Supabase — same check the app uses for real sync.
Future<bool> _probeSupabaseRest() async {
  try {
    final uri = Uri.parse('${kNgmySupabaseUrl}/rest/v1/users?select=email&limit=1');
    final resp = await http.get(uri, headers: _ngmySupabaseProbeHeaders).timeout(kNgmyReachabilityTimeout);
    if (resp.statusCode >= 200 && resp.statusCode < 500) return true;
    debugPrint('[ngmy] supabase probe status ${resp.statusCode}');
    return false;
  } catch (e) {
    debugPrint('[ngmy] supabase probe failed: $e');
    return false;
  }
}

Future<bool> _probeReachability() async {
  if (await _probeSupabaseRest()) return true;
  if (!kIsWeb) {
    return await ngmyNativeReachabilityProbe(kNgmyReachabilityTimeout);
  }
  return false;
}

/// Runs [action] with a timeout; returns [onTimeout] or rethrows on other errors.
Future<T> ngmyWithTimeout<T>(
  Future<T> Function() action, {
  Duration timeout = kNgmyCloudLoadTimeout,
  T Function()? onTimeout,
}) async {
  try {
    return await action().timeout(timeout);
  } on TimeoutException {
    if (onTimeout != null) return onTimeout();
    rethrow;
  }
}

Future<void> ngmyIgnoreTimeout(
  Future<void> Function() action, {
  Duration timeout = kNgmyCloudLoadTimeout,
}) async {
  try {
    await action().timeout(timeout);
  } on TimeoutException {
    debugPrint('[ngmy] network action timed out after ${timeout.inSeconds}s');
  } catch (e) {
    debugPrint('[ngmy] network action failed: $e');
  }
}
