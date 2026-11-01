import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';
import 'ngmy_construction_homescene.dart';
import 'ngmy_frame_loop.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BILLBOARD STUDIO: one big billboard on its own (with one, two, three or four signs on it), a 30 second drone shot round it,
// and a way to put your own logo, picture and words on each sign. By default every sign plays the NGMY logo, words and ads.
// Anything you change is kept on this device.
// ═════════════════════════════════════════════════════════════════════════════

/// How long the drone shot lasts, in seconds.
const double kBillboardShotSecs = 30;

/// The space between two signs on the same billboard.
const double kBbGap = 16;

/// The most signs one billboard can hold.
const int kBbMaxSigns = 4;

/// A kind of billboard: how big each sign is, how many there are in a row and in a column, and how high the bottom stands.
class BbTemplate {
  const BbTemplate(this.id, this.emoji, this.name, this.blurb, this.w, this.h, this.poleH, {this.cols = 1, this.rows = 1});
  final String id, emoji, name, blurb;

  /// The size of one sign and how high the bottom edge of the board is above the ground.
  final double w, h, poleH;

  /// How many signs across and how many down.
  final int cols, rows;

  int get signs => cols * rows;

  /// The size of the whole board, all signs together.
  double get tw => cols * w + (cols - 1) * kBbGap;
  double get th => rows * h + (rows - 1) * kBbGap;

  /// How far the drone stays from the board: it grows with the biggest side.
  double get span => math.max(tw, th * 1.3);
}

const List<BbTemplate> kBbTemplates = [
  BbTemplate('highway', '🛣️', 'Highway board', 'Huge and wide, on two thick poles, with a walkway under it', 420, 170, 150),
  BbTemplate('tower', '🗼', 'Tall tower sign', 'A big sign high up on one very thick pole', 400, 210, 270),
  BbTemplate('neon', '🌃', 'Neon board', 'A big black board with a glowing neon edge', 380, 190, 120),
  BbTemplate('roof', '🏠', 'Rooftop board', 'A big house with a huge board standing on its roof', 460, 180, 208),
  BbTemplate('screen', '📺', 'Big screen', 'A giant TV screen on a stand', 440, 250, 60),
  BbTemplate('gate', '🚪', 'Town gate', 'A huge arch with the board across it', 600, 200, 200),
  BbTemplate('duo', '🪧', 'Two signs side by side', 'Two big signs on one board: you choose what each says', 320, 160, 150, cols: 2),
  BbTemplate('trio', '🎞️', 'Three in a row', 'Three signs in a row on one long board', 300, 150, 160, cols: 3),
  BbTemplate('stack', '🏗️', 'Tower of three', 'Three signs stacked up one pole like a tower', 320, 140, 230, rows: 3),
  BbTemplate('quad', '🔲', 'Four-sign wall', 'Four signs, two on top and two below, on a giant frame', 300, 150, 170, cols: 2, rows: 2),
];

/// The colours a custom sign can have: the two background colours and the colour of the words.
class BbScheme {
  const BbScheme(this.name, this.a, this.b, this.text, this.accent);
  final String name;
  final Color a, b, text, accent;
}

const List<BbScheme> kBbSchemes = [
  BbScheme('NGMY navy', Color(0xFF0B1F4B), Color(0xFF1E4FA3), Colors.white, Color(0xFFF5C14B)),
  BbScheme('Purple', Color(0xFF5B21B6), Color(0xFFDB2777), Colors.white, Color(0xFFFDE68A)),
  BbScheme('Green', Color(0xFF065F46), Color(0xFF14B8A6), Colors.white, Color(0xFFFEF08A)),
  BbScheme('Sunset', Color(0xFFB91C1C), Color(0xFFF59E0B), Colors.white, Color(0xFFFFF7ED)),
  BbScheme('Night', Color(0xFF0F172A), Color(0xFF334155), Color(0xFF67E8F9), Color(0xFFF472B6)),
  BbScheme('Light', Color(0xFFFFFFFF), Color(0xFFDBEAFE), Color(0xFF0B1F4B), Color(0xFFD97706)),
];

/// What one sign says. Until something is changed it is the NGMY default: the NGMY logo, words and ads.
class BbSign {
  static const String defHeadline = 'NEW GLOBAL MOVEMENT FOR YOUTH';
  static const String defSubtitle = 'Videos, slides, blogs and books.';
  static const String defFooter = 'ngmy.org';

  /// True while the sign plays the NGMY default (the logo, the words and the NGMY ads one after another).
  bool useDefault = true;
  String headline = defHeadline, subtitle = defSubtitle, footer = defFooter;
  int scheme = 0;
  Uint8List? logoBytes, picBytes;
  ui.Image? logo, pic;

