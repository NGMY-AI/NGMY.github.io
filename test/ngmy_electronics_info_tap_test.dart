import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_board.dart';
import 'package:ngmy/ngmy_electronics_lab.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

// The Electronics Lab: one tap on a part just selects it (a switch still flips); the info card opens only on a quick
// double tap, and it is a small card with the long words behind "About".

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
    NgmyTone.enabled = false;
  });

  testWidgets('one tap: no card; a quick double tap: the small card; About shows the long words', (t) async {
    await t.binding.setSurfaceSize(const Size(430, 900));
    final board = ElectronicsBoard();
    final part = board.add('battery', 0.5, 0.5);
    await t.pumpWidget(MaterialApp(home: Scaffold(body: BoardEditor(board: board, readOnlyPalette: true))));
    await t.pump(const Duration(milliseconds: 100));
    final area = t.getRect(find.byType(CustomPaint).last);
    final at = Offset(area.left + area.width * part.x, area.top + area.height * part.y);

    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const Key('electronics-part-card')), findsNothing, reason: 'one tap does not open the card');

    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 120));
    await t.tapAt(at);
    await t.pump(const Duration(milliseconds: 200));
    expect(find.byKey(const Key('electronics-part-card')), findsOneWidget, reason: 'a quick double tap opens it');
    expect(t.getSize(find.byKey(const Key('electronics-part-card'))).height, lessThan(240), reason: 'a small card');
    expect(find.textContaining('How it is made'), findsNothing, reason: 'the long words wait behind About');

    await t.tap(find.byKey(const Key('electronics-part-about')));
    await t.pump(const Duration(milliseconds: 200));
    expect(find.textContaining('How it is made'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
