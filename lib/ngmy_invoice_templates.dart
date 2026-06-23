import 'dart:math' as math;
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'ngmy_invoice_signature.dart';

part 'ngmy_invoice_essential_luxury.dart';
part 'ngmy_invoice_standard_luxury.dart';

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
  standardCorporateLux,
  standardCreativeLux,
  standardClassicLux,
  standardMinimalLux,
  standardDiamondLux,
  essentialBroadcast,
  essentialHerald,
  essentialBulletin,
  essentialChronicle,
  essentialGazette,
  essentialWire,
  essentialFlash,
  essentialDispatch,
  essentialRose,
  essentialMidnight,
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
  final bool essentialLuxury;

  const NgmyInvoiceTemplate({
    required this.id,
    required this.label,
    required this.category,
    required this.layout,
    required this.gradient,
    required this.accent,
    this.accent2 = Colors.black,
    this.lightBackground = false,
    this.essentialLuxury = false,
  });

  Color get headerText => lightBackground ? const Color(0xFF1E293B) : Colors.white;
}

const kNgmyInvoiceStandardCategory = 'Standard';
const kNgmyInvoicePremiumCategory = 'Premium';
const kNgmyInvoiceLuxuryCategory = 'Luxury';

bool ngmyIsEssentialLuxuryTemplate(String id) =>
    ngmyInvoiceTemplateById(id)?.essentialLuxury == true;

List<NgmyInvoiceTemplate> ngmyEssentialLuxuryTemplates() =>
    ngmyInvoiceTemplates().where((t) => t.essentialLuxury).toList();

