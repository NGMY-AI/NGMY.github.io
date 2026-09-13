import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:image/image.dart' as img;

/// Backgrounds for the "Hati ya Kuhowesha" (Barua ya Uchumba) certificate
/// templates (portrait 9:16) — a bold tribal-patterned frame for the
/// "Heritage" family, and a slim double-line frame for the "Elegant" family.
enum NgmyMarriagePaperStyle {
  heritageGold,
  heritageCrimson,
  elegantNavy,
  elegantGold,
  elegantEmerald,
  elegantBurgundy,
  beadedPearl,
  artDeco,
  rosetteCorners,
  modernLedger,
  kenteSunset,
  indigoMudcloth,
  adinkraRoyal,
  nileLotus,
  shweshweIvory,
  certIvoryNavy,
  certIvoryGreen,
  certIvoryRose,
  certIvoryNavyBar,
  goldFiligree,
  goldLaurel,
  goldCrest,
  goldRibbon,
  goldBaroque,
}

final _paperCache = <NgmyMarriagePaperStyle, String>{};

Uint8List ngmyMarriagePaperPng(NgmyMarriagePaperStyle style) {
  return img.encodePng(_renderPaper(style));
}

String ngmyMarriagePaperDataUrl(NgmyMarriagePaperStyle style) {
  return _paperCache.putIfAbsent(style, () {
    return 'data:image/png;base64,${base64Encode(ngmyMarriagePaperPng(style))}';
  });
}

void ngmyClearMarriagePaperCache() => _paperCache.clear();

img.Color _c(int argb) => img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, 255);

const int _w = 480;
const int _h = 854;

img.Image _renderPaper(NgmyMarriagePaperStyle style) {
  switch (style) {
    case NgmyMarriagePaperStyle.heritageGold:
      return _tribalPaper(0xFFF9F1DD, 0xFFEFE0BE, 0xFF5C3A1E, 0xFFD4AF37);
    case NgmyMarriagePaperStyle.heritageCrimson:
      return _tribalPaper(0xFFFAF0E6, 0xFFF0DCC8, 0xFF6B2A1E, 0xFFE0A458);
    case NgmyMarriagePaperStyle.elegantNavy:
      return _elegantPaper(0xFFFFFEFB, 0xFFF8F5EE, 0xFFB8860B);
    case NgmyMarriagePaperStyle.elegantGold:
      return _elegantPaper(0xFFFFFCF3, 0xFFF6EEDA, 0xFFA6843A);
    case NgmyMarriagePaperStyle.elegantEmerald:
      return _elegantPaper(0xFFF6FBF8, 0xFFEBF5EE, 0xFFB8965A);
    case NgmyMarriagePaperStyle.elegantBurgundy:
      return _elegantPaper(0xFFFFF7F6, 0xFFF7E8EA, 0xFF9C7A34);
    case NgmyMarriagePaperStyle.beadedPearl:
      return _beadedPearlPaper(0xFFFFFDF6, 0xFFF3EAD8, 0xFF7A5C2E, 0xFFC9A227);
    case NgmyMarriagePaperStyle.artDeco:
      return _artDecoPaper(0xFFF7F5F2, 0xFFE9E3D9, 0xFF1F1B16, 0xFFB8860B);
    case NgmyMarriagePaperStyle.rosetteCorners:
      return _rosetteCornerPaper(0xFFFBF6EF, 0xFFEFE3D0, 0xFF6B3F2A, 0xFFC97B3D);
    case NgmyMarriagePaperStyle.modernLedger:
      return _modernLedgerPaper(0xFFFFFFFF, 0xFFF2F2F2, 0xFFD8D8D8, 0xFF12213D);
    case NgmyMarriagePaperStyle.kenteSunset:
      return _kentePaper(0xFFFFF6E4, 0xFFF3E2BC);
    case NgmyMarriagePaperStyle.indigoMudcloth:
      return _mudclothPaper(0xFFF7F0E4, 0xFFE8D7BE);
    case NgmyMarriagePaperStyle.adinkraRoyal:
      return _adinkraPaper(0xFFFFF8EC, 0xFFF4E4C8);
    case NgmyMarriagePaperStyle.nileLotus:
      return _lotusPaper(0xFFF4F7F4, 0xFFE4EEE8);
    case NgmyMarriagePaperStyle.shweshweIvory:
      return _shweshwePaper(0xFFF8F4EE, 0xFFEDE4D6);
    case NgmyMarriagePaperStyle.certIvoryNavy:
      return _certificatePaper(0xFFFFFBF3, 0xFFF7F0E2, 0xFFC9A227, 0xFF12213D);
    case NgmyMarriagePaperStyle.certIvoryGreen:
      return _certificatePaper(0xFFFFFDF8, 0xFFF3F6F0, 0xFFC9A227, 0xFF1F4D3A, topBar: 0xFF1F4D3A);
    case NgmyMarriagePaperStyle.certIvoryRose:
      return _certificatePaper(0xFFFFF8F5, 0xFFF8EEEA, 0xFFC9A227, 0xFF7A3B4A);
    case NgmyMarriagePaperStyle.certIvoryNavyBar:
      return _certificatePaper(0xFFFFFCF7, 0xFFF6F1E6, 0xFFC9A227, 0xFF12213D, topBar: 0xFF12213D);
    case NgmyMarriagePaperStyle.goldFiligree:
      return _goldFiligreePaper();
    case NgmyMarriagePaperStyle.goldLaurel:
      return _goldLaurelPaper();
    case NgmyMarriagePaperStyle.goldCrest:
      return _goldCrestPaper();
    case NgmyMarriagePaperStyle.goldRibbon:
      return _goldRibbonPaper();
    case NgmyMarriagePaperStyle.goldBaroque:
      return _goldBaroquePaper();
  }
}

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

