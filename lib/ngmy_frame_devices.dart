import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';
import 'ngmy_construction_electrical_more.dart';
import 'ngmy_electronics_screens.dart';
import 'ngmy_frame_geo.dart';
import 'ngmy_frame_scene.dart';
import 'ngmy_frame_wiring.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The devices in the boxes (outlets, switches, a light, a fan), the knockouts of the boxes, and the things that plug in (TVs, phones,
// a lamp, the big machines): how they look, and how they move when the power is on.
// ═════════════════════════════════════════════════════════════════════════════

class AppInfo {
  const AppInfo(this.key, this.label, this.w);
  final String key, label;

  /// Width in inches.
  final double w;
}

const List<AppInfo> kTvs = [AppInfo('bangtv', 'Beovision 77"', 66), AppInfo('sonytv', 'Sony Bravia 75"', 64), AppInfo('lgtv', 'LG OLED 65"', 56), AppInfo('tv', 'Samsung 55"', 48), AppInfo('appletv', 'Apple TV 50"', 44)];
const List<AppInfo> kPhones = [AppInfo('phone', 'Phone', 3.0), AppInfo('bigphone', 'Big phone', 3.4), AppInfo('tablet', 'Tablet', 7.4)];
const List<AppInfo> kHomeApps = [AppInfo('lamp', 'Table lamp', 11), AppInfo('toaster', 'Toaster', 10), AppInfo('hairdryer', 'Hair dryer', 9), AppInfo('washerM', 'Washing machine', 27), AppInfo('dryerM', 'Clothes dryer', 27), AppInfo('rangeM', 'Kitchen range', 30)];

AppInfo? appInfo(String key) {
  for (final a in [...kTvs, ...kPhones, ...kHomeApps]) {
    if (a.key == key) return a;
  }
  return null;
}

bool isTvKey(String k) => kTvs.any((a) => a.key == k);
bool isPhoneKey(String k) => kPhones.any((a) => a.key == k);

/// Where the front of a box is: the middle of a wall box's face (on the side of its stud it is nailed to), or the underside of a ceiling box.
V3 boxFace(FBox x) {
  if (x.kind == 'ceiling') return V3(joistX(x.joist!) + 3.05, 96, 0);
  final uc = x.u + x.side * (kStT / 2 + 1.15);
  return wallPt(x.wall, uc, x.y, kStD);
}

/// The way a wall faces into the room, as the turn that puts something built facing +z against that wall.
double wallYaw(int wall) => switch (wall) {
      0 => 0.0,
      1 => -math.pi / 2,
      2 => math.pi,
      _ => math.pi / 2,
    };

/// The two knockouts of a box: round tabs in the top and the bottom (a ceiling box has them in its side). Closed they are grey; broken out they are dark holes.
void drawKnockouts(MeshBuilder b, FBox x) {
  b
    ..order = 2
    ..bias = 0.7;
  for (var k = 0; k < 2; k++) {
    b.id = koId(x.id, k);
    final open = x.kos[k];
    final col = open ? const Color(0xFF0B1220) : const Color(0xFFB8BEC8);
    if (x.kind == 'ceiling') {
      final cx = joistX(x.joist!) + 3.05;
      final s = k == 0 ? -1.0 : 1.0;
      b.cyl(V3(cx + s * 2.2, 97.9, 0), V3(cx + s * 2.5, 97.9, 0), 0.62, col, shine: open ? 0 : 0.6, sides: 10);
    } else {
      final uc = x.u + x.side * (kStT / 2 + 1.15);
      final yy = k == 0 ? x.y - 2.1 : x.y + 2.1;
      final dir = k == 0 ? -1.0 : 1.0;
      final c = wallPt(x.wall, uc, yy, kStD - 1.25);
      b.cyl(c, c + const V3(0, 1, 0) * (0.14 * dir), 0.62, col, shine: open ? 0 : 0.6, sides: 10);
      if (open) {
        // The torn edge of the hole.
        b.ring(c, c + const V3(0, 1, 0) * (0.2 * dir), 0.8, 0.55, const Color(0xFF9AA2AD), shine: 0.5, sides: 10);
      }
    }
  }
  b.bias = 0;
}

