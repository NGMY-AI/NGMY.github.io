import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_electrical_more.dart';

// The wiring bench: what is inside the wall (the box, the cable) is hidden by the wall from any angle in front - it shows only through the
// opening - and nothing on the bench goes missing or can be seen through when the view turns.

void main() {
  for (final id in ['outlet', 'switch']) {
    test('$id: the box and the cable are drawn before the wall, the device after it, every face from both sides', () {
      final l = electricalLesson(id);
      final s = WiringState();
      final withWall = buildBench(l, s, withWall: true);
      final wall = withWall.polys.where((p) => p.id == idWall).toList();
      expect(wall, isNotEmpty);
      expect(wall.every((p) => p.order == 1), isTrue, reason: 'the wall is the middle tier');
      final box = withWall.polys.where((p) => p.id == idBox).toList();
      expect(box, isNotEmpty);
      expect(box.where((p) => p.pts.every((v) => v.z <= 0.02)).every((p) => p.order == 0), isTrue,
          reason: 'the parts of the box inside the wall come before the wall, so the wall hides them from the side');
      final cable = withWall.polys.where((p) => p.id == idCable && p.pts.every((v) => v.z <= 0.02)).toList();
      expect(cable.every((p) => p.order == 0), isTrue, reason: 'the cable behind the wall is hidden by the wall');
      final front = withWall.polys.where((p) => p.pts.any((v) => v.z > 0.02) && p.order != 1 && p.order != -1).toList();
      expect(front, isNotEmpty);
      expect(front.every((p) => p.order == 2), isTrue, reason: 'everything in front of the wall comes after it');
      expect(withWall.polys.every((p) => p.twoSided), isTrue, reason: 'nothing disappears when seen from the other side');

      // The wall is one front and one back surface with an opening: no faces inside the wall (seams) that showed as holes.
      expect(wall.every((p) => p.pts.every((v) => v.z == 0 || v.z == -0.5) && (p.pts.every((v) => v.z == 0) || p.pts.every((v) => v.z == -0.5) || p.pts.every((v) => v.x.abs() <= 1.15 + 1e-9 && v.y.abs() <= 2.0 + 1e-9))), isTrue,
          reason: 'only the front, the back and the four edges of the opening');
      // A room around the bench (floor, ceiling, sides) drawn first, so turning never shows black nothing.
      final room = withWall.polys.where((p) => p.order == -1).toList();
      expect(room.length, greaterThan(100));
      // Screws and slots know the side they sit on, so they are not seen through the body from the other side.
      final nudged = withWall.polys.where((p) => p.bias != 0 && (p.id == idBrassTop || p.id == idSilverTop || p.id == idGreen)).toList();
      expect(nudged, isNotEmpty);
      expect(nudged.every((p) => p.biasDir != null), isTrue);

      final behind = buildBench(l, s, withWall: false);
      expect(behind.polys.any((p) => p.id == idWall), isFalse);
      expect(behind.polys.every((p) => p.order == 2), isTrue, reason: 'without the wall everything is sorted together by distance');
    });
  }
}
