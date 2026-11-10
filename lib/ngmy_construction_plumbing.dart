import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart' show kDrywall, kWood;

// ═════════════════════════════════════════════════════════════════════════════
// Plumbing lessons in 3D: building a sink drain (P-trap) and connecting the water supply to a faucet.
// ═════════════════════════════════════════════════════════════════════════════

const Color kPvc = Color(0xFFF2F2EC);
const Color kChrome = Color(0xFFC9CED6);
const Color kCopperPipe = Color(0xFFD08246);
const Color kStainless = Color(0xFFB6BCC4);
const Color kGranite = Color(0xFF4A4C54);
const Color kHot = Color(0xFFE23B3B);
const Color kCold = Color(0xFF2F7DE1);
const Color kBrassValve = Color(0xFFC9A03A);

// Object numbers for the drain lesson.
const int idTail = 41, idTrap = 42, idArm = 43, idNut1 = 44, idNut2 = 45, idSink = 46, idPWall = 47, idHub = 48, idCabinet = 49;
// Object numbers for the faucet lesson.
const int idValveHot = 61, idValveCold = 62, idInletHot = 63, idInletCold = 64, idFaucet = 65, idDeck = 66, idWallF = 67, idHoseHot = 68, idHoseCold = 69;

class PlumbState {
  /// The drain pieces that have been put in place: tail, trap, arm.
  final Set<String> placed = {};
  final Map<String, bool> tight = {'n1': false, 'n2': false};
  bool running = false;
  String leakAt = '';

  /// The faucet lesson: which hose is fastened to which place.
  final Map<int, String> attached = {};
  /// Each shut-off valve is turned by hand: the red one for the hot line, the blue one for the cold line.
  bool hotOpen = false, coldOpen = false;
  bool get valvesOpen => hotOpen && coldOpen;
  set valvesOpen(bool v) {
    hotOpen = v;
    coldOpen = v;
  }

  bool hints = false;
}

class PlumbHook {
  const PlumbHook(this.id, this.name, this.accepts, this.hint);
  final int id;
  final String name;
  final Set<String> accepts;
  final String hint;
}

const List<PlumbHook> kFaucetHooks = [
  PlumbHook(idValveHot, 'Hot shut-off valve (left)', {'hot'}, 'Hot is always on the LEFT. The red hose goes on the left valve.'),
  PlumbHook(idValveCold, 'Cold shut-off valve (right)', {'cold'}, 'Cold is always on the RIGHT. The blue hose goes on the right valve.'),
  PlumbHook(idInletHot, 'Hot faucet inlet (left)', {'hot'}, 'The left faucet inlet takes the hot (red) hose.'),
  PlumbHook(idInletCold, 'Cold faucet inlet (right)', {'cold'}, 'The right faucet inlet takes the cold (blue) hose.'),
];

/// Tries to fasten a hose end. Returns null when it is right, or the reason in plain words.
String? tryHose(PlumbState s, String hose, PlumbHook h) {
  if (!h.accepts.contains(hose)) {
    return hose == 'hot' ? 'The red (hot) hose goes on the LEFT side only. ${h.hint}' : 'The blue (cold) hose goes on the RIGHT side only. ${h.hint}';
  }
  if (s.attached[h.id] != null) return 'That connection already has a hose.';
  s.attached[h.id] = hose;
  return null;
}

// ─── Sink drain (P-trap) ─────────────────────────────────────────────────────

const double _pr = 0.66;

List<V3> ptrapTailPath() => const [V3(0, 8.3, 0), V3(0, 3.9, 0)];

List<V3> ptrapTrapPath() {
  final pts = <V3>[const V3(0, 3.9, 0), const V3(0, 0.2, 0)];
  for (var i = 1; i <= 12; i++) {
    final a = math.pi + math.pi * i / 12;
    pts.add(V3(3 + 3 * math.cos(a), 0.2 + 3 * math.sin(a), 0));
  }
  pts.addAll(roundedPath(const [V3(6, 0.2, 0), V3(6, 2.6, 0), V3(8.6, 2.6, 0)], 1.0));
  return pts;
}

List<V3> ptrapArmPath() => const [V3(8.6, 2.6, 0), V3(15.0, 2.6, 0)];

