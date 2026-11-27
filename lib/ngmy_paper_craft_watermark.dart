import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:image/image.dart' as img;

import 'ngmy_paper_crafts.dart';
import 'ngmy_slides_models.dart';

/// NGMY watermarks on Fold & Cut designs. Every design carries one (the Seal unless the user picks another). It is
/// drawn as a few ordinary slide pieces (words, rings, bands, the real NGMY logo) marked with
/// [kNgmyCraftWatermarkFile]: locked like the fold lines, under the user's words, faint but clear, tinted with the
/// design's colour set (white on dark panels). It sits on each design's front panel(s), turned the way the words on
/// that panel read after folding.
///
/// The watermark button beside the green AI button opens the watermark panel: style, a design inside the style
/// (variant), one or many, where it goes (3 x 3 spots), size and how visible. These settings belong to the whole
/// deck and are kept in its lines layer, so they save and print with it.

const String kNgmyCraftWatermarkFile = 'paper_craft_wm';
const String kNgmyCraftDefaultWatermark = 'seal';

class NgmyCraftWatermark {
  const NgmyCraftWatermark(this.id, this.name, this.icon, {required this.variants, this.canBeOne = false, this.places = true, this.defaultPlace = 4});
  final String id;
  final String name;
  final IconData icon;

  /// The designs inside this style: (id, name). The first is the default.
  final List<(String, String)> variants;

  /// Repeats by nature, and can be switched to a single one.
  final bool canBeOne;

  /// Can be moved to one of the 3 x 3 spots (when it is a single one).
  final bool places;

  /// Where it goes when not moved: 0 top left .. 4 centre .. 8 bottom right.
  final int defaultPlace;
}

const List<NgmyCraftWatermark> kNgmyCraftWatermarks = [
  NgmyCraftWatermark('seal', 'Seal', Icons.verified_outlined,
      variants: [('round', 'Round'), ('double', 'Double ring'), ('scalloped', 'Scalloped'), ('star', 'Star edge'), ('stamp', 'Square stamp')], defaultPlace: 8),
  NgmyCraftWatermark('diagonal', 'Big diagonal', Icons.north_east_rounded,
      variants: [('bold', 'Bold'), ('thin', 'Thin'), ('stacked', 'Stacked'), ('spaced', 'Spaced')], places: false),
  NgmyCraftWatermark('pattern', 'Pattern', Icons.grid_view_rounded,
      variants: [('staggered', 'Staggered'), ('grid', 'Straight grid'), ('dense', 'Dense'), ('sparse', 'Sparse'), ('dotted', 'Dotted')], canBeOne: true),
  NgmyCraftWatermark('logo', 'NGMY logo', Icons.image_outlined, variants: [('plain', 'Plain'), ('framed', 'Framed'), ('web', 'With ngmy.org'), ('badge', 'Badge')]),
  NgmyCraftWatermark('border', 'Border', Icons.crop_din_rounded,
      variants: [('thin', 'Thin'), ('double', 'Double'), ('dashed', 'Dashed'), ('corners', 'Corners')], canBeOne: true, places: false),
  NgmyCraftWatermark('crest', 'Crest', Icons.diamond_outlined, variants: [('diamond', 'Diamond'), ('circle', 'Circle'), ('square', 'Square')]),
  NgmyCraftWatermark('ribbon', 'Ribbon', Icons.bookmark_border_rounded, variants: [('corner', 'Corner band'), ('double', 'Double band'), ('sash', 'Sash')], defaultPlace: 2),
  NgmyCraftWatermark('footer', 'Footer', Icons.horizontal_rule_rounded, variants: [('band', 'Band'), ('line', 'Line'), ('tag', 'Tag')], defaultPlace: 7),
  NgmyCraftWatermark('script', 'Script', Icons.gesture_rounded, variants: [('tilted', 'Tilted'), ('straight', 'Straight'), ('underline', 'Underlined')]),
];

bool ngmyIsCraftWatermark(NgmySlideElement e) => e.fileName == kNgmyCraftWatermarkFile;

NgmyCraftWatermark? ngmyCraftWatermarkById(String id) {
  for (final w in kNgmyCraftWatermarks) {
    if (w.id == id) return w;
  }
  return null;
}

/// Names of the 3 x 3 spots, for people and the AI.
const List<String> kNgmyCraftWmPlaces = ['top left', 'top', 'top right', 'left', 'center', 'right', 'bottom left', 'bottom', 'bottom right'];

/// The size and visibility range. 1 is the default look.
const double kNgmyCraftWmMinSize = 0.5;
const double kNgmyCraftWmMaxSize = 1.8;
const double kNgmyCraftWmMinVis = 0.3;
const double kNgmyCraftWmMaxVis = 2.5;

/// The watermark settings of a deck.
class NgmyCraftWmSettings {
  const NgmyCraftWmSettings({this.style = kNgmyCraftDefaultWatermark, this.variant = '', this.one = false, this.place, this.size = 1, this.visibility = 1});

  final String style;

  /// '' = the style's first design.
  final String variant;

  /// A single one instead of many (styles that repeat).
  final bool one;

  /// 0..8 (top left .. bottom right); null = the style's own spot.
  final int? place;

  /// 1 = the default size.
  final double size;

  /// 1 = the default faintness (exactly as it was before the controls).
  final double visibility;

  NgmyCraftWatermark get kind => ngmyCraftWatermarkById(style) ?? kNgmyCraftWatermarks.first;
  String get variantId => kind.variants.any((v) => v.$1 == variant) ? variant : kind.variants.first.$1;
  int get placeOrDefault => place ?? kind.defaultPlace;

