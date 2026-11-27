import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_craft_ai.dart';
import 'package:ngmy/ngmy_paper_craft_stamps.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_slides_export.dart';
import 'package:ngmy/ngmy_slides_toolkit.dart';
import 'package:ngmy/ngmy_slides_models.dart';

NgmySlideDeck _deck(String id, [int palette = 0]) => ngmyBuildPaperCraftDeck(kNgmyPaperCrafts.firstWhere((c) => c.id == id), kNgmyCraftPalettes[palette]);

/// Brightness 0 (black) to 1 (white).
double _light(int argb) => (0.299 * ((argb >> 16) & 0xFF) + 0.587 * ((argb >> 8) & 0xFF) + 0.114 * (argb & 0xFF)) / 255;

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('There are 8 to 12 NGMY stamp designs plus the plain box, each NGMY branded and printing dark', () {
    expect(kNgmyCraftStamps.first.id, 'plain');
    final designs = kNgmyCraftStamps.where((s) => s.id != 'plain').toList();
    expect(designs.length, inInclusiveRange(8, 12));
    expect(kNgmyCraftStamps.map((s) => s.id).toSet().length, kNgmyCraftStamps.length);
    for (final palette in kNgmyCraftPalettes) {
      final colors = [palette.ink, palette.main, palette.soft, palette.pale, palette.accent];
      for (final s in kNgmyCraftStamps) {
        final d = ngmyCraftStampDraw(s.id, 1, 1, 0.75, 0.88, colors);
        final words = d.notes.map((n) => n.$3).join(' ');
        if (s.id != 'plain') expect(words, contains('NGMY'), reason: s.id);
        // Bold words, and a good share of dark ink so it shows on a home printer.
        expect(d.notes.every((n) => n.$6), isTrue, reason: s.id);
        expect(d.fills.where((f) => _light(f[0].toInt()) < 0.45), isNotEmpty, reason: '${s.id} ${palette.name}');
        // Everything inside the stamp box.
        for (final f in d.fills) {
          if (f[1] == 1) {
            for (var i = 2; i + 2 < f.length; i += 3) {
              expect(f[i], inInclusiveRange(1 - 0.04, 1.75 + 0.04), reason: s.id);
              expect(f[i + 1], inInclusiveRange(1 - 0.04, 1.88 + 0.04), reason: s.id);
            }
          } else {
            for (var i = 2; i + 1 < f.length; i += 2) {
              expect(f[i], inInclusiveRange(1 - 1e-6, 1.75 + 1e-6), reason: s.id);
              expect(f[i + 1], inInclusiveRange(1 - 1e-6, 1.88 + 1e-6), reason: s.id);
            }
          }
        }
      }
    }
  });

  test('Envelopes and postcards have a stamp box; the chosen stamp saves, keeps its colours change, and prints', () async {
    for (final id in ['card_envelope', 'square_envelope', 'diamond_envelope', 'postcards']) {
      expect(ngmyDeckHasStampBox(_deck(id)), isTrue, reason: id);
    }
    expect(ngmyDeckHasStampBox(_deck('gift_box')), isFalse);
    final deck = _deck('diamond_envelope');
    expect(ngmyCraftStampOf(deck), 'plain');
    expect(ngmyApplyCraftStamp(deck, 'crown'), isTrue);
    expect(ngmyCraftStampOf(deck), 'crown');
    expect(ngmyApplyCraftStamp(deck, 'crown'), isFalse);
    expect(ngmyApplyCraftStamp(deck, 'nope'), isFalse);
    // Saved with the deck.
    final again = NgmySlideDeck.fromJson(jsonDecode(jsonEncode(deck.toJson())) as Map<String, dynamic>);
    expect(ngmyCraftStampOf(again), 'crown');
    // A new colour set keeps the stamp design, in the new colours.
    expect(ngmyRecolorPaperCraft(deck, kNgmyCraftPalettes[2]), isTrue);
    expect(ngmyCraftStampOf(deck), 'crown');
    expect(ngmyCraftStampColors(deck).first, kNgmyCraftPalettes[2].ink);
    // The PDF still builds with it.
    final pdf = await ngmySlidesExportPdfBytes(deck);
    expect(pdf.length, greaterThan(1000));
    expect(ngmySlidesPrintHtml(deck), contains('NGMY'));
  });

  test('The AI understands which stamp they mean', () {
    expect(ngmyFindCraftStamp('change the stamp to the crown one')?.id, 'crown');
    expect(ngmyFindCraftStamp('air mail')?.id, 'airmail');
    expect(ngmyFindCraftStamp('weka stempu ya moyo')?.id, 'heart');
    expect(ngmyFindCraftStamp('round postmark')?.id, 'postmark');
    expect(ngmyFindCraftStamp('banana'), isNull);
    final deck = _deck('card_envelope');
    final prompt = ngmyPaperCraftEditPrompt(deck: deck, request: 'change the stamp to the crown one');
    expect(prompt, contains('STAMP NOW: plain'));
    expect(prompt, contains('crown (Crown)'));
    final answer = ngmyParsePaperCraftAi('{"palette": "", "wm": {}, "stamp": "crown", "fields": {}, "reply": "Done"}')!;
    expect(answer.stamp, 'crown');
    expect(ngmyApplyPaperCraftEdit(deck, answer), isTrue);
    expect(ngmyCraftStampOf(deck), 'crown');
    // No stamp talk for designs without a stamp box.
    expect(ngmyPaperCraftEditPrompt(deck: _deck('gift_box'), request: 'hi'), isNot(contains('STAMP NOW')));
  });

  testWidgets('The stamp chooser shows every design and applies the one tapped', (tester) async {
    final deck = _deck('postcards');
    String? applied;
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: TextButton(
              onPressed: () => showNgmyCraftStampPanel(context, deck: () => deck, onApply: (id) {
                applied = id;
                ngmyApplyCraftStamp(deck, id);
              }),
              child: const Text('open'),
            ),
          ),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    expect(find.text('Stamp'), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_stamp_plain')), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_stamp_classic')), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('craft_stamp_classic')));
    await tester.pump();
    expect(applied, 'classic');
    expect(ngmyCraftStampOf(deck), 'classic');
  });
}
