import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_civic_registry_members.dart';

const Duration _kCivicCloudTimeout = Duration(seconds: 20);

String ngmyCurrentAuthEmail() {
  try {
    return Supabase.instance.client.auth.currentUser?.email?.toLowerCase().trim() ?? '';
  } catch (_) {
    return '';
  }
}

/// Shared Edge invoke for Civic Registry (role-filtered server APIs).
Future<Map<String, dynamic>?> ngmyCivicInvoke(Map<String, dynamic> body) async {
  return ngmyEdgeInvoke(body, timeout: _kCivicCloudTimeout);
}

/// Anonymous guest enroll (no JWT required).
Future<Map<String, dynamic>?> ngmyCivicInvokeAnon(Map<String, dynamic> body) async {
  return ngmyEdgeInvoke(body, anonymous: true, timeout: _kCivicCloudTimeout);
}

String _civicCloudError(Map<String, dynamic>? data, String fallback) {
  if (data == null) return fallback;
  final err = (data['error'] ?? data['message'] ?? '').toString().trim();
  if (err.isNotEmpty) return err;
  return fallback;
}

Map<String, dynamic> _slimMemberForCloud(Map<String, dynamic> member) {
  final out = Map<String, dynamic>.from(member);
  out.remove('idPhoto');
  out.remove('idPhotoData');
  out.remove('idPhotoBase64');
  // Keep path only — never inline blobs.
  return out;
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
  if (data == null) {
    return (ok: false, pinSig: null, error: 'Could not reach server. Check your connection and try again.');
  }
  if (data['ok'] == true) {
    return (ok: true, pinSig: (data['pinSig'] ?? '').toString(), error: null);
  }
  return (
    ok: false,
    pinSig: null,
    error: _civicCloudError(data, 'Incorrect PIN'),
  );
}

Future<({bool allowed, String? error})> ngmyCivicCheckAccess({
  required String email,
  String state = '',
  String memberEmail = '',
  String registryId = '',
  String fullName = '',
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicCheckAccess',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    if (memberEmail.trim().isNotEmpty) 'memberEmail': memberEmail.trim().toLowerCase(),
    if (registryId.trim().isNotEmpty) 'registryId': registryId.trim(),
    if (fullName.trim().isNotEmpty) 'fullName': fullName.trim(),
  });
  if (data == null) return (allowed: true, error: null);
  if (data['ok'] == true && data['allowed'] == false) {
    return (allowed: false, error: _civicCloudError(data, 'You are blocked from Civic Registry.'));
  }
  return (allowed: true, error: null);
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
  if (data == null) {
    return (ok: false, memberEmail: null, error: 'Could not reach server. Check your connection and try again.');
  }
  if (data['ok'] == true) {
    return (ok: true, memberEmail: (data['memberEmail'] ?? '').toString(), error: null);
  }
  return (ok: false, memberEmail: null, error: _civicCloudError(data, 'Name not found'));
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
  if (data == null) {
    return (ok: false, error: 'Could not reach server. Check your connection and try again.', registryId: null);
  }
  if (data['ok'] == true) {
    return (
      ok: true,
      error: null,
      registryId: (data['registryId'] ?? registryId).toString(),
    );
  }
  return (ok: false, error: _civicCloudError(data, 'Verification failed'), registryId: null);
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
  if (data['networkEmpty'] == true || data['needsUnlock'] == true) return null;
  return data;
}

/// Privacy-safe nationwide counters computed once from the authoritative
/// server ledger. Every signed-in user receives the same numbers.
Future<Map<String, dynamic>?> ngmyCivicFetchNationwideStats() async {
  final data = await ngmyCivicInvoke({'action': 'civicNationwideStats'});
  if (data == null || data['ok'] != true) return null;
  return data;
}

/// Guest self-enrollment — cities/rooms and enrollment flag (no auth).
/// Pass [state] so Network only receives that state's cities (not the full US map).
Future<Map<String, dynamic>?> ngmyCivicFetchPublicCatalog({
  String state = '',
  String linkToken = '',
  int linkVersion = 0,
}) async {
  return ngmyCivicInvokeAnon({
    'action': 'civicPublicCatalog',
    if (state.trim().isNotEmpty) 'state': state.trim(),
    if (linkToken.trim().isNotEmpty) 'linkToken': linkToken.trim(),
    if (linkVersion > 0) 'k': linkVersion,
  });
}

Future<({bool ok, String url, String linkToken, int linkVersion, String? error})> ngmyCivicFetchEnrollmentLink({
  required String email,
  required String state,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicFetchEnrollmentLink',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'registrarToken': NgmyCivicRegistryMembers.registrarLinkToken(email),
  });
  if (data == null) {
    return (ok: false, url: '', linkToken: '', linkVersion: 0, error: 'Could not reach server.');
  }
  if (data['ok'] == true) {
    final version = int.tryParse('${data['linkVersion'] ?? data['version'] ?? ''}') ?? 1;
    return (
      ok: true,
      url: (data['url'] ?? '').toString(),
      linkToken: (data['linkToken'] ?? '').toString(),
      linkVersion: version,
      error: null,
    );
  }
  return (
    ok: false,
    url: '',
    linkToken: '',
    linkVersion: 0,
    error: _civicCloudError(data, 'Could not load enrollment link'),
  );
}

