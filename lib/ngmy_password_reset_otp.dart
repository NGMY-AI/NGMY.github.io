import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_supabase_auth.dart';
import 'ngmy_supabase_config.dart';

enum NgmyPasswordResetOtpMethod { supabase, resend }

/// Password reset runs while logged out — always use the anon key, never a stale user JWT.
String _resolveAnonKey(SupabaseClient client) {
  final fromClient = client.headers['apikey'] ?? client.headers['Apikey'] ?? '';
  if (fromClient.isNotEmpty) return fromClient;
  return kNgmySupabaseAnonKey;
}

Map<String, String> _anonAuthHeaders(SupabaseClient client) {
  final anonKey = _resolveAnonKey(client);
  return {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer $anonKey',
    'apikey': anonKey,
  };
}

String _functionUrl(SupabaseClient client) {
  final restUrl = client.rest.url;
  final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
  return '$base/functions/v1/$kNgmySupabaseAiFunction';
}

Future<({bool ok, Map<String, dynamic>? data, String? error})> _invokePasswordResetProxy(
  Map<String, dynamic> body,
) async {
  await ngmyWaitForSupabaseReady();
  final client = Supabase.instance.client;
  final headers = _anonAuthHeaders(client);

  try {
    final res = await client.functions.invoke(
      kNgmySupabaseAiFunction,
      body: body,
      headers: headers,
    );
    return _parseProxyMap(res.status, res.data);
  } catch (e) {
    debugPrint('[pw_reset] functions.invoke: $e');
  }

  try {
    final response = await http
        .post(Uri.parse(_functionUrl(client)), headers: headers, body: jsonEncode(body))
        .timeout(const Duration(seconds: 35));
    final decoded = response.body.isNotEmpty ? jsonDecode(response.body) : <String, dynamic>{};
    return _parseProxyMap(response.statusCode, decoded);
  } catch (e) {
    debugPrint('[pw_reset] http: $e');
    return (ok: false, data: null, error: ngmyAuthReachabilityMessage(e));
  }
}

/// Sends a 6-digit verification code to the user's email (server-side — avoids AuthRetryable on web).
Future<({bool ok, NgmyPasswordResetOtpMethod? method, String? error})> ngmyPasswordResetSendOtp(String email) async {
  final key = email.toLowerCase().trim();
  if (key.isEmpty || !key.contains('@')) {
    return (ok: false, method: null, error: 'Enter a valid email address.');
  }

  final parsed = await _invokePasswordResetProxy(<String, dynamic>{
    'action': 'passwordResetSendOtp',
    'email': key,
  });
  if (parsed.ok) {
    final methodRaw = (parsed.data?['method'] ?? 'supabase').toString();
    final method = methodRaw == 'resend' ? NgmyPasswordResetOtpMethod.resend : NgmyPasswordResetOtpMethod.supabase;
    return (ok: true, method: method, error: null);
  }
  return (ok: false, method: null, error: parsed.error ?? 'Could not send verification code.');
}

/// Verifies a Resend-delivered code (when server used the email fallback path).
Future<({bool ok, String? error})> ngmyPasswordResetVerifyResendOtp(String email, String code) async {
  final key = email.toLowerCase().trim();
  final token = code.trim();
  if (key.isEmpty || token.length < 6) {
    return (ok: false, error: 'Enter the 6-digit code from your email.');
  }

  final parsed = await _invokePasswordResetProxy(<String, dynamic>{
    'action': 'passwordResetVerifyOtp',
    'email': key,
    'code': token,
  });
  return (ok: parsed.ok, error: parsed.ok ? null : (parsed.error ?? 'Incorrect or expired code.'));
}

({bool ok, Map<String, dynamic>? data, String? error}) _parseProxyMap(int status, dynamic data) {
  if (status == 200 && data is Map) {
    if (data['ok'] == true) return (ok: true, data: Map<String, dynamic>.from(data), error: null);
    final err = data['error']?.toString();
    if (err != null && err.isNotEmpty) return (ok: false, data: null, error: err);
  }
  if (status == 401) {
    return (
      ok: false,
      data: null,
      error: 'Server rejected the request (401). The password reset service may need to be redeployed on Supabase.',
    );
  }
  if (status == 404) {
    return (ok: false, data: null, error: 'Password reset service not deployed yet. Try again later.');
  }
  if (data is Map) {
    final err = data['error']?.toString();
    if (err != null && err.isNotEmpty) return (ok: false, data: null, error: err);
  }
  return (ok: false, data: null, error: 'Could not reach the server (HTTP $status).');
}
