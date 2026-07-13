import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_vault_games.dart';

/// Six brand-new Vault Channel mini-games — genuinely different mechanics
/// from the rest of the arcade (reflex color-match, rhythm bounce, maze
/// navigation, block stacking, whack-style reflex grid, memory match), all
/// fully offline and paying into the same coin wallet.

Widget _chrome({
  required BuildContext context,
  required String title,
  required List<Color> colors,
  required int score,
  required Duration timeLeft,
  required Widget child,
}) {
  return Scaffold(
    backgroundColor: const Color(0xFF030712),
    body: SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
            child: Row(
              children: [
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                Expanded(
                  child: Text(title, textAlign: TextAlign.center, style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14)),
                ),
                const SizedBox(width: 40),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('SCORE  $score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                Text('${timeLeft.inSeconds}s', style: TextStyle(color: timeLeft.inSeconds <= 5 ? const Color(0xFFEF4444) : Colors.white70, fontWeight: FontWeight.w900, fontSize: 15)),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(child: child),
        ],
      ),
    ),
  );
}

class _EndCard extends StatelessWidget {
  const _EndCard({required this.score, required this.coins, required this.colors, required this.onAgain, required this.onExit});
  final int score;
  final int coins;
  final List<Color> colors;
  final VoidCallback onAgain;
  final VoidCallback onExit;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black.withValues(alpha: 0.74),
      alignment: Alignment.center,
      child: TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: const Duration(milliseconds: 460),
        curve: Curves.elasticOut,
        builder: (context, t, child) => Transform.scale(scale: t.clamp(0, 1.2), child: Opacity(opacity: t.clamp(0, 1), child: child)),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 36),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.28), const Color(0xFF0B0A16)]),
            border: Border.all(color: colors.first.withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 30)],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.emoji_events_rounded, color: colors.first, size: 46),
              const SizedBox(height: 10),
              const Text('RUN COMPLETE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              const SizedBox(height: 14),
              Text('$score', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 40)),
              const Text('SCORE', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
              const SizedBox(height: 10),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.monetization_on_rounded, color: Color(0xFFFBBF24), size: 18),
                  const SizedBox(width: 4),
                  Text('+$coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 15)),
                ],
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onExit,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                      child: const Text('Exit'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: onAgain,
                      style: FilledButton.styleFrom(backgroundColor: colors.first),
                      child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── 1. Color Sprint — tap the tile matching the target color, fast ─────────

class NgmyVaultColorSprintGame extends StatefulWidget {
  const NgmyVaultColorSprintGame({super.key});
  @override
  State<NgmyVaultColorSprintGame> createState() => _ColorSprintState();
}

class _ColorSprintState extends State<NgmyVaultColorSprintGame> {
  static const _theme = [Color(0xFFFB7185), Color(0xFFFACC15)];
  static const _palette = [Color(0xFFF43F5E), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFF59E0B), Color(0xFFA855F7), Color(0xFF06B6D4)];
  final _rnd = math.Random();
  int _score = 0;
  int _target = 0;
  List<int> _tiles = [];
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _roll();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    super.dispose();
  }

  void _roll() {
    final count = 4 + _rnd.nextInt(3);
    final tiles = List.generate(count, (_) => _rnd.nextInt(_palette.length));
    setState(() {
      _tiles = tiles;
      _target = tiles[_rnd.nextInt(tiles.length)];
    });
  }

  void _tap(int i) {
    if (_over) return;
    if (_tiles[i] == _target) {
      setState(() => _score += 12);
      HapticFeedback.lightImpact();
    } else {
      setState(() => _score = math.max(0, _score - 4));
      HapticFeedback.heavyImpact();
    }
    _roll();
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: 'color_sprint', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _left = const Duration(seconds: 30);
      _over = false;
    });
    _roll();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: 'COLOR SPRINT',
          colors: _theme,
          score: _score,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 26),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text('TAP THIS COLOR', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, letterSpacing: 1.2, fontSize: 12)),
                const SizedBox(height: 14),
                Container(
                  width: 84,
                  height: 84,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _palette[_target],
                    boxShadow: [BoxShadow(color: _palette[_target].withValues(alpha: 0.6), blurRadius: 24)],
                  ),
                ),
                const SizedBox(height: 32),
                Wrap(
                  spacing: 16,
                  runSpacing: 16,
                  alignment: WrapAlignment.center,
                  children: List.generate(_tiles.length, (i) {
                    return GestureDetector(
                      onTap: () => _tap(i),
                      child: Container(
                        width: 68,
                        height: 68,
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: _palette[_tiles[i]]),
                      ),
                    );
                  }),
                ),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── 2. Beat Bounce — tap in rhythm to keep the ball alive ───────────────────

