import 'dart:convert';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'ngmy_cashier_iou.dart';
import 'ngmy_cashier_receipt_pdf.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_worksheet_helpers.dart';

const _kGreen = Color(0xFF059669);
const _kRed = Color(0xFFDC2626);
const _kInk = Color(0xFF0F172A);
const _kMuted = Color(0xFF64748B);

/// Paper-style on-screen debt / payment receipt (like in-app invoices).
class NgmyCashierIouReceiptPreview extends StatelessWidget {
  const NgmyCashierIouReceiptPreview({super.key, required this.iou});

  final NgmyCashierIou iou;

  @override
  Widget build(BuildContext context) {
    final missed = iou.missedCalendarDates();
    final paidOnTime = iou.paidOnTime;
    final statusColor = iou.isPaid
        ? (paidOnTime ? _kGreen : _kRed)
        : (iou.isOverdue ? _kRed : const Color(0xFFD97706));
    final name =
        iou.personName.trim().isEmpty ? '—' : iou.personName.trim();

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: const Color(0xFFE8EEF5)),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(18, 18, 18, 16),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFFECFDF5), Color(0xFFF0FDFA), Colors.white],
              ),
            ),
            child: Column(
              children: [
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    color: _kGreen.withValues(alpha: 0.12),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.payments_rounded, size: 14, color: _kGreen),
                      SizedBox(width: 6),
                      Text(
                        'Cashier',
                        style: TextStyle(
                          color: _kGreen,
                          fontWeight: FontWeight.w800,
                          fontSize: 12,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                const Text(
                  'Debt receipt',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: _kInk,
                    fontWeight: FontWeight.w800,
                    fontSize: 22,
                    height: 1.1,
                    letterSpacing: -0.3,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  ngmyCashierFmtDate(DateTime.now(), withTime: true),
                  style: const TextStyle(
                    color: _kMuted,
                    fontSize: 11.5,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 4, 14, 14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.fromLTRB(14, 14, 14, 12),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF8FAFC),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: const Color(0xFFE2E8F0)),
                  ),
                  child: Column(
                    children: [
                      Text(
                        name,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          color: _kInk,
                          fontWeight: FontWeight.w800,
                          fontSize: 17,
                        ),
                      ),
                      const SizedBox(height: 2),
                      const Text(
                        'Person who owes',
                        style: TextStyle(
                          color: _kMuted,
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFFE2E8F0)),
                        ),
                        child: Column(
                          children: [
                            const Text(
                              'Amount owed',
                              style: TextStyle(
                                color: _kMuted,
                                fontSize: 11,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              ngmyFormatMoney(iou.amount),
                              style: const TextStyle(
                                color: _kGreen,
                                fontWeight: FontWeight.w900,
                                fontSize: 26,
                                height: 1.1,
                                letterSpacing: -0.4,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: const Color(0xFFE2E8F0)),
                  ),
                  child: Column(
                    children: [
                      _dateRow('Original due', ngmyCashierFmtDate(iou.originalDueDate)),
                      const SizedBox(height: 8),
                      _dateRow('Current due', ngmyCashierFmtDate(iou.dueDate)),
                      const SizedBox(height: 10),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(vertical: 9),
                        decoration: BoxDecoration(
                          color: statusColor.withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          iou.statusLabel,
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: statusColor,
                            fontWeight: FontWeight.w900,
                            fontSize: 12.5,
                            letterSpacing: 0.4,
                          ),
                        ),
                      ),
                      const SizedBox(height: 10),
                      _paidBlock(),
                      const SizedBox(height: 8),
                      _missedBlock(missed, paidOnTime),
                    ],
                  ),
                ),
                if (iou.notes.trim().isNotEmpty) ...[
                  const SizedBox(height: 10),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF8FAFC),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFFE2E8F0)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Notes',
                          style: TextStyle(
                            color: _kMuted,
                            fontSize: 11,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          iou.notes.trim(),
                          style: const TextStyle(
                            color: _kInk,
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                            height: 1.35,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
                if (iou.hasSignature) ...[
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF8FAFC),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFFE2E8F0)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Debtor signature',
                          style: TextStyle(
                            color: _kMuted,
                            fontSize: 11,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 6),
                        SizedBox(
                          height: 68,
                          width: double.infinity,
                          child: CustomPaint(
                            painter:
                                _CashierSignaturePainter(iou.signaturePoints),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
                const SizedBox(height: 10),
                const Text(
                  'NGMY.ORG · Local only',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: _kMuted,
                    fontSize: 10,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _dateRow(String label, String value) {
    return Row(
      children: [
        Expanded(
          child: Text(
            label,
            style: const TextStyle(
              color: _kMuted,
              fontSize: 12,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
        Text(
          value,
          style: const TextStyle(
            color: _kInk,
            fontSize: 12.5,
            fontWeight: FontWeight.w800,
          ),
        ),
      ],
    );
  }

  Widget _paidBlock() {
    if (!iou.isPaid) {
      return _coloredLine(
        label: 'Date paid',
        value: 'Not paid yet',
        color: const Color(0xFFD97706),
      );
    }
    final color = iou.paidOnTime ? _kGreen : _kRed;
    return _coloredLine(
      label: 'Date paid',
      value: ngmyCashierFmtDate(iou.paidAt, withTime: true),
      color: color,
    );
  }

  Widget _missedBlock(List<DateTime> missed, bool paidOnTime) {
    if (iou.isPaid && paidOnTime) {
      return _coloredLine(
        label: 'Missed days',
        value: 'None — paid on time',
        color: _kGreen,
      );
    }
    if (missed.isEmpty) {
      return _coloredLine(
        label: 'Missed days',
        value: 'None yet',
        color: _kGreen,
      );
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Missed days (${missed.length})',
          style: const TextStyle(
            color: _kMuted,
            fontSize: 12,
            fontWeight: FontWeight.w600,
          ),
        ),
        const SizedBox(height: 6),
        Wrap(
          spacing: 6,
          runSpacing: 6,
          children: missed
              .map(
                (d) => Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: _kRed.withValues(alpha: 0.08),
                    borderRadius: BorderRadius.circular(999),
                    border: Border.all(color: _kRed.withValues(alpha: 0.28)),
                  ),
                  child: Text(
                    ngmyCashierFmtDate(d),
                    style: const TextStyle(
                      color: _kRed,
                      fontSize: 11,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              )
              .toList(),
        ),
      ],
    );
  }

  Widget _coloredLine({
    required String label,
    required String value,
    required Color color,
  }) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: Text(
            label,
            style: const TextStyle(
              color: _kMuted,
              fontSize: 12,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
        Flexible(
          child: Text(
            value,
            textAlign: TextAlign.right,
            style: TextStyle(
              color: color,
              fontSize: 12.5,
              fontWeight: FontWeight.w900,
            ),
          ),
        ),
      ],
    );
  }
}

class _CashierSignaturePainter extends CustomPainter {
  _CashierSignaturePainter(this.points);
  final List<Offset?> points;

  @override
  void paint(Canvas canvas, Size size) {
    if (points.isEmpty) return;
    double minX = double.infinity, minY = double.infinity;
    double maxX = 0, maxY = 0;
    var any = false;
    for (final p in points) {
      if (p == null) continue;
      any = true;
      if (p.dx < minX) minX = p.dx;
      if (p.dy < minY) minY = p.dy;
      if (p.dx > maxX) maxX = p.dx;
      if (p.dy > maxY) maxY = p.dy;
    }
    if (!any) return;
    final srcW = (maxX - minX).clamp(1.0, 10000.0);
    final srcH = (maxY - minY).clamp(1.0, 10000.0);
    final scale =
        (size.width * 0.85 / srcW).clamp(0.0, size.height * 0.7 / srcH);
    final ox = (size.width - srcW * scale) / 2;
    final oy = (size.height - srcH * scale) / 2;

    final paint = Paint()
      ..color = _kInk
      ..strokeWidth = 2.2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    final path = Path();
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
  }

  @override
  bool shouldRepaint(covariant _CashierSignaturePainter oldDelegate) =>
      oldDelegate.points != points;
}

Future<void> showNgmyCashierReceiptViewer(
  BuildContext context, {
  required NgmyCashierIou iou,
}) async {
  final previewKey = GlobalKey();
  await showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.55),
    builder: (ctx) {
      final maxH = MediaQuery.sizeOf(ctx).height * 0.9;
      return Dialog(
        backgroundColor: Colors.transparent,
        elevation: 0,
        insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: 380, maxHeight: maxH),
          child: Material(
            color: const Color(0xFF111827),
            borderRadius: BorderRadius.circular(26),
            child: Padding(
              padding: const EdgeInsets.fromLTRB(10, 8, 10, 10),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Align(
                    alignment: Alignment.centerRight,
                    child: IconButton(
                      visualDensity: VisualDensity.compact,
                      onPressed: () => Navigator.pop(ctx),
                      icon: const Icon(
                        Icons.close_rounded,
                        color: Colors.white70,
                        size: 22,
                      ),
                    ),
                  ),
                  Flexible(
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          RepaintBoundary(
                            key: previewKey,
                            child: NgmyCashierIouReceiptPreview(iou: iou),
                          ),
                          const SizedBox(height: 10),
                          Row(
                            children: [
                              Expanded(
                                child: OutlinedButton.icon(
                                  onPressed: () async {
                                    final boundary = previewKey.currentContext
                                            ?.findRenderObject()
                                        as RenderRepaintBoundary?;
                                    if (boundary == null) return;
                                    final image =
                                        await boundary.toImage(pixelRatio: 2.5);
                                    final data = await image.toByteData(
                                      format: ui.ImageByteFormat.png,
                                    );
                                    if (data == null) return;
                                    final bytes = data.buffer.asUint8List();
                                    var name = iou.personName
                                        .trim()
                                        .replaceAll(
                                          RegExp(r'[^a-zA-Z0-9_-]+'),
                                          '_',
                                        );
                                    if (name.length > 32) {
                                      name = name.substring(0, 32);
                                    }
                                    final msg = await downloadNgmyQrImage(
                                      bytes,
                                      'ngmy_cashier_receipt_${name.isEmpty ? iou.id : name}.png',
                                    );
                                    if (ctx.mounted) {
                                      ScaffoldMessenger.of(ctx).showSnackBar(
                                        SnackBar(content: Text(msg)),
                                      );
                                    }
                                  },
                                  icon: const Icon(
                                    Icons.download_rounded,
                                    size: 18,
                                  ),
                                  label: const Text(
                                    'Download',
                                    style: TextStyle(
                                      fontWeight: FontWeight.w800,
                                      fontSize: 13,
                                    ),
                                  ),
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: Colors.white,
                                    side: BorderSide(
                                      color:
                                          Colors.white.withValues(alpha: 0.28),
                                    ),
                                    padding: const EdgeInsets.symmetric(
                                      vertical: 12,
                                    ),
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(14),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 8),
                              Expanded(
                                child: FilledButton.icon(
                                  onPressed: () async {
                                    final ok =
                                        await ngmyPrintCashierIouReceipt(iou);
                                    if (ctx.mounted) {
                                      ScaffoldMessenger.of(ctx).showSnackBar(
                                        SnackBar(
                                          content: Text(
                                            ok
                                                ? 'Print dialog opened.'
                                                : 'Could not print receipt.',
                                          ),
                                        ),
                                      );
                                    }
                                  },
                                  icon: const Icon(
                                    Icons.print_rounded,
                                    size: 18,
                                  ),
                                  label: const Text(
                                    'Print',
                                    style: TextStyle(
                                      fontWeight: FontWeight.w800,
                                      fontSize: 13,
                                    ),
                                  ),
                                  style: FilledButton.styleFrom(
                                    backgroundColor: _kGreen,
                                    foregroundColor: Colors.white,
                                    padding: const EdgeInsets.symmetric(
                                      vertical: 12,
                                    ),
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(14),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    },
  );
}

Future<void> showNgmyCashierAttachmentViewer(
  BuildContext context, {
  required String title,
  required String base64Image,
  required String downloadName,
}) async {
  Uint8List? bytes;
  try {
    final raw = base64Image.contains(',')
        ? base64Image.split(',').last
        : base64Image;
    bytes = base64Decode(raw);
  } catch (_) {
    bytes = null;
  }
  if (bytes == null || bytes.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Could not open that file.')),
    );
    return;
  }
  final data = bytes;
  await showDialog<void>(
    context: context,
    builder: (ctx) {
      return Dialog(
        backgroundColor: const Color(0xFF111827),
        insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 28),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 10, 6, 6),
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      title,
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
                        fontSize: 15,
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(ctx),
                    icon: const Icon(Icons.close_rounded, color: Colors.white70),
                  ),
                ],
              ),
            ),
            Flexible(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(14),
                  child: Image.memory(data, fit: BoxFit.contain),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 14),
              child: SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () async {
                    final msg = await downloadNgmyQrImage(data, downloadName);
                    if (ctx.mounted) {
                      ScaffoldMessenger.of(ctx).showSnackBar(
                        SnackBar(content: Text(msg)),
                      );
                    }
                  },
                  icon: const Icon(Icons.download_rounded),
                  label: const Text(
                    'Download',
                    style: TextStyle(fontWeight: FontWeight.w800),
                  ),
                  style: FilledButton.styleFrom(
                    backgroundColor: _kGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      );
    },
  );
}

Future<void> showNgmyCashierSignatureViewer(
  BuildContext context, {
  required NgmyCashierIou iou,
}) async {
  final key = GlobalKey();
  await showDialog<void>(
    context: context,
    builder: (ctx) {
      return Dialog(
        backgroundColor: const Color(0xFF111827),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(14, 12, 8, 14),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Signature',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
                        fontSize: 15,
                      ),
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(ctx),
                    icon: const Icon(Icons.close_rounded, color: Colors.white70),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              RepaintBoundary(
                key: key,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(14),
                  child: Container(
                    height: 160,
                    width: double.infinity,
                    color: Colors.white,
                    child: CustomPaint(
                      painter: _CashierSignaturePainter(iou.signaturePoints),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () async {
                    final boundary = key.currentContext?.findRenderObject()
                        as RenderRepaintBoundary?;
                    if (boundary == null) return;
                    final image = await boundary.toImage(pixelRatio: 2.5);
                    final bd =
                        await image.toByteData(format: ui.ImageByteFormat.png);
                    if (bd == null) return;
                    var name = iou.personName
                        .trim()
                        .replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_');
                    if (name.length > 32) name = name.substring(0, 32);
                    final msg = await downloadNgmyQrImage(
                      bd.buffer.asUint8List(),
                      'ngmy_cashier_signature_${name.isEmpty ? iou.id : name}.png',
                    );
                    if (ctx.mounted) {
                      ScaffoldMessenger.of(ctx).showSnackBar(
                        SnackBar(content: Text(msg)),
                      );
                    }
                  },
                  icon: const Icon(Icons.download_rounded),
                  label: const Text(
                    'Download',
                    style: TextStyle(fontWeight: FontWeight.w800),
                  ),
                  style: FilledButton.styleFrom(
                    backgroundColor: _kGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}
