import 'package:flutter/material.dart';

/// Structural layout — each template uses a distinct shape / composition.
enum NgmyBioLayoutStyle {
  curvedOverlap,
  waveHeader,
  outlineMinimal,
  goldLuxe,
  pillStack,
  darkNeon,
  marbleCream,
  splitGradient,
  angularHero,
  glassFloat,
  editorialLeft,
  royalVelvet,
  roseQuartz,
  midnightGlow,
  sunsetArc,
  oceanWave,
  forestOrganic,
  boldStripe,
  photoImmersive,
  diamondWhite,
}

enum NgmyBioLinkStyle { rowIcon, outline, pill, goldBar, minimalLine, glass, neonOutline }

class NgmyBioRingStyle {
  const NgmyBioRingStyle({required this.id, required this.label, required this.buildRing});

  final String id;
  final String label;
  final BoxDecoration Function(double size) buildRing;
}

class NgmyBioTemplate {
  const NgmyBioTemplate({
    required this.id,
    required this.name,
    required this.layout,
    required this.pageBg,
    this.pageBgEnd,
    required this.panelBg,
    required this.cardBg,
    required this.cardBorder,
    required this.accent,
    required this.titleColor,
    required this.subtitleColor,
    required this.linkTextColor,
    required this.linkStyle,
    this.headerGradient,
    this.cardRadius = 12,
    this.cardShadow = true,
    this.serifTitle = true,
  });

  final String id;
  final String name;
  final NgmyBioLayoutStyle layout;
  final Color pageBg;
  final Color? pageBgEnd;
  final Color panelBg;
  final Color cardBg;
  final Color cardBorder;
  final Color accent;
  final Color titleColor;
  final Color subtitleColor;
  final Color linkTextColor;
  final NgmyBioLinkStyle linkStyle;
  final List<Color>? headerGradient;
  final double cardRadius;
  final bool cardShadow;
  final bool serifTitle;
}

// ── Luxurious rings ─────────────────────────────────────────────────────────

BoxDecoration _ringNone(double s) => const BoxDecoration(shape: BoxShape.circle);

BoxDecoration _ringWhite(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: Colors.white, width: 4),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.1), blurRadius: 10)],
    );

BoxDecoration _ringGold(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFFFF3C4), Color(0xFFD4AF37), Color(0xFF8B6914)]),
      boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.4), blurRadius: 10)],
    );

BoxDecoration _ringSilver(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF64748B)]),
      border: Border.all(color: Colors.white, width: 2),
    );

BoxDecoration _ringRoseGold(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFCE7F3), Color(0xFFE8B4B8), Color(0xFFB76E79)]),
      border: Border.all(color: const Color(0xFFFDF2F8), width: 2),
    );

BoxDecoration _ringEmerald(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFA7F3D0), Color(0xFF059669), Color(0xFF064E3B)]),
    );

BoxDecoration _ringMidnight(double s) => BoxDecoration(
      shape: BoxShape.circle,
      color: const Color(0xFF0F172A),
      border: Border.all(color: const Color(0xFF6366F1), width: 3),
      boxShadow: [BoxShadow(color: const Color(0xFF6366F1).withValues(alpha: 0.35), blurRadius: 12)],
    );

BoxDecoration _ringDouble(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: Colors.white, width: 3),
      boxShadow: const [BoxShadow(color: Color(0x66000000), blurRadius: 0, spreadRadius: 2)],
    );

BoxDecoration _ringOrnate(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFD4AF37), Color(0xFFFFF8E1), Color(0xFFB8860B), Color(0xFFFFF8E1), Color(0xFFD4AF37)]),
    );

BoxDecoration _ringThinAccent(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFFD4AF37), width: 2.5),
    );

BoxDecoration _ringGlow(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFF38BDF8), width: 2),
      boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.5), blurRadius: 14, spreadRadius: 1)],
    );

