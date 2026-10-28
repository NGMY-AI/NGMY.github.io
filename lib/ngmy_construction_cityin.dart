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
// the sick are admitted at the desk, patients are treated at their bed, food and medicine are bought at the shelves.
// ═════════════════════════════════════════════════════════════════════════════

/// A place on the floor that does something when you walk into it.
class _Zone {
  const _Zone(this.id, this.x, this.z, this.r);
  final int id;
  final double x, z, r;
}

class CityInterior {
  CityInterior(this.kind, this.door) {
    walker = WorldWalker.indoors(w: w, d: d, obstacles: _obstacles(), x: 0, z: d - 24, yaw: math.pi);
    _zones = _zonesOf();
  }

  /// 'hospital' or 'shop'.
  final String kind;

  /// The door of the building in the city, so you come back out in front of it.
  final Furn door;

  static const double w = 260, d = 190, h = 112;
  late final WorldWalker walker;
  late final List<_Zone> _zones;
  late Scene3D scene;
  Community? _cm;
  final Set<int> _inside = {};

  bool get isHospital => kind == 'hospital';

  List<NavRect> _obstacles() => isHospital
      ? const [NavRect(-124, -36, 16, 44), NavRect(34, 108, 30, 66), NavRect(34, 108, 80, 116), NavRect(34, 108, 130, 166)]
      : const [NavRect(-60, 60, 28, 50), NavRect(-124, -80, 70, 170), NavRect(80, 124, 70, 170)];

  List<_Zone> _zonesOf() => isHospital
      ? const [_Zone(0, -80, 66, 24), _Zone(1, 20, 48, 20), _Zone(2, 20, 98, 20), _Zone(3, 20, 148, 20)]
      : const [_Zone(0, -64, 120, 26), _Zone(1, 64, 120, 26)];

  /// You walked to the front edge, onto the door mat.
  bool get leaving => walker.z > d - 12 && walker.x.abs() < 36;

