import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_civic_member_report.dart';

Future<Uint8List> ngmyBuildCivicMemberReportPdfBytes(NgmyCivicMemberReportData data) async {
  final doc = pw.Document(
    title: 'Civic Registry Member Report — ${data.memberName}',
    creator: 'NGMY',
  );

  pw.Widget sectionTitle(String title) => pw.Padding(
        padding: const pw.EdgeInsets.only(top: 14, bottom: 6),
        child: pw.Text(
          title,
          style: pw.TextStyle(fontSize: 13, fontWeight: pw.FontWeight.bold, color: PdfColors.blue900),
        ),
      );

  pw.Widget kvTable(Map<String, String> fields) {
    if (fields.isEmpty) {
      return pw.Text('No records.', style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600));
    }
    return pw.Table(
      border: pw.TableBorder.all(color: PdfColors.grey400, width: 0.6),
      columnWidths: {
        0: const pw.FlexColumnWidth(1.2),
        1: const pw.FlexColumnWidth(2.2),
      },
      children: fields.entries
          .map(
            (e) => pw.TableRow(
              children: [
                pw.Padding(
                  padding: const pw.EdgeInsets.all(6),
                  child: pw.Text(e.key, style: pw.TextStyle(fontSize: 10, fontWeight: pw.FontWeight.bold)),
                ),
                pw.Padding(
                  padding: const pw.EdgeInsets.all(6),
                  child: pw.Text(e.value, style: const pw.TextStyle(fontSize: 10)),
                ),
              ],
            ),
          )
          .toList(),
    );
  }

  pw.Widget bulletList(List<String> items, String empty) {
    if (items.isEmpty) {
      return pw.Text(empty, style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600));
    }
    return pw.Column(
      crossAxisAlignment: pw.CrossAxisAlignment.start,
      children: items
          .map(
            (e) => pw.Padding(
              padding: const pw.EdgeInsets.only(bottom: 3),
              child: pw.Text('• $e', style: const pw.TextStyle(fontSize: 10)),
            ),
          )
          .toList(),
    );
  }

  doc.addPage(
    pw.MultiPage(
      pageFormat: PdfPageFormat.letter,
      margin: const pw.EdgeInsets.fromLTRB(36, 36, 36, 40),
      footer: (ctx) => pw.Align(
        alignment: pw.Alignment.centerRight,
        child: pw.Text(
          'NGMY.ORG · Page ${ctx.pageNumber} of ${ctx.pagesCount}',
          style: const pw.TextStyle(fontSize: 8, color: PdfColors.grey600),
        ),
      ),
      build: (ctx) => [
        pw.Text(
          'FULL MEMBER REPORT',
          style: pw.TextStyle(fontSize: 18, fontWeight: pw.FontWeight.bold, color: PdfColors.blueGrey900),
        ),
        pw.SizedBox(height: 4),
        pw.Text(data.memberName, style: pw.TextStyle(fontSize: 14, fontWeight: pw.FontWeight.bold)),
        pw.SizedBox(height: 2),
        pw.Text('Generated: ${data.generatedAt}', style: const pw.TextStyle(fontSize: 9, color: PdfColors.grey700)),
        sectionTitle('Official Record'),
        kvTable(data.officialRecord),
        sectionTitle('Contact'),
        kvTable(data.contact),
        sectionTitle('Activity'),
        kvTable(data.activity),
        sectionTitle('Contribution Records'),
        bulletList(data.contributions, 'No contribution records.'),
        sectionTitle('Claim Records'),
        bulletList(data.claims, 'No claim records.'),
      ],
    ),
  );

  return doc.save();
}
