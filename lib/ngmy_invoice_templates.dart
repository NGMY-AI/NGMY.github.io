import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'ngmy_invoice_signature.dart';

enum NgmyInvoiceLayout {
  classic,
  modernWave,
  corporateStripe,
  roseLuxury,
  emeraldPrestige,
  creativeFusion,
  exclusiveGold,
  midnightRoyale,
  obsidianChevron,
  sapphireLuxe,
  rubyExecutive,
  onyxPrism,
  champagneNoir,
  violetCrown,
  arcticPlatinum,
  crimsonEdge,
  celestialGradient,
  luxuryCombo,
  goldFoil,
  marble,
  diamond,
}

class NgmyInvoiceTemplate {
  final String id;
  final String label;
  final String category;
  final NgmyInvoiceLayout layout;
  final List<Color> gradient;
  final Color accent;
  final Color accent2;
  final bool lightBackground;

  const NgmyInvoiceTemplate({
    required this.id,
    required this.label,
    required this.category,
    required this.layout,
    required this.gradient,
    required this.accent,
    this.accent2 = Colors.black,
    this.lightBackground = false,
  });

  Color get headerText => lightBackground ? const Color(0xFF1E293B) : Colors.white;
}

const kNgmyInvoiceStandardCategory = 'Standard';
const kNgmyInvoicePremiumCategory = 'Premium Luxurious';

