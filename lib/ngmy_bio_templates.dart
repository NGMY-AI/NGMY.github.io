import 'package:flutter/material.dart';

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
    required this.pageBg,
    required this.cardBg,
    required this.cardBorder,
    required this.titleColor,
    required this.subtitleColor,
    required this.linkTextColor,
    required this.useHeaderOverlap,
    this.cardShadow = true,
  });

  final String id;
  final String name;
  final Color pageBg;
  final Color cardBg;
  final Color cardBorder;
  final Color titleColor;
  final Color subtitleColor;
  final Color linkTextColor;
  final bool useHeaderOverlap;
  final bool cardShadow;
}

const List<NgmyBioRingStyle> kNgmyBioRingStyles = [
  NgmyBioRingStyle(id: 'none', label: 'None', buildRing: _ringNone),
  NgmyBioRingStyle(id: 'white', label: 'White', buildRing: _ringWhite),
  NgmyBioRingStyle(id: 'gold', label: 'Gold', buildRing: _ringGold),
  NgmyBioRingStyle(id: 'silver', label: 'Silver', buildRing: _ringSilver),
  NgmyBioRingStyle(id: 'black', label: 'Black', buildRing: _ringBlack),
  NgmyBioRingStyle(id: 'rainbow', label: 'Rainbow', buildRing: _ringRainbow),
  NgmyBioRingStyle(id: 'sunset', label: 'Sunset', buildRing: _ringSunset),
  NgmyBioRingStyle(id: 'ocean', label: 'Ocean', buildRing: _ringOcean),
  NgmyBioRingStyle(id: 'glow_blue', label: 'Blue glow', buildRing: _ringGlowBlue),
  NgmyBioRingStyle(id: 'glow_pink', label: 'Pink glow', buildRing: _ringGlowPink),
  NgmyBioRingStyle(id: 'double', label: 'Double', buildRing: _ringDouble),
];

BoxDecoration _ringNone(double size) => const BoxDecoration(shape: BoxShape.circle);

BoxDecoration _ringWhite(double size) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: Colors.white, width: 4),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 8)],
    );

BoxDecoration _ringGold(double size) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF5E6A8), Color(0xFFD4AF37), Color(0xFFB8860B)]),
      boxShadow: [BoxShadow(color: const Color(0xFFD4AF37).withValues(alpha: 0.45), blurRadius: 10)],
    );

BoxDecoration _ringSilver(double size) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFF8FAFC), Color(0xFFCBD5E1), Color(0xFF94A3B8)]),
      border: Border.all(color: Colors.white, width: 2),
    );

BoxDecoration _ringBlack(double size) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFF111827), width: 4),
    );

BoxDecoration _ringRainbow(double size) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const SweepGradient(colors: [Color(0xFFFF0080), Color(0xFFFF8C00), Color(0xFFFFD700), Color(0xFF00C853), Color(0xFF2979FF), Color(0xFFAA00FF), Color(0xFFFF0080)]),
    );

BoxDecoration _ringSunset(double size) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFFFF6B6B), Color(0xFFFF8E53), Color(0xFFFECA57)]),
    );

BoxDecoration _ringOcean(double size) => BoxDecoration(
      shape: BoxShape.circle,
      gradient: const LinearGradient(colors: [Color(0xFF667EEA), Color(0xFF764BA2), Color(0xFF06BEB6)]),
    );

BoxDecoration _ringGlowBlue(double size) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFF2563EB), width: 3),
      boxShadow: [BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: 0.55), blurRadius: 14, spreadRadius: 2)],
    );

BoxDecoration _ringGlowPink(double size) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: const Color(0xFFEC4899), width: 3),
      boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.5), blurRadius: 14, spreadRadius: 2)],
    );

BoxDecoration _ringDouble(double size) => BoxDecoration(
      shape: BoxShape.circle,
      border: Border.all(color: Colors.white, width: 3),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 6), BoxShadow(color: Colors.white, spreadRadius: 2)],
    );

NgmyBioRingStyle ngmyBioRingById(String id) {
  return kNgmyBioRingStyles.firstWhere((r) => r.id == id, orElse: () => kNgmyBioRingStyles.firstWhere((r) => r.id == 'white'));
}

