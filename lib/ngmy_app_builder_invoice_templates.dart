import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

/// Ten invoice designs for App Builder runtime + editor.
class NgmyAppBuilderInvoiceTemplate {
  const NgmyAppBuilderInvoiceTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.icon,
  });

  final String id;
  final String name;
  final String description;
  final IconData icon;
}

const kNgmyAppBuilderInvoiceTemplates = <NgmyAppBuilderInvoiceTemplate>[
  NgmyAppBuilderInvoiceTemplate(id: 'classic', name: 'Classic', description: 'Clean bordered invoice', icon: Icons.receipt_long),
  NgmyAppBuilderInvoiceTemplate(id: 'modern', name: 'Modern', description: 'Gradient header', icon: Icons.auto_awesome),
  NgmyAppBuilderInvoiceTemplate(id: 'minimal', name: 'Minimal', description: 'Simple & airy', icon: Icons.horizontal_rule),
  NgmyAppBuilderInvoiceTemplate(id: 'bold', name: 'Bold', description: 'Dark header band', icon: Icons.contrast),
  NgmyAppBuilderInvoiceTemplate(id: 'corporate', name: 'Corporate', description: 'Professional navy', icon: Icons.business),
  NgmyAppBuilderInvoiceTemplate(id: 'creative', name: 'Creative', description: 'Accent side stripe', icon: Icons.palette_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'luxury', name: 'Luxury', description: 'Gold accents', icon: Icons.diamond_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'compact', name: 'Compact', description: 'Dense receipt', icon: Icons.compress),
  NgmyAppBuilderInvoiceTemplate(id: 'stripe', name: 'Stripe', description: 'Color top bar', icon: Icons.view_day_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'receipt', name: 'Receipt', description: 'Thermal paper look', icon: Icons.receipt),
];

NgmyAppBuilderInvoiceTemplate ngmyAppBuilderInvoiceTemplateById(String? id) {
  final key = (id ?? 'classic').toLowerCase();
  return kNgmyAppBuilderInvoiceTemplates.firstWhere(
    (t) => t.id == key,
    orElse: () => kNgmyAppBuilderInvoiceTemplates.first,
  );
}

String ngmyAppBuilderInvoiceTemplateIdsForAi() {
  return kNgmyAppBuilderInvoiceTemplates.map((t) => '${t.id} (${t.name})').join(', ');
}

