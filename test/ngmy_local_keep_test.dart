import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_storage.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_local_keep.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('a list kept on the phone reads back', () async {
    SharedPreferences.setMockInitialValues({});
    await ngmyKeepWrite('k', 'hello');
    expect(await ngmyKeepRead('k'), 'hello');
    expect(await ngmyKeepRead('missing'), '');
    expect(await loadNgmyBios(userEmail: 'a@b.c'), isEmpty);
  });

  test('Slides: the quick light copy leaves out big photos, the real documents keep them', () async {
    SharedPreferences.setMockInitialValues({});
    final r = math.Random(3);
    final deck = ngmyBuildHatiKuhowaDeck(templateId: 'exact_kijiji', state: 'Arizona');
    final bg = deck.slides.first.elements.firstWhere((e) => e.fileName.endsWith('_bg'));
    final photo = 'data:image/jpeg;base64,${base64Encode(Uint8List.fromList(List.generate(300000, (_) => r.nextInt(256))))}';
    bg.imageRef = photo;
    await NgmySlidesStorage.saveDecks('light@x.com', [deck]);

    final prefs = await SharedPreferences.getInstance();
    final quick = prefs.getString('ngmy_slides_quick_light@x.com');
    expect(quick, isNotNull);
    expect(quick!.contains(photo.substring(30, 200)), isFalse, reason: 'no big photo in the light copy');
    final lightDecks = NgmySlidesStorage.parseDecksJson(quick);
    expect(lightDecks.single.id, deck.id);
    expect(lightDecks.single.slides.first.elements.firstWhere((e) => e.fileName.endsWith('_bg')).imageRef, isNull);

    // The real documents still have the photo.
    final full = await NgmySlidesStorage.loadDecks('light@x.com');
    expect(full.single.slides.first.elements.firstWhere((e) => e.fileName.endsWith('_bg')).imageRef, photo);
  });
}
