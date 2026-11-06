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

/// The most signs one billboard layout can hold.
const int kBbMaxSigns = 6;

/// Where one separate board stands: sideways (x), forwards (z), and which way its picture faces (yaw: 0 faces the front, pi the back, +-pi/2 the sides).
class BbPlace {
  const BbPlace(this.x, this.z, this.yaw);
  final double x, z, yaw;
}

/// A kind of billboard: how big each sign is, and how they are laid out. Either the signs are joined on one board (in [cols] across and [rows] down),
/// or each sign is a board of its own standing at its own [places]. [poleH] is how high the bottom edge of a board is above the ground.
class BbTemplate {
  const BbTemplate(this.id, this.emoji, this.name, this.blurb, this.w, this.h, this.poleH, {this.cols = 1, this.rows = 1, this.places = const [], this.reach = 0, this.shot = 1});
  final String id, emoji, name, blurb;

  /// The size of one sign and how high the bottom edge of the board is above the ground.
  final double w, h, poleH;

  /// How many signs across and how many down, when they are joined on one board.
  final int cols, rows;

  /// For separate boards: where each one stands. Empty means one joined board.
  final List<BbPlace> places;

  /// How far the drone must stay from the middle at least (for a board with a big building round it), and how wide the drone's circles are as a share of the layout.
  final double reach, shot;

  int get signs => places.isEmpty ? cols * rows : places.length;

  /// The edges of everything the board stands on, as left, right, back, front.
  (double, double, double, double) get _bounds {
    if (places.isEmpty) return (-tw / 2, tw / 2, -12, 0);
    var x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (final p in places) {
      for (final sx in [-w / 2, w / 2]) {
        for (final sz in [-12.0, 0.0]) {
          final q = rotY(V3(sx, 0, sz), p.yaw);
          x0 = math.min(x0, q.x + p.x);
          x1 = math.max(x1, q.x + p.x);
          z0 = math.min(z0, q.z + p.z);
          z1 = math.max(z1, q.z + p.z);
        }
      }
    }
    return (x0, x1, z0, z1);
  }

  /// The size of the whole layout, all signs together, and its middle.
  double get tw => places.isEmpty ? cols * w + (cols - 1) * kBbGap : _bounds.$2 - _bounds.$1;
  double get th => places.isEmpty ? rows * h + (rows - 1) * kBbGap : h;
  double get depth => places.isEmpty ? 12 : _bounds.$4 - _bounds.$3;
  double get cx => places.isEmpty ? 0 : (_bounds.$1 + _bounds.$2) / 2;
  double get cz => places.isEmpty ? 0 : (_bounds.$3 + _bounds.$4) / 2;

  /// How far the drone stays from the middle: it grows with the biggest side.
  double get span => math.max(math.max(tw, depth), math.max(th * 1.3, reach)) * shot;
}

