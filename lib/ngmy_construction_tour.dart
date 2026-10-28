import 'dart:math' as math;

import 'ngmy_construction_home.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE HOUSE TOUR: a little cartoon person walks through the rooms of the house, one after another, and does
// something in each (gets a drink in the kitchen, sits on the sofa, washes at the sink...). The person keeps to the
// time the visitor chose, so a 30 second tour hurries and a 5 minute tour takes its time.
// ═════════════════════════════════════════════════════════════════════════════

/// Where the person is, and what they are doing, at one moment of the tour.
class PersonPose {
  const PersonPose({required this.room, required this.x, required this.z, required this.yaw, this.walking = false, this.sitting = false, this.holding = false, this.note = ''});
  final int room;
  final double x, z;

  /// The way the person faces (0 is towards the camera).
  final double yaw;
  final bool walking, sitting, holding;
  final String note;
}

class _Leg {
  const _Leg(this.pts, {this.faceBack = false, this.holdFrom = -1, this.note = '', this.noteAt = 0});
  final List<(double, double)> pts;

  /// At the end of the walk the person turns to face the back wall (the TV or the mirror) instead of the camera.
  final bool faceBack;

  /// The waypoint from which the person carries a drink (-1 for never).
  final int holdFrom;
  final String note;

  /// The waypoint at which the note is shown.
  final int noteAt;
}

/// The order of the rooms on the tour: living room, kitchen, hall, then the bedrooms and bathrooms.
const List<int> kTourRoute = [10, 9, 5, 0, 2, 1, 3, 4, 6, 7, 8];

class HomeTour {
  HomeTour(this.home, this.seconds) {
    final rooms = [for (final id in kTourRoute) home.rooms[id]];
    final each = math.max(3.0, seconds / rooms.length);
    var t = 0.0;
    for (final r in rooms) {
      _segs.add((r, _legFor(r), t, t + each));
      t += each;
    }
    total = t;
  }

  final HomeProject home;
  final double seconds;
  final List<(HRoom, _Leg, double, double)> _segs = [];
  late final double total;

  _Leg _legFor(HRoom r) {
    final w = r.w, d = r.d;
    switch (r.kind) {
      case 'living':
        return const _Leg([(-70, 10), (-20, 50), (0, 44)], faceBack: true, note: 'Watching the big TV', noteAt: 2);
      case 'kitchen':
        return _Leg([(-50, 10), (-w / 2 + 24, 40), (0, d * 0.62)], holdFrom: 1, note: 'Getting a drink from the fridge', noteAt: 1);
      case 'hall':
        return _Leg([(-98, 12), (0, 22), (98, 12)], note: 'Walking down the hall', noteAt: 1);
      case 'bathroom':
        return _Leg([(-30, 10), (34, 40), (0, d * 0.6)], faceBack: true, note: 'Washing hands at the sink', noteAt: 1);
      default:
        return _Leg([(-30, 10), (0, d * 0.66), (-w / 2 + 14, 76)], faceBack: true, note: 'Watching TV in the bedroom', noteAt: 2);
    }
  }

  /// The person at [elapsed] seconds. After the end they stay where they stopped.
  PersonPose at(double elapsed) {
    final e = elapsed.clamp(0.0, total - 0.001);
    for (final (r, leg, t0, t1) in _segs) {
      if (e >= t0 && e < t1) return _pose(r, leg, (e - t0) / (t1 - t0));
    }
    final (r, leg, _, _) = _segs.last;
    return _pose(r, leg, 1);
  }

  PersonPose _pose(HRoom r, _Leg leg, double u) {
    // 82% of the time is walking, the rest is the person doing the thing at the last stop.
    const walkShare = 0.82;
    final pts = leg.pts;
    final lens = <double>[];
    var sum = 0.0;
    for (var i = 1; i < pts.length; i++) {
      final l = math.sqrt(math.pow(pts[i].$1 - pts[i - 1].$1, 2) + math.pow(pts[i].$2 - pts[i - 1].$2, 2)).toDouble();
      lens.add(l);
      sum += l;
    }
    final walkU = (u / walkShare).clamp(0.0, 1.0);
    final dist = walkU * sum;
    var acc = 0.0;
    var seg = 0;
    while (seg < lens.length - 1 && acc + lens[seg] < dist) {
      acc += lens[seg];
      seg++;
    }
    final k = lens[seg] == 0 ? 0.0 : ((dist - acc) / lens[seg]).clamp(0.0, 1.0);
    final a = pts[seg], b = pts[seg + 1];
    final x = a.$1 + (b.$1 - a.$1) * k, z = a.$2 + (b.$2 - a.$2) * k;
    final walking = u < walkShare;
    final yaw = walking ? math.atan2(b.$1 - a.$1, b.$2 - a.$2) : (leg.faceBack ? math.pi : 0.0);
    final atWaypoint = seg + (k > 0.99 ? 1 : 0);
    final holding = leg.holdFrom >= 0 && (atWaypoint >= leg.holdFrom);
    final noteOn = atWaypoint >= leg.noteAt;
    return PersonPose(room: r.id, x: x, z: z, yaw: yaw, walking: walking, holding: holding, note: noteOn ? leg.note : 'Walking in');
  }
}

/// The lengths of tour a visitor can choose, in seconds.
const List<int> kTourLengths = [30, 60, 120, 180, 300];

String tourLengthName(int s) => s < 60 ? '$s seconds' : (s == 60 ? '1 minute' : '${s ~/ 60} minutes');
