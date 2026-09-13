import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_models.dart';

part 'ngmy_marriage_cert_layouts.dart';

// Shared with ngmy_slides_marriage_agreement.dart (keep in sync)
const _kLocked = 'marriage_locked';
const _kField = 'marriage_field_';
const _kSign = 'marriage_sign_';

/// Soft underlines — never dark/black (picker + print).
const _softLine = 0xFFE2D8C8;
const _certGold = 0xFFC9A227;
const _certIvory = 0xFFFFFFF8;

enum NgmyMarriageLayoutKind {
  classic,
  ringsNdoa,
  coupleCards,
  kuhoweshaForm,
  mahariPande,
  familiaMti,
  ndoaSafi,
  peteWide,
  muhuriCrest,
  fomuWazi,
  upendoOrnate,
}

class NgmyMarriagePaperTemplate {
  const NgmyMarriagePaperTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.paperStyle,
    required this.background,
    required this.ink,
    required this.accent,
    required this.bannerFill,
    required this.bannerText,
    required this.previewColors,
    this.layoutKind = NgmyMarriageLayoutKind.classic,
  });

  final String id;
  final String name;
  final String description;
  final NgmyMarriagePaperStyle paperStyle;
  final int background;
  final int ink;
  final int accent;
  final int bannerFill;
  final int bannerText;
  final List<Color> previewColors;
  final NgmyMarriageLayoutKind layoutKind;
}

// ── Low-level element builders ──────────────────────────────────────────────

NgmySlideElement _mLockedText(
  String text, {
  required double x,
  required double y,
  required double w,
  required double h,
  double fontSize = 14,
  FontWeight fontWeight = FontWeight.w600,
  FontStyle fontStyle = FontStyle.normal,
  TextAlign align = TextAlign.left,
  String tag = '',
  int color = 0xFF1A1208,
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
    fontStyle: fontStyle,
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
  int strokeColor = 0xFFD4AF37,
  double strokeWidth = 1.4,
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

/// A tap-to-fill blank with an underline — no visible label, used inline
/// inside a running sentence (e.g. "Mimi ___, binti wa familia ya ___,").
NgmySlideElement _mBlank(String key, double x, double y, double w, {int ink = 0xFF1A1208, double fontSize = 8.5, String startText = '✚'}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: 0.02,
    text: startText,
    fontSize: fontSize,
    fontWeight: FontWeight.w700,
    fontStyle: FontStyle.italic,
    color: ink,
    align: TextAlign.center,
    fileName: '$_kField$key:${w.toStringAsFixed(3)}',
  );
}

NgmySlideElement _mBlankUnderline(double x, double y, double w, {int color = _softLine}) {
  return _mLockedShape(shape: NgmySlideShapeKind.line, x: x, y: y + 0.022, w: w, h: 0.002, strokeColor: color, strokeWidth: 0.8, tag: 'ul_${x}_$y');
}

double _tw(String s, double fontSize) => s.length * fontSize * 0.0027 + 0.006;

/// One run of text — plain segments and named blanks placed left to right,
/// wrapping to the next call's `y` for the next line (line breaks are
/// authored by hand, matching the certificate's fixed layout).
class NgmyMSeg {
  const NgmyMSeg.text(this.text) : blankKey = null, blankW = 0;
  const NgmyMSeg.blank(this.blankKey, this.blankW) : text = '';
  final String text;
  final String? blankKey;
  final double blankW;
}

List<NgmySlideElement> _mRun(List<NgmyMSeg> segs, double x, double y, {required int ink, double fontSize = 8.5}) {
  final out = <NgmySlideElement>[];
  var cx = x;
  for (final s in segs) {
    if (s.blankKey == null) {
      final w = _tw(s.text, fontSize);
      out.add(_mLockedText(s.text, x: cx, y: y, w: w, h: 0.02, fontSize: fontSize, fontWeight: FontWeight.w500, color: ink, tag: 'run_${cx}_$y'));
      cx += w;
    } else {
      out.add(_mBlank(s.blankKey!, cx, y - 0.002, s.blankW, ink: ink, fontSize: fontSize, startText: '✚'));
      out.add(_mBlankUnderline(cx, y, s.blankW));
      cx += s.blankW + 0.004;
    }
  }
  return out;
}

/// A section-header ribbon (UTANGULIZI / MAHARI... / MASHAHIDI).
List<NgmySlideElement> _mBanner(String text, double y, double x, double w, {required int fill, required int textColor}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.026, fillColor: fill, strokeColor: fill, strokeWidth: 0, tag: 'banner_$text'),
    _mLockedText(text, x: x, y: y + 0.003, w: w, h: 0.020, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'banner_t_$text'),
  ];
}

/// White gold-outlined pill header like the HATI YA NDOA example.
List<NgmySlideElement> _mPill(String text, double y, double x, double w, {required int ink, int gold = _certGold}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.032, fillColor: _certIvory, strokeColor: gold, strokeWidth: 1.15, tag: 'pill_$text'),
    _mLockedText(text, x: x, y: y + 0.005, w: w, h: 0.024, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'pill_t_$text'),
  ];
}

