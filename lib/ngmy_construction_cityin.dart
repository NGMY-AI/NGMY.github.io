import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_construction_community.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_homescene.dart';
import 'ngmy_construction_tour.dart';
import 'ngmy_construction_world.dart';

// ═════════════════════════════════════════════════════════════════════════════
// INSIDE THE CITY'S BUILDINGS: you walk in through the door (no menus), and the jobs are done by walking up to things:
// the sick are admitted at the desk, patients are treated at their bed, food and medicine are bought at the shelves, what
// you carry is sold at the market, the class is taught at the school, and a house with no power is fixed at its panel.
// ═════════════════════════════════════════════════════════════════════════════

/// A place on the floor that does something when you walk into it.
/// The labels inside a house that you can tap to be shown the thing they are about.
const int idCinPanel = 19500, idCinOutlet = 19501, idCinElevator = 19502;

class _Zone {
  const _Zone(this.id, this.x, this.z, this.r);
  final int id;
  final double x, z, r;
}

/// The buildings you can walk into.
const Set<String> kEnterable = {'hospital', 'shop', 'school', 'firestation', 'house2', 'bighouse', 'store', 'gasstation', 'tower', 'hq'};

/// The inside a building has: an NGMY store or gas station is a shop inside.
String interiorKindOf(String kind) => (kind == 'store' || kind == 'gasstation') ? 'shop' : (kind == 'hq' ? 'tower' : kind);

/// How many levels an office tower has (the tall ones more, the company building twelve).
int towerLevels(Furn f) => f.kind == 'hq' ? 12 : ((210.0 + (kFurnColors[f.color].toARGB32() % 5) * 24) / 22).floor().clamp(8, 14);

const List<String> _safetyTips = [
  'Always switch the breaker OFF and test the wires with a tester before you touch them.',
  'Never use water on an electrical fire: switch the power off at the breaker first.',
  'Reversed hot and neutral can look fine and still be a shock hazard.',
  'A GFCI outlet protects you near water: press TEST every month.',
  'A ceiling fan needs a fan-rated box, because it is heavy and it shakes.',
];

class CityInterior {
  CityInterior(this.kind, this.door, {this.dark = false}) {
    walker = WorldWalker.indoors(w: w, d: d, obstacles: _obstacles(), x: 0, z: d - 24, yaw: math.pi);
    _zones = _zonesOf();
  }

  /// hospital, shop, school, firestation, house2 or bighouse.
  final String kind;

  /// The door of the building in the city, so you come back out in front of it.
  final Furn door;

  /// A house with no power (its panel has to be fixed).
  bool dark;

  /// What has been fixed so far in a dark house: outlet 1, outlet 2, ceiling light, switch.
  List<bool> fixtures = const [false, false, false, false];

  /// In an office tower: the level you are on, how many there are, and what the elevator or the balcony mat asks the page to do.
  int level = 1;
  late final int levels = towerLevels(door);
  bool elevatorRequested = false;
  bool onBalcony = false;
  bool get isTower => kind == 'tower';

  /// The elevator takes you to [n]; [darkHere] is whether the office on that level has no power.
  void goToLevel(int n, {required bool darkHere}) {
    level = n.clamp(1, levels);
    dark = darkHere;
    walker
      ..x = 0
      ..z = 112
      ..yaw = math.pi;
    onBalcony = false;
    _inside.clear();
    build(_cm);
  }

  static const double w = 300, d = 210, h = 120;
  late final WorldWalker walker;
  late final List<_Zone> _zones;
  late Scene3D scene;
  Community? _cm;
  final Set<int> _inside = {};

  /// What the person carries (a crate to sell), kept here while they are in the building.
  String? carrying;

  /// They walked onto the panel of a house with no power: the page opens the wiring job.
  bool jobRequested = false;

  /// How many points the last sale or task gave (for the page's message).
  int earned = 0;

  bool get isHospital => kind == 'hospital';
  bool get isShop => kind == 'shop';
  bool get isHouse => kind == 'house2' || kind == 'bighouse';

