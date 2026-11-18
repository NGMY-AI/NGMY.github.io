import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_hati_couple_ai.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_hati_photo_art.dart';
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
      final shape = t.id.startsWith('photo') ? 1198 / 1312 : 1054 / 1492;
      expect(kuhowa.paperAspect, closeTo(shape, 0.001), reason: t.id);
      expect(kuhowa.aspectValue, closeTo(shape, 0.001));
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
}
