import 'dart:typed_data';

import 'ngmy_invoice_print_stub.dart' if (dart.library.html) 'ngmy_invoice_print_web.dart';

/// [preferPrintDialog] — when true, opens the browser print dialog before the share sheet
/// (best for civic roster / documents where Print is the main action).
Future<bool> ngmyInvoicePrintPdfDirect(
  Uint8List pdfBytes,
  String filename, {
  bool preferPrintDialog = false,
}) =>
    ngmyInvoicePrintPdfDirectImpl(pdfBytes, filename, preferPrintDialog: preferPrintDialog);

Future<bool> ngmyInvoiceOpenPdfInBrowser(Uint8List pdfBytes) =>
    ngmyInvoiceOpenPdfInBrowserImpl(pdfBytes);
