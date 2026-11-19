import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_marriage_markers.dart';
import 'package:ngmy/ngmy_slides_export.dart';
import 'package:ngmy/ngmy_slides_models.dart';

// The royal Hati papers (the owner's maroon band, cream and gold, emerald and navy designs, plus plum, onyx and teal):
// they come first in the picker, fit inside the page, and have exactly the same fill-in fields and signature spots as
// the older papers, so filling in, signing and moving names between Kuhowa and Kuhoweya work the same.
Set<String> _keys(NgmySlide s) => {
      for (final e in s.elements)
        if (e.fileName.startsWith(kMarriageFieldPrefix)) e.fileName.split(':').first,
      for (final e in s.elements)
        if (e.fileName.startsWith(kMarriageSignPrefix)) e.fileName,
    };

void main() {
  test('the seven royal papers, the roses paper and the two exact papers come last in the picker; the removed picture papers still open by id', () {
    expect(kNgmyHatiKuhowaRoyalTemplates.length, 7);
    expect(kNgmyHatiKuhowaPhotoTemplates.length, 4);
    expect(kNgmyHatiKuhowaExactTemplates.length, 2);
    expect(kNgmyHatiKuhowaTemplates.skip(kNgmyHatiKuhowaTemplates.length - 10).map((t) => t.id),
        [...kNgmyHatiKuhowaRoyalTemplates, ...kNgmyHatiKuhowaPhotoRoses, ...kNgmyHatiKuhowaExactTemplates].map((t) => t.id));
    expect(kNgmyHatiKuhowaTemplates.first.id, 'kuhowa_elegant_navy');
    for (final t in [...kNgmyHatiKuhowaRoyalTemplates, ...kNgmyHatiKuhowaPhotoTemplates, ...kNgmyHatiKuhowaExactTemplates]) {
      expect(ngmyHatiKuhowaTemplateById(t.id)?.id, t.id);
      if (!kNgmyHatiKuhowaPhotoRetired.contains(t)) expect(kNgmyHatiMalipoAwamuTemplates.any((m) => m.id == t.id), isTrue);
    }
  });

  test('every royal page fits inside the paper and keeps the same fields and signature spots', () {
    final classic = {
      'kuhowa': _keys(ngmyBuildHatiKuhowaDeck(templateId: 'kuhowa_elegant_navy', state: 'Arizona').slides.first),
      'kuhoweya': _keys(ngmyBuildHatiKuhoweshaDeck(templateId: 'kuhowa_elegant_navy', state: 'Arizona').slides.first),
      'malipo': _keys(ngmyBuildHatiMalipoAwamuDeck(templateId: 'kuhowa_elegant_navy', state: 'Arizona').slides.first),
    };
    for (final t in [...kNgmyHatiKuhowaRoyalTemplates, ...kNgmyHatiKuhowaPhotoTemplates, ...kNgmyHatiKuhowaExactTemplates]) {
      final pages = {
        'kuhowa': ngmyBuildHatiKuhowaDeck(templateId: t.id, state: 'Arizona').slides.first,
        'kuhoweya': ngmyBuildHatiKuhoweshaDeck(templateId: t.id, state: 'Arizona').slides.first,
        'malipo': ngmyBuildHatiMalipoAwamuDeck(templateId: t.id, state: 'Arizona').slides.first,
      };
      pages.forEach((doc, page) {
        expect(_keys(page), classic[doc], reason: '${t.id} $doc has different fields');
        expect(page.elements.any((e) => e.fileName == '${kMarriageLocked}_watermark' && e.text == 'NGMY'), isTrue, reason: '${t.id} has the NGMY mark');
        for (final e in page.elements) {
          // The faint NGMY mark is tilted and tucked past the left edge on purpose, as on every other paper.
          if (e.fileName == '${kMarriageLocked}_watermark') continue;
          expect(e.x >= -0.001 && e.y >= -0.001 && e.x + e.w <= 1.001, isTrue, reason: '${t.id} $doc ${e.fileName} is off the page');
          // Everything sits inside the gold frame (the seal ribbon may reach a little lower).
          // The owner's own designs keep their footer where they drew it (right at the bottom on some).
          if (!e.fileName.contains('royal_seal') && e.fileName != '${kMarriageLocked}_bg' && !t.id.startsWith('photo') && !t.id.startsWith('exact')) {
            expect(e.y + e.h, lessThan(0.97), reason: '${t.id} $doc ${e.fileName} runs past the frame');
          }
        }
        if (t.id.startsWith('royal')) {
          expect(page.elements.where((e) => e.fileName.contains('nim_badge_')).length, 4, reason: 'a number coin for each item');
        }
        // The village, sunset and roses designs carry their motto in the footer instead of the state, as drawn.
        if (!const {'photo_village', 'photo_sunset', 'photo_roses'}.contains(t.id)) expect(page.elements.any((e) => e.fileName == '${kMarriageLocked}_state_text' && e.text.contains('Arizona')), isTrue);
      });
    }
  });

  test('dark royal papers ask for light signature ink; light papers do not', () {
    for (final t in [...kNgmyHatiKuhowaRoyalTemplates, ...kNgmyHatiKuhowaPhotoTemplates, ...kNgmyHatiKuhowaExactTemplates]) {
      final dark = ngmyHatiPaperIsDark(t.background);
      expect(dark, const {'royal_emerald', 'royal_navy', 'royal_plum', 'royal_onyx', 'photo_curtain'}.contains(t.id), reason: t.id);
    }
  });

  test('a royal paper downloads as a PDF', () async {
    for (final id in ['royal_maroon', 'royal_navy']) {
      final bytes = await ngmySlidesExportPdfBytes(ngmyBuildHatiKuhowaDeck(templateId: id, state: 'Arizona'));
      expect(bytes.length, greaterThan(10000), reason: id);
    }
  });

  testWidgets('the picker card of a royal paper draws its real page', (tester) async {
    for (final t in [...kNgmyHatiKuhowaRoyalTemplates, ...kNgmyHatiKuhowaPhotoTemplates, ...kNgmyHatiKuhowaExactTemplates]) {
      await tester.pumpWidget(MaterialApp(home: Center(child: SizedBox(width: 120, height: 200, child: ngmyHatiKuhowaTemplateLivePreview(t)))));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: t.id);
      expect(find.text('NIMETOWA'), findsOneWidget, reason: t.id);
    }
  });
}
