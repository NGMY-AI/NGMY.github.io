import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

/// Visual slide designs — professional geometric layouts (not just colors).
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

const _kDesignTag = '__design__';
const _kDesignIdPrefix = 'design_';

String _applyingDesignId = '';

bool _isDesignLayerElement(NgmySlideElement e) =>
    e.fileName.startsWith(_kDesignTag) || e.id.startsWith(_kDesignIdPrefix);

void _clearSlideDesign(NgmySlide slide) {
  slide.elements = slide.elements.where((e) => !_isDesignLayerElement(e)).toList();
  slide.slideDesignId = '';
}

void _addDesignShape(NgmySlide slide, NgmySlideElement el) {
  el.fileName = '$_kDesignTag:${_applyingDesignId.isEmpty ? 'layer' : _applyingDesignId}';
  slide.elements.insert(0, el);
}

NgmySlideElement _shape({
  double x = 0,
  double y = 0,
  double w = 1,
  double h = 1,
  NgmySlideShapeKind shape = NgmySlideShapeKind.rectangle,
  int fill = 0xFF2563EB,
  int stroke = 0x002563EB,
  double strokeW = 0,
  double rotation = 0,
}) =>
    NgmySlideElement(
      id: '${_kDesignIdPrefix}${NgmySlidesTemplates.newId()}',
      type: NgmySlideElementType.shape,
      x: x,
      y: y,
      w: w,
      h: h,
      shape: shape,
      fillColor: fill,
      strokeColor: stroke,
      strokeWidth: strokeW,
      rotation: rotation,
    );

void _bg(NgmySlide s, int bg, int? end) {
  s.background = bg;
  s.backgroundEnd = end;
}