class NgmyVaultBeatBounceGame extends StatefulWidget {
  const NgmyVaultBeatBounceGame({super.key});
  @override
  State<NgmyVaultBeatBounceGame> createState() => _BeatBounceState();
}

class _BeatBounceState extends State<NgmyVaultBeatBounceGame> with SingleTickerProviderStateMixin {
  static const _theme = [Color(0xFF60A5FA), Color(0xFF818CF8)];
  late final AnimationController _beat;
  final _rnd = math.Random();
  int _score = 0;
  int _combo = 0;
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  bool _over = false;
  double _windowCenter = 0.5;

  @override
  void initState() {
    super.initState();
    _beat = AnimationController(vsync: this, duration: const Duration(milliseconds: 1100))..repeat();
    _rollWindow();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    _beat.dispose();
    super.dispose();
  }

  void _rollWindow() => _windowCenter = 0.25 + _rnd.nextDouble() * 0.5;

  void _tap() {
    if (_over) return;
    final phase = _beat.value;
    final dist = (phase - _windowCenter).abs();
    if (dist < 0.08) {
      _combo++;
      setState(() => _score += 15 + _combo * 3);
      HapticFeedback.lightImpact();
    } else if (dist < 0.18) {
      setState(() => _score += 6);
      _combo = 0;
      HapticFeedback.selectionClick();
    } else {
      _combo = 0;
      setState(() => _score = math.max(0, _score - 5));
      HapticFeedback.heavyImpact();
    }
    _rollWindow();
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: 'beat_bounce', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _combo = 0;
      _left = const Duration(seconds: 30);
      _over = false;
    });
    _rollWindow();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: 'BEAT BOUNCE',
          colors: _theme,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            onTap: _tap,
            behavior: HitTestBehavior.opaque,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 26),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (_combo >= 3) Text('COMBO x$_combo', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
                  const SizedBox(height: 14),
                  AnimatedBuilder(
                    animation: _beat,
                    builder: (context, _) {
                      return SizedBox(
                        height: 56,
                        child: Stack(
                          children: [
                            Positioned.fill(
                              child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(28), color: Colors.white.withValues(alpha: 0.06))),
                            ),
                            Align(
                              alignment: Alignment(_windowCenter * 2 - 1, 0),
                              child: Container(width: 46, height: 56, decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), color: _theme.first.withValues(alpha: 0.35))),
                            ),
                            Align(
                              alignment: Alignment(_beat.value * 2 - 1, 0),
                              child: Container(
                                width: 24,
                                height: 24,
                                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: _theme), boxShadow: [BoxShadow(color: _theme.first.withValues(alpha: 0.6), blurRadius: 14)]),
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                  const SizedBox(height: 22),
                  Text('Tap anywhere when the dot crosses the glowing zone', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
                ],
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── 3. Maze Dash — swipe to steer the orb through the maze to the exit ──────

class NgmyVaultMazeDashGame extends StatefulWidget {
  const NgmyVaultMazeDashGame({super.key});
  @override
  State<NgmyVaultMazeDashGame> createState() => _MazeDashState();
}

class _MazeDashState extends State<NgmyVaultMazeDashGame> {
  static const _theme = [Color(0xFF34D399), Color(0xFF06B6D4)];
  static const _size = 7;
  final _rnd = math.Random();
  late List<List<bool>> _walls; // true = wall
  var _pos = const Point2(0, 0);
  final _exit = const Point2(_size - 1, _size - 1);
  int _score = 0;
  int _round = 0;
  Duration _left = const Duration(seconds: 45);
  Timer? _clock;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _generate();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    super.dispose();
  }

  void _generate() {
    _walls = List.generate(_size, (_) => List.generate(_size, (_) => _rnd.nextDouble() < 0.22));
    _walls[0][0] = false;
    _walls[_size - 1][_size - 1] = false;
    _pos = const Point2(0, 0);
  }

  void _move(int dx, int dy) {
    if (_over) return;
    final nx = (_pos.x + dx).clamp(0, _size - 1);
    final ny = (_pos.y + dy).clamp(0, _size - 1);
    if (_walls[ny][nx]) {
      HapticFeedback.heavyImpact();
      return;
    }
    setState(() => _pos = Point2(nx, ny));
    if (nx == _exit.x && ny == _exit.y) {
      HapticFeedback.mediumImpact();
      setState(() {
        _score += 30;
        _round++;
      });
      _generate();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: 'maze_dash', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _round = 0;
      _left = const Duration(seconds: 45);
      _over = false;
    });
    _generate();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: 'MAZE DASH',
          colors: _theme,
          score: _score,
          timeLeft: _left,
          child: GestureDetector(
            onVerticalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v < -80) _move(0, -1);
              if (v > 80) _move(0, 1);
            },
            onHorizontalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v < -80) _move(-1, 0);
              if (v > 80) _move(1, 0);
            },
            behavior: HitTestBehavior.opaque,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('Cleared: $_round · swipe to move', style: const TextStyle(color: Colors.white54, fontSize: 12, fontWeight: FontWeight.w700)),
                const SizedBox(height: 14),
                AspectRatio(
                  aspectRatio: 1,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: LayoutBuilder(
                      builder: (context, c) {
                        final cell = c.maxWidth / _size;
                        return Stack(
                          children: [
                            for (var y = 0; y < _size; y++)
                              for (var x = 0; x < _size; x++)
                                Positioned(
                                  left: x * cell,
                                  top: y * cell,
                                  width: cell - 3,
                                  height: cell - 3,
                                  child: Container(
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(4),
                                      color: _walls[y][x] ? Colors.white.withValues(alpha: 0.08) : Colors.transparent,
                                    ),
                                  ),
                                ),
                            Positioned(
                              left: (_size - 1) * cell,
                              top: (_size - 1) * cell,
                              width: cell - 3,
                              height: cell - 3,
                              child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(6), color: _theme.last.withValues(alpha: 0.4))),
                            ),
                            AnimatedPositioned(
                              duration: const Duration(milliseconds: 160),
                              left: _pos.x * cell,
                              top: _pos.y * cell,
                              width: cell - 3,
                              height: cell - 3,
                              child: Container(
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: LinearGradient(colors: _theme),
                                  boxShadow: [BoxShadow(color: _theme.first.withValues(alpha: 0.6), blurRadius: 10)],
                                ),
                              ),
                            ),
                          ],
                        );
                      },
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

