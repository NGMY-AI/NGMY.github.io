import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_models.dart';

NgmySlideDeck deckWith(String text, {double size = 80, double w = 0.8, double h = 0.1, double y = 0.5}) {
  return NgmySlideDeck(id: "d", name: "Deck", slides: [
    NgmySlide(id: "s1", elements: [
      NgmySlideElement(id: "t1", type: NgmySlideElementType.text, text: text, fontSize: size, x: 0.1, y: y, w: w, h: h),
    ]),
  ]);
}

void main() {
  test('requests are recognised as size or fit changes, and undo-like or edit requests are not', () {
    expect(ngmySlidesTextCommandOf('make the text smaller'), NgmyTextCommand.smaller);
    expect(ngmySlidesTextCommandOf('make it a little bit smaller'), NgmyTextCommand.smaller);
    expect(ngmySlidesTextCommandOf('make the title bigger'), NgmyTextCommand.bigger);
    expect(ngmySlidesTextCommandOf('reframe the text so it fits in the frame'), NgmyTextCommand.fit);
    expect(ngmySlidesTextCommandOf('the text is going under the slide'), NgmyTextCommand.fit);
    expect(ngmySlidesTextCommandOf('change the style to ocean'), isNull);
    expect(ngmySlidesTextCommandOf('translate everything to Swahili'), isNull);
  });

  test('every slide is only meant when the request says so', () {
    expect(ngmySlidesTextCommandIsAllSlides('make the text smaller on every slide'), isTrue);
    expect(ngmySlidesTextCommandIsAllSlides('make the text smaller on the whole presentation'), isTrue);
    expect(ngmySlidesTextCommandIsAllSlides('make this text smaller'), isFalse);
  });

  test('fit shrinks overflowing text, keeps every word, and keeps the frame on the slide', () {
    final long = List.filled(40, 'word').join(' ');
    final deck = deckWith(long, size: 80, h: 0.2, y: 0.9);
    final before = deck.slides.first.elements.first.text;
    expect(ngmySlidesApplyTextCommand(deck, 0, NgmyTextCommand.fit, allSlides: false), isTrue);
    final e = deck.slides.first.elements.first;
    expect(e.text, before);
    expect(e.fontSize, lessThan(80));
    expect(e.y + e.h, lessThanOrEqualTo(1.001));
  });

  test('smaller and bigger change only the text size', () {
    final deck = deckWith('Hello', size: 40);
    expect(ngmySlidesApplyTextCommand(deck, 0, NgmyTextCommand.smaller, allSlides: false), isTrue);
    expect(deck.slides.first.elements.first.fontSize, closeTo(34, 0.01));
    expect(ngmySlidesApplyTextCommand(deck, 0, NgmyTextCommand.bigger, allSlides: false), isTrue);
    expect(deck.slides.first.elements.first.text, 'Hello');
  });
}
