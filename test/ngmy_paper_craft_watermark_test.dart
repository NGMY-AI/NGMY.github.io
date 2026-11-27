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
    expect(prompt, contains('WATERMARK NOW: style crest'));
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

  test('Watermark controls: designs, one or many, place, size and visibility, saved with the deck', () {
    final craft = ngmyPaperCraftByNumber(13)!;
    final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    // The default is exactly the look from before: nothing extra saved, visibility 1.
    expect(jsonDecode(deck.slides.first.elements.first.text).containsKey('wmo'), isFalse);
    final before = deck.slides.first.elements.where(ngmyIsCraftWatermark).map((e) => (e.x, e.y, e.w, e.h, e.color, e.strokeColor)).toList();
    ngmyApplyCraftWatermarkSettings(deck, const NgmyCraftWmSettings());
    expect(deck.slides.first.elements.where(ngmyIsCraftWatermark).map((e) => (e.x, e.y, e.w, e.h, e.color, e.strokeColor)).toList(), before);

    for (final w in kNgmyCraftWatermarks) {
      expect(w.variants.length, greaterThanOrEqualTo(3), reason: w.id);
      for (final v in w.variants) {
        for (final s in [
          NgmyCraftWmSettings(style: w.id, variant: v.$1),
          NgmyCraftWmSettings(style: w.id, variant: v.$1, one: true, place: 0, size: kNgmyCraftWmMaxSize, visibility: kNgmyCraftWmMaxVis),
          NgmyCraftWmSettings(style: w.id, variant: v.$1, place: 8, size: kNgmyCraftWmMinSize, visibility: kNgmyCraftWmMinVis),
        ]) {
          final d = ngmyBuildPaperCraftDeck(ngmyPaperCraftByNumber(18)!, kNgmyCraftPalettes[0]);
          ngmyApplyCraftWatermarkSettings(d, s);
          expect(ngmyCraftWatermarkSettingsOf(d), s, reason: '${w.id} ${v.$1}');
          final els = d.slides.first.elements.where(ngmyIsCraftWatermark).toList();
          expect(els, isNotEmpty, reason: '${w.id} ${v.$1}');
          for (final e in els) {
            // Every piece stays on the paper, even at the biggest size.
            expect((e.x + e.w / 2) * 8.5, inInclusiveRange(0, 8.5), reason: '${w.id} ${v.$1}');
            expect((e.y + e.h / 2) * 11, inInclusiveRange(0, 11), reason: '${w.id} ${v.$1}');
          }
        }
      }
    }

    // Visibility changes how faint it is; the seal moves to the spot chosen; one only makes the pattern a single word.
    NgmySlideElement firstText(NgmySlideDeck d) => d.slides.first.elements.firstWhere((e) => ngmyIsCraftWatermark(e) && e.type == NgmySlideElementType.text);
    final faint = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    final normalAlpha = (firstText(faint).color >> 24) & 0xFF;
    ngmyApplyCraftWatermarkSettings(faint, const NgmyCraftWmSettings(visibility: 0.5));
    expect((firstText(faint).color >> 24) & 0xFF, (normalAlpha * 0.5).round());
    ngmyApplyCraftWatermarkSettings(faint, const NgmyCraftWmSettings(place: 0));
    expect(firstText(faint).x, lessThan(0.3));
    final many = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    ngmyApplyCraftWatermarkSettings(many, const NgmyCraftWmSettings(style: 'pattern'));
    final one = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
    ngmyApplyCraftWatermarkSettings(one, const NgmyCraftWmSettings(style: 'pattern', one: true));
    expect(many.slides.first.elements.where(ngmyIsCraftWatermark).length, greaterThan(5));
    expect(one.slides.first.elements.where(ngmyIsCraftWatermark).length, 1);
    // Size is clamped.
    expect(const NgmyCraftWmSettings().copyWith(size: 9).size, kNgmyCraftWmMaxSize);
    expect(const NgmyCraftWmSettings().copyWith(visibility: 0).visibility, kNgmyCraftWmMinVis);
  });

  test('The AI chat sets watermark size, visibility, place and design; colours keep them', () {
    final deck = ngmyBuildPaperCraftDeck(ngmyPaperCraftByNumber(14)!, kNgmyCraftPalettes.first);
    final prompt = ngmyPaperCraftEditPrompt(deck: deck, request: 'make the watermark bigger');
    expect(prompt, contains('style seal'));
    expect(prompt, contains('visibility 1.00'));
    final a = ngmyParsePaperCraftAi('{"wm": {"variant": "double", "size": 1.3, "visibility": 0.7, "place": "bottom left"}, "fields": {}, "reply": "ok"}')!;
    expect(ngmyApplyPaperCraftEdit(deck, a), isTrue);
    final s = ngmyCraftWatermarkSettingsOf(deck);
    expect(s.variantId, 'double');
    expect(s.size, 1.3);
    expect(s.visibility, 0.7);
    expect(s.placeOrDefault, 6);
    expect(ngmyRecolorPaperCraft(deck, kNgmyCraftPalettes[3]), isTrue);
    expect(ngmyCraftWatermarkSettingsOf(deck), s);
    final reset = ngmyParsePaperCraftAi('{"wm": {"reset": true}}')!;
    expect(ngmyApplyPaperCraftEdit(deck, reset), isTrue);
    expect(ngmyCraftWatermarkSettingsOf(deck).visibility, 1);
    expect(ngmyCraftWatermarkSettingsOf(deck).size, 1);
    expect(ngmyApplyPaperCraftEdit(deck, ngmyParsePaperCraftAi('{"wm": {}}')!), isFalse);
  });
}
