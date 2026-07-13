import 'dart:convert';
import 'dart:math' as math;

import 'package:image/image.dart' as img;

/// Raster paper backgrounds for Marriage Agreement templates (portrait 9:16).
/// Every style below is built from authentic Central African textile and
/// regalia motifs — Kuba-cloth chevrons and diamond lattices, cowrie-shell
/// bead trim, basket-weave crosshatch, sunburst medallions, and the Lake
/// Tanganyika/Fizi wave line — rather than plain rectangle frames.
enum NgmyMarriagePaperStyle {
  congoHeritage,
  classicParchment,
  officialCream,
  ceremonialDiamond,
  forestGold,
  ivoryElegance,
  crimsonTradition,
  goldenFrame,
  unityHands,
  ngmyOfficial,
}

final _paperCache = <NgmyMarriagePaperStyle, String>{};

String ngmyMarriagePaperDataUrl(NgmyMarriagePaperStyle style) {
  return _paperCache.putIfAbsent(style, () {
    final bytes = img.encodePng(_renderPaper(style));
    return 'data:image/png;base64,${base64Encode(bytes)}';
  });
}

img.Color _c(int argb, [int a = 255]) => img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, a);

// Canvas is a modest step up from the original 360x640 — enough to print
// noticeably crisper without ballooning the base64 payload embedded in
// every saved deck (this JSON is kept in localStorage, which has a small
// per-origin quota).
const int _w = 480;
const int _h = 854;

img.Image _renderPaper(NgmyMarriagePaperStyle style) {
  switch (style) {
    case NgmyMarriagePaperStyle.congoHeritage:
      return _fiziMidnight();
    case NgmyMarriagePaperStyle.classicParchment:
      return _lakesideIvory();
    case NgmyMarriagePaperStyle.officialCream:
      return _sudKivuSeal();
    case NgmyMarriagePaperStyle.ceremonialDiamond:
      return _kubaWeave();
    case NgmyMarriagePaperStyle.forestGold:
      return _emeraldFizi();
    case NgmyMarriagePaperStyle.ivoryElegance:
      return _pearlRosegold();
    case NgmyMarriagePaperStyle.crimsonTradition:
      return _rubyRoot();
    case NgmyMarriagePaperStyle.goldenFrame:
      return _royalAmber();
    case NgmyMarriagePaperStyle.unityHands:
      return _umojaWeave();
    case NgmyMarriagePaperStyle.ngmyOfficial:
      return _republiqueOfficielle();
  }
}

// ── Base drawing helpers ─────────────────────────────────────────────────────

void _vGradient(img.Image im, int top, int bottom) {
  for (var y = 0; y < im.height; y++) {
    final t = y / (im.height - 1);
    final r = ((top >> 16) & 0xFF) * (1 - t) + ((bottom >> 16) & 0xFF) * t;
    final g = ((top >> 8) & 0xFF) * (1 - t) + ((bottom >> 8) & 0xFF) * t;
    final b = (top & 0xFF) * (1 - t) + (bottom & 0xFF) * t;
    final c = img.ColorRgb8(r.round().clamp(0, 255), g.round().clamp(0, 255), b.round().clamp(0, 255));
    img.drawLine(im, x1: 0, y1: y, x2: im.width - 1, y2: y, color: c);
  }
}

void _fill(img.Image im, int x, int y, int w, int h, int color) {
  img.fillRect(im, x1: x, y1: y, x2: x + w, y2: y + h, color: _c(color));
}