  void resetToNgmy() {
    useDefault = true;
    headline = defHeadline;
    subtitle = defSubtitle;
    footer = defFooter;
    scheme = 0;
    logoBytes = null;
    picBytes = null;
    logo = null;
    pic = null;
  }

  Map<String, dynamic> toJson() => {
        'custom': !useDefault,
        'headline': headline,
        'subtitle': subtitle,
        'footer': footer,
        'scheme': scheme,
        if (logoBytes != null) 'logo': base64Encode(logoBytes!),
        if (picBytes != null) 'pic': base64Encode(picBytes!),
      };

  void fromJson(Map<String, dynamic> j) {
    useDefault = j['custom'] != true;
    headline = (j['headline'] as String?) ?? defHeadline;
    subtitle = (j['subtitle'] as String?) ?? defSubtitle;
    footer = (j['footer'] as String?) ?? defFooter;
    scheme = ((j['scheme'] as num?)?.toInt() ?? 0).clamp(0, kBbSchemes.length - 1);
    logoBytes = j['logo'] is String ? base64Decode(j['logo'] as String) : null;
    picBytes = j['pic'] is String ? base64Decode(j['pic'] as String) : null;
  }
}

/// The whole billboard: which kind it is and what each of its signs says.
class BbContent {
  BbContent();

  String template = 'highway';
  final List<BbSign> signs = List.generate(kBbMaxSigns, (_) => BbSign());

  void resetAll() {
    for (final s in signs) {
      s.resetToNgmy();
    }
  }

  Map<String, dynamic> toJson() => {'template': template, 'signs': [for (final s in signs) s.toJson()]};

  void fromJson(Map<String, dynamic> j) {
    template = kBbTemplates.any((t) => t.id == j['template']) ? j['template'] as String : 'highway';
    final list = j['signs'];
    if (list is List) {
      for (var i = 0; i < kBbMaxSigns && i < list.length; i++) {
        if (list[i] is Map) signs[i].fromJson(Map<String, dynamic>.from(list[i] as Map));
      }
    } else {
      // The first version saved one sign.
      signs[0].fromJson(j);
    }
  }
}

Future<ui.Image?> _decode(Uint8List? bytes) async {
  if (bytes == null) return null;
  try {
    final codec = await ui.instantiateImageCodec(bytes);
    return (await codec.getNextFrame()).image;
  } catch (_) {
    return null;
  }
}

/// Paints what is on sign number [index] at moment [t]: the NGMY default ads, or the person's own logo, picture and words.
void paintBillboard(Canvas c, Size s, double t, BbSign b, [int index = 0]) {
  if (b.useDefault) {
    if (index == 0) {
      // The NGMY poster first (the logo and the words), then the NGMY ads, one after another.
      final k = (t / 8).floor();
      paintCityAd(c, s, t, k % 2 == 0 ? 0 : 1 + (k ~/ 2));
    } else {
      // The other signs show other NGMY ads, so no two next to each other are the same.
      paintCityAd(c, s, t, index + 1 + (t / 8).floor());
    }
    return;
  }
  final sc = kBbSchemes[b.scheme];
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [sc.a, sc.b]).createShader(r));
  c.drawRect(
      r.deflate(s.height * 0.04),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = s.height * 0.025
        ..color = sc.accent);
  final pad = s.height * 0.1;
  var textLeft = pad;
  final pic = b.pic;
  if (pic != null) {
    // The picture fills the left part, cut to fit (like a photo on a poster).
    final box = Rect.fromLTWH(pad, pad, s.width * 0.4, s.height - pad * 2);
    final k = math.max(box.width / pic.width, box.height / pic.height);
    final src = Rect.fromCenter(center: Offset(pic.width / 2, pic.height / 2), width: box.width / k, height: box.height / k);
    c.save();
    c.clipRRect(RRect.fromRectAndRadius(box, Radius.circular(s.height * 0.05)));
    c.drawImageRect(pic, src, box, Paint()..filterQuality = FilterQuality.medium);
    c.restore();
    textLeft = box.right + pad * 0.8;
  }
  // The logo: the person's own, or the NGMY logo.
  final logo = b.logo ?? NgmyLogo.image;
  final logoBox = Rect.fromLTWH(textLeft, pad, s.height * 0.3, s.height * 0.3);
  c.drawCircle(logoBox.center, logoBox.width / 2, Paint()..color = const Color(0xFFFDFCF7));
  if (logo != null) {
    final k = math.min(logoBox.width * 0.8 / logo.width, logoBox.height * 0.8 / logo.height);
    c.drawImageRect(logo, Rect.fromLTWH(0, 0, logo.width.toDouble(), logo.height.toDouble()), Rect.fromCenter(center: logoBox.center, width: logo.width * k, height: logo.height * k), Paint()..filterQuality = FilterQuality.medium);
  }
  TextPainter tp(String text, double size, Color col, double maxW, {int lines = 2, FontWeight w = FontWeight.w900}) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: size, fontWeight: w, height: 1.1)),
        textDirection: TextDirection.ltr,
        maxLines: lines,
        ellipsis: '…',
      )..layout(maxWidth: maxW);
  final maxW = s.width - textLeft - pad;
  final head = tp(b.headline, s.height * 0.17, sc.text, maxW);
  head.paint(c, Offset(textLeft, logoBox.bottom + s.height * 0.04));
  final sub = tp(b.subtitle, s.height * 0.09, sc.accent, maxW, w: FontWeight.w700);
  sub.paint(c, Offset(textLeft, logoBox.bottom + s.height * 0.06 + head.height));
  final foot = tp(b.footer, s.height * 0.08, sc.text.withValues(alpha: 0.85), maxW, lines: 1, w: FontWeight.w800);
  foot.paint(c, Offset(s.width - pad - foot.width, s.height - pad - foot.height));
  // A shine that sweeps across.
  final x = ((t * 0.35) % 1.6 - 0.3) * s.width;
  c.save();
  c.clipRect(r);
  c.drawRect(Rect.fromLTWH(x, 0, s.width * 0.1, s.height), Paint()..color = Colors.white.withValues(alpha: 0.1));
  c.restore();
}