void _grainNoise(img.Image im, int seed) {
  final rng = math.Random(seed);
  for (var i = 0; i < 900; i++) {
    final x = rng.nextInt(im.width);
    final y = rng.nextInt(im.height);
    final p = im.getPixel(x, y);
    im.setPixelRgba(x, y, (p.r.toInt() - 3).clamp(0, 255), (p.g.toInt() - 3).clamp(0, 255), (p.b.toInt() - 2).clamp(0, 255), 255);
  }
}

void _border(img.Image im, int x, int y, int w, int h, int color, double t) {
  final c = _c(color);
  img.drawLine(im, x1: x, y1: y, x2: x + w, y2: y, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y + h, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y, x2: x, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x + w, y1: y, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
}

/// A strip of alternating triangle "teeth" — the tribal zigzag trim.
void _zigzagTrim(img.Image im, {required bool horizontal, required int pos, required int length, required int amp, required int toothLen, required int color, required bool pointForward}) {
  final c = _c(color);
  var i = 0;
  while (i < length) {
    final p0 = i;
    final p1 = (i + toothLen / 2).round();
    final p2 = (i + toothLen).clamp(0, length);
    if (horizontal) {
      final baseY = pos;
      final tipY = pointForward ? pos + amp : pos - amp;
      img.fillPolygon(im, vertices: [img.Point(p0, baseY), img.Point(p1, tipY), img.Point(p2, baseY)], color: c);
    } else {
      final baseX = pos;
      final tipX = pointForward ? pos + amp : pos - amp;
      img.fillPolygon(im, vertices: [img.Point(baseX, p0), img.Point(tipX, p1), img.Point(baseX, p2)], color: c);
    }
    i += toothLen;
  }
}

/// Bold picture-frame band with an inward-facing zigzag trim — "Heritage".
img.Image _tribalPaper(int paperTop, int paperBottom, int bandColor, int trimColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const band = 28;
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: band, color: _c(bandColor));
  img.fillRect(im, x1: 0, y1: _h - band, x2: _w - 1, y2: _h - 1, color: _c(bandColor));
  img.fillRect(im, x1: 0, y1: 0, x2: band, y2: _h - 1, color: _c(bandColor));
  img.fillRect(im, x1: _w - band, y1: 0, x2: _w - 1, y2: _h - 1, color: _c(bandColor));
  _zigzagTrim(im, horizontal: true, pos: band, length: _w, amp: 9, toothLen: 18, color: trimColor, pointForward: true);
  _zigzagTrim(im, horizontal: true, pos: _h - band, length: _w, amp: 9, toothLen: 18, color: trimColor, pointForward: false);
  _zigzagTrim(im, horizontal: false, pos: band, length: _h, amp: 9, toothLen: 18, color: trimColor, pointForward: true);
  _zigzagTrim(im, horizontal: false, pos: _w - band, length: _h, amp: 9, toothLen: 18, color: trimColor, pointForward: false);
  _border(im, band + 7, band + 7, _w - (band + 7) * 2, _h - (band + 7) * 2, trimColor, 1.0);
  return im;
}

