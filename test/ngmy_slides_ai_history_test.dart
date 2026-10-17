import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_ai_history.dart';

void main() {
  test('asking to undo or bring something back is recognised', () {
    for (final t in [
      'undo that',
      'please undo',
      'bring back the old title',
      'can you bring it back',
      'restore what it was',
      'revert the last change',
      'change it back to what it was before',
    ]) {
      expect(ngmySlidesAiIsUndoRequest(t), isTrue, reason: t);
    }
  });

  test('a normal change request is not treated as an undo', () {
    for (final t in [
      'make the title bigger',
      'translate everything to Swahili',
      'add a slide about our team',
      'change the style to ocean',
    ]) {
      expect(ngmySlidesAiIsUndoRequest(t), isFalse, reason: t);
    }
  });

  test('the version before a change is kept, then dropped when brought back', () {
    ngmySlidesAiRemember(deckId: 'deck-1', outlineJson: '{"title":"A"}', extras: {'animations'}, request: 'make it bold');
    final latest = ngmySlidesAiLatest('deck-1');
    expect(latest, isNotNull);
    expect(latest!.outlineJson, '{"title":"A"}');
    expect(latest.extras, ['animations']);
    expect(latest.request, 'make it bold');
    ngmySlidesAiDropLatest('deck-1');
    expect(ngmySlidesAiLatest('deck-1'), isNull);
  });

  test('an empty deck id is never saved', () {
    ngmySlidesAiRemember(deckId: '', outlineJson: '{"title":"B"}', extras: {}, request: 'x');
    expect(ngmySlidesAiLatest(''), isNull);
  });
}