/// Where sign [i] is on the board of [tp]: its left and right edges and its top and bottom edges.
(double x0, double x1, double yTop, double yBot) billboardSignRect(BbTemplate tp, int i) {
  final r = i ~/ tp.cols, c = i % tp.cols;
  final x0 = -tp.tw / 2 + c * (tp.w + kBbGap);
  final yTop = tp.poleH + tp.th - r * (tp.h + kBbGap);
  return (x0, x0 + tp.w, yTop, yTop - tp.h);
}

/// The scene: the ground, a road, trees and lamps, and the billboard of the chosen kind with its signs on both sides.
/// The poles and braces always stop below or behind the board, so nothing ever pokes through a sign.
Scene3D buildBillboardScene(BbTemplate tp, BbContent content) {
  final b = MeshBuilder();
  const grass = Color(0xFF55A055), road = Color(0xFF3F4450), line = Color(0xFFF3C94A), steel = Color(0xFF4B5563), dark = Color(0xFF111827);
  const up = V3(0, 1, 0);
  b.order = 0;
  b.quad(const V3(-3000, 0, -3000), const V3(3000, 0, -3000), const V3(3000, 0, 3000), const V3(-3000, 0, 3000), grass, normal: up);
  // A road in front of the billboard, and a dashed line down it.
  b.order = 1;
  b.quad(const V3(-2200, 0.4, 560), const V3(2200, 0.4, 560), const V3(2200, 0.4, 720), const V3(-2200, 0.4, 720), road, normal: up);
  for (var x = -2100.0; x < 2100; x += 90) {
    b.quad(V3(x, 0.8, 637), V3(x + 45, 0.8, 637), V3(x + 45, 0.8, 643), V3(x, 0.8, 643), line, normal: up);
  }
  b.order = 2;
  final w = tp.w, h = tp.h, y0 = tp.poleH, tw = tp.tw, th = tp.th;
  // The board itself: a thick back, and a frame round each sign.
  Color frame = const Color(0xFFF5C14B);
  var thick = 12.0;
  switch (tp.id) {
    case 'tower':
      frame = const Color(0xFFF8FAFC);
    case 'neon':
      frame = const Color(0xFF22D3EE);
    case 'screen':
      frame = dark;
      thick = 6;
    case 'roof':
      frame = const Color(0xFFEF4444);
    case 'gate':
      frame = const Color(0xFF1E3A8A);
    case 'duo':
      frame = const Color(0xFF22D3EE);
    case 'trio':
      frame = const Color(0xFFF472B6);
    case 'stack':
      frame = const Color(0xFF4ADE80);
    case 'quad':
      frame = const Color(0xFFF8FAFC);
  }
  final body = MeshBuilder()..order = 2;
  // One backing per sign (not one huge slab), so the order things are drawn in never lets a backing cover a sign beside it.
  for (var i = 0; i < tp.signs; i++) {
    final (x0, x1, yt, yb) = billboardSignRect(tp, i);
    body.box(V3((x0 + x1) / 2, (yt + yb) / 2, -thick / 2 - 0.2), V3(w + 16, h + 16, thick), tp.id == 'neon' || tp.id == 'screen' ? dark : const Color(0xFF1F2937), shine: 0.2);
  }
  b.polys.addAll(body.polys);
  final fb = MeshBuilder()..order = 2;
  const ft = 7.0;
  for (var i = 0; i < tp.signs; i++) {
    final (x0, x1, yt, yb) = billboardSignRect(tp, i);
    final cx = (x0 + x1) / 2, cy = (yt + yb) / 2;
    fb.box(V3(cx, yt + 3, 3), V3(w + 14, ft, 8), frame, shine: 0.4);
    fb.box(V3(cx, yb - 3, 3), V3(w + 14, ft, 8), frame, shine: 0.4);
    fb.box(V3(x0 - 3, cy, 3), V3(ft, h + 14, 8), frame, shine: 0.4);
    fb.box(V3(x1 + 3, cy, 3), V3(ft, h + 14, 8), frame, shine: 0.4);
  }
  b.polys.addAll(fb.polys);
  // The supports. Every pole ends at the bottom of the board and sits in line with its back, so none can come out through a sign.
  final sb = MeshBuilder()..order = 2;
  final poleR = math.max(6.0, tw * 0.018);
  final zp = -thick / 2;
  switch (tp.id) {
    case 'tower':
    case 'stack':
      sb.cyl(V3(0, 0, zp), V3(0, y0 - 7, zp), poleR * 1.9, steel, sides: 12);
      sb.cyl(V3(0, 0, zp), V3(0, 14, zp), poleR * 2.8, dark, sides: 12);
    case 'screen':
      sb.box(V3(0, 7, -10), V3(tw * 0.6, 14, 70), dark);
      sb.box(V3(0, (14 + y0 - 7) / 2, zp), V3(60, y0 - 21, 14), steel);
    case 'roof':
      // A big house: the board stands on its flat roof and is held by posts behind it.
      const wall = Color(0xFFE7D8BE), trim = Color(0xFF9CA3AF), glass = Color(0xFF93C5FD), wood = Color(0xFF7C4A2D);
      const hz = -150.0, hd = 270.0, hh = 200.0;
      sb.box(const V3(0, hh / 2, hz), const V3(620, hh, hd), wall, shine: 0.1);
      sb.box(const V3(0, hh + 4, hz), const V3(640, 8, hd + 20), trim, shine: 0.15);
      sb.box(const V3(-390, 70, hz + 30), const V3(200, 140, 200), const Color(0xFFD9C5A3), shine: 0.1);
      sb.box(const V3(-390, 144, hz + 30), const V3(216, 8, 216), trim);
      sb.box(const V3(230, hh + 30, hz - 60), const V3(40, 60, 40), const Color(0xFF8B5E3C));
      for (final wx in const [-250.0, -150.0, -50.0, 50.0, 150.0, 250.0]) {
        sb.box(V3(wx, 140, hz + hd / 2 + 1), const V3(46, 52, 3), glass, shine: 0.5);
        if (wx.abs() > 60) sb.box(V3(wx, 60, hz + hd / 2 + 1), const V3(46, 52, 3), glass, shine: 0.5);
      }
      sb.box(V3(0, 40, hz + hd / 2 + 1), const V3(56, 80, 4), wood);
      sb.box(V3(0, 90, hz + hd / 2 + 10), const V3(90, 6, 26), const Color(0xFFB91C1C));
      sb.box(V3(-390, 60, hz + 30 + 101), const V3(60, 70, 3), glass, shine: 0.5);
      // No posts behind the board: it stands straight on the roof, so nothing can show through its picture.
    case 'gate':
      for (final x in const [-1.0, 1.0]) {
        sb.cyl(V3(x * (tw / 2 + 25), 0, zp), V3(x * (tw / 2 + 25), y0 + th + 26, zp), poleR * 1.6, steel, sides: 12);
      }
      sb.box(V3(0, y0 + th + 17, zp), V3(tw + 80, 18, 22), steel, shine: 0.2);
    default:
      final px = tp.signs > 2 ? 0.36 : 0.3;
      for (final x in const [-1.0, 1.0]) {
        sb.cyl(V3(x * tw * px, 0, zp), V3(x * tw * px, y0 - 7, zp), poleR, steel, sides: 10);
      }
      if (tp.id == 'highway') {
        sb.box(V3(0, y0 - 16, 14), V3(tw + 14, 3, 24), steel);
      }
  }
  b.polys.addAll(sb.polys);
  // A few trees and lamp posts, so there is something to fly past.
  const spots = [(-700.0, 330.0), (700.0, 380.0), (-500.0, -420.0), (580.0, -480.0), (-950.0, 100.0), (950.0, 30.0), (0.0, -800.0), (-1200.0, -300.0), (1250.0, -200.0)];
  final tb = MeshBuilder()..order = 2;
  for (final (x, z) in spots) {
    tb.cyl(V3(x, 0, z), V3(x, 55, z), 7, const Color(0xFF6B4A32), sides: 6);
    tb.ball(V3(x, 98, z), 46, const Color(0xFF3F8F4D), lat: 3, lon: 6);
  }
  for (final x in const [-400.0, 400.0, -900.0, 900.0, -1400.0, 1400.0]) {
    tb.cyl(V3(x, 0, 580), V3(x, 90, 580), 3, steel, sides: 5);
    tb.ball(V3(x, 95, 580), 8, const Color(0xFFFFF1A8), lat: 3, lon: 6);
  }
  b.polys.addAll(tb.polys);
  // The signs, on both sides: from behind the signs are in the same left to right order.
  final pw = tp.signs > 1 ? 720.0 : 900.0, ph = pw * h / w;
  final screens = <ScreenQuad>[];
  for (var i = 0; i < tp.signs; i++) {
    final (x0, x1, yt, yb) = billboardSignRect(tp, i);
    final signFront = content.signs[i];
    screens.add(ScreenQuad([V3(x0, yt, 0.8), V3(x1, yt, 0.8), V3(x1, yb, 0.8), V3(x0, yb, 0.8)], 0, (c, size, t) => paintBillboard(c, size, t, signFront, i), width: pw, height: ph, bias: 60, order: 2));
    final j = (i ~/ tp.cols) * tp.cols + (tp.cols - 1 - i % tp.cols);
    final signBack = content.signs[j];
    screens.add(ScreenQuad([V3(x1, yt, -thick - 0.8), V3(x0, yt, -thick - 0.8), V3(x0, yb, -thick - 0.8), V3(x1, yb, -thick - 0.8)], 0, (c, size, t) => paintBillboard(c, size, t, signBack, j), width: pw, height: ph, bias: 60, order: 2));
  }
  return Scene3D(b.polys, screens: screens, farMin: 6000);
}

