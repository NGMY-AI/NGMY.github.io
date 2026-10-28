import 'package:flutter/material.dart';

import 'ngmy_electrical_safety.dart';

import 'ngmy_3d.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Electrical work in 3D: a wall outlet, a light switch, a GFCI outlet, a ceiling light and a ceiling fan.
// Wires have their real colours (black is hot, white is neutral, bare copper is ground). Every screw has
// its own colour (brass, silver, green), a name and a place to be wired. In "learn" mode a wrong wire is
// refused and explained. In "practice" mode it is allowed, and the mistake shows when you switch on.
// ═════════════════════════════════════════════════════════════════════════════

const Color kDrywall = Color(0xFFE6E1D5);
const Color kWood = Color(0xFFC49A62);
const Color kBlueBox = Color(0xFF2C6BD6);
const Color kJacket = Color(0xFFE5B91E);
const Color kBlack = Color(0xFF1E1E20);
const Color kWhiteWire = Color(0xFFF1F1EA);
const Color kCopper = Color(0xFFC2763A);
const Color kBrass = Color(0xFFE3A91C);
const Color kBrassPlate = Color(0xFFC48A1E);
const Color kSilver = Color(0xFFCBD0D6);
const Color kNickel = Color(0xFFF1F4F8);
const Color kNickelPlate = Color(0xFFC9CFD6);
const Color kGreenScrew = Color(0xFF1FA343);
const Color kGreenPlate = Color(0xFF1B7F34);
const Color kIvory = Color(0xFFF2EAD3);
const Color kChar = Color(0xFF2A2523);

// Object numbers.
const int idWall = 1, idStud = 2, idBox = 3, idCable = 4, idCableB = 5, idWireNut = 6;
const int idBlack = 10, idWhite = 11, idGround = 12, idBlack2 = 13;
const int idDevice = 20, idBrassTop = 21, idBrassBottom = 22, idSilverTop = 23, idSilverBottom = 24, idGreen = 25, idYoke = 26, idFace = 27, idButtons = 28;
const int idPlate = 30, idTester = 31;
const int idNutBlack = 51, idNutWhite = 52, idNutGround = 53, idFixture = 54, idCanopy = 55;

/// A place on the device where a wire can be fastened.
class Hookup {
  const Hookup(this.id, this.name, this.accepts, this.hint, {this.taped = false, this.role = 'hot'});
  final int id;
  final String name;

  /// The wire kinds that belong here.
  final Set<String> accepts;
  final String hint;
  final bool taped;

  /// What the place is for: hot, neutral, ground, or load (the taped side of a GFCI).
  final String role;
}

/// What the learner has done so far on one device.
class WiringState {
  bool power = true;
  final Map<int, String> attached = {};
  int stage = 0; // 0 wiring, 1 pushed into the box, 2 cover plate on
  bool testing = false;
  bool hints = false;
  bool labels = false;

  /// In practice mode a wrong wire is allowed and the mistake shows when the power comes on.
  bool practice = false;

  /// The device burnt out from a mistake.
  bool burnt = false;

  /// The fixture or fan hangs on a box that can carry it (false for a plain light box under a fan).
  bool supported = true;

  /// Test mode: wrong wires are allowed silently, and nothing is explained until the test is submitted.
  bool test = false;

  /// The effect the last power-on showed (arc, spark, smoke, fire) and when it started, for the animation.
  String fx = '';
  double fxStart = 0;
}

class WireChoice {
  const WireChoice(this.key, this.label, this.color, this.ink, {this.role = 'hot'});
  final String key;
  final String label;
  final Color color;
  final Color ink;
  final String role;
}

class ElectricalLesson {
  const ElectricalLesson({required this.id, required this.title, required this.blurb, required this.steps, required this.chips, required this.hookups, required this.wrongHint});
  final String id;
  final String title;
  final String blurb;
  final List<String> steps;
  final List<WireChoice> chips;
  final List<Hookup> hookups;
  final String Function(String chip, Hookup h) wrongHint;
}

const List<WireChoice> _outletChips = [
  WireChoice('black', 'Black · hot', Color(0xFF26262A), Colors.white, role: 'hot'),
  WireChoice('white', 'White · neutral', Color(0xFFF1F1EA), Color(0xFF111827), role: 'neutral'),
  WireChoice('ground', 'Bare copper · ground', Color(0xFFC2763A), Colors.white, role: 'ground'),
];

