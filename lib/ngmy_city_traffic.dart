import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The traffic of the city: big buses and police cars that drive themselves up and down the streets, and helicopters that
// circle in the sky. Every one carries a billboard that plays an NGMY ad, and each plays a different one.
// ═════════════════════════════════════════════════════════════════════════════

class CityVehicle {
  const CityVehicle(this.kind, this.x0, this.z0, this.x1, this.z1, this.speed, this.phase, this.ad);

  /// bus or police.
  final String kind;

  /// The loop it drives round: a rectangle of road with rounded corners (it goes round the roundabouts and never turns back).
  final double x0, z0, x1, z1;

  /// How fast, where on the loop it starts, and which ad its billboard plays.
  final double speed, phase;
  final int ad;
}

/// The corners of a loop are quarter turns of this radius, round the roundabouts.
const double kLoopTurn = 30;

/// Four vehicles, two on each loop of road (the loops share the middle road, each driving on its own side of it).
const List<CityVehicle> kTraffic = [
  CityVehicle('bus', -591, 429, -9, 851, 36, 0, 1),
  CityVehicle('police', -591, 429, -9, 851, 44, 1000, 5),
  CityVehicle('bus', 9, 429, 591, 851, 32, 0, 3),
  CityVehicle('police', 9, 429, 591, 851, 40, 1000, 6),
];


/// The two helicopters: where they circle, how high, and their ads.
const List<(double, double, double, int)> kHelis = [(0, 560, 240, 7), (0, 560, 300, 9)];

/// Where helicopter [i] is at time [t] (x, height, z) and the way it flies (x, z of its direction).
(double, double, double, double, double) heliPose(int i, double t) {
  final (cx, cz, alt, _) = kHelis[i];
  final th = t * 0.09 + i * math.pi;
  const radius = 520.0;
  return (cx + radius * math.cos(th), alt + math.sin(t * 0.9 + i) * 5, cz + radius * math.sin(th), -math.sin(th), math.cos(th));
}

/// Where a vehicle is at time [t] and which way it faces (the x and z of its direction). It drives round its loop one way.
(double, double, double, double) vehiclePose(CityVehicle v, double t) {
  const r = kLoopTurn;
  final sx = v.x1 - v.x0 - 2 * r, sz = v.z1 - v.z0 - 2 * r;
  const arc = math.pi * r / 2;
  final per = 2 * sx + 2 * sz + 4 * arc;
  var s = (t * v.speed + v.phase) % per;
  (double, double, double, double) turn(double cx, double cz, double a0, double d) {
    final a = a0 + d / r;
    return (cx + r * math.cos(a), cz + r * math.sin(a), -math.sin(a), math.cos(a));
  }

  if (s < sx) return (v.x0 + r + s, v.z0, 1, 0);
  s -= sx;
  if (s < arc) return turn(v.x1 - r, v.z0 + r, -math.pi / 2, s);
  s -= arc;
  if (s < sz) return (v.x1, v.z0 + r + s, 0, 1);
  s -= sz;
  if (s < arc) return turn(v.x1 - r, v.z1 - r, 0, s);
  s -= arc;
  if (s < sx) return (v.x1 - r - s, v.z1, -1, 0);
  s -= sx;
  if (s < arc) return turn(v.x0 + r, v.z1 - r, math.pi / 2, s);
  s -= arc;
  if (s < sz) return (v.x0, v.z1 - r - s, 0, -1);
  s -= sz;
  return turn(v.x0 + r, v.z0 + r, math.pi, s);
}

/// The buses and police cars are drawn big, so their billboards can be big: this is how much longer, taller and wider than the first drawing.
const V3 kBusSize = V3(1.5, 1.7, 1.2), kPoliceSize = V3(1.45, 1.7, 1.15);

List<Poly> _scaled(List<Poly> ps, V3 k) => [for (final p in ps) Poly([for (final v in p.pts) V3(v.x * k.x, v.y * k.y, v.z * k.z)], p.n, p.color, p.id, shine: p.shine, alpha: p.alpha, twoSided: p.twoSided, layer: p.layer, bias: p.bias, order: p.order, group: p.group)];

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
    out.addAll(transformPolys(_scaled(m.polys, v.kind == 'bus' ? kBusSize : kPoliceSize), ry: _heading(ux, uz), t: V3(x, 0, z)));
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
  ScreenQuad quad(V3 tl, V3 tr, V3 br, V3 bl, int ad, double w, double h) => ScreenQuad([tl, tr, br, bl], 0, (c, size, time) => paintCityAd(c, size, time, ad), width: w, height: h, bias: 6, order: 2);
  for (var i = 0; i < kTraffic.length; i++) {
    final v = kTraffic[i];
    final (x, z, ux, uz) = vehiclePose(v, t);
    final a = _heading(ux, uz);
    V3 p(double lx, double ly, double lz) => _at(V3(lx, ly, lz), a, x, 0, z);
    final k = v.kind == 'bus' ? kBusSize : kPoliceSize;
    // One big billboard along each side, 94 percent of the length of the bus, each the right way up for someone standing on that side.
    final hx = (v.kind == 'bus' ? 51.0 : 38.0) * k.x, y1 = (v.kind == 'bus' ? 25.0 : 19.0) * k.y, y0 = (v.kind == 'bus' ? 7.5 : 5.5) * k.y, hz = (v.kind == 'bus' ? 21.8 : 18.2) * k.z;
    out.add(quad(p(-hx, y1, hz), p(hx, y1, hz), p(hx, y0, hz), p(-hx, y0, hz), v.ad, 1200, 220));
    out.add(quad(p(hx, y1, -hz), p(-hx, y1, -hz), p(-hx, y0, -hz), p(hx, y0, -hz), v.ad + 5, 1200, 220));
  }
  for (var i = 0; i < kHelis.length; i++) {
    final (cx, cz, alt, ad) = kHelis[i];
    final th = t * 0.09 + i * math.pi;
    const radius = 520.0;
    final x = cx + radius * math.cos(th), z = cz + radius * math.sin(th);
    final a = _heading(-math.sin(th), math.cos(th));
    final y = alt + math.sin(t * 0.9 + i) * 5;
    V3 p(double lx, double ly) => _at(V3(lx, ly, 0), a, x, y, z);
    out.add(quad(p(-42, -22), p(42, -22), p(42, -44), p(-42, -44), ad, 900, 230));
    out.add(quad(p(42, -22.3), p(-42, -22.3), p(-42, -44.3), p(42, -44.3), ad, 900, 230));
  }
  return out;
}