List<NgmyInvoiceTemplate> ngmyInvoiceTemplates() => const [
  // Standard — redesigned classics
  NgmyInvoiceTemplate(id: 'modern', label: 'Modern', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.modernWave, gradient: [Color(0xFF0B1F3A), Color(0xFF00B4D8)], accent: Color(0xFF00B4D8)),
  NgmyInvoiceTemplate(id: 'corporate', label: 'Corporate', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.corporateStripe, gradient: [Color(0xFF1E3A8A), Color(0xFF2563EB)], accent: Color(0xFF2563EB), accent2: Color(0xFF111827)),
  NgmyInvoiceTemplate(id: 'rose_gold', label: 'Rose Gold', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.roseLuxury, gradient: [Color(0xFFF8E8E8), Color(0xFFE29595)], accent: Color(0xFFB76E79), accent2: Color(0xFF301934), lightBackground: true),
  NgmyInvoiceTemplate(id: 'emerald', label: 'Emerald', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.emeraldPrestige, gradient: [Color(0xFF022C22), Color(0xFF065F46)], accent: Color(0xFF10B981), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'creative', label: 'Creative', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.creativeFusion, gradient: [Color(0xFF312E81), Color(0xFFEC4899)], accent: Color(0xFFA855F7)),
  NgmyInvoiceTemplate(id: 'exclusive', label: 'Exclusive', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.exclusiveGold, gradient: [Color(0xFF0C0C0C), Color(0xFF1A1A2E)], accent: Color(0xFFD4AF37), accent2: Color(0xFFC0C0C0)),
  NgmyInvoiceTemplate(id: 'classic', label: 'Classic', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.classic, gradient: [Color(0xFF1E293B), Color(0xFF334155)], accent: Color(0xFF64748B)),
  NgmyInvoiceTemplate(id: 'minimal', label: 'Minimal', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.classic, gradient: [Color(0xFFF8FAFC), Color(0xFFE2E8F0)], accent: Color(0xFF475569), lightBackground: true),
  NgmyInvoiceTemplate(id: 'executive', label: 'Executive', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.classic, gradient: [Color(0xFF0F172A), Color(0xFF1E293B)], accent: Color(0xFF94A3B8)),
  NgmyInvoiceTemplate(id: 'gold_foil', label: 'Gold Foil', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.goldFoil, gradient: [Color(0xFF1C1917), Color(0xFF44403C)], accent: Color(0xFFFBBF24)),
  NgmyInvoiceTemplate(id: 'marble', label: 'Marble', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.marble, gradient: [Color(0xFFF5F5F4), Color(0xFFE7E5E4)], accent: Color(0xFF78716C), lightBackground: true),
  NgmyInvoiceTemplate(id: 'diamond', label: 'Diamond', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.diamond, gradient: [Color(0xFFEFF6FF), Color(0xFFDBEAFE)], accent: Color(0xFF3B82F6), lightBackground: true),
  // Premium luxurious — midnight-inspired
  NgmyInvoiceTemplate(id: 'midnight_royale', label: 'Midnight Royale', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.midnightRoyale, gradient: [Color(0xFF020617), Color(0xFF0F172A)], accent: Color(0xFFD4AF37), accent2: Color(0xFF1E293B)),
  NgmyInvoiceTemplate(id: 'obsidian_chevron', label: 'Obsidian Chevron', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.obsidianChevron, gradient: [Color(0xFF0A0A0A), Color(0xFF1A1A1A)], accent: Color(0xFFDC2626), accent2: Color(0xFF111111)),
  NgmyInvoiceTemplate(id: 'sapphire_luxe', label: 'Sapphire Luxe', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0C1445), Color(0xFF1E3A8A)], accent: Color(0xFF38BDF8), accent2: Color(0xFF818CF8)),
  NgmyInvoiceTemplate(id: 'ruby_executive', label: 'Ruby Executive', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.rubyExecutive, gradient: [Color(0xFF1F0A0A), Color(0xFF450A0A)], accent: Color(0xFFEF4444), accent2: Color(0xFFFBBF24)),
  NgmyInvoiceTemplate(id: 'onyx_prism', label: 'Onyx Prism', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.onyxPrism, gradient: [Color(0xFF09090B), Color(0xFF18181B)], accent: Color(0xFF22D3EE), accent2: Color(0xFFA78BFA)),
  NgmyInvoiceTemplate(id: 'champagne_noir', label: 'Champagne Noir', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.champagneNoir, gradient: [Color(0xFF0D0D0D), Color(0xFF1C1917)], accent: Color(0xFFE7C9A9), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'violet_crown', label: 'Violet Crown', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF1E1B4B), Color(0xFF312E81)], accent: Color(0xFFC084FC), accent2: Color(0xFFF472B6)),
  NgmyInvoiceTemplate(id: 'arctic_platinum', label: 'Arctic Platinum', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0F172A), Color(0xFF1E293B)], accent: Color(0xFFE2E8F0), accent2: Color(0xFF94A3B8)),
  NgmyInvoiceTemplate(id: 'crimson_edge', label: 'Crimson Edge', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.crimsonEdge, gradient: [Color(0xFF0F0F0F), Color(0xFF1A0505)], accent: Color(0xFFB91C1C), accent2: Color(0xFFFCA5A5)),
  NgmyInvoiceTemplate(id: 'celestial_gradient', label: 'Celestial Gradient', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0B1026), Color(0xFF1E1B4B)], accent: Color(0xFF6366F1), accent2: Color(0xFFEC4899)),
  NgmyInvoiceTemplate(id: 'golden_phoenix', label: 'Golden Phoenix', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF1A1208), Color(0xFF2D1B0E)], accent: Color(0xFFFBBF24), accent2: Color(0xFFDC2626)),
  NgmyInvoiceTemplate(id: 'midnight_blade', label: 'Midnight Blade', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.obsidianChevron, gradient: [Color(0xFF030712), Color(0xFF0F172A)], accent: Color(0xFF38BDF8), accent2: Color(0xFF1E293B)),
  NgmyInvoiceTemplate(id: 'emerald_fang', label: 'Emerald Fang', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.rubyExecutive, gradient: [Color(0xFF022C22), Color(0xFF064E3B)], accent: Color(0xFF10B981), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'royal_carbon', label: 'Royal Carbon', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.corporateStripe, gradient: [Color(0xFF0A0A0A), Color(0xFF171717)], accent: Color(0xFFD4AF37), accent2: Color(0xFF525252)),
  NgmyInvoiceTemplate(id: 'platinum_strike', label: 'Platinum Strike', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.crimsonEdge, gradient: [Color(0xFF111827), Color(0xFF1F2937)], accent: Color(0xFFE5E7EB), accent2: Color(0xFF9CA3AF)),
];

NgmyInvoiceTemplate? ngmyInvoiceTemplateById(String id) {
  try {
    return ngmyInvoiceTemplates().firstWhere((t) => t.id == id);
  } catch (_) {
    return ngmyInvoiceTemplates().first;
  }
}

