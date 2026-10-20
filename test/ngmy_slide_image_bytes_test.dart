import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_render.dart';

void main() {
  const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

  test('a slide picture is decoded once and the same bytes are reused', () {
    final a = ngmySlideImageBytes(png);
    final b = ngmySlideImageBytes(png);
    expect(identical(a, b), isTrue);
    expect(a.length, greaterThan(10));
  });
}
