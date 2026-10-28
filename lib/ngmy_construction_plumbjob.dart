import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_electrical.dart' show kDrywall, kWood;
import 'ngmy_construction_plumbing.dart';
import 'ngmy_construction_project.dart' show Act;

// ═════════════════════════════════════════════════════════════════════════════
// PLUMBING JOBS: fit out a bathroom or a kitchen with your own hands, piece by piece.
// Every piece has a place, an order, and a tool. Wrong order is explained. At the end you open the
// water, and every loose joint leaks.
// ═════════════════════════════════════════════════════════════════════════════

/// One piece of the job: what goes where, what has to be there first, and how many joints must be tightened.
class PStep {
  const PStep(this.id, this.item, this.label, this.prereq, this.why, {this.waterOff = false, this.tighten = 0});
  final String id;
  final String item;
  final String label;
  final List<String> prereq;

  /// Plain words for what to do first.
  final String why;
  final bool waterOff;

  /// How many joints on this piece must be tightened with the wrench or by hand.
  final int tighten;
}

const List<PStep> _sinkSteps = [
  PStep('faucet', 'faucet', 'Faucet', [], 'The faucet goes through the hole in the counter.'),
  PStep('vhot', 'valve', 'Hot shut-off valve (left)', [], 'A shut-off valve goes on the pipe that comes out of the wall.', waterOff: true),
  PStep('vcold', 'valve', 'Cold shut-off valve (right)', [], 'A shut-off valve goes on the pipe that comes out of the wall.', waterOff: true),
  PStep('hhot', 'hosehot', 'Hot supply hose', ['vhot', 'faucet'], 'The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.', tighten: 2),
  PStep('hcold', 'hosecold', 'Cold supply hose', ['vcold', 'faucet'], 'The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.', tighten: 2),
  PStep('tail', 'tail', 'Tailpiece', [], 'The tailpiece hangs from the sink drain. It is the first piece of the drain.'),
  PStep('trap', 'trap', 'P-trap', ['tail'], 'The P-trap joins the tailpiece. Build the drain from the top down.', tighten: 1),
  PStep('arm', 'arm', 'Trap arm', ['trap'], 'The trap arm joins the trap and goes into the wall.', tighten: 1),
];

const List<PStep> _toiletSteps = [
  PStep('flange', 'flange', 'Toilet flange', [], 'The flange is fixed to the floor over the drain. Everything else sits on it.'),
  PStep('wax', 'wax', 'Wax ring', ['flange'], 'The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.'),
  PStep('toilet', 'toilet', 'Toilet', ['wax'], 'The toilet is lowered straight down onto the wax ring. The ring has to be there first.'),
  PStep('bolts', 'bolts', 'Toilet bolts', ['toilet'], 'The two bolts hold the toilet to the flange. Set the toilet first.', tighten: 2),
  PStep('tvalve', 'valve', 'Toilet shut-off valve', [], 'The shut-off valve goes on the pipe that comes out of the wall.', waterOff: true),
  PStep('those', 'hosecold', 'Toilet supply hose', ['tvalve', 'toilet'], 'The hose joins the valve to the toilet tank, so both must be there first.', tighten: 2),
];

class PlumbVariant {
  const PlumbVariant(this.id, this.title, this.steps, this.blurb);
  final String id;
  final String title;
  final List<PStep> steps;
  final String blurb;
}

const List<PlumbVariant> kPlumbVariants = [
  PlumbVariant('bathroom', 'Bathroom', [..._toiletSteps, ..._sinkSteps], 'Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.'),
  PlumbVariant('kitchen', 'Kitchen', _sinkSteps, 'Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.'),
];

const List<String> kPlumbItems = ['flange', 'wax', 'toilet', 'bolts', 'valve', 'hosehot', 'hosecold', 'faucet', 'tail', 'trap', 'arm'];

const Map<String, String> kPlumbItemNames = {
  'flange': 'Flange',
  'wax': 'Wax ring',
  'toilet': 'Toilet',
  'bolts': 'Bolts',
  'valve': 'Shut-off valve',
  'hosehot': 'Hot hose',
  'hosecold': 'Cold hose',
  'faucet': 'Faucet',
  'tail': 'Tailpiece',
  'trap': 'P-trap',
  'arm': 'Trap arm',
};

