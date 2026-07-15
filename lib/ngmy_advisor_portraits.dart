import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/services.dart' show rootBundle;
import 'package:image/image.dart' as img;

/// Photoreal African advisor portraits bundled under [assets/images/advisors/].
/// When a role+gender photo is missing, we fall back to a local illustrated
/// portrait (same offline behavior as before — never a blank emoji if we can help).

const int _kPortraitSize = 220;

enum _HairStyle { afro, braids, locs, bantuKnots, headwrap, fadeShort, twists, bald }

class _PortraitSpec {
  const _PortraitSpec({
    required this.skin,
    required this.hair,
    required this.style,
    required this.bg,
    this.beard = false,
    this.earrings = false,
    this.wrapColors,
  });
  final int skin;
  final int hair;
  final _HairStyle style;
  final List<int> bg;
  final bool beard;
  final bool earrings;
  final List<int>? wrapColors;
}

const List<_PortraitSpec> _femaleSpecs = [
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF0F766E, 0xFF134E4A], earrings: true),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.braids, bg: [0xFFBE185D, 0xFF831843], earrings: true),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF1A120D, style: _HairStyle.headwrap, bg: [0xFFB8860B, 0xFF8B6914], wrapColors: [0xFFD4AF37, 0xFFCE1021, 0xFF1D4D2B]),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.bantuKnots, bg: [0xFF7C3AED, 0xFF5B21B6], earrings: true),
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF17110D, style: _HairStyle.bantuKnots, bg: [0xFFEA580C, 0xFFC2410C], earrings: true),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.locs, bg: [0xFF2563EB, 0xFF1D4ED8], earrings: true),
];

const List<_PortraitSpec> _maleSpecs = [
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF150F0C, style: _HairStyle.fadeShort, bg: [0xFF1E3A8A, 0xFF1E40AF]),
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF166534, 0xFF14532D]),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF17110D, style: _HairStyle.locs, bg: [0xFFC2410C, 0xFF9A3412]),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.bald, bg: [0xFF0F766E, 0xFF115E59], beard: true),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.twists, bg: [0xFFB91C1C, 0xFF7F1D1D]),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.fadeShort, bg: [0xFF4338CA, 0xFF3730A3], beard: true),
];

final _portraitCache = <String, Uint8List>{};
final _assetCache = <String, Uint8List>{};
var _assetsWarmed = false;

/// Map roles that share a photo when a dedicated shot isn’t bundled yet.
const _kRolePhotoAlias = <String, String>{
  'counselor': 'therapist',
  'life_coach': 'therapist',
  'mentor': 'career_coach',
  'debater': 'bible_study_teacher',
  'translator': 'teacher',
  'friend': 'companion',
  'romantic': 'companion',
  'pickup_line': 'companion',
  'smart_mouth': 'companion',
  'text_coach': 'companion',
  'pastor': 'pastor', // male asset; female falls to companion_f / illustrated
};

/// Asset path for a photoreal advisor portrait (may not exist — callers must fall back).
String ngmyAdvisorPortraitAssetPath({
  required String gender,
  required String role,
  String name = '',
  String id = '',
}) {
  final personKey = _personPortraitKey(name: name, id: id);
  if (personKey != null) return 'assets/images/advisors/$personKey.jpg';

  final g = gender.trim().toLowerCase() == 'male' ? 'm' : 'f';
  var r = role.trim().toLowerCase();
  if (r.isEmpty) r = 'companion';
  r = _kRolePhotoAlias[r] ?? r;
  // Roles with only one gender asset: map the opposite gender sanely.
  if (r == 'pastor' && g == 'f') r = 'bible_study_teacher';
  if (r == 'mshauri' && g == 'f') r = 'marriage_advisor';
  if (r == 'fitness_coach' && g == 'f') r = 'companion';
  if (r == 'career_coach' && g == 'f') r = 'financial_advisor';
  if (r == 'therapist' && g == 'm') r = 'career_coach';
  return 'assets/images/advisors/${r}_$g.jpg';
}

