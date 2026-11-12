import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_frame_geo.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Drawing the framed room: real looking lumber, the breaker panel, electrical boxes, cable, tools.
// ═════════════════════════════════════════════════════════════════════════════

const Color kBoxBlue = Color(0xFF3B7DE0);
const Color kNmYellow = Color(0xFFF2C21B);
const Color kNmWhite = Color(0xFFF1EFE6);

/// Pine: every board a little different, as real lumber is.
Color woodTone(int seed, {double dark = 0}) {
  final v = (seed * 37 % 17) - 8;
  int c(int base) => (base + v - (dark * 40).round()).clamp(0, 255);
  return Color.fromARGB(255, c(0xDA), c(0xB6), c(0x7E));
}

/// The cut end of a board, a little darker than its sides.
Color endGrain(Color c) => Color.lerp(c, const Color(0xFF8C6A3C), 0.35)!;

/// Draws the bare frame: floor, the four walls of studs and plates, the openings, the joists and the panel. [drilled] holds the studs and
/// the pieces of top plate that have a hole in them.
void drawFrame(MeshBuilder b, {Set<int> drilled = const {}}) {
  b.id = 0;
  b.order = -1;
  b.box(const V3(0, -1, 0), const V3(154, 2, 130), const Color(0xFFC9B38E), shine: 0.05, split: 4);
  b.order = 0;
  for (var k = 0; k < 4; k++) {
    final len = wallLen(k);
    b.startGroup();
    // The bottom plate (none in the doorway).
    b.id = idBottom0 + k;
    if (k == kDoor.wall) {
      for (final (a, e) in [(0.0, kDoor.u0), (kDoor.u1, len)]) {
        b.box(wallPt(k, (a + e) / 2, 0.75, kStD / 2), wallSize(k, e - a, 1.5, kStD), woodTone(k + 3, dark: 0.15), shine: 0.05);
      }
    } else {
      b.box(wallPt(k, len / 2, 0.75, kStD / 2), wallSize(k, len, 1.5, kStD), woodTone(k + 3, dark: 0.15), shine: 0.05);
    }
    // The top plate: two boards, in pieces of 16 inches so each piece can be drilled.
    for (var s = 0; s < topSegCount(k); s++) {
      final a = s * 16.0, e = math.min(len, a + 16);
      b.id = topSegId(k, s);
      b.box(wallPt(k, (a + e) / 2, 94.5, kStD / 2), wallSize(k, e - a - 0.12, 3, kStD), woodTone(k * 20 + s + 11, dark: 0.08), shine: 0.05);
      if (drilled.contains(b.id)) {
        final c = wallPt(k, topSegU(k, s), 94.5, kMidD);
        b.cyl(c + const V3(0, -1.6, 0), c + const V3(0, 1.7, 0), 0.5, const Color(0xFF241A10), sides: 8);
      }
    }
    b.endGroup();
  }
  // The studs, each its own piece of wood.
  for (final s in kStuds) {
    b.order = 0;
    b.startGroup();
    b.id = s.id;
    final h = s.y1 - s.y0;
    final c = woodTone(s.id);
    b.box(wallPt(s.wall, s.u, (s.y0 + s.y1) / 2, kStD / 2), wallSize(s.wall, kStT, h, kStD), c, shine: 0.05);
    b.endGroup();
    if (drilled.contains(s.id)) {
      // The hole goes through the thickness of the stud, in the middle of its depth: a dark ring on each side.
      final a = wallAlong(s.wall);
      final mid = wallPt(s.wall, s.u, kDrillY, kMidD);
      b.order = 2;
      b.cyl(mid - a * (kStT / 2 + 0.06), mid + a * (kStT / 2 + 0.06), 0.5, const Color(0xFF241A10), sides: 8);
    }
  }
  // The headers over the door and the window, and the sill under the window.
  b.order = 0;
  void beam(int id, Opening o, double y0, double y1) {
    b.startGroup();
    b.id = id;
    b.box(wallPt(o.wall, (o.u0 + o.u1) / 2, (y0 + y1) / 2, kStD / 2), wallSize(o.wall, o.u1 - o.u0 + 1.5, y1 - y0, kStD), woodTone(id), shine: 0.05);
    b.endGroup();
  }

  beam(idHeader0, kDoor, kDoor.top, kDoor.top + 7.5);
  beam(idHeader0 + 1, kWindow, kWindow.top, kWindow.top + 7.5);
  beam(idHeader0 + 2, kWindow, kWindow.sill, kWindow.sill + 1.5);
  // The ceiling joists (2 by 6), resting on the top plates and running across the room.
  b.order = 1;
  for (var i = 0; i < kJoists; i++) {
    b.id = idJoist0 + i;
    b.box(V3(joistX(i), 96 + 2.75, 0), const V3(1.5, 5.5, 144), woodTone(i + 40), shine: 0.05, split: 2);
  }
  // The breaker panel, set between two studs on the panel wall: grey steel with a door and a row of breakers behind.
  b.order = 2;
  b.id = idPanel;
  final pc = (kPanelY0 + kPanelY1) / 2;
  b.box(wallPt(kPanelWall, kPanelU, pc, 1.75), wallSize(kPanelWall, 14.25, kPanelY1 - kPanelY0, 3.4), const Color(0xFF8F98A3), shine: 0.35);
  b.box(wallPt(kPanelWall, kPanelU, pc, 3.55), wallSize(kPanelWall, 12.4, kPanelY1 - kPanelY0 - 3.4, 0.3), const Color(0xFFA7B0BA), shine: 0.45);
  for (var i = 0; i < 6; i++) {
    final y = kPanelY0 + 6 + i * 3.4;
    for (final s in const [-1.0, 1.0]) {
      b.box(wallPt(kPanelWall, kPanelU + s * 2.2, y, 3.8), wallSize(kPanelWall, 3.2, 2.2, 0.3), i == 5 ? const Color(0xFFD33B2F) : const Color(0xFF2B2F36), shine: 0.2);
    }
  }
  b.box(wallPt(kPanelWall, kPanelU, kPanelY1 - 2.2, 3.8), wallSize(kPanelWall, 8, 1.6, 0.25), const Color(0xFFF1F1EA));
  b.id = 0;
}

