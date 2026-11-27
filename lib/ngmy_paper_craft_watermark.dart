import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:image/image.dart' as img;

import 'ngmy_paper_crafts.dart';
import 'ngmy_slides_models.dart';

/// NGMY watermarks on Fold & Cut designs. Every design carries one (the Seal unless the user picks another). It is
/// drawn as a few ordinary slide pieces (words, rings, bands, the real NGMY logo) marked with
/// [kNgmyCraftWatermarkFile]: locked like the fold lines, under the user's words, faint but clear, tinted with the
/// design's colour set (white on dark panels). It sits on each design's front panel(s), turned the way the words on
/// that panel read after folding.

const String kNgmyCraftWatermarkFile = 'paper_craft_wm';
const String kNgmyCraftDefaultWatermark = 'seal';

class NgmyCraftWatermark {
  const NgmyCraftWatermark(this.id, this.name, this.icon);
  final String id;
  final String name;
  final IconData icon;
}

const List<NgmyCraftWatermark> kNgmyCraftWatermarks = [
  NgmyCraftWatermark('seal', 'Seal', Icons.verified_outlined),
  NgmyCraftWatermark('diagonal', 'Big diagonal', Icons.north_east_rounded),
  NgmyCraftWatermark('pattern', 'Pattern', Icons.grid_view_rounded),
  NgmyCraftWatermark('logo', 'NGMY logo', Icons.image_outlined),
  NgmyCraftWatermark('border', 'Border', Icons.crop_din_rounded),
  NgmyCraftWatermark('crest', 'Crest', Icons.diamond_outlined),
  NgmyCraftWatermark('ribbon', 'Ribbon', Icons.bookmark_border_rounded),
  NgmyCraftWatermark('footer', 'Footer', Icons.horizontal_rule_rounded),
  NgmyCraftWatermark('script', 'Script', Icons.gesture_rounded),
];

bool ngmyIsCraftWatermark(NgmySlideElement e) => e.fileName == kNgmyCraftWatermarkFile;

NgmyCraftWatermark? ngmyCraftWatermarkById(String id) {
  for (final w in kNgmyCraftWatermarks) {
    if (w.id == id) return w;
  }
  return null;
}

// ---------------------------------------------------------------------------------------------------------------
// The NGMY logo (assets/images/ngmy_logo.png): its white background is taken out, it is tinted with the colour
// set and made faint, once per colour.
// ---------------------------------------------------------------------------------------------------------------

Uint8List? _logoSrc;
img.Image? _logoCrop;
final Map<int, String> _logoCache = {};

/// Loads the NGMY logo once, so the "NGMY logo" watermark can use it.
Future<void> ngmyPreloadCraftLogo() async {
  if (_logoSrc != null) return;
  try {
    final d = await rootBundle.load('assets/images/ngmy_logo.png');
    _logoSrc = d.buffer.asUint8List();
  } catch (_) {}
}

bool get ngmyCraftLogoReady => _logoSrc != null;

double _lum(img.Pixel px) => 0.299 * px.r + 0.587 * px.g + 0.114 * px.b;

img.Image? _cropLogo() {
  if (_logoCrop != null) return _logoCrop;
  final bytes = _logoSrc;
  if (bytes == null) return null;
  final src = img.decodeImage(bytes);
  if (src == null) return null;
  var minX = src.width, minY = src.height, maxX = 0, maxY = 0;
  // The picture has a thin dark line along its very edge: only the logo itself counts.
  const edge = 12;
  for (final px in src) {
    if (px.x < edge || px.y < edge || px.x >= src.width - edge || px.y >= src.height - edge) continue;
    if (_lum(px) < 200) {
      minX = math.min(minX, px.x);
      minY = math.min(minY, px.y);
      maxX = math.max(maxX, px.x);
      maxY = math.max(maxY, px.y);
    }
  }
  if (maxX <= minX || maxY <= minY) return null;
  final crop = img.copyCrop(src, x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1);
  return _logoCrop = img.copyResize(crop, width: 640);
}