  List<NavRect> _obstacles() => switch (kind) {
        'hospital' => const [NavRect(-134, -36, 16, 44), NavRect(34, 118, 30, 66), NavRect(34, 118, 80, 116), NavRect(34, 118, 130, 166), NavRect(-134, -76, 140, 160)],
        'shop' => const [NavRect(-60, 60, 28, 50), NavRect(-134, -80, 70, 170), NavRect(80, 134, 70, 170)],
        'school' => const [NavRect(-70, 70, 20, 44), NavRect(-110, -50, 80, 100), NavRect(50, 110, 80, 100), NavRect(-110, -50, 130, 150), NavRect(50, 110, 130, 150)],
        'firestation' => const [NavRect(-100, 100, 24, 90), NavRect(-134, -110, 100, 190), NavRect(110, 134, 100, 190)],
        'tower' => const [NavRect(-62, 62, 6, 46), NavRect(-117, -73, 149, 171), NavRect(-57, -13, 164, 186), NavRect(73, 117, 159, 181), NavRect(120, 144, 140, 160), NavRect(108, 142, 48, 60)],
        _ => const [NavRect(-90, 10, 130, 160), NavRect(-50, 50, 70, 100), NavRect(-134, -110, 20, 70)],
      };

  List<_Zone> _zonesOf() => switch (kind) {
        'hospital' => const [_Zone(0, -80, 66, 24), _Zone(1, 20, 48, 20), _Zone(2, 20, 98, 20), _Zone(3, 20, 148, 20)],
        'shop' => const [_Zone(0, -64, 120, 26), _Zone(1, 64, 120, 26), _Zone(2, 0, 84, 24)],
        'school' => const [_Zone(0, 0, 80, 26), _Zone(1, 90, 56, 22)],
        'firestation' => const [_Zone(0, -60, 130, 26), _Zone(1, 80, 56, 22)],
        'tower' => const [_Zone(0, 0, 70, 26), _Zone(1, -100, 110, 24), _Zone(2, 105, 100, 26)],
        _ => const [_Zone(0, -100, 100, 24), _Zone(1, 90, 100, 24)],
      };

  /// You walked to the front edge, onto the door mat.
  bool get leaving => walker.z > d - 12 && walker.x.abs() < 36;

  /// Does what the place under the person's feet asks for. Returns what happened, or null.
  String? update(Community? cm) {
    String? said;
    for (final z in _zones) {
      final near = math.sqrt(math.pow(walker.x - z.x, 2) + math.pow(walker.z - z.z, 2)) < z.r;
      if (!near) {
        if (isTower && z.id == 2) onBalcony = false;
        _inside.remove(z.id);
        continue;
      }
      if (!_inside.add(z.id)) continue;
      said = _act(z.id, cm) ?? said;
    }
    if (said != null) build(cm);
    return said;
  }

  String? _act(int zone, Community? cm) {
    earned = 0;
    switch (kind) {
      case 'hospital':
        if (cm == null) return 'The city is still loading.';
        if (zone == 0) {
          final sick = cm.living.where((p) => p.inBed < 0 && (p.sick || p.health < 60)).toList();
          if (sick.isEmpty) return 'The desk: nobody needs the hospital right now. ${cm.medicine} doses of medicine in stock.';
          return cm.admit(sick.first);
        }
        final bed = zone - 1;
        if (cm.beds[bed].resident < 0) return 'This bed is empty. Admit someone at the desk first.';
        return cm.treat(bed);
      case 'shop':
        if (cm == null) return 'The city is still loading.';
        if (zone == 0) return cm.buy('food');
        if (zone == 1) return cm.buy('medicine');
        // The market stall: what you carry is sold here.
        if (carrying == null) return 'The market stall. Bring goods to sell: pick up crates in the city and carry them here.';
        final price = carrying == 'crate' ? 6 : 4;
        cm.points += price;
        earned = price;
        carrying = null;
        return 'You sold your goods at the market. +$price points. Go and fetch more.';
      case 'school':
        if (zone == 0) {
          if (cm != null) cm.points += 3;
          earned = 3;
          return 'You taught the class a lesson. +3 points. ${_safetyTips[(cm?.points ?? 0) % _safetyTips.length]}';
        }
        return 'The library: ${_safetyTips[(cm?.points ?? 1) % _safetyTips.length]}';
      case 'firestation':
        if (zone == 0) {
          if (cm != null) cm.points += 2;
          earned = 2;
          return 'You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged.';
        }
        return 'Fire drill: ${_safetyTips[((cm?.points ?? 0) + 1) % _safetyTips.length]}';
      case 'tower':
        if (zone == 0) {
          elevatorRequested = true;
          return 'The elevator: choose your level (you are on level $level of $levels).';
        }
        if (zone == 2) {
          onBalcony = true;
          return 'The balcony on level $level: the whole town is below you.';
        }
        if (dark) {
          jobRequested = true;
          return 'The breaker panel on level $level. This office has no power. Let us find the wiring fault.';
        }
        return 'The breaker panel on level $level: every breaker is on and the office has power.';
      default:
        if (zone == 0) {
          if (dark) {
            jobRequested = true;
            return 'The breaker panel. This house has no power. Let us find the wiring fault.';
          }
          return 'The breaker panel: every breaker is on and the house has power.';
        }
        return dark ? 'The outlet is dead: there is no power in this house.' : 'The outlet works. Everything here is wired right.';
    }
  }