/// What is in a box once a device is in it: the device itself (a small white yoke) and, when the cover plate is on, the plate.
void drawDeviceFace(MeshBuilder b, FBox x, WiringHouse w) {
  final ws = x.ws;
  final kind = x.dev;
  if (ws == null || kind == null || ws.stage < 1) return;
  b
    ..order = 2
    ..id = x.id;
  final plate = ws.stage >= 2;
  const white = Color(0xFFF4F4EE);
  if (x.kind == 'ceiling') {
    final c = boxFace(x);
    if (kind == 'fan') {
      b.cyl(V3(c.x, 96, 0), V3(c.x, 91, 0), 1.2, const Color(0xFF8A6A47), shine: 0.3, sides: 10);
      b.cyl(V3(c.x, 91, 0), V3(c.x, 87.5, 0), 4.2, const Color(0xFF6B5030), shine: 0.35, sides: 14);
    } else {
      b.cyl(V3(c.x, 96, 0), V3(c.x, 94.6, 0), 3.4, const Color(0xFFC9CED6), shine: 0.7, sides: 14);
      b.ball(V3(c.x, 93, 0), 4.0, white, shine: 0.5, lat: 5, lon: 10);
    }
    return;
  }
  final uc = x.u + x.side * (kStT / 2 + 1.15);
  V3 at(double du, double dy, double depth) => wallPt(x.wall, uc + du, x.y + dy, depth);
  if (!plate) {
    // The device pushed in with the wires folded behind it: only its white face shows in the box.
    b.box(at(0, 0, kStD - 0.3), wallSize(x.wall, 1.7, 3.5, 0.5), white, shine: 0.3);
    b.box(at(0, 0, kStD - 0.02), wallSize(x.wall, 0.9, 0.5, 0.06), const Color(0xFFC9A03A), shine: 0.6);
    return;
  }
  final big = kApplianceOutlets.contains(kind);
  b.box(at(0, 0, kStD + 0.1), wallSize(x.wall, big ? 4.6 : 2.9, big ? 6.4 : 4.6, 0.22), const Color(0xFFF1EFE6), shine: 0.35);
  final f = kStD + 0.24;
  const dark = Color(0xFF2B2D33);
  if (isSwitchKind(kind)) {
    // The toggle: up when it is on, down when it is off.
    final up = x.on;
    b.box(at(0, 0, f + 0.08), wallSize(x.wall, 0.9, 2.4, 0.16), const Color(0xFFE6E3D8), shine: 0.3);
    b.box(at(0, up ? 0.55 : -0.55, f + 0.3), wallSize(x.wall, 0.55, 1.2, 0.45), white, shine: 0.5);
    if (kind == 'switchcombo') b.box(at(1.0, 0, f + 0.2), wallSize(x.wall, 0.5, 1.0, 0.3), white, shine: 0.4);
    if (kind == 'switchsmart') b.ball(at(0, 1.7, f + 0.1), 0.18, const Color(0xFF38BDF8), shine: 0.2, lat: 3, lon: 5);
    return;
  }
  if (kind == 'gfci') {
    b.box(at(0, 0, f + 0.05), wallSize(x.wall, 1.8, 4.0, 0.14), const Color(0xFFE6E3D8), shine: 0.3);
    b.box(at(0, 0.75, f + 0.16), wallSize(x.wall, 0.8, 0.45, 0.2), const Color(0xFF22262C), shine: 0.3);
    b.box(at(0, -0.75, f + 0.16), wallSize(x.wall, 0.8, 0.45, 0.2), const Color(0xFFD33B2F), shine: 0.3);
  }
  // The slots of every outlet (two upright slots and a round hole for the ground), top and bottom.
  final rows = big ? const [0.0] : const [1.1, -1.1];
  for (final dy in rows) {
    if (big) {
      for (final (du, rot) in const [(-0.9, 0.0), (0.9, 0.0)]) {
        b.box(at(du, 0.5, f + 0.03), wallSize(x.wall, 0.26, 1.2, 0.05), dark);
        if (rot != 0) continue;
      }
      b.box(at(0, -1.0, f + 0.03), wallSize(x.wall, 1.0, 0.3, 0.05), dark);
      b.ball(at(0, 1.6, f + 0.03), 0.3, dark, shine: 0.1, lat: 3, lon: 5);
    } else {
      b.box(at(-0.38, dy + 0.1, f + 0.03), wallSize(x.wall, 0.12, 0.5, 0.05), dark);
      b.box(at(0.38, dy + 0.1, f + 0.03), wallSize(x.wall, 0.12, 0.34, 0.05), dark);
      b.ball(at(0, dy - 0.45, f + 0.03), 0.16, dark, shine: 0.1, lat: 3, lon: 5);
    }
  }
}

