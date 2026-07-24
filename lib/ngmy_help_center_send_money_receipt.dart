import 'dart:typed_data';

import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_help_center.dart';

/// Professional NGMY money-transfer quote receipt (no Cash App tag).
class NgmyHelpCenterSendMoneyReceipt {
  const NgmyHelpCenterSendMoneyReceipt({
    required this.reference,
    required this.createdAt,
    required this.senderName,
    required this.senderPhone,
    required this.senderEmail,
    required this.receiverName,
    required this.receiverPhone,
    required this.receiverCountry,
    required this.transferAmount,
    required this.serviceFee,
    required this.recipientGets,
    required this.feeDescription,
    this.category = 'Serving locally',
    this.serviceName = 'Send Money',
  });

  final String reference;
  final DateTime createdAt;
  final String senderName;
  final String senderPhone;
  final String senderEmail;
  final String receiverName;
  final String receiverPhone;
  final String receiverCountry;
  final double transferAmount;
  final double serviceFee;
  final double recipientGets;
  final String feeDescription;
  final String category;
  final String serviceName;

  factory NgmyHelpCenterSendMoneyReceipt.fromForm({
    required String reference,
    required String senderName,
    required String senderPhone,
    required String senderEmail,
    required String receiverName,
    required String receiverPhone,
    required String receiverCountry,
    required String transferAmountText,
    String serviceName = 'Send Money',
  }) {
    final amount = double.tryParse(transferAmountText.trim()) ?? 0;
    final fee = ngmyHelpCenterMoneyTransferFee(amount);
    return NgmyHelpCenterSendMoneyReceipt(
      reference: reference,
      createdAt: DateTime.now(),
      senderName: senderName.trim(),
      senderPhone: senderPhone.trim(),
      senderEmail: senderEmail.trim(),
      receiverName: receiverName.trim(),
      receiverPhone: receiverPhone.trim(),
      receiverCountry: receiverCountry.trim(),
      transferAmount: amount,
      serviceFee: fee,
      recipientGets: amount - fee,
      feeDescription: ngmyHelpCenterMoneyTransferFeeDescription(amount),
      serviceName: serviceName,
    );
  }

  String get formattedDate {
    final d = createdAt;
    final mm = d.month.toString().padLeft(2, '0');
    final dd = d.day.toString().padLeft(2, '0');
    final hh = d.hour.toString().padLeft(2, '0');
    final min = d.minute.toString().padLeft(2, '0');
    return '${d.year}-$mm-$dd $hh:$min';
  }

  String get pdfFilename {
    final safeRef = reference.replaceAll(RegExp(r'[^\w\-]+'), '-');
    return 'NGMY-Receipt-$safeRef.pdf';
  }

  String toShareText() {
    final buf = StringBuffer()
      ..writeln('NGMY MONEY TRANSFER RECEIPT')
      ..writeln('━━━━━━━━━━━━━━━━━━━━━━━━')
      ..writeln('Reference: $reference')
      ..writeln('Date: $formattedDate')
      ..writeln('Category: $category')
      ..writeln('Service: $serviceName')
      ..writeln()
      ..writeln('SENDER')
      ..writeln('Name: ${senderName.isEmpty ? '—' : senderName}')
      ..writeln('Phone: ${senderPhone.isEmpty ? '—' : senderPhone}');
    if (senderEmail.isNotEmpty) buf.writeln('Email: $senderEmail');
    buf
      ..writeln()
      ..writeln('RECEIVER')
      ..writeln('Full name: $receiverName')
      ..writeln('Phone: $receiverPhone')
      ..writeln('Destination country: $receiverCountry')
      ..writeln()
      ..writeln('TRANSFER SUMMARY')
      ..writeln('Transfer amount: \$${transferAmount.toStringAsFixed(2)}')
      ..writeln('$feeDescription: \$${serviceFee.toStringAsFixed(2)}')
      ..writeln('Recipient receives: \$${recipientGets.toStringAsFixed(2)}')
      ..writeln()
      ..writeln('This is a fee quote from NGMY Help Center. Confirm amounts before sending payment.')
      ..writeln('NGMY.ORG');
    return buf.toString().trim();
  }
}

