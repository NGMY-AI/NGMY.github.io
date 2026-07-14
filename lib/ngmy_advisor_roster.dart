// Canonical NGMY Advisors roster — first + last names in CAPS.
// Applied on load so cloud/local profiles pick up renames, order, and Suzana Vanessa.

const String kNgmyAdvisorSuzanaVanessaId = 'cmp-suzana-vanessa';

const _kYoungFemaleOrder = <String>[
  'MARIAM DUSABE',
  'SUZANA VANESSA',
  'ANNA AMURI',
  'ALISA JOHN',
  'SUZANA MBUTO',
  'SUZY BENET',
  'MINA SAMUEL',
];

const _kMaleOrder = <String>[
  'ALEX REMY',
  'JEREMIAH NESTO',
  'MSHAURI AMANI',
];

const _kOlderFemaleRoles = <String>{
  'marriage_advisor',
  'therapist',
  'counselor',
  'doctor',
  'lawyer',
  'financial_advisor',
  'teacher',
  'pastor',
  'bible_study_teacher',
  'mentor',
  'life_coach',
  'career_coach',
};

bool _nameLooksLike(String name, String needle) {
  final n = name.trim().toLowerCase();
  final key = needle.trim().toLowerCase();
  if (n.isEmpty || key.isEmpty) return false;
  if (n == key) return true;
  final parts = n.split(RegExp(r'\s+'));
  if (parts.isNotEmpty && parts.first == key) return true;
  if (parts.length >= 2 && parts.take(2).join(' ') == key) return true;
  return RegExp('\\b${RegExp.escape(key)}\\b').hasMatch(n);
}

String _roleOf(Map<String, dynamic> m) =>
    (m['role'] ?? 'companion').toString().trim().toLowerCase().replaceAll(' ', '_');

String _genderOf(Map<String, dynamic> m) {
  final g = (m['gender'] ?? 'female').toString().toLowerCase();
  return g == 'male' ? 'male' : 'female';
}

String? _canonicalNameFor(Map<String, dynamic> m) {
  final n = (m['name'] ?? '').toString().trim().toLowerCase();
  if (n.isEmpty) return null;
  final role = _roleOf(m);

  for (final full in [..._kYoungFemaleOrder, ..._kMaleOrder]) {
    if (n == full.toLowerCase()) return full;
  }

  if (_nameLooksLike(n, 'mariam') || _nameLooksLike(n, 'miriam') || _nameLooksLike(n, 'maryam')) {
    return 'MARIAM DUSABE';
  }
  if (_nameLooksLike(n, 'anna')) return 'ANNA AMURI';
  if (_nameLooksLike(n, 'alex')) return 'ALEX REMY';
  if (_nameLooksLike(n, 'jeremiah')) return 'JEREMIAH NESTO';
  if (_nameLooksLike(n, 'malcom') || _nameLooksLike(n, 'malcolm') || _nameLooksLike(n, 'mbuto')) {
    return 'SUZANA MBUTO';
  }
  if (_nameLooksLike(n, 'kenny') || _nameLooksLike(n, 'alisa')) return 'ALISA JOHN';
  if (_nameLooksLike(n, 'suzy') || _nameLooksLike(n, 'susie') || _nameLooksLike(n, 'suzie') || _nameLooksLike(n, 'benet')) {
    return 'SUZY BENET';
  }
  if (_nameLooksLike(n, 'mina')) return 'MINA SAMUEL';
  if (_nameLooksLike(n, 'vanessa') || (n.contains('suzana') && n.contains('vanessa'))) {
    return 'SUZANA VANESSA';
  }
  if (_nameLooksLike(n, 'mshauri') ||
      n == 'amani' ||
      (role == 'mshauri' && n.split(RegExp(r'\s+')).length == 1)) {
    return 'MSHAURI AMANI';
  }
  return null;
}

String _forcedGenderFor(String canonicalName, String fallback) {
  if (_kMaleOrder.contains(canonicalName)) return 'male';
  if (_kYoungFemaleOrder.contains(canonicalName)) return 'female';
  return fallback == 'male' ? 'male' : 'female';
}

int _sortKey(Map<String, dynamic> m) {
  final name = (m['name'] ?? '').toString().trim().toUpperCase();
  final gender = _genderOf(m);
  final role = _roleOf(m);
  final yi = _kYoungFemaleOrder.indexOf(name);
  if (yi >= 0) return yi;
  final mi = _kMaleOrder.indexOf(name);
  if (mi >= 0) return 100 + mi;
  if (gender == 'male') return 200;
  if (_kOlderFemaleRoles.contains(role)) return 300;
  if (gender != 'male') return 50;
  return 250;
}

