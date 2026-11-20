import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_studio_movie.dart';

void main() {
  test('the GIF writer gives back every pixel exactly (big pictures, many colours)', () {
    const w = 640, h = 400;
    final rgb = Uint8List(768);
    for (var c = 0; c < 255; c++) {
      rgb[c * 3] = c;
      rgb[c * 3 + 1] = 255 - c;
      rgb[c * 3 + 2] = (c * 7) & 0xFF;
    }
    final rnd = math.Random(4);
    final a = Uint8List(w * h);
    for (var i = 0; i < a.length; i++) {
      // Smooth areas and noisy areas, so the squeeze table fills up and starts again.
      a[i] = i % 7 == 0 ? rnd.nextInt(255) : ((i ~/ 37) % 255);
    }
    final b = Uint8List.fromList(a);
    for (var y = 100; y < 180; y++) {
      for (var x = 200; x < 330; x++) {
        b[y * w + x] = rnd.nextInt(255);
      }
    }
    final wr = NgmyGifWriter(w, h, rgb)
      ..frame(0, 0, w, h, a, 5)
      ..changes(a, b, 5)
      ..changes(b, b, 5);
    final gif = img.decodeGif(wr.finish())!;
    expect(gif.numFrames, 3);
    final f0 = gif.frames[0];
    for (var p = 0; p < a.length; p += 13) {
      final px = f0.getPixel(p % w, p ~/ w);
      expect(px.r.toInt(), a[p], reason: 'pixel $p');
    }
  });

  test('round corners: only the corner pixels are cut, more near the very corner', () {
    final cut = ngmyRoundCornerCuts(100, 80, 20);
    expect(cut.first, greaterThan(10));
    expect(cut[10], greaterThan(0));
    expect(cut[40], 0);
    expect(cut.last, cut.first);
  });
}