/// A thing that plugs in, built standing on the floor with its front towards +z (the middle of its back at the origin).
List<Poly> _applianceLocal(String key, {required bool running, required double t}) {
  final b = MeshBuilder()
    ..id = 0
    ..order = 2;
  final info = appInfo(key)!;
  final w = info.w;
  if (isTvKey(key)) {
    final h = w * 0.56;
    b.box(const V3(0, 0.8, 9), V3(w * 0.4, 1.6, 10), const Color(0xFF2B2D33), shine: 0.3);
    b.box(const V3(0, 6.5, 9), const V3(5, 10, 3), const Color(0xFF2B2D33), shine: 0.3);
    b.box(V3(0, 11.5 + h / 2, 9), V3(w, h, 2.4), const Color(0xFF111418), shine: 0.5);
    return b.polys;
  }
  if (isPhoneKey(key)) {
    final h = key == 'tablet' ? 10.0 : (key == 'bigphone' ? 6.8 : 6.1);
    b.box(V3(0, 0.4, 5), V3(w + 1.2, 0.8, 3.4), const Color(0xFF2B2D33), shine: 0.3);
    b.box(V3(0, 0.8 + h / 2, 5), V3(w, h, 0.5), const Color(0xFF111418), shine: 0.5);
    b.ball(V3(0, 0.9, 6.8), 0.22, running ? const Color(0xFF4ADE80) : const Color(0xFFF59E0B), shine: 0.2, lat: 3, lon: 5);
    return b.polys;
  }
  switch (key) {
    case 'lamp':
      b.cyl(const V3(0, 0, 8), const V3(0, 1, 8), 3.6, const Color(0xFF8A6A47), shine: 0.4, sides: 14);
      b.cyl(const V3(0, 1, 8), const V3(0, 13, 8), 0.5, const Color(0xFFB08A5B), shine: 0.5, sides: 8);
      b.cyl(V3(0, 11, 8), V3(0, 19, 8), 5.6, running ? const Color(0xFFFFF1A8) : const Color(0xFFF3E7C8), shine: 0.2, sides: 16, caps: false, inner: true, r1: 3.8);
    case 'toaster':
      b.box(const V3(0, 3.4, 7), const V3(10, 6.8, 6), const Color(0xFFC9CED6), shine: 0.8);
      b.box(const V3(0, 6.9, 7), const V3(7, 0.2, 3.6), const Color(0xFF30333A));
      if (running) {
        b.bias = 0.5;
        b.box(const V3(0, 7.0, 7), V3(6, 0.15, 3), Color.lerp(const Color(0xFFFF5A1F), const Color(0xFFFFB347), (math.sin(t * 6) + 1) / 2)!);
        b.bias = 0;
      }
    case 'hairdryer':
      b.box(const V3(0, 0.8, 7), const V3(9, 1.6, 6), const Color(0xFF3B2F26), shine: 0.2);
      b.cyl(const V3(-3.5, 4.5, 7), const V3(3.5, 4.5, 7), 2.0, const Color(0xFFE2455A), shine: 0.6, sides: 12, r1: 1.6);
      b.box(const V3(-3.8, 2.3, 7), const V3(1.8, 3.6, 1.8), const Color(0xFFE2455A), shine: 0.6);
      if (running) {
        for (var i = 0; i < 6; i++) {
          final ph = (t * 1.6 + i / 6) % 1.0;
          b.ball(V3(4.5 + ph * 8, 4.5 + math.sin(i * 2.0) * 1.2, 7), 0.3, const Color(0xFFBFE3FF), shine: 0.2, lat: 3, lon: 5);
        }
      }
    case 'rangeM':
      b.box(const V3(0, 18, 13), const V3(30, 36, 26), const Color(0xFFB9BEC6), shine: 0.7);
      b.box(const V3(0, 16, 26.2), const V3(24, 14, 0.5), const Color(0xFF15181D), shine: 0.9);
      b.box(const V3(0, 25, 27), const V3(26, 1.2, 1.2), const Color(0xFF8A9099), shine: 0.9);
      b.box(const V3(0, 36.3, 13), const V3(30, 0.6, 26), const Color(0xFF23262B), shine: 0.5);
      for (final bx in const [-7.0, 7.0]) {
        for (final bz in const [6.0, 19.0]) {
          b.cyl(V3(bx, 36.6, bz), V3(bx, 36.9, bz), 4.2, const Color(0xFF3A3D44), shine: 0.3, sides: 14);
          if (running) {
            b.bias = 0.8;
            b.ring(V3(bx, 37.0, bz), V3(bx, 37.2, bz), 3.8, 2.0, Color.lerp(const Color(0xFFFF3B1F), const Color(0xFFFFA347), (math.sin(t * 5 + bx) + 1) / 2)!, shine: 0, sides: 12);
            b.bias = 0;
          }
        }
      }
    default:
      // The washing machine and the dryer: a cabinet, a dark control strip and a round glass door.
      final washer = key == 'washerM';
      b.box(const V3(0, 19, 13.5), const V3(27, 38, 27), washer ? const Color(0xFFEDEFF2) : const Color(0xFFE3DCCF), shine: 0.4);
      b.box(const V3(0, 35, 27.2), const V3(27, 6, 0.6), const Color(0xFF2E333B), shine: 0.3);
      b.cyl(const V3(0, 17, 27), const V3(0, 17, 28.2), 9.5, const Color(0xFFB8BEC6), shine: 0.8, sides: 20);
      b.cyl(const V3(0, 17, 28.1), const V3(0, 17, 28.6), 7.4, washer ? const Color(0xFF7FB6E8) : const Color(0xFF9FA8B3), shine: 0.9, sides: 20);
      if (running) {
        b.bias = 0.8;
        for (var i = 0; i < 3; i++) {
          final a = t * (washer ? 5 : 7) + i * 2.1;
          b.ball(V3(math.cos(a) * 4, 17 + math.sin(a) * 4, 28.9), 1.7, washer ? (i.isEven ? const Color(0xFFF2F2F2) : const Color(0xFFE2455A)) : (i.isEven ? const Color(0xFFFFB347) : const Color(0xFFF59E0B)), shine: 0.2, lat: 3, lon: 6);
        }
        b.bias = 0;
      }
  }
  return b.polys;
}

