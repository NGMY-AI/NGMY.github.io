import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart' show kWood, kIvory, kJacket, kWhiteWire;
import 'ngmy_construction_plumbing.dart' show kPvc, kChrome, kStainless, kGranite, kHot, kCold;

// ═════════════════════════════════════════════════════════════════════════════
// A whole house in 3D, cut open at the front. Build it stage by stage (slab, framing, plumbing, wiring,
// drywall, fixtures, roof), look inside the walls, tap anything to zoom in, and fix two real problems.
// ═════════════════════════════════════════════════════════════════════════════

const int hLayerSlab = 0, hLayerFrame = 1, hLayerPlumb = 2, hLayerElec = 3, hLayerWall = 4, hLayerFix = 5, hLayerRoof = 6;

const List<(String, String)> kHouseStages = [
  ('Slab', 'First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.'),
  ('Framing', 'The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.'),
  ('Plumbing rough-in', 'The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.'),
  ('Electrical rough-in', 'The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.'),
  ('Drywall', 'Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.'),
  ('Fixtures', 'Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.'),
  ('Roof', 'The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.'),
];

// Object numbers.
const int idSlab = 70, idPanel = 71, idBreakerLiving = 72, idBreaker2 = 73, idBreaker3 = 74, idBreaker4 = 75, idBreaker5 = 76;
const int idHOutlet = 81, idHSwitch = 82, idHLight = 83, idHGfci = 84, idHFaucet = 85, idHTrap = 86, idHNut = 87, idHToilet = 88, idHHeater = 89, idHSofa = 90;
const int idHStuds = 91, idHPipes = 92, idHCables = 93, idHCounter = 94, idHHole = 95, idHJoint = 96;

/// Where a hole in the wall can be (x, y on the back wall).
const List<(double, double)> kHoleSpots = [(-9.5, 4.6), (-5.9, 2.3), (8.8, 4.4)];

class HouseState {
  int stage = 5;
  bool leaking = true;
  bool nutFixed = false;

  /// Breakers that have tripped (the middle, orange position).
  final Set<int> trippedBreakers = {idBreakerLiving};

  /// Breakers a person has switched OFF on purpose (to work safely).
  final Set<int> offBreakers = {};
  bool get breakerTripped => trippedBreakers.contains(idBreakerLiving);
  set breakerTripped(bool v) => v ? trippedBreakers.add(idBreakerLiving) : trippedBreakers.remove(idBreakerLiving);

  // The things that can go wrong in a service call.
  final Set<int> holes = {}; // spots in kHoleSpots that have a hole
  final Set<int> patched = {};
  bool pexLeak = false;
  bool burntOutlet = false;
  bool gfciTripped = false;
  bool flicker = false;
  bool toiletRunning = false;
  bool faucetDrip = false;
  bool clogged = false;
}

/// Which lesson a tapped fixture opens (or null when it has no lesson).
String? houseLessonFor(int id) => switch (id) {
      idHOutlet => 'outlet',
      idHSwitch => 'switch',
      idHGfci => 'gfci',
      idHTrap || idHNut => 'ptrap',
      idHFaucet => 'faucet',
      _ => null,
    };

