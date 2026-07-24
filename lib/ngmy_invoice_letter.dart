import 'dart:convert';
import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

/// US Letter PDF — same page size as NGMY Slides / Documents export, with the
/// invoice image stretched to fill the sheet so a printer has nothing to re-fit.
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

/// Letter-size HTML print view: full paper, invoice image fills the page.
String ngmyInvoiceBuildLetterPrintHtml(Uint8List pngBytes, {required String title}) {
  final b64 = base64Encode(pngBytes);
  final safeTitle = title
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  return '''
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>$safeTitle</title>
<style>
  @page { size: letter; margin: 0; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    width: 8.5in;
    height: 11in;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  img {
    display: block;
    width: 8.5in;
    height: 11in;
    object-fit: fill;
  }
  @media print {
    html, body { width: 8.5in; height: 11in; }
    img { width: 8.5in; height: 11in; object-fit: fill; }
  }
</style>
</head>
<body>
<img src="data:image/png;base64,$b64" alt="Invoice"/>
<script>
  try { document.title = 'NGMY.ORG'; } catch (e) {}
  window.addEventListener('load', function () {
    setTimeout(function () { try { window.print(); } catch (e) {} }, 300);
  });
</script>
</body>
</html>
''';
}
