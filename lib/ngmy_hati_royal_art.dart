import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:image/image.dart' as img;

// Pictures for the royal Hati papers (the maroon band, the gold bars, the dark emerald and navy papers): the paper with
// its gold frame, a shiny gold strip that is stretched behind a bar, the maroon header band with its rows of diamonds,
// and the gold seal with its ribbon. Each picture is made once and kept.

img.Color _c(int argb) => img.ColorRgba8((argb >> 16) & 0xFF, (argb >> 8) & 0xFF, argb & 0xFF, (argb >> 24) & 0xFF);

int _mix(int a, int b, double t) {
  int ch(int s) => (((a >> s) & 0xFF) * (1 - t) + ((b >> s) & 0xFF) * t).round().clamp(0, 255);
  return (ch(24) << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0);
}

final _cache = <String, Uint8List>{};
final _urlCache = <String, String>{};

String _url(String key, img.Image Function() make) =>
    _urlCache.putIfAbsent(key, () => 'data:image/png;base64,${base64Encode(_png(key, make))}');

Uint8List _png(String key, img.Image Function() make) => _cache.putIfAbsent(key, () => img.encodePng(make()));

/// Shiny gold, top to bottom: a dark edge, a bright band, then warm gold down to a darker edge.
const List<(double, int)> kRoyalGoldStops = [
  (0.0, 0xFFA8781E),
  (0.22, 0xFFF4DC86),
  (0.42, 0xFFE2B84A),
  (0.78, 0xFFC99A2E),
  (1.0, 0xFF946815),
];

int _goldAt(double t) {
  for (var i = 1; i < kRoyalGoldStops.length; i++) {
    final (t1, c1) = kRoyalGoldStops[i];
    final (t0, c0) = kRoyalGoldStops[i - 1];
    if (t <= t1) return _mix(c0, c1, ((t - t0) / (t1 - t0)).clamp(0.0, 1.0));
  }
  return kRoyalGoldStops.last.$2;
}

/// A gold strip, stretched to fill a bar.
String ngmyRoyalGoldStripUrl() => _url('gold_strip', () {
      final im = img.Image(width: 4, height: 96, numChannels: 4);
      for (var y = 0; y < im.height; y++) {
        img.drawLine(im, x1: 0, y1: y, x2: im.width - 1, y2: y, color: _c(_goldAt(y / (im.height - 1))));
      }
      return im;
    });

/// A round gold coin for the item numbers.
String ngmyRoyalGoldCoinUrl() => _url('gold_coin', () {
      const s = 96;
      final im = img.Image(width: s, height: s, numChannels: 4);
      img.fill(im, color: img.ColorRgba8(0, 0, 0, 0));
      for (var y = 0; y < s; y++) {
        for (var x = 0; x < s; x++) {
          final dx = x - s / 2 + 0.5, dy = y - s / 2 + 0.5;
          final r = math.sqrt(dx * dx + dy * dy);
          if (r > s / 2) continue;
          final edge = (s / 2 - r).clamp(0.0, 1.0);
          final c = r > s / 2 - 5 ? _mix(0xFF8A5E12, 0xFFC99A2E, (s / 2 - r) / 5) : _goldAt(((y / s) * 0.9 + 0.05).clamp(0.0, 1.0));
          im.setPixel(x, y, _c((((edge * 255).round()) << 24) | (c & 0x00FFFFFF)));
        }
      }
      return im;
    });

/// The header band: a solid band with a row of outlined diamonds along its top and bottom.
String ngmyRoyalBandUrl(int fill, int diamond) => _url('band_${fill}_$diamond', () {
      const w = 1140, h = 196;
      final im = img.Image(width: w, height: h, numChannels: 4);
      img.fill(im, color: _c(fill));
      const step = 72.0, size = 11;
      for (final cy in [30, h - 30]) {
        for (var cx = step / 2; cx < w; cx += step) {
          _diamondOutline(im, cx.round(), cy, size, diamond, 2.4);
        }
      }
      return im;
    });

void _diamondOutline(img.Image im, int cx, int cy, int s, int color, double t) {
  final c = _c(color);
  img.drawLine(im, x1: cx, y1: cy - s, x2: cx + s, y2: cy, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: cx + s, y1: cy, x2: cx, y2: cy + s, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: cx, y1: cy + s, x2: cx - s, y2: cy, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: cx - s, y1: cy, x2: cx, y2: cy - s, color: c, antialias: true, thickness: t);
}

void _diamondFill(img.Image im, double cx, double cy, double s, int color) {
  img.fillPolygon(im,
      vertices: [img.Point(cx, cy - s), img.Point(cx + s, cy), img.Point(cx, cy + s), img.Point(cx - s, cy)], color: _c(color));
}

