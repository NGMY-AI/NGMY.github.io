import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

/// Standard US business card ratio (3.5" × 2").
const double kNgmyBusinessCardAspect = 3.5 / 2.0;

enum NgmyCardLayoutStyle {
  classicLeft,
  centerElegant,
  splitDiagonal,
  topBand,
  sideStripe,
  minimalLine,
  boldFooter,
  dualHorizontal,
  cornerLogo,
  luxuryDark,
}

class NgmyBusinessCardTemplate {
  const NgmyBusinessCardTemplate({
    required this.id,
    required this.name,
    required this.category,
    required this.layout,
    required this.bgStart,
    required this.bgEnd,
    required this.accent,
    required this.textPrimary,
    required this.textSecondary,
    this.accentBar = false,
    this.showLogo = true,
    this.fontWeight = FontWeight.w700,
  });

  final String id;
  final String name;
  final String category;
  final NgmyCardLayoutStyle layout;
  final Color bgStart;
  final Color bgEnd;
  final Color accent;
  final Color textPrimary;
  final Color textSecondary;
  final bool accentBar;
  final bool showLogo;
  final FontWeight fontWeight;
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
  NgmyBusinessCardTemplate(
    id: 'corp_executive',
    name: 'Executive Navy',
    category: 'corporate',
    layout: NgmyCardLayoutStyle.classicLeft,
    bgStart: Color(0xFF0F172A),
    bgEnd: Color(0xFF1E293B),
    accent: Color(0xFF3B82F6),
    textPrimary: Colors.white,
    textSecondary: Color(0xFF94A3B8),
    accentBar: true,
  ),
  NgmyBusinessCardTemplate(
    id: 'corp_stripe',
    name: 'Blue Stripe',
    category: 'corporate',
    layout: NgmyCardLayoutStyle.sideStripe,
    bgStart: Color(0xFFFFFFFF),
    bgEnd: Color(0xFFF8FAFC),
    accent: Color(0xFF2563EB),
    textPrimary: Color(0xFF0F172A),
    textSecondary: Color(0xFF64748B),
  ),
  NgmyBusinessCardTemplate(
    id: 'corp_slate',
    name: 'Slate Pro',
    category: 'corporate',
    layout: NgmyCardLayoutStyle.topBand,
    bgStart: Color(0xFF334155),
    bgEnd: Color(0xFF475569),
    accent: Color(0xFF38BDF8),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFCBD5E1),
  ),
  NgmyBusinessCardTemplate(
    id: 'creative_gradient',
    name: 'Gradient Pop',
    category: 'creative',
    layout: NgmyCardLayoutStyle.splitDiagonal,
    bgStart: Color(0xFFDB2777),
    bgEnd: Color(0xFF7C3AED),
    accent: Color(0xFFFDE047),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFFCE7F3),
  ),
  NgmyBusinessCardTemplate(
    id: 'creative_sunset',
    name: 'Sunset Split',
    category: 'creative',
    layout: NgmyCardLayoutStyle.dualHorizontal,
    bgStart: Color(0xFFF97316),
    bgEnd: Color(0xFFEC4899),
    accent: Color(0xFF1E1B4B),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFFFF7ED),
  ),
  NgmyBusinessCardTemplate(
    id: 'creative_mint',
    name: 'Mint Block',
    category: 'creative',
    layout: NgmyCardLayoutStyle.boldFooter,
    bgStart: Color(0xFFECFDF5),
    bgEnd: Color(0xFFD1FAE5),
    accent: Color(0xFF059669),
    textPrimary: Color(0xFF064E3B),
    textSecondary: Color(0xFF047857),
  ),
  NgmyBusinessCardTemplate(
    id: 'minimal_white',
    name: 'Pure White',
    category: 'minimal',
    layout: NgmyCardLayoutStyle.minimalLine,
    bgStart: Color(0xFFFFFFFF),
    bgEnd: Color(0xFFFAFAFA),
    accent: Color(0xFF18181B),
    textPrimary: Color(0xFF18181B),
    textSecondary: Color(0xFF71717A),
  ),
  NgmyBusinessCardTemplate(
    id: 'minimal_ink',
    name: 'Ink Mono',
    category: 'minimal',
    layout: NgmyCardLayoutStyle.centerElegant,
    bgStart: Color(0xFFFAFAFA),
    bgEnd: Color(0xFFF4F4F5),
    accent: Color(0xFF27272A),
    textPrimary: Color(0xFF09090B),
    textSecondary: Color(0xFF52525B),
  ),
  NgmyBusinessCardTemplate(
    id: 'minimal_thin',
    name: 'Thin Line',
    category: 'minimal',
    layout: NgmyCardLayoutStyle.classicLeft,
    bgStart: Color(0xFFFFFFFF),
    bgEnd: Color(0xFFFFFFFF),
    accent: Color(0xFFA1A1AA),
    textPrimary: Color(0xFF27272A),
    textSecondary: Color(0xFF71717A),
    accentBar: true,
  ),
  NgmyBusinessCardTemplate(
    id: 'luxury_gold',
    name: 'Gold Noir',
    category: 'luxury',
    layout: NgmyCardLayoutStyle.luxuryDark,
    bgStart: Color(0xFF0A0A0A),
    bgEnd: Color(0xFF171717),
    accent: Color(0xFFD4AF37),
    textPrimary: Color(0xFFF5F5F4),
    textSecondary: Color(0xFFA8A29E),
  ),
  NgmyBusinessCardTemplate(
    id: 'luxury_marble',
    name: 'Marble Elite',
    category: 'luxury',
    layout: NgmyCardLayoutStyle.centerElegant,
    bgStart: Color(0xFF1C1917),
    bgEnd: Color(0xFF44403C),
    accent: Color(0xFFE7E5E4),
    textPrimary: Color(0xFFFAFAF9),
    textSecondary: Color(0xFFD6D3D1),
  ),
  NgmyBusinessCardTemplate(
    id: 'tech_neon',
    name: 'Neon Dark',
    category: 'tech',
    layout: NgmyCardLayoutStyle.splitDiagonal,
    bgStart: Color(0xFF020617),
    bgEnd: Color(0xFF0F172A),
    accent: Color(0xFF22D3EE),
    textPrimary: Color(0xFFF0FDFA),
    textSecondary: Color(0xFF67E8F9),
  ),
  NgmyBusinessCardTemplate(
    id: 'tech_startup',
    name: 'Startup Clean',
    category: 'tech',
    layout: NgmyCardLayoutStyle.cornerLogo,
    bgStart: Color(0xFFF0F9FF),
    bgEnd: Color(0xFFE0F2FE),
    accent: Color(0xFF0284C7),
    textPrimary: Color(0xFF0C4A6E),
    textSecondary: Color(0xFF0369A1),
  ),
  NgmyBusinessCardTemplate(
    id: 'medical_calm',
    name: 'Calm Care',
    category: 'medical',
    layout: NgmyCardLayoutStyle.topBand,
    bgStart: Color(0xFFECFEFF),
    bgEnd: Color(0xFFCFFAFE),
    accent: Color(0xFF0891B2),
    textPrimary: Color(0xFF164E63),
    textSecondary: Color(0xFF155E75),
  ),
  NgmyBusinessCardTemplate(
    id: 'medical_trust',
    name: 'Trust Teal',
    category: 'medical',
    layout: NgmyCardLayoutStyle.sideStripe,
    bgStart: Color(0xFFFFFFFF),
    bgEnd: Color(0xFFF0FDFA),
    accent: Color(0xFF0D9488),
    textPrimary: Color(0xFF134E4A),
    textSecondary: Color(0xFF115E59),
  ),
  NgmyBusinessCardTemplate(
    id: 'realestate_prestige',
    name: 'Prestige Gold',
    category: 'real_estate',
    layout: NgmyCardLayoutStyle.boldFooter,
    bgStart: Color(0xFF1E293B),
    bgEnd: Color(0xFF334155),
    accent: Color(0xFFFBBF24),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFCBD5E1),
  ),
  NgmyBusinessCardTemplate(
    id: 'realestate_modern',
    name: 'Modern Agent',
    category: 'real_estate',
    layout: NgmyCardLayoutStyle.classicLeft,
    bgStart: Color(0xFFFFFFFF),
    bgEnd: Color(0xFFF1F5F9),
    accent: Color(0xFF0F766E),
    textPrimary: Color(0xFF0F172A),
    textSecondary: Color(0xFF475569),
    accentBar: true,
  ),
  NgmyBusinessCardTemplate(
    id: 'freelance_personal',
    name: 'Personal Brand',
    category: 'freelance',
    layout: NgmyCardLayoutStyle.centerElegant,
    bgStart: Color(0xFFFAE8FF),
    bgEnd: Color(0xFFF3E8FF),
    accent: Color(0xFF9333EA),
    textPrimary: Color(0xFF581C87),
    textSecondary: Color(0xFF7E22CE),
  ),
  NgmyBusinessCardTemplate(
    id: 'freelance_bold',
    name: 'Bold Creator',
    category: 'freelance',
    layout: NgmyCardLayoutStyle.dualHorizontal,
    bgStart: Color(0xFF18181B),
    bgEnd: Color(0xFF27272A),
    accent: Color(0xFFF97316),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFD4D4D8),
  ),
  NgmyBusinessCardTemplate(
    id: 'creative_ocean',
    name: 'Ocean Wave',
    category: 'creative',
    layout: NgmyCardLayoutStyle.cornerLogo,
    bgStart: Color(0xFF1D4ED8),
    bgEnd: Color(0xFF0EA5E9),
    accent: Color(0xFFFFFFFF),
    textPrimary: Colors.white,
    textSecondary: Color(0xFFE0F2FE),
  ),
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
    this.templateId = 'corp_executive',
    this.fullName = 'Alex Morgan',
    this.jobTitle = 'Senior Consultant',
    this.company = 'NGMY Services',
    this.phone = '(555) 123-4567',
    this.email = 'alex@ngmy.org',
    this.website = 'www.ngmy.org',
    this.address = '123 Main St, City, ST',
    this.tagline = 'Building what matters',
    this.accentColor,
    this.backgroundColor,
    this.textColor,
    Map<String, double>? offsetX,
    Map<String, double>? offsetY,
    Map<String, bool>? hidden,
    this.logoBase64 = '',
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        offsetX = offsetX ?? {},
        offsetY = offsetY ?? {},
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
  Color? textColor;
  final Map<String, double> offsetX;
  final Map<String, double> offsetY;
  final Map<String, bool> hidden;
  String logoBase64;
  DateTime createdAt;
  DateTime updatedAt;

  NgmyBusinessCardTemplate get template => ngmyBusinessCardTemplateById(templateId);

  Color get effectiveAccent => accentColor ?? template.accent;
  Color get effectiveText => textColor ?? template.textPrimary;
  Color get effectiveSubtext => template.textSecondary;

  Uint8List? get logoBytes {
    if (logoBase64.isEmpty) return null;
    try {
      return base64Decode(logoBase64);
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
        if (textColor != null) 'textColor': textColor!.toARGB32(),
        'offsetX': offsetX,
        'offsetY': offsetY,
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
      templateId: (json['templateId'] ?? 'corp_executive').toString(),
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
      textColor: colorFrom(json['textColor']),
      offsetX: mapDouble(json['offsetX']),
      offsetY: mapDouble(json['offsetY']),
      hidden: mapBool(json['hidden']),
      logoBase64: (json['logoBase64'] ?? '').toString(),
      createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
    );
  }

  NgmyBusinessCardDocument copy() => NgmyBusinessCardDocument.fromJson(toJson());
}

const List<String> kNgmyCardElementIds = [
  'logo',
  'name',
  'title',
  'company',
  'phone',
  'email',
  'website',
  'address',
  'tagline',
];

Offset ngmyCardElementOffset(NgmyBusinessCardDocument doc, String elementId) {
  return Offset(doc.offsetX[elementId] ?? 0, doc.offsetY[elementId] ?? 0);
}

void ngmyCardSetElementOffset(NgmyBusinessCardDocument doc, String elementId, Offset delta) {
  doc.offsetX[elementId] = delta.dx;
  doc.offsetY[elementId] = delta.dy;
  doc.touch();
}

bool ngmyCardElementVisible(NgmyBusinessCardDocument doc, String elementId) {
  return doc.hidden[elementId] != true;
}

void ngmyCardResetLayout(NgmyBusinessCardDocument doc) {
  doc.offsetX.clear();
  doc.offsetY.clear();
  doc.touch();
}