/// Maps legacy display names and old ids to current template ids.
String ngmyNormalizeInvoiceTemplateId(String raw) {
  const legacy = {
    'Modern': 'modern',
    'Classic': 'classic',
    'Minimal': 'minimal',
    'Executive': 'executive',
    'Corporate': 'corporate',
    'Creative': 'creative',
    'Gold Foil': 'gold_foil',
    'Marble': 'marble',
    'Rose Gold': 'rose_gold',
    'Emerald': 'emerald',
    'Midnight': 'midnight_royale',
    'Diamond': 'diamond',
    'Exclusive': 'exclusive',
  };
  if (legacy.containsKey(raw)) return legacy[raw]!;
  try {
    ngmyInvoiceTemplates().firstWhere((t) => t.id == raw);
    return raw;
  } catch (_) {
    return 'modern';
  }
}

class NgmyInvoicePreviewData {
  final String templateId;
  final String businessName;
  final String bizStreet;
  final String bizCityStateZip;
  final String bizPhone;
  final String invoiceNo;
  final String issuedDate;
  final String dueDate;
  final String clientName;
  final String clientEmail;
  final String itemName;
  final String itemPrice;
  final String itemQty;
  final String itemDiscount;
  final String itemDesc;
  final String paymentInfo;
  final double subtotal;
  final List<Offset?> providerSignature;
  final List<Offset?> clientSignature;

  const NgmyInvoicePreviewData({
    required this.templateId,
    required this.businessName,
    required this.bizStreet,
    required this.bizCityStateZip,
    required this.bizPhone,
    required this.invoiceNo,
    required this.issuedDate,
    required this.dueDate,
    required this.clientName,
    required this.clientEmail,
    required this.itemName,
    required this.itemPrice,
    required this.itemQty,
    required this.itemDiscount,
    required this.itemDesc,
    required this.paymentInfo,
    required this.subtotal,
    required this.providerSignature,
    required this.clientSignature,
  });
}

class NgmyInvoicePreview extends StatelessWidget {
  final NgmyInvoicePreviewData data;

