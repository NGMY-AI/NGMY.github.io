import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_core_reaction_lab.dart';
import 'package:ngmy/ngmy_core_studios_a.dart';
import 'package:ngmy/ngmy_core_studios_b.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Plays with a studio the way a person would: drags and taps on the stage, taps every chip and
/// button, drags every slider, and lets it run. It must never throw.
Future<void> _play(WidgetTester tester, Widget studio, String name) async {
  tester.view.physicalSize = const Size(430, 932);
  tester.view.devicePixelRatio = 1.0;
  addTearDown(tester.view.reset);
  await tester.pumpWidget(MaterialApp(home: studio));
  for (var i = 0; i < 8; i++) {
    await tester.pump(const Duration(milliseconds: 100));
  }
  const center = Offset(215, 300);
  final g = await tester.startGesture(center);
  for (var i = 0; i < 14; i++) {
    await g.moveBy(const Offset(9, 7));
    await tester.pump(const Duration(milliseconds: 40));
  }
  await g.up();
  await tester.tapAt(center + const Offset(50, -60));
  await tester.pump(const Duration(milliseconds: 100));
  await tester.tapAt(center + const Offset(-70, 40));
  await tester.pump(const Duration(milliseconds: 100));
  for (var i = 0; i < find.byType(StudioChip).evaluate().length; i++) {
    await tester.tap(find.byType(StudioChip).at(i), warnIfMissed: false);
    await tester.pump(const Duration(milliseconds: 80));
    // Play on the stage again with this setting.
    final gg = await tester.startGesture(center);
    await gg.moveBy(const Offset(30, 20));
    await tester.pump(const Duration(milliseconds: 40));
    await gg.up();
  }
  for (var i = 0; i < find.byType(StudioButton).evaluate().length; i++) {
    await tester.tap(find.byType(StudioButton).at(i), warnIfMissed: false);
    await tester.pump(const Duration(milliseconds: 80));
  }
  for (var i = 0; i < find.byType(Slider).evaluate().length; i++) {
    await tester.drag(find.byType(Slider).at(i), const Offset(40, 0), warnIfMissed: false);
    await tester.pump(const Duration(milliseconds: 60));
  }
  for (var i = 0; i < 25; i++) {
    await tester.pump(const Duration(milliseconds: 120));
  }
  expect(tester.takeException(), isNull, reason: name);
  // The help button opens.
  if (find.byTooltip('How to play').evaluate().isNotEmpty) {
    await tester.tap(find.byTooltip('How to play'));
    await tester.pump(const Duration(milliseconds: 300));
    expect(tester.takeException(), isNull, reason: '$name help');
  }
}

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    NgmyTone.enabled = false;
  });

  testWidgets('Spark Painter', (t) => _play(t, const NgmySparkPainterStudio(), 'spark'));
  testWidgets('Mandala Maker', (t) => _play(t, const NgmyMandalaStudio(), 'mandala'));
  testWidgets('Title Animator', (t) => _play(t, const NgmyTitleStudio(), 'title'));
  testWidgets('Palette Lab', (t) => _play(t, const NgmyPaletteStudio(), 'palette'));
  testWidgets('Gravity Toy', (t) => _play(t, const NgmyGravityStudio(), 'gravity'));
  testWidgets('Orbit Studio', (t) => _play(t, const NgmyOrbitStudio(), 'orbit'));
  testWidgets('Swarm Studio', (t) => _play(t, const NgmySwarmStudio(), 'swarm'));
  testWidgets('Firework Designer', (t) => _play(t, const NgmyFireworkStudio(), 'fireworks'));
  testWidgets('Chain Burst', (t) => _play(t, const NgmyChainBurstStudio(), 'chain'));
  testWidgets('Beat Maker', (t) => _play(t, const NgmyBeatStudio(), 'beat'));
  testWidgets('Reaction Lab', (t) => _play(t, const NgmyReactionLabScreen(), 'lab'));

  testWidgets('Palette Lab makes five matching colours and copies the code', (tester) async {
    tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, (call) async => null);
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: NgmyPaletteStudio()));
    await tester.pump(const Duration(milliseconds: 200));
    expect(find.text('Shuffle'), findsOneWidget);
    expect(find.text('Copy CSS'), findsOneWidget);
    await tester.tap(find.text('Opposites'));
    await tester.pump(const Duration(milliseconds: 200));
    await tester.ensureVisible(find.text('Copy Flutter'));
    await tester.tap(find.text('Copy Flutter'));
    await tester.pump(const Duration(milliseconds: 200));
    expect(find.textContaining('copied'), findsWidgets);
  });

  testWidgets('Title Animator shows the typed word', (tester) async {
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: NgmyTitleStudio()));
    await tester.pump(const Duration(milliseconds: 1200));
    await tester.enterText(find.byType(TextField), 'HELLO');
    await tester.pump(const Duration(milliseconds: 1200));
    expect(find.text('H'), findsWidgets);
    expect(find.text('O'), findsWidgets);
  });
}
