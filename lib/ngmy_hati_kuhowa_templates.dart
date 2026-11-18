import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image/image.dart' as img;

import 'ngmy_marriage_markers.dart';
import 'ngmy_hati_couple_ai.dart' show ngmyHatiPutCoupleInPaper;
import 'ngmy_hati_exact_fit.dart';
import 'ngmy_hati_exact_fit_a4.dart';
import 'ngmy_hati_photo_art.dart';
import 'ngmy_hati_pins.dart';
import 'ngmy_hati_royal_art.dart';
import 'ngmy_news_paper.dart' show ngmyLoadNewsFonts;
import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';
import 'ngmy_state_picker.dart';

const String kNgmyHatiKuhowaDeckKind = 'hati_kuhowa';
const String kNgmyHatiKuhoweshaDeckKind = 'hati_kuhoweya';
const String kNgmyHatiMalipoAwamuDeckKind = 'hati_malipo_awamu';

/// Soft underlines — never dark/black (picker + print).
const _softLine = 0xFFE2D8C8;

enum NgmyHatiLayoutKind {
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
  royal,
  exact,
}

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
    this.layoutKind = NgmyHatiLayoutKind.classic,
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
  final NgmyHatiLayoutKind layoutKind;
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

const _hatiGold = 0xFFC9A227;
const _hatiIvory = 0xFFFFFFF8;

List<NgmySlideElement> _hRings(double cx, double cy, double d, {int gold = _hatiGold}) {
  return [
    _hLockedShape(shape: NgmySlideShapeKind.circle, x: cx - d * 0.42, y: cy, w: d, h: d, fillColor: 0x00000000, strokeColor: gold, strokeWidth: 2.0, tag: 'ring_l'),
    _hLockedShape(shape: NgmySlideShapeKind.circle, x: cx + d * 0.06, y: cy, w: d, h: d, fillColor: 0x00000000, strokeColor: gold, strokeWidth: 2.0, tag: 'ring_r'),
  ];
}

List<NgmySlideElement> _hPersonMark(double x, double y, double size, {required bool female, required int fill, int ring = _hatiGold}) {
  return [
    _hLockedShape(shape: NgmySlideShapeKind.circle, x: x, y: y, w: size, h: size, fillColor: _hatiIvory, strokeColor: ring, strokeWidth: 1.3, tag: 'ps_${female}_ring'),
    _hLockedShape(shape: NgmySlideShapeKind.circle, x: x + size * 0.32, y: y + size * 0.16, w: size * 0.36, h: size * 0.36, fillColor: fill, strokeColor: fill, strokeWidth: 0, tag: 'ps_${female}_head'),
    _hLockedShape(
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

List<NgmySlideElement> _hOrnamentRule(double x, double y, double w, {int gold = _hatiGold, int ink = 0xFF12213D}) {
  final mid = x + w / 2;
  return [
    _hLockedShape(shape: NgmySlideShapeKind.line, x: x, y: y + 0.006, w: w * 0.40, h: 0.002, strokeColor: gold, strokeWidth: 1.0, tag: 'orn_l_$y'),
    _hLockedShape(shape: NgmySlideShapeKind.hexagon, x: mid - 0.012, y: y, w: 0.024, h: 0.016, fillColor: ink, strokeColor: gold, strokeWidth: 0.9, tag: 'orn_c_$y'),
    _hLockedShape(shape: NgmySlideShapeKind.line, x: mid + 0.018, y: y + 0.006, w: w * 0.40, h: 0.002, strokeColor: gold, strokeWidth: 1.0, tag: 'orn_r_$y'),
  ];
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
///
/// Row 1 (the money / "Kichwa cha Mtu" line) keeps a full-width underline,
/// with locked "AKUNA DENI" + a square green pre-ticked box on the same
/// single line (right side) — nothing wraps under anything else.
///
/// Amount text stays at the same 16pt as rows 2–4 (never auto-shrunk). The
/// amount box is clipped so when AKUNA DENI is hidden, no spilled letters
/// show in that right-hand gap.
List<NgmySlideElement> _hNimetoweRow(int n, String hint, double x, double y, double w, {required int ink, required int accent}) {
  final itemX = x + 0.042;
  const paidGreen = 0xFF16A34A;
  // On portrait 9:16, equal visual sides need h = w * (9/16).
  const tickBoxW = 0.046;
  const tickBoxH = tickBoxW * 9 / 16;
  // Wide enough for "AKUNA DENI" at ~22pt (same size as before — do not shrink).
  const labelW = 0.268;
  final showAkunaDeni = n == 1;
  final rightReserve = showAkunaDeni ? (0.008 + labelW + 0.006 + tickBoxW) : 0.0;
  final itemW = (x + w - itemX - rightReserve).clamp(0.22, 1.0);
  // Shared band so amount (16pt) and green (22pt) sit on the same underline.
  final lineH = showAkunaDeni ? _hBlankH(22) : _hBlankH(16);
  final amountField = _hBlank(
    'mahari_$n',
    itemX,
    y + 0.002,
    itemW,
    ink: ink,
    fontSize: 16,
    startText: hint,
    align: TextAlign.left,
  );
  if (showAkunaDeni) {
    // Same vertical band as AKUNA DENI so both sit on one underline.
    amountField.h = lineH;
  }
  final out = <NgmySlideElement>[
    _hLockedText('$n.', x: x, y: y + 0.004, w: 0.032, h: 0.022, fontSize: 13, fontWeight: FontWeight.w800, color: accent, tag: 'nim_n_$n'),
    amountField,
    // Full-width underline across the whole row (amount + AKUNA DENI area).
    _hLockedShape(
      shape: NgmySlideShapeKind.line,
      x: itemX,
      y: y + 0.002 + lineH + 0.002,
      w: x + w - itemX,
      h: 0.002,
      strokeColor: _softLine,
      strokeWidth: 0.8,
      tag: 'nim_ul_$n',
    ),
  ];
  if (showAkunaDeni) {
    final labelX = itemX + itemW + 0.008;
    final boxX = labelX + labelW + 0.004;
    // Center green words + tick on the same band as the amount text / underline.
    final textY = y + 0.002;
    final boxY = textY + (lineH - tickBoxH) / 2;
    out.addAll([
      _hLockedText(
        'AKUNA DENI',
        x: labelX,
        y: textY,
        w: labelW,
        h: lineH,
        fontSize: 22,
        fontWeight: FontWeight.w900,
        align: TextAlign.right,
        color: paidGreen,
        tag: 'nim_akuna_deni',
      ),
      _hLockedShape(
        shape: NgmySlideShapeKind.rectangle,
        x: boxX,
        y: boxY,
        w: tickBoxW,
        h: tickBoxH,
        fillColor: 0x00000000,
        strokeColor: paidGreen,
        strokeWidth: 2.0,
        tag: 'nim_akuna_box',
      ),
      _hLockedText(
        '✓',
        x: boxX,
        y: boxY - 0.002,
        w: tickBoxW,
        h: tickBoxH + 0.004,
        fontSize: 18,
        fontWeight: FontWeight.w900,
        align: TextAlign.center,
        color: paidGreen,
        tag: 'nim_akuna_tick',
      ),
      // Hit pad so triple-tap still works after green is hidden.
      _hLockedShape(
        shape: NgmySlideShapeKind.rectangle,
        x: labelX,
        y: textY,
        w: (boxX + tickBoxW) - labelX,
        h: lineH,
        fillColor: 0x00000000,
        strokeColor: 0x00000000,
        strokeWidth: 0,
        tag: 'nim_akuna_hit',
      ),
    ]);
  }
  return out;
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
  // Narrowed from 0.64 — freed up room for the "Sahihi:" label below to
  // grow to match MWANDISHI's font size, while keeping the signature zone
  // the same width it always was. The name field still has autoShrinkFont
  // as a fallback for long names.
  final nameW = w * 0.56;
  final sahihiLblX = x + nameW + 0.01;
  final signX = sahihiLblX + 0.08;
  final signW = x + w - signX;
  return [
    _hLockedText('$n.', x: x, y: y, w: 0.026, h: 0.024, fontSize: 13, fontWeight: FontWeight.w800, color: accent, tag: 'wln_${side}_$n'),
    _hBlank('witness_${side}_${n}_name', x + 0.026, y, nameW - 0.026, ink: ink, fontSize: 16, startText: '[Jina la Shahidi]', align: TextAlign.left, autoShrinkFont: true),
    _hBlankUnderline(x + 0.026, y + _hBlankH(16), nameW - 0.026),
    // fontSize 15 to match MWANDISHI's own "Sahihi:" label — was 9, which
    // read as noticeably smaller than the rest of the document.
    _hLockedText('Sahihi:', x: sahihiLblX, y: y, w: 0.077, h: 0.028, fontSize: 15, fontWeight: FontWeight.w600, color: ink, tag: 'wls_${side}_$n'),
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

/// Yesterday's six papers — the only ones shown on Hati ya Kuhowa
/// and Hati ya Kuhowesha. Newer cloth / certificate papers stay in
/// [kNgmyHatiKuhowaNewerTemplates] so older saved documents still open.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaNavyOnly = [
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
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaSecondSlot = [
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
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaHeritageBottom = [
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
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaElegantRest = [
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

/// Five extra papers for Hati ya Kuhowa / Kuhowesha — same fields and
/// paragraph under the title, with stronger gold edge decoration.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaGoldEdgeTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_filigree',
    name: 'Dhahabu ya Filigree',
    description: 'Mpaka wa dhahabu mara tatu · pembe za mapambo.',
    paperStyle: NgmyMarriagePaperStyle.goldFiligree,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFD4AF37,
    bannerFill: 0xFF8B6914,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFFD4AF37), Color(0xFF8B6914)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_laurel',
    name: 'Taji ya Dhahabu',
    description: 'Majani ya dhahabu kando · almasi kwenye pembe.',
    paperStyle: NgmyMarriagePaperStyle.goldLaurel,
    background: 0xFFFFFDF8,
    ink: 0xFF3A2415,
    accent: 0xFFC9A227,
    bannerFill: 0xFF7A5C14,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFDF8), Color(0xFFC9A227), Color(0xFF7A5C14)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_crest',
    name: 'Muhuri wa Dhahabu',
    description: 'Medali za dhahabu kwenye pembe · shanga za lulu.',
    paperStyle: NgmyMarriagePaperStyle.goldCrest,
    background: 0xFFFFF8EC,
    ink: 0xFF4A3410,
    accent: 0xFFD4AF37,
    bannerFill: 0xFF6B4F12,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFF8EC), Color(0xFFD4AF37), Color(0xFF6B4F12)],
  ),
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaRow2 = [
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_ribbon',
    name: 'Utepe wa Dhahabu',
    description: 'Pembe za bluu na dhahabu · almasi kati ya kila upande.',
    paperStyle: NgmyMarriagePaperStyle.goldRibbon,
    background: 0xFFFFFEFB,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFEFB), Color(0xFF12213D), Color(0xFFC9A227)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_baroque',
    name: 'Ukanda wa Dhahabu',
    description: 'Ukanda mzito wa dhahabu · rosette kwenye pembe.',
    paperStyle: NgmyMarriagePaperStyle.goldBaroque,
    background: 0xFFFFF6E4,
    ink: 0xFF4A3410,
    accent: 0xFFD4AF37,
    bannerFill: 0xFF8B6914,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFF6E4), Color(0xFFD4AF37), Color(0xFF8B6914)],
  ),
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaGoldTail = [
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_gold_star',
    name: 'Nyota ya Dhahabu',
    description: 'Nyota za dhahabu kwenye pembe · mstari wa bluu ndani.',
    paperStyle: NgmyMarriagePaperStyle.goldStar,
    background: 0xFFFFFCF6,
    ink: 0xFF12213D,
    accent: 0xFFD4AF37,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF6), Color(0xFFD4AF37), Color(0xFF12213D)],
  ),
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaYesterdayTemplates = [
  ...kNgmyHatiKuhowaNavyOnly,
  ...kNgmyHatiKuhowaSecondSlot,
  ...kNgmyHatiKuhowaHeritageBottom,
  ...kNgmyHatiKuhowaElegantRest,
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaGoldEdgeAll = [
  ...kNgmyHatiKuhowaGoldEdgeTemplates,
  ...kNgmyHatiKuhowaRow2,
  ...kNgmyHatiKuhowaGoldTail,
];

/// The royal papers (near the bottom of the picker): four from the owner's own designs (maroon band, cream and gold, emerald, navy) and
/// three more in the same style (plum, onyx, teal band).
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaRoyalTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'royal_maroon',
    name: 'Kifalme Nyekundu',
    description: 'Ukanda mwekundu juu wenye almasi · baa nyekundu · muhuri wa dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.royalMaroon,
    background: 0xFFFCF5E6,
    ink: 0xFF2B1A12,
    accent: 0xFF7A1B22,
    bannerFill: 0xFF7A1B22,
    bannerText: 0xFFFBEFD3,
    previewColors: [Color(0xFFFCF5E6), Color(0xFF7A1B22), Color(0xFFC9A23A)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_cream',
    name: 'Dhahabu na Krimu',
    description: 'Baa za dhahabu zinazong’aa · muhuri wenye utepe.',
    paperStyle: NgmyMarriagePaperStyle.royalCream,
    background: 0xFFFBF6EA,
    ink: 0xFF2B1A12,
    accent: 0xFF7A1B22,
    bannerFill: 0xFFC9A23A,
    bannerText: 0xFF6E1620,
    previewColors: [Color(0xFFFBF6EA), Color(0xFFD9AE3F), Color(0xFF7A1B22)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_emerald',
    name: 'Zumaridi na Dhahabu',
    description: 'Karatasi ya kijani kibichi · baa za dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.royalEmerald,
    background: 0xFF0D3528,
    ink: 0xFFF6ECD4,
    accent: 0xFFE9C766,
    bannerFill: 0xFFD4AF37,
    bannerText: 0xFF0B2A20,
    previewColors: [Color(0xFF0D3528), Color(0xFFD9AE3F), Color(0xFFF6ECD4)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_navy',
    name: 'Bluu ya Usiku',
    description: 'Karatasi ya bluu ya usiku · baa za dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.royalNavy,
    background: 0xFF121F44,
    ink: 0xFFF3EEE0,
    accent: 0xFFE9C766,
    bannerFill: 0xFFD4AF37,
    bannerText: 0xFF0F1A3A,
    previewColors: [Color(0xFF121F44), Color(0xFFD9AE3F), Color(0xFFF3EEE0)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_plum',
    name: 'Zambarau ya Kifalme',
    description: 'Karatasi ya zambarau · baa za dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.royalPlum,
    background: 0xFF2E1038,
    ink: 0xFFF7ECF4,
    accent: 0xFFE9C766,
    bannerFill: 0xFFD4AF37,
    bannerText: 0xFF2B0F35,
    previewColors: [Color(0xFF2E1038), Color(0xFFD9AE3F), Color(0xFFF7ECF4)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_onyx',
    name: 'Mkaa na Dhahabu',
    description: 'Karatasi nyeusi · baa za dhahabu.',
    paperStyle: NgmyMarriagePaperStyle.royalOnyx,
    background: 0xFF1A1917,
    ink: 0xFFF5EFE3,
    accent: 0xFFE9C766,
    bannerFill: 0xFFD4AF37,
    bannerText: 0xFF161514,
    previewColors: [Color(0xFF1A1917), Color(0xFFD9AE3F), Color(0xFFF5EFE3)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'royal_teal',
    name: 'Bahari ya Kifalme',
    description: 'Ukanda wa bahari juu wenye almasi · baa za bahari.',
    paperStyle: NgmyMarriagePaperStyle.royalTeal,
    background: 0xFFF8FBF7,
    ink: 0xFF14262A,
    accent: 0xFF0F5257,
    bannerFill: 0xFF0F5257,
    bannerText: 0xFFF6F1E1,
    previewColors: [Color(0xFFF8FBF7), Color(0xFF0F5257), Color(0xFFC9A23A)],
    layoutKind: NgmyHatiLayoutKind.royal,
  ),
];

/// The four picture papers, made from the owner's own picture designs: royal curtains with the flag and drums, the
/// village with the couple, the palm tree and the hut, the savanna sunset with doves and the Congo map, and white roses
/// with gold rings.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaPhotoTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'photo_curtain',
    name: 'Pazia la Kifalme',
    description: 'Mapazia ya bluu · bendera · ngoma.',
    paperStyle: NgmyMarriagePaperStyle.exactCurtain,
    background: 0xFF14307E,
    ink: 0xFFF3EEE0,
    accent: 0xFFF2CE6A,
    bannerFill: 0xFFD9B04A,
    bannerText: 0xFF14204A,
    previewColors: [Color(0xFF14307E), Color(0xFFD9B04A), Color(0xFFF4E6C6)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'photo_village',
    name: 'Kijiji na Wanandoa',
    description: 'Wanandoa · mnazi na nyumba · kitenge.',
    paperStyle: NgmyMarriagePaperStyle.exactVillage,
    background: 0xFFF3DDBB,
    ink: 0xFF2B1A12,
    accent: 0xFF5B2A16,
    bannerFill: 0xFF5B2A16,
    bannerText: 0xFFFBEFD3,
    previewColors: [Color(0xFFF3DDBB), Color(0xFF5B2A16), Color(0xFFC0392B)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'photo_sunset',
    name: 'Machweo ya Savana',
    description: 'Machweo · njiwa · ramani ya Kongo · ngoma.',
    paperStyle: NgmyMarriagePaperStyle.exactSunset,
    background: 0xFFF6E9C8, // the witness cards are light: signatures in dark ink
    ink: 0xFF2A1A10,
    accent: 0xFFF2C75C,
    bannerFill: 0xFF2A140C,
    bannerText: 0xFFF6ECD4,
    previewColors: [Color(0xFF3A1A10), Color(0xFFE07A2A), Color(0xFFF2C75C)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'photo_roses',
    name: 'Waridi na Pete',
    description: 'Waridi nyeupe · pete za dhahabu · mpaka wa bluu.',
    paperStyle: NgmyMarriagePaperStyle.exactRoses,
    background: 0xFFF7F0E2,
    ink: 0xFF1C2238,
    accent: 0xFF14244F,
    bannerFill: 0xFF14244F,
    bannerText: 0xFFF6F1E1,
    previewColors: [Color(0xFFF7F0E2), Color(0xFF14244F), Color(0xFFC9A23A)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
];

/// The owner's own full-page designs, exactly as drawn (made as tall as every other Hati paper). The couple at the top is the default picture;
/// in the ⋯ menu the AI redraws it with the people's own faces.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaExactTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'exact_kijiji',
    name: 'Mkataba wa Ndoa — Kijiji',
    description: 'Wanandoa · wazee na nyumba · mikuki na ngoma.',
    paperStyle: NgmyMarriagePaperStyle.exactKijiji,
    background: 0xFFF6E7C4,
    ink: 0xFF2A1A10,
    accent: 0xFF7A1B22,
    bannerFill: 0xFF7A1B22,
    bannerText: 0xFFF2C14E,
    previewColors: [Color(0xFFF6E7C4), Color(0xFF7A1B22), Color(0xFFF2C14E)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'exact_kifalme',
    name: 'Mkataba wa Ndoa — Kifalme',
    description: 'Wanandoa · taji na bendera · mapazia ya bluu.',
    paperStyle: NgmyMarriagePaperStyle.exactKifalme,
    background: 0xFFF6E7C4,
    ink: 0xFF2A1A10,
    accent: 0xFF14244F,
    bannerFill: 0xFF14244F,
    bannerText: 0xFFF2C14E,
    previewColors: [Color(0xFFF6E7C4), Color(0xFF14244F), Color(0xFFF2C14E)],
    layoutKind: NgmyHatiLayoutKind.exact,
  ),
];

/// Row 1: navy + gold. Row 2: Utepe + Ukanda. Row 4 (filigree + laurel) stays as-is. The royal and picture papers come
/// last (a paper someone pins comes first instead: see ngmy_hati_pins.dart).
/// Heritage papers stay resolvable for old saved docs but are off this picker.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaTemplates = [
  ...kNgmyHatiKuhowaNavyOnly,
  ...kNgmyHatiKuhowaSecondSlot,
  ...kNgmyHatiKuhowaRow2,
  ...kNgmyHatiKuhowaElegantRest,
  ...kNgmyHatiKuhowaGoldEdgeTemplates,
  ...kNgmyHatiKuhowaGoldTail,
  ...kNgmyHatiKuhowaRoyalTemplates,
  ...kNgmyHatiKuhowaPhotoTemplates,
  ...kNgmyHatiKuhowaExactTemplates,
];

/// Newer papers kept so existing saved documents still resolve. They are
/// not shown on Hati ya Kuhowa / Kuhowesha — those live on Hati ya Ndoa.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiKuhowaNewerTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_kente_sunset',
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
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_indigo_mudcloth',
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
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_adinkra_royal',
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
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_nile_lotus',
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
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_shweshwe_ivory',
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
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_rings_ndoa',
    name: 'Hati ya Ndoa',
    description: 'Pete mbili · vichwa vya kidonge · hati rasmi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.ringsNdoa,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_couple_taarifa',
    name: 'Taarifa za Wanandoa',
    description: 'Picha ya mwanamume na mwanamke kila upande.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.coupleCards,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_barua',
    name: 'Barua ya Kuhowesha',
    description: 'Barua rasmi · pete · orodha ya vitu.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.kuhoweshaForm,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_mahari_pande',
    name: 'Mahari ya Pande',
    description: 'Masharti ya mahari · pande mbili.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF1A2744,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1A2744,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF1A2744), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.mahariPande,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_sheria_familia',
    name: 'Sheria za Familia',
    description: 'Mti wa familia · sheria za pamoja.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryGreen,
    background: 0xFFFFFDF8,
    ink: 0xFF1F4D3A,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1F4D3A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFDF8), Color(0xFF1F4D3A), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.familiaMti,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_ndoa_pamoja',
    name: 'Ndoa ya Pamoja',
    description: 'Safu mbili · mume na mke.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.ndoaSafi,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_pete_pana',
    name: 'Pete Pana',
    description: 'Pete kubwa za dhahabu · nafasi wazi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF3A2A10,
    accent: 0xFFC9A227,
    bannerFill: 0xFFC9A227,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFFC9A227), Color(0xFF3A2A10)],
    layoutKind: NgmyHatiLayoutKind.peteWide,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_muhuri',
    name: 'Muhuri wa Familia',
    description: 'Muhuri mkubwa juu · fomu rasmi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavy,
    background: 0xFFFFFBF3,
    ink: 0xFF12213D,
    accent: 0xFFC9A227,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFBF3), Color(0xFF12213D), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.muhuriCrest,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_fomu',
    name: 'Fomu ya Ndoa',
    description: 'Fomu yenye mistari · sehemu wazi.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryNavyBar,
    background: 0xFFFFFCF7,
    ink: 0xFF1A2744,
    accent: 0xFFC9A227,
    bannerFill: 0xFF1A2744,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFCF7), Color(0xFF1A2744), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.fomuWazi,
  ),
  NgmyHatiKuhowaTemplate(
    id: 'kuhowa_upendo',
    name: 'Upendo wa Dhahabu',
    description: 'Mapambo ya dhahabu · picha za wanandoa.',
    paperStyle: NgmyMarriagePaperStyle.certIvoryRose,
    background: 0xFFFFF8F5,
    ink: 0xFF7A3B4A,
    accent: 0xFFC9A227,
    bannerFill: 0xFF7A3B4A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFF8F5), Color(0xFF7A3B4A), Color(0xFFC9A227)],
    layoutKind: NgmyHatiLayoutKind.upendoOrnate,
  ),
];