  /// The inside, drawn from scratch each time something changes.
  void build(Community? cm) {
    _cm = cm;
    final b = MeshBuilder();
    final labels = <Label3D>[];
    final (wallCol, floorCol) = switch (kind) {
      'hospital' => (const Color(0xFFE9EFF2), const Color(0xFFD9E4E8)),
      'shop' => (const Color(0xFFF1E3C6), const Color(0xFFD8C4A0)),
      'school' => (const Color(0xFFF3E6C8), const Color(0xFFC9B58C)),
      'firestation' => (const Color(0xFFE7D2D0), const Color(0xFFB4B7BD)),
      'tower' => (dark ? const Color(0xFF9AA0A8) : const Color(0xFFEDEFF3), const Color(0xFFB8BEC8)),
      _ => (dark ? const Color(0xFF9AA0A8) : const Color(0xFFF1E6D0), const Color(0xFFC49A62)),
    };
    // Floor, then the three walls with windows (the front is open, so you see right in).
    b.order = -1;
    b.box(const V3(0, -0.6, d / 2), const V3(w + 2.4, 1.2, d + 2), floorCol, shine: 0.2, split: 3);
    b.order = 0;
    b.startGroup();
    b.box(const V3(0, h / 2, -0.6), const V3(w + 2.4, h, 1.2), wallCol, split: 3);
    b.endGroup();
    b.startGroup();
    b.box(const V3(-w / 2 - 0.6, h / 2, d / 2), const V3(1.2, h, d), wallCol, split: 3);
    b.endGroup();
    if (isTower) {
      // The right side of a tower is glass, so the balcony looks out over the town.
      b.order = 3;
      b.alpha = 0.18;
      b.box(const V3(w / 2 + 0.6, h / 2, d / 2), const V3(1.2, h, d), const Color(0xFFBFE3F7));
      b.alpha = 1;
      b.order = 0;
    } else {
      b.startGroup();
      b.box(const V3(w / 2 + 0.6, h / 2, d / 2), const V3(1.2, h, d), wallCol, split: 3);
      b.endGroup();
    }
    b.order = 1;
    // Windows with a frame and the sky outside.
    const sky = Color(0xFF9BD3F5);
    for (final x in const [-100.0, 0.0, 100.0]) {
      b.box(V3(x, 78, 0.6), const V3(36.2, 32.2, 0.6), const Color(0xFFF7F4EC));
      b.box(V3(x, 78, 0.8), const V3(34, 30, 0.6), sky, shine: 0.6);
    }
    for (final z in const [50.0, 130.0]) {
      b.box(V3(-w / 2 + 0.4, 78, z), const V3(0.6, 32, 34), const Color(0xFFF7F4EC));
      b.box(V3(-w / 2 + 0.8, 78, z), const V3(0.4, 29, 31), sky, shine: 0.6);
      if (!isTower) {
        b.box(V3(w / 2 - 0.4, 78, z), const V3(0.6, 32, 34), const Color(0xFFF7F4EC));
        b.box(V3(w / 2 - 0.8, 78, z), const V3(0.4, 29, 31), sky, shine: 0.6);
      }
    }
    // A skirting board and a beam along the ceiling, so it reads as the inside of a building.
    b.box(const V3(0, 3, 1.2), const V3(w, 6, 1.6), const Color(0xFFF7F4EC));
    b.box(const V3(0, h - 3, 1.6), const V3(w, 6, 3), const Color(0xFFE5E7EB));
    b.order = 2;
    b.grouped = true;
    // Lights hang from the ceiling (dark in a house with no power).
    for (final x in const [-90.0, 0.0, 90.0]) {
      for (final z in const [50.0, 140.0]) {
        b.cyl(V3(x, h - 2, z), V3(x, h - 18, z), 0.5, const Color(0xFF3F3F46), sides: 4);
        b.ball(V3(x, h - 20, z), 5, ((isHouse || isTower) && dark) ? const Color(0xFF4B5563) : const Color(0xFFFFF1A8), lat: 3, lon: 6);
      }
    }
    switch (kind) {
      case 'hospital':
        _hospital(b, labels, cm);
      case 'shop':
        _shop(b, labels);
      case 'school':
        _school(b, labels);
      case 'firestation':
        _station(b, labels);
      case 'tower':
        _tower(b, labels);
      default:
        _house(b, labels);
    }
    // The way out.
    b.order = 1;
    b.box(const V3(0, 0.3, d - 6), const V3(60, 0.4, 12), const Color(0xFF16A34A));
    labels.add(const Label3D(V3(0, 26, d - 8), '⬇ Walk here to go out', Color(0xFF15803D)));
    if (cm != null) labels.add(Label3D(const V3(0, h - 14, 4), '⭐ ${cm.points}   🍞 ${cm.food}   💊 ${cm.medicine}${carrying != null ? '   📦 carrying' : ''}', const Color(0xFF0F172A)));
    scene = Scene3D(b.polys, labels: labels);
  }