Scene3D buildPtrapScene(PlumbState s) {
  final b = MeshBuilder();
  // The cabinet, the wall and the counter.
  b.id = idCabinet;
  b.box(const V3(0, -13.5, -1.5), const V3(40, 1, 14), kWood, shine: 0.1, split: 2);
  b.box(const V3(-19.5, -1, -1.5), const V3(1, 26, 14), kWood, shine: 0.1, split: 2);
  b.id = idPWall;
  b.box(const V3(0, 0, -8.8), const V3(40, 28, 1), kDrywall, split: 3);
  b.box(const V3(19.6, 0, -1.5), const V3(1, 28, 14), kDrywall, split: 3);
  b.id = idSink;
  b.sink(x: 0, z: -1.2, top: 15.1, cw: 40, cd: 15, bw: 14, bd: 9, depth: 5.9, t: 1.8, wt: 0.6, counter: kGranite, bowl: kStainless, faucet: true, chrome: kChrome, split: 2);
  b.cyl(const V3(0, 8.2, 0), const V3(0, 9.3, 0), 1.5, kChrome, shine: 0.85, sides: 14);
  // The wall drain hub.
  b.id = idHub;
  b.cyl(const V3(15.0, 2.6, 0), const V3(18.9, 2.6, 0), 0.92, kPvc, shine: 0.3, sides: 14, inner: true, caps: false);
  b.ring(const V3(15.0, 2.6, 0), const V3(15.5, 2.6, 0), 1.0, 0.72, kPvc, shine: 0.3);

  void piece(int id, List<V3> path, Color col, double shine, String key) {
    final placed = s.placed.contains(key);
    b.id = id;
    if (placed) {
      b.tube(path, _pr, col, shine: shine, sides: 14, joints: true, endCaps: false, inner: true);
    } else {
      b.alpha = 0.3;
      b.tube(path, _pr + 0.08, const Color(0xFF67E8F9), shine: 0, sides: 8, joints: true, endCaps: false);
      b.alpha = 1;
    }
  }

  piece(idTail, ptrapTailPath(), kChrome, 0.85, 'tail');
  piece(idTrap, ptrapTrapPath(), kPvc, 0.3, 'trap');
  piece(idArm, ptrapArmPath(), kPvc, 0.3, 'arm');

  // The slip nuts and their washers: loose until they are hand tightened.
  void nut(int id, String key, V3 joint, V3 axis, V3 looseShift, bool needs) {
    if (!needs) return;
    final tight = s.tight[key] ?? false;
    final c = tight ? joint : joint + looseShift;
    b.bias = 0.5;
    b.id = id;
    b.cyl(c - axis * 0.6, c + axis * 0.6, 1.12, kPvc, shine: 0.35, sides: 8);
    b.ring(c - axis * 0.62, c - axis * 0.5, 1.2, 0.5, const Color(0xFFE5E5DD), shine: 0.2, sides: 8);
    b.id = 0;
    b.ring(joint - axis * 0.05, joint + axis * 0.08, 0.82, 0.55, const Color(0xFF33363B), shine: 0.1, sides: 12);
    b.bias = 0;
  }

  nut(idNut1, 'n1', const V3(0, 3.7, 0), const V3(0, 1, 0), const V3(0, 1.7, 0), s.placed.contains('tail') && s.placed.contains('trap'));
  nut(idNut2, 'n2', const V3(8.9, 2.6, 0), const V3(1, 0, 0), const V3(1.9, 0, 0), s.placed.contains('trap') && s.placed.contains('arm'));

  final dynamicSeal = s.placed.contains('trap');
  if (dynamicSeal) {
    // The little pool of water that always stays in the bend.
    b.id = 0;
    b.alpha = 0.55;
    b.bias = 0.4;
    final pts = ptrapTrapPath();
    final low = pts.where((p) => p.y < -0.6).toList();
    if (low.length > 1) b.tube(low, _pr * 0.62, const Color(0xFF3B9BFF), shine: 0.6, sides: 8, joints: true, endCaps: false);
    b.alpha = 1;
    b.bias = 0;
  }

  final info = <int, ObjInfo>{
    idTail: const ObjInfo('Tailpiece', 'The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.', V3(0, 6, 0), 10),
    idTrap: const ObjInfo('P-trap', 'The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.', V3(3, 1, 0), 11),
    idArm: const ObjInfo('Trap arm', 'The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.', V3(12, 2.6, 0), 9),
    idNut1: const ObjInfo('Slip nut', 'A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.', V3(0, 3.7, 0), 7),
    idNut2: const ObjInfo('Slip nut', 'Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.', V3(8.9, 2.6, 0), 7),
    idSink: const ObjInfo('Sink', 'The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.', V3(0, 11, 0), 16),
    idPWall: const ObjInfo('Wall', 'Behind the wall the drain pipe goes down to the sewer line.', V3(0, 0, -8), 22),
    idHub: const ObjInfo('Wall drain', 'The pipe stub that comes out of the wall. The trap arm slides into it.', V3(16, 2.6, 0), 8),
    idCabinet: const ObjInfo('Cabinet', 'The cabinet under the sink where the drain is built.', V3(0, -8, 0), 22),
  };
  return Scene3D(b.polys, info: info);
}

