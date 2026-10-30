import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The traffic of the city: big buses and police cars that drive themselves round the streets, each in its own lane, with traffic
// lights at the crossings. Cars wait behind the car in front and stop at a red light; the people on foot get a walking
// signal while the cars are stopped. And helicopters that circle in the sky. Every vehicle carries a billboard that plays an NGMY ad.
// ═════════════════════════════════════════════════════════════════════════════

class CityVehicle {
  const CityVehicle(this.kind, this.x0, this.z0, this.x1, this.z1, this.speed, this.phase, this.ad);

  /// bus or police.
  final String kind;

  /// The loop it drives round: a rectangle of road with rounded corners (it goes round the roundabouts and never turns back).
  /// The corners are the middle of its own lane, a quarter of the road in from the middle of the street.
  final double x0, z0, x1, z1;

  /// How fast it goes at most, where on the loop it starts, and which ad its billboard plays.
  final double speed, phase;
  final int ad;

  /// How long and how wide it is (the drawing is scaled to this), so cars can keep their distance and a person can be hit.
  double get length => kind == 'bus' ? 150 * kBusSize.x : 101 * kPoliceSize.x;
  double get width => kind == 'bus' ? 43 * kBusSize.z : 37 * kPoliceSize.z;
}

/// The corners of a loop are quarter turns of this radius, round the roundabouts.
const double kLoopTurn = 100;

/// The streets are 100 wide: two lanes of 50, and each car keeps to the middle of its lane (25 from the middle of the street).
const double kRoadWidth = 100, kLaneOffset = 25;

/// Four vehicles, two on each loop (the loops share the middle street, each driving on its own side of it). The two on a loop go
/// at the same speed, half a loop apart, so one never catches the other up.
const List<CityVehicle> kTraffic = [
  CityVehicle('bus', -575, 445, -25, 835, 34, 0, 1),
  CityVehicle('police', -575, 445, -25, 835, 34, 854, 5),
  CityVehicle('bus', 25, 445, 575, 835, 34, 850, 3),
  CityVehicle('police', 25, 445, 575, 835, 34, 1704, 6),
];

/// How far along its loop a vehicle is, and what a loop is made of.
({double sx, double sz, double arc, double per}) _loopShape(CityVehicle v) {
  const r = kLoopTurn;
  final sx = v.x1 - v.x0 - 2 * r, sz = v.z1 - v.z0 - 2 * r;
  const arc = math.pi * r / 2;
  return (sx: sx, sz: sz, arc: arc, per: 2 * sx + 2 * sz + 4 * arc);
}

