import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_state_picker.dart';

const String kNgmyHatiKuhowaDeckKind = 'hati_kuhowa';
const String kNgmyHatiKuhoweshaDeckKind = 'hati_kuhoweya';

/// Soft underlines — never dark/black (picker + print).
const _softLine = 0xFFE2D8C8;

class NgmyHatiKuhowaTemplate {
  const NgmyHatiKuhowaTemplate({
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
// Fresh code for "Hati ya Kuhowa" — a distinct document from the Marriage
// Agreement. It reuses the generic locked/field/sign-zone markers from
// ngmy_slides_marriage_agreement.dart (kMarriageLocked/kMarriageFieldPrefix/
// kMarriageSignPrefix) because that's the shared contract the editor checks
// for tap-to-fill-only behavior — not because content is copied.

NgmySlideElement _hLockedText(
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
  double rotation = 0,
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
    rotation: rotation,
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

/// A big, faint "NGMY" mark tucked into the top-left corner (opposite the
/// TAREHE box, which sits top-right) — a watermark, not a readable label:
/// low alpha so it never competes with real content, and rotated at a
/// shallow diagonal (not a full 90°, per request — "sideways" rather than
/// straight up) so it reads as background texture rather than a heading.
NgmySlideElement _hWatermark(int ink) {
  return _hLockedText(
    'NGMY',
    x: -0.11,
    y: 0.025,
    w: 0.5,
    h: 0.09,
    fontSize: 60,
    fontWeight: FontWeight.w900,
    align: TextAlign.center,
    color: (0x0F << 24) | (ink & 0x00FFFFFF),
    rotation: -0.52,
    tag: 'watermark',
  );
}

NgmySlideElement _hLockedShape({
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
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

NgmySlideElement _hBgImage(String dataUrl) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.image,
    x: 0,
    y: 0,
    w: 1,
    h: 1,
    imageRef: dataUrl,
    fileName: '${kMarriageLocked}_bg',
  );
}

/// Box height for a blank/label at a given font size — must track fontSize
/// so the box is never shorter than the text it holds (a too-short box
/// breaks vertical centering, same root cause as the header padding bug).
double _hBlankH(double fontSize) => (fontSize * 0.0017).clamp(0.02, 0.06);

/// A tap-to-fill blank — no visible label until tapped.
NgmySlideElement _hBlank(
  String key,
  double x,
  double y,
  double w, {
  int ink = 0xFF1A1208,
  double fontSize = 8.5,
  String startText = '',
  TextAlign align = TextAlign.center,
  // When true, a name too long to fit at `fontSize` shrinks the font
  // instead of wrapping onto a second line — for fields like the
  // witness table's names, where a wrapped row would sit visually out
  // of alignment with every other single-line row around it.
  bool autoShrinkFont = false,
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: _hBlankH(fontSize),
    text: startText,
    fontSize: fontSize,
    fontWeight: FontWeight.w700,
    fontStyle: FontStyle.italic,
    color: ink,
    align: align,
    fileName: autoShrinkFont
        ? '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}:${fontSize.toStringAsFixed(1)}'
        : '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}',
  );
}

/// `y` must be the BOTTOM edge of the paired text box (not its top) — this
/// just adds a small visual gap so the line sits close under the text.
/// (Previously this added a large fixed offset from the text's top, which
/// is what pushed the underlines so far below the names.)
NgmySlideElement _hBlankUnderline(double x, double y, double w, {int color = _softLine}) {
  return _hLockedShape(shape: NgmySlideShapeKind.line, x: x, y: y + 0.002, w: w, h: 0.002, strokeColor: color, strokeWidth: 0.8, tag: 'ul_${x}_$y');
}

/// A single wrapped, editable paragraph field — one tap opens the normal
/// multi-line text editor for the whole block. Word-wrap is handled natively
/// by Flutter's Text/TextField layout, so lines always stay flush from the
/// left edge to the right edge of the paper with no manual width guessing
/// (that per-word positioning is what caused text to overlap/overrun before).
NgmySlideElement _hParagraphField(
  String key,
  double x,
  double y,
  double w,
  double h, {
  int ink = 0xFF1A1208,
  double fontSize = 12.5,
  String startText = '',
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: h,
    text: startText,
    fontSize: fontSize,
    fontWeight: FontWeight.w500,
    fontStyle: FontStyle.normal,
    color: ink,
    align: TextAlign.left,
    fileName: '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}',
  );
}

/// A section header (NIMETOWE / MASHAHIDI) — a small bordered frame sized
/// to fit the word (not a fixed width shared by both, and not oversized —
/// an oversized box was overlapping the table that follows it).
// Height only, per repeated request — NIMETOWA/NIMEPOKEYA CASH and
// MASHAHIDI were tall enough to crowd the rows around them.
// Width/fontSize untouched; the text's own vertical offset scales down
// with it so it stays centered in the shorter box.
// Shrunk further per request — the left/right border strokes (the box's
// "poles") read as too tall relative to the word inside them.
const _bannerBoxH = 0.036;
// The text's own top padding and line-box height stay proportional to
// _bannerBoxH via these ratios, so the word stays centered inside the box
// no matter how tall/short _bannerBoxH is tuned to.
const _bannerTextYRatio = 0.17;
const _bannerTextHRatio = 0.70;

List<NgmySlideElement> _hBanner(String text, double y, double x, double w, {required int fill}) {
  const fontSize = 30.0;
  final boxW = (text.length * fontSize * 0.00058 + 0.08).clamp(0.2, 0.5);
  const boxH = _bannerBoxH;
  final bx = x + (w - boxW) / 2;
  return [
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: bx, y: y, w: boxW, h: boxH, fillColor: 0x00000000, strokeColor: fill, strokeWidth: 1.4, tag: 'banner_box_$text'),
    _hLockedText(text, x: bx, y: y + boxH * _bannerTextYRatio, w: boxW, h: boxH * _bannerTextHRatio, fontSize: fontSize, fontWeight: FontWeight.w900, align: TextAlign.center, color: fill, tag: 'banner_t_$text'),
  ];
}

/// Same small-fit bordered frame as [_hBanner], but the word inside is a
/// tap-to-edit field (not locked text) — used for Hati ya Kuhoweya's
/// "NIMEPOKEYA CASH" header, which the user can rename.
List<NgmySlideElement> _hBannerField(String key, String defaultText, double y, double x, double w, {required int fill}) {
  const fontSize = 30.0;
  final boxW = (defaultText.length * fontSize * 0.00058 + 0.08).clamp(0.2, 0.5);
  const boxH = _bannerBoxH;
  final bx = x + (w - boxW) / 2;
  return [
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: bx, y: y, w: boxW, h: boxH, fillColor: 0x00000000, strokeColor: fill, strokeWidth: 1.4, tag: 'banner_box_$key'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: bx,
      y: y + boxH * _bannerTextYRatio,
      w: boxW,
      h: boxH * _bannerTextHRatio,
      text: defaultText,
      fontSize: fontSize,
      fontWeight: FontWeight.w900,
      fontStyle: FontStyle.normal,
      color: fill,
      align: TextAlign.center,
      fileName: '$kMarriageFieldPrefix$key:${boxW.toStringAsFixed(3)}',
    ),
  ];
}

/// Today's date as DD/MM/YYYY — used to auto-fill the Tarehe field so users
/// don't have to type today's date by hand.
String ngmyHatiKuhowaTodayDate() {
  final now = DateTime.now();
  String p2(int n) => n.toString().padLeft(2, '0');
  return '${p2(now.day)}/${p2(now.month)}/${now.year}';
}

/// TAREHE field, hugging the very top-right corner of the paper — no frame,
/// just the label and an underlined date, in alignment on one line.
List<NgmySlideElement> _hTareheBox(double x, double y, double w, {required int ink, required int accent}) {
  // A small fixed label width (just enough for "TAREHE:") instead of a
  // ratio share of the box — that's what was leaving a big empty gap
  // before the date value started.
  const labelW = 0.1;
  final valueX = x + labelW + 0.006;
  final valueW = x + w - valueX;
  // The underline should track the date text's own width (e.g.
  // "19/07/2026"), not the whole allocated box — otherwise it visibly
  // runs longer than the date itself.
  const underlineW = 0.12;
  return [
    // Same height formula as the date value's own box (_hBlankH), so both
    // are guaranteed to center on the exact same line — no more risk of
    // "TAREHE:" and the date drifting to different heights.
    _hLockedText('TAREHE:', x: x, y: y, w: labelW, h: _hBlankH(20), fontSize: 20, fontWeight: FontWeight.w800, align: TextAlign.left, color: accent, tag: 'tarehe_lbl'),
    _hBlank('tarehe', valueX, y, valueW, ink: ink, fontSize: 21, startText: ngmyHatiKuhowaTodayDate(), align: TextAlign.left),
    // Nudged right and closer to the text — it was sitting left of and
    // below where the date glyphs actually render. (Was tightened too far
    // to *0.55 at one point — eased back out a little.)
    _hBlankUnderline(valueX + 0.008, y + _hBlankH(21) * 0.8, underlineW, color: accent),
  ];
}

/// One NIMETOWE line item — plain numbering (matches the witness rows) and a
/// wide editable blank. No circle graphic. The underline gets an explicit
/// `nim_ul_$n` tag (instead of the generic coordinate-based one) so the
/// editor can reliably find and remove one whole row by number — used to
/// let users hide the (optional) 4th item.
List<NgmySlideElement> _hNimetoweRow(int n, String hint, double x, double y, double w, {required int ink, required int accent}) {
  final itemX = x + 0.042;
  final itemW = x + w - itemX;
  return [
    _hLockedText('$n.', x: x, y: y, w: 0.038, h: 0.034, fontSize: 21, fontWeight: FontWeight.w800, color: accent, tag: 'nim_n_$n'),
    _hBlank('mahari_$n', itemX, y + 0.002, itemW, ink: ink, fontSize: 21, startText: hint, align: TextAlign.left),
    _hLockedShape(
      shape: NgmySlideShapeKind.line,
      x: itemX,
      y: y + 0.002 + _hBlankH(21) + 0.002,
      w: itemW,
      h: 0.002,
      strokeColor: _softLine,
      strokeWidth: 0.8,
      tag: 'nim_ul_$n',
    ),
  ];
}

/// One MASHAHIDI witness line — name + Sahihi (signature), no date field.
/// Sized to sit in one column of the shared witness table. The signature
/// zone is deliberately wide/tall so a full signature has room to appear.
List<NgmySlideElement> _hWitnessLine(String side, int n, double x, double y, double w, {required int ink, required int accent}) {
  // The name field is a single line, never allowed to wrap. The signature
  // zone needs real HEIGHT (not just width) to actually be visible —
  // BoxFit.contain is limited by whichever dimension is smallest, and a
  // too-short box was the reason nothing appeared even after the padding
  // fix.
  // Widened from 0.48 — the name field needs more room to keep a long name
  // readable at close to its normal font size without wrapping onto a
  // second line, borrowed from the signature zone's width (not its height,
  // which is what actually matters for a usable signature).
  final nameW = w * 0.64;
  final sahihiLblX = x + nameW + 0.01;
  final signX = sahihiLblX + 0.05;
  final signW = x + w - signX;
  return [
    _hLockedText('$n.', x: x, y: y, w: 0.026, h: 0.024, fontSize: 13, fontWeight: FontWeight.w800, color: accent, tag: 'wln_${side}_$n'),
    _hBlank('witness_${side}_${n}_name', x + 0.026, y, nameW - 0.026, ink: ink, fontSize: 16, startText: '[Jina la Shahidi]', align: TextAlign.left, autoShrinkFont: true),
    _hBlankUnderline(x + 0.026, y + _hBlankH(16), nameW - 0.026),
    _hLockedText('Sahihi:', x: sahihiLblX, y: y, w: 0.046, h: 0.02, fontSize: 9, fontWeight: FontWeight.w600, color: ink, tag: 'wls_${side}_$n'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: signX,
      y: y - 0.004,
      w: signW,
      h: 0.05,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$kMarriageSignPrefix${side}_witness_$n',
    ),
    _hBlankUnderline(signX, y + 0.044, signW),
  ];
}

/// MWANDISHI — a single compact bordered bar (Jina + Sahihi inline), matching
/// the reference paper's footer-bar treatment instead of a tall stacked block.
List<NgmySlideElement> _hMwandishiBar(double x, double y, double w, {required int ink, required int accent}) {
  // Jina's underline and the signature's underline share one baseline
  // (0.09 below the row) so the two lines read as one aligned row instead
  // of sitting at different heights.
  const baselineOffset = 0.09;
  return [
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: 0.11, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.2, tag: 'mw_box'),
    _hLockedText('MWANDISHI', x: x + 0.022, y: y + 0.016, w: w - 0.044, h: 0.026, fontSize: 15, fontWeight: FontWeight.w800, color: accent, tag: 'mw_hdr'),
    _hLockedText('Jina:', x: x + 0.022, y: y + 0.056, w: 0.09, h: 0.028, fontSize: 15, fontWeight: FontWeight.w600, color: ink, tag: 'mw_jl'),
    _hBlank('mwandishi_jina', x + 0.125, y + 0.056, w * 0.38, ink: ink, fontSize: 15, align: TextAlign.left, autoShrinkFont: true),
    _hBlankUnderline(x + 0.125, y + baselineOffset - 0.002, w * 0.38),
    _hLockedText('Sahihi:', x: x + w * 0.5, y: y + 0.056, w: 0.09, h: 0.028, fontSize: 15, fontWeight: FontWeight.w600, color: ink, tag: 'mw_sl'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: x + w * 0.59,
      y: y + baselineOffset - 0.044,
      w: x + w - (x + w * 0.59) - 0.02,
      h: 0.044,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '${kMarriageSignPrefix}mwandishi',
    ),
    _hBlankUnderline(x + w * 0.59, y + baselineOffset - 0.002, x + w - (x + w * 0.59) - 0.02),
  ];
}

// ── Template registry ──────────────────────────────────────────────────────
// Reuses the same procedurally-generated "elegant" paper art as the Marriage
// Agreement's elegant_navy / elegant_gold templates — the user asked for the
// same paper design, just new content and new layout code.

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_elegant_navy',
    name: 'Kuhowa — Bluu ya Kifalme',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya bluu ya kifalme.',
    paperStyle: NgmyMarriagePaperStyle.elegantNavy,
    background: 0xFFFFFEFB,
    ink: 0xFF12213D,
    accent: 0xFFB8860B,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFEFB), Color(0xFF12213D), Color(0xFFB8860B)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_elegant_gold',
    name: 'Kuhowa — Dhahabu',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.elegantGold,
    background: 0xFFFFFCF3,
    ink: 0xFF2B2110,
    accent: 0xFFA6843A,
    bannerFill: 0xFFA6843A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF3), Color(0xFFA6843A), Color(0xFF6B4A12)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_heritage_gold',
    name: 'Kuhowa — Hazina ya Dhahabu',
    description: 'Mpaka mzito wa kikabila · dhahabu na hudhurungi.',
    paperStyle: NgmyMarriagePaperStyle.heritageGold,
    background: 0xFFF9F1DD,
    ink: 0xFF5C3A1E,
    accent: 0xFFD4AF37,
    bannerFill: 0xFF5C3A1E,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFF9F1DD), Color(0xFF5C3A1E), Color(0xFFD4AF37)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_heritage_crimson',
    name: 'Kuhowa — Hazina Nyekundu',
    description: 'Mpaka mzito wa kikabila · nyekundu na dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.heritageCrimson,
    background: 0xFFFAF0E6,
    ink: 0xFF6B2A1E,
    accent: 0xFFE0A458,
    bannerFill: 0xFF6B2A1E,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFAF0E6), Color(0xFF6B2A1E), Color(0xFFE0A458)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_elegant_emerald',
    name: 'Kuhowa — Zumaridi',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya kijani ya zumaridi.',
    paperStyle: NgmyMarriagePaperStyle.elegantEmerald,
    background: 0xFFF6FBF8,
    ink: 0xFF0E3B2E,
    accent: 0xFFC9A227,
    bannerFill: 0xFF0E3B2E,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFF6FBF8), Color(0xFF0E3B2E), Color(0xFFC9A227)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_elegant_burgundy',
    name: 'Kuhowa — Mvinyo',
    description: 'Mpaka mwembamba wa dhahabu · vichwa vya rangi ya mvinyo.',
    paperStyle: NgmyMarriagePaperStyle.elegantBurgundy,
    background: 0xFFFFF7F6,
    ink: 0xFF4A0E1F,
    accent: 0xFFC9A227,
    bannerFill: 0xFF4A0E1F,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFF7F6), Color(0xFF4A0E1F), Color(0xFFC9A227)],
  ),
];

