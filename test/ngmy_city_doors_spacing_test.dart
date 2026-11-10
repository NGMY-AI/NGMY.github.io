import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';

void main() {
  test('the houses are well apart: nothing stands closer than a house width to the next building', () {
    final home = HomeProject(seed: 7);
    final city = home.rooms[11];
    final homes = [for (final f in city.furn) if (f.kind == 'house2' || f.kind == 'bighouse') f];
    expect(homes.length, greaterThanOrEqualTo(8));
    for (var i = 0; i < homes.length; i++) {
      for (var j = i + 1; j < homes.length; j++) {
        final a = homes[i], b = homes[j];
        final ka = kFurnKinds[a.kind]!, kb = kFurnKinds[b.kind]!;
        final gapX = (a.x - b.x).abs() - (ka.w + kb.w) / 2;
        final gapZ = (a.z - b.z).abs() - (ka.d + kb.d) / 2;
        expect(gapX > 200 || gapZ > 200, isTrue, reason: 'house ${a.id} and ${b.id} are too close (gap $gapX, $gapZ)');
      }
    }
  });

  test('the NGMY stores and the licence office carry a big sign on the roof, with a face to the front and one to the back', () {
    final city = HomeProject(seed: 7).rooms[11];
    final stores = city.furn.where((f) => f.kind == 'store' || f.kind == 'dmv').toList();
    expect(stores, isNotEmpty);
    final scene = buildHomeRoom(city, problems: 0, closed: false);
    // Each of them has a big roof sign: wide faces higher than the roof.
    var big = 0;
    for (final s in scene.screens) {
      final ys = [for (final c in s.corners) c.y];
      final xs = [for (final c in s.corners) c.x];
      final z = [for (final c in s.corners) c.z];
      if (ys.reduce((a, b) => a > b ? a : b) > 140 && ys.reduce((a, b) => a < b ? a : b) > 90 && ys.reduce((a, b) => a > b ? a : b) < 160) {
        final w = (xs.reduce((a, b) => a > b ? a : b) - xs.reduce((a, b) => a < b ? a : b)).abs() + (z.reduce((a, b) => a > b ? a : b) - z.reduce((a, b) => a < b ? a : b)).abs();
        if (w >= 140) big++;
      }
    }
    expect(big, greaterThanOrEqualTo(stores.length * 2), reason: 'two faces for every store and licence office');
  });

  test('the camera of a person inside a building only stops at the walls and keeps the zoom they set', () {
    final cam = Cam3(yaw: 0, pitch: 0.4, dist: 170, target: const V3(0, 30, 110))
      ..minDist = 60
      ..maxDist = 420
      ..widen = false
      ..keepIn = (-300.0, 300.0, 12.0, 400.0, 300.0);
    final before = cam.dist;
    cam.orbit(3.0, 0);
    final turned = cam.dist;
    cam.orbit(-3.0, 0);
    expect(cam.dist, before, reason: 'turning away from a wall gives the zoom back');
    expect(turned, lessThanOrEqualTo(before));
    expect(cam.lens, 1.0, reason: 'a building never widens the view');
  });
}