/// Where a vehicle is when it has driven [dist] along its loop, and which way it faces (the x and z of its direction).
(double, double, double, double) loopPoint(CityVehicle v, double dist) {
  const r = kLoopTurn;
  final sh = _loopShape(v);
  final sx = sh.sx, sz = sh.sz, arc = sh.arc;
  var s = dist % sh.per;
  if (s < 0) s += sh.per;
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

// ── Traffic lights ──

/// A set of lights at a crossing: on which loop (the vehicles of that loop obey it), how far along the loop the stop line is, and when in
/// the cycle it starts.
class CityLight {
  const CityLight(this.loop, this.stopAt, this.offset);
  final int loop;
  final double stopAt;
  final double offset;
}

/// A whole cycle of the lights, in seconds: green, then amber, then red (the people on foot cross while it is red).
const double kLightCycle = 28, kGreen = 12, kAmber = 3;

/// Two crossings on each long street of each loop (a loop is 550 long and 390 across).
final List<CityLight> kLights = [
  for (var loop = 0; loop < 2; loop++) ...[
    CityLight(loop, 175, loop * 9.0),
    CityLight(loop, 612, loop * 9.0 + 14),
    CityLight(loop, 1013, loop * 9.0 + 7),
  ],
];

/// 0 green, 1 amber, 2 red for the cars, at time [t].
int lightState(CityLight l, double t) {
  final c = (t + l.offset) % kLightCycle;
  if (c < kGreen) return 0;
  if (c < kGreen + kAmber) return 1;
  return 2;
}

/// Can people on foot cross now? Only while the cars have a red light (and a moment after it turned red, and not in the last two
/// seconds before it turns green).
bool walkSignal(CityLight l, double t) {
  final c = (t + l.offset) % kLightCycle;
  return c >= kGreen + kAmber + 2 && c < kLightCycle - 2;
}

/// Where the pole of a light stands (beside the road at the stop line), which way the cars come, and the middle of its crosswalk.
({double x, double z, double ux, double uz, double cx, double cz}) lightSpot(CityLight l) {
  final v = kTraffic[l.loop * 2];
  final (x, z, ux, uz) = loopPoint(v, l.stopAt);
  // The right hand of the driver: where the pole stands, just off the tarmac.
  final rx = -uz, rz = ux;
  final (cx, cz, _, _) = loopPoint(v, l.stopAt + 22);
  return (x: x + rx * (kLaneOffset + 31), z: z + rz * (kLaneOffset + 31), ux: ux, uz: uz, cx: cx, cz: cz);
}

// ── The traffic itself ──

/// A place where the two loops come close (the corners at the two ends of the middle street). Long vehicles swing wide in a
/// corner, so only one at a time may be in it. [entry] is, for each vehicle, how far along its loop it is when its body first
/// touches the zone, and [len] how much further it drives before it is out again.
class _Zone {
  _Zone(this.x0, this.x1, this.z0, this.z1) {
    for (final v in kTraffic) {
      final per = _loopShape(v).per;
      bool inZone(double s) {
        final (px, pz, ux, uz) = loopPoint(v, s);
        for (final fa in const [-0.5, -0.25, 0.0, 0.25, 0.5]) {
          for (final fs in const [-0.5, 0.0, 0.5]) {
            final x = px + ux * fa * v.length - uz * fs * v.width, z = pz + uz * fa * v.length + ux * fs * v.width;
            if (x > x0 && x < x1 && z > z0 && z < z1) return true;
          }
        }
        return false;
      }

      // Start the count somewhere outside the zone, so a vehicle that is in it at the start of the loop is counted whole.
      var from = 0.0;
      while (inZone(from) && from < per) {
        from += 1;
      }
      var first = -1.0, run = 0.0;
      for (var k = 0.0; k < per; k += 1) {
        final s = (from + k) % per;
        if (inZone(s)) {
          if (first < 0) first = s;
          run += 1;
        } else if (first >= 0) {
          break;
        }
      }
      entry.add(first);
      len.add(run);
    }
  }

  final double x0, x1, z0, z1;
  final List<double> entry = [], len = [];
  int owner = -1;
}

final List<_Zone> _zones = [_Zone(-80, 80, 400, 565), _Zone(-80, 80, 715, 885)];

/// The cars drive by themselves: each keeps its distance from the one in front, waits for a person on foot in its way, and stops at a
/// red light. It is worked out a little at a time (so a car can wait and then go again) and the same every run.
class CityTrafficSim {
  CityTrafficSim._();
  static final CityTrafficSim instance = CityTrafficSim._();

  static const double _step = 0.05, _accel = 40, _brake = 110;

  final List<double> _s = [for (final v in kTraffic) v.phase];
  final List<double> _speed = List<double>.filled(kTraffic.length, 0.0);
  double _t = 0;

  /// The people on foot the cars must look out for (the couriers in the street): their x and z.
  List<(double, double)> pedestrians = const [];

  /// Starts again from nothing (the same every time).
  void reset() {
    for (var i = 0; i < kTraffic.length; i++) {
      _s[i] = kTraffic[i].phase;
      _speed[i] = 0;
    }
    _t = 0;
    for (final z in _zones) {
      z.owner = -1;
    }
  }

  /// How fast vehicle [i] goes now.
  double speedOf(int i) => _speed[i];

  /// Brings the cars up to the time [t].
  void advance(double t) {
    if (t < _t - 0.0001) reset();
    // A long pause (the page was away): the cars are just somewhere else, no need to work out every moment.
    if (t - _t > 90) _t = t - 2;
    while (_t < t - 1e-9) {
      final dt = math.min(_step, t - _t);
      _stepOnce(dt);
      _t += dt;
    }
  }

  void _stepOnce(double dt) {
    for (final z in _zones) {
      final o = z.owner;
      if (o < 0) continue;
      final per = _loopShape(kTraffic[o]).per;
      var into = (_s[o] - z.entry[o]) % per;
      if (into < 0) into += per;
      // It has driven through and out the other side: the zone is free for the next one.
      if (into >= z.len[o] && into < per / 2) z.owner = -1;
    }
    for (var i = 0; i < kTraffic.length; i++) {
      final v = kTraffic[i];
      final per = _loopShape(v).per;
      final half = v.length / 2;
      var target = v.speed;
      double room(double d) => d <= 0 ? 0 : math.sqrt(2 * _brake * d);
      // The car in front on the same loop: keep a gap.
      for (var j = 0; j < kTraffic.length; j++) {
        if (j == i || !_sameLoop(i, j)) continue;
        var gap = (_s[j] - _s[i]) % per;
        if (gap < 0) gap += per;
        gap -= half + kTraffic[j].length / 2;
        if (gap < 400) target = math.min(target, room(gap - 18));
      }
      // A red (or amber) light ahead.
      for (final l in kLights) {
        if (l.loop != i ~/ 2) continue;
        final st = lightState(l, _t);
        if (st == 0) continue;
        var d = (l.stopAt - (_s[i] + half)) % per;
        if (d < 0) d += per;
        if (d > per - 30) continue;
        if (d < 260 && !(st == 1 && d < _speed[i] * 1.2)) target = math.min(target, room(d - 4));
      }
      // The crossing zones at the two ends of the middle street: only one vehicle at a time may be inside one, the others wait at its edge.
      for (final z in _zones) {
        final a = z.entry[i];
        if (a < 0) continue;
        var d = (a - _s[i]) % per;
        if (d < 0) d += per;
        final inside = (_s[i] - a) % per < z.len[i];
        if (inside) {
          if (z.owner < 0) z.owner = i;
          continue;
        }
        if (z.owner == i) continue;
        final nearEnough = d < 40 + _speed[i] * _speed[i] / (2 * _brake) + 20;
        // A red light between the vehicle and the zone: it is held there by the light and does not take the zone for itself yet.
        var lightFirst = false;
        for (final l in kLights) {
          if (l.loop != i ~/ 2 || lightState(l, _t) == 0) continue;
          var dl = (l.stopAt - (_s[i] + half)) % per;
          if (dl < 0) dl += per;
          if (dl < d) lightFirst = true;
        }
        if (z.owner < 0 && nearEnough && !lightFirst) {
          z.owner = i;
          continue;
        }
        if (d < 400) target = math.min(target, room(d - 10));
      }
      // A person on foot in front of it.
      final (px, pz, ux, uz) = loopPoint(v, _s[i]);
      for (final (qx, qz) in pedestrians) {
        final dx = qx - px, dz = qz - pz;
        final along = dx * ux + dz * uz;
        final side = -dx * uz + dz * ux;
        if (along > half - 5 && along < half + 110 && side.abs() < v.width / 2 + 16) target = math.min(target, room(along - half - 10));
      }
      final sp = _speed[i];
      _speed[i] = sp < target ? math.min(target, sp + _accel * dt) : math.max(target, sp - _brake * dt);
      if (_speed[i] < 0) _speed[i] = 0;
      _s[i] += _speed[i] * dt;
    }
  }

  bool _sameLoop(int a, int b) => a ~/ 2 == b ~/ 2;

  /// Where vehicle [i] is at time [t] and which way it faces.
  (double, double, double, double) pose(int i, double t) {
    advance(t);
    return loopPoint(kTraffic[i], _s[i]);
  }

  /// The vehicle that hits somebody standing at ([x], [z]) right now (it has to be moving), or -1.
  int hit(double x, double z) {
    for (var i = 0; i < kTraffic.length; i++) {
      if (_speed[i] < 4) continue;
      final v = kTraffic[i];
      final (px, pz, ux, uz) = loopPoint(v, _s[i]);
      final dx = x - px, dz = z - pz;
      final along = dx * ux + dz * uz;
      final side = -dx * uz + dz * ux;
      if (along.abs() < v.length / 2 + 6 && side.abs() < v.width / 2 + 7) return i;
    }
    return -1;
  }
}

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
(double, double, double, double) vehiclePose(CityVehicle v, double t) => CityTrafficSim.instance.pose(kTraffic.indexOf(v), t);

/// The buses and police cars are drawn big, so their billboards can be big: this is how much longer, taller and wider than the first drawing.
const V3 kBusSize = V3(0.8, 1.7, 0.78), kPoliceSize = V3(0.95, 1.7, 0.85);

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
  for (final l in kLights) {
    out.addAll(_lightPolys(l, t));
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
  ScreenQuad quad(V3 tl, V3 tr, V3 br, V3 bl, int ad, double w, double h) => ScreenQuad([tl, tr, br, bl], 0, (c, size, time) => paintCityAdLoop(c, size, time, ad), width: w, height: h, bias: 6, order: 2);
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

// ── The lights and the crosswalks, drawn ──

/// One set of lights: the pole with the three lamps for the cars (the lit one is bright) and a signal for people on foot (a green
/// walking person, or a red hand), made for time [t] and stood where the stop line is.
List<Poly> _lightPolys(CityLight l, double t) {
  final spot = lightSpot(l);
  final st = lightState(l, t);
  final walk = walkSignal(l, t);
  final b = MeshBuilder()
    ..grouped = true
    ..order = 2;
  b.cyl(const V3(0, 0, 0), const V3(0, 82, 0), 1.7, const Color(0xFF4B5563), sides: 6);
  b.box(const V3(0, 66, 0), const V3(7, 27, 10), const Color(0xFF111827), shine: 0.3);
  const dim = [Color(0xFF3B1212), Color(0xFF3B2F0A), Color(0xFF0B2E17)];
  const lit = [Color(0xFFEF4444), Color(0xFFFACC15), Color(0xFF22C55E)];
  // From the top: red, amber, green. They face the cars that are coming (the way back along the street).
  for (var k = 0; k < 3; k++) {
    final on = (k == 0 && st == 2) || (k == 1 && st == 1) || (k == 2 && st == 0);
    b.ball(V3(-3.9, 74 - k * 8.0, 0), 3.3, on ? lit[k] : dim[k], shine: on ? 0.9 : 0.1, lat: 4, lon: 7);
  }
  // The signal for people on foot looks across the road.
  b.box(const V3(0, 36, -3), const V3(10, 16, 3), const Color(0xFF111827), shine: 0.3);
  if (walk) {
    const g = Color(0xFF22C55E);
    b.ball(const V3(0, 41.5, -4.9), 1.6, g, lat: 4, lon: 6);
    b.box(const V3(0, 37.5, -4.9), const V3(3.2, 5, 0.8), g);
    b.box(const V3(-1, 33.4, -4.9), const V3(1.3, 4, 0.8), g);
    b.box(const V3(1, 33.4, -4.9), const V3(1.3, 4, 0.8), g);
  } else {
    // The red hand: a palm and four fingers.
    const r = Color(0xFFEF4444);
    b.box(const V3(0, 35.5, -4.9), const V3(5, 5, 0.8), r);
    for (var i = -2; i <= 1; i++) {
      b.box(V3(i * 1.25 + 0.6, 40, -4.9), const V3(1, 4.5, 0.8), r);
    }
    b.box(const V3(-3, 37, -4.9), const V3(1, 3, 0.8), r);
  }
  return transformPolys(b.polys, ry: _heading(spot.ux, spot.uz), t: V3(spot.x, 0, spot.z));
}

/// The zebra crossings and the stop lines on the road at every set of lights (they never change, so they are part of the scene).
List<Poly> crosswalkPolys() {
  final b = MeshBuilder()
    ..order = 1
    ..bias = 90;
  const up = V3(0, 1, 0);
  const white = Color(0xFFE5E7EB);
  void strip(double cx, double cz, double ux, double uz, double along, double lateral, double alongLen, double latLen) {
    final rx = -uz, rz = ux;
    final x = cx + ux * along + rx * lateral, z = cz + uz * along + rz * lateral;
    V3 p(double a, double s) => V3(x + ux * a + rx * s, 0.95, z + uz * a + rz * s);
    b.quad(p(-alongLen / 2, -latLen / 2), p(alongLen / 2, -latLen / 2), p(alongLen / 2, latLen / 2), p(-alongLen / 2, latLen / 2), white, normal: up);
  }

  for (final l in kLights) {
    final v = kTraffic[l.loop * 2];
    final (cx, cz, ux, uz) = loopPoint(v, l.stopAt + 22);
    // The zebra: stripes along the street, side by side right across it (the middle of the street is 25 to the left of the lane).
    for (var k = -4; k <= 4; k++) {
      strip(cx, cz, ux, uz, 0, -kLaneOffset + k * 11.0, 18, 5);
    }
    final (sx, sz, _, _) = loopPoint(v, l.stopAt - 6);
    strip(sx, sz, ux, uz, 0, 0, 2.2, 46);
  }
  return b.polys;
}
