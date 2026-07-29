import 'package:flutter/material.dart';

enum NgmyQrTemplateLayout {
  accessCard,
  topBanner,
  qrHero,
  splitPanel,
  ticketStub,
  gradientBold,
  sidebarRail,
  posterFrame,
  darkNeon,
  ribbonTag,
}

const kNgmyQrLayoutNames = [
  'Access Card',
  'Top Banner',
  'QR Hero',
  'Split Panel',
  'Ticket Stub',
  'Gradient Bold',
  'Sidebar Rail',
  'Poster Frame',
  'Dark Neon',
  'Ribbon Tag',
];

/// Category-specific copy and field layout for premium access-card templates.
class NgmyQrCategoryTheme {
  final String headlinePrimary;
  final String headlineAccent;
  final String subtitleTemplate;
  final String field1Label;
  final String field1Template;
  final IconData field1Icon;
  final String field2Label;
  final String field2Template;
  final IconData field2Icon;
  final String stepsTitle;
  final List<NgmyQrStepDef> steps;
  final String closingTemplate;

  const NgmyQrCategoryTheme({
    required this.headlinePrimary,
    required this.headlineAccent,
    required this.subtitleTemplate,
    required this.field1Label,
    required this.field1Template,
    required this.field1Icon,
    required this.field2Label,
    required this.field2Template,
    required this.field2Icon,
    required this.stepsTitle,
    required this.steps,
    required this.closingTemplate,
  });
}

class NgmyQrStepDef {
  final IconData icon;
  final String text;

  const NgmyQrStepDef({required this.icon, required this.text});
}

class NgmyQrTemplateDef {
  final String id;
  final int categoryIndex;
  final String name;
  final String titleTemplate;
  final String bodyTemplate;
  final String footerTemplate;
  final Color accent;
  final Color accentDark;
  final Color onAccent;
  final IconData icon;
  final NgmyQrCategoryTheme theme;
  final NgmyQrTemplateLayout layout;

  const NgmyQrTemplateDef({
    required this.id,
    required this.categoryIndex,
    required this.name,
    required this.titleTemplate,
    required this.bodyTemplate,
    required this.footerTemplate,
    required this.accent,
    required this.accentDark,
    this.onAccent = Colors.white,
    required this.icon,
    required this.theme,
    required this.layout,
  });
}

const _kDesignVariants = [
  (layout: NgmyQrTemplateLayout.accessCard, accent: Color(0xFF2563EB), dark: Color(0xFF1E3A8A)),
  (layout: NgmyQrTemplateLayout.topBanner, accent: Color(0xFF0891B2), dark: Color(0xFF164E63)),
  (layout: NgmyQrTemplateLayout.qrHero, accent: Color(0xFF7C3AED), dark: Color(0xFF4C1D95)),
  (layout: NgmyQrTemplateLayout.splitPanel, accent: Color(0xFF059669), dark: Color(0xFF064E3B)),
  (layout: NgmyQrTemplateLayout.ticketStub, accent: Color(0xFF475569), dark: Color(0xFF1E293B)),
  (layout: NgmyQrTemplateLayout.gradientBold, accent: Color(0xFFEA580C), dark: Color(0xFF7C2D12)),
  (layout: NgmyQrTemplateLayout.sidebarRail, accent: Color(0xFFE11D48), dark: Color(0xFF881337)),
  (layout: NgmyQrTemplateLayout.posterFrame, accent: Color(0xFF4F46E5), dark: Color(0xFF312E81)),
  (layout: NgmyQrTemplateLayout.darkNeon, accent: Color(0xFF06B6D4), dark: Color(0xFF0F172A)),
  (layout: NgmyQrTemplateLayout.ribbonTag, accent: Color(0xFFD97706), dark: Color(0xFF78350F)),
];

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
  final password = fields['password'] ?? '';
  final security = password.isEmpty ? 'Open Network' : 'WPA2/WPA3';

  switch (categoryIndex) {
    case 0:
      return {'url': url, 'link': url, 'label': fields['label'] ?? 'My Website', 'host': _hostFromUrl(url)};
    case 1:
      return {'ssid': ssid, 'network': ssid, 'password': password, 'security': security};
    case 2:
      return {'name': name.isEmpty ? 'My Contact' : name, 'phone': phone, 'email': email, 'org': org.isEmpty ? 'Contact Card' : org};
    case 3:
      return {'message': message.isEmpty ? 'Your message' : message, 'text': message};
    case 4:
      return {'to': to, 'email': to, 'subject': subject.isEmpty ? 'Hello' : subject};
    case 5:
      return {'phone': phone.isEmpty ? '+1 (555) 000-0000' : phone};
    case 6:
      return {'phone': phone.isEmpty ? '+1 (555) 000-0000' : phone, 'message': message.isEmpty ? 'Hi there!' : message};
    default:
      return fields;
  }
}

String _hostFromUrl(String url) {
  if (url.isEmpty) return 'your-link.com';
  try {
    final u = Uri.parse(url.contains('://') ? url : 'https://$url');
    return u.host.isNotEmpty ? u.host : url;
  } catch (_) {
    return url.length > 28 ? '${url.substring(0, 25)}…' : url;
  }
}

