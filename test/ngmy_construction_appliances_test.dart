import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_avatar_glb.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_electrical_more.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:ngmy/ngmy_construction_project.dart';

WiringState off() => WiringState()..power = false;

void main() {
  const outlets = ['dryer4', 'dryer3', 'range4', 'range3', 'washer'];
  const cords = ['cord3', 'cord4'];

  test('the dryer, range and washer outlets and the two cord hookups are lessons, named in the American NEMA way', () {
    for (final id in [...outlets, ...cords]) {
      final l = electricalLesson(id);
      expect(l.look, isNotEmpty);
      expect(l.steps.length, greaterThan(4), reason: id);
      expect(l.solution.keys.every((k) => l.hookups.any((h) => h.id == k)), isTrue, reason: id);
    }
    expect(electricalLesson('dryer4').title, contains('14-30'));
    expect(electricalLesson('dryer3').title, contains('10-30'));
    expect(electricalLesson('range4').title, contains('14-50'));
    expect(electricalLesson('range3').title, contains('10-50'));
    expect(electricalLesson('washer').title, contains('5-20'));
    // The 3-wire ones have no ground wire, the 4-wire ones do.
    expect(electricalLesson('dryer3').chips.any((c) => c.role == 'ground'), isFalse);
    expect(electricalLesson('range3').chips.any((c) => c.role == 'ground'), isFalse);
    expect(electricalLesson('dryer4').chips.any((c) => c.role == 'ground'), isTrue);
    expect(electricalLesson('range4').chips.any((c) => c.role == 'ground'), isTrue);
    for (final id in outlets) {
      expect(isOutletKind(id), isTrue);
    }
    expect(isOutletKind('cord4'), isFalse, reason: 'a cord is wired at the appliance, not in the wall');
  });

  test('wired the right way, every one of them is correct and safe, and a wrong wire is explained', () {
    for (final id in outlets) {
      final l = electricalLesson(id);
      final s = off();
      for (final e in l.solution.entries) {
        expect(tryFasten(l, s, e.value, l.hookups.firstWhere((h) => h.id == e.key)), isNull, reason: '$id ${e.value}');
      }
      expect(wiringComplete(l, s), isTrue, reason: id);
      s.stage = 2;
      expect(evaluateWiring(l, s).ok, isTrue, reason: '$id: ${evaluateWiring(l, s).message}');
      // A hot wire on the neutral screw is refused with a reason.
      final w = off();
      final err = tryFasten(l, w, 'hot1' == l.chips.map((c) => c.key).firstWhere((k) => k.startsWith('hot')) ? 'hot1' : 'hot', l.hookups.firstWhere((h) => h.role == 'neutral'));
      expect(err, isNotNull, reason: id);
    }
    // The power must be off first.
    final live = WiringState();
    expect(tryFasten(electricalLesson('dryer4'), live, 'ground', electricalLesson('dryer4').hookups.first), startsWith('STOP'));
  });

  test('the 3-wire cord keeps its ground strap, and the 4-wire cord needs it taken off first', () {
    final c3 = electricalLesson('cord3');
    final s3 = off();
    for (final e in c3.solution.entries) {
      expect(tryFasten(c3, s3, e.value, c3.hookups.firstWhere((h) => h.id == e.key)), isNull);
    }
    expect(s3.strap, isTrue);
    s3.stage = 2;
    expect(evaluateWiring(c3, s3).ok, isTrue);

    final c4 = electricalLesson('cord4');
    final s4 = off();
    // With the strap on, the neutral and the ground are refused, and the black and red are fine.
    expect(tryFasten(c4, s4, 'neutral', c4.hookups.firstWhere((h) => h.role == 'neutral')), contains('ground strap'));
    expect(tryFasten(c4, s4, 'ground', c4.hookups.firstWhere((h) => h.role == 'ground')), contains('ground strap'));
    s4.strap = false;
    for (final e in c4.solution.entries) {
      expect(tryFasten(c4, s4, e.value, c4.hookups.firstWhere((h) => h.id == e.key)), isNull, reason: e.value);
    }
    s4.stage = 2;
    expect(wiringComplete(c4, s4), isTrue);
    expect(evaluateWiring(c4, s4).ok, isTrue);
    // Everything on, but the strap forgotten: not finished, and it says why.
    final forgot = off();
    for (final e in c4.solution.entries) {
      tryFasten(c4, forgot, e.value, c4.hookups.firstWhere((h) => h.id == e.key), allowWrong: true);
    }
    forgot.stage = 2;
    expect(wiringComplete(c4, forgot), isFalse);
    expect(evaluateWiring(c4, forgot).ok, isFalse);
    expect(evaluateWiring(c4, forgot).message, contains('strap'));
  });

  test('each one is drawn: every screw of the lesson is in the picture, and the strap is there until it is taken off', () {
    for (final id in [...outlets, ...cords]) {
      final l = electricalLesson(id);
      for (final stage in [0, 1, 2]) {
        final s = off()..stage = stage;
        final scene = buildElectricalScene(l, s);
        final ids = scene.polys.map((p) => p.id).toSet();
        if (stage == 0) {
          for (final h in l.hookups) {
            expect(ids.contains(h.id), isTrue, reason: '$id screw ${h.name}');
          }
        }
        expect(scene.polys.length, greaterThan(100), reason: id);
      }
    }
    final withStrap = buildElectricalScene(electricalLesson('cord4'), off());
    expect(withStrap.polys.any((p) => p.id == idStrap), isTrue);
    final without = buildElectricalScene(electricalLesson('cord4'), off()..strap = false);
    expect(without.polys.any((p) => p.id == idStrap), isFalse);
    // The faces differ: a 10-30 is not a 14-30 and not a 14-50.
    int faceFingerprint(String id) => buildElectricalScene(electricalLesson(id), off()).polys.where((p) => p.id == idFace).fold<int>(0, (a, p) => a * 31 + (p.pts.first.x * 1000).round() + (p.pts.first.y * 1000).round());
    final prints = {for (final id in ['dryer3', 'dryer4', 'range3', 'range4', 'washer']) id: faceFingerprint(id)};
    expect(prints.values.toSet().length, 5, reason: 'five different faces');
  });

  test('a laundry room job asks for a washer outlet and a dryer outlet, and a range kitchen job for a range outlet, and each can be finished', () {
    final laundry = RoomProject(seed: 9, kind: 3);
    final devices = laundry.orders.map((o) => o.device).toList();
    expect(devices, contains('washer'));
    expect(devices.any((d) => d == 'dryer4' || d == 'dryer3'), isTrue);
    final kitchen = RoomProject(seed: 9, kind: 4);
    expect(kitchen.orders.map((o) => o.device).any((d) => d == 'range4' || d == 'range3'), isTrue);
    for (final p in [laundry, kitchen]) {
      p.fastForward();
      p.completeWiring();
      expect(p.wiringWorks, isTrue, reason: p.roomName);
    }
    // Both kinds of dryer and range come up across houses.
    final seen = <String>{};
    for (var seed = 1; seed < 60; seed++) {
      seen.addAll(RoomProject(seed: seed, kind: 3).orders.map((o) => o.device));
      seen.addAll(RoomProject(seed: seed, kind: 4).orders.map((o) => o.device));
    }
    expect(seen, containsAll(['washer', 'dryer4', 'dryer3', 'range4', 'range3']));
    // A random job in the lab can be one of them too.
    final kinds = {for (var seed = 100; seed < 180; seed++) RoomProject(seed: seed).roomName};
    expect(kinds, containsAll(['Laundry room', 'Kitchen with a range']));
  });

  test('in the house the hall is a laundry corner and the kitchen has the range', () {
    final home = HomeProject(seed: 5);
    expect(wiringKindFor(home.rooms[5]), 3);
    expect(wiringKindFor(home.rooms[9]), 4);
    expect(wiringKindFor(home.rooms[2]), 2);
    expect(wiringKindFor(home.rooms[0]), 1);
    expect(wiringKindFor(home.rooms[10]), 0);
  });

  testWidgets('in full screen the job page stays on its side (it is not turned upright), and a button turns it upright and back', (t) async {
    GlbAvatar.enabled = false;
    addTearDown(() => GlbAvatar.enabled = true);
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    HomeProject.session = HomeProject(seed: 31)..current = 9;
    HomeProject.session!.rooms[9].wiringNeeded = true;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage()));
    await t.pump(const Duration(milliseconds: 600));
    final row = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.right).first;
    await t.scrollUntilVisible(find.text('⛶ Full screen'), 120, scrollable: row);
    await t.drag(row, const Offset(-120, 0));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('⛶ Full screen'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.byIcon(Icons.fullscreen_exit_rounded), findsOneWidget);
    // The red outlet is tapped: the wiring job opens.
    final state = t.state(find.byType(NgmyHousePage)) as dynamic;
    // ignore: unawaited_futures
    state.openWiringForTest();
    await t.pump(const Duration(milliseconds: 800));
    await t.pump(const Duration(milliseconds: 800));
    expect(find.byKey(const Key('turned-page-rotate')), findsOneWidget, reason: 'the job page is shown on its side, like the city was');
    final quarter = find.ancestor(of: find.byKey(const Key('turned-page-rotate')), matching: find.byType(RotatedBox));
    expect(quarter, findsOneWidget);
    expect((t.widget(quarter) as RotatedBox).quarterTurns, isNot(0));
    // The button turns it upright, and back.
    await t.tap(find.byKey(const Key('turned-page-rotate')));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.ancestor(of: find.byKey(const Key('turned-page-rotate')), matching: find.byType(RotatedBox)), findsNothing);
    await t.tap(find.byKey(const Key('turned-page-rotate')));
    await t.pump(const Duration(milliseconds: 400));
    expect(find.ancestor(of: find.byKey(const Key('turned-page-rotate')), matching: find.byType(RotatedBox)), findsOneWidget);
    // Without full screen the job page is upright and has no such button.
    Navigator.of(t.element(find.byKey(const Key('turned-page-rotate')))).pop();
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 10));
  });
}