final List<ElectricalLesson> kElectricalLessons = [
  ElectricalLesson(
    id: 'outlet',
    title: 'Wall outlet',
    blurb: 'Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.',
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.',
      'Fasten the bare copper ground wire to the GREEN screw.',
      'Fasten the white (neutral) wire to a SILVER screw.',
      'Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.',
      'Fold the wires back and push the outlet into the box.',
      'Put the cover plate on, then turn the power on and test.',
    ],
    chips: _outletChips,
    hookups: const [
      Hookup(idBrassTop, 'Brass screw (top): HOT side', {'black'}, 'Brass screws are for the HOT wire (black).', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw (bottom): HOT side', {'black'}, 'Brass screws are for the HOT wire (black).', role: 'hot'),
      Hookup(idSilverTop, 'Silver screw (top): NEUTRAL side', {'white'}, 'Silver screws are for the NEUTRAL wire (white).', role: 'neutral'),
      Hookup(idSilverBottom, 'Silver screw (bottom): NEUTRAL side', {'white'}, 'Silver screws are for the NEUTRAL wire (white).', role: 'neutral'),
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The green screw is for the bare copper or green GROUND wire.', role: 'ground'),
    ],
    wrongHint: (chip, h) => switch (chip) {
      'black' => h.id == idGreen ? 'The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.' : 'The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral).',
      'white' => h.id == idGreen ? 'The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.' : 'The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire.',
      _ => 'The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong.',
    },
  ),
  ElectricalLesson(
    id: 'switch',
    title: 'Light switch',
    blurb: 'A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.',
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).',
      'Twist the two white wires together with a wire nut. A switch does not cut the neutral.',
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the black wire from the panel to one BRASS screw.',
      'Fasten the black wire that goes to the light to the other BRASS screw.',
      'Push the switch into the box, put the plate on and test with the power on.',
    ],
    chips: const [
      WireChoice('blackLine', 'Black · from the breaker', Color(0xFF26262A), Colors.white, role: 'hot'),
      WireChoice('blackLoad', 'Black · to the light', Color(0xFF3A2E2E), Colors.white, role: 'hot'),
      WireChoice('ground', 'Bare copper · ground', Color(0xFFC2763A), Colors.white, role: 'ground'),
    ],
    hookups: const [
      Hookup(idBrassTop, 'Brass screw (top)', {'blackLine', 'blackLoad'}, 'Both black wires go on brass screws. It does not matter which one.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw (bottom)', {'blackLine', 'blackLoad'}, 'Both black wires go on brass screws. It does not matter which one.', role: 'hot'),
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The green screw is for the bare copper ground wire.', role: 'ground'),
    ],
    wrongHint: (chip, h) => chip == 'ground' ? 'The bare copper ground wire only goes on the GREEN screw.' : 'A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws.',
  ),
  ElectricalLesson(
    id: 'gfci',
    title: 'GFCI outlet',
    blurb: 'A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.',
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.',
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the white wire to the silver LINE screw.',
      'Fasten the black wire to the brass LINE screw.',
      'Push the GFCI into the box and put the plate on.',
      'Turn the power on, press RESET, then press TEST. It must click off.',
    ],
    chips: _outletChips,
    hookups: const [
      Hookup(idBrassTop, 'LOAD hot (brass, taped)', {}, 'LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.', taped: true, role: 'load'),
      Hookup(idBrassBottom, 'LINE hot (brass)', {'black'}, 'The black (hot) wire from the breaker goes on the brass LINE screw.', role: 'hot'),
      Hookup(idSilverTop, 'LOAD neutral (silver, taped)', {}, 'LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.', taped: true, role: 'load'),
      Hookup(idSilverBottom, 'LINE neutral (silver)', {'white'}, 'The white (neutral) wire from the breaker goes on the silver LINE screw.', role: 'neutral'),
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The green screw is for the bare copper ground wire.', role: 'ground'),
    ],
    wrongHint: (chip, h) => h.taped
        ? 'Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you.'
        : switch (chip) {
            'black' => 'The black (hot) wire goes on the BRASS LINE screw.',
            'white' => 'The white (neutral) wire goes on the SILVER LINE screw.',
            _ => 'The bare copper ground wire only goes on the GREEN screw.',
          },
  ),
  ElectricalLesson(
    id: 'light',
    title: 'Ceiling light',
    blurb: 'Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.',
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Hold the fixture up to the ceiling box. It has three short wires: black, white and green.',
      'Join the house ground wire to the fixture ground.',
      'Join the house white wire to the fixture white wire with a wire nut.',
      'Join the house black wire to the fixture black wire with a wire nut.',
      'Push the wires into the box and fasten the fixture to the ceiling.',
      'Switch the power on and flip the wall switch.',
    ],
    chips: _outletChips,
    hookups: const [
      Hookup(idNutBlack, 'Black wire nut: HOT', {'black'}, 'The house black wire joins the fixture black wire.', role: 'hot'),
      Hookup(idNutWhite, 'White wire nut: NEUTRAL', {'white'}, 'The house white wire joins the fixture white wire.', role: 'neutral'),
      Hookup(idNutGround, 'Green ground connection', {'ground'}, 'The bare copper house ground joins the green fixture ground wire.', role: 'ground'),
    ],
    wrongHint: (chip, h) => switch (chip) {
      'black' => 'The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground.',
      'white' => 'The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground.',
      _ => 'The bare copper ground wire joins the fixture GREEN ground wire only.',
    },
  ),
  ElectricalLesson(
    id: 'fan',
    title: 'Ceiling fan',
    blurb: 'A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.',
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.',
      'Join the house ground wire to the fan ground.',
      'Join the house white wire to the fan white wire with a wire nut.',
      'Join the house black wire to the fan black wire with a wire nut.',
      'Push the wires up into the box and fasten the canopy to the ceiling.',
      'Switch the power on and flip the wall switch.',
    ],
    chips: _outletChips,
    hookups: const [
      Hookup(idNutBlack, 'Black wire nut: HOT', {'black'}, 'The house black wire joins the fan black wire.', role: 'hot'),
      Hookup(idNutWhite, 'White wire nut: NEUTRAL', {'white'}, 'The house white wire joins the fan white wire.', role: 'neutral'),
      Hookup(idNutGround, 'Green ground connection', {'ground'}, 'The bare copper house ground joins the green fan ground wire.', role: 'ground'),
    ],
    wrongHint: (chip, h) => switch (chip) {
      'black' => 'The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground.',
      'white' => 'The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground.',
      _ => 'The bare copper ground wire joins the fan GREEN ground wire only.',
    },
  ),
];

