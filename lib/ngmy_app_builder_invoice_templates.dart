import 'package:flutter/material.dart';

import 'ngmy_app_builder_runtime_extras.dart';

/// Ten modern invoice designs for App Builder runtime + editor.
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
  NgmyAppBuilderInvoiceTemplate(id: 'classic', name: 'Classic', description: 'Elegant bordered', icon: Icons.receipt_long),
  NgmyAppBuilderInvoiceTemplate(id: 'modern', name: 'Modern', description: 'Gradient hero', icon: Icons.auto_awesome),
  NgmyAppBuilderInvoiceTemplate(id: 'minimal', name: 'Minimal', description: 'Clean & light', icon: Icons.horizontal_rule),
  NgmyAppBuilderInvoiceTemplate(id: 'bold', name: 'Bold', description: 'Dark statement', icon: Icons.contrast),
  NgmyAppBuilderInvoiceTemplate(id: 'corporate', name: 'Corporate', description: 'Business pro', icon: Icons.business),
  NgmyAppBuilderInvoiceTemplate(id: 'creative', name: 'Creative', description: 'Color accent', icon: Icons.palette_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'luxury', name: 'Luxury', description: 'Gold premium', icon: Icons.diamond_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'compact', name: 'Compact', description: 'Quick receipt', icon: Icons.compress),
  NgmyAppBuilderInvoiceTemplate(id: 'stripe', name: 'Stripe', description: 'Brand stripe', icon: Icons.view_day_outlined),
  NgmyAppBuilderInvoiceTemplate(id: 'receipt', name: 'Receipt', description: 'Thermal style', icon: Icons.receipt),
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

/// Premium pay block — same beautiful QR design used across all templates.
Widget ngmyInvoicePayBlock({
  required String payUrl,
  required Color theme,
  required bool isDark,
  required String amount,
  Color? accent,
  bool compact = false,
}) {
  if (payUrl.trim().isEmpty) return const SizedBox.shrink();
  final c = accent ?? theme;
  return Container(
    width: double.infinity,
    margin: EdgeInsets.only(top: compact ? 12 : 20),
    padding: EdgeInsets.all(compact ? 14 : 18),
    decoration: BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          c.withValues(alpha: isDark ? 0.22 : 0.08),
          isDark ? const Color(0xFF0F172A) : Colors.white,
        ],
      ),
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: c.withValues(alpha: 0.35), width: 1.5),
      boxShadow: [
        BoxShadow(color: c.withValues(alpha: 0.18), blurRadius: 20, offset: const Offset(0, 8)),
      ],
    ),
    child: Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: c.withValues(alpha: 0.15), shape: BoxShape.circle),
              child: Icon(Icons.qr_code_scanner_rounded, color: c, size: compact ? 18 : 22),
            ),
            const SizedBox(width: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Pay instantly', style: TextStyle(fontWeight: FontWeight.w900, fontSize: compact ? 14 : 16, color: isDark ? Colors.white : const Color(0xFF1E293B))),
                Text('Scan QR · \$${amount.trim()}', style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54)),
              ],
            ),
          ],
        ),
        const SizedBox(height: 14),
        NgmyRuntimeQrDisplay(
          data: payUrl,
          theme: c,
          isDark: isDark,
          label: 'Pay with QR',
          size: compact ? 120 : 148,
        ),
        const SizedBox(height: 8),
        Text('Secure payment link', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: c.withValues(alpha: 0.85))),
      ],
    ),
  );
}

