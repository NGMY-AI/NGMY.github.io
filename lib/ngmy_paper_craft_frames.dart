import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_paper_craft_dialog.dart';
import 'ngmy_paper_crafts.dart';
import 'ngmy_slides_models.dart';

/// Address frames for Fold & Cut envelopes and postcards: neat designs that hold the recipient name and address
/// ("to") and the sender block ("from").
///
/// The frame boxes and the chosen design are kept in the lines layer ("af": {"id", "b": [[x, y, w, h, role]],
/// "c": colours}, role 0 is the recipient and 1 the sender). The frame is drawn when the page is painted, printed
/// or saved as PDF. The words are normal text boxes (ids start craft_to_ and craft_from_) that sit inside the
/// frame; the text is centred top to bottom in its box, so it stays even however many lines are typed. Every
/// frame is drawn in the dark ink of the colour set so it prints clearly.

const String kNgmyCraftDefaultAddressFrame = 'rounded';

/// Text box ids of the recipient and the sender words.
const String kNgmyCraftToPrefix = 'craft_to_';
const String kNgmyCraftFromPrefix = 'craft_from_';

/// Letter sizes in printer points: the same on every envelope, so all of them look even.
const double kNgmyCraftToPt = 11;
const double kNgmyCraftFromPt = 8;

class NgmyCraftAddressFrame {
  const NgmyCraftAddressFrame(this.id, this.name, this.icon, {this.center = false, this.aliases = const []});
  final String id;
  final String name;
  final IconData icon;

  /// Words centred left to right (otherwise lined up on the left).
  final bool center;

  /// Other words people use for it (English and Swahili), for the AI.
  final List<String> aliases;
}

const List<NgmyCraftAddressFrame> kNgmyCraftAddressFrames = [
  NgmyCraftAddressFrame('none', 'No frame', Icons.notes_rounded, aliases: ['none', 'no frame', 'without', 'remove the frame', 'bila']),
  NgmyCraftAddressFrame('rounded', 'Rounded card', Icons.crop_square_rounded, aliases: ['rounded', 'round corners', 'card', 'soft', 'kadi']),
  NgmyCraftAddressFrame('double', 'Double rule', Icons.border_outer_rounded, center: true, aliases: ['double', 'two lines', 'double line', 'mistari miwili']),
  NgmyCraftAddressFrame('tab', 'Label with tab', Icons.label_outline_rounded, aliases: ['tab', 'label', 'tag', 'lebo']),
  NgmyCraftAddressFrame('ribbon', 'Ribbon banner', Icons.view_day_outlined, center: true, aliases: ['ribbon', 'banner', 'utepe']),
  NgmyCraftAddressFrame('brackets', 'Corner brackets', Icons.crop_free_rounded, center: true, aliases: ['brackets', 'bracket', 'corners', 'corner', 'pembe']),
  NgmyCraftAddressFrame('postal', 'Dotted postal label', Icons.local_shipping_outlined, aliases: ['dotted', 'dots', 'postal', 'shipping', 'delivery', 'vitone']),
  NgmyCraftAddressFrame('elegant', 'Elegant ornament', Icons.auto_awesome_outlined, center: true, aliases: ['elegant', 'ornament', 'fancy', 'wedding', 'classy', 'maridadi']),
  NgmyCraftAddressFrame('bold', 'Bold block', Icons.format_bold_rounded, aliases: ['bold', 'block', 'strong', 'thick', 'nzito']),
  NgmyCraftAddressFrame('shadow', 'Shadow box', Icons.filter_none_rounded, aliases: ['shadow', 'drop shadow', 'kivuli']),
  NgmyCraftAddressFrame('scallop', 'Scalloped edge', Icons.wb_sunny_outlined, center: true, aliases: ['scallop', 'scalloped', 'wavy edge', 'lace', 'mawimbi']),
  NgmyCraftAddressFrame('ngmy', 'NGMY branded', Icons.verified_outlined, aliases: ['ngmy', 'brand', 'branded', 'logo']),
];

NgmyCraftAddressFrame? ngmyCraftAddressFrameById(String? id) {
  if (id == null) return null;
  for (final f in kNgmyCraftAddressFrames) {
    if (f.id == id) return f;
  }
  return null;
}

