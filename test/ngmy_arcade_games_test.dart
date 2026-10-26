import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_games.dart';
import 'package:ngmy/ngmy_arcade_host.dart';

void main() {
  test('48 unique arcade games with their own ids', () {
    expect(kNgmyArcadeGames.length, 48);
    expect(kNgmyArcadeGameIds.length, 48);
    expect(kNgmyArcadeGames.map((g) => g.id).toSet(), kNgmyArcadeGameIds);
  });

  for (final g in kNgmyArcadeGames) {
    testWidgets('${g.title} runs and responds to taps', (tester) async {
      tester.view.physicalSize = const Size(400, 700);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      var progressCalls = 0;
      final args = NgmyArcadeArgs(
        rng: math.Random(7),
        onProgress: (_, _) => progressCalls++,
        onComplete: () {},
        onKnockout: (_) {},
      );
      await tester.pumpWidget(MaterialApp(home: Scaffold(backgroundColor: Colors.black, body: ngmyBuildArcadeGame(g.id, args))));
      for (var i = 0; i < 40; i++) {
        await tester.pump(const Duration(milliseconds: 50));
      }
      // Tap around the play area like a player would.
      for (final p in const [Offset(200, 350), Offset(120, 300), Offset(280, 420), Offset(200, 600), Offset(60, 650)]) {
        await tester.tapAt(p);
        await tester.pump(const Duration(milliseconds: 60));
      }
      for (var i = 0; i < 20; i++) {
        await tester.pump(const Duration(milliseconds: 50));
      }
      expect(tester.takeException(), isNull);
      expect(progressCalls, greaterThan(0));
      await tester.pumpWidget(const SizedBox());
    });
  }
}
