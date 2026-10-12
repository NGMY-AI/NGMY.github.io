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
  bioSiteClassic,
  proRobotHud,
  proOrbit,
  proPolaroid,
  proMagazine,
  proLiquid,
  proArcade,
  proBoardingPass,
  proHoloId,
  proNeonSign,
  proVinyl,
  proFilmStrip,
  proGlassStack,
  proCrown,
  proConstellation,
  proSunburst,
  proEqualizer,
  proBubbles,
  proTerminal,
  proGallery,
  proPulse,
  proPostcard,
  proDiagonal,
  proTheater,
  proJungle,
  proJackpot,
  proWatch,
  proDiamond,
  proAuroraPeak,
  proWaxSeal,
  proInvitation,
  proRainWindow,
  proPrismBeam,
  proImmersive,
  proNewspaper,
  proMoonPhase,
  proSpeedometer,
  proComic,
  proSynthGrid,
  proVoltage,
  proCyberSkyline,
  proKaleido,
  proFireflies,
  proRoseBloom,
  proKoiPond,
  proStainedGlass,
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

BoxDecoration _ringCrimson(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFEE2E2), Color(0xFFEF4444), Color(0xFF7F1D1D)]),
    );

BoxDecoration _ringElectric(double s) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFF22D3EE), width: 2.5),
      boxShadow: [BoxShadow(color: const Color(0xFF22D3EE).withValues(alpha: 0.55), blurRadius: 14, spreadRadius: 1)],
    );

BoxDecoration _ringSunset(double s) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFFDE68A), Color(0xFFF97316), Color(0xFFFB7185), Color(0xFF7C3AED), Color(0xFFFDE68A)]),
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
  NgmyBioRingStyle(id: 'crimson', label: 'Crimson', buildRing: _ringCrimson, ringAnimation: NgmyBioRingAnimation.pulse, auraColor: Color(0xFFEF4444)),
  NgmyBioRingStyle(id: 'electric', label: 'Electric', buildRing: _ringElectric, ringAnimation: NgmyBioRingAnimation.shimmer, auraColor: Color(0xFF22D3EE)),
  NgmyBioRingStyle(id: 'sunset', label: 'Sunset', buildRing: _ringSunset, ringAnimation: NgmyBioRingAnimation.smoke, auraColor: Color(0xFFF97316)),
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
  };
  final resolved = legacy[id] ?? id;
  return kNgmyBioRingStyles.firstWhere((r) => r.id == resolved, orElse: () => kNgmyBioRingStyles.firstWhere((r) => r.id == 'gold'));
}

// ── 28 premium bio templates with scene effects ─────────────────────────────

