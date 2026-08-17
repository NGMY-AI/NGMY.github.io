/// Civic Registry enrollment duplicate detection.
class NgmyCivicRegistryEnrollment {
  static String normalizeFullName(String raw) =>
      raw.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

  static String normalizeDob(String raw) {
    final digits = raw.replaceAll(RegExp(r'\D'), '');
    if (digits.length == 8) {
      return '${digits.substring(0, 2)}/${digits.substring(2, 4)}/${digits.substring(4, 8)}';
    }
    final t = raw.trim();
    if (!RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(t)) return '';
    return t;
  }

  static String normalizeCity(String raw) => raw.trim().toLowerCase();

  /// Returns an enrolled member that matches name+dob, name+city, or all three.
  static dynamic findDuplicateEnrolledUser({
    required List<dynamic> users,
    required String fullName,
    required String dob,
    required String city,
    String? excludeEmail,
  }) {
    final nameKey = normalizeFullName(fullName);
    if (nameKey.isEmpty) return null;
    final dobKey = normalizeDob(dob);
    final cityKey = normalizeCity(city);
    final exclude = excludeEmail?.toLowerCase().trim() ?? '';

    for (final u in users) {
      final enrolled = (u as dynamic).isEnrolledInRegistry == true;
      if (!enrolled) continue;
      final email = (u as dynamic).email.toString().toLowerCase().trim();
      if (exclude.isNotEmpty && email == exclude) continue;

      final existingName = normalizeFullName(
        ((u as dynamic).fullName ?? (u as dynamic).username).toString(),
      );
      if (existingName != nameKey) continue;

      final existingDob = normalizeDob(((u as dynamic).dob ?? '').toString());
      final existingCity = normalizeCity(((u as dynamic).city ?? '').toString());

      final nameAndDob = dobKey.isNotEmpty && existingDob.isNotEmpty && dobKey == existingDob;
      final nameAndCity = cityKey.isNotEmpty && existingCity.isNotEmpty && cityKey == existingCity;
      final allThree = nameAndDob && nameAndCity;

      if (nameAndDob || nameAndCity || allThree) return u;
    }
    return null;
  }

  static String duplicateMessage(dynamic existing) {
    final name = ((existing as dynamic).fullName ?? (existing as dynamic).username).toString();
    final id = ((existing as dynamic).registryId ?? '').toString().trim();
    final city = ((existing as dynamic).city ?? '').toString().trim();
    final dob = ((existing as dynamic).dob ?? '').toString().trim();
    final parts = <String>[name];
    if (id.isNotEmpty) parts.add('ID $id');
    if (dob.isNotEmpty) parts.add('DOB $dob');
    if (city.isNotEmpty) parts.add(city);
    return 'A member is already enrolled with matching name and city or date of birth: ${parts.join(' · ')}.';
  }
}
