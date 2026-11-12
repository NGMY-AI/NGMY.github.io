import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_community.dart' show Community;
import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_electrical_more.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_project.dart' show kMachineOutlets;
import 'ngmy_frame_devices.dart';
import 'ngmy_frame_geo.dart';
import 'ngmy_frame_scene.dart';

// ═════════════════════════════════════════════════════════════════════════════
// WIRING A HOUSE. A bare room of four framed walls, no drywall: put the electrical boxes on the studs, break the knockouts, drill the
// studs, pull the cable from the breaker panel (or from the box before) through the wood to every box, then wire a device in each box in
// the close-up, and switch the power on to test it. Every rule here is a real one.
// ═════════════════════════════════════════════════════════════════════════════

class FAct {
  const FAct(this.ok, this.msg, {this.show = const []});
  final bool ok;
  final String msg;

  /// Pieces to light up (the studs that still need a hole, the knockout to break).
  final List<int> show;
}

class FCable {
  FCable(this.path, {required this.light});
  final List<V3> path;
  final bool light;
  double get inches {
    var d = 0.0;
    for (var i = 1; i < path.length; i++) {
      d += (path[i] - path[i - 1]).len;
    }
    return d;
  }
}

class FBox {
  FBox(this.id, this.kind, this.wall, this.u, {this.studId, this.joist});
  final int id;

  /// outlet, switch or ceiling.
  final String kind;
  final int wall;
  final double u;
  final int? studId, joist;

  /// Which side of its stud the box is nailed on (+1 further along the wall, -1 back).
  double side = 1;
  FCable? cable;

  /// The two knockouts (round tabs): true once the tab is broken out.
  final List<bool> kos = [false, false];
  int get openKo => kos.where((e) => e).length;

  /// The knockouts that have a cable in them, the one the cable of this box comes in through, and the one of the box before it that it leaves through.
  final Set<int> usedKo = {};
  int entryKo = 0, fromKo = 0;

  /// Where the cable of this box comes from: 0 the breaker panel, otherwise the box before it.
  int from = 0;

  /// The device wired in this box (a kind of the electrical lessons) and its wiring, and a switch's position.
  String? dev;
  WiringState? ws;
  bool on = false;

  /// An outlet box is 16 inches up to its middle, a switch box 48.
  double get y => kind == 'switch' ? 48 : 16;
}

class WTask {
  const WTask(this.text, this.done);
  final String text;
  final bool done;
}

/// What to do next (the hint button): the words, the pieces of the room to light up, and the tool to take.
class WHint {
  const WHint(this.text, {this.ids = const [], this.tool = ''});
  final String text;
  final List<int> ids;
  final String tool;
}

class WiringHouse {
  final Set<int> drilled = {};
  final List<FBox> boxes = [];
  final Map<int, String> plugged = {};
  int mistakes = 0;
  int _next = idBox0;

  /// The breaker of the whole house.
  bool breaker = false;
  bool tripped = false;

  FBox? boxById(int id) {
    for (final b in boxes) {
      if (b.id == id) return b;
    }
    return null;
  }

  void reset() {
    drilled.clear();
    boxes.clear();
    plugged.clear();
    mistakes = 0;
    _next = idBox0;
    breaker = false;
    tripped = false;
  }

  FAct _bad(String m, {List<int> show = const []}) {
    mistakes++;
    return FAct(false, m, show: show);
  }

  // ── Boxes ──

  FAct place(String kind, int target) {
    if (kind == 'ceiling') {
      if (!isJoistId(target)) return _bad(isStudId(target) ? 'A ceiling box hangs from a joist, the boards over your head. Tap one of those.' : 'A ceiling box goes on a joist: the boards across the top of the room.');
      if (boxes.any((b) => b.kind == 'ceiling')) return _bad('This room has one light, and its box is already hung. Pull the cable to it.');
      boxes.add(FBox(_next++, 'ceiling', -1, 0, joist: target - idJoist0));
      return const FAct(true, 'Ceiling box hung on the joist, level with the bottom of the board. Break a knockout in it for the cable, then the light hangs from it.');
    }
    final s = studById(target);
    if (s == null) return _bad(isJoistId(target) ? 'That is a ceiling joist. An outlet or switch box is nailed to a stud, a tall board in the wall.' : 'Tap a stud: one of the tall boards in the wall.');
    if (!s.takesBox) return _bad('That short stud only holds up the wood over the door or window. Put the box on a full-height stud.');
    if (boxes.any((b) => b.studId == s.id)) return _bad('There is a box on this stud already.');
    final b = FBox(_next++, kind, s.wall, s.u, studId: s.id);
    // Next to a door or a window the box goes on the side of the stud that faces away from the opening.
    if (s.kind == 'king' || s.kind == 'jack') {
      final o = s.wall == kDoor.wall ? kDoor : kWindow;
      b.side = s.u < (o.u0 + o.u1) / 2 ? -1 : 1;
    }
    boxes.add(b);
    if (kind == 'switch') {
      final near = _nearDoor(b);
      return FAct(true, near ? 'Switch box nailed on, 48 inches up and right beside the door, where a hand finds it in the dark. Next, break a knockout in it.' : 'Switch box nailed on, 48 inches up. A light switch belongs beside the door, on the side the door opens. Next, break a knockout.');
    }
    return const FAct(true, 'Outlet box nailed to the side of the stud, 16 inches up to its middle (the usual height), with its front level with the wood so the drywall will fit. Next, break a knockout in it.');
  }

  bool _nearDoor(FBox b) => b.wall == kDoor.wall && ((b.u >= kDoor.u0 - 18 && b.u <= kDoor.u0) || (b.u >= kDoor.u1 && b.u <= kDoor.u1 + 18));

  // ── Knockouts ──

  FAct knockout(int id) {
    if (!isKoId(id)) return _bad('Tap one of the little round tabs on a box to break it out.');
    final b = boxById(koBoxOf(id));
    if (b == null) return _bad('Tap one of the little round tabs on a box to break it out.');
    final k = koIndexOf(id);
    if (b.kos[k]) return _bad('That knockout is out already.');
    b.kos[k] = true;
    return const FAct(true, 'Knockout broken out: a screwdriver on the tab and a tap, and it pops out, leaving a clean round hole for the cable to go through. A box needs one open knockout for each cable that comes in.');
  }

  List<int> _closedKo(FBox b) => [for (var k = 0; k < 2; k++) if (!b.kos[k]) koId(b.id, k)];

  // ── Holes ──

  FAct drill(int target) {
    final seg = topSegOf(target);
    if (seg != null) {
      if (drilled.contains(target)) return _bad('The top plate has its hole here already.');
      drilled.add(target);
      return const FAct(true, 'Hole drilled straight up through the top plate. This is where a cable goes up into the ceiling.');
    }
    final s = studById(target);
    if (s == null) {
      if (target == idPanel) return _bad('The panel is where the cable starts. You do not drill it.');
      if (isBoxId(target)) return _bad('Drill the studs, the tall boards. The boxes are for the cable to end in.');
      return _bad('Drill through a stud (a tall board), or the top plate over a switch. Not through this.');
    }
    if (drilled.contains(s.id)) return _bad('This stud has its hole already.');
    if (!s.atCableHeight) return _bad('There is no wood at the cable line here: this short stud only sits over the door or window. Drill a stud that reaches the line (20 inches up).');
    drilled.add(s.id);
    return const FAct(true, 'Hole drilled through the middle of the stud, 20 inches up. It is 3/4 inch wide and well away from both edges, so the stud stays strong and a nail cannot reach the cable.');
  }

  // ── Cable ──

  /// The cables that end in or leave a box.
  int cablesAt(FBox b) => (b.cable != null ? 1 : 0) + boxes.where((o) => o.cable != null && o.from == b.id).length;

  /// Does the box have power coming to it: its cable, and the cable of the box before it, and so on back to the panel.
  bool powered(FBox b) {
    var x = b;
    for (var n = 0; n < 30; n++) {
      if (x.cable == null) return false;
      if (x.from == 0) return true;
      final p = boxById(x.from);
      if (p == null) return false;
      x = p;
    }
    return false;
  }

  void _unpull(FBox b) {
    if (b.cable == null) return;
    b.usedKo.remove(b.entryKo);
    final p = b.from == 0 ? null : boxById(b.from);
    p?.usedKo.remove(b.fromKo);
    b.cable = null;
    b.from = 0;
    for (final o in boxes) {
      if (o.cable != null && o.from == b.id) _unpull(o);
    }
  }