// ─── Water that looks like water ─────────────────────────────────────────────

const Color _waterBlue = Color(0xFF7CC4FF);

V3 _along(List<V3> path, double f) {
  final x = f.clamp(0.0, 1.0) * (path.length - 1);
  final i = x.floor().clamp(0, path.length - 2);
  return V3.lerp(path[i], path[i + 1], x - i);
}

/// A running stream: a clear tube with bright streaks that slide along it.
void _flow(MeshBuilder b, List<V3> path, double t, Color col, {double r = 0.3, double speed = 0.7}) {
  b.id = 0;
  b.bias = 0.3;
  b.alpha = 0.55;
  b.tube(path, r, col, shine: 0.9, sides: 8, joints: true, endCaps: false);
  b.alpha = 0.95;
  for (var i = 0; i < 5; i++) {
    final f = (t * speed + i / 5) % 1.0;
    b.tube([_along(path, f), _along(path, math.min(1.0, f + 0.09))], r * 0.5, const Color(0xFFEAF6FF), shine: 1, sides: 6, joints: false, endCaps: false);
  }
  b.alpha = 1;
  b.bias = 0;
}

/// Where a stream lands in water: rings that spread and fade, and a few drops that jump.
void _splash(MeshBuilder b, V3 at, double t, {double size = 1.0}) {
  b.id = 0;
  b.bias = 0.4;
  for (var k = 0; k < 3; k++) {
    final ph = (t * 1.3 + k / 3) % 1.0;
    final r = (0.5 + ph * 3.0) * size;
    b.alpha = 0.7 * (1 - ph);
    b.ring(at + const V3(0, 0.05, 0), at + const V3(0, 0.12, 0), r, math.max(0.1, r - 0.3 * size), const Color(0xFFEAF6FF), shine: 0.6, sides: 16);
  }
  b.alpha = 0.9;
  for (var i = 0; i < 6; i++) {
    final ph = (t * 1.8 + i / 6) % 1.0;
    final a = i * 1.05;
    b.ball(at + V3(math.cos(a) * ph * 1.4 * size, 4.0 * ph * (1 - ph) * size, math.sin(a) * ph * 1.4 * size), 0.16 * size, const Color(0xFFEAF6FF), shine: 1, lat: 3, lon: 6);
  }
  b.alpha = 1;
  b.bias = 0;
}

/// A soft pulsing light on the places a lesson wants you to look at (a double tap on the name of a part).
List<Poly> glowSpots(List<V3> spots, double t, {Color color = const Color(0xFFFFE066)}) {
  final b = MeshBuilder();
  b.id = 0;
  b.bias = 0.9;
  final pulse = 0.5 + 0.5 * math.sin(t * 7);
  for (final p in spots) {
    b.alpha = 0.25 + 0.25 * pulse;
    b.ball(p, 1.5 + 0.7 * pulse, color, shine: 0, lat: 5, lon: 10);
    b.alpha = 0.8;
    b.ring(p + const V3(0, 0, 0.6), p + const V3(0, 0, 0.9), 2.3 + 0.9 * pulse, 1.9 + 0.9 * pulse, color, shine: 0.2, sides: 20);
  }
  b.alpha = 1;
  b.bias = 0;
  return b.polys;
}

