import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';

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

// New motif colors introduced with the Fizi/Congolese-textile redesign.
const _midnightIndigo = 0xFF14204A;
const _emberGold = 0xFFE3B341;
const _tealLake = 0xFF0F8A8A;
const _bronze = 0xFF9C6B2E;
const _terracotta = 0xFF8A4A20;
const _emerald = 0xFF14532D;
const _skyAccent = 0xFF60A5FA;
const _blush = 0xFFF6E4E2;
const _roseGold = 0xFFB76E79;
const _roseGoldDeep = 0xFF8C4A55;
const _burgundy = 0xFF4A0E16;
const _amberField = 0xFFDDA83E;
const _bronzeDark = 0xFF3A2409;
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
    strokeWidth: 1.2,
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
      strokeColor: accent,
      strokeWidth: 1.2,
      tag: 'panel_$prefix',
    ),
    _mLockedText(heading, x: x + 0.01, y: y + 0.006, w: w - 0.02, h: 0.024, fontSize: 9, fontWeight: FontWeight.w900, color: accent, align: TextAlign.center, tag: 'hdr_$prefix'),
    ..._mField('${prefix}_name', 'Full Name:', x + 0.012, y + 0.032, w - 0.024, labelColor: accent, lineColor: accent, textColor: ink, labelW: 0.24, fontSize: 8),
    ..._mField('${prefix}_dob', 'Date of Birth:', x + 0.012, y + 0.058, w - 0.024, labelColor: accent, lineColor: accent, textColor: ink, labelW: 0.3, fontSize: 8),
    ..._mField('${prefix}_pob', 'Place of Birth:', x + 0.012, y + 0.084, w - 0.024, labelColor: accent, lineColor: accent, textColor: ink, labelW: 0.3, fontSize: 8),
    ..._mField('${prefix}_address', 'Address:', x + 0.012, y + 0.11, w - 0.024, labelColor: accent, lineColor: accent, textColor: ink, labelW: 0.22, fontSize: 8),
  ];
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
    _mLockedText('RÉPUBLIQUE DÉMOCRATIQUE DU CONGO', x: x - size * 0.1, y: y + size * 0.08, w: size * 1.2, h: 0.016, fontSize: 4.6, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'seal_r1'),
    _mLockedText('FIZI · SUD-KIVU', x: x - size * 0.05, y: y + size * 0.14, w: size * 1.1, h: 0.016, fontSize: 5, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'seal_r2'),
    _mLockedText('NGMY', x: x + size * 0.2, y: y + size * 0.28, w: size * 0.6, h: 0.02, fontSize: 8, fontWeight: FontWeight.w900, align: TextAlign.center, color: inner, tag: 'seal_ngmy'),
  ];
}

// ── Template registry ──────────────────────────────────────────────────────────

