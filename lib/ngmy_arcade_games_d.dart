import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_banks.dart';
import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Arcade games 31–40: puzzles and brain teasers.
Widget? ngmyBuildArcadeGameD(String id, NgmyArcadeArgs a) {
  // Loads the remembered question decks while the game screen opens.
  NgmyQuestionDeck.warmUp();
  switch (id) {
    case 'pipe_flow':
      return PipeFlowGame(args: a);
    case 'color_flood':
      return ColorFloodGame(args: a);
    case 'hanoi_tower':
      return HanoiTowerGame(args: a);
    case 'emoji_riddle':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFFF59E0B), Color(0xFF9A3412)], hint: 'Guess the phrase', optionFontSize: 16, make: _emojiRiddle);
    case 'bigger_sum':
      return ArcadeQuiz(args: a, goal: 15, colors: const [Color(0xFF10B981), Color(0xFF065F46)], hint: 'Which is bigger?', make: _biggerSum);
    case 'true_false':
      return ArcadeQuiz(args: a, goal: 12, colors: const [Color(0xFF3B82F6), Color(0xFF1E3A8A)], hint: 'True or false', make: _trueFalse);
    case 'capital_quiz':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFF8B5CF6), Color(0xFF4C1D95)], hint: 'Name the capital', make: _capital);
    case 'clock_reader':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFF14B8A6), Color(0xFF134E4A)], hint: 'What time is it?', make: _clock);
    case 'quick_count':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFFEC4899), Color(0xFF831843)], hint: 'How many dots?', make: _quickCount);
    case 'shell_game':
      return ShellGame(args: a);
  }
  return null;
}

// 31 ── Pipe Flow ────────────────────────────────────────────────────────────
// Bits: 1 = up, 2 = right, 4 = down, 8 = left.
int _rotCw(int m) => ((m << 1) | (m >> 3)) & 15;

class _PipeBoard {
  _PipeBoard(this.n, math.Random r) {
    masks = List.filled(n * n, 0);
    need = List.filled(n * n, 0);
    // Random monotone path from the left edge to the right edge.
    var row = r.nextInt(n);
    start = row;
    final path = <int>[];
    for (var col = 0; col < n; col++) {
      path.add(row * n + col);
      if (col < n - 1 && r.nextDouble() < 0.6) {
        final target = r.nextInt(n);
        while (row != target) {
          row += target > row ? 1 : -1;
          path.add(row * n + col);
        }
      }
    }
    end = row;
    for (var i = 0; i < path.length; i++) {
      var m = 0;
      final cell = path[i];
      int dirTo(int other) {
        final dr = other ~/ n - cell ~/ n, dc = other % n - cell % n;
        if (dr == -1) return 1;
        if (dc == 1) return 2;
        if (dr == 1) return 4;
        return 8;
      }

      m |= i == 0 ? 8 : dirTo(path[i - 1]);
      m |= i == path.length - 1 ? 2 : dirTo(path[i + 1]);
      need[cell] = m;
    }
    pathCells = path;
    for (var i = 0; i < n * n; i++) {
      var m = need[i] != 0 ? need[i] : (r.nextBool() ? 5 : 3);
      for (var k = r.nextInt(4); k > 0; k--) {
        m = _rotCw(m);
      }
      masks[i] = m;
    }
    // Never start already solved.
    if (solved) masks[pathCells.first] = _rotCw(masks[pathCells.first]);
  }

  final int n;
  late List<int> masks, need, pathCells;
  late int start, end;

  int get correct => pathCells.where((c) => masks[c] == need[c]).length;

  /// Cells water reaches from the source.
  Set<int> get filled {
    final seen = <int>{};
    final first = start * n;
    if (masks[first] & 8 == 0) return seen;
    final q = [first];
    seen.add(first);
    while (q.isNotEmpty) {
      final c = q.removeLast();
      final r = c ~/ n, col = c % n, m = masks[c];
      void go(int bit, int nr, int nc, int back) {
        if (m & bit == 0 || nr < 0 || nc < 0 || nr >= n || nc >= n) return;
        final o = nr * n + nc;
        if (masks[o] & back == 0 || seen.contains(o)) return;
        seen.add(o);
        q.add(o);
      }

      go(1, r - 1, col, 4);
      go(2, r, col + 1, 8);
      go(4, r + 1, col, 1);
      go(8, r, col - 1, 2);
    }
    return seen;
  }

