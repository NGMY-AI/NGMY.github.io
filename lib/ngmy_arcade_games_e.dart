import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Arcade games 41–50: casual favourites.
Widget? ngmyBuildArcadeGameE(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'gem_swap':
      return GemSwapGame(args: a);
    case 'block_collapse':
      return BlockCollapseGame(args: a);
    case 'ball_sort':
      return BallSortGame(args: a);
    case 'burger_builder':
      return BurgerBuilderGame(args: a);
    case 'archery':
      return ArcheryGame(args: a);
    case 'deep_fishing':
      return DeepFishingGame(args: a);
    case 'cannon_blast':
      return CannonBlastGame(args: a);
    case 'moon_lander':
      return MoonLanderGame(args: a);
    case 'jelly_jump':
      return JellyJumpGame(args: a);
    case 'mini_golf':
      return MiniGolfGame(args: a);
  }
  return null;
}

// 41 ── Gem Swap ─────────────────────────────────────────────────────────────
class GemSwapGame extends StatefulWidget {
  const GemSwapGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<GemSwapGame> createState() => _GemSwapState();
}

class _GemSwapState extends State<GemSwapGame> {
  static const n = 7, goal = 60;
  static const gems = ['💎', '🍀', '🔥', '⭐', '🍇', '🌸'];
  late List<int> _g;
  Set<int> _clearing = {};
  int? _sel;
  int _cleared = 0;
  bool _busy = false, _over = false;
  Timer? _t;

  math.Random get _r => widget.args.rng;