NgmyHatiKuhowaTemplate? ngmyHatiKuhowaTemplateById(String id) {
  for (final t in kNgmyHatiKuhowaTemplates) {
    if (t.id == id) return t;
  }
  return null;
}

// ── Content builder — "Hati ya Kuhowa" ──────────────────────────────────────
// A single printable page: title + Tarehe, UTANGULIZI, NIMETOWE, MASHAHIDI
// (NGAMBO YA MKE then NGAMBO YA MUME, two columns), MWANDISHI.

List<NgmySlideElement> _buildPageContent(
  NgmyHatiKuhowaTemplate tpl, {
  required String title,
  required String introText,
  required String sectionLabel,
  required bool sectionLabelEditable,
  required List<String> mahariItems,
  String state = '',
}) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [
    _hBgImage(bgUrl),
    ..._layoutSingle(tpl, title: title, introText: introText, sectionLabel: sectionLabel, sectionLabelEditable: sectionLabelEditable, mahariItems: mahariItems, state: state),
  ];
}

List<NgmySlideElement> _layoutSingle(
  NgmyHatiKuhowaTemplate tpl, {
  required String title,
  required String introText,
  required String sectionLabel,
  required bool sectionLabelEditable,
  required List<String> mahariItems,
  String state = '',
}) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  // Watermark goes in first so every other element draws on top of it —
  // top-left corner, opposite the TAREHE box below.
  out.add(_hWatermark(ink));

  // Tarehe gets its own row, pushed close to the paper's actual gold
  // border on the right (not just the content margin) — it used to share
  // a row with the title and could crowd/overlap it. No frame.
  out.addAll(_hTareheBox(0.7, 0.026, 0.25, ink: ink, accent: accent));
  out.add(_hLockedText(title, x: cx, y: 0.036, w: cw, h: 0.06, fontSize: 40, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'));
  // A single rule sitting right under the title, not far below it — same
  // tight spacing as the NIMETOWE item underlines. Wide enough to span
  // close to the title's own width on each side. (There used to be a
  // second, smaller line under this one — removed per request.)
  out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + cw * 0.225, y: 0.09, w: cw * 0.55, h: 0.0026, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'title_rule_1'));

  // UTANGULIZI — one wrapped paragraph field, reproduced verbatim. Word-wrap
  // keeps every line flush from the left edge to the right edge of the
  // paper automatically.
  double y = 0.103;
  out.add(_hParagraphField(
    'utangulizi',
    cx,
    y,
    cw,
    0.15,
    ink: ink,
    fontSize: 19,
    startText: introText,
  ));
  // The current intro paragraph wraps to about 6 lines (both documents'
  // wording is longer than the old text this replaced) — the advance
  // below has to clear all of them, or the tail end renders behind the
  // banner that follows, which is what read as "the frame is too tall"
  // even though the box itself wasn't the problem. The next few gaps
  // are trimmed slightly to give this back the room it needs without
  // pushing everything below off the bottom of the page.
  y += 0.165;
  // Extra breathing room so the (now shorter) NIMETOWA/NIMEPOKEYA CASH
  // frame sits lower under the intro paragraph, per request to bring it
  // down.
  y += 0.016;

  // Gold (accent), not tpl.bannerFill — bannerFill is the template's dark
  // ink color for most templates, which made this frame the one dark box
  // on an otherwise all-gold page (title rule, item numbers, table border,
  // table headers are all `accent`). Restored to match.
  if (sectionLabelEditable) {
    out.addAll(_hBannerField('nimetowe_label', sectionLabel, y, cx, cw, fill: accent));
  } else {
    out.addAll(_hBanner(sectionLabel, y, cx, cw, fill: accent));
  }
  // Was 0.062 — trimmed to match the shrunk banner box height.
  y += 0.048;
  out.add(_hLockedText('Vitu vifuatavyo vimetolewa:', x: cx, y: y, w: cw, h: 0.03, fontSize: 20, fontWeight: FontWeight.w700, color: ink, tag: 'nimetowe_sub'));
  y += 0.03;
  for (var i = 1; i <= 4; i++) {
    out.addAll(_hNimetoweRow(i, mahariItems[i - 1], cx, y, cw, ink: ink, accent: accent));
    y += 0.04;
  }
  // Was 0.014 — tightened so the MASHAHIDI frame moves up, per request.
  y += 0.006;

  out.addAll(_hBanner('MASHAHIDI', y, cx, cw, fill: accent));
  // Was 0.067 — shrunk banner box + tightened margin brings the witness
  // table (and everything below it: MWANDISHI bar, state box) up too,
  // since they're all positioned relative to this cumulative `y`.
  y += 0.046;

  // MASHAHIDI as one bordered table: a single outer frame around both
  // columns with one vertical line dividing NGAMBO YA MKE from NGAMBO YA
  // MUME, a header row, and a line under the header row.
  const colW = cw / 2;
  const innerPad = 0.016;
  const hdrH = 0.05;
  const rowH = 0.056;
  // Extra cushion below the last row — without it, the last signature box
  // sat exactly on the table's bottom border with zero margin, so it read
  // as overflowing/poking out of the frame.
  const tableBottomPad = 0.011;
  final tableH = hdrH + 3 * rowH + tableBottomPad;
  final tableTop = y;
  out.addAll([
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: tableTop, w: cw, h: tableH, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.3, tag: 'wit_table_border'),
    // The "line" shape kind only ever draws horizontally (it ignores its
    // box height), so a vertical divider has to be a thin filled rectangle
    // instead — that's why the dividing line wasn't showing up before.
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + colW - 0.0012, y: tableTop, w: 0.0024, h: tableH, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_table_divider'),
    _hLockedShape(shape: NgmySlideShapeKind.line, x: cx, y: tableTop + hdrH, w: cw, h: 0.0022, strokeColor: accent, strokeWidth: 1.1, tag: 'wit_table_hdrline'),
    _hLockedText('NGAMBO YA MKE', x: cx, y: tableTop + 0.012, w: colW, h: 0.03, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mke_t'),
    _hLockedText('NGAMBO YA MUME', x: cx + colW, y: tableTop + 0.012, w: colW, h: 0.03, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mume_t'),
  ]);
  y = tableTop + hdrH + 0.01;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_hWitnessLine('mke', n, cx + innerPad, y, colW - innerPad * 2, ink: ink, accent: accent));
    out.addAll(_hWitnessLine('mume', n, cx + colW + innerPad, y, colW - innerPad * 2, ink: ink, accent: accent));
    y += rowH;
  }
  y = tableTop + tableH + 0.012;

  out.addAll(_hMwandishiBar(cx, y, cw, ink: ink, accent: accent));
  y += 0.11;

  // State the document was created for — picked once up front (see
  // launchNgmyHatiKuhowa/launchNgmyHatiKuhowesha) and baked in here as
  // locked text, same as everything else on this paper: centered under
  // MWANDISHI in its own small frame, never user-editable.
  final trimmedState = state.trim();
  if (trimmedState.isNotEmpty) {
    // The remaining gap between MWANDISHI's bottom border and the paper's
    // own outer frame is small, and the box was spilling past it — a
    // slightly bigger top gap plus a shorter box brings its bottom edge
    // back up inside the frame.
    const stateBoxH = 0.032;
    const stateBoxW = 0.7;
    final stateBoxX = cx + (cw - stateBoxW) / 2;
    final stateY = y + 0.006;
    out.addAll([
      _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: stateBoxX, y: stateY, w: stateBoxW, h: stateBoxH, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.0, tag: 'state_box'),
      _hLockedText("EMO 'YA M'MBONDO $trimmedState", x: stateBoxX, y: stateY + 0.003, w: stateBoxW, h: stateBoxH - 0.006, fontSize: 26, fontWeight: FontWeight.w700, align: TextAlign.center, color: ink, tag: 'state_text'),
    ]);
  }

  return out;
}

