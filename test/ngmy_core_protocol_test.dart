import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_core_protocol_sims.dart';

void main() {
  testWidgets('Core Protocol lists four unfold sequences and each one plays without errors', (tester) async {
    tester.view.physicalSize = const Size(430, 932);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const MaterialApp(home: NgmyCoreProtocolSimsScreen()));
    for (final title in ['MESSAGE FUNNEL', 'VAULT UNLOCK', 'GROWTH SKYLINE', 'ORBIT ASSEMBLY']) {
      expect(find.text(title), findsOneWidget);
    }
    for (final title in ['MESSAGE FUNNEL', 'VAULT UNLOCK', 'GROWTH SKYLINE', 'ORBIT ASSEMBLY']) {
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
}
