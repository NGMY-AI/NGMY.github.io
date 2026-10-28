import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
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
}
