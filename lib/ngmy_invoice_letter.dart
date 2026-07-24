import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// One US Letter page with the invoice stretched edge-to-edge (no margins).
Future<Uint8List> ngmyInvoiceBuildLetterPdf(Uint8List pngBytes) async {
  final doc = pw.Document(title: 'NGMY Invoice', creator: 'NGMY');
  const pageFormat = PdfPageFormat.letter;
  final image = pw.MemoryImage(pngBytes);
  doc.addPage(
    pw.Page(
      pageFormat: pageFormat,
      margin: pw.EdgeInsets.zero,
      build: (_) => pw.SizedBox(
        width: pageFormat.width,
        height: pageFormat.height,
        child: pw.Image(image, fit: pw.BoxFit.fill),
      ),
    ),
  );
  return doc.save();
}
