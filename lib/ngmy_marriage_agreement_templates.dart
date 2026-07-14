import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_models.dart';

// Shared with ngmy_slides_marriage_agreement.dart (keep in sync)
const _kLocked = 'marriage_locked';
const _kField = 'marriage_field_';
const _kSign = 'marriage_sign_';

String _watermarkForState(String state) => "EMO YA M'BONDO ${state.toUpperCase()}";

/// Soft underlines — never dark/black (picker + print).
const _softLine = 0xFFE2D8C8;

// ── Palette ──────────────────────────────────────────────────────────────────
const _ink = 0xFF1A1208;
const _parchment = 0xFFF5E6C8;
const _cream = 0xFFFFFCF5;
const _gold = 0xFFD4AF37;
const _darkGold = 0xFFB8860B;
const _white = 0xFFFFFFFF;
const _bronze = 0xFF9C6B2E;
const _sand = 0xFFE3C589;
const _sandDark = 0xFF6B4A12;
const _nearBlack = 0xFF111111;

class NgmyMarriagePaperTemplate {
  const NgmyMarriagePaperTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.paperStyle,
    required this.background,
    required this.ink,
    required this.titleGreen,
    required this.titleRed,
    required this.gold,
    required this.husbandColor,
    required this.wifeColor,
    required this.previewColors,
    this.isDark = false,
  });

  final String id;
  final String name;
  final String description;
  final NgmyMarriagePaperStyle paperStyle;
  final int background;
  final int ink;
  final int titleGreen;
  final int titleRed;
  final int gold;
  final int husbandColor;
  final int wifeColor;
  final List<Color> previewColors;
  final bool isDark;
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

NgmySlideElement _mBgImage(String dataUrl) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.image,
    x: 0,
    y: 0,
    w: 1,
    h: 1,
    imageRef: dataUrl,
    fileName: '${_kLocked}_bg',
  );
}

NgmySlideElement _mRule(double x, double y, double w, int color, {String tag = 'rule'}) {
  return _mLockedShape(
    shape: NgmySlideShapeKind.line,
    x: x,
    y: y,
    w: w,
    h: 0.002,
    strokeColor: color,
    strokeWidth: 1,
    tag: tag,
  );
}

List<NgmySlideElement> _mPartyColumn({
  required String prefix,
  required String heading,
  required double x,
  required double y,
  required double w,
  required int accent,
  required int ink,
  required int panelFill,
}) {
  return [
    _mLockedShape(
      shape: NgmySlideShapeKind.rectangle,
      x: x,
      y: y,
      w: w,
      h: 0.138,
      fillColor: panelFill,
      strokeColor: _softLine,
      strokeWidth: 0.9,
      tag: 'panel_$prefix',
    ),
    _mLockedText(heading, x: x + 0.01, y: y + 0.006, w: w - 0.02, h: 0.024, fontSize: 9, fontWeight: FontWeight.w900, color: accent, align: TextAlign.center, tag: 'hdr_$prefix'),
    ..._mField('${prefix}_name', 'Full Name:', x + 0.012, y + 0.032, w - 0.024, labelColor: accent, textColor: ink, labelW: 0.24, fontSize: 8),
    ..._mField('${prefix}_dob', 'Date of Birth:', x + 0.012, y + 0.058, w - 0.024, labelColor: accent, textColor: ink, labelW: 0.3, fontSize: 8),
    ..._mField('${prefix}_pob', 'Place of Birth:', x + 0.012, y + 0.084, w - 0.024, labelColor: accent, textColor: ink, labelW: 0.3, fontSize: 8),
    ..._mField('${prefix}_address', 'Address:', x + 0.012, y + 0.11, w - 0.024, labelColor: accent, textColor: ink, labelW: 0.22, fontSize: 8),
  ];
}

List<NgmySlideElement> _mPartyOpen({
  required String prefix,
  required String heading,
  required double x,
  required double y,
  required double w,
  required int accent,
  required int ink,
}) {
  return [
    _mLockedText(heading, x: x, y: y, w: w, h: 0.022, fontSize: 10, fontWeight: FontWeight.w900, color: accent, tag: 'hdr_$prefix'),
    ..._mField('${prefix}_name', 'Name', x, y + 0.028, w, labelColor: ink, textColor: ink, labelW: 0.18, fontSize: 8),
    ..._mField('${prefix}_dob', 'Born', x, y + 0.058, w * 0.48, labelColor: ink, textColor: ink, labelW: 0.16, fontSize: 8),
    ..._mField('${prefix}_pob', 'At', x + w * 0.52, y + 0.058, w * 0.48, labelColor: ink, textColor: ink, labelW: 0.1, fontSize: 8),
    ..._mField('${prefix}_address', 'Address', x, y + 0.088, w, labelColor: ink, textColor: ink, labelW: 0.2, fontSize: 8),
  ];
}