  const NgmyInvoicePreview({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    final t = ngmyInvoiceTemplateById(data.templateId)!;
    final c = t.headerText;
    final panel = t.lightBackground ? Colors.black.withOpacity(0.04) : Colors.white.withOpacity(0.07);
    final panelBorder = t.lightBackground ? Colors.black.withOpacity(0.08) : Colors.white.withOpacity(0.18);

    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(minHeight: 560),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: t.gradient, begin: Alignment.topLeft, end: Alignment.bottomRight),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: t.lightBackground ? Colors.black12 : Colors.white.withOpacity(0.2)),
        boxShadow: [BoxShadow(color: t.accent.withOpacity(0.28), blurRadius: 18, spreadRadius: 1)],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _LayoutDecorationPainter(t.layout, t.accent, t.accent2, t.lightBackground))),
            Positioned.fill(child: _InvoiceWatermarks(lightBackground: t.lightBackground)),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
              child: DefaultTextStyle(
                style: TextStyle(color: c),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildHeader(t, c),
                    const SizedBox(height: 12),
                    _infoPanels(t, c, panel, panelBorder),
                    const SizedBox(height: 12),
                    _tableHeader(t, c),
                    const SizedBox(height: 4),
                    _tableRow(c, t),
                    const SizedBox(height: 10),
                    _totals(t, c, panel, panelBorder),
                    if (data.itemDesc.trim().isNotEmpty) ...[
                      const SizedBox(height: 8),
                      Text(data.itemDesc.trim(), style: TextStyle(color: c.withOpacity(0.92), fontSize: 11)),
                    ],
                    if (data.paymentInfo.trim().isNotEmpty) ...[
                      const SizedBox(height: 8),
                      _paymentBlock(t, c, panel, panelBorder),
                    ],
                    const SizedBox(height: 10),
                    Center(child: Text('By signing, both parties agree to the services described herein.', style: TextStyle(color: c.withOpacity(0.78), fontSize: 9))),
                    const SizedBox(height: 10),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(child: _sigBlock('SERVICE PROVIDER', data.providerSignature, t, c, panel)),
                        const SizedBox(width: 8),
                        Expanded(child: _sigBlock('CLIENT', data.clientSignature, t, c, panel)),
                      ],
                    ),
                    const SizedBox(height: 8),
                    _footerStrip(t, c),
                    const SizedBox(height: 10),
                    Center(
                      child: Text(
                        'POWERED BY: NGMY',
                        style: TextStyle(color: c.withOpacity(0.75), letterSpacing: 1.4, fontWeight: FontWeight.w800, fontSize: 9),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader(NgmyInvoiceTemplate t, Color c) {
    final biz = data.businessName.isEmpty ? 'Your Business' : data.businessName;
    final invNo = data.invoiceNo.isEmpty ? '1' : data.invoiceNo;
    final issued = data.issuedDate.isEmpty ? '--/--/----' : data.issuedDate;

    switch (t.layout) {
      case NgmyInvoiceLayout.corporateStripe:
      case NgmyInvoiceLayout.rubyExecutive:
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('BRAND TAGLINE', style: TextStyle(fontSize: 8, letterSpacing: 1.2, color: c.withOpacity(0.65))),
                const SizedBox(height: 6),
                Text(biz, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: c)),
                ..._bizLines(c),
              ]),
            ),
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
              Text('INVOICE', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: t.accent, letterSpacing: 2)),
              const SizedBox(height: 4),
              Text('DATE: $issued', style: TextStyle(fontSize: 9, color: c.withOpacity(0.85))),
              Text('INVOICE NO: $invNo', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: c)),
            ]),
          ],
        );
      case NgmyInvoiceLayout.roseLuxury:
      case NgmyInvoiceLayout.champagneNoir:
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  Container(width: 28, height: 28, decoration: BoxDecoration(gradient: LinearGradient(colors: [t.accent, t.accent2]), borderRadius: BorderRadius.circular(6)), child: const Icon(Icons.diamond_outlined, size: 16, color: Colors.white)),
                  const SizedBox(width: 8),
                  Text(biz.toUpperCase(), style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: t.accent2)),
                ]),
                Text('YOUR BRAND SLOGAN', style: TextStyle(fontSize: 8, color: c.withOpacity(0.55))),
                ..._bizLines(c),
              ]),
            ),
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
              ShaderMask(
                shaderCallback: (r) => LinearGradient(colors: [t.accent, t.accent2]).createShader(r),
                child: const Text('INVOICE', style: TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 2)),
              ),
              Text('Invoice #: $invNo', style: TextStyle(fontSize: 9, color: c.withOpacity(0.7))),
              Text('Date: $issued', style: TextStyle(fontSize: 9, color: c.withOpacity(0.7))),
            ]),
          ],
        );
      case NgmyInvoiceLayout.obsidianChevron:
      case NgmyInvoiceLayout.crimsonEdge:
      case NgmyInvoiceLayout.luxuryCombo:
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(biz, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: t.accent)),
              Text('Professional Services', style: TextStyle(fontSize: 9, color: c.withOpacity(0.6))),
            ]),
            const Spacer(),
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
              Text('INVOICE', style: TextStyle(fontSize: 30, fontWeight: FontWeight.w900, color: t.accent)),
              Text('Invoice# $invNo', style: TextStyle(fontSize: 10, color: c.withOpacity(0.8))),
              Text('Date $issued', style: TextStyle(fontSize: 10, color: c.withOpacity(0.8))),
            ]),
          ],
        );
      case NgmyInvoiceLayout.modernWave:
      case NgmyInvoiceLayout.sapphireLuxe:
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(biz.toUpperCase(), style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: c)),
                Text('Your Tagline Space', style: TextStyle(fontSize: 8, color: c.withOpacity(0.65))),
                ..._bizLines(c),
              ]),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              decoration: BoxDecoration(color: t.lightBackground ? t.accent2 : const Color(0xFF0B1F3A), borderRadius: BorderRadius.circular(4)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                const Text('INVOICE', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 1.5)),
                Text('#$invNo', style: const TextStyle(fontSize: 11, color: Colors.white70)),
              ]),
            ),
          ],
        );
      default:
        return Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('INVOICE', style: TextStyle(letterSpacing: 1.5, fontSize: 26, fontWeight: FontWeight.w300, color: c.withOpacity(0.95))),
                const SizedBox(height: 3),
                Text(biz, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: c.withOpacity(0.95))),
                ..._bizLines(c),
              ]),
            ),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 8),
              decoration: BoxDecoration(
                color: t.lightBackground ? Colors.black.withOpacity(0.06) : Colors.white.withOpacity(0.08),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: t.lightBackground ? Colors.black12 : Colors.white24),
              ),
              child: Column(children: [
                Text('INVOICE', style: TextStyle(fontSize: 8, letterSpacing: 0.8, color: c.withOpacity(0.85))),
                Text('#$invNo', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: c)),
                Text(issued, style: TextStyle(fontSize: 8, color: c.withOpacity(0.7))),
              ]),
            ),
          ],
        );
    }
  }

  List<Widget> _bizLines(Color c) {
    return [
      if (data.bizStreet.trim().isNotEmpty) Text(data.bizStreet.trim(), style: TextStyle(fontSize: 9, color: c.withOpacity(0.85))),
      if (data.bizCityStateZip.trim().isNotEmpty) Text(data.bizCityStateZip.trim(), style: TextStyle(fontSize: 9, color: c.withOpacity(0.85))),
      if (data.bizPhone.trim().isNotEmpty) Text(data.bizPhone.trim(), style: TextStyle(fontSize: 9, color: c.withOpacity(0.85))),
    ];
  }

  Widget _infoPanels(NgmyInvoiceTemplate t, Color c, Color panel, Color panelBorder) {
    final client = data.clientName.isEmpty ? 'Client Name' : data.clientName;
    final due = data.dueDate.isEmpty ? '—' : data.dueDate;
    final issued = data.issuedDate.isEmpty ? '--/--/----' : data.issuedDate;

    if (t.layout == NgmyInvoiceLayout.corporateStripe || t.layout == NgmyInvoiceLayout.rubyExecutive) {
      return Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: _labeledBox('INVOICE TO', [client, if (data.clientEmail.isNotEmpty) data.clientEmail], t, c)),
          const SizedBox(width: 8),
          Expanded(child: _labeledBox('COMPANY', [data.businessName.isEmpty ? 'Company Name' : data.businessName, ..._bizLineStrings()], t, c)),
        ],
      );
    }

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10), border: Border.all(color: panelBorder)),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('CLIENT', style: TextStyle(fontSize: 9, letterSpacing: 1.4, fontWeight: FontWeight.w700, color: c.withOpacity(0.75))),
              const SizedBox(height: 3),
              Text(client, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: c)),
              if (data.clientEmail.trim().isNotEmpty) Text(data.clientEmail.trim(), style: TextStyle(fontSize: 10, color: c.withOpacity(0.88))),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text('Issued: $issued', style: TextStyle(fontSize: 10, color: c.withOpacity(0.9))),
            Text('Due: $due', style: TextStyle(fontSize: 10, color: c.withOpacity(0.9))),
          ]),
        ],
      ),
    );
  }

  List<String> _bizLineStrings() {
    return [
      if (data.bizStreet.trim().isNotEmpty) data.bizStreet.trim(),
      if (data.bizCityStateZip.trim().isNotEmpty) data.bizCityStateZip.trim(),
      if (data.bizPhone.trim().isNotEmpty) data.bizPhone.trim(),
    ];
  }

  Widget _labeledBox(String title, List<String> lines, NgmyInvoiceTemplate t, Color c) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 8),
          decoration: BoxDecoration(color: t.accent, borderRadius: const BorderRadius.vertical(top: Radius.circular(8))),
          child: Text(title, style: const TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 1)),
        ),
        Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: t.lightBackground ? Colors.white : Colors.white.withOpacity(0.06),
            borderRadius: const BorderRadius.vertical(bottom: Radius.circular(8)),
            border: Border.all(color: t.accent.withOpacity(0.35)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: lines.map((l) => Padding(padding: const EdgeInsets.only(bottom: 2), child: Text(l, style: TextStyle(fontSize: 9, color: t.lightBackground ? Colors.black87 : c)))).toList(),
          ),
        ),
      ],
    );
  }

  Widget _tableHeader(NgmyInvoiceTemplate t, Color c) {
    final useAccentBar = t.layout != NgmyInvoiceLayout.classic && t.layout != NgmyInvoiceLayout.marble && t.layout != NgmyInvoiceLayout.diamond;
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 10),
      decoration: BoxDecoration(
        gradient: useAccentBar ? LinearGradient(colors: [t.accent, t.accent2.withOpacity(0.85)]) : null,
        color: useAccentBar ? null : (t.lightBackground ? Colors.black.withOpacity(0.06) : Colors.white.withOpacity(0.08)),
        borderRadius: BorderRadius.circular(useAccentBar ? 6 : 7),
      ),
      child: Row(
        children: [
          Expanded(child: Text('ITEM DESCRIPTION', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: useAccentBar ? Colors.white : c))),
          SizedBox(width: 52, child: Text('PRICE', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: useAccentBar ? Colors.white : c))),
          SizedBox(width: 36, child: Text('QTY', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: useAccentBar ? Colors.white : c))),
          SizedBox(width: 44, child: Text('DISC.', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: useAccentBar ? Colors.white : c))),
          SizedBox(width: 60, child: Text('TOTAL', textAlign: TextAlign.right, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: useAccentBar ? Colors.white : c))),
        ],
      ),
    );
  }

  Widget _tableRow(Color c, NgmyInvoiceTemplate t) {
    final name = data.itemName.isEmpty ? 'Item' : data.itemName;
    final price = _fmt(data.itemPrice);
    final qty = data.itemQty.isEmpty ? '1' : data.itemQty;
    final disc = '${_num(data.itemDiscount).toStringAsFixed(0)}%';
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 7, horizontal: 10),
      decoration: BoxDecoration(
        border: Border(bottom: BorderSide(color: t.lightBackground ? Colors.black12 : Colors.white12)),
      ),
      child: Row(
        children: [
          Expanded(child: Text(name, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: c))),
          SizedBox(width: 52, child: Text('\$$price', textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: c))),
          SizedBox(width: 36, child: Text(qty, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: c))),
          SizedBox(width: 44, child: Text(disc, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: c))),
          SizedBox(width: 60, child: Text('\$${data.subtotal.toStringAsFixed(2)}', textAlign: TextAlign.right, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: c))),
        ],
      ),
    );
  }

  Widget _totals(NgmyInvoiceTemplate t, Color c, Color panel, Color panelBorder) {
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        width: 220,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10), border: Border.all(color: panelBorder)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Subtotal', style: TextStyle(fontSize: 11, color: c.withOpacity(0.8))),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              decoration: BoxDecoration(color: t.accent, borderRadius: BorderRadius.circular(6)),
              child: Row(
                children: [
                  const Text('TOTAL DUE', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: Colors.white)),
                  const Spacer(),
                  Text('\$${data.subtotal.toStringAsFixed(2)}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Colors.white)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _paymentBlock(NgmyInvoiceTemplate t, Color c, Color panel, Color panelBorder) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(8), border: Border.all(color: panelBorder)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('PAYMENT & NOTES', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: t.accent)),
          const SizedBox(height: 4),
          Text(data.paymentInfo.trim(), style: TextStyle(color: c.withOpacity(0.92), fontSize: 11, height: 1.35)),
        ],
      ),
    );
  }

  Widget _sigBlock(String label, List<Offset?> points, NgmyInvoiceTemplate t, Color c, Color panel) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: c)),
          const SizedBox(height: 6),
          Container(
            height: 48,
            width: double.infinity,
            decoration: BoxDecoration(
              color: t.lightBackground ? Colors.white : Colors.white.withOpacity(0.96),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: t.accent.withOpacity(0.35)),
            ),
            child: previewSignature(points, height: 48, color: const Color(0xFF0F172A)),
          ),
          const SizedBox(height: 4),
          Text('Sign Here', style: TextStyle(fontSize: 8, color: c.withOpacity(0.55), fontStyle: FontStyle.italic)),
        ],
      ),
    );
  }

  Widget _footerStrip(NgmyInvoiceTemplate t, Color c) {
    return Row(
      children: [
        Expanded(child: Text('THANKS FOR YOUR BUSINESS', style: TextStyle(fontSize: 8, letterSpacing: 1, fontWeight: FontWeight.w700, color: c.withOpacity(0.65)))),
        if (t.category == kNgmyInvoicePremiumCategory)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
            decoration: BoxDecoration(border: Border.all(color: t.accent.withOpacity(0.5)), borderRadius: BorderRadius.circular(20)),
            child: Text('PREMIUM', style: TextStyle(fontSize: 7, letterSpacing: 1.2, color: t.accent, fontWeight: FontWeight.w800)),
          ),
      ],
    );
  }

  String _fmt(String v) => _num(v).toStringAsFixed(2);
  double _num(String v) => double.tryParse(v.trim()) ?? 0;
}

