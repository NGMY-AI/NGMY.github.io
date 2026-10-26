import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games_b.dart';
import 'ngmy_arcade_games_more.dart';
import 'ngmy_arcade_host.dart';

/// The 70 arcade money games (20 here, 50 in ngmy_arcade_games_more.dart). Each reports progress to the host
/// (NgmyArcadePlayScreen), which handles the stake, timer and payout.

class NgmyArcadeDef {
  const NgmyArcadeDef(this.id, this.title, this.subtitle, this.emoji, this.icon, this.colors, this.seconds);
  final String id;
  final String title;
  final String subtitle;
  final String emoji;
  final IconData icon;
  final List<Color> colors;
  final int seconds;
}

const kNgmyArcadeGames = <NgmyArcadeDef>[
  NgmyArcadeDef('bubble_pop', 'Bubble Pop', 'Pop only the target colour — 15 to win', '🫧', Icons.bubble_chart_rounded, [Color(0xFF06B6D4), Color(0xFF3B82F6)], 60),
  NgmyArcadeDef('fruit_slash', 'Fruit Slash', 'Slice flying fruit, dodge the bombs', '🍉', Icons.content_cut_rounded, [Color(0xFF22C55E), Color(0xFFEF4444)], 60),
  NgmyArcadeDef('sky_stack', 'Sky Stack', 'Drop blocks to build 12 floors high', '🏗️', Icons.layers_rounded, [Color(0xFFF59E0B), Color(0xFFEA580C)], 75),
  NgmyArcadeDef('sky_hopper', 'Sky Hopper', 'Tap to fly through 10 gates', '🐤', Icons.flight_takeoff_rounded, [Color(0xFF38BDF8), Color(0xFF0EA5E9)], 75),
  NgmyArcadeDef('brick_breaker', 'Brick Breaker', 'Smash all 24 bricks with the ball', '🧱', Icons.view_module_rounded, [Color(0xFFDB2777), Color(0xFF7C3AED)], 90),
  NgmyArcadeDef('odd_one', 'Spot the Odd One', 'Find the emoji that\'s different', '👀', Icons.visibility_rounded, [Color(0xFFEC4899), Color(0xFFBE185D)], 60),
  NgmyArcadeDef('flag_frenzy', 'Flag Frenzy', 'Name 10 countries from their flags', '🏳️', Icons.flag_rounded, [Color(0xFF2563EB), Color(0xFFDC2626)], 75),
  NgmyArcadeDef('coin_catcher', 'Coin Catcher', 'Catch 25 coins, dodge the rocks', '🪙', Icons.savings_rounded, [Color(0xFFF59E0B), Color(0xFFB45309)], 60),
  NgmyArcadeDef('number_rush', 'Number Rush', 'Tap 1 to 25 in order, fast', '🔟', Icons.format_list_numbered_rounded, [Color(0xFF8B5CF6), Color(0xFF6D28D9)], 60),
  ...kNgmyArcadeGamesMore,
];

const kNgmyArcadeGameIds = <String>{
  'bubble_pop', 'fruit_slash', 'sky_stack', 'sky_hopper', 'brick_breaker',
  'odd_one', 'flag_frenzy', 'coin_catcher', 'number_rush', ...kNgmyArcadeGameIdsMore,
};

int ngmyArcadeDefaultSeconds(String id) =>
    kNgmyArcadeGames.firstWhere((g) => g.id == id, orElse: () => kNgmyArcadeGames.first).seconds;

Widget ngmyBuildArcadeGame(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'bubble_pop':
      return BubblePopGame(args: a);
    case 'fruit_slash':
      return FruitSlashGame(args: a);
    case 'whack_mole':
      return WhackMoleGame(args: a);
    case 'sky_stack':
      return SkyStackGame(args: a);
    case 'snake_rush':
      return SnakeRushGame(args: a);
    case 'sky_hopper':
      return SkyHopperGame(args: a);
    case 'brick_breaker':
      return BrickBreakerGame(args: a);
    case 'mystery_word':
      return MysteryWordGame(args: a);
    case 'higher_lower':
      return HigherLowerGame(args: a);
    case 'mine_sweep':
      return MineSweepGame(args: a);
    default:
      return ngmyBuildArcadeGameB(id, a);
  }
}

// ── Shared bits ─────────────────────────────────────────────────────────────

Widget emojiText(String e, double size) => Text(e, textAlign: TextAlign.center, style: TextStyle(fontSize: size, height: 1));

/// Lives left, as hearts.
class ArcadeHearts extends StatelessWidget {
  const ArcadeHearts({super.key, required this.left, this.max = 3});
  final int left;
  final int max;
  @override
  Widget build(BuildContext context) => Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          for (var i = 0; i < max; i++)
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 1.5),
              child: Icon(i < left ? Icons.favorite_rounded : Icons.favorite_border_rounded, color: const Color(0xFFF43F5E), size: 20),
            ),
        ],
      );
}

/// Banner across the top of a game.
class ArcadeBanner extends StatelessWidget {
  const ArcadeBanner({super.key, required this.child});
  final Widget child;
  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.all(10),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white12)),
        // Shrinks to fit narrow phones instead of overflowing.
        child: FittedBox(
          fit: BoxFit.scaleDown,
          child: DefaultTextStyle(style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14), child: child),
        ),
      );
}

