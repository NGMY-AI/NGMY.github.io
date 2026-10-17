import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_slides_source_document.dart';

void main() {
  test('a PDF is handed to the AI as the file itself', () {
    final bytes = Uint8List.fromList(utf8.encode('%PDF-1.4 sample'));
    final doc = ngmyReadSlidesSourceDocument('plan.pdf', bytes);
    expect(doc.part?.mimeType, 'application/pdf');
    expect(base64Decode(doc.part!.data), bytes);
    expect(doc.text, isEmpty);
  });

  test('a text file is read into words the AI can rewrite', () {
    final doc = ngmyReadSlidesSourceDocument('notes.txt', Uint8List.fromList(utf8.encode('Our goals:\nGrow the team.')));
    expect(doc.part, isNull);
    expect(doc.text, contains('Grow the team.'));
  });

  test('an empty text file is refused', () {
    expect(() => ngmyReadSlidesSourceDocument('empty.md', Uint8List.fromList(utf8.encode('   '))), throwsA(isA<String>()));
  });
}
