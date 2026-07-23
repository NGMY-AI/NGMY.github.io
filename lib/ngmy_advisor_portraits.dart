import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/services.dart' show rootBundle;
import 'package:image/image.dart' as img;

/// Photoreal African advisor portraits bundled under [assets/images/advisors/].
/// When a role+gender photo is missing, we fall back to a local illustrated
/// portrait (same offline behavior as before — never a blank emoji if we can help).

const int _kPortraitSize = 220;

enum _HairStyle { afro, braids, locs, bantuKnots, headwrap, fadeShort, twists, bald, straight, wavy, ponytail, bun }

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

/// Fair-skinned variants — routed by name (see [_kWhiteWomenNames]) for
/// advisors specifically described as white.
const List<_PortraitSpec> _femaleWhiteSpecs = [
  _PortraitSpec(skin: 0xFFF3D9BF, hair: 0xFFE8C77E, style: _HairStyle.wavy, bg: [0xFFEC4899, 0xFFBE185D], earrings: true),
  _PortraitSpec(skin: 0xFFF7E1C6, hair: 0xFF3B2A20, style: _HairStyle.straight, bg: [0xFF2563EB, 0xFF1D4ED8], earrings: true),
  _PortraitSpec(skin: 0xFFEACBA8, hair: 0xFFA0522D, style: _HairStyle.ponytail, bg: [0xFFF97316, 0xFFC2410C], earrings: true),
  _PortraitSpec(skin: 0xFFF0D0AC, hair: 0xFF6B4226, style: _HairStyle.bun, bg: [0xFF0F766E, 0xFF134E4A], earrings: true),
  _PortraitSpec(skin: 0xFFE8C4A0, hair: 0xFF1B1210, style: _HairStyle.wavy, bg: [0xFF7C3AED, 0xFF5B21B6], earrings: true),
];

const List<_PortraitSpec> _maleSpecs = [
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF150F0C, style: _HairStyle.fadeShort, bg: [0xFF1E3A8A, 0xFF1E40AF]),
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF166534, 0xFF14532D]),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF17110D, style: _HairStyle.locs, bg: [0xFFC2410C, 0xFF9A3412]),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.bald, bg: [0xFF0F766E, 0xFF115E59], beard: true),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.twists, bg: [0xFFB91C1C, 0xFF7F1D1D]),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.fadeShort, bg: [0xFF4338CA, 0xFF3730A3], beard: true),
];

// ── 20-advisor batch (ngmy_advisor_roster.dart's kNgmyNewAdvisorBatch) ──────
// Every one of these 20 gets its own hand-assigned, never-repeated spec —
// explicit name→spec lookup, not hashing, so there is zero chance two
// advisors (new or pre-existing) end up sharing a picture.

const List<String> _kNewBatchMaleNames = [
  'david okonkwo',
  'samuel kiran',
  'marcus bellingham',
  'joshua reed',
  'gabriel moses',
  'isaac brandt',
  'elijah cross',
  'nathan pierce',
  'tyler james',
  'lucas ferreira',
];

const List<_PortraitSpec> _kNewBatchMaleSpecs = [
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.fadeShort, bg: [0xFF2563EB, 0xFF1D4ED8]),
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF059669, 0xFF047857]),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF17110D, style: _HairStyle.locs, bg: [0xFFD97706, 0xFFB45309]),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.twists, bg: [0xFF0EA5E9, 0xFF0284C7]),
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF150F0C, style: _HairStyle.braids, bg: [0xFF7C3AED, 0xFF5B21B6]),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.fadeShort, bg: [0xFFDC2626, 0xFF991B1B]),
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.twists, bg: [0xFF16A34A, 0xFF15803D], beard: true),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.locs, bg: [0xFFDB2777, 0xFFBE185D]),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.afro, bg: [0xFF0D9488, 0xFF0F766E]),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF17110D, style: _HairStyle.braids, bg: [0xFFCA8A04, 0xFFA16207], beard: true),
];

