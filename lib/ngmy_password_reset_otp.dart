import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_supabase_auth.dart';

enum NgmyPasswordResetOtpMethod { supabase, resend }

Future<({bool ok, Map<String, dynamic>? data, String? error})> _invokePasswordResetProxy(
  Map<String, dynamic> body,
) async {
  await ngmyWaitForSupabaseReady();
  try {
    final data = await ngmyEdgeInvoke(body, anonymous: true, timeout: const Duration(seconds: 35));
    if (data == null) {
      return (ok: false, data: null, error: ngmyAuthReachabilityMessage('Could not reach server'));
    }
    return _parseProxyMap(data['ok'] == true ? 200 : 400, data);
  } catch (e) {
    debugPrint('[pw_reset] edge: $e');
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
    if (err != null && err.isNotEmpty) {
      final lower = err.toLowerCase();
      if (lower.contains('apikey') && lower.contains('prompt')) {
        return (
          ok: false,
          data: null,
          error: 'Password reset is not on the server yet. In Supabase Dashboard → Edge Functions → '
              'bright-handler → paste the latest code from supabase/functions/ngmy-ai-chat/index.ts → Deploy.',
        );
      }
      return (ok: false, data: null, error: err);
    }
  }
  return (ok: false, data: null, error: 'Could not reach the server (HTTP $status).');
}
