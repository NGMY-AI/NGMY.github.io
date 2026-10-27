import 'package:flutter/material.dart';

import 'ngmy_3d.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Electrical lessons in 3D: a wall outlet, a light switch and a GFCI outlet.
// The wires are real colours (black is hot, white is neutral, bare copper is ground) and every
// screw on the device has its own place to be wired.
// ═════════════════════════════════════════════════════════════════════════════

const Color kDrywall = Color(0xFFE6E1D5);
const Color kWood = Color(0xFFC49A62);
const Color kBlueBox = Color(0xFF2C6BD6);
const Color kJacket = Color(0xFFE5B91E);
const Color kBlack = Color(0xFF1E1E20);
const Color kWhiteWire = Color(0xFFF1F1EA);
const Color kCopper = Color(0xFFC2763A);
const Color kBrass = Color(0xFFCDA033);
const Color kSilver = Color(0xFFCBD0D6);
const Color kGreenScrew = Color(0xFF2FA24F);
const Color kIvory = Color(0xFFF2EAD3);

// Object numbers.
const int idWall = 1, idStud = 2, idBox = 3, idCable = 4, idCableB = 5, idWireNut = 6;
const int idBlack = 10, idWhite = 11, idGround = 12, idBlack2 = 13;
const int idDevice = 20, idBrassTop = 21, idBrassBottom = 22, idSilverTop = 23, idSilverBottom = 24, idGreen = 25, idYoke = 26, idFace = 27, idButtons = 28;
const int idPlate = 30, idTester = 31;

/// A place on the device where a wire can be fastened.
class Hookup {
  const Hookup(this.id, this.name, this.accepts, this.hint, {this.taped = false});
  final int id;
  final String name;

  /// The wire kinds that belong here.
  final Set<String> accepts;
  final String hint;
  final bool taped;
}

/// What the learner has done so far in an electrical lesson.
class WiringState {
  bool power = true;
  final Map<int, String> attached = {};
  int stage = 0; // 0 wiring, 1 pushed into the box, 2 cover plate on
  bool testing = false;
  bool hints = false;
  bool labels = false;
}

class WireChoice {
  const WireChoice(this.key, this.label, this.color, this.ink);
  final String key;
  final String label;
  final Color color;
  final Color ink;
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
  WireChoice('black', 'Black · hot', Color(0xFF26262A), Colors.white),
  WireChoice('white', 'White · neutral', Color(0xFFF1F1EA), Color(0xFF111827)),
  WireChoice('ground', 'Bare copper · ground', Color(0xFFC2763A), Colors.white),
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
      Hookup(idBrassTop, 'Brass screw (top)', {'black'}, 'Brass screws are for the HOT wire (black).'),
      Hookup(idBrassBottom, 'Brass screw (bottom)', {'black'}, 'Brass screws are for the HOT wire (black).'),
      Hookup(idSilverTop, 'Silver screw (top)', {'white'}, 'Silver screws are for the NEUTRAL wire (white).'),
      Hookup(idSilverBottom, 'Silver screw (bottom)', {'white'}, 'Silver screws are for the NEUTRAL wire (white).'),
      Hookup(idGreen, 'Green ground screw', {'ground'}, 'The green screw is for the bare copper or green GROUND wire.'),
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
      WireChoice('blackLine', 'Black · from the breaker', Color(0xFF26262A), Colors.white),
      WireChoice('blackLoad', 'Black · to the light', Color(0xFF3A2E2E), Colors.white),
      WireChoice('ground', 'Bare copper · ground', Color(0xFFC2763A), Colors.white),
    ],
    hookups: const [
      Hookup(idBrassTop, 'Brass screw (top)', {'blackLine', 'blackLoad'}, 'Both black wires go on brass screws. It does not matter which one.'),
      Hookup(idBrassBottom, 'Brass screw (bottom)', {'blackLine', 'blackLoad'}, 'Both black wires go on brass screws. It does not matter which one.'),
      Hookup(idGreen, 'Green ground screw', {'ground'}, 'The green screw is for the bare copper ground wire.'),
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
      Hookup(idBrassTop, 'LOAD hot (brass, taped)', {}, 'LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.', taped: true),
      Hookup(idBrassBottom, 'LINE hot (brass)', {'black'}, 'The black (hot) wire from the breaker goes on the brass LINE screw.'),
      Hookup(idSilverTop, 'LOAD neutral (silver, taped)', {}, 'LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.', taped: true),
      Hookup(idSilverBottom, 'LINE neutral (silver)', {'white'}, 'The white (neutral) wire from the breaker goes on the silver LINE screw.'),
      Hookup(idGreen, 'Green ground screw', {'ground'}, 'The green screw is for the bare copper ground wire.'),
    ],
    wrongHint: (chip, h) => h.taped
        ? 'Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you.'
        : switch (chip) {
            'black' => 'The black (hot) wire goes on the BRASS LINE screw.',
            'white' => 'The white (neutral) wire goes on the SILVER LINE screw.',
            _ => 'The bare copper ground wire only goes on the GREEN screw.',
          },
  ),
];