/// Four extra templates for "Hati ya Makubaliano ya Malipo ya Awamu" only —
/// each a genuinely different paper *structure* (see
/// ngmy_marriage_paper_art.dart: beaded-pearl trim, stepped Art Deco
/// corners, rosette medallion corners, an asymmetric modern accent bar),
/// not just a recolor of the existing band/zigzag or double-rule frames.
/// Appended after the shared six so they always sort to the bottom of this
/// document's picker.
const List<NgmyHatiKuhowaTemplate> kNgmyHatiMalipoAwamuExtraTemplates = [
  NgmyHatiKuhowaTemplate(
    id: 'malipo_beaded_pearl',
    name: 'Malipo — Lulu',
    description: 'Mpaka wa shanga za lulu kuzunguka pembeni · dhahabu na shaba.',
    paperStyle: NgmyMarriagePaperStyle.beadedPearl,
    background: 0xFFFFFDF6,
    ink: 0xFF7A5C2E,
    accent: 0xFFC9A227,
    bannerFill: 0xFF7A5C2E,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFDF6), Color(0xFF7A5C2E), Color(0xFFC9A227)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'malipo_art_deco',
    name: 'Malipo — Art Deco',
    description: 'Pembe za ngazi za kisasa · mng\'ao wa dhahabu juu.',
    paperStyle: NgmyMarriagePaperStyle.artDeco,
    background: 0xFFF7F5F2,
    ink: 0xFF1F1B16,
    accent: 0xFFB8860B,
    bannerFill: 0xFF1F1B16,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFF7F5F2), Color(0xFF1F1B16), Color(0xFFB8860B)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'malipo_rosette',
    name: 'Malipo — Duara',
    description: 'Medali ya duara kila pembe · shaba na mahogany.',
    paperStyle: NgmyMarriagePaperStyle.rosetteCorners,
    background: 0xFFFBF6EF,
    ink: 0xFF6B3F2A,
    accent: 0xFFC97B3D,
    bannerFill: 0xFF6B3F2A,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFBF6EF), Color(0xFF6B3F2A), Color(0xFFC97B3D)],
  ),
  NgmyHatiKuhowaTemplate(
    id: 'malipo_modern_ledger',
    name: 'Malipo — Kisasa',
    description: 'Ukanda thabiti wa bluu upande wa kushoto · mstari mwembamba.',
    paperStyle: NgmyMarriagePaperStyle.modernLedger,
    background: 0xFFFFFFFF,
    ink: 0xFF12213D,
    accent: 0xFF12213D,
    bannerFill: 0xFF12213D,
    bannerText: 0xFFFFFFFF,
    previewColors: [Color(0xFFFFFFFF), Color(0xFF12213D), Color(0xFF12213D)],
  ),
];

const List<NgmyHatiKuhowaTemplate> kNgmyHatiMalipoAwamuTemplates = [
  ...kNgmyHatiKuhowaTemplates,
  ...kNgmyHatiMalipoAwamuExtraTemplates,
];

NgmyHatiKuhowaTemplate? ngmyHatiKuhowaTemplateById(String id, {List<NgmyHatiKuhowaTemplate>? templates}) {
  final lists = templates != null
      ? <List<NgmyHatiKuhowaTemplate>>[templates]
      : <List<NgmyHatiKuhowaTemplate>>[
          kNgmyHatiKuhowaRoyalTemplates,
          kNgmyHatiKuhowaPhotoTemplates,
          kNgmyHatiKuhowaExactTemplates,
          kNgmyHatiKuhowaYesterdayTemplates,
          kNgmyHatiKuhowaGoldEdgeAll,
          kNgmyHatiKuhowaNewerTemplates,
          kNgmyHatiMalipoAwamuExtraTemplates,
        ];
  for (final list in lists) {
    for (final t in list) {
      if (t.id == id) return t;
    }
  }
  return null;
}

// ── Content builder — "Hati ya Kuhowa" ──────────────────────────────────────
// A single printable page: title + Tarehe, UTANGULIZI, NIMETOWE, MASHAHIDI
// (UPANDE WA MKE then UPANDE WA MUME, two columns), MWANDISHI.

