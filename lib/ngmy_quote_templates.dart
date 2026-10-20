import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

/// The shapes drawn behind a quote.
enum NgmyQuoteDeco { grid, circuit, hexes, rings, orbs, waves, sunset, mountains, stars, rays, frame, diagonal, blocks, leaves, minimal }

/// One NGMY quote design: colours, the shapes behind the words, and a sample quote about NGMY.
class NgmyQuoteTemplate {
  const NgmyQuoteTemplate({
    required this.id,
    required this.name,
    required this.group,
    required this.deco,
    required this.top,
    required this.bottom,
    required this.accent,
    required this.accent2,
    required this.text,
    required this.sample,
    this.author = 'NGMY',
  });

  final String id;
  final String name;
  final String group;
  final NgmyQuoteDeco deco;
  final int top;
  final int bottom;
  final int accent;
  final int accent2;
  final int text;
  final String sample;
  final String author;
}

/// Twenty designs: robotic, nature, warm, bold and clean.
const List<NgmyQuoteTemplate> kNgmyQuoteTemplates = [
  // Robotic
  NgmyQuoteTemplate(id: 'neural', name: 'Neural Link', group: 'Robotic', deco: NgmyQuoteDeco.circuit, top: 0xFF020617, bottom: 0xFF0F172A, accent: 0xFF22D3EE, accent2: 0xFF6366F1, text: 0xFFE0F2FE, sample: 'One link at a time, NGMY connects young people everywhere.'),
  NgmyQuoteTemplate(id: 'signal', name: 'Signal Grid', group: 'Robotic', deco: NgmyQuoteDeco.grid, top: 0xFF1E1B4B, bottom: 0xFF020617, accent: 0xFFA855F7, accent2: 0xFFEC4899, text: 0xFFF5F3FF, sample: 'A strong signal starts with one voice. Make yours heard.'),
  NgmyQuoteTemplate(id: 'core', name: 'Core Protocol', group: 'Robotic', deco: NgmyQuoteDeco.hexes, top: 0xFF042F2E, bottom: 0xFF020617, accent: 0xFF2DD4BF, accent2: 0xFF38BDF8, text: 0xFFCCFBF1, sample: 'Our core is simple: help each other grow.'),
  NgmyQuoteTemplate(id: 'steel', name: 'Steel Tech', group: 'Robotic', deco: NgmyQuoteDeco.diagonal, top: 0xFF334155, bottom: 0xFF0F172A, accent: 0xFF94A3B8, accent2: 0xFF38BDF8, text: 0xFFF1F5F9, sample: 'Build with your hands, lead with your heart.'),
  NgmyQuoteTemplate(id: 'vault', name: 'Vault Gold', group: 'Robotic', deco: NgmyQuoteDeco.rings, top: 0xFF1C1917, bottom: 0xFF000000, accent: 0xFFFACC15, accent2: 0xFFF59E0B, text: 0xFFFEF3C7, sample: 'What you build together is worth more than gold.'),
  // Nature
  NgmyQuoteTemplate(id: 'forest', name: 'Forest Morning', group: 'Nature', deco: NgmyQuoteDeco.leaves, top: 0xFF14532D, bottom: 0xFF052E16, accent: 0xFF4ADE80, accent2: 0xFFA3E635, text: 0xFFF0FDF4, sample: 'Like a forest, a community grows strongest together.'),
  NgmyQuoteTemplate(id: 'ocean', name: 'Ocean Calm', group: 'Nature', deco: NgmyQuoteDeco.waves, top: 0xFF0369A1, bottom: 0xFF0C4A6E, accent: 0xFF38BDF8, accent2: 0xFF67E8F9, text: 0xFFF0F9FF, sample: 'Small waves become a movement. Keep going.'),
  NgmyQuoteTemplate(id: 'sunset', name: 'Sunset Glow', group: 'Nature', deco: NgmyQuoteDeco.sunset, top: 0xFFF97316, bottom: 0xFFBE185D, accent: 0xFFFDE68A, accent2: 0xFFFB7185, text: 0xFFFFFFFF, sample: 'Every sunset is a promise that tomorrow can be better.'),
  NgmyQuoteTemplate(id: 'mountain', name: 'Mountain Air', group: 'Nature', deco: NgmyQuoteDeco.mountains, top: 0xFF4338CA, bottom: 0xFF1E3A8A, accent: 0xFFC7D2FE, accent2: 0xFF818CF8, text: 0xFFEEF2FF, sample: 'Climb together. The view is better with friends.'),
  NgmyQuoteTemplate(id: 'night', name: 'Night Sky', group: 'Nature', deco: NgmyQuoteDeco.stars, top: 0xFF1E1B4B, bottom: 0xFF000000, accent: 0xFFFDE68A, accent2: 0xFFC4B5FD, text: 0xFFF5F3FF, sample: 'Dream big. NGMY is built by people who looked up.'),
  NgmyQuoteTemplate(id: 'aurora', name: 'Aurora', group: 'Nature', deco: NgmyQuoteDeco.orbs, top: 0xFF064E3B, bottom: 0xFF4C1D95, accent: 0xFF34D399, accent2: 0xFFA78BFA, text: 0xFFFFFFFF, sample: 'Light shows up when people choose to shine together.'),
  NgmyQuoteTemplate(id: 'sand', name: 'Sand Dune', group: 'Nature', deco: NgmyQuoteDeco.waves, top: 0xFFFDE68A, bottom: 0xFFD97706, accent: 0xFFB45309, accent2: 0xFFFFFBEB, text: 0xFF451A03, sample: 'Patience builds a legacy, one grain at a time.'),
  // Warm and bold
  NgmyQuoteTemplate(id: 'golden', name: 'Golden Hour', group: 'Warm', deco: NgmyQuoteDeco.rays, top: 0xFFF59E0B, bottom: 0xFFB91C1C, accent: 0xFFFEF08A, accent2: 0xFFFFFFFF, text: 0xFFFFFFFF, sample: 'Your hour is now. Start where you are.'),
  NgmyQuoteTemplate(id: 'royal', name: 'Royal Purple', group: 'Warm', deco: NgmyQuoteDeco.diagonal, top: 0xFF7E22CE, bottom: 0xFFBE185D, accent: 0xFFF0ABFC, accent2: 0xFFFDE68A, text: 0xFFFFFFFF, sample: 'Lead with respect, and people will follow with joy.'),
  NgmyQuoteTemplate(id: 'rose', name: 'Rose Petal', group: 'Warm', deco: NgmyQuoteDeco.orbs, top: 0xFFFB7185, bottom: 0xFFE11D48, accent: 0xFFFFE4E6, accent2: 0xFFFDA4AF, text: 0xFFFFFFFF, sample: 'Kindness is the strongest thing a community can grow.'),
  NgmyQuoteTemplate(id: 'electric', name: 'Electric Blue', group: 'Bold', deco: NgmyQuoteDeco.blocks, top: 0xFF2563EB, bottom: 0xFF0891B2, accent: 0xFFBAE6FD, accent2: 0xFFFFFFFF, text: 0xFFFFFFFF, sample: 'Energy is contagious. Bring yours to NGMY.'),
  NgmyQuoteTemplate(id: 'mint', name: 'Fresh Mint', group: 'Bold', deco: NgmyQuoteDeco.orbs, top: 0xFF34D399, bottom: 0xFF06B6D4, accent: 0xFFFFFFFF, accent2: 0xFFA7F3D0, text: 0xFF064E3B, sample: 'Fresh ideas grow when young people lead.'),
  // Clean
  NgmyQuoteTemplate(id: 'white', name: 'Clean White', group: 'Clean', deco: NgmyQuoteDeco.minimal, top: 0xFFFFFFFF, bottom: 0xFFF1F5F9, accent: 0xFF2563EB, accent2: 0xFF94A3B8, text: 0xFF0F172A, sample: 'Simple words, strong purpose. That is NGMY.'),
  NgmyQuoteTemplate(id: 'midnight', name: 'Midnight Gold', group: 'Clean', deco: NgmyQuoteDeco.frame, top: 0xFF0F172A, bottom: 0xFF020617, accent: 0xFFFACC15, accent2: 0xFFFDE68A, text: 0xFFFFFBEB, sample: 'Quiet work in the dark makes the morning shine.'),
  NgmyQuoteTemplate(id: 'community', name: 'Community Green', group: 'Clean', deco: NgmyQuoteDeco.rings, top: 0xFF059669, bottom: 0xFF2563EB, accent: 0xFFA7F3D0, accent2: 0xFFBFDBFE, text: 0xFFFFFFFF, sample: 'The New Global Movement for Youth starts with you.'),
];