/// Width / height of the logo (about 4 to 1).
double get _logoAspect {
  final c = _cropLogo();
  return c == null ? 4.2 : c.width / c.height;
}

/// The logo as a faint PNG in [argb] (its alpha is how faint).
String? _logoDataUri(int argb) {
  final hit = _logoCache[argb];
  if (hit != null) return hit;
  final crop = _cropLogo();
  if (crop == null) return null;
  final out = img.Image(width: crop.width, height: crop.height, numChannels: 4);
  final a = (argb >> 24) & 0xFF;
  final r = (argb >> 16) & 0xFF;
  final g = (argb >> 8) & 0xFF;
  final b = argb & 0xFF;
  for (final px in crop) {
    final ink = ((235 - _lum(px)) / 180).clamp(0.0, 1.0);
    out.setPixelRgba(px.x, px.y, r, g, b, (a * ink).round());
  }
  final uri = 'data:image/png;base64,${base64Encode(img.encodePng(out))}';
  _logoCache[argb] = uri;
  return uri;
}

// ---------------------------------------------------------------------------------------------------------------
// Building a watermark on one front panel.
// ---------------------------------------------------------------------------------------------------------------

const double _unitPt = 612 / 960;

/// A front panel, with its own "up" (rot) so the watermark reads right after folding.
class _Frame {
  _Frame(List<num> a, this.palette)
      : rot = a.length > 4 ? a[4].toDouble() : 0,
        dark = a.length > 5 && a[5] != 0,
        cx = (a[0] + a[2] / 2).toDouble(),
        cy = (a[1] + a[3] / 2).toDouble(),
        lw = ((a.length > 4 ? a[4] : 0).toDouble().abs() - math.pi / 2).abs() < 0.01 ? a[3].toDouble() : a[2].toDouble(),
        lh = ((a.length > 4 ? a[4] : 0).toDouble().abs() - math.pi / 2).abs() < 0.01 ? a[2].toDouble() : a[3].toDouble();

  final NgmyCraftPalette palette;
  final double rot;
  final bool dark;
  final double cx;
  final double cy;
  final double lw;
  final double lh;
  final List<NgmySlideElement> out = [];

  double get m => math.min(lw, lh);

  /// The watermark colour at [alpha] (a little stronger on dark panels, where it is white).
  int ink(int alpha) {
    final rgb = dark ? 0xFFFFFF : (palette.main & 0xFFFFFF);
    final a = dark ? math.min(255, alpha + 0x12) : alpha;
    return (a << 24) | rgb;
  }

  Offset _at(double u, double v) {
    final dx = u - lw / 2;
    final dy = v - lh / 2;
    final c = math.cos(rot);
    final s = math.sin(rot);
    return Offset(cx + dx * c - dy * s, cy + dx * s + dy * c);
  }

  NgmySlideElement _place(NgmySlideElement e, double u, double v, double w, double h, double r) {
    final c = _at(u, v);
    e
      ..x = (c.dx - w / 2) / kNgmyCraftPageW
      ..y = (c.dy - h / 2) / kNgmyCraftPageH
      ..w = w / kNgmyCraftPageW
      ..h = h / kNgmyCraftPageH
      ..rotation = r + rot;
    out.add(e);
    return e;
  }

  void text(String t, double u, double v, double w, double pt, int color, {bool bold = true, bool italic = false, double r = 0, double? h}) {
    _place(
      NgmySlideElement(
        id: 'craft_wm_${NgmySlidesTemplates.newId()}',
        type: NgmySlideElementType.text,
        text: t,
        fontSize: (pt / _unitPt * 10).roundToDouble() / 10,
        fontWeight: bold ? FontWeight.w800 : FontWeight.w500,
        fontStyle: italic ? FontStyle.italic : FontStyle.normal,
        color: color,
        align: TextAlign.center,
        fileName: kNgmyCraftWatermarkFile,
      ),
      u,
      v,
      w,
      h ?? pt / 72 * 1.5,
      r,
    );
  }