/// A point of the drone shot: the angle round the board (0 is straight in front), how far away, how high above the middle of the board,
/// how far it has slid sideways, and what it looks at (sideways and up, as a share of the board).
class _Key {
  const _Key(this.t, this.a, this.r, this.h, {this.ex = 0, this.lx = 0, this.ly = 0});
  final double t, a, r, h, ex, lx, ly;
}

/// The 30 second shot, like a film crew's: a crane shot coming down, a push in, a slow slide along the face (looking at each sign
/// in turn), a swing round the left side, behind the board, round the right side, then up and away for the last wide shot.
const List<_Key> _keys = [
  _Key(0, 0.8, 2.4, 1.1),
  _Key(4, 0.4, 1.5, 0.4, ly: 0.05),
  _Key(7.5, 0.0, 0.95, 0.05, ex: -0.36, lx: -0.3),
  _Key(11.5, 0.0, 0.95, 0.05, ex: 0.36, lx: 0.3),
  _Key(15, -1.3, 1.3, 0.3),
  _Key(19, -2.6, 1.1, 0.1),
  _Key(22, -3.3, 1.15, 0.15),
  _Key(26, -4.8, 1.3, 0.2),
  _Key(30, -6.1, 2.5, 1.2),
];

V3 _cr(V3 p0, V3 p1, V3 p2, V3 p3, double u) {
  double f(double a, double b, double c, double d) => 0.5 * ((2 * b) + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (-a + 3 * b - 3 * c + d) * u * u * u);
  return V3(f(p0.x, p1.x, p2.x, p3.x), f(p0.y, p1.y, p2.y, p3.y), f(p0.z, p1.z, p2.z, p3.z));
}

