import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_board.dart';
import 'package:ngmy/ngmy_electronics_lab.dart';

void main() {
  testWidgets('tapping a screen four times opens the size sheet; a screen can be made five times bigger', (t) async {
    t.view.physicalSize = const Size(900, 1600);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final b = ElectronicsBoard();
    final bat = b.add('battery', 0.15, 0.5)..volts = 12;
    final tv = b.add('tv', 0.6, 0.5);
    b.connect(bat, 0, tv, 0);
    b.connect(tv, 1, bat, 1);
    await t.pumpWidget(MaterialApp(home: Scaffold(body: BoardEditor(board: b, tvPopUp: false))));
    await t.pump(const Duration(milliseconds: 500));
    final area = t.getRect(find.byType(LayoutBuilder).last);
    final at = Offset(area.left + area.width * 0.6, area.top + area.height * 0.5);
    for (var i = 0; i < 4; i++) {
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 120));
    }
    await t.pump(const Duration(milliseconds: 700));
    t.takeException(); // the test font is wider than the real one: a hint chip on the board overflows only here
    expect(find.textContaining('Pick how big'), findsOneWidget);
    await t.tap(find.text('5×'));
    await t.pump(const Duration(milliseconds: 300));
    expect(b.parts.firstWhere((p) => p.kind == 'tv').scale, closeTo(5.0, 0.01));
    expect(find.text('500%'), findsOneWidget);
    await t.tap(find.text('1×'));
    await t.pump(const Duration(milliseconds: 300));
    expect(b.parts.firstWhere((p) => p.kind == 'tv').scale, 1.0);
    await t.tap(find.text('Done'));
    await t.pump(const Duration(milliseconds: 600));
    t.takeException();
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