List<NgmySlideElement> _mField(
  String key,
  String label,
  double x,
  double y,
  double w, {
  int labelColor = _ink,
  int lineColor = _softLine,
  int textColor = _ink,
  double labelW = 0.34,
  double fontSize = 9,
}) {
  const lineH = 0.018;
  final lineY = y + 0.022;
  final writeW = (w - labelW - 0.008).clamp(0.05, 1.0);
  return [
    _mLockedText(label, x: x, y: y, w: labelW, h: 0.022, fontSize: fontSize, fontWeight: FontWeight.w700, color: labelColor, tag: 'lbl_$key'),
    if (w > labelW + 0.02)
      _mLockedShape(shape: NgmySlideShapeKind.line, x: x + labelW, y: lineY, w: w - labelW, h: 0.002, strokeColor: lineColor, strokeWidth: 0.7, tag: 'line_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x + labelW + 0.004,
      y: y + 0.002,
      w: writeW,
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
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x + 0.46, y: y + 0.02, w: w - 0.46, h: 0.002, strokeColor: _softLine, strokeWidth: 0.65, tag: 'clause_l_$n'),
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

List<NgmySlideElement> _mClauseBox(int n, String title, double x, double y, double w, {required int ink}) {
  return [
    _mLockedText('$n. $title', x: x, y: y, w: w, h: 0.018, fontSize: 8, fontWeight: FontWeight.w800, color: ink, tag: 'clause_t_$n'),
    _mLockedShape(
      shape: NgmySlideShapeKind.rectangle,
      x: x,
      y: y + 0.02,
      w: w,
      h: 0.028,
      fillColor: 0x08FFFFFF,
      strokeColor: _softLine,
      strokeWidth: 0.7,
      tag: 'clause_box_$n',
    ),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x + 0.01,
      y: y + 0.022,
      w: w - 0.02,
      h: 0.024,
      text: '',
      fontSize: 8,
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
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x + 0.2, y: y + 0.046, w: w - 0.22, h: 0.002, strokeColor: _softLine, strokeWidth: 0.9, tag: 'sign_line_$party'),
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
    ..._mField('${party}_date', 'Date:', x, y + 0.052, w, labelColor: color, textColor: color, labelW: 0.14, fontSize: 8),
  ];
}

List<NgmySlideElement> _wm(String state, double x, double y, double w, {int color = _softLine}) {
  return [
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x,
      y: y,
      w: w,
      h: 0.03,
      text: _watermarkForState(state),
      fontSize: 8,
      fontWeight: FontWeight.w700,
      color: color,
      align: TextAlign.center,
      fileName: '${_kLocked}_watermark',
    ),
  ];
}

// ── Template registry ──────────────────────────────────────────────────────────

