import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_construction_plumbjob.dart';
import 'ngmy_construction_project.dart';

// ═════════════════════════════════════════════════════════════════════════════
// MY HOUSE: a finished house with five bedrooms, three bathrooms, a kitchen, a living room and a hall.
// Furniture, walls, floors and doors can be changed with buttons. Some rooms still need wiring or plumbing:
// they show a signal, and the job opens the same hands-on wiring or plumbing job as the rest of the lab.
// ═════════════════════════════════════════════════════════════════════════════

/// A piece of movable furniture.
class Furn {
  Furn(this.id, this.kind, this.x, this.z, {this.rot = 0, this.color = 0});
  final int id;
  final String kind;
  double x, z;

  /// Quarter turns (0 to 3).
  int rot;
  int color;
}

/// What a kind of furniture is called and how big it is on the floor (width, depth).
class FurnKind {
  const FurnKind(this.name, this.emoji, this.w, this.d);
  final String name, emoji;
  final double w, d;
}

const Map<String, FurnKind> kFurnKinds = {
  'bed': FurnKind('Bed', '🛏️', 60, 80),
  'nightstand': FurnKind('Night table', '🪑', 16, 16),
  'wardrobe': FurnKind('Wardrobe', '🚪', 44, 20),
  'desk': FurnKind('Desk', '🖥️', 48, 24),
  'rug': FurnKind('Rug', '🟥', 70, 50),
  'sofa': FurnKind('Sofa', '🛋️', 80, 32),
  'armchair': FurnKind('Armchair', '💺', 30, 30),
  'coffee': FurnKind('Coffee table', '☕', 40, 24),
  'tvstand': FurnKind('TV stand', '📺', 56, 18),
  'dining': FurnKind('Dining table', '🍽️', 56, 36),
  'chair': FurnKind('Chair', '🪑', 18, 18),
  'plant': FurnKind('Plant', '🪴', 14, 14),
  'lamp': FurnKind('Floor lamp', '💡', 10, 10),
  'console': FurnKind('Console table', '🗄️', 44, 14),
  'shelf': FurnKind('Bookshelf', '📚', 36, 12),
};

const List<Color> kFurnColors = [Color(0xFF8B5E3C), Color(0xFF5E6E84), Color(0xFF9A4F4F), Color(0xFF4F7A5E), Color(0xFFD9C9A8), Color(0xFF3F3F46)];
const List<String> kFurnColorNames = ['Walnut', 'Blue grey', 'Brick red', 'Sage green', 'Sand', 'Charcoal'];

const List<Color> kWallColors = [Color(0xFFEDE6D6), Color(0xFFCFE3EA), Color(0xFFE9D3D3), Color(0xFFD5E4D0), Color(0xFFF3E3A7), Color(0xFFB9C3DD), Color(0xFFE8E8E8), Color(0xFF8FA3A8)];
const List<String> kWallColorNames = ['Cream', 'Sky', 'Blush', 'Mint', 'Butter', 'Periwinkle', 'White', 'Slate'];

class FloorStyle {
  const FloorStyle(this.name, this.color, this.kind);
  final String name;
  final Color color;

  /// wood, carpet or tile.
  final String kind;
}

const List<FloorStyle> kFloorStyles = [
  FloorStyle('Oak', Color(0xFFB08A5B), 'wood'),
  FloorStyle('Dark wood', Color(0xFF6B4A32), 'wood'),
  FloorStyle('Grey carpet', Color(0xFF8D9096), 'carpet'),
  FloorStyle('Blue carpet', Color(0xFF5B7FA6), 'carpet'),
  FloorStyle('Cream carpet', Color(0xFFD8CDB4), 'carpet'),
  FloorStyle('White tile', Color(0xFFE4E7EA), 'tile'),
  FloorStyle('Slate tile', Color(0xFF6B7380), 'tile'),
];

const List<Color> kCeilColors = [Color(0xFFF4F1EA), Color(0xFFEAF2F7), Color(0xFFF6E8E8), Color(0xFFF3EBC8)];

/// Something that can be plugged into a wall outlet in the house.
class HomeAppliance {
  const HomeAppliance(this.key, this.name, this.emoji, {this.tvWidth = 0});
  final String key, name, emoji;

  /// For a TV: how wide the screen is, in the house's inches.
  final double tvWidth;
  bool get isTv => tvWidth > 0;
}

