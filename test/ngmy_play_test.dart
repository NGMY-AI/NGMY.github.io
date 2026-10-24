import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ai_inventor.dart';
import 'package:ngmy/ngmy_block_builder.dart';
import 'package:ngmy/ngmy_electronics_lab.dart';
import 'package:ngmy/ngmy_tech_labs.dart';
import 'package:ngmy/ngmy_body_explorer.dart';
import 'package:ngmy/ngmy_play_data.dart';
import 'package:ngmy/ngmy_play_hub.dart';
import 'package:ngmy/ngmy_play_studios_a.dart';
import 'package:ngmy/ngmy_play_toolbox.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUpAll(() => NgmyTone.enabled = false);

  Future<void> open(WidgetTester t, Widget w) async {
    await t.runAsync(() async {
      await NgmyPlayData.json("elements");
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
  });

  test('block projects survive saving and loading', () {
    for (final p in bbStarters()) {
      final back = BbProject.fromJson(p.toJson())!;
      expect(back.sprites.length, p.sprites.length);
      expect(back.toJson().toString(), p.toJson().toString());
    }
  });

  testWidgets('every discovery studio opens and runs', (t) async {
    for (final w in const <Widget>[NgmyPeriodicStudio(), NgmyMagnetLab(), NgmyRadioLab(), NgmyPowerPlantStudio(), NgmyPixelTvStudio(), NgmyElectronicsLab(), NgmyInventorStudio(), NgmyBodyExplorer(), NgmyWheelStudio(), NgmyFocusTimerStudio(), NgmyBreatheStudio(), NgmyDrawPadStudio(), NgmyMemoryStudio(), NgmySimonStudio(), NgmyTipStudio(), NgmyLuckyStudio()]) {
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

  testWidgets('block builder runs a starter and blocks can be dragged in', (t) async {
    await open(t, const NgmyBlockBuilder());
    expect(find.text('BLOCK BUILDER'), findsWidgets);
    await t.tap(find.text('Play'));
    for (var i = 0; i < 20; i++) {
      await t.pump(const Duration(milliseconds: 50));
    }
    expect(find.text('Stop'), findsOneWidget);
    await t.tap(find.text('Stop'));
    await t.pump();
    await t.tap(find.text('Sound'));
    await t.pump();
    final note = find.textContaining('play note', findRichText: true);
    expect(note, findsOneWidget);
    final g = await t.startGesture(t.getCenter(note));
    await t.pump(const Duration(milliseconds: 300));
    await g.moveTo(t.getCenter(find.textContaining('Drop here for a new script')));
    await t.pump(const Duration(milliseconds: 100));
    await g.up();
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('play note', findRichText: true), findsNWidgets(2));
    expect(t.takeException(), isNull);
  });

  testWidgets('hubs show their tiles', (t) async {
    await open(t, const NgmyDiscoveryHub());
    expect(find.text('PERIODIC TABLE'), findsOneWidget);
    expect(find.text('BODY EXPLORER'), findsOneWidget);
    await open(t, const NgmyToolboxHub());
    expect(find.text('Spin the Wheel'), findsOneWidget);
  });
  testWidgets('AI inventor builds the design it is given, part by part', (t) async {
    const reply = '{"title":"Test lamp","explain":"A battery lights a bulb.","honest":"","steps":["Add the battery","Add the bulb","Wire it up"],'
        '"parts":[{"id":"a","kind":"battery","x":0.25,"y":0.3,"volts":3},{"id":"b","kind":"bulb","x":0.75,"y":0.3}],'
        '"wires":[["a",0,"b",0],["b",1,"a",1]]}';
    await open(t, NgmyInventorStudio(ai: (p) async => reply));
    await t.enterText(find.byType(TextField), 'a lamp');
    await t.tap(find.text('Invent'));
    for (var i = 0; i < 40; i++) {
      await t.pump(const Duration(milliseconds: 150));
    }
    expect(find.text('Test lamp'), findsOneWidget);
    expect(t.takeException(), isNull);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets('AI inventor is honest about free energy when the AI is not reachable', (t) async {
    await open(t, NgmyInventorStudio(ai: (p) async => null));
    await t.enterText(find.byType(TextField), 'free electricity forever');
    await t.tap(find.text('Invent'));
    for (var i = 0; i < 30; i++) {
      await t.pump(const Duration(milliseconds: 150));
    }
    expect(find.textContaining('no machine can make energy from nothing', findRichText: true), findsOneWidget);
    await t.pumpWidget(const SizedBox());
  });

  test('inventor designs always work in the simulator', () {
    for (final w in ['a radio', 'a torch', 'a doorbell', 'free energy', 'a fan powered by wind', 'something strange']) {
      expect(designWorks(localDesign(w).recipe), isTrue, reason: w);
    }
    expect(parseDesign('not json'), isNull);
  });

}
