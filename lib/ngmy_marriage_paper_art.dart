import 'dart:convert';

import 'package:image/image.dart' as img;

/// Raster paper backgrounds for Marriage Agreement templates (portrait 9:16).
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

img.Image _renderPaper(NgmyMarriagePaperStyle style) {
  switch (style) {
    case NgmyMarriagePaperStyle.congoHeritage:
      return _heritagePaper(0xFF0A1F12, 0xFF1A3D2B, 0xFFD4AF37, tricolor: false);
    case NgmyMarriagePaperStyle.classicParchment:
      return _parchmentPaper(sideBand: true, frame: 0xFF8B4513, inner: 0xFF1D4D2B);
    case NgmyMarriagePaperStyle.officialCream:
      return _creamPaper(flagCorners: true);
    case NgmyMarriagePaperStyle.ceremonialDiamond:
      return _diamondBorderPaper();
    case NgmyMarriagePaperStyle.forestGold:
      return _heritagePaper(0xFF0F2E1A, 0xFF1D4D2B, 0xFFD4AF37, tricolor: true);
    case NgmyMarriagePaperStyle.ivoryElegance:
      return _ivoryPaper();
    case NgmyMarriagePaperStyle.crimsonTradition:
      return _parchmentPaper(sideBand: false, frame: 0xFFB22222, inner: 0xFF1D4D2B, topBand: 0xFFB22222);
    case NgmyMarriagePaperStyle.goldenFrame:
      return _goldFramePaper();
    case NgmyMarriagePaperStyle.unityHands:
      return _creamPaper(flagCorners: false, watermark: true);
    case NgmyMarriagePaperStyle.ngmyOfficial:
      return _officialPaper();
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

void _fill(img.Image im, int x, int y, int w, int h, int color) {
  img.fillRect(im, x1: x, y1: y, x2: x + w, y2: y + h, color: _c(color));
}

void _border(img.Image im, int x, int y, int w, int h, int color, int t) {
  _fill(im, x, y, w, t, color);
  _fill(im, x, y + h - t, w, t, color);
  _fill(im, x, y, t, h, color);
  _fill(im, x + w - t, y, t, h, color);
}

void _diamondStrip(img.Image im, int x, int y, int w, int h) {
  const colors = [0xFFCE1021, 0xFFF7D618, 0xFF1D4D2B, 0xFFD4AF37, 0xFF007FFF];
  final dw = (w / 16).ceil().clamp(1, w);
  for (var i = 0; i < 16; i++) {
    final c = colors[i % colors.length];
    _fill(im, x + i * dw, y, dw - 1, h, c);
  }
}

void _flagCorner(img.Image im, int x, int y) {
  _fill(im, x, y, 18, 6, 0xFF007FFF);
  _fill(im, x, y + 6, 18, 6, 0xFFF7D618);
  _fill(im, x, y + 12, 18, 6, 0xFFCE1021);
}

void _softCircle(img.Image im, int cx, int cy, int radius, int color, int alpha) {
  for (var dy = -radius; dy <= radius; dy++) {
    for (var dx = -radius; dx <= radius; dx++) {
      if (dx * dx + dy * dy <= radius * radius) {
        final px = cx + dx;
        final py = cy + dy;
        if (px >= 0 && py >= 0 && px < im.width && py < im.height) {
          im.setPixel(px, py, _c(color, alpha));
        }
      }
    }
  }
}

img.Image _heritagePaper(int bg1, int bg2, int gold, {required bool tricolor}) {
  final im = img.Image(width: 360, height: 640);
  _vGradient(im, bg2, bg1);
  if (tricolor) {
    _fill(im, 0, 0, 360, 8, 0xFF007FFF);
    _fill(im, 0, 8, 360, 8, 0xFFF7D618);
    _fill(im, 0, 16, 360, 8, 0xFFCE1021);
  }
  _border(im, 10, 26, 340, 594, gold, 3);
  _border(im, 18, 34, 324, 578, gold, 1);
  _diamondStrip(im, 0, 608, 360, 32);
  _softCircle(im, 180, 300, 70, gold, 20);
  return im;
}

img.Image _parchmentPaper({required bool sideBand, required int frame, required int inner, int? topBand}) {
  final im = img.Image(width: 360, height: 640);
  _vGradient(im, 0xFFFFFEF8, 0xFFE8D8B8);
  if (topBand != null) _fill(im, 0, 0, 360, 6, topBand);
  if (sideBand) _diamondStrip(im, 0, 0, 22, 640);
  final ox = sideBand ? 28 : 10;
  final ow = sideBand ? 322 : 340;
  _border(im, ox, 10, ow, 610, frame, 3);
  _border(im, ox + 6, 16, ow - 12, 598, inner, 1);
  _softCircle(im, 180, 280, 90, 0xFFD4AF37, 15);
  return im;
}

img.Image _creamPaper({required bool flagCorners, bool watermark = false}) {
  final im = img.Image(width: 360, height: 640);
  _vGradient(im, 0xFFFFFFFE, 0xFFF5F0E6);
  _border(im, 8, 8, 344, 624, 0xFFD4AF37, 3);
  _border(im, 14, 14, 332, 612, 0xFF1D4D2B, 1);
  if (flagCorners) {
    for (final p in [(8, 8), (334, 8), (8, 622), (334, 622)]) {
      _flagCorner(im, p.$1, p.$2);
    }
  }
  if (watermark) _softCircle(im, 180, 300, 85, 0xFF1D4D2B, 12);
  return im;
}

img.Image _diamondBorderPaper() {
  final im = _parchmentPaper(sideBand: false, frame: 0xFFD4AF37, inner: 0xFF1D4D2B);
  _diamondStrip(im, 0, 0, 360, 18);
  _diamondStrip(im, 0, 622, 360, 18);
  _diamondStrip(im, 0, 0, 18, 640);
  _diamondStrip(im, 342, 0, 18, 640);
  return im;
}

img.Image _ivoryPaper() {
  final im = img.Image(width: 360, height: 640);
  img.fill(im, color: _c(0xFFFFFAF0));
  _border(im, 20, 20, 320, 600, 0xFFB8860B, 1);
  _border(im, 26, 26, 308, 588, 0xFF1D4D2B, 1);
  return im;
}

img.Image _goldFramePaper() {
  final im = _parchmentPaper(sideBand: false, frame: 0xFFD4AF37, inner: 0xFFB8860B);
  _border(im, 4, 4, 352, 632, 0xFFD4AF37, 5);
  _border(im, 16, 16, 328, 608, 0xFFD4AF37, 1);
  return im;
}

img.Image _officialPaper() {
  final im = _creamPaper(flagCorners: false);
  _fill(im, 0, 0, 120, 10, 0xFF007FFF);
  _fill(im, 120, 0, 120, 10, 0xFFF7D618);
  _fill(im, 240, 0, 120, 10, 0xFFCE1021);
  _border(im, 8, 14, 344, 618, 0xFF007FFF, 3);
  for (var r = 34; r <= 36; r++) {
    img.drawCircle(im, x: 300, y: 580, radius: r, color: _c(0xFFCE1021));
  }
  for (var r = 28; r <= 30; r++) {
    img.drawCircle(im, x: 300, y: 580, radius: r, color: _c(0xFFD4AF37));
  }
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