/// Renders a saved invoice record with the chosen template.
Widget ngmyAppBuilderInvoicePreview({
  required String templateId,
  required Map<String, dynamic> record,
  required Color theme,
  required bool isDark,
}) {
  final payUrl = (record['payUrl'] ?? '').toString().trim();
  final client = (record['client'] ?? '').toString();
  final items = (record['items'] ?? '').toString();
  final amount = (record['amount'] ?? '').toString();
  final due = (record['due'] ?? '').toString();
  final invoiceNo = (record['invoiceNo'] ?? '').toString();
  final tpl = templateId.toLowerCase();

  Widget qr() {
    if (payUrl.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 14),
      child: Center(
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
              child: QrImageView(data: payUrl, size: 120, backgroundColor: Colors.white),
            ),
            const SizedBox(height: 6),
            Text('Scan to pay', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
          ],
        ),
      ),
    );
  }

  Widget body({required Widget header, required Color bg, Border? border, List<BoxShadow>? shadow}) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(tpl == 'receipt' ? 4 : 18),
        border: border,
        boxShadow: shadow,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          header,
          const SizedBox(height: 14),
          Text('Bill to', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : Colors.black45)),
          Text(client, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 10),
          Text(items, style: TextStyle(color: isDark ? Colors.white70 : Colors.black87)),
          const SizedBox(height: 14),
          Text('\$$amount', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: theme)),
          if (due.isNotEmpty) Text('Due: $due', style: TextStyle(color: isDark ? Colors.white60 : Colors.black54)),
          qr(),
        ],
      ),
    );
  }

  switch (tpl) {
    case 'modern':
      return body(
        bg: isDark ? const Color(0xFF1E293B) : Colors.white,
        border: Border.all(color: theme.withValues(alpha: 0.3)),
        header: Container(
          width: double.infinity,
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.65)]),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            children: [
              const Text('INVOICE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              const Spacer(),
              Text(invoiceNo, style: const TextStyle(color: Colors.white70, fontSize: 11)),
            ],
          ),
        ),
      );
    case 'minimal':
      return body(
        bg: isDark ? const Color(0xFF0F172A) : const Color(0xFFFAFAFA),
        header: Text('Invoice · $invoiceNo', style: TextStyle(fontWeight: FontWeight.w300, fontSize: 22, color: isDark ? Colors.white : Colors.black87)),
      );
    case 'bold':
      return body(
        bg: isDark ? const Color(0xFF111827) : Colors.white,
        header: Container(
          width: double.infinity,
          color: Colors.black87,
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 14),
          child: Row(
            children: [
              const Icon(Icons.receipt, color: Colors.white),
              const SizedBox(width: 8),
              const Text('INVOICE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
              const Spacer(),
              Text(invoiceNo, style: const TextStyle(color: Colors.white70, fontSize: 11)),
            ],
          ),
        ),
      );
    case 'corporate':
      return body(
        bg: Colors.white,
        border: Border.all(color: const Color(0xFF1E3A5F)),
        header: Container(
          padding: const EdgeInsets.only(bottom: 10),
          decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFF1E3A5F), width: 3))),
          child: Row(
            children: [
              const Icon(Icons.business, color: Color(0xFF1E3A5F)),
              const SizedBox(width: 8),
              Text('INVOICE $invoiceNo', style: const TextStyle(color: Color(0xFF1E3A5F), fontWeight: FontWeight.w900)),
            ],
          ),
        ),
      );
    case 'creative':
      return Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(width: 8, decoration: BoxDecoration(color: theme, borderRadius: BorderRadius.circular(4))),
          const SizedBox(width: 10),
          Expanded(child: body(bg: isDark ? const Color(0xFF1E293B) : Colors.white, border: Border.all(color: theme.withValues(alpha: 0.2)), header: Text('Invoice', style: TextStyle(fontWeight: FontWeight.w900, color: theme, fontSize: 24)))),
        ],
      );
    case 'luxury':
      return body(
        bg: const Color(0xFF0F0F0F),
        border: Border.all(color: const Color(0xFFD4AF37), width: 1.5),
        shadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.2), blurRadius: 16)],
        header: Row(
          children: [
            const Icon(Icons.diamond, color: Color(0xFFD4AF37)),
            const SizedBox(width: 8),
            Text('INVOICE · $invoiceNo', style: const TextStyle(color: Color(0xFFD4AF37), fontWeight: FontWeight.w900, letterSpacing: 1.2)),
          ],
        ),
      );
    case 'compact':
      return Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: isDark ? const Color(0xFF1E293B) : Colors.white, border: Border.all(color: Colors.grey.shade300)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('INV $invoiceNo · $client', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: isDark ? Colors.white : Colors.black87)),
            const SizedBox(height: 6),
            Text(items, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 12, color: isDark ? Colors.white70 : Colors.black87)),
            Text('\$$amount${due.isNotEmpty ? ' · due $due' : ''}', style: TextStyle(fontWeight: FontWeight.w900, color: theme)),
            qr(),
          ],
        ),
      );
    case 'stripe':
      return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(height: 8, decoration: BoxDecoration(color: theme, borderRadius: const BorderRadius.vertical(top: Radius.circular(12)))),
          body(
            bg: isDark ? const Color(0xFF1E293B) : Colors.white,
            header: Text('Invoice $invoiceNo', style: TextStyle(fontWeight: FontWeight.w800, color: theme)),
          ),
        ],
      );
    case 'receipt':
      return Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: const Color(0xFFFFFDF5),
          border: Border.all(color: Colors.grey.shade400),
          boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 6, offset: Offset(0, 2))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text('*** RECEIPT ***', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.grey.shade800, letterSpacing: 2)),
            Text(invoiceNo, style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
            const Divider(),
            Text(client, style: const TextStyle(fontWeight: FontWeight.w700)),
            Text(items, textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: Colors.grey.shade800)),
            const Divider(),
            Text('TOTAL \$$amount', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: theme)),
            if (due.isNotEmpty) Text('Due $due', style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
            qr(),
          ],
        ),
      );
    default:
      return body(
        bg: isDark ? const Color(0xFF1E293B) : Colors.white,
        border: Border.all(color: theme.withValues(alpha: 0.35), width: 1.5),
        shadow: [BoxShadow(color: theme.withValues(alpha: 0.12), blurRadius: 12, offset: const Offset(0, 4))],
        header: Row(
          children: [
            Icon(Icons.receipt_rounded, color: theme),
            const SizedBox(width: 8),
            Text('INVOICE', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.2, color: theme)),
            const Spacer(),
            Text(invoiceNo, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
          ],
        ),
      );
  }
}
