import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_paper_craft_ai.dart';
import 'package:ngmy/ngmy_paper_craft_dialog.dart';
import 'package:ngmy/ngmy_paper_craft_frames.dart';
import 'package:ngmy/ngmy_paper_craft_stamps.dart';
import 'package:ngmy/ngmy_paper_craft_watermark.dart';
import 'package:ngmy/ngmy_paper_crafts.dart';
import 'package:ngmy/ngmy_slides_export.dart';
import 'package:ngmy/ngmy_slides_models.dart';
import 'package:ngmy/ngmy_slides_toolkit.dart';

NgmySlideDeck _deck(String id, [int palette = 0]) => ngmyBuildPaperCraftDeck(kNgmyPaperCrafts.firstWhere((c) => c.id == id), kNgmyCraftPalettes[palette]);

/// Brightness 0 (black) to 1 (white).
double _light(int argb) => (0.299 * ((argb >> 16) & 0xFF) + 0.587 * ((argb >> 8) & 0xFF) + 0.114 * (argb & 0xFF)) / 255;

Map<String, dynamic> _spec(NgmySlide s) => jsonDecode(s.elements.firstWhere(ngmyIsCraftLines).text) as Map<String, dynamic>;

List<List<double>> _list(Object? raw) => [
      for (final b in (raw as List? ?? const [])) [for (final v in b as List) (v as num).toDouble()],
    ];

Rect _rect(List<double> b) => Rect.fromLTWH(b[0], b[1], b[2], b[3]);
Rect _box(NgmySlideElement e) => Rect.fromLTWH(e.x * kNgmyCraftPageW, e.y * kNgmyCraftPageH, e.w * kNgmyCraftPageW, e.h * kNgmyCraftPageH);
double _pt(NgmySlideElement e) => e.fontSize * 612 / 960;
bool _within(Rect inner, Rect outer, [double slack = 1e-3]) => outer.inflate(slack).contains(inner.topLeft) && outer.inflate(slack).contains(inner.bottomRight);

