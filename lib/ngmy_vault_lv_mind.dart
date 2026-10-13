import 'dart:async';
import 'dart:collection';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 21–30: mind games.
final kVaultMindGames = <VaultLvDef>[
  VaultLvDef(id: 'v_maze', title: 'Maze Runner', tagline: 'Find the way out — the mazes grow and the lights dim.', emoji: '🌀', icon: Icons.route_rounded, colors: const [Color(0xFF818CF8), Color(0xFF1E1B4B)], tag: 'MIND', build: (a, l) => MazeRunnerGame(args: a, level: l), seconds: (l) => lvI(l, 45, 120)),
  VaultLvDef(id: 'v_memory_path', title: 'Memory Path', tagline: 'Watch the path light up, then walk it.', emoji: '👣', icon: Icons.timeline_rounded, colors: const [Color(0xFFF472B6), Color(0xFF500724)], tag: 'MIND', build: (a, l) => MemoryPathGame(args: a, level: l)),
  VaultLvDef(id: 'v_tile_rotate', title: 'Rotate Tiles', tagline: 'Turn every tile the right way up.', emoji: '🔄', icon: Icons.rotate_right_rounded, colors: const [Color(0xFF2DD4BF), Color(0xFF134E4A)], tag: 'MIND', build: (a, l) => TileRotateGame(args: a, level: l)),
  VaultLvDef(id: 'v_knight', title: 'Knight Coins', tagline: 'Collect every coin with knight jumps.', emoji: '♞', icon: Icons.castle_rounded, colors: const [Color(0xFFFBBF24), Color(0xFF292524)], tag: 'MIND', build: (a, l) => KnightCoinsGame(args: a, level: l)),
  VaultLvDef(id: 'v_peg_jump', title: 'Peg Jump', tagline: 'Jump pegs over each other until only one is left.', emoji: '📍', icon: Icons.push_pin_rounded, colors: const [Color(0xFFF97316), Color(0xFF431407)], tag: 'MIND', build: (a, l) => PegJumpGame(args: a, level: l)),
  VaultLvDef(id: 'v_equation', title: 'Equation Builder', tagline: 'Use the tiles to hit the target number.', emoji: '🧮', icon: Icons.functions_rounded, colors: const [Color(0xFF34D399), Color(0xFF064E3B)], tag: 'MIND', build: (a, l) => EquationBuilderGame(args: a, level: l), seconds: (l) => lvI(l, 2, 5) * lvI(l, 40, 30) + 10),
  VaultLvDef(id: 'v_spell_fill', title: 'Missing Letters', tagline: 'Fill the gaps to spell the word.', emoji: '🔤', icon: Icons.spellcheck_rounded, colors: const [Color(0xFFA78BFA), Color(0xFF2E1065)], tag: 'MIND', build: (a, l) => SpellFillGame(args: a, level: l), seconds: (l) => lvI(l, 3, 7) * lvI(l, 25, 14) + 10),
  VaultLvDef(id: 'v_cipher', title: 'Secret Code', tagline: 'Crack the shifted-letter code.', emoji: '🕵️', icon: Icons.lock_rounded, colors: const [Color(0xFF64748B), Color(0xFF0F172A)], tag: 'MIND', build: (a, l) => ArcadeQuiz(args: a, goal: lvI(l, 4, 9), colors: const [Color(0xFF94A3B8), Color(0xFF0F172A)], hint: 'Decode it', make: _cipherQ(l))),
  VaultLvDef(id: 'v_pattern_next', title: 'What Comes Next', tagline: 'Spot the pattern and pick the next one.', emoji: '🔮', icon: Icons.auto_awesome_rounded, colors: const [Color(0xFFE879F9), Color(0xFF4A044E)], tag: 'MIND', build: (a, l) => ArcadeQuiz(args: a, goal: lvI(l, 5, 12), colors: const [Color(0xFFE879F9), Color(0xFF4A044E)], hint: 'Next one?', optionFontSize: 26, make: _patternQ(l))),
  VaultLvDef(id: 'v_spot_diff', title: 'Spot the Change', tagline: 'Find what changed in the second picture.', emoji: '🔍', icon: Icons.compare_rounded, colors: const [Color(0xFF38BDF8), Color(0xFF0C4A6E)], tag: 'MIND', build: (a, l) => SpotChangeGame(args: a, level: l), seconds: (l) => lvI(l, 1, 5) * lvI(l, 20, 12) + 10),
];

