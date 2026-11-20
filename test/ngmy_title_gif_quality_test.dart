import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_title_studio.dart';

void main() {
  testWidgets('the title GIF is sharp: 1080 pixels on the long side and 20 pictures a second', (tester) async {
    await tester.runAsync(() async {
      final sw = Stopwatch()..start();
      final bytes = await ngmyTitleGif(text: 'NGMY', move: 'bounce', style: 'solid', bg: 0, color: Colors.amber, fontSize: 56, longEdge: 1080, fps: 20);
      final gif = img.decodeGif(bytes)!;
      // ignore: avoid_print
      print('gif ${gif.width}x${gif.height} frames ${gif.numFrames} ${bytes.length ~/ 1024} KB in ${sw.elapsedMilliseconds} ms');
      expect(gif.width, 1080);
      expect(gif.height, 608);
      expect(gif.numFrames, 64);
    });
  });
}
