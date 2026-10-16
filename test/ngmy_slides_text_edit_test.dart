import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_models.dart';

String outline(String title, List<String> bullets, {String style = 'colorful'}) => jsonEncode({
      'title': 'Deck',
      'style': style,
      'slides': [
        {'kind': 'title', 'title': title, 'subtitle': 'Welcome', 'bullets': [], 'notes': '', 'emoji': '🎉'},
        {'kind': 'bullets', 'title': 'Why us', 'subtitle': '', 'bullets': bullets, 'notes': 'Say hi', 'emoji': '💡'},
      ],
    });

void main() {
  test('a translation swaps only the words and keeps every design detail', () {
    final deck = ngmyBuildSlidesAiDeck(ngmyParseSlidesAiOutline(outline('Our Shop', ['Fresh food', 'Good prices']), fallbackStyle: 'colorful')!);
    deck
      ..aiOutlineJson = outline('Our Shop', ['Fresh food', 'Good prices'])
      ..aiSlideIds = deck.slides.map((s) => s.id).toList();
    final before = deck.slides.map((s) => '${s.background}|${s.elements.map((e) => '${e.type}${e.x}${e.y}${e.w}${e.h}').join()}').toList();
    final sw = outline('Duka Letu', ['Chakula kipya', 'Bei nzuri']);
    expect(ngmySlidesApplyTextOnlyEdit(deck, sw, apply: false), isTrue);
    expect(ngmySlidesApplyTextOnlyEdit(deck, sw), isTrue);
    final after = deck.slides.map((s) => '${s.background}|${s.elements.map((e) => '${e.type}${e.x}${e.y}${e.w}${e.h}').join()}').toList();
    expect(after, before);
    final allText = deck.slides.expand((s) => s.elements).map((e) => e.text).join(' ');
    expect(allText, contains('Duka Letu'));
    expect(allText, contains('Chakula kipya'));
    expect(allText, isNot(contains('Fresh food')));
  });

  test('a new style or an extra slide is not a text-only change', () {
    final deck = NgmySlideDeck(id: 'd', name: 'Deck')
      ..aiOutlineJson = outline('A', ['x', 'y'])
      ..aiSlideIds = ['1', '2'];
    expect(ngmySlidesApplyTextOnlyEdit(deck, outline('A', ['x', 'y'], style: 'nature'), apply: false), isFalse);
    expect(ngmySlidesApplyTextOnlyEdit(deck, outline('A', ['x', 'y', 'z']), apply: false), isFalse);
  });
}