Scene3D buildHouseScene(HouseState s) {
  final b = MeshBuilder();
  const concrete = Color(0xFF9B9B97);
  // ── Slab ──
  b.layer = hLayerSlab;
  b.id = idSlab;
  b.box(const V3(0, -0.3, 0), const V3(27, 0.6, 19), concrete, split: 4);

  // ── Framing ──
  b.layer = hLayerFrame;
  b.id = idHStuds;
  const stud = Color(0xFFD6AE72);
  void studWall(V3 a, V3 z, int count, {bool alongX = true}) {
    for (var i = 0; i <= count; i++) {
      final t = i / count;
      final p = V3.lerp(a, z, t);
      b.box(V3(p.x, 4, p.z), const V3(0.14, 8, 0.3), stud, shine: 0.05, ends: false);
    }
    final mid = V3.lerp(a, z, 0.5);
    final len = (z - a).len;
    for (final y in const [0.1, 8.05]) {
      b.box(V3(mid.x, y, mid.z), alongX ? V3(len + 0.15, 0.16, 0.3) : V3(0.3, 0.16, len + 0.15), stud, shine: 0.05);
    }
  }
  studWall(const V3(-12, 0, -8.1), const V3(12, 0, -8.1), 15);
  studWall(const V3(-11.9, 0, -8), const V3(-11.9, 0, 8), 11, alongX: false);
  studWall(const V3(11.9, 0, -8), const V3(11.9, 0, 8), 11, alongX: false);
  studWall(const V3(-1, 0, -8), const V3(-1, 0, 1.5), 6, alongX: false);
  studWall(const V3(7, 0, -8), const V3(7, 0, 1.5), 6, alongX: false);
  // Ceiling joists.
  for (var i = 0; i <= 12; i++) {
    b.box(V3(-12 + i * 2, 8.4, 0), const V3(0.14, 0.35, 17), stud, shine: 0.05, ends: false);
  }

  // ── Plumbing ──
  b.layer = hLayerPlumb;
  b.id = idHPipes;
  void pex(List<V3> pts, Color col) => b.tube(roundedPath(pts, 0.35, steps: 3), 0.06, col, shine: 0.4, sides: 6, joints: false);
  // Water heater tops at (11.2, 4.5, -6): hot and cold go along the back wall to the sink and the toilet.
  pex(const [V3(11.0, 4.6, -6), V3(11.0, 5.4, -7.85), V3(3.4, 5.4, -7.85), V3(3.4, 3.4, -7.85)], kHot);
  pex(const [V3(11.4, 4.6, -6), V3(11.4, 5.0, -7.85), V3(2.6, 5.0, -7.85), V3(2.6, 3.4, -7.85)], kCold);
  pex(const [V3(8.2, 5.0, -7.85), V3(8.2, 1.2, -7.85), V3(8.2, 1.0, -7.4)], kCold);
  // Drains (white PVC): sink drain down the wall and along the floor out of the house.
  void drain(List<V3> pts) => b.tube(roundedPath(pts, 0.5, steps: 3), 0.14, kPvc, shine: 0.3, sides: 8, joints: false);
  drain(const [V3(5.0, 1.8, -7.85), V3(5.0, -0.1, -7.85), V3(12.5, -0.1, -7.85)]);
  drain(const [V3(8.2, 0.9, -6.3), V3(8.2, -0.1, -6.3), V3(8.2, -0.1, -7.85)]);

  // ── Electrical ──
  b.layer = hLayerElec;
  b.id = idHCables;
  void romex(List<V3> pts, {Color col = kJacket}) => b.tube(roundedPath(pts, 0.4, steps: 3), 0.055, col, shine: 0.35, sides: 6, joints: false);
  // From the panel up to the ceiling, then along the back wall to the living room, the kitchen and the lights.
  romex(const [V3(9.8, 6.0, -7.85), V3(9.8, 7.5, -7.85), V3(-8, 7.5, -7.85), V3(-8, 1.5, -7.85)]);
  romex(const [V3(-3.6, 7.5, -7.85), V3(-3.6, 4.2, -7.85)], col: kWhiteWire);
  romex(const [V3(-6.5, 7.5, -7.85), V3(-6.5, 7.8, -3.0)], col: kWhiteWire);
  romex(const [V3(5.2, 7.5, -7.85), V3(5.2, 4.0, -7.85)]);

  // ── Drywall (see-through) ──
  b.layer = hLayerWall;
  b.id = 0;
  b.alpha = 0.22;
  const dry = Color(0xFFEDEAE0);
  b.box(const V3(0, 4, -7.9), const V3(24, 8, 0.05), dry, split: 4);
  b.box(const V3(-11.8, 4, 0), const V3(0.05, 8, 16), dry, split: 4);
  b.box(const V3(11.8, 4, 0), const V3(0.05, 8, 16), dry, split: 4);
  b.box(const V3(-0.85, 4, -3.2), const V3(0.05, 8, 9.6), dry, split: 3);
  b.box(const V3(6.85, 4, -3.2), const V3(0.05, 8, 9.6), dry, split: 3);
  b.alpha = 1;

  // ── Fixtures ──
  b.layer = hLayerFix;
  b.bias = 0.3;
  // The floor (so the rooms look finished).
  b.id = 0;
  b.box(const V3(0, 0.03, 0), const V3(24, 0.08, 16), const Color(0xFFC9B79B), shine: 0.1, split: 4);
  // Breaker panel.
  b.id = idPanel;
  b.box(const V3(9.8, 5.0, -7.75), const V3(1.4, 2.4, 0.3), const Color(0xFF8E959E), shine: 0.5);
  b.box(const V3(9.8, 5.0, -7.58), const V3(1.1, 2.05, 0.04), const Color(0xFF3A3F47));
  final breakers = [idBreakerLiving, idBreaker2, idBreaker3, idBreaker4, idBreaker5];
  for (var i = 0; i < breakers.length; i++) {
    final col = i % 2;
    final row = i ~/ 2;
    final tripped = s.trippedBreakers.contains(breakers[i]);
    final off = s.offBreakers.contains(breakers[i]);
    b.id = breakers[i];
    final c = V3(9.55 + col * 0.5, 5.7 - row * 0.5, -7.5);
    b.box(c, const V3(0.4, 0.38, 0.12), const Color(0xFF22262C), shine: 0.3);
    b.box(c + V3(0, tripped ? 0 : (off ? -0.07 : 0.07), 0.08), const V3(0.18, 0.12, 0.08), tripped ? const Color(0xFFF97316) : (off ? const Color(0xFF6B7280) : const Color(0xFFE5E7EB)), shine: 0.4);
  }
  // Living room: sofa, outlet, switch and ceiling light.
  b.id = idHSofa;
  b.box(const V3(-8.4, 0.7, -6.4), const V3(5, 1.0, 2.0), const Color(0xFF7C4A3A), shine: 0.1);
  b.box(const V3(-8.4, 1.9, -7.2), const V3(5, 1.6, 0.5), const Color(0xFF6B3F31), shine: 0.1);
  b.box(const V3(-10.7, 1.2, -6.4), const V3(0.5, 1.4, 2.0), const Color(0xFF6B3F31), shine: 0.1);
  b.box(const V3(-6.1, 1.2, -6.4), const V3(0.5, 1.4, 2.0), const Color(0xFF6B3F31), shine: 0.1);
  void plate(int id, V3 c, Color col, {double h = 0.7, double w = 0.45}) {
    b.id = id;
    b.box(c, V3(w, h, 0.06), col, shine: 0.3);
  }

  plate(idHOutlet, const V3(-3.2, 1.3, -7.82), s.burntOutlet ? const Color(0xFF2A2523) : kIvory);
  b.id = idHOutlet;
  b.box(const V3(-3.2, 1.45, -7.78), const V3(0.05, 0.12, 0.03), const Color(0xFF17181B));
  b.box(const V3(-3.2, 1.15, -7.78), const V3(0.05, 0.12, 0.03), const Color(0xFF17181B));
  plate(idHSwitch, const V3(-3.6, 4.0, -7.82), const Color(0xFFFFFDF6), h: 0.65, w: 0.4);
  b.id = idHSwitch;
  b.box(const V3(-3.6, 4.0, -7.76), const V3(0.16, 0.32, 0.07), const Color(0xFFF2F0E6), shine: 0.4);
  final lit = !s.breakerTripped;
  b.id = idHLight;
  b.cyl(const V3(-6.5, 7.9, -3.0), const V3(-6.5, 7.4, -3.0), 0.5, const Color(0xFFE9E5DA), shine: 0.4, sides: 14);
  b.ball(const V3(-6.5, 7.2, -3.0), 0.3, lit ? const Color(0xFFFFF3B0) : const Color(0xFF8A8A84), shine: 0.7);
  if (lit) {
    b.id = 0;
    b.alpha = 0.22;
    b.ball(const V3(-6.5, 6.9, -3.0), 1.5, const Color(0xFFFFE680), shine: 0, lat: 4, lon: 10);
    b.alpha = 1;
  }
  // Kitchen: base cabinets, counter, sink, faucet, GFCI and the P-trap you can see under the sink.
  b.id = idHCounter;
  b.box(const V3(0.7, 1.5, -7.2), const V3(0.12, 3.0, 1.9), kWood, shine: 0.1);
  b.box(const V3(6.3, 1.5, -7.2), const V3(0.12, 3.0, 1.9), kWood, shine: 0.1);
  b.box(const V3(3.5, 0.15, -7.2), const V3(5.6, 0.3, 1.9), kWood, shine: 0.1);
  b.box(const V3(3.5, 3.1, -7.15), const V3(6.2, 0.18, 2.1), kGranite, shine: 0.5, split: 2);
  b.box(const V3(3.0, 3.21, -7.2), const V3(1.9, 0.05, 1.35), kStainless, shine: 0.7);
  b.id = idHFaucet;
  b.tube(roundedPath(const [V3(3.0, 3.2, -7.85), V3(3.0, 4.0, -7.85), V3(3.0, 4.2, -7.4), V3(3.0, 3.95, -7.0)], 0.2), 0.055, kChrome, shine: 0.9, sides: 8, joints: false);
  b.id = idHGfci;
  b.box(const V3(5.2, 3.9, -7.82), const V3(0.45, 0.72, 0.06), kIvory, shine: 0.3);
  b.box(const V3(5.2, 3.9, -7.76), const V3(0.12, 0.1, 0.03), s.gfciTripped ? const Color(0xFFFF5A1F) : const Color(0xFFD72A2A));
  b.id = idHTrap;
  b.tube(roundedPath(const [V3(3.0, 3.1, -7.1), V3(3.0, 1.7, -7.1), V3(3.0, 1.0, -7.1), V3(3.65, 0.5, -7.1), V3(4.3, 1.0, -7.1), V3(4.3, 1.8, -7.1), V3(5.0, 1.8, -7.1), V3(5.0, 1.8, -7.85)], 0.35, steps: 3), 0.11, kPvc, shine: 0.3, sides: 8, joints: false);
  b.id = idHNut;
  b.cyl(const V3(3.0, 1.55, -7.1), const V3(3.0, 1.85, -7.1), 0.19, s.nutFixed ? const Color(0xFFE5E5DD) : const Color(0xFFD9C9A0), shine: 0.3, sides: 8);
  // Bathroom: toilet and water heater.
  b.id = idHToilet;
  b.box(const V3(8.2, 1.9, -7.55), const V3(1.5, 1.3, 0.6), const Color(0xFFF8F8F4), shine: 0.7);
  b.cyl(const V3(8.2, 0.05, -6.7), const V3(8.2, 0.95, -6.7), 0.72, const Color(0xFFF8F8F4), shine: 0.7, sides: 16, r1: 0.55);
  b.cyl(const V3(8.2, 0.95, -6.7), const V3(8.2, 1.05, -6.7), 0.78, const Color(0xFFEDEDE8), shine: 0.7, sides: 16);
  b.id = idHHeater;
  b.cyl(const V3(11.2, 0.0, -6.0), const V3(11.2, 4.5, -6.0), 0.85, const Color(0xFFE8ECEF), shine: 0.6, sides: 18);
  b.cyl(const V3(11.2, 4.5, -6.0), const V3(11.2, 4.7, -6.0), 0.5, const Color(0xFF7B828B), shine: 0.5, sides: 12);
  b.box(const V3(11.2, 2.4, -5.18), const V3(0.5, 0.5, 0.04), const Color(0xFFD05A3A));

  // Holes in the wall (and patches over them), and a leaky pipe joint.
  b.id = idHHole;
  for (var i = 0; i < kHoleSpots.length; i++) {
    final sp = kHoleSpots[i];
    if (s.patched.contains(i)) {
      b.box(V3(sp.$1, sp.$2, -7.82), const V3(1.5, 1.5, 0.05), const Color(0xFFEDEAE0));
      b.box(V3(sp.$1, sp.$2, -7.79), const V3(1.1, 1.1, 0.03), const Color(0xFFE2DFD2));
    } else if (s.holes.contains(i)) {
      b.box(V3(sp.$1, sp.$2, -7.82), const V3(1.0, 0.9, 0.06), const Color(0xFF1B1209));
      b.box(V3(sp.$1, sp.$2, -7.8), const V3(1.4, 1.3, 0.02), const Color(0xFFCFC9B8));
    }
  }
  if (s.pexLeak) {
    b.id = idHJoint;
    b.cyl(const V3(3.4, 3.55, -7.85), const V3(3.4, 3.25, -7.85), 0.1, const Color(0xFFB45309), shine: 0.7, sides: 8);
  }
  // ── Roof ──
  b.bias = 0;
  b.layer = hLayerRoof;
  b.id = 0;
  b.alpha = 0.4;
  const roof = Color(0xFF8E5A4A);
  b.quad(const V3(-13, 8.6, -9.5), const V3(13, 8.6, -9.5), const V3(13, 12.5, 0), const V3(-13, 12.5, 0), roof, normal: const V3(0, 0.7, -1), twoSided: true);
  b.quad(const V3(13, 8.6, 9.5), const V3(-13, 8.6, 9.5), const V3(-13, 12.5, 0), const V3(13, 12.5, 0), roof, normal: const V3(0, 0.7, 1), twoSided: true);
  b.tri(const V3(-13, 8.6, -9.5), const V3(-13, 8.6, 9.5), const V3(-13, 12.5, 0), const Color(0xFFD9CDB8));
  b.tri(const V3(13, 8.6, -9.5), const V3(13, 8.6, 9.5), const V3(13, 12.5, 0), const Color(0xFFD9CDB8));
  b.alpha = 1;

  final info = <int, ObjInfo>{
    idSlab: const ObjInfo('Concrete slab', 'The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.', V3(0, 0, 0), 30),
    idHStuds: const ObjInfo('Wall framing', '2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.', V3(0, 4, -8), 18),
    idHPipes: const ObjInfo('Water and drain pipes', 'Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.', V3(6, 3, -7.8), 14),
    idHCables: const ObjInfo('Electrical cables', 'Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.', V3(0, 6.5, -7.8), 16),
    idPanel: const ObjInfo('Breaker panel', 'The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.', V3(9.8, 5.0, -7.5), 6),
    idBreakerLiving: ObjInfo('Living room breaker', s.breakerTripped ? 'This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.' : 'This breaker is ON. The living room has power.', const V3(9.55, 5.7, -7.5), 3.5),
    idBreaker2: const ObjInfo('Kitchen breaker', 'Protects the kitchen outlets. It is ON.', V3(10.05, 5.7, -7.5), 3.5),
    idBreaker3: const ObjInfo('Bathroom breaker', 'Protects the bathroom. It is ON.', V3(9.55, 5.2, -7.5), 3.5),
    idBreaker4: const ObjInfo('Water heater breaker', 'A big circuit for the water heater. It is ON.', V3(10.05, 5.2, -7.5), 3.5),
    idBreaker5: const ObjInfo('Spare breaker', 'A spare circuit.', V3(9.55, 4.7, -7.5), 3.5),
    idHOutlet: const ObjInfo('Living room outlet', 'A standard outlet. Tap Open lesson to wire one in 3D.', V3(-3.2, 1.3, -7.8), 4.5),
    idHSwitch: const ObjInfo('Light switch', 'Controls the ceiling light. Tap Open lesson to wire one.', V3(-3.6, 4.0, -7.8), 4.5),
    idHLight: ObjInfo('Ceiling light', s.breakerTripped ? 'The light is off because the living room breaker has tripped.' : 'The ceiling light is on.', const V3(-6.5, 7.4, -3), 7),
    idHGfci: const ObjInfo('Kitchen GFCI outlet', 'Outlets near water must be GFCI. Tap Open lesson to wire one.', V3(5.2, 3.9, -7.8), 4.5),
    idHFaucet: const ObjInfo('Kitchen faucet', 'Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.', V3(3, 3.8, -7.4), 4.5),
    idHTrap: ObjInfo('P-trap under the sink', s.leaking && !s.nutFixed ? 'Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.' : 'The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one.', const V3(3.7, 1.2, -7.1), 4.5),
    idHNut: ObjInfo('Slip nut (leaking?)', s.leaking && !s.nutFixed ? 'This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.' : 'The slip nut is tight.', const V3(3.0, 1.7, -7.1), 3.5),
    idHToilet: const ObjInfo('Toilet', 'The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.', V3(8.2, 1, -7), 7),
    idHHeater: const ObjInfo('Water heater', 'Heats the water. The cold line goes in at the top and the hot line comes out at the top.', V3(11.2, 2.3, -6), 9),
    idHSofa: const ObjInfo('Sofa', 'Just furniture, to show the size of the room.', V3(-8.4, 1.2, -6.4), 10),
    idHCounter: const ObjInfo('Kitchen counter and cabinet', 'The cabinet under the sink is where the drain and the shut-off valves live.', V3(3.5, 2, -7.2), 9),
    idHHole: const ObjInfo('Wall', 'The drywall of the back wall.', V3(0, 4, -7.8), 16),
    idHJoint: const ObjInfo('Pipe joint', 'A crimped joint in the hot water line.', V3(3.4, 3.4, -7.85), 4),
  };
  return Scene3D(b.polys, info: info);
}

