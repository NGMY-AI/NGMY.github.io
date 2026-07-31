import 'package:flutter/material.dart';

import 'ngmy_help_center_phone.dart';
import 'ngmy_help_center_send_money_delivery_status.dart';
import 'ngmy_help_center_send_money_receipt.dart';

enum NgmyTransferReceiptDesign {
  standard,
  whiteGoldFiligree,
  whiteMarbleVein,
  whitePearlBorder,
  whiteLinenStripe,
  whiteEmbossedFrame,
  whiteDiamondCorner,
  whiteClassicMonogram,
  whiteArtDeco,
  whiteSilkWave,
}

class NgmyTransferReceiptTemplate {
  const NgmyTransferReceiptTemplate({
    required this.id,
    required this.label,
    required this.gradient,
    required this.accent,
    this.accent2 = Colors.white,
    this.lightBackground = false,
    this.design = NgmyTransferReceiptDesign.standard,
  });

  final String id;
  final String label;
  final List<Color> gradient;
  final Color accent;
  final Color accent2;
  final bool lightBackground;
  final NgmyTransferReceiptDesign design;

  Color get headerText => lightBackground ? const Color(0xFF0F172A) : Colors.white;
  Color get bodyText => lightBackground ? const Color(0xFF334155) : Colors.white.withValues(alpha: 0.92);
  Color get mutedText => lightBackground ? const Color(0xFF64748B) : Colors.white.withValues(alpha: 0.72);
  Color get panelFill => lightBackground ? Colors.black.withValues(alpha: 0.035) : Colors.white.withValues(alpha: 0.08);
  Color get panelBorder => lightBackground ? Colors.black.withValues(alpha: 0.08) : Colors.white.withValues(alpha: 0.18);
}

const kNgmyTransferReceiptTemplateKey = 'ngmy_help_center_receipt_template_v1';