const List<NgmyMarriagePaperTemplate> kNgmyMarriagePaperTemplates = [
  NgmyMarriagePaperTemplate(
    id: 'congo_heritage',
    name: 'Quiet Linen',
    description: 'Side-by-side parties · terms in the middle.',
    paperStyle: NgmyMarriagePaperStyle.congoHeritage,
    background: _cream,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: _bronze,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(_cream), Color(_ink), Color(_bronze)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'classic_parchment',
    name: 'Warm Parchment',
    description: 'Stacked Party A / Party B · write boxes for articles.',
    paperStyle: NgmyMarriagePaperStyle.classicParchment,
    background: _parchment,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: _darkGold,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(_parchment), Color(_ink), Color(_darkGold)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'official_cream',
    name: 'Plain Official',
    description: 'Banner header · witness lines · formal signs.',
    paperStyle: NgmyMarriagePaperStyle.officialCream,
    background: _white,
    ink: _nearBlack,
    titleGreen: _nearBlack,
    titleRed: _nearBlack,
    gold: 0xFF6B6B6B,
    husbandColor: _nearBlack,
    wifeColor: _nearBlack,
    previewColors: [Color(_white), Color(_nearBlack), Color(0xFF6B6B6B)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'ceremonial_diamond',
    name: 'Soft Stone',
    description: 'Terms first at the top · parties below.',
    paperStyle: NgmyMarriagePaperStyle.ceremonialDiamond,
    background: 0xFFF9F6F1,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: 0xFF6B5E4E,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(0xFFF9F6F1), Color(_ink), Color(0xFF6B5E4E)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'forest_gold',
    name: 'Sage Sheet',
    description: 'Day · Month · Year row across the top.',
    paperStyle: NgmyMarriagePaperStyle.forestGold,
    background: 0xFFF5F7F3,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: 0xFF5A6B55,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(0xFFF5F7F3), Color(_ink), Color(0xFF5A6B55)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'ivory_elegance',
    name: 'Ivory Calm',
    description: 'Centered ribbon title · boxed terms.',
    paperStyle: NgmyMarriagePaperStyle.ivoryElegance,
    background: _cream,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: 0xFFA0896B,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(_cream), Color(_ink), Color(0xFFA0896B)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'crimson_tradition',
    name: 'Blush Paper',
    description: 'Signatures mid-page · articles underneath.',
    paperStyle: NgmyMarriagePaperStyle.crimsonTradition,
    background: 0xFFFBF7F6,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: 0xFF7A5555,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(0xFFFBF7F6), Color(_ink), Color(0xFF7A5555)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'golden_frame',
    name: 'Champagne Paper',
    description: 'I · II · III section bands down the page.',
    paperStyle: NgmyMarriagePaperStyle.goldenFrame,
    background: 0xFFFFFBF2,
    ink: _ink,
    titleGreen: _ink,
    titleRed: _ink,
    gold: 0xFFA6843A,
    husbandColor: _ink,
    wifeColor: _ink,
    previewColors: [Color(0xFFFFFBF2), Color(_ink), Color(0xFFA6843A)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'unity_hands',
    name: 'Sand Document',
    description: 'Single full-width column · parties stacked.',
    paperStyle: NgmyMarriagePaperStyle.unityHands,
    background: _sand,
    ink: _sandDark,
    titleGreen: _sandDark,
    titleRed: _sandDark,
    gold: _sandDark,
    husbandColor: _sandDark,
    wifeColor: _sandDark,
    previewColors: [Color(_sand), Color(_sandDark), Color(_sandDark)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'ngmy_official',
    name: 'White Formal',
    description: 'Flat field list · no party boxes.',
    paperStyle: NgmyMarriagePaperStyle.ngmyOfficial,
    background: _white,
    ink: _nearBlack,
    titleGreen: _nearBlack,
    titleRed: _nearBlack,
    gold: 0xFF555555,
    husbandColor: _nearBlack,
    wifeColor: _nearBlack,
    previewColors: [Color(_white), Color(_nearBlack), Color(0xFF555555)],
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
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  final base = <NgmySlideElement>[_mBgImage(bgUrl)];
  switch (tpl.id) {
    case 'classic_parchment':
      return [...base, ..._layoutStackedParties(tpl, state)];
    case 'official_cream':
      return [...base, ..._layoutBannerHeader(tpl, state)];
    case 'ceremonial_diamond':
      return [...base, ..._layoutTermsFirst(tpl, state)];
    case 'forest_gold':
      return [...base, ..._layoutWideDateTop(tpl, state)];
    case 'ivory_elegance':
      return [...base, ..._layoutCenteredRibbon(tpl, state)];
    case 'crimson_tradition':
      return [...base, ..._layoutSignaturesMid(tpl, state)];
    case 'golden_frame':
      return [...base, ..._layoutThreeBand(tpl, state)];
    case 'unity_hands':
      return [...base, ..._layoutSingleColumn(tpl, state)];
    case 'ngmy_official':
      return [...base, ..._layoutMinimalFormal(tpl, state)];
    case 'congo_heritage':
    default:
      return [...base, ..._layoutSideBySide(tpl, state)];
  }
}

List<NgmySlideElement> _layoutSideBySide(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.08;
  const cw = 0.84;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('MARRIAGE AGREEMENT', x: cx, y: 0.07, w: cw, h: 0.04, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText(state.toUpperCase(), x: cx, y: 0.11, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w700, align: TextAlign.center, color: gold, tag: 'state'),
    _mRule(cx + 0.22, 0.138, cw - 0.44, _softLine, tag: 'r1'),
    ..._mField('date_full', 'Date', cx + 0.2, 0.155, 0.44, labelColor: ink, textColor: ink, labelW: 0.12, fontSize: 8),
    ..._mPartyColumn(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.2, w: 0.4, accent: gold, ink: ink, panelFill: 0x12FFFFFF),
    ..._mPartyColumn(prefix: 'wife', heading: 'WIFE', x: cx + 0.44, y: 0.2, w: 0.4, accent: gold, ink: ink, panelFill: 0x12FFFFFF),
    _mLockedText('AGREED TERMS', x: cx, y: 0.36, w: cw, h: 0.022, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'terms'),
    ..._mClause(1, 'Purpose', cx, 0.39, cw, ink: ink, gold: gold),
    ..._mClause(2, 'Property', cx, 0.425, cw, ink: ink, gold: gold),
    ..._mClause(3, 'Duties', cx, 0.46, cw, ink: ink, gold: gold),
    ..._mClause(4, 'Finance', cx, 0.495, cw, ink: ink, gold: gold),
    ..._mClause(5, 'Other', cx, 0.53, cw, ink: ink, gold: gold),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.6, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.46, 0.6, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.9, cw),
  ];
}

List<NgmySlideElement> _layoutStackedParties(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.1;
  const cw = 0.8;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('Certificate of Marriage Covenant', x: cx, y: 0.055, w: cw, h: 0.034, fontSize: 15, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Date of this agreement', x: cx, y: 0.095, w: 0.36, h: 0.02, fontSize: 8, color: ink, tag: 'dl'),
    ..._mField('date_full', '', cx + 0.38, 0.092, 0.42, labelW: 0.02, fontSize: 8),
    ..._mPartyOpen(prefix: 'husband', heading: 'PARTY A — HUSBAND', x: cx, y: 0.13, w: cw, accent: gold, ink: ink),
    ..._mPartyOpen(prefix: 'wife', heading: 'PARTY B — WIFE', x: cx, y: 0.28, w: cw, accent: gold, ink: ink),
    _mLockedText('Articles', x: cx, y: 0.43, w: cw, h: 0.022, fontSize: 11, fontWeight: FontWeight.w900, color: ink, tag: 'art'),
    ..._mClauseBox(1, 'Purpose of the Agreement', cx, 0.458, cw, ink: ink),
    ..._mClauseBox(2, 'Property & Assets', cx, 0.52, cw, ink: ink),
    ..._mClauseBox(3, 'Responsibilities', cx, 0.582, cw, ink: ink),
    ..._mClauseBox(4, 'Financial Matters', cx, 0.644, cw, ink: ink),
    ..._mClauseBox(5, 'Other Provisions', cx, 0.706, cw, ink: ink),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.78, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.42, 0.78, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.92, cw),
  ];
}

List<NgmySlideElement> _layoutBannerHeader(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.08;
  const cw = 0.84;
  final ink = tpl.ink;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.06, y: 0.05, w: 0.88, h: 0.085, fillColor: 0x0A000000, strokeColor: _softLine, strokeWidth: 0.9, tag: 'banner'),
    _mLockedText('OFFICIAL MARRIAGE AGREEMENT', x: cx, y: 0.062, w: cw, h: 0.03, fontSize: 14, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText(state.toUpperCase(), x: cx, y: 0.098, w: cw, h: 0.02, fontSize: 9, align: TextAlign.center, color: ink, tag: 'st'),
    ..._mField('date_full', 'Agreement date', cx, 0.155, cw, labelW: 0.28, fontSize: 8),
    _mLockedText('The parties', x: cx, y: 0.2, w: cw, h: 0.02, fontSize: 10, fontWeight: FontWeight.w900, color: ink, tag: 'p'),
    ..._mPartyOpen(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.225, w: 0.4, accent: ink, ink: ink),
    ..._mPartyOpen(prefix: 'wife', heading: 'WIFE', x: cx + 0.44, y: 0.225, w: 0.4, accent: ink, ink: ink),
    _mLockedText('Terms of covenant', x: cx, y: 0.39, w: cw, h: 0.022, fontSize: 10, fontWeight: FontWeight.w900, color: ink, tag: 't'),
    ..._mClause(1, 'Purpose', cx, 0.42, cw, ink: ink, gold: 0xFF888888),
    ..._mClause(2, 'Property', cx, 0.455, cw, ink: ink, gold: 0xFF888888),
    ..._mClause(3, 'Duties', cx, 0.49, cw, ink: ink, gold: 0xFF888888),
    ..._mClause(4, 'Money', cx, 0.525, cw, ink: ink, gold: 0xFF888888),
    ..._mClause(5, 'Other', cx, 0.56, cw, ink: ink, gold: 0xFF888888),
    _mLockedText('Witnesses', x: cx, y: 0.61, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w900, color: ink, tag: 'w'),
    ..._mField('witness_1', '1.', cx, 0.635, 0.4, labelW: 0.08, fontSize: 8),
    ..._mField('witness_2', '2.', cx + 0.44, 0.635, 0.4, labelW: 0.08, fontSize: 8),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.7, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.46, 0.7, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.91, cw),
  ];
}