/// Frame-by-frame loop helper: [onFrame] gets seconds since the last frame.
mixin ArcadeLoop<T extends StatefulWidget> on State<T>, TickerProvider {
  Ticker? _arcadeTicker;
  Duration _last = Duration.zero;
  void startLoop(void Function(double dt) onFrame) {
    _arcadeTicker = createTicker((elapsed) {
      final dt = ((elapsed - _last).inMicroseconds / 1e6).clamp(0.0, 0.05);
      _last = elapsed;
      if (mounted) onFrame(dt);
    })..start();
  }

  void stopLoop() => _arcadeTicker?.stop();

  @override
  void dispose() {
    _arcadeTicker?.dispose();
    super.dispose();
  }
}

class _Thing {
  _Thing(this.x, this.y, this.vx, this.vy, this.kind, {this.size = 56});
  double x, y, vx, vy, size;
  int kind;
  bool gone = false;
  double t = 0;
}

// 1 ── Bubble Pop ────────────────────────────────────────────────────────────
class BubblePopGame extends StatefulWidget {
  const BubblePopGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BubblePopGame> createState() => _BubblePopState();
}

class _BubblePopState extends State<BubblePopGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 15;
  static const colors = [Color(0xFFEF4444), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFFACC15), Color(0xFFA855F7)];
  static const names = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE'];
  final _bubbles = <_Thing>[];
  int _target = 0, _popped = 0, _hearts = 3;
  double _spawn = 0;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    _target = widget.args.rng.nextInt(colors.length);
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      if (_size.isEmpty) return;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.22, 0.34 - _popped * 0.008);
        final s = 34 + widget.args.rng.nextDouble() * 22;
        // Make sure the target colour shows up often.
        final kind = widget.args.rng.nextDouble() < 0.22 ? _target : widget.args.rng.nextInt(colors.length);
        _bubbles.add(_Thing(widget.args.rng.nextDouble() * (_size.width - s), _size.height + s, 0, -(130 + widget.args.rng.nextDouble() * 110 + _popped * 11), kind, size: s));
      }
      for (final b in _bubbles) {
        b.t += dt;
        b.y += b.vy * dt;
        b.x += math.sin(b.t * 3 + b.size) * 38 * dt;
      }
      _bubbles.removeWhere((b) => b.y < -b.size || b.gone);
      setState(() {});
    });
  }

  void _tap(_Thing b) {
    if (b.gone) return;
    b.gone = true;
    if (b.kind == _target) {
      HapticFeedback.lightImpact();
      _popped++;
      widget.args.onProgress(_popped, goal);
      if (_popped >= goal) {
        stopLoop();
        widget.args.onComplete();
        return;
      }
      if (_popped % 5 == 0) _target = (_target + 1 + widget.args.rng.nextInt(colors.length - 1)) % colors.length;
    } else {
      HapticFeedback.heavyImpact();
      _hearts--;
      if (_hearts <= 0) {
        stopLoop();
        widget.args.onKnockout('Wrong colour popped');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      _size = c.biggest;
      return Stack(
        children: [
          for (final b in _bubbles)
            Positioned(
              left: b.x,
              top: b.y,
              child: GestureDetector(
                onTapDown: (_) => _tap(b),
                child: Container(
                  width: b.size,
                  height: b.size,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(
                      center: const Alignment(-0.35, -0.4),
                      colors: [Colors.white.withValues(alpha: 0.85), colors[b.kind].withValues(alpha: 0.85), colors[b.kind]],
                      stops: const [0, 0.35, 1],
                    ),
                    boxShadow: [BoxShadow(color: colors[b.kind].withValues(alpha: 0.5), blurRadius: 10)],
                  ),
                ),
              ),
            ),
          Align(
            alignment: Alignment.topCenter,
            child: ArcadeBanner(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text('Pop only '),
                  Text(names[_target], style: TextStyle(color: colors[_target])),
                  const SizedBox(width: 12),
                  ArcadeHearts(left: _hearts),
                ],
              ),
            ),
          ),
        ],
      );
    });
  }
}

// 2 ── Fruit Slash ───────────────────────────────────────────────────────────
class FruitSlashGame extends StatefulWidget {
  const FruitSlashGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<FruitSlashGame> createState() => _FruitSlashState();
}