List<Poly> ptrapWater(PlumbState s, double t) {
  final b = MeshBuilder();
  if (s.leakAt.isNotEmpty) {
    final at = s.leakAt == 'n1' ? const V3(0, 3.0, 0.9) : const V3(8.9, 1.9, 0.9);
    b.id = 0;
    for (var i = 0; i < 5; i++) {
      final ph = (t * 1.4 + i * 0.2) % 1.0;
      b.alpha = 0.85;
      b.ball(at + V3(0, -ph * 6.0 * ph - ph * 1.5, 0), 0.24 * (1 - ph * 0.3), const Color(0xFF5CB3FF), shine: 0.9, lat: 3, lon: 6);
    }
    b.alpha = 1;
  }
  if (s.running) {
    // The tap pours into the basin, the water rises a little and swirls down the drain.
    const tip = V3(0, 19.2, -2.3);
    const level = 11.0;
    _flow(b, [tip, tip + const V3(0, -2.0, 0), V3(0, level, tip.z)], t, _waterBlue, r: 0.42, speed: 1.4);
    b.id = 0;
    b.alpha = 0.5;
    b.bias = 0.2;
    b.box(const V3(0, (9.9 + level) / 2, 0), V3(12.6, level - 9.9, 7.6), const Color(0xFF8FD0FF), shine: 0.7);
    b.alpha = 1;
    b.bias = 0;
    _splash(b, V3(0, level + 0.05, tip.z), t);
    // A little whirl over the drain.
    b.id = 0;
    b.bias = 0.4;
    for (var k = 0; k < 2; k++) {
      final ph = (t * 0.9 + k / 2) % 1.0;
      final r = 2.2 * (1 - ph);
      b.alpha = 0.7;
      b.ring(V3(0, level + 0.06, 0), V3(0, level + 0.12, 0), r + 0.25, r, const Color(0xFFEAF6FF), shine: 0.5, sides: 14);
    }
    b.alpha = 1;
    b.bias = 0;
  }
  return b.polys;
}

// ─── Faucet supply lines ─────────────────────────────────────────────────────

const double _vz = -3.6;

V3 faucetHookPoint(int id) {
  switch (id) {
    case idValveHot:
      return const V3(-4.6, 1.5, _vz);
    case idValveCold:
      return const V3(4.6, 1.5, _vz);
    case idInletHot:
      return const V3(-2.4, 11.6, _vz);
    default:
      return const V3(2.4, 11.6, _vz);
  }
}

List<V3> hosePath(String kind) {
  final hot = kind == 'hot';
  final a = faucetHookPoint(hot ? idValveHot : idValveCold);
  final c = faucetHookPoint(hot ? idInletHot : idInletCold);
  final side = hot ? -1.0 : 1.0;
  return smoothPath([a, a + V3(side * 0.6, 2.2, 1.2), V3.lerp(a, c, 0.5) + V3(side * 1.4, 0, 2.6), c + V3(-side * 0.2, -2.0, 1.0), c], per: 6);
}

