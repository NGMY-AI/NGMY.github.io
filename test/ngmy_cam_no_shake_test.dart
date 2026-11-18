import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';

// A menu button glides the camera to a new view. When that view would put the camera past a wall, the camera stops at
// the wall. The glide must then come to rest smoothly: the picture never shakes (the zoom and the spot it looks at never
// go back and forth, and then stop), however uneven the phone's frames are.
void main() {
  test('gliding to a view past the wall settles smoothly and stops, with uneven frames', () {
    const w = 160.0, d = 140.0, h = 130.0;
    final cam = Cam3(target: const V3(0, 40, 70), dist: 60, yaw: 0, pitch: 0.2)
      ..keepIn = (-w / 2, w / 2, 0.0, d, h)
      ..minDist = 20
      ..maxDist = 300
      ..minPitch = -0.95
      ..maxPitch = 1.35;
    cam.setFree(true);
    cam.glideTo(target: const V3(0, h - 12, d * 0.5), dist: math.max(w, d) * 0.75, yaw: -0.05, pitch: -0.5);
    final lens = <double>[], dist = <double>[], ty = <double>[];
    for (var i = 0; i < 600; i++) {
      cam.tick(i.isEven ? 1 / 60 : 1 / 30);
      lens.add(cam.lens);
      dist.add(cam.dist);
      ty.add(cam.target.y);
    }
    int turns(List<double> v) {
      var n = 0, dir = 0;
      for (var i = 1; i < v.length; i++) {
        final s = v[i] - v[i - 1];
        if (s.abs() < 5e-4) continue; // smaller than anyone can see
        final dd = s > 0 ? 1 : -1;
        if (dir != 0 && dd != dir) n++;
        dir = dd;
      }
      return n;
    }

    expect(turns(lens), lessThanOrEqualTo(2), reason: 'the zoom shook back and forth');
    expect(turns(dist), lessThanOrEqualTo(2), reason: 'the distance shook back and forth');
    expect(turns(ty), lessThanOrEqualTo(2), reason: 'the view shook up and down');
    expect(cam.gliding, isFalse, reason: 'the glide never ended, so the view kept moving');
  });
}