/// Where the drone is (the eye) and what it looks at, [secs] into the shot, round a board of [tp].
(V3 eye, V3 look) billboardShot(BbTemplate tp, double secs) {
  final centre = V3(0, tp.poleH + tp.th / 2, 0);
  V3 at(_Key k) => centre + V3(math.sin(k.a) * k.r * tp.span + k.ex * tp.tw, k.h * tp.th, math.cos(k.a) * k.r * tp.span);
  V3 gaze(_Key k) => centre + V3(k.lx * tp.tw, k.ly * tp.th, 0);
  final s = secs.clamp(0.0, kBillboardShotSecs);
  var i = 0;
  while (i + 2 < _keys.length && _keys[i + 1].t <= s) {
    i++;
  }
  final u = ((s - _keys[i].t) / (_keys[i + 1].t - _keys[i].t)).clamp(0.0, 1.0);
  _Key kk(int k) => _keys[k.clamp(0, _keys.length - 1)];
  final eye = _cr(at(kk(i - 1)), at(kk(i)), at(kk(i + 1)), at(kk(i + 2)), u);
  final look = _cr(gaze(kk(i - 1)), gaze(kk(i)), gaze(kk(i + 1)), gaze(kk(i + 2)), u);
  // Never lower than a person's height off the ground.
  return (V3(eye.x, math.max(eye.y, 18), eye.z), look);
}