/// The place an appliance stands: 6 inches out from the wall in front of its outlet, on the floor (the big machines further out).
V3 appliancePos(FBox x, String key) {
  final deep = (appInfo(key)?.w ?? 10) > 20 ? 0.0 : 0.0;
  final uc = x.u + x.side * (kStT / 2 + 1.15);
  return wallPt(x.wall, uc, 0, kStD + 1.5 + deep);
}

List<Poly> appliancePolys(FBox x, String key, {required bool running, required double t}) {
  return transformPolys(_applianceLocal(key, running: running, t: t), ry: wallYaw(x.wall), t: appliancePos(x, key));
}

/// The cord from the outlet down to the appliance.
void drawCord(MeshBuilder b, FBox x, String key) {
  final plug = boxFace(x) + wallIn(x.wall) * 0.5;
  final base = appliancePos(x, key) + wallIn(x.wall) * 2.0;
  b
    ..id = 0
    ..order = 2
    ..bias = 0.6;
  b.box(plug, wallSize(x.wall, 2.0, 2.4, 0.9), const Color(0xFF22262C), shine: 0.2);
  b.tube([plug, V3(plug.x, 2.0, plug.z) + wallIn(x.wall) * 1.0, V3(base.x, 1.0, base.z)], 0.22, const Color(0xFF1B1B1D), shine: 0.2, sides: 6, joints: true);
  b.bias = 0;
}

