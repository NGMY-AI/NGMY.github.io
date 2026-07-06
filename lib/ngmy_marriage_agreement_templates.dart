import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

// Shared with ngmy_slides_marriage_agreement.dart (keep in sync)
const _kLocked = 'marriage_locked';
const _kField = 'marriage_field_';
const _kSign = 'marriage_sign_';

String _watermarkForState(String state) => "EMO YA M'BONDO ${state.toUpperCase()}";

// ── Palette ──────────────────────────────────────────────────────────────────
const _ink = 0xFF1A1208;
const _paper = 0xFFFFF8E7;
const _parchment = 0xFFF5E6C8;
const _cream = 0xFFFFFCF5;
const _forest = 0xFF1D4D2B;
const _deepGreen = 0xFF0F2E1A;
const _congoRed = 0xFFCE1021;
const _congoBlue = 0xFF007FFF;
const _congoYellow = 0xFFF7D618;
const _gold = 0xFFD4AF37;
const _darkGold = 0xFFB8860B;
const _crimson = 0xFFB22222;
const _white = 0xFFFFFFFF;

class NgmyMarriagePaperTemplate {
  const NgmyMarriagePaperTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.background,
    required this.ink,
    required this.titleGreen,
    required this.titleRed,
    required this.gold,
    required this.husbandColor,
    required this.wifeColor,
    required this.previewColors,
    required this.decorations,
    this.isDark = false,
  });

  final String id;
  final String name;
  final String description;
  final int background;
  final int ink;
  final int titleGreen;
  final int titleRed;
  final int gold;
  final int husbandColor;
  final int wifeColor;
  final List<Color> previewColors;
  final bool isDark;
  final List<NgmySlideElement> Function(double px, double py, double pw, double ph) decorations;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

NgmySlideElement _mLockedText(
  String text, {
  required double x,
  required double y,
  required double w,
  required double h,
  double fontSize = 14,
  FontWeight fontWeight = FontWeight.w600,
  TextAlign align = TextAlign.left,
  TextDecoration decoration = TextDecoration.none,
  String tag = '',
  int color = _ink,
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: h,
    text: text,
    fontSize: fontSize,
    fontWeight: fontWeight,
    decoration: decoration,
    color: color,
    align: align,
    fileName: tag.isEmpty ? _kLocked : '${_kLocked}_$tag',
  );
}

NgmySlideElement _mLockedShape({
  required NgmySlideShapeKind shape,
  required double x,
  required double y,
  required double w,
  required double h,
  int fillColor = 0x00000000,
  int strokeColor = _gold,
  double strokeWidth = 1.5,
  String tag = '',
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.shape,
    shape: shape,
    x: x,
    y: y,
    w: w,
    h: h,
    fillColor: fillColor,
    strokeColor: strokeColor,
    strokeWidth: strokeWidth,
    fileName: tag.isEmpty ? _kLocked : '${_kLocked}_$tag',
  );
}

List<NgmySlideElement> _mField(
  String key,
  String label,
  double x,
  double y,
  double w, {
  int labelColor = _ink,
  int lineColor = _ink,
  int textColor = _ink,
  double labelW = 0.34,
  double fontSize = 9,
}) {
  const lineH = 0.018;
  final lineY = y + 0.022;
  return [
    _mLockedText(label, x: x, y: y, w: labelW, h: 0.022, fontSize: fontSize, fontWeight: FontWeight.w700, color: labelColor, tag: 'lbl_$key'),
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x + labelW, y: lineY, w: w - labelW, h: 0.002, strokeColor: lineColor, strokeWidth: 1, tag: 'line_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x + labelW + 0.004,
      y: y + 0.002,
      w: w - labelW - 0.008,
      h: lineH,
      text: '',
      fontSize: fontSize,
      fontWeight: FontWeight.w700,
      color: textColor,
      align: TextAlign.left,
      fileName: '$_kField$key:${w.toStringAsFixed(3)}',
    ),
  ];
}

