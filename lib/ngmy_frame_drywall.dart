import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_community.dart' show Community;
import 'ngmy_construction_lab.dart';
import 'ngmy_frame_geo.dart';
import 'ngmy_frame_scene.dart';
import 'ngmy_frame_wiring.dart';

// ═════════════════════════════════════════════════════════════════════════════
// HANGING DRYWALL. The same room, already wired: hang the ceiling first, then the walls; cut the narrow pieces and the holes for the
// boxes, the door and the window; screw every sheet; put corner bead on the openings; then mud, paper tape, three coats, sand, prime.
// ═════════════════════════════════════════════════════════════════════════════

/// How long a coat of mud takes to dry here (a day in real life).
const double kDrySecs = 4;

const double kSheetT = 0.5;
const double _wallSheetH = 95.5;
const int idSlot0 = 5000, idCut0 = 6000, idBead0 = 6500, idSurf0 = 6700;

const List<String> kSurfaceNames = ['the ceiling', 'the panel wall', 'the window wall', 'the door wall', 'the bare wall'];

class DSlot {
  const DSlot(this.id, this.surface, this.a0, this.a1, this.b0, this.b1);
  final int id, surface;

  /// Wall: along the wall (u0 to u1). Ceiling: across the room (x0 to x1).
  final double a0, a1;

  /// Ceiling only: the length of the sheet along the room (z0 to z1).
  final double b0, b1;
  bool get ceiling => surface == 0;
  int get wall => surface - 1;
  double get width => a1 - a0;
  double get length => ceiling ? b1 - b0 : _wallSheetH;

  /// A sheet is 4 by 8 feet; a place that is narrower or shorter needs a cut piece.
  bool get needsCut => width < 47.9 || (ceiling && length < 95.9);
}

List<DSlot> _buildDSlots() {
  final out = <DSlot>[];
  for (var c = 0; c < 3; c++) {
    out.add(DSlot(idSlot0 + out.length, 0, -72 + 48.0 * c, -72 + 48.0 * c + 48, -60, 36));
    out.add(DSlot(idSlot0 + out.length, 0, -72 + 48.0 * c, -72 + 48.0 * c + 48, 36, 60));
  }
  for (var k = 0; k < 4; k++) {
    for (var u = 0.0; u < wallLen(k) - 0.1; u += 48) {
      out.add(DSlot(idSlot0 + out.length, k + 1, u, math.min(wallLen(k), u + 48), 0, _wallSheetH));
    }
  }
  return out;
}

final List<DSlot> kDSlots = _buildDSlots();
DSlot? dSlotById(int id) {
  final i = id - idSlot0;
  return i >= 0 && i < kDSlots.length ? kDSlots[i] : null;
}

/// A hole to be cut in a hung sheet: for an electrical box, or a piece of the door or the window.
class DCut {
  const DCut(this.id, this.slot, this.name, this.opening, this.u0, this.u1, this.y0, this.y1);
  final int id, slot;
  final String name;

  /// -1 for a box, otherwise the index in [kOpenings].
  final int opening;
  final double u0, u1, y0, y1;
}

/// The boxes of the finished wiring (see [finishedWiring]): where the holes in the drywall go.
List<DCut> _buildDCuts(WiringHouse wired) {
  final out = <DCut>[];
  for (final b in wired.boxes) {
    if (b.kind == 'ceiling') {
      final cx = joistX(b.joist!) + 3.05;
      final s = kDSlots.firstWhere((s) => s.ceiling && cx >= s.a0 && cx < s.a1 && 0 >= s.b0 && 0 < s.b1);
      out.add(DCut(idCut0 + out.length, s.id, 'Ceiling light box', -1, cx - 2.4, cx + 2.4, -2.4, 2.4));
    } else {
      final uc = b.u + b.side * (kStT / 2 + 1.15);
      final s = kDSlots.firstWhere((s) => s.wall == b.wall && !s.ceiling && uc >= s.a0 && uc < s.a1);
      out.add(DCut(idCut0 + out.length, s.id, b.kind == 'switch' ? 'Switch box' : 'Outlet box', -1, uc - 1.4, uc + 1.4, b.y - 2.4, b.y + 2.4));
    }
  }
  for (var i = 0; i < kOpenings.length; i++) {
    final o = kOpenings[i];
    for (final s in kDSlots.where((s) => !s.ceiling && s.wall == o.wall)) {
      final a = math.max(s.a0, o.u0), e = math.min(s.a1, o.u1);
      if (e - a > 0.5) out.add(DCut(idCut0 + out.length, s.id, o.name == 'door' ? 'Door opening' : 'Window opening', i, a, e, o.sill, o.top));
    }
  }
  return out;
}

final List<DCut> kDCuts = _buildDCuts(finishedWiring());

class DSheetState {
  bool placed = false, cut = false, screwed = false;
  final Set<int> cutDone = {};
}

class DSurfState {
  /// 0 bare, 1 bed coat of mud (the tape goes in now), 2 taped, 3 second coat, 4 third coat, 5 sanded, 6 primed.
  int stage = 0;
  double wetUntil = 0;
}

class DrywallHouse {
  DrywallHouse() : wiring = finishedWiring();

  final WiringHouse wiring;
  final Map<int, DSheetState> sheets = {for (final s in kDSlots) s.id: DSheetState()};
  final List<DSurfState> surf = [for (var i = 0; i < 5; i++) DSurfState()];
  final Set<int> beads = {};
  int mistakes = 0;

  void reset() {
    for (final s in sheets.values) {
      s
        ..placed = false
        ..cut = false
        ..screwed = false
        ..cutDone.clear();
    }
    for (final s in surf) {
      s
        ..stage = 0
        ..wetUntil = 0;
    }
    beads.clear();
    mistakes = 0;
  }

  FAct _bad(String m) {
    mistakes++;
    return FAct(false, m);
  }

  List<DSlot> slotsOf(int surface) => [for (final s in kDSlots) if (s.surface == surface) s];
  bool get ceilingUp => slotsOf(0).every((s) => sheets[s.id]!.placed);

  // ── Hanging ──

  FAct hang(int id) {
    final s = dSlotById(id);
    if (s == null) return _bad('A sheet goes where the green mark is: tap one of those places.');
    final st = sheets[id]!;
    if (st.placed) return _bad('There is a sheet up here already.');
    if (!s.ceiling && !ceilingUp) return _bad('The ceiling goes up first. The wall sheets then fit tight underneath it and hold its edges up.');
    if (s.needsCut && !st.cut) return _bad('This place is only ${s.width < 47.9 ? '${s.width.round()} inches wide' : '${s.length.round()} inches long'}. A whole sheet is too big: measure it and cut it to size first (the Cutter).');
    st.placed = true;
    return FAct(true, s.ceiling ? 'Sheet lifted tight against the joists. Screws next, so it cannot sag.' : 'Sheet stood up against the studs, snug under the ceiling and a hair off the floor. Screws next.');
  }

  FAct cut(int id) {
    final s = dSlotById(id);
    if (s == null) return _bad('The cutter is for a sheet that has to be made smaller: tap an orange place.');
    final st = sheets[id]!;
    if (st.placed) return _bad('The sheet is already up. Cutting is done on the floor, before it goes up.');
    if (!s.needsCut) return _bad('A whole 4 by 8 sheet fits here. No cut is needed.');
    if (st.cut) return _bad('This sheet is already cut to size.');
    st.cut = true;
    return FAct(true, 'Measured, then scored the face paper with the knife against the T-square, snapped the sheet over the edge and cut the back paper. Cut to ${s.width < 47.9 ? '${s.width.round()}' : '${s.length.round()}'} inches. Now hang it.');
  }

