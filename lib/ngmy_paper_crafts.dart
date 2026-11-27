import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;

import 'ngmy_paper_craft_ai.dart' show showNgmyPaperCraftAiSheet;
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart' show ngmyMiniSlidePreview;

/// NGMY Slides "Fold & Cut": printable paper designs (envelopes, a window letter, gift boxes, cards, tags and more).
///
/// Every design is a US Letter page (8.5 x 11 in). All measurements below are in inches from the top-left corner of
/// the paper. The fold lines, cut lines, glue tabs and the coloured panels are kept in ONE locked layer (a shape whose
/// [NgmySlideElement.fileName] is [kNgmyCraftLinesFile] and whose text is the drawing as JSON). Words are normal text
/// boxes on top, so people can type their own name, address and message. A deck made from these designs prints on
/// Letter paper at its true size (no margin, no zoom), so the folds land where they should.

const String kNgmyPaperCraftDeckKind = 'paper_craft';
const String kNgmyCraftLinesFile = 'paper_craft_lines';

const double kNgmyCraftPageW = 8.5;
const double kNgmyCraftPageH = 11.0;

bool ngmyIsPaperCraftDeck(NgmySlideDeck? deck) => deck?.deckKind == kNgmyPaperCraftDeckKind;

bool ngmyIsCraftLines(NgmySlideElement e) => e.type == NgmySlideElementType.shape && e.fileName == kNgmyCraftLinesFile;

// ---------------------------------------------------------------------------------------------------------------
// Line styles. Sizes are printer points (1/72 in). Thin and light on purpose: easy to follow, hardly seen.
// ---------------------------------------------------------------------------------------------------------------

const int _cutInk = 0xFF9AA3AF;
const int _foldInk = 0xFFB3BBC7;
const int _markInk = 0xFFC3CAD4;
const int _glueInk = 0xFFECEFF3;
const int _labelInk = 0xFF9AA3AF;
const double _cutPt = 0.5;
const double _foldPt = 0.45;
const double _markPt = 0.45;
const List<double> _foldDashPt = [3, 2.2];
const List<double> _markDashPt = [0.8, 1.6];
const double _labelPt = 6;

/// One drawing, read from the JSON in the lines layer.
class _CraftSpec {
  _CraftSpec({
    required this.w,
    required this.h,
    required this.fills,
    required this.glue,
    required this.marks,
    required this.folds,
    required this.cuts,
    required this.notes,
  });

  final double w;
  final double h;

  /// `[color, 0, x, y, x, y, ...]` is a filled shape; `[color, 1, cx, cy, r, cx, cy, r, ...]` is a set of dots.
  final List<List<num>> fills;
  final List<List<double>> glue;
  final List<List<double>> marks;
  final List<List<double>> folds;
  final List<List<double>> cuts;
  final List<(double, double, String)> notes;

  static final empty = _CraftSpec(w: kNgmyCraftPageW, h: kNgmyCraftPageH, fills: const [], glue: const [], marks: const [], folds: const [], cuts: const [], notes: const []);
}

final Map<String, _CraftSpec> _specCache = {};

_CraftSpec _readSpec(String text) {
  final hit = _specCache[text];
  if (hit != null) return hit;
  var spec = _CraftSpec.empty;
  try {
    final m = jsonDecode(text) as Map<String, dynamic>;
    List<List<double>> lines(String key) => [
          for (final l in (m[key] as List? ?? const []))
            [for (final v in l as List) (v as num).toDouble()],
        ];
    final cuts = lines('c');
    final folds = lines('d');
    final glue = lines('g');
    final notes = <(double, double, String)>[
      for (final n in (m['n'] as List? ?? const []))
        (((n as List)[0] as num).toDouble(), (n[1] as num).toDouble(), n[2].toString()),
    ];
    // The little key in the corner: a cut line, a fold line and a glue patch with their names.
    final l = m['l'] as List?;
    if (l != null && l.length >= 2) {
      final lx = (l[0] as num).toDouble();
      final ly = (l[1] as num).toDouble();
      cuts.add([lx, ly + 0.045, lx + 0.3, ly + 0.045]);
      notes.add((lx + 0.35, ly, 'cut'));
      folds.add([lx + 0.62, ly + 0.045, lx + 0.92, ly + 0.045]);
      notes.add((lx + 0.97, ly, 'fold'));
      glue.add([lx + 1.3, ly, lx + 1.46, ly, lx + 1.46, ly + 0.09, lx + 1.3, ly + 0.09]);
      notes.add((lx + 1.51, ly, 'glue'));
    }
    spec = _CraftSpec(
      w: (m['W'] as num?)?.toDouble() ?? kNgmyCraftPageW,
      h: (m['H'] as num?)?.toDouble() ?? kNgmyCraftPageH,
      fills: [
        for (final f in (m['f'] as List? ?? const [])) [for (final v in f as List) v as num],
      ],
      glue: glue,
      marks: lines('m'),
      folds: folds,
      cuts: cuts,
      notes: notes,
    );
  } catch (_) {}
  if (_specCache.length > 80) _specCache.clear();
  _specCache[text] = spec;
  return spec;
}

// ---------------------------------------------------------------------------------------------------------------
// Drawing on screen (the editor, thumbnails, Present and the picture / video downloads).
// ---------------------------------------------------------------------------------------------------------------

