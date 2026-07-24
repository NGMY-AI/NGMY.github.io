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

/// One Letter page, edge-to-edge. Uses a background image (not an &lt;img&gt;) so
/// Safari/iOS cannot paginate off the PNG's intrinsic height into a 2nd page.
String ngmyInvoiceBuildLetterPrintHtml(Uint8List pngBytes, {required String title}) {
  final b64 = base64Encode(pngBytes);
  final safeTitle = title
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  // Letter in mm — same approach as Slides print: match real paper so the OS
  // print pipeline does not re-fit and invent gutters / a second page.
  const pageWmm = 215.9;
  const pageHmm = 279.4;
  return '''
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$safeTitle</title>
<style>
  @page { size: ${pageWmm}mm ${pageHmm}mm; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: ${pageWmm}mm;
    height: ${pageHmm}mm;
    max-width: ${pageWmm}mm;
    max-height: ${pageHmm}mm;
    overflow: hidden;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    position: relative;
    width: ${pageWmm}mm;
    height: ${pageHmm}mm;
    max-width: ${pageWmm}mm;
    max-height: ${pageHmm}mm;
    overflow: hidden;
    page-break-after: avoid;
    page-break-inside: avoid;
    break-after: avoid;
    break-inside: avoid;
    /* Stretch invoice corner-to-corner — never leave letter gutters. */
    background-color: #fff;
    background-image: url(data:image/png;base64,$b64);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
  @media print {
    html, body, .page {
      width: ${pageWmm}mm !important;
      height: ${pageHmm}mm !important;
      max-width: ${pageWmm}mm !important;
      max-height: ${pageHmm}mm !important;
      overflow: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
</style>
</head>
<body>
<div class="page" role="img" aria-label="Invoice"></div>
<script>
  try { document.title = 'NGMY.ORG'; } catch (e) {}
  window.addEventListener('load', function () {
    setTimeout(function () { try { window.print(); } catch (e) {} }, 280);
  });
</script>
</body>
</html>
''';
}
