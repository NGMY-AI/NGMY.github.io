import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_paper_crafts.dart';
import 'ngmy_slides_models.dart';

/// NGMY stamp designs for the stamp box on Fold & Cut envelopes and postcards.
///
/// A design is drawn inside each stamp box when the page is painted, printed or saved as PDF, from the deck stamp
/// choice kept in the lines layer ("st": {"id", "b": boxes, "c": colours}). Every design is made to print clearly
/// and darkly on a home printer: dark grounds, bold words, no faint greys. "Plain box" is the PLACE STAMP HERE box.

const String kNgmyCraftDefaultStamp = 'plain';

class NgmyCraftStamp {
  const NgmyCraftStamp(this.id, this.name, this.icon, {this.aliases = const []});
  final String id;
  final String name;
  final IconData icon;

  /// Other words people use for it (English and Swahili), for the AI and search.
  final List<String> aliases;
}

const List<NgmyCraftStamp> kNgmyCraftStamps = [
  NgmyCraftStamp('plain', 'Plain box', Icons.crop_portrait_rounded, aliases: ['plain', 'box', 'empty', 'place stamp here', 'none', 'kawaida']),
  NgmyCraftStamp('classic', 'Classic', Icons.local_post_office_outlined, aliases: ['classic', 'perforated', 'normal stamp', 'asili']),
  NgmyCraftStamp('postmark', 'Round postmark', Icons.radio_button_checked_rounded, aliases: ['postmark', 'round', 'circle', 'cancel', 'mviringo']),
  NgmyCraftStamp('crown', 'Crown', Icons.workspace_premium_outlined, aliases: ['crown', 'royal', 'king', 'queen', 'taji']),
  NgmyCraftStamp('stripes', 'Flag stripes', Icons.flag_outlined, aliases: ['flag', 'stripes', 'bands', 'bendera', 'mistari']),
  NgmyCraftStamp('monogram', 'Monogram', Icons.text_fields_rounded, aliases: ['monogram', 'letter', 'minimal', 'simple', 'herufi']),
  NgmyCraftStamp('vintage', 'Vintage engraved', Icons.filter_vintage_outlined, aliases: ['vintage', 'engraved', 'old', 'retro', 'antique', 'zamani']),
  NgmyCraftStamp('heart', 'Heart', Icons.favorite_border_rounded, aliases: ['heart', 'love', 'valentine', 'moyo', 'upendo']),
  NgmyCraftStamp('holiday', 'Holiday star', Icons.star_border_rounded, aliases: ['holiday', 'christmas', 'star', 'festive', 'sikukuu', 'nyota']),
  NgmyCraftStamp('airmail', 'Air mail', Icons.flight_takeoff_rounded, aliases: ['air mail', 'airmail', 'plane', 'border', 'ndege']),
  NgmyCraftStamp('nature', 'Leaf', Icons.eco_outlined, aliases: ['leaf', 'nature', 'green', 'plant', 'jani']),
  NgmyCraftStamp('sunrise', 'Sunrise', Icons.wb_twilight_rounded, aliases: ['sun', 'sunrise', 'sunset', 'jua', 'mawio']),
];

NgmyCraftStamp? ngmyCraftStampById(String? id) {
  if (id == null) return null;
  for (final s in kNgmyCraftStamps) {
    if (s.id == id) return s;
  }
  return null;
}