/// Slim double-rule border, no band fill — "Elegant".
img.Image _elegantPaper(int paperTop, int paperBottom, int lineColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, 14, 16, _w - 28, _h - 32, lineColor, 1.6);
  _border(im, 20, 22, _w - 40, _h - 44, lineColor, 0.8);
  return im;
}

/// A row of small filled "beads" tracing the perimeter, with a thin hairline
/// just inside them — a pearl-strand trim, structurally unlike the solid
/// band ("Heritage") or plain double-rule ("Elegant") frames.
void _beadRow(img.Image im, int x1, int y1, int x2, int y2, int color, {int spacing = 20, int radius = 3}) {
  final dx = (x2 - x1).toDouble();
  final dy = (y2 - y1).toDouble();
  final dist = math.sqrt(dx * dx + dy * dy);
  final steps = math.max(1, (dist / spacing).round());
  for (var i = 0; i <= steps; i++) {
    final t = i / steps;
    img.fillCircle(im, x: (x1 + dx * t).round(), y: (y1 + dy * t).round(), radius: radius, color: _c(color), antialias: true);
  }
}

img.Image _beadedPearlPaper(int paperTop, int paperBottom, int lineColor, int beadColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const inset = 24;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, lineColor, 1.0);
  const beadInset = 12;
  _beadRow(im, beadInset, beadInset, _w - beadInset, beadInset, beadColor);
  _beadRow(im, beadInset, _h - beadInset, _w - beadInset, _h - beadInset, beadColor);
  _beadRow(im, beadInset, beadInset, beadInset, _h - beadInset, beadColor);
  _beadRow(im, _w - beadInset, beadInset, _w - beadInset, _h - beadInset, beadColor);
  return im;
}

/// Thin outer rule with stepped, nested Art Deco corner brackets and a
/// radiating fan at the top — a geometric structure with no counterpart in
/// the band/zigzag or plain-rule families.
void _stepCorner(img.Image im, int cx, int cy, int dx, int dy, int color) {
  for (var i = 0; i < 3; i++) {
    final off = 34 + i * 12;
    final len = 26 - i * 6;
    final x = cx + dx * off;
    final y = cy + dy * off;
    img.drawLine(im, x1: x, y1: y, x2: x + dx * len, y2: y, color: _c(color), antialias: true, thickness: 1.4);
    img.drawLine(im, x1: x, y1: y, x2: x, y2: y + dy * len, color: _c(color), antialias: true, thickness: 1.4);
  }
}

img.Image _artDecoPaper(int paperTop, int paperBottom, int lineColor, int accentColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const inset = 20;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, lineColor, 1.2);
  _stepCorner(im, 0, 0, 1, 1, accentColor);
  _stepCorner(im, _w, 0, -1, 1, accentColor);
  _stepCorner(im, 0, _h, 1, -1, accentColor);
  _stepCorner(im, _w, _h, -1, -1, accentColor);
  const fanCx = _w / 2;
  const fanCy = 60;
  for (var i = -3; i <= 3; i++) {
    final angle = -math.pi / 2 + i * 0.2;
    final x2 = fanCx + 24 * math.cos(angle);
    final y2 = fanCy + 24 * math.sin(angle);
    img.drawLine(im, x1: fanCx.round(), y1: fanCy, x2: x2.round(), y2: y2.round(), color: _c(accentColor), antialias: true, thickness: 1.2);
  }
  return im;
}

/// A thin rule border with a circular "rosette" medallion (double ring +
/// diamond center) at each corner instead of a continuous trim — a
/// medallion-corner structure distinct from every other family here.
void _rosette(img.Image im, int cx, int cy, int ringColor, int accentColor) {
  img.drawCircle(im, x: cx, y: cy, radius: 13, color: _c(ringColor), antialias: true);
  img.drawCircle(im, x: cx, y: cy, radius: 9, color: _c(ringColor), antialias: true);
  img.fillPolygon(im, vertices: [
    img.Point(cx.toDouble(), (cy - 4).toDouble()),
    img.Point((cx + 4).toDouble(), cy.toDouble()),
    img.Point(cx.toDouble(), (cy + 4).toDouble()),
    img.Point((cx - 4).toDouble(), cy.toDouble()),
  ], color: _c(accentColor));
}

