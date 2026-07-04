import 'package:flutter/material.dart';

class NgmyMenuTemplate {
  const NgmyMenuTemplate({
    required this.id,
    required this.name,
    required this.category,
    required this.bgStart,
    required this.bgEnd,
    required this.accent,
    required this.textPrimary,
    required this.textSecondary,
    required this.cardBg,
    this.headerStyle = 'center',
  });

  final String id;
  final String name;
  final String category;
  final Color bgStart;
  final Color bgEnd;
  final Color accent;
  final Color textPrimary;
  final Color textSecondary;
  final Color cardBg;
  final String headerStyle;
}

const List<NgmyMenuTemplate> kNgmyMenuTemplates = [
  NgmyMenuTemplate(
    id: 'gold_luxe',
    name: 'Gold Luxe',
    category: 'luxury',
    bgStart: Color(0xFF0A0A0A),
    bgEnd: Color(0xFF1A1410),
    accent: Color(0xFFD4AF37),
    textPrimary: Color(0xFFFFFAF0),
    textSecondary: Color(0xFFC4B59A),
    cardBg: Color(0xFF141210),
    headerStyle: 'ornate',
  ),
  NgmyMenuTemplate(
    id: 'royal_marble',
    name: 'Royal Marble',
    category: 'luxury',
    bgStart: Color(0xFF1C1917),
    bgEnd: Color(0xFF292524),
    accent: Color(0xFFE7E5E4),
    textPrimary: Color(0xFFFAFAF9),
    textSecondary: Color(0xFFA8A29E),
    cardBg: Color(0xFF1F1C1A),
    headerStyle: 'serif',
  ),
  NgmyMenuTemplate(
    id: 'bistro_warm',
    name: 'Bistro Warm',
    category: 'classic',
    bgStart: Color(0xFF292018),
    bgEnd: Color(0xFF3D2E1F),
    accent: Color(0xFFE8A87C),
    textPrimary: Color(0xFFFFF7ED),
    textSecondary: Color(0xFFD6C4B0),
    cardBg: Color(0xFF352820),
  ),
  NgmyMenuTemplate(
    id: 'modern_minimal',
    name: 'Modern Minimal',
    category: 'modern',
    bgStart: Color(0xFFF8FAFC),
    bgEnd: Color(0xFFE2E8F0),
    accent: Color(0xFF0F172A),
    textPrimary: Color(0xFF0F172A),
    textSecondary: Color(0xFF64748B),
    cardBg: Color(0xFFFFFFFF),
  ),
  NgmyMenuTemplate(
    id: 'neon_night',
    name: 'Neon Night',
    category: 'modern',
    bgStart: Color(0xFF0B0F1A),
    bgEnd: Color(0xFF1A0B2E),
    accent: Color(0xFF22D3EE),
    textPrimary: Color(0xFFF0FDFF),
    textSecondary: Color(0xFF94A3B8),
    cardBg: Color(0xFF111827),
  ),
  NgmyMenuTemplate(
    id: 'garden_fresh',
    name: 'Garden Fresh',
    category: 'organic',
    bgStart: Color(0xFF14532D),
    bgEnd: Color(0xFF166534),
    accent: Color(0xFF86EFAC),
    textPrimary: Color(0xFFF0FDF4),
    textSecondary: Color(0xFFBBF7D0),
    cardBg: Color(0xFF15803D),
  ),
  NgmyMenuTemplate(
    id: 'cafe_latte',
    name: 'Café Latte',
    category: 'classic',
    bgStart: Color(0xFF3E2723),
    bgEnd: Color(0xFF5D4037),
    accent: Color(0xFFD7CCC8),
    textPrimary: Color(0xFFFFF8E1),
    textSecondary: Color(0xFFD7CCC8),
    cardBg: Color(0xFF4E342E),
  ),
  NgmyMenuTemplate(
    id: 'street_bold',
    name: 'Street Bold',
    category: 'casual',
    bgStart: Color(0xFF7F1D1D),
    bgEnd: Color(0xFF991B1B),
    accent: Color(0xFFFBBF24),
    textPrimary: Color(0xFFFFF7ED),
    textSecondary: Color(0xFFFECACA),
    cardBg: Color(0xFF9A1B1B),
  ),
  NgmyMenuTemplate(
    id: 'sushi_zen',
    name: 'Sushi Zen',
    category: 'luxury',
    bgStart: Color(0xFF0C0A09),
    bgEnd: Color(0xFF1C1917),
    accent: Color(0xFFEF4444),
    textPrimary: Color(0xFFFAFAF9),
    textSecondary: Color(0xFFA8A29E),
    cardBg: Color(0xFF171412),
    headerStyle: 'minimal',
  ),
  NgmyMenuTemplate(
    id: 'pastel_sweet',
    name: 'Pastel Sweet',
    category: 'casual',
    bgStart: Color(0xFFFDF2F8),
    bgEnd: Color(0xFFFCE7F3),
    accent: Color(0xFFDB2777),
    textPrimary: Color(0xFF831843),
    textSecondary: Color(0xFF9D174D),
    cardBg: Color(0xFFFFFFFF),
  ),
];

NgmyMenuTemplate ngmyMenuTemplateById(String id) {
  return kNgmyMenuTemplates.firstWhere((t) => t.id == id, orElse: () => kNgmyMenuTemplates.first);
}

List<NgmyMenuTemplate> ngmyMenuTemplatesForCategory(String category) {
  if (category == 'all') return kNgmyMenuTemplates;
  return kNgmyMenuTemplates.where((t) => t.category == category).toList();
}