List<NgmyInvoiceTemplate> ngmyInvoiceTemplates() => const [
  // Standard — only these five are free; order matches the picker grid.
  NgmyInvoiceTemplate(id: 'creative', label: 'Creative', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.standardCreativeLux, gradient: [Color(0xFF1E1B4B), Color(0xFF4C1D95), Color(0xFF831843)], accent: Color(0xFFC084FC), accent2: Color(0xFFEC4899)),
  NgmyInvoiceTemplate(id: 'modern', label: 'Modern', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.modernWave, gradient: [Color(0xFF0B1F3A), Color(0xFF00B4D8)], accent: Color(0xFF00B4D8)),
  NgmyInvoiceTemplate(id: 'rose_gold', label: 'Rose Gold', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.roseLuxury, gradient: [Color(0xFFF8E8E8), Color(0xFFE29595)], accent: Color(0xFFB76E79), accent2: Color(0xFF301934), lightBackground: true),
  NgmyInvoiceTemplate(id: 'minimal', label: 'Minimal', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.standardMinimalLux, gradient: [Color(0xFFFFFBF5), Color(0xFFF5F0E8), Color(0xFFE8E0D4)], accent: Color(0xFFB8860B), accent2: Color(0xFF78716C), lightBackground: true),
  NgmyInvoiceTemplate(id: 'diamond', label: 'Diamond', category: kNgmyInvoiceStandardCategory, layout: NgmyInvoiceLayout.standardDiamondLux, gradient: [Color(0xFFF0F9FF), Color(0xFFE0F2FE), Color(0xFFBAE6FD)], accent: Color(0xFF0284C7), accent2: Color(0xFF38BDF8), lightBackground: true),
  // Former Standard templates — now paid (Premium tier).
  NgmyInvoiceTemplate(id: 'corporate', label: 'Corporate', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.standardCorporateLux, gradient: [Color(0xFF0A1628), Color(0xFF1E3A8A), Color(0xFF0F172A)], accent: Color(0xFFD4AF37), accent2: Color(0xFF2563EB)),
  NgmyInvoiceTemplate(id: 'emerald', label: 'Emerald', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.emeraldPrestige, gradient: [Color(0xFF022C22), Color(0xFF065F46)], accent: Color(0xFF10B981), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'exclusive', label: 'Exclusive', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.exclusiveGold, gradient: [Color(0xFF0C0C0C), Color(0xFF1A1A2E)], accent: Color(0xFFD4AF37), accent2: Color(0xFFC0C0C0)),
  NgmyInvoiceTemplate(id: 'classic', label: 'Classic', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.standardClassicLux, gradient: [Color(0xFF0F172A), Color(0xFF1E293B), Color(0xFF334155)], accent: Color(0xFFCBD5E1), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'executive', label: 'Executive', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.classic, gradient: [Color(0xFF0F172A), Color(0xFF1E293B)], accent: Color(0xFF94A3B8)),
  NgmyInvoiceTemplate(id: 'gold_foil', label: 'Gold Foil', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.goldFoil, gradient: [Color(0xFF1C1917), Color(0xFF44403C)], accent: Color(0xFFFBBF24)),
  NgmyInvoiceTemplate(id: 'marble', label: 'Marble', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.marble, gradient: [Color(0xFFF5F5F4), Color(0xFFE7E5E4)], accent: Color(0xFF78716C), lightBackground: true),
  // Premium luxurious — midnight-inspired
  NgmyInvoiceTemplate(id: 'midnight_royale', label: 'Midnight Royale', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.midnightRoyale, gradient: [Color(0xFF020617), Color(0xFF0F172A)], accent: Color(0xFFD4AF37), accent2: Color(0xFF1E293B)),
  NgmyInvoiceTemplate(id: 'obsidian_chevron', label: 'Obsidian Chevron', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.obsidianChevron, gradient: [Color(0xFF0A0A0A), Color(0xFF1A1A1A)], accent: Color(0xFFDC2626), accent2: Color(0xFF111111)),
  NgmyInvoiceTemplate(id: 'sapphire_luxe', label: 'Sapphire Luxe', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0C1445), Color(0xFF1E3A8A)], accent: Color(0xFF38BDF8), accent2: Color(0xFF818CF8)),
  NgmyInvoiceTemplate(id: 'ruby_executive', label: 'Ruby Executive', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.rubyExecutive, gradient: [Color(0xFF1F0A0A), Color(0xFF450A0A)], accent: Color(0xFFEF4444), accent2: Color(0xFFFBBF24)),
  NgmyInvoiceTemplate(id: 'onyx_prism', label: 'Onyx Prism', category: kNgmyInvoicePremiumCategory, layout: NgmyInvoiceLayout.onyxPrism, gradient: [Color(0xFF09090B), Color(0xFF18181B)], accent: Color(0xFF22D3EE), accent2: Color(0xFFA78BFA)),
  NgmyInvoiceTemplate(id: 'champagne_noir', label: 'Champagne Noir', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.champagneNoir, gradient: [Color(0xFF0D0D0D), Color(0xFF1C1917)], accent: Color(0xFFE7C9A9), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'violet_crown', label: 'Violet Crown', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF1E1B4B), Color(0xFF312E81)], accent: Color(0xFFC084FC), accent2: Color(0xFFF472B6)),
  NgmyInvoiceTemplate(id: 'arctic_platinum', label: 'Arctic Platinum', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0F172A), Color(0xFF1E293B)], accent: Color(0xFFE2E8F0), accent2: Color(0xFF94A3B8)),
  NgmyInvoiceTemplate(id: 'crimson_edge', label: 'Crimson Edge', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.crimsonEdge, gradient: [Color(0xFF0F0F0F), Color(0xFF1A0505)], accent: Color(0xFFB91C1C), accent2: Color(0xFFFCA5A5)),
  NgmyInvoiceTemplate(id: 'celestial_gradient', label: 'Celestial Gradient', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF0B1026), Color(0xFF1E1B4B)], accent: Color(0xFF6366F1), accent2: Color(0xFFEC4899)),
  NgmyInvoiceTemplate(id: 'golden_phoenix', label: 'Golden Phoenix', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.luxuryCombo, gradient: [Color(0xFF1A1208), Color(0xFF2D1B0E)], accent: Color(0xFFFBBF24), accent2: Color(0xFFDC2626)),
  NgmyInvoiceTemplate(id: 'midnight_blade', label: 'Midnight Blade', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.obsidianChevron, gradient: [Color(0xFF030712), Color(0xFF0F172A)], accent: Color(0xFF38BDF8), accent2: Color(0xFF1E293B)),
  NgmyInvoiceTemplate(id: 'emerald_fang', label: 'Emerald Fang', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.rubyExecutive, gradient: [Color(0xFF022C22), Color(0xFF064E3B)], accent: Color(0xFF10B981), accent2: Color(0xFFD4AF37)),
  NgmyInvoiceTemplate(id: 'royal_carbon', label: 'Royal Carbon', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.corporateStripe, gradient: [Color(0xFF0A0A0A), Color(0xFF171717)], accent: Color(0xFFD4AF37), accent2: Color(0xFF525252)),
  NgmyInvoiceTemplate(id: 'platinum_strike', label: 'Platinum Strike', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.crimsonEdge, gradient: [Color(0xFF111827), Color(0xFF1F2937)], accent: Color(0xFFE5E7EB), accent2: Color(0xFF9CA3AF)),
  // Essential Luxury — editorial broadcast style (dropdown in picker)
  NgmyInvoiceTemplate(id: 'essential_crimson', label: 'Crimson Broadcast', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialBroadcast, gradient: [Color(0xFF1A0505), Color(0xFF3D0A0A), Color(0xFF120303)], accent: Color(0xFFB91C1C), accent2: Color(0xFF7F1D1D), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_gold', label: 'Gold Herald', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialHerald, gradient: [Color(0xFF120E08), Color(0xFF2A1F0E), Color(0xFF0A0805)], accent: Color(0xFFD4AF37), accent2: Color(0xFFCA8A04), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_sapphire', label: 'Sapphire Bulletin', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialBulletin, gradient: [Color(0xFF020617), Color(0xFF0C1A3D), Color(0xFF030712)], accent: Color(0xFF1D4ED8), accent2: Color(0xFF2563EB), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_emerald', label: 'Emerald Chronicle', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialChronicle, gradient: [Color(0xFF02140F), Color(0xFF064E3B), Color(0xFF011A12)], accent: Color(0xFF059669), accent2: Color(0xFF10B981), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_violet', label: 'Violet Gazette', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialGazette, gradient: [Color(0xFF0C0618), Color(0xFF2E1065), Color(0xFF12061E)], accent: Color(0xFF7C3AED), accent2: Color(0xFFA855F7), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_platinum', label: 'Platinum Wire', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialWire, gradient: [Color(0xFF0B0D10), Color(0xFF1E293B), Color(0xFF080A0D)], accent: Color(0xFFE2E8F0), accent2: Color(0xFF94A3B8), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_amber', label: 'Amber Flash', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialFlash, gradient: [Color(0xFF120A02), Color(0xFF422006), Color(0xFF1A0F03)], accent: Color(0xFFF59E0B), accent2: Color(0xFFFBBF24), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_ocean', label: 'Ocean Dispatch', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialDispatch, gradient: [Color(0xFF021018), Color(0xFF0E4D64), Color(0xFF031820)], accent: Color(0xFF0891B2), accent2: Color(0xFF22D3EE), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_rose', label: 'Rose Edition', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialRose, gradient: [Color(0xFF12060A), Color(0xFF4C0519), Color(0xFF1A0810)], accent: Color(0xFFE11D48), accent2: Color(0xFFF43F5E), essentialLuxury: true),
  NgmyInvoiceTemplate(id: 'essential_midnight', label: 'Midnight News', category: kNgmyInvoiceLuxuryCategory, layout: NgmyInvoiceLayout.essentialMidnight, gradient: [Color(0xFF050508), Color(0xFF111827), Color(0xFF0F172A)], accent: Color(0xFFD4AF37), accent2: Color(0xFF94A3B8), essentialLuxury: true),
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
  final Uint8List? providerPhotoBytes;
  /// `estimate` uses repair-estimate copy on luxury templates; default `invoice`.
  final String documentKind;
  final bool isPaid;

  const NgmyInvoicePreviewData({
    required this.templateId,
    this.documentKind = 'invoice',
    this.isPaid = false,
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
    this.providerPhotoBytes,
  });
}