/// Thin antialiased rectangular frame line (not a flat filled bar).
void _border(img.Image im, int x, int y, int w, int h, int color, double t) {
  final c = _c(color);
  img.drawLine(im, x1: x, y1: y, x2: x + w, y2: y, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y + h, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y, x2: x, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x + w, y1: y, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
}

void _fillDiamond(img.Image im, num cx, num cy, num r, img.Color color) {
  img.fillPolygon(
    im,
    vertices: [img.Point(cx, cy - r), img.Point(cx + r, cy), img.Point(cx, cy + r), img.Point(cx - r, cy)],
    color: color,
  );
}

/// N-pointed star polygon — sunburst medallions and corner marks.
void _star(img.Image im, num cx, num cy, double outerR, double innerR, int points, img.Color color, {double rotation = -math.pi / 2}) {
  final verts = <img.Point>[];
  for (var i = 0; i < points * 2; i++) {
    final r = i.isEven ? outerR : innerR;
    final a = rotation + (i * math.pi / points);
    verts.add(img.Point(cx + r * math.cos(a), cy + r * math.sin(a)));
  }
  img.fillPolygon(im, vertices: verts, color: color);
}

/// Zigzag chevron trim band — classic Kuba-cloth geometric weave.
void _chevronBand(img.Image im, int x, int y, int w, int h, int base, int peak) {
  _fill(im, x, y, w, h, base);
  final step = (h * 1.1).clamp(10, w.toDouble());
  var cx = x.toDouble();
  while (cx < x + w) {
    final left = cx;
    final mid = (cx + step / 2).clamp(x.toDouble(), (x + w).toDouble());
    final right = (cx + step).clamp(x.toDouble(), (x + w).toDouble());
    img.fillPolygon(
      im,
      vertices: [img.Point(left, y + h), img.Point(mid, y.toDouble()), img.Point(right, y + h)],
      color: _c(peak),
    );
    cx += step;
  }
}

/// Row of small beads — cowrie-shell trim used along frame edges.
void _beadRow(img.Image im, int x, int y, int w, List<int> colors, {double radius = 4}) {
  final gap = (radius * 3.2).clamp(6, w.toDouble());
  var cx = x + gap / 2;
  var i = 0;
  while (cx < x + w) {
    img.drawCircle(im, x: cx.round(), y: y, radius: radius.round(), color: _c(colors[i % colors.length]), antialias: true);
    cx += gap;
    i++;
  }
}

/// Basket-weave crosshatch texture — unity/community motif.
void _weaveBand(img.Image im, int x, int y, int w, int h, int color, {int spacing = 16, double alpha = 0.55}) {
  final c = _c(color, (255 * alpha).round());
  for (var i = -h; i < w + h; i += spacing) {
    img.drawLine(im, x1: x + i, y1: y, x2: x + i + h, y2: y + h, color: c, antialias: true, thickness: 1.4);
  }
  for (var i = 0; i < w + 2 * h; i += spacing) {
    img.drawLine(im, x1: x + i, y1: y, x2: x + i - h, y2: y + h, color: c, antialias: true, thickness: 1.4);
  }
}

/// Gentle ripple lines — Lake Tanganyika / Fizi shoreline motif.
void _waveLines(img.Image im, int x, int y, int w, int rows, double amplitude, double wavelength, int color) {
  for (var row = 0; row < rows; row++) {
    final baseY = y + row * amplitude * 2.6;
    img.Point? prev;
    for (var px = x; px <= x + w; px += 3) {
      final py = baseY + amplitude * math.sin((px - x) / wavelength * 2 * math.pi + row * 0.6);
      final pt = img.Point(px.toDouble(), py);
      if (prev != null) {
        img.drawLine(im, x1: prev.xi, y1: prev.yi, x2: pt.xi, y2: pt.yi, color: _c(color), antialias: true, thickness: 1.6);
      }
      prev = pt;
    }
  }
}

/// Lattice of interlocking diamonds — Kuba raffia-cloth weave.
void _diamondLattice(img.Image im, int x, int y, int w, int h, List<int> colors) {
  final cell = h.toDouble();
  final cols = (w / cell).ceil() + 1;
  var i = 0;
  for (var row = 0; row < 2; row++) {
    for (var col = -1; col < cols; col++) {
      final cx = x + col * cell + (row.isOdd ? cell / 2 : 0);
      final cy = y + row * h / 2;
      if (cx < x - cell || cx > x + w + cell) continue;
      _fillDiamond(im, cx, cy, cell * 0.42, _c(colors[i % colors.length]));
      i++;
    }
  }
}

void _cornerFlourish(img.Image im, int x, int y, int w, int h, int color, {double r = 5, double tick = 16}) {
  final c = _c(color);
  final corners = [(x, y, 1, 1), (x + w, y, -1, 1), (x, y + h, 1, -1), (x + w, y + h, -1, -1)];
  for (final (cx, cy, sx, sy) in corners) {
    _fillDiamond(im, cx, cy, r, c);
    img.drawLine(im, x1: cx, y1: cy, x2: (cx + sx * tick).round(), y2: cy, color: c, antialias: true, thickness: 1.4);
    img.drawLine(im, x1: cx, y1: cy, x2: cx, y2: (cy + sy * tick).round(), color: c, antialias: true, thickness: 1.4);
  }
}

void _starCorners(img.Image im, int x, int y, int w, int h, int color, {double outerR = 10, double innerR = 4, int points = 5}) {
  final c = _c(color);
  for (final p in [(x, y), (x + w, y), (x, y + h), (x + w, y + h)]) {
    _star(im, p.$1, p.$2, outerR, innerR, points, c);
  }
}

// ── Templates ────────────────────────────────────────────────────────────────

/// Fizi Midnight — deep indigo night sky with a gold Kuba chevron trim and
/// sunburst star corners.
img.Image _fiziMidnight() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFF0B1330, 0xFF1B2A5C);
  const gold = 0xFFE3B341;
  _chevronBand(im, 0, 0, _w, 22, 0xFF0B1330, gold);
  _chevronBand(im, 0, _h - 22, _w, 22, 0xFF0B1330, gold);
  _border(im, 14, 34, _w - 28, _h - 68, gold, 2.2);
  _border(im, 20, 40, _w - 40, _h - 80, gold, 1);
  _starCorners(im, 14, 34, _w - 28, _h - 68, gold, outerR: 11, innerR: 4.5);
  _star(im, _w / 2, _h * 0.42, 44, 18, 8, _c(gold, 26));
  return im;
}