  List<Stud> _route(double p0, double p1, int dir, {int? own}) {
    double dist(double p) => dir > 0 ? ((p - p0) % kPerim + kPerim) % kPerim : ((p0 - p) % kPerim + kPerim) % kPerim;
    final end = dist(p1);
    final studs = [for (final s in kStuds) if (s.atCableHeight && dist(s.p) > 1e-6 && (dist(s.p) < end - 1e-6 || s.id == own)) s];
    studs.sort((a, b) => dist(a.p).compareTo(dist(b.p)));
    return studs;
  }

  bool _crossesDoor(double p0, double p1, int dir) {
    double dist(double p) => dir > 0 ? ((p - p0) % kPerim + kPerim) % kPerim : ((p0 - p) % kPerim + kPerim) % kPerim;
    final end = dist(p1);
    final first = dir > 0 ? perim(kDoor.wall, kDoor.u0) : perim(kDoor.wall, kDoor.u1);
    return end > dist(first) + 0.01;
  }

  /// The first knockout of a box that is broken out and has no cable in it yet.
  int? freeKo(FBox b) {
    for (var k = 0; k < 2; k++) {
      if (b.kos[k] && !b.usedKo.contains(k)) return k;
    }
    return null;
  }

  double _alongOf(int wall, V3 p) {
    final s = wallPt(wall, 0, 0, 0), a = wallAlong(wall);
    return (p.x - s.x) * a.x + (p.z - s.z) * a.z;
  }

  /// The points that lead a cable from the cable line (20 inches up, beside the box) into knockout [k] of a wall box, coming from the side [toward] (+1 or -1 along the wall).
  List<V3> _toKo(FBox x, int k, double toward) {
    final uc = x.u + x.side * (kStT / 2 + 1.15);
    final us = uc + toward * 1.9;
    final yk = koPos(x, k).y;
    V3 p(double u, double y) => wallPt(x.wall, u, y, 2.1);
    final fromAbove = k == 1;
    final straight = fromAbove ? kDrillY > yk : kDrillY < yk;
    if (straight) return [p(us, kDrillY), p(uc, kDrillY), p(uc, yk)];
    final yPast = fromAbove ? yk + 2.5 : yk - 2.5;
    return [p(us, kDrillY), p(us, yPast), p(uc, yPast), p(uc, yk)];
  }

  /// Taps a box with the cable roll: the cable unrolls from the breaker panel ([from] 0) or from a box that already has power, to this box, and goes in
  /// through the knockout [via] (the first free open one when it is null). A box that has its cable already gets it pulled back out (and the cables that came from it).
  FAct pull(int id, {int from = 0, int? via}) {
    if (id == idPanel) return const FAct(true, 'The cable starts at the breaker panel. Tap the box it must reach.');
    final b = boxById(id);
    if (b == null) return _bad('Tap one of the blue boxes: the cable runs to it.');
    if (b.cable != null) {
      _unpull(b);
      return const FAct(true, 'Cable pulled back out of the box (and the cables that went on from it).');
    }
    final FBox? src = from == 0 ? null : boxById(from);
    int? srcKo;
    if (from != 0) {
      if (src == null || src.cable == null || !powered(src)) return _bad('A cable can only start at the breaker panel, or at a box that already has power.');
      if (src.kind == 'ceiling') return _bad('The light box is the end of the line: a cable cannot go on from it.');
      srcKo = freeKo(src);
      if (srcKo == null) return _bad('The box the cable leaves from has no free knockout: a second cable needs a second hole. Break out its other knockout first.', show: _closedKo(src));
    }
    final v = via ?? freeKo(b);
    if (v == null) return _bad('The cable goes into the box through a knockout, and this box has none open and free for it. Tap the box, then tap a tab to break it out.', show: _closedKo(b));
    if (!b.kos[v]) return _bad('That knockout is still closed: break it out first.', show: [koId(b.id, v)]);
    if (b.usedKo.contains(v)) return _bad('A cable already goes in through that knockout: choose the other one.');
    if (b.kind == 'ceiling') return _pullCeiling(b, src, v);
    final p0 = src == null ? perim(kPanelWall, kPanelU) : perim(src.wall, src.u), p1 = perim(b.wall, b.u);
    final dirs = [for (final d in const [1, -1]) if (!_crossesDoor(p0, p1, d)) d];
    if (dirs.isEmpty) return _bad('A doorway is in the way both ways round: there is no wood to run a cable through across it.');
    double span(int d) => d > 0 ? ((p1 - p0) % kPerim + kPerim) % kPerim : ((p0 - p1) % kPerim + kPerim) % kPerim;
    dirs.sort((a, c) => span(a).compareTo(span(c)));
    final dir = dirs.first;
    // The box is on the side of its stud the cable comes from, if it can be; next to an opening it cannot, and then the stud itself needs a hole.
    final studHere = studById(b.studId!)!;
    final fixed = studHere.kind == 'king' || studHere.kind == 'jack';
    if (!fixed) b.side = -dir.toDouble();
    final needOwn = b.side != -dir;
    final route = _route(p0, p1, dir, own: needOwn ? studHere.id : null);
    // A box the cable leaves from: when the box is not on the side the cable goes to, the cable crosses the box's own stud.
    final needOwnSrc = src != null && src.side != dir;
    final srcStud = src == null ? null : studById(src.studId!);
    if (needOwnSrc && srcStud != null) route.insert(0, srcStud);
    final missing = [for (final s in route) if (!drilled.contains(s.id)) s];
    if (missing.isNotEmpty) {
      return _bad('The cable has to go through every stud on its way, and ${missing.length} still ${missing.length == 1 ? 'has' : 'have'} no hole. Drill ${missing.length == 1 ? 'the lit one' : 'the lit ones'} first.', show: [for (final s in missing.take(40)) s.id]);
    }
    final pts = <V3>[];
    var wall = kPanelWall;
    if (src == null) {
      pts
        ..add(wallPt(kPanelWall, kPanelU, kPanelY0 + 1, kMidD))
        ..add(wallPt(kPanelWall, kPanelU, kDrillY, kMidD));
    } else {
      // The cable leaves the first box through its knockout and goes down (or up) to the cable line.
      pts.addAll(_toKo(src, srcKo!, dir.toDouble()).reversed);
      wall = src.wall;
    }
    for (final s in route) {
      if (s.wall != wall) {
        pts.add(cornerAfter(dir > 0 ? wall : s.wall, kDrillY));
        wall = s.wall;
      }
      pts.add(wallPt(s.wall, s.u, kDrillY, kMidD));
    }
    if (b.wall != wall) {
      pts.add(cornerAfter(dir > 0 ? wall : b.wall, kDrillY));
    }
    final uc = b.u + b.side * (kStT / 2 + 1.15);
    final lastU = _alongOf(b.wall, pts.last);
    pts.addAll(_toKo(b, v, lastU >= uc ? 1.0 : -1.0));
    b.cable = FCable(pts, light: false);
    b.from = from;
    b.entryKo = v;
    b.usedKo.add(v);
    if (src != null) {
      b.fromKo = srcKo!;
      src.usedKo.add(srcKo);
    }
    final feet = b.cable!.inches / 12;
    return FAct(true, '${b.kind == 'switch' ? 'Switch' : 'Outlet'} box connected: the cable runs from ${src == null ? 'the panel' : 'the ${src.kind} box'} through ${route.length} ${route.length == 1 ? 'stud' : 'studs'} and goes in through the ${v == 1 ? 'top' : 'bottom'} knockout, ${feet.toStringAsFixed(1)} feet in all. Leave a loose end in the box to wire the device to.');
  }

  FAct _pullCeiling(FBox c, FBox? src, int v) {
    if (src != null && src.kind != 'switch') return _bad('The light is fed from a switch: the power goes to the switch first, then up to the light. Start the cable at a switch box.');
    final sws = [for (final s in boxes) if (s.kind == 'switch' && s.cable != null && powered(s) && freeKo(s) != null) s];
    final s = src ?? (sws.isEmpty ? null : sws.first);
    if (s == null) {
      final any = boxes.any((x) => x.kind == 'switch' && x.cable != null);
      return _bad(any ? 'The switch box has no free knockout for the cable that goes up to the light. Break out its other knockout first.' : 'The light is fed from the switch: the power goes to the switch first. Pull the cable to a switch box before this one.');
    }
    final sv = freeKo(s)!;
    final seg = math.min(topSegCount(s.wall) - 1, (s.u / 16).floor());
    final tid = topSegId(s.wall, seg);
    if (!drilled.contains(tid)) return _bad('The cable goes up inside the wall, through the top plate and into the ceiling. Drill the top plate right over the switch first.', show: [tid]);
    final uh = topSegU(s.wall, seg);
    final cx = joistX(c.joist!) + 0.75 + 2.3;
    final sgn = v == 0 ? -1.0 : 1.0;
    // Out of the switch box through its knockout, then up beside the box.
    final ucs = s.u + s.side * (kStT / 2 + 1.15);
    final uside = ucs + s.side * 1.9;
    final kp = koPos(s, sv);
    V3 q(double u, double y) => wallPt(s.wall, u, y, 2.1);
    final leave = sv == 1 ? [q(ucs, kp.y), q(ucs, 88)] : [q(ucs, kp.y), q(ucs, kp.y - 2.5), q(uside, kp.y - 2.5), q(uside, 88)];
    c.cable = FCable([
      ...leave,
      wallPt(s.wall, uh, 92, kMidD),
      wallPt(s.wall, uh, 101.95, kMidD),
      V3(cx + sgn * 5.5, 101.95, 0),
      V3(cx + sgn * 5.5, 97.9, 0),
      V3(cx + sgn * 2.6, 97.9, 0),
    ], light: true);
    c.from = s.id;
    c.entryKo = v;
    c.usedKo.add(v);
    c.fromKo = sv;
    s.usedKo.add(sv);
    return FAct(true, 'Light connected: the cable goes up from the switch through its ${sv == 1 ? 'top' : 'bottom'} knockout, through the top plate, and lies across the joists to the ceiling box, ${(c.cable!.inches / 12).toStringAsFixed(1)} feet.');
  }

