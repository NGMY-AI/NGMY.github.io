import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_quote_maker.dart';
import 'package:ngmy/ngmy_slides_render.dart';

Future<ByteData> _capture(WidgetTester tester) async {
  final boundary = find
      .ancestor(of: find.byType(NgmySlideAnimatedRender), matching: find.byType(RepaintBoundary))
      .first;
  final ro = tester.renderObject<RenderRepaintBoundary>(boundary);
  late ByteData data;
  await tester.runAsync(() async {
    final image = await ro.toImage(pixelRatio: 1.0);
    data = (await image.toByteData(format: ui.ImageByteFormat.rawRgba))!;
    expect(image.width, greaterThan(100));
  });
  return data;
}

void main() {
  testWidgets('the picture taken from the quote maker contains the NGMY logo', (tester) async {
    tester.view.physicalSize = const Size(540, 1700);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: ElevatedButton(onPressed: () => showNgmyQuoteMaker(context), child: const Text('open')),
          ),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pump();
    // Let the logo asset load and decode.
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 800)));
    await tester.pump(const Duration(milliseconds: 600));
    await tester.pump(const Duration(milliseconds: 600));

    final withLogo = await _capture(tester);

    final boundary = find.ancestor(of: find.byType(NgmySlideAnimatedRender), matching: find.byType(RepaintBoundary)).first;
    final size = tester.getSize(boundary);
    // The logo is at 39%-61% across and from 80% down by default: count the pixels there that are
    // not the smooth background, i.e. the logo and its ring.
    final x0 = (size.width * 0.40).round();
    final x1 = (size.width * 0.60).round();
    final y0 = (size.height * 0.80).round();
    final y1 = (size.height * 0.80 + size.width * 0.20).round().clamp(0, size.height.round() - 1);
    var busy = 0;
    var total = 0;
    int px(int x, int y) {
      final i = (y * size.width.round() + x) * 4;
      return withLogo.getUint8(i) + withLogo.getUint8(i + 1) + withLogo.getUint8(i + 2);
    }

    final base = px(x0, y0);
    for (var y = y0; y < y1; y += 2) {
      for (var x = x0; x < x1; x += 2) {
        total++;
        if ((px(x, y) - base).abs() > 90) busy++;
      }
    }
    expect(busy / total, greaterThan(0.15), reason: 'the logo area should hold the logo and its ring, not only background');
  });
}
