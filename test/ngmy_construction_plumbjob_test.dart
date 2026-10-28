import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_plumbjob.dart';
import 'package:ngmy/ngmy_construction_plumbpage.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('wrong order is refused and explained, right order builds the job and leaks are found', () {
    final j = PlumbJob(seed: 1);
    final first = j.steps.firstWhere((s) => s.prereq.isNotEmpty);
    final bad = j.place(first.item, first.id);
    expect(bad.ok, isFalse);
    expect(bad.msg, contains('first'));
    expect(j.mistakes, 1);
    // Cutting into a pipe with the water on.
    final valve = j.steps.firstWhere((s) => s.waterOff);
    expect(j.place(valve.item, valve.id).msg, contains('water is still on'));
    expect(j.toggleWater().ok, isTrue);
    expect(j.waterOn, isFalse);
    for (final s in j.steps) {
      expect(j.place(s.item, s.id).ok, isTrue, reason: s.id);
    }
    // Loose joints leak.
    final leak = j.toggleWater();
    expect(leak.ok, isFalse);
    expect(j.leaking, isNotEmpty);
    j.toggleWater();
    for (final s in j.steps) {
      for (var i = 0; i < s.tighten; i++) {
        expect(j.tighten(s.id).ok, isTrue);
      }
    }
    expect(j.toggleWater().ok, isTrue);
    expect(j.done, isTrue);
  });

  test('every seed gives a buildable scene and jobs differ', () {
    final kinds = <String>{};
    for (var s = 1; s <= 30; s++) {
      final j = PlumbJob(seed: s);
      kinds.add('${j.variant.id}${j.mirror}');
      expect(buildPlumbJobScene(j).polys.length, lessThan(9000));
      for (final st in j.steps) {
        j.waterOn = false;
        j.place(st.item, st.id);
      }
      expect(buildPlumbJobScene(j, armed: 'x').polys, isNotEmpty);
    }
    expect(kinds.length, greaterThan(2));
  });

  testWidgets('page opens and shows the tray', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyPlumbJobPage(seed: 2)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.textContaining('fitted'), findsOneWidget);
    expect(find.text('Wrench'), findsOneWidget);
    await t.tap(find.text('Wrench'));
    await t.pump(const Duration(milliseconds: 300));
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('a part picked from the tray offers its spot as a button', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyPlumbJobPage(seed: 1)));
    await t.pump(const Duration(milliseconds: 700));
    await t.tap(find.text('Flange'));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('📍 Toilet flange'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('1/'), findsWidgets);
    await t.pump(const Duration(seconds: 12));
  });

  test('scene polys class is used', () {
    expect(Scene3DPainter, isNotNull);
  });

  testWidgets('the plumbing job tells you what to do next, shows only the parts it needs, and shows a leak and says where', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final job = PlumbJob(seed: 2, variantId: 'kitchen');
    await t.pumpWidget(MaterialApp(home: NgmyPlumbJobPage(job: job)));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.textContaining('Next: pick'), findsOneWidget);
    expect(find.text('Show me'), findsOneWidget);
    // A kitchen has no toilet to fit.
    expect(find.text('Toilet'), findsNothing);
    // A leak is drawn and named.
    job.leaking.add(job.steps.firstWhere((s) => s.item == 'trap').id);
    final sc = buildPlumbJobScene(job);
    expect(sc.labels.any((l) => l.text.contains('LEAK')), isTrue);
    expect(plumbJobWater(job, 1.0), isNotEmpty);
    await t.pump(const Duration(seconds: 10));
  });
}