  NgmyCraftWmSettings copyWith({String? style, String? variant, bool? one, int? place, bool clearPlace = false, double? size, double? visibility}) =>
      NgmyCraftWmSettings(
        style: style ?? this.style,
        variant: variant ?? this.variant,
        one: one ?? this.one,
        place: clearPlace ? null : (place ?? this.place),
        size: (size ?? this.size).clamp(kNgmyCraftWmMinSize, kNgmyCraftWmMaxSize).toDouble(),
        visibility: (visibility ?? this.visibility).clamp(kNgmyCraftWmMinVis, kNgmyCraftWmMaxVis).toDouble(),
      );

  /// Another style: its own first design and spot, but the same size and visibility.
  NgmyCraftWmSettings withStyle(String id) => NgmyCraftWmSettings(style: id, size: size, visibility: visibility);

  Map<String, Object> toJson() => {
        if (variant.isNotEmpty) 'v': variant,
        if (one) 'one': true,
        'p': ?place,
        if (size != 1) 's': size,
        if (visibility != 1) 'o': visibility,
      };

  static NgmyCraftWmSettings fromJson(String style, Object? raw) {
    final m = raw is Map ? raw : const {};
    final p = m['p'];
    return const NgmyCraftWmSettings().copyWith(
      style: ngmyCraftWatermarkById(style) != null ? style : kNgmyCraftDefaultWatermark,
      variant: m['v']?.toString() ?? '',
      one: m['one'] == true,
      place: p is num && p >= 0 && p <= 8 ? p.toInt() : null,
      size: (m['s'] as num?)?.toDouble() ?? 1,
      visibility: (m['o'] as num?)?.toDouble() ?? 1,
    );
  }

  @override
  bool operator ==(Object other) =>
      other is NgmyCraftWmSettings &&
      other.style == style &&
      other.variantId == variantId &&
      other.one == one &&
      other.placeOrDefault == placeOrDefault &&
      other.size == size &&
      other.visibility == visibility;

  @override
  int get hashCode => Object.hash(style, variantId, one, placeOrDefault, size, visibility);
}

// ---------------------------------------------------------------------------------------------------------------
// The NGMY logo (assets/images/ngmy_logo.png): its white background is taken out, it is tinted with the colour
// set and made faint, once per colour.
// ---------------------------------------------------------------------------------------------------------------

Uint8List? _logoSrc;
img.Image? _logoCrop;
final Map<int, String> _logoCache = {};

/// Loads the NGMY logo once, so the "NGMY logo" watermark can use it.
Future<void> ngmyPreloadCraftLogo() async {
  if (_logoSrc != null) return;
  try {
    final d = await rootBundle.load('assets/images/ngmy_logo.png');
    _logoSrc = d.buffer.asUint8List();
  } catch (_) {}
}

bool get ngmyCraftLogoReady => _logoSrc != null;

double _lum(img.Pixel px) => 0.299 * px.r + 0.587 * px.g + 0.114 * px.b;

img.Image? _cropLogo() {
  if (_logoCrop != null) return _logoCrop;
  final bytes = _logoSrc;
  if (bytes == null) return null;
  final src = img.decodeImage(bytes);
  if (src == null) return null;
  var minX = src.width, minY = src.height, maxX = 0, maxY = 0;
  // The picture has a thin dark line along its very edge: only the logo itself counts.
  const edge = 12;
  for (final px in src) {
    if (px.x < edge || px.y < edge || px.x >= src.width - edge || px.y >= src.height - edge) continue;
    if (_lum(px) < 200) {
      minX = math.min(minX, px.x);
      minY = math.min(minY, px.y);
      maxX = math.max(maxX, px.x);
      maxY = math.max(maxY, px.y);
    }
  }
  if (maxX <= minX || maxY <= minY) return null;
  final crop = img.copyCrop(src, x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1);
  return _logoCrop = img.copyResize(crop, width: 640);
}

/// Width / height of the logo (about 4 to 1).
double get _logoAspect {
  final c = _cropLogo();
  return c == null ? 4.2 : c.width / c.height;
}

/// The logo as a faint PNG in [argb] (its alpha is how faint).
String? _logoDataUri(int argb) {
  final hit = _logoCache[argb];
  if (hit != null) return hit;
  final crop = _cropLogo();
  if (crop == null) return null;
  final out = img.Image(width: crop.width, height: crop.height, numChannels: 4);
  final a = (argb >> 24) & 0xFF;
  final r = (argb >> 16) & 0xFF;
  final g = (argb >> 8) & 0xFF;
  final b = argb & 0xFF;
  for (final px in crop) {
    final ink = ((235 - _lum(px)) / 180).clamp(0.0, 1.0);
    out.setPixelRgba(px.x, px.y, r, g, b, (a * ink).round());
  }
  final uri = 'data:image/png;base64,${base64Encode(img.encodePng(out))}';
  _logoCache[argb] = uri;
  return uri;
}

// ---------------------------------------------------------------------------------------------------------------
// Building a watermark on one front panel.
// ---------------------------------------------------------------------------------------------------------------

const double _unitPt = 612 / 960;

double _fit(double want, double most, [double least = 0.2]) => math.max(least, math.min(want, most));

/// A front panel, with its own "up" (rot) so the watermark reads right after folding.
class _Frame {
  _Frame(List<num> a, this.palette, this.s)
      : rot = a.length > 4 ? a[4].toDouble() : 0,
        dark = a.length > 5 && a[5] != 0,
        cx = (a[0] + a[2] / 2).toDouble(),
        cy = (a[1] + a[3] / 2).toDouble(),
        lw = ((a.length > 4 ? a[4] : 0).toDouble().abs() - math.pi / 2).abs() < 0.01 ? a[3].toDouble() : a[2].toDouble(),
        lh = ((a.length > 4 ? a[4] : 0).toDouble().abs() - math.pi / 2).abs() < 0.01 ? a[2].toDouble() : a[3].toDouble();

  final NgmyCraftPalette palette;
  final NgmyCraftWmSettings s;
  final double rot;
  final bool dark;
  final double cx;
  final double cy;
  final double lw;
  final double lh;
  final List<NgmySlideElement> out = [];