/// Finds a stamp design from loose words ("the crown one", "air mail", "moyo").
NgmyCraftStamp? ngmyFindCraftStamp(String? words) {
  if (words == null) return null;
  final w = words.toLowerCase().trim();
  if (w.isEmpty) return null;
  final exact = ngmyCraftStampById(w);
  if (exact != null) return exact;
  for (final s in kNgmyCraftStamps) {
    if (w.contains(s.name.toLowerCase())) return s;
  }
  for (final s in kNgmyCraftStamps) {
    for (final a in s.aliases) {
      if (RegExp('\\b${RegExp.escape(a)}\\b').hasMatch(w)) return s;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------------------------------------------
// Drawing. Everything in inches, inside the box x, y, w, h.
// ---------------------------------------------------------------------------------------------------------------

/// A word on the stamp: top left x, y, the text, colour, size in points, bold.
typedef NgmyStampNote = (double, double, String, int, double, bool);

class _Ink {
  final List<List<num>> fills = [];
  final List<NgmyStampNote> notes = [];

  void poly(int c, List<Offset> pts) => fills.add([c, 0, for (final q in pts) ...[q.dx, q.dy]]);
  void rect(int c, double x, double y, double w, double h) => poly(c, [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x, y + h)]);
  void dots(int c, List<(double, double, double)> d) {
    if (d.isNotEmpty) fills.add([c, 1, for (final q in d) ...[q.$1, q.$2, q.$3]]);
  }

  void circle(int c, double cx, double cy, double r) => dots(c, [(cx, cy, r)]);

  /// A frame of [t] thickness just inside x, y, w, h.
  void frame(int c, double x, double y, double w, double h, double t) {
    rect(c, x, y, w, t);
    rect(c, x, y + h - t, w, t);
    rect(c, x, y, t, h);
    rect(c, x + w - t, y, t, h);
  }

  /// A word centred on cx, cy.
  void word(String s, double cx, double cy, int c, double pt, {bool bold = true}) {
    final w = s.length * pt * (bold ? 0.7 : 0.62) / 72;
    final h = pt / 72;
    notes.add((cx - w / 2, cy - h / 2, s, c, pt, bold));
  }

  /// The paper edge of a real stamp: little bites out of the border all round (painted in white).
  void perforate(double x, double y, double w, double h, {double r = 0.03, double step = 0.085}) {
    final d = <(double, double, double)>[];
    final nx = (w / step).round();
    final ny = (h / step).round();
    for (var i = 0; i <= nx; i++) {
      d.add((x + w * i / nx, y, r));
      d.add((x + w * i / nx, y + h, r));
    }
    for (var i = 1; i < ny; i++) {
      d.add((x, y + h * i / ny, r));
      d.add((x + w, y + h * i / ny, r));
    }
    dots(0xFFFFFFFF, d);
  }
}

List<Offset> _star(double cx, double cy, double r1, double r2, int points, {double turn = -math.pi / 2}) => [
      for (var i = 0; i < points * 2; i++)
        Offset(cx + (i.isEven ? r1 : r2) * math.cos(turn + i * math.pi / points), cy + (i.isEven ? r1 : r2) * math.sin(turn + i * math.pi / points)),
    ];

List<Offset> _heart(double cx, double cy, double s) => [
      for (var i = 0; i < 48; i++)
        () {
          final t = i / 48 * 2 * math.pi;
          final x = 16 * math.pow(math.sin(t), 3);
          final y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t);
          return Offset(cx + x * s / 34, cy - y * s / 34);
        }(),
    ];

List<Offset> _box(double x, double y, double w, double h) => [Offset(x, y), Offset(x + w, y), Offset(x + w, y + h), Offset(x, y + h)];

/// The part of [subject] inside the convex [clip] (both listed the same way round).
List<Offset> _clip(List<Offset> subject, List<Offset> clip) {
  var out = subject;
  for (var i = 0; i < clip.length && out.isNotEmpty; i++) {
    final a = clip[i];
    final b = clip[(i + 1) % clip.length];
    double side(Offset q) => (b.dx - a.dx) * (q.dy - a.dy) - (b.dy - a.dy) * (q.dx - a.dx);
    final input = out;
    out = [];
    for (var j = 0; j < input.length; j++) {
      final p = input[j];
      final q = input[(j + 1) % input.length];
      final sp = side(p), sq = side(q);
      if (sp >= 0) out.add(p);
      if ((sp >= 0) != (sq >= 0)) out.add(p + (q - p) * (sp / (sp - sq)));
    }
  }
  return out;
}

/// A wavy line as a thin band, for postmark cancel lines.
List<Offset> _wave(double x, double y, double w, double amp, double t) {
  final top = <Offset>[];
  final bottom = <Offset>[];
  for (var i = 0; i <= 24; i++) {
    final xx = x + w * i / 24;
    final yy = y + amp * math.sin(i / 24 * 4 * math.pi);
    top.add(Offset(xx, yy - t / 2));
    bottom.add(Offset(xx, yy + t / 2));
  }
  return [...top, ...bottom.reversed];
}

/// Draws the stamp design [id] in the box x, y, w, h with the colours [c] = ink, main, soft, pale, accent.
({List<List<num>> fills, List<NgmyStampNote> notes}) ngmyCraftStampDraw(String? id, double x, double y, double w, double h, List<int> c) {
  final ink = c.isNotEmpty ? c[0] : 0xFF1F2937;
  final main = c.length > 1 ? c[1] : ink;
  final soft = c.length > 2 ? c[2] : 0xFFE5E7EB;
  final pale = c.length > 3 ? c[3] : 0xFFF9FAFB;
  final accent = c.length > 4 ? c[4] : main;
  const white = 0xFFFFFFFF;
  final k = _Ink();
  final cx = x + w / 2;
  final cy = y + h / 2;
  // Inside of a perforated stamp: the paper edge, then the picture.
  final ix = x + 0.07, iy = y + 0.07, iw = w - 0.14, ih = h - 0.14;
  void paperEdge(int ground) {
    k.rect(white, x, y, w, h);
    k.rect(ink, x + 0.012, y + 0.012, w - 0.024, h - 0.024);
    k.rect(white, x + 0.035, y + 0.035, w - 0.07, h - 0.07);
    k.perforate(x + 0.012, y + 0.012, w - 0.024, h - 0.024);
    k.rect(ground, ix, iy, iw, ih);
  }

  switch (ngmyCraftStampById(id)?.id ?? kNgmyCraftDefaultStamp) {
    case 'classic':
      paperEdge(main);
      k.frame(pale, ix + 0.04, iy + 0.04, iw - 0.08, ih - 0.08, 0.012);
      k.word('1', ix + 0.11, iy + 0.12, pale, 8);
      k.word('NGMY', cx, cy - 0.02, white, 12);
      k.rect(pale, cx - 0.16, cy + 0.11, 0.32, 0.012);
      k.word('POST', cx, cy + 0.2, pale, 6.5);
    case 'postmark':
      k.rect(white, x, y, w, h);
      for (var i = 0; i < 4; i++) {
        k.poly(ink, _wave(x + 0.02, y + 0.1 + i * 0.07, w - 0.04, 0.02, 0.014));
      }
      final r = math.min(w, h) * 0.36;
      final py = cy + 0.1;
      k.circle(ink, cx, py, r);
      k.circle(white, cx, py, r - 0.035);
      k.circle(ink, cx, py, r - 0.065);
      k.circle(white, cx, py, r - 0.085);
      k.word('NGMY', cx, py - 0.03, ink, 9.5);
      k.word('POST', cx, py + 0.1, ink, 6);
      k.dots(ink, [(cx - r + 0.12, py + 0.1, 0.012), (cx + r - 0.12, py + 0.1, 0.012)]);
    case 'crown':
      paperEdge(ink);
      final top = iy + 0.1;
      final cw = iw * 0.62;
      final cl = cx - cw / 2;
      k.poly(accent, [
        Offset(cl, top + 0.24),
        Offset(cl, top + 0.06),
        Offset(cl + cw * 0.22, top + 0.15),
        Offset(cx, top),
        Offset(cl + cw * 0.78, top + 0.15),
        Offset(cl + cw, top + 0.06),
        Offset(cl + cw, top + 0.24),
      ]);
      k.rect(accent, cl, top + 0.26, cw, 0.04);
      k.dots(pale, [(cl, top + 0.05, 0.022), (cx, top - 0.005, 0.025), (cl + cw, top + 0.05, 0.022)]);
      k.word('NGMY', cx, cy + 0.12, white, 11);
      k.word('ROYAL', cx, cy + 0.25, pale, 6);
    case 'stripes':
      paperEdge(ink);
      final band = ih / 3;
      k.rect(main, ix, iy, iw, band);
      k.rect(white, ix, iy + band, iw, band);
      k.rect(accent, ix, iy + 2 * band, iw, band);
      k.rect(ink, ix, iy + band - 0.012, iw, 0.024);
      k.rect(ink, ix, iy + 2 * band - 0.012, iw, 0.024);
      k.word('NGMY', cx, iy + band * 1.5, ink, 11);
    case 'monogram':
      k.rect(white, x, y, w, h);
      k.frame(ink, x, y, w, h, 0.04);
      k.frame(ink, x + 0.07, y + 0.07, w - 0.14, h - 0.14, 0.012);
      k.circle(main, cx, cy - 0.06, math.min(iw, ih) * 0.36);
      k.circle(ink, cx, cy - 0.06, math.min(iw, ih) * 0.36 - 0.02);
      k.word('N', cx, cy - 0.06, white, 20);
      k.word('NGMY', cx, y + h - 0.16, ink, 7.5);
    case 'vintage':
      paperEdge(ink);
      k.frame(pale, ix + 0.03, iy + 0.03, iw - 0.06, ih - 0.06, 0.01);
      k.frame(pale, ix + 0.055, iy + 0.055, iw - 0.11, ih - 0.11, 0.006);
      for (final (px, py) in [(ix + 0.055, iy + 0.055), (ix + iw - 0.055, iy + 0.055), (ix + 0.055, iy + ih - 0.055), (ix + iw - 0.055, iy + ih - 0.055)]) {
        k.poly(accent, [Offset(px, py - 0.035), Offset(px + 0.035, py), Offset(px, py + 0.035), Offset(px - 0.035, py)]);
      }
      final ry = ih * 0.28;
      final rx = iw * 0.3;
      k.poly(pale, [for (var i = 0; i < 40; i++) Offset(cx + rx * math.cos(i / 40 * 2 * math.pi), cy + ry * math.sin(i / 40 * 2 * math.pi))]);
      k.word('NGMY', cx, cy, ink, 9.5);
      k.word('POSTAGE', cx, iy + 0.13, pale, 5.5);
      k.word('ONE', cx, iy + ih - 0.13, pale, 5.5);
    case 'heart':
      paperEdge(main);
      k.poly(white, _heart(cx, cy - 0.06, 0.42));
      k.poly(accent, _heart(cx, cy - 0.06, 0.32));
      k.word('NGMY', cx, cy + 0.22, white, 9.5);
    case 'holiday':
      paperEdge(ink);
      k.poly(accent, _star(cx, cy - 0.07, 0.19, 0.08, 5));
      k.dots(pale, [
        (ix + 0.08, iy + 0.1, 0.014),
        (ix + iw - 0.09, iy + 0.14, 0.012),
        (ix + 0.12, iy + 0.36, 0.01),
        (ix + iw - 0.1, iy + 0.4, 0.014),
        (cx - 0.02, iy + 0.06, 0.01),
      ]);
      k.word('NGMY', cx, cy + 0.17, white, 9.5);
      k.word('HOLIDAYS', cx, cy + 0.28, pale, 5.5);
    case 'airmail':
      k.rect(white, x, y, w, h);
      // A band of slanted stripes all round, like an air mail envelope: each stripe is cut to the four sides.
      const t = 0.07;
      const s = 0.1;
      final sides = [
        _box(x, y, w, t),
        _box(x, y + h - t, w, t),
        _box(x, y + t, t, h - 2 * t),
        _box(x + w - t, y + t, t, h - 2 * t),
      ];
      var n = 0;
      for (var p = 0.0; p < w + h; p += s / 2, n++) {
        final stripe = [Offset(x + p, y), Offset(x + p + s / 2, y), Offset(x + p + s / 2 - h, y + h), Offset(x + p - h, y + h)];
        for (final side in sides) {
          final part = _clip(stripe, side);
          if (part.length >= 3) k.poly(n.isEven ? main : accent, part);
        }
      }
      k.frame(ink, x, y, w, h, 0.012);
      k.frame(ink, x + t, y + t, w - 2 * t, h - 2 * t, 0.01);
      k.word('NGMY', cx, cy - 0.06, ink, 11);
      k.word('AIR MAIL', cx, cy + 0.1, main, 6.5);
    case 'nature':
      paperEdge(main);
      final leaf = [
        for (var i = 0; i <= 20; i++) Offset(cx - 0.17 + 0.34 * i / 20, cy - 0.06 - 0.13 * math.sin(i / 20 * math.pi)),
        for (var i = 20; i >= 0; i--) Offset(cx - 0.17 + 0.34 * i / 20, cy - 0.06 + 0.13 * math.sin(i / 20 * math.pi)),
      ];
      k.poly(white, leaf);
      k.rect(main, cx - 0.17, cy - 0.066, 0.34, 0.012);
      k.word('NGMY', cx, cy + 0.2, white, 9.5);
    case 'sunrise':
      paperEdge(ink);
      final hy = cy + 0.06;
      for (var i = 0; i < 9; i++) {
        final a = math.pi + (i + 0.5) * math.pi / 9;
        k.poly(accent, [
          Offset(cx, hy),
          Offset(cx + 0.3 * math.cos(a - 0.08), hy + 0.3 * math.sin(a - 0.08)),
          Offset(cx + 0.3 * math.cos(a + 0.08), hy + 0.3 * math.sin(a + 0.08)),
        ]);
      }
      k.poly(soft, [for (var i = 0; i <= 20; i++) Offset(cx + 0.14 * math.cos(math.pi + i / 20 * math.pi), hy + 0.14 * math.sin(math.pi + i / 20 * math.pi))]);
      k.rect(ink, ix, hy, iw, ih - (hy - iy));
      k.rect(pale, ix + 0.04, hy, iw - 0.08, 0.014);
      k.word('NGMY', cx, hy + 0.13, white, 9.5);
    default:
      // Plain: a dark frame, a white inside with a dashed stamp edge, and bold PLACE STAMP HERE.
      const b = 0.028;
      k.rect(ink, x, y, w, h);
      k.rect(white, x + b, y + b, w - 2 * b, h - 2 * b);
      for (var xx = x + 0.07; xx + 0.03 <= x + w - 0.07; xx += 0.06) {
        k.rect(ink, xx, y + 0.07, 0.03, 0.012);
        k.rect(ink, xx, y + h - 0.082, 0.03, 0.012);
      }
      for (var yy = y + 0.07; yy + 0.03 <= y + h - 0.07; yy += 0.06) {
        k.rect(ink, x + 0.07, yy, 0.012, 0.03);
        k.rect(ink, x + w - 0.082, yy, 0.012, 0.03);
      }
      k.word('PLACE', cx, cy - 0.14, ink, 7.5);
      k.word('STAMP', cx, cy, ink, 7.5);
      k.word('HERE', cx, cy + 0.14, ink, 7.5);
  }
  return (fills: k.fills, notes: k.notes);
}

// ---------------------------------------------------------------------------------------------------------------
// The deck: which stamp it has, and changing it.
// ---------------------------------------------------------------------------------------------------------------

Map<String, dynamic>? _spec(NgmySlideElement e) {
  try {
    final m = jsonDecode(e.text);
    return m is Map<String, dynamic> ? m : null;
  } catch (_) {
    return null;
  }
}

/// True when some page of [deck] has a stamp box (envelopes and postcards).
bool ngmyDeckHasStampBox(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      if (_spec(e)?['st'] is Map) return true;
    }
  }
  return false;
}

