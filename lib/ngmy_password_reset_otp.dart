import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_supabase_auth.dart';

enum NgmyPasswordResetOtpMethod { supabase, resend }

/// Sends a 6-digit verification code to the user's email (server-side — avoids AuthRetryable on web).
Future<({bool ok, NgmyPasswordResetOtpMethod? method, String? error})> ngmyPasswordResetSendOtp(String email) async {
  final key = email.toLowerCase().trim();
  if (key.isEmpty || !key.contains('@')) {
    return (ok: false, method: null, error: 'Enter a valid email address.');
  }
  await ngmyWaitForSupabaseReady();
  final client = Supabase.instance.client;
  final body = <String, dynamic>{'action': 'passwordResetSendOtp', 'email': key};

  try {
    final res = await client.functions.invoke(kNgmySupabaseAiFunction, body: body);
    final parsed = _parseProxyMap(res.status, res.data);
    if (parsed.ok) {
      final methodRaw = (parsed.data?['method'] ?? 'supabase').toString();
      final method = methodRaw == 'resend' ? NgmyPasswordResetOtpMethod.resend : NgmyPasswordResetOtpMethod.supabase;
      return (ok: true, method: method, error: null);
    }
    return (ok: false, method: null, error: parsed.error ?? 'Could not send verification code.');
  } catch (e) {
    debugPrint('[pw_reset] functions.invoke send: $e');
  }

  try {
    final restUrl = client.rest.url;
    final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
    final url = '$base/functions/v1/$kNgmySupabaseAiFunction';
    final session = client.auth.currentSession;
    final anonKey = client.headers['apikey'] ?? client.headers['Apikey'] ?? '';
    final token = session?.accessToken ?? anonKey;
    final response = await http
        .post(
          Uri.parse(url),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $token',
            if (anonKey.isNotEmpty) 'apikey': anonKey,
          },
          body: jsonEncode(body),
        )
        .timeout(const Duration(seconds: 35));
    final decoded = response.body.isNotEmpty ? jsonDecode(response.body) : <String, dynamic>{};
    final parsed = _parseProxyMap(response.statusCode, decoded);
    if (parsed.ok) {
      final methodRaw = (parsed.data?['method'] ?? 'supabase').toString();
      final method = methodRaw == 'resend' ? NgmyPasswordResetOtpMethod.resend : NgmyPasswordResetOtpMethod.supabase;
      return (ok: true, method: method, error: null);
    }
    return (ok: false, method: null, error: parsed.error ?? 'Could not send verification code.');
  } catch (e) {
    debugPrint('[pw_reset] http send: $e');
    return (ok: false, method: null, error: ngmyAuthReachabilityMessage(e));
  }
}

/// Verifies a Resend-delivered code (when server used the email fallback path).
Future<({bool ok, String? error})> ngmyPasswordResetVerifyResendOtp(String email, String code) async {
  final key = email.toLowerCase().trim();
  final token = code.trim();
  if (key.isEmpty || token.length < 6) {
    return (ok: false, error: 'Enter the 6-digit code from your email.');
  }
  await ngmyWaitForSupabaseReady();
  final client = Supabase.instance.client;
  final body = <String, dynamic>{'action': 'passwordResetVerifyOtp', 'email': key, 'code': token};

  try {
    final res = await client.functions.invoke(kNgmySupabaseAiFunction, body: body);
    final parsed = _parseProxyMap(res.status, res.data);
    return (ok: parsed.ok, error: parsed.ok ? null : (parsed.error ?? 'Incorrect or expired code.'));
  } catch (e) {
    debugPrint('[pw_reset] functions.invoke verify: $e');
  }

  try {
    final restUrl = client.rest.url;
    final base = restUrl.contains('/rest/v1') ? restUrl.substring(0, restUrl.indexOf('/rest/v1')) : restUrl;
    final url = '$base/functions/v1/$kNgmySupabaseAiFunction';
    final session = client.auth.currentSession;
    final anonKey = client.headers['apikey'] ?? client.headers['Apikey'] ?? '';
    final authToken = session?.accessToken ?? anonKey;
    final response = await http
        .post(
          Uri.parse(url),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $authToken',
            if (anonKey.isNotEmpty) 'apikey': anonKey,
          },
          body: jsonEncode(body),
        )
        .timeout(const Duration(seconds: 35));
    final decoded = response.body.isNotEmpty ? jsonDecode(response.body) : <String, dynamic>{};
    final parsed = _parseProxyMap(response.statusCode, decoded);
    return (ok: parsed.ok, error: parsed.ok ? null : (parsed.error ?? 'Incorrect or expired code.'));
  } catch (e) {
    return (ok: false, error: ngmyAuthReachabilityMessage(e));
  }
}

({bool ok, Map<String, dynamic>? data, String? error}) _parseProxyMap(int status, dynamic data) {
  if (status == 200 && data is Map) {
    if (data['ok'] == true) return (ok: true, data: Map<String, dynamic>.from(data), error: null);
    final err = data['error']?.toString();
    if (err != null && err.isNotEmpty) return (ok: false, data: null, error: err);
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
