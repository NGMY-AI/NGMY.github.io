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
  const NgmyBioRingStyle({required this.id, required this.label, required this.buildRing, this.luxury = false});

  final String id;
  final String label;
  final BoxDecoration Function(double size) buildRing;
  final bool luxury;
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
      gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFFFF8DC), Color(0xFFD4AF37), Color(0xFF996515)]),
      boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.5), blurRadius: 14, spreadRadius: 1)],
    );

BoxDecoration _ringRoyalGold(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFFE082), Color(0xFFD4AF37), Color(0xFF8B6914), Color(0xFFD4AF37)]),
      border: Border.all(color: const Color(0xFFFFF8E1), width: 2),
      boxShadow: [BoxShadow(color: const Color(0xFFB8860B).withValues(alpha: 0.6), blurRadius: 18, spreadRadius: 2)],
    );

BoxDecoration _ringDiamond(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFFFFFF), Color(0xFFE2E8F0), Color(0xFFCBD5E1)]),
      border: Border.all(color: Colors.white, width: 3),
      boxShadow: [BoxShadow(color: Colors.white.withValues(alpha: 0.8), blurRadius: 12, spreadRadius: 2), BoxShadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 8)],
    );

BoxDecoration _ringRoseGold(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFADADD), Color(0xFFE8B4B8), Color(0xFFB76E79)]),
      boxShadow: [BoxShadow(color: const Color(0xFFB76E79).withValues(alpha: 0.45), blurRadius: 12)],
    );

BoxDecoration _ringPlatinum(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF8FAFC), Color(0xFFE2E8F0), Color(0xFF94A3B8), Color(0xFFE2E8F0)]),
      border: Border.all(color: const Color(0xFF64748B), width: 2),
    );

BoxDecoration _ringEmerald(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFF6EE7B7), Color(0xFF059669), Color(0xFF064E3B)]),
      boxShadow: [BoxShadow(color: const Color(0xFF059669).withValues(alpha: 0.45), blurRadius: 12)],
    );

BoxDecoration _ringRuby(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFCA5A5), Color(0xFFDC2626), Color(0xFF7F1D1D)]),
      boxShadow: [BoxShadow(color: const Color(0xFFDC2626).withValues(alpha: 0.4), blurRadius: 12)],
    );

BoxDecoration _ringBlackGold(double s) => BoxDecoration(
      shape: BoxShape.circle,
      color: const Color(0xFF111827),
      border: Border.all(width: 4, color: const Color(0xFFD4AF37)),
      boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.35), blurRadius: 10)],
    );

BoxDecoration _ringOrnate(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFD4AF37), Color(0xFFFFF8E1), Color(0xFFB8860B), Color(0xFFFFF8E1), Color(0xFFD4AF37)]),
      boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.55), blurRadius: 16, spreadRadius: 2)],
    );

BoxDecoration _ringPearl(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: RadialGradient(colors: [Colors.white, const Color(0xFFF1F5F9), const Color(0xFFCBD5E1)]),
      border: Border.all(color: const Color(0xFFE2E8F0), width: 3),
    );

BoxDecoration _ringChampagne(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF7E7CE), Color(0xFFE8C896), Color(0xFFC9A961)]),
      border: Border.all(color: const Color(0xFFFFFDF5), width: 2),
    );

BoxDecoration _ringRainbow(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFFF0080), Color(0xFFFF8C00), Color(0xFFFFD700), Color(0xFF00C853), Color(0xFF2979FF), Color(0xFFAA00FF), Color(0xFFFF0080)]),
    );

BoxDecoration _ringGlowBlue(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFF2563EB), width: 3),
      boxShadow: [BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: 0.55), blurRadius: 16, spreadRadius: 2)],
    );