const kVaultWordBank = [
  'APPLE', 'BREAD', 'CHAIR', 'DANCE', 'EAGLE', 'FLAME', 'GRAPE', 'HOUSE', 'IGLOO', 'JUICE', 'KNIFE', 'LEMON', 'MONEY', 'NIGHT',
  'OCEAN', 'PIANO', 'QUEEN', 'RIVER', 'SMILE', 'TIGER', 'UNCLE', 'VOICE', 'WATER', 'YOUTH', 'ZEBRA', 'PLANET', 'GARDEN', 'BRIDGE',
  'CASTLE', 'DOCTOR', 'ENGINE', 'FOREST', 'GUITAR', 'HAMMER', 'ISLAND', 'JACKET', 'KITTEN', 'LADDER', 'MARKET', 'NEEDLE', 'ORANGE',
  'PENCIL', 'RABBIT', 'SCHOOL', 'TICKET', 'VALLEY', 'WINDOW', 'YELLOW', 'ROCKET', 'SILVER', 'BUTTER', 'CAMERA', 'DRAGON', 'FINGER',
  'GOLDEN', 'HONEST', 'JUNGLE', 'KETTLE', 'LIZARD', 'MIRROR', 'NATURE', 'OYSTER', 'PEPPER', 'PUZZLE', 'RIBBON', 'SADDLE', 'TUNNEL',
  'BALLOON', 'CABBAGE', 'DOLPHIN', 'EVENING', 'FREEDOM', 'GALLERY', 'HARMONY', 'JOURNEY', 'KITCHEN', 'LIBRARY', 'MORNING', 'NETWORK',
  'OCTOPUS', 'PICTURE', 'RAINBOW', 'SUNRISE', 'THUNDER', 'UNIFORM', 'VICTORY', 'WEATHER', 'BLANKET', 'CAPTAIN', 'DIAMOND', 'FACTORY',
  'GIRAFFE', 'HOLIDAY', 'LANTERN', 'MESSAGE', 'PENGUIN', 'PYRAMID', 'SANDWICH', 'TREASURE', 'ELEPHANT', 'MOUNTAIN', 'COMPUTER',
  'SUNSHINE', 'BUTTERFLY', 'CHOCOLATE', 'ADVENTURE', 'BLUEBERRY', 'CROCODILE', 'DINOSAUR', 'FIREWORK', 'HOSPITAL', 'KANGAROO',
];

// ── 21 Maze Runner ─────────────────────────────────────────────────────────
class MazeRunnerGame extends StatefulWidget {
  const MazeRunnerGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MazeRunnerGame> createState() => _MazeRunnerState();
}

class _MazeRunnerState extends State<MazeRunnerGame> {
  late final int _w, _h;
  // walls[cell] bits: 1 up, 2 right, 4 down, 8 left (1 = wall present)
  late final List<int> _walls;
  int _me = 0;
  late final int _exit;
  late final int _startDist;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _w = lvI(widget.level, 5, 13);
    _h = lvI(widget.level, 6, 15);
    _walls = List.filled(_w * _h, 15);
    final seen = <int>{0};
    final stack = [0];
    while (stack.isNotEmpty) {
      final c = stack.last;
      final opts = <(int, int, int)>[
        if (c ~/ _w > 0) (c - _w, 1, 4),
        if (c % _w < _w - 1) (c + 1, 2, 8),
        if (c ~/ _w < _h - 1) (c + _w, 4, 1),
        if (c % _w > 0) (c - 1, 8, 2),
      ].where((o) => !seen.contains(o.$1)).toList();
      if (opts.isEmpty) {
        stack.removeLast();
        continue;
      }
      final (n, wall, back) = opts[r.nextInt(opts.length)];
      _walls[c] &= ~wall;
      _walls[n] &= ~back;
      seen.add(n);
      stack.add(n);
    }
    _exit = _w * _h - 1;
    _startDist = _dist(0);
    widget.args.onProgress(0, _startDist);
  }

  int _dist(int from) {
    final d = {from: 0};
    final q = Queue<int>()..add(from);
    while (q.isNotEmpty) {
      final c = q.removeFirst();
      if (c == _exit) return d[c]!;
      for (final (bit, n) in [(1, c - _w), (2, c + 1), (4, c + _w), (8, c - 1)]) {
        if (_walls[c] & bit == 0 && !d.containsKey(n)) {
          d[n] = d[c]! + 1;
          q.add(n);
        }
      }
    }
    return 0;
  }

  void _move(int bit, int delta) {
    if (_over || _walls[_me] & bit != 0) return;
    setState(() => _me += delta);
    HapticFeedback.selectionClick();
    widget.args.onProgress((_startDist - _dist(_me)).clamp(0, _startDist), _startDist);
    if (_me == _exit) {
      _over = true;
      widget.args.onComplete();
    }
  }

  Widget _btn(IconData i, VoidCallback f) => IconButton.filled(
        onPressed: f,
        icon: Icon(i),
        style: IconButton.styleFrom(backgroundColor: Colors.white.withValues(alpha: 0.14), foregroundColor: Colors.white, minimumSize: const Size(52, 52)),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF020617)]),
        Column(children: [
          ArcadeBanner(child: Text(widget.level > 18 ? 'The lights are low — find the 🏁' : 'Swipe or tap arrows to reach the 🏁')),
          Expanded(
            child: GestureDetector(
              onHorizontalDragEnd: (d) => (d.primaryVelocity ?? 0) > 0 ? _move(2, 1) : _move(8, -1),
              onVerticalDragEnd: (d) => (d.primaryVelocity ?? 0) > 0 ? _move(4, _w) : _move(1, -_w),
              child: Center(
                child: AspectRatio(
                  aspectRatio: _w / _h,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: CustomPaint(painter: _MazePainter(_w, _h, _walls, _me, _exit, widget.level > 18 ? lvD(widget.level, 4.0, 2.4) : 0)),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Column(children: [
              _btn(Icons.keyboard_arrow_up_rounded, () => _move(1, -_w)),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                _btn(Icons.keyboard_arrow_left_rounded, () => _move(8, -1)),
                const SizedBox(width: 62),
                _btn(Icons.keyboard_arrow_right_rounded, () => _move(2, 1)),
              ]),
              _btn(Icons.keyboard_arrow_down_rounded, () => _move(4, _w)),
            ]),
          ),
        ]),
      ]);
}

