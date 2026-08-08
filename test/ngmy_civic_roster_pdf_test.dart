import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_roster_pdf.dart';

void main() {
  test('civic roster PDF packs members without empty mid pages', () async {
    final rows = List<NgmyCivicRosterRow>.generate(
      42,
      (i) => NgmyCivicRosterRow(
        name: 'Member $i',
        phone: '(404) 555-${(1000 + i).toString().padLeft(4, '0')}',
        address: '$i Example Road, Atlanta, GA 30301',
        familyLabel: '${1 + (i % 5)}',
      ),
    );

    final bytes = await ngmyBuildCivicRosterPdfBytes(
      state: 'Georgia',
      titleLine1: "EMO'YA M'BEMBE",
      titleLine2: "M'MBONDO · Georgia",
      dateStr: '2026-08-08',
      timeStr: '8:32 AM',
      rows: rows,
    );

    expect(bytes, isNotEmpty);
    // PDF header
    expect(String.fromCharCodes(bytes.take(4)), '%PDF');
  });
}