class PlumbJob {
  PlumbJob({this.seed = 1, this.practice = false, String? variantId}) {
    variant = variantId != null ? kPlumbVariants.firstWhere((v) => v.id == variantId) : kPlumbVariants[math.Random(seed).nextInt(kPlumbVariants.length)];
    mirror = math.Random(seed + 7).nextBool();
  }

  final int seed;
  bool practice;
  late final PlumbVariant variant;

  /// The job can be mirrored left to right so it is not always the same.
  late final bool mirror;
  final Set<String> placed = {};
  final Map<String, int> tightened = {};
  bool waterOn = true;
  int mistakes = 0;
  final Set<String> leaking = {};
  bool tested = false;

  List<PStep> get steps => variant.steps;
  PStep step(String id) => steps.firstWhere((s) => s.id == id);

  Act _mistake(String m) {
    mistakes++;
    return Act(false, m);
  }

  String _needsText(PStep s) => s.prereq.map((p) => step(p).label.toLowerCase()).join(' and ');

  Act place(String item, String id) {
    final s = step(id);
    if (placed.contains(id)) return _mistake('The ${s.label.toLowerCase()} is already there.');
    if (item != s.item) {
      return _mistake(practice ? 'That does not go here.' : 'That does not go here. This spot is for the ${s.label.toLowerCase()}.');
    }
    for (final p in s.prereq) {
      if (!placed.contains(p)) {
        return _mistake(practice ? 'Not yet: something has to go in first.' : 'Not yet. ${s.why} Put in the ${_needsText(s)} first.');
      }
    }
    if (s.waterOff && waterOn) {
      return _mistake(practice ? 'The water is still on!' : 'Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).');
    }
    placed.add(id);
    tested = false;
    leaking.clear();
    final extra = s.tighten > 0 ? (practice ? '' : ' It is only loose. Pick the wrench and tap it to tighten the joints.') : '';
    return Act(true, '${s.label} fitted.$extra');
  }

  Act tighten(String id) {
    final s = step(id);
    if (!placed.contains(id)) return _mistake(practice ? 'Nothing to tighten yet.' : 'There is nothing to tighten yet: the ${s.label.toLowerCase()} is not fitted.');
    if (s.tighten == 0) return _mistake(practice ? 'That does not need tightening.' : 'The ${s.label.toLowerCase()} does not have joints to tighten. It just sits in place.');
    final n = tightened[id] ?? 0;
    if (n >= s.tighten) return _mistake('Already tight. More force would crack it.');
    tightened[id] = n + 1;
    leaking.clear();
    tested = false;
    return Act(true, n + 1 >= s.tighten ? '${s.label}: every joint is tight now.' : '${s.label}: one joint tightened, one to go.');
  }

  int looseJoints(String id) => step(id).tighten - (tightened[id] ?? 0);

  Act toggleWater() {
    waterOn = !waterOn;
    leaking.clear();
    if (!waterOn) return const Act(true, 'Water OFF at the main valve. You can cut into the pipes safely now.');
    // Water is on: open ends spray and loose joints drip.
    final open = steps.where((s) => !placed.contains(s.id) && _needsWater(s)).toList();
    final loose = steps.where((s) => placed.contains(s.id) && looseJoints(s.id) > 0).toList();
    tested = true;
    if (open.isNotEmpty) {
      leaking.addAll(open.map((s) => s.id));
      mistakes++;
      return Act(false, 'Water is spraying from an open pipe where the ${open.first.label.toLowerCase()} should be! Turn the water off and finish the job.', danger: true);
    }
    if (loose.isNotEmpty) {
      leaking.addAll(loose.map((s) => s.id));
      mistakes++;
      return Act(false, 'The ${loose.first.label.toLowerCase()} is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.', danger: true);
    }
    if (!allPlaced) return const Act(true, 'The water is on and nothing leaks yet, but the job is not finished.');
    return const Act(true, 'The water is on and nothing leaks. Perfect job!');
  }

