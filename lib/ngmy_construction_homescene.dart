import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_home.dart';

// ═════════════════════════════════════════════════════════════════════════════
// One room of the house drawn in 3D, with the front wall left off so you can look in.
// Only the wiring and the plumbing can be tapped at all times. Furniture, walls, the floor, the ceiling and the
// doors can be tapped only while the matching edit button is on, so a stray tap never changes anything.
// ═════════════════════════════════════════════════════════════════════════════

const int idHFurn = 100; // + furniture number (1 to 99)
const int idHDoor = 600; // + door number
const int idHWallBack = 300, idHWallLeft = 301, idHWallRight = 302, idHFloorObj = 310, idHCeilObj = 320;
const int idHOutletA = 700, idHOutletB = 701, idHSwitch = 702, idHLight = 703;
const int idHToiletF = 710, idHSinkF = 711, idHTubF = 712, idHKSink = 713;

/// Edit modes: look, furniture, walls, floor, ceiling, doors.
Scene3D buildHomeRoom(HRoom r, {String mode = 'look', int selected = 0}) {
  final b = MeshBuilder();
  final info = <int, ObjInfo>{};
  final labels = <Label3D>[];
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
  b.alpha = mode == 'ceiling' ? 0.5 : 0.1;
  b.box(V3(0, h + 0.6, d / 2), V3(w + 2.4, 1.2, d + 2), kCeilColors[r.ceiling], split: 2);
  b.alpha = 1;
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
    final open = r.openDoors.contains(i);
    final db = MeshBuilder();
    db.id = when('doors', idHDoor + i);
    db.box(const V3(0, 41, 0.45), const V3(31, 83, 0.9), const Color(0xFFF7F4EC));
    if (open) {
      db.id = 0;
      db.box(const V3(0, 40, 0.95), const V3(25, 79, 0.2), const Color(0xFF1B1D22));
      db.id = when('doors', idHDoor + i);
      final th = -1.25;
      final hinge = const V3(-12.5, 0, 1.2);
      final cen = hinge + rotY(const V3(12.5, 39, 0.6), th);
      db.box(cen, const V3(25, 79, 1.4), const Color(0xFF8B5E34), shine: 0.15, yaw: th);
    } else {
      db.box(const V3(0, 40, 1.4), const V3(25, 79, 1.2), const Color(0xFF8B5E34), shine: 0.15);
      db.box(const V3(7, 40, 2.4), const V3(2.2, 2.2, 1.8), const Color(0xFFE5C07B), shine: 0.8);
      db.box(const V3(0, 56, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
      db.box(const V3(0, 22, 2.1), const V3(17, 24, 0.3), const Color(0xFF7A4F28));
    }
    final to = dr.to;
    b.polys.addAll(switch (dr.wall) {
      'left' => transformPolys(db.polys, ry: math.pi / 2, t: V3(-w / 2, 0, dr.offset + d / 2 - 40)),
      'right' => transformPolys(db.polys, ry: -math.pi / 2, t: V3(w / 2, 0, dr.offset + d / 2 - 40)),
      _ => transformPolys(db.polys, t: V3(dr.offset, 0, 0)),
    });
    info[idHDoor + i] = ObjInfo('Door', 'A door to room number $to. Use the Go to buttons to walk through it.', const V3(0, 40, 0), 90);
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
  final wired = r.wired;
  b.id = idHLight;
  b.cyl(V3(lightX, h - 0.5, lightZ), V3(lightX, h - 3, lightZ), 7, wired ? const Color(0xFFFFF1A8) : const Color(0xFF9CA3AF), shine: 0.6, sides: 16);
  if (wired) {
    b.id = 0;
    b.alpha = 0.18;
    b.cyl(V3(lightX, h - 3, lightZ), V3(lightX, 0.5, lightZ), 34, const Color(0xFFFFF1A8), sides: 14, caps: false);
    b.alpha = 1;
  }
  info[idHLight] = ObjInfo('Ceiling light', wired ? 'The light works. The circuit has power and the switch turns it on and off.' : 'This light has no power yet. The room still needs wiring: use the Wiring button.', V3(lightX, h - 5, lightZ), 80);
  for (final (id, x) in [(idHOutletA, -w / 4), (idHOutletB, w / 4)]) {
    b.id = id;
    b.box(V3(x, 14, 0.6), const V3(5, 8, 1.2), wired ? const Color(0xFFF1EBDD) : const Color(0xFF3F3F46), shine: 0.2);
    b.id = 0;
    b.box(V3(x - 0.9, 15.4, 1.3), const V3(0.5, 1.6, 0.3), const Color(0xFF22252B));
    b.box(V3(x + 0.9, 15.4, 1.3), const V3(0.5, 1.6, 0.3), const Color(0xFF22252B));
    b.box(V3(x - 0.9, 12.6, 1.3), const V3(0.5, 1.6, 0.3), const Color(0xFF22252B));
    b.box(V3(x + 0.9, 12.6, 1.3), const V3(0.5, 1.6, 0.3), const Color(0xFF22252B));
    info[id] = ObjInfo(r.kind == 'bathroom' || r.kind == 'kitchen' ? 'GFCI outlet' : 'Wall outlet', wired ? 'This outlet has power.' : 'This outlet is not wired yet. Use the Wiring button to wire it.', V3(x, 14, 2), 60);
  }
  b.id = idHSwitch;
  b.box(V3(switchX, 48, 0.6), const V3(3.4, 5.6, 1.2), wired ? const Color(0xFFF1EBDD) : const Color(0xFF3F3F46), shine: 0.2);
  b.id = 0;
  b.box(V3(switchX, 48.6, 1.4), const V3(1, 2, 0.8), const Color(0xFFD9D2C2));
  info[idHSwitch] = ObjInfo('Light switch', wired ? 'The switch works.' : 'Not wired yet: the Wiring button opens the job.', V3(switchX, 48, 2), 60);
  if (!wired) labels.add(Label3D(V3(lightX, h - 14, lightZ), '⚡ No power: needs wiring', const Color(0xFFDC2626)));

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
      const sx = 0.0;
      b.id = 0;
      b.box(V3(-w / 2 + 15, 36, 14), const V3(26, 72, 26), const Color(0xFFE8E8E8), shine: 0.6);
      b.box(V3(-w / 2 + 28.5, 36, 14.4), const V3(0.6, 70, 0.6), const Color(0xFF9CA3AF));
      b.box(V3(w / 2 - 30, 15, 14), const V3(60, 30, 26), const Color(0xFF6B7380), shine: 0.1);
      b.box(V3(w / 2 - 30, 31, 14), const V3(62, 2, 28), const Color(0xFF2B2D33), shine: 0.5);
      b.box(V3(w / 2 - 44, 32.4, 14), const V3(12, 1, 12), const Color(0xFF111111), shine: 0.3);
      b.box(V3(w / 2 - 16, 32.4, 14), const V3(12, 1, 12), const Color(0xFF111111), shine: 0.3);
      b.id = idHKSink;
      b.box(V3(sx, 15, 14), const V3(50, 30, 26), const Color(0xFF8B5E3C), shine: 0.1);
      b.box(V3(sx, 31, 14), const V3(52, 2, 28), const Color(0xFF4A4C54), shine: 0.5);
      if (ok) {
        b.cyl(V3(sx, 32.1, 14), V3(sx, 32.7, 14), 8, const Color(0xFFB6BCC4), shine: 0.8, sides: 18);
        b.tube([V3(sx, 32, 5), V3(sx, 42, 5), V3(sx, 44, 9), V3(sx, 44, 13)], 0.7, kChromeC, shine: 0.9, sides: 8);
      } else {
        stub(sx - 8, 18);
        stub(sx + 8, 18);
      }
      info[idHKSink] = ObjInfo('Kitchen sink', ok ? 'The faucet, the hoses and the drain are fitted.' : 'The kitchen sink is not plumbed yet. Use the Plumbing button.', V3(sx, 30, 14), 70);
      if (!ok) labels.add(Label3D(V3(0, 48, 14), '🚰 Needs plumbing', const Color(0xFF2563EB)));
    }
  }

  return Scene3D(b.polys, info: info, labels: labels);
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