/// Interlocking wedding rings with a small diamond above, like the sample.
List<NgmySlideElement> _mRings(double cx, double cy, double d, {int gold = _certGold, int ink = 0xFF12213D}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: cx + d * 0.18, y: cy - 0.018, w: 0.028, h: 0.016, fillColor: ink, strokeColor: gold, strokeWidth: 0.8, tag: 'ring_jewel'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: cx - d * 0.42, y: cy, w: d, h: d, fillColor: 0x00000000, strokeColor: gold, strokeWidth: 2.4, tag: 'ring_l'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: cx + d * 0.08, y: cy, w: d, h: d, fillColor: 0x00000000, strokeColor: gold, strokeWidth: 2.4, tag: 'ring_r'),
  ];
}

/// Navy/gold diamond rule with a jewel in the middle.
List<NgmySlideElement> _mOrnamentRule(double x, double y, double w, {int gold = _certGold, int ink = 0xFF12213D}) {
  final mid = x + w / 2;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.line, x: x, y: y + 0.006, w: w * 0.40, h: 0.002, strokeColor: gold, strokeWidth: 1.0, tag: 'orn_l_$y'),
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: mid - 0.012, y: y, w: 0.024, h: 0.016, fillColor: ink, strokeColor: gold, strokeWidth: 0.9, tag: 'orn_c_$y'),
    _mLockedShape(shape: NgmySlideShapeKind.line, x: mid + 0.018, y: y + 0.006, w: w * 0.40, h: 0.002, strokeColor: gold, strokeWidth: 1.0, tag: 'orn_r_$y'),
  ];
}

/// Person silhouette in a circle — man on the groom side, woman on the bride side.
List<NgmySlideElement> _mPersonMark(double x, double y, double size, {required bool female, required int fill, int ring = _certGold}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y, w: size, h: size, fillColor: _certIvory, strokeColor: ring, strokeWidth: 1.35, tag: 'ps_${female}_ring'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x + size * 0.32, y: y + size * 0.16, w: size * 0.36, h: size * 0.36, fillColor: fill, strokeColor: fill, strokeWidth: 0, tag: 'ps_${female}_head'),
    _mLockedShape(
      shape: NgmySlideShapeKind.circle,
      x: x + size * (female ? 0.12 : 0.18),
      y: y + size * 0.50,
      w: size * (female ? 0.76 : 0.64),
      h: size * 0.46,
      fillColor: fill,
      strokeColor: fill,
      strokeWidth: 0,
      tag: 'ps_${female}_body',
    ),
  ];
}

List<NgmySlideElement> _mLabelLine(String label, String key, double x, double y, double w, {required int ink, double fontSize = 10.5, String startText = ''}) {
  final lw = _tw(label, fontSize);
  return [
    _mLockedText(label, x: x, y: y, w: lw, h: 0.022, fontSize: fontSize, fontWeight: FontWeight.w700, color: ink, tag: 'll_$key'),
    _mBlank(key, x + lw, y - 0.002, w - lw, ink: ink, fontSize: fontSize, startText: startText),
    _mBlankUnderline(x + lw, y + 0.018, w - lw),
  ];
}

List<NgmySlideElement> _mChevronHeader(String text, double x, double y, double w, {required int fill, required int textColor, int gold = _certGold}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.028, fillColor: fill, strokeColor: fill, strokeWidth: 0, tag: 'chv_$text'),
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: x - 0.008, y: y + 0.002, w: 0.024, h: 0.024, fillColor: gold, strokeColor: gold, strokeWidth: 0, tag: 'chv_l_$text'),
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: x + w - 0.016, y: y + 0.002, w: 0.024, h: 0.024, fillColor: gold, strokeColor: gold, strokeWidth: 0, tag: 'chv_r_$text'),
    _mLockedText(text, x: x, y: y + 0.004, w: w, h: 0.02, fontSize: 9.5, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'chv_t_$text'),
  ];
}

List<NgmySlideElement> _mNgmyMark(double y, {required int ink, int gold = _certGold}) {
  return [
    ..._mOrnamentRule(0.22, y, 0.56, gold: gold, ink: ink),
    _mLockedText('NGMY', x: 0.2, y: y + 0.016, w: 0.6, h: 0.022, fontSize: 13, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'ngmy_mark'),
    _mLockedText('Nakala ya Hati', x: 0.2, y: y + 0.036, w: 0.6, h: 0.016, fontSize: 9, fontWeight: FontWeight.w600, align: TextAlign.center, color: gold, tag: 'ngmy_sub'),
  ];
}

List<NgmySlideElement> _mInlineSign(String key, double x, double y, double w, {required int ink}) {
  return [
    _mLockedText('Sahihi:', x: x, y: y, w: 0.12, h: 0.02, fontSize: 10, fontWeight: FontWeight.w700, color: ink, tag: 'is_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.12,
      y: y - 0.006,
      w: w - 0.12,
      h: 0.032,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$_kSign$key',
    ),
    _mBlankUnderline(x + 0.12, y + 0.016, w - 0.12),
  ];
}