ElectricalLesson electricalLesson(String id) => kElectricalLessons.firstWhere((l) => l.id == id);

/// Is every place that needs a wire wired?
bool wiringComplete(ElectricalLesson lesson, WiringState s) {
  final needed = lesson.chips.map((c) => c.key).toSet();
  final have = s.attached.values.toSet();
  return needed.every(have.contains);
}

/// Tries to fasten [chip] on [h]. Returns null when it worked, or a plain-words reason when it did not.
/// In practice mode a wrong wire is allowed, and touching live wires returns a message that starts with SHOCK.
String? tryFasten(ElectricalLesson lesson, WiringState s, String chip, Hookup h, {bool allowWrong = false}) {
  if (s.power && s.stage == 0) {
    if (s.practice) return 'SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first.';
    return 'STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly.';
  }
  if (s.stage != 0) return 'The device is already in the box. Pull it out again to change the wires.';
  if (!s.practice && !s.test && !allowWrong && !h.accepts.contains(chip)) return lesson.wrongHint(chip, h);
  if (s.attached[h.id] != null) return 'That place already has a wire. Tap the wire to take it off first.';
  if (s.attached.values.contains(chip)) return 'That wire is already fastened. Tap it to take it off if you want to move it.';
  s.attached[h.id] = chip;
  return null;
}

/// How a finished (or half finished) wiring job behaves when the power comes on. The judging is done by the safety engine
/// ([evaluateConnections]); this keeps the names the lessons and jobs already use.
class Verdict {
  const Verdict(this.kind, this.message, {this.works = false, this.trips = false, this.burns = false, this.report, this.effect = 'none', this.fix = ''});
  final String kind; // ok, noGround, reversed, bonded, dead, openNeutral, short, groundWire, unverified
  final String message;

  /// Does the device do its job? That never makes it safe: see [ok].
  final bool works;
  final bool trips;
  final bool burns;

  /// What the engine found, and what to draw when the power goes on (none, arc, spark, smoke, fire).
  final SafetyReport? report;
  final String effect;
  final String fix;

  /// Correct and safe: the only result that counts as a finished job.
  bool get ok => kind == 'ok';
  SafetyStatus get status => report?.status ?? (ok ? SafetyStatus.correct : SafetyStatus.incorrect);
  bool get dangerous => report?.status == SafetyStatus.unsafe;
}

/// The engine's view of a lesson's wiring: which wire is on which terminal.
List<Connection> connectionsOf(ElectricalLesson lesson, WiringState s) {
  WireFunction fn(String role) => switch (role) { 'hot' => WireFunction.hot, 'neutral' => WireFunction.neutral, 'ground' => WireFunction.ground, _ => WireFunction.unknown };
  TerminalRole tr(String role) => switch (role) { 'hot' => TerminalRole.hot, 'neutral' => TerminalRole.neutral, 'ground' => TerminalRole.ground, _ => TerminalRole.load };
  final out = <Connection>[];
  for (final e in s.attached.entries) {
    final h = lesson.hookups.firstWhere((h) => h.id == e.key);
    final c = lesson.chips.firstWhere((c) => c.key == e.value);
    out.add(Connection(Wire(c.key, c.label, fn(c.role)), Terminal(h.id, h.name, tr(h.role))));
  }
  return out;
}

DeviceRules rulesOf(ElectricalLesson lesson) => DeviceRules(
      name: lesson.title,
      hotWires: lesson.chips.where((c) => c.role == 'hot').length,
      neutralWires: lesson.chips.where((c) => c.role == 'neutral').length,
    );

Verdict evaluateWiring(ElectricalLesson lesson, WiringState s) {
  final r = evaluateConnections(rulesOf(lesson), connectionsOf(lesson, s), supported: s.supported);
  final c = r.consequence;
  bool has(String code) => r.findings.any((f) => f.code == code);
  final first = r.findings.isEmpty ? null : r.findings.reduce((a, b) => b.status.severity > a.status.severity ? b : a);
  final kind = r.safe
      ? 'ok'
      : has('SHORT') || has('HOT_TO_GROUND')
          ? 'short'
          : has('REVERSED')
              ? 'reversed'
              : has('NEUTRAL_GROUND')
                  ? 'bonded'
                  : has('GROUND_AS_CURRENT')
                      ? 'groundWire'
                      : has('OPEN_NEUTRAL')
                          ? 'openNeutral'
                          : has('UNVERIFIED')
                              ? 'unverified'
                              : has('MISSING_GROUND')
                                  ? 'noGround'
                                  : 'dead';
  final msg = r.safe ? 'Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.' : '${first!.message} ${c.text}';
  return Verdict(kind, msg, works: c.operates, trips: c.trips, burns: c.burns, report: r, effect: c.effect, fix: first?.fix ?? '');
}

// ─── Building the scene ──────────────────────────────────────────────────────

const double _cx = 0, _cy = -0.2;

bool _ceiling(String lesson) => lesson == 'light' || lesson == 'fan';

/// Where the device sits: out in front of the box while wiring, in the box after.
double _deviceZ(String lesson, WiringState s) => _ceiling(lesson) ? (s.stage == 0 ? 6.4 : 0.6) : (s.stage == 0 ? 4.7 : -0.25);