class _InvoiceWatermarks extends StatelessWidget {
  final bool lightBackground;

  const _InvoiceWatermarks({required this.lightBackground});

  @override
  Widget build(BuildContext context) {
    final color = lightBackground ? Colors.black.withOpacity(0.06) : Colors.white.withOpacity(0.08);
    return IgnorePointer(
      child: LayoutBuilder(
        builder: (_, constraints) {
          final h = constraints.maxHeight;
          final w = constraints.maxWidth;
          final positions = [h * 0.22, h * 0.50, h * 0.78];
          return Stack(
            children: positions.map((top) {
              return Positioned(
                left: w * 0.18,
                top: top - 28,
                child: Transform.rotate(
                  angle: -0.65,
                  child: Text(
                    'NGMY',
                    style: TextStyle(
                      fontSize: 52,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 6,
                      color: color,
                    ),
                  ),
                ),
              );
            }).toList(),
          );
        },
      ),
    );
  }
}

class _LayoutDecorationPainter extends CustomPainter {
  final NgmyInvoiceLayout layout;
  final Color accent;
  final Color accent2;
  final bool light;

  _LayoutDecorationPainter(this.layout, this.accent, this.accent2, this.light);

  @override
  void paint(Canvas canvas, Size size) {
    switch (layout) {
      case NgmyInvoiceLayout.corporateStripe:
      case NgmyInvoiceLayout.rubyExecutive:
        _diagonalStripes(canvas, size, topRight: true, bottomLeft: true);
        break;
      case NgmyInvoiceLayout.obsidianChevron:
      case NgmyInvoiceLayout.crimsonEdge:
        _chevrons(canvas, size);
        _diagonalStripes(canvas, size, topRight: true, bottomLeft: false);
        break;
      case NgmyInvoiceLayout.luxuryCombo:
        _chevrons(canvas, size);
        _diagonalStripes(canvas, size, topRight: true, bottomLeft: true);
        _bottomTriangles(canvas, size);
        _goldFrame(canvas, size, dense: true);
        break;
      case NgmyInvoiceLayout.modernWave:
      case NgmyInvoiceLayout.sapphireLuxe:
        _wave(canvas, size);
        break;
      case NgmyInvoiceLayout.roseLuxury:
      case NgmyInvoiceLayout.celestialGradient:
      case NgmyInvoiceLayout.violetCrown:
        _bottomTriangles(canvas, size);
        break;
      case NgmyInvoiceLayout.midnightRoyale:
      case NgmyInvoiceLayout.champagneNoir:
      case NgmyInvoiceLayout.arcticPlatinum:
      case NgmyInvoiceLayout.onyxPrism:
        _goldFrame(canvas, size);
        break;
      case NgmyInvoiceLayout.exclusiveGold:
      case NgmyInvoiceLayout.goldFoil:
        _goldFrame(canvas, size, dense: true);
        break;
      case NgmyInvoiceLayout.emeraldPrestige:
        _diagonalStripes(canvas, size, topRight: true, bottomLeft: false, color: accent.withOpacity(0.35));
        break;
      case NgmyInvoiceLayout.creativeFusion:
        _dots(canvas, size);
        break;
      default:
        break;
    }
  }