  void _mat(MeshBuilder b, double x, double z, double r, Color col) {
    final o = b.order;
    b.order = 1;
    b.cyl(V3(x, 0.2, z), V3(x, 0.6, z), r, col, sides: 20);
    b.order = o;
  }

  void _hospital(MeshBuilder b, List<Label3D> labels, Community? cm) {
    b.order = 1;
    b.box(const V3(0, 92, 1.0), const V3(34, 10, 1), const Color(0xFFDC2626));
    b.box(const V3(0, 92, 1.0), const V3(10, 34, 1), const Color(0xFFDC2626));
    b.order = 2;
    b.box(const V3(-80, 12, 30), const V3(88, 24, 28), const Color(0xFF8B5E3C), shine: 0.15);
    b.box(const V3(-80, 25, 30), const V3(92, 2, 32), const Color(0xFFF1F5F9), shine: 0.3);
    b.box(const V3(-112, 38, 24), const V3(6, 28, 6), const Color(0xFF38BDF8));
    _mat(b, -80, 66, 22, const Color(0xFF60A5FA));
    labels.add(const Label3D(V3(-80, 52, 66), '🏥 Walk here to admit the sick', Color(0xFF0E7490)));
    labels.add(const Label3D(V3(-80, 70, 40), '👩‍⚕️ Nurse', Color(0xFF0F766E)));
    // A waiting area with benches, and a plant.
    for (final z in const [145.0, 158.0]) {
      b.box(V3(-105, 8, z), const V3(58, 14, 9), const Color(0xFF475569));
    }
    b.ball(const V3(130, 18, 12), 9, const Color(0xFF3F8F4F), lat: 3, lon: 6);
    for (var i = 0; i < 3; i++) {
      final z = 48.0 + i * 50;
      b.box(V3(76, 8, z), const V3(84, 8, 36), const Color(0xFFCBD5E1));
      b.box(V3(76, 14, z), const V3(80, 6, 32), const Color(0xFFF8FAFC));
      b.box(V3(108, 18, z), const V3(12, 4, 22), Colors.white);
      final bed = (cm != null && i < cm.beds.length) ? cm.beds[i] : null;
      if (bed != null && bed.resident >= 0) {
        final p = cm!.residents[bed.resident];
        b.box(V3(54, 24, z), const V3(34, 4, 28), bed.care > 70 ? const Color(0xFF4ADE80) : const Color(0xFFF87171));
        labels.add(Label3D(V3(76, 40, z), '${p.name}  ${bed.care > 70 ? 'cared for' : 'needs treatment'}', bed.care > 70 ? const Color(0xFF15803D) : const Color(0xFFDC2626)));
      } else {
        labels.add(Label3D(V3(76, 30, z), 'Free bed ${i + 1}', const Color(0xFF475569)));
      }
      _mat(b, 20, z - 2, 16, const Color(0xFFF59E0B));
    }
  }