img.Image _rosetteCornerPaper(int paperTop, int paperBottom, int lineColor, int accentColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const inset = 28;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, lineColor, 1.0);
  _rosette(im, inset, inset, lineColor, accentColor);
  _rosette(im, _w - inset, inset, lineColor, accentColor);
  _rosette(im, inset, _h - inset, lineColor, accentColor);
  _rosette(im, _w - inset, _h - inset, lineColor, accentColor);
  return im;
}

/// An asymmetric modern layout — a bold solid accent bar down the left
/// edge (like a report cover) plus a thin hairline on the other three
/// sides, instead of a symmetric all-around frame.
img.Image _modernLedgerPaper(int paperTop, int paperBottom, int lineColor, int barColor) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const inset = 18;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, lineColor, 0.7);
  img.fillRect(im, x1: 0, y1: 0, x2: 13, y2: _h - 1, color: _c(barColor));
  return im;
}

void _diamond(img.Image im, int cx, int cy, int size, int color, {bool fill = true}) {
  final verts = [
    img.Point(cx.toDouble(), (cy - size).toDouble()),
    img.Point((cx + size).toDouble(), cy.toDouble()),
    img.Point(cx.toDouble(), (cy + size).toDouble()),
    img.Point((cx - size).toDouble(), cy.toDouble()),
  ];
  if (fill) {
    img.fillPolygon(im, vertices: verts, color: _c(color));
    return;
  }
  img.drawLine(im, x1: cx, y1: cy - size, x2: cx + size, y2: cy, color: _c(color), antialias: true);
  img.drawLine(im, x1: cx + size, y1: cy, x2: cx, y2: cy + size, color: _c(color), antialias: true);
  img.drawLine(im, x1: cx, y1: cy + size, x2: cx - size, y2: cy, color: _c(color), antialias: true);
  img.drawLine(im, x1: cx - size, y1: cy, x2: cx, y2: cy - size, color: _c(color), antialias: true);
}

void _certCorner(img.Image im, int x, int y, int dx, int dy, int navy, int gold) {
  img.fillPolygon(im, vertices: [
    img.Point(x.toDouble(), y.toDouble()),
    img.Point((x + dx * 28).toDouble(), y.toDouble()),
    img.Point(x.toDouble(), (y + dy * 28).toDouble()),
  ], color: _c(navy));
  _diamond(im, x + dx * 14, y + dy * 14, 6, gold);
  _diamond(im, x + dx * 14, y + dy * 14, 3, navy);
}

/// Cream certificate sheet: gold double frame and navy/gold corner marks
/// like the HATI YA NDOA sample.
img.Image _certificatePaper(
  int paperTop,
  int paperBottom,
  int gold,
  int ink, {
  int? topBar,
}) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  const inset = 18;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, gold, 2.0);
  _border(im, inset + 8, inset + 8, _w - (inset + 8) * 2, _h - (inset + 8) * 2, gold, 0.9);
  if (topBar != null) {
    img.fillRect(im, x1: inset + 10, y1: inset + 10, x2: _w - inset - 11, y2: inset + 16, color: _c(topBar));
  }
  _certCorner(im, inset, inset, 1, 1, ink, gold);
  _certCorner(im, _w - inset, inset, -1, 1, ink, gold);
  _certCorner(im, inset, _h - inset, 1, -1, ink, gold);
  _certCorner(im, _w - inset, _h - inset, -1, -1, ink, gold);
  _diamond(im, _w ~/ 2, _h ~/ 2, 46, 0xFFE8D5A0, fill: false);
  _diamond(im, _w ~/ 2, _h ~/ 2, 8, gold, fill: false);
  return im;
}

void _goldTick(img.Image im, int x, int y, int gold, {int size = 5}) {
  _diamond(im, x, y, size, gold);
}