List<NgmySlideElement> _layoutTermsFirst(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.1;
  const cw = 0.8;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('MARRIAGE', x: 0.1, y: 0.05, w: 0.35, h: 0.03, fontSize: 16, fontWeight: FontWeight.w900, color: ink, tag: 't1'),
    _mLockedText('AGREEMENT', x: 0.45, y: 0.05, w: 0.45, h: 0.03, fontSize: 16, fontWeight: FontWeight.w900, align: TextAlign.right, color: ink, tag: 't2'),
    _mLockedText('Terms begin below — parties follow', x: cx, y: 0.09, w: cw, h: 0.02, fontSize: 8, color: gold, tag: 'note'),
    ..._mClauseBox(1, 'Purpose of the Agreement', cx, 0.115, cw, ink: ink),
    ..._mClauseBox(2, 'Property & Assets', cx, 0.175, cw, ink: ink),
    ..._mClauseBox(3, 'Responsibilities', cx, 0.235, cw, ink: ink),
    ..._mClauseBox(4, 'Financial Matters', cx, 0.295, cw, ink: ink),
    ..._mClauseBox(5, 'Other Provisions', cx, 0.355, cw, ink: ink),
    ..._mField('date_full', 'Dated', cx, 0.425, cw, labelW: 0.16, fontSize: 8),
    ..._mPartyColumn(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.47, w: 0.38, accent: gold, ink: ink, panelFill: 0x0AFFFFFF),
    ..._mPartyColumn(prefix: 'wife', heading: 'WIFE', x: cx + 0.42, y: 0.47, w: 0.38, accent: gold, ink: ink, panelFill: 0x0AFFFFFF),
    ..._mSignBlock('husband', 'SIGN — HUSBAND', cx, 0.66, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'SIGN — WIFE', cx + 0.42, 0.66, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.9, cw),
  ];
}