Future<Uint8List> ngmyBuildHelpCenterSendMoneyReceiptPdf(NgmyHelpCenterSendMoneyReceipt receipt) async {
  final doc = pw.Document(title: 'NGMY Money Transfer Receipt', creator: 'NGMY');

  pw.Widget line(String label, String value, {bool bold = false}) {
    return pw.Padding(
      padding: const pw.EdgeInsets.only(bottom: 5),
      child: pw.Row(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.SizedBox(
            width: 118,
            child: pw.Text(label, style: const pw.TextStyle(fontSize: 9, color: PdfColors.grey700)),
          ),
          pw.Expanded(
            child: pw.Text(
              value,
              style: pw.TextStyle(fontSize: 10, fontWeight: bold ? pw.FontWeight.bold : pw.FontWeight.normal),
            ),
          ),
        ],
      ),
    );
  }

  pw.Widget section(String title, List<pw.Widget> rows) {
    return pw.Column(
      crossAxisAlignment: pw.CrossAxisAlignment.stretch,
      children: [
        pw.Container(
          width: double.infinity,
          padding: const pw.EdgeInsets.symmetric(horizontal: 8, vertical: 5),
          color: PdfColors.blueGrey900,
          child: pw.Text(
            title,
            style: pw.TextStyle(fontSize: 9, fontWeight: pw.FontWeight.bold, color: PdfColors.white),
          ),
        ),
        pw.Container(
          width: double.infinity,
          padding: const pw.EdgeInsets.all(10),
          decoration: pw.BoxDecoration(
            border: pw.Border.all(color: PdfColors.grey400, width: 0.6),
          ),
          child: pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.stretch, children: rows),
        ),
      ],
    );
  }

  doc.addPage(
    pw.Page(
      pageFormat: PdfPageFormat.a4,
      margin: const pw.EdgeInsets.fromLTRB(36, 32, 36, 36),
      build: (ctx) {
        return pw.Column(
          crossAxisAlignment: pw.CrossAxisAlignment.stretch,
          children: [
            pw.Row(
              mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                pw.Column(
                  crossAxisAlignment: pw.CrossAxisAlignment.start,
                  children: [
                    pw.Text(
                      'NGMY',
                      style: pw.TextStyle(fontSize: 22, fontWeight: pw.FontWeight.bold, color: PdfColors.cyan800),
                    ),
                    pw.Text(
                      'Money Transfer Receipt',
                      style: pw.TextStyle(fontSize: 11, color: PdfColors.grey700),
                    ),
                  ],
                ),
                pw.Column(
                  crossAxisAlignment: pw.CrossAxisAlignment.end,
                  children: [
                    pw.Text('Ref: ${receipt.reference}', style: pw.TextStyle(fontSize: 9, fontWeight: pw.FontWeight.bold)),
                    pw.SizedBox(height: 2),
                    pw.Text(receipt.formattedDate, style: const pw.TextStyle(fontSize: 8, color: PdfColors.grey600)),
                  ],
                ),
              ],
            ),
            pw.SizedBox(height: 14),
            pw.Container(
              padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: pw.BoxDecoration(
                color: PdfColors.cyan50,
                border: pw.Border.all(color: PdfColors.cyan300, width: 0.8),
              ),
              child: pw.Row(
                children: [
                  pw.Text('Category: ', style: pw.TextStyle(fontSize: 9, fontWeight: pw.FontWeight.bold)),
                  pw.Text(receipt.category, style: const pw.TextStyle(fontSize: 9)),
                  pw.Spacer(),
                  pw.Text('Service: ${receipt.serviceName}', style: const pw.TextStyle(fontSize: 9)),
                ],
              ),
            ),
            pw.SizedBox(height: 14),
            section('Sender', [
              line('Name', receipt.senderName.isEmpty ? '—' : receipt.senderName),
              line('Phone', receipt.senderPhone.isEmpty ? '—' : receipt.senderPhone),
              if (receipt.senderEmail.isNotEmpty) line('Email', receipt.senderEmail),
            ]),
            pw.SizedBox(height: 12),
            section('Receiver', [
              line('Full name', receipt.receiverName, bold: true),
              line('Phone', receipt.receiverPhone),
              line('Destination country', receipt.receiverCountry, bold: true),
            ]),
            pw.SizedBox(height: 12),
            section('Transfer summary', [
              line('Transfer amount', '\$${receipt.transferAmount.toStringAsFixed(2)}'),
              line(receipt.feeDescription, '\$${receipt.serviceFee.toStringAsFixed(2)}'),
              pw.Divider(color: PdfColors.grey400, height: 12),
              line('Recipient receives', '\$${receipt.recipientGets.toStringAsFixed(2)}', bold: true),
            ]),
            pw.Spacer(),
            pw.Text(
              'This receipt is a fee quote from NGMY Help Center. Please review the transfer amount, destination, and service fees before payment. Cash App details are not shown on this receipt.',
              style: const pw.TextStyle(fontSize: 8, color: PdfColors.grey700, lineSpacing: 1.3),
            ),
            pw.SizedBox(height: 8),
            pw.Align(
              alignment: pw.Alignment.centerRight,
              child: pw.Text('NGMY.ORG', style: pw.TextStyle(fontSize: 9, fontWeight: pw.FontWeight.bold, color: PdfColors.cyan800)),
            ),
          ],
        );
      },
    ),
  );

  return doc.save();
}