  double get m => math.min(lw, lh);
  double get size => s.size;
  String get variant => s.variantId;

  /// The watermark colour at [alpha] (a little stronger on dark panels, where it is white), times the visibility.
  int ink(int alpha) {
    final rgb = dark ? 0xFFFFFF : (palette.main & 0xFFFFFF);
    final a0 = dark ? math.min(255, alpha + 0x12) : alpha;
    final a = (a0 * s.visibility).round().clamp(0, 255);
    return (a << 24) | rgb;
  }

  /// The centre of a [w] x [h] piece at the chosen spot (kept 0.15 in inside the panel).
  Offset spot(double w, double h) {
    final p = s.placeOrDefault;
    const margin = 0.15;
    double along(int i, double len, double size) => i == 0 ? margin + size / 2 : (i == 1 ? len / 2 : len - margin - size / 2);
    return Offset(along(p % 3, lw, math.min(w, lw - 2 * margin)), along(p ~/ 3, lh, math.min(h, lh - 2 * margin)));
  }

  Offset _at(double u, double v) {
    final dx = u - lw / 2;
    final dy = v - lh / 2;
    final c = math.cos(rot);
    final sn = math.sin(rot);
    return Offset(cx + dx * c - dy * sn, cy + dx * sn + dy * c);
  }

  NgmySlideElement _place(NgmySlideElement e, double u, double v, double w, double h, double r) {
    final c = _at(u, v);
    e
      ..x = (c.dx - w / 2) / kNgmyCraftPageW
      ..y = (c.dy - h / 2) / kNgmyCraftPageH
      ..w = w / kNgmyCraftPageW
      ..h = h / kNgmyCraftPageH
      ..rotation = r + rot;
    out.add(e);
    return e;
  }

  void text(String t, double u, double v, double w, double pt, int color, {bool bold = true, bool italic = false, double r = 0, double? h, bool light = false}) {
    _place(
      NgmySlideElement(
        id: 'craft_wm_${NgmySlidesTemplates.newId()}',
        type: NgmySlideElementType.text,
        text: t,
        fontSize: (pt / _unitPt * 10).roundToDouble() / 10,
        fontWeight: light ? FontWeight.w300 : (bold ? FontWeight.w800 : FontWeight.w500),
        fontStyle: italic ? FontStyle.italic : FontStyle.normal,
        color: color,
        align: TextAlign.center,
        fileName: kNgmyCraftWatermarkFile,
      ),
      u,
      v,
      w,
      h ?? pt / 72 * 1.5,
      r,
    );
  }

  void shape(NgmySlideShapeKind kind, double u, double v, double w, double h, {int fill = 0, int stroke = 0, double sw = 0, double r = 0}) {
    _place(
      NgmySlideElement(
        id: 'craft_wm_${NgmySlidesTemplates.newId()}',
        type: NgmySlideElementType.shape,
        shape: kind,
        fillColor: fill,
        strokeColor: stroke,
        strokeWidth: sw,
        fileName: kNgmyCraftWatermarkFile,
      ),
      u,
      v,
      w,
      h,
      r,
    );
  }

  void rect(double u, double v, double w, double h, int fill, {double r = 0}) => shape(NgmySlideShapeKind.rectangle, u, v, w, h, fill: fill, r: r);

  void image(String ref, double u, double v, double w, double h) {
    _place(
      NgmySlideElement(id: 'craft_wm_${NgmySlidesTemplates.newId()}', type: NgmySlideElementType.image, imageRef: ref, fileName: kNgmyCraftWatermarkFile),
      u,
      v,
      w,
      h,
      0,
    );
  }
}

void _seal(_Frame f) {
  final base = (f.m * 0.3).clamp(0.7, 1.25).toDouble();
  final d = _fit(base * f.size, math.max(base, f.m - 0.3), 0.35);
  final c = f.spot(f.variant == 'stamp' ? d * 1.25 : d, d);
  final u = c.dx;
  final v = c.dy;
  switch (f.variant) {
    case 'double':
      f.shape(NgmySlideShapeKind.circle, u, v, d, d, stroke: f.ink(0x80), sw: 1.4);
      f.shape(NgmySlideShapeKind.circle, u, v, d * 0.9, d * 0.9, stroke: f.ink(0x66), sw: 0.7);
      f.shape(NgmySlideShapeKind.circle, u, v, d * 0.72, d * 0.72, stroke: f.ink(0x59), sw: 0.7);
    case 'scalloped':
      for (var i = 0; i < 16; i++) {
        final a = i * 2 * math.pi / 16;
        f.shape(NgmySlideShapeKind.circle, u + d * 0.46 * math.cos(a), v + d * 0.46 * math.sin(a), d * 0.11, d * 0.11, stroke: f.ink(0x73), sw: 0.8);
      }
      f.shape(NgmySlideShapeKind.circle, u, v, d * 0.8, d * 0.8, stroke: f.ink(0x66), sw: 1.0);
    case 'star':
      for (var i = 0; i < 16; i++) {
        final a = i * 2 * math.pi / 16;
        f.rect(u + d * 0.47 * math.cos(a), v + d * 0.47 * math.sin(a), d * 0.07, d * 0.07, f.ink(0x66), r: a + math.pi / 4);
      }
      f.shape(NgmySlideShapeKind.circle, u, v, d * 0.82, d * 0.82, stroke: f.ink(0x80), sw: 1.2);
    case 'stamp':
      f.shape(NgmySlideShapeKind.rectangle, u, v, d * 1.25, d * 0.78, stroke: f.ink(0x80), sw: 1.5, r: -0.12);
      f.shape(NgmySlideShapeKind.rectangle, u, v, d * 1.12, d * 0.65, stroke: f.ink(0x59), sw: 0.7, r: -0.12);
      f.text('NGMY', u, v - d * 0.08, d * 1.0, d * 72 * 0.22, f.ink(0x99), r: -0.12);
      f.text('ngmy.org', u, v + d * 0.17, d * 1.0, math.max(4.5, d * 72 * 0.08), f.ink(0x8C), bold: false, r: -0.12);
      return;
    default:
      f.shape(NgmySlideShapeKind.circle, u, v, d, d, stroke: f.ink(0x80), sw: 1.4);
      f.shape(NgmySlideShapeKind.circle, u, v, d * 0.8, d * 0.8, stroke: f.ink(0x59), sw: 0.8);
  }
  f.text('NGMY', u, v - d * 0.06, d * 0.9, d * 72 * 0.2, f.ink(0x99));
  f.text('ngmy.org', u, v + d * 0.2, d * 0.9, math.max(4.5, d * 72 * 0.075), f.ink(0x8C), bold: false);
}

