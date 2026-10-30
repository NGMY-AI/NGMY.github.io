import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_construction_electrical.dart';
import 'ngmy_construction_electrical_more.dart';
import 'ngmy_construction_plumbing.dart';
import 'ngmy_construction_plumbjob.dart';
import 'ngmy_construction_project.dart';
import 'ngmy_electronics_screens.dart';

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
  'bed': FurnKind('Bed', '🛏️', 48, 64),
  'nightstand': FurnKind('Night table', '🪑', 13, 13),
  'wardrobe': FurnKind('Wardrobe', '🚪', 35, 16),
  'desk': FurnKind('Desk', '🖥️', 38, 19),
  'rug': FurnKind('Rug', '🟥', 56, 40),
  'sofa': FurnKind('Sofa', '🛋️', 64, 26),
  'armchair': FurnKind('Armchair', '💺', 24, 24),
  'coffee': FurnKind('Coffee table', '☕', 32, 19),
  'tvstand': FurnKind('Media cabinet', '🗄️', 45, 14),
  'dining': FurnKind('Dining table', '🍽️', 45, 29),
  'chair': FurnKind('Chair', '🪑', 14, 14),
  'plant': FurnKind('Plant', '🪴', 14, 14),
  'lamp': FurnKind('Floor lamp', '💡', 10, 10),
  'console': FurnKind('Console table', '🗄️', 35, 11),
  'shelf': FurnKind('Bookshelf', '📚', 29, 10),
  'tree': FurnKind('Tree', '🌳', 36, 36),
  'pine': FurnKind('Pine tree', '🌲', 30, 30),
  'bush': FurnKind('Bush', '🌿', 18, 18),
  'flowers': FurnKind('Flowers', '🌷', 22, 22),
  'fence': FurnKind('Fence', '🚧', 64, 6),
  'lamppost': FurnKind('Street lamp', '🏮', 8, 8),
  'bench': FurnKind('Bench', '🪑', 44, 16),
  'car': FurnKind('Car', '🚗', 84, 40),
  'road': FurnKind('Road', '🛣️', 40, 40),
  'roundabout': FurnKind('Roundabout', '🔄', 80, 80),
  'roadturn': FurnKind('Road corner', '↪️', 40, 40),
  'roadtee': FurnKind('Road T-junction', '⊤', 40, 40),
  'roadcross': FurnKind('Crossroads', '✚', 40, 40),
  'house2': FurnKind('House', '🏠', 108, 90),
  'bighouse': FurnKind('Big house', '🏢', 158, 120),
  'pole': FurnKind('Electric pole', '🔌', 10, 10),
  'crate': FurnKind('Crate', '📦', 28, 28),
  'billboard': FurnKind('Billboard', '🪧', 72, 10),
  'tower': FurnKind('Office tower', '🏢', 100, 70),
  'hq': FurnKind('NGMY company', '🏛️', 170, 90),
  'store': FurnKind('NGMY store', '🏬', 130, 80),
  'gasstation': FurnKind('NGMY gas station', '⛽', 150, 90),
  'dmv': FurnKind('NGMY licence office', '🪪', 130, 80),
  'ubstation': FurnKind('NGMY Uber', '🚖', 120, 60),
  'townsign': FurnKind('NGMY Town sign', '🪧', 380, 14),
  'cornersign': FurnKind('NGMY Town billboard', '🪧', 150, 10),
  'adboard': FurnKind('NGMY ad billboard', '📺', 330, 14),
  'shop': FurnKind('Shop', '🏪', 126, 90),
  'hospital': FurnKind('Hospital', '🏥', 165, 105),
  'firestation': FurnKind('Fire station', '🚒', 135, 96),
  'school': FurnKind('School', '🏫', 186, 105),
  'firetruck': FurnKind('Fire truck', '🚒', 96, 40),
  'ambulance': FurnKind('Ambulance', '🚑', 84, 40),
  'dog': FurnKind('Dog', '🐕', 22, 10),
  'cat': FurnKind('Cat', '🐈', 16, 8),
  'cow': FurnKind('Cow', '🐄', 38, 16),
  'sheep': FurnKind('Sheep', '🐑', 26, 14),
  'chicken': FurnKind('Chicken', '🐔', 12, 8),
  'horse': FurnKind('Horse', '🐎', 46, 16),
  'pond': FurnKind('Pond', '💧', 80, 56),
  'swing': FurnKind('Swing set', '🎠', 56, 40),
  'shed': FurnKind('Shed', '🛖', 50, 42),
  'doghouse': FurnKind('Dog house', '🐕', 24, 22),
};