const _kCategoryThemes = <NgmyQrCategoryTheme>[
  NgmyQrCategoryTheme(
    headlinePrimary: 'Web',
    headlineAccent: 'LINK',
    subtitleTemplate: 'Scan to visit my link instantly',
    field1Label: 'WEBSITE',
    field1Template: '{host}',
    field1Icon: Icons.language_rounded,
    field2Label: 'FULL URL',
    field2Template: '{url}',
    field2Icon: Icons.link_rounded,
    stepsTitle: 'HOW TO VISIT',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.touch_app_rounded, text: 'Tap the link banner'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'You\'re there!'),
    ],
    closingTemplate: 'Enjoy your visit!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'Wi‑Fi',
    headlineAccent: 'ACCESS',
    subtitleTemplate: 'Scan to connect to our Wi‑Fi',
    field1Label: 'NETWORK',
    field1Template: '{network}',
    field1Icon: Icons.wifi_rounded,
    field2Label: 'SECURITY',
    field2Template: '{security}',
    field2Icon: Icons.lock_outline_rounded,
    stepsTitle: 'HOW TO CONNECT',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.notifications_active_outlined, text: 'Tap the notification'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'You\'re connected!'),
    ],
    closingTemplate: 'Enjoy your connection!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'Contact',
    headlineAccent: 'CARD',
    subtitleTemplate: 'Scan to save my contact details',
    field1Label: 'NAME',
    field1Template: '{name}',
    field1Icon: Icons.person_outline_rounded,
    field2Label: 'PHONE',
    field2Template: '{phone}',
    field2Icon: Icons.phone_outlined,
    stepsTitle: 'HOW TO SAVE',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.contact_page_outlined, text: 'Tap Add Contact'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'Contact saved!'),
    ],
    closingTemplate: 'Nice to meet you!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'Text',
    headlineAccent: 'NOTE',
    subtitleTemplate: 'Scan to read my message',
    field1Label: 'PREVIEW',
    field1Template: '{message}',
    field1Icon: Icons.notes_rounded,
    field2Label: 'FORMAT',
    field2Template: 'Plain text',
    field2Icon: Icons.text_fields_rounded,
    stepsTitle: 'HOW TO READ',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.article_outlined, text: 'View the message'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'All set!'),
    ],
    closingTemplate: 'Thanks for reading!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'Email',
    headlineAccent: 'COMPOSE',
    subtitleTemplate: 'Scan to send me an email',
    field1Label: 'SEND TO',
    field1Template: '{email}',
    field1Icon: Icons.email_outlined,
    field2Label: 'SUBJECT',
    field2Template: '{subject}',
    field2Icon: Icons.subject_rounded,
    stepsTitle: 'HOW TO EMAIL',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.mail_outline_rounded, text: 'Open your mail app'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'Ready to send!'),
    ],
    closingTemplate: 'I look forward to hearing from you!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'Phone',
    headlineAccent: 'CALL',
    subtitleTemplate: 'Scan to call me directly',
    field1Label: 'NUMBER',
    field1Template: '{phone}',
    field1Icon: Icons.phone_rounded,
    field2Label: 'ACTION',
    field2Template: 'One-tap dial',
    field2Icon: Icons.call_made_rounded,
    stepsTitle: 'HOW TO CALL',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.phone_in_talk_outlined, text: 'Tap to call'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'Connected!'),
    ],
    closingTemplate: 'Talk soon!',
  ),
  NgmyQrCategoryTheme(
    headlinePrimary: 'SMS',
    headlineAccent: 'TEXT',
    subtitleTemplate: 'Scan to text me instantly',
    field1Label: 'NUMBER',
    field1Template: '{phone}',
    field1Icon: Icons.sms_rounded,
    field2Label: 'MESSAGE',
    field2Template: '{message}',
    field2Icon: Icons.chat_bubble_outline_rounded,
    stepsTitle: 'HOW TO TEXT',
    steps: [
      NgmyQrStepDef(icon: Icons.photo_camera_outlined, text: 'Open your camera'),
      NgmyQrStepDef(icon: Icons.qr_code_scanner_rounded, text: 'Scan this QR code'),
      NgmyQrStepDef(icon: Icons.message_outlined, text: 'Open Messages'),
      NgmyQrStepDef(icon: Icons.check_circle_outline_rounded, text: 'Ready to send!'),
    ],
    closingTemplate: 'Can\'t wait to hear from you!',
  ),
];

List<NgmyQrTemplateDef> _buildCategoryTemplates({
  required int categoryIndex,
  required IconData icon,
}) {
  final cat = ['link', 'wifi', 'contact', 'text', 'email', 'phone', 'sms'][categoryIndex];
  final theme = _kCategoryThemes[categoryIndex];
  return List.generate(_kDesignVariants.length, (i) {
    final v = _kDesignVariants[i];
    return NgmyQrTemplateDef(
      id: '${cat}_${i + 1}',
      categoryIndex: categoryIndex,
      name: kNgmyQrLayoutNames[i],
      titleTemplate: theme.subtitleTemplate,
      bodyTemplate: '',
      footerTemplate: theme.closingTemplate,
      accent: v.accent,
      accentDark: v.dark,
      icon: icon,
      theme: theme,
      layout: v.layout,
    );
  });
}

final List<NgmyQrTemplateDef> kNgmyQrTemplates = [
  ..._buildCategoryTemplates(categoryIndex: 0, icon: Icons.link_rounded),
  ..._buildCategoryTemplates(categoryIndex: 1, icon: Icons.wifi_rounded),
  ..._buildCategoryTemplates(categoryIndex: 2, icon: Icons.contact_page_rounded),
  ..._buildCategoryTemplates(categoryIndex: 3, icon: Icons.notes_rounded),
  ..._buildCategoryTemplates(categoryIndex: 4, icon: Icons.email_outlined),
  ..._buildCategoryTemplates(categoryIndex: 5, icon: Icons.phone_rounded),
  ..._buildCategoryTemplates(categoryIndex: 6, icon: Icons.sms_rounded),
];