  @override
  void initState() {
    super.initState();
    _g = List.filled(n * n, 0);
    for (var i = 0; i < n * n; i++) {
      do {
        _g[i] = _r.nextInt(gems.length);
      } while ((i % n >= 2 && _g[i - 1] == _g[i] && _g[i - 2] == _g[i]) || (i >= 2 * n && _g[i - n] == _g[i] && _g[i - 2 * n] == _g[i]));
    }
    widget.args.onProgress(0, goal);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  Set<int> _matches(List<int> g) {
    final out = <int>{};
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        final i = r * n + c;
        if (g[i] < 0) continue;
        if (c <= n - 3 && g[i + 1] == g[i] && g[i + 2] == g[i]) out.addAll([i, i + 1, i + 2]);
        if (r <= n - 3 && g[i + n] == g[i] && g[i + 2 * n] == g[i]) out.addAll([i, i + n, i + 2 * n]);
      }
    }
    return out;
  }

  bool _hasMove() {
    final g = [..._g];
    for (var i = 0; i < n * n; i++) {
      for (final j in [if (i % n < n - 1) i + 1, if (i + n < n * n) i + n]) {
        final a = g[i];
        g[i] = g[j];
        g[j] = a;
        final ok = _matches(g).isNotEmpty;
        g[j] = g[i];
        g[i] = a;
        if (ok) return true;
      }
    }
    return false;
  }

  void _tap(int i) {
    if (_busy || _over) return;
    if (_sel == null) {
      setState(() => _sel = i);
      return;
    }
    final a = _sel!;
    final adjacent = (a - i).abs() == n || ((a - i).abs() == 1 && a ~/ n == i ~/ n);
    if (!adjacent) {
      setState(() => _sel = i);
      return;
    }
    final next = [..._g];
    next[a] = _g[i];
    next[i] = _g[a];
    final m = _matches(next);
    if (m.isEmpty) {
      HapticFeedback.heavyImpact();
      setState(() => _sel = null);
      return;
    }
    setState(() {
      _g = next;
      _sel = null;
      _busy = true;
      _clearing = m;
    });
    _t = Timer(const Duration(milliseconds: 260), _resolve);
  }

  void _resolve() {
    if (!mounted) return;
    HapticFeedback.lightImpact();
    _cleared += _clearing.length;
    for (final i in _clearing) {
      _g[i] = -1;
    }
    for (var c = 0; c < n; c++) {
      final col = [for (var r = n - 1; r >= 0; r--) if (_g[r * n + c] >= 0) _g[r * n + c]];
      for (var r = n - 1, k = 0; r >= 0; r--, k++) {
        _g[r * n + c] = k < col.length ? col[k] : _r.nextInt(gems.length);
      }
    }
    widget.args.onProgress(math.min(_cleared, goal), goal);
    if (_cleared >= goal) {
      _over = true;
      setState(() => _clearing = {});
      widget.args.onComplete();
      return;
    }
    final m = _matches(_g);
    if (m.isNotEmpty) {
      setState(() => _clearing = m);
      _t = Timer(const Duration(milliseconds: 260), _resolve);
      return;
    }
    if (!_hasMove()) _g.shuffle(_r);
    setState(() {
      _clearing = {};
      _busy = false;
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF581C87), Color(0xFF1E1B4B)]),
        Column(children: [
          ArcadeBanner(child: Text('Swap neighbours to make 3 in a row · $_cleared/$goal gems')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  margin: const EdgeInsets.all(12),
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFFC084FC).withValues(alpha: 0.5), width: 2)),
                  child: GridView.count(
                    crossAxisCount: n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < n * n; i++)
                        GestureDetector(
                          onTap: () => _tap(i),
                          child: AnimatedScale(
                            duration: const Duration(milliseconds: 200),
                            scale: _clearing.contains(i) ? 0.2 : (_sel == i ? 1.15 : 1),
                            child: Container(
                              margin: const EdgeInsets.all(2),
                              decoration: BoxDecoration(
                                color: _sel == i ? Colors.white.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.06),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              alignment: Alignment.center,
                              child: FittedBox(child: Padding(padding: const EdgeInsets.all(3), child: Text(_g[i] < 0 ? '' : gems[_g[i]], style: const TextStyle(fontSize: 30)))),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// 42 ── Block Collapse ───────────────────────────────────────────────────────
class BlockCollapseGame extends StatefulWidget {
  const BlockCollapseGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BlockCollapseGame> createState() => _BlockCollapseState();
}

class _BlockCollapseState extends State<BlockCollapseGame> {
  static const cols = 8, rows = 10, goal = 56;
  static const colors = [Color(0xFFF43F5E), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFFACC15)];
  // _c[col][row], row 0 = bottom.
  late List<List<int>> _c;
  int _cleared = 0;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _c = List.generate(cols, (_) => List.generate(rows, (_) => widget.args.rng.nextInt(colors.length)));
    widget.args.onProgress(0, goal);
  }

  Set<(int, int)> _group(int x, int y) {
    final col = _c[x][y];
    final out = <(int, int)>{(x, y)};
    final q = [(x, y)];
    while (q.isNotEmpty) {
      final (cx, cy) = q.removeLast();
      for (final (nx, ny) in [(cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)]) {
        if (nx < 0 || nx >= _c.length || ny < 0 || ny >= _c[nx].length) continue;
        if (_c[nx][ny] == col && out.add((nx, ny))) q.add((nx, ny));
      }
    }
    return out;
  }

  bool get _anyMove {
    for (var x = 0; x < _c.length; x++) {
      for (var y = 0; y < _c[x].length; y++) {
        if (x + 1 < _c.length && y < _c[x + 1].length && _c[x + 1][y] == _c[x][y]) return true;
        if (y + 1 < _c[x].length && _c[x][y + 1] == _c[x][y]) return true;
      }
    }
    return false;
  }

  void _tap(int x, int y) {
    if (_over || x >= _c.length || y >= _c[x].length) return;
    final g = _group(x, y);
    if (g.length < 2) {
      HapticFeedback.heavyImpact();
      return;
    }
    HapticFeedback.mediumImpact();
    setState(() {
      for (var cx = 0; cx < _c.length; cx++) {
        final keep = <int>[];
        for (var cy = 0; cy < _c[cx].length; cy++) {
          if (!g.contains((cx, cy))) keep.add(_c[cx][cy]);
        }
        _c[cx] = keep;
      }
      _c.removeWhere((col) => col.isEmpty);
      _cleared += g.length;
    });
    widget.args.onProgress(math.min(_cleared, goal), goal);
    if (_cleared >= goal) {
      _over = true;
      widget.args.onComplete();
    } else if (!_anyMove) {
      _over = true;
      widget.args.onKnockout('No more groups to clear');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0F766E), Color(0xFF042F2E)]),
        Column(children: [
          ArcadeBanner(child: Text('Tap groups of 2+ matching blocks · $_cleared/$goal')),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              child: LayoutBuilder(builder: (context, c) {
                final s = math.min(c.maxWidth / cols, c.maxHeight / rows);
                return Center(
                  child: SizedBox(
                    width: s * cols,
                    height: s * rows,
                    child: Stack(children: [
                      for (var x = 0; x < _c.length; x++)
                        for (var y = 0; y < _c[x].length; y++)
                          AnimatedPositioned(
                            key: ValueKey('b$x-$y'),
                            duration: const Duration(milliseconds: 180),
                            left: x * s,
                            top: (rows - 1 - y) * s,
                            width: s,
                            height: s,
                            child: GestureDetector(
                              onTap: () => _tap(x, y),
                              child: Container(
                                margin: const EdgeInsets.all(2),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(8),
                                  gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(colors[_c[x][y]], Colors.white, 0.35)!, colors[_c[x][y]]]),
                                  boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 3, offset: Offset(0, 2))],
                                ),
                              ),
                            ),
                          ),
                    ]),
                  ),
                );
              }),
            ),
          ),
        ]),
      ]);
}

// 43 ── Ball Sort ────────────────────────────────────────────────────────────
class BallSortGame extends StatefulWidget {
  const BallSortGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BallSortGame> createState() => _BallSortState();
}