  // ── Devices, the breaker, the things plugged in ──

  /// Puts a device (a kind of the electrical lessons) in a box that has its cable. The wiring is done in the close-up.
  FAct installDevice(int boxId, String kind) {
    final b = boxById(boxId);
    if (b == null) return _bad('Tap one of the blue boxes: the device goes in it.');
    if (b.cable == null) return _bad('Pull the cable to this box first: the device is wired to the cable.');
    final fits = b.kind == 'ceiling' ? (kind == 'light' || kind == 'fan') : (b.kind == 'switch' ? isSwitchKind(kind) : isOutletKind(kind));
    if (!fits) return _bad(b.kind == 'ceiling' ? 'A ceiling box takes a light or a fan.' : (b.kind == 'switch' ? 'This is a switch box (48 inches up): it takes a switch.' : 'This is an outlet box (16 inches up): it takes an outlet.'));
    if (b.dev != null && b.dev != kind) {
      if (b.ws != null && (b.ws!.stage > 0 || b.ws!.attached.isNotEmpty)) return _bad('There is a ${deviceKindName(b.dev!).toLowerCase()} wired in this box already. Pick that one to carry on with it.');
    }
    if (b.dev != kind) {
      b.dev = kind;
      b.ws = WiringState()..power = breaker;
      b.on = false;
    }
    return FAct(true, 'Close-up: ${deviceKindName(kind)}. Connect each wire to its screw.');
  }

  void _sync() {
    for (final b in boxes) {
      b.ws?.power = breaker;
    }
  }

  bool deviceDone(FBox b) => b.dev != null && b.ws != null && b.ws!.stage >= 2 && !b.ws!.burnt;
  Verdict? verdictOf(FBox b) => b.dev == null || b.ws == null ? null : evaluateWiring(electricalLesson(b.dev!), b.ws!);
  bool works(FBox b) => deviceDone(b) && (verdictOf(b)?.works ?? false);

  /// Does it run now: the breaker on, power to it, a finished device that works (a light or fan also needs its switch on).
  bool runs(FBox b) {
    if (!breaker || !powered(b) || !works(b)) return false;
    if (b.kind == 'ceiling') {
      final f = boxById(b.from);
      return f != null && f.kind == 'switch' && works(f) && f.on;
    }
    return true;
  }

  FAct toggleBreaker() {
    if (tripped) {
      tripped = false;
      breaker = false;
      _sync();
      return const FAct(true, 'You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.');
    }
    breaker = !breaker;
    _sync();
    if (!breaker) return const FAct(true, 'Breaker OFF. It is safe to work on the wires.');
    var done = 0;
    for (final b in boxes) {
      if (!deviceDone(b)) continue;
      done++;
      final v = verdictOf(b)!;
      if (v.trips || v.burns) {
        tripped = true;
        breaker = false;
        mistakes++;
        _sync();
        return FAct(false, 'The breaker TRIPPED. ${v.message} Flip it fully off, fix the wiring in that box and try again.');
      }
    }
    if (done == 0) return const FAct(true, 'Breaker ON. There is nothing to test yet: wire a device in a box first.');
    final bad = boxes.where((b) => deviceDone(b) && !(verdictOf(b)!.ok)).toList();
    if (bad.isNotEmpty) return FAct(false, 'Breaker ON. It works, but a device is not wired safely: ${verdictOf(bad.first)!.message}');
    return FAct(true, 'Breaker ON. Every finished device works. Flip the switch to turn the light on, and plug something in.');
  }

  FAct flip(int boxId) {
    final b = boxById(boxId);
    if (b == null || b.kind != 'switch') return _bad('Tap a switch to flip it.');
    if (!deviceDone(b)) return _bad('Wire the switch and put its plate on first.');
    if (!breaker) return const FAct(true, 'The breaker is OFF, so the switch does nothing yet. Turn the breaker on.');
    b.on = !b.on;
    final lights = [for (final c in boxes) if (c.kind == 'ceiling' && c.from == b.id) c];
    return FAct(true, b.on ? (lights.any(runs) ? 'Switch ON: the light is on.' : 'Switch ON.${lights.isEmpty ? '' : ' The light does not come on: check its wiring.'}') : 'Switch OFF.');
  }

  FAct plug(int boxId, String key) {
    final b = boxById(boxId);
    if (b == null || b.kind != 'outlet' || b.dev == null || !isOutletKind(b.dev!)) return _bad('Plug it into a finished outlet: tap an outlet on the wall.');
    if (!deviceDone(b)) return _bad('Wire the outlet and put its plate on first.');
    final machine = kMachineOutlets[key];
    if (machine != null && !machine.contains(b.dev)) return _bad('The plug does not fit. That machine has a big plug made for its own outlet.');
    if (plugged[boxId] == key) {
      plugged.remove(boxId);
      return const FAct(true, 'Unplugged.');
    }
    plugged[boxId] = key;
    if (!breaker) return const FAct(true, 'Plugged in. Nothing happens because the breaker is off.');
    if (!runs(b)) return _bad('Plugged in, but nothing happens: the outlet is not working. Check how it is wired.');
    return const FAct(true, 'Plugged in and running.');
  }

  // ── The job ──

  List<WTask> get tasks => [
        for (var k = 0; k < 4; k++) WTask('An outlet on ${kWallNames[k]}, with its cable', boxes.any((b) => b.kind == 'outlet' && b.wall == k && b.cable != null)),
        WTask('A switch box beside the door, with its cable', boxes.any((b) => b.kind == 'switch' && b.cable != null && _nearDoor(b))),
        WTask('A light box in the ceiling, with its cable', boxes.any((b) => b.kind == 'ceiling' && b.cable != null)),
      ];

  /// The rough wiring is done: the boxes are in and the cable is pulled to every one.
  bool get complete => tasks.every((t) => t.done);

  /// Every box has its device wired and finished, and the power is on.
  bool get fullyWired => complete && boxes.every(works) && breaker;
  double get feet => boxes.fold(0.0, (a, b) => a + (b.cable?.inches ?? 0)) / 12;
  int count(String kind) => boxes.where((b) => b.kind == kind).length;

  /// Every job of the lesson, finished or not: each task, each device that works, and the power test.
  Map<String, bool> get jobs {
    final t = tasks;
    return {
      for (var i = 0; i < t.length; i++) 'task$i': t[i].done,
      for (final b in boxes) 'dev${b.id}': works(b) && (verdictOf(b)?.ok ?? false),
      'power': breaker && boxes.isNotEmpty && boxes.every(works),
    };
  }

  // ── What to do next ──

  List<Stud> _missingFor(FBox b, {int from = 0}) {
    // The studs a cable to this box from the panel would still need holes in (the same choice of way round that pull makes).
    final src = from == 0 ? null : boxById(from);
    final p0 = src == null ? perim(kPanelWall, kPanelU) : perim(src.wall, src.u), p1 = perim(b.wall, b.u);
    final dirs = [for (final d in const [1, -1]) if (!_crossesDoor(p0, p1, d)) d];
    if (dirs.isEmpty) return const [];
    double span(int d) => d > 0 ? ((p1 - p0) % kPerim + kPerim) % kPerim : ((p0 - p1) % kPerim + kPerim) % kPerim;
    dirs.sort((a, c) => span(a).compareTo(span(c)));
    final dir = dirs.first;
    final st = studById(b.studId!)!;
    final fixed = st.kind == 'king' || st.kind == 'jack';
    final side = fixed ? b.side : -dir.toDouble();
    final route = _route(p0, p1, dir, own: side != -dir ? st.id : null);
    return [for (final s in route) if (!drilled.contains(s.id)) s];
  }