  bool get solved {
    final last = end * n + n - 1;
    return filled.contains(last) && masks[last] & 2 != 0;
  }
}

class PipeFlowGame extends StatefulWidget {
  const PipeFlowGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PipeFlowGame> createState() => _PipeFlowState();
}

class _PipeFlowState extends State<PipeFlowGame> {
  late final List<_PipeBoard> _boards;
  int _b = 0, _banked = 0;
  late final int _total;

  @override
  void initState() {
    super.initState();
    _boards = [_PipeBoard(5, widget.args.rng), _PipeBoard(6, widget.args.rng)];
    _total = _boards.fold(0, (s, b) => s + b.pathCells.length);
    _report();
  }

  void _report() {
    final b = _boards[_b];
    final done = math.min(_banked + b.correct, _total - 1);
    widget.args.onProgress(done, _total);
  }

  void _tap(int i) {
    final b = _boards[_b];
    setState(() => b.masks[i] = _rotCw(b.masks[i]));
    HapticFeedback.selectionClick();
    if (b.solved) {
      _banked += b.pathCells.length;
      if (_b == _boards.length - 1) {
        widget.args.onProgress(_total, _total);
        widget.args.onComplete();
        return;
      }
      setState(() => _b++);
    }
    _report();
  }

  @override
  Widget build(BuildContext context) {
    final b = _boards[_b];
    final wet = b.filled;
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF164E63), Color(0xFF082F49)]),
      Column(children: [
        ArcadeBanner(child: Text('Turn pipes to carry water across · board ${_b + 1}/${_boards.length}')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: Row(children: [
                  Column(mainAxisAlignment: MainAxisAlignment.start, children: [
                    for (var r = 0; r < b.n; r++) Expanded(child: Center(child: Icon(Icons.water_drop_rounded, color: r == b.start ? const Color(0xFF38BDF8) : Colors.transparent, size: 18))),
                  ]),
                  Expanded(
                    child: GridView.count(
                      crossAxisCount: b.n,
                      physics: const NeverScrollableScrollPhysics(),
                      children: [
                        for (var i = 0; i < b.n * b.n; i++)
                          GestureDetector(
                            onTap: () => _tap(i),
                            child: Container(
                              margin: const EdgeInsets.all(2),
                              decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white12)),
                              child: CustomPaint(painter: _PipePainter(b.masks[i], wet.contains(i))),
                            ),
                          ),
                      ],
                    ),
                  ),
                  Column(children: [
                    for (var r = 0; r < b.n; r++) Expanded(child: Center(child: Icon(Icons.flag_rounded, color: r == b.end ? const Color(0xFF4ADE80) : Colors.transparent, size: 18))),
                  ]),
                ]),
              ),
            ),
          ),
        ),
      ]),
    ]);
  }
}

class _PipePainter extends CustomPainter {
  _PipePainter(this.mask, this.wet);
  final int mask;
  final bool wet;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final p = Paint()
      ..color = wet ? const Color(0xFF38BDF8) : const Color(0xFF94A3B8)
      ..strokeWidth = s.width * 0.26
      ..strokeCap = StrokeCap.round;
    if (mask & 1 != 0) canvas.drawLine(c, Offset(c.dx, 0), p);
    if (mask & 2 != 0) canvas.drawLine(c, Offset(s.width, c.dy), p);
    if (mask & 4 != 0) canvas.drawLine(c, Offset(c.dx, s.height), p);
    if (mask & 8 != 0) canvas.drawLine(c, Offset(0, c.dy), p);
    canvas.drawCircle(c, s.width * 0.16, Paint()..color = wet ? const Color(0xFF0EA5E9) : const Color(0xFF64748B));
  }

  @override
  bool shouldRepaint(covariant _PipePainter old) => old.mask != mask || old.wet != wet;
}

// 32 ── Color Flood ──────────────────────────────────────────────────────────
class ColorFloodGame extends StatefulWidget {
  const ColorFloodGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ColorFloodGame> createState() => _ColorFloodState();
}