const List<NgmyBioRingStyle> kNgmyBioRingStyles = [
  NgmyBioRingStyle(id: 'none', label: 'None', buildRing: _ringNone),
  NgmyBioRingStyle(id: 'white', label: 'Clean White', buildRing: _ringWhite),
  NgmyBioRingStyle(id: 'gold', label: 'Gold', buildRing: _ringGold),
  NgmyBioRingStyle(id: 'silver', label: 'Silver', buildRing: _ringSilver),
  NgmyBioRingStyle(id: 'rose_gold', label: 'Rose Gold', buildRing: _ringRoseGold),
  NgmyBioRingStyle(id: 'emerald', label: 'Emerald', buildRing: _ringEmerald),
  NgmyBioRingStyle(id: 'midnight', label: 'Midnight', buildRing: _ringMidnight),
  NgmyBioRingStyle(id: 'double', label: 'Double Line', buildRing: _ringDouble),
  NgmyBioRingStyle(id: 'ornate', label: 'Ornate', buildRing: _ringOrnate),
  NgmyBioRingStyle(id: 'thin_gold', label: 'Gold Line', buildRing: _ringThinAccent),
  NgmyBioRingStyle(id: 'glow_blue', label: 'Blue Glow', buildRing: _ringGlow),
];

NgmyBioRingStyle ngmyBioRingById(String id) {
  const legacy = {
    'royal_gold': 'gold',
    'diamond': 'silver',
    'platinum': 'silver',
    'ruby': 'rose_gold',
    'black_gold': 'gold',
    'pearl': 'white',
    'champagne': 'gold',
    'rainbow': 'ornate',
    'glow_blue': 'glow_blue',
  };
  final resolved = legacy[id] ?? id;
  return kNgmyBioRingStyles.firstWhere((r) => r.id == resolved, orElse: () => kNgmyBioRingStyles.firstWhere((r) => r.id == 'gold'));
}

// ── 20 unique luxurious templates ───────────────────────────────────────────