Scene3D buildFaucetScene(PlumbState s) {
  final b = MeshBuilder();
  b.id = idWallF;
  b.box(const V3(0, 3, -6.5), const V3(36, 30, 1), kDrywall, split: 3);
  b.id = idDeck;
  // A real sink: the counter has a hole, the white basin goes down into it, and an open cabinet stands under it.
  b.sink(x: 0, z: 1.5, top: 15.3, cw: 36, cd: 18, bw: 14, bd: 7, depth: 7, t: 1.6, wt: 0.6, counter: kGranite, bowl: const Color(0xFFF4F4F0), faucet: false, split: 2);
  const wood = Color(0xFFC49A62);
  b.box(const V3(-17.5, 1.9, 1.5), const V3(1, 23.6, 18), wood, shine: 0.1, split: 2);
  b.box(const V3(17.5, 1.9, 1.5), const V3(1, 23.6, 18), wood, shine: 0.1, split: 2);
  b.box(const V3(0, -10.5, 1.5), const V3(36, 1, 18), wood, shine: 0.1, split: 3);
  b.box(const V3(0, -8, 10.2), const V3(34, 3, 0.8), wood, shine: 0.1, split: 2);
  b.box(const V3(0, 12.6, 10.2), const V3(34, 2, 0.8), wood, shine: 0.1, split: 2);
  // The faucet on top of the counter.
  b.id = idFaucet;
  b.bias = 0.5;
  b.box(const V3(0, 15.55, _vz), const V3(8.6, 0.5, 3.4), kChrome, shine: 0.9);
  b.tube(roundedPath(const [V3(0, 15.5, _vz), V3(0, 20, _vz), V3(0, 22.5, _vz + 1.6), V3(0, 22.5, _vz + 4.8), V3(0, 21.1, _vz + 5.2)], 1.4), 0.5, kChrome, shine: 0.9, sides: 12, joints: true);
  for (final x in const [-2.4, 2.4]) {
    b.cyl(V3(x * 1.2, 15.5, _vz), V3(x * 1.2, 17.7, _vz), 0.38, kChrome, shine: 0.9, sides: 10);
    b.cyl(V3(x * 1.2, 17.7, _vz), V3(x * 1.2, 18.6, _vz), 0.6, x < 0 ? kHot : kCold, shine: 0.6, sides: 12);
  }
  b.bias = 0;
  // The faucet's two inlet tails under the counter.
  for (final (id, x) in [(idInletHot, -2.4), (idInletCold, 2.4)]) {
    b.id = id;
    b.cyl(V3(x, 15.3, _vz), V3(x, 11.4, _vz), 0.45, kChrome, shine: 0.9, sides: 10);
    b.cyl(V3(x, 11.4, _vz), V3(x, 10.7, _vz), 0.3, const Color(0xFFA0A6AE), shine: 0.6, sides: 8);
    b.ring(V3(x, 11.3, _vz), V3(x, 11.9, _vz), 0.78, 0.48, const Color(0xFFB5BBC3), shine: 0.7, sides: 8);
  }
  // The copper pipes out of the wall, and the shut-off valves.
  for (final (id, x, handle) in [(idValveHot, -4.6, kHot), (idValveCold, 4.6, kCold)]) {
    b.id = id;
    b.cyl(V3(x, -1.5, -6.0), V3(x, -1.5, _vz), 0.4, kCopperPipe, shine: 0.7, sides: 12);
    b.cyl(V3(x, -1.5, _vz - 0.8), V3(x, 0.7, _vz - 0.8), 1.0, kChrome, shine: 0.9, sides: 14);
    b.cyl(V3(x, 0.7, _vz - 0.8), V3(x, 1.5, _vz), 0.45, kChrome, shine: 0.9, sides: 10);
    b.cyl(V3(x, -0.2, _vz - 0.8), V3(x, -0.2, _vz + 0.5), 0.2, const Color(0xFFA7ADB5), shine: 0.7, sides: 8);
    // The handle is a lever you turn: across the pipe when the valve is shut, along the pipe when it is open.
    final open = id == idValveHot ? s.hotOpen : s.coldOpen;
    final hub = V3(x, -0.2, _vz + 1.0);
    final lever = open ? const V3(0, 1, 0) : const V3(1, 0, 0);
    b.cyl(V3(x, -0.2, _vz + 0.5), V3(x, -0.2, _vz + 1.4), 1.0, handle, shine: 0.5, sides: 12);
    b.cyl(hub - lever * 1.9, hub + lever * 1.9, 0.5, handle, shine: 0.5, sides: 8);
    b.ball(hub - lever * 1.9, 0.75, handle, shine: 0.5, lat: 4, lon: 8);
    b.ball(hub + lever * 1.9, 0.75, handle, shine: 0.5, lat: 4, lon: 8);
    b.ring(V3(x, 1.2, _vz), V3(x, 1.9, _vz), 0.78, 0.4, kBrassValve, shine: 0.8, sides: 8);
  }
  // The hoses (braided steel with a coloured band) once both ends are fastened; otherwise a free end.
  for (final k in const ['hot', 'cold']) {
    final ids = k == 'hot' ? const [idValveHot, idInletHot] : const [idValveCold, idInletCold];
    final ends = ids.where((i) => s.attached[i] == k).toList();
    b.id = k == 'hot' ? idHoseHot : idHoseCold;
    final band = k == 'hot' ? kHot : kCold;
    if (ends.length == 2) {
      final p = hosePath(k);
      b.tube(p, 0.34, const Color(0xFFB9BEC6), shine: 0.7, sides: 8, joints: false);
      final m = p.length ~/ 2;
      b.tube([p[m - 1], p[m], p[m + 1]], 0.4, band, shine: 0.4, sides: 8, joints: false);
      for (final i in ids) {
        final q = faucetHookPoint(i);
        b.ring(q + const V3(0, -0.2, 0), q + const V3(0, 0.6, 0), 0.62, 0.3, kBrassValve, shine: 0.8, sides: 8);
      }
    } else if (ends.length == 1) {
      final q = faucetHookPoint(ends.first);
      final dir = ends.first == ids.first ? 1.0 : -1.0;
      b.tube([q, q + V3(0, dir * 1.4, 1.0), q + V3(0, dir * 3.0, 2.4)], 0.34, const Color(0xFFB9BEC6), shine: 0.7, sides: 8, joints: false);
      b.ring(q + const V3(0, -0.2, 0), q + const V3(0, 0.6, 0), 0.62, 0.3, kBrassValve, shine: 0.8, sides: 8);
    }
  }
  if (s.hints) {
    b.id = 0;
    b.alpha = 0.5;
    for (final h in kFaucetHooks) {
      if (s.attached[h.id] != null) continue;
      b.ball(faucetHookPoint(h.id) + const V3(0, 0, 0.9), 0.65, h.accepts.contains('hot') ? kHot : kCold, shine: 0.1, lat: 4, lon: 8);
    }
    b.alpha = 1;
  }
  final info = <int, ObjInfo>{
    idValveHot: const ObjInfo('Hot shut-off valve', 'The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.', V3(-4.6, 0.5, -3.4), 8),
    idValveCold: const ObjInfo('Cold shut-off valve', 'The angle stop valve on the cold pipe. Cold is always on the right.', V3(4.6, 0.5, -3.4), 8),
    idInletHot: const ObjInfo('Hot faucet inlet', 'The threaded tail under the faucet where the hot supply hose screws on.', V3(-2.4, 11.5, -3.6), 7),
    idInletCold: const ObjInfo('Cold faucet inlet', 'The threaded tail under the faucet where the cold supply hose screws on.', V3(2.4, 11.5, -3.6), 7),
    idFaucet: const ObjInfo('Faucet', 'The faucet with hot on the left (red) and cold on the right (blue).', V3(0, 19, -3), 14),
    idDeck: const ObjInfo('Counter and sink', 'The faucet is mounted through a hole in the counter.', V3(0, 14, -3), 20),
    idWallF: const ObjInfo('Wall', 'The copper supply pipes come out of the wall here.', V3(0, 3, -6), 24),
    idHoseHot: const ObjInfo('Hot supply hose', 'A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.', V3(-4, 6, -2.5), 9),
    idHoseCold: const ObjInfo('Cold supply hose', 'A braided steel hose with a rubber liner and a blue band.', V3(4, 6, -2.5), 9),
  };
  return Scene3D(b.polys, info: info);
}