class _BallSortState extends State<BallSortGame> {
  static const colors = [Color(0xFFEF4444), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFFACC15), Color(0xFFA855F7)];
  static const cap = 4;
  late List<List<int>> _tubes;
  int? _sel;
  bool _over = false;

  int get _total => colors.length * cap;

  @override
  void initState() {
    super.initState();
    do {
      final balls = [for (var c = 0; c < colors.length; c++) for (var k = 0; k < cap; k++) c]..shuffle(widget.args.rng);
      _tubes = [for (var t = 0; t < colors.length; t++) balls.sublist(t * cap, t * cap + cap), <int>[], <int>[]];
    } while (_solved);
    widget.args.onProgress(_progress, _total);
  }

  bool get _solved => _tubes.every((t) => t.isEmpty || (t.length == cap && t.every((b) => b == t.first)));

  int get _progress {
    final best = List.filled(colors.length, 0);
    for (final t in _tubes) {
      if (t.isEmpty) continue;
      var run = 0;
      while (run < t.length && t[run] == t.first) {
        run++;
      }
      if (run > best[t.first]) best[t.first] = run;
    }
    final p = best.fold(0, (a, b) => a + b);
    return _solved ? _total : math.min(p, _total - 1);
  }

  void _tap(int i) {
    if (_over) return;
    if (_sel == null) {
      if (_tubes[i].isNotEmpty) setState(() => _sel = i);
      return;
    }
    final from = _sel!;
    setState(() => _sel = null);
    if (from == i) return;
    final ball = _tubes[from].last;
    if (_tubes[i].length >= cap || (_tubes[i].isNotEmpty && _tubes[i].last != ball)) {
      HapticFeedback.heavyImpact();
      return;
    }
    HapticFeedback.selectionClick();
    setState(() => _tubes[i].add(_tubes[from].removeLast()));
    widget.args.onProgress(_progress, _total);
    if (_solved) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF312E81), Color(0xFF020617)]),
        Column(children: [
          const ArcadeBanner(child: Text('Sort each colour into its own tube')),
          Expanded(
            child: Center(
              child: Wrap(
                alignment: WrapAlignment.center,
                spacing: 14,
                runSpacing: 26,
                children: [
                  for (var i = 0; i < _tubes.length; i++)
                    GestureDetector(
                      onTap: () => _tap(i),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 150),
                        transform: Matrix4.translationValues(0, _sel == i ? -14 : 0, 0),
                        width: 56,
                        height: 44.0 * cap + 22,
                        padding: const EdgeInsets.fromLTRB(4, 4, 4, 8),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.08),
                          borderRadius: const BorderRadius.vertical(bottom: Radius.circular(28), top: Radius.circular(6)),
                          border: Border.all(color: _sel == i ? Colors.white : Colors.white38, width: 2),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            for (final b in _tubes[i].reversed)
                              Container(
                                width: 40,
                                height: 40,
                                margin: const EdgeInsets.only(top: 3),
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Color.lerp(colors[b], Colors.white, 0.5)!, colors[b]]),
                                ),
                              ),
                          ],
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        ]),
      ]);
}

// 44 ── Burger Builder ───────────────────────────────────────────────────────
class BurgerBuilderGame extends StatefulWidget {
  const BurgerBuilderGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BurgerBuilderGame> createState() => _BurgerBuilderState();
}

class _BurgerBuilderState extends State<BurgerBuilderGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 6;
  // 0 bottom bun, 1 patty, 2 cheese, 3 lettuce, 4 tomato, 5 onion, 6 bacon, 7 top bun.
  static const names = ['Bun', 'Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion', 'Bacon', 'Top bun'];
  static const icons = ['🍞', '🥩', '🧀', '🥬', '🍅', '🧅', '🥓', '🍔'];
  static const layerColors = [Color(0xFFD97706), Color(0xFF7C2D12), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFFDC2626), Color(0xFFE9D5FF), Color(0xFFB91C1C), Color(0xFFF59E0B)];
  List<int> _order = [];
  final _built = <int>[];
  double _shake = 0;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    startScore();
    _newOrder();
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _newOrder() {
    final fill = 2 + math.min(score, 3) + args.rng.nextInt(2);
    _order = [0, for (var i = 0; i < fill; i++) 1 + args.rng.nextInt(6), 7];
    _built.clear();
  }

  void _add(int item) {
    if (ended || _t != null) return;
    if (_order[_built.length] != item) {
      setState(() {
        _shake = 1;
        _built.clear();
      });
      _t = Timer(const Duration(milliseconds: 300), () {
        _t = null;
        if (mounted) setState(() => _shake = 0);
      });
      loseHeart('Wrong ingredient');
      return;
    }
    setState(() => _built.add(item));
    HapticFeedback.selectionClick();
    if (_built.length == _order.length) {
      if (addPoint()) return;
      _t = Timer(const Duration(milliseconds: 450), () {
        _t = null;
        if (mounted) setState(_newOrder);
      });
    }
  }

  Widget _layer(int item, double w) {
    final h = switch (item) {
      0 => 26.0,
      7 => 40.0,
      2 || 3 || 5 => 10.0,
      _ => 18.0,
    };
    return Container(
      width: item == 2 ? w * 1.05 : w,
      height: h,
      margin: const EdgeInsets.only(top: 2),
      decoration: BoxDecoration(
        color: layerColors[item],
        borderRadius: item == 7
            ? const BorderRadius.vertical(top: Radius.circular(60), bottom: Radius.circular(6))
            : item == 0
                ? const BorderRadius.vertical(bottom: Radius.circular(18), top: Radius.circular(6))
                : BorderRadius.circular(8),
        boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 3, offset: Offset(0, 2))],
      ),
    );
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFFFEF3C7), Color(0xFFF59E0B)]),
        Column(children: [
          arcadeTopBar('Build the order · $score/$goal burgers', hearts: hearts),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 16),
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 8)]),
            child: Column(children: [
              const Text('ORDER (bottom → top)', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 11, color: Colors.black54)),
              const SizedBox(height: 4),
              Wrap(alignment: WrapAlignment.center, spacing: 4, children: [
                for (var i = 0; i < _order.length; i++)
                  Opacity(opacity: i < _built.length ? 0.3 : 1, child: Text(icons[_order[i]], style: const TextStyle(fontSize: 26))),
              ]),
            ]),
          ),
          Expanded(
            child: Transform.translate(
              offset: Offset(_shake * 10, 0),
              child: Center(
                child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                  for (final item in _built.reversed) _layer(item, 170),
                  Container(width: 220, height: 10, margin: const EdgeInsets.only(top: 4, bottom: 10), decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(5))),
                ]),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
            child: Wrap(
              alignment: WrapAlignment.center,
              spacing: 6,
              runSpacing: 6,
              children: [
                for (var i = 0; i < names.length; i++)
                  GestureDetector(
                    onTap: () => _add(i),
                    child: Container(
                      width: 84,
                      padding: const EdgeInsets.symmetric(vertical: 6),
                      decoration: BoxDecoration(color: const Color(0xFF7C2D12), borderRadius: BorderRadius.circular(12)),
                      child: Column(children: [
                        Text(icons[i], style: const TextStyle(fontSize: 22)),
                        Text(names[i], style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
                      ]),
                    ),
                  ),
              ],
            ),
          ),
        ]),
      ]);
}

