import 'dart:convert';
import 'dart:math' as math;

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

/// How wide a glue area is, in mm: the biggest circle that fits inside it (so a thin sliver scores low even if long).
double _glueWidthMm(List<double> g) {
  final xs = [for (var i = 0; i + 1 < g.length; i += 2) g[i]];
  final ys = [for (var i = 1; i < g.length; i += 2) g[i]];
  final n = xs.length;
  bool inside(double x, double y) {
    var c = false;
    for (var i = 0, j = n - 1; i < n; j = i++) {
      if ((ys[i] > y) != (ys[j] > y) && x < (xs[j] - xs[i]) * (y - ys[i]) / (ys[j] - ys[i]) + xs[i]) c = !c;
    }
    return c;
  }

  double edge(double x, double y) {
    var best = double.infinity;
    for (var i = 0, j = n - 1; i < n; j = i++) {
      final dx = xs[i] - xs[j], dy = ys[i] - ys[j];
      final l2 = dx * dx + dy * dy;
      final t = l2 == 0 ? 0.0 : (((x - xs[j]) * dx + (y - ys[j]) * dy) / l2).clamp(0.0, 1.0);
      best = math.min(best, math.sqrt(math.pow(x - xs[j] - t * dx, 2) + math.pow(y - ys[j] - t * dy, 2)));
    }
    return best;
  }

  var r = 0.0;
  for (var x = xs.reduce(math.min); x <= xs.reduce(math.max); x += 0.01) {
    for (var y = ys.reduce(math.min); y <= ys.reduce(math.max); y += 0.01) {
      if (inside(x, y)) r = math.max(r, edge(x, y));
    }
  }
  return 2 * r * 25.4;
}

void main() {
  test('Every glue tab and envelope glue area is wide enough to glue (at least 12 mm, envelopes at least 14 mm)', () {
    // Envelope glue areas are worked out from the folds: the part of each side flap that the bottom flap covers.
    const envelopes = {'card_envelope', 'square_envelope', 'diamond_envelope', 'seed_envelopes', 'gift_card_envelopes'};
    const glued = {
      ...envelopes,
      'gift_box', 'pillow_box', 'pyramid_box', 'prism_box', 'favor_box', 'paper_bag', 'pocket_folder', 'cd_sleeve', 'photo_sleeve',
    };
    for (final craft in kNgmyPaperCrafts) {
      final patches = [for (final s in craft.build(kNgmyCraftPalettes.first)) ..._lines(s, 'g')];
      if (glued.contains(craft.id)) expect(patches, isNotEmpty, reason: craft.id);
      final least = envelopes.contains(craft.id) ? 14.0 : 12.0;
      for (final g in patches) {
        expect(_glueWidthMm(g), greaterThanOrEqualTo(least), reason: '${craft.id} glue area too thin');
      }
    }
  });

  test('Every glue area says glue, and every stamp box is dark and labelled', () {
    for (final craft in kNgmyPaperCrafts) {
      for (final s in craft.build(kNgmyCraftPalettes.first)) {
        final spec = jsonDecode(s.elements.firstWhere(ngmyIsCraftLines).text) as Map<String, dynamic>;
        final notes = [for (final n in spec['n'] as List) n as List];
        expect(notes.where((n) => n[2] == 'glue').length, (spec['g'] as List).length, reason: craft.id);
      }
    }
    for (final id in ['card_envelope', 'square_envelope', 'diamond_envelope', 'postcards']) {
      final craft = kNgmyPaperCrafts.firstWhere((c) => c.id == id);
      for (final palette in kNgmyCraftPalettes) {
        final slides = craft.build(palette);
        final s = id == 'postcards' ? slides.last : slides.first;
        final spec = jsonDecode(s.elements.firstWhere(ngmyIsCraftLines).text) as Map<String, dynamic>;
        final stamp = [for (final n in spec['n'] as List) n as List].where((n) => n[2] == 'STAMP').toList();
        expect(stamp, isNotEmpty, reason: id);
        for (final n in stamp) {
          expect(n[3], palette.ink, reason: '$id stamp label uses the darkest colour');
          expect(n.length > 5 && n[5] == 1, isTrue, reason: '$id stamp label is bold');
        }
        expect((spec['f'] as List).any((f) => (f as List)[0] == palette.ink), isTrue, reason: '$id dark stamp frame');
      }
    }
  });

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