List<NgmySlideElement> _mCertWitnessCol(String side, double x, double y, double w, {required int ink, required int fill, required int textColor}) {
  return [
    ..._mChevronHeader(side == 'mume' ? 'Shahidi wa Mume' : 'Shahidi wa Mke', x, y, w, fill: fill, textColor: textColor),
    ..._mLabelLine('Jina:', 'witness_${side}_1_name', x, y + 0.036, w, ink: ink, fontSize: 10),
    ..._mInlineSign('witness_${side}_1', x, y + 0.070, w, ink: ink),
  ];
}

List<NgmySlideElement> _mStaticPara(String text, double x, double y, double w, double h, {required int ink, double fontSize = 12}) {
  return [_mLockedText(text, x: x, y: y, w: w, h: h, fontSize: fontSize, fontWeight: FontWeight.w500, align: TextAlign.left, color: ink, tag: 'para_$y')];
}

/// One MAHARI / VITU VYA KUTOA row — numbered circle, an editable item-name
/// (pre-filled for the first four, blank for the rest so users can add more
/// gift types), and an editable amount/description field.
List<NgmySlideElement> _mMahariRow(int n, String emoji, String defaultName, String amountHint, double x, double y, double w, {required int ink, required int accent}) {
  const circleD = 0.022;
  final nameX = x + circleD + 0.040;
  final nameW = w * 0.33;
  final amountX = nameX + nameW + 0.016;
  final amountW = x + w - amountX;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y + 0.002, w: circleD, h: circleD, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'mahari_c_$n'),
    _mLockedText('$n', x: x, y: y + 0.004, w: circleD, h: 0.018, fontSize: 8, fontWeight: FontWeight.w900, align: TextAlign.center, color: 0xFFFFFFFF, tag: 'mahari_n_$n'),
    _mLockedText(emoji, x: x + circleD + 0.004, y: y, w: 0.032, h: circleD, fontSize: 11, tag: 'mahari_e_$n'),
    _mBlank('mahari_${n}_name', nameX, y + 0.002, nameW, ink: ink, fontSize: 9.5, startText: defaultName),
    _mBlankUnderline(nameX, y + 0.018, nameW),
    _mBlank('mahari_${n}_amount', amountX, y + 0.002, amountW, ink: ink, fontSize: 9, startText: amountHint),
    _mBlankUnderline(amountX, y + 0.018, amountW),
  ];
}

/// One MASHAHIDI witness line — name + Sahihi (signature) + Tarehe.
List<NgmySlideElement> _mWitnessRow(String side, int n, double x, double y, double w, {required int ink, required int accent}) {
  final signW = w * 0.44;
  final dateX = x + signW + 0.02;
  final dateW = x + w - dateX;
  return [
    _mLockedText('$n.', x: x, y: y, w: 0.024, h: 0.018, fontSize: 8.5, fontWeight: FontWeight.w800, color: accent, tag: 'wit_n_${side}_$n'),
    _mBlank('witness_${side}_${n}_name', x + 0.024, y, w - 0.024, ink: ink, fontSize: 9, startText: '✚'),
    _mBlankUnderline(x + 0.024, y + 0.016, w - 0.024),
    _mLockedText('Sahihi:', x: x, y: y + 0.026, w: 0.09, h: 0.016, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'wit_sl_${side}_$n'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.09,
      y: y + 0.022,
      w: signW - 0.09,
      h: 0.024,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '${_kSign}witness_${side}_$n',
    ),
    _mLockedText('Tarehe:', x: dateX, y: y + 0.026, w: 0.09, h: 0.016, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'wit_dl_${side}_$n'),
    _mBlank('witness_${side}_${n}_date', dateX + 0.09, y + 0.024, dateW - 0.09, ink: ink, fontSize: 8, startText: '✚'),
    _mBlankUnderline(dateX + 0.09, y + 0.038, dateW - 0.09),
  ];
}

/// MCHUMBA (MUME) / MCHUMBA (MKE) box — name, signature, date.
List<NgmySlideElement> _mPartySignBox(String key, String label, double x, double y, double w, double h, {required int ink, required int accent}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: h, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.1, tag: 'partybox_$key'),
    _mLockedText(label, x: x, y: y + 0.006, w: w, h: 0.018, fontSize: 9.5, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'partybox_t_$key'),
    _mLockedText('Jina:', x: x + 0.012, y: y + 0.028, w: 0.07, h: 0.016, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_jl_$key'),
    _mBlank('${key}_jina', x + 0.078, y + 0.026, w - 0.094, ink: ink, fontSize: 8.5, startText: '✚'),
    _mBlankUnderline(x + 0.078, y + 0.042, w - 0.094),
    _mLockedText('Sahihi:', x: x + 0.012, y: y + 0.054, w: 0.08, h: 0.016, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_sl_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.09,
      y: y + 0.050,
      w: w - 0.106,
      h: 0.024,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$_kSign$key',
    ),
    _mLockedText('Tarehe:', x: x + 0.012, y: y + 0.078, w: 0.08, h: 0.016, fontSize: 8, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_dl_$key'),
    _mBlank('${key}_tarehe', x + 0.09, y + 0.076, w - 0.106, ink: ink, fontSize: 8.5, startText: '✚'),
    _mBlankUnderline(x + 0.09, y + 0.092, w - 0.106),
  ];
}

