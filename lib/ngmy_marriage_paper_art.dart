import 'dart:convert';
import 'dart:math' as math;

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
}

final _paperCache = <NgmyMarriagePaperStyle, String>{};

String ngmyMarriagePaperDataUrl(NgmyMarriagePaperStyle style) {
  return _paperCache.putIfAbsent(style, () {
    final bytes = img.encodePng(_renderPaper(style));
    return 'data:image/png;base64,${base64Encode(bytes)}';
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
