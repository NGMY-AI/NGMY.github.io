import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
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
const int idHApp = 720; // + 0 or 1 (or 2 and up for added outlets): what is plugged in
const int idHWallTv = 730;
const int idHExtra = 800; // + number: an outlet or switch the visitor added
const int idHToiletF = 710, idHSinkF = 711, idHTubF = 712, idHKSink = 713;

/// Edit modes: look, furniture, walls, floor, ceiling, doors.
Scene3D buildHomeRoom(HRoom r, {String mode = 'look', int selected = 0, int problems = 0}) {
  if (r.kind == 'outside') return _outside(r, problems);
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
  b.id = when('floor', idHFloorObj);
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

  // ── Walls ──
  b.id = when('walls', idHWallBack);
  b.box(V3(0, h / 2, -0.6), V3(w + 2.4, h, 1.2), wallCols[0], split: 3);
  b.id = when('walls', idHWallLeft);
  b.box(V3(-w / 2 - 0.6, h / 2, d / 2), V3(1.2, h, d), wallCols[1], split: 3);
  b.id = when('walls', idHWallRight);
  b.box(V3(w / 2 + 0.6, h / 2, d / 2), V3(1.2, h, d), wallCols[2], split: 3);
  info[idHWallBack] = const ObjInfo('Back wall', 'Pick a paint colour above to change this wall.', V3(0, 40, 0), 140);
  info[idHWallLeft] = const ObjInfo('Left wall', 'Pick a paint colour above to change this wall.', V3(-60, 40, 50), 140);
  info[idHWallRight] = const ObjInfo('Right wall', 'Pick a paint colour above to change this wall.', V3(60, 40, 50), 140);
  b.id = 0;
  // Baseboards.
  const base = Color(0xFFF7F4EC);
  b.box(V3(0, 2.5, 0.4), V3(w, 5, 0.8), base, shine: 0.1);
  b.box(V3(-w / 2 + 0.4, 2.5, d / 2), V3(0.8, 5, d), base, shine: 0.1);
  b.box(V3(w / 2 - 0.4, 2.5, d / 2), V3(0.8, 5, d), base, shine: 0.1);

  // ── Ceiling (seen through) ──
  b.id = when('ceiling', idHCeilObj);
  b.alpha = mode == 'ceiling' ? 0.6 : 0.4;
  b.box(V3(0, h + 0.6, d / 2), V3(w + 2.4, 1.2, d + 2), kCeilColors[r.ceiling], split: 2);
  b.alpha = 1;
  // Crown moulding where the walls meet the ceiling.
  b.id = 0;
  const crown = Color(0xFFFFFFFF);
  b.box(V3(0, h - 2, 1.0), V3(w, 3, 1.4), crown, shine: 0.2);
  b.box(V3(-w / 2 + 1, h - 2, d / 2), V3(1.4, 3, d), crown, shine: 0.2);
  b.box(V3(w / 2 - 1, h - 2, d / 2), V3(1.4, 3, d), crown, shine: 0.2);
  info[idHCeilObj] = ObjInfo('Ceiling', 'Pick a colour above to paint the ceiling.', V3(0, h, d / 2), 140);

  // ── Windows ──
  final rightHasDoor = r.doors.any((e) => e.wall == 'right');
  final winWall = rightHasDoor ? 'left' : 'right';
  if (r.kind != 'hall') {
    final win = MeshBuilder();
    win.box(const V3(0, 56, 0.5), const V3(34, 30, 1), const Color(0xFFF4F1EA));
    win.box(const V3(0, 56, 0.9), const V3(30, 26, 0.6), const Color(0xFF9BD3F5), shine: 0.5);
    win.box(const V3(0, 56, 1.3), const V3(30, 1.4, 0.4), const Color(0xFFF4F1EA));
    win.box(const V3(0, 56, 1.3), const V3(1.4, 26, 0.4), const Color(0xFFF4F1EA));
    final z = d * 0.55;
    b.polys.addAll(winWall == 'right' ? transformPolys(win.polys, ry: -math.pi / 2, t: V3(w / 2, 0, z)) : transformPolys(win.polys, ry: math.pi / 2, t: V3(-w / 2, 0, z)));
  }

  // ── Doors ──
  for (var i = 0; i < r.doors.length; i++) {
    final dr = r.doors[i];
    final ang = r.doorAngle[i] ?? (r.openDoors.contains(i) ? 1.25 : 0.0);
    final open = ang > 0.04;
    final db = MeshBuilder();
    db.id = idHDoor + i;
    db.box(const V3(0, 41, 0.45), const V3(31, 83, 0.9), const Color(0xFFF7F4EC));
    if (open) {
      db.id = 0;
      // What is behind the door: a glimpse of the next room, so an open door shows where it leads.
      final (back, floor) = _glimpse(dr.to);
      db.box(const V3(0, 40, 0.95), const V3(25, 79, 0.2), back);
      db.box(const V3(0, 5, 1.1), const V3(25, 10, 0.2), floor);
      db.box(const V3(0, 76, 1.1), const V3(25, 6, 0.2), Color.lerp(back, Colors.black, 0.25)!);
      db.id = idHDoor + i;
      final th = -ang;
      final hinge = const V3(-12.5, 0, 1.2);
      final cen = hinge + rotY(const V3(12.5, 39, 0.6), th);
      db.box(cen, const V3(25, 79, 1.4), const Color(0xFF8B5E34), shine: 0.15, yaw: th);
    } else {
      db.box(const V3(0, 40, 1.4), const V3(25, 79, 1.2), const Color(0xFF8B5E34), shine: 0.15);
      db.box(const V3(7, 40, 2.4), const V3(2.2, 2.2, 1.8), const Color(0xFFE5C07B), shine: 0.8);
      db.box(const V3(0, 56, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
      db.box(const V3(0, 22, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
    }
    b.polys.addAll(switch (dr.wall) {
      'left' => transformPolys(db.polys, ry: math.pi / 2, t: V3(-w / 2, 0, dr.offset + d / 2 - 40)),
      'right' => transformPolys(db.polys, ry: -math.pi / 2, t: V3(w / 2, 0, dr.offset + d / 2 - 40)),
      _ => transformPolys(db.polys, t: V3(dr.offset, 0, 0)),
    });
    info[idHDoor + i] = ObjInfo('Door', 'Tap the door to go through it.', const V3(0, 40, 0), 90);
  }

  // ── Furniture ──
  for (final f in r.furn) {
    final k = kFurnKinds[f.kind]!;
    final fb = MeshBuilder();
    fb.id = when('furniture', idHFurn + f.id);
    _furniture(fb, f.kind, kFurnColors[f.color]);
    b.polys.addAll(transformPolys(fb.polys, ry: f.rot * math.pi / 2, t: V3(f.x, 0, f.z)));
    info[idHFurn + f.id] = ObjInfo(k.name, 'Move it with the arrow buttons, turn it, change its colour or take it out.', V3(f.x, 12, f.z), 90);
  }

  // ── The wiring ──
  final lightX = 0.0, lightZ = d * 0.5;
  final backDoorX = r.doors.where((e) => e.wall == 'back').map((e) => e.offset).fold<double>(-w / 2 + 30, (a, e) => e);
  final switchX = (backDoorX + 24).clamp(-w / 2 + 10, w / 2 - 10);
  final fan = r.ceilingFix == 'fan';
  final okL = r.okLight;
  final lit = okL && r.okSwitch && r.lightOn;
  const okRing = Color(0xFF22D3EE), badRing = Color(0xFFEF4444);
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
    b.alpha = 0.2;
    b.cyl(V3(lightX, h - 3, lightZ), V3(lightX, 0.5, lightZ), 36, const Color(0xFFFFF1A8), sides: 14, caps: false);
    b.alpha = 1;
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
  for (final (i, id, x, ok, name) in outlets) {
    // A bright frame round the plate so a finished outlet can be found from far away.
    b.id = id;
    b.bias = 0.4;
    b.alpha = 0.55;
    b.box(V3(x, 14, 0.25), const V3(15, 19, 0.5), ok ? okRing : badRing);
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
    info[id] = ObjInfo(name, !ok ? 'This one is not wired yet. Tap it to wire it.' : (r.plugged[i] == null ? 'Tap it to plug something in.' : 'Tap it to plug something else in, or to unplug.'), V3(x, 14, 2), 60);
  }

  // Every switch: the room's own and the ones that were added.
  final switches = <(int, double, bool)>[
    (idHSwitch, switchX, r.okSwitch),
    for (var i = 0; i < r.extras.length; i++)
      if (r.extras[i].kind == 'switch') (idHExtra + i, r.extras[i].x, r.extras[i].done),
  ];
  for (final (id, x, ok) in switches) {
    b.id = id;
    b.bias = 0.4;
    b.alpha = 0.55;
    b.box(V3(x, 48, 0.25), const V3(10, 15, 0.5), ok ? okRing : badRing);
    b.alpha = 1;
    b.bias = 0;
    b.box(V3(x, 48, 0.9), const V3(6, 10, 1.4), ok ? const Color(0xFFF7F2E6) : const Color(0xFF3F3F46), shine: 0.25);
    b.box(V3(x, r.lightOn && ok ? 49.2 : 46.8, 1.9), const V3(1.8, 4, 1.0), const Color(0xFFD9D2C2));
    info[id] = ObjInfo('Light switch', !ok ? 'Not wired yet. Tap it to wire it.' : (r.lightOn ? 'On. Tap to turn the ${fan ? 'fan' : 'light'} off.' : 'Off. Tap to turn the ${fan ? 'fan' : 'light'} on.'), V3(x, 48, 2), 60);
  }
  if (!r.okLight && r.lesson.isEmpty) labels.add(Label3D(V3(lightX, h - 26, lightZ), '⚡ No power: needs wiring', const Color(0xFFDC2626)));
  if (r.lesson.isNotEmpty && !r.lessonDone && !r.lessonIsPlumbing) labels.add(Label3D(V3(0, 40, 14), '👆 Tap the red one to wire it', const Color(0xFFDC2626)));

  // ── What is plugged in ──
  for (final (i, _, x, ok, _) in outlets) {
    final key = r.plugged[i];
    if (key == null || !ok) continue;
    final a = applianceByKey(key);
    b.id = idHApp + i;
    b.tube([V3(x, 12, 1.8), V3(x, 6, 3), V3(x, 2, 11)], 0.3, const Color(0xFF1B1B1D), shine: 0.2, sides: 6, joints: false);
    if (a.isTv) {
      final tw = a.tvWidth, th = tw * 0.56;
      b.box(V3(x, 2, 15), V3(tw * 0.45, 4, 14), const Color(0xFF2B2D33), shine: 0.3);
      b.box(V3(x, 8, 15), const V3(7, 8, 3), const Color(0xFF2B2D33), shine: 0.3);
      b.box(V3(x, 12 + th / 2, 15), V3(tw, th, 3), const Color(0xFF111418), shine: 0.5);
      // The real NGMY ad plays on the glass, flat on the screen.
      final sw = tw - 3.5, sh = th - 3.5, sy = 12 + th / 2;
      final off = i * 7.0 + r.id;
      screens.add(ScreenQuad([V3(x - sw / 2, sy + sh / 2, 16.6), V3(x + sw / 2, sy + sh / 2, 16.6), V3(x + sw / 2, sy - sh / 2, 16.6), V3(x - sw / 2, sy - sh / 2, 16.6)], idHApp + i, (c, size, t) => paintNgmyApp(c, size, 0, t + off), bias: 9));
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

  // ── The TV on the wall ──
  final tvKey = r.wallTv;
  if (tvKey != null) {
    final a = applianceByKey(tvKey);
    final hall = r.kind == 'hall';
    final tw = a.tvWidth * (hall ? 0.5 : 0.9), th = tw * 0.56;
    final sw = tw - 2.5, sh = th - 2.5;
    b.id = idHWallTv;
    b.bias = 5;
    if (hall) {
      const y = 52.0, z = 50.0;
      final x = w / 2;
      b.box(V3(x - 1.4, y, z), V3(2.6, th + 3, tw + 3), const Color(0xFF1B1D22), shine: 0.5);
      b.box(V3(x - 2.8, y, z), V3(0.2, th, tw), const Color(0xFF0B0F17), shine: 0.7);
      if (r.tvOn) {
        final xs = x - 2.95;
        screens.add(ScreenQuad([V3(xs, y + sh / 2, z - sw / 2), V3(xs, y + sh / 2, z + sw / 2), V3(xs, y - sh / 2, z + sw / 2), V3(xs, y - sh / 2, z - sw / 2)], idHWallTv, (c, size, t) => paintNgmyApp(c, size, r.tvApp, t + r.id), bias: 9));
      }
    } else {
      final x = switch (r.kind) { 'living' => -8.0, 'kitchen' => 36.0, 'bathroom' => 10.0, _ => 34.0 };
      final y = r.kind == 'bathroom' ? 66.0 : 58.0;
      b.box(V3(x, y, 1.4), V3(tw + 3, th + 3, 2.6), const Color(0xFF1B1D22), shine: 0.5);
      b.box(V3(x, y, 2.8), V3(tw, th, 0.2), const Color(0xFF0B0F17), shine: 0.7);
      if (r.tvOn) {
        screens.add(ScreenQuad([V3(x - sw / 2, y + sh / 2, 2.95), V3(x + sw / 2, y + sh / 2, 2.95), V3(x + sw / 2, y - sh / 2, 2.95), V3(x - sw / 2, y - sh / 2, 2.95)], idHWallTv, (c, size, t) => paintNgmyApp(c, size, r.tvApp, t + r.id), bias: 9));
      }
    }
    b.bias = 0;
    info[idHWallTv] = ObjInfo(a.name, r.tvOn ? 'It is on and playing ${kNgmyApps[r.tvApp].name}. Tap it to watch full screen with the remote.' : 'The TV is off. Tap it to turn it on.', V3(0, 56, 4), 110);
  }

  // ── The plumbing ──
  if (r.hasPlumbing) {
    final ok = r.plumbed;
    void stub(double x, double y) {
      b.id = 0;
      b.cyl(V3(x, y, 0), V3(x, y, 2.2), 0.7, const Color(0xFFD08246), shine: 0.7, sides: 10);
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
        b.box(V3(tx, 14, 9), const V3(18, 28, 16), const Color(0xFF67E8F9));
        b.alpha = 1;
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
        b.box(V3(tubX, 8, 38), const V3(30, 16, 72), const Color(0xFF67E8F9));
        b.alpha = 1;
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

  return Scene3D(b.polys, info: info, labels: labels, screens: screens);
}


/// The house seen from the garden. The front door leads inside.
Scene3D _outside(HRoom r, int problems) {
  final b = MeshBuilder();
  final info = <int, ObjInfo>{};
  final labels = <Label3D>[];
  b.id = 0;
  b.box(const V3(0, -0.6, 100), const V3(420, 1.2, 320), const Color(0xFF4C8B4A), split: 4);
  b.box(const V3(0, 0.05, 110), const V3(22, 0.2, 130), const Color(0xFFB8B2A7));
  b.box(const V3(-90, 0.05, 130), const V3(46, 0.2, 170), const Color(0xFF6B7380));
  // House body.
  b.box(const V3(0, 50, -10), const V3(240, 100, 40), const Color(0xFFE8D9BC), split: 3);
  b.box(const V3(0, 3, 10.5), const V3(244, 6, 1.4), const Color(0xFF9C8E75));
  // Roof.
  final roof = MeshBuilder();
  roof.box(const V3(0, 0, 0), const V3(260, 3, 56), const Color(0xFF7A3B2E), shine: 0.1, split: 2);
  b.polys.addAll(transformPolys(roof.polys, rx: 0.5, t: const V3(0, 114, 8)));
  b.polys.addAll(transformPolys(roof.polys, rx: -0.5, t: const V3(0, 114, -34)));
  b.box(const V3(0, 127, -13), const V3(262, 3, 5), const Color(0xFF5E2D23));
  // The end walls under the roof.
  b.box(const V3(-120.5, 108, -10), const V3(1.5, 16, 40), const Color(0xFFE8D9BC));
  b.box(const V3(120.5, 108, -10), const V3(1.5, 16, 40), const Color(0xFFE8D9BC));
  // Windows.
  for (final x in const [-90.0, -50.0, 50.0, 90.0]) {
    b.box(V3(x, 62, 10.5), const V3(24, 28, 1.2), const Color(0xFFF7F4EC));
    b.box(V3(x, 62, 11.2), const V3(20, 24, 0.6), const Color(0xFF9BD3F5), shine: 0.6);
    b.box(V3(x, 62, 11.6), const V3(20, 1.2, 0.4), const Color(0xFFF7F4EC));
    b.box(V3(x, 62, 11.6), const V3(1.2, 24, 0.4), const Color(0xFFF7F4EC));
  }
  // The front door and the step.
  b.box(const V3(0, 2, 18), const V3(44, 4, 14), const Color(0xFFB8B2A7));
  b.box(const V3(0, 42, 10.6), const V3(34, 84, 1.2), const Color(0xFFF7F4EC));
  b.id = idHDoor;
  b.box(const V3(0, 41, 11.6), const V3(28, 80, 1.4), const Color(0xFF8B5E34), shine: 0.2);
  b.box(const V3(8, 40, 12.6), const V3(2.6, 2.6, 1.8), const Color(0xFFE5C07B), shine: 0.8);
  b.box(const V3(0, 58, 12.4), const V3(20, 26, 0.3), const Color(0xFF7A4F28));
  b.box(const V3(0, 22, 12.4), const V3(20, 26, 0.3), const Color(0xFF7A4F28));
  info[idHDoor] = const ObjInfo('Front door', 'Tap the door to go inside the house.', V3(0, 40, 12), 220);
  b.id = 0;
  // A tree, bushes and a mailbox.
  b.cyl(const V3(120, 0, 70), const V3(120, 40, 70), 5, const Color(0xFF6B4A32), sides: 8);
  b.ball(const V3(120, 62, 70), 28, const Color(0xFF3F8F4F), lat: 6, lon: 10);
  b.ball(const V3(100, 52, 74), 18, const Color(0xFF4FA860), lat: 5, lon: 8);
  for (final x in const [-30.0, 30.0, -70.0, 70.0]) {
    b.ball(V3(x, 6, 24), 7, const Color(0xFF3A7D44), lat: 4, lon: 8);
  }
  b.cyl(const V3(34, 0, 150), const V3(34, 30, 150), 1.4, const Color(0xFF6B4A32), sides: 6);
  b.box(const V3(34, 33, 150), const V3(12, 9, 18), const Color(0xFF2B4C7E), shine: 0.3);
  labels.add(Label3D(const V3(0, 100, 30), problems == 0 ? '✅ The house is finished' : '🏠 $problems rooms still need work', problems == 0 ? const Color(0xFF16A34A) : const Color(0xFFD97706)));
  return Scene3D(b.polys, info: info, labels: labels);
}

/// Things that move: the fan blades and the pictures on the TVs.
List<Poly> homeDynamic(HRoom r, double t, {PersonPose? person}) {
  final b = MeshBuilder();
  if (!r.indoor || r.kind == 'outside') return b.polys;
  if (person != null && person.room == r.id) _person(b, person, t);
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

/// The same faces, stretched or squashed about a point: a sphere becomes an egg, a tube becomes an oval.
List<Poly> _stretch(List<Poly> ps, V3 s, V3 at) => [
      for (final p in ps)
        Poly([for (final v in p.pts) V3(at.x + (v.x - at.x) * s.x, at.y + (v.y - at.y) * s.y, at.z + (v.z - at.z) * s.z)], V3(p.n.x / s.x, p.n.y / s.y, p.n.z / s.z).unit, p.color, p.id, shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias)
    ];

/// An adult person for the house tour, about 5 feet 8 inches tall, made of rounded parts (limbs with real joints, an
/// oval body and head, shoulders, hands, shoes) rather than blocks. Feet on y = 0, facing +z until turned. The hips are
/// worked out from the legs so the foot that is down always stands on the floor, and the knees bend as they walk.
void _person(MeshBuilder b, PersonPose p, double t) {
  final pb = MeshBuilder();
  pb.id = 0;
  // Drawn as if a little nearer than it is, so walls and floor pieces never hide parts of the person.
  pb.bias = 6;
  const skin = Color(0xFFE0A47C), skinShade = Color(0xFFCB8C64), hair = Color(0xFF2A1A10), shirt = Color(0xFF2F6FB5), pants = Color(0xFF2E3440), shoe = Color(0xFF1B1B1D);
  final stride = p.walking ? math.sin(p.phase * math.pi) : 0.0;

  // The legs first: their angles decide how high the hips are.
  final swing = [for (final s in const [-1.0, 1.0]) stride * s * 0.6];
  final knee = [for (final a in swing) p.walking ? math.max(0.0, -a) * 1.5 + 0.1 : 0.04];
  final extent = [for (var i = 0; i < 2; i++) 16 * math.cos(swing[i]) + 15.5 * math.cos(swing[i] + knee[i])];
  final hy = math.max(extent[0], extent[1]) + 3.3;

  // A rounded part: built at the origin, stretched, then moved to [at].
  void part(void Function(MeshBuilder m) draw, V3 stretch, V3 at) {
    final m = MeshBuilder();
    m.id = 0;
    m.bias = 6;
    draw(m);
    pb.polys.addAll([for (final q in _stretch(m.polys, stretch, V3.zero)) Poly([for (final v in q.pts) v + at], q.n, q.color, q.id, shine: q.shine, alpha: q.alpha, twoSided: q.twoSided, layer: q.layer, bias: q.bias)]);
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
  b.polys.addAll(transformPolys(pb.polys, ry: p.yaw, t: V3(p.x, 0, p.z)));
}

const Color kChromeC = Color(0xFFC9CED6);

Color _shade(Color c, double t) => Color.lerp(c, t < 0 ? Colors.black : Colors.white, t.abs())!;

/// Builds a piece of furniture centred on the origin, standing on y = 0, front towards +z.
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
      b.box(const V3(0, 9, 0), const V3(56, 18, 18), c, shine: 0.1);
      b.box(const V3(0, 11, 9.2), const V3(52, 8, 0.4), dark);
      b.box(const V3(0, 34, 0), const V3(46, 26, 2), const Color(0xFF111418), shine: 0.7);
      b.box(const V3(0, 34, 1.1), const V3(43, 23, 0.3), const Color(0xFF1E3A5F), shine: 0.9);
      b.box(const V3(0, 20, 0), const V3(8, 4, 4), const Color(0xFF2B2D33));
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
    default:
      b.box(const V3(0, 6, 0), const V3(10, 12, 10), c);
  }
}