void _diagonal(_Frame f) {
  final diag = math.sqrt(f.lw * f.lw + f.lh * f.lh);
  final bw = _fit(math.min(diag * 0.72, 7.5) * f.size, diag * 0.92, 0.6);
  final r = -math.atan2(f.lh, f.lw);
  switch (f.variant) {
    case 'thin':
      f.text('NGMY', f.lw / 2, f.lh / 2, bw, math.min(bw * 72 / 3.0, 150.0), f.ink(0x2E), light: true, r: r);
    case 'stacked':
      final pt = math.min(bw * 72 / 3.3, 140.0);
      final gap = pt / 72 * 0.62;
      final ox = -math.sin(r) * gap;
      final oy = math.cos(r) * gap;
      f.text('NGMY', f.lw / 2 - ox * 0.35, f.lh / 2 - oy * 0.35, bw, pt, f.ink(0x24), r: r);
      f.text('ngmy.org', f.lw / 2 + ox, f.lh / 2 + oy, bw, pt * 0.32, f.ink(0x33), bold: false, r: r);
    case 'spaced':
      f.text('N  G  M  Y', f.lw / 2, f.lh / 2, bw, math.min(bw * 72 / 5.2, 110.0), f.ink(0x24), r: r);
    default:
      f.text('NGMY', f.lw / 2, f.lh / 2, bw, math.min(bw * 72 / 3.1, 150.0), f.ink(0x24), r: r);
  }
}

void _pattern(_Frame f) {
  if (f.s.one) {
    final w = _fit(f.m * 0.45 * f.size, f.lw - 0.3, 0.5);
    final pt = w * 72 / 3.1;
    final c = f.spot(w, pt / 72 * 1.5);
    f.text('NGMY', c.dx, c.dy, w, pt, f.ink(0x29), r: f.variant == 'grid' ? 0 : -0.35);
    return;
  }
  var sx = (f.m * 0.45).clamp(0.9, 1.6) * f.size;
  if (f.variant == 'dense') sx *= 0.72;
  if (f.variant == 'sparse') sx *= 1.45;
  sx = _fit(sx, math.max(0.6, f.m * 0.9), 0.5);
  while ((f.lw / sx).ceil() * (f.lh / (sx * 0.6)).ceil() > 70) {
    sx *= 1.2;
  }
  final sy = sx * 0.6;
  final pt = sx * 72 * 0.13;
  final straight = f.variant == 'grid';
  var row = 0;
  for (var v = sy / 2; v < f.lh - 0.1; v += sy, row++) {
    for (var u = sx / 2 + (!straight && row.isOdd ? sx / 2 : 0); u < f.lw - 0.1; u += sx) {
      f.text('NGMY', u, v, sx * 0.85, pt, f.ink(0x29), r: straight ? 0 : -0.35);
      if (f.variant == 'dotted' && u + sx / 2 < f.lw - 0.1) {
        f.shape(NgmySlideShapeKind.circle, u + sx / 2, v, sx * 0.05, sx * 0.05, fill: f.ink(0x33));
      }
    }
  }
}

void _logo(_Frame f) {
  final extra = f.variant == 'web' ? 1.3 : (f.variant == 'plain' ? 1.0 : 1.2);
  final base = math.min(f.lw * 0.7, 4.5);
  final w = _fit(base * f.size, math.max(base, (f.lw - 0.5) / (f.variant == 'plain' ? 1 : 1.12)), 0.6);
  final ref = _logoDataUri(f.ink(0x33));
  final aspect = ref == null ? 3.1 : _logoAspect;
  final h = w / aspect;
  final c = f.spot(w * (f.variant == 'plain' ? 1 : 1.12), h * extra + 0.1);
  final u = c.dx;
  var v = c.dy;
  if (f.variant == 'web') v -= h * 0.18;
  switch (f.variant) {
    case 'framed':
      f.shape(NgmySlideShapeKind.rectangle, u, v, w * 1.12, h * 1.6, stroke: f.ink(0x4D), sw: 1.0);
    case 'badge':
      f.rect(u, v, w * 1.12, h * 1.6, f.ink(0x14));
    case 'web':
      f.text('ngmy.org', u, v + h * 0.82, w * 0.8, math.max(5, h * 72 * 0.28), f.ink(0x66), bold: false);
  }
  if (ref == null) {
    f.text('NGMY', u, v, w, w * 72 / 3.1, f.ink(0x2E));
  } else {
    f.image(ref, u, v, w, h);
  }
}

