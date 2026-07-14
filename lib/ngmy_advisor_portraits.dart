import 'dart:convert';
import 'dart:typed_data';

import 'package:image/image.dart' as img;

/// Illustrated fallback portraits for NGMY Advisors — used whenever an
/// advisor has no uploaded photo (or it fails to load) instead of a plain
/// emoji. Drawn entirely in code (no network, no bundled photo assets), so
/// they work fully offline and carry no real-person likeness. Styled as
/// warm, modern flat-illustration portraits of Black/African men and women
/// with a range of natural hairstyles.
const int _kPortraitSize = 220;

enum _HairStyle { afro, braids, locs, bantuKnots, headwrap, fadeShort, twists, bald }

class _PortraitSpec {
  const _PortraitSpec({required this.skin, required this.hair, required this.style, required this.bg, this.beard = false, this.earrings = false, this.wrapColors});
  final int skin;
  final int hair;
  final _HairStyle style;
  final List<int> bg;
  final bool beard;
  final bool earrings;
  final List<int>? wrapColors;
}

// ── Female variants ──────────────────────────────────────────────────────────
const List<_PortraitSpec> _femaleSpecs = [
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF0F766E, 0xFF134E4A], earrings: true),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.braids, bg: [0xFFBE185D, 0xFF831843], earrings: true),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF1A120D, style: _HairStyle.headwrap, bg: [0xFFB8860B, 0xFF8B6914], wrapColors: [0xFFD4AF37, 0xFFCE1021, 0xFF1D4D2B]),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.bantuKnots, bg: [0xFF7C3AED, 0xFF5B21B6], earrings: true),
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF17110D, style: _HairStyle.bantuKnots, bg: [0xFFEA580C, 0xFFC2410C], earrings: true),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.locs, bg: [0xFF2563EB, 0xFF1D4ED8], earrings: true),
];

// ── Male variants ────────────────────────────────────────────────────────────
const List<_PortraitSpec> _maleSpecs = [
  _PortraitSpec(skin: 0xFF9C6B47, hair: 0xFF150F0C, style: _HairStyle.fadeShort, bg: [0xFF1E3A8A, 0xFF1E40AF]),
  _PortraitSpec(skin: 0xFFB07A56, hair: 0xFF1B1210, style: _HairStyle.afro, bg: [0xFF166534, 0xFF14532D]),
  _PortraitSpec(skin: 0xFF6B4226, hair: 0xFF17110D, style: _HairStyle.locs, bg: [0xFFC2410C, 0xFF9A3412]),
  _PortraitSpec(skin: 0xFF8A5A3B, hair: 0xFF150F0C, style: _HairStyle.bald, bg: [0xFF0F766E, 0xFF115E59], beard: true),
  _PortraitSpec(skin: 0xFFC9906A, hair: 0xFF241813, style: _HairStyle.twists, bg: [0xFFB91C1C, 0xFF7F1D1D]),
  _PortraitSpec(skin: 0xFF4A2E1C, hair: 0xFF0C0806, style: _HairStyle.fadeShort, bg: [0xFF4338CA, 0xFF3730A3], beard: true),
];

final _portraitCache = <String, Uint8List>{};

/// Deterministically picks and renders a portrait for the given advisor
/// id/gender — the same advisor always gets the same portrait.
Uint8List ngmyAdvisorPortraitBytes({required String id, required String gender}) {
  final isMale = gender.trim().toLowerCase() == 'male';
  final specs = isMale ? _maleSpecs : _femaleSpecs;
  final hash = id.trim().isEmpty ? 0 : id.codeUnits.fold<int>(0, (a, c) => (a * 31 + c) & 0x7fffffff);
  final spec = specs[hash % specs.length];
  final key = '${isMale ? 'm' : 'f'}${hash % specs.length}';
  final cached = _portraitCache[key];
  if (cached != null) return cached;
  final bytes = Uint8List.fromList(img.encodePng(_renderPortrait(spec)));
  _portraitCache[key] = bytes;
  return bytes;
}

String ngmyAdvisorPortraitDataUrl({required String id, required String gender}) =>
    'data:image/png;base64,${base64Encode(ngmyAdvisorPortraitBytes(id: id, gender: gender))}';

img.Color _c(int argb, [int a = 255]) => img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, a);