List<NgmySlideElement> _mClause(int n, String title, double x, double y, double w, {required int ink, required int gold}) {
  return [
    _mLockedText('$n.', x: x, y: y, w: 0.04, h: 0.022, fontSize: 9, fontWeight: FontWeight.w900, color: gold, tag: 'clause_n_$n'),
    _mLockedText(title, x: x + 0.04, y: y, w: 0.42, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w700, color: ink, tag: 'clause_t_$n'),
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x + 0.46, y: y + 0.02, w: w - 0.46, h: 0.002, strokeColor: ink, strokeWidth: 0.8, tag: 'clause_l_$n'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x + 0.46,
      y: y,
      w: w - 0.46,
      h: 0.022,
      text: '',
      fontSize: 8.5,
      fontWeight: FontWeight.w600,
      color: ink,
      align: TextAlign.left,
      fileName: '${_kField}clause_$n:${w.toStringAsFixed(3)}',
    ),
  ];
}

List<NgmySlideElement> _mSignBlock(String party, String label, double x, double y, double w, {required int color, required String signKey}) {
  return [
    _mLockedText(label, x: x, y: y, w: w, h: 0.024, fontSize: 9, fontWeight: FontWeight.w900, color: color, align: TextAlign.center, tag: 'sign_lbl_$party'),
    _mLockedText('Signature:', x: x, y: y + 0.028, w: 0.22, h: 0.02, fontSize: 8, fontWeight: FontWeight.w600, color: color, tag: 'sign_sig_$party'),
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x + 0.2, y: y + 0.046, w: w - 0.22, h: 0.002, strokeColor: color, strokeWidth: 1, tag: 'sign_line_$party'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.2,
      y: y + 0.03,
      w: w - 0.22,
      h: 0.022,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$_kSign$signKey',
    ),
    ..._mField('${party}_date', 'Date:', x, y + 0.052, w, labelColor: color, lineColor: color, textColor: color, labelW: 0.14, fontSize: 8),
  ];
}

List<NgmySlideElement> _drcSeal(double x, double y, double size, {int outer = _congoRed, int inner = _gold, int textColor = _white}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y, w: size, h: size * 0.45, strokeColor: outer, strokeWidth: 2.5, tag: 'seal_outer'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x + size * 0.06, y: y + size * 0.02, w: size * 0.88, h: size * 0.41, strokeColor: inner, strokeWidth: 1.2, tag: 'seal_inner'),
    _mLockedText('RÉPUBLIQUE', x: x - size * 0.1, y: y + size * 0.08, w: size * 1.2, h: 0.016, fontSize: 5.5, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'seal_r1'),
    _mLockedText('DÉMOCRATIQUE DU CONGO', x: x - size * 0.05, y: y + size * 0.14, w: size * 1.1, h: 0.016, fontSize: 5, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'seal_r2'),
    _mLockedText('NGMY', x: x + size * 0.2, y: y + size * 0.28, w: size * 0.6, h: 0.02, fontSize: 8, fontWeight: FontWeight.w900, align: TextAlign.center, color: inner, tag: 'seal_ngmy'),
  ];
}

void _diamondBand(List<NgmySlideElement> out, double x, double y, double w, double h) {
  const colors = [_congoRed, _congoYellow, _forest, _gold, _congoBlue];
  const cols = 12;
  final dw = w / cols;
  for (var i = 0; i < cols; i++) {
    out.add(_mLockedShape(
      shape: NgmySlideShapeKind.rectangle,
      x: x + i * dw,
      y: y,
      w: dw * 0.85,
      h: h,
      fillColor: colors[i % colors.length],
      strokeColor: colors[i % colors.length],
      strokeWidth: 0,
      tag: 'band_$i',
    ));
  }
}