  void _diagonalStripes(Canvas canvas, Size size, {required bool topRight, required bool bottomLeft, Color? color}) {
    final c1 = color ?? accent;
    final c2 = accent2.withOpacity(0.7);
    final paint = Paint()..style = PaintingStyle.fill;
    if (topRight) {
      final path = Path()
        ..moveTo(size.width * 0.72, 0)
        ..lineTo(size.width, 0)
        ..lineTo(size.width, size.height * 0.22)
        ..close();
      paint.color = c1.withOpacity(0.55);
      canvas.drawPath(path, paint);
      paint.color = c2.withOpacity(0.45);
      canvas.drawPath(path.shift(const Offset(-18, 12)), paint);
    }
    if (bottomLeft) {
      final path = Path()
        ..moveTo(0, size.height * 0.78)
        ..lineTo(0, size.height)
        ..lineTo(size.width * 0.28, size.height)
        ..close();
      paint.color = c1.withOpacity(0.4);
      canvas.drawPath(path, paint);
    }
  }

  void _chevrons(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.fill;
    paint.color = accent.withOpacity(0.85);
    canvas.drawPath(Path()
      ..moveTo(0, 0)
      ..lineTo(size.width * 0.35, 0)
      ..lineTo(size.width * 0.22, size.height * 0.14)
      ..lineTo(0, size.height * 0.14)
      ..close(), paint);
    paint.color = accent2.withOpacity(0.9);
    canvas.drawPath(Path()
      ..moveTo(size.width * 0.65, size.height)
      ..lineTo(size.width, size.height)
      ..lineTo(size.width, size.height * 0.86)
      ..lineTo(size.width * 0.78, size.height)
      ..close(), paint);
  }

