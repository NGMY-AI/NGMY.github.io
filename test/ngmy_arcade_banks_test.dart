import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_arcade_banks.dart';

void main() {
  test('300 riddles and 300 facts, and a deck uses every question once before repeating', () {
    expect(kNgmyEmojiRiddles.length, 300);
    expect(kNgmyTrueFalseFacts.length, 300);
    final rng = math.Random(7);
    final seen = <int>{};
    for (var i = 0; i < 300; i++) {
      expect(seen.add(NgmyQuestionDeck.next('test_riddles', 300, rng)), isTrue, reason: 'question $i repeated early');
    }
    // The next round starts again, in a different order.
    final first = [for (var i = 0; i < 5; i++) NgmyQuestionDeck.next('test_riddles', 300, rng)];
    expect(first.toSet().length, 5);
  });
}