class _FruitSlashState extends State<FruitSlashGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 15;
  static const fruits = ['🍉', '🍍', '🍊', '🍎', '🥝', '🍑', '🍋', '🍇'];
  final _items = <_Thing>[];
  final _trail = <Offset>[];
  int _sliced = 0;
  double _spawn = 0.5;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      if (_size.isEmpty) return;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = 0.55 - math.min(_sliced * 0.025, 0.28);
        final r = widget.args.rng;
        final bomb = r.nextDouble() < math.min(0.34 + _sliced * 0.01, 0.42);
        final x = _size.width * (0.15 + r.nextDouble() * 0.7);
        _items.add(_Thing(x, _size.height + 30, (r.nextDouble() - 0.5) * 160, -(_size.height * (1.25 + r.nextDouble() * 0.4)), bomb ? -1 : r.nextInt(fruits.length), size: 50));
      }
      for (final f in _items) {
        f.vy += _size.height * 1.55 * dt;
        f.x += f.vx * dt;
        f.y += f.vy * dt;
        f.t += dt;
      }
      _items.removeWhere((f) => f.gone || (f.vy > 0 && f.y > _size.height + 60));
      if (_trail.length > 10) _trail.removeRange(0, _trail.length - 10);
      setState(() {});
    });
  }

  void _slashAt(Offset p) {
    _trail.add(p);
    for (final f in _items) {
      if (f.gone) continue;
      if ((Offset(f.x, f.y) - p).distance < f.size * 0.6) {
        f.gone = true;
        if (f.kind < 0) {
          HapticFeedback.heavyImpact();
          stopLoop();
          widget.args.onKnockout('You hit a bomb');
          return;
        }
        HapticFeedback.selectionClick();
        _sliced++;
        widget.args.onProgress(_sliced, goal);
        if (_sliced >= goal) {
          stopLoop();
          widget.args.onComplete();
          return;
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      _size = c.biggest;
      return GestureDetector(
        onPanStart: (d) => _slashAt(d.localPosition),
        onPanUpdate: (d) => _slashAt(d.localPosition),
        onTapDown: (d) => _slashAt(d.localPosition),
        child: Stack(
          children: [
            const Positioned.fill(child: ColoredBox(color: Colors.transparent)),
            for (final f in _items)
              Positioned(
                left: f.x - f.size / 2,
                top: f.y - f.size / 2,
                child: Transform.rotate(angle: f.t * 3, child: emojiText(f.kind < 0 ? '💣' : fruits[f.kind], f.size * 0.8)),
              ),
            if (_trail.length > 1) Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _TrailPainter(List.of(_trail))))),
            const Align(alignment: Alignment.topCenter, child: ArcadeBanner(child: Text('Swipe through fruit · avoid 💣'))),
          ],
        ),
      );
    });
  }
}

class _TrailPainter extends CustomPainter {
  _TrailPainter(this.pts);
  final List<Offset> pts;
  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 1; i < pts.length; i++) {
      canvas.drawLine(pts[i - 1], pts[i], Paint()
        ..color = Colors.white.withValues(alpha: i / pts.length)
        ..strokeWidth = 2 + i * 0.6
        ..strokeCap = StrokeCap.round);
    }
  }

  @override
  bool shouldRepaint(covariant _TrailPainter old) => true;
}

// 3 ── Whack-a-Mole ──────────────────────────────────────────────────────────
class WhackMoleGame extends StatefulWidget {
  const WhackMoleGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<WhackMoleGame> createState() => _WhackMoleState();
}

