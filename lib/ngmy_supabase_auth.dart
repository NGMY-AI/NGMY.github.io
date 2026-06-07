import 'dart:async';

import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_supabase_columns.dart';
import 'ngmy_supabase_config.dart';

Completer<void>? _ngmySupabaseReady;

/// Called from main() after Supabase.initialize succeeds or fails.
void ngmyMarkSupabaseReady() {
  final c = _ngmySupabaseReady;
  if (c != null && !c.isCompleted) c.complete();
}

/// Ensures background Supabase init had time to finish before login queries.
Future<void> ngmyWaitForSupabaseReady({
  Duration timeout = const Duration(seconds: 12),
}) async {
  _ngmySupabaseReady ??= Completer<void>();
  try {
    await _ngmySupabaseReady!.future.timeout(timeout);
  } on TimeoutException {
    // Login may still work if init completed without marking ready.
  }
}

bool _ngmyErrorIsMissingColumn(Object error) {
  final text = error.toString().toLowerCase();
  return text.contains('42703') ||
      (text.contains('column') && text.contains('does not exist'));
}

/// Loads a user row for password login, retrying with smaller column lists when
/// the database schema is missing optional columns.
Future<Map<String, dynamic>?> ngmyFetchUserLoginRow(
  SupabaseClient client,
  String email, {
  Duration timeout = const Duration(seconds: 15),
}) async {
  const fallbacks = <String>[
    NgmySupabaseColumns.userLogin,
    'email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance,canSellOnStore',
    'email,passwordHash,username,phone,isAdmin,status,forceLogout,accountBalance',
    'email,passwordHash,username,phone,isAdmin,status,accountBalance',
    'email,passwordHash',
  ];

  Object? lastError;
  for (final columns in fallbacks) {
    try {
      final row = await client
          .from('users')
          .select(columns)
          .eq('email', email)
          .maybeSingle()
          .timeout(timeout);
      if (row == null) return null;
      return Map<String, dynamic>.from(row);
    } catch (e) {
      lastError = e;
      if (!_ngmyErrorIsMissingColumn(e)) rethrow;
    }
  }
  if (lastError != null) throw lastError!;
  return null;
}

String ngmyAuthReachabilityMessage(Object err) {
  if (ngmySupabaseErrorIsInvalidApiKey(err)) {
    return 'Supabase API key is invalid or the project is paused. '
        'Open supabase.com → Project Settings → API, copy the anon public key, '
        'update lib/ngmy_supabase_config.dart, rebuild, and redeploy.';
  }
  final text = err.toString().toLowerCase();
  if (_ngmyErrorIsMissingColumn(err)) {
    return 'Server database needs an update. In Supabase SQL Editor run '
        'supabase/users_login_columns.sql, then try logging in again.';
  }
  if (text.contains('not initialized') || text.contains('must initialize')) {
    return 'Still connecting to the server. Wait a few seconds and try again.';
  }
  if (text.contains('timeout') || text.contains('timed out')) {
    return 'Connection timed out. Check your internet and try again.';
  }
  if (text.contains('socket') ||
      text.contains('failed host lookup') ||
      text.contains('connection refused') ||
      text.contains('network is unreachable')) {
    return 'Could not reach the server. Check your internet and try again in a few seconds.';
  }
  return 'Could not sign in from the server right now. Try again in a few seconds.';
}
