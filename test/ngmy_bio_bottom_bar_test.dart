import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_models.dart';
import 'package:ngmy/ngmy_bio_studio.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  // The narrowest phones are where "Preview" used to wrap a letter at a time.
  for (final width in [320.0, 360.0, 414.0]) {
    testWidgets('bio bottom bar keeps every label on one line at ${width.toInt()}px', (tester) async {
      SharedPreferences.setMockInitialValues({});
      tester.view.physicalSize = Size(width, 720);
      tester.view.devicePixelRatio = 1.0;
      addTearDown(tester.view.reset);

      await tester.pumpWidget(
        MaterialApp(
          home: NgmyBioStudioEditor(
            userEmail: 'creator@example.com',
            document: NgmyBioDocument(id: 'bio_1', displayName: 'Ana'),
            onBack: () {},
            onSaved: () {},
          ),
        ),
      );
      await tester.pump();

      for (final label in ['Save', 'Preview', 'Publish']) {
        final finder = find.text(label);
        expect(finder, findsOneWidget, reason: '$label should be on the bar');
        expect(tester.widget<Text>(finder).maxLines, 1, reason: '$label must not wrap');

        // A wrapped label would be at least two line-heights tall.
        expect(
          tester.getSize(finder).height,
          lessThan(24),
          reason: '$label rendered on more than one line',
        );
      }

      // None of them may be shrunk to fit — same type size across the bar.
      final heights = ['Save', 'Preview', 'Publish'].map((l) => tester.getSize(find.text(l)).height).toList();
      expect((heights[0] - heights[1]).abs(), lessThan(0.5), reason: 'Preview was scaled down: $heights');
      expect((heights[0] - heights[2]).abs(), lessThan(0.5), reason: 'Publish was scaled down: $heights');

      // All three sit on one row, so their text lines up.
      final tops = ['Save', 'Preview', 'Publish'].map((l) => tester.getTopLeft(find.text(l)).dy).toList();
      expect((tops[0] - tops[1]).abs(), lessThan(1.5), reason: 'tops: $tops');
      expect((tops[1] - tops[2]).abs(), lessThan(1.5), reason: 'tops: $tops');
    });
  }
}
