import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_craft_ai.dart';
import 'package:ngmy/ngmy_paper_craft_watermark.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_slides_export.dart';
import 'package:ngmy/ngmy_slides_models.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('Every design carries the NGMY Seal watermark, under the words, on its front panel', () {
    expect(kNgmyCraftWatermarks.length, greaterThanOrEqualTo(8));
    for (final craft in kNgmyPaperCrafts) {
      final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes.first);
      expect(ngmyCraftWatermarkOf(deck), 'seal', reason: craft.id);
      final first = deck.slides.first.elements;
      final wm = first.where(ngmyIsCraftWatermark).toList();
      expect(wm, isNotEmpty, reason: craft.id);
      // Right after the lines layer, before every word people write.
      final lastWm = first.lastIndexWhere(ngmyIsCraftWatermark);
      final firstText = first.indexWhere((e) => e.type == NgmySlideElementType.text && !ngmyIsCraftWatermark(e));
      expect(lastWm, lessThan(firstText), reason: craft.id);
      expect(first.indexWhere(ngmyIsCraftLines), 0);
      // Faint: nothing fully solid.
      for (final e in wm) {
        final c = e.type == NgmySlideElementType.text ? e.color : (e.fillColor | e.strokeColor);
        expect((c >> 24) & 0xFF, lessThan(0xC0), reason: craft.id);
      }
    }
  });

  test('Every style fits on every design, on the paper, and never touches the boxes the AI fills', () async {
    await ngmyPreloadCraftLogo();
    for (final craft in kNgmyPaperCrafts) {
      final fields = ngmyPaperCraftFields(craft).length;
      for (final w in kNgmyCraftWatermarks) {
        final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[4]);
        ngmyApplyCraftWatermark(deck, w.id);
        expect(ngmyCraftWatermarkOf(deck), w.id);
        for (final s in deck.slides) {
          final wm = s.elements.where(ngmyIsCraftWatermark).toList();
          expect(wm, isNotEmpty, reason: '${craft.id} ${w.id}');
          for (final e in wm) {
            final cx = (e.x + e.w / 2) * 8.5;
            final cy = (e.y + e.h / 2) * 11;
            expect(cx, inInclusiveRange(0, 8.5), reason: '${craft.id} ${w.id}');
            expect(cy, inInclusiveRange(0, 11), reason: '${craft.id} ${w.id}');
          }
        }
        // Changing the watermark again replaces it (never stacks).
        final count = deck.slides.first.elements.where(ngmyIsCraftWatermark).length;
        ngmyApplyCraftWatermark(deck, w.id);
        expect(deck.slides.first.elements.where(ngmyIsCraftWatermark).length, count);
        final edit = ngmyPaperCraftEditPrompt(deck: deck, request: 'x');
        expect(RegExp(r'^\s+\d+\.\d+ \[', multiLine: true).allMatches(edit).length, fields, reason: '${craft.id} ${w.id}');
      }
    }
    // The real NGMY logo picture is used for the logo style.
    final deck = ngmyBuildPaperCraftDeck(kNgmyPaperCrafts.first, kNgmyCraftPalettes.first);
    ngmyApplyCraftWatermark(deck, 'logo');
    final logo = deck.slides.first.elements.where(ngmyIsCraftWatermark).single;
    expect(logo.type, NgmySlideElementType.image);
    expect(logo.imageRef, startsWith('data:image/png;base64,'));
  });

  test('Colours, the AI chat and printing keep the chosen watermark', () async {
    final craft = ngmyPaperCraftByNumber(14)!;
    final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes.first);
    ngmyApplyCraftWatermark(deck, 'crest');
    expect(ngmyRecolorPaperCraft(deck, kNgmyCraftPalettes[2]), isTrue);
    expect(ngmyCraftWatermarkOf(deck), 'crest');
    final crestText = deck.slides.first.elements.firstWhere((e) => ngmyIsCraftWatermark(e) && e.type == NgmySlideElementType.text);
    expect(crestText.color & 0xFFFFFF, kNgmyCraftPalettes[2].main & 0xFFFFFF);
    final prompt = ngmyPaperCraftEditPrompt(deck: deck, request: 'use the seal watermark');
    expect(prompt, contains('WATERMARK NOW: crest'));
    final answer = ngmyParsePaperCraftAi('{"watermark": "seal", "fields": {}, "reply": "Done"}')!;
    expect(answer.watermark, 'seal');
    expect(ngmyApplyPaperCraftEdit(deck, answer), isTrue);
    expect(ngmyCraftWatermarkOf(deck), 'seal');
    expect(ngmyParsePaperCraftAi('{"watermark": "sparkles"}')!.watermark, isNull);
    final html = ngmyPaperCraftPrintHtml(deck);
    expect(html, contains('NGMY'));
    final pdf = latin1.decode(await ngmySlidesExportPdfBytes(deck));
    expect(pdf, contains('/MediaBox'));
    expect(jsonDecode(deck.slides.first.elements.first.text)['wm'], 'seal');
  });
}