V3 hookupPoint(String lesson, int id, WiringState s) {
  if (_ceiling(lesson)) {
    final z = _deviceZ(lesson, s);
    final zz = s.stage == 0 ? z - 3.2 : z;
    switch (id) {
      case idNutBlack:
        return V3(-1.5, -0.3, zz);
      case idNutWhite:
        return V3(0, -0.3, zz);
      default:
        return V3(1.5, -0.3, zz);
    }
  }
  final z = _deviceZ(lesson, s);
  switch (id) {
    case idBrassTop:
      return V3(_cx + 0.98, _cy + (lesson == 'gfci' ? 0.95 : 0.85), z - 0.45);
    case idBrassBottom:
      return V3(_cx + 0.98, _cy + (lesson == 'gfci' ? -0.75 : -0.55), z - 0.45);
    case idSilverTop:
      return V3(_cx - 0.98, _cy + (lesson == 'gfci' ? 0.95 : 0.85), z - 0.45);
    case idSilverBottom:
      return V3(_cx - 0.98, _cy + (lesson == 'gfci' ? -0.75 : -0.55), z - 0.45);
    default:
      return V3(_cx, _cy - 1.78, z + 0.52);
  }
}

Scene3D buildElectricalScene(ElectricalLesson lesson, WiringState s) => buildBench(lesson, s, withWall: true);