const List<NgmyBioTemplate> kNgmyBioTemplates = [
  NgmyBioTemplate(
    id: 'gold_curved',
    name: 'Gold Curved',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF1A1410),
    panelBg: Color(0xFF1A1410),
    cardBg: Color(0xFF2C2416),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFD4AF37),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF2C2416), Color(0xFF1A1410)],
    cardRadius: 14,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'wave_ocean',
    name: 'Ocean Wave',
    layout: NgmyBioLayoutStyle.waveHeader,
    pageBg: Color(0xFF0C4A6E),
    panelBg: Color(0xFF0C4A6E),
    cardBg: Color(0xFF075985),
    cardBorder: Color(0xFF38BDF8),
    accent: Color(0xFF38BDF8),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFBAE6FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF0369A1), Color(0xFF0C4A6E)],
    cardRadius: 14,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'outline_wire',
    name: 'Wire Outline',
    layout: NgmyBioLayoutStyle.outlineMinimal,
    pageBg: Color(0xFF111827),
    panelBg: Color(0xFF111827),
    cardBg: Colors.transparent,
    cardBorder: Color(0xFF9CA3AF),
    accent: Color(0xFFF9FAFB),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF9CA3AF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    cardRadius: 14,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'royal_marble',
    name: 'Carrara Light',
    layout: NgmyBioLayoutStyle.marbleCream,
    pageBg: Color(0xFFF5F2EC),
    pageBgEnd: Color(0xFFE8E2D8),
    panelBg: Color(0xFFF5F2EC),
    cardBg: Color(0xFFFFFFFF),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFB8860B),
    titleColor: Color(0xFF1C1917),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF292524),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFFFAFAF9), Color(0xFFE7E5E4)],
    cardRadius: 22,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'neon_night',
    name: 'Neon Night',
    layout: NgmyBioLayoutStyle.darkNeon,
    pageBg: Color(0xFF030712),
    panelBg: Color(0xFF030712),
    cardBg: Color(0xFF0F172A),
    cardBorder: Color(0xFF22D3EE),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF67E8F9),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.neonOutline,
    headerGradient: [Color(0xFF312E81), Color(0xFF030712)],
    cardRadius: 12,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'sunset_arc',
    name: 'Sunset Arc',
    layout: NgmyBioLayoutStyle.sunsetArc,
    pageBg: Color(0xFF7C2D12),
    pageBgEnd: Color(0xFF9A3412),
    panelBg: Color(0xFF9A3412),
    cardBg: Color(0xFF431407),
    cardBorder: Color(0xFFFDBA74),
    accent: Color(0xFFFBBF24),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFED7AA),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFFEA580C), Color(0xFF7C2D12)],
    cardRadius: 14,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'velvet_purple',
    name: 'Velvet Purple',
    layout: NgmyBioLayoutStyle.royalVelvet,
    pageBg: Color(0xFF2E1065),
    panelBg: Color(0xFF2E1065),
    cardBg: Color(0xFF3B0764),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFF5F3FF),
    subtitleColor: Color(0xFFC4B5FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.goldBar,
    headerGradient: [Color(0xFF4C1D95), Color(0xFF2E1065)],
    cardRadius: 10,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'rose_quartz',
    name: 'Rose Quartz',
    layout: NgmyBioLayoutStyle.roseQuartz,
    pageBg: Color(0xFF500724),
    pageBgEnd: Color(0xFF831843),
    panelBg: Color(0xFF831843),
    cardBg: Color(0xFF9D174D),
    cardBorder: Color(0xFFFBCFE8),
    accent: Color(0xFFF472B6),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFBCFE8),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.pill,
    cardRadius: 24,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'angular_noir',
    name: 'Angular Noir',
    layout: NgmyBioLayoutStyle.angularHero,
    pageBg: Color(0xFF0A0A0A),
    panelBg: Color(0xFF0A0A0A),
    cardBg: Color(0xFF171717),
    cardBorder: Color(0xFF52525B),
    accent: Colors.white,
    titleColor: Colors.white,
    subtitleColor: Color(0xFFA1A1AA),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF27272A), Color(0xFF0A0A0A)],
    cardRadius: 4,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'glass_float',
    name: 'Glass Float',
    layout: NgmyBioLayoutStyle.glassFloat,
    pageBg: Color(0xFF0F172A),
    pageBgEnd: Color(0xFF1E293B),
    panelBg: Color(0x661E293B),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFD4AF37),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFCBD5E1),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF334155), Color(0xFF0F172A)],
    cardRadius: 28,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'editorial',
    name: 'Editorial',
    layout: NgmyBioLayoutStyle.editorialLeft,
    pageBg: Color(0xFFFAFAF9),
    panelBg: Color(0xFFFAFAF9),
    cardBg: Colors.white,
    cardBorder: Color(0xFFE7E5E4),
    accent: Color(0xFF1C1917),
    titleColor: Color(0xFF1C1917),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF44403C),
    linkStyle: NgmyBioLinkStyle.minimalLine,
    cardRadius: 0,
    cardShadow: false,
    serifTitle: true,
  ),
  NgmyBioTemplate(
    id: 'forest_organic',
    name: 'Forest Organic',
    layout: NgmyBioLayoutStyle.forestOrganic,
    pageBg: Color(0xFF14532D),
    panelBg: Color(0xFF14532D),
    cardBg: Color(0xFF166534),
    cardBorder: Color(0xFF86EFAC),
    accent: Color(0xFF86EFAC),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFBBF7D0),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF166534), Color(0xFF14532D)],
    cardRadius: 14,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'midnight_glow',
    name: 'Midnight Glow',
    layout: NgmyBioLayoutStyle.midnightGlow,
    pageBg: Color(0xFF0B0F19),
    panelBg: Color(0xFF0B0F19),
    cardBg: Color(0xFF1F2937),
    cardBorder: Color(0xFF818CF8),
    accent: Color(0xFF818CF8),
    titleColor: Color(0xFFF9FAFB),
    subtitleColor: Color(0xFF9CA3AF),
    linkTextColor: Color(0xFFE5E7EB),
    linkStyle: NgmyBioLinkStyle.neonOutline,
    cardRadius: 12,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'split_gold',
    name: 'Split Gold',
    layout: NgmyBioLayoutStyle.splitGradient,
    pageBg: Color(0xFF1A1410),
    pageBgEnd: Color(0xFF2C2416),
    panelBg: Color(0xFF2C2416),
    cardBg: Color(0xFF3D3428),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFC9A961),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.goldBar,
    cardRadius: 10,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'pill_modern',
    name: 'Night Glass',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF041E1E),
    pageBgEnd: Color(0xFF0D3B3B),
    panelBg: Color(0xFF0D3B3B),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFD4AF37),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF99F6E4),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'diamond_white',
    name: 'Diamond White',
    layout: NgmyBioLayoutStyle.diamondWhite,
    pageBg: Color(0xFFF8FAFC),
    panelBg: Color(0xFFF8FAFC),
    cardBg: Colors.white,
    cardBorder: Color(0xFFCBD5E1),
    accent: Color(0xFF64748B),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF334155),
    linkStyle: NgmyBioLinkStyle.outline,
    cardRadius: 12,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'bold_stripe',
    name: 'Bold Stripe',
    layout: NgmyBioLayoutStyle.boldStripe,
    pageBg: Color(0xFF111827),
    panelBg: Color(0xFF111827),
    cardBg: Color(0xFF1F2937),
    cardBorder: Color(0xFFDC2626),
    accent: Color(0xFFDC2626),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF9CA3AF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF1F2937), Color(0xFF111827)],
    cardRadius: 8,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'photo_immersive',
    name: 'Photo Immersive',
    layout: NgmyBioLayoutStyle.photoImmersive,
    pageBg: Color(0xFF111827),
    panelBg: Color(0xCC111827),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFD4AF37),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF9CA3AF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'champagne_luxe',
    name: 'Champagne Luxe',
    layout: NgmyBioLayoutStyle.goldLuxe,
    pageBg: Color(0xFF4A3728),
    pageBgEnd: Color(0xFF6B5344),
    panelBg: Color(0xFF6B5344),
    cardBg: Color(0xFF5C4636),
    cardBorder: Color(0xFFE8C896),
    accent: Color(0xFFE8C896),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFE8C896),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF8B6914), Color(0xFF4A3728)],
    cardRadius: 20,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'ocean_wave',
    name: 'Teal Glow',
    layout: NgmyBioLayoutStyle.midnightGlow,
    pageBg: Color(0xFF042F2E),
    panelBg: Color(0xFF042F2E),
    cardBg: Color(0xFF134E4A),
    cardBorder: Color(0xFF2DD4BF),
    accent: Color(0xFF2DD4BF),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF99F6E4),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.neonOutline,
    headerGradient: [Color(0xFF0F766E), Color(0xFF042F2E)],
    cardRadius: 16,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'classic_curved',
    name: 'Classic Curved',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF374151),
    panelBg: Color(0xFF374151),
    cardBg: Color(0xFF4B5563),
    cardBorder: Color(0xFF9CA3AF),
    accent: Color(0xFFE5E7EB),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFD1D5DB),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    cardRadius: 12,
    cardShadow: false,
  ),
];