const List<BbTemplate> kBbTemplates = [
  BbTemplate('highway', '🛣️', 'Highway board', 'Huge and wide, on two thick poles, with a walkway under it', 420, 170, 150),
  BbTemplate('tower', '🗼', 'Tall tower sign', 'A big sign high up on one very thick pole', 400, 210, 270),
  BbTemplate('neon', '🌃', 'Neon board', 'A big black board with a glowing neon edge', 380, 190, 120),
  BbTemplate('roof', '🏠', 'Rooftop board', 'A big house with big TVs, the NGMY carpet on its back, and a huge board on its roof', 460, 180, 208, reach: 760),
  BbTemplate('screen', '📺', 'Big screen', 'A giant TV screen on a stand', 440, 250, 60),
  BbTemplate('gate', '🚪', 'Town gate', 'A huge arch with the board across it', 600, 200, 200),
  BbTemplate('duo', '🪧', 'Two signs on one board', 'Two big signs joined on one board: you choose what each says', 320, 160, 150, cols: 2),
  BbTemplate('long3', '🎞️', 'Three signs on one long board', 'Three big signs joined on one long board', 300, 150, 160, cols: 3),
  BbTemplate('line3', '↔️', 'Three in a row', 'Three separate boards standing in one straight line', 300, 150, 150, places: [BbPlace(-460, 0, 0), BbPlace(0, 0, 0), BbPlace(460, 0, 0)], shot: 0.6),
  BbTemplate('lines6', '🛤️', 'Two lines of three', 'Six separate boards: one straight line of three facing front, another line of three behind it facing back', 280, 140, 140,
      places: [BbPlace(-440, 160, 0), BbPlace(0, 160, 0), BbPlace(440, 160, 0), BbPlace(-440, -380, math.pi), BbPlace(0, -380, math.pi), BbPlace(440, -380, math.pi)], shot: 0.6),
  BbTemplate('scatter', '🌐', 'Billboard park', 'Four separate boards: one at the front, one at the back and one on each side, all facing out', 320, 160, 150,
      places: [BbPlace(0, 300, 0), BbPlace(0, -300, math.pi), BbPlace(-560, 0, -math.pi / 2), BbPlace(560, 0, math.pi / 2)], shot: 0.6),
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

/// Where sign [i] is on its own board: its left and right edges and its top and bottom edges. On a joined board the signs sit in a grid;
/// on a board of its own the sign fills the board.
(double x0, double x1, double yTop, double yBot) billboardSignRect(BbTemplate tp, int i) {
  if (tp.places.isNotEmpty) return (-tp.w / 2, tp.w / 2, tp.poleH + tp.h, tp.poleH);
  final r = i ~/ tp.cols, c = i % tp.cols;
  final x0 = -tp.tw / 2 + c * (tp.w + kBbGap);
  final yTop = tp.poleH + tp.th - r * (tp.h + kBbGap);
  return (x0, x0 + tp.w, yTop, yTop - tp.h);
}

/// A big TV for the walls of the house: the NGMY logo on blue, or an NGMY ad.
void _paintTv(Canvas c, Size s, double t, int k) {
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..color = const Color(0xFF05070D));
  final inner = r.deflate(s.shortestSide * 0.06);
  c.save();
  c.clipRect(inner);
  c.translate(inner.left, inner.top);
  final sz = inner.size;
  if (k.isEven) {
    c.drawRect(Offset.zero & sz, Paint()..shader = const LinearGradient(colors: [Color(0xFF0B1F4B), Color(0xFF1E4FA3)]).createShader(Offset.zero & sz));
    final m = sz.height * 0.82;
    c.save();
    c.translate((sz.width - m) / 2, (sz.height - m) / 2);
    paintNgmyMedallion(c, Size(m, m), t);
    c.restore();
  } else {
    paintCityAd(c, sz, t, k);
  }
  c.restore();
}

void _paintDoor(Canvas c, Size s, double t) {
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..color = const Color(0xFF7C4A2D));
  final panel = Paint()..color = const Color(0xFF5E3920);
  c.drawRect(Rect.fromLTWH(s.width * 0.12, s.height * 0.07, s.width * 0.76, s.height * 0.38), panel);
  c.drawRect(Rect.fromLTWH(s.width * 0.12, s.height * 0.52, s.width * 0.76, s.height * 0.4), panel);
  c.drawCircle(Offset(s.width * 0.82, s.height * 0.5), s.width * 0.05, Paint()..color = const Color(0xFFF5C14B));
}

