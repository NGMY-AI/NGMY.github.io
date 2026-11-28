import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui' show Rect;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_paper_craft_stamps.dart';
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

typedef _Pt = (double, double);

bool _in(List<_Pt> poly, _Pt p) {
  var c = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    final a = poly[i], b = poly[j];
    if ((a.$2 > p.$2) != (b.$2 > p.$2) && p.$1 < (b.$1 - a.$1) * (p.$2 - a.$2) / (b.$2 - a.$2) + a.$1) c = !c;
  }
  return c;
}

/// Distance from [p] to the edges of [poly], leaving out edges that lie on a fold ([skip] says which).
double _edgeDist(List<_Pt> poly, _Pt p, {bool Function(_Pt a, _Pt b)? skip}) {
  var best = double.infinity;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    final a = poly[j], b = poly[i];
    if (skip != null && skip(a, b)) continue;
    final dx = b.$1 - a.$1, dy = b.$2 - a.$2;
    final l2 = dx * dx + dy * dy;
    final t = l2 == 0 ? 0.0 : (((p.$1 - a.$1) * dx + (p.$2 - a.$2) * dy) / l2).clamp(0.0, 1.0);
    best = math.min(best, math.sqrt(math.pow(p.$1 - a.$1 - t * dx, 2) + math.pow(p.$2 - a.$2 - t * dy, 2)));
  }
  return best;
}