class _WhackMoleState extends State<WhackMoleGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 20;
  final _up = List<double>.filled(9, 0); // time left showing
  final _kind = List<int>.filled(9, 0); // 0 mole, 1 golden (+2), 2 bomb
  final _hit = List<double>.filled(9, 0);
  int _score = 0, _hearts = 3;
  double _spawn = 0.4;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.22, 0.55 - _score * 0.02);
        final free = [for (var i = 0; i < 9; i++) if (_up[i] <= 0) i];
        if (free.isNotEmpty) {
          final i = free[widget.args.rng.nextInt(free.length)];
          final r = widget.args.rng.nextDouble();
          _kind[i] = r < 0.30 ? 2 : (r < 0.36 ? 1 : 0);
          _up[i] = math.max(0.38, 0.8 - _score * 0.025);
        }
      }
      for (var i = 0; i < 9; i++) {
        _up[i] -= dt;
        _hit[i] -= dt;
      }
      setState(() {});
    });
  }

  void _whack(int i) {
    if (_up[i] <= 0) return;
    _up[i] = 0;
    _hit[i] = 0.3;
    if (_kind[i] == 2) {
      HapticFeedback.heavyImpact();
      _hearts--;
      if (_hearts <= 0) {
        stopLoop();
        widget.args.onKnockout('Too many bombs');
      }
      return;
    }
    HapticFeedback.mediumImpact();
    _score += _kind[i] == 1 ? 2 : 1;
    widget.args.onProgress(_score, goal);
    if (_score >= goal) {
      stopLoop();
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Row(mainAxisSize: MainAxisSize.min, children: [const Text('Bonk 🐹 · ✨ = +2 · not 💣  '), ArcadeHearts(left: _hearts)])),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: GridView.count(
              crossAxisCount: 3,
              mainAxisSpacing: 14,
              crossAxisSpacing: 14,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                for (var i = 0; i < 9; i++)
                  GestureDetector(
                    onTapDown: (_) => _whack(i),
                    child: Container(
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const RadialGradient(colors: [Color(0xFF1C1917), Color(0xFF57534E)], stops: [0.55, 1]),
                        border: Border.all(color: const Color(0xFF78350F), width: 4),
                      ),
                      child: Center(
                        child: AnimatedScale(
                          scale: _up[i] > 0 ? 1 : 0,
                          duration: const Duration(milliseconds: 120),
                          child: emojiText(_kind[i] == 2 ? '💣' : (_kind[i] == 1 ? '🌟' : '🐹'), 46),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

// 4 ── Sky Stack ─────────────────────────────────────────────────────────────
class SkyStackGame extends StatefulWidget {
  const SkyStackGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SkyStackGame> createState() => _SkyStackState();
}

class _SkyStackState extends State<SkyStackGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 12;
  final _floors = <({double x, double w})>[]; // in 0..1 of width
  double _x = 0, _w = 0.5, _dir = 1;

  @override
  void initState() {
    super.initState();
    _floors.add((x: 0.25, w: 0.5));
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      final speed = 0.75 + _floors.length * 0.11;
      _x += _dir * speed * dt;
      if (_x + _w > 1) {
        _x = 1 - _w;
        _dir = -1;
      } else if (_x < 0) {
        _x = 0;
        _dir = 1;
      }
      setState(() {});
    });
  }

  void _drop() {
    final top = _floors.last;
    final left = math.max(_x, top.x);
    final right = math.min(_x + _w, top.x + top.w);
    if (right - left <= 0.01) {
      stopLoop();
      widget.args.onKnockout('The block fell off');
      return;
    }
    HapticFeedback.mediumImpact();
    // Nearly perfect drops snap and keep their full width.
    final perfect = (_x - top.x).abs() < 0.006;
    final placed = perfect ? top : (x: left, w: right - left);
    _floors.add(placed);
    _w = placed.w;
    _x = widget.args.rng.nextBool() ? 0 : 1 - _w;
    _dir = _x == 0 ? 1 : -1;
    widget.args.onProgress(_floors.length - 1, goal);
    if (_floors.length - 1 >= goal) {
      stopLoop();
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) {
    const palette = [Color(0xFFF97316), Color(0xFFF59E0B), Color(0xFFEAB308), Color(0xFF84CC16), Color(0xFF22C55E), Color(0xFF14B8A6)];
    return GestureDetector(
      onTapDown: (_) => _drop(),
      child: LayoutBuilder(builder: (context, c) {
        final h = 26.0;
        final visible = (c.maxHeight / h).floor() - 4;
        final start = math.max(0, _floors.length - visible);
        return Stack(
          children: [
            const Positioned.fill(child: ColoredBox(color: Colors.transparent)),
            for (var i = start; i < _floors.length; i++)
              Positioned(
                left: _floors[i].x * c.maxWidth,
                width: _floors[i].w * c.maxWidth,
                bottom: (i - start) * h + 10,
                height: h - 3,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(6),
                    gradient: LinearGradient(colors: [palette[i % palette.length], Color.lerp(palette[i % palette.length], Colors.black, 0.25)!]),
                  ),
                ),
              ),
            Positioned(
              left: _x * c.maxWidth,
              width: _w * c.maxWidth,
              bottom: (_floors.length - start) * h + 10 + h,
              height: h - 3,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(6),
                  color: Colors.white,
                  boxShadow: [BoxShadow(color: Colors.white.withValues(alpha: 0.6), blurRadius: 10)],
                ),
              ),
            ),
            const Align(alignment: Alignment.topCenter, child: ArcadeBanner(child: Text('Tap to drop · line it up!'))),
          ],
        );
      }),
    );
  }
}

// 5 ── Snake Rush ────────────────────────────────────────────────────────────
class SnakeRushGame extends StatefulWidget {
  const SnakeRushGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SnakeRushGame> createState() => _SnakeRushState();
}