/// The seal: a gold medal with rings and a diamond in the middle, and (when [ribbon] is set) two ribbon tails below.
String ngmyRoyalSealUrl({required int center, int? ribbon, bool shiny = true}) =>
    _url('seal_${center}_${ribbon}_$shiny', () {
      const w = 240, h = 280;
      final im = img.Image(width: w, height: h, numChannels: 4);
      img.fill(im, color: img.ColorRgba8(0, 0, 0, 0));
      const cx = w / 2, cy = 112.0, r = 104.0;
      if (ribbon != null) {
        for (final side in [-1, 1]) {
          final x0 = cx + side * 18, x1 = cx + side * 64;
          img.fillPolygon(im, vertices: [
            img.Point(x0, cy + 40),
            img.Point(x1, cy + 50),
            img.Point(x1 + side * 6, h - 6.0),
            img.Point((x0 + x1) / 2, h - 30.0),
            img.Point(x0 - side * 4, h - 14.0),
          ], color: _c(ribbon));
        }
      }
      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          final dx = x - cx, dy = y - cy;
          final d = math.sqrt(dx * dx + dy * dy);
          if (d > r) continue;
          final a = (r - d).clamp(0.0, 1.0);
          int c;
          if (shiny) {
            c = d > r - 7 ? _mix(0xFF8A5E12, 0xFFD9AE3F, (r - d) / 7) : _goldAt(((y - (cy - r)) / (2 * r)).clamp(0.0, 1.0));
          } else {
            c = d > r - 14 ? 0xFFD9B04A : 0xFFF7E7C4;
          }
          im.setPixel(x, y, _c(((a * 255).round() << 24) | (c & 0x00FFFFFF)));
        }
      }
      final ring = shiny ? 0xFF7A5210 : 0xFFD9B04A;
      img.drawCircle(im, x: cx.round(), y: cy.round(), radius: 74, color: _c(ring), antialias: true);
      img.drawCircle(im, x: cx.round(), y: cy.round(), radius: 73, color: _c(ring), antialias: true);
      img.drawCircle(im, x: cx.round(), y: cy.round(), radius: 68, color: _c(ring), antialias: true);
      _diamondFill(im, cx, cy, 34, center);
      for (final (ox, oy) in [(0.0, -54.0), (54.0, 0.0), (0.0, 54.0), (-54.0, 0.0)]) {
        _diamondFill(im, cx + ox, cy + oy, 9, center);
      }
      return im;
    });

/// The paper itself: its colour (a little lighter at the top), a gold frame, and small gold diamonds and dots in the
/// corners. [double] draws two frame lines with rounded corners, otherwise one line.
Uint8List ngmyRoyalPaperPng({required int top, required int bottom, required int gold, bool double = true}) =>
    _png('paper_${top}_${bottom}_${gold}_$double', () {
      const w = 720, h = 1280;
      final im = img.Image(width: w, height: h);
      for (var y = 0; y < h; y++) {
        img.drawLine(im, x1: 0, y1: y, x2: w - 1, y2: y, color: _c(_mix(top, bottom, y / (h - 1))));
      }
      if (double) {
        _roundFrame(im, 14, 14, w - 28, h - 28, 34, gold, 3.2);
        _roundFrame(im, 30, 30, w - 60, h - 60, 0, gold, 1.6);
        for (final (x, y) in [(70.0, 72.0), (w - 70.0, 72.0)]) {
          _diamondFill(im, x + (x < w / 2 ? 0 : 0), y + 8, 9, gold);
        }
        for (final (x, y) in [(52.0, 100.0), (w - 52.0, 100.0), (106.0, 52.0), (w - 106.0, 52.0)]) {
          img.fillCircle(im, x: x.round(), y: y.round(), radius: 4, color: _c(gold), antialias: true);
        }
        for (final (x, y) in [(52.0, h - 96.0), (w - 52.0, h - 96.0)]) {
          img.fillCircle(im, x: x.round(), y: y.round(), radius: 4, color: _c(gold), antialias: true);
        }
        for (final x in [w / 2 - 34, w / 2, w / 2 + 34]) {
          _diamondFill(im, x, 76, x == w / 2 ? 10 : 7, gold);
        }
      } else {
        _roundFrame(im, 16, 16, w - 32, h - 32, 0, gold, 3.0);
      }
      return im;
    });

String ngmyRoyalPaperUrl({required int top, required int bottom, required int gold, bool double = true}) =>
    _urlCache.putIfAbsent('paperurl_${top}_${bottom}_${gold}_$double',
        () => 'data:image/png;base64,${base64Encode(ngmyRoyalPaperPng(top: top, bottom: bottom, gold: gold, double: double))}');

void _roundFrame(img.Image im, int x, int y, int w, int h, int r, int color, double t) {
  final c = _c(color);
  img.drawLine(im, x1: x + r, y1: y, x2: x + w - r, y2: y, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x + r, y1: y + h, x2: x + w - r, y2: y + h, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x, y1: y + r, x2: x, y2: y + h - r, color: c, antialias: true, thickness: t);
  img.drawLine(im, x1: x + w, y1: y + r, x2: x + w, y2: y + h - r, color: c, antialias: true, thickness: t);
  if (r <= 0) return;
  // The corners curve inwards (a scooped corner), like an old certificate.
  for (final (ccx, ccy, a0) in [
    (x, y, 0.0),
    (x + w, y, math.pi / 2),
    (x + w, y + h, math.pi),
    (x, y + h, 3 * math.pi / 2),
  ]) {
    const n = 18;
    for (var i = 0; i < n; i++) {
      final b0 = a0 + (math.pi / 2) * i / n, b1 = a0 + (math.pi / 2) * (i + 1) / n;
      img.drawLine(im,
          x1: (ccx + r * math.cos(b0)).round(),
          y1: (ccy + r * math.sin(b0)).round(),
          x2: (ccx + r * math.cos(b1)).round(),
          y2: (ccy + r * math.sin(b1)).round(),
          color: c,
          antialias: true,
          thickness: t);
    }
  }
}

/// A small filled diamond (for the corners of the opening paragraph and the row under the header band).
String ngmyRoyalDiamondUrl(int color) => _url('diamond_$color', () {
      const s = 64;
      final im = img.Image(width: s, height: s, numChannels: 4);
      img.fill(im, color: img.ColorRgba8(0, 0, 0, 0));
      _diamondFill(im, s / 2, s / 2, s / 2 - 2, color);
      return im;
    });
