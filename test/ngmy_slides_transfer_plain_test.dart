import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_transfer.dart';

void main() {
  test('ordinary and AI slides arrive as normal slides: editable, no timer, even when an admin sent them', () {
    final deck = NgmySlideDeck(
      id: 'a',
      name: 'My AI slides',
      slides: [NgmySlidesTemplates.blankSlide()],
      aiOutlineJson: '{"x":1}',
    );
    final got = ngmySlidesDeckCopyForImport(deck, sharedByAdmin: true);
    expect(got.transferReceived, isFalse);
    expect(got.adminShareEditUntil, isNull);
    expect(got.adminShareEditOpen, isFalse);
    expect(got.name, 'My AI slides');
    // An old copy saved before this fix also loses the lock and the timer.
    final old = NgmySlideDeck.fromJson({
      ...deck.toJson(),
      'transferReceived': true,
      'adminShareEditUntil': DateTime.now().toUtc().add(const Duration(hours: 4)).toIso8601String(),
    });
    expect(old.transferReceived, isFalse);
    expect(old.adminShareEditOpen, isFalse);
  });

  test('locked legal documents keep their received-copy rules', () {
    final deck = NgmySlideDeck(id: 'm', name: 'Marriage', slides: [NgmySlidesTemplates.blankSlide()], deckKind: 'marriage_agreement');
    final got = ngmySlidesDeckCopyForImport(deck, sharedByAdmin: true);
    expect(got.transferReceived, isTrue);
    expect(got.adminShareEditOpen, isTrue);
    final plain = ngmySlidesDeckCopyForImport(deck);
    expect(plain.transferReceived, isTrue);
    expect(plain.adminShareEditOpen, isFalse);
  });
}