/// The scene: the ground, a road, trees and lamps, and the billboard layout of the chosen kind, with the signs on both sides of every board.
/// The poles and braces always stop below or behind the board, so nothing ever pokes through a sign.
Scene3D buildBillboardScene(BbTemplate tp, BbContent content) {
  final b = MeshBuilder();
  const grass = Color(0xFF55A055), road = Color(0xFF3F4450), line = Color(0xFFF3C94A), steel = Color(0xFF4B5563), dark = Color(0xFF111827);
  const up = V3(0, 1, 0);
  b.order = 0;
  b.quad(const V3(-3000, 0, -3000), const V3(3000, 0, -3000), const V3(3000, 0, 3000), const V3(-3000, 0, 3000), grass, normal: up);
  // A road in front of the billboards, and a dashed line down it.
  b.order = 1;
  b.quad(const V3(-2200, 0.4, 560), const V3(2200, 0.4, 560), const V3(2200, 0.4, 720), const V3(-2200, 0.4, 720), road, normal: up);
  for (var x = -2100.0; x < 2100; x += 90) {
    b.quad(V3(x, 0.8, 637), V3(x + 45, 0.8, 637), V3(x + 45, 0.8, 643), V3(x, 0.8, 643), line, normal: up);
  }
  b.order = 2;
  final w = tp.w, h = tp.h, y0 = tp.poleH;
  final sep = tp.places.isNotEmpty;
  // The size of one board (all the joined signs, or the one sign of a board of its own).
  final tw = sep ? w : tp.tw, th = sep ? h : tp.th;
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
    case 'long3':
      frame = const Color(0xFFF472B6);
    case 'line3':
      frame = const Color(0xFF4ADE80);
    case 'lines6':
      frame = const Color(0xFFF8FAFC);
    case 'scatter':
      frame = const Color(0xFF22D3EE);
  }
  final pw = tp.signs > 1 ? 720.0 : 900.0, ph = pw * h / w;
  final screens = <ScreenQuad>[];
  final boards = sep ? tp.places.length : 1;
  for (var bi = 0; bi < boards; bi++) {
    final pl = sep ? tp.places[bi] : const BbPlace(0, 0, 0);
    final ids = sep ? [bi] : [for (var i = 0; i < tp.signs; i++) i];
    V3 place(V3 p) => rotY(p, pl.yaw) + V3(pl.x, 0, pl.z);
    final body = MeshBuilder()..order = 2;
    final fb = MeshBuilder()..order = 2;
    // One backing and one frame per sign (not one huge slab), so the order things are drawn in never lets a backing cover a sign beside it.
    for (final i in ids) {
      final (x0, x1, yt, yb) = billboardSignRect(tp, i);
      final cx = (x0 + x1) / 2, cy = (yt + yb) / 2;
      body.box(place(V3(cx, cy, -thick / 2 - 0.2)), V3(w + 16, h + 16, thick), tp.id == 'neon' || tp.id == 'screen' ? dark : const Color(0xFF1F2937), shine: 0.2, yaw: pl.yaw);
      const ft = 7.0;
      fb.box(place(V3(cx, yt + 3, 3)), V3(w + 14, ft, 8), frame, shine: 0.4, yaw: pl.yaw);
      fb.box(place(V3(cx, yb - 3, 3)), V3(w + 14, ft, 8), frame, shine: 0.4, yaw: pl.yaw);
      fb.box(place(V3(x0 - 3, cy, 3)), V3(ft, h + 14, 8), frame, shine: 0.4, yaw: pl.yaw);
      fb.box(place(V3(x1 + 3, cy, 3)), V3(ft, h + 14, 8), frame, shine: 0.4, yaw: pl.yaw);
    }
    b.polys.addAll(body.polys);
    b.polys.addAll(fb.polys);
    // The supports. Every pole ends at the bottom of the board and sits in line with its back, so none can come out through a sign.
    final sb = MeshBuilder()..order = 2;
    final poleR = math.max(6.0, tw * 0.018);
    final zp = -thick / 2;
    // A flat picture on a wall of the house, facing [yaw].
    void wall(V3 c, double yaw, double ww, double hh, void Function(Canvas, Size, double) paint, {double px = 260}) {
      V3 q(double x, double y) => rotY(V3(x, y, 0), yaw) + c;
      screens.add(ScreenQuad([q(-ww / 2, hh / 2), q(ww / 2, hh / 2), q(ww / 2, -hh / 2), q(-ww / 2, -hh / 2)], 0, paint, width: px, height: px * hh / ww, bias: 30, order: 2));
    }

    switch (sep ? 'sep' : tp.id) {
      case 'tower':
        sb.cyl(V3(0, 0, zp), V3(0, y0 - 7, zp), poleR * 1.9, steel, sides: 12);
        sb.cyl(V3(0, 0, zp), V3(0, 14, zp), poleR * 2.8, dark, sides: 12);
      case 'screen':
        sb.box(V3(0, 7, -10), V3(tw * 0.6, 14, 70), dark);
        sb.box(V3(0, (14 + y0 - 7) / 2, zp), V3(60, y0 - 21, 14), steel);
      case 'roof':
        // A big house: the board stands on its flat roof. Its walls carry big TVs and NGMY logos (flat pictures, so they never vanish from any side),
        // and the back wall has the NGMY hall carpet.
        const wall0 = Color(0xFFE7D8BE), trim = Color(0xFF9CA3AF);
        const hz = -150.0, hd = 270.0, hh = 200.0;
        const fz = hz + hd / 2, bz = hz - hd / 2;
        sb.box(const V3(0, hh / 2, hz), const V3(620, hh, hd), wall0, shine: 0.1, split: 3);
        sb.box(const V3(0, hh + 4, hz), const V3(640, 8, hd + 20), trim, shine: 0.15, split: 3);
        sb.box(const V3(-390, 70, hz + 30), const V3(200, 140, 200), const Color(0xFFD9C5A3), shine: 0.1, split: 2);
        sb.box(const V3(-390, 144, hz + 30), const V3(216, 8, 216), trim, split: 2);
        sb.box(const V3(230, hh + 30, hz - 60), const V3(40, 60, 40), const Color(0xFF8B5E3C));
        sb.box(const V3(0, 90, fz + 10), const V3(90, 6, 26), const Color(0xFFB91C1C));
        // The front: four big TVs up top, four below, and the door.
        var k = 0;
        for (final x in const [-230.0, -80.0, 80.0, 230.0]) {
          final n = k++;
          wall(V3(x, 140, fz + 0.8), 0, 120, 72, (c, s, t) => _paintTv(c, s, t, n), px: 300);
        }
        for (final x in const [-250.0, -130.0, 130.0, 250.0]) {
          final n = k++;
          wall(V3(x, 45, fz + 0.8), 0, 100, 60, (c, s, t) => _paintTv(c, s, t, n), px: 260);
        }
        wall(const V3(0, 40, fz + 0.8), 0, 56, 80, _paintDoor, px: 120);
        wall(const V3(-400, 80, hz + 130 + 0.8), 0, 130, 80, (c, s, t) => _paintTv(c, s, t, 8), px: 300);
        // The right side: three TVs and three NGMY logos.
        for (var j = 0; j < 3; j++) {
          final z = hz + 90 - j * 90;
          wall(V3(310.8, 140, z), math.pi / 2, 80, 64, (c, s, t) => _paintTv(c, s, t, 9 + j), px: 240);
          wall(V3(310.8, 55, z), math.pi / 2, 60, 60, paintNgmyMedallion, px: 200);
        }
        // The left side, on the low wing.
        for (var j = 0; j < 2; j++) {
          final z = hz + 30 + 55 - j * 110;
          wall(V3(-490.8, 95, z), -math.pi / 2, 90, 60, (c, s, t) => _paintTv(c, s, t, 12 + j), px: 240);
          wall(V3(-490.8, 40, z), -math.pi / 2, 50, 50, paintNgmyMedallion, px: 180);
        }
        // The back: the NGMY hall carpet.
        wall(V3(0, 100, bz - 0.8), math.pi, 580, 170, paintNgmyCarpet, px: 900);
      case 'gate':
        for (final x in const [-1.0, 1.0]) {
          sb.cyl(V3(x * (tw / 2 + 25), 0, zp), V3(x * (tw / 2 + 25), y0 + th + 26, zp), poleR * 1.6, steel, sides: 12);
        }
        sb.box(V3(0, y0 + th + 17, zp), V3(tw + 80, 18, 22), steel, shine: 0.2);
      default:
        final px = (!sep && tp.signs > 2) ? 0.36 : 0.3;
        for (final x in const [-1.0, 1.0]) {
          sb.cyl(place(V3(x * tw * px, 0, zp)), place(V3(x * tw * px, y0 - 7, zp)), poleR, steel, sides: 10);
        }
        if (tp.id == 'highway') {
          sb.box(V3(0, y0 - 16, 14), V3(tw + 14, 3, 24), steel);
        }
    }
    b.polys.addAll(sb.polys);
    // The signs, on both sides: from behind the signs are in the same left to right order.
    for (final i in ids) {
      final (x0, x1, yt, yb) = billboardSignRect(tp, i);
      final signFront = content.signs[i];
      screens.add(ScreenQuad([place(V3(x0, yt, 0.8)), place(V3(x1, yt, 0.8)), place(V3(x1, yb, 0.8)), place(V3(x0, yb, 0.8))], 0, (c, size, t) => paintBillboard(c, size, t, signFront, i), width: pw, height: ph, bias: 60, order: 2));
      final j = sep ? i : (i ~/ tp.cols) * tp.cols + (tp.cols - 1 - i % tp.cols);
      final signBack = content.signs[j];
      screens.add(ScreenQuad([place(V3(x1, yt, -thick - 0.8)), place(V3(x0, yt, -thick - 0.8)), place(V3(x0, yb, -thick - 0.8)), place(V3(x1, yb, -thick - 0.8))], 0, (c, size, t) => paintBillboard(c, size, t, signBack, j), width: pw, height: ph, bias: 60, order: 2));
    }
  }
  // A few trees and lamp posts, so there is something to fly past.
  const spots = [(-700.0, 330.0), (700.0, 380.0), (-1100.0, -420.0), (1100.0, -480.0), (-1300.0, 100.0), (1350.0, 30.0), (0.0, -900.0), (-1500.0, -300.0), (1550.0, -200.0)];
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
  return Scene3D(b.polys, screens: screens, farMin: 6000);
}

