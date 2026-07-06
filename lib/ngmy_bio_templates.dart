import 'package:flutter/material.dart';

import 'ngmy_bio_effects.dart';
import 'ngmy_bio_ring_animations.dart';

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
  const NgmyBioRingStyle({
    required this.id,
    required this.label,
    required this.buildRing,
    this.ringAnimation = NgmyBioRingAnimation.none,
    this.auraColor,
  });

  final String id;
  final String label;
  final BoxDecoration Function(double size) buildRing;
  final NgmyBioRingAnimation ringAnimation;
  final Color? auraColor;
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
    this.sceneEffect = NgmyBioSceneEffect.none,
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
  final NgmyBioSceneEffect sceneEffect;
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

BoxDecoration _ringSapphire(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFDBEAFE), Color(0xFF2563EB), Color(0xFF1E3A8A)]),
    );

BoxDecoration _ringAmethyst(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFEDE9FE), Color(0xFF8B5CF6), Color(0xFF5B21B6)]),
    );

BoxDecoration _ringFire(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFEF3C7), Color(0xFFF97316), Color(0xFFDC2626)]),
    );

BoxDecoration _ringIce(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF0F9FF), Color(0xFF7DD3FC), Color(0xFF0284C7)]),
      border: Border.all(color: Colors.white, width: 2),
    );

BoxDecoration _ringRainbow(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFEF4444), Color(0xFFFBBF24), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFA855F7), Color(0xFFEF4444)]),
    );

BoxDecoration _ringNeonPink(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFFEC4899), width: 3),
      boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.55), blurRadius: 12)],
    );

BoxDecoration _ringSunburst(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const RadialGradient(colors: [Color(0xFFFDE68A), Color(0xFFF59E0B), Color(0xFFB45309)]),
    );

BoxDecoration _ringMoonlight(double s) => BoxDecoration(
      shape: BoxShape.circle,
      color: const Color(0xFF1E293B),
      border: Border.all(color: const Color(0xFFE2E8F0), width: 2.5),
      boxShadow: [BoxShadow(color: const Color(0xFF94A3B8).withValues(alpha: 0.35), blurRadius: 10)],
    );

BoxDecoration _ringOlive(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFD9F99D), Color(0xFF65A30D), Color(0xFF365314)]),
    );

BoxDecoration _ringCoral(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFFE4E6), Color(0xFFFB7185), Color(0xFFE11D48)]),
    );

BoxDecoration _ringLavender(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF5F3FF), Color(0xFFC4B5FD), Color(0xFF7C3AED)]),
    );

BoxDecoration _ringBronze(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFDE68A), Color(0xFFB45309), Color(0xFF78350F)]),
    );

BoxDecoration _ringCarbon(double s) => BoxDecoration(
      shape: BoxShape.circle,
      color: const Color(0xFF18181B),
      border: Border.all(color: const Color(0xFF52525B), width: 2),
    );

BoxDecoration _ringHolo(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6), Color(0xFFFBBF24), Color(0xFF22D3EE)]),
    );

