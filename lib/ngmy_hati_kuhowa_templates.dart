import 'package:flutter/material.dart';

import 'ngmy_marriage_paper_art.dart';
import 'ngmy_slides_marriage_agreement.dart';
import 'ngmy_slides_models.dart';

const String kNgmyHatiKuhowaDeckKind = 'hati_kuhowa';

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
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
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
    fileName: '$kMarriageFieldPrefix$key:${w.toStringAsFixed(3)}',
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
/// just to fit the word, centered on the page. Not a full-width bar.
List<NgmySlideElement> _hBanner(String text, double y, double x, double w, {required int fill}) {
  const boxW = 0.36;
  const boxH = 0.05;
  final bx = x + (w - boxW) / 2;
  return [
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: bx, y: y, w: boxW, h: boxH, fillColor: 0x00000000, strokeColor: fill, strokeWidth: 1.4, tag: 'banner_box_$text'),
    _hLockedText(text, x: bx, y: y + 0.008, w: boxW, h: 0.036, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: fill, tag: 'banner_t_$text'),
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
  return [
    _hLockedText('TAREHE:', x: x, y: y, w: labelW, h: 0.036, fontSize: 20, fontWeight: FontWeight.w800, align: TextAlign.left, color: accent, tag: 'tarehe_lbl'),
    _hBlank('tarehe', valueX, y, valueW, ink: ink, fontSize: 21, startText: ngmyHatiKuhowaTodayDate(), align: TextAlign.left),
    _hBlankUnderline(valueX, y + _hBlankH(21), valueW, color: accent),
  ];
}

/// One NIMETOWE line item — plain numbering (matches the witness rows) and a
/// wide editable blank. No circle graphic.
List<NgmySlideElement> _hNimetoweRow(int n, String hint, double x, double y, double w, {required int ink, required int accent}) {
  final itemX = x + 0.042;
  final itemW = x + w - itemX;
  return [
    _hLockedText('$n.', x: x, y: y, w: 0.038, h: 0.034, fontSize: 21, fontWeight: FontWeight.w800, color: accent, tag: 'nim_n_$n'),
    _hBlank('mahari_$n', itemX, y + 0.002, itemW, ink: ink, fontSize: 21, startText: hint, align: TextAlign.left),
    _hBlankUnderline(itemX, y + 0.002 + _hBlankH(21), itemW),
  ];
}

