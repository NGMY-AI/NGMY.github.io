import 'dart:math';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_stats.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_transfer.dart';

NgmySlideDeck _marriage({String state = 'Georgia'}) {
  return NgmySlideDeck(
    id: 'm1',
    name: 'Marriage',
    themeId: 'plain',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    autoAdvanceSeconds: 0,
    updatedAt: DateTime.utc(2026, 9, 13),
    slides: const [],
    deckKind: 'marriage_agreement',
    marriageState: state,
  );
}

void main() {
  test('Georgia marriage documents use a GA plus three-digit code', () {
    expect(NgmyCivicRegistryStats.postalCodeForState('Georgia'), 'GA');
    expect(NgmyCivicRegistryStats.postalCodeForState('ga'), 'GA');
    expect(ngmySlidesMarriageClaimPrefix('Florida'), 'FL');
    expect(
      ngmySlidesGenerateMarriageClaimCode('Georgia', random: Random(4)),
      matches(RegExp(r'^GA\d{3}$')),
    );
  });

  test('typed codes are normalized and only 5-character state codes are accepted', () {
    expect(ngmySlidesNormalizeMarriageClaimCode('ga 847'), 'GA847');
    expect(ngmySlidesNormalizeMarriageClaimCode('GA847'), 'GA847');
    expect(ngmySlidesNormalizeMarriageClaimCode('G847'), isNull);
    expect(ngmySlidesNormalizeMarriageClaimCode('SLIDES123'), isNull);
  });

  test('claim codes are only attached to marriage / locked documents', () {
    expect(ngmySlidesMarriageTransferState([_marriage()]), 'Georgia');
    expect(
      ngmySlidesMarriageTransferState([
        _marriage(),
        NgmySlideDeck(
          id: 'class',
          name: 'Class',
          themeId: 'plain',
          aspectRatio: NgmySlideAspectRatio.landscape169,
          autoAdvanceSeconds: 0,
          updatedAt: DateTime.utc(2026, 9, 13),
          slides: const [],
        ),
      ]),
      isNull,
    );
  });
}