/// Paints the fold / cut / glue layer into [size] (the whole page).
void ngmyPaintCraftLines(Canvas canvas, Size size, String text) {
  final s = _readSpec(text);
  final kx = size.width / s.w;
  final ky = size.height / s.h;
  final ptPx = kx / 72;
  Offset o(double x, double y) => Offset(x * kx, y * ky);

  Path poly(List<num> v, int from) {
    final p = Path();
    for (var i = from; i + 1 < v.length; i += 2) {
      final q = o(v[i].toDouble(), v[i + 1].toDouble());
      if (i == from) {
        p.moveTo(q.dx, q.dy);
      } else {
        p.lineTo(q.dx, q.dy);
      }
    }
    return p..close();
  }

  for (final f in s.fills) {
    if (f.length < 3) continue;
    final paint = Paint()..color = Color(f[0].toInt());
    if (f[1] == 1) {
      for (var i = 2; i + 2 < f.length; i += 3) {
        canvas.drawCircle(o(f[i].toDouble(), f[i + 1].toDouble()), f[i + 2] * kx, paint);
      }
    } else {
      canvas.drawPath(poly(f, 2), paint);
    }
  }
  final gluePaint = Paint()..color = const Color(_glueInk);
  for (final g in s.glue) {
    canvas.drawPath(poly(g, 0), gluePaint);
  }

  void stroke(List<List<double>> lines, int color, double pt, List<double>? dash) {
    final paint = Paint()
      ..color = Color(color)
      ..style = PaintingStyle.stroke
      ..strokeWidth = math.max(0.7, pt * ptPx);
    for (final l in lines) {
      final pts = [for (var i = 0; i + 1 < l.length; i += 2) o(l[i], l[i + 1])];
      if (pts.length < 2) continue;
      if (dash == null) {
        final p = Path()..moveTo(pts.first.dx, pts.first.dy);
        for (final q in pts.skip(1)) {
          p.lineTo(q.dx, q.dy);
        }
        canvas.drawPath(p, paint);
      } else {
        _dashPolyline(canvas, pts, paint, math.max(2.6, dash[0] * ptPx), math.max(1.8, dash[1] * ptPx));
      }
    }
  }

  stroke(s.marks, _markInk, _markPt, _markDashPt);
  stroke(s.folds, _foldInk, _foldPt, _foldDashPt);
  stroke(s.cuts, _cutInk, _cutPt, null);

  final fs = _labelPt * ptPx;
  if (fs >= 2.5) {
    for (final n in s.notes) {
      final tp = TextPainter(
        text: TextSpan(text: n.$3, style: TextStyle(fontSize: fs, color: const Color(_labelInk), height: 1.0)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, o(n.$1, n.$2));
    }
  }
}

void _dashPolyline(Canvas canvas, List<Offset> pts, Paint paint, double on, double off) {
  var drawing = true;
  var left = on;
  for (var i = 0; i + 1 < pts.length; i++) {
    var a = pts[i];
    final b = pts[i + 1];
    var seg = (b - a).distance;
    if (seg == 0) continue;
    final dir = (b - a) / seg;
    while (seg > 0) {
      final step = math.min(left, seg);
      final c = a + dir * step;
      if (drawing) canvas.drawLine(a, c, paint);
      a = c;
      seg -= step;
      left -= step;
      if (left <= 0.0001) {
        drawing = !drawing;
        left = drawing ? on : off;
      }
    }
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Drawing in the downloaded PDF (true vector lines, true size).
// ---------------------------------------------------------------------------------------------------------------

pw.Widget ngmyCraftLinesPdf(String text, double w, double h) {
  final s = _readSpec(text);
  final kx = w / s.w;
  final ky = h / s.h;
  final ptk = kx / 72;
  return pw.Stack(
    children: [
      pw.Positioned.fill(
        child: pw.CustomPaint(
          size: PdfPoint(w, h),
          painter: (g, size) {
            double px(double x) => x * kx;
            double py(double y) => size.y - y * ky;
            void path(List<num> v, int from) {
              for (var i = from; i + 1 < v.length; i += 2) {
                if (i == from) {
                  g.moveTo(px(v[i].toDouble()), py(v[i + 1].toDouble()));
                } else {
                  g.lineTo(px(v[i].toDouble()), py(v[i + 1].toDouble()));
                }
              }
            }

            for (final f in s.fills) {
              if (f.length < 3) continue;
              g.setFillColor(PdfColor.fromInt(f[0].toInt()));
              if (f[1] == 1) {
                for (var i = 2; i + 2 < f.length; i += 3) {
                  g.drawEllipse(px(f[i].toDouble()), py(f[i + 1].toDouble()), f[i + 2] * kx, f[i + 2] * ky);
                  g.fillPath();
                }
              } else {
                path(f, 2);
                g.closePath();
                g.fillPath();
              }
            }
            g.setFillColor(const PdfColor.fromInt(_glueInk));
            for (final v in s.glue) {
              path(v, 0);
              g.closePath();
              g.fillPath();
            }

            void stroke(List<List<double>> lines, int color, double pt, List<double>? dash) {
              g.setStrokeColor(PdfColor.fromInt(color));
              g.setLineWidth(pt * ptk);
              g.setLineDashPattern(dash == null ? const <num>[] : [dash[0] * ptk, dash[1] * ptk]);
              for (final l in lines) {
                if (l.length < 4) continue;
                path(l, 0);
                g.strokePath();
              }
              g.setLineDashPattern();
            }

            stroke(s.marks, _markInk, _markPt, _markDashPt);
            stroke(s.folds, _foldInk, _foldPt, _foldDashPt);
            stroke(s.cuts, _cutInk, _cutPt, null);
          },
        ),
      ),
      for (final n in s.notes)
        pw.Positioned(
          left: n.$1 * kx,
          top: n.$2 * ky - 1,
          child: pw.Text(n.$3, style: pw.TextStyle(fontSize: _labelPt * ptk, color: const PdfColor.fromInt(_labelInk))),
        ),
    ],
  );
}

// ---------------------------------------------------------------------------------------------------------------
// The browser print view: every page exactly 8.5 x 11 in, no margin, no zoom.
// ---------------------------------------------------------------------------------------------------------------

String _esc(String s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

String _css(int argb) {
  final a = ((argb >> 24) & 0xFF) / 255.0;
  return 'rgba(${(argb >> 16) & 0xFF},${(argb >> 8) & 0xFF},${argb & 0xFF},${a.toStringAsFixed(3)})';
}

String _n(double v) => v.toStringAsFixed(4);

String ngmyCraftLinesSvg(String text) {
  final s = _readSpec(text);
  final b = StringBuffer('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${_n(s.w)} ${_n(s.h)}" preserveAspectRatio="none">');
  String pts(List<num> v, int from) {
    final out = StringBuffer();
    for (var i = from; i + 1 < v.length; i += 2) {
      out.write('${_n(v[i].toDouble())},${_n(v[i + 1].toDouble())} ');
    }
    return out.toString();
  }

  for (final f in s.fills) {
    if (f.length < 3) continue;
    final c = _css(f[0].toInt());
    if (f[1] == 1) {
      for (var i = 2; i + 2 < f.length; i += 3) {
        b.write('<circle cx="${_n(f[i].toDouble())}" cy="${_n(f[i + 1].toDouble())}" r="${_n(f[i + 2].toDouble())}" fill="$c"/>');
      }
    } else {
      b.write('<polygon points="${pts(f, 2)}" fill="$c"/>');
    }
  }
  for (final g in s.glue) {
    b.write('<polygon points="${pts(g, 0)}" fill="${_css(_glueInk)}"/>');
  }
  void stroke(List<List<double>> lines, int color, double pt, List<double>? dash) {
    final dashAttr = dash == null ? '' : ' stroke-dasharray="${_n(dash[0] / 72)} ${_n(dash[1] / 72)}"';
    for (final l in lines) {
      b.write('<polyline points="${pts(l, 0)}" fill="none" stroke="${_css(color)}" stroke-width="${_n(pt / 72)}"$dashAttr/>');
    }
  }

  stroke(s.marks, _markInk, _markPt, _markDashPt);
  stroke(s.folds, _foldInk, _foldPt, _foldDashPt);
  stroke(s.cuts, _cutInk, _cutPt, null);
  for (final n in s.notes) {
    b.write('<text x="${_n(n.$1)}" y="${_n(n.$2)}" font-size="${_n(_labelPt / 72)}" fill="${_css(_labelInk)}" dominant-baseline="hanging" font-family="Helvetica, Arial, sans-serif">${_esc(n.$3)}</text>');
  }
  b.write('</svg>');
  return b.toString();
}

/// The print view for a Fold & Cut deck (opened from Print in Slides).
String ngmyPaperCraftPrintHtml(NgmySlideDeck deck) {
  // One text unit is 1/960 of the page width: 8.5 in / 960 = 0.6375 pt.
  const unitPt = 612 / 960;
  final b = StringBuffer('''
<!DOCTYPE html><html><head><meta charset="utf-8"><title>${_esc(deck.name)}</title>
<style>
  @page { size: 8.5in 11in; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .pg { position: relative; width: 8.5in; height: 11in; overflow: hidden; background: #fff; break-after: page; page-break-after: always; }
  .pg:last-child { break-after: auto; page-break-after: auto; }
  .el { position: absolute; display: flex; flex-direction: column; justify-content: center; }
  .el svg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; }
  .el img { width: 100%; height: 100%; object-fit: contain; }
  .tip { font: 13px system-ui, sans-serif; color: #334155; text-align: center; padding: 10px; }
  @media screen { body { background: #e5e7eb; } .pg { margin: 0 auto 18px; box-shadow: 0 2px 14px rgba(0,0,0,.18); } }
  @media print { .tip { display: none; } }
</style></head><body>
<div class="tip">Print on Letter paper (8.5 x 11 in). In the print window choose <b>Actual size</b> or <b>Scale 100%</b> and <b>Margins: None</b>, so every fold lands in the right place.</div>
''');
  for (final slide in deck.slides) {
    b.writeln('<div class="pg" style="background:${_css(slide.background)}">');
    for (final e in slide.elements) {
      final box = 'left:${(e.x * 100).toStringAsFixed(3)}%;top:${(e.y * 100).toStringAsFixed(3)}%;width:${(e.w * 100).toStringAsFixed(3)}%;height:${(e.h * 100).toStringAsFixed(3)}%';
      final rot = e.rotation == 0 ? '' : ';transform:rotate(${e.rotation.toStringAsFixed(5)}rad)';
      switch (e.type) {
        case NgmySlideElementType.shape:
          if (ngmyIsCraftLines(e)) {
            b.write('<div class="el" style="$box">${ngmyCraftLinesSvg(e.text)}</div>');
          } else {
            final radius = e.shape == NgmySlideShapeKind.circle ? 'border-radius:50%;' : '';
            final sw = (e.strokeWidth * unitPt).toStringAsFixed(2);
            b.write('<div class="el" style="$box$rot"><div style="width:100%;height:100%;${radius}background:${_css(e.fillColor)};border:${sw}pt solid ${_css(e.strokeColor)}"></div></div>');
          }
        case NgmySlideElementType.text:
          final fs = (e.fontSize * unitPt).toStringAsFixed(2);
          final pad = '${(10 * unitPt).toStringAsFixed(2)}pt ${(6 * unitPt).toStringAsFixed(2)}pt ${(12 * unitPt).toStringAsFixed(2)}pt';
          final align = switch (e.align) { TextAlign.center => 'center', TextAlign.right || TextAlign.end => 'right', _ => 'left' };
          final weight = e.fontWeight.value;
          final italic = e.fontStyle == FontStyle.italic ? 'font-style:italic;' : '';
          b.write('<div class="el" style="$box$rot;padding:$pad"><div style="font-size:${fs}pt;line-height:1.35;color:${_css(e.color)};font-weight:$weight;$italic'
              'text-align:$align;white-space:pre-wrap;word-break:break-word">${_esc(e.text)}</div></div>');
        case NgmySlideElementType.image:
        case NgmySlideElementType.signature:
          final ref = e.imageRef ?? '';
          if (ref.startsWith('data:image')) b.write('<div class="el" style="$box$rot"><img src="$ref" alt=""/></div>');
        case NgmySlideElementType.pdf:
        case NgmySlideElementType.bio:
          break;
      }
      b.writeln();
    }
    b.writeln('</div>');
  }
  b.writeln('</body></html>');
  return b.toString();
}

// ---------------------------------------------------------------------------------------------------------------
// Colours.
// ---------------------------------------------------------------------------------------------------------------

class NgmyCraftPalette {
  const NgmyCraftPalette(this.name, {required this.main, required this.soft, required this.pale, required this.accent, required this.ink});
  final String name;
  final int main;
  final int soft;
  final int pale;
  final int accent;
  final int ink;
}

const List<NgmyCraftPalette> kNgmyCraftPalettes = [
  NgmyCraftPalette('Blush', main: 0xFFD45D79, soft: 0xFFF5C6D1, pale: 0xFFFDF0F3, accent: 0xFFC9A227, ink: 0xFF4A2731),
  NgmyCraftPalette('Sage', main: 0xFF5F8A68, soft: 0xFFC9DCCB, pale: 0xFFF1F6F1, accent: 0xFFD4A373, ink: 0xFF2F3E33),
  NgmyCraftPalette('Ocean', main: 0xFF3B6EA8, soft: 0xFFC4D7EE, pale: 0xFFEEF4FB, accent: 0xFFF2B134, ink: 0xFF1E2F45),
  NgmyCraftPalette('Kraft', main: 0xFF9C6B3C, soft: 0xFFE3CDB0, pale: 0xFFF8F1E7, accent: 0xFF2F5D50, ink: 0xFF3D2B1C),
  NgmyCraftPalette('Midnight', main: 0xFF2B2F4A, soft: 0xFFC9CBDD, pale: 0xFFF3F3F8, accent: 0xFFC9A227, ink: 0xFF1B1D2E),
  NgmyCraftPalette('Sunny', main: 0xFFE07A1F, soft: 0xFFFBD9A6, pale: 0xFFFFF6E8, accent: 0xFF2A9D8F, ink: 0xFF4A2A0C),
];

// ---------------------------------------------------------------------------------------------------------------
// The page builder: everything in inches.
// ---------------------------------------------------------------------------------------------------------------

const double _pw = kNgmyCraftPageW;
const double _ph = kNgmyCraftPageH;
const double _pi = math.pi;

double _r3(double v) => (v * 1000).roundToDouble() / 1000;

List<Offset> _rectPts(double x, double y, double w, double h) => [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x, y + h)];

/// Points on an ellipse arc (angles in radians, screen direction: y grows downwards).
List<Offset> _arc(double cx, double cy, double rx, double ry, double a0, double a1, [int n = 24]) => [
      for (var i = 0; i <= n; i++) Offset(cx + rx * math.cos(a0 + (a1 - a0) * i / n), cy + ry * math.sin(a0 + (a1 - a0) * i / n)),
    ];

/// A quadratic curve from [a] to [b] pulled toward [c].
List<Offset> _quad(Offset a, Offset c, Offset b, [int n = 14]) => [
      for (var i = 0; i <= n; i++)
        () {
          final t = i / n;
          final u = 1 - t;
          return Offset(u * u * a.dx + 2 * u * t * c.dx + t * t * b.dx, u * u * a.dy + 2 * u * t * c.dy + t * t * b.dy);
        }(),
    ];

/// A rectangle with rounded corners as points.
List<Offset> _roundRect(double x, double y, double w, double h, double r, {bool top = true, bool bottom = true}) {
  final rt = top ? r : 0.0;
  final rb = bottom ? r : 0.0;
  return [
    ..._arc(x + rt, y + rt, rt, rt, _pi, 1.5 * _pi, 8),
    ..._arc(x + w - rt, y + rt, rt, rt, 1.5 * _pi, 2 * _pi, 8),
    ..._arc(x + w - rb, y + h - rb, rb, rb, 0, 0.5 * _pi, 8),
    ..._arc(x + rb, y + h - rb, rb, rb, 0.5 * _pi, _pi, 8),
  ];
}

bool _inside(List<Offset> poly, Offset p) {
  var c = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    final a = poly[i];
    final b = poly[j];
    if ((a.dy > p.dy) != (b.dy > p.dy) && p.dx < (b.dx - a.dx) * (p.dy - a.dy) / (b.dy - a.dy) + a.dx) c = !c;
  }
  return c;
}

double _edgeDist(List<Offset> poly, Offset p) {
  var best = double.infinity;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    final a = poly[j];
    final b = poly[i];
    final ab = b - a;
    final len2 = ab.dx * ab.dx + ab.dy * ab.dy;
    var t = len2 == 0 ? 0.0 : ((p.dx - a.dx) * ab.dx + (p.dy - a.dy) * ab.dy) / len2;
    t = t.clamp(0.0, 1.0);
    best = math.min(best, (p - (a + ab * t)).distance);
  }
  return best;
}

class _Page {
  _Page(this.p);
  final NgmyCraftPalette p;
  final List<List<num>> _fills = [];
  final List<List<double>> _glue = [];
  final List<List<double>> _folds = [];
  final List<List<double>> _cuts = [];
  final List<List<double>> _marks = [];
  final List<List<Object>> _notes = [];
  final List<NgmySlideElement> _texts = [];
  List<double>? _legend = [6.55, 10.62];
  int _seed = 7;

  List<double> _flat(List<Offset> pts) => [for (final q in pts) ...[_r3(q.dx), _r3(q.dy)]];

  // Lines.
  void cut(List<Offset> pts, {bool close = false}) => _cuts.add(_flat(close ? [...pts, pts.first] : pts));
  void cutRect(double x, double y, double w, double h) => cut(_rectPts(x, y, w, h), close: true);
  void cutCircle(double cx, double cy, double r) => cut(_arc(cx, cy, r, r, 0, 2 * _pi, 32));
  void fold(List<Offset> pts) => _folds.add(_flat(pts));
  void foldLine(double x1, double y1, double x2, double y2) => _folds.add([_r3(x1), _r3(y1), _r3(x2), _r3(y2)]);
  void mark(List<Offset> pts, {bool close = false}) => _marks.add(_flat(close ? [...pts, pts.first] : pts));
  void markRect(double x, double y, double w, double h) => mark(_rectPts(x, y, w, h), close: true);
  void glue(List<Offset> pts) => _glue.add(_flat(pts));
  void glueRect(double x, double y, double w, double h) => glue(_rectPts(x, y, w, h));
  void note(double x, double y, String text) => _notes.add([_r3(x), _r3(y), text]);
  void legendAt(double x, double y) => _legend = [x, y];

  /// Corner brackets around an area (like a camera frame): shows where something goes without a full box.
  void corners(double x, double y, double w, double h, double arm) {
    mark([Offset(x, y + arm), Offset(x, y), Offset(x + arm, y)]);
    mark([Offset(x + w - arm, y), Offset(x + w, y), Offset(x + w, y + arm)]);
    mark([Offset(x + w, y + h - arm), Offset(x + w, y + h), Offset(x + w - arm, y + h)]);
    mark([Offset(x + arm, y + h), Offset(x, y + h), Offset(x, y + h - arm)]);
  }

  // Colour.
  void poly(int color, List<Offset> pts) => _fills.add([color, 0, ..._flat(pts)]);
  void rect(int color, double x, double y, double w, double h) => poly(color, _rectPts(x, y, w, h));
  void circle(int color, double cx, double cy, double r) => _fills.add([color, 1, _r3(cx), _r3(cy), _r3(r)]);

  /// Polka dots that stay inside [area].
  void dotsIn(int color, List<Offset> area, {double step = 0.34, double r = 0.045}) {
    var minX = double.infinity, minY = double.infinity, maxX = -double.infinity, maxY = -double.infinity;
    for (final q in area) {
      minX = math.min(minX, q.dx);
      minY = math.min(minY, q.dy);
      maxX = math.max(maxX, q.dx);
      maxY = math.max(maxY, q.dy);
    }
    final out = <num>[color, 1];
    var row = 0;
    for (var y = minY + step / 2; y < maxY; y += step * 0.866, row++) {
      for (var x = minX + step / 2 + (row.isOdd ? step / 2 : 0); x < maxX; x += step) {
        final q = Offset(x, y);
        if (_inside(area, q) && _edgeDist(area, q) >= r + 0.05) out.addAll([_r3(x), _r3(y), r]);
      }
    }
    if (out.length > 2) _fills.add(out);
  }

  void dotsRect(int color, double x, double y, double w, double h, {double step = 0.34, double r = 0.045}) =>
      dotsIn(color, _rectPts(x, y, w, h), step: step, r: r);

  void stripesH(int color, double x, double y, double w, double h, {double step = 0.3, double thick = 0.06}) {
    for (var yy = y + (step - thick) / 2; yy + thick <= y + h; yy += step) {
      rect(color, x, yy, w, thick);
    }
  }

  void stripesV(int color, double x, double y, double w, double h, {double step = 0.3, double thick = 0.06}) {
    for (var xx = x + (step - thick) / 2; xx + thick <= x + w; xx += step) {
      rect(color, xx, y, thick, h);
    }
  }

  double _rand() {
    _seed = (_seed * 1103515245 + 12345) & 0x7fffffff;
    return _seed / 0x7fffffff;
  }

  /// Little round confetti in an area, kept out of [keepOut] (where the words go).
  void confetti(List<int> colors, double x, double y, double w, double h, {int count = 40, Rect? keepOut, double rMin = 0.03, double rMax = 0.075}) {
    final byColor = <int, List<num>>{};
    var placed = 0;
    for (var tries = 0; placed < count && tries < count * 12; tries++) {
      final r = rMin + (rMax - rMin) * _rand();
      final cx = x + r + (w - 2 * r) * _rand();
      final cy = y + r + (h - 2 * r) * _rand();
      if (keepOut != null && keepOut.inflate(r + 0.05).contains(Offset(cx, cy))) continue;
      final c = colors[placed % colors.length];
      (byColor[c] ??= <num>[c, 1]).addAll([_r3(cx), _r3(cy), _r3(r)]);
      placed++;
    }
    _fills.addAll(byColor.values);
  }

  // Words. Sizes are printer points; one slide text unit is 0.6375 pt (the page is 960 units wide).
  void text(
    String t,
    double x,
    double y,
    double w,
    double h, {
    double pt = 11,
    int? color,
    bool bold = false,
    bool italic = false,
    TextAlign align = TextAlign.center,
    double rot = 0,
  }) {
    _texts.add(NgmySlideElement(
      id: 'craft_t_${NgmySlidesTemplates.newId()}',
      type: NgmySlideElementType.text,
      x: x / _pw,
      y: y / _ph,
      w: w / _pw,
      h: h / _ph,
      text: t,
      fontSize: (pt / (612 / 960) * 10).roundToDouble() / 10,
      fontWeight: bold ? FontWeight.w700 : FontWeight.w500,
      fontStyle: italic ? FontStyle.italic : FontStyle.normal,
      color: color ?? p.ink,
      align: align,
      rotation: rot,
    ));
  }

  /// Text placed by its centre (handy for text turned on its side).
  void textAt(String t, double cx, double cy, double w, double h,
          {double pt = 11, int? color, bool bold = false, bool italic = false, TextAlign align = TextAlign.center, double rot = 0}) =>
      text(t, cx - w / 2, cy - h / 2, w, h, pt: pt, color: color, bold: bold, italic: italic, align: align, rot: rot);

  NgmySlide build(String title, {String? noteText}) {
    if (noteText != null) note(0.4, 10.62, noteText);
    final spec = <String, Object>{
      'W': _pw,
      'H': _ph,
      'f': _fills,
      'g': _glue,
      'd': _folds,
      'c': _cuts,
      'm': _marks,
      'n': _notes,
      'l': ?_legend,
    };
    final lines = NgmySlideElement(
      id: 'craft_lines_${NgmySlidesTemplates.newId()}',
      type: NgmySlideElementType.shape,
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      shape: NgmySlideShapeKind.rectangle,
      fillColor: 0x00000000,
      strokeColor: 0x00000000,
      strokeWidth: 0,
      fileName: kNgmyCraftLinesFile,
      text: jsonEncode(spec),
    );
    return NgmySlide(
      id: NgmySlidesTemplates.newId(),
      title: title,
      layout: NgmySlideLayout.blank,
      background: 0xFFFFFFFF,
      transition: NgmySlideTransition.fade,
      elements: [lines, ..._texts],
    );
  }
}

String _printNote(String name) => '$name  -  Letter 8.5 x 11 in  -  print at Actual size (100%)';

// ---------------------------------------------------------------------------------------------------------------
// Shared pieces.
// ---------------------------------------------------------------------------------------------------------------

enum _EnvStyle { curved, pointed, coin }

/// An envelope net around a body (the front) at [x0],[y0] of [w] x [h]. The flaps fold BACK (away from you), so the
/// printed body is the front with the address, and the printed flaps show on the back.
void _envelope(_Page k, double x0, double y0, double w, double h,
    {required double top, required double bottom, required double side, _EnvStyle style = _EnvStyle.curved, int? topFill, int? bottomFill, int? sideFill}) {
  final p = k.p;
  final x1 = x0 + w;
  final y1 = y0 + h;
  final cx = x0 + w / 2;
  final ym = y0 + h / 2;
  final sideInset = math.min(0.45, h * 0.14);
  late List<Offset> topFlap, rightFlap, bottomFlap, leftFlap, rightGlue, leftGlue;
  switch (style) {
    case _EnvStyle.pointed:
      topFlap = [Offset(x0, y0), Offset(cx, y0 - top), Offset(x1, y0)];
      rightFlap = [Offset(x1, y0), Offset(x1 + side, ym), Offset(x1, y1)];
      bottomFlap = [Offset(x1, y1), Offset(cx, y1 + bottom), Offset(x0, y1)];
      leftFlap = [Offset(x0, y1), Offset(x0 - side, ym), Offset(x0, y0)];
      rightGlue = [Offset(x1, ym), Offset(x1 + side, ym), Offset(x1, y1)];
      leftGlue = [Offset(x0, y1), Offset(x0 - side, ym), Offset(x0, ym)];
    case _EnvStyle.curved:
    case _EnvStyle.coin:
      topFlap = [
        ..._quad(Offset(x0, y0), Offset(cx - w * 0.2, y0 - top), Offset(cx, y0 - top)),
        ..._quad(Offset(cx, y0 - top), Offset(cx + w * 0.2, y0 - top), Offset(x1, y0)).skip(1),
      ];
      rightFlap = [Offset(x1, y0), Offset(x1 + side, y0 + sideInset), Offset(x1 + side, y1 - sideInset), Offset(x1, y1)];
      leftFlap = [Offset(x0, y1), Offset(x0 - side, y1 - sideInset), Offset(x0 - side, y0 + sideInset), Offset(x0, y0)];
      rightGlue = [Offset(x1, ym), Offset(x1 + side, ym), Offset(x1 + side, y1 - sideInset), Offset(x1, y1)];
      leftGlue = [Offset(x0, y1), Offset(x0 - side, y1 - sideInset), Offset(x0 - side, ym), Offset(x0, ym)];
      bottomFlap = style == _EnvStyle.coin
          ? [Offset(x1, y1), Offset(x1 - 0.25, y1 + bottom), Offset(x0 + 0.25, y1 + bottom), Offset(x0, y1)]
          : [
              ..._quad(Offset(x1, y1), Offset(cx + w * 0.24, y1 + bottom), Offset(cx, y1 + bottom)),
              ..._quad(Offset(cx, y1 + bottom), Offset(cx - w * 0.24, y1 + bottom), Offset(x0, y1)).skip(1),
            ];
  }
  if (sideFill != null) {
    k.poly(sideFill, rightFlap);
    k.poly(sideFill, leftFlap);
  }
  k.poly(bottomFill ?? p.soft, bottomFlap);
  k.poly(topFill ?? p.main, topFlap);
  k.dotsIn(p.pale, topFlap, step: 0.3, r: 0.04);
  k.glue(rightGlue);
  k.glue(leftGlue);
  k.cut([...topFlap, ...rightFlap.skip(1), ...bottomFlap.skip(1), ...leftFlap.skip(1)]);
  k.foldLine(x0, y0, x1, y0);
  k.foldLine(x1, y0, x1, y1);
  k.foldLine(x1, y1, x0, y1);
  k.foldLine(x0, y1, x0, y0);
}

/// A stamp box in the top-right of an envelope front.
void _stamp(_Page k, double x1, double y0) {
  k.markRect(x1 - 0.95, y0 + 0.22, 0.75, 0.88);
  k.note(x1 - 0.8, y0 + 0.6, 'STAMP');
}

/// An open tray (box base or lid): a square floor with four walls and four glue tabs in the corners.
void _tray(_Page k, double ox, double oy, double s, double h, {required int floor, required int walls, int? wallDots, double? tab}) {
  final td = tab ?? math.min(0.6, h - 0.08);
  k.rect(floor, ox + h, oy + h, s, s);
  for (final r in [
    Rect.fromLTWH(ox + h, oy, s, h),
    Rect.fromLTWH(ox + h, oy + h + s, s, h),
    Rect.fromLTWH(ox, oy + h, h, s),
    Rect.fromLTWH(ox + h + s, oy + h, h, s),
  ]) {
    k.rect(walls, r.left, r.top, r.width, r.height);
    if (wallDots != null) k.dotsRect(wallDots, r.left, r.top, r.width, r.height, step: 0.3, r: 0.04);
  }
  final tabs = [
    [Offset(ox + h + s, oy + h), Offset(ox + h + s + 0.06, oy + h - td), Offset(ox + 2 * h + s - 0.15, oy + h - td), Offset(ox + 2 * h + s, oy + h)],
    [Offset(ox + 2 * h + s, oy + h + s), Offset(ox + 2 * h + s - 0.15, oy + h + s + td), Offset(ox + h + s + 0.06, oy + h + s + td), Offset(ox + h + s, oy + h + s)],
    [Offset(ox + h, oy + h + s), Offset(ox + h - 0.06, oy + h + s + td), Offset(ox + 0.15, oy + h + s + td), Offset(ox, oy + h + s)],
    [Offset(ox, oy + h), Offset(ox + 0.15, oy + h - td), Offset(ox + h - 0.06, oy + h - td), Offset(ox + h, oy + h)],
  ];
  for (final t in tabs) {
    k.glue(t);
  }
  k.cut([
    Offset(ox + h, oy),
    Offset(ox + h + s, oy),
    ...tabs[0],
    Offset(ox + 2 * h + s, oy + h + s),
    ...tabs[1].skip(1),
    Offset(ox + h + s, oy + 2 * h + s),
    Offset(ox + h, oy + 2 * h + s),
    ...tabs[2],
    ...tabs[3],
    Offset(ox + h, oy),
  ]);
  k.foldLine(ox, oy + h, ox + 2 * h + s, oy + h);
  k.foldLine(ox, oy + h + s, ox + 2 * h + s, oy + h + s);
  k.foldLine(ox + h, oy + h, ox + h, oy + h + s);
  k.foldLine(ox + h + s, oy + h, ox + h + s, oy + h + s);
}

/// A glue tab on the outside of the edge [a] to [c] of a shape whose middle is [mid]. Returns the tab's outline
/// points from [a] to [c] (to drop into a cut path) and draws its fold and glue.
List<Offset> _edgeTab(_Page k, Offset a, Offset c, Offset mid, {double depth = 0.3, double insetA = 0.12, double insetC = 0.12, double taperA = 0.18, double taperC = 0.18}) {
  final d = c - a;
  final len = d.distance;
  final u = d / len;
  var n = Offset(-u.dy, u.dx);
  final edgeMid = (a + c) / 2;
  if ((edgeMid + n - mid).distance < (edgeMid - mid).distance) n = -n;
  final p1 = a + u * insetA;
  final p2 = c - u * insetC;
  final o1 = p1 + u * taperA + n * depth;
  final o2 = p2 - u * taperC + n * depth;
  k.glue([p1, o1, o2, p2]);
  k.foldLine(p1.dx, p1.dy, p2.dx, p2.dy);
  return [a, p1, o1, o2, p2, c];
}

/// A pocket with a thumb notch (for CD and photo sleeves): front on top, back below, glue tabs on the back's sides.
void _sleeve(_Page k, double x0, double yTop, double w, double h, {required double notch, required double tab}) {
  final x1 = x0 + w;
  final yFold = yTop + h;
  final yEnd = yFold + h;
  final cx = x0 + w / 2;
  final right = [Offset(x1, yFold), Offset(x1 + tab, yFold + 0.3), Offset(x1 + tab, yEnd - 0.3), Offset(x1, yEnd)];
  final left = [Offset(x0, yEnd), Offset(x0 - tab, yEnd - 0.3), Offset(x0 - tab, yFold + 0.3), Offset(x0, yFold)];
  k.glue(right);
  k.glue(left);
  k.cut([
    Offset(x0, yTop),
    ..._arc(cx, yTop, notch, notch, _pi, 0, 16),
    Offset(x1, yTop),
    ...right,
    ...left,
    Offset(x0, yTop),
  ]);
  k.foldLine(x0, yFold, x1, yFold);
  k.foldLine(x1, yFold, x1, yEnd);
  k.foldLine(x0, yFold, x0, yEnd);
}

const String _lettersGroup = 'Letters & Envelopes';
const String _boxesGroup = 'Boxes & Bags';
const String _cardsGroup = 'Cards';
const String _moreGroup = 'Tags & More';

/// One Fold & Cut design.
class NgmyPaperCraft {
  const NgmyPaperCraft({required this.number, required this.id, required this.name, required this.group, required this.blurb, required this.icon, required this.build});

  /// The small number shown on the design in the picker ("make number 5"). Never changes; new designs get the next one.
  final int number;
  final String id;
  final String name;
  final String group;
  final String blurb;
  final IconData icon;
  final List<NgmySlide> Function(NgmyCraftPalette p) build;
}

const List<String> kNgmyCraftGroups = [_lettersGroup, _boxesGroup, _cardsGroup, _moreGroup];

// ---------------------------------------------------------------------------------------------------------------
// Letters and envelopes.
// ---------------------------------------------------------------------------------------------------------------

/// A letter that folds in three (11 in / 3 = 3 2/3 in a panel) for a standard #10 window envelope (9.5 x 4.125 in,
/// window 4.5 x 1.125 in, 7/8 in from the left and 1/2 in from the bottom). With the folded letter sitting in the
/// envelope, the window shows the area 7/8 to 4 3/8 in from the left and 2 1/8 to 3 1/8 in from the top of the page,
/// wherever the letter slides. The name and address box sits exactly there.
NgmySlide _windowLetter(NgmyCraftPalette p) {
  final k = _Page(p);
  const f1 = 11 / 3;
  const f2 = 22 / 3;
  for (final y in [f1, f2]) {
    k.foldLine(0.25, y, 0.6, y);
    k.foldLine(7.9, y, 8.25, y);
  }
  k.corners(0.875, 2.125, 3.5, 1.0, 0.16);
  k.note(0.875, 1.96, 'Name and address show through the envelope window here');
  k.rect(p.main, 0.875, 0.55, 6.75, 0.035);
  k.circle(p.pale, 7.27, 1.02, 0.34);
  k.circle(p.main, 7.27, 1.02, 0.3);
  k.text('YN', 6.97, 0.79, 0.6, 0.46, pt: 13, bold: true, color: p.pale);
  k.text('Your Name', 0.875, 0.66, 5.4, 0.42, pt: 15, bold: true, color: p.main, align: TextAlign.left);
  k.text('Street Address  -  City, State ZIP  -  email@example.com', 0.875, 1.06, 5.6, 0.3, pt: 8, align: TextAlign.left);
  k.text('Month Day, Year', 4.9, 1.5, 2.725, 0.3, pt: 9, align: TextAlign.right);
  k.text('Recipient Name\nStreet Address\nCity, State ZIP', 0.925, 2.125, 3.4, 1.0, pt: 10.5, align: TextAlign.left);
  k.text('Dear Name,', 0.875, 3.95, 6.75, 0.36, pt: 11, align: TextAlign.left);
  k.text(
    'Write your letter here. Fold the bottom third up, then the top third down over it, so this name and address '
    'face out. Slide it into a #10 window envelope and the address shows in the window.',
    0.875,
    4.4,
    6.75,
    1.25,
    pt: 11,
    align: TextAlign.left,
  );
  k.text('Sincerely,\n\nYour Name', 0.875, 8.9, 3.5, 0.95, pt: 11, align: TextAlign.left);
  k.rect(p.soft, 0.875, 10.25, 6.75, 0.02);
  return k.build('Window Envelope Letter', noteText: _printNote('Window letter for #10 envelopes'));
}

NgmySlide _cardEnvelope(NgmyCraftPalette p, {required String title, required double w, required double h, required double top, required double bottom, required double side}) {
  final k = _Page(p);
  final x0 = (_pw - w) / 2;
  final total = top + h + bottom;
  final y0 = 0.35 + (10.1 - total) / 2 + top;
  _envelope(k, x0, y0, w, h, top: top, bottom: bottom, side: side);
  _stamp(k, x0 + w, y0);
  k.text('Your Name\nStreet Address\nCity, State ZIP', x0 + 0.2, y0 + 0.18, 2.4, 0.75, pt: 7.5, align: TextAlign.left);
  k.rect(p.accent, x0 + 0.28, y0 + 0.98, 0.6, 0.02);
  k.text('Recipient Name\nStreet Address\nCity, State ZIP', x0 + w * 0.3, y0 + h * 0.4, w * 0.6, 1.15, pt: 11.5, align: TextAlign.left);
  k.text('with love', x0 + w / 2 - 1.3, y0 - top * 0.55, 2.6, 0.5, pt: 14, italic: true, color: p.pale, rot: _pi);
  return k.build(title, noteText: _printNote(title));
}

NgmySlide _diamondEnvelope(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 4.75;
  const h = 3.5;
  const x0 = (_pw - w) / 2;
  const y0 = 3.5;
  _envelope(k, x0, y0, w, h, top: 2.3, bottom: 2.6, side: 1.5, style: _EnvStyle.pointed, sideFill: p.pale, bottomFill: p.soft);
  _stamp(k, x0 + w, y0);
  k.text('Your Name\nStreet Address\nCity, State ZIP', x0 + 0.18, y0 + 0.16, 2.2, 0.72, pt: 7, align: TextAlign.left);
  k.text('Recipient Name\nStreet Address\nCity, State ZIP', x0 + 1.2, y0 + 1.45, 3.1, 1.1, pt: 11, align: TextAlign.left);
  k.text('hello', x0 + w / 2 - 1.0, y0 - 1.25, 2.0, 0.5, pt: 15, italic: true, color: p.pale, rot: _pi);
  return k.build('Diamond Envelope', noteText: _printNote('Diamond envelope 4.75 x 3.5 in'));
}

NgmySlide _seedEnvelopes(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 2.5;
  const h = 3.6;
  const y0 = 3.35;
  for (final x0 in [1.05, 4.95]) {
    _envelope(k, x0, y0, w, h, top: 1.0, bottom: 1.5, side: 0.45, style: _EnvStyle.coin, bottomFill: p.pale);
    final cx = x0 + w / 2;
    k.circle(p.pale, cx, y0 + 0.95, 0.6);
    k.circle(p.soft, cx - 0.32, y0 + 0.7, 0.12);
    k.circle(p.soft, cx + 0.34, y0 + 1.22, 0.09);
    k.text('SEEDS', x0 + 0.2, y0 + 0.62, w - 0.4, 0.62, pt: 17, bold: true, color: p.main);
    k.rect(p.accent, cx - 0.3, y0 + 1.68, 0.6, 0.02);
    k.text('Variety: ____________\nPlanted: ____________\nHarvest: ____________', x0 + 0.12, y0 + 1.9, w - 0.24, 1.15, pt: 8.5, align: TextAlign.left);
  }
  return k.build('Seed Envelopes', noteText: _printNote('Two seed or coin envelopes 2.5 x 3.6 in'));
}

NgmySlide _giftCardEnvelopes(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 3.6;
  const h = 2.4;
  const x0 = (_pw - w) / 2;
  for (final y0 in [1.6, 6.75]) {
    _envelope(k, x0, y0, w, h, top: 1.2, bottom: 1.3, side: 0.55, topFill: y0 < 3 ? p.main : p.accent);
    k.text('A gift for you', x0 + 0.2, y0 + 0.5, w - 0.4, 0.5, pt: 13, bold: true, color: p.main);
    k.rect(p.soft, x0 + w / 2 - 0.4, y0 + 1.05, 0.8, 0.025);
    k.text('To: ______________\nFrom: ____________', x0 + 0.5, y0 + 1.2, w - 1.0, 0.75, pt: 9);
  }
  return k.build('Gift Card Envelopes', noteText: _printNote('Two gift card envelopes 3.6 x 2.4 in'));
}

// ---------------------------------------------------------------------------------------------------------------
// Boxes and bags.
// ---------------------------------------------------------------------------------------------------------------

NgmySlide _giftBox(NgmyCraftPalette p) {
  final k = _Page(p);
  const s = 2.6;
  const h = 1.2;
  const ox = (_pw - (s + 2 * h)) / 2;
  const oy = 0.5;
  _tray(k, ox, oy, s, h, floor: p.pale, walls: p.soft, wallDots: p.pale);
  k.note(ox, oy - 0.16, 'Box');
  const ls = 2.68;
  const lh = 0.65;
  const lox = (_pw - (ls + 2 * lh)) / 2;
  const loy = 5.95;
  _tray(k, lox, loy, ls, lh, floor: p.main, walls: p.soft, tab: 0.45);
  k.stripesV(p.pale, lox + lh, loy, ls, lh, step: 0.28, thick: 0.07);
  k.stripesV(p.pale, lox + lh, loy + lh + ls, ls, lh, step: 0.28, thick: 0.07);
  k.dotsRect(p.soft, lox + lh, loy + lh, ls, ls, step: 0.32, r: 0.035);
  k.circle(p.pale, lox + lh + ls / 2, loy + lh + ls / 2, 0.95);
  k.note(lox, loy - 0.16, 'Lid');
  k.text('For You', lox + lh + 0.3, loy + lh + ls / 2 - 0.5, ls - 0.6, 0.58, pt: 20, bold: true, color: p.main);
  k.text('To: _________\nFrom: _______', lox + lh + 0.45, loy + lh + ls / 2 + 0.05, ls - 0.9, 0.55, pt: 8);
  return k.build('Gift Box with Lid', noteText: _printNote('Gift box 2.6 x 2.6 x 1.2 in with lid'));
}

NgmySlide _pillowBox(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 2.6;
  const len = 6.0;
  const d = 0.6;
  const tab = 0.45;
  const xa = (_pw - (2 * w + tab)) / 2;
  const y0 = 2.4;
  const y1 = y0 + len;
  for (var i = 0; i < 2; i++) {
    final xc = xa + w * i + w / 2;
    final area = [..._arc(xc, y0, w / 2, d, _pi, 2 * _pi, 18), ..._arc(xc, y1, w / 2, d, 0, _pi, 18)];
    k.poly(i == 0 ? p.pale : p.soft, area);
    if (i == 0) {
      k.dotsIn(p.soft, area, step: 0.32, r: 0.04);
    } else {
      k.stripesV(p.pale, xa + w, y0, w, len, step: 0.32, thick: 0.08);
    }
  }
  const mid = (y0 + y1) / 2;
  k.rect(p.main, xa, mid - 0.22, w, 0.44);
  k.text('A little something', xa + 0.1, mid - 0.24, w - 0.2, 0.48, pt: 11, bold: true, color: p.pale);
  k.text('For You', xa + 0.2, mid - 1.25, w - 0.4, 0.6, pt: 18, bold: true, color: p.main);
  k.text('From: ________', xa + w + 0.25, mid - 0.25, w - 0.5, 0.5, pt: 9);
  final tabPts = [Offset(xa + 2 * w, y0), Offset(xa + 2 * w + tab, y0 + 0.25), Offset(xa + 2 * w + tab, y1 - 0.25), Offset(xa + 2 * w, y1)];
  k.glue(tabPts);
  k.cut([
    ..._arc(xa + w / 2, y0, w / 2, d, _pi, 2 * _pi, 20),
    ..._arc(xa + 1.5 * w, y0, w / 2, d, _pi, 2 * _pi, 20).skip(1),
    ...tabPts.skip(1),
    ..._arc(xa + 1.5 * w, y1, w / 2, d, 0, _pi, 20).skip(1),
    ..._arc(xa + w / 2, y1, w / 2, d, 0, _pi, 20).skip(1),
    Offset(xa, y0),
  ]);
  k.foldLine(xa + w, y0, xa + w, y1);
  k.foldLine(xa + 2 * w, y0, xa + 2 * w, y1);
  for (var i = 0; i < 2; i++) {
    final xc = xa + w * i + w / 2;
    k.fold(_arc(xc, y0, w / 2, d, 0, _pi, 20).reversed.toList());
    k.fold(_arc(xc, y1, w / 2, d, _pi, 2 * _pi, 20));
  }
  k.note(xa, 1.2, 'Fold the curved lines gently inward to close each end');
  return k.build('Pillow Box', noteText: _printNote('Pillow box 2.6 x 6 in'));
}

NgmySlide _pyramidBox(NgmyCraftPalette p) {
  final k = _Page(p);
  const b = 2.4;
  const sl = 2.7;
  const cx = 4.25;
  const cy = 5.4;
  const tl = Offset(cx - b / 2, cy - b / 2);
  const tr = Offset(cx + b / 2, cy - b / 2);
  const br = Offset(cx + b / 2, cy + b / 2);
  const bl = Offset(cx - b / 2, cy + b / 2);
  const aTop = Offset(cx, cy - b / 2 - sl);
  const aRight = Offset(cx + b / 2 + sl, cy);
  const aBottom = Offset(cx, cy + b / 2 + sl);
  const aLeft = Offset(cx - b / 2 - sl, cy);
  final faces = [
    [tl, aTop, tr],
    [tr, aRight, br],
    [br, aBottom, bl],
    [bl, aLeft, tl],
  ];
  for (var i = 0; i < 4; i++) {
    k.poly(i.isEven ? p.main : p.soft, faces[i]);
    k.dotsIn(i.isEven ? p.soft : p.pale, faces[i], step: 0.3, r: 0.035);
  }
  k.rect(p.pale, tl.dx, tl.dy, b, b);
  Offset centre(List<Offset> f) => (f[0] + f[1] + f[2]) / 3;
  final path = <Offset>[tl];
  for (final f in faces) {
    path.add(f[1]);
    path.addAll(_edgeTab(k, f[1], f[2], centre(f), depth: 0.32, insetA: 0.5, insetC: 0.08, taperA: 0.1, taperC: 0.22).skip(1));
  }
  k.cut(path);
  k.foldLine(tl.dx, tl.dy, tr.dx, tr.dy);
  k.foldLine(tr.dx, tr.dy, br.dx, br.dy);
  k.foldLine(br.dx, br.dy, bl.dx, bl.dy);
  k.foldLine(bl.dx, bl.dy, tl.dx, tl.dy);
  k.text('For You', cx - 0.8, cy - b / 2 - 1.05, 1.6, 0.5, pt: 14, bold: true, color: p.pale);
  k.text('Open me', cx - 0.75, cy + b / 2 + 0.55, 1.5, 0.45, pt: 11, bold: true, color: p.pale, rot: _pi);
  return k.build('Pyramid Box', noteText: _printNote('Pyramid box, 2.4 in base'));
}

NgmySlide _prismBox(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 2.0;
  const len = 5.5;
  final th = w * math.sqrt(3) / 2;
  const x0 = (_pw - (3 * w + 0.4)) / 2;
  final y0 = 0.45 + 0.3 + th;
  final y1 = y0 + len;
  const xs = [x0, x0 + w, x0 + 2 * w, x0 + 3 * w];
  k.rect(p.soft, xs[0], y0, w, len);
  k.stripesH(p.pale, xs[0], y0, w, len, step: 0.34, thick: 0.08);
  k.rect(p.main, xs[1], y0, w, len);
  k.dotsRect(p.soft, xs[1], y0, w, len, step: 0.34, r: 0.035);
  k.rect(p.soft, xs[2], y0, w, len);
  k.stripesH(p.pale, xs[2], y0, w, len, step: 0.34, thick: 0.08);
  final apexTop = Offset(x0 + 1.5 * w, y0 - th);
  final apexBottom = Offset(x0 + 1.5 * w, y1 + th);
  final topTri = [Offset(xs[1], y0), apexTop, Offset(xs[2], y0)];
  final botTri = [Offset(xs[2], y1), apexBottom, Offset(xs[1], y1)];
  k.poly(p.pale, topTri);
  k.poly(p.pale, botTri);
  final topMid = (topTri[0] + topTri[1] + topTri[2]) / 3;
  final botMid = (botTri[0] + botTri[1] + botTri[2]) / 3;
  final tabSide = [Offset(xs[3], y0), Offset(xs[3] + 0.4, y0 + 0.3), Offset(xs[3] + 0.4, y1 - 0.3), Offset(xs[3], y1)];
  k.glue(tabSide);
  k.cut([
    Offset(xs[0], y0),
    Offset(xs[1], y0),
    ..._edgeTab(k, topTri[0], apexTop, topMid, depth: 0.28, insetA: 0.12, insetC: 0.45).skip(1),
    ..._edgeTab(k, apexTop, topTri[2], topMid, depth: 0.28, insetA: 0.45, insetC: 0.12).skip(1),
    ...tabSide,
    Offset(xs[2], y1),
    ..._edgeTab(k, botTri[0], apexBottom, botMid, depth: 0.28, insetA: 0.12, insetC: 0.45).skip(1),
    ..._edgeTab(k, apexBottom, botTri[2], botMid, depth: 0.28, insetA: 0.45, insetC: 0.12).skip(1),
    Offset(xs[0], y1),
    Offset(xs[0], y0),
  ]);
  for (final x in xs.skip(1)) {
    k.foldLine(x, y0, x, y1);
  }
  k.foldLine(xs[1], y0, xs[2], y0);
  k.foldLine(xs[1], y1, xs[2], y1);
  k.textAt('Sweet Treats', xs[1] + w / 2, (y0 + y1) / 2, 4.6, 1.0, pt: 22, bold: true, color: p.pale, rot: -_pi / 2);
  return k.build('Triangle Prism Box', noteText: _printNote('Triangle box 2 in sides, 5.5 in long'));
}

NgmySlide _favorBox(NgmyCraftPalette p) {
  final k = _Page(p);
  const a = 1.75;
  const x0 = (_pw - (4 * a + 0.35)) / 2;
  const y0 = 4.525;
  const y1 = y0 + a;
  const dust = 0.62;
  const tuck = 0.42;
  final colors = [p.soft, p.main, p.soft, p.main];
  for (var i = 0; i < 4; i++) {
    k.rect(colors[i], x0 + i * a, y0, a, a);
    k.dotsRect(i.isEven ? p.pale : p.soft, x0 + i * a, y0, a, a, step: 0.3, r: 0.035);
  }
  List<Offset> tuckFlap(double xl, double yb, double dir) => [
        Offset(xl, yb),
        Offset(xl + 0.03, yb + dir * 0.26),
        Offset(xl + 0.12, yb + dir * 0.38),
        Offset(xl + 0.3, yb + dir * tuck),
        Offset(xl + a - 0.3, yb + dir * tuck),
        Offset(xl + a - 0.12, yb + dir * 0.38),
        Offset(xl + a - 0.03, yb + dir * 0.26),
        Offset(xl + a, yb),
      ];
  final topLid = [Offset(x0 + a, y0), Offset(x0 + a, y0 - a), ...tuckFlap(x0 + a, y0 - a, -1).skip(1), Offset(x0 + 2 * a, y0)];
  final botLid = [Offset(x0 + 4 * a, y1), Offset(x0 + 4 * a, y1 + a), ...tuckFlap(x0 + 3 * a, y1 + a, 1).reversed.skip(1), Offset(x0 + 3 * a, y1)];
  k.poly(p.pale, topLid);
  k.poly(p.pale, botLid);
  final glueTab = [Offset(x0 + 4 * a, y0), Offset(x0 + 4 * a + 0.35, y0 + 0.18), Offset(x0 + 4 * a + 0.35, y1 - 0.18), Offset(x0 + 4 * a, y1)];
  k.glue(glueTab);
  k.cut([
    Offset(x0, y0),
    Offset(x0 + 0.12, y0 - dust),
    Offset(x0 + a - 0.4, y0 - dust),
    ...topLid,
    Offset(x0 + 2 * a + 0.4, y0 - dust),
    Offset(x0 + 3 * a - 0.12, y0 - dust),
    Offset(x0 + 3 * a, y0),
    ...glueTab,
    ...botLid.skip(1),
    Offset(x0 + 3 * a - 0.12, y1 + dust),
    Offset(x0 + 2 * a + 0.4, y1 + dust),
    Offset(x0 + 2 * a, y1),
    Offset(x0 + a, y1),
    Offset(x0 + a - 0.4, y1 + dust),
    Offset(x0 + 0.12, y1 + dust),
    Offset(x0, y1),
    Offset(x0, y0),
  ]);
  for (var i = 1; i <= 4; i++) {
    k.foldLine(x0 + i * a, y0, x0 + i * a, y1);
  }
  k.foldLine(x0, y0, x0 + 4 * a, y0);
  k.foldLine(x0, y1, x0 + 4 * a, y1);
  k.foldLine(x0 + a, y0 - a, x0 + 2 * a, y0 - a);
  k.foldLine(x0 + 3 * a, y1 + a, x0 + 4 * a, y1 + a);
  k.text('Thank You', x0 + a + 0.1, y0 + 0.55, a - 0.2, 0.6, pt: 13, bold: true, color: p.pale);
  k.text('with love', x0 + 3 * a + 0.1, y0 + 0.6, a - 0.2, 0.5, pt: 10, italic: true, color: p.pale);
  return k.build('Favor Box', noteText: _printNote('Favor cube box 1.75 in'));
}

NgmySlide _paperBag(NgmyCraftPalette p) {
  final k = _Page(p);
  const tab = 0.35;
  const fw = 2.6;
  const g = 1.1;
  const xt = (_pw - (tab + 2 * fw + 2 * g)) / 2;
  const xf = xt + tab;
  const xg1 = xf + fw;
  const xb = xg1 + g;
  const xg2 = xb + fw;
  const xe = xg2 + g;
  const yT = 1.3;
  const yC = yT + 0.5;
  const yB = 7.8;
  const fd = 0.8;
  const gd = 0.55;
  k.rect(p.pale, xf, yT, fw, yB - yT);
  k.dotsRect(p.soft, xf, yC, fw, yB - yC, step: 0.36, r: 0.035);
  k.rect(p.soft, xb, yT, fw, yB - yT);
  k.stripesV(p.pale, xb, yC, fw, yB - yC, step: 0.3, thick: 0.08);
  k.rect(p.pale, xg1, yT, g, yB - yT);
  k.rect(p.pale, xg2, yT, g, yB - yT);
  k.rect(p.main, xf, yT, xe - xf, 0.5);
  k.circle(p.soft, xf + fw / 2, 4.1, 1.0);
  k.circle(0xFFFFFFFF, xf + fw / 2, 4.1, 0.9);
  k.text('Thank You', xf + 0.2, 3.65, fw - 0.4, 0.6, pt: 19, bold: true, color: p.main);
  k.text('Your shop or name', xf + 0.25, 4.25, fw - 0.5, 0.4, pt: 9.5, italic: true);
  final tabPts = [Offset(xf, yB), Offset(xt, yB - 0.2), Offset(xt, yT + 0.2), Offset(xf, yT)];
  k.glue(tabPts);
  k.glueRect(xf, yB, fw, fd);
  k.cut([
    Offset(xf, yT),
    Offset(xe, yT),
    Offset(xe, yB),
    Offset(xe, yB + gd),
    Offset(xg2, yB + gd),
    Offset(xg2, yB),
    Offset(xg2, yB + fd),
    Offset(xb, yB + fd),
    Offset(xb, yB),
    Offset(xb, yB + gd),
    Offset(xg1, yB + gd),
    Offset(xg1, yB),
    Offset(xg1, yB + fd),
    Offset(xf, yB + fd),
    ...tabPts,
  ]);
  for (final cx in [xf + 0.75, xf + fw - 0.75, xb + 0.75, xb + fw - 0.75]) {
    k.cutCircle(cx, yC + 0.4, 0.11);
  }
  for (final x in [xf, xg1, xb, xg2]) {
    k.foldLine(x, yT, x, yB);
  }
  k.foldLine(xg1 + g / 2, yT, xg1 + g / 2, yB);
  k.foldLine(xg2 + g / 2, yT, xg2 + g / 2, yB);
  k.foldLine(xf, yB, xe, yB);
  k.foldLine(xf, yC, xe, yC);
  for (final gx in [xg1, xg2]) {
    k.fold([Offset(gx, yB - g / 2), Offset(gx + g / 2, yB), Offset(gx + g, yB - g / 2)]);
  }
  k.note(xf, yT - 0.18, 'Fold the top band inside. Thread a ribbon through the holes for handles.');
  return k.build('Paper Gift Bag', noteText: _printNote('Gift bag 2.6 x 1.1 x 6 in'));
}

// ---------------------------------------------------------------------------------------------------------------
// Cards. A second page is printed on the back of the first (two-sided printing, flip on the short edge).
// ---------------------------------------------------------------------------------------------------------------

const String _shortEdge = 'print on the back of page 1 (two-sided, flip on short edge)';

List<NgmySlide> _halfFoldCard(NgmyCraftPalette p) {
  final out = _Page(p);
  out.foldLine(0.25, 5.5, 8.25, 5.5);
  out.rect(p.pale, 0.45, 5.85, 7.6, 4.55);
  out.confetti([p.main, p.soft, p.accent], 0.55, 5.95, 7.4, 4.35, count: 70, keepOut: const Rect.fromLTWH(1.0, 7.1, 6.5, 1.75));
  out.text('Happy Birthday', 0.9, 7.25, 6.7, 0.85, pt: 32, bold: true, color: p.main);
  out.text('Wishing you a day as wonderful as you are', 0.9, 8.15, 6.7, 0.5, pt: 12, italic: true);
  out.circle(p.soft, 4.25, 4.55, 0.06);
  out.text('Made with love', 2.25, 4.0, 4.0, 0.36, pt: 8, rot: _pi);
  final inside = _Page(p);
  inside.foldLine(0.25, 5.5, 8.25, 5.5);
  inside.rect(p.accent, 3.9, 5.95, 0.7, 0.025);
  inside.text('Dear Name,\n\nWrite your message here.\n\nWith love,\nYour Name', 1.0, 6.3, 6.5, 3.3, pt: 13);
  return [
    out.build('Half-Fold Card - outside', noteText: 'Outside  -  fold the top half back. Front is the bottom half.  -  Actual size (100%)'),
    inside.build('Half-Fold Card - inside', noteText: 'Inside  -  $_shortEdge'),
  ];
}

NgmySlide _quarterFoldCard(NgmyCraftPalette p) {
  final k = _Page(p);
  k.foldLine(0.25, 5.5, 8.25, 5.5);
  k.foldLine(4.25, 0.25, 4.25, 10.75);
  k.rect(p.pale, 4.55, 5.8, 3.65, 4.6);
  k.confetti([p.main, p.soft, p.accent], 4.6, 5.85, 3.55, 4.5, count: 45, keepOut: const Rect.fromLTWH(4.75, 7.15, 3.25, 1.35));
  k.text('Thank You', 4.55, 7.25, 3.65, 0.7, pt: 26, bold: true, color: p.main);
  k.text('for being you', 4.55, 7.95, 3.65, 0.42, pt: 11, italic: true);
  k.circle(p.soft, 2.125, 9.75, 0.06);
  k.text('Made with love', 0.5, 9.9, 3.25, 0.32, pt: 7.5);
  k.circle(p.pale, 6.375, 2.75, 1.05);
  k.text('You make the world brighter', 4.85, 2.25, 3.05, 1.0, pt: 13, italic: true, color: p.main, rot: _pi);
  k.text('Dear Name,\n\nWrite your message here.\n\nWith love,\nYour Name', 0.55, 1.0, 3.15, 3.5, pt: 11, rot: _pi);
  return k.build('Quarter-Fold Card', noteText: 'Fold in half across, then in half again. Words on top print upside down for the inside.');
}

List<NgmySlide> _triFoldCard(NgmyCraftPalette p) {
  const f1 = 11 / 3;
  const f2 = 22 / 3;
  final inside = _Page(p);
  inside.foldLine(0.25, f1, 8.25, f1);
  inside.foldLine(0.25, f2, 8.25, f2);
  inside.text('You are invited', 0.8, 1.1, 6.9, 0.8, pt: 26, bold: true, color: p.main);
  inside.rect(p.accent, 3.75, 2.05, 1.0, 0.025);
  inside.text('to a celebration for Name', 0.8, 2.2, 6.9, 0.5, pt: 13, italic: true);
  inside.rect(p.pale, 0.8, 4.15, 6.9, 2.7);
  inside.text('Date: Saturday, Month Day\nTime: 3:00 PM\nPlace: Street Address, City', 1.1, 4.4, 6.3, 2.2, pt: 13);
  inside.text('Please reply to Name\nPhone or email', 0.8, 8.3, 6.9, 0.9, pt: 12);
  final out = _Page(p);
  out.foldLine(0.25, f1, 8.25, f1);
  out.foldLine(0.25, f2, 8.25, f2);
  out.text('We can not wait to see you!', 0.8, 1.45, 6.9, 0.6, pt: 14, italic: true, color: p.main);
  out.text('Made with love', 2.25, 5.3, 4.0, 0.36, pt: 8, rot: _pi);
  out.rect(p.main, 0.45, f2 + 0.3, 7.6, 2.95);
  out.dotsRect(p.soft, 0.45, f2 + 0.3, 7.6, 2.95, step: 0.32, r: 0.035);
  out.rect(p.pale, 1.3, f2 + 0.95, 5.9, 1.6);
  out.text('Party Time', 1.3, f2 + 1.05, 5.9, 0.8, pt: 30, bold: true, color: p.main);
  out.text('Open me', 1.3, f2 + 1.8, 5.9, 0.45, pt: 11, italic: true);
  return [
    inside.build('Tri-Fold Card - inside', noteText: 'Inside  -  fold the bottom third up, then the top third down  -  Actual size (100%)'),
    out.build('Tri-Fold Card - outside', noteText: 'Outside  -  $_shortEdge'),
  ];
}

List<NgmySlide> _popUpCard(NgmyCraftPalette p) {
  final k = _Page(p);
  const fy = 5.5;
  k.foldLine(0.25, fy, 8.25, fy);
  const pops = [(1.2, 2.6, 1.1, 'Hip'), (3.35, 5.15, 1.5, 'Hooray!'), (5.9, 7.3, 0.85, 'Hip')];
  k.confetti([p.main, p.soft, p.accent], 0.5, 0.5, 7.5, 3.6, count: 55, keepOut: const Rect.fromLTWH(0.9, 1.1, 6.7, 1.3));
  k.text('Congratulations', 0.9, 1.2, 6.7, 0.9, pt: 30, bold: true, color: p.main);
  for (final (x1, x2, d, word) in pops) {
    k.rect(p.soft, x1, fy - d, x2 - x1, d);
    k.rect(p.main, x1, fy, x2 - x1, d);
    k.cut([Offset(x1, fy - d), Offset(x1, fy + d)]);
    k.cut([Offset(x2, fy - d), Offset(x2, fy + d)]);
    k.foldLine(x1, fy - d, x2, fy - d);
    k.foldLine(x1, fy + d, x2, fy + d);
    k.text(word, x1, fy + d / 2 - 0.25, x2 - x1, 0.5, pt: 13, bold: true, color: p.pale);
  }
  k.text('Write your message here', 1.0, 7.6, 6.5, 1.6, pt: 13, italic: true);
  k.note(0.4, 0.3, 'Cut the short solid lines. Fold the card in half, then push each pop-up through to the inside.');
  final cover = _Page(p);
  cover.foldLine(0.25, fy, 8.25, fy);
  cover.rect(p.main, 0.45, 5.85, 7.6, 4.55);
  cover.dotsRect(p.soft, 0.45, 5.85, 7.6, 4.55, step: 0.34, r: 0.04);
  cover.rect(p.pale, 1.4, 7.05, 5.7, 1.8);
  cover.text('Surprise!', 1.4, 7.2, 5.7, 0.9, pt: 32, bold: true, color: p.main);
  cover.text('Open me', 1.4, 8.05, 5.7, 0.45, pt: 11, italic: true);
  cover.text('Made with love', 2.25, 4.0, 4.0, 0.36, pt: 8, rot: _pi);
  return [
    k.build('Pop-Up Card - inside', noteText: 'Inside with pop-ups  -  Actual size (100%)'),
    cover.build('Pop-Up Card - cover', noteText: 'Cover  -  $_shortEdge'),
  ];
}

List<NgmySlide> _postcards(NgmyCraftPalette p) {
  const x0 = 1.25;
  const w = 6.0;
  const h = 4.0;
  final front = _Page(p);
  final back = _Page(p);
  for (final y in [1.3, 5.7]) {
    front.rect(p.main, x0, y, w, h);
    front.confetti([p.soft, p.pale, p.accent], x0 + 0.1, y + 0.1, w - 0.2, h - 0.2, count: 45, keepOut: Rect.fromLTWH(x0 + 0.6, y + 1.0, w - 1.2, 2.0));
    front.text('Greetings from\nYour Town', x0 + 0.6, y + 1.05, w - 1.2, 1.9, pt: 26, bold: true, color: p.pale);
    front.cutRect(x0, y, w, h);
    back.cutRect(x0, y, w, h);
    back.rect(p.soft, x0 + 3.25, y + 0.35, 0.02, h - 0.7);
    _stamp(back, x0 + w, y);
    back.text('Write your message here...', x0 + 0.25, y + 0.3, 2.85, 3.4, pt: 11, align: TextAlign.left);
    back.text('Recipient Name\nStreet Address\nCity, State ZIP', x0 + 3.45, y + 1.7, 2.4, 1.3, pt: 10.5, align: TextAlign.left);
  }
  return [
    front.build('Postcards - picture side', noteText: _printNote('Two 6 x 4 in postcards')),
    back.build('Postcards - address side', noteText: 'Address side  -  print on the back of page 1 (two-sided)'),
  ];
}

// ---------------------------------------------------------------------------------------------------------------
// Tags and more.
// ---------------------------------------------------------------------------------------------------------------

NgmySlide _giftTags(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 3.4;
  const h = 2.2;
  const titles = ['For You', 'Thank You', 'Happy Birthday', 'With Love', 'Congrats', 'Just Because', 'Cheers', 'Merry & Bright'];
  var i = 0;
  for (var row = 0; row < 4; row++) {
    for (final x in [0.65, 4.45]) {
      final y = 0.45 + row * 2.5;
      final shape = [Offset(x + 0.5, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x + 0.5, y + h), Offset(x, y + h - 0.6), Offset(x, y + 0.6)];
      final tip = [Offset(x + 0.5, y), Offset(x + 1.0, y), Offset(x + 1.0, y + h), Offset(x + 0.5, y + h), Offset(x, y + h - 0.6), Offset(x, y + 0.6)];
      k.poly(p.pale, shape);
      k.poly(i.isEven ? p.main : p.soft, tip);
      k.dotsIn(i.isEven ? p.soft : p.pale, tip, step: 0.24, r: 0.03);
      k.circle(p.pale, x + 0.4, y + h / 2, 0.18);
      k.cut(shape, close: true);
      k.cutCircle(x + 0.4, y + h / 2, 0.1);
      k.text(titles[i], x + 1.1, y + 0.25, w - 1.25, 0.48, pt: 13, bold: true, color: p.main, align: TextAlign.left);
      k.rect(p.accent, x + 1.17, y + 0.76, 0.6, 0.02);
      k.text('To: ______________\nFrom: ____________', x + 1.1, y + 0.85, w - 1.25, 0.95, pt: 9.5, align: TextAlign.left);
      i++;
    }
  }
  return k.build('Gift Tags', noteText: _printNote('Eight gift tags'));
}

NgmySlide _foldedTags(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 2.3;
  const h = 3.0;
  const titles = ['For You', 'Thank You', 'Enjoy', 'Happy Day', 'With Love', 'Hello', 'Cheers', 'Sweet', 'Smile'];
  var i = 0;
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      final x = 0.55 + col * (w + 0.25);
      final y = 0.5 + row * (h + 0.3);
      k.rect(i.isEven ? p.soft : p.main, x, y, w, h / 2);
      k.dotsRect(p.pale, x, y, w, h / 2, step: 0.26, r: 0.03);
      k.rect(p.pale, x + 0.12, y + h / 2 + 0.12, w - 0.24, h / 2 - 0.24);
      k.cutRect(x, y, w, h);
      k.foldLine(x, y + h / 2, x + w, y + h / 2);
      k.cutCircle(x + 0.3, y + h / 2 + 0.3, 0.075);
      k.cutCircle(x + 0.3, y + h / 2 - 0.3, 0.075);
      k.text(titles[i], x + 0.45, y + h / 2 + 0.3, w - 0.6, 0.5, pt: 13, bold: true, color: p.main);
      k.text('To:\nFrom:', x + 0.25, y + h / 2 + 0.78, w - 0.5, 0.55, pt: 8, align: TextAlign.left);
      i++;
    }
  }
  return k.build('Folded Gift Tags', noteText: _printNote('Nine folded tags 2.3 x 1.5 in'));
}