  /// Does what the place under the person's feet asks for. Returns what happened, or null.
  String? update(Community? cm) {
    String? said;
    for (final z in _zones) {
      final near = math.sqrt(math.pow(walker.x - z.x, 2) + math.pow(walker.z - z.z, 2)) < z.r;
      if (!near) {
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
    if (cm == null) return 'The city is still loading.';
    if (isHospital) {
      if (zone == 0) {
        final sick = cm.living.where((p) => p.inBed < 0 && (p.sick || p.health < 60)).toList();
        if (sick.isEmpty) return 'The desk: nobody needs the hospital right now. ${cm.medicine} doses of medicine in stock.';
        return cm.admit(sick.first);
      }
      final bed = zone - 1;
      if (cm.beds[bed].resident < 0) return 'This bed is empty. Admit someone at the desk first.';
      return cm.treat(bed);
    }
    return zone == 0 ? cm.buy('food') : cm.buy('medicine');
  }

  /// The inside, drawn from scratch each time something changes.
  void build(Community? cm) {
    _cm = cm;
    final b = MeshBuilder();
    final labels = <Label3D>[];
    const wallCol = Color(0xFFE9EFF2);
    // Floor, then the three walls (the front is open so you can see in).
    b.order = -1;
    b.box(const V3(0, -0.6, d / 2), const V3(w + 2.4, 1.2, d + 2), isHospital ? const Color(0xFFD9E4E8) : const Color(0xFFD8C4A0), shine: 0.2, split: 3);
    b.order = 0;
    b.startGroup();
    b.box(const V3(0, h / 2, -0.6), const V3(w + 2.4, h, 1.2), isHospital ? wallCol : const Color(0xFFF1E3C6), split: 3);
    b.endGroup();
    b.startGroup();
    b.box(const V3(-w / 2 - 0.6, h / 2, d / 2), const V3(1.2, h, d), isHospital ? wallCol : const Color(0xFFEAD9B8), split: 3);
    b.endGroup();
    b.startGroup();
    b.box(const V3(w / 2 + 0.6, h / 2, d / 2), const V3(1.2, h, d), isHospital ? wallCol : const Color(0xFFEAD9B8), split: 3);
    b.endGroup();
    b.order = 2;
    b.grouped = true;
    if (isHospital) {
      // A red cross on the back wall.
      b.order = 1;
      b.box(const V3(0, 84, 1.0), const V3(34, 10, 1), const Color(0xFFDC2626));
      b.box(const V3(0, 84, 1.0), const V3(10, 34, 1), const Color(0xFFDC2626));
      b.order = 2;
      // The desk.
      b.box(const V3(-80, 12, 30), const V3(88, 24, 28), const Color(0xFF8B5E3C), shine: 0.15);
      b.box(const V3(-80, 25, 30), const V3(92, 2, 32), const Color(0xFFF1F5F9), shine: 0.3);
      b.box(const V3(-112, 38, 24), const V3(6, 28, 6), const Color(0xFF38BDF8));
      // A blue mat where the sick are admitted.
      b.order = 1;
      b.cyl(const V3(-80, 0.2, 66), const V3(-80, 0.6, 66), 22, const Color(0xFF60A5FA), sides: 20);
      b.order = 2;
      labels.add(const Label3D(V3(-80, 52, 66), '🏥 Walk here to admit the sick', Color(0xFF0E7490)));
      labels.add(const Label3D(V3(-80, 70, 40), '👩‍⚕️ Nurse', Color(0xFF0F766E)));
      for (var i = 0; i < 3; i++) {
        final z = 48.0 + i * 50;
        // A bed along the side wall: frame, mattress, pillow, and the patient under a blanket.
        b.box(V3(70, 8, z), const V3(76, 8, 36), const Color(0xFFCBD5E1));
        b.box(V3(70, 14, z), const V3(72, 6, 32), const Color(0xFFF8FAFC));
        b.box(V3(98, 18, z), const V3(12, 4, 22), Colors.white);
        final bed = (cm != null && i < cm.beds.length) ? cm.beds[i] : null;
        if (bed != null && bed.resident >= 0) {
          final p = cm!.residents[bed.resident];
          // A short blanket over the legs (the patient lies on the bed, drawn with the moving things).
          b.box(V3(48, 24, z), const V3(34, 4, 28), bed.care > 70 ? const Color(0xFF4ADE80) : const Color(0xFFF87171));
          labels.add(Label3D(V3(70, 40, z), '${p.name}  ${bed.care > 70 ? 'cared for' : 'needs treatment'}', bed.care > 70 ? const Color(0xFF15803D) : const Color(0xFFDC2626)));
        } else {
          labels.add(Label3D(V3(70, 30, z), 'Free bed ${i + 1}', const Color(0xFF475569)));
        }
        b.order = 1;
        b.cyl(V3(20, 0.2, z - 2), V3(20, 0.6, z - 2), 16, const Color(0xFFF59E0B), sides: 16);
        b.order = 2;
      }
    } else {
      // The counter, with a shopkeeper behind it (drawn with the moving things).
      b.box(const V3(0, 14, 40), const V3(120, 28, 22), const Color(0xFF8B5E3C), shine: 0.15);
      b.box(const V3(0, 29, 40), const V3(124, 2, 26), const Color(0xFFF1F5F9), shine: 0.3);
      // Two stands of goods: food on the left and medicine on the right.
      for (final (x, food) in const [(-102.0, true), (102.0, false)]) {
        b.box(V3(x, 40, 120), const V3(28, 80, 100), const Color(0xFF9A6B3F), shine: 0.05);
        for (var row = 0; row < 4; row++) {
          for (var k = 0; k < 5; k++) {
            final c = food ? [const Color(0xFFF59E0B), const Color(0xFFEF4444), const Color(0xFFEAB308), const Color(0xFF84CC16)][(row + k) % 4] : (k.isEven ? Colors.white : const Color(0xFF93C5FD));
            b.box(V3(x + (x < 0 ? 15 : -15), 12 + row * 18, 78 + k * 20.0), const V3(4, 10, 14), c);
          }
        }
      }
      b.order = 1;
      b.cyl(const V3(-64, 0.2, 120), const V3(-64, 0.6, 120), 24, const Color(0xFFFACC15), sides: 20);
      b.cyl(const V3(64, 0.2, 120), const V3(64, 0.6, 120), 24, const Color(0xFFA78BFA), sides: 20);
      b.order = 2;
      labels.add(const Label3D(V3(-64, 62, 120), '🍞 Food: walk here, 10 ⭐ for 5', Color(0xFFB45309)));
      labels.add(const Label3D(V3(64, 62, 120), '💊 Medicine: walk here, 12 ⭐ for 3', Color(0xFF6D28D9)));
    }
    // The way out.
    b.order = 1;
    b.box(const V3(0, 0.3, d - 6), const V3(60, 0.4, 12), const Color(0xFF16A34A));
    labels.add(const Label3D(V3(0, 26, d - 8), '⬇ Walk here to go out', Color(0xFF15803D)));
    if (cm != null) labels.add(Label3D(const V3(0, h - 14, 4), '⭐ ${cm.points}   🍞 ${cm.food}   💊 ${cm.medicine}', const Color(0xFF0F172A)));
    scene = Scene3D(b.polys, labels: labels);
  }

  /// The person you steer, the shopkeeper (or the doctor and the nurse), and the patients lying in their beds.
  List<Poly> dynamicPolys(double t, PersonStyle style) {
    final b = MeshBuilder();
    if (!isHospital) {
      drawPerson(b, const PersonPose(room: 0, x: 0, z: 14, yaw: 0), t, kAvatars['soldier']!, id: 0, close: false);
    } else {
      // A nurse at the desk and a doctor going from bed to bed.
      drawPerson(b, const PersonPose(room: 0, x: -80, z: 50, yaw: 0), t, kAvatars['xbot']!, id: 0, close: false);
      final len = 110.0, run = (t * 12) % (2 * len);
      final z = 40 + (run < len ? run : 2 * len - run);
      drawPerson(b, PersonPose(room: 0, x: 6, z: z, yaw: run < len ? 0 : math.pi, walking: true, phase: run / 12), t, kAvatars['soldier']!, id: 0, close: false);
      final cm = _cm;
      if (cm != null) {
        for (var i = 0; i < cm.beds.length && i < 3; i++) {
          final bed = cm.beds[i];
          if (bed.resident < 0) continue;
          final pb = MeshBuilder();
          drawPerson(pb, const PersonPose(room: 0, x: 0, z: 0, yaw: 0), t, cm.residents[bed.resident].info.style, id: 0, close: false);
          b.polys.addAll(transformPolys(pb.polys, rx: -math.pi / 2, ry: -math.pi / 2, t: V3(70 - 30, 27, 48.0 + i * 50)));
        }
      }
    }
    drawPerson(b, PersonPose(room: 0, x: walker.x, z: walker.z, yaw: walker.yaw, walking: walker.walking, phase: walker.phase, running: walker.running && walker.walking, lift: walker.lift), t, style, id: 0, close: true);
    return b.polys;
  }
}
