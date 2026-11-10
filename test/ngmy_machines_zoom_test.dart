import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_roomscene.dart';

void main() {
  test('after the laundry or the kitchen job the washing machine, the dryer and the range are there to plug in, each only into its own outlet', () {
    final laundry = RoomProject(seed: 9, kind: 3)..fastForward();
    laundry.completeWiring();
    final washer = laundry.orders.firstWhere((o) => o.device == 'washer').slot;
    final dryer = laundry.orders.firstWhere((o) => o.device.startsWith('dryer')).slot;
    expect(kAppliances, containsAll(['washerM', 'dryerM', 'rangeM']));
    // The wrong outlet: the plug does not fit and nothing is plugged.
    final bad = laundry.plug(dryer, 'washerM');
    expect(bad.ok, isFalse);
    expect(bad.msg, contains('does not fit'));
    expect(laundry.plugged.containsKey(dryer), isFalse);
    final w = laundry.plug(washer, 'washerM');
    expect(w.ok, isTrue, reason: w.msg);
    expect(w.msg, contains('washing machine'));
    expect(laundry.applianceRuns(washer), isTrue);
    expect(laundry.plug(dryer, 'dryerM').ok, isTrue);
    // The picture shows them (and moves them when they run).
    final scene = buildRoomScene(laundry, RoomView());
    expect(scene.polys.length, greaterThan(100));
    expect(roomDynamic(laundry, 1.0, {}).length, greaterThan(3));
    final kitchen = RoomProject(seed: 9, kind: 4)..fastForward();
    kitchen.completeWiring();
    final range = kitchen.orders.firstWhere((o) => o.device.startsWith('range')).slot;
    expect(kitchen.plug(range, 'rangeM').ok, isTrue);
    expect(roomDynamic(kitchen, 1.0, {}).length, greaterThan(3));
  });

  test('the house plug-in list has the washing machine, the dryer and the range too', () {
    for (final k in ['washer', 'dryer', 'range']) {
      expect(kHomeAppliances.any((a) => a.key == k && !a.wallOnly), isTrue, reason: k);
    }
  });

  test('zooming out in a room: the camera stops at the wall, and then the view widens so more of the room fits', () {
    final cam = Cam3(yaw: 0, pitch: 0.1, dist: 60, target: const V3(0, 40, 60))
      ..minDist = 6
      ..maxDist = 380
      ..keepIn = (-60.0, 60.0, 0.0, 120.0, 130.0);
    expect(cam.lens, 1.0);
    for (var i = 0; i < 30; i++) {
      cam.zoomBy(1.2);
    }
    final cp = 0.995;
    final z = cam.target.z + cam.dist * cp;
    expect(z, lessThanOrEqualTo(120), reason: 'still inside the back wall');
    expect(cam.lens, lessThan(0.8), reason: 'a wider view');
    final widest = cam.lens;
    expect(widest, greaterThanOrEqualTo(0.5));
    // Zooming in brings the normal view back before the camera moves.
    for (var i = 0; i < 30; i++) {
      cam.zoomBy(0.8);
    }
    expect(cam.lens, 1.0);
    expect(cam.dist, cam.minDist);
  });
}
