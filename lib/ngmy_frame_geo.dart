import 'dart:math' as math;

import 'ngmy_3d.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE FRAMED ROOM: four walls of studs, the plates, the ceiling joists, a door and a window, the breaker panel.
// Everything is in inches (the real size of the lumber), so a stud is 1.5 by 3.5 and the studs stand 16 inches apart.
// Used by the two big lessons: Wiring a house (no drywall) and Hanging drywall.
// ═════════════════════════════════════════════════════════════════════════════

const double kRW = 144, kRD = 120, kRH = 96;

/// A stud is 1.5 inches thick (along the wall) and 3.5 inches deep (into the room).
const double kStT = 1.5, kStD = 3.5;

/// The height of the holes the cable goes through, and the middle of the stud's depth.
const double kDrillY = 20, kMidD = 1.75;

const List<V3> _wStart = [V3(-72, 0, -60), V3(72, 0, -60), V3(72, 0, 60), V3(-72, 0, 60)];
const List<V3> _wAlong = [V3(1, 0, 0), V3(0, 0, 1), V3(-1, 0, 0), V3(0, 0, -1)];
const List<V3> _wIn = [V3(0, 0, 1), V3(-1, 0, 0), V3(0, 0, -1), V3(1, 0, 0)];

/// The four walls: 0 the panel wall, 1 the window wall, 2 the door wall, 3 the bare wall.
const List<String> kWallNames = ['the panel wall', 'the window wall', 'the door wall', 'the bare wall'];

double wallLen(int k) => k.isEven ? kRW : kRD;
V3 wallAlong(int k) => _wAlong[k];
V3 wallIn(int k) => _wIn[k];

/// A point on wall [k]: [u] along it from its start corner, [y] up, [depth] into the room from the outside face of the studs.
V3 wallPt(int k, double u, double y, double depth) => V3(_wStart[k].x + _wAlong[k].x * u + _wIn[k].x * depth, y, _wStart[k].z + _wAlong[k].z * u + _wIn[k].z * depth);

/// The size of a block on wall [k]: [along] the wall, [h] tall and [depth] into the room.
V3 wallSize(int k, double along, double h, double depth) => k.isEven ? V3(along, h, depth) : V3(depth, h, along);

/// The corner where wall [k] ends and the next wall begins, with both walls' 1.75 inch cable depth taken in.
V3 cornerAfter(int k, double y) => wallPt(k, wallLen(k), y, 0) + wallIn(k) * kMidD + wallIn((k + 1) % 4) * kMidD;

// ── The door and the window ──

class Opening {
  const Opening(this.name, this.wall, this.u0, this.u1, this.sill, this.top);
  final String name;
  final int wall;
  final double u0, u1, sill, top;
}

const Opening kDoor = Opening('door', 2, 31.5, 67.5, 0, 80.5);
const Opening kWindow = Opening('window', 1, 40, 76, 36, 72);
const List<Opening> kOpenings = [kDoor, kWindow];

// ── Where things are measured along the whole room, so a cable can go round it ──

const List<double> _off = [0, 144, 264, 408];
const double kPerim = 528;
double perim(int wall, double u) => _off[wall] + u;

/// The breaker panel: on the panel wall, between two studs.
const int kPanelWall = 0;
const double kPanelU = 24;
const double kPanelY0 = 46, kPanelY1 = 72;

// ── The pieces of wood ──

const int idStud0 = 1000, idBottom0 = 2000, idTop0 = 2100, idPanel = 2200, idHeader0 = 2300, idJoist0 = 3000, idBox0 = 4000;

class Stud {
  const Stud(this.id, this.wall, this.u, this.y0, this.y1, this.kind);
  final int id, wall;
  final double u, y0, y1;

  /// corner, common, king, jack or cripple.
  final String kind;
  double get p => perim(wall, u);

  /// Is there wood at the height the cable goes through?
  bool get atCableHeight => y0 <= kDrillY && y1 >= kDrillY;
  bool get takesBox => kind != 'cripple';
  String get label => switch (kind) {
        'corner' => 'Corner stud',
        'king' => 'King stud',
        'jack' => 'Jack stud',
        'cripple' => 'Short (cripple) stud',
        _ => 'Stud',
      };
}

List<Stud> _buildStuds() {
  final out = <Stud>[];
  void add(int k, double u, double y0, double y1, String kind) => out.add(Stud(idStud0 + out.length, k, u, y0, y1, kind));
  for (var k = 0; k < 4; k++) {
    final len = wallLen(k);
    add(k, 0.75, 1.5, 93, 'corner');
    add(k, len - 0.75, 1.5, 93, 'corner');
    for (var u = 16.0; u < len - 8; u += 16) {
      final inDoor = k == kDoor.wall && u > kDoor.u0 - 4 && u < kDoor.u1 + 4;
      final inWindow = k == kWindow.wall && u > kWindow.u0 - 4 && u < kWindow.u1 + 4;
      if (inDoor || inWindow) continue;
      add(k, u, 1.5, 93, 'common');
    }
  }
  // The door: a king stud and a jack stud each side (the jack carries the header), and a short stud over the header.
  add(2, kDoor.u0 - 2.25, 1.5, 93, 'king');
  add(2, kDoor.u1 + 2.25, 1.5, 93, 'king');
  add(2, kDoor.u0 - 0.75, 1.5, kDoor.top, 'jack');
  add(2, kDoor.u1 + 0.75, 1.5, kDoor.top, 'jack');
  add(2, (kDoor.u0 + kDoor.u1) / 2, kDoor.top + 7.5, 93, 'cripple');
  // The window: the same, with short studs under the sill and over the header.
  add(1, kWindow.u0 - 2.25, 1.5, 93, 'king');
  add(1, kWindow.u1 + 2.25, 1.5, 93, 'king');
  add(1, kWindow.u0 - 0.75, 1.5, kWindow.top, 'jack');
  add(1, kWindow.u1 + 0.75, 1.5, kWindow.top, 'jack');
  add(1, 48, 1.5, kWindow.sill, 'cripple');
  add(1, 64, 1.5, kWindow.sill, 'cripple');
  add(1, 58, kWindow.top + 7.5, 93, 'cripple');
  return out;
}

