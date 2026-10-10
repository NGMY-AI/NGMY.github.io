import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_models.dart';
import 'package:ngmy/ngmy_bio_renderer.dart';
import 'package:ngmy/ngmy_bio_templates.dart';

void main() {
  test('bio template ids are unique', () {
    final ids = <String>{};
    for (final t in kNgmyBioTemplates) {
      expect(ids.add(t.id), isTrue, reason: 'duplicate id ${t.id}');
    }
  });

  testWidgets('every bio template renders on a phone-size page', (tester) async {
    tester.view.physicalSize = const Size(400, 900);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);
    final failed = <String>[];
    for (final t in kNgmyBioTemplates) {
      final doc = NgmyBioDocument(
        id: 'test_${t.id}',
        displayName: 'KB Pablo QR',
        tagline: 'Founder · NGMY',
        templateId: t.id,
        links: [
          NgmyBioLink(id: 'a', title: 'Website', url: 'https://ngmy.org'),
          NgmyBioLink(id: 'b', title: 'Book a call', url: 'https://ngmy.org/call'),
          NgmyBioLink(id: 'c', title: 'Shop', url: 'https://ngmy.org/shop'),
        ],
      );
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: SingleChildScrollView(
              child: NgmyBioPreview(document: doc, lightweight: true, interactive: false),
            ),
          ),
        ),
      );
      await tester.pump(const Duration(milliseconds: 50));
      if (tester.takeException() != null) failed.add(t.id);
    }
    await tester.pumpWidget(const SizedBox());
    expect(failed, isEmpty, reason: 'bio templates that failed to render: $failed');
  });
}