  bool _needsWater(PStep s) => s.item == 'valve' || s.item.startsWith('hose');

  /// Fits every piece, tightens every joint and tests the water, so a finished room can be opened and worked on.
  void completeAll() {
    waterOn = true;
    toggleWater();
    for (final s in steps) {
      place(s.item, s.id);
    }
    for (final s in steps) {
      for (var i = 0; i < s.tighten; i++) {
        tighten(s.id);
      }
    }
    toggleWater();
    mistakes = 0;
  }

  bool get allPlaced => steps.every((s) => placed.contains(s.id));
  bool get allTight => steps.every((s) => looseJoints(s.id) <= 0 || !placed.contains(s.id));
  bool get done => allPlaced && allTight && waterOn && tested && leaking.isEmpty;
}

// ─── The 3D scene ────────────────────────────────────────────────────────────

const int idPjBase = 9100, idPjNut = 9200, idPjMain = 9400;

const Color _tile = Color(0xFFCFE3EA);

Scene3D buildPlumbJobScene(PlumbJob j, {String armed = '', bool labels = true}) {
  final b = MeshBuilder();
  final info = <int, ObjInfo>{};
  final lab = <Label3D>[];
  final bath = j.variant.id == 'bathroom';
  
  // The sink stands at sx, the toilet at tx.
  final sx = bath ? 28.0 : 0.0;
  final tx = -30.0;

  // The room: floor, back wall, side wall for the drain.
  b.id = idPjBase + 99;
  b.box(const V3(0, -0.6, 22), const V3(150, 1.2, 70), const Color(0xFF8C939B), split: 4);
  b.box(const V3(0, 24, -0.6), const V3(150, 49, 1.2), _tile, split: 4);
  final wallX = sx + 19.8;
  b.box(V3(wallX + 0.6, 24, 16), const V3(1.2, 49, 36), kDrywall, split: 2);
  info[idPjBase + 99] = const ObjInfo('The room', 'A bare room with the water supply stubs and the drain stub already in the wall and floor.', V3(0, 20, 5), 120);

  // Vanity cabinet and counter (the sink).
  b.id = idPjBase + 98;
  b.box(V3(sx, 0.6, 10), const V3(40, 1.2, 22), kWood, shine: 0.1);
  b.box(V3(sx, 29.4, 18.6), const V3(40, 7.2, 1.2), kWood, shine: 0.1);
  b.box(V3(sx - 19.4, 13.6, 10.5), const V3(1.2, 26.4, 20), kWood, shine: 0.1);
  for (final (cx, cz, sw, sd) in <(double, double, double, double)>[(-15.6, 9.0, 14.8, 22.0), (15.6, 9.0, 14.8, 22.0), (0.0, -0.1, 16.4, 4.2), (0.0, 17.1, 16.4, 5.8)]) {
    b.box(V3(sx + cx, 33, cz), V3(sw, 2.4, sd), const Color(0xFFEDEDEA), shine: 0.6);
  }
  b.cyl(V3(sx, 27.0, 8), V3(sx, 34.3, 8), 10.5, const Color(0xFFF4F4F0), shine: 0.7, sides: 24, inner: true, caps: false);
  b.cyl(V3(sx, 27.0, 8), V3(sx, 27.2, 8), 10.5, const Color(0xFFE6E6E0), shine: 0.5, sides: 24);
  if (bath) {
    // A mirror over the sink, so it reads as a bathroom.
    b.box(V3(sx, 46, 0.6), const V3(30, 22, 0.8), const Color(0xFFE5E7EB), shine: 0.3);
    b.box(V3(sx, 46, 1.1), const V3(27, 19, 0.4), const Color(0xFF9BD3F5), shine: 0.9);
  }
  b.cyl(V3(sx, 27.1, 8), V3(sx, 27.3, 8), 1.4, const Color(0xFF2B2D33), sides: 12);
  b.cyl(V3(sx + 15, 23.6, 8), V3(sx + 19.4, 23.6, 8), 0.92, kPvc, shine: 0.3, sides: 12, inner: true, caps: false);
  info[idPjBase + 98] = const ObjInfo('Vanity and counter', 'The cabinet that holds the sink. The pipes live inside it.', V3(0, 20, 8), 70);

  // The main water valve on the wall.
  final mainX = -56.0;
  b.id = idPjMain;
  b.cyl(V3(mainX, 18, 0), V3(mainX, 18, 6), 1.5, kBrassValve, shine: 0.8, sides: 12);
  b.cyl(V3(mainX - 1, 18, 6), V3(mainX + 1, 18, 6.5), 4, j.waterOn ? kCold : const Color(0xFF6B7280), shine: 0.5, sides: 14);
  b.cyl(V3(mainX, 16, 0), V3(mainX, 20, 0), 1.0, kCopperPipe, shine: 0.7, sides: 10);
  info[idPjMain] = ObjInfo('Main water valve', j.waterOn ? 'The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.' : 'The water is OFF. Turn it ON to test your work.', V3(mainX, 18, 4), 22);
  lab.add(Label3D(V3(mainX, 24, 6), j.waterOn ? 'MAIN WATER: ON' : 'MAIN WATER: OFF', j.waterOn ? const Color(0xFF1D4ED8) : const Color(0xFF6B7280)));

  // Supply stubs coming out of the wall (copper), always there.
  void stub(double x) {
    b.id = 0;
    b.cyl(V3(x, 8, 0), V3(x, 8, 1.6), 0.5, kCopperPipe, shine: 0.7, sides: 10);
  }

  stub(sx - 8);
  stub(sx + 8);
  if (bath) stub(tx - 10);

  final tailBase = V3(sx, 21.0, 8);
  List<V3> shift(List<V3> p) => [for (final v in p) v + tailBase];

  void ghost(String id, List<V3> path, {double r = 1.2}) {
    b.id = idPjBase + j.steps.indexWhere((s) => s.id == id);
    b.alpha = 0.32;
    b.tube(path, r, const Color(0xFF67E8F9), shine: 0, sides: 8, joints: true, endCaps: false);
    b.alpha = 1;
  }

  void ghostBox(String id, V3 c, V3 size) {
    b.id = idPjBase + j.steps.indexWhere((s) => s.id == id);
    b.alpha = 0.32;
    b.box(c, size, const Color(0xFF67E8F9));
    b.alpha = 1;
  }

  void slot(PStep s, V3 where, String text) {
    final idx = j.steps.indexOf(s);
    info[idPjBase + idx] = ObjInfo(s.label, j.placed.contains(s.id) ? 'Fitted.' : 'A spot for the ${s.label.toLowerCase()}. ${j.practice ? '' : s.why}', where, 26);
    if (labels && !j.placed.contains(s.id) && armed.isNotEmpty) lab.add(Label3D(where + const V3(0, 5, 4), text, const Color(0xFF0E7490)));
  }

  final steps = j.steps;
  for (final s in steps) {
    final placed = j.placed.contains(s.id);
    final loose = placed && j.looseJoints(s.id) > 0;
    final idx = steps.indexOf(s);
    final oid = idPjBase + idx;
    final leak = j.leaking.contains(s.id);
    switch (s.id) {
      case 'flange':
        final c = V3(tx, 0.3, 14);
        if (placed) {
          b.id = oid;
          b.cyl(c, c + const V3(0, 0.6, 0), 5.5, const Color(0xFFF2F2EC), shine: 0.4, sides: 18);
          b.ring(c + const V3(0, 0.5, 0), c + const V3(0, 0.9, 0), 5.5, 3.2, kBrassValve, shine: 0.8, sides: 18);
        } else {
          ghostBox(s.id, c + const V3(0, 0.5, 0), const V3(11, 1, 11));
        }
        slot(s, c, 'Flange spot');
      case 'wax':
        final c = V3(tx, 1.2, 14);
        if (placed) {
          b.id = oid;
          b.ring(c, c + const V3(0, 1.1, 0), 4.2, 2.4, const Color(0xFF8B6B3F), shine: 0.2, sides: 18);
        } else {
          ghostBox(s.id, c + const V3(0, 0.5, 0), const V3(9, 1.2, 9));
        }
        slot(s, c, 'Wax ring spot');
      case 'toilet':
        if (placed) {
          b.id = oid;
          b.cyl(V3(tx, 0.5, 14), V3(tx, 16, 14), 8.5, const Color(0xFFF8F8F4), shine: 0.8, sides: 20, r1: 6);
          b.cyl(V3(tx, 16, 14), V3(tx, 17, 14), 9.5, const Color(0xFFEFEFEA), shine: 0.8, sides: 20);
          b.box(V3(tx, 22, 4.5), const V3(20, 14, 7), const Color(0xFFF8F8F4), shine: 0.8);
          b.box(V3(tx, 29.2, 4.5), const V3(21, 1.4, 8), const Color(0xFFEFEFEA), shine: 0.8);
        } else {
          b.id = oid;
          b.alpha = 0.32;
          b.cyl(V3(tx, 0.5, 14), V3(tx, 17, 14), 8.5, const Color(0xFF67E8F9), sides: 16);
          b.box(V3(tx, 22, 4.5), const V3(20, 14, 7), const Color(0xFF67E8F9));
          b.alpha = 1;
        }
        slot(s, V3(tx, 12, 12), 'Toilet spot');
      case 'bolts':
        if (placed) {
          for (final dx in const [-9.0, 9.0]) {
            b.id = idPjNut + idx * 2 + (dx < 0 ? 0 : 1);
            b.cyl(V3(tx + dx, 0.5, 17), V3(tx + dx, 3.6, 17), 0.45, kStainless, shine: 0.8, sides: 8);
            b.cyl(V3(tx + dx, 3.4, 17), V3(tx + dx, 4.6, 17), 1.2, loose ? const Color(0xFFFB923C) : kStainless, shine: 0.8, sides: 6);
          }
          info[oid] = ObjInfo(s.label, loose ? 'The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.' : 'The toilet is bolted down.', V3(tx, 3, 17), 20);
        } else {
          for (final dx in const [-9.0, 9.0]) {
            b.id = oid;
            b.alpha = 0.4;
            b.cyl(V3(tx + dx, 0.5, 17), V3(tx + dx, 4.6, 17), 1.2, const Color(0xFF67E8F9), sides: 8);
            b.alpha = 1;
          }
        }
        slot(s, V3(tx, 3, 17), 'Bolts');
      case 'tvalve':
        _valve(b, oid, V3(tx - 10, 8, 1.6), placed, const Color(0xFF2F7DE1), ghostFn: () => ghostBox(s.id, V3(tx - 10, 9, 2.4), const V3(3, 3, 3)));
        slot(s, V3(tx - 10, 8, 2), 'Valve');
      case 'those':
        if (placed) {
          b.id = oid;
          b.tube(smoothPath([V3(tx - 10, 10, 1.6), V3(tx - 12, 14, 3.5), V3(tx - 6, 17, 3.6), V3(tx - 2, 21, 2.5)], per: 6), 0.55, const Color(0xFFB9BEC6), shine: 0.7, sides: 8, joints: false);
          b.tube([V3(tx - 6.8, 15.5, 3.6), V3(tx - 5, 16.4, 3.6)], 0.62, kCold, shine: 0.4, sides: 8, joints: false);
          if (loose) {
            b.cyl(V3(tx - 10, 10, 1.6), V3(tx - 10, 11.2, 1.6), 0.9, const Color(0xFFFB923C), sides: 8);
          }
        } else {
          ghost(s.id, smoothPath([V3(tx - 10, 10, 1.6), V3(tx - 12, 14, 3.5), V3(tx - 6, 17, 3.6), V3(tx - 2, 21, 2.5)], per: 6), r: 0.9);
        }
        slot(s, V3(tx - 6, 15, 3), 'Toilet hose');
      case 'faucet':
        if (placed) {
          b.id = oid;
          b.cyl(V3(sx, 34.2, 8), V3(sx, 34.6, 8), 3.6, kChrome, shine: 0.9, sides: 20);
          b.tube(roundedPath([V3(sx, 34.6, 8), V3(sx, 40, 8), V3(sx, 43, 10), V3(sx, 43, 14), V3(sx, 41.2, 14.6)], 1.4), 0.5, kChrome, shine: 0.9, sides: 10, joints: true);
          for (final dx in const [-5.0, 5.0]) {
            b.cyl(V3(sx + dx, 34.6, 8), V3(sx + dx, 36.6, 8), 0.5, kChrome, shine: 0.9, sides: 8);
            b.cyl(V3(sx + dx, 36.6, 8), V3(sx + dx, 37.6, 8), 0.8, dx < 0 ? kHot : kCold, shine: 0.6, sides: 10);
          }
          for (final dx in const [-3.0, 3.0]) {
            b.cyl(V3(sx + dx, 34, 8), V3(sx + dx, 28.4, 8), 0.45, kChrome, shine: 0.9, sides: 8);
          }
        } else {
          ghostBox(s.id, V3(sx, 38, 9), const V3(10, 8, 10));
        }
        slot(s, V3(sx, 38, 8), 'Faucet spot');
      case 'vhot':
        _valve(b, oid, V3(sx - 8, 8, 1.6), placed, kHot, ghostFn: () => ghostBox(s.id, V3(sx - 8, 9, 2.4), const V3(3, 3, 3)));
        slot(s, V3(sx - 8, 8, 2), 'Hot valve');
      case 'vcold':
        _valve(b, oid, V3(sx + 8, 8, 1.6), placed, kCold, ghostFn: () => ghostBox(s.id, V3(sx + 8, 9, 2.4), const V3(3, 3, 3)));
        slot(s, V3(sx + 8, 8, 2), 'Cold valve');
      case 'hhot':
      case 'hcold':
        final hot = s.id == 'hhot';
        final side = hot ? -1.0 : 1.0;
        final path = smoothPath([V3(sx + side * 8, 10.5, 1.8), V3(sx + side * 9, 16, 3.5), V3(sx + side * 6, 22, 4.2), V3(sx + side * 3, 27.5, 6), V3(sx + side * 3, 28.6, 8)], per: 6);
        if (placed) {
          b.id = oid;
          b.tube(path, 0.5, const Color(0xFFB9BEC6), shine: 0.7, sides: 8, joints: false);
          final mid = path.length ~/ 2;
          b.tube([path[mid - 1], path[mid], path[mid + 1]], 0.58, hot ? kHot : kCold, shine: 0.4, sides: 8, joints: false);
          if (loose) {
            b.cyl(path.first, path.first + const V3(0, 1.4, 0), 0.9, const Color(0xFFFB923C), sides: 8);
            b.cyl(path.last - const V3(0, 1.4, 0), path.last, 0.9, const Color(0xFFFB923C), sides: 8);
          }
        } else {
          ghost(s.id, path, r: 0.9);
        }
        slot(s, path[path.length ~/ 2], hot ? 'Hot hose' : 'Cold hose');
      case 'tail':
      case 'trap':
      case 'arm':
        final p = shift(s.id == 'tail' ? ptrapTailPath() : (s.id == 'trap' ? ptrapTrapPath() : ptrapArmPath()));
        if (placed) {
          b.id = oid;
          b.tube(p, 0.66, s.id == 'tail' ? kChrome : kPvc, shine: s.id == 'tail' ? 0.85 : 0.3, sides: 12, joints: true, endCaps: false, inner: true);
        } else {
          ghost(s.id, p, r: 0.78);
        }
        slot(s, p[p.length ~/ 2], s.id == 'tail' ? 'Tailpiece' : (s.id == 'trap' ? 'P-trap' : 'Trap arm'));
      default:
    }
    // A leak or a spray shows where the problem is.
    if (leak) {
      // handled in the dynamic polys
    }
  }

  // Slip nuts on the drain: tap them to tighten.
  void nut(String id, V3 at, V3 axis, int n) {
    final idx = steps.indexWhere((s) => s.id == id);
    if (idx < 0 || !j.placed.contains(id)) return;
    final tightNow = (j.tightened[id] ?? 0) >= 1;
    b.id = idPjNut + 60 + n;
    final c = tightNow ? at : at + axis * 1.7;
    b.cyl(c - axis * 0.6, c + axis * 0.6, 1.12, kPvc, shine: 0.35, sides: 8);
    b.ring(c - axis * 0.62, c - axis * 0.5, 1.2, 0.5, const Color(0xFFE5E5DD), shine: 0.2, sides: 8);
    info[idPjNut + 60 + n] = ObjInfo('Slip nut', tightNow ? 'Tight.' : 'Loose. Tap it with the wrench to tighten it.', at, 10);
  }

  nut('trap', tailBase + const V3(0, 3.7, 0), const V3(0, 1, 0), 0);
  nut('arm', tailBase + const V3(8.9, 2.6, 0), const V3(1, 0, 0), 1);

  for (final id in j.leaking) {
    final st = j.steps.firstWhere((s) => s.id == id);
    lab.add(Label3D(plumbSpot(j, id) + const V3(0, 6, 4), '💧 LEAK: ${st.label}', const Color(0xFFDC2626)));
  }
  return Scene3D(b.polys, info: info, labels: lab);
}