/// The stamp design of [deck] (plain when it has none chosen).
String ngmyCraftStampOf(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      final st = _spec(e)?['st'];
      if (st is Map) return ngmyCraftStampById(st['id']?.toString())?.id ?? kNgmyCraftDefaultStamp;
    }
  }
  return kNgmyCraftDefaultStamp;
}

/// Puts the stamp design [id] in every stamp box of [deck]. Returns true when something changed.
bool ngmyApplyCraftStamp(NgmySlideDeck deck, String id) {
  final stamp = ngmyCraftStampById(id);
  if (stamp == null) return false;
  var changed = false;
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      final spec = _spec(e);
      final st = spec?['st'];
      if (spec == null || st is! Map) continue;
      if (st['id'] == stamp.id) continue;
      st['id'] = stamp.id;
      e.text = jsonEncode(spec);
      changed = true;
    }
  }
  return changed;
}

/// The stamp designs with their ids, for the AI.
String ngmyCraftStampCatalog() => kNgmyCraftStamps.map((s) => '${s.id} (${s.name})').join(', ');

// ---------------------------------------------------------------------------------------------------------------
// The stamp button and chooser.
// ---------------------------------------------------------------------------------------------------------------

/// A small picture of the stamp design [id] in the colours of [deck].
class NgmyCraftStampPreview extends StatelessWidget {
  const NgmyCraftStampPreview({super.key, required this.id, required this.colors});
  final String id;
  final List<int> colors;

