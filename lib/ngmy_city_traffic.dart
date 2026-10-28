import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The traffic of the city: big buses and police cars that drive themselves up and down the streets, and helicopters that
// circle in the sky. Every one carries a billboard that plays an NGMY ad, and each plays a different one.
// ═════════════════════════════════════════════════════════════════════════════

class CityVehicle {
  const CityVehicle(this.kind, this.alongX, this.fixed, this.lo, this.hi, this.speed, this.phase, this.ad);

  /// bus or police.
  final String kind;

  /// Driving along x (on a street that runs left to right) or along z.
  final bool alongX;

  /// The street: the z (or x) it stays on, and the stretch it drives, in both directions, and how fast.
  final double fixed, lo, hi, speed, phase;

  /// Which ad its billboard plays.
  final int ad;
}

const List<CityVehicle> kTraffic = [
  CityVehicle('bus', true, 374, -540, 540, 36, 0, 1),
  CityVehicle('bus', true, 774, -540, 540, 30, 420, 3),
  CityVehicle('police', true, 346, -540, 540, 48, 700, 5),
  CityVehicle('police', true, 746, -540, 540, 42, 200, 6),
  CityVehicle('bus', false, 14, 175, 735, 28, 100, 2),
  CityVehicle('police', false, -14, 175, 735, 34, 50, 4),
];

/// The two helicopters: where they circle, how high, and their ads.
const List<(double, double, double, int)> kHelis = [(0, 560, 240, 7), (0, 560, 300, 9)];

/// Where a vehicle is at time [t] and which way it faces (the x and z of its direction).
(double, double, double, double) vehiclePose(CityVehicle v, double t) {
  final len = v.hi - v.lo;
  final s = (t * v.speed + v.phase) % (2 * len);
  final fwd = s < len;
  final p = v.lo + (fwd ? s : 2 * len - s);
  final dir = fwd ? 1.0 : -1.0;
  return v.alongX ? (p, v.fixed, dir, 0) : (v.fixed, p, 0, dir);
}

double _heading(double ux, double uz) => math.atan2(ux, uz) - math.pi / 2;

V3 _at(V3 l, double a, double x, double y, double z) => rotY(l, a) + V3(x, y, z);

MeshBuilder _bus() {
  final b = MeshBuilder()
    ..grouped = true
    ..order = 2;
  b.box(const V3(0, 20, 0), const V3(150, 30, 42), const Color(0xFF1E3A8A), shine: 0.3);
  b.box(const V3(0, 36.5, 0), const V3(146, 3, 40), const Color(0xFFF1F5F9), shine: 0.2);
  b.box(const V3(0, 30, 0), const V3(140, 9, 43), const Color(0xFF9BD3F5), shine: 0.6);
  b.box(const V3(75.4, 24, 0), const V3(1, 16, 36), const Color(0xFF9BD3F5), shine: 0.6);
  b.box(const V3(0, 6.6, 0), const V3(151, 3, 43), const Color(0xFFFACC15));
  for (final z in const [-14.0, 14.0]) {
    b.box(V3(75.5, 9, z), const V3(1, 3, 6), const Color(0xFFFFF1A8));
  }
  for (final x in const [-48.0, 48.0]) {
    for (final z in const [-21.0, 21.0]) {
      b.cyl(V3(x, 7, z - 1.5), V3(x, 7, z + 1.5), 7.5, const Color(0xFF15171C), sides: 12);
    }
  }
  return b;
}

MeshBuilder _police(double t, int seed) {
  final b = MeshBuilder()
    ..grouped = true
    ..order = 2;
  b.box(const V3(0, 12, 0), const V3(100, 14, 36), const Color(0xFFF1F5F9), shine: 0.4);
  b.box(const V3(-8, 24, 0), const V3(50, 12, 32), const Color(0xFFF1F5F9), shine: 0.4);
  b.box(const V3(-8, 25, 0), const V3(51, 7, 33), const Color(0xFF9BD3F5), shine: 0.6);
  b.box(const V3(0, 8, 0), const V3(101, 4, 37), const Color(0xFF1D4ED8));
  // The light bar flashes red and blue.
  final flip = ((t * 5 + seed) % 2) < 1;
  b.box(const V3(-8, 31.5, -6), const V3(12, 3, 9), flip ? const Color(0xFFEF4444) : const Color(0xFF7F1D1D), shine: 0.6);
  b.box(const V3(-8, 31.5, 6), const V3(12, 3, 9), flip ? const Color(0xFF1E3A8A) : const Color(0xFF3B82F6), shine: 0.6);
  for (final x in const [-32.0, 32.0]) {
    for (final z in const [-18.0, 18.0]) {
      b.cyl(V3(x, 6.5, z - 1.5), V3(x, 6.5, z + 1.5), 6.5, const Color(0xFF15171C), sides: 12);
    }
  }
  return b;
}