/// Lakeside Ivory — warm ivory paper with teal Lake Tanganyika ripple trim
/// and a bronze frame.
img.Image _lakesideIvory() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFFDF6, 0xFFF3E7CE);
  const teal = 0xFF0F8A8A;
  const bronze = 0xFF9C6B2E;
  _waveLines(im, 0, 20, _w, 3, 4, 70, teal);
  _waveLines(im, 0, _h - 40, _w, 3, 4, 70, teal);
  _border(im, 18, 46, _w - 36, _h - 92, bronze, 2.4);
  _border(im, 24, 52, _w - 48, _h - 104, teal, 1);
  _beadRow(im, 30, 46, _w - 60, [teal, bronze, 0xFFD4AF37], radius: 3.2);
  return im;
}

/// Sud-Kivu Seal — crisp white paper with tricolor wedge corners (not old
/// striped bars) and a black official double hairline.
img.Image _sudKivuSeal() {
  final im = img.Image(width: _w, height: _h);
  img.fill(im, color: _c(0xFFFFFFFE));
  _border(im, 16, 16, _w - 32, _h - 32, 0xFF111111, 2);
  _border(im, 22, 22, _w - 44, _h - 44, 0xFF111111, 0.8);
  const tri = [0xFF007FFF, 0xFFF7D618, 0xFFCE1021];
  for (var i = 0; i < 3; i++) {
    final corners = [
      (16, 16, 1, 1),
      (_w - 16, 16, -1, 1),
      (16, _h - 16, 1, -1),
      (_w - 16, _h - 16, -1, -1),
    ];
    for (final (cx, cy, sx, sy) in corners) {
      final s = 26.0 - i * 7;
      img.fillPolygon(
        im,
        vertices: [
          img.Point(cx, cy),
          img.Point(cx + sx * s, cy.toDouble()),
          img.Point(cx.toDouble(), cy + sy * s),
        ],
        color: _c(tri[i]),
      );
    }
  }
  return im;
}