/// Decorative round family/church seal between the two party boxes.
List<NgmySlideElement> _mSeal(double cx, double cy, double d, {required int accent, required int ink}) {
  final x = cx - d / 2;
  final y = cy - d / 2;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y, w: d, h: d, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.8, tag: 'seal_ring'),
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x + d * 0.1, y: y + d * 0.1, w: d * 0.8, h: d * 0.8, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1, tag: 'seal_ring2'),
    _mLockedText('MUHURI WA\nFAMILIA /\nKANISA\n(HIARI)', x: x + d * 0.1, y: y + d * 0.24, w: d * 0.8, h: d * 0.5, fontSize: 8.5, fontWeight: FontWeight.w800, align: TextAlign.center, color: ink, tag: 'seal_text'),
  ];
}

/// Footer bar — MWANDISHI (who wrote it) + MAELEZO YA ZIADA (extra notes).
List<NgmySlideElement> _mFooter(double x, double y, double w, {required int ink, required int accent}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.078, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.0, tag: 'footer_box'),
    _mLockedText('MWANDISHI:', x: x + 0.014, y: y + 0.006, w: w - 0.028, h: 0.016, fontSize: 8.5, fontWeight: FontWeight.w800, color: accent, tag: 'footer_wl'),
    _mBlank('mwandishi', x + 0.014, y + 0.022, w - 0.028, ink: ink, fontSize: 9, startText: '✚'),
    _mBlankUnderline(x + 0.014, y + 0.036, w - 0.028),
    _mLockedText('MAELEZO YA ZIADA:', x: x + 0.014, y: y + 0.044, w: w - 0.028, h: 0.014, fontSize: 8.5, fontWeight: FontWeight.w800, color: accent, tag: 'footer_nl'),
    _mBlank('maelezo_ziada', x + 0.014, y + 0.056, w - 0.028, ink: ink, fontSize: 8.5, startText: '✚'),
    _mBlankUnderline(x + 0.014, y + 0.070, w - 0.028),
  ];
}

// ── Template registry ──────────────────────────────────────────────────────

