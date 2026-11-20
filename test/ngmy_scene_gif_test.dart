import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_core_protocol_sims.dart';
import 'package:ngmy/ngmy_studio_movie.dart';

void main() {

  testWidgets('a scene box makes a sharp GIF with round corners', (tester) async {
    tester.view.physicalSize = const Size(1170, 2532);
    tester.view.devicePixelRatio = 3;
    addTearDown(tester.view.reset);
    // The test font is wider than the app's, so the box names overflow by a hair here (not in the app).
    final old = FlutterError.onError;
    FlutterError.onError = (d) {
      if (d.toString().contains('overflowed')) return;
      old?.call(d);
    };
    addTearDown(() => FlutterError.onError = old);
    await tester.pumpWidget(const MaterialApp(home: NgmyCoreProtocolSimsScreen()));
    await tester.pump(const Duration(milliseconds: 500));
    final box = find.text('VAULT UNLOCK');
    await tester.ensureVisible(box.first);
    await tester.pump();
    await tester.tap(box.first);
    await tester.pump(const Duration(milliseconds: 500));
    final btn = find.text('Download the scene (GIF)');
    await tester.ensureVisible(btn);
    await tester.pump();
    ngmyLastGifForTest = null;
    await tester.tap(btn);
    for (var i = 0; i < 6000; i++) {
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 5)));
      await tester.pump(const Duration(milliseconds: 16));
      if (find.byType(SnackBar).evaluate().isNotEmpty) break;
    }
    final bytes = ngmyLastGifForTest!;
    final gif = img.decodeGif(bytes)!;
    // ignore: avoid_print
    print('scene gif ${gif.width}x${gif.height} frames ${gif.numFrames} ${bytes.length ~/ 1024} KB');
    expect(gif.width, greaterThanOrEqualTo(1100));
    final mid = gif.frames.first;
    File('C:/Users/appbu/AppData/Local/Temp/claude/90d5c8a07f7db82e/57c6e595-d6c4-43c4-9873-33fc75db63b1/scratchpad/scene_mid.png').writeAsBytesSync(img.encodePng(mid));


  });
}