List<NgmySlideElement> _buildPageContent(
  NgmyHatiKuhowaTemplate tpl, {
  required String title,
  required String introText,
  required String sectionLabel,
  required bool sectionLabelEditable,
  required List<String> mahariItems,
  String state = '',
  double titleFontSize = 40,
  String sectionSubtitle = 'Vitu vifuatavyo vimetolewa:',
  double sectionSubtitleFontSize = 20,
  double introAdvance = 0.165,
  int witnessRows = 3,
  double titleRuleWidthRatio = 0.55,
  double titleY = 0.036,
}) {
  // The owner's own full-page designs, used exactly as drawn.
  final exact = _exactSpecFor(tpl.paperStyle);
  if (exact != null) {
    final page = _layoutExact(
      exact,
      title: title,
      introText: introText,
      sectionLabel: sectionLabel,
      sectionLabelEditable: sectionLabelEditable,
      mahariItems: mahariItems,
      sectionSubtitle: sectionSubtitle,
      state: state,
      witnessRows: witnessRows,
    );
    // Not read yet (should not happen: the picture is read before a paper is picked): a plain paper in its colours.
    if (!page.first.fileName.endsWith('_bg')) page.insert(0, _hBgImage(ngmyMarriagePaperDataUrl(tpl.paperStyle)));
    return page;
  }
  final photo = _kHatiPhotoAssets[tpl.paperStyle];
  final bgUrl = (photo == null ? null : ngmyHatiPhotoArtUrl(photo)) ?? ngmyMarriagePaperDataUrl(tpl.paperStyle);
  final royal = _royalLookFor(tpl.paperStyle);
  if (royal != null) {
    return [
      _hBgImage(bgUrl),
      ..._layoutRoyal(
        tpl,
        royal,
        title: title,
        introText: introText,
        sectionLabel: sectionLabel,
        sectionLabelEditable: sectionLabelEditable,
        mahariItems: mahariItems,
        state: state,
        titleFontSize: titleFontSize,
        sectionSubtitle: sectionSubtitle,
        sectionSubtitleFontSize: sectionSubtitleFontSize,
        introAdvance: introAdvance,
        witnessRows: witnessRows,
      ),
    ];
  }
  return [
    _hBgImage(bgUrl),
    ..._layoutSingle(
      tpl,
      title: title,
      introText: introText,
      sectionLabel: sectionLabel,
      sectionLabelEditable: sectionLabelEditable,
      mahariItems: mahariItems,
      state: state,
      titleFontSize: titleFontSize,
      sectionSubtitle: sectionSubtitle,
      sectionSubtitleFontSize: sectionSubtitleFontSize,
      introAdvance: introAdvance,
      witnessRows: witnessRows,
      titleRuleWidthRatio: titleRuleWidthRatio,
      titleY: titleY,
    ),
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
  double titleFontSize = 40,
  String sectionSubtitle = 'Vitu vifuatavyo vimetolewa:',
  double sectionSubtitleFontSize = 20,
  double introAdvance = 0.165,
  int witnessRows = 3,
  double titleRuleWidthRatio = 0.55,
  double titleY = 0.036,
}) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  // Watermark goes in first so every other element draws on top of it —
  // top-left corner, opposite the TAREHE box below.
  out.add(_hWatermark(ink));

  var headingY = titleY;
  switch (tpl.layoutKind) {
    case NgmyHatiLayoutKind.ringsNdoa:
    case NgmyHatiLayoutKind.kuhoweshaForm:
      out.addAll(_hRings(0.42, 0.016, 0.048));
      headingY = 0.066;
    case NgmyHatiLayoutKind.peteWide:
      out.addAll(_hRings(0.38, 0.012, 0.072));
      headingY = 0.082;
    case NgmyHatiLayoutKind.coupleCards:
    case NgmyHatiLayoutKind.ndoaSafi:
    case NgmyHatiLayoutKind.upendoOrnate:
      out.addAll(_hPersonMark(0.16, 0.018, 0.052, female: false, fill: ink));
      out.addAll(_hPersonMark(0.79, 0.018, 0.052, female: true, fill: 0xFF7A3B4A));
      headingY = 0.072;
    case NgmyHatiLayoutKind.familiaMti:
      out.add(_hLockedText('🌳', x: 0.42, y: 0.014, w: 0.16, h: 0.040, fontSize: 22, align: TextAlign.center, tag: 'tree'));
      headingY = 0.056;
    case NgmyHatiLayoutKind.muhuriCrest:
      out.addAll([
        _hLockedShape(shape: NgmySlideShapeKind.circle, x: 0.445, y: 0.012, w: 0.11, h: 0.062, fillColor: 0x00000000, strokeColor: _hatiGold, strokeWidth: 1.6, tag: 'crest_o'),
        _hLockedShape(shape: NgmySlideShapeKind.circle, x: 0.458, y: 0.020, w: 0.084, h: 0.046, fillColor: 0x00000000, strokeColor: _hatiGold, strokeWidth: 1.0, tag: 'crest_i'),
        _hLockedText('MUHURI', x: 0.445, y: 0.028, w: 0.11, h: 0.028, fontSize: 9, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'crest_t'),
      ]);
      headingY = 0.078;
    case NgmyHatiLayoutKind.mahariPande:
    case NgmyHatiLayoutKind.fomuWazi:
      out.addAll(_hOrnamentRule(0.20, 0.018, 0.60, ink: ink));
      headingY = 0.040;
    case NgmyHatiLayoutKind.classic:
    case NgmyHatiLayoutKind.royal:
    case NgmyHatiLayoutKind.exact:
      break;
  }

  // Tarehe gets its own row, pushed close to the paper's actual gold
  // border on the right (not just the content margin) — it used to share
  // a row with the title and could crowd/overlap it. No frame.
  out.addAll(_hTareheBox(0.7, 0.026, 0.25, ink: ink, accent: accent));
  out.add(_hLockedText(title, x: cx, y: headingY, w: cw, h: 0.06, fontSize: titleFontSize, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'));
  // A single rule sitting right under the title, not far below it — same
  // tight spacing as the NIMETOWE item underlines. Wide enough to span
  // close to the title's own width on each side. (There used to be a
  // second, smaller line under this one — removed per request.)
  final ruleY = headingY + 0.054;
  out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + cw * (1 - titleRuleWidthRatio) / 2, y: ruleY, w: cw * titleRuleWidthRatio, h: 0.0026, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'title_rule_1'));

  // UTANGULIZI — paragraph under the title, in a white frame that sits
  // clear of the title underline (not touching it).
  double y = ruleY + 0.028;
  const introH = 0.128;
  out.add(_hLockedShape(
    shape: NgmySlideShapeKind.rectangle,
    x: cx - 0.006,
    y: y - 0.004,
    w: cw + 0.012,
    h: introH + 0.010,
    fillColor: tpl.background,
    strokeColor: accent,
    strokeWidth: 1.15,
    tag: 'intro_frame',
  ));
  out.add(_hParagraphField(
    'utangulizi',
    cx,
    y,
    cw,
    introH,
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
  y += introAdvance;

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
  out.add(_hLockedText(sectionSubtitle, x: cx, y: y, w: cw, h: 0.03, fontSize: sectionSubtitleFontSize, fontWeight: FontWeight.w700, color: ink, tag: 'nimetowe_sub'));
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
  if (tpl.layoutKind == NgmyHatiLayoutKind.coupleCards ||
      tpl.layoutKind == NgmyHatiLayoutKind.ndoaSafi ||
      tpl.layoutKind == NgmyHatiLayoutKind.upendoOrnate ||
      tpl.layoutKind == NgmyHatiLayoutKind.mahariPande) {
    out.addAll(_hPersonMark(cx + 0.12, y - 0.008, 0.044, female: true, fill: 0xFF7A3B4A));
    out.addAll(_hPersonMark(cx + cw - 0.164, y - 0.008, 0.044, female: false, fill: ink));
    y += 0.012;
  }

  // MASHAHIDI as one bordered table: a single outer frame around both
  // columns with one vertical line dividing UPANDE WA MKE from UPANDE WA
  // MUME, a header row, and a line under the header row.
  const colW = cw / 2;
  const innerPad = 0.016;
  const hdrH = 0.05;
  const rowH = 0.056;
  // Extra cushion below the last row — without it, the last signature box
  // sat exactly on the table's bottom border with zero margin, so it read
  // as overflowing/poking out of the frame.
  const tableBottomPad = 0.011;
  final tableH = hdrH + witnessRows * rowH + tableBottomPad;
  final tableTop = y;
  out.addAll([
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: tableTop, w: cw, h: tableH, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.3, tag: 'wit_table_border'),
    // The "line" shape kind only ever draws horizontally (it ignores its
    // box height), so a vertical divider has to be a thin filled rectangle
    // instead — that's why the dividing line wasn't showing up before.
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + colW - 0.0012, y: tableTop, w: 0.0024, h: tableH, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_table_divider'),
    _hLockedShape(shape: NgmySlideShapeKind.line, x: cx, y: tableTop + hdrH, w: cw, h: 0.0022, strokeColor: accent, strokeWidth: 1.1, tag: 'wit_table_hdrline'),
    _hLockedText('UPANDE WA MKE', x: cx, y: tableTop + 0.012, w: colW, h: 0.03, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mke_t'),
    _hLockedText('UPANDE WA MUME', x: cx + colW, y: tableTop + 0.012, w: colW, h: 0.03, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mume_t'),
  ]);
  y = tableTop + hdrH + 0.01;
  for (var n = 1; n <= witnessRows; n++) {
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

// ── Royal papers ────────────────────────────────────────────────────────────
// The maroon band, cream and gold, emerald, navy, plum, onyx and teal papers: full coloured bars for NIMETOWA and
// MASHAHIDI, round number coins, shaded rows, two witness cards, MWANDISHI with a seal next to it, and a footer bar
// with the state. Every fill-in field, signature spot and tag is the same one the other papers use, so filling in,
// signing, moving names between Kuhowa and Kuhoweya, AKUNA DENI and hiding the 4th item all work the same.

class _RoyalLook {
  const _RoyalLook({
    required this.band,
    required this.gold,
    required this.card,
    required this.stripe,
    required this.ink,
    required this.label,
    required this.title,
    required this.barText,
    required this.badgeText,
    required this.line,
    required this.sealCenter,
    this.barSolid,
    this.bandFill = 0,
    this.ribbon,
    this.sealShiny = true,
    this.seal = true,
    this.coinSolid,
    this.coinSolidSet = false,
    this.cardHeadSet = false,
    this.cardHeadBar = true,
    this.cardHeadText,
    this.cardStroke,
    this.footSet = false,
    this.footText,
    this.introFill,
    this.introStroke,
    this.introInk,
    this.subInk,
    this.pillFill,
    this.pillText,
    this.pillStroke,
    this.rowsPanel,
    this.stripeAll = false,
    this.titleY = 0.074,
    this.titleX = 0.06,
    this.titleW = 0.88,
    this.titleScale = 1.15,
    this.pillCenter = 0.5,
    this.pillY = 0.129,
    this.introTop = 0.168,
    this.compact = false,
    this.motto,
    this.dark = false,
  });

  /// True: a solid header band with diamonds (the title sits on it). False: the title sits on the paper.
  final bool band;
  final int gold, card, stripe, ink, label, title, barText, badgeText, line, sealCenter, bandFill;

  /// The colour of the NIMETOWA and MASHAHIDI bars, or null for shiny gold.
  final int? barSolid;
  final int? ribbon;
  final bool sealShiny, seal;

  // Each of these follows the bars unless it is set on its own (the card headers and footer are then shiny gold).
  final int? coinSolid;
  final bool coinSolidSet, cardHeadSet, footSet;

  /// False: the witness card has its side name written in [label] colour with no bar behind it.
  final bool cardHeadBar;
  final int? cardHeadText, cardStroke, footText;
  final int? introFill, introStroke, introInk, subInk, pillFill, pillText, pillStroke;

  /// A panel behind the list (subtitle and the four items), for papers whose picture would show through.
  final int? rowsPanel;

  /// Every item row gets a light pill (not only rows 1 and 3).
  final bool stripeAll;
  final double titleY, titleX, titleW, titleScale, pillCenter, pillY, introTop;

  /// A little less space between parts, for the picture papers whose header is taller.
  final bool compact;

  /// Words in the footer bar (with the state after them when there is one).
  final String? motto;

  /// Dark paper: the faint NGMY mark is drawn light.
  final bool dark;

  int? get coin => coinSolidSet ? coinSolid : barSolid;
  int? get cardHead => cardHeadSet ? null : barSolid;
  int? get foot => footSet ? null : barSolid;
}

_RoyalLook? _royalLookFor(NgmyMarriagePaperStyle s) {
  const gold = 0xFFC9A23A, brightGold = 0xFFD4AF37, lightGold = 0xFFE9C766, titleGold = 0xFFE6C25A, ribbon = 0xFF8E1B24;
  switch (s) {
    case NgmyMarriagePaperStyle.royalMaroon:
      return const _RoyalLook(
          band: true, bandFill: 0xFF7A1B22, gold: gold, card: 0xFFFFFCF4, stripe: 0xFFF3E6CE, ink: 0xFF2B1A12, label: 0xFF7A1B22,
          title: 0xFFFBEFD3, barSolid: 0xFF7A1B22, barText: 0xFFFBEFD3, badgeText: 0xFFFFFFFF, line: 0xFFD8C8AE,
          sealCenter: 0xFFD4AF37, sealShiny: false);
    case NgmyMarriagePaperStyle.royalTeal:
      return const _RoyalLook(
          band: true, bandFill: 0xFF0F5257, gold: gold, card: 0xFFFFFFFC, stripe: 0xFFE3EFEA, ink: 0xFF14262A, label: 0xFF0F5257,
          title: 0xFFF6F1E1, barSolid: 0xFF0F5257, barText: 0xFFF6F1E1, badgeText: 0xFFFFFFFF, line: 0xFFC6D6CF,
          sealCenter: 0xFF0F5257, sealShiny: false);
    case NgmyMarriagePaperStyle.royalCream:
      return const _RoyalLook(
          band: false, gold: gold, card: 0xFFFFFDF7, stripe: 0xFFF4EBD9, ink: 0xFF2B1A12, label: 0xFF7A1B22, title: 0xFF7A1B22,
          barText: 0xFF6E1620, badgeText: 0xFF2B1A12, line: 0xFFD8C8AE, sealCenter: 0xFF7A1B22, ribbon: ribbon);
    case NgmyMarriagePaperStyle.royalEmerald:
      return const _RoyalLook(
          band: false, gold: brightGold, card: 0xFF0F4334, stripe: 0xFF145240, ink: 0xFFF6ECD4, label: lightGold, title: titleGold,
          barText: 0xFF0B2A20, badgeText: 0xFF0B2A20, line: 0xFF3F7A66, sealCenter: 0xFF0B2A20, ribbon: ribbon, dark: true);
    case NgmyMarriagePaperStyle.royalNavy:
      return const _RoyalLook(
          band: false, gold: brightGold, card: 0xFF172A5C, stripe: 0xFF1D3369, ink: 0xFFF3EEE0, label: lightGold, title: titleGold,
          barText: 0xFF0F1A3A, badgeText: 0xFF0F1A3A, line: 0xFF3D5590, sealCenter: 0xFF0F1A3A, ribbon: ribbon, dark: true);
    case NgmyMarriagePaperStyle.royalPlum:
      return const _RoyalLook(
          band: false, gold: brightGold, card: 0xFF3D1A4B, stripe: 0xFF4A215C, ink: 0xFFF7ECF4, label: lightGold, title: titleGold,
          barText: 0xFF2B0F35, badgeText: 0xFF2B0F35, line: 0xFF6B4380, sealCenter: 0xFF2B0F35, ribbon: ribbon, dark: true);
    case NgmyMarriagePaperStyle.royalOnyx:
      return const _RoyalLook(
          band: false, gold: brightGold, card: 0xFF23211E, stripe: 0xFF2D2A25, ink: 0xFFF5EFE3, label: lightGold, title: titleGold,
          barText: 0xFF161514, badgeText: 0xFF161514, line: 0xFF4E473C, sealCenter: 0xFF161514, ribbon: ribbon, dark: true);
    // ── The four picture papers, from the owner's own designs ──
    case NgmyMarriagePaperStyle.photoCurtain:
      return const _RoyalLook(
          band: false, gold: 0xFFD9B04A, card: 0xFF0E2560, stripe: 0xFF183585, ink: 0xFFF3EEE0, label: 0xFFF2CE6A, title: 0xFFF2CE6A,
          barText: 0xFF14204A, badgeText: 0xFF14204A, line: 0xFF4560A8, sealCenter: 0xFF14204A, seal: false,
          introFill: 0xFFF4E6C6, introInk: 0xFF2B1A12, subInk: 0xFFF2CE6A, pillFill: 0xFF0C1E58, pillText: 0xFFF2CE6A,
          rowsPanel: 0xD90B1A4A, titleY: 0.058, pillY: 0.112, introTop: 0.152, compact: true, dark: true);
    case NgmyMarriagePaperStyle.photoVillage:
      return const _RoyalLook(
          band: false, gold: 0xFF8A5A2B, card: 0x00000000, stripe: 0x00000000, ink: 0xFF2B1A12, label: 0xFF5B2A16, title: 0xFF5B2A16,
          barSolid: 0xFF5B2A16, barText: 0xFFFBEFD3, badgeText: 0xFFFFFFFF, line: 0xFFB89A78, sealCenter: 0xFF5B2A16, seal: false,
          coinSolid: 0xFF4A2412, coinSolidSet: true, cardHeadBar: false, cardStroke: 0xFF8A5A2B,
          introFill: 0x00000000, introStroke: 0x00000000, pillFill: 0xFF5B2A16, pillText: 0xFFFBEFD3, pillStroke: 0xFF5B2A16,
          titleY: 0.07, titleX: 0.17, titleW: 0.5, titleScale: 1.0, pillCenter: 0.42, pillY: 0.122, introTop: 0.19, compact: true,
          motto: 'Pamoja Tujenge Familia Imara');
    case NgmyMarriagePaperStyle.photoSunset:
      return const _RoyalLook(
          band: false, gold: 0xFFE2B84A, card: 0xFFF7E7BE, stripe: 0xFFF6E9C8, ink: 0xFF2A1A10, label: 0xFF8A4A12, title: 0xFFF2C75C,
          barSolid: 0xFF2A140C, barText: 0xFFF6ECD4, badgeText: 0xFF2A1A10, line: 0xFFC9A46A, sealCenter: 0xFF2A140C, seal: false,
          coinSolidSet: true, cardHeadSet: true, footSet: true, cardHeadText: 0xFF2A1A10, footText: 0xFF2A1A10,
          introFill: 0xE62A140C, introInk: 0xFFF6ECD4, subInk: 0xFFF6ECD4, pillFill: 0xFF2A140C, pillText: 0xFFF2C75C,
          rowsPanel: 0xE62A140C, stripeAll: true, titleY: 0.1, pillY: 0.155, introTop: 0.195, compact: true,
          motto: 'Umoja • Heshima • Familia', dark: true);
    case NgmyMarriagePaperStyle.photoRoses:
      return const _RoyalLook(
          band: false, gold: 0xFFC9A23A, card: 0xCCFFFBF2, stripe: 0xFFF1E9D8, ink: 0xFF1C2238, label: 0xFF14244F, title: 0xFF14244F,
          barSolid: 0xFF14244F, barText: 0xFFF6F1E1, badgeText: 0xFFFFFFFF, line: 0xFFD3C5A6, sealCenter: 0xFF14244F, seal: false,
          cardHeadBar: false, footSet: true, footText: 0xFF14244F, introFill: 0x00000000, introStroke: 0x00000000,
          pillFill: 0xFF14244F, pillText: 0xFFF6F1E1, pillStroke: 0xFF14244F, stripeAll: true,
          titleY: 0.072, titleX: 0.17, titleW: 0.66, pillY: 0.133, introTop: 0.172, compact: true, motto: 'Kwa Maisha ya Pamoja');
    default:
      return null;
  }
}

/// The picture papers, by paper style: the asset that holds the picture.
const Map<NgmyMarriagePaperStyle, String> _kHatiPhotoAssets = {
  NgmyMarriagePaperStyle.photoCurtain: 'photo_curtain',
  NgmyMarriagePaperStyle.photoVillage: 'photo_village',
  NgmyMarriagePaperStyle.photoSunset: 'photo_sunset',
  NgmyMarriagePaperStyle.photoRoses: 'photo_roses',
};

/// True when this paper is one of the dark royal papers (light writing, so a signature is drawn in light ink).
bool ngmyHatiPaperIsDark(int background) {
  final r = (background >> 16) & 0xFF, g = (background >> 8) & 0xFF, b = background & 0xFF;
  return (0.299 * r + 0.587 * g + 0.114 * b) < 90;
}

NgmySlideElement _hDecor(String url, double x, double y, double w, double h, String tag) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.image,
    x: x,
    y: y,
    w: w,
    h: h,
    imageRef: url,
    // Ends in _fill: the picture is stretched to fill its box, on screen and in the PDF.
    fileName: '${kMarriageLocked}_${tag}_fill',
  );
}

List<NgmySlideElement> _royalBar(_RoyalLook look, double x, double y, double w, double h, String tag, {int? solid, bool gold = false}) {
  final c = gold ? null : (solid ?? look.barSolid);
  if (c != null) {
    return [_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: w, h: h, fillColor: c, strokeColor: look.gold, strokeWidth: 0.8, tag: tag)];
  }
  return [_hDecor(ngmyRoyalGoldStripUrl(), x, y, w, h, tag)];
}

List<NgmySlideElement> _layoutRoyal(
  NgmyHatiKuhowaTemplate tpl,
  _RoyalLook look, {
  required String title,
  required String introText,
  required String sectionLabel,
  required bool sectionLabelEditable,
  required List<String> mahariItems,
  String state = '',
  double titleFontSize = 40,
  String sectionSubtitle = 'Vitu vifuatavyo vimetolewa:',
  double sectionSubtitleFontSize = 20,
  double introAdvance = 0.165,
  int witnessRows = 3,
}) {
  const cx = 0.09;
  const cw = 0.82;
  const barH = _bannerBoxH;
  final ink = look.ink;
  final gap = look.compact ? 0.0 : 1.0;
  final out = <NgmySlideElement>[];

  // The faint NGMY mark in the top-left corner, like every other paper (light on a dark paper).
  out.add(_hWatermark(look.dark ? 0xFFFFFFFF : 0xFF000000));

  // ── Title and TAREHE ──
  double pillY;
  double introTop;
  if (look.band) {
    out.add(_hDecor(ngmyRoyalBandUrl(look.bandFill, look.gold), 0.03, 0.022, 0.94, 0.096, 'royal_band'));
    out.add(_hLockedText(title, x: 0.06, y: 0.039, w: 0.88, h: 0.052, fontSize: titleFontSize * 1.15, fontWeight: FontWeight.w900, align: TextAlign.center, color: look.title, tag: 'title'));
    pillY = 0.1;
    for (var i = -2; i <= 2; i++) {
      out.add(_hDecor(ngmyRoyalDiamondUrl(look.gold), 0.5 + i * 0.05 - 0.011, 0.139, 0.022, 0.0124, 'royal_dot_$i'));
    }
    introTop = 0.158;
  } else {
    out.add(_hLockedText(title, x: look.titleX, y: look.titleY, w: look.titleW, h: 0.054, fontSize: titleFontSize * look.titleScale, fontWeight: FontWeight.w900, align: TextAlign.center, color: look.title, tag: 'title'));
    pillY = look.pillY;
    introTop = look.introTop;
  }
  const pillW = 0.31, pillH = 0.032;
  final pillX = look.pillCenter - pillW / 2;
  final pillInk = look.pillText ?? ink;
  out.addAll([
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: pillX, y: pillY, w: pillW, h: pillH, fillColor: look.pillFill ?? look.card, strokeColor: look.pillStroke ?? look.gold, strokeWidth: 1.4, tag: 'tarehe_box'),
    _hLockedText('TAREHE:', x: pillX + 0.022, y: pillY + 0.002, w: 0.115, h: _hBlankH(19), fontSize: 19, fontWeight: FontWeight.w800, color: pillInk, tag: 'tarehe_lbl'),
    _hBlank('tarehe', pillX + 0.14, pillY + 0.002, pillW - 0.15, ink: pillInk, fontSize: 20, startText: ngmyHatiKuhowaTodayDate(), align: TextAlign.left),
  ]);

  // ── The opening paragraph, in its own card ──
  // Just tall enough for the words: about 6 lines for Kuhowa and Kuhoweya, about 13 for the longer Malipo paragraph.
  final introH = 0.132 + (introAdvance - 0.165) * 1.45;
  out.add(_hLockedShape(
      shape: NgmySlideShapeKind.rectangle, x: cx - 0.006, y: introTop, w: cw + 0.012, h: introH, fillColor: look.introFill ?? look.card,
      strokeColor: look.introStroke ?? (look.band ? look.bandFill : look.gold), strokeWidth: 1.3, tag: 'intro_frame'));
  if (look.band) {
    for (final (dx, dy) in [(0.0, 0.0), (1.0, 0.0), (0.0, 1.0), (1.0, 1.0)]) {
      out.add(_hDecor(ngmyRoyalDiamondUrl(look.gold), cx - 0.006 + dx * (cw + 0.012) - 0.011, introTop + dy * introH - 0.0062, 0.022, 0.0124, 'intro_dia_${dx}_$dy'));
    }
  }
  out.add(_hParagraphField('utangulizi', cx + 0.01, introTop + 0.01, cw - 0.02, introH - 0.02, ink: look.introInk ?? ink, fontSize: 19, startText: introText));
  var y = introTop + introH + 0.01 + 0.004 * gap;

  // ── NIMETOWA bar and the list ──
  void barWithWords(String key, String words, bool editable, double at) {
    out.addAll(_royalBar(look, cx, at, cw, barH, 'banner_box_$key'));
    if (editable) {
      out.add(NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.text,
        x: cx,
        y: at + barH * _bannerTextYRatio,
        w: cw,
        h: barH * _bannerTextHRatio,
        text: words,
        fontSize: 30,
        fontWeight: FontWeight.w900,
        color: look.barText,
        align: TextAlign.center,
        fileName: '$kMarriageFieldPrefix$key:${cw.toStringAsFixed(3)}',
      ));
    } else {
      out.add(_hLockedText(words, x: cx, y: at + barH * _bannerTextYRatio, w: cw, h: barH * _bannerTextHRatio, fontSize: 30, fontWeight: FontWeight.w900, align: TextAlign.center, color: look.barText, tag: 'banner_t_$words'));
    }
  }

  barWithWords('nimetowe_label', sectionLabel, sectionLabelEditable, y);
  y += barH + 0.006 + 0.002 * gap;
  // Rows are 0.043 apart: the same step the editor uses when the 4th item is hidden, so everything below closes up evenly.
  const rowStep = 0.043;
  if (look.rowsPanel != null) {
    out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx - 0.006, y: y - 0.004, w: cw + 0.012, h: 0.032 + 4 * rowStep + 0.004, fillColor: look.rowsPanel!, strokeColor: look.gold, strokeWidth: 1.0, tag: 'nim_panel'));
  }
  out.add(_hLockedText(sectionSubtitle, x: cx, y: y, w: cw, h: 0.03, fontSize: sectionSubtitleFontSize, fontWeight: FontWeight.w700, color: look.subInk ?? ink, tag: 'nimetowe_sub'));
  y += 0.032;
  const coinW = 0.044, coinH = coinW * 9 / 16;
  for (var i = 1; i <= 4; i++) {
    if (look.stripeAll || i.isOdd) {
      out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: y - 0.003, w: cw, h: rowStep - 0.004, fillColor: look.stripe, strokeColor: look.stripe, strokeWidth: 0, tag: 'nim_stripe_$i'));
    }
    final row = _hNimetoweRow(i, mahariItems[i - 1], cx + 0.016, y, cw - 0.016, ink: ink, accent: look.label);
    final centerY = y + 0.002 + (i == 1 ? _hBlankH(22) : _hBlankH(16)) / 2;
    final coinX = cx + 0.006, coinY = centerY - coinH / 2;
    final coin = look.coin;
    if (coin != null) {
      out.add(_hLockedShape(shape: NgmySlideShapeKind.circle, x: coinX, y: coinY, w: coinW, h: coinH, fillColor: coin, strokeColor: coin, strokeWidth: 0, tag: 'nim_badge_$i'));
    } else {
      out.add(_hDecor(ngmyRoyalGoldCoinUrl(), coinX, coinY, coinW, coinH, 'nim_badge_$i'));
    }
    for (final e in row) {
      if (e.fileName == '${kMarriageLocked}_nim_n_$i') {
        e
          ..text = '$i'
          ..x = coinX
          ..w = coinW
          ..y = centerY - 0.0115
          ..h = 0.023
          ..fontSize = 15
          ..fontWeight = FontWeight.w900
          ..align = TextAlign.center
          ..color = look.badgeText;
      } else if (e.fileName == '${kMarriageLocked}_nim_ul_$i') {
        e.strokeColor = look.stripeAll ? 0x00000000 : look.line;
      }
    }
    out.addAll(row);
    y += rowStep;
  }
  y += 0.004 + 0.004 * gap;

  // ── MASHAHIDI: a bar, then a card for each side ──
  barWithWords('mashahidi', 'MASHAHIDI', false, y);
  y += barH + 0.008 + 0.004 * gap;
  const cardGap = 0.024;
  const colW = (cw - cardGap) / 2;
  const hdrH = 0.036;
  final rowH = look.compact ? 0.046 : 0.05;
  final cardH = hdrH + 0.012 + witnessRows * rowH + 0.004;
  for (final (side, words, x) in [('mke', 'UPANDE WA MKE', cx), ('mume', 'UPANDE WA MUME', cx + colW + cardGap)]) {
    out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: x, y: y, w: colW, h: cardH, fillColor: look.card, strokeColor: look.cardStroke ?? look.gold, strokeWidth: 1.2, tag: 'wit_card_$side'));
    if (look.cardHeadBar) {
      out.addAll(_royalBar(look, x, y, colW, hdrH, 'wit_h_$side', solid: look.cardHead, gold: look.cardHeadSet && look.cardHead == null));
    } else {
      out.add(_hLockedShape(shape: NgmySlideShapeKind.line, x: x + 0.012, y: y + hdrH, w: colW - 0.024, h: 0.002, strokeColor: look.cardStroke ?? look.gold, strokeWidth: 0.9, tag: 'wit_h_$side'));
    }
    out.add(_hLockedText(words, x: x, y: y + hdrH * 0.17, w: colW, h: hdrH * 0.7, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: look.cardHeadBar ? (look.cardHeadText ?? look.barText) : look.label, tag: 'wit_h_${side}_t'));
    var ly = y + hdrH + 0.012;
    for (var n = 1; n <= witnessRows; n++) {
      out.addAll(_hWitnessLine(side, n, x + 0.014, ly, colW - 0.028, ink: ink, accent: look.label));
      ly += rowH;
    }
  }
  y += cardH + 0.01 + 0.004 * gap;

  // ── MWANDISHI, the seal and the footer ──
  final mwW = look.seal ? cw * 0.76 : cw;
  const mwH = 0.072;
  const mwRow = 0.036;
  const mwUl = mwRow + 0.0255;
  final sahihiX = cx + (look.seal ? mwW * 0.55 : mwW * 0.5);
  final signX = sahihiX + 0.088;
  out.addAll([
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: y, w: mwW, h: mwH, fillColor: look.card, strokeColor: look.cardStroke ?? look.gold, strokeWidth: 1.2, tag: 'mw_box'),
    _hLockedText('MWANDISHI', x: cx + 0.022, y: y + 0.008, w: mwW - 0.044, h: 0.024, fontSize: 16, fontWeight: FontWeight.w800, color: look.label, tag: 'mw_hdr'),
    _hLockedText('Jina:', x: cx + 0.022, y: y + mwRow, w: 0.07, h: 0.026, fontSize: 15, fontWeight: FontWeight.w600, color: ink, tag: 'mw_jl'),
    _hBlank('mwandishi_jina', cx + 0.095, y + mwRow, sahihiX - cx - 0.12, ink: ink, fontSize: 15, align: TextAlign.left, autoShrinkFont: true),
    _hBlankUnderline(cx + 0.095, y + mwUl, sahihiX - cx - 0.12, color: look.line),
    _hLockedText('Sahihi:', x: sahihiX, y: y + mwRow, w: 0.085, h: 0.026, fontSize: 15, fontWeight: FontWeight.w600, color: ink, tag: 'mw_sl'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: signX,
      y: y + mwRow - 0.012,
      w: cx + mwW - 0.016 - signX,
      h: 0.04,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '${kMarriageSignPrefix}mwandishi',
    ),
    _hBlankUnderline(signX, y + mwUl, cx + mwW - 0.016 - signX, color: look.line),
  ]);
  final footY = y + mwH + 0.008 + 0.004 * gap;
  out.addAll(_royalBar(look, cx, footY, cw, 0.034, 'state_bar', solid: look.foot, gold: look.footSet && look.foot == null));
  final footInk = look.footText ?? look.barText;
  final trimmedState = state.trim();
  final motto = look.motto;
  if (motto != null) {
    out.add(_hLockedText(trimmedState.isEmpty ? motto : "$motto  •  EMO 'YA M'MBONDO $trimmedState",
        x: cx, y: footY + 0.005, w: cw, h: 0.026, fontSize: trimmedState.isEmpty ? 24 : 20, fontWeight: FontWeight.w800, align: TextAlign.center, color: footInk, tag: trimmedState.isEmpty ? 'motto_text' : 'state_text'));
  }
  if (trimmedState.isNotEmpty) {
    out.add(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: footY, w: cw, h: 0.034, fillColor: 0x00000000, strokeColor: 0x00000000, strokeWidth: 0, tag: 'state_box'));
    if (motto == null) {
      out.add(_hLockedText("EMO 'YA M'MBONDO $trimmedState", x: cx, y: footY + 0.005, w: cw, h: 0.026, fontSize: 24, fontWeight: FontWeight.w800, align: TextAlign.center, color: footInk, tag: 'state_text'));
    }
  }
  if (look.seal) {
    const sealW = 0.16;
    const sealH = sealW * 9 / 16 * 280 / 240;
    out.add(_hDecor(ngmyRoyalSealUrl(center: look.sealCenter, ribbon: look.ribbon, shiny: look.sealShiny), cx + cw - sealW - 0.004, y - 0.006, sealW, sealH, 'royal_seal'));
  }

  // Every soft line on a dark paper takes the paper's own line colour, so it shows but stays quiet.
  for (final e in out) {
    if (e.fileName.startsWith('${kMarriageLocked}_ul_')) e.strokeColor = look.line;
  }
  return out;
}

