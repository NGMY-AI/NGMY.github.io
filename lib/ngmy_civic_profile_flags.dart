/// Profile correction flags set quietly by authorized registrars during enrollment.
library;

const String kNgmyProfileFlagIncorrect = 'incorrect';
const String kNgmyProfileFlagIncomplete = 'incomplete';
const String kNgmyProfileFlagNeedsFix = 'needs_fix';

const List<(String id, String label)> kNgmyProfileFlagStatuses = [
  (kNgmyProfileFlagIncorrect, 'Incorrect'),
  (kNgmyProfileFlagIncomplete, 'Incomplete'),
  (kNgmyProfileFlagNeedsFix, 'Needs to be fixed'),
];

const Map<String, String> kNgmyProfileFlagFieldLabels = {
  'fullName': 'Full name',
  'dob': 'Date of birth',
  'idType': 'ID type',
  'homeAddress': 'Home address',
  'phone': 'Phone number',
  'email': 'Email',
  'city': 'City',
  'room': 'Room',
  'familyMembers': 'Family size',
  'familyMales': 'Males',
  'familyFemales': 'Females',
};

String ngmyProfileFlagLabel(String status) {
  for (final s in kNgmyProfileFlagStatuses) {
    if (s.$1 == status) return s.$2;
  }
  return 'Needs attention';
}

String ngmyProfileFlagFieldLabel(String fieldKey) {
  return kNgmyProfileFlagFieldLabels[fieldKey] ?? fieldKey;
}

Map<String, Map<String, dynamic>> ngmyReadProfileFlags(Map<String, dynamic>? record) {
  final raw = record?['profileFlags'];
  if (raw is! Map) return {};
  final out = <String, Map<String, dynamic>>{};
  for (final e in raw.entries) {
    final key = e.key.toString().trim();
    if (key.isEmpty) continue;
    if (e.value is Map) {
      out[key] = Map<String, dynamic>.from(e.value as Map);
    } else if (e.value != null) {
      out[key] = {'status': e.value.toString()};
    }
  }
  return out;
}

bool ngmyMemberHasProfileFlags(Map<String, dynamic>? record) {
  return ngmyReadProfileFlags(record).isNotEmpty;
}

Map<String, dynamic> ngmyProfileFlagsToJson(Map<String, Map<String, dynamic>> flags) {
  final out = <String, dynamic>{};
  for (final e in flags.entries) {
    final status = (e.value['status'] ?? '').toString().trim();
    if (status.isEmpty) continue;
    out[e.key] = Map<String, dynamic>.from(e.value);
  }
  return out;
}

void ngmySetProfileFlag(
  Map<String, Map<String, dynamic>> flags, {
  required String fieldKey,
  required String status,
  required String notedBy,
}) {
  final key = fieldKey.trim();
  if (key.isEmpty) return;
  if (status.trim().isEmpty) {
    flags.remove(key);
    return;
  }
  flags[key] = {
    'status': status.trim(),
    'notedAt': DateTime.now().toUtc().toIso8601String(),
    'notedBy': notedBy.trim().toLowerCase(),
  };
}