void _border(_Frame f) {
  const inset = 0.1;
  final t = 0.022 * f.size.clamp(0.7, 1.6);
  final c = f.ink(0x4D);
  void frame(double i) {
    f.rect(f.lw / 2, i, f.lw - 2 * i, t, c);
    f.rect(f.lw / 2, f.lh - i, f.lw - 2 * i, t, c);
    f.rect(i, f.lh / 2, t, f.lh - 2 * i, c);
    f.rect(f.lw - i, f.lh / 2, t, f.lh - 2 * i, c);
  }

  switch (f.variant) {
    case 'double':
      frame(inset);
      frame(inset + 0.07);
    case 'dashed':
      void dashes(double u0, double v0, double len, bool across) {
        const dash = 0.18;
        const gap = 0.12;
        for (var x = 0.0; x + dash <= len; x += dash + gap) {
          if (across) {
            f.rect(u0 + x + dash / 2, v0, dash, t, c);
          } else {
            f.rect(u0, v0 + x + dash / 2, t, dash, c);
          }
        }
      }
      dashes(inset, inset, f.lw - 2 * inset, true);
      dashes(inset, f.lh - inset, f.lw - 2 * inset, true);
      dashes(inset, inset, f.lh - 2 * inset, false);
      dashes(f.lw - inset, inset, f.lh - 2 * inset, false);
    case 'corners':
      final arm = math.min(0.6, f.m * 0.18);
      for (final (cu, cv, du, dv) in [(inset, inset, 1, 1), (f.lw - inset, inset, -1, 1), (inset, f.lh - inset, 1, -1), (f.lw - inset, f.lh - inset, -1, -1)]) {
        f.rect(cu + du * arm / 2, cv, arm, t * 1.4, c);
        f.rect(cu, cv + dv * arm / 2, t * 1.4, arm, c);
      }
    default:
      frame(inset);
  }
  String band(double len) => List.filled(math.max(1, ((len - 0.5) / 0.8).floor()), 'NGMY').join('    ');
  final pt = 6.5 * f.size;
  final tc = f.ink(0x73);
  final d = inset + 0.12 + (f.variant == 'double' ? 0.05 : 0) + (pt - 6.5) / 72 * 0.6;
  if (f.s.one) {
    // Just one word, at the bottom.
    f.text('NGMY  -  ngmy.org', f.lw / 2, f.lh - d, f.lw - 0.5, pt, tc, r: math.pi * 0);
    return;
  }
  f.text(band(f.lw), f.lw / 2, d, f.lw - 0.5, pt, tc);
  f.text(band(f.lw), f.lw / 2, f.lh - d, f.lw - 0.5, pt, tc, r: math.pi);
  // Words down the sides only on big panels (on a tag they would run into its words).
  if (f.lw >= 3 && f.lh >= 3) {
    f.text(band(f.lh), d, f.lh / 2, f.lh - 0.5, pt, tc, r: -math.pi / 2);
    f.text(band(f.lh), f.lw - d, f.lh / 2, f.lh - 0.5, pt, tc, r: math.pi / 2);
  }
}

void _crest(_Frame f) {
  final base = (f.m * 0.42).clamp(0.9, 2.6).toDouble();
  final s = _fit(base * f.size, math.max(base, f.m - 0.3), 0.4);
  final c = f.spot(s, s);
  final u = c.dx;
  final v = c.dy;
  switch (f.variant) {
    case 'circle':
      f.shape(NgmySlideShapeKind.circle, u, v, s * 0.9, s * 0.9, stroke: f.ink(0x4D), sw: 1.2);
      f.shape(NgmySlideShapeKind.circle, u, v, s * 0.78, s * 0.78, stroke: f.ink(0x33), sw: 0.7);
    case 'square':
      f.shape(NgmySlideShapeKind.rectangle, u, v, s * 0.82, s * 0.82, stroke: f.ink(0x4D), sw: 1.2);
      f.shape(NgmySlideShapeKind.rectangle, u, v, s * 0.7, s * 0.7, stroke: f.ink(0x33), sw: 0.7);
    default:
      final side = s / math.sqrt2;
      f.shape(NgmySlideShapeKind.rectangle, u, v, side, side, stroke: f.ink(0x4D), sw: 1.2, r: math.pi / 4);
      f.shape(NgmySlideShapeKind.rectangle, u, v, side * 0.86, side * 0.86, stroke: f.ink(0x33), sw: 0.7, r: math.pi / 4);
  }
  f.text('N', u, v - s * 0.05, s * 0.6, s * 72 * 0.34, f.ink(0x40));
  f.text('NGMY', u, v + s * 0.22, s * 0.6, math.max(4.5, s * 72 * 0.06), f.ink(0x73));
}

void _ribbon(_Frame f) {
  if (f.variant == 'sash') {
    final diag = math.sqrt(f.lw * f.lw + f.lh * f.lh);
    final th = _fit(0.3 * f.size, f.m * 0.3, 0.14);
    final r = -math.atan2(f.lh, f.lw);
    f.rect(f.lw / 2, f.lh / 2, diag * 0.94, th, f.ink(0x26), r: r);
    f.text(List.filled(math.max(1, (diag / 1.6).floor()), 'NGMY   ngmy.org').join('      '), f.lw / 2, f.lh / 2, diag * 0.9, th * 72 * 0.42, f.ink(0x99), r: r, h: th);
    return;
  }
  final p = f.s.placeOrDefault;
  final right = p % 3 != 0;
  final bottom = p ~/ 3 == 2;
  final base = (f.m * 0.2).clamp(0.35, 0.65).toDouble();
  final off = _fit(base * f.size, math.max(base, f.m * 0.45), 0.25);
  final len = off * 2 * math.sqrt2 * 0.92;
  final th = (off * 0.45).clamp(0.18, 0.3).toDouble();
  final u = right ? f.lw - off : off;
  final v = bottom ? f.lh - off : off;
  final r = (right == bottom) ? -math.pi / 4 : math.pi / 4;
  f.rect(u, v, len, th, f.ink(0x33), r: r);
  f.text('ngmy.org', u, v, len, th * 72 * 0.45, f.ink(0xA6), r: r, h: th);
  if (f.variant == 'double') {
    final o = th * 0.95;
    final du = (right ? 1 : -1) * o / math.sqrt2;
    final dv = (bottom ? 1 : -1) * o / math.sqrt2;
    f.rect(u + du, v + dv, len * 0.72, th * 0.35, f.ink(0x40), r: r);
  }
}