/// The box, the cable, the wires and the device. With [withWall] it also draws a piece of wall around the box.
Scene3D buildBench(ElectricalLesson lesson, WiringState s, {bool withWall = true}) {
  final b = MeshBuilder();
  final kind = lesson.id;
  final ceilingKind = _ceiling(kind);
  if (withWall) {
    b.id = idWall;
    b.box(const V3(-6.575, 0, -0.25), const V3(10.85, 18, 0.5), kDrywall, split: 3);
    b.box(const V3(6.575, 0, -0.25), const V3(10.85, 18, 0.5), kDrywall, split: 3);
    b.box(const V3(0, 5.5, -0.25), const V3(2.3, 7, 0.5), kDrywall, split: 2);
    b.box(const V3(0, -5.5, -0.25), const V3(2.3, 7, 0.5), kDrywall, split: 2);
    b.id = idStud;
    b.box(const V3(-1.9, 0, -2.25), const V3(1.5, 18, 3.5), kWood, shine: 0.05, split: 3);
    b.box(const V3(11.25, 0, -2.25), const V3(1.5, 18, 3.5), kWood, shine: 0.05, split: 3);
    b.box(const V3(5.0, 8.6, -2.25), const V3(14, 1.5, 3.5), kWood, shine: 0.05, split: 2);
  }
  final cableEnds = _boxAndCable(b, kind, true);
  // ── Wires ──
  const double wr = 0.085;
  void wire(int id, V3 start, V3 free, String key, Color insul) {
    b.id = id;
    final attachedTo = s.attached.entries.where((e) => e.value == key).toList();
    final isGround = key == 'ground';
    final col = isGround ? kCopper : insul;
    final shine = isGround ? 0.6 : 0.3;
    if (s.stage > 0) {
      final end = start + const V3(0, -0.9, 1.1);
      b.tube(smoothPath([start, start + const V3(0, -0.5, 0.6), end], per: 4), wr, col, shine: shine, sides: 8, joints: false);
      return;
    }
    if (attachedTo.isNotEmpty) {
      final target = hookupPoint(kind, attachedTo.first.key, s);
      final mid = V3.lerp(start, target, 0.5) + V3(target.x > 0 ? 0.5 : -0.5, 0.2, 0.9);
      final pts = smoothPath([start, start + const V3(0, -0.7, 0.8), mid, target + V3(ceilingKind ? 0 : (target.x > 0 ? 0.06 : -0.06), 0, 0.08), target], per: 5);
      final body = pts.sublist(0, (pts.length * 0.8).floor());
      b.tube(body, wr, col, shine: shine, sides: 8, joints: false);
      if (!isGround) b.tube(pts.sublist(body.length - 1), wr * 0.72, kCopper, shine: 0.6, sides: 8, joints: false);
    } else {
      final pts = smoothPath([start, start + const V3(0, -0.8, 0.9), V3.lerp(start, free, 0.6), free], per: 5);
      final body = isGround ? pts : pts.sublist(0, (pts.length * 0.86).floor());
      b.tube(body, wr, col, shine: shine, sides: 8, joints: false);
      if (!isGround) b.tube(pts.sublist(body.length - 1), wr * 0.72, kCopper, shine: 0.6, sides: 8, joints: false);
    }
  }

  final e0 = cableEnds.first;
  if (kind == 'switch') {
    final eb = cableEnds.last;
    wire(idBlack, e0 + const V3(-0.1, 0, 0), const V3(-1.2, -1.6, 2.2), 'blackLine', kBlack);
    wire(idBlack2, eb + const V3(0.1, 0, 0), const V3(1.2, -1.7, 2.3), 'blackLoad', kBlack);
    wire(idGround, e0 + const V3(0.12, 0.0, 0.05), const V3(0.1, -2.0, 2.4), 'ground', kCopper);
    b.id = idWireNut;
    b.tube([e0 + const V3(0, -0.1, 0.1), const V3(-0.2, -0.3, -0.4), const V3(0, -1.0, -0.6)], 0.075, kWhiteWire, shine: 0.3, sides: 8, joints: false);
    b.tube([eb + const V3(0, -0.1, 0.1), const V3(0.2, -0.3, -0.4), const V3(0, -1.0, -0.6)], 0.075, kWhiteWire, shine: 0.3, sides: 8, joints: false);
    b.cyl(const V3(0, -1.0, -0.6), const V3(0, -1.55, -0.6), 0.28, const Color(0xFFF08A24), shine: 0.3, sides: 10, r1: 0.18);
  } else {
    wire(idBlack, e0 + const V3(-0.12, 0, 0), const V3(-1.0, -1.7, 2.3), 'black', kBlack);
    wire(idWhite, e0 + const V3(0.0, 0, 0.04), const V3(0.2, -2.0, 2.6), 'white', kWhiteWire);
    wire(idGround, e0 + const V3(0.12, 0, 0), const V3(1.0, -1.8, 2.4), 'ground', kCopper);
  }

  // ── The device ──
  if (ceilingKind) {
    _fixture(b, kind, s);
  } else {
    _device(b, kind, _deviceZ(kind, s), s.burnt);
  }
  if (s.hints && s.stage == 0) {
    b.id = 0;
    b.alpha = 0.5;
    for (final h in lesson.hookups) {
      final p = hookupPoint(kind, h.id, s);
      final col = h.taped ? const Color(0xFFFACC15) : (h.role == 'ground' ? const Color(0xFF22C55E) : (h.role == 'neutral' ? Colors.white : const Color(0xFFE3A91C)));
      b.ball(p + V3(ceilingKind ? 0 : (p.x > 0.4 ? 0.12 : (p.x < -0.4 ? -0.12 : 0)), 0, ceilingKind ? 0.6 : (p.x.abs() < 0.4 ? 0.2 : 0)), 0.36, col, shine: 0.1, lat: 4, lon: 8);
    }
    b.alpha = 1;
  }
  if (s.stage >= 2 && !ceilingKind) _plate(b, s.burnt);
  if (s.stage >= 2 && s.testing && (kind == 'outlet' || kind == 'gfci')) _tester(b, s.power && !s.burnt);

  final info = <int, ObjInfo>{
    idWall: const ObjInfo('Drywall', 'The wall surface. A hole is cut in it for the electrical box.', V3(0, 0, 0), 22),
    idStud: const ObjInfo('Wood stud', 'The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.', V3(-1.9, 0, -2), 16),
    idBox: ObjInfo(ceilingKind ? 'Ceiling box' : 'Electrical box', 'A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling.${kind == 'fan' ? ' A fan needs a box that says "fan rated".' : ''}', V3(0, 0, -1.2), 9),
    idCable: ObjInfo(kind == 'switch' ? 'Cable from the breaker panel (LINE)' : 'NM-B cable (Romex)', 'The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.', V3(-0.4, 1.5, -1.8), 8),
    idCableB: const ObjInfo('Cable to the light (LOAD)', 'This cable carries the switched power on to the light. The black wire here only has power when the switch is on.', V3(0.6, 1.5, -1.8), 8),
    idBlack: ObjInfo('Black wire: hot', 'The hot wire brings the power from the breaker. It is the dangerous one. ${ceilingKind ? 'It joins the fixture black wire with a wire nut.' : 'It goes on a brass screw.'}', V3(-0.8, -0.8, 1.2), 7),
    idBlack2: const ObjInfo('Black wire to the light', 'This black wire carries power to the light once the switch is on. It goes on the other brass screw.', V3(0.8, -0.8, 1.2), 7),
    idWhite: ObjInfo('White wire: neutral', 'The neutral wire carries the power back to the panel. ${ceilingKind ? 'It joins the fixture white wire.' : 'It goes on a silver screw.'}', V3(0, -0.8, 1.2), 7),
    idGround: ObjInfo('Bare copper wire: ground', 'The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. ${ceilingKind ? 'It joins the green fixture ground wire.' : 'It goes on the green screw.'}', V3(0.5, -0.8, 1.2), 7),
    idWireNut: const ObjInfo('Wire nut', 'A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.', V3(0, -1, -0.6), 5),
    idDevice: ObjInfo(kind == 'gfci' ? 'GFCI outlet' : (kind == 'switch' ? 'Light switch' : 'Receptacle (outlet)'), kind == 'gfci' ? 'It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second.' : (kind == 'switch' ? 'A rocker that opens and closes the black wire to the light.' : 'The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral.'), V3(0, -0.2, _deviceZ(kind, s)), 9),
    idBrassTop: const ObjInfo('BRASS screw: HOT side', 'The gold screws are BRASS. They are for the HOT wire (black).', V3(1.0, 0.6, 4.3), 5),
    idBrassBottom: const ObjInfo('BRASS screw: HOT side', 'The gold screws are BRASS. They are for the HOT wire (black).', V3(1.0, -0.8, 4.3), 5),
    idSilverTop: const ObjInfo('SILVER screw: NEUTRAL side', 'The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).', V3(-1.0, 0.6, 4.3), 5),
    idSilverBottom: const ObjInfo('SILVER screw: NEUTRAL side', 'The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).', V3(-1.0, -0.8, 4.3), 5),
    idGreen: const ObjInfo('GREEN screw: GROUND', 'The green screw is for the bare copper ground wire.', V3(0, -1.9, 5.0), 5),
    idYoke: const ObjInfo('Mounting strap (yoke)', 'The metal strap with two screw slots. Long screws through the ears hold the device in the box.', V3(0, -0.2, 4.9), 7),
    idFace: const ObjInfo('Outlet face', 'Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.', V3(0, -0.2, 5.1), 6),
    idButtons: const ObjInfo('TEST and RESET buttons', 'Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.', V3(0, -0.2, 5.1), 5),
    idPlate: const ObjInfo('Cover plate', 'The plate covers the box and the edges of the drywall so nobody touches the wires.', V3(0, -0.2, 0.2), 8),
    idTester: const ObjInfo('Voltage tester', 'A tester that glows when it touches live power.', V3(0, 0.5, 2.0), 6),
    idNutBlack: const ObjInfo('Black wire nut: HOT', 'Twist the house black wire and the fixture black wire together under this cap.', V3(-1.5, -0.3, 3.2), 6),
    idNutWhite: const ObjInfo('White wire nut: NEUTRAL', 'Twist the house white wire and the fixture white wire together under this cap.', V3(0, -0.3, 3.2), 6),
    idNutGround: const ObjInfo('Green ground connection', 'Join the bare copper house ground wire to the green fixture ground wire.', V3(1.5, -0.3, 3.2), 6),
    idFixture: ObjInfo(kind == 'fan' ? 'Ceiling fan' : 'Ceiling light', kind == 'fan' ? 'The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).' : 'The light fixture with a frosted dome. It has three wires: black, white and green.', V3(0, 0, 6.4), 9),
    idCanopy: const ObjInfo('Canopy', 'The round cover that hides the box and the wire connections against the ceiling.', V3(0, 0, 0.6), 8),
  };

  final labels = <Label3D>[];
  if (s.labels && s.stage == 0) {
    for (final h in lesson.hookups) {
      final p = hookupPoint(kind, h.id, s);
      final (text, col) = switch (h.role) {
        'hot' => ('BRASS · HOT', const Color(0xFF9A6B0C)),
        'neutral' => ('SILVER · NEUTRAL', const Color(0xFF5B6470)),
        'ground' => ('GREEN · GROUND', const Color(0xFF1F7A3A)),
        _ => ('LOAD (taped)', const Color(0xFFB45309)),
      };
      final t = ceilingKind ? switch (h.role) { 'hot' => 'BLACK NUT · HOT', 'neutral' => 'WHITE NUT · NEUTRAL', _ => 'GROUND' } : text;
      final off = ceilingKind
          ? switch (h.role) { 'hot' => const V3(-4.6, -2.0, 1.2), 'neutral' => const V3(0, -3.4, 1.2), _ => const V3(4.6, -2.0, 1.2) }
          : V3(p.x > 0.4 ? 3.8 : (p.x < -0.4 ? -4.2 : 0), p.x.abs() < 0.4 ? -3.0 : -0.4, 1.0);
      labels.add(Label3D(p + off, t, col));
    }
  }
  if (s.power && s.stage == 0) labels.add(const Label3D(V3(-0.4, 4.2, -2.4), 'LIVE 120 V', Color(0xFFDC2626)));
  return Scene3D(b.polys, info: info, labels: labels);
}