final List<Stud> kStuds = _buildStuds();

Stud? studById(int id) {
  final i = id - idStud0;
  return i >= 0 && i < kStuds.length ? kStuds[i] : null;
}

/// The top plate is in pieces of 16 inches, so a hole can be drilled in the piece over a switch.
int topSegId(int wall, int seg) => idTop0 + wall * 20 + seg;
int topSegCount(int wall) => (wallLen(wall) / 16).ceil();
({int wall, int seg})? topSegOf(int id) {
  final i = id - idTop0;
  if (i < 0 || i >= 80) return null;
  final w = i ~/ 20, s = i % 20;
  return s < topSegCount(w) ? (wall: w, seg: s) : null;
}

/// The middle of a piece of top plate, along its wall.
double topSegU(int wall, int seg) => math.min(wallLen(wall), seg * 16 + 8.0);

// ── The ceiling joists: across the room (north to south), 10 of them ──

const int kJoists = 10;
double joistX(int i) => -70 + i * (140 / (kJoists - 1));

bool isStudId(int id) => studById(id) != null;
bool isJoistId(int id) => id >= idJoist0 && id < idJoist0 + kJoists;
bool isBoxId(int id) => id >= idBox0 && id < idBox0 + 100;

// ── The tools lying on the floor: tap one to pick it up ──

const int idPropRoll = 7000, idPropDrill = 7001, idPropStack = 7010, idPropMud = 7011, idPropTape = 7012, idPropKnife = 7013, idPropGun = 7014, idPropSquare = 7015, idPropPole = 7016, idPropBead = 7017, idPropTray = 7018, idPropSaw = 7019;

/// The tool each thing on the floor is.
const Map<int, String> kPropTool = {
  idPropRoll: 'cable',
  idPropDrill: 'drill',
  idPropStack: 'sheet',
  idPropMud: 'mud',
  idPropTape: 'tape',
  idPropKnife: 'mud',
  idPropGun: 'screw',
  idPropSquare: 'cut',
  idPropPole: 'sand',
  idPropBead: 'bead',
  idPropTray: 'paint',
  idPropSaw: 'saw',
};

const Map<int, (String, String, V3)> kPropInfo = {
  idPropRoll: ('Roll of cable', 'Yellow 12 gauge cable for the outlets and white 14 gauge for the light. Tap it to pick up the cable roll, then tap a box.', V3(65, 38, 40)),
  idPropDrill: ('Cordless drill', 'Drills the holes in the studs for the cable. Tap it to pick it up, then tap a stud.', V3(65, 55, 40)),
  idPropStack: ('Stack of drywall', 'Sheets of half inch drywall, 4 by 8 feet. Tap them to pick up a sheet, then tap where it goes.', V3(-40, 5, 4)),
  idPropMud: ('Bucket of joint compound', 'The mud: it fills the joints and covers the screw heads. Tap it to pick up the mud and the knife.', V3(40, 8, 36)),
  idPropTape: ('Paper tape', 'Paper tape is pressed into the first coat of mud over every joint. Tap it to pick it up.', V3(56, 3, 24)),
  idPropKnife: ('Taping knife', 'Spreads the mud. Tap it to pick up the mud and the knife.', V3(26, 1.5, 46)),
  idPropGun: ('Screw gun', 'Drives the drywall screws just under the paper. Tap it to pick it up, then tap a hung sheet.', V3(-2, 3, 44)),
  idPropSquare: ('T-square and knife', 'A straight edge to score a sheet against before it is snapped. Tap it to pick up the cutter.', V3(8, 1.5, -34)),
  idPropPole: ('Sanding pole', 'Sands the dry mud smooth. Tap it to pick up the sander.', V3(14, 1.5, -46)),
  idPropBead: ('Corner bead', 'Metal angle for the corners of the door and the window. Tap it to pick it up.', V3(60, 1.5, -8)),
  idPropTray: ('Paint tray and roller', 'Primer on the roller seals the paper and the mud so they look the same. Tap it to pick up the roller.', V3(-8, 2, -22)),
  idPropSaw: ('Drywall saw', 'A pointed saw to cut the holes for the boxes, the door and the window. Tap it to pick it up.', V3(20, 1, 12)),
};

/// The two knockouts of a box (round tabs in its top and bottom that are broken out for a cable to go in): their ids, from the box's own number.
const int idKo0 = 4200;
const int idPlug0 = 4400;

/// The plug and cord of what is plugged into a box: a tap pulls it out.
int plugId(int boxId) => idPlug0 + (boxId - idBox0);
bool isPlugId(int id) => id >= idPlug0 && id < idPlug0 + 100;
int plugBoxOf(int id) => idBox0 + (id - idPlug0);
int koId(int boxId, int k) => idKo0 + (boxId - idBox0) * 2 + k;
bool isKoId(int id) => id >= idKo0 && id < idKo0 + 200;
int koBoxOf(int id) => idBox0 + (id - idKo0) ~/ 2;
int koIndexOf(int id) => (id - idKo0) % 2;