Widget _lineItem(String label, String value, {required bool isDark, bool bold = false}) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 6),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 2, child: Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: isDark ? Colors.white54 : Colors.black45))),
        Expanded(flex: 3, child: Text(value, style: TextStyle(fontSize: 13, fontWeight: bold ? FontWeight.w800 : FontWeight.w500, color: isDark ? Colors.white : Colors.black87))),
      ],
    ),
  );
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
  final created = DateTime.tryParse('${record['createdAt'] ?? ''}');
  final dateStr = created != null ? '${created.year}-${created.month.toString().padLeft(2, '0')}-${created.day.toString().padLeft(2, '0')}' : 'Today';

  Widget details({Color? amountColor}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _lineItem('Bill to', client, isDark: isDark, bold: true),
        if (items.isNotEmpty) _lineItem('Details', items, isDark: isDark),
        if (due.isNotEmpty) _lineItem('Due date', due, isDark: isDark),
        _lineItem('Date', dateStr, isDark: isDark),
        const SizedBox(height: 12),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 16),
          decoration: BoxDecoration(
            color: (amountColor ?? theme).withValues(alpha: isDark ? 0.15 : 0.08),
            borderRadius: BorderRadius.circular(14),
          ),
          child: Row(
            children: [
              Text('Total due', style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.black54)),
              const Spacer(),
              Text('\$$amount', style: TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: amountColor ?? theme)),
            ],
          ),
        ),
        ngmyInvoicePayBlock(payUrl: payUrl, theme: theme, isDark: isDark, amount: amount, accent: amountColor),
      ],
    );
  }

  switch (tpl) {
    case 'modern':
      return Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.2), blurRadius: 24, offset: const Offset(0, 10))],
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.fromLTRB(22, 22, 22, 28),
              decoration: BoxDecoration(gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.7)])),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('INVOICE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28, letterSpacing: 2)),
                  const SizedBox(height: 4),
                  Text('#$invoiceNo', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w600)),
                ],
              ),
            ),
            Container(
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              padding: const EdgeInsets.all(20),
              child: details(),
            ),
          ],
        ),
      );
    case 'minimal':
      return Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : const Color(0xFFFAFBFC),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Invoice', style: TextStyle(fontSize: 32, fontWeight: FontWeight.w200, color: isDark ? Colors.white : Colors.black87)),
            Text(invoiceNo, style: TextStyle(color: isDark ? Colors.white38 : Colors.black38)),
            const SizedBox(height: 20),
            details(amountColor: isDark ? Colors.white : theme),
          ],
        ),
      );
    case 'bold':
      return Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF111827) : Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 16, offset: Offset(0, 6))],
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              color: const Color(0xFF111827),
              padding: const EdgeInsets.all(18),
              child: Row(
                children: [
                  const Icon(Icons.receipt_long_rounded, color: Colors.white),
                  const SizedBox(width: 10),
                  Text('INVOICE · $invoiceNo', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                ],
              ),
            ),
            Padding(padding: const EdgeInsets.all(20), child: details(amountColor: theme)),
          ],
        ),
      );
    case 'corporate':
      return Container(
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFF1E3A5F), width: 2),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: const Color(0xFF1E3A5F).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(12)),
                  child: const Icon(Icons.business_center_rounded, color: Color(0xFF1E3A5F)),
                ),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('INVOICE', style: TextStyle(color: Color(0xFF1E3A5F), fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 1)),
                    Text('#$invoiceNo', style: TextStyle(color: Colors.grey.shade600, fontSize: 12)),
                  ],
                ),
              ],
            ),
            const Divider(height: 28, color: Color(0xFF1E3A5F)),
            details(amountColor: const Color(0xFF1E3A5F)),
          ],
        ),
      );
    case 'creative':
      return Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: LinearGradient(colors: [theme.withValues(alpha: 0.12), const Color(0xFF7C3AED).withValues(alpha: 0.08)]),
          border: Border.all(color: theme.withValues(alpha: 0.25)),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(width: 6, decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [theme, const Color(0xFF7C3AED)]))),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Invoice', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 26, color: theme)),
                    Text('#$invoiceNo', style: TextStyle(color: isDark ? Colors.white54 : Colors.black45)),
                    const SizedBox(height: 12),
                    details(),
                  ],
                ),
              ),
            ),
          ],
        ),
      );
    case 'luxury':
      return Container(
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          color: const Color(0xFF0A0A0A),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: const Color(0xFFD4AF37), width: 1.5),
          boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.25), blurRadius: 24)],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Icon(Icons.diamond_outlined, color: Color(0xFFD4AF37), size: 28),
                const SizedBox(width: 10),
                Text('INVOICE · $invoiceNo', style: const TextStyle(color: Color(0xFFD4AF37), fontWeight: FontWeight.w900, letterSpacing: 1.5)),
              ],
            ),
            const SizedBox(height: 16),
            details(amountColor: const Color(0xFFD4AF37)),
          ],
        ),
      );
    case 'compact':
      return Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1E293B) : Colors.white,
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: theme.withValues(alpha: 0.2)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('$invoiceNo · $client', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
            if (items.isNotEmpty) ...[const SizedBox(height: 4), Text(items, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 12, color: isDark ? Colors.white70 : Colors.black54))],
            const SizedBox(height: 8),
            Text('\$$amount', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: theme)),
            ngmyInvoicePayBlock(payUrl: payUrl, theme: theme, isDark: isDark, amount: amount, compact: true),
          ],
        ),
      );
    case 'stripe':
      return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            height: 10,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.6)]),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
            ),
          ),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              borderRadius: const BorderRadius.vertical(bottom: Radius.circular(18)),
              boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.12), blurRadius: 12, offset: const Offset(0, 4))],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Invoice $invoiceNo', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: theme)),
                const SizedBox(height: 12),
                details(),
              ],
            ),
          ),
        ],
      );
    case 'receipt':
      return Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: const Color(0xFFFFFDF7),
          border: Border.all(color: Colors.grey.shade400),
          boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 3))],
        ),
        child: Column(
          children: [
            Text('*** INVOICE ***', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 3, color: Colors.grey.shade800)),
            Text(invoiceNo, style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
            const Padding(padding: EdgeInsets.symmetric(vertical: 10), child: Divider(thickness: 1)),
            Text(client, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
            if (items.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6), child: Text(items, textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: Colors.grey.shade800))),
            const Padding(padding: EdgeInsets.symmetric(vertical: 10), child: Divider(thickness: 1)),
            Text('TOTAL  \$$amount', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 22, color: theme)),
            if (due.isNotEmpty) Text('Due $due', style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
            ngmyInvoicePayBlock(payUrl: payUrl, theme: theme, isDark: false, amount: amount, compact: true),
          ],
        ),
      );
    default:
      return Container(
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1E293B) : Colors.white,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: theme.withValues(alpha: 0.35), width: 1.5),
          boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.15), blurRadius: 18, offset: const Offset(0, 6))],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: theme.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12)),
                  child: Icon(Icons.receipt_long_rounded, color: theme),
                ),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('INVOICE', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.2, color: theme, fontSize: 18)),
                    Text('#$invoiceNo', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54)),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 16),
            details(),
          ],
        ),
      );
  }
}
