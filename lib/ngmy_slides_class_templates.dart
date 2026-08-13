import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

/// Professional class presentation starters — 20 unique decks, 5 slides each.
class NgmyClassTemplateDef {
  const NgmyClassTemplateDef({
    required this.id,
    required this.name,
    required this.category,
    required this.accent,
    required this.bg,
    required this.bgEnd,
    required this.titleColor,
    required this.bodyColor,
  });

  final String id;
  final String name;
  final String category;
  final Color accent;
  final Color bg;
  final Color bgEnd;
  final Color titleColor;
  final Color bodyColor;

  /// Theme used when adding new slides so they match this template.
  NgmySlidesTheme get theme => NgmySlidesTheme(
        id: 'class_$id',
        label: name,
        accent: accent,
        titleColor: titleColor,
        bodyColor: bodyColor,
        slideBg: bg,
        slideBgEnd: bgEnd,
      );

  NgmySlideDeck build() {
    final deck = NgmySlideDeck(
      id: NgmySlidesTemplates.newId(),
      name: name,
      themeId: 'class_$id',
      slides: [
        _slide('Welcome', _titleSlide('Your Presentation Title', 'Class · Subject · Date')),
        _slide('Agenda', _agendaSlide()),
        _slide('Key Point 1', _contentSlide('Main Idea', '• Supporting detail\n• Evidence or example\n• Why it matters')),
        _slide('Key Point 2', _twoColSlide()),
        _slide('Thank You', _closingSlide()),
      ],
    );
    for (final s in deck.slides) {
      s.background = bg.value;
      s.backgroundEnd = bgEnd.value;
    }
    return deck;
  }

  NgmySlide _slide(String title, List<NgmySlideElement> elements) =>
      NgmySlide(id: NgmySlidesTemplates.newId(), title: title, layout: NgmySlideLayout.titleContent, elements: elements);

  List<NgmySlideElement> _titleSlide(String title, String subtitle) => [
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          x: 0.08,
          y: 0.26,
          w: 0.84,
          h: 0.22,
          text: title,
          fontSize: 42,
          fontWeight: FontWeight.w900,
          color: titleColor.value,
          align: TextAlign.center,
          textTransition: NgmySlideTransition.zoom,
        ),
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          x: 0.12,
          y: 0.56,
          w: 0.76,
          h: 0.12,
          text: subtitle,
          fontSize: 20,
          color: bodyColor.value,
          align: TextAlign.center,
          textTransition: NgmySlideTransition.fade,
        ),
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.shape,
          x: 0.35,
          y: 0.72,
          w: 0.3,
          h: 0.006,
          shape: NgmySlideShapeKind.line,
          fillColor: accent.withValues(alpha: 0.8).value,
          strokeColor: accent.value,
          strokeWidth: 3,
        ),
      ];

  List<NgmySlideElement> _agendaSlide() => [
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.08, y: 0.08, w: 0.84, h: 0.14, text: 'Agenda', fontSize: 34, fontWeight: FontWeight.w900, color: titleColor.value),
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          x: 0.1,
          y: 0.26,
          w: 0.8,
          h: 0.6,
          text: '1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A',
          fontSize: 22,
          color: bodyColor.value,
          bulletList: true,
          textTransition: NgmySlideTransition.slideUp,
        ),
      ];

  List<NgmySlideElement> _contentSlide(String heading, String body) => [
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.08, y: 0.08, w: 0.84, h: 0.14, text: heading, fontSize: 32, fontWeight: FontWeight.w900, color: titleColor.value),
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.1, y: 0.26, w: 0.8, h: 0.62, text: body, fontSize: 21, color: bodyColor.value, bulletList: true),
      ];

  List<NgmySlideElement> _twoColSlide() => [
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.08, y: 0.08, w: 0.84, h: 0.12, text: 'Compare & Contrast', fontSize: 30, fontWeight: FontWeight.w900, color: titleColor.value),
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.08, y: 0.24, w: 0.4, h: 0.62, text: 'Option A\n\n• Strength\n• Example', fontSize: 18, color: bodyColor.value, bulletList: true),
        NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.text, x: 0.52, y: 0.24, w: 0.4, h: 0.62, text: 'Option B\n\n• Strength\n• Example', fontSize: 18, color: bodyColor.value, bulletList: true),
      ];

  List<NgmySlideElement> _closingSlide() => [
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          x: 0.1,
          y: 0.32,
          w: 0.8,
          h: 0.2,
          text: 'Thank You',
          fontSize: 48,
          fontWeight: FontWeight.w900,
          color: titleColor.value,
          align: TextAlign.center,
          textTransition: NgmySlideTransition.fade,
        ),
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          x: 0.15,
          y: 0.58,
          w: 0.7,
          h: 0.1,
          text: 'Questions?',
          fontSize: 22,
          color: bodyColor.value,
          align: TextAlign.center,
        ),
      ];
}

