import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_a.dart';
import 'package:ngmy/ngmy_arcade_b.dart';
import 'package:ngmy/ngmy_arcade_c.dart';
import 'package:ngmy/ngmy_edu_b.dart';
import 'package:ngmy/ngmy_fun_a.dart';
import 'package:ngmy/ngmy_fun_b.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUpAll(() => NgmyTone.enabled = false);

  final studios = <String, Widget Function()>{
    'ROCKET LANDER': () => const NgmyRocketLanderStudio(),
    'INTERNET JOURNEY': () => const NgmyInternetJourneyStudio(),
    'POWER GRID': () => const NgmyPowerGridStudio(),
    'OPTICS LAB': () => const NgmyOpticsStudio(),
    'RADIO LAB': () => const NgmyRadioStudio(),
    'PIXEL TV': () => const NgmyPixelScreenStudio(),
    'ATOM BUILDER': () => const NgmyAtomStudio(),
    'CIPHER LAB': () => const NgmyCipherStudio(),
    'MAGNET LAB': () => const NgmyMagnetCraneStudio(),
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
    expect(caesar('ABC XYZ', 3), 'DEF ABC');
    expect(caesar(caesar('HELLO', 7), -7), 'HELLO');
    expect(vigenere(vigenere('ATTACKATDAWN', 'LEMON'), 'LEMON', decode: true), 'ATTACKATDAWN');
    expect(lensImageDistance(120, 60), closeTo(120, 1e-9));
    expect(lensImageDistance(60, 60), isNull);
    expect(electronShells(11), [2, 8, 1]);
    expect(nucleusStable(6, 6), isTrue);
    expect(nucleusStable(6, 8), isFalse);
    expect(stationStrength(kStations[0], kStations[0].mhz, 1), closeTo(1, 1e-9));
    expect(stationStrength(kStations[0], 100, 1), lessThan(0.01));
  });

}

Object? tester(WidgetTester t) => t.takeException();