// ── Exact papers ───────────────────────────────────────────────────────────
// The owner's own designs, used exactly as drawn (assets/hati/exact_*.jpg, made by tool/hati_photo/exact.dart). Only the
// words that change were wiped off the picture; the fill-in fields are laid exactly where those words were, measured in
// the picture's own pixels, in the design's own colours and letters. The labels, lines, coins and frames stay.

/// A box in the design's own pixels: left, top, right, bottom.
typedef _Px = (double, double, double, double);

class _ExactSpec {
  const _ExactSpec({
    required this.art,
    required this.width,
    required this.height,
    required this.title,
    required this.titleColor,
    required this.titleFx,
    required this.tareheLabel,
    required this.tareheDate,
    required this.tareheColor,
    required this.tareheFx,
    required this.tareheFont,
    required this.paragraph,
    required this.paraFont,
    required this.paraInk,
    required this.paraFx,
    required this.paraAlign,
    required this.section,
    required this.sectionFont,
    required this.sectionColor,
    required this.sectionFx,
    required this.subtitle,
    required this.subtitleFont,
    required this.subtitleColor,
    required this.subtitleFx,
    required this.itemX,
    required this.itemRight,
    required this.itemRight1,
    required this.itemCenters,
    required this.itemFont,
    required this.itemInk,
    required this.itemFx,
    required this.coinX,
    required this.akunaText,
    required this.akunaBox,
    required this.akunaColor,
    required this.akunaFont,
    required this.ownTick,
    required this.witnessName,
    required this.witnessSign,
    required this.witnessFont,
    required this.witnessInk,
    required this.witnessPlaceholder,
    required this.mwName,
    required this.mwSign,
    required this.mwFont,
    required this.mwInk,
    required this.fieldFx,
    this.state,
    this.stateText = '',
    this.stateFont = 28,
    this.stateColor = 0xFF2A1A10,
    this.stateFx = 'serif',
    this.couple,
    this.parents,
  });

