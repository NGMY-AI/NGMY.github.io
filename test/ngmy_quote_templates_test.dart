import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_quote_templates.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_render.dart';

void main() {
  test('there are twenty designs with their own names and ids', () {
    expect(kNgmyQuoteTemplates.length, 20);
    expect(kNgmyQuoteTemplates.map((t) => t.id).toSet().length, 20);
    expect(kNgmyQuoteTemplates.map((t) => t.name).toSet().length, 20);
    expect(kNgmyQuoteTemplates.map((t) => t.group).toSet(), containsAll(['Robotic', 'Nature', 'Warm', 'Bold', 'Clean']));
  });

  test('every design builds a slide with the quote, the author and an NGMY watermark', () {
    for (final t in kNgmyQuoteTemplates) {
      final slide = ngmyBuildQuoteSlide(t, quote: 'Stay curious', author: 'Ayo');
      final texts = slide.elements.where((e) => e.type == NgmySlideElementType.text).map((e) => e.text).toList();
      expect(texts, contains('Stay curious'), reason: t.name);
      expect(texts, contains('— Ayo'), reason: t.name);
      expect(texts, contains('NGMY'), reason: t.name);
      expect(slide.elements.length, greaterThan(6), reason: '${t.name} has a design behind the words');
    }
  });

  test('an empty quote shows the design\'s own NGMY sample, and a long quote gets a smaller size', () {
    final t = kNgmyQuoteTemplates.first;
    final blank = ngmyBuildQuoteSlide(t, quote: '  ', author: '');
    expect(blank.elements.any((e) => e.text == t.sample), isTrue);
    expect(ngmyQuoteFontSize('x' * 300), lessThan(ngmyQuoteFontSize('Short')));
  });

  testWidgets('every design draws without errors at story size', (tester) async {
    tester.view.physicalSize = const Size(360, 640);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    for (final t in kNgmyQuoteTemplates) {
      await tester.pumpWidget(MaterialApp(
        home: SizedBox(
          width: 360,
          height: 640,
          child: NgmySlideAnimatedRender(slide: ngmyBuildQuoteSlide(t, quote: t.sample, author: t.author), animate: false),
        ),
      ));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: t.name);
    }
  });
}
