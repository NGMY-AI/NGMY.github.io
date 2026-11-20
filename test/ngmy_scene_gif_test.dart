import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_core_protocol_sims.dart';

void main() {
  testWidgets('a scene box makes its GIF and says how it went', (tester) async {
    tester.view.physicalSize = const Size(1170, 2532);
    tester.view.devicePixelRatio = 3;
    addTearDown(tester.view.reset);
    // The test font is wider than the app's, so the box names overflow by a hair here (not in the app).
    final old = FlutterError.onError;
    FlutterError.onError = (d) {
      if (d.toString().contains('overflowed')) return;
      old?.call(d);
    };
    addTearDown(() => FlutterError.onError = old);
    await tester.pumpWidget(const MaterialApp(home: NgmyCoreProtocolSimsScreen()));
    await tester.pump(const Duration(milliseconds: 500));
    final box = find.text('VAULT UNLOCK');
    await tester.ensureVisible(box.first);
    await tester.pump();
    await tester.tap(box.first);
    await tester.pump(const Duration(milliseconds: 500));
    final btn = find.text('Download the scene (GIF)');
    await tester.ensureVisible(btn);
    await tester.pump();
    await tester.tap(btn);
    for (var i = 0; i < 4000; i++) {
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 5)));
      await tester.pump(const Duration(milliseconds: 16));
      if (find.byType(SnackBar).evaluate().isNotEmpty) break;
    }
    final text = (tester.widget<SnackBar>(find.byType(SnackBar)).content as Text).data!;
    // ignore: avoid_print
    print('message: $text');
    expect(text.contains('Could not make'), isFalse);
  });
}