/// Quote size is chosen from its length, so a long quote still fits and a short one is big.
double ngmyQuoteFontSize(String quote) {
  final n = quote.trim().length;
  if (n <= 40) return 66;
  if (n <= 80) return 54;
  if (n <= 140) return 44;
  if (n <= 220) return 36;
  return 30;
}

/// The file name that marks the NGMY logo on a quote, so the editor knows not to delete it.
const String kNgmyQuoteLogoFile = 'ngmy_quote_logo';

/// Marks the background picture of a quote.
const String kNgmyQuoteBackgroundFile = 'ngmy_quote_background';

/// The quote with the size marks taken out.
String ngmyQuotePlain(String s) => s.replaceAll(RegExp(r'[*~^]'), '');

/// Writes size marks around words: [levels] holds one number per word — -1 small, 0 normal,
/// 1 big, 2 huge. Words next to each other with the same size share one mark.
/// The renderer reads *big*, ^huge^ and ~small~.
String ngmyQuoteMarkup(String text, List<int> levels) {
  final matches = RegExp(r'\S+').allMatches(text).toList();
  if (matches.isEmpty) return text;
  final out = StringBuffer();
  var pos = 0;
  var i = 0;
  while (i < matches.length) {
    final lvl = i < levels.length ? levels[i] : 0;
    var j = i;
    while (j + 1 < matches.length && (j + 1 < levels.length ? levels[j + 1] : 0) == lvl) {
      j++;
    }
    out.write(text.substring(pos, matches[i].start));
    final run = ngmyQuotePlain(text.substring(matches[i].start, matches[j].end));
    final mark = switch (lvl) { 1 => '*', 2 => '^', -1 => '~', _ => '' };
    out..write(mark)..write(run)..write(mark);
    pos = matches[j].end;
    i = j + 1;
  }
  out.write(text.substring(pos));
  return out.toString();
}