/// The blue box and the yellow cable coming into it. Returns where the cable ends (one end per cable).
List<V3> _boxAndCable(MeshBuilder b, String kind, bool showCable) {
  final ceilingKind = _ceiling(kind);
  b.id = idBox;
  if (ceilingKind) {
    b.cyl(const V3(0, 0, -2.4), const V3(0, 0, -2.3), 2.2, kBlueBox, shine: 0.3, sides: 18);
    b.cyl(const V3(0, 0, -2.3), const V3(0, 0, 0), 2.2, kBlueBox, shine: 0.3, sides: 18, caps: false, inner: true);
  } else {
    b.box(const V3(0, 0, -2.4), const V3(2.0, 3.8, 0.08), kBlueBox, shine: 0.3);
    b.box(const V3(-1.0, 0, -1.2), const V3(0.08, 3.8, 2.4), kBlueBox, shine: 0.3);
    b.box(const V3(1.0, 0, -1.2), const V3(0.08, 3.8, 2.4), kBlueBox, shine: 0.3);
    b.box(const V3(0, 1.9, -1.2), const V3(2.0, 0.08, 2.4), kBlueBox, shine: 0.3);
    b.box(const V3(0, -1.9, -1.2), const V3(2.0, 0.08, 2.4), kBlueBox, shine: 0.3);
  }
  final ends = <V3>[];
  void cable(int id, List<V3> top) {
    b.id = id;
    final path = roundedPath(top, 0.9);
    if (showCable) b.tube(path, 0.2, kJacket, shine: 0.35, sides: 10, joints: false);
    ends.add(path.last);
  }
  if (kind == 'switch') {
    cable(idCable, const [V3(-0.6, 11, -3.4), V3(-0.6, 3.2, -3.2), V3(-0.6, 2.2, -1.9), V3(-0.6, 0.7, -1.5)]);
    cable(idCableB, const [V3(0.6, 11, -3.4), V3(0.6, 3.2, -3.2), V3(0.6, 2.2, -1.9), V3(0.6, 0.7, -1.5)]);
  } else {
    cable(idCable, const [V3(-0.35, 11, -3.4), V3(-0.35, 3.2, -3.2), V3(-0.35, 2.2, -1.9), V3(-0.35, 0.7, -1.5)]);
  }
  return ends;
}

/// Just the box and its cable (nothing wired yet), as it sits in the wall or the ceiling.
Scene3D buildBoxOnly(String kind, {bool cabled = true}) {
  final b = MeshBuilder();
  _boxAndCable(b, kind, cabled);
  return Scene3D(b.polys, info: const {idBox: ObjInfo('Electrical box', 'The box is ready. Pull a cable to it, then wire a device.', V3(0, 0, -1.2), 9)});
}

