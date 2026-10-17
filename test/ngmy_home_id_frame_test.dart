import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_id_card.dart';
import 'package:ngmy/ngmy_home_glass_cards.dart';

void main() {
  // Phone-width home column: 390pt screen with 16pt side padding each side.
  // The civic ID must sit below the date tab (top inset) and fill the frame width.
  testWidgets('civic ID fills its frame width and clears the date tab on a phone', (tester) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    const inset = 30.0;
    final width = 390 - 32.0;
    final height = width / 1.586 + inset + 15;
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: SizedBox(
            width: width,
            height: height,
            child: NgmyFrostedCard(
              dateLabel: 'Today',
              isFront: true,
              fillBleed: true,
              accent: const [Color(0xFF0B1220), Color(0xFF1E3A5F)],
              child: NgmyHomeCardCanvas(
                child: Padding(
                  padding: const EdgeInsets.only(top: inset),
                  child: FittedBox(
                    fit: BoxFit.contain,
                    child: const SizedBox(
                      width: 360,
                      height: 360 / 1.586,
                      child: NgmyCivicRegistryIdCard(
                        record: {'name': 'Ngumoya Lubwela', 'state': 'Georgia', 'city': 'Clarkston', 'registryId': 'GA5938808'},
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ));
    await tester.pump();
    expect(tester.takeException(), isNull);
    final frame = tester.getRect(find.byType(NgmyFrostedCard));
    final id = tester.getRect(find.byType(NgmyCivicRegistryIdCard));
    print("GAPS L ${id.left - frame.left} R ${frame.right - id.right} T ${id.top - frame.top} B ${frame.bottom - id.bottom} frame ${frame} id ${id}");
    expect(id.left - frame.left, lessThan(1.0));
    expect(frame.right - id.right, lessThan(1.0));
    expect(id.top - frame.top, greaterThanOrEqualTo(inset - 1));
    expect(frame.bottom - id.bottom, lessThan(1.0));
  });
}