/// One MASHAHIDI witness line — name + Sahihi (signature), no date field.
/// Sized to sit in one column of the shared witness table. The signature
/// zone is deliberately wide/tall so a full signature has room to appear.
List<NgmySlideElement> _hWitnessLine(String side, int n, double x, double y, double w, {required int ink, required int accent}) {
  // The name field is a single line, never allowed to wrap — it needs to
  // be wide enough for a real full name, so it gets most of the column;
  // Sahihi/signature get a smaller, still-usable share.
  final nameW = w * 0.56;
  final sahihiLblX = x + nameW + 0.012;
  final signX = sahihiLblX + 0.05;
  final signW = x + w - signX;
  return [
    _hLockedText('$n.', x: x, y: y, w: 0.026, h: 0.024, fontSize: 13, fontWeight: FontWeight.w800, color: accent, tag: 'wln_${side}_$n'),
    _hBlank('witness_${side}_${n}_name', x + 0.026, y, nameW - 0.026, ink: ink, fontSize: 13, startText: '[Jina la Shahidi]', align: TextAlign.left),
    _hBlankUnderline(x + 0.026, y + _hBlankH(13), nameW - 0.026),
    _hLockedText('Sahihi:', x: sahihiLblX, y: y + 0.002, w: 0.05, h: 0.022, fontSize: 10, fontWeight: FontWeight.w600, color: ink, tag: 'wls_${side}_$n'),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: signX,
      y: y - 0.004,
      w: signW,
      h: 0.03,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      fileName: '$kMarriageSignPrefix${side}_witness_$n',
    ),
    _hBlankUnderline(signX, y + 0.024, signW),
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
    _hBlank('mwandishi_jina', x + 0.125, y + 0.056, w * 0.38, ink: ink, fontSize: 15, align: TextAlign.left),
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

List<NgmySlideElement> _buildPageContent(NgmyHatiKuhowaTemplate tpl) {
  final bgUrl = ngmyMarriagePaperDataUrl(tpl.paperStyle);
  return [_hBgImage(bgUrl), ..._layoutSingle(tpl)];
}

List<NgmySlideElement> _layoutSingle(NgmyHatiKuhowaTemplate tpl) {
  final ink = tpl.ink;
  final accent = tpl.accent;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[];

  // Tarehe gets its own row, pinned to the very top-right corner — it used
  // to share a row with the title and could crowd/overlap it. No frame.
  out.addAll(_hTareheBox(0.55, 0.026, 0.36, ink: ink, accent: accent));
  out.add(_hLockedText('HATI YA KUHOWA', x: cx, y: 0.072, w: cw, h: 0.062, fontSize: 34, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'));

  // UTANGULIZI — one wrapped paragraph field, reproduced verbatim (including
  // the repeated "[Jina la Mwanaume]" / "[Jina la Jamaa]" / "[Jina la
  // Nyumba]" placeholders exactly as given). Word-wrap keeps every line
  // flush from the left edge to the right edge of the paper automatically.
  double y = 0.138;
  out.add(_hParagraphField(
    'utangulizi',
    cx,
    y,
    cw,
    0.115,
    ink: ink,
    fontSize: 19,
    startText: 'Mimi [Jina la Mwanaume], wa Jamaa la [Jina la Jamaa], Nyumba ya '
        '[Jina la Nyumba], nimetowa mahali ya kuhoweya kijana wangu aitwaye '
        '[Jina la Mwanaume], kwa [Jina la Mwanamke], binti wa [Jina la Baba '
        'wa Mwanamke], wa Jamaa la [Jina la Jamaa], Nyumba ya [Jina la Nyumba].',
  ));
  y += 0.127;

  out.addAll(_hBanner('NIMETOWE', y, cx, cw, fill: tpl.bannerFill));
  y += 0.056;
  out.add(_hLockedText('Vitu vifuatavyo vitatolewa:', x: cx, y: y, w: cw, h: 0.03, fontSize: 20, fontWeight: FontWeight.w700, color: ink, tag: 'nimetowe_sub'));
  y += 0.032;
  for (var i = 1; i <= 4; i++) {
    out.addAll(_hNimetoweRow(i, '[Kitu cha Mahari $i]', cx, y, cw, ink: ink, accent: accent));
    y += 0.044;
  }
  y += 0.018;

  out.addAll(_hBanner('MASHAHIDI', y, cx, cw, fill: tpl.bannerFill));
  y += 0.052;

  // MASHAHIDI as one bordered table: a single outer frame around both
  // columns with one vertical line dividing NGAMBO YA MKE from NGAMBO YA
  // MUME, a header row, and a line under the header row.
  const colW = cw / 2;
  const innerPad = 0.016;
  const hdrH = 0.046;
  const rowH = 0.054;
  final tableH = hdrH + 3 * rowH;
  final tableTop = y;
  out.addAll([
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: tableTop, w: cw, h: tableH, fillColor: 0x00000000, strokeColor: accent, strokeWidth: 1.3, tag: 'wit_table_border'),
    // The "line" shape kind only ever draws horizontally (it ignores its
    // box height), so a vertical divider has to be a thin filled rectangle
    // instead — that's why the dividing line wasn't showing up before.
    _hLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx + colW - 0.0012, y: tableTop, w: 0.0024, h: tableH, fillColor: accent, strokeColor: accent, strokeWidth: 0, tag: 'wit_table_divider'),
    _hLockedShape(shape: NgmySlideShapeKind.line, x: cx, y: tableTop + hdrH, w: cw, h: 0.0022, strokeColor: accent, strokeWidth: 1.1, tag: 'wit_table_hdrline'),
    _hLockedText('NGAMBO YA MKE', x: cx, y: tableTop + 0.011, w: colW, h: 0.026, fontSize: 15, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mke_t'),
    _hLockedText('NGAMBO YA MUME', x: cx + colW, y: tableTop + 0.011, w: colW, h: 0.026, fontSize: 15, fontWeight: FontWeight.w900, align: TextAlign.center, color: accent, tag: 'wit_h_mume_t'),
  ]);
  y = tableTop + hdrH + 0.008;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_hWitnessLine('mke', n, cx + innerPad, y, colW - innerPad * 2, ink: ink, accent: accent));
    out.addAll(_hWitnessLine('mume', n, cx + colW + innerPad, y, colW - innerPad * 2, ink: ink, accent: accent));
    y += rowH;
  }
  y = tableTop + tableH + 0.014;

  out.addAll(_hMwandishiBar(cx, y, cw, ink: ink, accent: accent));

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

/// Builds the single-page "Hati ya Kuhowa" deck from a paper template.
NgmySlideDeck ngmyBuildHatiKuhowaDeck({required String templateId}) {
  ngmyClearMarriagePaperCache();
  final tpl = ngmyHatiKuhowaTemplateById(templateId) ?? kNgmyHatiKuhowaTemplates.first;

  final page = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Hati ya Kuhowa',
    layout: NgmySlideLayout.blank,
    background: tpl.background,
    elements: _buildPageContent(tpl),
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

Future<String?> showNgmyHatiKuhowaTemplatePicker(BuildContext context) async {
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => const _NgmyHatiKuhowaTemplatePickerSheet(),
  );
}

class _NgmyHatiKuhowaTemplatePickerSheet extends StatelessWidget {
  const _NgmyHatiKuhowaTemplatePickerSheet();

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
                            const Text('Hati ya Kuhowa', style: TextStyle(fontSize: 11.5, color: Color(0xFFB8860B), fontWeight: FontWeight.w700)),
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
  openDraftEditor(ngmyBuildHatiKuhowaDeck(templateId: templateId));
}