NgmySlide _bookmarks(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 1.6;
  const h = 8.0;
  const y = 0.9;
  const words = ['Keep Reading', 'Dream Big', 'One More Chapter', 'Your Name'];
  for (var i = 0; i < 4; i++) {
    final x = 0.6 + i * 1.9;
    final shape = [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x + w / 2, y + h - 0.45), Offset(x, y + h)];
    switch (i) {
      case 0:
        k.poly(p.pale, shape);
        k.stripesH(p.soft, x, y, w, h - 0.5, step: 0.3, thick: 0.1);
      case 1:
        k.poly(p.main, shape);
        k.dotsIn(p.soft, shape, step: 0.26, r: 0.035);
      case 2:
        k.poly(p.pale, shape);
        k.confetti([p.main, p.soft, p.accent], x + 0.05, y + 0.05, w - 0.1, h - 0.6, count: 60);
      default:
        k.poly(p.soft, shape);
        k.rect(p.main, x, y + 0.75, w, 0.08);
        k.rect(p.main, x, y + h - 1.1, w, 0.08);
    }
    k.rect(0xFFFFFFFF, x + 0.3, y + 1.4, w - 0.6, 5.6);
    k.circle(p.pale, x + w / 2, y + 0.4, 0.17);
    k.cut(shape, close: true);
    k.cutCircle(x + w / 2, y + 0.4, 0.1);
    k.textAt(words[i], x + w / 2, y + 4.2, 5.4, 0.9, pt: 18, bold: true, color: p.main, rot: -_pi / 2);
  }
  return k.build('Bookmarks', noteText: _printNote('Four bookmarks 1.6 x 8 in'));
}