  void _shop(MeshBuilder b, List<Label3D> labels) {
    b.box(const V3(0, 14, 40), const V3(120, 28, 22), const Color(0xFF8B5E3C), shine: 0.15);
    b.box(const V3(0, 29, 40), const V3(124, 2, 26), const Color(0xFFF1F5F9), shine: 0.3);
    for (final (x, food) in const [(-112.0, true), (112.0, false)]) {
      b.box(V3(x, 40, 120), const V3(28, 80, 100), const Color(0xFF9A6B3F), shine: 0.05);
      for (var row = 0; row < 4; row++) {
        for (var k = 0; k < 5; k++) {
          final c = food ? [const Color(0xFFF59E0B), const Color(0xFFEF4444), const Color(0xFFEAB308), const Color(0xFF84CC16)][(row + k) % 4] : (k.isEven ? Colors.white : const Color(0xFF93C5FD));
          b.box(V3(x + (x < 0 ? 15 : -15), 12 + row * 18, 78 + k * 20.0), const V3(4, 10, 14), c);
        }
      }
    }
    _mat(b, -64, 120, 24, const Color(0xFFFACC15));
    _mat(b, 64, 120, 24, const Color(0xFFA78BFA));
    _mat(b, 0, 84, 22, const Color(0xFF22C55E));
    labels.add(const Label3D(V3(-64, 62, 120), '🍞 Food: walk here, 10 ⭐ for 5', Color(0xFFB45309)));
    labels.add(const Label3D(V3(64, 62, 120), '💊 Medicine: walk here, 12 ⭐ for 3', Color(0xFF6D28D9)));
    labels.add(const Label3D(V3(0, 48, 84), '💰 Market stall: walk here to sell what you carry', Color(0xFF15803D)));
  }

  void _school(MeshBuilder b, List<Label3D> labels) {
    b.box(const V3(0, 66, 1.0), const V3(120, 36, 1.4), const Color(0xFF14532D), shine: 0.1);
    b.box(const V3(0, 66, 1.8), const V3(114, 30, 0.4), const Color(0xFF1F6F43));
    b.box(const V3(0, 14, 32), const V3(130, 28, 24), const Color(0xFF8B5E3C), shine: 0.15);
    for (final (x, z) in const [(-80.0, 90.0), (80.0, 90.0), (-80.0, 140.0), (80.0, 140.0)]) {
      for (final dx in const [-14.0, 14.0]) {
        b.box(V3(x + dx, 10, z), const V3(20, 3, 14), const Color(0xFFC49A62));
        b.box(V3(x + dx, 5, z), const V3(2, 10, 2), const Color(0xFF6B7280));
      }
    }
    _mat(b, 0, 80, 24, const Color(0xFFFACC15));
    _mat(b, 90, 56, 20, const Color(0xFF60A5FA));
    labels.add(const Label3D(V3(0, 50, 80), '📚 Walk here to teach the class', Color(0xFFB45309)));
    labels.add(const Label3D(V3(90, 40, 56), '📖 Library', Color(0xFF1D4ED8)));
  }

  void _station(MeshBuilder b, List<Label3D> labels) {
    // The fire truck parked inside, lockers along the wall, a pole.
    b.box(const V3(0, 13, 56), const V3(190, 20, 60), const Color(0xFFDC2626), shine: 0.3);
    b.box(const V3(-60, 28, 56), const V3(60, 12, 56), const Color(0xFFDC2626), shine: 0.3);
    for (final x in const [-70.0, 70.0]) {
      for (final z in const [32.0, 80.0]) {
        b.cyl(V3(x, 6, z - 1.5), V3(x, 6, z + 1.5), 8, const Color(0xFF15171C), sides: 10);
      }
    }
    for (var i = 0; i < 5; i++) {
      b.box(V3(-w / 2 + 8, 30, 110 + i * 18.0), const V3(10, 60, 14), const Color(0xFF64748B));
    }
    b.cyl(const V3(110, 0, 20), const V3(110, h - 10, 20), 2, const Color(0xFFFACC15), sides: 6);
    _mat(b, -60, 130, 24, const Color(0xFFF59E0B));
    _mat(b, 80, 56, 20, const Color(0xFF60A5FA));
    labels.add(const Label3D(V3(-60, 40, 130), '🧯 Walk here to check the equipment', Color(0xFFB45309)));
    labels.add(const Label3D(V3(80, 40, 56), '🔥 Fire drill', Color(0xFFDC2626)));
  }