  void _wave(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = accent.withOpacity(0.35)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 14;
    final path = Path()
      ..moveTo(0, size.height * 0.92)
      ..quadraticBezierTo(size.width * 0.35, size.height * 0.82, size.width * 0.55, size.height * 0.92)
      ..quadraticBezierTo(size.width * 0.75, size.height * 1.02, size.width, size.height * 0.88);
    canvas.drawPath(path, paint);
    paint.color = accent2.withOpacity(0.25);
    paint.strokeWidth = 22;
    canvas.drawPath(path.shift(const Offset(0, 6)), paint);
  }

  void _bottomTriangles(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.fill;
    for (var i = 0; i < 5; i++) {
      paint.shader = LinearGradient(colors: [accent.withOpacity(0.35), accent2.withOpacity(0.25)]).createShader(Rect.fromLTWH(0, size.height - 80, size.width, 80));
      final x = size.width * (0.1 + i * 0.18);
      canvas.drawPath(Path()
        ..moveTo(x, size.height)
        ..lineTo(x + 40, size.height - 50)
        ..lineTo(x + 80, size.height)
        ..close(), paint);
    }
  }

  void _goldFrame(Canvas canvas, Size size, {bool dense = false}) {
    final paint = Paint()
      ..color = accent.withOpacity(dense ? 0.35 : 0.2)
      ..style = PaintingStyle.stroke
      ..strokeWidth = dense ? 1.5 : 1;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(8, 8, size.width - 16, size.height - 16), const Radius.circular(10)), paint);
    paint.color = accent.withOpacity(0.08);
    paint.style = PaintingStyle.fill;
    canvas.drawCircle(Offset(size.width - 24, 24), dense ? 18 : 14, paint);
    canvas.drawCircle(Offset(24, size.height - 24), dense ? 14 : 10, paint);
  }

  void _dots(Canvas canvas, Size size) {
    final paint = Paint()..color = accent.withOpacity(0.12);
    final rnd = math.Random(7);
    for (var i = 0; i < 40; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 3 + 1, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _LayoutDecorationPainter oldDelegate) => oldDelegate.layout != layout;
}