List<NgmyTransferReceiptTemplate> ngmyTransferReceiptTemplates() => const [
      NgmyTransferReceiptTemplate(
        id: 'modern',
        label: 'Modern Teal',
        gradient: [Color(0xFF0B1F3A), Color(0xFF00B4D8)],
        accent: Color(0xFF00E5FF),
      ),
      NgmyTransferReceiptTemplate(
        id: 'ocean',
        label: 'Ocean',
        gradient: [Color(0xFF042F2E), Color(0xFF0D9488)],
        accent: Color(0xFF14B8A6),
        accent2: Color(0xFF5EEAD4),
      ),
      NgmyTransferReceiptTemplate(
        id: 'emerald',
        label: 'Emerald',
        gradient: [Color(0xFF022C22), Color(0xFF065F46)],
        accent: Color(0xFF10B981),
        accent2: Color(0xFFD4AF37),
      ),
      NgmyTransferReceiptTemplate(
        id: 'midnight',
        label: 'Midnight Gold',
        gradient: [Color(0xFF020617), Color(0xFF0F172A)],
        accent: Color(0xFFD4AF37),
        accent2: Color(0xFF94A3B8),
      ),
      NgmyTransferReceiptTemplate(
        id: 'rose',
        label: 'Rose Gold',
        gradient: [Color(0xFFF8E8E8), Color(0xFFE29595)],
        accent: Color(0xFFB76E79),
        accent2: Color(0xFF301934),
        lightBackground: true,
      ),
      NgmyTransferReceiptTemplate(
        id: 'sapphire',
        label: 'Sapphire',
        gradient: [Color(0xFF0C1445), Color(0xFF1E3A8A)],
        accent: Color(0xFF38BDF8),
        accent2: Color(0xFF818CF8),
      ),
      NgmyTransferReceiptTemplate(
        id: 'minimal',
        label: 'Minimal Ivory',
        gradient: [Color(0xFFFFFBF5), Color(0xFFF5F0E8), Color(0xFFE8E0D4)],
        accent: Color(0xFFB8860B),
        accent2: Color(0xFF78716C),
        lightBackground: true,
      ),
      NgmyTransferReceiptTemplate(
        id: 'gold',
        label: 'Gold Foil',
        gradient: [Color(0xFF1C1917), Color(0xFF44403C)],
        accent: Color(0xFFFBBF24),
        accent2: Color(0xFFD4AF37),
      ),
      // Luxurious white collection — each with a unique layout accent.
      NgmyTransferReceiptTemplate(
        id: 'white_gold_filigree',
        label: 'White Gold Filigree',
        gradient: [Color(0xFFFFFFFF), Color(0xFFFAF8F5), Color(0xFFF3EEE6)],
        accent: Color(0xFFD4AF37),
        accent2: Color(0xFFC9A227),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteGoldFiligree,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_marble',
        label: 'White Marble',
        gradient: [Color(0xFFFDFDFD), Color(0xFFF5F5F4), Color(0xFFECEAE8)],
        accent: Color(0xFF78716C),
        accent2: Color(0xFFA8A29E),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteMarbleVein,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_pearl',
        label: 'White Pearl',
        gradient: [Color(0xFFFFFFFF), Color(0xFFFAFAFA), Color(0xFFF1F5F9)],
        accent: Color(0xFF94A3B8),
        accent2: Color(0xFFCBD5E1),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whitePearlBorder,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_linen',
        label: 'White Linen',
        gradient: [Color(0xFFFFFEFC), Color(0xFFFAF7F2), Color(0xFFF0EBE3)],
        accent: Color(0xFF92400E),
        accent2: Color(0xFFB45309),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteLinenStripe,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_embossed',
        label: 'White Embossed',
        gradient: [Color(0xFFFFFFFF), Color(0xFFF8FAFC), Color(0xFFEFF2F6)],
        accent: Color(0xFF475569),
        accent2: Color(0xFF64748B),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteEmbossedFrame,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_diamond',
        label: 'White Diamond',
        gradient: [Color(0xFFFFFFFF), Color(0xFFF8FAFC), Color(0xFFE2E8F0)],
        accent: Color(0xFF0284C7),
        accent2: Color(0xFF38BDF8),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteDiamondCorner,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_monogram',
        label: 'White Monogram',
        gradient: [Color(0xFFFFFEFE), Color(0xFFF9F7F4), Color(0xFFEDE8E0)],
        accent: Color(0xFF1E293B),
        accent2: Color(0xFF334155),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteClassicMonogram,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_art_deco',
        label: 'White Art Deco',
        gradient: [Color(0xFFFFFFFF), Color(0xFFF7F7F5), Color(0xFFEBEBE8)],
        accent: Color(0xFF0F766E),
        accent2: Color(0xFF14B8A6),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteArtDeco,
      ),
      NgmyTransferReceiptTemplate(
        id: 'white_silk',
        label: 'White Silk',
        gradient: [Color(0xFFFFFFFF), Color(0xFFFCFCFB), Color(0xFFF3F2EF)],
        accent: Color(0xFF9D174D),
        accent2: Color(0xFFDB2777),
        lightBackground: true,
        design: NgmyTransferReceiptDesign.whiteSilkWave,
      ),
    ];

NgmyTransferReceiptTemplate ngmyTransferReceiptTemplateById(String id) {
  return ngmyTransferReceiptTemplates().firstWhere(
    (t) => t.id == id,
    orElse: () => ngmyTransferReceiptTemplates().first,
  );
}

class NgmyTransferReceiptPreview extends StatelessWidget {
  const NgmyTransferReceiptPreview({
    super.key,
    required this.receipt,
    required this.templateId,
    this.deliveryStatus = NgmyTransferDeliveryStatus.hidden,
    this.deliveredAt,
    this.onEditDeliveredTime,
  });

  final NgmyHelpCenterSendMoneyReceipt receipt;
  final String templateId;
  final NgmyTransferDeliveryStatus deliveryStatus;
  final DateTime? deliveredAt;
  final VoidCallback? onEditDeliveredTime;