/// Soft picker preview — one silhouette shared by both templates (same
/// content), just recolored per template.
Widget ngmyHatiKuhowaTemplateLivePreview(String templateId) {
  final tpl = ngmyHatiKuhowaTemplateById(templateId) ?? kNgmyHatiKuhowaTemplates.first;
  final bg = Color(tpl.background);
  final ink = Color(tpl.ink);
  final accent = Color(tpl.accent);
  Widget bar({double w = 1, double h = 5}) => Align(
        alignment: Alignment.centerLeft,
        child: FractionallySizedBox(
          widthFactor: w,
          child: Container(height: h, decoration: BoxDecoration(color: ink.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(3))),
        ),
      );
  Widget ribbon(String t) => Container(
        height: 12,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(3)),
        child: Text(t, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 6.5, letterSpacing: 0.4)),
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
          padding: const EdgeInsets.fromLTRB(12, 14, 12, 10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('HATI YA KUHOWA', textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 9)),
              const SizedBox(height: 8),
              ribbon('UTANGULIZI'),
              const SizedBox(height: 5),
              bar(),
              const SizedBox(height: 2.5),
              bar(w: 0.85),
              const SizedBox(height: 2.5),
              bar(w: 0.9),
              const SizedBox(height: 6),
              ribbon('NIMETOWE'),
              const SizedBox(height: 5),
              ...List.generate(4, (i) => Padding(
                    padding: const EdgeInsets.only(bottom: 3),
                    child: Row(children: [
                      Container(width: 7, height: 7, decoration: BoxDecoration(color: accent, shape: BoxShape.circle)),
                      const SizedBox(width: 4),
                      Expanded(child: bar(h: 4)),
                    ]),
                  )),
              const SizedBox(height: 6),
              ribbon('MASHAHIDI'),
              const SizedBox(height: 5),
              Row(children: [
                Expanded(child: Container(height: 20, decoration: BoxDecoration(border: Border.all(color: accent, width: 1)))),
                const SizedBox(width: 4),
                Expanded(child: Container(height: 20, decoration: BoxDecoration(border: Border.all(color: accent, width: 1)))),
              ]),
              const Spacer(),
              Text(tpl.name, textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 8)),
            ],
          ),
        ),
      ],
    ),
  );
}

