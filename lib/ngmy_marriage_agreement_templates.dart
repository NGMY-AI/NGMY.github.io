import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_models.dart';

// Shared with ngmy_slides_marriage_agreement.dart (keep in sync)
const _kLocked = 'marriage_locked';
const _kField = 'marriage_field_';
const _kSign = 'marriage_sign_';

/// Soft underlines — never dark/black (picker + print).
const _softLine = 0xFFE2D8C8;

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
NgmySlideElement _mBlank(String key, double x, double y, double w, {int ink = 0xFF1A1208, double fontSize = 8.5, String startText = ''}) {
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
      out.add(_mBlank(s.blankKey!, cx, y - 0.002, s.blankW, ink: ink, fontSize: fontSize));
      out.add(_mBlankUnderline(cx, y, s.blankW));
      cx += s.blankW + 0.008;
    }
  }
  return out;
}

/// A section-header ribbon (UTANGULIZI / MAHARI... / MASHAHIDI).
List<NgmySlideElement> _mBanner(String text, double y, double x, double w, {required int fill, required int textColor}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.036, fillColor: fill, strokeColor: fill, strokeWidth: 0, tag: 'banner_$text'),
    _mLockedText(text, x: x, y: y + 0.004, w: w, h: 0.028, fontSize: 14, fontWeight: FontWeight.w900, align: TextAlign.center, color: textColor, tag: 'banner_t_$text'),
  ];
}

List<NgmySlideElement> _mStaticPara(String text, double x, double y, double w, double h, {required int ink, double fontSize = 12}) {
  return [_mLockedText(text, x: x, y: y, w: w, h: h, fontSize: fontSize, fontWeight: FontWeight.w500, align: TextAlign.left, color: ink, tag: 'para_$y')];
}

/// One MAHARI / VITU VYA KUTOA row — numbered circle, an editable item-name
/// (pre-filled for the first four, blank for the rest so users can add more
/// gift types), and an editable amount/description field.
List<NgmySlideElement> _mMahariRow(int n, String emoji, String defaultName, String amountHint, double x, double y, double w, {required int ink, required int accent}) {
  const circleD = 0.044;
  final nameX = x + circleD + 0.055;
  final nameW = w * 0.33;
  final amountX = nameX + nameW + 0.02;
  final amountW = x + w - amountX;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y, w: circleD, h: circleD, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'mahari_c_$n'),
    _mLockedText('$n', x: x, y: y + 0.004, w: circleD, h: circleD - 0.008, fontSize: 12, fontWeight: FontWeight.w900, align: TextAlign.center, color: 0xFFFFFFFF, tag: 'mahari_n_$n'),
    _mLockedText(emoji, x: x + circleD + 0.006, y: y - 0.003, w: 0.045, h: circleD, fontSize: 17, tag: 'mahari_e_$n'),
    _mBlank('mahari_${n}_name', nameX, y + 0.008, nameW, ink: ink, fontSize: 11.5, startText: defaultName),
    _mBlankUnderline(nameX, y + 0.026, nameW),
    _mBlank('mahari_${n}_amount', amountX, y + 0.008, amountW, ink: ink, fontSize: 10.5, startText: amountHint),
    _mBlankUnderline(amountX, y + 0.026, amountW),
  ];
}

/// One MASHAHIDI witness line — name + Sahihi (signature) + Tarehe.
List<NgmySlideElement> _mWitnessRow(String side, int n, double x, double y, double w, {required int ink, required int accent}) {
  final signW = w * 0.44;
  final dateX = x + signW + 0.03;
  final dateW = x + w - dateX;
  return [
    _mLockedText('$n.', x: x, y: y, w: 0.036, h: 0.024, fontSize: 11, fontWeight: FontWeight.w800, color: accent, tag: 'wit_n_${side}_$n'),
    _mBlank('witness_${side}_${n}_name', x + 0.036, y, w - 0.036, ink: ink, fontSize: 11, startText: '[Jina la shahidi]'),
    _mBlankUnderline(x + 0.036, y + 0.022, w - 0.036),
    _mLockedText('Sahihi:', x: x, y: y + 0.036, w: 0.11, h: 0.02, fontSize: 9.5, fontWeight: FontWeight.w600, color: ink, tag: 'wit_sl_${side}_$n'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.1,
      y: y + 0.032,
      w: signW - 0.1,
      h: 0.03,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '${_kSign}witness_${side}_$n',
    ),
    _mLockedText('Tarehe:', x: dateX, y: y + 0.036, w: 0.11, h: 0.02, fontSize: 9.5, fontWeight: FontWeight.w600, color: ink, tag: 'wit_dl_${side}_$n'),
    _mBlank('witness_${side}_${n}_date', dateX + 0.1, y + 0.032, dateW - 0.1, ink: ink, fontSize: 9.5),
    _mBlankUnderline(dateX + 0.1, y + 0.05, dateW - 0.1),
  ];
}

