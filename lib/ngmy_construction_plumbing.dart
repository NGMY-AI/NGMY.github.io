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
  bool valvesOpen = false;
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

List<V3> _tailPath() => const [V3(0, 8.3, 0), V3(0, 3.9, 0)];

List<V3> _trapPath() {
  final pts = <V3>[const V3(0, 3.9, 0), const V3(0, 0.2, 0)];
  for (var i = 1; i <= 12; i++) {
    final a = math.pi + math.pi * i / 12;
    pts.add(V3(3 + 3 * math.cos(a), 0.2 + 3 * math.sin(a), 0));
  }
  pts.addAll(roundedPath(const [V3(6, 0.2, 0), V3(6, 2.6, 0), V3(8.6, 2.6, 0)], 1.0));
  return pts;
}

List<V3> _armPath() => const [V3(8.6, 2.6, 0), V3(15.0, 2.6, 0)];

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
  b.box(const V3(0, 14.3, -1.5), const V3(40, 1.6, 14), kGranite, shine: 0.5, split: 3);
  b.cyl(const V3(0, 9.2, 0), const V3(0, 14.0, 0), 6.5, kStainless, shine: 0.7, sides: 20, caps: true);
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

  piece(idTail, _tailPath(), kChrome, 0.85, 'tail');
  piece(idTrap, _trapPath(), kPvc, 0.3, 'trap');
  piece(idArm, _armPath(), kPvc, 0.3, 'arm');

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
    final pts = _trapPath();
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

/// Moving water: a leak that drips from a loose nut, or the flow when you run the tap.
List<Poly> ptrapWater(PlumbState s, double t) {
  final b = MeshBuilder();
  if (s.leakAt.isNotEmpty) {
    final at = s.leakAt == 'n1' ? const V3(0, 3.0, 0.9) : const V3(8.9, 1.9, 0.9);
    for (var i = 0; i < 5; i++) {
      final ph = (t * 1.4 + i * 0.2) % 1.0;
      b.ball(at + V3(0, -ph * 6.0 * ph - ph * 1.5, 0), 0.22 * (1 - ph * 0.3), const Color(0xFF5CB3FF), shine: 0.9, lat: 3, lon: 6);
    }
  } else if (s.running) {
    final path = [..._tailPath(), ..._trapPath().skip(1), ..._armPath().skip(1)];
    for (var i = 0; i < 18; i++) {
      final ph = (t * 0.45 + i / 18) % 1.0;
      final idx = (ph * (path.length - 1)).floor().clamp(0, path.length - 2);
      final f = ph * (path.length - 1) - idx;
      b.ball(V3.lerp(path[idx], path[idx + 1], f), 0.38, const Color(0xFF4FA8FF), shine: 0.9, lat: 3, lon: 6);
    }
    // The tap pours into the sink.
    for (var i = 0; i < 6; i++) {
      final ph = (t * 2.2 + i / 6) % 1.0;
      b.ball(V3(0, 14.0 - ph * 5.4, 0), 0.3, const Color(0xFF8DC8FF), shine: 0.9, lat: 3, lon: 6);
    }
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
  b.box(const V3(0, 14.5, -1.5), const V3(36, 1.6, 12), kGranite, shine: 0.5, split: 3);
  b.cyl(const V3(0, 13.6, -1.5), const V3(0, 14.6, -1.5), 5.5, const Color(0xFF111418), sides: 16);
  // The faucet on top of the counter.
  b.id = idFaucet;
  b.cyl(const V3(0, 15.3, _vz), const V3(0, 15.5, _vz), 3.4, kChrome, shine: 0.9, sides: 20);
  b.tube(roundedPath(const [V3(0, 15.5, _vz), V3(0, 20, _vz), V3(0, 22.5, _vz + 1.6), V3(0, 22.5, _vz + 4.8), V3(0, 21.1, _vz + 5.2)], 1.4), 0.5, kChrome, shine: 0.9, sides: 12, joints: true);
  for (final x in const [-2.4, 2.4]) {
    b.cyl(V3(x * 1.2, 15.5, _vz), V3(x * 1.2, 17.7, _vz), 0.38, kChrome, shine: 0.9, sides: 10);
    b.cyl(V3(x * 1.2, 17.7, _vz), V3(x * 1.2, 18.6, _vz), 0.6, x < 0 ? kHot : kCold, shine: 0.6, sides: 12);
  }
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
    b.cyl(V3(x, -1.5, _vz - 0.8), V3(x, 0.7, _vz - 0.8), 0.78, kBrassValve, shine: 0.8, sides: 12);
    b.cyl(V3(x, 0.7, _vz - 0.8), V3(x, 1.5, _vz), 0.38, kBrassValve, shine: 0.8, sides: 10);
    b.cyl(V3(x, -0.2, _vz - 0.8), V3(x, -0.2, _vz + 0.5), 0.2, const Color(0xFFA7ADB5), shine: 0.7, sides: 8);
    b.cyl(V3(x, -0.2, _vz + 0.5), V3(x, -0.2, _vz + 0.8), 0.95, handle, shine: 0.5, sides: 12);
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
  if (!s.valvesOpen) return b.polys;
  final hotOk = s.attached[idValveHot] == 'hot' && s.attached[idInletHot] == 'hot';
  final coldOk = s.attached[idValveCold] == 'cold' && s.attached[idInletCold] == 'cold';
  void spray(int valveId, Color col) {
    final p = faucetHookPoint(valveId);
    for (var i = 0; i < 7; i++) {
      final ph = (t * 1.6 + i / 7) % 1.0;
      b.ball(p + V3(math.sin(i * 2.1) * ph * 1.4, ph * 2.4 - ph * ph * 6.5, 1.0 + ph * 2.5), 0.2, col, shine: 0.9, lat: 3, lon: 6);
    }
  }
  if (hotOk) {
    final p = hosePath('hot');
    for (var i = 0; i < 10; i++) {
      final ph = (t * 0.5 + i / 10) % 1.0;
      final idx = (ph * (p.length - 1)).floor().clamp(0, p.length - 2);
      b.ball(V3.lerp(p[idx], p[idx + 1], ph * (p.length - 1) - idx), 0.2, const Color(0xFFFF8A80), shine: 0.9, lat: 3, lon: 6);
    }
  } else if (s.attached[idValveHot] == null) {
    spray(idValveHot, const Color(0xFFFF8A80));
  }
  if (coldOk) {
    final p = hosePath('cold');
    for (var i = 0; i < 10; i++) {
      final ph = (t * 0.5 + i / 10) % 1.0;
      final idx = (ph * (p.length - 1)).floor().clamp(0, p.length - 2);
      b.ball(V3.lerp(p[idx], p[idx + 1], ph * (p.length - 1) - idx), 0.2, const Color(0xFF7FB8FF), shine: 0.9, lat: 3, lon: 6);
    }
  } else if (s.attached[idValveCold] == null) {
    spray(idValveCold, const Color(0xFF7FB8FF));
  }
  if (hotOk && coldOk) {
    for (var i = 0; i < 8; i++) {
      final ph = (t * 2.0 + i / 8) % 1.0;
      b.ball(V3(0, 21.0 - ph * 6.5, _vz + 5.2), 0.26, Color.lerp(const Color(0xFFFF9E9E), const Color(0xFF7FB8FF), 0.5)!, shine: 0.9, lat: 3, lon: 6);
    }
  }
  return b.polys;
}

bool faucetComplete(PlumbState s) => kFaucetHooks.every((h) => s.attached[h.id] != null);