const List<HomeAppliance> kHomeAppliances = [
  HomeAppliance('bangtv', 'Beovision TV 77"', '📺', tvWidth: 66),
  HomeAppliance('sonytv', 'Sony Bravia 75"', '📺', tvWidth: 64),
  HomeAppliance('lgtv', 'LG OLED 65"', '📺', tvWidth: 56),
  HomeAppliance('tv', 'Samsung Neo QLED 55"', '📺', tvWidth: 48),
  HomeAppliance('appletv', 'Apple TV 4K 50"', '📺', tvWidth: 44),
  HomeAppliance('lamp', 'Table lamp', '💡'),
  HomeAppliance('toaster', 'Toaster', '🍞'),
  HomeAppliance('hairdryer', 'Hair dryer', '💇'),
];

HomeAppliance applianceByKey(String k) => kHomeAppliances.firstWhere((a) => a.key == k, orElse: () => kHomeAppliances[3]);

/// A door in a wall: which wall, how far along it, and which room it leads to.
class HDoor {
  const HDoor(this.wall, this.offset, this.to);
  final String wall; // back, left or right
  final double offset;
  final int to;
}

class HRoom {
  HRoom(this.id, this.name, this.kind, this.gx, this.gy, this.gw, this.gh, this.doors);
  final int id;
  final String name;

  /// bedroom, bathroom, kitchen, living or hall.
  final String kind;

  /// Place and size on the little map (in cells).
  final int gx, gy, gw, gh;
  final List<HDoor> doors;

  final List<Furn> furn = [];
  int nextFurn = 1;
  final List<int> wallColor = [0, 0, 0]; // back, left, right
  int floor = 0;
  int ceiling = 0;
  final Set<int> openDoors = {};

  bool wiringNeeded = false;
  bool plumbNeeded = false;
  RoomProject? wiring;
  PlumbJob? plumb;

  /// What is plugged into the two wall outlets (0 and 1), whether the ceiling light or fan is on, and which one hangs there.
  final Map<int, String> plugged = {};
  bool lightOn = false;
  String ceilingFix = 'light';

  double get w => switch (kind) { 'bathroom' => 110, 'kitchen' => 140, 'living' => 180, 'hall' => 240, 'outside' => 300, _ => 130 };
  double get d => switch (kind) { 'bathroom' => 100, 'kitchen' => 110, 'living' => 120, 'hall' => 64, 'outside' => 200, _ => 112 };
  bool get indoor => kind != 'outside';
  static const double h = 96;

  bool get hasPlumbing => kind == 'bathroom' || kind == 'kitchen';
  // Once a job has been opened it decides: pull a device out of a finished room and the room is no longer wired.
  bool get wired => !indoor || (wiring?.devicesDone ?? !wiringNeeded);
  bool get plumbed => !hasPlumbing || (plumb?.done ?? !plumbNeeded);
  bool get finished => wired && plumbed;

  Furn? furnById(int id) {
    for (final f in furn) {
      if (f.id == id) return f;
    }
    return null;
  }

  Furn add(String kind, {double? x, double? z}) {
    final f = Furn(nextFurn++, kind, x ?? 0, z ?? d * 0.6);
    furn.add(f);
    clamp(f);
    return f;
  }

  /// Keeps a piece of furniture inside the room.
  void clamp(Furn f) {
    final k = kFurnKinds[f.kind]!;
    final turned = f.rot.isOdd;
    final fw = turned ? k.d : k.w, fd = turned ? k.w : k.d;
    f.x = f.x.clamp(-w / 2 + fw / 2 + 1, w / 2 - fw / 2 - 1);
    f.z = f.z.clamp(fd / 2 + 1, d - fd / 2 - 1);
  }
}

class HomeProject {
  HomeProject({this.seed = 1}) {
    _build();
  }

  final int seed;
  bool practice = false;
  late final List<HRoom> rooms;
  int current = 0;

  /// The house you were in is kept while the app is open.
  static HomeProject? session;

  static const List<String> _bedNames = ['Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Bedroom 5'];