  FAct screw(int id) {
    final s = dSlotById(id);
    if (s == null) return _bad('Screws go into a hung sheet: tap one.');
    final st = sheets[id]!;
    if (!st.placed) return _bad('Hang the sheet first, then screw it.');
    if (st.screwed) return _bad('This sheet is screwed already.');
    st.screwed = true;
    return FAct(true, s.ceiling ? 'Screwed to every joist, 12 inches apart, each set just under the paper without breaking it.' : 'Screwed to every stud, 16 inches apart and 3/8 inch from the edges, each head just under the paper without breaking it.');
  }

  FAct saw(int id) {
    final c = kDCuts.where((c) => c.id == id).firstOrNull;
    if (c == null) return _bad('The saw is for the holes: tap a red mark.');
    final st = sheets[c.slot]!;
    if (!st.placed) return _bad('Hang the sheet first. The holes are cut after it is up.');
    if (st.cutDone.contains(id)) return _bad('This hole is already cut.');
    st.cutDone.add(id);
    return FAct(true, c.opening >= 0 ? '${c.name}: cut along the frame with the drywall saw, so the sheet ends exactly on the wood.' : '${c.name}: the hole is cut just big enough for the box. The box now shows through, and the device will fit in later.');
  }

  bool openingCut(int i) => [for (final c in kDCuts) if (c.opening == i) c].every((c) => sheets[c.slot]!.cutDone.contains(c.id));

  FAct bead(int i) {
    if (i < 0 || i >= kOpenings.length) return _bad('Corner bead goes on the corners of the door and the window.');
    if (beads.contains(i)) return _bad('This opening has its corner bead.');
    if (!openingCut(i)) return _bad('Cut the opening in both sheets first.');
    beads.add(i);
    return const FAct(true, 'Metal corner bead nailed round the opening. It protects the sharp corner and gives the mud a straight edge to finish against.');
  }

  // ── Finishing ──

  String? _notReady(int s) {
    final miss = <String>[];
    for (final sl in slotsOf(s)) {
      final st = sheets[sl.id]!;
      if (!st.placed) {
        miss.add('a sheet is missing');
        break;
      }
      if (!st.screwed) {
        miss.add('a sheet has no screws');
        break;
      }
    }
    if (miss.isEmpty) {
      for (final c in kDCuts) {
        if (dSlotById(c.slot)!.surface == s && !sheets[c.slot]!.cutDone.contains(c.id)) {
          miss.add('a hole is not cut');
          break;
        }
      }
    }
    if (miss.isEmpty && s == kWindow.wall + 1 && !beads.contains(1)) miss.add('the window has no corner bead');
    if (miss.isEmpty && s == kDoor.wall + 1 && !beads.contains(0)) miss.add('the door has no corner bead');
    return miss.isEmpty ? null : 'Not yet: ${kSurfaceNames[s]} is not ready, ${miss.first}.';
  }

  bool dry(int s, double now) => now >= surf[s].wetUntil;

  FAct mud(int s, double now) {
    final n = _notReady(s);
    if (n != null) return _bad(n);
    final st = surf[s];
    switch (st.stage) {
      case 0:
        st
          ..stage = 1
          ..wetUntil = now + kDrySecs;
        return FAct(true, 'Bed coat: mud pushed into every joint, every corner and over every screw head. Press the paper tape into it right now, while it is wet.');
      case 1:
        return _bad('The tape goes into this wet mud now. Use the Tape.');
      case 2:
      case 3:
        if (!dry(s, now)) return _bad('Still wet. Mud takes a day to dry in real life; here wait ${(st.wetUntil - now).ceil()} more seconds. A coat put on wet mud cracks.');
        st
          ..stage += 1
          ..wetUntil = now + kDrySecs;
        return FAct(true, st.stage == 3 ? 'Second coat: wider than the first, to hide the tape and its edges. Let it dry.' : 'Third coat: the widest and thinnest, feathered out to nothing at the edges. Let it dry, then sand.');
      case 4:
        return _bad('That is the third coat. Let it dry, then sand with the Sander.');
      default:
        return _bad('The mud is finished here. ${st.stage == 5 ? 'Prime it with the Roller.' : 'This is done.'}');
    }
  }

  FAct tape(int s, double now) {
    final n = _notReady(s);
    if (n != null) return _bad(n);
    final st = surf[s];
    if (st.stage == 0) return _bad('Mud first. The paper tape is pressed into a bed of wet mud.');
    if (st.stage != 1) return _bad('The tape is on already.');
    st
      ..stage = 2
      ..wetUntil = now + kDrySecs;
    return const FAct(true, 'Paper tape pressed into the wet mud over every seam and in every corner, and the extra mud scraped off flat. Let it dry.');
  }

  FAct sand(int s, double now) {
    final st = surf[s];
    if (st.stage < 4) return _bad(st.stage == 0 ? 'Nothing to sand yet.' : 'Sand only after the third coat is dry, not before.');
    if (st.stage > 4) return _bad('It is sanded already.');
    if (!dry(s, now)) return _bad('Still wet. Sanding wet mud only smears it: wait ${(st.wetUntil - now).ceil()} more seconds.');
    st.stage = 5;
    return const FAct(true, 'Sanded smooth with the pole sander until you cannot feel the joints. Wipe the dust off, then prime.');
  }

  FAct paint(int s) {
    final st = surf[s];
    if (st.stage < 5) return _bad(st.stage == 0 ? 'Nothing to paint yet: hang the sheets and finish the joints first.' : 'Sand first. Primer goes on only over smooth, dry mud.');
    if (st.stage > 5) return _bad('This surface is primed already.');
    st.stage = 6;
    return FAct(true, '${kSurfaceNames[s][0].toUpperCase()}${kSurfaceNames[s].substring(1)} primed with the roller: the paper and the mud now look the same, and the joints have disappeared.');
  }


  /// What has to be done first when a tool has nothing to work on yet ('' when it has something to do).
  String whyNot(String tool, double now) {
    bool any(Iterable<bool> x) => x.any((e) => e);
    switch (tool) {
      case 'sheet':
        return any([for (final s in kDSlots) !sheets[s.id]!.placed && (!s.needsCut || sheets[s.id]!.cut)]) ? '' : (allHung ? ' Every sheet is up.' : ' The pieces that are left are narrow: cut them to size with the Cutter first.');
      case 'cut':
        return any([for (final s in kDSlots) s.needsCut && !sheets[s.id]!.cut && !sheets[s.id]!.placed]) ? '' : ' Nothing needs cutting right now.';
      case 'screw':
        return any([for (final s in kDSlots) sheets[s.id]!.placed && !sheets[s.id]!.screwed]) ? '' : ' Hang a sheet first: the screws go into a sheet that is up.';
      case 'saw':
        return any([for (final c in kDCuts) sheets[c.slot]!.placed && !sheets[c.slot]!.cutDone.contains(c.id)]) ? '' : ' Hang the sheets over the boxes, the door and the window first: the holes are cut in a sheet that is up.';
      case 'bead':
        return any([for (var i = 0; i < kOpenings.length; i++) !beads.contains(i) && openingCut(i)]) ? '' : ' Cut the door and window openings with the Saw first.';
      case 'mud':
        return any([for (var s = 0; s < 5; s++) (surf[s].stage == 0 && _notReady(s) == null) || ((surf[s].stage == 2 || surf[s].stage == 3) && dry(s, now))]) ? '' : ' Nothing is ready for mud yet: on a wall or the ceiling every sheet needs to be up and screwed, the holes cut and the door and window beaded. After a coat, wait for it to dry.';
      case 'tape':
        return any([for (final s in surf) s.stage == 1]) ? '' : ' Tape goes into wet mud: put mud on a surface first.';
      case 'sand':
        return any([for (var s = 0; s < 5; s++) surf[s].stage == 4 && dry(s, now)]) ? '' : ' Sand only after the third coat has dried.';
      default:
        return any([for (final s in surf) s.stage == 5]) ? '' : ' Prime after the mud is sanded.';
    }
  }