  @override
  Widget build(BuildContext context) {
    final t = ngmyTransferReceiptTemplateById(templateId);
    final r = receipt;

    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(minHeight: 520),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: t.gradient, begin: Alignment.topLeft, end: Alignment.bottomRight),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: t.lightBackground ? t.accent.withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.2),
          width: t.lightBackground ? 1.2 : 1,
        ),
        boxShadow: [
          BoxShadow(
            color: t.accent.withValues(alpha: t.lightBackground ? 0.14 : 0.28),
            blurRadius: 18,
            spreadRadius: 1,
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          children: [
            ..._designLayers(t),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'NGMY',
                              style: TextStyle(
                                color: t.headerText,
                                fontWeight: FontWeight.w900,
                                fontSize: 24,
                                letterSpacing: 1.2,
                              ),
                            ),
                            Text(
                              'Money Transfer Receipt',
                              style: TextStyle(color: t.mutedText, fontSize: 11, fontWeight: FontWeight.w600),
                            ),
                          ],
                        ),
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: t.accent.withValues(alpha: t.lightBackground ? 0.1 : 0.22),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: t.accent.withValues(alpha: 0.45)),
                            ),
                            child: Text(
                              r.reference,
                              style: TextStyle(color: t.headerText, fontSize: 9, fontWeight: FontWeight.w900),
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(r.formattedDate, style: TextStyle(color: t.mutedText, fontSize: 9)),
                        ],
                      ),
                    ],
                  ),
                  if (deliveryStatus != NgmyTransferDeliveryStatus.hidden) ...[
                    const SizedBox(height: 12),
                    NgmyTransferDeliveryStatusCard(
                      status: deliveryStatus,
                      deliveredAt: deliveredAt,
                      onEditDeliveredTime: onEditDeliveredTime,
                    ),
                  ],
                  const SizedBox(height: 14),
                  _panel(
                    t,
                    title: 'SENDER',
                    rows: [
                      _Row('Name', r.senderName.isEmpty ? '—' : r.senderName),
                      _Row('Phone', r.senderPhone.isEmpty ? '—' : ngmyHelpCenterDisplayPhone(r.senderPhone, sender: true)),
                      if (r.senderEmail.isNotEmpty) _Row('Email', r.senderEmail),
                    ],
                  ),
                  const SizedBox(height: 10),
                  _panel(
                    t,
                    title: 'RECEIVER',
                    rows: [
                      _Row('Full name', r.receiverName.isEmpty ? '—' : r.receiverName, bold: true),
                      _Row('Phone', r.receiverPhone.isEmpty ? '—' : r.receiverPhone),
                      _Row('Destination', r.receiverCountry.isEmpty ? '—' : r.receiverCountry, bold: true),
                    ],
                  ),
                  const SizedBox(height: 10),
                  _panel(
                    t,
                    title: 'TRANSFER SUMMARY',
                    rows: [
                      _Row('Transfer amount', '\$${r.transferAmount.toStringAsFixed(2)}'),
                      _Row(r.feeDescription, '\$${r.serviceFee.toStringAsFixed(2)}'),
                      _Row('Recipient receives', '\$${r.recipientGets.toStringAsFixed(2)}', bold: true, highlight: true),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Fee quote from NGMY Help Center.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: t.mutedText, fontSize: 9, height: 1.35),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'NGMY.ORG',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: t.accent, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 2),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<Widget> _designLayers(NgmyTransferReceiptTemplate t) {
    switch (t.design) {
      case NgmyTransferReceiptDesign.whiteGoldFiligree:
        return [
          Positioned(top: 8, left: 8, right: 8, child: Divider(color: t.accent.withValues(alpha: 0.45), thickness: 1.2)),
          Positioned(bottom: 8, left: 8, right: 8, child: Divider(color: t.accent.withValues(alpha: 0.45), thickness: 1.2)),
          Positioned(top: 14, right: 14, child: Icon(Icons.auto_awesome, color: t.accent.withValues(alpha: 0.25), size: 28)),
        ];
      case NgmyTransferReceiptDesign.whiteMarbleVein:
        return [
          Positioned.fill(child: CustomPaint(painter: _MarbleVeinPainter(t.accent.withValues(alpha: 0.08)))),
        ];
      case NgmyTransferReceiptDesign.whitePearlBorder:
        return [
          Positioned.fill(
            child: Padding(
              padding: const EdgeInsets.all(10),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: t.accent.withValues(alpha: 0.35), width: 2),
                ),
              ),
            ),
          ),
        ];
      case NgmyTransferReceiptDesign.whiteLinenStripe:
        return [
          Positioned.fill(child: CustomPaint(painter: _LinenStripePainter(t.accent.withValues(alpha: 0.06)))),
        ];
      case NgmyTransferReceiptDesign.whiteEmbossedFrame:
        return [
          Positioned.fill(
            child: Padding(
              padding: const EdgeInsets.all(8),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  boxShadow: [
                    BoxShadow(color: Colors.white.withValues(alpha: 0.9), blurRadius: 0, spreadRadius: 1, offset: const Offset(-1, -1)),
                    BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 0, spreadRadius: 1, offset: const Offset(1, 1)),
                  ],
                ),
              ),
            ),
          ),
        ];
      case NgmyTransferReceiptDesign.whiteDiamondCorner:
        return [
          Positioned(top: 10, left: 10, child: Icon(Icons.diamond_outlined, color: t.accent.withValues(alpha: 0.35), size: 22)),
          Positioned(top: 10, right: 10, child: Icon(Icons.diamond_outlined, color: t.accent.withValues(alpha: 0.35), size: 22)),
          Positioned(bottom: 10, left: 10, child: Icon(Icons.diamond_outlined, color: t.accent.withValues(alpha: 0.35), size: 22)),
          Positioned(bottom: 10, right: 10, child: Icon(Icons.diamond_outlined, color: t.accent.withValues(alpha: 0.35), size: 22)),
        ];
      case NgmyTransferReceiptDesign.whiteClassicMonogram:
        return [
          Positioned(
            right: -10,
            top: 40,
            child: Text(
              'N',
              style: TextStyle(fontSize: 120, fontWeight: FontWeight.w900, color: t.accent.withValues(alpha: 0.06), height: 1),
            ),
          ),
        ];
      case NgmyTransferReceiptDesign.whiteArtDeco:
        return [
          Positioned(top: 0, left: 0, right: 0, height: 6, child: ColoredBox(color: t.accent.withValues(alpha: 0.55))),
          Positioned(
            top: 12,
            left: 0,
            right: 0,
            child: Center(child: Container(width: 80, height: 2, color: t.accent.withValues(alpha: 0.35))),
          ),
        ];
      case NgmyTransferReceiptDesign.whiteSilkWave:
        return [
          Positioned.fill(child: CustomPaint(painter: _SilkWavePainter(t.accent.withValues(alpha: 0.07)))),
        ];
      case NgmyTransferReceiptDesign.standard:
        return [
          Positioned(right: -30, top: -20, child: Icon(Icons.account_balance_rounded, size: 140, color: t.accent.withValues(alpha: 0.08))),
          Positioned(left: -20, bottom: -30, child: Icon(Icons.public_rounded, size: 120, color: t.accent2.withValues(alpha: 0.07))),
        ];
    }
  }

  Widget _panel(NgmyTransferReceiptTemplate t, {required String title, required List<_Row> rows}) {
    return Container(
      decoration: BoxDecoration(
        color: t.panelFill,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: t.panelBorder),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: t.accent.withValues(alpha: t.lightBackground ? 0.1 : 0.18),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(11)),
            ),
            child: Text(
              title,
              style: TextStyle(color: t.headerText, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 8, 10, 10),
            child: Column(children: rows.map((row) => _line(t, row)).toList()),
          ),
        ],
      ),
    );
  }

  Widget _line(NgmyTransferReceiptTemplate t, _Row row) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 5),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(width: 108, child: Text(row.label, style: TextStyle(color: t.mutedText, fontSize: 10))),
          Expanded(
            child: Text(
              row.value,
              style: TextStyle(
                color: row.highlight ? t.accent : t.bodyText,
                fontSize: row.bold ? 12 : 11,
                fontWeight: row.bold ? FontWeight.w900 : FontWeight.w700,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _Row {
  const _Row(this.label, this.value, {this.bold = false, this.highlight = false});
  final String label;
  final String value;
  final bool bold;
  final bool highlight;
}

class _MarbleVeinPainter extends CustomPainter {
  _MarbleVeinPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 1.2..style = PaintingStyle.stroke;
    final path = Path()
      ..moveTo(0, size.height * 0.3)
      ..quadraticBezierTo(size.width * 0.4, size.height * 0.1, size.width, size.height * 0.35)
      ..moveTo(0, size.height * 0.7)
      ..quadraticBezierTo(size.width * 0.55, size.height * 0.55, size.width, size.height * 0.75);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _LinenStripePainter extends CustomPainter {
  _LinenStripePainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    for (var x = 0.0; x < size.width; x += 14) {
      canvas.drawRect(Rect.fromLTWH(x, 0, 6, size.height), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _SilkWavePainter extends CustomPainter {
  _SilkWavePainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..style = PaintingStyle.fill;
    final path = Path()
      ..moveTo(0, size.height * 0.82)
      ..quadraticBezierTo(size.width * 0.25, size.height * 0.72, size.width * 0.5, size.height * 0.82)
      ..quadraticBezierTo(size.width * 0.75, size.height * 0.92, size.width, size.height * 0.82)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

Future<void> showNgmyTransferReceiptTemplatePicker(
  BuildContext context, {
  required String selectedId,
  required ValueChanged<String> onSelect,
}) async {
  final templates = ngmyTransferReceiptTemplates();
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: const Color(0xFF0B1020),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
    builder: (ctx) {
      return DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.72,
        minChildSize: 0.45,
        maxChildSize: 0.92,
        builder: (_, scrollCtrl) {
          return SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text('Receipt template', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                  const SizedBox(height: 4),
                  Text('16 templates — scroll for luxurious white designs.', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
                  const SizedBox(height: 14),
                  Expanded(
                    child: GridView.builder(
                      controller: scrollCtrl,
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 10,
                        childAspectRatio: 2.15,
                      ),
                      itemCount: templates.length,
                      itemBuilder: (_, i) {
                        final tpl = templates[i];
                        final selected = tpl.id == selectedId;
                        return Material(
                          color: Colors.transparent,
                          child: InkWell(
                            onTap: () {
                              onSelect(tpl.id);
                              Navigator.pop(ctx);
                            },
                            borderRadius: BorderRadius.circular(12),
                            child: Ink(
                              decoration: BoxDecoration(
                                gradient: LinearGradient(colors: tpl.gradient),
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(color: selected ? tpl.accent : Colors.white24, width: selected ? 2 : 1),
                              ),
                              child: Stack(
                                children: [
                                  if (tpl.lightBackground && tpl.design != NgmyTransferReceiptDesign.standard)
                                    Positioned(right: 6, top: 6, child: Icon(Icons.auto_awesome, size: 14, color: tpl.accent.withValues(alpha: 0.5))),
                                  Center(
                                    child: Padding(
                                      padding: const EdgeInsets.symmetric(horizontal: 8),
                                      child: Text(
                                        tpl.label,
                                        textAlign: TextAlign.center,
                                        style: TextStyle(color: tpl.headerText, fontWeight: FontWeight.w900, fontSize: 11),
                                      ),
                                    ),
                                  ),
                                  if (selected)
                                    Positioned(
                                      top: 6,
                                      right: 6,
                                      child: Icon(Icons.check_circle_rounded, color: tpl.lightBackground ? tpl.accent : Colors.white, size: 16),
                                    ),
                                ],
                              ),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      );
    },
  );
}
