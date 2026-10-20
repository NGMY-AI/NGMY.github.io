import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_quote_maker.dart';
import 'package:ngmy/ngmy_slides_render.dart';

Future<Uint8List> _photo(WidgetTester tester) async {
  late Uint8List bytes;
  await tester.runAsync(() async {
    final rec = ui.PictureRecorder();
    final c = Canvas(rec);
    c.drawRect(const Rect.fromLTWH(0, 0, 90, 160), Paint()..shader = const LinearGradient(colors: [Colors.orange, Colors.teal]).createShader(const Rect.fromLTWH(0, 0, 90, 160)));
    final img = await rec.endRecording().toImage(90, 160);
    bytes = (await img.toByteData(format: ui.ImageByteFormat.png))!.buffer.asUint8List();
  });
  return bytes;
}

/// Average brightness of the whole quote picture as the user would download it.
Future<double> _brightness(WidgetTester tester) async {
  final boundary = find.ancestor(of: find.byType(NgmySlideAnimatedRender), matching: find.byType(RepaintBoundary)).first;
  final ro = tester.renderObject<RenderRepaintBoundary>(boundary);
  late double mean;
  await tester.runAsync(() async {
    await Future<void>.delayed(const Duration(milliseconds: 150));
    final image = await ro.toImage(pixelRatio: 1.0);
    final data = (await image.toByteData(format: ui.ImageByteFormat.rawRgba))!;
    var sum = 0.0;
    var n = 0;
    for (var i = 0; i < data.lengthInBytes; i += 16) {
      sum += data.getUint8(i) + data.getUint8(i + 1) + data.getUint8(i + 2);
      n++;
    }
    mean = sum / n;
  });
  return mean;
}

Finder _sliderFor(String name) => find.descendant(of: find.ancestor(of: find.text(name), matching: find.byType(Column)).first, matching: find.byType(Slider));

void main() {
  testWidgets('the quote studio: word sizes, designs, a background picture and its photo studio all work', (tester) async {
    tester.view.physicalSize = const Size(540, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    final photo = await _photo(tester);

    await tester.pumpWidget(MaterialApp(home: ngmyQuoteMakerForTest(photo: photo)));
    await tester.pump(const Duration(milliseconds: 300));

    // The picture is behind the words.
    expect(find.byType(Image), findsWidgets);

    await tester.enterText(find.byType(TextField).first, 'Lead with courage today. Be kind.');
    await tester.pump();

    // Word sizes: pick a word, make it huge.
    await tester.tap(find.text('Word sizes'));
    await tester.pump();
    await tester.tap(find.text('courage').last);
    await tester.pump();
    await tester.tap(find.text('Huge'));
    await tester.pump();
    await tester.tap(find.text('today.').last);
    await tester.pump();
    await tester.tap(find.text('Small'));
    await tester.pump();
    await tester.tap(find.text('Sentence 2'));
    await tester.pump();
    await tester.tap(find.text('Big'));
    await tester.pump();
    final rendered = tester.widgetList<RichText>(find.byType(RichText)).map((r) => r.text.toPlainText()).join('|');
    expect(rendered, contains('courage'));
    expect(rendered.contains('^'), isFalse);
    expect(rendered.contains('~'), isFalse);

    // Text designs: twenty-one, seven in a row.
    await tester.tap(find.text('Text'));
    await tester.pump();
    final fxTiles = find.byType(NgmyFxSample);
    expect(fxTiles, findsNWidgets(21));
    final firstRowY = tester.getTopLeft(fxTiles.at(0)).dy;
    expect(tester.getTopLeft(fxTiles.at(6)).dy, closeTo(firstRowY, 8), reason: 'seven boxes share the first row');
    expect(tester.getTopLeft(fxTiles.at(7)).dy, greaterThan(firstRowY + 20), reason: 'the eighth starts a new row');
    for (final name in ['Neon glow', 'Outline', 'Highlighter', 'Stamp', 'Elegant', 'Shadow', 'Bold caps', 'Retro', '3D', 'Glitch', 'Fire', 'Ice', 'Chalk', 'Comic', 'Gold', 'Sunset', 'Soft glow', 'Lowercase', 'Echo', 'Whisper']) {
      await tester.tap(find.text(name));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: name);
    }

    // Highlight behind the words: pick a custom colour, then change its colour, shade and strength.
    expect(find.text('Strength'), findsNothing);
    await tester.tap(find.byIcon(Icons.colorize_rounded));
    await tester.pump();
    expect(find.text('Strength'), findsOneWidget);
    await tester.drag(_sliderFor('Colour'), const Offset(80, 0));
    await tester.drag(_sliderFor('Shade'), const Offset(-40, 0));
    await tester.drag(_sliderFor('Strength'), const Offset(-60, 0));
    await tester.pump();
    expect(tester.takeException(), isNull);

    // Photo studio: the controls change the picture that gets downloaded.
    await tester.tap(find.text('Photo'));
    await tester.pump();
    for (final name in ['Black & white', 'Sepia', 'Vivid', 'Faded', 'Noir', 'Golden hour']) {
      await tester.tap(find.text(name));
      await tester.pump();
    }
    await tester.tap(find.text('Original'));
    await tester.pump();

    await tester.tap(find.text('Light'));
    await tester.pump();
    await tester.drag(_sliderFor('Brightness'), const Offset(-600, 0));
    await tester.pump();
    final dark = await _brightness(tester);
    await tester.drag(_sliderFor('Brightness'), const Offset(1200, 0));
    await tester.pump();
    final bright = await _brightness(tester);
    expect(bright, greaterThan(dark + 40), reason: 'the brightness slider changes the picture');

    await tester.drag(_sliderFor('Darken'), const Offset(600, 0));
    await tester.pump();
    final darkened = await _brightness(tester);
    expect(darkened, lessThan(bright - 40), reason: 'darken changes the picture');
    await tester.drag(_sliderFor('Darken'), const Offset(-900, 0));
    await tester.drag(_sliderFor('Brightness'), const Offset(-1200, 0));
    await tester.pump();

    await tester.tap(find.text('Colour'));
    await tester.pump();
    await tester.drag(_sliderFor('Colour strength'), const Offset(300, 0));
    await tester.drag(_sliderFor('Warmth'), const Offset(300, 0));
    await tester.drag(_sliderFor('Shift colours'), const Offset(100, 0));
    await tester.tap(find.text('Negative'));
    await tester.pump();

    await tester.tap(find.text('Effects'));
    await tester.pump();
    await tester.drag(_sliderFor('Blur'), const Offset(100, 0));
    await tester.drag(_sliderFor('Soft focus'), const Offset(100, 0));
    await tester.drag(_sliderFor('Film grain'), const Offset(200, 0));
    await tester.pump();

    await tester.tap(find.text('Crop'));
    await tester.pump();
    await tester.drag(_sliderFor('Zoom'), const Offset(100, 0));
    await tester.drag(_sliderFor('Turn'), const Offset(60, 0));
    await tester.tap(find.text('Turn 90°'));
    await tester.tap(find.text('Flip sideways'));
    await tester.tap(find.text('Flip upside down'));
    await tester.pump();
    expect(tester.takeException(), isNull);

    await tester.tap(find.text('Light'));
    await tester.pump();
    await tester.tap(find.text('Reset the whole picture'));
    await tester.pump();

    // Logo and design tabs still work.
    await tester.tap(find.text('Logo'));
    await tester.pump();
    await tester.tap(find.text('Design'));
    await tester.pump();
    expect(find.text('Download picture'), findsOneWidget);
    expect(find.text('Edit in Slides'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