const List<NgmyMarriagePaperTemplate> kNgmyMarriagePaperTemplates = [
  NgmyMarriagePaperTemplate(
    id: 'congo_heritage',
    name: 'Fizi Midnight',
    description: 'Indigo night sky, gold Kuba chevron trim and sunburst star corners.',
    paperStyle: NgmyMarriagePaperStyle.congoHeritage,
    background: _midnightIndigo,
    ink: _white,
    titleGreen: _emberGold,
    titleRed: _skyAccent,
    gold: _emberGold,
    husbandColor: _emberGold,
    wifeColor: _skyAccent,
    previewColors: [Color(_midnightIndigo), Color(_emberGold), Color(_skyAccent)],
    isDark: true,
  ),
  NgmyMarriagePaperTemplate(
    id: 'classic_parchment',
    name: 'Lakeside Ivory',
    description: 'Warm ivory paper with teal Lake Tanganyika ripple trim and bronze frame.',
    paperStyle: NgmyMarriagePaperStyle.classicParchment,
    background: _parchment,
    ink: _ink,
    titleGreen: _tealLake,
    titleRed: _bronze,
    gold: _bronze,
    husbandColor: _tealLake,
    wifeColor: _bronze,
    previewColors: [Color(_parchment), Color(_tealLake), Color(_bronze)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'official_cream',
    name: 'Sud-Kivu Seal',
    description: 'Crisp white paper, tricolor wedge corners and a black official hairline.',
    paperStyle: NgmyMarriagePaperStyle.officialCream,
    background: _white,
    ink: _nearBlack,
    titleGreen: _congoBlue,
    titleRed: _congoRed,
    gold: _nearBlack,
    husbandColor: _congoBlue,
    wifeColor: _congoRed,
    previewColors: [Color(_white), Color(_congoBlue), Color(_congoRed)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'ceremonial_diamond',
    name: 'Kuba Weave',
    description: 'Terracotta raffia-cloth field with an interlocking diamond lattice border.',
    paperStyle: NgmyMarriagePaperStyle.ceremonialDiamond,
    background: _terracotta,
    ink: _cream,
    titleGreen: _cream,
    titleRed: _gold,
    gold: _gold,
    husbandColor: _cream,
    wifeColor: _gold,
    previewColors: [Color(_terracotta), Color(_gold), Color(_cream)],
    isDark: true,
  ),
  NgmyMarriagePaperTemplate(
    id: 'forest_gold',
    name: 'Emerald Fizi',
    description: 'Rich emerald field with gold sunburst medallions in every corner.',
    paperStyle: NgmyMarriagePaperStyle.forestGold,
    background: _emerald,
    ink: _white,
    titleGreen: _gold,
    titleRed: _skyAccent,
    gold: _gold,
    husbandColor: _gold,
    wifeColor: _skyAccent,
    previewColors: [Color(_emerald), Color(_gold), Color(_skyAccent)],
    isDark: true,
  ),
  NgmyMarriagePaperTemplate(
    id: 'ivory_elegance',
    name: 'Pearl & Rosegold',
    description: 'Soft blush paper with a delicate rose-gold hairline frame and bead trim.',
    paperStyle: NgmyMarriagePaperStyle.ivoryElegance,
    background: _blush,
    ink: _roseGoldDeep,
    titleGreen: _roseGold,
    titleRed: _roseGoldDeep,
    gold: _roseGold,
    husbandColor: _roseGoldDeep,
    wifeColor: _roseGold,
    previewColors: [Color(_blush), Color(_roseGold), Color(_roseGoldDeep)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'crimson_tradition',
    name: 'Ruby Root',
    description: 'Deep burgundy field, black-and-gold chevron trim and gold star corners.',
    paperStyle: NgmyMarriagePaperStyle.crimsonTradition,
    background: _burgundy,
    ink: _white,
    titleGreen: _emberGold,
    titleRed: _cream,
    gold: _emberGold,
    husbandColor: _emberGold,
    wifeColor: _cream,
    previewColors: [Color(_burgundy), Color(_emberGold), Color(_cream)],
    isDark: true,
  ),
  NgmyMarriagePaperTemplate(
    id: 'golden_frame',
    name: 'Royal Amber',
    description: 'Gold is the paper itself — a dark bronze triple frame and ornate star corners.',
    paperStyle: NgmyMarriagePaperStyle.goldenFrame,
    background: _amberField,
    ink: _bronzeDark,
    titleGreen: _bronzeDark,
    titleRed: _bronze,
    gold: _bronzeDark,
    husbandColor: _bronzeDark,
    wifeColor: _bronze,
    previewColors: [Color(_amberField), Color(_bronzeDark), Color(_bronze)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'unity_hands',
    name: 'Umoja Weave',
    description: 'Warm sand field with a basket-weave crosshatch border — "umoja" means unity.',
    paperStyle: NgmyMarriagePaperStyle.unityHands,
    background: _sand,
    ink: _sandDark,
    titleGreen: _forest,
    titleRed: _darkGold,
    gold: _darkGold,
    husbandColor: _forest,
    wifeColor: _darkGold,
    previewColors: [Color(_sand), Color(_forest), Color(_darkGold)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'ngmy_official',
    name: 'République Officielle',
    description: 'Official state design — DRC tricolor band and a Fizi / Sud-Kivu civil stamp seal.',
    paperStyle: NgmyMarriagePaperStyle.ngmyOfficial,
    background: _white,
    ink: _nearBlack,
    titleGreen: _congoBlue,
    titleRed: _congoRed,
    gold: _congoYellow,
    husbandColor: _congoBlue,
    wifeColor: _congoRed,
    previewColors: [Color(_white), Color(_congoBlue), Color(_congoRed)],
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
  const cx = 0.10;
  const cw = 0.80;
  final ink = tpl.ink;
  final gold = tpl.gold;
  final hColor = tpl.husbandColor;
  final wColor = tpl.wifeColor;
  final panelFill = tpl.isDark ? 0x18FFFFFF : 0x30FFFFFF;

  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);

  final elements = <NgmySlideElement>[
    _mBgImage(bgUrl),

    // Title block
    _mLockedText('MARRIAGE', x: cx, y: 0.095, w: cw, h: 0.036, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.titleGreen, tag: 'title_m'),
    _mLockedText('AGREEMENT', x: cx, y: 0.125, w: cw, h: 0.036, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.titleRed, tag: 'title_a'),
    _mRule(cx + 0.08, 0.162, cw - 0.16, gold, tag: 'title_rule'),

    // Intro date
    _mLockedText(
      'This Marriage Agreement is made and entered into on this',
      x: cx,
      y: 0.172,
      w: cw,
      h: 0.02,
      fontSize: 8,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: ink,
      tag: 'intro1',
    ),
    ..._mField('date_day', '', cx + 0.14, 0.194, 0.09, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8.5),
    _mLockedText('day of', x: cx + 0.24, y: 0.194, w: 0.1, h: 0.02, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'intro2'),
    ..._mField('date_month', '', cx + 0.33, 0.194, 0.26, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8.5),
    _mLockedText(', 20', x: cx + 0.60, y: 0.194, w: 0.06, h: 0.02, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'intro3'),
    ..._mField('date_year', '', cx + 0.65, 0.194, 0.11, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8.5),
    _mLockedText('by and between:', x: cx, y: 0.216, w: cw, h: 0.02, fontSize: 8, fontWeight: FontWeight.w700, align: TextAlign.center, color: ink, tag: 'intro4'),

    // Party columns
    ..._mPartyColumn(prefix: 'husband', heading: 'PARTY A (HUSBAND)', x: cx, y: 0.238, w: 0.38, accent: hColor, ink: ink, panelFill: panelFill),
    ..._mPartyColumn(prefix: 'wife', heading: 'PARTY B (WIFE)', x: cx + 0.42, y: 0.238, w: 0.38, accent: wColor, ink: ink, panelFill: panelFill),

    // Terms
    _mLockedText('WE, THE UNDERSIGNED, AGREE AS FOLLOWS:', x: cx, y: 0.382, w: cw, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w900, color: tpl.titleGreen, align: TextAlign.center, tag: 'terms_hdr'),
    _mRule(cx, 0.404, cw, gold, tag: 'terms_rule'),
    ..._mClause(1, 'Purpose of the Agreement', cx, 0.412, cw, ink: ink, gold: gold),
    ..._mClause(2, 'Property & Assets', cx, 0.436, cw, ink: ink, gold: gold),
    ..._mClause(3, 'Responsibilities', cx, 0.460, cw, ink: ink, gold: gold),
    ..._mClause(4, 'Financial Matters', cx, 0.484, cw, ink: ink, gold: gold),
    ..._mClause(5, 'Other Provisions', cx, 0.508, cw, ink: ink, gold: gold),

    // Affirmation
    _mLockedText(
      'We affirm that this Agreement is made in good faith, with mutual understanding, respect and love, in accordance with the laws and customs of the Democratic Republic of Congo.',
      x: cx + 0.02,
      y: 0.538,
      w: cw - 0.04,
      h: 0.048,
      fontSize: 7.5,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: ink,
      tag: 'affirm',
    ),

    // Signatures
    ..._mSignBlock('husband', 'PARTY A (HUSBAND)', cx, 0.592, 0.24, color: hColor, signKey: 'husband'),
    _mLockedText('WITNESSES', x: cx + 0.28, y: 0.592, w: 0.24, h: 0.022, fontSize: 8.5, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'witness_hdr'),
    _mLockedText('1.', x: cx + 0.28, y: 0.622, w: 0.04, h: 0.02, fontSize: 8.5, fontWeight: FontWeight.w700, color: ink, tag: 'w1n'),
    ..._mField('witness_1', '', cx + 0.31, 0.620, 0.2, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8),
    _mLockedText('2.', x: cx + 0.28, y: 0.648, w: 0.04, h: 0.02, fontSize: 8.5, fontWeight: FontWeight.w700, color: ink, tag: 'w2n'),
    ..._mField('witness_2', '', cx + 0.31, 0.646, 0.2, labelColor: ink, lineColor: ink, textColor: ink, labelW: 0, fontSize: 8),
    ..._mSignBlock('wife', 'PARTY B (WIFE)', cx + 0.56, 0.592, 0.24, color: wColor, signKey: 'wife'),

    // Seal (skip for ngmy_official — baked into SVG)
    if (tpl.id != 'ngmy_official') ..._drcSeal(cx + cw - 0.16, 0.72, 0.15, outer: tpl.titleRed, inner: gold, textColor: tpl.isDark ? _white : _ink),

    // State watermark
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: cx,
      y: 0.88,
      w: cw,
      h: 0.035,
      text: _watermarkForState(state),
      fontSize: 9,
      fontWeight: FontWeight.w800,
      color: tpl.isDark ? gold : _congoBlue,
      align: TextAlign.center,
      fileName: '${_kLocked}_watermark',
    ),
  ];

  return elements;
}

/// Miniature live preview of a marriage template (matches editor document).
Widget ngmyMarriageTemplateLivePreview(String templateId) {
  final slide = ngmyBuildMarriageAgreementDeck(templateId: templateId, state: 'STATE').slides.first;
  return LayoutBuilder(
    builder: (context, c) {
      final w = c.maxWidth;
      final h = c.maxHeight;
      final scale = w / 360;
      return ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: ColoredBox(
          color: Color(slide.background),
          child: Stack(
            children: [
              for (final e in slide.elements)
                Positioned(
                  left: e.x * w,
                  top: e.y * h,
                  width: e.w * w,
                  height: e.h * h,
                  child: NgmySlideElementView(element: e, scale: scale, compactText: true),
                ),
            ],
          ),
        ),
      );
    },
  );
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
                            const Text('10 professionally designed certificates', style: TextStyle(fontSize: 11.5, color: Color(0xFF8B6914), fontWeight: FontWeight.w700)),
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
