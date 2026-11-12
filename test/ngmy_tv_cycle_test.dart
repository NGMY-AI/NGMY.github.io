import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';

void main() {
  testWidgets('the TV plays its channels one after another by itself, ten seconds each, and goes round', (t) async {
    t.view.physicalSize = const Size(1200, 700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyTvScreen(channel: 0, stayFor: Duration(minutes: 30))));
    String ch() => (find.byType(Text).evaluate().map((e) => (e.widget as Text).data ?? '').firstWhere((s) => s.contains('CH '), orElse: () => ''));
    await t.pump(const Duration(milliseconds: 500));
    expect(ch(), contains('CH 1'));
    // 3 seconds of the logo, then ten seconds of channel 1.
    for (var i = 0; i < 135; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(ch(), contains('CH 2'), reason: 'on to the next channel by itself');
    for (var i = 0; i < 105; i++) {
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(ch(), contains('CH 3'));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