const List<NgmyMarriagePaperTemplate> kNgmyMarriagePaperTemplates = [
  NgmyMarriagePaperTemplate(
    id: 'heritage_gold',
    name: 'Urithi wa Dhahabu',
    description: 'Mpaka wa kitamaduni · rangi ya dhahabu na kahawia.',
    paperStyle: NgmyMarriagePaperStyle.heritageGold,
    background: 0xFFF9F1DD,
    ink: 0xFF3A2415,
    accent: 0xFF5C3A1E,
    bannerFill: 0xFF5C3A1E,
    bannerText: 0xFFF9F1DD,
    previewColors: [Color(0xFFF9F1DD), Color(0xFF5C3A1E), Color(0xFFD4AF37)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'heritage_crimson',
    name: 'Urithi wa Nyekundu',
    description: 'Mpaka wa kitamaduni · rangi ya nyekundu na shaba.',
    paperStyle: NgmyMarriagePaperStyle.heritageCrimson,
    background: 0xFFFAF0E6,
    ink: 0xFF3A2012,
    accent: 0xFF6B2A1E,
    bannerFill: 0xFF6B2A1E,
    bannerText: 0xFFFAF0E6,
    previewColors: [Color(0xFFFAF0E6), Color(0xFF6B2A1E), Color(0xFFE0A458)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'elegant_navy',
    name: 'Umoja Mzuri',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya bluu ya kifalme.',
    paperStyle: NgmyMarriagePaperStyle.elegantNavy,
    background: 0xFFFFFEFB,
    ink: 0xFF12213D,
    accent: 0xFFB8860B,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFEFB), Color(0xFF12213D), Color(0xFFB8860B)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'elegant_gold',
    name: 'Umoja wa Dhahabu',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.elegantGold,
    background: 0xFFFFFCF3,
    ink: 0xFF2B2110,
    accent: 0xFFA6843A,
    bannerFill: 0xFFA6843A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF3), Color(0xFFA6843A), Color(0xFF6B4A12)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'kente_sunset',
    name: 'Kente ya Jua',
    description: 'Nguo ya kente yenye dirisha la karatasi katikati.',
    paperStyle: NgmyMarriagePaperStyle.kenteSunset,
    background: 0xFFFFF6E4,
    ink: 0xFF3A2415,
    accent: 0xFF1B5E20,
    bannerFill: 0xFF1B5E20,
    bannerText: 0xFFFFF6E4,
    previewColors: [Color(0xFFFFF6E4), Color(0xFF1B5E20), Color(0xFFD4AF37)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'indigo_mudcloth',
    name: 'Nguo ya Indigo',
    description: 'Nguo ya udongo yenye alama · karatasi ndani.',
    paperStyle: NgmyMarriagePaperStyle.indigoMudcloth,
    background: 0xFFF7F0E4,
    ink: 0xFF1A237E,
    accent: 0xFF1A237E,
    bannerFill: 0xFF1A237E,
    bannerText: 0xFFF7F0E4,
    previewColors: [Color(0xFFF7F0E4), Color(0xFF1A237E), Color(0xFFC9A227)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'adinkra_royal',
    name: 'Muhuri wa Adinkra',
    description: 'Amri ya kifalme · bendi za muhuri juu na chini.',
    paperStyle: NgmyMarriagePaperStyle.adinkraRoyal,
    background: 0xFFFFF8EC,
    ink: 0xFF6B3F1F,
    accent: 0xFF8B5A2B,
    bannerFill: 0xFF6B3F1F,
    bannerText: 0xFFFFF8EC,
    previewColors: [Color(0xFFFFF8EC), Color(0xFF6B3F1F), Color(0xFFD4AF37)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'nile_lotus',
    name: 'Lotus ya Nile',
    description: 'Nguzo za papyrus na ua la lotus juu.',
    paperStyle: NgmyMarriagePaperStyle.nileLotus,
    background: 0xFFF4F7F4,
    ink: 0xFF0F5C5C,
    accent: 0xFF0F5C5C,
    bannerFill: 0xFF0F5C5C,
    bannerText: 0xFFF4F7F4,
    previewColors: [Color(0xFFF4F7F4), Color(0xFF0F5C5C), Color(0xFFC9A227)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'shweshwe_ivory',
    name: 'Shweshwe',
    description: 'Nguo ya shweshwe · kadi ya pembe ndani.',
    paperStyle: NgmyMarriagePaperStyle.shweshweIvory,
    background: 0xFFF8F4EE,
    ink: 0xFF1B2A4A,
    accent: 0xFFC45C3E,
    bannerFill: 0xFF1B2A4A,
    bannerText: 0xFFF8F4EE,
    previewColors: [Color(0xFFF8F4EE), Color(0xFF1B2A4A), Color(0xFFC45C3E)],
  ),
  NgmyMarriagePaperTemplate(
    id: 'rings_ndoa',
    name: 'Hati ya Ndoa',
    description: 'Pete mbili · vichwa vya kidonge · hati rasmi ya ndoa.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFFFFFFF8,
    bannerText: 0xFF12213D,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.ringsNdoa,
  ),
  NgmyMarriagePaperTemplate(
    id: 'couple_taarifa',
    name: 'Taarifa za Wanandoa',
    description: 'Picha ya mwanamume na mwanamke · kadi mbili za taarifa.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.coupleCards,
  ),
  NgmyMarriagePaperTemplate(
    id: 'barua_kuhowesha',
    name: 'Barua ya Kuhowesha',
    description: 'Barua rasmi · orodha ya NIMETOWEA · mashahidi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.kuhoweshaForm,
  ),
  NgmyMarriagePaperTemplate(
    id: 'mahari_pande',
    name: 'Mahari ya Pande',
    description: 'Masharti ya mahari · pande mbili za sahihi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF1A2744,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1A2744,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF1A2744), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.mahariPande,
  ),
  NgmyMarriagePaperTemplate(
    id: 'sheria_familia',
    name: 'Sheria za Familia',
    description: 'Mti wa familia · sheria za pamoja · kijani.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryGreen,
    background: 0xFFFFFDF8,
    ink: 0xFF1F4D3A,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1F4D3A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFDF8), Color(0xFF1F4D3A), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.familiaMti,
  ),
  NgmyMarriagePaperTemplate(
    id: 'ndoa_safi',
    name: 'Ndoa ya Pamoja',
    description: 'Safu mbili · mume na mke · masharti ya ndoa.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.ndoaSafi,
  ),
  NgmyMarriagePaperTemplate(
    id: 'pete_pana',
    name: 'Pete Pana',
    description: 'Pete kubwa za dhahabu · nafasi wazi · hati ya heshima.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF3A2A10,
    accent: 0xFFC9A227,
    bannerFill: 0xFFC9A227,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFFC9A227), Color(0xFF3A2A10)],
    layoutKind: NgmyMarriageLayoutKind.peteWide,
  ),
  NgmyMarriagePaperTemplate(
    id: 'muhuri_familia',
    name: 'Muhuri wa Familia',
    description: 'Muhuri mkubwa juu · fomu rasmi ya familia.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.muhuriCrest,
  ),
  NgmyMarriagePaperTemplate(
    id: 'fomu_wazi',
    name: 'Fomu ya Ndoa',
    description: 'Fomu yenye mistari · namba · sehemu wazi za kujaza.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF1A2744,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1A2744,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF1A2744), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.fomuWazi,
  ),
  NgmyMarriagePaperTemplate(
    id: 'upendo_dhahabu',
    name: 'Upendo wa Dhahabu',
    description: 'Mapambo ya dhahabu · picha za wanandoa · rangi ya waridi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryRose,
    background: 0xFFFFF8F5,
    ink: 0xFF7A3B4A,
    accent: 0xFFC9A227,
    bannerFill: 0xFF7A3B4A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFF8F5), Color(0xFF7A3B4A), Color(0xFFC9A227)],
    layoutKind: NgmyMarriageLayoutKind.upendoOrnate,
  ),
];

