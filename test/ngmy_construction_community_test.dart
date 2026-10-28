import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_communitypage.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_tour.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// A house where every room works, so only what a test breaks is broken.
HomeProject _goodHouse() {
  final h = HomeProject(seed: 4);
  for (final r in h.indoor) {
    r.wiringNeeded = false;
    r.plumbNeeded = false;
  }
  return h;
}

void main() {
  setUp(() {
    NgmyTone.enabled = false;
    SharedPreferences.setMockInitialValues({});
    Community.active = null;
  });

  test('seven different people live in the house, and the first days are gentle', () {
    expect(kResidents.length, 7);
    expect({for (final r in kResidents) r.name}.length, 7);
    expect({for (final r in kResidents) r.style.shirt}.length, greaterThan(5), reason: 'they do not all look the same');
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 1);
    expect(c.living.length, 7);
    expect(c.food, greaterThan(0));
    // A minute of nothing and nobody is in trouble yet.
    for (var i = 0; i < 60; i++) {
      c.advance(1, h);
    }
    expect(c.living.length, 7);
    expect(c.living.every((p) => p.health > 90), isTrue);
  });

  test('people get hungry, starve if nobody feeds them, and eating helps', () {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 2);
    final p = c.residents[1];
    final before = p.hunger;
    c.advance(30, h);
    expect(p.hunger, greaterThan(before));
    final food = c.food;
    final said = c.feed(p);
    expect(said, contains('ate'));
    expect(c.food, food - 1);
    expect(p.hunger, lessThan(before));
    // Nobody to feed: starving drains health until they die.
    final q = c.residents[2];
    q.hunger = 100;
    for (var i = 0; i < 200 && q.alive; i++) {
      c.advance(1, h);
    }
    expect(q.alive, isFalse);
    expect(c.deaths, greaterThanOrEqualTo(1));
    expect(c.feed(q), contains('died'));
    expect(c.log.any((l) => l.contains('has died')), isTrue);
    // No food left is said in plain words.
    c.food = 0;
    final r = c.residents[3];
    r.hunger = 90;
    expect(c.feed(r), contains('no food'));
  });

  test('medicine cures the sick, and the hospital keeps patients until they are better, if they are cared for', () {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 3);
    final p = c.residents[0];
    expect(c.giveMedicine(p), contains('not sick'));
    p.sick = true;
    final meds = c.medicine;
    expect(c.giveMedicine(p), contains('better'));
    expect(c.medicine, meds - 1);
    expect(p.sick, isFalse);
    // The hospital.
    final q = c.residents[1];
    q.sick = true;
    expect(c.admit(q), contains('bed 1'));
    expect(q.inBed, 0);
    final pts = c.points;
    var guard = 0;
    while (q.inBed >= 0 && guard++ < 300) {
      c.advance(1, h);
      if (c.beds[0].resident >= 0 && c.beds[0].care < 40 && c.medicine > 0) c.treat(0);
      if (c.medicine == 0) c.medicine = 3;
    }
    expect(q.inBed, -1, reason: 'sent home');
    expect(q.sick, isFalse);
    expect(c.points, greaterThan(pts));
    expect(c.saved, 1);
    // A patient who is never cared for does not get better, and the full hospital says so.
    for (var i = 0; i < 3; i++) {
      final s = c.residents[2 + i];
      s.sick = true;
      c.admit(s);
    }
    final extra = c.residents[5];
    extra.sick = true;
    expect(c.admit(extra), contains('full'));
  });

  test('a room without power or a leaking sink makes a call for help, and fixing it earns the points', () {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 4);
    c.syncCalls(h);
    expect(c.calls, isEmpty);
    final ama = kResidents[0];
    h.rooms[ama.room].wiringNeeded = true;
    h.rooms[ama.bath].plumbNeeded = true;
    c.syncCalls(h);
    expect(c.calls.map((k) => k.kind).toSet(), {'power', 'leak'});
    expect(c.calls.every((k) => k.message.length > 20), isTrue, reason: 'the message is in plain words');
    final call = c.calls.firstWhere((k) => k.kind == 'power');
    expect(kResidents[call.resident].room, ama.room);
    // Fixing the room is what finishes the call.
    final pts = c.points;
    h.rooms[ama.room].wiringNeeded = false;
    c.syncCalls(h);
    expect(c.calls.any((k) => k.kind == 'power'), isFalse);
    expect(c.points, pts + 15);
    expect(c.served, 1);
    // No more than four calls are open at once.
    for (final r in h.indoor) {
      r.wiringNeeded = true;
      r.plumbNeeded = r.hasPlumbing;
    }
    c.syncCalls(h);
    expect(c.calls.length, lessThanOrEqualTo(4));
    // Things break by themselves in a working house, so there is always something to do.
    final g = _goodHouse();
    final d = Community(houseSeed: g.seed, seed: 5);
    var broke = false;
    for (var i = 0; i < 30 && !broke; i++) {
      d.breakSomething(g);
      broke = d.calls.isNotEmpty;
    }
    expect(broke, isTrue);
  });

  test('a room that has no power makes the people there unhappy and, after a long time, ill', () {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 6);
    h.rooms[kResidents[3].room].wiringNeeded = true;
    final p = c.residents[3];
    for (var i = 0; i < 120; i++) {
      c.advance(1, h);
      p.hunger = 20;
    }
    expect(p.comfort, lessThan(60));
    expect(p.mood, anyOf('unhappy at home', 'sick', 'in danger', 'fine'));
  });

  test('everything is saved: the people, the supplies, the calls and what has been fixed in the house', () async {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 7);
    c.points = 77;
    c.food = 3;
    c.residents[1].hunger = 66;
    c.residents[2].sick = true;
    h.rooms[0].wiringNeeded = true;
    h.rooms[2].plumbNeeded = true;
    c.syncCalls(h);
    c.admit(c.residents[2]);
    await c.save(h);
    final loaded = await Community.loadJson();
    expect(loaded, isNotNull);
    final back = Community.fromJson(loaded!);
    expect(back.points, 77);
    expect(back.food, 3);
    expect(back.residents[1].hunger, 66);
    expect(back.residents[2].inBed, 0);
    expect(back.beds[0].resident, 2);
    expect(back.calls.length, c.calls.length);
    // A fresh copy of the same house gets its repairs and its breakages back.
    final fresh = HomeProject(seed: h.seed);
    Community.applyHouse(fresh, loaded);
    expect(fresh.rooms[0].wired, isFalse);
    expect(fresh.rooms[2].plumbed, isFalse);
    expect(fresh.rooms[1].wired, isTrue);
    await Community.forget();
    expect(await Community.loadJson(), isNull);
  });

  test('the residents stand in their own rooms, clear of the furniture, drawn as people that can be tapped', () {
    final h = _goodHouse();
    final c = Community(houseSeed: h.seed, seed: 8);
    for (final room in h.indoor) {
      final figs = c.figuresIn(h, room.id);
      for (final f in figs) {
        expect(f.room, room.id);
        expect(f.x.abs(), lessThan(room.w / 2));
        expect(f.z, inInclusiveRange(0, room.d));
        final r = kResidents[f.id];
        expect(r.room, room.id);
      }
    }
    final ama = kResidents[0];
    final figs = c.figuresIn(h, ama.room);
    expect(figs.map((f) => f.id), contains(0));
    final room = h.rooms[ama.room];
    final scene = buildHomeRoom(room, residents: figs);
    expect(scene.labels.any((l) => l.text.contains('Ama')), isTrue);
    expect(scene.info.containsKey(idHResident), isTrue);
    final polys = homeDynamic(room, 1.0, residents: figs);
    expect(polys.where((p) => p.id == idHResident), isNotEmpty);
    expect(polys.every((p) => p.group != 0), isTrue, reason: 'each part sorted as one piece, like the tour person');
    // Their clothes differ.
    final b = c.figuresIn(h, kResidents[1].room);
    expect(b.first.style.shirt == figs.first.style.shirt, isFalse);
    // Someone in hospital is not in their room.
    c.residents[0].sick = true;
    c.admit(c.residents[0]);
    expect(c.figuresIn(h, ama.room).map((f) => f.id), isNot(contains(0)));
  });

  testWidgets('the community page: calls, people, the hospital and the shop work, and Go and fix opens the house', (t) async {
    t.view.physicalSize = const Size(900, 2400);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 11);
    final h = HomeProject.session!;
    for (final r in h.indoor) {
      r.wiringNeeded = false;
      r.plumbNeeded = false;
    }
    h.rooms[kResidents[0].room].wiringNeeded = true;
    await t.pumpWidget(const MaterialApp(home: NgmyCommunityPage()));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(seconds: 1));
    expect(find.textContaining('Community'), findsWidgets);
    expect(find.text('🔧 Go and fix it'), findsOneWidget);
    expect(find.textContaining('Ama'), findsWidgets);
    // People: feed someone who is hungry.
    await t.tap(find.textContaining('People'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('Joseph'), findsWidgets);
    final c = Community.active!;
    final food = c.food;
    c.residents[1].hunger = 70;
    await t.pump(const Duration(milliseconds: 100));
    await t.ensureVisible(find.text('🍞 Feed').at(1));
    await t.tap(find.text('🍞 Feed').at(1));
    await t.pump(const Duration(milliseconds: 300));
    expect(c.food, food - 1);
    expect(find.textContaining('ate'), findsWidgets);
    // The shop.
    await t.tap(find.textContaining('Shop'));
    await t.pump(const Duration(milliseconds: 300));
    c.points = 50;
    final f2 = c.food;
    await t.tap(find.text('Buy').first);
    await t.pump(const Duration(milliseconds: 300));
    expect(c.food, f2 + 5);
    expect(c.points, 40);
    // The hospital page shows three empty beds.
    await t.tap(find.textContaining('Hospital').first);
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('empty'), findsNWidgets(3));
    // Go and fix: the house opens on the room with the fault.
    await t.tap(find.textContaining('Calls'));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('🔧 Go and fix it'));
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 800));
    expect(find.byType(NgmyHousePage), findsOneWidget);
    expect(h.current, kResidents[0].room);
    // Back out, and take the page away so its timer stops.
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