const List<NgmyBioRingStyle> kNgmyBioRingStyles = [
  NgmyBioRingStyle(id: 'none', label: 'None', buildRing: _ringNone),
  NgmyBioRingStyle(id: 'white', label: 'White', buildRing: _ringWhite),
  NgmyBioRingStyle(id: 'gold', label: 'Gold', buildRing: _ringGold, luxury: true),
  NgmyBioRingStyle(id: 'royal_gold', label: 'Royal Gold', buildRing: _ringRoyalGold, luxury: true),
  NgmyBioRingStyle(id: 'diamond', label: 'Diamond', buildRing: _ringDiamond, luxury: true),
  NgmyBioRingStyle(id: 'rose_gold', label: 'Rose Gold', buildRing: _ringRoseGold, luxury: true),
  NgmyBioRingStyle(id: 'platinum', label: 'Platinum', buildRing: _ringPlatinum, luxury: true),
  NgmyBioRingStyle(id: 'emerald', label: 'Emerald', buildRing: _ringEmerald, luxury: true),
  NgmyBioRingStyle(id: 'ruby', label: 'Ruby', buildRing: _ringRuby, luxury: true),
  NgmyBioRingStyle(id: 'black_gold', label: 'Black & Gold', buildRing: _ringBlackGold, luxury: true),
  NgmyBioRingStyle(id: 'ornate', label: 'Ornate Gold', buildRing: _ringOrnate, luxury: true),
  NgmyBioRingStyle(id: 'pearl', label: 'Pearl', buildRing: _ringPearl, luxury: true),
  NgmyBioRingStyle(id: 'champagne', label: 'Champagne', buildRing: _ringChampagne, luxury: true),
  NgmyBioRingStyle(id: 'rainbow', label: 'Rainbow', buildRing: _ringRainbow),
  NgmyBioRingStyle(id: 'glow_blue', label: 'Blue Glow', buildRing: _ringGlowBlue),
];

NgmyBioRingStyle ngmyBioRingById(String id) {
  return kNgmyBioRingStyles.firstWhere((r) => r.id == id, orElse: () => kNgmyBioRingStyles.firstWhere((r) => r.id == 'gold'));
}

// ── 20 unique luxurious templates ───────────────────────────────────────────