class _MazePainter extends CustomPainter {
  _MazePainter(this.w, this.h, this.walls, this.me, this.exit, this.sight);
  final int w, h, me, exit;
  final List<int> walls;
  final double sight;
  @override
  void paint(Canvas canvas, Size s) {
    final cw = s.width / w, ch = s.height / h;
    final p = Paint()
      ..color = const Color(0xFFA5B4FC)
      ..strokeWidth = 2.5
      ..strokeCap = StrokeCap.round;
    final mx = me % w, my = me ~/ w;
    for (var c = 0; c < w * h; c++) {
      final x = c % w, y = c ~/ w;
      if (sight > 0 && math.sqrt(math.pow(x - mx, 2) + math.pow(y - my, 2)) > sight) continue;
      final l = x * cw, t = y * ch;
      if (walls[c] & 1 != 0) canvas.drawLine(Offset(l, t), Offset(l + cw, t), p);
      if (walls[c] & 2 != 0) canvas.drawLine(Offset(l + cw, t), Offset(l + cw, t + ch), p);
      if (walls[c] & 4 != 0) canvas.drawLine(Offset(l, t + ch), Offset(l + cw, t + ch), p);
      if (walls[c] & 8 != 0) canvas.drawLine(Offset(l, t), Offset(l, t + ch), p);
    }
    void emoji(String e, int c) {
      final tp = TextPainter(text: TextSpan(text: e, style: TextStyle(fontSize: math.min(cw, ch) * 0.7)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, Offset((c % w + 0.5) * cw - tp.width / 2, (c ~/ w + 0.5) * ch - tp.height / 2));
    }

    emoji('🏁', exit);
    canvas.drawCircle(Offset((mx + 0.5) * cw, (my + 0.5) * ch), math.min(cw, ch) * 0.3, Paint()..color = const Color(0xFFFDE047));
  }

  @override
  bool shouldRepaint(covariant _MazePainter old) => old.me != me;
}

// ── 22 Memory Path ─────────────────────────────────────────────────────────
class MemoryPathGame extends StatefulWidget {
  const MemoryPathGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MemoryPathGame> createState() => _MemoryPathState();
}

class _MemoryPathState extends State<MemoryPathGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _path.length;
  late final int _n;
  late final List<int> _path;
  int _shown = -1; // how many steps are lit during the show
  bool _showing = true;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _n = lvI(widget.level, 4, 7);
    final len = lvI(widget.level, 4, 15);
    for (var attempt = 0; attempt < 100; attempt++) {
      var c = r.nextInt(_n * _n);
      final p = [c];
      while (p.length < len) {
        final opts = [
          if (c % _n > 0) c - 1,
          if (c % _n < _n - 1) c + 1,
          if (c >= _n) c - _n,
          if (c < _n * (_n - 1)) c + _n,
        ].where((o) => !p.contains(o)).toList();
        if (opts.isEmpty) break;
        c = opts[r.nextInt(opts.length)];
        p.add(c);
      }
      if (p.length == len || attempt == 99) {
        _path = p;
        break;
      }
    }
    hearts = 3;
    startScore();
    _show();
  }

  void _show() {
    _t?.cancel();
    _showing = true;
    _shown = 0;
    final step = Duration(milliseconds: lvI(widget.level, 650, 280));
    _t = Timer.periodic(step, (t) {
      if (!mounted) return t.cancel();
      setState(() => _shown++);
      if (_shown > _path.length) {
        t.cancel();
        setState(() {
          _showing = false;
          _shown = -1;
        });
      }
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _tap(int c) {
    if (ended || _showing) return;
    if (c == _path[score]) {
      setState(() {});
      addPoint();
    } else {
      setState(() => score = 0);
      args.onProgress(0, goal);
      if (!loseHeart('Stepped off the path')) _show();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF500724), Color(0xFF1A0410)]),
        Column(children: [
          arcadeTopBar(_showing ? 'Watch the path…' : 'Walk it · ${score}/${_path.length}', hearts: hearts),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: GridView.count(
                    crossAxisCount: _n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _n * _n; i++)
                        Builder(builder: (_) {
                          final idx = _path.indexOf(i);
                          final lit = _showing ? (idx >= 0 && idx < _shown && idx >= _shown - 3) : (idx >= 0 && idx < score);
                          return GestureDetector(
                            onTap: () => _tap(i),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 160),
                              margin: const EdgeInsets.all(3),
                              decoration: BoxDecoration(
                                color: lit ? const Color(0xFFF472B6) : Colors.white.withValues(alpha: 0.08),
                                borderRadius: BorderRadius.circular(10),
                                boxShadow: lit ? const [BoxShadow(color: Color(0xFFF472B6), blurRadius: 12)] : null,
                              ),
                              alignment: Alignment.center,
                              child: !_showing && idx == 0 && score == 0 ? const Text('👣', style: TextStyle(fontSize: 18)) : null,
                            ),
                          );
                        }),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// ── 23 Rotate Tiles ────────────────────────────────────────────────────────
class TileRotateGame extends StatefulWidget {
  const TileRotateGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TileRotateGame> createState() => _TileRotateState();
}

class _TileRotateState extends State<TileRotateGame> {
  late final int _s;
  late final List<int> _rot; // quarter turns
  late final int _scene;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _s = lvI(widget.level, 3, 6);
    _scene = widget.args.rng.nextInt(3);
    _rot = List.generate(_s * _s, (_) => widget.args.rng.nextInt(4));
    if (_right == _rot.length) _rot[0] = 1;
    widget.args.onProgress(_right, _rot.length);
  }

  int get _right => _rot.where((q) => q % 4 == 0).length;

  void _tap(int i) {
    if (_over) return;
    setState(() => _rot[i] = (_rot[i] + 1) % 4);
    HapticFeedback.selectionClick();
    widget.args.onProgress(_right, _rot.length);
    if (_right == _rot.length) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF134E4A), Color(0xFF042F2E)]),
        Column(children: [
          const ArcadeBanner(child: Text('Tap a tile to turn it')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(14),
                  child: LayoutBuilder(builder: (context, c) {
                    final size = c.maxWidth, ts = size / _s;
                    return Stack(children: [
                      for (var i = 0; i < _rot.length; i++)
                        Positioned(
                          left: (i % _s) * ts,
                          top: (i ~/ _s) * ts,
                          width: ts,
                          height: ts,
                          child: GestureDetector(
                            onTap: () => _tap(i),
                            child: AnimatedRotation(
                              turns: _rot[i] / 4,
                              duration: const Duration(milliseconds: 200),
                              child: Container(
                                margin: const EdgeInsets.all(1),
                                child: ClipRect(
                                  child: OverflowBox(
                                    alignment: Alignment.topLeft,
                                    minWidth: size,
                                    maxWidth: size,
                                    minHeight: size,
                                    maxHeight: size,
                                    child: Transform.translate(
                                      offset: Offset(-(i % _s) * ts, -(i ~/ _s) * ts),
                                      child: CustomPaint(size: Size(size, size), painter: _OceanPainter(_scene)),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                    ]);
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

class _OceanPainter extends CustomPainter {
  _OceanPainter(this.scene);
  final int scene;
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width, h = s.height;
    final sky = [
      [const Color(0xFFFDBA74), const Color(0xFFF472B6)],
      [const Color(0xFF7DD3FC), const Color(0xFFE0F2FE)],
      [const Color(0xFF0F172A), const Color(0xFF6366F1)],
    ][scene];
    canvas.drawRect(Rect.fromLTWH(0, 0, w, h * 0.55), Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: sky).createShader(Rect.fromLTWH(0, 0, w, h * 0.55)));
    canvas.drawCircle(Offset(w * 0.3, h * 0.45), w * 0.14, Paint()..color = scene == 2 ? const Color(0xFFF1F5F9) : const Color(0xFFFDE047));
    canvas.drawRect(Rect.fromLTWH(0, h * 0.55, w, h * 0.45), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF0EA5E9), Color(0xFF1E3A8A)]).createShader(Rect.fromLTWH(0, h * 0.55, w, h * 0.45)));
    for (var i = 0; i < 6; i++) {
      final y = h * (0.62 + i * 0.06);
      canvas.drawLine(Offset(w * 0.1 + i * 9, y), Offset(w * 0.45 + i * 9, y), Paint()
        ..color = Colors.white38
        ..strokeWidth = 2);
    }
    final boat = Path()
      ..moveTo(w * 0.55, h * 0.6)
      ..lineTo(w * 0.85, h * 0.6)
      ..lineTo(w * 0.8, h * 0.68)
      ..lineTo(w * 0.6, h * 0.68)
      ..close();
    canvas.drawPath(boat, Paint()..color = const Color(0xFF7C2D12));
    final sail = Path()
      ..moveTo(w * 0.7, h * 0.3)
      ..lineTo(w * 0.7, h * 0.58)
      ..lineTo(w * 0.86, h * 0.58)
      ..close();
    canvas.drawPath(sail, Paint()..color = Colors.white);
    canvas.drawCircle(Offset(w * 0.18, h * 0.85), w * 0.05, Paint()..color = const Color(0xFFFB923C));
    canvas.drawCircle(Offset(w * 0.82, h * 0.88), w * 0.04, Paint()..color = const Color(0xFFFACC15));
  }

  @override
  bool shouldRepaint(covariant _OceanPainter old) => old.scene != scene;
}

// ── 24 Knight Coins ────────────────────────────────────────────────────────
class KnightCoinsGame extends StatefulWidget {
  const KnightCoinsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<KnightCoinsGame> createState() => _KnightCoinsState();
}

class _KnightCoinsState extends State<KnightCoinsGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _coinsStart;
  late final int _n;
  late int _k;
  late final Set<int> _coins;
  late final int _coinsStart;
  late int _movesLeft;

  static const _jumps = [(1, 2), (2, 1), (-1, 2), (-2, 1), (1, -2), (2, -1), (-1, -2), (-2, -1)];

  List<int> _targets(int from) => [
        for (final (dx, dy) in _jumps)
          if (from % _n + dx >= 0 && from % _n + dx < _n && from ~/ _n + dy >= 0 && from ~/ _n + dy < _n) (from ~/ _n + dy) * _n + from % _n + dx,
      ];

  int _dist(int a, int b) {
    final d = {a: 0};
    final q = Queue<int>()..add(a);
    while (q.isNotEmpty) {
      final c = q.removeFirst();
      if (c == b) return d[c]!;
      for (final t in _targets(c)) {
        if (!d.containsKey(t)) {
          d[t] = d[c]! + 1;
          q.add(t);
        }
      }
    }
    return 6;
  }

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _n = lvI(widget.level, 5, 8);
    final cells = List.generate(_n * _n, (i) => i)..shuffle(r);
    _k = cells.first;
    _coins = cells.skip(1).take(lvI(widget.level, 3, 10)).toSet();
    _coinsStart = _coins.length;
    // Budget = a greedy nearest-coin tour plus some slack.
    var at = _k, need = 0;
    final left = {..._coins};
    while (left.isNotEmpty) {
      final next = left.reduce((a, b) => _dist(at, a) <= _dist(at, b) ? a : b);
      need += _dist(at, next);
      at = next;
      left.remove(next);
    }
    _movesLeft = need + lvI(widget.level, 8, 1);
    startScore();
  }

  void _tap(int c) {
    if (ended || !_targets(_k).contains(c)) return;
    setState(() {
      _k = c;
      _movesLeft--;
    });
    HapticFeedback.selectionClick();
    if (_coins.remove(c)) {
      if (addPoint()) return;
    }
    if (_movesLeft <= 0) knockout('Out of moves');
  }

  @override
  Widget build(BuildContext context) {
    final can = _targets(_k).toSet();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF292524), Color(0xFF0C0A09)]),
      Column(children: [
        ArcadeBanner(child: Text('Knight jumps (L shape) · coins ${_coinsStart - _coins.length}/$_coinsStart · moves $_movesLeft')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: GridView.count(
                  crossAxisCount: _n,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var i = 0; i < _n * _n; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: Container(
                          color: can.contains(i)
                              ? const Color(0xFF65A30D)
                              : ((i ~/ _n + i % _n).isEven ? const Color(0xFFE7E5E4) : const Color(0xFF78716C)),
                          alignment: Alignment.center,
                          child: FittedBox(
                            child: Padding(
                              padding: const EdgeInsets.all(4),
                              child: Text(i == _k ? '♞' : (_coins.contains(i) ? '🪙' : ''), style: const TextStyle(fontSize: 30, color: Colors.black)),
                            ),
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
}

// ── 25 Peg Jump ────────────────────────────────────────────────────────────
class PegJumpGame extends StatefulWidget {
  const PegJumpGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PegJumpGame> createState() => _PegJumpState();
}

class _PegJumpState extends State<PegJumpGame> {
  late final int _n;
  late final Set<int> _board; // playable cells
  late Set<int> _pegs;
  late final int _start;
  int? _sel;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _n = lvI(widget.level, 4, 7);
    _board = {
      for (var y = 0; y < _n; y++)
        for (var x = 0; x < _n; x++)
          if (_n < 6 || !((x < 2 || x >= _n - 2) && (y < 2 || y >= _n - 2))) y * _n + x,
    };
    final want = lvI(widget.level, 3, 14);
    // Work backwards from a single peg: "un-jump" to add pegs (always solvable).
    var pegs = <int>{_board.elementAt(r.nextInt(_board.length))};
    final dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)];
    for (var i = 0; i < want * 6 && pegs.length < want + 1; i++) {
      final a = pegs.elementAt(r.nextInt(pegs.length));
      final (dx, dy) = dirs[r.nextInt(4)];
      final ax = a % _n, ay = a ~/ _n;
      final bx = ax + dx, by = ay + dy, cx = ax + 2 * dx, cy = ay + 2 * dy;
      if (cx < 0 || cy < 0 || cx >= _n || cy >= _n) continue;
      final b = by * _n + bx, c = cy * _n + cx;
      if (!_board.contains(b) || !_board.contains(c) || pegs.contains(b) || pegs.contains(c)) continue;
      pegs = {...pegs}
        ..remove(a)
        ..add(b)
        ..add(c);
    }
    _pegs = pegs;
    _start = pegs.length;
    widget.args.onProgress(0, math.max(1, _start - 1));
  }

  int? _jumpOver(int from, int to) {
    final fx = from % _n, fy = from ~/ _n, tx = to % _n, ty = to ~/ _n;
    if (!((fx == tx && (fy - ty).abs() == 2) || (fy == ty && (fx - tx).abs() == 2))) return null;
    final mid = ((fy + ty) ~/ 2) * _n + (fx + tx) ~/ 2;
    return _pegs.contains(mid) ? mid : null;
  }

  bool get _anyMove {
    for (final p in _pegs) {
      for (final (dx, dy) in [(2, 0), (-2, 0), (0, 2), (0, -2)]) {
        final tx = p % _n + dx, ty = p ~/ _n + dy;
        if (tx < 0 || ty < 0 || tx >= _n || ty >= _n) continue;
        final t = ty * _n + tx;
        if (_board.contains(t) && !_pegs.contains(t) && _jumpOver(p, t) != null) return true;
      }
    }
    return false;
  }

  void _tap(int c) {
    if (_over || !_board.contains(c)) return;
    if (_pegs.contains(c)) {
      setState(() => _sel = c);
      return;
    }
    final s = _sel;
    if (s == null) return;
    final mid = _jumpOver(s, c);
    if (mid == null) return;
    setState(() {
      _pegs = {..._pegs}
        ..remove(s)
        ..remove(mid)
        ..add(c);
      _sel = c;
    });
    HapticFeedback.selectionClick();
    widget.args.onProgress(_start - _pegs.length, math.max(1, _start - 1));
    if (_pegs.length == 1) {
      _over = true;
      widget.args.onComplete();
    } else if (!_anyMove) {
      _over = true;
      widget.args.onKnockout('No jumps left');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF431407), Color(0xFF1C0A04)]),
        Column(children: [
          ArcadeBanner(child: Text('Tap a peg, then the hole 2 away · ${_pegs.length} left')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(18),
                  child: GridView.count(
                    crossAxisCount: _n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _n * _n; i++)
                        _board.contains(i)
                            ? GestureDetector(
                                onTap: () => _tap(i),
                                child: Container(
                                  margin: const EdgeInsets.all(5),
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: _pegs.contains(i) ? null : const Color(0xFF451A03),
                                    gradient: _pegs.contains(i) ? const RadialGradient(center: Alignment(-0.3, -0.3), colors: [Color(0xFFFED7AA), Color(0xFFEA580C)]) : null,
                                    border: Border.all(color: _sel == i ? Colors.white : Colors.black26, width: _sel == i ? 3 : 1),
                                  ),
                                ),
                              )
                            : const SizedBox.shrink(),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// ── 26 Equation Builder ────────────────────────────────────────────────────
class EquationBuilderGame extends StatefulWidget {
  const EquationBuilderGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<EquationBuilderGame> createState() => _EquationBuilderState();
}

class _EquationBuilderState extends State<EquationBuilderGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 5);
  late int _target;
  late List<String> _nums, _ops;
  final _expr = <(String, int)>[]; // token, tray index (-1 op)
  final _usedNums = <int>{};

  @override
  void initState() {
    super.initState();
    startScore();
    _round();
  }

  void _round() {
    final r = args.rng;
    final count = lvI(widget.level, 2, 4);
    final opsPool = widget.level > 15 ? ['+', '−', '×'] : (widget.level > 6 ? ['+', '−', '×'] : ['+', '−']);
    final nums = List.generate(count, (_) => 1 + r.nextInt(lvI(widget.level, 9, 15)));
    var v = nums.first;
    for (var i = 1; i < count; i++) {
      final op = opsPool[r.nextInt(opsPool.length)];
      v = op == '+' ? v + nums[i] : (op == '−' ? v - nums[i] : v * nums[i]);
    }
    _target = v;
    _nums = [...nums.map((n) => '$n'), for (var d = 0; d < lvI(widget.level, 1, 3); d++) '${1 + r.nextInt(12)}']..shuffle(r);
    _ops = opsPool;
    _expr.clear();
    _usedNums.clear();
  }

  int? get _value {
    if (_expr.isEmpty || _expr.length.isEven) return null;
    var v = int.parse(_expr.first.$1);
    for (var i = 1; i + 1 < _expr.length; i += 2) {
      final n = int.parse(_expr[i + 1].$1);
      v = switch (_expr[i].$1) { '+' => v + n, '−' => v - n, _ => v * n };
    }
    return v;
  }

  void _add(String tok, int idx) {
    if (ended) return;
    final wantNumber = _expr.length.isEven;
    if (wantNumber != (idx >= 0)) return;
    setState(() {
      _expr.add((tok, idx));
      if (idx >= 0) _usedNums.add(idx);
    });
    HapticFeedback.selectionClick();
    if (_value == _target && _expr.length >= 3) {
      if (addPoint()) return;
      setState(_round);
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF064E3B), Color(0xFF022C22)]),
        Column(children: [
          ArcadeBanner(child: Text('Make $_target · round ${math.min(score + 1, goal)}/$goal')),
          const Text('Worked left to right', style: TextStyle(color: Colors.white54, fontSize: 12)),
          Expanded(
            child: Center(
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Text('$_target', style: const TextStyle(color: Color(0xFFFDE68A), fontSize: 60, fontWeight: FontWeight.w900)),
                const SizedBox(height: 12),
                Container(
                  constraints: const BoxConstraints(minWidth: 220, minHeight: 60),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white24)),
                  child: Text(_expr.isEmpty ? '…' : '${_expr.map((e) => e.$1).join(' ')}${_value != null ? '  = $_value' : ''}',
                      textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900)),
                ),
                TextButton(
                  onPressed: () => setState(() {
                    _expr.clear();
                    _usedNums.clear();
                  }),
                  child: const Text('Clear', style: TextStyle(color: Colors.white70)),
                ),
              ]),
            ),
          ),
          Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
            for (var i = 0; i < _nums.length; i++)
              _tile(_nums[i], () => _add(_nums[i], i), dim: _usedNums.contains(i)),
          ]),
          const SizedBox(height: 10),
          Wrap(spacing: 8, alignment: WrapAlignment.center, children: [for (final o in _ops) _tile(o, () => _add(o, -1), op: true)]),
          const SizedBox(height: 16),
        ]),
      ]);

  Widget _tile(String t, VoidCallback onTap, {bool dim = false, bool op = false}) => GestureDetector(
        onTap: dim ? null : onTap,
        child: Opacity(
          opacity: dim ? 0.25 : 1,
          child: Container(
            width: 54,
            height: 50,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: op ? const Color(0xFF10B981) : Colors.white.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: Colors.white24),
            ),
            child: Text(t, style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
          ),
        ),
      );
}

