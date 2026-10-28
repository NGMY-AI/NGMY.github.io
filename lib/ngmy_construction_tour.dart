import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_construction_home.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE HOUSE TOUR: a person comes in through the front door and walks through the whole house like in a little movie.
// The walk is planned round the furniture and the fixed things (the fridge, the counters, the bath), so nobody walks
// through a wall, a chair or a table. In the living room the person picks up the remote and switches the ad on the
// TV, in the kitchen they get a drink, in the bathrooms they wash their hands, and between rooms they open the door
// and walk through it into the hall. The time chosen is shared out between walking and the things they do.
// ═════════════════════════════════════════════════════════════════════════════

/// Where the person is, and what they are doing, at one moment of the tour.
class PersonPose {
  const PersonPose({required this.room, required this.x, required this.z, required this.yaw, this.walking = false, this.holding = false, this.remote = false, this.pointing = false, this.note = '', this.event = '', this.openDoor = -1, this.doorU = 0, this.enterDoor = -1, this.phase = 0, this.phone = false, this.lift = 0, this.running = false});
  final int room;
  final double x, z;

  /// The way the person faces (0 is towards the camera, pi is towards the back wall).
  final double yaw;
  final bool walking, holding, remote, pointing;

  /// On the phone: the right hand is held up in front of the face.
  final bool phone;

  /// How far off the ground a jump has lifted the person, and whether they are running.
  final double lift;
  final bool running;
  final String note;

  /// Something to do once for this moment of the tour, for example switching the ad on the TV ("ad:10").
  final String event;

  /// The number of the door (in the room's list) that the person is opening, or -1.
  final int openDoor;

  /// How far through opening the door the person is (0 to 1), and the door they came in through (-1 for none).
  final double doorU;
  final int enterDoor;

  /// How far along the walk the legs are (for the stride).
  final double phase;
}

/// The colours of a person: skin, hair, shirt and trousers. The tour person and every resident are built the same way.
class PersonStyle {
  const PersonStyle({this.skin = const Color(0xFFE0A47C), this.hair = const Color(0xFF2A1A10), this.shirt = const Color(0xFF2F6FB5), this.pants = const Color(0xFF2E3440), this.avatar = 'human'});
  final Color skin, hair, shirt, pants;

  /// Which character it is: human, xbot (a white robot), michelle (the dancer) or soldier.
  final String avatar;
}

/// The characters of the city: the X Bot, the Dancer, the Soldier and an ordinary person.
const Map<String, PersonStyle> kAvatars = {
  'xbot': PersonStyle(avatar: 'xbot', skin: Color(0xFFE9EBEF), hair: Color(0xFF2B2F36), shirt: Color(0xFFE9EBEF), pants: Color(0xFFDADDE3)),
  'michelle': PersonStyle(avatar: 'michelle', skin: Color(0xFF7A4B30), hair: Color(0xFF140C08), shirt: Color(0xFF1F2937), pants: Color(0xFF111827)),
  'soldier': PersonStyle(avatar: 'soldier', skin: Color(0xFFD9A57C), hair: Color(0xFF3B2A1A), shirt: Color(0xFF5B6B3A), pants: Color(0xFF8A7B55)),
  'human': PersonStyle(),
};

const Map<String, String> kAvatarNames = {'xbot': '🤖 X Bot', 'michelle': '💃 Dancer', 'soldier': '🪖 Soldier', 'human': '🙂 Person'};

/// The character that does the house tour and that you steer outside. The X Bot to begin with; the tour sheet changes it.
String ngmyPlayerAvatar = 'xbot';

PersonStyle get playerStyle => kAvatars[ngmyPlayerAvatar] ?? const PersonStyle();

/// A resident standing in a room of the house: where, which way, what they look like and the words over their head.
class ResidentFigure {
  const ResidentFigure({required this.id, required this.room, required this.x, required this.z, required this.yaw, required this.style, required this.label, this.alert = false, this.calling = false, this.wander = 0});
  final int id, room;
  final double x, z, yaw;
  final PersonStyle style;
  final String label;

  /// Something is wrong with them (hungry, sick...), so the label is drawn in red.
  final bool alert;

  /// They are on the phone, calling for help.
  final bool calling;

  /// How far they stroll round their spot (0 to stand still), for the people who are out in the garden.
  final double wander;
}