void _flagCorners(List<NgmySlideElement> out, double px, double py, double pw, double ph) {
  const s = 0.028;
  for (final corner in [
    (px, py),
    (px + pw - s, py),
    (px, py + ph - s),
    (px + pw - s, py + ph - s),
  ]) {
    out.add(_mLockedShape(shape: NgmySlideShapeKind.rectangle, x: corner.$1, y: corner.$2, w: s, h: s * 0.33, fillColor: _congoBlue, strokeWidth: 0, tag: 'fc_b'));
    out.add(_mLockedShape(shape: NgmySlideShapeKind.rectangle, x: corner.$1, y: corner.$2 + s * 0.33, w: s, h: s * 0.33, fillColor: _congoYellow, strokeWidth: 0, tag: 'fc_y'));
    out.add(_mLockedShape(shape: NgmySlideShapeKind.rectangle, x: corner.$1, y: corner.$2 + s * 0.66, w: s, h: s * 0.34, fillColor: _congoRed, strokeWidth: 0, tag: 'fc_r'));
  }
}

// ── Decoration builders ────────────────────────────────────────────────────────

List<NgmySlideElement> _decoCongoHeritage(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _gold, strokeWidth: 3, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.01, y: py + 0.01, w: pw - 0.02, h: ph - 0.02, strokeColor: _gold, strokeWidth: 1, tag: 'frame2'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: px + pw * 0.38, y: py + 0.22, w: pw * 0.24, h: ph * 0.08, strokeColor: _gold, strokeWidth: 1.5, fillColor: 0x18D4AF37, tag: 'map'),
    _mLockedText('♥', x: px + pw * 0.42, y: py + 0.03, w: pw * 0.16, h: 0.04, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: _gold, tag: 'heart'),
  ];
  _diamondBand(out, px, py + ph - 0.025, pw, 0.025);
  return out;
}

List<NgmySlideElement> _decoClassicParchment(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _crimson, strokeWidth: 2.5, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.008, y: py + 0.008, w: pw - 0.016, h: ph - 0.016, strokeColor: _forest, strokeWidth: 1, tag: 'frame2'),
  ];
  _diamondBand(out, px, py + 0.01, 0.04, ph - 0.02);
  out.add(_mLockedText('🤝', x: px + pw * 0.4, y: py + 0.2, w: pw * 0.2, h: 0.05, fontSize: 28, align: TextAlign.center, tag: 'hands'));
  return out;
}

List<NgmySlideElement> _decoOfficialCream(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _gold, strokeWidth: 3, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.012, y: py + 0.012, w: pw - 0.024, h: ph - 0.024, strokeColor: _forest, strokeWidth: 1, tag: 'frame2'),
    _mLockedText('♥♥', x: px + pw * 0.38, y: py + 0.025, w: pw * 0.24, h: 0.035, fontSize: 16, fontWeight: FontWeight.w900, align: TextAlign.center, color: _gold, tag: 'hearts'),
    _mLockedText('∞', x: px + pw * 0.42, y: py + 0.055, w: pw * 0.16, h: 0.03, fontSize: 18, align: TextAlign.center, color: _gold, tag: 'rings'),
  ];
  _flagCorners(out, px, py, pw, ph);
  out.add(_mLockedShape(shape: NgmySlideShapeKind.circle, x: px + pw * 0.36, y: py + 0.2, w: pw * 0.28, h: ph * 0.09, strokeColor: _gold, strokeWidth: 1, fillColor: 0x10D4AF37, tag: 'map'));
  return out;
}

List<NgmySlideElement> _decoCeremonialDiamond(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.015, y: py + 0.015, w: pw - 0.03, h: ph - 0.03, strokeColor: _gold, strokeWidth: 1.5, tag: 'inner'),
  ];
  _diamondBand(out, px, py, pw, 0.018);
  _diamondBand(out, px, py + ph - 0.018, pw, 0.018);
  _diamondBand(out, px, py, 0.018, ph);
  _diamondBand(out, px + pw - 0.018, py, 0.018, ph);
  out.add(_mLockedText('🤝', x: px + pw * 0.38, y: py + 0.03, w: pw * 0.24, h: 0.04, fontSize: 24, align: TextAlign.center, tag: 'hands'));
  out.add(_mLockedShape(shape: NgmySlideShapeKind.circle, x: px + pw * 0.3, y: py + 0.18, w: pw * 0.4, h: ph * 0.12, strokeColor: 0x30D4AF37, strokeWidth: 1, fillColor: 0x08D4AF37, tag: 'watermark'));
  return out;
}