class _SnakeRushState extends State<SnakeRushGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 10, n = 14;
  final _body = <math.Point<int>>[const math.Point(5, 7), const math.Point(4, 7), const math.Point(3, 7)];
  math.Point<int> _dir = const math.Point(1, 0), _next = const math.Point(1, 0);
  late math.Point<int> _apple = _newApple();
  int _eaten = 0;
  double _acc = 0;

  math.Point<int> _newApple() {
    while (true) {
      final p = math.Point(widget.args.rng.nextInt(n), widget.args.rng.nextInt(n));
      if (!_body.contains(p)) return p;
    }
  }

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      _acc += dt;
      final step = math.max(0.09, 0.2 - _eaten * 0.01);
      if (_acc < step) return;
      _acc = 0;
      _dir = _next;
      final head = math.Point(_body.first.x + _dir.x, _body.first.y + _dir.y);
      if (head.x < 0 || head.y < 0 || head.x >= n || head.y >= n || _body.contains(head)) {
        stopLoop();
        widget.args.onKnockout('The snake crashed');
        return;
      }
      _body.insert(0, head);
      if (head == _apple) {
        HapticFeedback.lightImpact();
        _eaten++;
        widget.args.onProgress(_eaten, goal);
        if (_eaten >= goal) {
          stopLoop();
          widget.args.onComplete();
          return;
        }
        _apple = _newApple();
      } else {
        _body.removeLast();
      }
      setState(() {});
    });
  }

  void _turn(math.Point<int> d) {
    if (d.x == -_dir.x && d.y == -_dir.y) return;
    _next = d;
  }

  @override
  Widget build(BuildContext context) {
    Widget pad(IconData icon, math.Point<int> d) => Padding(
          padding: const EdgeInsets.all(4),
          child: Material(
            color: Colors.white.withValues(alpha: 0.12),
            shape: const CircleBorder(),
            child: InkWell(customBorder: const CircleBorder(), onTap: () => _turn(d), child: Padding(padding: const EdgeInsets.all(12), child: Icon(icon, color: Colors.white, size: 26))),
          ),
        );
    return GestureDetector(
      onPanEnd: (d) {
        final v = d.velocity.pixelsPerSecond;
        if (v.dx.abs() > v.dy.abs()) {
          _turn(math.Point(v.dx > 0 ? 1 : -1, 0));
        } else {
          _turn(math.Point(0, v.dy > 0 ? 1 : -1));
        }
      },
      child: Column(
        children: [
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  margin: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: const Color(0xFF052E16), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFF22C55E), width: 2)),
                  child: LayoutBuilder(builder: (context, c) {
                    final cell = c.maxWidth / n;
                    return Stack(children: [
                      Positioned(left: _apple.x * cell, top: _apple.y * cell, width: cell, height: cell, child: FittedBox(child: emojiText('🍎', 30))),
                      for (var i = 0; i < _body.length; i++)
                        Positioned(
                          left: _body[i].x * cell + 1,
                          top: _body[i].y * cell + 1,
                          width: cell - 2,
                          height: cell - 2,
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              color: Color.lerp(const Color(0xFF4ADE80), const Color(0xFF15803D), i / _body.length),
                              borderRadius: BorderRadius.circular(i == 0 ? cell / 2 : 4),
                            ),
                          ),
                        ),
                    ]);
                  }),
                ),
              ),
            ),
          ),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [pad(Icons.arrow_upward_rounded, const math.Point(0, -1))]),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            pad(Icons.arrow_back_rounded, const math.Point(-1, 0)),
            const SizedBox(width: 44),
            pad(Icons.arrow_forward_rounded, const math.Point(1, 0)),
          ]),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [pad(Icons.arrow_downward_rounded, const math.Point(0, 1))]),
          const SizedBox(height: 8),
        ],
      ),
    );
  }
}

// 6 ── Sky Hopper ────────────────────────────────────────────────────────────
class SkyHopperGame extends StatefulWidget {
  const SkyHopperGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SkyHopperGame> createState() => _SkyHopperState();
}

class _SkyHopperState extends State<SkyHopperGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const goal = 10;
  double _y = 0.4, _vy = 0; // fraction of height
  final _gates = <({double x, double gap})>[]; // x in px, gap centre 0..1
  int _passed = 0;
  bool _started = false;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      if (_size.isEmpty || !_started) return;
      _vy += 1.6 * dt;
      _y += _vy * dt;
      for (var i = 0; i < _gates.length; i++) {
        _gates[i] = (x: _gates[i].x - 150 * dt, gap: _gates[i].gap);
      }
      if (_gates.isEmpty || _gates.last.x < _size.width - 230) {
        _gates.add((x: _size.width + 40, gap: 0.25 + widget.args.rng.nextDouble() * 0.5));
      }
      final birdX = _size.width * 0.28;
      const gapH = 0.3;
      for (final g in List.of(_gates)) {
        if (g.x < -70) {
          _gates.remove(g);
          continue;
        }
        if (g.x < birdX + 18 && g.x + 60 > birdX - 18) {
          if ((_y - g.gap).abs() > gapH / 2 - 0.035) {
            _crash();
            return;
          }
        }
      }
      // A gate is passed once its right edge is behind the bird.
      final passedNow = _gates.where((g) => g.x + 60 < birdX - 18).length;
      if (passedNow > 0) {
        _passed += passedNow;
        _gates.removeWhere((g) => g.x + 60 < birdX - 18);
        widget.args.onProgress(_passed, goal);
        if (_passed >= goal) {
          stopLoop();
          widget.args.onComplete();
          return;
        }
      }
      if (_y > 1 || _y < 0) {
        _crash();
        return;
      }
      setState(() {});
    });
  }

  void _crash() {
    stopLoop();
    HapticFeedback.heavyImpact();
    widget.args.onKnockout('You crashed');
  }

  void _flap() {
    _started = true;
    _vy = -0.75;
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      _size = c.biggest;
      final h = c.maxHeight;
      return GestureDetector(
        onTapDown: (_) => _flap(),
        child: Stack(
          children: [
            const Positioned.fill(
              child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF7DD3FC), Color(0xFFE0F2FE)]))),
            ),
            for (final g in _gates) ...[
              Positioned(left: g.x, width: 60, top: 0, height: (g.gap - 0.15) * h, child: const _Pipe(top: true)),
              Positioned(left: g.x, width: 60, top: (g.gap + 0.15) * h, bottom: 0, child: const _Pipe(top: false)),
            ],
            Positioned(
              left: c.maxWidth * 0.28 - 22,
              top: _y * h - 22,
              child: Transform.rotate(angle: (_vy * 0.6).clamp(-0.5, 1.0), child: emojiText('🐤', 40)),
            ),
            if (!_started) const Center(child: ArcadeBanner(child: Text('Tap to fly — through the gates!'))),
          ],
        ),
      );
    });
  }
}