typedef Pt = (double, double);

class NavRect {
  const NavRect(this.x0, this.x1, this.z0, this.z1);
  final double x0, x1, z0, z1;
  bool hit(double x, double z, double m) => x > x0 - m && x < x1 + m && z > z0 - m && z < z1 + m;
}

/// Everything in the room that a person cannot walk through.
List<NavRect> obstaclesOf(HRoom r) {
  final w = r.w;
  final o = <NavRect>[];
  for (final f in r.furn) {
    if (f.kind == 'rug') continue;
    final k = kFurnKinds[f.kind]!;
    final fw = f.rot.isOdd ? k.d : k.w, fd = f.rot.isOdd ? k.w : k.d;
    o.add(NavRect(f.x - fw / 2, f.x + fw / 2, f.z - fd / 2, f.z + fd / 2));
  }
  switch (r.kind) {
    case 'kitchen':
      o.add(NavRect(-w / 2, -w / 2 + 28, 0, 28)); // the fridge
      o.add(NavRect(10, w / 2, 0, 28)); // the sink counter and the stove
    case 'bathroom':
      o.add(const NavRect(-4, 16, 0, 24)); // the toilet
      o.add(const NavRect(18, 50, 0, 20)); // the vanity
      o.add(NavRect(-w / 2, -w / 2 + 33, 0, 75)); // the bath
    default:
  }
  return o;
}

/// A path through a room round the obstacles: a grid search, then the corners are cut where the way is clear.
class RoomNav {
  RoomNav(this.room) : _obs = obstaclesOf(room) {
    nx = (room.w / cell).ceil() + 1;
    nz = (room.d / cell).ceil() + 1;
  }

  final HRoom room;
  final List<NavRect> _obs;
  static const double cell = 4, margin = 9;
  late final int nx, nz;

  double _x(int i) => -room.w / 2 + i * cell;
  double _z(int j) => j * cell;

  bool free(double x, double z) {
    if (x < -room.w / 2 + 6 || x > room.w / 2 - 6 || z < 6 || z > room.d - 6) return false;
    for (final r in _obs) {
      if (r.hit(x, z, margin)) return false;
    }
    return true;
  }

  bool _clear(Pt a, Pt b) {
    final len = math.sqrt(math.pow(b.$1 - a.$1, 2) + math.pow(b.$2 - a.$2, 2)).toDouble();
    final n = math.max(1, (len / 2).ceil());
    for (var i = 0; i <= n; i++) {
      final t = i / n;
      if (!free(a.$1 + (b.$1 - a.$1) * t, a.$2 + (b.$2 - a.$2) * t)) return false;
    }
    return true;
  }

  (int, int)? _nearestFree(Pt p) {
    final ci = ((p.$1 + room.w / 2) / cell).round().clamp(0, nx - 1), cj = (p.$2 / cell).round().clamp(0, nz - 1);
    for (var r = 0; r < 16; r++) {
      (int, int)? best;
      var bd = double.infinity;
      for (var di = -r; di <= r; di++) {
        for (var dj = -r; dj <= r; dj++) {
          if (math.max(di.abs(), dj.abs()) != r) continue;
          final i = ci + di, j = cj + dj;
          if (i < 0 || j < 0 || i >= nx || j >= nz) continue;
          if (!free(_x(i), _z(j))) continue;
          final dd = math.pow(_x(i) - p.$1, 2) + math.pow(_z(j) - p.$2, 2).toDouble();
          if (dd < bd) {
            bd = dd.toDouble();
            best = (i, j);
          }
        }
      }
      if (best != null) return best;
    }
    return null;
  }