ElectricalLesson electricalLesson(String id) => kElectricalLessons.firstWhere((l) => l.id == id);

/// Is every place that needs a wire wired the right way?
bool wiringComplete(ElectricalLesson lesson, WiringState s) {
  final needed = lesson.chips.map((c) => c.key).toSet();
  final have = s.attached.values.toSet();
  return needed.every(have.contains);
}

/// Tries to fasten [chip] on [h]. Returns null when it is right, or a plain-words reason when it is not.
String? tryFasten(ElectricalLesson lesson, WiringState s, String chip, Hookup h) {
  if (s.power && s.stage == 0) return 'STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly.';
  if (s.stage != 0) return 'The device is already in the box. Pull it out again to change the wires.';
  if (!h.accepts.contains(chip)) return lesson.wrongHint(chip, h);
  if (s.attached[h.id] != null) return 'That screw already has a wire. Tap the wire to take it off first.';
  if (s.attached.values.contains(chip)) return 'That wire is already fastened. Tap it to take it off if you want to move it.';
  s.attached[h.id] = chip;
  return null;
}

// ─── Building the scene ──────────────────────────────────────────────────────

const double _cx = 0, _cy = -0.2;

/// Where the device sits: out in front of the box while wiring, in the box after.
double _deviceZ(WiringState s) => s.stage == 0 ? 4.7 : -0.25;

