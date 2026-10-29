import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_city_delivery.dart';
import 'package:ngmy/ngmy_construction_home.dart';

void main() {
  DeliveryBoard fresh() => DeliveryBoard(HomeProject(seed: 4).rooms[11]);

  test('the board always has orders to take, of several kinds, from real places to real houses', () {
    final b = fresh();
    expect(b.orders.where((o) => o.holder == null).length, greaterThanOrEqualTo(7));
    expect(b.couriers.length, 5);
    expect({for (final o in b.orders) o.kind}.length, greaterThan(1), reason: 'food, medicine, packages and more');
    for (final o in b.orders) {
      expect(o.to.kind == 'house2' || o.to.kind == 'bighouse', isTrue);
      expect(o.info.from.contains(o.from.kind), isTrue, reason: '${o.kind} is picked up at a ${o.from.kind}');
      expect(o.pay, inInclusiveRange(6, 28));
    }
  });

  test('you take an order, pick it up at the shop, deliver it at the house and are paid; only one order at a time', () {
    final b = fresh();
    final o = b.open(0, 300).first;
    expect(b.take(o, 0), isTrue);
    expect(b.take(b.open(0, 300).first, 0), isFalse, reason: 'one at a time');
    expect(b.carrying, isFalse);
    // Far from the shop: nothing happens.
    expect(b.updatePlayer(-5000, -5000, 1), isNull);
    final from = doorSpot(o.from);
    final pick = b.updatePlayer(from.$1, from.$2, 2);
    expect(pick?.kind, 'pickup');
    expect(b.carrying, isTrue);
    final to = doorSpot(o.to);
    final done = b.updatePlayer(to.$1, to.$2, 30);
    expect(done?.kind, anyOf('delivered', 'won'));
    expect(done!.points, greaterThanOrEqualTo(o.pay));
    expect(b.points, greaterThanOrEqualTo(o.pay));
    expect(b.deliveries, 1);
    expect(b.active, isNull);
    expect(b.orders.where((x) => x.holder == null).length, greaterThanOrEqualTo(7), reason: 'new orders appear');
  });

  test('an order you leave for six minutes goes back on the board', () {
    final b = fresh();
    final o = b.open(0, 0).first;
    b.take(o, 0);
    final e = b.updatePlayer(-5000, -5000, 400);
    expect(e?.kind, 'expired');
    expect(o.holder, isNull);
  });

  test('the other couriers compete: they take orders (which then vanish from your list), deliver, and one of them wins a round', () {
    final b = fresh();
    final before = b.open(0, 0).length;
    b.advance(1);
    final taken = b.orders.where((o) => o.holder != null && o.holder! >= 0).length;
    expect(taken, greaterThan(0), reason: 'couriers pick up orders at once');
    expect(b.open(0, 0).every((o) => o.holder == null), isTrue);
    expect(before, greaterThanOrEqualTo(7));
    String? message;
    var rounds = b.round;
    for (var t = 2.0; t < 4000 && message == null; t += 1) {
      message = b.advance(t);
    }
    expect(message, contains('won the race'));
    expect(b.round, greaterThan(rounds));
    expect(b.couriers.every((c) => c.roundDeliveries == 0), isTrue, reason: 'a new round starts');
    expect(b.couriers.fold<int>(0, (a, c) => a + c.deliveries), greaterThanOrEqualTo(kRaceGoal));
  });

  test('the couriers are seen walking between the shop and the house, and the table lists everybody', () {
    final b = fresh();
    b.advance(1);
    final f1 = b.figures(3), f2 = b.figures(9);
    expect(f1.length, 5);
    expect(f1.any((f) => f.walking), isTrue);
    var moved = 0;
    for (var i = 0; i < 5; i++) {
      if ((f1[i].x - f2[i].x).abs() + (f1[i].z - f2[i].z).abs() > 1) moved++;
    }
    expect(moved, greaterThan(0));
    final t = b.table();
    expect(t.length, 6);
    expect(t.any((r) => r.$1 == 'You'), isTrue);
  });

  test('winning a round gives a bonus', () {
    final b = fresh();
    var bonus = false;
    for (var i = 0; i < kRaceGoal; i++) {
      final o = b.open(0, 0).first;
      b.take(o, 0);
      final from = doorSpot(o.from);
      b.updatePlayer(from.$1, from.$2, 1);
      final to = doorSpot(o.to);
      final e = b.updatePlayer(to.$1, to.$2, 2);
      if (e?.kind == 'won') {
        bonus = true;
        expect(e!.points, greaterThanOrEqualTo(kRaceBonus));
      }
    }
    expect(bonus, isTrue);
    expect(b.round, 2);
    expect(b.roundDeliveries, 0);
  });
}
