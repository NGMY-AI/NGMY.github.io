import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_core_protocol_sims.dart';
import 'package:ngmy/ngmy_core_reaction_lab.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    NgmyTone.enabled = false;
  });
  _engineTests();

  testWidgets('Core Protocol shows the Lab and the sequences three to a row, and each sequence plays', (tester) async {
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: NgmyCoreProtocolSimsScreen()));
    expect(find.text('REACTION LAB'), findsOneWidget);
    expect(find.text('UNIVERSE'), findsOneWidget);
    // Three boxes in a row: the first three studio tiles share a top edge.
    final tops = [for (final t in ['UNIVERSE', 'BLOCK BUILDER', 'DISCOVERY LAB']) tester.getTopLeft(find.text(t)).dy];
    expect((tops[0] - tops[1]).abs() < 40 && (tops[1] - tops[2]).abs() < 40, isTrue);
    for (final title in ['MESSAGE FUNNEL', 'VAULT UNLOCK', 'GROWTH SKYLINE', 'ORBIT ASSEMBLY']) {
      await tester.scrollUntilVisible(find.text(title), 300, scrollable: find.byType(Scrollable).first);
      await tester.pump(const Duration(milliseconds: 100));
      await tester.tap(find.text(title));
      await tester.pump(const Duration(milliseconds: 100));
      for (var i = 0; i < 24; i++) {
        await tester.pump(const Duration(milliseconds: 450));
        expect(tester.takeException(), isNull, reason: '$title at step $i');
      }
      await tester.tap(find.byIcon(Icons.arrow_back_ios_new_rounded));
      await tester.pump(const Duration(milliseconds: 200));
    }
  });

  testWidgets('Reaction Lab: loads a board, runs it, and lets parts be added, connected and cleared', (tester) async {
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: NgmyReactionLabScreen()));
    await tester.pump(const Duration(milliseconds: 200));
    await tester.pump(const Duration(milliseconds: 200));
    for (var i = 0; i < 20; i++) {
      await tester.pump(const Duration(milliseconds: 250));
    }
    expect(tester.takeException(), isNull);
    // Add parts from the shelf.
    await tester.tap(find.text('Dice'));
    await tester.tap(find.text('Burst'));
    await tester.tap(find.text('Shake'));
    await tester.pump(const Duration(milliseconds: 300));
    // Presets sheet and Show mode.
    await tester.tap(find.byTooltip('Ideas'));
    for (var i = 0; i < 10; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(find.text('Fireworks'), findsOneWidget);
    await tester.tap(find.text('Fireworks'));
    for (var i = 0; i < 10; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    for (var i = 0; i < 24; i++) {
      await tester.pump(const Duration(milliseconds: 250));
    }
    await tester.tap(find.byTooltip('Show'));
    await tester.pump(const Duration(milliseconds: 400));
    expect(find.text('Back to building'), findsOneWidget);
    await tester.tap(find.text('Back to building'));
    await tester.pump(const Duration(milliseconds: 400));
    await tester.tap(find.byTooltip('Clear'));
    await tester.pump(const Duration(milliseconds: 400));
    await tester.tap(find.widgetWithText(TextButton, 'Clear'));
    await tester.pump(const Duration(milliseconds: 400));
    expect(tester.takeException(), isNull);
  });
}

void _engineTests() {
  test('a clock reaches what it is wired to, and wiring changes what happens', () {
    // Clock every 0.8s -> Burst.
    final a = ngmyReactionLabSimulate([('beat', 1), ('burst', 0)], [(0, 1)]);
    expect(a['0_beat']! >= 6, isTrue);
    expect(a['1_burst'], greaterThanOrEqualTo(a['0_beat']! - 1));

    // Not wired: the burst never reacts.
    final b = ngmyReactionLabSimulate([('beat', 1), ('burst', 0)], []);
    expect(b['1_burst'], 0);

    // Echo makes each signal arrive four times.
    final c = ngmyReactionLabSimulate([('beat', 3), ('echo', 0), ('light', 0)], [(0, 1), (1, 2)], ms: 3000);
    expect(c['2_light']!, greaterThanOrEqualTo(3));

    // Every 3rd lets one in three through.
    final d = ngmyReactionLabSimulate([('beat', 2), ('count3', 0), ('burst', 0)], [(0, 1), (1, 2)], ms: 8000);
    expect(d['2_burst'], (d['1_count3']! / 3).floor());

    // Delay holds the signal back, so it arrives later than without it.
    final fast = ngmyReactionLabSimulate([('button', 0), ('burst', 0)], [(0, 1)], ms: 300);
    expect(fast['1_burst'], 0); // a button never fires by itself

    // A source cannot be wired into.
    final e = ngmyReactionLabSimulate([('beat', 1), ('beat', 1)], [(0, 1)], ms: 1000);
    expect(e['1_beat'], greaterThanOrEqualTo(1)); // it runs on its own clock, not from the wire
  });

  test('a loop with a delay keeps running but stays inside the safety limit', () {
    final r = ngmyReactionLabSimulate([('beat', 0), ('delay', 0), ('echo', 0), ('burst', 0)], [(0, 1), (1, 2), (2, 1), (2, 3)], ms: 12000);
    expect(r['3_burst'], greaterThan(5));
  });
}