/// Kuba Weave — terracotta raffia-cloth field with an interlocking diamond
/// lattice border, the closest kin to real Kuba textile design.
img.Image _kubaWeave() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFB5652A, 0xFF7A3E17);
  const cream = 0xFFF3E2C4;
  const ink = 0xFF241203;
  _fill(im, 0, 0, _w, 34, cream);
  _fill(im, 0, _h - 34, _w, 34, cream);
  _diamondLattice(im, 0, 0, _w, 34, [ink, 0xFFD4AF37]);
  _diamondLattice(im, 0, _h - 34, _w, 34, [ink, 0xFFD4AF37]);
  _border(im, 16, 46, _w - 32, _h - 92, cream, 2.4);
  _border(im, 22, 52, _w - 44, _h - 104, 0xFFD4AF37, 1);
  _starCorners(im, 16, 46, _w - 32, _h - 92, cream, outerR: 9, innerR: 6, points: 8);
  return im;
}

/// Emerald Fizi — rich emerald field, gold sunburst corner medallions,
/// double thin gold frame.
img.Image _emeraldFizi() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFF0E3B27, 0xFF14532D);
  const gold = 0xFFD4AF37;
  _fill(im, 0, 0, _w, 6, 0xFF007FFF);
  _border(im, 16, 22, _w - 32, _h - 44, gold, 2.2);
  _border(im, 22, 28, _w - 44, _h - 56, gold, 0.9);
  for (final p in [(16, 22), (_w - 16, 22), (16, _h - 22), (_w - 16, _h - 22)]) {
    _star(im, p.$1, p.$2, 20, 8, 10, _c(gold));
  }
  _star(im, _w / 2, _h * 0.46, 60, 24, 10, _c(gold, 22));
  return im;
}

/// Pearl & Rosegold — soft blush paper, delicate rose-gold hairline frame
/// and bead trim; the most minimal, elegant design of the set.
img.Image _pearlRosegold() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFF7F5, 0xFFF6E4E2);
  const rose = 0xFFB76E79;
  _border(im, 26, 30, _w - 52, _h - 60, rose, 1.2);
  _border(im, 32, 36, _w - 64, _h - 72, rose, 0.7);
  _beadRow(im, 40, 30, _w - 80, [rose], radius: 2.4);
  _beadRow(im, 40, _h - 30, _w - 80, [rose], radius: 2.4);
  return im;
}

/// Ruby Root — deep burgundy field with a black-and-gold chevron trim and
/// gold star corners; the boldest, most traditional-feeling design.
img.Image _rubyRoot() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFF5C0A17, 0xFF3B0A12);
  const gold = 0xFFE3B341;
  _chevronBand(im, 0, 0, _w, 20, 0xFF1A0508, gold);
  _chevronBand(im, 0, _h - 20, _w, 20, 0xFF1A0508, gold);
  _border(im, 14, 32, _w - 28, _h - 64, gold, 2);
  _starCorners(im, 14, 32, _w - 28, _h - 64, gold, outerR: 10, innerR: 4);
  return im;
}

/// Royal Amber — gold IS the field (not just the accent) with a dark
/// bronze triple-line frame and ornate star corners; the most premium of
/// the ten.
img.Image _royalAmber() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFF3C969, 0xFFC9932F);
  const bronze = 0xFF5C3A11;
  _border(im, 12, 12, _w - 24, _h - 24, bronze, 3);
  _border(im, 20, 20, _w - 40, _h - 40, bronze, 1);
  _border(im, 26, 26, _w - 52, _h - 52, bronze, 0.6);
  _starCorners(im, 12, 12, _w - 24, _h - 24, bronze, outerR: 13, innerR: 5, points: 6);
  return im;
}