class _Pipe extends StatelessWidget {
  const _Pipe({required this.top});
  final bool top;
  @override
  Widget build(BuildContext context) => DecoratedBox(
        decoration: BoxDecoration(
          gradient: const LinearGradient(colors: [Color(0xFF16A34A), Color(0xFF4ADE80), Color(0xFF15803D)]),
          borderRadius: BorderRadius.vertical(top: top ? Radius.zero : const Radius.circular(8), bottom: top ? const Radius.circular(8) : Radius.zero),
          border: Border.all(color: const Color(0xFF14532D), width: 2),
        ),
      );
}

// 7 ── Brick Breaker ─────────────────────────────────────────────────────────
class BrickBreakerGame extends StatefulWidget {
  const BrickBreakerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BrickBreakerGame> createState() => _BrickBreakerState();
}

class _BrickBreakerState extends State<BrickBreakerGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  static const rows = 4, cols = 6, goal = rows * cols;
  final _alive = List<bool>.filled(goal, true);
  double _px = 0.5, _bx = 0.5, _by = 0.7, _vx = 0.35, _vy = -0.55;
  int _broken = 0, _lives = 2;
  bool _launched = false;
  double _elapsed = 0;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
    startLoop((dt) {
      if (_launched) _elapsed += dt;
      // The ball gets faster the longer the game goes on.
      final k = 1 + math.min(_elapsed * 0.035, 1.3);
      if (!_launched) {
        _bx = _px;
        _by = 0.86;
        setState(() {});
        return;
      }
      _bx += _vx * dt * k;
      _by += _vy * dt * k;
      if (_bx < 0.02 || _bx > 0.98) _vx = -_vx;
      if (_by < 0.02) _vy = _vy.abs();
      // Paddle.
      if (_by > 0.88 && _by < 0.92 && (_bx - _px).abs() < 0.11 && _vy > 0) {
        _vy = -_vy.abs() * 1.02;
        _vx = (_bx - _px) * 4;
      }
      // Bricks (top 30% of the area).
      final col = (_bx * cols).floor();
      final row = ((_by - 0.08) / 0.055).floor();
      if (row >= 0 && row < rows && col >= 0 && col < cols && _alive[row * cols + col]) {
        _alive[row * cols + col] = false;
        _vy = -_vy;
        _broken++;
        HapticFeedback.selectionClick();
        widget.args.onProgress(_broken, goal);
        if (_broken >= goal) {
          stopLoop();
          widget.args.onComplete();
          return;
        }
      }
      if (_by > 1) {
        _lives--;
        if (_lives <= 0) {
          stopLoop();
          widget.args.onKnockout('Ball lost');
          return;
        }
        _launched = false;
        _vy = -0.55;
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    const brickColors = [Color(0xFFF43F5E), Color(0xFFF97316), Color(0xFFFACC15), Color(0xFF22D3EE)];
    return LayoutBuilder(builder: (context, c) {
      final w = c.maxWidth, h = c.maxHeight;
      return GestureDetector(
        onHorizontalDragUpdate: (d) => _px = (d.localPosition.dx / w).clamp(0.1, 0.9),
        onTapDown: (d) {
          _px = (d.localPosition.dx / w).clamp(0.1, 0.9);
          _launched = true;
        },
        child: Stack(children: [
          const Positioned.fill(child: ColoredBox(color: Colors.transparent)),
          for (var r = 0; r < rows; r++)
            for (var col = 0; col < cols; col++)
              if (_alive[r * cols + col])
                Positioned(
                  left: col * w / cols + 2,
                  top: (0.08 + r * 0.055) * h + 2,
                  width: w / cols - 4,
                  height: 0.055 * h - 4,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.6), brickColors[r]], stops: const [0, 0.4]),
                    ),
                  ),
                ),
          Positioned(left: (_px - 0.12) * w, width: 0.24 * w, top: 0.9 * h, height: 12, child: DecoratedBox(decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(99)))),
          Positioned(
            left: _bx * w - 8,
            top: _by * h - 8,
            width: 16,
            height: 16,
            child: DecoratedBox(decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFFFDE68A), boxShadow: [BoxShadow(color: Colors.amber.withValues(alpha: 0.8), blurRadius: 10)])),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Padding(padding: const EdgeInsets.only(bottom: 6), child: ArcadeHearts(left: _lives, max: 2)),
          ),
          if (!_launched) const Center(child: ArcadeBanner(child: Text('Drag to move · tap to launch'))),
        ]),
      );
    });
  }
}

// 8 ── Mystery Word ──────────────────────────────────────────────────────────
class MysteryWordGame extends StatefulWidget {
  const MysteryWordGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<MysteryWordGame> createState() => _MysteryWordState();
}