NgmyBioTemplate ngmyBioTemplateById(String id) {
  const legacy = {
    'classic_white': 'classic_curved',
    'minimal_dark': 'outline_wire',
    'ocean_blue': 'wave_ocean',
  };
  final resolved = legacy[id] ?? id;
  return kNgmyBioTemplates.firstWhere((t) => t.id == resolved, orElse: () => kNgmyBioTemplates.first);
}

/// Mini wireframe for template picker.
class NgmyBioTemplateThumb extends StatelessWidget {
  const NgmyBioTemplateThumb({super.key, required this.template, this.selected = false, this.size = 72});

  static const _gold = Color(0xFFB8860B);

  final NgmyBioTemplate template;
  final bool selected;
  final double size;

  @override
  Widget build(BuildContext context) {
    final t = template;
    final avatarD = size * 0.22;
    return Container(
      width: size,
      height: size * 1.28,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: selected ? _gold : t.cardBorder.withValues(alpha: 0.45), width: selected ? 2 : 1),
        boxShadow: selected ? [BoxShadow(color: _gold.withValues(alpha: 0.28), blurRadius: 8)] : null,
      ),
      clipBehavior: Clip.antiAlias,
      child: Stack(
        fit: StackFit.expand,
        children: [
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: t.pageBgEnd != null
                  ? LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [t.pageBg, t.pageBgEnd!])
                  : null,
              color: t.pageBgEnd == null ? t.pageBg : null,
            ),
          ),
          if (t.headerGradient != null)
            Align(
              alignment: Alignment.topCenter,
              child: Container(
                height: size * 0.42,
                decoration: BoxDecoration(gradient: LinearGradient(colors: t.headerGradient!)),
              ),
            ),
          if (t.layout == NgmyBioLayoutStyle.curvedOverlap ||
              t.layout == NgmyBioLayoutStyle.waveHeader ||
              t.layout == NgmyBioLayoutStyle.sunsetArc ||
              t.layout == NgmyBioLayoutStyle.marbleCream)
            Positioned(
              top: size * 0.28,
              left: 0,
              right: 0,
              child: CustomPaint(
                size: Size(size, size * 0.18),
                painter: _CurvedPanelPainter(color: t.pageBgEnd ?? t.pageBg),
              ),
            ),
          Positioned(
            top: size * 0.28 - avatarD * 0.35,
            left: size * 0.5 - avatarD / 2,
            child: Container(
              width: avatarD,
              height: avatarD,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: t.panelBg,
                border: Border.all(color: t.accent, width: 1.5),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 4)],
              ),
            ),
          ),
          Positioned(
            top: size * 0.52,
            left: size * 0.22,
            right: size * 0.22,
            child: Container(height: 3, decoration: BoxDecoration(color: t.titleColor.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(2))),
          ),
          Positioned(
            top: size * 0.6,
            left: size * 0.14,
            right: size * 0.14,
            child: _thumbLink(t, size * 0.11),
          ),
          Positioned(
            top: size * 0.76,
            left: size * 0.14,
            right: size * 0.14,
            child: _thumbLink(t, size * 0.11),
          ),
        ],
      ),
    );
  }

  Widget _thumbLink(NgmyBioTemplate t, double h) {
    final isGlass = t.linkStyle == NgmyBioLinkStyle.glass;
    final r = t.linkStyle == NgmyBioLinkStyle.pill || isGlass ? h / 2 : t.cardRadius.clamp(2.0, 8.0);
    return Container(
      height: h,
      decoration: BoxDecoration(
        color: isGlass ? Colors.white.withValues(alpha: 0.12) : (t.linkStyle == NgmyBioLinkStyle.outline || t.linkStyle == NgmyBioLinkStyle.neonOutline ? Colors.transparent : t.cardBg),
        borderRadius: BorderRadius.circular(r),
        border: isGlass ? Border.all(color: Colors.white.withValues(alpha: 0.2), width: 0.5) : Border.all(color: t.linkStyle == NgmyBioLinkStyle.goldBar ? t.accent : t.cardBorder, width: t.linkStyle == NgmyBioLinkStyle.outline ? 1 : 0.5),
      ),
    );
  }
}

class _CurvedPanelPainter extends CustomPainter {
  _CurvedPanelPainter({required this.color});
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    final path = Path()
      ..moveTo(0, size.height * 0.45)
      ..quadraticBezierTo(size.width * 0.5, 0, size.width, size.height * 0.45)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant _CurvedPanelPainter old) => old.color != color;
}

class _WaveClipPainter extends CustomPainter {
  _WaveClipPainter({required this.color});
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    final path = Path()
      ..lineTo(0, size.height * 0.7)
      ..quadraticBezierTo(size.width * 0.25, size.height, size.width * 0.5, size.height * 0.75)
      ..quadraticBezierTo(size.width * 0.75, size.height * 0.5, size.width, size.height * 0.8)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant _WaveClipPainter old) => old.color != color;
}

/// Export wave painter for renderer
CustomPainter ngmyBioWavePanelPainter(Color color) => _WaveClipPainter(color: color);

CustomPainter ngmyBioCurvedPanelPainter(Color color) => _CurvedPanelPainter(color: color);