  void shape(NgmySlideShapeKind kind, double u, double v, double w, double h, {int fill = 0, int stroke = 0, double sw = 0, double r = 0}) {
    _place(
      NgmySlideElement(
        id: 'craft_wm_${NgmySlidesTemplates.newId()}',
        type: NgmySlideElementType.shape,
        shape: kind,
        fillColor: fill,
        strokeColor: stroke,
        strokeWidth: sw,
        fileName: kNgmyCraftWatermarkFile,
      ),
      u,
      v,
      w,
      h,
      r,
    );
  }

  void image(String ref, double u, double v, double w, double h) {
    _place(
      NgmySlideElement(id: 'craft_wm_${NgmySlidesTemplates.newId()}', type: NgmySlideElementType.image, imageRef: ref, fileName: kNgmyCraftWatermarkFile),
      u,
      v,
      w,
      h,
      0,
    );
  }
}

void _seal(_Frame f) {
  final d = (f.m * 0.3).clamp(0.7, 1.25);
  final u = f.lw - d / 2 - 0.15;
  final v = f.lh - d / 2 - 0.15;
  f.shape(NgmySlideShapeKind.circle, u, v, d, d, stroke: f.ink(0x80), sw: 1.4);
  f.shape(NgmySlideShapeKind.circle, u, v, d * 0.8, d * 0.8, stroke: f.ink(0x59), sw: 0.8);
  f.text('NGMY', u, v - d * 0.06, d * 0.9, d * 72 * 0.2, f.ink(0x99));
  f.text('ngmy.org', u, v + d * 0.2, d * 0.9, math.max(4.5, d * 72 * 0.075), f.ink(0x8C), bold: false);
}

void _diagonal(_Frame f) {
  final diag = math.sqrt(f.lw * f.lw + f.lh * f.lh);
  final bw = math.min(diag * 0.72, 7.5);
  final pt = math.min(bw * 72 / 3.1, 150.0);
  f.text('NGMY', f.lw / 2, f.lh / 2, bw, pt, f.ink(0x24), r: -math.atan2(f.lh, f.lw));
}

void _pattern(_Frame f) {
  var sx = (f.m * 0.45).clamp(0.9, 1.6);
  while ((f.lw / sx).ceil() * (f.lh / (sx * 0.6)).ceil() > 70) {
    sx *= 1.2;
  }
  final sy = sx * 0.6;
  final pt = sx * 72 * 0.13;
  var row = 0;
  for (var v = sy / 2; v < f.lh - 0.1; v += sy, row++) {
    for (var u = sx / 2 + (row.isOdd ? sx / 2 : 0); u < f.lw - 0.1; u += sx) {
      f.text('NGMY', u, v, sx * 0.85, pt, f.ink(0x29), r: -0.35);
    }
  }
}

void _logo(_Frame f) {
  final w = math.min(f.lw * 0.7, 4.5);
  final ref = _logoDataUri(f.ink(0x33));
  if (ref == null) {
    f.text('NGMY', f.lw / 2, f.lh / 2, w, w * 72 / 3.1, f.ink(0x2E));
    return;
  }
  f.image(ref, f.lw / 2, f.lh / 2, w, w / _logoAspect);
}