NgmyMarriagePaperTemplate? ngmyMarriageTemplateById(String id) {
  for (final t in kNgmyMarriagePaperTemplates) {
    if (t.id == id) return t;
  }
  return null;
}

// ── Content builder — certificate layouts (classic + 10 unique forms) ──────

List<NgmySlideElement> _buildPage1Content(NgmyMarriagePaperTemplate tpl) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [_mBgImage(bgUrl), ..._layoutPage1(tpl)];
}

List<NgmySlideElement> _buildPage2Content(NgmyMarriagePaperTemplate tpl) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [_mBgImage(bgUrl), ..._layoutPage2(tpl)];
}

List<NgmySlideElement> _layoutPage1(NgmyMarriagePaperTemplate tpl) {
  // Every Hati ya Ndoa paper uses the same certificate the user sent:
  // rings, pills, labeled lines, two-column witnesses, NGMY mark.
  return _layoutRingsNdoaPage1(tpl);
}

List<NgmySlideElement> _layoutPage2(NgmyMarriagePaperTemplate tpl) {
  switch (tpl.layoutKind) {
    case NgmyMarriageLayoutKind.classic:
      return _layoutClassicPage2(tpl);
    case NgmyMarriageLayoutKind.ringsNdoa:
      return _layoutRingsNdoaPage2(tpl);
    case NgmyMarriageLayoutKind.coupleCards:
      return _layoutCoupleCardsPage2(tpl);
    case NgmyMarriageLayoutKind.kuhoweshaForm:
      return _layoutKuhoweshaFormPage2(tpl);
    case NgmyMarriageLayoutKind.mahariPande:
      return _layoutMahariPandePage2(tpl);
    case NgmyMarriageLayoutKind.familiaMti:
      return _layoutFamiliaMtiPage2(tpl);
    case NgmyMarriageLayoutKind.ndoaSafi:
      return _layoutNdoaSafiPage2(tpl);
    case NgmyMarriageLayoutKind.peteWide:
      return _layoutPeteWidePage2(tpl);
    case NgmyMarriageLayoutKind.muhuriCrest:
      return _layoutMuhuriCrestPage2(tpl);
    case NgmyMarriageLayoutKind.fomuWazi:
      return _layoutFomuWaziPage2(tpl);
    case NgmyMarriageLayoutKind.upendoOrnate:
      return _layoutUpendoOrnatePage2(tpl);
  }
}