/// Folds one envelope net on paper (each flap turned over its fold line onto the back of the front) and measures it.
({int gapPoints, double bottomOnSideMm, double topOverOpeningMm, String worstAt, bool onPage}) _foldEnvelope(Map<String, dynamic> e) {
  final b = [for (final v in e['b'] as List) (v as num).toDouble()];
  final x0 = b[0], y0 = b[1], x1 = b[0] + b[2], y1 = b[1] + b[3];
  List<_Pt> pts(String k) {
    final v = [for (final n in e[k] as List) (n as num).toDouble()];
    return [for (var i = 0; i + 1 < v.length; i += 2) (v[i], v[i + 1])];
  }

  final flat = [pts('t'), pts('r'), pts('u'), pts('l')];
  // On the paper: straight sides may reach the paper edge (the edge is then the cut).
  final onPage = flat.every((f) => f.every((q) => q.$1 >= -1e-6 && q.$1 <= 8.5 + 1e-6 && q.$2 >= -1e-6 && q.$2 <= 11 + 1e-6));
  final top = [for (final q in flat[0]) (q.$1, 2 * y0 - q.$2)];
  final right = [for (final q in flat[1]) (2 * x1 - q.$1, q.$2)];
  final bottom = [for (final q in flat[2]) (q.$1, 2 * y1 - q.$2)];
  final left = [for (final q in flat[3]) (2 * x0 - q.$1, q.$2)];
  bool onLine(_Pt a, _Pt c, {double? y, double? x}) =>
      (y != null && (a.$2 - y).abs() < 1e-3 && (c.$2 - y).abs() < 1e-3) || (x != null && (a.$1 - x).abs() < 1e-3 && (c.$1 - x).abs() < 1e-3);
  var gaps = 0;
  var bottomRight = 0.0, bottomLeft = 0.0;
  var topMargin = double.infinity;
  var worstAt = '';
  const step = 0.02;
  for (var x = x0 + step / 2; x < x1; x += step) {
    for (var y = y0 + step / 2; y < y1; y += step) {
      final p = (x, y);
      final inT = _in(top, p), inR = _in(right, p), inB = _in(bottom, p), inL = _in(left, p);
      if (!inT && !inR && !inB && !inL) gaps++;
      // How wide the glued strip is: the biggest circle inside both the bottom flap and a side flap.
      if (inB && inR) bottomRight = math.max(bottomRight, math.min(_edgeDist(bottom, p), _edgeDist(right, p)));
      if (inB && inL) bottomLeft = math.max(bottomLeft, math.min(_edgeDist(bottom, p), _edgeDist(left, p)));
      // The opening (not closed by the side and bottom flaps): the top flap must reach 15 mm past every part of it.
      if (!inR && !inB && !inL) {
        final m = inT ? _edgeDist(top, p, skip: (a, c) => onLine(a, c, y: y0)) : 0.0;
        if (m < topMargin) {
          topMargin = m;
          worstAt = '${(x - x0).toStringAsFixed(2)},${(y - y0).toStringAsFixed(2)} in from the top left';
        }
      }
    }
  }
  return (
    gapPoints: gaps,
    bottomOnSideMm: 2 * math.min(bottomRight, bottomLeft) * 25.4,
    topOverOpeningMm: (topMargin.isFinite ? topMargin : 1) * 25.4,
    worstAt: worstAt,
    onPage: onPage,
  );
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
        final st = spec['st'] as Map<String, dynamic>;
        expect(st['id'], 'plain', reason: id);
        expect(st['b'] as List, isNotEmpty, reason: id);
        expect(st['c'], [palette.ink, palette.main, palette.soft, palette.pale, palette.accent], reason: id);
        final box = [for (final v in (st['b'] as List).first as List) (v as num).toDouble()];
        final d = ngmyCraftStampDraw('plain', box[0], box[1], box[2], box[3], [for (final v in st['c'] as List) v as int]);
        final label = d.notes.where((n) => n.$3 == 'STAMP').single;
        expect(label.$4, palette.ink, reason: '$id stamp label uses the darkest colour');
        expect(label.$6, isTrue, reason: '$id stamp label is bold');
        expect(d.fills.any((f) => f[0] == palette.ink), isTrue, reason: '$id dark stamp frame');
      }
    }
  });

  test('Every envelope folds shut: no gap shows, flaps overlap by 15 mm or more, all on the printable page', () {
    for (final craft in kNgmyPaperCrafts) {
      for (final s in craft.build(kNgmyCraftPalettes.first)) {
        final spec = jsonDecode(s.elements.firstWhere(ngmyIsCraftLines).text) as Map<String, dynamic>;
        for (final e in (spec['e'] as List? ?? const [])) {
          final r = _foldEnvelope(e as Map<String, dynamic>);
          final why = '${craft.id}: $r';
          expect(r.gapPoints, 0, reason: '$why - some of the inside shows');
          expect(r.bottomOnSideMm, greaterThanOrEqualTo(15), reason: '$why - bottom flap over side flaps');
          expect(r.topOverOpeningMm, greaterThanOrEqualTo(15), reason: '$why - top flap over the opening');
          expect(r.onPage, isTrue, reason: '$why - off the paper');
        }
      }
    }
    // Every envelope design is checked.
    for (final id in ['card_envelope', 'square_envelope', 'diamond_envelope', 'seed_envelopes', 'gift_card_envelopes', 'letter_envelope']) {
      final s = kNgmyPaperCrafts.firstWhere((c) => c.id == id).build(kNgmyCraftPalettes.first).first;
      final spec = jsonDecode(s.elements.firstWhere(ngmyIsCraftLines).text) as Map<String, dynamic>;
      expect(spec['e'] as List?, isNotEmpty, reason: id);
    }
  });

  test('Straight outer sides near the paper edge reach the paper edge, with their cut line just inside it', () {
    for (final craft in kNgmyPaperCrafts) {
      final slides = craft.build(kNgmyCraftPalettes.first);
      for (var s = 0; s < slides.length; s++) {
        final why = '${craft.number} ${craft.id} page ${s + 1}';
        for (final l in _lines(slides[s], 'c')) {
          for (var i = 0; i + 3 < l.length; i += 2) {
            final x1 = l[i], y1 = l[i + 1], x2 = l[i + 2], y2 = l[i + 3];
            if ((x2 - x1).abs() < 1e-6 && (y2 - y1).abs() > 0.05) {
              // An up and down cut near the paper edge is only the guide line of a side that reaches the paper edge.
              final d = math.min(x1, 8.5 - x1);
              if (d <= 1.0) expect(d, closeTo(kNgmyCraftEdgeGuide, 1e-6), reason: '$why: cut at x = $x1 runs beside the paper edge');
            } else if ((y2 - y1).abs() < 1e-6 && (x2 - x1).abs() > 0.05) {
              final d = math.min(y1, 11 - y1);
              if (d <= 1.0) expect(d, closeTo(kNgmyCraftEdgeGuide, 1e-6), reason: '$why: cut at y = $y1 runs beside the paper edge');
            }
          }
        }
        // The words stay clear of the strip a home printer cannot print (turned words are checked by their middle).
        for (final e in slides[s].elements.where((e) => e.type == NgmySlideElementType.text)) {
          final r = Rect.fromLTWH(e.x * 8.5, e.y * 11, e.w * 8.5, e.h * 11);
          if (e.rotation == 0 || (e.rotation.abs() - math.pi).abs() < 1e-6) {
            expect(r.left >= 0.2 && r.top >= 0.2 && r.right <= 8.3 && r.bottom <= 10.8, isTrue, reason: '$why: "${e.text}" at $r');
          } else {
            expect(r.center.dx >= 0.2 && r.center.dy >= 0.2 && r.center.dx <= 8.3 && r.center.dy <= 10.8, isTrue, reason: '$why: "${e.text}"');
          }
        }
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
      // Every page is Letter, nothing else, and viewers are asked to print it at actual size (no fit to page).
      expect(RegExp(r'/MediaBox').allMatches(pdf).length, deck.slides.length, reason: craft.id);
      expect(RegExp(r'/PrintScaling\s*/None').hasMatch(pdf), isTrue, reason: craft.id);
      // The drawing covers the whole page, edge to edge, with no margin.
      final lines = deck.slides.first.elements.firstWhere(ngmyIsCraftLines);
      expect([lines.x, lines.y, lines.w, lines.h], [0, 0, 1, 1], reason: craft.id);
      final html = ngmyPaperCraftPrintHtml(deck);
      expect(html, contains('size: 8.5in 11in; margin: 0;'));
      expect(html, isNot(contains('scaleX')));
      expect(html, contains('<svg'));
    }
  });
}
