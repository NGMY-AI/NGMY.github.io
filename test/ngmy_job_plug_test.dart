import 'dart:ui';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_roomscene.dart';

void main() {
  test('what is plugged in is pulled out by its plug, not by tapping the TV; pulling a device out keeps it unless it is burnt', () {
    late RoomProject p;
    late int slot;
    for (var seed = 1; seed < 40; seed++) {
      p = RoomProject(seed: seed)..fastForward()..completeWiring();
      final outlets = p.devs.entries.where((e) => e.value.kind == 'outlet');
      if (outlets.isNotEmpty) {
        slot = outlets.first.key;
        break;
      }
    }
    p.breaker = false;
    expect(p.plug(slot, 'tv').ok, isTrue);
    final sc = buildRoomScene(p, const RoomView());
    final ids = sc.polys.map((q) => q.id).toSet();
    expect(ids.contains(idPlugBase + slot), isTrue, reason: 'the plug and cord can be tapped');
    expect(ids.contains(idAppBase + slot), isTrue, reason: 'the TV is still there, but is a separate thing');
    expect(idPlugBase, greaterThan(idAppBase + 7));
    // Pulling the device out of the wall leaves it there for another go.
    p.pullOut(slot);
    expect(p.devs[slot], isNotNull);
    expect(p.devs[slot]!.w.stage, 0);
  });

  test('the camera can find where a tap lands on the wall, like a map', () {
    final cam = Cam3()..target = const V3(0, 0, 0);
    const size = Size(400, 800);
    final at = cam.wallPoint(const Offset(200, 400), size);
    expect(at, isNotNull);
    expect(at!.z.abs(), lessThan(0.01));
  });
}