/// What can be put in the garden, and what goes inside the rooms.
const List<String> kOutdoorFurn = ['road', 'roundabout', 'roadturn', 'roadtee', 'roadcross', 'house2', 'bighouse', 'billboard', 'tower', 'hq', 'store', 'gasstation', 'dmv', 'ubstation', 'townsign', 'cornersign', 'adboard', 'shop', 'hospital', 'firestation', 'school', 'car', 'firetruck', 'ambulance', 'dog', 'cat', 'cow', 'sheep', 'chicken', 'horse', 'tree', 'pine', 'bush', 'flowers', 'fence', 'lamppost', 'bench', 'pond', 'swing', 'shed', 'doghouse'];

/// Road pieces snap to a grid of this size, so neighbours always line up.
const double kRoadGrid = 40;
const List<String> kRoadKinds = ['road', 'roadturn', 'roadtee', 'roadcross'];
const List<String> kBuildingKinds = ['house2', 'shop', 'hospital', 'firestation', 'school'];
const List<String> kAnimalKinds = ['dog', 'cat', 'cow', 'sheep', 'chicken', 'horse'];

/// Flat things lie on the ground (you walk over them and cars drive over them): they are drawn before everything that stands on them.
const List<String> kFlatKinds = ['rug', 'road', 'roundabout', 'roadturn', 'roadtee', 'roadcross', 'pond', 'flowers'];

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
  const HomeAppliance(this.key, this.name, this.emoji, {this.tvWidth = 0, this.fullWall = false});
  final String key, name, emoji;

  /// For a TV: how wide the screen is, in the house's inches.
  final double tvWidth;

  /// A TV that takes the whole free stretch of the wall.
  final bool fullWall;
  bool get isTv => tvWidth > 0 || fullWall;

  /// Too big to stand on the floor: it hangs on the wall.
  bool get wallOnly => tvWidth > 70 || fullWall;
}

