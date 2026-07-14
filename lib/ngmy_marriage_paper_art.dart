import 'dart:convert';
import 'dart:math' as math;

import 'package:image/image.dart' as img;

/// Soft, calm paper backgrounds for Marriage Agreement templates (portrait 9:16).
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

void ngmyClearMarriagePaperCache() => _paperCache.clear();

img.Color _c(int argb) => img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, 255);

const int _w = 480;
const int _h = 854;

img.Image _renderPaper(NgmyMarriagePaperStyle style) {
  switch (style) {
    case NgmyMarriagePaperStyle.congoHeritage:
      return _cleanPaper(0xFFF7F3EA, 0xFFEDE6D8, 0xFF8B7355);
    case NgmyMarriagePaperStyle.classicParchment:
      return _cleanPaper(0xFFFFFCF5, 0xFFF6EFE3, 0xFFB8A58A);
    case NgmyMarriagePaperStyle.officialCream:
      return _cleanPaper(0xFFFFFFF9, 0xFFF8F5EE, 0xFF4A4A4A);
    case NgmyMarriagePaperStyle.ceremonialDiamond:
      return _cleanPaper(0xFFF9F6F1, 0xFFF0EBE3, 0xFF6B5E4E);
    case NgmyMarriagePaperStyle.forestGold:
      return _cleanPaper(0xFFF5F7F3, 0xFFE8EEE6, 0xFF5A6B55);
    case NgmyMarriagePaperStyle.ivoryElegance:
      return _cleanPaper(0xFFFFFDF8, 0xFFF8F1E8, 0xFFA0896B);
    case NgmyMarriagePaperStyle.crimsonTradition:
      return _cleanPaper(0xFFFBF7F6, 0xFFF3EBEA, 0xFF7A5555);
    case NgmyMarriagePaperStyle.goldenFrame:
      return _cleanPaper(0xFFFFFBF2, 0xFFF5ECD8, 0xFFA6843A);
    case NgmyMarriagePaperStyle.unityHands:
      return _cleanPaper(0xFFF8F5EF, 0xFFEDE7DB, 0xFF6E6254);
    case NgmyMarriagePaperStyle.ngmyOfficial:
      return _cleanPaper(0xFFFFFFFE, 0xFFF4F4F2, 0xFF2C2C2C);
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

void _border(img.Image im, int x, int y, int w, int h, int color, double t) {
  final c = _c(color);
  img.drawLine(im, x1: x, y1: y, x2: x + w, y2: y, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y + h, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y, x2: x, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x + w, y1: y, x2: x + w, y2: y + h, color: c, antialias: true, thickness: t);
}

img.Image _cleanPaper(int top, int bottom, int frame) {
  final im = img.Image(width: _w, height: _h);
  _vGradient(im, top, bottom);
  final rng = math.Random(top ^ bottom);
  for (var i = 0; i < 900; i++) {
    final x = rng.nextInt(_w);
    final y = rng.nextInt(_h);
    final p = im.getPixel(x, y);
    im.setPixelRgba(
      x,
      y,
      (p.r.toInt() - 3).clamp(0, 255),
      (p.g.toInt() - 3).clamp(0, 255),
      (p.b.toInt() - 2).clamp(0, 255),
      255,
    );
  }
  _border(im, 22, 28, _w - 44, _h - 56, frame, 1.6);
  _border(im, 28, 34, _w - 56, _h - 68, frame, 0.7);
  return im;
}