  WHint hint() {
    Stud pick(int wall, double near) {
      final c = kStuds.where((s) => s.wall == wall && s.kind == 'common' && !boxes.any((b) => b.studId == s.id)).toList()..sort((a, b) => (a.u - near).abs().compareTo((b.u - near).abs()));
      return c.first;
    }

    for (var k = 0; k < 4; k++) {
      if (!boxes.any((b) => b.kind == 'outlet' && b.wall == k)) {
        final s = pick(k, k == kDoor.wall ? 112 : 80);
        return WHint('Put an outlet box on ${kWallNames[k]}: open Boxes, pick Outlet box, and tap the lit stud.', ids: [s.id], tool: 'outlet');
      }
    }
    if (!boxes.any((b) => b.kind == 'switch')) {
      final s = pick(kDoor.wall, 80);
      return WHint('Put a switch box beside the door: open Boxes, pick Switch box, and tap the lit stud next to the door.', ids: [s.id], tool: 'switch');
    }
    if (!boxes.any((b) => b.kind == 'ceiling')) return const WHint('Hang a ceiling box for the light: open Boxes, pick Ceiling box, and tap a lit joist.', ids: [idJoist0 + 4], tool: 'ceiling');
    for (final b in boxes) {
      if (b.cable == null && b.openKo == 0) {
        return WHint('Break a knockout in the lit box: pick Knockout and tap the round tab. The view zooms in to the box.', ids: [koId(b.id, b.kind == 'switch' ? 0 : 1)], tool: 'knock');
      }
    }
    for (final b in boxes) {
      if (b.cable != null) continue;
      if (b.kind == 'ceiling') {
        final s = boxes.where((x) => x.kind == 'switch' && x.cable != null).firstOrNull;
        if (s == null) continue;
        if (freeKo(s) == null) return WHint('The cable up to the light leaves the switch box through a second knockout: pick Knockout and tap the lit tab.', ids: _closedKo(s).take(1).toList(), tool: 'knock');
        final seg = math.min(topSegCount(s.wall) - 1, (s.u / 16).floor());
        final tid = topSegId(s.wall, seg);
        if (!drilled.contains(tid)) return WHint('The light is fed from the switch: drill the lit piece of top plate, right over the switch.', ids: [tid], tool: 'drill');
        return WHint('Pull the cable up to the light: pick Cable roll and tap the lit ceiling box.', ids: [b.id], tool: 'cable');
      }
      final miss = _missingFor(b);
      if (miss.isNotEmpty) return WHint('The cable needs a hole in every stud on its way: pick Drill and tap the lit studs (or press Drill the lit).', ids: [for (final s in miss.take(40)) s.id], tool: 'drill');
      return WHint('Pull the cable: pick Cable roll and tap the lit box. It unrolls from the panel.', ids: [b.id], tool: 'cable');
    }
    for (final b in boxes) {
      if (b.cable != null && !works(b)) {
        final what = b.kind == 'ceiling' ? 'Lights' : (b.kind == 'switch' ? 'Switches' : 'Outlets');
        final started = b.dev != null;
        return WHint(started ? 'Carry on wiring the device in the lit box: pick it again and tap the box. Ground goes to the green screw, white to silver, black to brass; then push it in and put the plate on.' : 'Wire a device in the lit box: open $what, pick one and tap the box. In the close-up, ground goes to the green screw, white to silver, black to brass.', ids: [b.id], tool: started ? 'dev:${b.dev}' : '');
      }
    }
    if (!breaker) return const WHint('Turn the power on to test everything: press the Breaker button.', tool: 'breaker');
    final sw = boxes.where((b) => b.kind == 'switch' && !b.on).firstOrNull;
    if (sw != null) return WHint('Flip the switch to light the ceiling: pick Look and tap the switch.', ids: [sw.id]);
    return const WHint('Everything works. Try it: open TVs or Phones, pick one and tap a finished outlet to plug it in.');
  }
}

// ─── The picture ─────────────────────────────────────────────────────────────

