import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_city_delivery.dart';
import 'package:ngmy/ngmy_city_needs.dart';
import 'package:ngmy/ngmy_city_uber.dart';
import 'package:ngmy/ngmy_construction_cityin.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
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

  test('energy: about five minutes of walking use it all, then three minutes of rest, then back at half; food helps', () {
    resetNeeds();
    final n = CityNeeds.session;
    final said = <String>[];
    var t = 0.0;
    while (!n.resting && t < 400) {
      final m = n.tick(1, walking: true);
      if (m != null) said.add(m);
      t++;
    }
    expect(t, inInclusiveRange(295, 305), reason: 'five minutes of straight walking');
    expect(n.resting, isTrue);
    expect(said.any((m) => m.contains('tired')), isTrue, reason: 'it warns when low');
    expect(said.any((m) => m.contains('rest')), isTrue);
    // While resting, walking changes nothing and the time runs down.
    var rest = 0;
    while (n.resting && rest < 400) {
      n.tick(1, walking: true);
      rest++;
    }
    expect(rest, inInclusiveRange(178, 182), reason: 'three minutes');
    expect(n.energy, closeTo(0.5, 1e-9), reason: 'back at half');
    // Food gives energy back, and ends a rest early.
    n.energy = 0;
    n.restLeft = 100;
    n.eat(0.12);
    expect(n.resting, isTrue, reason: 'an apple is not enough to get going');
    n.eat(0.3);
    expect(n.resting, isFalse);
    expect(n.energy, closeTo(0.42, 1e-9));
    resetNeeds();
  });

  test('gas: about a minute of driving empties the tank, buying gas fills it', () {
    resetNeeds();
    final n = CityNeeds.session;
    var t = 0;
    while (!n.outOfGas && t < 200) {
      n.tick(1, driving: true);
      t++;
    }
    expect(t, inInclusiveRange(59, 61));
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
    // All connected: the button is there, in the chips and next to the drone button in full screen.
    var all = half;
    for (var seed = 1; seed < 40; seed++) {
      all = RoomProject(seed: seed, kind: 0)..fastForward()..completeWiring();
      if (all.orders.isNotEmpty) break;
    }
    city.houseWork[house.id] = all;
    st.setState(() {});
    await t.pump(const Duration(milliseconds: 200));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('✅ Complete work'), -120, scrollable: row);
    expect(find.text('✅ Complete work'), findsOneWidget);
    st.full = true;
    st.setState(() {});
    await t.pump(const Duration(milliseconds: 200));
    expect(find.byIcon(Icons.task_alt_rounded), findsOneWidget, reason: 'next to the drone button in full screen');
    st.full = false;
    st.setState(() {});
    await t.pump(const Duration(milliseconds: 200));
    final before = (st.comm as Community).points;
    await t.scrollUntilVisible(find.text('✅ Complete work'), -120, scrollable: row);
    await t.ensureVisible(find.text('✅ Complete work'));
    await t.tap(find.text('✅ Complete work'));
    await t.pump(const Duration(milliseconds: 300));
    expect(city.darkHouses.contains(house.id), isFalse, reason: 'the power is back');
    expect((st.comm as Community).points, before + 20);
    expect(find.text('✅ Complete work'), findsNothing);
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
}