/// A point of the drone shot: the angle round the board (0 is straight in front), how far away, how high above the middle of the board,
/// how far it has slid sideways, and what it looks at (sideways and up, as a share of the board).
class _Key {
  const _Key(this.t, this.a, this.r, this.h, {this.ex = 0, this.lx = 0, this.ly = 0});
  final double t, a, r, h, ex, lx, ly;
}

/// The 30 second shot, cut like a film: each move starts slowly, whips across and settles. A bird's-eye shot dives down to a low hero angle,
/// a low slide across the face, a whip round to the left, a swoop up high, a dive down behind the board, a crane up, a low whip back to the front,
/// a push in, and a fast pull away into the sky.
const List<_Key> _keys = [
  _Key(0, 0.7, 2.2, 2.0),
  _Key(3, 0.1, 0.95, -0.42, ex: -0.3, lx: -0.2, ly: 0.05),
  _Key(6.5, 0.0, 0.9, -0.38, ex: 0.3, lx: 0.2, ly: 0.05),
  _Key(9.5, -0.9, 1.15, 0.1),
  _Key(12.5, -1.7, 1.45, 1.6),
  _Key(15.5, -2.8, 1.0, -0.35),
  _Key(18.5, -3.6, 0.9, 0.05),
  _Key(21.5, -4.6, 1.5, 1.5),
  _Key(24.5, -5.4, 0.9, -0.4),
  _Key(27.5, -6.28, 0.75, 0.05),
  _Key(30, -6.0, 2.4, 1.7),
];