img.Image _goldFiligreePaper() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFFBF3, 0xFFF4EAD4);
  _grainNoise(im, 0xFFFFFBF3);
  const gold = 0xFFD4AF37;
  const deep = 0xFF8B6914;
  _border(im, 10, 12, _w - 20, _h - 24, gold, 3.2);
  _border(im, 18, 20, _w - 36, _h - 40, deep, 1.2);
  _border(im, 24, 26, _w - 48, _h - 52, gold, 1.8);
  void flourish(int x, int y, int dx, int dy) {
    img.drawLine(im, x1: x, y1: y, x2: x + dx * 42, y2: y, color: _c(gold), antialias: true, thickness: 2.4);
    img.drawLine(im, x1: x, y1: y, x2: x, y2: y + dy * 42, color: _c(gold), antialias: true, thickness: 2.4);
    img.drawLine(im, x1: x + dx * 12, y1: y + dy * 12, x2: x + dx * 34, y2: y + dy * 12, color: _c(deep), antialias: true, thickness: 1.2);
    img.drawLine(im, x1: x + dx * 12, y1: y + dy * 12, x2: x + dx * 12, y2: y + dy * 34, color: _c(deep), antialias: true, thickness: 1.2);
    _diamond(im, x + dx * 16, y + dy * 16, 8, gold);
    _diamond(im, x + dx * 16, y + dy * 16, 4, deep);
  }
  flourish(24, 26, 1, 1);
  flourish(_w - 24, 26, -1, 1);
  flourish(24, _h - 26, 1, -1);
  flourish(_w - 24, _h - 26, -1, -1);
  for (var i = 56; i < _w - 56; i += 18) {
    _goldTick(im, i, 16, gold, size: 3);
    _goldTick(im, i, _h - 16, gold, size: 3);
  }
  for (var i = 56; i < _h - 56; i += 22) {
    _goldTick(im, 16, i, gold, size: 3);
    _goldTick(im, _w - 16, i, gold, size: 3);
  }
  return im;
}

img.Image _goldLaurelPaper() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFFDF8, 0xFFF6EED8);
  _grainNoise(im, 0xFFFFFDF8);
  const gold = 0xFFC9A227;
  const deep = 0xFF7A5C14;
  _border(im, 16, 18, _w - 32, _h - 36, gold, 2.4);
  _border(im, 24, 26, _w - 48, _h - 52, deep, 1.0);
  void leaf(int x, int y, int dx, int dy) {
    img.fillPolygon(im, vertices: [
      img.Point(x.toDouble(), y.toDouble()),
      img.Point((x + dx * 7).toDouble(), (y + dy * 3).toDouble()),
      img.Point((x + dx * 14).toDouble(), y.toDouble()),
      img.Point((x + dx * 7).toDouble(), (y - dy * 3).toDouble()),
    ], color: _c(gold));
  }
  for (var x = 40; x < _w - 40; x += 16) {
    leaf(x, 22, 1, 1);
    leaf(x, _h - 22, 1, 1);
  }
  for (var y = 44; y < _h - 44; y += 18) {
    leaf(22, y, 1, 1);
    leaf(_w - 22, y, -1, 1);
  }
  _diamond(im, 28, 30, 9, gold);
  _diamond(im, _w - 28, 30, 9, gold);
  _diamond(im, 28, _h - 30, 9, gold);
  _diamond(im, _w - 28, _h - 30, 9, gold);
  return im;
}

img.Image _goldCrestPaper() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFF8EC, 0xFFF0E2C0);
  _grainNoise(im, 0xFFFFF8EC);
  const gold = 0xFFD4AF37;
  const deep = 0xFF6B4F12;
  const inset = 26;
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, gold, 2.0);
  _border(im, inset + 8, inset + 8, _w - (inset + 8) * 2, _h - (inset + 8) * 2, deep, 0.9);
  void crest(int cx, int cy) {
    img.drawCircle(im, x: cx, y: cy, radius: 16, color: _c(gold), antialias: true);
    img.drawCircle(im, x: cx, y: cy, radius: 11, color: _c(deep), antialias: true);
    _diamond(im, cx, cy, 7, gold);
    _diamond(im, cx, cy, 3, deep);
  }
  crest(inset, inset);
  crest(_w - inset, inset);
  crest(inset, _h - inset);
  crest(_w - inset, _h - inset);
  _beadRow(im, 12, 12, _w - 12, 12, gold, spacing: 16, radius: 3);
  _beadRow(im, 12, _h - 12, _w - 12, _h - 12, gold, spacing: 16, radius: 3);
  _beadRow(im, 12, 12, 12, _h - 12, gold, spacing: 18, radius: 3);
  _beadRow(im, _w - 12, 12, _w - 12, _h - 12, gold, spacing: 18, radius: 3);
  return im;
}