V3 hookupPoint(String lesson, int id, WiringState s) {
  final z = _deviceZ(s);
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


Scene3D buildElectricalScene(ElectricalLesson lesson, WiringState s) {
  final b = MeshBuilder();
  final kind = lesson.id;
  // ── The wall ──
  b.id = idWall;
  b.box(const V3(-6.575, 0, -0.25), const V3(10.85, 18, 0.5), kDrywall, split: 3);
  b.box(const V3(6.575, 0, -0.25), const V3(10.85, 18, 0.5), kDrywall, split: 3);
  b.box(const V3(0, 5.5, -0.25), const V3(2.3, 7, 0.5), kDrywall, split: 2);
  b.box(const V3(0, -5.5, -0.25), const V3(2.3, 7, 0.5), kDrywall, split: 2);
  // The cut edge of the opening shows the white gypsum.
  b.id = idStud;
  b.box(const V3(-1.9, 0, -2.25), const V3(1.5, 18, 3.5), kWood, shine: 0.05, split: 3);
  b.box(const V3(11.25, 0, -2.25), const V3(1.5, 18, 3.5), kWood, shine: 0.05, split: 3);
  b.box(const V3(5.0, 8.6, -2.25), const V3(14, 1.5, 3.5), kWood, shine: 0.05, split: 2);
  // ── The blue plastic box ──
  b.id = idBox;
  b.box(const V3(0, 0, -2.4), const V3(2.0, 3.8, 0.08), kBlueBox, shine: 0.3);
  b.box(const V3(-1.0, 0, -1.2), const V3(0.08, 3.8, 2.4), kBlueBox, shine: 0.3);
  b.box(const V3(1.0, 0, -1.2), const V3(0.08, 3.8, 2.4), kBlueBox, shine: 0.3);
  b.box(const V3(0, 1.9, -1.2), const V3(2.0, 0.08, 2.4), kBlueBox, shine: 0.3);
  b.box(const V3(0, -1.9, -1.2), const V3(2.0, 0.08, 2.4), kBlueBox, shine: 0.3);
  // ── Cables ──
  final cableEnds = <V3>[];
  void cable(int id, double x, List<V3> top) {
    b.id = id;
    final path = roundedPath(top, 0.9);
    b.tube(path, 0.2, kJacket, shine: 0.35, sides: 10, joints: false);
    cableEnds.add(path.last);
  }
  if (kind == 'switch') {
    cable(idCable, -0.6, const [V3(-0.6, 11, -3.4), V3(-0.6, 3.2, -3.2), V3(-0.6, 2.2, -1.9), V3(-0.6, 0.7, -1.5)]);
    cable(idCableB, 0.6, const [V3(0.6, 11, -3.4), V3(0.6, 3.2, -3.2), V3(0.6, 2.2, -1.9), V3(0.6, 0.7, -1.5)]);
  } else {
    cable(idCable, -0.35, const [V3(-0.35, 11, -3.4), V3(-0.35, 3.2, -3.2), V3(-0.35, 2.2, -1.9), V3(-0.35, 0.7, -1.5)]);
  }
  // ── Wires ──
  const double wr = 0.085;
  void wire(int id, V3 start, V3 free, String key, Color insul) {
    b.id = id;
    final attachedTo = s.attached.entries.where((e) => e.value == key).toList();
    final isGround = key == 'ground';
    final col = isGround ? kCopper : insul;
    final shine = isGround ? 0.6 : 0.3;
    if (s.stage > 0) {
      // The wires are folded back behind the device.
      final end = start + const V3(0, -0.9, 1.1);
      b.tube(smoothPath([start, start + const V3(0, -0.5, 0.6), end], per: 4), wr, col, shine: shine, sides: 8, joints: false);
      return;
    }
    V3 target;
    if (attachedTo.isNotEmpty) {
      target = hookupPoint(kind, attachedTo.first.key, s);
      final mid = V3.lerp(start, target, 0.5) + V3(target.x > 0 ? 0.5 : -0.5, 0.2, 0.9);
      final pts = smoothPath([start, start + const V3(0, -0.7, 0.8), mid, target + V3(target.x > 0 ? 0.06 : -0.06, 0, 0.08), target], per: 5);
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
    // The two white wires are already joined with an orange wire nut.
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
  _device(b, kind, _deviceZ(s));
  // Hints: coloured balls on the places a wire can go.
  if (s.hints && s.stage == 0) {
    b.id = 0;
    b.alpha = 0.5;
    for (final h in lesson.hookups) {
      final p = hookupPoint(kind, h.id, s);
      final col = h.taped ? const Color(0xFFFACC15) : (h.accepts.contains('ground') ? const Color(0xFF22C55E) : (h.accepts.any((a) => a.startsWith('black')) ? const Color(0xFF9CA3AF) : Colors.white));
      b.ball(p + V3(p.x > 0.4 ? 0.12 : (p.x < -0.4 ? -0.12 : 0), 0, p.x.abs() < 0.4 ? 0.2 : 0), 0.36, col, shine: 0.1, lat: 4, lon: 8);
    }
    b.alpha = 1;
  }
  // ── Cover plate and tester ──
  if (s.stage >= 2) _plate(b);
  if (s.stage >= 2 && s.testing && kind != 'switch') _tester(b, s.power);

  final info = <int, ObjInfo>{
    idWall: const ObjInfo('Drywall', 'The wall surface. A hole is cut in it for the electrical box.', V3(0, 0, 0), 22),
    idStud: const ObjInfo('Wood stud', 'The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.', V3(-1.9, 0, -2), 16),
    idBox: const ObjInfo('Electrical box', 'A plastic box that holds the wire connections. Every connection must be inside a box, never loose in the wall.', V3(0, 0, -1.2), 9),
    idCable: ObjInfo(kind == 'switch' ? 'Cable from the breaker panel (LINE)' : 'NM-B cable (Romex)', 'The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.', V3(-0.4, 1.5, -1.8), 8),
    idCableB: const ObjInfo('Cable to the light (LOAD)', 'This cable carries the switched power on to the light. The black wire here only has power when the switch is on.', V3(0.6, 1.5, -1.8), 8),
    idBlack: ObjInfo('Black wire: hot', 'The hot wire brings the power from the breaker. It is the dangerous one. It goes on a brass screw.', V3(-0.8, -0.8, 1.2), 7),
    idBlack2: const ObjInfo('Black wire to the light', 'This black wire carries power to the light once the switch is on. It goes on the other brass screw.', V3(0.8, -0.8, 1.2), 7),
    idWhite: const ObjInfo('White wire: neutral', 'The neutral wire carries the power back to the panel. It goes on a silver screw.', V3(0, -0.8, 1.2), 7),
    idGround: const ObjInfo('Bare copper wire: ground', 'The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. It goes on the green screw.', V3(0.5, -0.8, 1.2), 7),
    idWireNut: const ObjInfo('Wire nut', 'A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.', V3(0, -1, -0.6), 5),
    idDevice: ObjInfo(kind == 'gfci' ? 'GFCI outlet' : (kind == 'switch' ? 'Light switch' : 'Receptacle (outlet)'), kind == 'gfci' ? 'It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second.' : (kind == 'switch' ? 'A rocker that opens and closes the black wire to the light.' : 'The outlet. Each side has two slots and a ground hole.'), V3(0, -0.2, _deviceZ(s)), 9),
    idBrassTop: const ObjInfo('Brass screw', 'Brass screws are for the HOT (black) wire.', V3(1.0, 0.6, 4.3), 5),
    idBrassBottom: const ObjInfo('Brass screw', 'Brass screws are for the HOT (black) wire.', V3(1.0, -0.8, 4.3), 5),
    idSilverTop: const ObjInfo('Silver screw', 'Silver screws are for the NEUTRAL (white) wire.', V3(-1.0, 0.6, 4.3), 5),
    idSilverBottom: const ObjInfo('Silver screw', 'Silver screws are for the NEUTRAL (white) wire.', V3(-1.0, -0.8, 4.3), 5),
    idGreen: const ObjInfo('Green ground screw', 'The green screw is for the bare copper ground wire.', V3(0, -1.9, 5.0), 5),
    idYoke: const ObjInfo('Mounting strap (yoke)', 'The metal strap with two screw slots. Long screws through the ears hold the device in the box.', V3(0, -0.2, 4.9), 7),
    idFace: const ObjInfo('Outlet face', 'Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.', V3(0, -0.2, 5.1), 6),
    idButtons: const ObjInfo('TEST and RESET buttons', 'Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.', V3(0, -0.2, 5.1), 5),
    idPlate: const ObjInfo('Cover plate', 'The plate covers the box and the edges of the drywall so nobody touches the wires.', V3(0, -0.2, 0.2), 8),
    idTester: const ObjInfo('Voltage tester', 'A tester that glows when it touches live power.', V3(0, 0.5, 2.0), 6),
  };

  final labels = <Label3D>[];
  if (s.labels && s.stage == 0) {
    final z = _deviceZ(s);
    labels.add(Label3D(V3(2.7, 0.55, z - 0.45), 'BRASS: hot', const Color(0xFF8A6A12)));
    labels.add(Label3D(V3(-2.9, 0.55, z - 0.45), 'SILVER: neutral', const Color(0xFF5B6470)));
    labels.add(Label3D(V3(0, -3.3, z + 0.6), 'GREEN: ground', const Color(0xFF1F7A3A)));
    if (kind == 'gfci') {
      labels.add(Label3D(V3(2.8, 1.9, z - 0.45), 'LOAD (taped)', const Color(0xFFB45309)));
      labels.add(Label3D(V3(2.6, -1.7, z - 0.45), 'LINE', const Color(0xFF1D4ED8)));
    }
  }
  if (s.power && s.stage == 0) labels.add(const Label3D(V3(-0.4, 4.2, -2.4), 'LIVE 120 V', Color(0xFFDC2626)));
  return Scene3D(b.polys, info: info, labels: labels);
}

// ─── The device itself ───────────────────────────────────────────────────────

void _device(MeshBuilder b, String kind, double z) {
  final c = V3(_cx, _cy, z);
  final isSwitch = kind == 'switch';
  final isGfci = kind == 'gfci';
  final bodyCol = isSwitch ? const Color(0xFFF6F4EC) : kIvory;
  final bodyH = isGfci ? 3.1 : 2.95;
  // The plastic body, behind the strap.
  b.id = idDevice;
  b.box(c + const V3(0, 0, -0.43), V3(1.5, bodyH, 1.3), bodyCol, shine: 0.25);
  // The metal strap with its two ears.
  b.bias = 0.15;
  b.id = idYoke;
  b.box(c + const V3(0, 0, 0.26), const V3(1.78, 4.25, 0.08), kSilver, shine: 0.8);
  b.box(c + const V3(0, 1.95, 0.31), const V3(0.6, 0.12, 0.03), const Color(0xFF3A3F47));
  // The raised face.
  b.bias = 0.3;
  b.id = idFace;
  b.box(c + const V3(0, 0, 0.38), V3(1.3, isGfci ? 2.85 : 2.7, 0.16), bodyCol, shine: 0.3);
  if (isSwitch) {
    // The rocker.
    b.bias = 0.7;
    b.id = idButtons;
    b.box(c + const V3(0, 0.0, 0.62), const V3(0.82, 1.7, 0.3), const Color(0xFFFFFDF6), shine: 0.35);
    b.box(c + const V3(0, 0.35, 0.78), const V3(0.82, 0.9, 0.05), const Color(0xFFF2F0E6), shine: 0.35);
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
  // Screws on the sides: brass on one side, silver on the other.
  final topY = isGfci ? 0.95 : 0.85, botY = isGfci ? -0.75 : -0.55;
  void screw(int id, double side, double y, Color col, {bool taped = false}) {
    b.bias = 0.9;
    b.id = id;
    final x = c.x + side * 0.75;
    b.box(V3(x, c.y + y, c.z - 0.45), const V3(0.05, 0.55, 0.75), col == kBrass ? const Color(0xFFB88A2E) : const Color(0xFFB4BAC2), shine: 0.7);
    b.cyl(V3(x, c.y + y, c.z - 0.45), V3(x + side * 0.2, c.y + y, c.z - 0.45), 0.16, col, shine: 0.85, sides: 12);
    b.box(V3(x + side * 0.21, c.y + y, c.z - 0.45), const V3(0.02, 0.26, 0.05), const Color(0xFF3A3F47));
    if (taped) {
      b.box(V3(x + side * 0.05, c.y + y, c.z - 0.45), const V3(0.34, 0.62, 0.86), const Color(0xFFFACC15), shine: 0.2);
    }
  }
  if (!isSwitch) {
    screw(idSilverTop, -1, topY, kSilver, taped: isGfci);
    screw(idSilverBottom, -1, botY, kSilver);
  }
  screw(idBrassTop, 1, topY, kBrass, taped: isGfci);
  screw(idBrassBottom, 1, botY, kBrass);
  // The green ground screw on the bottom ear.
  b.bias = 0.9;
  b.id = idGreen;
  b.cyl(c + const V3(0, -1.78, 0.3), c + const V3(0, -1.78, 0.5), 0.15, kGreenScrew, shine: 0.7, sides: 12);
  b.box(c + const V3(0, -1.78, 0.51), const V3(0.22, 0.04, 0.02), const Color(0xFF14532D));
  b.box(c + const V3(0, -1.78, 0.27), const V3(0.7, 0.5, 0.05), kSilver, shine: 0.8);
  b.bias = 0;
}

void _plate(MeshBuilder b) {
  b.bias = 0.4;
  b.id = idPlate;
  const col = Color(0xFFF8F6EE);
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


/// Which wire an object number stands for (so a tap on a wire can take it off the screw).
String? wireKeyForId(String lesson, int id) => switch (id) {
      idBlack => lesson == 'switch' ? 'blackLine' : 'black',
      idBlack2 => 'blackLoad',
      idWhite => 'white',
      idGround => 'ground',
      _ => null,
    };

