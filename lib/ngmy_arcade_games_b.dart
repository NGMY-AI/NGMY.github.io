import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_games_more.dart';
import 'ngmy_arcade_host.dart';

/// Arcade games 11–20.
Widget ngmyBuildArcadeGameB(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'merge_2048':
      return Merge2048Game(args: a);
    case 'lights_out':
      return LightsOutGame(args: a);
    case 'odd_one':
      return OddOneGame(args: a);
    case 'speed_sort':
      return SpeedSortGame(args: a);
    case 'flag_frenzy':
      return FlagFrenzyGame(args: a);
    case 'balloon_darts':
      return BalloonDartsGame(args: a);
    case 'coin_catcher':
      return CoinCatcherGame(args: a);
    case 'number_rush':
      return NumberRushGame(args: a);
    case 'mini_sudoku':
      return MiniSudokuGame(args: a);
    case 'space_dodge':
      return SpaceDodgeGame(args: a);
    default:
      return ngmyBuildArcadeGameMore(id, a);
  }
}

// 11 ── 2048 Merge ───────────────────────────────────────────────────────────
class Merge2048Game extends StatefulWidget {
  const Merge2048Game({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<Merge2048Game> createState() => _Merge2048State();
}

class _Merge2048State extends State<Merge2048Game> {
  static const target = 256;
  static const goal = 8; // 2 → 256 is 8 doublings
  final _g = List<int>.filled(16, 0);

  @override
  void initState() {
    super.initState();
    _add();
    _add();
    widget.args.onProgress(_level, goal);
  }

  int get _max => _g.reduce(math.max);
  int get _level => _max <= 1 ? 0 : (math.log(_max) / math.ln2).round();

  void _add() {
    final empty = [for (var i = 0; i < 16; i++) if (_g[i] == 0) i];
    if (empty.isEmpty) return;
    _g[empty[widget.args.rng.nextInt(empty.length)]] = widget.args.rng.nextDouble() < 0.9 ? 2 : 4;
  }

  List<int> _slide(List<int> line) {
    final v = line.where((x) => x != 0).toList();
    final out = <int>[];
    for (var i = 0; i < v.length; i++) {
      if (i + 1 < v.length && v[i] == v[i + 1]) {
        out.add(v[i] * 2);
        i++;
      } else {
        out.add(v[i]);
      }
    }
    while (out.length < 4) {
      out.add(0);
    }
    return out;
  }

  void _move(int dx, int dy) {
    final before = List.of(_g);
    for (var k = 0; k < 4; k++) {
      final idx = <int>[
        for (var s = 0; s < 4; s++)
          dx != 0 ? k * 4 + (dx > 0 ? 3 - s : s) : (dy > 0 ? 3 - s : s) * 4 + k,
      ];
      final moved = _slide([for (final i in idx) _g[i]]);
      for (var s = 0; s < 4; s++) {
        _g[idx[s]] = moved[s];
      }
    }
    if (_g.join() == before.join()) return;
    HapticFeedback.selectionClick();
    _add();
    setState(() {});
    widget.args.onProgress(math.min(_level, goal), goal);
    if (_max >= target) {
      widget.args.onComplete();
      return;
    }
    if (!_canMove()) widget.args.onKnockout('No more moves');
  }

  bool _canMove() {
    if (_g.contains(0)) return true;
    for (var i = 0; i < 16; i++) {
      if (i % 4 < 3 && _g[i] == _g[i + 1]) return true;
      if (i < 12 && _g[i] == _g[i + 4]) return true;
    }
    return false;
  }

  Color _tile(int v) {
    const c = {
      2: Color(0xFFFEF3C7), 4: Color(0xFFFDE68A), 8: Color(0xFFFDBA74), 16: Color(0xFFFB923C),
      32: Color(0xFFF87171), 64: Color(0xFFEF4444), 128: Color(0xFFFACC15), 256: Color(0xFFEAB308),
    };
    return c[v] ?? const Color(0xFF334155);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onPanEnd: (d) {
        final v = d.velocity.pixelsPerSecond;
        if (v.distance < 100) return;
        if (v.dx.abs() > v.dy.abs()) {
          _move(v.dx > 0 ? 1 : -1, 0);
        } else {
          _move(0, v.dy > 0 ? 1 : -1);
        }
      },
      child: Column(
        children: [
          const ArcadeBanner(child: Text('Swipe to merge — reach 256')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  margin: const EdgeInsets.all(14),
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: const Color(0xFF1E293B), borderRadius: BorderRadius.circular(16)),
                  child: GridView.count(
                    crossAxisCount: 4,
                    mainAxisSpacing: 8,
                    crossAxisSpacing: 8,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (final v in _g)
                        AnimatedContainer(
                          duration: const Duration(milliseconds: 120),
                          decoration: BoxDecoration(color: v == 0 ? const Color(0xFF334155) : _tile(v), borderRadius: BorderRadius.circular(10)),
                          child: Center(
                            child: v == 0
                                ? null
                                : FittedBox(
                                    child: Padding(
                                      padding: const EdgeInsets.all(6),
                                      child: Text('$v', style: TextStyle(color: v <= 4 ? const Color(0xFF78350F) : Colors.white, fontWeight: FontWeight.w900, fontSize: 28)),
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
          Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              for (final (icon, dx, dy) in const [
                (Icons.arrow_back_rounded, -1, 0),
                (Icons.arrow_upward_rounded, 0, -1),
                (Icons.arrow_downward_rounded, 0, 1),
                (Icons.arrow_forward_rounded, 1, 0),
              ])
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 4),
                  child: IconButton.filledTonal(onPressed: () => _move(dx, dy), icon: Icon(icon)),
                ),
            ]),
          ),
        ],
      ),
    );
  }
}

// 12 ── Lights Out ───────────────────────────────────────────────────────────
class LightsOutGame extends StatefulWidget {
  const LightsOutGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<LightsOutGame> createState() => _LightsOutState();
}

class _LightsOutState extends State<LightsOutGame> {
  static const goal = 3, n = 4;
  final _on = List<bool>.filled(n * n, false);
  int _solved = 0;