/// Finds a frame design from loose words ("put the address in the ribbon frame", "utepe").
NgmyCraftAddressFrame? ngmyFindCraftAddressFrame(String? words) {
  if (words == null) return null;
  final w = words.toLowerCase().trim();
  if (w.isEmpty) return null;
  final exact = ngmyCraftAddressFrameById(w);
  if (exact != null) return exact;
  for (final f in kNgmyCraftAddressFrames) {
    if (w.contains(f.name.toLowerCase())) return f;
  }
  // Named designs first, so "the ribbon frame" is never read as "no frame".
  for (final f in [...kNgmyCraftAddressFrames.skip(1), kNgmyCraftAddressFrames.first]) {
    for (final a in f.aliases) {
      if (RegExp('\\b${RegExp.escape(a)}\\b').hasMatch(w)) return f;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------------------------------------------
// Drawing. Everything in inches.
// ---------------------------------------------------------------------------------------------------------------

/// A word on the frame: top left x, y, the text, colour, size in points, bold (same shape as the stamp words).
typedef NgmyFrameNote = (double, double, String, int, double, bool);

class _Pen {
  final List<List<num>> fills = [];
  final List<NgmyFrameNote> notes = [];

  void poly(int c, List<Offset> pts) => fills.add([c, 0, for (final q in pts) ...[q.dx, q.dy]]);
  void rect(int c, double x, double y, double w, double h) => poly(c, [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x, y + h)]);
  void dots(int c, List<(double, double, double)> d) {
    if (d.isNotEmpty) fills.add([c, 1, for (final q in d) ...[q.$1, q.$2, q.$3]]);
  }

  /// A solid line [t] thick through [pts], with round joins (drawn as filled pieces, so it prints the same in
  /// every renderer).
  void line(int c, List<Offset> pts, double t, {bool close = false}) {
    final all = close ? [...pts, pts.first] : pts;
    for (var i = 0; i + 1 < all.length; i++) {
      final a = all[i];
      final b = all[i + 1];
      final d = b - a;
      if (d.distance < 1e-9) continue;
      final n = Offset(-d.dy, d.dx) / d.distance * (t / 2);
      poly(c, [a + n, b + n, b - n, a - n]);
    }
    dots(c, [for (final q in close ? pts : pts.sublist(1, math.max(1, pts.length - 1))) (q.dx, q.dy, t / 2)]);
  }

  void outline(int c, double x, double y, double w, double h, double t) =>
      line(c, [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x, y + h)], t, close: true);

  /// A word with its left edge at x, centred on cy.
  void wordLeft(String s, double x, double cy, int c, double pt, {bool bold = true}) {
    final h = pt / 72;
    notes.add((x, cy - h / 2, s, c, pt, bold));
  }

  /// A word centred on cx, cy.
  void word(String s, double cx, double cy, int c, double pt, {bool bold = true}) => wordLeft(s, cx - _wordW(s, pt, bold) / 2, cy, c, pt, bold: bold);
}

double _wordW(String s, double pt, bool bold) => s.length * pt * (bold ? 0.7 : 0.62) / 72;

List<Offset> _roundRect(double x, double y, double w, double h, double r) {
  final out = <Offset>[];
  void arc(double cx, double cy, double from) {
    for (var i = 0; i <= 6; i++) {
      final a = from + i * math.pi / 2 / 6;
      out.add(Offset(cx + r * math.cos(a), cy + r * math.sin(a)));
    }
  }

  arc(x + w - r, y + r, -math.pi / 2);
  arc(x + w - r, y + h - r, 0);
  arc(x + r, y + h - r, math.pi / 2);
  arc(x + r, y + r, math.pi);
  return out;
}

/// The header strip height of the frames that have one.
double _head(String id, bool from) => switch (id) {
      'tab' => from ? 0.17 : 0.21,
      'ribbon' => from ? 0.19 : 0.24,
      'postal' => from ? 0.17 : 0.21,
      'ngmy' => from ? 0.18 : 0.22,
      _ => 0,
    };

/// Where the words go inside the frame [id] drawn in the box x, y, w, h, and how they line up.
({Rect box, TextAlign align}) ngmyCraftAddressTextRect(String? id, double x, double y, double w, double h, {required bool from}) {
  final f = ngmyCraftAddressFrameById(id) ?? ngmyCraftAddressFrameById(kNgmyCraftDefaultAddressFrame)!;
  final hd = _head(f.id, from);
  final (l, t, r, b) = switch (f.id) {
    'none' => (0.06, 0.04, 0.06, 0.04),
    'rounded' => (0.16, 0.06, 0.14, 0.06),
    'double' => (0.18, 0.1, 0.18, 0.1),
    'tab' => (0.16, hd + 0.05, 0.14, 0.06),
    'ribbon' => (0.16, hd + 0.08, 0.16, 0.08),
    'brackets' => (0.18, 0.08, 0.18, 0.08),
    'postal' => (0.14, hd + 0.06, 0.12, 0.06),
    'elegant' => (0.14, 0.17, 0.14, 0.17),
    'bold' => (from ? 0.42 : 0.5, 0.06, 0.12, 0.06),
    'shadow' => (0.16, 0.08, 0.2, 0.12),
    'scallop' => (0.22, 0.14, 0.22, 0.14),
    'ngmy' => (0.14, hd + 0.05, 0.12, 0.06),
    _ => (0.1, 0.06, 0.1, 0.06),
  };
  return (box: Rect.fromLTWH(x + l, y + t, w - l - r, h - t - b), align: f.center ? TextAlign.center : TextAlign.left);
}

/// Draws the frame [id] in the box x, y, w, h ([from] is the smaller sender frame) with the colours [c] = ink,
/// main, soft, pale, accent.
({List<List<num>> fills, List<NgmyFrameNote> notes}) ngmyCraftAddressFrameDraw(String? id, double x, double y, double w, double h, List<int> c, {required bool from}) {
  final ink = c.isNotEmpty ? c[0] : 0xFF1F2937;
  final main = c.length > 1 ? c[1] : ink;
  const white = 0xFFFFFFFF;
  final k = _Pen();
  final fid = (ngmyCraftAddressFrameById(id) ?? ngmyCraftAddressFrameById(kNgmyCraftDefaultAddressFrame)!).id;
  final s = from ? 0.8 : 1.0;
  final label = from ? 'FROM' : 'TO';
  final lpt = from ? 5.5 : 6.5;
  final hd = _head(fid, from);
  final x1 = x + w;
  final y1 = y + h;
  switch (fid) {
    case 'none':
      break;
    case 'rounded':
      k.line(ink, _roundRect(x, y, w, h, 0.14 * s), 0.02 * s, close: true);
    case 'double':
      k.outline(ink, x, y, w, h, 0.026 * s);
      k.outline(ink, x + 0.055 * s, y + 0.055 * s, w - 0.11 * s, h - 0.11 * s, 0.01);
    case 'tab':
      final tw = _wordW(label, lpt, true) + 0.24;
      final rr = _roundRect(x + 0.12, y, tw, hd * 2, 0.06);
      k.poly(ink, [Offset(x + 0.12, y + hd), ...rr.sublist(21, 28), ...rr.sublist(0, 7), Offset(x + 0.12 + tw, y + hd)]);
      k.word(label, x + 0.12 + tw / 2, y + hd / 2 + 0.01, white, lpt);
      k.line(ink, _roundRect(x, y + hd, w, h - hd, 0.06), 0.018 * s, close: true);
    case 'ribbon':
      final drop = 0.05 * s;
      // The tails behind the band, cut in a V at the ends.
      for (final left in [true, false]) {
        final ox = left ? x : x1;
        final dir = left ? 1.0 : -1.0;
        k.poly(main, [
          Offset(ox, y + drop),
          Offset(ox + dir * 0.34, y + drop),
          Offset(ox + dir * 0.34, y + hd + drop),
          Offset(ox, y + hd + drop),
          Offset(ox + dir * 0.09, y + hd / 2 + drop),
        ]);
        k.poly(ink, [Offset(ox + dir * 0.22, y + hd), Offset(ox + dir * 0.34, y + hd), Offset(ox + dir * 0.34, y + hd + drop)]);
      }
      k.rect(ink, x + 0.22, y, w - 0.44, hd);
      k.word(label, x + w / 2, y + hd / 2 + 0.01, white, lpt);
      k.line(ink, [Offset(x + 0.22, y1 - 0.02), Offset(x1 - 0.22, y1 - 0.02)], 0.014 * s);
      k.line(ink, [Offset(x + 0.22, y + hd), Offset(x + 0.22, y1 - 0.02)], 0.01);
      k.line(ink, [Offset(x1 - 0.22, y + hd), Offset(x1 - 0.22, y1 - 0.02)], 0.01);
    case 'brackets':
      final arm = math.min(0.32 * s, math.min(w, h) * 0.3);
      final t = 0.032 * s;
      k.line(ink, [Offset(x, y + arm), Offset(x, y), Offset(x + arm, y)], t);
      k.line(ink, [Offset(x1 - arm, y), Offset(x1, y), Offset(x1, y + arm)], t);
      k.line(ink, [Offset(x1, y1 - arm), Offset(x1, y1), Offset(x1 - arm, y1)], t);
      k.line(ink, [Offset(x + arm, y1), Offset(x, y1), Offset(x, y1 - arm)], t);
    case 'postal':
      final r = 0.014 * s;
      const step = 0.055;
      final d = <(double, double, double)>[];
      final nx = (w / step).round();
      final ny = (h / step).round();
      for (var i = 0; i <= nx; i++) {
        d.add((x + w * i / nx, y, r));
        d.add((x + w * i / nx, y1, r));
      }
      for (var i = 1; i < ny; i++) {
        d.add((x, y + h * i / ny, r));
        d.add((x1, y + h * i / ny, r));
      }
      k.dots(ink, d);
      k.wordLeft(from ? 'RETURN ADDRESS' : 'DELIVER TO', x + 0.14, y + hd / 2 + 0.03, ink, lpt);
      k.line(ink, [Offset(x + 0.14, y + hd + 0.02), Offset(x1 - 0.14, y + hd + 0.02)], 0.01);
    case 'elegant':
      final cx = x + w / 2;
      final dd = 0.06 * s;
      for (final yy in [y + 0.07, y1 - 0.07]) {
        k.line(ink, [Offset(x + 0.08, yy), Offset(cx - dd * 2.4, yy)], 0.012 * s);
        k.line(ink, [Offset(cx + dd * 2.4, yy), Offset(x1 - 0.08, yy)], 0.012 * s);
        k.poly(ink, [Offset(cx, yy - dd), Offset(cx + dd * 1.4, yy), Offset(cx, yy + dd), Offset(cx - dd * 1.4, yy)]);
        k.dots(ink, [(x + 0.08, yy, 0.022 * s), (x1 - 0.08, yy, 0.022 * s)]);
      }
      k.dots(main, [(cx, y + 0.07, dd * 0.4), (cx, y1 - 0.07, dd * 0.4)]);
    case 'bold':
      final bw = from ? 0.3 : 0.38;
      k.rect(ink, x, y, bw, h);
      k.outline(ink, x, y, w, h, 0.02 * s);
      // The label reads down the block, one letter at a time.
      final step = lpt / 72 * 1.15;
      final top = y + h / 2 - step * (label.length - 1) / 2;
      for (var i = 0; i < label.length; i++) {
        k.word(label[i], x + bw / 2, top + i * step, white, lpt);
      }
    case 'shadow':
      const o = 0.07;
      k.rect(ink, x + o, y + o, w - o, h - o);
      k.rect(white, x, y, w - o, h - o);
      k.outline(ink, x, y, w - o, h - o, 0.022 * s);
    case 'scallop':
      // Little half circles all round, like the edge of a doily, with a thin line inside.
      final r = 0.05 * s;
      final d = <(double, double, double)>[];
      final nx = ((w - 2 * r) / (r * 1.9)).round();
      final ny = ((h - 2 * r) / (r * 1.9)).round();
      for (var i = 0; i <= nx; i++) {
        d.add((x + r + (w - 2 * r) * i / nx, y + r, r));
        d.add((x + r + (w - 2 * r) * i / nx, y1 - r, r));
      }
      for (var i = 1; i < ny; i++) {
        d.add((x + r, y + r + (h - 2 * r) * i / ny, r));
        d.add((x1 - r, y + r + (h - 2 * r) * i / ny, r));
      }
      k.dots(ink, d);
      k.rect(white, x + r, y + r, w - 2 * r, h - 2 * r);
      k.outline(ink, x + 2 * r + 0.02, y + 2 * r + 0.02, w - 4 * r - 0.04, h - 4 * r - 0.04, 0.01);
    case 'ngmy':
      k.outline(ink, x, y, w, h, 0.02 * s);
      k.rect(ink, x, y, w, hd);
      k.wordLeft('NGMY', x + 0.12, y + hd / 2 + 0.01, white, lpt + 1);
      k.word(label, x1 - 0.12 - _wordW(label, lpt, true) / 2, y + hd / 2 + 0.01, white, lpt);
      k.dots(main, [(x + 0.12 + _wordW('NGMY', lpt + 1, true) + 0.08, y + hd / 2, 0.025 * s)]);
  }
  return (fills: k.fills, notes: k.notes);
}

// ---------------------------------------------------------------------------------------------------------------
// The deck: which frame it has, and changing it.
// ---------------------------------------------------------------------------------------------------------------

Map<String, dynamic>? _spec(NgmySlideElement e) {
  try {
    final m = jsonDecode(e.text);
    return m is Map<String, dynamic> ? m : null;
  } catch (_) {
    return null;
  }
}

/// True for the recipient or sender words of an address frame.
bool ngmyIsCraftAddressText(NgmySlideElement e) => e.type == NgmySlideElementType.text && (e.id.startsWith(kNgmyCraftToPrefix) || e.id.startsWith(kNgmyCraftFromPrefix));

/// True when some page of [deck] has address frames (envelopes and postcards).
bool ngmyDeckHasAddressFrames(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      if (_spec(e)?['af'] is Map) return true;
    }
  }
  return false;
}

