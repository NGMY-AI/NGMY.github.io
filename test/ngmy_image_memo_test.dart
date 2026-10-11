import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_image_memo.dart';

void main() {
  const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

  test('the same photo reuses one image instead of decoding again', () {
    final a = ngmyMemoImage(png);
    final b = ngmyMemoImage(String.fromCharCodes(png.codeUnits));
    expect(a, isNotNull);
    expect(identical(a, b), isTrue);
  });

  test('empty or broken text gives no image', () {
    expect(ngmyMemoImage(''), isNull);
    expect(ngmyMemoImage('data:image/png;base64,@@@'), isNull);
  });
}