const _kHatiKuhowaIntro = 'Mimi [Jina la Baba], wa jamii ya [Jina la Jamii], nyumba ya [Jina la '
    'Nyumba], nimesimama rasmi kuthibitisha utoaji wa mahali ya kuhoweya '
    'kijana wangu aitwaye [Jina la Kijana], pamoja na [Jina la Binti], '
    'binti wa [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya '
    'Binti], nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya '
    'yanatekelezwa kwa kufuata desturi, taratibu, na mapokeo '
    'yanayoheshimiwa na pande zote mbili za familia, kwa nia ya '
    'kuimarisha uhusiano wa kifamilia na kuheshimu mila za wazee wetu.';

const _kHatiKuhowaMahariItems = [
  'Kichwa cha Mtu: Dollar elfu ishirini na tano (\$20,000)',
  'Mbuzi Mbili',
  'Ngyoka',
  'Mmoko',
];

/// Builds the single-page "Hati ya Kuhowa" deck from a paper template.
NgmySlideDeck ngmyBuildHatiKuhowaDeck({required String templateId, String state = ''}) {
  ngmyClearMarriagePaperCache();
  final tpl = ngmyHatiKuhowaTemplateById(templateId) ?? kNgmyHatiKuhowaTemplates.first;

  final page = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kuhowa',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPageContent(
      tpl,
      title: 'HATI YA KUHOWA',
      introText: _kHatiKuhowaIntro,
      sectionLabel: 'NIMETOWA',
      sectionLabelEditable: false,
      mahariItems: _kHatiKuhowaMahariItems,
      state: state,
    ),
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Kuhowa — ${tpl.name}',
    themeId: 'hati_kuhowa_${tpl.id}',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiKuhowaDeckKind,
    slides: [page],
  );
}

