import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:ngmy/ngmy_upload_shrink.dart';

void main() {
  test('a big photo is shrunk before upload', () {
    final big = img.Image(width: 4000, height: 3000);
    for (var y = 0; y < big.height; y += 1) {
      for (var x = 0; x < big.width; x += 1) {
        big.setPixelRgb(x, y, (x * 7) % 256, (y * 3) % 256, (x + y) % 256);
      }
    }
    final raw = Uint8List.fromList(img.encodePng(big));
    final out = ngmyShrinkImageForUpload(raw, mime: 'image/png');
    final decoded = img.decodeImage(out.bytes)!;
    expect(out.mime, 'image/jpeg');
    expect(decoded.width, 1600);
    expect(out.bytes.length, lessThan(1024 * 1024));
  });

  test('videos and non-images are left alone', () {
    final bytes = Uint8List.fromList(List.filled(1000, 7));
    expect(identical(ngmyShrinkImageForUpload(bytes, mime: 'video/mp4').bytes, bytes), isTrue);
    expect(identical(ngmyShrinkImageForUpload(bytes, mime: 'image/jpeg').bytes, bytes), isTrue);
  });
}