/// The vehicles and helicopters, drawn for time [t].
List<Poly> trafficPolys(double t) {
  final out = <Poly>[];
  for (var i = 0; i < kTraffic.length; i++) {
    final v = kTraffic[i];
    final (x, z, ux, uz) = vehiclePose(v, t);
    final m = v.kind == 'bus' ? _bus() : _police(t, i);
    out.addAll(transformPolys(m.polys, ry: _heading(ux, uz), t: V3(x, 0, z)));
  }
  for (var i = 0; i < kHelis.length; i++) {
    final (cx, cz, alt, _) = kHelis[i];
    final th = t * 0.09 + i * math.pi;
    const radius = 520.0;
    final x = cx + radius * math.cos(th), z = cz + radius * math.sin(th);
    final a = _heading(-math.sin(th), math.cos(th));
    final b = MeshBuilder()
      ..grouped = true
      ..order = 2;
    b.box(const V3(0, 0, 0), const V3(40, 16, 18), const Color(0xFFDC2626), shine: 0.4);
    b.box(const V3(17, 1, 0), const V3(10, 12, 16), const Color(0xFF9BD3F5), shine: 0.7);
    b.cyl(const V3(18, 3, 0), const V3(62, 5, 0), 2.6, const Color(0xFFDC2626), sides: 8);
    b.box(const V3(62, 11, 0), const V3(3, 14, 1.5), const Color(0xFFF1F5F9));
    b.cyl(const V3(0, 8, 0), const V3(0, 13, 0), 1.2, const Color(0xFF2B2D33), sides: 8);
    for (var k = 0; k < 2; k++) {
      final r = t * 22 + k * math.pi / 2;
      b.box(V3(0, 13.4, 0), const V3(76, 0.6, 4), const Color(0xFF2B2D33), yaw: r);
    }
    for (final zz in const [-8.0, 8.0]) {
      b.box(V3(0, -11, zz), const V3(34, 1.4, 1.4), const Color(0xFF2B2D33));
      b.box(V3(-10, -6, zz), const V3(1.2, 9, 1.2), const Color(0xFF2B2D33));
      b.box(V3(10, -6, zz), const V3(1.2, 9, 1.2), const Color(0xFF2B2D33));
    }
    // Two ropes down to the banner.
    for (final xx in const [-34.0, 34.0]) {
      b.tube([V3(xx * 0.45, -10, 0), V3(xx, -22, 0)], 0.3, const Color(0xFF2B2D33), shine: 0, sides: 4, joints: false);
    }
    out.addAll(transformPolys(b.polys, ry: a, t: V3(x, alt + math.sin(t * 0.9 + i) * 5, z)));
  }
  return out;
}

/// The billboards that move with the vehicles: one on each side of a bus or police car, one on each helicopter banner.
List<ScreenQuad> trafficScreens(double t) {
  final out = <ScreenQuad>[];
  ScreenQuad quad(V3 tl, V3 tr, V3 br, V3 bl, int ad, double w, double h, {bool two = false}) => ScreenQuad([tl, tr, br, bl], 0, (c, size, time) => paintCityAd(c, size, time, ad), width: w, height: h, bias: 6, order: 2, twoSided: two);
  for (var i = 0; i < kTraffic.length; i++) {
    final v = kTraffic[i];
    final (x, z, ux, uz) = vehiclePose(v, t);
    final a = _heading(ux, uz);
    V3 p(double lx, double ly, double lz) => _at(V3(lx, ly, lz), a, x, 0, z);
    if (v.kind == 'bus') {
      out.add(quad(p(-51, 24, 21.8), p(51, 24, 21.8), p(51, 7.5, 21.8), p(-51, 7.5, 21.8), v.ad, 900, 150));
      out.add(quad(p(51, 24, -21.8), p(-51, 24, -21.8), p(-51, 7.5, -21.8), p(51, 7.5, -21.8), v.ad + 5, 900, 150));
    } else {
      out.add(quad(p(-38, 18.5, 18.2), p(38, 18.5, 18.2), p(38, 5.5, 18.2), p(-38, 5.5, 18.2), v.ad, 900, 150));
      out.add(quad(p(38, 18.5, -18.2), p(-38, 18.5, -18.2), p(-38, 5.5, -18.2), p(38, 5.5, -18.2), v.ad + 4, 900, 150));
    }
  }
  for (var i = 0; i < kHelis.length; i++) {
    final (cx, cz, alt, ad) = kHelis[i];
    final th = t * 0.09 + i * math.pi;
    const radius = 520.0;
    final x = cx + radius * math.cos(th), z = cz + radius * math.sin(th);
    final a = _heading(-math.sin(th), math.cos(th));
    final y = alt + math.sin(t * 0.9 + i) * 5;
    V3 p(double lx, double ly) => _at(V3(lx, ly, 0), a, x, y, z);
    out.add(quad(p(-42, -22), p(42, -22), p(42, -44), p(-42, -44), ad, 900, 230, two: true));
  }
  return out;
}
