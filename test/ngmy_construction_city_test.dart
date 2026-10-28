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
      rang = find.textContaining('is calling').evaluate().isNotEmpty;
    }
    expect(rang, isTrue, reason: 'the phone rings when a call comes in');
    expect(find.text('Answer'), findsOneWidget);
    await t.tap(find.text('Later'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('Answer'), findsNothing);
    Community.active = null;
    await t.pump(const Duration(seconds: 10));
  });
}