img.Image _goldRibbonPaper() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFFEFB, 0xFFF7EFD8);
  _grainNoise(im, 0xFFFFFEFB);
  const gold = 0xFFC9A227;
  const navy = 0xFF12213D;
  _border(im, 14, 16, _w - 28, _h - 32, gold, 2.2);
  _border(im, 22, 24, _w - 44, _h - 48, gold, 1.0);
  void ribbon(int x, int y, int dx, int dy) {
    img.fillPolygon(im, vertices: [
      img.Point(x.toDouble(), y.toDouble()),
      img.Point((x + dx * 36).toDouble(), y.toDouble()),
      img.Point(x.toDouble(), (y + dy * 36).toDouble()),
    ], color: _c(navy));
    img.fillPolygon(im, vertices: [
      img.Point((x + dx * 6).toDouble(), (y + dy * 6).toDouble()),
      img.Point((x + dx * 28).toDouble(), (y + dy * 6).toDouble()),
      img.Point((x + dx * 6).toDouble(), (y + dy * 28).toDouble()),
    ], color: _c(gold));
    _diamond(im, x + dx * 14, y + dy * 14, 6, navy);
  }
  ribbon(14, 16, 1, 1);
  ribbon(_w - 14, 16, -1, 1);
  ribbon(14, _h - 16, 1, -1);
  ribbon(_w - 14, _h - 16, -1, -1);
  _diamond(im, _w ~/ 2, 20, 7, gold);
  _diamond(im, _w ~/ 2, _h - 20, 7, gold);
  _diamond(im, 18, _h ~/ 2, 7, gold);
  _diamond(im, _w - 18, _h ~/ 2, 7, gold);
  return im;
}

img.Image _goldBaroquePaper() {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFFFFF6E4, 0xFFEFE0B8);
  _grainNoise(im, 0xFFFFF6E4);
  const gold = 0xFFD4AF37;
  const deep = 0xFF8B6914;
  const band = 20;
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: band, color: _c(gold));
  img.fillRect(im, x1: 0, y1: _h - band, x2: _w - 1, y2: _h - 1, color: _c(gold));
  img.fillRect(im, x1: 0, y1: 0, x2: band, y2: _h - 1, color: _c(gold));
  img.fillRect(im, x1: _w - band, y1: 0, x2: _w - 1, y2: _h - 1, color: _c(gold));
  img.fillRect(im, x1: 5, y1: 5, x2: _w - 6, y2: 9, color: _c(deep));
  img.fillRect(im, x1: 5, y1: _h - 10, x2: _w - 6, y2: _h - 6, color: _c(deep));
  img.fillRect(im, x1: 5, y1: 5, x2: 9, y2: _h - 6, color: _c(deep));
  img.fillRect(im, x1: _w - 10, y1: 5, x2: _w - 6, y2: _h - 6, color: _c(deep));
  _border(im, band + 8, band + 8, _w - (band + 8) * 2, _h - (band + 8) * 2, deep, 1.4);
  void rosette(int cx, int cy) {
    img.fillCircle(im, x: cx, y: cy, radius: 14, color: _c(deep), antialias: true);
    img.fillCircle(im, x: cx, y: cy, radius: 10, color: _c(gold), antialias: true);
    _diamond(im, cx, cy, 6, deep);
  }
  rosette(band, band);
  rosette(_w - band, band);
  rosette(band, _h - band);
  rosette(_w - band, _h - band);
  return im;
}

void _paperWindow(img.Image im, int x, int y, int w, int h, int fill) {
  img.fillRect(im, x1: x, y1: y, x2: x + w, y2: y + h, color: _c(fill));
}

void _vGradientWindow(img.Image im, int x, int y, int w, int h, int top, int bottom) {
  for (var row = 0; row < h; row++) {
    final t = h <= 1 ? 0.0 : row / (h - 1);
    final r = ((top >> 16) & 0xFF) * (1 - t) + ((bottom >> 16) & 0xFF) * t;
    final g = ((top >> 8) & 0xFF) * (1 - t) + ((bottom >> 8) & 0xFF) * t;
    final b = (top & 0xFF) * (1 - t) + (bottom & 0xFF) * t;
    final c = img.ColorRgb8(r.round().clamp(0, 255), g.round().clamp(0, 255), b.round().clamp(0, 255));
    img.drawLine(im, x1: x, y1: y + row, x2: x + w, y2: y + row, color: c);
  }
}