const _kHatiKuhoweshaIntro = 'Mimi [Jina la Baba], wa jamaa la [Jina la Jamii], nyumba ya [Jina la '
    'Nyumba], kwa hiari yangu na kwa ridhaa ya familia yangu, '
    'nimemuhowesha binti wangu [Jina la Binti] kwa [Jina la Mume], wa '
    'jamaa la [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya '
    'Mume], mwana wa [Jina la Baba wa Mume]. Uhoweshaji huu umefanyika '
    'kwa makubaliano ya pande zote mbili, kwa kufuata mila na desturi za '
    'wazee wetu, kwa lengo la kuunganisha familia zetu katika heshima, '
    'upendo na mshikamano. Hivyo, ninathibitisha mbele ya mashahidi kuwa '
    'makubaliano haya yamefanyika kwa amani na kwa ridhaa kamili ya '
    'familia zote mbili.';

const _kHatiKuhoweshaMahariItems = [
  'Kichwa cha Mtu: Dollar elfu ishirini na tano (\$20,000)',
  'Mbuzi Wawili',
  'Ngyoka',
  'Mmoko',
];

/// Builds the single-page "Hati ya Kuhoweya" deck — same paper, table,
/// Mashahidi, and Mwandishi as Hati ya Kuhowa, but its own title (printed
/// on the paper as "HATI YA KUHOWESHA" — same name as the older, separate
/// Marriage Agreement document, per explicit request), its own intro
/// paragraph, and an editable (not locked) section header defaulting to
/// "NIMEPOKEYA CASH". The deck's own internal name stays "Hati ya Kuhoweya"
/// so it reads as a distinct entry in the picker/deck list.
NgmySlideDeck ngmyBuildHatiKuhoweshaDeck({required String templateId, String state = ''}) {
  ngmyClearMarriagePaperCache();
  final tpl = ngmyHatiKuhowaTemplateById(templateId) ?? kNgmyHatiKuhowaTemplates.first;

  final page = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kuhoweya',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPageContent(
      tpl,
      title: 'HATI YA KUHOWESHA',
      introText: _kHatiKuhoweshaIntro,
      sectionLabel: 'NIMEPOKEYA CASH',
      sectionLabelEditable: true,
      mahariItems: _kHatiKuhoweshaMahariItems,
      state: state,
    ),
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Kuhoweya — ${tpl.name}',
    themeId: 'hati_kuhoweya_${tpl.id}',
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiKuhoweshaDeckKind,
    slides: [page],
  );
}