/// One page — title, intro frame, UTANGULIZI, MAHARI, MASHAHIDI, signs, footer.
List<NgmySlideElement> _layoutClassicPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  out.addAll([
    _mLockedText('HATI YA KUHOWESHA', x: cx, y: 0.022, w: cw, h: 0.032, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + cw * 0.22, y: 0.054, w: cw * 0.56, h: 0.0022, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'title_rule'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.70, y: 0.020, w: 0.21, h: 0.032, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.0, tag: 'tarehe_box'),
    _mLockedText('TAREHE:', x: 0.70, y: 0.022, w: 0.21, h: 0.012, fontSize: 7, fontWeight: FontWeight.w800, align: TextAlign.center, color: accent, tag: 'tarehe_lbl'),
    _mBlank('tarehe', 0.705, 0.032, 0.20, ink: ink, fontSize: 8, startText: '__ / __ / __'),
    // White frame sits below the title rule — not touching it, not gold-washed.
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.068, w: cw, h: 0.052, fillColor: 0xFFFFFFFF, strokeColor: accent, strokeWidth: 1.1, tag: 'intro_frame'),
    _mLockedText('(BARUA YA UCHUMBA)', x: cx, y: 0.070, w: cw, h: 0.016, fontSize: 9.5, fontWeight: FontWeight.w700, align: TextAlign.center, color: accent, tag: 'subtitle'),
    _mLockedText(
      'Kwa makubaliano ya pande zote mbili, tunatangaza rasmi uchumba huu mbele ya familia, mashahidi na jamii.',
      x: cx + 0.014,
      y: 0.086,
      w: cw - 0.028,
      h: 0.030,
      fontSize: 9,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: ink,
      tag: 'first_sentence',
    ),
  ]);

  double y = 0.128;
  out.addAll(_mBanner('UTANGULIZI', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.032;
  out.addAll(_mRun([
    const NgmyMSeg.text('Mimi '),
    const NgmyMSeg.blank('bride_name', 0.11),
    const NgmyMSeg.text(', binti wa familia ya '),
    const NgmyMSeg.blank('bride_family', 0.12),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.024;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('bride_house', 0.11),
    const NgmyMSeg.text(', ninathibitisha kwa hiari yangu kuwa'),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.024;
  out.addAll(_mRun([
    const NgmyMSeg.text('nimemkubali '),
    const NgmyMSeg.blank('groom_name', 0.11),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family', 0.12),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.024;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house', 0.11),
    const NgmyMSeg.text(', kuwa mchumba wangu rasmi.'),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.022;
  out.add(_mLockedShape(shape: NgmySlideShapeKind.line, x: cx + 0.22, y: y, w: cw - 0.44, h: 0.002, strokeColor: accent, strokeWidth: 1.0, tag: 'mid_rule'));
  y += 0.016;
  out.addAll(_mRun([
    const NgmyMSeg.text('Aidha, mimi '),
    const NgmyMSeg.blank('groom_name2', 0.11),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family2', 0.12),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.024;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house2', 0.11),
    const NgmyMSeg.text(', ninathibitisha kuwa nimemchukua'),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.024;
  out.addAll(_mRun([
    const NgmyMSeg.blank('bride_name2', 0.11),
    const NgmyMSeg.text(' kuwa mchumba wangu rasmi kwa nia ya kufunga ndoa.'),
  ], cx, y, ink: ink, fontSize: 9.5));
  y += 0.028;

  out.addAll(_mBanner('MAHARI / VITU VYA KUTOA', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.030;
  out.add(_mLockedText('Mchumba atatoa vitu vifuatavyo:', x: cx, y: y, w: cw, h: 0.016, fontSize: 9, fontWeight: FontWeight.w600, color: ink, tag: 'mahari_sub'));
  y += 0.020;
  const mahariRows = [
    ('👤', 'Kichwa cha Mtu', '[Kiasi cha Fedha (mfano: \$1,000)]'),
    ('🐐', 'Mbuzi', '[Idadi (mfano: 2)]'),
    ('🐍', "Ng'oka", '[Maelezo]'),
    ('🏺', 'Mmoko', '[Maelezo]'),
    ('➕', '[Kipengele kingine]', '[Maelezo]'),
    ('➕', '[Kipengele kingine]', '[Maelezo]'),
  ];
  for (var i = 0; i < mahariRows.length; i++) {
    final (emoji, name, hint) = mahariRows[i];
    out.addAll(_mMahariRow(i + 1, emoji, name, hint, cx, y, cw, ink: ink, accent: accent));
    y += 0.030;
  }
  y += 0.008;

  out.addAll(_mBanner('MASHAHIDI', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.030;
  final colW = (cw - 0.03) / 2;
  out.addAll([
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: y, w: colW, h: 0.020, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_h_mume'),
    _mLockedText('UPANDE WA MUME', x: cx, y: y + 0.002, w: colW, h: 0.016, fontSize: 8, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.bannerText, tag: 'wit_h_mume_t'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + colW + 0.03, y: y, w: colW, h: 0.020, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_h_mke'),
    _mLockedText('UPANDE WA MKE', x: cx + colW + 0.03, y: y + 0.002, w: colW, h: 0.016, fontSize: 8, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.bannerText, tag: 'wit_h_mke_t'),
  ]);
  y += 0.026;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: accent));
    y += 0.050;
  }
  y += 0.008;

  const boxH = 0.108;
  final boxW = cw * 0.40;
  out.addAll(_mPartySignBox('mchumba_mume', 'MCHUMBA (MUME)', cx, y, boxW, boxH, ink: ink, accent: accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MCHUMBA (MKE)', cx + cw - boxW, y, boxW, boxH, ink: ink, accent: accent));
  out.addAll(_mSeal(0.5, y + boxH / 2, 0.10, accent: accent, ink: ink));
  y += boxH + 0.010;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: accent));

  return out;
}

/// Page 2 — MASHAHIDI, MCHUMBA (MUME)/(MKE) + seal, footer.
List<NgmySlideElement> _layoutClassicPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  double y = 0.075;
  out.addAll(_mBanner('MASHAHIDI', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.05;
  final colW = (cw - 0.03) / 2;
  out.addAll([
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: y, w: colW, h: 0.028, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_h_mume'),
    _mLockedText('UPANDE WA MUME', x: cx, y: y + 0.004, w: colW, h: 0.02, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.bannerText, tag: 'wit_h_mume_t'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + colW + 0.03, y: y, w: colW, h: 0.028, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_h_mke'),
    _mLockedText('UPANDE WA MKE', x: cx + colW + 0.03, y: y + 0.004, w: colW, h: 0.02, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: tpl.bannerText, tag: 'wit_h_mke_t'),
  ]);
  y += 0.05;
  const witnessRowH = 0.088;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: accent));
    y += witnessRowH;
  }
  y += 0.05;

  // MCHUMBA (MUME) / MCHUMBA (MKE) + seal.
  const boxH = 0.2;
  final boxW = cw * 0.4;
  out.addAll(_mPartySignBox('mchumba_mume', 'MCHUMBA (MUME)', cx, y, boxW, boxH, ink: ink, accent: accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MCHUMBA (MKE)', cx + cw - boxW, y, boxW, boxH, ink: ink, accent: accent));
  out.addAll(_mSeal(0.5, y + boxH / 2, 0.19, accent: accent, ink: ink));
  y += boxH + 0.04;

  // Footer.
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: accent));

  return out;
}

/// Soft picker preview — unique chrome per certificate layout.
Widget ngmyMarriageTemplateLivePreview(String templateId) {
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;
  final ink = Color(tpl.ink);
  final accent = Color(tpl.accent);
  final paper = ngmyMarriagePaperPng(tpl.paperStyle);
  return Stack(
    fit: StackFit.expand,
    children: [
      Positioned.fill(
        child: Image.memory(paper, fit: BoxFit.cover, gaplessPlayback: true, filterQuality: FilterQuality.medium),
      ),
      Padding(
        padding: const EdgeInsets.fromLTRB(16, 18, 16, 14),
        child: _NgmyCertPreview(tpl: tpl, ink: ink, accent: accent),
      ),
    ],
  );
}

class _NgmyCertPreview extends StatelessWidget {
  const _NgmyCertPreview({required this.tpl, required this.ink, required this.accent});

  final NgmyMarriagePaperTemplate tpl;
  final Color ink;
  final Color accent;

  Widget _bar({double w = 1, double h = 5}) => Align(
        alignment: Alignment.centerLeft,
        child: FractionallySizedBox(
          widthFactor: w,
          child: Container(height: h, decoration: BoxDecoration(color: ink.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(3))),
        ),
      );

  Widget _pill(String t) => Container(
        height: 13,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: const Color(_certIvory),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: const Color(_certGold), width: 0.9),
        ),
        child: Text(t, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 6.5, letterSpacing: 0.3)),
      );

  Widget _ribbon(String t) => Container(
        height: 13,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Color(tpl.bannerFill), borderRadius: BorderRadius.circular(3)),
        child: Text(t, style: TextStyle(color: Color(tpl.bannerText), fontWeight: FontWeight.w900, fontSize: 6.5, letterSpacing: 0.3)),
      );

  Widget _rings({double size = 22}) => Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(width: size, height: size, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(_certGold), width: 1.6))),
          Transform.translate(
            offset: Offset(-size * 0.38, 0),
            child: Container(width: size, height: size, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(_certGold), width: 1.6))),
          ),
        ],
      );

  Widget _person({required bool female, double size = 22}) {
    final fill = female ? const Color(0xFF7A3B4A) : ink;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(_certIvory), border: Border.all(color: const Color(_certGold), width: 1.1)),
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: size * 0.16, child: Container(width: size * 0.32, height: size * 0.32, decoration: BoxDecoration(color: fill, shape: BoxShape.circle))),
          Positioned(bottom: size * 0.06, child: Container(width: size * (female ? 0.62 : 0.50), height: size * 0.34, decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(8)))),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _rings(),
        const SizedBox(height: 4),
        Text('HATI YA NDOA', textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 12)),
        Text('Hati ya Makubaliano ya Ndoa', textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.7), fontSize: 7, fontWeight: FontWeight.w600)),
        const SizedBox(height: 6),
        _pill('TAARIFA ZA WANANDOA'),
        const SizedBox(height: 6),
        _bar(),
        const SizedBox(height: 3),
        _bar(w: 0.9),
        const SizedBox(height: 3),
        _bar(w: 0.7),
        const SizedBox(height: 8),
        _pill('TAMKO LA MAKUBALIANO'),
        const SizedBox(height: 5),
        _bar(w: 1),
        const SizedBox(height: 3),
        _bar(w: 0.95),
        const SizedBox(height: 8),
        _pill('MASHAHIDI'),
        const Spacer(),
        Text('NGMY', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 8)),
        Text(tpl.name, style: TextStyle(color: accent, fontWeight: FontWeight.w700, fontSize: 7)),
      ],
    );
  }
}