class Point2 {
  const Point2(this.x, this.y);
  final int x;
  final int y;
}

// ── 4. Stack Tower — tap to drop and stack sliding blocks ───────────────────

class NgmyVaultStackTowerGame extends StatefulWidget {
  const NgmyVaultStackTowerGame({super.key});
  @override
  State<NgmyVaultStackTowerGame> createState() => _StackTowerState();
}

class _StackTowerState extends State<NgmyVaultStackTowerGame> with SingleTickerProviderStateMixin {
  static const _theme = [Color(0xFFFBBF24), Color(0xFFF97316)];
  late final AnimationController _slide;
  final List<double> _widths = [1.0];
  final List<double> _offsets = [0.0];
  double _current = 0;
  bool _movingRight = true;
  int _score = 0;
  bool _over = false;
  double _speed = 0.012;

  @override
  void initState() {
    super.initState();
    _slide = AnimationController(vsync: this, duration: const Duration(milliseconds: 16))
      ..addListener(_tick)
      ..repeat();
  }

  @override
  void dispose() {
    _slide.dispose();
    super.dispose();
  }

  void _tick() {
    if (_over) return;
    setState(() {
      _current += _movingRight ? _speed : -_speed;
      if (_current > 0.4) {
        _current = 0.4;
        _movingRight = false;
      } else if (_current < -0.4) {
        _current = -0.4;
        _movingRight = true;
      }
    });
  }

  void _drop() {
    if (_over) return;
    final prevWidth = _widths.last;
    final prevOffset = _offsets.last;
    final overlap = prevWidth - (_current - prevOffset).abs();
    if (overlap <= 0.05) {
      _finish();
      return;
    }
    final newOffset = prevOffset + (_current - prevOffset) / 2;
    setState(() {
      _widths.add(overlap.clamp(0.08, 1.0));
      _offsets.add(newOffset);
      _current = newOffset;
      _score += 10;
      _speed = math.min(0.03, _speed + 0.0009);
    });
    HapticFeedback.lightImpact();
  }