Future<String?> showNgmyHatiKuhowaTemplatePicker(BuildContext context, {String docLabel = 'Hati ya Kuhowa'}) async {
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyHatiKuhowaTemplatePickerSheet(docLabel: docLabel),
  );
}

class _NgmyHatiKuhowaTemplatePickerSheet extends StatelessWidget {
  const _NgmyHatiKuhowaTemplatePickerSheet({this.docLabel = 'Hati ya Kuhowa'});

  final String docLabel;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return DraggableScrollableSheet(
      initialChildSize: 0.72,
      minChildSize: 0.5,
      maxChildSize: 0.9,
      builder: (_, scrollCtrl) => Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F1420) : const Color(0xFFFFFDF7),
          borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
          border: Border.all(color: const Color(0xFF12213D).withValues(alpha: 0.25)),
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
                      decoration: BoxDecoration(color: const Color(0xFFB8860B).withValues(alpha: 0.45), borderRadius: BorderRadius.circular(2)),
                    ),
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(11),
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF2E4270), Color(0xFF12213D), Color(0xFF0A1526)]),
                          borderRadius: BorderRadius.circular(15),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.5), width: 1.2),
                          boxShadow: [BoxShadow(color: const Color(0xFF12213D).withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 3))],
                        ),
                        child: const Icon(Icons.description_rounded, color: Colors.white, size: 22),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Chagua muundo wa hati', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF12213D))),
                            const SizedBox(height: 2),
                            Text(docLabel, style: const TextStyle(fontSize: 11.5, color: Color(0xFFB8860B), fontWeight: FontWeight.w700)),
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
                itemCount: kNgmyHatiKuhowaTemplates.length,
                itemBuilder: (_, i) {
                  final tpl = kNgmyHatiKuhowaTemplates[i];
                  return _HkTemplateCard(template: tpl, onTap: () => Navigator.pop(context, tpl.id));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _HkTemplateCard extends StatelessWidget {
  const _HkTemplateCard({required this.template, required this.onTap});

  final NgmyHatiKuhowaTemplate template;
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
            border: Border.all(color: const Color(0xFF12213D).withValues(alpha: isDark ? 0.35 : 0.4)),
            color: isDark ? const Color(0xFF14192A) : Colors.white,
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
                    border: Border.all(color: const Color(0xFFB8860B).withValues(alpha: 0.5)),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.14), blurRadius: 6, offset: const Offset(0, 2))],
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: AspectRatio(aspectRatio: 9 / 16, child: ngmyHatiKuhowaTemplateLivePreview(template.id)),
                ),
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(11, 8, 11, 11),
                decoration: BoxDecoration(border: Border(top: BorderSide(color: const Color(0xFF12213D).withValues(alpha: isDark ? 0.18 : 0.16)))),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(template.name, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 0.1, color: isDark ? Colors.white : const Color(0xFF12213D))),
                    const SizedBox(height: 3),
                    Text(
                      template.description,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 9.5, color: isDark ? Colors.white54 : const Color(0xFF5A6A85), height: 1.32),
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

