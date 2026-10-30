import 'package:flutter/material.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_cityin.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_electrical_more.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_tour.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const newOnes = [...kSwitchVariants, ...kOutletVariants];

  test('every new switch and outlet is a lesson with the right wiring, and only the right wiring is accepted', () {
    expect(kSwitchVariants.length, 5);
    expect(kOutletVariants.length, 5);
    for (final id in newOnes) {
      final l = electricalLesson(id);
      expect(l.legacy, isFalse);
      expect(l.solution, isNotEmpty);
      // The steps line up with what the page checks off: two to start, one for each wire, two to finish.
      expect(l.steps.length, 4 + l.chips.length, reason: '$id: steps');
      final s = WiringState()..power = false;
      for (final e in l.solution.entries) {
        final h = l.hookups.firstWhere((h) => h.id == e.key);
        expect(tryFasten(l, s, e.value, h), isNull, reason: '$id: ${e.value} on ${h.name}');
      }
      expect(wiringComplete(l, s), isTrue, reason: '$id: every wire is fastened');
      s.stage = 2;
      final v = evaluateWiring(l, s);
      expect(v.ok, isTrue, reason: '$id: ${v.message}');
      expect(l.hookups.every((h) => h.hint.isNotEmpty), isTrue);
      // A wire on the wrong terminal is turned away in a lesson and found wrong in practice mode.
      final bad = WiringState()
        ..power = false
        ..practice = true;
      final entries = l.solution.entries.toList();
      if (entries.length >= 2) {
        // Swap the first wire with a wire of another kind (the ground, or the neutral where there is no ground).
        final a = entries.first;
        final other = entries.firstWhere((e) => l.chips.firstWhere((c) => c.key == e.value).role != l.chips.firstWhere((c) => c.key == a.value).role, orElse: () => entries.last);
        for (final e in entries) {
          final key = e.key == a.key ? other.value : (e.key == other.key ? a.value : e.value);
          bad.attached[e.key] = key;
        }
        bad.stage = 2;
        expect(evaluateWiring(l, bad).ok, isFalse, reason: '$id: two wires of different kinds swapped is not ok');
      }
    }
  });

  test('travelers and commons, lines and loads, always-hot and switched are kept apart', () {
    WiringState wired(ElectricalLesson l, Map<int, String> m) {
      final s = WiringState()
        ..power = false
        ..practice = true
        ..stage = 2;
      s.attached.addAll(m);
      return s;
    }

    final three = electricalLesson('switch3');
    expect(evaluateWiring(three, wired(three, {idGreen: 'ground', idSilverTop: 'trav1', idBrassTop: 'common', idBrassBottom: 'trav2'})).ok, isFalse, reason: 'a traveler on the common screw');
    final split = electricalLesson('split');
    expect(evaluateWiring(split, wired(split, {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'always', idBrassBottom: 'switched'})).ok, isFalse, reason: 'always-hot and switched swapped');
    final smart = electricalLesson('switchsmart');
    expect(evaluateWiring(smart, wired(smart, {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'load', idBrassBottom: 'line'})).ok, isFalse, reason: 'line and load swapped');
    final two = electricalLesson('switch2p');
    expect(evaluateWiring(two, wired(two, {idGreen: 'ground', idSilverTop: 'lineA', idBrassTop: 'lineB', idSilverBottom: 'loadB', idBrassBottom: 'loadA'})).ok, isFalse, reason: 'the two legs crossed');
    final old = electricalLesson('v240three');
    expect(old.needsGround, isFalse);
    expect(old.chips.any((c) => c.role == 'ground'), isFalse, reason: 'no separate ground on the old 3-wire');
    final only = electricalLesson('v240only');
    expect(only.chips.any((c) => c.role == 'neutral'), isFalse, reason: 'a 240 volt only outlet has no neutral');
    // In a lesson (not practice) a wrong terminal is refused with a reason.
    final s = WiringState()..power = false;
    expect(tryFasten(three, s, 'common', three.hookups.firstWhere((h) => h.id == idBrassTop)), contains('COMMON'));
  });

  test('every new device can be drawn on the bench with its own wires, and as a finished device', () {
    for (final id in newOnes) {
      final l = electricalLesson(id);
      final s = WiringState()
        ..power = false
        ..hints = true
        ..labels = true;
      s.attached[l.hookups.first.id] = l.chips.firstWhere((c) => l.hookups.first.accepts.contains(c.key)).key;
      final sc = buildBench(l, s);
      expect(sc.polys, isNotEmpty);
      for (var i = 0; i < l.chips.length; i++) {
        expect(sc.polys.any((p) => p.id == idWireN + i), isTrue, reason: '$id: wire $i is drawn');
        expect(wireKeyForId(id, idWireN + i), l.chips[i].key);
      }
      expect(sc.labels.length, l.hookups.length);
      expect(buildFinished(id).polys, isNotEmpty);
      expect(buildBoxOnly(id).polys, isNotEmpty);
      expect(lookOf(id), l.look);
    }
  });

  test('a job can ask for any of them: devices are picked, installed in the right place and wired by the lesson', () {
    final seen = <String>{};
    for (var seed = 1; seed <= 40; seed++) {
      final p = RoomProject(seed: seed, kind: 0, variants: true)..fastForward()..completeWiring();
      for (final o in p.orders) {
        seen.add(o.device);
      }
      expect(p.wiringWorks, isTrue, reason: 'seed $seed: ${p.orders.map((o) => o.device).join(', ')}');
      expect(p.orders.length, 4);
    }
    expect(seen.containsAll(newOnes), isTrue, reason: 'over the jobs every type comes up: $seen');
    // The plain job is still the plain job.
    final plain = RoomProject(seed: 3, kind: 0);
    expect(plain.orders.map((o) => o.device).toSet().difference({'outlet', 'light', 'switch'}), isEmpty);
    // A 240 volt outlet goes low on the wall and a switch up high.
    final p = RoomProject(seed: 5, kind: 0, variants: true)..fastForward();
    final out = p.orders.firstWhere((o) => isOutletKind(o.device) && o.device != 'outlet');
    expect(deviceKindName(out.device), isNotEmpty);
    expect(p.devs.containsKey(out.slot), isFalse);
    expect(p.installDevice(out.slot, out.device).ok, isTrue);
    expect(p.devs[out.slot]!.kind, out.device);
  });

  testWidgets('the lab lists every new lesson and a job tray offers the new devices', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    HomeProject.session = HomeProject(seed: 31)..current = 11;
    final titles = {for (final id in newOnes) electricalLesson(id).title};
    expect(titles.length, newOnes.length);
  });

  testWidgets('calls and jobs only come in the city map: in a room of the house the phone stays quiet', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    SharedPreferences.setMockInitialValues({});
    final h = HomeProject(seed: 21)..current = 10;
    HomeProject.session = h;
    final cm = Community(houseSeed: 21, seed: 21);
    Community.active = cm;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    for (var i = 0; i < 120; i++) {
      await t.pump(const Duration(seconds: 1));
    }
    expect(find.text('INCOMING CALL'), findsNothing, reason: 'no call while you are inside the house');
    Community.active = null;
    await t.pump(const Duration(seconds: 10));
  });
  test('big TVs playing the NGMY ads in the elevator car and on the walls of every level of a tower', () {
    final city = HomeProject(seed: 4).rooms[11];
    final tower = city.furn.firstWhere((f) => f.kind == 'tower');
    final lobby = CityInterior('tower', tower)..build(null);
    expect(lobby.scene.screens.length, 3);
    lobby.goToLevel(5, darkHere: false);
    expect(lobby.scene.screens.length, 3, reason: 'every level has its TVs');
    expect((CityInterior('cabin', tower)..build(null)).scene.screens.length, 3);
  });

  test('wires and screws are easy to hit: a tap near a thin thing picks it', () {
    final hits = HitCache();
    final thin = Path()..addRect(const Rect.fromLTWH(100, 100, 4, 60));
    final wall = Path()..addRect(const Rect.fromLTWH(0, 0, 400, 400));
    hits.list
      ..add((wall, 1))
      ..add((thin, 11));
    expect(hits.pick(const Offset(102, 130)), 11, reason: 'right on the wire');
    expect(hits.pick(const Offset(112, 130)), 11, reason: 'a finger width beside the wire');
    expect(hits.pick(const Offset(300, 300)), 1, reason: 'far from it the wall is picked');
  });
  test('the way out of a tower is on the ground floor only: the upper levels have no exit mat', () {
    final city = HomeProject(seed: 4).rooms[11];
    final tower = city.furn.firstWhere((f) => f.kind == 'tower');
    final inn = CityInterior('tower', tower)..build(null);
    inn.walker
      ..x = 0
      ..z = CityInterior.d - 6;
    expect(inn.leaving, isTrue, reason: 'the lobby has the way out');
    expect(inn.scene.labels.any((l) => l.text.contains('go out')), isTrue);
    inn.goToLevel(4, darkHere: false);
    inn.walker
      ..x = 0
      ..z = CityInterior.d - 6;
    expect(inn.leaving, isFalse, reason: 'no way out from level 4');
    expect(inn.scene.labels.any((l) => l.text.contains('Walk here to go out')), isFalse);
    expect(inn.scene.labels.any((l) => l.text.contains('elevator down')), isTrue);
  });
  test('the TVs never switch off: the pictures are far in front of their frames, the elevator doors are drawn over the shaft, and the house TV plays ads while it has power', () {
    final city = HomeProject(seed: 4).rooms[11];
    final tower = city.furn.firstWhere((f) => f.kind == 'tower');
    final lobby = CityInterior('tower', tower)..build(null);
    for (final q in lobby.scene.screens) {
      expect(q.bias, greaterThanOrEqualTo(30), reason: 'a picture must always be drawn after its frame, from every side');
    }
    final doors = lobby.dynamicPolys(1.0, const PersonStyle()).where((p) => p.color == const Color(0xFFF8FAFC));
    expect(doors, isNotEmpty);
    expect(doors.every((p) => p.bias >= 30), isTrue, reason: 'doors are drawn over the shaft from every side');
    final house = city.furn.firstWhere((f) => f.kind == 'house2');
    expect(CityInterior('house2', house)..build(null), isA<CityInterior>());
    expect((CityInterior('house2', house)..build(null)).scene.screens.length, 1, reason: 'a house with power: the TV plays ads');
    expect((CityInterior('house2', house, dark: true)..build(null)).scene.screens, isEmpty, reason: 'no power, no picture');
  });
}
