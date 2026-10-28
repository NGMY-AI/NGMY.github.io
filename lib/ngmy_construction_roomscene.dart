import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_project.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The room for the room project, drawn in 3D: studs, boxes, cables, drywall, devices, light, fan and the
// things you plug in. Everything you can tap has an object number so the page knows what you touched.
// ═════════════════════════════════════════════════════════════════════════════

const int idStudBase = 1000, idSlotBase = 2000, idDevBase = 3000, idBenchBase = 5000;
const int idEdgeBase = 6000, idSheetBase = 6100, idSeamBase = 6200, idScrewBase = 7000, idBetweenBase = 7500;
const int idPanelObj = 8000, idRoomObj = 8001, idPlateObj = 8002, idCableObj = 8003, idAppBase = 8100;

double screwRowY(int row) => -40.0 + row * 16;

int benchId(int slot, int local) => idBenchBase + slot * 100 + local;

/// What the page asks for when it draws the room.
class RoomView {
  const RoomView({this.armed = '', this.active = -1, this.hints = false, this.labels = false});

  /// The tool or item picked up: wall, ceiling, fan, cable, drill, sheet, knife, screw, tape, mud, sand, paint, outlet, gfci, switch, light, tv...
  final String armed;

  /// The device being worked on up close, or -1.
  final int active;
  final bool hints;
  final bool labels;
}

V3 slotPoint(BoxSlot s, V3 local) => s.ceiling ? V3(s.pos.x + local.x, s.pos.y - local.z, s.pos.z + local.y) : V3(s.pos.x + local.x, s.pos.y + local.y, s.pos.z + local.z);

/// Moves a scene made for a wall box (facing out of the wall) to this slot, and gives the objects new numbers.
(List<Poly>, Map<int, ObjInfo>) _place(Scene3D sc, BoxSlot s, int Function(int id) mapId) {
  final moved = s.ceiling ? transformPolys(sc.polys, rx: math.pi / 2, t: s.pos) : transformPolys(sc.polys, t: s.pos);
  final polys = [for (final p in moved) Poly(p.pts, p.n, p.color, p.id == 0 ? 0 : mapId(p.id), shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias)];
  final info = <int, ObjInfo>{for (final e in sc.info.entries) mapId(e.key): ObjInfo(e.value.name, e.value.about, slotPoint(s, e.value.focus), e.value.dist)};
  return (polys, info);
}

/// A flat panel with rectangular holes in it (a sheet of drywall with openings for the boxes).
void _panel(MeshBuilder b, double x0, double x1, double y0, double y1, double z, double th, Color col, List<(double, double, double, double)> holes) {
  final xs = <double>{x0, x1};
  for (final h in holes) {
    xs..add(h.$1.clamp(x0, x1))..add(h.$2.clamp(x0, x1));
  }
  final sx = xs.toList()..sort();
  for (var i = 0; i + 1 < sx.length; i++) {
    final xa = sx[i], xb = sx[i + 1];
    if (xb - xa < 0.01) continue;
    final xm = (xa + xb) / 2;
    final relevant = holes.where((h) => xm > h.$1 && xm < h.$2).toList();
    final ys = <double>{y0, y1};
    for (final h in relevant) {
      ys..add(h.$3.clamp(y0, y1))..add(h.$4.clamp(y0, y1));
    }
    final sy = ys.toList()..sort();
    for (var j = 0; j + 1 < sy.length; j++) {
      final ya = sy[j], yb = sy[j + 1];
      if (yb - ya < 0.01) continue;
      final ym = (ya + yb) / 2;
      if (relevant.any((h) => ym > h.$3 && ym < h.$4)) continue;
      b.box(V3(xm, ym, z), V3(xb - xa, yb - ya, th), col, split: (xb - xa) > 30 || (yb - ya) > 60 ? 2 : 1);
    }
  }
}

const Color _paper = Color(0xFFD7CCA8);
const Color _sanded = Color(0xFFE6DFCB);
const Color _painted = Color(0xFFEFE9DC);

