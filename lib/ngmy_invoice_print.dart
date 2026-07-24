import 'dart:typed_data';

import 'ngmy_invoice_print_stub.dart' if (dart.library.html) 'ngmy_invoice_print_web.dart';

Future<bool> ngmyInvoiceOpenPdfInBrowser(Uint8List pdfBytes) =>
    ngmyInvoiceOpenPdfInBrowserImpl(pdfBytes);
