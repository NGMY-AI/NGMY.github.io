import 'dart:typed_data';

Future<bool> ngmyInvoicePrintPdfDirectImpl(
  Uint8List pdfBytes,
  String filename, {
  bool preferPrintDialog = false,
}) async =>
    false;

Future<bool> ngmyInvoiceOpenPdfInBrowserImpl(Uint8List pdfBytes) async => false;

Future<String> downloadNgmyPdfBytesImpl(Uint8List pdfBytes, String filename) async =>
    'PDF download is only available in the web app.';