// ── 27 Missing Letters ─────────────────────────────────────────────────────
class SpellFillGame extends StatefulWidget {
  const SpellFillGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<SpellFillGame> createState() => _SpellFillState();
}

class _SpellFillState extends State<SpellFillGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 7);
  late String _word;
  late List<int> _blanks;
  late List<String> _letters;
  final _filled = <int, String>{};

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    _round();
  }

  void _round() {
    final r = args.rng;
    final maxLen = lvI(widget.level, 5, 9);
    final pool = kVaultWordBank.where((w) => w.length <= maxLen && w.length >= math.min(maxLen, lvI(widget.level, 5, 7))).toList();
    _word = pool[r.nextInt(pool.length)];
    final idx = List.generate(_word.length, (i) => i)..shuffle(r);
    _blanks = (idx.take(math.min(_word.length - 1, lvI(widget.level, 1, 5))).toList())..sort();
    const abc = 'ABCDEFGHIJKLMNOPRSTUVWY';
    _letters = {for (final b in _blanks) _word[b], for (var d = 0; d < lvI(widget.level, 3, 6); d++) abc[r.nextInt(abc.length)]}.toList()..shuffle(r);
    _filled.clear();
  }

  void _pick(String ch) {
    if (ended) return;
    final next = _blanks.firstWhere((b) => !_filled.containsKey(b), orElse: () => -1);
    if (next < 0) return;
    if (_word[next] == ch) {
      setState(() => _filled[next] = ch);
      HapticFeedback.selectionClick();
      if (_filled.length == _blanks.length) {
        if (addPoint()) return;
        Future<void>.delayed(const Duration(milliseconds: 350), () {
          if (mounted && !ended) setState(_round);
        });
      }
    } else {
      setState(() {});
      loseHeart('Wrong letter');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF2E1065), Color(0xFF0F0524)]),
        Column(children: [
          arcadeTopBar('Spell it · ${score}/$goal', hearts: hearts),
          Expanded(
            child: Center(
              child: Wrap(spacing: 6, children: [
                for (var i = 0; i < _word.length; i++)
                  Container(
                    width: 38,
                    height: 50,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: _blanks.contains(i) ? (_filled.containsKey(i) ? const Color(0xFF16A34A) : Colors.white10) : const Color(0xFF7C3AED),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.white24),
                    ),
                    child: Text(_blanks.contains(i) ? (_filled[i] ?? '_') : _word[i], style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
                  ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 16),
            child: Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
              for (final ch in _letters)
                GestureDetector(
                  onTap: () => _pick(ch),
                  child: Container(
                    width: 50,
                    height: 50,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFA78BFA))),
                    child: Text(ch, style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                  ),
                ),
            ]),
          ),
        ]),
      ]);
}

