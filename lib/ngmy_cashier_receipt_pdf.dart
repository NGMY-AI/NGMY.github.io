import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart' show Offset;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_cashier_iou.dart';
import 'ngmy_invoice_print.dart';
import 'ngmy_worksheet_helpers.dart';

Future<Uint8List?> _signaturePng(List<Offset?> points) async {
  if (!points.any((p) => p != null)) return null;

  // Match on-screen receipt proportions (readable, not oversized).
  const w = 520.0;
  const h = 160.0;
  final normalized = points.every((p) => p == null || (p.dx.abs() <= 1.5 && p.dy.abs() <= 1.5));

  final recorder = ui.PictureRecorder();
  final canvas = ui.Canvas(recorder, const ui.Rect.fromLTWH(0, 0, w, h));
  canvas.drawRect(
    const ui.Rect.fromLTWH(0, 0, w, h),
    ui.Paint()..color = const ui.Color(0xFFFFFFFF),
  );
  final paint = ui.Paint()
    ..color = const ui.Color(0xFF0F172A)
    ..strokeWidth = 3.6
    ..style = ui.PaintingStyle.stroke
    ..strokeCap = ui.StrokeCap.round
    ..strokeJoin = ui.StrokeJoin.round;

  Offset mapPoint(Offset p) {
    if (normalized) return Offset(p.dx * w, p.dy * h);
    // Legacy pixel strokes — fit into the pad like the live preview.
    return p;
  }

  if (!normalized) {
    double minX = double.infinity, minY = double.infinity;
    double maxX = 0, maxY = 0;
    for (final p in points) {
      if (p == null) continue;
      if (p.dx < minX) minX = p.dx;
      if (p.dy < minY) minY = p.dy;
      if (p.dx > maxX) maxX = p.dx;
      if (p.dy > maxY) maxY = p.dy;
    }
    final srcW = (maxX - minX).clamp(1.0, 10000.0);
    final srcH = (maxY - minY).clamp(1.0, 10000.0);
    final scale = (w * 0.92 / srcW).clamp(0.0, h * 0.92 / srcH);
    final ox = (w - srcW * scale) / 2;
    final oy = (h - srcH * scale) / 2;
    final path = ui.Path();
    var started = false;
    for (final p in points) {
      if (p == null) {
        started = false;
        continue;
      }
      final x = ox + (p.dx - minX) * scale;
      final y = oy + (p.dy - minY) * scale;
      if (!started) {
        path.moveTo(x, y);
        started = true;
      } else {
        path.lineTo(x, y);
      }
    }
    canvas.drawPath(path, paint);
  } else {
    final path = ui.Path();
    var started = false;
    for (final p in points) {
      if (p == null) {
        started = false;
        continue;
      }
      final mapped = mapPoint(p);
      if (!started) {
        path.moveTo(mapped.dx, mapped.dy);
        started = true;
      } else {
        path.lineTo(mapped.dx, mapped.dy);
      }
    }
    canvas.drawPath(path, paint);
  }

  final picture = recorder.endRecording();
  final image = await picture.toImage(w.toInt(), h.toInt());
  final bd = await image.toByteData(format: ui.ImageByteFormat.png);
  return bd?.buffer.asUint8List();
}