NgmySlide _miniZine(NgmyCraftPalette p) {
  final k = _Page(p);
  k.legendAt(6.55, 10.72);
  for (final y in [2.75, 5.5, 8.25]) {
    k.foldLine(0.25, y, 8.25, y);
  }
  k.foldLine(4.25, 0.25, 4.25, 2.75);
  k.foldLine(4.25, 8.25, 4.25, 10.75);
  k.cut([const Offset(4.25, 2.75), const Offset(4.25, 8.25)]);
  // Left column pages read with their top to the right; right column pages read with their top to the left.
  const left = ['Page 6', 'Page 7', 'Back cover', 'Front cover'];
  const right = ['Page 5', 'Page 4', 'Page 3', 'Page 2'];
  for (var row = 0; row < 4; row++) {
    final y = row * 2.75;
    final cy = y + 1.375;
    for (final col in [0, 1]) {
      final cx = col == 0 ? 2.125 : 6.375;
      final rot = col == 0 ? _pi / 2 : -_pi / 2;
      final label = col == 0 ? left[row] : right[row];
      final px = col == 0 ? 0.3 : 4.5;
      if (label == 'Front cover') {
        k.rect(p.main, px, y + 0.3, 3.7, 2.15);
        k.dotsRect(p.soft, px, y + 0.3, 3.7, 2.15, step: 0.3, r: 0.035);
        k.rect(p.pale, cx - 0.55, y + 0.5, 1.1, 1.75);
        k.textAt('My Little Zine\n\nby Your Name', cx, cy, 1.7, 1.05, pt: 12, bold: true, color: p.main, rot: rot);
      } else if (label == 'Back cover') {
        k.rect(p.soft, px, y + 0.3, 3.7, 2.15);
        k.textAt('The End', cx, cy, 2.0, 0.6, pt: 14, bold: true, color: p.main, rot: rot);
      } else {
        k.rect(p.pale, px, y + 0.3, 3.7, 2.15);
        k.textAt('$label\n\nWrite or draw here', cx, cy, 2.0, 3.3, pt: 11, rot: rot);
      }
    }
  }
  k.note(0.35, 10.72, 'Fold, cut the middle line, then fold into an 8 page book');
  return k.build('Mini Zine');
}