// Element ids are the same every time a quote is rebuilt, so the logo picture is not decoded
// again (and left blank for a moment) each time something in the maker changes.
String _idSeed = 'q';
int _idCount = 0;
String _qid() => '${_idSeed}_${_idCount++}';

NgmySlideElement _shape(NgmySlideShapeKind kind, double x, double y, double w, double h, int color, {double rotation = 0}) =>
    NgmySlideElement(
      id: _qid(),
      type: NgmySlideElementType.shape,
      x: x,
      y: y,
      w: w,
      h: h,
      shape: kind,
      fillColor: color,
      strokeColor: color,
      strokeWidth: 0,
      rotation: rotation,
    );

// A circle of pixel diameter w*width on a 9:16 slide is w wide and w*9/16 tall.
NgmySlideElement _circle(double cx, double cy, double d, int color) =>
    _shape(NgmySlideShapeKind.circle, cx - d / 2, cy - d * 9 / 32, d, d * 9 / 16, color);

int _alpha(int argb, int a) => (a << 24) | (argb & 0x00FFFFFF);

List<NgmySlideElement> _decoration(NgmyQuoteDeco deco, int a, int b) {
  switch (deco) {
    case NgmyQuoteDeco.grid:
      return [
        for (final y in [0.12, 0.26, 0.40, 0.54, 0.68, 0.82, 0.94]) _shape(NgmySlideShapeKind.rectangle, 0, y, 1, 0.0016, _alpha(a, 0x33)),
        for (final x in [0.18, 0.5, 0.82]) _shape(NgmySlideShapeKind.rectangle, x, 0, 0.004, 1, _alpha(a, 0x22)),
        _circle(0.88, 0.1, 0.5, _alpha(b, 0x33)),
        _circle(0.1, 0.92, 0.6, _alpha(a, 0x2A)),
      ];
    case NgmyQuoteDeco.circuit:
      return [
        _shape(NgmySlideShapeKind.rectangle, 0.08, 0.08, 0.5, 0.003, _alpha(a, 0xAA)),
        _shape(NgmySlideShapeKind.rectangle, 0.58, 0.08, 0.004, 0.06, _alpha(a, 0xAA)),
        _shape(NgmySlideShapeKind.rectangle, 0.58, 0.14, 0.34, 0.003, _alpha(a, 0xAA)),
        _shape(NgmySlideShapeKind.rectangle, 0.92, 0.14, 0.004, 0.08, _alpha(a, 0x88)),
        _shape(NgmySlideShapeKind.rectangle, 0.08, 0.80, 0.004, 0.14, _alpha(b, 0xAA)),
        _shape(NgmySlideShapeKind.rectangle, 0.08, 0.94, 0.6, 0.003, _alpha(b, 0xAA)),
        _circle(0.58, 0.08, 0.05, a),
        _circle(0.92, 0.22, 0.05, a),
        _circle(0.08, 0.80, 0.05, b),
        _circle(0.68, 0.94, 0.05, b),
        _circle(0.9, 0.9, 0.55, _alpha(b, 0x22)),
      ];
    case NgmyQuoteDeco.hexes:
      return [
        _shape(NgmySlideShapeKind.hexagon, 0.62, 0.04, 0.34, 0.2, _alpha(a, 0x33), rotation: 0.2),
        _shape(NgmySlideShapeKind.hexagon, 0.02, 0.74, 0.42, 0.24, _alpha(b, 0x2E), rotation: -0.15),
        _shape(NgmySlideShapeKind.hexagon, 0.7, 0.8, 0.22, 0.12, _alpha(a, 0x44)),
        _shape(NgmySlideShapeKind.hexagon, 0.05, 0.05, 0.16, 0.09, _alpha(b, 0x55)),
      ];
    case NgmyQuoteDeco.rings:
      return [
        _circle(0.5, 0.5, 1.5, _alpha(a, 0x14)),
        _circle(0.5, 0.5, 1.15, _alpha(a, 0x18)),
        _circle(0.5, 0.5, 0.8, _alpha(b, 0x1A)),
        _circle(0.95, 0.05, 0.4, _alpha(b, 0x33)),
        _circle(0.05, 0.97, 0.5, _alpha(a, 0x2A)),
      ];
    case NgmyQuoteDeco.orbs:
      return [
        _circle(0.85, 0.08, 0.7, _alpha(a, 0x44)),
        _circle(0.1, 0.35, 0.5, _alpha(b, 0x33)),
        _circle(0.9, 0.62, 0.55, _alpha(b, 0x2E)),
        _circle(0.15, 0.95, 0.8, _alpha(a, 0x38)),
      ];
    case NgmyQuoteDeco.waves:
      return [
        _shape(NgmySlideShapeKind.rectangle, -0.1, 0.70, 1.2, 0.06, _alpha(a, 0x28), rotation: -0.04),
        _shape(NgmySlideShapeKind.rectangle, -0.1, 0.78, 1.2, 0.07, _alpha(b, 0x34), rotation: 0.035),
        _shape(NgmySlideShapeKind.rectangle, -0.1, 0.86, 1.2, 0.08, _alpha(a, 0x40), rotation: -0.03),
        _shape(NgmySlideShapeKind.rectangle, -0.1, 0.94, 1.2, 0.1, _alpha(b, 0x55), rotation: 0.02),
        _circle(0.85, 0.12, 0.3, _alpha(b, 0x33)),
      ];
    case NgmyQuoteDeco.sunset:
      return [
        _circle(0.5, 0.2, 0.65, _alpha(a, 0xCC)),
        _circle(0.5, 0.2, 0.95, _alpha(a, 0x33)),
        _shape(NgmySlideShapeKind.rectangle, -0.05, 0.84, 1.1, 0.2, _alpha(0xFF3B0764, 0x99), rotation: -0.02),
        _shape(NgmySlideShapeKind.rectangle, -0.05, 0.9, 1.1, 0.14, _alpha(0xFF1E1B4B, 0xBB), rotation: 0.02),
      ];
    case NgmyQuoteDeco.mountains:
      return [
        _shape(NgmySlideShapeKind.triangle, -0.1, 0.78, 0.7, 0.2, _alpha(a, 0x55)),
        _shape(NgmySlideShapeKind.triangle, 0.35, 0.74, 0.8, 0.24, _alpha(b, 0x66)),
        _shape(NgmySlideShapeKind.triangle, 0.15, 0.86, 0.6, 0.14, _alpha(0xFF0F172A, 0x66)),
        _circle(0.82, 0.1, 0.22, _alpha(a, 0xAA)),
      ];
    case NgmyQuoteDeco.stars:
      const spots = [
        (0.1, 0.08), (0.3, 0.05), (0.55, 0.1), (0.8, 0.06), (0.92, 0.16), (0.2, 0.2), (0.7, 0.22), (0.05, 0.4),
        (0.95, 0.45), (0.12, 0.7), (0.88, 0.75), (0.4, 0.9), (0.65, 0.93), (0.25, 0.97), (0.85, 0.9), (0.5, 0.04),
      ];
      return [
        for (var i = 0; i < spots.length; i++)
          _circle(spots[i].$1, spots[i].$2, i % 3 == 0 ? 0.035 : 0.02, _alpha(i.isEven ? a : b, i % 3 == 0 ? 0xFF : 0xAA)),
        _circle(0.85, 0.12, 0.35, _alpha(b, 0x22)),
      ];
    case NgmyQuoteDeco.rays:
      return [
        _shape(NgmySlideShapeKind.triangle, 0.35, -0.1, 0.3, 0.62, _alpha(a, 0x33)),
        _shape(NgmySlideShapeKind.triangle, 0.05, -0.1, 0.3, 0.55, _alpha(b, 0x22), rotation: -0.5),
        _shape(NgmySlideShapeKind.triangle, 0.65, -0.1, 0.3, 0.55, _alpha(b, 0x22), rotation: 0.5),
        _circle(0.5, 0.04, 0.45, _alpha(a, 0x66)),
      ];
    case NgmyQuoteDeco.frame:
      return [
        _shape(NgmySlideShapeKind.rectangle, 0.06, 0.04, 0.88, 0.002, a),
        _shape(NgmySlideShapeKind.rectangle, 0.06, 0.96, 0.88, 0.002, a),
        _shape(NgmySlideShapeKind.rectangle, 0.06, 0.04, 0.004, 0.92, a),
        _shape(NgmySlideShapeKind.rectangle, 0.936, 0.04, 0.004, 0.92, a),
        _shape(NgmySlideShapeKind.rectangle, 0.09, 0.07, 0.82, 0.001, _alpha(b, 0x88)),
        _shape(NgmySlideShapeKind.rectangle, 0.09, 0.93, 0.82, 0.001, _alpha(b, 0x88)),
      ];
    case NgmyQuoteDeco.diagonal:
      return [
        _shape(NgmySlideShapeKind.parallelogram, -0.1, 0.05, 0.7, 0.12, _alpha(a, 0x33), rotation: -0.1),
        _shape(NgmySlideShapeKind.parallelogram, 0.45, 0.78, 0.7, 0.1, _alpha(b, 0x40), rotation: -0.1),
        _shape(NgmySlideShapeKind.parallelogram, -0.1, 0.9, 0.6, 0.06, _alpha(a, 0x55), rotation: -0.1),
      ];
    case NgmyQuoteDeco.blocks:
      return [
        _shape(NgmySlideShapeKind.rectangle, 0, 0, 0.3, 0.09, _alpha(b, 0x44)),
        _shape(NgmySlideShapeKind.rectangle, 0.7, 0.9, 0.3, 0.1, _alpha(a, 0x55)),
        _shape(NgmySlideShapeKind.rectangle, 0.82, 0.04, 0.12, 0.07, _alpha(b, 0x2E)),
        _shape(NgmySlideShapeKind.rectangle, 0.04, 0.82, 0.18, 0.08, _alpha(a, 0x33)),
      ];
    case NgmyQuoteDeco.leaves:
      return [
        _shape(NgmySlideShapeKind.circle, 0.62, 0.02, 0.5, 0.16, _alpha(a, 0x44), rotation: 0.6),
        _shape(NgmySlideShapeKind.circle, 0.78, 0.12, 0.4, 0.12, _alpha(b, 0x44), rotation: 0.9),
        _shape(NgmySlideShapeKind.circle, -0.12, 0.8, 0.5, 0.16, _alpha(b, 0x44), rotation: -0.6),
        _shape(NgmySlideShapeKind.circle, -0.05, 0.9, 0.4, 0.12, _alpha(a, 0x44), rotation: -0.9),
        _circle(0.9, 0.9, 0.3, _alpha(a, 0x33)),
      ];
    case NgmyQuoteDeco.minimal:
      return [
        _shape(NgmySlideShapeKind.rectangle, 0.09, 0.12, 0.16, 0.006, a),
        _shape(NgmySlideShapeKind.rectangle, 0.05, 0.03, 0.9, 0.001, _alpha(b, 0x66)),
        _shape(NgmySlideShapeKind.rectangle, 0.05, 0.97, 0.9, 0.001, _alpha(b, 0x66)),
      ];
  }
}