  @override
  Widget build(BuildContext context) {
    final spec = jsonEncode({
      'W': 0.95,
      'H': 1.08,
      'f': [],
      'st': {
        'id': id,
        'b': [
          [0.1, 0.1, 0.75, 0.88],
        ],
        'c': colors,
      },
    });
    return AspectRatio(aspectRatio: 0.95 / 1.08, child: CustomPaint(painter: _StampPainter(spec)));
  }
}

class _StampPainter extends CustomPainter {
  _StampPainter(this.spec);
  final String spec;
  @override
  void paint(Canvas canvas, Size size) => ngmyPaintCraftLines(canvas, size, spec);
  @override
  bool shouldRepaint(_StampPainter old) => old.spec != spec;
}

/// The colours the stamp is drawn in on [deck].
List<int> ngmyCraftStampColors(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements.where(ngmyIsCraftLines)) {
      final st = _spec(e)?['st'];
      if (st is Map && st['c'] is List) return [for (final v in st['c'] as List) (v as num).toInt()];
    }
  }
  final p = ngmyPaperCraftOfDeck(deck)?.palette ?? kNgmyCraftPalettes.first;
  return [p.ink, p.main, p.soft, p.pale, p.accent];
}

/// The round stamp button that sits beside the AI and watermark buttons (envelopes and postcards only).
class NgmyCraftStampButton extends StatelessWidget {
  const NgmyCraftStampButton({super.key, required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Stamp design',
      child: Material(
        color: Colors.transparent,
        shape: const CircleBorder(),
        child: InkWell(
          key: const ValueKey('craft_stamp_button'),
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
            child: const Icon(Icons.local_post_office_outlined, color: Color(0xFF0E9F6A), size: 20),
          ),
        ),
      ),
    );
  }
}

