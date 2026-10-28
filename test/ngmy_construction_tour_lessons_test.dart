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
  await t.scrollUntilVisible(find.text(label), 60, scrollable: rows.at(row));
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

  test('the house tour visits every room in turn, keeps to the time chosen and stays inside the rooms', () {
    final h = HomeProject(seed: 3);
    for (final secs in kTourLengths) {
      final tour = HomeTour(h, secs.toDouble());
      expect(tour.total, greaterThanOrEqualTo(secs - 0.01));
      final seen = <int>[];
      var drink = false, walked = false;
      for (var t = 0.0; t < tour.total; t += tour.total / 400) {
        final p = tour.at(t);
        if (seen.isEmpty || seen.last != p.room) seen.add(p.room);
        final r = h.rooms[p.room];
        expect(p.x.abs(), lessThanOrEqualTo(r.w / 2 + 0.01), reason: '${r.name} at $t');
        expect(p.z, inInclusiveRange(0, r.d + 0.01), reason: '${r.name} at $t');
        if (p.room == 9 && p.holding) drink = true;
        if (p.walking) walked = true;
      }
      expect(seen, kTourRoute, reason: 'every room, in order');
      expect(drink, isTrue, reason: 'a drink from the kitchen fridge');
      expect(walked, isTrue);
    }
    expect(tourLengthName(60), '1 minute');
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
    await t.tap(find.text('🔭 See the whole room'));
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
