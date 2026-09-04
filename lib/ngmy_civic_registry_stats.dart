import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

const int kNgmyMaxRegistrarsPerState = 5;

/// Civic Registry per-state registrar caps and lists.
class NgmyCivicRegistryStats {
  static const _citiesRoomsBackupKey = 'ngmy_civic_cities_rooms_backup';

  static const Map<String, String> _usStateCodeByName = {
    'alabama': 'AL',
    'alaska': 'AK',
    'arizona': 'AZ',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'florida': 'FL',
    'georgia': 'GA',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY',
    'district of columbia': 'DC',
  };

  /// Lowercase hyphen slug for self-enrollment URLs (`/enroll/georgia`, `/enroll/new-york`).
  static String enrollStateSlug(String state) {
    final sk = canonicalStateKey(state);
    if (sk.isEmpty) return '';
    return sk.replaceAll(' ', '-');
  }

  /// Resolve a URL slug back to a display state name (`georgia` → `Georgia`).
  static String? stateFromEnrollSlug(String slug) {
    final raw = slug.trim().toLowerCase();
    if (raw.isEmpty) return null;
    final key = raw.replaceAll('-', ' ');
    if (_usStateCodeByName.containsKey(key)) return _displayStateNameFromKey(key);
    for (final e in _usStateCodeByName.entries) {
      if (e.value.toLowerCase() == key) return _displayStateNameFromKey(e.key);
    }
    return null;
  }

  static String _displayStateNameFromKey(String key) {
    return key
        .split(' ')
        .map((w) => w.isEmpty ? w : '${w[0].toUpperCase()}${w.substring(1)}')
        .join(' ');
  }

  /// Match "Georgia", "GA", etc. for roster / gate lookups.
  static String canonicalStateKey(String state) {
    final raw = state.trim().toLowerCase();
    if (raw.isEmpty) return '';
    if (_usStateCodeByName.containsKey(raw)) return raw;
    for (final e in _usStateCodeByName.entries) {
      if (raw == e.value.toLowerCase()) return e.key;
    }
    return raw;
  }

  /// True for the 50 US states and DC — Civic Registry nationwide counts ignore anywhere else.
  static bool isKnownUsState(String state) {
    final raw = state.trim().toLowerCase();
    if (raw.isEmpty) return false;
    if (_usStateCodeByName.containsKey(raw)) return true;
    for (final e in _usStateCodeByName.entries) {
      if (raw == e.value.toLowerCase()) return true;
    }
    return false;
  }

  static bool statesMatch(String a, String b) {
    final ka = canonicalStateKey(a);
    final kb = canonicalStateKey(b);
    return ka.isNotEmpty && kb.isNotEmpty && ka == kb;
  }

