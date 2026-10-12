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
    final deck = ngmyBuildSlidesAiDeck(ngmyParseSlidesAiOutline(_reply, fallbackStyle: 'colorful')!, extras: const {});
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
  test('3D icon names the AI writes loosely are matched to real icons', () {
    final o = ngmyParseSlidesAiOutline(
      '{"title":"x","slides":[{"kind":"title","title":"a","icon3d":"rocket"},{"kind":"bullets","title":"b","icon3d":"Lion"},{"kind":"bullets","title":"c","icon3d":"made up thing"}]}',
      fallbackStyle: 'colorful',
    )!;
    expect(o.slides[0].icon3d, 'Rocket');
    expect(o.slides[1].icon3d, 'Lion');
    expect(o.slides[2].icon3d, '');
    expect(ngmySlides3dIconUrl('Party popper'), endsWith('/Party%20popper/3D/party_popper_3d.png'));
  });

  test('prompt only asks for the extras that were picked', () {
    final p = ngmySlidesAiPrompt(description: 'x', slideCount: 5, styleId: 'auto', extras: {NgmySlidesAiExtra.emojis});
    expect(p, contains('"emoji"'));
    expect(p, isNot(contains('one name copied exactly')));
    expect(p, isNot(contains('real photo')));
  });

  test('animations off = nothing animates; art is placed when provided', () {
    final o = ngmyParseSlidesAiOutline(_reply, fallbackStyle: 'colorful')!;
    final still = ngmyBuildSlidesAiDeck(o, extras: const {});
    expect(still.slides.expand((s) => s.elements).every((e) => e.textTransition == NgmySlideTransition.none), isTrue);
    const px = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    final rich = ngmyBuildSlidesAiDeck(o, extras: {NgmySlidesAiExtra.animations, NgmySlidesAiExtra.icons3d}, assets: {0: (picture: null, icon3d: px), 1: (picture: px, icon3d: null)});
    expect(rich.slides[0].elements.where((e) => e.type == NgmySlideElementType.image).length, 1);
    expect(rich.slides[1].elements.where((e) => e.type == NgmySlideElementType.image).length, 1);
    expect(rich.slides.expand((s) => s.elements).any((e) => e.textTransition != NgmySlideTransition.none), isTrue);
  });
}
