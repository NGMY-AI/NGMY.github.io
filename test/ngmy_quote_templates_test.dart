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
      final slide = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Lead with *courage* ~today~ ^now^', author: 'A', textFx: fx, sizeScale: 1.2);
      final q = slide.elements.firstWhere((e) => e.text.contains('courage'));
      expect(q.textFx, fx);
      expect(q.rich, isTrue);
      await tester.pumpWidget(MaterialApp(
        home: SizedBox(width: 360, height: 640, child: NgmySlideAnimatedRender(slide: slide, animate: false)),
      ));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: fx);
      for (final mark in ['*', '~', '^']) {
        expect(find.textContaining(mark, findRichText: true), findsNothing, reason: '$fx $mark');
      }
    }
    final copy = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'a *b* c', author: '', textFx: 'neon').elements.firstWhere((e) => e.rich).copy();
    expect([copy.textFx, copy.rich], ['neon', true]);
  });

  test('word sizes become marks, sharing one mark between neighbours of the same size', () {
    expect(ngmyQuoteMarkup('Lead with courage today', [0, 0, 1, -1]), 'Lead with *courage* ~today~');
    expect(ngmyQuoteMarkup('Be bold and kind', [1, 1, 0, 2]), '*Be bold* and ^kind^');
    expect(ngmyQuoteMarkup('plain words', []), 'plain words');
    expect(ngmyQuoteMarkup('stars *in* text', [0, 1, 0]), 'stars *in* text');
    expect(ngmyQuotePlain('*a* ~b~ ^c^'), 'a b c');
  });

  test('a background picture goes behind everything and the logo stays', () {
    final s = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Hi', author: 'A', logoData: tinyPng, bgImage: tinyPng, textColor: 0xFFFF0000, align: TextAlign.left, quoteY: 0.4, shapes: false, quoteMarks: false);
    expect(s.elements.first.fileName, kNgmyQuoteBackgroundFile);
    expect([s.elements.first.x, s.elements.first.y, s.elements.first.w, s.elements.first.h], [0, 0, 1, 1]);
    expect(s.elements.any((e) => e.fileName == kNgmyQuoteLogoFile), isTrue);
    final q = s.elements.firstWhere((e) => e.text == 'Hi');
    expect([q.color, q.align, q.y], [0xFFFF0000, TextAlign.left, 0.4]);
    expect(s.elements.length, 6, reason: 'picture, quote, author, NGMY, tagline and logo only');
    final clear = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Hi', author: 'A', transparent: true);
    expect(clear.background, 0x00000000);
  });

  testWidgets('a highlight colour sits behind the words with any word design, and survives saving', (tester) async {
    tester.view.physicalSize = const Size(360, 640);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    for (final fx in ['', 'neon', 'caps', 'marker']) {
      final slide = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Lead with *courage*', author: 'A', textFx: fx, highlight: 0xCC22D3EE);
      final q = slide.elements.firstWhere((e) => e.text.contains('courage'));
      expect(q.textBg, 0xCC22D3EE);
      final back = NgmySlideElement.fromJson(q.toJson());
      expect(back.textBg, 0xCC22D3EE);
      await tester.pumpWidget(MaterialApp(home: SizedBox(width: 360, height: 640, child: NgmySlideAnimatedRender(slide: slide, animate: false))));
      await tester.pump();
      final withBg = tester.widgetList<RichText>(find.byType(RichText)).where((r) {
        var found = false;
        r.text.visitChildren((s) {
          if (s is TextSpan && s.style?.backgroundColor == const Color(0xCC22D3EE)) found = true;
          return true;
        });
        return found;
      });
      expect(withBg, isNotEmpty, reason: 'highlight shows with design "$fx"');
    }
    final none = ngmyBuildQuoteSlide(kNgmyQuoteTemplates.first, quote: 'Hi', author: 'A');
    expect(none.elements.firstWhere((e) => e.text == 'Hi').textBg, 0);
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