List<NgmySlideElement> _decoForestGold(double px, double py, double pw, double ph) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _gold, strokeWidth: 4, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.018, y: py + 0.018, w: pw - 0.036, h: ph - 0.036, strokeColor: _gold, strokeWidth: 1, tag: 'frame2'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: 0.014, fillColor: _congoBlue, strokeWidth: 0, tag: 'bar_b'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py + 0.014, w: pw, h: 0.014, fillColor: _congoYellow, strokeWidth: 0, tag: 'bar_y'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py + 0.028, w: pw, h: 0.014, fillColor: _congoRed, strokeWidth: 0, tag: 'bar_r'),
    _mLockedText('✦', x: px + pw * 0.44, y: py + 0.04, w: pw * 0.12, h: 0.03, fontSize: 18, align: TextAlign.center, color: _gold, tag: 'star'),
  ];
}

List<NgmySlideElement> _decoIvoryElegance(double px, double py, double pw, double ph) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.02, y: py + 0.02, w: pw - 0.04, h: ph - 0.04, strokeColor: _darkGold, strokeWidth: 1, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.03, y: py + 0.03, w: pw - 0.06, h: ph - 0.06, strokeColor: _forest, strokeWidth: 0.8, tag: 'frame2'),
    _mLockedText('— ✦ —', x: px + pw * 0.3, y: py + 0.045, w: pw * 0.4, h: 0.025, fontSize: 12, align: TextAlign.center, color: _darkGold, tag: 'flourish'),
  ];
}

List<NgmySlideElement> _decoCrimsonTradition(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _crimson, strokeWidth: 3, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.01, y: py + 0.01, w: pw - 0.02, h: ph - 0.02, strokeColor: _forest, strokeWidth: 1.5, tag: 'frame2'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py + ph - 0.02, w: pw, h: 0.02, fillColor: _crimson, strokeWidth: 0, tag: 'bottom'),
  ];
  _diamondBand(out, px, py, pw, 0.012);
  return out;
}

List<NgmySlideElement> _decoGoldenFrame(double px, double py, double pw, double ph) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _gold, strokeWidth: 5, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.008, y: py + 0.008, w: pw - 0.016, h: ph - 0.016, strokeColor: _darkGold, strokeWidth: 2, tag: 'frame2'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.016, y: py + 0.016, w: pw - 0.032, h: ph - 0.032, strokeColor: _gold, strokeWidth: 1, tag: 'frame3'),
    _mLockedText('◆', x: px + pw * 0.44, y: py + 0.035, w: pw * 0.12, h: 0.03, fontSize: 16, align: TextAlign.center, color: _gold, tag: 'diamond'),
  ];
}

List<NgmySlideElement> _decoUnityHands(double px, double py, double pw, double ph) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _forest, strokeWidth: 2, tag: 'frame'),
    _mLockedText('🤝', x: px + pw * 0.35, y: py + 0.025, w: pw * 0.3, h: 0.05, fontSize: 32, align: TextAlign.center, tag: 'hands'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: px + pw * 0.32, y: py + 0.2, w: pw * 0.36, h: ph * 0.1, strokeColor: _forest, strokeWidth: 1, fillColor: 0x081D4D2B, tag: 'map'),
    _mLockedText('UNITY • RESPECT • LOVE', x: px + pw * 0.15, y: py + ph - 0.04, w: pw * 0.7, h: 0.022, fontSize: 7, fontWeight: FontWeight.w800, align: TextAlign.center, color: _forest, tag: 'motto'),
  ];
}