void _footer(_Frame f) {
  final base = (f.m * 0.07).clamp(0.2, 0.3).toDouble();
  final h = _fit(base * f.size, math.max(base, f.lh * 0.3), 0.12);
  final row = f.s.placeOrDefault ~/ 3;
  final v = row == 0 ? h / 2 + 0.08 : (row == 1 ? f.lh / 2 : f.lh - h / 2 - 0.08);
  const words = 'Made with NGMY  -  ngmy.org';
  switch (f.variant) {
    case 'line':
      f.rect(f.lw / 2, v - h * 0.45, f.lw - 0.3, 0.012, f.ink(0x4D));
      f.text(words, f.lw / 2, v + h * 0.05, f.lw - 0.3, h * 72 * 0.38, f.ink(0x99), h: h);
    case 'tag':
      final w = math.min(f.lw - 0.3, h * 7.2);
      f.rect(f.lw / 2, v, w, h, f.ink(0x24));
      f.text(words, f.lw / 2, v, w - 0.1, h * 72 * 0.36, f.ink(0xA6), h: h);
    default:
      f.rect(f.lw / 2, v, f.lw - 0.16, h, f.ink(0x1F));
      f.text(words, f.lw / 2, v, f.lw - 0.3, h * 72 * 0.4, f.ink(0x99), h: h);
  }
}

void _script(_Frame f) {
  final base = math.min(f.lw * 72 / 2.6, 120.0);
  final pt = _fit(base * f.size, math.max(base, (f.lw - 0.3) * 72 / 2.4), 10);
  final w = math.min(f.lw * 0.9 * f.size, f.lw - 0.2);
  final c = f.spot(w, pt / 72 * 1.5);
  final r = f.variant == 'tilted' ? -0.12 : 0.0;
  f.text('ngmy', c.dx, c.dy, w, pt, f.ink(0x24), bold: false, italic: true, r: r);
  if (f.variant == 'underline') f.rect(c.dx, c.dy + pt / 72 * 0.55, pt / 72 * 2.2, 0.02, f.ink(0x33));
}

List<NgmySlideElement> _styleElements(NgmyCraftWmSettings s, List<num> anchor, NgmyCraftPalette p) {
  final f = _Frame(anchor, p, s);
  switch (s.style) {
    case 'diagonal':
      _diagonal(f);
    case 'pattern':
      _pattern(f);
    case 'logo':
      _logo(f);
    case 'border':
      _border(f);
    case 'crest':
      _crest(f);
    case 'ribbon':
      _ribbon(f);
    case 'footer':
      _footer(f);
    case 'script':
      _script(f);
    default:
      _seal(f);
  }
  return f.out;
}

// ---------------------------------------------------------------------------------------------------------------
// Putting it on a deck.
// ---------------------------------------------------------------------------------------------------------------

Map<String, dynamic>? _linesSpec(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements) {
      if (!ngmyIsCraftLines(e)) continue;
      try {
        return jsonDecode(e.text) as Map<String, dynamic>;
      } catch (_) {
        return null;
      }
    }
  }
  return null;
}

/// The watermark settings of a Fold & Cut deck now.
NgmyCraftWmSettings ngmyCraftWatermarkSettingsOf(NgmySlideDeck deck) {
  final spec = _linesSpec(deck);
  if (spec == null) return const NgmyCraftWmSettings();
  return NgmyCraftWmSettings.fromJson(spec['wm']?.toString() ?? kNgmyCraftDefaultWatermark, spec['wmo']);
}

/// The watermark style a Fold & Cut deck has now.
String ngmyCraftWatermarkOf(NgmySlideDeck deck) => ngmyCraftWatermarkSettingsOf(deck).style;

/// Puts the [style] watermark on every page (its first design, its own spot), keeping the size and visibility.
void ngmyApplyCraftWatermark(NgmySlideDeck deck, String style, {NgmyCraftPalette? palette}) {
  final id = ngmyCraftWatermarkById(style)?.id ?? kNgmyCraftDefaultWatermark;
  ngmyApplyCraftWatermarkSettings(deck, ngmyCraftWatermarkSettingsOf(deck).withStyle(id), palette: palette);
}

/// Puts the watermark with [settings] on every page of a Fold & Cut deck (replacing the old one), in its colours.
void ngmyApplyCraftWatermarkSettings(NgmySlideDeck deck, NgmyCraftWmSettings settings, {NgmyCraftPalette? palette}) {
  final p = palette ?? ngmyPaperCraftOfDeck(deck)?.palette ?? kNgmyCraftPalettes.first;
  for (final slide in deck.slides) {
    slide.elements.removeWhere(ngmyIsCraftWatermark);
    final li = slide.elements.indexWhere(ngmyIsCraftLines);
    if (li < 0) continue;
    final lines = slide.elements[li];
    Map<String, dynamic> spec;
    try {
      spec = jsonDecode(lines.text) as Map<String, dynamic>;
    } catch (_) {
      continue;
    }
    spec['wm'] = settings.style;
    final extra = settings.toJson();
    if (extra.isEmpty) {
      spec.remove('wmo');
    } else {
      spec['wmo'] = extra;
    }
    lines.text = jsonEncode(spec);
    final anchors = [
      for (final a in (spec['a'] as List? ?? const [])) [for (final v in a as List) v as num],
    ];
    if (anchors.isEmpty) anchors.add([0.6, 0.6, 7.3, 9.6, 0, 0]);
    final els = <NgmySlideElement>[for (final a in anchors) ..._styleElements(settings, a, p)];
    // Right above the lines and colours, under every word the user writes.
    slide.elements.insertAll(li + 1, els);
  }
}

