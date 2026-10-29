import 'dart:math' as math;

import 'ngmy_construction_home.dart';
import 'ngmy_construction_tour.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE WORLD OUTSIDE: a person you steer with arrows (or send somewhere with a double tap) who walks round the buildings,
// the cars and the trees, and goes back into the house through the front door.
// ═════════════════════════════════════════════════════════════════════════════

/// The house's own footprint, behind the front wall (the garden starts at z = 0).
const NavRect kHouseFootprint = NavRect(-126, 126, -66, 5);

/// What a person cannot walk through in the world: the house, the buildings, the vehicles, the trees, the fences and the benches.
/// Flat things (roads, ponds, flowers) and animals are walked over or past.
List<NavRect> obstaclesOfWorld(HRoom r, {int? skip}) {
  final o = <NavRect>[kHouseFootprint];
  for (final f in r.furn) {
    if (f.id == skip) continue;
    if (kFlatKinds.contains(f.kind) || kAnimalKinds.contains(f.kind) || f.kind == 'bush') continue;
    // The big town sign stands on two masts over the road: you walk between them and under the board.
    if (f.kind == 'townsign' || f.kind == 'adboard') {
      final span = f.kind == 'townsign' ? 178.0 : 150.0;
      for (final dx in [-span, span]) {
        final a = f.rot * math.pi / 2;
        final vx = dx * math.cos(a), vz = -dx * math.sin(a);
        o.add(NavRect(f.x + vx - 8, f.x + vx + 8, f.z + vz - 8, f.z + vz + 8));
      }
      continue;
    }
    final k = kFurnKinds[f.kind]!;
    var fw = f.rot.isOdd ? k.d : k.w, fd = f.rot.isOdd ? k.w : k.d;
    // A tree is a trunk, not the whole width of its leaves.
    if (f.kind == 'tree' || f.kind == 'pine') {
      fw = 10;
      fd = 10;
    }
    o.add(NavRect(f.x - fw / 2, f.x + fw / 2, f.z - fd / 2, f.z + fd / 2));
  }
  return o;
}

class WorldWalker {
  WorldWalker(HRoom this.room, {this.x = 0, this.z = 22, this.yaw = 0})
      : _minX = -room.w / 2 + 10,
        _maxX = room.w / 2 - 10,
        _minZ = -760,
        _maxZ = room.d - 10 {
    refresh();
  }

  /// Somebody walking about inside a building: a floor of [w] by [d] and the things that are in the way.
  WorldWalker.indoors({required double w, required double d, required List<NavRect> obstacles, this.x = 0, this.z = 22, this.yaw = 0})
      : room = null,
        _minX = -w / 2 + 12,
        _maxX = w / 2 - 12,
        _minZ = 12,
        _maxZ = d - 4,
        _obstacles = obstacles;

  final HRoom? room;
  final double _minX, _maxX, _minZ, _maxZ;
  double x, z, yaw;

  /// Walking right now (for the stride), how far along the stride they are, and where a double tap sent them.
  bool walking = false;
  double phase = 0;

  /// Running (faster), and how high off the ground a jump has taken the person.
  bool running = false;
  double lift = 0;
  double _vy = 0;
  (double, double)? target;
  List<NavRect> _obstacles = const [];

  /// How fast a person walks (the town is big, so this is quick; running is almost twice as fast).
  static const double speed = 115;

  /// How wide the person is (a car is wider), how much faster than walking they go, and the furniture they are sitting in (a car).
  double body = 7, speedScale = 1;
  int? skipFurn;

  /// Pick up the furniture as it is now (it can be moved between steps).
  void refresh() {
    final r = room;
    if (r != null) _obstacles = obstaclesOfWorld(r, skip: skipFurn);
  }

  /// If the person is standing inside something (they got out of a car and are in the middle of it), move them to the nearest free spot.
  bool unstick() {
    if (!blocked(x, z)) return false;
    for (var r = 6.0; r <= 320; r += 6) {
      final n = math.max(8, (r / 6).round() * 3);
      for (var i = 0; i < n; i++) {
        final a = i * 2 * math.pi / n;
        final nx = x + math.cos(a) * r, nz = z + math.sin(a) * r;
        if (!blocked(nx, nz)) {
          x = nx;
          z = nz;
          target = null;
          return true;
        }
      }
    }
    return false;
  }

  bool blocked(double px, double pz) {
    if (px < _minX || px > _maxX || pz < _minZ || pz > _maxZ) return true;
    for (final o in _obstacles) {
      if (o.hit(px, pz, body)) return true;
    }
    return false;
  }

  /// The person is on the porch, at the front door.
  bool get atDoor => x.abs() < 24 && z > -2 && z < 14;

  /// A step of [dt] seconds with the arrows held: [dx], [dz] is the wanted direction on the ground (it need not be a unit vector).
  /// The person slides along things instead of stopping dead. Returns true when they moved.
  bool step(double dx, double dz, double dt) {
    final len = math.sqrt(dx * dx + dz * dz);
    if (len < 1e-6) {
      walking = false;
      return false;
    }
    final ux = dx / len, uz = dz / len;
    // A stick pushed halfway walks at half speed; running is nearly twice as fast.
    final d = speed * speedScale * (running ? 1.9 : 1.0) * math.min(1.0, len) * dt;
    var nx = x + ux * d, nz = z + uz * d;
    var moved = true;
    if (blocked(nx, nz)) {
      if (!blocked(nx, z)) {
        nz = z;
      } else if (!blocked(x, nz)) {
        nx = x;
      } else {
        moved = false;
      }
    }
    if (moved) {
      x = nx;
      z = nz;
      yaw = math.atan2(ux, uz);
      phase += d / 12;
    }
    walking = moved;
    return moved;
  }

  /// Jump (only from the ground).
  void jump() {
    if (lift <= 0.01) _vy = 160;
  }

  /// The jump goes on in the air: up, then down again.
  void fall(double dt) {
    if (lift <= 0 && _vy <= 0) return;
    lift += _vy * dt;
    _vy -= 560 * dt;
    if (lift <= 0) {
      lift = 0;
      _vy = 0;
    }
  }

  /// Send the person to a spot (a double tap). They walk there in a straight line, sliding round whatever is in the way.
  void goTo(double tx, double tz) => target = (tx, tz);

  /// Move on towards the spot they were sent to. Returns true while they are still going.
  bool advance(double dt) {
    final t = target;
    if (t == null) return false;
    final dx = t.$1 - x, dz = t.$2 - z;
    if (math.sqrt(dx * dx + dz * dz) < 4) {
      target = null;
      walking = false;
      return false;
    }
    final moved = step(dx, dz, dt);
    if (!moved) {
      target = null;
      walking = false;
    }
    return moved;
  }
}