void _vGradient(img.Image im, int top, int bottom) {
  for (var y = 0; y < im.height; y++) {
    final t = y / (im.height - 1);
    final r = ((top >> 16) & 0xFF) * (1 - t) + ((bottom >> 16) & 0xFF) * t;
    final g = ((top >> 8) & 0xFF) * (1 - t) + ((bottom >> 8) & 0xFF) * t;
    final b = (top & 0xFF) * (1 - t) + (bottom & 0xFF) * t;
    img.drawLine(im, x1: 0, y1: y, x2: im.width - 1, y2: y, color: img.ColorRgb8(r.round().clamp(0, 255), g.round().clamp(0, 255), b.round().clamp(0, 255)));
  }
}

void _fillDiamond(img.Image im, num cx, num cy, num r, img.Color color) {
  img.fillPolygon(im, vertices: [img.Point(cx, cy - r), img.Point(cx + r, cy), img.Point(cx, cy + r), img.Point(cx - r, cy)], color: color);
}

img.Image _renderPortrait(_PortraitSpec spec) {
  final s = _kPortraitSize;
  final im = img.Image(width: s, height: s);
  _vGradient(im, spec.bg.first, spec.bg.last);

  final cx = s / 2;
  final headCy = s * 0.56;
  final headR = s * 0.27;
  final skin = _c(spec.skin);
  final hair = _c(spec.hair);

  // Shoulders / body base.
  img.fillPolygon(
    im,
    vertices: [
      img.Point(cx - s * 0.42, s.toDouble()),
      img.Point(cx - s * 0.30, s * 0.86),
      img.Point(cx, s * 0.80),
      img.Point(cx + s * 0.30, s * 0.86),
      img.Point(cx + s * 0.42, s.toDouble()),
    ],
    color: _c(spec.hair == spec.skin ? 0xFF1F2937 : 0xFF1F2937, 255),
  );

  // Hair drawn BEHIND the head first for voluminous styles.
  if (spec.style == _HairStyle.afro) {
    img.drawCircle(im, x: cx.round(), y: headCy.round(), radius: (headR * 1.42).round(), color: hair, antialias: true);
  }

  // Head.
  img.drawCircle(im, x: cx.round(), y: headCy.round(), radius: headR.round(), color: skin, antialias: true);

  // Ears.
  for (final side in [-1, 1]) {
    img.drawCircle(im, x: (cx + side * headR * 0.94).round(), y: headCy.round(), radius: (headR * 0.14).round(), color: skin, antialias: true);
    if (spec.earrings) {
      img.drawCircle(im, x: (cx + side * headR * 0.94).round(), y: (headCy + headR * 0.16).round(), radius: (headR * 0.06).round(), color: _c(0xFFD4AF37), antialias: true);
    }
  }

  // Hairstyles drawn on top of / around the head outline.
  switch (spec.style) {
    case _HairStyle.afro:
      break; // already drawn behind
    case _HairStyle.fadeShort:
      img.drawCircle(im, x: cx.round(), y: (headCy - headR * 0.30).round(), radius: (headR * 1.02).round(), color: hair, antialias: true);
      img.drawCircle(im, x: cx.round(), y: (headCy + headR * 0.08).round(), radius: (headR * 0.98).round(), color: skin, antialias: true);
      img.drawCircle(im, x: cx.round(), y: (headCy - headR * 0.42).round(), radius: (headR * 0.86).round(), color: hair, antialias: true);
      break;
    case _HairStyle.bald:
      img.drawCircle(im, x: (cx - headR * 0.35).round(), y: (headCy - headR * 0.5).round(), radius: (headR * 0.28).round(), color: _c(0xFFFFFFFF, 40), antialias: true);
      break;
    case _HairStyle.braids:
    case _HairStyle.locs:
    case _HairStyle.twists:
      final count = spec.style == _HairStyle.braids ? 7 : (spec.style == _HairStyle.twists ? 5 : 6);
      final strandW = headR * (spec.style == _HairStyle.locs ? 0.16 : 0.12);
      final length = s * (spec.style == _HairStyle.locs ? 0.5 : 0.4);
      for (var i = 0; i < count; i++) {
        final t = count == 1 ? 0.5 : i / (count - 1);
        final x = cx - headR * 1.05 + t * headR * 2.1;
        img.fillRect(im, x1: (x - strandW / 2).round(), y1: (headCy - headR * 0.5).round(), x2: (x + strandW / 2).round(), y2: (headCy - headR * 0.5 + length).round(), color: hair, radius: strandW / 2);
      }
      img.drawCircle(im, x: cx.round(), y: (headCy - headR * 0.55).round(), radius: (headR * 0.92).round(), color: hair, antialias: true);
      img.drawCircle(im, x: cx.round(), y: headCy.round(), radius: headR.round(), color: skin, antialias: true);
      for (var i = 0; i < count; i++) {
        final t = count == 1 ? 0.5 : i / (count - 1);
        final x = cx - headR * 1.05 + t * headR * 2.1;
        img.fillRect(im, x1: (x - strandW / 2).round(), y1: (headCy - headR * 0.5).round(), x2: (x + strandW / 2).round(), y2: (headCy - headR * 0.5 + length).round(), color: hair, radius: strandW / 2);
      }
      break;
    case _HairStyle.bantuKnots:
      img.drawCircle(im, x: cx.round(), y: (headCy - headR * 0.55).round(), radius: (headR * 0.9).round(), color: hair, antialias: true);
      img.drawCircle(im, x: cx.round(), y: headCy.round(), radius: headR.round(), color: skin, antialias: true);
      for (final dx in [-0.42, 0.0, 0.42]) {
        _fillDiamond(im, cx + headR * dx, headCy - headR * 1.15, headR * 0.24, hair);
        img.drawCircle(im, x: (cx + headR * dx).round(), y: (headCy - headR * 1.15).round(), radius: (headR * 0.22).round(), color: hair, antialias: true);
      }
      break;
    case _HairStyle.headwrap:
      final colors = spec.wrapColors ?? [spec.hair];
      for (var i = 0; i < 3; i++) {
        img.drawCircle(im, x: cx.round(), y: (headCy - headR * (0.95 - i * 0.28)).round(), radius: (headR * (1.05 - i * 0.06)).round(), color: _c(colors[i % colors.length]), antialias: true);
      }
      img.drawCircle(im, x: cx.round(), y: (headCy + headR * 0.05).round(), radius: (headR * 0.98).round(), color: skin, antialias: true);
      // Fold accent knot on the side.
      _fillDiamond(im, cx + headR * 0.78, headCy - headR * 0.55, headR * 0.22, _c(colors.last));
      break;
  }

  // Beard.
  if (spec.beard) {
    img.fillPolygon(
      im,
      vertices: [
        img.Point(cx - headR * 0.62, headCy + headR * 0.15),
        img.Point(cx - headR * 0.4, headCy + headR * 0.85),
        img.Point(cx, headCy + headR * 1.05),
        img.Point(cx + headR * 0.4, headCy + headR * 0.85),
        img.Point(cx + headR * 0.62, headCy + headR * 0.15),
      ],
      color: hair,
    );
  }

  // Face — simple friendly features.
  final eyeY = headCy - headR * 0.02;
  for (final side in [-1, 1]) {
    img.drawCircle(im, x: (cx + side * headR * 0.36).round(), y: eyeY.round(), radius: (headR * 0.075).round(), color: _c(0xFF1C1210), antialias: true);
    img.drawCircle(im, x: (cx + side * headR * 0.36 - side * headR * 0.02).round(), y: (eyeY - headR * 0.02).round(), radius: (headR * 0.02).round(), color: _c(0xFFFFFFFF), antialias: true);
  }
  // Eyebrows.
  for (final side in [-1, 1]) {
    img.drawLine(im, x1: (cx + side * headR * 0.24).round(), y1: (eyeY - headR * 0.22).round(), x2: (cx + side * headR * 0.5).round(), y2: (eyeY - headR * 0.28).round(), color: hair, antialias: true, thickness: 2.6);
  }
  // Nose.
  img.drawLine(im, x1: cx.round(), y1: (headCy + headR * 0.06).round(), x2: (cx - headR * 0.08).round(), y2: (headCy + headR * 0.3).round(), color: _c(spec.skin, 140), antialias: true, thickness: 1.6);
  // Smile.
  final smileY = headCy + headR * 0.5;
  img.drawLine(im, x1: (cx - headR * 0.26).round(), y1: smileY.round(), x2: (cx + headR * 0.26).round(), y2: smileY.round(), color: _c(0xFF6B2F1A), antialias: true, thickness: 3.2);
  for (final side in [-1, 1]) {
    img.drawLine(im, x1: (cx + side * headR * 0.26).round(), y1: smileY.round(), x2: (cx + side * headR * 0.32).round(), y2: (smileY - headR * 0.05).round(), color: _c(0xFF6B2F1A), antialias: true, thickness: 2.4);
  }

  return im;
}