/// MCHUMBA (MUME) / MCHUMBA (MKE) box — name, signature, date.
List<NgmySlideElement> _mPartySignBox(String key, String label, double x, double y, double w, double h, {required int ink, required int accent}) {
  return [
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: h, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.3, tag: 'partybox_$key'),
    _mLockedText(label, x: x, y: y + 0.014, w: w, h: 0.026, fontSize: 12.5, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'partybox_t_$key'),
    _mLockedText('Jina:', x: x + 0.02, y: y + 0.055, w: 0.08, h: 0.022, fontSize: 10, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_jl_$key'),
    _mBlank('${key}_jina', x + 0.095, y + 0.055, w - 0.115, ink: ink, fontSize: 10.5),
    _mBlankUnderline(x + 0.095, y + 0.074, w - 0.115),
    _mLockedText('Sahihi:', x: x + 0.02, y: y + 0.095, w: 0.09, h: 0.022, fontSize: 10, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_sl_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + 0.11,
      y: y + 0.088,
      w: w - 0.13,
      h: 0.038,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$_kSign$key',
    ),
    _mLockedText('Tarehe:', x: x + 0.02, y: y + 0.14, w: 0.09, h: 0.022, fontSize: 10, fontWeight: FontWeight.w600, color: ink, tag: 'partybox_dl_$key'),
    _mBlank('${key}_tarehe', x + 0.11, y + 0.14, w - 0.13, ink: ink, fontSize: 10.5),
    _mBlankUnderline(x + 0.11, y + 0.158, w - 0.13),
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
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.13, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.1, tag: 'footer_box'),
    _mLockedText('MWANDISHI:', x: x + 0.02, y: y + 0.014, w: w - 0.04, h: 0.02, fontSize: 10.5, fontWeight: FontWeight.w800, color: accent, tag: 'footer_wl'),
    _mBlank('mwandishi', x + 0.02, y + 0.036, w - 0.04, ink: ink, fontSize: 11, startText: '[Jina la Mwandishi]'),
    _mBlankUnderline(x + 0.02, y + 0.054, w - 0.04),
    _mLockedText('MAELEZO YA ZIADA:', x: x + 0.02, y: y + 0.072, w: w - 0.04, h: 0.02, fontSize: 10.5, fontWeight: FontWeight.w800, color: accent, tag: 'footer_nl'),
    _mBlank('maelezo_ziada', x + 0.02, y + 0.094, w - 0.04, ink: ink, fontSize: 10.5, startText: '[Maelezo mengine kama inahitajika]'),
    _mBlankUnderline(x + 0.02, y + 0.112, w - 0.04),
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
];

NgmyMarriagePaperTemplate? ngmyMarriageTemplateById(String id) {
  for (final t in kNgmyMarriagePaperTemplates) {
    if (t.id == id) return t;
  }
  return null;
}

// ── Content builder — "Hati ya Kuhowesha (Barua ya Uchumba)" ───────────────
// Same content on every template; only the paper art + accent colors change.
// Split across two pages — generously sized text needs the room, and a
// two-page engagement certificate is normal for a document this detailed.

List<NgmySlideElement> _buildPage1Content(NgmyMarriagePaperTemplate tpl) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [_mBgImage(bgUrl), ..._layoutPage1(tpl)];
}

List<NgmySlideElement> _buildPage2Content(NgmyMarriagePaperTemplate tpl) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [_mBgImage(bgUrl), ..._layoutPage2(tpl)];
}