String billboardShotName(double secs) {
  if (secs < 4) return 'Crane shot';
  if (secs < 7.5) return 'Push in';
  if (secs < 11.5) return 'Slide along the face';
  if (secs < 17) return 'Left side';
  if (secs < 22) return 'Behind the board';
  if (secs < 27) return 'Right side';
  return 'Pull back and up';
}

const String _kPrefs = 'ngmy_billboard_studio_v1';

class NgmyBillboardStudioPage extends StatefulWidget {
  const NgmyBillboardStudioPage({super.key});

  @override
  State<NgmyBillboardStudioPage> createState() => NgmyBillboardStudioState();
}

class NgmyBillboardStudioState extends State<NgmyBillboardStudioPage> {
  final BbContent content = BbContent();
  late final Cam3 cam = Cam3(yaw: 0.5, pitch: 0.25, dist: 420, target: const V3(0, 120, 0))
    ..minDist = 30
    ..maxDist = 5000
    ..minPitch = 0.02
    ..maxPitch = 1.4
    ..setFree(true);
  late Scene3D scene;
  late final FrameLoop _loop = FrameLoop(_tick);
  final Stopwatch _clock = Stopwatch();

  /// How far into the drone shot we are, or -1 when it is not flying.
  double shotSecs = -1;
  bool get flying => shotSecs >= 0;

  /// True while everything on the screen but the billboard is hidden (tap the screen to bring the buttons back).
  bool hideUi = false;
  String note = '';

  BbTemplate get tpl => kBbTemplates.firstWhere((t) => t.id == content.template);

  @override
  void initState() {
    super.initState();
    scene = buildBillboardScene(tpl, content);
    _frameBoard();
    NgmyLogo.load().then((_) {
      if (mounted) setState(() {});
    });
    _load();
  }

  @override
  void dispose() {
    _loop.stop();
    cam.dispose();
    super.dispose();
  }

  void _frameBoard() {
    final t = tpl;
    cam.setView(target: V3(0, t.poleH + t.th / 2, 0), dist: t.span * 1.9, yaw: 0.45, pitch: 0.22);
  }