// 45 ── Archery ──────────────────────────────────────────────────────────────
class ArcheryGame extends StatefulWidget {
  const ArcheryGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ArcheryGame> createState() => _ArcheryState();
}

class _ArcheryState extends State<ArcheryGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 70;
  static const arrows = 10;
  final _hits = <(Offset, int)>[];
  double _t = 0;
  int _shot = 0;
  int? _lastPts;

  Offset get _aim {
    final k = 1 + _shot * 0.12;
    return Offset(math.sin(_t * 1.7 * k) * 0.8, math.sin(_t * 2.3 * k + 1) * 0.8);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _t += dt;
      setState(() {});
    });
  }

  void _shoot() {
    if (ended || _shot >= arrows) return;
    final a = _aim;
    final d = a.distance;
    final pts = d < 0.1 ? 10 : d < 0.25 ? 8 : d < 0.45 ? 6 : d < 0.65 ? 4 : d < 0.85 ? 2 : 0;
    _shot++;
    _hits.add((a, pts));
    _lastPts = pts;
    HapticFeedback.mediumImpact();
    if (pts > 0 && addPoint(pts)) return;
    if (_shot >= arrows) knockout('Out of arrows');
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final R = math.min(c.maxWidth, c.maxHeight) * 0.4;
        final center = Offset(c.maxWidth / 2, c.maxHeight * 0.5);
        const rings = [Colors.white, Colors.black, Color(0xFF2563EB), Color(0xFFDC2626), Color(0xFFFACC15)];
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _shoot(),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF86EFAC), Color(0xFF166534)]),
            for (var i = 0; i < 5; i++)
              Positioned(
                left: center.dx - R * (1 - i * 0.2),
                top: center.dy - R * (1 - i * 0.2),
                child: Container(width: R * 2 * (1 - i * 0.2), height: R * 2 * (1 - i * 0.2), decoration: BoxDecoration(shape: BoxShape.circle, color: rings[i], border: Border.all(color: Colors.black26))),
              ),
            for (final h in _hits)
              Positioned(left: center.dx + h.$1.dx * R - 6, top: center.dy + h.$1.dy * R - 6, child: Container(width: 12, height: 12, decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF451A03), border: Border.all(color: Colors.white, width: 2)))),
            Positioned(
              left: center.dx + _aim.dx * R - 22,
              top: center.dy + _aim.dy * R - 22,
              child: const IgnorePointer(child: Icon(Icons.add_circle_outline_rounded, size: 44, color: Color(0xFF111827))),
            ),
            if (_lastPts != null) Positioned(left: 0, right: 0, bottom: 70, child: Text('+$_lastPts', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 30, fontWeight: FontWeight.w900, shadows: [Shadow(blurRadius: 8)]))),
            arcadeTopBar('Tap to shoot · $score/$goal pts · arrows ${arrows - _shot}', bottom: true),
          ]),
        );
      });
}

// 46 ── Deep Sea Fishing ─────────────────────────────────────────────────────
class DeepFishingGame extends StatefulWidget {
  const DeepFishingGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<DeepFishingGame> createState() => _DeepFishingState();
}

class _Fish {
  _Fish(this.x, this.y, this.v, this.e, this.bad);
  double x;
  final double y, v;
  final String e;
  final bool bad;
}