/// Page 1 — title, TAREHE, UTANGULIZI, MAHARI / VITU VYA KUTOA.
List<NgmySlideElement> _layoutPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  // Title + TAREHE box.
  out.addAll([
    _mLockedText('HATI YA KUHOWESHA', x: cx, y: 0.032, w: cw, h: 0.05, fontSize: 24, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('(BARUA YA UCHUMBA)', x: cx, y: 0.088, w: cw, h: 0.026, fontSize: 12.5, fontWeight: FontWeight.w700, align: TextAlign.center, color: accent, tag: 'subtitle'),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.68, y: 0.03, w: 0.23, h: 0.052, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.1, tag: 'tarehe_box'),
    _mLockedText('TAREHE:', x: 0.68, y: 0.036, w: 0.23, h: 0.016, fontSize: 8, fontWeight: FontWeight.w800, align: TextAlign.center, color: accent, tag: 'tarehe_lbl'),
    _mBlank('tarehe', 0.685, 0.058, 0.22, ink: ink, fontSize: 8.5, startText: '__ / __ / __'),
  ]);

  // UTANGULIZI banner + intro paragraphs with inline blanks.
  double y = 0.128;
  out.addAll(_mBanner('UTANGULIZI', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.05;
  out.addAll(_mRun([
    const NgmyMSeg.text('Mimi '),
    const NgmyMSeg.blank('bride_name', 0.18),
    const NgmyMSeg.text(', binti wa familia ya '),
    const NgmyMSeg.blank('bride_family', 0.2),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.042;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('bride_house', 0.18),
    const NgmyMSeg.text(', ninathibitisha kwa hiari yangu kuwa'),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.042;
  out.addAll(_mRun([
    const NgmyMSeg.text('nimemkubali '),
    const NgmyMSeg.blank('groom_name', 0.18),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family', 0.2),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.042;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house', 0.18),
    const NgmyMSeg.text(', kuwa mchumba wangu rasmi.'),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.044;
  out.add(_mLockedShape(shape: NgmySlideShapeKind.line, x: cx + 0.2, y: y, w: cw - 0.4, h: 0.002, strokeColor: accent, strokeWidth: 1.2, tag: 'mid_rule'));
  y += 0.03;
  out.addAll(_mRun([
    const NgmyMSeg.text('Aidha, mimi '),
    const NgmyMSeg.blank('groom_name2', 0.18),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family2', 0.2),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.042;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house2', 0.18),
    const NgmyMSeg.text(', ninathibitisha kuwa nimemchukua'),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.042;
  out.addAll(_mRun([
    const NgmyMSeg.blank('bride_name2', 0.18),
    const NgmyMSeg.text(' kuwa mchumba wangu rasmi kwa nia ya kufunga ndoa.'),
  ], cx, y, ink: ink, fontSize: 11.5));
  y += 0.046;
  out.addAll(_mStaticPara(
    'Kwa makubaliano ya pande zote mbili, tunatangaza rasmi uchumba huu mbele ya familia, mashahidi na jamii.',
    cx,
    y,
    cw,
    0.075,
    ink: ink,
    fontSize: 12,
  ));
  y += 0.086;

  // MAHARI / VITU VYA KUTOA.
  out.addAll(_mBanner('MAHARI / VITU VYA KUTOA', y, cx, cw, fill: tpl.bannerFill, textColor: tpl.bannerText));
  y += 0.05;
  out.add(_mLockedText('Mchumba atatoa vitu vifuatavyo:', x: cx, y: y, w: cw, h: 0.022, fontSize: 11, fontWeight: FontWeight.w600, color: ink, tag: 'mahari_sub'));
  y += 0.036;
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
    y += 0.047;
  }

  return out;
}

/// Page 2 — MASHAHIDI, MCHUMBA (MUME)/(MKE) + seal, footer.
List<NgmySlideElement> _layoutPage2(NgmyMarriagePaperTemplate tpl) {
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

/// Soft picker preview — one silhouette shared by all templates (same
/// content), just recolored per template.
Widget ngmyMarriageTemplateLivePreview(String templateId) {
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;
  final bg = Color(tpl.background);
  final ink = Color(tpl.ink);
  final accent = Color(tpl.accent);
  Widget bar({double w = 1, double h = 6}) => Align(
        alignment: Alignment.centerLeft,
        child: FractionallySizedBox(
          widthFactor: w,
          child: Container(height: h, decoration: BoxDecoration(color: ink.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(3))),
        ),
      );
  Widget ribbon(String t) => Container(
        height: 14,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(3)),
        child: Text(t, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 7, letterSpacing: 0.4)),
      );
  return ColoredBox(
    color: bg,
    child: Stack(
      fit: StackFit.expand,
      children: [
        Positioned.fill(
          child: DecoratedBox(
            decoration: BoxDecoration(border: Border.all(color: accent.withValues(alpha: 0.5), width: 5)),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 16, 14, 12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('HATI YA', textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 11)),
              Text('KUHOWESHA', textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 11)),
              const SizedBox(height: 10),
              ribbon('UTANGULIZI'),
              const SizedBox(height: 6),
              bar(),
              const SizedBox(height: 3),
              bar(w: 0.85),
              const SizedBox(height: 3),
              bar(w: 0.9),
              const SizedBox(height: 8),
              ribbon('MAHARI'),
              const SizedBox(height: 6),
              ...List.generate(3, (_) => Padding(padding: const EdgeInsets.only(bottom: 4), child: Row(children: [
                    Container(width: 10, height: 10, decoration: BoxDecoration(color: accent, shape: BoxShape.circle)),
                    const SizedBox(width: 6),
                    Expanded(child: bar(h: 5)),
                  ]))),
              const Spacer(),
              ribbon('MASHAHIDI'),
              const SizedBox(height: 8),
              Row(children: [Expanded(child: Container(height: 24, decoration: BoxDecoration(border: Border.all(color: accent, width: 1)))), const SizedBox(width: 6), Expanded(child: Container(height: 24, decoration: BoxDecoration(border: Border.all(color: accent, width: 1))))]),
              const SizedBox(height: 6),
              Text(tpl.name, textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 9)),
            ],
          ),
        ),
      ],
    ),
  );
}

/// Builds the two-page "Hati ya Kuhowesha" deck from a paper template —
/// page 1 is the title/UTANGULIZI/MAHARI, page 2 is MASHAHIDI/MCHUMBA/seal.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({required String templateId, String state = ''}) {
  ngmyClearMarriagePaperCache();
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;

  final page1 = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kuhowesha — Uk. 1',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPage1Content(tpl),
  );
  final page2 = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kuhowesha — Uk. 2',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPage2Content(tpl),
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Kuhowesha — ${tpl.name}',
    themeId: 'marriage_${tpl.id}',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: 'marriage_agreement',
    slides: [page1, page2],
  );
}

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
                            const Text('Hati ya Kuhowesha (Barua ya Uchumba)', style: TextStyle(fontSize: 11.5, color: Color(0xFF8B6914), fontWeight: FontWeight.w700)),
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
