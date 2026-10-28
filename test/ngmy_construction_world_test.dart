import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_world.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('road pieces snap to a grid so neighbours always line up', () {
    final w = HomeProject(seed: 2).rooms[11];
    w.furn.clear();
    final a = w.add('road', x: 57, z: 203);
    final b = w.add('roadturn', x: 99, z: 244);
    final c = w.add('roadtee', x: -123, z: 17);
    final d = w.add('roadcross', x: 301, z: 399);
    for (final f in [a, b, c, d]) {
      expect(f.x % kRoadGrid, 0, reason: f.kind);
      expect(f.z % kRoadGrid, 0, reason: f.kind);
    }
    expect(a.x, 40);
    expect(b.x, 80);
    a.x += 6;
    w.clamp(a);
    expect(a.x % kRoadGrid, 0);
    for (final k in kRoadKinds) {
      final t = HomeProject(seed: 1).rooms[11];
      t.furn.clear();
      t.add(k, x: 0, z: 200);
      expect(buildHomeRoom(t, mode: 'furniture').polys.length, greaterThan(10), reason: k);
    }
  });

  test('the first town has roads, five kinds of building, vehicles, animals and trees; buildings draw from one sorted piece with flat windows', () {
    final w = HomeProject(seed: 2).rooms[11];
    expect(w.w, 1800);
    for (final k in kBuildingKinds) {
      expect(w.furn.any((f) => f.kind == k), isTrue, reason: k);
    }
    expect(w.furn.where((f) => kRoadKinds.contains(f.kind)).length, greaterThan(15));
    expect(w.furn.where((f) => kAnimalKinds.contains(f.kind)).length, greaterThanOrEqualTo(6));
    expect(w.furn.any((f) => f.kind == 'firetruck') && w.furn.any((f) => f.kind == 'ambulance') && w.furn.any((f) => f.kind == 'car'), isTrue);
    expect(buildHomeRoom(w, mode: 'furniture').polys.length, lessThan(24000));
    for (final k in kBuildingKinds) {
      final t = HomeProject(seed: 1).rooms[11];
      t.furn.clear();
      final f = t.add(k, x: 0, z: 300);
      final sc = buildHomeRoom(t, mode: 'furniture');
      final mine = sc.polys.where((p) => p.id == idHFurn + f.id).toList();
      expect(mine.length, greaterThan(40), reason: k);
      expect(mine.where((p) => p.group != 0).length, mine.length, reason: '$k is sorted in groups');
      expect(mine.where((p) => p.pts.length == 4 && !p.twoSided).length, greaterThan(10), reason: '$k has windows and a door as flat patches');
    }
    // Nothing in the world reacts unless the edit button is on.
    final open = {for (final f in w.furn) if (f.kind == 'hospital' || f.kind == 'shop') idHFurn + f.id};
    for (final p in buildHomeRoom(w).polys) {
      expect(p.id == 0 || p.id >= idHDoor || open.contains(p.id), isTrue, reason: 'object ${p.id} can be tapped without the Furniture button');
    }
  });

  test('animals are drawn moving, and can be picked only in furniture mode', () {
    final w = HomeProject(seed: 2).rooms[11];
    final animals = w.furn.where((f) => kAnimalKinds.contains(f.kind)).toList();
    final still = buildHomeRoom(w, mode: 'furniture');
    for (final f in animals) {
      expect(still.polys.any((p) => p.id == idHFurn + f.id), isFalse, reason: 'animals come from the moving polys');
      expect(still.info.containsKey(idHFurn + f.id), isTrue);
    }
    final a = homeDynamic(w, 1.0, mode: 'furniture');
    final b = homeDynamic(w, 3.0, mode: 'furniture');
    final id = idHFurn + animals.first.id;
    for (final f in animals) {
      expect(a.any((p) => p.id == idHFurn + f.id), isTrue);
    }
    double midX(List<Poly> ps) {
      final v = ps.where((p) => p.id == id).expand((p) => p.pts).toList();
      return v.map((e) => e.x).reduce((x, y) => x + y) / v.length;
    }

    expect((midX(a) - midX(b)).abs(), greaterThan(0.1));
    expect(homeDynamic(w, 1.0).every((p) => p.id == 0), isTrue);
  });

  test('the person you steer walks round buildings and trees, never through the house, and reaches a spot you send them to', () {
    final w = HomeProject(seed: 2).rooms[11];
    final p = WorldWalker(w, x: 0, z: 40);
    for (var i = 0; i < 80; i++) {
      p.step(0, -1, 0.05);
    }
    expect(p.z, greaterThan(kHouseFootprint.z1));
    expect(p.atDoor, isTrue);
    final blocks = obstaclesOfWorld(w);
    final r = math.Random(4);
    for (var run = 0; run < 12; run++) {
      final q = WorldWalker(w, x: r.nextDouble() * 400 - 200, z: 200 + r.nextDouble() * 100);
      if (q.blocked(q.x, q.z)) continue;
      final ang = r.nextDouble() * 6.28;
      for (var i = 0; i < 160; i++) {
        q.step(math.sin(ang), math.cos(ang), 0.05);
        for (final o in blocks) {
          expect(o.hit(q.x, q.z, 0), isFalse, reason: 'walked into something at (${q.x}, ${q.z})');
        }
      }
    }
    final q = WorldWalker(w, x: 0, z: 40)..goTo(-90, 90);
    var steps = 0;
    while (q.advance(0.05) && steps++ < 600) {}
    expect((q.x + 90).abs(), lessThan(6));
    expect((q.z - 90).abs(), lessThan(6));
    expect(q.target, isNull);
    final s = WorldWalker(w, x: 0, z: 120)..step(1, 0, 0.1);
    expect(s.yaw, closeTo(math.pi / 2, 0.01));
    expect(s.phase, greaterThan(0));
  });

  testWidgets('in the garden Walk the city shows the round stick, run and jump, and Stop walking hides them', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 5)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final stick = find.byWidgetPredicate((w) => w.runtimeType.toString() == '_Stick');
    expect(stick, findsNothing);
    // The city's own buttons come first in the row.
    await t.tap(find.text('🚶 Walk the city'));
    await t.pump(const Duration(milliseconds: 500));
    expect(stick, findsOneWidget);
    expect(find.text('🏃 Run'), findsOneWidget);
    expect(find.text('⬆ Jump'), findsOneWidget);
    // Sliding the stick sideways walks the person across the lawn, and the camera follows.
    final painter = t.widget<CustomPaint>(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter).first).painter! as Scene3DPainter;
    final before = painter.cam.target.x;
    final g = await t.startGesture(t.getCenter(stick));
    await g.moveBy(const Offset(80, 0));
    for (var i = 0; i < 20; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    await g.up();
    expect((painter.cam.target.x - before).abs(), greaterThan(5), reason: "the person walked and the camera followed");
    // Run and jump are buttons you press, not menus.
    await t.tap(find.text('🏃 Run'));
    await t.pump(const Duration(milliseconds: 100));
    expect(find.text('🏃 Run: on'), findsOneWidget);
    await t.tap(find.text('⬆ Jump'));
    await t.pump(const Duration(milliseconds: 100));
    await t.tap(find.text('⏹ Stop walking'));
    await t.pump(const Duration(milliseconds: 300));
    expect(stick, findsNothing);
    await t.pump(const Duration(seconds: 10));
  });
}