const List<HomeAppliance> kHomeAppliances = [
  HomeAppliance('wall', 'Whole-wall TV', '🎬', fullWall: true),
  HomeAppliance('tv200', 'Cinema 200"', '🎬', tvWidth: 175),
  HomeAppliance('tv150', 'Cinema 150"', '🎬', tvWidth: 130),
  HomeAppliance('tv100', 'Giant 100"', '📺', tvWidth: 89),
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

/// Where a wall TV is and how big it is: width, height, centre along the wall and centre height. It is as big as the free stretch
/// of wall allows (between the doors, clear of the vanity in a bathroom), and in the hall it hangs on an end wall.
class WallTvBox {
  const WallTvBox(this.w, this.h, this.cx, this.cy);
  final double w, h, cx, cy;
}

WallTvBox wallTvBox(HRoom r, HomeAppliance a, {int sub = 0}) {
  double heightFor(double tw) => math.min(tw * 0.5625, tw > 60 ? 62.0 : 99.0);
  double centreY(double th) => th > 40 ? 30 + th / 2 : 58;
  if (r.kind != 'hall' && r.tvWall != 'back') {
    // A lesson room's TV on a side wall: as big as the wall allows.
    final tw = a.fullWall ? r.d - 14 : math.min(a.tvWidth, r.d - 14);
    final th = heightFor(tw);
    return WallTvBox(tw, th, r.d / 2, centreY(th));
  }
  if (r.kind == 'hall' && sub < 2) {
    // On an end wall, facing into the hall.
    final tw = a.fullWall ? r.d - 14 : math.min(a.tvWidth, r.d - 14);
    final th = heightFor(tw);
    return WallTvBox(tw, th, r.d / 2, centreY(th));
  }
  if (r.kind == 'hall') {
    // A video wall: on each side of the three doors, a big TV that fills the whole stretch of wall from the skirting to the crown.
    final doors = [for (final d in r.doors) if (d.wall == 'back' && !d.hidden) d.offset];
    final lo = doors.isEmpty ? -40.0 : doors.reduce(math.min) - 19 - 8, hi = doors.isEmpty ? 40.0 : doors.reduce(math.max) + 19 + 8;
    final edge = r.w / 2 - 8;
    final tw = edge - hi;
    return WallTvBox(tw, HRoom.h - 24, sub == 2 ? (-edge + lo) / 2 : (hi + edge) / 2, (HRoom.h - 24) / 2 + 8);
  }
  var lo = -r.w / 2 + 6, hi = r.w / 2 - 6;
  if (r.kind == 'bathroom' && !r.big) hi = 14;
  final spans = [for (final d in r.doors) if (d.wall == 'back' && !d.hidden) (d.offset - 19, d.offset + 19)]..sort((x, y) => x.$1.compareTo(y.$1));
  var bestA = lo, bestB = lo, cursor = lo;
  void consider(double a0, double b0) {
    if (b0 - a0 > bestB - bestA) {
      bestA = a0;
      bestB = b0;
    }
  }

  for (final (s0, s1) in spans) {
    if (s0 > cursor) consider(cursor, math.min(s0, hi));
    cursor = math.max(cursor, s1);
  }
  if (cursor < hi) consider(cursor, hi);
  final free = math.max(30.0, bestB - bestA - 4);
  final tw = a.fullWall ? free : math.min(a.tvWidth, free);
  final th = heightFor(tw);
  return WallTvBox(tw, th, (bestA + bestB) / 2, centreY(th));
}

/// A door in a wall: which wall, how far along it, and which room it leads to.
class HDoor {
  const HDoor(this.wall, this.offset, this.to, {this.hidden = false});

  /// A door that is only there for the map and the tour (the hall shows just three doors): it is not drawn and cannot be tapped.
  final bool hidden;
  final String wall; // back, left or right
  final double offset;
  final int to;
}

/// An outlet, GFCI or switch the visitor added to a wall. It starts unwired: wiring it opens the wiring lesson.
class HExtra {
  HExtra(this.kind, this.x);
  final String kind;

  /// Where along the back wall it is.
  final double x;
  final WiringState state = WiringState();

  bool get done => state.stage >= 2 && evaluateWiring(electricalLesson(kind), state).ok;
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

  /// How far each door has swung open (0 shut, 1.25 wide open) while it is being opened or closed.
  final Map<int, double> doorAngle = {};

  bool wiringNeeded = false;
  bool plumbNeeded = false;
  RoomProject? wiring;

  /// The wiring jobs of the houses and offices in the town (outside only), kept so work already done is still there when you come back.
  final Map<int, RoomProject> houseWork = {};

  /// Which office in a tower has no power: the building's number and the level.
  final Map<int, int> darkOffices = {};

  /// The wiring lesson of each street light being fixed, kept so the work is still there when you come back.
  final Map<int, WiringState> lampWork = {};

  /// The delivery orders and the rival couriers of the town (a DeliveryBoard), kept so the race goes on while you are away.
  Object? deliveryBoard;
  Object? uberBoard;

  /// Fixture 0 to 3 (outlet, outlet, ceiling light or fan, switch): 0 not started, 1 started, 2 finished.
  int fixtureState(int i) => !indoor || lesson.isNotEmpty ? 2 : (wiring != null ? wiring!.orderProgress(i) : (wiringNeeded ? 0 : 2));
  PlumbJob? plumb;

  /// What is plugged into the two wall outlets (0 and 1), whether the ceiling light or fan is on, and which one hangs there.
  final Map<int, String> plugged = {};
  bool lightOn = false;
  String ceilingFix = 'light';

  /// Outlets and switches the visitor added, a TV on the wall (any TV model, on or off) and the NGMY app it plays.
  final List<HExtra> extras = [];
  String? wallTv;

  /// The hall has a second TV, on the other end wall.
  String? wallTv2;

  /// The city's street lights and houses that are broken just now (the number of the lamp post or house in the list of things), for the jobs round the neighbourhood.
  final Set<int> brokenLamps = {};
  final Set<int> darkHouses = {};

  /// A lesson room is big and nearly empty, so the outlets and switches are in the open and any TV fits. Which wall the TV hangs on there: back, left or right.
  bool big = false;
  String tvWall = 'back';
  bool tvOn = false;
  int tvApp = 0;

  /// A lesson room: which lesson it teaches (outlet, switch, gfci, fan, ptrap or faucet) and the work done so far.
  String lesson = '';
  WiringState? lessonState;
  PlumbState? lessonPlumb;
  bool get lessonIsPlumbing => lesson == 'ptrap' || lesson == 'faucet';
  bool get lessonDone {
    if (lessonIsPlumbing) {
      final p = lessonPlumb;
      if (p == null) return false;
      return lesson == 'ptrap' ? (p.placed.length == 3 && p.tight.values.every((t) => t) && p.running) : (faucetComplete(p) && p.valvesOpen);
    }
    final st = lessonState;
    return st != null && st.stage >= 2 && evaluateWiring(electricalLesson(lesson), st).ok;
  }

  /// What works, fixture by fixture. In a lesson room only the thing being taught is pending.
  /// Each fixture is marked fixed on its own as soon as it is: only the ones still to do keep their red frame.
  bool _fixture(int i) => !indoor || (wiring != null ? wiring!.orderOk(i) : !wiringNeeded);
  bool get okLight => lesson.isEmpty ? _fixture(2) : (lesson == 'fan' ? lessonDone : true);
  bool get okSwitch => lesson.isEmpty ? _fixture(3) : (isSwitchKind(lesson) ? lessonDone : true);
  bool get okOutA => lesson.isEmpty ? _fixture(0) : (isOutletKind(lesson) ? lessonDone : true);
  bool get okOutB => lesson.isEmpty ? _fixture(1) : true;

  /// What is still to be done in this room, in words.
  List<String> get missing => lesson.isNotEmpty || !indoor || wired ? const [] : [if (!okOutA) 'outlet 1', if (!okOutB) 'outlet 2', if (!okLight) (ceilingFix == 'fan' ? 'ceiling fan' : 'ceiling light'), if (!okSwitch) 'switch'];

  double get w => big ? 260 : switch (kind) { 'bathroom' => 110, 'kitchen' => 140, 'living' => 180, 'hall' => 480, 'outside' => 2600, _ => 130 };
  double get d => big ? 180 : switch (kind) { 'bathroom' => 100, 'kitchen' => 110, 'living' => 120, 'hall' => 180, 'outside' => 2100, _ => 112 };
  bool get indoor => kind != 'outside';
  static const double h = 130;

  bool get hasPlumbing => kind == 'bathroom' || kind == 'kitchen';
  // Once a job has been opened it decides: pull a device out of a finished room and the room is no longer wired.
  bool get wired => !indoor || (lesson.isNotEmpty ? (lessonIsPlumbing || lessonDone) : (wiring?.wiringWorks ?? !wiringNeeded));
  bool get plumbed => !hasPlumbing || (lesson.isNotEmpty ? (!lessonIsPlumbing || lessonDone) : (plumb?.done ?? !plumbNeeded));
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

  /// Tall things (cabinets) that must never stand in front of a TV on the wall.
  static const Set<String> tallKinds = {'wardrobe', 'shelf', 'lamp', 'console'};

  /// Moves every tall piece of furniture out of the stretch of wall in front of the TV, so the TV can always be seen.
  void clearTv() {
    final key = wallTv;
    if (key == null || !indoor || kind == 'hall') return;
    final box = wallTvBox(this, applianceByKey(key));
    final lo = box.cx - box.w / 2 - 6, hi = box.cx + box.w / 2 + 6;
    const depth = 52.0;
    for (final f in furn.where((f) => tallKinds.contains(f.kind))) {
      final k = kFurnKinds[f.kind]!;
      final turned = f.rot.isOdd;
      final fw = turned ? k.d : k.w, fd = turned ? k.w : k.d;
      if (tvWall == 'back') {
        if (f.z - fd / 2 >= depth || f.x + fw / 2 <= lo || f.x - fw / 2 >= hi) continue;
        final right = hi + fw / 2 + 1, left = lo - fw / 2 - 1;
        final room = w / 2 - fw / 2 - 1;
        if (right <= room && (f.x - right).abs() <= (f.x - left).abs() || left < -room && right <= room) {
          f.x = right;
        } else if (left >= -room) {
          f.x = left;
        } else {
          f.z = depth + fd / 2 + 1;
        }
      } else {
        final wallX = tvWall == 'left' ? -w / 2 : w / 2;
        final near = tvWall == 'left' ? f.x - fw / 2 < wallX + depth : f.x + fw / 2 > wallX - depth;
        if (!near || f.z + fd / 2 <= lo || f.z - fd / 2 >= hi) continue;
        final down = hi + fd / 2 + 1, up = lo - fd / 2 - 1;
        final room = d - fd / 2 - 1;
        if (down <= room) {
          f.z = down;
        } else if (up >= fd / 2 + 1) {
          f.z = up;
        } else {
          f.x = tvWall == 'left' ? wallX + depth + fw / 2 + 1 : wallX - depth - fw / 2 - 1;
        }
      }
    }
  }

  /// Keeps a piece of furniture inside the room.
  void clamp(Furn f) {
    final k = kFurnKinds[f.kind]!;
    final turned = f.rot.isOdd;
    final fw = turned ? k.d : k.w, fd = turned ? k.w : k.d;
    f.x = f.x.clamp(-w / 2 + fw / 2 + 1, w / 2 - fw / 2 - 1);
    // Outside, the land goes on behind the house too.
    f.z = f.z.clamp(kind == 'outside' ? -760 + fd / 2 : fd / 2 + 1, d - fd / 2 - 1);
    if (kRoadKinds.contains(f.kind)) {
      f.x = (f.x / kRoadGrid).round() * kRoadGrid;
      f.z = (f.z / kRoadGrid).round() * kRoadGrid;
    }
  }
}

class HomeProject {
  HomeProject({this.seed = 1}) {
    _build();
  }

  /// A single room that teaches one lesson: the ceiling light is already in, and the thing being taught is waiting.
  HomeProject.lesson(String id) : seed = 7 {
    lessonId = id;
    final kind = switch (id) { 'gfci' || 'faucet' => 'bathroom', 'fan' => 'bedroom', 'ptrap' => 'kitchen', _ => 'living' };
    final title = switch (id) { 'outlet' => 'Wall outlet', 'switch' => 'Light switch', 'gfci' => 'GFCI outlet', 'fan' => 'Ceiling fan', 'ptrap' => 'Sink drain', _ => 'Faucet' };
    final r = HRoom(0, title, kind, 0, 0, 1, 1, []);
    r.lesson = id;
    r.ceilingFix = id == 'fan' ? 'fan' : 'light';
    if (id == 'gfci') r.floor = 5;
    r.wiringNeeded = false;
    r.plumbNeeded = false;
    r.floor = kind == 'bathroom' || kind == 'kitchen' ? 5 : 0;
    // A lesson room is big and bare: nothing stands in front of the outlets, the switch or the TV.
    r.big = true;
    // A big TV on the wall plays the NGMY Jobs ad, in every lesson room.
    r.wallTv = 'tv150';
    r.tvOn = true;
    r.tvApp = math.max(0, kNgmyApps.indexWhere((a) => a.name == 'Jobs'));
    rooms = [r];
  }

  String lessonId = '';
  bool get isLesson => lessonId.isNotEmpty;

  /// Every room needs its wiring and its plumbing again, so the whole house can be done from the start.
  void makeBare() {
    for (final r in indoor) {
      r.wiring = null;
      r.plumb = null;
      r.wiringNeeded = true;
      r.plumbNeeded = r.hasPlumbing;
      r.lightOn = false;
      r.plugged.clear();
      r.extras.clear();
    }
  }

  final int seed;
  bool practice = false;
  late List<HRoom> rooms;
  int current = 0;

  /// The house you were in is kept while the app is open.
  static HomeProject? session;

  static const List<String> _bedNames = ['Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Bedroom 5'];

  void _build() {
    final r = math.Random(seed);
    // The map is 9 cells wide and 5 tall. The hall runs along the middle.
    HDoor toHall(double off) => HDoor('back', off, 5);
    // The hall's doors: only three, in the middle of the back wall (the living room, the kitchen and the first bedroom), with a big TV
    // on each side of them and one on each end wall. The other rooms are reached from the map, or through their own door to the hall.
    final hallDoors = <HDoor>[
      const HDoor('back', -50, 10),
      const HDoor('back', 0, 9),
      const HDoor('back', 50, 0),
      // The other rooms keep their doors in the plan (so the map and the tour reach them) but the hall does not show them.
      for (final (i, to) in const [(0, 1), (1, 2), (2, 3), (3, 4), (4, 6), (5, 7), (6, 8)]) HDoor('back', -150.0 + i * 50, to, hidden: true),
    ];
    final list = <HRoom>[
      HRoom(0, _bedNames[0], 'bedroom', 0, 0, 2, 2, [toHall(-48)]),
      HRoom(1, _bedNames[1], 'bedroom', 2, 0, 2, 2, [toHall(-48)]),
      HRoom(2, 'Bathroom 1', 'bathroom', 4, 0, 1, 2, [const HDoor('right', 50, 5)]),
      HRoom(3, _bedNames[2], 'bedroom', 5, 0, 2, 2, [toHall(-48)]),
      HRoom(4, 'Bathroom 2', 'bathroom', 7, 0, 2, 2, [const HDoor('right', 50, 5)]),
      HRoom(5, 'Hall', 'hall', 0, 2, 9, 1, hallDoors),
      HRoom(6, _bedNames[3], 'bedroom', 0, 3, 2, 2, [toHall(-48)]),
      HRoom(7, _bedNames[4], 'bedroom', 2, 3, 2, 2, [toHall(-48)]),
      HRoom(8, 'Bathroom 3', 'bathroom', 4, 3, 1, 2, [const HDoor('right', 50, 5)]),
      HRoom(9, 'Kitchen', 'kitchen', 5, 3, 2, 2, [HDoor('back', -26, 5), const HDoor('right', 40, 10)]),
      HRoom(10, 'Living room', 'living', 7, 3, 2, 2, [HDoor('back', -70, 5), const HDoor('left', 40, 9), const HDoor('back', 56, 11)]),
      HRoom(11, 'Garden', 'outside', 0, 5, 9, 1, [const HDoor('back', 0, 10)]),
    ];
    rooms = list;
    // What is wrong in this house: a different mix every time.
    for (final room in rooms) {
      if (!room.indoor) {
        _furnish(room);
        continue;
      }
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
    // The hall always has its video wall: a big TV on each side of the three doors, showing the NGMY ads.
    rooms[5]
      ..wallTv = 'tv100'
      ..wallTv2 = 'tv100'
      ..tvOn = true;
    // At least one wiring job and one plumbing job, whatever the dice said.
    rooms[3].wiringNeeded = true;
    rooms[2].plumbNeeded = true;
  }

  void _furnish(HRoom r) {
    final w2 = r.w / 2;
    switch (r.kind) {
      case 'bedroom':
        r.add('rug', x: 0, z: r.d * 0.55);
        r.add('bed', x: 24, z: 46);
        r.add('nightstand', x: -8, z: 14);
        r.add('wardrobe', x: -w2 + 12, z: 70).rot = 1;
        r.add('desk', x: w2 - 14, z: 100).rot = 3;
      case 'living':
        r.add('rug', x: 0, z: 70);
        r.add('sofa', x: 0, z: 100);
        r.add('coffee', x: 0, z: 68);
        r.add('armchair', x: 66, z: 70);
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
      case 'outside':
        // The house is at the back (z 0 and less). Two streets run right across the town and a lane joins them to the house.
        // Everything stands well back from the streets (more than a hundred units), so there is room to walk beside the road.
        const z1 = 420.0, z2 = 860.0;
        for (var x = -780.0; x <= 780; x += kRoadGrid) {
          r.add(x.abs() < 1 ? 'roadcross' : 'road', x: x, z: z1);
          r.add(x.abs() < 1 ? 'roadcross' : 'road', x: x, z: z2);
        }
        for (var z = 200.0; z <= 820; z += kRoadGrid) {
          if ((z - z1).abs() < 1 || (z - z2).abs() < 1) continue;
          r.add('road', x: 0, z: z).rot = 1;
        }
        // Two more roads join the streets, so the cars have loops to drive round; every junction is a roundabout.
        for (final rx in const [-600.0, 600.0]) {
          for (var z = z1 + kRoadGrid; z < z2 - 1; z += kRoadGrid) {
            r.add('road', x: rx, z: z).rot = 1;
          }
        }
        for (final rx in const [-600.0, 0.0, 600.0]) {
          r.add('roundabout', x: rx, z: z1);
          r.add('roundabout', x: rx, z: z2);
        }
        bool clear(double x, double z, [double rx = 135, double rz = 115]) => !r.furn.any((f) => !kFlatKinds.contains(f.kind) && !kAnimalKinds.contains(f.kind) && (f.x - x).abs() < rx && (f.z - z).abs() < rz);
        // The town centre, on the first street.
        r.add('shop', x: -250, z: 225);
        r.add('hospital', x: 250, z: 215);
        r.add('firestation', x: -480, z: 225);
        r.add('school', x: 520, z: 210);
        // Big billboards, each with its own ad.
        for (final (x, z) in const [(-660.0, 340.0), (-330.0, 340.0), (330.0, 340.0), (660.0, 340.0), (-660.0, 500.0), (-330.0, 500.0), (330.0, 500.0), (660.0, 500.0), (-660.0, 780.0), (-330.0, 780.0), (330.0, 780.0), (660.0, 780.0), (-500.0, 940.0), (500.0, 940.0)]) {
          if (clear(x, z, 60, 40)) r.add('billboard', x: x, z: z);
        }
        // Houses over the whole land, well apart.
        for (final (x, z) in const [(-700.0, 225.0), (-120.0, 160.0), (120.0, 160.0), (720.0, 225.0)]) {
          if (clear(x, z)) r.add('house2', x: x, z: z);
        }
        for (final (z, step, big) in const [(600.0, 400.0, true), (1030.0, 400.0, true), (1210.0, 400.0, true)]) {
          for (var x = -800.0; x <= 800; x += step) {
            if (x.abs() < 100) continue;
            // Between the two streets the loop roads at x = 600 run through, so the houses keep well back from them.
            if (z < 900 && x.abs() > 400) continue;
            if (clear(x, z)) r.add(big && (x ~/ step) % 2 == 0 ? 'bighouse' : 'house2', x: x, z: z);
          }
        }
        for (final (x, z) in const [(-820.0, 640.0), (820.0, 640.0)]) {
          if (clear(x, z)) r.add('bighouse', x: x, z: z);
        }
        // ── The bigger town: longer streets, more houses, downtown with the NGMY companies, and the big signs ──
        const z3 = 1460.0, z4 = 1700.0;
        for (var x = -1220.0; x <= 1220; x += kRoadGrid) {
          if (x.abs() > 780) {
            r.add('road', x: x, z: z1);
            r.add('road', x: x, z: z2);
          }
          r.add('road', x: x, z: z3);
          r.add('road', x: x, z: z4);
        }
        for (var z = z2 + kRoadGrid; z < z3 - 1; z += kRoadGrid) {
          r.add('road', x: 0, z: z).rot = 1;
        }
        final roads = [for (final f in r.furn) if (kRoadKinds.contains(f.kind) || f.kind == 'roundabout') f];
        // Is there room for a building of [fw] by [fd] here, with the road and the other buildings well away from its door side (z up)?
        bool free(double x, double z, double fw, double fd) {
          for (final q in roads) {
            if ((q.x - x).abs() < fw / 2 + 90 && (q.z - z).abs() < fd / 2 + 20 + (q.z > z ? 70 : 30)) return false;
          }
          for (final f in r.furn) {
            if (kRoadKinds.contains(f.kind) || f.kind == 'roundabout' || f.kind == 'rug' || f.kind == 'flowers') continue;
            final k = kFurnKinds[f.kind]!;
            if ((f.x - x).abs() < (fw + k.w) / 2 + 130 && (f.z - z).abs() < (fd + k.d) / 2 + (f.z > z ? 150 : 110)) return false;
          }
          return true;
        }

        // The driving licence office (where the Uber licence is bought) and the Uber stations where people wait for a ride home.
        bool roomFor(double x, double z, double fw, double fd) {
          if (x.abs() > 1150 || z < -600 || z > 1450) return false;
          for (final f in r.furn) {
            if (f.kind == 'rug' || f.kind == 'flowers' || f.kind == 'pond') continue;
            final q = kFurnKinds[f.kind]!;
            final qw = f.rot.isOdd ? q.d : q.w, qd = f.rot.isOdd ? q.w : q.d;
            if ((f.x - x).abs() < (fw + qw) / 2 + 34 && (f.z - z).abs() < (fd + qd) / 2 + 34) return false;
            // Never build in front of the door of a building that is already there.
            if (const {'house2', 'bighouse', 'shop', 'hospital', 'school', 'firestation', 'store', 'gasstation', 'tower', 'hq', 'dmv'}.contains(f.kind)) {
              final a = f.rot * math.pi / 2;
              final dx = f.x + math.sin(a) * (q.d / 2 + 30), dz = f.z + math.cos(a) * (q.d / 2 + 30);
              if ((dx - x).abs() < fw / 2 + 40 && (dz - z).abs() < fd / 2 + 40) return false;
            }
          }
          return true;
        }

        void place(String kind, int want, List<(double, double)> spots) {
          final k = kFurnKinds[kind]!;
          var n = 0;
          void put(double x, double z) {
            r.add(kind, x: x, z: z);
            if (kind == 'ubstation') r.add('car', x: x + 96, z: z + 6);
            n++;
          }

          for (final (x, z) in spots) {
            if (n >= want) return;
            if (roomFor(x, z, k.w, k.d)) put(x, z);
          }
          // No luck at the usual places: look over the land for free spots, not close to one of the same kind.
          for (var z = -500.0; z < 1400 && n < want; z += 100) {
            for (var x = -1100.0; x <= 1100 && n < want; x += 110) {
              if (r.furn.any((f) => f.kind == kind && (f.x - x).abs() < 420 && (f.z - z).abs() < 420)) continue;
              if (roomFor(x, z, k.w, k.d)) put(x, z);
            }
          }
        }

        // More gas stations, spread over the town so a car is never far from one (the tank only lasts about a minute).
        place('gasstation', 6, const [(-900.0, 400.0), (900.0, 400.0), (-900.0, 1000.0), (900.0, 1000.0), (-300.0, 1260.0), (300.0, 1260.0), (-1000.0, 700.0), (1000.0, 700.0), (-640.0, 90.0), (640.0, 90.0), (-900.0, 1400.0), (900.0, 1400.0)]);
        place('dmv', 1, const [(-760.0, 330.0), (760.0, 330.0), (-450.0, 1080.0), (450.0, 1080.0)]);
        place('ubstation', 3, const [(0.0, 330.0), (-120.0, 1080.0), (120.0, 1080.0), (-300.0, 1000.0), (300.0, 1000.0), (-700.0, 800.0), (700.0, 800.0)]);

        // More houses: behind my house, down both sides and over every green stretch, each with room in front of its door.
        var added = 0;
        for (var zi = 0; zi < 7 && added < 90; zi++) {
          final z = -560.0 + zi * 300;
          for (var xi = 0; xi <= 5 && added < 90; xi++) {
            final x = -1150.0 + xi * 420;
            if (x.abs() < 170 && z < 100) continue;
            final kind = (xi * 7 + zi * 3) % 5 == 0 ? 'bighouse' : 'house2';
            final k = kFurnKinds[kind]!;
            if (free(x, z, k.w, k.d)) {
              r.add(kind, x: x, z: z);
              added++;
            }
          }
        }
        // Downtown, south of the houses: towers, the NGMY company, stores, gas stations and hospitals.
        var di = 0;
        for (final (x, kind) in const [(-1050.0, 'store'), (-840.0, 'tower'), (-630.0, 'tower'), (-420.0, 'gasstation'), (-210.0, 'tower'), (0.0, 'hq'), (210.0, 'tower'), (420.0, 'store'), (630.0, 'tower'), (840.0, 'tower'), (1050.0, 'gasstation')]) {
          r.add(kind, x: x, z: 1560).color = di++ % 6;
        }
        for (final (x, kind) in const [(-1050.0, 'hospital'), (-840.0, 'tower'), (-630.0, 'store'), (-420.0, 'tower'), (-210.0, 'tower'), (0.0, 'tower'), (210.0, 'tower'), (420.0, 'tower'), (630.0, 'store'), (840.0, 'tower'), (1050.0, 'hospital')]) {
          r.add(kind, x: x, z: 1860).color = di++ % 6;
        }
        // The biggest billboard, over the middle road: NGMY Town. And one at each corner of the land.
        r.add('townsign', x: 0, z: 640);
        for (final (x, z) in const [(-1150.0, 80.0), (1150.0, 80.0), (-1150.0, 1990.0), (1150.0, 1990.0)]) {
          r.add('cornersign', x: x, z: z);
        }
        // Big NGMY ad billboards round the edge of the land, each playing the NGMY ads one after the other.
        for (final x in const [-1000.0, -500.0, 0.0, 500.0, 1000.0]) {
          r.add('adboard', x: x, z: 2045);
        }
        for (final x in const [-900.0, -300.0, 300.0, 900.0]) {
          r.add('adboard', x: x, z: -690);
        }
        for (final z in const [300.0, 800.0, 1300.0, 1800.0]) {
          // Turned to face along the edge, then put right at the edge (the turn changes how wide it is).
          final west = r.add('adboard', x: -1245, z: z)..rot = 1;
          west.x = -1245;
          r.clamp(west);
          final east = r.add('adboard', x: 1245, z: z)..rot = 3;
          east.x = 1245;
          r.clamp(east);
        }
        // Electric poles along the streets (the street lights hang on them) and street lamps between them.
        for (var x = -1200.0; x <= 1200; x += 480) {
          for (final z in const [z1 - 40, z2 - 40, z3 - 40, z4 - 40]) {
            r.add('pole', x: x, z: z);
          }
          for (final z in const [z1 + 40, z2 + 40, z3 + 40, z4 + 40]) {
            if (x.abs() < 1100) r.add('lamppost', x: x + 240, z: z);
          }
        }
        // Vehicles on the streets, trees, flowers and benches, and goods to carry to the market.
        // Only a few vehicles stand about, off the roads (the buses and police cars drive round by themselves).
        r.add('car', x: -300, z: z1 + 70).rot = 2;
        r.add('ambulance', x: 110, z: 345);
        r.add('firetruck', x: -385, z: 345);
        for (final (x, z) in const [(-210.0, 60.0), (210.0, 90.0), (-330.0, 120.0), (330.0, 60.0), (-110.0, 330.0), (110.0, 330.0), (-560.0, 640.0), (560.0, 640.0), (-420.0, 1100.0), (420.0, 1100.0)]) {
          r.add((x.abs() > 400 || z > 1000) ? 'pine' : 'tree', x: x, z: z);
        }
        r.add('bush', x: -70, z: 20);
        r.add('bush', x: 70, z: 20);
        r.add('flowers', x: -30, z: 24);
        r.add('flowers', x: 30, z: 24);
        r.add('flowers', x: 90, z: 205);
        r.add('bench', x: -60, z: 195);
        r.add('bench', x: 150, z: 300);
        r.add('pond', x: -160, z: 1340);
        r.add('dog', x: 60, z: 60);
        r.add('cat', x: -50, z: 80);
        // The farm, in the far corner.
        r.add('cow', x: -640, z: 1280);
        r.add('cow', x: -570, z: 1330);
        r.add('sheep', x: -500, z: 1300);
        r.add('horse', x: 560, z: 1330);
        r.add('chicken', x: -440, z: 1340);
        for (var i = 0; i < 4; i++) {
          r.add('fence', x: -680 + i * 64.0, z: 1220);
        }
        for (final (x, z) in const [(-600.0, 1250.0), (-520.0, 1260.0), (-460.0, 1250.0), (520.0, 1280.0), (600.0, 1270.0), (-300.0, 1300.0)]) {
          r.add('crate', x: x, z: z);
        }
      case 'hall':
        // Nothing stands in the hall: the carpet with the logo and the TV walls are what you see.
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
