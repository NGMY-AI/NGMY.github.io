import 'package:flutter/services.dart';

import 'ngmy_civic_registry_stats.dart';

/// Shared Civic Registry identity matching (name / DOB / registry ID).
class NgmyCivicWalletIdentity {
  static String normalizeName(String raw) =>
      raw.trim().toLowerCase().replaceAll(RegExp(r'[^a-z0-9\s]'), '').replaceAll(RegExp(r'\s+'), ' ');

  static String digitsOnly(String raw) => raw.replaceAll(RegExp(r'\D'), '');

  /// Formats as MM/DD/YYYY while typing (auto-inserts `/`).
  static String formatDobInput(String raw) {
    final digits = digitsOnly(raw);
    if (digits.isEmpty) return '';
    final buf = StringBuffer();
    for (var i = 0; i < digits.length && i < 8; i++) {
      if (i == 2 || i == 4) buf.write('/');
      buf.write(digits[i]);
    }
    return buf.toString();
  }

  static String normalizeDob(String raw) {
    final digits = digitsOnly(raw);
    if (digits.length == 8) {
      return '${digits.substring(0, 2)}/${digits.substring(2, 4)}/${digits.substring(4, 8)}';
    }
    final t = raw.trim();
    final m = RegExp(r'^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$').firstMatch(t);
    if (m == null) return t.toLowerCase();
    final mm = m.group(1)!.padLeft(2, '0');
    final dd = m.group(2)!.padLeft(2, '0');
    final yyyy = m.group(3)!;
    return '$mm/$dd/$yyyy';
  }

  /// GA-123 4567, ga1234567, NGMY-CIVIC:GA1234567, and GA1234567 are the same ID.
  static String normalizeId(String raw) {
    var t = raw.trim().toUpperCase();
    const prefix = 'NGMY-CIVIC:';
    if (t.startsWith(prefix)) t = t.substring(prefix.length).trim();
    return t.replaceAll(RegExp(r'[^A-Z0-9]'), '');
  }

  static bool idsEqual(String a, String b) {
    final x = normalizeId(a);
    final y = normalizeId(b);
    if (x.isEmpty || y.isEmpty) return false;
    if (x == y) return true;
    final dx = digitsOnly(x);
    final dy = digitsOnly(y);
    if (dx.length >= 6 && dx == dy) return true;
    return false;
  }

  static Map<String, dynamic>? findByName({
    required List<Map<String, dynamic>> members,
    required String state,
    required String fullName,
  }) {
    final want = normalizeName(fullName);
    if (want.isEmpty) return null;
    Map<String, dynamic>? loose;
    for (final m in members) {
      if (!NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), state)) continue;
      final have = normalizeName((m['fullName'] ?? '').toString());
      if (have.isEmpty) continue;
      if (have == want) return m;
      if (loose == null && _namesCompatible(have, want)) loose = m;
    }
    return loose;
  }

  static Map<String, dynamic>? findById({
    required List<Map<String, dynamic>> members,
    required String state,
    required String registryId,
  }) {
    if (normalizeId(registryId).isEmpty) return null;
    for (final m in members) {
      if (!NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), state)) continue;
      if (idMatches(m, registryId)) return m;
    }
    return null;
  }

  static bool dobMatches(Map<String, dynamic> member, String dob) {
    final a = normalizeDob((member['dob'] ?? '').toString());
    final b = normalizeDob(dob);
    if (a.isEmpty || b.isEmpty) return false;
    return a == b || digitsOnly(a) == digitsOnly(b);
  }

  static bool idMatches(Map<String, dynamic> member, String registryId) {
    if (idsEqual((member['registryId'] ?? '').toString(), registryId)) return true;
    return idsEqual((member['previousRegistryId'] ?? '').toString(), registryId);
  }

  /// "John A Smith" matches "John Smith"; extra punctuation is ignored.
  static bool _namesCompatible(String registered, String entered) {
    if (registered == entered) return true;
    final a = registered.split(' ').where((p) => p.isNotEmpty).toList();
    final b = entered.split(' ').where((p) => p.isNotEmpty).toList();
    if (a.length < 2 || b.length < 2) return false;
    if (a.first != b.first || a.last != b.last) return false;
    if (a.length <= b.length) {
      return b.every((part) => a.contains(part));
    }
    return a.every((part) => b.contains(part) || part.length == 1);
  }
}

/// Auto-inserts `/` while typing a Civic Registry date of birth (MM/DD/YYYY).
class NgmyCivicDobInputFormatter extends TextInputFormatter {
  const NgmyCivicDobInputFormatter();

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final formatted = NgmyCivicWalletIdentity.formatDobInput(newValue.text);
    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}
