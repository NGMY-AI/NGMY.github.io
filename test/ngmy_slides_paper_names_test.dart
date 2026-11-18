import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_hati_photo_art.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:shared_preferences/shared_preferences.dart';

// A Hati paper picture is 300 to 700 KB. Saved inside every document it made Slides slow to open after the app was
// reopened, so the phone keeps only the paper's short name and puts the picture back when it reads the document.
void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('papers are saved by name and come back as the full picture', () async {
    SharedPreferences.setMockInitialValues({});
    await ngmyHatiPhotoArtLoad();
    final decks = [for (final id in ['photo_sunset', 'exact_kijiji', 'royal_maroon']) ngmyBuildHatiKuhowaDeck(templateId: id, state: 'Arizona')];
    final papers = [for (final d in decks) d.slides.first.elements.first.imageRef];
    await NgmySlidesStorage.saveDecks('paper@test.com', decks);
    final raw = (await SharedPreferences.getInstance()).getString('ngmy_slides_decks_paper@test.com')!;
    expect(raw.length, lessThan(400000), reason: 'no whole paper pictures in what is saved');
    expect(raw, contains('ngmyart:exact_sunset'));
    expect(raw, contains('ngmyart:exact_kijiji'));

    final back = NgmySlidesStorage.parseDecksJson(raw);
    for (var i = 0; i < decks.length; i++) {
      final d = back.firstWhere((b) => b.id == decks[i].id);
      expect(d.slides.first.elements.first.imageRef, papers[i], reason: decks[i].themeId);
    }
  });

  test('a paper name read before the pictures is filled in afterwards', () {
    final deck = ngmyBuildHatiKuhowaDeck(templateId: 'photo_roses', state: 'Arizona');
    final bg = deck.slides.first.elements.first;
    final url = bg.imageRef;
    bg.imageRef = 'ngmyart:exact_roses';
    expect(NgmySlidesStorage.fillPaperNames([deck]), isTrue);
    expect(bg.imageRef, url);
    expect(NgmySlidesStorage.fillPaperNames([deck]), isFalse);
  });
}