const List<String> _kNewBatchAfricanFemaleNames = [
  'anika weston',
  'nia robertson',
  'destiny okafor',
  'jasmine cole',
  'aaliyah grant',
];

const List<_PortraitSpec> _kNewBatchAfricanFemaleSpecs = [
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.twists, bg: [0xFFEC4899, 0xFFDB2777], earrings: true),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.braids, bg: [0xFF06B6D4, 0xFF0891B2], earrings: true),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF1A120D, style: _HairStyle.bantuKnots, bg: [0xFFF59E0B, 0xFFD97706], earrings: true),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.afro, bg: [0xFF8B5CF6, 0xFF7C3AED], earrings: true),
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF17110D, style: _HairStyle.locs, bg: [0xFF10B981, 0xFF059669], earrings: true),
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

/// Named advisors get unique faces so two people never share one photo.
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
  // These three used to fall through to the same companion_f role photo.
  if (hit('anna') || hit('amuri')) return 'person_anna_amuri';
  if (hit('isaiah') || hit('alisa') || hit('kenny') || (hit('john') && (n.contains('isaiah') || n.contains('alisa')))) {
    return 'person_isaiah_john';
  }
  if (hit('mbuto') || (hit('suzana') && !n.contains('vanessa'))) return 'person_suzana_mbuto';
  // Elder Wisdom Advisor — older woman portrait asset (intentional).
  // Must stay above other marriage-advisor names so Nia never inherits this face.
  if (hit('amani') || (hit('mshauri') && n.contains('amani'))) return 'marriage_advisor_f';
  // Spelling variants used in the app / by the user.
  if (hit('susie') || hit('suzy') || hit('suzie') || hit('suzi') || hit('suzey') || hit('benet')) {
    return 'person_susie';
  }
  if (hit('mina') || (hit('samuel') && hit('mina'))) return 'person_mina';
  // Core men — keep them off shared role fallbacks.
  if (hit('alex') || hit('remy')) return 'person_alex_remy';
  if (hit('jeremiah') || hit('nesto')) return 'person_jeremiah_nesto';
  // Batch advisors that would otherwise share role assets in the avatar UI:
  // Nia used marriage_advisor_f (Wisdom), Sophie aliased to financial_advisor_f (Grace),
  // Olivia aliased to companion_f (Aaliyah / friends).
  if (hit('nia') || hit('robertson')) return 'person_nia_robertson';
  if (hit('grace') || hit('anderson')) return 'person_grace_anderson';
  if (hit('sophie') || hit('morgan')) return 'person_sophie_morgan';
  if (hit('olivia') || hit('bennett')) return 'person_olivia_bennett';
  if (hit('chloe') || hit('mitchell')) return 'person_chloe_mitchell';
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
    'person_anna_amuri', 'person_isaiah_john', 'person_suzana_mbuto',
    'person_alex_remy', 'person_jeremiah_nesto',
    'person_nia_robertson', 'person_grace_anderson', 'person_sophie_morgan',
    'person_olivia_bennett', 'person_chloe_mitchell',
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

/// Advisors specifically written as white women — routed to the fair-skinned
/// illustrated set regardless of role, since none of the bundled photoreal
/// assets are white (see ngmy_advisor_roster.dart's kNgmyNewAdvisorBatch).
const List<String> _kWhiteWomenNames = [
  'emma carson',
  'grace anderson',
  'sophie morgan',
  'chloe mitchell',
  'olivia bennett',
];

/// Exact spec for one of the 20-advisor batch, by name — no hashing, so it
/// is impossible for two of them (or one of them and a pre-existing
/// advisor) to land on the same picture. Returns null for anyone else.
_PortraitSpec? _newBatchSpecFor(String name, bool isMale) {
  final n = name.trim().toLowerCase();
  if (isMale) {
    final i = _kNewBatchMaleNames.indexOf(n);
    return i >= 0 ? _kNewBatchMaleSpecs[i] : null;
  }
  final wi = _kWhiteWomenNames.indexOf(n);
  if (wi >= 0) return _femaleWhiteSpecs[wi];
  final ai = _kNewBatchAfricanFemaleNames.indexOf(n);
  return ai >= 0 ? _kNewBatchAfricanFemaleSpecs[ai] : null;
}