/// The address frame design of [deck].
String ngmyCraftAddressFrameOf(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      final af = _spec(e)?['af'];
      if (af is Map) return ngmyCraftAddressFrameById(af['id']?.toString())?.id ?? kNgmyCraftDefaultAddressFrame;
    }
  }
  return kNgmyCraftDefaultAddressFrame;
}

/// Puts the words of each frame on [slide] neatly inside it for the frame design [id].
void ngmyLayoutCraftAddressText(NgmySlide slide, String id, List<List<double>> boxes) {
  final used = <NgmySlideElement>{};
  for (final b in boxes) {
    if (b.length < 5) continue;
    final from = b[4] == 1;
    final prefix = from ? kNgmyCraftFromPrefix : kNgmyCraftToPrefix;
    final cx = (b[0] + b[2] / 2) / kNgmyCraftPageW;
    final cy = (b[1] + b[3] / 2) / kNgmyCraftPageH;
    NgmySlideElement? best;
    var bestD = double.infinity;
    for (final e in slide.elements) {
      if (e.type != NgmySlideElementType.text || !e.id.startsWith(prefix) || used.contains(e)) continue;
      final d = math.pow(e.x + e.w / 2 - cx, 2) + math.pow(e.y + e.h / 2 - cy, 2);
      if (d < bestD) {
        bestD = d.toDouble();
        best = e;
      }
    }
    if (best == null) continue;
    used.add(best);
    final r = ngmyCraftAddressTextRect(id, b[0], b[1], b[2], b[3], from: from);
    best
      ..x = r.box.left / kNgmyCraftPageW
      ..y = r.box.top / kNgmyCraftPageH
      ..w = r.box.width / kNgmyCraftPageW
      ..h = r.box.height / kNgmyCraftPageH
      ..align = r.align
      ..rotation = 0;
  }
}