List<NgmySlideElement> _decoNgmyOfficial(double px, double py, double pw, double ph) {
  final out = <NgmySlideElement>[
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw, h: ph, strokeColor: _congoBlue, strokeWidth: 3, tag: 'frame'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.01, y: py + 0.01, w: pw - 0.02, h: ph - 0.02, strokeColor: _gold, strokeWidth: 1.5, tag: 'frame2'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw / 3, h: 0.01, fillColor: _congoBlue, strokeWidth: 0, tag: 'bar_b'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + pw / 3, y: py, w: pw / 3, h: 0.01, fillColor: _congoYellow, strokeWidth: 0, tag: 'bar_y'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 2 * pw / 3, y: py, w: pw / 3, h: 0.01, fillColor: _congoRed, strokeWidth: 0, tag: 'bar_r'),
  ];
  out.addAll(_drcSeal(px + pw - 0.18, py + ph - 0.11, 0.16, outer: _congoBlue, inner: _gold, textColor: _ink));
  return out;
}

// ── Template registry ──────────────────────────────────────────────────────────

const List<NgmyMarriagePaperTemplate> kNgmyMarriagePaperTemplates = [
  NgmyMarriagePaperTemplate(
    id: 'congo_heritage',
    name: 'Congo Heritage',
    description: 'Dark green cultural paper with gold accents and African border.',
    background: _deepGreen,
    ink: _white,
    titleGreen: _congoYellow,
    titleRed: _gold,
    gold: _gold,
    husbandColor: _congoYellow,
    wifeColor: _congoRed,
    previewColors: [Color(_deepGreen), Color(_gold), Color(_congoRed)],
    isDark: true,
    decorations: _decoCongoHeritage,
  ),
  NgmyMarriagePaperTemplate(
    id: 'classic_parchment',
    name: 'Classic Parchment',
    description: 'Aged parchment with red & green title and diamond side border.',
    background: _parchment,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _darkGold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_parchment), Color(_forest), Color(_crimson)],
    decorations: _decoClassicParchment,
  ),
  NgmyMarriagePaperTemplate(
    id: 'official_cream',
    name: 'Official Cream',
    description: 'Clean cream paper with gold frame and DRC flag corners.',
    background: _cream,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _gold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_cream), Color(_gold), Color(_forest)],
    decorations: _decoOfficialCream,
  ),
  NgmyMarriagePaperTemplate(
    id: 'ceremonial_diamond',
    name: 'Ceremonial Diamond',
    description: 'Formal parchment surrounded by colorful diamond pattern border.',
    background: _parchment,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _gold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_parchment), Color(_congoRed), Color(_gold)],
    decorations: _decoCeremonialDiamond,
  ),
  NgmyMarriagePaperTemplate(
    id: 'forest_gold',
    name: 'Forest & Gold',
    description: 'Rich forest green panel with Congo tricolor bar and gold frame.',
    background: _forest,
    ink: _white,
    titleGreen: _congoYellow,
    titleRed: _gold,
    gold: _gold,
    husbandColor: _congoYellow,
    wifeColor: 0xFFFF9999,
    previewColors: [Color(_forest), Color(_gold), Color(_congoBlue)],
    isDark: true,
    decorations: _decoForestGold,
  ),
  NgmyMarriagePaperTemplate(
    id: 'ivory_elegance',
    name: 'Ivory Elegance',
    description: 'Bright ivory formal paper with delicate gold double lines.',
    background: 0xFFFFFAF0,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _darkGold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(0xFFFFFAF0), Color(_darkGold), Color(_forest)],
    decorations: _decoIvoryElegance,
  ),
  NgmyMarriagePaperTemplate(
    id: 'crimson_tradition',
    name: 'Crimson Tradition',
    description: 'Traditional parchment with bold crimson frame and border band.',
    background: _paper,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _darkGold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_paper), Color(_crimson), Color(_forest)],
    decorations: _decoCrimsonTradition,
  ),
  NgmyMarriagePaperTemplate(
    id: 'golden_frame',
    name: 'Golden Frame',
    description: 'Premium triple gold frame on warm paper — very formal.',
    background: _paper,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _gold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_paper), Color(_gold), Color(_darkGold)],
    decorations: _decoGoldenFrame,
  ),
  NgmyMarriagePaperTemplate(
    id: 'unity_hands',
    name: 'Unity & Hands',
    description: 'Handshake motif with Congo map watermark — unity focused.',
    background: _cream,
    ink: _ink,
    titleGreen: _forest,
    titleRed: _crimson,
    gold: _gold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_cream), Color(_forest), Color(_gold)],
    decorations: _decoUnityHands,
  ),
  NgmyMarriagePaperTemplate(
    id: 'ngmy_official',
    name: 'NGMY Official',
    description: 'Official NGMY stamp with Congo tricolor — state-ready document.',
    background: _paper,
    ink: _ink,
    titleGreen: _congoBlue,
    titleRed: _congoRed,
    gold: _gold,
    husbandColor: _forest,
    wifeColor: _crimson,
    previewColors: [Color(_paper), Color(_congoBlue), Color(_gold)],
    decorations: _decoNgmyOfficial,
  ),
];

