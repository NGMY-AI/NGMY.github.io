import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_city_delivery.dart';
import 'package:ngmy/ngmy_city_needs.dart';
import 'package:ngmy/ngmy_city_uber.dart';
import 'package:ngmy/ngmy_construction_cityin.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  void resetNeeds() {
    CityNeeds.session
      ..energy = 1
      ..fuel = 1
      ..restLeft = 0
      ..uberLicence = false;
  }

  test('energy: two minutes of walking uses it all, then 20 seconds of crawling to a shop, then stars are lost and a rest; food helps', () {
    resetNeeds();
    final n = CityNeeds.session;
    final said = <String>[];
    var t = 0.0;
    n.thirst = 1;
    while (!n.crawling && t < 400) {
      n.thirst = 1;
      final m = n.tick(1, walking: true);
      if (m != null) said.add(m);
      t++;
    }
    expect(t, inInclusiveRange(118, 122), reason: 'two minutes of straight walking');
    expect(n.crawling, isTrue, reason: 'worn out: crawling on the ground');
    expect(said.any((m) => m.contains('tired')), isTrue, reason: 'it warns when low');
    // Eating in time saves the day: no stars lost.
    final saved = CityNeeds()..energy = 0..crawlLeft = 12;
    saved.eat(0.55);
    expect(saved.crawling, isFalse);
    expect(saved.penaltyDue, 0);
    // Not in time: after 20 seconds five stars go, and then a three minute rest, back at half.
    var crawl = 0;
    while (n.crawling && crawl < 100) {
      n.tick(1, walking: true);
      crawl++;
    }
    expect(crawl, inInclusiveRange(19, 21), reason: 'twenty seconds to get to a shop');
    expect(n.penaltyDue, 5, reason: 'five stars lost');
    expect(n.resting, isTrue);
    var rest = 0;
    while (n.resting && rest < 400) {
      n.tick(1, walking: true);
      rest++;
    }
    expect(rest, inInclusiveRange(178, 182), reason: 'three minutes');
    expect(n.energy, closeTo(0.5, 1e-9), reason: 'back at half');
    // An apple is not enough to get going from a rest; a sandwich is.
    n.energy = 0;
    n.restLeft = 100;
    n.eat(0.12);
    expect(n.resting, isTrue);
    n.eat(0.3);
    expect(n.resting, isFalse);
    expect(n.energy, closeTo(0.42, 1e-9));
    resetNeeds();
  });

  test('thirst and being unwell make walking cost more energy until water or pills', () {
    final a = CityNeeds(), b = CityNeeds()..thirst = 0, c = CityNeeds()..fallSick();
    for (var i = 0; i < 30; i++) {
      a.thirst = 1;
      a.tick(1, walking: true);
      b.tick(1, walking: true);
      c.thirst = 1;
      c.tick(1, walking: true);
    }
    expect(b.energy, lessThan(a.energy - 0.1), reason: 'thirsty: tires much faster');
    expect(c.energy, lessThan(a.energy - 0.05), reason: 'unwell: tires faster');
    b.drink(0.8);
    expect(b.thirsty, isFalse);
    c.cure();
    expect(c.sick, isFalse);
    expect(kShopFood.any((i) => i.thirst > 0 && i.energy == 0), isTrue, reason: 'water is for sale');
    expect(kShopTown.any((i) => i.cure), isTrue, reason: 'pills are for sale');
  });

  test('gas: about two minutes of driving empties the tank, buying gas fills it', () {
    resetNeeds();
    final n = CityNeeds.session;
    var t = 0;
    while (!n.outOfGas && t < 400) {
      n.tick(1, driving: true);
      t++;
    }
    expect(t, inInclusiveRange(119, 121));
    expect(n.outOfGas, isTrue);
    expect(fillPrice(0), 12);
    expect(fillPrice(1), 0);
    n.fill(0.5);
    expect(n.fuel, 0.5);
    expect(fillPrice(0.5), 6);
    n.tick(1, walking: true);
    expect(n.fuel, 0.5, reason: 'walking does not use gas');
    resetNeeds();
  });

  test('the town has many gas stations, a licence office and Uber stations with a car beside each', () {
    final city = HomeProject(seed: 4).rooms[11];
    expect(city.furn.where((f) => f.kind == 'gasstation').length, greaterThanOrEqualTo(5));
    expect(city.furn.where((f) => f.kind == 'dmv').length, greaterThanOrEqualTo(1));
    final stations = city.furn.where((f) => f.kind == 'ubstation').toList();
    expect(stations.length, greaterThanOrEqualTo(1));
    for (final s in stations) {
      expect(city.furn.any((f) => f.kind == 'car' && (f.x - s.x - 96).abs() < 1 && (f.z - s.z - 6).abs() < 1), isTrue, reason: 'a car to drive beside each station');
    }
    expect(kEnterable.contains('dmv'), isTrue);
  });

  test('the shop has shelves, fridges and a till, and a walk up to a shelf or the counter opens the shopping list', () {
    final city = HomeProject(seed: 4).rooms[11];
    final cm = Community(houseSeed: 4, seed: 4);
    final shop = CityInterior('shop', city.furn.firstWhere((f) => f.kind == 'store'))..build(cm);
    expect(shop.scene.polys.length, greaterThan(1500), reason: 'goods on the shelves, not just boxes');
    expect(shop.scene.labels.any((l) => l.text.contains('Fresh fruit')), isTrue);
    shop.walker
      ..x = -64
      ..z = 120;
    shop.update(cm);
    expect(shop.shopRequested, isTrue);
    final gas = CityInterior('shop', city.furn.firstWhere((f) => f.kind == 'gasstation'))..build(cm);
    expect(gas.isGasShop, isTrue);
    expect(gas.scene.labels.any((l) => l.text.contains('Gas shop')), isTrue);
  });

  test('the licence desk asks for the licence card', () {
    final city = HomeProject(seed: 4).rooms[11];
    final cm = Community(houseSeed: 4, seed: 4);
    final dmv = CityInterior('dmv', city.furn.firstWhere((f) => f.kind == 'dmv'))..build(cm);
    dmv.walker
      ..x = 0
      ..z = 78;
    expect(dmv.update(cm), contains('licence'));
    expect(dmv.licenceRequested, isTrue);
  });

  test('Uber: people wait at the stations, you take one home and are paid the fare at the door', () {
    final city = HomeProject(seed: 4).rooms[11];
    final u = UberBoard(city);
    expect(u.stations, isNotEmpty);
    expect(u.waiting.length, u.stations.length * 3);
    expect(u.figures(0).length, u.waiting.length, reason: 'they stand at the station');
    final s = u.stations.first;
    expect(u.pickUp(-2000, -500), isNull, reason: 'too far from any station');
    final p = u.pickUp(s.x, s.z + 40)!;
    expect(p.aboard, isTrue);
    expect(u.pickUp(s.x, s.z + 40), isNull, reason: 'one passenger at a time');
    expect(p.fare, inInclusiveRange(6, 36));
    final t = u.target!;
    expect(t, doorSpot(p.house));
    expect(u.drop(s.x, s.z, 5), 0, reason: 'not at the house yet');
    expect(u.drop(t.$1, t.$2, 5), p.fare);
    expect(u.active, isNull);
    expect(u.rides, 1);
    expect(u.waiting.length, u.stations.length * 3, reason: 'somebody new steps up');
  });

  testWidgets('the Complete work button shows only when the wiring in the dark house is all done, and then hands the job in', (t) async {
    resetNeeds();
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final city = HomeProject.session!.rooms[11];
    final house = city.furn.firstWhere((f) => f.kind == 'house2');
    city.darkHouses.add(house.id);
    final st = t.state(find.byType(NgmyHousePage)) as dynamic;
    st.inner = CityInterior('house2', house, dark: true)..build(null);
    // Half done: no button.
    final half = RoomProject(seed: house.id * 13 + 5, kind: 0)..fastForward();
    city.houseWork[house.id] = half;
    st.setState(() {});
    await t.pump(const Duration(milliseconds: 200));
    expect(find.text('✅ Complete work'), findsNothing);
    // All connected: the button shows (in the chips, and next to the drone button in full screen) and the work is also handed in by itself.
    var all = half;
    for (var seed = 1; seed < 40; seed++) {
      all = RoomProject(seed: seed, kind: 0)..fastForward()..completeWiring();
      if (all.orders.isNotEmpty) break;
    }
    final before = (st.comm as Community).points;
    city.houseWork[house.id] = all;
    st.setState(() {});
    await t.pump();
    expect(find.text('✅ Complete work', skipOffstage: false), findsOneWidget);
    st.full = true;
    st.setState(() {});
    await t.pump();
    expect(find.byIcon(Icons.task_alt_rounded), findsOneWidget, reason: 'next to the drone button in full screen');
    st.full = false;
    st.setState(() {});
    await t.pump(const Duration(seconds: 2));
    expect(city.darkHouses.contains(house.id), isFalse, reason: 'the power is back without pressing anything');
    expect((st.comm as Community).points - before, inInclusiveRange(10, 35), reason: "a finished job pays 10 to 35 stars");
    expect(find.text('✅ Complete work', skipOffstage: false), findsNothing);
    await t.pump(const Duration(seconds: 15));
  });

  testWidgets('shopping: the Buy things card lists food, buying costs points and gives energy; the energy bar sits next to the title', (t) async {
    resetNeeds();
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byType(NeedBar), findsWidgets, reason: 'the battery bar next to the page title');
    expect(find.byType(StarsBadge), findsOneWidget, reason: 'the stars balance beside the zoom in button');
    final city = HomeProject.session!.rooms[11];
    final st = t.state(find.byType(NgmyHousePage)) as dynamic;
    st.inner = CityInterior('shop', city.furn.firstWhere((f) => f.kind == 'store'))..build(null);
    st.setState(() {});
    await t.pump(const Duration(milliseconds: 200));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('🛒 Buy things'), 120, scrollable: row);
    for (var i = 0; i < 30 && (t.getCenter(find.text('🛒 Buy things')).dx > 380 || t.getCenter(find.text('🛒 Buy things')).dx < 40); i++) {
      await t.drag(row, Offset(t.getCenter(find.text('🛒 Buy things')).dx > 380 ? -50 : 50, 0));
      await t.pump(const Duration(milliseconds: 100));
    }
    await t.tap(find.text('🛒 Buy things'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('NGMY Mart'), findsOneWidget);
    expect(find.text('Sandwich'), findsOneWidget);
    expect(find.text('Burger meal'), findsOneWidget);
    final cm = st.comm as Community;
    cm.points = 20;
    CityNeeds.session.energy = 0.4;
    await t.tap(find.text('6 ⭐'));
    await t.pump(const Duration(milliseconds: 300));
    expect(cm.points, 14);
    expect(CityNeeds.session.energy, closeTo(0.7, 1e-9));
    cm.points = 1;
    await t.tap(find.text('10 ⭐').first);
    await t.pump(const Duration(milliseconds: 300));
    expect(cm.points, 1, reason: 'not enough points: nothing is bought');
    resetNeeds();
    await t.pump(const Duration(seconds: 15));
  });
  testWidgets('the phone view: a phone icon between Full screen and the living room opens the city across the whole standing phone, with the drone chooser', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final phone = find.text('📱 Phone', skipOffstage: false);
    expect(phone, findsOneWidget);
    // It sits between the Full screen chip and the door chips.
    final fullX = t.getTopLeft(find.text('⛶ Full screen', skipOffstage: false)).dx;
    final phoneX = t.getTopLeft(phone).dx;
    expect(phoneX, greaterThan(fullX));
    await t.ensureVisible(phone);
    await t.pump(const Duration(milliseconds: 200));
    await t.tap(phone);
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('Drone film'), findsOneWidget, reason: 'the drone chooser opens straight away');
    expect(find.byType(RotatedBox), findsNothing, reason: 'the phone stays standing: nothing is turned on its side');
    expect(find.byIcon(Icons.close_rounded), findsWidgets);
    await t.tap(find.byIcon(Icons.close_rounded).first);
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(seconds: 12));
  });
  test('the drone never hangs in one place: no climbing and dropping on the same spot, and no leg that stays long', () {
    final city = HomeProject(seed: 4).rooms[11];
    for (final what in const ['billboards', 'edges', 'city', 'houses', 'traffic', 'all']) {
      final legs = buildDroneLegs(city, what);
      for (final l in legs) {
        for (var i = 1; i < l.eyes.length; i++) {
          final a = l.eyes[i - 1], b = l.eyes[i];
          final flat = (a.x - b.x).abs() + (a.z - b.z).abs();
          expect(flat < 10 && (a.y - b.y).abs() > 100, isFalse, reason: '$what: a climb or drop on the same spot at (${a.x.round()}, ${a.z.round()})');
        }
        if (l.heli != null || l.follow != null) expect(l.secs, lessThanOrEqualTo(6), reason: '$what: a helicopter or vehicle leg is short and sweeping');
      }
    }
  });
}
