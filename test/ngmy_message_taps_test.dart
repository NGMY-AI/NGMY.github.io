import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_message_taps.dart';

void main() {
  Future<({List<String> copied, int Function() likes})> pump(WidgetTester tester) async {
    final copied = <String>[];
    var likes = 0;
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Center(
          child: NgmyMessageTaps(
            copyText: 'Hello there',
            onLike: () => likes++,
            onCopied: (t) async => copied.add(t),
            child: const SizedBox(width: 200, height: 60, child: Text('Hello there')),
          ),
        ),
      ),
    ));
    return (copied: copied, likes: () => likes);
  }

  Future<void> taps(WidgetTester tester, int n) async {
    for (var i = 0; i < n; i++) {
      await tester.tap(find.text('Hello there'));
      await tester.pump(const Duration(milliseconds: 120));
    }
  }

  testWidgets('double-tap likes the message', (tester) async {
    final r = await pump(tester);
    await taps(tester, 2);
    await tester.pump(const Duration(milliseconds: 400));
    expect(r.likes(), 1);
    expect(r.copied, isEmpty);
  });

  testWidgets('triple-tap copies and does not like', (tester) async {
    final r = await pump(tester);
    await taps(tester, 3);
    await tester.pump(const Duration(milliseconds: 400));
    expect(r.copied, ['Hello there']);
    expect(r.likes(), 0);
  });

  testWidgets('a single tap does nothing', (tester) async {
    final r = await pump(tester);
    await taps(tester, 1);
    await tester.pump(const Duration(milliseconds: 400));
    expect(r.likes(), 0);
    expect(r.copied, isEmpty);
  });
}
