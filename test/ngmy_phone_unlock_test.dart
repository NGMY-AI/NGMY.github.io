import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_phone_unlock.dart';

void main() {
  testWidgets('Phone Unlock: the Phone is a small button right beside the X at the top, not a big card in the list', (t) async {
    t.view.physicalSize = const Size(800, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyPhoneUnlockPage()));
    await t.pump(const Duration(milliseconds: 300));
    final phone = find.byKey(const Key('phone-unlock-open-phone'));
    expect(phone, findsOneWidget);
    final r = t.getRect(phone);
    expect(r.width, lessThanOrEqualTo(40), reason: 'small');
    expect(r.top, lessThan(90), reason: 'at the top, in the header');
    final close = t.getRect(find.byTooltip('Close').first);
    expect((close.center.dy - r.center.dy).abs(), lessThan(8), reason: 'on the same line as the X');
    expect(close.left - r.right, inInclusiveRange(0, 16), reason: 'right beside the X');
    expect(find.text('Videos from any link, web, notes, calculator, clock'), findsNothing, reason: 'the big card is gone');
  });
}