class _DeepFishingState extends State<DeepFishingGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 12;
  final _fish = <_Fish>[];
  double _boat = 0.5, _hook = 0, _hookV = 0, _spawn = 0, _wave = 0;
  _Fish? _caught;

  @override
  void initState() {
    super.initState();
    startScore();
    hearts = 2;
    startLoop((dt) {
      _wave += dt;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = 0.5;
        final left = args.rng.nextBool();
        final bad = args.rng.nextDouble() < 0.4;
        final e = bad ? (args.rng.nextBool() ? '🪼' : '🦈') : ['🐟', '🐠', '🐡'][args.rng.nextInt(3)];
        _fish.add(_Fish(left ? -0.1 : 1.1, 0.35 + args.rng.nextDouble() * 0.55, (left ? 1 : -1) * (0.22 + args.rng.nextDouble() * 0.22 + score * 0.025), e, bad));
      }
      for (final f in _fish) {
        if (f != _caught) f.x += f.v * dt;
      }
      _fish.removeWhere((f) => f != _caught && (f.x < -0.2 || f.x > 1.2));
      if (_hookV != 0) {
        _hook += _hookV * dt;
        if (_hookV > 0 && _caught == null) {
          for (final f in _fish) {
            if ((f.x - _boat).abs() < 0.055 && (f.y - (0.18 + _hook)).abs() < 0.033) {
              _caught = f;
              _hookV = -1.2;
              break;
            }
          }
          if (_hook > 0.8) _hookV = -1.2;
        }
        if (_hookV < 0 && _hook <= 0) {
          _hook = 0;
          _hookV = 0;
          final f = _caught;
          _caught = null;
          if (f != null) {
            _fish.remove(f);
            if (f.bad) {
              if (loseHeart('Hooked a ${f.e == '🦈' ? 'shark' : 'jellyfish'}')) return;
            } else if (addPoint()) {
              return;
            }
          }
        }
        if (_caught != null) {
          _caught!.x = _boat;
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final hookY = (0.18 + _hook) * h;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) {
            if (_hookV == 0 && !ended) {
              _boat = (d.localPosition.dx / w).clamp(0.08, 0.92);
              _hookV = 1.1;
            }
          },
          onHorizontalDragUpdate: (d) {
            if (_hookV == 0) _boat = (d.localPosition.dx / w).clamp(0.08, 0.92);
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFF0369A1), Color(0xFF082F49)]),
            Positioned(left: 0, right: 0, top: h * 0.15, height: 6, child: Container(color: Colors.white.withValues(alpha: 0.5))),
            for (final f in _fish)
              Positioned(
                left: f.x * w - 22,
                top: (f == _caught ? hookY / h : f.y) * h - 22,
                child: Transform(alignment: Alignment.center, transform: Matrix4.diagonal3Values(f.v > 0 ? -1 : 1, 1, 1), child: emojiText(f.e, 44)),
              ),
            Positioned(left: _boat * w - 1, top: h * 0.15, child: Container(width: 2, height: math.max(0, hookY - h * 0.15), color: Colors.white70)),
            Positioned(left: _boat * w - 10, top: hookY - 6, child: const Icon(Icons.phishing_rounded, color: Colors.white, size: 22)),
            Positioned(left: _boat * w - 30, top: h * 0.15 - 46 + math.sin(_wave * 3) * 3, child: emojiText('🚣', 56)),
            Align(alignment: Alignment.bottomCenter, child: Padding(padding: const EdgeInsets.only(bottom: 4), child: Text('Tap to drop the hook · avoid 🪼 and 🦈', style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontWeight: FontWeight.w700)))),
            arcadeTopBar('Fish caught $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 47 ── Cannon Blast ─────────────────────────────────────────────────────────
class CannonBlastGame extends StatefulWidget {
  const CannonBlastGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<CannonBlastGame> createState() => _CannonBlastState();
}

class _CannonBlastState extends State<CannonBlastGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 10;
  static const ammoStart = 20;
  int _ammo = ammoStart;
  Size _size = Size.zero;
  Offset? _drag0, _drag;
  Offset? _ball, _vel;
  Offset _target = const Offset(0.75, 0.4);
  double _tt = 0, _boom = 0;

  Offset get _muzzle => Offset(50, _size.height - 60);

  Offset _launchVel() {
    final pull = (_drag0! - _drag!);
    final v = pull * 4.2;
    final m = v.distance;
    return m > 900 ? v / m * 900 : v;
  }

  void _newTarget() {
    _target = Offset(0.45 + args.rng.nextDouble() * 0.45, 0.2 + args.rng.nextDouble() * 0.5);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    _newTarget();
    startLoop((dt) {
      if (_size.isEmpty) return;
      _tt += dt;
      if (_boom > 0) _boom -= dt;
      final tPos = _targetPx;
      if (_ball != null) {
        _vel = _vel! + const Offset(0, 600) * dt;
        _ball = _ball! + _vel! * dt;
        if ((_ball! - tPos).distance < 34) {
          _ball = null;
          _boom = 0.5;
          if (addPoint()) return;
          _newTarget();
        } else if (_ball!.dy > _size.height + 40 || _ball!.dx > _size.width + 40 || _ball!.dx < -40) {
          _ball = null;
          if (_ammo <= 0) {
            knockout('Out of cannonballs');
            return;
          }
        }
      }
      setState(() {});
    });
  }

  Offset get _targetPx {
    final bob = score >= 4 ? math.sin(_tt * 1.5) * 0.08 : 0.0;
    return Offset(_target.dx * _size.width, (_target.dy + bob) * _size.height);
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final aimVel = _drag0 != null && _drag != null ? _launchVel() : null;
        final angle = aimVel == null ? -0.6 : math.atan2(aimVel.dy, aimVel.dx);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) => _drag0 = _drag = d.localPosition,
          onPanUpdate: (d) => setState(() => _drag = d.localPosition),
          onPanEnd: (_) {
            if (_drag0 != null && _drag != null && _ball == null && _ammo > 0 && !ended && (_drag0! - _drag!).distance > 10) {
              _vel = _launchVel();
              _ball = _muzzle;
              _ammo--;
            }
            setState(() => _drag0 = _drag = null);
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF38BDF8), Color(0xFFBAE6FD)]),
            Positioned(left: 0, right: 0, bottom: 0, height: 40, child: Container(color: const Color(0xFF4D7C0F))),
            if (aimVel != null)
              for (var i = 1; i <= 8; i++)
                Builder(builder: (_) {
                  final t = i * 0.08;
                  final p = _muzzle + aimVel * t + const Offset(0, 300) * t * t;
                  return Positioned(left: p.dx - 3, top: p.dy - 3, child: Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white)));
                }),
            Positioned(left: _targetPx.dx - 30, top: _targetPx.dy - 30, child: emojiText(_boom > 0 ? '💥' : '🎯', 60)),
            if (_ball != null) Positioned(left: _ball!.dx - 10, top: _ball!.dy - 10, child: Container(width: 20, height: 20, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF111827)))),
            Positioned(
              left: _muzzle.dx - 30,
              top: _muzzle.dy - 12,
              child: Transform.rotate(angle: angle, alignment: Alignment.centerLeft, origin: const Offset(0, 0), child: Container(width: 60, height: 24, decoration: BoxDecoration(color: const Color(0xFF374151), borderRadius: BorderRadius.circular(8)))),
            ),
            Positioned(left: 20, bottom: 26, child: Container(width: 54, height: 34, decoration: BoxDecoration(color: const Color(0xFF78350F), borderRadius: BorderRadius.circular(10)))),
            arcadeTopBar('Pull back and let go to fire · $score/$goal · 💣 $_ammo'),
          ]),
        );
      });
}