const List<NgmyBioRingStyle> kNgmyBioRingStyles = [
  NgmyBioRingStyle(id: 'none', label: 'None', buildRing: _ringNone),
  NgmyBioRingStyle(id: 'white', label: 'Clean White', buildRing: _ringWhite),
  NgmyBioRingStyle(
    id: 'gold',
    label: 'Gold',
    buildRing: _ringGold,
    ringAnimation: NgmyBioRingAnimation.shimmer,
    auraColor: Color(0xFFD4AF37),
  ),
  NgmyBioRingStyle(id: 'silver', label: 'Silver', buildRing: _ringSilver),
  NgmyBioRingStyle(
    id: 'rose_gold',
    label: 'Rose Gold',
    buildRing: _ringRoseGold,
    ringAnimation: NgmyBioRingAnimation.smoke,
    auraColor: Color(0xFFE8B4B8),
  ),
  NgmyBioRingStyle(
    id: 'emerald',
    label: 'Emerald',
    buildRing: _ringEmerald,
    ringAnimation: NgmyBioRingAnimation.smoke,
    auraColor: Color(0xFF059669),
  ),
  NgmyBioRingStyle(id: 'midnight', label: 'Midnight', buildRing: _ringMidnight),
  NgmyBioRingStyle(id: 'double', label: 'Double Line', buildRing: _ringDouble),
  NgmyBioRingStyle(
    id: 'ornate',
    label: 'Ornate',
    buildRing: _ringOrnate,
    ringAnimation: NgmyBioRingAnimation.orbit,
    auraColor: Color(0xFFD4AF37),
  ),
  NgmyBioRingStyle(
    id: 'thin_gold',
    label: 'Gold Line',
    buildRing: _ringThinAccent,
    ringAnimation: NgmyBioRingAnimation.shimmer,
    auraColor: Color(0xFFD4AF37),
  ),
  NgmyBioRingStyle(
    id: 'glow_blue',
    label: 'Blue Glow',
    buildRing: _ringGlow,
    ringAnimation: NgmyBioRingAnimation.pulse,
    auraColor: Color(0xFF38BDF8),
  ),
  NgmyBioRingStyle(id: 'sapphire', label: 'Sapphire', buildRing: _ringSapphire, ringAnimation: NgmyBioRingAnimation.shimmer, auraColor: Color(0xFF2563EB)),
  NgmyBioRingStyle(id: 'amethyst', label: 'Amethyst', buildRing: _ringAmethyst, ringAnimation: NgmyBioRingAnimation.orbit, auraColor: Color(0xFF8B5CF6)),
  NgmyBioRingStyle(id: 'fire', label: 'Fire', buildRing: _ringFire, ringAnimation: NgmyBioRingAnimation.smoke, auraColor: Color(0xFFF97316)),
  NgmyBioRingStyle(id: 'ice', label: 'Ice', buildRing: _ringIce, ringAnimation: NgmyBioRingAnimation.pulse, auraColor: Color(0xFF38BDF8)),
  NgmyBioRingStyle(id: 'rainbow', label: 'Rainbow', buildRing: _ringRainbow, ringAnimation: NgmyBioRingAnimation.orbit, auraColor: Color(0xFFA855F7)),
  NgmyBioRingStyle(id: 'neon_pink', label: 'Neon Pink', buildRing: _ringNeonPink, ringAnimation: NgmyBioRingAnimation.pulse, auraColor: Color(0xFFEC4899)),
  NgmyBioRingStyle(id: 'sunburst', label: 'Sunburst', buildRing: _ringSunburst, ringAnimation: NgmyBioRingAnimation.shimmer, auraColor: Color(0xFFF59E0B)),
  NgmyBioRingStyle(id: 'moonlight', label: 'Moonlight', buildRing: _ringMoonlight, ringAnimation: NgmyBioRingAnimation.smoke, auraColor: Color(0xFF94A3B8)),
  NgmyBioRingStyle(id: 'olive', label: 'Olive', buildRing: _ringOlive),
  NgmyBioRingStyle(id: 'coral', label: 'Coral', buildRing: _ringCoral, ringAnimation: NgmyBioRingAnimation.smoke, auraColor: Color(0xFFFB7185)),
  NgmyBioRingStyle(id: 'lavender', label: 'Lavender', buildRing: _ringLavender, ringAnimation: NgmyBioRingAnimation.shimmer, auraColor: Color(0xFFC4B5FD)),
  NgmyBioRingStyle(id: 'bronze', label: 'Bronze', buildRing: _ringBronze),
  NgmyBioRingStyle(id: 'carbon', label: 'Carbon', buildRing: _ringCarbon),
  NgmyBioRingStyle(id: 'holo', label: 'Holo', buildRing: _ringHolo, ringAnimation: NgmyBioRingAnimation.orbit, auraColor: Color(0xFF22D3EE)),
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

// ── 28 premium bio templates with scene effects ─────────────────────────────

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
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF2C2416), Color(0xFF1A1410)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.goldDust,
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
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF0369A1), Color(0xFF0C4A6E)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.oceanRipple,
  ),
  NgmyBioTemplate(
    id: 'outline_wire',
    name: 'Win Money',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF041A1A),
    pageBgEnd: Color(0xFF0A2E2A),
    panelBg: Color(0xFF0A2E2A),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFF5EEAD4),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF99F6E4),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.hexLattice,
  ),
  NgmyBioTemplate(
    id: 'royal_marble',
    name: 'Imperial Agency',
    layout: NgmyBioLayoutStyle.marbleCream,
    pageBg: Color(0xFF1A0F2E),
    pageBgEnd: Color(0xFF2D1B4E),
    panelBg: Color(0xFF2D1B4E),
    cardBg: Color(0x24FFFFFF),
    cardBorder: Color(0x66D4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFE8C896),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF4C1D95), Color(0xFF2D1B4E), Color(0xFF1A0F2E)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.goldStream,
  ),
  NgmyBioTemplate(
    id: 'neon_night',
    name: 'Nebula',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF0B0B1A),
    pageBgEnd: Color(0xFF12082A),
    panelBg: Color(0xFF12082A),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFA78BFA),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFC4B5FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF6366F1), Color(0xFF7C3AED), Color(0xFF0B0B1A)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.aurora,
  ),
  NgmyBioTemplate(
    id: 'sunset_arc',
    name: 'Sunset Glow',
    layout: NgmyBioLayoutStyle.sunsetArc,
    pageBg: Color(0xFF431407),
    pageBgEnd: Color(0xFF7C2D12),
    panelBg: Color(0xFF7C2D12),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFFBBF24),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFED7AA),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFFEA580C), Color(0xFF9A3412)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.emberGlow,
  ),
  NgmyBioTemplate(
    id: 'velvet_purple',
    name: 'Royal Violet',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF12061F),
    pageBgEnd: Color(0xFF1E0A3C),
    panelBg: Color(0xFF1E0A3C),
    cardBg: Color(0x20FFFFFF),
    cardBorder: Color(0x55D4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFE9D5FF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF7C3AED), Color(0xFF4C1D95), Color(0xFF12061F)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.goldDust,
  ),
  NgmyBioTemplate(
    id: 'rose_quartz',
    name: 'Blush Glass',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF500724),
    pageBgEnd: Color(0xFF831843),
    panelBg: Color(0xFF831843),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFFF472B6),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFBCFE8),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.petalDrift,
  ),
  NgmyBioTemplate(
    id: 'angular_noir',
    name: 'Noir Glass',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF050505),
    pageBgEnd: Color(0xFF171717),
    panelBg: Color(0xFF171717),
    cardBg: Color(0x14FFFFFF),
    cardBorder: Color(0x28FFFFFF),
    accent: Colors.white,
    titleColor: Colors.white,
    subtitleColor: Color(0xFFA1A1AA),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.starfield,
  ),
  NgmyBioTemplate(
    id: 'glass_float',
    name: 'Rain Glass',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF020617),
    pageBgEnd: Color(0xFF0C4A6E),
    panelBg: Color(0xFF0C4A6E),
    cardBg: Color(0x12FFFFFF),
    cardBorder: Color(0x30FFFFFF),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFBAE6FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.rainBokeh,
  ),
  NgmyBioTemplate(
    id: 'editorial',
    name: 'Clean Studio',
    layout: NgmyBioLayoutStyle.marbleCream,
    pageBg: Color(0xFFFFFFFF),
    pageBgEnd: Color(0xFFF8FAFC),
    panelBg: Color(0xFFFFFFFF),
    cardBg: Color(0xFFF8FAFC),
    cardBorder: Color(0xFFE2E8F0),
    accent: Color(0xFF0F172A),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF1E293B),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF0F172A), Color(0xFF334155)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.paperGrain,
  ),
  NgmyBioTemplate(
    id: 'forest_organic',
    name: 'Emerald Glass',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF052E16),
    pageBgEnd: Color(0xFF14532D),
    panelBg: Color(0xFF14532D),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFF86EFAC),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFBBF7D0),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.leafCanopy,
  ),
  NgmyBioTemplate(
    id: 'midnight_glow',
    name: 'Cyan Pulse',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF030712),
    pageBgEnd: Color(0xFF0F172A),
    panelBg: Color(0xFF0F172A),
    cardBg: Color(0x14FFFFFF),
    cardBorder: Color(0x30FFFFFF),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF94A3B8),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.cyanPulse,
  ),
  NgmyBioTemplate(
    id: 'split_gold',
    name: 'Gold Glass',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF1A1410),
    pageBgEnd: Color(0xFF2C2416),
    panelBg: Color(0xFF2C2416),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33D4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFC9A961),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF8B6914), Color(0xFF1A1410)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.goldStream,
  ),
  NgmyBioTemplate(
    id: 'pill_modern',
    name: 'Bio Link',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF031C1C),
    pageBgEnd: Color(0xFF0D3B3B),
    panelBg: Color(0xFF0D3B3B),
    cardBg: Color(0x18FFFFFF),
    cardBorder: Color(0x35FFFFFF),
    accent: Color(0xFFD4AF37),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF99F6E4),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.tealBubbles,
  ),
  NgmyBioTemplate(
    id: 'diamond_white',
    name: 'Pure Light',
    layout: NgmyBioLayoutStyle.marbleCream,
    pageBg: Color(0xFFFFFFFF),
    pageBgEnd: Color(0xFFF8FAFC),
    panelBg: Color(0xFFFFFFFF),
    cardBg: Color(0xF5FFFFFF),
    cardBorder: Color(0xFFE2E8F0),
    accent: Color(0xFF94A3B8),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF334155),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFFCBD5E1), Color(0xFFF1F5F9), Color(0xFFFFFFFF)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.lightRays,
  ),
  NgmyBioTemplate(
    id: 'bold_stripe',
    name: 'Crimson',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF0A0505),
    pageBgEnd: Color(0xFF0A0505),
    panelBg: Color(0xFF0A0505),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33EF4444),
    accent: Color(0xFFEF4444),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFCA5A5),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFFDC2626), Color(0xFF0A0505)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.crimsonGrid,
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
    sceneEffect: NgmyBioSceneEffect.cosmicDust,
  ),
  NgmyBioTemplate(
    id: 'champagne_luxe',
    name: 'Champagne',
    layout: NgmyBioLayoutStyle.goldLuxe,
    pageBg: Color(0xFF4A3728),
    pageBgEnd: Color(0xFF6B5344),
    panelBg: Color(0xFF6B5344),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x33E8C896),
    accent: Color(0xFFE8C896),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFE8C896),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF8B6914), Color(0xFF4A3728)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.champagneFloat,
  ),
  NgmyBioTemplate(
    id: 'ocean_wave',
    name: 'Teal Mist',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF042F2E),
    pageBgEnd: Color(0xFF134E4A),
    panelBg: Color(0xFF134E4A),
    cardBg: Color(0x16FFFFFF),
    cardBorder: Color(0x332DD4BF),
    accent: Color(0xFF2DD4BF),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF99F6E4),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.waveLattice,
  ),
  NgmyBioTemplate(
    id: 'classic_curved',
    name: 'Slate Curve',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF1F2937),
    pageBgEnd: Color(0xFF111827),
    panelBg: Color(0xFF111827),
    cardBg: Color(0x14FFFFFF),
    cardBorder: Color(0x28FFFFFF),
    accent: Color(0xFFE5E7EB),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFD1D5DB),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF374151), Color(0xFF111827)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.slateMesh,
  ),
  // ── New premium scene templates ───────────────────────────────────────────
  NgmyBioTemplate(
    id: 'rainy_night',
    name: 'Rainy Night',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF010409),
    pageBgEnd: Color(0xFF0A1628),
    panelBg: Color(0xFF0A1628),
    cardBg: Color(0x14FFFFFF),
    cardBorder: Color(0x30FFFFFF),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFBAE6FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.rain,
  ),
  NgmyBioTemplate(
    id: 'aurora_sky',
    name: 'Aurora Sky',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF050816),
    pageBgEnd: Color(0xFF1A0B2E),
    panelBg: Color(0xFF1A0B2E),
    cardBg: Color(0x16FFFFFF),
    cardBorder: Color(0x33FFFFFF),
    accent: Color(0xFF818CF8),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFC4B5FD),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.northernLights,
  ),
  NgmyBioTemplate(
    id: 'cyber_city',
    name: 'Cyber City',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFF020617),
    pageBgEnd: Color(0xFF0F172A),
    panelBg: Color(0xFF0F172A),
    cardBg: Color(0x12FFFFFF),
    cardBorder: Color(0x28FFFFFF),
    accent: Color(0xFF06B6D4),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF67E8F9),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.cyberScan,
  ),
  NgmyBioTemplate(
    id: 'cloud_dream',
    name: 'Cloud Dream',
    layout: NgmyBioLayoutStyle.pillStack,
    pageBg: Color(0xFFF8FAFC),
    pageBgEnd: Color(0xFFE0F2FE),
    panelBg: Color(0xFFF8FAFC),
    cardBg: Color(0xE6FFFFFF),
    cardBorder: Color(0xFFBAE6FD),
    accent: Color(0xFF38BDF8),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF1E293B),
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 28,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.cottonClouds,
  ),
  NgmyBioTemplate(
    id: 'pearl_marble',
    name: 'Pearl Curve',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFFFFFBF5),
    pageBgEnd: Color(0xFFF5F0E8),
    panelBg: Color(0xFFFFFBF5),
    cardBg: Color(0xF2FFFFFF),
    cardBorder: Color(0xFFE7E5E4),
    accent: Color(0xFFB8860B),
    titleColor: Color(0xFF292524),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF44403C),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFFD6D3D1), Color(0xFFF5F0E8)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.pearlSheen,
  ),
  NgmyBioTemplate(
    id: 'silver_mist',
    name: 'Platinum Mist',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFFF1F5F9),
    pageBgEnd: Color(0xFFE2E8F0),
    panelBg: Color(0xFFF1F5F9),
    cardBg: Color(0xE8FFFFFF),
    cardBorder: Color(0xFFC0C8D4),
    accent: Color(0xFF64748B),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF334155),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF94A3B8), Color(0xFFCBD5E1), Color(0xFFF1F5F9)],
    cardRadius: 28,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.frostCrystals,
  ),
  NgmyBioTemplate(
    id: 'imperial_crown',
    name: 'Imperial Crown',
    layout: NgmyBioLayoutStyle.curvedOverlap,
    pageBg: Color(0xFF0C0618),
    pageBgEnd: Color(0xFF1A0F2E),
    panelBg: Color(0xFF1A0F2E),
    cardBg: Color(0x22FFFFFF),
    cardBorder: Color(0x88D4AF37),
    accent: Color(0xFFD4AF37),
    titleColor: Color(0xFFFFF8E7),
    subtitleColor: Color(0xFFE8C896),
    linkTextColor: Color(0xFFFFF8E7),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF8B6914), Color(0xFF4C1D95), Color(0xFF0C0618)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.champagneFloat,
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
          if (t.sceneEffect != NgmyBioSceneEffect.none)
            Positioned.fill(
              child: CustomPaint(
                painter: NgmyBioScenePainter(effect: t.sceneEffect, accent: t.accent, phase: 0.4),
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