  @override
  void initState() {
    super.initState();
    _newBoard();
    widget.args.onProgress(0, goal);
  }

  void _toggle(int i) {
    final r = i ~/ n, c = i % n;
    for (final (dr, dc) in const [(0, 0), (1, 0), (-1, 0), (0, 1), (0, -1)]) {
      final rr = r + dr, cc = c + dc;
      if (rr >= 0 && cc >= 0 && rr < n && cc < n) _on[rr * n + cc] = !_on[rr * n + cc];
    }
  }

  void _newBoard() {
    // Built by pressing a solved board, so it is always solvable.
    _on.fillRange(0, n * n, false);
    final presses = 3 + _solved * 2;
    for (var k = 0; k < presses; k++) {
      _toggle(widget.args.rng.nextInt(n * n));
    }
    if (!_on.contains(true)) _toggle(5);
  }

  void _tap(int i) {
    HapticFeedback.selectionClick();
    setState(() => _toggle(i));
    if (!_on.contains(true)) {
      _solved++;
      widget.args.onProgress(_solved, goal);
      if (_solved >= goal) {
        widget.args.onComplete();
        return;
      }
      Future<void>.delayed(const Duration(milliseconds: 400), () {
        if (mounted) setState(_newBoard);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Text('Board ${math.min(_solved + 1, goal)}/$goal · each tap flips a + shape')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(18),
                child: GridView.count(
                  crossAxisCount: n,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var i = 0; i < n * n; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 160),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(14),
                            color: _on[i] ? const Color(0xFFFDE047) : const Color(0xFF1E1B4B),
                            boxShadow: _on[i] ? [BoxShadow(color: const Color(0xFFFDE047).withValues(alpha: 0.7), blurRadius: 16)] : null,
                            border: Border.all(color: Colors.white12),
                          ),
                          child: Center(child: Icon(_on[i] ? Icons.lightbulb_rounded : Icons.lightbulb_outline_rounded, color: _on[i] ? const Color(0xFF854D0E) : Colors.white24)),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

// 13 ── Spot the Odd One ─────────────────────────────────────────────────────
class OddOneGame extends StatefulWidget {
  const OddOneGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<OddOneGame> createState() => _OddOneState();
}

class _OddOneState extends State<OddOneGame> {
  static const goal = 10;
  static const pairs = [
    ('😀', '😃'), ('🐶', '🐺'), ('🍎', '🍅'), ('⭐', '🌟'), ('🌙', '🌛'), ('🐱', '🐯'), ('🚗', '🚙'), ('🍩', '🍪'),
    ('😺', '😸'), ('🌲', '🌳'), ('🐠', '🐟'), ('🍊', '🍑'), ('⚽', '🏐'), ('🎈', '🔴'), ('🐸', '🐢'), ('💙', '💜'),
    ('🌼', '🌻'), ('🥑', '🥝'), ('🐻', '🐨'), ('🔑', '🗝️'),
    ('🙂', '🙃'), ('😊', '☺️'), ('🕐', '🕑'), ('🔵', '🟦'), ('🍓', '🍒'), ('🐭', '🐹'), ('🌕', '🌝'), ('🧡', '❤️'),
  ];
  int _round = 0, _hearts = 2, _odd = 0;
  late (String, String) _pair;
  int get _size => math.min(5 + _round ~/ 3, 8);

  @override
  void initState() {
    super.initState();
    _next();
    widget.args.onProgress(0, goal);
  }

  void _next() {
    _pair = pairs[widget.args.rng.nextInt(pairs.length)];
    if (widget.args.rng.nextBool()) _pair = (_pair.$2, _pair.$1);
    _odd = widget.args.rng.nextInt(_size * _size);
  }

  void _tap(int i) {
    if (i == _odd) {
      HapticFeedback.selectionClick();
      _round++;
      widget.args.onProgress(_round, goal);
      if (_round >= goal) {
        widget.args.onComplete();
        return;
      }
      setState(_next);
    } else {
      HapticFeedback.heavyImpact();
      setState(() => _hearts--);
      if (_hearts <= 0) widget.args.onKnockout('Too many wrong taps');
    }
  }

  @override
  Widget build(BuildContext context) {
    final s = _size;
    return Column(
      children: [
        ArcadeBanner(child: Row(mainAxisSize: MainAxisSize.min, children: [Text('Round ${_round + 1}/$goal · find the different one  '), ArcadeHearts(left: _hearts)])),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: LayoutBuilder(builder: (context, c) {
                  final cell = c.maxWidth / s;
                  return GridView.count(
                    crossAxisCount: s,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < s * s; i++)
                        GestureDetector(
                          onTap: () => _tap(i),
                          child: Center(child: emojiText(i == _odd ? _pair.$2 : _pair.$1, cell * 0.62)),
                        ),
                    ],
                  );
                }),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

// 14 ── Speed Sort ───────────────────────────────────────────────────────────
class SpeedSortGame extends StatefulWidget {
  const SpeedSortGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SpeedSortGame> createState() => _SpeedSortState();
}

class _SpeedSortState extends State<SpeedSortGame> {
  static const goal = 20;
  static const sets = [
    ('Fruit', ['🍎', '🍌', '🍇', '🍓', '🍍', '🥭', '🍐'], 'Animal', ['🐶', '🐱', '🦁', '🐸', '🐵', '🦒', '🐘']),
    ('Ride', ['🚗', '🚌', '🚲', '✈️', '🚀', '🚂', '⛵'], 'Food', ['🍕', '🍔', '🌮', '🍜', '🍩', '🍟', '🥐']),
    ('Sport', ['⚽', '🏀', '🎾', '🏈', '🏓', '🏐', '⛳'], 'Music', ['🎸', '🎹', '🥁', '🎺', '🎻', '🎷', '🎤']),
  ];
  late final (String, List<String>, String, List<String>) _set = sets[widget.args.rng.nextInt(sets.length)];
  int _done = 0, _hearts = 3;
  late String _item;
  late bool _left;
  double _dx = 0;

  @override
  void initState() {
    super.initState();
    _next();
    widget.args.onProgress(0, goal);
  }

  void _next() {
    _left = widget.args.rng.nextBool();
    final list = _left ? _set.$2 : _set.$4;
    _item = list[widget.args.rng.nextInt(list.length)];
    _dx = 0;
  }

  void _send(bool left) {
    if (left == _left) {
      HapticFeedback.selectionClick();
      _done++;
      widget.args.onProgress(_done, goal);
      if (_done >= goal) {
        widget.args.onComplete();
        return;
      }
    } else {
      HapticFeedback.heavyImpact();
      _hearts--;
      if (_hearts <= 0) {
        widget.args.onKnockout('Too many in the wrong side');
        return;
      }
    }
    setState(_next);
  }

  @override
  Widget build(BuildContext context) {
    Widget side(String label, bool left, Color color) => Expanded(
          child: GestureDetector(
            onTap: () => _send(left),
            child: Container(
              margin: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: color.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(20), border: Border.all(color: color, width: 2)),
              child: Center(child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 22))),
            ),
          ),
        );
    return Column(
      children: [
        ArcadeBanner(child: Row(mainAxisSize: MainAxisSize.min, children: [const Text('Swipe or tap the right side  '), ArcadeHearts(left: _hearts)])),
        Expanded(
          child: GestureDetector(
            onHorizontalDragUpdate: (d) => setState(() => _dx += d.delta.dx),
            onHorizontalDragEnd: (d) {
              if (_dx.abs() > 40 || d.primaryVelocity!.abs() > 300) {
                _send((d.primaryVelocity ?? _dx) < 0 || _dx < -40);
              } else {
                setState(() => _dx = 0);
              }
            },
            child: Center(
              child: Transform.translate(
                offset: Offset(_dx, 0),
                child: Transform.rotate(
                  angle: _dx / 600,
                  child: Container(
                    width: 150,
                    height: 150,
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 20)]),
                    child: Center(child: emojiText(_item, 80)),
                  ),
                ),
              ),
            ),
          ),
        ),
        SizedBox(height: 110, child: Row(children: [side('← ${_set.$1}', true, const Color(0xFF22D3EE)), side('${_set.$3} →', false, const Color(0xFFF472B6))])),
      ],
    );
  }
}

// 15 ── Flag Frenzy ──────────────────────────────────────────────────────────
class FlagFrenzyGame extends StatefulWidget {
  const FlagFrenzyGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<FlagFrenzyGame> createState() => _FlagFrenzyState();
}

class _FlagFrenzyState extends State<FlagFrenzyGame> {
  static const goal = 10;
  static const flags = [
    ('🇺🇸', 'United States'), ('🇨🇦', 'Canada'), ('🇲🇽', 'Mexico'), ('🇧🇷', 'Brazil'), ('🇬🇧', 'United Kingdom'), ('🇫🇷', 'France'),
    ('🇩🇪', 'Germany'), ('🇮🇹', 'Italy'), ('🇪🇸', 'Spain'), ('🇳🇬', 'Nigeria'), ('🇰🇪', 'Kenya'), ('🇹🇿', 'Tanzania'),
    ('🇬🇭', 'Ghana'), ('🇿🇦', 'South Africa'), ('🇪🇬', 'Egypt'), ('🇯🇵', 'Japan'), ('🇨🇳', 'China'), ('🇮🇳', 'India'),
    ('🇰🇷', 'South Korea'), ('🇦🇺', 'Australia'), ('🇦🇷', 'Argentina'), ('🇨🇩', 'DR Congo'), ('🇺🇬', 'Uganda'), ('🇷🇼', 'Rwanda'),
    ('🇯🇲', 'Jamaica'), ('🇨🇴', 'Colombia'), ('🇵🇹', 'Portugal'), ('🇳🇱', 'Netherlands'), ('🇸🇪', 'Sweden'), ('🇹🇷', 'Turkey'),
    ('🇪🇹', 'Ethiopia'), ('🇨🇲', 'Cameroon'), ('🇸🇳', 'Senegal'), ('🇲🇦', 'Morocco'), ('🇵🇭', 'Philippines'), ('🇭🇹', 'Haiti'),
  ];
  int _q = 0, _hearts = 3;
  late (String, String) _flag;
  late List<String> _options;
  String? _wrongPick;

