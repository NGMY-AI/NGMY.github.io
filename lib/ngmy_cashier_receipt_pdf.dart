import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_cashier_iou.dart';
import 'ngmy_invoice_print.dart';
import 'ngmy_worksheet_helpers.dart';

String _fmtDate(DateTime? d) {
  if (d == null) return '—';
  final local = d.toLocal();
  final m = local.month.toString().padLeft(2, '0');
  final day = local.day.toString().padLeft(2, '0');
  return '${local.year}-$m-$day';
}

Future<Uint8List> ngmyBuildCashierIouReceiptPdf(NgmyCashierIou iou) async {
  final missed = iou.missedDays();
  final doc = pw.Document(
    title: 'Payment receipt — ${iou.personName}',
    creator: 'NGMY Cashier',
  );

  pw.Widget row(String label, String value, {bool bold = false}) {
    return pw.Padding(
      padding: const pw.EdgeInsets.symmetric(vertical: 5),
      child: pw.Row(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.SizedBox(
            width: 160,
            child: pw.Text(
              label,
              style: pw.TextStyle(
                fontSize: 11,
                fontWeight: pw.FontWeight.bold,
                color: PdfColors.grey800,
              ),
            ),
          ),
          pw.Expanded(
            child: pw.Text(
              value,
              style: pw.TextStyle(
                fontSize: 11,
                fontWeight: bold ? pw.FontWeight.bold : pw.FontWeight.normal,
              ),
            ),
          ),
        ],
      ),
    );
  }

  doc.addPage(
    pw.Page(
      pageFormat: PdfPageFormat.letter,
      margin: const pw.EdgeInsets.all(40),
      build: (ctx) => pw.Column(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.Text(
            'NGMY CASHIER',
            style: pw.TextStyle(
              fontSize: 11,
              fontWeight: pw.FontWeight.bold,
              letterSpacing: 1.2,
              color: PdfColors.green800,
            ),
          ),
          pw.SizedBox(height: 6),
          pw.Text(
            'Payment / Debt Receipt',
            style: pw.TextStyle(fontSize: 22, fontWeight: pw.FontWeight.bold),
          ),
          pw.SizedBox(height: 4),
          pw.Text(
            'Printed ${_fmtDate(DateTime.now())}',
            style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey700),
          ),
          pw.SizedBox(height: 18),
          pw.Container(
            width: double.infinity,
            padding: const pw.EdgeInsets.all(16),
            decoration: pw.BoxDecoration(
              border: pw.Border.all(color: PdfColors.grey400, width: 1),
              borderRadius: pw.BorderRadius.circular(8),
            ),
            child: pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                row('Person who owes', iou.personName.trim().isEmpty
                    ? '—'
                    : iou.personName.trim(), bold: true),
                row('Amount owed', ngmyFormatMoney(iou.amount), bold: true),
                row('Original due date', _fmtDate(iou.originalDueDate)),
                row('Current due date', _fmtDate(iou.dueDate)),
                row('Days missed', '$missed'),
                row(
                  'Status',
                  iou.isPaid ? 'PAID' : 'UNPAID',
                  bold: true,
                ),
                row('Date paid', _fmtDate(iou.paidAt)),
                if (iou.notes.trim().isNotEmpty)
                  row('Notes', iou.notes.trim()),
              ],
            ),
          ),
          pw.SizedBox(height: 22),
          pw.Text(
            iou.isPaid
                ? 'This receipt confirms payment was marked received in NGMY Cashier.'
                : 'This receipt shows the debt is still unpaid, including missed days counted from the due date (extensions keep prior missed days).',
            style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey700),
          ),
          pw.Spacer(),
          pw.Divider(color: PdfColors.grey400),
          pw.SizedBox(height: 6),
          pw.Text(
            'NGMY.ORG · Stored locally on your device',
            style: const pw.TextStyle(fontSize: 9, color: PdfColors.grey600),
          ),
        ],
      ),
    ),
  );

  return doc.save();
}

Future<bool> ngmyPrintCashierIouReceipt(NgmyCashierIou iou) async {
  final bytes = await ngmyBuildCashierIouReceiptPdf(iou);
  var safeName =
      iou.personName.trim().replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_');
  if (safeName.length > 40) safeName = safeName.substring(0, 40);
  final filename =
      'ngmy_cashier_receipt_${safeName.isEmpty ? iou.id : safeName}.pdf';
  return ngmyInvoicePrintPdfDirect(bytes, filename);
}
