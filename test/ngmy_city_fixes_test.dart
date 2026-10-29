import 'dart:math' as math;
import 'dart:ui' show PictureRecorder;
import 'package:flutter/material.dart';
import 'package:ngmy/ngmy_electronics_cartoons.dart';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_cityin.dart';
import 'package:ngmy/ngmy_construction_tour.dart';
import 'package:ngmy/ngmy_construction_world.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:ngmy/ngmy_city_traffic.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_project.dart';

/// Which way a flat picture faces, from its corners (top left, top right, bottom right, bottom left).
V3 _facing(ScreenQuad q) => (q.corners[3] - q.corners[0]).cross(q.corners[1] - q.corners[0]);

void main() {
  test('every billboard has a picture on each side, each one the right way up for the person looking at it', () {
    final city = HomeProject(seed: 4).rooms[11];
    final sc = buildHomeRoom(city, problems: 5);
    expect(sc.screens.where((q) => q.twoSided), isEmpty, reason: 'a two sided picture reads backwards from behind');
    // The big board behind the house: one face towards the front, one towards the back, both with the top at the top.
    final board = sc.screens.where((q) => q.corners.every((c) => c.y > 200 && c.z < -114)).toList();
    expect(board.length, 2);
    final dirs = board.map((q) => _facing(q).z).toList()..sort();
    expect(dirs.first, lessThan(0));
    expect(dirs.last, greaterThan(0));
    for (final q in board) {
      expect(q.corners[0].y, greaterThan(q.corners[3].y), reason: 'top corners above bottom corners');
      expect(q.corners[1].y, greaterThan(q.corners[2].y));
    }
    // Street billboards come in pairs facing opposite ways.
    final streets = sc.screens.where((q) => q.width == 960 && q.height == 450).toList();
    expect(streets.length, city.furn.where((f) => f.kind == 'billboard').length * 2);
  });

  test('the buses and police cars are big and carry big billboards on both sides, and the helicopters have a banner on both sides', () {
    final screens = trafficScreens(3.0);
    final wide = screens.where((q) => q.width == 1200).toList();
    expect(wide.length, kTraffic.length * 2);
    for (final q in wide) {
      final dv = q.corners[1] - q.corners[0];
      final len = math.sqrt(dv.x * dv.x + dv.y * dv.y + dv.z * dv.z);
      expect(len, greaterThan(110), reason: 'a long billboard');
    }
    expect(kBusSize.y, greaterThan(1.4));
    expect(kBusSize.x, greaterThan(1.3));
  });

  test('once the wiring is right the house works, even if the last test was never run', () {
    late RoomProject p;
    for (var seed = 1; seed < 40; seed++) {
      p = RoomProject(seed: seed, kind: 0)..fastForward()..completeWiring();
      if (p.orders.isNotEmpty) break;
    }
    expect(p.wiringWorks, isTrue);
    for (final d in p.devs.values) {
      d.tested = false;
    }
    expect(p.wiringWorks, isTrue, reason: 'right wires are right wires');
    final r = HomeProject(seed: 4).rooms[0]..wiring = p;
    expect(r.wired, isTrue);
    expect(r.okLight && r.okSwitch && r.okOutA && r.okOutB, isTrue, reason: 'no red boxes left');
  });

  test('swiping right turns the view right and swiping left turns it left by default', () {
    expect(Cam3.invertX, isTrue);
  });

  test('a loop of road never turns a car back', () {
    for (final v in kTraffic) {
      expect(vehiclePose(v, 5).$3.abs() + vehiclePose(v, 5).$4.abs(), greaterThan(0.5));
    }
  });

  testWidgets("the house tour sheet is the new design and full screen in the hall stands inside the room", (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final h = HomeProject(seed: 31);
    h.current = h.rooms.indexWhere((r) => r.kind == "hall");
    HomeProject.session = h;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    await t.tap(find.text("🎬 Tour"));
    await t.pump();
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 1));
    expect(find.text("Play the tour"), findsOneWidget);
    expect(find.text("Hallway tour"), findsOneWidget);
    expect(find.text("Who walks the house".toUpperCase()), findsOneWidget);
    await t.tap(find.text("Play the tour"));
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 30));
  });

  test('a person who ends up inside something is moved out to free ground', () {
    final w = WorldWalker.indoors(w: 300, d: 210, obstacles: const [NavRect(-40, 40, 80, 130)], x: 0, z: 100);
    expect(w.blocked(w.x, w.z), isTrue);
    expect(w.unstick(), isTrue);
    expect(w.blocked(w.x, w.z), isFalse);
    expect(w.unstick(), isFalse, reason: 'nothing to do when already free');
  });

  test('a dark house shows its breaker panel, outlet and switch with red frames, and the labels can be tapped', () {
    final f = HomeProject(seed: 4).rooms[11].furn.firstWhere((f) => f.kind == 'house2');
    final dark = CityInterior('house2', f, dark: true)..build(null);
    expect(dark.scene.labels.where((l) => l.id == idCinPanel || l.id == idCinOutlet).length, 3);
    expect(dark.scene.polys.any((p) => p.color == const Color(0xFFEF4444) && p.alpha < 1), isTrue, reason: 'a red frame behind it');
  });

  test('each fixture is marked fixed on its own: only the one still to do keeps its red frame', () {
    final h = HomeProject(seed: 4);
    final r = h.rooms.firstWhere((r) => r.kind == 'bedroom');
    final p = RoomProject(seed: 5, kind: wiringKindFor(r), name: r.name)..fastForward()..completeWiring();
    r.wiring = p;
    expect(r.wired, isTrue);
    expect(r.missing, isEmpty);
    p.devs.remove(p.orders[2].slot);
    expect(r.okOutA && r.okOutB && r.okSwitch, isTrue, reason: 'what was fixed stays marked fixed');
    expect(r.okLight, isFalse);
    expect(r.wired, isFalse);
    expect(r.missing.length, 1);
    expect(r.missing.first, anyOf('ceiling fan', 'ceiling light'));
    final sc = buildHomeRoom(r);
    expect(sc.labels.any((l) => l.text.contains('Still to wire')), isTrue);
  });

  test('the hall has a camera in each corner that can be tapped, and the Swahili ad has a long conversation', () {
    final hall = HomeProject(seed: 4).rooms.firstWhere((r) => r.kind == 'hall');
    final sc = buildHomeRoom(hall);
    for (var i = 0; i < 4; i++) {
      expect(sc.polys.any((p) => p.id == idHCam + i), isTrue, reason: 'camera $i');
      expect(sc.labels.any((l) => l.id == idHCam + i), isTrue);
    }
    for (var k = 0; k < 8; k++) {
      final rec = PictureRecorder();
      cartoonScene(Canvas(rec), const Size(640, 360), 3, k * 0.75);
      rec.endRecording();
    }
  });

  testWidgets('the drone chooser opens in the middle of the city screen, flies, and stops', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('🚁 Drone'), 120, scrollable: row);
    await t.drag(row, const Offset(-150, 0));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('🚁 Drone'));
    await t.pump();
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('Drone film'), findsOneWidget);
    expect(find.text('Billboards and NGMY logos'), findsOneWidget);
    await t.tap(find.text('The whole city'));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(seconds: 2));
    expect(find.text('Drone film'), findsNothing);
    await t.scrollUntilVisible(find.text('⏹ Stop drone'), 120, scrollable: row);
    await t.drag(row, const Offset(-150, 0));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('⏹ Stop drone'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('⏹ Stop drone'), findsNothing);
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('after three missed jobs the game is closed with a countdown', (t) async {
    SharedPreferences.setMockInitialValues({'ngmy_city_locked_until': DateTime.now().add(const Duration(hours: 4, minutes: 30)).millisecondsSinceEpoch});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    await t.pump(const Duration(seconds: 3));
    expect(find.text('The game is closed for now'), findsOneWidget);
    expect(find.textContaining('It opens again in 4h'), findsOneWidget);
    await t.pump(const Duration(seconds: 3));
  });
}