void _kenteCell(img.Image im, int gx, int gy, int cell, List<int> colors, {required bool horizontal}) {
  if (horizontal) {
    for (var y = 0; y < cell && gy + y < _h; y++) {
      final c = colors[(y ~/ 5) % colors.length];
      img.drawLine(im, x1: gx, y1: gy + y, x2: math.min(gx + cell - 1, _w - 1), y2: gy + y, color: _c(c));
    }
    return;
  }
  for (var x = 0; x < cell && gx + x < _w; x++) {
    final c = colors[(x ~/ 5) % colors.length];
    img.drawLine(im, x1: gx + x, y1: gy, x2: gx + x, y2: math.min(gy + cell - 1, _h - 1), color: _c(c));
  }
}

img.Image _kentePaper(int paperTop, int paperBottom) {
  final im = img.Image(width: _w, height: _h);
  const colors = [0xFFD4AF37, 0xFF1B5E20, 0xFFB71C1C, 0xFF1A1208, 0xFFE8A317, 0xFF0D47A1];
  const cell = 30;
  for (var gy = 0; gy < _h; gy += cell) {
    for (var gx = 0; gx < _w; gx += cell) {
      _kenteCell(im, gx, gy, cell, colors, horizontal: ((gx ~/ cell) + (gy ~/ cell)).isEven);
    }
  }
  const inset = 44;
  _paperWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop);
  _vGradientWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, 0xFFD4AF37, 2.2);
  _border(im, inset + 6, inset + 6, _w - (inset + 6) * 2, _h - (inset + 6) * 2, 0xFF1A1208, 0.8);
  return im;
}

void _mudGlyph(img.Image im, int cx, int cy, int kind, int color) {
  switch (kind % 4) {
    case 0:
      _diamond(im, cx, cy, 7, color);
      _diamond(im, cx, cy, 3, color, fill: false);
    case 1:
      img.drawLine(im, x1: cx - 7, y1: cy - 7, x2: cx + 7, y2: cy + 7, color: _c(color), antialias: true, thickness: 1.6);
      img.drawLine(im, x1: cx + 7, y1: cy - 7, x2: cx - 7, y2: cy + 7, color: _c(color), antialias: true, thickness: 1.6);
    case 2:
      for (var i = -2; i <= 2; i++) {
        img.drawLine(im, x1: cx - 8, y1: cy + i * 3, x2: cx + 8, y2: cy + i * 3, color: _c(color), antialias: true, thickness: 1.2);
      }
    default:
      img.drawLine(im, x1: cx - 8, y1: cy, x2: cx + 8, y2: cy, color: _c(color), antialias: true, thickness: 1.5);
      img.drawLine(im, x1: cx, y1: cy - 8, x2: cx, y2: cy + 8, color: _c(color), antialias: true, thickness: 1.5);
      img.fillCircle(im, x: cx, y: cy, radius: 2, color: _c(color), antialias: true);
  }
}

img.Image _mudclothPaper(int paperTop, int paperBottom) {
  final im = img.Image(width: _w, height: _h);
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: _h - 1, color: _c(0xFF5A3A1C));
  const mark = 0xFFD8B25A;
  var n = 0;
  for (var y = 18; y < _h; y += 32) {
    for (var x = 18; x < _w; x += 32) {
      _mudGlyph(im, x, y, n++, mark);
    }
  }
  const inset = 46;
  _paperWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop);
  _vGradientWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, 0xFFC9A227, 1.8);
  return im;
}

void _adinkraSeal(img.Image im, int cx, int cy, int color) {
  img.drawCircle(im, x: cx, y: cy, radius: 16, color: _c(color), antialias: true);
  img.drawCircle(im, x: cx, y: cy, radius: 11, color: _c(color), antialias: true);
  _diamond(im, cx, cy, 6, color);
  img.drawLine(im, x1: cx - 14, y1: cy, x2: cx + 14, y2: cy, color: _c(color), antialias: true, thickness: 1.3);
  img.drawLine(im, x1: cx, y1: cy - 14, x2: cx, y2: cy + 14, color: _c(color), antialias: true, thickness: 1.3);
}