NgmyMarriagePaperTemplate? ngmyMarriageTemplateById(String id) {
  for (final t in kNgmyMarriagePaperTemplates) {
    if (t.id == id) return t;
  }
  return null;
}

// ── Paper content builder ──────────────────────────────────────────────────────

List<NgmySlideElement> _buildPaperContent(NgmyMarriagePaperTemplate tpl, String state) {
  const px = 0.06;
  const pw = 0.88;
  const py = 0.02;
  const ph = 0.96;
  final ink = tpl.ink;
  final gold = tpl.gold;
  final hColor = tpl.husbandColor;
  final wColor = tpl.wifeColor;

  final elements = <NgmySlideElement>[
    ...tpl.decorations(px, py, pw, ph),

    // Title
    _mLockedText('MARRIAGE', x: px + 0.04, y: py + 0.07, w: pw - 0.08, h: 0.038, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.titleGreen, tag: 'title_m'),
    _mLockedText('AGREEMENT', x: px + 0.04, y: py + 0.1, w: pw - 0.08, h: 0.038, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.titleRed, tag: 'title_a'),

    // Intro
    _mLockedText(
      'This Marriage Agreement is made and entered into on this',
      x: px + 0.04,
      y: py + 0.145,
      w: pw - 0.08,
      h: 0.022,
      fontSize: 8.5,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: ink,
      tag: 'intro1',
    ),
    ..._mField('date_day', '', px + 0.18, py + 0.168, 0.1, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 9),
    _mLockedText('day of', x: px + 0.29, y: py + 0.168, w: 0.1, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w600, color: ink, tag: 'intro2'),
    ..._mField('date_month', '', px + 0.38, py + 0.168, 0.28, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 9),
    _mLockedText(', 20', x: px + 0.67, y: py + 0.168, w: 0.06, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w600, color: ink, tag: 'intro3'),
    ..._mField('date_year', '', px + 0.72, py + 0.168, 0.12, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 9),
    _mLockedText('by and between:', x: px + 0.04, y: py + 0.192, w: pw - 0.08, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w700, align: TextAlign.center, color: ink, tag: 'intro4'),

    // Party A
    _mLockedText('PARTY A (HUSBAND)', x: px + 0.02, y: py + 0.218, w: 0.4, h: 0.024, fontSize: 9.5, fontWeight: FontWeight.w900, color: hColor, tag: 'party_a'),
    ..._mField('husband_name', 'Full Name:', px + 0.02, py + 0.244, 0.42, labelColor: hColor, lineColor: hColor, textColor: ink, labelW: 0.22, fontSize: 8.5),
    ..._mField('husband_dob', 'Date of Birth:', px + 0.02, py + 0.272, 0.42, labelColor: hColor, lineColor: hColor, textColor: ink, labelW: 0.28, fontSize: 8.5),
    ..._mField('husband_pob', 'Place of Birth:', px + 0.02, py + 0.3, 0.42, labelColor: hColor, lineColor: hColor, textColor: ink, labelW: 0.28, fontSize: 8.5),
    ..._mField('husband_address', 'Address:', px + 0.02, py + 0.328, 0.42, labelColor: hColor, lineColor: hColor, textColor: ink, labelW: 0.2, fontSize: 8.5),

    // Party B
    _mLockedText('PARTY B (WIFE)', x: px + 0.48, y: py + 0.218, w: 0.4, h: 0.024, fontSize: 9.5, fontWeight: FontWeight.w900, color: wColor, tag: 'party_b'),
    ..._mField('wife_name', 'Full Name:', px + 0.48, py + 0.244, 0.42, labelColor: wColor, lineColor: wColor, textColor: ink, labelW: 0.22, fontSize: 8.5),
    ..._mField('wife_dob', 'Date of Birth:', px + 0.48, py + 0.272, 0.42, labelColor: wColor, lineColor: wColor, textColor: ink, labelW: 0.28, fontSize: 8.5),
    ..._mField('wife_pob', 'Place of Birth:', px + 0.48, py + 0.3, 0.42, labelColor: wColor, lineColor: wColor, textColor: ink, labelW: 0.28, fontSize: 8.5),
    ..._mField('wife_address', 'Address:', px + 0.48, py + 0.328, 0.42, labelColor: wColor, lineColor: wColor, textColor: ink, labelW: 0.2, fontSize: 8.5),

    // Terms
    _mLockedText('WE, THE UNDERSIGNED, AGREE AS FOLLOWS:', x: px + 0.04, y: py + 0.362, w: pw - 0.08, h: 0.024, fontSize: 9, fontWeight: FontWeight.w900, color: tpl.titleGreen, tag: 'terms_hdr'),
    ..._mClause(1, 'Purpose of the Agreement', px + 0.04, py + 0.388, pw - 0.08, ink: ink, gold: gold),
    ..._mClause(2, 'Property & Assets', px + 0.04, py + 0.414, pw - 0.08, ink: ink, gold: gold),
    ..._mClause(3, 'Responsibilities', px + 0.04, py + 0.44, pw - 0.08, ink: ink, gold: gold),
    ..._mClause(4, 'Financial Matters', px + 0.04, py + 0.466, pw - 0.08, ink: ink, gold: gold),
    ..._mClause(5, 'Other Provisions', px + 0.04, py + 0.492, pw - 0.08, ink: ink, gold: gold),

    // Affirmation
    _mLockedText(
      'We affirm that this Agreement is made in good faith, with mutual understanding, respect and love, in accordance with the laws and customs of the Democratic Republic of Congo.',
      x: px + 0.05,
      y: py + 0.525,
      w: pw - 0.1,
      h: 0.05,
      fontSize: 7.5,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: ink,
      tag: 'affirm',
    ),

    // Signatures
    ..._mSignBlock('husband', 'PARTY A (HUSBAND)', px + 0.02, py + 0.58, 0.28, color: hColor, signKey: 'husband'),
    _mLockedText('WITNESSES', x: px + 0.34, y: py + 0.58, w: 0.28, h: 0.024, fontSize: 9, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'witness_hdr'),
    _mLockedText('1.', x: px + 0.34, y: py + 0.61, w: 0.04, h: 0.02, fontSize: 9, fontWeight: FontWeight.w700, color: ink, tag: 'w1n'),
    ..._mField('witness_1', '', px + 0.37, py + 0.608, 0.24, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8.5),
    _mLockedText('2.', x: px + 0.34, y: py + 0.638, w: 0.04, h: 0.02, fontSize: 9, fontWeight: FontWeight.w700, color: ink, tag: 'w2n'),
    ..._mField('witness_2', '', px + 0.37, py + 0.636, 0.24, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8.5),
    ..._mSignBlock('wife', 'PARTY B (WIFE)', px + 0.62, py + 0.58, 0.28, color: wColor, signKey: 'wife'),

    // Seal (if not ngmy_official which has it in decorations)
    if (tpl.id != 'ngmy_official') ..._drcSeal(px + pw - 0.2, py + ph - 0.1, 0.18, outer: tpl.titleRed, inner: gold, textColor: tpl.isDark ? _white : _ink),

    // State watermark
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: px + 0.04,
      y: py + ph - 0.055,
      w: pw - 0.08,
      h: 0.04,
      text: _watermarkForState(state),
      fontSize: 10,
      fontWeight: FontWeight.w800,
      color: tpl.isDark ? gold : _congoBlue,
      align: TextAlign.center,
      fileName: '${_kLocked}_watermark',
    ),
  ];

  return elements;
}