class NgmyInvoicePreview extends StatelessWidget {
  final NgmyInvoicePreviewData data;

  const NgmyInvoicePreview({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    final t = ngmyInvoiceTemplateById(data.templateId)!;
    if (t.essentialLuxury) {
      return _NgmyEssentialLuxuryInvoice(data: data, template: t);
    }
    if (ngmyIsStandardLuxuryLayout(t.layout)) {
      return _NgmyStandardLuxuryInvoice(data: data, template: t);
    }
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
            if (data.isPaid) Positioned(right: 18, top: 88, child: _paidStampSeal(t)),
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
    final due = data.isPaid ? 0.0 : data.subtotal;
    final stamp = _paidStampStyle(t);
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        width: 220,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10), border: Border.all(color: panelBorder)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (data.isPaid) ...[
              _paidBanner(t, stamp),
              const SizedBox(height: 8),
            ],
            Text('Subtotal', style: TextStyle(fontSize: 11, color: c.withOpacity(0.8))),
            Text('\$${data.subtotal.toStringAsFixed(2)}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: c)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              decoration: BoxDecoration(
                gradient: data.isPaid
                    ? LinearGradient(colors: [stamp.gradient.first.withOpacity(0.85), stamp.gradient.last.withOpacity(0.85)])
                    : null,
                color: data.isPaid ? null : t.accent,
                borderRadius: BorderRadius.circular(6),
                border: data.isPaid ? Border.all(color: stamp.borderColor.withOpacity(0.65), width: 1.2) : null,
              ),
              child: Row(
                children: [
                  Text(
                    data.isPaid ? 'BALANCE DUE' : 'TOTAL DUE',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: data.isPaid ? stamp.textColor : Colors.white),
                  ),
                  const Spacer(),
                  Text(
                    '\$${due.toStringAsFixed(2)}',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: data.isPaid ? stamp.textColor : Colors.white),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _paidBanner(NgmyInvoiceTemplate t, _PaidStampStyle stamp) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: stamp.gradient),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: stamp.borderColor.withOpacity(0.75), width: 1.4),
        boxShadow: [BoxShadow(color: stamp.gradient.first.withOpacity(0.35), blurRadius: 8, offset: const Offset(0, 2))],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(stamp.icon, size: 16, color: stamp.textColor),
          const SizedBox(width: 6),
          Text(
            'PAID',
            style: TextStyle(color: stamp.textColor, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 2.2),
          ),
        ],
      ),
    );
  }

  Widget _paidStampSeal(NgmyInvoiceTemplate t) {
    final stamp = _paidStampStyle(t);
    return Transform.rotate(
      angle: -0.28,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(6),
          border: Border.all(color: stamp.borderColor, width: 2.4),
          gradient: LinearGradient(
            colors: [stamp.gradient.first.withOpacity(0.22), stamp.gradient.last.withOpacity(0.38)],
          ),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(stamp.icon, color: stamp.borderColor, size: 18),
            const SizedBox(height: 2),
            Text(
              'PAID',
              style: TextStyle(color: stamp.borderColor, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 3),
            ),
          ],
        ),
      ),
    );
  }

  _PaidStampStyle _paidStampStyle(NgmyInvoiceTemplate t) {
    if (t.category == kNgmyInvoiceLuxuryCategory) {
      return _PaidStampStyle(
        gradient: [t.accent, t.accent2],
        textColor: t.lightBackground ? const Color(0xFF0F172A) : Colors.white,
        borderColor: t.accent2,
        icon: Icons.diamond_rounded,
      );
    }
    if (t.category == kNgmyInvoicePremiumCategory) {
      return _PaidStampStyle(
        gradient: [t.accent, Color.lerp(t.accent, t.accent2, 0.55)!],
        textColor: Colors.white,
        borderColor: t.accent,
        icon: Icons.workspace_premium_rounded,
      );
    }
    if (t.lightBackground) {
      return const _PaidStampStyle(
        gradient: [Color(0xFF059669), Color(0xFF10B981)],
        textColor: Colors.white,
        borderColor: Color(0xFF047857),
        icon: Icons.check_circle_rounded,
      );
    }
    return _PaidStampStyle(
      gradient: [t.accent, t.accent2],
      textColor: Colors.white,
      borderColor: t.accent,
      icon: Icons.verified_rounded,
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
        if (t.category == kNgmyInvoicePremiumCategory || t.category == kNgmyInvoiceLuxuryCategory)
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

class _PaidStampStyle {
  const _PaidStampStyle({
    required this.gradient,
    required this.textColor,
    required this.borderColor,
    required this.icon,
  });

  final List<Color> gradient;
  final Color textColor;
  final Color borderColor;
  final IconData icon;
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

/// Template picker — Standard & Premium always visible; Luxury expands via dropdown.
Widget ngmyInvoiceTemplatePicker({
  required BuildContext context,
  required String selectedId,
  required ValueChanged<String> onSelect,
}) {
  return NgmyInvoiceTemplatePicker(
    selectedId: selectedId,
    onSelect: onSelect,
  );
}

class NgmyInvoiceTemplatePicker extends StatefulWidget {
  final String selectedId;
  final ValueChanged<String> onSelect;

  const NgmyInvoiceTemplatePicker({
    super.key,
    required this.selectedId,
    required this.onSelect,
  });

  @override
  State<NgmyInvoiceTemplatePicker> createState() => _NgmyInvoiceTemplatePickerState();
}

class _NgmyInvoiceTemplatePickerState extends State<NgmyInvoiceTemplatePicker> {
  bool _luxuryExpanded = false;

  @override
  Widget build(BuildContext context) {
    final all = ngmyInvoiceTemplates();
    const categories = [kNgmyInvoiceStandardCategory, kNgmyInvoicePremiumCategory];
    const gap = 6.0;

    Widget templateChip(NgmyInvoiceTemplate t, {bool isLuxury = false}) {
      final selected = widget.selectedId == t.id;
      return GestureDetector(
        onTap: () => widget.onSelect(t.id),
        child: Container(
          height: 52,
          padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: t.gradient),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(
              color: selected ? (t.lightBackground ? Colors.black : Colors.white) : Colors.white24,
              width: selected ? 2 : 1,
            ),
            boxShadow: isLuxury || t.essentialLuxury
                ? [BoxShadow(color: t.accent.withValues(alpha: 0.35), blurRadius: 8)]
                : null,
          ),
          alignment: Alignment.center,
          child: Text(
            t.label,
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: t.lightBackground ? Colors.black87 : Colors.white,
              fontWeight: FontWeight.w700,
              fontSize: 10,
              height: 1.1,
            ),
          ),
        ),
      );
    }

    Widget rowOfThree(List<NgmyInvoiceTemplate> rowItems, {bool isLuxury = false}) {
      return Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          for (var i = 0; i < 3; i++) ...[
            if (i > 0) SizedBox(width: gap),
            Expanded(
              child: i < rowItems.length ? templateChip(rowItems[i], isLuxury: isLuxury) : const SizedBox(height: 52),
            ),
          ],
        ],
      );
    }

    Widget categoryRows(List<NgmyInvoiceTemplate> items, {bool isLuxury = false}) {
      final rows = <Widget>[];
      for (var i = 0; i < items.length; i += 3) {
        final chunk = items.sublist(i, math.min(i + 3, items.length));
        rows.add(rowOfThree(chunk, isLuxury: isLuxury));
        if (i + 3 < items.length) rows.add(SizedBox(height: gap));
      }
      return Column(crossAxisAlignment: CrossAxisAlignment.start, children: rows);
    }

    IconData catIcon(String cat) => switch (cat) {
          kNgmyInvoiceLuxuryCategory => Icons.diamond_rounded,
          kNgmyInvoicePremiumCategory => Icons.workspace_premium_rounded,
          _ => Icons.palette_outlined,
        };

    Color catColor(String cat) => switch (cat) {
          kNgmyInvoiceLuxuryCategory => const Color(0xFFD4AF37),
          kNgmyInvoicePremiumCategory => const Color(0xFF7C3AED),
          _ => const Color(0xFF64748B),
        };

    final essential = ngmyEssentialLuxuryTemplates();
    final classicLuxury = all.where((t) => t.category == kNgmyInvoiceLuxuryCategory && !t.essentialLuxury).toList();
    final selectedEssential = ngmyIsEssentialLuxuryTemplate(widget.selectedId);
    final hintColor = Theme.of(context).brightness == Brightness.dark ? Colors.white54 : Colors.black54;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        ...categories.map((cat) {
          final items = all.where((t) => t.category == cat).toList();
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(top: 6, bottom: 8),
                child: Row(
                  children: [
                    Icon(catIcon(cat), size: 16, color: catColor(cat)),
                    const SizedBox(width: 6),
                    Text(cat, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: catColor(cat))),
                  ],
                ),
              ),
              categoryRows(items),
              const SizedBox(height: 10),
            ],
          );
        }),
        // Luxury — classic templates always visible; Essential Luxury via dropdown below
        Padding(
          padding: const EdgeInsets.only(top: 6, bottom: 8),
          child: Row(
            children: [
              Icon(catIcon(kNgmyInvoiceLuxuryCategory), size: 16, color: catColor(kNgmyInvoiceLuxuryCategory)),
              const SizedBox(width: 6),
              Text('Luxury', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: catColor(kNgmyInvoiceLuxuryCategory))),
            ],
          ),
        ),
        categoryRows(classicLuxury, isLuxury: true),
        const SizedBox(height: 8),
        InkWell(
          onTap: () => setState(() => _luxuryExpanded = !_luxuryExpanded),
          borderRadius: BorderRadius.circular(8),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Row(
              children: [
                Container(
                  width: 26,
                  height: 26,
                  decoration: BoxDecoration(
                    color: const Color(0xFFD4AF37).withOpacity(0.12),
                    borderRadius: BorderRadius.circular(6),
                    border: Border.all(color: const Color(0xFFD4AF37).withOpacity(0.4)),
                  ),
                  child: Icon(
                    _luxuryExpanded ? Icons.keyboard_arrow_up_rounded : Icons.keyboard_arrow_down_rounded,
                    size: 18,
                    color: const Color(0xFFD4AF37),
                  ),
                ),
                const SizedBox(width: 8),
                Text(
                  _luxuryExpanded ? 'Hide Essential Luxury templates' : 'Essential Luxury templates (with your photo)',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: hintColor),
                ),
                if (selectedEssential && !_luxuryExpanded) ...[
                  const SizedBox(width: 6),
                  Expanded(
                    child: Text(
                      '· ${ngmyInvoiceTemplateById(widget.selectedId)?.label ?? ''}',
                      style: TextStyle(fontSize: 10, color: hintColor),
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
        if (_luxuryExpanded) ...[
          const SizedBox(height: 4),
          categoryRows(essential, isLuxury: true),
          const SizedBox(height: 10),
        ],
      ],
    );
  }
}

/// Small swatch for saved invoice list.
List<Color> ngmyInvoiceGradientForId(String id) => ngmyInvoiceTemplateById(id)?.gradient ?? const [Color(0xFF1E293B), Color(0xFF334155)];