// ── 28 Secret Code ─────────────────────────────────────────────────────────
ArcadeQ Function(int, math.Random) _cipherQ(int level) => (round, r) {
      final pool = kVaultWordBank.where((w) => w.length <= lvI(level, 5, 9)).toList();
      final word = pool[r.nextInt(pool.length)];
      final shift = 1 + r.nextInt(lvI(level, 3, 12));
      String enc(String w, int s) => String.fromCharCodes(w.codeUnits.map((c) => 65 + (c - 65 + s) % 26));
      final coded = enc(word, shift);
      final wrong = <String>{};
      while (wrong.length < 3) {
        final w = pool[r.nextInt(pool.length)];
        if (w != word && w.length == word.length) wrong.add(w);
        if (wrong.length < 3 && r.nextDouble() < 0.3) wrong.add(enc(word, (shift + 1 + r.nextInt(3)) % 26));
      }
      wrong.remove(word);
      final (opts, ans) = arcadeOptions(word, wrong, r);
      final hint = level <= 10 ? 'Each letter moved $shift forward' : (level <= 20 ? '${word[0]} became ${coded[0]}' : 'Find the real word');
      return ArcadeQ(
        Column(mainAxisSize: MainAxisSize.min, children: [
          Text(coded, style: const TextStyle(fontSize: 32, letterSpacing: 4)),
          const SizedBox(height: 8),
          Text(hint, style: const TextStyle(fontSize: 14, color: Colors.white70, fontWeight: FontWeight.w600)),
        ]),
        opts,
        ans,
      );
    };