/// Builds a portrait Marriage Agreement deck from a paper template.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({
  required String templateId,
  required String state,
}) {
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;
  final elements = _buildPaperContent(tpl, state);

  final slide = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Marriage Agreement',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: elements,
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Marriage Agreement — ${tpl.name} ($state)',
    themeId: 'marriage_${tpl.id}',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: 'marriage_agreement',
    marriageState: state,
    slides: [slide],
  );
}

void ngmyUpdateMarriageDeckMeta(NgmySlideDeck deck, {String? state, String? templateId}) {
  if (state != null) {
    deck.marriageState = state;
    for (final slide in deck.slides) {
      for (final el in slide.elements) {
        if (el.fileName == '${_kLocked}_watermark') {
          el.text = _watermarkForState(state);
        }
      }
    }
  }
  if (templateId != null) {
    final tpl = ngmyMarriageTemplateById(templateId);
    if (tpl != null) {
      deck.themeId = 'marriage_${tpl.id}';
      deck.name = 'Marriage Agreement — ${tpl.name} (${deck.marriageState ?? 'U.S.'})';
    }
  } else if (state != null) {
    final tplId = deck.themeId.replaceFirst('marriage_', '');
    final tpl = ngmyMarriageTemplateById(tplId);
    deck.name = 'Marriage Agreement — ${tpl?.name ?? 'Paper'} ($state)';
  }
}