  @override
  void initState() {
    super.initState();
    _next();
    widget.args.onProgress(0, goal);
  }

  void _next() {
    _flag = flags[widget.args.rng.nextInt(flags.length)];
    final others = (List.of(flags)..remove(_flag)..shuffle(widget.args.rng)).take(3).map((f) => f.$2);
    _options = [_flag.$2, ...others]..shuffle(widget.args.rng);
    _wrongPick = null;
  }

  void _answer(String a) {
    if (a == _flag.$2) {
      HapticFeedback.selectionClick();
      _q++;
      widget.args.onProgress(_q, goal);
      if (_q >= goal) {
        widget.args.onComplete();
        return;
      }
      setState(_next);
    } else {
      HapticFeedback.heavyImpact();
      setState(() {
        _hearts--;
        _wrongPick = a;
      });
      if (_hearts <= 0) widget.args.onKnockout('That was ${_flag.$2}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Row(mainAxisSize: MainAxisSize.min, children: [Text('Flag ${_q + 1}/$goal  '), ArcadeHearts(left: _hearts)])),
        Expanded(child: Center(child: emojiText(_flag.$1, 130))),
        Padding(
          padding: const EdgeInsets.all(12),
          child: Column(children: [
            for (final o in _options)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: SizedBox(
                  width: double.infinity,
                  height: 50,
                  child: FilledButton(
                    onPressed: () => _answer(o),
                    style: FilledButton.styleFrom(
                      backgroundColor: o == _wrongPick ? const Color(0xFF7F1D1D) : Colors.white.withValues(alpha: 0.14),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    child: Text(o, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                  ),
                ),
              ),
          ]),
        ),
      ],
    );
  }
}

// 16 ── Balloon Darts ────────────────────────────────────────────────────────
class BalloonDartsGame extends StatefulWidget {
  const BalloonDartsGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BalloonDartsGame> createState() => _BalloonDartsState();
}

class _BalloonDartsState extends State<BalloonDartsGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 10, darts = 14;
  final _balloons = <({double x, double y, double speed, int color})>[];
  double _aim = 0.5, _aimDir = 1;
  final _flying = <({double x, double y})>[];
  int _popped = 0, _thrown = 0;
  Size _size = Size.zero;
  static const _colors = [Color(0xFFF43F5E), Color(0xFF3B82F6), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFFA855F7)];

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      if (_size.isEmpty) return;
      while (_balloons.length < 6) {
        final r = widget.args.rng;
        _balloons.add((x: r.nextDouble(), y: 0.12 + r.nextDouble() * 0.35, speed: (r.nextBool() ? 1 : -1) * (0.26 + r.nextDouble() * 0.30), color: r.nextInt(_colors.length)));
      }
      for (var i = 0; i < _balloons.length; i++) {
        final b = _balloons[i];
        var x = b.x + b.speed * dt;
        var s = b.speed;
        if (x < 0.05 || x > 0.95) s = -s;
        x = x.clamp(0.05, 0.95);
        _balloons[i] = (x: x, y: b.y, speed: s, color: b.color);
      }
      _aim += _aimDir * 0.8 * dt;
      if (_aim > 0.92 || _aim < 0.08) _aimDir = -_aimDir;
      for (var i = 0; i < _flying.length; i++) {
        _flying[i] = (x: _flying[i].x, y: _flying[i].y - 1.4 * dt);
      }
      // Hits.
      for (final d in List.of(_flying)) {
        for (final b in List.of(_balloons)) {
          if ((d.x - b.x).abs() < 0.045 && (d.y - b.y).abs() < 0.045) {
            _balloons.remove(b);
            _flying.remove(d);
            HapticFeedback.mediumImpact();
            _popped++;
            widget.args.onProgress(_popped, goal);
            if (_popped >= goal) {
              stopLoop();
              widget.args.onComplete();
              return;
            }
            break;
          }
        }
      }
      _flying.removeWhere((d) => d.y < -0.05);
      if (_thrown >= darts && _flying.isEmpty && _popped < goal) {
        stopLoop();
        widget.args.onKnockout('Out of darts');
        return;
      }
      setState(() {});
    });
  }

  void _throw() {
    if (_thrown >= darts) return;
    _thrown++;
    _flying.add((x: _aim, y: 0.85));
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      _size = c.biggest;
      final w = c.maxWidth, h = c.maxHeight;
      return GestureDetector(
        onTapDown: (_) => _throw(),
        child: Stack(children: [
          const Positioned.fill(child: ColoredBox(color: Colors.transparent)),
          for (final b in _balloons)
            Positioned(
              left: b.x * w - 24,
              top: b.y * h - 30,
              child: Column(children: [
                Container(
                  width: 48,
                  height: 58,
                  decoration: BoxDecoration(
                    borderRadius: const BorderRadius.all(Radius.elliptical(24, 29)),
                    gradient: RadialGradient(center: const Alignment(-0.3, -0.4), colors: [Colors.white.withValues(alpha: 0.8), _colors[b.color]], stops: const [0, 0.45]),
                  ),
                ),
                Container(width: 1, height: 22, color: Colors.white54),
              ]),
            ),
          for (final d in _flying) Positioned(left: d.x * w - 6, top: d.y * h, child: const Icon(Icons.navigation_rounded, color: Colors.white, size: 22)),
          // Launcher sliding along the bottom.
          Positioned(left: _aim * w - 18, top: 0.85 * h, child: const Icon(Icons.navigation_rounded, color: Color(0xFFFDE68A), size: 36)),
          Positioned(left: _aim * w - 1, top: 0.12 * h, height: 0.72 * h, width: 2, child: ColoredBox(color: Colors.white.withValues(alpha: 0.12))),
          Align(alignment: Alignment.topCenter, child: ArcadeBanner(child: Text('Tap to throw · ${darts - _thrown} darts left'))),
        ]),
      );
    });
  }
}