const List<NgmyBioTemplate> kNgmyBioTemplates = [
  NgmyBioTemplate(id: 'classic_white', name: 'Classic White', pageBg: Color(0xFFF3F4F6), cardBg: Colors.white, cardBorder: Color(0xFFE5E7EB), titleColor: Color(0xFF111827), subtitleColor: Color(0xFF6B7280), linkTextColor: Color(0xFF111827), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'soft_gray', name: 'Soft Gray', pageBg: Color(0xFFE5E7EB), cardBg: Color(0xFFF9FAFB), cardBorder: Color(0xFFD1D5DB), titleColor: Color(0xFF1F2937), subtitleColor: Color(0xFF6B7280), linkTextColor: Color(0xFF374151), useHeaderOverlap: false),
  NgmyBioTemplate(id: 'dark_mode', name: 'Dark Mode', pageBg: Color(0xFF0F172A), cardBg: Color(0xFF1E293B), cardBorder: Color(0xFF334155), titleColor: Colors.white, subtitleColor: Color(0xFF94A3B8), linkTextColor: Colors.white, useHeaderOverlap: true, cardShadow: false),
  NgmyBioTemplate(id: 'cream', name: 'Warm Cream', pageBg: Color(0xFFFAF7F2), cardBg: Color(0xFFFFFDF8), cardBorder: Color(0xFFE8DFD0), titleColor: Color(0xFF2C2416), subtitleColor: Color(0xFF78716C), linkTextColor: Color(0xFF44403C), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'blush', name: 'Blush', pageBg: Color(0xFFFDF2F8), cardBg: Colors.white, cardBorder: Color(0xFFFBCFE8), titleColor: Color(0xFF831843), subtitleColor: Color(0xFFBE185D), linkTextColor: Color(0xFF9D174D), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'ocean', name: 'Ocean', pageBg: Color(0xFFEFF6FF), cardBg: Colors.white, cardBorder: Color(0xFFBFDBFE), titleColor: Color(0xFF1E3A8A), subtitleColor: Color(0xFF2563EB), linkTextColor: Color(0xFF1D4ED8), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'forest', name: 'Forest', pageBg: Color(0xFFECFDF5), cardBg: Colors.white, cardBorder: Color(0xFFA7F3D0), titleColor: Color(0xFF064E3B), subtitleColor: Color(0xFF059669), linkTextColor: Color(0xFF047857), useHeaderOverlap: false),
  NgmyBioTemplate(id: 'minimal', name: 'Minimal', pageBg: Colors.white, cardBg: Colors.white, cardBorder: Color(0xFF111827), titleColor: Color(0xFF111827), subtitleColor: Color(0xFF6B7280), linkTextColor: Color(0xFF111827), useHeaderOverlap: false, cardShadow: false),
  NgmyBioTemplate(id: 'bold_black', name: 'Bold Black', pageBg: Colors.black, cardBg: Color(0xFF111827), cardBorder: Color(0xFF374151), titleColor: Colors.white, subtitleColor: Color(0xFF9CA3AF), linkTextColor: Colors.white, useHeaderOverlap: true, cardShadow: false),
  NgmyBioTemplate(id: 'sunset', name: 'Sunset', pageBg: Color(0xFFFFF7ED), cardBg: Colors.white, cardBorder: Color(0xFFFED7AA), titleColor: Color(0xFF9A3412), subtitleColor: Color(0xFFEA580C), linkTextColor: Color(0xFFC2410C), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'lavender', name: 'Lavender', pageBg: Color(0xFFF5F3FF), cardBg: Colors.white, cardBorder: Color(0xFFDDD6FE), titleColor: Color(0xFF4C1D95), subtitleColor: Color(0xFF7C3AED), linkTextColor: Color(0xFF6D28D9), useHeaderOverlap: true),
  NgmyBioTemplate(id: 'photo_bg', name: 'Photo Background', pageBg: Color(0xFF111827), cardBg: Color(0xF2FFFFFF), cardBorder: Color(0x00000000), titleColor: Color(0xFF111827), subtitleColor: Color(0xFF6B7280), linkTextColor: Color(0xFF111827), useHeaderOverlap: true),
];

NgmyBioTemplate ngmyBioTemplateById(String id) {
  return kNgmyBioTemplates.firstWhere((t) => t.id == id, orElse: () => kNgmyBioTemplates.first);
}