  Future<void> _finish() async {
    if (_over) return;
    setState(() => _over = true);
    final coins = _score ~/ 5;
    await VaultProgressStore.saveRun(gameId: 'stack_tower', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _widths
        ..clear()
        ..add(1.0);
      _offsets
        ..clear()
        ..add(0.0);
      _current = 0;
      _movingRight = true;
      _score = 0;
      _speed = 0.012;
      _over = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final visible = _widths.length > 6 ? _widths.sublist(_widths.length - 6) : _widths;
    final visibleOffsets = _offsets.length > 6 ? _offsets.sublist(_offsets.length - 6) : _offsets;
    return Stack(
      children: [
        Scaffold(
          backgroundColor: const Color(0xFF030712),
          body: SafeArea(
            child: GestureDetector(
              onTap: _drop,
              behavior: HitTestBehavior.opaque,
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
                    child: Row(
                      children: [
                        IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                        Expanded(child: Text('STACK TOWER', textAlign: TextAlign.center, style: TextStyle(color: _theme.first, fontWeight: FontWeight.w900, letterSpacing: 1.2, fontSize: 14))),
                        const SizedBox(width: 40),
                      ],
                    ),
                  ),
                  Text('HEIGHT  ${_widths.length - 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                  const SizedBox(height: 6),
                  Expanded(
                    child: LayoutBuilder(
                      builder: (context, c) {
                        final blockH = 34.0;
                        return Stack(
                          alignment: Alignment.bottomCenter,
                          children: [
                            for (var i = 0; i < visible.length; i++)
                              Positioned(
                                bottom: i * blockH,
                                child: Container(
                                  width: visible[i] * c.maxWidth * 0.8,
                                  height: blockH - 4,
                                  margin: EdgeInsets.only(left: visibleOffsets[i] * c.maxWidth * 0.4),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(6),
                                    gradient: LinearGradient(colors: [_theme.first.withValues(alpha: 0.9), _theme.last.withValues(alpha: 0.9)]),
                                    boxShadow: [BoxShadow(color: _theme.first.withValues(alpha: 0.3), blurRadius: 8)],
                                  ),
                                ),
                              ),
                            if (!_over)
                              Positioned(
                                bottom: visible.length * blockH,
                                left: c.maxWidth / 2 - (_widths.last * c.maxWidth * 0.8) / 2 + _current * c.maxWidth * 0.4,
                                child: Container(
                                  width: _widths.last * c.maxWidth * 0.8,
                                  height: blockH - 4,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(6),
                                    color: Colors.white.withValues(alpha: 0.9),
                                    boxShadow: [BoxShadow(color: Colors.white.withValues(alpha: 0.4), blurRadius: 10)],
                                  ),
                                ),
                              ),
                          ],
                        );
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 18),
                    child: Text('Tap to drop the block', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
                  ),
                ],
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 5, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 5, score: _score))),
      ],
    );
  }
}

// ── 5. Reflex Grid — tap the lit tile before it moves ────────────────────────

class NgmyVaultReflexGridGame extends StatefulWidget {
  const NgmyVaultReflexGridGame({super.key});
  @override
  State<NgmyVaultReflexGridGame> createState() => _ReflexGridState();
}

class _ReflexGridState extends State<NgmyVaultReflexGridGame> {
  static const _theme = [Color(0xFFA78BFA), Color(0xFFEC4899)];
  static const _cols = 4;
  static const _rows = 4;
  final _rnd = math.Random();
  int _lit = 0;
  int _score = 0;
  Duration _left = const Duration(seconds: 30);
  Timer? _clock;
  Timer? _moveTimer;
  bool _over = false;
  int _interval = 900;

  @override
  void initState() {
    super.initState();
    _scheduleMove();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    _moveTimer?.cancel();
    super.dispose();
  }

  void _scheduleMove() {
    _moveTimer?.cancel();
    _moveTimer = Timer(Duration(milliseconds: _interval), () {
      if (_over || !mounted) return;
      setState(() {
        _lit = _rnd.nextInt(_cols * _rows);
        _score = math.max(0, _score - 2);
      });
      _scheduleMove();
    });
  }

  void _tap(int i) {
    if (_over) return;
    if (i == _lit) {
      setState(() {
        _score += 14;
        _interval = math.max(360, _interval - 18);
        _lit = _rnd.nextInt(_cols * _rows);
      });
      HapticFeedback.lightImpact();
      _scheduleMove();
    } else {
      HapticFeedback.heavyImpact();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    _moveTimer?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: 'reflex_grid', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _left = const Duration(seconds: 30);
      _interval = 900;
      _over = false;
    });
    _scheduleMove();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: 'REFLEX GRID',
          colors: _theme,
          score: _score,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.all(28),
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: GridView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: _cols, mainAxisSpacing: 10, crossAxisSpacing: 10),
                  itemCount: _cols * _rows,
                  itemBuilder: (context, i) {
                    final on = i == _lit;
                    return GestureDetector(
                      onTap: () => _tap(i),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 140),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          gradient: on ? LinearGradient(colors: _theme) : null,
                          color: on ? null : Colors.white.withValues(alpha: 0.06),
                          boxShadow: on ? [BoxShadow(color: _theme.first.withValues(alpha: 0.6), blurRadius: 16)] : null,
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}