/// The still picture of the room. [tool] decides which marks are shown (where the tool in hand can be used); [source] is the box the cable roll
/// starts from (0 for the breaker panel).
Scene3D buildWiringScene(WiringHouse w, {String tool = 'look', int source = 0, int focus = 0}) {
  final b = MeshBuilder();
  drawFrame(b, drilled: w.drilled);
  drawWiringProps(b);
  for (final x in w.boxes) {
    if (x.kind == 'ceiling') {
      drawCeilingBox(b, id: x.id, x: joistX(x.joist!));
    } else {
      drawElectricalBox(b, id: x.id, wall: x.wall, u: x.u, y: x.y, side: x.side);
    }
    drawKnockouts(b, x);
    drawDeviceFace(b, x, w);
  }
  drawPlugged(b, w);
  // What can be tapped with the tool in hand: a bright mark on each place, and an invisible pad round it so a finger finds it at once.
  void pad(int id, V3 c, V3 s) {
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

  // A bright ball on each place: a ball looks the same from every side, so it never vanishes when the view turns.
  void dot(int id, V3 c, Color col, {double r = 1.5}) {
    b
      ..id = id
      ..order = 2
      ..bias = 3
      ..alpha = 0.95;
    b.ball(c, r, col, shine: 0.3, lat: 4, lon: 8);
    b
      ..alpha = 1
      ..bias = 0;
  }

  void onBox(FBox x, Color col, {double r = 1.7}) {
    final c = boxFace(x);
    pad(x.id, c, const V3(8, 9, 8));
    dot(x.id, c + const V3(0, 5.5, 0), col, r: r);
  }

  if (tool.startsWith('dev:')) {
    final kind = tool.substring(4);
    for (final x in w.boxes) {
      final fits = x.kind == 'ceiling' ? (kind == 'light' || kind == 'fan') : (x.kind == 'switch' ? isSwitchKind(kind) : isOutletKind(kind));
      if (x.cable != null && fits && !(w.deviceDone(x) && x.dev == kind)) onBox(x, const Color(0xFF4ADE80));
    }
  } else if (tool.startsWith('app:')) {
    for (final x in w.boxes) {
      if (x.kind == 'outlet' && w.deviceDone(x)) onBox(x, const Color(0xFF4ADE80));
    }
  } else {
    switch (tool) {
      case 'drill':
        for (final s in kStuds) {
          if (!s.atCableHeight || w.drilled.contains(s.id)) continue;
          dot(s.id, wallPt(s.wall, s.u, kDrillY, kStD + 1.3), const Color(0xFFFFD60A), r: 1.5);
          pad(s.id, wallPt(s.wall, s.u, (s.y0 + s.y1) / 2, kStD / 2 + 0.6), wallSize(s.wall, 7, s.y1 - s.y0, kStD + 1.2));
        }
        for (var k = 0; k < 4; k++) {
          for (var s = 0; s < topSegCount(k); s++) {
            final id = topSegId(k, s);
            if (w.drilled.contains(id)) continue;
            dot(id, wallPt(k, topSegU(k, s), 94.5, kStD + 1.3), const Color(0xFFFB923C), r: 1.5);
          }
        }
      case 'outlet' || 'switch':
        final y = tool == 'switch' ? 48.0 : 16.0;
        for (final s in kStuds) {
          if (!s.takesBox || w.boxes.any((x) => x.studId == s.id)) continue;
          dot(s.id, wallPt(s.wall, s.u, y, kStD + 1.5), const Color(0xFF4ADE80), r: 1.8);
          pad(s.id, wallPt(s.wall, s.u, (s.y0 + s.y1) / 2, kStD / 2 + 0.6), wallSize(s.wall, 7, s.y1 - s.y0, kStD + 1.2));
        }
      case 'ceiling':
        if (!w.boxes.any((x) => x.kind == 'ceiling')) {
          for (var i = 0; i < kJoists; i++) {
            dot(idJoist0 + i, V3(joistX(i), 94.6, 0), const Color(0xFF4ADE80), r: 1.7);
            pad(idJoist0 + i, V3(joistX(i), 97, 0), const V3(8, 6, 40));
          }
        }
      case 'knock':
        for (final x in w.boxes) {
          for (var k = 0; k < 2; k++) {
            if (x.kos[k]) continue;
            final c = koPos(x, k);
            pad(koId(x.id, k), c, const V3(5, 5, 5));
            dot(koId(x.id, k), c + (x.kind == 'ceiling' ? V3(k == 0 ? -1.4 : 1.4, 0, 0) : V3(0, k == 0 ? -1.4 : 1.4, 0)), const Color(0xFFFB923C), r: 1.2);
          }
        }
      case 'cable':
        // The panel and every box with power can start a cable; a box without a cable is where one ends.
        pad(idPanel, wallPt(kPanelWall, kPanelU, (kPanelY0 + kPanelY1) / 2, 2.5), wallSize(kPanelWall, 16, 28, 6));
        dot(idPanel, wallPt(kPanelWall, kPanelU, kPanelY0 - 3, kStD + 2.5), source == 0 ? const Color(0xFFFFFFFF) : const Color(0xFF38BDF8), r: source == 0 ? 2.4 : 1.8);
        for (final x in w.boxes) {
          if (x.cable == null) {
            onBox(x, const Color(0xFFFFD60A));
          } else if (w.powered(x) && x.kind != 'ceiling') {
            onBox(x, x.id == source ? const Color(0xFFFFFFFF) : const Color(0xFF38BDF8), r: x.id == source ? 2.4 : 1.7);
          }
        }
    }
  }

  // The box the view is closed in on shows its two tabs: orange when closed (tap to break it out), green when it is out and free, grey when a cable is in it.
  final fb = focus == 0 ? null : w.boxById(focus);
  if (fb != null && !tool.startsWith('dev:') && !tool.startsWith('app:')) {
    for (var k = 0; k < 2; k++) {
      final c = koPos(fb, k);
      final col = !fb.kos[k] ? const Color(0xFFFB923C) : (fb.usedKo.contains(k) ? const Color(0xFF9CA3AF) : const Color(0xFF4ADE80));
      pad(koId(fb.id, k), c, const V3(6, 6, 6));
      dot(koId(fb.id, k), c + (fb.kind == 'ceiling' ? V3(k == 0 ? -1.6 : 1.6, 0, 0) : V3(0, k == 0 ? -1.6 : 1.6, 0)), col, r: 1.3);
    }
  }

  String boxName(FBox x) => x.kind == 'ceiling' ? 'Ceiling box' : (x.kind == 'switch' ? 'Switch box' : 'Outlet box');
  final info = <int, ObjInfo>{
    for (final s in kStuds)
      s.id: ObjInfo(s.label, switch (s.kind) {
        'king' => 'A king stud runs the full height beside a door or window. The jack stud next to it carries the header.',
        'jack' => 'A jack stud holds up the header over the opening. It stops under the header.',
        'cripple' => 'A short stud above the header, or under the window sill, keeps the 16 inch spacing going.',
        'corner' => 'A corner stud: the walls meet here and the drywall will need something to screw into.',
        _ => 'A 2 by 4 stud, standing 16 inches from the next one. The cable goes through a hole drilled in its middle.',
      }, wallPt(s.wall, s.u, 48, kStD), 60),
    for (var k = 0; k < 4; k++)
      for (var s = 0; s < topSegCount(k); s++) topSegId(k, s): ObjInfo('Top plate', 'Two boards across the tops of the studs. A cable going up to the ceiling light passes through a hole drilled in it.', wallPt(k, topSegU(k, s), 94.5, kStD), 60),
    for (var k = 0; k < 4; k++) idBottom0 + k: ObjInfo('Bottom plate', 'The board the studs stand on, nailed to the floor.', wallPt(k, wallLen(k) / 2, 1, kStD), 90),
    for (var i = 0; i < kJoists; i++) idJoist0 + i: ObjInfo('Ceiling joist', 'A 2 by 6 across the top of the room. The ceiling drywall will be screwed to the bottom of it, and a light box hangs from the side.', V3(joistX(i), 98, 0), 90),
    for (final e in kPropInfo.entries) e.key: ObjInfo(e.value.$1, e.value.$2, e.value.$3, 60),
    idPanel: const ObjInfo('Breaker panel', 'Every cable in the house starts here, one breaker for each circuit. Tap it with the Cable roll to start a cable from here.', V3(-48, 59, -58), 50),
    idHeader0: const ObjInfo('Door header', 'A thick beam over the door that carries the weight of the wall above it.', V3(8, 85, 58), 70),
    idHeader0 + 1: const ObjInfo('Window header', 'A thick beam over the window, held up by the jack studs.', V3(70, 76, -2), 70),
    idHeader0 + 2: const ObjInfo('Window sill', 'The board the window sits on. The short studs under it hold it up.', V3(70, 37, -2), 70),
    for (final x in w.boxes) ...{
      x.id: ObjInfo(x.dev == null ? boxName(x) : '${boxName(x)}: ${deviceKindName(x.dev!)}', x.kind == 'ceiling' ? 'The box the light hangs from. Knockouts open: ${x.openKo} of 2.' : 'A plastic box nailed to the stud. Knockouts open: ${x.openKo} of 2. The cable ends inside it, and the device is wired to the cable.', boxFace(x), 24),
      for (var k = 0; k < 2; k++) koId(x.id, k): ObjInfo('Knockout', x.kos[k] ? 'A knockout that is broken out: a round hole for a cable.' : 'A round tab in the box. Break it out with the Knockout tool to make a hole for a cable.', koPos(x, k), 14),
    },
  };
  return Scene3D(b.polys, info: info, shell: (-72, 72, -60, 60), closedShell: true);
}

/// The cables (drawn out from the panel as you watch) and the pieces of wood that glow when something needs them.
List<Poly> wiringDynamic(WiringHouse w, double t, Map<int, double> started, Set<int> glow) {
  final b = MeshBuilder();
  for (final x in w.boxes) {
    final c = x.cable;
    if (c == null) continue;
    final p = ((t - (started[x.id] ?? -99)) / 1.6).clamp(0.0, 1.0);
    final pts = _trim(c.path, p);
    if (pts.length < 2) continue;
    b
      ..id = 0
      ..order = 2
      ..bias = 0.6;
    b.tube(pts, 0.36, c.light ? kNmWhite : kNmYellow, shine: 0.35, sides: 6, joints: true, endCaps: true);
    b.bias = 0;
  }
  if (glow.isNotEmpty) {
    final pulse = 0.5 + 0.5 * math.sin(t * 7);
    for (final id in glow) {
      V3? c;
      V3? s;
      final st = studById(id);
      final seg = topSegOf(id);
      if (st != null) {
        c = wallPt(st.wall, st.u, kDrillY, kStD / 2);
        s = wallSize(st.wall, 8, 14, kStD + 4);
      } else if (seg != null) {
        c = wallPt(seg.wall, topSegU(seg.wall, seg.seg), 94.5, kStD / 2);
        s = wallSize(seg.wall, 14, 8, kStD + 4);
      } else if (isKoId(id) && w.boxById(koBoxOf(id)) != null) {
        c = koPos(w.boxById(koBoxOf(id))!, koIndexOf(id));
        s = const V3(7, 7, 7);
      } else if (isBoxId(id) && w.boxById(id) != null) {
        c = boxFace(w.boxById(id)!);
        s = const V3(9, 10, 9);
      } else if (isJoistId(id)) {
        c = V3(joistX(id - idJoist0), 98, 0);
        s = const V3(8, 8, 40);
      }
      if (c == null || s == null) continue;
      b
        ..id = 0
        ..order = 3
        ..bias = 1.2
        ..alpha = 0.25 + 0.25 * pulse;
      b.box(c, s, const Color(0xFFFFE066));
    }
    b
      ..alpha = 1
      ..bias = 0;
  }
  return b.polys;
}

List<V3> _trim(List<V3> path, double p) {
  if (p >= 1) return path;
  var total = 0.0;
  for (var i = 1; i < path.length; i++) {
    total += (path[i] - path[i - 1]).len;
  }
  var left = total * p;
  final out = <V3>[path.first];
  for (var i = 1; i < path.length; i++) {
    final seg = (path[i] - path[i - 1]).len;
    if (left >= seg) {
      out.add(path[i]);
      left -= seg;
    } else {
      if (left > 0.01) out.add(V3.lerp(path[i - 1], path[i], left / seg));
      break;
    }
  }
  return out;
}

// ─── The page ────────────────────────────────────────────────────────────────

class _Item {
  const _Item(this.key, this.label, this.icon);
  final String key, label;
  final IconData icon;
}

/// A button on the first screen of the tools that opens more of them (all the TVs, all the switches...).
class _Cat {
  const _Cat(this.key, this.label, this.icon, this.items);
  final String key, label;
  final IconData icon;
  final List<_Item> items;
}

final List<_Cat> _cats = [
  const _Cat('boxes', 'Boxes', Icons.crop_portrait_rounded, [_Item('outlet', 'Outlet box', Icons.crop_portrait_rounded), _Item('switch', 'Switch box', Icons.toggle_on_rounded), _Item('ceiling', 'Ceiling box', Icons.circle_outlined)]),
  _Cat('outlets', 'Outlets', Icons.power_rounded, [for (final k in ['outlet', 'gfci', ...kOutletVariants, ...kApplianceOutlets]) _Item('dev:$k', deviceKindName(k), Icons.power_rounded)]),
  _Cat('switches', 'Switches', Icons.toggle_on_rounded, [for (final k in ['switch', ...kSwitchVariants]) _Item('dev:$k', deviceKindName(k), Icons.toggle_on_rounded)]),
  const _Cat('lights', 'Lights', Icons.lightbulb_rounded, [_Item('dev:light', 'Ceiling light', Icons.lightbulb_rounded), _Item('dev:fan', 'Ceiling fan', Icons.mode_fan_off_rounded)]),
  _Cat('tvs', 'TVs', Icons.tv_rounded, [for (final a in kTvs) _Item('app:${a.key}', a.label, Icons.tv_rounded)]),
  _Cat('phones', 'Phones', Icons.smartphone_rounded, [for (final a in kPhones) _Item('app:${a.key}', a.label, a.key == 'tablet' ? Icons.tablet_rounded : Icons.smartphone_rounded)]),
  _Cat('appliances', 'Appliances', Icons.kitchen_rounded, [for (final a in kHomeApps) _Item('app:${a.key}', a.label, Icons.kitchen_rounded)]),
];

/// The yaw that puts the camera in front of a wall, looking at it.
double _yawFor(int wall) => const [0.0, math.pi / 2, math.pi, -math.pi / 2][wall];

class NgmyWiringHousePage extends StatefulWidget {
  const NgmyWiringHousePage({super.key});

  @override
  State<NgmyWiringHousePage> createState() => NgmyWiringHousePageState();
}

class NgmyWiringHousePageState extends State<NgmyWiringHousePage> {
  final WiringHouse w = WiringHouse();
  late final Cam3 cam = Cam3(yaw: 0, pitch: 0.07, dist: 120, target: const V3(0, 46, 0))
    ..minDist = 8
    ..maxDist = 520
    ..minPitch = -0.9
    ..maxPitch = 1.3
    ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
    ..setFree(true);
  late Scene3D scene = buildWiringScene(w);
  String tool = 'look';

  /// The category whose tools are open (null on the first screen of tools).
  String? menu;

  /// The box the cable roll starts from (0 is the breaker panel).
  int source = 0;

  /// The box the view is closed in on (its tabs show): 0 when none.
  int focus = 0;
  int hl = 0;
  String? msg;
  bool good = true;
  bool dollhouse = false;
  bool _doneShown = false;
  final Stopwatch _clock = Stopwatch()..start();
  final Map<int, double> _started = {};
  Set<int> glow = {};
  V3? _goAt;
  double _goT = -99;
  int _lastPick = 0;
  double _lastPickAt = -9;
  Timer? _msgT, _glowT;

  /// The stars: a job finished without a hint pays one, each hint costs two. [net] is what this page has added or taken.
  int net = 0;
  int hintsSinceJob = 0;
  int hintsUsed = 0;
  final Set<String> _paid = {};

  double get _now => _clock.elapsedMilliseconds / 1000;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _say('Tap a tool on the floor (the cable roll, the drill), or choose one from the list, to pick it up. Stuck? Press Hint (it costs 2 stars; a job done without a hint earns 1).');
    });
  }

  @override
  void dispose() {
    _msgT?.cancel();
    _glowT?.cancel();
    super.dispose();
  }

  void _say(String t, {bool ok = true}) {
    _msgT?.cancel();
    setState(() {
      msg = t;
      good = ok;
    });
    _msgT = Timer(const Duration(seconds: 14), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _rebuild() => scene = buildWiringScene(w, tool: tool, source: source, focus: focus);

  void _lightUp(List<int> ids) {
    _glowT?.cancel();
    setState(() => glow = ids.toSet());
    _glowT = Timer(const Duration(seconds: 8), () {
      if (mounted) setState(() => glow = {});
    });
  }

  String _howTo(String t) {
    if (t.startsWith('dev:')) return '${deviceKindName(t.substring(4))}: tap a box that has its cable. The view closes in on it and you connect each wire to its screw.';
    if (t.startsWith('app:')) return '${appInfo(t.substring(4))?.label ?? 'It'}: tap a finished outlet to plug it in (tap it again to unplug it). Turn the breaker on so it runs.';
    return switch (t) {
      'look' => 'Look: tap any piece to learn its name and what it does. Tap a finished switch to flip it. Drag to turn round.',
      'outlet' => 'Outlet box: tap a stud (a green mark shows where the box will sit, 16 inches up). Put one on each of the four walls.',
      'switch' => 'Switch box: tap a stud, ideally right beside the door. It sits 48 inches up.',
      'ceiling' => 'Ceiling box: tap a joist, one of the boards across the top. The light will hang from it.',
      'knock' => 'Knockout: tap a box to close in on it, then tap an orange tab to break it out. The cable goes in through that hole.',
      'drill' => 'Drill: tap a yellow mark to drill a hole through that stud, 20 inches up. The cable can only pass through studs that have a hole.',
      _ => 'Cable roll: tap a box (the view closes in on it), then tap the knockout the cable goes in through: the cable unrolls from the panel to it. To go on from a box instead, tap a blue box that has power first, then the next box. Tap the panel to start from it again.',
    };
  }

  String _needs(String t) {
    if (t == 'cable' && w.boxes.isEmpty) return ' There is no box yet: put an outlet box on a stud first.';
    if (t == 'knock' && w.boxes.isEmpty) return ' There is no box yet: put a box on a stud first.';
    if (t.startsWith('dev:') && !w.boxes.any((b) => b.cable != null)) return ' No box has its cable yet: pull the cable to a box first.';
    if (t.startsWith('app:') && !w.boxes.any((b) => b.kind == 'outlet' && w.deviceDone(b))) return ' No outlet is finished yet: wire an outlet in a box first.';
    return '';
  }

  /// A tap on a tool lying on the floor picks it up.
  void _grab(int id, String t) {
    setState(() {
      tool = t;
      hl = id;
      menu = null;
      _rebuild();
    });
    _say('You picked up the ${kPropInfo[id]!.$1.toLowerCase()}. ${_howTo(t)}${_needs(t)}');
  }

  /// Two quick taps on the same piece do the thing once, not twice (the second tap may be the first half of a double tap to walk there).
  bool _again(int id) {
    final again = id == _lastPick && _now - _lastPickAt < 0.45;
    _lastPick = id;
    _lastPickAt = _now;
    return again;
  }

  /// Double tap: walk over there, inside the room (from the view of the whole room too).
  void _goTo(Offset local, Size size) {
    final p = frameGoPoint(cam, local, size);
    if (p == null) {
      _say("Double tap the floor or a wall to walk over there.", ok: false);
      return;
    }
    if (dollhouse) {
      dollhouse = false;
      cam
        ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
        ..maxDist = 520;
    }
    setState(() {
      _goAt = p;
      _goT = _now;
    });
    cam.glideTo(target: p, dist: math.min(cam.dist, 70.0), pitch: 0.07);
    _say("You walked over here. Drag to turn round.");
  }

  @visibleForTesting
  void doubleTapForTest(Offset local, Size size) => _goTo(local, size);

  /// The view closes in on a box (to break its knockouts, or to see what is in it).
  void _zoomToBox(FBox x) {
    focus = x.id;
    final c = boxFace(x);
    if (x.kind == 'ceiling') {
      cam.glideTo(target: c, dist: 24, yaw: 0.6, pitch: -0.7);
    } else {
      cam.glideTo(target: c, dist: 20, yaw: _yawFor(x.wall), pitch: 0.05);
    }
  }

  void _drillLit() {
    var n = 0;
    for (final id in glow.toList()) {
      if (w.drill(id).ok) n++;
    }
    setState(() {
      glow = {};
      _rebuild();
    });
    _say("$n ${n == 1 ? 'hole' : 'holes'} drilled. Now tap the box with the Cable roll again.");
    _afterJobs();
  }

  /// Pays one star for each job that is finished now and was done without a hint since the last one.
  String _afterJobs() {
    var earned = 0;
    for (final e in w.jobs.entries) {
      if (!e.value || _paid.contains(e.key)) continue;
      _paid.add(e.key);
      if (hintsSinceJob == 0) earned++;
      hintsSinceJob = 0;
    }
    if (earned > 0) {
      net += earned;
      Community.addStars(earned);
      return '  ⭐ +$earned for a job finished without a hint.';
    }
    return '';
  }

  void _hint() {
    final h = w.hint();
    hintsUsed++;
    hintsSinceJob++;
    net -= 2;
    Community.spendStars(2);
    if (h.ids.isNotEmpty) _lightUp(h.ids);
    final first = h.ids.isEmpty ? null : h.ids.first;
    if (first != null && isBoxId(first)) {
      final bx = w.boxById(first);
      if (bx != null && (h.tool == 'knock' || h.tool == 'cable')) _zoomToBox(bx);
    }
    if (first != null && isKoId(first)) {
      final bx = w.boxById(koBoxOf(first));
      if (bx != null) _zoomToBox(bx);
    }
    setState(_rebuild);
    _say('Hint (−2 ⭐): ${h.text}');
  }

  @visibleForTesting
  void hintForTest() => _hint();

  @visibleForTesting
  void pickForTest(int id) {
    _lastPickAt = -9;
    _pick(id);
  }

  void setTool(String t) {
    setState(() {
      tool = t;
      hl = 0;
      _rebuild();
    });
    _say(_howTo(t) + _needs(t));
  }

  void _toggleBreaker() {
    final a = w.toggleBreaker();
    if (a.ok) {
      conGood();
    } else {
      conBad();
    }
    setState(_rebuild);
    final note = _afterJobs();
    _say(a.msg + note, ok: a.ok);
  }

  Future<void> _openDevice(FBox x) async {
    x.ws?.power = w.breaker;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => ElectricalLessonPage(id: x.dev!, state: x.ws)));
    if (!mounted) return;
    setState(_rebuild);
    final note = _afterJobs();
    final ws = x.ws!;
    _say(ws.stage >= 2 ? '${deviceKindName(x.dev!)} wired and finished.$note' : 'Not finished: the device is in the box but the job is not done. Pick it again and tap the box to carry on.$note', ok: ws.stage >= 2);
    _checkDone();
  }

  void _checkDone() {
    if (w.fullyWired && !_doneShown) {
      _doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _finished());
    }
  }

  /// The tab of a box was tapped.
  void _tapKo(int id) {
    final bx = w.boxById(koBoxOf(id));
    if (bx == null) return;
    final k = koIndexOf(id);
    if (cam.dist > 40) _zoomToBox(bx);
    if (tool == 'cable') {
      _cableThrough(bx, k);
      return;
    }
    if (bx.kos[k]) {
      setState(() => hl = id);
      _say('That knockout is out already. To pull a cable in through it: pick the Cable roll, tap the box, then tap this knockout.');
      return;
    }
    final a = w.knockout(id);
    conGood();
    setState(() {
      focus = bx.id;
      hl = id;
      _rebuild();
    });
    _say('${a.msg} Now pick the Cable roll and tap the box, then the knockout the cable goes in through.');
    _checkDone();
  }

  /// The cable roll in hand and a knockout tapped: the knockout is broken out if it was closed, and the cable rolls in through it.
  void _cableThrough(FBox bx, int k) {
    if (bx.cable != null) {
      _say('This box has its cable already. Tap the box to pull the cable out again.', ok: false);
      return;
    }
    var note = '';
    final src = source == 0 ? null : w.boxById(source);
    if (src != null && w.freeKo(src) == null) {
      final closed = [for (var j = 0; j < 2; j++) if (!src.kos[j]) j];
      if (closed.isNotEmpty) {
        w.knockout(koId(src.id, closed.first));
        note = ' A knockout was broken out in the first box for the cable to leave through.';
      }
    }
    if (!bx.kos[k]) {
      w.knockout(koId(bx.id, k));
      note = ' You broke out the knockout.$note';
    }
    final a = w.pull(bx.id, from: source, via: k);
    if (a.ok) {
      conGood();
      _started[bx.id] = _now;
      // Back far enough to watch the cable come along the wall.
      final c = boxFace(bx);
      cam.glideTo(target: c, dist: 70, yaw: bx.kind == 'ceiling' ? 0.6 : _yawFor(bx.wall), pitch: bx.kind == 'ceiling' ? -0.3 : 0.07);
    } else {
      conBad();
    }
    setState(() {
      focus = bx.id;
      hl = bx.id;
      _rebuild();
    });
    final jobs = a.ok ? _afterJobs() : '';
    _say('${a.msg}$note$jobs', ok: a.ok);
    if (a.show.isNotEmpty) _lightUp(a.show);
    _checkDone();
  }

  void _pick(int id) {
    if (id != 0 && _again(id)) return;
    final grabbed = kPropTool[id];
    if (grabbed != null && (grabbed == 'cable' || grabbed == 'drill')) {
      _grab(id, grabbed);
      return;
    }
    if (id == 0) {
      setState(() => hl = 0);
      return;
    }
    final handTool = tool.startsWith('dev:') || tool.startsWith('app:');
    if (isKoId(id) && !handTool) {
      _tapKo(id);
      return;
    }
    final bx = w.boxById(id);
    // A tap on a box (with any tool that is not putting something in it): the view closes in on it, so its tabs show.
    if (bx != null && !handTool && tool != 'cable') {
      if (tool == 'look' && bx.kind == 'switch' && w.deviceDone(bx)) {
        final a = w.flip(id);
        setState(() {
          _rebuild();
          hl = id;
        });
        _say(a.msg, ok: a.ok);
        return;
      }
      _zoomToBox(bx);
      setState(() {
        hl = id;
        _rebuild();
      });
      _say('Close up on the ${bx.kind == 'ceiling' ? 'ceiling' : bx.kind} box. Tap an orange tab to break out a knockout (green ones are out already). Then pick the Cable roll, tap the box and tap the knockout the cable goes in through.');
      return;
    }
    if (tool == 'look') {
      final i = scene.info[id];
      if (i != null) {
        setState(() => hl = id);
        cam.glideTo(target: i.focus);
        _say('${i.name}: ${i.about}');
      }
      return;
    }
    FAct a;
    if (tool.startsWith('dev:')) {
      a = w.installDevice(id, tool.substring(4));
      if (a.ok) {
        conGood();
        final nb = w.boxById(id)!;
        setState(() {
          hl = id;
          _rebuild();
        });
        _say(a.msg);
        _openDevice(nb);
        return;
      }
    } else if (tool.startsWith('app:')) {
      a = w.plug(id, tool.substring(4));
    } else {
      switch (tool) {
        case 'outlet' || 'switch' || 'ceiling':
          a = w.place(tool, id);
          if (a.ok) {
            // The new box is shown close up, with its tabs.
            final nb = w.boxes.last;
            _zoomToBox(nb);
            a = FAct(true, '${a.msg} The view is close on it: tap an orange tab to break it out.');
          }
        case 'drill':
          a = w.drill(id);
        default:
          if (id == idPanel) {
            source = 0;
            a = const FAct(true, 'The cable will start at the breaker panel. Tap the box it must reach, then the knockout it goes in through.');
          } else if (bx != null && bx.cable != null && w.powered(bx) && bx.kind != 'ceiling' && source != bx.id) {
            source = bx.id;
            a = FAct(true, 'The cable will go on from this ${bx.kind} box. Tap the next box it must reach, then the knockout it goes in through. (Tap this box again to pull its cable out.)');
          } else if (bx != null && bx.cable != null) {
            final wasSource = source == id;
            a = w.pull(id);
            if (a.ok && wasSource) source = 0;
          } else if (bx != null) {
            // A box that needs its cable: close in on it and choose the knockout the cable goes in through.
            _zoomToBox(bx);
            a = FAct(true, 'Close up. Tap the knockout the cable goes in through: a green one is open already, an orange one is broken out for you.');
          } else {
            a = w.pull(id, from: source);
          }
      }
    }
    if (a.ok) {
      conGood();
    } else {
      conBad();
    }
    setState(() {
      _rebuild();
      hl = a.ok ? id : 0;
    });
    final note = a.ok ? _afterJobs() : '';
    _say(a.msg + note, ok: a.ok);
    if (a.show.isNotEmpty) _lightUp(a.show);
    _checkDone();
  }

  void _finished() {
    if (!mounted) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('The house is wired! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('Every box has its cable and its device, the power is on and everything works, with ${w.feet.toStringAsFixed(0)} feet of cable.\n\nMistakes: ${w.mistakes}   Hints: $hintsUsed   Stars this lesson: ${net >= 0 ? '+' : ''}$net\n\nTry plugging in a TV or a phone, then the Hanging drywall lesson.', style: const TextStyle(color: Colors.white70, height: 1.45)),
        actions: [FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Great'))],
      ),
    );
  }

  void _toggleView() {
    setState(() => dollhouse = !dollhouse);
    if (dollhouse) {
      cam
        ..keepIn = null
        ..maxDist = 620;
      cam.glideTo(target: const V3(0, 40, 0), dist: 330, yaw: 0.5, pitch: 0.85);
      _say('The whole room from above: the near walls are left out so you can see in.');
    } else {
      cam
        ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
        ..maxDist = 520;
      cam.glideTo(target: const V3(0, 46, 0), dist: 120, yaw: 0, pitch: 0.07);
      _say('Back inside the room. Drag to turn round and see every wall.');
    }
  }

  void _reset() {
    setState(() {
      w.reset();
      _started.clear();
      glow = {};
      hl = 0;
      source = 0;
      focus = 0;
      _doneShown = false;
      _rebuild();
    });
    _say('Everything is taken out again. Start with the boxes.');
  }

  Widget _chip(String key, String label, IconData icon, {required bool on, required VoidCallback onTap, Color color = kConAmber, String? small}) {
    return GestureDetector(
      key: Key(key),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(13), border: Border.all(color: on ? color : Colors.white24, width: on ? 2 : 1)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(icon, size: 17, color: on ? color : Colors.white70),
          const SizedBox(width: 5),
          Text(label, style: TextStyle(color: on ? color : Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
          if (small != null) ...[const SizedBox(width: 5), Text(small, style: TextStyle(color: on ? color : Colors.white54, fontWeight: FontWeight.w700, fontSize: 10.5))],
        ]),
      ),
    );
  }

  Widget _tray() {
    final m = menu == null ? null : _cats.firstWhere((c) => c.key == menu);
    if (m != null) {
      return Wrap(spacing: 6, runSpacing: 6, children: [
        _chip('menu-back', 'Back', Icons.arrow_back_rounded, on: false, onTap: () => setState(() => menu = null), color: Colors.white70),
        for (final it in m.items) _chip('tool-${it.key}', it.label, it.icon, on: tool == it.key, onTap: () => setTool(it.key)),
      ]);
    }
    bool inCat(_Cat c) => c.items.any((i) => i.key == tool);
    return Wrap(spacing: 6, runSpacing: 6, children: [
      _chip('tool-look', 'Look', Icons.search_rounded, on: tool == 'look', onTap: () => setTool('look')),
      for (final c in _cats.take(1)) _chip('cat-${c.key}', c.label, c.icon, on: inCat(c), small: '▸', onTap: () => setState(() => menu = c.key)),
      _chip('tool-knock', 'Knockout', Icons.radio_button_unchecked_rounded, on: tool == 'knock', onTap: () => setTool('knock')),
      _chip('tool-drill', 'Drill', Icons.construction_rounded, on: tool == 'drill', onTap: () => setTool('drill')),
      _chip('tool-cable', 'Cable roll', Icons.cable_rounded, on: tool == 'cable', onTap: () => setTool('cable')),
      for (final c in _cats.skip(1)) _chip('cat-${c.key}', c.label, c.icon, on: inCat(c), small: '▸', onTap: () => setState(() => menu = c.key)),
      _chip('tool-breaker', w.tripped ? 'Breaker: TRIPPED' : (w.breaker ? 'Breaker: ON' : 'Breaker: OFF'), Icons.power_settings_new_rounded, on: w.breaker, color: w.tripped ? const Color(0xFFF87171) : const Color(0xFF4ADE80), onTap: _toggleBreaker),
      _chip('tool-hint', 'Hint', Icons.lightbulb_rounded, on: false, small: '−2 ⭐', color: const Color(0xFFFACC15), onTap: _hint),
    ]);
  }

  int get _stars => (Community.active?.points ?? 0) + (Community.active == null ? net : 0);

  @override
  Widget build(BuildContext context) {
    final tasks = w.tasks;
    final devs = w.boxes.where(w.works).length;
    final done = [true, w.count('outlet') >= 1, w.count('switch') >= 1, w.count('ceiling') >= 1, w.boxes.any((b) => b.openKo > 0), w.drilled.isNotEmpty, w.complete, w.boxes.isNotEmpty && devs == w.boxes.length, w.fullyWired];
    final next = done.indexWhere((d) => !d);
    const steps = [
      'Look round the bare frame: the studs, the plates, the joists, the door, the window and the breaker panel.',
      'Put an outlet box on a stud on each of the four walls (16 inches up).',
      'Put a switch box on a stud beside the door (48 inches up).',
      'Hang a ceiling box on a joist for the light.',
      'Break out a knockout in each box: the round tab the cable goes in through.',
      'Drill the studs the cable has to pass through (20 inches up, in the middle of the stud).',
      'Pull the cable from the breaker panel to every box (or on from one box to the next). The light is fed from the switch, through a hole in the top plate.',
      'Wire a device in every box: in the close-up connect each wire to its screw, push the device in and put the plate on.',
      'Turn the breaker on and test everything: flip the switch, plug in a TV or a phone. The house is wired.',
    ];
    return LessonScaffold(
      title: 'Wiring a house',
      color: const Color(0xFFF59E0B),
      stepText: next < 0 ? 'All done' : 'Step ${next + 1}/${steps.length}',
      onSteps: () => showConSteps(context, 'Wiring a house', steps, done),
      stage: Stage3D(
        scene: scene,
        cam: cam,
        highlight: hl,
        onPick: _pick,
        onHome: () {
          if (dollhouse) {
            cam.glideTo(target: const V3(0, 40, 0), dist: 330, yaw: 0.5, pitch: 0.85);
          } else {
            cam.glideTo(target: const V3(0, 46, 0), dist: 120, yaw: 0, pitch: 0.07);
          }
        },
        message: msg,
        messageTop: 54,
        good: good,
        stars: () => _stars,
        info: hl != 0 ? scene.info[hl] : null,
        dynamicPolys: (t) => [...wiringDynamic(w, t, _started, glow), ...deviceDynamic(w, t), ...frameGoRing(_goAt, _goT, _now), ...frameBackdrops(cam)],
        dynamicScreens: (_) => applianceScreens(w),
        onDoubleTap: _goTo,
        topRight: [
          conPill(dollhouse ? 'Inside' : 'Whole room', on: dollhouse, icon: dollhouse ? Icons.login_rounded : Icons.view_in_ar_rounded, onTap: _toggleView),
          const SizedBox(height: 8),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        _tray(),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(
            child: Text(
              '${tasks.where((t) => t.done).length}/${tasks.length} cables · outlets ${w.count('outlet')} · switch ${w.count('switch')} · light ${w.count('ceiling')} · devices $devs/${w.boxes.length} · ${w.feet.toStringAsFixed(0)} ft',
              maxLines: 2,
              style: const TextStyle(color: Colors.white70, fontSize: 11.5, height: 1.3, fontWeight: FontWeight.w700),
            ),
          ),
          const SizedBox(width: 8),
          if (glow.isNotEmpty && glow.any((id) => isStudId(id) || topSegOf(id) != null)) ...[conBigButton('Drill the lit', Icons.construction_rounded, _drillLit, color: const Color(0xFFFFD60A)), const SizedBox(width: 8)],
          conBigButton('Start over', Icons.restart_alt_rounded, _reset, color: Colors.white70),
        ]),
      ]),
    );
  }
}