class _ColorFloodState extends State<ColorFloodGame> {
  static const n = 10, maxMoves = 21;
  static const cols = [Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFA855F7), Color(0xFFEC4899)];
  late List<int> _g;
  int _moves = 0;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _g = List.generate(n * n, (_) => widget.args.rng.nextInt(cols.length));
    widget.args.onProgress(_region().length, n * n);
  }

  Set<int> _region() {
    final c = _g[0];
    final seen = <int>{0};
    final q = [0];
    while (q.isNotEmpty) {
      final i = q.removeLast();
      final r = i ~/ n, col = i % n;
      for (final o in [if (r > 0) i - n, if (r < n - 1) i + n, if (col > 0) i - 1, if (col < n - 1) i + 1]) {
        if (_g[o] == c && seen.add(o)) q.add(o);
      }
    }
    return seen;
  }

  void _pick(int c) {
    if (_over || c == _g[0]) return;
    HapticFeedback.selectionClick();
    setState(() {
      for (final i in _region()) {
        _g[i] = c;
      }
      _moves++;
    });
    final size = _region().length;
    widget.args.onProgress(size, n * n);
    if (size == n * n) {
      _over = true;
      widget.args.onComplete();
    } else if (_moves >= maxMoves) {
      _over = true;
      widget.args.onKnockout('Out of moves');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1F2937), Color(0xFF030712)]),
        Column(children: [
          ArcadeBanner(child: Text('Flood the board from the top-left · moves ${maxMoves - _moves} left')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  margin: const EdgeInsets.all(14),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white24, width: 2)),
                  clipBehavior: Clip.antiAlias,
                  child: GridView.count(
                    crossAxisCount: n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [for (final c in _g) AnimatedContainer(duration: const Duration(milliseconds: 250), color: cols[c])],
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: Wrap(
              spacing: 10,
              children: [
                for (var i = 0; i < cols.length; i++)
                  GestureDetector(
                    onTap: () => _pick(i),
                    child: Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: cols[i],
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white.withValues(alpha: _g[0] == i ? 1 : 0.25), width: 3),
                        boxShadow: [BoxShadow(color: cols[i].withValues(alpha: 0.5), blurRadius: 10)],
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ]),
      ]);
}

// 33 ── Hanoi Tower ──────────────────────────────────────────────────────────
class HanoiTowerGame extends StatefulWidget {
  const HanoiTowerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<HanoiTowerGame> createState() => _HanoiTowerState();
}

class _HanoiTowerState extends State<HanoiTowerGame> {
  static const discs = 4;
  static const discColors = [Color(0xFFF43F5E), Color(0xFFF59E0B), Color(0xFF22C55E), Color(0xFF3B82F6)];
  final _pegs = [
    [for (var d = discs; d >= 1; d--) d],
    <int>[],
    <int>[],
  ];
  int? _from;
  int _moves = 0;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, discs);
  }

  int get _placed {
    var k = 0;
    final p = _pegs[2];
    for (var i = 0; i < p.length; i++) {
      if (p[i] == discs - i) {
        k++;
      } else {
        break;
      }
    }
    return k;
  }

  void _tapPeg(int i) {
    if (_over) return;
    setState(() {
      if (_from == null) {
        if (_pegs[i].isNotEmpty) _from = i;
        return;
      }
      final from = _from!;
      _from = null;
      if (from == i) return;
      final disc = _pegs[from].last;
      if (_pegs[i].isNotEmpty && _pegs[i].last < disc) {
        HapticFeedback.heavyImpact();
        return;
      }
      _pegs[from].removeLast();
      _pegs[i].add(disc);
      _moves++;
      HapticFeedback.selectionClick();
    });
    widget.args.onProgress(_placed, discs);
    if (_placed == discs) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text('Move the tower to the right peg · moves $_moves')),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Text('Tap a peg to lift its top disc, then tap where it goes. A big disc can never sit on a small one.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontSize: 12)),
          ),
          Expanded(
            child: Row(children: [
              for (var p = 0; p < 3; p++)
                Expanded(
                  child: GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    onTap: () => _tapPeg(p),
                    child: LayoutBuilder(builder: (context, c) {
                      final pegW = c.maxWidth;
                      return Stack(alignment: Alignment.bottomCenter, children: [
                        Positioned(bottom: 40, top: c.maxHeight * 0.25, child: Container(width: 10, decoration: BoxDecoration(color: const Color(0xFFD6D3D1), borderRadius: BorderRadius.circular(5)))),
                        Positioned(bottom: 30, left: 6, right: 6, child: Container(height: 12, decoration: BoxDecoration(color: const Color(0xFFA16207), borderRadius: BorderRadius.circular(6)))),
                        for (var k = 0; k < _pegs[p].length; k++)
                          Positioned(
                            bottom: 42 + k * 26.0 + (_from == p && k == _pegs[p].length - 1 ? 30 : 0),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 160),
                              width: pegW * (0.3 + _pegs[p][k] * 0.16),
                              height: 24,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                gradient: LinearGradient(colors: [discColors[_pegs[p][k] - 1], discColors[_pegs[p][k] - 1].withValues(alpha: 0.7)]),
                                border: Border.all(color: Colors.white.withValues(alpha: _from == p && k == _pegs[p].length - 1 ? 1 : 0.3), width: 2),
                              ),
                            ),
                          ),
                        if (p == 2) Positioned(bottom: 6, child: Text('GOAL', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w900, fontSize: 11))),
                      ]);
                    }),
                  ),
                ),
            ]),
          ),
        ]),
      ]);
}

