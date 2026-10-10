import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_web_flags_stub.dart' if (dart.library.html) 'ngmy_edge_web_flags_web.dart';
import 'ngmy_net_trace.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_supabase_config.dart';
import 'ngmy_web_api_base.dart';
import 'ngmy_activity_gate.dart';

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
  'civicGuestSelfUpdate': 'cx',
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
  'civicRecoveryStatus': 'cm',
  'civicRecoveryLink': 'cn',
  'civicRecoveryRemove': 'co',
  'civicRecoveryIssue': 'cp',
  'civicFetchRankings': 'cq',
  'civicHelperGifts': 'cr',
  'civicDecideRegistrarApplication': 'cs',
  'civicUserGroupsFetch': 'ct',
  'civicUserGroupsPersist': 'cu',
  'civicUserGroupsFind': 'cv',
  'civicUserGroupsJoin': 'cw',
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
  'advisorBrowserFrame': 'b1',
  'advisorBrowse': 'w1',
  'advisorBrowserShot': 'w2',
  'agentStart': 'g1',
  'agentPoll': 'g2',
  'agentStop': 'g3',
  'agentStatus': 'g4',
  'freeTimeGet': 'f1',
  'freeTimeAdd': 'f2',
  'relStatus': 'd1',
  'relTouch': 'd2',
  'relStart': 'd3',
  'relEnd': 'd4',
  'tradeAnalyze': 'x1',
  'tradeSummary': 'x2',
  'tradePaperOpen': 'x3',
  'tradePaperClose': 'x4',
  'tradeHalt': 'x5',
  'tradeRiskSet': 'x6',
  'tradeReset': 'x7',
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

/// These calls *are* the login. The email in the body is the account being
/// opened, not a duplicate of the current JWT. An anonymous storage session
/// still has an access token; stripping the email here made password login
/// and Help Mode session repair send a hash with no address, so the server
/// rejected Activate and Deactivate.
bool ngmyEdgeActionKeepsAccountFields(String action) {
  switch (action) {
    case 'verifyPasswordLogin':
    case 'registerAppUser':
    case 'passwordResetSendOtp':
    case 'passwordResetVerifyOtp':
    case 'passwordResetComplete':
      return true;
    default:
      return false;
  }
}

/// One-line record of the most recent edge round trip, e.g.
/// `civicAdminSettingsPersist via /api/sync → HTTP 403 in 812ms`. The Help
/// Mode sync report shows it so a failed save names the real cause instead
/// of a generic "cloud sync failed".
String ngmyEdgeLastTransportNote = '';

String _edgeUrlLabel(String url) {
  if (url.contains(kNgmyEdgePublicPath)) return kNgmyEdgePublicPath;
  if (url.contains('/functions/v1/')) return 'direct function';
  return url;
}

String ngmyEdgeDirectUrl() =>
    '${kNgmySupabaseUrl.trim()}/functions/v1/$kNgmySupabaseAiFunction';

String ngmyEdgeSameOriginUrl() =>
    '${Uri.base.origin}${ngmyWebApiBasePath(Uri.base.path)}$kNgmyEdgePublicPath';

