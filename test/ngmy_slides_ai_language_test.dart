import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_models.dart';

void main() {
  test('create and edit prompts ask for the requested language', () {
    final p = ngmySlidesAiPrompt(description: 'Une présentation en français sur NGMY', slideCount: 5, styleId: 'auto');
    expect(p, contains('LANGUAGE'));
    final e = ngmySlidesAiEditPrompt(outlineJson: '{}', request: 'translate to Swahili', currentSlide: 2);
    expect(e, contains('translate EVERY slide'));
    expect(e, contains('slide 2'));
  });

  test('outline survives a round trip and the deck remembers it', () {
    final o = ngmyParseSlidesAiOutline(
      '{"title":"Karibu","style":"nature","slides":[{"kind":"title","title":"Karibu NGMY","subtitle":"Jumamosi"},{"kind":"bullets","title":"Nini","bullets":["Moja","Mbili"]},{"kind":"closing","title":"Asante"}]}',
      fallbackStyle: 'colorful',
    )!;
    final again = ngmyParseSlidesAiOutline(o.toJsonString(), fallbackStyle: 'colorful')!;
    expect(again.slides.map((s) => s.title), ['Karibu NGMY', 'Nini', 'Asante']);
    expect(again.style, 'nature');

    final deck = ngmyBuildSlidesAiDeck(o)
      ..aiOutlineJson = o.toJsonString()
      ..aiSlideIds = []
      ..cinematic = true;
    final back = NgmySlideDeck.fromJson(deck.toJson());
    expect(back.aiMade, isTrue);
    expect(back.cinematic, isTrue);
    expect(back.copy().aiOutlineJson, deck.aiOutlineJson);
  });
}