  void _build() {
    final r = math.Random(seed);
    // The map is 9 cells wide and 5 tall. The hall runs along the middle.
    HDoor toHall(double off) => HDoor('back', off, 5);
    // The hall's doors: eight along the back wall (the rooms above and below it) and one at each end.
    const hallTargets = [0, 1, 2, 3, 4, 6, 7, 8];
    final hallDoors = <HDoor>[
      for (var i = 0; i < hallTargets.length; i++) HDoor('back', -98.0 + i * 28, hallTargets[i]),
      const HDoor('left', 32, 9),
      const HDoor('right', 32, 10),
    ];
    final list = <HRoom>[
      HRoom(0, _bedNames[0], 'bedroom', 0, 0, 2, 2, [toHall(-30)]),
      HRoom(1, _bedNames[1], 'bedroom', 2, 0, 2, 2, [toHall(-30)]),
      HRoom(2, 'Bathroom 1', 'bathroom', 4, 0, 1, 2, [toHall(-30)]),
      HRoom(3, _bedNames[2], 'bedroom', 5, 0, 2, 2, [toHall(-30)]),
      HRoom(4, 'Bathroom 2', 'bathroom', 7, 0, 2, 2, [toHall(-30)]),
      HRoom(5, 'Hall', 'hall', 0, 2, 9, 1, hallDoors),
      HRoom(6, _bedNames[3], 'bedroom', 0, 3, 2, 2, [toHall(-30)]),
      HRoom(7, _bedNames[4], 'bedroom', 2, 3, 2, 2, [toHall(-30)]),
      HRoom(8, 'Bathroom 3', 'bathroom', 4, 3, 1, 2, [toHall(-30)]),
      HRoom(9, 'Kitchen', 'kitchen', 5, 3, 2, 2, [HDoor('back', -50, 5), const HDoor('right', 40, 10)]),
      HRoom(10, 'Living room', 'living', 7, 3, 2, 2, [HDoor('back', -70, 5), const HDoor('left', 40, 9), const HDoor('back', 56, 11)]),
      HRoom(11, 'Garden', 'outside', 0, 5, 9, 1, [const HDoor('back', 0, 10)]),
    ];
    rooms = list;
    // What is wrong in this house: a different mix every time.
    for (final room in rooms) {
      if (!room.indoor) continue;
      room.ceilingFix = room.kind == 'bedroom' ? 'fan' : 'light';
      room.wiringNeeded = r.nextDouble() < 0.6;
      room.plumbNeeded = room.hasPlumbing && r.nextDouble() < 0.7;
      room.wallColor.fillRange(0, 3, r.nextInt(kWallColors.length));
      room.floor = switch (room.kind) {
        'bathroom' => 5 + r.nextInt(2),
        'kitchen' => 5 + r.nextInt(2),
        'bedroom' => 2 + r.nextInt(3),
        'living' => r.nextInt(2),
        _ => r.nextInt(2),
      };
      room.ceiling = r.nextInt(kCeilColors.length);
      _furnish(room);
    }
    // At least one wiring job and one plumbing job, whatever the dice said.
    rooms[3].wiringNeeded = true;
    rooms[2].plumbNeeded = true;
  }

  void _furnish(HRoom r) {
    final w2 = r.w / 2;
    switch (r.kind) {
      case 'bedroom':
        r.add('rug', x: 0, z: r.d * 0.55);
        r.add('bed', x: 0, z: 46);
        r.add('nightstand', x: -42, z: 14);
        r.add('nightstand', x: 42, z: 14);
        r.add('wardrobe', x: -w2 + 12, z: 76).rot = 1;
        r.add('desk', x: w2 - 14, z: 80).rot = 3;
      case 'living':
        r.add('rug', x: 0, z: 70);
        r.add('sofa', x: 0, z: 100);
        r.add('coffee', x: 0, z: 68);
        r.add('tvstand', x: 0, z: 14);
        r.add('armchair', x: -60, z: 60);
        r.add('plant', x: 76, z: 14);
        r.add('lamp', x: -76, z: 14);
      case 'kitchen':
        r.add('dining', x: 0, z: 78);
        r.add('chair', x: -24, z: 78).rot = 1;
        r.add('chair', x: 24, z: 78).rot = 3;
        r.add('plant', x: 58, z: 20);
      case 'bathroom':
        r.add('rug', x: 0, z: 62).rot = 0;
        r.add('plant', x: r.w / 2 - 12, z: r.d - 12);
      case 'hall':
        r.add('rug', x: 0, z: 36);
        r.add('plant', x: 108, z: 50);
      default:
    }
  }

  HRoom get room => rooms[current];

  List<HRoom> get indoor => [for (final e in rooms) if (e.indoor) e];
  int get wiredCount => indoor.where((e) => e.wired).length;
  int get plumbedCount => rooms.where((e) => e.hasPlumbing && e.plumbed).length;
  int get plumbTotal => rooms.where((e) => e.hasPlumbing).length;
  int get finishedCount => indoor.where((e) => e.finished).length;
}

/// Which wiring job a room gets: bedrooms a fan, the kitchen and bathrooms water-safe GFCI outlets.
int wiringKindFor(HRoom r) => switch (r.kind) { 'bedroom' => 1, 'kitchen' || 'bathroom' => 2, _ => 0 };