List<NgmySlideElement> _layoutWideDateTop(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.08;
  const cw = 0.84;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('Marriage Agreement', x: cx, y: 0.05, w: cw, h: 0.035, fontSize: 17, fontWeight: FontWeight.w900, align: TextAlign.left, color: ink, tag: 'title'),
    ..._mField('date_day', 'Day', cx, 0.1, 0.22, labelW: 0.12, fontSize: 8),
    ..._mField('date_month', 'Month', cx + 0.26, 0.1, 0.3, labelW: 0.14, fontSize: 8),
    ..._mField('date_year', 'Year', cx + 0.6, 0.1, 0.24, labelW: 0.12, fontSize: 8),
    ..._mField('date_full', '', cx, 0.94, 0.2, labelW: 0.02, fontSize: 6),
    _mLockedText('Between husband and wife', x: cx, y: 0.15, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w700, color: gold, tag: 'bt'),
    ..._mPartyOpen(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.18, w: 0.4, accent: gold, ink: ink),
    ..._mPartyOpen(prefix: 'wife', heading: 'WIFE', x: cx + 0.44, y: 0.18, w: 0.4, accent: gold, ink: ink),
    _mLockedText('We agree as follows', x: cx, y: 0.34, w: cw, h: 0.022, fontSize: 10, fontWeight: FontWeight.w900, color: ink, tag: 'ag'),
    ..._mClause(1, 'Purpose', cx, 0.37, cw, ink: ink, gold: gold),
    ..._mClause(2, 'Property', cx, 0.405, cw, ink: ink, gold: gold),
    ..._mClause(3, 'Duties', cx, 0.44, cw, ink: ink, gold: gold),
    ..._mClause(4, 'Finance', cx, 0.475, cw, ink: ink, gold: gold),
    ..._mClause(5, 'Other', cx, 0.51, cw, ink: ink, gold: gold),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.58, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.46, 0.58, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.9, cw),
  ];
}

List<NgmySlideElement> _layoutCenteredRibbon(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.1;
  const cw = 0.8;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.18, y: 0.06, w: 0.64, h: 0.065, fillColor: 0x0A000000, strokeColor: gold, strokeWidth: 0.9, tag: 'rib'),
    _mLockedText('Marriage Agreement', x: cx, y: 0.075, w: cw, h: 0.035, fontSize: 16, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    ..._mField('date_full', 'This day', cx + 0.15, 0.15, 0.5, labelW: 0.18, fontSize: 8),
    ..._mPartyColumn(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.2, w: 0.38, accent: gold, ink: ink, panelFill: 0x08FFFFFF),
    ..._mPartyColumn(prefix: 'wife', heading: 'WIFE', x: cx + 0.42, y: 0.2, w: 0.38, accent: gold, ink: ink, panelFill: 0x08FFFFFF),
    ..._mClauseBox(1, 'Purpose', cx, 0.36, cw, ink: ink),
    ..._mClauseBox(2, 'Property', cx, 0.42, cw, ink: ink),
    ..._mClauseBox(3, 'Duties', cx, 0.48, cw, ink: ink),
    ..._mClauseBox(4, 'Finance', cx, 0.54, cw, ink: ink),
    ..._mClauseBox(5, 'Other', cx, 0.6, cw, ink: ink),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.68, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.42, 0.68, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.9, cw),
  ];
}

List<NgmySlideElement> _layoutSignaturesMid(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.09;
  const cw = 0.82;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('Covenant of Marriage', x: cx, y: 0.05, w: cw, h: 0.035, fontSize: 16, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    ..._mField('date_full', 'Date', cx + 0.2, 0.095, 0.4, labelW: 0.12, fontSize: 8),
    ..._mPartyColumn(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.135, w: 0.39, accent: gold, ink: ink, panelFill: 0x0AFFFFFF),
    ..._mPartyColumn(prefix: 'wife', heading: 'WIFE', x: cx + 0.43, y: 0.135, w: 0.39, accent: gold, ink: ink, panelFill: 0x0AFFFFFF),
    _mLockedText('Signatures', x: cx, y: 0.3, w: cw, h: 0.02, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'sig'),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.325, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.44, 0.325, 0.38, color: ink, signKey: 'wife'),
    _mLockedText('Articles of agreement', x: cx, y: 0.47, w: cw, h: 0.022, fontSize: 10, fontWeight: FontWeight.w900, color: ink, tag: 'art'),
    ..._mClause(1, 'Purpose', cx, 0.5, cw, ink: ink, gold: gold),
    ..._mClause(2, 'Property', cx, 0.538, cw, ink: ink, gold: gold),
    ..._mClause(3, 'Duties', cx, 0.576, cw, ink: ink, gold: gold),
    ..._mClause(4, 'Finance', cx, 0.614, cw, ink: ink, gold: gold),
    ..._mClause(5, 'Other', cx, 0.652, cw, ink: ink, gold: gold),
    ..._wm(state, cx, 0.91, cw),
  ];
}