/// Named advisors get unique faces so two girls in the same role never share a photo.
String? _personPortraitKey({required String name, required String id}) {
  final n = name.trim().toLowerCase();
  final i = id.trim().toLowerCase();
  final blob = '$n $i';
  bool hit(String key) {
    if (n == key || i == key) return true;
    if (n.startsWith('$key ') || n.endsWith(' $key') || n.contains(' $key ')) return true;
    if (RegExp('\\b$key\\b').hasMatch(blob)) return true;
    return false;
  }

  // First advisor is MARIAM in admin data; Miriam / Maryam are common spellings too.
  if (hit('mariam') || hit('miriam') || hit('maryam') || hit('dusabe')) return 'person_miriam';
  // New romantic advisor — check before generic "suzana".
  if (hit('vanessa') || (hit('suzana') && n.contains('vanessa'))) return 'person_suzana_vanessa';
  // Elder Wisdom Advisor — older woman portrait asset.
  if (hit('amani') || (hit('mshauri') && n.contains('amani'))) return 'marriage_advisor_f';
  // Spelling variants used in the app / by the user.
  if (hit('susie') || hit('suzy') || hit('suzie') || hit('suzi') || hit('suzey') || hit('benet')) {
    return 'person_susie';
  }
  if (hit('mina') || (hit('samuel') && hit('mina'))) return 'person_mina';
  return null;
}

/// True when this advisor has a dedicated bundled photoreal portrait.
bool ngmyAdvisorHasNamedPortrait({String name = '', String id = ''}) =>
    _personPortraitKey(name: name, id: id) != null;

Future<void> ngmyWarmAdvisorPortraitAssets() async {
  if (_assetsWarmed) return;
  _assetsWarmed = true;
  const keys = <String>[
    'lawyer_m', 'lawyer_f', 'teacher_m', 'teacher_f',
    'financial_advisor_m', 'financial_advisor_f', 'pastor_m',
    'bible_study_teacher_m', 'bible_study_teacher_f',
    'doctor_m', 'doctor_f', 'mshauri_m', 'marriage_advisor_m', 'marriage_advisor_f',
    'therapist_f', 'companion_m', 'companion_f', 'career_coach_m', 'fitness_coach_m',
    'person_miriam', 'person_susie', 'person_mina', 'person_suzana_vanessa',
  ];
  await Future.wait(keys.map((k) async {
    final path = 'assets/images/advisors/$k.jpg';
    try {
      final data = await rootBundle.load(path);
      _assetCache[path] = data.buffer.asUint8List();
    } catch (_) {}
  }));
}