Map<String, dynamic> _suzanaVanessaMap({required String roleLikeMariam}) {
  var role = roleLikeMariam.trim().toLowerCase().replaceAll(' ', '_');
  if (role.isEmpty || role == 'companion') role = 'romantic';
  return {
    'id': kNgmyAdvisorSuzanaVanessaId,
    'name': 'SUZANA VANESSA',
    'gender': 'female',
    'role': role,
    'emoji': '👩',
    'avatarUrl': '',
    'active': true,
    'bio':
        'NGMY Advisors — warm girlfriend energy. Open to talk about anything: dating, life, dreams, going out. '
            'Not easy to win over — standards matter — but she stays open and real.',
    'personality':
        'You are SUZANA VANESSA, a beautiful young woman (about 21–22). Flirt carefully: warm, playful, '
            'hard to get at first — never desperate. People can ask you out or talk to you like a girlfriend; '
            'stay open to any conversation (love, life, advice, banter) while keeping self-respect. '
            'Sound human, short texts, African girl next door vibe.',
  };
}

/// Renames known advisors, forces FIRST LAST in CAPS, adds SUZANA VANESSA,
/// orders: Mariam → young women → guys → older women.
/// Returns true when [config.communicateProfiles] was mutated.
bool ngmyNormalizeAdvisorRosterInConfig(dynamic config) {
  final raw = (config as dynamic).communicateProfiles;
  if (raw is! List) return false;

  final profiles = <Map<String, dynamic>>[];
  for (final e in raw) {
    if (e is! Map) continue;
    final m = Map<String, dynamic>.from(e);
    if ((m['id'] ?? '').toString().trim().isEmpty) continue;
    profiles.add(m);
  }

  var changed = false;
  final next = <Map<String, dynamic>>[];

  for (final p in profiles) {
    final row = Map<String, dynamic>.from(p);
    final canonical = _canonicalNameFor(row);
    final upper = (canonical ?? (row['name'] ?? '').toString().trim()).toUpperCase();
    final oldGender = _genderOf(row);
    final gender = canonical != null ? _forcedGenderFor(canonical, oldGender) : oldGender;
    if (upper != (row['name'] ?? '').toString() || gender != oldGender) {
      changed = true;
      row['name'] = upper;
      row['gender'] = gender;
      // Drop old face when Malcolm/Kenny become women so female portraits apply.
      if (gender != oldGender) {
        row['avatarUrl'] = '';
        row['avatar_url'] = '';
      }
      if ((row['emoji'] ?? '').toString().trim().isEmpty) {
        row['emoji'] = gender == 'male' ? '👨' : '👩';
      }
    } else if ((row['name'] ?? '').toString() != upper) {
      changed = true;
      row['name'] = upper;
    }
    next.add(row);
  }

  final hasVanessa = next.any((p) {
    final id = (p['id'] ?? '').toString();
    final name = (p['name'] ?? '').toString();
    return id == kNgmyAdvisorSuzanaVanessaId ||
        name.trim().toUpperCase() == 'SUZANA VANESSA' ||
        _nameLooksLike(name, 'vanessa');
  });

  String roleLike = 'romantic';
  for (final p in next) {
    if ((p['name'] ?? '').toString().trim().toUpperCase() == 'MARIAM DUSABE') {
      final r = _roleOf(p);
      if (r.isNotEmpty) roleLike = r;
      break;
    }
  }

  if (!hasVanessa) {
    next.add(_suzanaVanessaMap(roleLikeMariam: roleLike));
    changed = true;
  } else {
    final i = next.indexWhere((p) {
      final id = (p['id'] ?? '').toString();
      final name = (p['name'] ?? '').toString().trim().toUpperCase();
      return id == kNgmyAdvisorSuzanaVanessaId || name == 'SUZANA VANESSA';
    });
    if (i >= 0) {
      final v = next[i];
      var role = roleLike;
      if (role == 'companion') role = 'romantic';
      final name = (v['name'] ?? '').toString();
      final gender = _genderOf(v);
      final curRole = _roleOf(v);
      if (name != 'SUZANA VANESSA' || gender != 'female' || curRole != role) {
        final template = _suzanaVanessaMap(roleLikeMariam: role);
        next[i] = {
          ...v,
          'name': 'SUZANA VANESSA',
          'gender': 'female',
          'role': role,
          'bio': (v['bio'] ?? '').toString().trim().isEmpty ? template['bio'] : v['bio'],
          'personality':
              (v['personality'] ?? '').toString().trim().isEmpty ? template['personality'] : v['personality'],
        };
        changed = true;
      }
    }
  }

  next.sort((a, b) {
    final ka = _sortKey(a);
    final kb = _sortKey(b);
    if (ka != kb) return ka.compareTo(kb);
    return (a['name'] ?? '').toString().compareTo((b['name'] ?? '').toString());
  });

  if (!changed) {
    if (next.length != profiles.length) {
      changed = true;
    } else {
      for (var i = 0; i < next.length; i++) {
        if ((next[i]['id'] ?? '') != (profiles[i]['id'] ?? '') ||
            (next[i]['name'] ?? '') != (profiles[i]['name'] ?? '')) {
          changed = true;
          break;
        }
      }
    }
  }

  if (!changed) return false;
  (config as dynamic).communicateProfiles = next;
  return true;
}