/// A blue plastic box nailed to the side of a stud (its face level with the front of the stud), or hanging on a joist.
void drawElectricalBox(MeshBuilder b, {required int id, required int wall, required double u, required double y, required double side}) {
  b.order = 2;
  b.id = id;
  final uc = u + side * (kStT / 2 + 1.15);
  b.box(wallPt(wall, uc, y, kStD - 1.25), wallSize(wall, 2.3, 4.2, 2.5), kBoxBlue, shine: 0.3);
  b.box(wallPt(wall, uc, y, kStD + 0.02), wallSize(wall, 1.7, 3.5, 0.06), const Color(0xFF123A82), shine: 0.1);
  // The nails: two small silver heads on the side that touches the stud.
  for (final dy in const [-1.2, 1.2]) {
    b.ball(wallPt(wall, uc - side * 1.18, y + dy, kStD - 0.9), 0.22, const Color(0xFFC9CED6), shine: 0.7, lat: 3, lon: 5);
  }
}

void drawCeilingBox(MeshBuilder b, {required int id, required double x, int order = 2}) {
  b.order = order;
  b.id = id;
  final cx = x + 0.75 + 2.3;
  b.cyl(V3(cx, 96.0, 0), V3(cx, 99.8, 0), 2.3, kBoxBlue, shine: 0.3, sides: 12);
  b.cyl(V3(cx, 95.95, 0), V3(cx, 96.05, 0), 1.7, const Color(0xFF123A82), sides: 12);
}

/// A roll of cable on the floor (yellow 12 gauge, with its white band), a cordless drill and a box of staples: the tools of the job.
void drawWiringProps(MeshBuilder b) {
  b.order = 2;
  b.id = 0;
  b.id = idPropRoll;
  // The roll, standing on its edge: a thick ring of yellow cable, a black label, a white band.
  b.ring(const V3(36, 8, -44), const V3(36, 8, -37), 8, 3, kNmYellow, shine: 0.3, sides: 20);
  b.ring(const V3(36, 8, -43.4), const V3(36, 8, -37.6), 8.15, 7.2, const Color(0xFFE9E7DC), shine: 0.2, sides: 20);
  b.box(const V3(36, 4.2, -40.5), const V3(2.4, 2.6, 6.2), const Color(0xFF1E2228), shine: 0.1);
  b.id = idPropDrill;
  // A cordless drill lying on the floor: body, handle, battery, chuck and bit.
  const dx = -34.0, dz = -38.0;
  b.box(const V3(dx, 3.2, dz), const V3(10, 4.6, 3.6), const Color(0xFFF2B100), shine: 0.4);
  b.box(const V3(dx - 1.5, 2.0, dz), const V3(3.2, 4.0, 3.2), const Color(0xFF22262C), shine: 0.3);
  b.box(const V3(dx - 1.5, 0.9, dz), const V3(6.0, 1.8, 3.6), const Color(0xFF22262C), shine: 0.2);
  b.cyl(const V3(dx + 5, 3.4, dz), const V3(dx + 8.2, 3.4, dz), 1.25, const Color(0xFF9AA2AD), shine: 0.8, sides: 10);
  b.cyl(const V3(dx + 8.2, 3.4, dz), const V3(dx + 12.5, 3.4, dz), 0.38, const Color(0xFFC9CED6), shine: 0.9, sides: 6);
  _propPad(b, idPropRoll, const V3(36, 8, -40), const V3(19, 18, 12));
  _propPad(b, idPropDrill, const V3(-30, 3, -38), const V3(20, 9, 10));
}