Scene3D buildRoomScene(RoomProject p, RoomView v) {
  final b = MeshBuilder();
  final labels = <Label3D>[];
  final info = <int, ObjInfo>{};

  // ── The room around the wall ──
  b.id = idRoomObj;
  b.box(const V3(0, -48.6, 55), const V3(160, 1.2, 120), const Color(0xFFB08A5B), shine: 0.15, split: 4);
  b.box(const V3(-72.8, 0, 55), const V3(1.2, 96, 112), const Color(0xFFD9D3C5), split: 3);
  // A window in the side wall.
  b.box(const V3(-72.0, 6, 55), const V3(0.4, 36, 34), const Color(0xFF9BD3F5), shine: 0.5);
  b.box(const V3(-71.7, 6, 55), const V3(0.3, 38, 2), const Color(0xFFF4F1EA));
  b.box(const V3(-71.7, 6, 55), const V3(0.3, 2, 36), const Color(0xFFF4F1EA));
  // The wall on the other side, with a door.
  b.box(const V3(72.8, 0, 55), const V3(1.2, 96, 112), const Color(0xFFD9D3C5), split: 3);
  b.box(const V3(72.0, -17, 70), const V3(0.5, 62, 30), const Color(0xFF8B5E34), shine: 0.15);
  b.box(const V3(71.6, -22, 62), const V3(0.4, 3, 3), const Color(0xFFE5C07B), shine: 0.8);
  // While the house is still being built the ceiling is seen through, with the joists above it.
  // Once the drywall is done the ceiling is finished and painted: no bare wood.
  b.id = 0;
  b.alpha = p.drywallDone ? 0.42 : 0.1;
  b.box(const V3(0, 48.6, 55), const V3(150, 1.2, 112), p.drywallDone ? const Color(0xFFF7F4EC) : const Color(0xFFEDE8DC), split: 3);
  b.alpha = 1;
  b.id = idRoomObj;
  if (!p.drywallDone) {
    for (var i = 0; i < 10; i++) {
      b.box(V3(-72.0 + i * 16, 51.3, 55), const V3(1.5, 3.5, 112), kWood, shine: 0.05, ends: false);
    }
  } else {
    const crown = Color(0xFFFFFFFF);
    b.box(const V3(0, 46.6, 0.8), const V3(147, 3, 1.4), crown, shine: 0.2);
    b.box(const V3(-71.2, 46.6, 55), const V3(1.4, 3, 112), crown, shine: 0.2);
    b.box(const V3(71.2, 46.6, 55), const V3(1.4, 3, 112), crown, shine: 0.2);
  }
  if (p.drywallDone) {
    // The baseboard goes on after the paint.
    b.box(const V3(0, -45.5, 0.5), const V3(144, 5, 0.7), const Color(0xFFF7F4EC), shine: 0.2);
  }
  // A sofa and a rug, so the room feels like a room.
  b.id = idRoomObj;
  b.box(const V3(-8, -47.8, 70), const V3(80, 0.5, 60), const Color(0xFF8A4B4B), split: 2);
  b.box(const V3(-8, -39, 96), const V3(62, 18, 20), const Color(0xFF5E6E84), shine: 0.1);
  b.box(const V3(-8, -28, 104), const V3(62, 22, 6), const Color(0xFF55657B), shine: 0.1);
  b.box(const V3(-42, -34, 96), const V3(6, 14, 20), const Color(0xFF55657B), shine: 0.1);
  b.box(const V3(26, -34, 96), const V3(6, 14, 20), const Color(0xFF55657B), shine: 0.1);
  info[idRoomObj] = const ObjInfo('The room', 'A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.', V3(0, 0, 40), 190);

  // ── Framing ──
  b.id = idPlateObj;
  b.box(const V3(0, 47.25, -2.25), const V3(147, 1.5, 3.5), kWood, shine: 0.05, split: 3);
  b.box(const V3(0, -47.25, -2.25), const V3(147, 1.5, 3.5), kWood, shine: 0.05, split: 3);
  info[idPlateObj] = const ObjInfo('Top and bottom plate', 'The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.', V3(0, 47, -2), 70);
  for (var i = 0; i < kStudX.length; i++) {
    b.id = idStudBase + i;
    b.box(V3(kStudX[i], 0, -2.25), const V3(1.5, 94, 3.5), kWood, shine: 0.05, ends: false, split: 2);
    info[idStudBase + i] = ObjInfo('Wall stud', 'A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. ${p.holes.contains(i) ? 'This one has a hole for the cable.' : 'Tap it with the drill to put a hole through it.'}', V3(kStudX[i], 20, -2), 60);
    if (p.holes.contains(i)) {
      b.id = 0;
      b.bias = 0.6;
      b.box(V3(kStudX[i], kLaneY, -2.25), const V3(1.6, 1.7, 3.6), const Color(0xFF1B1209));
      b.bias = 0;
    }
  }

  // ── The breaker panel ──
  b.id = idPanelObj;
  b.box(const V3(kPanelX, kPanelY, -1.4), const V3(13, 28, 3), const Color(0xFF8E959E), shine: 0.5);
  b.bias = 0.4;
  b.box(const V3(kPanelX, kPanelY, 0.2), const V3(11, 25, 0.3), const Color(0xFF3A3F47));
  for (var r = 0; r < 6; r++) {
    for (var c = 0; c < 2; c++) {
      b.box(V3(kPanelX - 2.4 + c * 4.8, kPanelY + 9.5 - r * 3.6, 0.5), const V3(3.6, 2.6, 0.6), const Color(0xFF22262C), shine: 0.3);
    }
  }
  final main = p.breaker && !p.tripped;
  b.box(V3(kPanelX, kPanelY - 12.5 + (main ? 0.6 : 0), 0.9), const V3(5, 2.2, 0.8), p.tripped ? const Color(0xFFF97316) : (main ? const Color(0xFFDC2626) : const Color(0xFF4B5563)), shine: 0.4);
  b.bias = 0;
  info[idPanelObj] = ObjInfo('Breaker panel', p.tripped ? 'The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON.' : (p.breaker ? 'The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.' : 'The power is OFF. Tap to turn it ON.'), const V3(kPanelX, kPanelY, 0), 60);

  // ── Cable runs from the panel to every box that has one ──
  b.id = idCableObj;
  for (final slot in p.cabled) {
    final s = slotById(slot);
    final path = <V3>[
      const V3(kPanelX, kPanelY + 14, -3.2),
      const V3(kPanelX, kLaneY, -3.2),
      V3(s.pos.x - 0.35, kLaneY, -3.2),
      if (s.ceiling) ...[V3(s.pos.x - 0.35, 51.4, -3.2), V3(s.pos.x - 0.35, 51.4, s.pos.z + 11)] else V3(s.pos.x - 0.35, s.pos.y + 11, -3.4),
    ];
    b.tube(roundedPath(path, 3), 0.2, kJacket, shine: 0.35, sides: 6, joints: false);
  }
  info[idCableObj] = const ObjInfo('Electrical cable', 'Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.', V3(0, 40, -3), 80);

  // ── Drywall ──
  final sheetColor = _paper;
  for (var k = 0; k < kGoodSheetEdges.length; k++) {
    final e = kGoodSheetEdges[k];
    final sh = p.sheets[e];
    if (sh == null || !sh.placed) continue;
    final col = sh.painted ? _painted : (sh.sanded ? _sanded : sheetColor);
    final holes = <(double, double, double, double)>[
      for (final slot in sh.cutouts) (slotById(slot).pos.x - 1.15, slotById(slot).pos.x + 1.15, slotById(slot).pos.y - 2.0, slotById(slot).pos.y + 2.0),
    ];
    b.id = idSheetBase + k;
    _panel(b, e.toDouble(), e + 48.0, -47, 47, -0.25, 0.5, col, holes);
    info[idSheetBase + k] = ObjInfo('Drywall sheet', sh.painted ? 'Painted and finished.' : 'A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs.', V3(e + 24, 0, 0), 90);
    // Screw heads.
    b.id = 0;
    b.bias = 0.3;
    for (final key in sh.screws) {
      final st = key ~/ 10, row = key % 10;
      b.ball(V3(kStudX[st], screwRowY(row), 0.1), 0.34, const Color(0xFF3A3F47), shine: 0.3, lat: 3, lon: 5);
    }
    b.bias = 0;
  }
  // Seams between sheets.
  for (var i = 0; i < 2; i++) {
    final x = -24.0 + 48 * i;
    final left = p.sheets[kGoodSheetEdges[i]]?.placed == true, right = p.sheets[kGoodSheetEdges[i + 1]]?.placed == true;
    if (!left || !right) continue;
    final sm = p.seams[i];
    b.id = idSeamBase + i;
    if (sm.taped && !sm.sanded) {
      final col = sm.coats == 0 ? const Color(0xFFEDE6D0) : (sm.dry ? const Color(0xFFF1EDE0) : const Color(0xFFCFCABD));
      b.bias = 0.5;
      b.box(V3(x, 0, 0.08 + 0.02 * sm.coats), V3(2.2 + sm.coats * 1.4, 94, 0.12), col);
      b.bias = 0;
    } else if (v.armed == 'tape' || v.armed == 'mud' || v.armed == 'sand') {
      b.alpha = 0.45;
      b.bias = 0.6;
      b.box(V3(x, 0, 0.12), const V3(3.5, 94, 0.2), const Color(0xFF67E8F9));
      b.bias = 0;
      b.alpha = 1;
    }
    info[idSeamBase + i] = ObjInfo('Seam', sm.sanded ? 'Smooth and ready for paint.' : (!sm.taped ? 'The joint between two sheets. It needs tape and three coats of joint compound.' : 'Taped, with ${sm.coats} coat${sm.coats == 1 ? '' : 's'} of mud.'), V3(x, 0, 0), 70);
  }

  // ── Boxes and devices ──
  for (final s in kSlots) {
    final mounted = p.boxes.containsKey(s.id);
    final d = p.devs[s.id];
    final isActive = v.active == s.id && d != null;
    if (!mounted) continue;
    final lessonKind = s.ceiling ? (s.role == 'fan' ? 'fan' : 'light') : (d?.kind ?? 'outlet');
    if (isActive) {
      final lesson = electricalLesson(d.kind);
      final bench = buildBench(lesson, d.w, withWall: false);
      final (polys, inf) = _place(bench, s, (id) => benchId(s.id, id));
      b.polys.addAll(polys);
      info.addAll(inf);
      if (d.w.labels && d.w.stage == 0) {
        labels.addAll([for (final l in bench.labels) Label3D(slotPoint(s, l.at), l.text, l.color)]);
      }
    } else if (d != null && d.w.stage >= 2) {
      final (polys, _) = _place(buildFinished(d.kind, burnt: d.w.burnt), s, (id) => idDevBase + s.id);
      b.polys.addAll(polys);
      // A bright frame round a finished wall device, so it can be found and tapped from far away.
      if (!s.ceiling) {
        b.id = idDevBase + s.id;
        b.bias = 0.4;
        b.alpha = 0.55;
        b.box(V3(s.pos.x, s.pos.y, s.pos.z + 0.2), const V3(10, 14, 0.5), d.w.burnt ? const Color(0xFFEF4444) : const Color(0xFF22D3EE));
        b.alpha = 1;
        b.bias = 0;
      }
      info[idDevBase + s.id] = ObjInfo(_deviceName(d.kind), _deviceAbout(p, s.id), slotPoint(s, const V3(0, 0, 4)), 22);
    } else {
      final (polys, _) = _place(buildBoxOnly(lessonKind, cabled: false), s, (id) => idSlotBase + s.id);
      b.polys.addAll(polys);
      info[idSlotBase + s.id] = ObjInfo(s.ceiling ? 'Ceiling box' : 'Electrical box', p.cabled.contains(s.id) ? 'The box is mounted and the cable is in. A device can be wired here.' : 'The box is mounted. Pull the cable to it.', slotPoint(s, const V3(0, 0, 4)), 24);
    }
  }

  // ── Places you can tap, shown while a tool or item is in your hand ──
  final armed = v.armed;
  void marker(int id, V3 at, V3 size, {bool round = false, Color col = const Color(0xFF67E8F9)}) {
    b.id = id;
    b.alpha = 0.5;
    b.bias = 0.9;
    if (round) {
      b.cyl(at - const V3(0, 1, 0), at + const V3(0, 1, 0), size.x / 2, col, sides: 14);
    } else {
      b.box(at, size, col);
    }
    b.bias = 0;
    b.alpha = 1;
  }

  if (armed == 'wall' || armed == 'ceiling' || armed == 'fanbox') {
    for (final s in kSlots) {
      if (p.boxes.containsKey(s.id)) continue;
      marker(idSlotBase + s.id, s.ceiling ? V3(s.pos.x, s.pos.y - 1, s.pos.z) : V3(s.pos.x, s.pos.y, 1.5), s.ceiling ? const V3(7, 2, 7) : const V3(4.6, 7.6, 3), round: s.ceiling);
      labels.add(Label3D(s.ceiling ? V3(s.pos.x, s.pos.y - 8, s.pos.z) : V3(s.pos.x, s.pos.y + 7, 3), s.name, const Color(0xFF0E7490)));
    }
  } else if (armed == 'cable') {
    for (final s in kSlots) {
      if (!p.boxes.containsKey(s.id) || p.cabled.contains(s.id)) continue;
      marker(idSlotBase + s.id, s.ceiling ? V3(s.pos.x, s.pos.y - 1, s.pos.z) : V3(s.pos.x, s.pos.y, 1.5), s.ceiling ? const V3(8, 2, 8) : const V3(5.5, 8.5, 3), round: s.ceiling, col: const Color(0xFFFACC15));
    }
  } else if (armed == 'knife') {
    for (final s in kSlots) {
      if (s.ceiling || !p.boxes.containsKey(s.id)) continue;
      final sh = p.sheetCovering(s.pos.x);
      if (sh == null || sh.cutouts.contains(s.id)) continue;
      marker(idSlotBase + s.id, V3(s.pos.x, s.pos.y, 0.5), const V3(5, 8, 0.4), col: const Color(0xFFFB923C));
    }
  } else if (armed == 'sheet') {
    for (var i = 0; i < kSheetEdges.length; i++) {
      final e = kSheetEdges[i];
      marker(idEdgeBase + i, V3(e.toDouble(), 0, 0.3), const V3(4, 94, 0.4));
      labels.add(Label3D(V3(e.toDouble(), 50, 1), 'edge ${i + 1}', const Color(0xFF0E7490)));
    }
  } else if (armed == 'screw') {
    for (final e in kGoodSheetEdges) {
      final sh = p.sheets[e];
      if (sh == null || !sh.placed) continue;
      for (final st in p.studsUnder(e)) {
        for (var r = 0; r < RoomProject.screwRows; r++) {
          if (sh.screws.contains(st * 10 + r)) continue;
          marker(idScrewBase + st * 10 + r, V3(kStudX[st], screwRowY(r), 0.5), const V3(1.6, 1.6, 0.4));
        }
        if (st + 1 < kStudX.length && kStudX[st] + 16 <= e + 48) {
          for (var r = 0; r < RoomProject.screwRows; r += 2) {
            marker(idBetweenBase + st * 10 + r, V3(kStudX[st] + 8, screwRowY(r) + 8, 0.5), const V3(1.6, 1.6, 0.4), col: const Color(0xFF93C5FD));
          }
        }
      }
    }
  }
  if (!{'wall', 'ceiling', 'fanbox', 'cable', 'knife', 'sheet', 'screw', ''}.contains(armed) && (kAppliances.contains(armed) || {'outlet', 'gfci', 'switch', 'light', 'fan'}.contains(armed))) {
    for (final s in kSlots) {
      if (kAppliances.contains(armed)) {
        final d = p.devs[s.id];
        if (d != null && (d.kind == 'outlet' || d.kind == 'gfci') && d.w.stage >= 2 && !p.plugged.containsKey(s.id)) {
          marker(idDevBase + s.id, V3(s.pos.x, s.pos.y, 1.2), const V3(5, 8, 0.5), col: const Color(0xFF4ADE80));
        }
      } else if (p.boxes.containsKey(s.id) && p.cabled.contains(s.id) && !p.devs.containsKey(s.id)) {
        marker(idSlotBase + s.id, s.ceiling ? V3(s.pos.x, s.pos.y - 1, s.pos.z) : V3(s.pos.x, s.pos.y, 1.2), s.ceiling ? const V3(8, 2, 8) : const V3(5.5, 8.5, 0.5), round: s.ceiling);
      }
    }
  }
  if (v.hints) {
    for (final o in p.orders) {
      final s = slotById(o.slot);
      labels.add(Label3D(s.ceiling ? V3(s.pos.x, s.pos.y - 14, s.pos.z) : V3(s.pos.x, s.pos.y - 8, 4), '${o.device == 'gfci' ? 'GFCI' : o.device} here', const Color(0xFF7C3AED)));
    }
  }

  // ── The things plugged in ──
  for (final e in p.plugged.entries) {
    final s = slotById(e.key);
    b.id = idAppBase + e.key;
    final x = s.pos.x;
    b.tube(roundedPath([V3(x, s.pos.y, 2.5), V3(x, -46, 3.5), V3(x, -46, 22)], 4), 0.28, const Color(0xFF1B1B1D), shine: 0.2, sides: 6, joints: false);
    b.box(V3(x, s.pos.y, 1.6), const V3(2.8, 3.4, 2.4), const Color(0xFF222326), shine: 0.3);
    switch (e.value) {
      case 'tv':
        b.box(V3(x, -45, 24), const V3(54, 5, 18), const Color(0xFF3B2F26), shine: 0.2);
        b.box(V3(x, -19, 24), const V3(82, 46, 3), const Color(0xFF111418), shine: 0.4);
      case 'lamp':
        b.cyl(V3(x, -47.5, 24), V3(x, -46.5, 24), 6, const Color(0xFF8A6A47), shine: 0.4, sides: 14);
        b.cyl(V3(x, -46.5, 24), V3(x, -22, 24), 1, const Color(0xFFB08A5B), shine: 0.5, sides: 8);
        b.cyl(V3(x, -26, 24), V3(x, -12, 24), 9, const Color(0xFFF3E7C8), shine: 0.2, sides: 16, caps: false, inner: true, r1: 5.5);
      case 'toaster':
        b.box(V3(x, -42.5, 24), const V3(18, 9, 11), const Color(0xFFC9CED6), shine: 0.8);
        b.box(V3(x, -38, 24), const V3(14, 0.4, 7), const Color(0xFF30333A));
      default:
        b.box(V3(x, -43.5, 24), const V3(22, 3, 10), const Color(0xFF3B2F26), shine: 0.2);
        b.cyl(V3(x - 6, -38, 24), V3(x + 8, -38, 24), 3.4, const Color(0xFFE2455A), shine: 0.6, sides: 12, r1: 3);
        b.box(V3(x - 8, -43, 24), const V3(4, 10, 3.5), const Color(0xFFE2455A), shine: 0.6, yaw: 0.0);
    }
    info[idAppBase + e.key] = ObjInfo(_appNameFull(e.value), e.value == 'tv' ? 'Plugged into ${s.name}. Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.' : 'Plugged into ${s.name}. Tap it to unplug.', V3(x, -35, 20), 60);
  }

  // Info for the wall boxes/ceiling positions is added when they are boxes; give the markers a name too.
  for (final s in kSlots) {
    info.putIfAbsent(idSlotBase + s.id, () => ObjInfo(s.name, s.ceiling ? 'A place in the ceiling for a ${s.role == 'fan' ? 'fan (needs a fan-rated box)' : 'light'}.' : 'A place on the wall at ${s.role == 'switch' ? 'switch height, about 48 inches from the floor' : 'outlet height, about 16 inches from the floor'}.', slotPoint(s, const V3(0, 0, 4)), 26));
  }
  return Scene3D(b.polys, info: info, labels: labels);
}