/// Builds a story-size (9:16) slide for a quote: the design, the quote, who said it, and the
/// NGMY watermark. [logoData] is the NGMY logo as a data URI, when it could be loaded.
NgmySlide ngmyBuildQuoteSlide(
  NgmyQuoteTemplate t, {
  required String quote,
  required String author,
  String? logoData,
  String idSeed = 'q',
  double logoX = 0.39,
  double logoY = 0.80,
  double logoSize = 0.22,
  String logoFrame = 'circle',
  String logoRing = 'gold',
  String textFx = '',
  double sizeScale = 1.0,
  String? bgImage,
  bool transparent = false,
  int? textColor,
  TextAlign align = TextAlign.center,
  bool bold = true,
  bool italic = false,
  double quoteY = 0.30,
  bool quoteMarks = true,
  bool shapes = true,
  int highlight = 0,
}) {
  _idSeed = idSeed;
  _idCount = 0;
  final words = quote.trim().isEmpty ? t.sample : quote.trim();
  final who = author.trim();
  final ink = textColor ?? t.text;
  NgmySlideElement text(String s, double x, double y, double w, double h, double size, int color,
          {FontWeight weight = FontWeight.w700, FontStyle style = FontStyle.normal, TextAlign align = TextAlign.center}) =>
      NgmySlideElement(
        id: _qid(),
        type: NgmySlideElementType.text,
        x: x,
        y: y,
        w: w,
        h: h,
        text: s,
        fontSize: size,
        fontWeight: weight,
        fontStyle: style,
        color: color,
        align: align,
      );
  // The quote itself: words in *stars* are drawn bigger, and [textFx] is the chosen word design.
  NgmySlideElement quoteText(String s, double size, int color) => NgmySlideElement(
        id: _qid(),
        type: NgmySlideElementType.text,
        x: 0.09,
        y: quoteY,
        w: 0.82,
        h: 0.36,
        text: s,
        fontSize: size,
        fontWeight: bold ? FontWeight.w800 : FontWeight.w500,
        fontStyle: italic ? FontStyle.italic : FontStyle.normal,
        color: color,
        align: align,
        textFx: textFx,
        rich: true,
        textBg: highlight,
      );
  return NgmySlide(
    id: '${idSeed}_slide',
    layout: NgmySlideLayout.blank,
    background: transparent ? 0x00000000 : t.top,
    backgroundEnd: transparent ? 0x00000000 : t.bottom,
    elements: [
      // A picture behind everything, when the quote has its own background picture.
      if (bgImage != null && bgImage.isNotEmpty)
        NgmySlideElement(
          id: _qid(),
          type: NgmySlideElementType.image,
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          imageRef: bgImage,
          fileName: kNgmyQuoteBackgroundFile,
        ),
      if (shapes) ..._decoration(t.deco, t.accent, t.accent2),
      if (quoteMarks) text('“', 0.08, (quoteY - 0.13).clamp(0.0, 1.0), 0.84, 0.1, 200, t.accent, weight: FontWeight.w900, align: align),
      quoteText(words, ngmyQuoteFontSize(ngmyQuotePlain(words)) * sizeScale * (words.contains(RegExp(r'[*^]')) ? 0.85 : 1.0), ink),
      if (who.isNotEmpty)
        text('— $who', 0.09, (quoteY + 0.39).clamp(0.0, 0.9), 0.82, 0.05, 30, _alpha(ink, 0xDD), style: FontStyle.italic, weight: FontWeight.w600, align: align),
      text('NGMY', 0.3, 0.925, 0.4, 0.028, 22, _alpha(ink, 0xB3), weight: FontWeight.w900),
      text('New Global Movement for Youth', 0.1, 0.96, 0.8, 0.025, 14, _alpha(ink, 0x99), weight: FontWeight.w600),
      // The NGMY logo: a round profile-picture style by default, with a ring. It can be moved and
      // reframed, but it is always there.
      if (logoData != null && logoData.isNotEmpty)
        NgmySlideElement(
          id: _qid(),
          type: NgmySlideElementType.image,
          x: logoX,
          y: logoY,
          w: logoSize,
          h: logoSize * 9 / 16,
          imageRef: logoData,
          fileName: kNgmyQuoteLogoFile,
          frame: logoFrame,
          ring: logoRing,
        ),
    ],
  );
}