/// Puts the frame design [id] around every address on [deck] and lines the words up inside it. Returns true when
/// something changed.
bool ngmyApplyCraftAddressFrame(NgmySlideDeck deck, String id) {
  final frame = ngmyCraftAddressFrameById(id);
  if (frame == null) return false;
  var changed = false;
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines).toList()) {
      final spec = _spec(e);
      final af = spec?['af'];
      if (spec == null || af is! Map) continue;
      if (af['id'] == frame.id) continue;
      af['id'] = frame.id;
      e.text = jsonEncode(spec);
      final boxes = [
        for (final b in (af['b'] as List? ?? const [])) [for (final v in b as List) (v as num).toDouble()],
      ];
      ngmyLayoutCraftAddressText(s, frame.id, boxes);
      changed = true;
    }
  }
  return changed;
}

/// The frame designs with their ids, for the AI.
String ngmyCraftAddressFrameCatalog() => kNgmyCraftAddressFrames.map((f) => '${f.id} (${f.name})').join(', ');

// ---------------------------------------------------------------------------------------------------------------
// The frame button and chooser.
// ---------------------------------------------------------------------------------------------------------------

/// A small picture of the frame [id], with grey bars where the name and address go.
class NgmyCraftAddressFramePreview extends StatelessWidget {
  const NgmyCraftAddressFramePreview({super.key, required this.id, required this.colors});
  final String id;
  final List<int> colors;

