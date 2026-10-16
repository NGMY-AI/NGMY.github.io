import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_id_card.dart';

void main() {
  // The home ID card is shown inside boxes of any shape (full-screen wide, or narrow phone).
  // The whole card must fit inside the box, with no overflow errors and nothing cropped.
  for (final size in const [Size(1500, 180), Size(390, 420), Size(900, 600)]) {
    testWidgets('ID card fits a ${size.width.toInt()}x${size.height.toInt()} box', (tester) async {
      tester.view.physicalSize = size;
      tester.view.devicePixelRatio = 1.0;
      addTearDown(tester.view.reset);
      const designW = 360.0;
      const designH = designW / 1.586;
      await tester.pumpWidget(MaterialApp(
        home: Scaffold(
          body: SizedBox.expand(
            child: ColoredBox(
              color: const Color(0xFF0B1220),
              child: FittedBox(
                fit: BoxFit.contain,
                child: SizedBox(
                  width: designW,
                  height: designH,
                  child: NgmyCivicRegistryIdCard(
                    record: const {
                      'name': 'Ngumoya Lubwela',
                      'state': 'Georgia',
                      'city': 'Clarkston',
                      'registryId': 'GA5938808',
                    },
                  ),
                ),
              ),
            ),
          ),
        ),
      ));
      await tester.pump();
      expect(tester.takeException(), isNull);
      final card = tester.getSize(find.byType(FittedBox).first);
      expect(card.width, lessThanOrEqualTo(size.width + 0.5));
      expect(card.height, lessThanOrEqualTo(size.height + 0.5));
    });
  }
}
