import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_models.dart';

NgmySlideDeck _deck({
  required String id,
  String name = 'Doc',
  String kind = 'marriage_agreement',
  DateTime? updatedAt,
}) {
  return NgmySlideDeck(
    id: id,
    name: name,
    themeId: 'plain',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    autoAdvanceSeconds: 5,
    updatedAt: updatedAt ?? DateTime.utc(2026, 9, 13),
    slides: const [],
    deckKind: kind,
    marriageState: 'Georgia',
  );
}

void main() {
  test('one broken deck in storage does not drop the rest', () {
    final good = _deck(id: 'keep', name: 'Marriage');
    final raw = jsonEncode([good.toJson(), {'id': 'bad', 'slides': 'nope'}]);
    final loaded = NgmySlidesStorage.parseDecksJson(raw);
    expect(loaded.map((d) => d.id), ['keep']);
    expect(loaded.single.deckKind, 'marriage_agreement');
  });

  test('merge keeps newer local marriage documents', () {
    final stored = _deck(id: 'm1', name: 'Old', updatedAt: DateTime.utc(2026, 9, 1));
    final local = _deck(id: 'm1', name: 'New', updatedAt: DateTime.utc(2026, 9, 13));
    final extra = _deck(id: 'm2', name: 'Just created', updatedAt: DateTime.utc(2026, 9, 13, 12));
    final merged = NgmySlidesStorage.mergeDecks([stored], [local, extra]);
    expect(merged.map((d) => d.id), ['m2', 'm1']);
    expect(merged.firstWhere((d) => d.id == 'm1').name, 'New');
  });

  test('round-trip keeps marriage documents in the saved library', () {
    final deck = _deck(id: 'ga1', name: 'Hati ya Kuhowesha');
    final loaded = NgmySlidesStorage.parseDecksJson(jsonEncode([deck.toJson()]));
    expect(loaded, hasLength(1));
    expect(loaded.single.isLockedTemplateDoc, isTrue);
    expect(loaded.single.marriageState, 'Georgia');
    expect(loaded.single.name, 'Hati ya Kuhowesha');
  });
}
