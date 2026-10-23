import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_block_builder.dart';
import 'package:ngmy/ngmy_play_data.dart';
import 'package:ngmy/ngmy_play_hub.dart';
import 'package:ngmy/ngmy_play_studios_a.dart';
import 'package:ngmy/ngmy_play_studios_b.dart';
import 'package:ngmy/ngmy_play_tools.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUpAll(() => NgmyTone.enabled = false);

  Future<void> open(WidgetTester t, Widget w) async {
    await t.runAsync(() async {
      await NgmyPlayData.json("elements");
      await NgmyPlayData.json("sky");
      await NgmyPlayData.json("earth_quakes");
    });
    t.view.physicalSize = const Size(430, 932);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: w));
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
    await t.pump(const Duration(milliseconds: 500));
  }

  test('bundled data files parse and have the expected size', () async {
    TestWidgetsFlutterBinding.ensureInitialized();
    final el = await NgmyPlayData.json('elements') as List;
    expect(el.length, greaterThanOrEqualTo(118));
    final sky = await NgmyPlayData.json('sky') as Map;
    expect((sky['cons'] as List).length, greaterThan(80));
    expect((sky['stars'] as List).length, greaterThan(500));
    final q = await NgmyPlayData.json('earth_quakes') as Map;
    expect((q['bounds'] as List), isNotEmpty);
  });

  test('block projects survive saving and loading', () {
    for (final p in bbStarters()) {
      final back = BbProject.fromJson(p.toJson())!;
      expect(back.sprites.length, p.sprites.length);
      expect(back.toJson().toString(), p.toJson().toString());
    }
  });

  testWidgets('every discovery studio opens and runs', (t) async {
    for (final w in const <Widget>[NgmyPeriodicStudio(), NgmySkyStudio(), NgmyQuakeStudio(), NgmyDinoStudio(), NgmyAnimalStudio(), NgmyBodyStudio(), NgmyConverterStudio(), NgmyWorldClockStudio(), NgmyMathStudio(), NgmyTypingStudio()]) {
      await open(t, w);
      await t.pump(const Duration(milliseconds: 800));
      expect(t.takeException(), isNull, reason: '$w');
      await t.pumpWidget(const SizedBox());
    }
  });

  testWidgets('periodic table: tapping two elements makes water', (t) async {
    await open(t, const NgmyPeriodicStudio());
    await t.tap(find.text('Mix two'));
    await t.pump();
    await t.tap(find.text('H').first, warnIfMissed: false);
    await t.pump();
    await t.tap(find.text('O').first);
    await t.pump();
    expect(find.textContaining('Water'), findsOneWidget);
  });

  testWidgets('block builder runs a starter and can be edited', (t) async {
    await open(t, const NgmyBlockBuilder());
    expect(find.text('BLOCK BUILDER'), findsWidgets);
    await t.tap(find.text('Play'));
    for (var i = 0; i < 20; i++) {
      await t.pump(const Duration(milliseconds: 50));
    }
    expect(find.text('Stop'), findsOneWidget);
    await t.tap(find.text('Stop'));
    await t.pump();
    // Add a block from the Sound tab.
    await t.tap(find.text('Sound'));
    await t.pump();
    await t.tap(find.text('play note …'));
    await t.pump();
    expect(find.textContaining('play note'), findsWidgets);
    expect(t.takeException(), isNull);
  });

  testWidgets('hubs show their tiles', (t) async {
    await open(t, const NgmyDiscoveryHub());
    expect(find.text('PERIODIC TABLE'), findsOneWidget);
    expect(find.text('BODY EXPLORER'), findsOneWidget);
    await open(t, const NgmyToolboxHub());
    expect(find.text('TYPING TUTOR'), findsOneWidget);
  });
}
