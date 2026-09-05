import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_config.dart';
import 'ngmy_web_api_base.dart';

/// Public same-origin path on web — service worker proxies to Supabase Edge.
/// DevTools shows `ngmy.org/api/sync`, not `bright-handler`.
const String kNgmyEdgePublicPath = '/api/sync';

/// Server function name (never used in browser URLs on web).
const String kNgmySupabaseAiFunction = 'bright-handler';

const Duration kNgmyEdgeTimeout = Duration(seconds: 20);

/// Opaque wire codes — Network payload shows `"a":"u1"` not `"action":"adminUsersList"`.
const Map<String, String> kNgmyEdgeActionToWire = {
  'adminUsersList': 'u1',
  'privateListsFetch': 'p1',
  'privateListsPersist': 'p2',
  'transactionsFetch': 't1',
  'civicVerifyStatePin': 'c1',
  'civicGateMatchName': 'c2',
  'civicGateVerifyIdentity': 'c3',
  'civicFetchRoster': 'c4',
  'civicFetchDirectory': 'c4',
  'civicFetchRegistrarRoster': 'c4',
  'civicFetchAdminRoster': 'c4',
  'civicUpsertMember': 'c5',
  'civicRemoveMember': 'c6',
  'civicMarkDeceased': 'c7',
  'civicPersistRoster': 'c8',
  'civicGuestEnroll': 'c9',
  'civicPublicCatalog': 'ca',
  'civicFetchRegistryPins': 'cb',
  'civicSaveRegistryPins': 'cc',
  'civicFetchRegistrarApplications': 'cd',
  'civicPersistRegistrarApplications': 'ce',
  'civicFetchCitiesRooms': 'cf',
  'civicAdminSettingsFetch': 'cg',
  'civicAdminSettingsPersist': 'ch',
  'civicFetchEnrollmentLink': 'ci',
  'civicRegenerateEnrollmentLink': 'cj',
  'civicNationwideStats': 'ck',
  'civicCheckAccess': 'cl',
  'aiKeyConfigured': 'a1',
  'saveAiApiKey': 'a2',
  'verifyPasswordLogin': 'a3',
  'registerAppUser': 'a4',
  'passwordResetSendOtp': 'a5',
  'passwordResetVerifyOtp': 'a6',
  'passwordResetComplete': 'a7',
  'dbRelay': 'r1',
  'elevenlabsTts': 'v1',
  'resendEmail': 'm1',
  'geminiVirtualOutfit': 'i1',
  'pollinationsImage': 'i2',
  'chat': 'z0',
};

/// Actions that always return [networkEmpty] — skip HTTP entirely.
const Set<String> kNgmyEdgeFetchAckOnlyActions = {
  'adminUsersList',
  'privateListsFetch',
  'transactionsFetch',
  'civicAdminSettingsFetch',
};

/// Web-only — PIN values stay off the wire in DevTools.
const Set<String> kNgmyEdgeWebAckOnlyActions = {
  'civicFetchRegistryPins',
};

/// Body keys duplicated by the signed-in JWT — never send on the wire.
const Set<String> kNgmyEdgeStripWhenAuthed = {
  'email',
  'requesterEmail',
  'userEmail',
};

String ngmyEdgeInvokeUrl({bool anonymous = false}) {
  if (kIsWeb) {
    return '${Uri.base.origin}${ngmyWebApiBasePath(Uri.base.path)}$kNgmyEdgePublicPath';
  }
  return '${kNgmySupabaseUrl.trim()}/functions/v1/$kNgmySupabaseAiFunction';
}

Future<String> _freshAccessToken() async {
  try {
    final client = Supabase.instance.client;
    var session = client.auth.currentSession;
    if (session == null) return '';
    final expiresAt = session.expiresAt;
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    if (expiresAt == null || expiresAt <= now + 90) {
      try {
        final refreshed = await client.auth.refreshSession();
        session = refreshed.session ?? client.auth.currentSession;
      } catch (e) {
        debugPrint('[edge] refreshSession: $e');
      }
    }
    return session?.accessToken ?? client.auth.currentSession?.accessToken ?? '';
  } catch (_) {
    return '';
  }
}

Map<String, dynamic>? _parseEdgeBody(String raw) {
  if (raw.isEmpty) return null;
  try {
    final data = jsonDecode(raw);
    if (data is Map) return Map<String, dynamic>.from(data);
  } catch (_) {}
  return null;
}

Map<String, dynamic> ngmyEdgeWirePayload(Map<String, dynamic> body, {bool anonymous = false}) {
  final out = Map<String, dynamic>.from(body);
  final action = (out.remove('action') ?? 'chat').toString().trim();
  out['a'] = kNgmyEdgeActionToWire[action] ?? action;
  if (!anonymous) {
    String token = '';
    try {
      token = Supabase.instance.client.auth.currentSession?.accessToken ?? '';
    } catch (_) {
      token = '';
    }
    if (token.isNotEmpty) {
      for (final key in kNgmyEdgeStripWhenAuthed) {
        out.remove(key);
      }
      // Never expose fetch limits in DevTools — server uses JWT role defaults.
      if (action == 'transactionsFetch') {
        out.remove('limit');
      }
    }
  }
  return out;
}

/// Single Edge entry — web uses same-origin [/api/sync] (service worker proxy).
Future<Map<String, dynamic>?> ngmyEdgeInvoke(
  Map<String, dynamic> body, {
  bool anonymous = false,
  Duration timeout = kNgmyEdgeTimeout,
}) async {
  final action = (body['action'] ?? 'chat').toString().trim();
  if (!anonymous && kNgmyEdgeFetchAckOnlyActions.contains(action)) {
    return {'ok': true, 'networkEmpty': true};
  }
  if (kIsWeb && !anonymous && kNgmyEdgeWebAckOnlyActions.contains(action)) {
    return {'ok': true, 'networkEmpty': true};
  }

  try {
    final wire = ngmyEdgeWirePayload(body, anonymous: anonymous);
    final url = ngmyEdgeInvokeUrl(anonymous: anonymous);
    final anonKey = kNgmySupabaseAnonKey;
    final token = anonymous ? anonKey : await _freshAccessToken();

    if (!anonymous && token.isEmpty) {
      return {'ok': false, 'error': 'Please sign in again.'};
    }

    final response = await http
        .post(
          Uri.parse(url),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ${anonymous ? anonKey : token}',
            if (anonKey.isNotEmpty) 'apikey': anonKey,
          },
          body: jsonEncode(wire),
        )
        .timeout(timeout);

    final parsed = _parseEdgeBody(response.body);
    if (parsed != null) {
      if (response.statusCode == 401 && parsed['ok'] != true) {
        return {
          ...parsed,
          'ok': false,
          'error': (parsed['error'] ?? 'Please sign in again.').toString(),
        };
      }
      return parsed;
    }
    if (response.statusCode == 401) {
      return {'ok': false, 'error': 'Please sign in again.'};
    }
    if (response.statusCode >= 400) {
      return {'ok': false, 'error': 'Server error (${response.statusCode}). Try again.'};
    }
    return null;
  } catch (e) {
    debugPrint('[edge] invoke: $e');
    if (!kIsWeb) {
      try {
        final client = Supabase.instance.client;
        final res = await client.functions
            .invoke(kNgmySupabaseAiFunction, body: ngmyEdgeWirePayload(body, anonymous: anonymous))
            .timeout(timeout);
        if (res.data is Map) return Map<String, dynamic>.from(res.data as Map);
      } catch (e2) {
        debugPrint('[edge] invoke fallback: $e2');
      }
    }
    return {'ok': false, 'error': 'Could not reach server.'};
  }
}
