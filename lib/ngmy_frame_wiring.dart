import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_frame_geo.dart';
import 'ngmy_frame_scene.dart';

// ═════════════════════════════════════════════════════════════════════════════
// WIRING A HOUSE. A bare room of four framed walls, no drywall: put the electrical boxes on the studs, drill the studs, and pull
// the cable from the breaker panel through the wood to every box. Every rule here is a real one.
// ═════════════════════════════════════════════════════════════════════════════

class FAct {
  const FAct(this.ok, this.msg, {this.show = const []});
  final bool ok;
  final String msg;

  /// Pieces of wood to light up (the ones that still need a hole).
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

  /// An outlet box is 16 inches up to its middle, a switch box 48.
  double get y => kind == 'switch' ? 48 : 16;
}

class WTask {
  const WTask(this.text, this.done);
  final String text;
  final bool done;
}

class WiringHouse {
  final Set<int> drilled = {};
  final List<FBox> boxes = [];
  int mistakes = 0;
  int _next = idBox0;

  FBox? boxById(int id) {
    for (final b in boxes) {
      if (b.id == id) return b;
    }
    return null;
  }

  void reset() {
    drilled.clear();
    boxes.clear();
    mistakes = 0;
    _next = idBox0;
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
      return const FAct(true, 'Ceiling box hung on the joist, level with the bottom of the board. The cable will come in through the side, and the light hangs from it.');
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
      return FAct(true, near ? 'Switch box nailed on, 48 inches up and right beside the door, where a hand finds it in the dark.' : 'Switch box nailed on, 48 inches up. A light switch belongs beside the door, on the side the door opens.');
    }
    return const FAct(true, 'Outlet box nailed to the side of the stud, 16 inches up to its middle (the usual height), with its front level with the wood so the drywall will fit.');
  }

  bool _nearDoor(FBox b) => b.wall == kDoor.wall && ((b.u >= kDoor.u0 - 18 && b.u <= kDoor.u0) || (b.u >= kDoor.u1 && b.u <= kDoor.u1 + 18));

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

  FAct pull(int id) {
    if (id == idPanel) return const FAct(true, 'The cable starts at the breaker panel. Tap the box it must reach.');
    final b = boxById(id);
    if (b == null) return _bad('Tap one of the blue boxes: the cable runs from the panel to it.');
    if (b.cable != null) {
      b.cable = null;
      return const FAct(true, 'Cable pulled back out of the box.');
    }
    if (b.kind == 'ceiling') return _pullCeiling(b);
    final p0 = perim(kPanelWall, kPanelU), p1 = perim(b.wall, b.u);
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
    final missing = [for (final s in route) if (!drilled.contains(s.id)) s];
    if (missing.isNotEmpty) {
      return _bad('The cable has to go through every stud on its way, and ${missing.length} still ${missing.length == 1 ? 'has' : 'have'} no hole. Drill ${missing.length == 1 ? 'the lit one' : 'the lit ones'} first.', show: [for (final s in missing.take(4)) s.id]);
    }
    final pts = <V3>[wallPt(kPanelWall, kPanelU, kPanelY0 + 1, kMidD), wallPt(kPanelWall, kPanelU, kDrillY, kMidD)];
    var wall = kPanelWall;
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
    pts.add(wallPt(b.wall, uc, kDrillY, kMidD));
    pts.add(wallPt(b.wall, uc, b.y, 2.4));
    b.cable = FCable(pts, light: false);
    final feet = b.cable!.inches / 12;
    return FAct(true, '${b.kind == 'switch' ? 'Switch' : 'Outlet'} box connected: the cable runs from the panel through ${route.length} ${route.length == 1 ? 'stud' : 'studs'}, ${feet.toStringAsFixed(1)} feet in all. Leave a loose end at the box to wire the device later.');
  }

  FAct _pullCeiling(FBox c) {
    final sw = [for (final b in boxes) if (b.kind == 'switch' && b.cable != null) b];
    if (sw.isEmpty) return _bad('The light is fed from the switch: the power goes to the switch first. Pull the cable to a switch box before this one.');
    final s = sw.first;
    final seg = math.min(topSegCount(s.wall) - 1, (s.u / 16).floor());
    final tid = topSegId(s.wall, seg);
    if (!drilled.contains(tid)) return _bad('The cable goes up inside the wall, through the top plate and into the ceiling. Drill the top plate right over the switch first.', show: [tid]);
    final uc = s.u + s.side * (kStT / 2 + 1.15);
    final uh = topSegU(s.wall, seg);
    final cx = joistX(c.joist!) + 0.75 + 2.3;
    c.cable = FCable([
      wallPt(s.wall, uc, 50.5, kMidD),
      wallPt(s.wall, uc, 88, kMidD),
      wallPt(s.wall, uh, 92, kMidD),
      wallPt(s.wall, uh, 101.95, kMidD),
      V3(cx, 101.95, 0),
      V3(cx, 99, 0),
    ], light: true);
    return FAct(true, 'Light connected: the cable goes up from the switch, through the top plate, and lies across the joists to the ceiling box, ${(c.cable!.inches / 12).toStringAsFixed(1)} feet.');
  }

  // ── The job ──

  List<WTask> get tasks => [
        for (var k = 0; k < 4; k++) WTask('An outlet on ${kWallNames[k]}, with its cable', boxes.any((b) => b.kind == 'outlet' && b.wall == k && b.cable != null)),
        WTask('A switch box beside the door, with its cable', boxes.any((b) => b.kind == 'switch' && b.cable != null && _nearDoor(b))),
        WTask('A light box in the ceiling, with its cable', boxes.any((b) => b.kind == 'ceiling' && b.cable != null)),
      ];

  bool get complete => tasks.every((t) => t.done);
  double get feet => boxes.fold(0.0, (a, b) => a + (b.cable?.inches ?? 0)) / 12;
  int count(String kind) => boxes.where((b) => b.kind == kind).length;
}

