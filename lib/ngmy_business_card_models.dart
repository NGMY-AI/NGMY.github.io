import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

/// Standard US business card ratio (3.5" × 2").
const double kNgmyBusinessCardAspect = 3.5 / 2.0;

class NgmyBusinessCardTemplate {
  const NgmyBusinessCardTemplate({
    required this.id,
    required this.name,
    required this.category,
    required this.renderStyle,
    required this.bgStart,
    required this.bgEnd,
    required this.accent,
    required this.textPrimary,
    required this.textSecondary,
  });

  final String id;
  final String name;
  final String category;
  /// Unique layout engine key — each style has a different structure.
  final String renderStyle;
  final Color bgStart;
  final Color bgEnd;
  final Color accent;
  final Color textPrimary;
  final Color textSecondary;
}

const List<(String id, String label)> kNgmyBusinessCardCategories = [
  ('corporate', 'Corporate'),
  ('creative', 'Creative'),
  ('minimal', 'Minimal'),
  ('luxury', 'Luxury'),
  ('tech', 'Tech'),
  ('medical', 'Medical'),
  ('real_estate', 'Real Estate'),
  ('freelance', 'Freelance'),
  ('admin', 'Admin'),
];

List<(String id, String label)> ngmyBusinessCardCategoriesVisible({required bool isAdmin}) {
  if (isAdmin) return kNgmyBusinessCardCategories;
  return kNgmyBusinessCardCategories.where((c) => c.$1 != 'admin').toList(growable: false);
}

