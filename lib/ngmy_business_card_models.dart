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
];

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
];

NgmyBusinessCardTemplate ngmyBusinessCardTemplateById(String id) {
  return kNgmyBusinessCardTemplates.firstWhere(
    (t) => t.id == id,
    orElse: () => kNgmyBusinessCardTemplates.first,
  );
}

List<NgmyBusinessCardTemplate> ngmyBusinessCardTemplatesForCategory(String category) {
  if (category.isEmpty || category == 'all') return kNgmyBusinessCardTemplates;
  return kNgmyBusinessCardTemplates.where((t) => t.category == category).toList();
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
