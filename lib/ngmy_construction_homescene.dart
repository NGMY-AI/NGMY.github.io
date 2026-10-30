import 'dart:math' as math;
import 'ngmy_city_ads.dart';
import 'ngmy_city_delivery.dart';
import 'dart:ui' as ui;

import 'package:flutter/services.dart';

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_avatar_glb.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_tour.dart';
import 'ngmy_electronics_screens.dart';

// ═════════════════════════════════════════════════════════════════════════════
// One room of the house drawn in 3D, with the front wall left off so you can look in.
// Only the wiring and the plumbing can be tapped at all times. Furniture, walls, the floor, the ceiling and the
// doors can be tapped only while the matching edit button is on, so a stray tap never changes anything.
// ═════════════════════════════════════════════════════════════════════════════

const int idHFurn = 100; // + furniture number (1 to 99)
const int idHDoor = 600; // + door number
const int idHWallBack = 300, idHWallLeft = 301, idHWallRight = 302, idHFloorObj = 310, idHCeilObj = 320;
const int idHOutletA = 700, idHOutletB = 701, idHSwitch = 702, idHLight = 703;
const int idHResident = 900; // + the resident's number: a person who lives in the house
const int idHApp = 720; // + 0 or 1 (or 2 and up for added outlets): what is plugged in
const int idHWallTv = 730;
const int idHCam = 19000; // + 0 to 3: the cameras in the corners of the hall
const int idHTag = 20000; // + a furniture number: the red tag over a dark house or a street light that is out
const int idHExtra = 800; // + number: an outlet or switch the visitor added
const int idHToiletF = 710, idHSinkF = 711, idHTubF = 712, idHKSink = 713;

/// The NGMY logo picture, read once from the app so a carpet can show it.
class NgmyLogo {
  static ui.Image? image;
  static Future<void>? _loading;

  static Future<void> load() => _loading ??= () async {
        try {
          final data = await rootBundle.load('assets/images/ngmy_logo.png');
          final codec = await ui.instantiateImageCodec(data.buffer.asUint8List());
          image = (await codec.getNextFrame()).image;
        } catch (_) {
          image = null;
        }
      }();
}

/// The hall's carpet: deep blue with a gold border and the NGMY logo in a round gold frame in the middle.
void paintNgmyCarpet(Canvas c, Size s, double t) {
  final r = Offset.zero & s;
  c.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(18)), Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0B1F4B), Color(0xFF123A7A)]).createShader(r));
  final gold = Paint()
    ..style = PaintingStyle.stroke
    ..color = const Color(0xFFF5C14B)
    ..strokeWidth = s.height * 0.025;
  c.drawRRect(RRect.fromRectAndRadius(r.deflate(s.height * 0.05), Radius.circular(s.height * 0.08)), gold);
  c.drawRRect(RRect.fromRectAndRadius(r.deflate(s.height * 0.1), Radius.circular(s.height * 0.05)), gold..strokeWidth = s.height * 0.01);
  // The round frame: a gold ring round a white disc, with the logo inside it.
  final mid = Offset(s.width / 2, s.height / 2);
  final rad = s.height * 0.36;
  c.drawCircle(mid, rad * 1.1, Paint()..color = const Color(0x55000000));
  c.drawCircle(mid, rad, Paint()..color = const Color(0xFFF5C14B));
  c.drawCircle(mid, rad * 0.9, Paint()..color = const Color(0xFFFDFCF7));
  c.drawCircle(mid, rad * 0.95, Paint()
    ..style = PaintingStyle.stroke
    ..color = const Color(0xFF0B1F4B)
    ..strokeWidth = rad * 0.04);
  final img = NgmyLogo.image;
  final box = Rect.fromCenter(center: mid, width: rad * 1.5, height: rad * 1.2);
  if (img != null) {
    final k = math.min(box.width / img.width, box.height / img.height);
    final dst = Rect.fromCenter(center: box.center, width: img.width * k, height: img.height * k);
    c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), dst, Paint()..filterQuality = FilterQuality.medium);
  } else {
    final tp = TextPainter(text: TextSpan(text: 'NGMY', style: TextStyle(color: const Color(0xFF0B1F4B), fontSize: rad * 0.6, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, mid - Offset(tp.width / 2, tp.height / 2));
  }
}

/// The NGMY logo in a round gold frame, for the walls of the house.
void paintNgmyMedallion(Canvas c, Size s, double t) {
  final mid = s.center(Offset.zero);
  final rad = s.shortestSide / 2;
  c.drawCircle(mid, rad, Paint()..color = const Color(0xFFF5C14B));
  c.drawCircle(mid, rad * 0.9, Paint()..color = const Color(0xFFFDFCF7));
  c.drawCircle(mid, rad * 0.93, Paint()
    ..style = PaintingStyle.stroke
    ..color = const Color(0xFF0B1F4B)
    ..strokeWidth = rad * 0.04);
  final img = NgmyLogo.image;
  final box = Rect.fromCenter(center: mid, width: rad * 1.5, height: rad * 1.2);
  if (img != null) {
    final k = math.min(box.width / img.width, box.height / img.height);
    final dst = Rect.fromCenter(center: box.center, width: img.width * k, height: img.height * k);
    c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), dst, Paint()..filterQuality = FilterQuality.medium);
  } else {
    final tp = TextPainter(text: TextSpan(text: 'NGMY', style: TextStyle(color: const Color(0xFF0B1F4B), fontSize: rad * 0.6, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, mid - Offset(tp.width / 2, tp.height / 2));
  }
}

/// A big NGMY sign: the logo on a gold disc on the left, the first line in white and the second in gold. For the town signs, the company and the stores.
void paintNgmySign(Canvas c, Size s, double t, String line1, String line2) {
  final r = Offset.zero & s;
  const gold = Color(0xFFF5C14B);
  c.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(s.shortestSide * 0.08)), Paint()..shader = const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0xFF0B1F4B), Color(0xFF1E4FA3), Color(0xFF0B1F4B)]).createShader(r));
  c.drawRRect(RRect.fromRectAndRadius(r.deflate(s.shortestSide * 0.045), Radius.circular(s.shortestSide * 0.06)), Paint()
    ..style = PaintingStyle.stroke
    ..color = gold
    ..strokeWidth = s.shortestSide * 0.035);
  final rad = s.height * 0.33;
  final mid = Offset(s.height * 0.6, s.height * 0.5);
  c.drawCircle(mid, rad, Paint()..color = gold);
  c.drawCircle(mid, rad * 0.88, Paint()..color = const Color(0xFFFDFCF7));
  final img = NgmyLogo.image;
  final box = Rect.fromCenter(center: mid, width: rad * 1.4, height: rad * 1.15);
  if (img != null) {
    final k = math.min(box.width / img.width, box.height / img.height);
    c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), Rect.fromCenter(center: box.center, width: img.width * k, height: img.height * k), Paint()..filterQuality = FilterQuality.medium);
  } else {
    final tp = TextPainter(text: TextSpan(text: 'NGMY', style: TextStyle(color: const Color(0xFF0B1F4B), fontSize: rad * 0.55, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, mid - Offset(tp.width / 2, tp.height / 2));
  }
  final left = s.height * 1.08, maxW = s.width - left - s.height * 0.2;
  void line(String text, double size, Color col, double y) {
    var tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: col, fontSize: size, fontWeight: FontWeight.w900, letterSpacing: size * 0.05)), textDirection: TextDirection.ltr, maxLines: 1)..layout();
    if (tp.width > maxW) {
      tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: col, fontSize: size * maxW / tp.width, fontWeight: FontWeight.w900, letterSpacing: size * 0.05)), textDirection: TextDirection.ltr, maxLines: 1)..layout();
    }
    tp.paint(c, Offset(left + maxW / 2 - tp.width / 2, y));
  }

  line(line1, s.height * 0.36, Colors.white, s.height * 0.16);
  line(line2, s.height * 0.14, gold, s.height * 0.62);
}

/// How tall a downtown tower is (they differ by their colour).
double _towerHeight(Color c) => 210.0 + (c.toARGB32() % 5) * 24.0;

/// How tall a tower or the company building is, up to the top of its roof board.
double towerHeightFor(Furn f) => f.kind == 'hq' ? 278.0 : _towerHeight(kFurnColors[f.color]);

/// A framed NGMY poster for the outside walls of the house. [variant] 0 is the wide one for the back wall, 1 and 2 are for the sides.
void paintNgmyPoster(Canvas c, Size s, double t, int variant) {
  final r = Offset.zero & s;
  final navy = const Color(0xFF0B1F4B), gold = const Color(0xFFF5C14B);
  final bg = switch (variant) {
    0 => const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0xFF0B1F4B), Color(0xFF1E4FA3), Color(0xFF0B1F4B)]),
    1 => const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFFFFFF), Color(0xFFE3ECFA)]),
    _ => const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFF5C14B), Color(0xFFD99A1E)]),
  };
  c.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(s.shortestSide * 0.06)), Paint()..shader = bg.createShader(r));
  final frame = Paint()
    ..style = PaintingStyle.stroke
    ..color = variant == 2 ? navy : gold
    ..strokeWidth = s.shortestSide * 0.04;
  c.drawRRect(RRect.fromRectAndRadius(r.deflate(s.shortestSide * 0.05), Radius.circular(s.shortestSide * 0.05)), frame);
  c.drawRRect(RRect.fromRectAndRadius(r.deflate(s.shortestSide * 0.1), Radius.circular(s.shortestSide * 0.03)), frame..strokeWidth = s.shortestSide * 0.012);
  final textCol = variant == 1 ? navy : (variant == 2 ? navy : Colors.white);
  final img = NgmyLogo.image;
  void logoAt(Rect box) {
    if (img != null) {
      final k = math.min(box.width / img.width, box.height / img.height);
      c.drawImageRect(img, Rect.fromLTWH(0, 0, img.width.toDouble(), img.height.toDouble()), Rect.fromCenter(center: box.center, width: img.width * k, height: img.height * k), Paint()..filterQuality = FilterQuality.medium);
    } else {
      final tp = TextPainter(text: TextSpan(text: 'NGMY', style: TextStyle(color: textCol, fontSize: box.height * 0.6, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
      tp.paint(c, box.center - Offset(tp.width / 2, tp.height / 2));
    }
  }

  void line(String text, Offset at, double size, {FontWeight w = FontWeight.w900}) {
    final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: textCol, fontSize: size, fontWeight: w, letterSpacing: size * 0.08)), textDirection: TextDirection.ltr)..layout(maxWidth: s.width * 0.9);
    tp.paint(c, at - Offset(tp.width / 2, 0));
  }

  if (variant == 0) {
    // Wide poster: the logo on a white disc on the left, the words on the right.
    final mid = Offset(s.height * 0.62, s.height * 0.5);
    c.drawCircle(mid, s.height * 0.34, Paint()..color = gold);
    c.drawCircle(mid, s.height * 0.3, Paint()..color = const Color(0xFFFDFCF7));
    logoAt(Rect.fromCenter(center: mid, width: s.height * 0.5, height: s.height * 0.4));
    line('NEW GLOBAL', Offset(s.width * 0.62, s.height * 0.2), s.height * 0.16);
    line('MOVEMENT', Offset(s.width * 0.62, s.height * 0.4), s.height * 0.16);
    line('FOR YOUTH', Offset(s.width * 0.62, s.height * 0.6), s.height * 0.16);
  } else {
    logoAt(Rect.fromCenter(center: Offset(s.width / 2, s.height * 0.42), width: s.width * 0.6, height: s.height * 0.4));
    line('NGMY', Offset(s.width / 2, s.height * 0.68), s.height * 0.12);
    line('FOR YOUTH', Offset(s.width / 2, s.height * 0.82), s.height * 0.06, w: FontWeight.w700);
  }
}