String _deviceName(String kind) => switch (kind) { 'gfci' => 'GFCI outlet', 'switch' => 'Light switch', 'light' => 'Ceiling light', 'fan' => 'Ceiling fan', _ => 'Outlet' };

String _appNameFull(String a) => switch (a) { 'tv' => 'TV', 'lamp' => 'Lamp', 'toaster' => 'Toaster', _ => 'Hair dryer' };

String _deviceAbout(RoomProject p, int slot) {
  final d = p.devs[slot];
  if (d == null) return '';
  if (d.w.burnt) return 'BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one.';
  if (d.kind == 'switch') return p.switchOn.contains(slot) ? 'The switch is ON. Tap to turn it off.' : 'The switch is OFF. Tap to flip it on.';
  if (d.kind == 'light' || d.kind == 'fan') return p.loadRuns(slot) ? 'It is running.' : 'It is off. Flip its switch (breaker on).';
  return 'Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: ${p.plugged[slot] ?? 'nothing'}.';
}

/// Things that move: the fan blades, the TV picture, glowing lamps and toasters, sparks and smoke from a mistake.
List<Poly> roomDynamic(RoomProject p, double t, Map<int, double> fxUntil) {
  final b = MeshBuilder();
  // Ceiling fan blades.
  for (final s in kSlots.where((s) => s.role == 'fan')) {
    final d = p.devs[s.id];
    if (d == null || d.w.stage < 1) continue;
    final run = p.loadRuns(s.id);
    final ang = run ? t * 7 : 0.4;
    b.id = idDevBase + s.id;
    final hub = V3(s.pos.x, s.pos.y - 6.6, s.pos.z);
    for (var k = 0; k < 4; k++) {
      final a = ang + k * math.pi / 2;
      b.box(hub + rotY(const V3(13, 0, 0), a), const V3(22, 0.5, 5), const Color(0xFF7A5A3A), shine: 0.3, yaw: a);
    }
  }
  // Glow of a running light.
  for (final o in p.orders.where((o) => o.device == 'light')) {
    if (p.loadRuns(o.slot)) {
      final s = slotById(o.slot);
      b.id = 0;
      b.alpha = 0.25 + 0.05 * math.sin(t * 5);
      b.ball(V3(s.pos.x, s.pos.y - 5, s.pos.z), 11, const Color(0xFFFFE680), shine: 0, lat: 4, lon: 10);
      b.alpha = 1;
    }
  }
  for (final e in p.plugged.entries) {
    if (!p.applianceRuns(e.key)) continue;
    final x = slotById(e.key).pos.x;
    b.id = idAppBase + e.key;
    switch (e.value) {
      case 'tv':
        b.bias = 0.8;
        final hue = (t * 60) % 360;
        b.box(V3(x, -19, 25.7), const V3(77, 41, 0.3), HSVColor.fromAHSV(1, hue, 0.5, 0.95).toColor());
        b.box(V3(x - 20 + 40 * ((t * 0.6) % 1), -14 + 9 * math.sin(t * 3), 26), const V3(14, 14, 0.3), Colors.white);
        b.box(V3(x - 24, -34, 26), const V3(24, 5, 0.3), const Color(0xFFF59E0B));
        b.bias = 0;
      case 'lamp':
        b.id = 0;
        b.alpha = 0.3 + 0.05 * math.sin(t * 6);
        b.ball(V3(x, -19, 24), 11, const Color(0xFFFFE08A), shine: 0, lat: 4, lon: 10);
        b.alpha = 1;
      case 'toaster':
        b.bias = 0.8;
        b.box(V3(x, -38.2, 24), V3(13, 0.3, 6), Color.lerp(const Color(0xFFFF5A1F), const Color(0xFFFFB347), (math.sin(t * 6) + 1) / 2)!);
        b.bias = 0;
      default:
        for (var i = 0; i < 6; i++) {
          final ph = (t * 1.6 + i / 6) % 1.0;
          b.ball(V3(x + 9 + ph * 22, -38 + math.sin(i * 2.0) * 2, 24), 0.6, const Color(0xFFBFE3FF), shine: 0.2, lat: 3, lon: 5);
        }
    }
  }
  // Sparks and smoke from a mistake.
  for (final e in fxUntil.entries) {
    if (t > e.value) continue;
    final s = slotById(e.key);
    final left = (e.value - t).clamp(0.0, 3.0);
    b.id = 0;
    for (var i = 0; i < 14; i++) {
      final ph = ((t * 2.2 + i * 0.137) % 1.0);
      final a = i * 2.4 + t * 7;
      final at = slotPoint(s, V3(math.cos(a) * ph * 7, math.sin(a) * ph * 7 - ph * ph * 6, 3 + ph * 4));
      b.ball(at, 0.35 * left.clamp(0.3, 1.0), Color.lerp(const Color(0xFFFF6A00), const Color(0xFFFFF3A0), 1 - ph)!, shine: 0, lat: 3, lon: 5);
    }
    b.alpha = 0.35;
    for (var i = 0; i < 5; i++) {
      final ph = ((t * 0.7 + i * 0.2) % 1.0);
      b.ball(slotPoint(s, V3(math.sin(i * 1.7) * 2, ph * 10, 5 + ph * 3)), 1.2 + ph * 3, const Color(0xFF4B4B50), shine: 0, lat: 3, lon: 6);
    }
    b.alpha = 1;
  }
  return b.polys;
}