/// Reads a watermark change the AI wrote ({"style": "seal", "variant": "double", "size": 1.3, "visibility": 0.7,
/// "place": "bottom right", "one": true}, every part optional) on top of [now].
NgmyCraftWmSettings? ngmyCraftWmSettingsFromAi(Object? raw, NgmyCraftWmSettings now) {
  if (raw is String) {
    final id = raw.trim().toLowerCase();
    return ngmyCraftWatermarkById(id) == null || id == now.style ? null : now.withStyle(id);
  }
  if (raw is! Map || raw.isEmpty) return null;
  var s = now;
  final style = raw['style']?.toString().trim().toLowerCase();
  if (style != null && style.isNotEmpty && ngmyCraftWatermarkById(style) != null && style != s.style) s = s.withStyle(style);
  final variant = raw['variant']?.toString().trim().toLowerCase();
  if (variant != null && variant.isNotEmpty) {
    for (final v in s.kind.variants) {
      if (v.$1 == variant || v.$2.toLowerCase() == variant) s = s.copyWith(variant: v.$1);
    }
  }
  if (raw['one'] is bool) s = s.copyWith(one: raw['one'] as bool);
  final place = raw['place'];
  if (place is num && place >= 0 && place <= 8) s = s.copyWith(place: place.toInt());
  if (place is String) {
    final i = kNgmyCraftWmPlaces.indexOf(place.trim().toLowerCase().replaceAll('centre', 'center').replaceAll('middle', 'center'));
    if (i >= 0) s = s.copyWith(place: i);
  }
  if (raw['size'] is num) s = s.copyWith(size: (raw['size'] as num).toDouble());
  if (raw['visibility'] is num) s = s.copyWith(visibility: (raw['visibility'] as num).toDouble());
  if (raw['reset'] == true) s = s.copyWith(visibility: 1, size: 1, clearPlace: true);
  return s == now ? null : s;
}

/// A short description of the settings, for the AI.
String ngmyCraftWmDescribe(NgmyCraftWmSettings s) {
  final k = s.kind;
  return 'style ${s.style} (${k.name}), variant ${s.variantId}, ${s.one ? 'one only' : 'many'}, place ${kNgmyCraftWmPlaces[s.placeOrDefault]}, '
      'size ${s.size.toStringAsFixed(2)}, visibility ${s.visibility.toStringAsFixed(2)} (1 is the default for both)';
}

// ---------------------------------------------------------------------------------------------------------------
// The watermark panel (opened from the watermark button beside the green AI button).
// ---------------------------------------------------------------------------------------------------------------

/// Opens the watermark panel for an open Fold & Cut deck. [onApply] makes the change (inside the editor, so Undo
/// works).
Future<void> showNgmyCraftWatermarkPanel(
  BuildContext context, {
  required NgmySlideDeck Function() deck,
  required void Function(NgmyCraftWmSettings settings) onApply,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    barrierColor: Colors.black26,
    builder: (_) => _WatermarkPanel(deck: deck, onApply: onApply),
  );
}

class _WatermarkPanel extends StatefulWidget {
  const _WatermarkPanel({required this.deck, required this.onApply});
  final NgmySlideDeck Function() deck;
  final void Function(NgmyCraftWmSettings settings) onApply;
  @override
  State<_WatermarkPanel> createState() => _WatermarkPanelState();
}

class _WatermarkPanelState extends State<_WatermarkPanel> {
  late NgmyCraftWmSettings _s = ngmyCraftWatermarkSettingsOf(widget.deck());

  @override
  void initState() {
    super.initState();
    if (!ngmyCraftLogoReady) {
      ngmyPreloadCraftLogo().then((_) {
        if (mounted && _s.style == 'logo') widget.onApply(_s);
      });
    }
  }

  void _set(NgmyCraftWmSettings s, {bool apply = true}) {
    setState(() => _s = s);
    if (apply) widget.onApply(s);
  }

  static const _green = Color(0xFF14B87A);

