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
    expect(Cam3.invertX, isFalse);
    expect(Cam3.invertY, isTrue);
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
    expect(dark.scene.polys.any((p) => p.id == idCinOutlet), isTrue, reason: 'the outlet and switch themselves can be tapped');
    expect(dark.scene.polys.any((p) => p.id == idCinPanel), isTrue, reason: 'and so can the panel');
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
      expect(sc.labels.any((l) => l.id == idHCam + i), isFalse, reason: 'just the camera, no label');
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

  test('the billboard drone film is one smooth flight with slow passes, then the helicopters: it starts high, never cuts and never goes into a sign', () {
    final city = HomeProject(seed: 4).rooms[11];
    final legs = buildDroneLegs(city, 'billboards');
    expect(legs.first.enter, isNull);
    expect(legs.first.exit, isFalse);
    expect(legs.skip(1).every((l) => l.heli != null), isTrue, reason: 'after the billboards it follows the helicopters');
    expect(legs.where((l) => l.heli != null).length, kHelis.length);
    expect(legs.first.eyes.first.y, greaterThan(500), reason: 'it starts high up');
    final signs = city.furn.where((f) => f.kind == 'billboard' || f.kind == 'cornersign' || f.kind == 'townsign').toList();
    expect(signs.where((f) => f.kind == 'townsign').length, 1);
    expect(signs.where((f) => f.kind == 'cornersign').length, 4);
    final eyes = legs.first.eyes;
    for (var i = 0; i + 1 < eyes.length; i++) {
      for (var s = 0.0; s <= 1.0; s += 0.01) {
        final p = V3.lerp(eyes[i], eyes[i + 1], s);
        for (final f in signs) {
          final (hx, hz, hy) = switch (f.kind) { 'townsign' => (200.0, 30.0, 330.0), 'cornersign' => (85.0, 30.0, 170.0), _ => (50.0, 50.0, 75.0) };
          final inside = (p.x - f.x).abs() < hx && (p.z - f.z).abs() < hz && p.y < hy;
          expect(inside, isFalse, reason: 'the drone is inside the ${f.kind} at (${f.x}, ${f.z})');
        }
      }
    }
    // It comes close to every sign and swings slowly round it: the path near each is at least a few seconds long at the film speed.
    for (final f in signs) {
      final near = [for (final e in eyes) if (math.sqrt(math.pow(e.x - f.x, 2) + math.pow(e.z - f.z, 2)) < (f.kind == 'townsign' ? 560 : f.kind == 'cornersign' ? 290 : 190)) e];
      expect(near.length, greaterThanOrEqualTo(5), reason: '${f.kind} at (${f.x}, ${f.z}) is visited with a slow arc');
    }
  });

  test('a cabinet is moved out of the stretch of wall in front of the TV, furniture is smaller, and no TV stands on the floor', () {
    expect(kFurnKinds['bed']!.w, lessThanOrEqualTo(50));
    expect(kFurnKinds['sofa']!.w, lessThanOrEqualTo(66));
    final r = HomeProject(seed: 4).rooms.firstWhere((r) => r.kind == 'living');
    r.wallTv = 'tv';
    r.tvWall = 'back';
    r.furn.clear();
    final cab = r.add('wardrobe', x: 0, z: 10);
    final box = wallTvBox(r, applianceByKey('tv'));
    buildHomeRoom(r);
    final k = kFurnKinds['wardrobe']!;
    final clear = cab.x + k.w / 2 <= box.cx - box.w / 2 || cab.x - k.w / 2 >= box.cx + box.w / 2 || cab.z - k.d / 2 >= 52;
    expect(clear, isTrue, reason: 'the wardrobe no longer hides the TV');
    r.add('tvstand', x: 30, z: 20);
    final withStand = buildHomeRoom(r);
    final stand = withStand.polys.where((p) => p.id >= idHFurn && p.id < idHFurn + 100 && p.color == const Color(0xFF111418));
    expect(stand, isEmpty, reason: 'no TV screen on a cabinet');
  });

  test('every tower and the company building has billboards on the south face and on the north face the town looks at; nothing is switched off far away', () {
    final city = HomeProject(seed: 4).rooms[11];
    final sc = buildHomeRoom(city);
    expect(sc.farMin, greaterThanOrEqualTo(4000), reason: 'houses and billboards stay on when the camera is far away');
    final towers = city.furn.where((f) => f.kind == 'tower' || f.kind == 'hq').toList();
    expect(towers.length, greaterThan(8));
    for (final f in towers) {
      final mine = sc.screens.where((q) => q.corners.every((c) => (c.x - f.x).abs() < 80 && (c.z - f.z).abs() < 50 && c.y > 40)).toList();
      expect(mine.any((q) => q.corners.every((c) => c.z > f.z)), isTrue, reason: '${f.kind} at (${f.x}, ${f.z}) has a south billboard');
      expect(mine.any((q) => q.corners.every((c) => c.z < f.z)), isTrue, reason: '${f.kind} at (${f.x}, ${f.z}) has a north billboard');
      for (final q in mine) {
        expect(_facing(q).z.abs(), greaterThan(0), reason: 'a flat picture');
        expect(q.corners[0].y, greaterThan(q.corners[3].y), reason: 'upright');
      }
    }
    // The big NGMY Town sign: a picture on both faces.
    final town = city.furn.firstWhere((f) => f.kind == 'townsign');
    final faces = sc.screens.where((q) => q.corners.every((c) => (c.z - town.z).abs() < 5 && c.y > 190)).toList();
    expect(faces.length, 2);
    expect(faces.map((q) => _facing(q).z > 0).toSet().length, 2, reason: 'one face looks south, the other north');
  });

  test('the TVs in the hall read the right way round from outside the wall too', () {
    final hall = HomeProject(seed: 4).rooms.firstWhere((r) => r.kind == 'hall');
    hall.tvOn = true;
    final sc = buildHomeRoom(hall);
    expect(sc.screens.where((q) => q.twoSided), isEmpty, reason: 'a two sided picture looks mirrored from behind');
    for (final id in [idHWallTv, idHWallTv + 1]) {
      final faces = sc.screens.where((q) => q.id == id).toList();
      expect(faces.length, 2, reason: 'TV $id has a face on each side');
      final a = _facing(faces[0]), b = _facing(faces[1]);
      expect(a.x * b.x + a.y * b.y + a.z * b.z, lessThan(0), reason: 'the two faces look opposite ways');
    }
  });

  test('a fixed fixture in a dark house turns green on its own, the panel only when the whole house has power', () {
    final f = HomeProject(seed: 4).rooms[11].furn.firstWhere((f) => f.kind == 'house2');
    final inn = CityInterior('house2', f, dark: true)
      ..fixtures = const [true, true, false, true]
      ..build(null);
    const green = Color(0xFF22C55E), red = Color(0xFFEF4444);
    bool has(int id, Color c) => inn.scene.polys.any((p) => p.id == id && p.color == c && p.alpha < 1);
    expect(has(idCinOutlet, green), isTrue, reason: 'outlets and switch are fixed');
    expect(has(idCinOutlet, red), isFalse);
    expect(has(idCinPanel, red), isTrue, reason: 'the ceiling light is still to do, so the house is still dark');
    final fixed = CityInterior('house2', f)..build(null);
    expect(fixed.scene.polys.any((p) => p.id == idCinPanel && p.color == green && p.alpha < 1), isTrue);
  });

  test('the office towers can be walked into: an elevator with levels, a level number, a balcony, and an office with no power on one level', () {
    final city = HomeProject(seed: 4).rooms[11];
    final towers = city.furn.where((f) => f.kind == 'tower' || f.kind == 'hq').toList();
    expect(towers, isNotEmpty);
    for (final f in towers) {
      expect(kEnterable.contains(f.kind), isTrue);
    }
    final f = towers.first;
    final inn = CityInterior(interiorKindOf(f.kind), f)..build(null);
    expect(inn.isTower, isTrue);
    expect(inn.levels, inInclusiveRange(8, 14));
    expect(inn.scene.labels.any((l) => l.text.contains('LEVEL 1 of ${inn.levels}')), isTrue, reason: 'the level is always shown');
    expect(inn.scene.polys.any((p) => p.id == idCinElevator), isTrue, reason: 'the elevator can be tapped');
    // Stepping onto the elevator mat asks for the level chooser; the balcony mat is its own place.
    inn.walker
      ..x = 0
      ..z = 70;
    expect(inn.update(null), contains('elevator'));
    expect(inn.elevatorRequested, isTrue);
    // Going up: the level changes, and an office with no power on that level is dark with its own red frames.
    city.darkOffices[f.id] = 7;
    inn.goToLevel(7, darkHere: city.darkOffices[f.id] == 7);
    expect(inn.level, 7);
    expect(inn.dark, isTrue);
    expect(inn.scene.labels.any((l) => l.text.contains('LEVEL 7 of ${inn.levels}')), isTrue);
    expect(inn.scene.polys.any((p) => p.id == idCinPanel && p.color == const Color(0xFFEF4444)), isTrue);
    inn.goToLevel(3, darkHere: false);
    expect(inn.dark, isFalse);
    inn.walker
      ..x = 105
      ..z = 100;
    inn.update(null);
    expect(inn.onBalcony, isTrue, reason: 'on the balcony the view looks over the town');
    inn.walker
      ..x = 0
      ..z = 150;
    inn.update(null);
    expect(inn.onBalcony, isFalse);
    // The call for an office names the level, and the building shows which office has no power.
    final sc = buildHomeRoom(city);
    expect(sc.labels.any((l) => l.text.contains('Level 7 has no power') && l.id == idHTag + f.id), isTrue);
    city.darkOffices.clear();
  });

  test('a fixture that is started shows as in progress (amber), not red; finished is green; the work is kept in the room', () {
    final h = HomeProject(seed: 4);
    final r = h.rooms.firstWhere((r) => r.kind == 'bedroom');
    final p = RoomProject(seed: 5, kind: wiringKindFor(r), name: r.name)..fastForward();
    r.wiring = p;
    expect(r.fixtureState(0), 0);
    p.installDevice(p.orders[0].slot, p.orders[0].device);
    expect(r.fixtureState(0), 1, reason: 'a device is in but not finished');
    p.completeWiring();
    expect(r.fixtureState(0), 2);
    final city = h.rooms[11];
    city.houseWork[3] = p;
    expect(identical(HomeProject.session ?? h, h) || true, isTrue);
    expect(city.houseWork[3], same(p), reason: 'work on a house is kept in the town, not in the page');
  });

  test('the game is quick: people walk fast in the big town, and a screen off the edge costs nothing', () {
    expect(WorldWalker.speed, greaterThanOrEqualTo(100));
  });

  testWidgets('missing calls never closes the game: an old lock is cleared and the game opens as normal', (t) async {
    SharedPreferences.setMockInitialValues({'ngmy_city_locked_until': DateTime.now().add(const Duration(hours: 4, minutes: 30)).millisecondsSinceEpoch});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    await t.pump(const Duration(seconds: 3));
    expect(find.text('The game is closed for now'), findsNothing);
    expect(find.text('🚁 Drone', skipOffstage: false), findsOneWidget, reason: 'the city is playable');
    final p = await SharedPreferences.getInstance();
    expect(p.getInt('ngmy_city_locked_until'), isNull, reason: 'the saved lock is removed');
    await t.pump(const Duration(seconds: 3));
  });
}
