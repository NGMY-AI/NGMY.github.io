import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Civic Registry state picker limits for normal members.
///
/// First anchor state is free. Members then get [maxSwitches] changes; after
/// that they are locked for [lockDuration], then the counter resets.
/// Authorized Registrars, Kings, and Admins are unlimited.
class NgmyCivicStateSwitches {
  static const int maxSwitches = 8;
  static const Duration lockDuration = Duration(hours: 1);

  static String _key(String email) => 'ngmy_civic_state_switches_${email.toLowerCase().trim()}';

  static DateTime? parseLockedUntil(dynamic raw) {
    final s = (raw ?? '').toString().trim();
    if (s.isEmpty) return null;
    return DateTime.tryParse(s)?.toUtc();
  }

  static Future<void> saveLocal({
    required String email,
    required int switchesUsed,
    required String anchorState,
    DateTime? lockedUntil,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _key(email),
        jsonEncode({
          'used': switchesUsed,
          'anchor': anchorState,
          'lockedUntil': lockedUntil?.toUtc().toIso8601String() ?? '',
        }),
      );
    } catch (_) {}
  }

  static Future<Map<String, dynamic>?> loadLocal(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(email));
      if (raw == null || raw.isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (_) {}
    return null;
  }

  /// Clears an expired lock and resets the counter. Returns true if reset.
  static bool refreshLockIfNeeded({
    required int switchesUsed,
    required DateTime? lockedUntil,
    required void Function(int used) setSwitchesUsed,
    required void Function(DateTime? until) setLockedUntil,
  }) {
    if (lockedUntil == null) return false;
    if (DateTime.now().toUtc().isBefore(lockedUntil.toUtc())) return false;
    setSwitchesUsed(0);
    setLockedUntil(null);
    return true;
  }

  static bool _unlimited({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    required bool isCivicRegistryKing,
    required bool isAuthorizedRegistrar,
  }) =>
      isAdmin || isCivicRegistryAdmin || isCivicRegistryKing || isAuthorizedRegistrar;

  static int remainingSwitches({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    bool isAuthorizedRegistrar = false,
    required int switchesUsed,
    DateTime? lockedUntil,
  }) {
    if (_unlimited(
      isAdmin: isAdmin,
      isCivicRegistryAdmin: isCivicRegistryAdmin,
      isCivicRegistryKing: isCivicRegistryKing,
      isAuthorizedRegistrar: isAuthorizedRegistrar,
    )) {
      return maxSwitches;
    }
    var used = switchesUsed;
    DateTime? lock = lockedUntil;
    refreshLockIfNeeded(
      switchesUsed: used,
      lockedUntil: lock,
      setSwitchesUsed: (n) => used = n,
      setLockedUntil: (u) => lock = u,
    );
    if (lock != null && DateTime.now().toUtc().isBefore(lock!.toUtc())) {
      return 0;
    }
    return (maxSwitches - used).clamp(0, maxSwitches);
  }

  static bool canChangeState({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    bool isAuthorizedRegistrar = false,
    required int switchesUsed,
    DateTime? lockedUntil,
  }) {
    if (_unlimited(
      isAdmin: isAdmin,
      isCivicRegistryAdmin: isCivicRegistryAdmin,
      isCivicRegistryKing: isCivicRegistryKing,
      isAuthorizedRegistrar: isAuthorizedRegistrar,
    )) {
      return true;
    }
    var used = switchesUsed;
    DateTime? lock = lockedUntil;
    refreshLockIfNeeded(
      switchesUsed: used,
      lockedUntil: lock,
      setSwitchesUsed: (n) => used = n,
      setLockedUntil: (u) => lock = u,
    );
    if (lock != null && DateTime.now().toUtc().isBefore(lock!.toUtc())) {
      return false;
    }
    return used < maxSwitches;
  }

  /// Human-readable status for the Rankings footer.
  static String statusLabel({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    bool isAuthorizedRegistrar = false,
    required int switchesUsed,
    DateTime? lockedUntil,
  }) {
    if (_unlimited(
      isAdmin: isAdmin,
      isCivicRegistryAdmin: isCivicRegistryAdmin,
      isCivicRegistryKing: isCivicRegistryKing,
      isAuthorizedRegistrar: isAuthorizedRegistrar,
    )) {
      return 'State changes: unlimited';
    }
    var used = switchesUsed;
    DateTime? lock = lockedUntil;
    refreshLockIfNeeded(
      switchesUsed: used,
      lockedUntil: lock,
      setSwitchesUsed: (n) => used = n,
      setLockedUntil: (u) => lock = u,
    );
    if (lock != null && DateTime.now().toUtc().isBefore(lock!.toUtc())) {
      final mins = lock!.toUtc().difference(DateTime.now().toUtc()).inMinutes.clamp(1, 60);
      return 'State changes locked — try again in ${mins}m';
    }
    final left = (maxSwitches - used).clamp(0, maxSwitches);
    return 'State changes left: $left';
  }

  /// Gate unlock / first PIN state — sets anchor, does not consume a switch.
  static void onGateUnlock({
    required void Function(String anchorState) setAnchorState,
    required void Function(String state) setUserState,
    required String state,
    required String? currentAnchor,
  }) {
    final anchor = (currentAnchor ?? '').trim();
    if (anchor.isEmpty) {
      setAnchorState(state.trim());
    }
    setUserState(state.trim());
  }

  /// Returns false when the user has no switches left (or is still locked).
  static bool tryConsumeSwitch({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    bool isAuthorizedRegistrar = false,
    required String fromState,
    required String toState,
    required String? anchorState,
    required void Function(String anchor) setAnchorState,
    required int switchesUsed,
    required void Function(int used) setSwitchesUsed,
    DateTime? lockedUntil,
    required void Function(DateTime? until) setLockedUntil,
  }) {
    if (fromState.trim().toLowerCase() == toState.trim().toLowerCase()) return true;
    if (_unlimited(
      isAdmin: isAdmin,
      isCivicRegistryAdmin: isCivicRegistryAdmin,
      isCivicRegistryKing: isCivicRegistryKing,
      isAuthorizedRegistrar: isAuthorizedRegistrar,
    )) {
      return true;
    }

    var used = switchesUsed;
    DateTime? lock = lockedUntil;
    refreshLockIfNeeded(
      switchesUsed: used,
      lockedUntil: lock,
      setSwitchesUsed: (n) {
        used = n;
        setSwitchesUsed(n);
      },
      setLockedUntil: (u) {
        lock = u;
        setLockedUntil(u);
      },
    );

    if (lock != null && DateTime.now().toUtc().isBefore(lock!.toUtc())) {
      return false;
    }

    final anchor = (anchorState ?? '').trim();
    if (anchor.isEmpty) {
      setAnchorState(toState.trim());
      return true;
    }

    if (used >= maxSwitches) return false;
    final next = used + 1;
    setSwitchesUsed(next);
    if (next >= maxSwitches) {
      setLockedUntil(DateTime.now().toUtc().add(lockDuration));
    }
    return true;
  }
}