class _MysteryWordState extends State<MysteryWordGame> {
  static const goal = 3;
  static const words = [
    ('JUNGLE', 'Thick forest'), ('PLANET', 'Earth is one'), ('GUITAR', 'Has six strings'), ('BRIDGE', 'Crosses a river'),
    ('CASTLE', 'Where kings lived'), ('ROCKET', 'Flies to space'), ('TURTLE', 'Slow with a shell'), ('WINDOW', 'Glass in a wall'),
    ('PEPPER', 'Hot spice'), ('MARKET', 'Place to buy food'), ('PILLOW', 'For your head at night'), ('SUMMER', 'Hottest season'),
    ('DOCTOR', 'Treats the sick'), ('CAMERA', 'Takes photos'), ('ORANGE', 'Fruit and colour'), ('MONKEY', 'Loves bananas'),
    ('GARDEN', 'Where flowers grow'), ('SILVER', 'Shiny metal'), ('TICKET', 'Lets you on the bus'), ('DRAGON', 'Breathes fire'),
  ];
  late final List<(String, String)> _picked;
  int _index = 0, _wrong = 0;
  final _guessed = <String>{};

  @override
  void initState() {
    super.initState();
    _picked = (List.of(words)..shuffle(widget.args.rng)).take(goal).toList();
    widget.args.onProgress(0, goal);
  }

  (String, String) get _word => _picked[_index];
  bool get _solved => _word.$1.split('').every(_guessed.contains);

  void _guess(String l) {
    if (_guessed.contains(l)) return;
    setState(() => _guessed.add(l));
    if (!_word.$1.contains(l)) {
      HapticFeedback.heavyImpact();
      _wrong++;
      if (_wrong >= 6) widget.args.onKnockout('The word was ${_word.$1}');
      return;
    }
    HapticFeedback.selectionClick();
    if (_solved) {
      _index++;
      widget.args.onProgress(_index, goal);
      if (_index >= goal) {
        widget.args.onComplete();
        return;
      }
      Future<void>.delayed(const Duration(milliseconds: 500), () {
        if (mounted) {
          setState(() {
            _guessed.clear();
            _wrong = 0;
          });
        }
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final w = _index < goal ? _word : _picked.last;
    return Column(
      children: [
        ArcadeBanner(child: Text('Word ${math.min(_index + 1, goal)}/$goal · Hint: ${w.$2}')),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            for (var i = 0; i < 6; i++)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 3),
                child: Icon(i < 6 - _wrong ? Icons.favorite_rounded : Icons.heart_broken_rounded, color: i < 6 - _wrong ? const Color(0xFFF43F5E) : Colors.white24, size: 20),
              ),
          ]),
        ),
        Expanded(
          child: Center(
            child: Wrap(spacing: 8, children: [
              for (final ch in w.$1.split(''))
                Container(
                  width: 40,
                  height: 52,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.7), width: 3))),
                  child: Text(_guessed.contains(ch) ? ch : '', style: const TextStyle(color: Colors.white, fontSize: 30, fontWeight: FontWeight.w900)),
                ),
            ]),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8),
          child: Wrap(
            alignment: WrapAlignment.center,
            spacing: 5,
            runSpacing: 5,
            children: [
              for (final l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
                SizedBox(
                  width: 36,
                  height: 42,
                  child: Material(
                    color: !_guessed.contains(l)
                        ? Colors.white.withValues(alpha: 0.14)
                        : (w.$1.contains(l) ? const Color(0xFF22C55E) : const Color(0xFF7F1D1D)),
                    borderRadius: BorderRadius.circular(8),
                    child: InkWell(
                      onTap: () => _guess(l),
                      borderRadius: BorderRadius.circular(8),
                      child: Center(child: Text(l, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ],
    );
  }
}

// 9 ── Higher or Lower ───────────────────────────────────────────────────────
class HigherLowerGame extends StatefulWidget {
  const HigherLowerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<HigherLowerGame> createState() => _HigherLowerState();
}

class _HigherLowerState extends State<HigherLowerGame> {
  static const goal = 8;
  static const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  static const suits = ['♠', '♥', '♦', '♣'];
  late int _rank = widget.args.rng.nextInt(13), _suit = widget.args.rng.nextInt(4);
  int _streak = 0;
  int? _prev;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, goal);
  }

  void _call(bool higher) {
    final next = widget.args.rng.nextInt(13);
    final ok = next == _rank || (higher ? next > _rank : next < _rank);
    setState(() {
      _prev = _rank;
      _rank = next;
      _suit = widget.args.rng.nextInt(4);
    });
    if (!ok) {
      HapticFeedback.heavyImpact();
      widget.args.onKnockout('Wrong call');
      return;
    }
    HapticFeedback.selectionClick();
    _streak++;
    widget.args.onProgress(_streak, goal);
    if (_streak >= goal) widget.args.onComplete();
  }

  Widget _card(int rank, int suit, double w) {
    final red = suit == 1 || suit == 2;
    final color = red ? const Color(0xFFDC2626) : const Color(0xFF111827);
    return Container(
      width: w,
      height: w * 1.4,
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 18, offset: const Offset(0, 8))]),
      child: Stack(children: [
        Align(alignment: Alignment.topLeft, child: Text('${ranks[rank]}\n${suits[suit]}', style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: w * 0.15, height: 1))),
        Center(child: Text(suits[suit], style: TextStyle(color: color, fontSize: w * 0.5))),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ArcadeBanner(child: Text('Streak $_streak / $goal · same card counts as right')),
        Expanded(
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (_prev != null) Opacity(opacity: 0.45, child: _card(_prev!, (_suit + 1) % 4, 80)),
                const SizedBox(width: 16),
                AnimatedSwitcher(
                  duration: const Duration(milliseconds: 250),
                  transitionBuilder: (c, a) => ScaleTransition(scale: a, child: c),
                  child: KeyedSubtree(key: ValueKey('$_rank-$_suit-$_streak'), child: _card(_rank, _suit, 150)),
                ),
              ],
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(14),
          child: Row(children: [
            Expanded(
              child: FilledButton.icon(
                onPressed: () => _call(false),
                icon: const Icon(Icons.arrow_downward_rounded),
                label: const FittedBox(child: Text('LOWER', style: TextStyle(fontWeight: FontWeight.w900))),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB), minimumSize: const Size(0, 56)),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: FilledButton.icon(
                onPressed: () => _call(true),
                icon: const Icon(Icons.arrow_upward_rounded),
                label: const FittedBox(child: Text('HIGHER', style: TextStyle(fontWeight: FontWeight.w900))),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626), minimumSize: const Size(0, 56)),
              ),
            ),
          ]),
        ),
      ],
    );
  }
}