// 17 ── Coin Catcher ─────────────────────────────────────────────────────────
class CoinCatcherGame extends StatefulWidget {
  const CoinCatcherGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<CoinCatcherGame> createState() => _CoinCatcherState();
}

class _CoinCatcherState extends State<CoinCatcherGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 25;
  final _drops = <({double x, double y, double v, int kind})>[]; // kind 0 coin, 1 gem, 2 rock
  double _basket = 0.5, _spawn = 0;
  int _score = 0, _hearts = 3;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.2, 0.5 - _score * 0.014);
        final r = widget.args.rng.nextDouble();
        _drops.add((x: 0.06 + widget.args.rng.nextDouble() * 0.88, y: -0.05, v: 0.5 + widget.args.rng.nextDouble() * 0.3 + _score * 0.016, kind: r < 0.45 ? 2 : (r < 0.50 ? 1 : 0)));
      }
      final kept = <({double x, double y, double v, int kind})>[];
      for (final d in _drops) {
        final y = d.y + d.v * dt;
        if (y > 0.86 && y < 0.95 && (d.x - _basket).abs() < 0.09) {
          if (d.kind == 2) {
            HapticFeedback.heavyImpact();
            _hearts--;
            if (_hearts <= 0) {
              stopLoop();
              widget.args.onKnockout('Too many rocks');
              return;
            }
          } else {
            HapticFeedback.selectionClick();
            _score += d.kind == 1 ? 3 : 1;
            widget.args.onProgress(math.min(_score, goal), goal);
            if (_score >= goal) {
              stopLoop();
              widget.args.onComplete();
              return;
            }
          }
          continue;
        }
        if (y < 1.05) kept.add((x: d.x, y: y, v: d.v, kind: d.kind));
      }
      _drops
        ..clear()
        ..addAll(kept);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      final w = c.maxWidth, h = c.maxHeight;
      return GestureDetector(
        onHorizontalDragUpdate: (d) => _basket = (d.localPosition.dx / w).clamp(0.08, 0.92),
        onTapDown: (d) => _basket = (d.localPosition.dx / w).clamp(0.08, 0.92),
        child: Stack(children: [
          const Positioned.fill(child: ColoredBox(color: Colors.transparent)),
          for (final d in _drops) Positioned(left: d.x * w - 18, top: d.y * h, child: emojiText(['🪙', '💎', '🪨'][d.kind], 34)),
          Positioned(left: _basket * w - 40, top: 0.88 * h, child: emojiText('🧺', 64)),
          Align(
            alignment: Alignment.topCenter,
            child: ArcadeBanner(child: Row(mainAxisSize: MainAxisSize.min, children: [const Text('Drag the basket · 💎 = +3  '), ArcadeHearts(left: _hearts)])),
          ),
        ]),
      );
    });
  }
}

