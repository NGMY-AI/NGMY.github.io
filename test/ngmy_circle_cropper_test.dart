import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_circle_cropper.dart';

void main() {
  test('centered, not zoomed: keeps the middle square of a wide photo', () {
    // 2000x1000 photo in a 300 frame: cover scale 0.3 → shown 600x300, centered at tx=-150.
    final r = ngmyCircleCropRect(imageWidth: 2000, imageHeight: 1000, viewport: 300, zoom: 1, tx: -150, ty: 0);
    expect(r.size, 1000);
    expect(r.x, 500);
    expect(r.y, 0);
  });

  test('zoomed in 2x keeps a smaller square where the user moved', () {
    // Zoom 2 on a 1000x1000 photo in a 300 frame (cover 0.3): shown 600x600.
    final r = ngmyCircleCropRect(imageWidth: 1000, imageHeight: 1000, viewport: 300, zoom: 2, tx: -300, ty: -150);
    expect(r.size, 500);
    expect(r.x, 500);
    expect(r.y, 250);
  });

  test('never goes outside the photo', () {
    final r = ngmyCircleCropRect(imageWidth: 800, imageHeight: 600, viewport: 300, zoom: 1, tx: 50, ty: 40);
    expect(r.x, 0);
    expect(r.y, 0);
    expect(r.size, 600);
  });
}