/// Template picker chips grouped by category (3 per row).
Widget ngmyInvoiceTemplatePicker({
  required BuildContext context,
  required String selectedId,
  required ValueChanged<String> onSelect,
}) {
  final all = ngmyInvoiceTemplates();
  final categories = [kNgmyInvoiceStandardCategory, kNgmyInvoicePremiumCategory];
  final screenW = MediaQuery.of(context).size.width;
  final chipW = (screenW - 48) / 3;

  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: categories.map((cat) {
      final items = all.where((t) => t.category == cat).toList();
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 4, bottom: 6),
            child: Row(
              children: [
                Icon(cat == kNgmyInvoicePremiumCategory ? Icons.diamond_rounded : Icons.palette_outlined, size: 16, color: cat == kNgmyInvoicePremiumCategory ? const Color(0xFFD4AF37) : const Color(0xFF64748B)),
                const SizedBox(width: 6),
                Text(cat, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: cat == kNgmyInvoicePremiumCategory ? const Color(0xFFD4AF37) : const Color(0xFF475569))),
              ],
            ),
          ),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: items.map((t) {
              final selected = selectedId == t.id;
              return GestureDetector(
                onTap: () => onSelect(t.id),
                child: Container(
                  width: chipW.clamp(100, 140),
                  padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 6),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(colors: t.gradient),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: selected ? (t.lightBackground ? Colors.black : Colors.white) : Colors.transparent, width: 2),
                    boxShadow: cat == kNgmyInvoicePremiumCategory ? [BoxShadow(color: t.accent.withOpacity(0.35), blurRadius: 8)] : null,
                  ),
                  child: Text(
                    t.label,
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: t.lightBackground ? Colors.black87 : Colors.white, fontWeight: FontWeight.w700, fontSize: 10),
                  ),
                ),
              );
            }).toList(),
          ),
          const SizedBox(height: 8),
        ],
      );
    }).toList(),
  );
}

/// Small swatch for saved invoice list.
List<Color> ngmyInvoiceGradientForId(String id) => ngmyInvoiceTemplateById(id)?.gradient ?? const [Color(0xFF1E293B), Color(0xFF334155)];