const List<NgmyBusinessCardTemplate> kNgmyBusinessCardTemplates = [
  NgmyBusinessCardTemplate(id: 'glass_frost', name: 'Glass Frost', category: 'creative', renderStyle: 'glass_frost', bgStart: Color(0xFF1E1B4B), bgEnd: Color(0xFF312E81), accent: Color(0xFF818CF8), textPrimary: Colors.white, textSecondary: Color(0xFFC7D2FE)),
  NgmyBusinessCardTemplate(id: 'vertical_split', name: 'Split Panel', category: 'corporate', renderStyle: 'vertical_split', bgStart: Color(0xFFF8FAFC), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF2563EB), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'mega_type', name: 'Mega Type', category: 'creative', renderStyle: 'mega_type', bgStart: Color(0xFFFAFAFA), bgEnd: Color(0xFFF4F4F5), accent: Color(0xFF18181B), textPrimary: Color(0xFF09090B), textSecondary: Color(0xFF71717A)),
  NgmyBusinessCardTemplate(id: 'orbit', name: 'Orbit Ring', category: 'tech', renderStyle: 'orbit', bgStart: Color(0xFF020617), bgEnd: Color(0xFF0F172A), accent: Color(0xFF22D3EE), textPrimary: Color(0xFFF0FDFA), textSecondary: Color(0xFF67E8F9)),
  NgmyBusinessCardTemplate(id: 'metro_bento', name: 'Bento Grid', category: 'tech', renderStyle: 'metro_bento', bgStart: Color(0xFF111827), bgEnd: Color(0xFF1F2937), accent: Color(0xFF10B981), textPrimary: Colors.white, textSecondary: Color(0xFF9CA3AF)),
  NgmyBusinessCardTemplate(id: 'wave_curve', name: 'Wave Flow', category: 'creative', renderStyle: 'wave_curve', bgStart: Color(0xFF0EA5E9), bgEnd: Color(0xFF0284C7), accent: Color(0xFFFFFFFF), textPrimary: Colors.white, textSecondary: Color(0xFFE0F2FE)),
  NgmyBusinessCardTemplate(id: 'neon_frame', name: 'Neon Edge', category: 'creative', renderStyle: 'neon_frame', bgStart: Color(0xFF020617), bgEnd: Color(0xFF020617), accent: Color(0xFFE879F9), textPrimary: Colors.white, textSecondary: Color(0xFF94A3B8)),
  NgmyBusinessCardTemplate(id: 'editorial', name: 'Editorial', category: 'luxury', renderStyle: 'editorial', bgStart: Color(0xFFFAF9F7), bgEnd: Color(0xFFF5F5F4), accent: Color(0xFF78716C), textPrimary: Color(0xFF1C1917), textSecondary: Color(0xFF57534E)),
  NgmyBusinessCardTemplate(id: 'hero_strip', name: 'Hero Band', category: 'corporate', renderStyle: 'hero_strip', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF1F5F9), accent: Color(0xFF0F766E), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 'pill_row', name: 'Contact Pills', category: 'freelance', renderStyle: 'pill_row', bgStart: Color(0xFFFDF4FF), bgEnd: Color(0xFFFAE8FF), accent: Color(0xFF9333EA), textPrimary: Color(0xFF581C87), textSecondary: Color(0xFF7E22CE)),
  NgmyBusinessCardTemplate(id: 'fold_corner', name: 'Fold Corner', category: 'corporate', renderStyle: 'fold_corner', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF8FAFC), accent: Color(0xFFEF4444), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'bubble_duotone', name: 'Soft Bubbles', category: 'medical', renderStyle: 'bubble_duotone', bgStart: Color(0xFFECFEFF), bgEnd: Color(0xFFCFFAFE), accent: Color(0xFF0891B2), textPrimary: Color(0xFF164E63), textSecondary: Color(0xFF155E75)),
  NgmyBusinessCardTemplate(id: 'ultra_minimal', name: 'Ultra Clean', category: 'minimal', renderStyle: 'ultra_minimal', bgStart: Colors.white, bgEnd: Colors.white, accent: Color(0xFF0F172A), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'gold_luxe', name: 'Gold Luxe', category: 'luxury', renderStyle: 'gold_luxe', bgStart: Color(0xFF0A0A0A), bgEnd: Color(0xFF171717), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 'pastel_inset', name: 'Pastel Inset', category: 'freelance', renderStyle: 'pastel_inset', bgStart: Color(0xFFFFE4E6), bgEnd: Color(0xFFFCE7F3), accent: Color(0xFFDB2777), textPrimary: Color(0xFF1E293B), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'terminal', name: 'Dev Terminal', category: 'tech', renderStyle: 'terminal', bgStart: Color(0xFF0D1117), bgEnd: Color(0xFF0D1117), accent: Color(0xFF3FB950), textPrimary: Color(0xFF3FB950), textSecondary: Color(0xFF8B949E)),
  NgmyBusinessCardTemplate(id: 'ngmy_matrix', name: 'NGMY Matrix', category: 'tech', renderStyle: 'ngmy_matrix', bgStart: Color(0xFF000000), bgEnd: Color(0xFF001A00), accent: Color(0xFF00FF41), textPrimary: Color(0xFF00FF41), textSecondary: Color(0xFF6EE7B7)),
  NgmyBusinessCardTemplate(id: 'ngmy_recon', name: 'Recon HUD', category: 'tech', renderStyle: 'ngmy_recon', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFF1E293B), accent: Color(0xFFF97316), textPrimary: Colors.white, textSecondary: Color(0xFF94A3B8)),
  NgmyBusinessCardTemplate(id: 'ngmy_circuit', name: 'Neon Circuit', category: 'tech', renderStyle: 'ngmy_circuit', bgStart: Color(0xFF090014), bgEnd: Color(0xFF1E0A3C), accent: Color(0xFFA855F7), textPrimary: Colors.white, textSecondary: Color(0xFFC4B5FD)),
  NgmyBusinessCardTemplate(id: 'blueprint', name: 'Blueprint', category: 'real_estate', renderStyle: 'blueprint', bgStart: Color(0xFF1E3A8A), bgEnd: Color(0xFF1D4ED8), accent: Color(0xFF93C5FD), textPrimary: Colors.white, textSecondary: Color(0xFFBFDBFE)),
  NgmyBusinessCardTemplate(id: 'depth_stack', name: 'Depth Stack', category: 'creative', renderStyle: 'depth_stack', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF8FAFC), accent: Color(0xFFF97316), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'ribbon', name: 'Brand Ribbon', category: 'real_estate', renderStyle: 'ribbon', bgStart: Color(0xFFF8FAFC), bgEnd: Color(0xFFE2E8F0), accent: Color(0xFF0F766E), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 'mesh_dots', name: 'Dot Mesh', category: 'minimal', renderStyle: 'mesh_dots', bgStart: Color(0xFF18181B), bgEnd: Color(0xFF27272A), accent: Color(0xFFFAFAFA), textPrimary: Colors.white, textSecondary: Color(0xFFA1A1AA)),
  NgmyBusinessCardTemplate(id: 'black_marble', name: 'Black Marble', category: 'luxury', renderStyle: 'black_marble', bgStart: Color(0xFF0A0A0A), bgEnd: Color(0xFF1A1A1A), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 'champagne_foil', name: 'Champagne Foil', category: 'luxury', renderStyle: 'champagne_foil', bgStart: Color(0xFFF5F0E8), bgEnd: Color(0xFFE8DFD0), accent: Color(0xFFB8860B), textPrimary: Color(0xFF2C2416), textSecondary: Color(0xFF6B5D4D)),
  NgmyBusinessCardTemplate(id: 'velvet_night', name: 'Velvet Night', category: 'luxury', renderStyle: 'velvet_night', bgStart: Color(0xFF1A0A2E), bgEnd: Color(0xFF2D1B4E), accent: Color(0xFFC0C0C0), textPrimary: Color(0xFFF5F3FF), textSecondary: Color(0xFFADA4C4)),
  NgmyBusinessCardTemplate(id: 'platinum_band', name: 'Platinum Band', category: 'luxury', renderStyle: 'platinum_band', bgStart: Color(0xFF1C1C1E), bgEnd: Color(0xFF2C2C2E), accent: Color(0xFFE5E4E2), textPrimary: Colors.white, textSecondary: Color(0xFFAEAEB2)),
  NgmyBusinessCardTemplate(id: 'rose_gold_arc', name: 'Rose Gold Arc', category: 'luxury', renderStyle: 'rose_gold_arc', bgStart: Color(0xFF1F1215), bgEnd: Color(0xFF2A1A1F), accent: Color(0xFFB76E79), textPrimary: Color(0xFFFFF5F7), textSecondary: Color(0xFFD4A5AD)),
  NgmyBusinessCardTemplate(id: 'obsidian_gold', name: 'Obsidian Gold', category: 'luxury', renderStyle: 'obsidian_gold', bgStart: Color(0xFF050505), bgEnd: Color(0xFF111111), accent: Color(0xFFFFD700), textPrimary: Colors.white, textSecondary: Color(0xFF9CA3AF)),
  NgmyBusinessCardTemplate(id: 'silk_gradient', name: 'Silk Gradient', category: 'luxury', renderStyle: 'silk_gradient', bgStart: Color(0xFF1E1B4B), bgEnd: Color(0xFF4C1D95), accent: Color(0xFFF0ABFC), textPrimary: Colors.white, textSecondary: Color(0xFFE9D5FF)),
  NgmyBusinessCardTemplate(id: 'art_deco', name: 'Art Deco', category: 'luxury', renderStyle: 'art_deco', bgStart: Color(0xFF0C0A09), bgEnd: Color(0xFF1C1917), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 'crystalline', name: 'Crystalline', category: 'luxury', renderStyle: 'crystalline', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFF1E293B), accent: Color(0xFF67E8F9), textPrimary: Colors.white, textSecondary: Color(0xFF94A3B8)),
  NgmyBusinessCardTemplate(id: 'executive_monogram', name: 'Executive Monogram', category: 'luxury', renderStyle: 'executive_monogram', bgStart: Color(0xFFFAFAFA), bgEnd: Color(0xFFF4F4F5), accent: Color(0xFF18181B), textPrimary: Color(0xFF09090B), textSecondary: Color(0xFF71717A)),
  NgmyBusinessCardTemplate(id: 'ghost_type', name: 'Ghost Type', category: 'creative', renderStyle: 'ghost_type', bgStart: Color(0xFF09090B), bgEnd: Color(0xFF18181B), accent: Color(0xFFFAFAFA), textPrimary: Colors.white, textSecondary: Color(0xFFA1A1AA)),
  NgmyBusinessCardTemplate(id: 'shadow_kb', name: 'Shadow KB', category: 'creative', renderStyle: 'shadow_kb', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFF1E293B), accent: Color(0xFF22D3EE), textPrimary: Colors.white, textSecondary: Color(0xFF94A3B8)),
  NgmyBusinessCardTemplate(id: 'watermark_gold', name: 'Gold Watermark', category: 'luxury', renderStyle: 'watermark_gold', bgStart: Color(0xFF0A0A0A), bgEnd: Color(0xFF171717), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 'type_halo', name: 'Type Halo', category: 'minimal', renderStyle: 'type_halo', bgStart: Color(0xFFF8FAFC), bgEnd: Color(0xFFE2E8F0), accent: Color(0xFF0F172A), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'vote_campaign', name: 'Vote Campaign', category: 'admin', renderStyle: 'hero_strip', bgStart: Color(0xFF052E16), bgEnd: Color(0xFF14532D), accent: Color(0xFFFACC15), textPrimary: Colors.white, textSecondary: Color(0xFFBBF7D0)),
  NgmyBusinessCardTemplate(id: 'vote_spotlight', name: 'Candidate Spotlight', category: 'admin', renderStyle: 'gold_luxe', bgStart: Color(0xFF111827), bgEnd: Color(0xFF1F2937), accent: Color(0xFFF59E0B), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFD1D5DB)),
  NgmyBusinessCardTemplate(id: 'vote_billboard', name: 'Billboard Ad', category: 'admin', renderStyle: 'mega_type', bgStart: Color(0xFF7F1D1D), bgEnd: Color(0xFF991B1B), accent: Color(0xFFFEF3C7), textPrimary: Colors.white, textSecondary: Color(0xFFFECACA)),
  NgmyBusinessCardTemplate(id: 'vote_civic', name: 'Civic Poster', category: 'admin', renderStyle: 'ribbon', bgStart: Color(0xFF0C4A6E), bgEnd: Color(0xFF0369A1), accent: Color(0xFF67E8F9), textPrimary: Colors.white, textSecondary: Color(0xFFBAE6FD)),
  NgmyBusinessCardTemplate(id: 'vote_neon', name: 'Neon Rally', category: 'admin', renderStyle: 'neon_frame', bgStart: Color(0xFF020617), bgEnd: Color(0xFF0F172A), accent: Color(0xFF22D3EE), textPrimary: Colors.white, textSecondary: Color(0xFF94A3B8)),
  // ── 2026-10 pro set ──────────────────────────────────────────────────────
  // Admin (+10): civic, campaign and official cards.
  NgmyBusinessCardTemplate(id: 'adm_seal_navy', name: 'Official Seal Navy', category: 'admin', renderStyle: 'gov_seal', bgStart: Color(0xFF0B1F3A), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFFC9A227), textPrimary: Colors.white, textSecondary: Color(0xFFCBD5E1)),
  NgmyBusinessCardTemplate(id: 'adm_seal_green', name: 'Civic Seal Green', category: 'admin', renderStyle: 'gov_seal', bgStart: Color(0xFF064E3B), bgEnd: Color(0xFFFEF3C7), accent: Color(0xFFFBBF24), textPrimary: Colors.white, textSecondary: Color(0xFFA7F3D0)),
  NgmyBusinessCardTemplate(id: 'adm_seal_crimson', name: 'Council Crimson', category: 'admin', renderStyle: 'gov_seal', bgStart: Color(0xFF450A0A), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFFF59E0B), textPrimary: Colors.white, textSecondary: Color(0xFFFECACA)),
  NgmyBusinessCardTemplate(id: 'adm_stamp_registrar', name: 'Registrar Badge', category: 'admin', renderStyle: 'stamp_badge', bgStart: Color(0xFFF8FAFC), bgEnd: Color(0xFFE2E8F0), accent: Color(0xFF1D4ED8), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 'adm_stamp_press', name: 'Press Pass', category: 'admin', renderStyle: 'stamp_badge', bgStart: Color(0xFF111827), bgEnd: Color(0xFF1F2937), accent: Color(0xFFEF4444), textPrimary: Colors.white, textSecondary: Color(0xFFD1D5DB)),
  NgmyBusinessCardTemplate(id: 'adm_crest_townhall', name: 'Town Hall Crest', category: 'admin', renderStyle: 'center_crest', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFF1E3A8A), accent: Color(0xFFFACC15), textPrimary: Colors.white, textSecondary: Color(0xFFBFDBFE)),
  NgmyBusinessCardTemplate(id: 'adm_crest_ngmy', name: 'NGMY Official', category: 'admin', renderStyle: 'center_crest', bgStart: Color(0xFF1E0B3D), bgEnd: Color(0xFF4C1D95), accent: Color(0xFFE9D5FF), textPrimary: Colors.white, textSecondary: Color(0xFFDDD6FE)),
  NgmyBusinessCardTemplate(id: 'adm_slash_election', name: 'Election Day', category: 'admin', renderStyle: 'diagonal_slash', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF1F5F9), accent: Color(0xFFB91C1C), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF334155)),
  NgmyBusinessCardTemplate(id: 'adm_split_leader', name: 'Community Leader', category: 'admin', renderStyle: 'split_horizontal', bgStart: Color(0xFF14532D), bgEnd: Color(0xFFF0FDF4), accent: Color(0xFF15803D), textPrimary: Color(0xFF14532D), textSecondary: Color(0xFF166534)),
  NgmyBusinessCardTemplate(id: 'adm_qr_campaign', name: 'Campaign QR', category: 'admin', renderStyle: 'qr_corner', bgStart: Color(0xFF0C4A6E), bgEnd: Color(0xFF075985), accent: Color(0xFFFDE047), textPrimary: Colors.white, textSecondary: Color(0xFFBAE6FD)),
  // Corporate (+5)
  NgmyBusinessCardTemplate(id: 'corp_split_navy', name: 'Boardroom Split', category: 'corporate', renderStyle: 'split_horizontal', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF1E3A8A), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 'corp_rail_steel', name: 'Steel Rail', category: 'corporate', renderStyle: 'sidebar_icons', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF1F5F9), accent: Color(0xFF334155), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'corp_crest_charcoal', name: 'Charcoal Crest', category: 'corporate', renderStyle: 'center_crest', bgStart: Color(0xFF18181B), bgEnd: Color(0xFF3F3F46), accent: Color(0xFF38BDF8), textPrimary: Colors.white, textSecondary: Color(0xFFA1A1AA)),
  NgmyBusinessCardTemplate(id: 'corp_slash_teal', name: 'Teal Slash', category: 'corporate', renderStyle: 'diagonal_slash', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF0FDFA), accent: Color(0xFF0F766E), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 'corp_frame_ink', name: 'Ink Frame', category: 'corporate', renderStyle: 'line_art', bgStart: Color(0xFFFAFAF9), bgEnd: Color(0xFFF5F5F4), accent: Color(0xFF1E40AF), textPrimary: Color(0xFF0C0A09), textSecondary: Color(0xFF57534E)),
  // Creative (+5)
  NgmyBusinessCardTemplate(id: 'crea_mesh_sunset', name: 'Sunset Mesh', category: 'creative', renderStyle: 'gradient_mesh', bgStart: Color(0xFF7C2D12), bgEnd: Color(0xFFDB2777), accent: Color(0xFFF59E0B), textPrimary: Colors.white, textSecondary: Color(0xFFFFEDD5)),
  NgmyBusinessCardTemplate(id: 'crea_mesh_aurora', name: 'Aurora Mesh', category: 'creative', renderStyle: 'gradient_mesh', bgStart: Color(0xFF042F2E), bgEnd: Color(0xFF6D28D9), accent: Color(0xFF2DD4BF), textPrimary: Colors.white, textSecondary: Color(0xFFCCFBF1)),
  NgmyBusinessCardTemplate(id: 'crea_slash_pop', name: 'Pop Slash', category: 'creative', renderStyle: 'diagonal_slash', bgStart: Color(0xFFFEF9C3), bgEnd: Color(0xFFFEF08A), accent: Color(0xFF7C3AED), textPrimary: Color(0xFF1E1B4B), textSecondary: Color(0xFF4338CA)),
  NgmyBusinessCardTemplate(id: 'crea_qr_studio', name: 'Studio QR', category: 'creative', renderStyle: 'qr_corner', bgStart: Color(0xFF18181B), bgEnd: Color(0xFF27272A), accent: Color(0xFFF472B6), textPrimary: Colors.white, textSecondary: Color(0xFFD4D4D8)),
  NgmyBusinessCardTemplate(id: 'crea_rail_coral', name: 'Coral Rail', category: 'creative', renderStyle: 'sidebar_icons', bgStart: Color(0xFFFFF7ED), bgEnd: Color(0xFFFFEDD5), accent: Color(0xFFF97316), textPrimary: Color(0xFF431407), textSecondary: Color(0xFF9A3412)),
  // Minimal (+5)
  NgmyBusinessCardTemplate(id: 'min_frame_paper', name: 'Paper Frame', category: 'minimal', renderStyle: 'line_art', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF0F172A), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF64748B)),
  NgmyBusinessCardTemplate(id: 'min_frame_night', name: 'Night Frame', category: 'minimal', renderStyle: 'line_art', bgStart: Color(0xFF0A0A0A), bgEnd: Color(0xFF0A0A0A), accent: Color(0xFFE5E5E5), textPrimary: Colors.white, textSecondary: Color(0xFFA3A3A3)),
  NgmyBusinessCardTemplate(id: 'min_split_sand', name: 'Sand Split', category: 'minimal', renderStyle: 'split_horizontal', bgStart: Color(0xFFE7E5E4), bgEnd: Color(0xFFFAFAF9), accent: Color(0xFF44403C), textPrimary: Color(0xFF1C1917), textSecondary: Color(0xFF57534E)),
  NgmyBusinessCardTemplate(id: 'min_crest_white', name: 'White Crest', category: 'minimal', renderStyle: 'center_crest', bgStart: Color(0xFFF4F4F5), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF27272A), textPrimary: Color(0xFF09090B), textSecondary: Color(0xFF71717A)),
  NgmyBusinessCardTemplate(id: 'min_rail_mono', name: 'Mono Rail', category: 'minimal', renderStyle: 'sidebar_icons', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF111827), textPrimary: Color(0xFF111827), textSecondary: Color(0xFF6B7280)),
  // Luxury (+5)
  NgmyBusinessCardTemplate(id: 'lux_emboss_gold', name: 'Gold Emboss', category: 'luxury', renderStyle: 'luxe_emboss', bgStart: Color(0xFF050505), bgEnd: Color(0xFF1C1917), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 'lux_emboss_emerald', name: 'Emerald Emboss', category: 'luxury', renderStyle: 'luxe_emboss', bgStart: Color(0xFF022C22), bgEnd: Color(0xFF064E3B), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFECFDF5), textSecondary: Color(0xFFA7F3D0)),
  NgmyBusinessCardTemplate(id: 'lux_emboss_ivory', name: 'Ivory Emboss', category: 'luxury', renderStyle: 'luxe_emboss', bgStart: Color(0xFFF5F0E6), bgEnd: Color(0xFFFFFCF5), accent: Color(0xFF8B6B2E), textPrimary: Color(0xFF292524), textSecondary: Color(0xFF78716C)),
  NgmyBusinessCardTemplate(id: 'lux_crest_royal', name: 'Royal Crest', category: 'luxury', renderStyle: 'center_crest', bgStart: Color(0xFF1E1B4B), bgEnd: Color(0xFF312E81), accent: Color(0xFFD4AF37), textPrimary: Colors.white, textSecondary: Color(0xFFC7D2FE)),
  NgmyBusinessCardTemplate(id: 'lux_frame_onyx', name: 'Onyx Frame', category: 'luxury', renderStyle: 'line_art', bgStart: Color(0xFF0C0A09), bgEnd: Color(0xFF0C0A09), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  // Tech (+5)
  NgmyBusinessCardTemplate(id: 'tech_grid_synth', name: 'Synth Grid', category: 'tech', renderStyle: 'tech_grid_glow', bgStart: Color(0xFF0B0221), bgEnd: Color(0xFF2E1065), accent: Color(0xFFF0ABFC), textPrimary: Colors.white, textSecondary: Color(0xFFE9D5FF)),
  NgmyBusinessCardTemplate(id: 'tech_grid_cyan', name: 'Cyan Grid', category: 'tech', renderStyle: 'tech_grid_glow', bgStart: Color(0xFF020617), bgEnd: Color(0xFF0C4A6E), accent: Color(0xFF22D3EE), textPrimary: Colors.white, textSecondary: Color(0xFFA5F3FC)),
  NgmyBusinessCardTemplate(id: 'tech_qr_dev', name: 'Dev QR', category: 'tech', renderStyle: 'qr_corner', bgStart: Color(0xFF0D1117), bgEnd: Color(0xFF161B22), accent: Color(0xFF3FB950), textPrimary: Color(0xFFE6EDF3), textSecondary: Color(0xFF8B949E)),
  NgmyBusinessCardTemplate(id: 'tech_rail_carbon', name: 'Carbon Rail', category: 'tech', renderStyle: 'sidebar_icons', bgStart: Color(0xFF111827), bgEnd: Color(0xFF1F2937), accent: Color(0xFF6366F1), textPrimary: Colors.white, textSecondary: Color(0xFF9CA3AF)),
  NgmyBusinessCardTemplate(id: 'tech_slash_volt', name: 'Volt Slash', category: 'tech', renderStyle: 'diagonal_slash', bgStart: Color(0xFF0A0A0A), bgEnd: Color(0xFF171717), accent: Color(0xFFA3E635), textPrimary: Colors.white, textSecondary: Color(0xFFA3A3A3)),
  // Medical (+5)
  NgmyBusinessCardTemplate(id: 'med_cross_clinic', name: 'Clinic Pulse', category: 'medical', renderStyle: 'medical_cross', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFF0F9FF), accent: Color(0xFF0284C7), textPrimary: Color(0xFF0C4A6E), textSecondary: Color(0xFF0369A1)),
  NgmyBusinessCardTemplate(id: 'med_cross_care', name: 'Care Red', category: 'medical', renderStyle: 'medical_cross', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFFFF1F2), accent: Color(0xFFDC2626), textPrimary: Color(0xFF1F2937), textSecondary: Color(0xFF6B7280)),
  NgmyBusinessCardTemplate(id: 'med_cross_mint', name: 'Mint Pulse', category: 'medical', renderStyle: 'medical_cross', bgStart: Color(0xFFECFDF5), bgEnd: Color(0xFFD1FAE5), accent: Color(0xFF059669), textPrimary: Color(0xFF064E3B), textSecondary: Color(0xFF047857)),
  NgmyBusinessCardTemplate(id: 'med_rail_teal', name: 'Teal Rail', category: 'medical', renderStyle: 'sidebar_icons', bgStart: Color(0xFFF0FDFA), bgEnd: Color(0xFFCCFBF1), accent: Color(0xFF0D9488), textPrimary: Color(0xFF134E4A), textSecondary: Color(0xFF115E59)),
  NgmyBusinessCardTemplate(id: 'med_split_sky', name: 'Sky Split', category: 'medical', renderStyle: 'split_horizontal', bgStart: Color(0xFF0369A1), bgEnd: Color(0xFFF0F9FF), accent: Color(0xFF0EA5E9), textPrimary: Color(0xFF0C4A6E), textSecondary: Color(0xFF075985)),
  // Real estate (+5)
  NgmyBusinessCardTemplate(id: 're_skyline_dusk', name: 'Dusk Skyline', category: 'real_estate', renderStyle: 'skyline', bgStart: Color(0xFF1E1B4B), bgEnd: Color(0xFFF97316), accent: Color(0xFFFDE68A), textPrimary: Colors.white, textSecondary: Color(0xFFE0E7FF)),
  NgmyBusinessCardTemplate(id: 're_skyline_day', name: 'Day Skyline', category: 'real_estate', renderStyle: 'skyline', bgStart: Color(0xFFE0F2FE), bgEnd: Color(0xFFFFFFFF), accent: Color(0xFF1D4ED8), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF334155)),
  NgmyBusinessCardTemplate(id: 're_house_forest', name: 'Forest Home', category: 'real_estate', renderStyle: 're_forest_cabin', bgStart: Color(0xFFE0F2FE), bgEnd: Color(0xFFF0FDF4), accent: Color(0xFF166534), textPrimary: Color(0xFF14532D), textSecondary: Color(0xFF4B5563)),
  NgmyBusinessCardTemplate(id: 're_house_brick', name: 'Brick Home', category: 'real_estate', renderStyle: 're_brick_facade', bgStart: Color(0xFFFFFBF5), bgEnd: Color(0xFFFFF7ED), accent: Color(0xFFB45309), textPrimary: Color(0xFF431407), textSecondary: Color(0xFF78716C)),
  NgmyBusinessCardTemplate(id: 're_sign_red', name: 'For Sale Sign', category: 'real_estate', renderStyle: 're_yard_sign', bgStart: Color(0xFFBAE6FD), bgEnd: Color(0xFFF0F9FF), accent: Color(0xFFDC2626), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF334155)),
  NgmyBusinessCardTemplate(id: 're_sign_navy', name: 'Sold Stamp', category: 'real_estate', renderStyle: 're_sold_stamp', bgStart: Color(0xFF0B1F3A), bgEnd: Color(0xFF1E3A8A), accent: Color(0xFFFCA5A5), textPrimary: Colors.white, textSecondary: Color(0xFFCBD5E1)),
  NgmyBusinessCardTemplate(id: 're_sign_open_house', name: 'Open House Board', category: 'real_estate', renderStyle: 're_open_house', bgStart: Color(0xFFFEF3C7), bgEnd: Color(0xFFFFFBEB), accent: Color(0xFFEA580C), textPrimary: Color(0xFF1C1917), textSecondary: Color(0xFF57534E)),
  NgmyBusinessCardTemplate(id: 're_sign_just_listed', name: 'Just Listed', category: 'real_estate', renderStyle: 're_just_listed', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFFEFF6FF), accent: Color(0xFF0F766E), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 're_sign_neon_rent', name: 'Neon For Rent', category: 'real_estate', renderStyle: 're_neon_rent', bgStart: Color(0xFF0F0A1F), bgEnd: Color(0xFF1E1B4B), accent: Color(0xFFF472B6), textPrimary: Colors.white, textSecondary: Color(0xFFC4B5FD)),
  NgmyBusinessCardTemplate(id: 're_sign_marquee', name: 'Listing Billboard', category: 'real_estate', renderStyle: 're_marquee', bgStart: Color(0xFF7DD3FC), bgEnd: Color(0xFFE0F2FE), accent: Color(0xFFDC2626), textPrimary: Colors.white, textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 're_sign_door_hanger', name: 'Welcome Hanger', category: 'real_estate', renderStyle: 're_door_hanger', bgStart: Color(0xFFF5F3FF), bgEnd: Color(0xFFEDE9FE), accent: Color(0xFF6D28D9), textPrimary: Color(0xFF2E1065), textSecondary: Color(0xFF5B21B6)),
  NgmyBusinessCardTemplate(id: 're_key_gold', name: 'Golden Key', category: 'real_estate', renderStyle: 're_key_tag', bgStart: Color(0xFF0C0A09), bgEnd: Color(0xFF292524), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 're_key_emerald', name: 'Emerald Key', category: 'real_estate', renderStyle: 're_key_tag', bgStart: Color(0xFFF0FDF4), bgEnd: Color(0xFFDCFCE7), accent: Color(0xFF047857), textPrimary: Color(0xFF052E16), textSecondary: Color(0xFF166534)),
  NgmyBusinessCardTemplate(id: 're_window_sunrise', name: 'Sunrise Window', category: 'real_estate', renderStyle: 're_window', bgStart: Color(0xFFFFFBF5), bgEnd: Color(0xFFF97316), accent: Color(0xFF7C2D12), textPrimary: Color(0xFF431407), textSecondary: Color(0xFF78716C)),
  NgmyBusinessCardTemplate(id: 're_floor_navy', name: 'Floor Plan Navy', category: 'real_estate', renderStyle: 're_floor_plan', bgStart: Color(0xFF0B1F3A), bgEnd: Color(0xFF0B1F3A), accent: Color(0xFF93C5FD), textPrimary: Colors.white, textSecondary: Color(0xFFBFDBFE)),
  NgmyBusinessCardTemplate(id: 're_floor_paper', name: 'Floor Plan Paper', category: 'real_estate', renderStyle: 're_floor_plan', bgStart: Color(0xFFFAFAF9), bgEnd: Color(0xFFFAFAF9), accent: Color(0xFF1D4ED8), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 're_estate_gold', name: 'Grand Estate', category: 'real_estate', renderStyle: 're_estate', bgStart: Color(0xFF050505), bgEnd: Color(0xFF1C1917), accent: Color(0xFFD4AF37), textPrimary: Color(0xFFFAFAF9), textSecondary: Color(0xFFA8A29E)),
  NgmyBusinessCardTemplate(id: 're_map_teal', name: 'Local Expert Map', category: 'real_estate', renderStyle: 're_map_pin', bgStart: Color(0xFFFFFFFF), bgEnd: Color(0xFF115E59), accent: Color(0xFFF59E0B), textPrimary: Color(0xFF0F172A), textSecondary: Color(0xFF475569)),
  NgmyBusinessCardTemplate(id: 're_qr_listing', name: 'Listing QR', category: 'real_estate', renderStyle: 'qr_corner', bgStart: Color(0xFF0F172A), bgEnd: Color(0xFF1E293B), accent: Color(0xFFF59E0B), textPrimary: Colors.white, textSecondary: Color(0xFFCBD5E1)),
  // Freelance (+5)
  NgmyBusinessCardTemplate(id: 'free_qr_portfolio', name: 'Portfolio QR', category: 'freelance', renderStyle: 'qr_corner', bgStart: Color(0xFFFDF4FF), bgEnd: Color(0xFFFAE8FF), accent: Color(0xFFA21CAF), textPrimary: Color(0xFF4A044E), textSecondary: Color(0xFF86198F)),
  NgmyBusinessCardTemplate(id: 'free_mesh_peach', name: 'Peach Mesh', category: 'freelance', renderStyle: 'gradient_mesh', bgStart: Color(0xFFFECDD3), bgEnd: Color(0xFFFED7AA), accent: Color(0xFFF43F5E), textPrimary: Color(0xFF4C0519), textSecondary: Color(0xFF881337)),
  NgmyBusinessCardTemplate(id: 'free_rail_indigo', name: 'Indigo Rail', category: 'freelance', renderStyle: 'sidebar_icons', bgStart: Color(0xFFEEF2FF), bgEnd: Color(0xFFE0E7FF), accent: Color(0xFF4F46E5), textPrimary: Color(0xFF1E1B4B), textSecondary: Color(0xFF4338CA)),
  NgmyBusinessCardTemplate(id: 'free_slash_lime', name: 'Lime Slash', category: 'freelance', renderStyle: 'diagonal_slash', bgStart: Color(0xFF1A2E05), bgEnd: Color(0xFF365314), accent: Color(0xFFBEF264), textPrimary: Colors.white, textSecondary: Color(0xFFD9F99D)),
  NgmyBusinessCardTemplate(id: 'free_frame_terracotta', name: 'Terracotta Frame', category: 'freelance', renderStyle: 'line_art', bgStart: Color(0xFFFFF7ED), bgEnd: Color(0xFFFFF7ED), accent: Color(0xFFC2410C), textPrimary: Color(0xFF431407), textSecondary: Color(0xFF9A3412)),
];