// 34 ── Emoji Riddles ────────────────────────────────────────────────────────
ArcadeQ _emojiRiddle(int round, math.Random r) {
  // A remembered shuffled deck: no riddle comes back until all 300 have been seen, and the order changes each round.
  final q = kNgmyEmojiRiddles[NgmyQuestionDeck.next('emoji_riddle', kNgmyEmojiRiddles.length, r)];
  final (opts, ans) = arcadeOptions(q.$2, kNgmyEmojiRiddles.map((e) => e.$2), r);
  return ArcadeQ(Text(q.$1, style: const TextStyle(fontSize: 64)), opts, ans);
}

// 35 ── Bigger Sum ───────────────────────────────────────────────────────────
ArcadeQ _biggerSum(int round, math.Random r) {
  (String, int) expr() {
    final kind = r.nextInt(round < 3 ? 3 : 8);
    switch (kind) {
      case 0:
        final a = 12 + r.nextInt(88), b = 12 + r.nextInt(88);
        return ('$a + $b', a + b);
      case 1:
        final a = 3 + r.nextInt(12), b = 3 + r.nextInt(10);
        return ('$a × $b', a * b);
      case 2:
        final a = 60 + r.nextInt(140), b = 10 + r.nextInt(60);
        return ('$a − $b', a - b);
      case 3:
        final a = 11 + r.nextInt(9), b = 6 + r.nextInt(10);
        return ('$a × $b', a * b);
      case 4:
        final a = 8 + r.nextInt(40), b = 8 + r.nextInt(40), c = 8 + r.nextInt(40);
        return ('$a + $b + $c', a + b + c);
      case 5:
        final a = 6 + r.nextInt(12);
        return ('$a²', a * a);
      case 6:
        final a = 4 + r.nextInt(10), b = 4 + r.nextInt(10), c = 1 + r.nextInt(30);
        return ('$a × $b − $c', a * b - c);
      default:
        final a = 100 + r.nextInt(300), b = 20 + r.nextInt(80), c = 10 + r.nextInt(40);
        return ('$a − $b + $c', a - b + c);
    }
  }

  // Keep the two answers close, so it takes real working out to tell which is bigger.
  final tol = math.max(3, 22 - round * 2);
  var left = expr();
  var right = expr();
  for (var i = 0; i < 40; i++) {
    final diff = (left.$2 - right.$2).abs();
    if (diff != 0 && diff <= tol && left.$2 != 0 && right.$2 != 0) break;
    right = expr();
    if (i % 5 == 4) left = expr();
  }
  while (right.$2 == left.$2 || left.$2 == 0 || right.$2 == 0) {
    left = expr();
    right = expr();
  }
  return ArcadeQ(
    const Text('Tap the bigger one', style: TextStyle(fontSize: 22)),
    [left.$1, right.$1],
    left.$2 > right.$2 ? 0 : 1,
  );
}

// 36 ── True or False ────────────────────────────────────────────────────────
ArcadeQ _trueFalse(int round, math.Random r) {
  final f = kNgmyTrueFalseFacts[NgmyQuestionDeck.next('true_false', kNgmyTrueFalseFacts.length, r)];
  return ArcadeQ(Text(f.$1, style: const TextStyle(fontSize: 22)), const ['TRUE', 'FALSE'], f.$2 ? 0 : 1);
}

