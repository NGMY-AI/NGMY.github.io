import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_avatar_glb.dart';
import 'package:ngmy/ngmy_city_ads.dart';
import 'package:ngmy/ngmy_city_traffic.dart';
import 'package:ngmy/ngmy_construction_cityin.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import "package:ngmy/ngmy_construction_tour.dart";
import 'package:ngmy/ngmy_construction_world.dart';

void main() {
  test('the person can run (faster), jump (up and down again), and a stick pushed half way walks half as fast', () {
    final room = HomeProject(seed: 3).rooms[11];
    final a = WorldWalker(room, x: 0, z: 200), b = WorldWalker(room, x: 0, z: 200), c = WorldWalker(room, x: 0, z: 200);
    b.running = true;
    a.step(1, 0, 0.1);
    b.step(1, 0, 0.1);
    c.step(0.5, 0, 0.1);
    expect(b.x, greaterThan(a.x * 1.7));
    expect(c.x, closeTo(a.x / 2, 0.01));
    expect(a.lift, 0);
    a.jump();
    var top = 0.0;
    for (var i = 0; i < 30; i++) {
      a.fall(0.02);
      top = math.max(top, a.lift);
    }
    expect(top, greaterThan(10));
    for (var i = 0; i < 60; i++) {
      a.fall(0.02);
    }
    expect(a.lift, 0, reason: 'back on the ground');
  });

  test('in the hospital the sick are admitted at the desk and patients are treated at their bed, just by walking there', () {
    final home = HomeProject(seed: 3);
    final cm = Community(houseSeed: 3, seed: 3);
    final hospital = home.rooms[11].furn.firstWhere((f) => f.kind == 'hospital');
    final inn = CityInterior('hospital', hospital)..build(cm);
    expect(inn.scene.polys, isNotEmpty);
    // Nothing happens while you only stand at the door.
    expect(inn.update(cm), isNull);
    cm.residents[2].sick = true;
    inn.walker
      ..x = -80
      ..z = 66;
    final admitted = inn.update(cm);
    expect(admitted, isNotNull);
    expect(cm.residents[2].inBed, greaterThanOrEqualTo(0), reason: 'the sick person is in a bed now');
    // Standing there again does not do it twice; walking away and back does.
    expect(inn.update(cm), isNull);
    // The patient is treated at the bed.
    final bed = cm.residents[2].inBed;
    cm.beds[bed].care = 10;
    cm.medicine = 3;
    inn.walker
      ..x = 20
      ..z = 48.0 + bed * 50;
    final before = cm.medicine;
    expect(inn.update(cm), isNotNull);
    expect(cm.medicine, before - 1);
    expect(cm.beds[bed].care, 100);
    // The walker leaves by the green mat at the front.
    inn.walker
      ..x = 0
      ..z = CityInterior.d - 6;
    expect(inn.leaving, isTrue);
  });

  test('in the shop, walking onto the food mat buys food and onto the medicine mat buys medicine', () {
    final home = HomeProject(seed: 3);
    final cm = Community(houseSeed: 3, seed: 3);
    cm.points = 40;
    final shop = home.rooms[11].furn.firstWhere((f) => f.kind == 'shop');
    final inn = CityInterior('shop', shop)..build(cm);
    final food = cm.food, med = cm.medicine;
    inn.walker
      ..x = -64
      ..z = 120;
    expect(inn.update(cm), contains('food'));
    expect(cm.food, food + 5);
    inn.walker
      ..x = 64
      ..z = 120;
    expect(inn.update(cm), contains('medicine'));
    expect(cm.medicine, med + 3);
    expect(cm.points, 40 - 10 - 12);
    // The shopkeeper is drawn with the moving things, and so is the person.
    expect(inn.dynamicPolys(1.0, kAvatars["xbot"]!).isNotEmpty, isTrue);
  });

  test('feeding an animal earns a point; a vehicle you drive is drawn where you are and its parked self is hidden', () {
    final cm = Community(houseSeed: 3, seed: 3);
    final p = cm.points;
    expect(cm.feedAnimal('Cow'), contains('fed the cow'));
    expect(cm.points, p + 1);
    final home = HomeProject(seed: 3);
    final city = home.rooms[11];
    final car = city.furn.firstWhere((f) => f.kind == 'car');
    final shown = buildHomeRoom(city).polys.where((q) => q.id == idHFurn + car.id || true).length;
    final hidden = buildHomeRoom(city, hideFurn: {idHFurn + car.id}).polys.length;
    expect(hidden, lessThan(shown), reason: 'the car you are in is not also standing in the street');
    final plain = homeDynamic(city, 1.0).length;
    final driving = homeDynamic(city, 1.0, drive: (car.kind, 10.0, 200.0, 0.0, 0)).length;
    expect(driving, greaterThan(plain + 20));
  });

  testWidgets('when somebody calls, the phone rings with a banner to answer, and Later puts it away', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final h = HomeProject(seed: 21)..current = 11;
    HomeProject.session = h;
    final cm = Community(houseSeed: 21, seed: 21);
    Community.active = cm;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('is calling'), findsNothing);
    // Time passes in the city and, sooner or later, somebody calls for help.
    var rang = false;
    for (var i = 0; i < 150 && !rang; i++) {
      await t.pump(const Duration(seconds: 1));
      rang = find.text('incoming call').evaluate().isNotEmpty;
    }
    expect(rang, isTrue, reason: 'the phone rings when a call comes in');
    // A phone-call screen with a green answer and a red hang-up button.
    expect(find.byIcon(Icons.call_rounded), findsOneWidget);
    expect(find.byIcon(Icons.call_end_rounded), findsOneWidget);
    // Answering opens a text message with what the person needs.
    await t.tap(find.byIcon(Icons.call_rounded));
    await t.pump();
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 1));
    expect(find.text('Messages'), findsOneWidget);
    expect(find.textContaining('Go and fix it'), findsOneWidget);
    expect(find.textContaining('On my way!'), findsOneWidget);
    Community.active = null;
    await t.pump(const Duration(seconds: 10));
  });

  test('the hall carpet is part of the floor group, so no piece of floor can cut it at any angle', () {
    final hall = HomeProject(seed: 3).rooms[5];
    final sc = buildHomeRoom(hall);
    final carpet = sc.screens.firstWhere((q) => q.id == 0);
    final floor = sc.polys.where((p) => p.order == -1).toList();
    expect(carpet.group, isNot(0));
    expect(floor.every((p) => p.group == carpet.group), isTrue);
  });

  testWidgets('seen from outside, the walls on your side are left out so nothing inside is ever hidden', (t) async {
    const wall = Poly([V3(-50, 0, 0), V3(50, 0, 0), V3(50, 100, 0), V3(-50, 100, 0)], V3(0, 0, -1), Color(0xFFCCCCCC), 5, order: 0, twoSided: true);
    const floor = Poly([V3(-50, 0, 0), V3(50, 0, 0), V3(50, 0, 100), V3(-50, 0, 100)], V3(0, 1, 0), Color(0xFF885533), 6, order: -1, twoSided: true);
    const tv = Poly([V3(-20, 30, 1), V3(20, 30, 1), V3(20, 60, 1), V3(-20, 60, 1)], V3(0, 0, 1), Color(0xFF2244AA), 7, order: 1, twoSided: true);
    Future<Set<int>> seenFrom(double yaw) async {
      await t.pumpWidget(MaterialApp(home: Scene3DView(scene: const Scene3D([wall, floor, tv], shell: (-50.0, 50.0, 0.0, 100.0)), cam: Cam3(yaw: yaw, pitch: 0.2, dist: 220, target: const V3(0, 30, 50))..setFree(true))));
      await t.pump(const Duration(milliseconds: 100));
      final painter = t.widget<CustomPaint>(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter).first).painter! as Scene3DPainter;
      return {for (final h in painter.hits.list) h.$2};
    }

    final front = await seenFrom(0);
    expect(front, containsAll([5, 6, 7]), reason: 'from the front you see the wall, the floor and the TV');
    final behind = await seenFrom(3.14159);
    expect(behind.contains(5), isFalse, reason: 'the wall between you and the room is left out');
    expect(behind, containsAll([6, 7]), reason: 'so the floor and the TV are still there');
  });

  test('the people of the city are each busy with something real, with props, and none strolls backwards', () {
    final home = HomeProject(seed: 4);
    final cm = Community(houseSeed: 4);
    final figs = cm.figuresIn(home, 11);
    expect(figs.length, 7);
    expect(figs.every((f) => f.activity.isNotEmpty && f.activityLabel.isNotEmpty), isTrue);
    expect({for (final f in figs) f.activity}.length, greaterThanOrEqualTo(6), reason: 'different jobs');
    expect(figs.every((f) => f.wander == 0), isTrue);
    expect(figs.every((f) => f.style.avatar != 'michelle'), isTrue, reason: 'nobody dances all day');
    final city = home.rooms[11];
    final bare = homeDynamic(city, 1.0).length;
    final busy = homeDynamic(city, 1.0, residents: figs).length;
    expect(busy, greaterThan(bare + 100));
    expect(city.furn.where((f) => f.kind == 'house2').length, greaterThanOrEqualTo(10), reason: 'a bigger town');
    expect(buildHomeRoom(city, residents: figs).labels.where((l) => l.text.contains('Cooking') || l.text.contains('Feeding')).length, 2);
  });

  test('the hospital has a doctor, a nurse and patients lying in their beds', () {
    final home = HomeProject(seed: 3);
    final cm = Community(houseSeed: 3, seed: 3);
    cm.residents[1].sick = true;
    cm.admit(cm.residents[1]);
    final inn = CityInterior('hospital', home.rooms[11].furn.firstWhere((f) => f.kind == 'hospital'))..build(cm);
    final withPatient = inn.dynamicPolys(1.0, kAvatars['xbot']!).length;
    final empty = CityInterior('hospital', home.rooms[11].furn.firstWhere((f) => f.kind == 'hospital'))..build(Community(houseSeed: 3, seed: 3));
    expect(withPatient, greaterThan(empty.dynamicPolys(1.0, kAvatars['xbot']!).length));
    expect(inn.scene.labels.any((l) => l.text.contains('Nurse')), isTrue);
  });

  testWidgets('Full screen shows only the game, turned on its side, with the walking controls and a way back', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('⛶ Full screen'), 120, scrollable: row);
    await t.drag(row, const Offset(-120, 0));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('⛶ Full screen'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byIcon(Icons.fullscreen_exit_rounded), findsOneWidget);
    expect(find.text('🎬 Tour'), findsNothing, reason: 'the buttons at the top are gone');
    expect(find.byWidgetPredicate((w) => w.runtimeType.toString() == '_Stick'), findsOneWidget);
    expect(find.byType(RotatedBox), findsWidgets);
    await t.tap(find.byIcon(Icons.fullscreen_exit_rounded));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byIcon(Icons.fullscreen_exit_rounded), findsNothing);
    await t.pump(const Duration(seconds: 10));
  });

  test('the city has billboards, big houses with TV windows, self-driving buses and police cars, and helicopters, all playing different NGMY ads', () {
    final city = HomeProject(seed: 4).rooms[11];
    expect(city.furn.where((f) => f.kind == 'billboard').length, greaterThanOrEqualTo(8));
    expect(city.furn.where((f) => f.kind == 'bighouse').length, greaterThanOrEqualTo(3));
    final sc = buildHomeRoom(city, problems: 5);
    final bill = city.furn.where((f) => f.kind == 'billboard').length;
    final big = city.furn.where((f) => f.kind == 'bighouse').length;
    // One screen per billboard, two TVs per big house, and the posters on the house, one of them the big billboard behind it.
    expect(sc.screens.length, greaterThanOrEqualTo(bill + big * 2 + 5));
    expect(kCityAdCount, greaterThanOrEqualTo(15), reason: 'many different ads');
    // The sign that says how many rooms need work is at the top of the house, above the roof.
    final label = sc.labels.firstWhere((l) => l.text.contains('rooms still need work'));
    expect(label.at.y, greaterThan(200));
    // Vehicles drive by themselves: a moment later they are somewhere else, and they keep to their street.
    expect(kTraffic.length, lessThanOrEqualTo(4), reason: 'not too many cars');
    for (final v in kTraffic) {
      final a = vehiclePose(v, 1.0), b = vehiclePose(v, 11.0);
      expect((a.$1 - b.$1).abs() + (a.$2 - b.$2).abs(), greaterThan(50), reason: v.kind);
      // It drives round its loop and never turns back: it keeps going the same way round, and stays on the loop.
      var turned = 0.0;
      var last = vehiclePose(v, 0);
      for (var t = 1.0; t < 200; t += 1) {
        final p = vehiclePose(v, t);
        expect(p.$1, inInclusiveRange(v.x0 - 1, v.x1 + 1));
        expect(p.$2, inInclusiveRange(v.z0 - 1, v.z1 + 1));
        turned += last.$3 * p.$4 - last.$4 * p.$3;
        last = p;
      }
      expect(turned, greaterThan(0), reason: 'always turns the same way round');
    }
    expect(kTraffic.where((v) => v.kind == 'bus'), isNotEmpty);
    expect(kTraffic.where((v) => v.kind == 'police'), isNotEmpty);
    expect(trafficPolys(3.0).length, greaterThan(300));
    final screens = trafficScreens(3.0);
    expect(screens.length, kTraffic.length * 2 + kHelis.length * 2, reason: 'a billboard on each side of every vehicle and on each helicopter');
    // The helicopters are high in the sky.
    expect(trafficPolys(3.0).any((p) => p.pts.any((v) => v.y > 200)), isTrue);
  });

  test('every person in the city is a different colour', () {
    final home = HomeProject(seed: 4);
    final figs = Community(houseSeed: 4).figuresIn(home, 11);
    expect({for (final f in figs) f.style.shirt.toARGB32()}.length, figs.length, reason: 'no two the same');
    final city = home.rooms[11];
    final polys = homeDynamic(city, 1.0, residents: figs);
    GlbAvatar.enabled = false;
    expect(polys, isNotEmpty);
    GlbAvatar.enabled = true;
  });

  test('every building can be entered; the school, the fire station and the houses have their own jobs; the market buys what you carry', () {
    expect(kEnterable, containsAll(['hospital', 'shop', 'school', 'firestation', 'house2', 'bighouse']));
    final home = HomeProject(seed: 3);
    final cm = Community(houseSeed: 3, seed: 3);
    final city = home.rooms[11];
    Furn of(String k) => city.furn.firstWhere((f) => f.kind == k);
    // The school: walk onto the mat and teach.
    final school = CityInterior('school', of('school'))..build(cm);
    final p0 = cm.points;
    school.walker
      ..x = 0
      ..z = 80;
    expect(school.update(cm), contains('taught'));
    expect(cm.points, p0 + 3);
    // The fire station.
    final fire = CityInterior('firestation', of('firestation'))..build(cm);
    fire.walker
      ..x = -60
      ..z = 130;
    expect(fire.update(cm), contains('equipment'));
    // A house with no power asks for the wiring job at its panel; one with power does not.
    final dark = CityInterior('house2', of('house2'), dark: true)..build(cm);
    dark.walker
      ..x = -100
      ..z = 100;
    expect(dark.update(cm), isNotNull);
    expect(dark.jobRequested, isTrue);
    final fine = CityInterior('house2', of('house2'))..build(cm);
    fine.walker
      ..x = -100
      ..z = 100;
    expect(fine.update(cm), contains('every breaker is on'));
    expect(fine.jobRequested, isFalse);
    // The market stall buys a crate you carry, and only then.
    final shop = CityInterior('shop', of('shop'))..build(cm);
    shop.walker
      ..x = 0
      ..z = 84;
    expect(shop.update(cm), contains('Bring goods'));
    shop.walker
      ..x = 0
      ..z = 200;
    shop.update(cm);
    shop.carrying = 'crate';
    final before = cm.points;
    shop.walker
      ..x = 0
      ..z = 84;
    expect(shop.update(cm), contains('sold'));
    expect(cm.points, before + 6);
    expect(shop.carrying, isNull);
  });

  test('the town is bigger and more spread out: big buildings, houses well back from the streets, poles and lights, crates to carry', () {
    final city = HomeProject(seed: 4).rooms[11];
    expect(kFurnKinds['hospital']!.w, greaterThanOrEqualTo(160));
    expect(kFurnKinds['house2']!.w, greaterThanOrEqualTo(100));
    final roads = city.furn.where((f) => kRoadKinds.contains(f.kind)).toList();
    for (final f in city.furn.where((f) => kBuildingKinds.contains(f.kind) || f.kind == 'bighouse')) {
      final k = kFurnKinds[f.kind]!;
      for (final r in roads) {
        final gapX = (f.x - r.x).abs() - k.w / 2 - 20, gapZ = (f.z - r.z).abs() - k.d / 2 - 20;
        expect(gapX > 60 || gapZ > 60, isTrue, reason: '${f.kind} at (${f.x}, ${f.z}) is too close to the road at (${r.x}, ${r.z})');
      }
    }
    expect(city.furn.where((f) => f.kind == 'house2' || f.kind == 'bighouse').length, greaterThanOrEqualTo(14));
    expect(city.furn.where((f) => f.kind == 'pole').length, greaterThanOrEqualTo(10));
    expect(city.furn.where((f) => f.kind == 'lamppost').length, greaterThanOrEqualTo(8));
    expect(city.furn.where((f) => f.kind == 'crate').length, greaterThanOrEqualTo(4));
    // A broken street light and a house with no power are marked in the scene.
    city.brokenLamps.add(city.furn.firstWhere((f) => f.kind == 'pole').id);
    city.darkHouses.add(city.furn.firstWhere((f) => f.kind == 'house2').id);
    final sc = buildHomeRoom(city);
    expect(sc.labels.any((l) => l.text.contains('Light out')), isTrue);
    expect(sc.labels.any((l) => l.text.contains('No power')), isTrue);
  });

  testWidgets('in full screen, double tapping the buttons hides them, and double tapping where they were brings them back', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 33)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('⛶ Full screen'), 120, scrollable: row);
    await t.drag(row, const Offset(-120, 0));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('⛶ Full screen'));
    await t.pump(const Duration(milliseconds: 500));
    final exit = find.byIcon(Icons.fullscreen_exit_rounded);
    expect(exit, findsOneWidget);
    final at = t.getCenter(exit);
    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 60));
    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byIcon(Icons.fullscreen_exit_rounded), findsNothing, reason: 'two quick taps hide the buttons');
    expect(find.byWidgetPredicate((w) => w.runtimeType.toString() == '_Stick'), findsOneWidget, reason: 'the game and its controls stay');
    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 60));
    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byIcon(Icons.fullscreen_exit_rounded), findsOneWidget, reason: 'two quick taps where they were bring them back');
    await t.pump(const Duration(seconds: 10));
  });
}