  static Future<void> saveCitiesRoomsLocalBackup({
    required Map<String, List<String>> civicCitiesByState,
    required List<String> rooms,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _citiesRoomsBackupKey,
        jsonEncode({
          'civicCitiesByState': civicCitiesByState.map((k, v) => MapEntry(k, v)),
          'rooms': rooms,
          'savedAt': DateTime.now().toUtc().toIso8601String(),
        }),
      );
    } catch (_) {}
  }

  static Future<({Map<String, List<String>> byState, List<String> rooms})> loadCitiesRoomsLocalBackup() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_citiesRoomsBackupKey);
      if (raw == null || raw.isEmpty) {
        return (byState: <String, List<String>>{}, rooms: <String>[]);
      }
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return (byState: <String, List<String>>{}, rooms: <String>[]);
      final byState = parseCivicCitiesByState(decoded['civicCitiesByState']);
      final roomsRaw = decoded['rooms'];
      final rooms = roomsRaw is List
          ? roomsRaw.map((e) => e.toString().trim()).where((e) => e.isNotEmpty).toList()
          : <String>[];
      return (byState: byState, rooms: rooms);
    } catch (_) {
      return (byState: <String, List<String>>{}, rooms: <String>[]);
    }
  }

  /// Union remote additions into local — used on read/bootstrap, not on explicit delete writes.
  static Map<String, List<String>> mergeCitiesByState(
    Map<String, List<String>> local,
    Map<String, List<String>> remote,
  ) {
    final out = Map<String, List<String>>.from(local);
    for (final entry in remote.entries) {
      final st = entry.key.trim();
      if (st.isEmpty) continue;
      final localList = out[st] ?? const <String>[];
      out[st] = <String>{
        ...localList,
        ...entry.value.map((c) => c.trim()).where((c) => c.isNotEmpty),
      }.toList();
    }
    return out;
  }

  static List<String> mergeRooms(List<String> local, List<String> remote) {
    return <String>{
      ...local.map((r) => r.trim()).where((r) => r.isNotEmpty),
      ...remote.map((r) => r.trim()).where((r) => r.isNotEmpty),
    }.toList();
  }

  static Map<String, List<String>> parseCivicCitiesByState(dynamic raw) {
    if (raw is! Map) return {};
    final out = <String, List<String>>{};
    for (final e in raw.entries) {
      final state = e.key.toString().trim();
      if (state.isEmpty) continue;
      final list = e.value;
      if (list is List) {
        out[state] = list.map((c) => c.toString().trim()).where((c) => c.isNotEmpty).toList();
      }
    }
    return out;
  }

  static List<String> citiesForState({
    required Map<String, List<String>> civicCitiesByState,
    required List<String> legacyCities,
    required String state,
  }) {
    final st = state.trim().toLowerCase();
    if (st.isEmpty) return const [];
    if (civicCitiesByState.isNotEmpty) {
      for (final e in civicCitiesByState.entries) {
        if (e.key.trim().toLowerCase() == st) {
          return List<String>.from(e.value);
        }
      }
      return const [];
    }
    if (legacyCities.isNotEmpty) return List<String>.from(legacyCities);
    return const [];
  }

  static Map<String, List<String>> migrateLegacyCities({
    required Map<String, List<String>> civicCitiesByState,
    required List<String> legacyCities,
    String defaultState = 'Georgia',
  }) {
    if (civicCitiesByState.isNotEmpty || legacyCities.isEmpty) {
      return civicCitiesByState;
    }
    return {defaultState: List<String>.from(legacyCities)};
  }

  static Map<String, List<String>> setCitiesForState({
    required Map<String, List<String>> civicCitiesByState,
    required String state,
    required List<String> cities,
  }) {
    final st = state.trim();
    final next = Map<String, List<String>>.from(civicCitiesByState);
    if (st.isEmpty) return next;
    next[st] = cities.map((c) => c.trim()).where((c) => c.isNotEmpty).toList();
    return next;
  }

  static List<String> allCitiesUnion(Map<String, List<String>> civicCitiesByState) {
    final seen = <String>{};
    final out = <String>[];
    for (final list in civicCitiesByState.values) {
      for (final c in list) {
        final t = c.trim();
        if (t.isEmpty || !seen.add(t)) continue;
        out.add(t);
      }
    }
    out.sort((a, b) => a.toLowerCase().compareTo(b.toLowerCase()));
    return out;
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static String registrarStateForUser({
    required String email,
    required String userState,
    required List<Map<String, dynamic>> applications,
  }) {
    final key = _emailKey(email);
    Map<String, dynamic>? best;
    for (final a in applications) {
      if ((a['userEmail'] ?? '').toString().toLowerCase().trim() != key) continue;
      if ((a['status'] ?? '').toString().toLowerCase() != 'approved') continue;
      best = a;
    }
    if (best != null) {
      final s = (best['state'] ?? '').toString().trim();
      if (s.isNotEmpty) return s;
    }
    return userState.trim();
  }

  static bool isRegistrarAssignedToState({
    required String email,
    required String userState,
    required bool isAuthorizedRegistrar,
    required List<Map<String, dynamic>> applications,
    required String state,
  }) {
    if (!isAuthorizedRegistrar) return false;
    final st = NgmyCivicRegistryStats.canonicalStateKey(state);
    final key = _emailKey(email);
    for (final a in applications) {
      if ((a['userEmail'] ?? '').toString().toLowerCase().trim() != key) continue;
      final status = (a['status'] ?? '').toString().toLowerCase();
      if (status != 'approved' && status != 'pending') continue;
      if (NgmyCivicRegistryStats.statesMatch((a['state'] ?? '').toString(), state)) return true;
    }
    // Home state from approved application — never treat a temporary
    // viewing state (user.state after a switch) as registrar assignment.
    final serving = registrarStateForUser(
      email: email,
      userState: userState,
      applications: applications,
    );
    return NgmyCivicRegistryStats.statesMatch(serving, state);
  }

  static List<Map<String, dynamic>> approvedApplicationsForState(
    List<Map<String, dynamic>> applications,
    String state,
  ) {
    return applications.where((a) {
      if ((a['status'] ?? '').toString().toLowerCase() != 'approved') return false;
      return NgmyCivicRegistryStats.statesMatch((a['state'] ?? '').toString(), state);
    }).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  /// True when this state has at least one Authorized Registrar
  /// (approved application and/or an active registrar user assigned there).
  /// Member PIN / name / DOB / registry ID unlock is required only then.
  static bool stateHasAuthorizedRegistrar({
    required String state,
    required List<Map<String, dynamic>> applications,
    Iterable<dynamic> users = const [],
  }) {
    if (state.trim().isEmpty) return false;
    if (approvedApplicationsForState(applications, state).isNotEmpty) return true;
    if (users.isEmpty) return false;
    return activeRegistrarsInState(
          state: state,
          applications: applications,
          users: users,
        ) >
        0;
  }

  static int activeRegistrarsInState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
    bool excludeRegistryAdmins = true,
  }) {
    final emails = <String>{};
    for (final u in users) {
      final isReg = (u as dynamic).isAuthorizedRegistrar == true;
      if (!isReg) continue;
      if (excludeRegistryAdmins && (u as dynamic).isCivicRegistryAdmin == true) continue;
      final email = (u as dynamic).email.toString();
      final userState = (u as dynamic).state.toString();
      if (isRegistrarAssignedToState(
        email: email,
        userState: userState,
        isAuthorizedRegistrar: true,
        applications: applications,
        state: state,
      )) {
        emails.add(_emailKey(email));
      }
    }
    return emails.length;
  }

  static int slotsRemaining({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final used = activeRegistrarsInState(
      state: state,
      applications: applications,
      users: users,
    );
    return (kNgmyMaxRegistrarsPerState - used).clamp(0, kNgmyMaxRegistrarsPerState);
  }

  static bool canApproveRegistrarForState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
    bool applicantIsRegistryAdmin = false,
  }) {
    if (applicantIsRegistryAdmin) return true;
    return slotsRemaining(state: state, applications: applications, users: users) > 0;
  }

  static DateTime? _applicationTime(Map<String, dynamic> a) {
    final raw = (a['reviewedAt'] ?? a['approvedAt'] ?? a['createdAt'] ?? a['updatedAt'] ?? '').toString();
    if (raw.trim().isEmpty) return null;
    return DateTime.tryParse(raw)?.toUtc();
  }

  /// Email of the earliest still-active Authorized Registrar for [state]
  /// (the first of up to five). Civic Registry Admin/King are not this slot.
  static String? firstAuthorizedRegistrarEmail({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final st = state.trim();
    if (st.isEmpty) return null;
    final active = <String>{};
    for (final u in users) {
      final isReg = (u as dynamic).isAuthorizedRegistrar == true;
      if (!isReg) continue;
      if ((u as dynamic).isCivicRegistryAdmin == true) continue;
      if ((u as dynamic).isCivicRegistryKing == true) continue;
      final email = (u as dynamic).email.toString();
      final userState = (u as dynamic).state.toString();
      if (isRegistrarAssignedToState(
        email: email,
        userState: userState,
        isAuthorizedRegistrar: true,
        applications: applications,
        state: st,
      )) {
        active.add(_emailKey(email));
      }
    }
    if (active.isEmpty) return null;

    final approved = approvedApplicationsForState(applications, st)
        .where((a) => active.contains(_emailKey((a['userEmail'] ?? '').toString())))
        .toList();
    approved.sort((a, b) {
      final ta = _applicationTime(a);
      final tb = _applicationTime(b);
      if (ta == null && tb == null) return 0;
      if (ta == null) return 1;
      if (tb == null) return -1;
      return ta.compareTo(tb);
    });
    if (approved.isNotEmpty) {
      final email = _emailKey((approved.first['userEmail'] ?? '').toString());
      if (email.isNotEmpty) return email;
    }
    final leftover = active.toList()..sort();
    return leftover.isEmpty ? null : leftover.first;
  }

  static bool isFirstAuthorizedRegistrar({
    required String email,
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final first = firstAuthorizedRegistrarEmail(
      state: state,
      applications: applications,
      users: users,
    );
    if (first == null || first.isEmpty) return false;
    return first == _emailKey(email);
  }

  /// Registrars listed for a state (includes Civic Registry Admin on every state).
  static List<dynamic> registrarsListedForState({
    required String state,
    required List<Map<String, dynamic>> applications,
    required Iterable<dynamic> users,
  }) {
    final st = state.trim().toLowerCase();
    final out = <dynamic>[];
    for (final u in users) {
      final isReg = (u as dynamic).isAuthorizedRegistrar == true;
      if (!isReg) continue;
      if ((u as dynamic).isCivicRegistryAdmin == true) {
        out.add(u);
        continue;
      }
      final email = (u as dynamic).email.toString();
      final userState = (u as dynamic).state.toString();
      if (isRegistrarAssignedToState(
        email: email,
        userState: userState,
        isAuthorizedRegistrar: true,
        applications: applications,
        state: st,
      )) {
        out.add(u);
      }
    }
    return out;
  }
}