/// The room with all its wiring done: every stud at the cable line drilled, the four outlets, the switch beside the door and the light, with all their cables.
/// The drywall lesson starts from this.
WiringHouse finishedWiring() {
  final w = WiringHouse();
  for (final s in kStuds) {
    if (s.atCableHeight) w.drilled.add(s.id);
  }
  for (var k = 0; k < 4; k++) {
    for (var s = 0; s < topSegCount(k); s++) {
      w.drilled.add(topSegId(k, s));
    }
  }
  int stud(int wall, double u) => kStuds.firstWhere((s) => s.wall == wall && s.u == u && s.takesBox).id;
  for (final (k, u, kind) in const [(0, 32.0, 'outlet'), (1, 96.0, 'outlet'), (2, 112.0, 'outlet'), (3, 64.0, 'outlet'), (2, 80.0, 'switch')]) {
    w.place(kind, stud(k, u));
  }
  w.place('ceiling', idJoist0 + 4);
  for (final b in w.boxes) {
    b.kos[0] = true;
    b.kos[1] = true;
  }
  for (final b in [...w.boxes]) {
    if (b.kind != 'ceiling') w.pull(b.id);
  }
  for (final b in [...w.boxes]) {
    if (b.kind == 'ceiling') w.pull(b.id);
  }
  w.mistakes = 0;
  return w;
}

/// Wires a device the right way and finishes it (pushed in, plate on), the way the close-up bench leaves it when the job is done. For the tests.
void wireDeviceRight(WiringState ws, String kind) {
  final more = electricalLesson(kind);
  final plan = !more.legacy
      ? more.solution
      : switch (kind) {
          'outlet' => {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'},
          'gfci' => {idGreen: 'ground', idSilverBottom: 'white', idBrassBottom: 'black'},
          'switch' => {idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'},
          _ => {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'},
        };
  for (final e in plan.entries) {
    tryFasten(more, ws, e.value, more.hookups.firstWhere((h) => h.id == e.key));
  }
  ws.stage = 2;
}