List<NgmySlideElement> _layoutThreeBand(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.08;
  const cw = 0.84;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('I · TITLE', x: cx, y: 0.05, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w800, color: gold, tag: 'b1'),
    _mLockedText('Marriage Agreement', x: cx, y: 0.072, w: cw, h: 0.032, fontSize: 16, fontWeight: FontWeight.w900, color: ink, tag: 'title'),
    ..._mField('date_full', 'Dated', cx, 0.115, cw * 0.6, labelW: 0.14, fontSize: 8),
    _mLockedText('II · PARTIES', x: cx, y: 0.16, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w800, color: gold, tag: 'b2'),
    ..._mPartyOpen(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.185, w: 0.4, accent: gold, ink: ink),
    ..._mPartyOpen(prefix: 'wife', heading: 'WIFE', x: cx + 0.44, y: 0.185, w: 0.4, accent: gold, ink: ink),
    _mLockedText('III · TERMS & SIGNING', x: cx, y: 0.345, w: cw, h: 0.02, fontSize: 9, fontWeight: FontWeight.w800, color: gold, tag: 'b3'),
    ..._mClauseBox(1, 'Purpose', cx, 0.375, cw, ink: ink),
    ..._mClauseBox(2, 'Property', cx, 0.435, cw, ink: ink),
    ..._mClauseBox(3, 'Duties', cx, 0.495, cw, ink: ink),
    ..._mClauseBox(4, 'Finance', cx, 0.555, cw, ink: ink),
    ..._mClauseBox(5, 'Other', cx, 0.615, cw, ink: ink),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.7, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.46, 0.7, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.9, cw),
  ];
}

List<NgmySlideElement> _layoutSingleColumn(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.12;
  const cw = 0.76;
  final ink = tpl.ink;
  final gold = tpl.gold;
  return [
    _mLockedText('Unity Marriage Paper', x: cx, y: 0.05, w: cw, h: 0.034, fontSize: 15, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    ..._mField('date_full', 'Date of signing', cx, 0.1, cw, labelW: 0.32, fontSize: 8),
    ..._mPartyOpen(prefix: 'husband', heading: 'HUSBAND', x: cx, y: 0.145, w: cw, accent: gold, ink: ink),
    ..._mPartyOpen(prefix: 'wife', heading: 'WIFE', x: cx, y: 0.3, w: cw, accent: gold, ink: ink),
    ..._mClause(1, 'Purpose', cx, 0.46, cw, ink: ink, gold: gold),
    ..._mClause(2, 'Property', cx, 0.5, cw, ink: ink, gold: gold),
    ..._mClause(3, 'Duties', cx, 0.54, cw, ink: ink, gold: gold),
    ..._mClause(4, 'Finance', cx, 0.58, cw, ink: ink, gold: gold),
    ..._mClause(5, 'Other', cx, 0.62, cw, ink: ink, gold: gold),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.69, cw * 0.48, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + cw * 0.52, 0.69, cw * 0.48, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.91, cw),
  ];
}

