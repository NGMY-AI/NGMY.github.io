import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';

void main() {
  test('in a room the plus button takes the view toward what the middle of the screen looks at, not toward the middle of the room', () {
    // Standing in the room, looking at a wall: the camera is in front of the middle of the room, looking toward the wall at x = +72.
    final cam = Cam3(yaw: 1.5707963, pitch: 0.0, dist: 100, target: const V3(0, 46, 0))
      ..keepIn = (-64.5, 64.5, -52.5, 52.5, 92.0)
      ..minDist = 8
      ..maxDist = 520;
    // Which way is it looking? The camera sits at target + v * dist.
    final before = cam.target;
    cam.zoomBy(0.69);
    final camPos = () {
      return cam.target;
    }();
    expect((camPos - before).len, greaterThan(5), reason: 'the view moved on toward the wall that was in the middle of the screen');
    final first = cam.target;
    for (var i = 0; i < 6; i++) {
      cam.zoomBy(0.69);
    }
    // Zooming on keeps getting closer to the same spot of the wall (the target stays on it), and the distance to it shrinks.
    expect((cam.target - first).len, lessThan(1.0));
    expect(cam.dist, lessThan(30));
    cam.zoomBy(1.45);
    expect(cam.dist, greaterThan(10), reason: 'minus goes back from it');
  });
}
