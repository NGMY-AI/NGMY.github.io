import 'package:flutter/material.dart';

/// Visual layout for rendered menu pages.
enum NgmyMenuLayoutStyle {
  ornateDots,
  fineDining,
  modernCards,
  minimalLine,
  bistroWarm,
  artDeco,
}

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
    required this.layout,
    this.headerStyle = 'center',
    this.subtitle = '',
  });

  final String id;
  final String name;
  final String category;
  final String subtitle;
  final Color bgStart;
  final Color bgEnd;
  final Color accent;
  final Color textPrimary;
  final Color textSecondary;
  final Color cardBg;
  final NgmyMenuLayoutStyle layout;
  final String headerStyle;
}

const List<NgmyMenuTemplate> kNgmyMenuTemplates = [
  NgmyMenuTemplate(
    id: 'midnight_gold',
    name: 'Midnight Gold',
    category: 'Luxury',
    subtitle: 'Black velvet · gold foil',
    bgStart: Color(0xFF050505),
    bgEnd: Color(0xFF14100A),
    accent: Color(0xFFD4AF37),
    textPrimary: Color(0xFFFFF8E7),
    textSecondary: Color(0xFFC9B896),
    cardBg: Color(0xFF0C0A08),
    layout: NgmyMenuLayoutStyle.ornateDots,
    headerStyle: 'ornate',
  ),
  NgmyMenuTemplate(
    id: 'marble_elegance',
    name: 'Marble Elegance',
    category: 'Luxury',
    subtitle: 'Cream marble · serif',
    bgStart: Color(0xFFF5F0EB),
    bgEnd: Color(0xFFE8E0D8),
    accent: Color(0xFF8B7355),
    textPrimary: Color(0xFF2C2419),
    textSecondary: Color(0xFF6B5D4F),
    cardBg: Color(0xFFFFFBF7),
    layout: NgmyMenuLayoutStyle.fineDining,
    headerStyle: 'serif',
  ),
  NgmyMenuTemplate(
    id: 'champagne_night',
    name: 'Champagne Night',
    category: 'Luxury',
    subtitle: 'Celebration · sparkle',
    bgStart: Color(0xFF1A1520),
    bgEnd: Color(0xFF2D2438),
    accent: Color(0xFFE8C4A0),
    textPrimary: Color(0xFFFFF5EB),
    textSecondary: Color(0xFFD4C4B0),
    cardBg: Color(0xFF221C2A),
    layout: NgmyMenuLayoutStyle.artDeco,
    headerStyle: 'ornate',
  ),
  NgmyMenuTemplate(
    id: 'steakhouse_prime',
    name: 'Steakhouse Prime',
    category: 'Fine dining',
    subtitle: 'Bold · leather dark',
    bgStart: Color(0xFF1C1210),
    bgEnd: Color(0xFF2A1814),
    accent: Color(0xFFC9A227),
    textPrimary: Color(0xFFF5EDE4),
    textSecondary: Color(0xFFB8A090),
    cardBg: Color(0xFF241816),
    layout: NgmyMenuLayoutStyle.fineDining,
    headerStyle: 'serif',
  ),
  NgmyMenuTemplate(
    id: 'sakura_zen',
    name: 'Sakura Zen',
    category: 'Fine dining',
    subtitle: 'Japanese minimal',
    bgStart: Color(0xFF0F0E0E),
    bgEnd: Color(0xFF1A1818),
    accent: Color(0xFFDC2626),
    textPrimary: Color(0xFFFAFAF9),
    textSecondary: Color(0xFFA8A29E),
    cardBg: Color(0xFF161414),
    layout: NgmyMenuLayoutStyle.minimalLine,
    headerStyle: 'minimal',
  ),
  NgmyMenuTemplate(
    id: 'rooftop_sky',
    name: 'Rooftop Sky',
    category: 'Modern',
    subtitle: 'Gradient · skyline',
    bgStart: Color(0xFF0F172A),
    bgEnd: Color(0xFF1E3A5F),
    accent: Color(0xFF38BDF8),
    textPrimary: Color(0xFFF0F9FF),
    textSecondary: Color(0xFF94A3B8),
    cardBg: Color(0xFF152238),
    layout: NgmyMenuLayoutStyle.modernCards,
  ),
  NgmyMenuTemplate(
    id: 'trattoria_roma',
    name: 'Trattoria Roma',
    category: 'Classic',
    subtitle: 'Warm Italian',
    bgStart: Color(0xFF3D2314),
    bgEnd: Color(0xFF5C3318),
    accent: Color(0xFFF4A460),
    textPrimary: Color(0xFFFFF8F0),
    textSecondary: Color(0xFFE8D4C0),
    cardBg: Color(0xFF4A2E1C),
    layout: NgmyMenuLayoutStyle.bistroWarm,
  ),
  NgmyMenuTemplate(
    id: 'ocean_grill',
    name: 'Ocean Grill',
    category: 'Modern',
    subtitle: 'Coastal · fresh',
    bgStart: Color(0xFF042F2E),
    bgEnd: Color(0xFF0F4C5C),
    accent: Color(0xFF5EEAD4),
    textPrimary: Color(0xFFECFEFF),
    textSecondary: Color(0xFF99F6E4),
    cardBg: Color(0xFF0A3D3C),
    layout: NgmyMenuLayoutStyle.modernCards,
  ),
  NgmyMenuTemplate(
    id: 'botanical_garden',
    name: 'Botanical Garden',
    category: 'Organic',
    subtitle: 'Garden café',
    bgStart: Color(0xFF14532D),
    bgEnd: Color(0xFF166534),
    accent: Color(0xFFBBF7D0),
    textPrimary: Color(0xFFF0FDF4),
    textSecondary: Color(0xFF86EFAC),
    cardBg: Color(0xFF15803D),
    layout: NgmyMenuLayoutStyle.bistroWarm,
  ),
  NgmyMenuTemplate(
    id: 'ivory_minimal',
    name: 'Ivory Minimal',
    category: 'Modern',
    subtitle: 'Clean · editorial',
    bgStart: Color(0xFFFAFAFA),
    bgEnd: Color(0xFFF4F4F5),
    accent: Color(0xFF18181B),
    textPrimary: Color(0xFF18181B),
    textSecondary: Color(0xFF71717A),
    cardBg: Color(0xFFFFFFFF),
    layout: NgmyMenuLayoutStyle.minimalLine,
    headerStyle: 'minimal',
  ),
];

NgmyMenuTemplate ngmyMenuTemplateById(String id) {
  return kNgmyMenuTemplates.firstWhere(
    (t) => t.id == id,
    orElse: () => kNgmyMenuTemplates.first,
  );
}

List<NgmyMenuTemplate> ngmyMenuTemplatesForCategory(String category) {
  if (category == 'all') return kNgmyMenuTemplates;
  return kNgmyMenuTemplates.where((t) => t.category.toLowerCase() == category.toLowerCase()).toList();
}

const List<Map<String, String>> kNgmyMenuQrCardTemplates = [
  {'id': 'luxury', 'label': 'Luxury Gold'},
  {'id': 'modern', 'label': 'Modern Gradient'},
  {'id': 'classic', 'label': 'Classic Border'},
  {'id': 'minimal', 'label': 'Minimal Clean'},
];