// 37 ── Capital Cities ───────────────────────────────────────────────────────
const _capitals = <(String, String)>[
  ('France', 'Paris'), ('Japan', 'Tokyo'), ('Kenya', 'Nairobi'), ('Canada', 'Ottawa'), ('Australia', 'Canberra'),
  ('Brazil', 'Brasília'), ('Egypt', 'Cairo'), ('Italy', 'Rome'), ('Spain', 'Madrid'), ('Germany', 'Berlin'),
  ('Nigeria', 'Abuja'), ('Ghana', 'Accra'), ('India', 'New Delhi'), ('China', 'Beijing'), ('Mexico', 'Mexico City'),
  ('Argentina', 'Buenos Aires'), ('Russia', 'Moscow'), ('Turkey', 'Ankara'), ('South Korea', 'Seoul'), ('Thailand', 'Bangkok'),
  ('Portugal', 'Lisbon'), ('Greece', 'Athens'), ('Norway', 'Oslo'), ('Sweden', 'Stockholm'), ('Poland', 'Warsaw'),
  ('Morocco', 'Rabat'), ('Ethiopia', 'Addis Ababa'), ('Peru', 'Lima'), ('Chile', 'Santiago'), ('Colombia', 'Bogotá'),
  ('Haiti', 'Port-au-Prince'), ('Jamaica', 'Kingston'), ('Cuba', 'Havana'), ('Ireland', 'Dublin'), ('Netherlands', 'Amsterdam'),
  ('Belgium', 'Brussels'), ('Austria', 'Vienna'), ('Switzerland', 'Bern'), ('Vietnam', 'Hanoi'), ('Philippines', 'Manila'),
  ('Indonesia', 'Jakarta'), ('Senegal', 'Dakar'), ('Rwanda', 'Kigali'), ('South Africa', 'Pretoria'), ('United States', 'Washington, D.C.'),
  ('United Kingdom', 'London'), ('Saudi Arabia', 'Riyadh'), ('Pakistan', 'Islamabad'), ('New Zealand', 'Wellington'), ('Dominican Republic', 'Santo Domingo'),
];

ArcadeQ _capital(int round, math.Random r) {
  final c = _capitals[r.nextInt(_capitals.length)];
  final (opts, ans) = arcadeOptions(c.$2, _capitals.map((e) => e.$2), r);
  return ArcadeQ(
    Column(mainAxisSize: MainAxisSize.min, children: [
      const Icon(Icons.location_city_rounded, color: Colors.white70, size: 40),
      const SizedBox(height: 8),
      Text(c.$1, style: const TextStyle(fontSize: 30)),
    ]),
    opts,
    ans,
  );
}

// 38 ── Clock Reader ─────────────────────────────────────────────────────────
String _fmtTime(int h, int m) => '$h:${m.toString().padLeft(2, '0')}';

ArcadeQ _clock(int round, math.Random r) {
  final step = round < 4 ? 15 : 5;
  final h = 1 + r.nextInt(12), m = r.nextInt(60 ~/ step) * step;
  final right = _fmtTime(h, m);
  final wrong = <String>{};
  while (wrong.length < 3) {
    final kind = r.nextInt(3);
    final wh = kind == 0 ? (h % 12) + 1 : (kind == 1 ? ((h + 5) % 12) + 1 : h);
    final wm = kind == 2 ? (m + step * (1 + r.nextInt(3))) % 60 : (kind == 1 ? m : (m + 30) % 60);
    final s = _fmtTime(wh, wm);
    if (s != right) wrong.add(s);
  }
  final (opts, ans) = arcadeOptions(right, wrong, r);
  return ArcadeQ(SizedBox(width: 170, height: 170, child: CustomPaint(painter: _ClockPainter(h, m))), opts, ans);
}