/// Launches the "Hati ya Kuhowa" flow — continue an existing saved deck of
/// this kind, or pick a paper template and start a new one.
Future<void> launchNgmyHatiKuhowa({
  required BuildContext context,
  required List<NgmySlideDeck> savedDecks,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
}) async {
  final existing = savedDecks.where((d) => d.deckKind == kNgmyHatiKuhowaDeckKind).toList();

  if (existing.isNotEmpty) {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF14192A),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text('Hati ya Kuhowa', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 8),
              Text(
                'Una hati ${existing.length} zilizohifadhiwa.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, 'continue'),
                icon: const Icon(Icons.edit_document),
                label: Text('Endelea na "${existing.first.name}"'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF12213D),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              const SizedBox(height: 10),
              OutlinedButton.icon(
                onPressed: () => Navigator.pop(ctx, 'new'),
                icon: const Icon(Icons.add_rounded),
                label: const Text('Hati mpya (chagua muundo)'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.white70,
                  side: const BorderSide(color: Colors.white24),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ],
          ),
        ),
      ),
    );

    if (action == 'continue') {
      openSavedDeck(existing.first.copy());
      return;
    }
    if (action != 'new') return;
  }

  if (!context.mounted) return;
  final templateId = await showNgmyHatiKuhowaTemplatePicker(context);
  if (templateId == null || !context.mounted) return;
  final state = await _pickNgmyHatiState(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildHatiKuhowaDeck(templateId: templateId, state: state));
}