  /// The inside of an office tower: a lobby with the elevator on the back wall (its display shows the level), desks, a balcony on the
  /// right with a glass railing, and the breaker panel of the level. Outside the glass: the sky and the town far below.
  void _tower(MeshBuilder b, List<Label3D> labels) {
    const carpets = [Color(0xFF3B5B7A), Color(0xFF7C3A3A), Color(0xFF3F6B4F), Color(0xFF6B4F7C), Color(0xFF7A6A3B)];
    b.order = 1;
    b.box(const V3(-10, 0.5, 150), const V3(190, 0.6, 90), carpets[level % 5]);
    b.order = 2;
    // The elevator: a steel frame, two doors, a display with the level and a button panel.
    b.id = idCinElevator;
    // The shaft is thin and flat on the wall, so nothing of it can hide the doors; the frame is three bars round it.
    b.box(const V3(0, 42, 1.5), const V3(88, 84, 3), const Color(0xFF0F172A));
    b.box(const V3(-47, 48, 3.5), const V3(7, 96, 7), const Color(0xFF475569), shine: 0.5);
    b.box(const V3(47, 48, 3.5), const V3(7, 96, 7), const Color(0xFF475569), shine: 0.5);
    b.box(const V3(0, 93, 3.5), const V3(100, 7, 7), const Color(0xFF475569), shine: 0.5);
    // The doors and the buttons sit on the frame: they are drawn after it from every side.
    b.bias = 6;
    for (final x in const [-24.0, 24.0]) {
      b.box(V3(x, 42, 6.6), const V3(42, 84, 1.2), const Color(0xFFF8FAFC), shine: 0.7);
    }
    b.box(const V3(0, 42, 7.4), const V3(1.4, 84, 0.6), const Color(0xFF0F172A));
    b.box(const V3(0, 98, 8.0), const V3(34, 6, 0.6), const Color(0xFF22D3EE), shine: 0.4);
    b.box(const V3(0, 98, 6.6), const V3(40, 12, 2), const Color(0xFF111827));
    b.box(const V3(64, 50, 6.6), const V3(10, 26, 2), const Color(0xFF374151));
    b.ball(const V3(64, 57, 8.4), 2, const Color(0xFFFACC15), lat: 3, lon: 5);
    b.ball(const V3(64, 49, 8.4), 2, const Color(0xFF22C55E), lat: 3, lon: 5);
    b.bias = 0;
    b.id = 0;
    _mat(b, 0, 70, 26, const Color(0xFF38BDF8));
    // Desks with chairs.
    for (final (x, z) in const [(-95.0, 160.0), (-35.0, 175.0), (95.0, 170.0)]) {
      b.box(V3(x, 15, z), const V3(44, 3, 22), const Color(0xFF8B5E3C), shine: 0.2);
      b.box(V3(x - 19, 7, z), const V3(3, 14, 18), const Color(0xFF3F3F46));
      b.box(V3(x + 19, 7, z), const V3(3, 14, 18), const Color(0xFF3F3F46));
      b.box(V3(x, 24, z - 4), const V3(14, 10, 2), const Color(0xFF111418), shine: 0.5);
      b.box(V3(x, 9, z + 18), const V3(14, 3, 14), const Color(0xFF1F2937));
      b.box(V3(x, 16, z + 25), const V3(14, 14, 3), const Color(0xFF1F2937));
    }
    // The balcony on the right: a glass railing, a plant and a bench, and the green mat to step on.
    _mat(b, 105, 100, 26, const Color(0xFF22C55E));
    b.alpha = 0.3;
    b.order = 3;
    b.box(V3(w / 2 - 6, 14, 100), const V3(1.5, 28, 120), const Color(0xFFBFE3F7));
    b.alpha = 1;
    b.order = 2;
    for (final z in const [40.0, 70.0, 100.0, 130.0, 160.0]) {
      b.box(V3(w / 2 - 6, 14, z), const V3(2.5, 30, 2.5), const Color(0xFF9CA3AF), shine: 0.5);
    }
    b.ball(const V3(132, 14, 150), 10, const Color(0xFF3F8F4F), lat: 3, lon: 6);
    b.box(const V3(125, 8, 54), const V3(30, 6, 12), const Color(0xFF8B5E3C));
    // Outside the glass: the sky, and the ground and the other buildings of the town, far below on a high level.
    final base = -(level * 22.0);
    b.order = -1;
    b.box(V3(520, base - 1, 105), const V3(900, 2, 700), const Color(0xFF4C8B4A));
    b.box(const V3(720, 100, 105), const V3(2, 700, 900), const Color(0xFF9BD3F5));
    b.order = 1;
    for (var i = 0; i < 15; i++) {
      final hgt = 30.0 + ((door.id * 7 + i * 13) % 90);
      final col = const [Color(0xFF64748B), Color(0xFF3B5B7A), Color(0xFF94A3B8), Color(0xFF475569)][(door.id + i) % 4];
      b.box(V3(215 + (i % 5) * 80.0, base + hgt / 2, -60 + (i ~/ 5) * 135.0), V3(38, hgt, 38), col);
    }
    labels.add(Label3D(const V3(0, 110, 10), '🏢 LEVEL $level of $levels', const Color(0xFF1D4ED8), id: idCinElevator));
    labels.add(const Label3D(V3(0, 62, 12), '🛗 Elevator: walk onto the blue mat or tap', Color(0xFF0369A1), id: idCinElevator));
    labels.add(const Label3D(V3(105, 52, 100), '🌆 Balcony: step here to see the city', Color(0xFF15803D)));
    _wiring(b, labels);
  }