class _ClockPainter extends CustomPainter {
  _ClockPainter(this.h, this.m);
  final int h, m;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero), R = s.width / 2;
    canvas.drawCircle(c, R, Paint()..color = Colors.white);
    canvas.drawCircle(
      c,
      R,
      Paint()
        ..color = const Color(0xFF0F766E)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 6,
    );
    for (var i = 0; i < 60; i++) {
      final a = i / 60 * math.pi * 2;
      final big = i % 5 == 0;
      final p1 = c + Offset(math.sin(a), -math.cos(a)) * (R - 8);
      final p2 = c + Offset(math.sin(a), -math.cos(a)) * (R - (big ? 20 : 13));
      canvas.drawLine(p1, p2, Paint()
        ..color = Colors.black87
        ..strokeWidth = big ? 3 : 1);
    }
    for (var i = 1; i <= 12; i++) {
      final a = i / 12 * math.pi * 2;
      final tp = TextPainter(
        text: TextSpan(text: '$i', style: const TextStyle(color: Colors.black, fontSize: 14, fontWeight: FontWeight.w800)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, c + Offset(math.sin(a), -math.cos(a)) * (R - 32) - Offset(tp.width / 2, tp.height / 2));
    }
    final ma = m / 60 * math.pi * 2;
    final ha = ((h % 12) + m / 60) / 12 * math.pi * 2;
    final hand = Paint()
      ..color = Colors.black
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(c, c + Offset(math.sin(ha), -math.cos(ha)) * R * 0.5, hand..strokeWidth = 7);
    canvas.drawLine(c, c + Offset(math.sin(ma), -math.cos(ma)) * R * 0.78, hand..strokeWidth = 4);
    canvas.drawCircle(c, 6, Paint()..color = const Color(0xFFDC2626));
  }

  @override
  bool shouldRepaint(covariant _ClockPainter old) => old.h != h || old.m != m;
}

// 39 ── Quick Count ──────────────────────────────────────────────────────────
ArcadeQ _quickCount(int round, math.Random r) {
  final n = 5 + r.nextInt(6 + math.min(round, 9));
  final wrong = <String>{for (final d in [-3, -2, -1, 1, 2, 3]) if (n + d > 0) '${n + d}'};
  final (opts, ans) = arcadeOptions('$n', wrong, r);
  return ArcadeQ(_FlashDots(count: n, seed: r.nextInt(1 << 30)), opts, ans);
}

class _FlashDots extends StatefulWidget {
  const _FlashDots({required this.count, required this.seed});
  final int count, seed;
  @override
  State<_FlashDots> createState() => _FlashDotsState();
}

class _FlashDotsState extends State<_FlashDots> {
  bool _shown = true;
  Timer? _t;
  late final List<Offset> _pts;

  @override
  void initState() {
    super.initState();
    final r = math.Random(widget.seed);
    _pts = [];
    var tries = 0;
    while (_pts.length < widget.count && tries < 2000) {
      tries++;
      final p = Offset(0.08 + r.nextDouble() * 0.84, 0.08 + r.nextDouble() * 0.84);
      if (_pts.every((q) => (q - p).distance > 0.13)) _pts.add(p);
    }
    _t = Timer(const Duration(milliseconds: 1600), () {
      if (mounted) setState(() => _shown = false);
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 220,
        height: 220,
        child: _shown
            ? Stack(children: [
                for (final p in _pts)
                  Positioned(
                    left: p.dx * 220 - 11,
                    top: p.dy * 220 - 11,
                    child: Container(width: 22, height: 22, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFF9A8D4), boxShadow: [BoxShadow(color: Color(0xAAEC4899), blurRadius: 8)])),
                  ),
              ])
            : const Center(child: Text('?', style: TextStyle(fontSize: 90))),
      );
}

// 40 ── Shell Game ───────────────────────────────────────────────────────────
class ShellGame extends StatefulWidget {
  const ShellGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ShellGame> createState() => _ShellGameState();
}

enum _ShellPhase { show, shuffle, pick, reveal }

