import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Civic Registry state picker limits (first anchor state is free; then 5 switches).
class NgmyCivicStateSwitches {
  static const int maxSwitches = 5;

  static String _key(String email) => 'ngmy_civic_state_switches_${email.toLowerCase().trim()}';

  static Future<void> saveLocal({
    required String email,
    required int switchesUsed,
    required String anchorState,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _key(email),
        jsonEncode({'used': switchesUsed, 'anchor': anchorState}),
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

  static int remainingSwitches({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    required int switchesUsed,
  }) {
    if (isAdmin || isCivicRegistryAdmin || isCivicRegistryKing) return maxSwitches;
    return (maxSwitches - switchesUsed).clamp(0, maxSwitches);
  }

  static bool canChangeState({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    required int switchesUsed,
  }) {
    if (isAdmin || isCivicRegistryAdmin || isCivicRegistryKing) return true;
    return switchesUsed < maxSwitches;
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

  /// Returns false when the user has no switches left.
  static bool tryConsumeSwitch({
    required bool isAdmin,
    required bool isCivicRegistryAdmin,
    bool isCivicRegistryKing = false,
    required String fromState,
    required String toState,
    required String? anchorState,
    required void Function(String anchor) setAnchorState,
    required int switchesUsed,
    required void Function(int used) setSwitchesUsed,
  }) {
    if (fromState.trim().toLowerCase() == toState.trim().toLowerCase()) return true;
    if (isAdmin || isCivicRegistryAdmin || isCivicRegistryKing) return true;

    final anchor = (anchorState ?? '').trim();
    if (anchor.isEmpty) {
      setAnchorState(toState.trim());
      return true;
    }

    if (switchesUsed >= maxSwitches) return false;
    setSwitchesUsed(switchesUsed + 1);
    return true;
  }
}