  void _house(MeshBuilder b, List<Label3D> labels) {
    // A living room: a sofa, a coffee table, a TV on the wall, a shelf, a plant, a rug, and the breaker panel on the wall.
    b.order = 1;
    b.box(const V3(-20, 0.5, 145), const V3(150, 0.6, 90), dark ? const Color(0xFF6B4A32) : const Color(0xFF8A4B4B));
    b.order = 2;
    b.box(const V3(-40, 12, 150), const V3(100, 24, 36), const Color(0xFF5E6E84), shine: 0.1);
    b.box(const V3(-40, 30, 164), const V3(100, 24, 8), const Color(0xFF55657B), shine: 0.1);
    b.box(const V3(0, 8, 90), const V3(60, 16, 28), const Color(0xFF8B5E3C), shine: 0.2);
    b.box(const V3(20, 66, 1.4), const V3(100, 52, 2.4), const Color(0xFF111418), shine: 0.4);
    b.box(const V3(120, 40, 100), const V3(16, 80, 60), const Color(0xFF9A6B3F));
    b.ball(const V3(-125, 16, 30), 10, const Color(0xFF3F8F4F), lat: 3, lon: 6);
    _wiring(b, labels);
  }

  /// The breaker panel, the outlet and the switch on the walls (red until fixed, green when fixed), with their tappable labels.
  void _wiring(MeshBuilder b, List<Label3D> labels) {
    // The breaker panel on the left wall.
    b.id = idCinPanel;
    b.box(const V3(-w / 2 + 3, 54, 45), const V3(5, 34, 24), const Color(0xFF8E959E), shine: 0.5);
    for (var i = 0; i < 4; i++) {
      b.box(V3(-w / 2 + 5.8, 62 - i * 6.0, 45), const V3(1.2, 3.6, 18), dark && i == 0 ? const Color(0xFFF97316) : const Color(0xFF22262C));
    }
    b.id = 0;
    _mat(b, -100, 100, 22, dark ? const Color(0xFFEF4444) : const Color(0xFF22C55E));
    _mat(b, 90, 100, 22, const Color(0xFF60A5FA));
    // The faults you can see: a red frame behind the breaker panel, the outlet and the switch on the wall (green when the house works).
    const green = Color(0xFF22C55E), red = Color(0xFFEF4444);
    // Each one turns green on its own as soon as it is fixed; the panel is green when the whole house has power.
    final outOk = !dark || (fixtures[0] && fixtures[1]);
    final swOk = !dark || fixtures[3];
    b.order = 1;
    b.alpha = 0.6;
    b.id = idCinPanel;
    b.box(const V3(-w / 2 + 2.4, 54, 45), const V3(1.2, 44, 34), dark ? red : green);
    b.id = idCinOutlet;
    b.box(const V3(95, 26, 1.0), const V3(30, 36, 0.8), outOk ? green : red);
    b.box(const V3(-60, 50, 1.0), const V3(24, 32, 0.8), swOk ? green : red);
    b.alpha = 1;
    b.box(const V3(95, 26, 1.8), const V3(14, 20, 1.2), const Color(0xFFF7F2E6), shine: 0.25);
    for (final dz in const [-1.0, 1.0]) {
      for (final dx in const [-1.6, 1.6]) {
        b.box(V3(95 + dx, 26 + dz * 3.4, 2.6), const V3(0.8, 2.6, 0.3), const Color(0xFF22252B));
      }
    }
    b.box(const V3(-60, 50, 1.8), const V3(8, 14, 1.2), const Color(0xFFF7F2E6), shine: 0.25);
    b.box(V3(-60, swOk ? 52 : 48, 2.8), const V3(2, 5, 1.0), const Color(0xFFD9D2C2));
    b.id = 0;
    b.order = 2;
    labels.add(Label3D(const V3(-w / 2 + 6, 82, 45), dark ? '⚡ Breaker panel: tap, then walk onto the red mat' : '⚡ Breaker panel: all fine', dark ? const Color(0xFFDC2626) : const Color(0xFF15803D), id: idCinPanel));
    labels.add(Label3D(const V3(95, 50, 6), outOk ? '🔌 Outlets: fixed' : '🔌 Outlet: dead, tap to fix it', outOk ? const Color(0xFF15803D) : const Color(0xFFDC2626), id: idCinOutlet));
    labels.add(Label3D(const V3(-60, 70, 6), swOk ? '💡 Switch: fixed' : '💡 Switch: no power, tap to fix it', swOk ? const Color(0xFF15803D) : const Color(0xFFDC2626), id: idCinOutlet));
    if (dark) labels.add(const Label3D(V3(0, 100, 20), 'No power in this house', Color(0xFFDC2626)));
  }