String ngmyEdgeInvokeUrl({bool anonymous = false}) {
  if (kIsWeb && !ngmyWebUseDirectEdge()) return ngmyEdgeSameOriginUrl();
  return ngmyEdgeDirectUrl();
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

Map<String, dynamic> ngmyEdgeWirePayload(
  Map<String, dynamic> body, {
  bool anonymous = false,
  String? accessToken,
}) {
  final out = Map<String, dynamic>.from(body);
  final action = (out.remove('action') ?? 'chat').toString().trim();
  out['a'] = kNgmyEdgeActionToWire[action] ?? action;
  if (!anonymous && !ngmyEdgeActionKeepsAccountFields(action)) {
    var token = accessToken ?? '';
    if (accessToken == null) {
      try {
        token = Supabase.instance.client.auth.currentSession?.accessToken ?? '';
      } catch (_) {
        token = '';
      }
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

// ── Usage savers for the database relay (reads 15k+/day and writes 5k+/day from one idle user) ──
class _RelayHit {
  _RelayHit(this.data) : at = DateTime.now();
  final Map<String, dynamic> data;
  final DateTime at;
}

final Map<String, _RelayHit> _relayReadCache = {};
final Map<String, DateTime> _relayWriteCache = {};

String _relayWriteKey(Map<String, dynamic> body) {
  // Same write except for the timestamp = same data.
  final copy = Map<String, dynamic>.from(body);
  final rows = copy['rows'];
  if (rows is List) {
    copy['rows'] = rows.map((r) {
      if (r is! Map) return r;
      final m = Map<String, dynamic>.from(r)..remove('updated_at')..remove('updatedAt');
      return m;
    }).toList();
  }
  copy.remove('updated_at');
  return jsonEncode(copy);
}

/// Single Edge entry — web uses same-origin [/api/sync] (service worker proxy).
/// Database relay calls are trimmed here: while nobody is using the app (hidden or no touch for
/// 5 min) repeated reads reuse the last answer; identical reads within a few seconds are sent once;
/// re-saving exactly the same data within 5 minutes is skipped.
Future<Map<String, dynamic>?> ngmyEdgeInvoke(
  Map<String, dynamic> body, {
  bool anonymous = false,
  Duration timeout = kNgmyEdgeTimeout,
  bool preferDirect = false,
  bool fallbackOnTimeout = false,
}) async {
  final action = (body['action'] ?? 'chat').toString().trim();
  if (action != 'dbRelay') {
    return _ngmyEdgeInvokeNetwork(body,
        anonymous: anonymous, timeout: timeout, preferDirect: preferDirect, fallbackOnTimeout: fallbackOnTimeout);
  }
  final op = (body['op'] ?? '').toString();
  final isRead = op == 's';
  final isWrite = op == 'up' || op == 'u' || op == 'i';
  String? readKey;
  String? writeKey;
  try {
    if (isRead) {
      readKey = '${anonymous ? 'a' : 'u'}|${jsonEncode(body)}';
      final hit = _relayReadCache[readKey];
      if (hit != null) {
        final age = DateTime.now().difference(hit.at);
        if (age < const Duration(seconds: 5) || NgmyActivityGate.isIdle) {
          return Map<String, dynamic>.from(hit.data);
        }
      }
    } else if (isWrite) {
      writeKey = _relayWriteKey(body);
      final last = _relayWriteCache[writeKey];
      if (last != null && DateTime.now().difference(last) < const Duration(minutes: 5)) {
        return {'ok': true, 'deduped': true};
      }
    }
  } catch (_) {
    readKey = null;
    writeKey = null;
  }
  final res = await _ngmyEdgeInvokeNetwork(body,
      anonymous: anonymous, timeout: timeout, preferDirect: preferDirect, fallbackOnTimeout: fallbackOnTimeout);
  final ok = res != null && res['ok'] == true && res['error'] == null;
  if (ok && readKey != null) {
    if (_relayReadCache.length > 300) _relayReadCache.clear();
    _relayReadCache[readKey] = _RelayHit(Map<String, dynamic>.from(res));
  }
  if (isWrite || op == 'd') {
    // Anything changed → later reads must see fresh data.
    _relayReadCache.clear();
    if (ok && writeKey != null) {
      if (_relayWriteCache.length > 300) _relayWriteCache.clear();
      _relayWriteCache[writeKey] = DateTime.now();
    }
  }
  return res;
}

Future<Map<String, dynamic>?> _ngmyEdgeInvokeNetwork(
  Map<String, dynamic> body, {
  bool anonymous = false,
  Duration timeout = kNgmyEdgeTimeout,
  bool preferDirect = false,
  bool fallbackOnTimeout = false,
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
    final anonKey = kNgmySupabaseAnonKey;
    final token = anonymous ? anonKey : await _freshAccessToken();

    if (!anonymous && token.isEmpty) {
      ngmyEdgeLastTransportNote =
          '$action skipped: no Supabase session on this device (no access token)';
      return {'ok': false, 'error': 'Please sign in again.'};
    }

    final headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${anonymous ? anonKey : token}',
      if (anonKey.isNotEmpty) 'apikey': anonKey,
    };
    final payload = jsonEncode(wire);

    final urls = <String>[
      if (preferDirect) ngmyEdgeDirectUrl(),
      ngmyEdgeInvokeUrl(anonymous: anonymous),
      if (kIsWeb && !preferDirect) ngmyEdgeDirectUrl(),
    ];
    final seen = <String>{};
    http.Response? response;
    Map<String, dynamic>? parsed;
    final notes = <String>[];
    for (final url in urls) {
      if (!seen.add(url)) continue;
      ngmyNetTrace(
        'EDGE',
        '${ngmyNetTraceEdgeLabel(body, anonymous: anonymous)}${seen.length > 1 ? ' [fallback]' : ''}',
      );
      final started = DateTime.now();
      String elapsed() => '${DateTime.now().difference(started).inMilliseconds}ms';
      try {
        response = await http
            .post(Uri.parse(url), headers: headers, body: payload)
            .timeout(timeout);
        parsed = _parseEdgeBody(response.body);
        notes.add('${_edgeUrlLabel(url)} → HTTP ${response.statusCode} in ${elapsed()}');
        if (parsed != null) break;
        // Only a missing proxy (static host 404/405) justifies retrying the same
        // upstream directly; a real server error would just be sent twice.
        if (response.statusCode != 404 && response.statusCode != 405) break;
      } on TimeoutException catch (e) {
        debugPrint('[edge] invoke $url: $e');
        notes.add('${_edgeUrlLabel(url)} → timed out after ${timeout.inSeconds}s');
        // A hung same-origin proxy must not hide the direct function URL.
        // Callers opt in: a blind retry can double-apply a non-idempotent action.
        if (!fallbackOnTimeout) break;
      } catch (e) {
        debugPrint('[edge] invoke $url: $e');
        notes.add('${_edgeUrlLabel(url)} → network error in ${elapsed()}: ${e.toString().split('\n').first}');
      }
    }
    ngmyEdgeLastTransportNote = '$action: ${notes.join('; ')}';

    if (parsed != null) {
      if (response?.statusCode == 401 && parsed['ok'] != true) {
        return {
          ...parsed,
          'ok': false,
          'error': (parsed['error'] ?? 'Please sign in again.').toString(),
        };
      }
      return parsed;
    }
    if (response?.statusCode == 401) {
      return {'ok': false, 'error': 'Please sign in again.'};
    }
    if (response != null && response.statusCode >= 400) {
      return {'ok': false, 'error': 'Server error (${response.statusCode}). Try again.'};
    }
    return null;
  } catch (e) {
    debugPrint('[edge] invoke: $e');
    ngmyEdgeLastTransportNote = '$action: failed before send: ${e.toString().split('\n').first}';
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