/// Slow start, fast middle, soft stop: what makes a camera move look planned.
double _ease(double u) => u * u * (3 - 2 * u);

V3 _cr(V3 p0, V3 p1, V3 p2, V3 p3, double u) {
  double f(double a, double b, double c, double d) => 0.5 * ((2 * b) + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (-a + 3 * b - 3 * c + d) * u * u * u);
  return V3(f(p0.x, p1.x, p2.x, p3.x), f(p0.y, p1.y, p2.y, p3.y), f(p0.z, p1.z, p2.z, p3.z));
}

/// The Billboard park shot, planned like a film: every two seconds the drone is at one of these places looking at one of these points, and it dives low to each board, then swoops up high.
/// High wide shot, a crane down and a push in to the front board, a sweeping arc round to the right board, a long curve behind to the back board,
/// round to the left board, then up and away for the wide finish. The path is smoothed, so the drone glides and never jerks.
const List<(V3, V3)> _parkKeys = [
  (V3(1000, 900, 1500), V3(0, 200, 0)),
  (V3(300, 70, 1000), V3(0, 250, 300)),
  (V3(-200, 90, 780), V3(0, 240, 300)),
  (V3(-420, 520, 1000), V3(0, 230, 300)),
  (V3(700, 330, 900), V3(300, 230, 200)),
  (V3(1100, 80, 300), V3(560, 250, 0)),
  (V3(1080, 100, -250), V3(560, 240, -100)),
  (V3(1000, 700, -700), V3(200, 230, -300)),
  (V3(200, 90, -860), V3(0, 250, -300)),
  (V3(-300, 110, -820), V3(0, 240, -300)),
  (V3(-900, 600, -600), V3(-300, 230, -100)),
  (V3(-1100, 90, -200), V3(-560, 250, 0)),
  (V3(-1100, 120, 250), V3(-560, 240, 0)),
  (V3(-700, 520, 1000), V3(-100, 230, 100)),
  (V3(200, 170, 1300), V3(0, 230, 150)),
  (V3(1000, 900, 1500), V3(0, 200, 0)),
];