/// The stamp chooser: every design as a small picture; tapping one puts it on the deck at once.
Future<void> showNgmyCraftStampPanel(BuildContext context, {required NgmySlideDeck Function() deck, required void Function(String id) onApply}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Theme.of(context).colorScheme.surface,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
    builder: (context) => _StampPanel(deck: deck, onApply: onApply),
  );
}

class _StampPanel extends StatefulWidget {
  const _StampPanel({required this.deck, required this.onApply});
  final NgmySlideDeck Function() deck;
  final void Function(String id) onApply;

  @override
  State<_StampPanel> createState() => _StampPanelState();
}

class _StampPanelState extends State<_StampPanel> {
  late String _id = ngmyCraftStampOf(widget.deck());

  @override
  Widget build(BuildContext context) {
    final colors = ngmyCraftStampColors(widget.deck());
    final dark = Theme.of(context).brightness == Brightness.dark;
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: Container(width: 36, height: 4, decoration: BoxDecoration(color: Colors.grey.withValues(alpha: 0.4), borderRadius: BorderRadius.circular(2))),
            ),
            const SizedBox(height: 10),
            const Text('Stamp', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700)),
            const SizedBox(height: 2),
            Text('NGMY stamp designs for the stamp box. They print dark and clear.', style: TextStyle(fontSize: 12.5, color: dark ? Colors.white70 : Colors.black54)),
            const SizedBox(height: 12),
            ConstrainedBox(
              constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.55),
              child: GridView.builder(
                shrinkWrap: true,
                gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 104, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 0.72),
                itemCount: kNgmyCraftStamps.length,
                itemBuilder: (context, i) {
                  final s = kNgmyCraftStamps[i];
                  final on = s.id == _id;
                  return InkWell(
                    key: ValueKey('craft_stamp_${s.id}'),
                    borderRadius: BorderRadius.circular(12),
                    onTap: () {
                      setState(() => _id = s.id);
                      widget.onApply(s.id);
                    },
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: on ? const Color(0xFF14B87A) : Colors.grey.withValues(alpha: 0.3), width: on ? 2.5 : 1),
                      ),
                      child: Column(
                        children: [
                          Expanded(child: NgmyCraftStampPreview(id: s.id, colors: colors)),
                          const SizedBox(height: 4),
                          Text(s.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 11, color: Colors.black87, fontWeight: FontWeight.w600)),
                        ],
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