  /// The way from [a] to [b]; the end is moved to the nearest free spot if [b] is inside something.
  List<Pt> route(Pt a, Pt b) {
    final s = _nearestFree(a), g = _nearestFree(b);
    if (s == null || g == null) return [a, b];
    final goal = (_x(g.$1), _z(g.$2));
    if (_clear(a, goal)) return [a, goal];
    // A* over the grid, eight ways.
    final open = <int>{s.$1 * nz + s.$2};
    final came = <int, int>{};
    final gs = <int, double>{s.$1 * nz + s.$2: 0};
    final fs = <int, double>{s.$1 * nz + s.$2: _h(s.$1, s.$2, g)};
    final end = g.$1 * nz + g.$2;
    var found = false;
    var guard = 0;
    while (open.isNotEmpty && guard++ < 6000) {
      var cur = open.first;
      for (final k in open) {
        if ((fs[k] ?? 1e9) < (fs[cur] ?? 1e9)) cur = k;
      }
      if (cur == end) {
        found = true;
        break;
      }
      open.remove(cur);
      final ci = cur ~/ nz, cj = cur % nz;
      for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
          if (di == 0 && dj == 0) continue;
          final i = ci + di, j = cj + dj;
          if (i < 0 || j < 0 || i >= nx || j >= nz || !free(_x(i), _z(j))) continue;
          if (di != 0 && dj != 0 && (!free(_x(ci + di), _z(cj)) || !free(_x(ci), _z(cj + dj)))) continue;
          final k = i * nz + j;
          final tg = gs[cur]! + (di != 0 && dj != 0 ? 1.4142 : 1.0);
          if (tg < (gs[k] ?? 1e9)) {
            came[k] = cur;
            gs[k] = tg;
            fs[k] = tg + _h(i, j, g);
            open.add(k);
          }
        }
      }
    }
    if (!found) return [a, goal];
    final cells = <int>[end];
    while (came.containsKey(cells.last)) {
      cells.add(came[cells.last]!);
    }
    final pts = <Pt>[a, for (final k in cells.reversed) (_x(k ~/ nz), _z(k % nz))];
    // Cut the corners wherever the straight way is clear.
    final out = <Pt>[pts.first];
    var i = 0;
    while (i < pts.length - 1) {
      var j = pts.length - 1;
      while (j > i + 1 && !_clear(pts[i], pts[j])) {
        j--;
      }
      out.add(pts[j]);
      i = j;
    }
    return out;
  }

  double _h(int i, int j, (int, int) g) => math.sqrt(math.pow(i - g.$1, 2) + math.pow(j - g.$2, 2)).toDouble();
}

class _Goal {
  const _Goal(this.pos, {this.yaw = 0, this.secs = 0, this.note = '', this.holding = false, this.remote = false, this.pointing = false, this.event = ''});
  final Pt pos;
  final double yaw;
  final double secs;
  final String note;
  final bool holding, remote, pointing;
  final String event;
}

class _Seg {
  _Seg(this.room, {this.path, this.x = 0, this.z = 0, this.yaw = 0, this.secs = 0, this.note = '', this.holding = false, this.remote = false, this.pointing = false, this.event = '', this.openDoor = -1}) {
    if (path != null) {
      for (var i = 1; i < path!.length; i++) {
        final l = math.sqrt(math.pow(path![i].$1 - path![i - 1].$1, 2) + math.pow(path![i].$2 - path![i - 1].$2, 2)).toDouble();
        lens.add(l);
        len += l;
      }
    }
  }

  final int room;
  final List<Pt>? path;
  final double x, z, yaw;
  double secs;
  final String note;
  final bool holding, remote, pointing;
  final String event;
  final int openDoor;
  final List<double> lens = [];
  double len = 0;
  double t0 = 0;
  int enterDoor = -1;
}

/// A point just inside the door of [r] that leads to room [to], and the way someone coming in through it faces.
(Pt, double, int) _doorPoint(HRoom r, int to) {
  var idx = r.doors.indexWhere((d) => d.to == to);
  if (idx < 0) idx = 0;
  final d = r.doors[idx];
  final w = r.w, rd = r.d;
  switch (d.wall) {
    case 'left':
      final z = (d.offset + rd / 2 - 40).clamp(10.0, rd - 10);
      return ((-w / 2 + 18, z), math.pi / 2, idx);
    case 'right':
      final z = (d.offset + rd / 2 - 40).clamp(10.0, rd - 10);
      return ((w / 2 - 18, z), -math.pi / 2, idx);
    default:
      return ((d.offset.clamp(-w / 2 + 12, w / 2 - 12), 18.0), 0.0, idx);
  }
}

class HomeTour {
  HomeTour(this.home, this.seconds) : _hallOnly = false {
    _build();
  }

  /// A tour of just the hallway: in from the living room, along the video wall, to the kitchen door.
  HomeTour.hallOnly(this.home, this.seconds) : _hallOnly = true {
    _build();
  }