/// Umoja Weave ("umoja" = unity, Swahili) — warm sand field with a
/// basket-weave crosshatch border band, green and gold bead trim.
img.Image _umojaWeave() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFF1DFBB, 0xFFE3C589);
  const green = 0xFF1D4D2B;
  const gold = 0xFFB8860B;
  _fill(im, 0, 0, _w, 30, 0xFFF7EFD9);
  _fill(im, 0, _h - 30, _w, 30, 0xFFF7EFD9);
  _weaveBand(im, 0, 0, _w, 30, green, spacing: 14);
  _weaveBand(im, 0, _h - 30, _w, 30, green, spacing: 14);
  _beadRow(im, 24, 15, _w - 48, [green, gold], radius: 3);
  _beadRow(im, 24, _h - 15, _w - 48, [green, gold], radius: 3);
  _border(im, 16, 40, _w - 32, _h - 80, green, 1.6);
  _cornerFlourish(im, 16, 40, _w - 32, _h - 80, gold, r: 5, tick: 14);
  return im;
}

/// République Officielle — the official state-facing design: cream paper,
/// full DRC tricolor band, and a big Fizi / Sud-Kivu civil stamp seal.
img.Image _republiqueOfficielle() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFFFFE, 0xFFF6F3EA);
  _fill(im, 0, 0, (_w / 3).round(), 12, 0xFF007FFF);
  _fill(im, (_w / 3).round(), 0, (_w / 3).round(), 12, 0xFFF7D618);
  _fill(im, (_w * 2 / 3).round(), 0, _w - (_w * 2 / 3).round(), 12, 0xFFCE1021);
  _border(im, 12, 20, _w - 24, _h - 40, 0xFF007FFF, 2.4);
  _border(im, 18, 26, _w - 36, _h - 52, 0xFFCE1021, 0.8);
  _cornerFlourish(im, 12, 20, _w - 24, _h - 40, 0xFFF7D618, r: 4, tick: 12);

  // Fizi / Sud-Kivu civil stamp — concentric rings + star, bottom-right.
  final sx = (_w * 0.78).round();
  final sy = (_h * 0.90).round();
  for (var r = 46; r <= 49; r++) {
    img.drawCircle(im, x: sx, y: sy, radius: r, color: _c(0xFFCE1021), antialias: true);
  }
  for (var r = 37; r <= 39; r++) {
    img.drawCircle(im, x: sx, y: sy, radius: r, color: _c(0xFFD4AF37), antialias: true);
  }
  _star(im, sx, sy, 14, 6, 6, _c(0xFF007FFF));
  return im;
}

NgmyMarriagePaperStyle ngmyMarriageStyleFromTemplateId(String id) {
  switch (id) {
    case 'congo_heritage':
      return NgmyMarriagePaperStyle.congoHeritage;
    case 'classic_parchment':
      return NgmyMarriagePaperStyle.classicParchment;
    case 'official_cream':
      return NgmyMarriagePaperStyle.officialCream;
    case 'ceremonial_diamond':
      return NgmyMarriagePaperStyle.ceremonialDiamond;
    case 'forest_gold':
      return NgmyMarriagePaperStyle.forestGold;
    case 'ivory_elegance':
      return NgmyMarriagePaperStyle.ivoryElegance;
    case 'crimson_tradition':
      return NgmyMarriagePaperStyle.crimsonTradition;
    case 'golden_frame':
      return NgmyMarriagePaperStyle.goldenFrame;
    case 'unity_hands':
      return NgmyMarriagePaperStyle.unityHands;
    case 'ngmy_official':
      return NgmyMarriagePaperStyle.ngmyOfficial;
    default:
      return NgmyMarriagePaperStyle.classicParchment;
  }
}