const List<NgmyBioTemplate> kNgmyBioTemplates = [
  NgmyBioTemplate(id: 'gold_curved', name: 'Gold Curved', layout: NgmyBioLayoutStyle.proVinyl, pageBg: Color(0xFF14100A), pageBgEnd: Color(0xFF2A1F0E), panelBg: Color(0xFF2A1F0E), cardBg: Color(0x1AD4AF37), cardBorder: Color(0x88D4AF37), accent: Color(0xFFD4AF37), titleColor: Color(0xFFFFF8E7), subtitleColor: Color(0xFFE8C896), linkTextColor: Color(0xFFFFF8E7), linkStyle: NgmyBioLinkStyle.glass, cardRadius: 18, cardShadow: false, sceneEffect: NgmyBioSceneEffect.goldDust),
  NgmyBioTemplate(id: 'wave_ocean', name: 'Ocean Wave', layout: NgmyBioLayoutStyle.proBubbles, pageBg: Color(0xFF0369A1), pageBgEnd: Color(0xFF0C2D48), panelBg: Color(0xFF0C4A6E), cardBg: Color(0x22FFFFFF), cardBorder: Color(0x66BAE6FD), accent: Color(0xFF38BDF8), titleColor: Colors.white, subtitleColor: Color(0xFFBAE6FD), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 999, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.oceanRipple),
  NgmyBioTemplate(id: 'outline_wire', name: 'Win Money', layout: NgmyBioLayoutStyle.proJackpot, pageBg: Color(0xFF022C22), pageBgEnd: Color(0xFF064E3B), panelBg: Color(0xFF064E3B), cardBg: Color(0x1AFFFFFF), cardBorder: Color(0x88FACC15), accent: Color(0xFFFACC15), titleColor: Colors.white, subtitleColor: Color(0xFF6EE7B7), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.goldBar, cardRadius: 16, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.goldDust),
  NgmyBioTemplate(id: 'royal_marble', name: 'Imperial Agency', layout: NgmyBioLayoutStyle.proGallery, pageBg: Color(0xFF1A0F2E), pageBgEnd: Color(0xFF2D1B4E), panelBg: Color(0xFF2D1B4E), cardBg: Color(0x24FFFFFF), cardBorder: Color(0x66D4AF37), accent: Color(0xFFD4AF37), titleColor: Color(0xFFFFF8E7), subtitleColor: Color(0xFFE8C896), linkTextColor: Color(0xFFFFF8E7), linkStyle: NgmyBioLinkStyle.goldBar, cardRadius: 10, cardShadow: false, sceneEffect: NgmyBioSceneEffect.marbleVeins),
  NgmyBioTemplate(id: 'neon_night', name: 'Nebula', layout: NgmyBioLayoutStyle.proConstellation, pageBg: Color(0xFF0B0B1A), pageBgEnd: Color(0xFF1E0B3A), panelBg: Color(0xFF12082A), cardBg: Color(0x1AFFFFFF), cardBorder: Color(0x44C4B5FD), accent: Color(0xFFA78BFA), titleColor: Colors.white, subtitleColor: Color(0xFFC4B5FD), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 22, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.cosmicDust),
  NgmyBioTemplate(id: 'sunset_arc', name: 'Sunset Glow', layout: NgmyBioLayoutStyle.proSunburst, pageBg: Color(0xFFF97316), pageBgEnd: Color(0xFF7C2D12), panelBg: Color(0xFF9A3412), cardBg: Color(0x26FFFFFF), cardBorder: Color(0x66FFEDD5), accent: Color(0xFFFDE68A), titleColor: Colors.white, subtitleColor: Color(0xFFFFEDD5), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 999, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.emberGlow),
  NgmyBioTemplate(id: 'velvet_purple', name: 'Royal Violet', layout: NgmyBioLayoutStyle.proWaxSeal, pageBg: Color(0xFF2E1065), pageBgEnd: Color(0xFF12052B), panelBg: Color(0xFF2E1065), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x88E9D5FF), accent: Color(0xFFE9D5FF), titleColor: Colors.white, subtitleColor: Color(0xFFD8B4FE), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 18, cardShadow: false, sceneEffect: NgmyBioSceneEffect.sparkle),
  NgmyBioTemplate(id: 'rose_quartz', name: 'Blush Glass', layout: NgmyBioLayoutStyle.proGlassStack, pageBg: Color(0xFFFFE4E6), pageBgEnd: Color(0xFFFBCFE8), panelBg: Color(0xFFFFFFFF), cardBg: Color(0xCCFFFFFF), cardBorder: Color(0xFFFBCFE8), accent: Color(0xFFDB2777), titleColor: Color(0xFF831843), subtitleColor: Color(0xFFBE185D), linkTextColor: Color(0xFF831843), linkStyle: NgmyBioLinkStyle.pill, headerGradient: [Color(0xFFF9A8D4), Color(0xFFC4B5FD)], cardRadius: 999, sceneEffect: NgmyBioSceneEffect.petalDrift),
  NgmyBioTemplate(id: 'angular_noir', name: 'Noir Glass', layout: NgmyBioLayoutStyle.proFilmStrip, pageBg: Color(0xFF0A0A0A), pageBgEnd: Color(0xFF171717), panelBg: Color(0xFF171717), cardBg: Color(0x14FFFFFF), cardBorder: Color(0x55E5E5E5), accent: Color(0xFFE5E5E5), titleColor: Colors.white, subtitleColor: Color(0xFFA3A3A3), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.outline, headerGradient: [Color(0xFF525252), Color(0xFF0A0A0A)], cardRadius: 4, cardShadow: false),
  NgmyBioTemplate(id: 'glass_float', name: 'Rain Glass', layout: NgmyBioLayoutStyle.proRainWindow, pageBg: Color(0xFF0F172A), pageBgEnd: Color(0xFF1E3A5F), panelBg: Color(0xFF1E293B), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x5593C5FD), accent: Color(0xFF93C5FD), titleColor: Colors.white, subtitleColor: Color(0xFFBFDBFE), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, headerGradient: [Color(0xFF60A5FA), Color(0xFF22D3EE)], cardRadius: 20, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.rain),
  NgmyBioTemplate(id: 'editorial', name: 'Clean Studio', layout: NgmyBioLayoutStyle.proPostcard, pageBg: Color(0xFFF5EFE4), pageBgEnd: Color(0xFFEDE3D0), panelBg: Color(0xFFF5EFE4), cardBg: Color(0xFFFFFDF8), cardBorder: Color(0xFFE7D9BF), accent: Color(0xFF9A3412), titleColor: Color(0xFF292524), subtitleColor: Color(0xFF78716C), linkTextColor: Color(0xFF292524), linkStyle: NgmyBioLinkStyle.rowIcon, cardRadius: 10, sceneEffect: NgmyBioSceneEffect.paperGrain),
  NgmyBioTemplate(id: 'forest_organic', name: 'Emerald Glass', layout: NgmyBioLayoutStyle.proJungle, pageBg: Color(0xFF064E3B), pageBgEnd: Color(0xFF022C22), panelBg: Color(0xFF064E3B), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x6634D399), accent: Color(0xFF34D399), titleColor: Colors.white, subtitleColor: Color(0xFFA7F3D0), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 18, cardShadow: false, sceneEffect: NgmyBioSceneEffect.leafCanopy),
  NgmyBioTemplate(id: 'midnight_glow', name: 'Cyan Pulse', layout: NgmyBioLayoutStyle.proPulse, pageBg: Color(0xFF020617), pageBgEnd: Color(0xFF082F49), panelBg: Color(0xFF082F49), cardBg: Color(0x1422D3EE), cardBorder: Color(0xFF22D3EE), accent: Color(0xFF22D3EE), titleColor: Colors.white, subtitleColor: Color(0xFF67E8F9), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, cardRadius: 16, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.cyanPulse),
  NgmyBioTemplate(id: 'split_gold', name: 'Gold Glass', layout: NgmyBioLayoutStyle.proWatch, pageBg: Color(0xFF050505), pageBgEnd: Color(0xFF1C1917), panelBg: Color(0xFF1C1917), cardBg: Color(0x1AD4AF37), cardBorder: Color(0x88D4AF37), accent: Color(0xFFD4AF37), titleColor: Color(0xFFFAFAF9), subtitleColor: Color(0xFFD6D3D1), linkTextColor: Color(0xFFFAFAF9), linkStyle: NgmyBioLinkStyle.glass, cardRadius: 14, cardShadow: false, sceneEffect: NgmyBioSceneEffect.goldStream),
  NgmyBioTemplate(id: 'pill_modern', name: 'Bio Link', layout: NgmyBioLayoutStyle.proDiagonal, pageBg: Color(0xFFF8FAFC), pageBgEnd: Color(0xFFEEF2FF), panelBg: Color(0xFFFFFFFF), cardBg: Color(0xFFFFFFFF), cardBorder: Color(0xFFE0E7FF), accent: Color(0xFF6366F1), titleColor: Color(0xFF1E1B4B), subtitleColor: Color(0xFF6366F1), linkTextColor: Color(0xFF1E1B4B), linkStyle: NgmyBioLinkStyle.pill, headerGradient: [Color(0xFF6366F1), Color(0xFFEC4899)], cardRadius: 999, serifTitle: false),
  NgmyBioTemplate(id: 'diamond_white', name: 'Pure Light', layout: NgmyBioLayoutStyle.proPrismBeam, pageBg: Color(0xFFFFFFFF), pageBgEnd: Color(0xFFE0F2FE), panelBg: Color(0xFFFFFFFF), cardBg: Color(0xFFFFFFFF), cardBorder: Color(0xFFBAE6FD), accent: Color(0xFF0284C7), titleColor: Color(0xFF0C4A6E), subtitleColor: Color(0xFF0369A1), linkTextColor: Color(0xFF0C4A6E), linkStyle: NgmyBioLinkStyle.minimalLine, headerGradient: [Color(0xFFBAE6FD), Color(0xFFE0E7FF)], cardRadius: 14, sceneEffect: NgmyBioSceneEffect.frostCrystals),
  NgmyBioTemplate(id: 'bold_stripe', name: 'Crimson', layout: NgmyBioLayoutStyle.proSpeedometer, pageBg: Color(0xFF0A0A0A), pageBgEnd: Color(0xFF1C0A0A), panelBg: Color(0xFF1C0A0A), cardBg: Color(0x14FFFFFF), cardBorder: Color(0xFFDC2626), accent: Color(0xFFDC2626), titleColor: Colors.white, subtitleColor: Color(0xFFFCA5A5), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.outline, headerGradient: [Color(0xFFDC2626), Color(0xFF7F1D1D)], cardRadius: 8, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.crimsonGrid),
  NgmyBioTemplate(id: 'photo_immersive', name: 'Photo Immersive', layout: NgmyBioLayoutStyle.proImmersive, pageBg: Color(0xFF111111), pageBgEnd: Color(0xFF1F1F1F), panelBg: Color(0xFF1F1F1F), cardBg: Color(0x1AFFFFFF), cardBorder: Color(0x55FBBF24), accent: Color(0xFFFBBF24), titleColor: Colors.white, subtitleColor: Color(0xFFFDE68A), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, headerGradient: [Color(0xFFFBBF24), Color(0xFF111111)], cardRadius: 10, cardShadow: false, serifTitle: false),
  NgmyBioTemplate(id: 'champagne_luxe', name: 'Champagne', layout: NgmyBioLayoutStyle.proInvitation, pageBg: Color(0xFFF5EBDD), pageBgEnd: Color(0xFFE8D5B5), panelBg: Color(0xFFFFFBF2), cardBg: Color(0xFFFFFBF2), cardBorder: Color(0xFFD4B483), accent: Color(0xFFA67C2E), titleColor: Color(0xFF3B2A12), subtitleColor: Color(0xFF8B6B2E), linkTextColor: Color(0xFF3B2A12), linkStyle: NgmyBioLinkStyle.goldBar, cardRadius: 14, sceneEffect: NgmyBioSceneEffect.champagneFloat),
  NgmyBioTemplate(id: 'ocean_wave', name: 'Teal Mist', layout: NgmyBioLayoutStyle.proEqualizer, pageBg: Color(0xFF042F2E), pageBgEnd: Color(0xFF115E59), panelBg: Color(0xFF115E59), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x5599F6E4), accent: Color(0xFF2DD4BF), titleColor: Colors.white, subtitleColor: Color(0xFF99F6E4), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, headerGradient: [Color(0xFF2DD4BF), Color(0xFF38BDF8)], cardRadius: 18, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.tealBubbles),
  NgmyBioTemplate(id: 'classic_curved', name: 'Slate Curve', layout: NgmyBioLayoutStyle.proTerminal, pageBg: Color(0xFF0F172A), pageBgEnd: Color(0xFF1E293B), panelBg: Color(0xFF1E293B), cardBg: Color(0x14FFFFFF), cardBorder: Color(0x5594A3B8), accent: Color(0xFF7DD3FC), titleColor: Colors.white, subtitleColor: Color(0xFFCBD5E1), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.outline, cardRadius: 8, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.slateMesh),
  // ── New premium scene templates ───────────────────────────────────────────
  NgmyBioTemplate(id: 'rainy_night', name: 'Rainy Night', layout: NgmyBioLayoutStyle.proNeonSign, pageBg: Color(0xFF0B1220), pageBgEnd: Color(0xFF111827), panelBg: Color(0xFF111827), cardBg: Color(0x1A60A5FA), cardBorder: Color(0xFF60A5FA), accent: Color(0xFF60A5FA), titleColor: Colors.white, subtitleColor: Color(0xFFF472B6), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, cardRadius: 14, cardShadow: false, sceneEffect: NgmyBioSceneEffect.rainBokeh),
  NgmyBioTemplate(id: 'aurora_sky', name: 'Aurora Sky', layout: NgmyBioLayoutStyle.proAuroraPeak, pageBg: Color(0xFF021B1A), pageBgEnd: Color(0xFF0B1437), panelBg: Color(0xFF0B1437), cardBg: Color(0x1AFFFFFF), cardBorder: Color(0x554ADE80), accent: Color(0xFF4ADE80), titleColor: Colors.white, subtitleColor: Color(0xFF86EFAC), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 22, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.northernLights),
  NgmyBioTemplate(id: 'cyber_city', name: 'Cyber City', layout: NgmyBioLayoutStyle.proCyberSkyline, pageBg: Color(0xFF12002B), pageBgEnd: Color(0xFF0A0118), panelBg: Color(0xFF1E0B3A), cardBg: Color(0x1AF472B6), cardBorder: Color(0xFFF472B6), accent: Color(0xFFF472B6), titleColor: Colors.white, subtitleColor: Color(0xFF22D3EE), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, cardRadius: 12, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.neonMesh),
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
    layout: NgmyBioLayoutStyle.bioSiteClassic,
    pageBg: Color(0xFFFFFBF5),
    pageBgEnd: Color(0xFFF5F0E8),
    panelBg: Color(0xFFFFFBF5),
    cardBg: Color(0xF2FFFFFF),
    cardBorder: Color(0xFFE7E5E4),
    accent: Color(0xFFB8860B),
    titleColor: Color(0xFF292524),
    subtitleColor: Color(0xFF78716C),
    linkTextColor: Color(0xFF44403C),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFFD6D3D1), Color(0xFFF5F0E8)],
    cardRadius: 28,
    cardShadow: false,
    sceneEffect: NgmyBioSceneEffect.pearlSheen,
  ),
  NgmyBioTemplate(
    id: 'silver_mist',
    name: 'Platinum Mist',
    layout: NgmyBioLayoutStyle.bioSiteClassic,
    pageBg: Color(0xFFF1F5F9),
    pageBgEnd: Color(0xFFE2E8F0),
    panelBg: Color(0xFFF1F5F9),
    cardBg: Color(0xE8FFFFFF),
    cardBorder: Color(0xFFC0C8D4),
    accent: Color(0xFF64748B),
    titleColor: Color(0xFF0F172A),
    subtitleColor: Color(0xFF64748B),
    linkTextColor: Color(0xFF334155),
    linkStyle: NgmyBioLinkStyle.pill,
    headerGradient: [Color(0xFF94A3B8), Color(0xFFCBD5E1), Color(0xFFF1F5F9)],
    cardRadius: 28,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.frostCrystals,
  ),
  NgmyBioTemplate(id: 'imperial_crown', name: 'Imperial Crown', layout: NgmyBioLayoutStyle.proCrown, pageBg: Color(0xFF0B1437), pageBgEnd: Color(0xFF020617), panelBg: Color(0xFF0B1437), cardBg: Color(0x1AD4AF37), cardBorder: Color(0x88D4AF37), accent: Color(0xFFD4AF37), titleColor: Color(0xFFFFF8E7), subtitleColor: Color(0xFFE8C896), linkTextColor: Color(0xFFFFF8E7), linkStyle: NgmyBioLinkStyle.goldBar, cardRadius: 14, cardShadow: false, sceneEffect: NgmyBioSceneEffect.goldDust),
  // ── 2026-10 pro set: each uses a layout no earlier template used ─────────
  NgmyBioTemplate(id: 'pro_bold_angle', name: 'Bold Angle', layout: NgmyBioLayoutStyle.proComic, pageBg: Color(0xFF0A0A0F), pageBgEnd: Color(0xFF18101F), panelBg: Color(0xFF18101F), cardBg: Color(0x14FFFFFF), cardBorder: Color(0xFFF43F5E), accent: Color(0xFFF43F5E), titleColor: Colors.white, subtitleColor: Color(0xFFFDA4AF), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, headerGradient: [Color(0xFFF43F5E), Color(0xFF7C3AED)], cardRadius: 14, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.circuitBoard),
  NgmyBioTemplate(id: 'pro_prism_float', name: 'Prism Float', layout: NgmyBioLayoutStyle.proKaleido, pageBg: Color(0xFF0F172A), pageBgEnd: Color(0xFF1E1B4B), panelBg: Color(0xFF1E1B4B), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x55A5F3FC), accent: Color(0xFF67E8F9), titleColor: Colors.white, subtitleColor: Color(0xFFC7D2FE), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, headerGradient: [Color(0xFF06B6D4), Color(0xFF8B5CF6), Color(0xFFEC4899)], cardRadius: 22, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.prismShimmer),
  NgmyBioTemplate(id: 'pro_editorial_ink', name: 'Editorial Ink', layout: NgmyBioLayoutStyle.proNewspaper, pageBg: Color(0xFF1C1917), pageBgEnd: Color(0xFF292524), panelBg: Color(0xFF292524), cardBg: Color(0x14FFFFFF), cardBorder: Color(0x66FBBF24), accent: Color(0xFFB45309), titleColor: Color(0xFFFAFAF9), subtitleColor: Color(0xFFD6D3D1), linkTextColor: Color(0xFFFAFAF9), linkStyle: NgmyBioLinkStyle.minimalLine, cardRadius: 0, cardShadow: false, sceneEffect: NgmyBioSceneEffect.marbleVeins),
  NgmyBioTemplate(id: 'pro_velvet_wine', name: 'Velvet Wine', layout: NgmyBioLayoutStyle.proTheater, pageBg: Color(0xFF2A0A12), pageBgEnd: Color(0xFF4A0E1F), panelBg: Color(0xFF3B0A18), cardBg: Color(0x22D4AF37), cardBorder: Color(0x88D4AF37), accent: Color(0xFF9F1239), titleColor: Color(0xFFFFF4E6), subtitleColor: Color(0xFFE7C9A9), linkTextColor: Color(0xFFFFF4E6), linkStyle: NgmyBioLinkStyle.goldBar, cardRadius: 16, sceneEffect: NgmyBioSceneEffect.goldDust),
  NgmyBioTemplate(id: 'pro_rose_quartz', name: 'Rose Quartz', layout: NgmyBioLayoutStyle.proRoseBloom, pageBg: Color(0xFFFFF1F2), pageBgEnd: Color(0xFFFFE4E6), panelBg: Color(0xFFFFFFFF), cardBg: Color(0xCCFFFFFF), cardBorder: Color(0xFFFECDD3), accent: Color(0xFFE11D48), titleColor: Color(0xFF881337), subtitleColor: Color(0xFFE11D48), linkTextColor: Color(0xFF881337), linkStyle: NgmyBioLinkStyle.pill, headerGradient: [Color(0xFFFDA4AF), Color(0xFFFBCFE8), Color(0xFFFDE68A)], cardRadius: 999, sceneEffect: NgmyBioSceneEffect.sparkle),
  NgmyBioTemplate(id: 'pro_midnight_glow', name: 'Midnight Glow', layout: NgmyBioLayoutStyle.proMoonPhase, pageBg: Color(0xFF020617), pageBgEnd: Color(0xFF0B1437), panelBg: Color(0xFF0B1437), cardBg: Color(0x1A818CF8), cardBorder: Color(0xFF818CF8), accent: Color(0xFF818CF8), titleColor: Colors.white, subtitleColor: Color(0xFFA5B4FC), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, cardRadius: 18, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.neonMesh),
  NgmyBioTemplate(id: 'pro_forest_canopy', name: 'Forest Canopy', layout: NgmyBioLayoutStyle.proFireflies, pageBg: Color(0xFF052E16), pageBgEnd: Color(0xFF14532D), panelBg: Color(0xFF14532D), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x6686EFAC), accent: Color(0xFF86EFAC), titleColor: Colors.white, subtitleColor: Color(0xFFFDE68A), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 18, cardShadow: false, sceneEffect: NgmyBioSceneEffect.leafCanopy),
  NgmyBioTemplate(id: 'pro_bold_stripe', name: 'Volt Stripe', layout: NgmyBioLayoutStyle.proVoltage, pageBg: Color(0xFF0A0A0A), pageBgEnd: Color(0xFF111A05), panelBg: Color(0xFF0A0A0A), cardBg: Color(0x14A3E635), cardBorder: Color(0xFFA3E635), accent: Color(0xFFA3E635), titleColor: Colors.white, subtitleColor: Color(0xFFD9F99D), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.outline, cardRadius: 6, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.cyberScan),
  NgmyBioTemplate(id: 'pro_diamond_white', name: 'Diamond White', layout: NgmyBioLayoutStyle.proDiamond, pageBg: Color(0xFFF8FAFC), pageBgEnd: Color(0xFFE2E8F0), panelBg: Color(0xFFFFFFFF), cardBg: Color(0xFFFFFFFF), cardBorder: Color(0xFFCBD5E1), accent: Color(0xFF94A3B8), titleColor: Color(0xFF0F172A), subtitleColor: Color(0xFF64748B), linkTextColor: Color(0xFF0F172A), linkStyle: NgmyBioLinkStyle.minimalLine, cardRadius: 12, sceneEffect: NgmyBioSceneEffect.pearlSheen),
  NgmyBioTemplate(id: 'pro_synthwave', name: 'Synthwave', layout: NgmyBioLayoutStyle.proSynthGrid, pageBg: Color(0xFF12002B), pageBgEnd: Color(0xFF2E0249), panelBg: Color(0xFF2E0249), cardBg: Color(0x1AF0ABFC), cardBorder: Color(0xFFF0ABFC), accent: Color(0xFFF472B6), titleColor: Colors.white, subtitleColor: Color(0xFFF5D0FE), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.neonOutline, headerGradient: [Color(0xFFF472B6), Color(0xFF22D3EE)], cardRadius: 16, cardShadow: false, serifTitle: false, sceneEffect: NgmyBioSceneEffect.cyberScan),
  // ── 2026-10 "wow" set: each has its own animated layout ──────────────────
  NgmyBioTemplate(
    id: 'wow_robot_hud',
    name: 'Robot HUD',
    layout: NgmyBioLayoutStyle.proRobotHud,
    pageBg: Color(0xFF020814),
    pageBgEnd: Color(0xFF041A2E),
    panelBg: Color(0xFF041A2E),
    cardBg: Color(0x1422D3EE),
    cardBorder: Color(0xFF22D3EE),
    accent: Color(0xFF22D3EE),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF67E8F9),
    linkTextColor: Color(0xFFE0F2FE),
    linkStyle: NgmyBioLinkStyle.neonOutline,
    cardRadius: 4,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.circuitBoard,
  ),
  NgmyBioTemplate(
    id: 'wow_galaxy_orbit',
    name: 'Galaxy Orbit',
    layout: NgmyBioLayoutStyle.proOrbit,
    pageBg: Color(0xFF05010F),
    pageBgEnd: Color(0xFF1B0B3A),
    panelBg: Color(0xFF1B0B3A),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x55C4B5FD),
    accent: Color(0xFFA78BFA),
    titleColor: Colors.white,
    subtitleColor: Color(0xFF67E8F9),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    cardRadius: 24,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.starfield,
  ),
  NgmyBioTemplate(
    id: 'wow_polaroid',
    name: 'Polaroid Memories',
    layout: NgmyBioLayoutStyle.proPolaroid,
    pageBg: Color(0xFFF7F1E5),
    pageBgEnd: Color(0xFFEFE5D2),
    panelBg: Color(0xFFF7F1E5),
    cardBg: Color(0xFFFFFDF8),
    cardBorder: Color(0xFFE7D9BF),
    accent: Color(0xFFB45309),
    titleColor: Color(0xFF3B2A1A),
    subtitleColor: Color(0xFF8A6A45),
    linkTextColor: Color(0xFF3B2A1A),
    linkStyle: NgmyBioLinkStyle.pill,
    cardRadius: 6,
    sceneEffect: NgmyBioSceneEffect.paperGrain,
  ),
  NgmyBioTemplate(
    id: 'wow_cover_star',
    name: 'Cover Star',
    layout: NgmyBioLayoutStyle.proMagazine,
    pageBg: Color(0xFF0A0A0A),
    panelBg: Color(0xFF0A0A0A),
    cardBg: Color(0xFF171717),
    cardBorder: Color(0xFFEF4444),
    accent: Color(0xFFEF4444),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFFCA5A5),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.minimalLine,
    headerGradient: [Color(0xFFEF4444), Color(0xFF7F1D1D), Color(0xFF0A0A0A)],
    cardRadius: 0,
    cardShadow: false,
    serifTitle: false,
  ),
  NgmyBioTemplate(
    id: 'wow_liquid_candy',
    name: 'Liquid Candy',
    layout: NgmyBioLayoutStyle.proLiquid,
    pageBg: Color(0xFFFDF2F8),
    pageBgEnd: Color(0xFFEDE9FE),
    panelBg: Color(0xFFFFFFFF),
    cardBg: Color(0xCCFFFFFF),
    cardBorder: Color(0xFFF5D0FE),
    accent: Color(0xFFC026D3),
    titleColor: Color(0xFF4A044E),
    subtitleColor: Color(0xFF9333EA),
    linkTextColor: Color(0xFF4A044E),
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFFF472B6), Color(0xFFA78BFA), Color(0xFF38BDF8)],
    cardRadius: 999,
    sceneEffect: NgmyBioSceneEffect.sparkle,
  ),
  NgmyBioTemplate(
    id: 'wow_arcade',
    name: 'Arcade 8-Bit',
    layout: NgmyBioLayoutStyle.proArcade,
    pageBg: Color(0xFF000000),
    pageBgEnd: Color(0xFF0B0221),
    panelBg: Color(0xFF0B0221),
    cardBg: Color(0xFF111111),
    cardBorder: Color(0xFF4ADE80),
    accent: Color(0xFF4ADE80),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFA7F3D0),
    linkTextColor: Color(0xFF4ADE80),
    linkStyle: NgmyBioLinkStyle.outline,
    cardRadius: 0,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.starfield,
  ),
  NgmyBioTemplate(
    id: 'wow_boarding_pass',
    name: 'First Class',
    layout: NgmyBioLayoutStyle.proBoardingPass,
    pageBg: Color(0xFF0EA5E9),
    pageBgEnd: Color(0xFF0369A1),
    panelBg: Color(0xFF0369A1),
    cardBg: Color(0xFFFFFFFF),
    cardBorder: Color(0xFFBAE6FD),
    accent: Color(0xFF0369A1),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFE0F2FE),
    linkTextColor: Color(0xFF0C4A6E),
    linkStyle: NgmyBioLinkStyle.pill,
    cardRadius: 14,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.cottonClouds,
  ),
  NgmyBioTemplate(
    id: 'wow_holo_id',
    name: 'Holo Member',
    layout: NgmyBioLayoutStyle.proHoloId,
    pageBg: Color(0xFF0B0B14),
    pageBgEnd: Color(0xFF1A1033),
    panelBg: Color(0xFF1A1033),
    cardBg: Color(0x1AFFFFFF),
    cardBorder: Color(0x40FFFFFF),
    accent: Color(0xFFF0ABFC),
    titleColor: Colors.white,
    subtitleColor: Color(0xFFE9D5FF),
    linkTextColor: Colors.white,
    linkStyle: NgmyBioLinkStyle.glass,
    headerGradient: [Color(0xFF312E81), Color(0xFF6D28D9), Color(0xFF0E7490)],
    cardRadius: 18,
    cardShadow: false,
    serifTitle: false,
    sceneEffect: NgmyBioSceneEffect.prismShimmer,
  ),
  // ── Showpieces: koi pond and stained glass ───────────────────────────────
  NgmyBioTemplate(id: 'pro_zen_koi', name: 'Zen Koi', layout: NgmyBioLayoutStyle.proKoiPond, pageBg: Color(0xFF0B4A54), pageBgEnd: Color(0xFF062026), panelBg: Color(0xFF0B3B46), cardBg: Color(0x1FFFFFFF), cardBorder: Color(0x5599F6E4), accent: Color(0xFFFB923C), titleColor: Colors.white, subtitleColor: Color(0xFF99F6E4), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.glass, cardRadius: 20, cardShadow: false),
  NgmyBioTemplate(id: 'pro_cathedral_light', name: 'Cathedral Light', layout: NgmyBioLayoutStyle.proStainedGlass, pageBg: Color(0xFF120B22), pageBgEnd: Color(0xFF1E1233), panelBg: Color(0xFF1E1233), cardBg: Color(0x1AFFFFFF), cardBorder: Color(0x88FBBF24), accent: Color(0xFFFBBF24), titleColor: Color(0xFFFFF7E6), subtitleColor: Color(0xFFE9D5FF), linkTextColor: Colors.white, linkStyle: NgmyBioLinkStyle.goldBar, headerGradient: [Color(0xFFB91C1C), Color(0xFF1D4ED8), Color(0xFF047857), Color(0xFF7E22CE), Color(0xFFD97706)], cardRadius: 10, cardShadow: false),
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
              t.layout == NgmyBioLayoutStyle.marbleCream ||
              t.layout == NgmyBioLayoutStyle.bioSiteClassic)
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
    final light = (t.pageBgEnd ?? t.pageBg).computeLuminance() > 0.55;
    final r = t.linkStyle == NgmyBioLinkStyle.pill || isGlass ? h / 2 : t.cardRadius.clamp(2.0, 8.0);
    return Container(
      height: h,
      decoration: BoxDecoration(
        color: isGlass
            ? (light ? Colors.white : Colors.white.withValues(alpha: 0.12))
            : (t.linkStyle == NgmyBioLinkStyle.outline || t.linkStyle == NgmyBioLinkStyle.neonOutline ? Colors.transparent : t.cardBg),
        borderRadius: BorderRadius.circular(r),
        border: isGlass
            ? Border.all(color: light ? const Color(0xFFCBD5E1) : Colors.white.withValues(alpha: 0.2), width: light ? 1 : 0.5)
            : Border.all(color: t.linkStyle == NgmyBioLinkStyle.goldBar ? t.accent : t.cardBorder, width: t.linkStyle == NgmyBioLinkStyle.outline ? 1 : 0.5),
        boxShadow: light && isGlass ? [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 3, offset: const Offset(0, 1))] : null,
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