img.Image _adinkraPaper(int paperTop, int paperBottom) {
  final im = img.Image(width: _w, height: _h);
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: _h - 1, color: _c(0xFF2A1810));
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: 78, color: _c(0xFF4A2C14));
  img.fillRect(im, x1: 0, y1: _h - 78, x2: _w - 1, y2: _h - 1, color: _c(0xFF4A2C14));
  for (var x = 28; x < _w - 20; x += 44) {
    _adinkraSeal(im, x, 39, 0xFFD4AF37);
    _adinkraSeal(im, x, _h - 39, 0xFFD4AF37);
  }
  _adinkraSeal(im, _w ~/ 2, _h ~/ 2, 0xFF3D2416);
  img.drawCircle(im, x: _w ~/ 2, y: _h ~/ 2, radius: 52, color: _c(0xFF3D2416), antialias: true);
  const insetX = 38;
  const insetY = 92;
  _paperWindow(im, insetX, insetY, _w - insetX * 2, _h - insetY * 2, paperTop);
  _vGradientWindow(im, insetX, insetY, _w - insetX * 2, _h - insetY * 2, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, insetX, insetY, _w - insetX * 2, _h - insetY * 2, 0xFFD4AF37, 1.8);
  _border(im, insetX + 7, insetY + 7, _w - (insetX + 7) * 2, _h - (insetY + 7) * 2, 0xFF8B5A2B, 0.8);
  return im;
}

void _lotusBloom(img.Image im, int cx, int cy, int color) {
  for (var i = -2; i <= 2; i++) {
    final tipX = cx + i * 9;
    final tipY = cy - (18 - i.abs() * 3);
    img.fillPolygon(im, vertices: [
      img.Point(cx.toDouble(), cy.toDouble()),
      img.Point((tipX - 5).toDouble(), (cy - 4).toDouble()),
      img.Point(tipX.toDouble(), tipY.toDouble()),
      img.Point((tipX + 5).toDouble(), (cy - 4).toDouble()),
    ], color: _c(color));
  }
  img.fillCircle(im, x: cx, y: cy, radius: 3, color: _c(0xFFD4AF37), antialias: true);
}

img.Image _lotusPaper(int paperTop, int paperBottom) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, 0xFF0B4F4F, 0xFFD7C39A);
  for (var x = 8; x <= 34; x += 4) {
    img.drawLine(im, x1: x, y1: 0, x2: x, y2: _h - 1, color: _c(0xFF083838), antialias: true, thickness: 1.1);
    img.drawLine(im, x1: _w - 1 - x, y1: 0, x2: _w - 1 - x, y2: _h - 1, color: _c(0xFF083838), antialias: true, thickness: 1.1);
  }
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: 70, color: _c(0xFF0F5C5C));
  img.fillRect(im, x1: 0, y1: _h - 56, x2: _w - 1, y2: _h - 1, color: _c(0xFF0F5C5C));
  for (var i = 0; i < 5; i++) {
    _lotusBloom(im, 70 + i * 85, 48, 0xFFD4AF37);
  }
  const insetX = 48;
  const insetY = 78;
  _paperWindow(im, insetX, insetY, _w - insetX * 2, _h - insetY - 64, paperTop);
  _vGradientWindow(im, insetX, insetY, _w - insetX * 2, _h - insetY - 64, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, insetX, insetY, _w - insetX * 2, _h - insetY - 64, 0xFFC9A227, 1.6);
  return im;
}

img.Image _shweshwePaper(int paperTop, int paperBottom) {
  final im = img.Image(width: _w, height: _h);
  img.fillRect(im, x1: 0, y1: 0, x2: _w - 1, y2: _h - 1, color: _c(0xFF1B2A4A));
  const ivory = 0xFFE8D7B0;
  for (var y = 10; y < _h; y += 18) {
    for (var x = 10; x < _w; x += 18) {
      _diamond(im, x, y, 6, ivory, fill: false);
      img.fillCircle(im, x: x, y: y, radius: 1, color: _c(ivory), antialias: true);
    }
  }
  const inset = 40;
  _paperWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop);
  _vGradientWindow(im, inset, inset, _w - inset * 2, _h - inset * 2, paperTop, paperBottom);
  _grainNoise(im, paperTop);
  _border(im, inset, inset, _w - inset * 2, _h - inset * 2, 0xFFC45C3E, 2.0);
  _border(im, inset + 8, inset + 8, _w - (inset + 8) * 2, _h - (inset + 8) * 2, 0xFF1B2A4A, 0.8);
  return im;
}