List<Poly> faucetWater(PlumbState s, double t) {
  final b = MeshBuilder();
  const hotCol = Color(0xFFFFB0A8), coldCol = Color(0xFF9CCBFF);
  // A valve that is open and has no hose sprays into the cabinet.
  void spray(int valveId, Color col, double side) {
    final p = faucetHookPoint(valveId);
    final path = [for (var j = 0; j <= 8; j++) p + V3(side * j / 8 * 2.0, 2.4 * j / 8 - 9.0 * math.pow(j / 8, 2), 1.0 + 3.5 * j / 8)];
    _flow(b, path, t, col, r: 0.28, speed: 1.2);
  }

  final hotRun = s.hotOpen && s.attached[idValveHot] == 'hot' && s.attached[idInletHot] == 'hot';
  final coldRun = s.coldOpen && s.attached[idValveCold] == 'cold' && s.attached[idInletCold] == 'cold';
  if (s.hotOpen && !hotRun) spray(idValveHot, hotCol, -1);
  if (s.coldOpen && !coldRun) spray(idValveCold, coldCol, 1);
  // Inside the hose the water shows as a faint moving glow at each end that is connected.
  for (final (run, kind, col) in [(hotRun, 'hot', hotCol), (coldRun, 'cold', coldCol)]) {
    if (!run) continue;
    final p = hosePath(kind);
    b.id = 0;
    b.bias = 0.3;
    b.alpha = 0.9;
    for (var i = 0; i < 4; i++) {
      final f = (t * 0.6 + i / 4) % 1.0;
      b.ball(_along(p, f) + const V3(0, 0, 0.32), 0.2, col, shine: 0.9, lat: 3, lon: 6);
    }
    b.alpha = 1;
    b.bias = 0;
  }
  if (hotRun || coldRun) {
    const tip = V3(0, 21.1, _vz + 5.2);
    const level = 10.6;
    final col = hotRun && coldRun ? const Color(0xFFB5D8FF) : (hotRun ? hotCol : coldCol);
    _flow(b, [tip, tip + const V3(0, -2.5, 0), V3(0, level, tip.z)], t, col, r: 0.42, speed: 1.4);
    b.id = 0;
    b.alpha = 0.5;
    b.bias = 0.2;
    b.box(V3(0, (9.5 + level) / 2, 3.7), V3(12.8, level - 9.5, 5.8), const Color(0xFF8FD0FF), shine: 0.7);
    b.alpha = 1;
    b.bias = 0;
    _splash(b, V3(0, level + 0.05, tip.z), t);
  }
  return b.polys;
}

bool faucetComplete(PlumbState s) => kFaucetHooks.every((h) => s.attached[h.id] != null);
