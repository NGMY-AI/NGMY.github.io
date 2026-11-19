import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_slides_render.dart';

void main() {
  test('a seeded picture is reused (never turned back from text), equal texts find the same bytes', () {
    final bytes = Uint8List.fromList(List.generate(5000, (i) => i % 251));
    final url = 'data:image/jpeg;base64,${base64Encode(bytes)}';
    ngmySlideImageBytesSeed(url, bytes);
    expect(identical(ngmySlideImageBytes(url), bytes), isTrue);
    // A different String object with the same letters still finds them.
    final copy = String.fromCharCodes(url.codeUnits);
    expect(identical(copy, url), isFalse);
    expect(identical(ngmySlideImageBytes(copy), bytes), isTrue);
    // A different picture of the same length is its own entry.
    final other = Uint8List.fromList(List.generate(5000, (i) => (i * 7) % 251));
    final otherUrl = 'data:image/jpeg;base64,${base64Encode(other)}';
    expect(otherUrl.length, url.length);
    expect(ngmySlideImageBytes(otherUrl), other);
  });

  test('decode width is the same formula the page uses', () {
    expect(ngmySlideImageDecodeWidth(270, 3, 1.6), 432);
    expect(ngmySlideImageDecodeWidth(0, 3, null), isNull);
    expect(ngmySlideImageDecodeWidth(400, 3, null), 1500);
  });

  testWidgets('template cards can be made ready ahead of time', (tester) async {
    late BuildContext ctx;
    await tester.pumpWidget(MaterialApp(home: Builder(builder: (c) {
      ctx = c;
      return const SizedBox();
    })));
    await tester.runAsync(() => ngmyHatiWarmTemplatePreviews(ctx, kNgmyHatiKuhowaTemplates.take(3)).timeout(const Duration(seconds: 20)));
  });
}