List<NgmySlideElement> _layoutMinimalFormal(NgmyMarriagePaperTemplate tpl, String state) {
  const cx = 0.1;
  const cw = 0.8;
  final ink = tpl.ink;
  return [
    _mLockedText('MARRIAGE AGREEMENT', x: cx, y: 0.07, w: cw, h: 0.036, fontSize: 15, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Formal declaration', x: cx, y: 0.11, w: cw, h: 0.02, fontSize: 9, align: TextAlign.center, color: 0xFF888888, tag: 'sub'),
    ..._mField('date_full', 'Date', cx + 0.15, 0.15, 0.5, labelW: 0.12, fontSize: 8),
    ..._mField('husband_name', 'Husband', cx, 0.2, cw, labelW: 0.22, fontSize: 9),
    ..._mField('husband_dob', 'Born', cx, 0.24, cw, labelW: 0.22, fontSize: 9),
    ..._mField('husband_pob', 'Birth place', cx, 0.28, cw, labelW: 0.22, fontSize: 9),
    ..._mField('husband_address', 'Lives at', cx, 0.32, cw, labelW: 0.22, fontSize: 9),
    ..._mField('wife_name', 'Wife', cx, 0.38, cw, labelW: 0.22, fontSize: 9),
    ..._mField('wife_dob', 'Born', cx, 0.42, cw, labelW: 0.22, fontSize: 9),
    ..._mField('wife_pob', 'Birth place', cx, 0.46, cw, labelW: 0.22, fontSize: 9),
    ..._mField('wife_address', 'Lives at', cx, 0.5, cw, labelW: 0.22, fontSize: 9),
    ..._mClause(1, 'Purpose', cx, 0.56, cw, ink: ink, gold: 0xFFAAAAAA),
    ..._mClause(2, 'Property', cx, 0.595, cw, ink: ink, gold: 0xFFAAAAAA),
    ..._mClause(3, 'Duties', cx, 0.63, cw, ink: ink, gold: 0xFFAAAAAA),
    ..._mClause(4, 'Finance', cx, 0.665, cw, ink: ink, gold: 0xFFAAAAAA),
    ..._mClause(5, 'Other', cx, 0.7, cw, ink: ink, gold: 0xFFAAAAAA),
    ..._mSignBlock('husband', 'HUSBAND', cx, 0.755, 0.38, color: ink, signKey: 'husband'),
    ..._mSignBlock('wife', 'WIFE', cx + 0.42, 0.755, 0.38, color: ink, signKey: 'wife'),
    ..._wm(state, cx, 0.91, cw, color: 0xFFCCCCCC),
  ];
}

/// Soft picker preview — distinct silhouette per template, no dense field lines.
Widget ngmyMarriageTemplateLivePreview(String templateId) {
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;
  final bg = Color(tpl.background);
  final ink = Color(tpl.ink);
  final accent = Color(tpl.gold);
  return ColoredBox(
    color: bg,
    child: Stack(
      fit: StackFit.expand,
      children: [
        Positioned.fill(
          child: DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [bg, Color.lerp(bg, const Color(0xFFE8E0D4), 0.28)!],
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(12, 14, 12, 12),
          child: _softPreviewBody(templateId, ink, accent, tpl.name),
        ),
      ],
    ),
  );
}

Widget _softPreviewBody(String id, Color ink, Color accent, String name) {
  Widget bar({double w = 1, double h = 6}) => Align(
        alignment: Alignment.centerLeft,
        child: FractionallySizedBox(
          widthFactor: w,
          child: Container(
            height: h,
            decoration: BoxDecoration(color: ink.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(4)),
          ),
        ),
      );
  Widget chip(String t) => Text(t, style: TextStyle(color: ink.withValues(alpha: 0.85), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.6));

  switch (id) {
    case 'classic_parchment':
      return Column(children: [chip('COVENANT'), const SizedBox(height: 10), bar(w: 0.9), const SizedBox(height: 8), bar(h: 28), const SizedBox(height: 8), bar(h: 28), const Spacer(), chip(name)]);
    case 'official_cream':
      return Column(children: [
        Container(height: 22, decoration: BoxDecoration(color: ink.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(4)), alignment: Alignment.center, child: chip('OFFICIAL')),
        const SizedBox(height: 12),
        Row(children: [Expanded(child: bar(h: 36)), const SizedBox(width: 8), Expanded(child: bar(h: 36))]),
        const Spacer(),
        bar(w: 0.7),
        const SizedBox(height: 6),
        chip(name),
      ]);
    case 'ceremonial_diamond':
      return Column(children: [
        Row(children: [chip('MARRIAGE'), const Spacer(), chip('AGREE')]),
        const SizedBox(height: 10),
        bar(h: 10),
        const SizedBox(height: 4),
        bar(h: 10),
        const SizedBox(height: 4),
        bar(h: 10),
        const Spacer(),
        Row(children: [Expanded(child: bar(h: 20)), const SizedBox(width: 8), Expanded(child: bar(h: 20))]),
        const SizedBox(height: 8),
        chip(name),
      ]);
    case 'forest_gold':
      return Column(children: [
        Align(alignment: Alignment.centerLeft, child: chip('Marriage')),
        const SizedBox(height: 10),
        Row(children: [Expanded(child: bar(h: 10)), const SizedBox(width: 6), Expanded(child: bar(h: 10)), const SizedBox(width: 6), Expanded(child: bar(h: 10))]),
        const SizedBox(height: 12),
        Row(children: [Expanded(child: bar(h: 40)), const SizedBox(width: 8), Expanded(child: bar(h: 40))]),
        const Spacer(),
        chip(name),
      ]);
    case 'ivory_elegance':
      return Column(children: [
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 18),
          height: 26,
          decoration: BoxDecoration(border: Border.all(color: accent.withValues(alpha: 0.45)), borderRadius: BorderRadius.circular(4)),
          alignment: Alignment.center,
          child: chip('Agreement'),
        ),
        const Spacer(),
        Row(children: [Expanded(child: bar(h: 32)), const SizedBox(width: 8), Expanded(child: bar(h: 32))]),
        const SizedBox(height: 10),
        bar(),
        const SizedBox(height: 4),
        bar(),
        const SizedBox(height: 8),
        chip(name),
      ]);
    case 'crimson_tradition':
      return Column(children: [
        chip('Covenant'),
        const SizedBox(height: 10),
        Row(children: [Expanded(child: bar(h: 28)), const SizedBox(width: 8), Expanded(child: bar(h: 28))]),
        const SizedBox(height: 10),
        Container(height: 20, decoration: BoxDecoration(color: accent.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(4)), alignment: Alignment.center, child: Text('Signatures', style: TextStyle(color: ink.withValues(alpha: 0.7), fontSize: 9, fontWeight: FontWeight.w800))),
        const Spacer(),
        bar(),
        const SizedBox(height: 4),
        bar(),
        const SizedBox(height: 8),
        chip(name),
      ]);
    case 'golden_frame':
      return Column(children: [
        Align(alignment: Alignment.centerLeft, child: Text('I · Title', style: TextStyle(color: accent, fontSize: 9, fontWeight: FontWeight.w800))),
        const SizedBox(height: 4),
        bar(w: 0.8, h: 8),
        const SizedBox(height: 10),
        Align(alignment: Alignment.centerLeft, child: Text('II · Parties', style: TextStyle(color: accent, fontSize: 9, fontWeight: FontWeight.w800))),
        const SizedBox(height: 4),
        Row(children: [Expanded(child: bar(h: 24)), const SizedBox(width: 8), Expanded(child: bar(h: 24))]),
        const SizedBox(height: 10),
        Align(alignment: Alignment.centerLeft, child: Text('III · Terms', style: TextStyle(color: accent, fontSize: 9, fontWeight: FontWeight.w800))),
        const Spacer(),
        chip(name),
      ]);
    case 'unity_hands':
      return Column(children: [
        chip('Unity'),
        const SizedBox(height: 12),
        bar(h: 10),
        const SizedBox(height: 8),
        bar(h: 36),
        const SizedBox(height: 8),
        bar(h: 36),
        const Spacer(),
        chip(name),
      ]);
    case 'ngmy_official':
      return Column(children: [
        chip('FORMAL'),
        const SizedBox(height: 8),
        ...List.generate(6, (_) => Padding(padding: const EdgeInsets.only(bottom: 5), child: bar(h: 7))),
        const Spacer(),
        chip(name),
      ]);
    case 'congo_heritage':
    default:
      return Column(children: [
        Container(width: 36, height: 3, decoration: BoxDecoration(color: accent.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(99))),
        const SizedBox(height: 12),
        chip('MARRIAGE'),
        chip('AGREEMENT'),
        const SizedBox(height: 10),
        Row(children: [Expanded(child: bar(h: 34)), const SizedBox(width: 8), Expanded(child: bar(h: 34))]),
        const Spacer(),
        chip(name),
        const SizedBox(height: 6),
        Container(width: 26, height: 26, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: accent.withValues(alpha: 0.4)))),
      ]);
  }
}