NgmyBusinessCardTemplate ngmyBusinessCardTemplateById(String id) {
  return kNgmyBusinessCardTemplates.firstWhere(
    (t) => t.id == id,
    orElse: () => kNgmyBusinessCardTemplates.first,
  );
}

List<NgmyBusinessCardTemplate> ngmyBusinessCardTemplatesForCategory(
  String category, {
  bool includeAdmin = false,
}) {
  Iterable<NgmyBusinessCardTemplate> base = kNgmyBusinessCardTemplates;
  if (!includeAdmin) {
    base = base.where((t) => t.category != 'admin');
  }
  if (category.isEmpty || category == 'all') return base.toList();
  return base.where((t) => t.category == category).toList();
}

class NgmyBusinessCardDocument {
  NgmyBusinessCardDocument({
    String? id,
    this.templateId = 'glass_frost',
    this.fullName = 'KB PABLO QR',
    this.jobTitle = 'Senior Consultant',
    this.company = 'NGMY Services',
    this.phone = '(555) 123-4567',
    this.email = 'kbpablo@ngmy.org',
    this.website = 'www.ngmy.org',
    this.address = '123 Main St, City, ST',
    this.tagline = 'Building what matters',
    this.accentColor,
    this.backgroundColor,
    this.backgroundEndColor,
    this.textColor,
    this.borderColor,
    this.fontScale = 1.0,
    this.boldText = false,
    this.cardEmoji = '',
    this.logoRingStyle = 'none',
    Map<String, double>? offsetX,
    Map<String, double>? offsetY,
    Map<String, double>? elementScale,
    Map<String, bool>? hidden,
    this.logoBase64 = '',
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        offsetX = offsetX ?? {},
        offsetY = offsetY ?? {},
        elementScale = elementScale ?? {},
        hidden = hidden ?? {},
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  final String id;
  String templateId;
  String fullName;
  String jobTitle;
  String company;
  String phone;
  String email;
  String website;
  String address;
  String tagline;
  Color? accentColor;
  Color? backgroundColor;
  Color? backgroundEndColor;
  Color? textColor;
  Color? borderColor;
  double fontScale;
  bool boldText;
  String cardEmoji;
  /// Logo frame ring: none | thin | double | gold | neon | soft
  String logoRingStyle;
  final Map<String, double> offsetX;
  final Map<String, double> offsetY;
  final Map<String, double> elementScale;
  final Map<String, bool> hidden;
  String logoBase64;
  DateTime createdAt;
  DateTime updatedAt;

  NgmyBusinessCardTemplate get template => ngmyBusinessCardTemplateById(templateId);

  Color get effectiveAccent => accentColor ?? template.accent;
  Color get effectiveText => textColor ?? template.textPrimary;
  Color get effectiveSubtext => template.textSecondary;
  Color get effectiveBgEnd => backgroundEndColor ?? template.bgEnd;

  Uint8List? get logoBytes {
    var raw = logoBase64.trim();
    if (raw.isEmpty) return null;
    // Support data-URL form: data:image/png;base64,AAAA...
    final comma = raw.indexOf(',');
    if (raw.startsWith('data:') && comma > 0) {
      raw = raw.substring(comma + 1);
    }
    try {
      final bytes = base64Decode(raw);
      if (bytes.isEmpty) return null;
      return bytes;
    } catch (_) {
      return null;
    }
  }

  void touch() => updatedAt = DateTime.now();

  Map<String, dynamic> toJson() => {
        'id': id,
        'templateId': templateId,
        'fullName': fullName,
        'jobTitle': jobTitle,
        'company': company,
        'phone': phone,
        'email': email,
        'website': website,
        'address': address,
        'tagline': tagline,
        if (accentColor != null) 'accentColor': accentColor!.toARGB32(),
        if (backgroundColor != null) 'backgroundColor': backgroundColor!.toARGB32(),
        if (backgroundEndColor != null) 'backgroundEndColor': backgroundEndColor!.toARGB32(),
        if (textColor != null) 'textColor': textColor!.toARGB32(),
        if (borderColor != null) 'borderColor': borderColor!.toARGB32(),
        'fontScale': fontScale,
        'boldText': boldText,
        'cardEmoji': cardEmoji,
        'logoRingStyle': logoRingStyle,
        'offsetX': offsetX,
        'offsetY': offsetY,
        'elementScale': elementScale,
        'hidden': hidden,
        'logoBase64': logoBase64,
        'createdAt': createdAt.toIso8601String(),
        'updatedAt': updatedAt.toIso8601String(),
      };

  factory NgmyBusinessCardDocument.fromJson(Map<String, dynamic> json) {
    Color? colorFrom(dynamic v) {
      if (v is int) return Color(v);
      if (v is num) return Color(v.toInt());
      return null;
    }

    Map<String, double> mapDouble(dynamic raw) {
      if (raw is! Map) return {};
      return raw.map((k, v) => MapEntry(k.toString(), (v is num ? v.toDouble() : double.tryParse('$v') ?? 0)));
    }

    Map<String, bool> mapBool(dynamic raw) {
      if (raw is! Map) return {};
      return raw.map((k, v) => MapEntry(k.toString(), v == true));
    }

    return NgmyBusinessCardDocument(
      id: (json['id'] ?? '').toString(),
      templateId: (json['templateId'] ?? 'glass_frost').toString(),
      fullName: (json['fullName'] ?? '').toString(),
      jobTitle: (json['jobTitle'] ?? '').toString(),
      company: (json['company'] ?? '').toString(),
      phone: (json['phone'] ?? '').toString(),
      email: (json['email'] ?? '').toString(),
      website: (json['website'] ?? '').toString(),
      address: (json['address'] ?? '').toString(),
      tagline: (json['tagline'] ?? '').toString(),
      accentColor: colorFrom(json['accentColor']),
      backgroundColor: colorFrom(json['backgroundColor']),
      backgroundEndColor: colorFrom(json['backgroundEndColor']),
      textColor: colorFrom(json['textColor']),
      borderColor: colorFrom(json['borderColor']),
      fontScale: (json['fontScale'] is num) ? (json['fontScale'] as num).toDouble() : double.tryParse('${json['fontScale']}') ?? 1.0,
      boldText: json['boldText'] == true,
      cardEmoji: (json['cardEmoji'] ?? '').toString(),
      logoRingStyle: (json['logoRingStyle'] ?? 'none').toString(),
      offsetX: mapDouble(json['offsetX']),
      offsetY: mapDouble(json['offsetY']),
      elementScale: mapDouble(json['elementScale']),
      hidden: mapBool(json['hidden']),
      logoBase64: (json['logoBase64'] ?? '').toString(),
      createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
    );
  }

  NgmyBusinessCardDocument copy() => NgmyBusinessCardDocument.fromJson(toJson());
}

Offset ngmyCardElementOffset(NgmyBusinessCardDocument doc, String elementId) {
  return Offset(doc.offsetX[elementId] ?? 0, doc.offsetY[elementId] ?? 0);
}

void ngmyCardSetElementOffset(NgmyBusinessCardDocument doc, String elementId, Offset delta) {
  doc.offsetX[elementId] = delta.dx;
  doc.offsetY[elementId] = delta.dy;
  doc.touch();
}

double ngmyCardElementScale(NgmyBusinessCardDocument doc, String elementId) {
  return doc.elementScale[elementId] ?? 1.0;
}

void ngmyCardSetElementScale(NgmyBusinessCardDocument doc, String elementId, double scale) {
  doc.elementScale[elementId] = scale.clamp(0.5, 2.5);
  doc.touch();
}

void ngmyCardNudgeElementScale(NgmyBusinessCardDocument doc, String elementId, double delta) {
  ngmyCardSetElementScale(doc, elementId, ngmyCardElementScale(doc, elementId) + delta);
}

bool ngmyCardElementVisible(NgmyBusinessCardDocument doc, String elementId) {
  return doc.hidden[elementId] != true;
}

void ngmyCardResetLayout(NgmyBusinessCardDocument doc) {
  doc.offsetX.clear();
  doc.offsetY.clear();
  doc.elementScale.clear();
  doc.touch();
}

String ngmyCardElementLabel(String elementId) {
  return switch (elementId) {
    'name' => 'Name',
    'title' => 'Job title',
    'company' => 'Company',
    'phone' => 'Phone',
    'email' => 'Email',
    'website' => 'Website',
    'address' => 'Address',
    'tagline' => 'Tagline',
    'logo' => 'Logo',
    'card_emoji' => 'Emoji',
    'emoji' => 'Emoji',
    _ => elementId,
  };
}