/// Built in [ngmy_ndoa_hati_deck.dart] so Hati ya Ndoa can reuse the
/// Kuhowa / Kuhowesha page without a circular import.

void ngmyUpdateMarriageDeckMeta(NgmySlideDeck deck, {String? state, String? templateId}) {
  if (templateId != null) {
    final tpl = ngmyMarriageTemplateById(templateId);
    if (tpl != null) {
      deck.themeId = 'marriage_${tpl.id}';
      deck.name = 'Hati ya Kuhowesha — ${tpl.name}';
    }
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
                      decoration: BoxDecoration(color: const Color(0xFFD4AF37).withValues(alpha: 0.45), borderRadius: BorderRadius.circular(2)),
                    ),
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(11),
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFE6C15C), Color(0xFFB8860B), Color(0xFF8B6914)]),
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
                            Text('Chagua muundo wa hati', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF1A1208))),
                            const SizedBox(height: 2),
                            Text('Hati ya Ndoa · ${kNgmyMarriagePaperTemplates.length} miundo', style: const TextStyle(fontSize: 11.5, color: Color(0xFF8B6914), fontWeight: FontWeight.w700)),
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
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 16, crossAxisSpacing: 14, childAspectRatio: 0.62),
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
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.08), blurRadius: 14, offset: const Offset(0, 6))],
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
                  child: AspectRatio(aspectRatio: 9 / 16, child: ngmyMarriageTemplateLivePreview(template.id)),
                ),
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(11, 8, 11, 11),
                decoration: BoxDecoration(border: Border(top: BorderSide(color: const Color(0xFFD4AF37).withValues(alpha: isDark ? 0.18 : 0.16)))),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(template.name, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 0.1, color: isDark ? Colors.white : const Color(0xFF1A1208))),
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
