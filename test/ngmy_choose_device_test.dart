import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_electrical_more.dart';
import 'package:ngmy/ngmy_construction_project.dart';

void main() {
  test('the person chooses what goes in: any outlet counts for an outlet and any switch for a switch, if it is wired right', () {
    // The house jobs ask for an unusual outlet and an unusual switch; a plain one that is wired right must count as fixed.
    for (var seed = 1; seed < 40; seed++) {
      final p = RoomProject(seed: seed, kind: 0, variants: true)..fastForward();
      final i = p.orders.indexWhere((o) => isOutletKind(o.device) && o.device != 'outlet');
      if (i < 0) continue;
      final o = p.orders[i];
      expect(p.orderOk(i), isFalse);
      expect(p.installDevice(o.slot, 'outlet').ok, isTrue);
      const plan = {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'};
      for (final e in plan.entries) {
        p.fasten(o.slot, e.value, e.key);
      }
      expect(p.pushIn(o.slot).ok, isTrue);
      expect(p.coverOn(o.slot).ok, isTrue);
      expect(p.orderOk(i), isTrue, reason: 'seed $seed: a plain outlet wired right is a fixed outlet');
      // A switch in an outlet spot is not an outlet.
      expect(RoomProject.kindFits('outlet', 'switch'), isFalse);
      expect(RoomProject.kindFits('switch3', 'switch'), isTrue);
      expect(RoomProject.kindFits('light', 'fan'), isTrue);
      return;
    }
    fail('no job with an unusual outlet found');
  });
}