NgmySlide _placeCards(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 3.6;
  const h = 4.2;
  for (final y in [0.8, 5.4]) {
    for (final x in [0.5, 4.4]) {
      k.cutRect(x, y, w, h);
      k.foldLine(x, y + h / 2, x + w, y + h / 2);
      k.rect(p.main, x + 0.2, y + 3.9, w - 0.4, 0.08);
      k.rect(p.main, x + 0.2, y + 0.22, w - 0.4, 0.08);
      k.circle(p.soft, x + w / 2, y + 2.42, 0.07);
      k.circle(p.soft, x + w / 2, y + 1.78, 0.07);
      k.text('Guest Name', x + 0.2, y + 2.55, w - 0.4, 0.75, pt: 20, bold: true);
      k.text('Table 1', x + 0.2, y + 3.3, w - 0.4, 0.35, pt: 9, color: p.main);
      k.text('Guest Name', x + 0.2, y + 0.9, w - 0.4, 0.75, pt: 20, bold: true, rot: _pi);
      k.text('Table 1', x + 0.2, y + 0.55, w - 0.4, 0.35, pt: 9, color: p.main, rot: _pi);
    }
  }
  return k.build('Place Cards', noteText: _printNote('Four tent place cards 3.6 x 2.1 in'));
}

NgmySlide _pocketFolder(NgmyCraftPalette p) {
  final k = _Page(p);
  k.legendAt(6.55, 0.3);
  k.foldLine(0.25, 8.25, 8.25, 8.25);
  k.foldLine(4.25, 0.25, 4.25, 10.75);
  k.rect(p.main, 4.55, 0.6, 3.65, 7.35);
  k.dotsRect(p.soft, 4.55, 0.6, 3.65, 7.35, step: 0.34, r: 0.04);
  k.rect(p.pale, 4.95, 2.6, 2.85, 1.7);
  k.text('My Folder', 4.95, 2.8, 2.85, 0.65, pt: 22, bold: true, color: p.main);
  k.text('Name  -  Subject', 4.95, 3.45, 2.85, 0.45, pt: 10);
  k.rect(p.soft, 0.3, 0.6, 3.65, 7.35);
  k.stripesH(p.pale, 0.3, 0.6, 3.65, 7.35, step: 0.34, thick: 0.08);
  k.rect(p.pale, 0.7, 8.45, 7.1, 2.3);
  k.glueRect(0.3, 8.4, 0.35, 2.45);
  k.glueRect(7.85, 8.4, 0.35, 2.45);
  for (final cx in [2.125, 6.375]) {
    k.cut(_arc(cx, 11.0, 0.45, 0.45, _pi, 2 * _pi, 16));
  }
  k.text('Notes & papers', 0.8, 9.2, 3.2, 0.5, pt: 12, italic: true, color: p.main, rot: _pi);
  k.text('Keep it safe', 4.5, 9.2, 3.2, 0.5, pt: 12, italic: true, color: p.main, rot: _pi);
  k.note(0.35, 0.3, 'Fold the bottom strip back, glue its ends, then fold in half with the print outside');
  return k.build('Pocket Folder');
}