/// A finished device seen from the room: the cover plate over the outlet or switch, or the light or fan on the ceiling.
Scene3D buildFinished(String kind, {bool burnt = false}) {
  final b = MeshBuilder();
  final s = WiringState()
    ..stage = 2
    ..burnt = burnt;
  if (_ceiling(kind)) {
    _fixture(b, kind, s);
  } else {
    _device(b, kind, -0.25, burnt, faceOnly: true);
    _plate(b, burnt);
  }
  return Scene3D(b.polys);
}

/// Which wire an object number stands for (so a tap on a wire can take it off the screw).
String? wireKeyForId(String lesson, int id) => switch (id) {
      idBlack => lesson == 'switch' ? 'blackLine' : 'black',
      idBlack2 => 'blackLoad',
      idWhite => 'white',
      idGround => 'ground',
      _ => null,
    };

// ─── The device itself ───────────────────────────────────────────────────────

void _device(MeshBuilder b, String kind, double z, bool burnt, {bool faceOnly = false}) {
  final c = V3(_cx, _cy, z);
  final isSwitch = kind == 'switch';
  final isGfci = kind == 'gfci';
  final bodyCol = burnt ? kChar : (isSwitch ? const Color(0xFFF6F4EC) : kIvory);
  final bodyH = isGfci ? 3.1 : 2.95;
  b.bias = 0;
  b.id = idDevice;
  if (!faceOnly) {
    b.box(c + const V3(0, 0, -0.43), V3(1.5, bodyH, 1.3), bodyCol, shine: 0.25);
    b.bias = 0.15;
    b.id = idYoke;
    b.box(c + const V3(0, 0, 0.26), const V3(1.78, 4.25, 0.08), burnt ? const Color(0xFF59514B) : kSilver, shine: 0.8);
    b.box(c + const V3(0, 1.95, 0.31), const V3(0.6, 0.12, 0.03), const Color(0xFF3A3F47));
  }
  b.bias = 0.3;
  b.id = idFace;
  b.box(c + const V3(0, 0, 0.38), V3(1.3, isGfci ? 2.85 : 2.7, 0.16), bodyCol, shine: 0.3);
  if (isSwitch) {
    b.bias = 0.7;
    b.id = idButtons;
    b.box(c + const V3(0, 0.0, 0.62), const V3(0.82, 1.7, 0.3), burnt ? kChar : const Color(0xFFFFFDF6), shine: 0.35);
    b.box(c + const V3(0, 0.35, 0.78), const V3(0.82, 0.9, 0.05), burnt ? kChar : const Color(0xFFF2F0E6), shine: 0.35);
  } else {
    b.bias = 0.6;
    const dark = Color(0xFF17181B);
    for (final oy in isGfci ? const [1.0, -1.0] : const [0.72, -0.72]) {
      b.id = idFace;
      b.box(c + V3(-0.28, oy + 0.04, 0.47), const V3(0.07, 0.4, 0.03), dark);
      b.box(c + V3(0.28, oy + 0.04, 0.47), const V3(0.07, 0.3, 0.03), dark);
      b.cyl(c + V3(0, oy - 0.32, 0.46), c + V3(0, oy - 0.32, 0.5), 0.11, dark, sides: 10);
    }
    if (isGfci) {
      b.bias = 0.7;
      b.id = idButtons;
      b.box(c + const V3(-0.32, 0.0, 0.5), const V3(0.42, 0.34, 0.12), const Color(0xFF202226), shine: 0.3);
      b.box(c + const V3(0.32, 0.0, 0.5), const V3(0.42, 0.34, 0.12), const Color(0xFFD72A2A), shine: 0.3);
    }
  }
  if (faceOnly) {
    b.bias = 0;
    return;
  }
  // Screws on the sides: BRASS (gold) on one side, SILVER (nickel) on the other and GREEN for ground.
  final topY = isGfci ? 0.95 : 0.85, botY = isGfci ? -0.75 : -0.55;
  void screw(int id, double side, double y, Color col, Color plate, {bool taped = false}) {
    b.bias = 0.9;
    b.id = id;
    final x = c.x + side * 0.75;
    b.box(V3(x, c.y + y, c.z - 0.45), const V3(0.06, 0.62, 0.8), plate, shine: 0.7);
    b.cyl(V3(x, c.y + y, c.z - 0.45), V3(x + side * 0.22, c.y + y, c.z - 0.45), 0.17, col, shine: 0.9, sides: 12);
    b.box(V3(x + side * 0.23, c.y + y, c.z - 0.45), const V3(0.02, 0.28, 0.05), const Color(0xFF3A3F47));
    if (taped) {
      b.box(V3(x + side * 0.05, c.y + y, c.z - 0.45), const V3(0.34, 0.66, 0.9), const Color(0xFFFACC15), shine: 0.2);
    }
  }
  if (!isSwitch) {
    screw(idSilverTop, -1, topY, kNickel, kNickelPlate, taped: isGfci);
    screw(idSilverBottom, -1, botY, kNickel, kNickelPlate);
  }
  screw(idBrassTop, 1, topY, kBrass, kBrassPlate, taped: isGfci);
  screw(idBrassBottom, 1, botY, kBrass, kBrassPlate);
  b.bias = 0.9;
  b.id = idGreen;
  b.cyl(c + const V3(0, -1.78, 0.3), c + const V3(0, -1.78, 0.52), 0.18, kGreenScrew, shine: 0.7, sides: 12);
  b.box(c + const V3(0, -1.78, 0.53), const V3(0.26, 0.04, 0.02), const Color(0xFF14532D));
  b.box(c + const V3(0, -1.78, 0.27), const V3(0.8, 0.55, 0.05), kGreenPlate, shine: 0.6);
  b.bias = 0;
}