void _valve(MeshBuilder b, int id, V3 at, bool placed, Color handle, {required void Function() ghostFn}) {
  if (!placed) {
    ghostFn();
    return;
  }
  b.id = id;
  b.cyl(at + const V3(0, -0.5, 0), at + const V3(0, 1.8, 0), 0.9, kBrassValve, shine: 0.8, sides: 12);
  b.cyl(at + const V3(0, 1.8, 0), at + const V3(0, 3.4, 0.8), 0.45, kBrassValve, shine: 0.8, sides: 10);
  b.cyl(at + const V3(0, 0.7, 0), at + const V3(0, 0.7, 2.0), 0.3, const Color(0xFFA7ADB5), shine: 0.7, sides: 8);
  b.cyl(at + const V3(0, 0.7, 2.0), at + const V3(0, 0.7, 2.4), 1.2, handle, shine: 0.5, sides: 12);
}

/// Water that sprays from an open pipe or drips from a loose joint.
/// Where on the job a joint is (for the water that comes out of it and for its "LEAK" label).
V3 plumbSpot(PlumbJob j, String id) {
  final bath = j.variant.id == 'bathroom';
  final sx = bath ? 28.0 : 0.0;
  const tx = -30.0;
  return switch (id) {
    'vhot' || 'hhot' => V3(sx - 8, 9, 2),
    'vcold' || 'hcold' => V3(sx + 8, 9, 2),
    'tvalve' || 'those' => V3(tx - 10, 9, 2),
    'bolts' => V3(tx, 2, 17),
    'faucet' => V3(sx, 30, 8),
    'tail' => V3(sx, 22, 8),
    'trap' => V3(sx, 24.7, 8),
    _ => V3(sx + 8.9, 23.6, 8),
  };
}