NgmySlide _cdSleeve(NgmyCraftPalette p) {
  final k = _Page(p);
  const sq = 4.875;
  const x0 = (_pw - sq) / 2;
  const yTop = 0.6;
  const cx = x0 + sq / 2;
  k.rect(p.main, x0, yTop, sq, sq);
  k.circle(p.soft, cx, 3.5, 1.35);
  k.circle(p.pale, cx, 3.5, 0.5);
  k.circle(p.main, cx, 3.5, 0.16);
  k.text('My Mixtape', x0 + 0.3, 1.25, sq - 0.6, 0.6, pt: 20, bold: true, color: p.pale);
  k.text('Your Name  -  2026', x0 + 0.3, 4.95, sq - 0.6, 0.38, pt: 9, color: p.pale);
  k.rect(p.pale, x0, yTop + sq, sq, sq);
  k.text('Track list\n1. Song title\n2. Song title\n3. Song title\n4. Song title\n5. Song title', x0 + 0.4, yTop + sq + 0.6, sq - 0.8, 3.6, pt: 11, rot: _pi);
  _sleeve(k, x0, yTop, sq, sq, notch: 0.55, tab: 0.5);
  return k.build('CD Sleeve', noteText: _printNote('CD sleeve 4.875 in square'));
}

NgmySlide _photoSleeve(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 6.3;
  const h = 4.3;
  const x0 = (_pw - w) / 2;
  const yTop = 0.9;
  k.rect(p.soft, x0, yTop, w, h);
  k.dotsRect(p.pale, x0, yTop, w, h, step: 0.34, r: 0.045);
  k.rect(p.pale, x0 + 0.5, yTop + 0.85, w - 1.0, 2.75);
  k.rect(p.main, x0 + 0.5, yTop + 0.85, w - 1.0, 0.06);
  k.text('Memories', x0 + 0.5, yTop + 1.4, w - 1.0, 0.75, pt: 24, bold: true, color: p.main);
  k.text('Date  -  Place', x0 + 0.5, yTop + 2.15, w - 1.0, 0.42, pt: 10, italic: true);
  k.rect(p.pale, x0, yTop + h, w, h);
  k.text('Notes\n\n________________________\n________________________', x0 + 0.5, yTop + h + 0.6, w - 1.0, 2.6, pt: 11, rot: _pi);
  _sleeve(k, x0, yTop, w, h, notch: 0.55, tab: 0.45);
  return k.build('Photo Sleeve', noteText: _printNote('Sleeve for a 6 x 4 in photo'));
}