// 18 ── Number Rush ──────────────────────────────────────────────────────────
class NumberRushGame extends StatefulWidget {
  const NumberRushGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<NumberRushGame> createState() => _NumberRushState();
}

class _NumberRushState extends State<NumberRushGame> {
  static const goal = 25;
  late final List<int> _grid = List.generate(goal, (i) => i + 1)..shuffle(widget.args.rng);
  int _next = 1;
  int? _wrong;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
  }

  void _tap(int v) {
    if (v == _next) {
      HapticFeedback.selectionClick();
      setState(() {
        _next++;
        _wrong = null;
        // The numbers move to new places after every tap, so you have to look again each time.
        _grid.shuffle(widget.args.rng);
      });
      widget.args.onProgress(_next - 1, goal);
      if (_next > goal) widget.args.onComplete();
    } else if (v >= _next) {
      HapticFeedback.heavyImpact();
      setState(() => _wrong = v);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Text(_next > goal ? 'Done!' : 'Find  $_next')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: GridView.count(
                  crossAxisCount: 5,
                  mainAxisSpacing: 8,
                  crossAxisSpacing: 8,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (final v in _grid)
                      GestureDetector(
                        onTap: () => _tap(v),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 150),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                            color: v < _next ? const Color(0xFF22C55E).withValues(alpha: 0.25) : (v == _wrong ? const Color(0xFF7F1D1D) : Colors.white.withValues(alpha: 0.12)),
                            border: Border.all(color: v < _next ? const Color(0xFF22C55E) : Colors.white24),
                          ),
                          child: Center(
                            child: Text('$v', style: TextStyle(color: v < _next ? const Color(0xFF86EFAC) : Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

// 19 ── Mini Sudoku ──────────────────────────────────────────────────────────
class MiniSudokuGame extends StatefulWidget {
  const MiniSudokuGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<MiniSudokuGame> createState() => _MiniSudokuState();
}

class _MiniSudokuState extends State<MiniSudokuGame> {
  static const goal = 2;
  late List<int> _solution;
  late List<bool> _given;
  late List<int> _cells;
  int _solved = 0;
  int? _selected;

  @override
  void initState() {
    super.initState();
    _newPuzzle();
    widget.args.onProgress(0, goal);
  }

  void _newPuzzle() {
    // A valid 4×4 grid, shuffled by digits, rows within bands and bands.
    const base = [1, 2, 3, 4, 3, 4, 1, 2, 2, 1, 4, 3, 4, 3, 2, 1];
    final r = widget.args.rng;
    final digits = [1, 2, 3, 4]..shuffle(r);
    var rows = [0, 1, 2, 3];
    if (r.nextBool()) rows = [1, 0, 2, 3];
    if (r.nextBool()) rows = [rows[0], rows[1], rows[3], rows[2]];
    if (r.nextBool()) rows = [rows[2], rows[3], rows[0], rows[1]];
    _solution = [for (final row in rows) for (var c = 0; c < 4; c++) digits[base[row * 4 + c] - 1]];
    final show = List<int>.generate(16, (i) => i)..shuffle(r);
    final givens = show.take(7 - _solved).toSet();
    _given = List.generate(16, givens.contains);
    _cells = List.generate(16, (i) => _given[i] ? _solution[i] : 0);
    _selected = null;
  }

  bool _valid() {
    for (var i = 0; i < 4; i++) {
      final row = {for (var c = 0; c < 4; c++) _cells[i * 4 + c]};
      final col = {for (var rr = 0; rr < 4; rr++) _cells[rr * 4 + i]};
      final br = (i ~/ 2) * 2, bc = (i % 2) * 2;
      final box = {_cells[br * 4 + bc], _cells[br * 4 + bc + 1], _cells[(br + 1) * 4 + bc], _cells[(br + 1) * 4 + bc + 1]};
      if (row.length < 4 || col.length < 4 || box.length < 4 || row.contains(0)) return false;
    }
    return true;
  }

  void _put(int v) {
    final s = _selected;
    if (s == null || _given[s]) return;
    HapticFeedback.selectionClick();
    setState(() => _cells[s] = v);
    if (!_cells.contains(0) && _valid()) {
      _solved++;
      widget.args.onProgress(_solved, goal);
      if (_solved >= goal) {
        widget.args.onComplete();
        return;
      }
      Future<void>.delayed(const Duration(milliseconds: 450), () {
        if (mounted) setState(_newPuzzle);
      });
    }
  }

  bool _clash(int i) {
    final v = _cells[i];
    if (v == 0) return false;
    final r = i ~/ 4, c = i % 4;
    for (var j = 0; j < 16; j++) {
      if (j == i || _cells[j] != v) continue;
      final rr = j ~/ 4, cc = j % 4;
      if (rr == r || cc == c || (rr ~/ 2 == r ~/ 2 && cc ~/ 2 == c ~/ 2)) return true;
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Text('Puzzle ${math.min(_solved + 1, goal)}/$goal · 1–4 once in every row, column and box')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Container(
                margin: const EdgeInsets.all(16),
                padding: const EdgeInsets.all(4),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
                child: GridView.count(
                  crossAxisCount: 4,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var i = 0; i < 16; i++)
                      GestureDetector(
                        onTap: () => setState(() => _selected = i),
                        child: Container(
                          margin: EdgeInsets.only(right: i % 4 == 1 ? 3 : 1, bottom: i ~/ 4 == 1 ? 3 : 1),
                          decoration: BoxDecoration(
                            color: _selected == i ? const Color(0xFFBAE6FD) : (_given[i] ? const Color(0xFFE2E8F0) : Colors.white),
                            borderRadius: BorderRadius.circular(6),
                            border: Border.all(color: const Color(0xFF94A3B8)),
                          ),
                          child: Center(
                            child: Text(
                              _cells[i] == 0 ? '' : '${_cells[i]}',
                              style: TextStyle(
                                fontSize: 30,
                                fontWeight: FontWeight.w900,
                                color: _given[i] ? const Color(0xFF0F172A) : (_clash(i) ? const Color(0xFFDC2626) : const Color(0xFF2563EB)),
                              ),
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
        Padding(
          padding: const EdgeInsets.only(bottom: 14),
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            for (final v in [1, 2, 3, 4])
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 6),
                child: SizedBox(
                  width: 60,
                  height: 56,
                  child: FilledButton(
                    onPressed: () => _put(v),
                    style: FilledButton.styleFrom(backgroundColor: const Color(0xFF0EA5E9), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                    child: Text('$v', style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900)),
                  ),
                ),
              ),
            IconButton(onPressed: () => _put(0), icon: const Icon(Icons.backspace_rounded, color: Colors.white70)),
          ]),
        ),
      ],
    );
  }
}

// 20 ── Space Dodge ──────────────────────────────────────────────────────────
class SpaceDodgeGame extends StatefulWidget {
  const SpaceDodgeGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SpaceDodgeGame> createState() => _SpaceDodgeState();
}

class _SpaceDodgeState extends State<SpaceDodgeGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 30; // seconds to survive
  final _rocks = <({double x, double y, double v, double size, double spin})>[];
  final _stars = <({double x, double y, double v})>[];
  double _ship = 0.5, _alive = 0, _spawn = 0;
  int _reported = 0;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    for (var i = 0; i < 40; i++) {
      _stars.add((x: r.nextDouble(), y: r.nextDouble(), v: 0.05 + r.nextDouble() * 0.2));
    }
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      _alive += dt;
      final secs = _alive.floor();
      if (secs != _reported) {
        _reported = secs;
        widget.args.onProgress(math.min(secs, goal), goal);
        if (secs >= goal) {
          stopLoop();
          widget.args.onComplete();
          return;
        }
      }
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.11, 0.4 - _alive * 0.012);
        _rocks.add((x: r.nextDouble(), y: -0.08, v: 0.55 + r.nextDouble() * 0.4 + _alive * 0.022, size: 34 + r.nextDouble() * 30, spin: r.nextDouble() * 6));
      }
      for (var i = 0; i < _stars.length; i++) {
        final s = _stars[i];
        _stars[i] = (x: s.x, y: (s.y + s.v * dt) % 1, v: s.v);
      }
      final kept = <({double x, double y, double v, double size, double spin})>[];
      for (final k in _rocks) {
        final y = k.y + k.v * dt;
        if (y > 0.8 && y < 0.92 && (k.x - _ship).abs() < 0.08) {
          stopLoop();
          HapticFeedback.heavyImpact();
          widget.args.onKnockout('Hit by an asteroid');
          return;
        }
        if (y < 1.1) kept.add((x: k.x, y: y, v: k.v, size: k.size, spin: k.spin + dt * 2));
      }
      _rocks
        ..clear()
        ..addAll(kept);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      final w = c.maxWidth, h = c.maxHeight;
      return GestureDetector(
        onHorizontalDragUpdate: (d) => _ship = (d.localPosition.dx / w).clamp(0.05, 0.95),
        onTapDown: (d) => _ship = (d.localPosition.dx / w).clamp(0.05, 0.95),
        child: Stack(children: [
          const Positioned.fill(child: ColoredBox(color: Color(0xFF05010F))),
          for (final s in _stars) Positioned(left: s.x * w, top: s.y * h, child: Container(width: 2, height: 2, color: Colors.white.withValues(alpha: 0.4 + s.v * 2))),
          for (final k in _rocks) Positioned(left: k.x * w - k.size / 2, top: k.y * h, child: Transform.rotate(angle: k.spin, child: emojiText('🪨', k.size))),
          Positioned(left: _ship * w - 22, top: 0.84 * h, child: Transform.rotate(angle: -math.pi / 4, child: emojiText('🚀', 44))),
          Align(
            alignment: Alignment.topCenter,
            child: ArcadeBanner(child: Text('Survive ${math.max(0, goal - _alive.floor())}s · drag to steer')),
          ),
        ]),
      );
    });
  }
}