  final bool _hallOnly;

  final HomeProject home;
  final double seconds;
  final List<_Seg> _segs = [];
  late final double total;

  /// The goals for each kind of room: what the person does there. Nobody stands in front of a TV: they stand beside it.
  List<_Goal> _goals(HRoom r) {
    final w = r.w;
    // A spot beside the wall TV (left of it if there is room, else right), and the way to face the TV from there.
    (Pt, double) beside(double z) {
      final a = applianceByKey(r.wallTv ?? 'tv100');
      final box = wallTvBox(r, a);
      var x = box.cx - box.w / 2 - 18;
      if (x < -w / 2 + 14) x = box.cx + box.w / 2 + 18;
      x = x.clamp(-w / 2 + 14, w / 2 - 14);
      return ((x, z), math.atan2(box.cx - x, -z));
    }

    switch (r.kind) {
      case 'living':
        final (spot, yaw) = beside(46);
        return [
          const _Goal((34, 62), yaw: math.pi, secs: 2.2, note: 'Picking up the remote', remote: true),
          _Goal(spot, yaw: yaw, secs: 4.0, note: 'Switching the ad on the big TV', remote: true, pointing: true, event: 'ad'),
        ];
      case 'kitchen':
        return [
          _Goal((-w / 2 + 40, 42), yaw: math.pi, secs: 2.8, note: 'Getting a drink from the fridge', holding: true),
          const _Goal((-20, 46), secs: 2.4, note: 'Having the drink', holding: true),
        ];
      case 'bathroom':
        return const [_Goal((34, 40), yaw: math.pi, secs: 2.6, note: 'Washing hands at the sink')];
      case 'bedroom':
        final (spot, yaw) = beside(44);
        return [_Goal(spot, yaw: yaw, secs: 3.4, note: 'Switching the ad on the TV', remote: true, pointing: true, event: 'ad')];
      case 'hall':
        if (!_hallOnly) return const [];
        return [
          _Goal((-r.w / 2 + 80, 90), yaw: math.pi, secs: 3.0, note: 'Looking at the left video wall', pointing: true),
          _Goal((0, 120), yaw: 0, secs: 2.4, note: 'Looking over the lounge and the logo carpet'),
          _Goal((r.w / 2 - 80, 90), yaw: math.pi, secs: 3.0, note: 'Looking at the right video wall', pointing: true),
        ];
      default:
        return const [];
    }
  }

  void _leg(int roomId, int? from, int? to, {String note = ''}) {
    final r = home.rooms[roomId];
    final nav = RoomNav(r);
    final (inP, inYaw, enterIdx) = from == null ? ((0.0, 14.0), 0.0, -1) : _doorPoint(r, from);
    final startAt = _segs.length;
    var cur = inP;
    // The person appears at the door they came through, facing into the room.
    _segs.add(_Seg(roomId, x: cur.$1, z: cur.$2, yaw: inYaw, secs: 0.5, note: note.isEmpty ? 'Walking in' : note));
    for (final g in _goals(r)) {
      final path = nav.route(cur, g.pos);
      _segs.add(_Seg(roomId, path: path, note: 'Walking', holding: _holdingBefore(g)));
      cur = path.last;
      _segs.add(_Seg(roomId, x: cur.$1, z: cur.$2, yaw: g.yaw, secs: g.secs, note: g.note, holding: g.holding, remote: g.remote, pointing: g.pointing, event: g.event));
    }
    if (to != null) {
      final (outP, _, di) = _doorPoint(r, to);
      final path = nav.route(cur, outP);
      final holding = _goals(r).isNotEmpty && _goals(r).last.holding;
      _segs.add(_Seg(roomId, path: path, note: 'Walking to the next room', holding: holding));
      cur = path.last;
      // They stop at the door and open it.
      _segs.add(_Seg(roomId, x: cur.$1, z: cur.$2, yaw: _doorYaw(r, di), secs: 1.8, note: 'Opening the door', holding: holding, openDoor: di));
    }
    for (var k = startAt; k < _segs.length; k++) {
      _segs[k].enterDoor = enterIdx;
    }
  }

  bool _holdingBefore(_Goal g) => g.holding && g.note.contains('Having');

