import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_a.dart';
import 'package:ngmy/ngmy_arcade_b.dart';
import 'package:ngmy/ngmy_arcade_c.dart';
import 'package:ngmy/ngmy_chord_wheel.dart';
import 'package:ngmy/ngmy_core_studios_b.dart';
import 'package:ngmy/ngmy_play_hub.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:ngmy/ngmy_tech_labs.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUpAll(() => NgmyTone.enabled = false);

  final studios = <String, Widget Function()>{
    'BUG SMASHER': () => const NgmyBugSmasherStudio(),
    'ROCKET LANDER': () => const NgmyRocketLanderStudio(),
    'DATA SNAKE': () => const NgmySnakeStudio(),
    'BINARY 2048': () => const NgmyBinary2048Studio(),
    'BUG HUNT': () => const NgmyBugHuntStudio(),
    'SIGNAL BREAKER': () => const NgmyBreakerStudio(),
    'PASSWORD LAB': () => const NgmyPasswordLabStudio(),
    'WAVE LAB': () => const NgmyWaveLabStudio(),
    'ROBOT CODER': () => const NgmyRobotCoderStudio(),
    'INTERNET JOURNEY': () => const NgmyInternetJourneyStudio(),
    'POWER GRID': () => const NgmyPowerGridStudio(),
    'CHORD LAB': () => const NgmyChordWheelStudio(),
    'MAGNET LAB': () => const NgmyMagnetLab(),
    'CHAIN BURST': () => const NgmyChainBurstStudio(),
  };

  for (final e in studios.entries) {
    testWidgets('${e.key} opens and runs', (t) async {
      SharedPreferences.setMockInitialValues({});
      t.view.physicalSize = const Size(430, 932);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: e.value()));
      for (var i = 0; i < 20; i++) {
        await t.pump(const Duration(milliseconds: 100));
      }
      expect(find.text(e.key), findsWidgets);
      expect(tester(t), isNull);
    });
  }

  testWidgets('discovery hub has no AI inventor and lists new games', (t) async {
    await t.pumpWidget(const MaterialApp(home: NgmyDiscoveryHub()));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('AI INVENTOR'), findsNothing);
    expect(find.text('POWER GRID'), findsOneWidget);
  });
}

Object? tester(WidgetTester t) => t.takeException();
