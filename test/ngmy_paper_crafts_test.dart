import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_slides_export.dart';
import 'package:ngmy/ngmy_slides_models.dart';

/// Every point of every line in a Fold & Cut page, in inches.
List<List<double>> _lines(NgmySlide s, String key) {
  final lines = s.elements.firstWhere(ngmyIsCraftLines);
  final spec = jsonDecode(lines.text) as Map<String, dynamic>;
  return [
    for (final l in spec[key] as List) [for (final v in l as List) (v as num).toDouble()],
  ];
}

void main() {
  test('Fold & Cut has at least 20 designs in every palette, each a true Letter page', () {
    expect(kNgmyPaperCrafts.length, greaterThanOrEqualTo(20));
    expect(kNgmyPaperCrafts.map((c) => c.id).toSet().length, kNgmyPaperCrafts.length);
    for (final palette in kNgmyCraftPalettes) {
      for (final craft in kNgmyPaperCrafts) {
        final deck = ngmyBuildPaperCraftDeck(craft, palette);
        expect(ngmyIsPaperCraftDeck(deck), isTrue);
        expect(deck.aspectValue, closeTo(8.5 / 11, 1e-9));
        expect(deck.slides, isNotEmpty, reason: craft.id);
        for (final slide in deck.slides) {
          expect(slide.elements.first.fileName, kNgmyCraftLinesFile, reason: craft.id);
          expect(slide.elements.where((e) => e.type == NgmySlideElementType.text), isNotEmpty, reason: craft.id);
          // Something to cut or fold on every page, and every line on the paper.
          expect(_lines(slide, 'c').length + _lines(slide, 'd').length, greaterThan(0), reason: craft.id);
          for (final key in ['c', 'd', 'g', 'm']) {
            for (final l in _lines(slide, key)) {
              for (var i = 0; i + 1 < l.length; i += 2) {
                expect(l[i], inInclusiveRange(0, 8.5), reason: '${craft.id} $key x');
                expect(l[i + 1], inInclusiveRange(0, 11), reason: '${craft.id} $key y');
              }
            }
          }
          // Words stay editable: no apostrophes needed, and plain text boxes.
          for (final e in slide.elements.where((e) => e.type == NgmySlideElementType.text)) {
            expect(e.text.trim(), isNotEmpty);
          }
        }
      }
    }
  });

  test('Window letter: address box sits in the #10 window and the folds are at thirds', () {
    final craft = kNgmyPaperCrafts.firstWhere((c) => c.id == 'window_letter');
    final slide = craft.build(kNgmyCraftPalettes.first).single;
    final addr = slide.elements.firstWhere((e) => e.text.startsWith('Recipient Name'));
    final left = addr.x * 8.5;
    final top = addr.y * 11;
    final right = (addr.x + addr.w) * 8.5;
    final bottom = (addr.y + addr.h) * 11;
    // A #10 window (4.5 x 1.125 in, 7/8 in from the left, 1/2 in from the bottom of a 9.5 x 4.125 in envelope)
    // always shows 7/8 to 4 3/8 in across and 2 1/8 to 3 1/8 in down on the folded letter.
    expect(left, greaterThanOrEqualTo(0.875 - 1e-6));
    expect(right, lessThanOrEqualTo(4.375 + 1e-6));
    expect(top, greaterThanOrEqualTo(2.125 - 1e-6));
    expect(bottom, lessThanOrEqualTo(3.125 + 1e-6));
    // Three panels of 3 2/3 in.
    final folds = _lines(slide, 'd').where((l) => (l[1] - l[3]).abs() < 1e-9).map((l) => l[1]).toSet();
    expect(folds.any((y) => (y - 11 / 3).abs() < 0.002), isTrue);
    expect(folds.any((y) => (y - 22 / 3).abs() < 0.002), isTrue);
  });

  test('Fold & Cut PDF pages are exactly Letter size and the print view has no zoom', () async {
    for (final craft in kNgmyPaperCrafts) {
      final deck = ngmyBuildPaperCraftDeck(craft, kNgmyCraftPalettes[2]);
      final bytes = await ngmySlidesExportPdfBytes(deck);
      final pdf = latin1.decode(bytes);
      expect(RegExp(r'/MediaBox\s*\[0 0 612(\.0)? 792(\.0)?\]').hasMatch(pdf), isTrue, reason: craft.id);
      final html = ngmyPaperCraftPrintHtml(deck);
      expect(html, contains('size: 8.5in 11in'));
      expect(html, isNot(contains('scaleX')));
      expect(html, contains('<svg'));
    }
  });
}
