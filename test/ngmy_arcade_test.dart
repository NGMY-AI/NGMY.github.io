import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_a.dart';
import 'package:ngmy/ngmy_arcade_b.dart';
import 'package:ngmy/ngmy_arcade_c.dart';
import 'package:ngmy/ngmy_edu_a.dart';
import 'package:ngmy/ngmy_edu_b.dart';
import 'package:ngmy/ngmy_fun_a.dart';
import 'package:ngmy/ngmy_fun_b.dart';
import 'package:ngmy/ngmy_core_studios_b.dart';
import 'package:ngmy/ngmy_play_hub.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:ngmy/ngmy_tech_labs.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUpAll(() => NgmyTone.enabled = false);

  final studios = <String, Widget Function()>{
    'ROCKET LANDER': () => const NgmyRocketLanderStudio(),
    'INTERNET JOURNEY': () => const NgmyInternetJourneyStudio(),
    'POWER GRID': () => const NgmyPowerGridStudio(),
    'MOLECULE MAKER': () => const NgmyMoleculeStudio(),
    'DNA LAB': () => const NgmyDnaStudio(),
    'ECOSYSTEM LAB': () => const NgmyEcosystemStudio(),
    'BALANCE LAB': () => const NgmyBalanceStudio(),
    'GEAR LAB': () => const NgmyGearStudio(),
    'OPTICS LAB': () => const NgmyOpticsStudio(),
    'LASER MAZE': () => const NgmyLaserMazeStudio(),
    'LIGHT MIXER': () => const NgmyLightMixerStudio(),
    'RADIO LAB': () => const NgmyRadioStudio(),
    'PIXEL TV': () => const NgmyPixelScreenStudio(),
    'ATOM BUILDER': () => const NgmyAtomStudio(),
    'CIPHER LAB': () => const NgmyCipherStudio(),
    'MAGNET LAB': () => const NgmyMagnetCraneStudio(),
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

  test('science rules behind the new labs', () {
    final water = kMolecules.firstWhere((m) => m.name == 'Water');
    final co2 = kMolecules.firstWhere((m) => m.name == 'Carbon dioxide');
    expect(moleculeComplete(['O', 'H', 'H'], {1: 1, 2: 1}, water), isTrue);
    expect(moleculeComplete(['O', 'H', 'H'], {1: 1}, water), isFalse);
    expect(moleculeComplete(['C', 'O', 'O'], {1: 2, 2: 2}, co2), isTrue);
    expect(moleculeComplete(['C', 'O', 'O'], {1: 1, 2: 1}, co2), isFalse);
    expect(codonToAmino('AUG'), 'M');
    expect(codonToAmino('UUU'), 'F');
    expect(codonToAmino('UAA'), '*');
    expect(rnaPartner('A'), 'U');
    expect(dnaPartner('G'), 'C');
    expect(caesar('ABC XYZ', 3), 'DEF ABC');
    expect(caesar(caesar('HELLO', 7), -7), 'HELLO');
    expect(vigenere(vigenere('ATTACKATDAWN', 'LEMON'), 'LEMON', decode: true), 'ATTACKATDAWN');
    expect(gearRatio(16, 32, 12, 24), 0.25);
    expect(lensImageDistance(120, 60), closeTo(120, 1e-9));
    expect(lensImageDistance(60, 60), isNull);
  });

  test('every laser level can be won with the mirrors it gives you', () {
    for (var n = 0; n < 60; n++) {
      final lv = makeLaserLevel(n);
      expect(lv.solution.length, lessThanOrEqualTo(lv.mirrors), reason: 'level $n');
      final r = traceLaser(lv, lv.solution);
      expect(r.hit.length, lv.targets.length, reason: 'level $n');
    }
    expect(colourGap([1, 0, 0], [1, 0, 0]), 0);
    expect(electronShells(11), [2, 8, 1]);
    expect(nucleusStable(6, 6), isTrue);
    expect(nucleusStable(6, 8), isFalse);
    expect(stationStrength(kStations[0], kStations[0].mhz, 1), closeTo(1, 1e-9));
    expect(stationStrength(kStations[0], 100, 1), lessThan(0.01));
  });

  test('the ecosystem stays alive on its own and balance puzzles can be solved', () {
    var s = [80.0, 30.0, 6.0];
    for (var i = 0; i < 8000; i++) {
      s = ecoStep(s, 0.05);
    }
    expect(s[1], greaterThan(5));
    expect(s[2], greaterThan(1));
    for (final lv in balanceLevels()) {
      expect(lv.torque, inInclusiveRange(1, 75));
    }
  });

  testWidgets('discovery hub has no AI inventor and lists new games', (t) async {
    await t.pumpWidget(const MaterialApp(home: NgmyDiscoveryHub()));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('AI INVENTOR'), findsNothing);
    expect(find.text('POWER GRID'), findsOneWidget);
  });
}

Object? tester(WidgetTester t) => t.takeException();