  /// The person you steer, the people who work here, the patients lying in their beds, and the crate you carry.
  List<Poly> dynamicPolys(double t, PersonStyle style) {
    final b = MeshBuilder();
    switch (kind) {
      case 'shop':
        drawPerson(b, const PersonPose(room: 0, x: 0, z: 18, yaw: 0), t, kAvatars['soldier']!, id: 0, close: false, tint: const Color(0xFF8B5CF6));
      case 'hospital':
        drawPerson(b, const PersonPose(room: 0, x: -80, z: 50, yaw: 0), t, kAvatars['xbot']!, id: 0, close: false, tint: const Color(0xFF14B8A6));
        final len = 110.0, run = (t * 12) % (2 * len);
        final z = 40 + (run < len ? run : 2 * len - run);
        drawPerson(b, PersonPose(room: 0, x: 6, z: z, yaw: run < len ? 0 : math.pi, walking: true, phase: run / 12), t, kAvatars['soldier']!, id: 0, close: false, tint: const Color(0xFFE5E7EB));
        final cm = _cm;
        if (cm != null) {
          for (var i = 0; i < cm.beds.length && i < 3; i++) {
            final bed = cm.beds[i];
            if (bed.resident < 0) continue;
            final pb = MeshBuilder();
            final st = cm.residents[bed.resident].info.style;
            drawPerson(pb, const PersonPose(room: 0, x: 0, z: 0, yaw: 0), t, st, id: 0, close: false, tint: st.shirt);
            b.polys.addAll(transformPolys(pb.polys, rx: -math.pi / 2, ry: -math.pi / 2, t: V3(76 - 30, 27, 48.0 + i * 50)));
          }
        }
      case 'school':
        drawPerson(b, const PersonPose(room: 0, x: 0, z: 56, yaw: 0), t, kAvatars['xbot']!, id: 0, close: false, tint: const Color(0xFF2563EB));
        const kids = [(-80.0, 100.0, Color(0xFFEF4444)), (80.0, 100.0, Color(0xFF22C55E)), (-80.0, 150.0, Color(0xFFF59E0B))];
        for (final (x, z, c) in kids) {
          drawPerson(b, PersonPose(room: 0, x: x, z: z, yaw: math.pi), t, kAvatars['soldier']!, id: 0, close: false, tint: c);
        }
      case 'firestation':
        drawPerson(b, const PersonPose(room: 0, x: 100, z: 120, yaw: -2.2), t, kAvatars['soldier']!, id: 0, close: false, tint: const Color(0xFFDC2626));
        drawPerson(b, const PersonPose(room: 0, x: 40, z: 150, yaw: 0.5), t, kAvatars['xbot']!, id: 0, close: false, tint: const Color(0xFFF59E0B));
      default:
        break;
    }
    drawPerson(b, PersonPose(room: 0, x: walker.x, z: walker.z, yaw: walker.yaw, walking: walker.walking, phase: walker.phase, running: walker.running && walker.walking, lift: walker.lift), t, style, id: 0, close: true);
    if (carrying != null) {
      final cb = MeshBuilder()..id = 0;
      cb.box(V3(walker.x + math.sin(walker.yaw) * 9, 48 + walker.lift, walker.z + math.cos(walker.yaw) * 9), const V3(14, 11, 14), const Color(0xFFC49A62));
      b.polys.addAll(cb.polys);
    }
    return b.polys;
  }
}
