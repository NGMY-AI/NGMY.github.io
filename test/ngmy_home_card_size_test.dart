import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_home_glass_cards.dart';

void main() {
  test('home cards keep the same shape on every phone', () {
    for (final w in [343.0, 358.0, 396.0, 398.0]) {
      expect(w / ngmyHomeCardHeightFor(w), closeTo(1.55, 0.01));
    }
  });

  testWidgets('card content scales instead of getting cut off', (t) async {
    for (final w in [320.0, 400.0]) {
      await t.pumpWidget(MaterialApp(
        home: Scaffold(body: Center(
          child: SizedBox(
            width: w,
            height: ngmyHomeCardHeightFor(w),
            child: const NgmyHomeCardCanvas(child: Row(children: [Text('LEFT', style: TextStyle(fontSize: 14)), Spacer(), Text('RIGHT END', style: TextStyle(fontSize: 14))])),
          ),
        )),
      ));
      expect(t.takeException(), isNull);
      final right = t.getRect(find.text('RIGHT END'));
      expect(right.right, lessThanOrEqualTo(t.getRect(find.byType(NgmyHomeCardCanvas)).right + 0.5));
    }
  });
}