  @override
  Widget build(BuildContext context) {
    const bx = 0.12, by = 0.14, bw = 2.2, bh = 1.25;
    final r = ngmyCraftAddressTextRect(id, bx, by, bw, bh, from: false);
    const lineH = 0.2;
    final lens = [0.62, 0.9, 0.75];
    final top = r.box.center.dy - lineH * 1.5;
    final bars = <List<num>>[
      for (var i = 0; i < 3; i++)
        () {
          final lw = r.box.width * lens[i];
          final lx = r.align == TextAlign.center ? r.box.center.dx - lw / 2 : r.box.left;
          final ly = top + i * lineH + 0.05;
          return <num>[0xFF9CA3AF, 0, lx, ly, lx + lw, ly, lx + lw, ly + 0.09, lx, ly + 0.09];
        }(),
    ];
    final spec = jsonEncode({
      'W': bw + 2 * bx,
      'H': bh + 2 * by,
      'f': [],
      'af': {
        'id': id,
        'b': [
          [bx, by, bw, bh, 0],
        ],
        'c': colors,
      },
    });
    // The grey lines go on top, as the words do on the page.
    final words = jsonEncode({'W': bw + 2 * bx, 'H': bh + 2 * by, 'f': bars});
    return AspectRatio(
      aspectRatio: (bw + 2 * bx) / (bh + 2 * by),
      child: Stack(fit: StackFit.expand, children: [CustomPaint(painter: _FramePainter(spec)), CustomPaint(painter: _FramePainter(words))]),
    );
  }
}