/// Photoreal JPG bytes already warmed into RAM — never invents the cartoon fallback.
Uint8List? ngmyAdvisorPhotorealBytesSync({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) {
  final path = ngmyAdvisorPortraitAssetPath(gender: gender, role: role, name: name, id: id);
  final fromAsset = _assetCache[path];
  if (fromAsset != null && fromAsset.isNotEmpty) return fromAsset;
  return null;
}

/// Prefer photoreal asset bytes for named person or [role]+[gender]; otherwise illustrated PNG.
/// Prefer [ngmyAdvisorPhotorealBytesSync] / [Image.asset] in UI — illustrated is offline-only.
Uint8List ngmyAdvisorPortraitBytes({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) {
  final photoreal = ngmyAdvisorPhotorealBytesSync(id: id, gender: gender, role: role, name: name);
  if (photoreal != null) return photoreal;

  final isMale = gender.trim().toLowerCase() == 'male';
  final specs = isMale ? _maleSpecs : _femaleSpecs;
  final hash = id.trim().isEmpty ? 0 : id.codeUnits.fold<int>(0, (a, c) => (a * 31 + c) & 0x7fffffff);
  final roleHash = role.codeUnits.fold<int>(0, (a, c) => (a * 17 + c) & 0x7fffffff);
  final nameHash = name.codeUnits.fold<int>(0, (a, c) => (a * 13 + c) & 0x7fffffff);
  final idx = (hash + roleHash + nameHash) % specs.length;
  final key = 'ill_${isMale ? 'm' : 'f'}_$idx';
  final cached = _portraitCache[key];
  if (cached != null) return cached;
  final bytes = Uint8List.fromList(img.encodePng(_renderPortrait(specs[idx])));
  _portraitCache[key] = bytes;
  return bytes;
}

Future<Uint8List> ngmyAdvisorPortraitBytesAsync({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) async {
  await ngmyWarmAdvisorPortraitAssets();
  final path = ngmyAdvisorPortraitAssetPath(gender: gender, role: role, name: name, id: id);
  if (!_assetCache.containsKey(path)) {
    try {
      final data = await rootBundle.load(path);
      _assetCache[path] = data.buffer.asUint8List();
    } catch (_) {}
  }
  return ngmyAdvisorPortraitBytes(id: id, gender: gender, role: role, name: name);
}

String ngmyAdvisorPortraitDataUrl({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) {
  final bytes = ngmyAdvisorPortraitBytes(id: id, gender: gender, role: role, name: name);
  final mime = bytes.length >= 3 && bytes[0] == 0xFF && bytes[1] == 0xD8 ? 'image/jpeg' : 'image/png';
  return 'data:$mime;base64,${base64Encode(bytes)}';
}

img.Color _c(int argb, [int a = 255]) =>
    img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, a);

void _vGradient(img.Image im, int top, int bottom) {
  for (var y = 0; y < im.height; y++) {
    final t = y / (im.height - 1);
    final r = ((top >> 16) & 0xFF) * (1 - t) + ((bottom >> 16) & 0xFF) * t;
    final g = ((top >> 8) & 0xFF) * (1 - t) + ((bottom >> 8) & 0xFF) * t;
    final b = (top & 0xFF) * (1 - t) + (bottom & 0xFF) * t;
    img.drawLine(
      im,
      x1: 0,
      y1: y,
      x2: im.width - 1,
      y2: y,
      color: img.ColorRgb8(r.round().clamp(0, 255), g.round().clamp(0, 255), b.round().clamp(0, 255)),
    );
  }
}

void _fillDiamond(img.Image im, num cx, num cy, num r, img.Color color) {
  img.fillPolygon(
    im,
    vertices: [img.Point(cx, cy - r), img.Point(cx + r, cy), img.Point(cx, cy + r), img.Point(cx - r, cy)],
    color: color,
  );
}

void _drawHair(img.Image im, _PortraitSpec spec, double cx, double cy, double headR) {
  final hair = _c(spec.hair);
  switch (spec.style) {
    case _HairStyle.afro:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.15).round(), radius: (headR * 1.25).round(), color: hair);
      break;
    case _HairStyle.braids:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.35).round(), radius: (headR * 0.95).round(), color: hair);
      for (var i = -3; i <= 3; i++) {
        img.fillCircle(im, x: (cx + i * headR * 0.22).round(), y: (cy + headR * 0.55).round(), radius: (headR * 0.12).round(), color: hair);
      }
      break;
    case _HairStyle.locs:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.25).round(), radius: (headR * 1.05).round(), color: hair);
      for (var i = -2; i <= 2; i++) {
        img.fillRect(
          im,
          x1: (cx + i * headR * 0.28 - headR * 0.08).round(),
          y1: (cy + headR * 0.2).round(),
          x2: (cx + i * headR * 0.28 + headR * 0.08).round(),
          y2: (cy + headR * 1.15).round(),
          color: hair,
        );
      }
      break;
    case _HairStyle.bantuKnots:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.2).round(), radius: (headR * 0.95).round(), color: hair);
      for (final o in [[-0.45, -0.7], [0.0, -0.9], [0.45, -0.7], [-0.55, -0.15], [0.55, -0.15]]) {
        img.fillCircle(im, x: (cx + o[0] * headR).round(), y: (cy + o[1] * headR).round(), radius: (headR * 0.18).round(), color: hair);
      }
      break;
    case _HairStyle.headwrap:
      final wraps = spec.wrapColors ?? [0xFFD4AF37, 0xFFCE1021];
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.35).round(), radius: (headR * 1.1).round(), color: _c(wraps[0]));
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.55).round(), radius: (headR * 0.55).round(), color: _c(wraps[1 % wraps.length]));
      break;
    case _HairStyle.fadeShort:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.45).round(), radius: (headR * 0.85).round(), color: hair);
      break;
    case _HairStyle.twists:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.25).round(), radius: (headR * 1.0).round(), color: hair);
      for (var i = -3; i <= 3; i++) {
        img.fillCircle(im, x: (cx + i * headR * 0.2).round(), y: (cy - headR * 0.85).round(), radius: (headR * 0.14).round(), color: hair);
      }
      break;
    case _HairStyle.bald:
      break;
  }
}