// 10 ── Mine Sweep ───────────────────────────────────────────────────────────
class MineSweepGame extends StatefulWidget {
  const MineSweepGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<MineSweepGame> createState() => _MineSweepState();
}

class _MineSweepState extends State<MineSweepGame> {
  static const n = 7, mines = 8;
  final _mine = List<bool>.filled(n * n, false);
  final _open = List<bool>.filled(n * n, false);
  final _flag = List<bool>.filled(n * n, false);
  bool _placed = false;
  bool _flagMode = false;
  int get _safeTotal => n * n - mines;
  int get _opened => _open.where((o) => o).length;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, n * n - mines);
  }

  Iterable<int> _around(int i) sync* {
    final r = i ~/ n, c = i % n;
    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        if (dr == 0 && dc == 0) continue;
        final rr = r + dr, cc = c + dc;
        if (rr >= 0 && cc >= 0 && rr < n && cc < n) yield rr * n + cc;
      }
    }
  }

  int _count(int i) => _around(i).where((j) => _mine[j]).length;

  void _place(int first) {
    // The first tap is always safe (and opens an area).
    final banned = {first, ..._around(first)};
    var left = mines;
    while (left > 0) {
      final i = widget.args.rng.nextInt(n * n);
      if (_mine[i] || banned.contains(i)) continue;
      _mine[i] = true;
      left--;
    }
    _placed = true;
  }

  void _reveal(int i) {
    if (_open[i] || _flag[i]) return;
    if (!_placed) _place(i);
    if (_mine[i]) {
      setState(() => _open[i] = true);
      HapticFeedback.heavyImpact();
      widget.args.onKnockout('Boom — a mine');
      return;
    }
    final stack = [i];
    while (stack.isNotEmpty) {
      final j = stack.removeLast();
      if (_open[j]) continue;
      _open[j] = true;
      if (_count(j) == 0) stack.addAll(_around(j).where((k) => !_open[k] && !_mine[k]));
    }
    HapticFeedback.selectionClick();
    setState(() {});
    widget.args.onProgress(_opened, _safeTotal);
    if (_opened >= _safeTotal) widget.args.onComplete();
  }

  @override
  Widget build(BuildContext context) {
    const numColors = [Colors.transparent, Color(0xFF60A5FA), Color(0xFF4ADE80), Color(0xFFF87171), Color(0xFFC084FC), Color(0xFFFBBF24), Color(0xFF2DD4BF), Colors.white, Colors.white];
    return Column(
      children: [
        ArcadeBanner(
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Text('$mines mines hidden · '),
            GestureDetector(
              onTap: () => setState(() => _flagMode = !_flagMode),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                decoration: BoxDecoration(color: _flagMode ? const Color(0xFFEF4444) : Colors.white12, borderRadius: BorderRadius.circular(99)),
                child: Text(_flagMode ? '🚩 Flag mode ON' : '🚩 Flag mode'),
              ),
            ),
          ]),
        ),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(10),
                child: GridView.count(
                  crossAxisCount: n,
                  mainAxisSpacing: 3,
                  crossAxisSpacing: 3,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var i = 0; i < n * n; i++)
                      GestureDetector(
                        onTap: () => _flagMode ? setState(() => _flag[i] = !_flag[i] && !_open[i]) : _reveal(i),
                        onLongPress: () => setState(() => _flag[i] = !_flag[i] && !_open[i]),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(6),
                            color: _open[i] ? (_mine[i] ? const Color(0xFF7F1D1D) : const Color(0xFF1E293B)) : const Color(0xFF64748B),
                            border: _open[i] ? null : const Border(top: BorderSide(color: Color(0xFF94A3B8), width: 2), left: BorderSide(color: Color(0xFF94A3B8), width: 2)),
                          ),
                          child: Center(
                            child: _open[i]
                                ? (_mine[i]
                                    ? emojiText('💣', 20)
                                    : Text(_count(i) == 0 ? '' : '${_count(i)}', style: TextStyle(color: numColors[_count(i)], fontWeight: FontWeight.w900, fontSize: 18)))
                                : (_flag[i] ? emojiText('🚩', 18) : null),
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