Future<({bool ok, String url, String linkToken, int linkVersion, String? error})> ngmyCivicRegenerateEnrollmentLink({
  required String email,
  required String state,
}) async {
  final data = await ngmyCivicInvoke({
    'action': 'civicRegenerateEnrollmentLink',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
  });
  if (data == null) {
    return (ok: false, url: '', linkToken: '', linkVersion: 0, error: 'Could not reach server.');
  }
  if (data['ok'] == true) {
    final version = int.tryParse('${data['linkVersion'] ?? data['version'] ?? ''}') ?? 1;
    return (
      ok: true,
      url: (data['url'] ?? '').toString(),
      linkToken: (data['linkToken'] ?? '').toString(),
      linkVersion: version,
      error: null,
    );
  }
  return (
    ok: false,
    url: '',
    linkToken: '',
    linkVersion: 0,
    error: _civicCloudError(data, 'Could not regenerate enrollment link'),
  );
}

/// Immediate single-member save to database (registrar / admin enroll).
Future<({bool ok, String? registryId, String? error})> ngmyCivicUpsertMember({
  required String email,
  required Map<String, dynamic> member,
  String state = '',
}) async {
  final slim = _slimMemberForCloud(member);
  Future<({bool ok, String? registryId, String? error})> once() async {
    final data = await ngmyCivicInvoke({
      'action': 'civicUpsertMember',
      'email': email.trim().toLowerCase(),
      'state': state.trim().isNotEmpty ? state.trim() : (slim['state'] ?? '').toString(),
      'member': slim,
    });
    if (data == null) {
      return (ok: false, registryId: null, error: 'Could not reach server.');
    }
    if (data['ok'] == true) {
      return (
        ok: true,
        registryId: (data['registryId'] ?? slim['registryId'] ?? '').toString(),
        error: null,
      );
    }
    return (ok: false, registryId: null, error: _civicCloudError(data, 'Cloud save failed'));
  }

  var result = await once();
  if (!result.ok) {
    // One retry after forced session refresh.
    try {
      await Supabase.instance.client.auth.refreshSession();
    } catch (_) {}
    result = await once();
  }
  return result;
}

Future<({bool ok, String? error})> ngmyCivicPersistRoster({
  required String email,
  required Map<String, dynamic> payload,
  String state = '',
}) async {
  final membersRaw = payload['members'];
  final members = membersRaw is List
      ? membersRaw
          .whereType<Map>()
          .map((e) => _slimMemberForCloud(Map<String, dynamic>.from(e)))
          .toList()
      : <Map<String, dynamic>>[];
  final data = await ngmyCivicInvoke({
    'action': 'civicPersistRoster',
    'email': email.trim().toLowerCase(),
    'state': state.trim(),
    'members': members,
    'removed': payload['removed'] ?? const [],
    'deceased': payload['deceased'] ?? const [],
  });
  if (data == null) {
    return (ok: false, error: 'Could not reach server.');
  }
  if (data['ok'] == true) return (ok: true, error: null);
  return (ok: false, error: _civicCloudError(data, 'Cloud save failed'));
}

Future<({bool ok, String? registryId, String? error, Map<String, dynamic>? duplicate})>
    ngmyCivicGuestEnroll(Map<String, dynamic> fields) async {
  Future<({bool ok, String? registryId, String? error, Map<String, dynamic>? duplicate})> once() async {
    final data = await ngmyCivicInvokeAnon({
      'action': 'civicGuestEnroll',
      ...fields,
    });
    if (data == null) {
      return (ok: false, registryId: null, error: 'Could not reach server', duplicate: null);
    }
    if (data['ok'] == true) {
      final rid = (data['registryId'] ?? '').toString().trim();
      if (rid.isEmpty) {
        return (
          ok: false,
          registryId: null,
          error: 'Enrollment did not return a Registry ID. Please try again.',
          duplicate: null,
        );
      }
      return (
        ok: true,
        registryId: rid,
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
      error: _civicCloudError(data, 'Enrollment failed'),
      duplicate: dup,
    );
  }

  var result = await once();
  if (!result.ok && result.duplicate == null) {
    await Future<void>.delayed(const Duration(milliseconds: 600));
    result = await once();
  }
  return result;
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
  if (raw is List && raw.isNotEmpty) {
    return raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }
  final mine = data['myApplications'];
  if (mine is List && mine.isNotEmpty) {
    return mine.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }
  return const [];
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