  Widget _label(String t, {Widget? trailing}) => Padding(
        padding: const EdgeInsets.only(top: 12, bottom: 6),
        child: Row(children: [
          Text(t, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1)),
          const Spacer(),
          ?trailing,
        ]),
      );

  Widget _chips<T>(List<(T, String, IconData?)> items, T selected, ValueChanged<T> onTap, String keyPrefix) => SizedBox(
        height: 36,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: [
            for (final (id, name, icon) in items)
              Padding(
                padding: const EdgeInsets.only(right: 6),
                child: ChoiceChip(
                  key: ValueKey('$keyPrefix$id'),
                  avatar: icon == null ? null : Icon(icon, size: 14),
                  label: Text(name, style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700)),
                  selected: id == selected,
                  selectedColor: _green.withValues(alpha: 0.35),
                  onSelected: (_) => onTap(id),
                ),
              ),
          ],
        ),
      );

  Widget _placeGrid() {
    final current = _s.placeOrDefault;
    return Wrap(
      spacing: 4,
      runSpacing: 4,
      children: [
        for (var i = 0; i < 9; i++)
          Tooltip(
            message: kNgmyCraftWmPlaces[i],
            child: InkWell(
              key: ValueKey('craft_wm_place_$i'),
              onTap: () => _set(_s.copyWith(place: i)),
              borderRadius: BorderRadius.circular(6),
              child: Container(
                width: 30,
                height: 22,
                decoration: BoxDecoration(
                  color: i == current ? _green : Colors.white.withValues(alpha: 0.07),
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: Colors.white24),
                ),
              ),
            ),
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final kind = _s.kind;
    final canPlace = kind.places && (!kind.canBeOne || _s.one);
    final isDefault = _s.visibility == 1;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.8, maxWidth: 520),
          decoration: const BoxDecoration(color: Color(0xFF111827), borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
          child: SafeArea(
            top: false,
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(16, 10, 16, 16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(children: [
                    const Icon(Icons.branding_watermark_outlined, color: Color(0xFF86EFAC), size: 20),
                    const SizedBox(width: 8),
                    const Expanded(child: Text('NGMY watermark', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15))),
                    IconButton(onPressed: () => Navigator.of(context).pop(), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
                  ]),
                  _label('STYLE'),
                  _chips([for (final w in kNgmyCraftWatermarks) (w.id, w.name, w.icon)], _s.style, (id) => _set(_s.withStyle(id)), 'craft_wmp_style_'),
                  _label('DESIGN'),
                  _chips([for (final v in kind.variants) (v.$1, v.$2, null)], _s.variantId, (id) => _set(_s.copyWith(variant: id)), 'craft_wmp_variant_'),
                  if (kind.canBeOne) ...[
                    _label('HOW MANY'),
                    _chips<bool>([(false, kind.id == 'border' ? 'All round' : 'Many', Icons.grid_view_rounded), (true, 'One only', Icons.crop_square_rounded)], _s.one,
                        (one) => _set(_s.copyWith(one: one)), 'craft_wmp_one_'),
                  ],
                  if (canPlace) ...[
                    _label('WHERE'),
                    Row(children: [
                      _placeGrid(),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Text(kNgmyCraftWmPlaces[_s.placeOrDefault],
                            style: const TextStyle(color: Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w700)),
                      ),
                    ]),
                  ],
                  _label('SIZE', trailing: Text('${(_s.size * 100).round()}%', style: const TextStyle(color: Colors.white54, fontSize: 11))),
                  Slider(
                    key: const ValueKey('craft_wmp_size'),
                    value: _s.size,
                    min: kNgmyCraftWmMinSize,
                    max: kNgmyCraftWmMaxSize,
                    activeColor: _green,
                    onChanged: (v) => _set(_s.copyWith(size: v), apply: false),
                    onChangeEnd: (v) => _set(_s.copyWith(size: v)),
                  ),
                  _label(
                    'VISIBILITY',
                    trailing: TextButton(
                      key: const ValueKey('craft_wmp_reset'),
                      onPressed: isDefault && _s.size == 1 ? null : () => _set(_s.copyWith(visibility: 1, size: 1)),
                      child: Text(isDefault ? 'Default' : 'Reset to default', style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700)),
                    ),
                  ),
                  Row(children: [
                    const Text('Fainter', style: TextStyle(color: Colors.white38, fontSize: 11)),
                    Expanded(
                      child: Slider(
                        key: const ValueKey('craft_wmp_visibility'),
                        value: _s.visibility,
                        min: kNgmyCraftWmMinVis,
                        max: kNgmyCraftWmMaxVis,
                        activeColor: _green,
                        onChanged: (v) => _set(_s.copyWith(visibility: (v - 1).abs() < 0.06 ? 1 : v), apply: false),
                        onChangeEnd: (v) => _set(_s.copyWith(visibility: (v - 1).abs() < 0.06 ? 1 : v)),
                      ),
                    ),
                    const Text('Stronger', style: TextStyle(color: Colors.white38, fontSize: 11)),
                  ]),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// The round watermark button that sits beside the green AI button in the slide strip.
class NgmyCraftWatermarkButton extends StatelessWidget {
  const NgmyCraftWatermarkButton({super.key, required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'NGMY watermark',
      child: Material(
        color: Colors.transparent,
        shape: const CircleBorder(),
        child: InkWell(
          key: const ValueKey('craft_wm_button'),
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.white,
              border: Border.all(color: const Color(0xFF14B87A), width: 2),
              boxShadow: [BoxShadow(color: const Color(0xFF14B87A).withValues(alpha: 0.3), blurRadius: 10)],
            ),
            child: const Icon(Icons.branding_watermark_outlined, color: Color(0xFF0E9F6A), size: 20),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------------------------------------------
// The style picker: a small page preview for each style.
// ---------------------------------------------------------------------------------------------------------------

/// A row of watermark choices, each a small picture of [preview] with that style on it.
class NgmyCraftWatermarkPicker extends StatefulWidget {
  const NgmyCraftWatermarkPicker({super.key, required this.preview, required this.selected, required this.onChanged, this.enabled = true});

  /// The deck to show the styles on (it is copied, never changed).
  final NgmySlideDeck preview;
  final String selected;
  final ValueChanged<String> onChanged;
  final bool enabled;

  @override
  State<NgmyCraftWatermarkPicker> createState() => _NgmyCraftWatermarkPickerState();
}

class _NgmyCraftWatermarkPickerState extends State<NgmyCraftWatermarkPicker> {
  final Map<String, NgmySlide> _pages = {};
  String _key = '';

  @override
  void initState() {
    super.initState();
    if (!ngmyCraftLogoReady) {
      ngmyPreloadCraftLogo().then((_) {
        if (mounted) setState(() => _pages.clear());
      });
    }
  }

  NgmySlide _page(String style) {
    final key = '${widget.preview.id}|${ngmyPaperCraftOfDeck(widget.preview)?.palette.name}';
    if (key != _key) {
      _pages.clear();
      _key = key;
    }
    return _pages[style] ??= () {
      final copy = widget.preview.copy();
      copy.slides = [copy.slides.first];
      ngmyApplyCraftWatermark(copy, style);
      return copy.slides.first;
    }();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 132,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          for (final w in kNgmyCraftWatermarks)
            Padding(
              padding: const EdgeInsets.only(right: 8),
              child: GestureDetector(
                key: ValueKey('craft_wm_${w.id}'),
                onTap: widget.enabled ? () => widget.onChanged(w.id) : null,
                child: Column(
                  children: [
                    Container(
                      width: 80,
                      height: 104,
                      padding: const EdgeInsets.all(2),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: widget.selected == w.id ? const Color(0xFF14B87A) : Colors.white24, width: widget.selected == w.id ? 2.5 : 1),
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6),
                        child: ColoredBox(color: Colors.white, child: NgmyCraftPagePreview(slide: _page(w.id))),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(w.name,
                        style: TextStyle(
                          color: widget.selected == w.id ? const Color(0xFF86EFAC) : Colors.white70,
                          fontSize: 10.5,
                          fontWeight: FontWeight.w700,
                        )),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