/// A ceiling light or a ceiling fan: the fixture, its three short wires and the wire nuts that join them to the house wires.
void _fixture(MeshBuilder b, String kind, WiringState s) {
  final fan = kind == 'fan';
  final z = _deviceZ(kind, s);
  b.bias = 0;
  b.id = idCanopy;
  b.cyl(V3(0, 0, z - 0.3), V3(0, 0, z + 0.3), fan ? 3.3 : 3.5, burntOr(s, const Color(0xFFEDEBE4)), shine: 0.45, sides: 20);
  b.id = idFixture;
  if (fan) {
    b.cyl(V3(0, 0, z + 0.3), V3(0, 0, z + 4.2), 0.45, const Color(0xFF8A7B6A), shine: 0.5, sides: 10);
    b.cyl(V3(0, 0, z + 4.2), V3(0, 0, z + 7.4), 3.6, const Color(0xFF8A6A47), shine: 0.5, sides: 18);
    b.cyl(V3(0, 0, z + 7.4), V3(0, 0, z + 8.6), 1.6, const Color(0xFFE8E4DA), shine: 0.7, sides: 14);
  } else {
    b.alpha = 0.92;
    b.ball(V3(0, 0, z + 1.2), 3.6, s.burnt ? kChar : const Color(0xFFF7F5EE), shine: 0.7, lat: 6, lon: 14);
    b.alpha = 1;
  }
  // The fixture's own short wires run to the wire nuts.
  b.id = idFixture;
  final pigtail = [
    (const Color(0xFF1E1E20), const V3(-1.5, 0, 0)),
    (kWhiteWire, const V3(0, 0, 0)),
    (const Color(0xFF2FA24F), const V3(1.5, 0, 0)),
  ];
  const pigtailIds = [idNutBlack, idNutWhite, idNutGround];
  var pi = 0;
  for (final (col, off) in pigtail) {
    b.id = s.stage == 0 ? pigtailIds[pi] : idFixture;
    pi++;
    final nz = s.stage == 0 ? z - 3.2 : z;
    b.tube([V3(off.x, -0.3, z - 0.3), V3(off.x, -0.3, nz + 0.4)], 0.07, col, shine: 0.3, sides: 6, joints: false);
  }
  if (s.stage == 0) {
    // Bare copper ends where the wires will meet, and the wire nuts once a wire is joined.
    for (final h in [(idNutBlack, const Color(0xFFF08A24)), (idNutWhite, const Color(0xFFD14B3A)), (idNutGround, const Color(0xFF2FA24F))]) {
      final p = hookupPoint(kind, h.$1, s);
      b.id = h.$1;
      b.bias = 0.8;
      b.cyl(p + const V3(0, 0, -0.2), p + const V3(0, 0, 0.3), 0.09, kCopper, shine: 0.6, sides: 6);
      if (s.attached.containsKey(h.$1)) {
        b.cyl(p + const V3(0, 0, -0.5), p + const V3(0, 0, 0.9), 0.4, h.$2, shine: 0.4, sides: 8, r1: 0.26);
      }
      b.bias = 0;
    }
  }
}

Color burntOr(WiringState s, Color c) => s.burnt ? kChar : c;

void _plate(MeshBuilder b, bool burnt) {
  b.bias = 0.4;
  b.id = idPlate;
  final col = burnt ? kChar : const Color(0xFFF8F6EE);
  const y0 = _cy;
  const z = 0.14;
  b.box(const V3(-1.0, y0, z), const V3(0.75, 4.5, 0.1), col, shine: 0.3);
  b.box(const V3(1.0, y0, z), const V3(0.75, 4.5, 0.1), col, shine: 0.3);
  b.box(const V3(0, y0 + 1.79, z), const V3(1.25, 1.0, 0.1), col, shine: 0.3);
  b.box(const V3(0, y0, z), const V3(1.25, 0.28, 0.1), col, shine: 0.3);
  b.box(const V3(0, y0 - 1.79, z), const V3(1.25, 1.0, 0.1), col, shine: 0.3);
  b.cyl(const V3(0, y0, z + 0.05), const V3(0, y0, z + 0.1), 0.1, kSilver, shine: 0.8, sides: 10);
  b.bias = 0;
}

void _tester(MeshBuilder b, bool live) {
  b.id = idTester;
  const y = _cy + 0.72;
  for (final x in const [-0.28, 0.28]) {
    b.cyl(V3(x, y, 0.2), V3(x, y, 1.9), 0.04, kSilver, shine: 0.8, sides: 6);
  }
  b.box(const V3(0, y, 2.35), const V3(1.2, 1.1, 0.8), const Color(0xFFF2C21B), shine: 0.35);
  b.ball(const V3(0, y + 0.1, 2.85), 0.2, live ? const Color(0xFFFF3B30) : const Color(0xFF5B1A17), shine: 0.9);
  if (live) {
    b.alpha = 0.35;
    b.ball(const V3(0, y + 0.1, 2.85), 0.5, const Color(0xFFFF3B30), shine: 0, lat: 4, lon: 8);
    b.alpha = 1;
  }
}