  /// The picture (assets/hati/<art>.jpg; <art>_notitle.jpg has the title wiped; <art>_couple.jpg is the couple).
  final String art;
  final double width, height;
  final _Px title, tareheLabel, tareheDate, paragraph, section, subtitle, akunaText, akunaBox, mwName, mwSign;
  /// [parents]: the groom's parents, on the designs that have them (the AI can paint them with the family's own faces).
  final _Px? state, couple, parents;
  final int titleColor, tareheColor, paraInk, sectionColor, subtitleColor, itemInk, akunaColor, witnessInk, mwInk, stateColor;
  final String titleFx, tareheFx, paraFx, sectionFx, subtitleFx, itemFx, fieldFx, stateFx;
  final TextAlign paraAlign;

  // Font sizes in the design's own pixels.
  final double tareheFont, paraFont, sectionFont, subtitleFont, itemFont, akunaFont, witnessFont, mwFont, stateFont;
  final double itemX, itemRight, itemRight1, coinX;
  final List<double> itemCenters;

  /// True: the design's tick box was wiped with the words, so the app draws its own green tick box.
  final bool ownTick;

  /// For each side (mke, mume), the name spot and the signature line of each witness row.
  final Map<String, List<_Px>> witnessName, witnessSign;

  /// True: the design wrote "Jina la Shahidi" where the name goes (it was wiped); the field starts with those words.
  final bool witnessPlaceholder;

  /// The words under the footer with {st} for the state; empty when the footer keeps the design's own words.
  final String stateText;

  /// How the picture sits on its tall page (every owner design); null: the picture is the page as measured.
  NgmyHatiExactFit? get fit => kNgmyHatiExactFit[art];

  /// The page in pixels (the tall page for a fitted design).
  double get pageW => fit?.width.toDouble() ?? width;
  double get pageH => fit?.height.toDouble() ?? height;

  /// A spot measured on the design (its own numbers below) on the page.
  double mx(double x) => x - (fit?.dx ?? 0);
  double my(double y) {
    final f = fit;
    return f == null ? y : _fitY(f, y);
  }

  double get aspect => pageW / pageH;

  /// The earlier, shorter page a document with this [paperAspect] was made on (the design's own shape, or the A4
  /// page used for one day), or null when it is on the page of today.
  _EarlierPage? earlierPage(double paperAspect) {
    if ((paperAspect - aspect).abs() < 0.002) return null;
    if ((paperAspect - width / height).abs() < 0.002) {
      double same(double v) => v;
      return _EarlierPage(w: width, h: height, y: same, x: same, pageY: same, pageX: same);
    }
    final a4 = kNgmyHatiExactFitA4[art];
    if (a4 != null && (paperAspect - a4.width / a4.height).abs() < 0.002) {
      return _EarlierPage(
        w: a4.width.toDouble(),
        h: a4.height.toDouble(),
        y: (v) => _unfitY(a4, v),
        x: (v) => v + a4.dx,
        pageY: (v) => _fitY(a4, v),
        pageX: (v) => v - a4.dx,
      );
    }
    return null;
  }
}

/// A spot measured on a design (its own rows) on a fitted page.
double _fitY(NgmyHatiExactFit f, double y) {
  final r = (y - f.dy) / 4, rows = f.rows;
  if (r <= 0) return rows.first + r * 4;
  final i = r.floor();
  if (i >= rows.length - 1) return rows.last + (r - rows.length + 1) * 4;
  return rows[i] + (rows[i + 1] - rows[i]) * (r - i);
}

/// The other way: a spot on a fitted page back on the design.
double _unfitY(NgmyHatiExactFit f, double v) {
  final rows = f.rows;
  if (v <= rows.first) return f.dy + (v - rows.first);
  for (var i = 0; i < rows.length - 1; i++) {
    if (v < rows[i + 1]) return f.dy + 4 * (i + (v - rows[i]) / math.max(1e-6, rows[i + 1] - rows[i]));
  }
  return f.dy + 4 * (rows.length - 1) + (v - rows.last);
}

/// An earlier page of a design, in its own pixels: [y] and [x] take a spot on it back to the design, [pageY] and
/// [pageX] put a spot of the design on it.
class _EarlierPage {
  const _EarlierPage({required this.w, required this.h, required this.y, required this.x, required this.pageY, required this.pageX});
  final double w, h;
  final double Function(double) y, x, pageY, pageX;
}

/// The couple picture on a document made on an earlier page ([from]), when the family had the AI make their own;
/// null when it is still the design's own couple (or the paper cannot be read).
Uint8List? _ngmyHatiEarlierCouple(NgmySlideDeck deck, _ExactSpec spec, _EarlierPage from) {
  final c = spec.couple;
  if (c == null || deck.slides.isEmpty) return null;
  NgmySlideElement? bg;
  for (final e in deck.slides.first.elements) {
    if (e.fileName == '${kMarriageLocked}_bg') bg = e;
  }
  final ref = bg?.imageRef ?? '';
  if (!ref.startsWith('data:image')) return null;
  try {
    final old = img.decodeImage(base64Decode(ref.substring(ref.indexOf(',') + 1)));
    if (old == null) return null;
    final sx = old.width / from.w, sy = old.height / from.h;
    final x0 = (from.pageX(c.$1) * sx).round(), y0 = (from.pageY(c.$2) * sy).round();
    final w = ((c.$3 - c.$1) * sx).round(), h = ((from.pageY(c.$4) - from.pageY(c.$2)) * sy).round();
    if (w < 8 || h < 8 || x0 < 0 || y0 < 0 || x0 + w > old.width || y0 + h > old.height) return null;
    final couple = img.copyCrop(old, x: x0, y: y0, width: w, height: h);
    // The design's own couple (the same on every page): nothing to carry over.
    final now = ngmyHatiPhotoArtUrl(spec.art);
    if (now != null) {
      final paper = img.decodeImage(base64Decode(now.substring(now.indexOf(',') + 1)));
      if (paper != null) {
        final px = (spec.mx(c.$1) / spec.pageW * paper.width).round(), py = (spec.my(c.$2) / spec.pageH * paper.height).round();
        var diff = 0.0;
        var n = 0;
        for (var j = 4; j < h - 4; j += 6) {
          for (var i = 4; i < w - 4; i += 6) {
            if (px + i >= paper.width || py + j >= paper.height) continue;
            final a = couple.getPixel(i, j), b = paper.getPixel(px + i, py + j);
            diff += (a.r - b.r).abs() + (a.g - b.g).abs() + (a.b - b.b).abs();
            n++;
          }
        }
        if (n > 0 && diff / n < 30) return null;
      }
    }
    return img.encodeJpg(couple, quality: 92);
  } catch (_) {
    return null;
  }
}

// The two full-page designs.
const _ExactSpec _kExactKijiji = _ExactSpec(
  art: 'exact_kijiji',
  width: 1054,
  height: 1492,
  couple: (0, 0, 480, 560),
  parents: (800, 270, 1050, 522),
  title: (470, 108, 842, 255),
  titleColor: 0xFFF2C14E,
  titleFx: 'goldserif',
  tareheLabel: (514, 349, 640, 383),
  tareheDate: (644, 349, 800, 383),
  tareheColor: 0xFFFBF1DC,
  tareheFx: 'serif',
  tareheFont: 26,
  paragraph: (128, 517, 918, 690),
  paraFont: 22,
  paraInk: 0xFF2A1A10,
  paraFx: 'serif',
  paraAlign: TextAlign.center,
  section: (337, 700, 722, 743),
  sectionFont: 41,
  sectionColor: 0xFFF2C14E,
  sectionFx: 'goldserif',
  subtitle: (132, 748, 476, 783),
  subtitleFont: 23,
  subtitleColor: 0xFFFBEFD3,
  subtitleFx: 'serif',
  itemX: 190,
  itemRight: 695,
  itemRight1: 690,
  itemCenters: [803, 840, 879, 916],
  itemFont: 21.5,
  itemInk: 0xFF2A1A10,
  itemFx: 'serif',
  coinX: 136,
  akunaText: (744, 838, 902, 878),
  akunaBox: (906, 842, 946, 874),
  akunaColor: 0xFFF7D046,
  akunaFont: 22,
  ownTick: true,
  witnessName: {
    'mke': [(275, 1052, 374, 1078), (275, 1092, 374, 1118), (275, 1131, 374, 1157)],
    'mume': [(705, 1052, 800, 1078), (705, 1092, 800, 1118), (705, 1131, 800, 1157)],
  },
  witnessSign: {
    'mke': [(436, 1046, 499, 1078), (436, 1086, 499, 1118), (436, 1125, 499, 1157)],
    'mume': [(863, 1046, 926, 1078), (863, 1086, 926, 1118), (863, 1125, 926, 1157)],
  },
  witnessFont: 15.5,
  witnessInk: 0xFF2A1A10,
  witnessPlaceholder: false,
  mwName: (252, 1262, 557, 1291),
  mwSign: (661, 1250, 859, 1292),
  mwFont: 18.5,
  mwInk: 0xFF2A1A10,
  fieldFx: 'serif',
  state: (366, 1395, 704, 1432),
  stateText: '———   {st}   ———',
  stateFont: 31,
);

