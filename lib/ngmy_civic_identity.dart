import 'package:flutter/services.dart';

import 'ngmy_civic_registry_stats.dart';

/// Shared Civic Registry identity matching (name / DOB / registry ID).
import 'ngmy_civic_registry_stats.dart';

class NgmyCivicWalletIdentity {
  static String normalizeName(String raw) =>
      raw.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

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

  static String normalizeId(String raw) =>
      raw.trim().toUpperCase().replaceAll(RegExp(r'\s+'), '');

  static Map<String, dynamic>? findByName({
    required List<Map<String, dynamic>> members,
    required String state,
    required String fullName,
  }) {
    final want = normalizeName(fullName);
    if (want.isEmpty) return null;
    for (final m in members) {
      if (!NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), state)) continue;
      if (normalizeName((m['fullName'] ?? '').toString()) == want) return m;
    }
    return null;
  }

  static bool dobMatches(Map<String, dynamic> member, String dob) {
    final a = normalizeDob((member['dob'] ?? '').toString());
    final b = normalizeDob(dob);
    return a.isNotEmpty && b.isNotEmpty && a == b;
  }

  static bool idMatches(Map<String, dynamic> member, String registryId) {
    final a = normalizeId((member['registryId'] ?? '').toString());
    final b = normalizeId(registryId);
    return a.isNotEmpty && b.isNotEmpty && a == b;
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