(V3 eye, V3 look) _parkShot(double secs) {
  final s = secs.clamp(0.0, kBillboardShotSecs);
  final seg = kBillboardShotSecs / (_parkKeys.length - 1);
  final i = math.min((s / seg).floor(), _parkKeys.length - 2);
  final u = _ease((s / seg - i).clamp(0.0, 1.0));
  (V3, V3) k(int n) => _parkKeys[n.clamp(0, _parkKeys.length - 1)];
  final eye = _cr(k(i - 1).$1, k(i).$1, k(i + 1).$1, k(i + 2).$1, u);
  final look = _cr(k(i - 1).$2, k(i).$2, k(i + 1).$2, k(i + 2).$2, u);
  // A slow float, like a real drone in the air.
  final sway = V3(math.sin(s * 1.3) * 3, math.sin(s * 1.9) * 2.5, math.cos(s * 1.1) * 3);
  return (V3(eye.x + sway.x, math.max(eye.y + sway.y, 18), eye.z + sway.z), look);
}

/// Where the drone is (the eye) and what it looks at, [secs] into the shot, round a board of [tp].
(V3 eye, V3 look) billboardShot(BbTemplate tp, double secs) {
  if (tp.id == 'scatter') return _parkShot(secs);
  final centre = V3(tp.cx, tp.poleH + tp.th / 2, tp.cz);
  V3 at(_Key k) => centre + V3(math.sin(k.a) * k.r * tp.span + k.ex * tp.tw, k.h * tp.th, math.cos(k.a) * k.r * tp.span);
  V3 gaze(_Key k) => centre + V3(k.lx * tp.tw, k.ly * tp.th, 0);
  final s = secs.clamp(0.0, kBillboardShotSecs);
  var i = 0;
  while (i + 2 < _keys.length && _keys[i + 1].t <= s) {
    i++;
  }
  final u = _ease(((s - _keys[i].t) / (_keys[i + 1].t - _keys[i].t)).clamp(0.0, 1.0));
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
    cam.setView(target: V3(t.cx, t.poleH + t.th / 2, t.cz), dist: t.span * 1.9, yaw: 0.45, pitch: 0.22);
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
