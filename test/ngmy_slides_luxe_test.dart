import 'package:flutter/material.dart';
import 'package:ngmy/ngmy_slides_render.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_luxe_fx.dart';

void main() {
  test('every Luxury FX deck is royal and unique', () async {
    NgmySlidesAiOutline outline() => NgmySlidesAiOutline(title: 'Kingdom', style: 'colorful', slides: [
          NgmySlidesAiOutlineSlide(kind: 'title', title: 'Welcome', subtitle: 'A royal start'),
          NgmySlidesAiOutlineSlide(kind: 'bullets', title: 'Plan', bullets: ['One', 'Two', 'Three']),
          NgmySlidesAiOutlineSlide(kind: 'closing', title: 'Thank you'),
        ]);
    final looks = <String>{};
    for (var k = 0; k < 6; k++) {
      final deck = ngmyBuildSlidesAiDeck(outline(), extras: {NgmySlidesAiExtra.luxe});
      final fx = deck.slides.expand((s) => s.elements).map((e) => e.loopFx).where(ngmyIsLuxeFx).toList();
      expect(fx.length, greaterThan(8));
      expect(fx.every((f) => f.contains('@')), isTrue); // coloured in the deck's metal
      looks.add('${deck.slides.first.background}|${fx.map(ngmyLuxeFxName).toSet().toList()..sort()}');
      await Future<void>.delayed(const Duration(milliseconds: 3));
    }
    expect(looks.length, greaterThan(1));
  });

  testWidgets('Luxury FX slides render every animation without errors', (t) async {
    final deck = ngmyBuildSlidesAiDeck(
      NgmySlidesAiOutline(title: 'Kingdom', style: 'colorful', slides: [
        NgmySlidesAiOutlineSlide(kind: 'title', title: 'Welcome'),
        NgmySlidesAiOutlineSlide(kind: 'bullets', title: 'Plan', bullets: ['One', 'Two']),
      ]),
      extras: {NgmySlidesAiExtra.luxe},
    );
    for (final s in deck.slides) {
      await t.pumpWidget(MaterialApp(home: SizedBox(width: 960, height: 540, child: NgmySlideAnimatedRender(slide: s))));
      for (var k = 0; k < 6; k++) {
        await t.pump(const Duration(milliseconds: 700));
      }
      expect(t.takeException(), isNull);
    }
    await t.pumpWidget(const SizedBox());
  });
}