const _ExactSpec _kExactKifalme = _ExactSpec(
  art: 'exact_kifalme',
  width: 1054,
  height: 1492,
  couple: (0, 0, 495, 440),
  title: (474, 301, 948, 385),
  titleColor: 0xFFF2C14E,
  titleFx: 'goldserif',
  tareheLabel: (560, 386, 684, 419),
  tareheDate: (688, 386, 860, 419),
  tareheColor: 0xFFF2C14E,
  tareheFx: 'goldserif',
  tareheFont: 25,
  paragraph: (117, 522, 937, 694),
  paraFont: 22,
  paraInk: 0xFF2A1A10,
  paraFx: 'serif',
  paraAlign: TextAlign.center,
  section: (358, 714, 701, 756),
  sectionFont: 40,
  sectionColor: 0xFFF2C14E,
  sectionFx: 'goldserif',
  subtitle: (129, 761, 440, 793),
  subtitleFont: 23,
  subtitleColor: 0xFFF8F1DE,
  subtitleFx: '',
  itemX: 182,
  itemRight: 742,
  itemRight1: 745,
  itemCenters: [819.5, 857.5, 892.5, 927],
  itemFont: 21.5,
  itemInk: 0xFF2A1A10,
  itemFx: 'serif',
  coinX: 128,
  akunaText: (800, 803, 922, 834),
  akunaBox: (756, 801, 793, 836),
  akunaColor: 0xFFF6CF4A,
  akunaFont: 19,
  ownTick: false,
  witnessName: {
    'mke': [(260, 1058, 362, 1083), (260, 1099, 362, 1124), (260, 1141, 362, 1166)],
    'mume': [(697, 1058, 799, 1083), (697, 1099, 799, 1124), (697, 1141, 799, 1166)],
  },
  witnessSign: {
    'mke': [(423, 1050, 499, 1083), (423, 1091, 499, 1124), (423, 1133, 499, 1166)],
    'mume': [(861, 1050, 936, 1083), (861, 1091, 936, 1124), (861, 1133, 936, 1166)],
  },
  witnessFont: 15.5,
  witnessInk: 0xFF2A1A10,
  witnessPlaceholder: false,
  mwName: (228, 1258, 568, 1287),
  mwSign: (680, 1246, 883, 1288),
  mwFont: 18.5,
  mwInk: 0xFFF8F1DE,
  fieldFx: 'serif',
  state: (336, 1395, 722, 1432),
  stateText: '———   {st}   ———',
  stateFont: 31,
);

// The four designs from the owner's 2 x 2 picture, each drawn twice as big (1198 x 1312).
const _ExactSpec _kExactCurtain = _ExactSpec(
  art: 'exact_curtain',
  width: 1198,
  height: 1312,
  title: (285, 115, 955, 200),
  titleColor: 0xFFF2C14E,
  titleFx: 'goldserif',
  tareheLabel: (462, 206, 606, 246),
  tareheDate: (608, 206, 800, 246),
  tareheColor: 0xFF14204A,
  tareheFx: '',
  tareheFont: 31,
  paragraph: (205, 278, 1028, 538),
  paraFont: 27,
  paraInk: 0xFF2A1A10,
  paraFx: '',
  paraAlign: TextAlign.left,
  section: (195, 568, 1040, 620),
  sectionFont: 38,
  sectionColor: 0xFF14204A,
  sectionFx: '',
  subtitle: (163, 636, 640, 672),
  subtitleFont: 28,
  subtitleColor: 0xFFF2CE6A,
  subtitleFx: '',
  itemX: 238,
  itemRight: 830,
  itemRight1: 828,
  itemCenters: [708, 761, 815, 867],
  itemFont: 27,
  itemInk: 0xFFF3EEE0,
  itemFx: '',
  coinX: 175,
  akunaText: (848, 690, 1012, 727),
  akunaBox: (1015, 688, 1065, 728),
  akunaColor: 0xFFF2CE6A,
  akunaFont: 24,
  ownTick: false,
  witnessName: {
    'mke': [(220, 1017, 382, 1052), (220, 1065, 382, 1100), (220, 1112, 382, 1147)],
    'mume': [(703, 1017, 855, 1052), (703, 1065, 855, 1100), (703, 1112, 855, 1147)],
  },
  witnessSign: {
    'mke': [(540, 1015, 602, 1052), (540, 1063, 602, 1100), (540, 1110, 602, 1147)],
    'mume': [(998, 1015, 1058, 1052), (998, 1063, 1058, 1100), (998, 1110, 1058, 1147)],
  },
  witnessFont: 25,
  witnessInk: 0xFFF3EEE0,
  witnessPlaceholder: true,
  mwName: (255, 1203, 582, 1233),
  mwSign: (723, 1198, 1017, 1233),
  mwFont: 26,
  mwInk: 0xFFF3EEE0,
  fieldFx: '',
  state: (370, 1262, 892, 1302),
  stateText: "EMO 'YA M'MBONDO – {st}",
  stateFont: 33,
  stateColor: 0xFF14204A,
  stateFx: '',
);

const _ExactSpec _kExactVillage = _ExactSpec(
  art: 'exact_village',
  width: 1198,
  height: 1312,
  couple: (850, 25, 1168, 285),
  title: (310, 108, 836, 200),
  titleColor: 0xFF5B2A16,
  titleFx: 'serif',
  tareheLabel: (380, 198, 562, 238),
  tareheDate: (564, 198, 765, 238),
  tareheColor: 0xFFFBEFD3,
  tareheFx: 'serif',
  tareheFont: 31,
  paragraph: (243, 280, 965, 535),
  paraFont: 26,
  paraInk: 0xFF2A1A10,
  paraFx: '',
  paraAlign: TextAlign.left,
  section: (325, 617, 885, 665),
  sectionFont: 36,
  sectionColor: 0xFFFBEFD3,
  sectionFx: 'serif',
  subtitle: (228, 678, 630, 714),
  subtitleFont: 29,
  subtitleColor: 0xFF2A1A10,
  subtitleFx: '',
  itemX: 305,
  itemRight: 805,
  itemRight1: 800,
  itemCenters: [752, 811, 864, 917],
  itemFont: 27,
  itemInk: 0xFF2A1A10,
  itemFx: '',
  coinX: 240,
  akunaText: (846, 736, 1016, 769),
  akunaBox: (1020, 733, 1070, 771),
  akunaColor: 0xFFFBEFD3,
  akunaFont: 25,
  ownTick: false,
  witnessName: {
    'mke': [(178, 1040, 322, 1070), (178, 1080, 322, 1110), (178, 1120, 322, 1150)],
    'mume': [(668, 1040, 812, 1070), (668, 1080, 812, 1110), (668, 1120, 812, 1150)],
  },
  witnessSign: {
    'mke': [(468, 1040, 527, 1070), (468, 1080, 527, 1110), (468, 1120, 527, 1150)],
    'mume': [(962, 1040, 1022, 1070), (962, 1080, 1022, 1110), (962, 1120, 1022, 1150)],
  },
  witnessFont: 22,
  witnessInk: 0xFF2A1A10,
  witnessPlaceholder: true,
  mwName: (256, 1205, 578, 1235),
  mwSign: (703, 1200, 948, 1235),
  mwFont: 24,
  mwInk: 0xFF2A1A10,
  fieldFx: '',
);

const _ExactSpec _kExactSunset = _ExactSpec(
  art: 'exact_sunset',
  width: 1198,
  height: 1312,
  title: (350, 188, 892, 262),
  titleColor: 0xFFF2C14E,
  titleFx: 'goldserif',
  tareheLabel: (462, 270, 602, 307),
  tareheDate: (604, 270, 780, 307),
  tareheColor: 0xFF1A1208,
  tareheFx: '',
  tareheFont: 29,
  paragraph: (182, 328, 1032, 568),
  paraFont: 27,
  paraInk: 0xFFF6ECD4,
  paraFx: '',
  paraAlign: TextAlign.left,
  section: (440, 598, 800, 645),
  sectionFont: 37,
  sectionColor: 0xFFF6ECD4,
  sectionFx: 'serif',
  subtitle: (163, 651, 548, 686),
  subtitleFont: 27,
  subtitleColor: 0xFFF6ECD4,
  subtitleFx: '',
  itemX: 236,
  itemRight: 822,
  itemRight1: 818,
  itemCenters: [722, 769, 816, 861],
  itemFont: 27,
  itemInk: 0xFF2A1A10,
  itemFx: '',
  coinX: 172,
  akunaText: (844, 705, 1000, 741),
  akunaBox: (1003, 700, 1050, 742),
  akunaColor: 0xFFF2D04B,
  akunaFont: 24,
  ownTick: false,
  witnessName: {
    'mke': [(215, 990, 368, 1024), (215, 1032, 368, 1066), (215, 1072, 368, 1107)],
    'mume': [(678, 990, 828, 1024), (678, 1032, 828, 1066), (678, 1072, 828, 1107)],
  },
  witnessSign: {
    'mke': [(513, 990, 570, 1024), (513, 1032, 570, 1066), (513, 1072, 570, 1107)],
    'mume': [(973, 990, 1030, 1024), (973, 1032, 1030, 1066), (973, 1072, 1030, 1107)],
  },
  witnessFont: 24,
  witnessInk: 0xFF2A1A10,
  witnessPlaceholder: true,
  mwName: (248, 1165, 582, 1195),
  mwSign: (720, 1160, 992, 1195),
  mwFont: 25,
  mwInk: 0xFFF6ECD4,
  fieldFx: '',
);

const _ExactSpec _kExactRoses = _ExactSpec(
  art: 'exact_roses',
  width: 1198,
  height: 1312,
  title: (262, 195, 932, 266),
  titleColor: 0xFF14244F,
  titleFx: 'serif',
  tareheLabel: (418, 276, 577, 314),
  tareheDate: (579, 276, 785, 314),
  tareheColor: 0xFFF6F1E1,
  tareheFx: '',
  tareheFont: 30,
  paragraph: (216, 343, 998, 572),
  paraFont: 26,
  paraInk: 0xFF14244F,
  paraFx: '',
  paraAlign: TextAlign.left,
  section: (425, 583, 775, 624),
  sectionFont: 34,
  sectionColor: 0xFFF6F1E1,
  sectionFx: 'serif',
  subtitle: (173, 636, 545, 670),
  subtitleFont: 27,
  subtitleColor: 0xFF14244F,
  subtitleFx: '',
  itemX: 248,
  itemRight: 792,
  itemRight1: 795,
  itemCenters: [703, 748, 794, 839],
  itemFont: 26,
  itemInk: 0xFF14244F,
  itemFx: '',
  coinX: 185,
  akunaText: (816, 687, 978, 719),
  akunaBox: (980, 684, 1030, 722),
  akunaColor: 0xFFF2D04B,
  akunaFont: 23,
  ownTick: false,
  witnessName: {
    'mke': [(213, 965, 362, 997), (213, 1005, 362, 1037), (213, 1045, 362, 1077)],
    'mume': [(675, 965, 824, 997), (675, 1005, 824, 1037), (675, 1045, 824, 1077)],
  },
  witnessSign: {
    'mke': [(511, 965, 570, 997), (511, 1005, 570, 1037), (511, 1045, 570, 1077)],
    'mume': [(966, 965, 1024, 997), (966, 1005, 1024, 1037), (966, 1045, 1024, 1077)],
  },
  witnessFont: 22,
  witnessInk: 0xFF14244F,
  witnessPlaceholder: true,
  mwName: (260, 1145, 552, 1174),
  mwSign: (678, 1140, 948, 1174),
  mwFont: 24,
  mwInk: 0xFF14244F,
  fieldFx: '',
);

/// True when this paper is one of the owner's own designs (a picture kept in the document).
bool ngmyHatiPaperIsPicture(NgmyMarriagePaperStyle s) => _exactSpecFor(s) != null;

_ExactSpec? _exactSpecFor(NgmyMarriagePaperStyle s) => switch (s) {
      NgmyMarriagePaperStyle.exactKijiji => _kExactKijiji,
      NgmyMarriagePaperStyle.exactKifalme => _kExactKifalme,
      NgmyMarriagePaperStyle.exactCurtain => _kExactCurtain,
      NgmyMarriagePaperStyle.exactVillage => _kExactVillage,
      NgmyMarriagePaperStyle.exactSunset => _kExactSunset,
      NgmyMarriagePaperStyle.exactRoses => _kExactRoses,
      _ => null,
    };

/// The page shape of an exact paper (width / height), or null for every other paper.
double? ngmyHatiPaperAspect(String templateId) {
  final t = ngmyHatiKuhowaTemplateById(templateId, templates: [...kNgmyHatiKuhowaTemplates, ...kNgmyHatiMalipoAwamuExtraTemplates]);
  return t == null ? null : _exactSpecFor(t.paperStyle)?.aspect;
}

/// The couple picture of an exact paper (its box in the page, as fractions, and the picture), or null for a paper
/// without one. The AI redraws this picture with the people's own faces.
({double x, double y, double w, double h, String asset, String art})? ngmyHatiCoupleArea(String templateId) => _peopleArea(templateId, parents: false);

/// The groom's parents on an exact paper that has them (Mkataba wa Ndoa Kijiji), like [ngmyHatiCoupleArea].
({double x, double y, double w, double h, String asset, String art})? ngmyHatiParentsArea(String templateId) => _peopleArea(templateId, parents: true);

({double x, double y, double w, double h, String asset, String art})? _peopleArea(String templateId, {required bool parents}) {
  final t = ngmyHatiKuhowaTemplateById(templateId);
  final spec = t == null ? null : _exactSpecFor(t.paperStyle);
  final c = parents ? spec?.parents : spec?.couple;
  if (spec == null || c == null) return null;
  return (
    x: spec.mx(c.$1) / spec.pageW,
    y: spec.my(c.$2) / spec.pageH,
    w: (c.$3 - c.$1) / spec.pageW,
    h: (spec.my(c.$4) - spec.my(c.$2)) / spec.pageH,
    asset: 'assets/hati/${spec.art}_${parents ? 'parents' : 'couple'}.jpg',
    art: spec.art,
  );
}

