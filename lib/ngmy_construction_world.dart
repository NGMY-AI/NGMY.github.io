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
List<NavRect> obstaclesOfWorld(HRoom r) {
  final o = <NavRect>[kHouseFootprint];
  for (final f in r.furn) {
    if (kFlatKinds.contains(f.kind) || kAnimalKinds.contains(f.kind) || f.kind == 'bush') continue;
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
  WorldWalker(this.room, {this.x = 0, this.z = 22, this.yaw = 0}) {
    refresh();
  }

  final HRoom room;
  double x, z, yaw;

  /// Walking right now (for the stride), how far along the stride they are, and where a double tap sent them.
  bool walking = false;
  double phase = 0;
  (double, double)? target;
  List<NavRect> _obstacles = const [];

  static const double speed = 70, radius = 7;

  /// Pick up the furniture as it is now (it can be moved between steps).
  void refresh() => _obstacles = obstaclesOfWorld(room);

  bool blocked(double px, double pz) {
    if (px < -room.w / 2 + 10 || px > room.w / 2 - 10 || pz < -300 || pz > room.d - 10) return true;
    for (final o in _obstacles) {
      if (o.hit(px, pz, radius)) return true;
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
    final d = speed * dt;
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
