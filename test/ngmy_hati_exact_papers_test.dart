import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_hati_couple_ai.dart';
import 'package:ngmy/ngmy_hati_exact_fit.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_hati_photo_art.dart';
import 'package:ngmy/ngmy_marriage_agreement_templates.dart';
import 'package:ngmy/ngmy_marriage_paper_art.dart';
import 'package:ngmy/ngmy_marriage_markers.dart';

// The owner's own full-page designs, used exactly as drawn: the page keeps the design's own shape, the design's
// picture is the paper (with its own title on Hati ya Kuhowa, and the document's title written in for the others),
// and the AI couple picture is laid exactly where the couple is.
void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('exact papers keep the design shape and its picture, and write the other titles in', () async {
    await ngmyHatiPhotoArtLoad();
    for (final t in [...kNgmyHatiKuhowaExactTemplates, ...kNgmyHatiKuhowaPhotoTemplates]) {
      final kuhowa = ngmyBuildHatiKuhowaDeck(templateId: t.id, state: 'Arizona');
      // Every paper is a full A4 page, like the older papers (the owner prints them).
      final shape = t.id.startsWith('photo') ? 1 / 1.41421 : 1054 / 1492;
      expect(kuhowa.paperAspect, closeTo(shape, 0.004), reason: t.id);
      expect(kuhowa.aspectValue, closeTo(shape, 0.004));
      // Every word and field is on the page.
      for (final e in kuhowa.slides.first.elements) {
        if (e.fileName == '${kMarriageLocked}_watermark') continue;
        expect(e.y >= -0.001 && e.y + e.h <= 1.001, isTrue, reason: '${t.id} ${e.fileName} ${e.y} ${e.h}');
      }
      final bg = kuhowa.slides.first.elements.first;
      expect(bg.fileName, '${kMarriageLocked}_bg');
      final art = t.id.startsWith('photo') ? 'exact_${t.id.substring(6)}' : t.id;
      expect(bg.imageRef, ngmyHatiPhotoArtUrl(art), reason: 'Hati ya Kuhowa uses the design with its own title');
      expect(kuhowa.slides.first.elements.any((e) => e.fileName == '${kMarriageLocked}_title'), isFalse);

      final kuhoweya = ngmyBuildHatiKuhoweshaDeck(templateId: t.id, state: 'Arizona');
      expect(kuhoweya.slides.first.elements.first.imageRef, ngmyHatiPhotoArtUrl('${art}_notitle'));
      expect(kuhoweya.slides.first.elements.any((e) => e.fileName == '${kMarriageLocked}_title' && e.text == 'HATI YA KUHOWESHA'), isTrue);
      expect(ngmyHatiHasCouplePicture(kuhoweya), t.id != 'photo_curtain' && t.id != 'photo_sunset' && t.id != 'photo_roses', reason: '${t.id} couple');

    }
    expect(ngmyHatiCoupleArea('royal_maroon'), isNull, reason: 'only the owner designs have a couple picture');
  });

  test('the AI couple is laid into the paper exactly at the couple place', () async {
    await ngmyHatiPhotoArtLoad();
    final area = ngmyHatiCoupleArea('exact_kifalme')!;
    final paperUrl = ngmyHatiPhotoArtUrl('exact_kifalme')!;
    final red = img.Image(width: 300, height: 260)..clear(img.ColorRgb8(255, 0, 0));
    final out = ngmyHatiPutCoupleInPaper(paperUrl, img.encodePng(red), area);
    final page = img.decodeJpg(base64Decode(out.substring(out.indexOf(',') + 1)))!;
    expect(page.width, 1054);
    expect(page.height, 1492);
    final inside = page.getPixel((area.x * 1054 + area.w * 1054 / 2).round(), (area.y * 1492 + area.h * 1492 / 2).round());
    expect(inside.r, greaterThan(200));
    expect(inside.g, lessThan(60), reason: 'the new picture is in the couple place');
    final outside = page.getPixel(900, 1000);
    final before = img.decodeJpg(base64Decode(paperUrl.substring(paperUrl.indexOf(',') + 1)))!.getPixel(900, 1000);
    expect((outside.r - before.r).abs() < 20 && (outside.g - before.g).abs() < 20, isTrue, reason: 'the rest of the paper is untouched');
  });

  test('opening a document keeps the design picture, and puts it back on one that lost it', () async {
    await ngmyHatiPhotoArtLoad();
    for (final id in ['photo_curtain', 'photo_village', 'exact_kijiji']) {
      final deck = ngmyBuildHatiKuhowaDeck(templateId: id, state: 'Arizona');
      final bg = deck.slides.first.elements.first;
      final picture = bg.imageRef;
      expect(ngmyRefreshMarriageDeckPaperBackground(deck), isFalse, reason: '$id: opening must not swap the picture');
      expect(bg.imageRef, picture);
      // A document an earlier version broke: the plain stand-in paper instead of the picture.
      bg.imageRef = ngmyMarriagePaperDataUrl(ngmyHatiKuhowaTemplateById(id)!.paperStyle);
      expect(ngmyHatiRestorePicturePaper(deck), isTrue, reason: id);
      expect(bg.imageRef, picture, reason: '$id: the picture is back');
      expect(ngmyHatiRestorePicturePaper(deck), isFalse);
    }
  });

  test('a document made on the old, nearly square page becomes A4, with every field on the same spot of the design', () async {
    await ngmyHatiPhotoArtLoad();
    final deck = ngmyBuildHatiKuhowaDeck(templateId: 'photo_sunset', state: 'Arizona');
    final now = {for (final e in deck.slides.first.elements) e.fileName: (e.x, e.y, e.w, e.h)};
    // The same document as an earlier version saved it: the old page shape, the old paper, the fields where the old
    // page had them. Item 1 sat at its row of the old page, the date at its spot.
    deck.paperAspect = 1198 / 1312;
    final bg = deck.slides.first.elements.first..imageRef = 'data:image/jpeg;base64,b2xk';
    final item = deck.slides.first.elements.firstWhere((e) => (e.fileName).startsWith('${kMarriageFieldPrefix}mahari_1'));
    final date = deck.slides.first.elements.firstWhere((e) => (e.fileName).startsWith('${kMarriageFieldPrefix}tarehe'));
    final hPx = item.h * kNgmyHatiExactFit['exact_sunset']!.height;
    item.y = (722 - hPx / 2) / 1312;
    item.h = hPx / 1312;
    date.y = 270 / 1312;
    expect(ngmyHatiRestorePicturePaper(deck), isTrue);
    expect(deck.paperAspect, closeTo(1 / 1.41421, 0.004));
    expect(bg.imageRef, ngmyHatiPhotoArtUrl('exact_sunset'), reason: 'the A4 paper');
    final want = now[item.fileName]!;
    expect(item.y + item.h / 2, closeTo(want.$2 + want.$4 / 2, 0.004), reason: 'item 1 is on its row of the A4 page');
    expect(date.y, lessThan(0.2));
    expect(ngmyHatiRestorePicturePaper(deck), isFalse, reason: 'done once');
  });
}
