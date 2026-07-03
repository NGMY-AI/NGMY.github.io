import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

/// Visual slide designs — decorative layouts beyond color themes.
class NgmySlideDesignDef {
  const NgmySlideDesignDef({
    required this.id,
    required this.label,
    required this.category,
    required this.previewColors,
    required this.apply,
  });

  final String id;
  final String label;
  final String category;
  final List<Color> previewColors;
  final void Function(NgmySlide slide) apply;
}

void _clearDesignShapes(NgmySlide slide) {
  slide.elements.removeWhere((e) => e.fileName == '__design__');
}

void _addDesignShape(NgmySlide slide, NgmySlideElement el) {
  el.fileName = '__design__';
  slide.elements.insert(0, el);
}

final ngmySlideDesignTemplates = <NgmySlideDesignDef>[
  NgmySlideDesignDef(
    id: 'clean',
    label: 'Clean',
    category: 'Minimal',
    previewColors: [Color(0xFFFFFFFF), Color(0xFFE2E8F0)],
    apply: (s) {
      _clearDesignShapes(s);
      s.background = 0xFFFFFFFF;
      s.backgroundEnd = 0xFFF8FAFC;
    },
  ),
  NgmySlideDesignDef(
    id: 'sidebar_accent',
    label: 'Sidebar',
    category: 'Corporate',
    previewColors: [Color(0xFF2563EB), Color(0xFFFFFFFF)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0, y: 0, w: 0.08, h: 1, fillColor: 0xFF2563EB, strokeColor: 0xFF2563EB));
      s.background = 0xFFFFFFFF;
      s.backgroundEnd = 0xFFF1F5F9;
    },
  ),
  NgmySlideDesignDef(
    id: 'top_bar',
    label: 'Top Bar',
    category: 'Corporate',
    previewColors: [Color(0xFF1E3A8A), Color(0xFFEFF6FF)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0, y: 0, w: 1, h: 0.1, fillColor: 0xFF1E3A8A, strokeColor: 0xFF1E3A8A));
      s.background = 0xFFFFFFFF;
      s.backgroundEnd = 0xFFEFF6FF;
    },
  ),
  NgmySlideDesignDef(
    id: 'footer_stripe',
    label: 'Footer Stripe',
    category: 'Corporate',
    previewColors: [Color(0xFF059669), Color(0xFFF0FDF4)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0, y: 0.92, w: 1, h: 0.08, fillColor: 0xFF059669, strokeColor: 0xFF059669));
      s.background = 0xFFF0FDF4;
      s.backgroundEnd = 0xFFFFFFFF;
    },
  ),
  NgmySlideDesignDef(
    id: 'corner_orb',
    label: 'Corner Orb',
    category: 'Modern',
    previewColors: [Color(0xFF7C3AED), Color(0xFFF5F3FF)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.78, y: -0.08, w: 0.28, h: 0.28, shape: NgmySlideShapeKind.circle, fillColor: 0x337C3AED, strokeColor: 0x007C3AED));
      s.background = 0xFFF5F3FF;
      s.backgroundEnd = 0xFFFFFFFF;
    },
  ),
  NgmySlideDesignDef(
    id: 'diagonal',
    label: 'Diagonal',
    category: 'Modern',
    previewColors: [Color(0xFFEA580C), Color(0xFFFFF7ED)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: -0.1, y: 0.55, w: 0.65, h: 0.55, shape: NgmySlideShapeKind.triangle, fillColor: 0x33EA580C, strokeColor: 0x00EA580C, rotation: -0.3));
      s.background = 0xFFFFF7ED;
      s.backgroundEnd = 0xFFFFFFFF;
    },
  ),
  NgmySlideDesignDef(
    id: 'frame_border',
    label: 'Frame',
    category: 'Elegant',
    previewColors: [Color(0xFFB45309), Color(0xFFFFFBEB)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.04, y: 0.04, w: 0.92, h: 0.92, fillColor: 0x00FFFFFF, strokeColor: 0xFFB45309, strokeWidth: 4));
      s.background = 0xFFFFFBEB;
      s.backgroundEnd = 0xFFFEF3C7;
    },
  ),
  NgmySlideDesignDef(
    id: 'luxury_dark',
    label: 'Luxury Dark',
    category: 'Luxury',
    previewColors: [Color(0xFF1C1917), Color(0xFFEAB308)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.1, y: 0.88, w: 0.8, h: 0.004, shape: NgmySlideShapeKind.line, fillColor: 0xFFEAB308, strokeColor: 0xFFEAB308, strokeWidth: 2));
      s.background = 0xFF1C1917;
      s.backgroundEnd = 0xFF422006;
    },
  ),
  NgmySlideDesignDef(
    id: 'gold_corners',
    label: 'Gold Corners',
    category: 'Luxury',
    previewColors: [Color(0xFF422006), Color(0xFFFEF08A)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.02, y: 0.02, w: 0.12, h: 0.12, fillColor: 0x44EAB308, strokeColor: 0xFFEAB308, strokeWidth: 2));
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.86, y: 0.86, w: 0.12, h: 0.12, fillColor: 0x44EAB308, strokeColor: 0xFFEAB308, strokeWidth: 2));
      s.background = 0xFF422006;
      s.backgroundEnd = 0xFF1C1917;
    },
  ),
  NgmySlideDesignDef(
    id: 'split_gradient',
    label: 'Split',
    category: 'Bold',
    previewColors: [Color(0xFF2563EB), Color(0xFF059669)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0, y: 0, w: 0.45, h: 1, fillColor: 0x332563EB, strokeColor: 0x002563EB));
      s.background = 0xFFFFFFFF;
      s.backgroundEnd = 0xFFECFDF5;
    },
  ),
  NgmySlideDesignDef(
    id: 'dots_pattern',
    label: 'Dots',
    category: 'Playful',
    previewColors: [Color(0xFF8B5CF6), Color(0xFFF5F3FF)],
    apply: (s) {
      _clearDesignShapes(s);
      for (var i = 0; i < 6; i++) {
        _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.85 + (i % 3) * 0.04, y: 0.08 + (i ~/ 3) * 0.06, w: 0.025, h: 0.025, shape: NgmySlideShapeKind.circle, fillColor: 0x558B5CF6, strokeColor: 0x008B5CF6));
      }
      s.background = 0xFFF5F3FF;
      s.backgroundEnd = 0xFFFFFFFF;
    },
  ),
  NgmySlideDesignDef(
    id: 'school_chalk',
    label: 'Chalkboard',
    category: 'School',
    previewColors: [Color(0xFF14532D), Color(0xFFBBF7D0)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.05, y: 0.05, w: 0.9, h: 0.9, fillColor: 0x0014532D, strokeColor: 0xFFBBF7D0, strokeWidth: 3));
      s.background = 0xFF14532D;
      s.backgroundEnd = 0xFF166534;
    },
  ),
  NgmySlideDesignDef(
    id: 'notebook',
    label: 'Notebook',
    category: 'School',
    previewColors: [Color(0xFFDC2626), Color(0xFFFFFBEB)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.1, y: 0, w: 0.006, h: 1, fillColor: 0xFFDC2626, strokeColor: 0xFFDC2626));
      for (var i = 0; i < 8; i++) {
        _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.12, y: 0.12 + i * 0.1, w: 0.82, h: 0.002, shape: NgmySlideShapeKind.line, fillColor: 0xFFCBD5E1, strokeColor: 0xFFCBD5E1));
      }
      s.background = 0xFFFFFBEB;
      s.backgroundEnd = 0xFFFFFFFF;
    },
  ),
  NgmySlideDesignDef(
    id: 'photo_hero',
    label: 'Photo Hero',
    category: 'Modern',
    previewColors: [Color(0xFF0F172A), Color(0xFF38BDF8)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0, y: 0, w: 1, h: 0.45, fillColor: 0x440F172A, strokeColor: 0x000F172A));
      s.background = 0xFF0F172A;
      s.backgroundEnd = 0xFF1E293B;
    },
  ),
  NgmySlideDesignDef(
    id: 'minimal_line',
    label: 'Minimal Line',
    category: 'Minimal',
    previewColors: [Color(0xFF111827), Color(0xFFFFFFFF)],
    apply: (s) {
      _clearDesignShapes(s);
      _addDesignShape(s, NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, x: 0.08, y: 0.2, w: 0.2, h: 0.004, shape: NgmySlideShapeKind.line, fillColor: 0xFF111827, strokeColor: 0xFF111827, strokeWidth: 3));
      s.background = 0xFFFFFFFF;
      s.backgroundEnd = null;
    },
  ),
];

void ngmyApplySlideDesignToDeck(NgmySlideDeck deck, String designId) {
  final def = ngmySlideDesignTemplates.firstWhere((d) => d.id == designId, orElse: () => ngmySlideDesignTemplates.first);
  for (final slide in deck.slides) {
    def.apply(slide);
  }
}

void ngmyApplySlideDesignToCurrent(NgmySlide slide, String designId) {
  final def = ngmySlideDesignTemplates.firstWhere((d) => d.id == designId, orElse: () => ngmySlideDesignTemplates.first);
  def.apply(slide);
}