  /// Every job of the lesson, finished or not (a star is paid for each one done without a hint).
  Map<String, bool> get jobs => {
        'ceiling': ceilingUp,
        'walls': allHung,
        'screws': allScrewed,
        'holes': allCut,
        'beads': beads.length == kOpenings.length,
        for (var i = 0; i < 5; i++) 'surface$i': surf[i].stage == 6,
      };

  /// What to do next, and what to light up for it.
  WHint hint(double now) {
    for (final ceil in [true, false]) {
      for (final s in kDSlots.where((s) => s.ceiling == ceil)) {
        if (sheets[s.id]!.placed) continue;
        if (s.needsCut && !sheets[s.id]!.cut) return WHint('This piece is narrower than a sheet: pick the Cutter and tap the lit place to cut it to size.', ids: [s.id], tool: 'cut');
        return WHint(ceil ? 'The ceiling goes first: pick Drywall sheet and tap the lit place.' : 'Now the walls: pick Drywall sheet and tap the lit place.', ids: [s.id], tool: 'sheet');
      }
    }
    for (final s in kDSlots) {
      if (!sheets[s.id]!.screwed) return WHint('Screw the sheet to the studs: pick the Screw gun and tap the lit sheet.', ids: [s.id], tool: 'screw');
    }
    for (final c in kDCuts) {
      if (!sheets[c.slot]!.cutDone.contains(c.id)) return WHint('Cut the hole for the ${c.name.toLowerCase()}: pick the Saw and tap the lit place.', ids: [c.id], tool: 'saw');
    }
    for (var i = 0; i < kOpenings.length; i++) {
      if (!beads.contains(i)) return WHint('Put corner bead on the ${kOpenings[i].name}: pick Corner bead and tap the lit opening.', ids: [idBead0 + i], tool: 'bead');
    }
    for (var s = 0; s < 5; s++) {
      final st = surf[s];
      final id = idSurf0 + s;
      switch (st.stage) {
        case 0:
          return WHint('Mud first: pick Mud and tap the lit surface for the bed coat.', ids: [id], tool: 'mud');
        case 1:
          return WHint('Press the tape into the wet mud now: pick Tape and tap the lit surface.', ids: [id], tool: 'tape');
        case 2:
        case 3:
          return dry(s, now) ? WHint('Next coat of mud: pick Mud and tap the lit surface.', ids: [id], tool: 'mud') : WHint('The mud is still wet: wait ${(st.wetUntil - now).ceil()} seconds, then put on the next coat.', ids: [id]);
        case 4:
          return dry(s, now) ? WHint('Sand it smooth: pick the Sander and tap the lit surface.', ids: [id], tool: 'sand') : WHint('The last coat is still wet: wait ${(st.wetUntil - now).ceil()} seconds, then sand.', ids: [id]);
        case 5:
          return WHint('Prime it: pick the Roller and tap the lit surface.', ids: [id], tool: 'paint');
      }
    }
    return const WHint('The room is finished. Well done.');
  }
  bool get complete => surf.every((s) => s.stage == 6);
  int get hung => sheets.values.where((s) => s.placed).length;
  int get screwedCount => sheets.values.where((s) => s.screwed).length;
  int get cutsDone => sheets.values.fold(0, (a, s) => a + s.cutDone.length);
  bool get allHung => hung == kDSlots.length;
  bool get allScrewed => screwedCount == kDSlots.length;
  bool get allCut => cutsDone == kDCuts.length;
}

// ─── The picture ─────────────────────────────────────────────────────────────

Color _paper(int seed) {
  final v = (seed * 29 % 7) - 3;
  return Color.fromARGB(255, 0xE9 + v, 0xE4 + v, 0xD6 + v);
}

Color _surfaceColor(int stage, int seed) => switch (stage) {
      6 => const Color(0xFFF3F1EA),
      5 => const Color(0xFFEAE6DA),
      _ => _paper(seed),
    };

Color _mud(int stage, bool wet) => stage >= 5 ? const Color(0xFFE6E2D5) : (wet ? const Color(0xFFB9B29D) : const Color(0xFFDCD6C5));

const List<double> _layerWidth = [0, 5.5, 4.6, 10, 14, 14, 0];