List<Poly> plumbJobWater(PlumbJob j, double t) {
  final b = MeshBuilder();
  if (j.leaking.isEmpty) return b.polys;
  for (final id in j.leaking) {
    final p = plumbSpot(j, id);
    final spray = j.steps.firstWhere((s) => s.id == id).item == 'valve' || !j.placed.contains(id);
    // Big drops falling (or a spray), so a leak is easy to see.
    for (var i = 0; i < (spray ? 14 : 8); i++) {
      final ph = (t * (spray ? 1.8 : 1.2) + i / (spray ? 14 : 8)) % 1.0;
      b.ball(p + V3(math.sin(i * 2.1) * ph * (spray ? 4 : 0.8), ph * (spray ? 5 : -0.5) - ph * ph * (spray ? 16 : 10), 1.5 + ph * (spray ? 7 : 1.0)), spray ? 1.1 : 0.9, const Color(0xFF3B9BFF), shine: 0.5, lat: 3, lon: 6);
    }
    // A puddle on the floor that is there while it leaks.
    b.alpha = 0.55;
    b.cyl(V3(p.x, 0.3, 8 + 3), V3(p.x, 0.5, 8 + 3), 7 + 2 * math.sin(t * 2), const Color(0xFF3B9BFF), shine: 0.6, sides: 18);
    b.alpha = 1;
  }
  return b.polys;
}