const ngmyClassPresentationTemplates = <NgmyClassTemplateDef>[
  NgmyClassTemplateDef(id: 'classic_blue', name: 'Classic Blue', category: 'Normal', accent: Color(0xFF2563EB), bg: Color(0xFFFFFFFF), bgEnd: Color(0xFFEFF6FF), titleColor: Color(0xFF1E3A8A), bodyColor: Color(0xFF334155)),
  NgmyClassTemplateDef(id: 'campus_green', name: 'Campus Green', category: 'Normal', accent: Color(0xFF059669), bg: Color(0xFFF0FDF4), bgEnd: Color(0xFFD1FAE5), titleColor: Color(0xFF065F46), bodyColor: Color(0xFF374151)),
  NgmyClassTemplateDef(id: 'warm_sand', name: 'Warm Sand', category: 'Normal', accent: Color(0xFFD97706), bg: Color(0xFFFFFBEB), bgEnd: Color(0xFFFDE68A), titleColor: Color(0xFF92400E), bodyColor: Color(0xFF44403C)),
  NgmyClassTemplateDef(id: 'slate_minimal', name: 'Slate Minimal', category: 'Normal', accent: Color(0xFF475569), bg: Color(0xFFF8FAFC), bgEnd: Color(0xFFE2E8F0), titleColor: Color(0xFF0F172A), bodyColor: Color(0xFF334155)),
  NgmyClassTemplateDef(id: 'coral_fresh', name: 'Coral Fresh', category: 'Normal', accent: Color(0xFFF97316), bg: Color(0xFFFFF7ED), bgEnd: Color(0xFFFED7AA), titleColor: Color(0xFF9A3412), bodyColor: Color(0xFF431407)),
  NgmyClassTemplateDef(id: 'lavender_calm', name: 'Lavender Calm', category: 'Normal', accent: Color(0xFF8B5CF6), bg: Color(0xFFF5F3FF), bgEnd: Color(0xFFDDD6FE), titleColor: Color(0xFF5B21B6), bodyColor: Color(0xFF4C1D95)),
  NgmyClassTemplateDef(id: 'ocean_breeze', name: 'Ocean Breeze', category: 'Normal', accent: Color(0xFF0D9488), bg: Color(0xFFF0FDFA), bgEnd: Color(0xFF99F6E4), titleColor: Color(0xFF115E59), bodyColor: Color(0xFF134E4A)),
  NgmyClassTemplateDef(id: 'berry_pop', name: 'Berry Pop', category: 'Normal', accent: Color(0xFFA855F7), bg: Color(0xFFFAF5FF), bgEnd: Color(0xFFE9D5FF), titleColor: Color(0xFF6B21A8), bodyColor: Color(0xFF3B0764)),
  NgmyClassTemplateDef(id: 'midnight_pro', name: 'Midnight Pro', category: 'Professional', accent: Color(0xFF7C3AED), bg: Color(0xFF0F172A), bgEnd: Color(0xFF1E1B4B), titleColor: Color(0xFFE9D5FF), bodyColor: Color(0xFFCBD5E1)),
  NgmyClassTemplateDef(id: 'executive_navy', name: 'Executive Navy', category: 'Professional', accent: Color(0xFF3B82F6), bg: Color(0xFF0C1929), bgEnd: Color(0xFF1E3A8A), titleColor: Color(0xFFBFDBFE), bodyColor: Color(0xFF94A3B8)),
  NgmyClassTemplateDef(id: 'boardroom_charcoal', name: 'Boardroom Charcoal', category: 'Professional', accent: Color(0xFF64748B), bg: Color(0xFF1E293B), bgEnd: Color(0xFF0F172A), titleColor: Color(0xFFF8FAFC), bodyColor: Color(0xFFCBD5E1)),
  NgmyClassTemplateDef(id: 'corporate_steel', name: 'Corporate Steel', category: 'Professional', accent: Color(0xFF0284C7), bg: Color(0xFF0F172A), bgEnd: Color(0xFF1E40AF), titleColor: Color(0xFFBAE6FD), bodyColor: Color(0xFF94A3B8)),
  NgmyClassTemplateDef(id: 'gold_luxe', name: 'Gold Luxe', category: 'Luxury', accent: Color(0xFFEAB308), bg: Color(0xFF1C1917), bgEnd: Color(0xFF422006), titleColor: Color(0xFFFEF08A), bodyColor: Color(0xFFFDE68A)),
  NgmyClassTemplateDef(id: 'rose_gold_elite', name: 'Rose Gold Elite', category: 'Luxury', accent: Color(0xFFE11D48), bg: Color(0xFF1A0A0F), bgEnd: Color(0xFF500724), titleColor: Color(0xFFFBCFE8), bodyColor: Color(0xFFF9A8D4)),
  NgmyClassTemplateDef(id: 'platinum_night', name: 'Platinum Night', category: 'Luxury', accent: Color(0xFFCBD5E1), bg: Color(0xFF020617), bgEnd: Color(0xFF1E293B), titleColor: Color(0xFFF8FAFC), bodyColor: Color(0xFFE2E8F0)),
  NgmyClassTemplateDef(id: 'emerald_prestige', name: 'Emerald Prestige', category: 'Luxury', accent: Color(0xFF10B981), bg: Color(0xFF022C22), bgEnd: Color(0xFF064E3B), titleColor: Color(0xFFA7F3D0), bodyColor: Color(0xFF6EE7B7)),
  NgmyClassTemplateDef(id: 'royal_purple', name: 'Royal Purple', category: 'Luxury', accent: Color(0xFF9333EA), bg: Color(0xFF1E0A3C), bgEnd: Color(0xFF4C1D95), titleColor: Color(0xFFE9D5FF), bodyColor: Color(0xFFD8B4FE)),
  NgmyClassTemplateDef(id: 'neon_pitch', name: 'Neon Pitch', category: 'Bold', accent: Color(0xFF22D3EE), bg: Color(0xFF020617), bgEnd: Color(0xFF0F172A), titleColor: Color(0xFF67E8F9), bodyColor: Color(0xFFE2E8F0)),
  NgmyClassTemplateDef(id: 'crimson_impact', name: 'Crimson Impact', category: 'Bold', accent: Color(0xFFDC2626), bg: Color(0xFF450A0A), bgEnd: Color(0xFF7F1D1D), titleColor: Color(0xFFFECACA), bodyColor: Color(0xFFFCA5A5)),
  NgmyClassTemplateDef(id: 'sunset_gallery', name: 'Sunset Gallery', category: 'Bold', accent: Color(0xFFEA580C), bg: Color(0xFF431407), bgEnd: Color(0xFF9A3412), titleColor: Color(0xFFFED7AA), bodyColor: Color(0xFFFDBA74)),
];

NgmyClassTemplateDef ngmyClassTemplateById(String id) =>
    ngmyClassPresentationTemplates.firstWhere((t) => t.id == id, orElse: () => ngmyClassPresentationTemplates.first);

/// Resolves `class_<id>` theme ids used by class presentation decks.
NgmySlidesTheme? ngmyClassThemeByThemeId(String themeId) {
  final raw = themeId.trim();
  if (!raw.startsWith('class_')) return null;
  final id = raw.substring('class_'.length);
  if (id.isEmpty) return null;
  final match = ngmyClassPresentationTemplates.where((t) => t.id == id);
  if (match.isEmpty) return null;
  return match.first.theme;
}