// ── 29 What Comes Next ─────────────────────────────────────────────────────
ArcadeQ Function(int, math.Random) _patternQ(int level) => (round, r) {
      const sets = [
        ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'],
        ['🍎', '🍌', '🍇', '🍓', '🍒', '🥝'],
        ['⬆️', '➡️', '⬇️', '⬅️'],
        ['🌑', '🌒', '🌓', '🌔', '🌕'],
        ['🐶', '🐱', '🐭', '🐰', '🦊'],
      ];
      final set = sets[r.nextInt(sets.length)];
      final kind = r.nextInt(level < 8 ? 2 : (level < 18 ? 3 : 4));
      final seq = <String>[];
      String answer;
      switch (kind) {
        case 0: // repeating block
          final len = 2 + r.nextInt(math.min(set.length - 1, lvI(level, 2, 4)));
          final block = (List.of(set)..shuffle(r)).take(len).toList();
          final shown = lvI(level, 6, 8);
          for (var i = 0; i < shown; i++) {
            seq.add(block[i % len]);
          }
          answer = block[shown % len];
        case 1: // walk forward through the set
          final start = r.nextInt(set.length);
          final step = level > 12 ? 2 : 1;
          for (var i = 0; i < 5; i++) {
            seq.add(set[(start + i * step) % set.length]);
          }
          answer = set[(start + 5 * step) % set.length];
        case 2: // growing runs: A, B B, C C C
          final a = (List.of(set)..shuffle(r)).take(3).toList();
          seq.addAll([a[0], a[1], a[1], a[2], a[2], a[2], a[0], a[0], a[0]]);
          answer = a[0];
        default: // mirror: A B C C B ?
          final a = (List.of(set)..shuffle(r)).take(4).toList();
          seq.addAll([a[0], a[1], a[2], a[3], a[3], a[2], a[1]]);
          answer = a[0];
      }
      final (opts, ans) = arcadeOptions(answer, set, r);
      return ArcadeQ(Text('${seq.join(' ')}  ❓', style: const TextStyle(fontSize: 26)), opts, ans);
    };