class _ShellGameState extends State<ShellGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 8;
  final _slot = [0, 1, 2]; // cup → slot
  int _ball = 0; // cup with the ball
  int? _picked;
  var _phase = _ShellPhase.show;
  double _t = 0;
  int _swapsLeft = 0, _a = 0, _b = 1;
  double _swapT = 0;

  double get _swapTime => math.max(0.1, 0.3 - score * 0.03);

  @override
  void initState() {
    super.initState();
    startScore();
    hearts = 2;
    _ball = args.rng.nextInt(3);
    startLoop((dt) {
      _t += dt;
      switch (_phase) {
        case _ShellPhase.show:
          if (_t > 0.95) {
            _phase = _ShellPhase.shuffle;
            _swapsLeft = 10 + score * 3;
            _nextSwap();
          }
        case _ShellPhase.shuffle:
          _swapT += dt / _swapTime;
          if (_swapT >= 1) {
            final s = _slot[_a];
            _slot[_a] = _slot[_b];
            _slot[_b] = s;
            _swapsLeft--;
            if (_swapsLeft <= 0) {
              _phase = _ShellPhase.pick;
              _swapT = 0;
            } else {
              _nextSwap();
            }
          }
        case _ShellPhase.pick:
          break;
        case _ShellPhase.reveal:
          if (_t > 1.2) {
            _picked = null;
            _phase = _ShellPhase.show;
            _ball = args.rng.nextInt(3);
            _t = 0;
          }
      }
      setState(() {});
    });
  }

  void _nextSwap() {
    _a = args.rng.nextInt(3);
    _b = (_a + 1 + args.rng.nextInt(2)) % 3;
    _swapT = 0;
  }

  void _pick(int cup) {
    if (_phase != _ShellPhase.pick || ended) return;
    _picked = cup;
    _phase = _ShellPhase.reveal;
    _t = 0;
    if (cup == _ball) {
      addPoint();
    } else {
      loseHeart('Picked the wrong cup');
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        double slotX(int s) => w * (0.2 + s * 0.3);
        double cupX(int cup) {
          if (_phase == _ShellPhase.shuffle && (cup == _a || cup == _b)) {
            final other = cup == _a ? _b : _a;
            return slotX(_slot[cup]) + (slotX(_slot[other]) - slotX(_slot[cup])) * Curves.easeInOut.transform(_swapT.clamp(0.0, 1.0));
          }
          return slotX(_slot[cup]);
        }

        double cupLift(int cup) {
          if (_phase == _ShellPhase.show) return 60 * math.sin(math.min(1.0, _t / 0.6) * math.pi / 2) * (_t > 0.9 ? math.max(0, 1 - (_t - 0.9) / 0.3) : 1);
          if (_phase == _ShellPhase.reveal && (cup == _picked || cup == _ball)) return 60;
          if (_phase == _ShellPhase.shuffle && (cup == _a || cup == _b)) return (cup == _a ? 1 : -1) * 18 * math.sin(_swapT.clamp(0.0, 1.0) * math.pi);
          return 0;
        }

        final baseY = h * 0.55;
        final message = switch (_phase) {
          _ShellPhase.show => 'Watch the ball…',
          _ShellPhase.shuffle => 'Keep your eye on it!',
          _ShellPhase.pick => 'Which cup? Tap it',
          _ShellPhase.reveal => _picked == _ball ? 'Found it!' : 'Not this one',
        };
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF7F1D1D), Color(0xFF1C0A0A)]),
          Positioned(left: 20, right: 20, top: baseY + 40, child: Container(height: 14, decoration: BoxDecoration(color: const Color(0xFF92400E), borderRadius: BorderRadius.circular(7)))),
          Positioned(left: cupX(_ball) - 16, top: baseY + 8, child: Container(width: 32, height: 32, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Color(0xFFFDE68A), Color(0xFFF59E0B)])))),
          for (var cup = 0; cup < 3; cup++)
            Positioned(
              left: cupX(cup) - 46,
              top: baseY - 70 - cupLift(cup),
              child: GestureDetector(onTap: () => _pick(cup), child: CustomPaint(size: const Size(92, 112), painter: _CupPainter())),
            ),
          Positioned(left: 0, right: 0, top: h * 0.2, child: Text(message, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900))),
          arcadeTopBar('Find the ball · $score/$goal', hearts: hearts),
        ]);
      });
}

class _CupPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final path = Path()
      ..moveTo(s.width * 0.22, 0)
      ..lineTo(s.width * 0.78, 0)
      ..lineTo(s.width, s.height)
      ..lineTo(0, s.height)
      ..close();
    canvas.drawPath(
      path,
      Paint()
        ..shader = const LinearGradient(colors: [Color(0xFFB91C1C), Color(0xFFF87171), Color(0xFF991B1B)]).createShader(Offset.zero & s),
    );
    canvas.drawRect(Rect.fromLTWH(0, s.height - 10, s.width, 10), Paint()..color = const Color(0xFF7F1D1D));
    canvas.drawRect(Rect.fromLTWH(s.width * 0.2, 0, s.width * 0.6, 8), Paint()..color = const Color(0xFFFCA5A5));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}
