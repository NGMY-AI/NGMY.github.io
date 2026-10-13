import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_motion.dart';

void main() {
  test('AI slides share actors that morph from one slide into the next', () {
    final outline = ngmyParseSlidesAiOutline(
      '{"title":"NGMY","style":"royal","slides":[{"kind":"title","title":"Welcome"},{"kind":"bullets","title":"What","bullets":["a","b"]},{"kind":"closing","title":"Thanks"}]}',
      fallbackStyle: 'royal',
    )!;
    final deck = ngmyBuildSlidesAiDeck(outline, extras: {NgmySlidesAiExtra.animations, NgmySlidesAiExtra.videoMotion});
    final keys = ngmyMorphPairs(deck.slides[0], deck.slides[1]).values.map((e) => e.morphKey).toSet();
    expect(keys, containsAll(['title', 'pano', 'orb1', 'orb2', 'bar', 'sub']));
  });

  test('your logo is on every slide and pictures replace stock photos', () {
    final outline = ngmyParseSlidesAiOutline(
      '{"title":"X","style":"aurora","slides":[{"kind":"title","title":"Hi"},{"kind":"bullets","title":"A","bullets":["x"]},{"kind":"closing","title":"Bye"}]}',
      fallbackStyle: 'aurora',
    )!;
    final deck = ngmyBuildSlidesAiDeck(outline, logo: 'data:image/png;base64,AAAA', userPictures: ['data:image/jpeg;base64,BBBB']);
    for (final s in deck.slides) {
      expect(s.elements.any((e) => e.morphKey == 'logo'), isTrue);
    }
    expect(deck.slides[1].elements.any((e) => e.type == NgmySlideElementType.image && e.imageRef == 'data:image/jpeg;base64,BBBB'), isTrue);
    expect(ngmySlidesAiLogoOf(deck), 'data:image/png;base64,AAAA');
  });
  test('your pictures go where the AI placed them (picture 2 on slide 2)', () {
    final outline = ngmyParseSlidesAiOutline(
      '{"title":"X","style":"ocean","slides":[{"kind":"title","title":"Hi","picture":1},{"kind":"bullets","title":"Team","bullets":["a"],"picture":2},{"kind":"bullets","title":"Plan","bullets":["b"]}]}',
      fallbackStyle: 'ocean',
    )!;
    const p1 = 'data:image/jpeg;base64,ONE', p2 = 'data:image/jpeg;base64,TWO';
    final deck = ngmyBuildSlidesAiDeck(outline, userPictures: [p1, p2]);
    bool has(int i, String ref) => deck.slides[i].elements.any((e) => e.imageRef == ref);
    expect(has(0, p1), isTrue);
    expect(has(1, p2), isTrue);
    expect(deck.slides[2].elements.any((e) => e.imageRef == p1 || e.imageRef == p2), isFalse);
  });
}
