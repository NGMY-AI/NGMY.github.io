import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_plumbing.dart';
import 'package:ngmy/ngmy_construction_tour.dart';
import 'package:ngmy/ngmy_electronics_cartoons.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

Finder _view() => find.byWidgetPredicate((w) => w is CustomPaint && w.painter is Scene3DPainter);

/// Brings a chip of the top menu into view (the rows scroll sideways) and taps it.
Future<void> _chip(WidgetTester t, String label, {int row = 0}) async {
  final rows = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right);
  if (find.text(label).evaluate().isEmpty) {
    try {
      await t.scrollUntilVisible(find.text(label), -60, scrollable: rows.at(row), maxScrolls: 30);
    } catch (_) {
      await t.scrollUntilVisible(find.text(label), 60, scrollable: rows.at(row), maxScrolls: 60);
    }
  }
  await t.ensureVisible(find.text(label));
  await t.pump(const Duration(milliseconds: 200));
  await t.tap(find.text(label));
}

Offset? _find3d(WidgetTester t, int id) {
  final painter = t.widget<CustomPaint>(_view()).painter! as Scene3DPainter;
  final box = t.getRect(_view());
  for (final h in painter.hits.list.where((h) => h.$2 == id)) {
    final r = h.$1.getBounds();
    for (var i = 0; i <= 10; i++) {
      for (var j = 0; j <= 10; j++) {
        final p = Offset(r.left + r.width * i / 10, r.top + r.height * j / 10);
        if (h.$1.contains(p) && painter.hits.pick(p) == id) return box.topLeft + p;
      }
    }
  }
  return null;
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('no NGMY ad or TV app is about Growth Income any more, and every ad still draws', () {
    expect(kNgmyApps.any((a) => a.name.contains('Growth')), isFalse);
    for (var s = 0; s < kNgmyAdCount * 6; s += 6) {
      expect(ngmyAdName(s.toDouble()).contains('Growth'), isFalse);
    }
    expect(kNgmyAdCount, 11);
    expect(kCartoonScenesCountMatches(), isTrue);
    for (var i = 0; i < kNgmyApps.length; i++) {
      paintNgmyApp(Canvas(PictureRecorder()), const Size(320, 180), i, 3.0);
    }
    // Each app that shows one ad still points at that ad's own name.
    final names = [for (var i = 0; i < kNgmyAdCount; i++) ngmyAdName(i * 6.0)];
    expect(names.toSet().length, kNgmyAdCount);
    expect(names[1], 'NGMY Jobs');
  });

  test('every lesson plays in a furnished room with a big TV showing the NGMY Jobs ad, and only the lesson is waiting', () {
    for (final id in ['outlet', 'switch', 'gfci', 'fan', 'ptrap', 'faucet']) {
      final h = HomeProject.lesson(id);
      final r = h.room;
      expect(h.isLesson, isTrue);
      expect(r.furn, isNotEmpty, reason: id);
      expect(r.wallTv, isNotNull);
      expect(r.tvOn, isTrue);
      expect(kNgmyApps[r.tvApp].name, 'Jobs');
      final s = buildHomeRoom(r);
      expect(s.screens.any((q) => q.id == idHWallTv), isTrue, reason: '$id has a TV on the wall');
      expect(r.lessonDone, isFalse);
      // The ceiling light is already in and works, except in the fan lesson.
      expect(r.okLight, id == 'fan' ? isFalse : isTrue);
      expect(r.okSwitch, id == 'switch' ? isFalse : isTrue);
      expect(r.okOutA, (id == 'outlet' || id == 'gfci') ? isFalse : isTrue);
      expect(r.plumbed, r.lessonIsPlumbing ? isFalse : isTrue);
    }
  });

  test('finishing a lesson makes its part of the room work', () {
    Map<int, String> plan(String id) => switch (id) {
          'outlet' => {idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'},
          'gfci' => {idGreen: 'ground', idSilverBottom: 'white', idBrassBottom: 'black'},
          'switch' => {idGreen: 'ground', idBrassTop: 'blackLine', idBrassBottom: 'blackLoad'},
          _ => {idNutGround: 'ground', idNutWhite: 'white', idNutBlack: 'black'},
        };
    for (final id in ['outlet', 'switch', 'gfci', 'fan']) {
      final r = HomeProject.lesson(id).room;
      final st = WiringState();
      st.attached.addAll(plan(id));
      st.stage = 2;
      r.lessonState = st;
      expect(r.lessonDone, isTrue, reason: id);
      expect(switch (id) { 'switch' => r.okSwitch, 'fan' => r.okLight, _ => r.okOutA }, isTrue);
    }
    final p = HomeProject.lesson('ptrap').room;
    p.lessonPlumb = PlumbState()
      ..placed.addAll({'tail', 'trap', 'arm'})
      ..tight.updateAll((k, v) => true)
      ..running = true;
    expect(p.lessonDone, isTrue);
    expect(p.plumbed, isTrue);
  });

  test('the house tour walks round the furniture and the walls, visits every room, opens doors, switches the TV ad and keeps to the time chosen', () {
    for (final seed in [3, 8]) {
      final h = HomeProject(seed: seed);
      final blocks = {for (final r in h.rooms) r.id: obstaclesOf(r)};
      for (final secs in kTourLengths) {
        final tour = HomeTour(h, secs.toDouble());
        expect(tour.total, closeTo(secs, secs * 0.15 + 2), reason: '$secs seconds');
        expect(tour.firstRoom, 10, reason: 'it starts at the front door, in the living room');
        final seen = <int>{};
        var drink = false, ad = false, door = false, walked = false, remote = false;
        for (var t = 0.0; t < tour.total; t += tour.total / 900) {
          final p = tour.at(t);
          seen.add(p.room);
          final r = h.rooms[p.room];
          expect(p.x.abs(), lessThanOrEqualTo(r.w / 2 - 5), reason: '${r.name} at $t: inside the walls');
          expect(p.z, inInclusiveRange(5, r.d - 5), reason: '${r.name} at $t: inside the walls');
          if (p.walking) {
            walked = true;
            for (final o in blocks[p.room]!) {
              expect(o.hit(p.x, p.z, 7), isFalse, reason: '${r.name} at $t: too close to furniture or a fixture at (${p.x}, ${p.z})');
            }
          }
          if (p.room == 9 && p.holding) drink = true;
          if (p.event.startsWith('ad')) ad = true;
          if (p.openDoor >= 0) door = true;
          if (p.remote) remote = true;
        }
        expect(seen.length, 11, reason: 'every room');
        expect(drink, isTrue, reason: 'a drink from the kitchen fridge');
        expect(ad && remote, isTrue, reason: 'the remote is used to switch the TV ad');
        expect(door, isTrue, reason: 'the doors are opened');
        expect(walked, isTrue);
      }
    }
    expect(tourLengthName(60), '1 minute');
  });

  test('the person always stands on the floor, never in it, and never pokes out through a wall', () {
    final h = HomeProject(seed: 3);
    final tour = HomeTour(h, 60);
    var lowest = 99.0, doors = 0, enters = 0;
    for (var t = 0.0; t < tour.total; t += tour.total / 300) {
      final p = tour.at(t);
      final r = h.rooms[p.room];
      final polys = homeDynamic(r, t, person: p).where((q) => q.id == 0 || true).toList();
      var minY = 99.0;
      for (final q in polys) {
        for (final v in q.pts) {
          if (v.y < minY) minY = v.y;
          // Nothing of the person is outside the room (a little slack for the arms at a door).
          expect(v.x.abs(), lessThan(r.w / 2 + 4), reason: '${r.name} at $t');
          expect(v.z, greaterThan(-4), reason: '${r.name} at $t');
        }
      }
      if (polys.isNotEmpty) {
        lowest = math.min(lowest, minY);
        expect(minY, greaterThan(-0.6), reason: 'a foot goes through the floor at $t');
        expect(minY, lessThan(1.4), reason: 'the person floats at $t');
      }
      if (p.openDoor >= 0) doors++;
      if (p.enterDoor >= 0) enters++;
    }
    expect(lowest, greaterThan(-0.6));
    expect(doors, greaterThan(10));
    expect(enters, greaterThan(10));
  });

  test('the room is drawn in tiers so nothing is hidden or shown through the wrong thing: the shell first, then what is fixed to it, then the rest', () {
    final h = HomeProject(seed: 3);
    final r = h.rooms[10];
    r.wallTv = 'bangtv';
    r.tvOn = true;
    r.doorAngle[0] = 1.2;
    final s = buildHomeRoom(r, mode: 'walls');
    for (final p in s.polys.where((p) => p.id >= idHWallBack && p.id <= idHWallRight)) {
      expect(p.order, 0, reason: 'walls are the shell');
    }
    for (final p in s.polys.where((p) => p.id == idHWallTv)) {
      expect(p.order, 1, reason: 'the TV frame is fixed to the wall');
    }
    expect(s.screens.firstWhere((q) => q.id == idHWallTv).order, 1);
    // An open door leaf sticks out into the room, so it is sorted with the furniture.
    expect(s.polys.where((p) => p.id == idHDoor && p.order == 2 && p.group != 0), isNotEmpty);
    // A person is made of separately sorted parts, in the same tier as the furniture.
    final person = homeDynamic(r, 1.0, person: const PersonPose(room: 10, x: 0, z: 50, yaw: 0, walking: true, phase: 3));
    expect(person, isNotEmpty);
    expect(person.every((p) => p.order == 2 && p.group != 0), isTrue);
    expect({for (final p in person) p.group}.length, greaterThan(20));
  });

  test('TVs go up to 200 inches and a whole wall, clear of the doors, and the hall has two big ones on its end walls', () {
    final h = HomeProject(seed: 3);
    final sizes = <String, double>{};
    for (final k in ['tv', 'tv100', 'tv150', 'tv200', 'wall']) {
      final a = applianceByKey(k);
      expect(a.isTv, isTrue);
      var best = 0.0;
      for (final r in h.indoor.where((r) => r.kind != 'hall')) {
        final box = wallTvBox(r, a);
        best = math.max(best, box.w);
        // On the wall, inside it, and not over a door.
        expect(box.cx - box.w / 2, greaterThanOrEqualTo(-r.w / 2), reason: '${r.name} $k');
        expect(box.cx + box.w / 2, lessThanOrEqualTo(r.w / 2), reason: '${r.name} $k');
        for (final d in r.doors.where((d) => d.wall == 'back')) {
          final overlap = (box.cx - box.w / 2 < d.offset + 15.5) && (box.cx + box.w / 2 > d.offset - 15.5);
          expect(overlap, isFalse, reason: '${r.name}: a $k TV covers a door');
        }
        expect(box.cy + box.h / 2, lessThanOrEqualTo(HRoom.h - 2));
      }
      sizes[k] = best;
    }
    expect(sizes['tv100']!, greaterThan(sizes['tv']!));
    expect(sizes['wall']!, greaterThanOrEqualTo(sizes['tv200']!));
    expect(sizes['wall']!, greaterThan(70));
    // Only the floor TVs plug in.
    expect(kHomeAppliances.where((a) => a.isTv && !a.wallOnly).every((a) => a.tvWidth <= 70), isTrue);
    // The hall: ten doors on the back wall, a TV on each end wall.
    final hall = h.rooms[5];
    expect(hall.doors.length, 10);
    expect(hall.doors.every((d) => d.wall == 'back'), isTrue);
    hall.wallTv = 'tv100';
    hall.wallTv2 = 'tv100';
    hall.tvOn = true;
    final s = buildHomeRoom(hall);
    expect(s.screens.map((q) => q.id).toSet(), {idHWallTv, idHWallTv + 1});
  });

  test('the camera can never go under the floor, and a finger on the picture points at the floor under it', () {
    final cam = Cam3(yaw: 0, pitch: 0.5, dist: 100, target: V3.zero)..minPitch = 0.03;
    cam.orbit(0, -5);
    expect(cam.pitch, 0.03);
    // The middle of the picture looks at the target, which is on the floor.
    final mid = cam.floorPoint(const Offset(200, 300), const Size(400, 600))!;
    expect(mid.x.abs(), lessThan(0.01));
    expect(mid.z.abs(), lessThan(0.01));
    // A point lower on the screen is nearer the camera; one to the right is to the right.
    final low = cam.floorPoint(const Offset(200, 500), const Size(400, 600))!;
    expect(low.z, greaterThan(5));
    final right = cam.floorPoint(const Offset(380, 300), const Size(400, 600))!;
    expect(right.x, greaterThan(5));
    // Looking at the sky gives nothing.
    expect(cam.floorPoint(const Offset(200, 0), const Size(400, 600)), isNull, reason: 'the top of the picture looks at the sky');
    final up = Cam3(yaw: 0, pitch: 0.0, dist: 100, target: const V3(0, 40, 0));
    expect(up.floorPoint(const Offset(200, 10), const Size(400, 600)), isNull);
  });

  test('the garden has big space and things to put in it, and the house is drawn so its walls keep their windows from every side', () {
    final h = HomeProject(seed: 3);
    final g = h.rooms[11];
    expect(g.w, greaterThan(400));
    expect(g.furn.where((f) => kOutdoorFurn.contains(f.kind)).length, greaterThan(8));
    final s = buildHomeRoom(g, mode: 'furniture');
    expect(s.polys.length, lessThan(12000));
    expect(s.polys.any((p) => p.id == idHDoor), isTrue);
    // Every window pane is one flat, single-sided patch: it cannot show through the house from behind.
    final panes = s.polys.where((p) => p.pts.length == 4 && p.id == 0 && p.group != 0 && (p.color.b > 0.9 && p.color.r < 0.7));
    expect(panes.length, greaterThan(8));
    // Garden things can be added, and are drawn in their own pieces.
    final f = g.add('car');
    expect(buildHomeRoom(g, mode: 'furniture').info.containsKey(idHFurn + f.id), isTrue);
    for (final k in kOutdoorFurn) {
      final t = HomeProject(seed: 1).rooms[11];
      t.furn.clear();
      t.add(k);
      expect(buildHomeRoom(t).polys, isNotEmpty, reason: k);
    }
  });

  test('an added outlet or switch starts red and unwired and works once it is wired', () {
    final h = HomeProject(seed: 4);
    final r = h.rooms[0];
    r.extras.add(HExtra('switch', -40));
    r.extras.add(HExtra('outlet', 40));
    expect(r.extras.every((e) => !e.done), isTrue);
    final s = buildHomeRoom(r);
    expect(s.polys.any((p) => p.id == idHExtra), isTrue);
    expect(s.polys.any((p) => p.id == idHExtra + 1), isTrue);
    r.extras[1].state
      ..attached.addAll({idGreen: 'ground', idSilverTop: 'white', idBrassTop: 'black'})
      ..stage = 2;
    expect(r.extras[1].done, isTrue);
    expect(r.extras[0].done, isFalse);
  });

  test('a bare house needs wiring and plumbing in every room', () {
    final h = HomeProject(seed: 9);
    h.makeBare();
    expect(h.indoor.every((r) => !r.wired), isTrue);
    expect(h.indoor.where((r) => r.hasPlumbing).every((r) => !r.plumbed), isTrue);
    expect(h.finishedCount, 0);
  });

  testWidgets('a lesson room opens on the thing to do, and tapping the red switch opens the wiring bench', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage(lesson: 'switch')));
    for (var i = 0; i < 12; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(find.text('To do'), findsOneWidget);
    await t.scrollUntilVisible(find.text('🔧 Do the lesson'), 60, scrollable: find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first);
    expect(find.text('🔧 Do the lesson'), findsOneWidget);
    // Look from above so the whole wall is in the picture.
    await _chip(t, '🔭 See the whole room');
    for (var i = 0; i < 30; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    final at = _find3d(t, idHSwitch);
    expect(at, isNotNull);
    await t.tapAt(at!);
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 800));
    expect(find.text('Breaker ON (live)'), findsOneWidget);
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('Go outside and Go inside are buttons: the view never takes you out of the house by itself', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 5)..current = 10;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    await _chip(t, '🌳 Go outside');
    await t.pump(const Duration(milliseconds: 500));
    expect(HomeProject.session!.current, 11);
    await _chip(t, '🏠 Go inside');
    await t.pump(const Duration(milliseconds: 500));
    expect(HomeProject.session!.current, 10);
    // Swiping the picture a long way sideways cannot turn the view round behind the room.
    for (var i = 0; i < 6; i++) {
      await t.dragFrom(const Offset(450, 900), const Offset(-380, 0));
      await t.pump(const Duration(milliseconds: 100));
    }
    final painter = t.widget<CustomPaint>(_view()).painter! as Scene3DPainter;
    expect(painter.cam.yaw.abs(), lessThan(0.7));
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('the tour plays, shows what the person is doing, and stops; the map fits a narrow screen', (t) async {
    t.view.physicalSize = const Size(660, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 5);
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    expect(t.takeException(), isNull);
    await _chip(t, '🎬 Tour');
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 1));
    await t.tap(find.text('30 seconds'));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('Play the tour'));
    for (var i = 0; i < 20; i++) {
      await t.pump(const Duration(milliseconds: 150));
    }
    expect(find.text('⏹ Stop the tour'), findsOneWidget);
    expect(HomeProject.session!.indoor.every((r) => r.wallTv != null && r.tvOn), isTrue, reason: 'every TV is switched on for the tour');
    await t.tap(find.text('⏹ Stop the tour'));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('⏹ Stop the tour'), findsNothing);
    expect(t.takeException(), isNull);
    await t.pump(const Duration(seconds: 12));
  });
}

bool kCartoonScenesCountMatches() => kCartoonScenes == kNgmyAdCount;