// ─── The picture ─────────────────────────────────────────────────────────────

Scene3D buildWiringScene(WiringHouse w, {String tool = 'look'}) {
  final b = MeshBuilder();
  drawFrame(b, drilled: w.drilled);
  drawWiringProps(b);
  for (final x in w.boxes) {
    if (x.kind == 'ceiling') {
      drawCeilingBox(b, id: x.id, x: joistX(x.joist!));
    } else {
      drawElectricalBox(b, id: x.id, wall: x.wall, u: x.u, y: x.y, side: x.side);
    }
  }
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

  void mark(int id, V3 c, V3 s, Color col) {
    b
      ..id = id
      ..order = 2
      ..bias = 0.8
      ..alpha = 0.85;
    b.box(c, s, col, shine: 0.2);
    b
      ..alpha = 1
      ..bias = 0;
  }

  switch (tool) {
    case 'drill':
      for (final s in kStuds) {
        if (!s.atCableHeight || w.drilled.contains(s.id)) continue;
        mark(s.id, wallPt(s.wall, s.u, kDrillY, kStD + 0.1), wallSize(s.wall, 2.6, 2.6, 0.2), const Color(0xFFFFD60A));
        pad(s.id, wallPt(s.wall, s.u, (s.y0 + s.y1) / 2, kStD / 2 + 0.6), wallSize(s.wall, 7, s.y1 - s.y0, kStD + 1.2));
      }
      for (var k = 0; k < 4; k++) {
        for (var s = 0; s < topSegCount(k); s++) {
          final id = topSegId(k, s);
          if (w.drilled.contains(id)) continue;
          mark(id, wallPt(k, topSegU(k, s), 94.5, kStD + 0.1), wallSize(k, 2.6, 2.6, 0.2), const Color(0xFFFB923C));
        }
      }
    case 'outlet' || 'switch':
      final y = tool == 'switch' ? 48.0 : 16.0;
      for (final s in kStuds) {
        if (!s.takesBox || w.boxes.any((x) => x.studId == s.id)) continue;
        mark(s.id, wallPt(s.wall, s.u, y, kStD + 0.1), wallSize(s.wall, 3.4, 4.6, 0.2), const Color(0xFF4ADE80));
        pad(s.id, wallPt(s.wall, s.u, (s.y0 + s.y1) / 2, kStD / 2 + 0.6), wallSize(s.wall, 7, s.y1 - s.y0, kStD + 1.2));
      }
    case 'ceiling':
      if (!w.boxes.any((x) => x.kind == 'ceiling')) {
        for (var i = 0; i < kJoists; i++) {
          mark(idJoist0 + i, V3(joistX(i), 95.85, 0), const V3(3.4, 0.2, 9), const Color(0xFF4ADE80));
          pad(idJoist0 + i, V3(joistX(i), 97, 0), const V3(8, 6, 40));
        }
      }
    case 'cable':
      for (final x in w.boxes) {
        if (x.cable != null) continue;
        final c = x.kind == 'ceiling' ? V3(joistX(x.joist!) + 3, 98, 0) : wallPt(x.wall, x.u + x.side * 1.9, x.y, kStD);
        pad(x.id, c, const V3(8, 9, 8));
        b
          ..id = x.id
          ..order = 2
          ..bias = 0.8;
        b.ball(c + const V3(0, 5, 0), 0.95, const Color(0xFFFFD60A), shine: 0.3, lat: 4, lon: 8);
        b.bias = 0;
      }
  }

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
    idPanel: const ObjInfo('Breaker panel', 'Every cable in the house starts here, one breaker for each circuit. The power is off while you work.', V3(-48, 59, -58), 50),
    idHeader0: const ObjInfo('Door header', 'A thick beam over the door that carries the weight of the wall above it.', V3(8, 85, 58), 70),
    idHeader0 + 1: const ObjInfo('Window header', 'A thick beam over the window, held up by the jack studs.', V3(70, 76, -2), 70),
    idHeader0 + 2: const ObjInfo('Window sill', 'The board the window sits on. The short studs under it hold it up.', V3(70, 37, -2), 70),
    for (final x in w.boxes)
      x.id: ObjInfo(x.kind == 'ceiling' ? 'Ceiling box' : (x.kind == 'switch' ? 'Switch box' : 'Outlet box'), x.kind == 'ceiling' ? 'The box the light will hang from.' : 'A plastic box nailed to the stud. The cable ends inside it, and the device goes in later.', x.kind == 'ceiling' ? V3(joistX(x.joist!), 98, 0) : wallPt(x.wall, x.u, x.y, kStD), 50),
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

const List<(String, String, IconData)> _tools = [
  ('look', 'Look', Icons.search_rounded),
  ('outlet', 'Outlet box', Icons.crop_portrait_rounded),
  ('switch', 'Switch box', Icons.toggle_on_rounded),
  ('ceiling', 'Ceiling box', Icons.circle_outlined),
  ('drill', 'Drill', Icons.construction_rounded),
  ('cable', 'Cable roll', Icons.cable_rounded),
];

class NgmyWiringHousePage extends StatefulWidget {
  const NgmyWiringHousePage({super.key});

  @override
  State<NgmyWiringHousePage> createState() => NgmyWiringHousePageState();
}

class NgmyWiringHousePageState extends State<NgmyWiringHousePage> {
  final WiringHouse w = WiringHouse();
  late final Cam3 cam = Cam3(yaw: 0, pitch: 0.07, dist: 120, target: const V3(0, 46, 0))
    ..minDist = 12
    ..maxDist = 520
    ..minPitch = 0.0
    ..maxPitch = 1.3
    ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
    ..setFree(true);
  late Scene3D scene = buildWiringScene(w);
  String tool = 'look';
  int hl = 0;
  String? msg;
  bool good = true;
  bool dollhouse = false;
  bool _doneShown = false;
  final Stopwatch _clock = Stopwatch()..start();
  final Map<int, double> _started = {};
  Set<int> glow = {};
  Timer? _msgT, _glowT;

  double get _now => _clock.elapsedMilliseconds / 1000;

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
    _msgT = Timer(const Duration(seconds: 12), () {
      if (mounted) setState(() => msg = null);
    });
  }

  void _rebuild() => scene = buildWiringScene(w, tool: tool);

  void _lightUp(List<int> ids) {
    _glowT?.cancel();
    setState(() => glow = ids.toSet());
    _glowT = Timer(const Duration(seconds: 6), () {
      if (mounted) setState(() => glow = {});
    });
  }

  static const _howTo = {
    'look': 'Look: tap any piece of the frame to learn its name and what it does. Turn the view by dragging, zoom with the buttons.',
    'outlet': 'Outlet box: tap a stud (a green mark shows where the box will sit, 16 inches up). Put one on each of the four walls.',
    'switch': 'Switch box: tap a stud, ideally right beside the door. It sits 48 inches up.',
    'ceiling': 'Ceiling box: tap a joist, one of the boards across the top. The light will hang from it.',
    'drill': 'Drill: tap a yellow mark to drill a hole through that stud, 20 inches up. The cable can only pass through studs that have a hole.',
    'cable': 'Cable roll: tap a box and the cable unrolls from the breaker panel to it, through the holes. Tap a box that has cable to pull it out again.',
  };

  @visibleForTesting
  void pickForTest(int id) => _pick(id);

  void setTool(String t) {
    setState(() {
      tool = t;
      hl = 0;
      _rebuild();
    });
    _say(_howTo[t]!);
  }

  void _pick(int id) {
    if (id == 0) {
      setState(() => hl = 0);
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
    final a = switch (tool) {
      'outlet' || 'switch' || 'ceiling' => w.place(tool, id),
      'drill' => w.drill(id),
      _ => w.pull(id),
    };
    if (a.ok) {
      conGood();
    } else {
      conBad();
    }
    if (tool == 'cable' && a.ok) {
      final bx = w.boxById(id);
      if (bx?.cable != null) _started[id] = _now;
    }
    setState(() {
      _rebuild();
      hl = a.ok ? id : 0;
    });
    _say(a.msg, ok: a.ok);
    if (a.show.isNotEmpty) _lightUp(a.show);
    if (w.complete && !_doneShown) {
      _doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _finished());
    }
  }

  void _finished() {
    if (!mounted) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('The house is wired! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('Every wall has its outlet, the switch is beside the door and the light is connected, with ${w.feet.toStringAsFixed(0)} feet of cable.\n\nMistakes: ${w.mistakes}\n\nNext the walls get their drywall: try the Hanging drywall lesson.', style: const TextStyle(color: Colors.white70, height: 1.45)),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Keep looking')), FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Great'))],
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
      _doneShown = false;
      _rebuild();
    });
    _say('Everything is taken out again. Start with the boxes.');
  }

  @override
  Widget build(BuildContext context) {
    final tasks = w.tasks;
    final done = [true, w.boxes.length >= 5 || w.count('outlet') >= 1, w.count('switch') >= 1, w.count('ceiling') >= 1, w.drilled.isNotEmpty, w.boxes.isNotEmpty && w.boxes.every((b) => b.cable != null), w.complete];
    final next = done.indexWhere((d) => !d);
    const steps = [
      'Look round the bare frame: the studs, the plates, the joists, the door, the window and the breaker panel.',
      'Put an outlet box on a stud on each of the four walls (16 inches up).',
      'Put a switch box on a stud beside the door (48 inches up).',
      'Hang a ceiling box on a joist for the light.',
      'Drill the studs the cable has to pass through (20 inches up, in the middle of the stud).',
      'Pull the cable from the breaker panel to every box. The light is fed from the switch, through a hole in the top plate.',
      'Every task is done: the house is wired.',
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
        info: hl != 0 ? scene.info[hl] : null,
        dynamicPolys: (t) => wiringDynamic(w, t, _started, glow),
        topRight: [
          conPill(dollhouse ? 'Inside' : 'Whole room', on: dollhouse, icon: dollhouse ? Icons.login_rounded : Icons.view_in_ar_rounded, onTap: _toggleView),
          const SizedBox(height: 8),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        SizedBox(
          height: 46,
          child: ListView(scrollDirection: Axis.horizontal, children: [
            for (final (k, label, icon) in _tools)
              Padding(
                padding: const EdgeInsets.only(right: 7),
                child: GestureDetector(
                  key: Key('tool-$k'),
                  onTap: () => setTool(k),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    decoration: BoxDecoration(color: tool == k ? kConAmber.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: tool == k ? kConAmber : Colors.white24, width: tool == k ? 2 : 1)),
                    child: Row(children: [Icon(icon, size: 19, color: tool == k ? kConAmber : Colors.white70), const SizedBox(width: 6), Text(label, style: TextStyle(color: tool == k ? kConAmber : Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))]),
                  ),
                ),
              ),
          ]),
        ),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(
            child: Text(
              '${tasks.where((t) => t.done).length}/${tasks.length} done · outlets ${w.count('outlet')} · switch ${w.count('switch')} · light ${w.count('ceiling')} · ${w.feet.toStringAsFixed(0)} ft of cable',
              maxLines: 2,
              style: const TextStyle(color: Colors.white70, fontSize: 11.5, height: 1.3, fontWeight: FontWeight.w700),
            ),
          ),
          const SizedBox(width: 8),
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
  for (final b in [...w.boxes]) {
    if (b.kind != 'ceiling') w.pull(b.id);
  }
  for (final b in [...w.boxes]) {
    if (b.kind == 'ceiling') w.pull(b.id);
  }
  w.mistakes = 0;
  return w;
}
