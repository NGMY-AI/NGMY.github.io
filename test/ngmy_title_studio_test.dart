import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:ngmy/ngmy_title_studio.dart';

Future<Uint8List> _frame(String text, String move, String style, int bg, double t, {int w = 96, int h = 54}) async {
  final rec = ui.PictureRecorder();
  paintTitleCard(Canvas(rec), Size(w.toDouble(), h.toDouble()), t, text: text, move: move, style: style, bg: bg, color: const Color(0xFF38BDF8), fontSize: 56);
  final pic = rec.endRecording();
  final image = await pic.toImage(w, h);
  final data = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
  return data!.buffer.asUint8List();
}

double _diff(Uint8List a, Uint8List b) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += (a[i] - b[i]).abs();
  }
  return sum / a.length;
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  testWidgets('there are many moves, looks and background designs, and they are all different', (t) async {
    expect(kTitleMoves.length, greaterThanOrEqualTo(24));
    expect(kTitleStyles.length, greaterThanOrEqualTo(8));
    expect(kTitleBackgrounds.length, greaterThanOrEqualTo(20));
    expect(kTitleMoves.map((m) => m.$1).toSet().length, kTitleMoves.length);
    await t.runAsync(() async {
      // Every background is a different picture (not one picture in other colours).
      final seen = <Uint8List>[];
      for (var b = 0; b < kTitleBackgrounds.length; b++) {
        final f = await _frame('', 'bounce', 'solid', b, 0.4);
        for (var k = 0; k < seen.length; k++) {
          expect(_diff(f, seen[k]), greaterThan(2.0), reason: 'background $b looks like background $k');
        }
        seen.add(f);
      }
      // Every look is a different design of the letters.
      final looks = <Uint8List>[];
      for (final s in kTitleStyles) {
        final f = await _frame('Ag', 'bounce', s.$1, 0, 0.9, w: 160, h: 90);
        for (var k = 0; k < looks.length; k++) {
          expect(_diff(f, looks[k]), greaterThan(0.2), reason: '${s.$1} looks like another design');
        }
        looks.add(f);
      }
      // Every move puts the letters somewhere different at some moment.
      final base = await _frame('WAVE', 'float', 'solid', 0, 0.3, w: 200, h: 100);
      for (final m in kTitleMoves) {
        var moved = false;
        for (final tm in [0.1, 0.3, 0.5, 0.7]) {
          final f = await _frame('WAVE', m.$1, 'solid', 0, tm, w: 200, h: 100);
          final g = await _frame('WAVE', 'rainbow', 'solid', 0, tm, w: 200, h: 100);
          if (_diff(f, g) > 0.05 || _diff(f, base) > 0.05) moved = true;
        }
        expect(moved, isTrue, reason: '${m.$1} draws something');
      }
    });
  });

  testWidgets('everything paints at every moment, with long titles, odd shapes and no text', (t) async {
    await t.runAsync(() async {
      for (final m in kTitleMoves) {
        for (final tm in [0.0, 0.2, 0.5, 0.8, 0.999]) {
          await _frame('NGMY Core Protocol is fun', m.$1, 'sticker', 3, tm, w: 90, h: 160);
        }
      }
      for (final s in kTitleStyles) {
        await _frame('Hi', 'zoom', s.$1, 5, 0.6);
      }
      for (var b = 0; b < kTitleBackgrounds.length; b++) {
        for (final tm in [0.0, 0.33, 0.66, 0.999]) {
          await _frame('', 'wave', 'neon', b, tm);
        }
      }
    });
  });

  testWidgets('the loop joins up: the end of the animation looks like its start, so the GIF never jumps', (t) async {
    await t.runAsync(() async {
      for (var b = 0; b < kTitleBackgrounds.length; b++) {
        final a = await _frame('', 'bounce', 'solid', b, 0.0);
        final z = await _frame('', 'bounce', 'solid', b, 0.9999);
        expect(_diff(a, z), lessThan(1.6), reason: 'background ${kTitleBackgrounds[b].$2} jumps at the end of the loop');
      }
    });
  });

  testWidgets('the download is the WHOLE animation: a GIF with many frames that really move', (t) async {
    await t.runAsync(() async {
      final progress = <double>[];
      final bytes = await ngmyTitleGif(text: 'NGMY', move: 'bounce', style: 'solid', bg: 3, color: const Color(0xFF38BDF8), fontSize: 56, longEdge: 120, fps: 10, onProgress: progress.add);
      expect(String.fromCharCodes(bytes.sublist(0, 6)), 'GIF89a');
      final gif = img.decodeGif(bytes);
      expect(gif, isNotNull);
      expect(gif!.numFrames, 32, reason: '3.2 seconds at 10 frames a second');
      expect(gif.width, 120);
      expect(gif.height, 68);
      expect(progress.last, 1.0);
      // The letters really move between the frames.
      final f0 = gif.frames[0].getBytes();
      final f5 = gif.frames[5].getBytes();
      expect(_diff(Uint8List.fromList(f0), Uint8List.fromList(f5)), greaterThan(0.2));
      // A square card and a tall card keep their shape.
      final sq = img.decodeGif(await ngmyTitleGif(text: 'A', move: 'wave', style: 'neon', bg: 1, color: Colors.white, fontSize: 60, aspect: 1, longEdge: 64, fps: 5));
      expect((sq!.width, sq.height), (64, 64));
      final tall = img.decodeGif(await ngmyTitleGif(text: 'A', move: 'wave', style: 'neon', bg: 1, color: Colors.white, fontSize: 60, aspect: 9 / 16, longEdge: 64, fps: 5));
      expect(tall!.width < tall.height, isTrue);
    });
  });

  testWidgets('the studio lists every move, look and scene, and Download saves the animation', (t) async {
    t.view.physicalSize = const Size(900, 2000);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyTitleStudio()));
    await t.pump(const Duration(milliseconds: 400));
    final st = t.state(find.byType(NgmyTitleStudio)) as NgmyTitleStudioState;
    for (final m in kTitleMoves) {
      final chip = find.text(m.$2);
      await t.ensureVisible(chip);
      await t.tap(chip);
      await t.pump(const Duration(milliseconds: 50));
      expect(st.move, m.$1);
    }
    for (var i = 0; i < kTitleBackgrounds.length; i++) {
      final chip = find.text('${kTitleBackgrounds[i].$1} ${kTitleBackgrounds[i].$2}');
      await t.ensureVisible(chip);
      await t.tap(chip);
      await t.pump(const Duration(milliseconds: 50));
      expect(st.bg, i);
    }
    final button = find.text('Download the animation (GIF)');
    await t.ensureVisible(button);
    await t.runAsync(() async {
      await t.tap(button);
      for (var i = 0; i < 400 && st.saving >= 0; i++) {
        await Future<void>.delayed(const Duration(milliseconds: 50));
        await t.pump();
      }
    });
    await t.pump(const Duration(milliseconds: 100));
    expect(st.saving, -1, reason: 'the animation was made');
    expect(st.note, isNotEmpty, reason: 'it says whether it was saved');
  });
}