Future<String?> showNgmyMarriageTemplatePicker(BuildContext context) async {
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => const _NgmyMarriageTemplatePickerSheet(),
  );
}

class _NgmyMarriageTemplatePickerSheet extends StatelessWidget {
  const _NgmyMarriageTemplatePickerSheet();

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.5,
      maxChildSize: 0.96,
      builder: (_, scrollCtrl) => Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF111827) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 8),
              child: Column(
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(2)),
                    ),
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(colors: [Color(0xFF1D4D2B), Color(0xFF0F2E1A)]),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: const Icon(Icons.article_rounded, color: Colors.white, size: 22),
                      ),
                      const SizedBox(width: 12),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Choose a paper template', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
                            Text('10 formal Marriage Agreement designs', style: TextStyle(fontSize: 11, color: Color(0xFF64748B))),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Expanded(
              child: GridView.builder(
                controller: scrollCtrl,
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 0.72,
                ),
                itemCount: kNgmyMarriagePaperTemplates.length,
                itemBuilder: (_, i) {
                  final tpl = kNgmyMarriagePaperTemplates[i];
                  return _TemplateCard(template: tpl, onTap: () => Navigator.pop(context, tpl.id));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TemplateCard extends StatelessWidget {
  const _TemplateCard({required this.template, required this.onTap});

  final NgmyMarriagePaperTemplate template;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
            color: isDark ? const Color(0xFF1F2937) : const Color(0xFFF8FAFC),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: Container(
                  margin: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Color(template.background),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: Color(template.gold).withValues(alpha: 0.6), width: 1.5),
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: template.previewColors,
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'MARRIAGE',
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.w900,
                          color: Color(template.titleGreen),
                          letterSpacing: 0.5,
                        ),
                      ),
                      Text(
                        'AGREEMENT',
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.w900,
                          color: Color(template.titleRed),
                          letterSpacing: 0.5,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Container(
                        width: 28,
                        height: 28,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(color: Color(template.gold), width: 1.5),
                        ),
                        child: Center(
                          child: Text('NGMY', style: TextStyle(fontSize: 5, fontWeight: FontWeight.w900, color: Color(template.gold))),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(template.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                    const SizedBox(height: 2),
                    Text(
                      template.description,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 9, color: isDark ? Colors.white54 : const Color(0xFF64748B), height: 1.3),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
