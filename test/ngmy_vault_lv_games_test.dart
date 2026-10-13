import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_host.dart';
import 'package:ngmy/ngmy_vault_lv_host.dart';
import 'package:ngmy/ngmy_vault_lv_registry.dart';

void main() {
  test('100 vault games with unique ids and 30 levels', () {
    expect(kVaultLvGames.length, 100);
    expect(kVaultLvGames.map((g) => g.id).toSet().length, kVaultLvGames.length);
    expect(kVaultLevels, greaterThanOrEqualTo(20));
  });

  for (final g in kVaultLvGames) {
    for (final level in const [1, 15, 30]) {
      testWidgets('${g.title} level $level runs and responds', (tester) async {
        tester.view.physicalSize = const Size(400, 760);
        tester.view.devicePixelRatio = 1;
        addTearDown(tester.view.reset);
        var progressCalls = 0;
        final args = NgmyArcadeArgs(
          rng: math.Random(level * 31 + 7),
          onProgress: (_, _) => progressCalls++,
          onComplete: () {},
          onKnockout: (_) {},
        );
        await tester.pumpWidget(MaterialApp(home: Scaffold(backgroundColor: Colors.black, body: g.build(args, level))));
        for (var i = 0; i < 30; i++) {
          await tester.pump(const Duration(milliseconds: 50));
        }
        for (final p in const [Offset(200, 380), Offset(120, 300), Offset(280, 450), Offset(200, 660), Offset(60, 700), Offset(340, 620)]) {
          await tester.tapAt(p);
          await tester.pump(const Duration(milliseconds: 60));
        }
        await tester.dragFrom(const Offset(120, 380), const Offset(80, 0));
        for (var i = 0; i < 40; i++) {
          await tester.pump(const Duration(milliseconds: 50));
        }
        expect(tester.takeException(), isNull);
        expect(progressCalls, greaterThan(0));
        await tester.pumpWidget(const SizedBox());
        await tester.pump(const Duration(seconds: 5));
      });
    }
  }
}