/// Load the exact bundled JPG used by the advisor avatar circle (same path as
/// [ngmyAdvisorPortraitAssetPath] / Image.asset). Never invents illustrated cartoons.
Future<Uint8List?> ngmyAdvisorLoadPhotorealPortraitBytes({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) async {
  await ngmyWarmAdvisorPortraitAssets();
  final path = ngmyAdvisorPortraitAssetPath(gender: gender, role: role, name: name, id: id);
  final cached = _assetCache[path];
  if (cached != null && cached.isNotEmpty) return cached;
  try {
    final data = await rootBundle.load(path);
    final bytes = data.buffer.asUint8List();
    if (bytes.isEmpty) return null;
    _assetCache[path] = bytes;
    return bytes;
  } catch (_) {
    return null;
  }
}

/// Prefer photoreal asset bytes for named person or [role]+[gender]; otherwise illustrated PNG.
/// Prefer [ngmyAdvisorPhotorealBytesSync] / [Image.asset] in UI — illustrated is offline-only.
///
/// Always try the bundled JPG first (including the 20-advisor batch). Illustrated
/// cartoons are a last-resort offline fallback only — never preferred over the
/// face already shown on the advisor profile card.
Uint8List ngmyAdvisorPortraitBytes({
  required String id,
  required String gender,
  String role = '',
  String name = '',
}) {
  final photoreal = ngmyAdvisorPhotorealBytesSync(id: id, gender: gender, role: role, name: name);
  if (photoreal != null) return photoreal;

  final isMale = gender.trim().toLowerCase() == 'male';
  final normalizedName = name.trim().toLowerCase();
  final batchSpec = _newBatchSpecFor(normalizedName, isMale);

  if (batchSpec != null) {
    final key = 'ill_batch_$normalizedName';
    final cached = _portraitCache[key];
    if (cached != null) return cached;
    final bytes = Uint8List.fromList(img.encodePng(_renderPortrait(batchSpec)));
    _portraitCache[key] = bytes;
    return bytes;
  }

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
    case _HairStyle.straight:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.1).round(), radius: (headR * 1.05).round(), color: hair);
      img.fillRect(
        im,
        x1: (cx - headR * 0.95).round(),
        y1: (cy - headR * 0.1).round(),
        x2: (cx - headR * 0.55).round(),
        y2: (cy + headR * 1.1).round(),
        color: hair,
      );
      img.fillRect(
        im,
        x1: (cx + headR * 0.55).round(),
        y1: (cy - headR * 0.1).round(),
        x2: (cx + headR * 0.95).round(),
        y2: (cy + headR * 1.1).round(),
        color: hair,
      );
      break;
    case _HairStyle.wavy:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.15).round(), radius: (headR * 1.15).round(), color: hair);
      img.fillCircle(im, x: (cx - headR * 0.85).round(), y: (cy + headR * 0.5).round(), radius: (headR * 0.35).round(), color: hair);
      img.fillCircle(im, x: (cx + headR * 0.85).round(), y: (cy + headR * 0.5).round(), radius: (headR * 0.35).round(), color: hair);
      break;
    case _HairStyle.ponytail:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.25).round(), radius: (headR * 0.95).round(), color: hair);
      img.fillRect(
        im,
        x1: (cx + headR * 0.55).round(),
        y1: (cy - headR * 0.3).round(),
        x2: (cx + headR * 0.85).round(),
        y2: (cy + headR * 1.3).round(),
        color: hair,
      );
      break;
    case _HairStyle.bun:
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 0.15).round(), radius: (headR * 0.95).round(), color: hair);
      img.fillCircle(im, x: cx.round(), y: (cy - headR * 1.15).round(), radius: (headR * 0.32).round(), color: hair);
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