void _border(_Frame f) {
  const inset = 0.1;
  const t = 0.022;
  final c = f.ink(0x4D);
  f.shape(NgmySlideShapeKind.rectangle, f.lw / 2, inset, f.lw - 2 * inset, t, fill: c);
  f.shape(NgmySlideShapeKind.rectangle, f.lw / 2, f.lh - inset, f.lw - 2 * inset, t, fill: c);
  f.shape(NgmySlideShapeKind.rectangle, inset, f.lh / 2, t, f.lh - 2 * inset, fill: c);
  f.shape(NgmySlideShapeKind.rectangle, f.lw - inset, f.lh / 2, t, f.lh - 2 * inset, fill: c);
  String band(double len) => List.filled(math.max(1, ((len - 0.5) / 0.8).floor()), 'NGMY').join('    ');
  const pt = 6.5;
  final tc = f.ink(0x73);
  f.text(band(f.lw), f.lw / 2, inset + 0.12, f.lw - 0.5, pt, tc);
  f.text(band(f.lw), f.lw / 2, f.lh - inset - 0.12, f.lw - 0.5, pt, tc, r: math.pi);
  // Words down the sides only on big panels (on a tag they would run into its words).
  if (f.lw >= 3 && f.lh >= 3) {
    f.text(band(f.lh), inset + 0.12, f.lh / 2, f.lh - 0.5, pt, tc, r: -math.pi / 2);
    f.text(band(f.lh), f.lw - inset - 0.12, f.lh / 2, f.lh - 0.5, pt, tc, r: math.pi / 2);
  }
}

void _crest(_Frame f) {
  final s = (f.m * 0.42).clamp(0.9, 2.6);
  final u = f.lw / 2;
  final v = f.lh / 2;
  final side = s / math.sqrt2;
  f.shape(NgmySlideShapeKind.rectangle, u, v, side, side, stroke: f.ink(0x4D), sw: 1.2, r: math.pi / 4);
  f.shape(NgmySlideShapeKind.rectangle, u, v, side * 0.86, side * 0.86, stroke: f.ink(0x33), sw: 0.7, r: math.pi / 4);
  f.text('N', u, v - s * 0.05, s * 0.6, s * 72 * 0.34, f.ink(0x40));
  f.text('NGMY', u, v + s * 0.22, s * 0.6, math.max(4.5, s * 72 * 0.06), f.ink(0x73));
}

void _ribbon(_Frame f) {
  final off = (f.m * 0.2).clamp(0.35, 0.65);
  final len = off * 2 * math.sqrt2 * 0.92;
  final th = (off * 0.45).clamp(0.18, 0.3);
  f.shape(NgmySlideShapeKind.rectangle, f.lw - off, off, len, th, fill: f.ink(0x33), r: math.pi / 4);
  f.text('ngmy.org', f.lw - off, off, len, th * 72 * 0.45, f.ink(0xA6), r: math.pi / 4, h: th);
}

void _footer(_Frame f) {
  final h = (f.m * 0.07).clamp(0.2, 0.3);
  final v = f.lh - h / 2 - 0.08;
  f.shape(NgmySlideShapeKind.rectangle, f.lw / 2, v, f.lw - 0.16, h, fill: f.ink(0x1F));
  f.text('Made with NGMY  -  ngmy.org', f.lw / 2, v, f.lw - 0.3, h * 72 * 0.4, f.ink(0x99), h: h);
}

void _script(_Frame f) {
  final pt = math.min(f.lw * 72 / 2.6, 120.0);
  f.text('ngmy', f.lw / 2, f.lh / 2, f.lw * 0.9, pt, f.ink(0x24), bold: false, italic: true, r: -0.12);
}

List<NgmySlideElement> _styleElements(String style, List<num> anchor, NgmyCraftPalette p) {
  final f = _Frame(anchor, p);
  switch (style) {
    case 'diagonal':
      _diagonal(f);
    case 'pattern':
      _pattern(f);
    case 'logo':
      _logo(f);
    case 'border':
      _border(f);
    case 'crest':
      _crest(f);
    case 'ribbon':
      _ribbon(f);
    case 'footer':
      _footer(f);
    case 'script':
      _script(f);
    default:
      _seal(f);
  }
  return f.out;
}

// ---------------------------------------------------------------------------------------------------------------
// Putting it on a deck.
// ---------------------------------------------------------------------------------------------------------------

/// The watermark style a Fold & Cut deck has now.
String ngmyCraftWatermarkOf(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements) {
      if (!ngmyIsCraftLines(e)) continue;
      try {
        final id = (jsonDecode(e.text) as Map)['wm']?.toString();
        if (id != null && ngmyCraftWatermarkById(id) != null) return id;
      } catch (_) {}
      return kNgmyCraftDefaultWatermark;
    }
  }
  return kNgmyCraftDefaultWatermark;
}