/// Asked once, before the document loads — baked into the paper as locked
/// text (see _layoutSingle's state badge), not left as an editable field.
Future<String?> _pickNgmyHatiState(BuildContext context) {
  return showNgmyStatePickerSheet(
    context,
    states: kNgmyUsStates,
    selected: '',
    title: 'Chagua jimbo',
    searchHint: 'Tafuta jimbo…',
  );
}

/// Launches the "Hati ya Kuhoweya" flow — same shape as [launchNgmyHatiKuhowa],
/// but for the deck whose paper is titled "HATI YA KUHOWESHA".
Future<void> launchNgmyHatiKuhowesha({
  required BuildContext context,
  required List<NgmySlideDeck> savedDecks,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
}) async {
  final existing = savedDecks.where((d) => d.deckKind == kNgmyHatiKuhoweshaDeckKind).toList();

  if (existing.isNotEmpty) {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF14192A),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text('Hati ya Kuhoweya', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 8),
              Text(
                'Una hati ${existing.length} zilizohifadhiwa.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, 'continue'),
                icon: const Icon(Icons.edit_document),
                label: Text('Endelea na "${existing.first.name}"'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF12213D),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              const SizedBox(height: 10),
              OutlinedButton.icon(
                onPressed: () => Navigator.pop(ctx, 'new'),
                icon: const Icon(Icons.add_rounded),
                label: const Text('Hati mpya (chagua muundo)'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.white70,
                  side: const BorderSide(color: Colors.white24),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ],
          ),
        ),
      ),
    );

    if (action == 'continue') {
      openSavedDeck(existing.first.copy());
      return;
    }
    if (action != 'new') return;
  }

  if (!context.mounted) return;
  final templateId = await showNgmyHatiKuhowaTemplatePicker(context, docLabel: 'Hati ya Kuhoweya');
  if (templateId == null || !context.mounted) return;
  final state = await _pickNgmyHatiState(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildHatiKuhoweshaDeck(templateId: templateId, state: state));
}
