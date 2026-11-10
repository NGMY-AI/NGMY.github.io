import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('a device can not be put into a box while the breaker is on: the breaker has to be off first, in every mode', () {
    for (final practice in [true, false]) {
      final p = RoomProject(seed: 3, kind: 0, practice: practice)..fastForward();
      final o = p.orders.first;
      if (!p.breaker) p.toggleBreaker();
      expect(p.power, isTrue);
      final refused = p.installDevice(o.slot, o.device);
      expect(refused.ok, isFalse, reason: 'practice $practice');
      expect(refused.msg, startsWith('STOP'));
      expect(refused.msg, contains('breaker'));
      expect(p.devs.containsKey(o.slot), isFalse, reason: 'nothing was put in');
      expect(p.lives, 3, reason: 'refused, not a shock');
      // Breaker off: it goes in.
      p.toggleBreaker();
      expect(p.power, isFalse);
      expect(p.installDevice(o.slot, o.device).ok, isTrue);
      expect(p.devs[o.slot]?.kind, o.device);
    }
  });

  testWidgets('the house and the city are real work, a lesson room is for learning', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 33)..current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    expect(HomeProject.session!.practice, isTrue, reason: 'real consequences, not a learning mode');
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage(lesson: 'outlet')));
    await t.pump(const Duration(milliseconds: 600));
    await t.pump(const Duration(seconds: 1));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('the jobs of the lab open as real work: no hints and no switch to a learning mode', (t) async {
    t.view.physicalSize = const Size(900, 7000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyConstructionLab()));
    await t.pump(const Duration(milliseconds: 500));
    await t.tap(find.text('Wiring bench'));
    await t.pump(const Duration(milliseconds: 500));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.textContaining('Real work: no hints'), findsOneWidget);
    expect(find.textContaining('Mount a box at'), findsNothing);
    expect(find.textContaining('Practice mode'), findsNothing);
    await t.pump(const Duration(seconds: 12));
  });

  test('the old garden is NGMY City', () {
    final h = HomeProject(seed: 1);
    expect(h.rooms[11].name, 'NGMY City');
    expect(h.rooms.any((r) => r.name == 'Garden'), isFalse);
  });

  test('a finished job pays stars: more for a bigger job, less for mistakes and shocks, never under 6, and they reach the city', () async {
    expect(Community.jobStars(size: 4), 28);
    expect(Community.jobStars(size: 4, mistakes: 3), 22);
    expect(Community.jobStars(size: 4, mistakes: 2, shocks: 1), 19);
    expect(Community.jobStars(size: 1, mistakes: 30, shocks: 5), 6);
    // The city is open: the stars go straight into it.
    final cm = Community(houseSeed: 1, seed: 1);
    Community.active = cm;
    final before = cm.points;
    await Community.addStars(12);
    expect(cm.points, before + 12);
    // The city is closed: they are kept and added when it opens, once.
    SharedPreferences.setMockInitialValues({});
    Community.active = null;
    await Community.addStars(10);
    await Community.addStars(5);
    expect(await Community.takeBonus(), 15);
    expect(await Community.takeBonus(), 0);
  });

  test('a sink is a basin sunk into the counter with a faucet, not a plate lying on a table', () {
    final home = HomeProject(seed: 4);
    for (final id in [2, 9]) {
      final room = home.rooms[id]..plumbNeeded = false;
      final scene = buildHomeRoom(room);
      final sink = scene.polys.where((p) => p.id == (id == 2 ? idHSinkF : idHKSink)).toList();
      var lo = 1e9, hi = -1e9;
      for (final p in sink) {
        for (final v in p.pts) {
          if (v.y < lo) lo = v.y;
          if (v.y > hi) hi = v.y;
        }
      }
      expect(sink.length, greaterThan(60), reason: 'counter pieces, basin walls and floor, drain, faucet');
      // The basin goes well below the top of the counter; the faucet stands up above it.
      final counterTop = id == 2 ? 30.0 : 32.0;
      expect(sink.any((p) => p.pts.every((v) => v.y < counterTop - 4 && v.y > counterTop - 10)), isTrue, reason: 'basin walls below the counter top');
      expect(hi, greaterThan(counterTop + 4), reason: 'a faucet above the counter');
    }
  });
}
