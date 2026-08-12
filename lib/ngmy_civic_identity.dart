/// Shared Civic Registry identity matching (name / DOB / registry ID).
class NgmyCivicWalletIdentity {
  static String normalizeName(String raw) =>
      raw.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

  static String normalizeDob(String raw) {
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
    final st = state.trim().toLowerCase();
    for (final m in members) {
      final ms = (m['state'] ?? '').toString().trim().toLowerCase();
      if (st.isNotEmpty && ms.isNotEmpty && ms != st) continue;
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