img.Image _renderPortrait(_PortraitSpec spec) {
  final im = img.Image(width: _kPortraitSize, height: _kPortraitSize);
  _vGradient(im, spec.bg[0], spec.bg[1]);
  final cx = _kPortraitSize / 2;
  final cy = _kPortraitSize * 0.42;
  final headR = _kPortraitSize * 0.28;
  _drawHair(im, spec, cx, cy, headR);
  img.fillCircle(im, x: cx.round(), y: cy.round(), radius: headR.round(), color: _c(spec.skin));
  // Neck + shoulders
  img.fillRect(
    im,
    x1: (cx - headR * 0.55).round(),
    y1: (cy + headR * 0.7).round(),
    x2: (cx + headR * 0.55).round(),
    y2: (cy + headR * 1.35).round(),
    color: _c(spec.skin),
  );
  img.fillCircle(im, x: cx.round(), y: (_kPortraitSize * 0.92).round(), radius: (_kPortraitSize * 0.42).round(), color: _c(0xFF1F2937));
  // Eyes
  final eyeY = cy - headR * 0.08;
  img.fillCircle(im, x: (cx - headR * 0.32).round(), y: eyeY.round(), radius: (headR * 0.09).round(), color: _c(0xFF111111));
  img.fillCircle(im, x: (cx + headR * 0.32).round(), y: eyeY.round(), radius: (headR * 0.09).round(), color: _c(0xFF111111));
  img.fillCircle(im, x: (cx - headR * 0.28).round(), y: (eyeY - headR * 0.02).round(), radius: (headR * 0.03).round(), color: _c(0xFFFFFFFF));
  img.fillCircle(im, x: (cx + headR * 0.36).round(), y: (eyeY - headR * 0.02).round(), radius: (headR * 0.03).round(), color: _c(0xFFFFFFFF));
  // Smile
  img.drawLine(
    im,
    x1: (cx - headR * 0.28).round(),
    y1: (cy + headR * 0.38).round(),
    x2: (cx + headR * 0.28).round(),
    y2: (cy + headR * 0.38).round(),
    color: _c(0xFF4A2E1C),
    thickness: 2,
  );
  if (spec.beard) {
    img.fillCircle(im, x: cx.round(), y: (cy + headR * 0.55).round(), radius: (headR * 0.42).round(), color: _c(spec.hair, 180));
  }
  if (spec.earrings) {
    _fillDiamond(im, cx - headR * 0.95, cy + headR * 0.15, headR * 0.08, _c(0xFFD4AF37));
    _fillDiamond(im, cx + headR * 0.95, cy + headR * 0.15, headR * 0.08, _c(0xFFD4AF37));
  }
  return im;
}