const List<NgmyBioTemplate> kNgmyBioTemplates = [
  NgmyBioTemplate(
    id: 'gold_curved',
    name: 'Gold Curved',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF1A1410),
    panelBg: Color(0xFFFFFBF5),
    cardBg: Colors.white,
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFF1A1410),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF1A1410),
    linkStyle: NgmyBioLinkStyle.rowIcon,
    headerGradient: [Color(0xFF2C2416), Color(0xFFD4AF37)],
    cardRadius: 14,
  ),
  NgmyBioTemplate(
    id: 'wave_ocean',
    name: 'Ocean Wave',
    layout: NgmyBioLayoutStyle.waveHeader,
    pageBg: Color(0xFF0C4A6E),
    panelBg: Color(0xFFF0F9FF),
    cardBg: Colors.white,
    cardBorder: Color(0xFF7DD3FC),
    accent: Color(0xFF0284C7),
    titleColor: Color(0xFF0C4A6E),
    subtitleColor: Color(0xFF0369A1),
    linkTextColor: Color(0xFF0C4A6E),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF0369A1), Color(0xFF0EA5E9)],
    cardRadius: 24,
  ),
  NgmyBioTemplate(
    id: 'outline_wire',
    name: 'Wire Outline',
    layout: NgmyBioLayoutStyle.outlineMinimal,
    pageBg: Color(0xFF111827),
    panelBg: Color(0xFF111827),
    cardBg: Colors.transparent,
    cardBorder: Color(0xFF6B7280),
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
    name: 'Royal Marble',
    layout: NgmyBioLayoutStyle.marbleCream,
    pageBg: Color(0xFFF5F0EB),
    panelBg: Color(0xFFFFFCF8),
    cardBg: Color(0xFFFFFDF9),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFB8860B),
    titleColor: Color(0xFF2C2416),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF44403C),
    linkStyle: NgmyBioLinkStyle.goldBar,
    cardRadius: 8,
  ),
  NgmyBioTemplate(
    id: 'neon_night',
    name: 'Neon Night',
    layout: NgmyBioLayoutStyle.darkNeon,
    pageBg: Color(0xFF030712),
    panelBg: Color(0xFF0F172A),
    cardBg: Color(0xFF1E293B),
    cardBorder: Color(0xFF22D3EE),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF67E8F9),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.neonOutline,
    headerGradient: [Color(0xFF4C1D95), Color(0xFF030712)],
    cardRadius: 12,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'sunset_arc',
    name: 'Sunset Arc',
    layout: NgmyBioLayoutStyle.sunsetArc,
    pageBg: Color(0xFF431407),
    pageBgEnd: Color(0xFFEA580C),
    panelBg: Color(0xFFFFF7ED),
    cardBg: Colors.white,
    cardBorder: Color(0xFFFDBA74),
    accent: Color(0xFFEA580C),
    titleColor: Color(0xFF9A3412),
    subtitleColor: Color(0xFFC2410C),
    linkTextColor: Color(0xFF7C2D12),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFFEA580C), Color(0xFFFBBF24)],
    cardRadius: 20,
  ),
  NgmyBioTemplate(
    id: 'velvet_purple',
    name: 'Velvet Purple',
    layout: NgmyBioLayoutStyle.royalVelvet,
    pageBg: Color(0xFF2E1065),
    panelBg: Color(0xFF1E1B4B),
    cardBg: Color(0xFF312E81),
    cardBorder: Color(0xFFD4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFF5F3FF),
    subtitleColor: Color(0xFFC4B5FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.goldBar,
    headerGradient: [Color(0xFF4C1D95), Color(0xFF2E1065)],
    cardRadius: 10,
  ),
  NgmyBioTemplate(
    id: 'rose_quartz',
    name: 'Rose Quartz',
    layout: NgmyBioLayoutStyle.roseQuartz,
    pageBg: Color(0xFFFDF2F8),
    panelBg: Colors.white,
    cardBg: Color(0xFFFFF1F2),
    cardBorder: Color(0xFFFBCFE8),
    accent: Color(0xFFEC4899),
    titleColor: Color(0xFF831843),
    subtitleColor: Color(0xFFBE185D),
    linkTextColor: Color(0xFF9D174D),
    linkStyle: NgmyBioLinkStyle.rowIcon,
    cardRadius: 16,
  ),
  NgmyBioTemplate(
    id: 'angular_noir',
    name: 'Angular Noir',
    layout: NgmyBioLayoutStyle.angularHero,
    pageBg: Colors.black,
    panelBg: Color(0xFF18181B),
    cardBg: Color(0xFF27272A),
    cardBorder: Color(0xFF52525B),
    accent: Colors.white,
    titleColor: Colors.white,
    subtitleColor: Color(0xFFA1A1AA),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFF3F3F46), Colors.black],
    cardRadius: 4,
    cardShadow: false,
  ),
  NgmyBioTemplate(
    id: 'glass_float',
    name: 'Glass Float',
    layout: NgmyBioLayoutStyle.glassFloat,
    pageBg: Color(0xFF1E3A8A),
    pageBgEnd: Color(0xFF6366F1),
    panelBg: Color(0x33FFFFFF),
    cardBg: Color(0x40FFFFFF),
    cardBorder: Color(0x80FFFFFF),
    accent: Colors.white,
    titleColor: Colors.white,
    subtitleColor: Color(0xFFE0E7FF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF4338CA), Color(0xFF818CF8)],
    cardRadius: 16,
  ),
  NgmyBioTemplate(
    id: 'editorial',
    name: 'Editorial',
    layout: NgmyBioLayoutStyle.editorialLeft,
    pageBg: Color(0xFFFAFAF9),
    panelBg: Colors.white,
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
    panelBg: Color(0xFFECFDF5),
    cardBg: Colors.white,
    cardBorder: Color(0xFF86EFAC),
    accent: Color(0xFF059669),
    titleColor: Color(0xFF064E3B),
    subtitleColor: Color(0xFF047857),
    linkTextColor: Color(0xFF065F46),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF166534), Color(0xFF22C55E)],
    cardRadius: 22,
  ),
  NgmyBioTemplate(
    id: 'midnight_glow',
    name: 'Midnight Glow',
    layout: NgmyBioLayoutStyle.midnightGlow,
    pageBg: Color(0xFF0B0F19),
    panelBg: Color(0xFF111827),
    cardBg: Color(0xFF1F2937),
    cardBorder: Color(0xFF6366F1),
    accent: Color(0xFF818CF8),
    titleColor: Color(0xFFF9FAFB),
    subtitleColor: Color(0xFF9CA3AF),
    linkTextColor: Color(0xFFE5E7EB),
    linkStyle: NgmyBioLinkStyle.neonOutline,
    cardRadius: 12,
  ),
  NgmyBioTemplate(
    id: 'split_gold',
    name: 'Split Gold',
    layout: NgmyBioLayoutStyle.splitGradient,
    pageBg: Color(0xFF1A1410),
    pageBgEnd: Color(0xFFD4AF37),
    panelBg: Color(0xFFFFFBEB),
    cardBg: Colors.white,
    cardBorder: Color(0xFFFDE68A),
    accent: Color(0xFFB8860B),
    titleColor: Color(0xFF1A1410),
    subtitleColor: Color(0xFF92400E),
    linkTextColor: Color(0xFF78350F),
    linkStyle: NgmyBioLinkStyle.goldBar,
    cardRadius: 10,
  ),
  NgmyBioTemplate(
    id: 'pill_modern',
    name: 'Pill Modern',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFFF3F4F6),
    panelBg: Color(0xFFF9FAFB),
    cardBg: Color(0xFF111827),
    cardBorder: Color(0xFF111827),
    accent: Color(0xFF2563EB),
    titleColor: Color(0xFF111827),
    subtitleColor: Color(0xFF6B7280),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.pill,
    cardRadius: 28,
  ),
  NgmyBioTemplate(
    id: 'diamond_white',
    name: 'Diamond White',
    layout: NgmyBioLayoutStyle.diamondWhite,
    pageBg: Colors.white,
    panelBg: Colors.white,
    cardBg: Color(0xFFFAFAFA),
    cardBorder: Color(0xFFE5E7EB),
    accent: Color(0xFFCBD5E1),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF334155),
    linkStyle: NgmyBioLinkStyle.rowIcon,
    cardRadius: 12,
  ),
  NgmyBioTemplate(
    id: 'bold_stripe',
    name: 'Bold Stripe',
    layout: NgmyBioLayoutStyle.boldStripe,
    pageBg: Color(0xFFDC2626),
    panelBg: Colors.white,
    cardBg: Colors.white,
    cardBorder: Color(0xFFDC2626),
    accent: Color(0xFFDC2626),
    titleColor: Color(0xFF111827),
    subtitleColor: Color(0xFF6B7280),
    linkTextColor: Color(0xFF111827),
    linkStyle: NgmyBioLinkStyle.outline,
    headerGradient: [Color(0xFFDC2626), Color(0xFF991B1B)],
    cardRadius: 8,
  ),
  NgmyBioTemplate(
    id: 'photo_immersive',
    name: 'Photo Immersive',
    layout: NgmyBioLayoutStyle.photoImmersive,
    pageBg: Color(0xFF111827),
    panelBg: Color(0xE6FFFFFF),
    cardBg: Color(0xF5FFFFFF),
    cardBorder: Color(0x00000000),
    accent: Color(0xFF2563EB),
    titleColor: Color(0xFF111827),
    subtitleColor: Color(0xFF6B7280),
    linkTextColor: Color(0xFF111827),
    linkStyle: NgmyBioLinkStyle.rowIcon,
    cardRadius: 14,
  ),
  NgmyBioTemplate(
    id: 'champagne_luxe',
    name: 'Champagne Luxe',
    layout: NgmyBioLayoutStyle.goldLuxe,
    pageBg: Color(0xFF2C2416),
    panelBg: Color(0xFFF7E7CE),
    cardBg: Color(0xFFFFFBF0),
    cardBorder: Color(0xFFC9A961),
    accent: Color(0xFFC9A961),
    titleColor: Color(0xFF2C2416),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF44403C),
    linkStyle: NgmyBioLinkStyle.goldBar,
    headerGradient: [Color(0xFF2C2416), Color(0xFFC9A961)],
    cardRadius: 6,
  ),
  NgmyBioTemplate(
    id: 'ocean_wave',
    name: 'Deep Wave',
    layout: NgmyBioLayoutStyle.oceanWave,
    pageBg: Color(0xFF164E63),
    panelBg: Color(0xFFECFEFF),
    cardBg: Colors.white,
    cardBorder: Color(0xFF22D3EE),
    accent: Color(0xFF0891B2),
    titleColor: Color(0xFF164E63),
    subtitleColor: Color(0xFF0E7490),
    linkTextColor: Color(0xFF155E75),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF0891B2), Color(0xFF06B6D4)],
    cardRadius: 18,
  ),
  NgmyBioTemplate(
    id: 'classic_curved',
    name: 'Classic Curved',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF374151),
    panelBg: Colors.white,
    cardBg: Colors.white,
    cardBorder: Color(0xFFE5E7EB),
    accent: Color(0xFF6B7280),
    titleColor: Color(0xFF111827),
    subtitleColor: Color(0xFF6B7280),
    linkTextColor: Color(0xFF111827),
    linkStyle: NgmyBioLinkStyle.rowIcon,
    cardRadius: 12,
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
  const NgmyBioTemplateThumb({super.key, required this.template, this.selected = false, this.size = 88});

  final NgmyBioTemplate template;
  final bool selected;
  final double size;

  @override
  Widget build(BuildContext context) {
    final t = template;
    return Container(
      width: size,
      height: size * 1.35,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: selected ? const Color(0xFF2563EB) : t.cardBorder.withValues(alpha: 0.5), width: selected ? 2.5 : 1),
        boxShadow: selected ? [BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: 0.25), blurRadius: 10)] : null,
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
                height: size * 0.35,
                decoration: BoxDecoration(gradient: LinearGradient(colors: t.headerGradient!)),
              ),
            ),
          if (t.layout == NgmyBioLayoutStyle.curvedOverlap || t.layout == NgmyBioLayoutStyle.waveHeader)
            Positioned(
              top: size * 0.22,
              left: 0,
              right: 0,
              child: CustomPaint(
                size: Size(size, size * 0.2),
                painter: _CurvedPanelPainter(color: t.panelBg),
              ),
            ),
          Positioned(
            top: size * 0.18,
            left: size * 0.5 - 10,
            child: Container(
              width: 20,
              height: 20,
              decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: t.accent, width: 2), color: t.panelBg),
            ),
          ),
          Positioned(
            top: size * 0.42,
            left: size * 0.2,
            right: size * 0.2,
            child: Container(height: 4, decoration: BoxDecoration(color: t.titleColor.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(2))),
          ),
          Positioned(
            top: size * 0.52,
            left: size * 0.15,
            right: size * 0.15,
            child: _thumbLink(t, size * 0.12),
          ),
          Positioned(
            top: size * 0.68,
            left: size * 0.15,
            right: size * 0.15,
            child: _thumbLink(t, size * 0.12),
          ),
        ],
      ),
    );
  }

  Widget _thumbLink(NgmyBioTemplate t, double h) {
    final r = t.linkStyle == NgmyBioLinkStyle.pill ? h / 2 : t.cardRadius.clamp(2.0, 8.0);
    return Container(
      height: h,
      decoration: BoxDecoration(
        color: t.linkStyle == NgmyBioLinkStyle.outline || t.linkStyle == NgmyBioLinkStyle.neonOutline ? Colors.transparent : t.cardBg,
        borderRadius: BorderRadius.circular(r),
        border: Border.all(color: t.linkStyle == NgmyBioLinkStyle.goldBar ? t.accent : t.cardBorder, width: t.linkStyle == NgmyBioLinkStyle.outline ? 1.5 : 1),
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