/// Puts the [style] watermark on every page of a Fold & Cut deck (replacing the old one), in its colour set.
void ngmyApplyCraftWatermark(NgmySlideDeck deck, String style, {NgmyCraftPalette? palette}) {
  final id = ngmyCraftWatermarkById(style)?.id ?? kNgmyCraftDefaultWatermark;
  final p = palette ?? ngmyPaperCraftOfDeck(deck)?.palette ?? kNgmyCraftPalettes.first;
  for (final slide in deck.slides) {
    slide.elements.removeWhere(ngmyIsCraftWatermark);
    final li = slide.elements.indexWhere(ngmyIsCraftLines);
    if (li < 0) continue;
    final lines = slide.elements[li];
    Map<String, dynamic> spec;
    try {
      spec = jsonDecode(lines.text) as Map<String, dynamic>;
    } catch (_) {
      continue;
    }
    spec['wm'] = id;
    lines.text = jsonEncode(spec);
    final anchors = [
      for (final a in (spec['a'] as List? ?? const [])) [for (final v in a as List) v as num],
    ];
    if (anchors.isEmpty) anchors.add([0.6, 0.6, 7.3, 9.6, 0, 0]);
    final els = <NgmySlideElement>[for (final a in anchors) ..._styleElements(id, a, p)];
    // Right above the lines and colours, under every word the user writes.
    slide.elements.insertAll(li + 1, els);
  }
}

// ---------------------------------------------------------------------------------------------------------------
// The style picker: a small page preview for each style.
// ---------------------------------------------------------------------------------------------------------------

/// A row of watermark choices, each a small picture of [preview] with that style on it.
class NgmyCraftWatermarkPicker extends StatefulWidget {
  const NgmyCraftWatermarkPicker({super.key, required this.preview, required this.selected, required this.onChanged, this.enabled = true});

  /// The deck to show the styles on (it is copied, never changed).
  final NgmySlideDeck preview;
  final String selected;
  final ValueChanged<String> onChanged;
  final bool enabled;

  @override
  State<NgmyCraftWatermarkPicker> createState() => _NgmyCraftWatermarkPickerState();
}

class _NgmyCraftWatermarkPickerState extends State<NgmyCraftWatermarkPicker> {
  final Map<String, NgmySlide> _pages = {};
  String _key = '';

  @override
  void initState() {
    super.initState();
    if (!ngmyCraftLogoReady) {
      ngmyPreloadCraftLogo().then((_) {
        if (mounted) setState(() => _pages.clear());
      });
    }
  }

  NgmySlide _page(String style) {
    final key = '${widget.preview.id}|${ngmyPaperCraftOfDeck(widget.preview)?.palette.name}';
    if (key != _key) {
      _pages.clear();
      _key = key;
    }
    return _pages[style] ??= () {
      final copy = widget.preview.copy();
      copy.slides = [copy.slides.first];
      ngmyApplyCraftWatermark(copy, style);
      return copy.slides.first;
    }();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 132,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          for (final w in kNgmyCraftWatermarks)
            Padding(
              padding: const EdgeInsets.only(right: 8),
              child: GestureDetector(
                key: ValueKey('craft_wm_${w.id}'),
                onTap: widget.enabled ? () => widget.onChanged(w.id) : null,
                child: Column(
                  children: [
                    Container(
                      width: 80,
                      height: 104,
                      padding: const EdgeInsets.all(2),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: widget.selected == w.id ? const Color(0xFF14B87A) : Colors.white24, width: widget.selected == w.id ? 2.5 : 1),
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6),
                        child: ColoredBox(color: Colors.white, child: NgmyCraftPagePreview(slide: _page(w.id))),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(w.name,
                        style: TextStyle(
                          color: widget.selected == w.id ? const Color(0xFF86EFAC) : Colors.white70,
                          fontSize: 10.5,
                          fontWeight: FontWeight.w700,
                        )),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
