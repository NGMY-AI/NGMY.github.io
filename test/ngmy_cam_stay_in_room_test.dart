import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';

// In a room (a lesson room with the TV on the wall) the camera never goes out through a wall: after zooming in on
// something on a wall (the red outlet) and turning all the way round, you see the other side of the room, not the
// room from outside or the back of the TV.

V3 eye(Cam3 c) {
  final cp = math.cos(c.pitch);
  return c.target + V3(-cp * math.sin(c.yaw), math.sin(c.pitch), cp * math.cos(c.yaw)) * c.dist;
}

void main() {
  const box = (-90.0, 90.0, 0.0, 160.0, 96.0);
  void inside(Cam3 c, String why) {
    final e = eye(c);
    expect(e.x, inInclusiveRange(box.$1, box.$2), reason: why);
    expect(e.z, inInclusiveRange(box.$3, box.$4), reason: why);
    expect(e.y, inInclusiveRange(0.0, box.$5), reason: why);
  }

  test('zoomed in on a wall outlet, turning all the way round keeps the camera in the room', () {
    for (final (yaw, name) in [(math.pi / 2, 'side wall'), (0.0, 'back wall'), (-math.pi / 2, 'other side wall')]) {
      final cam = Cam3(yaw: yaw, pitch: 0.05, dist: 80, target: const V3(0, 46, 80))
        ..keepIn = box
        ..minDist = 6
        ..maxDist = 380
        ..setFree(true);
      for (var i = 0; i < 8; i++) {
        cam.zoomBy(0.69);
      }
      inside(cam, 'zoomed in on the $name');
      // Turn slowly all the way round, both ways, and look up and down a little.
      for (var i = 0; i < 160; i++) {
        cam.orbit(0.05, i.isEven ? 0.01 : -0.01);
        inside(cam, '$name, turned ${(i * 0.05).toStringAsFixed(2)}');
      }
      for (var i = 0; i < 160; i++) {
        cam.orbit(-0.07, 0);
        inside(cam, '$name, turned back');
      }
      // Zooming out again from there also stays in the room.
      for (var i = 0; i < 10; i++) {
        cam.zoomBy(1.45);
        inside(cam, '$name, zoomed out');
      }
    }
  });

  test('a point to turn round that is right on a wall: half a turn shows the room, the camera stops at the wall', () {
    final cam = Cam3(yaw: math.pi / 2, pitch: 0.0, dist: 20, target: const V3(92, 46, 80))
      ..keepIn = box
      ..minDist = 6
      ..maxDist = 380
      ..setFree(true);
    cam.orbit(0, 0);
    inside(cam, 'start');
    cam.orbit(math.pi, 0);
    inside(cam, 'half a turn');
    // Now it looks back into the room: the point it looks at is inside, in front of it.
    expect(cam.target.x, lessThan(box.$2));
  });
}