/// Builds a portrait Marriage Agreement deck from a paper template.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({
  required String templateId,
  required String state,
}) {
  ngmyClearMarriagePaperCache();
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
          color: isDark ? const Color(0xFF14110A) : const Color(0xFFFFFDF7),
          borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
          border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.25)),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 10),
              child: Column(
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(
                        color: const Color(0xFFD4AF37).withValues(alpha: 0.45),
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(11),
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [Color(0xFFE6C15C), Color(0xFFB8860B), Color(0xFF8B6914)],
                          ),
                          borderRadius: BorderRadius.circular(15),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.5), width: 1.2),
                          boxShadow: [BoxShadow(color: const Color(0xFFB8860B).withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 3))],
                        ),
                        child: const Icon(Icons.workspace_premium_rounded, color: Colors.white, size: 22),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Choose a paper template', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF1A1208))),
                            const SizedBox(height: 2),
                            const Text('Each template has a different page layout', style: TextStyle(fontSize: 11.5, color: Color(0xFF8B6914), fontWeight: FontWeight.w700)),
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
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 28),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 16,
                  crossAxisSpacing: 14,
                  childAspectRatio: 0.62,
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
        borderRadius: BorderRadius.circular(18),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: isDark ? 0.35 : 0.4)),
            color: isDark ? const Color(0xFF1F1A0F) : Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.08),
                blurRadius: 14,
                offset: const Offset(0, 6),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: Container(
                  margin: const EdgeInsets.fromLTRB(9, 9, 9, 6),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.5)),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.14), blurRadius: 6, offset: const Offset(0, 2))],
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: AspectRatio(
                    aspectRatio: 9 / 16,
                    child: ngmyMarriageTemplateLivePreview(template.id),
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(11, 8, 11, 11),
                decoration: BoxDecoration(
                  border: Border(top: BorderSide(color: const Color(0xFFD4AF37).withValues(alpha: isDark ? 0.18 : 0.16))),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      template.name,
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 0.1, color: isDark ? Colors.white : const Color(0xFF1A1208)),
                    ),
                    const SizedBox(height: 3),
                    Text(
                      template.description,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 9.5, color: isDark ? Colors.white54 : const Color(0xFF7A6A45), height: 1.32),
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