// ── 6. Memory Flip — find every matching pair before time runs out ──────────

class _MemCard {
  _MemCard(this.icon);
  final IconData icon;
  bool revealed = false;
  bool matched = false;
}

class NgmyVaultMemoryFlipGame extends StatefulWidget {
  const NgmyVaultMemoryFlipGame({super.key});
  @override
  State<NgmyVaultMemoryFlipGame> createState() => _MemoryFlipState();
}

class _MemoryFlipState extends State<NgmyVaultMemoryFlipGame> {
  static const _theme = [Color(0xFF2DD4BF), Color(0xFF22D3EE)];
  static const _icons = [
    Icons.star_rounded,
    Icons.favorite_rounded,
    Icons.bolt_rounded,
    Icons.pets_rounded,
    Icons.anchor_rounded,
    Icons.eco_rounded,
    Icons.diamond_rounded,
    Icons.local_fire_department_rounded,
  ];
  late List<_MemCard> _cards;
  int _score = 0;
  int? _firstIdx;
  bool _busy = false;
  Duration _left = const Duration(seconds: 45);
  Timer? _clock;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _setup();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  void dispose() {
    _clock?.cancel();
    super.dispose();
  }

  void _setup() {
    final pairs = [..._icons, ..._icons].map((i) => _MemCard(i)).toList()..shuffle();
    _cards = pairs;
  }

  void _tap(int i) {
    if (_over || _busy || _cards[i].revealed || _cards[i].matched) return;
    setState(() => _cards[i].revealed = true);
    if (_firstIdx == null) {
      _firstIdx = i;
      return;
    }
    final a = _firstIdx!;
    final b = i;
    _firstIdx = null;
    if (_cards[a].icon == _cards[b].icon) {
      setState(() {
        _cards[a].matched = true;
        _cards[b].matched = true;
        _score += 20;
      });
      HapticFeedback.mediumImpact();
      if (_cards.every((c) => c.matched)) {
        Future<void>.delayed(const Duration(milliseconds: 300), () {
          if (!mounted) return;
          setState(_setup);
        });
      }
    } else {
      _busy = true;
      HapticFeedback.heavyImpact();
      Future<void>.delayed(const Duration(milliseconds: 560), () {
        if (!mounted) return;
        setState(() {
          _cards[a].revealed = false;
          _cards[b].revealed = false;
          _busy = false;
        });
      });
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _clock?.cancel();
    setState(() => _over = true);
    final coins = _score ~/ 6;
    await VaultProgressStore.saveRun(gameId: 'memory_flip', level: 1, score: _score, coinsEarned: coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _score = 0;
      _firstIdx = null;
      _busy = false;
      _left = const Duration(seconds: 45);
      _over = false;
    });
    _setup();
    _clock = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over) return;
      setState(() => _left -= const Duration(seconds: 1));
      if (_left.inSeconds <= 0) _finish();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _chrome(
          context: context,
          title: 'MEMORY FLIP',
          colors: _theme,
          score: _score,
          timeLeft: _left,
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: GridView.builder(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 0.85),
              itemCount: _cards.length,
              itemBuilder: (context, i) {
                final c = _cards[i];
                final shown = c.revealed || c.matched;
                return GestureDetector(
                  onTap: () => _tap(i),
                  child: AnimatedSwitcher(
                    duration: const Duration(milliseconds: 220),
                    transitionBuilder: (child, anim) => ScaleTransition(scale: anim, child: child),
                    child: Container(
                      key: ValueKey('$i-$shown'),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        gradient: shown ? LinearGradient(colors: _theme) : null,
                        color: shown ? null : Colors.white.withValues(alpha: 0.07),
                        border: Border.all(color: c.matched ? const Color(0xFF34D399) : Colors.white12),
                      ),
                      alignment: Alignment.center,
                      child: shown ? Icon(c.icon, color: Colors.white, size: 26) : const Icon(Icons.help_outline_rounded, color: Colors.white24, size: 20),
                    ),
                  ),
                );
              },
            ),
          ),
        ),
        if (_over) _EndCard(score: _score, coins: _score ~/ 6, colors: _theme, onAgain: _restart, onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _score ~/ 6, score: _score))),
      ],
    );
  }
}
