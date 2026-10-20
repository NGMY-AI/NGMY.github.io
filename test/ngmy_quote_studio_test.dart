import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
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

void main() {
  testWidgets('the quote studio: word sizes, designs, a background picture and its photo studio all work', (tester) async {
    tester.view.physicalSize = const Size(540, 2200);
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

    // Text designs.
    await tester.tap(find.text('Text'));
    await tester.pump();
    for (final name in ['Neon glow', 'Outline', 'Highlighter', 'Stamp', 'Elegant', 'Shadow', 'Bold caps']) {
      await tester.tap(find.text(name));
      await tester.pump();
    }
    expect(find.byType(NgmyFxSample), findsWidgets);

    // Photo studio.
    await tester.tap(find.text('Photo'));
    await tester.pump();
    for (final name in ['Black & white', 'Sepia', 'Vivid', 'Faded']) {
      await tester.tap(find.text(name));
      await tester.pump();
    }
    await tester.drag(find.byType(Slider).first, const Offset(60, 0));
    await tester.pump();
    await tester.tap(find.text('Flip'));
    await tester.pump();
    expect(tester.takeException(), isNull);

    // Logo and design tabs still work.
    await tester.tap(find.text('Logo'));
    await tester.pump();
    await tester.tap(find.text('Design'));
    await tester.pump();
    expect(tester.takeException(), isNull);
  });
}