List<NgmySlideElement> _layoutExact(
  _ExactSpec s, {
  required String title,
  required String introText,
  required String sectionLabel,
  required bool sectionLabelEditable,
  required List<String> mahariItems,
  required String sectionSubtitle,
  String state = '',
  int witnessRows = 3,
}) {
  double fx(double px) => px / s.pageW;
  double fy(double px) => px / s.pageH;
  // A box measured on the design, on the page. On a design made tall a box keeps its height around its moved
  // middle (words stay their size); [grow] boxes (the paragraph) take all the room their rows got.
  NgmySlideElement at(NgmySlideElement e, _Px b, {bool grow = false}) {
    final top = grow ? s.my(b.$2) : s.my((b.$2 + b.$4) / 2) - (b.$4 - b.$2) / 2;
    final bottom = grow ? s.my(b.$4) : top + (b.$4 - b.$2);
    final h = fy(bottom - top);
    return e
      ..x = fx(s.mx(b.$1))
      // Never past the bottom of the page (the footer words sit close to it).
      ..y = math.min(fy(top), 1 - h)
      ..w = fx(b.$3 - b.$1)
      ..h = h;
  }
  // Font sizes are in the slides' 960-wide units; the design's sizes are in its own pixels.
  final u = 960 / s.pageW;
  // A field's box height (the same rule as every Hati field) for a size in the design's pixels, in its pixels.
  double boxPx(double font) => _hBlankH(font * u) * s.pageH;
  // The size (design pixels) at which [text] fits on one line [width] pixels wide.
  double fit(String text, double width, double font) => math.min(font, width / math.max(1, text.length * 0.48));
  final out = <NgmySlideElement>[];
  final keepTitle = title == 'HATI YA KUHOWA';
  final bgUrl = ngmyHatiPhotoArtUrl(keepTitle ? s.art : '${s.art}_notitle');
  if (bgUrl != null) out.add(_hBgImage(bgUrl));
  out.add(_hWatermark(0xFFFFFFFF));
  if (!keepTitle) {
    // As big as fits the design's title space: on two lines where the design has two, else on one.
    final bw = s.title.$3 - s.title.$1, bh = s.title.$4 - s.title.$2;
    final lines = bh > 110 ? 2 : 1;
    final words = title.split(' ');
    final longest = lines == 1 ? title.length : words.fold<int>(0, (m, w) => math.max(m, w.length)) + (words.length > 3 ? 8 : 3);
    final px = math.min(bh / (lines * 1.3), bw / (longest * 0.66));
    out.add(at(_hLockedText(title, x: 0, y: 0, w: 0, h: 0, fontSize: px * u, fontWeight: FontWeight.w900, align: TextAlign.center, color: s.titleColor, tag: 'title')..textFx = s.titleFx, s.title));
  }

  // TAREHE and the date.
  out.add(at(_hLockedText('TAREHE:', x: 0, y: 0, w: 0, h: 0, fontSize: s.tareheFont * u, fontWeight: FontWeight.w800, align: TextAlign.right, color: s.tareheColor, tag: 'tarehe_lbl')..textFx = s.tareheFx, s.tareheLabel));
  out.add(at(
      _hBlank('tarehe', 0, 0, fx(s.tareheDate.$3 - s.tareheDate.$1), ink: s.tareheColor, fontSize: s.tareheFont * u, startText: ngmyHatiKuhowaTodayDate(), align: TextAlign.left)
        ..fontStyle = FontStyle.normal
        ..fontWeight = FontWeight.w800
        ..textFx = s.tareheFx,
      s.tareheDate));

  // The opening paragraph, in the design's own letters (the long Malipo paragraph a little smaller).
  // The paragraph always fits its frame: the size at which all its words fill the frame, if smaller than the design's.
  // On a design made tall the frame is taller, so the words may be up to a third bigger to fill it.
  final pw = s.paragraph.$3 - s.paragraph.$1, ph = s.my(s.paragraph.$4) - s.my(s.paragraph.$2);
  final grown = math.min(1.33, math.sqrt(ph / (s.paragraph.$4 - s.paragraph.$2)));
  final paraPx = math.min(s.paraFont * grown, math.sqrt(pw * ph / (introText.length * 0.53 * 1.42)));
  out.add(at(
      _hParagraphField('utangulizi', 0, 0, fx(s.paragraph.$3 - s.paragraph.$1), 0, ink: s.paraInk, fontSize: paraPx * u, startText: introText)
        ..fontWeight = FontWeight.w700
        ..align = s.paraAlign
        ..textFx = s.paraFx,
      s.paragraph,
      grow: true));

  // NIMETOWA (or the document's own word) on the plaque.
  final sec = s.section;
  final secFontPx = sectionLabel.length > 12 ? s.sectionFont * 0.72 : s.sectionFont;
  final secTop = (sec.$2 + sec.$4) / 2 - boxPx(secFontPx) / 2;
  final secBox = (sec.$1, secTop, sec.$3, secTop + boxPx(secFontPx));
  if (sectionLabelEditable) {
    out.add(at(
        NgmySlideElement(
          id: NgmySlidesTemplates.newId(),
          type: NgmySlideElementType.text,
          text: sectionLabel,
          fontSize: secFontPx * u,
          fontWeight: FontWeight.w900,
          color: s.sectionColor,
          align: TextAlign.center,
          textFx: s.sectionFx,
          fileName: '${kMarriageFieldPrefix}nimetowe_label:${fx(sec.$3 - sec.$1).toStringAsFixed(3)}',
        ),
        secBox));
  } else {
    out.add(at(_hLockedText(sectionLabel, x: 0, y: 0, w: 0, h: 0, fontSize: secFontPx * u, fontWeight: FontWeight.w900, align: TextAlign.center, color: s.sectionColor, tag: 'banner_t_$sectionLabel')..textFx = s.sectionFx, secBox));
  }
  final subLen = sectionSubtitle.length;
  final subPx = subLen > 30 ? s.subtitleFont * 28 / subLen : s.subtitleFont;
  final subTop = (s.subtitle.$2 + s.subtitle.$4) / 2 - boxPx(subPx) / 2;
  out.add(at(_hLockedText(sectionSubtitle, x: 0, y: 0, w: 0, h: 0, fontSize: subPx * u, fontWeight: FontWeight.w800, color: s.subtitleColor, tag: 'nimetowe_sub')..textFx = s.subtitleFx,
      (s.subtitle.$1, subTop, s.subtitle.$3, subTop + boxPx(subPx))));

  // The four items, on the rows of the design (its coins and lines stay in the picture).
  final itemH = boxPx(s.itemFont);
  for (var i = 1; i <= 4; i++) {
    final c = s.itemCenters[i - 1];
    final right = i == 1 ? s.itemRight1 : s.itemRight;
    final top = c - itemH / 2;
    final itemPx = fit(mahariItems[i - 1], right - s.itemX, s.itemFont);
    out.add(at(_hBlank('mahari_$i', 0, 0, fx(right - s.itemX), ink: s.itemInk, fontSize: itemPx * u, startText: mahariItems[i - 1], align: TextAlign.left)..textFx = s.itemFx, (s.itemX, top, right, top + itemH)));
    // The number is on the coin in the picture; this one stays invisible (the editor finds row 4 by it).
    out.add(at(_hLockedText('$i', x: 0, y: 0, w: 0, h: 0, fontSize: 14, color: 0x00000000, tag: 'nim_n_$i'), (s.coinX, c - 14, s.coinX + 30, c + 14)));
    out.add(at(_hLockedShape(shape: NgmySlideShapeKind.line, x: 0, y: 0, w: 0, h: 0, strokeColor: 0x00000000, strokeWidth: 0, tag: 'nim_ul_$i'), (s.itemX, c + 14, right, c + 16)));
  }

  // AKUNA DENI: the words on the design's own label; the tick box over the design's tick (or the app's own).
  final akTop = (s.akunaText.$2 + s.akunaText.$4) / 2 - boxPx(s.akunaFont) / 2;
  out.add(at(_hLockedText('AKUNA DENI', x: 0, y: 0, w: 0, h: 0, fontSize: s.akunaFont * u, fontWeight: FontWeight.w900, align: TextAlign.center, color: s.akunaColor, tag: 'nim_akuna_deni'),
      (s.akunaText.$1, akTop, s.akunaText.$3, akTop + boxPx(s.akunaFont))));
  out.add(at(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0, y: 0, w: 0, h: 0, fillColor: 0x00000000, strokeColor: s.ownTick ? 0xFF16A34A : 0x00000000, strokeWidth: 2, tag: 'nim_akuna_box'), s.akunaBox));
  out.add(at(_hLockedText('✓', x: 0, y: 0, w: 0, h: 0, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: s.ownTick ? 0xFF16A34A : 0x00000000, tag: 'nim_akuna_tick'), s.akunaBox));
  final hit = (math.min(s.akunaText.$1, s.akunaBox.$1), s.akunaText.$2, math.max(s.akunaText.$3, s.akunaBox.$3), s.akunaText.$4);
  out.add(at(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0, y: 0, w: 0, h: 0, fillColor: 0x00000000, strokeColor: 0x00000000, strokeWidth: 0, tag: 'nim_akuna_hit'), hit));

  // The witnesses: a name on each name spot, a signature on each Sahihi line.
  for (final side in const ['mke', 'mume']) {
    for (var n = 1; n <= witnessRows; n++) {
      final nb = s.witnessName[side]![n - 1], sb = s.witnessSign[side]![n - 1];
      out.add(at(
          _hBlank('witness_${side}_${n}_name', 0, 0, fx(nb.$3 - nb.$1), ink: s.witnessInk, fontSize: fit('Jina la Shahidi', nb.$3 - nb.$1, s.witnessFont) * u, startText: s.witnessPlaceholder ? 'Jina la Shahidi' : '', align: TextAlign.left, autoShrinkFont: true)
            ..textFx = s.fieldFx,
          nb));
      out.add(at(
          NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, shape: NgmySlideShapeKind.rectangle, fillColor: 0x00000000, strokeColor: 0x00000000, fileName: '$kMarriageSignPrefix${side}_witness_$n'),
          sb));
    }
  }

  // MWANDISHI: the name on its line, the signature on the Sahihi line.
  out.add(at(_hBlank('mwandishi_jina', 0, 0, fx(s.mwName.$3 - s.mwName.$1), ink: s.mwInk, fontSize: s.mwFont * u, align: TextAlign.left, autoShrinkFont: true)..textFx = s.fieldFx, s.mwName));
  out.add(at(
      NgmySlideElement(id: NgmySlidesTemplates.newId(), type: NgmySlideElementType.shape, shape: NgmySlideShapeKind.rectangle, fillColor: 0x00000000, strokeColor: 0x00000000, fileName: '${kMarriageSignPrefix}mwandishi'),
      s.mwSign));

  // The state in the footer, where the design has it (the others keep their own words).
  final st = state.trim();
  final stBox = s.state;
  if (stBox != null && s.stateText.isNotEmpty) {
    final words = st.isEmpty ? s.stateText.replaceAll(RegExp(r'\s*–\s*\{st\}|\{st\}'), '') : s.stateText.replaceAll('{st}', st);
    final top = (stBox.$2 + stBox.$4) / 2 - boxPx(s.stateFont) / 2;
    out.add(at(_hLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0, y: 0, w: 0, h: 0, fillColor: 0x00000000, strokeColor: 0x00000000, strokeWidth: 0, tag: 'state_box'), stBox));
    out.add(at(_hLockedText(words, x: 0, y: 0, w: 0, h: 0, fontSize: s.stateFont * u, fontWeight: FontWeight.w800, align: TextAlign.center, color: s.stateColor, tag: 'state_text')..textFx = s.stateFx,
        (stBox.$1 - 40, top, stBox.$3 + 40, top + boxPx(s.stateFont))));
  }
  return out;
}

/// Shared hati page (title, TAREHE, intro frame, list, MASHAHIDI, MWANDISHI)
/// used by Kuhowa / Kuhowesha and also Hati ya Ndoa — Ndoa keeps its papers.
NgmySlideDeck ngmyBuildHatiLookDeck({
  required String name,
  required String themeId,
  required String deckKind,
  required NgmyMarriagePaperStyle paperStyle,
  required int background,
  required int ink,
  required int accent,
  required String title,
  required String introText,
  required String sectionLabel,
  required List<String> mahariItems,
  String state = '',
  bool sectionLabelEditable = false,
}) {
  final tpl = NgmyHatiKuhowaTemplate(
    id: themeId,
    name: name,
    description: '',
    paperStyle: paperStyle,
    background: background,
    ink: ink,
    accent: accent,
    bannerFill: accent,
    bannerText: 0xFFFFFFFF,
    previewColors: const [],
  );
  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: name,
    themeId: themeId,
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: deckKind,
    marriageState: state.trim().isEmpty ? null : state.trim(),
    slides: [
      NgmySlide(
        id: NgmySlidesTemplates.newId(),
        title: name,
        layout: NgmySlideLayout.blank,
        background: background,
        elements: _buildPageContent(
          tpl,
          title: title,
          introText: introText,
          sectionLabel: sectionLabel,
          sectionLabelEditable: sectionLabelEditable,
          mahariItems: mahariItems,
          state: state,
        ),
      ),
    ],
  );
}

/// Soft picker preview — unique chrome per certificate layout.
final _royalPreviewPages = <String, NgmySlide>{};