/// The tools as chips in rows that wrap, so every tool is on the screen at once and none is hidden to the side.
Widget frameToolTray(List<(String, String, IconData)> tools, String current, void Function(String) onTap, {List<Widget> extra = const []}) {
  const amber = Color(0xFFF59E0B);
  return Wrap(spacing: 6, runSpacing: 6, children: [
    for (final (k, label, icon) in tools)
      GestureDetector(
        key: Key('tool-$k'),
        onTap: () => onTap(k),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
          decoration: BoxDecoration(color: current == k ? amber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(13), border: Border.all(color: current == k ? amber : Colors.white24, width: current == k ? 2 : 1)),
          child: Row(mainAxisSize: MainAxisSize.min, children: [Icon(icon, size: 17, color: current == k ? amber : Colors.white70), const SizedBox(width: 5), Text(label, style: TextStyle(color: current == k ? amber : Colors.white, fontWeight: FontWeight.w800, fontSize: 12))]),
        ),
      ),
    ...extra,
  ]);
}

/// Where a double tap on the floor (or on a wall, which points to the floor behind it) takes the person: a spot inside the room.
V3? frameGoPoint(Cam3 cam, Offset local, Size size) {
  final p = cam.floorPoint(local, size);
  if (p == null) return null;
  return V3(p.x.clamp(-56.0, 56.0).toDouble(), 46, p.z.clamp(-44.0, 44.0).toDouble());
}

/// Rings that spread over the floor where the person is going, for a moment.
List<Poly> frameGoRing(V3? at, double since, double now) {
  final age = now - since;
  if (at == null || age < 0 || age > 1.6) return const [];
  final b = MeshBuilder()
    ..id = 0
    ..order = 3
    ..bias = 2;
  for (var k = 0; k < 2; k++) {
    final ph = (age * 0.9 + k * 0.5) % 1.0;
    final r = 3 + ph * 14;
    b.alpha = 0.85 * (1 - ph);
    b.ring(V3(at.x, 0.4, at.z), V3(at.x, 0.6, at.z), r, r - 1.3, const Color(0xFFFFD60A), shine: 0, sides: 20);
  }
  return b.polys;
}

/// Daylight seen through the window and the door (and the grass outside the door). They are only put in the picture when the person looks
/// that way, so they are never in the way when the view turns round.
List<Poly> frameBackdrops(Cam3 cam) {
  if (cam.keepIn == null) return const [];
  final b = MeshBuilder()
    ..id = 0
    ..order = -1;
  if (math.sin(cam.yaw) > -0.35) {
    b.box(wallPt(1, (kWindow.u0 + kWindow.u1) / 2, 54, -3), wallSize(1, 40, 38, 0.5), const Color(0xFF9AD0F5));
  }
  if (math.cos(cam.yaw) < 0.35) {
    b.box(wallPt(2, (kDoor.u0 + kDoor.u1) / 2, 42, -3), wallSize(2, 40, 84, 0.5), const Color(0xFF9AD0F5));
    b.box(wallPt(2, (kDoor.u0 + kDoor.u1) / 2, 4, -2.7), wallSize(2, 40, 8, 0.5), const Color(0xFF6BAA5A));
  }
  return b.polys;
}

/// An invisible pad round a tool on the floor, so a finger picks it up at once.
void _propPad(MeshBuilder b, int id, V3 c, V3 s) {
  b
    ..id = id
    ..order = 3
    ..bias = 0.9
    ..alpha = 0.02;
  b.box(c, s, Colors.white);
  b
    ..alpha = 1
    ..bias = 0
    ..order = 2;
}

void propPad(MeshBuilder b, int id, V3 c, V3 s) => _propPad(b, id, c, s);