/// Dripping water from the loose slip nut.
List<Poly> houseWater(HouseState s, double t) {
  final b = MeshBuilder();
  b.layer = hLayerFix;
  b.bias = 0.8;
  if (s.pexLeak) {
    for (var i = 0; i < 6; i++) {
      final ph = (t * 1.5 + i / 6) % 1.0;
      b.ball(V3(3.4 + math.sin(i * 2.0) * 0.12, 3.3 - ph * ph * 2.8, -7.7), 0.05, const Color(0xFFFF8A80), shine: 0.9, lat: 3, lon: 6);
    }
  }
  if (s.faucetDrip) {
    final ph = (t * 1.1) % 1.0;
    b.ball(V3(3.0, 3.9 - ph * ph * 0.7, -6.95), 0.05, const Color(0xFF8DC8FF), shine: 0.9, lat: 3, lon: 6);
  }
  if (s.toiletRunning) {
    for (var i = 0; i < 6; i++) {
      final ph = (t * 1.6 + i / 6) % 1.0;
      b.ball(V3(8.2 + math.sin(i * 1.7) * 0.15, 2.2 - ph * 1.5, -7.2), 0.05, const Color(0xFF8DC8FF), shine: 0.9, lat: 3, lon: 6);
    }
  }
  if (s.clogged) {
    b.alpha = 0.55;
    b.box(const V3(3.0, 3.28, -7.2), const V3(1.7, 0.08, 1.2), const Color(0xFF6FB6FF), shine: 0.8);
    b.alpha = 1;
  }
  if (s.burntOutlet) {
    for (var i = 0; i < 8; i++) {
      final ph = (t * 2.0 + i * 0.13) % 1.0;
      b.ball(V3(-3.2 + math.cos(i * 2.4 + t * 6) * ph * 0.7, 1.3 + math.sin(i * 2.4 + t * 6) * ph * 0.7, -7.6 + ph * 0.3), 0.05, Color.lerp(const Color(0xFFFF6A00), const Color(0xFFFFF3A0), 1 - ph)!, shine: 0, lat: 3, lon: 5);
    }
  }
  if (s.flicker && !s.breakerTripped) {
    b.id = 0;
    b.alpha = ((math.sin(t * 17) + math.sin(t * 29) + 2) / 4 * 0.5).clamp(0.0, 0.6);
    b.ball(const V3(-6.5, 6.9, -3.0), 1.5, const Color(0xFFFFE680), shine: 0, lat: 4, lon: 10);
    b.alpha = 1;
  }
  if (s.leaking && !s.nutFixed) {
    for (var i = 0; i < 5; i++) {
      final ph = (t * 1.3 + i * 0.2) % 1.0;
      b.ball(V3(3.05, 1.45 - ph * ph * 1.4, -6.95), 0.05, const Color(0xFF5CB3FF), shine: 0.9, lat: 3, lon: 6);
    }
    b.alpha = 0.5;
    b.box(const V3(3.2, 0.12, -6.7), V3(0.7 + 0.3 * math.sin(t), 0.02, 0.5), const Color(0xFF5CB3FF), shine: 0.9);
    b.alpha = 1;
  }
  return b.polys;
}
