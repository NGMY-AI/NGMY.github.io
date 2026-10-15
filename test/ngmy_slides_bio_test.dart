import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_models.dart';
import 'package:ngmy/ngmy_slides_ai_maker.dart';
import 'package:ngmy/ngmy_slides_bio_phone.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_render.dart';

void main() {
  final bio = NgmyBioDocument(
    id: 'b1',
    displayName: 'KB Pablo',
    tagline: 'Founder',
    links: [NgmyBioLink(id: 'l1', title: 'My website', url: 'https://ngmy.org')],
  );

  test('a "bio" slide puts the Bio page on a phone', () {
    final deck = ngmyBuildSlidesAiDeck(
      NgmySlidesAiOutline(title: 'Pitch', style: 'colorful', slides: [
        NgmySlidesAiOutlineSlide(kind: 'title', title: 'Hello'),
        NgmySlidesAiOutlineSlide(kind: 'bio', title: 'Connect with me', subtitle: 'Tap any link'),
        NgmySlidesAiOutlineSlide(kind: 'closing', title: 'Thanks'),
      ]),
      bioJson: ngmyBioToSlideText(bio),
    );
    final el = deck.slides[1].elements.firstWhere((e) => e.type == NgmySlideElementType.bio);
    expect(ngmyBioFromSlideText(el.text)?.links.first.url, 'https://ngmy.org');
    // Survives saving and loading.
    final back = NgmySlideElement.fromJson(el.toJson());
    expect(back.type, NgmySlideElementType.bio);
  });

  testWidgets('the phone frame shows the Bio and its links', (t) async {
    final el = NgmySlideElement(id: 'e', type: NgmySlideElementType.bio, x: 0, y: 0, w: 1, h: 1, text: ngmyBioToSlideText(bio));
    await t.pumpWidget(MaterialApp(
      home: Scaffold(body: SizedBox(width: 300, height: 600, child: NgmySlideElementView(element: el, scale: 1, showEmptyHint: false))),
    ));
    await t.pump(const Duration(milliseconds: 500));
    bool has(String s) => find.byWidgetPredicate((w) => w is Text && (w.data ?? w.textSpan?.toPlainText() ?? '').toLowerCase().contains(s)).evaluate().isNotEmpty || find.byWidgetPredicate((w) => w is RichText && w.text.toPlainText().toLowerCase().contains(s)).evaluate().isNotEmpty;
    expect(has('kb pablo'), isTrue);
    expect(has('my website'), isTrue);
    expect(t.takeException(), isNull);
  });
}
