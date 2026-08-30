import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_supabase_config.dart';

const String _kCivicBrightHandler = 'bright-handler';

String ngmyCurrentAuthEmail() {
  try {
    return Supabase.instance.client.auth.currentUser?.email?.toLowerCase().trim() ?? '';
  } catch (_) {
    return '';
  }
}

/// Shared Edge invoke for Civic Registry (role-filtered server APIs).
Future<Map<String, dynamic>?> ngmyCivicInvoke(Map<String, dynamic> body) async {
  try {
    final client = Supabase.instance.client;
    try {
      final res = await client.functions
          .invoke(_kCivicBrightHandler, body: body)
          .timeout(const Duration(seconds: 25));
      if (res.data is Map) return Map<String, dynamic>.from(res.data as Map);
    } catch (e) {
      debugPrint('[civic-cloud] invoke: $e');
    }
    final restUrl = client.rest.url;
    final base = restUrl.contains('/rest/v1')
        ? restUrl.substring(0, restUrl.indexOf('/rest/v1'))
        : restUrl;
    final url = '$base/functions/v1/$_kCivicBrightHandler';
    final session = client.auth.currentSession;
    final anonKey = client.headers['apikey'] ?? client.headers['Apikey'] ?? kNgmySupabaseAnonKey;
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
        .timeout(const Duration(seconds: 25));
    if (response.body.isEmpty) return null;
    final data = jsonDecode(response.body);
    if (data is Map) return Map<String, dynamic>.from(data);
  } catch (e) {
    debugPrint('[civic-cloud] HTTP: $e');
  }
  return null;
}

/// Anonymous guest enroll (no JWT required).
Future<Map<String, dynamic>?> ngmyCivicInvokeAnon(Map<String, dynamic> body) async {
  try {
    final url = '${kNgmySupabaseUrl.trim()}/functions/v1/$_kCivicBrightHandler';
    final response = await http
        .post(
          Uri.parse(url),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $kNgmySupabaseAnonKey',
            'apikey': kNgmySupabaseAnonKey,
          },
          body: jsonEncode(body),
        )
        .timeout(const Duration(seconds: 25));
    if (response.body.isEmpty) return null;
    final data = jsonDecode(response.body);
    if (data is Map) return Map<String, dynamic>.from(data);
  } catch (e) {
    debugPrint('[civic-cloud] anon HTTP: $e');
  }
  return null;
}

Future<({bool ok, String? pinSig, String? error})> ngmyCivicVerifyStatePin({
  required String email,
  required String state,
  required String pin,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicVerifyStatePin',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'pin': pin.trim(),
  });
  if (data == null) return (ok: false, pinSig: null, error: 'Could not reach server');
  if (data['ok'] == true) {
    return (ok: true, pinSig: (data['pinSig'] ?? '').toString(), error: null);
  }
  return (ok: false, pinSig: null, error: data['error']?.toString() ?? 'Incorrect PIN');
}

Future<({bool ok, String? memberEmail, String? error})> ngmyCivicGateMatchName({
  required String email,
  required String state,
  required String pinSig,
  required String fullName,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicGateMatchName',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'pinSig': pinSig,
    'fullName': fullName.trim(),
  });
  if (data == null) return (ok: false, memberEmail: null, error: 'Could not reach server');
  if (data['ok'] == true) {
    return (ok: true, memberEmail: (data['memberEmail'] ?? '').toString(), error: null);
  }
  return (ok: false, memberEmail: null, error: data['error']?.toString() ?? 'Name not found');
}

Future<({bool ok, String? error, String? registryId})> ngmyCivicGateVerifyIdentity({
  required String email,
  required String state,
  required String pinSig,
  required String memberEmail,
  String dob = '',
  String registryId = '',
  String step = 'dob',
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicGateVerifyIdentity',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'pinSig': pinSig,
    'memberEmail': memberEmail.trim().toLowerCase(),
    'dob': dob,
    'registryId': registryId,
    'step': step,
  });
  if (data == null) return (ok: false, error: 'Could not reach server', registryId: null);
  if (data['ok'] == true) {
    return (
      ok: true,
      error: null,
      registryId: (data['registryId'] ?? registryId).toString(),
    );
  }
  return (ok: false, error: data['error']?.toString() ?? 'Verification failed', registryId: null);
}

Future<Map<String, dynamic>?> ngmyCivicFetchRoster({
  required String email,
  String state = '',
  String pinSig = '',
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicFetchRoster',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    if (pinSig.isNotEmpty) 'pinSig': pinSig,
  });
  if (data == null || data['ok'] != true) return null;
  return data;
}

Future<bool> ngmyCivicPersistRoster({
  required String email,
  required Map<String, dynamic> payload,
  String state = '',
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicPersistRoster',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'members': payload['members'] ?? const [],
    'removed': payload['removed'] ?? const [],
    'deceased': payload['deceased'] ?? const [],
  });
  return data != null && data['ok'] == true;
}

Future<({bool ok, String? registryId, String? error, Map<String, dynamic>? duplicate})>
    ngmyCivicGuestEnroll(Map<String, dynamic> fields) async {
  final data = await ngmyCivicInvokeAnon({
    'action': 'civicGuestEnroll',
    ...fields,
  });
  if (data == null) {
    return (ok: false, registryId: null, error: 'Could not reach server', duplicate: null);
  }
  if (data['ok'] == true) {
    return (
      ok: true,
      registryId: (data['registryId'] ?? '').toString(),
      error: null,
      duplicate: null,
    );
  }
  Map<String, dynamic>? dup;
  final raw = data['duplicate'];
  if (raw is Map) dup = Map<String, dynamic>.from(raw);
  return (
    ok: false,
    registryId: null,
    error: data['error']?.toString() ?? 'Enrollment failed',
    duplicate: dup,
  );
}

Future<({String global, Map<String, String> byState})> ngmyCivicFetchRegistryPins({
  required String email,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicFetchRegistryPins',
    'email': email.trim().toLowerCase(),
  });
  if (data == null || data['ok'] != true) {
    return (global: '', byState: <String, String>{});
  }
  final byState = <String, String>{};
  final raw = data['byState'];
  if (raw is Map) {
    raw.forEach((k, v) {
      final pin = v.toString().trim();
      if (k.toString().trim().isNotEmpty && pin.isNotEmpty) {
        byState[k.toString().trim()] = pin;
      }
    });
  }
  return (global: (data['global'] ?? '').toString().trim(), byState: byState);
}

Future<bool> ngmyCivicSaveRegistryPins({
  required String email,
  String state = '',
  String pin = '',
  String? globalPin,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicSaveRegistryPins',
    'email': email.trim().toLowerCase(),
    if (state.trim().isNotEmpty) 'state': state.trim(),
    if (pin.trim().isNotEmpty) 'pin': pin.trim(),
    if (globalPin != null) 'globalPin': globalPin.trim(),
  });
  return data != null && data['ok'] == true;
}

Future<List<Map<String, dynamic>>> ngmyCivicFetchRegistrarApplications({
  required String email,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicFetchRegistrarApplications',
    'email': email.trim().toLowerCase(),
  });
  if (data == null || data['ok'] != true) return const [];
  if (data['networkEmpty'] == true) return const [];
  final raw = data['applications'];
  if (raw is! List) return const [];
  return raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
}

Future<bool> ngmyCivicPersistRegistrarApplications({
  required String email,
  required List<Map<String, dynamic>> applications,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicPersistRegistrarApplications',
    'email': email.trim().toLowerCase(),
    'applications': applications,
  });
  return data != null && data['ok'] == true;
}
