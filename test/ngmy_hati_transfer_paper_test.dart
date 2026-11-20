import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_hati_couple_ai.dart';
import 'package:ngmy/ngmy_hati_document_transfer.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_hati_photo_art.dart';
import 'package:ngmy/ngmy_marriage_markers.dart';
import 'package:ngmy/ngmy_slides_models.dart';

String _bg(NgmySlideDeck d) => d.slides.first.elements.firstWhere((e) => e.fileName == '${kMarriageLocked}_bg').imageRef!;

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('a partner document is made on the same paper as the one transferred', () async {
    await ngmyHatiPhotoArtLoad();
    for (final t in [...kNgmyHatiKuhowaTemplates, ...kNgmyHatiKuhowaPhotoTemplates]) {
      final src = ngmyBuildHatiKuhowaDeck(templateId: t.id, state: 'Arizona');
      final dest = ngmyHatiBuildPartnerDeck(src);
      expect(ngmyHatiPaperTemplateIdFromDeck(dest), t.id, reason: t.id);
    }
  });

  test('faces painted with the AI go along; the paper\'s own people stay as they are', () async {
    await ngmyHatiPhotoArtLoad();
    final src = ngmyBuildHatiKuhowaDeck(templateId: 'exact_kijiji', state: 'Arizona');
    final dest = ngmyHatiBuildPartnerDeck(src);
    // Nothing painted: nothing changes.
    expect(ngmyHatiCarryPeople(_bg(src), _bg(dest), 'exact_kijiji'), _bg(dest));

    // Paint the couple's place bright red on the source, as if the AI had made new faces.
    final area = ngmyHatiCoupleArea('exact_kijiji')!;
    final page = img.decodeImage(base64Decode(_bg(src).split(',').last))!;
    final x0 = (area.x * page.width).round(), y0 = (area.y * page.height).round();
    final w = (area.w * page.width).round(), h = (area.h * page.height).round();
    img.fillRect(page, x1: x0, y1: y0, x2: x0 + w - 1, y2: y0 + h - 1, color: img.ColorRgb8(255, 0, 0));
    final painted = 'data:image/jpeg;base64,${base64Encode(img.encodeJpg(page, quality: 92))}';

    final carried = ngmyHatiCarryPeople(painted, _bg(dest), 'exact_kijiji');
    expect(carried, isNot(_bg(dest)));
    final out = img.decodeImage(base64Decode(carried.split(',').last))!;
    final mid = out.getPixel(((area.x + area.w / 2) * out.width).round(), ((area.y + area.h / 2) * out.height).round());
    expect(mid.r > 200 && mid.g < 60, isTrue, reason: 'the painted couple is on the partner document');
  });
}