NgmySlide _doorHangers(NgmyCraftPalette p) {
  final k = _Page(p);
  const w = 3.6;
  const h = 9.6;
  const y = 0.5;
  const words = [('Do Not\nDisturb', 'Please come back later'), ('Come\nOn In', 'The door is open')];
  for (var i = 0; i < 2; i++) {
    final x = i == 0 ? 0.55 : 4.35;
    final cx = x + w / 2;
    const cy = y + 1.3;
    const r = 0.72;
    final shape = _roundRect(x, y, w, h, 0.45, bottom: false);
    k.poly(i == 0 ? p.soft : p.main, shape);
    k.dotsIn(p.pale, [Offset(x, y + 2.3), Offset(x + w, y + 2.3), Offset(x + w, y + h), Offset(x, y + h)], step: 0.34, r: 0.04);
    k.circle(p.pale, cx, cy, r + 0.12);
    k.rect(p.pale, x + 0.25, y + 2.6, w - 0.5, h - 2.9);
    k.text(words[i].$1, x + 0.3, y + 3.4, w - 0.6, 1.7, pt: 28, bold: true, color: p.main);
    k.rect(p.accent, cx - 0.4, y + 5.2, 0.8, 0.025);
    k.text(words[i].$2, x + 0.3, y + 5.35, w - 0.6, 0.5, pt: 11, italic: true);
    k.text('Your Name', x + 0.3, y + h - 1.0, w - 0.6, 0.4, pt: 9);
    k.cut([...shape, shape.first]);
    k.cutCircle(cx, cy, r);
    k.cut([Offset(cx + r * math.cos(-0.6), cy + r * math.sin(-0.6)), Offset(x + w, y + 0.62)]);
  }
  return k.build('Door Hangers', noteText: _printNote('Two door hangers 3.6 x 9.6 in'));
}

// ---------------------------------------------------------------------------------------------------------------
// The list shown in Design > Fold & Cut.
// ---------------------------------------------------------------------------------------------------------------

