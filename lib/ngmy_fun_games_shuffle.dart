import 'dart:math';

/// Per-user shuffled decks for Confidence, Brain, and Fortune — no repeats until full cycle.
class NgmyFunGamesShuffle {
  NgmyFunGamesShuffle._();

  static List<int> buildDeck(int count, int seed) {
    final rng = Random(seed);
    final deck = List<int>.generate(count, (i) => i);
    for (var i = deck.length - 1; i > 0; i--) {
      final j = rng.nextInt(i + 1);
      final t = deck[i];
      deck[i] = deck[j];
      deck[j] = t;
    }
    return deck;
  }

  static int deckSeed(String userKey, String category, int generation) {
    var h = 17;
    for (final c in userKey.toLowerCase().codeUnits) {
      h = 37 * h + c;
    }
    for (final c in category.codeUnits) {
      h = 37 * h + c;
    }
    h = 37 * h + generation;
    return h;
  }

  static int contentIndex({
    required String userKey,
    required String category,
    required int count,
    required int generation,
    required int position,
  }) {
    if (count <= 0) return 0;
    final pos = position % count;
    final deck = buildDeck(count, deckSeed(userKey, category, generation));
    return deck[pos];
  }
}