// ── 30 Spot the Change ─────────────────────────────────────────────────────
class SpotChangeGame extends StatefulWidget {
  const SpotChangeGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<SpotChangeGame> createState() => _SpotChangeState();
}

class _SpotChangeState extends State<SpotChangeGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _diffs.length;
  static const _pool = ['🍎', '🍌', '🍇', '🍓', '🥕', '🌽', '🐶', '🐱', '🐸', '🐵', '⚽', '🎈', '🔑', '🎁', '⭐', '🌙', '☀️', '🌸', '🍄', '🚗', '🚲', '🎸', '📷', '⏰'];
  late final int _n;
  late final List<String> _a, _b;
  late final Set<int> _diffs;
  final _found = <int>{};

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _n = lvI(widget.level, 3, 6);
    final kinds = lvI(widget.level, 6, _pool.length);
    _a = List.generate(_n * _n, (_) => _pool[r.nextInt(kinds)]);
    _b = List.of(_a);
    final cells = List.generate(_n * _n, (i) => i)..shuffle(r);
    _diffs = cells.take(lvI(widget.level, 1, 5)).toSet();
    for (final d in _diffs) {
      var e = _a[d];
      while (e == _a[d]) {
        e = _pool[r.nextInt(kinds)];
      }
      _b[d] = e;
    }
    hearts = 3;
    startScore();
  }

  void _tap(int i) {
    if (ended || _found.contains(i)) return;
    if (_diffs.contains(i)) {
      setState(() => _found.add(i));
      addPoint();
    } else {
      setState(() {});
      loseHeart('Nothing changed there');
    }
  }

  Widget _grid(List<String> cells, {bool tappable = false}) => AspectRatio(
        aspectRatio: 1,
        child: Container(
          padding: const EdgeInsets.all(4),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.92), borderRadius: BorderRadius.circular(14)),
          child: GridView.count(
            crossAxisCount: _n,
            physics: const NeverScrollableScrollPhysics(),
            children: [
              for (var i = 0; i < cells.length; i++)
                GestureDetector(
                  onTap: tappable ? () => _tap(i) : null,
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: tappable && _found.contains(i) ? Border.all(color: const Color(0xFFDC2626), width: 3) : null,
                    ),
                    alignment: Alignment.center,
                    child: FittedBox(child: Padding(padding: const EdgeInsets.all(3), child: Text(cells[i], style: const TextStyle(fontSize: 26)))),
                  ),
                ),
            ],
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
        Column(children: [
          arcadeTopBar('Tap what changed in the bottom picture · ${_found.length}/${_diffs.length}', hearts: hearts),
          Expanded(child: Padding(padding: const EdgeInsets.fromLTRB(40, 4, 40, 4), child: Center(child: _grid(_a)))),
          Expanded(child: Padding(padding: const EdgeInsets.fromLTRB(40, 4, 40, 12), child: Center(child: _grid(_b, tappable: true)))),
        ]),
      ]);
}