Future<Uint8List> ngmyBuildCashierIouReceiptPdf(NgmyCashierIou iou) async {
  final missed = iou.missedCalendarDates();
  final paidOnTime = iou.paidOnTime;
  final statusColor = iou.isPaid
      ? (paidOnTime ? PdfColors.green800 : PdfColors.red700)
      : (iou.isOverdue ? PdfColors.red700 : PdfColors.orange700);
  final sigBytes = await _signaturePng(iou.signaturePoints);
  pw.MemoryImage? sigImage;
  if (sigBytes != null) sigImage = pw.MemoryImage(sigBytes);

  final doc = pw.Document(
    title: 'Payment receipt — ${iou.personName}',
    creator: 'NGMY Cashier',
  );

  pw.Widget kv(
    String label,
    String value, {
    PdfColor? valueColor,
    bool bold = false,
  }) {
    return pw.Padding(
      padding: const pw.EdgeInsets.symmetric(vertical: 4),
      child: pw.Row(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.SizedBox(
            width: 130,
            child: pw.Text(
              label,
              style: pw.TextStyle(
                fontSize: 10.5,
                fontWeight: pw.FontWeight.bold,
                color: PdfColors.grey700,
              ),
            ),
          ),
          pw.Expanded(
            child: pw.Text(
              value,
              style: pw.TextStyle(
                fontSize: 11,
                fontWeight: bold ? pw.FontWeight.bold : pw.FontWeight.normal,
                color: valueColor ?? PdfColors.grey900,
              ),
            ),
          ),
        ],
      ),
    );
  }

  String paidValue;
  PdfColor paidColor;
  if (!iou.isPaid) {
    paidValue = 'Not paid yet';
    paidColor = PdfColors.orange700;
  } else {
    paidValue = ngmyCashierFmtDate(iou.paidAt, withTime: true);
    paidColor = paidOnTime ? PdfColors.green800 : PdfColors.red700;
  }

  doc.addPage(
    pw.MultiPage(
      pageFormat: PdfPageFormat.letter,
      margin: const pw.EdgeInsets.all(40),
      build: (ctx) => [
        pw.Center(
          child: pw.Container(
            padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: pw.BoxDecoration(
              color: PdfColors.green50,
              borderRadius: pw.BorderRadius.circular(999),
            ),
            child: pw.Text(
              'Cashier',
              style: pw.TextStyle(
                fontSize: 10,
                fontWeight: pw.FontWeight.bold,
                color: PdfColors.green800,
              ),
            ),
          ),
        ),
        pw.SizedBox(height: 8),
        pw.Center(
          child: pw.Text(
            'Debt receipt',
            style: pw.TextStyle(fontSize: 22, fontWeight: pw.FontWeight.bold),
          ),
        ),
        pw.SizedBox(height: 3),
        pw.Center(
          child: pw.Text(
            ngmyCashierFmtDate(DateTime.now(), withTime: true),
            style: const pw.TextStyle(fontSize: 9.5, color: PdfColors.grey600),
          ),
        ),
        pw.SizedBox(height: 16),
        pw.Container(
          width: double.infinity,
          padding: const pw.EdgeInsets.all(14),
          decoration: pw.BoxDecoration(
            color: PdfColors.grey100,
            borderRadius: pw.BorderRadius.circular(12),
          ),
          child: pw.Column(
            children: [
              pw.Text(
                iou.personName.trim().isEmpty ? '—' : iou.personName.trim(),
                style: pw.TextStyle(fontSize: 14, fontWeight: pw.FontWeight.bold),
              ),
              pw.SizedBox(height: 2),
              pw.Text(
                'Person who owes',
                style: const pw.TextStyle(fontSize: 9.5, color: PdfColors.grey600),
              ),
              pw.SizedBox(height: 10),
              pw.Container(
                width: double.infinity,
                padding: const pw.EdgeInsets.symmetric(vertical: 10),
                decoration: pw.BoxDecoration(
                  color: PdfColors.white,
                  borderRadius: pw.BorderRadius.circular(10),
                ),
                child: pw.Column(
                  children: [
                    pw.Text(
                      'Amount owed',
                      style: const pw.TextStyle(
                        fontSize: 9.5,
                        color: PdfColors.grey600,
                      ),
                    ),
                    pw.SizedBox(height: 2),
                    pw.Text(
                      ngmyFormatMoney(iou.amount),
                      style: pw.TextStyle(
                        fontSize: 20,
                        fontWeight: pw.FontWeight.bold,
                        color: PdfColors.green800,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        pw.SizedBox(height: 10),
        pw.Container(
          width: double.infinity,
          padding: const pw.EdgeInsets.all(12),
          decoration: pw.BoxDecoration(
            border: pw.Border.all(color: PdfColors.grey300, width: 0.9),
            borderRadius: pw.BorderRadius.circular(12),
          ),
          child: pw.Column(
            crossAxisAlignment: pw.CrossAxisAlignment.start,
            children: [
              kv('Original due', ngmyCashierFmtDate(iou.originalDueDate)),
              kv('Current due', ngmyCashierFmtDate(iou.dueDate)),
              pw.SizedBox(height: 6),
              pw.Container(
                width: double.infinity,
                padding: const pw.EdgeInsets.symmetric(
                  horizontal: 10,
                  vertical: 8,
                ),
                decoration: pw.BoxDecoration(
                  border: pw.Border.all(color: statusColor, width: 1.1),
                  borderRadius: pw.BorderRadius.circular(8),
                ),
                child: pw.Center(
                  child: pw.Text(
                    iou.statusLabel,
                    style: pw.TextStyle(
                      color: statusColor,
                      fontWeight: pw.FontWeight.bold,
                      fontSize: 11,
                      letterSpacing: 0.5,
                    ),
                  ),
                ),
              ),
              pw.SizedBox(height: 10),
              kv('Date paid', paidValue, valueColor: paidColor, bold: true),
              if (iou.isPaid && paidOnTime)
                kv(
                  'Missed days',
                  'None — paid on time',
                  valueColor: PdfColors.green800,
                  bold: true,
                )
              else if (missed.isEmpty)
                kv(
                  'Missed days',
                  'None yet',
                  valueColor: PdfColors.green800,
                  bold: true,
                )
              else ...[
                pw.SizedBox(height: 4),
                pw.Text(
                  'Missed days (${missed.length})',
                  style: pw.TextStyle(
                    fontSize: 10.5,
                    fontWeight: pw.FontWeight.bold,
                    color: PdfColors.grey700,
                  ),
                ),
                pw.SizedBox(height: 6),
                pw.Wrap(
                  spacing: 5,
                  runSpacing: 5,
                  children: missed
                      .map(
                        (d) => pw.Container(
                          padding: const pw.EdgeInsets.symmetric(
                            horizontal: 7,
                            vertical: 3,
                          ),
                          decoration: pw.BoxDecoration(
                            border: pw.Border.all(
                              color: PdfColors.red700,
                              width: 0.7,
                            ),
                            borderRadius: pw.BorderRadius.circular(999),
                          ),
                          child: pw.Text(
                            ngmyCashierFmtDate(d),
                            style: pw.TextStyle(
                              color: PdfColors.red700,
                              fontSize: 9.5,
                              fontWeight: pw.FontWeight.bold,
                            ),
                          ),
                        ),
                      )
                      .toList(),
                ),
              ],
              if (iou.notes.trim().isNotEmpty) ...[
                pw.SizedBox(height: 8),
                kv('Notes', iou.notes.trim()),
              ],
            ],
          ),
        ),
        if (sigImage != null) ...[
          pw.SizedBox(height: 16),
          pw.Text(
            'Debtor signature',
            style: pw.TextStyle(
              fontSize: 10,
              fontWeight: pw.FontWeight.bold,
              color: PdfColors.grey700,
            ),
          ),
          pw.SizedBox(height: 6),
          pw.Container(
            height: 82,
            width: double.infinity,
            padding: const pw.EdgeInsets.all(6),
            decoration: pw.BoxDecoration(
              border: pw.Border.all(color: PdfColors.grey400, width: 1),
              borderRadius: pw.BorderRadius.circular(6),
            ),
            child: pw.Image(sigImage, fit: pw.BoxFit.contain),
          ),
        ],
        pw.SizedBox(height: 18),
        pw.Text(
          iou.isPaid
              ? (paidOnTime
                  ? 'Payment was received on time.'
                  : 'Payment was received after one or more missed days (shown in red).')
              : 'This debt is still unpaid. Missed days appear in red when the due date has passed.',
          style: const pw.TextStyle(fontSize: 9.5, color: PdfColors.grey700),
        ),
        pw.SizedBox(height: 18),
        pw.Center(
          child: pw.Text(
            'NGMY.ORG',
            style: pw.TextStyle(
              fontSize: 14,
              fontWeight: pw.FontWeight.bold,
              letterSpacing: 1.8,
              color: PdfColors.green800,
            ),
          ),
        ),
      ],
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