Widget ngmyHatiKuhowaTemplateLivePreview(NgmyHatiKuhowaTemplate tpl) {
  // A royal paper shows a small copy of its real page, so the card looks exactly like what you get.
  final exact = _exactSpecFor(tpl.paperStyle);
  if (_royalLookFor(tpl.paperStyle) != null || exact != null) {
    final page = _royalPreviewPages.putIfAbsent(tpl.id, () => ngmyBuildHatiKuhowaDeck(templateId: tpl.id).slides.first);
    return ClipRect(
      child: FittedBox(
        fit: BoxFit.cover,
        alignment: Alignment.topCenter,
        child: SizedBox(width: 270, height: exact == null ? 480 : 270 / exact.aspect, child: IgnorePointer(child: NgmySlideAnimatedRender(slide: page, animate: false))),
      ),
    );
  }
  final ink = Color(tpl.ink);
  final accent = Color(tpl.accent);
  final paper = ngmyMarriagePaperPng(tpl.paperStyle);
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
  Widget rings({double size = 18}) => Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(width: size, height: size, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(_hatiGold), width: 1.5))),
          Transform.translate(
            offset: Offset(-size * 0.38, 0),
            child: Container(width: size, height: size, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(_hatiGold), width: 1.5))),
          ),
        ],
      );
  Widget person({required bool female, double size = 18}) {
    final fill = female ? const Color(0xFF7A3B4A) : ink;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(_hatiIvory), border: Border.all(color: const Color(_hatiGold))),
      child: Stack(alignment: Alignment.center, children: [
        Positioned(top: size * 0.16, child: Container(width: size * 0.32, height: size * 0.32, decoration: BoxDecoration(color: fill, shape: BoxShape.circle))),
        Positioned(bottom: size * 0.06, child: Container(width: size * (female ? 0.62 : 0.5), height: size * 0.32, decoration: BoxDecoration(color: fill, borderRadius: BorderRadius.circular(7)))),
      ]),
    );
  }

  final showPeople = tpl.layoutKind == NgmyHatiLayoutKind.coupleCards ||
      tpl.layoutKind == NgmyHatiLayoutKind.ndoaSafi ||
      tpl.layoutKind == NgmyHatiLayoutKind.upendoOrnate ||
      tpl.layoutKind == NgmyHatiLayoutKind.mahariPande;
  final showRings = tpl.layoutKind == NgmyHatiLayoutKind.ringsNdoa ||
      tpl.layoutKind == NgmyHatiLayoutKind.peteWide ||
      tpl.layoutKind == NgmyHatiLayoutKind.kuhoweshaForm;

  return Stack(
    fit: StackFit.expand,
    children: [
      Positioned.fill(child: Image.memory(paper, fit: BoxFit.cover, gaplessPlayback: true, filterQuality: FilterQuality.medium)),
      Padding(
        padding: const EdgeInsets.fromLTRB(12, 14, 12, 10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (showRings) rings(size: tpl.layoutKind == NgmyHatiLayoutKind.peteWide ? 26 : 16),
            if (tpl.layoutKind == NgmyHatiLayoutKind.familiaMti) const Text('🌳', textAlign: TextAlign.center, style: TextStyle(fontSize: 16)),
            if (showPeople) Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [person(female: false), person(female: true)]),
            Text('HATI YA KUHOWA', textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 9)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 5),
              decoration: BoxDecoration(
                color: const Color(0x14C9A227),
                border: Border.all(color: accent, width: 1.1),
                borderRadius: BorderRadius.circular(4),
              ),
              child: Column(children: [bar(), const SizedBox(height: 2.5), bar(w: 0.9), const SizedBox(height: 2.5), bar(w: 0.75)]),
            ),
            const SizedBox(height: 6),
            ribbon('NIMETOWE'),
            const SizedBox(height: 5),
            ...List.generate(3, (i) => Padding(
                  padding: const EdgeInsets.only(bottom: 3),
                  child: Row(children: [
                    Container(width: 7, height: 7, decoration: BoxDecoration(color: accent, shape: BoxShape.circle)),
                    const SizedBox(width: 4),
                    Expanded(child: bar(h: 4)),
                  ]),
                )),
            const Spacer(),
            Text(tpl.name, textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 8)),
          ],
        ),
      ),
    ],
  );
}

const _kHatiKuhowaIntro = 'Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], '
    'Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye '
    '[Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya '
    '[Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya '
    'yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha '
    'uhusiano mwema kati ya familia zote mbili.';

/// Public intro template used when transferring names into Hati ya Kuhowa.
const String kNgmyHatiKuhowaIntroTemplate = _kHatiKuhowaIntro;

const _kHatiKuhowaMahariItems = [
  'Kichwa cha Mtu: Dollar elfu ishirini (\$20,000)',
  'Mbuzi Mbili',
  'Ngyoka',
  'Mmoko',
];

/// Builds the single-page "Hati ya Kuhowa" deck from a paper template.
NgmySlideDeck ngmyBuildHatiKuhowaDeck({required String templateId, String state = ''}) {
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
    name: 'Hati ya Kuhowa',
    themeId: 'hati_kuhowa_${tpl.id}',
    paperAspect: _exactSpecFor(tpl.paperStyle)?.aspect,
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiKuhowaDeckKind,
    marriageState: state.trim().isEmpty ? null : state.trim(),
    slides: [page],
  );
}

const _kHatiKuhoweshaIntro = 'Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], '
    'Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], '
    'na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya '
    '[Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya '
    'yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha '
    'uhusiano mwema kati ya familia zote mbili.';

/// Public intro template used when transferring names into Hati ya Kuhoweya.
const String kNgmyHatiKuhoweshaIntroTemplate = _kHatiKuhoweshaIntro;

const _kHatiKuhoweshaMahariItems = [
  'Kichwa cha Mtu: Dollar elfu ishirini (\$20,000)',
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
    name: 'Hati ya Kuhoweya',
    themeId: 'hati_kuhoweya_${tpl.id}',
    paperAspect: _exactSpecFor(tpl.paperStyle)?.aspect,
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiKuhoweshaDeckKind,
    marriageState: state.trim().isEmpty ? null : state.trim(),
    slides: [page],
  );
}

const _kHatiMalipoAwamuIntro = 'Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya '
    'upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya '
    '[Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na '
    'familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya '
    'Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili '
    'ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia '
    'makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari '
    'kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya '
    'Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena '
    'kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka '
    'kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano '
    'haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa '
    'kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya '
    'familia zetu.';

const _kHatiMalipoAwamuMahariItems = [
  'Kichwa cha Mtu: [Kiasi kilichosalia au thamani]',
  'Mbuzi Mbili',
  'Ngyoka',
  'Mmoko',
];

/// Builds the single-page "Hati ya Makubaliano ya Malipo ya Awamu ya
/// Mahari" deck — same paper, table, Mashahidi, and Mwandishi as Hati ya
/// Kuhowa, but for a partial-mahari-payment agreement: its own (longer)
/// title, its own intro paragraph, a "MALIPO YALIYOSALIA" section header
/// over the remaining-items list, and only 2 witness rows per side (the
/// paper text names exactly 2 mashahidi per side, not 3) — freeing up the
/// extra vertical room the longer intro paragraph needs so nothing spills
/// past the page's bottom border.
NgmySlideDeck ngmyBuildHatiMalipoAwamuDeck({required String templateId, String state = ''}) {
  final tpl = ngmyHatiKuhowaTemplateById(templateId, templates: kNgmyHatiMalipoAwamuTemplates) ?? kNgmyHatiMalipoAwamuTemplates.first;

  final page = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Makubaliano ya Malipo ya Awamu',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPageContent(
      tpl,
      title: 'HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI',
      introText: _kHatiMalipoAwamuIntro,
      sectionLabel: 'MALIPO YALIYOSALIA',
      sectionLabelEditable: false,
      mahariItems: _kHatiMalipoAwamuMahariItems,
      state: state,
      titleFontSize: 24,
      sectionSubtitle: 'Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):',
      sectionSubtitleFontSize: 18,
      introAdvance: 0.21,
      witnessRows: 2,
      titleRuleWidthRatio: 0.85,
      titleY: 0.048,
    ),
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Makubaliano ya Malipo ya Awamu',
    themeId: 'hati_malipo_awamu_${tpl.id}',
    paperAspect: _exactSpecFor(tpl.paperStyle)?.aspect,
    aspectRatio: NgmySlideAspectRatio.portrait916,
    deckKind: kNgmyHatiMalipoAwamuDeckKind,
    marriageState: state.trim().isEmpty ? null : state.trim(),
    slides: [page],
  );
}

Future<String?> showNgmyHatiKuhowaTemplatePicker(
  BuildContext context, {
  String docLabel = 'Hati ya Kuhowa',
  List<NgmyHatiKuhowaTemplate> templates = kNgmyHatiKuhowaTemplates,
}) async {
  // Pinned papers come first, and the picture papers are read so their cards show them.
  await Future.wait([ngmyHatiPinsLoad(), ngmyHatiPhotoArtLoad(), ngmyLoadNewsFonts()]);
  if (!context.mounted) return null;
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyHatiKuhowaTemplatePickerSheet(docLabel: docLabel, templates: templates),
  );
}

class _NgmyHatiKuhowaTemplatePickerSheet extends StatelessWidget {
  const _NgmyHatiKuhowaTemplatePickerSheet({this.docLabel = 'Hati ya Kuhowa', this.templates = kNgmyHatiKuhowaTemplates});

  final String docLabel;
  final List<NgmyHatiKuhowaTemplate> templates;

  @override
  Widget build(BuildContext context) {
    final shown = ngmyHatiPinnedFirst(templates, (t) => t.id);
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
                            Text('$docLabel · ${templates.length} miundo', style: const TextStyle(fontSize: 11.5, color: Color(0xFFB8860B), fontWeight: FontWeight.w700)),
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
                itemCount: shown.length,
                itemBuilder: (_, i) {
                  final tpl = shown[i];
                  // Each card is drawn once and kept while the list scrolls.
                  return RepaintBoundary(child: _HkTemplateCard(template: tpl, onTap: () => Navigator.pop(context, tpl.id)));
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
                  child: AspectRatio(aspectRatio: 9 / 16, child: NgmySlidePreviewImages(child: ngmyHatiKuhowaTemplateLivePreview(template))),
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
  String? reuseState,
  bool pickTemplateOnly = false,
}) async {
  final existing = savedDecks.where((d) => d.deckKind == kNgmyHatiKuhowaDeckKind).toList();

  if (!pickTemplateOnly && existing.isNotEmpty) {
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
  final state = (reuseState ?? '').trim().isNotEmpty ? reuseState!.trim() : await _pickNgmyHatiState(context);
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
  String? reuseState,
  bool pickTemplateOnly = false,
}) async {
  final existing = savedDecks.where((d) => d.deckKind == kNgmyHatiKuhoweshaDeckKind).toList();

  if (!pickTemplateOnly && existing.isNotEmpty) {
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
  final state = (reuseState ?? '').trim().isNotEmpty ? reuseState!.trim() : await _pickNgmyHatiState(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildHatiKuhoweshaDeck(templateId: templateId, state: state));
}

/// Launches the "Hati ya Makubaliano ya Malipo ya Awamu ya Mahari" flow —
/// same shape as [launchNgmyHatiKuhowa]/[launchNgmyHatiKuhowesha], but for
/// the partial-mahari-payment agreement deck.
Future<void> launchNgmyHatiMalipoAwamu({
  required BuildContext context,
  required List<NgmySlideDeck> savedDecks,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
  String? reuseState,
  bool pickTemplateOnly = false,
}) async {
  final existing = savedDecks.where((d) => d.deckKind == kNgmyHatiMalipoAwamuDeckKind).toList();

  if (!pickTemplateOnly && existing.isNotEmpty) {
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
              const Text('Malipo ya Awamu ya Mahari', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
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
  final templateId = await showNgmyHatiKuhowaTemplatePicker(context, docLabel: 'Malipo ya Awamu ya Mahari', templates: kNgmyHatiMalipoAwamuTemplates);
  if (templateId == null || !context.mounted) return;
  final state = (reuseState ?? '').trim().isNotEmpty ? reuseState!.trim() : await _pickNgmyHatiState(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildHatiMalipoAwamuDeck(templateId: templateId, state: state));
}

/// Puts the design's own picture back on a Hati document made from one of the owner's designs whose paper was swapped
/// for the plain stand-in (an earlier version did that when a document was opened). A couple picture the AI painted in
/// is kept. The pictures must be read first ([ngmyHatiPhotoArtLoad]). Returns true when something changed.
bool ngmyHatiRestorePicturePaper(NgmySlideDeck deck) {
  final id = ngmyHatiPaperIdOfDeckTheme(deck.themeId);
  if (id == null) return false;
  final tpl = ngmyHatiKuhowaTemplateById(id);
  final spec = tpl == null ? null : _exactSpecFor(tpl.paperStyle);
  if (tpl == null || spec == null) return false;
  final stand = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  var changed = false;
  // A document made on an earlier, shorter page of the design (the design's own nearly square shape, or the A4 page
  // used for one day): every word, field and signature moves to the same spot of the tall page, the paper is swapped
  // for the tall one, and a couple picture the family had made with the AI is carried over onto it.
  final from = spec.fit == null || deck.paperAspect == null ? null : spec.earlierPage(deck.paperAspect!);
  if (from != null) {
    final oldCouple = _ngmyHatiEarlierCouple(deck, spec, from);
    for (final slide in deck.slides) {
      for (final e in slide.elements) {
        final f = e.fileName;
        if (f == '${kMarriageLocked}_bg') {
          e.imageRef = null; // the tall paper is put in just below
          continue;
        }
        if (f == '${kMarriageLocked}_watermark') continue;
        final grow = f.startsWith('${kMarriageFieldPrefix}utangulizi');
        final y0 = from.y(e.y * from.h), y1 = from.y((e.y + e.h) * from.h);
        final px = e.h * from.h;
        final top = grow ? spec.my(y0) : spec.my(from.y((e.y + e.h / 2) * from.h)) - px / 2;
        final bottom = grow ? spec.my(y1) : top + px;
        e
          ..x = spec.mx(from.x(e.x * from.w)) / spec.pageW
          ..w = e.w * from.w / spec.pageW
          ..y = top / spec.pageH
          ..h = (bottom - top) / spec.pageH;
      }
    }
    deck.paperAspect = spec.aspect;
    changed = true;
    if (oldCouple != null) {
      for (final slide in deck.slides) {
        final ownTitle = slide.elements.any((e) => e.fileName == '${kMarriageLocked}_title');
        final url = ngmyHatiPhotoArtUrl(ownTitle ? '${spec.art}_notitle' : spec.art);
        final area = ngmyHatiCoupleArea(id);
        if (url == null || area == null) continue;
        for (final e in slide.elements) {
          if (e.fileName != '${kMarriageLocked}_bg') continue;
          try {
            e.imageRef = ngmyHatiPutCoupleInPaper(url, oldCouple, area);
          } catch (_) {}
        }
      }
    }
  }
  for (final slide in deck.slides) {
    final ownTitle = slide.elements.any((e) => e.fileName == '${kMarriageLocked}_title');
    final url = ngmyHatiPhotoArtUrl(ownTitle ? '${spec.art}_notitle' : spec.art);
    if (url == null) continue;
    for (final e in slide.elements) {
      if (e.fileName == '${kMarriageLocked}_bg' && (e.imageRef == null || e.imageRef == stand || !e.imageRef!.startsWith('data:image/jpeg'))) {
        e.imageRef = url;
        changed = true;
      }
    }
    if (deck.paperAspect == null) {
      deck.paperAspect = spec.aspect;
      changed = true;
    }
  }
  return changed;
}

/// The paper id inside a Hati document's theme (hati_kuhowa_<id>, hati_kuhoweya_<id>, hati_malipo_awamu_<id>).
String? ngmyHatiPaperIdOfDeckTheme(String themeId) {
  for (final p in const ['hati_kuhowa_', 'hati_kuhoweya_', 'hati_malipo_awamu_']) {
    if (themeId.startsWith(p) && themeId.length > p.length) return themeId.substring(p.length);
  }
  return null;
}