  double _doorYaw(HRoom r, int di) => switch (r.doors[di].wall) { 'left' => -math.pi / 2, 'right' => math.pi / 2, _ => math.pi };

  void _build() {
    if (_hallOnly) {
      _leg(5, 10, 9, note: 'Walking into the hall');
      _share();
      return;
    }
    // Through the front door into the living room, the kitchen, then the hall and every bedroom and bathroom.
    _leg(10, 11, 9, note: 'Coming in through the front door');
    _leg(9, 10, 5);
    // The hall has only three doors: down the hall to the first bedroom, then every other room is entered through its own door to the hall.
    _leg(5, 9, 0, note: 'Walking down the hall');
    const order = [0, 2, 1, 3, 4, 6, 7, 8];
    for (var i = 0; i < order.length; i++) {
      _leg(order[i], 5, i == order.length - 1 ? null : 5);
    }
    _share();
  }

  void _share() {
    // Share the time: pauses keep their length (shortened for short tours), walking takes the rest.
    final pauseScale = math.min(1.0, seconds / 120);
    var fixed = 0.0, walkLen = 0.0;
    for (final s in _segs) {
      if (s.path == null) {
        s.secs = s.secs * pauseScale;
        fixed += s.secs;
      } else {
        walkLen += s.len;
      }
    }
    final walkTime = math.max(4.0, seconds - fixed);
    final speed = walkLen / walkTime;
    var t = 0.0;
    for (final s in _segs) {
      if (s.path != null) s.secs = speed <= 0 ? 0.1 : math.max(0.05, s.len / speed);
      s.t0 = t;
      t += s.secs;
    }
    total = t;
  }

  /// The room the tour starts in.
  int get firstRoom => _segs.first.room;

  /// The person at [elapsed] seconds. After the end they stay where they stopped.
  PersonPose at(double elapsed) {
    final e = elapsed.clamp(0.0, total - 0.001);
    var s = _segs.last;
    for (final g in _segs) {
      if (e >= g.t0 && e < g.t0 + g.secs) {
        s = g;
        break;
      }
    }
    final u = s.secs <= 0 ? 0.0 : ((e - s.t0) / s.secs).clamp(0.0, 1.0);
    if (s.path == null) {
      final late = u > 0.5;
      return PersonPose(room: s.room, x: s.x, z: s.z, yaw: s.yaw, holding: s.holding, remote: s.remote, pointing: s.pointing && late, note: s.note, event: late && s.event.isNotEmpty ? '${s.event}:${s.room}' : '', openDoor: s.openDoor, doorU: s.openDoor >= 0 ? u : 0, enterDoor: s.enterDoor);
    }
    // Along the path at an even pace, facing the way of travel (a little ahead, so turns are smooth).
    Pt at(double dist) {
      var acc = 0.0;
      for (var i = 0; i < s.lens.length; i++) {
        if (dist <= acc + s.lens[i] || i == s.lens.length - 1) {
          final k = s.lens[i] == 0 ? 0.0 : ((dist - acc) / s.lens[i]).clamp(0.0, 1.0);
          return (s.path![i].$1 + (s.path![i + 1].$1 - s.path![i].$1) * k, s.path![i].$2 + (s.path![i + 1].$2 - s.path![i].$2) * k);
        }
        acc += s.lens[i];
      }
      return s.path!.last;
    }

    final dist = u * s.len;
    final p = at(dist);
    final ahead = at(math.min(s.len, dist + 7));
    final back = at(math.max(0, dist - 7));
    var dx = ahead.$1 - back.$1, dz = ahead.$2 - back.$2;
    if (dx.abs() < 1e-6 && dz.abs() < 1e-6) {
      dx = s.path!.last.$1 - s.path!.first.$1;
      dz = s.path!.last.$2 - s.path!.first.$2;
    }
    return PersonPose(room: s.room, x: p.$1, z: p.$2, yaw: math.atan2(dx, dz), walking: true, holding: s.holding, note: s.note, enterDoor: s.enterDoor, phase: dist / 12);
  }
}

/// The lengths of tour a visitor can choose, in seconds.
const List<int> kTourLengths = [30, 60, 120, 180, 300];

String tourLengthName(int s) => s < 60 ? '$s seconds' : (s == 60 ? '1 minute' : '${s ~/ 60} minutes');
