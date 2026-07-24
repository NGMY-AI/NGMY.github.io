import 'package:flutter/material.dart';

import 'ngmy_help_center_phone.dart';
import 'ngmy_help_center_send_money_receipt.dart';

class NgmyTransferReceiptTemplate {
  const NgmyTransferReceiptTemplate({
    required this.id,
    required this.label,
    required this.gradient,
    required this.accent,
    this.accent2 = Colors.white,
    this.lightBackground = false,
  });

  final String id;
  final String label;
  final List<Color> gradient;
  final Color accent;
  final Color accent2;
  final bool lightBackground;

  Color get headerText => lightBackground ? const Color(0xFF0F172A) : Colors.white;
  Color get bodyText => lightBackground ? const Color(0xFF334155) : Colors.white.withValues(alpha: 0.92);
  Color get mutedText => lightBackground ? const Color(0xFF64748B) : Colors.white.withValues(alpha: 0.72);
  Color get panelFill => lightBackground ? Colors.black.withValues(alpha: 0.04) : Colors.white.withValues(alpha: 0.08);
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
    ];

NgmyTransferReceiptTemplate ngmyTransferReceiptTemplateById(String id) {
  return ngmyTransferReceiptTemplates().firstWhere(
    (t) => t.id == id,
    orElse: () => ngmyTransferReceiptTemplates().first,
  );
}

String ngmyDisplayPhone(String raw, {String country = ''}) {
  final pattern = ngmyHelpCenterPhonePatternForCountry(country);
  final formatted = ngmyHelpCenterFormatPhone(raw, pattern);
  return formatted == '+' ? raw.trim() : formatted;
}

class NgmyTransferReceiptPreview extends StatelessWidget {
  const NgmyTransferReceiptPreview({
    super.key,
    required this.receipt,
    required this.templateId,
  });

  final NgmyHelpCenterSendMoneyReceipt receipt;
  final String templateId;

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
        border: Border.all(color: t.lightBackground ? Colors.black12 : Colors.white.withValues(alpha: 0.2)),
        boxShadow: [BoxShadow(color: t.accent.withValues(alpha: 0.28), blurRadius: 18, spreadRadius: 1)],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          children: [
            Positioned(
              right: -30,
              top: -20,
              child: Icon(Icons.account_balance_rounded, size: 140, color: t.accent.withValues(alpha: 0.08)),
            ),
            Positioned(
              left: -20,
              bottom: -30,
              child: Icon(Icons.public_rounded, size: 120, color: t.accent2.withValues(alpha: 0.07)),
            ),
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
                              color: t.accent.withValues(alpha: t.lightBackground ? 0.14 : 0.22),
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
                  const SizedBox(height: 14),
                  _panel(
                    t,
                    title: 'SENDER',
                    rows: [
                      _Row('Name', r.senderName.isEmpty ? '—' : r.senderName),
                      _Row('Phone', ngmyDisplayPhone(r.senderPhone)),
                      if (r.senderEmail.isNotEmpty) _Row('Email', r.senderEmail),
                    ],
                  ),
                  const SizedBox(height: 10),
                  _panel(
                    t,
                    title: 'RECEIVER',
                    rows: [
                      _Row('Full name', r.receiverName.isEmpty ? '—' : r.receiverName, bold: true),
                      _Row('Phone', r.receiverPhone.isEmpty ? '—' : ngmyDisplayPhone(r.receiverPhone, country: r.receiverCountry)),
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
                    'Fee quote from NGMY Help Center. Confirm before payment.',
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
              color: t.accent.withValues(alpha: t.lightBackground ? 0.12 : 0.18),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(11)),
            ),
            child: Text(
              title,
              style: TextStyle(color: t.headerText, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 8, 10, 10),
            child: Column(
              children: rows.map((row) => _line(t, row)).toList(),
            ),
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
          SizedBox(
            width: 108,
            child: Text(row.label, style: TextStyle(color: t.mutedText, fontSize: 10)),
          ),
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

Future<void> showNgmyTransferReceiptTemplatePicker(
  BuildContext context, {
  required String selectedId,
  required ValueChanged<String> onSelect,
}) async {
  final templates = ngmyTransferReceiptTemplates();
  await showModalBottomSheet<void>(
    context: context,
    backgroundColor: const Color(0xFF0B1020),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
    builder: (ctx) {
      return SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Receipt template', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
              const SizedBox(height: 4),
              Text('Choose how your transfer receipt looks.', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
              const SizedBox(height: 14),
              Flexible(
                child: GridView.count(
                  shrinkWrap: true,
                  crossAxisCount: 2,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 2.2,
                  children: templates.map((tpl) {
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
                              Center(
                                child: Text(
                                  tpl.label,
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    color: tpl.headerText,
                                    fontWeight: FontWeight.w900,
                                    fontSize: 12,
                                  ),
                                ),
                              ),
                              if (selected)
                                const Positioned(
                                  top: 6,
                                  right: 6,
                                  child: Icon(Icons.check_circle_rounded, color: Colors.white, size: 16),
                                ),
                            ],
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}