// 48 ── Moon Lander ──────────────────────────────────────────────────────────
class MoonLanderGame extends StatefulWidget {
  const MoonLanderGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<MoonLanderGame> createState() => _MoonLanderState();
}

class _MoonLanderState extends State<MoonLanderGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 5;
  static const safe = 110.0;
  Size _size = Size.zero;
  double _y = 0, _vy = 0, _fuel = 100, _pause = 0;
  bool _thrust = false;
  String _msg = '';

  void _reset() {
    _y = 0;
    _vy = 40;
    _fuel = 100 - score * 8;
  }

  @override
  void initState() {
    super.initState();
    startScore();
    _reset();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (_pause > 0) {
        _pause -= dt;
        if (_pause <= 0) {
          _msg = '';
          _reset();
        }
        setState(() {});
        return;
      }
      final g = 160.0 + score * 25;
      final firing = _thrust && _fuel > 0;
      _vy += (g - (firing ? 420 : 0)) * dt;
      if (firing) _fuel = math.max(0, _fuel - 28 * dt);
      _y += _vy * dt;
      if (_y < 0) {
        _y = 0;
        _vy = math.max(0, _vy);
      }
      final ground = _size.height * 0.78 - 60;
      if (_y >= ground) {
        final soft = _vy <= safe;
        _msg = soft ? 'Perfect landing!' : 'Crashed!';
        _pause = 1.2;
        _y = ground;
        if (soft) {
          if (addPoint()) return;
        } else if (loseHeart('Crashed on the moon')) {
          return;
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final w = c.maxWidth, h = c.maxHeight;
        final fast = _vy > safe;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (_) => _thrust = true,
          onPointerUp: (_) => _thrust = false,
          onPointerCancel: (_) => _thrust = false,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF020617), Color(0xFF1E293B)]),
            Positioned(right: 24, top: 70, child: emojiText('🌍', 40)),
            Positioned(left: 0, right: 0, top: h * 0.78, bottom: 0, child: Container(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF9CA3AF), Color(0xFF4B5563)])))),
            Positioned(left: w / 2 - 50, top: h * 0.78 - 6, child: Container(width: 100, height: 8, decoration: BoxDecoration(color: const Color(0xFF4ADE80), borderRadius: BorderRadius.circular(4), boxShadow: const [BoxShadow(color: Color(0xAA4ADE80), blurRadius: 10)]))),
            Positioned(
              left: w / 2 - 30,
              top: _y,
              child: Column(children: [
                emojiText('🛸', 60),
                if (_thrust && _fuel > 0 && _pause <= 0) emojiText('🔥', 30),
              ]),
            ),
            Positioned(
              left: 16,
              top: 70,
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Speed ${_vy.round()}', style: TextStyle(color: fast ? const Color(0xFFF87171) : const Color(0xFF4ADE80), fontWeight: FontWeight.w900, fontSize: 16)),
                const SizedBox(height: 6),
                Container(
                  width: 110,
                  height: 10,
                  decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(5)),
                  alignment: Alignment.centerLeft,
                  child: FractionallySizedBox(widthFactor: (_fuel / 100).clamp(0.0, 1.0), child: Container(decoration: BoxDecoration(color: const Color(0xFFF59E0B), borderRadius: BorderRadius.circular(5)))),
                ),
                const Text('fuel', style: TextStyle(color: Colors.white54, fontSize: 11)),
              ]),
            ),
            if (_msg.isNotEmpty) Center(child: Text(_msg, style: TextStyle(color: _msg.startsWith('P') ? const Color(0xFF4ADE80) : const Color(0xFFF87171), fontSize: 32, fontWeight: FontWeight.w900))),
            arcadeTopBar('Hold to fire the engine · land slowly · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 49 ── Jelly Jump ───────────────────────────────────────────────────────────
class JellyJumpGame extends StatefulWidget {
  const JellyJumpGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<JellyJumpGame> createState() => _JellyJumpState();
}

class _Plat {
  _Plat(this.x, this.y, this.i);
  final double x, y;
  final int i;
}

class _JellyJumpState extends State<JellyJumpGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 30;
  static const pw = 80.0;
  final _plats = <_Plat>[];
  Size _size = Size.zero;
  double _x = 0, _y = 0, _vy = 0, _cam = 0, _dir = 0;
  int _best = 0, _next = 0;
  double _topY = 0;

  void _gen() {
    while (_topY < _cam + _size.height + 200) {
      _next++;
      _topY += 70 + args.rng.nextDouble() * 45;
      _plats.add(_Plat(pw / 2 + args.rng.nextDouble() * (_size.width - pw), _topY, _next));
    }
    _plats.removeWhere((p) => p.y < _cam - 60);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final w = _size.width;
      if (_plats.isEmpty) {
        _plats.add(_Plat(w / 2, 20, 0));
        _x = w / 2;
        _y = 20;
        _vy = 720;
        _gen();
      }
      _x = (_x + _dir * 270 * dt) % w;
      final prev = _y;
      _vy -= 1400 * dt;
      _y += _vy * dt;
      if (_vy < 0) {
        for (final p in _plats) {
          if (prev >= p.y && _y <= p.y && (_x - p.x).abs() < pw / 2 + 12) {
            _y = p.y;
            _vy = 720;
            if (p.i > _best) {
              final gain = p.i - _best;
              _best = p.i;
              if (addPoint(gain)) return;
            }
            break;
          }
        }
      }
      _cam = math.max(_cam, _y - _size.height * 0.4);
      if (_y < _cam - 40) {
        if (loseHeart('Fell off')) return;
        final p = _plats.where((p) => p.y > _cam + 20).fold<_Plat?>(null, (a, b) => a == null || b.y < a.y ? b : a);
        if (p != null) {
          _x = p.x;
          _y = p.y;
        } else {
          _y = _cam + 60;
        }
        _vy = 720;
      }
      _gen();
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final h = c.maxHeight;
        double sy(double y) => h - (y - _cam);
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (e) => _dir = e.localPosition.dx < c.maxWidth / 2 ? -1 : 1,
          onPointerMove: (e) => _dir = e.localPosition.dx < c.maxWidth / 2 ? -1 : 1,
          onPointerUp: (_) => _dir = 0,
          onPointerCancel: (_) => _dir = 0,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFFBCFE8), Color(0xFFC4B5FD)]),
            for (final p in _plats)
              Positioned(
                left: p.x - pw / 2,
                top: sy(p.y),
                child: Container(
                  width: pw,
                  height: 14,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(7),
                    gradient: LinearGradient(colors: p.i <= _best ? const [Color(0xFF34D399), Color(0xFF059669)] : const [Color(0xFF60A5FA), Color(0xFF2563EB)]),
                    boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 4, offset: Offset(0, 3))],
                  ),
                ),
              ),
            Positioned(left: _x - 24, top: sy(_y) - 46, child: Transform.scale(scaleY: _vy > 500 ? 1.15 : 1, child: emojiText('🐸', 48))),
            arcadeTopBar('Hold left or right to steer · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 50 ── Mini Golf ────────────────────────────────────────────────────────────
class MiniGolfGame extends StatefulWidget {
  const MiniGolfGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<MiniGolfGame> createState() => _MiniGolfState();
}

class _MiniGolfState extends State<MiniGolfGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 6;
  static const par = 1, br = 9.0, hr = 15.0;
  Size _size = Size.zero;
  Offset _ball = Offset.zero, _vel = Offset.zero, _hole = Offset.zero;
  List<Rect> _walls = [];
  int _strokes = 0;
  Offset? _pull, _dragStart;
  bool _ready = false;
  double _sink = 0;

  void _newHole() {
    final w = _size.width, h = _size.height;
    _ball = Offset(w / 2, h * 0.62);
    _hole = Offset(60 + args.rng.nextDouble() * (w - 120), 110);
    _vel = Offset.zero;
    _strokes = 0;
    _walls = [];
    final count = 1 + math.min(score, 2);
    for (var i = 0; i < count; i++) {
      final ww = 90 + args.rng.nextDouble() * (w * 0.35);
      final y = h * (0.27 + i * 0.12) + args.rng.nextDouble() * 24;
      final x = args.rng.nextDouble() * (w - ww);
      _walls.add(Rect.fromLTWH(x, y, ww, 16));
    }
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (!_ready) {
        _ready = true;
        _newHole();
      }
      if (_sink > 0) {
        _sink -= dt;
        if (_sink <= 0) _newHole();
        setState(() {});
        return;
      }
      if (_vel.distance > 0) {
        final w = _size.width, h = _size.height;
        var nx = _ball.dx + _vel.dx * dt;
        var vx = _vel.dx, vy = _vel.dy;
        if (nx < br || nx > w - br || _walls.any((r) => r.inflate(br).contains(Offset(nx, _ball.dy)))) {
          vx = -vx * 0.8;
          nx = _ball.dx;
        }
        var ny = _ball.dy + vy * dt;
        if (ny < br + 50 || ny > h - br || _walls.any((r) => r.inflate(br).contains(Offset(nx, ny)))) {
          vy = -vy * 0.8;
          ny = _ball.dy;
        }
        _ball = Offset(nx, ny);
        final v = Offset(vx, vy) * math.pow(0.35, dt).toDouble();
        _vel = v.distance < 8 ? Offset.zero : v;
        final d = (_ball - _hole).distance;
        if (d < hr && _vel.distance < 520) {
          _vel = Offset.zero;
          _ball = _hole;
          _sink = 0.9;
          if (addPoint()) return;
        } else if (_vel == Offset.zero && _strokes >= par) {
          _sink = 0.9;
          if (loseHeart('Missed the hole')) return;
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final canShoot = _vel == Offset.zero && _sink <= 0 && !ended;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) {
            if (canShoot) {
              _dragStart = d.localPosition;
              _pull = d.localPosition;
            }
          },
          onPanUpdate: (d) {
            if (_pull != null) setState(() => _pull = d.localPosition);
          },
          onPanEnd: (_) {
            if (_pull != null && canShoot) {
              var v = (_dragStart! - _pull!) * 4;
              if (v.distance > 1100) v = v / v.distance * 1100;
              if (v.distance > 40) {
                _vel = v;
                _strokes++;
              }
            }
            setState(() {
              _pull = null;
              _dragStart = null;
            });
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF16A34A), Color(0xFF15803D)]),
            for (final r in _walls)
              Positioned.fromRect(rect: r, child: Container(decoration: BoxDecoration(color: const Color(0xFF92400E), borderRadius: BorderRadius.circular(6), boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 4, offset: Offset(0, 3))]))),
            Positioned(left: _hole.dx - hr, top: _hole.dy - hr, child: Container(width: hr * 2, height: hr * 2, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF052E16)))),
            Positioned(left: _hole.dx - 2, top: _hole.dy - 54, child: Container(width: 3, height: 52, color: Colors.white)),
            Positioned(left: _hole.dx + 1, top: _hole.dy - 54, child: Container(width: 26, height: 16, color: const Color(0xFFDC2626))),
            if (_pull != null && _dragStart != null) Positioned.fill(child: CustomPaint(painter: _AimPainter(_ball, _ball + (_dragStart! - _pull!)))),
            Positioned(
              left: _ball.dx - br,
              top: _ball.dy - br,
              child: AnimatedScale(duration: const Duration(milliseconds: 300), scale: _sink > 0 && _ball == _hole ? 0.3 : 1, child: Container(width: br * 2, height: br * 2, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white, boxShadow: [BoxShadow(color: Colors.black38, blurRadius: 3, offset: Offset(0, 2))]))),
            ),
            arcadeTopBar('Hole ${math.min(score + 1, goal)}/$goal · strokes $_strokes/$par · drag back anywhere to putt', hearts: hearts),
          ]),
        );
      });
}

class _AimPainter extends CustomPainter {
  _AimPainter(this.from, this.to);
  final Offset from, to;
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = Colors.white
      ..strokeWidth = 3
      ..strokeCap = StrokeCap.round;
    final d = to - from;
    for (var i = 0; i < 10; i++) {
      canvas.drawCircle(from + d * (i / 10), 2.5, p);
    }
    canvas.drawCircle(to, 6, p);
  }

  @override
  bool shouldRepaint(covariant _AimPainter old) => old.to != to || old.from != from;
}