/// Everything that moves: the fan blades, the glow of a light that is on, and the appliances that run.
List<Poly> deviceDynamic(WiringHouse w, double t) {
  final b = MeshBuilder()
    ..id = 0
    ..order = 2;
  for (final x in w.boxes) {
    if (x.kind == 'ceiling' && x.dev != null && w.deviceDone(x)) {
      final c = boxFace(x);
      final run = w.runs(x);
      if (x.dev == 'fan') {
        final ang = run ? t * 8 : 0.4;
        for (var k = 0; k < 4; k++) {
          final a = ang + k * math.pi / 2;
          b.box(V3(c.x, 88.5, 0) + rotY(const V3(11, 0, 0), a), const V3(18, 0.5, 4.4), const Color(0xFF7A5A3A), shine: 0.3, yaw: a);
        }
      }
      if (run && x.dev == 'light') {
        b
          ..bias = 0.9
          ..alpha = 0.28 + 0.05 * math.sin(t * 5);
        b.ball(V3(c.x, 93, 0), 11, const Color(0xFFFFE680), shine: 0, lat: 4, lon: 10);
        b
          ..alpha = 1
          ..bias = 0;
      }
    }
  }
  for (final e in w.plugged.entries) {
    final x = w.boxById(e.key);
    if (x == null) continue;
    b.polys.addAll(appliancePolys(x, e.value, running: w.runs(x), t: t));
  }
  return b.polys;
}

/// The cords of everything plugged in (drawn with the still scene).
void drawPlugged(MeshBuilder b, WiringHouse w) {
  for (final e in w.plugged.entries) {
    final x = w.boxById(e.key);
    if (x != null) drawCord(b, x, e.value);
  }
}

/// The pictures on the TVs and phones that are plugged in and running.
List<ScreenQuad> applianceScreens(WiringHouse w) {
  final out = <ScreenQuad>[];
  for (final e in w.plugged.entries) {
    final x = w.boxById(e.key);
    if (x == null || !w.runs(x)) continue;
    final info = appInfo(e.value)!;
    final yaw = wallYaw(x.wall);
    final pos = appliancePos(x, e.value);
    V3 q(double lx, double ly, double lz) => rotY(V3(lx, ly, lz), yaw) + pos;
    if (isTvKey(e.value)) {
      final sw = info.w - 3, sh = info.w * 0.56 - 3, y0 = 11.5 + 1.5;
      out.add(ScreenQuad([q(-sw / 2, y0 + sh, 10.3), q(sw / 2, y0 + sh, 10.3), q(sw / 2, y0, 10.3), q(-sw / 2, y0, 10.3)], 0, (c, size, t) => paintCityAdLoop(c, size, t, x.id + e.value.length), width: 960, height: 540, bias: 2, order: 2));
    } else if (isPhoneKey(e.value)) {
      final h = e.value == 'tablet' ? 10.0 : (e.value == 'bigphone' ? 6.8 : 6.1);
      final sw = info.w - 0.6, sh = h - 0.6, y0 = 0.8 + 0.3;
      out.add(ScreenQuad([q(-sw / 2, y0 + sh, 5.3), q(sw / 2, y0 + sh, 5.3), q(sw / 2, y0, 5.3), q(-sw / 2, y0, 5.3)], 0, (c, size, t) => paintNgmyApp(c, size, 0, t), width: 360, height: 640, bias: 2, order: 2));
    }
  }
  return out;
}

/// Where a knockout is (for the mark that shows where to tap, and the glow).
V3 koPos(FBox x, int k) {
  if (x.kind == 'ceiling') return V3(joistX(x.joist!) + 3.05 + (k == 0 ? -2.7 : 2.7), 97.9, 0);
  final uc = x.u + x.side * (kStT / 2 + 1.15);
  return wallPt(x.wall, uc, k == 0 ? x.y - 2.7 : x.y + 2.7, kStD - 1.25);
}
