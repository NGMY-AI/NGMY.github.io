import 'package:flutter/material.dart';

/// QR printable template — invoice / receipt layout with QR at bottom.
class NgmyQrTemplateDef {
  final String id;
  final int categoryIndex;
  final String name;
  final String titleTemplate;
  final String bodyTemplate;
  final String footerTemplate;
  final List<Color> gradient;
  final Color accent;
  final Color onAccent;
  final IconData icon;
  final NgmyQrTemplateStyle style;

  const NgmyQrTemplateDef({
    required this.id,
    required this.categoryIndex,
    required this.name,
    required this.titleTemplate,
    required this.bodyTemplate,
    required this.footerTemplate,
    required this.gradient,
    required this.accent,
    this.onAccent = Colors.white,
    required this.icon,
    required this.style,
  });
}

enum NgmyQrTemplateStyle {
  classicInvoice,
  modernMinimal,
  boldGradient,
  thermalReceipt,
  elegantDark,
  ngmyCyan,
  letterhead,
  framedCard,
  neonHud,
  premiumGold,
}

const _kStyleNames = [
  'Classic Invoice',
  'Modern Clean',
  'Bold Gradient',
  'Receipt Strip',
  'Elegant Dark',
  'NGMY Cyan',
  'Letterhead',
  'Framed Card',
  'Neon Tech',
  'Premium Gold',
];

const _kStyleEnums = NgmyQrTemplateStyle.values;

String ngmyQrApplyTemplateVars(String template, Map<String, String> vars) {
  var out = template;
  vars.forEach((key, value) {
    out = out.replaceAll('{$key}', value.isEmpty ? '—' : value);
  });
  return out;
}

List<NgmyQrTemplateDef> ngmyQrTemplatesForCategory(int categoryIndex) {
  return kNgmyQrTemplates.where((t) => t.categoryIndex == categoryIndex).toList();
}

NgmyQrTemplateDef? ngmyQrTemplateById(String? id) {
  if (id == null || id.isEmpty) return null;
  for (final t in kNgmyQrTemplates) {
    if (t.id == id) return t;
  }
  return null;
}

Map<String, String> ngmyQrDefaultTemplateVars(int categoryIndex, Map<String, String> fields) {
  final url = fields['url'] ?? fields['link'] ?? '';
  final ssid = fields['ssid'] ?? fields['network'] ?? '';
  final name = fields['name'] ?? '';
  final phone = fields['phone'] ?? '';
  final email = fields['email'] ?? '';
  final org = fields['org'] ?? '';
  final message = fields['message'] ?? fields['text'] ?? '';
  final subject = fields['subject'] ?? '';
  final to = fields['to'] ?? email;

  switch (categoryIndex) {
    case 0:
      return {'url': url, 'link': url, 'label': fields['label'] ?? 'My Link'};
    case 1:
      return {'ssid': ssid, 'network': ssid, 'password': fields['password'] ?? ''};
    case 2:
      return {'name': name, 'phone': phone, 'email': email, 'org': org};
    case 3:
      return {'message': message, 'text': message};
    case 4:
      return {'to': to, 'email': to, 'subject': subject};
    case 5:
      return {'phone': phone};
    case 6:
      return {'phone': phone, 'message': message};
    default:
      return fields;
  }
}

List<NgmyQrTemplateDef> _buildCategoryTemplates({
  required int categoryIndex,
  required IconData icon,
  required List<Color> palette,
  required Color accent,
  required String titleTpl,
  required String bodyTpl,
  required String footerTpl,
}) {
  final cat = ['link', 'wifi', 'contact', 'text', 'email', 'phone', 'sms'][categoryIndex];
  return List.generate(10, (i) {
    final style = _kStyleEnums[i];
    final styleAccent = switch (style) {
      NgmyQrTemplateStyle.premiumGold => const Color(0xFFD97706),
      NgmyQrTemplateStyle.elegantDark => const Color(0xFF6366F1),
      NgmyQrTemplateStyle.neonHud => const Color(0xFF06B6D4),
      NgmyQrTemplateStyle.thermalReceipt => const Color(0xFF374151),
      _ => accent,
    };
    return NgmyQrTemplateDef(
      id: '${cat}_${i + 1}',
      categoryIndex: categoryIndex,
      name: _kStyleNames[i],
      titleTemplate: titleTpl,
      bodyTemplate: bodyTpl,
      footerTemplate: footerTpl,
      gradient: palette,
      accent: styleAccent,
      icon: icon,
      style: style,
    );
  });
}

final List<NgmyQrTemplateDef> kNgmyQrTemplates = [
  ..._buildCategoryTemplates(
    categoryIndex: 0,
    icon: Icons.link_rounded,
    palette: [const Color(0xFF4F46E5), const Color(0xFF312E81)],
    accent: const Color(0xFF6366F1),
    titleTpl: 'Visit My Link',
    bodyTpl: 'Scan the QR code below with your camera to open {url} instantly. No typing — just point, scan, and go.',
    footerTpl: 'Tap · Scan · Visit',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 1,
    icon: Icons.wifi_rounded,
    palette: [const Color(0xFF0891B2), const Color(0xFF164E63)],
    accent: const Color(0xFF06B6D4),
    titleTpl: 'Join {network}',
    bodyTpl: 'Welcome! Scan the QR code at the bottom to connect to Wi‑Fi network "{ssid}" automatically on your phone.',
    footerTpl: 'Scan to join Wi‑Fi · {network}',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 2,
    icon: Icons.contact_page_rounded,
    palette: [const Color(0xFF7C3AED), const Color(0xFF4C1D95)],
    accent: const Color(0xFF8B5CF6),
    titleTpl: 'Save My Contact',
    bodyTpl: 'Meet {name}. Scan below to add my phone, email, and details straight to your contacts — fast and easy.',
    footerTpl: '{name} · Scan to save',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 3,
    icon: Icons.notes_rounded,
    palette: [const Color(0xFF475569), const Color(0xFF1E293B)],
    accent: const Color(0xFF64748B),
    titleTpl: 'A Note For You',
    bodyTpl: 'Scan the QR code below to read my message. Everything you need is encoded securely in one simple scan.',
    footerTpl: 'Scan to read',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 4,
    icon: Icons.email_outlined,
    palette: [const Color(0xFFDC2626), const Color(0xFF7F1D1D)],
    accent: const Color(0xFFEF4444),
    titleTpl: 'Send Me an Email',
    bodyTpl: 'Scan below to open your email app addressed to {email}. Your message can be ready — just hit send.',
    footerTpl: 'Scan · Email {email}',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 5,
    icon: Icons.phone_rounded,
    palette: [const Color(0xFF059669), const Color(0xFF064E3B)],
    accent: const Color(0xFF10B981),
    titleTpl: 'Call Me',
    bodyTpl: 'Need to reach me? Scan the QR code below to dial {phone} instantly — one tap and we are connected.',
    footerTpl: 'Scan to call · {phone}',
  ),
  ..._buildCategoryTemplates(
    categoryIndex: 6,
    icon: Icons.sms_rounded,
    palette: [const Color(0xFFEA580C), const Color(0xFF7C2D12)],
    accent: const Color(0xFFF97316),
    titleTpl: 'Text Me',
    bodyTpl: 'Scan the QR code below to start an SMS to {phone}. Your message app opens ready — quick and personal.',
    footerTpl: 'Scan to text · {phone}',
  ),
];
