import 'dart:async';

import 'package:flutter/foundation.dart';

import 'ngmy_network_resilience_io.dart' if (dart.library.html) 'ngmy_network_resilience_io_stub.dart';
import 'ngmy_network_resilience_web_stub.dart' if (dart.library.html) 'ngmy_network_resilience_web.dart';
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

/// True when the device reports online and a short network probe succeeds (or recently did).
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

Future<bool> _probeReachability() async {
  try {
    if (kIsWeb) {
      final versionOk = await ngmyWebFetchOk(_webVersionJsonUrl(), kNgmyReachabilityTimeout);
      if (!versionOk) return false;
      final supabaseOk = await ngmyWebFetchOk(
        '${kNgmySupabaseUrl}/rest/v1/',
        kNgmyReachabilityTimeout,
      );
      return supabaseOk;
    }
    return await ngmyNativeReachabilityProbe(kNgmyReachabilityTimeout);
  } catch (_) {
    return false;
  }
}

/// version.json lives at site root — not under /app/{slug}.
String _webVersionJsonUrl() {
  final origin = Uri.base.origin.isNotEmpty ? Uri.base.origin : 'https://ngmy.org';
  var path = Uri.base.path;
  final appIdx = path.toLowerCase().indexOf('/app/');
  if (appIdx >= 0) path = path.substring(0, appIdx);
  if (path.isEmpty || path == '/') return '$origin/version.json';
  if (!path.endsWith('/')) path = '$path/';
  return '$origin${path}version.json';
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