class _FramePainter extends CustomPainter {
  _FramePainter(this.spec);
  final String spec;
  @override
  void paint(Canvas canvas, Size size) => ngmyPaintCraftLines(canvas, size, spec);
  @override
  bool shouldRepaint(_FramePainter old) => old.spec != spec;
}

/// The colours the frames are drawn in on [deck].
List<int> ngmyCraftAddressFrameColors(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      final af = _spec(e)?['af'];
      if (af is Map && af['c'] is List) return [for (final v in af['c'] as List) (v as num).toInt()];
    }
  }
  final p = ngmyPaperCraftOfDeck(deck)?.palette ?? kNgmyCraftPalettes.first;
  return [p.ink, p.main, p.soft, p.pale, p.accent];
}

/// The round frame button beside the AI, watermark and stamp buttons (designs with addresses only).
class NgmyCraftAddressFrameButton extends StatelessWidget {
  const NgmyCraftAddressFrameButton({super.key, required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Address frame',
      child: Material(
        color: Colors.transparent,
        shape: const CircleBorder(),
        child: InkWell(
          key: const ValueKey('craft_frame_button'),
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.white,
              border: Border.all(color: const Color(0xFF14B87A), width: 2),
              boxShadow: [BoxShadow(color: const Color(0xFF14B87A).withValues(alpha: 0.3), blurRadius: 10)],
            ),
            child: const Icon(Icons.contact_mail_outlined, color: Color(0xFF0E9F6A), size: 20),
          ),
        ),
      ),
    );
  }
}

/// The frame chooser, a centred card: every design as a small picture, three to a row; tapping one puts it on the
/// deck at once.
Future<void> showNgmyCraftAddressFramePanel(BuildContext context, {required NgmySlideDeck Function() deck, required void Function(String id) onApply}) {
  return showNgmyCraftDialog<void>(context, builder: (_) => _FramePanel(deck: deck, onApply: onApply));
}

class _FramePanel extends StatefulWidget {
  const _FramePanel({required this.deck, required this.onApply});
  final NgmySlideDeck Function() deck;
  final void Function(String id) onApply;

  @override
  State<_FramePanel> createState() => _FramePanelState();
}

class _FramePanelState extends State<_FramePanel> {
  late String _id = ngmyCraftAddressFrameOf(widget.deck());

  @override
  Widget build(BuildContext context) {
    final colors = ngmyCraftAddressFrameColors(widget.deck());
    return NgmyCraftDialogCard(
      title: 'Address frame',
      subtitle: 'A neat frame for the name and address and for the sender. The words line up inside it.',
      icon: Icons.contact_mail_outlined,
      child: NgmyCraftChoiceGrid(
        count: kNgmyCraftAddressFrames.length,
        aspect: 1.12,
        builder: (i) {
          final f = kNgmyCraftAddressFrames[i];
          return NgmyCraftChoiceTile(
            key: ValueKey('craft_frame_${f.id}'),
            selected: f.id == _id,
            label: f.name,
            onTap: () {
              setState(() => _id = f.id);
              widget.onApply(f.id);
            },
            child: Center(child: NgmyCraftAddressFramePreview(id: f.id, colors: colors)),
          );
        },
      ),
    );
  }
}