final ngmySlideDesignTemplates = <NgmySlideDesignDef>[
  // ── Business / Corporate (blue theme like reference) ──
  NgmySlideDesignDef(
    id: 'biz_plan_blue',
    label: 'Business Plan',
    category: 'Corporate',
    previewColors: [Color(0xFF1E3A8A), Color(0xFFFFFFFF)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 0.52, h: 1, fill: 0xFF1E3A8A));
      _addDesignShape(s, _shape(x: 0.48, y: 0, w: 0.04, h: 1, fill: 0xFF38BDF8));
      _addDesignShape(s, _shape(x: 0.52, y: 0.62, w: 0.48, h: 0.38, fill: 0xFFF1F5F9));
      _addDesignShape(s, _shape(x: 0.08, y: 0.14, w: 0.32, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF38BDF8, stroke: 0xFF38BDF8, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'exec_summary',
    label: 'Executive',
    category: 'Corporate',
    previewColors: [Color(0xFF2563EB), Color(0xFFFFFFFF)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.58, y: 0.1, w: 0.36, h: 0.8, fill: 0xFF1E40AF));
      _addDesignShape(s, _shape(x: 0.64, y: 0.18, w: 0.28, h: 0.64, fill: 0xFF2563EB));
      _addDesignShape(s, _shape(x: 0.7, y: 0.28, w: 0.2, h: 0.44, fill: 0xFF3B82F6));
      _addDesignShape(s, _shape(x: 0.08, y: 0.12, w: 0.22, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF2563EB, stroke: 0xFF2563EB, strokeW: 3));
      _addDesignShape(s, _shape(x: 0.08, y: 0.18, w: 0.38, h: 0.004, shape: NgmySlideShapeKind.line, fill: 0xFFCBD5E1, stroke: 0xFFCBD5E1, strokeW: 2));
      _bg(s, 0xFFFFFFFF, 0xFFEFF6FF);
    },
  ),
  NgmySlideDesignDef(
    id: 'teal_corporate',
    label: 'Teal Corp',
    category: 'Corporate',
    previewColors: [Color(0xFF0D9488), Color(0xFF111827)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.11, fill: 0xFF0D9488));
      _addDesignShape(s, _shape(x: 0, y: 0.89, w: 1, h: 0.11, fill: 0xFF111827));
      _addDesignShape(s, _shape(x: 0.72, y: 0.14, w: 0.28, h: 0.72, shape: NgmySlideShapeKind.parallelogram, fill: 0x330D9488));
      _addDesignShape(s, _shape(x: 0.78, y: 0.22, w: 0.2, h: 0.2, shape: NgmySlideShapeKind.parallelogram, fill: 0x550D9488));
      _addDesignShape(s, _shape(x: 0, y: 0.105, w: 1, h: 0.004, shape: NgmySlideShapeKind.line, fill: 0xFF14B8A6, stroke: 0xFF14B8A6, strokeW: 2));
      _bg(s, 0xFFFFFFFF, 0xFFF0FDFA);
    },
  ),
  NgmySlideDesignDef(
    id: 'geometric_overlap',
    label: 'Geometric',
    category: 'Modern',
    previewColors: [Color(0xFF0F766E), Color(0xFF1E3A8A)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.55, y: -0.05, w: 0.5, h: 0.55, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF0F766E));
      _addDesignShape(s, _shape(x: 0.62, y: 0.35, w: 0.45, h: 0.5, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF1E3A8A));
      _addDesignShape(s, _shape(x: 0.68, y: 0.55, w: 0.35, h: 0.4, shape: NgmySlideShapeKind.triangle, fill: 0xFF2563EB, rotation: 0.3));
      _addDesignShape(s, _shape(x: 0.08, y: 0.08, w: 0.12, h: 0.12, fill: 0x220F766E));
      _bg(s, 0xFFFFFFFF, 0xFFF1F5F9);
    },
  ),
  NgmySlideDesignDef(
    id: 'midnight_cyan',
    label: 'Midnight Cyan',
    category: 'Bold',
    previewColors: [Color(0xFF000000), Color(0xFF22D3EE)],
    apply: (s) {
      _addDesignShape(s, _shape(x: -0.15, y: 0.35, w: 0.75, h: 0.75, shape: NgmySlideShapeKind.triangle, fill: 0xFF111827, rotation: -0.4));
      _addDesignShape(s, _shape(x: 0.42, y: 0.38, w: 0.06, h: 0.55, fill: 0xFF22D3EE));
      _addDesignShape(s, _shape(x: 0.08, y: 0.08, w: 0.35, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF22D3EE, stroke: 0xFF22D3EE, strokeW: 3));
      _addDesignShape(s, _shape(x: 0.75, y: 0.82, w: 0.2, h: 0.12, fill: 0x0022D3EE, stroke: 0xFF22D3EE, strokeW: 2));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'diagonal_hero',
    label: 'Diagonal Hero',
    category: 'Modern',
    previewColors: [Color(0xFF0F172A), Color(0xFF64748B)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.48, fill: 0xCC0F172A));
      _addDesignShape(s, _shape(x: -0.05, y: 0.38, w: 1.1, h: 0.12, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF2563EB, rotation: -0.08));
      _addDesignShape(s, _shape(x: 0.55, y: 0.05, w: 0.42, h: 0.35, fill: 0x332563EB));
      _addDesignShape(s, _shape(x: 0.08, y: 0.52, w: 0.25, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF2563EB, stroke: 0xFF2563EB, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF1F5F9);
    },
  ),
  NgmySlideDesignDef(
    id: 'swot_grid',
    label: 'SWOT Grid',
    category: 'Corporate',
    previewColors: [Color(0xFF1E3A8A), Color(0xFF059669)],
    apply: (s) {
      const cols = [0xFF1E3A8A, 0xFF2563EB, 0xFF0D9488, 0xFF059669];
      for (var i = 0; i < 4; i++) {
        _addDesignShape(s, _shape(x: 0.04 + i * 0.235, y: 0.72, w: 0.21, h: 0.22, fill: cols[i], stroke: 0xFFFFFFFF, strokeW: 2));
      }
      _addDesignShape(s, _shape(x: 0.04, y: 0.08, w: 0.3, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF1E3A8A, stroke: 0xFF1E3A8A, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFEFF6FF);
    },
  ),
  NgmySlideDesignDef(
    id: 'layered_chevrons',
    label: 'Chevrons',
    category: 'Corporate',
    previewColors: [Color(0xFF1E40AF), Color(0xFF93C5FD)],
    apply: (s) {
      for (var i = 0; i < 4; i++) {
        _addDesignShape(s, _shape(x: 0.58 + i * 0.08, y: 0.15 + i * 0.05, w: 0.32, h: 0.7, shape: NgmySlideShapeKind.arrow, fill: Color.lerp(const Color(0xFF1E40AF), const Color(0xFF93C5FD), i / 3)!.toARGB32(), rotation: 0));
      }
      _addDesignShape(s, _shape(x: 0.06, y: 0.1, w: 0.4, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF1E40AF, stroke: 0xFF1E40AF, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFDBEAFE);
    },
  ),
  NgmySlideDesignDef(
    id: 'split_triangle',
    label: 'Split Panel',
    category: 'Modern',
    previewColors: [Color(0xFF2563EB), Color(0xFFFFFFFF)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 0.42, h: 1, fill: 0xFF2563EB));
      _addDesignShape(s, _shape(x: 0.35, y: -0.05, w: 0.18, h: 1.1, shape: NgmySlideShapeKind.triangle, fill: 0xFF1D4ED8, rotation: 1.57));
      _addDesignShape(s, _shape(x: 0.08, y: 0.85, w: 0.25, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFFFFFFFF, stroke: 0xFFFFFFFF, strokeW: 2));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'corporate_navy',
    label: 'Navy Pro',
    category: 'Corporate',
    previewColors: [Color(0xFF0C1929), Color(0xFF3B82F6)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.1, fill: 0xFF0C1929));
      _addDesignShape(s, _shape(x: 0, y: 0.1, w: 1, h: 0.012, fill: 0xFF3B82F6));
      _addDesignShape(s, _shape(x: 0.06, y: 0.14, w: 0.42, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF3B82F6, stroke: 0xFF3B82F6, strokeW: 3));
      _addDesignShape(s, _shape(x: 0.72, y: 0.18, w: 0.22, h: 0.68, shape: NgmySlideShapeKind.parallelogram, fill: 0x180C1929));
      _addDesignShape(s, _shape(x: 0, y: 0.9, w: 1, h: 0.1, fill: 0xFF0C1929));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'cyan_slash',
    label: 'Cyan Slash',
    category: 'Bold',
    previewColors: [Color(0xFF000000), Color(0xFF06B6D4)],
    apply: (s) {
      _addDesignShape(s, _shape(x: -0.2, y: -0.1, w: 0.55, h: 1.2, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF111827, rotation: 0.15));
      _addDesignShape(s, _shape(x: 0.15, y: -0.05, w: 0.08, h: 1.1, fill: 0xFF06B6D4, rotation: 0.15));
      _addDesignShape(s, _shape(x: 0.55, y: 0.75, w: 0.38, h: 0.18, fill: 0x00111827, stroke: 0xFF06B6D4, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'crimson_impact',
    label: 'Crimson',
    category: 'Bold',
    previewColors: [Color(0xFF450A0A), Color(0xFFDC2626)],
    apply: (s) {
      _addDesignShape(s, _shape(x: -0.1, y: 0.45, w: 0.65, h: 0.65, shape: NgmySlideShapeKind.triangle, fill: 0xFF450A0A, rotation: -0.2));
      _addDesignShape(s, _shape(x: 0.05, y: 0.55, w: 0.5, h: 0.5, shape: NgmySlideShapeKind.triangle, fill: 0xFFDC2626, rotation: -0.15));
      _addDesignShape(s, _shape(x: 0.55, y: 0.08, w: 0.38, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFFDC2626, stroke: 0xFFDC2626, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFFEF2F2);
    },
  ),
  NgmySlideDesignDef(
    id: 'ocean_waves',
    label: 'Ocean Waves',
    category: 'Modern',
    previewColors: [Color(0xFF0369A1), Color(0xFF7DD3FC)],
    apply: (s) {
      _addDesignShape(s, _shape(x: -0.05, y: 0.7, w: 0.45, h: 0.35, shape: NgmySlideShapeKind.triangle, fill: 0xFF0369A1, rotation: 3.14));
      _addDesignShape(s, _shape(x: 0.25, y: 0.75, w: 0.4, h: 0.3, shape: NgmySlideShapeKind.triangle, fill: 0xFF0284C7, rotation: 3.14));
      _addDesignShape(s, _shape(x: 0.55, y: 0.72, w: 0.5, h: 0.32, shape: NgmySlideShapeKind.triangle, fill: 0xFF0EA5E9, rotation: 3.14));
      _addDesignShape(s, _shape(x: 0.08, y: 0.12, w: 0.22, h: 0.22, shape: NgmySlideShapeKind.circle, fill: 0x337DD3FC));
      _bg(s, 0xFFF0F9FF, 0xFFFFFFFF);
    },
  ),
  NgmySlideDesignDef(
    id: 'mono_geometric',
    label: 'Mono Geo',
    category: 'Bold',
    previewColors: [Color(0xFF000000), Color(0xFF22D3EE)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.02, y: 0.02, w: 0.14, h: 0.14, fill: 0xFF111827));
      _addDesignShape(s, _shape(x: 0.84, y: 0.02, w: 0.14, h: 0.14, fill: 0x0022D3EE, stroke: 0xFF22D3EE, strokeW: 3));
      _addDesignShape(s, _shape(x: -0.08, y: 0.78, w: 0.35, h: 0.28, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF111827));
      _addDesignShape(s, _shape(x: 0.72, y: 0.78, w: 0.3, h: 0.22, shape: NgmySlideShapeKind.triangle, fill: 0xFF22D3EE, rotation: 0.5));
      _addDesignShape(s, _shape(x: 0.08, y: 0.22, w: 0.2, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF111827, stroke: 0xFF111827, strokeW: 3));
      _bg(s, 0xFFFFFFFF, null);
    },
  ),
  NgmySlideDesignDef(
    id: 'luxury_gold',
    label: 'Gold Luxe',
    category: 'Luxury',
    previewColors: [Color(0xFF1C1917), Color(0xFFEAB308)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.04, y: 0.04, w: 0.92, h: 0.92, fill: 0x001C1917, stroke: 0xFFEAB308, strokeW: 3));
      _addDesignShape(s, _shape(x: 0.02, y: 0.02, w: 0.15, h: 0.15, shape: NgmySlideShapeKind.triangle, fill: 0x44EAB308, rotation: 0));
      _addDesignShape(s, _shape(x: 0.83, y: 0.83, w: 0.15, h: 0.15, shape: NgmySlideShapeKind.triangle, fill: 0x44EAB308, rotation: 3.14));
      _addDesignShape(s, _shape(x: 0.15, y: 0.88, w: 0.7, h: 0.004, shape: NgmySlideShapeKind.line, fill: 0xFFEAB308, stroke: 0xFFEAB308, strokeW: 2));
      _bg(s, 0xFF1C1917, 0xFF422006);
    },
  ),
  NgmySlideDesignDef(
    id: 'hex_infographic',
    label: 'Hex Stack',
    category: 'Modern',
    previewColors: [Color(0xFF0D9488), Color(0xFF5EEAD4)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.68, y: 0.18, w: 0.14, h: 0.14, shape: NgmySlideShapeKind.hexagon, fill: 0xFF0D9488));
      _addDesignShape(s, _shape(x: 0.78, y: 0.28, w: 0.14, h: 0.14, shape: NgmySlideShapeKind.hexagon, fill: 0xFF14B8A6));
      _addDesignShape(s, _shape(x: 0.68, y: 0.38, w: 0.14, h: 0.14, shape: NgmySlideShapeKind.hexagon, fill: 0xFF2DD4BF));
      _addDesignShape(s, _shape(x: 0.78, y: 0.48, w: 0.14, h: 0.14, shape: NgmySlideShapeKind.hexagon, fill: 0xFF5EEAD4));
      _addDesignShape(s, _shape(x: 0.68, y: 0.58, w: 0.14, h: 0.14, shape: NgmySlideShapeKind.hexagon, fill: 0xFF0F766E));
      _addDesignShape(s, _shape(x: 0.06, y: 0.1, w: 0.22, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF0D9488, stroke: 0xFF0D9488, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF0FDFA);
    },
  ),
  NgmySlideDesignDef(
    id: 'photo_banner',
    label: 'Photo Banner',
    category: 'Modern',
    previewColors: [Color(0xFF0F172A), Color(0xFF38BDF8)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.42, fill: 0xDD0F172A));
      _addDesignShape(s, _shape(x: 0, y: 0.38, w: 1, h: 0.06, shape: NgmySlideShapeKind.parallelogram, fill: 0xFF2563EB, rotation: -0.05));
      _addDesignShape(s, _shape(x: 0.7, y: 0.08, w: 0.25, h: 0.25, shape: NgmySlideShapeKind.circle, fill: 0x3338BDF8));
      _addDesignShape(s, _shape(x: 0.08, y: 0.48, w: 0.3, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF2563EB, stroke: 0xFF2563EB, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF1F5F9);
    },
  ),
  NgmySlideDesignDef(
    id: 'process_steps',
    label: 'Process',
    category: 'Corporate',
    previewColors: [Color(0xFF2563EB), Color(0xFF93C5FD)],
    apply: (s) {
      for (var i = 0; i < 4; i++) {
        _addDesignShape(s, _shape(x: 0.06 + i * 0.23, y: 0.78, w: 0.2, h: 0.14, shape: NgmySlideShapeKind.arrow, fill: Color.lerp(const Color(0xFF1E40AF), const Color(0xFF93C5FD), i / 3)!.toARGB32()));
      }
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.08, fill: 0xFF1E40AF));
      _addDesignShape(s, _shape(x: 0.06, y: 0.14, w: 0.35, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF2563EB, stroke: 0xFF2563EB, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFEFF6FF);
    },
  ),
  NgmySlideDesignDef(
    id: 'grid_modern',
    label: 'Grid Modern',
    category: 'Minimal',
    previewColors: [Color(0xFF64748B), Color(0xFFFFFFFF)],
    apply: (s) {
      for (var i = 1; i < 6; i++) {
        _addDesignShape(s, _shape(x: 0.08, y: 0.15 + i * 0.12, w: 0.55, h: 0.002, shape: NgmySlideShapeKind.line, fill: 0xFFCBD5E1, stroke: 0xFFCBD5E1));
      }
      _addDesignShape(s, _shape(x: 0.72, y: 0.1, w: 0.22, h: 0.75, fill: 0xFF111827));
      _addDesignShape(s, _shape(x: 0.75, y: 0.15, w: 0.16, h: 0.16, fill: 0x33FFFFFF));
      _addDesignShape(s, _shape(x: 0.08, y: 0.1, w: 0.2, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF111827, stroke: 0xFF111827, strokeW: 3));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'platinum_frame',
    label: 'Platinum',
    category: 'Luxury',
    previewColors: [Color(0xFF475569), Color(0xFFE2E8F0)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.05, y: 0.05, w: 0.9, h: 0.9, fill: 0x00475569, stroke: 0xFF94A3B8, strokeW: 2));
      _addDesignShape(s, _shape(x: 0.03, y: 0.03, w: 0.08, h: 0.08, fill: 0xFF475569));
      _addDesignShape(s, _shape(x: 0.89, y: 0.03, w: 0.08, h: 0.08, fill: 0xFF64748B));
      _addDesignShape(s, _shape(x: 0.03, y: 0.89, w: 0.08, h: 0.08, fill: 0xFF64748B));
      _addDesignShape(s, _shape(x: 0.89, y: 0.89, w: 0.08, h: 0.08, fill: 0xFF475569));
      _addDesignShape(s, _shape(x: 0.12, y: 0.12, w: 0.25, h: 0.004, shape: NgmySlideShapeKind.line, fill: 0xFF475569, stroke: 0xFF475569, strokeW: 2));
      _bg(s, 0xFFF8FAFC, 0xFFE2E8F0);
    },
  ),
  NgmySlideDesignDef(
    id: 'agenda_cards',
    label: 'Agenda Cards',
    category: 'Corporate',
    previewColors: [Color(0xFF1E3A8A), Color(0xFFDBEAFE)],
    apply: (s) {
      for (var i = 0; i < 3; i++) {
        _addDesignShape(s, _shape(x: 0.55, y: 0.14 + i * 0.24, w: 0.38, h: 0.18, fill: 0xFFFFFFFF, stroke: 0xFF2563EB, strokeW: 2));
        _addDesignShape(s, _shape(x: 0.57, y: 0.16 + i * 0.24, w: 0.06, h: 0.14, fill: Color.lerp(const Color(0xFF1E3A8A), const Color(0xFF60A5FA), i / 2)!.toARGB32()));
      }
      _addDesignShape(s, _shape(x: 0, y: 0, w: 0.48, h: 1, fill: 0xFF1E3A8A));
      _addDesignShape(s, _shape(x: 0.42, y: -0.05, w: 0.12, h: 1.1, shape: NgmySlideShapeKind.triangle, fill: 0xFF1E40AF, rotation: 1.57));
      _bg(s, 0xFFFFFFFF, 0xFFDBEAFE);
    },
  ),
  NgmySlideDesignDef(
    id: 'headline_orange',
    label: 'Headline Orange',
    category: 'Modern',
    previewColors: [Color(0xFFEA580C), Color(0xFF14B8A6)],
    apply: (s) {
      _addDesignShape(s, _shape(x: -0.12, y: -0.08, w: 0.55, h: 0.55, shape: NgmySlideShapeKind.parallelogram, fill: 0x33EA580C, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.62, y: -0.05, w: 0.45, h: 0.45, shape: NgmySlideShapeKind.parallelogram, fill: 0x3314B8A6, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.52, y: 0.12, w: 0.38, h: 0.38, shape: NgmySlideShapeKind.parallelogram, fill: 0x00FFFFFF, stroke: 0xFFEA580C, strokeW: 5, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.56, y: 0.16, w: 0.3, h: 0.3, shape: NgmySlideShapeKind.parallelogram, fill: 0x22EA580C, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.38, y: 0.04, w: 0.16, h: 0.06, fill: 0xFF14B8A6));
      _addDesignShape(s, _shape(x: 0.66, y: 0.52, w: 0.28, h: 0.28, shape: NgmySlideShapeKind.circle, fill: 0x44EA580C));
      _bg(s, 0xFFFFFFFF, 0xFFF8FAFC);
    },
  ),
  NgmySlideDesignDef(
    id: 'infographic_teal',
    label: 'Infographic',
    category: 'Modern',
    previewColors: [Color(0xFF0D9488), Color(0xFFEA580C)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 0.07, h: 1, fill: 0xFF0D9488));
      _addDesignShape(s, _shape(x: 0.48, y: 0.14, w: 0.46, h: 0.1, fill: 0xFFF1F5F9, stroke: 0xFFCBD5E1, strokeW: 1));
      _addDesignShape(s, _shape(x: 0.48, y: 0.28, w: 0.46, h: 0.1, fill: 0xFFF1F5F9, stroke: 0xFFCBD5E1, strokeW: 1));
      _addDesignShape(s, _shape(x: 0.48, y: 0.42, w: 0.46, h: 0.1, fill: 0xFFF1F5F9, stroke: 0xFFCBD5E1, strokeW: 1));
      _addDesignShape(s, _shape(x: 0.5, y: 0.16, w: 0.08, h: 0.08, shape: NgmySlideShapeKind.circle, fill: 0xFFEA580C));
      _addDesignShape(s, _shape(x: 0.5, y: 0.3, w: 0.08, h: 0.08, shape: NgmySlideShapeKind.circle, fill: 0xFF0D9488));
      _addDesignShape(s, _shape(x: 0.5, y: 0.44, w: 0.08, h: 0.08, shape: NgmySlideShapeKind.circle, fill: 0xFF14B8A6));
      _addDesignShape(s, _shape(x: 0.1, y: 0.18, w: 0.32, h: 0.32, shape: NgmySlideShapeKind.parallelogram, fill: 0x00FFFFFF, stroke: 0xFFEA580C, strokeW: 4, rotation: 0.45));
      _bg(s, 0xFFFFFFFF, 0xFFF0FDFA);
    },
  ),
  NgmySlideDesignDef(
    id: 'content_year',
    label: 'Year Feature',
    category: 'Modern',
    previewColors: [Color(0xFFEA580C), Color(0xFFFFFFFF)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0.02, y: 0.06, w: 0.1, h: 0.08, fill: 0xFFF1F5F9, stroke: 0xFF14B8A6, strokeW: 2));
      _addDesignShape(s, _shape(x: 0.58, y: 0.18, w: 0.36, h: 0.42, fill: 0xFFEA580C));
      _addDesignShape(s, _shape(x: 0.62, y: 0.24, w: 0.28, h: 0.12, fill: 0x33FFFFFF));
      _addDesignShape(s, _shape(x: 0, y: 0.72, w: 0.32, h: 0.28, shape: NgmySlideShapeKind.circle, fill: 0x00FFFFFF, stroke: 0xFFEA580C, strokeW: 4));
      _addDesignShape(s, _shape(x: 0.08, y: 0.22, w: 0.42, h: 0.006, shape: NgmySlideShapeKind.line, fill: 0xFF0F172A, stroke: 0xFF0F172A, strokeW: 3));
      for (var i = 0; i < 3; i++) {
        _addDesignShape(s, _shape(x: 0.08, y: 0.58 + i * 0.1, w: 0.04, h: 0.04, shape: NgmySlideShapeKind.circle, fill: 0x00FFFFFF, stroke: 0xFF14B8A6, strokeW: 2));
      }
      _bg(s, 0xFFFFFFFF, 0xFFFFF7ED);
    },
  ),
  NgmySlideDesignDef(
    id: 'photo_cta',
    label: 'Photo CTA',
    category: 'Modern',
    previewColors: [Color(0xFF0F172A), Color(0xFF14B8A6)],
    apply: (s) {
      _addDesignShape(s, _shape(x: 0, y: 0, w: 1, h: 0.55, fill: 0xCC0F172A));
      _addDesignShape(s, _shape(x: 0.22, y: 0.18, w: 0.56, h: 0.56, shape: NgmySlideShapeKind.parallelogram, fill: 0xEEFFFFFF, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.28, y: 0.24, w: 0.44, h: 0.44, shape: NgmySlideShapeKind.parallelogram, fill: 0xCCFFFFFF, rotation: 0.45));
      _addDesignShape(s, _shape(x: 0.34, y: 0.62, w: 0.22, h: 0.07, fill: 0xFF14B8A6));
      _addDesignShape(s, _shape(x: 0, y: 0, w: 0.07, h: 1, fill: 0xFF14B8A6));
      _bg(s, 0xFF1E293B, 0xFF0F172A);
    },
  ),
];

NgmySlide ngmySlideDesignPreview(String id) {
  final slide = NgmySlide(id: 'preview_$id', title: '', layout: NgmySlideLayout.blank);
  ngmyApplySlideDesignToCurrent(slide, id);
  return slide;
}

void ngmyApplySlideDesignToDeck(NgmySlideDeck deck, String designId) {
  for (final slide in deck.slides) {
    ngmyApplySlideDesignToCurrent(slide, designId);
  }
}

void ngmyApplySlideDesignToCurrent(NgmySlide slide, String designId) {
  _clearSlideDesign(slide);
  final def = ngmySlideDesignTemplates.firstWhere((d) => d.id == designId, orElse: () => ngmySlideDesignTemplates.first);
  _applyingDesignId = def.id;
  slide.slideDesignId = def.id;
  slide.designRevision++;
  try {
    def.apply(slide);
  } finally {
    _applyingDesignId = '';
  }
  // New list reference so Flutter drops old design layer widgets immediately.
  slide.elements = List<NgmySlideElement>.from(slide.elements);
}