final List<NgmyPaperCraft> kNgmyPaperCrafts = [
  NgmyPaperCraft(number: 1, id: 'window_letter', name: 'Window Envelope Letter', group: _lettersGroup, blurb: 'Folds in three; the address shows in a #10 window', icon: Icons.mark_email_read_outlined, build: (p) => [_windowLetter(p)]),
  NgmyPaperCraft(number: 2, 
      id: 'card_envelope',
      name: 'Card Envelope (A2)',
      group: _lettersGroup,
      blurb: '5.75 x 4.375 in, fits a quarter-fold card',
      icon: Icons.mail_outline_rounded,
      build: (p) => [_cardEnvelope(p, title: 'Card Envelope (A2)', w: 5.75, h: 4.375, top: 2.2, bottom: 2.55, side: 0.85)]),
  NgmyPaperCraft(number: 3, 
      id: 'square_envelope',
      name: 'Square Envelope',
      group: _lettersGroup,
      blurb: '5.5 in square for greeting cards',
      icon: Icons.crop_square_rounded,
      build: (p) => [_cardEnvelope(p, title: 'Square Envelope', w: 5.5, h: 5.5, top: 2.1, bottom: 2.35, side: 0.85)]),
  NgmyPaperCraft(number: 4, id: 'diamond_envelope', name: 'Diamond Envelope', group: _lettersGroup, blurb: 'Classic pointed flaps', icon: Icons.diamond_outlined, build: (p) => [_diamondEnvelope(p)]),
  NgmyPaperCraft(number: 5, id: 'seed_envelopes', name: 'Seed Envelopes', group: _lettersGroup, blurb: 'Two small seed or coin packets', icon: Icons.eco_outlined, build: (p) => [_seedEnvelopes(p)]),
  NgmyPaperCraft(number: 6, id: 'gift_card_envelopes', name: 'Gift Card Envelopes', group: _lettersGroup, blurb: 'Two little envelopes for gift cards', icon: Icons.card_giftcard_rounded, build: (p) => [_giftCardEnvelopes(p)]),
  NgmyPaperCraft(number: 7, id: 'gift_box', name: 'Gift Box with Lid', group: _boxesGroup, blurb: 'Square box and a matching lid', icon: Icons.redeem_rounded, build: (p) => [_giftBox(p)]),
  NgmyPaperCraft(number: 8, id: 'pillow_box', name: 'Pillow Box', group: _boxesGroup, blurb: 'Curved ends that fold closed', icon: Icons.bedtime_outlined, build: (p) => [_pillowBox(p)]),
  NgmyPaperCraft(number: 9, id: 'pyramid_box', name: 'Pyramid Box', group: _boxesGroup, blurb: 'Four triangles close to a point', icon: Icons.change_history_rounded, build: (p) => [_pyramidBox(p)]),
  NgmyPaperCraft(number: 10, id: 'prism_box', name: 'Triangle Prism Box', group: _boxesGroup, blurb: 'Long triangle box for treats', icon: Icons.signal_cellular_0_bar_rounded, build: (p) => [_prismBox(p)]),
  NgmyPaperCraft(number: 11, id: 'favor_box', name: 'Favor Box', group: _boxesGroup, blurb: 'Small cube with tuck lids', icon: Icons.inventory_2_outlined, build: (p) => [_favorBox(p)]),
  NgmyPaperCraft(number: 12, id: 'paper_bag', name: 'Paper Gift Bag', group: _boxesGroup, blurb: 'Bag with side folds and ribbon holes', icon: Icons.shopping_bag_outlined, build: (p) => [_paperBag(p)]),
  NgmyPaperCraft(number: 13, id: 'half_fold_card', name: 'Half-Fold Card', group: _cardsGroup, blurb: '8.5 x 5.5 in card with an inside page', icon: Icons.menu_book_outlined, build: _halfFoldCard),
  NgmyPaperCraft(number: 14, id: 'quarter_fold_card', name: 'Quarter-Fold Card', group: _cardsGroup, blurb: '4.25 x 5.5 in card from one side', icon: Icons.auto_stories_outlined, build: (p) => [_quarterFoldCard(p)]),
  NgmyPaperCraft(number: 15, id: 'tri_fold_card', name: 'Tri-Fold Card', group: _cardsGroup, blurb: 'Folds in three, like an invitation', icon: Icons.view_agenda_outlined, build: _triFoldCard),
  NgmyPaperCraft(number: 16, id: 'pop_up_card', name: 'Pop-Up Card', group: _cardsGroup, blurb: 'Three pop-ups jump out when opened', icon: Icons.celebration_outlined, build: _popUpCard),
  NgmyPaperCraft(number: 17, id: 'postcards', name: 'Postcards', group: _cardsGroup, blurb: 'Two 6 x 4 in postcards, both sides', icon: Icons.local_post_office_outlined, build: _postcards),
  NgmyPaperCraft(number: 18, id: 'gift_tags', name: 'Gift Tags', group: _moreGroup, blurb: 'Eight tags with string holes', icon: Icons.sell_outlined, build: (p) => [_giftTags(p)]),
  NgmyPaperCraft(number: 19, id: 'folded_tags', name: 'Folded Gift Tags', group: _moreGroup, blurb: 'Nine little folded tags', icon: Icons.style_outlined, build: (p) => [_foldedTags(p)]),
  NgmyPaperCraft(number: 20, id: 'bookmarks', name: 'Bookmarks', group: _moreGroup, blurb: 'Four bookmarks with tassel holes', icon: Icons.bookmark_outline_rounded, build: (p) => [_bookmarks(p)]),
  NgmyPaperCraft(number: 21, id: 'mini_zine', name: 'Mini Zine', group: _moreGroup, blurb: 'One sheet folds into an 8 page book', icon: Icons.import_contacts_outlined, build: (p) => [_miniZine(p)]),
  NgmyPaperCraft(number: 22, id: 'place_cards', name: 'Place Cards', group: _moreGroup, blurb: 'Four tent cards, names on both sides', icon: Icons.table_restaurant_outlined, build: (p) => [_placeCards(p)]),
  NgmyPaperCraft(number: 23, id: 'pocket_folder', name: 'Pocket Folder', group: _moreGroup, blurb: 'Folded folder with two pockets', icon: Icons.folder_open_outlined, build: (p) => [_pocketFolder(p)]),
  NgmyPaperCraft(number: 24, id: 'cd_sleeve', name: 'CD Sleeve', group: _moreGroup, blurb: 'Pocket for a CD or DVD', icon: Icons.album_outlined, build: (p) => [_cdSleeve(p)]),
  NgmyPaperCraft(number: 25, id: 'photo_sleeve', name: 'Photo Sleeve', group: _moreGroup, blurb: 'Pocket for a 6 x 4 in photo', icon: Icons.photo_outlined, build: (p) => [_photoSleeve(p)]),
  NgmyPaperCraft(number: 26, id: 'door_hangers', name: 'Door Hangers', group: _moreGroup, blurb: 'Two hangers for a door knob', icon: Icons.door_front_door_outlined, build: (p) => [_doorHangers(p)]),
];

/// A new presentation on true Letter paper made from [craft] in [palette].
NgmySlideDeck ngmyBuildPaperCraftDeck(NgmyPaperCraft craft, NgmyCraftPalette palette) {
  final slides = craft.build(palette);
  // The lines layer remembers which design and colour set it is, so the AI can change it later.
  for (final s in slides) {
    for (final e in s.elements) {
      if (!ngmyIsCraftLines(e)) continue;
      final m = jsonDecode(e.text) as Map<String, dynamic>;
      m['craft'] = craft.id;
      m['pal'] = palette.name;
      e.text = jsonEncode(m);
    }
  }
  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: craft.name,
    aspectRatio: NgmySlideAspectRatio.portrait916,
    paperAspect: kNgmyCraftPageW / kNgmyCraftPageH,
    deckKind: kNgmyPaperCraftDeckKind,
    autoAdvanceSeconds: 6,
    slides: slides,
  );
}

/// Which design and colour set a Fold & Cut deck was made from (null when it cannot tell).
({NgmyPaperCraft craft, NgmyCraftPalette palette})? ngmyPaperCraftOfDeck(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements) {
      if (!ngmyIsCraftLines(e)) continue;
      try {
        final m = jsonDecode(e.text) as Map<String, dynamic>;
        final id = m['craft']?.toString();
        final pal = m['pal']?.toString();
        NgmyPaperCraft? craft;
        for (final c in kNgmyPaperCrafts) {
          if (c.id == id || (id == null && c.name == deck.name)) craft = c;
        }
        if (craft == null) return null;
        for (final p in kNgmyCraftPalettes) {
          if (p.name == pal) return (craft: craft, palette: p);
        }
        // Made before the design was remembered: find the colour set whose lines match.
        for (final p in kNgmyCraftPalettes) {
          final fresh = craft.build(p).first.elements.firstWhere(ngmyIsCraftLines);
          final a = (jsonDecode(fresh.text) as Map)['f'];
          if (jsonEncode(a) == jsonEncode(m['f'])) return (craft: craft, palette: p);
        }
        return (craft: craft, palette: kNgmyCraftPalettes.first);
      } catch (_) {
        return null;
      }
    }
  }
  return null;
}

// ---------------------------------------------------------------------------------------------------------------
// The picker.
// ---------------------------------------------------------------------------------------------------------------

/// Opens Design > Fold & Cut. Returns the new presentation the user picked, or null.
Future<NgmySlideDeck?> showNgmyPaperCraftPicker(BuildContext context) {
  return Navigator.of(context).push<NgmySlideDeck>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => const _CraftPickerScreen()),
  );
}

class _CraftPickerScreen extends StatefulWidget {
  const _CraftPickerScreen();
  @override
  State<_CraftPickerScreen> createState() => _CraftPickerScreenState();
}

class _CraftPickerScreenState extends State<_CraftPickerScreen> {
  int _palette = 0;
  String _group = 'All';
  final Map<int, Map<String, NgmySlide>> _previews = {};

  NgmySlide _preview(NgmyPaperCraft c) {
    final byId = _previews[_palette] ??= {};
    return byId[c.id] ??= c.build(kNgmyCraftPalettes[_palette]).first;
  }

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    final bg = dark ? const Color(0xFF0E1526) : const Color(0xFFF4F6FA);
    final card = dark ? const Color(0xFF151F36) : Colors.white;
    final ink = dark ? Colors.white : const Color(0xFF0F172A);
    final sub = dark ? Colors.white60 : const Color(0xFF64748B);
    final list = _group == 'All' ? kNgmyPaperCrafts : kNgmyPaperCrafts.where((c) => c.group == _group).toList();
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: ink,
        elevation: 0,
        title: const Text('Fold & Cut', style: TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          // Same as Slides "Create with AI", as a small pill: say a number, a name or what you need.
          Padding(
            padding: const EdgeInsets.only(right: 12),
            child: Center(
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  key: const ValueKey('craft_ai_open'),
                  borderRadius: BorderRadius.circular(99),
                  onTap: () async {
                    final nav = Navigator.of(context);
                    final deck = await showNgmyPaperCraftAiSheet(context, palette: kNgmyCraftPalettes[_palette]);
                    if (deck != null && mounted) nav.pop(deck);
                  },
                  child: Ink(
                    height: 32,
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(99),
                      gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
                    ),
                    child: const Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 15),
                        SizedBox(width: 5),
                        Text('AI', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5)),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
      body: SafeArea(
        top: false,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
              child: Text(
                'Print, cut on the thin solid lines, fold on the light dashed lines and glue the grey tabs. '
                'Every design is a Letter page; print it at Actual size (100%).',
                style: TextStyle(color: sub, fontSize: 12.5, height: 1.35),
              ),
            ),
            SizedBox(
              height: 40,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                children: [
                  for (var i = 0; i < kNgmyCraftPalettes.length; i++)
                    Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: ChoiceChip(
                        selected: _palette == i,
                        onSelected: (_) => setState(() => _palette = i),
                        avatar: Container(
                          width: 16,
                          height: 16,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(colors: [Color(kNgmyCraftPalettes[i].main), Color(kNgmyCraftPalettes[i].soft)]),
                          ),
                        ),
                        label: Text(kNgmyCraftPalettes[i].name, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                      ),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 6),
            SizedBox(
              height: 40,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                children: [
                  for (final g in ['All', ...kNgmyCraftGroups])
                    Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: ChoiceChip(
                        selected: _group == g,
                        onSelected: (_) => setState(() => _group = g),
                        label: Text(g, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                      ),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 8),
            Expanded(
              child: GridView.builder(
                padding: const EdgeInsets.fromLTRB(12, 4, 12, 24),
                gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                  maxCrossAxisExtent: 190,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 0.56,
                ),
                itemCount: list.length,
                itemBuilder: (context, i) {
                  final c = list[i];
                  return Material(
                    color: card,
                    borderRadius: BorderRadius.circular(14),
                    clipBehavior: Clip.antiAlias,
                    child: InkWell(
                      key: ValueKey('craft_${c.id}'),
                      onTap: () => Navigator.of(context).pop(ngmyBuildPaperCraftDeck(c, kNgmyCraftPalettes[_palette])),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Center(
                                child: AspectRatio(
                                  aspectRatio: kNgmyCraftPageW / kNgmyCraftPageH,
                                  child: DecoratedBox(
                                    decoration: BoxDecoration(
                                      color: Colors.white,
                                      borderRadius: BorderRadius.circular(6),
                                      boxShadow: const [BoxShadow(color: Color(0x22000000), blurRadius: 6, offset: Offset(0, 2))],
                                    ),
                                    child: Stack(
                                      children: [
                                        Positioned.fill(child: ngmyMiniSlidePreview(_preview(c))),
                                        // The design number: "make number 5".
                                        Positioned(
                                          left: 4,
                                          top: 4,
                                          child: Container(
                                            key: ValueKey('craft_number_${c.number}'),
                                            constraints: const BoxConstraints(minWidth: 20),
                                            height: 20,
                                            padding: const EdgeInsets.symmetric(horizontal: 5),
                                            alignment: Alignment.center,
                                            decoration: BoxDecoration(
                                              color: const Color(0xE60F172A),
                                              borderRadius: BorderRadius.circular(10),
                                            ),
                                            child: Text('${c.number}', style: const TextStyle(color: Colors.white, fontSize: 10.5, fontWeight: FontWeight.w800)),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Row(
                              children: [
                                Icon(c.icon, size: 15, color: Color(kNgmyCraftPalettes[_palette].main)),
                                const SizedBox(width: 5),
                                Expanded(
                                  child: Text(c.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 12.5)),
                                ),
                              ],
                            ),
                            const SizedBox(height: 2),
                            Text(c.blurb, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: sub, fontSize: 10.5, height: 1.25)),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
