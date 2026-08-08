import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// One printable roster row.
class NgmyCivicRosterRow {
  const NgmyCivicRosterRow({
    required this.name,
    required this.phone,
    required this.address,
    required this.familyLabel,
  });

  final String name;
  final String phone;
  final String address;
  final String familyLabel;
}

/// Builds a letter-size PDF where each page is a fully closed framed table.
/// Rows are packed to fill each sheet before a new page starts — no browser
/// HTML print fragmentation / hanging vertical lines.
Future<Uint8List> ngmyBuildCivicRosterPdfBytes({
  required String state,
  required String titleLine1,
  required String titleLine2,
  required String dateStr,
  required String timeStr,
  required List<NgmyCivicRosterRow> rows,
}) async {
  final doc = pw.Document(title: 'NGMY.ORG', creator: 'NGMY');
  const format = PdfPageFormat.letter;
  const margin = 26.0;
  final contentWidth = format.width - (margin * 2);
  final contentHeight = format.height - (margin * 2);

  // Measured layout budgets (points) so a page never overflows mid-row.
  const mastheadH = 70.0;
  const continuedH = 16.0;
  const tableHeaderH = 20.0;
  const rowH = 17.5;
  const safety = 8.0;

  final firstPageRows =
      ((contentHeight - mastheadH - tableHeaderH - safety) / rowH).floor().clamp(12, 40);
  final nextPageRows =
      ((contentHeight - continuedH - tableHeaderH - safety) / rowH).floor().clamp(16, 48);

  pw.Widget cell(
    String text, {
    required pw.FontWeight weight,
    required double size,
    pw.TextAlign align = pw.TextAlign.left,
  }) {
    return pw.Padding(
      padding: const pw.EdgeInsets.symmetric(horizontal: 5, vertical: 3.5),
      child: pw.Text(
        text,
        maxLines: 1,
        overflow: pw.TextOverflow.clip,
        textAlign: align,
        style: pw.TextStyle(fontSize: size, fontWeight: weight),
      ),
    );
  }

  pw.Table rosterTable(List<NgmyCivicRosterRow> pageRows) {
    return pw.Table(
      border: pw.TableBorder.all(color: PdfColors.grey600, width: 0.9),
      defaultVerticalAlignment: pw.TableCellVerticalAlignment.middle,
      columnWidths: {
        0: pw.FixedColumnWidth(contentWidth * 0.22),
        1: pw.FixedColumnWidth(contentWidth * 0.15),
        2: pw.FixedColumnWidth(contentWidth * 0.49),
        3: pw.FixedColumnWidth(contentWidth * 0.14),
      },
      children: [
        pw.TableRow(
          decoration: const pw.BoxDecoration(color: PdfColors.grey200),
          children: [
            cell('Name', weight: pw.FontWeight.bold, size: 10),
            cell('Phone', weight: pw.FontWeight.bold, size: 10),
            cell('Address', weight: pw.FontWeight.bold, size: 10),
            cell('Family size', weight: pw.FontWeight.bold, size: 9, align: pw.TextAlign.center),
          ],
        ),
        ...pageRows.map(
          (r) => pw.TableRow(
            children: [
              cell(r.name.isEmpty ? '—' : r.name, weight: pw.FontWeight.normal, size: 9.5),
              cell(r.phone.isEmpty ? '—' : r.phone, weight: pw.FontWeight.normal, size: 9),
              cell(r.address.isEmpty ? '—' : r.address, weight: pw.FontWeight.normal, size: 8.5),
              cell(
                r.familyLabel.isEmpty ? '—' : r.familyLabel,
                weight: pw.FontWeight.normal,
                size: 8.5,
                align: pw.TextAlign.center,
              ),
            ],
          ),
        ),
      ],
    );
  }

  pw.Widget masthead() {
    return pw.Container(
      width: contentWidth,
      padding: const pw.EdgeInsets.only(bottom: 8),
      decoration: const pw.BoxDecoration(
        border: pw.Border(bottom: pw.BorderSide(color: PdfColors.black, width: 1.6)),
      ),
      child: pw.Row(
        crossAxisAlignment: pw.CrossAxisAlignment.end,
        children: [
          pw.Expanded(
            child: pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                pw.Text(dateStr, style: pw.TextStyle(fontSize: 12, fontWeight: pw.FontWeight.bold)),
                pw.SizedBox(height: 2),
                pw.Text(timeStr, style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey700)),
              ],
            ),
          ),
          pw.Expanded(
            flex: 2,
            child: pw.Column(
              children: [
                pw.Text(
                  titleLine1,
                  textAlign: pw.TextAlign.center,
                  style: pw.TextStyle(
                    fontSize: 15,
                    fontWeight: pw.FontWeight.bold,
                    decoration: pw.TextDecoration.underline,
                  ),
                ),
                pw.Text(
                  titleLine2,
                  textAlign: pw.TextAlign.center,
                  style: pw.TextStyle(
                    fontSize: 15,
                    fontWeight: pw.FontWeight.bold,
                    decoration: pw.TextDecoration.underline,
                  ),
                ),
              ],
            ),
          ),
          pw.Expanded(
            child: pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.end,
              children: [
                pw.Text(
                  'MEMBERS',
                  style: pw.TextStyle(
                    fontSize: 8,
                    fontWeight: pw.FontWeight.bold,
                    letterSpacing: 1.2,
                    color: PdfColors.grey700,
                  ),
                ),
                pw.SizedBox(height: 2),
                pw.Text(
                  '${rows.length}',
                  style: pw.TextStyle(fontSize: 18, fontWeight: pw.FontWeight.bold),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  if (rows.isEmpty) {
    doc.addPage(
      pw.Page(
        pageFormat: format,
        margin: const pw.EdgeInsets.all(margin),
        build: (_) => pw.Center(child: pw.Text('No members in $state')),
      ),
    );
    return doc.save();
  }

  var index = 0;
  var pageNumber = 0;
  while (index < rows.length) {
    final take = pageNumber == 0 ? firstPageRows : nextPageRows;
    final end = index + take > rows.length ? rows.length : index + take;
    final chunk = rows.sublist(index, end);
    final continued = pageNumber > 0;

    doc.addPage(
      pw.Page(
        pageFormat: format,
        margin: const pw.EdgeInsets.all(margin),
        build: (_) => pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.stretch,
          children: [
            if (!continued) masthead() else
              pw.Padding(
                padding: const pw.EdgeInsets.only(bottom: 6),
                child: pw.Text(
                  'Continued · $state · ${rows.length} members',
                  style: pw.TextStyle(fontSize: 9, fontWeight: pw.FontWeight.bold, color: PdfColors.grey700),
                ),
              ),
            if (!continued) pw.SizedBox(height: 8),
            rosterTable(chunk),
          ],
        ),
      ),
    );

    index = end;
    pageNumber++;
  }

  return doc.save();
}