/// Edit modes: look, furniture, walls, floor, ceiling, doors.
Scene3D buildHomeRoom(HRoom r, {String mode = 'look', int selected = 0, int problems = 0, bool closed = false, List<ResidentFigure> residents = const [], Set<int> hideFurn = const {}}) {
  if (r.kind == 'outside') return _outside(r, problems, mode, selected, residents, hideFurn);
  r.clearTv();
  final b = MeshBuilder();
  final info = <int, ObjInfo>{};
  final labels = <Label3D>[];
  final screens = <ScreenQuad>[];
  final w = r.w, d = r.d;
  const h = HRoom.h;
  final wallCols = [for (final c in r.wallColor) kWallColors[c]];
  final fl = kFloorStyles[r.floor];

  int when(String m, int id) => mode == m ? id : 0;

  // ── Floor ──
  b.order = -1;
  b.id = when('floor', idHFloorObj);
  // The floor, its boards or tiles and the hall carpet are one group, built in that order: the carpet can never be cut by a piece of floor.
  final gFloor = b.startGroup();
  b.box(V3(0, -0.6, d / 2), V3(w + 2.4, 1.2, d + 2), fl.color, shine: fl.kind == 'tile' ? 0.35 : (fl.kind == 'wood' ? 0.15 : 0), split: 3);
  info[idHFloorObj] = ObjInfo('Floor', 'The ${fl.name.toLowerCase()} floor.', V3(0, 0, d / 2), 140);
  b.id = 0;
  if (fl.kind == 'wood') {
    for (var i = 1; i < 8; i++) {
      b.box(V3(-w / 2 + i * w / 8, 0.05, d / 2), V3(0.3, 0.2, d), Color.lerp(fl.color, Colors.black, 0.25)!);
    }
  } else if (fl.kind == 'tile') {
    for (var i = 1; i < 6; i++) {
      b.box(V3(-w / 2 + i * w / 6, 0.05, d / 2), V3(0.3, 0.2, d), const Color(0xFFB8BEC5));
      b.box(V3(0, 0.05, i * d / 6), V3(w, 0.2, 0.3), const Color(0xFFB8BEC5));
    }
  }
  b.endGroup();

  if (r.kind == 'hall') {
    // A big carpet with the NGMY logo, flat on the floor in the middle of the hall.
    final cw = math.min(w * 0.5, d * 1.5), z0 = 14.0, z1 = d - 14;
    screens.add(ScreenQuad([V3(-cw / 2, 0.5, z0), V3(cw / 2, 0.5, z0), V3(cw / 2, 0.5, z1), V3(-cw / 2, 0.5, z1)], 0, paintNgmyCarpet, width: 900, height: 900 * (z1 - z0) / cw, bias: 60, order: -1, group: gFloor));
  }
  // ── Walls ──
  b.order = 0;
  b.id = when('walls', idHWallBack);
  final gBack = b.startGroup();
  b.box(V3(0, h / 2, -0.6), V3(w + 2.4, h, 1.2), wallCols[0], split: 3);
  b.endGroup();
  b.id = when('walls', idHWallLeft);
  final gLeft = b.startGroup();
  b.box(V3(-w / 2 - 0.6, h / 2, d / 2), V3(1.2, h, d), wallCols[1], split: 3);
  b.endGroup();
  b.id = when('walls', idHWallRight);
  final gRight = b.startGroup();
  b.box(V3(w / 2 + 0.6, h / 2, d / 2), V3(1.2, h, d), wallCols[2], split: 3);
  b.endGroup();
  info[idHWallBack] = const ObjInfo('Back wall', 'Pick a paint colour above to change this wall.', V3(0, 40, 0), 140);
  info[idHWallLeft] = const ObjInfo('Left wall', 'Pick a paint colour above to change this wall.', V3(-60, 40, 50), 140);
  info[idHWallRight] = const ObjInfo('Right wall', 'Pick a paint colour above to change this wall.', V3(60, 40, 50), 140);
  if (closed) {
    // The fourth wall, so the room is a whole room that can be looked round in every direction.
    b.id = 0;
    b.box(V3(0, h / 2, d + 0.6), V3(w + 2.4, h, 1.2), wallCols[0], split: 3);
  }
  b.id = 0;
  // Baseboards.
  b.order = 0;
  const base = Color(0xFFF7F4EC);
  b.joinGroup(gBack);
  b.box(V3(0, 2.5, 0.4), V3(w, 5, 0.8), base, shine: 0.1);
  b.joinGroup(gLeft);
  b.box(V3(-w / 2 + 0.4, 2.5, d / 2), V3(0.8, 5, d), base, shine: 0.1);
  b.joinGroup(gRight);
  b.box(V3(w / 2 - 0.4, 2.5, d / 2), V3(0.8, 5, d), base, shine: 0.1);
  b.endGroup();

  // ── Ceiling (seen through from outside, solid when you are inside) ──
  b.order = closed ? 0 : 3;
  b.id = when('ceiling', idHCeilObj);
  b.alpha = closed ? 1.0 : (mode == 'ceiling' ? 0.6 : 0.4);
  b.box(V3(0, h + 0.6, d / 2), V3(w + 2.4, 1.2, d + 2), kCeilColors[r.ceiling], split: 2);
  b.alpha = 1;
  // Crown moulding where the walls meet the ceiling.
  b.order = 0;
  b.id = 0;
  const crown = Color(0xFFFFFFFF);
  b.joinGroup(gBack);
  b.box(V3(0, h - 2, 1.0), V3(w, 3, 1.4), crown, shine: 0.2);
  b.joinGroup(gLeft);
  b.box(V3(-w / 2 + 1, h - 2, d / 2), V3(1.4, 3, d), crown, shine: 0.2);
  b.joinGroup(gRight);
  b.box(V3(w / 2 - 1, h - 2, d / 2), V3(1.4, 3, d), crown, shine: 0.2);
  b.endGroup();
  info[idHCeilObj] = ObjInfo('Ceiling', 'Pick a colour above to paint the ceiling.', V3(0, h, d / 2), 140);

  // ── Windows ──
  final rightHasDoor = r.doors.any((e) => e.wall == 'right');
  final winWall = rightHasDoor ? 'left' : 'right';
  if (r.kind != 'hall') {
    List<Poly> makeWindow() {
      final win = MeshBuilder();
      win.order = 1;
      win.startGroup();
      win.box(const V3(0, 56, 0.5), const V3(34, 30, 1), const Color(0xFFF4F1EA));
      win.box(const V3(0, 56, 0.9), const V3(30, 26, 0.6), const Color(0xFF9BD3F5), shine: 0.5);
      win.box(const V3(0, 56, 1.3), const V3(30, 1.4, 0.4), const Color(0xFFF4F1EA));
      win.box(const V3(0, 56, 1.3), const V3(1.4, 26, 0.4), const Color(0xFFF4F1EA));
      return win.polys;
    }

    final z = d * 0.55;
    if (closed) b.polys.addAll(transformPolys(makeWindow(), ry: math.pi, t: V3(0, 0, d + 0.2)));
    b.polys.addAll(winWall == 'right' ? transformPolys(makeWindow(), ry: -math.pi / 2, t: V3(w / 2, 0, z)) : transformPolys(makeWindow(), ry: math.pi / 2, t: V3(-w / 2, 0, z)));
  }

  // ── Doors ──
  for (var i = 0; i < r.doors.length; i++) {
    final dr = r.doors[i];
    if (dr.hidden) continue;
    final ang = r.doorAngle[i] ?? (r.openDoors.contains(i) ? 1.25 : 0.0);
    final open = ang > 0.04;
    // The frame, the closed leaf and what shows through an open door are fixed to the wall (tier 1). An open leaf sticks out
    // into the room, so it is sorted with the other things in the room (tier 2) and can hide a person who stands behind it.
    final db = MeshBuilder();
    db.order = 1;
    db.startGroup();
    db.id = idHDoor + i;
    db.box(const V3(0, 41, 0.45), const V3(31, 83, 0.9), const Color(0xFFF7F4EC));
    final lf = MeshBuilder();
    lf.order = 2;
    lf.grouped = true;
    lf.id = idHDoor + i;
    if (open) {
      db.id = 0;
      // What is behind the door: a glimpse of the next room, so an open door shows where it leads.
      final (back, floor) = _glimpse(dr.to);
      db.box(const V3(0, 40, 0.95), const V3(25, 79, 0.2), back);
      db.box(const V3(0, 5, 1.1), const V3(25, 10, 0.2), floor);
      db.box(const V3(0, 76, 1.1), const V3(25, 6, 0.2), Color.lerp(back, Colors.black, 0.25)!);
      final th = -ang;
      final hinge = const V3(-12.5, 0, 1.2);
      final cen = hinge + rotY(const V3(12.5, 39, 0.6), th);
      lf.box(cen, const V3(25, 79, 1.4), const Color(0xFF8B5E34), shine: 0.15, yaw: th);
    } else {
      db.box(const V3(0, 40, 1.4), const V3(25, 79, 1.2), const Color(0xFF8B5E34), shine: 0.15);
      db.box(const V3(7, 40, 2.4), const V3(2.2, 2.2, 1.8), const Color(0xFFE5C07B), shine: 0.8);
      db.box(const V3(0, 56, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
      db.box(const V3(0, 22, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
    }
    List<Poly> onWall(List<Poly> ps) => switch (dr.wall) {
          'left' => transformPolys(ps, ry: math.pi / 2, t: V3(-w / 2, 0, dr.offset + d / 2 - 40)),
          'right' => transformPolys(ps, ry: -math.pi / 2, t: V3(w / 2, 0, dr.offset + d / 2 - 40)),
          _ => transformPolys(ps, t: V3(dr.offset, 0, 0)),
        };
    b.polys.addAll(onWall(db.polys));
    b.polys.addAll(onWall(lf.polys));
    info[idHDoor + i] = ObjInfo('Door', 'Tap the door to go through it.', const V3(0, 40, 0), 90);
  }

  // ── Furniture ──
  for (final f in r.furn) {
    final k = kFurnKinds[f.kind]!;
    final fb = MeshBuilder();
    fb.grouped = true;
    fb.order = f.kind == 'rug' ? 1 : 2;
    fb.id = when('furniture', idHFurn + f.id);
    _furniture(fb, f.kind, kFurnColors[f.color]);
    b.polys.addAll(transformPolys(_shrink(fb.polys, 0.8), ry: f.rot * math.pi / 2, t: V3(f.x, 0, f.z)));
    info[idHFurn + f.id] = ObjInfo(k.name, 'Move it with the arrow buttons, turn it, change its colour or take it out.', V3(f.x, 12, f.z), 90);
  }

  // ── The wiring ──
  b.order = 2;
  b.grouped = true;
  final lightX = 0.0, lightZ = d * 0.5;
  final backDoorX = r.doors.where((e) => e.wall == 'back').map((e) => e.offset).fold<double>(-w / 2 + 30, (a, e) => e);
  final switchX = (backDoorX + 24).clamp(-w / 2 + 10, w / 2 - 10);
  final fan = r.ceilingFix == 'fan';
  final okL = r.okLight;
  final lit = okL && r.okSwitch && r.lightOn;
  const okRing = Color(0xFF22C55E), badRing = Color(0xFFEF4444);
  b.id = idHLight;
  if (fan) {
    // The motor of a ceiling fan on a short rod. The blades come from homeDynamic, so they can spin.
    b.cyl(V3(lightX, h - 0.5, lightZ), V3(lightX, h - 10, lightZ), 1.0, const Color(0xFF2B2D33), sides: 8);
    b.cyl(V3(lightX, h - 10, lightZ), V3(lightX, h - 17, lightZ), 6, const Color(0xFF3F3F46), shine: 0.5, sides: 14);
    b.cyl(V3(lightX, h - 17, lightZ), V3(lightX, h - 20, lightZ), 3.6, lit ? const Color(0xFFFFF1A8) : const Color(0xFF9CA3AF), shine: 0.6, sides: 12);
  } else {
    b.cyl(V3(lightX, h - 0.5, lightZ), V3(lightX, h - 3, lightZ), 7, lit ? const Color(0xFFFFF1A8) : const Color(0xFF9CA3AF), shine: 0.6, sides: 16);
  }
  if (lit && !fan) {
    b.id = 0;
    b.order = 3;
    b.alpha = 0.2;
    b.cyl(V3(lightX, h - 3, lightZ), V3(lightX, 0.5, lightZ), 36, const Color(0xFFFFF1A8), sides: 14, caps: false);
    b.alpha = 1;
    b.order = 2;
  }
  final fixName = fan ? 'Ceiling fan' : 'Ceiling light';
  final lightText = !okL ? 'It has no power yet. ${r.lesson.isNotEmpty ? 'Tap it to wire it.' : 'The room still needs wiring: use the Wiring button.'}' : (!r.okSwitch ? 'It is ready: wire the wall switch to turn it on.' : (r.lightOn ? 'It is on. Tap the wall switch (or tap this) to turn it off.' : 'It is off. Tap the wall switch (or tap this) to turn it on.'));
  info[idHLight] = ObjInfo(fixName, lightText, V3(lightX, h - 8, lightZ), 80);

  // Every outlet in the room: the two that belong to it and the ones that were added.
  final bathKitchen = r.kind == 'bathroom' || r.kind == 'kitchen' || r.lesson == 'gfci';
  final outlets = <(int, int, double, bool, String)>[
    (0, idHOutletA, -w / 4, r.okOutA, bathKitchen ? 'GFCI outlet' : 'Wall outlet'),
    (1, idHOutletB, w / 4, r.okOutB, bathKitchen ? 'GFCI outlet' : 'Wall outlet'),
    for (var i = 0; i < r.extras.length; i++)
      if (r.extras[i].kind != 'switch') (2 + i, idHExtra + i, r.extras[i].x, r.extras[i].done, r.extras[i].kind == 'gfci' ? 'Added GFCI outlet' : 'Added outlet'),
  ];
  b.order = 1;
  b.grouped = false;
  for (final (i, id, x, ok, name) in outlets) {
    // A bright frame round the plate so a finished outlet can be found from far away.
    b.startGroup();
    b.id = id;
    b.bias = 0.4;
    b.alpha = 0.55;
    final st = ok ? 2 : (i < 2 ? r.fixtureState(i) : 0);
    b.box(V3(x, 14, 0.25), const V3(15, 19, 0.5), ok ? okRing : (st == 1 ? const Color(0xFFF59E0B) : badRing));
    b.alpha = 1;
    b.bias = 0;
    b.box(V3(x, 14, 0.9), const V3(9.5, 13.5, 1.4), ok ? const Color(0xFFF7F2E6) : const Color(0xFF3F3F46), shine: 0.25);
    b.id = 0;
    for (final dz in const [-1.0, 1.0]) {
      for (final dx in const [-1.6, 1.6]) {
        b.box(V3(x + dx, 14 + dz * 2.8, 1.7), const V3(0.8, 2.4, 0.3), const Color(0xFF22252B));
      }
    }
    b.box(V3(x, 14, 1.7), const V3(1.2, 1.2, 0.3), const Color(0xFF9CA3AF));
    b.endGroup();
    info[id] = ObjInfo(name, !ok ? 'This one is not wired yet. Tap it to wire it.' : (r.plugged[i] == null ? 'Tap it to plug something in.' : 'Tap it to plug something else in, or to unplug.'), V3(x, 14, 2), 60);
  }

  // Every switch: the room's own and the ones that were added.
  final switches = <(int, double, bool)>[
    (idHSwitch, switchX, r.okSwitch),
    for (var i = 0; i < r.extras.length; i++)
      if (r.extras[i].kind == 'switch') (idHExtra + i, r.extras[i].x, r.extras[i].done),
  ];
  for (final (id, x, ok) in switches) {
    b.startGroup();
    b.id = id;
    b.bias = 0.4;
    b.alpha = 0.55;
    final sst = ok ? 2 : (id == idHSwitch ? r.fixtureState(3) : 0);
    b.box(V3(x, 48, 0.25), const V3(10, 15, 0.5), ok ? okRing : (sst == 1 ? const Color(0xFFF59E0B) : badRing));
    b.alpha = 1;
    b.bias = 0;
    b.box(V3(x, 48, 0.9), const V3(6, 10, 1.4), ok ? const Color(0xFFF7F2E6) : const Color(0xFF3F3F46), shine: 0.25);
    b.box(V3(x, r.lightOn && ok ? 49.2 : 46.8, 1.9), const V3(1.8, 4, 1.0), const Color(0xFFD9D2C2));
    b.endGroup();
    info[id] = ObjInfo('Light switch', !ok ? 'Not wired yet. Tap it to wire it.' : (r.lightOn ? 'On. Tap to turn the ${fan ? 'fan' : 'light'} off.' : 'Off. Tap to turn the ${fan ? 'fan' : 'light'} on.'), V3(x, 48, 2), 60);
  }
  if (r.lesson.isEmpty && !r.wired) {
    final todo = r.missing;
    labels.add(Label3D(V3(lightX, h - 26, lightZ), todo.isEmpty ? '⚡ No power: needs wiring' : '⚡ Still to wire: ${todo.join(', ')}', const Color(0xFFDC2626)));
  }
  if (r.lesson.isNotEmpty && !r.lessonDone && !r.lessonIsPlumbing) labels.add(Label3D(V3(0, 40, 14), '👆 Tap the red one to wire it', const Color(0xFFDC2626)));

  // ── What is plugged in ──
  b.order = 2;
  b.grouped = true;
  for (final (i, _, x, ok, _) in outlets) {
    final key = r.plugged[i];
    if (key == null || !ok) continue;
    final a = applianceByKey(key);
    b.id = idHApp + i;
    b.tube([V3(x, 12, 1.8), V3(x, 6, 3), V3(x, 2, 11)], 0.3, const Color(0xFF1B1B1D), shine: 0.2, sides: 6, joints: false);
    if (a.isTv) {
      final tw = a.tvWidth, th = tw * 0.56;
      final tg = b.startGroup();
      b.box(V3(x, 2, 15), V3(tw * 0.45, 4, 14), const Color(0xFF2B2D33), shine: 0.3);
      b.box(V3(x, 8, 15), const V3(7, 8, 3), const Color(0xFF2B2D33), shine: 0.3);
      b.box(V3(x, 12 + th / 2, 15), V3(tw, th, 3), const Color(0xFF111418), shine: 0.5);
      // The real NGMY ad plays on the glass, flat on the screen.
      final sw = tw - 3.5, sh = th - 3.5, sy = 12 + th / 2;
      final off = i * 7.0 + r.id;
      screens.add(ScreenQuad([V3(x - sw / 2, sy + sh / 2, 16.6), V3(x + sw / 2, sy + sh / 2, 16.6), V3(x + sw / 2, sy - sh / 2, 16.6), V3(x - sw / 2, sy - sh / 2, 16.6)], idHApp + i, (c, size, t) => paintNgmyApp(c, size, 0, t + off), bias: 9, order: 2, group: tg, twoSided: true));
      b.endGroup();
    } else if (a.key == 'lamp') {
      b.cyl(V3(x, 0, 14), V3(x, 1, 14), 6, const Color(0xFF8A6A47), shine: 0.4, sides: 14);
      b.cyl(V3(x, 1, 14), V3(x, 22, 14), 1, const Color(0xFFB08A5B), shine: 0.5, sides: 8);
      b.cyl(V3(x, 20, 14), V3(x, 32, 14), 9, r.lightOn ? const Color(0xFFFFF1A8) : const Color(0xFFF3E7C8), shine: 0.2, sides: 16, caps: false, inner: true, r1: 5.5);
    } else {
      b.box(V3(x, 9, 15), const V3(18, 18, 14), const Color(0xFF8B5E3C), shine: 0.1);
      if (a.key == 'toaster') {
        b.box(V3(x, 23, 15), const V3(16, 10, 10), const Color(0xFFC9CED6), shine: 0.8);
        b.box(V3(x, 28.2, 15), const V3(12, 0.4, 6), const Color(0xFF30333A));
      } else {
        b.cyl(V3(x - 7, 21, 15), V3(x + 7, 21, 15), 3.6, const Color(0xFFE2455A), shine: 0.6, sides: 12, r1: 3);
        b.box(V3(x - 8, 14.5, 15), const V3(4, 11, 3.5), const Color(0xFFE2455A), shine: 0.6);
      }
    }
    info[idHApp + i] = ObjInfo(a.name, a.isTv ? 'It is playing NGMY ads. Tap it to watch full screen with the remote.' : 'It is plugged in and running. Tap the outlet to unplug it or plug in something else.', V3(x, 16, 14), 90);
  }

  // ── The TVs on the wall ──
  b.order = 1;
  b.grouped = false;
  void hangTv(String? tvKey, int sub) {
    if (tvKey == null) return;
    final a = applianceByKey(tvKey);
    final box = wallTvBox(r, a, sub: sub);
    final tw = box.w, th = box.h, y = box.cy;
    final sw = tw - 2.5, sh = th - 2.5;
    final id = idHWallTv + sub;
    const frame = Color(0xFF1B1D22), glass = Color(0xFF0B0F17);
    // Every TV plays a different NGMY ad.
    final app = r.tvApp + sub * 2;
    b.id = id;
    final g = b.startGroup();
    b.bias = 5;
    if ((r.kind == 'hall' && sub < 2) || (r.kind != 'hall' && r.tvWall != 'back')) {
      // On a side wall, facing into the room.
      final left = r.kind == 'hall' ? sub == 1 : r.tvWall == 'left';
      final x = left ? -w / 2 : w / 2;
      final dir = left ? 1.0 : -1.0;
      final z = box.cx;
      b.box(V3(x + dir * 1.4, y, z), V3(2.6, th + 3, tw + 3), frame, shine: 0.5);
      b.box(V3(x + dir * 2.8, y, z), V3(0.2, th, tw), glass, shine: 0.7);
      if (r.tvOn) {
        final xs = x + dir * 2.95;
        final zl = left ? z + sw / 2 : z - sw / 2, zr = left ? z - sw / 2 : z + sw / 2;
        screens.add(ScreenQuad([V3(xs, y + sh / 2, zl), V3(xs, y + sh / 2, zr), V3(xs, y - sh / 2, zr), V3(xs, y - sh / 2, zl)], id, (c, size, t) => paintNgmyApp(c, size, app, t + r.id + sub * 3), height: 320 * sh / sw, bias: 9, group: g));
        final xb = x + dir * 0.05;
        screens.add(ScreenQuad([V3(xb, y + sh / 2, zr), V3(xb, y + sh / 2, zl), V3(xb, y - sh / 2, zl), V3(xb, y - sh / 2, zr)], id, (c, size, t) => paintNgmyApp(c, size, app, t + r.id + sub * 3), height: 320 * sh / sw, bias: 9, group: g));
      }
    } else {
      final x = box.cx;
      b.box(V3(x, y, 1.4), V3(tw + 3, th + 3, 2.6), frame, shine: 0.5);
      b.box(V3(x, y, 2.8), V3(tw, th, 0.2), glass, shine: 0.7);
      if (r.tvOn) {
        screens.add(ScreenQuad([V3(x - sw / 2, y + sh / 2, 2.95), V3(x + sw / 2, y + sh / 2, 2.95), V3(x + sw / 2, y - sh / 2, 2.95), V3(x - sw / 2, y - sh / 2, 2.95)], id, (c, size, t) => paintNgmyApp(c, size, app, t + r.id + sub * 3), height: 320 * sh / sw, bias: 9, group: g));
        screens.add(ScreenQuad([V3(x + sw / 2, y + sh / 2, 0.05), V3(x - sw / 2, y + sh / 2, 0.05), V3(x - sw / 2, y - sh / 2, 0.05), V3(x + sw / 2, y - sh / 2, 0.05)], id, (c, size, t) => paintNgmyApp(c, size, app, t + r.id + sub * 3), height: 320 * sh / sw, bias: 9, group: g));
      }
    }
    b.endGroup();
    b.bias = 0;
    info[id] = ObjInfo(a.name, r.tvOn ? 'It is on and playing ${kNgmyApps[app % kNgmyApps.length].name}. Tap it to watch full screen with the remote.' : 'The TV is off. Tap it to turn it on.', V3(0, y, 4), 110);
  }

  hangTv(r.wallTv, 0);
  if (r.kind == 'hall') {
    hangTv(r.wallTv2, 1);
    hangTv(r.wallTv, 2);
    hangTv(r.wallTv2 ?? r.wallTv, 3);
  }

  // A camera in each corner of the hall: tap one and you are looking from there, as if it were your eyes.
  if (r.kind == 'hall') {
    for (var i = 0; i < 4; i++) {
      final cx = (i % 2 == 0 ? -1.0 : 1.0) * (w / 2 - 14), cz = i < 2 ? 14.0 : d - 14;
      final yaw = math.atan2(-cx, -(d / 2 - cz) * -1);
      b.order = 2;
      b.grouped = false;
      b.startGroup();
      b.id = idHCam + i;
      b.box(V3(cx, HRoom.h - 5, cz), const V3(5, 10, 5), const Color(0xFF3F3F46));
      b.box(V3(cx, HRoom.h - 12, cz), const V3(10, 8, 15), const Color(0xFFE5E7EB), shine: 0.4, yaw: yaw);
      b.box(V3(cx + math.sin(yaw) * 8.5, HRoom.h - 12, cz + math.cos(yaw) * 8.5), const V3(7, 6, 3), const Color(0xFF111827), shine: 0.6, yaw: yaw);
      b.ball(V3(cx - math.sin(yaw) * 5 + math.cos(yaw) * 3, HRoom.h - 8, cz - math.cos(yaw) * 5 - math.sin(yaw) * 3), 1.4, const Color(0xFFEF4444), lat: 3, lon: 5);
      b.endGroup();
      b.id = 0;
      info[idHCam + i] = ObjInfo('Hall camera', 'Tap it and you look from here, like your eyes.', V3(cx, HRoom.h - 12, cz), 60);
    }
  }

  // ── The plumbing ──
  b.order = 2;
  b.grouped = true;
  if (r.hasPlumbing && (r.lesson.isEmpty || r.lessonIsPlumbing)) {
    final ok = r.plumbed;
    void stub(double x, double y) {
      final o = b.order, g = b.grouped;
      b.order = 1;
      b.grouped = false;
      b.id = 0;
      b.cyl(V3(x, y, 0), V3(x, y, 2.2), 0.7, const Color(0xFFD08246), shine: 0.7, sides: 10);
      b.order = o;
      b.grouped = g;
    }

    if (r.kind == 'bathroom') {
      final tx = 6.0, sx = 34.0, tubX = -w / 2 + 17;
      // Toilet.
      if (ok) {
        b.id = idHToiletF;
        b.cyl(V3(tx, 0.5, 14), V3(tx, 15, 14), 8, const Color(0xFFF8F8F4), shine: 0.8, sides: 18, r1: 5.6);
        b.cyl(V3(tx, 15, 14), V3(tx, 16, 14), 9, const Color(0xFFEFEFEA), shine: 0.8, sides: 18);
        b.box(V3(tx, 21, 5), const V3(19, 13, 7), const Color(0xFFF8F8F4), shine: 0.8);
        b.box(V3(tx, 28, 5), const V3(20, 1.4, 8), const Color(0xFFEFEFEA), shine: 0.8);
      } else {
        b.id = idHToiletF;
        b.alpha = 0.3;
        b.order = 3;
        b.box(V3(tx, 14, 9), const V3(18, 28, 16), const Color(0xFF67E8F9));
        b.alpha = 1;
        b.order = 2;
        stub(tx - 10, 8);
      }
      // Vanity and sink.
      b.id = idHSinkF;
      b.box(V3(sx, 14, 10), const V3(30, 28, 18), const Color(0xFF8B5E3C), shine: 0.1);
      b.box(V3(sx, 29, 10), const V3(32, 2, 20), const Color(0xFFE4E7EA), shine: 0.4);
      if (ok) {
        b.cyl(V3(sx, 29.3, 10), V3(sx, 30.1, 10), 6.5, const Color(0xFFFFFFFF), shine: 0.6, sides: 18);
        b.tube([V3(sx, 30, 4), V3(sx, 36, 4), V3(sx, 38, 7)], 0.6, kChromeC, shine: 0.9, sides: 8);
      } else {
        stub(sx - 6, 18);
        stub(sx + 6, 18);
      }
      // Bath.
      b.id = idHTubF;
      if (ok) {
        b.box(V3(tubX, 8, 38), const V3(30, 16, 72), const Color(0xFFF4F4F0), shine: 0.7);
        b.box(V3(tubX, 16.2, 38), const V3(25, 0.5, 66), const Color(0xFFCFE3EA), shine: 0.8);
        b.cyl(V3(tubX, 30, 3), V3(tubX, 52, 3), 0.7, kChromeC, shine: 0.9, sides: 8);
        b.cyl(V3(tubX, 52, 3), V3(tubX, 52, 10), 0.7, kChromeC, shine: 0.9, sides: 8);
      } else {
        b.alpha = 0.3;
        b.order = 3;
        b.box(V3(tubX, 8, 38), const V3(30, 16, 72), const Color(0xFF67E8F9));
        b.alpha = 1;
        b.order = 2;
        stub(tubX - 4, 34);
        stub(tubX + 4, 34);
      }
      info[idHToiletF] = ObjInfo('Toilet', ok ? 'Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.' : 'There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it.', V3(tx, 14, 10), 70);
      info[idHSinkF] = ObjInfo('Vanity sink', ok ? 'The faucet, the hoses and the P-trap are fitted.' : 'The sink is not plumbed. Use the Plumbing button.', V3(sx, 28, 10), 70);
      info[idHTubF] = ObjInfo('Bath', ok ? 'The bath is in and connected.' : 'The bath is not connected yet.', V3(tubX, 10, 38), 90);
      if (!ok) labels.add(Label3D(V3(0, 40, 14), '🚰 Needs plumbing', const Color(0xFF2563EB)));
    } else {
      // Kitchen: a run of counters along the back wall with the sink in the middle, a fridge and a stove.
      const sx = 30.0;
      b.id = 0;
      b.box(V3(-w / 2 + 15, 36, 14), const V3(26, 72, 26), const Color(0xFFE8E8E8), shine: 0.6);
      b.box(V3(-w / 2 + 28.5, 36, 14.4), const V3(0.6, 70, 0.6), const Color(0xFF9CA3AF));
      b.box(V3(w / 2 - 10, 15, 14), const V3(20, 30, 26), const Color(0xFF6B7380), shine: 0.1);
      b.box(V3(w / 2 - 10, 31, 14), const V3(22, 2, 28), const Color(0xFF2B2D33), shine: 0.5);
      b.box(V3(w / 2 - 15, 32.4, 14), const V3(9, 1, 9), const Color(0xFF111111), shine: 0.3);
      b.box(V3(w / 2 - 5, 32.4, 14), const V3(9, 1, 9), const Color(0xFF111111), shine: 0.3);
      b.id = idHKSink;
      b.box(V3(sx, 15, 14), const V3(40, 30, 26), const Color(0xFF8B5E3C), shine: 0.1);
      b.box(V3(sx, 31, 14), const V3(42, 2, 28), const Color(0xFF4A4C54), shine: 0.5);
      if (ok) {
        b.cyl(V3(sx, 32.1, 14), V3(sx, 32.7, 14), 8, const Color(0xFFB6BCC4), shine: 0.8, sides: 18);
        b.tube([V3(sx, 32, 5), V3(sx, 42, 5), V3(sx, 44, 9), V3(sx, 44, 13)], 0.7, kChromeC, shine: 0.9, sides: 8);
      } else {
        stub(sx - 8, 18);
        stub(sx + 8, 18);
      }
      info[idHKSink] = ObjInfo('Kitchen sink', ok ? 'The faucet, the hoses and the drain are fitted.' : 'The kitchen sink is not plumbed yet. Use the Plumbing button.', V3(sx, 30, 14), 70);
      if (!ok) labels.add(Label3D(V3(sx, 48, 14), '🚰 Needs plumbing', const Color(0xFF2563EB)));
    }
  }

  for (final f in residents.where((f) => f.room == r.id)) {
    info[idHResident + f.id] = ObjInfo(f.label, 'Tap to see how they are, feed them or give medicine.', V3(f.x, 36, f.z), 90);
  }
  return Scene3D(b.polys, info: info, labels: labels, screens: screens, shell: (-w / 2, w / 2, 0.0, d));
}


/// A flat, single-sided patch on a wall (a window pane, a door): it can only be seen from outside, so it never shows through the house.
void _patch(MeshBuilder b, V3 c, V3 u, V3 v, double w, double h, Color col, V3 n, {double shine = 0}) {
  final a = c + u * (-w / 2) + v * (h / 2), bb = c + u * (w / 2) + v * (h / 2), cc = c + u * (w / 2) + v * (-h / 2), d = c + u * (-w / 2) + v * (-h / 2);
  b.quad(a, bb, cc, d, col, normal: n, shine: shine);
}

/// The garden and the house seen from outside, from any side. The house is drawn so that every wall keeps its windows and doors
/// whichever way you look at it. Everything in the garden can be moved, turned, recoloured and added to.
Scene3D _outside(HRoom r, int problems, String mode, int selected, List<ResidentFigure> residents, Set<int> hideFurn) {
  final b = MeshBuilder();
  final info = <int, ObjInfo>{};
  final labels = <Label3D>[];
  final w = r.w, d = r.d;
  int when(String m, int id) => mode == m ? id : 0;
  // The ground: a big lawn that goes on past the garden, and the path to the door.
  b.order = 0;
  b.id = when('floor', idHFloorObj);
  b.box(V3(0, -0.6, d / 2 - 60), V3(w * 2.5, 1.2, d * 2.5), const Color(0xFF4C8B4A), split: 5);
  info[idHFloorObj] = const ObjInfo('Lawn', 'The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.', V3(0, 0, 150), 400);
  b.id = 0;
  b.order = 1;
  b.box(V3(0, 0.15, 60), const V3(26, 0.3, 130), const Color(0xFFB8B2A7));
  for (var i = 0; i < 6; i++) {
    b.box(V3(0, 0.35, 8 + i * 22.0), const V3(22, 0.2, 0.8), const Color(0xFF9C968B));
  }

  // The house: one piece, so that its walls, windows and doors are always drawn in the right order.
  const cream = Color(0xFFE8D9BC), trim = Color(0xFFF7F4EC), glass = Color(0xFF9BD3F5), wood = Color(0xFF8B5E34);
  b.order = 2;
  final houseGroup = b.startGroup();
  b.box(const V3(0, 75, -30), const V3(240, 150, 60), cream, split: 3);
  b.box(const V3(0, 3, -30), const V3(244, 6, 64), const Color(0xFF9C8E75));
  // A window: a white frame, the glass and two bars, flat on the wall.
  void window(V3 face, V3 u, V3 n, double along, double y) {
    final c = face + u * along + V3(0, y, 0);
    _patch(b, c + n * 0.1, u, const V3(0, 1, 0), 26, 30, trim, n);
    _patch(b, c + n * 0.2, u, const V3(0, 1, 0), 22, 26, glass, n, shine: 0.6);
    _patch(b, c + n * 0.3, u, const V3(0, 1, 0), 22, 1.2, trim, n);
    _patch(b, c + n * 0.3, u, const V3(0, 1, 0), 1.2, 26, trim, n);
  }

  void door(V3 face, V3 u, V3 n, double along, int id) {
    final c = face + u * along;
    final saved = b.id;
    _patch(b, c + V3(0, 42, 0) + n * 0.1, u, const V3(0, 1, 0), 34, 84, trim, n);
    b.id = id;
    _patch(b, c + V3(0, 41, 0) + n * 0.2, u, const V3(0, 1, 0), 28, 80, wood, n, shine: 0.2);
    b.id = 0;
    _patch(b, c + V3(0, 58, 0) + n * 0.3, u, const V3(0, 1, 0), 20, 26, const Color(0xFF7A4F28), n);
    _patch(b, c + V3(0, 22, 0) + n * 0.3, u, const V3(0, 1, 0), 20, 26, const Color(0xFF7A4F28), n);
    b.box(c + u * 9 + V3(0, 40, 0) + n * 1.0, V3(2.6, 2.6, 2.6), const Color(0xFFE5C07B), shine: 0.8);
    b.id = saved;
  }

  const front = V3(0, 0, 0), back = V3(0, 0, -60), rightF = V3(120, 0, -30), leftF = V3(-120, 0, -30);
  const uf = V3(1, 0, 0), ub = V3(-1, 0, 0), ur = V3(0, 0, -1), ul = V3(0, 0, 1);
  for (final x in const [-90.0, -52.0, 52.0, 90.0]) {
    window(front, uf, const V3(0, 0, 1), x, 62);
    window(front, uf, const V3(0, 0, 1), x, 122);
  }
  door(front, uf, const V3(0, 0, 1), 0, idHDoor);
  for (final x in const [-80.0, 80.0]) {
    window(back, ub, const V3(0, 0, -1), x, 62);
    window(back, ub, const V3(0, 0, -1), x, 122);
  }
  door(back, ub, const V3(0, 0, -1), 0, 0);
  for (final z in const [-14.0, 14.0]) {
    window(rightF, ur, const V3(1, 0, 0), z, 62);
    window(leftF, ul, const V3(-1, 0, 0), -z, 62);
  }
  // The roof: two slopes, the two end triangles and a chimney.
  const roofCol = Color(0xFF7A3B2E);
  final roof = MeshBuilder();
  roof.box(const V3(0, 0, 0), const V3(262, 3, 56), roofCol, shine: 0.1, split: 2);
  // The end walls under the roof (triangles), part of the same piece as the walls.
  b.tri(const V3(120.1, 150, 0), const V3(120.1, 150, -60), const V3(120.1, 174, -30), cream, normal: const V3(1, 0, 0), twoSided: false);
  b.tri(const V3(-120.1, 150, -60), const V3(-120.1, 150, 0), const V3(-120.1, 174, -30), cream, normal: const V3(-1, 0, 0), twoSided: false);
  b.endGroup();
  b.grouped = true;
  b.polys.addAll(transformPolys(roof.polys, rx: 0.5, t: const V3(0, 165, 3)));
  b.polys.addAll(transformPolys(roof.polys, rx: -0.5, t: const V3(0, 165, -63)));
  b.box(const V3(0, 178, -30), const V3(262, 3, 5), const Color(0xFF5E2D23));
  b.box(const V3(70, 175, -45), const V3(14, 36, 14), const Color(0xFF9C5A45));
  b.box(const V3(70, 194, -45), const V3(17, 3, 17), const Color(0xFF6B4A32));
  // The porch over the front door.
  b.box(const V3(0, 2, 14), const V3(50, 4, 28), const Color(0xFFB8B2A7));
  b.cyl(const V3(-20, 4, 26), const V3(-20, 92, 26), 2.2, trim, sides: 8);
  b.cyl(const V3(20, 4, 26), const V3(20, 92, 26), 2.2, trim, sides: 8);
  b.box(const V3(0, 94, 13), const V3(56, 3, 32), roofCol, shine: 0.1);
  info[idHDoor] = const ObjInfo('Front door', 'Tap the door to go inside the house.', V3(0, 40, 12), 260);
  // The NGMY logo in a round gold frame on every wall, like the one on the hall carpet.
  final logos = <ScreenQuad>[];
  void logo(V3 tl, V3 tr, V3 br, V3 bl, {int poster = -1}) => logos.add(ScreenQuad([tl, tr, br, bl], 0, poster < 0 ? paintNgmyMedallion : (c, size, t) => paintNgmyPoster(c, size, t, poster), width: poster == 0 ? 1000 : 256, height: poster == 0 ? 424 : 256, bias: 1, order: 2, group: houseGroup));
  logo(const V3(-26, 146, 0.6), const V3(26, 146, 0.6), const V3(26, 94, 0.6), const V3(-26, 94, 0.6));
  logo(const V3(120.6, 140, -8), const V3(120.6, 140, -52), const V3(120.6, 96, -52), const V3(120.6, 96, -8), poster: 1);
  logo(const V3(-120.6, 140, -52), const V3(-120.6, 140, -8), const V3(-120.6, 96, -8), const V3(-120.6, 96, -52), poster: 2);
  // The back wall is a big wall: a wide poster across it.
  logo(const V3(52, 140, -60.6), const V3(-52, 140, -60.6), const V3(-52, 96, -60.6), const V3(52, 96, -60.6), poster: 0);

  // The things in the garden.
  b.grouped = true;
  final furnGroup = <int, int>{};
  for (final f in r.furn) {
    if (hideFurn.contains(idHFurn + f.id)) continue;
    if (kAnimalKinds.contains(f.kind)) {
      // Animals walk about, so they come from homeDynamic. Here they only get their name.
      info[idHFurn + f.id] = ObjInfo(kFurnKinds[f.kind]!.name, 'It wanders about. Move it with the arrow buttons or take it out.', V3(f.x, 12, f.z), 140);
      continue;
    }
    final k = kFurnKinds[f.kind]!;
    final fb = MeshBuilder();
    fb.grouped = true;
    fb.order = kFlatKinds.contains(f.kind) ? 1 : 2;
    // The hospital and the shop can always be tapped: they open the city's hospital and shop.
    fb.id = (f.kind == 'hospital' || f.kind == 'shop') ? idHFurn + f.id : when('furniture', idHFurn + f.id);
    _furniture(fb, f.kind, kFurnColors[f.color]);
    if (fb.polys.isNotEmpty) furnGroup[f.id] = fb.polys.first.group;
    b.polys.addAll(transformPolys(fb.polys, ry: f.rot * math.pi / 2, t: V3(f.x, 0, f.z)));
    info[idHFurn + f.id] = ObjInfo(k.name, f.kind == 'hospital' ? 'The hospital: tap it to see the beds and treat the patients.' : (f.kind == 'shop' ? 'The shop: tap it to buy food and medicine.' : 'Move it with the arrow buttons, turn it, change its colour or take it out.'), V3(f.x, 12, f.z), 140);
  }
  // The street lights: bright when they work, dark and with a warning when they are broken. And the wires between the poles.
  final poles = <Furn>[];
  for (final f in r.furn.where((f) => f.kind == 'pole' || f.kind == 'lamppost')) {
    final broken = r.brokenLamps.contains(f.id);
    final top = f.kind == 'pole' ? V3(f.x + 20, 86, f.z) : V3(f.x, 55, f.z);
    final lb = MeshBuilder()
      ..id = 0
      ..order = 2;
    lb.ball(top, f.kind == 'pole' ? 4.6 : 4.2, broken ? const Color(0xFF374151) : const Color(0xFFFFF1A8), shine: broken ? 0.1 : 0.0, lat: 3, lon: 6);
    if (!broken) {
      lb.alpha = 0.2;
      lb.ball(top, 10, const Color(0xFFFFF1A8), shine: 0, lat: 2, lon: 6);
      lb.alpha = 1;
    }
    b.polys.addAll(lb.polys);
    if (broken) labels.add(Label3D(top + const V3(0, 14, 0), '⚡ Light out: tap to go and fix it', const Color(0xFFDC2626), id: idHTag + f.id));
    if (f.kind == 'pole') poles.add(f);
  }
  poles.sort((a, b) => a.x.compareTo(b.x));
  for (var i = 0; i + 1 < poles.length; i++) {
    final p = poles[i], q = poles[i + 1];
    if ((p.z - q.z).abs() > 1 || (q.x - p.x).abs() > 170) continue;
    final wb = MeshBuilder()
      ..id = 0
      ..order = 2;
    for (final dz in const [-20.0, 0.0, 20.0]) {
      wb.tube([V3(p.x + dz, 121, p.z), V3((p.x + q.x) / 2 + dz, 117, p.z), V3(q.x + dz, 121, p.z)], 0.35, const Color(0xFF111827), shine: 0, sides: 4, joints: false);
    }
    b.polys.addAll(wb.polys);
  }
  for (final f in r.furn.where((f) => r.darkOffices.containsKey(f.id))) {
    labels.add(Label3D(V3(f.x, f.kind == 'hq' ? 190 : 130, f.z + 40), '⚡ Level ${r.darkOffices[f.id]} has no power: tap to go and fix it', const Color(0xFFDC2626), id: idHTag + f.id));
  }
  for (final f in r.furn.where((f) => r.darkHouses.contains(f.id))) {
    final k = kFurnKinds[f.kind]!;
    labels.add(Label3D(V3(f.x, f.kind == 'bighouse' ? 120 : 82, f.z), '⚡ No power: tap to go in and fix it', const Color(0xFFDC2626), id: idHTag + f.id));
    final dark = MeshBuilder()
      ..id = 0
      ..order = 2;
    dark.alpha = 0.45;
    dark.box(V3(f.x, k.d > 0 ? 30 : 30, f.z), V3(k.w + 2, 60, k.d + 2), const Color(0xFF0B1220));
    dark.alpha = 1;
    b.polys.addAll(dark.polys);
  }
  // The ads: on every billboard, and on two big TVs in the front of every big house.
  final adScreens = <ScreenQuad>[];
  for (final f in r.furn.where((f) => const {'billboard', 'bighouse', 'townsign', 'cornersign', 'adboard', 'tower', 'hq', 'store', 'gasstation', 'ubstation', 'dmv'}.contains(f.kind))) {
    final rr = f.rot * math.pi / 2;
    V3 w(double x, double y, double z) => rotY(V3(x, y, z), rr) + V3(f.x, 0, f.z);
    final grp = furnGroup[f.id] ?? 0;
    if (f.kind == 'billboard') {
      // One face on the front and one on the back, so it reads the right way up from both sides.
      adScreens.add(ScreenQuad([w(-33, 62.5, 2), w(33, 62.5, 2), w(33, 31.5, 2), w(-33, 31.5, 2)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id), width: 960, height: 450, bias: 4, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(33, 62.5, -2), w(-33, 62.5, -2), w(-33, 31.5, -2), w(33, 31.5, -2)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id), width: 960, height: 450, bias: 4, order: 2, group: grp));
    } else if (f.kind == 'townsign' || f.kind == 'cornersign') {
      // Both faces, each one the right way up: the biggest billboard in the city and the one at each corner.
      final big = f.kind == 'townsign';
      final hw = big ? 178.0 : 71.0, hh = big ? 57.0 : 31.0, cy = big ? 252.0 : 122.0, zz = big ? 3.6 : 3.0;
      final l2 = big ? 'Welcome to NGMY City · New Global Movement for Youth' : 'Welcome to NGMY City';
      final px = big ? 1400.0 : 700.0, py = big ? 450.0 : 300.0;
      adScreens.add(ScreenQuad([w(-hw, cy + hh, zz), w(hw, cy + hh, zz), w(hw, cy - hh, zz), w(-hw, cy - hh, zz)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY TOWN', l2), width: px, height: py, bias: 4, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(hw, cy + hh, -zz), w(-hw, cy + hh, -zz), w(-hw, cy - hh, -zz), w(hw, cy - hh, -zz)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY TOWN', l2), width: px, height: py, bias: 4, order: 2, group: grp));
    } else if (f.kind == 'adboard') {
      adScreens.add(ScreenQuad([w(-158, 195, 3.6), w(158, 195, 3.6), w(158, 90, 3.6), w(-158, 90, 3.6)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id), width: 1280, height: 424, bias: 4, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(158, 195, -3.6), w(-158, 195, -3.6), w(-158, 90, -3.6), w(158, 90, -3.6)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 4), width: 1280, height: 424, bias: 4, order: 2, group: grp));
    } else if (f.kind == 'tower') {
      final hgt = _towerHeight(kFurnColors[f.color]);
      adScreens.add(ScreenQuad([w(-40, hgt - 8, 35.9), w(40, hgt - 8, 35.9), w(40, hgt - 54, 35.9), w(-40, hgt - 54, 35.9)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id), width: 800, height: 460, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(40, hgt - 8, -35.9), w(-40, hgt - 8, -35.9), w(-40, hgt - 54, -35.9), w(40, hgt - 54, -35.9)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 7), width: 800, height: 460, bias: 8, order: 2, group: grp));
      // The two sides of the tower, and the big board on the roof (a face to the south and one to the north).
      adScreens.add(ScreenQuad([w(50.9, hgt - 8, 28), w(50.9, hgt - 8, -28), w(50.9, hgt - 54, -28), w(50.9, hgt - 54, 28)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 3), width: 640, height: 460, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(-50.9, hgt - 8, -28), w(-50.9, hgt - 8, 28), w(-50.9, hgt - 54, 28), w(-50.9, hgt - 54, -28)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 5), width: 640, height: 460, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(-40, hgt + 58, 1.7), w(40, hgt + 58, 1.7), w(40, hgt + 22, 1.7), w(-40, hgt + 22, 1.7)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 1), width: 960, height: 400, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(40, hgt + 58, -1.7), w(-40, hgt + 58, -1.7), w(-40, hgt + 22, -1.7), w(40, hgt + 22, -1.7)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 2), width: 960, height: 400, bias: 8, order: 2, group: grp));
    } else if (f.kind == 'hq') {
      adScreens.add(ScreenQuad([w(-70, 108, 45.9), w(70, 108, 45.9), w(70, 52, 45.9), w(-70, 52, 45.9)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY COMPANY', 'Building the movement'), width: 1000, height: 400, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(-48, 215, 30.2), w(48, 215, 30.2), w(48, 175, 30.2), w(-48, 175, 30.2)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY', 'New Global Movement for Youth'), width: 900, height: 380, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(70, 108, -45.9), w(-70, 108, -45.9), w(-70, 52, -45.9), w(70, 52, -45.9)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY COMPANY', 'Building the movement'), width: 1000, height: 400, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(48, 215, -30.2), w(-48, 215, -30.2), w(-48, 175, -30.2), w(48, 175, -30.2)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY', 'New Global Movement for Youth'), width: 900, height: 380, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(-54, 276 + 52, 1.7), w(54, 276 + 52, 1.7), w(54, 276 + 18, 1.7), w(-54, 276 + 18, 1.7)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 4), width: 1000, height: 360, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(54, 276 + 52, -1.7), w(-54, 276 + 52, -1.7), w(-54, 276 + 18, -1.7), w(54, 276 + 18, -1.7)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 6), width: 1000, height: 360, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(85.9, 118, 36), w(85.9, 118, -36), w(85.9, 62, -36), w(85.9, 62, 36)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 2), width: 720, height: 560, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(-85.9, 118, -36), w(-85.9, 118, 36), w(-85.9, 62, 36), w(-85.9, 62, -36)], 0, (c, size, t) => paintCityAdLoop(c, size, t, f.id + 3), width: 720, height: 560, bias: 8, order: 2, group: grp));
    } else if (f.kind == 'store') {
      adScreens.add(ScreenQuad([w(-54, 85, 37.7), w(54, 85, 37.7), w(54, 67, 37.7), w(-54, 67, 37.7)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY STORE', 'Everything you need'), width: 900, height: 150, bias: 6, order: 2, group: grp));
    } else if (f.kind == 'ubstation') {
      // The sign on the pole says NGMY Uber.
      adScreens.add(ScreenQuad([w(40, 106, 31.9), w(76, 106, 31.9), w(76, 86, 31.9), w(40, 86, 31.9)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY UBER', 'Rides home'), width: 480, height: 270, bias: 8, order: 2, group: grp));
      adScreens.add(ScreenQuad([w(76, 106, 28.1), w(40, 106, 28.1), w(40, 86, 28.1), w(76, 86, 28.1)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY UBER', 'Rides home'), width: 480, height: 270, bias: 8, order: 2, group: grp));
    } else if (f.kind == 'dmv') {
      adScreens.add(ScreenQuad([w(-50, 85, 38.6), w(50, 85, 38.6), w(50, 67, 38.6), w(-50, 67, 38.6)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY LICENCE', 'Get your Uber licence'), width: 900, height: 160, bias: 8, order: 2, group: grp));
    } else if (f.kind == 'gasstation') {
      adScreens.add(ScreenQuad([w(-86, 107, 35.7), w(-54, 107, 35.7), w(-54, 85, 35.7), w(-86, 85, 35.7)], 0, (c, size, t) => paintNgmySign(c, size, t, 'NGMY GAS', 'Open 24 hours'), width: 480, height: 330, bias: 6, order: 2, group: grp));
    } else {
      for (var k = 0; k < 2; k++) {
        final cx = k == 0 ? -40.0 : 40.0;
        adScreens.add(ScreenQuad([w(cx - 26, 70, 60.7), w(cx + 26, 70, 60.7), w(cx + 26, 40, 60.7), w(cx - 26, 40, 60.7)], 0, (c, size, t) => paintCityAd(c, size, t, f.id * 2 + k + 1), width: 720, height: 520, bias: 9, order: 2, group: grp));
      }
    }
  }
  for (final f in residents.where((f) => f.room == r.id && !f.calling && f.activityLabel.isNotEmpty)) {
    labels.add(Label3D(V3(f.x, 82, f.z), f.activityLabel, const Color(0xFF0F766E)));
  }
  // Somebody who is calling for help is marked with a phone, so they can be found in the street.
  for (final f in residents.where((f) => f.room == r.id && f.calling)) {
    labels.add(Label3D(V3(f.x, 80, f.z), '📞 Help!', const Color(0xFFDC2626)));
  }
  labels.add(Label3D(const V3(0, 216, -30), problems == 0 ? '✅ The house is finished' : '🏠 $problems rooms still need work', problems == 0 ? const Color(0xFF16A34A) : const Color(0xFFD97706)));
  // The big billboard behind the house: the NGMY logo with New Global Movement for Youth.
  final gBoard = b.startGroup();
  for (final x in const [-80.0, 80.0]) {
    b.cyl(V3(x, 0, -118), V3(x, 215, -118), 3, const Color(0xFF3F3F46), sides: 8);
  }
  b.box(const V3(0, 250, -118), const V3(250, 92, 6), const Color(0xFF111827), shine: 0.3);
  b.endGroup();
  logos.add(ScreenQuad(const [V3(-125, 292, -114.5), V3(125, 292, -114.5), V3(125, 208, -114.5), V3(-125, 208, -114.5)], 0, (c, size, t) => paintNgmyPoster(c, size, t, 0), width: 1000, height: 336, bias: 4, order: 2, group: gBoard));
  // The same board seen from the back: its own face, turned round, so nothing is upside down or backwards from either side.
  logos.add(ScreenQuad(const [V3(125, 292, -121.5), V3(-125, 292, -121.5), V3(-125, 208, -121.5), V3(125, 208, -121.5)], 0, (c, size, t) => paintNgmyPoster(c, size, t, 0), width: 1000, height: 336, bias: 4, order: 2, group: gBoard));
  return Scene3D(b.polys, info: info, labels: labels, screens: [...logos, ...adScreens], farMin: 4000);
}

/// Things that move: the fan blades and the pictures on the TVs.
List<Poly> homeDynamic(HRoom r, double t, {PersonPose? person, PersonStyle? personStyle, List<ResidentFigure> residents = const [], String mode = 'look', (String, double, double, double, int)? drive, bool carrying = false, List<CourierFigure> couriers = const []}) {
  final b = MeshBuilder();
  b.grouped = true;
  if (r.kind == 'outside') {
    if (person != null && person.room == r.id) _figure(b, person, t, personStyle ?? playerStyle, close: true);
    if (carrying && person != null && person.room == r.id) {
      // A crate carried in front of the person.
      final cb = MeshBuilder()..id = 0;
      cb.box(V3(person.x + math.sin(person.yaw) * 9, 46 + person.lift, person.z + math.cos(person.yaw) * 9), const V3(14, 11, 14), const Color(0xFFC49A62));
      b.polys.addAll(cb.polys);
    }
    if (drive != null) {
      // The vehicle you are driving: (kind, x, z, the way it faces, colour). Its front is its +x end.
      final cb = MeshBuilder()
        ..grouped = true
        ..order = 2
        ..id = 0;
      _furniture(cb, drive.$1, kFurnColors[drive.$5]);
      b.polys.addAll(transformPolys(cb.polys, ry: drive.$4 - math.pi / 2, t: V3(drive.$2, 0, drive.$3)));
    }
    for (final f in r.furn.where((f) => kAnimalKinds.contains(f.kind))) {
      // Each animal wanders round a small circle, its legs swinging, facing the way it goes.
      final a = t * (0.25 + (f.id % 5) * 0.04) + f.id * 1.7;
      final px = f.x + math.cos(a) * 10, pz = f.z + math.sin(a) * 10;
      final yaw = math.atan2(-math.sin(a), math.cos(a));
      final ab = MeshBuilder()
        ..grouped = true
        ..order = 2
        ..id = mode == 'furniture' ? idHFurn + f.id : 0;
      _animal(ab, f.kind, kFurnColors[f.color], math.sin(t * 6 + f.id) * 0.5);
      b.polys.addAll(transformPolys(ab.polys, ry: yaw, t: V3(px, 0, pz)));
    }
    for (final f in residents.where((f) => f.room == r.id)) {
      _figure(b, PersonPose(room: r.id, x: f.x, z: f.z, yaw: f.yaw), t, f.style, id: idHResident + f.id, tint: f.style.shirt);
      _activityProps(b, f, t);
    }
    // The other couriers, walking between the shops and the houses with their orders.
    for (final c in couriers) {
      _figure(b, PersonPose(room: r.id, x: c.x, z: c.z, yaw: c.yaw, walking: c.walking, phase: c.phase), t, c.style, tint: c.color);
      if (c.carrying) {
        final cb = MeshBuilder()..id = 0;
        cb.box(V3(c.x + math.sin(c.yaw) * 9, 46, c.z + math.cos(c.yaw) * 9), const V3(13, 12, 13), const Color(0xFFF5C14B));
        b.polys.addAll(cb.polys);
      }
    }
    return b.polys;
  }
  if (!r.indoor) return b.polys;
  if (person != null && person.room == r.id) _figure(b, person, t, personStyle ?? playerStyle, close: true);
  // The people who live here, standing in their rooms. Tapping one opens their card.
  for (final f in residents.where((f) => f.room == r.id)) {
    final sway = f.wander > 0 ? math.sin(t * 0.5 + f.id) * f.wander : 0.0;
    _figure(b, PersonPose(room: r.id, x: f.x + sway, z: f.z, yaw: f.wander > 0 ? (math.cos(t * 0.5 + f.id) >= 0 ? math.pi / 2 : -math.pi / 2) : (f.calling ? 0.5 : f.yaw), walking: f.wander > 0, phone: f.calling), t, f.style, id: idHResident + f.id);
  }
  final d = r.d;
  const h = HRoom.h;
  if (r.ceilingFix == 'fan') {
    final spin = r.okLight && r.okSwitch && r.lightOn;
    final base = spin ? t * 7.0 : 0.0;
    b.id = idHLight;
    for (var i = 0; i < 4; i++) {
      final a = base + i * math.pi / 2;
      final c = V3(math.cos(a) * 15, h - 15, d * 0.5 + math.sin(a) * 15);
      b.box(c, const V3(24, 0.8, 6.5), const Color(0xFF8B5E3C), shine: 0.1, yaw: -a);
    }
  }
  return b.polys;
}


/// The colours of the room seen through an open door that leads to room [to]: the wall at the back and the floor.
(Color, Color) _glimpse(int to) => switch (to) {
      5 => (const Color(0xFFF1E8D2), const Color(0xFFB08A5B)),
      9 => (const Color(0xFFF3F0E8), const Color(0xFF7B8794)),
      10 => (const Color(0xFFE9DEC2), const Color(0xFFB08A5B)),
      11 => (const Color(0xFF9BD3F5), const Color(0xFF4C8B4A)),
      2 || 4 || 8 => (const Color(0xFFD6E6EA), const Color(0xFFE4E7EA)),
      _ => (const Color(0xFFC3CFE6), const Color(0xFF8D9096)),
    };

/// A row of windows on one face of a building. [n] panes spread over [span], at the heights [ys], flat on the wall.
void _windows(MeshBuilder b, V3 face, V3 u, V3 n, double span, int n0, List<double> ys, {Color glass = const Color(0xFF9BD3F5), double w = 11, double h = 14}) {
  for (var i = 0; i < n0; i++) {
    final along = n0 == 1 ? 0.0 : -span / 2 + span * i / (n0 - 1);
    for (final y in ys) {
      final c = face + u * along + V3(0, y, 0);
      _patch(b, c + n * 0.1, u, const V3(0, 1, 0), w + 3, h + 3, const Color(0xFFF7F4EC), n);
      _patch(b, c + n * 0.2, u, const V3(0, 1, 0), w, h, glass, n, shine: 0.6);
      _patch(b, c + n * 0.3, u, const V3(0, 1, 0), w, 0.9, const Color(0xFFF7F4EC), n);
    }
  }
}

/// A building you can place in the world: a house, a shop, a hospital, a fire station or a school. The walls, windows, doors and
/// signs are one sorted piece (flat patches that cannot show through from behind), so it looks right from every side. The front
/// (with the door) faces +z, and turning it turns the whole building.
void _building(MeshBuilder b, String kind, Color accent) {
  final (w, d, h, wall, roofCol) = switch (kind) {
    'shop' => (84.0, 60.0, 40.0, const Color(0xFFF3E3A7), const Color(0xFF7A3B2E)),
    'hospital' => (110.0, 70.0, 62.0, const Color(0xFFF1F5F9), const Color(0xFF64748B)),
    'firestation' => (90.0, 64.0, 46.0, const Color(0xFFB45353), const Color(0xFF4B5563)),
    'school' => (124.0, 70.0, 44.0, const Color(0xFFE4B07A), const Color(0xFF6B4A32)),
    _ => (72.0, 60.0, 44.0, const Color(0xFFE8D9BC), const Color(0xFF7A3B2E)),
  };
  const trim = Color(0xFFF7F4EC), wood = Color(0xFF8B5E34);
  final hd = d / 2, hw = w / 2;
  const nF = V3(0, 0, 1), nB = V3(0, 0, -1), nR = V3(1, 0, 0), nL = V3(-1, 0, 0);
  b.startGroup();
  b.box(V3(0, h / 2, 0), V3(w, h, d), wall, split: 2);
  b.box(V3(0, 2.5, 0), V3(w + 3, 5, d + 3), const Color(0xFF9C8E75));
  final floors = kind == 'hospital' ? [14.0, 30.0, 46.0] : (kind == 'school' ? [14.0, 32.0] : (kind == 'house2' ? [26.0] : [22.0]));
  final cols = (w / 24).floor().clamp(2, 5);
  // The front: windows, the door and a sign.
  final front = V3(0, 0, hd);
  final windowRows = kind == 'firestation' ? [34.0] : floors;
  _windows(b, front + const V3(0, 0, 0), const V3(1, 0, 0), nF, w - 30, cols, windowRows, glass: const Color(0xFF9BD3F5));
  // A door in the middle (a wide garage door for the fire station).
  if (kind == 'firestation') {
    _patch(b, V3(-14, 17, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 34, 34, const Color(0xFF4B5563), nF, shine: 0.2);
    for (var i = 0; i < 6; i++) {
      _patch(b, V3(-14, 4 + i * 6.0, hd + 0.5), const V3(1, 0, 0), const V3(0, 1, 0), 33, 0.8, const Color(0xFF9CA3AF), nF);
    }
    _patch(b, V3(24, 15, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 14, 30, wood, nF);
  } else {
    _patch(b, V3(0, 14, hd + 0.3), const V3(1, 0, 0), const V3(0, 1, 0), 18, 28, trim, nF);
    _patch(b, V3(0, 13, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 14, 26, wood, nF, shine: 0.2);
  }
  // What the building is: a coloured sign, a red cross, an awning, a clock.
  switch (kind) {
    case 'hospital':
      _patch(b, V3(0, h - 8, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 30, 9, const Color(0xFFDC2626), nF);
      _patch(b, V3(0, h - 8, hd + 0.5), const V3(1, 0, 0), const V3(0, 1, 0), 24, 2.6, Colors.white, nF);
      _patch(b, V3(0, h - 8, hd + 0.5), const V3(1, 0, 0), const V3(0, 1, 0), 2.6, 7, Colors.white, nF);
    case 'shop':
      for (var i = 0; i < 6; i++) {
        _patch(b, V3(-30 + i * 12.0, 33, hd + 3), const V3(1, 0, 0), const V3(0, 1, 0), 6, 6, i.isEven ? const Color(0xFFEF4444) : Colors.white, nF);
      }
      _patch(b, V3(0, h - 4, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 36, 6, accent, nF);
    case 'firestation':
      _patch(b, V3(0, h - 5, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 40, 7, const Color(0xFFFACC15), nF);
    case 'school':
      _patch(b, V3(0, h - 5, hd + 0.4), const V3(1, 0, 0), const V3(0, 1, 0), 40, 7, const Color(0xFF2563EB), nF);
    default:
  }
  // The back and the two sides: windows too, and a back door.
  _windows(b, V3(0, 0, -hd), const V3(-1, 0, 0), nB, w - 30, cols, windowRows);
  _patch(b, V3(0, 13, -hd - 0.4), const V3(-1, 0, 0), const V3(0, 1, 0), 14, 26, wood, nB);
  final sideN = (d / 24).floor().clamp(1, 3);
  _windows(b, V3(hw, 0, 0), const V3(0, 0, -1), nR, d - 26, sideN, windowRows);
  _windows(b, V3(-hw, 0, 0), const V3(0, 0, 1), nL, d - 26, sideN, windowRows);
  b.endGroup();
  // The roof.
  final roof = MeshBuilder()
    ..grouped = true
    ..id = b.id
    ..order = b.order;
  if (kind == 'house2' || kind == 'school') {
    final slab = MeshBuilder()
      ..grouped = true
      ..id = b.id
      ..order = b.order;
    slab.box(V3.zero, V3(w + 6, 2.5, d * 0.58), roofCol, shine: 0.1);
    b.polys.addAll(transformPolys(slab.polys, rx: 0.42, t: V3(0, h + 5, d * 0.25)));
    b.polys.addAll(transformPolys(slab.polys, rx: -0.42, t: V3(0, h + 5, -d * 0.25)));
    b.tri(V3(hw + 0.2, h, hd), V3(hw + 0.2, h, -hd), V3(hw + 0.2, h + 12, 0), wall, normal: nR, twoSided: false);
    b.tri(V3(-hw - 0.2, h, -hd), V3(-hw - 0.2, h, hd), V3(-hw - 0.2, h + 12, 0), wall, normal: nL, twoSided: false);
    if (kind == 'school') {
      roof.box(V3(0, h + 18, hd - 10), const V3(18, 20, 18), const Color(0xFFD9A066));
      roof.box(V3(0, h + 30, hd - 10), const V3(22, 3, 22), roofCol);
      roof.cyl(V3(0, h + 31, hd - 10), V3(0, h + 46, hd - 10), 0.6, const Color(0xFF9CA3AF), sides: 6);
      roof.box(V3(5, h + 44, hd - 10), const V3(9, 5, 0.6), const Color(0xFFEF4444));
    } else {
      roof.box(V3(w * 0.28, h + 14, -d * 0.1), const V3(8, 18, 8), const Color(0xFF9C5A45));
    }
  } else {
    roof.box(V3(0, h + 1.5, 0), V3(w + 2, 3, d + 2), roofCol, shine: 0.05);
    roof.box(V3(0, h + 4, hd + 0.5), V3(w + 2, 4, 1.4), accent);
    if (kind == 'hospital') {
      roof.box(V3(w * 0.25, h + 5, -d * 0.15), const V3(26, 2, 26), const Color(0xFF475569));
      roof.box(V3(w * 0.25, h + 6.2, -d * 0.15), const V3(16, 0.4, 16), Colors.white);
    }
    if (kind == 'firestation') {
      roof.box(V3(hw - 10, h + 16, -d * 0.2), const V3(14, 30, 14), const Color(0xFFB45353));
      roof.box(V3(hw - 10, h + 32, -d * 0.2), const V3(17, 3, 17), roofCol);
    }
  }
  b.polys.addAll(roof.polys);
}

/// A road piece: 40 by 40, with its dashed line running to every edge it joins to. Straight joins left and right, a corner joins
/// right and front, a T-junction left, right and front, and crossroads all four; turning it moves the joins. Because roads
/// snap to the grid, neighbours always line up and the line carries on from one piece to the next.
void _roadPiece(MeshBuilder b, String kind) {
  // A plain straight piece is two flat faces (the road and its line): there are hundreds of them.
  if (kind == 'road') {
    const up = V3(0, 1, 0);
    b.quad(const V3(-20, 0.6, -20), const V3(20, 0.6, -20), const V3(20, 0.6, 20), const V3(-20, 0.6, 20), const Color(0xFF3F4450), normal: up);
    b.quad(const V3(-7, 0.8, -0.8), const V3(7, 0.8, -0.8), const V3(7, 0.8, 0.8), const V3(-7, 0.8, 0.8), const Color(0xFFF3E7A1), normal: up);
    return;
  }
  b.box(const V3(0, 0.3, 0), const V3(40, 0.6, 40), const Color(0xFF3F4450));
  if (kind != 'road') {
    b.box(const V3(0, 0.62, 19.2), const V3(40, 0.12, 1.2), const Color(0xFF6B7280));
    b.box(const V3(0, 0.62, -19.2), const V3(40, 0.12, 1.2), const Color(0xFF6B7280));
  }
  final joins = switch (kind) {
    'roadturn' => const [(1.0, 0.0), (0.0, 1.0)],
    'roadtee' => const [(1.0, 0.0), (-1.0, 0.0), (0.0, 1.0)],
    'roadcross' => const [(1.0, 0.0), (-1.0, 0.0), (0.0, 1.0), (0.0, -1.0)],
    _ => const [(1.0, 0.0), (-1.0, 0.0)],
  };
  const line = Color(0xFFF3E7A1);
  if (kind == 'road') {
    b.box(const V3(0, 0.7, 0), const V3(14, 0.2, 1.6), line);
    return;
  }
  for (final (ex, ez) in joins) {
    for (var i = 0; i < 2; i++) {
      final at = 5.0 + i * 10.5;
      b.box(V3(ex * at, 0.7, ez * at), V3(ex != 0 ? 6 : 1.6, 0.2, ez != 0 ? 6 : 1.6), line);
    }
  }
  if (kind != 'road') b.box(const V3(0, 0.7, 0), const V3(3, 0.2, 3), line);
  if (kind == 'roadcross') {
    for (var i = -2; i <= 2; i++) {
      b.box(V3(i * 4.0, 0.7, 15), const V3(2, 0.2, 6), Colors.white);
    }
  }
}

/// An animal, standing on y = 0, facing +z, with its legs swung by [swing] (0 for standing still).
void _animal(MeshBuilder b, String kind, Color c, double swing) {
  const dark = Color(0xFF2B2D33);
  // Legs: a pivot on the body, a length, a thickness and the way each swings (the pairs swing against each other).
  void legs(List<(double, double)> at, double hipY, double len, double th, Color col) {
    var i = 0;
    for (final (x, z) in at) {
      final lb = MeshBuilder()
        ..id = b.id
        ..order = b.order
        ..grouped = true;
      lb.box(V3(0, -len / 2, 0), V3(th, len, th), col);
      b.polys.addAll(transformPolys(lb.polys, rx: swing * (i.isEven ? 1 : -1) * (x > 0 ? 1 : -1), t: V3(x, hipY, z)));
      i++;
    }
  }

  switch (kind) {
    case 'dog':
      b.box(const V3(0, 8, 0), const V3(6.5, 6, 14), c, shine: 0.05);
      b.ball(const V3(0, 11, 8.5), 3.4, c, lat: 4, lon: 8);
      b.box(const V3(0, 9.6, 11.6), const V3(2.6, 2, 2.6), const Color(0xFF3B2A1A));
      b.box(const V3(-2.4, 14, 8), const V3(1.4, 3, 1.6), dark);
      b.box(const V3(2.4, 14, 8), const V3(1.4, 3, 1.6), dark);
      b.cyl(const V3(0, 9.5, -7), const V3(0, 14, -9), 0.8, c, sides: 5);
      legs(const [(-2.4, 5.0), (2.4, 5.0), (-2.4, -5.0), (2.4, -5.0)], 6, 6, 1.7, c);
    case 'cat':
      b.box(const V3(0, 6, 0), const V3(4.6, 4.2, 9.5), c, shine: 0.05);
      b.ball(const V3(0, 8, 6), 2.7, c, lat: 4, lon: 8);
      b.box(const V3(-1.6, 11, 6), const V3(1, 2, 1), c);
      b.box(const V3(1.6, 11, 6), const V3(1, 2, 1), c);
      b.cyl(const V3(0, 7, -5), const V3(0, 13, -8), 0.7, c, sides: 5);
      legs(const [(-1.6, 3.5), (1.6, 3.5), (-1.6, -3.5), (1.6, -3.5)], 4, 4, 1.2, c);
    case 'cow':
      b.box(const V3(0, 17, 0), const V3(14, 13, 28), const Color(0xFFF1F5F9), shine: 0.05);
      b.box(const V3(7.1, 18, -3), const V3(0.4, 7, 9), dark);
      b.box(const V3(-7.1, 19, 4), const V3(0.4, 6, 8), dark);
      b.box(const V3(0, 20, 16), const V3(8, 9, 9), const Color(0xFFF1F5F9));
      b.box(const V3(0, 17, 21), const V3(5, 4.5, 3), const Color(0xFFF9A8D4));
      b.box(const V3(-3.5, 26, 15), const V3(1, 3, 1), const Color(0xFFE5E7EB));
      b.box(const V3(3.5, 26, 15), const V3(1, 3, 1), const Color(0xFFE5E7EB));
      b.cyl(const V3(0, 20, -14), const V3(0, 8, -16), 0.7, dark, sides: 5);
      legs(const [(-4.5, 10.0), (4.5, 10.0), (-4.5, -10.0), (4.5, -10.0)], 11, 11, 3.2, const Color(0xFFE5E7EB));
    case 'sheep':
      b.ball(const V3(0, 13, 0), 8.5, const Color(0xFFF5F5F4), lat: 4, lon: 8);
      b.ball(const V3(0, 14, 5), 7, const Color(0xFFF5F5F4), lat: 4, lon: 8);
      b.ball(const V3(0, 14, 11), 3.4, dark, lat: 4, lon: 8);
      legs(const [(-3.5, 4.0), (3.5, 4.0), (-3.5, -4.0), (3.5, -4.0)], 8, 8, 1.8, dark);
    case 'chicken':
      b.ball(const V3(0, 6, 0), 4, c, lat: 4, lon: 8);
      b.ball(const V3(0, 10, 3), 2.2, c, lat: 3, lon: 6);
      b.box(const V3(0, 12, 3), const V3(0.8, 1.6, 1.4), const Color(0xFFDC2626));
      b.box(const V3(0, 10, 5.2), const V3(0.8, 0.8, 1.6), const Color(0xFFF59E0B));
      b.box(const V3(0, 8, -4), const V3(0.6, 4, 2.4), c);
      legs(const [(-1.2, 0.0), (1.2, 0.0)], 3, 3, 0.8, const Color(0xFFF59E0B));
    case 'horse':
      b.box(const V3(0, 21, 0), const V3(11, 12, 30), c, shine: 0.1);
      b.cyl(const V3(0, 24, 13), const V3(0, 36, 19), 4.2, c, r1: 3, sides: 8);
      b.box(const V3(0, 37, 22), const V3(5, 6, 10), c);
      b.box(const V3(0, 40, 17), const V3(1.6, 8, 5), dark);
      b.cyl(const V3(0, 25, -15), const V3(0, 8, -19), 1.8, dark, sides: 6);
      legs(const [(-3.5, 11.0), (3.5, 11.0), (-3.5, -11.0), (3.5, -11.0)], 16, 16, 2.6, c);
    default:
      b.box(const V3(0, 6, 0), const V3(8, 8, 12), c);
  }
}

/// The same faces, stretched or squashed about a point: a sphere becomes an egg, a tube becomes an oval.
List<Poly> _stretch(List<Poly> ps, V3 s, V3 at) => [
      for (final p in ps)
        Poly([for (final v in p.pts) V3(at.x + (v.x - at.x) * s.x, at.y + (v.y - at.y) * s.y, at.z + (v.z - at.z) * s.z)], V3(p.n.x / s.x, p.n.y / s.y, p.n.z / s.z).unit, p.color, p.id, shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias, order: p.order, group: p.group)
    ];

/// What a person in the city is busy with: the thing in front of them and what comes from it (grain, steam, water).
void _activityProps(MeshBuilder b, ResidentFigure f, double t) {
  if (f.activity.isEmpty) return;
  final dx = math.sin(f.yaw), dz = math.cos(f.yaw);
  V3 at(double fwd, double y, [double side = 0]) => V3(f.x + dx * fwd + dz * side, y, f.z + dz * fwd - dx * side);
  final saved = b.id;
  b.id = 0;
  switch (f.activity) {
    case 'feed':
      b.cyl(at(14, 0, 8), at(14, 9, 8), 4.5, const Color(0xFF8B5E3C), r1: 5.5, sides: 10);
      for (var i = 0; i < 9; i++) {
        final ph = (t * 0.9 + i / 9) % 1.0;
        b.ball(at(10 + ph * 26, 26 - ph * 22, math.sin(i * 2.1) * 4), 0.9, const Color(0xFFEAB308), shine: 0, lat: 3, lon: 5);
      }
    case 'cook':
      b.box(at(18, 9), const V3(22, 18, 14), const Color(0xFF3F3F46), shine: 0.2);
      b.box(at(18, 18.4), const V3(20, 0.8, 12), const Color(0xFFEA580C));
      b.alpha = 0.3;
      for (var i = 0; i < 6; i++) {
        final ph = (t * 0.5 + i / 6) % 1.0;
        b.ball(at(18 + math.sin(i * 1.9) * 3, 22 + ph * 22), 2 + ph * 4, const Color(0xFFD4D4D8), shine: 0, lat: 3, lon: 6);
      }
      b.alpha = 1;
    case 'wash':
      b.cyl(at(20, 0, -10), at(20, 8, -10), 4, const Color(0xFF38BDF8), r1: 5, sides: 10);
      for (var i = 0; i < 12; i++) {
        final ph = (t * 1.4 + i / 12) % 1.0;
        b.ball(at(8 + ph * 24, 30 - ph * ph * 26, 6), 0.8, const Color(0xFF7DD3FC), shine: 0.3, lat: 3, lon: 5);
      }
    case 'water':
      b.box(at(12, 22, 7), const V3(8, 6, 6), const Color(0xFF15803D), shine: 0.2);
      for (var i = 0; i < 10; i++) {
        final ph = (t * 1.2 + i / 10) % 1.0;
        b.ball(at(18 + ph * 8, 22 - ph * 22, 7), 0.7, const Color(0xFF7DD3FC), shine: 0.3, lat: 3, lon: 5);
      }
    case 'teach':
      b.box(at(22, 26), const V3(26, 22, 1.4), const Color(0xFF14532D), shine: 0.1);
      b.box(at(22.8, 26), const V3(22, 18, 0.4), const Color(0xFFF1F5F9));
    case 'duty':
      b.box(at(0, 74, 0), const V3(0.1, 0.1, 0.1), Colors.transparent);
  }
  b.id = saved;
}

/// Draws a person (the real character when it has been read) for scenes made in other files.
void drawPerson(MeshBuilder b, PersonPose p, double t, PersonStyle style, {int id = 0, bool close = false, Color? tint}) => _figure(b, p, t, style, id: id, close: close, tint: tint);

/// A person of the house: the real character from its .glb file when that has been read, else a plain figure meanwhile.
void _figure(MeshBuilder b, PersonPose p, double t, PersonStyle style, {int id = 0, bool close = false, Color? tint}) {
  if (p.crawl) {
    // Worn out: the person lies face down on the ground and crawls, drawn upright and then turned over onto the ground.
    final up = MeshBuilder();
    _figure(up, PersonPose(room: p.room, x: 0, z: 0, yaw: 0, walking: p.walking, phase: p.phase * 0.5), t, style, id: id, close: close, tint: tint);
    b.polys.addAll(transformPolys(up.polys, rx: math.pi / 2, ry: p.yaw, t: V3(p.x, 9, p.z)));
    return;
  }
  final av = GlbAvatar.ready(style.avatar);
  if (av == null) {
    final plain = style.avatar == 'xbot' ? const PersonStyle() : PersonStyle(skin: style.skin, hair: style.hair, shirt: style.shirt, pants: style.pants);
    _person(b, p, t, style: plain, id: id);
    return;
  }
  b.polys.addAll(av.polys(time: t, x: p.x, z: p.z, yaw: p.yaw, walking: p.walking, running: p.running, lift: p.lift, walkedUnits: p.walking && !p.running && p.phase > 0 ? p.phase * 12 : null, id: id, close: close, tint: tint));
}

/// An adult person for the house tour, about 5 feet 8 inches tall, made of rounded parts (limbs with real joints, an
/// oval body and head, shoulders, hands, shoes) rather than blocks. Feet on y = 0, facing +z until turned. The hips are
/// worked out from the legs so the foot that is down always stands on the floor, and the knees bend as they walk.
void _person(MeshBuilder b, PersonPose p, double t, {PersonStyle style = const PersonStyle(), int id = 0}) {
  final pb = MeshBuilder();
  pb.id = id;
  // Each part is one sorted piece, and the person is in the same tier as the furniture: depth decides what hides what.
  pb.grouped = true;
  final skin = style.skin, skinShade = Color.lerp(style.skin, Colors.black, 0.16)!, hair = style.hair, shirt = style.shirt, pants = style.pants;
  const shoe = Color(0xFF1B1B1D);
  final stride = p.walking ? math.sin(p.phase * math.pi) : 0.0;

  // The legs first: their angles decide how high the hips are.
  final swing = [for (final s in const [-1.0, 1.0]) stride * s * 0.6];
  final knee = [for (final a in swing) p.walking ? math.max(0.0, -a) * 1.5 + 0.1 : 0.04];
  final extent = [for (var i = 0; i < 2; i++) 16 * math.cos(swing[i]) + 15.5 * math.cos(swing[i] + knee[i])];
  final hy = math.max(extent[0], extent[1]) + 3.3;

  // A rounded part: built at the origin, stretched, then moved to [at].
  void part(void Function(MeshBuilder m) draw, V3 stretch, V3 at) {
    final m = MeshBuilder();
    m.id = id;
    m.grouped = true;
    draw(m);
    pb.polys.addAll([for (final q in _stretch(m.polys, stretch, V3.zero)) Poly([for (final v in q.pts) v + at], q.n, q.color, q.id, shine: q.shine, alpha: q.alpha, twoSided: q.twoSided, layer: q.layer, bias: q.bias, order: q.order, group: q.group)]);
  }

  // A limb piece from [a] to [c], thicker at [a], with a round joint at [c].
  void cap(V3 a, V3 c, double ra, double rc, Color col) {
    pb.cyl(a, c, ra, col, r1: rc, sides: 10, caps: false);
    pb.ball(c, rc * 1.04, col, lat: 4, lon: 8);
  }

  for (var i = 0; i < 2; i++) {
    final s = i == 0 ? -1.0 : 1.0;
    final hip = V3(s * 2.9, hy, 0);
    final kneeAt = hip + V3(0, -16 * math.cos(swing[i]), -16 * math.sin(swing[i]));
    final a2 = swing[i] + knee[i];
    final ankle = kneeAt + V3(0, -15.5 * math.cos(a2), -15.5 * math.sin(a2));
    pb.ball(hip, 3.6, pants, lat: 4, lon: 8);
    cap(hip, kneeAt, 3.5, 2.7, pants);
    cap(kneeAt, ankle, 2.6, 1.9, pants);
    // The shoe: a long rounded shape, toe forward, tipping with the shin.
    part((m) => m.ball(V3.zero, 2.6, shoe, shine: 0.15, lat: 4, lon: 8), const V3(0.95, 0.62, 2.2), ankle + const V3(0, -1.6, 2.0));
    part((m) => m.ball(V3.zero, 2.6, const Color(0xFFE5E7EB), lat: 3, lon: 8), const V3(0.97, 0.18, 2.25), ankle + const V3(0, -2.9, 2.0));
  }
  // The body: hips, a waist and chest like an oval, shoulders, neck.
  part((m) => m.ball(V3.zero, 5.2, pants, lat: 4, lon: 10), const V3(1.12, 0.78, 0.76), V3(0, hy + 1.2, 0));
  part((m) => m.cyl(const V3(0, 0, 0), const V3(0, 17, 0), 4.9, shirt, r1: 6.5, sides: 12, caps: false), const V3(1.0, 1.0, 0.62), V3(0, hy + 2.5, 0));
  part((m) => m.cyl(const V3(0, 0, 0), const V3(0, 1.4, 0), 5.1, const Color(0xFF3A3A3F), sides: 12, caps: false), const V3(1.0, 1.0, 0.64), V3(0, hy + 2.4, 0));
  part((m) => m.ball(V3.zero, 6.7, shirt, lat: 4, lon: 10), const V3(1.12, 0.5, 0.62), V3(0, hy + 19.6, 0));
  pb.cyl(V3(0, hy + 20.5, 0.2), V3(0, hy + 24.2, 0.5), 2.0, skin, sides: 8);
  // The head: an egg with a chin, hair, ears, eyes, brows, nose and mouth.
  final head = V3(0, hy + 29, 0.6);
  part((m) => m.ball(V3.zero, 4.7, skin, lat: 6, lon: 12), const V3(0.9, 1.08, 0.98), head);
  part((m) => m.ball(V3.zero, 3.0, skin, lat: 4, lon: 8), const V3(1.0, 0.8, 0.95), head + const V3(0, -3.4, 1.0));
  part((m) => m.ball(V3.zero, 5.0, hair, lat: 5, lon: 10), const V3(0.93, 0.92, 1.0), head + const V3(0, 1.5, -0.9));
  part((m) => m.ball(V3.zero, 3.6, hair, lat: 3, lon: 8), const V3(1.1, 0.5, 0.7), head + const V3(0, 3.7, 2.6));
  for (final s in const [-1.0, 1.0]) {
    pb.ball(head + V3(s * 4.2, -0.2, 0), 1.0, skin, lat: 3, lon: 6);
    part((m) => m.ball(V3.zero, 1.0, Colors.white, lat: 3, lon: 6), const V3(1.1, 0.8, 0.6), head + V3(s * 1.8, 0.4, 4.15));
    pb.ball(head + V3(s * 1.8, 0.4, 4.5), 0.5, const Color(0xFF15171C), lat: 3, lon: 6);
    pb.box(head + V3(s * 1.8, 1.9, 4.2), const V3(2.1, 0.4, 0.5), hair);
  }
  part((m) => m.ball(V3.zero, 1.0, skinShade, lat: 3, lon: 6), const V3(0.8, 1.1, 1.2), head + const V3(0, -1.2, 4.7));
  pb.box(head + const V3(0, -3.3, 4.0), const V3(2.6, 0.45, 0.5), const Color(0xFF8A3B3B));

  // Arms: they swing against the legs; with the cup or the remote the right arm comes up.
  for (final s in const [-1.0, 1.0]) {
    final sh = V3(s * 7.0, hy + 19.3, 0);
    var a1 = -stride * s * 0.5;
    var elbow = p.walking ? -0.45 : -0.12;
    if (s > 0 && p.holding) {
      a1 = -0.8;
      elbow = -1.2;
    }
    if (s > 0 && p.remote) {
      a1 = -1.0;
      elbow = -0.6;
    }
    if (s > 0 && p.pointing) {
      a1 = -1.55;
      elbow = -0.1;
    }
    final elbowAt = sh + V3(0, -11.5 * math.cos(a1), -11.5 * math.sin(a1));
    final a2 = a1 + elbow;
    final wrist = elbowAt + V3(0, -10.5 * math.cos(a2), -10.5 * math.sin(a2));
    cap(sh, elbowAt, 2.8, 2.3, shirt);
    cap(elbowAt, wrist, 2.1, 1.6, skin);
    part((m) => m.ball(V3.zero, 1.9, skin, lat: 4, lon: 8), const V3(0.85, 1.15, 0.9), wrist + const V3(0, -1.3, 0.2));
    if (s > 0 && p.holding) {
      pb.cyl(wrist + const V3(0, -2.6, 0), wrist + const V3(0, 2.6, 0), 1.7, const Color(0xFF38BDF8), shine: 0.5, sides: 8);
    }
    if (s > 0 && p.remote) {
      pb.box(wrist + const V3(0, -0.4, 2.6), const V3(2.2, 1.1, 6.4), const Color(0xFF15171C), shine: 0.3);
      pb.box(wrist + const V3(0, 0.2, 3.8), const V3(1.4, 0.3, 1.0), const Color(0xFFEF4444));
    }
  }
  b.polys.addAll(transformPolys(pb.polys, ry: p.yaw, t: V3(p.x, p.lift, p.z)));
}

const Color kChromeC = Color(0xFFC9CED6);

Color _shade(Color c, double t) => Color.lerp(c, t < 0 ? Colors.black : Colors.white, t.abs())!;

/// Builds a piece of furniture centred on the origin, standing on y = 0, front towards +z.
/// The same pieces, smaller (indoor furniture is 80 percent of its first drawing so rooms are not crowded).
List<Poly> _shrink(List<Poly> ps, double k) => [for (final p in ps) Poly([for (final v in p.pts) V3(v.x * k, v.y * k, v.z * k)], p.n, p.color, p.id, shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias, order: p.order, group: p.group)];

void _furniture(MeshBuilder b, String kind, Color c) {
  final dark = _shade(c, -0.25), light = _shade(c, 0.2);
  switch (kind) {
    case 'bed':
      b.box(const V3(0, 6, 0), const V3(60, 12, 80), const Color(0xFF6B4A32), shine: 0.1);
      b.box(const V3(0, 14, 2), const V3(58, 9, 74), c, shine: 0.05);
      b.box(const V3(-14, 20, -28), const V3(24, 6, 14), const Color(0xFFF2F2EE));
      b.box(const V3(14, 20, -28), const V3(24, 6, 14), const Color(0xFFF2F2EE));
      b.box(const V3(0, 22, -39), const V3(60, 30, 3), const Color(0xFF6B4A32), shine: 0.1);
      b.box(const V3(0, 19, 14), const V3(58.4, 1.6, 50), light);
    case 'nightstand':
      b.box(const V3(0, 8, 0), const V3(16, 16, 16), c, shine: 0.1);
      b.box(const V3(0, 11, 8.2), const V3(12, 5, 0.4), dark);
      b.box(const V3(0, 18.5, 0), const V3(3, 5, 3), const Color(0xFFD9C9A8));
      b.box(const V3(0, 23, 0), const V3(9, 5, 9), const Color(0xFFFFF1A8));
    case 'wardrobe':
      b.box(const V3(0, 36, 0), const V3(44, 72, 20), c, shine: 0.1);
      b.box(const V3(0, 36, 10.2), const V3(0.6, 68, 0.4), dark);
      b.box(const V3(-3, 36, 10.6), const V3(1.4, 8, 1), const Color(0xFFE5C07B), shine: 0.8);
      b.box(const V3(3, 36, 10.6), const V3(1.4, 8, 1), const Color(0xFFE5C07B), shine: 0.8);
    case 'desk':
      b.box(const V3(0, 28, 0), const V3(48, 2, 24), c, shine: 0.1);
      b.box(const V3(-22, 14, 0), const V3(2, 28, 22), dark);
      b.box(const V3(22, 14, 0), const V3(2, 28, 22), dark);
      b.box(const V3(0, 40, -6), const V3(22, 14, 2), const Color(0xFF1B1D22), shine: 0.5);
      b.box(const V3(0, 31, -6), const V3(6, 4, 4), const Color(0xFF3F3F46));
    case 'rug':
      b.box(const V3(0, 0.3, 0), const V3(70, 0.6, 50), c, split: 2);
      b.box(const V3(0, 0.62, 0), const V3(62, 0.2, 42), light);
    case 'sofa':
      b.box(const V3(0, 8, 0), const V3(80, 16, 32), c, shine: 0.05);
      b.box(const V3(0, 22, -12), const V3(80, 26, 8), dark, shine: 0.05);
      b.box(const V3(-37, 16, 0), const V3(6, 14, 32), dark, shine: 0.05);
      b.box(const V3(37, 16, 0), const V3(6, 14, 32), dark, shine: 0.05);
      b.box(const V3(-14, 17, 4), const V3(26, 4, 22), light);
      b.box(const V3(14, 17, 4), const V3(26, 4, 22), light);
    case 'armchair':
      b.box(const V3(0, 8, 0), const V3(30, 16, 30), c, shine: 0.05);
      b.box(const V3(0, 22, -11), const V3(30, 24, 8), dark, shine: 0.05);
      b.box(const V3(-13, 15, 2), const V3(5, 12, 26), dark);
      b.box(const V3(13, 15, 2), const V3(5, 12, 26), dark);
    case 'coffee':
      b.box(const V3(0, 14, 0), const V3(40, 2, 24), c, shine: 0.2);
      for (final (x, z) in const [(-17.0, -9.0), (17.0, -9.0), (-17.0, 9.0), (17.0, 9.0)]) {
        b.box(V3(x, 6.5, z), const V3(2, 13, 2), dark);
      }
      b.box(const V3(4, 16.2, 0), const V3(8, 2, 6), const Color(0xFFE5E7EB), shine: 0.5);
    case 'tvstand':
      // A low media cabinet. The TV is never on it: TVs hang on the wall.
      b.box(const V3(0, 9, 0), const V3(56, 18, 18), c, shine: 0.1);
      b.box(const V3(0, 11, 9.2), const V3(52, 8, 0.4), dark);
      b.box(const V3(0, 19, 0), const V3(20, 2, 8), const Color(0xFF2B2D33));
    case 'dining':
      b.box(const V3(0, 28, 0), const V3(56, 2, 36), c, shine: 0.2);
      for (final (x, z) in const [(-25.0, -15.0), (25.0, -15.0), (-25.0, 15.0), (25.0, 15.0)]) {
        b.box(V3(x, 13, z), const V3(3, 26, 3), dark);
      }
    case 'chair':
      b.box(const V3(0, 16, 0), const V3(18, 2, 18), c, shine: 0.1);
      b.box(const V3(0, 28, -8), const V3(18, 22, 2), c, shine: 0.1);
      for (final (x, z) in const [(-7.0, -7.0), (7.0, -7.0), (-7.0, 7.0), (7.0, 7.0)]) {
        b.box(V3(x, 7.5, z), const V3(1.6, 15, 1.6), dark);
      }
    case 'plant':
      b.cyl(const V3(0, 0, 0), const V3(0, 9, 0), 5, const Color(0xFFB45309), sides: 10);
      b.ball(const V3(0, 17, 0), 8, const Color(0xFF3F8F4F), lat: 5, lon: 8);
      b.ball(const V3(3, 22, 2), 5, const Color(0xFF4FA860), lat: 4, lon: 8);
    case 'lamp':
      b.cyl(const V3(0, 0, 0), const V3(0, 1, 0), 4.5, const Color(0xFF2B2D33), sides: 10);
      b.cyl(const V3(0, 1, 0), const V3(0, 48, 0), 0.7, const Color(0xFF2B2D33), sides: 6);
      b.cyl(const V3(0, 46, 0), const V3(0, 58, 0), 6, const Color(0xFFFFF1A8), sides: 12, r1: 3.5);
    case 'console':
      b.box(const V3(0, 24, 0), const V3(44, 2, 14), c, shine: 0.15);
      b.box(const V3(-20, 11.5, 0), const V3(2, 23, 12), dark);
      b.box(const V3(20, 11.5, 0), const V3(2, 23, 12), dark);
      b.box(const V3(0, 8, 0), const V3(38, 1.4, 12), dark);
    case 'shelf':
      b.box(const V3(0, 30, 0), const V3(36, 60, 12), c, shine: 0.1);
      for (var i = 0; i < 4; i++) {
        b.box(V3(0, 10 + i * 15.0, 1), const V3(33, 11, 10), const Color(0xFF2B2D33));
        b.box(V3(-8 + (i % 2) * 6.0, 10 + i * 15.0, 2), const V3(5, 9, 8), [const Color(0xFFB91C1C), const Color(0xFF1D4ED8), const Color(0xFF15803D), const Color(0xFFD97706)][i]);
        b.box(V3(4 + (i % 2) * 4.0, 10 + i * 15.0, 2), const V3(8, 9, 8), [const Color(0xFFD97706), const Color(0xFF15803D), const Color(0xFFB91C1C), const Color(0xFF1D4ED8)][i]);
      }
    case 'tree':
      b.cyl(const V3(0, 0, 0), const V3(0, 34, 0), 4.2, const Color(0xFF6B4A32), r1: 3.0, sides: 8);
      b.ball(const V3(0, 48, 0), 17, const Color(0xFF3F8F4F), lat: 5, lon: 9);
      b.ball(const V3(9, 40, 4), 11, const Color(0xFF4FA860), lat: 4, lon: 8);
      b.ball(const V3(-8, 42, -5), 12, const Color(0xFF357A44), lat: 4, lon: 8);
    case 'pine':
      b.cyl(const V3(0, 0, 0), const V3(0, 10, 0), 3, const Color(0xFF6B4A32), sides: 8);
      for (var i = 0; i < 3; i++) {
        b.cyl(V3(0, 8 + i * 14.0, 0), V3(0, 26 + i * 14.0, 0), 14 - i * 3.5, const Color(0xFF2F6B3C), r1: 1.5, sides: 10);
      }
    case 'bush':
      b.ball(const V3(0, 8, 0), 9, const Color(0xFF3A7D44), lat: 4, lon: 8);
      b.ball(const V3(5, 6, 3), 6.5, const Color(0xFF4FA860), lat: 4, lon: 8);
    case 'flowers':
      for (final (x, z, col) in const [(-6.0, -4.0, Color(0xFFF472B6)), (5.0, -5.0, Color(0xFFFACC15)), (0.0, 1.0, Color(0xFFEF4444)), (-5.0, 5.0, Color(0xFFA78BFA)), (6.0, 4.0, Color(0xFFFFFFFF))]) {
        b.cyl(V3(x, 0, z), V3(x, 7, z), 0.4, const Color(0xFF2F6B3C), sides: 5);
        b.ball(V3(x, 8, z), 2.2, col, lat: 3, lon: 6);
      }
    case 'fence':
      for (final x in const [-30.0, -10.0, 10.0, 30.0]) {
        b.box(V3(x, 9, 0), const V3(2.2, 18, 2.2), c, shine: 0.05);
      }
      b.box(const V3(0, 6, 0), const V3(64, 2, 1.2), dark);
      b.box(const V3(0, 13, 0), const V3(64, 2, 1.2), dark);
    case 'lamppost':
      b.cyl(const V3(0, 0, 0), const V3(0, 52, 0), 1.3, const Color(0xFF2B2D33), sides: 5);
      b.cyl(const V3(0, 0, 0), const V3(0, 3, 0), 3.5, const Color(0xFF2B2D33), sides: 6);
    case 'bench':
      b.box(const V3(0, 12, 0), const V3(44, 2, 14), c, shine: 0.1);
      b.box(const V3(0, 20, -6), const V3(44, 10, 2), c, shine: 0.1);
      b.box(const V3(-18, 6, 0), const V3(3, 12, 12), const Color(0xFF2B2D33));
      b.box(const V3(18, 6, 0), const V3(3, 12, 12), const Color(0xFF2B2D33));
    case 'car':
      b.box(const V3(0, 10, 0), const V3(84, 10, 38), c, shine: 0.4);
      b.box(const V3(-4, 20, 0), const V3(46, 10, 34), c, shine: 0.4);
      b.box(const V3(-4, 20.4, 0), const V3(47, 7, 34.4), const Color(0xFF9BD3F5), shine: 0.6);
      b.box(const V3(41.5, 11, -12), const V3(1, 3, 6), const Color(0xFFFFF1A8));
      b.box(const V3(41.5, 11, 12), const V3(1, 3, 6), const Color(0xFFFFF1A8));
      for (final x in const [-26.0, 26.0]) {
        b.cyl(V3(x, 5, -18), V3(x, 5, -21), 5.5, const Color(0xFF15171C), sides: 12);
        b.cyl(V3(x, 5, 18), V3(x, 5, 21), 5.5, const Color(0xFF15171C), sides: 12);
      }
    case 'road' || 'roadturn' || 'roadtee' || 'roadcross':
      _roadPiece(b, kind);
    case 'roundabout':
      // A round road with a grass island in the middle; cars turn round it.
      b.cyl(const V3(0, 0, 0), const V3(0, 0.9, 0), 38, const Color(0xFF3F4450), sides: 12);
      b.cyl(const V3(0, 1.1, 0), const V3(0, 2.4, 0), 12, const Color(0xFF6B7280), sides: 8);
      b.cyl(const V3(0, 2.4, 0), const V3(0, 2.8, 0), 10.5, const Color(0xFF4F9D5B), sides: 8);
      b.ball(const V3(0, 8, 0), 5, const Color(0xFF3F8F4D), lat: 3, lon: 6);
      b.cyl(const V3(0, 2.8, 0), const V3(0, 6, 0), 0.8, const Color(0xFF6B4A32), sides: 5);
    case 'house2' || 'shop' || 'hospital' || 'firestation' || 'school':
      // Every building is half as big again as it was drawn, so there is room for the people to walk round it.
      final m0 = MeshBuilder()
        ..id = b.id
        ..grouped = true
        ..order = b.order;
      _building(m0, kind, c);
      b.polys.addAll(_stretch(m0.polys, const V3(1.5, 1.35, 1.5), V3.zero));
    case 'bighouse':
      // The same house, bigger: wider, taller and deeper. Its TVs are added with the moving screens.
      final m = MeshBuilder()
        ..id = b.id
        ..grouped = true
        ..order = b.order;
      _building(m, 'house2', c);
      b.polys.addAll(_stretch(m.polys, const V3(2.2, 1.8, 2.0), V3.zero));
    case 'pole':
      // A wooden electric pole with a cross arm, a transformer and a street light on an arm (the light itself is added with the scene).
      b.cyl(const V3(0, 0, 0), const V3(0, 124, 0), 2.6, const Color(0xFF6B4A32), r1: 2.0, sides: 5);
      b.box(const V3(0, 116, 0), const V3(46, 3, 3), const Color(0xFF5E4630));
      for (final x in const [-20.0, 0.0, 20.0]) {
        b.cyl(V3(x, 116, 0), V3(x, 121, 0), 1.1, const Color(0xFFF1F5F9), sides: 4);
      }
      b.cyl(const V3(4, 96, 0), const V3(4, 108, 0), 5.5, const Color(0xFF6B7280), sides: 6);
      b.box(const V3(12, 86, 0), const V3(20, 2, 2), const Color(0xFF3F3F46));
    case 'crate':
      b.box(const V3(0, 7, 0), const V3(26, 14, 26), const Color(0xFFC49A62), shine: 0.05);
      b.box(const V3(0, 14.4, 0), const V3(27, 1.4, 27), const Color(0xFF8B5E34));
      b.ball(const V3(-5, 17, 0), 3.4, const Color(0xFFEF4444), shine: 0.3, lat: 3, lon: 5);
      b.ball(const V3(5, 17, 2), 3.4, const Color(0xFFF59E0B), shine: 0.3, lat: 3, lon: 5);
    case 'billboard':
      {
        b.startGroup();
        for (final x in const [-26.0, 26.0]) {
          b.cyl(V3(x, 0, -1), V3(x, 40, -1), 1.6, const Color(0xFF3F3F46), sides: 8);
        }
        b.box(const V3(0, 47, 0), const V3(72, 32, 3), const Color(0xFF1F2937), shine: 0.3);
        b.endGroup();
      }
    case 'tower' || 'hq':
      {
        b.startGroup();
        final big = kind == 'hq';
        final bw = big ? 170.0 : 100.0, bd = big ? 90.0 : 70.0;
        final hgt = big ? 150.0 : _towerHeight(c);
        const bodies = [Color(0xFF3B5B7A), Color(0xFF475569), Color(0xFF2F4F4F), Color(0xFF5B6B8C), Color(0xFF6B7280), Color(0xFF334155)];
        final body = big ? const Color(0xFFE5E7EB) : bodies[(c.toARGB32() >> 4) % bodies.length];
        const glass = Color(0xFF9BD3F5);
        void bands(double bwid, double bdep, double y0, double y1) {
          for (var y = y0; y < y1; y += 22) {
            _patch(b, V3(0, y, bdep / 2 + 0.2), const V3(1, 0, 0), const V3(0, 1, 0), bwid - 8, 9, glass, const V3(0, 0, 1), shine: 0.6);
            _patch(b, V3(0, y, -bdep / 2 - 0.2), const V3(-1, 0, 0), const V3(0, 1, 0), bwid - 8, 9, glass, const V3(0, 0, -1), shine: 0.6);
            _patch(b, V3(bwid / 2 + 0.2, y, 0), const V3(0, 0, -1), const V3(0, 1, 0), bdep - 8, 9, glass, const V3(1, 0, 0), shine: 0.6);
            _patch(b, V3(-bwid / 2 - 0.2, y, 0), const V3(0, 0, 1), const V3(0, 1, 0), bdep - 8, 9, glass, const V3(-1, 0, 0), shine: 0.6);
          }
        }

        b.box(V3(0, hgt / 2, 0), V3(bw, hgt, bd), body, shine: 0.25);
        bands(bw, bd, 20, hgt - 8);
        if (big) {
          b.box(V3(0, hgt + 60, 0), V3(bw * 0.66, 120, bd * 0.66), const Color(0xFFF1F5F9), shine: 0.25);
          bands(bw * 0.66, bd * 0.66, hgt + 16, hgt + 112);
          b.box(V3(0, hgt + 124, 0), V3(bw * 0.7, 8, bd * 0.7), const Color(0xFFF5C14B), shine: 0.4);
        } else {
          b.box(V3(0, hgt + 3, 0), V3(bw + 4, 6, bd + 4), const Color(0xFF1F2937));
          b.box(V3(bw * 0.2, hgt + 12, 0), V3(bw * 0.3, 12, bd * 0.3), const Color(0xFF9CA3AF));
        }
        // A big board on the roof, playing the ads.
        final roof = big ? hgt + 128.0 : hgt + 6.0;
        for (final x in [-(bw * 0.3), bw * 0.3]) {
          b.box(V3(x, roof + 8, 0), const V3(3, 16, 3), const Color(0xFF3F3F46));
        }
        b.box(V3(0, roof + 34, 0), V3(big ? 112 : 84, 38, 3), const Color(0xFF0B1F4B), shine: 0.3);
        // The entrance: glass doors with a yellow canopy, so the building can be walked into.
        _patch(b, V3(0, 17, bd / 2 + 0.6), const V3(1, 0, 0), const V3(0, 1, 0), 34, 34, const Color(0xFF1F2937), const V3(0, 0, 1), shine: 0.5);
        _patch(b, V3(0, 17, bd / 2 + 0.7), const V3(0, 1, 0).cross(const V3(0, 0, 1)), const V3(0, 1, 0), 1.2, 34, const Color(0xFF9BD3F5), const V3(0, 0, 1), shine: 0.6);
        b.box(V3(0, 38, bd / 2 + 5), const V3(46, 3, 10), const Color(0xFFF5C14B), shine: 0.3);
        b.endGroup();
      }
    case 'store':
      b.startGroup();
      b.box(const V3(0, 28, 0), const V3(130, 56, 80), c, shine: 0.2);
      b.box(const V3(0, 58, 0), const V3(134, 4, 84), const Color(0xFF1F2937));
      _patch(b, const V3(0, 24, 40.2), const V3(1, 0, 0), const V3(0, 1, 0), 112, 30, const Color(0xFF9BD3F5), const V3(0, 0, 1), shine: 0.6);
      b.box(const V3(0, 44, 46), const V3(130, 4, 14), const Color(0xFFDC2626));
      b.box(const V3(0, 76, 36), const V3(112, 22, 3), const Color(0xFF111827));
      b.endGroup();
    case 'dmv':
      b.startGroup();
      b.box(const V3(0, 28, 0), const V3(130, 56, 80), const Color(0xFFE2E8F0), shine: 0.2);
      b.box(const V3(0, 58, 0), const V3(134, 4, 84), const Color(0xFF1E3A8A));
      _patch(b, const V3(0, 24, 40.2), const V3(1, 0, 0), const V3(0, 1, 0), 112, 30, const Color(0xFF9BD3F5), const V3(0, 0, 1), shine: 0.6);
      b.box(const V3(0, 44, 46), const V3(130, 4, 14), const Color(0xFF2563EB));
      b.box(const V3(0, 76, 36), const V3(112, 22, 3), const Color(0xFF1E3A8A));
      b.box(const V3(0, 76, 37.8), const V3(100, 14, 0.6), const Color(0xFFFACC15));
      b.box(const V3(-28, 76, 38.3), const V3(14, 9, 0.5), const Color(0xFF1E3A8A));
      b.endGroup();
    case 'ubstation':
      b.startGroup();
      for (final x in const [-52.0, 52.0]) {
        for (final z in const [-22.0, 22.0]) {
          b.cyl(V3(x, 0, z), V3(x, 50, z), 2.2, const Color(0xFF334155), sides: 6);
        }
      }
      b.box(const V3(0, 52, 0), const V3(124, 4, 60), const Color(0xFF111827), shine: 0.3);
      b.box(const V3(0, 55, 0), const V3(126, 2, 62), const Color(0xFFFACC15));
      b.box(const V3(0, 26, -24), const V3(112, 46, 2), const Color(0xFF93C5FD), shine: 0.6);
      b.box(const V3(0, 11, -15), const V3(80, 4, 14), const Color(0xFF475569));
      b.box(const V3(0, 6, -15), const V3(76, 8, 3), const Color(0xFF334155));
      b.cyl(const V3(58, 0, 30), const V3(58, 92, 30), 2, const Color(0xFF3F3F46), sides: 6);
      b.box(const V3(58, 96, 30), const V3(38, 20, 3), const Color(0xFF111827));
      b.box(const V3(58, 96, 31.7), const V3(32, 6, 0.5), const Color(0xFFFACC15));
      b.box(const V3(58, 104, 31.7), const V3(32, 3, 0.5), const Color(0xFFFFFFFF));
      b.endGroup();
    case 'gasstation':
      b.startGroup();
      for (final x in const [-55.0, 55.0]) {
        for (final z in const [5.0, 35.0]) {
          b.cyl(V3(x, 0, z), V3(x, 46, z), 2.4, const Color(0xFFE5E7EB), sides: 6);
        }
      }
      b.box(const V3(0, 48, 20), const V3(130, 5, 50), const Color(0xFFDC2626), shine: 0.3);
      b.box(const V3(0, 51.5, 20), const V3(132, 2, 52), const Color(0xFFF5C14B));
      for (final x in const [-22.0, 22.0]) {
        b.box(V3(x, 9, 20), const V3(7, 18, 10), const Color(0xFFF3F4F6), shine: 0.3);
        b.box(V3(x, 15, 20.2), const V3(7.4, 6, 10.4), const Color(0xFFDC2626));
      }
      b.box(const V3(0, 19, -30), const V3(80, 38, 26), c, shine: 0.2);
      b.cyl(const V3(-70, 0, 34), const V3(-70, 95, 34), 2.2, const Color(0xFF3F3F46), sides: 6);
      b.box(const V3(-70, 96, 34), const V3(34, 22, 3), const Color(0xFF111827));
      b.endGroup();
    case 'townsign':
      b.startGroup();
      for (final x in const [-178.0, 178.0]) {
        b.cyl(V3(x, 0, 0), V3(x, 316, 0), 5.5, const Color(0xFF3F3F46), sides: 6);
      }
      b.box(const V3(0, 252, 0), const V3(366, 124, 6), const Color(0xFF0B1F4B), shine: 0.3);
      b.box(const V3(0, 316, 0), const V3(366, 6, 10), const Color(0xFFF5C14B));
      b.box(const V3(0, 188, 0), const V3(366, 6, 10), const Color(0xFFF5C14B));
      b.endGroup();
    case 'adboard':
      b.startGroup();
      for (final x in const [-150.0, 150.0]) {
        b.cyl(V3(x, 0, 0), V3(x, 205, 0), 4.5, const Color(0xFF3F3F46), sides: 6);
      }
      b.box(const V3(0, 142, 0), const V3(324, 114, 6), const Color(0xFF0B1F4B), shine: 0.3);
      b.box(const V3(0, 202, 0), const V3(324, 6, 10), const Color(0xFFF5C14B));
      b.box(const V3(0, 82, 0), const V3(324, 6, 10), const Color(0xFFF5C14B));
      b.endGroup();
    case 'cornersign':
      b.startGroup();
      for (final x in const [-55.0, 55.0]) {
        b.cyl(V3(x, 0, 0), V3(x, 125, 0), 3, const Color(0xFF3F3F46), sides: 6);
      }
      b.box(const V3(0, 122, 0), const V3(150, 70, 5), const Color(0xFF0B1F4B), shine: 0.3);
      b.box(const V3(0, 159, 0), const V3(152, 4, 7), const Color(0xFFF5C14B));
      b.endGroup();
    case 'firetruck':
      b.box(const V3(0, 11, 0), const V3(96, 14, 38), const Color(0xFFDC2626), shine: 0.3);
      b.box(const V3(36, 22, 0), const V3(22, 12, 34), const Color(0xFFDC2626), shine: 0.3);
      b.box(const V3(37.5, 23, 0), const V3(20, 7, 34.4), const Color(0xFF9BD3F5), shine: 0.6);
      b.box(const V3(-10, 22, 0), const V3(62, 2.4, 8), const Color(0xFF9CA3AF));
      for (var i = 0; i < 6; i++) {
        b.box(V3(-34 + i * 11.0, 24, 0), const V3(1.2, 4, 7), const Color(0xFF9CA3AF));
      }
      b.box(const V3(36, 30, 0), const V3(8, 2, 16), const Color(0xFF3B82F6));
      b.box(const V3(0, 11.5, 19.3), const V3(90, 2, 0.5), const Color(0xFFF3E7A1));
      for (final x in const [-32.0, -8.0, 34.0]) {
        b.cyl(V3(x, 6, -19), V3(x, 6, -22.5), 6, const Color(0xFF15171C), sides: 12);
        b.cyl(V3(x, 6, 19), V3(x, 6, 22.5), 6, const Color(0xFF15171C), sides: 12);
      }
    case 'ambulance':
      b.box(const V3(0, 14, 0), const V3(84, 18, 38), Colors.white, shine: 0.4);
      b.box(const V3(30, 22, 0), const V3(24, 12, 34), Colors.white, shine: 0.4);
      b.box(const V3(31.5, 23, 0), const V3(22, 7, 34.4), const Color(0xFF9BD3F5), shine: 0.6);
      b.box(const V3(0, 14, 19.3), const V3(84, 3, 0.5), const Color(0xFFDC2626));
      b.box(const V3(0, 14, -19.3), const V3(84, 3, 0.5), const Color(0xFFDC2626));
      b.box(const V3(-12, 14, 19.4), const V3(11, 3, 0.5), const Color(0xFFDC2626));
      b.box(const V3(-12, 14, 19.4), const V3(3, 11, 0.5), const Color(0xFFDC2626));
      b.box(const V3(30, 29, 0), const V3(8, 2, 16), const Color(0xFFEF4444));
      for (final x in const [-26.0, 26.0]) {
        b.cyl(V3(x, 6, -19), V3(x, 6, -22.5), 6, const Color(0xFF15171C), sides: 12);
        b.cyl(V3(x, 6, 19), V3(x, 6, 22.5), 6, const Color(0xFF15171C), sides: 12);
      }
    case 'dog' || 'cat' || 'cow' || 'sheep' || 'chicken' || 'horse':
      _animal(b, kind, c, 0);
    case 'pond':
      final m = MeshBuilder()
        ..id = b.id
        ..order = b.order
        ..grouped = true;
      m.cyl(const V3(0, 0, 0), const V3(0, 0.6, 0), 28, const Color(0xFF5CB3E8), shine: 0.8, sides: 22);
      b.polys.addAll(_stretch(m.polys, const V3(1.4, 1, 1), V3.zero));
      for (final (x, z) in const [(-34.0, -6.0), (30.0, 10.0), (-10.0, 24.0)]) {
        b.ball(V3(x, 1.2, z), 2.6, const Color(0xFF8A8F98), lat: 3, lon: 6);
      }
    case 'swing':
      b.cyl(const V3(-24, 38, 0), const V3(24, 38, 0), 1.6, const Color(0xFFB45309), sides: 8);
      for (final x in const [-24.0, 24.0]) {
        b.cyl(V3(x, 38, 0), V3(x, 0, 14), 1.4, const Color(0xFFB45309), sides: 6);
        b.cyl(V3(x, 38, 0), V3(x, 0, -14), 1.4, const Color(0xFFB45309), sides: 6);
      }
      for (final x in const [-5.0, 5.0]) {
        b.cyl(V3(x, 38, 0), V3(x, 15, 0), 0.3, const Color(0xFF2B2D33), sides: 4);
      }
      b.box(const V3(0, 14, 0), const V3(14, 1.5, 5), c);
    case 'shed':
      b.box(const V3(0, 14, 0), const V3(50, 28, 42), c, shine: 0.05);
      b.box(const V3(0, 30, 0), const V3(56, 3, 48), const Color(0xFF5E2D23));
      b.box(const V3(0, 11, 21.2), const V3(16, 22, 0.6), dark);
    case 'doghouse':
      b.box(const V3(0, 7, 0), const V3(24, 14, 22), c, shine: 0.05);
      b.box(const V3(0, 15.5, 0), const V3(28, 2.5, 26), const Color(0xFF5E2D23));
      b.box(const V3(0, 5, 11.2), const V3(9, 10, 0.6), const Color(0xFF1B1D22));
    default:
      b.box(const V3(0, 6, 0), const V3(10, 12, 10), c);
  }
}