  Future<void> _load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final s = p.getString(_kPrefs);
      if (s == null) return;
      content.fromJson(jsonDecode(s) as Map<String, dynamic>);
      for (final sg in content.signs) {
        sg.logo = await _decode(sg.logoBytes);
        sg.pic = await _decode(sg.picBytes);
      }
      if (!mounted) return;
      setState(() {
        scene = buildBillboardScene(tpl, content);
        _frameBoard();
      });
    } catch (_) {}
  }

  Future<void> _save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_kPrefs, jsonEncode(content.toJson()));
    } catch (_) {}
  }

  void _tick() {
    if (!flying || !mounted) return;
    final s = _clock.elapsedMilliseconds / 1000.0;
    if (s >= kBillboardShotSecs) {
      _stopShot(done: true);
      return;
    }
    final (eye, look) = billboardShot(tpl, s);
    final v = look - eye;
    final d = math.max(8.0, v.len);
    cam.setView(target: look, dist: d, yaw: math.atan2(v.x, -v.z), pitch: math.asin((-v.y / d).clamp(-1.0, 1.0)));
    setState(() => shotSecs = s);
  }

  void startShot() {
    cam.minPitch = -1.4;
    _clock
      ..reset()
      ..start();
    setState(() {
      shotSecs = 0;
      hideUi = false;
      note = '';
    });
    _loop.start();
  }

  void _stopShot({bool done = false}) {
    _loop.stop();
    _clock.stop();
    cam.minPitch = 0.02;
    setState(() {
      shotSecs = -1;
      hideUi = false;
      note = done ? 'That was the 30 second drone shot. Press it again any time, or change the board and film it again.' : '';
    });
    _frameBoard();
  }

  @visibleForTesting
  void setTemplateForTest(String id) => _setTemplate(id);

  void _setTemplate(String id) {
    content.template = id;
    setState(() => scene = buildBillboardScene(tpl, content));
    _frameBoard();
    _save();
  }

  void _changed(int sign) {
    content.signs[sign].useDefault = false;
    setState(() {});
    _save();
  }

  Future<void> _pickImage(int sign, {required bool logo}) async {
    try {
      final f = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: logo ? 400 : 900, imageQuality: 85);
      if (f == null) return;
      final bytes = await f.readAsBytes();
      final img = await _decode(bytes);
      if (img == null) return;
      final s = content.signs[sign];
      if (logo) {
        s.logoBytes = bytes;
        s.logo = img;
      } else {
        s.picBytes = bytes;
        s.pic = img;
      }
      _changed(sign);
    } catch (_) {
      if (mounted) setState(() => note = 'That picture could not be opened.');
    }
  }

  void _templateSheet() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Choose a billboard', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 10),
            ConstrainedBox(
              constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.62),
              child: ListView(shrinkWrap: true, children: [
                for (final t in kBbTemplates)
                  GestureDetector(
                    onTap: () {
                      Navigator.pop(ctx);
                      _setTemplate(t.id);
                    },
                    child: Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: content.template == t.id ? const Color(0xFF1E3A8A) : const Color(0xFF1F2937),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: content.template == t.id ? const Color(0xFFF5C14B) : Colors.white12),
                      ),
                      child: Row(children: [
                        Text(t.emoji, style: const TextStyle(fontSize: 28)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Text(t.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                            Text(t.blurb, style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                          ]),
                        ),
                        if (t.signs > 1) Text('${t.signs} signs', style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w800, fontSize: 12)),
                        if (content.template == t.id) const Padding(padding: EdgeInsets.only(left: 6), child: Icon(Icons.check_circle_rounded, color: Color(0xFFF5C14B))),
                      ]),
                    ),
                  ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  void _editSheet() {
    var cur = 0;
    final head = TextEditingController(text: content.signs[0].headline);
    final sub = TextEditingController(text: content.signs[0].subtitle);
    final foot = TextEditingController(text: content.signs[0].footer);
    void fill() {
      final s = content.signs[cur];
      head.text = s.headline;
      sub.text = s.subtitle;
      foot.text = s.footer;
    }

    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setS) {
          final sg = content.signs[cur];
          Widget field(String label, TextEditingController c, void Function(String) on) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: TextField(
                  controller: c,
                  style: const TextStyle(color: Colors.white),
                  onChanged: (v) {
                    on(v);
                    _changed(cur);
                  },
                  decoration: InputDecoration(
                    labelText: label,
                    labelStyle: const TextStyle(color: Colors.white60),
                    filled: true,
                    fillColor: const Color(0xFF1F2937),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                  ),
                ),
              );
          Widget imgButton(String label, bool has, VoidCallback pick, VoidCallback clear) => Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Row(children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () async {
                        pick();
                        await Future<void>.delayed(const Duration(milliseconds: 400));
                        setS(() {});
                      },
                      icon: Icon(has ? Icons.check_circle_rounded : Icons.add_photo_alternate_rounded, color: has ? const Color(0xFF4ADE80) : Colors.white70),
                      label: Text(label, style: const TextStyle(color: Colors.white)),
                    ),
                  ),
                  if (has)
                    IconButton(
                        onPressed: () {
                          clear();
                          setS(() {});
                        },
                        icon: const Icon(Icons.close_rounded, color: Colors.white54)),
                ]),
              );
          return Padding(
            padding: EdgeInsets.only(left: 16, right: 16, top: 16, bottom: MediaQuery.of(ctx).viewInsets.bottom + 16),
            child: SingleChildScrollView(
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Edit your billboard', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
                const SizedBox(height: 4),
                Text(sg.useDefault ? 'Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.' : 'This sign is your own.', style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                if (tpl.signs > 1) ...[
                  const SizedBox(height: 10),
                  const Text('Which sign?', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                  const SizedBox(height: 6),
                  Wrap(spacing: 8, runSpacing: 8, children: [
                    for (var i = 0; i < tpl.signs; i++)
                      GestureDetector(
                        onTap: () {
                          cur = i;
                          fill();
                          setS(() {});
                        },
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                          decoration: BoxDecoration(
                            color: cur == i ? const Color(0xFF1E3A8A) : const Color(0xFF1F2937),
                            borderRadius: BorderRadius.circular(18),
                            border: Border.all(color: cur == i ? const Color(0xFFF5C14B) : Colors.white24, width: 2),
                          ),
                          child: Text('Sign ${i + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                        ),
                      ),
                  ]),
                ],
                const SizedBox(height: 12),
                field('Big words', head, (v) => sg.headline = v),
                field('Smaller words', sub, (v) => sg.subtitle = v),
                field('Bottom line (web address)', foot, (v) => sg.footer = v),
                imgButton(sg.logoBytes != null ? 'Your logo is on (change)' : 'Put your own logo (default: NGMY logo)', sg.logoBytes != null, () => _pickImage(cur, logo: true), () {
                  sg.logoBytes = null;
                  sg.logo = null;
                  _changed(cur);
                }),
                imgButton(sg.picBytes != null ? 'Your picture is on (change)' : 'Put your own picture', sg.picBytes != null, () => _pickImage(cur, logo: false), () {
                  sg.picBytes = null;
                  sg.pic = null;
                  _changed(cur);
                }),
                const SizedBox(height: 4),
                const Text('Colours', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                const SizedBox(height: 6),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  for (var i = 0; i < kBbSchemes.length; i++)
                    GestureDetector(
                      onTap: () {
                        sg.scheme = i;
                        _changed(cur);
                        setS(() {});
                      },
                      child: Container(
                        width: 74,
                        padding: const EdgeInsets.symmetric(vertical: 8),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [kBbSchemes[i].a, kBbSchemes[i].b]),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: sg.scheme == i && !sg.useDefault ? const Color(0xFFF5C14B) : Colors.white24, width: 2),
                        ),
                        child: Center(child: Text(kBbSchemes[i].name, style: TextStyle(color: kBbSchemes[i].text, fontSize: 11, fontWeight: FontWeight.w800))),
                      ),
                    ),
                ]),
                const SizedBox(height: 14),
                Row(children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () {
                        if (tpl.signs > 1) {
                          content.resetAll();
                        } else {
                          sg.resetToNgmy();
                        }
                        fill();
                        setState(() {});
                        _save();
                        setS(() {});
                      },
                      icon: const Icon(Icons.restart_alt_rounded, color: Color(0xFFF5C14B)),
                      label: Text(tpl.signs > 1 ? 'All signs back to the NGMY default' : 'Back to the NGMY default', style: const TextStyle(color: Color(0xFFF5C14B))),
                    ),
                  ),
                  const SizedBox(width: 10),
                  FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done')),
                ]),
              ]),
            ),
          );
        },
      ),
    );
  }

  Widget _pill(String label, VoidCallback onTap, {Color color = const Color(0xFF38BDF8), bool on = false}) => GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
          decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.3) : Colors.black.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(20), border: Border.all(color: color)),
          child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 13)),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final pad = MediaQuery.of(context).padding;
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(children: [
        Positioned.fill(child: Scene3DView(scene: scene, cam: cam, background: const Color(0xFF0E1218), sky: true)),
        if (!flying)
          Positioned(
            top: pad.top + 8,
            left: 8,
            right: 8,
            child: Row(children: [
              GestureDetector(
                onTap: () => Navigator.of(context).maybePop(),
                child: Container(width: 40, height: 40, decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), shape: BoxShape.circle, border: Border.all(color: Colors.white38)), child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18)),
              ),
              const SizedBox(width: 10),
              Expanded(child: Text('Billboard studio · ${tpl.name}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, shadows: [Shadow(blurRadius: 6)]))),
            ]),
          ),
        // While the drone flies and everything is hidden, a tap anywhere brings the buttons back.
        if (flying && hideUi)
          Positioned.fill(
            child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => setState(() => hideUi = false)),
          ),
        if (!(flying && hideUi))
          Positioned(
            left: 10,
            right: 10,
            bottom: pad.bottom + 12,
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              if (note.isNotEmpty && !flying)
                Container(
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: const Color(0xFF14532D).withValues(alpha: 0.95), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF4ADE80))),
                  child: Text(note, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w700)),
                ),
              Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
                if (!flying) _pill('🪧 Choose billboard', _templateSheet, color: const Color(0xFFF5C14B)),
                if (!flying) _pill('✏️ Edit', _editSheet, color: const Color(0xFF4ADE80)),
                if (flying) _pill('⏹ Stop the drone', _stopShot, color: const Color(0xFFF87171), on: true),
                if (flying) _pill('👁 Hide everything', () => setState(() => hideUi = true), color: const Color(0xFFE2E8F0)),
                if (!flying) _pill('🎬 30 second drone shot', startShot, on: true),
              ]),
            ]),
          ),
      ]),
    );
  }
}
