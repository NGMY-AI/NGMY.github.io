import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_business_card_models.dart';
import 'package:ngmy/ngmy_business_card_renderer.dart';

void main() {
  test('every template has a unique id and a known category', () {
    final ids = <String>{};
    final cats = kNgmyBusinessCardCategories.map((c) => c.$1).toSet();
    for (final t in kNgmyBusinessCardTemplates) {
      expect(ids.add(t.id), isTrue, reason: 'duplicate id ${t.id}');
      expect(cats.contains(t.category), isTrue, reason: '${t.id} has unknown category ${t.category}');
    }
  });

  // Draw every template at phone and desktop widths: no overflow or paint errors.
  for (final width in [300.0, 520.0]) {
    testWidgets('all templates render at ${width.toInt()}px', (tester) async {
      final failed = <String>[];
      for (final t in kNgmyBusinessCardTemplates) {
        final doc = NgmyBusinessCardDocument(templateId: t.id);
        await tester.pumpWidget(
          MaterialApp(
            home: Scaffold(body: Center(child: NgmyBusinessCardPreview(document: doc, width: width))),
          ),
        );
        await tester.pump();
        final e = tester.takeException();
        if (e != null) failed.add(t.id);
      }
      expect(failed, isEmpty, reason: 'templates that failed to render: $failed');
    });
  }
}
