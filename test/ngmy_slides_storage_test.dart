import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('presentations never disappear unless deleted', () async {
    SharedPreferences.setMockInitialValues({});
    const me = 'me@x.com';
    await NgmySlidesStorage.saveDecks(me, [NgmySlideDeck(id: 'a', name: 'Pitch'), NgmySlideDeck(id: 'b', name: 'Report')]);
    // A save that ran before the list loaded (empty / partial) must not wipe anything.
    await NgmySlidesStorage.saveDecks(me, []);
    await NgmySlidesStorage.saveDecks(me, [NgmySlideDeck(id: 'a', name: 'Pitch v2')]);
    var decks = await NgmySlidesStorage.loadDecks(me);
    expect(decks.map((d) => d.id).toSet(), {'a', 'b'});
    expect(decks.firstWhere((d) => d.id == 'a').name, 'Pitch v2');
    // A real delete does remove it.
    await NgmySlidesStorage.markDeleted(me, 'b');
    await NgmySlidesStorage.saveDecks(me, [NgmySlideDeck(id: 'a', name: 'Pitch v2')]);
    decks = await NgmySlidesStorage.loadDecks(me);
    expect(decks.map((d) => d.id).toSet(), {'a'});
  });
}
