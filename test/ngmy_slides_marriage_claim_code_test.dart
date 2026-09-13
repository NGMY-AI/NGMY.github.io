import 'dart:math';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_stats.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_transfer.dart';

NgmySlideDeck _marriage({String id = 'm1', String state = 'Georgia', String? code}) {
  return NgmySlideDeck(
    id: id,
    name: 'Marriage',
    themeId: 'plain',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    autoAdvanceSeconds: 0,
    updatedAt: DateTime.utc(2026, 9, 13),
    slides: const [],
    deckKind: 'marriage_agreement',
    marriageState: state,
    transferClaimCode: code,
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

  test('a document keeps the same code; a new document gets a different unused code', () {
    final first = _marriage();
    final code = ngmySlidesAssignMarriageClaimCode(first, random: Random(1));
    expect(code, matches(RegExp(r'^GA\d{3}$')));
    expect(ngmySlidesAssignMarriageClaimCode(first, random: Random(99)), code);

    final second = _marriage(id: 'm2');
    final other = ngmySlidesAssignMarriageClaimCode(
      second,
      existing: [first],
      random: Random(1),
    );
    expect(other, isNot(code));
    expect(other, matches(RegExp(r'^GA\d{3}$')));
  });

  test('a deleted document frees its code for a later document', () {
    final gone = _marriage(id: 'old', code: 'GA100');
    final next = _marriage(id: 'new');
    final remaining = <NgmySlideDeck>[];
    expect(ngmySlidesTakenMarriageClaimCodes([gone]), {'GA100'});
    expect(ngmySlidesTakenMarriageClaimCodes(remaining), isEmpty);
    final reused = ngmySlidesAssignMarriageClaimCode(
      next,
      existing: remaining,
      random: Random(2),
    );
    expect(reused, matches(RegExp(r'^GA\d{3}$')));
  });

  test('imported copies are received documents without the sender code', () {
    final source = _marriage(code: 'GA847');
    final copy = ngmySlidesDeckCopyForImport(source);
    expect(copy.transferReceived, isTrue);
    expect(copy.transferClaimCode, isNull);
    expect(copy.id, isNot(source.id));
  });
}
