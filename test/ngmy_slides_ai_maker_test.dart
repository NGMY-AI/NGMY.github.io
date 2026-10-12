import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_models.dart';

const _reply = '''Here you go:
```json
{"title":"NGMY: Next Generation","style":"celebration","slides":[
 {"kind":"title","title":"Welcome to NGMY","subtitle":"Saturday launch","bullets":[],"notes":"Greet everyone."},
 {"kind":"bullets","title":"What NGMY does","bullets":["Civic Registry for every state","Studios to create","Advisors who help"],"notes":""},
 {"kind":"quote","title":"Make your voice count","subtitle":"NGMY","bullets":[]},
 {"kind":"closing","title":"Join us today","subtitle":"ngmy.org","bullets":[]}
]}
```''';

void main() {
  test('reads the AI reply even with code fences around it', () {
    final o = ngmyParseSlidesAiOutline(_reply, fallbackStyle: 'colorful');
    expect(o, isNotNull);
    expect(o!.title, 'NGMY: Next Generation');
    expect(o.style, 'celebration');
    expect(o.slides.map((s) => s.kind), ['title', 'bullets', 'quote', 'closing']);
    expect(o.slides[1].bullets.length, 3);
  });

  test('unknown style falls back, garbage gives null', () {
    expect(ngmyParseSlidesAiOutline('{"title":"x","style":"weird","slides":[{"kind":"title","title":"x"}]}', fallbackStyle: 'nature')!.style, 'nature');
    expect(ngmyParseSlidesAiOutline('sorry, no', fallbackStyle: 'nature'), isNull);
  });

  test('builds styled slides: gradients, real text, bullet list, transition', () {
    final deck = ngmyBuildSlidesAiDeck(ngmyParseSlidesAiOutline(_reply, fallbackStyle: 'colorful')!);
    expect(deck.name, 'NGMY: Next Generation');
    expect(deck.slides.length, 4);
    for (final s in deck.slides) {
      expect(s.backgroundEnd, isNotNull);
      expect(s.transition, ngmySlidesAiStyleById('celebration').transition);
    }
    final texts = deck.slides.expand((s) => s.elements).where((e) => e.type == NgmySlideElementType.text).map((e) => e.text).join(' | ');
    expect(texts, contains('Welcome to NGMY'));
    expect(texts, contains('Civic Registry for every state'));
    final bullets = deck.slides[1].elements.firstWhere((e) => e.bulletList);
    expect(bullets.text.split('\n').length, 3);
  });

  test('prompt asks for the exact slide count and the chosen look', () {
    final p = ngmySlidesAiPrompt(description: 'about NGMY', slideCount: 9, styleId: 'nature');
    expect(p, contains('Exactly 9 slides'));
    expect(p, contains('"nature"'));
  });
}
