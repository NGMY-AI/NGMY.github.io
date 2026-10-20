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

  const tinyPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

  test('the NGMY logo is round with a ring by default, marked so it cannot be deleted, and follows the options', () {
    final t = kNgmyQuoteTemplates.first;
    final slide = ngmyBuildQuoteSlide(t, quote: 'Hi', author: 'A', logoData: tinyPng);
    final logo = slide.elements.singleWhere((e) => e.fileName == kNgmyQuoteLogoFile);
    expect(logo.type, NgmySlideElementType.image);
    expect(logo.frame, 'circle');
    expect(logo.ring, 'gold');
    final moved = ngmyBuildQuoteSlide(t, quote: 'Hi', author: 'A', logoData: tinyPng, logoX: 0.1, logoY: 0.2, logoSize: 0.3, logoFrame: 'hexagon', logoRing: 'neon');
    final m = moved.elements.singleWhere((e) => e.fileName == kNgmyQuoteLogoFile);
    expect([m.x, m.y, m.w], [0.1, 0.2, 0.3]);
    expect([m.frame, m.ring], ['hexagon', 'neon']);
  });

  test('elements keep the same ids each time a quote is rebuilt, so the logo is not decoded again', () {
    final t = kNgmyQuoteTemplates[3];
    final a = ngmyBuildQuoteSlide(t, quote: 'One', author: 'A', logoData: tinyPng, idSeed: 'seed1');
    final b = ngmyBuildQuoteSlide(t, quote: 'Two', author: 'A', logoData: tinyPng, idSeed: 'seed1');
    expect(a.elements.map((e) => e.id).toList(), b.elements.map((e) => e.id).toList());
    expect(a.elements.map((e) => e.id).toSet().length, a.elements.length);
  });

  testWidgets('every word design draws, and starred words are bigger without showing the stars', (tester) async {
    tester.view.physicalSize = const Size(360, 640);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    for (final fx in ['', 'caps', 'elegant', 'shadow', 'neon', 'outline', 'marker', 'stamp']) {
      final slide = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Lead with *courage* today', author: 'A', textFx: fx, sizeScale: 1.2);
      final q = slide.elements.firstWhere((e) => e.text.contains('courage'));
      expect(q.textFx, fx);
      expect(q.rich, isTrue);
      await tester.pumpWidget(MaterialApp(
        home: SizedBox(width: 360, height: 640, child: NgmySlideAnimatedRender(slide: slide, animate: false)),
      ));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: fx);
      expect(find.textContaining('*', findRichText: true), findsNothing, reason: fx);
    }
    final copy = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'a *b* c', author: '', textFx: 'neon').elements.firstWhere((e) => e.rich).copy();
    expect([copy.textFx, copy.rich], ['neon', true]);
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