const _withFrames = ['card_envelope', 'square_envelope', 'diamond_envelope', 'letter_envelope', 'postcards'];

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('There are 11 address frame designs plus no frame (full rows of three), each drawn dark, inside its box', () {
    expect(kNgmyCraftAddressFrames.first.id, 'none');
    expect(kNgmyCraftAddressFrames.where((f) => f.id != 'none').length, 11);
    expect(kNgmyCraftAddressFrames.length % 3, 0);
    expect(kNgmyCraftAddressFrames.map((f) => f.id).toSet().length, kNgmyCraftAddressFrames.length);
    expect(ngmyCraftAddressFrameById(kNgmyCraftDefaultAddressFrame), isNotNull);
    for (final palette in kNgmyCraftPalettes) {
      final colors = [palette.ink, palette.main, palette.soft, palette.pale, palette.accent];
      for (final f in kNgmyCraftAddressFrames) {
        for (final from in [false, true]) {
          const box = Rect.fromLTWH(1, 1, 3, 1.4);
          final d = ngmyCraftAddressFrameDraw(f.id, box.left, box.top, box.width, box.height, colors, from: from);
          final why = '${f.id} ${palette.name} from=$from';
          if (f.id == 'none') {
            expect(d.fills, isEmpty, reason: why);
            continue;
          }
          // Dark lines, so it prints clearly on a home printer.
          expect(d.fills.where((x) => _light(x[0].toInt()) < 0.45), isNotEmpty, reason: why);
          for (final x in d.fills) {
            if (x[1] == 1) {
              for (var i = 2; i + 2 < x.length; i += 3) {
                expect(_within(Rect.fromCircle(center: Offset(x[i].toDouble(), x[i + 1].toDouble()), radius: x[i + 2].toDouble()), box, 0.03), isTrue, reason: why);
              }
            } else {
              for (var i = 2; i + 1 < x.length; i += 2) {
                expect(box.inflate(0.03).contains(Offset(x[i].toDouble(), x[i + 1].toDouble())), isTrue, reason: why);
              }
            }
          }
          for (final n in d.notes) {
            expect(n.$6, isTrue, reason: why);
            expect(box.contains(Offset(n.$1, n.$2)), isTrue, reason: why);
          }
          // The words go inside the frame, with room.
          final r = ngmyCraftAddressTextRect(f.id, box.left, box.top, box.width, box.height, from: from);
          expect(_within(r.box, box), isTrue, reason: why);
          expect(r.box.height, greaterThan(0.6), reason: why);
        }
      }
    }
  });

  test('Every address sits in a frame, clear of the stamp and the watermark, even and the same size everywhere', () {
    for (final id in _withFrames) {
      for (final frame in kNgmyCraftAddressFrames) {
        final deck = _deck(id);
        ngmyApplyCraftAddressFrame(deck, frame.id);
        expect(ngmyCraftAddressFrameOf(deck), frame.id, reason: id);
        var recipients = 0;
        for (final s in deck.slides) {
          final spec = _spec(s);
          final af = spec['af'];
          if (af is! Map) continue;
          final boxes = _list(af['b']);
          final stamps = _list((spec['st'] as Map?)?['b']);
          final fronts = _list(spec['a']);
          final marks = [for (final e in s.elements.where(ngmyIsCraftWatermark)) _box(e)];
          for (final b in boxes) {
            final r = _rect(b);
            final why = '$id ${frame.id} $b';
            for (final st in stamps) {
              expect(r.overlaps(_rect(st)), isFalse, reason: '$why overlaps the stamp');
            }
            for (final m in marks) {
              expect(r.overlaps(m), isFalse, reason: '$why overlaps the watermark at $m');
            }
            expect(fronts.any((a) => _within(r, _rect(a))), isTrue, reason: '$why is not on the front');
          }
          final words = s.elements.where(ngmyIsCraftAddressText).toList();
          expect(words.length, boxes.length, reason: id);
          for (final e in words) {
            final from = e.id.startsWith(kNgmyCraftFromPrefix);
            if (!from) recipients++;
            final b = boxes.firstWhere((b) => (b[4] == 1) == from && _within(_box(e), _rect(b)));
            final want = ngmyCraftAddressTextRect(frame.id, b[0], b[1], b[2], b[3], from: from);
            expect((_box(e).left - want.box.left).abs() + (_box(e).top - want.box.top).abs(), lessThan(2e-3), reason: '$id ${frame.id}');
            expect(e.align, want.align, reason: '$id ${frame.id}');
            expect(_pt(e), closeTo(from ? kNgmyCraftFromPt : kNgmyCraftToPt, 0.1), reason: '$id ${frame.id}');
          }
        }
        expect(recipients, greaterThan(0), reason: id);
      }
    }
    // Envelopes also have a tidy sender frame (no stray little line under it).
    for (final id in ['card_envelope', 'square_envelope', 'diamond_envelope', 'letter_envelope']) {
      final s = _deck(id).slides.first;
      expect(s.elements.where((e) => e.id.startsWith(kNgmyCraftFromPrefix)), hasLength(1), reason: id);
    }
    expect(ngmyDeckHasAddressFrames(_deck('gift_box')), isFalse);
    expect(ngmyDeckHasAddressFrames(_deck('window_letter')), isFalse);
  });

  test('The chosen frame saves, stays when the colours change, and prints', () async {
    final deck = _deck('card_envelope');
    expect(ngmyCraftAddressFrameOf(deck), kNgmyCraftDefaultAddressFrame);
    expect(ngmyApplyCraftAddressFrame(deck, 'ribbon'), isTrue);
    expect(ngmyApplyCraftAddressFrame(deck, 'ribbon'), isFalse);
    expect(ngmyApplyCraftAddressFrame(deck, 'nope'), isFalse);
    final again = NgmySlideDeck.fromJson(jsonDecode(jsonEncode(deck.toJson())) as Map<String, dynamic>);
    expect(ngmyCraftAddressFrameOf(again), 'ribbon');
    expect(ngmyRecolorPaperCraft(deck, kNgmyCraftPalettes[3]), isTrue);
    expect(ngmyCraftAddressFrameOf(deck), 'ribbon');
    expect(ngmyCraftAddressFrameColors(deck).first, kNgmyCraftPalettes[3].ink);
    final to = deck.slides.first.elements.firstWhere((e) => e.id.startsWith(kNgmyCraftToPrefix));
    expect(to.align, TextAlign.center);
    final pdf = await ngmySlidesExportPdfBytes(deck);
    expect(pdf.length, greaterThan(1000));
    expect(ngmySlidesPrintHtml(deck), contains('TO'));
  });

  test('The AI understands which frame they mean', () {
    expect(ngmyFindCraftAddressFrame('put the address in the ribbon frame')?.id, 'ribbon');
    expect(ngmyFindCraftAddressFrame('no frame please')?.id, 'none');
    expect(ngmyFindCraftAddressFrame('corner brackets')?.id, 'brackets');
    expect(ngmyFindCraftAddressFrame('weka anwani kwenye utepe')?.id, 'ribbon');
    expect(ngmyFindCraftAddressFrame('the ngmy one')?.id, 'ngmy');
    expect(ngmyFindCraftAddressFrame('banana'), isNull);
    final deck = _deck('square_envelope');
    final prompt = ngmyPaperCraftEditPrompt(deck: deck, request: 'put the address in the ribbon frame');
    expect(prompt, contains('ADDRESS FRAME NOW: $kNgmyCraftDefaultAddressFrame'));
    expect(prompt, contains('ribbon (Ribbon banner)'));
    final answer = ngmyParsePaperCraftAi('{"palette": "", "wm": {}, "stamp": "", "frame": "ribbon", "fields": {}, "reply": "Done"}')!;
    expect(answer.frame, 'ribbon');
    expect(ngmyApplyPaperCraftEdit(deck, answer), isTrue);
    expect(ngmyCraftAddressFrameOf(deck), 'ribbon');
    expect(ngmyPaperCraftEditPrompt(deck: _deck('gift_box'), request: 'hi'), isNot(contains('ADDRESS FRAME NOW')));
  });

  test('Full page letter envelope holds a Letter or A4 page folded in four, with the folding steps printed', () {
    final craft = kNgmyPaperCrafts.firstWhere((c) => c.id == 'letter_envelope');
    expect(craft.number, 27);
    expect(kNgmyPaperCrafts.where((c) => c.number == 27), hasLength(1));
    final spec = _spec(craft.build(kNgmyCraftPalettes.first).single);
    final net = (spec['e'] as List).single as Map;
    final b = [for (final v in net['b'] as List) (v as num).toDouble()];
    // Letter folded in four: 5.5 x 4.25 in. A4 folded in four: 5.85 x 4.13 in. At least 1/8 in to spare.
    expect(b[2], greaterThanOrEqualTo(5.85 + 0.125));
    expect(b[3], greaterThanOrEqualTo(4.25 + 0.125));
    final notes = [for (final n in spec['n'] as List) (n as List)[2].toString()];
    expect(notes, containsAll(['1. Fold the page', '2. Fold it in', '3. Slide it in.']));
    for (final n in spec['n'] as List) {
      final x = ((n as List)[0] as num).toDouble();
      final y = (n[1] as num).toDouble();
      expect(x, inInclusiveRange(0.2, 8.3));
      expect(y, inInclusiveRange(0.2, 10.8));
    }
    expect(craft.blurb, contains('in half again'));
  });

  testWidgets('The frame chooser shows every design and applies the one tapped', (tester) async {
    final deck = _deck('diamond_envelope');
    String? applied;
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: TextButton(
              onPressed: () => showNgmyCraftAddressFramePanel(context, deck: () => deck, onApply: (id) {
                applied = id;
                ngmyApplyCraftAddressFrame(deck, id);
              }),
              child: const Text('open'),
            ),
          ),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    expect(find.text('Address frame'), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_frame_none')), findsOneWidget);
    expect(find.byKey(const ValueKey('craft_frame_rounded')), findsOneWidget);
    await tester.tap(find.byKey(const ValueKey('craft_frame_double')));
    await tester.pump();
    expect(applied, 'double');
    expect(ngmyCraftAddressFrameOf(deck), 'double');
  });

  test('Every row is full: designs two to a row in every group, choosers three to a row', () {
    expect(kNgmyPaperCrafts.length.isEven, isTrue);
    for (final g in kNgmyCraftGroups) {
      expect(kNgmyPaperCrafts.where((c) => c.group == g).length.isEven, isTrue, reason: g);
    }
    expect(kNgmyCraftStamps.length % 3, 0);
    expect(kNgmyCraftAddressFrames.length % 3, 0);
  });

  for (final size in [const Size(360, 640), const Size(1280, 800)]) {
    testWidgets('The four strip pop-ups open in the middle of a ${size.width.toInt()} wide screen and fit it', (tester) async {
      tester.view.physicalSize = size;
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.reset);
      final deck = _deck('card_envelope');
      late BuildContext ctx;
      await tester.pumpWidget(MaterialApp(home: Builder(builder: (c) {
        ctx = c;
        return const Scaffold(body: SizedBox.expand());
      })));
      final openers = <String, Future<void> Function()>{
        'AI helper': () => showNgmyPaperCraftAiChat(ctx, deck: () => deck, onApply: (_) => false),
        'NGMY watermark': () => showNgmyCraftWatermarkPanel(ctx, deck: () => deck, onApply: (_) {}),
        'Stamp': () => showNgmyCraftStampPanel(ctx, deck: () => deck, onApply: (_) {}),
        'Address frame': () => showNgmyCraftAddressFramePanel(ctx, deck: () => deck, onApply: (_) {}),
      };
      for (final entry in openers.entries) {
        unawaited(entry.value());
        await tester.pumpAndSettle();
        final card = find.byType(NgmyCraftDialogCard);
        expect(card, findsOneWidget, reason: entry.key);
        expect(find.text(entry.key), findsOneWidget, reason: entry.key);
        final box = tester.getRect(find.descendant(of: card, matching: find.byType(Container)).first);
        expect(box.left, greaterThanOrEqualTo(0), reason: entry.key);
        expect(box.top, greaterThanOrEqualTo(0), reason: entry.key);
        expect(box.right, lessThanOrEqualTo(size.width), reason: entry.key);
        expect(box.bottom, lessThanOrEqualTo(size.height), reason: entry.key);
        // In the middle, not stuck to the bottom.
        expect((box.center.dx - size.width / 2).abs(), lessThan(2), reason: entry.key);
        expect((box.center.dy - size.height / 2).abs(), lessThan(40), reason: entry.key);
        expect(tester.takeException(), isNull, reason: entry.key);
        // The close X closes it.
        await tester.tap(find.byKey(const ValueKey('craft_dialog_close')));
        await tester.pumpAndSettle();
        expect(card, findsNothing, reason: entry.key);
      }
      // Tapping outside closes it too.
      unawaited(openers['Stamp']!());
      await tester.pumpAndSettle();
      await tester.tapAt(const Offset(4, 4));
      await tester.pumpAndSettle();
      expect(find.byType(NgmyCraftDialogCard), findsNothing);
    });
  }

  test('Gift Card Holder takes a standard gift card and fits the A2 envelope; an old Round Labels deck still works', () async {
    final craft = kNgmyPaperCrafts.firstWhere((c) => c.id == 'gift_card_holder');
    expect(craft.number, 30);
    expect(kNgmyPaperCrafts.where((c) => c.id == 'round_labels'), isEmpty);
    final spec = _spec(craft.build(kNgmyCraftPalettes.first).single);
    // The pocket (the glued area between the tabs) is wider than a 3.375 in gift card.
    final glue = _list(spec['g']);
    expect(glue.length, 3);
    final xs = [for (final g in glue) for (var i = 0; i < g.length; i += 2) g[i]];
    expect(xs.reduce((a, b) => a > b ? a : b) - xs.reduce((a, b) => a < b ? a : b) - 2 * 0.6, greaterThan(3.375 + 0.1));
    // Closed 4.25 x 5.5 in (half the paper) fits inside the 5.75 x 4.375 in A2 envelope.
    expect(5.5, lessThan(5.75));
    expect(4.25, lessThan(4.375));
    // A deck made from the old Round Labels design still opens, prints and talks to the AI, without breaking.
    final deck = _deck('gift_card_holder');
    final lines = deck.slides.first.elements.firstWhere(ngmyIsCraftLines);
    final m = jsonDecode(lines.text) as Map<String, dynamic>;
    m['craft'] = 'round_labels';
    lines.text = jsonEncode(m);
    final old = NgmySlideDeck(id: 'old', name: 'Round Labels', deckKind: deck.deckKind, aspectRatio: deck.aspectRatio, paperAspect: deck.paperAspect, slides: deck.slides);
    expect(ngmyPaperCraftOfDeck(old), isNull);
    expect(ngmyRecolorPaperCraft(old, kNgmyCraftPalettes[1]), isFalse);
    expect(ngmyPaperCraftEditPrompt(deck: old, request: 'hi'), contains('TEXT BOXES'));
    expect(await ngmySlidesExportPdfBytes(old), isNotEmpty);
  });
}