Scene3D buildDrywallScene(DrywallHouse d, {String tool = 'look', double now = 0}) {
  final b = MeshBuilder();
  drawFrame(b, drilled: d.wiring.drilled);
  for (final x in d.wiring.boxes) {
    if (x.kind == 'ceiling') {
      drawCeilingBox(b, id: x.id, x: joistX(x.joist!), order: 1);
    } else {
      drawElectricalBox(b, id: x.id, wall: x.wall, u: x.u, y: x.y, side: x.side);
    }
  }
  // The cables, already pulled.
  b
    ..id = 0
    ..order = 1
    ..bias = 0.6;
  for (final x in d.wiring.boxes) {
    final c = x.cable;
    if (c != null) b.tube(c.path, 0.36, c.light ? kNmWhite : kNmYellow, shine: 0.35, sides: 6, joints: true);
  }
  b.bias = 0;
  _drawEquipment(b);

  // Studs, screw rows.
  bool inCut(DSlot s, double u, double y) {
    for (final c in kDCuts) {
      if (c.slot == s.id && c.opening >= 0 && d.sheets[s.id]!.cutDone.contains(c.id) && u > c.u0 - 0.5 && u < c.u1 + 0.5 && y > c.y0 - 0.5 && y < c.y1 + 0.5) return true;
    }
    return false;
  }

  void rectWall(int k, double u0, double u1, double y0, double y1, double dep, double thick, Color col, {double shine = 0}) {
    if (u1 - u0 < 0.05 || y1 - y0 < 0.05) return;
    b.box(wallPt(k, (u0 + u1) / 2, (y0 + y1) / 2, dep), wallSize(k, u1 - u0, y1 - y0, thick), col, shine: shine);
  }

  final dep = kStD + kSheetT / 2;
  for (final s in kDSlots) {
    final st = d.sheets[s.id]!;
    final stage = d.surf[s.surface].stage;
    if (!st.placed) continue;
    final col = _surfaceColor(stage, s.id);
    if (s.ceiling) continue;
    b
      ..order = 0
      ..id = s.id;
    b.startGroup();
    // The sheet, with a hole in it where a door or window opening has been cut.
    final cuts = [for (final c in kDCuts) if (c.slot == s.id && c.opening >= 0 && st.cutDone.contains(c.id)) c];
    if (cuts.isEmpty) {
      rectWall(s.wall, s.a0 + 0.1, s.a1 - 0.1, 0, _wallSheetH, dep, kSheetT, col);
    } else {
      final c = cuts.first;
      final u0 = s.a0 + 0.1, u1 = s.a1 - 0.1;
      rectWall(s.wall, u0, c.u0, 0, _wallSheetH, dep, kSheetT, col);
      rectWall(s.wall, c.u1, u1, 0, _wallSheetH, dep, kSheetT, col);
      rectWall(s.wall, c.u0, c.u1, c.y1, _wallSheetH, dep, kSheetT, col);
      rectWall(s.wall, c.u0, c.u1, 0, c.y0, dep, kSheetT, col);
    }
    b.endGroup();
  }
  // Screw heads, and the mud over them.
  for (final s in kDSlots) {
    final st = d.sheets[s.id]!;
    final stage = d.surf[s.surface].stage;
    if (!st.screwed || stage >= 6) continue;
    final wet = !d.dry(s.surface, now);
    final dot = stage == 0 ? const Color(0xFF8D8776) : _mud(stage, wet);
    final r = stage == 0 ? 0.42 : 1.3;
    b
      ..id = s.id
      ..bias = 0.5;
    if (s.ceiling) {
      continue;
    } else {
      b.order = 0;
      b.startGroup();
      for (final stud in kStuds.where((q) => q.wall == s.wall && q.u > s.a0 + 0.9 && q.u < s.a1 - 0.9)) {
        for (var y = 8.0; y < 92; y += 16) {
          if (y < stud.y0 || y > stud.y1 + 6 || inCut(s, stud.u, y)) continue;
          final n = wallIn(s.wall);
          final al = wallAlong(s.wall);
          final c = wallPt(s.wall, stud.u, y, kStD + kSheetT + 0.03);
          final up = const V3(0, 1, 0);
          b.quad(c - al * r - up * r, c + al * r - up * r, c + al * r + up * r, c - al * r + up * r, dot, normal: n);
        }
      }
      b.endGroup();
    }
  }
  b.bias = 0;
  // The holes cut for the boxes: the box shows through, with a dark edge.
  for (final c in kDCuts) {
    final st = d.sheets[c.slot]!;
    if (!st.cutDone.contains(c.id) || c.opening >= 0) continue;
    final s = dSlotById(c.slot)!;
    b
      ..id = c.id
      ..order = 2;
    if (s.ceiling) {
      continue;
    } else {
      final uc = (c.u0 + c.u1) / 2, yc = (c.y0 + c.y1) / 2;
      b.box(wallPt(s.wall, uc, yc, kStD + kSheetT + 0.02), wallSize(s.wall, c.u1 - c.u0 + 0.3, c.y1 - c.y0, 0.06), const Color(0xFF111827));
      b.box(wallPt(s.wall, uc, yc, kStD + kSheetT + 0.06), wallSize(s.wall, c.u1 - c.u0 - 0.4, c.y1 - c.y0 - 0.9, 0.06), kBoxBlue, shine: 0.2);
    }
  }
  // Corner bead round the openings.
  for (final i in d.beads) {
    final o = kOpenings[i];
    b
      ..id = idBead0 + i
      ..order = 2;
    final bz = kStD + kSheetT + 0.12;
    void bar(double u0, double u1, double y0, double y1) => b.box(wallPt(o.wall, (u0 + u1) / 2, (y0 + y1) / 2, bz), wallSize(o.wall, u1 - u0, y1 - y0, 0.28), const Color(0xFFC3CAD3), shine: 0.8);
    bar(o.u0 - 0.9, o.u0 + 0.3, o.sill, o.top + 0.6);
    bar(o.u1 - 0.3, o.u1 + 0.9, o.sill, o.top + 0.6);
    bar(o.u0 - 0.9, o.u1 + 0.9, o.top - 0.3, o.top + 0.9);
    if (o.sill > 0) bar(o.u0 - 0.9, o.u1 + 0.9, o.sill - 0.9, o.sill + 0.3);
  }
  // The finishing of the joints: mud, tape, coats, sanding.
  for (var si = 0; si < 5; si++) {
    final stage = d.surf[si].stage;
    if (si == 0 || stage < 1 || stage > 5) continue;
    final wet = !d.dry(si, now);
    b
      ..id = idSurf0 + si
      ..order = 0
      ..bias = 0.4;
    if (si > 0) b.startGroup();
    // Layers: bed coat, tape, second coat, third coat (the sanded surface keeps the widest one, in the colour of the paper).
    void paintStrips(Color Function(int layer) colorOf, void Function(double w, double off, Color c) strip) {
      var layer = 0;
      for (final w in [_layerWidth[1], if (stage >= 2) _layerWidth[2], if (stage >= 3) _layerWidth[3], if (stage >= 4) _layerWidth[4]]) {
        strip(w, 0.02 + layer * 0.03, colorOf(layer));
        layer++;
      }
    }

    Color colorOf(int layer) => layer == 1 ? const Color(0xFFF4F1E8) : _mud(stage, wet && layer == (stage >= 4 ? 3 : stage - 1));
    {
      final k = si - 1;
      final len = wallLen(k);
      paintStrips(colorOf, (w, off, c) {
        final depth = kStD + kSheetT + off;
        for (var u = 48.0; u < len - 1; u += 48) {
          rectWall(k, u - w / 2, u + w / 2, 0, _wallSheetH, depth, 0.08, c);
        }
        rectWall(k, 0.4, 0.4 + w * 0.5, 0, _wallSheetH, depth, 0.08, c);
        rectWall(k, len - 0.4 - w * 0.5, len - 0.4, 0, _wallSheetH, depth, 0.08, c);
        rectWall(k, 0, len, _wallSheetH - w * 0.5, _wallSheetH, depth, 0.08, c);
      });
    }
    if (si > 0) b.endGroup();
  }
  b
    ..bias = 0
    ..order = 2;

  // What can be tapped with the tool in hand.
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
  void dot(int id, V3 c, Color col, {double r = 3}) {
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

  void wash(int id, DSlot s, Color col, {bool padToo = true}) {
    b
      ..id = id
      ..order = 3
      ..bias = 0.8
      ..alpha = 0.22;
    if (s.ceiling) {
      b.box(V3((s.a0 + s.a1) / 2, 95.2, (s.b0 + s.b1) / 2), V3(s.width - 1, 0.2, s.length - 1), col);
      b
        ..alpha = 1
        ..bias = 0
        ..order = 2;
      if (padToo) pad(id, V3((s.a0 + s.a1) / 2, 94.5, (s.b0 + s.b1) / 2), V3(s.width, 2, s.length));
      dot(id, V3((s.a0 + s.a1) / 2, 94.2, (s.b0 + s.b1) / 2), col);
    } else {
      b.box(wallPt(s.wall, (s.a0 + s.a1) / 2, 48, kStD + 0.9), wallSize(s.wall, s.width - 1, 94, 0.2), col);
      b
        ..alpha = 1
        ..bias = 0
        ..order = 2;
      if (padToo) pad(id, wallPt(s.wall, (s.a0 + s.a1) / 2, 48, kStD + 1.2), wallSize(s.wall, s.width, 94, 1.0));
      dot(id, wallPt(s.wall, (s.a0 + s.a1) / 2, 48, kStD + 2.2), col);
    }
  }

  switch (tool) {
    case 'sheet':
      for (final s in kDSlots) {
        if (!d.sheets[s.id]!.placed && (!s.needsCut || d.sheets[s.id]!.cut)) wash(s.id, s, const Color(0xFF4ADE80));
      }
    case 'cut':
      for (final s in kDSlots) {
        if (s.needsCut && !d.sheets[s.id]!.cut && !d.sheets[s.id]!.placed) wash(s.id, s, const Color(0xFFFB923C));
      }
    case 'screw':
      for (final s in kDSlots) {
        final st = d.sheets[s.id]!;
        if (st.placed && !st.screwed) wash(s.id, s, const Color(0xFFFACC15));
      }
    case 'saw':
      for (final c in kDCuts) {
        final st = d.sheets[c.slot]!;
        if (!st.placed || st.cutDone.contains(c.id)) continue;
        final s = dSlotById(c.slot)!;
        b
          ..id = c.id
          ..order = 3
          ..bias = 0.9
          ..alpha = 0.45;
        if (s.ceiling) {
          b.box(V3((c.u0 + c.u1) / 2, 95.1, 0), V3(c.u1 - c.u0 + 2, 0.2, c.y1 - c.y0 + 2), const Color(0xFFEF4444));
        } else {
          b.box(wallPt(s.wall, (c.u0 + c.u1) / 2, (c.y0 + c.y1) / 2, kStD + kSheetT + 0.15), wallSize(s.wall, c.u1 - c.u0 + (c.opening >= 0 ? 0 : 2), c.y1 - c.y0 + (c.opening >= 0 ? 0 : 2), 0.12), const Color(0xFFEF4444));
        }
        b
          ..alpha = 1
          ..bias = 0
          ..order = 2;
        if (s.ceiling) {
          pad(c.id, V3((c.u0 + c.u1) / 2, 94.5, 0), V3(c.u1 - c.u0 + 6, 2, c.y1 - c.y0 + 6));
          dot(c.id, V3((c.u0 + c.u1) / 2, 94.5, 0), const Color(0xFFEF4444), r: 2);
        } else {
          pad(c.id, wallPt(s.wall, (c.u0 + c.u1) / 2, (c.y0 + c.y1) / 2, kStD + kSheetT + 0.4), wallSize(s.wall, math.max(8, c.u1 - c.u0), math.max(10, c.y1 - c.y0), 0.8));
          dot(c.id, wallPt(s.wall, (c.u0 + c.u1) / 2, (c.y0 + c.y1) / 2, kStD + kSheetT + 1.8), const Color(0xFFEF4444), r: c.opening >= 0 ? 3.5 : 1.8);
        }
      }
    case 'bead':
      for (var i = 0; i < kOpenings.length; i++) {
        if (d.beads.contains(i) || !d.openingCut(i)) continue;
        final o = kOpenings[i];
        b
          ..id = idBead0 + i
          ..order = 3
          ..bias = 0.9
          ..alpha = 0.4;
        b.box(wallPt(o.wall, (o.u0 + o.u1) / 2, (o.sill + o.top) / 2, kStD + kSheetT + 0.15), wallSize(o.wall, o.u1 - o.u0 + 4, o.top - o.sill + 4, 0.1), const Color(0xFFC3CAD3));
        b
          ..alpha = 1
          ..bias = 0
          ..order = 2;
        pad(idBead0 + i, wallPt(o.wall, (o.u0 + o.u1) / 2, (o.sill + o.top) / 2, kStD + kSheetT + 0.4), wallSize(o.wall, o.u1 - o.u0 + 8, o.top - o.sill + 8, 0.8));
        dot(idBead0 + i, wallPt(o.wall, (o.u0 + o.u1) / 2, (o.sill + o.top) / 2, kStD + kSheetT + 2.5), const Color(0xFFC3CAD3), r: 3.5);
      }
    case 'mud' || 'tape' || 'sand' || 'paint':
      final want = switch (tool) {
        'mud' => const {0, 2, 3},
        'tape' => const {1},
        'sand' => const {4},
        _ => const {5},
      };
      for (var si = 0; si < 5; si++) {
        if (!want.contains(d.surf[si].stage)) continue;
        if (si == 0) {
          b
            ..id = idSurf0
            ..order = 3
            ..bias = 0.8
            ..alpha = 0.22;
          b.box(const V3(0, 95.1, 0), const V3(142, 0.2, 118), const Color(0xFF38BDF8));
          b
            ..alpha = 1
            ..bias = 0
            ..order = 2;
          pad(idSurf0, const V3(0, 94.4, 0), const V3(144, 2, 120));
          dot(idSurf0, const V3(0, 93, 0), const Color(0xFF38BDF8), r: 4);
        } else {
          final k = si - 1;
          b
            ..id = idSurf0 + si
            ..order = 3
            ..bias = 0.8
            ..alpha = 0.22;
          b.box(wallPt(k, wallLen(k) / 2, 48, kStD + 0.9), wallSize(k, wallLen(k) - 1, 94, 0.2), const Color(0xFF38BDF8));
          b
            ..alpha = 1
            ..bias = 0
            ..order = 2;
          pad(idSurf0 + si, wallPt(k, wallLen(k) / 2, 48, kStD + 1.2), wallSize(k, wallLen(k), 94, 1.0));
          dot(idSurf0 + si, wallPt(k, wallLen(k) / 2, 70, kStD + 3.5), const Color(0xFF38BDF8), r: 4);
        }
      }
  }

  final info = <int, ObjInfo>{
    for (final s in kDSlots) s.id: ObjInfo(s.ceiling ? 'Ceiling sheet' : 'Wall sheet', 'A sheet of 1/2 inch drywall: gypsum between two layers of paper. A whole sheet is 4 by 8 feet.', s.ceiling ? V3((s.a0 + s.a1) / 2, 96, (s.b0 + s.b1) / 2) : wallPt(s.wall, (s.a0 + s.a1) / 2, 48, kStD), 90),
    for (final c in kDCuts) c.id: ObjInfo(c.name, 'A hole to cut in the sheet.', c.opening >= 0 ? wallPt(kOpenings[c.opening].wall, (c.u0 + c.u1) / 2, 40, kStD) : V3((c.u0 + c.u1) / 2, 60, 0), 90),
    for (var i = 0; i < kOpenings.length; i++) idBead0 + i: ObjInfo('Corner bead', 'Metal angle nailed on an outside corner (the corner of the door or window opening).', wallPt(kOpenings[i].wall, (kOpenings[i].u0 + kOpenings[i].u1) / 2, 40, kStD), 100),
    for (var s = 0; s < 5; s++) idSurf0 + s: ObjInfo(kSurfaceNames[s][0].toUpperCase() + kSurfaceNames[s].substring(1), 'All the joints and screw heads here get mud, tape, three coats, sanding and primer.', s == 0 ? const V3(0, 90, 0) : wallPt(s - 1, wallLen(s - 1) / 2, 48, kStD), 110),
    for (final e in kPropInfo.entries) e.key: ObjInfo(e.value.$1, e.value.$2, e.value.$3, 60),
    ...buildWiringScene(d.wiring).info,
  };
  return Scene3D(b.polys, info: info, shell: (-72, 72, -60, 60), closedShell: true);
}

/// The drywall tools and materials, laid out on the floor: a stack of sheets, a bucket of mud, rolls of paper tape, a taping knife, a screw gun,
/// a T-square, a sanding pole, corner bead and a paint tray with a roller.
void _drawEquipment(MeshBuilder b) {
  b
    ..order = 2
    ..id = 0;
  b.id = idPropStack;
  // The stack: twelve sheets, face paper on top, the long edge showing the white gypsum.
  b.box(const V3(-40, 3, 4), const V3(48, 6, 96), const Color(0xFFE2DDCE), shine: 0.02, split: 2);
  for (var i = 0; i < 6; i++) {
    b.box(V3(-40, 0.5 + i, 52.1), const V3(47.6, 0.12, 0.1), const Color(0xFFB9B3A0));
  }
  b.box(const V3(-40, 6.05, 4), const V3(48, 0.1, 96), const Color(0xFFEAE6DA));
  b.id = idPropMud;
  // The bucket of joint compound, with its lid off and a taping knife across it.
  b.cyl(const V3(40, 0, 36), const V3(40, 14.5, 36), 6.6, const Color(0xFFF1F1EC), shine: 0.2, sides: 16);
  b.cyl(const V3(40, 7, 36), const V3(40, 11, 36), 6.7, const Color(0xFF2F6FD6), shine: 0.2, sides: 16);
  b.cyl(const V3(40, 14.4, 36), const V3(40, 14.6, 36), 5.8, const Color(0xFFDCD6C5), shine: 0.1, sides: 16);
  b.box(const V3(40, 15, 36), const V3(13, 0.12, 4.6), const Color(0xFFC9CED6), shine: 0.9);
  b.box(const V3(46.5, 15.5, 36), const V3(5, 1.2, 1.4), const Color(0xFF22262C), shine: 0.2);
  b.id = idPropTape;
  // Two rolls of paper tape.
  for (final x in const [54.0, 59.5]) {
    b.ring(V3(x, 0, 24), V3(x, 2.1, 24), 3.4, 1.0, const Color(0xFFF1EDE0), shine: 0.05, sides: 14);
  }
  b.id = idPropKnife;
  // A taping knife lying flat.
  b.box(const V3(22, 0.3, 46), const V3(12, 0.12, 4.4), const Color(0xFFC9CED6), shine: 0.9);
  b.box(const V3(30, 0.8, 46), const V3(5.5, 1.3, 1.4), const Color(0xFF22262C), shine: 0.2);
  b.id = idPropGun;
  // The screw gun.
  const gx = -8.0, gz = 44.0;
  b.box(const V3(gx, 3.0, gz), const V3(11, 4.4, 3.8), const Color(0xFFD33B2F), shine: 0.4);
  b.box(const V3(gx - 2, 1.8, gz), const V3(3.4, 3.6, 3.2), const Color(0xFF22262C), shine: 0.3);
  b.cyl(const V3(gx + 5.5, 3.0, gz), const V3(gx + 13, 3.0, gz), 1.2, const Color(0xFF9AA2AD), shine: 0.8, sides: 10);
  b.id = idPropSquare;
  // The T-square: a long blade and a head, for scoring a straight cut.
  b.box(const V3(8, 0.5, -34), const V3(48, 0.7, 2.2), const Color(0xFFB4BAC4), shine: 0.7);
  b.box(const V3(-15.5, 0.6, -34), const V3(2.4, 0.9, 9), const Color(0xFF22262C), shine: 0.2);
  b.id = idPropPole;
  // The sanding pole: a long handle and a pad of sandpaper.
  b.box(const V3(14, 0.5, -46), const V3(50, 1.0, 1.0), const Color(0xFFA17C4C), shine: 0.1);
  b.box(const V3(-12.5, 0.9, -46), const V3(9.5, 1.3, 4.2), const Color(0xFFD8D1BE), shine: 0.05);
  b.id = idPropBead;
  // Corner bead, in short lengths.
  for (var i = 0; i < 3; i++) {
    b.box(V3(58 + i * 2.2, 0.7, -8), const V3(1.6, 1.4, 48), const Color(0xFFC3CAD3), shine: 0.8);
  }
  b.id = idPropTray;
  // The paint tray with a roller in it.
  b.box(const V3(-12, 0.8, -22), const V3(12, 1.6, 18), const Color(0xFFD9D5C8), shine: 0.2);
  b.cyl(const V3(-17, 3.2, -22), const V3(-7, 3.2, -22), 2.2, const Color(0xFFF0F0EA), shine: 0.1, sides: 12);
  b.cyl(const V3(-7, 3.2, -22), const V3(-2, 3.2, -22), 0.35, const Color(0xFFB4BAC4), shine: 0.8, sides: 6);
  // The drywall saw: a pointed blade with teeth along one edge and a red handle.
  b.id = idPropSaw;
  b.box(const V3(20, 0.7, 12), const V3(14, 0.14, 2.2), const Color(0xFFC9CED6), shine: 0.9);
  b.box(const V3(20, 0.55, 13.2), const V3(14, 0.1, 0.35), const Color(0xFF8A9099), shine: 0.5);
  b.box(const V3(29.5, 1.0, 12), const V3(5.5, 1.5, 2.2), const Color(0xFFD33B2F), shine: 0.3);
  // An invisible pad round each tool, so a finger picks it up at once.
  propPad(b, idPropStack, const V3(-40, 3.5, 4), const V3(48, 7, 96));
  propPad(b, idPropMud, const V3(40, 8, 36), const V3(16, 18, 16));
  propPad(b, idPropTape, const V3(56, 3, 24), const V3(13, 8, 8));
  propPad(b, idPropKnife, const V3(26, 1.5, 46), const V3(22, 5, 9));
  propPad(b, idPropGun, const V3(-2, 3, 44), const V3(22, 8, 9));
  propPad(b, idPropSquare, const V3(8, 1.5, -34), const V3(50, 5, 10));
  propPad(b, idPropPole, const V3(14, 1.5, -46), const V3(52, 5, 8));
  propPad(b, idPropBead, const V3(60, 1.5, -8), const V3(10, 5, 50));
  propPad(b, idPropTray, const V3(-8, 2, -22), const V3(22, 6, 20));
  propPad(b, idPropSaw, const V3(20, 1.5, 12), const V3(18, 5, 7));
}

/// The panel wall, the door wall and the rest, in the order of the buttons.
const List<(String, String, IconData)> _tools = [
  ('look', 'Look', Icons.search_rounded),
  ('sheet', 'Drywall sheet', Icons.view_agenda_rounded),
  ('cut', 'Cutter', Icons.content_cut_rounded),
  ('screw', 'Screw gun', Icons.hardware_rounded),
  ('saw', 'Saw', Icons.carpenter_rounded),
  ('bead', 'Corner bead', Icons.crop_square_rounded),
  ('mud', 'Mud', Icons.format_paint_rounded),
  ('tape', 'Tape', Icons.horizontal_rule_rounded),
  ('sand', 'Sander', Icons.cleaning_services_rounded),
  ('paint', 'Roller', Icons.roller_shades_rounded),
];

class NgmyDrywallPage extends StatefulWidget {
  const NgmyDrywallPage({super.key});

  @override
  State<NgmyDrywallPage> createState() => NgmyDrywallPageState();
}

class NgmyDrywallPageState extends State<NgmyDrywallPage> {
  final DrywallHouse d = DrywallHouse();
  late final Cam3 cam = Cam3(yaw: 0, pitch: 0.07, dist: 120, target: const V3(0, 46, 0))
    ..minDist = 12
    ..maxDist = 520
    ..minPitch = 0.0
    ..maxPitch = 1.3
    ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
    ..setFree(true);
  String tool = 'look';
  int hl = 0;
  String? msg;
  bool good = true;
  bool dollhouse = false;
  bool _doneShown = false;
  final Stopwatch _clock = Stopwatch()..start();
  late Scene3D scene = buildDrywallScene(d);
  Timer? _msgT, _dryT;
  String _wetKey = '';
  V3? _goAt;
  double _goT = -99;
  int _lastPick = 0;
  double _lastPickAt = -9;
  Set<int> glow = {};
  Timer? _glowT;
  int net = 0;
  int hintsSinceJob = 0;
  int hintsUsed = 0;
  final Set<String> _paid = {};

  double get now => _clock.elapsedMilliseconds / 1000;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _say('Tap a tool on the floor (the stack of sheets, the saw, the mud, the tape...), or choose one from the list, to pick it up. Then tap where it works. Stuck? Press Hint (it costs 2 stars; a job done without a hint earns 1).');
    });
    // The mud changes colour as it dries.
    _dryT = Timer.periodic(const Duration(milliseconds: 500), (_) {
      if (!mounted) return;
      final k = [for (var i = 0; i < 5; i++) '${d.surf[i].stage}${d.dry(i, now)}'].join();
      if (k != _wetKey) {
        _wetKey = k;
        setState(_rebuild);
      }
    });
  }

  @override
  void dispose() {
    _msgT?.cancel();
    _dryT?.cancel();
    _glowT?.cancel();
    super.dispose();
  }

  void _rebuild() => scene = buildDrywallScene(d, tool: tool, now: now);

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

  static const _howTo = {
    'look': 'Look: tap a sheet, a hole or a surface to learn about it. The tools and the stack of sheets are on the floor.',
    'sheet': 'Drywall sheet: tap a green place. The ceiling goes first. The narrow pieces need cutting first.',
    'cut': 'Cutter: tap an orange place to cut the sheet to size (score with the knife against the T-square, then snap).',
    'screw': 'Screw gun: tap a yellow sheet to screw it to every stud or joist.',
    'saw': 'Saw: tap a red mark to cut the hole for a box, the door or the window.',
    'bead': 'Corner bead: tap a door or window once its opening is cut, to protect the corner.',
    'mud': 'Mud: tap a blue surface for a coat. First the bed coat, then the tape, then two more coats. Wait for each to dry.',
    'tape': 'Tape: right after the first coat, tap the surface to press paper tape into the wet mud.',
    'sand': 'Sander: when the third coat is dry, tap the surface to sand it smooth.',
    'paint': 'Roller: when it is sanded, tap the surface to prime it.',
  };

  void setTool(String t) {
    setState(() {
      tool = t;
      hl = 0;
      _rebuild();
    });
    _say(_howTo[t]! + (t == "look" ? "" : d.whyNot(t, now)));
  }

  /// Two quick taps on the same piece do the thing once, not twice (the second tap may be the first half of a double tap to walk there).
  bool _again(int id) {
    final again = id == _lastPick && now - _lastPickAt < 0.45;
    _lastPick = id;
    _lastPickAt = now;
    return again;
  }

  /// Double tap: walk over there, inside the room (from the view of the whole room too).
  void _goTo(Offset local, Size size) {
    // A tap on a wall or the ceiling (looking up or down too): the view closes in on that spot.
    final look = dollhouse ? null : frameLookPoint(cam, local, size);
    if (look != null) {
      cam.glideTo(target: look, dist: math.min(cam.dist, 34.0));
      _say('Closer to this spot. Drag to turn round.');
      return;
    }
    final p = frameGoPoint(cam, local, size);
    if (p == null) {
      _say('Double tap the floor or a wall to walk over there.', ok: false);
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
      _goT = now;
    });
    cam.glideTo(target: p, dist: math.min(cam.dist, 70.0), pitch: 0.07);
    _say('You walked over here. Drag to turn round.');
  }

  void _lightUp(List<int> ids) {
    _glowT?.cancel();
    setState(() => glow = ids.toSet());
    _glowT = Timer(const Duration(seconds: 8), () {
      if (mounted) setState(() => glow = {});
    });
  }

  /// Pays one star for each job that is finished now and was done without a hint since the last one.
  String _afterJobs() {
    var earned = 0;
    for (final e in d.jobs.entries) {
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
    final h = d.hint(now);
    hintsUsed++;
    hintsSinceJob++;
    net -= 2;
    Community.spendStars(2);
    if (h.ids.isNotEmpty) _lightUp(h.ids);
    _say('Hint (−2 ⭐): ${h.text}');
  }

  @visibleForTesting
  void hintForTest() => _hint();

  int get _stars => (Community.active?.points ?? 0) + (Community.active == null ? net : 0);

  /// A tap on a tool lying on the floor picks it up.
  void _grab(int id, String t) {
    setState(() {
      tool = t;
      hl = id;
      _rebuild();
    });
    _say('You picked up the ${kPropInfo[id]!.$1.toLowerCase()}. ${_howTo[t]}${d.whyNot(t, now)}');
  }

  @visibleForTesting
  void doubleTapForTest(Offset local, Size size) => _goTo(local, size);

  @visibleForTesting
  void pickForTest(int id) {
    _lastPickAt = -9;
    _pick(id);
  }

  void _pick(int id) {
    if (id != 0 && _again(id)) return;
    final grabbed = kPropTool[id];
    if (grabbed != null) {
      _grab(id, grabbed);
      return;
    }
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
    int surfaceOf(int id) => id - idSurf0;
    final FAct a;
    final isSurface = id >= idSurf0 && id < idSurf0 + 5;
    switch (tool) {
      case 'sheet':
        a = d.hang(id);
      case 'cut':
        a = d.cut(id);
      case 'screw':
        a = d.screw(id);
      case 'saw':
        a = d.saw(id);
      case 'bead':
        a = d.bead(id - idBead0);
      case 'mud':
        a = isSurface ? d.mud(surfaceOf(id), now) : _wrongPlace();
      case 'tape':
        a = isSurface ? d.tape(surfaceOf(id), now) : _wrongPlace();
      case 'sand':
        a = isSurface ? d.sand(surfaceOf(id), now) : _wrongPlace();
      default:
        a = isSurface ? d.paint(surfaceOf(id)) : _wrongPlace();
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
    final note = a.ok ? _afterJobs() : "";
    _say(a.msg + note, ok: a.ok);
    if (d.complete && !_doneShown) {
      _doneShown = true;
      WidgetsBinding.instance.addPostFrameCallback((_) => _finished());
    }
  }

  FAct _wrongPlace() {
    d.mistakes++;
    return const FAct(false, 'Tap a blue surface: a whole wall or the ceiling. The finishing is done on a whole surface at a time.');
  }

  void _finished() {
    if (!mounted) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('The room is finished! 🎉', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900)),
        content: Text('Every sheet is hung and screwed, the holes are cut, the corners are protected, and all the joints are taped, coated three times, sanded and primed. The room is ready for paint.\n\nMistakes: ${d.mistakes}', style: const TextStyle(color: Colors.white70, height: 1.45)),
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
      _say('Back inside the room. Drag to turn round.');
    }
  }

  void _reset() {
    setState(() {
      d.reset();
      hl = 0;
      _doneShown = false;
      _rebuild();
    });
    _say('The drywall is taken down again. Start with the ceiling.');
  }

  @override
  Widget build(BuildContext context) {
    final fin = d.surf.where((s) => s.stage == 6).length;
    final done = [true, d.slotsOf(0).every((s) => d.sheets[s.id]!.placed), d.allHung, d.allScrewed, d.allCut, d.beads.length == 2, d.surf.every((s) => s.stage >= 4), d.surf.every((s) => s.stage >= 5), d.complete];
    final next = done.indexWhere((x) => !x);
    const steps = [
      'Look round: the stack of sheets, the mud, the tape, the knife, the screw gun and the rest of the tools are on the floor.',
      'Hang the ceiling first. Cut the 24 inch pieces to size with the Cutter before you hang them.',
      'Hang the wall sheets, cutting the narrow ones.',
      'Screw every sheet to the studs and joists with the Screw gun.',
      'Cut the holes for the boxes, the door and the window with the Saw.',
      'Put corner bead on the door and the window.',
      'On each surface: mud (bed coat), tape, then mud twice more, waiting for each coat to dry.',
      'Sand each surface smooth when the last coat is dry.',
      'Prime every surface with the Roller. The room is finished.',
    ];
    return LessonScaffold(
      title: 'Hanging drywall',
      color: const Color(0xFF38BDF8),
      stepText: next < 0 ? 'All done' : 'Step ${next + 1}/${steps.length}',
      onSteps: () => showConSteps(context, 'Hanging drywall', steps, done),
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
        onDoubleTap: _goTo,
        stars: () => _stars,
        good: good,
        info: hl != 0 ? scene.info[hl] : null,
        dynamicPolys: (t) {
          final cp = math.cos(cam.pitch);
          return [...drywallCeiling(d, now, V3(-cp * math.sin(cam.yaw), math.sin(cam.pitch), cp * math.cos(cam.yaw))), ...frameGoRing(_goAt, _goT, now), ...frameBackdrops(cam), ...drywallGlow(glow, now)];
        },
        topRight: [
          conPill(dollhouse ? 'Inside' : 'Whole room', on: dollhouse, icon: dollhouse ? Icons.login_rounded : Icons.view_in_ar_rounded, onTap: _toggleView),
          const SizedBox(height: 8),
        ],
      ),
      panel: Column(mainAxisSize: MainAxisSize.min, children: [
        frameToolTray(_tools, tool, setTool, extra: [
          GestureDetector(
            key: const Key("tool-hint"),
            onTap: _hint,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(13), border: Border.all(color: Colors.white24)),
              child: const Row(mainAxisSize: MainAxisSize.min, children: [Icon(Icons.lightbulb_rounded, size: 17, color: Color(0xFFFACC15)), SizedBox(width: 5), Text("Hint", style: TextStyle(color: Color(0xFFFACC15), fontWeight: FontWeight.w800, fontSize: 12)), SizedBox(width: 5), Text("−2 ⭐", style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, fontSize: 10.5))]),
            ),
          ),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(
            child: Text(
              'Sheets ${d.hung}/${kDSlots.length} · screwed ${d.screwedCount}/${kDSlots.length} · holes ${d.cutsDone}/${kDCuts.length} · surfaces finished $fin/5',
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

/// A flat patch on the underside of the ceiling at height [y], lit as if it faced up so a ceiling is as bright as a wall.

/// The ceiling: the sheets, the screw heads, the cut-outs and the joint finishing. It is drawn fresh every frame, lit as if it faced the viewer: the
/// light of the picture comes from the viewer's side, so a ceiling that looks down would be drawn nearly black.
List<Poly> drywallCeiling(DrywallHouse d, double now, V3 towardViewer) {
  final b = MeshBuilder()..order = 2;
  void q(double x0, double x1, double z0, double z1, double y, Color c) => b.quad(V3(x0, y, z0), V3(x1, y, z0), V3(x1, y, z1), V3(x0, y, z1), c, normal: towardViewer);
  final stage = d.surf[0].stage;
  final wet = !d.dry(0, now);
  for (final s in kDSlots.where((s) => s.ceiling)) {
    final st = d.sheets[s.id]!;
    if (!st.placed) continue;
    b
      ..id = s.id
      ..bias = 0;
    q(s.a0 + 0.1, s.a1 - 0.1, s.b0 + 0.1, s.b1 - 0.1, 96 - kSheetT, _surfaceColor(stage, s.id));
    // The screw heads, 12 inches apart along every joist (and the mud over them).
    if (st.screwed && stage < 6) {
      final dot = stage == 0 ? const Color(0xFF8D8776) : _mud(stage, wet);
      final r = stage == 0 ? 0.42 : 1.3;
      b.bias = 0.9;
      for (var i = 0; i < kJoists; i++) {
        final x = joistX(i);
        if (x < s.a0 + 1 || x > s.a1 - 1) continue;
        for (var z = s.b0 + 6; z < s.b1 - 2; z += 12) {
          q(x - r, x + r, z - r, z + r, 95.49, dot);
        }
      }
    }
  }
  // The joints: mud, paper tape, second and third coats, and the sanding.
  if (stage >= 1 && stage <= 5) {
    b.id = idSurf0;
    var layer = 0;
    for (final w in [_layerWidth[1], if (stage >= 2) _layerWidth[2], if (stage >= 3) _layerWidth[3], if (stage >= 4) _layerWidth[4]]) {
      final c = layer == 1 ? const Color(0xFFF4F1E8) : _mud(stage, wet && layer == (stage >= 4 ? 3 : stage - 1));
      final y = 95.49 - layer * 0.01;
      b.bias = 0.4 + layer * 0.1;
      for (final x in const [-24.0, 24.0]) {
        q(x - w / 2, x + w / 2, -59, 59, y, c);
      }
      q(-71, 71, 36 - w / 2, 36 + w / 2, y, c);
      for (final z in const [-57.5, 57.5]) {
        q(-71, 71, z - w * 0.3, z + w * 0.3, y, c);
      }
      for (final x in const [-69.5, 69.5]) {
        q(x - w * 0.3, x + w * 0.3, -59, 59, y, c);
      }
      layer++;
    }
  }
  // The hole for the light: a dark edge, and the box showing through.
  for (final c in kDCuts) {
    final st = d.sheets[c.slot]!;
    if (!st.cutDone.contains(c.id) || c.opening >= 0 || !dSlotById(c.slot)!.ceiling) continue;
    b
      ..id = c.id
      ..bias = 1.2;
    q(c.u0 - 0.15, c.u1 + 0.15, c.y0 - 0.15, c.y1 + 0.15, 95.47, const Color(0xFF111827));
    b.bias = 1.4;
    q(c.u0 + 0.5, c.u1 - 0.5, c.y0 + 0.5, c.y1 - 0.5, 95.46, kBoxBlue);
  }
  return b.polys;
}

/// A soft pulsing light on the places a hint points at.
List<Poly> drywallGlow(Set<int> ids, double t) {
  if (ids.isEmpty) return const [];
  final b = MeshBuilder()
    ..id = 0
    ..order = 3
    ..bias = 1.2;
  final pulse = 0.5 + 0.5 * math.sin(t * 7);
  b.alpha = 0.22 + 0.25 * pulse;
  const col = Color(0xFFFFE066);
  for (final id in ids) {
    final s = dSlotById(id);
    if (s != null) {
      if (s.ceiling) {
        b.box(V3((s.a0 + s.a1) / 2, 94.6, (s.b0 + s.b1) / 2), V3(s.width, 1.2, s.length), col);
      } else {
        b.box(wallPt(s.wall, (s.a0 + s.a1) / 2, 48, kStD + 1.6), wallSize(s.wall, s.width, 95, 0.6), col);
      }
      continue;
    }
    final c = kDCuts.where((c) => c.id == id).firstOrNull;
    if (c != null) {
      final sl = dSlotById(c.slot)!;
      if (sl.ceiling) {
        b.box(V3((c.u0 + c.u1) / 2, 94.6, 0), V3(c.u1 - c.u0 + 5, 1.2, c.y1 - c.y0 + 5), col);
      } else {
        b.box(wallPt(sl.wall, (c.u0 + c.u1) / 2, (c.y0 + c.y1) / 2, kStD + kSheetT + 1.2), wallSize(sl.wall, c.u1 - c.u0 + (c.opening >= 0 ? 0 : 5), c.y1 - c.y0 + (c.opening >= 0 ? 0 : 5), 0.6), col);
      }
      continue;
    }
    if (id >= idBead0 && id < idBead0 + kOpenings.length) {
      final o = kOpenings[id - idBead0];
      b.box(wallPt(o.wall, (o.u0 + o.u1) / 2, (o.sill + o.top) / 2, kStD + kSheetT + 1.2), wallSize(o.wall, o.u1 - o.u0 + 5, o.top - o.sill + 5, 0.6), col);
      continue;
    }
    if (id >= idSurf0 && id < idSurf0 + 5) {
      final si = id - idSurf0;
      if (si == 0) {
        b.box(const V3(0, 94.6, 0), const V3(140, 1.2, 116), col);
      } else {
        b.box(wallPt(si - 1, wallLen(si - 1) / 2, 48, kStD + 1.6), wallSize(si - 1, wallLen(si - 1) - 2, 94, 0.6), col);
      }
    }
  }
  return b.polys;
}
